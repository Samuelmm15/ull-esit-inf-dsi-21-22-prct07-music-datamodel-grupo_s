import {Song} from '../DefinitiveHierarchy/PrincipalClases/song';
import {SongCollection} from '../DefinitiveHierarchy/Collectionables/songCollection';
import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import {Artist} from '../DefinitiveHierarchy/PrincipalClases/artist';
import {MusicGenre} from '../DefinitiveHierarchy/PrincipalClases/musicGenre';

/**
 * Song entry type
 */
type schemaType = {
    Song: {name: string; author: Artist[]; songDuration: number;
      genre: MusicGenre[]; single: boolean; reproductionsNumber: number}[]
};

/**
 * Song data base class
 */
export class JsonSongCollection extends SongCollection {
  private database: lowdb.LowdbSync<schemaType>;

  /**
   * Creates the JSON file that contains the song data base
   * @param SongItems Song array
   */
  constructor(SongItems: Song[]) {
    super(SongItems);
    this.database = lowdb(new FileSync("JsonFiles/Song.json"));
    this.database.set("Song", SongItems).write();
  }

  /**
   * Adds new entries to the song data base
   * @param SongItems Song collection
   */
  restart(SongItems: SongCollection): void {
    this.database.set("Song", SongItems).write();
  }
}

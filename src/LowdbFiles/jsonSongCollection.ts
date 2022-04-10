import {Song} from '../DefinitiveHierarchy/PrincipalClases/song';
import {SongCollection} from '../DefinitiveHierarchy/Collectionables/songCollection';
import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import {Artist} from '../DefinitiveHierarchy/PrincipalClases/artist';
import {MusicGenre} from '../DefinitiveHierarchy/PrincipalClases/musicGenre';

type schemaType = {
    Song: {name: string; author: Artist[]; songDuration: number;
      genre: MusicGenre[]; single: boolean; reproductionsNumber: number}[]
};

export class JsonSongCollection extends SongCollection {
  private database: lowdb.LowdbSync<schemaType>;

  constructor(SongItems: Song[]) {
    super(SongItems);
    this.database = lowdb(new FileSync("JsonFiles/Song.json"));
    this.database.set("Song", SongItems).write();
  }

  restart(SongItems: SongCollection): void {
    this.database.set("Song", SongItems).write();
  }
}

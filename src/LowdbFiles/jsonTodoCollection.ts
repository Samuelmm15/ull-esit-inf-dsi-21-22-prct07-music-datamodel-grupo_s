import {Artist} from '../DefinitiveHierarchy/PrincipalClases/artist';
import {ArtistsCollection} from '../DefinitiveHierarchy/Collectionables/artistCollection';
import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

/**
 * Artist entry type
 */
type schemaType = {
    Artist: { name: string; group: string; genre: string;
      album: string; publishedSongs: string; monthlyListeners: number}[]
};

/**
 * Artist data base class
 */
export class JsonTodoCollection extends ArtistsCollection {
  private database: lowdb.LowdbSync<schemaType>;

  /**
   * Creates the JSON file that contains the artist item data base
   * @param ArtistItems Artist array
   */
  constructor(ArtistItems: Artist[]) {
    super(ArtistItems);
    this.database = lowdb(new FileSync("JsonFiles/Artist.json"));
    this.database.set("Artist", ArtistItems).write();
  }

  /**
   * Adds new entries to the artist data base
   * @param ArtistItems Srtist collection
   */
  restart(ArtistItems: ArtistsCollection): void {
    this.database.set("Artist", ArtistItems).write();
  }
}

import {Artist} from '../DefinitiveHierarchy/PrincipalClases/artist';
import {ArtistsCollection} from '../DefinitiveHierarchy/Collectionables/artistCollection';
import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

type schemaType = {
    Artist: { name: string; group: string; genre: string;
      album: string; publishedSongs: string; monthlyListeners: number}[]
};

export class JsonTodoCollection extends ArtistsCollection {
  private database: lowdb.LowdbSync<schemaType>;

  constructor(ArtistItems: Artist[]) {
    super(ArtistItems);
    this.database = lowdb(new FileSync("JsonFiles/Artist.json"));
    this.database.set("Artist", ArtistItems).write();
  }

  restart(ArtistItems: ArtistsCollection): void {
    this.database.set("Artist", ArtistItems).write();
  }
}

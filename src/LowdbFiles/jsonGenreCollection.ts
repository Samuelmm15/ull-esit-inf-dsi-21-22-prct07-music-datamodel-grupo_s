import {MusicGenre} from '../DefinitiveHierarchy/PrincipalClases/musicGenre';
import {GenreCollection} from '../DefinitiveHierarchy/Collectionables/genreCollection';
import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import {Group} from '../DefinitiveHierarchy/PrincipalClases/groups';
import {Artist} from '../DefinitiveHierarchy/PrincipalClases/artist';

type schemaType = {
    Genre: {name: string; group: Group; Artists: Artist;
      album: string; songs: string}[]
};

export class JsonGenreCollection extends GenreCollection {
  private database: lowdb.LowdbSync<schemaType>;

  constructor(GenreItems: MusicGenre[]) {
    super(GenreItems);
    this.database = lowdb(new FileSync("JsonFiles/Genre.json"));
    this.database.set("Genre", GenreItems).write();
  }

  restart(GenreItems: GenreCollection): void {
    this.database.set("Genre", GenreItems).write();
  }
}

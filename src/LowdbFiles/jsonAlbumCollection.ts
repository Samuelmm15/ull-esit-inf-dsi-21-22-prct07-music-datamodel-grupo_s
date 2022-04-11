import {Album} from '../DefinitiveHierarchy/PrincipalClases/album';
import {Artist} from '../DefinitiveHierarchy/PrincipalClases/artist';
import {MusicGenre} from '../DefinitiveHierarchy/PrincipalClases/musicGenre';
import {Song} from '../DefinitiveHierarchy/PrincipalClases/song';
import {Group} from '../DefinitiveHierarchy/PrincipalClases/groups';
import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

type schemaType = {
    Album: {name: string; artist: Artist[]; yearPublication: number;
      genre: MusicGenre[]; songs: Song[], group: Group[]}[];
};

export class JsonAlbumCollection {
  private database: lowdb.LowdbSync<schemaType>;

  constructor(albumItems: Album[]) {
    this.database = lowdb(new FileSync("JsonFiles/Album.json"));
    this.database.set("Album", albumItems).write();
  }

  restart(albumItem: Album): void {
    this.database.set("Album", albumItem).write();
  }
}

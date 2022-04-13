/* eslint-disable no-trailing-spaces */
import {Playlists} from '../DefinitiveHierarchy/PrincipalClases/playlist';
import {Song} from '../DefinitiveHierarchy/PrincipalClases/song';
import {MusicGenre} from '../DefinitiveHierarchy/PrincipalClases/musicGenre';
import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

/**
 * Playlist entry type
 */
type schemaType = {
    Playlist: {name: string; songs: Song[]; duration: number;
      genre: MusicGenre}[]
};

/**
 * Playlist data base class
 */
export class JsonPlaylistCollection {
  private database: lowdb.LowdbSync<schemaType>;

  /**
   * Creates the JSON file that contains the playlist data base
   * @param Playlist Playlist array
   */
  constructor(Playlist: Playlists[]) {
    this.database = lowdb(new FileSync("JsonFiles/Playlist.json"));
    if (this.database.has("Playlist")) {
      console.log('La base de datos ha sido creada');
      this.database.get("Playlist").value();
    } else {
      this.database.set("Playlist", Playlist).write();
    }
  }

  /**
   * Adds new entries to the playlist data base
   * @param Playlist Playlist array
   */
  restart(Playlist: Playlists[]): void {
    this.database.set("Playlist", Playlist).write();
  }
  read(): any {
    return this.database.get("Playlist").value();
  }
}

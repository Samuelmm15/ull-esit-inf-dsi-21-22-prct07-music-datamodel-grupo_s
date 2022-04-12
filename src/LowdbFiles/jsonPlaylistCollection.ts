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
    this.database.set("Playlist", Playlist).write();
  }
  
  restart(Playlist: Playlists[]): void {
    this.database.set("Playlist", Playlist).write();
  }
}

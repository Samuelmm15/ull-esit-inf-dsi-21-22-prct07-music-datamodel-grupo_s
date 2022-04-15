/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
import {Playlists} from '../DefinitiveHierarchy/PrincipalClases/playlist';
import {Song} from '../DefinitiveHierarchy/PrincipalClases/song';
import {MusicGenre} from '../DefinitiveHierarchy/PrincipalClases/musicGenre';
import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import {schemaType} from './jsonPlaylistCollection';
// import { PlaylistCollectionOBJ } from '..';
// import { PlaylistCollection } from '../DefinitiveHierarchy/Collectionables/playlistCollection';

/**
 * Playlist data base class
 */
let content = require('../../JsonFiles/NewPlaylists.json');

 // const content = readFileSync('../JsonFiles/Playlist.json', 'utf-8');
const data = content;
// export const NewPlaylistName: JsonNewPlaylistCollection[] = [NewcollectionPlaylists];
import {NewPlaylistName} from '../GestorClass/gestorClass';
//  for (const object in data) {
//    if (data.hasOwnProperty(object)) {
//      const element = data[object];
//      NewPlaylistName.push(element);
//    }
export class JsonNewPlaylistCollection {
  private database: lowdb.LowdbSync<schemaType>;

  /**
   * Creates the JSON file that contains the playlist data base
   * @param Playlist Playlist array
  */
  constructor(Playlist: Playlists[]) {
    this.database = lowdb(new FileSync("JsonFiles/NewPlaylists.json"));
    if (this.database.has("Playlist")) {
      console.log('La base de datos ha sido creada');
      // this.database.read();
    } else {
      this.database.set("Playlist", Playlist).write();
    }
  }

  /**
   * Adds new entries to the playlist data base
   * @param Playlist Playlist array
   */
  restart(Playlist: Playlists[]): void {
    // const PlaylistCollectionOBJaux = new PlaylistCollection([]);
    // if (PlaylistCollectionOBJaux.getPlaylistArray().length === 0) {
    //   this.database.set("Playlist", Playlist).write();
    // } else {
    //   PlaylistCollectionOBJaux.getPlaylistArray().forEach((element) => {
    //     PlaylistCollectionOBJ.addPlaylist(element);
    //     this.database.set("Playlist", Playlist).write();
    //   });
    //   this.database.set("Playlist", Playlist).write();
    // }
    // this.database.read();
    for (const object in data) {
      if (data.hasOwnProperty(object)) {
        const element = data[object];
        NewPlaylistName.push(element);
      }
    }
    this.database.set("Playlist", Playlist).write();
  }
  getSuperPlaylist(playlist: Playlists): Playlists {
    return playlist;
  }

  read(): Playlists | any {
    // console.log(this.database.read());
    const Playlist: Playlists[] = [];
    return this.database.get("Playlist", Playlist).value();
    // console.log(Playlist);
  }
  write(data: any): void {
    this.database.set("Playlist", data).write();
  }
  /** We get the value from the lowdb database ***/
  // getValue(): Playlists[] {
  //   return this.database.get("Playlist").value();
  // }
  /** We get the entire object from the lowdb array database ***/
  // getObject(): schemaType {
  //   return this.database.get("Playlist").value();
  // }
  // getwraped(): void| lowdb.LowdbSync<schemaType> {
  //   //return this.database;
  // }
}

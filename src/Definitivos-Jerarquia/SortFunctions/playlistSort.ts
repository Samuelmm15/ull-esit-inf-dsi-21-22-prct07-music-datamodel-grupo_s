/* eslint-disable prefer-const */
import {GeneralSort} from './abstractSort';
import {Playlists} from '../Principal-Clases/playlist';

// FALTA DEVOLVER DE MANERA CORRECTA LOS OBJETOS DE TIPO PLAYLIST

export class PlaylistSort extends GeneralSort<Playlists> {
  constructor(protected playlist: Playlists[]) {
    super();
  }
  greaterSort(): Playlists[] {
    let auxiliary: string[] = [];
    for (let i = 0; i < this.playlist.length; i++) {
      auxiliary.push(this.playlist[i].getName());
    }
    auxiliary.sort();
    let result: Playlists[] = [];
    return result;
  }
  lowerSort(): Playlists[] {
    let auxiliary: string[] = [];
    for (let i = 0; i < this.playlist.length; i++) {
      auxiliary.push(this.playlist[i].getName());
    }
    auxiliary.reverse().sort();
    let result: Playlists[] = [];
    return result;
  }
}

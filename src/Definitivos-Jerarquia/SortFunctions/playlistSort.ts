/* eslint-disable prefer-const */
import {GeneralSort} from './abstractSort';
import {Playlists} from '../Principal-Clases/playlist';

export class PlaylistNameSort extends GeneralSort<Playlists> {
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
    for (let i = 0; i < auxiliary.length; i++) {
      for (let j = 0; j < this.playlist.length; j++) {
        if (this.playlist[j].getName() === auxiliary[i]) {
          result.push(this.playlist[j]);
        }
      }
    }
    return result;
  }
  lowerSort(): Playlists[] {
    let auxiliary: string[] = [];
    for (let i = 0; i < this.playlist.length; i++) {
      auxiliary.push(this.playlist[i].getName());
    }
    auxiliary.reverse().sort();
    let result: Playlists[] = [];
    for (let i = 0; i < auxiliary.length; i++) {
      for (let j = 0; j < this.playlist.length; j++) {
        if (this.playlist[j].getName() === auxiliary[i]) {
          result.push(this.playlist[j]);
        }
      }
    }
    return result;
  }
}

/* eslint-disable prefer-const */
/* eslint-disable camelcase */
import {GeneralSort} from './abstractSort';
import {Artist} from '../PrincipalClases/artist';

export class ArtistNameSort extends GeneralSort<Artist> {
  constructor(protected artist: Artist[]) {
    super();
  }
  greaterSort(): Artist[] {
    let auxiliary: string[] = [];
    for (let i = 0; i < this.artist.length; i++) {
      auxiliary.push(this.artist[i].getName());
    }
    auxiliary.sort();
    let result: Artist[] = [];
    for (let i = 0; i < auxiliary.length; i++) {
      for (let j = 0; j < this.artist.length; j++) {
        if (this.artist[j].getName() === auxiliary[i]) {
          result.push(this.artist[j]);
        }
      }
    }

    return result;
  }
  lowerSort(): Artist[] {
    let auxiliary: string[] = [];
    for (let i = 0; i < this.artist.length; i++) {
      auxiliary.push(this.artist[i].getName());
    }
    auxiliary.sort().reverse();
    let result: Artist[] = [];
    for (let i = 0; i < auxiliary.length; i++) {
      for (let j = 0; j < this.artist.length; j++) {
        if (this.artist[j].getName() === auxiliary[i]) {
          result.push(this.artist[j]);
        }
      }
    }

    return result;
  }
}

/* eslint-disable prefer-const */
/* eslint-disable camelcase */
import {GeneralSort} from './abstractSort';
import {Album} from '../Principal-Clases/album';

// FALTA DEVOLVER DE MANERA CORRECTA LOS OBJETOS DE TIPO ALBUM

export class AlbumSort extends GeneralSort<Album> {
  constructor(protected album: Album[]) {
    super();
  }
  greaterSort(): Album[] {
    let auxiliary: string[] = [];
    for (let i = 0; i < this.album.length; i++) {
      auxiliary.push(this.album[i].getName());
    }
    auxiliary.sort();
    console.log(auxiliary);
    let result: Album[] = [];
    return result;
  }
  lowerSort(): Album[] {
    let auxiliary: string[] = [];
    for (let i = 0; i < this.album.length; i++) {
      auxiliary.push(this.album[i].getName());
    }
    auxiliary.sort().reverse();
    console.log(auxiliary);
    let result: Album[] = [];
    return result;
  }
}

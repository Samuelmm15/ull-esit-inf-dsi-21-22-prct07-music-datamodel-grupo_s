/* eslint-disable camelcase */
import {GeneralSort} from './abstractSort';
import {Song} from '../Principal-Clases/song';
import {SongCollection} from '../Collectionables/songCollection';

export class ReproductionNumberSort extends GeneralSort<SongCollection> {
  constructor(protected songs: SongCollection) {
    super();
  }
  lowerSort(): SongCollection {
    const ReproductionSort: number[] = [];
    let i: number = 0;
    let auxiliary: Song[] = [];
    for (i = 0; i < this.songs.getColectionlength(); i++) {
      auxiliary.push(this.songs.getnObject(i));
    }
    i = 0;
    for (i = 0; i < auxiliary.length; i++) {
      ReproductionSort.push(auxiliary[i].getReproductionsNumber());
    }
    ReproductionSort.sort();
    auxiliary = [];
    i = 0;
    for (i = 0; i < this.songs.getColectionlength(); i++) {
      auxiliary.push(this.songs.getReproductionsNumber(ReproductionSort[i]) as Song);
    }

    console.log(ReproductionSort);
    const result: SongCollection = new SongCollection(auxiliary);
    return result;
  }
  greaterSort(): SongCollection {
    const ReproductionSort: number[] = [];
    let i: number = 0;
    let auxiliary: Song[] = [];
    for (i = 0; i < this.songs.getColectionlength(); i++) {
      auxiliary.push(this.songs.getnObject(i));
    }
    i = 0;
    for (i = 0; i < auxiliary.length; i++) {
      ReproductionSort.push(auxiliary[i].getReproductionsNumber());
    }
    ReproductionSort.sort().reverse();
    auxiliary = [];
    i = 0;
    for (i = 0; i < this.songs.getColectionlength(); i++) {
      auxiliary.push(this.songs.getReproductionsNumber(ReproductionSort[i]) as Song);
    }
    console.log(ReproductionSort);
    const result: SongCollection = new SongCollection(auxiliary);
    return result;
  }
}

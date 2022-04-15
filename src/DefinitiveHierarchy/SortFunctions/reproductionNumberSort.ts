/* eslint-disable camelcase */
import {GeneralSort} from './abstractSort';
import {Song} from '../PrincipalClases/song';
import {SongCollection} from '../Collectionables/songCollection';

/**
 * Class that sorts songs objects by reproductions
 */
export class ReproductionNumberSort extends GeneralSort<SongCollection> {
  /**
   * Recieves a song collection
   */
  constructor(protected songs: SongCollection) {
    super();
  }
  /**
   * Ascendent ordenation of the songs by reproductions
   * @returns Song collection with sorted songs by reproductions
   */
  greaterSort(): SongCollection {
    const ReproductionSort: number[] = [];
    let auxiliary: Song[] = [];
    for (let i = 0; i < this.songs.getColectionlength(); i++) {
      auxiliary.push(this.songs.getnObject(i));
    }

    for (let i = 0; i < auxiliary.length; i++) {
      ReproductionSort.push(auxiliary[i].getReproductionsNumber());
    }
    ReproductionSort.sort();
    auxiliary = [];

    for (let i = 0; i < this.songs.getColectionlength(); i++) {
      auxiliary.push(this.songs.getReproductionsNumber(ReproductionSort[i]) as Song);
      console.log(`${auxiliary[i].getName()} ==> ${auxiliary[i].getReproductionsNumber()}`);
    }

    const result: SongCollection = new SongCollection(auxiliary);
    return result;
  }
  /**
   * Descendent ordenation of the songs by reproductions
   * @returns Song collection with sorted songs by reproductions
   */
  lowerSort(): SongCollection {
    const ReproductionSort: number[] = [];
    let auxiliary: Song[] = [];
    for (let i = 0; i < this.songs.getColectionlength(); i++) {
      auxiliary.push(this.songs.getnObject(i));
    }

    for (let i = 0; i < auxiliary.length; i++) {
      ReproductionSort.push(auxiliary[i].getReproductionsNumber());
    }
    ReproductionSort.sort().reverse();
    auxiliary = [];

    for (let i = 0; i < this.songs.getColectionlength(); i++) {
      auxiliary.push(this.songs.getReproductionsNumber(ReproductionSort[i]) as Song);
      console.log(`${auxiliary[i].getName()} ==> ${auxiliary[i].getReproductionsNumber()}`);
    }
    const result: SongCollection = new SongCollection(auxiliary);
    return result;
  }
}

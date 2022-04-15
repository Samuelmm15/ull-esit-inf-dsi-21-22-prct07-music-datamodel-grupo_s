/* eslint-disable prefer-const */
/* eslint-disable camelcase */
import {GeneralSort} from './abstractSort';
import {Song} from '../PrincipalClases/song';
import {SongCollection} from '../Collectionables/songCollection';

/**
 * Class that sorts song objects by duration
 */
export class SongDurationSort extends GeneralSort<SongCollection> {
  /**
   * Recieves a song collection
   */
  constructor(protected song: SongCollection) {
    super();
  }
  /**
   * Ascendent ordenation of the songs by duration
   * @returns Songs collection with sorted songs by duration
   */
  greaterSort(): SongCollection {
    const ReproductionSort: number[] = [];
    let i: number = 0;
    let auxiliary: Song[] = [];
    for (i = 0; i < this.song.getColectionlength(); i++) {
      auxiliary.push(this.song.getnObject(i));
    }
    i = 0;
    for (i = 0; i < auxiliary.length; i++) {
      ReproductionSort.push(auxiliary[i].durationFormat());
    }
    ReproductionSort.sort();
    auxiliary = [];
    i = 0;
    for (i = 0; i < this.song.getColectionlength(); i++) {
      auxiliary.push(this.song.getDuration(ReproductionSort[i]) as Song);
      console.log(`${auxiliary[i].getName()} ==> ${auxiliary[i].getSongDuration()}`);
    }

    // console.log(ReproductionSort);
    const result: SongCollection = new SongCollection(auxiliary);
    return result;
  }
  /**
   * Ascendent ordenation of the songs by duration
   * @returns Songs collection with sorted songs by duration
   */
  lowerSort(): SongCollection {
    const ReproductionSort: number[] = [];
    let i: number = 0;
    let auxiliary: Song[] = [];
    for (i = 0; i < this.song.getColectionlength(); i++) {
      auxiliary.push(this.song.getnObject(i));
    }
    i = 0;
    for (i = 0; i < auxiliary.length; i++) {
      ReproductionSort.push(auxiliary[i].durationFormat());
    }
    ReproductionSort.sort().reverse();
    auxiliary = [];
    i = 0;
    for (i = 0; i < this.song.getColectionlength(); i++) {
      auxiliary.push(this.song.getDuration(ReproductionSort[i]) as Song);
      console.log(`${auxiliary[i].getName()} ==> ${auxiliary[i].getSongDuration()}`);
    }
    const result: SongCollection = new SongCollection(auxiliary);
    return result;
  }
}

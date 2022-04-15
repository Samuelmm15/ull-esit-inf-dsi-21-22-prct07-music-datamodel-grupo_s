/* eslint-disable camelcase */
import {GeneralSort} from './abstractSort';
import {Song} from '../PrincipalClases/song';
import {SongCollection} from '../Collectionables/songCollection';

/**
 * Class that sorts song objects by name
 */
export class TitleSongSort extends GeneralSort<SongCollection> {
  constructor(protected songs: SongCollection) {
    super();
  }
  /**
   * Ascendent ordenation of the songs by name
   * @returns Song collection with sorted songs by name
   */
  greaterSort(): SongCollection {
    const greaterTitleSort: string[] = [];
    let i: number = 0;
    let auxiliary: Song[] = [];
    for (i = 0; i < this.songs.getColectionlength(); i++) {
      auxiliary.push(this.songs.getnObject(i));
    }
    i = 0;
    for (i = 0; i < auxiliary.length; i++) {
      greaterTitleSort.push(auxiliary[i].getName());
    }
    greaterTitleSort.sort();
    auxiliary = [];
    i = 0;
    for (i = 0; i < this.songs.getColectionlength(); i++) {
      auxiliary.push(this.songs.getSong(greaterTitleSort[i]) as Song);
      console.log(greaterTitleSort[i]);
    }
    const result: SongCollection = new SongCollection(auxiliary);
    return result;
  }
  /**
   * Descendent ordenation of the songs by name
   * @returns Song collection with sorted songs by name
   */
  lowerSort(): SongCollection {
    const lowerTitleSort: string[] = [];
    let i: number = 0;
    let auxiliary: Song[] = [];
    for (i = 0; i < this.songs.getColectionlength(); i++) {
      auxiliary.push(this.songs.getnObject(i));
    }
    i = 0;
    for (i = 0; i < auxiliary.length; i++) {
      lowerTitleSort.push(auxiliary[i].getName());
    }
    lowerTitleSort.sort().reverse();
    auxiliary = [];
    i = 0;
    for (i = 0; i < this.songs.getColectionlength(); i++) {
      auxiliary.push(this.songs.getSong(lowerTitleSort[i]) as Song);
      console.log(lowerTitleSort[i]);
    }
    const result: SongCollection = new SongCollection(auxiliary);
    return result;
  }
}

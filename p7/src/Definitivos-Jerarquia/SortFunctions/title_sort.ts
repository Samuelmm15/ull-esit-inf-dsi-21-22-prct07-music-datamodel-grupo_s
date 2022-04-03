import {GeneralSort} from './abstractSort';
import {SongCollection} from '../Collectionables/songCollection';

class Title_Sort extends GeneralSort<SongCollection> {
  constructor(protected songs: SongCollection) {
    super();
  }
  greaterSort(): SongCollection {
    let greaterTitleSort: SongCollection;
    let i: number = 0;
    return greaterTitleSort;
  }
  lowerSort(): SongCollection {
    let lowerTitleSort: SongCollection;
    return lowerTitleSort;
  }
}

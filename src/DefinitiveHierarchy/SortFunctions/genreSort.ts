import {GeneralSort} from './abstractSort';
import {MusicGenre} from '../PrincipalClases/musicGenre';
import {GenreCollection} from '../Collectionables/genreCollection';

/**
 * Class that sorts genre objects by name
 */
export class GenreSort extends GeneralSort<GenreCollection> {
  /**
   * Recieves a music genre array
   */
  constructor(protected genreList: GenreCollection) {
    super();
  }
  /**
   * Ascendent ordenation of the music genre by name
   * @returns Music genre collection with sorted music genre by name
   */
  greaterSort(): GenreCollection {
    const greaterGenreSort: string[] = [];
    let auxiliary: MusicGenre[] = [];
    for (let i = 0; i < this.genreList.getColectionlength(); i++) {
      auxiliary.push(this.genreList.getnObject(i));
    }
    for (let i = 0; i < auxiliary.length; i++) {
      greaterGenreSort.push(auxiliary[i].getName());
    }
    greaterGenreSort.sort();
    auxiliary = [];
    for (let i = 0; i < this.genreList.getColectionlength(); i++) {
      auxiliary.push(this.genreList.getGenre(greaterGenreSort[i]) as MusicGenre);
      console.log(greaterGenreSort[i]);
    }
    const result: GenreCollection = new GenreCollection(auxiliary);
    return result;
  }
  /**
   * Descendent ordenation of the music genre by name
   * @returns Music genre collection with sorted music genre by name
   */
  lowerSort(): GenreCollection {
    const greaterGenreSort: string[] = [];
    let auxiliary: MusicGenre[] = [];
    for (let i = 0; i < this.genreList.getColectionlength(); i++) {
      auxiliary.push(this.genreList.getnObject(i));
    }
    for (let i = 0; i < auxiliary.length; i++) {
      greaterGenreSort.push(auxiliary[i].getName());
    }
    greaterGenreSort.sort().reverse();
    auxiliary = [];
    for (let i = 0; i < this.genreList.getColectionlength(); i++) {
      auxiliary.push(this.genreList.getGenre(greaterGenreSort[i]) as MusicGenre);
      console.log(greaterGenreSort[i]);
    }
    const result: GenreCollection = new GenreCollection(auxiliary);
    return result;
  }
}

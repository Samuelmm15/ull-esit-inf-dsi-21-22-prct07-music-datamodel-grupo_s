import {GeneralSort} from './abstractSort';
import {MusicGenre} from '../PrincipalClases/musicGenre';
import {GenreCollection} from '../Collectionables/genreCollection';

export class GenreSort extends GeneralSort<GenreCollection> {
  constructor(protected genreList: GenreCollection) {
    super();
  }
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
    }
    console.log(greaterGenreSort);
    const result: GenreCollection = new GenreCollection(auxiliary);
    return result;
  }
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
    }
    console.log(greaterGenreSort);
    const result: GenreCollection = new GenreCollection(auxiliary);
    return result;
  }
}
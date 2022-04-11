/* eslint-disable linebreak-style */
import {BasicStreamableCollection} from './basicstreamablecollection';
import {MusicGenre} from '../PrincipalClases/musicGenre';
import {Group} from '../PrincipalClases/groups';
import {Artist} from '../PrincipalClases/artist';

export class GenreCollection extends BasicStreamableCollection<MusicGenre> {
  constructor(protected genres: MusicGenre[]) {
    super(genres);
  }
  public addGenre(genre: MusicGenre) {
    this.genres.push(genre);
  }
  public getGenre(genreName: string): MusicGenre | string {
    for (let i = 0; i < this.genres.length; i++) {
      if (this.genres[i].getName() === genreName) {
        return this.genres[i];
      }
    }
    return 'No existe el género';
  }
  public getArtist(authorName: Artist): Artist | string {
    for (let i = 0; i < this.genres.length; i++) {
      if (this.genres[i].getArtists(authorName.getName()) === authorName) {
        return this.genres[i].getArtists(authorName.getName());
      }
    }
    return 'No existe el Artista que desea obtener';
  }
  public getGroups(groupName: Group): Group | string {
    for (let i = 0; i < this.genres.length; i++) {
      if (this.genres[i].getGroups(groupName.getName()) === groupName) {
        return this.genres[i].getGroups(groupName.getName());
      }
    }
    return 'No existe el Grupo que desea obtener';
  }
  public getName(genreName: string): string {
    let success: string = ``;
    for (let i = 0; i < this.genres.length; i++) {
      if (this.genres[i].getName() === genreName) {
        success = this.genres[i].getName();
      }
    }
    if (success === ``) {
      success = `No existe el género que desea buscar`;
    }
    return success;
  }
  private removeArtist(index: number): MusicGenre[] {
    this.genres.splice(index, 1);
    return this.genres;
  }
  public getRemoveIndex(genreName: string): MusicGenre[] {
    let i = 0;
    for (i = 0; i < this.genres.length; i++) {
      if (this.genres[i].getName() === genreName) {
        break;
      }
    }
    return this.removeArtist(i);
  }
  public getColectionlength(): number {
    return this.genres.length;
  }
  public getnObject(position: number): MusicGenre {
    return this.genres[position];
  }
}

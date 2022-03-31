/* eslint-disable linebreak-style */
import {BasicStreamableCollection} from './basicstreamablecollection';
import {MusicGenre} from '../Principal-Clases/musicGenre';
import {Group} from '../Principal-Clases/groups';
import {Artist} from '../Principal-Clases/artist';

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
  public getArtist(author: Artist): Artist | string {
    for (let i = 0; i < this.genres.length; i++) {
      if (this.genres[i].getArtists() === author) {
        return this.genres[i].getArtists();
      }
    }
    return 'No existe el Artista que desea obtener';
  }
  public getGroups(groupName: Group): Group | string {
    for (let i = 0; i < this.genres.length; i++) {
      if (this.genres[i].getGroups() === groupName) {
        return this.genres[i].getGroups();
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
}

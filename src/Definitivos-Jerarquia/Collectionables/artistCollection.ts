/* eslint-disable linebreak-style */
import {BasicStreamableCollection} from './basicstreamablecollection';
import {Artist} from '../Principal-Clases/artist';

export class ArtistsCollection extends BasicStreamableCollection<Artist> {
  constructor(protected artists: Artist[]) {
    super(artists);
  }
  public addArtist(author: Artist) {
    this.artists.push(author);
  }
  public getArtist(author: string): Artist | string {
    for (let i = 0; i < this.artists.length; i++) {
      if (this.artists[i].getName() === author) {
        return this.artists[i];
      }
    }
    return `No existe el artista que desea obtener`;
  }
  public getName(author: string): string {
    let success: string = ``;
    for (let i = 0; i < this.artists.length; i++) {
      if (this.artists[i].getName() === author) {
        success = this.artists[i].getName();
      }
    }
    if (success === ``) {
      success = `No existe el artista a buscar`;
    }
    return success;
  }
  public getGroup(groupName: string): string {
    let success: string = ``;
    for (let i = 0; i < this.artists.length; i++) {
      if (this.artists[i].getGroup() === groupName) {
        success = this.artists[i].getGroup();
      }
    }
    if (success === ``) {
      success = `No existe el grupo a buscar`;
    }
    return success;
  }
  public getGenre(genre: string): string {
    let success: string = ``;
    for (let i = 0; i < this.artists.length; i++) {
      if (this.artists[i].getGenre() === genre) {
        success = this.artists[i].getGenre();
      }
    }
    if (success === ``) {
      success = `No existe el género a buscar`;
    }
    return success;
  }
  public getAlbum(albumName: string): string {
    let success: string = ``;
    for (let i = 0; i < this.artists.length; i++) {
      if (this.artists[i].getAlbum() === albumName) {
        success = this.artists[i].getAlbum();
      }
    }
    if (success === ``) {
      success = `No existe el álbum a buscar`;
    }
    return success;
  }
  public getPublishedSongs(author: string): string {
    let success: string = ``;
    for (let i = 0; i < this.artists.length; i++) {
      if (this.artists[i].getName() === author) {
        success = this.artists[i].getPublishedSongs();
      }
    }
    if (success === ``) {
      success = `No existe el grupo a buscar`;
    }
    return success;
  }
  public getMonthlyListeners(author: string): number {
    let success: number = 0;
    for (let i = 0; i < this.artists.length; i++) {
      if (this.artists[i].getName() === author) {
        success = this.artists[i].getMonthlyListeners();
      }
    }
    if (success === 0) {
      success = -1;
    }
    return success;
  }
  private removeArtist(index: number): Artist[] {
    this.artists.splice(index, 1);
    return this.artists;
  }
  public getRemoveIndex(songName: string): Artist[] {
    let i = 0;
    for (i = 0; i < this.artists.length; i++) {
      if (this.artists[i].getName() === songName) {
        break;
      }
    }
    return this.removeArtist(i);
  }
}

/* eslint-disable linebreak-style */
import {BasicStreamableCollection} from './basicstreamablecollection';
import {Artist} from '../PrincipalClases/artist';

/**
 * Collection of artists
 */
export class ArtistsCollection extends BasicStreamableCollection<Artist> {
  /**
   * Recieves an artist array
   * @param artists Artist array
   */
  constructor(protected artists: Artist[]) {
    super(artists);
  }
  /**
   * Adds an artist object to the collection
   * @param author Authors of any song
   */
  public addArtist(author: Artist) {
    this.artists.push(author);
  }
  /**
   * Gets the artist object of the collection
   * @param author Artist element
   */
  public getArtist(author: string): Artist | string {
    for (let i = 0; i < this.artists.length; i++) {
      if (this.artists[i].getName() === author) {
        return this.artists[i];
      }
    }
    return `No existe el artista que desea obtener`;
  }
  /**
   * Gets the artist name 
   * @param author Author name
   * @return Artist name 
   */
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
  /**
   * Gets the artists groups 
   * @param groupName Group name
   * @return Artist group
   */
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
  /**
   * Gets the artist genre/s
   * @param genre 
   * @return 
   */
  public getGenre(genre: string): string {
    let success: string = ``;
    for (let i = 0; i < this.artists.length; i++) {
      if (this.artists[i].getGenre(genre) === genre) {
        success = this.artists[i].getGenre(genre);
      }
    }
    if (success === ``) {
      success = `No existe el genero a buscar`;
    }
    return success;
  }
  /**
   * Gets the artists album
   * @param albumName Album name
   * @return Artist album
   */
  public getAlbum(albumName: string): string {
    let success: string = ``;
    for (let i = 0; i < this.artists.length; i++) {
      if (this.artists[i].getAlbum(albumName) === albumName) {
        success = this.artists[i].getAlbum(albumName);
      }
    }
    if (success === ``) {
      success = `No existe el álbum a buscar`;
    }
    return success;
  }
  /**
   * Gets the artists published songs 
   * @param author Author name
   * @return Artist published songs
   */
  public getPublishedSongs(author: string): number {
    let success: number = 0;
    for (let i = 0; i < this.artists.length; i++) {
      if (this.artists[i].getName() === author) {
        success = this.artists[i].getPublishedSongs();
      }
    }
    if (success === 0) {
      console.log('No existe el grupo a buscar');
    }
    return success;
  }
  /**
   * Gets the artists monthly listeners 
   * @param author Author name
   * @return Artist monthly listeners
   */
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
  /**
   * Remove an artist of the collection
   * @param index Index of the element to be removed
   * @return The artist array without the deleted element
   */ 
  private removeArtist(index: number): Artist[] {
    this.artists.splice(index, 1);
    return this.artists;
  }
  /**
   * Gets the index of the element to be deleted
   * @param artistName Name of the artist
   * @return The index of the element that wants to be deleted
   */
  public getRemoveArtist(artistName: string): Artist[] {
    let i = 0;
    for (i = 0; i < this.artists.length; i++) {
      if (this.artists[i].getName() === artistName) {
        break;
      }
    }
    return this.removeArtist(i);
  }
  /**
   * The lenght of the artist array
   * @returns The array lenght
   */
  public getArtistsCollectionLength(): number {
    return this.artists.length;
  }
  /**
   * The artist array
   * @param iteration The index of the element
   * @returns Artist object
   */
  public getArtistList(iteration: number): string {
    return this.artists[iteration].getName();
  }
}

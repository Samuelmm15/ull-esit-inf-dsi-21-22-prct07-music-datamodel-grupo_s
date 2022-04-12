/* eslint-disable linebreak-style */
import {BasicStreamableCollection} from './basicstreamablecollection';
import {MusicGenre} from '../PrincipalClases/musicGenre';
import {Group} from '../PrincipalClases/groups';
import {Artist} from '../PrincipalClases/artist';

/**
 * Collection of music genres
 */
export class GenreCollection extends BasicStreamableCollection<MusicGenre> {
  /**
   * Recieves a genre array
   * @param genres Genre array
   */
  constructor(protected genres: MusicGenre[]) {
    super(genres);
  }
  /**
   * Adds a genre object to the collection
   * @param genre Music genre 
   */
  public addGenre(genre: MusicGenre) {
    this.genres.push(genre);
  }
  /**
   * Gets a genre object of the collection
   * @param genreName Music genre
   */
  public getGenre(genreName: string): MusicGenre | string {
    for (let i = 0; i < this.genres.length; i++) {
      if (this.genres[i].getName() === genreName) {
        return this.genres[i];
      }
    }
    return 'No existe el género';
  }
  /**
   * Gets the genre of an artist
   * @param authorName Artist object
   * @returns The artists of a music genre
   */
  public getArtist(authorName: Artist): Artist | string {
    for (let i = 0; i < this.genres.length; i++) {
      if (this.genres[i].getArtists(authorName.getName()) === authorName) {
        return this.genres[i].getArtists(authorName.getName());
      }
    }
    return 'No existe el Artista que desea obtener';
  }
  /**
   * Gets the genre of the group
   * @param groupName Group name
   * @return Gropu genre/s
   */
  public getGroups(groupName: Group): Group | string {
    for (let i = 0; i < this.genres.length; i++) {
      if (this.genres[i].getGroups(groupName.getName()) === groupName) {
        return this.genres[i].getGroups(groupName.getName());
      }
    }
    return 'No existe el Grupo que desea obtener';
  }
  /**
   * Gets the genre name
   * @param genreName Genre name
   * @return Genre name
   */
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
  /**
   * Remove a genre of the collection
   * @param index Index of the element to be removed
   * @return The artist array without the deleted element
   */ 
  private removeArtist(index: number): MusicGenre[] {
    this.genres.splice(index, 1);
    return this.genres;
  }
  /**
   * Gets the index of the element to be deleted
   * @param genreName Name of the genre
   * @return The index of the element that wants to be deleted
   */
  public getRemoveIndex(genreName: string): MusicGenre[] {
    let i = 0;
    for (i = 0; i < this.genres.length; i++) {
      if (this.genres[i].getName() === genreName) {
        break;
      }
    }
    return this.removeArtist(i);
  }
  /**
   * The lenght of the genre array
   * @returns The array lenght 
   */
  public getColectionlength(): number {
    return this.genres.length;
  }
  /**
   * The genre array
   * @param position The index of the element
   * @returns Genre object 
   */
  public getnObject(position: number): MusicGenre {
    return this.genres[position];
  }
}

/* eslint-disable linebreak-style */
import {BasicStreamableCollection} from './basicstreamablecollection';
import {Song} from '../PrincipalClases/song';
import {Artist} from '../PrincipalClases/artist';

/**
 * Collection of songs
 */
export class SongCollection extends BasicStreamableCollection<Song> {
  /**
   * Recieves a song array
   * @param songs Song array
   */
  constructor(protected songs: Song[]) {
    super(songs);
  }
  /**
   * Adds a song object to the collection
   * @param song Authors of any song
   */
  public addSong(song: Song) {
    this.songs.push(song);
  }
  /**
   * Gets the song object of the collection
   * @param songName Playlist element
   */
  public getSong(songName: string): Song {
    let result: Song = this.songs[0];
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i].getName() === songName) {
        result = this.songs[i];
      }
    }
    return result;
  }
  /**
   * Gets the song author of the collection
   * @param authorName Author name
   */
  public getSongAuthor(authorName: Artist): Artist | string {
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i].getAuthor(authorName.getName()) === authorName) {
        return this.songs[i].getAuthor(authorName.getName());
      }
    }
    return `No existe el autor que intenta buscar`;
  }
  /**
   * Gets the song name
   * @param songName Song name
   * @returns Song name
   */
  public getName(songName: string): string {
    let success: string = ``;
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i].getName() === songName) {
        success = this.songs[i].getName();
      }
    }
    if (success === ``) {
      success = `No existe la canción a buscar`;
    }
    return success;
  }
  /**
   * Gets the song with a specific repoduction number
   * @param reproductionsNumber Song reproduction number
   * @returns Song with a specific number of repoductions
   */
  public getReproductionsNumber(reproductionsNumber: number): Song | string {
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i].getReproductionsNumber() === reproductionsNumber) {
        return this.songs[i];
      }
    }
    return `No existe la canción que intenta buscar`;
  }
  /**
   * Gets the song with a specific duration
   * @param duration Song duration
   * @returns Song with a specific duration
   */
  public getDuration(duration: number): Song | string {
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i].durationFormat() === duration) {
        return this.songs[i];
      }
    }
    return `No existe la canción que intenta buscar`;
  }
  /**
   * Remove a song of the collection
   * @param index Index of the element to be removed
   * @return The artist array without the deleted element
   */
  private removeSong(index: number): Song[] {
    this.songs.splice(index, 1);
    return this.songs;
  }
  /**
   * Gets the index of the element to be deleted
   * @param songName Name of the song
   * @return The index of the element that wants to be deleted
   */
  public getRemoveIndex(songName: string): Song[] {
    let i = 0;
    for (i = 0; i < this.songs.length; i++) {
      if (this.songs[i].getName() === songName) {
        break;
      }
    }
    return this.removeSong(i);
  }
  /**
   * The lenght of the song array
   * @returns The array lenght
   */
  public getColectionlength(): number {
    return this.songs.length;
  }
  /**
   * The song object
   * @param position The index of the element
   * @returns Song object
   */
  public getnObject(position: number): Song {
    return this.songs[position];
  }
  /**
   * Gets the song collection
   * @returns Song array
   */
  public getSongArray(): Song[] {
    return this.songs;
  }
}

/* eslint-disable linebreak-style */
import {BasicStreamableCollection} from './basicstreamablecollection';
import {Song} from '../PrincipalClases/song';
import {Artist} from '../PrincipalClases/artist';

export class SongCollection extends BasicStreamableCollection<Song> {
  constructor(protected songs: Song[]) {
    super(songs);
  }
  public addSong(song: Song) {
    this.songs.push(song);
  }
  public getSong(songName: string): Song {
    let result: Song = this.songs[0];
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i].getName() === songName) {
        result = this.songs[i];
      }
    }
    return result;
  }
  public getSongAuthor(authorName: Artist): Artist | string {
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i].getAuthor(authorName.getName()) === authorName) {
        return this.songs[i].getAuthor(authorName.getName());
      }
    }
    return `No existe el autor que intenta buscar`;
  }
  public getName(authorName: string): string {
    let success: string = ``;
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i].getName() === authorName) {
        success = this.songs[i].getName();
      }
    }
    if (success === ``) {
      success = `No existe la canción a buscar`;
    }
    return success;
  }
  public getReproductionsNumber(reproductionsNumber: number): Song | string {
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i].getReproductionsNumber() === reproductionsNumber) {
        return this.songs[i];
      }
    }
    return `No existe la canción que intenta buscar`;
  }
  public getDuration(duration: number): Song | string {
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i].durationFormat() === duration) {
        return this.songs[i];
      }
    }
    return `No existe la canción que intenta buscar`;
  }
  private removeSong(index: number): Song[] {
    this.songs.splice(index, 1);
    return this.songs;
  }
  public getRemoveIndex(songName: string): Song[] {
    let i = 0;
    for (i = 0; i < this.songs.length; i++) {
      if (this.songs[i].getName() === songName) {
        break;
      }
    }
    return this.removeSong(i);
  }
  public getColectionlength(): number {
    return this.songs.length;
  }
  public getnObject(position: number): Song {
    return this.songs[position];
  }
  public getSongArray(): Song[] {
    return this.songs;
  }
}

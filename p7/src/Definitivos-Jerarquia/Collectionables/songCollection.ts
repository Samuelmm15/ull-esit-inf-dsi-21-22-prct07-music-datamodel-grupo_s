/* eslint-disable linebreak-style */
import {BasicStreamableCollection} from './basicstreamablecollection';
import {Song} from '../Principal-Clases/song';
import {Artist} from '../Principal-Clases/artist';

export class SongCollection extends BasicStreamableCollection<Song> {
  constructor(protected songs: Song[]) {
    super(songs);
  }
  public addSong(song: Song) {
    this.songs.push(song);
  }
  public getSongAuthor(author: Artist): Artist | string {
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i].getAuthor() === author) {
        return this.songs[i].getAuthor();
      }
    }
    return `No existe el autor que intenta buscar`;
  }
  public getName(author: string): string {
    let success: string = ``;
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i].getName() === author) {
        success = this.songs[i].getName();
      }
    }
    if (success === ``) {
      success = `No existe la canción a buscar`;
    }
    return success;
  }
  public removeSong(index: number) {
    this.songs.splice(index, 1);
    return this.songs;
  }
  public getRemoveIndex(songName: string) {
    this.songs.forEach((song) => {
      
    });
  }
}

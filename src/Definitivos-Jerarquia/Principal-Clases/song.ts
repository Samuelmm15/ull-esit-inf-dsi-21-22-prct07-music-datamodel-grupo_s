/* eslint-disable linebreak-style */
import {Artist} from './artist';
import {MusicGenre} from './musicGenre';
/**
 * This class represents the structure of the
 * song objects
 */
export class Song {
  constructor(private name : string, private author : Artist, private songDuration : number,
  private genre : MusicGenre, private single : string, private reproductionsNumber : number) {}

  getName() : string {
    return this.name;
  }

  getAuthor() : Artist {
    return this.author;
  }

  getSongDuration() : number {
    return this.songDuration;
  }

  getGenre() : MusicGenre {
    return this.genre;
  }

  getSingle() : string {
    return this.single;
  }

  getReproductionsNumber() : number {
    return this.reproductionsNumber;
  }
}

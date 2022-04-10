/* eslint-disable linebreak-style */
import {Artist} from './artist';
import {MusicGenre} from './musicGenre';
/**
 * This class represents the structure of the
 * song objects
 */
export class Song {
  constructor(private name : string, private author : Artist[], private songDuration : string,
  private genre : MusicGenre[], private single : boolean, private reproductionsNumber : number) {}

  getName() : string {
    return this.name;
  }

  getAuthor() : Artist[] {
    return this.author;
  }

  getSongDuration(): string {
    return this.songDuration;
  }

  durationFormat(): number {
    const prueba: string[] = this.getSongDuration().split(':');
    const minutes2Seconds: number = parseInt(prueba[0]) * 60;
    const result: number = minutes2Seconds + parseInt(prueba[1]);

    return result;
  }

  getGenre() : MusicGenre[] {
    return this.genre;
  }

  getSingle() : boolean {
    return this.single;
  }

  getReproductionsNumber() : number {
    return this.reproductionsNumber;
  }
}

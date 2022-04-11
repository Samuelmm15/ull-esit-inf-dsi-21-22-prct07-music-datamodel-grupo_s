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

  getAuthor(authorName: string) : Artist {
    // return this.author;
    for (let i = 0; i < this.author.length; i++) {
      if (authorName === this.author[i].getName()) {
        return this.author[i];
      }
    }
    return this.author[0]; // Default Option
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

  getGenre(genreName: string): MusicGenre {
    for (let i = 0; i < this.genre.length; i++) {
      if (genreName === this.genre[i].getName()) {
        return this.genre[i];
      }
    }
    return this.genre[0]; // Default Option
    // return this.genre;
  }

  getSingle() : boolean {
    return this.single;
  }

  getReproductionsNumber() : number {
    return this.reproductionsNumber;
  }
}

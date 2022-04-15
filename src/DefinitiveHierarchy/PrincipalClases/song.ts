/* eslint-disable linebreak-style */
import {Artist} from './artist';
import {MusicGenre} from './musicGenre';
/**
 * This class represents the structure of the
 * song objects
 */
export class Song {
  /**
   * Creates an artist object
   * @param name Song name
   * @param author Artist objects that participates on the song
   * @param songDuration Song duration in minutes and seconds
   * @param genre Genre Song
   * @param single If song is a single or not
   * @param reproductionsNumber Number of repoductions of the song
   */
  constructor(private name: string, private author: Artist[], private songDuration: string,
  private genre: MusicGenre[], private single: boolean, private reproductionsNumber: number) {}

  /**
   * Gets the name of the song
   * @return Song name
   */
  getName(): string {
    return this.name;
  }

  /**
   * Gets artist objects that participates on the song
   * @return Artist object
   */
  getAuthor(authorName: string): Artist {
    let result: Artist = this.author[0];
    for (let i = 0; i < this.author.length; i++) {
      if (authorName === this.author[i].getName()) {
        result = this.author[i];
      }
    }
    return result;
  }

  /**
   * Gets song duration on string format
   * @return Song duration
   */
  getSongDuration(): string {
    return this.songDuration;
  }

  /**
   * Change duration song format to seconds
   * @return New duration format
   */
  durationFormat(): number {
    const prueba: string[] = this.getSongDuration().split(':');
    const minutes2Seconds: number = parseInt(prueba[0]) * 60;
    const result: number = minutes2Seconds + parseInt(prueba[1]);

    return result;
  }

  /**
   * Gets genre objects that the song has
   * @return Song genres
   */
  getGenre(genreName: string): MusicGenre {
    let result: MusicGenre = this.genre[0];
    for (let i = 0; i < this.genre.length; i++) {
      if (genreName === this.genre[i].getName()) {
        result = this.genre[i];
      }
    }
    return result;
  }

  /**
   * Gets if the song is a single or not
   * @return True if is a single, false if is not a single
   */
  getSingle(): boolean {
    return this.single;
  }

  /**
   * Gets reproduction number of the song
   * @return Number of reproductions of the song
   */
  getReproductionsNumber(): number {
    return this.reproductionsNumber;
  }
}

/* eslint-disable linebreak-style */
import {Artist} from './artist';
/**
 * This is the class that represents
 * the structure of the Group objects
 */
export class Group {
  constructor(private name: string, private artists: Artist,
    private yearCreation: number, private genre: string,
    private albums: string, private monthlyListener: number) {
  }
  getName(): string {
    return this.name;
  }
  getArtists(): Artist {
    return this.artists;
  }
  getYearCreation(): number {
    return this.yearCreation;
  }
  getGenre(): string {
    return this.genre;
  }
  getAlbums(): string {
    return this.albums;
  }
  getMonthlyListener(): number {
    return this.monthlyListener;
  }
}

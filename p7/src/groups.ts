/* eslint-disable linebreak-style */
import {Artist} from './artist';
import {MusicGenre} from './musicgenre';
import {Album} from './album';
/**
 * This is the class that represents
 * the structure of the Group objects
 */
export class Group {
  constructor(private name: string, private artists: Artist,
    private yearCreation: number, private genre: MusicGenre,
    private albums: Album, private monthlyListener: number) {
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
  getGenre(): MusicGenre {
    return this.genre;
  }
  getAlbums(): Album {
    return this.albums;
  }
  getMonthlyListener(): number {
    return this.monthlyListener;
  }
}

/* eslint-disable linebreak-style */
import {Group} from './groups';
import {Artist} from './artist';
import {MusicGenre} from './musicGenre';
import {Song} from './song';
/**
 * This class represents the structure of the
 * album objects
 */
export class Album {
  constructor(private name: string, private group: Group, private artist: Artist,
    private yearPublication: number, private genre: MusicGenre, private songs: Song[]) {
  }
  getName(): string {
    return this.name;
  }
  getGroup(): Group {
    return this.group;
  }
  getArtist(): Artist {
    return this.artist;
  }
  getYearPublication(): number {
    return this.yearPublication;
  }
  getGenre(): MusicGenre {
    return this.genre;
  }
  getSongs(song: Song): Song[] {
    // return this.songs;
    return this.songs.filter((s) => s.getName() === song.getName());
  }
}

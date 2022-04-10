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
  /**
   * Creates an album object
   * @param name Album name
   * @param artist Artist name
   * @param yearPublication Album publication year
   * @param genre Album music genre
   * @param songs Album songs
   * @param group Group name
   */
  constructor(private name: string, private artist: Artist[],
    private yearPublication: number, private genre: MusicGenre[], private songs: Song[], private group?: Group) {
  }
  /**
   * Gets the album name
   * @return Album name
   */
  getName(): string {
    return this.name;
  }
  /**
   * Gets a group object
   * @return Group object
   */
  getGroup(): Group | undefined {
    return this.group;
  }
  /**
   * Gets an artist object
   * @return Artist Object
   */
  getArtist(): Artist[] {
    return this.artist;
  }
  /**
   * Gets the year publication year
   * @return Album publication year
   */
  getYearPublication(): number {
    return this.yearPublication;
  }
  /**
   * Gets a music genre object
   * @return Music genre Object
   */
  getGenre(): MusicGenre[] {
    return this.genre;
  }
  /**
   * Gets a song name
   * @return Song name
   */
  getSongs(song: Song): Song[] {
    // return this.songs;
    return this.songs.filter((s) => s.getName() === song.getName());
  }
}

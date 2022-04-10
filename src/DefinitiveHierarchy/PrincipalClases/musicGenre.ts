/* eslint-disable linebreak-style */
import {Group} from './groups';
import {Artist} from './artist';

/**
 * This class represents the structure of the
 * music genre objects
 */
export class MusicGenre {
  /**
   * Creates an artist object
   * @param name Genre Name
   * @param groups Groups objects that belongs to a specific music genre
   * @param artists Artist objects that belongs to the group
   * @param albums Albums that belongs to a specific music genre
   * @param songs Songs that belongs to a specific music genre
   */
  constructor(private name: string, private groups: Group[], private artists: Artist[],
    private albums: string[], private songs: string[]) {
  }

  /**
   * Gets music genre name
   * @return Genre name
   */
  getName(): string {
    return this.name;
  }

  /**
   * Gets a group object
   * @return Group object
   */
  getGroups(): Group[] {
    return this.groups;
  }

  /**
   * Gets an artist object
   * @return Artist object
   */
  getArtists(): Artist[] {
    return this.artists;
  }

  /**
   * Gets albums name
   * @return Albums name
   */
  getAlbums(): string[] {
    return this.albums;
  }

  /**
   * Gets songs of an specific music genre
   * @return Songs name
   */
  getSongs(): string[] {
    return this.songs;
  }
}

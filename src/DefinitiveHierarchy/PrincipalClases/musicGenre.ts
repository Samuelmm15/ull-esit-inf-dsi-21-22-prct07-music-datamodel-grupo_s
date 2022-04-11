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
  getGroups(GroupName: string): Group {
    for (let i = 0; i < this.groups.length; i++) {
      if (GroupName === this.groups[i].getName()) {
        return this.groups[i];
      }
    }
    return this.groups[0]; // Default Option
  }

  /**
   * Gets an artist object
   * @return Artist object
   */
  getArtists(ArtistName: string): Artist {
    for (let i = 0; i < this.artists.length; i++) {
      if (ArtistName === this.artists[i].getName()) {
        return this.artists[i];
      }
    }
    return this.artists[0]; // Default Option
  }

  /**
   * Gets albums name
   * @return Albums name
   */
  getAlbums(AlbumName: string): string {
    for (let i = 0; i < this.albums.length; i++) {
      if (AlbumName === this.albums[i]) {
        return this.albums[i];
      }
    }
    return this.albums[0]; // Default Option
  }

  /**
   * Gets songs of an specific music genre
   * @return Songs name
   */
  getSongs(SongName: string): string {
    // return this.songs;
    for (let i = 0; i < this.songs.length; i++) {
      if (SongName === this.songs[i]) {
        return this.songs[i];
      }
    }
    return this.songs[0]; // Default option
  }
}

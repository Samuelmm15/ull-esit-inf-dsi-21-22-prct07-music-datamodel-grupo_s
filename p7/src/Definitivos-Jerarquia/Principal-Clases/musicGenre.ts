/* eslint-disable linebreak-style */
import {Group} from './groups';
import {Artist} from './artist';

/**
 * This class represents the structure of the
 * music genre objects
 */
export class MusicGenre {
  constructor(private name : string, private groups : Group, private artists : Artist,
    private albums : string, private songs : string) {
  }

  getName() : string {
    return this.name;
  }

  getGroups() : Group {
    return this.groups;
  }

  getArtists() : Artist {
    return this.artists;
  }

  getAlbums() : string {
    return this.albums;
  }

  getSongs() : string {
    return this.songs;
  }
}

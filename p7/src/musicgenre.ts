/* eslint-disable linebreak-style */
import {Group} from './groups';
import {Artist} from './artist';
import {Song} from './song';
import {Album} from './album';

/**
 * This class represents the structure of the
 * music genre objects
 */
export class MusicGenre {
  constructor(private name : string, private groups : Group, private artists : Artist,
    private albums : Album, private songs : Song) {
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

  getAlbums() : Album {
    return this.albums;
  }

  getSongs() : Song {
    return this.songs;
  }
}

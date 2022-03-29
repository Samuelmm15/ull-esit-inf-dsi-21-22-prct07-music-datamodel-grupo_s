/* eslint-disable linebreak-style */

import {MusicGenre} from './musicgenre';
import {Group} from './groups';
import {Album} from './album';

/**
 * This class represents the structure of the
 * artist objects
 */
export class Artist {
  constructor(private name : string, private group : Group, private genre : MusicGenre,
    private album : Album, private publishedSongs : string, private monthlyListeners : number) {
  }

  getName() : string {
    return this.name;
  }

  getGroup() : Group {
    return this.group;
  }

  getGenre() : MusicGenre {
    return this.genre;
  }

  getAlbum() : Album {
    return this.album;
  }

  getPublishedSongs() : string {
    return this.publishedSongs;
  }

  getMonthlyListeners() : number {
    return this.monthlyListeners;
  }
}

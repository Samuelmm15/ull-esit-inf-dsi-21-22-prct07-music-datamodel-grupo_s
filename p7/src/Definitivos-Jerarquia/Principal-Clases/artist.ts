/* eslint-disable linebreak-style */
/**
 * This class represents the structure of the
 * artist objects
 */
export class Artist {
  constructor(private name : string, private group : string, private genre : string,
    private album : string, private publishedSongs : string, private monthlyListeners : number) {
  }

  getName() : string {
    return this.name;
  }

  getGroup() : string {
    return this.group;
  }

  getGenre() : string {
    return this.genre;
  }

  getAlbum() : string {
    return this.album;
  }

  getPublishedSongs() : string {
    return this.publishedSongs;
  }

  getMonthlyListeners() : number {
    return this.monthlyListeners;
  }
}

/* eslint-disable linebreak-style */
/**
 * This class represents the structure of the
 * artist objects
 */
export class Artist {
  /**
   * Creates an artist object
   * @param name Artist name
   * @param group Name of the artist's group
   * @param genre Music genre of the artist
   * @param album Album name of the artist
   * @param publishedSongs Published songs name
   * @param monthlyListeners Monthly Listeners of the artist
   */
  constructor(private name: string, private group: string, private genre: string[],
    private album: string[], private publishedSongs: number, private monthlyListeners: number) {
  }

  /**
   * Gets the name of the artist
   * @return Artist name
   */
  getName(): string {
    return this.name;
  }

  /**
   * Gets the group name
   * @return Name of the artist's group
   */
  getGroup(): string {
    return this.group;
  }

  /**
   * Gets the genre of the artist
   * @return Music genre of the artist
  */
  getGenre(genres: string): string {
    for (let i = 0; i < this.genre.length; i++) {
      if (genres === this.genre[i]) {
        return this.genre[i];
      }
    }
    return 'falla';
  }

  /**
   * Gets the album name
   * @return Album name of the artist
   */
  getAlbum(albumName: string): string {
    for (let i = 0; i < this.album.length; i++) {
      if (albumName === this.album[i]) {
        return this.album[i];
      }
    }
    return 'falla';
  }

  /**
   * Gets the name of the published songs
   * @return Name of the published songs
   */
  getPublishedSongs(): number {
    return this.publishedSongs;
  }

  /**
   * Gets the number of monthly listeners
   * @return Monthly Listeners of the artist
   */
  getMonthlyListeners(): number {
    return this.monthlyListeners;
  }
}

/* eslint-disable linebreak-style */
import {Artist} from './artist';
/**
 * This is the class that represents
 * the structure of the Group objects
 */
export class Group {
  /**
   * Creates an artist object
   * @param name Group name
   * @param artists Artist objects that belongs to the group
   * @param genre Music genre of the group
   * @param albums Albums name of the group
   * @param monthlyListener Monthly Listeners of the group
   */
  constructor(private name: string, private artists: Artist[],
    private yearCreation: number, private genre: string,
    private albums: string, private monthlyListener: number) {
  }

  /**
   * Gets the name of the group
   * @return Group name
   */
  getName(): string {
    return this.name;
  }
  /**
   * Gets artist objects that belongs to the group
   * @return Artist objects
   */
  getArtists(artistName: string): Artist {
    // return this.artists;
    for (let i = 0; i < this.artists.length; i++) {
      if (artistName === this.artists[i].getName()) {
        return this.artists[i];
      }
    }
    return this.artists[0]; // Default Option
  }
  /**
   * Gets the year Creation of the group
   * @return Year creation
   */
  getYearCreation(): number {
    return this.yearCreation;
  }

  /**
   * Gets the genre of the group
   * @return Genre name
   */
  getGenre(): string {
    return this.genre;
  }

  /**
   * Gets the albums of the group
   * @return Albums name
   */
  getAlbums(): string {
    return this.albums;
  }
  /**
   * Gets the number of monthly listeners
   * @return Monthly Listeners of the artist
   */
  getMonthlyListener(): number {
    return this.monthlyListener;
  }
}

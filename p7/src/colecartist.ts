/* eslint-disable linebreak-style */
import {BasicStreamableCollection} from './basicstreamablecollection';
import {Artist} from './artist';

export class ArtistsCollection extends BasicStreamableCollection<Artist> {
  constructor(protected artists: Artist[]) {
    super(artists);
  }
  public getName(author: string): string {
    let success: string = ``;
    for (let i = 0; i < this.artists.length; i++) {
      if (this.artists[i].getName() == author) {
        success = this.artists[i].getName();
      } else {
        success = `No existe`;
        return success;
      }
    }
    return success;
  }
}

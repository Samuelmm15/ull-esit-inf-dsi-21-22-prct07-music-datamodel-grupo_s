/* eslint-disable linebreak-style */
import {BasicStreamableCollection} from './basicstreamablecollection';
import {Artist} from '../Principal-Clases/artist';

export class ArtistsCollection extends BasicStreamableCollection<Artist> {
  constructor(protected artists: Artist[]) {
    super(artists);
  }
  public getName(author: string): string { // EXISTE UN FALLO CUANDO NO EXISTE EL OBJETO
    let success: string = ``;
    for (let i = 0; i < this.artists.length; i++) {
      if (this.artists[i].getName() === author) {
        success = this.artists[i].getName();
      }
    }
    return success;
  }
}

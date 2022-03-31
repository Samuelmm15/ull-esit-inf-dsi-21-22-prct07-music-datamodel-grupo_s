/* eslint-disable linebreak-style */
import {BasicStreamableCollection} from './basicstreamablecollection';
import {Song} from '../Principal-Clases/song';

export class SongCol <T extends BasicStreamableCollection<T>> implements Iterable<Song> {
  private SolcollectionSet: Set<Song>;
  constructor(SolcollectionSet: [Song]) {
    this.SolcollectionSet = new Set(SolcollectionSet);
    SolcollectionSet.forEach((element) => {
      this.SolcollectionSet.add(element);
    });
  }
  public addSong(song: Song): void {
    this.SolcollectionSet.add(song);
  }
  public getSong(song: Song): Set<Song> {
    return this.SolcollectionSet;
  }
  public [Symbol.iterator](): Iterator<Song> {
    return this.SolcollectionSet.values();
  }
}

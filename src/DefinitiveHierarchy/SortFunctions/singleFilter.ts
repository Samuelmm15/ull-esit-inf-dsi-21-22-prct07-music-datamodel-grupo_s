import {Song} from '../PrincipalClases/song';
import {SongCollection} from '../Collectionables/songCollection';

export class SingleFilter {
  constructor(protected songs: SongCollection) {
  }
  filter(): SongCollection {
    const songArray: Song[] = [];
    for (let i = 0; i < this.songs.getColectionlength(); i++) {
      if (this.songs.getnObject(i).getSingle() === true) {
        songArray.push(this.songs.getnObject(i));
      }
    }
    const result: SongCollection = new SongCollection(songArray);
    return result;
  }
}

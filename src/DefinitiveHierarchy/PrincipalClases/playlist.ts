import {Song} from './song';
import {MusicGenre} from './musicGenre';
/**
 * This class represents the structure of the
 * Playlists objects
 */
export class Playlists {
  constructor(private name: string, private songs: Song[],
    private duration: number, private genre: MusicGenre[]) {
  }
  getName(): string {
    return this.name;
  }
  getSongs(song: Song): Song[] {
    // return this.songs;
    return this.songs.filter((s) => s.getName() === song.getName());
  }
  // Podríamos hacer una interfaz para esto
  getDuration(): number {
    return this.duration;
  }
  getGenre(GenreName: string): MusicGenre {
    // return this.genre;
    for (let i = 0; i < this.genre.length; i++) {
      if (this.genre[i].getName() === GenreName) {
        return this.genre[i];
      }
    }
    return this.genre[0];
  }
}

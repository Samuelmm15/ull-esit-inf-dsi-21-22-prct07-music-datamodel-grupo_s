import {Song} from './song';
import {MusicGenre} from './musicGenre';
/**
 * This class represents the structure of the
 * Playlists objects
 */
export class Playlists {
  /**
   * Creates a playlist object
   * @param name Playlist name
   * @param songs Songs included on the playlist
   * @param duration Playlist duration
   * @param genre Music genres included on the playlist
   */
  constructor(private name: string, private songs: Song[],
    private duration: number, private genre: MusicGenre[], private systemPlaylist: boolean) {
  }
  /**
   * Gets the playlist name
   * @return Playlist name
   */
  getName(): string {
    return this.name;
  }
  // getAlbums(): Album[] {
  //   return this.albums;
  // }
  /**
   * Gets the songs included on the playlist
   * @return Song object
   */
  getSongs(song: string): Song {
    let songResult: Song = this.songs[0];
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i].getName() === song) {
        songResult = this.songs[i];
      }
    }
    return songResult;
  }
  getSongsArray(): Song[] {
    return this.songs;
  }
  getSongString(song: string): string {
    let songResult: string = '';
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i].getName() === song) {
        songResult = this.songs[i].getName();
      }
    }
    return songResult;
  }
  addSong(song: Song): void {
    this.songs.push(song);
  }
  removeSong(index: number): Song[] {
    this.songs.splice(index, 1);
    return this.songs;
  }
  getRemoveIndex(songName: string): Song[] {
    let i = 0;
    for (i = 0; i < this.songs.length; i++) {
      if (this.songs[i].getName() === songName) {
        break;
      }
    }
    return this.removeSong(i);
  }
  getGenreArray(): MusicGenre[] {
    return this.genre;
  }
  /**
   * Gets the full duration of the playlist
   * @return Playlist Duration
   */
  // Podríamos hacer una interfaz para esto
  getDuration(): number {
    return this.duration;
  }

  /**
   * Gets music genres included on the playlist
   * @return Genre object
   */
  getGenre(GenreName: string): MusicGenre {
    // return this.genre;
    for (let i = 0; i < this.genre.length; i++) {
      if (this.genre[i].getName() === GenreName) {
        return this.genre[i];
      }
    }
    return this.genre[0];
  }
  getsystemPlaylistBoolean(): boolean {
    return this.systemPlaylist;
  }
}

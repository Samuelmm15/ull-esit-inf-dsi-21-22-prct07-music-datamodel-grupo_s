/* eslint-disable linebreak-style */
import {BasicStreamableCollection} from './basicstreamablecollection';
import {Playlists} from '../PrincipalClases/playlist';
import {Song} from '../PrincipalClases/song';
import {MusicGenre} from '../PrincipalClases/musicGenre';
// import {Artist} from '../PrincipalClases/artist';

export class PlaylistCollection extends BasicStreamableCollection<Playlists> {
  constructor(protected playlists: Playlists[]) {
    super(playlists);
  }
  public addPlaylist(playlist: Playlists) {
    this.playlists.push(playlist);
  }
  public getPlaylist(PlaylistName: string): Playlists {
    let result: Playlists = this.playlists[0];
    for (let i = 0; i < this.playlists.length; i++) {
      if (this.playlists[i].getName() === PlaylistName) {
        result = this.playlists[i];
      }
    }
    return result;
  }
  public getSongsArray(playlistName: string): Song[] {
    let result: Song[] = [];
    for (let i = 0; i < this.playlists.length; i++) {
      if (this.playlists[i].getName() === playlistName) {
        result = this.playlists[i].getSongsArray();
      }
    }
    return result;
  }

  // public getArtistArray(playlistName: string): Artist[] {
  //   let result: Artist[] = [];
  //   for (let i = 0; i < this.playlists.length; i++) {
  //     if (this.playlists[i].getName() === playlistName) {
  //       result = this.playlists[i].getArtistArray();
  //     }
  //   }
  //   return result;
  // }
  public getName(PlaylistName: string): string {
    let success: string = ``;
    for (let i = 0; i < this.playlists.length; i++) {
      if (this.playlists[i].getName() === PlaylistName) {
        success = this.playlists[i].getName();
      }
    }
    if (success === ``) {
      success = `No existe la playlist que desea buscar`;
    }
    return success;
  }
  public getGenreArray(playlistName: String): MusicGenre[] {
    let result: MusicGenre[] = [];
    for (let i = 0; i < this.playlists.length; i++) {
      if (this.playlists[i].getName() === playlistName) {
        result = this.playlists[i].getGenreArray();
      }
    }
    return result;
  }
  public getColectionlength(): number {
    return this.playlists.length;
  }
  public getnObject(position: number): Playlists {
    return this.playlists[position];
  }
  public getPlaylistArray(): Playlists[] {
    return this.playlists;
  }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaylistCollection = void 0;
/* eslint-disable linebreak-style */
const basicstreamablecollection_1 = require("./basicstreamablecollection");
class PlaylistCollection extends basicstreamablecollection_1.BasicStreamableCollection {
    constructor(playlists) {
        super(playlists);
        this.playlists = playlists;
    }
    addPlaylist(playlist) {
        this.playlists.push(playlist);
    }
    getPlaylist(PlaylistName) {
        let result = this.playlists[0];
        for (let i = 0; i < this.playlists.length; i++) {
            if (this.playlists[i].getName() === PlaylistName) {
                result = this.playlists[i];
            }
        }
        return result;
    }
    getSong(playlistName, song) {
        return playlistName.getSongs(song.getName()).getName();
    }
    getSongsArray(playlistName) {
        let result = [];
        for (let i = 0; i < this.playlists.length; i++) {
            if (this.playlists[i].getName() === playlistName) {
                result = this.playlists[i].getSongsArray();
            }
        }
        return result;
    }
    getName(PlaylistName) {
        let success = ``;
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
    getGenreArray(playlistName) {
        let result = [];
        for (let i = 0; i < this.playlists.length; i++) {
            if (this.playlists[i].getName() === playlistName) {
                result = this.playlists[i].getGenreArray();
            }
        }
        return result;
    }
    getColectionlength() {
        return this.playlists.length;
    }
    getnObject(position) {
        return this.playlists[position];
    }
    getPlaylistArray() {
        return this.playlists;
    }
    removePlaylist(index) {
        this.playlists.splice(index, 1);
        return this.playlists;
    }
    getRemoveIndex(PlaylistName) {
        let i = 0;
        for (i = 0; i < this.playlists.length; i++) {
            if (this.playlists[i].getName() === PlaylistName) {
                break;
            }
        }
        return this.removePlaylist(i);
    }
}
exports.PlaylistCollection = PlaylistCollection;

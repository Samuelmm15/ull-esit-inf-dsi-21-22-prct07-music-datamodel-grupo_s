"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaylistCollection = void 0;
/* eslint-disable linebreak-style */
const basicstreamablecollection_1 = require("./basicstreamablecollection");
/**
 * Collection of playlists
 */
class PlaylistCollection extends basicstreamablecollection_1.BasicStreamableCollection {
    /**
     * Recieves a playlist array
     * @param playlists Playlists array
     */
    constructor(playlists) {
        super(playlists);
        this.playlists = playlists;
    }
    /**
     * Adds a playlist object to the collection
     * @param playlist Playlist of any song
     */
    addPlaylist(playlist) {
        this.playlists.push(playlist);
    }
    /**
     * Gets the playlist object of the collection
     * @param PlaylistName Playlist name
     */
    getPlaylist(PlaylistName) {
        let result = this.playlists[0];
        for (let i = 0; i < this.playlists.length; i++) {
            if (this.playlists[i].getName() === PlaylistName) {
                result = this.playlists[i];
            }
        }
        return result;
    }
    /**
     * Get a song of the playlist
     * @param playlistName Playlist object
     * @param song Song object
     * @returns The songs a specific name
     */
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
    /**
     * Gets the playlist name
     * @param PlaylistName Playlist name
     * @return Artist name
     */
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
    /**
     * Gets the genre of the playlist
     * @param playlistName Playlist name
     * @returns Playlist genre/s
     */
    getGenreArray(playlistName) {
        let result = [];
        for (let i = 0; i < this.playlists.length; i++) {
            if (this.playlists[i].getName() === playlistName) {
                result = this.playlists[i].getGenreArray();
            }
        }
        return result;
    }
    /**
     * The lenght of the playlist array
     * @returns The array lenght
     */
    getColectionlength() {
        return this.playlists.length;
    }
    /**
     * The playlist array
     * @param position The index of the element
     * @returns Playlist object
     */
    getnObject(position) {
        return this.playlists[position];
    }
    /**
     * gets the playlist array
     * @returns Artist playlist
     */
    getPlaylistArray() {
        return this.playlists;
    }
    /**
     * Remove a playlist of the collection
     * @param index Index of the element to be removed
     * @return The artist array without the deleted element
     */
    removePlaylist(index) {
        this.playlists.splice(index, 1);
        return this.playlists;
    }
    /**
     * Gets the index of the element to be deleted
     * @param PlaylistName Name of the playlist
     * @return The index of the element that wants to be deleted
     */
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

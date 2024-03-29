"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Playlists = void 0;
/**
 * This class represents the structure of the
 * Playlists objects
 */
class Playlists {
    /**
     * Creates a playlist object
     * @param name Playlist name
     * @param songs Songs included on the playlist
     * @param duration Playlist duration
     * @param genre Music genres included on the playlist
     * @param systemPlaylist To know if it's a playlist of the system or not
     */
    constructor(name, songs, duration, genre, systemPlaylist) {
        this.name = name;
        this.songs = songs;
        this.duration = duration;
        this.genre = genre;
        this.systemPlaylist = systemPlaylist;
    }
    /**
     * Gets the playlist name
     * @return Playlist name
     */
    getName() {
        return this.name;
    }
    /**
     * Gets the songs included on the playlist
     * @return Song object
     */
    getSongs(song) {
        let songResult = this.songs[0];
        for (let i = 0; i < this.songs.length; i++) {
            if (this.songs[i].getName() === song) {
                songResult = this.songs[i];
            }
        }
        return songResult;
    }
    getSongsArray() {
        return this.songs;
    }
    getSongString(song) {
        let songResult = '';
        for (let i = 0; i < this.songs.length; i++) {
            if (this.songs[i].getName() === song) {
                songResult = this.songs[i].getName();
            }
        }
        return songResult;
    }
    addSong(song) {
        this.songs.push(song);
    }
    removeSong(index) {
        this.songs.splice(index, 1);
        return this.songs;
    }
    getRemoveIndex(songName) {
        let i = 0;
        for (i = 0; i < this.songs.length; i++) {
            if (this.songs[i].getName() === songName) {
                break;
            }
        }
        return this.removeSong(i);
    }
    getGenreArray() {
        return this.genre;
    }
    /**
     * Gets the full duration of the playlist
     * @return Playlist Duration
     */
    // Podríamos hacer una interfaz para esto
    getDuration() {
        let result = 0;
        for (let i = 0; i < this.songs.length; i++) {
            result = result + this.songs[i].durationFormat();
        }
        return result;
    }
    /**
     * Gets music genres included on the playlist
     * @return Genre object
     */
    getGenre(GenreName) {
        let result = this.genre[0];
        for (let i = 0; i < this.genre.length; i++) {
            if (this.genre[i].getName() === GenreName) {
                result = this.genre[i];
            }
        }
        return result;
    }
    getsystemPlaylistBoolean() {
        return this.systemPlaylist;
    }
}
exports.Playlists = Playlists;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongCollection = void 0;
/* eslint-disable linebreak-style */
const basicstreamablecollection_1 = require("./basicstreamablecollection");
/**
 * Collection of songs
 */
class SongCollection extends basicstreamablecollection_1.BasicStreamableCollection {
    /**
     * Recieves a song array
     * @param songs Song array
     */
    constructor(songs) {
        super(songs);
        this.songs = songs;
    }
    /**
     * Adds a song object to the collection
     * @param song Authors of any song
     */
    addSong(song) {
        this.songs.push(song);
    }
    /**
     * Gets the song object of the collection
     * @param songName Playlist element
     */
    getSong(songName) {
        let result = this.songs[0];
        for (let i = 0; i < this.songs.length; i++) {
            if (this.songs[i].getName() === songName) {
                result = this.songs[i];
            }
        }
        return result;
    }
    /**
     * Gets the song author of the collection
     * @param authorName Author name
     */
    getSongAuthor(authorName) {
        for (let i = 0; i < this.songs.length; i++) {
            if (this.songs[i].getAuthor(authorName.getName()) === authorName) {
                return this.songs[i].getAuthor(authorName.getName());
            }
        }
        return `No existe el autor que intenta buscar`;
    }
    /**
     * Gets the song name
     * @param songName Song name
     * @returns Song name
     */
    getName(songName) {
        let success = ``;
        for (let i = 0; i < this.songs.length; i++) {
            if (this.songs[i].getName() === songName) {
                success = this.songs[i].getName();
            }
        }
        if (success === ``) {
            success = `No existe la canción a buscar`;
        }
        return success;
    }
    /**
     * Gets the song with a specific repoduction number
     * @param reproductionsNumber Song reproduction number
     * @returns Song with a specific number of repoductions
     */
    getReproductionsNumber(reproductionsNumber) {
        for (let i = 0; i < this.songs.length; i++) {
            if (this.songs[i].getReproductionsNumber() === reproductionsNumber) {
                return this.songs[i];
            }
        }
        return `No existe la canción que intenta buscar`;
    }
    /**
     * Gets the song with a specific duration
     * @param duration Song duration
     * @returns Song with a specific duration
     */
    getDuration(duration) {
        for (let i = 0; i < this.songs.length; i++) {
            if (this.songs[i].durationFormat() === duration) {
                return this.songs[i];
            }
        }
        return `No existe la canción que intenta buscar`;
    }
    /**
     * Remove a song of the collection
     * @param index Index of the element to be removed
     * @return The artist array without the deleted element
     */
    removeSong(index) {
        this.songs.splice(index, 1);
        return this.songs;
    }
    /**
     * Gets the index of the element to be deleted
     * @param songName Name of the song
     * @return The index of the element that wants to be deleted
     */
    getRemoveIndex(songName) {
        let i = 0;
        for (i = 0; i < this.songs.length; i++) {
            if (this.songs[i].getName() === songName) {
                break;
            }
        }
        return this.removeSong(i);
    }
    /**
     * The lenght of the song array
     * @returns The array lenght
     */
    getColectionlength() {
        return this.songs.length;
    }
    /**
     * The song object
     * @param position The index of the element
     * @returns Song object
     */
    getnObject(position) {
        return this.songs[position];
    }
    /**
     * Gets the song collection
     * @returns Song array
     */
    getSongArray() {
        return this.songs;
    }
}
exports.SongCollection = SongCollection;

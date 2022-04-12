"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongCollection = void 0;
/* eslint-disable linebreak-style */
const basicstreamablecollection_1 = require("./basicstreamablecollection");
class SongCollection extends basicstreamablecollection_1.BasicStreamableCollection {
    constructor(songs) {
        super(songs);
        this.songs = songs;
    }
    addSong(song) {
        this.songs.push(song);
    }
    getSong(songName) {
        let result = this.songs[0];
        for (let i = 0; i < this.songs.length; i++) {
            if (this.songs[i].getName() === songName) {
                result = this.songs[i];
            }
        }
        return result;
    }
    getSongAuthor(authorName) {
        for (let i = 0; i < this.songs.length; i++) {
            if (this.songs[i].getAuthor(authorName.getName()) === authorName) {
                return this.songs[i].getAuthor(authorName.getName());
            }
        }
        return `No existe el autor que intenta buscar`;
    }
    getName(authorName) {
        let success = ``;
        for (let i = 0; i < this.songs.length; i++) {
            if (this.songs[i].getName() === authorName) {
                success = this.songs[i].getName();
            }
        }
        if (success === ``) {
            success = `No existe la canción a buscar`;
        }
        return success;
    }
    getReproductionsNumber(reproductionsNumber) {
        for (let i = 0; i < this.songs.length; i++) {
            if (this.songs[i].getReproductionsNumber() === reproductionsNumber) {
                return this.songs[i];
            }
        }
        return `No existe la canción que intenta buscar`;
    }
    getDuration(duration) {
        for (let i = 0; i < this.songs.length; i++) {
            if (this.songs[i].durationFormat() === duration) {
                return this.songs[i];
            }
        }
        return `No existe la canción que intenta buscar`;
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
    getColectionlength() {
        return this.songs.length;
    }
    getnObject(position) {
        return this.songs[position];
    }
    getSongArray() {
        return this.songs;
    }
}
exports.SongCollection = SongCollection;

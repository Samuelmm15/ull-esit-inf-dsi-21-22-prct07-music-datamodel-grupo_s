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
    getSongAuthor(author) {
        for (let i = 0; i < this.songs.length; i++) {
            if (this.songs[i].getAuthor() === author) {
                return this.songs[i].getAuthor();
            }
        }
        return `No existe el autor que intenta buscar`;
    }
    getName(author) {
        let success = ``;
        for (let i = 0; i < this.songs.length; i++) {
            if (this.songs[i].getName() === author) {
                success = this.songs[i].getName();
            }
        }
        if (success === ``) {
            success = `No existe la canción a buscar`;
        }
        return success;
    }
}
exports.SongCollection = SongCollection;

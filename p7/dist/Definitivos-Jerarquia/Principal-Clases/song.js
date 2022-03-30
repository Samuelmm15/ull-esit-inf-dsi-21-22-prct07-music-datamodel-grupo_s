"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Song = void 0;
/**
 * This class represents the structure of the
 * song objects
 */
class Song {
    constructor(name, author, songDuration, genre, single, reproductionsNumber) {
        this.name = name;
        this.author = author;
        this.songDuration = songDuration;
        this.genre = genre;
        this.single = single;
        this.reproductionsNumber = reproductionsNumber;
    }
    getName() {
        return this.name;
    }
    getAuthor() {
        return this.author;
    }
    getSongDuration() {
        return this.songDuration;
    }
    getGenre() {
        return this.genre;
    }
    getSingle() {
        return this.single;
    }
    getReproductionsNumber() {
        return this.reproductionsNumber;
    }
}
exports.Song = Song;

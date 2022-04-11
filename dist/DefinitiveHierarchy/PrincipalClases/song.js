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
    getAuthor(authorName) {
        // return this.author;
        for (let i = 0; i < this.author.length; i++) {
            if (authorName === this.author[i].getName()) {
                return this.author[i];
            }
        }
        return this.author[0]; // Default Option
    }
    getSongDuration() {
        return this.songDuration;
    }
    durationFormat() {
        const prueba = this.getSongDuration().split(':');
        const minutes2Seconds = parseInt(prueba[0]) * 60;
        const result = minutes2Seconds + parseInt(prueba[1]);
        return result;
    }
    getGenre(genreName) {
        for (let i = 0; i < this.genre.length; i++) {
            if (genreName === this.genre[i].getName()) {
                return this.genre[i];
            }
        }
        return this.genre[0]; // Default Option
        // return this.genre;
    }
    getSingle() {
        return this.single;
    }
    getReproductionsNumber() {
        return this.reproductionsNumber;
    }
}
exports.Song = Song;

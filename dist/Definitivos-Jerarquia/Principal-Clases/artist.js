"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Artist = void 0;
/* eslint-disable linebreak-style */
/**
 * This class represents the structure of the
 * artist objects
 */
class Artist {
    constructor(name, group, genre, album, publishedSongs, monthlyListeners) {
        this.name = name;
        this.group = group;
        this.genre = genre;
        this.album = album;
        this.publishedSongs = publishedSongs;
        this.monthlyListeners = monthlyListeners;
    }
    getName() {
        return this.name;
    }
    getGroup() {
        return this.group;
    }
    getGenre() {
        return this.genre;
    }
    getAlbum() {
        return this.album;
    }
    getPublishedSongs() {
        return this.publishedSongs;
    }
    getMonthlyListeners() {
        return this.monthlyListeners;
    }
}
exports.Artist = Artist;

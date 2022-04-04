"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Album = void 0;
/**
 * This class represents the structure of the
 * album objects
 */
class Album {
    constructor(name, group, artist, yearPublication, genre, songs) {
        this.name = name;
        this.group = group;
        this.artist = artist;
        this.yearPublication = yearPublication;
        this.genre = genre;
        this.songs = songs;
    }
    getName() {
        return this.name;
    }
    getGroup() {
        return this.group;
    }
    getArtist() {
        return this.artist;
    }
    getYearPublication() {
        return this.yearPublication;
    }
    getGenre() {
        return this.genre;
    }
    getSongs(song) {
        // return this.songs;
        return this.songs.filter((s) => s.getName() === song.getName());
    }
}
exports.Album = Album;

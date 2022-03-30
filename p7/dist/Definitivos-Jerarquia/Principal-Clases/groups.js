"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
/**
 * This is the class that represents
 * the structure of the Group objects
 */
class Group {
    constructor(name, artists, yearCreation, genre, albums, monthlyListener) {
        this.name = name;
        this.artists = artists;
        this.yearCreation = yearCreation;
        this.genre = genre;
        this.albums = albums;
        this.monthlyListener = monthlyListener;
    }
    getName() {
        return this.name;
    }
    getArtists() {
        return this.artists;
    }
    getYearCreation() {
        return this.yearCreation;
    }
    getGenre() {
        return this.genre;
    }
    getAlbums() {
        return this.albums;
    }
    getMonthlyListener() {
        return this.monthlyListener;
    }
}
exports.Group = Group;

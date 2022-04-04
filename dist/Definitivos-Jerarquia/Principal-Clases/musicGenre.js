"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicGenre = void 0;
/**
 * This class represents the structure of the
 * music genre objects
 */
class MusicGenre {
    constructor(name, groups, artists, albums, songs) {
        this.name = name;
        this.groups = groups;
        this.artists = artists;
        this.albums = albums;
        this.songs = songs;
    }
    getName() {
        return this.name;
    }
    getGroups() {
        return this.groups;
    }
    getArtists() {
        return this.artists;
    }
    getAlbums() {
        return this.albums;
    }
    getSongs() {
        return this.songs;
    }
}
exports.MusicGenre = MusicGenre;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicGenre = void 0;
/**
 * This class represents the structure of the
 * music genre objects
 */
class MusicGenre {
    /**
     * Creates an artist object
     * @param name Genre Name
     * @param groups Groups objects that belongs to a specific music genre
     * @param artists Artist objects that belongs to the group
     * @param albums Albums that belongs to a specific music genre
     * @param songs Songs that belongs to a specific music genre
     */
    constructor(name, groups, artists, albums, songs) {
        this.name = name;
        this.groups = groups;
        this.artists = artists;
        this.albums = albums;
        this.songs = songs;
    }
    /**
     * Gets music genre name
     * @return Genre name
     */
    getName() {
        return this.name;
    }
    /**
     * Gets a group object
     * @return Group object
     */
    getGroups() {
        return this.groups;
    }
    /**
     * Gets an artist object
     * @return Artist object
     */
    getArtists() {
        return this.artists;
    }
    /**
     * Gets albums name
     * @return Albums name
     */
    getAlbums() {
        return this.albums;
    }
    /**
     * Gets songs of an specific music genre
     * @return Songs name
     */
    getSongs() {
        return this.songs;
    }
}
exports.MusicGenre = MusicGenre;

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
    getGroups(GroupName) {
        let result = this.groups[0];
        for (let i = 0; i < this.groups.length; i++) {
            if (GroupName === this.groups[i].getName()) {
                result = this.groups[i];
            }
        }
        return result;
    }
    /**
     * Gets an artist object
     * @return Artist object
     */
    getArtists(ArtistName) {
        let result = this.artists[0];
        for (let i = 0; i < this.artists.length; i++) {
            if (ArtistName === this.artists[i].getName()) {
                result = this.artists[i];
            }
        }
        return result;
    }
    /**
     * Gets albums name
     * @return Albums name
     */
    getAlbums(AlbumName) {
        let result = '';
        for (let i = 0; i < this.albums.length; i++) {
            if (AlbumName === this.albums[i]) {
                result = this.albums[i];
            }
        }
        return result;
    }
    /**
     * Gets songs of an specific music genre
     * @return Songs name
     */
    getSongs(SongName) {
        let result = '';
        for (let i = 0; i < this.songs.length; i++) {
            if (SongName === this.songs[i]) {
                result = this.songs[i];
            }
        }
        return result;
    }
}
exports.MusicGenre = MusicGenre;

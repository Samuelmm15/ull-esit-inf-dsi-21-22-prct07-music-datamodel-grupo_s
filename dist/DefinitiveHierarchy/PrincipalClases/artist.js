"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Artist = void 0;
/* eslint-disable linebreak-style */
/**
 * This class represents the structure of the
 * artist objects
 */
class Artist {
    /**
     * Creates an artist object
     * @param name Artist name
     * @param group Name of the artist's group
     * @param genre Music genre of the artist
     * @param album Album name of the artist
     * @param publishedSongs Published songs name
     * @param monthlyListeners Monthly Listeners of the artist
     */
    constructor(name, group, genre, album, publishedSongs, monthlyListeners) {
        this.name = name;
        this.group = group;
        this.genre = genre;
        this.album = album;
        this.publishedSongs = publishedSongs;
        this.monthlyListeners = monthlyListeners;
    }
    /**
     * Gets the name of the artist
     * @return Artist name
     */
    getName() {
        return this.name;
    }
    /**
     * Gets the group name
     * @return Name of the artist's group
     */
    getGroup() {
        return this.group;
    }
    /**
     * Gets the genre of the artist
     * @return Music genre of the artist
    */
    getGenre(genres) {
        for (let i = 0; i < this.genre.length; i++) {
            if (genres === this.genre[i]) {
                return this.genre[i];
            }
        }
        return this.genre[0];
    }
    /**
     * Gets the album name
     * @return Album name of the artist
     */
    getAlbum(albumName) {
        for (let i = 0; i < this.album.length; i++) {
            if (albumName === this.album[i]) {
                return this.album[i];
            }
        }
        return this.album[0];
    }
    /**
     * Gets the name of the published songs
     * @return Name of the published songs
     */
    getPublishedSongs() {
        return this.publishedSongs;
    }
    /**
     * Gets the number of monthly listeners
     * @return Monthly Listeners of the artist
     */
    getMonthlyListeners() {
        return this.monthlyListeners;
    }
}
exports.Artist = Artist;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistsCollection = void 0;
/* eslint-disable linebreak-style */
const basicstreamablecollection_1 = require("./basicstreamablecollection");
/**
 * Collection of artists
 */
class ArtistsCollection extends basicstreamablecollection_1.BasicStreamableCollection {
    /**
     * Recieves an artist array
     * @param artists Artist array
     */
    constructor(artists) {
        super(artists);
        this.artists = artists;
    }
    /**
     * Adds an artist object to the collection
     * @param author Authors of any song
     */
    addArtist(author) {
        this.artists.push(author);
    }
    /**
     * Gets the artist object of the collection
     * @param author Artist element
     */
    getArtist(author) {
        for (let i = 0; i < this.artists.length; i++) {
            if (this.artists[i].getName() === author) {
                return this.artists[i];
            }
        }
        return `No existe el artista que desea obtener`;
    }
    /**
     * Gets the artist name
     * @param author Author name
     * @return Artist name
     */
    getName(author) {
        let success = ``;
        for (let i = 0; i < this.artists.length; i++) {
            if (this.artists[i].getName() === author) {
                success = this.artists[i].getName();
            }
        }
        if (success === ``) {
            success = `No existe el artista a buscar`;
        }
        return success;
    }
    /**
     * Gets the artists groups
     * @param groupName Group name
     * @return Artist group
     */
    getGroup(groupName) {
        let success = ``;
        for (let i = 0; i < this.artists.length; i++) {
            if (this.artists[i].getGroup() === groupName) {
                success = this.artists[i].getGroup();
            }
        }
        if (success === ``) {
            success = `No existe el grupo a buscar`;
        }
        return success;
    }
    /**
     * Gets the artist genre/s
     * @param genre
     * @return
     */
    getGenre(genre) {
        let success = ``;
        for (let i = 0; i < this.artists.length; i++) {
            if (this.artists[i].getGenre(genre) === genre) {
                success = this.artists[i].getGenre(genre);
            }
        }
        if (success === ``) {
            success = `No existe el genero a buscar`;
        }
        return success;
    }
    /**
     * Gets the artists album
     * @param albumName Album name
     * @return Artist album
     */
    getAlbum(albumName) {
        let success = ``;
        for (let i = 0; i < this.artists.length; i++) {
            if (this.artists[i].getAlbum(albumName) === albumName) {
                success = this.artists[i].getAlbum(albumName);
            }
        }
        if (success === ``) {
            success = `No existe el álbum a buscar`;
        }
        return success;
    }
    /**
     * Gets the artists published songs
     * @param author Author name
     * @return Artist published songs
     */
    getPublishedSongs(author) {
        let success = 0;
        for (let i = 0; i < this.artists.length; i++) {
            if (this.artists[i].getName() === author) {
                success = this.artists[i].getPublishedSongs();
            }
        }
        if (success === 0) {
            console.log('No existe el grupo a buscar');
        }
        return success;
    }
    /**
     * Gets the artists monthly listeners
     * @param author Author name
     * @return Artist monthly listeners
     */
    getMonthlyListeners(author) {
        let success = 0;
        for (let i = 0; i < this.artists.length; i++) {
            if (this.artists[i].getName() === author) {
                success = this.artists[i].getMonthlyListeners();
            }
        }
        if (success === 0) {
            success = -1;
        }
        return success;
    }
    /**
     * Remove an artist of the collection
     * @param index Index of the element to be removed
     * @return The artist array without the deleted element
     */
    removeArtist(index) {
        this.artists.splice(index, 1);
        return this.artists;
    }
    /**
     * Gets the index of the element to be deleted
     * @param artistName Name of the artist
     * @return The index of the element that wants to be deleted
     */
    getRemoveArtist(artistName) {
        let i = 0;
        for (i = 0; i < this.artists.length; i++) {
            if (this.artists[i].getName() === artistName) {
                break;
            }
        }
        return this.removeArtist(i);
    }
    /**
     * The lenght of the artist array
     * @returns The array lenght
     */
    getArtistsCollectionLength() {
        return this.artists.length;
    }
    /**
     * The artist array
     * @param iteration The index of the element
     * @returns Artist object
     */
    getArtistList(iteration) {
        return this.artists[iteration].getName();
    }
}
exports.ArtistsCollection = ArtistsCollection;

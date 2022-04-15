"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenreCollection = void 0;
/* eslint-disable linebreak-style */
const basicstreamablecollection_1 = require("./basicstreamablecollection");
/**
 * Collection of music genres
 */
class GenreCollection extends basicstreamablecollection_1.BasicStreamableCollection {
    /**
     * Recieves a genre array
     * @param genres Genre array
     */
    constructor(genres) {
        super(genres);
        this.genres = genres;
    }
    /**
     * Adds a genre object to the collection
     * @param genre Music genre
     */
    addGenre(genre) {
        this.genres.push(genre);
    }
    /**
     * Gets a genre object of the collection
     * @param genreName Music genre
     */
    getGenre(genreName) {
        for (let i = 0; i < this.genres.length; i++) {
            if (this.genres[i].getName() === genreName) {
                return this.genres[i];
            }
        }
        return 'No existe el género';
    }
    /**
     * Gets the genre of an artist
     * @param authorName Artist object
     * @returns The artists of a music genre
     */
    getArtist(authorName) {
        for (let i = 0; i < this.genres.length; i++) {
            if (this.genres[i].getArtists(authorName.getName()) === authorName) {
                return this.genres[i].getArtists(authorName.getName());
            }
        }
        return 'No existe el Artista que desea obtener';
    }
    /**
     * Gets the genre of the group
     * @param groupName Group name
     * @return Gropu genre/s
     */
    getGroups(groupName) {
        for (let i = 0; i < this.genres.length; i++) {
            if (this.genres[i].getGroups(groupName.getName()) === groupName) {
                return this.genres[i].getGroups(groupName.getName());
            }
        }
        return 'No existe el Grupo que desea obtener';
    }
    /**
     * Gets the genre name
     * @param genreName Genre name
     * @return Genre name
     */
    getName(genreName) {
        let success = ``;
        for (let i = 0; i < this.genres.length; i++) {
            if (this.genres[i].getName() === genreName) {
                success = this.genres[i].getName();
            }
        }
        if (success === ``) {
            success = `No existe el género que desea buscar`;
        }
        return success;
    }
    /**
     * Remove a genre of the collection
     * @param index Index of the element to be removed
     * @return The artist array without the deleted element
     */
    removeArtist(index) {
        this.genres.splice(index, 1);
        return this.genres;
    }
    /**
     * Gets the index of the element to be deleted
     * @param genreName Name of the genre
     * @return The index of the element that wants to be deleted
     */
    getRemoveIndex(genreName) {
        let i = 0;
        for (i = 0; i < this.genres.length; i++) {
            if (this.genres[i].getName() === genreName) {
                break;
            }
        }
        return this.removeArtist(i);
    }
    /**
     * The lenght of the genre array
     * @returns The array lenght
     */
    getColectionlength() {
        return this.genres.length;
    }
    /**
     * Obtain the object of the n postion of the array
     * @param position The index of the element
     * @returns Genre object
     */
    getnObject(position) {
        return this.genres[position];
    }
}
exports.GenreCollection = GenreCollection;

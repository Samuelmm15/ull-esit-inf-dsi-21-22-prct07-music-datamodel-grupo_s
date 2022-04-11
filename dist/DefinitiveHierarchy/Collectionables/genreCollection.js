"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenreCollection = void 0;
/* eslint-disable linebreak-style */
const basicstreamablecollection_1 = require("./basicstreamablecollection");
class GenreCollection extends basicstreamablecollection_1.BasicStreamableCollection {
    constructor(genres) {
        super(genres);
        this.genres = genres;
    }
    addGenre(genre) {
        this.genres.push(genre);
    }
    getGenre(genreName) {
        for (let i = 0; i < this.genres.length; i++) {
            if (this.genres[i].getName() === genreName) {
                return this.genres[i];
            }
        }
        return 'No existe el género';
    }
    getArtist(authorName) {
        for (let i = 0; i < this.genres.length; i++) {
            if (this.genres[i].getArtists(authorName.getName()) === authorName) {
                return this.genres[i].getArtists(authorName.getName());
            }
        }
        return 'No existe el Artista que desea obtener';
    }
    getGroups(groupName) {
        for (let i = 0; i < this.genres.length; i++) {
            if (this.genres[i].getGroups(groupName.getName()) === groupName) {
                return this.genres[i].getGroups(groupName.getName());
            }
        }
        return 'No existe el Grupo que desea obtener';
    }
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
    removeArtist(index) {
        this.genres.splice(index, 1);
        return this.genres;
    }
    getRemoveIndex(genreName) {
        let i = 0;
        for (i = 0; i < this.genres.length; i++) {
            if (this.genres[i].getName() === genreName) {
                break;
            }
        }
        return this.removeArtist(i);
    }
    getColectionlength() {
        return this.genres.length;
    }
    getnObject(position) {
        return this.genres[position];
    }
}
exports.GenreCollection = GenreCollection;

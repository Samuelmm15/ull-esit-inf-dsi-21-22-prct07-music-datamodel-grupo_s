"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistsCollection = void 0;
/* eslint-disable linebreak-style */
const basicstreamablecollection_1 = require("./basicstreamablecollection");
class ArtistsCollection extends basicstreamablecollection_1.BasicStreamableCollection {
    constructor(artists) {
        super(artists);
        this.artists = artists;
    }
    addArtist(author) {
        this.artists.push(author);
    }
    getArtist(author) {
        for (let i = 0; i < this.artists.length; i++) {
            if (this.artists[i].getName() === author) {
                return this.artists[i];
            }
        }
        return `No existe el artista que desea obtener`;
    }
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
    removeArtist(index) {
        this.artists.splice(index, 1);
        return this.artists;
    }
    getRemoveArtist(artistName) {
        let i = 0;
        for (i = 0; i < this.artists.length; i++) {
            if (this.artists[i].getName() === artistName) {
                break;
            }
        }
        return this.removeArtist(i);
    }
    getArtistsCollectionLength() {
        return this.artists.length;
    }
    getArtistList(iteration) {
        return this.artists[iteration].getName();
    }
}
exports.ArtistsCollection = ArtistsCollection;

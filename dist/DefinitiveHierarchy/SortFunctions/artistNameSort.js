"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistNameSort = void 0;
/* eslint-disable prefer-const */
/* eslint-disable camelcase */
const abstractSort_2 = require("./abstractSort");
/**
 * Class that sorts artist objects by name
 */
class ArtistNameSort extends abstractSort_2.GeneralSort {
    /**
     * Recieves an artist array
     */
    constructor(artist) {
        super();
        this.artist = artist;
    }
    /**
     * Ascendent ordenation of the artist by name
     * @returns Artist array with sorted artist by name
     */
    greaterSort() {
        let auxiliary = [];
        for (let i = 0; i < this.artist.length; i++) {
            auxiliary.push(this.artist[i].getName());
        }
        auxiliary.sort();
        let result = [];
        for (let i = 0; i < auxiliary.length; i++) {
            for (let j = 0; j < this.artist.length; j++) {
                if (this.artist[j].getName() === auxiliary[i]) {
                    result.push(this.artist[j]);
                    console.log(this.artist[j].getName());
                }
            }
        }
        return result;
    }
    /**
     * Descendent ordenation of the artist by name
     * @returns Artist array with sorted artist by name
     */
    lowerSort() {
        let auxiliary = [];
        for (let i = 0; i < this.artist.length; i++) {
            auxiliary.push(this.artist[i].getName());
        }
        auxiliary.sort().reverse();
        let result = [];
        for (let i = 0; i < auxiliary.length; i++) {
            for (let j = 0; j < this.artist.length; j++) {
                if (this.artist[j].getName() === auxiliary[i]) {
                    result.push(this.artist[j]);
                    console.log(this.artist[j].getName());
                }
            }
        }
        return result;
    }
}
exports.ArtistNameSort = ArtistNameSort;

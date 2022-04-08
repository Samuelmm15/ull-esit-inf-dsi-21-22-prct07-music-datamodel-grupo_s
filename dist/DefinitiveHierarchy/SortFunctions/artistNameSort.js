"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistNameSort = void 0;
/* eslint-disable prefer-const */
/* eslint-disable camelcase */
const abstractSort_1 = require("./abstractSort");
class ArtistNameSort extends abstractSort_1.GeneralSort {
    constructor(artist) {
        super();
        this.artist = artist;
    }
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
                }
            }
        }
        return result;
    }
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
                }
            }
        }
        return result;
    }
}
exports.ArtistNameSort = ArtistNameSort;

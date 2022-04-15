"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumYearSort = void 0;
/* eslint-disable prefer-const */
/* eslint-disable camelcase */
const abstractSort_2 = require("./abstractSort");
/**
 * Class that sorts albums objects by year
 */
class AlbumYearSort extends abstractSort_2.GeneralSort {
    /**
     * Recieves an album array
     */
    constructor(album) {
        super();
        this.album = album;
    }
    /**
     * Ascendent ordenation of the album by year
     * @returns Album array with sorted album by year
     */
    greaterSort() {
        let auxiliary = [];
        for (let i = 0; i < this.album.length; i++) {
            auxiliary.push(this.album[i].getYearPublication());
        }
        auxiliary.sort();
        let result = [];
        for (let i = 0; i < auxiliary.length; i++) {
            for (let j = 0; j < this.album.length; j++) {
                if (this.album[j].getYearPublication() === auxiliary[i]) {
                    result.push(this.album[j]);
                }
            }
        }
        return result;
    }
    /**
     * Descendent ordenation of the album by year
     * @returns Album array with sorted album by year
     */
    lowerSort() {
        let auxiliary = [];
        for (let i = 0; i < this.album.length; i++) {
            auxiliary.push(this.album[i].getYearPublication());
        }
        auxiliary.sort().reverse();
        let result = [];
        for (let i = 0; i < auxiliary.length; i++) {
            for (let j = 0; j < this.album.length; j++) {
                if (this.album[j].getYearPublication() === auxiliary[i]) {
                    result.push(this.album[j]);
                }
            }
        }
        return result;
    }
}
exports.AlbumYearSort = AlbumYearSort;

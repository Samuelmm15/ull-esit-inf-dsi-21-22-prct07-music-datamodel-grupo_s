"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumSort = void 0;
/* eslint-disable prefer-const */
/* eslint-disable camelcase */
const abstractSort_1 = require("./abstractSort");
/**
 * Class that sorts albums elements by name
 */
class AlbumSort extends abstractSort_1.GeneralSort {
    /**
     * Recieves an album array
     */
    constructor(album) {
        super();
        this.album = album;
    }
    greaterSort() {
        let auxiliary = [];
        for (let i = 0; i < this.album.length; i++) {
            auxiliary.push(this.album[i].getName());
        }
        auxiliary.sort();
        let result = [];
        for (let i = 0; i < auxiliary.length; i++) {
            for (let j = 0; j < this.album.length; j++) {
                if (this.album[j].getName() === auxiliary[i]) {
                    result.push(this.album[j]);
                    console.log(this.album[j].getName());
                }
            }
        }
        return result;
    }
    lowerSort() {
        let auxiliary = [];
        for (let i = 0; i < this.album.length; i++) {
            auxiliary.push(this.album[i].getName());
        }
        auxiliary.sort().reverse();
        let result = [];
        for (let i = 0; i < auxiliary.length; i++) {
            for (let j = 0; j < this.album.length; j++) {
                if (this.album[j].getName() === auxiliary[i]) {
                    result.push(this.album[j]);
                    console.log(this.album[j].getName());
                }
            }
        }
        return result;
    }
}
exports.AlbumSort = AlbumSort;

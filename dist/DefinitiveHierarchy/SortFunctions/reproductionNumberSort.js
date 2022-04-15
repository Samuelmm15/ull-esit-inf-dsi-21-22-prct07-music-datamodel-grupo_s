"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReproductionNumberSort = void 0;
/* eslint-disable camelcase */
const abstractSort_2 = require("./abstractSort");
const songCollection_2 = require("../Collectionables/songCollection");
class ReproductionNumberSort extends abstractSort_2.GeneralSort {
    constructor(songs) {
        super();
        this.songs = songs;
    }
    lowerSort() {
        const ReproductionSort = [];
        let i = 0;
        let auxiliary = [];
        for (i = 0; i < this.songs.getColectionlength(); i++) {
            auxiliary.push(this.songs.getnObject(i));
        }
        i = 0;
        for (i = 0; i < auxiliary.length; i++) {
            ReproductionSort.push(auxiliary[i].getReproductionsNumber());
        }
        ReproductionSort.sort();
        auxiliary = [];
        i = 0;
        for (i = 0; i < this.songs.getColectionlength(); i++) {
            auxiliary.push(this.songs.getReproductionsNumber(ReproductionSort[i]));
        }
        console.log(ReproductionSort);
        const result = new songCollection_2.SongCollection(auxiliary);
        return result;
    }
    greaterSort() {
        const ReproductionSort = [];
        let i = 0;
        let auxiliary = [];
        for (i = 0; i < this.songs.getColectionlength(); i++) {
            auxiliary.push(this.songs.getnObject(i));
        }
        i = 0;
        for (i = 0; i < auxiliary.length; i++) {
            ReproductionSort.push(auxiliary[i].getReproductionsNumber());
        }
        ReproductionSort.sort().reverse();
        auxiliary = [];
        i = 0;
        for (i = 0; i < this.songs.getColectionlength(); i++) {
            auxiliary.push(this.songs.getReproductionsNumber(ReproductionSort[i]));
        }
        console.log(ReproductionSort);
        const result = new songCollection_2.SongCollection(auxiliary);
        return result;
    }
}
exports.ReproductionNumberSort = ReproductionNumberSort;

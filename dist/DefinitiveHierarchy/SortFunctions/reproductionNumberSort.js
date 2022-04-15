"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReproductionNumberSort = void 0;
/* eslint-disable camelcase */
const abstractSort_1 = require("./abstractSort");
const songCollection_1 = require("../Collectionables/songCollection");
/**
 * Class that sorts songs objects by reproductions
 */
class ReproductionNumberSort extends abstractSort_1.GeneralSort {
    /**
     * Recieves a song collection
     */
    constructor(songs) {
        super();
        this.songs = songs;
    }
    /**
     * Ascendent ordenation of the songs by reproductions
     * @returns Song collection with sorted songs by reproductions
     */
    greaterSort() {
        const ReproductionSort = [];
        let i = 0;
        let auxiliary = [];
        for (let i = 0; i < this.songs.getColectionlength(); i++) {
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
            console.log(`${auxiliary[i].getName()} ==> ${auxiliary[i].getReproductionsNumber()}`);
        }
        const result = new songCollection_1.SongCollection(auxiliary);
        return result;
    }
    /**
     * Descendent ordenation of the songs by reproductions
     * @returns Song collection with sorted songs by reproductions
     */
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
        ReproductionSort.sort().reverse();
        auxiliary = [];
        i = 0;
        for (i = 0; i < this.songs.getColectionlength(); i++) {
            auxiliary.push(this.songs.getReproductionsNumber(ReproductionSort[i]));
            console.log(`${auxiliary[i].getName()} ==> ${auxiliary[i].getReproductionsNumber()}`);
        }
        const result = new songCollection_1.SongCollection(auxiliary);
        return result;
    }
}
exports.ReproductionNumberSort = ReproductionNumberSort;

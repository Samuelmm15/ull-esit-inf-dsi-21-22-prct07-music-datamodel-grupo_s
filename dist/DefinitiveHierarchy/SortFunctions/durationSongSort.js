"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongDurationSort = void 0;
/* eslint-disable prefer-const */
/* eslint-disable camelcase */
const abstractSort_1 = require("./abstractSort");
const songCollection_1 = require("../Collectionables/songCollection");
/**
 * Class that sorts song objects by duration
 */
class SongDurationSort extends abstractSort_1.GeneralSort {
    /**
     * Recieves a song collection
     */
    constructor(song) {
        super();
        this.song = song;
    }
    /**
     * Ascendent ordenation of the songs by duration
     * @returns Songs collection with sorted songs by duration
     */
    greaterSort() {
        const ReproductionSort = [];
        let i = 0;
        let auxiliary = [];
        for (let i = 0; i < this.song.getColectionlength(); i++) {
            auxiliary.push(this.song.getnObject(i));
        }
        i = 0;
        for (i = 0; i < auxiliary.length; i++) {
            ReproductionSort.push(auxiliary[i].durationFormat());
        }
        ReproductionSort.sort();
        auxiliary = [];
        i = 0;
        for (i = 0; i < this.song.getColectionlength(); i++) {
            auxiliary.push(this.song.getDuration(ReproductionSort[i]));
            console.log(`${auxiliary[i].getName()} ==> ${auxiliary[i].getSongDuration()}`);
        }
        // console.log(ReproductionSort);
        const result = new songCollection_1.SongCollection(auxiliary);
        return result;
    }
    /**
     * Ascendent ordenation of the songs by duration
     * @returns Songs collection with sorted songs by duration
     */
    lowerSort() {
        const ReproductionSort = [];
        let i = 0;
        let auxiliary = [];
        for (i = 0; i < this.song.getColectionlength(); i++) {
            auxiliary.push(this.song.getnObject(i));
        }
        i = 0;
        for (i = 0; i < auxiliary.length; i++) {
            ReproductionSort.push(auxiliary[i].durationFormat());
        }
        ReproductionSort.sort().reverse();
        auxiliary = [];
        i = 0;
        for (i = 0; i < this.song.getColectionlength(); i++) {
            auxiliary.push(this.song.getDuration(ReproductionSort[i]));
            console.log(`${auxiliary[i].getName()} ==> ${auxiliary[i].getSongDuration()}`);
        }
        const result = new songCollection_1.SongCollection(auxiliary);
        return result;
    }
}
exports.SongDurationSort = SongDurationSort;

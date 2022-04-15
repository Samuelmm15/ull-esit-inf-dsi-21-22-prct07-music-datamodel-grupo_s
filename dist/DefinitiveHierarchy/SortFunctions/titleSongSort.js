"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitleSongSort = void 0;
/* eslint-disable camelcase */
const abstractSort_1 = require("./abstractSort");
const songCollection_1 = require("../Collectionables/songCollection");
/**
 * Class that sorts song objects by name
 */
class TitleSongSort extends abstractSort_1.GeneralSort {
    constructor(songs) {
        super();
        this.songs = songs;
    }
    /**
     * Ascendent ordenation of the songs by name
     * @returns Song collection with sorted songs by name
     */
    greaterSort() {
        const greaterTitleSort = [];
        let i = 0;
        let auxiliary = [];
        for (i = 0; i < this.songs.getColectionlength(); i++) {
            auxiliary.push(this.songs.getnObject(i));
        }
        i = 0;
        for (i = 0; i < auxiliary.length; i++) {
            greaterTitleSort.push(auxiliary[i].getName());
        }
        greaterTitleSort.sort();
        auxiliary = [];
        i = 0;
        for (i = 0; i < this.songs.getColectionlength(); i++) {
            auxiliary.push(this.songs.getSong(greaterTitleSort[i]));
            console.log(greaterTitleSort[i]);
        }
        const result = new songCollection_1.SongCollection(auxiliary);
        return result;
    }
    /**
     * Descendent ordenation of the songs by name
     * @returns Song collection with sorted songs by name
     */
    lowerSort() {
        const lowerTitleSort = [];
        let i = 0;
        let auxiliary = [];
        for (i = 0; i < this.songs.getColectionlength(); i++) {
            auxiliary.push(this.songs.getnObject(i));
        }
        i = 0;
        for (i = 0; i < auxiliary.length; i++) {
            lowerTitleSort.push(auxiliary[i].getName());
        }
        lowerTitleSort.sort().reverse();
        auxiliary = [];
        i = 0;
        for (i = 0; i < this.songs.getColectionlength(); i++) {
            auxiliary.push(this.songs.getSong(lowerTitleSort[i]));
            console.log(lowerTitleSort[i]);
        }
        const result = new songCollection_1.SongCollection(auxiliary);
        return result;
    }
}
exports.TitleSongSort = TitleSongSort;

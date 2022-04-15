"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitleSongSort = void 0;
/* eslint-disable camelcase */
const abstractSort_2 = require("./abstractSort");
const songCollection_2 = require("../Collectionables/songCollection");
class TitleSongSort extends abstractSort_2.GeneralSort {
    constructor(songs) {
        super();
        this.songs = songs;
    }
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
        }
        console.log(greaterTitleSort);
        const result = new songCollection_2.SongCollection(auxiliary);
        return result;
    }
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
        }
        console.log(lowerTitleSort);
        const result = new songCollection_2.SongCollection(auxiliary);
        return result;
    }
}
exports.TitleSongSort = TitleSongSort;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title_Sort = void 0;
/* eslint-disable camelcase */
const abstractSort_1 = require("./abstractSort");
const songCollection_1 = require("../Collectionables/songCollection");
class Title_Sort extends abstractSort_1.GeneralSort {
    constructor(songs) {
        super();
        this.songs = songs;
    }
    greaterSort() {
        let greaterTitleSort = [];
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
        const result = new songCollection_1.SongCollection(auxiliary);
        return result;
    }
    lowerSort() {
        const result = new songCollection_1.SongCollection([]);
        let lowerTitleSort = [];
        let i = 0;
        const auxiliary = [];
        for (i = 0; i < this.songs.getColectionlength(); i++) {
            auxiliary.push(this.songs.getnObject(i));
        }
        i = 0;
        for (i = 0; i < auxiliary.length; i++) {
            lowerTitleSort.push(auxiliary[i].getName());
        }
        lowerTitleSort.sort().reverse();
        console.log(lowerTitleSort);
        return result;
    }
}
exports.Title_Sort = Title_Sort;

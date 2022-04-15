"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenreSort = void 0;
const abstractSort_2 = require("./abstractSort");
const genreCollection_1 = require("../Collectionables/genreCollection");
/**
 * Class that sorts genre objects by name
 */
class GenreSort extends abstractSort_2.GeneralSort {
    /**
     * Recieves a music genre array
     */
    constructor(genreList) {
        super();
        this.genreList = genreList;
    }
    /**
     * Ascendent ordenation of the music genre by name
     * @returns Music genre collection with sorted music genre by name
     */
    greaterSort() {
        const greaterGenreSort = [];
        let auxiliary = [];
        for (let i = 0; i < this.genreList.getColectionlength(); i++) {
            auxiliary.push(this.genreList.getnObject(i));
        }
        for (let i = 0; i < auxiliary.length; i++) {
            greaterGenreSort.push(auxiliary[i].getName());
        }
        greaterGenreSort.sort();
        auxiliary = [];
        for (let i = 0; i < this.genreList.getColectionlength(); i++) {
            auxiliary.push(this.genreList.getGenre(greaterGenreSort[i]));
            console.log(greaterGenreSort[i]);
        }
        const result = new genreCollection_1.GenreCollection(auxiliary);
        return result;
    }
    /**
     * Descendent ordenation of the music genre by name
     * @returns Music genre collection with sorted music genre by name
     */
    lowerSort() {
        const greaterGenreSort = [];
        let auxiliary = [];
        for (let i = 0; i < this.genreList.getColectionlength(); i++) {
            auxiliary.push(this.genreList.getnObject(i));
        }
        for (let i = 0; i < auxiliary.length; i++) {
            greaterGenreSort.push(auxiliary[i].getName());
        }
        greaterGenreSort.sort().reverse();
        auxiliary = [];
        for (let i = 0; i < this.genreList.getColectionlength(); i++) {
            auxiliary.push(this.genreList.getGenre(greaterGenreSort[i]));
            console.log(greaterGenreSort[i]);
        }
        const result = new genreCollection_1.GenreCollection(auxiliary);
        return result;
    }
}
exports.GenreSort = GenreSort;

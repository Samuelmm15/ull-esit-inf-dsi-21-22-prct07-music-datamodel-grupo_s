"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongCol = void 0;
class SongCol {
    constructor(SolcollectionSet) {
        this.SolcollectionSet = new Set(SolcollectionSet);
        SolcollectionSet.forEach((element) => {
            this.SolcollectionSet.add(element);
        });
    }
    addSong(song) {
        this.SolcollectionSet.add(song);
    }
    getSong(song) {
        return this.SolcollectionSet;
    }
    [Symbol.iterator]() {
        return this.SolcollectionSet.values();
    }
}
exports.SongCol = SongCol;

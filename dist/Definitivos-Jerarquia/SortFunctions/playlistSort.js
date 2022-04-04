"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaylistSort = void 0;
/* eslint-disable prefer-const */
const abstractSort_1 = require("./abstractSort");
// FALTA DEVOLVER DE MANERA CORRECTA LOS OBJETOS DE TIPO PLAYLIST
class PlaylistSort extends abstractSort_1.GeneralSort {
    constructor(playlist) {
        super();
        this.playlist = playlist;
    }
    greaterSort() {
        let auxiliary = [];
        for (let i = 0; i < this.playlist.length; i++) {
            auxiliary.push(this.playlist[i].getName());
        }
        auxiliary.sort();
        let result = [];
        return result;
    }
    lowerSort() {
        let auxiliary = [];
        for (let i = 0; i < this.playlist.length; i++) {
            auxiliary.push(this.playlist[i].getName());
        }
        auxiliary.reverse().sort();
        let result = [];
        return result;
    }
}
exports.PlaylistSort = PlaylistSort;

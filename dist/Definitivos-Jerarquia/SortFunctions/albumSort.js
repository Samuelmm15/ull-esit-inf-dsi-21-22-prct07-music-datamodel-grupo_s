"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumSort = void 0;
/* eslint-disable prefer-const */
/* eslint-disable camelcase */
const abstractSort_1 = require("./abstractSort");
// FALTA DEVOLVER DE MANERA CORRECTA LOS OBJETOS DE TIPO ALBUM
class AlbumSort extends abstractSort_1.GeneralSort {
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
        console.log(auxiliary);
        let result = [];
        return result;
    }
    lowerSort() {
        let auxiliary = [];
        for (let i = 0; i < this.album.length; i++) {
            auxiliary.push(this.album[i].getName());
        }
        auxiliary.sort().reverse();
        console.log(auxiliary);
        let result = [];
        return result;
    }
}
exports.AlbumSort = AlbumSort;

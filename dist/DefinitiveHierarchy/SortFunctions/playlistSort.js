"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaylistNameSort = void 0;
/* eslint-disable prefer-const */
const abstractSort_2 = require("./abstractSort");
/**
 * Class that sorts playlist objects by name
 */
class PlaylistNameSort extends abstractSort_2.GeneralSort {
    /**
     * Recieves a playlist array
     */
    constructor(playlist) {
        super();
        this.playlist = playlist;
    }
    /**
     * Ascendent ordenation of the playlists by name
     * @returns Playlist Array with sorted playlists by name
     */
    greaterSort() {
        let auxiliary = [];
        for (let i = 0; i < this.playlist.length; i++) {
            auxiliary.push(this.playlist[i].getName());
        }
        auxiliary.sort();
        let result = [];
        for (let i = 0; i < auxiliary.length; i++) {
            for (let j = 0; j < this.playlist.length; j++) {
                if (this.playlist[j].getName() === auxiliary[i]) {
                    result.push(this.playlist[j]);
                }
            }
        }
        return result;
    }
    /**
     * Descendent ordenation of the playlists by name
     * @returns Playlist Array with sorted playlists by name
     */
    lowerSort() {
        let auxiliary = [];
        for (let i = 0; i < this.playlist.length; i++) {
            auxiliary.push(this.playlist[i].getName());
        }
        auxiliary.reverse().sort();
        let result = [];
        for (let i = 0; i < auxiliary.length; i++) {
            for (let j = 0; j < this.playlist.length; j++) {
                if (this.playlist[j].getName() === auxiliary[i]) {
                    result.push(this.playlist[j]);
                }
            }
        }
        return result;
    }
}
exports.PlaylistNameSort = PlaylistNameSort;

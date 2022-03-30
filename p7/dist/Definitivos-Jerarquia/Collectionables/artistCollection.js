"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistsCollection = void 0;
/* eslint-disable linebreak-style */
const basicstreamablecollection_1 = require("./basicstreamablecollection");
class ArtistsCollection extends basicstreamablecollection_1.BasicStreamableCollection {
    constructor(artists) {
        super(artists);
        this.artists = artists;
    }
    getName(author) {
        let success = ``;
        for (let i = 0; i < this.artists.length; i++) {
            if (this.artists[i].getName() === author) {
                success = this.artists[i].getName();
            }
        }
        return success;
    }
}
exports.ArtistsCollection = ArtistsCollection;

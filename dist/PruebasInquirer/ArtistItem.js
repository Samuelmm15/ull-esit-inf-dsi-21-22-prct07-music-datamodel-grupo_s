"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistItem = void 0;
class ArtistItem {
    constructor(id, task, complete = false) {
        this.complete = false;
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    printDetails() {
        console.log(`${this.id}\t${this.task} ${this.complete ?
            "\t(complete)" : ""}`);
    }
}
exports.ArtistItem = ArtistItem;

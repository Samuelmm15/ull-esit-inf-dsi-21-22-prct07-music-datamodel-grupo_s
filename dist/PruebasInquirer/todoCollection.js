"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistCollectionInquire = void 0;
const artist_1 = require("../Definitivos-Jerarquia/Principal-Clases/artist");
class ArtistCollectionInquire {
    constructor(userName, Artists = []) {
        this.userName = userName;
        this.nextId = 1;
        this.itemMap = new Map();
        Artists.forEach((item) => this.itemMap.set(item.id, item));
    }
    addTodo(task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new artist_1.Artist(this.nextId, task));
        return this.nextId;
    }
    getTodoById(id) {
        return this.itemMap.get(id);
    }
    getArtists(includeComplete) {
        return [...this.itemMap.values()]
            .filter((item) => includeComplete || !item.complete);
    }
    markComplete(id, complete) {
        const Artist = this.getTodoById(id);
        if (Artist) {
            Artist.complete = complete;
        }
    }
    removeComplete() {
        this.itemMap.forEach((item) => {
            if (item.complete) {
                this.itemMap.delete(item.id);
            }
        });
    }
    getItemCounts() {
        return {
            total: this.itemMap.size,
            incomplete: this.getArtists(false).length,
        };
    }
}
exports.ArtistCollectionInquire = ArtistCollectionInquire;

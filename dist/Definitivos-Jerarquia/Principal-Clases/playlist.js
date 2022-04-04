"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Playlists = void 0;
/**
 * This class represents the structure of the
 * Playlists objects
 */
class Playlists {
    constructor(name, songs, duration, genre) {
        this.name = name;
        this.songs = songs;
        this.duration = duration;
        this.genre = genre;
    }
    getName() {
        return this.name;
    }
    getSongs() {
        return this.songs;
    }
    // Podríamos hacer una interfaz para esto
    getDuration() {
        return this.duration;
    }
    getGenre() {
        return this.genre;
    }
}
exports.Playlists = Playlists;

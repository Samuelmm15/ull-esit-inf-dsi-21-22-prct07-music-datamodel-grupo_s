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
    getSongs(song) {
        // return this.songs;
        return this.songs.filter((s) => s.getName() === song.getName());
    }
    // Podríamos hacer una interfaz para esto
    getDuration() {
        return this.duration;
    }
    getGenre(GenreName) {
        // return this.genre;
        for (let i = 0; i < this.genre.length; i++) {
            if (this.genre[i].getName() === GenreName) {
                return this.genre[i];
            }
        }
        return this.genre[0];
    }
}
exports.Playlists = Playlists;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Song = void 0;
/**
 * This class represents the structure of the
 * song objects
 */
class Song {
    /**
     * Creates an artist object
     * @param name Song name
     * @param author Artist objects that participates on the song
     * @param songDuration Song duration in minutes and seconds
     * @param genre Genre Song
     * @param single If song is a single or not
     * @param reproductionsNumber Number of repoductions of the song
     */
    constructor(name, author, songDuration, genre, single, reproductionsNumber) {
        this.name = name;
        this.author = author;
        this.songDuration = songDuration;
        this.genre = genre;
        this.single = single;
        this.reproductionsNumber = reproductionsNumber;
    }
    /**
     * Gets the name of the song
     * @return Song name
     */
    getName() {
        return this.name;
    }
    /**
     * Gets artist objects that participates on the song
     * @return Artist object
     */
    getAuthor(authorName) {
        // return this.author;
        for (let i = 0; i < this.author.length; i++) {
            if (authorName === this.author[i].getName()) {
                return this.author[i];
            }
        }
        return this.author[0]; // Default Option
    }
    /**
     * Gets song duration on string format
     * @return Song duration
     */
    getSongDuration() {
        return this.songDuration;
    }
    /**
     * Change duration song format to seconds
     * @return New duration format
     */
    durationFormat() {
        const prueba = this.getSongDuration().split(':');
        const minutes2Seconds = parseInt(prueba[0]) * 60;
        const result = minutes2Seconds + parseInt(prueba[1]);
        return result;
    }
    /**
     * Gets genre objects that the song has
     * @return Song genres
     */
    getGenre(genreName) {
        for (let i = 0; i < this.genre.length; i++) {
            if (genreName === this.genre[i].getName()) {
                return this.genre[i];
            }
        }
        return this.genre[0]; // Default Option
        // return this.genre;
    }
    /**
     * Gets if the song is a single or not
     * @return True if is a single, false if is not a single
     */
    getSingle() {
        return this.single;
    }
    /**
     * Gets reproduction number of the song
     * @return Number of reproductions of the song
     */
    getReproductionsNumber() {
        return this.reproductionsNumber;
    }
}
exports.Song = Song;

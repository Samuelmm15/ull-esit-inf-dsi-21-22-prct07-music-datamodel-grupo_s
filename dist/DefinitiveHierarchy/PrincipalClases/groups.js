"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
/**
 * This is the class that represents
 * the structure of the Group objects
 */
class Group {
    /**
     * Creates an artist object
     * @param name Group name
     * @param artists Artist objects that belongs to the group
     * @param genre Music genre of the group
     * @param albums Albums name of the group
     * @param monthlyListener Monthly Listeners of the group
     */
    constructor(name, artists, yearCreation, genre, albums, monthlyListener) {
        this.name = name;
        this.artists = artists;
        this.yearCreation = yearCreation;
        this.genre = genre;
        this.albums = albums;
        this.monthlyListener = monthlyListener;
    }
    /**
     * Gets the name of the group
     * @return Group name
     */
    getName() {
        return this.name;
    }
    /**
     * Gets artist objects that belongs to the group
     * @return Artist object
     */
    getArtists(artistName) {
        // return this.artists;
        for (let i = 0; i < this.artists.length; i++) {
            if (artistName === this.artists[i].getName()) {
                return this.artists[i];
            }
        }
        return this.artists[0]; // Default Option
    }
    /**
     * Gets the year Creation of the group
     * @return Year creation
     */
    getYearCreation() {
        return this.yearCreation;
    }
    /**
     * Gets the genre of the group
     * @return Genre name
     */
    getGenre() {
        return this.genre;
    }
    /**
     * Gets the albums of the group
     * @return Albums name
     */
    getAlbums() {
        return this.albums;
    }
    /**
     * Gets the number of monthly listeners
     * @return Monthly Listeners of the artist
     */
    getMonthlyListener() {
        return this.monthlyListener;
    }
}
exports.Group = Group;

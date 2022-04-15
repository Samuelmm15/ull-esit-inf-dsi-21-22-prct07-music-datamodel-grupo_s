"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonNewPlaylistCollection = void 0;
const lowdb_1 = __importDefault(require("lowdb"));
const FileSync_1 = __importDefault(require("lowdb/adapters/FileSync"));
// import { PlaylistCollectionOBJ } from '..';
// import { PlaylistCollection } from '../DefinitiveHierarchy/Collectionables/playlistCollection';
/**
 * Playlist data base class
 */
const content = require('../../JsonFiles/NewPlaylists.json');
// const content = readFileSync('../JsonFiles/Playlist.json', 'utf-8');
const data = content;
// export const NewPlaylistName: JsonNewPlaylistCollection[] = [NewcollectionPlaylists];
const gestorClass_1 = require("../GestorClass/gestorClass");
//  for (const object in data) {
//    if (data.hasOwnProperty(object)) {
//      const element = data[object];
//      NewPlaylistName.push(element);
//    }
class JsonNewPlaylistCollection {
    /**
     * Creates the JSON file that contains the playlist data base
     * @param Playlist Playlist array
    */
    constructor(Playlist) {
        this.database = (0, lowdb_1.default)(new FileSync_1.default("JsonFiles/NewPlaylists.json"));
        if (this.database.has("Playlist")) {
            console.log('La base de datos ha sido creada');
            // this.database.read();
        }
        else {
            this.database.set("Playlist", Playlist).write();
        }
    }
    /**
     * Adds new entries to the playlist data base
     * @param Playlist Playlist array
     */
    restart(Playlist) {
        // const PlaylistCollectionOBJaux = new PlaylistCollection([]);
        // if (PlaylistCollectionOBJaux.getPlaylistArray().length === 0) {
        //   this.database.set("Playlist", Playlist).write();
        // } else {
        //   PlaylistCollectionOBJaux.getPlaylistArray().forEach((element) => {
        //     PlaylistCollectionOBJ.addPlaylist(element);
        //     this.database.set("Playlist", Playlist).write();
        //   });
        //   this.database.set("Playlist", Playlist).write();
        // }
        // this.database.read();
        for (const object in data) {
            if (data.hasOwnProperty(object)) {
                const element = data[object];
                gestorClass_1.NewPlaylistName.push(element);
            }
        }
        this.database.set("Playlist", Playlist).write();
    }
    getSuperPlaylist(playlist) {
        return playlist;
    }
    read() {
        // console.log(this.database.read());
        const Playlist = [];
        return this.database.get("Playlist", Playlist).value();
        // console.log(Playlist);
    }
    write(data) {
        this.database.set("Playlist", data).write();
    }
}
exports.JsonNewPlaylistCollection = JsonNewPlaylistCollection;

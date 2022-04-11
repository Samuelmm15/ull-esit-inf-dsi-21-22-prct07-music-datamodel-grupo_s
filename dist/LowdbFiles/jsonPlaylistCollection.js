"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonPlaylistCollection = void 0;
const lowdb_1 = __importDefault(require("lowdb"));
const FileSync_1 = __importDefault(require("lowdb/adapters/FileSync"));
class JsonPlaylistCollection {
    constructor(Playlist) {
        this.database = (0, lowdb_1.default)(new FileSync_1.default("JsonFiles/Playlist.json"));
        this.database.set("Playlist", Playlist).write();
    }
    restart(Playlist) {
        this.database.set("Playlist", Playlist).write();
    }
}
exports.JsonPlaylistCollection = JsonPlaylistCollection;

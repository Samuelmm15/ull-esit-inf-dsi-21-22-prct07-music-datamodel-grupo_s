"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonSongCollection = void 0;
const songCollection_1 = require("../DefinitiveHierarchy/Collectionables/songCollection");
const lowdb_1 = __importDefault(require("lowdb"));
const FileSync_1 = __importDefault(require("lowdb/adapters/FileSync"));
class JsonSongCollection extends songCollection_1.SongCollection {
    constructor(SongItems) {
        super(SongItems);
        this.database = (0, lowdb_1.default)(new FileSync_1.default("JsonFiles/Song.json"));
        this.database.set("Song", SongItems).write();
    }
    restart(SongItems) {
        this.database.set("Song", SongItems).write();
    }
}
exports.JsonSongCollection = JsonSongCollection;

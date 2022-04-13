"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTodoCollection = void 0;
const artistCollection_1 = require("../DefinitiveHierarchy/Collectionables/artistCollection");
const lowdb_1 = __importDefault(require("lowdb"));
const FileSync_1 = __importDefault(require("lowdb/adapters/FileSync"));
/**
 * Artist data base class
 */
class JsonTodoCollection extends artistCollection_1.ArtistsCollection {
    /**
     * Creates the JSON file that contains the artist item data base
     * @param ArtistItems Artist array
     */
    constructor(ArtistItems) {
        super(ArtistItems);
        this.database = (0, lowdb_1.default)(new FileSync_1.default("JsonFiles/Artist.json"));
        this.database.set("Artist", ArtistItems).write();
    }
    /**
     * Adds new entries to the artist data base
     * @param ArtistItems Srtist collection
     */
    restart(ArtistItems) {
        this.database.set("Artist", ArtistItems).write();
    }
}
exports.JsonTodoCollection = JsonTodoCollection;

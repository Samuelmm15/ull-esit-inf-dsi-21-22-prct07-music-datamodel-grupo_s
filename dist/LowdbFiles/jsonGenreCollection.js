"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonGenreCollection = void 0;
const genreCollection_1 = require("../DefinitiveHierarchy/Collectionables/genreCollection");
const lowdb_1 = __importDefault(require("lowdb"));
const FileSync_1 = __importDefault(require("lowdb/adapters/FileSync"));
/**
 * Genre data base class
 */
class JsonGenreCollection extends genreCollection_1.GenreCollection {
    /**
     * Creates the JSON file that contains the genre data base
     * @param GenreItems Genre array
     */
    constructor(GenreItems) {
        super(GenreItems);
        this.database = (0, lowdb_1.default)(new FileSync_1.default("JsonFiles/Genre.json"));
        this.database.set("Genre", GenreItems).write();
    }
    /**
     * Adds new entries to the genre data base
     * @param GenreItems Genre collection
     */
    restart(GenreItems) {
        this.database.set("Genre", GenreItems).write();
    }
}
exports.JsonGenreCollection = JsonGenreCollection;

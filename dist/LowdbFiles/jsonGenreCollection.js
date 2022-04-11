"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonGenreCollection = void 0;
const genreCollection_1 = require("../DefinitiveHierarchy/Collectionables/genreCollection");
const lowdb_1 = __importDefault(require("lowdb"));
const FileSync_1 = __importDefault(require("lowdb/adapters/FileSync"));
class JsonGenreCollection extends genreCollection_1.GenreCollection {
    constructor(GenreItems) {
        super(GenreItems);
        this.database = (0, lowdb_1.default)(new FileSync_1.default("JsonFiles/Genre.json"));
        this.database.set("Genre", GenreItems).write();
    }
    restart(GenreItems) {
        this.database.set("Genre", GenreItems).write();
    }
}
exports.JsonGenreCollection = JsonGenreCollection;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonGroupCollection = void 0;
const lowdb_1 = __importDefault(require("lowdb"));
const FileSync_1 = __importDefault(require("lowdb/adapters/FileSync"));
/**
 * Group data base class
 */
class JsonGroupCollection {
    /**
     * Creates the JSON file that contains the group data base
     * @param GroupItem Group array
     */
    constructor(GroupItem) {
        this.database = (0, lowdb_1.default)(new FileSync_1.default("JsonFiles/Group.json"));
        this.database.set("Group", GroupItem).write();
    }
    /**
     * Adds new entries to the group data base
     * @param GroupItem Group array
     */
    restart(GroupItem) {
        this.database.set("Group", GroupItem).write();
    }
}
exports.JsonGroupCollection = JsonGroupCollection;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTodoCollection = void 0;
const ArtistItem_1 = require("./ArtistItem");
const todoCollection_1 = require("./todoCollection");
const lowdb_1 = __importDefault(require("lowdb"));
const FileSync_1 = __importDefault(require("lowdb/adapters/FileSync"));
class JsonTodoCollection extends todoCollection_1.TodoCollection {
    constructor(userName, ArtistItems = []) {
        super(userName, []);
        this.userName = userName;
        this.database = (0, lowdb_1.default)(new FileSync_1.default("Artist.json"));
        if (this.database.has("Artists").value()) {
            const dbItems = this.database.get("tasks").value();
            dbItems.forEach((item) => this.itemMap.set(item.id, new ArtistItem_1.ArtistItem(item.id, item.task, item.complete)));
        }
        else {
            this.database.set("tasks", ArtistItems).write();
            ArtistItems.forEach((item) => this.itemMap.set(item.id, item));
        }
    }
    addTodo(task) {
        const result = super.addTodo(task);
        this.storeTasks();
        return result;
    }
    markComplete(id, complete) {
        super.markComplete(id, complete);
        this.storeTasks();
    }
    removeComplete() {
        super.removeComplete();
        this.storeTasks();
    }
    storeTasks() {
        this.database.set("tasks", [...this.itemMap.values()]).write();
    }
}
exports.JsonTodoCollection = JsonTodoCollection;

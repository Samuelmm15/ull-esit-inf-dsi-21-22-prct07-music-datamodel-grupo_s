"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const artist_1 = require("./Definitivos-Jerarquia/Principal-Clases/artist");
const groups_1 = require("./Definitivos-Jerarquia/Principal-Clases/groups");
const musicGenre_1 = require("./Definitivos-Jerarquia/Principal-Clases/musicGenre");
const song_1 = require("./Definitivos-Jerarquia/Principal-Clases/song");
const album_1 = require("./Definitivos-Jerarquia/Principal-Clases/album");
const artistCollection_1 = require("./Definitivos-Jerarquia/Collectionables/artistCollection");
const songCollection_1 = require("./Definitivos-Jerarquia/Collectionables/songCollection");
const genreCollection_1 = require("./Definitivos-Jerarquia/Collectionables/genreCollection");
const albumSort_1 = require("./Definitivos-Jerarquia/SortFunctions/albumSort");
const inquirer = __importStar(require("inquirer"));
// import {SongDurationSort} from './Definitivos-Jerarquia/SortFunctions/durationSongSort';
const BadBunny = new artist_1.Artist('BadBunny', 'Iluminati', 'Reggae', 'Touralmundo', '2', 12);
const Bruno = new artist_1.Artist('Bruno', 'Arberto', 'Reggae', 'Touralmundo', '2', 12);
const Iluminati = new groups_1.Group('Iluminati', BadBunny, 2016, 'Reggae', 'Touralmundo', 12);
const Trap = new musicGenre_1.MusicGenre('Trap', Iluminati, BadBunny, 'Touralmundo', 'Chambea');
const Reggae = new musicGenre_1.MusicGenre('Reggae', Iluminati, BadBunny, 'Touralmundo', 'Chambea');
// eslint-disable-next-line no-unused-vars
// const Touralmundo = new Album('Touralmundo', Iluminati, BadBunny, 2016, Trap, Chambea);
const artistCollectionOBJ = new artistCollection_1.ArtistsCollection([Bruno, BadBunny]);
const genreCollectionOBJ = new genreCollection_1.GenreCollection([Trap, Reggae]);
// // SONG COLLECTION
const Chambea = new song_1.Song('Chambea', BadBunny, '5:30', Trap, true, 2016015);
const Netflix = new song_1.Song('Netflix', Bruno, '5:10', Trap, false, 2016010);
const ThisFeeling = new song_1.Song('This Feeling', Bruno, '5:20', Trap, true, 2016015);
const ALV = new song_1.Song('ALV', Bruno, '5:40', Trap, true, 2016015);
const songCollectionOBJ = new songCollection_1.SongCollection([Netflix, ThisFeeling, Chambea, ALV]);
// ALBUM COLLECTION
const albumOBJ = new album_1.Album('ALV', Iluminati, BadBunny, 2001, Trap, [ALV, Chambea]);
const albumOBJ1 = new album_1.Album('ErPepe', Iluminati, BadBunny, 2001, Trap, [ALV, Chambea]);
const albumSortOBJ = new albumSort_1.AlbumSort([albumOBJ, albumOBJ1]);
/** ********** NO BORREN ESTO ************/
const ArtistItem_1 = require("./PruebasInquirer/ArtistItem");
const jsonTodoCollection_1 = require("./PruebasInquirer/jsonTodoCollection");
const todos = [
    new ArtistItem_1.ArtistItem(1, "Bad Bunny"), new ArtistItem_1.ArtistItem(1, "Bad Bunny", true),
    new ArtistItem_1.ArtistItem(2, "Don Diablo"), new ArtistItem_1.ArtistItem(2, "Don Diablo", true)
];
const collection = new jsonTodoCollection_1.JsonTodoCollection("Bad Bunny", todos);
// const collection: TodoCollection = new TodoCollection("Adam", todos);
let showCompleted = true;
function displayTodoList() {
    console.log(`${collection.userName}'s Artist List ` +
        `(${collection.getItemCounts().incomplete} Artist List empty)`);
    collection.getArtistItems(showCompleted).forEach((item) => item.printDetails());
}
var Commands;
(function (Commands) {
    Commands["Add"] = "Add New Artist";
    Commands["Complete"] = "Artist Add Completed";
    Commands["Toggle"] = "Show/Hide Completed";
    Commands["Purge"] = "Remove Completed additions";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptAdd() {
    console.clear();
    inquirer.prompt({ type: "input", name: "add", message: "Enter Artist:" })
        .then((answers) => {
        if (answers["add"] !== "") {
            collection.addTodo(answers["add"]);
        }
        promptUser();
    });
}
function promptComplete() {
    console.clear();
    inquirer.prompt({ type: "checkbox", name: "complete",
        message: "Mark the artist you would delete",
        choices: collection.getArtistItems(showCompleted).map((item) => ({ name: item.task, value: item.id, checked: item.complete })),
    }).then((answers) => {
        const completedTasks = answers["complete"];
        collection.getArtistItems(true).forEach((item) => collection.markComplete(item.id, completedTasks.find((id) => id === item.id) != undefined));
        promptUser();
    });
}
function promptUser() {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands),
    }).then((answers) => {
        switch (answers["command"]) {
            case Commands.Toggle:
                showCompleted = !showCompleted;
                promptUser();
                break;
            case Commands.Add:
                promptAdd();
                break;
            case Commands.Complete:
                if (collection.getItemCounts().incomplete > 0) {
                    promptComplete();
                }
                else {
                    promptUser();
                }
                break;
            case Commands.Purge:
                collection.removeComplete();
                promptUser();
                break;
        }
    });
}
promptUser();

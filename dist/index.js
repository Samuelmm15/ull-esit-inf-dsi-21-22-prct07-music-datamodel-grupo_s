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
const durationSongSort_1 = require("./Definitivos-Jerarquia/SortFunctions/durationSongSort");
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
// console.log(albumSortOBJ.greaterSort());
// console.log(albumSortOBJ.lowerSort());
// console.log(Chambea.durationFormat());
// GENRE COLLECTION
// const genreSortOBJ = new GenreSort(genreCollectionOBJ);
// console.log(genreSortOBJ.greaterSort());
// console.log(genreSortOBJ.lowerSort());
const durationSortObj = new durationSongSort_1.SongDurationSort(songCollectionOBJ);
console.log(durationSortObj.greaterSort());
// console.log(albumOBJ);
// console.log();
// console.log('----------------------------');
// // console.log(songCollectionOBJ);
// // console.log(songCollectionOBJ.getColectionlength());
// // console.log(songCollectionOBJ.getnObject(2));
// console.log('----------------------------');
// console.log();
// console.log(artistCollection.getName('BadBunny'));
// console.log(artistCollection.getGroup('Iluminati'));
// console.log(artistCollection.getGenre('Reggae'));
// console.log(artistCollection.getAlbum('Touralmundo'));
// console.log(artistCollection.getPublishedSongs('BadBunny'));
// console.log(artistCollection.getMonthlyListeners('BadBunny'));
// console.log(artistCollection);
// const DonDiablo = new Artist('Don Diablo', 'Don Diablo', 'House Music', 'Future', '100', 1000000);
// artistCollection.addArtist(DonDiablo);
// console.log(artistCollection);
// console.log();
// console.log(songCollection.getSongAuthor(BadBunny));
// console.log();
// console.log(genreCollection.getGenre('Trap'));
// console.log();
// console.log();
// console.log(artistCollection.getArtist('BadBunny'));
// console.log('Prueba eliminar datos');
// console.log('Artista');
// console.log(artistCollection.getRemoveIndex('BadBunny'));
// console.log('Canción');
// console.log(songCollectionOBJ.getRemoveIndex('Netflix'));
// console.log('+ Canciones --------------');
// console.log(songCollectionOBJ.addSong(Netflix));
// console.log(songCollection.addSong(Chambea));
// console.log('Genero');
// console.log(genreCollection.getRemoveIndex('Trap'));
// Pruebas de la ordenación
// const greaterTitleSortOBJ = new TitleSongSort(songCollectionOBJ);
// console.log();
// console.log();
// greaterTitleSortOBJ.greaterSort();
// greaterTitleSortOBJ.lowerSort();
// const greaterReproduction = new ReproductionNumberSort(songCollectionOBJ);
// greaterReproduction.lowerSort();
// greaterReproduction.greaterSort();
// greaterTitleSortObject.greaterSort();
// const singleFilterOBJ = new SingleFilter(songCollectionOBJ);
// console.log(singleFilterOBJ.filter());
/* const yearAlbum = new AlbumYearSort([albumOBJ, albumOBJ1]);
yearAlbum.lowerSort();

const artistNameSort = new ArtistNameSort([Bruno, BadBunny]);
artistNameSort.lowerSort();*/
/** ********** NO BORREN ESTO ************/
const todoItem_1 = require("./PruebasInquirer/todoItem");
const todoCollection_1 = require("./PruebasInquirer/todoCollection");
const todos = [
    new todoItem_1.TodoItem(1, "Buy Flowers"), new todoItem_1.TodoItem(2, "Get Shoes"),
    new todoItem_1.TodoItem(3, "Collect Tickets"), new todoItem_1.TodoItem(4, "Call Joe", true)
];
const collection = new todoCollection_1.TodoCollection("Adam", todos);
let showCompleted = true;
function displayTodoList() {
    console.log(`${collection.userName}'s Todo List ` +
        `(${collection.getItemCounts().incomplete} items to do)`);
    collection.getTodoItems(showCompleted).forEach((item) => item.printDetails());
}
var Commands;
(function (Commands) {
    Commands["Add"] = "Add New Task";
    Commands["Complete"] = "Complete Task";
    Commands["Toggle"] = "Show/Hide Completed";
    Commands["Purge"] = "Remove Completed Tasks";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptAdd() {
    console.clear();
    inquirer.prompt({ type: "input", name: "add", message: "Enter task:" })
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
        message: "Mark Tasks Complete",
        choices: collection.getTodoItems(showCompleted).map((item) => ({ name: item.task, value: item.id, checked: item.complete })),
    }).then((answers) => {
        const completedTasks = answers["complete"];
        collection.getTodoItems(true).forEach((item) => collection.markComplete(item.id, completedTasks.find((id) => id === item.id) != undefined));
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

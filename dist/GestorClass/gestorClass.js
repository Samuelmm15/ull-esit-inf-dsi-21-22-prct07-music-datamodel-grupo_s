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
exports.Gestor = void 0;
const titleSongSort_1 = require("../DefinitiveHierarchy/SortFunctions/titleSongSort");
const process_1 = require("process");
const events_1 = require("events");
const songCollection_1 = require("../DefinitiveHierarchy/Collectionables/songCollection");
const genreCollection_1 = require("../DefinitiveHierarchy/Collectionables/genreCollection");
const albumSort_1 = require("../DefinitiveHierarchy/SortFunctions/albumSort");
const reproductionNumberSort_1 = require("../DefinitiveHierarchy/SortFunctions/reproductionNumberSort");
const singleFilter_1 = require("../DefinitiveHierarchy/SortFunctions/singleFilter");
const artistNameSort_1 = require("../DefinitiveHierarchy/SortFunctions/artistNameSort");
const groupNameSort_1 = require("../DefinitiveHierarchy/SortFunctions/groupNameSort");
const genreSort_1 = require("../DefinitiveHierarchy/SortFunctions/genreSort");
const durationSongSort_1 = require("../DefinitiveHierarchy/SortFunctions/durationSongSort");
const inquirer = __importStar(require("inquirer"));
const index_1 = require("../index");
const index_2 = require("../index");
const index_3 = require("../index");
const index_4 = require("../index");
const index_5 = require("../index");
// INQUIRE FUNCTIONS
function displayPlayList() {
    console.log('<< PLAYLIST COLLECTION >>');
    for (let i = 0; i < index_1.PlaylistCollectionOBJ.getColectionlength(); i++) {
        console.log(`${index_1.PlaylistCollectionOBJ.getnObject(i).getName()} ==> ${index_1.PlaylistCollectionOBJ.getnObject(i).getDuration()}`);
    }
    console.log();
    console.log('<< MUSICAL GENRES >>');
    for (let i = 0; i < index_2.GenresCollectionObj.getColectionlength(); i++) {
        console.log(index_2.GenresCollectionObj.getnObject(i).getName());
    }
    console.log();
}
var Commands;
(function (Commands) {
    Commands["Add"] = "Add New Playlist";
    Commands["Toggle"] = "Defaults Playlists";
    Commands["Purge"] = "Remove New Added Playlist";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
var SortCommands;
(function (SortCommands) {
    SortCommands["Greater"] = "Greater Sort";
    SortCommands["Lower"] = "Lower Sort";
    SortCommands["Default"] = "Default Sort";
})(SortCommands || (SortCommands = {}));
var OptionsToSort;
(function (OptionsToSort) {
    OptionsToSort["Songs"] = "Song Sort";
    OptionsToSort["Artists"] = "Artist Sort";
    OptionsToSort["Albums"] = "Album Sort";
    OptionsToSort["Genre"] = "Genre Sort";
    OptionsToSort["Group"] = "Group Sort";
    OptionsToSort["Reproduction"] = "Reproduction Sort";
    OptionsToSort["Duration"] = "Songs Duration Sort";
    OptionsToSort["Filter"] = "Filter Single Songs";
})(OptionsToSort || (OptionsToSort = {}));
function promptAdd() {
    console.clear();
    // FALTA AÑADIR LA FUNCIÓN DE AÑADIR NUEVAS PLAYLISTS
}
function greaterSort(playlistName) {
    console.clear();
    inquirer.prompt({ type: "list",
        name: "OptionsToSort",
        message: "Choose option",
        choices: Object.values(OptionsToSort) })
        .then((answers) => {
        switch (answers["OptionsToSort"]) {
            case OptionsToSort.Albums:
                console.clear();
                let AlbumSortCollection = new albumSort_1.AlbumSort(index_3.AlbumCollectionOBJ);
                AlbumSortCollection.greaterSort();
                defaultMenuReturn();
                break;
            case OptionsToSort.Artists:
                console.clear();
                let ArtistNameSortCollection = new artistNameSort_1.ArtistNameSort(index_4.artistArray);
                ArtistNameSortCollection.greaterSort();
                defaultMenuReturn();
                break;
            case OptionsToSort.Duration:
                console.clear();
                let PlaylistOBJ1 = index_1.PlaylistCollectionOBJ.getPlaylist(playlistName);
                let SongArray1 = PlaylistOBJ1.getSongsArray();
                let collectionSongs1 = new songCollection_1.SongCollection(SongArray1);
                let DurationSongSort = new durationSongSort_1.SongDurationSort(collectionSongs1);
                DurationSongSort.greaterSort();
                defaultMenuReturn();
                break;
            case OptionsToSort.Filter:
                console.clear();
                let PlaylistOBJ2 = index_1.PlaylistCollectionOBJ.getPlaylist(playlistName);
                let SongArray2 = PlaylistOBJ2.getSongsArray();
                let collectionSongs2 = new songCollection_1.SongCollection(SongArray2);
                let FilterSortCollectionSongs = new singleFilter_1.SingleFilter(collectionSongs2);
                FilterSortCollectionSongs.filter();
                defaultMenuReturn();
                break;
            case OptionsToSort.Genre:
                console.clear();
                let PlaylistOBJ3 = index_1.PlaylistCollectionOBJ.getPlaylist(playlistName);
                let GenreArray = PlaylistOBJ3.getGenreArray();
                let collectionGenre = new genreCollection_1.GenreCollection(GenreArray);
                let GenreSortCollection = new genreSort_1.GenreSort(collectionGenre);
                GenreSortCollection.greaterSort();
                defaultMenuReturn();
                break;
            case OptionsToSort.Group:
                console.clear();
                let GroupNameSortCollection = new groupNameSort_1.GroupNameSort(index_5.GroupCollectionOBJ);
                GroupNameSortCollection.greaterSort();
                defaultMenuReturn();
                break;
            case OptionsToSort.Reproduction:
                console.clear();
                let PlaylistOBJ4 = index_1.PlaylistCollectionOBJ.getPlaylist(playlistName);
                let SongArray4 = PlaylistOBJ4.getSongsArray();
                let collectionSongs4 = new songCollection_1.SongCollection(SongArray4);
                let ReproductionSongSort = new reproductionNumberSort_1.ReproductionNumberSort(collectionSongs4);
                ReproductionSongSort.greaterSort();
                defaultMenuReturn();
                break;
            case OptionsToSort.Songs:
                console.clear();
                let PlaylistOBJ5 = index_1.PlaylistCollectionOBJ.getPlaylist(playlistName);
                let SongArray5 = PlaylistOBJ5.getSongsArray();
                let collectionSongs5 = new songCollection_1.SongCollection(SongArray5);
                let GreaterSortCollectionSongs = new titleSongSort_1.TitleSongSort(collectionSongs5);
                GreaterSortCollectionSongs.greaterSort();
                defaultMenuReturn();
                break;
        }
    });
}
function lowerSort(playlistName) {
    console.clear();
    inquirer.prompt({
        type: "list",
        name: "OptionSort",
        message: "Choose option",
        choices: Object.values(OptionsToSort)
    })
        .then((answers) => {
        switch (answers["OptionSort"]) {
            case OptionsToSort.Albums:
                console.clear();
                let AlbumSortCollection = new albumSort_1.AlbumSort(index_3.AlbumCollectionOBJ);
                AlbumSortCollection.lowerSort();
                defaultMenuReturn();
                break;
            case OptionsToSort.Artists:
                console.clear();
                let ArtistNameSortCollection = new artistNameSort_1.ArtistNameSort(index_4.artistArray);
                ArtistNameSortCollection.lowerSort();
                defaultMenuReturn();
                break;
            case OptionsToSort.Duration:
                console.clear();
                let PlaylistOBJ1 = index_1.PlaylistCollectionOBJ.getPlaylist(playlistName);
                let SongArray1 = PlaylistOBJ1.getSongsArray();
                let collectionSongs1 = new songCollection_1.SongCollection(SongArray1);
                let DurationSongSort = new durationSongSort_1.SongDurationSort(collectionSongs1);
                DurationSongSort.lowerSort();
                defaultMenuReturn();
                break;
            case OptionsToSort.Filter:
                console.clear();
                let PlaylistOBJ2 = index_1.PlaylistCollectionOBJ.getPlaylist(playlistName);
                let SongArray2 = PlaylistOBJ2.getSongsArray();
                let collectionSongs2 = new songCollection_1.SongCollection(SongArray2);
                let FilterSortCollectionSongs = new singleFilter_1.SingleFilter(collectionSongs2);
                FilterSortCollectionSongs.filter();
                defaultMenuReturn();
                break;
            case OptionsToSort.Genre:
                console.clear();
                let PlaylistOBJ3 = index_1.PlaylistCollectionOBJ.getPlaylist(playlistName);
                let GenreArray = PlaylistOBJ3.getGenreArray();
                let collectionGenre = new genreCollection_1.GenreCollection(GenreArray);
                let GenreSortCollection = new genreSort_1.GenreSort(collectionGenre);
                GenreSortCollection.lowerSort();
                defaultMenuReturn();
                break;
            case OptionsToSort.Group:
                console.clear();
                let GroupNameSortCollection = new groupNameSort_1.GroupNameSort(index_5.GroupCollectionOBJ);
                GroupNameSortCollection.lowerSort();
                defaultMenuReturn();
                break;
            case OptionsToSort.Reproduction:
                console.clear();
                let PlaylistOBJ4 = index_1.PlaylistCollectionOBJ.getPlaylist(playlistName);
                let SongArray4 = PlaylistOBJ4.getSongsArray();
                let collectionSongs4 = new songCollection_1.SongCollection(SongArray4);
                let ReproductionSongSort = new reproductionNumberSort_1.ReproductionNumberSort(collectionSongs4);
                ReproductionSongSort.lowerSort();
                defaultMenuReturn();
                break;
            case OptionsToSort.Songs:
                console.clear();
                let PlaylistOBJ5 = index_1.PlaylistCollectionOBJ.getPlaylist(playlistName);
                let SongArray5 = PlaylistOBJ5.getSongsArray();
                let collectionSongs5 = new songCollection_1.SongCollection(SongArray5);
                let GreaterSortCollectionSongs = new titleSongSort_1.TitleSongSort(collectionSongs5);
                GreaterSortCollectionSongs.lowerSort();
                defaultMenuReturn();
                break;
        }
    });
}
function promptDefault() {
    console.clear();
    let selectedPlaylist = '';
    inquirer.prompt({
        type: "list",
        name: "PlaylistSelector",
        message: "Select a Playlist to see: ",
        choices: index_1.PlaylistCollectionOBJ.getPlaylistArray().map((item) => ({ name: index_1.PlaylistCollectionOBJ.getName(item.getName()) }))
    })
        .then((answers) => {
        selectedPlaylist = answers["PlaylistSelector"];
        console.clear();
        console.log(`La playlist seleccionada ha sido: ${selectedPlaylist}`);
        console.log();
        inquirer.prompt({ type: "list", name: "SortCommand", message: "Choose option", choices: Object.values(SortCommands) })
            .then((answers) => {
            switch (answers["SortCommand"]) {
                case SortCommands.Greater:
                    greaterSort(selectedPlaylist);
                    break;
                case SortCommands.Lower:
                    lowerSort(selectedPlaylist);
                    break;
                case SortCommands.Default:
                    greaterSort(selectedPlaylist); // This is the default option
                    break;
            }
        });
    });
}
function promptDelete() {
    console.clear();
    // ELIMINAR LAS PLAYLISTS QUE ESTÁN CREADAS POR EL PROPIO USUARIO
}
function defaultMenuReturn() {
    inquirer.prompt({ type: "input", name: "Continue", message: "Do you want to return to the main screen ? (y/N): " })
        .then((answers) => {
        if (answers["Continue"] === "y") {
            promptUser();
        }
        else {
            (0, process_1.exit)();
        }
    });
}
function promptUser() {
    (0, events_1.setMaxListeners)(100);
    console.clear();
    displayPlayList();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands),
    }).then((answers) => {
        switch (answers["command"]) {
            case Commands.Toggle:
                promptDefault();
                break;
            case Commands.Add:
                promptAdd();
                break;
            case Commands.Purge:
                promptDelete();
                break;
            case Commands.Quit:
                console.clear();
                console.log(`<< Program Exit >>`);
                (0, process_1.exit)();
                break;
        }
    });
}
class Gestor {
    constructor() {
    }
    menu() {
        promptUser();
    }
}
exports.Gestor = Gestor;

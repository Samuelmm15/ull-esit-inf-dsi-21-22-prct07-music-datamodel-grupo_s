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
exports.NewPlaylistName = exports.NewcollectionPlaylists = exports.NewPlaylistCollectionOBJ = void 0;
const titleSongSort_1 = require("../DefinitiveHierarchy/SortFunctions/titleSongSort");
const process_1 = require("process");
const events_1 = require("events");
const playlist_1 = require("../DefinitiveHierarchy/PrincipalClases/playlist");
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
const jsonNewPlaylistCollection_1 = require("../LowdbFiles/jsonNewPlaylistCollection");
const index_2 = require("../index");
const index_3 = require("../index");
const index_4 = require("../index");
const index_5 = require("../index");
const index_6 = require("../index");
const playlistCollection_1 = require("../DefinitiveHierarchy/Collectionables/playlistCollection");
const index_7 = require("../index");
exports.NewPlaylistCollectionOBJ = new playlistCollection_1.PlaylistCollection([]);
exports.NewcollectionPlaylists = new jsonNewPlaylistCollection_1.JsonNewPlaylistCollection([]);
const auxarray = new jsonNewPlaylistCollection_1.JsonNewPlaylistCollection([]);
auxarray.read();
auxarray.write(exports.NewPlaylistCollectionOBJ);
exports.NewPlaylistName = [exports.NewcollectionPlaylists];
var Commands;
(function (Commands) {
    Commands["Toggle"] = "Defaults Options To Sort";
    Commands["Add"] = "Add New Playlist";
    Commands["New"] = "Add New Song to a Playlist";
    Commands["Delete"] = "Delete Song of a Playlist";
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
var OptionToAdd;
(function (OptionToAdd) {
    OptionToAdd["NewPlaylist"] = "Add a new playlist from scratch";
    OptionToAdd["UsingExistsPlaylist"] = "Adding a new playlist from an existing one";
})(OptionToAdd || (OptionToAdd = {}));
class Gestor {
    constructor() {
    }
    menu() {
        promptUser();
    }
}
const newMenu = new Gestor();
newMenu.menu();
// INQUIRE FUNCTIONS
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
            case Commands.New:
                promptPlaylistSelect('New');
                break;
            case Commands.Delete:
                promptPlaylistSelect('Delete');
                break;
            case Commands.Purge:
                promptDelete();
                break;
            case Commands.Quit:
                console.clear();
                console.log(`<< Program Exit >>`);
                (0, process_1.exit)();
        }
    });
}
function convertHMS(value) {
    let hours = Math.floor(value / 3600); // get hours
    let minutes = Math.floor((value - (hours * 3600)) / 60); // get minutes
    let seconds = value - (hours * 3600) - (minutes * 60); //  get seconds
    if (hours < 10) {
        hours = hours;
    }
    if (minutes < 10) {
        minutes = minutes;
    }
    if (seconds < 10) {
        seconds = seconds;
    }
    return hours + ' hrs ' + minutes + ' min ' + seconds + ' segs';
}
function displayPlayList() {
    console.clear();
    console.log('<< PLAYLIST COLLECTION >>');
    for (let i = 0; i < index_1.PlaylistCollectionOBJ.getColectionlength(); i++) {
        console.log(`${index_1.PlaylistCollectionOBJ.getnObject(i).getName()} ==> ${convertHMS(index_1.PlaylistCollectionOBJ.getnObject(i).getDuration())}`);
    }
    auxarray.restart(exports.NewPlaylistCollectionOBJ.getPlaylistArray());
    for (let i = 0; i < exports.NewPlaylistCollectionOBJ.getColectionlength(); i++) {
        console.log(`${exports.NewPlaylistCollectionOBJ.getnObject(i).getName()} ==> ${convertHMS(exports.NewPlaylistCollectionOBJ.getnObject(i).getDuration())}`);
        auxarray.read();
        auxarray.write(exports.NewPlaylistCollectionOBJ.getnObject(i));
        auxarray.restart(exports.NewPlaylistCollectionOBJ.getPlaylistArray());
    }
    console.log();
    console.log('<< MUSICAL GENRES >>');
    for (let i = 0; i < index_2.GenresCollectionObj.getColectionlength(); i++) {
        console.log(index_2.GenresCollectionObj.getnObject(i).getName());
    }
    console.log();
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
function promptAdd() {
    console.clear();
    inquirer.prompt({ type: "list",
        name: "OptionToAdd",
        message: "Choose option",
        choices: Object.values(OptionToAdd) })
        .then((answers) => {
        switch (answers["OptionToAdd"]) {
            case OptionToAdd.NewPlaylist:
                console.clear();
                newPlaylistFromScratch();
                break;
            case OptionToAdd.UsingExistsPlaylist:
                console.clear();
                newPlaylistUsingAnExisting();
                break;
        }
    });
}
function promptPlaylistSelect(type) {
    if (type === 'New') {
        inquirer.prompt({
            type: "list",
            name: "PlaylistSelector",
            message: "Select a Playlist to see: ",
            choices: index_1.PlaylistCollectionOBJ.getPlaylistArray().map((item) => ({ name: index_1.PlaylistCollectionOBJ.getName(item.getName()) }))
        })
            .then((answers) => {
            console.clear();
            addingNewSongs(index_1.PlaylistCollectionOBJ.getPlaylist(answers["PlaylistSelector"]));
        });
    }
    else if (type === 'Delete') {
        inquirer.prompt({
            type: "list",
            name: "PlaylistSelector",
            message: "Select a Playlist to see: ",
            choices: index_1.PlaylistCollectionOBJ.getPlaylistArray().map((item) => ({ name: index_1.PlaylistCollectionOBJ.getName(item.getName()) }))
        })
            .then((answers) => {
            console.clear();
            deleteSongs(index_1.PlaylistCollectionOBJ.getPlaylist(answers["PlaylistSelector"]));
        });
    }
}
function promptDelete() {
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
        const playlistSelected = index_1.PlaylistCollectionOBJ.getPlaylist(selectedPlaylist);
        if (playlistSelected.getsystemPlaylistBoolean() === false) {
            index_1.PlaylistCollectionOBJ.getRemoveIndex(playlistSelected.getName());
            index_6.collectionPlaylists.restart(index_1.PlaylistCollectionOBJ.getPlaylistArray());
            console.log('<< The selected playlist was deleted >>');
            defaultMenuReturn();
        }
        else {
            console.clear();
            console.log('<< The selected playlist is a system playlist >>');
            console.log('<< It cant be deleted >>');
            defaultMenuReturn();
        }
    });
}
function addingNewSongs(PlaylisToOperate) {
    console.clear();
    let SongToAdd = '';
    inquirer.prompt({ type: "list",
        name: "SongList",
        message: "Select a Song To Add: ",
        choices: index_7.SongCollectionOBJ.getSongArray().map((item) => ({ name: index_7.SongCollectionOBJ.getName(item.getName()) })) })
        .then((answers) => {
        SongToAdd = answers["SongList"];
        if (PlaylisToOperate.getSongString(SongToAdd) !== SongToAdd) {
            let songToAddOBJ = index_7.SongCollectionOBJ.getSong(SongToAdd);
            PlaylisToOperate.addSong(songToAddOBJ);
            index_6.collectionPlaylists.restart(index_1.PlaylistCollectionOBJ.getPlaylistArray());
            console.clear();
            console.log('<< The song has been added correctly >>');
            inquirer.prompt({
                type: "confirm",
                name: "AddNewSongs",
                message: "Do you want to add new Songs?"
            })
                .then((answers) => {
                if (answers["AddNewSongs"] === true) {
                    addingNewSongs(PlaylisToOperate);
                }
                else {
                    console.clear();
                    inquirer.prompt({ type: "confirm",
                        name: "SongsDelete",
                        message: "Do you want to delete any Song?" })
                        .then((answers) => {
                        if (answers["SongsDelete"] === true) {
                            deleteSongs(PlaylisToOperate);
                        }
                        else {
                            console.clear();
                            defaultMenuReturn();
                        }
                    });
                }
            });
        }
        else {
            console.clear();
            console.log('<< The song you are trying to add is already in the playlist >>');
            inquirer.prompt({
                type: "confirm",
                name: "AddNewSongs",
                message: "Do you want to add new Songs?"
            })
                .then((answers) => {
                if (answers["AddNewSongs"] === true) {
                    addingNewSongs(PlaylisToOperate);
                }
                else {
                    console.clear();
                    inquirer.prompt({ type: "confirm",
                        name: "SongsDelete",
                        message: "Do you want to delete any Song?" })
                        .then((answers) => {
                        if (answers["SongsDelete"] === true) {
                            deleteSongs(PlaylisToOperate);
                        }
                        else {
                            console.clear();
                            defaultMenuReturn();
                        }
                    });
                }
            });
        }
    });
}
function deleteSongs(PlaylistToOperate) {
    console.clear();
    let SongToDelete = '';
    inquirer.prompt({ type: "list",
        name: "SongList",
        message: "Select a Song To Delete: ",
        choices: index_1.PlaylistCollectionOBJ.getSongsArray(PlaylistToOperate.getName()).map((item) => ({ name: index_1.PlaylistCollectionOBJ.getSong(PlaylistToOperate, item) })) })
        .then((answers) => {
        SongToDelete = answers["SongList"];
        if (PlaylistToOperate.getSongString(SongToDelete) === SongToDelete) {
            let songToDeleteOBJ = index_7.SongCollectionOBJ.getSong(SongToDelete);
            PlaylistToOperate.getRemoveIndex(songToDeleteOBJ.getName());
            index_6.collectionPlaylists.restart(index_1.PlaylistCollectionOBJ.getPlaylistArray());
            console.clear();
            console.log('<< The song has been deleted correctly >>');
            inquirer.prompt({
                type: "confirm",
                name: "DeleteSongs",
                message: "Do you want to delete more Songs?"
            })
                .then((answers) => {
                if (answers["DeleteSongs"] === true) {
                    deleteSongs(PlaylistToOperate);
                }
                else {
                    console.clear();
                    inquirer.prompt({ type: "confirm",
                        name: "SongsAdd",
                        message: "Do you want to add new Songs to the playlist?" })
                        .then((answers) => {
                        if (answers["SongsAdd"] === true) {
                            addingNewSongs(PlaylistToOperate);
                        }
                        else {
                            defaultMenuReturn();
                        }
                    });
                }
            });
        }
    });
}
const fs = require('fs');
function newPlaylistFromScratch() {
    inquirer.prompt({ type: "input",
        name: "newName",
        message: "Enter the new playlist name:" })
        .then((answers) => {
        if (exports.NewPlaylistCollectionOBJ.getName(answers["newName"]) !== answers["newName"]) {
            let newPlaylistName = answers.newName;
            const newPlaylistUserAdded = new playlist_1.Playlists(newPlaylistName, [], 0, [], false);
            exports.NewPlaylistCollectionOBJ.addPlaylist(newPlaylistUserAdded);
            exports.NewcollectionPlaylists.restart(exports.NewPlaylistCollectionOBJ.getPlaylistArray());
            console.clear();
            inquirer.prompt({ type: "confirm",
                name: "SongsAdd",
                message: "Do you want to add new Songs to the playlist?" })
                .then((answers) => {
                if (answers["SongsAdd"] === true) {
                    addingNewSongs(newPlaylistUserAdded);
                }
                else {
                    console.clear();
                    console.log('<< You must to add any song if you want to create a playlist >>');
                    defaultMenuReturn();
                }
            });
        }
        else {
            console.clear();
            console.log('<< The playlist cannot be created because it already exists >>');
            defaultMenuReturn();
        }
    });
}
function newPlaylistUsingAnExisting() {
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
        console.log(`The selected playlist is: ${selectedPlaylist}`);
        console.log();
        let newPlaylistName = '';
        inquirer.prompt({ type: "input",
            name: "newName",
            message: "Enter the new playlist name:" })
            .then((answers) => {
            newPlaylistName = answers.newName;
            const playlistSelected = index_1.PlaylistCollectionOBJ.getPlaylist(selectedPlaylist);
            const auxiliary = playlistSelected.getSongsArray();
            const newPlaylistUserAdded = new playlist_1.Playlists(newPlaylistName, auxiliary, playlistSelected.getDuration(), playlistSelected.getGenreArray(), false);
            exports.NewPlaylistCollectionOBJ.addPlaylist(newPlaylistUserAdded);
            exports.NewcollectionPlaylists.restart(exports.NewPlaylistCollectionOBJ.getPlaylistArray());
            console.clear();
            inquirer.prompt({ type: "confirm",
                name: "SongsAdd",
                message: "Do you want to add new Songs to the playlist?" })
                .then((answers) => {
                if (answers["SongsAdd"] === true) {
                    addingNewSongs(newPlaylistUserAdded);
                }
                else {
                    console.clear();
                    inquirer.prompt({ type: "confirm",
                        name: "SongsDelete",
                        message: "Do you want to delete any Song?" })
                        .then((answers) => {
                        if (answers["SongsDelete"] === true) {
                            deleteSongs(newPlaylistUserAdded);
                        }
                        else {
                            console.clear();
                            defaultMenuReturn();
                        }
                    });
                }
            });
        });
    });
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
function defaultMenuReturn() {
    inquirer.prompt({ type: "confirm", name: "Continue", message: "Do you want to return to the main screen ?" })
        .then((answers) => {
        if (answers["Continue"] === true) {
            promptUser();
        }
        else {
            console.log('<< Program Exit >>');
            (0, process_1.exit)();
        }
    });
}

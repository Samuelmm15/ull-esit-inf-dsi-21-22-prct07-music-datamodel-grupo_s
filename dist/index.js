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
const inquirer = __importStar(require("inquirer"));
// import {SongDurationSort} from './Definitivos-Jerarquia/SortFunctions/durationSongSort';
// const Iluminati = new Group('Iluminati', BadBunny, 2016, 'Reggae', 'Touralmundo', 12);
// const Trap = new MusicGenre('Trap', Iluminati, BadBunny, 'Touralmundo', 'Chambea');
// const Reggae = new MusicGenre('Reggae', Iluminati, BadBunny, 'Touralmundo', 'Chambea');
// // eslint-disable-next-line no-unused-vars
// // const Touralmundo = new Album('Touralmundo', Iluminati, BadBunny, 2016, Trap, Chambea);
// const genreCollectionOBJ = new GenreCollection([Trap, Reggae]);
// // SONG COLLECTION
// const Chambea = new Song('Chambea', BadBunny, '5:30', Trap, true, 2016015);
// const Netflix = new Song('Netflix', Bruno, '5:10', Trap, false, 2016010);
// const ThisFeeling = new Song('This Feeling', Bruno, '5:20', Trap, true, 2016015);
// const ALV = new Song('ALV', Bruno, '5:40', Trap, true, 2016015);
// const songCollectionOBJ = new SongCollection([Netflix, ThisFeeling, Chambea, ALV]);
// // ALBUM COLLECTION
// const albumOBJ = new Album('ALV', Iluminati, BadBunny, 2001, Trap, [ALV, Chambea]);
// const albumOBJ1 = new Album('ErPepe', Iluminati, BadBunny, 2001, Trap, [ALV, Chambea]);
// const albumSortOBJ = new AlbumSort([albumOBJ, albumOBJ1]);
/** ********** NO BORREN ESTO ************/
const artist_1 = require("./DefinitiveHierarchy/PrincipalClases/artist");
const artistCollection_1 = require("./DefinitiveHierarchy/Collectionables/artistCollection");
const jsonTodoCollection_1 = require("./InquirerFiles/jsonTodoCollection");
const process_1 = require("process");
const events_1 = require("events");
// Artist objects
const BadBunny = new artist_1.Artist('BadBunny', 'Iluminati', 'Reggae', 'Touralmundo', '2', 12);
const Bruno = new artist_1.Artist('Bruno', 'Arberto', 'Reggae', 'Touralmundo', '2', 12);
const artistCollectionOBJ = new artistCollection_1.ArtistsCollection([Bruno, BadBunny]);
let collectionArtists = new jsonTodoCollection_1.JsonTodoCollection([Bruno, BadBunny]);
function displayTodoList() {
    console.log(`ARTIST COLLECTION`);
    for (let i = 0; i < artistCollectionOBJ.getArtistsCollectionLength(); i++) {
        console.log(artistCollectionOBJ.getArtistList(i));
    }
}
var Commands;
(function (Commands) {
    Commands["Add"] = "Add New Artist";
    Commands["Toggle"] = "Artist Added Default";
    Commands["Purge"] = "Remove New Added Artists";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptAdd() {
    console.clear();
    let flag = false;
    let ArtistName = ``;
    let groupName = ``;
    let genre = ``;
    let album = ``;
    let publishedSongs = ``;
    let monthlyListeners = 0;
    /** DE ESTA MANERA ES COMO SE AÑADEN VARIOS ELEMENTOS CON PROMPT
     * Mirar esta página: https://typescript.hotexamples.com/es/examples/inquirer/-/prompt/typescript-prompt-function-examples.html
    */
    inquirer.prompt([{ type: "input", name: "ArtistName", message: "Enter Artist Name:" },
        { type: "input", name: "GroupName", message: "Enter Group Name:" },
        { type: "input", name: "Genre", message: "Enter The Genre:" },
        { type: "input", name: "Album", message: "Enter Album Name:" },
        { type: "input", name: "PublishedSongs", message: "Enter the number of published songs:" },
        { type: "input", name: "monthlyListeners", message: "Enter the number of listeners:" }])
        .then((answers) => {
        ArtistName = `Luca`;
        groupName = answers.GroupName;
        genre = answers.Genre;
        album = answers.Album;
        publishedSongs = answers.PublishedSongs;
        monthlyListeners = answers.monthlyListeners;
        flag = true;
    });
    // FALTA QUE FUNCIONE ESTA PARTE, NO LO HACE BIEN
    if (flag !== false) {
        console.log(`Entra`);
        artistCollectionOBJ.addArtist(new artist_1.Artist(ArtistName, groupName, genre, album, publishedSongs, monthlyListeners));
        collectionArtists.restart(artistCollectionOBJ);
        promptUser();
    }
}
function promptDefault() {
    console.clear();
    console.log(`ARTIST DEFAULT COLLECTION`);
    for (let i = 0; i < artistCollectionOBJ.getArtistsCollectionLength(); i++) {
        console.log(artistCollectionOBJ.getArtistList(i));
    }
    inquirer.prompt({ type: "input", name: "Continue", message: "¿ You want to return to the main screen ? (y/N): " })
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
    displayTodoList();
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
                promptUser();
                break;
            case Commands.Quit:
                console.clear();
                console.log(`<< Program Exit >>`);
                (0, process_1.exit)();
                break;
        }
    });
}
promptUser();

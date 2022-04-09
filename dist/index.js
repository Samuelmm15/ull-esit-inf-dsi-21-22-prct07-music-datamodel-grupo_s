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
// ARTISTS 10
const BadBunny = new artist_1.Artist('BadBunny', 'BadBunny', 'Urban Latino', 'Amorfoda', '127', 47666987);
const Bruno = new artist_1.Artist('Bruno Mars', 'Bruno Mars', 'Pop', '24K Magic', '101', 52517377);
const Michael = new artist_1.Artist('Michael Jackson', 'Michael Jackson', 'Pop', 'Beat It', '263', 28171657);
const Ozuna = new artist_1.Artist('Ozuna', 'Ozuna', 'Urban Latino', 'Odisea', '158', 35236397);
const Eminem = new artist_1.Artist('Eminem', 'Eminem', 'Rap', 'Kamikaze', '100', 52908969);
const Elvis = new artist_1.Artist('Elvis Crespo', 'Grupo Mania', 'Merengue', 'Suavemente', '71', 3559552);
const DonDiablo = new artist_1.Artist('Don Diablo', 'Don Diablo', 'Electro House', 'Bad', '97', 7118670);
const RickAstley = new artist_1.Artist('Rick Astley', 'Rick Astley', 'Disco', 'Together Forever', '110', 5754965);
const MartinGarrix = new artist_1.Artist('Martin Garrix', 'Martin Garrix', 'EDM', 'Summer Days', '73', 22404740);
const Avicii = new artist_1.Artist('Avicii', 'Avicii', 'Dance', 'True', '98', 28729564);
// GROUP 5
// MUSIC GENRE 10
// SONGS 50
// ALBUM 5-10
// PLAYLIST 3
/** ********** NO BORREN ESTO ************/
const artist_1 = require("./DefinitiveHierarchy/PrincipalClases/artist");
const artistCollection_1 = require("./DefinitiveHierarchy/Collectionables/artistCollection");
const jsonTodoCollection_1 = require("./InquirerFiles/jsonTodoCollection");
const process_1 = require("process");
const events_1 = require("events");
// Artist objects
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
    let artistName = ``;
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
        artistName = answers.ArtistName;
        groupName = answers.GroupName;
        genre = answers.Genre;
        album = answers.Album;
        publishedSongs = answers.PublishedSongs;
        monthlyListeners = answers.monthlyListeners;
        artistCollectionOBJ.addArtist(new artist_1.Artist(artistName, groupName, genre, album, publishedSongs, monthlyListeners));
        collectionArtists.restart(artistCollectionOBJ);
        inquirer.prompt({ type: "input", name: "Continue", message: "Do you want to return to the main screen ? (y/N): " })
            .then((answers) => {
            if (answers["Continue"] === "y") {
                promptUser();
            }
            else {
                (0, process_1.exit)();
            }
        });
    });
}
function promptDefault() {
    console.clear();
    console.log(`ARTIST DEFAULT COLLECTION`);
    for (let i = 0; i < artistCollectionOBJ.getArtistsCollectionLength(); i++) {
        console.log(artistCollectionOBJ.getArtistList(i));
    }
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
function promptDelete() {
    console.clear();
    let artistName = ``;
    inquirer.prompt({ type: "input", name: "Delete", message: "Enter the name of the artist you wish to delete: " })
        .then((answer) => {
        artistName = answer.Delete;
        artistCollectionOBJ.getRemoveArtist(artistName);
        collectionArtists.restart(artistCollectionOBJ);
        inquirer.prompt({ type: "input", name: "Continue", message: "Do you want to return to the main screen ? (y/N): " })
            .then((answers) => {
            if (answers["Continue"] === "y") {
                promptUser();
            }
            else {
                (0, process_1.exit)();
            }
        });
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
promptUser();

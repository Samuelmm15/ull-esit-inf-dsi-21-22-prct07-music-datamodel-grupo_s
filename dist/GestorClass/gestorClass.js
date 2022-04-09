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
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const artist_1 = require("../DefinitiveHierarchy/PrincipalClases/artist");
const groups_1 = require("../DefinitiveHierarchy/PrincipalClases/groups");
const musicGenre_1 = require("../DefinitiveHierarchy/PrincipalClases/musicGenre");
const song_1 = require("../DefinitiveHierarchy/PrincipalClases/song");
const process_1 = require("process");
const events_1 = require("events");
const playlist_1 = require("../DefinitiveHierarchy/PrincipalClases/playlist");
const inquirer = __importStar(require("inquirer"));
// ARTISTS
const BadBunny = new artist_1.Artist('BadBunny', 'Iluminati', 'Reggae', 'Touralmundo', '2', 12);
const Bruno = new artist_1.Artist('Bruno', 'Arberto', 'Reggae', 'Touralmundo', '2', 12);
// GROUPS
const Iluminati = new groups_1.Group('Iluminati', BadBunny, 2016, 'Reggae', 'Touralmundo', 12);
// MUSIC GENRE
const Trap = new musicGenre_1.MusicGenre('Trap', Iluminati, BadBunny, 'Touralmundo', 'Chambea');
const Reggae = new musicGenre_1.MusicGenre('Reggae', Iluminati, BadBunny, 'Touralmundo', 'Chambea');
const Rock = new musicGenre_1.MusicGenre('Rock', Iluminati, BadBunny, 'Rock', 'Chambea');
// SONGS
const Chambea = new song_1.Song('Chambea', BadBunny, '5:30', Trap, true, 2016015);
const Netflix = new song_1.Song('Netflix', Bruno, '5:10', Trap, false, 2016010);
const ThisFeeling = new song_1.Song('This Feeling', Bruno, '5:20', Trap, true, 2016015);
const ALV = new song_1.Song('ALV', Bruno, '5:40', Trap, true, 2016015);
// PLAYLIST
const PlaylistTrap = new playlist_1.Playlists(`Trap Playlist`, [Chambea, Netflix, ALV], 50, Trap);
const PlaylistRock = new playlist_1.Playlists(`Rock Playlist`, [ThisFeeling, ALV], 10, Rock);
const allPlaylist = [PlaylistTrap, PlaylistRock];
// INQUIRE FUNCTIONS
function displayTodoList() {
    console.log(`PLAYLIST COLLECTION`);
    for (let i = 0; i < allPlaylist.length; i++) {
        console.log(allPlaylist[i].getName());
    }
}
var Commands;
(function (Commands) {
    Commands["Add"] = "Add New Playlist";
    Commands["Toggle"] = "Defaults Playlists";
    Commands["Purge"] = "Remove New Added Playlist";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptAdd() {
    console.clear();
    // FALTA AÑADIR LA FUNCIÓN DE AÑADIR NUEVAS PLAYLISTS
}
function promptDefault() {
    console.clear();
    // MOSTRAT LA COLECCIÓN POR DEFECTO
}
function promptDelete() {
    console.clear();
    // ELIMINAR LAS PLAYLISTS QUE ESTÁN CREADAS POR EL PROPIO USUARIO
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
class Gestor {
    constructor() {
    }
    // PARA COMENZAR, SE REALIZA LA PREVISUALIZACIÓN DE LAS PLAYLISTS
    previsualization() {
        // NOMBRE DE LA PLAYLIST
        // GÉNERO MUSICAL
        // DURACIÓN DE LA PLAYLIST
        promptUser();
    }
    // CONTINUA CON LA ORDENACIÓN Y LA OPCIONES DE ORDENACIÓN DE LOS DISTINTOS ELEMENTOS DE LAS PLAYLIST O DE LAS PROPIAS PLAYLISTS
    playlistsOrdenation() {
    }
    // CREACIÓN DE PLAYLISTS PROPIAS DEL PROPIO USUARIO
    userPlaylistCreation() {
    }
    // BORRAR PLAYLIST CREADAS POR LOS USUARIOS Y RECORDAR QUIÉN CREO CADA PLAYLIST
    userPlaylistDelete() {
    }
}
exports.Gestor = Gestor;

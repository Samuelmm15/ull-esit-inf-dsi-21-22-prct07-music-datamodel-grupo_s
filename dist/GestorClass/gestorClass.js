"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gestor = void 0;
// // INQUIRE FUNCTIONS
// function displayTodoList(): void {
//   console.log(`PLAYLIST COLLECTION`);
//   for (let i = 0; i < allPlaylist.length; i++) {
//     console.log(allPlaylist[i].getName());
//   }
// }
//     enum Commands {
//       Add = "Add New Playlist",
//       Toggle = "Defaults Playlists",
//       Purge = "Remove New Added Playlist",
//       Quit = "Quit"
//     }
// function promptAdd(): void {
//   console.clear();
//   // FALTA AÑADIR LA FUNCIÓN DE AÑADIR NUEVAS PLAYLISTS
// }
// function promptDefault(): void {
//   console.clear();
//   // MOSTRAT LA COLECCIÓN POR DEFECTO
// }
// function promptDelete(): void {
//   console.clear();
//   // ELIMINAR LAS PLAYLISTS QUE ESTÁN CREADAS POR EL PROPIO USUARIO
// }
// function promptUser(): void {
//   setMaxListeners(100);
//   console.clear();
//   displayTodoList();
//   inquirer.prompt({
//     type: "list",
//     name: "command",
//     message: "Choose option",
//     choices: Object.values(Commands),
//   }).then((answers) => {
//     switch (answers["command"]) {
//       case Commands.Toggle:
//         promptDefault();
//         break;
//       case Commands.Add:
//         promptAdd();
//         break;
//       case Commands.Purge:
//         promptDelete();
//         break;
//       case Commands.Quit:
//         console.clear();
//         console.log(`<< Program Exit >>`);
//         exit();
//         break;
//     }
//   });
// }
class Gestor {
    constructor() {
    }
    // PARA COMENZAR, SE REALIZA LA PREVISUALIZACIÓN DE LAS PLAYLISTS
    previsualization() {
        // NOMBRE DE LA PLAYLIST
        // GÉNERO MUSICAL
        // DURACIÓN DE LA PLAYLIST
        // promptUser();
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

/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import {Artist} from '../DefinitiveHierarchy/PrincipalClases/artist';
import {Group} from '../DefinitiveHierarchy/PrincipalClases/groups';
import {MusicGenre} from '../DefinitiveHierarchy/PrincipalClases/musicGenre';
import {Song} from '../DefinitiveHierarchy/PrincipalClases/song';
import {Album} from '../DefinitiveHierarchy/PrincipalClases/album';
import {ArtistsCollection} from '../DefinitiveHierarchy/Collectionables/artistCollection';
import {SongCollection} from '../DefinitiveHierarchy/Collectionables/songCollection';
import {GenreCollection} from '../DefinitiveHierarchy/Collectionables/genreCollection';
import {TitleSongSort} from '../DefinitiveHierarchy/SortFunctions/titleSongSort';
import {AlbumSort} from '../DefinitiveHierarchy/SortFunctions/albumSort';
import {ReproductionNumberSort} from '../DefinitiveHierarchy/SortFunctions/reproductionNumberSort';
import {SingleFilter} from '../DefinitiveHierarchy/SortFunctions/singleFilter';
import {AlbumYearSort} from '../DefinitiveHierarchy/SortFunctions/albumYearSort';
import {ArtistNameSort} from '../DefinitiveHierarchy/SortFunctions/artistNameSort';
import {GroupNameSort} from '../DefinitiveHierarchy/SortFunctions/groupNameSort';
import {GenreSort} from '../DefinitiveHierarchy/SortFunctions/genreSort';
import {SongDurationSort} from '../DefinitiveHierarchy/SortFunctions/durationSongSort';
import {exit} from 'process';
import {setMaxListeners} from 'events';
import {Playlists} from '../DefinitiveHierarchy/PrincipalClases/playlist';
import {JsonPlaylistCollection} from '../LowdbFiles/jsonPlaylistCollection';
import * as inquirer from 'inquirer';

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

export class Gestor {
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

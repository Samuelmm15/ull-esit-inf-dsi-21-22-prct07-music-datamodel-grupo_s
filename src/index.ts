/* eslint-disable prefer-const */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import {Artist} from "./DefinitiveHierarchy/PrincipalClases/artist";
import {ArtistsCollection} from "./DefinitiveHierarchy/Collectionables/artistCollection";
import {TitleSongSort} from './DefinitiveHierarchy/SortFunctions/titleSongSort';
import {JsonTodoCollection} from "./InquirerFiles/jsonTodoCollection";
import {exit} from 'process';
import {setMaxListeners} from 'events';
import {Group} from './DefinitiveHierarchy/PrincipalClases/groups';
import {MusicGenre} from './DefinitiveHierarchy/PrincipalClases/musicGenre';
import {Song} from './DefinitiveHierarchy/PrincipalClases/song';
import {Album} from './DefinitiveHierarchy/PrincipalClases/album';
import {SongCollection} from './DefinitiveHierarchy/Collectionables/songCollection';
import {GenreCollection} from './DefinitiveHierarchy/Collectionables/genreCollection';
import {AlbumSort} from './DefinitiveHierarchy/SortFunctions/albumSort';
import {ReproductionNumberSort} from './DefinitiveHierarchy/SortFunctions/reproductionNumberSort';
import {SingleFilter} from './DefinitiveHierarchy/SortFunctions/singleFilter';
import {AlbumYearSort} from './DefinitiveHierarchy/SortFunctions/albumYearSort';
import {ArtistNameSort} from './DefinitiveHierarchy/SortFunctions/artistNameSort';
import {GroupNameSort} from './DefinitiveHierarchy/SortFunctions/groupNameSort';
import {GenreSort} from './DefinitiveHierarchy/SortFunctions/genreSort';
import {SongDurationSort} from './DefinitiveHierarchy/SortFunctions/durationSongSort';
import * as inquirer from 'inquirer';
import {JsonGroupCollection} from "./InquirerFiles/jsonGroupCollection";
import {JsonGenreCollection} from "./InquirerFiles/jsonGenreCollection";

// ARTISTS 10 
// ESTO ESTÁ CORRECTO
const BadBunny = new Artist('BadBunny', 'BadBunny', ['Urban Latino'], ['Amorfoda'], '127', 47666987);
const Bruno = new Artist('Bruno Mars', 'Bruno Mars', ['Pop'], ['24K Magic'], '101', 52517377);
const Michael = new Artist('Michael Jackson', 'Michael Jackson', ['Pop'], ['Beat It'], '263', 28171657);
const Ozuna = new Artist('Ozuna', 'Ozuna', ['Urban Latino'], ['Odisea'], '158', 35236397);
const Eminem = new Artist('Eminem', 'Eminem', ['Rap'], ['Kamikaze'], '100', 52908969);
const Elvis = new Artist('Elvis Crespo', 'Grupo Mania', ['Merengue'], ['Suavemente'], '71', 3559552);
const DonDiablo = new Artist('Don Diablo', 'Don Diablo', ['Electro House'], ['Bad'], '97', 7118670);
const RickAstley = new Artist('Rick Astley', 'Rick Astley', ['Disco'], ['Together Forever'], '110', 5754965);
const MartinGarrix = new Artist('Martin Garrix', 'Martin Garrix', ['EDM'], ['Summer Days'], '73', 22404740);
const Avicii = new Artist('Avicii', 'Avicii', ['Dance'], ['True'], '98', 28729564);
const SteveHarris = new Artist('Steve Harris', 'Iron Maiden', ['Heavy Metal'], ['Senjutsu'], '204', 6591966);
const FreddieMercury = new Artist('Freddie Mercury', 'Queen', ['Rock'], ['Queen'], '188', 37276204);
const EstelleHorner = new Artist('Estelle Horner', 'Spice Girls', ['Pop'], ['Spice'], '57', 8614262);
const AdamLevine = new Artist('Adam Levine', 'Maroon 5', ['Pop', 'Rock'], ['Song About Jane'], '', 48803865)
const 

const artistCollectionOBJ = new ArtistsCollection([Bruno, BadBunny, Michael, Ozuna, Eminem, Elvis, DonDiablo, RickAstley, MartinGarrix, Avicii]);

let collectionArtists: JsonTodoCollection = new JsonTodoCollection([Bruno, BadBunny, Michael, Ozuna, Eminem, Elvis, DonDiablo, RickAstley, MartinGarrix, Avicii]);

// GROUP 5
// FALTA PONER LOS CANTANTES DE MANERA CORRECTA
const IronMaiden = new Group('Iron Maiden', [SteveHarris], 1975, 'Heavy Metal', 'Senjutsu', 6591966);
const Queen = new Group('Queen', [FreddieMercury], 1970, 'Rock', 'Queen', 37276204);
const SpiceGirls = new Group('Spice Girls', [EstelleHorner], 1994, 'Pop', 'Spice', 8614262);
const Maroon5 = new Group('Maroon 5', [AdamLevine], 2001, 'Pop', 'Song About Jane', 48803865);
const BackStreetBoys = new Group('Back Street Boys', [Elvis], 1993, 'Pop', 'BackStreet Boys', 13533750);

const GroupCollectionOBJ: Group[] = [IronMaiden, Queen, SpiceGirls, Maroon5, BackStreetBoys];

let collectionGroups: JsonGroupCollection = new JsonGroupCollection([IronMaiden, Queen, SpiceGirls, Maroon5, BackStreetBoys]);

// MUSIC GENRE 10
const Rock = new MusicGenre('Rock', IronMaiden, Elvis, 'Senjutsu', 'Two Minutes for MidNigth');
const Pop = new MusicGenre('Pop', SpiceGirls, Michael, 'Spice', 'WannaBe');
const Merengue = new MusicGenre('Merengue', Queen, Elvis, 'Suavemente', 'Suavemente');
const ElectroHouse = new MusicGenre('Electro House', IronMaiden, DonDiablo, 'Bad', 'Bad');
const Disco = new MusicGenre('Disco', BackStreetBoys, RickAstley, 'Together Forever', 'Never gonna give you up');
const Rap = new MusicGenre('Rap', Queen, Eminem, 'Kamikaze', 'Kamikaze');
const UrbanLatino = new MusicGenre('Urban Latino', Maroon5, Ozuna, 'Odisea', 'Odisea');
const EDM = new MusicGenre('EDM', SpiceGirls, MartinGarrix, 'Summer Days', 'Summer');
const Dance = new MusicGenre('Dance', Maroon5, Avicii, 'True', 'Levels');
const Classic = new MusicGenre('Classic', IronMaiden, BadBunny, '', '');

const GenresCollectionObj = new GenreCollection([Rock, Pop, Merengue, ElectroHouse, Disco, Rap, UrbanLatino, EDM, Dance, Classic]);

let collectionGenre: JsonGenreCollection = new JsonGenreCollection([Rock, Pop, Merengue, ElectroHouse, Disco, Rap, UrbanLatino, EDM, Dance, Classic]);

// SONGS 50
/** ********** BAD BUNNY SONGS ***************/
const BadBunny120 = new Song('120', BadBunny, '2:31', UrbanLatino, false, 96933446);

/** ********** BRUNO SONGS ***************/

/** ********** MICHALE JACKSON SONGS ***************/

/** ********** OZUNA SONGS ***************/

/** ********** EMINEM SONGS ***************/

/** ********** ELVIS CRESPO SONGS ***************/

/** ********** DON DIABLO SONGS ***************/

/** ********** RICK ASTLEY SONGS ***************/

/** ********** MARTIN GARRIX SONGS ***************/

/** ********** AVICII SONGS ***************/

/** ********** STEVE HARRIS SONGS ***************/

/** ********** FREDDIE MERCURY SONGS ***************/

// ALBUM 5-10


// PLAYLIST 3


/** ********** NO BORREN ESTO ************/

// function displayTodoList(): void {
//   console.log(`ARTIST COLLECTION`);
//   for (let i = 0; i < artistCollectionOBJ.getArtistsCollectionLength(); i++) {
//     console.log(artistCollectionOBJ.getArtistList(i));
//   }
// }
//     enum Commands {
//       Add = "Add New Artist",
//       Toggle = "Artist Added Default",
//       Purge = "Remove New Added Artists",
//       Quit = "Quit"
//     }
// function promptAdd(): void {
//   console.clear();
//   let artistName: string = ``;
//   let groupName: string = ``;
//   let genre: string = ``;
//   let album: string = ``;
//   let publishedSongs: string = ``;
//   let monthlyListeners: number = 0;
//   /** DE ESTA MANERA ES COMO SE AÑADEN VARIOS ELEMENTOS CON PROMPT 
//    * Mirar esta página: https://typescript.hotexamples.com/es/examples/inquirer/-/prompt/typescript-prompt-function-examples.html
//   */
//   inquirer.prompt([{type: "input", name: "ArtistName", message: "Enter Artist Name:"},
//     {type: "input", name: "GroupName", message: "Enter Group Name:"},
//     {type: "input", name: "Genre", message: "Enter The Genre:"},
//     {type: "input", name: "Album", message: "Enter Album Name:"},
//     {type: "input", name: "PublishedSongs", message: "Enter the number of published songs:"},
//     {type: "input", name: "monthlyListeners", message: "Enter the number of listeners:"}])
//       .then((answers) => {
//         artistName = answers.ArtistName;
//         groupName = answers.GroupName;
//         genre = answers.Genre;
//         album = answers.Album;
//         publishedSongs = answers.PublishedSongs;
//         monthlyListeners = answers.monthlyListeners;
//         artistCollectionOBJ.addArtist(new Artist(artistName, groupName, genre, album, publishedSongs, monthlyListeners))
//         collectionArtists.restart(artistCollectionOBJ);
//         inquirer.prompt({type: "input", name: "Continue", message: "Do you want to return to the main screen ? (y/N): "})
//             .then((answers) => {
//               if (answers["Continue"] === "y") {
//                 promptUser();
//               } else {
//                 exit();
//               }
//             });
//       });
// }
// function promptDefault(): void {
//   console.clear();
//   console.log(`ARTIST DEFAULT COLLECTION`);
//   for (let i = 0; i < artistCollectionOBJ.getArtistsCollectionLength(); i++) {
//     console.log(artistCollectionOBJ.getArtistList(i));
//   }
//   inquirer.prompt({type: "input", name: "Continue", message: "Do you want to return to the main screen ? (y/N): "})
//       .then((answers) => {
//         if (answers["Continue"] === "y") {
//           promptUser();
//         } else {
//           exit();
//         }
//       });
// }
// function promptDelete(): void {
//   console.clear();
//   let artistName: string = ``;
//   inquirer.prompt({type: "input", name: "Delete", message: "Enter the name of the artist you wish to delete: "})
//       .then((answer) => {
//         artistName = answer.Delete;
//         artistCollectionOBJ.getRemoveArtist(artistName);
//         collectionArtists.restart(artistCollectionOBJ);
//         inquirer.prompt({type: "input", name: "Continue", message: "Do you want to return to the main screen ? (y/N): "})
//             .then((answers) => {
//               if (answers["Continue"] === "y") {
//                 promptUser();
//               } else {
//                 exit();
//               }
//             });
//       });
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
// promptUser();


/** ********** NO BORREN ESTO ************/

// function displayTodoList(): void {
//   console.log(`GROUP COLLECTION`);
//   for (let i = 0; i < GroupCollectionOBJ.length; i++) {
//     console.log(GroupCollectionOBJ[i].getName());
//   }
// }
//     enum Commands {
//       Add = "Add New Group",
//       Toggle = "Group Added Default",
//       Purge = "Remove New Added Group",
//       Quit = "Quit"
//     }
// function promptAdd(): void {
//   console.clear();
//   let groupName: string = ``;
//   let yearCreation: number = 0;
//   let genre: string = ``;
//   let album: string = ``;
//   let monthlyListeners: number = 0;
//   /** DE ESTA MANERA ES COMO SE AÑADEN VARIOS ELEMENTOS CON PROMPT 
//    * Mirar esta página: https://typescript.hotexamples.com/es/examples/inquirer/-/prompt/typescript-prompt-function-examples.html
//   */
//   inquirer.prompt([{type: "input", name: "GroupName", message: "Enter Group Name:"},
//     {type: "input", name: "yearCreation", message: "Enter the year of creation of the group:"},
//     {type: "input", name: "Genre", message: "Enter The Genre:"},
//     {type: "input", name: "Album", message: "Enter Album Name:"},
//     {type: "input", name: "monthlyListeners", message: "Enter the number of listeners:"}])
//       .then((answers) => {
//         groupName = answers.GroupName;
//         yearCreation = answers.yearCreation;
//         genre = answers.Genre;
//         album = answers.Album;
//         monthlyListeners = answers.monthlyListeners;
//         GroupCollectionOBJ.push(new Group(groupName, Elvis, yearCreation, genre, album, monthlyListeners));
//         collectionGroups.restart(GroupCollectionOBJ);
//         inquirer.prompt({type: "input", name: "Continue", message: "Do you want to return to the main screen ? (y/N): "})
//             .then((answers) => {
//               if (answers["Continue"] === "y") {
//                 promptUser();
//               } else {
//                 exit();
//               }
//             });
//       });
// }
// function promptDefault(): void {
//   console.clear();
//   console.log(`GROUP DEFAULT COLLECTION`);
//   for (let i = 0; i < GroupCollectionOBJ.length; i++) {
//     console.log(GroupCollectionOBJ[i].getName());
//   }
//   inquirer.prompt({type: "input", name: "Continue", message: "Do you want to return to the main screen ? (y/N): "})
//       .then((answers) => {
//         if (answers["Continue"] === "y") {
//           promptUser();
//         } else {
//           exit();
//         }
//       });
// }
// function promptDelete(): void {
//   console.clear();
//   let groupName: string = ``;
//   inquirer.prompt({type: "input", name: "Delete", message: "Enter the name of the group you wish to delete: "})
//       .then((answer) => {
//         for (let i = 0; i < GroupCollectionOBJ.length; i++) {
//           if (groupName === GroupCollectionOBJ[i].getName()) {
//             // FALTA ELIMINAR EL GRUPO QUE NO SÉ COMO SE HACE
//           }
//         }
//         inquirer.prompt({type: "input", name: "Continue", message: "Do you want to return to the main screen ? (y/N): "})
//             .then((answers) => {
//               if (answers["Continue"] === "y") {
//                 promptUser();
//               } else {
//                 exit();
//               }
//             });
//       });
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
// promptUser();


/** ********** NO BORREN ESTO ************/

function displayTodoList(): void {
  console.log(`GENRE COLLECTION`);
  for (let i = 0; i < GenresCollectionObj.getColectionlength(); i++) {
    console.log(GenresCollectionObj.getnObject(i).getName());
  }
}
    enum Commands {
      Add = "Add New Genre",
      Toggle = "Genre Added Default",
      Purge = "Remove New Added Genre",
      Quit = "Quit"
    }
function promptAdd(): void {
  console.clear();
  let genreName: string = ``;
  let album: string = ``;
  let songs: string = ``;
  /** DE ESTA MANERA ES COMO SE AÑADEN VARIOS ELEMENTOS CON PROMPT 
   * Mirar esta página: https://typescript.hotexamples.com/es/examples/inquirer/-/prompt/typescript-prompt-function-examples.html
  */
  inquirer.prompt([{type: "input", name: "GenreName", message: "Enter Genre Name:"},
    {type: "input", name: "Album", message: "Enter Album Name:"},
    {type: "input", name: "song", message: "Enter the song name:"}])
      .then((answers) => {
        genreName = answers.GenreName;
        album = answers.Album;
        songs = answers.song;
        GenresCollectionObj.addGenre(new MusicGenre(genreName, IronMaiden, DonDiablo, album, songs));
        collectionGenre.restart(GenresCollectionObj);
        inquirer.prompt({type: "input", name: "Continue", message: "Do you want to return to the main screen ? (y/N): "})
            .then((answers) => {
              if (answers["Continue"] === "y") {
                promptUser();
              } else {
                exit();
              }
            });
      });
}
function promptDefault(): void {
  console.clear();
  console.log(`GENRE DEFAULT COLLECTION`);
  for (let i = 0; i < GenresCollectionObj.getColectionlength(); i++) {
    console.log(GenresCollectionObj.getnObject(i).getName());
  }
  inquirer.prompt({type: "input", name: "Continue", message: "Do you want to return to the main screen ? (y/N): "})
      .then((answers) => {
        if (answers["Continue"] === "y") {
          promptUser();
        } else {
          exit();
        }
      });
}
function promptDelete(): void {
  console.clear();
  let artistName: string = ``;
  inquirer.prompt({type: "input", name: "Delete", message: "Enter the name of the artist you wish to delete: "})
      .then((answer) => {
        artistName = answer.Delete;
        artistCollectionOBJ.getRemoveArtist(artistName);
        collectionArtists.restart(artistCollectionOBJ);
        inquirer.prompt({type: "input", name: "Continue", message: "Do you want to return to the main screen ? (y/N): "})
            .then((answers) => {
              if (answers["Continue"] === "y") {
                promptUser();
              } else {
                exit();
              }
            });
      });
}
function promptUser(): void {
  setMaxListeners(100);
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
        exit();
        break;
    }
  });
}
promptUser();

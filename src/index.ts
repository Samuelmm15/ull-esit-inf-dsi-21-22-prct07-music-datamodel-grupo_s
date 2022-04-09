/* eslint-disable prefer-const */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
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

// ARTISTS 10
const BadBunny = new Artist('BadBunny', 'BadBunny', 'Urban Latino', 'Amorfoda', '127', 47666987);
const Bruno = new Artist('Bruno Mars', 'Bruno Mars', 'Pop', '24K Magic', '101', 52517377);
const Michael = new Artist('Michael Jackson', 'Michael Jackson', 'Pop', 'Beat It', '263', 28171657);
const Ozuna = new Artist('Ozuna', 'Ozuna', 'Urban Latino', 'Odisea', '158', 35236397);
const Eminem = new Artist('Eminem', 'Eminem', 'Rap', 'Kamikaze', '100', 52908969);
const Elvis = new Artist('Elvis Crespo', 'Grupo Mania', 'Merengue', 'Suavemente', '71', 3559552);
const DonDiablo = new Artist('Don Diablo', 'Don Diablo', 'Electro House', 'Bad', '97', 7118670);
const RickAstley = new Artist('Rick Astley', 'Rick Astley', 'Disco', 'Together Forever', '110', 5754965);
const MartinGarrix = new Artist('Martin Garrix', 'Martin Garrix', 'EDM', 'Summer Days', '73', 22404740);
const Avicii = new Artist('Avicii', 'Avicii', 'Dance', 'True', '98', 28729564);

// GROUP 5


// MUSIC GENRE 10


// SONGS 50


// ALBUM 5-10


// PLAYLIST 3


/** ********** NO BORREN ESTO ************/
import {Artist} from "./DefinitiveHierarchy/PrincipalClases/artist";
import {ArtistsCollection} from "./DefinitiveHierarchy/Collectionables/artistCollection";
import {TitleSongSort} from './DefinitiveHierarchy/SortFunctions/titleSongSort';
import {JsonTodoCollection} from "./InquirerFiles/jsonTodoCollection";
import {exit} from 'process';
import {setMaxListeners} from 'events';

// Artist objects
const artistCollectionOBJ = new ArtistsCollection([Bruno, BadBunny]);

let collectionArtists: JsonTodoCollection = new JsonTodoCollection([Bruno, BadBunny]);

function displayTodoList(): void {
  console.log(`ARTIST COLLECTION`);
  for (let i = 0; i < artistCollectionOBJ.getArtistsCollectionLength(); i++) {
    console.log(artistCollectionOBJ.getArtistList(i));
  }
}
    enum Commands {
      Add = "Add New Artist",
      Toggle = "Artist Added Default",
      Purge = "Remove New Added Artists",
      Quit = "Quit"
    }
function promptAdd(): void {
  console.clear();
  let artistName: string = ``;
  let groupName: string = ``;
  let genre: string = ``;
  let album: string = ``;
  let publishedSongs: string = ``;
  let monthlyListeners: number = 0;
  /** DE ESTA MANERA ES COMO SE AÑADEN VARIOS ELEMENTOS CON PROMPT 
   * Mirar esta página: https://typescript.hotexamples.com/es/examples/inquirer/-/prompt/typescript-prompt-function-examples.html
  */
  inquirer.prompt([{type: "input", name: "ArtistName", message: "Enter Artist Name:"},
    {type: "input", name: "GroupName", message: "Enter Group Name:"},
    {type: "input", name: "Genre", message: "Enter The Genre:"},
    {type: "input", name: "Album", message: "Enter Album Name:"},
    {type: "input", name: "PublishedSongs", message: "Enter the number of published songs:"},
    {type: "input", name: "monthlyListeners", message: "Enter the number of listeners:"}])
      .then((answers) => {
        artistName = answers.ArtistName;
        groupName = answers.GroupName;
        genre = answers.Genre;
        album = answers.Album;
        publishedSongs = answers.PublishedSongs;
        monthlyListeners = answers.monthlyListeners;
        artistCollectionOBJ.addArtist(new Artist(artistName, groupName, genre, album, publishedSongs, monthlyListeners))
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
function promptDefault(): void {
  console.clear();
  console.log(`ARTIST DEFAULT COLLECTION`);
  for (let i = 0; i < artistCollectionOBJ.getArtistsCollectionLength(); i++) {
    console.log(artistCollectionOBJ.getArtistList(i));
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

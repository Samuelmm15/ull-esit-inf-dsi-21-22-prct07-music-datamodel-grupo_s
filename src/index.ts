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
import {Artist} from "./DefinitiveHierarchy/PrincipalClases/artist";
import {ArtistsCollection} from "./DefinitiveHierarchy/Collectionables/artistCollection";
import {TitleSongSort} from './DefinitiveHierarchy/SortFunctions/titleSongSort';
import {JsonTodoCollection} from "./InquirerFiles/jsonTodoCollection";
import {exit} from 'process';
import { setMaxListeners } from 'events';
import { monitorEventLoopDelay } from 'perf_hooks';
import { resolve } from 'path';

// Artist objects
const BadBunny = new Artist('BadBunny', 'Iluminati', 'Reggae', 'Touralmundo', '2', 12);
const Bruno = new Artist('Bruno', 'Arberto', 'Reggae', 'Touralmundo', '2', 12);
const artistCollectionOBJ = new ArtistsCollection([Bruno, BadBunny]);

const collectionArtists: ArtistsCollection = new JsonTodoCollection([Bruno, BadBunny]);

function displayTodoList(): void {
  console.log(`ARTIST COLLECTION`);
  for (let i = 0; i < collectionArtists.getArtistsCollectionLength(); i++) {
    console.log(collectionArtists.getArtistList(i));
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
  let ArtistName: string = ``;
  let groupName: string = ``;
  let genre: string = ``;
  let album: string = ``;
  let publishedSongs: string = ``;
  let monthlyListeners: number = 0;
  inquirer.prompt({type: "input", name: "ArtistName", message: "Enter Artist Name:"})
      .then((answers) => {
        ArtistName = answers["ArtistName"];
      });
  inquirer.prompt({type: "input", name: "GroupName", message: "Enter Group Name:"})
      .then((answers) => {
        groupName = answers["GroupName"];
      });
  inquirer.prompt({type: "input", name: "Genre", message: "Enter The Genre:"})
      .then((answers) => {
        genre = answers["Genre"];
      });
  inquirer.prompt({type: "input", name: "Album", message: "Enter Album Name:"})
      .then((answers) => {
        album = answers["Album"];
      });
  inquirer.prompt({type: "input", name: "PublishedSongs", message: "Enter the number of published songs:"})
      .then((answers) => {
        publishedSongs = answers["PublishedSongs"];
      });
  inquirer.prompt({type: "input", name: "monthlyListeners", message: "Enter the number of listeners:"})
      .then((answers) => {
        monthlyListeners = answers["monthlyListeners"];
      });
  collectionArtists.addArtist(new Artist(ArtistName, groupName, genre, album, publishedSongs, monthlyListeners));
  
  inquirer.prompt({type: "input", name: "Continue", message: "¿ You want to return to the main screen ? (y/N): "})
      .then((answers) => {
        if (answers["Continue"] === "y") {
          promptUser();
        } else {
          exit();
        }
      });
}
function promptDefault(): void {
  console.clear();
  console.log(`ARTIST DEFAULT COLLECTION`);
  for (let i = 0; i < collectionArtists.getArtistsCollectionLength(); i++) {
    console.log(collectionArtists.getArtistList(i));
  }
  inquirer.prompt({type: "input", name: "Continue", message: "¿ You want to return to the main screen ? (y/N): "})
      .then((answers) => {
        if (answers["Continue"] === "y") {
          promptUser();
        } else {
          exit();
        }
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
        promptUser();
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

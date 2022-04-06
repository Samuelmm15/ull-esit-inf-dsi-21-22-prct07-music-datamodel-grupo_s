/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import {Artist} from './Definitivos-Jerarquia/Principal-Clases/artist';
import {Group} from './Definitivos-Jerarquia/Principal-Clases/groups';
import {MusicGenre} from './Definitivos-Jerarquia/Principal-Clases/musicGenre';
import {Song} from './Definitivos-Jerarquia/Principal-Clases/song';
import {Album} from './Definitivos-Jerarquia/Principal-Clases/album';
import {ArtistsCollection} from './Definitivos-Jerarquia/Collectionables/artistCollection';
import {SongCollection} from './Definitivos-Jerarquia/Collectionables/songCollection';
import {GenreCollection} from './Definitivos-Jerarquia/Collectionables/genreCollection';
import {TitleSongSort} from './Definitivos-Jerarquia/SortFunctions/titleSongSort';
import {AlbumSort} from './Definitivos-Jerarquia/SortFunctions/albumSort';
import {ReproductionNumberSort} from './Definitivos-Jerarquia/SortFunctions/reproductionNumberSort';
import {SingleFilter} from './Definitivos-Jerarquia/SortFunctions/singleFilter';
import {AlbumYearSort} from './Definitivos-Jerarquia/SortFunctions/albumYearSort';
import {ArtistNameSort} from './Definitivos-Jerarquia/SortFunctions/artistNameSort';
import {GroupNameSort} from './Definitivos-Jerarquia/SortFunctions/groupNameSort';
import {GenreSort} from './Definitivos-Jerarquia/SortFunctions/genreSort';
import {SongDurationSort} from './Definitivos-Jerarquia/SortFunctions/durationSongSort';
import * as inquirer from 'inquirer';
// import {SongDurationSort} from './Definitivos-Jerarquia/SortFunctions/durationSongSort';

const BadBunny = new Artist('BadBunny', 'Iluminati', 'Reggae', 'Touralmundo', '2', 12);
const Bruno = new Artist('Bruno', 'Arberto', 'Reggae', 'Touralmundo', '2', 12);
const Iluminati = new Group('Iluminati', BadBunny, 2016, 'Reggae', 'Touralmundo', 12);
const Trap = new MusicGenre('Trap', Iluminati, BadBunny, 'Touralmundo', 'Chambea');
const Reggae = new MusicGenre('Reggae', Iluminati, BadBunny, 'Touralmundo', 'Chambea');
// eslint-disable-next-line no-unused-vars
// const Touralmundo = new Album('Touralmundo', Iluminati, BadBunny, 2016, Trap, Chambea);
const artistCollectionOBJ = new ArtistsCollection([Bruno, BadBunny]);
const genreCollectionOBJ = new GenreCollection([Trap, Reggae]);

// // SONG COLLECTION
const Chambea = new Song('Chambea', BadBunny, '5:30', Trap, true, 2016015);
const Netflix = new Song('Netflix', Bruno, '5:10', Trap, false, 2016010);
const ThisFeeling = new Song('This Feeling', Bruno, '5:20', Trap, true, 2016015);
const ALV = new Song('ALV', Bruno, '5:40', Trap, true, 2016015);
const songCollectionOBJ = new SongCollection([Netflix, ThisFeeling, Chambea, ALV]);

// ALBUM COLLECTION
const albumOBJ = new Album('ALV', Iluminati, BadBunny, 2001, Trap, [ALV, Chambea]);
const albumOBJ1 = new Album('ErPepe', Iluminati, BadBunny, 2001, Trap, [ALV, Chambea]);
const albumSortOBJ = new AlbumSort([albumOBJ, albumOBJ1]);


/** ********** NO BORREN ESTO ************/
import {ArtistItem} from "./PruebasInquirer/ArtistItem";
import {TodoCollection} from "./PruebasInquirer/todoCollection";
import {JsonTodoCollection} from "./PruebasInquirer/jsonTodoCollection";
const todos: ArtistItem[] = [
  new ArtistItem(1, "Bad Bunny"), new ArtistItem(1, "Bad Bunny", true),
  new ArtistItem(2, "Don Diablo"), new ArtistItem(2, "Don Diablo", true)];
const collection: TodoCollection = new JsonTodoCollection("Bad Bunny", todos);
// const collection: TodoCollection = new TodoCollection("Adam", todos);
let showCompleted = true;
function displayTodoList(): void {
  console.log(`${collection.userName}'s Artist List ` +
    `(${ collection.getItemCounts().incomplete } Artist List empty)`);
  collection.getArtistItems(showCompleted).forEach((item) => item.printDetails());
}
    enum Commands {
      Add = "Add New Artist",
      Complete = "Artist Add Completed",
      Toggle = "Show/Hide Completed",
      Purge = "Remove Completed additions",
      Quit = "Quit"
    }
function promptAdd(): void {
  console.clear();
  inquirer.prompt({type: "input", name: "add", message: "Enter Artist:"})
      .then((answers) => {
        if (answers["add"] !== "") {
          collection.addTodo(answers["add"]);
        }
        promptUser();
      });
}
function promptComplete(): void {
  console.clear();
  inquirer.prompt({type: "checkbox", name: "complete",
    message: "Mark the artist you would delete",
    choices: collection.getArtistItems(showCompleted).map((item) =>
      ({name: item.task, value: item.id, checked: item.complete})),
  }).then((answers) => {
    const completedTasks = answers["complete"] as number[];
    collection.getArtistItems(true).forEach((item) =>
      collection.markComplete(item.id,
          completedTasks.find((id) => id === item.id) != undefined));
    promptUser();
  });
}
function promptUser(): void {
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
        showCompleted = !showCompleted;
        promptUser();
        break;
      case Commands.Add:
        promptAdd();
        break;
      case Commands.Complete:
        if (collection.getItemCounts().incomplete > 0) {
          promptComplete();
        } else {
          promptUser();
        }
        break;
      case Commands.Purge:
        collection.removeComplete();
        promptUser();
        break;
    }
  });
}
promptUser();

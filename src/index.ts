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
// console.log(albumSortOBJ.greaterSort());
// console.log(albumSortOBJ.lowerSort());

// console.log(Chambea.durationFormat());

// GENRE COLLECTION
// const genreSortOBJ = new GenreSort(genreCollectionOBJ);
// console.log(genreSortOBJ.greaterSort());
// console.log(genreSortOBJ.lowerSort());

const durationSortObj = new SongDurationSort(songCollectionOBJ);
console.log(durationSortObj.greaterSort());

// console.log(albumOBJ);

// console.log();
// console.log('----------------------------');
// // console.log(songCollectionOBJ);
// // console.log(songCollectionOBJ.getColectionlength());
// // console.log(songCollectionOBJ.getnObject(2));
// console.log('----------------------------');
// console.log();

// console.log(artistCollection.getName('BadBunny'));
// console.log(artistCollection.getGroup('Iluminati'));
// console.log(artistCollection.getGenre('Reggae'));
// console.log(artistCollection.getAlbum('Touralmundo'));
// console.log(artistCollection.getPublishedSongs('BadBunny'));
// console.log(artistCollection.getMonthlyListeners('BadBunny'));

// console.log(artistCollection);
// const DonDiablo = new Artist('Don Diablo', 'Don Diablo', 'House Music', 'Future', '100', 1000000);
// artistCollection.addArtist(DonDiablo);
// console.log(artistCollection);

// console.log();
// console.log(songCollection.getSongAuthor(BadBunny));
// console.log();
// console.log(genreCollection.getGenre('Trap'));

// console.log();
// console.log();
// console.log(artistCollection.getArtist('BadBunny'));

// console.log('Prueba eliminar datos');
// console.log('Artista');
// console.log(artistCollection.getRemoveIndex('BadBunny'));
// console.log('Canción');
// console.log(songCollectionOBJ.getRemoveIndex('Netflix'));
// console.log('+ Canciones --------------');
// console.log(songCollectionOBJ.addSong(Netflix));
// console.log(songCollection.addSong(Chambea));

// console.log('Genero');
// console.log(genreCollection.getRemoveIndex('Trap'));

// Pruebas de la ordenación
// const greaterTitleSortOBJ = new TitleSongSort(songCollectionOBJ);
// console.log();
// console.log();
// greaterTitleSortOBJ.greaterSort();
// greaterTitleSortOBJ.lowerSort();

// const greaterReproduction = new ReproductionNumberSort(songCollectionOBJ);
// greaterReproduction.lowerSort();
// greaterReproduction.greaterSort();
// greaterTitleSortObject.greaterSort();
// const singleFilterOBJ = new SingleFilter(songCollectionOBJ);
// console.log(singleFilterOBJ.filter());

/* const yearAlbum = new AlbumYearSort([albumOBJ, albumOBJ1]);
yearAlbum.lowerSort();

const artistNameSort = new ArtistNameSort([Bruno, BadBunny]);
artistNameSort.lowerSort();*/


/** ********** NO BORREN ESTO ************/
import {TodoItem} from "./PruebasInquirer/todoItem";
import {TodoCollection} from "./PruebasInquirer/todoCollection";
import {JsonTodoCollection} from "./PruebasInquirer/jsonTodoCollection";
const todos: TodoItem[] = [
  new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Shoes"),
  new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe",
      true)];
const collection: TodoCollection = new JsonTodoCollection("Adam", todos);
// const collection: TodoCollection = new TodoCollection("Adam", todos);
let showCompleted = true;
function displayTodoList(): void {
  console.log(`${collection.userName}'s Todo List ` +
            `(${ collection.getItemCounts().incomplete } items to do)`);
  collection.getTodoItems(showCompleted).forEach((item) => item.printDetails());
}
    enum Commands {
      Add = "Add New Task",
      Complete = "Complete Task",
      Toggle = "Show/Hide Completed",
      Purge = "Remove Completed Tasks",
      Quit = "Quit"
    }
function promptAdd(): void {
  console.clear();
  inquirer.prompt({type: "input", name: "add", message: "Enter task:"})
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
    message: "Mark Tasks Complete",
    choices: collection.getTodoItems(showCompleted).map((item) =>
      ({name: item.task, value: item.id, checked: item.complete})),
  }).then((answers) => {
    const completedTasks = answers["complete"] as number[];
    collection.getTodoItems(true).forEach((item) =>
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

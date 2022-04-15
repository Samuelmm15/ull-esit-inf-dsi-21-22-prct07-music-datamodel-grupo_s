/* eslint-disable prefer-const */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import {Artist} from "../DefinitiveHierarchy/PrincipalClases/artist";
import {ArtistsCollection} from "../DefinitiveHierarchy/Collectionables/artistCollection";
import {TitleSongSort} from '../DefinitiveHierarchy/SortFunctions/titleSongSort';
import {JsonTodoCollection} from "../LowdbFiles/jsonTodoCollection";
import {exit} from 'process';
import {setMaxListeners} from 'events';
import {Group} from '../DefinitiveHierarchy/PrincipalClases/groups';
import {MusicGenre} from '../DefinitiveHierarchy/PrincipalClases/musicGenre';
import {Song} from '../DefinitiveHierarchy/PrincipalClases/song';
import {Album} from '../DefinitiveHierarchy/PrincipalClases/album';
import {Playlists} from "../DefinitiveHierarchy/PrincipalClases/playlist";
import {SongCollection} from '../DefinitiveHierarchy/Collectionables/songCollection';
import {GenreCollection} from '../DefinitiveHierarchy/Collectionables/genreCollection';
import {AlbumSort} from '../DefinitiveHierarchy/SortFunctions/albumSort';
import {ReproductionNumberSort} from '../DefinitiveHierarchy/SortFunctions/reproductionNumberSort';
import {SingleFilter} from '../DefinitiveHierarchy/SortFunctions/singleFilter';
import {AlbumYearSort} from '../DefinitiveHierarchy/SortFunctions/albumYearSort';
import {ArtistNameSort} from '../DefinitiveHierarchy/SortFunctions/artistNameSort';
import {GroupNameSort} from '../DefinitiveHierarchy/SortFunctions/groupNameSort';
import {GenreSort} from '../DefinitiveHierarchy/SortFunctions/genreSort';
import {SongDurationSort} from '../DefinitiveHierarchy/SortFunctions/durationSongSort';
import * as inquirer from 'inquirer';
import {JsonGroupCollection} from '../LowdbFiles/jsonGroupCollection';
import {JsonGenreCollection} from '../LowdbFiles/jsonGenreCollection';
import {JsonSongCollection} from '../LowdbFiles/jsonSongCollection';
import {JsonAlbumCollection} from '../LowdbFiles/jsonAlbumCollection';
import {JsonPlaylistCollection} from '../LowdbFiles/jsonPlaylistCollection';
import {PlaylistCollectionOBJ} from '../index';
import {JsonNewPlaylistCollection} from '../LowdbFiles/jsonNewPlaylistCollection';
import {GenresCollectionObj} from '../index';
import {AlbumCollectionOBJ} from '../index';
import {artistArray} from '../index';
import {GroupCollectionOBJ} from '../index';
import {collectionPlaylists} from '../index';
import {PlaylistCollection} from '../DefinitiveHierarchy/Collectionables/playlistCollection';
import {SongCollectionOBJ} from '../index';


export let NewPlaylistCollectionOBJ = new PlaylistCollection([]);
export let NewcollectionPlaylists: JsonNewPlaylistCollection = new JsonNewPlaylistCollection([]);
const auxarray: JsonNewPlaylistCollection = new JsonNewPlaylistCollection([]);
auxarray.read();
auxarray.write(NewPlaylistCollectionOBJ);
export const NewPlaylistName: JsonNewPlaylistCollection[] = [NewcollectionPlaylists];


enum Commands {
  Toggle = "Defaults Options To Sort",
  Add = "Add New Playlist",
  New = "Add New Song to a Playlist",
  Delete = "Delete Song of a Playlist",
  Purge = "Remove New Added Playlist",
  Quit = "Quit"
}

enum SortCommands {
  Greater = "Greater Sort",
  Lower = "Lower Sort",
  Default = "Default Sort"
}

enum OptionsToSort {
  Songs = "Song Sort",
  Artists = "Artist Sort",
  Albums = "Album Sort",
  Genre = "Genre Sort",
  Group = "Group Sort",
  Reproduction = "Reproduction Sort",
  Duration = "Songs Duration Sort",
  Filter = "Filter Single Songs"
}

enum OptionToAdd {
  NewPlaylist = "Add a new playlist from scratch",
  UsingExistsPlaylist = "Adding a new playlist from an existing one"
}

class Gestor {
  constructor() {
  }
  menu() {
    promptUser();
  }
}

const newMenu = new Gestor();
newMenu.menu();

// INQUIRE FUNCTIONS
function promptUser(): void {
  setMaxListeners(100);
  console.clear();
  displayPlayList();
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
      case Commands.New:
        promptPlaylistSelect('New');
        break;
      case Commands.Delete:
        promptPlaylistSelect('Delete');
        break;
      case Commands.Purge:
        promptDelete();
        break;
      case Commands.Quit:
        console.clear();
        console.log(`<< Program Exit >>`);
        exit();
    }
  });
}

function convertHMS(value: number) : string {
  let hours = Math.floor(value / 3600); // get hours
  let minutes = Math.floor((value - (hours * 3600)) / 60); // get minutes
  let seconds = value - (hours * 3600) - (minutes * 60); //  get seconds
  
  if (hours < 10) {
    hours = hours;
  }
  if (minutes < 10) { 
    minutes = minutes;
  }
  if (seconds < 10) {
    seconds = seconds;
  }

  return hours+' hrs '+minutes+' min '+seconds+' segs'; 
}

function displayPlayList(): void {
  console.clear();
  console.log('<< PLAYLIST COLLECTION >>');
  for (let i = 0; i < PlaylistCollectionOBJ.getColectionlength(); i++) {
    console.log(`${PlaylistCollectionOBJ.getnObject(i).getName()} ==> ${convertHMS(PlaylistCollectionOBJ.getnObject(i).getDuration())}`);
  }
  auxarray.restart(NewPlaylistCollectionOBJ.getPlaylistArray());
  for (let i = 0; i < NewPlaylistCollectionOBJ.getColectionlength(); i++) {
    console.log(`${NewPlaylistCollectionOBJ.getnObject(i).getName()} ==> ${convertHMS(NewPlaylistCollectionOBJ.getnObject(i).getDuration())}`);
    auxarray.read();
    auxarray.write(NewPlaylistCollectionOBJ.getnObject(i));
    auxarray.restart(NewPlaylistCollectionOBJ.getPlaylistArray());
  }
  console.log();
  console.log('<< MUSICAL GENRES >>');
  for (let i = 0; i < GenresCollectionObj.getColectionlength(); i++) {
    console.log(GenresCollectionObj.getnObject(i).getName());
  }
  console.log();
}

function promptDefault(): void {
  console.clear();
  let selectedPlaylist: string = '';
  inquirer.prompt({
    type: "list",
    name: "PlaylistSelector",
    message: "Select a Playlist to see: ",
    choices: PlaylistCollectionOBJ.getPlaylistArray().map((item) => ({name: PlaylistCollectionOBJ.getName(item.getName())}))})
      .then((answers) => {
        selectedPlaylist = answers["PlaylistSelector"];
        console.clear();
        console.log(`La playlist seleccionada ha sido: ${selectedPlaylist}`);
        console.log();
        inquirer.prompt({type: "list", name: "SortCommand", message: "Choose option", choices: Object.values(SortCommands)})
            .then((answers) => {
              switch (answers["SortCommand"]) {
                case SortCommands.Greater:
                  greaterSort(selectedPlaylist);
                  break;
                case SortCommands.Lower:
                  lowerSort(selectedPlaylist);
                  break;
                case SortCommands.Default:
                  greaterSort(selectedPlaylist); // This is the default option
                  break;
              }
            });
      });
}

function promptAdd(): void {
  console.clear();
  inquirer.prompt({type: "list",
    name: "OptionToAdd",
    message: "Choose option",
    choices: Object.values(OptionToAdd)})
      .then((answers) => {
        switch (answers["OptionToAdd"]) {
          case OptionToAdd.NewPlaylist:
            console.clear();
            newPlaylistFromScratch();
            break;
          case OptionToAdd.UsingExistsPlaylist:
            console.clear();
            newPlaylistUsingAnExisting();
            break;
        }
      });
}

function promptPlaylistSelect(type: string) {
  if (type === 'New') {
    inquirer.prompt({
      type: "list",
      name: "PlaylistSelector", 
      message: "Select a Playlist to see: ", 
      choices: PlaylistCollectionOBJ.getPlaylistArray().map((item) => ({name: PlaylistCollectionOBJ.getName(item.getName())}))})
        .then((answers) => {
          console.clear();
          addingNewSongs(PlaylistCollectionOBJ.getPlaylist(answers["PlaylistSelector"]));
        });
  } else if (type === 'Delete') {
    inquirer.prompt({
      type: "list",
      name: "PlaylistSelector", 
      message: "Select a Playlist to see: ", 
      choices: PlaylistCollectionOBJ.getPlaylistArray().map((item) => ({name: PlaylistCollectionOBJ.getName(item.getName())}))})
        .then((answers) => {
          console.clear();
          deleteSongs(PlaylistCollectionOBJ.getPlaylist(answers["PlaylistSelector"]));
        });
  }
}

function promptDelete(): void {
  console.clear();
  let selectedPlaylist: string = '';
  inquirer.prompt({
    type: "list", 
    name: "PlaylistSelector", 
    message: "Select a Playlist to see: ", 
    choices: PlaylistCollectionOBJ.getPlaylistArray().map((item) => ({name: PlaylistCollectionOBJ.getName(item.getName())}))})
      .then((answers) => {
        selectedPlaylist = answers["PlaylistSelector"];
        console.clear();
        console.log(`La playlist seleccionada ha sido: ${selectedPlaylist}`);
        console.log();
        const playlistSelected: Playlists = PlaylistCollectionOBJ.getPlaylist(selectedPlaylist);
        if (playlistSelected.getsystemPlaylistBoolean() === false) {
          PlaylistCollectionOBJ.getRemoveIndex(playlistSelected.getName());
          collectionPlaylists.restart(PlaylistCollectionOBJ.getPlaylistArray());
          console.log('<< The selected playlist was deleted >>');
          defaultMenuReturn();
        } else {
          console.clear();
          console.log('<< The selected playlist is a system playlist >>');
          console.log('<< It cant be deleted >>');
          defaultMenuReturn();
        }
      });
}

function addingNewSongs(PlaylisToOperate: Playlists): void {
  console.clear();
  let SongToAdd: string = '';
  inquirer.prompt({type: "list",
    name: "SongList",
    message: "Select a Song To Add: ",
    choices: SongCollectionOBJ.getSongArray().map((item) => ({name: SongCollectionOBJ.getName(item.getName())}))})
      .then((answers) => {
        SongToAdd = answers["SongList"];
        if (PlaylisToOperate.getSongString(SongToAdd) !== SongToAdd) {
          let songToAddOBJ = SongCollectionOBJ.getSong(SongToAdd);
          PlaylisToOperate.addSong(songToAddOBJ);
          collectionPlaylists.restart(PlaylistCollectionOBJ.getPlaylistArray());
          console.clear();
          console.log('<< The song has been added correctly >>');
          inquirer.prompt({
            type: "confirm",
            name: "AddNewSongs",
            message: "Do you want to add new Songs?"})
              .then((answers) => {
                if (answers["AddNewSongs"] === true) {
                  addingNewSongs(PlaylisToOperate);
                } else {
                  console.clear();
                  inquirer.prompt({type: "confirm",
                    name: "SongsDelete",
                    message: "Do you want to delete any Song?"})
                      .then((answers) => {
                        if (answers["SongsDelete"] === true) {
                          deleteSongs(PlaylisToOperate);
                        } else {
                          console.clear();
                          defaultMenuReturn();
                        }
                      });
                }
              });
        } else {
          console.clear();
          console.log('<< The song you are trying to add is already in the playlist >>');
          inquirer.prompt({
            type: "confirm",
            name: "AddNewSongs",
            message: "Do you want to add new Songs?"})
              .then((answers) => {
                if (answers["AddNewSongs"] === true) {
                  addingNewSongs(PlaylisToOperate);
                } else {
                  console.clear();
                  inquirer.prompt({type: "confirm",
                    name: "SongsDelete",
                    message: "Do you want to delete any Song?"})
                      .then((answers) => {
                        if (answers["SongsDelete"] === true) {
                          deleteSongs(PlaylisToOperate);
                        } else {
                          console.clear();
                          defaultMenuReturn();
                        }
                      });
                }
              });
        }
      });
}
function deleteSongs(PlaylistToOperate: Playlists): void {
  console.clear();
  let SongToDelete: string = '';
  inquirer.prompt({type: "list",
    name: "SongList",
    message: "Select a Song To Delete: ",
    choices: PlaylistCollectionOBJ.getSongsArray(PlaylistToOperate.getName()).map((item) => ({name: PlaylistCollectionOBJ.getSong(PlaylistToOperate, item)}))})
      .then((answers) => {
        SongToDelete = answers["SongList"];
        if (PlaylistToOperate.getSongString(SongToDelete) === SongToDelete) {
          let songToDeleteOBJ = SongCollectionOBJ.getSong(SongToDelete);
          PlaylistToOperate.getRemoveIndex(songToDeleteOBJ.getName());
          collectionPlaylists.restart(PlaylistCollectionOBJ.getPlaylistArray());
          console.clear();
          console.log('<< The song has been deleted correctly >>');
          inquirer.prompt({
            type: "confirm",
            name: "DeleteSongs",
            message: "Do you want to delete more Songs?"})
              .then((answers) => {
                if (answers["DeleteSongs"] === true) {
                  deleteSongs(PlaylistToOperate);
                } else {
                  console.clear();
                  inquirer.prompt({type: "confirm",
                    name: "SongsAdd",
                    message: "Do you want to add new Songs to the playlist?"})
                      .then((answers) => {
                        if (answers["SongsAdd"] === true) {
                          addingNewSongs(PlaylistToOperate);
                        } else {
                          defaultMenuReturn();
                        }
                      });
                }
              });
        }
      });
}

const fs = require('fs');

import {PlaylistName} from '../index';

function newPlaylistFromScratch(): void {
  inquirer.prompt({type: "input",
    name: "newName",
    message: "Enter the new playlist name:"})
      .then((answers) => {
        if (NewPlaylistCollectionOBJ.getName(answers["newName"]) !== answers["newName"]) {
          let newPlaylistName = answers.newName;
          const newPlaylistUserAdded = new Playlists(newPlaylistName, [], 0, [], false);
          NewPlaylistCollectionOBJ.addPlaylist(newPlaylistUserAdded);
          NewcollectionPlaylists.restart(NewPlaylistCollectionOBJ.getPlaylistArray());
          console.clear();
          inquirer.prompt({type: "confirm",
            name: "SongsAdd",
            message: "Do you want to add new Songs to the playlist?"})
              .then((answers) => {
                if (answers["SongsAdd"] === true) {
                  addingNewSongs(newPlaylistUserAdded);
                } else {
                  console.clear();
                  console.log('<< You must to add any song if you want to create a playlist >>');
                  defaultMenuReturn();
                }
              });
        } else {
          console.clear();
          console.log('<< The playlist cannot be created because it already exists >>');
          defaultMenuReturn();
        }
      });
}

function newPlaylistUsingAnExisting(): void {
  let selectedPlaylist: string = '';
  inquirer.prompt({
    type: "list",
    name: "PlaylistSelector", 
    message: "Select a Playlist to see: ", 
    choices: PlaylistCollectionOBJ.getPlaylistArray().map((item) => ({name: PlaylistCollectionOBJ.getName(item.getName())}))})
      .then((answers) => {
        selectedPlaylist = answers["PlaylistSelector"];
        console.clear();
        console.log(`The selected playlist is: ${selectedPlaylist}`);
        console.log();
        let newPlaylistName: string = '';
        inquirer.prompt({type: "input",
          name: "newName",
          message: "Enter the new playlist name:"})
            .then((answers) => {
              newPlaylistName = answers.newName;
              const playlistSelected: Playlists = PlaylistCollectionOBJ.getPlaylist(selectedPlaylist);
              const auxiliary: Song[] = playlistSelected.getSongsArray();
              const newPlaylistUserAdded = new Playlists(newPlaylistName, auxiliary, playlistSelected.getDuration(), playlistSelected.getGenreArray(), false);
              NewPlaylistCollectionOBJ.addPlaylist(newPlaylistUserAdded);
              NewcollectionPlaylists.restart(NewPlaylistCollectionOBJ.getPlaylistArray());
              console.clear();
              inquirer.prompt({type: "confirm",
                name: "SongsAdd",
                message: "Do you want to add new Songs to the playlist?"})
                  .then((answers) => {
                    if (answers["SongsAdd"] === true) {
                      addingNewSongs(newPlaylistUserAdded);
                    } else {
                      console.clear();
                      inquirer.prompt({type: "confirm",
                        name: "SongsDelete",
                        message: "Do you want to delete any Song?"})
                          .then((answers) => {
                            if (answers["SongsDelete"] === true) {
                              deleteSongs(newPlaylistUserAdded);
                            } else {
                              console.clear();
                              defaultMenuReturn();
                            }
                          });
                    }
                  });
            });
      });
}


function greaterSort(playlistName: string): void {
  console.clear();
  inquirer.prompt({type: "list", 
    name: "OptionsToSort", 
    message: "Choose option", 
    choices: Object.values(OptionsToSort)})
      .then((answers) => {
        switch (answers["OptionsToSort"]) {
          case OptionsToSort.Albums:
            console.clear();
            let AlbumSortCollection = new AlbumSort(AlbumCollectionOBJ);
            AlbumSortCollection.greaterSort();
            defaultMenuReturn();
            break;
          case OptionsToSort.Artists:
            console.clear();
            let ArtistNameSortCollection = new ArtistNameSort(artistArray);
            ArtistNameSortCollection.greaterSort();
            defaultMenuReturn();
            break;
          case OptionsToSort.Duration:
            console.clear();
            let PlaylistOBJ1: Playlists = PlaylistCollectionOBJ.getPlaylist(playlistName);
            let SongArray1: Song[] = PlaylistOBJ1.getSongsArray();
            let collectionSongs1 = new SongCollection(SongArray1);
            let DurationSongSort = new SongDurationSort(collectionSongs1);
            DurationSongSort.greaterSort();
            defaultMenuReturn();
            break;
          case OptionsToSort.Filter:
            console.clear();
            let PlaylistOBJ2: Playlists = PlaylistCollectionOBJ.getPlaylist(playlistName);
            let SongArray2: Song[] = PlaylistOBJ2.getSongsArray();
            let collectionSongs2 = new SongCollection(SongArray2);
            let FilterSortCollectionSongs = new SingleFilter(collectionSongs2);
            FilterSortCollectionSongs.filter();
            defaultMenuReturn();
            break;
          case OptionsToSort.Genre:
            console.clear();
            let PlaylistOBJ3: Playlists = PlaylistCollectionOBJ.getPlaylist(playlistName);
            let GenreArray: MusicGenre[] = PlaylistOBJ3.getGenreArray();
            let collectionGenre = new GenreCollection(GenreArray);
            let GenreSortCollection = new GenreSort(collectionGenre);
            GenreSortCollection.greaterSort();
            defaultMenuReturn();
            break;
          case OptionsToSort.Group:
            console.clear();
            let GroupNameSortCollection = new GroupNameSort(GroupCollectionOBJ);
            GroupNameSortCollection.greaterSort();
            defaultMenuReturn();
            break;
          case OptionsToSort.Reproduction:
            console.clear();
            let PlaylistOBJ4: Playlists = PlaylistCollectionOBJ.getPlaylist(playlistName);
            let SongArray4: Song[] = PlaylistOBJ4.getSongsArray();
            let collectionSongs4 = new SongCollection(SongArray4);
            let ReproductionSongSort = new ReproductionNumberSort(collectionSongs4);
            ReproductionSongSort.greaterSort();
            defaultMenuReturn();
            break;
          case OptionsToSort.Songs:
            console.clear();
            let PlaylistOBJ5: Playlists = PlaylistCollectionOBJ.getPlaylist(playlistName);
            let SongArray5: Song[] = PlaylistOBJ5.getSongsArray();
            let collectionSongs5 = new SongCollection(SongArray5);
            let GreaterSortCollectionSongs = new TitleSongSort(collectionSongs5);
            GreaterSortCollectionSongs.greaterSort();
            defaultMenuReturn();
            break;
        }
      });
}
function lowerSort(playlistName: string): void {
  console.clear();
  inquirer.prompt({
    type: "list",
    name: "OptionSort",
    message: "Choose option",
    choices: Object.values(OptionsToSort)})
      .then((answers) => {
        switch (answers["OptionSort"]) {
          case OptionsToSort.Albums:
            console.clear();
            let AlbumSortCollection = new AlbumSort(AlbumCollectionOBJ);
            AlbumSortCollection.lowerSort();
            defaultMenuReturn();
            break;
          case OptionsToSort.Artists:
            console.clear();
            let ArtistNameSortCollection = new ArtistNameSort(artistArray);
            ArtistNameSortCollection.lowerSort();
            defaultMenuReturn();
            break;
          case OptionsToSort.Duration:
            console.clear();
            let PlaylistOBJ1: Playlists = PlaylistCollectionOBJ.getPlaylist(playlistName);
            let SongArray1: Song[] = PlaylistOBJ1.getSongsArray();
            let collectionSongs1 = new SongCollection(SongArray1);
            let DurationSongSort = new SongDurationSort(collectionSongs1);
            DurationSongSort.lowerSort();
            defaultMenuReturn();
            break;
          case OptionsToSort.Filter:
            console.clear();
            let PlaylistOBJ2: Playlists = PlaylistCollectionOBJ.getPlaylist(playlistName);
            let SongArray2: Song[] = PlaylistOBJ2.getSongsArray();
            let collectionSongs2 = new SongCollection(SongArray2);
            let FilterSortCollectionSongs = new SingleFilter(collectionSongs2);
            FilterSortCollectionSongs.filter();
            defaultMenuReturn();
            break;
          case OptionsToSort.Genre:
            console.clear();
            let PlaylistOBJ3: Playlists = PlaylistCollectionOBJ.getPlaylist(playlistName);
            let GenreArray: MusicGenre[] = PlaylistOBJ3.getGenreArray();
            let collectionGenre = new GenreCollection(GenreArray);
            let GenreSortCollection = new GenreSort(collectionGenre);
            GenreSortCollection.lowerSort();
            defaultMenuReturn();
            break;
          case OptionsToSort.Group:
            console.clear();
            let GroupNameSortCollection = new GroupNameSort(GroupCollectionOBJ);
            GroupNameSortCollection.lowerSort();
            defaultMenuReturn();
            break;
          case OptionsToSort.Reproduction:
            console.clear();
            let PlaylistOBJ4: Playlists = PlaylistCollectionOBJ.getPlaylist(playlistName);
            let SongArray4: Song[] = PlaylistOBJ4.getSongsArray();
            let collectionSongs4 = new SongCollection(SongArray4);
            let ReproductionSongSort = new ReproductionNumberSort(collectionSongs4);
            ReproductionSongSort.lowerSort();
            defaultMenuReturn();
            break;
          case OptionsToSort.Songs:
            console.clear();
            let PlaylistOBJ5: Playlists = PlaylistCollectionOBJ.getPlaylist(playlistName);
            let SongArray5: Song[] = PlaylistOBJ5.getSongsArray();
            let collectionSongs5 = new SongCollection(SongArray5);
            let GreaterSortCollectionSongs = new TitleSongSort(collectionSongs5);
            GreaterSortCollectionSongs.lowerSort();
            defaultMenuReturn();
            break;
        } 
      });
}

function defaultMenuReturn(): void {
  inquirer.prompt({type: "confirm", name: "Continue", message: "Do you want to return to the main screen ?"})
      .then((answers) => {
        if (answers["Continue"] === true) {
          promptUser();
        } else {
          console.log('<< Program Exit >>');
          exit();
        }
      });
}


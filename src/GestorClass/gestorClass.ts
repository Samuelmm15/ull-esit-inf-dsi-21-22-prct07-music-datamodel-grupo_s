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
import {GenresCollectionObj} from '../index';
import {AlbumCollectionOBJ} from '../index';
import {artistArray} from '../index';
import {GroupCollectionOBJ} from '../index';

// INQUIRE FUNCTIONS
function displayPlayList(): void {
  console.log('<< PLAYLIST COLLECTION >>');
  for (let i = 0; i < PlaylistCollectionOBJ.getColectionlength(); i++) {
    console.log(`${PlaylistCollectionOBJ.getnObject(i).getName()} ==> ${PlaylistCollectionOBJ.getnObject(i).getDuration()}`);
  }
  console.log();
  console.log('<< MUSICAL GENRES >>');
  for (let i = 0; i < GenresCollectionObj.getColectionlength(); i++) {
    console.log(GenresCollectionObj.getnObject(i).getName());
  }
  console.log();
}
    enum Commands {
      Add = "Add New Playlist",
      Toggle = "Defaults Playlists",
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
function promptAdd(): void {
  console.clear();
  // FALTA AÑADIR LA FUNCIÓN DE AÑADIR NUEVAS PLAYLISTS
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
function promptDelete(): void {
  console.clear();
  // ELIMINAR LAS PLAYLISTS QUE ESTÁN CREADAS POR EL PROPIO USUARIO
}
function defaultMenuReturn(): void {
  inquirer.prompt({type: "input", name: "Continue", message: "Do you want to return to the main screen ? (y/N): "})
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

export class Gestor {
  constructor() {
  }
  menu() {
    promptUser();
  }
}

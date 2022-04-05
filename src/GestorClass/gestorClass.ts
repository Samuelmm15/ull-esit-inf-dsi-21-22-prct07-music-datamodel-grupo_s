/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import {Artist} from '../Definitivos-Jerarquia/Principal-Clases/artist';
import {Group} from '../Definitivos-Jerarquia/Principal-Clases/groups';
import {MusicGenre} from '../Definitivos-Jerarquia/Principal-Clases/musicGenre';
import {Song} from '../Definitivos-Jerarquia/Principal-Clases/song';
import {Album} from '../Definitivos-Jerarquia/Principal-Clases/album';
import {ArtistsCollection} from '../Definitivos-Jerarquia/Collectionables/artistCollection';
import {SongCollection} from '../Definitivos-Jerarquia/Collectionables/songCollection';
import {GenreCollection} from '../Definitivos-Jerarquia/Collectionables/genreCollection';
import {TitleSongSort} from '../Definitivos-Jerarquia/SortFunctions/titleSongSort';
import {AlbumSort} from '../Definitivos-Jerarquia/SortFunctions/albumSort';
import {ReproductionNumberSort} from '../Definitivos-Jerarquia/SortFunctions/reproductionNumberSort';
import {SingleFilter} from '../Definitivos-Jerarquia/SortFunctions/singleFilter';
import {AlbumYearSort} from '../Definitivos-Jerarquia/SortFunctions/albumYearSort';
import {ArtistNameSort} from '../Definitivos-Jerarquia/SortFunctions/artistNameSort';
import {GroupNameSort} from '../Definitivos-Jerarquia/SortFunctions/groupNameSort';
import {GenreSort} from '../Definitivos-Jerarquia/SortFunctions/genreSort';
import {SongDurationSort} from '../Definitivos-Jerarquia/SortFunctions/durationSongSort';

class Gestor {
  constructor() {
  }
  // PARA COMENZAR, SE REALIZA LA PREVISUALIZACIÓN DE LAS PLAYLISTS
  previsualization() {
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
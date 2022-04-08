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

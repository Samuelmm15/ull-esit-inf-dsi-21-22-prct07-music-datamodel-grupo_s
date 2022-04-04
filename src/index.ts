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

const BadBunny = new Artist('BadBunny', 'Iluminati', 'Reggae', 'Touralmundo', '2', 12);
const Bruno = new Artist('Bruno', 'Arberto', 'Reggae', 'Touralmundo', '2', 12);
const Iluminati = new Group('Iluminati', BadBunny, 2016, 'Reggae', 'Touralmundo', 12);
const Trap = new MusicGenre('Trap', Iluminati, BadBunny, 'Touralmundo', 'Chambea');
const Reggae = new MusicGenre('Reggae', Iluminati, BadBunny, 'Touralmundo', 'Chambea');
// eslint-disable-next-line no-unused-vars
// const Touralmundo = new Album('Touralmundo', Iluminati, BadBunny, 2016, Trap, Chambea);
const artistCollectionOBJ = new ArtistsCollection([Bruno, BadBunny]);
const genreCollectionOBJ = new GenreCollection([Trap, Reggae]);

// SONG COLLECTION
const Chambea = new Song('Chambea', BadBunny, 5, Trap, '2', 2016015);
const Netflix = new Song('Netflix', Bruno, 5, Trap, '2', 2016010);
const ThisFeeling = new Song('This Feeling', Bruno, 5, Trap, '2', 2016015);
const ALV = new Song('ALV', Bruno, 5, Trap, '2', 2016015);
const songCollectionOBJ = new SongCollection([Netflix, ThisFeeling, Chambea, ALV]);

// ALBUM COLLECTION
const albumOBJ = new Album('ALV', Iluminati, BadBunny, 2001, Trap, [ALV, Chambea]);
const albumOBJ1 = new Album('ErPepe', Iluminati, BadBunny, 2001, Trap, [ALV, Chambea]);
const albumSortOBJ = new AlbumSort([albumOBJ, albumOBJ1]);
albumSortOBJ.greaterSort();
albumSortOBJ.lowerSort();


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
const greaterTitleSortOBJ = new TitleSongSort(songCollectionOBJ);
console.log();
console.log();
greaterTitleSortOBJ.greaterSort();
greaterTitleSortOBJ.lowerSort();

const greaterReproduction = new ReproductionNumberSort(songCollectionOBJ);
greaterReproduction.lowerSort();
greaterReproduction.greaterSort();
// greaterTitleSortObject.greaterSort();

import {Artist} from './Definitivos-Jerarquia/Principal-Clases/artist';
import {Group} from './Definitivos-Jerarquia/Principal-Clases/groups';
import {MusicGenre} from './Definitivos-Jerarquia/Principal-Clases/musicGenre';
import {Song} from './Definitivos-Jerarquia/Principal-Clases/song';
import {Album} from './Definitivos-Jerarquia/Principal-Clases/album';
import {ArtistsCollection} from './Definitivos-Jerarquia/Collectionables/artistCollection';
import {SongCollection} from './Definitivos-Jerarquia/Collectionables/songCollection';
import {GenreCollection} from './Definitivos-Jerarquia/Collectionables/genreCollection';

const BadBunny = new Artist('BadBunny', 'Iluminati', 'Reggae', 'Touralmundo', '2', 12);
const Bruno = new Artist('Bruno', 'Arberto', 'Reggae', 'Touralmundo', '2', 12);
const Iluminati = new Group('Iluminati', BadBunny, 2016, 'Reggae', 'Touralmundo', 12);
const Trap = new MusicGenre('Trap', Iluminati, BadBunny, 'Touralmundo', 'Chambea');
const Reggae = new MusicGenre('Reggae', Iluminati, BadBunny, 'Touralmundo', 'Chambea');
const Chambea = new Song('Chambea', BadBunny, 5, Trap, '2', 2016015);
// eslint-disable-next-line no-unused-vars
const Touralmundo = new Album('Touralmundo', Iluminati, BadBunny, 2016, Trap, Chambea);
const artistCollection = new ArtistsCollection([Bruno, BadBunny]);
const Netflix = new Song('Netflix', Bruno, 5, Trap, '2', 2016015);
const songCollection = new SongCollection([Netflix, Chambea]);
const genreCollection = new GenreCollection([Trap, Reggae]);

console.log(artistCollection.getName('BadBunny'));
console.log(artistCollection.getGroup('Iluminati'));
console.log(artistCollection.getGenre('Reggae'));
console.log(artistCollection.getAlbum('Touralmundo'));
console.log(artistCollection.getPublishedSongs('BadBunny'));
console.log(artistCollection.getMonthlyListeners('BadBunny'));

console.log(artistCollection);
const DonDiablo = new Artist('Don Diablo', 'Don Diablo', 'House Music', 'Future', '100', 1000000);
artistCollection.addArtist(DonDiablo);
console.log(artistCollection);

console.log();
console.log(songCollection.getSongAuthor(BadBunny));
console.log();
console.log(genreCollection.getGenre('Trap'));

console.log();
console.log();
console.log(artistCollection.getArtist('BadBunny'));
console.log(artistCollection.getRemoveIndex('BadBunny'));
console.log(songCollection.getRemoveIndex('Netflix'));
console.log(genreCollection.getRemoveIndex('Netflix'));

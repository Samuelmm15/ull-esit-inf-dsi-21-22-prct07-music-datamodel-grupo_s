import {Artist} from './Definitivos-Jerarquia/Principal-Clases/artist';
import {Group} from './Definitivos-Jerarquia/Principal-Clases/groups';
import {MusicGenre} from './Definitivos-Jerarquia/Principal-Clases/musicGenre';
import {Song} from './Definitivos-Jerarquia/Principal-Clases/song';
import {Album} from './Definitivos-Jerarquia/Principal-Clases/album';
import {ArtistsCollection} from './Definitivos-Jerarquia/Collectionables/artistCollection';

const BadBunny = new Artist('BadBunny', 'Iluminati', 'Reggae', 'Touralmundo', '2', 12);
const Bruno = new Artist('Bruno', 'Iluminati', 'Reggae', 'Touralmundo', '2', 12);
const Iluminati = new Group('Iluminati', BadBunny, 2016, 'Reggae', 'Touralmundo', 12);
const Trap = new MusicGenre('Trap', Iluminati, BadBunny, 'Touralmundo', 'Chambea');
const Reggae = new MusicGenre('Reggae', Iluminati, BadBunny, 'Touralmundo', 'Chambea');
const Chambea = new Song('Chambea', BadBunny, 5, Trap, '2', 2016015);
const Touralmundo = new Album('Touralmundo', Iluminati, BadBunny, 2016, Trap, Chambea);
const artistCollection = new ArtistsCollection([BadBunny, Bruno]);

console.log(artistCollection.getName('Bruno'));
console.log(artistCollection.getName('BadBunny'));
import 'mocha';
import {expect} from 'chai';
import {Artist} from '../../src/DefinitiveHierarchy/PrincipalClases/artist';
import {MusicGenre} from '../../src/DefinitiveHierarchy/PrincipalClases/musicGenre';
import {Playlists} from '../../src/DefinitiveHierarchy/PrincipalClases/playlist';
import {Song} from '../../src/DefinitiveHierarchy/PrincipalClases/song';

const BadBunny = new Artist('Bad Bunny', 'Bad Bunny', ['Urban Latino'], ['Amorfoda'], 127, 47666987);
const Ozuna = new Artist('Ozuna', 'Ozuna', ['Urban Latino'], ['Odisea'], 158, 35236397);
const DonDiablo = new Artist('Don Diablo', 'Don Diablo', ['Electro House'], ['Bad'], 97, 7118670);
const MartinGarrix = new Artist('Martin Garrix', 'Martin Garrix', ['EDM'], ['Summer Days'], 73, 22404740);
const Avicii = new Artist('Avicii', 'Avicii', ['Dance'], ['True'], 98, 28729564);
const JBalvin = new Artist('J Balvin', 'J Balvin', ['Urban Latino'], ['Oasis'], 216, 55853005);

// MUSIC GENRE
const ElectroHouse = new MusicGenre('Electro House', [], [DonDiablo], ['Bad'], ['Bad']);
const UrbanLatino = new MusicGenre('Urban Latino', [], [Ozuna, BadBunny], ['Odisea', 'Amorfoda'], ['Odisea', 'Amorfoda']);
const EDM = new MusicGenre('EDM', [], [MartinGarrix], ['Summer Days'], ['Summer']);
const Dance = new MusicGenre('Dance', [], [Avicii], ['True'], ['Levels']);

// SONGS
/** ********** BAD BUNNY SONGS ***************/
const BadBunny120 = new Song('120', [BadBunny], '2:31', [UrbanLatino], false, 96933446);
const Yoganuni = new Song('Yoganuni', [BadBunny], '3:26', [UrbanLatino], false, 602713990);
const Mojaita = new Song('Mojaita', [BadBunny, JBalvin], '3:08', [UrbanLatino], false, 30217133);
const LaCancion = new Song('La Cancion', [BadBunny, JBalvin], '4:02', [UrbanLatino], false, 335150200);
const QuePretendes = new Song('QUE PRETENDES', [BadBunny, JBalvin], '4:03', [UrbanLatino], false, 340366130);


// PLAYLIST 3
const Fiestuki = new Playlists('Fiestuki', [BadBunny120, Yoganuni, Mojaita, LaCancion], 60, [UrbanLatino, ElectroHouse, EDM, Dance], true);

const SongArray: Song[] = [BadBunny120, Yoganuni, Mojaita, LaCancion];
const GenreArray: MusicGenre[] = [UrbanLatino, ElectroHouse, EDM, Dance];

describe('Playlist', () => {
  it('should create an instance', () => {
    expect(Fiestuki).to.be.an.instanceof(Playlists);
  });
  it('Fiestuki.getName() return', () => {
    expect(Fiestuki.getName()).to.be.equal('Fiestuki');
  });
  it('Fiestuki.getSongs(La Cancion) return LaCancion', () => {
    expect(Fiestuki.getSongs('La Cancion')).to.be.equal(LaCancion);
  });
  it('Fiestuki.getSongsArray() return SongArray', () => {
    expect(Fiestuki.getSongsArray()).to.be.eqls(SongArray);
  });
  it('Fiestuki.getSongString(Yoganuni) return Yoganuni', () => {
    expect(Fiestuki.getSongString('Yoganuni')).to.be.equal('Yoganuni');
  });
  it('Fiestuki.getGenreArray() return GenreArray', () => {
    expect(Fiestuki.getGenreArray()).to.be.eqls(GenreArray);
  });
  it('Fiestuki.getDuration() return 787', () => {
    expect(Fiestuki.getDuration()).to.be.equal(787);
  });
  it('Fiestuki.getGenre(UrbanLatino) return UrbanLatino', () => {
    expect(Fiestuki.getGenre('UrbanLatino')).to.be.equal(UrbanLatino);
  });
  it('Fiestuki.getsystemPlaylistBoolean() return true', () => {
    expect(Fiestuki.getsystemPlaylistBoolean()).to.be.equal(true);
  });
  it('Fiestuki.addSong(QuePretendes) return undefined', () => {
    expect(Fiestuki.addSong(QuePretendes)).to.be.equal(undefined);
  });
});

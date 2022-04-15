import 'mocha';
import {expect} from 'chai';
import {Artist} from '../../src/DefinitiveHierarchy/PrincipalClases/artist';
import {Song} from '../../src/DefinitiveHierarchy/PrincipalClases/song';
import {MusicGenre} from '../../src/DefinitiveHierarchy/PrincipalClases/musicGenre';
import {Group} from '../../src/DefinitiveHierarchy/PrincipalClases/groups';
import {Playlists} from '../../src/DefinitiveHierarchy/PrincipalClases/playlist';
import {PlaylistCollection} from '../../src/DefinitiveHierarchy/Collectionables/playlistCollection';

const BadBunny = new Artist('Bad Bunny', 'Bad Bunny', ['Urban Latino'], ['Amorfoda'], 127, 47666987);
const Ozuna = new Artist('Ozuna', 'Ozuna', ['Urban Latino'], ['Odisea'], 158, 35236397);
const Elvis = new Artist('Elvis Crespo', 'Grupo Mania', ['Merengue'], ['Suavemente'], 71, 3559552);
const Michael = new Artist('Michael Jackson', 'Michael Jackson', ['Pop', 'Rock'], ['Beat it'], 263, 28223624);
const DonDiablo = new Artist('Don Diablo', 'Don Diablo', ['Electro House'], ['Bad'], 97, 7118670);
const MartinGarrix = new Artist('Martin Garrix', 'Martin Garrix', ['EDM'], ['Summer Days'], 73, 22404740);
const Avicii = new Artist('Avicii', 'Avicii', ['Dance'], ['True'], 98, 28729564);
const SteveHarris = new Artist('Steve Harris', 'Iron Maiden', ['Heavy Metal'], ['Senjutsu'], 204, 6591966);
const FreddieMercury = new Artist('Freddie Mercury', 'Queen', ['Rock'], ['Queen'], 188, 37276204);
const EstelleHorner = new Artist('Estelle Horner', 'Spice Girls', ['Pop'], ['Spice'], 57, 8614262);
const JBalvin = new Artist('J Balvin', 'J Balvin', ['Urban Latino'], ['Oasis'], 216, 55853005);

// GROUP
const IronMaiden = new Group('Iron Maiden', [SteveHarris], 1975, 'Heavy Metal', 'Senjutsu', 6591966);
const Queen = new Group('Queen', [FreddieMercury], 1970, 'Rock', 'Queen', 37276204);
const SpiceGirls = new Group('Spice Girls', [EstelleHorner], 1994, 'Pop', 'Spice', 8614262);

// MUSIC GENRE
const Rock = new MusicGenre('Rock', [IronMaiden, Queen], [SteveHarris, FreddieMercury, EstelleHorner, Michael], ['Senjutsu'], ['Two Minutes for MidNigth']);
const Pop = new MusicGenre('Pop', [SpiceGirls], [Michael, EstelleHorner], ['Spice', 'Beat it'], ['WannaBe']);
const Merengue = new MusicGenre('Merengue', [Queen], [Elvis], ['Suavemente'], ['Suavemente']);
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

/** ********** MICHAEL JACKSON SONGS ***************/
const BeatIt = new Song('Beat it', [Michael], '4:58', [Pop, Rock], false, 813716305);
const BillieJean = new Song('Billie Jean', [Michael], '4:55', [Pop, Rock], false, 1159766450);
const RockWithYou = new Song('Rock With You', [Michael], '3:22', [Pop, Rock], false, 274647363);

/** ********** OZUNA SONGS ***************/
const SePreparo = new Song('Se preparo', [Ozuna], '3:50', [UrbanLatino], false, 1531086593);
const Dile = new Song('Dile Que Tu Me Quieres', [Ozuna], '4:29', [UrbanLatino], false, 822964742);
const Farsante = new Song('El Farsante', [Ozuna], '3:51', [UrbanLatino], false, 952081355);
const Marido = new Song('Si No Te Quiere', [Ozuna], '3:46', [UrbanLatino], false, 4223870);
const UnaLocura = new Song('Una Locura', [Ozuna, JBalvin], '3:50', [UrbanLatino], false, 424672259);


/** ********** ELVIS CRESPO SONGS ***************/
const Suavemente = new Song('Suavemente', [Elvis], '4:28', [Merengue], false, 174354373);
const Bailar = new Song('Bailar', [Elvis], '2:50', [Merengue, Dance], false, 105935651);
const Princesita = new Song('Princesita', [Elvis], '4:50', [Merengue], false, 4363157);
const TuSonrisa = new Song('Tu Sonrisa', [Elvis], '4:34', [Merengue], false, 7669356);
const LunaLlena = new Song('Luna Llena', [Elvis], '4:29', [Merengue], false, 14480477);


/** ********** MARTIN GARRIX SONGS ***************/
const Animals = new Song('Animals', [MartinGarrix], '3:11', [EDM], false, 1558207860);
const Virus = new Song('Virus', [MartinGarrix], '3:14', [EDM], false, 95703936);
const Tremor = new Song('Tremor', [MartinGarrix], '3:18', [EDM], false, 620508536);

/** ********** AVICII SONGS ***************/
const TheNights = new Song('The Nights', [Avicii], '3:10', [Dance], false, 844416270);
const Levels = new Song('Levels', [Avicii], '3:18', [Dance], false, 582217851);
const WaitingForLove = new Song('Waiting For Love', [Avicii], '3:50', [Dance, ElectroHouse], false, 936548529);

/** ********** FREDDIE MERCURY SONGS ***************/
const BohemianRhapsody = new Song('Bohemian Rhapsody', [FreddieMercury], '5:59', [Rock], false, 1481925623);
const IWantToBreakFree = new Song('I Want To Break Free', [FreddieMercury], '3:45', [Rock], false, 150919186);
const DontStopMeNow = new Song('Dont Stop Me Now', [FreddieMercury], '3:32', [Rock], false, 756217708);
const KillerQueen = new Song('Killer Queen', [FreddieMercury], '3:11', [Rock], false, 237639020);
const AnotherOneBitestheDust = new Song('Another One Bites the Dust', [FreddieMercury], '3:42', [Rock], false, 533903036);

// PLAYLIST 3
const Fiestuki = new Playlists('Fiestuki', [BadBunny120, Yoganuni, Mojaita, LaCancion, QuePretendes, SePreparo, Dile, Farsante, Marido,
  UnaLocura, TheNights, Levels, Animals, Virus, Tremor, WaitingForLove], 60, [UrbanLatino, ElectroHouse, EDM, Dance], true);
const Merengaso = new Playlists('Merengaso', [LunaLlena, Suavemente, Bailar, Princesita, TuSonrisa], 30, [Merengue], true);
const ClassicalSongs = new Playlists('Classical Songs', [BeatIt, BillieJean, RockWithYou, BohemianRhapsody, IWantToBreakFree, DontStopMeNow,
  KillerQueen, AnotherOneBitestheDust], 60, [Rock, Pop, Dance], true);

const PlaylistCollectionOBJ = new PlaylistCollection([Fiestuki, Merengaso]);

describe('PlaylistCollection', () => {
  it('should create an instance', () => {
    expect(PlaylistCollectionOBJ).to.be.an.instanceof(PlaylistCollection);
  });
  it('PlaylistCollectionOBJ.getPlaylist(Fiestuki) return Fiestuki', () => {
    expect(PlaylistCollectionOBJ.getPlaylist('Fiestuki')).to.be.equal(Fiestuki);
  });
  it('PlaylistCollectionOBJ.getSong(Fiestuki, BadBunny120) return 120', () => {
    expect(PlaylistCollectionOBJ.getSong(Fiestuki, BadBunny120)).to.be.equal('120');
  });
  it('PlaylistCollectionOBJ.getSongsArray(Fiestuki) return [BadBunny120, Yoganuni, Mojaita, LaCancion, QuePretendes, SePreparo, Dile, Farsante, Marido, UnaLocura, TheNights, Levels, Animals, Virus, Tremor, WaitingForLove]', () => {
    expect(PlaylistCollectionOBJ.getSongsArray('Fiestuki')).to.be.eqls([BadBunny120, Yoganuni, Mojaita, LaCancion, QuePretendes, SePreparo, Dile, Farsante, Marido,
      UnaLocura, TheNights, Levels, Animals, Virus, Tremor, WaitingForLove]);
  });
  it('PlaylistCollectionOBJ.getName(Fiestuki) return Fiestuki', () => {
    expect(PlaylistCollectionOBJ.getName('Fiestuki')).to.be.equal('Fiestuki');
  });
  it('PlaylistCollectionOBJ.getName(Prueba) return No existe la playlist que desea buscar', () => {
    expect(PlaylistCollectionOBJ.getName('Prueba')).to.be.equal(`No existe la playlist que desea buscar`);
  });
  it('PlaylistCollectionOBJ.getGenreArray(Fiestuki) return Fiestuki', () => {
    expect(PlaylistCollectionOBJ.getGenreArray('Fiestuki')).to.be.eqls([UrbanLatino, ElectroHouse, EDM, Dance]);
  });
  it('PlaylistCollectionOBJ.addPlaylist(ClassicalSongs) return undefined)', () => {
    expect(PlaylistCollectionOBJ.addPlaylist(ClassicalSongs)).to.be.equal(undefined);
  });
  it('PlaylistCollectionOBJ.getColectionlength() return 3', () => {
    expect(PlaylistCollectionOBJ.getColectionlength()).to.be.equal(3);
  });
  it('PlaylistCollectionOBJ.getPlaylistArray() return [Fiestuki, Merengaso, ClassicalSongs]', () => {
    expect(PlaylistCollectionOBJ.getPlaylistArray()).to.be.eqls([Fiestuki, Merengaso, ClassicalSongs]);
  });
  it('PlaylistCollectionOBJ.getnObject(0) return Fiestuki', () => {
    expect(PlaylistCollectionOBJ.getnObject(0)).to.be.equal(Fiestuki);
  });
});

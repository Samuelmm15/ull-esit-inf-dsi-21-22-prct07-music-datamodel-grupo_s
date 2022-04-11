/* eslint-disable prefer-const */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import {Artist} from "./DefinitiveHierarchy/PrincipalClases/artist";
import {ArtistsCollection} from "./DefinitiveHierarchy/Collectionables/artistCollection";
import {TitleSongSort} from './DefinitiveHierarchy/SortFunctions/titleSongSort';
import {JsonTodoCollection} from "./LowdbFiles/jsonTodoCollection";
import {exit} from 'process';
import {setMaxListeners} from 'events';
import {Group} from './DefinitiveHierarchy/PrincipalClases/groups';
import {MusicGenre} from './DefinitiveHierarchy/PrincipalClases/musicGenre';
import {Song} from './DefinitiveHierarchy/PrincipalClases/song';
import {Album} from './DefinitiveHierarchy/PrincipalClases/album';
import {Playlists} from "./DefinitiveHierarchy/PrincipalClases/playlist";
import {SongCollection} from './DefinitiveHierarchy/Collectionables/songCollection';
import {GenreCollection} from './DefinitiveHierarchy/Collectionables/genreCollection';
import {AlbumSort} from './DefinitiveHierarchy/SortFunctions/albumSort';
import {ReproductionNumberSort} from './DefinitiveHierarchy/SortFunctions/reproductionNumberSort';
import {SingleFilter} from './DefinitiveHierarchy/SortFunctions/singleFilter';
import {AlbumYearSort} from './DefinitiveHierarchy/SortFunctions/albumYearSort';
import {ArtistNameSort} from './DefinitiveHierarchy/SortFunctions/artistNameSort';
import {GroupNameSort} from './DefinitiveHierarchy/SortFunctions/groupNameSort';
import {GenreSort} from './DefinitiveHierarchy/SortFunctions/genreSort';
import {SongDurationSort} from './DefinitiveHierarchy/SortFunctions/durationSongSort';
import * as inquirer from 'inquirer';
import {JsonGroupCollection} from './LowdbFiles/jsonGroupCollection';
import {JsonGenreCollection} from './LowdbFiles/jsonGenreCollection';
import {JsonSongCollection} from './LowdbFiles/jsonSongCollection';
import {JsonAlbumCollection} from './LowdbFiles/jsonAlbumCollection';
import {JsonPlaylistCollection} from './LowdbFiles/jsonPlaylistCollection';
import {Gestor} from './GestorClass/gestorClass';
import {PlaylistCollection} from './DefinitiveHierarchy/Collectionables/playlistCollection';


// ARTISTS 10 
// ESTO ESTÁ CORRECTO
const BadBunny = new Artist('Bad Bunny', 'Bad Bunny', ['Urban Latino'], ['Amorfoda'], 127, 47666987);
const Bruno = new Artist('Bruno Mars', 'Bruno Mars', ['Pop'], ['24K Magic'], 101, 52517377);
const Ozuna = new Artist('Ozuna', 'Ozuna', ['Urban Latino'], ['Odisea'], 158, 35236397);
const Eminem = new Artist('Eminem', 'Eminem', ['Rap'], ['Kamikaze'], 100, 52908969);
const Elvis = new Artist('Elvis Crespo', 'Grupo Mania', ['Merengue'], ['Suavemente'], 71, 3559552);
const Michael = new Artist('Michael Jackson', 'Michael Jackson', ['Pop', 'Rock'], ['Beat it'], 263, 28223624);
const DonDiablo = new Artist('Don Diablo', 'Don Diablo', ['Electro House'], ['Bad'], 97, 7118670);
const RickAstley = new Artist('Rick Astley', 'Rick Astley', ['Disco'], ['Together Forever'], 110, 5754965);
const MartinGarrix = new Artist('Martin Garrix', 'Martin Garrix', ['EDM'], ['Summer Days'], 73, 22404740);
const Avicii = new Artist('Avicii', 'Avicii', ['Dance'], ['True'], 98, 28729564);
const SteveHarris = new Artist('Steve Harris', 'Iron Maiden', ['Heavy Metal'], ['Senjutsu'], 204, 6591966);
const FreddieMercury = new Artist('Freddie Mercury', 'Queen', ['Rock'], ['Queen'], 188, 37276204);
const EstelleHorner = new Artist('Estelle Horner', 'Spice Girls', ['Pop'], ['Spice'], 57, 8614262);
const AdamLevine = new Artist('Adam Levine', 'Maroon 5', ['Pop', 'Rock'], ['Song About Jane'], 18, 48803865);
const NickCarter = new Artist('Nick Carter', 'BackStreet Boys', ['Pop'], ['BackStreet Boys'], 183, 13533750);
const JBalvin = new Artist('J Balvin', 'J Balvin', ['Urban Latino'], ['Oasis'], 216, 55853005);

export const artistArray: Artist[] = [Bruno, BadBunny, Michael, Ozuna, Eminem, Elvis, DonDiablo, RickAstley, MartinGarrix, Avicii, SteveHarris, FreddieMercury, EstelleHorner, AdamLevine, NickCarter, JBalvin];

const artistCollectionOBJ = new ArtistsCollection([Bruno, BadBunny, Michael, Ozuna, Eminem, Elvis, DonDiablo, RickAstley, MartinGarrix, Avicii, SteveHarris, FreddieMercury, EstelleHorner, AdamLevine, NickCarter, JBalvin]);

let collectionArtists: JsonTodoCollection = new JsonTodoCollection([Bruno, BadBunny, Michael, Ozuna, Eminem, Elvis, DonDiablo, RickAstley, MartinGarrix, Avicii, SteveHarris, FreddieMercury, EstelleHorner, AdamLevine, NickCarter, JBalvin]);

// GROUP 5
const IronMaiden = new Group('Iron Maiden', [SteveHarris], 1975, 'Heavy Metal', 'Senjutsu', 6591966);
const Queen = new Group('Queen', [FreddieMercury], 1970, 'Rock', 'Queen', 37276204);
const SpiceGirls = new Group('Spice Girls', [EstelleHorner], 1994, 'Pop', 'Spice', 8614262);
const Maroon5 = new Group('Maroon 5', [AdamLevine], 2001, 'Pop', 'Song About Jane', 48803865);
const BackStreetBoys = new Group('BackStreet Boys', [NickCarter], 1993, 'Pop', 'BackStreet Boys', 13533750);

export const GroupCollectionOBJ: Group[] = [IronMaiden, Queen, SpiceGirls, Maroon5, BackStreetBoys];

let collectionGroups: JsonGroupCollection = new JsonGroupCollection([IronMaiden, Queen, SpiceGirls, Maroon5, BackStreetBoys]);

// MUSIC GENRE 10
const Rock = new MusicGenre('Rock', [IronMaiden, Queen], [SteveHarris, FreddieMercury, EstelleHorner, Michael], ['Senjutsu'], ['Two Minutes for MidNigth']);
const HeavyMetal = new MusicGenre('Heavy Metal', [IronMaiden], [SteveHarris], ['Senjutsu'], ['Two Minutes for MidNigth']);
const Pop = new MusicGenre('Pop', [SpiceGirls], [Michael, EstelleHorner], ['Spice', 'Beat it'], ['WannaBe']);
const Merengue = new MusicGenre('Merengue', [Queen], [Elvis], ['Suavemente'], ['Suavemente']);
const ElectroHouse = new MusicGenre('Electro House', [], [DonDiablo], ['Bad'], ['Bad']);
const Disco = new MusicGenre('Disco', [], [RickAstley], ['Together Forever'], ['Never gonna give you up']);
const Rap = new MusicGenre('Rap', [], [Eminem], ['Kamikaze'], ['Kamikaze']);
const UrbanLatino = new MusicGenre('Urban Latino', [], [Ozuna, BadBunny], ['Odisea', 'Amorfoda'], ['Odisea', 'Amorfoda']);
const EDM = new MusicGenre('EDM', [], [MartinGarrix], ['Summer Days'], ['Summer']);
const Dance = new MusicGenre('Dance', [], [Avicii], ['True'], ['Levels']);
const Classic = new MusicGenre('Classic', [], [], [''], ['']);

export const GenresCollectionObj = new GenreCollection([Rock, Pop, Merengue, ElectroHouse, Disco, Rap, UrbanLatino, EDM, Dance, Classic, HeavyMetal]);

let collectionGenre: JsonGenreCollection = new JsonGenreCollection([Rock, Pop, Merengue, ElectroHouse, Disco, Rap, UrbanLatino, EDM, Dance, Classic]);

// SONGS 50
/** ********** BAD BUNNY SONGS ***************/
const BadBunny120 = new Song('120', [BadBunny], '2:31', [UrbanLatino], false, 96933446);
const Yoganuni = new Song('Yoganuni', [BadBunny], '3:26', [UrbanLatino], false, 602713990);
const Mojaita = new Song('Mojaita', [BadBunny, JBalvin], '3:08', [UrbanLatino], false, 30217133);
const LaCancion = new Song('La Cancion', [BadBunny, JBalvin], '4:02', [UrbanLatino], false, 335150200);
const QuePretendes = new Song('QUE PRETENDES', [BadBunny, JBalvin], '4:03', [UrbanLatino], false, 340366130);

/** ********** BRUNO SONGS ***************/
const TheLazySong = new Song('The Lazy Song', [Bruno], '3:19', [Pop], false, 2316810522);
const KMagic = new Song('24K Magic', [Bruno], '3:46', [Pop], false, 1489775755);
const UptownFunk = new Song('Uptown Funk', [Bruno], '4:30', [Pop], false, 4520687205);
const Treasure = new Song('Treasure', [Bruno], '3:11', [Pop], false, 637859377);
const ThatsWhatILike = new Song('That’s What I Like', [Bruno], '3:30', [Pop], false, 1998304316);

/** ********** MICHAEL JACKSON SONGS ***************/
const BeatIt = new Song('Beat it', [Michael], '4:58', [Pop, Rock], false, 813716305);
const BillieJean = new Song('Billie Jean', [Michael], '4:55', [Pop, Rock], false, 1159766450);
const DontStopTilYouGetEnough = new Song('Dont Stop Til You Get Enough', [Michael], '4:13', [Pop, Rock], false, 323609447);
const RockWithYou = new Song('Rock With You', [Michael], '3:22', [Pop, Rock], false, 274647363);
const TheWayYouMakeMeFeel = new Song('The Way You Make Me Feel', [Michael], '4:56', [Pop, Rock], false, 14676203);

/** ********** OZUNA SONGS ***************/
const SePreparo = new Song('Se preparo', [Ozuna], '3:50', [UrbanLatino], false, 1531086593);
const Dile = new Song('Dile Que Tu Me Quieres', [Ozuna], '4:29', [UrbanLatino], false, 822964742);
const Farsante = new Song('El Farsante', [Ozuna], '3:51', [UrbanLatino], false, 952081355);
const Marido = new Song('Si No Te Quiere', [Ozuna], '3:46', [UrbanLatino], false, 4223870);
const UnaLocura = new Song('Una Locura', [Ozuna, JBalvin], '3:50', [UrbanLatino], false, 424672259);

/** ********** EMINEM SONGS ***************/
const RapGod = new Song('Rap God', [Eminem], '6:09', [Rap], false, 1282663419);
const WhenImGone = new Song('When Im Gone', [Eminem], '6:09', [Rap], false, 900870065);
const Criminal = new Song('Criminal', [Eminem], '5:19', [Rap], false, 18217990);
const TheRealSlimShady = new Song('The Real Slim Shady', [Eminem], '4:31', [Rap], false, 1964494);
const BitchPleaseII = new Song('Bitch Please II', [Eminem], '4:48', [Rap], false, 29383268);

/** ********** ELVIS CRESPO SONGS ***************/
const Suavemente = new Song('Suavemente', [Elvis], '4:28', [Merengue], false, 174354373);
const Bailar = new Song('Bailar', [Elvis], '2:50', [Merengue, Dance], false, 105935651);
const Princesita = new Song('Princesita', [Elvis], '4:50', [Merengue], false, 4363157);
const TuSonrisa = new Song('Tu Sonrisa', [Elvis], '4:34', [Merengue], false, 7669356);
const LunaLlena = new Song('Luna Llena', [Elvis], '4:29', [Merengue], false, 14480477);

/** ********** DON DIABLO SONGS ***************/
const Bad = new Song('Bad', [DonDiablo], '2:49', [ElectroHouse], false, 19277384);
const Congratulations = new Song('Congratulations', [DonDiablo], '3:21', [ElectroHouse], false, 9788914);
const Momentum = new Song('Momentum', [DonDiablo], '2:36', [ElectroHouse], false, 15965681);
const SaveALittleLove = new Song('Save A Little Love', [DonDiablo], '3:22', [ElectroHouse], false, 31044405);
const Anthem = new Song('Anthem', [DonDiablo], '2:40', [ElectroHouse], false, 6365026);

/** ********** RICK ASTLEY SONGS ***************/
const NeverGonnaGiveYouUp = new Song('Never Gonna Give You Up', [RickAstley], '3:32', [Disco], false, 1190261714);
const TogetherForever = new Song('Together Forever', [RickAstley], '3:23', [Disco], false, 144123086);
const TakeMetoYourHeart = new Song('Take Me to Your Heart', [RickAstley], '3:28', [Disco], false, 28563310);
const WheneverYouNeedSomebody = new Song('Whenever You Need Somebody', [RickAstley], '3:26', [Disco], false, 17526533);
const SheWantsToDanceWithMe = new Song('She Wants To Dance With Me', [RickAstley], '4:19', [Disco], false, 17663736);

/** ********** MARTIN GARRIX SONGS ***************/
const Animals = new Song('Animals', [MartinGarrix], '3:11', [EDM], false, 1558207860);
const ForbiddenVoices = new Song('Forbidden Voices', [MartinGarrix], '3:30', [EDM, ElectroHouse], false, 212567340);
const Virus = new Song('Virus', [MartinGarrix], '3:14', [EDM], false, 95703936);
const Tremor = new Song('Tremor', [MartinGarrix], '3:18', [EDM], false, 620508536);
const TurnUpTheSpeakers = new Song('Turn Up The Speakers', [MartinGarrix], '3:09', [EDM, ElectroHouse], false, 369354301);

/** ********** AVICII SONGS ***************/
const TheNights = new Song('The Nights', [Avicii], '3:10', [Dance], false, 844416270);
const WakeMeUp = new Song('Wake Me Up', [Avicii], '4:32', [Dance], false, 2145009589);
const Levels = new Song('Levels', [Avicii], '3:18', [Dance], false, 582217851);
const WaitingForLove = new Song('Waiting For Love', [Avicii], '3:50', [Dance, ElectroHouse], false, 936548529);
const ICouldBeTheOne = new Song(' I Could Be The One', [Avicii], '4:45', [Dance], false, 329427303);

/** ********** STEVE HARRIS SONGS ***************/
const TheTrooper = new Song('The Trooper', [SteveHarris], '4:23', [HeavyMetal], false, 58366710);
const PhantomoftheOpera = new Song('Phantom of the Opera', [SteveHarris], '7:21', [HeavyMetal], false, 6467046);
const TwoMinutesToMidnight = new Song('2 Minutes To Midnight', [SteveHarris], '6:09', [HeavyMetal], false, 20585174);
const DaysOfFuturePast = new Song('Days Of Future Past', [SteveHarris], '4:03', [HeavyMetal], false, 972101);
const Senjutsu = new Song('Senjutsu', [SteveHarris], '8:20', [HeavyMetal], false, 1611164);

/** ********** FREDDIE MERCURY SONGS ***************/
const BohemianRhapsody = new Song('Bohemian Rhapsody', [FreddieMercury], '5:59', [Rock], false, 1481925623);
const IWantToBreakFree = new Song('I Want To Break Free', [FreddieMercury], '3:45', [Rock], false, 150919186);
const DontStopMeNow = new Song('Dont Stop Me Now', [FreddieMercury], '3:32', [Rock], false, 756217708);
const KillerQueen = new Song('Killer Queen', [FreddieMercury], '3:11', [Rock], false, 237639020);
const AnotherOneBitestheDust = new Song('Another One Bites the Dust', [FreddieMercury], '3:42', [Rock], false, 533903036);

const SongCollectionOBJ = new SongCollection([BadBunny120, Yoganuni, Mojaita, LaCancion, QuePretendes, TheLazySong, KMagic, UptownFunk, Treasure, ThatsWhatILike, BeatIt, BillieJean, 
  DontStopTilYouGetEnough, RockWithYou, TheWayYouMakeMeFeel, SePreparo, Dile, Farsante, Marido, UnaLocura, RapGod, WhenImGone, Criminal, TheRealSlimShady, Suavemente, Bailar, Princesita,
  TuSonrisa, LunaLlena, Bad, Congratulations, Momentum, SaveALittleLove, Anthem, NeverGonnaGiveYouUp, TogetherForever, TakeMetoYourHeart, WheneverYouNeedSomebody, BitchPleaseII, 
  SheWantsToDanceWithMe, Animals, ForbiddenVoices, Virus, Tremor, TurnUpTheSpeakers, TheNights, WakeMeUp, Levels, WaitingForLove, ICouldBeTheOne, TheTrooper, PhantomoftheOpera,
  TwoMinutesToMidnight, DaysOfFuturePast, Senjutsu, BohemianRhapsody, IWantToBreakFree, DontStopMeNow, KillerQueen, AnotherOneBitestheDust]);

const collectionSongs: JsonSongCollection = new JsonSongCollection([BadBunny120, Yoganuni, Mojaita, LaCancion, QuePretendes, TheLazySong, KMagic, UptownFunk, Treasure, ThatsWhatILike, BeatIt, BillieJean, 
  DontStopTilYouGetEnough, RockWithYou, TheWayYouMakeMeFeel, SePreparo, Dile, Farsante, Marido, UnaLocura, RapGod, WhenImGone, Criminal, TheRealSlimShady, Suavemente, Bailar, Princesita,
  TuSonrisa, LunaLlena, Bad, Congratulations, Momentum, SaveALittleLove, Anthem, NeverGonnaGiveYouUp, TogetherForever, TakeMetoYourHeart, WheneverYouNeedSomebody, BitchPleaseII, 
  SheWantsToDanceWithMe, Animals, ForbiddenVoices, Virus, Tremor, TurnUpTheSpeakers, TheNights, WakeMeUp, Levels, WaitingForLove, ICouldBeTheOne, TheTrooper, PhantomoftheOpera,
  TwoMinutesToMidnight, DaysOfFuturePast, Senjutsu, BohemianRhapsody, IWantToBreakFree, DontStopMeNow, KillerQueen, AnotherOneBitestheDust]);

// ALBUM 5-10
const OASIS = new Album('OASIS', [BadBunny, JBalvin], 2019, [UrbanLatino], [Mojaita, LaCancion, QuePretendes]);
const Odisea = new Album('Odisea', [Ozuna], 2017, [UrbanLatino], [SePreparo, Dile, Farsante, Marido]);
const TheMarshallMathersLP = new Album('The Marshall Mathers LP', [Eminem], 2000, [Rap], [BitchPleaseII, TheRealSlimShady, Criminal]);
const BeatItAlbum = new Album('Beat It', [Michael], 1982, [Pop, Disco], [BeatIt, BillieJean]);
const BadAlbum = new Album('Bad', [Michael], 1987, [Pop], [TheWayYouMakeMeFeel, RockWithYou]);
const SenjutsuAlbum = new Album('Senjutsu', [SteveHarris], 2021, [HeavyMetal], [DaysOfFuturePast, Senjutsu]);
const SuavementeAlbum = new Album('Suavemente', [Elvis], 1998, [Merengue], [Suavemente, LunaLlena, TuSonrisa, Princesita]);

export const AlbumCollectionOBJ: Album[] = [OASIS, Odisea, TheMarshallMathersLP, BeatItAlbum, BadAlbum, SenjutsuAlbum, SuavementeAlbum];

const collectionAlbums: JsonAlbumCollection = new JsonAlbumCollection([OASIS, Odisea, TheMarshallMathersLP, BeatItAlbum, BadAlbum, SenjutsuAlbum, SuavementeAlbum]);

// PLAYLIST 3
const Fiestuki = new Playlists('Fiestuki', [BadBunny120, Yoganuni, Mojaita, LaCancion, QuePretendes, SePreparo, Dile, Farsante, Marido,
  UnaLocura, TheNights, Levels, Animals, Virus, Tremor, WaitingForLove], 60, [UrbanLatino, ElectroHouse, EDM, Dance]);
const Merengaso = new Playlists('Merengaso', [LunaLlena, Suavemente, Bailar, Princesita, TuSonrisa], 30, [Merengue]);
const ClassicalSongs = new Playlists('Classical Songs', [BeatIt, BillieJean, RockWithYou, BohemianRhapsody, IWantToBreakFree, DontStopMeNow,
  KillerQueen, AnotherOneBitestheDust], 60, [Rock, Pop, Dance]);

export const PlaylistCollectionOBJ = new PlaylistCollection([Fiestuki, Merengaso, ClassicalSongs]);

const collectionPlaylists: JsonPlaylistCollection = new JsonPlaylistCollection([Fiestuki, Merengaso, ClassicalSongs]);

const GestorMenu = new Gestor();
GestorMenu.menu();

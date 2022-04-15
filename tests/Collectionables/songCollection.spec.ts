import 'mocha';
import {expect} from 'chai';
import {Artist} from '../../src/DefinitiveHierarchy/PrincipalClases/artist';
import {SongCollection} from '../../src/DefinitiveHierarchy/Collectionables/songCollection';
import {Song} from '../../src/DefinitiveHierarchy/PrincipalClases/song';
import {MusicGenre} from '../../src/DefinitiveHierarchy/PrincipalClases/musicGenre';
import {Group} from '../../src/DefinitiveHierarchy/PrincipalClases/groups';

const SteveHarris = new Artist('Steve Harris', 'Iron Maiden', ['Heavy Metal'], ['Senjutsu'], 204, 6591966);
const IronMaiden = new Group('Iron Maiden', [SteveHarris], 1975, 'Heavy Metal', 'Senjutsu', 6591966);
const HeavyMetal = new MusicGenre('Heavy Metal', [IronMaiden], [SteveHarris], ['Senjutsu'], ['Two Minutes for MidNigth']);

const TheTrooper = new Song('The Trooper', [SteveHarris], '4:23', [HeavyMetal], false, 58366710);
const PhantomoftheOpera = new Song('Phantom of the Opera', [SteveHarris], '7:21', [HeavyMetal], false, 6467046);
const TwoMinutesToMidnight = new Song('2 Minutes To Midnight', [SteveHarris], '6:09', [HeavyMetal], false, 20585174);
const DaysOfFuturePast = new Song('Days Of Future Past', [SteveHarris], '4:03', [HeavyMetal], false, 972101);
const Senjutsu = new Song('Senjutsu', [SteveHarris], '8:20', [HeavyMetal], false, 1611164);

const SongCollectionOBJ = new SongCollection([TheTrooper, PhantomoftheOpera, TwoMinutesToMidnight, DaysOfFuturePast, Senjutsu]);

describe('SongCollection', () => {
  it('should create an instance', () => {
    expect(SongCollectionOBJ).to.be.an.instanceof(SongCollection);
  });
  it('should create an instance', () => {
    expect(SongCollectionOBJ.getSong('The Trooper')).to.be.equal(TheTrooper);
  });
  it('should create an instance', () => {
    expect(SongCollectionOBJ.getSongAuthor(SteveHarris)).to.be.equal(SteveHarris);
  });
  it('should create an instance', () => {
    expect(SongCollectionOBJ.getName('The Trooper')).to.be.equal('The Trooper');
  });
  it('should create an instance', () => {
    expect(SongCollectionOBJ.getName('Bailando')).to.be.equal(`No existe la canción a buscar`);
  });
  it('The troop Repoduction Number', () => {
    expect(SongCollectionOBJ.getReproductionsNumber(58366710)).to.be.equal(TheTrooper);
  });
  it('should create an instance', () => {
    expect(SongCollectionOBJ.getDuration(500)).to.be.equal(Senjutsu);
  });
  it('should create an instance', () => {
    expect(SongCollectionOBJ.getColectionlength()).to.be.equal(5);
  });
  it('should create an instance', () => {
    expect(SongCollectionOBJ.getnObject(0)).to.be.equal(TheTrooper);
  });
  // it('should create an instance', () => {
  //   expect(SongCollectionOBJ.getSongArray()).to.be.equal([SongCollectionOBJ]);
  // });
  // it('should create an instance', () => {
  //   expect(SongCollectionOBJ.getRemoveIndex('The Trooper')).to.be.equal([PhantomoftheOpera, TwoMinutesToMidnight, DaysOfFuturePast, Senjutsu]);
  // });
});

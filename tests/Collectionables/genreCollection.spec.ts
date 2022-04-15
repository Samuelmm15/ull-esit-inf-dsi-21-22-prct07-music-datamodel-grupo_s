import 'mocha';
import {expect} from 'chai';
import {Artist} from '../../src/DefinitiveHierarchy/PrincipalClases/artist';
import {MusicGenre} from '../../src/DefinitiveHierarchy/PrincipalClases/musicGenre';
import {Group} from '../../src/DefinitiveHierarchy/PrincipalClases/groups';
import {GenreCollection} from '../../src/DefinitiveHierarchy/Collectionables/genreCollection';

const SteveHarris = new Artist('Steve Harris', 'Iron Maiden', ['Heavy Metal'], ['Senjutsu'], 204, 6591966);
const Avicii = new Artist('Avicii', 'Avicii', ['Dance'], ['True'], 98, 28729564);
const Elvis = new Artist('Elvis Crespo', 'Grupo Mania', ['Merengue'], ['Suavemente'], 71, 3559552);

const IronMaiden = new Group('Iron Maiden', [SteveHarris], 1975, 'Heavy Metal', 'Senjutsu', 6591966);
const Prueba = new Group('Prueba', [Avicii], 1975, 'Heavy Metal', 'Senjutsu', 6591966);

const Rock = new MusicGenre('Rock', [IronMaiden], [SteveHarris], ['Senjutsu'], ['Two Minutes for MidNigth']);
const Dance = new MusicGenre('Dance', [], [Avicii], ['True'], ['Levels']);
const prueba = new MusicGenre('GenreName', [IronMaiden], [SteveHarris], ['AlbumName'], ['Songs']);
const GenresCollectionObj = new GenreCollection([Rock, Dance]);

describe('GenreCollection', () => {
  it('should create an instance', () => {
    expect(GenresCollectionObj).to.be.an.instanceof(GenreCollection);
  });
  it('GenresCollectionObj.getName(Rock) return Rock', () => {
    expect(GenresCollectionObj.getName('Rock')).to.be.equal('Rock');
  });
  it('GenresCollectionObj.getName(Classic) return No existe el género que desea buscar', () => {
    expect(GenresCollectionObj.getName('Classic')).to.be.equal(`No existe el género que desea buscar`);
  });
  it('GenresCollectionObj.getGenre(Rock) return Rock', () => {
    expect(GenresCollectionObj.getGenre('Rock')).to.be.equal(Rock);
  });
  it('GenresCollectionObj.getGenre(Classic) return No existe el género', () => {
    expect(GenresCollectionObj.getGenre('Classic')).to.be.equal('No existe el género');
  });
  it('GenresCollectionObj.addGenre(prueba) return undefined ', () => {
    expect(GenresCollectionObj.addGenre(prueba)).to.be.equal(undefined);
  });
  it('GenresCollectionObj.getColectionlength() return 3', () => {
    expect(GenresCollectionObj.getColectionlength()).to.be.equal(3);
  });
  it('GenresCollectionObj.getArtist(SteveHarris) return SteveHarris', () => {
    expect(GenresCollectionObj.getArtist(SteveHarris)).to.be.equal(SteveHarris);
  });
  it('GenresCollectionObj.getArtist(Elvis) return', () => {
    expect(GenresCollectionObj.getArtist(Elvis)).to.be.equal('No existe el Artista que desea obtener');
  });
  it('GenresCollectionObj.getGroups(IronMaiden) return IronMaiden', () => {
    expect(GenresCollectionObj.getGroups(IronMaiden)).to.be.equal(IronMaiden);
  });
  it('GenresCollectionObj.getGroups(Prueba) return No existe el Grupo que desea obtener', () => {
    expect(GenresCollectionObj.getGroups(Prueba)).to.be.equal('No existe el Grupo que desea obtener');
  });
  it('GenresCollectionObj.getnObject(0) return Rock', () => {
    expect(GenresCollectionObj.getnObject(0)).to.be.equal(Rock);
  });
  it('GenresCollectionObj.getArtist(Avicii) return Avicii', () => {
    expect(GenresCollectionObj.getArtist(Avicii)).to.be.equal(Avicii);
  });
  it('GenresCollectionObj.getGroups(IronMaiden) return IronMaiden', () => {
    expect(GenresCollectionObj.getGroups(IronMaiden)).to.be.equal(IronMaiden);
  });
});

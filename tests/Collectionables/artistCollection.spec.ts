import 'mocha';
import {expect} from 'chai';
import {Artist} from '../../src/DefinitiveHierarchy/PrincipalClases/artist';
import {ArtistsCollection} from '../../src/DefinitiveHierarchy/Collectionables/artistCollection';

const RickAstley = new Artist('Rick Astley', 'Rick Astley', ['Disco'], ['Together Forever'], 110, 5754965);
const MartinGarrix = new Artist('Martin Garrix', 'Martin Garrix', ['EDM'], ['Summer Days'], 73, 22404740);
const Avicii = new Artist('Avicii', 'Avicii', ['Dance'], ['True'], 98, 28729564);
const SteveHarris = new Artist('Steve Harris', 'Iron Maiden', ['Heavy Metal'], ['Senjutsu'], 204, 6591966);

const artistCollectionOBJ = new ArtistsCollection([RickAstley, MartinGarrix, SteveHarris]);

describe('ArtistsCollection', () => {
  it('should create an instance', () => {
    expect(artistCollectionOBJ).to.be.an.instanceof(ArtistsCollection);
  });
  it('artistCollectionOBJ.addArtist(Avicii) return undefined', () => {
    expect(artistCollectionOBJ.addArtist(Avicii)).to.be.equal(undefined);
  });
  it('artistCollectionOBJ.getArtist(MartinGarrix) return No existe el artista que desea obtener', () => {
    expect(artistCollectionOBJ.getArtist('MartinGarrix')).to.be.equal('No existe el artista que desea obtener');
  });
  it('artistCollectionOBJ.getName(MartinGarrix) return No existe el artista a buscar', () => {
    expect(artistCollectionOBJ.getName('MartinGarrix')).to.be.equal('No existe el artista a buscar');
  });
  it('artistCollectionOBJ.getGroup(Iron Maiden) return Iron Maiden', () => {
    expect(artistCollectionOBJ.getGroup('Iron Maiden')).to.be.equal('Iron Maiden');
  });
  it('artistCollectionOBJ.getGenre(Dance) return Dance', () => {
    expect(artistCollectionOBJ.getGenre('Dance')).to.be.equal('Dance');
  });
  it('artistCollectionOBJ.getGenre(All Caps) return No existe el genero a buscar', () => {
    expect(artistCollectionOBJ.getGenre('All Caps')).to.be.equal(`No existe el genero a buscar`);
  });
  it('artistCollectionOBJ.getAlbum(Senjutsu) return Senjutsu', () => {
    expect(artistCollectionOBJ.getAlbum('Senjutsu')).to.be.equal('Senjutsu');
  });
  it('artistCollectionOBJ.getAlbum(Pimp to a butterfly) return No existe el álbum a buscar', () => {
    expect(artistCollectionOBJ.getAlbum('Pimp to a butterfly')).to.be.equal(`No existe el álbum a buscar`);
  });
  it('artistCollectionOBJ.getPublishedSongs(Summer Days) return 0', () => {
    expect(artistCollectionOBJ.getPublishedSongs('Summer Days')).to.be.equal(0);
  });
  it('artistCollectionOBJ.getPublishedSongs(Rick Astley) return 110', () => {
    expect(artistCollectionOBJ.getPublishedSongs('Rick Astley')).to.be.equal(110);
  });
  it('artistCollectionOBJ.getMonthlyListeners(Rick Astley) return 5754965', () => {
    expect(artistCollectionOBJ.getMonthlyListeners('Rick Astley')).to.be.equal(5754965);
  });
  it('artistCollectionOBJ.getMonthlyListeners(Kendrick Lamar) return -1', () => {
    expect(artistCollectionOBJ.getMonthlyListeners('Kendrick Lamar')).to.be.equal(-1);
  });
  it('artistCollectionOBJ.getArtistsCollectionLength() return 4', () => {
    expect(artistCollectionOBJ.getArtistsCollectionLength()).to.be.equal(4);
  });
  it('artistCollectionOBJ.getArtistList(0) return Rick Astley', () => {
    expect(artistCollectionOBJ.getArtistList(0)).to.be.equal('Rick Astley');
  });
});

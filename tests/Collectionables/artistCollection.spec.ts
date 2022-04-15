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
  it('should create an instance', () => {
    expect(artistCollectionOBJ.addArtist(Avicii)).to.be.equal(undefined);
  });
  it('should create an instance', () => {
    expect(artistCollectionOBJ.getGroup('Iron Maiden')).to.be.equal('Iron Maiden');
  });
  it('should create an instance', () => {
    expect(artistCollectionOBJ.getName('MartinGarrix')).to.be.equal('No existe el artista a buscar');
  });
  it('should create an instance', () => {
    expect(artistCollectionOBJ.getArtist('MartinGarrix')).to.be.equal('No existe el artista que desea obtener');
  });
  it('should create an instance', () => {
    expect(artistCollectionOBJ.getPublishedSongs('Summer Days')).to.be.equal(0);
  });
  it('should create an instance', () => {
    expect(artistCollectionOBJ.getArtistsCollectionLength()).to.be.equal(4);
  });
});

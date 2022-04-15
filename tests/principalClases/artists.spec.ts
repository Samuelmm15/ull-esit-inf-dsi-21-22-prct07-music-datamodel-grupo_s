import 'mocha';
import {expect} from 'chai';
import {Artist} from '../../src/DefinitiveHierarchy/PrincipalClases/artist';

const artist = new Artist('ArtistName', 'GroupName', ['genreName'], ['AlbumName'], 0, 100000);
describe('Artist', () => {
  it('should create an instance', () => {
    expect(artist).to.be.an.instanceof(Artist);
  });
  it('should create an instance', () => {
    expect(artist.getName()).to.be.equal('ArtistName');
  });
  it('should create an instance', () => {
    expect(artist.getGenre('genreName')).to.be.equal('genreName');
  });
  it('should create an instance', () => {
    expect(artist.getGroup()).to.be.equal('GroupName');
  });
  it('should create an instance', () => {
    expect(artist.getAlbum('AlbumName')).to.be.equal('AlbumName');
  });
  it('should create an instance', () => {
    expect(artist.getPublishedSongs()).to.be.equal(0);
  });
  it('should create an instance', () => {
    expect(artist.getMonthlyListeners()).to.be.equal(100000);
  });
});

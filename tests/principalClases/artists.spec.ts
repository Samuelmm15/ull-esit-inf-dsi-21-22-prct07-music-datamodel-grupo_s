import 'mocha';
import {expect} from 'chai';
import {Artist} from '../../src/DefinitiveHierarchy/PrincipalClases/artist';

const artist = new Artist('ArtistName', 'GroupName', ['genreName'], ['AlbumName'], 0, 100000);
describe('Artist', () => {
  it('should create an instance', () => {
    expect(artist).to.be.an.instanceof(Artist);
  });
  it('artist.getName() return ArtistName', () => {
    expect(artist.getName()).to.be.equal('ArtistName');
  });
  it('artist.getGenre(genreName) return genreName', () => {
    expect(artist.getGenre('genreName')).to.be.equal('genreName');
  });
  it('artist.getGroup() return GroupName', () => {
    expect(artist.getGroup()).to.be.equal('GroupName');
  });
  it('artist.getAlbum(AlbumName) return AlbumName', () => {
    expect(artist.getAlbum('AlbumName')).to.be.equal('AlbumName');
  });
  it('artist.getPublishedSongs() return 0', () => {
    expect(artist.getPublishedSongs()).to.be.equal(0);
  });
  it('artist.getMonthlyListeners() return 100000', () => {
    expect(artist.getMonthlyListeners()).to.be.equal(100000);
  });
});

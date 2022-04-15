import 'mocha';
import {expect} from 'chai';
import {Artist} from '../../src/DefinitiveHierarchy/PrincipalClases/artist';
import {Group} from '../../src/DefinitiveHierarchy/PrincipalClases/groups';
import {MusicGenre} from '../../src/DefinitiveHierarchy/PrincipalClases/musicGenre';

const ArtistName = new Artist('ArtistName', 'GroupName', ['genreName'], ['AlbumName'], 0, 100000);
const GroupName = new Group('Iron Maiden', [ArtistName], 1975, 'Heavy Metal', 'Senjutsu', 6591966);
const genreName = new MusicGenre('GenreName', [GroupName], [ArtistName], ['AlbumName'], ['Songs']);
describe('MusicGenre', () => {
  it('should create an instance', () => {
    expect(genreName).to.be.an.instanceof(MusicGenre);
  });
  it('genreName.getName() return GenreName', () => {
    expect(genreName.getName()).to.be.equal('GenreName');
  });
  it('genreName.getGroups(GroupName) return GroupName', () => {
    expect(genreName.getGroups('GroupName')).to.be.equal(GroupName);
  });
  it('genreName.getArtists(ArtistName) return ArtistName', () => {
    expect(genreName.getArtists('ArtistName')).to.be.equal(ArtistName);
  });
  it('genreName.getAlbums(AlbumName) return AlbumName', () => {
    expect(genreName.getAlbums('AlbumName')).to.be.equal('AlbumName');
  });
  it('genreName.getSongs(Songs) return Songs', () => {
    expect(genreName.getSongs('Songs')).to.be.equal('Songs');
  });
});

import 'mocha';
import {expect} from 'chai';
import {Artist} from '../../src/DefinitiveHierarchy/PrincipalClases/artist';
import {Group} from '../../src/DefinitiveHierarchy/PrincipalClases/groups';

const ArtistName = new Artist('ArtistName', 'GroupName', ['genreName'], ['AlbumName'], 0, 100000);
const group = new Group('Iron Maiden', [ArtistName], 1975, 'Heavy Metal', 'Senjutsu', 6591966);
describe('Group', () => {
  it('should create an instance', () => {
    expect(group).to.be.an.instanceof(Group);
  });
  it('group.getName() return Iron Maiden', () => {
    expect(group.getName()).to.be.equal('Iron Maiden');
  });
  it('group.getArtists(ArtistName) return ArtistName', () => {
    expect(group.getArtists('ArtistName')).to.be.equal(ArtistName);
  });
  it('group.getYearCreation() return 1975', () => {
    expect(group.getYearCreation()).to.be.equal(1975);
  });
  it('group.getGenre() return Heavy Metal', () => {
    expect(group.getGenre()).to.be.equal('Heavy Metal');
  });
  it('group.getAlbums() return Senjutsu', () => {
    expect(group.getAlbums()).to.be.equal('Senjutsu');
  });
  it('group.getMonthlyListener() return 6591966', () => {
    expect(group.getMonthlyListener()).to.be.equal(6591966);
  });
});

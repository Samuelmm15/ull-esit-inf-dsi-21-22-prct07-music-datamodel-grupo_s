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
  it('should create an instance', () => {
    expect(group.getName()).to.be.equal('Iron Maiden');
  });
  it('should create an instance', () => {
    expect(group.getArtists('ArtistName')).to.be.equal(ArtistName);
  });
  it('should create an instance', () => {
    expect(group.getYearCreation()).to.be.equal(1975);
  });
  it('should create an instance', () => {
    expect(group.getGenre()).to.be.equal('Heavy Metal');
  });
  it('should create an instance', () => {
    expect(group.getAlbums()).to.be.equal('Senjutsu');
  });
  it('should create an instance', () => {
    expect(group.getMonthlyListener()).to.be.equal(6591966);
  });
});

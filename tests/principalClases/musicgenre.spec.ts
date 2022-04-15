// import 'mocha';
// import {expect} from 'chai';
// import {Artist} from '../../src/DefinitiveHierarchy/PrincipalClases/artist';
// import {Group} from '../../src/DefinitiveHierarchy/PrincipalClases/groups';
// import {MusicGenre} from '../../src/DefinitiveHierarchy/PrincipalClases/musicgenre';

// const ArtistName = new Artist('ArtistName', 'GroupName', ['genreName'], ['AlbumName'], 0, 100000);
// const GroupName = new Group('Iron Maiden', [ArtistName], 1975, 'Heavy Metal', 'Senjutsu', 6591966);
// const genreName = new MusicGenre('GenreName', [GroupName], [ArtistName], ['AlbumName'], ['Songs']);
// describe('MusicGenre', () => {
//   it('should create an instance', () => {
//     expect(genreName).to.be.an.instanceof(MusicGenre);
//   });
//   it('should create an instance', () => {
//     expect(genreName.getName()).to.be.equal('GenreName');
//   });
//   it('should create an instance', () => {
//     expect(genreName.getGroups('GroupName')).to.be.equal(GroupName);
//   });
//   it('should create an instance', () => {
//     expect(genreName.getArtists('ArtistName')).to.be.equal(ArtistName);
//   });
//   it('should create an instance', () => {
//     expect(genreName.getAlbums('AlbumName')).to.be.equal('AlbumName');
//   });
//   it('should create an instance', () => {
//     expect(genreName.getSongs('Songs')).to.be.equal('Songs');
//   });
// });

// import 'mocha';
// import {expect} from 'chai';
// import {Artist} from '../../src/DefinitiveHierarchy/PrincipalClases/artist';
// import {Group} from '../../src/DefinitiveHierarchy/PrincipalClases/groups';
// import {MusicGenre} from '../../src/DefinitiveHierarchy/PrincipalClases/musicgenre';
// import {Song} from '../../src/DefinitiveHierarchy/PrincipalClases/song';
// import {Album} from '../../src/DefinitiveHierarchy/PrincipalClases/album';

// const ArtistName = new Artist('ArtistName', 'GroupName', ['GenreName'], ['AlbumName'], 0, 100000);
// const GroupName = new Group('Iron Maiden', [ArtistName], 1975, 'Heavy Metal', 'Senjutsu', 6591966);
// const GenreName = new MusicGenre('GenreName', [GroupName], [ArtistName], ['AlbumName'], ['Songs']);
// const Songs = new Song('Bohemian Rhapsody', [ArtistName], '5:59', [GenreName], false, 1481925623);
// const album = new Album('AlbumName', [ArtistName], 0, [GenreName], [Songs], GroupName);

// describe('Album', () => {
//   it('should create an instance', () => {
//     expect(album).to.be.an.instanceof(Album);
//   });
//   it('should create an instance', () => {
//     expect(album.getName()).to.be.equal('AlbumName');
//   });
//   it('should create an instance', () => {
//     expect(album.getArtist('ArtistName')).to.be.equal('ArtistName');
//   });
//   it('should create an instance', () => {
//     expect(album.getYearPublication()).to.be.equal(0);
//   });
//   it('should create an instance', () => {
//     expect(album.getGenre('GenreName')).to.be.equal('GenreName');
//   });
//   it('should create an instance', () => {
//     expect(album.getSongs(Songs)).to.be.equal('Songs');
//   });
//   it('should create an instance', () => {
//     expect(album.getGroup()).to.be.equal('GroupName');
//   });
// });

// import 'mocha';
// import {expect} from 'chai';
// import {Artist} from '../../src/DefinitiveHierarchy/PrincipalClases/artist';
// import {Group} from '../../src/DefinitiveHierarchy/PrincipalClases/groups';
// import {MusicGenre} from '../../src/DefinitiveHierarchy/PrincipalClases/musicgenre';
// import {Song} from '../../src/DefinitiveHierarchy/PrincipalClases/song';

// const ArtistName = new Artist('ArtistName', 'GroupName', ['GenreName'], ['AlbumName'], 0, 100000);
// const GroupName = new Group('Iron Maiden', [ArtistName], 1975, 'Heavy Metal', 'Senjutsu', 6591966);
// const GenreName = new MusicGenre('GenreName', [GroupName], [ArtistName], ['AlbumName'], ['Songs']);
// const Songs = new Song('Bohemian Rhapsody', [ArtistName], '5:59', [GenreName], false, 1481925623);

// describe('Song', () => {
//   it('should create an instance', () => {
//     expect(Songs).to.be.an.instanceof(Song);
//   });
//   it('should create an instance', () => {
//     expect(Songs.getName()).to.be.equal('Beat it');
//   });
//   it('should create an instance', () => {
//     expect(Songs.getAuthor('ArtistName')).to.be.equal('ArtistName');
//   });
//   it('should create an instance', () => {
//     expect(Songs.getSongDuration()).to.be.equal('4:58');
//   });
//   it('should create an instance', () => {
//     expect(Songs.getGenre('GenreName')).to.be.equal('GenreName');
//   });
//   it('should create an instance', () => {
//     expect(Songs.getReproductionsNumber()).to.be.equal(813716305);
//   });
//   it('should create an instance', () => {
//     expect(Songs.getSingle()).to.be.equal(false);
//   });
// });

// import 'mocha';
// import {expect} from 'chai';
// import {Artist} from '../../src/DefinitiveHierarchy/PrincipalClases/artist';
// import {MusicGenre} from '../../src/DefinitiveHierarchy/PrincipalClases/musicgenre';
// import {ArtistsCollection} from '../../src/DefinitiveHierarchy/Collectionables/artistCollection';
// import {GenreCollection} from '../../src/DefinitiveHierarchy/Collectionables/genreCollection';

// const MartinGarrix = new Artist('Martin Garrix', 'Martin Garrix', ['EDM'], ['Summer Days'], 73, 22404740);
// const Avicii = new Artist('Avicii', 'Avicii', ['Dance'], ['True'], 98, 28729564);
// const SteveHarris = new Artist('Steve Harris', 'Iron Maiden', ['Heavy Metal'], ['Senjutsu'], 204, 6591966);

// const EDM = new MusicGenre('EDM', [], [MartinGarrix], ['Summer Days'], ['Summer']);
// const Dance = new MusicGenre('Dance', [], [Avicii], ['True'], ['Levels']);
// const Classic = new MusicGenre('Classic', [], [], [''], ['']);

// export const GenresCollectionObj = new GenreCollection([EDM, Dance]);
// export const ArtistsCollectionObj = new ArtistsCollection([MartinGarrix, Avicii, SteveHarris]);
// describe('GenreCollection', () => {
//   it('should create an instance', () => {
//     expect(GenresCollectionObj).to.be.an.instanceof(GenreCollection);
//   });
//   it('should create an instance', () => {
//     expect(GenresCollectionObj.addGenre(Classic)).to.be.equal(undefined);
//   });
//   it('should create an instance', () => {
//     expect(GenresCollectionObj.getGenre('EDM')).to.be.equal('EDM');
//   });
//   it('should create an instance', () => {
//     expect(GenreCollectionObj.getGenre('Classic')).to.be.equal('No existe el genero a buscar');
//   });
// });

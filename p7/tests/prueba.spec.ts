import "mocha";
import {expect} from "chai";
// import {ArtistsCollection} from "../src/Definitivos-Jerarquia/colecartist";
import {Artist} from "../src/Definitivos-Jerarquia/Principal-Clases/artist";
import {Group} from "../src/Definitivos-Jerarquia/Principal-Clases/groups";
import {MusicGenre} from "../src/Definitivos-Jerarquia/Principal-Clases/musicGenre";
import {Song} from "../src/Definitivos-Jerarquia/Principal-Clases/song";
import {Album} from "../src/Definitivos-Jerarquia/Principal-Clases/album";

// SIEMPRE ES ARTISTA, GRUPO, GÉNERO, CANCIÓN, ÁLBUM Y POR ÚLTIMO SI HAY ES PLAYLIST
const BadBunny = new Artist('BadBunny', 'Iluminati', 'Reggae', 'Touralmundo', '2', 12);

const Iluminati = new Group('Iluminati', BadBunny, 2016, 'Reggae', 'Touralmundo', 12);

const Trap = new MusicGenre('Trap', Iluminati, BadBunny, 'Touralmundo', 'Chambea');
const Reggae = new MusicGenre('Reggae', Iluminati, BadBunny, 'Touralmundo', 'Chambea');

const Chambea = new Song('Chambea', BadBunny, 5, Trap, '2', 2016015);

const Touralmundo = new Album('Touralmundo', Iluminati, BadBunny, 2016, Trap, Chambea);

// const lista = new ArtistsCollection([BadBunny]);
describe("ARTISTCOLLECTION TEST", () => {
  it("Coleccionar artistas", () => {
    // expect
  });
});

describe("ARTIST TEST", () => {
  it("Crear artista", () => {
    expect(BadBunny.getName()).to.equal('BadBunny');
    expect(BadBunny.getGroup()).to.equal('Iluminati');
    expect(BadBunny.getGenre()).to.equal('Reggae');
    expect(BadBunny.getAlbum()).to.equal('Touralmundo');
    expect(BadBunny.getPublishedSongs()).to.equal('2');
    expect(BadBunny.getMonthlyListeners()).to.equal(12);
  });
});
describe("GROUP TEST", () => {
  it("Crear grupo", () => {
    expect(Iluminati.getName()).to.equal('Iluminati');
    expect(Iluminati.getArtists()).to.equal(BadBunny);
    expect(Iluminati.getYearCreation()).to.equal(2016);
    expect(Iluminati.getGenre()).to.equal('Reggae');
    expect(Iluminati.getAlbums()).to.equal('Touralmundo');
    expect(Iluminati.getMonthlyListener()).to.be.equal(12);
  });
});
describe("MUSICGENRE TEST", () => {
  it("Crear género", () => {
    expect(Trap.getName()).to.equal('Trap');
    expect(Trap.getArtists()).to.equal(BadBunny);
    expect(Trap.getGroups()).to.equal(Iluminati);
    expect(Trap.getAlbums()).to.equal('Touralmundo');
    expect(Trap.getSongs()).to.be.equal('Chambea');
  });
});
describe("SONG TEST", () => {
  it("Crear canción", () => {
    expect(Chambea.getName()).to.equal('Chambea');
    expect(Chambea.getAuthor()).to.equal(BadBunny);
    expect(Chambea.getGenre()).to.equal(Trap);
    expect(Chambea.getReproductionsNumber()).to.equal(2016015);
  });
});
describe("ALBUM TEST", () => {
  it("Crear álbum", () => {
    expect(Touralmundo.getName()).to.equal('Touralmundo');
    expect(Touralmundo.getArtist()).to.equal(Iluminati);
    expect(Touralmundo.getGroup()).to.equal(BadBunny);
    expect(Touralmundo.getGenre()).to.equal(Reggae);
    expect(Touralmundo.getYearPublication()).to.equal(2016);
    expect(Touralmundo.getSongs()).to.equal(Chambea);
  });
});
// describe("PLAYLIST TEST", () => {
//   it("Crear playlist", () => {
//     expect(Playlists.getName()).to.equal('Playlists');
//     expect(Playlists.getSongs()).to.equal(Chambea);
//     expect(Playlists.getMonthlyListeners()).to.equal(12);
//   });
// });
// describe("PLAYLISTS COLLECTION TEST", () => {
//   it("Coleccionar playlists", () => {
//     // expect
//   });
// });
// describe("SONGS COLLECTION TEST", () => {
//   it("Coleccionar canciones", () => {
//     // expect
//   });
// });


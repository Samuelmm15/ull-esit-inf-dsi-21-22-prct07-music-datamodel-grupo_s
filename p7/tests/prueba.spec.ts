import "mocha";
import {expect} from "chai";
import {ArtistsCollection} from "../src/colecartist";
import {Artist} from "../src/artist"
import {Group} from "../src/groups"
import {MusicGenre} from "../src/musicgenre"
import {Song} from "../src/song";
import {Album} from "../src/album";

const BadBunny = new Artist('BadBunny', Iluminati, Reggae, Touralmundo, Chambea, 12);

const lista = new ArtistsCollection([BadBunny]);

const Chambea = new Song('Chambea', BadBunny, 5, Reggae, '2', 2016015)

const Iluminati = new Group('Iluminati', BadBunny, 2016, Reggae, Touralmundo, 12);

const Touralmundo = new Album('Touralmundo', Iluminati, BadBunny, 2016, Reggae, Chambea)


const Reggae = new MusicGenre('Reggae', Iluminati, BadBunny, Touralmundo, Chambea);

describe("ArtistsCollection", () => {
  it("Coleccionar artistas", () => {
    expect
  });
});

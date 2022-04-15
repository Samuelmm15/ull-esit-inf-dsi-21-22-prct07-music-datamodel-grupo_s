import 'mocha';
import {expect} from 'chai';
import {Artist} from '../../src/DefinitiveHierarchy/PrincipalClases/artist';
import {MusicGenre} from '../../src/DefinitiveHierarchy/PrincipalClases/musicGenre';
import {Song} from '../../src/DefinitiveHierarchy/PrincipalClases/song';

const Avicii = new Artist('Avicii', 'Avicii', ['Dance'], ['True'], 98, 28729564);
const Dance = new MusicGenre('Dance', [], [Avicii], ['True'], ['Levels']);

const Levels = new Song('Levels', [Avicii], '3:18', [Dance], false, 582217851);

describe('Song', () => {
  it('should create an instance', () => {
    expect(Levels).to.be.an.instanceof(Song);
  });
  it('Levels.getName() return Levels', () => {
    expect(Levels.getName()).to.be.equal('Levels');
  });
  it('Levels.getAuthor(Avicii) return Avicii', () => {
    expect(Levels.getAuthor('Avicii')).to.be.equal(Avicii);
  });
  it('Levels.getSongDuration() return 3:18', () => {
    expect(Levels.getSongDuration()).to.be.equal('3:18');
  });
  it('Levels.getGenre(Dance) return Dance', () => {
    expect(Levels.getGenre('Dance')).to.be.equal(Dance);
  });
  it('Levels.getReproductionsNumber() return 582217851', () => {
    expect(Levels.getReproductionsNumber()).to.be.equal(582217851);
  });
  it('Levels.getSingle() return false', () => {
    expect(Levels.getSingle()).to.be.equal(false);
  });
});


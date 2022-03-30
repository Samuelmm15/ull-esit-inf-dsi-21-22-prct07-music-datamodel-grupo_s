import 'mocha';
import {expect} from 'chai';
import {RandomNumber} from '../src/modi30_03';
import {RandomNumberSetCollection} from '../src/modi30_03';
describe('RandomNumber', () => {
  it('Debería de retornar un numero aleatorio entre 0 y 1', () => {
    const randomNumber = RandomNumber.getInstance();
    expect(randomNumber.getRandomNumber()).to.be.within(0, 1);
  });
});
describe('RandomNumberSetCollection', () => {
  it('Debería añadir un numero aleatorio al set', () => {
    const randomNumber = RandomNumber.getInstance();
    const randomNumberSetCollection = new RandomNumberSetCollection<number>([randomNumber.getRandomNumber()]);
    randomNumberSetCollection.addRandomNumber(randomNumber.getRandomNumber());
    expect(randomNumberSetCollection.getRandomNumberSet().size).to.equal(2);
  });
  it('Debería de iterar con iterate sobre otro set de numeros', () => {
    const randomNumber = RandomNumber.getInstance();
    const randomNumberSetCollection = new RandomNumberSetCollection<number>([randomNumber.getRandomNumber()]);
    randomNumberSetCollection.addRandomNumber(randomNumber.getRandomNumber());
    const randomNumberSet = randomNumberSetCollection.getRandomNumberSet();
    const randomNumberSetIterator = randomNumberSet[Symbol.iterator]();
    expect(randomNumberSetIterator.next().value).to.equal(randomNumber.getRandomNumber());
    expect(randomNumberSetIterator.next().value).to.equal(randomNumber.getRandomNumber());
  });
});


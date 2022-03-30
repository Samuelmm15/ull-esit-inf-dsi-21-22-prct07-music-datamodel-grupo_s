/**
 * Genera un número aleatorio entre 0 y 1
 */
export class RandomNumber {
  /**
    * @private metodo privado static que almacena la única instancia que va a tener dicha clase
  */
  private static RandomNumber: RandomNumber;
  private constructor() {}
  /**
    * @returns {RandomNumber} devuelve la única instancia de la clase
  */
  public static getInstance(): RandomNumber {
    if (!RandomNumber.RandomNumber) {
      RandomNumber.RandomNumber = new RandomNumber();
    }
    return RandomNumber.RandomNumber;
  }
  /**
    * @returns {number} devuelve un número aleatorio entre 0 y 1
  */
  public getRandomNumber(): number {
    return Math.random();
  }
  /**
   * @param n numero mas pequeño
   * @param m numero mas grande
   * @returns un número aleatorio entre min (incluido) y max (excluido)
   */
  getRandomArbitrary(n: number, m: number): number {
    return Math.random() * (m - n) + n;
  }
}
/**
  * Genera un conjunto de números aleatorios
*/
export class RandomNumberSetCollection<T> implements Iterable<T> {
  /**
    * @private metodo privado que almacena el conjunto de números aleatorios
    */
  private randomNumberSet: Set<T>;
  /**
    * Guarda los números aleatorios en un conjunto Set de randomNumberSet
    * @param randomNumberSet Conjunto de números aleatorios
  */
  constructor(randomNumberSet: T[]) {
    this.randomNumberSet = new Set(randomNumberSet);
    randomNumberSet.forEach((randomNumber) => {
      this.randomNumberSet.add(randomNumber);
    });
  }
  /**
    * Añade un número aleatorio al conjunto
    * @param randomNumber Número aleatorio a añadir al conjunto
    */
  public addRandomNumber(randomNumber: T): void {
    this.randomNumberSet.add(randomNumber);
  }
  /**
    * retorna el conjunto de números aleatorios
    * @returns {Set<T>} devuelve el conjunto de números aleatorios
  */
  public getRandomNumberSet(): Set<T> {
    return this.randomNumberSet;
  }
  /**
    * retorna un iterador sobre el conjunto de números aleatorios
    * @returns {Iterator<T>} devuelve un iterador sobre el conjunto de números aleatorios
  */
  public [Symbol.iterator](): Iterator<T> {
    return this.randomNumberSet.values();
  }
}

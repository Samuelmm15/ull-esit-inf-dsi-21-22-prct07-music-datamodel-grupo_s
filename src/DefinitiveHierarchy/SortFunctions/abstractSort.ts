/**
 * Abstract class ordenation
 */
export abstract class GeneralSort<T> {
  constructor() {
  }
  /**
   * Ascendent ordenation
   */
  abstract greaterSort(): T | T[];
  /**
   * Descent ordenation
   */
  abstract lowerSort(): T | T[];
}

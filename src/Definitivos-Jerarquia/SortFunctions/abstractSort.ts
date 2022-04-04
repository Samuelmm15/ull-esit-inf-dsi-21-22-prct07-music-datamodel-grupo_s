export abstract class GeneralSort<T> {
  constructor() {
  }
  abstract greaterSort(): T | T[];
  abstract lowerSort(): T | T[];
}

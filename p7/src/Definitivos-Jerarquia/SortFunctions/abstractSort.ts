export abstract class GeneralSort<T> {
  constructor() {
  }
  abstract greaterSort(): T;
  abstract lowerSort(): T;
}

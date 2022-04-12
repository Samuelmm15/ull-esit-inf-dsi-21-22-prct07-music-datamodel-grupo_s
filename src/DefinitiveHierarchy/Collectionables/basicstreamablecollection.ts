/* eslint-disable linebreak-style */
import {Streamable} from './streamable';

/**
 * Abstract class of the collections
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  /**
   * Recieves the name of the object on the collection
   * @param name Name of the object
   */
  constructor(protected name: T[]) {
  }
  abstract getName(name: string): string;
}

/* eslint-disable linebreak-style */
import {Streamable} from './streamable';

export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  constructor(protected artists: T[]) {
  }
  abstract getName(author: string): string;
}

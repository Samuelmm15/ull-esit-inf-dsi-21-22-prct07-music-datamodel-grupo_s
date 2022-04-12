/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */

/**
 * Interface of the collections
 */
export interface Streamable<T> {
    /**
     * Name of all elements on the collection
     * @param name Name of the diferent collections objects
     */
    getName(name: string): string;
}

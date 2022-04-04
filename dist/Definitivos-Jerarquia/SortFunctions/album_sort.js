"use strict";
// /* eslint-disable camelcase */
// import {GeneralSort} from './abstractSort';
// import {Album} from '../Principal-Clases/album';
// import {Artist} from '../Principal-Clases/artist';
// import {Song} from '../Principal-Clases/song';
// import {MusicGenre} from '../Principal-Clases/musicGenre';
// export class Album_Sort extends GeneralSort<Album> {
//   constructor(protected songs: Album[]) {
//     super();
//   }
//   greaterSort(): SongCollection {
//     let greaterTitleSort: string[] = [];
//     let i: number = 0;
//     let auxiliary: Song[] = [];
//     for (i = 0; i < this.songs.getColectionlength(); i++) {
//       auxiliary.push(this.songs.getnObject(i));
//     }
//     i = 0;
//     for (i = 0; i < auxiliary.length; i++) {
//       greaterTitleSort.push(auxiliary[i].getName());
//     }
//     greaterTitleSort.sort();
//     auxiliary = [];
//     i = 0;
//     for (i = 0; i < this.songs.getColectionlength(); i++) {
//       auxiliary.push(this.songs.getSong(greaterTitleSort[i]) as Song);
//     }
//     console.log(greaterTitleSort);
//     const result: SongCollection = new SongCollection(auxiliary);
//     return result;
//   }
//   lowerSort(): SongCollection {
//     const result: SongCollection = new SongCollection([]);
//     let lowerTitleSort: string[] = [];
//     let i: number = 0;
//     const auxiliary: Song[] = [];
//     for (i = 0; i < this.songs.getColectionlength(); i++) {
//       auxiliary.push(this.songs.getnObject(i));
//     }
//     i = 0;
//     for (i = 0; i < auxiliary.length; i++) {
//       lowerTitleSort.push(auxiliary[i].getName());
//     }
//     lowerTitleSort.sort().reverse();
//     console.log(lowerTitleSort);
//     return result;
//   }
// }

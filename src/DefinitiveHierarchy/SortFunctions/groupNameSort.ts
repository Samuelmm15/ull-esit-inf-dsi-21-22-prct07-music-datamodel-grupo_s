/* eslint-disable prefer-const */
/* eslint-disable camelcase */
import {GeneralSort} from './abstractSort';
import {Group} from '../PrincipalClases/groups';

/**
 * Class that sorts group objects by name
 */
export class GroupNameSort extends GeneralSort<Group> {
  /**
   * Recieves a group array
   */
  constructor(protected group: Group[]) {
    super();
  }
  /**
   * Ascendent ordenation of the groups by name
   * @returns Group Array with sorted groups by name
   */
  greaterSort(): Group[] {
    let auxiliary: string[] = [];
    for (let i = 0; i < this.group.length; i++) {
      auxiliary.push(this.group[i].getName());
    }
    auxiliary.sort();
    let result: Group[] = [];
    for (let i = 0; i < auxiliary.length; i++) {
      for (let j = 0; j < this.group.length; j++) {
        if (this.group[j].getName() === auxiliary[i]) {
          result.push(this.group[j]);
          console.log(this.group[j].getName());
        }
      }
    }
    return result;
  }
  /**
   * Descendent ordenation of the groups by name
   * @returns Group Array with sorted groups by name
   */
  lowerSort(): Group[] {
    let auxiliary: string[] = [];
    for (let i = 0; i < this.group.length; i++) {
      auxiliary.push(this.group[i].getName());
    }
    auxiliary.sort().reverse();
    let result: Group[] = [];
    for (let i = 0; i < auxiliary.length; i++) {
      for (let j = 0; j < this.group.length; j++) {
        if (this.group[j].getName() === auxiliary[i]) {
          result.push(this.group[j]);
          console.log(this.group[j].getName());
        }
      }
    }
    return result;
  }
}

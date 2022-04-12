import {Group} from '../DefinitiveHierarchy/PrincipalClases/groups';
import {Artist} from '../DefinitiveHierarchy/PrincipalClases/artist';
import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

/**
 * Artist entry type
 */
type schemaType = {
    Artist: {name: string; artists: Artist; yearCreation: number;
      genre: string; albums: string; monthlyListeners: number}[]
};

/**
 * Group data base class
 */
export class JsonGroupCollection {
  private database: lowdb.LowdbSync<schemaType>;

  /**
   * Creates the JSON file that contains the group data base
   * @param GroupItem Group array
   */
  constructor(GroupItem: Group[]) {
    this.database = lowdb(new FileSync("JsonFiles/Group.json"));
    this.database.set("Group", GroupItem).write();
  }

  /**
   * Adds new entries to the group data base
   * @param GroupItem Group array
   */
  restart(GroupItem: Group[]): void {
    this.database.set("Group", GroupItem).write();
  }
}

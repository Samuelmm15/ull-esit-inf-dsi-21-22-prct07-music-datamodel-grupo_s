import {Group} from './DefinitiveHierarchy/PrincipalClases/groups';
import {Artist} from './DefinitiveHierarchy/PrincipalClases/artist';
import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

type schemaType = {
    Artist: {name: string; artists: Artist; yearCreation: number;
      genre: string; albums: string; monthlyListeners: number}[]
};

export class JsonGroupCollection {
  private database: lowdb.LowdbSync<schemaType>;

  constructor(GroupItem: Group[]) {
    this.database = lowdb(new FileSync("JsonFiles/Group.json"));
    this.database.set("Group", GroupItem).write();
  }

  restart(GroupItem: Group[]): void {
    this.database.set("Group", GroupItem).write();
  }
}

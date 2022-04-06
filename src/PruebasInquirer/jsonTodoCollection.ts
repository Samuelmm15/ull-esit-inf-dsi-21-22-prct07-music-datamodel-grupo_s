import {ArtistItem} from "./ArtistItem";
import {TodoCollection} from "./todoCollection";
import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

type schemaType = {
    tasks: { id: number; task: string; complete: boolean; }[]
};

export class JsonTodoCollection extends TodoCollection {
  private database: lowdb.LowdbSync<schemaType>;

  constructor(public userName: string, ArtistItems: ArtistItem[] = []) {
    super(userName, []);
    this.database = lowdb(new FileSync("Artist.json"));
    if (this.database.has("Artists").value()) {
      const dbItems = this.database.get("tasks").value();
      dbItems.forEach((item) => this.itemMap.set(item.id,
          new ArtistItem(item.id, item.task, item.complete)));
    } else {
      this.database.set("tasks", ArtistItems).write();
      ArtistItems.forEach((item) => this.itemMap.set(item.id, item));
    }
  }

  addTodo(task: string): number {
    const result = super.addTodo(task);
    this.storeTasks();
    return result;
  }

  markComplete(id: number, complete: boolean): void {
    super.markComplete(id, complete);
    this.storeTasks();
  }

  removeComplete(): void {
    super.removeComplete();
    this.storeTasks();
  }

  private storeTasks() {
    this.database.set("tasks", [...this.itemMap.values()]).write();
  }
}

import {Artist} from "../Definitivos-Jerarquia/Principal-Clases/artist";
type ItemCounts = {
  total: number,
  incomplete: number
  }
export class ArtistCollectionInquire {
  private nextId: number = 1;
  protected itemMap = new Map<number, Artist>();
  constructor(public userName: string, Artists: Artist[] = []) {
    Artists.forEach((item) => this.itemMap.set(item.id, item));
  }
  addTodo(task: string): number {
    while (this.getTodoById(this.nextId)) {
      this.nextId++;
    }
    this.itemMap.set(this.nextId, new Artist(this.nextId, task));
    return this.nextId;
  }
  getTodoById(id: number): Artist | undefined {
    return this.itemMap.get(id);
  }
  getArtists(includeComplete: boolean): Artist[] {
    return [...this.itemMap.values()]
        .filter((item) => includeComplete || !item.complete);
  }
  markComplete(id: number, complete: boolean) {
    const Artist = this.getTodoById(id);
    if (Artist) {
      Artist.complete = complete;
    }
  }
  removeComplete() {
    this.itemMap.forEach((item) => {
      if (item.complete) {
        this.itemMap.delete(item.id);
      }
    });
  }
  getItemCounts(): ItemCounts {
    return {
      total: this.itemMap.size,
      incomplete: this.getArtists(false).length,
    };
  }
}

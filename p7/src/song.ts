export class Song {
  constructor(private name : string, private author : string, private songDuration : number,
  private genre : string, private single : string, private reproductionsNumber : number) {}

  getName() : string {
    return this.name;
  }

  getAuthor() : string {
    return this.author;
  }

  getSongDuration() : number {
    return this.songDuration;
  }

  getGenre() : string {
    return this.single;
  }

  getSingle() : string {
    return this.genre;
  }

  getReproductionsNumber() : number {
    return this.reproductionsNumber;
  }
}
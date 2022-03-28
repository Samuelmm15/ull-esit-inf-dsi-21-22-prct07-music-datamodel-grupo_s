export class Playlists {
  constructor(private name: string, private songs: string, 
    private duration: number, private genre: string) {
  }
  getName(): string {
    return this.name;
  }
  getSongs(): string {
    return this.songs;
  }
  getDuration(): number {
    return this.duration;
  }
  getGenre(): string {
    return this.genre;
  }
}

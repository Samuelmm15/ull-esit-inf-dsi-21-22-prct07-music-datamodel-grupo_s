export class Album {
  constructor(private name: string, private group: string, private artist: string,
    private yearPublication: number, private genre: string, private songs: string) {
  }
  getName(): string {
    return this.name;
  }
  getGroup(): string {
    return this.group;
  }
  getArtist(): string {
    return this.artist;
  }
  getYearPublication(): number {
    return this.yearPublication;
  }
  getGenre(): string {
    return this.genre;
  }
  getSongs(): string {
    return this.songs;
  }
}

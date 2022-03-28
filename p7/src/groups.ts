export class Group {
  constructor(private name: string, private artists: string,
    private yearCreation: number, private genre: string,
    private albums: string, private monthlyListener: number) {
  }
  getName(): string {
    return this.name;
  }
  getArtists(): string {
    return this.artists;
  }
  getYearCreation(): number {
    return this.yearCreation;
  }
  getGenre(): string {
    return this.genre;
  }
  getAlbums(): string {
    return this.albums;
  }
  getMonthlyListener(): number {
    return this.monthlyListener;
  }
}

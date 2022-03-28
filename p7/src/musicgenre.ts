export class MusicGenre {
  constructor(private name : string, private groups : string, private artists : string,
    private albums : string, private songs : string) {
  }

  getName() : string {
    return this.name;
  }

  getGroups() : string {
    return this.groups;
  }

  getArtists() : string {
    return this.artists;
  }

  getAlbums() : string {
    return this.albums;
  }

  getSongs() : string {
    return this.songs;
  }
}
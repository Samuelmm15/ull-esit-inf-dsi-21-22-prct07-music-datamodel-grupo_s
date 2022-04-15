# Práctica 7 - Digitalizando la colección de música de los abuelos

## Introducción

En esta práctica, la primera grupal de la asignatura, se tendrá que llevar a cabo un diseño orientado a objetos del modelo de datos de un sistema de información que permita almacenar una biblioteca de música. Esta biblioteca de música debe guardar una serie de canciones, géneros musicales, albumes, grupos y artistas donde cada elemento tiene sus atributos correspondientes; toda está información se tendrá que guardar en una playlist. En las playlists existentes en la biblioteca los usuarios van a poder visualizar toda la información asociada a una playlist, como lo son el nombre de la playlist, los géneros incluidos y la duración de dicha playlist en horas, minutos y segundos. En la playlist también se debería navegar por está para ver las canciones que se incluyen en está siguiendo una serie de criterios para ordenar la información y por último un usuario debería poder crear alguna playlist y borrar su propia playlist.

## Organización de los directorios

En está primera parte, se comentará todo lo relacionado con la implementación que se ha elegido para realizar la biblioteca de música que se pretende conseguir.

Antes de empezar, podemos observar todo el contenido del directorio ```src``` donde se encuentra todo nuestro código. Podemos ver 3 directorios principales, por un lado tenemos el directorio ```DefinitiveHierarchy``` donde, se encuentran las clases base del proyecto, por otro lado el directorio ```GestorClass``` donde, se encuentra la clase gestor y por último el directorio ```LowdbFiles``` donde se encuentra todo lo relacionado con Lowdb.

```
📦src
 ┣ 📂DefinitiveHierarchy
 ┃ ┣ 📂Collectionables
 ┃ ┣ 📂PrincipalClases
 ┃ ┗ 📂SortFunctions
 ┣ 📂GestorClass
 ┣ 📂LowdbFiles
```

## Implementación de la colección de música 

En el directorio de ```DefinitiveHierarchy``` se encuentran las clases base, donde nos encontramos con las clases principales, las colecciones y las clases que definen las distintas ordenaciones. En este directorio se encuentran todos los ficheros necesarios para implementar lo que es la funcionalidad de la aplicación, como se dijo anteriormente, en este directorio se implementan las clases que definen los diferentes tipos de objetos necesarios, las colecciones de los diferentes objetos y los sistemas de ordenación que se deben utilizar a la hora de navegar por la playlist.

### Clases Principales

Las clases Principales las encontramos en el directorio ```PrincipalClases``` y son las siguientes:

```
📦DefinitiveHierarchy
 ┣ 📂Collectionables
 ┣ 📂PrincipalClases
 ┃ ┣ 📜album.ts
 ┃ ┣ 📜artist.ts
 ┃ ┣ 📜groups.ts
 ┃ ┣ 📜musicGenre.ts
 ┃ ┣ 📜playlist.ts
 ┃ ┗ 📜song.ts
 ┗ 📂SortFunctions
```

Las principales clases, se encuentran en los ficheros ```album.ts```, ```artist.ts```, ```groups.ts```, ```musicGenre.ts```, ```playlist.ts``` y ```song.ts```. La clase base dentro de este directorio es ```Artist```, ya que, todas las demás clases van a utilizar objectos de tipo ```Artist``` para algunos de sus atributos. 

La jerarquía quedaría de la siguiente manera:

```
Clase base
📜artist.ts

📜musicGenre.ts
 ┣ 📜artist.ts
 ┣ 📜groups.ts

📜song.ts
 ┣ 📜musicGenre.ts
 ┣ 📜artist.ts

📜album.ts
 ┣ 📜artist.ts
 ┣ 📜groups.ts
 ┣ 📜musicGenre.ts
 ┣ 📜song.ts

📜playlist.ts
 ┣ 📜artist.ts
 ┣ 📜groups.ts
 ┣ 📜musicGenre.ts
 ┣ 📜song.ts

Leyenda:
📜clase_que_usa_el_objeto
 ┣ 📜tipo_del_objeto_que_usa_la_clase
```

Los atributos se van a representar usando la siguiente tabla: 

|   Clases   |   Atributo   |      Atributo       |       Atributo        |        Atributo         |       Atributo         |         Atributo             |
|------------|--------------|---------------------|-----------------------|-------------------------|------------------------|------------------------------|
| Artist     | name: string | group: string       | genre: string         | album: string           | publishedSongs: string | monthlyListeners: number     |
| Group      | name: string | artists: Artist     | genre: string         | albums: string          | yearCreation: number   | monthlyListener: number      |
| MusicGenre | name: string | artists: Artist     | groups: Group         | albums: string          | songs: string          |                              |
| Song       | name: string | author: Artist      | genre: MusicGenre     | songDuration: string    | single: boolean        | reproductionsNumber: number  |
| Album      | name: string | artists: Artist     | genre: MusicGenre     | yearPublication: number | songs: ```Song[]```    | groups: Group                |
| Playlist   | name: string | songs: ```Song[]``` | genre: MusicGenre     | duration: number        |                        |                              |

Algunos atributos interesantes son ```songs: Song[]``` y ```single: boolean```. Los atributos ```songs```, son basicamente una array de objetos de tipos ```Song```, ya que en las clases ```Playlist``` y ```Album``` necesitan un conjunto de objetos de tipo ```Song```. El atributo ```single``` indica si una canción es un single o pertence a algún album. De manera general, se va a usar un booleano que indica ```true``` si la canción es un single y ```false``` si el single pertenece a un album. 

Estas clases, reciben una serie de atributos que, como se puede ver en la tabla, se encargan de crear los diferentes objetos necesarios para la librería de música que se quiere crear.

### Colecciones

Las colecciones las encontramos en el directorio ```Collectionables``` y son las siguientes:

```
📦DefinitiveHierarchy
 ┣ 📂Collectionables
 ┃ ┣ 📜artistCollection.ts
 ┃ ┣ 📜basicstreamablecollection.ts
 ┃ ┣ 📜genreCollection.ts
 ┃ ┣ 📜songCollection.ts
 ┃ ┗ 📜streamable.ts
 ┣ 📂PrincipalClases
 ┗ 📂SortFunctions
```

Estas clases, se han creado simplemente para poder guardar un conjunto de artistas, géneros y canciones. Estas colecciones, también nos ayudarán a organizar mejor la información de cada uno de los conjuntos y poder acceder a la información que queramos de cada conjunto.

La clase base en este caso es ```BasicStreamableCollection<T>``` y, extiende la interfaz streameable que define el método ```getName()``` . En esta clase base, se usa el tipo genérico ```<T>```, necesario para poder definir el tipo de objectos a coleccionar.

- Interfaz stremeable

```typescript
export interface Streamable<T> {
    getName(name: string): string;
}
```

- Clase abstracta

```typescript
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  constructor(protected name: T[]) {
  }
  abstract getName(name: string): string;
}
```

Las clases ```ArtistsCollection```, ```GenreCollection``` y ```SongCollection```, usan los mismos atríbutos que en las clases Principales ```Artist```, ```MusicGenre``` y ```Song``` ya que, las colecciones usan objetos del tipo correspondiente. En las colecciones, se definen una serie de métodos para poder acceder a los atríbutos de cada objeto dentro del array del tipo objeto que sea. También, se han creado métodos para poder eliminar objetos de la array del tipo que sea.

Un ejemplo de implementación lo tenemos en el código de la clase ```SongCollection```:

```typescript
export class SongCollection extends BasicStreamableCollection<Song> {

  constructor(protected songs: Song[]) {
    super(songs);
  }

  public addSong(song: Song) {
    this.songs.push(song);
  }

  public getSong(songName: string): Song {
    let result: Song = this.songs[0];
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i].getName() === songName) {
        result = this.songs[i];
      }
    }
    return result;
  }

  public getSongAuthor(authorName: Artist): Artist | string {
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i].getAuthor(authorName.getName()) === authorName) {
        return this.songs[i].getAuthor(authorName.getName());
      }
    }
    return `No existe el autor que intenta buscar`;
  }

  public getName(songName: string): string {
    let success: string = ``;
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i].getName() === songName) {
        success = this.songs[i].getName();
      }
    }
    if (success === ``) {
      success = `No existe la canción a buscar`;
    }
    return success;
  }

  public getReproductionsNumber(reproductionsNumber: number): Song | string {
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i].getReproductionsNumber() === reproductionsNumber) {
        return this.songs[i];
      }
    }
    return `No existe la canción que intenta buscar`;
  }

  public getDuration(duration: number): Song | string {
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i].durationFormat() === duration) {
        return this.songs[i];
      }
    }
    return `No existe la canción que intenta buscar`;
  }

  private removeSong(index: number): Song[] {
    this.songs.splice(index, 1);
    return this.songs;
  }

  public getRemoveIndex(songName: string): Song[] {
    let i = 0;
    for (i = 0; i < this.songs.length; i++) {
      if (this.songs[i].getName() === songName) {
        break;
      }
    }
    return this.removeSong(i);
  }

  public getColectionlength(): number {
    return this.songs.length;
  }

  public getnObject(position: number): Song {
    return this.songs[position];
  }

  public getSongArray(): Song[] {
    return this.songs;
  }
}
```

> Los primeros métodos de esta clase representan a sus atríbutos (Las demás clase usan sus propios atríbutos), pero, en este caso en la colección se guardan todos los objetos tipo ```Song``` que se hayan creado. Los siguiente métodos, se encuentran disponibles en las demás clases y nos permiten eliminar elementos de cada colección, recibir el tamaño de la array de canciones que contiene la colección, recibir algun objeto del tipo ```Song``` en concreto y otro, para recibir el array de canciones contenidas en la colección.

### Funciones de ordenación

Las funciones de ordenación las encontramos en el directorio ```SortFunctions``` y son las siguientes:

```
📦DefinitiveHierarchy
 ┣ 📂Collectionables
 ┣ 📂PrincipalClases
 ┗ 📂SortFunctions
 ┃ ┣ 📜abstractSort.ts
 ┃ ┣ 📜albumSort.ts
 ┃ ┣ 📜albumYearSort.ts
 ┃ ┣ 📜artistNameSort.ts
 ┃ ┣ 📜durationSongSort.ts
 ┃ ┣ 📜genreSort.ts
 ┃ ┣ 📜groupNameSort.ts
 ┃ ┣ 📜playlistSort.ts
 ┃ ┣ 📜reproductionNumberSort.ts
 ┃ ┣ 📜singleFilter.ts
 ┃ ┗ 📜titleSongSort.ts
```

En este directorio, se encuentran todas las ordenaciones y filtros que se deben añadir a la funcionalidad del sistema que van a utilizar los usuarios para navegar las playlists existentes o las listas de canciones. 

En está implementación, tenemos una clase abstracta llamada ```GeneralSort``` donde, se definen las funciones de ordenación ascendente y descendente que deben de tener el resto de clases derivadas. En está clase, se definen dos métodos, el método ```greaterSort``` que ordena de forma ascendente y del método ```lowerSort``` que ordena de forma descendente.

Las ordenaciones que se deben utilizar para mostrar las diferentes listas de artistas, canciones, albums y playlists siguen los siguientes criterios:

  - Alfabéticamente por título de la canción, ascendente y descendente.
    - Esto se realiza en la clase ```TitleSongSort```
  - Alfabéticamente por nombre del álbum, ascendente y descendente.
    - Esto se realiza en la clase ```AlbumSort```
  - Alfabéticamente por nombre de la playlist, ascendente y descendente.
    - Esto se realiza en la clase ```PlaylistNameSort```
  - Por año de lanzamiento del álbum, ascendente y descendente.
    - Esto se realiza en la clase ```AlbumYearSort```
  - Por número de reproducciones totales, ascendente y descendente.
    - Esto se realiza en la clase ```ReproductionNumberSort```
  - Filtrar para mostrar únicamente los singles lanzados.
    - Esto se realiza en la clase ```SingleFilter```

Las ordenaciones que se deben utilizar para navegar por las diferentes playlists siguen los siguientes criterios:

  - Alfabéticamente por título de la canción, ascendente y descendente.
    - Esto se realiza en la clase ```TitleSongSort```
  - Alfabéticamente por nombre del grupo/artista, ascendente y descendente.
    - Esto se realiza en la clase ```GroupNameSort``` y en la clase ```ArtistNameSort```
  - Por año de lanzamiento, ascendente y descendente.
    - Esto se realiza en la clase ```AlbumYearSort```
  - Por duración de la canción, ascendente y descendente.
    - Esto se realiza en la clase ```SongDurationSort```
  - Por género musical, ascendente y descendente.
    - Esto se realiza en la clase ```GenreSort```
  - Por número de reproducciones totales, ascendente y descendente.
    - Esto se realiza en la clase ```TReproductionNumberSort```

Un ejemplo de implementación lo tenemos en el código de la clase ```AlbumSort```:

```typescript
export class AlbumSort extends GeneralSort<Album> {

  constructor(protected album: Album[]) {
    super();
  }

  greaterSort(): Album[] {
    let auxiliary: string[] = [];
    for (let i = 0; i < this.album.length; i++) {
      auxiliary.push(this.album[i].getName());
    }
    auxiliary.sort();
    let result: Album[] = [];
    for (let i = 0; i < auxiliary.length; i++) {
      for (let j = 0; j < this.album.length; j++) {
        if (this.album[j].getName() === auxiliary[i]) {
          result.push(this.album[j]);
          console.log(this.album[j].getName());
        }
      }
    }

    return result;
  }

  lowerSort(): Album[] {
    let auxiliary: string[] = [];
    for (let i = 0; i < this.album.length; i++) {
      auxiliary.push(this.album[i].getName());
    }
    auxiliary.sort().reverse();
    let result: Album[] = [];
    for (let i = 0; i < auxiliary.length; i++) {
      for (let j = 0; j < this.album.length; j++) {
        if (this.album[j].getName() === auxiliary[i]) {
          result.push(this.album[j]);
          console.log(this.album[j].getName());
        }
      }
    }

    return result;
  }
}
```

> Este implementación es muy similar al de las demás ordenaciones, menos ```SingleFilter```, pero, utilizando otros atributos.

En la clase ```SingleFilter``` tenemos lo siguiente:

```typescript
export class SingleFilter {
  constructor(protected songs: SongCollection) {
  }

  filter(): SongCollection {
    const songArray: Song[] = [];
    for (let i = 0; i < this.songs.getColectionlength(); i++) {
      if (this.songs.getnObject(i).getSingle() === true) {
        console.log(this.songs.getnObject(i).getName());
        songArray.push(this.songs.getnObject(i));
      }
    }
    const result: SongCollection = new SongCollection(songArray);
    return result;
  }
}
```

> En está clase, se usa el método ```filter```, donde, se filtran las canciones según sean un single o no.

### Inquirer

#### ¿Qué es Inquirer?

Inquirer es un paquete de NPM que proporciona de manera sencilla una forma de capturar la entrada del usuario en las aplicaciones de interfaz de línea de comandos en Node.js. Proporciona varios métodos para hacer preguntas y devolver respuestas al usuario a las que se puede acceder mediante una función ```.then```.

#### Implementación

La implementación completa del paquete inquirer se encuentra en fichero ```gestorClass```, en este fichero, nos encontramos con la clase gestor y las funciones que contienen los menús del paquete inquirer. Por un lado, tenemos la clase gestor donde, se invoca a la función principal del menu, por otro lado, tenemos las funciones que contienen los menús realizados con el paquete Inquirer.

##### Clase Gestor

La clase Gestor tiene el siguiente aspecto:

```typescript
class Gestor {
  constructor() {
  }
  menu() {
    promptUser();
  }
}
```

##### Funciones inquirer

En este apartado, se va a hablar sobre las funciones que implementan los menús que usan el paquete inquirer. Primero, se va a comentar sobre la función ```promptUser```, está función, muestra está primera parte del menu:

![Captura de pantalla 2022-04-13 201431](https://user-images.githubusercontent.com/64638993/163253486-3f92a66a-d617-441d-a879-ad22c6223acb.png)

En está imagen podemos ver las playlists disponibles y los géneros musicales que recoge nuestra biblioteca, y justo debajo una serie de opciones que se pueden realizar sobre las playlist y crear nuevas playlists que se puedan eliminar si el usuario lo desea.

Está parte del menu representa está parte del código:

```typescript
function promptUser(): void {
  setMaxListeners(100);
  console.clear();
  displayPlayList();
  inquirer.prompt({
    type: "list",
    name: "command",
    message: "Choose option",
    choices: Object.values(Commands),
  }).then((answers) => {
    switch (answers["command"]) {
      case Commands.Toggle:
        promptDefault();
        break;
      case Commands.Add:
        promptAdd();
        break;
      case Commands.New:
        promptPlaylistSelect('New');
        break;
      case Commands.Delete:
        promptPlaylistSelect('Delete');
        break;
      case Commands.Purge:
        promptDelete();
        break;
      case Commands.Quit:
        console.clear();
        console.log(`<< Program Exit >>`);
        exit();
    }
  });
}
```

```typescript
enum Commands {
  Toggle = "Defaults Options To Sort",
  Add = "Add New Playlist",
  New = "Add New Song to a Playlist",
  Delete = "Delete Song of a Playlist",
  Purge = "Remove New Added Playlist",
  Quit = "Quit"
}

enum SortCommands {
  Greater = "Greater Sort",
  Lower = "Lower Sort",
  Default = "Default Sort"
}

enum OptionsToSort {
  Songs = "Song Sort",
  Artists = "Artist Sort",
  Albums = "Album Sort",
  Genre = "Genre Sort",
  Group = "Group Sort",
  Reproduction = "Reproduction Sort",
  Duration = "Songs Duration Sort",
  Filter = "Filter Single Songs"
}

enum OptionToAdd {
  NewPlaylist = "Add a new playlist from scratch",
  UsingExistsPlaylist = "Adding a new playlist from an existing one"
}
```

> En este código, podemos ver que se invoca al método setmaxListeners, este, se encarga de establecer un máximo de oyentes o de puntos del tipo inquirer.prompt(). A continuación, se invoca la función ```displayPlayList``` que muestra las playlists disponibles, el tiempo que dura cada playlist y la cantidad de géneros que contiene nuestra biblioteca. Por último, se utiliza el paquete inquirer. Primero, se utiliza ```inquirer.promp()``` donde, se muestran unas preguntas indicando la opción ```type: list```, luego, se indica la opción **name** (Nombre del comando), la opción **message** que indica el mensaje que se muestra antes de elegir cualquier opción y por último choices, donde se indican las elecciones usando el enum **Commands**, tras esto, se accede al ```then``` donde, dependiendo de la elecciones que se haya hecho, el switch accede ha dicha opción.

La elecciones que procesa el switch son las siguientes:

  1. Mostrar una playlist de la base de datos siguiendo los criterios de ordenación enumerados en el apartado **Funciones de ordenación**.

  - En este submenu se nos permite elegir una de las opciones de ordenación: ordenación ascendente, descendente y por defecto. Al elegir una opción de ordenación se accede a un submenu donde se elige el criterio de ordenación que se desee dentro de una playlist. 
  
  - Ordenación ascendente

  ```typescript
  function greaterSort(playlistName: string): void {
    console.clear();
    inquirer.prompt({type: "list", 
      name: "OptionsToSort", 
      message: "Choose option", 
      choices: Object.values(OptionsToSort)})
        .then((answers) => {
          switch (answers["OptionsToSort"]) {
            case OptionsToSort.Albums:
              console.clear();
              let AlbumSortCollection = new AlbumSort(AlbumCollectionOBJ);
              AlbumSortCollection.greaterSort();
              defaultMenuReturn();
              break;
            case OptionsToSort.Artists:
              console.clear();
              let ArtistNameSortCollection = new ArtistNameSort(artistArray);
              ArtistNameSortCollection.greaterSort();
              defaultMenuReturn();
              break;
            case OptionsToSort.Duration:
              console.clear();
              let PlaylistOBJ1: Playlists = PlaylistCollectionOBJ.getPlaylist(playlistName);
              let SongArray1: Song[] = PlaylistOBJ1.getSongsArray();
              let collectionSongs1 = new SongCollection(SongArray1);
              let DurationSongSort = new SongDurationSort(collectionSongs1);
              DurationSongSort.greaterSort();
              defaultMenuReturn();
              break;
            case OptionsToSort.Filter:
              console.clear();
              let PlaylistOBJ2: Playlists = PlaylistCollectionOBJ.getPlaylist(playlistName);
              let SongArray2: Song[] = PlaylistOBJ2.getSongsArray();
              let collectionSongs2 = new SongCollection(SongArray2);
              let FilterSortCollectionSongs = new SingleFilter(collectionSongs2);
              FilterSortCollectionSongs.filter();
              defaultMenuReturn();
              break;
            case OptionsToSort.Genre:
              console.clear();
              let PlaylistOBJ3: Playlists = PlaylistCollectionOBJ.getPlaylist(playlistName);
              let GenreArray: MusicGenre[] = PlaylistOBJ3.getGenreArray();
              let collectionGenre = new GenreCollection(GenreArray);
              let GenreSortCollection = new GenreSort(collectionGenre);
              GenreSortCollection.greaterSort();
              defaultMenuReturn();
              break;
            case OptionsToSort.Group:
              console.clear();
              let GroupNameSortCollection = new GroupNameSort(GroupCollectionOBJ);
              GroupNameSortCollection.greaterSort();
              defaultMenuReturn();
              break;
            case OptionsToSort.Reproduction:
              console.clear();
              let PlaylistOBJ4: Playlists = PlaylistCollectionOBJ.getPlaylist(playlistName);
              let SongArray4: Song[] = PlaylistOBJ4.getSongsArray();
              let collectionSongs4 = new SongCollection(SongArray4);
              let ReproductionSongSort = new ReproductionNumberSort(collectionSongs4);
              ReproductionSongSort.greaterSort();
              defaultMenuReturn();
              break;
            case OptionsToSort.Songs:
              console.clear();
              let PlaylistOBJ5: Playlists = PlaylistCollectionOBJ.getPlaylist(playlistName);
              let SongArray5: Song[] = PlaylistOBJ5.getSongsArray();
              let collectionSongs5 = new SongCollection(SongArray5);
              let GreaterSortCollectionSongs = new TitleSongSort(collectionSongs5);
              GreaterSortCollectionSongs.greaterSort();
              defaultMenuReturn();
              break;
          }
        });
  }
  ```
 
  - Ordenación descendente

  ```typescript
  function lowerSort(playlistName: string): void {
    console.clear();
    inquirer.prompt({
      type: "list",
      name: "OptionSort",
      message: "Choose option",
      choices: Object.values(OptionsToSort)})
        .then((answers) => {
          switch (answers["OptionSort"]) {
            case OptionsToSort.Albums:
              console.clear();
              let AlbumSortCollection = new AlbumSort(AlbumCollectionOBJ);
              AlbumSortCollection.lowerSort();
              defaultMenuReturn();
              break;
            case OptionsToSort.Artists:
              console.clear();
              let ArtistNameSortCollection = new ArtistNameSort(artistArray);
              ArtistNameSortCollection.lowerSort();
              defaultMenuReturn();
              break;
            case OptionsToSort.Duration:
              console.clear();
              let PlaylistOBJ1: Playlists = PlaylistCollectionOBJ.getPlaylist(playlistName);
              let SongArray1: Song[] = PlaylistOBJ1.getSongsArray();
              let collectionSongs1 = new SongCollection(SongArray1);
              let DurationSongSort = new SongDurationSort(collectionSongs1);
              DurationSongSort.lowerSort();
              defaultMenuReturn();
              break;
            case OptionsToSort.Filter:
              console.clear();
              let PlaylistOBJ2: Playlists = PlaylistCollectionOBJ.getPlaylist(playlistName);
              let SongArray2: Song[] = PlaylistOBJ2.getSongsArray();
              let collectionSongs2 = new SongCollection(SongArray2);
              let FilterSortCollectionSongs = new SingleFilter(collectionSongs2);
              FilterSortCollectionSongs.filter();
              defaultMenuReturn();
              break;
            case OptionsToSort.Genre:
              console.clear();
              let PlaylistOBJ3: Playlists = PlaylistCollectionOBJ.getPlaylist(playlistName);
              let GenreArray: MusicGenre[] = PlaylistOBJ3.getGenreArray();
              let collectionGenre = new GenreCollection(GenreArray);
              let GenreSortCollection = new GenreSort(collectionGenre);
              GenreSortCollection.lowerSort();
              defaultMenuReturn();
              break;
            case OptionsToSort.Group:
              console.clear();
              let GroupNameSortCollection = new GroupNameSort(GroupCollectionOBJ);
              GroupNameSortCollection.lowerSort();
              defaultMenuReturn();
              break;
            case OptionsToSort.Reproduction:
              console.clear();
              let PlaylistOBJ4: Playlists = PlaylistCollectionOBJ.getPlaylist(playlistName);
              let SongArray4: Song[] = PlaylistOBJ4.getSongsArray();
              let collectionSongs4 = new SongCollection(SongArray4);
              let ReproductionSongSort = new ReproductionNumberSort(collectionSongs4);
              ReproductionSongSort.lowerSort();
              defaultMenuReturn();
              break;
            case OptionsToSort.Songs:
              console.clear();
              let PlaylistOBJ5: Playlists = PlaylistCollectionOBJ.getPlaylist(playlistName);
              let SongArray5: Song[] = PlaylistOBJ5.getSongsArray();
              let collectionSongs5 = new SongCollection(SongArray5);
              let GreaterSortCollectionSongs = new TitleSongSort(collectionSongs5);
              GreaterSortCollectionSongs.lowerSort();
              defaultMenuReturn();
              break;
          } 
        });
  }
  ```

  > Igual que en la función ```promptUser``` se utilizan las mismas opciones de inquirer, pero, las elecciones se sacan del enum **SortCommands**. En ambas funciones, en cada opción del switch se crea una variable de tipo Playlist, donde, se recibe una playlist que se quiera ordenar y, se crea una variable de tipo ```Song[]``` donde, se recogen las canciones de dicha playlist y se realiza la ordenación con el vector de canciones. 

  2. Crear nuevas playlists, a partir de una existente o a partir de una playlist vacía.

  - En este submenu se elige una de las opciones de forma similar al menu anterior y dependiendo de cada elección se accede a un submenu dentro del submenu o a otro:

    ```typescript
    function promptAdd(): void {
    console.clear();
    inquirer.prompt({type: "list",
      name: "OptionToAdd",
      message: "Choose option",
      choices: Object.values(OptionToAdd)})
        .then((answers) => {
          switch (answers["OptionToAdd"]) {
            case OptionToAdd.NewPlaylist:
              console.clear();
              newPlaylistFromScratch();
              break;
            case OptionToAdd.UsingExistsPlaylist:
              console.clear();
              newPlaylistUsingAnExisting();
              break;
          }
        });
    }
    ```

    > En está función, se definen las dos opciones que permitan a los usuarios crear playlists usando una de las dos formas. El paquete inquirer se implementa de la misma manera que en la función ```promptUser```, pero usando el enum **OptionToAdd**.

    - En el primer submenu se pregunta si se quieren agregar más canciones y se muestra un listado de las canciones existentes en la base de datos.

    ```typescript
    function newPlaylistUsingAnExisting(): void {
      let selectedPlaylist: string = '';
      inquirer.prompt({
        type: "list",
        name: "PlaylistSelector", 
        message: "Select a Playlist to see: ", 
        choices: PlaylistCollectionOBJ.getPlaylistArray().map((item) => ({name: PlaylistCollectionOBJ.getName(item.getName())}))})
          .then((answers) => {
            selectedPlaylist = answers["PlaylistSelector"];
            console.clear();
            console.log(`The selected playlist is: ${selectedPlaylist}`);
            console.log();
            let newPlaylistName: string = '';
            inquirer.prompt({type: "input",
              name: "newName",
              message: "Enter the new playlist name:"})
                .then((answers) => {
                  newPlaylistName = answers.newName;
                  const playlistSelected: Playlists = PlaylistCollectionOBJ.getPlaylist(selectedPlaylist);
                  const auxiliary: Song[] = playlistSelected.getSongsArray();
                  const newPlaylistUserAdded = new Playlists(newPlaylistName, auxiliary, playlistSelected.getDuration(), playlistSelected.getGenreArray(), false);
                  PlaylistCollectionOBJ.addPlaylist(newPlaylistUserAdded);
                  collectionPlaylists.restart(PlaylistCollectionOBJ.getPlaylistArray());
                  console.clear();
                  inquirer.prompt({type: "confirm",
                    name: "SongsAdd",
                    message: "Do you want to add new Songs to the playlist?"})
                      .then((answers) => {
                        if (answers["SongsAdd"] === true) {
                          addingNewSongs(newPlaylistUserAdded);
                        } else {
                          console.clear();
                          inquirer.prompt({type: "confirm",
                            name: "SongsDelete",
                            message: "Do you want to delete any Song?"})
                              .then((answers) => {
                                if (answers["SongsDelete"] === true) {
                                  deleteSongs(newPlaylistUserAdded);
                                } else {
                                  console.clear();
                                  defaultMenuReturn();
                                }
                              });
                        }
                      });
                });
          });
    }
    ```

    > En esta función, se realiza un segundo y tercer ```inquirer.prompt()```, el primer ```inquirer.prompt()``` es igual al de la función ```promptUser()``` pero, usando el nombre de cada playlist como opción donde, depenediendo de la playlist, se copia el contenido de este a la nueva palylist creada para el usuario. En el segundo, se recibe una entrada, es decir, el nombre de la nueva playlist y en el tercero se le pregunta al usuario si quiere añadir canciones o no.

    - En el segundo submenu se pregunta si se quieren añadir nuevas canciones a la playlist o eliminar algunas de las canciones que se copiaron de la playlist anterior.

    ```typescript
    function newPlaylistFromScratch(): void {
      inquirer.prompt({type: "input",
        name: "newName",
        message: "Enter the new playlist name:"})
          .then((answers) => {
            if ((NewPlaylistCollectionOBJ.getName(answers["newName"]) !== answers["newName"]) && (NewPlaylistCollectionOBJ.getName(answers["newName"]) === undefined)) {
              let newPlaylistName = answers.newName;
              const newPlaylistUserAdded = new Playlists(newPlaylistName, [], 0, [], false);
              NewPlaylistCollectionOBJ.addPlaylist(newPlaylistUserAdded);
              NewcollectionPlaylists.restart(NewPlaylistCollectionOBJ.getPlaylistArray());
              console.clear();
              inquirer.prompt({type: "confirm",
                name: "SongsAdd",
                message: "Do you want to add new Songs to the playlist?"})
                  .then((answers) => {
                    if (answers["SongsAdd"] === true) {
                      addingNewSongs(newPlaylistUserAdded);
                    } else {
                      console.clear();
                      console.log('<< You must to add any song if you want to create a playlist >>');
                      defaultMenuReturn();
                    }
                  });
            } else {
              console.clear();
              console.log('<< The playlist cannot be created because it already exists or it doesnt have a name >>');
              defaultMenuReturn();
            }
          });
    }
    ```

    > En esta función, se utiliza un ```ìnquirer.prompt()``` pidiendo un nombre de la playlist al usuario y un segundo ```ìnquirer.prompt()``` donde, se le pregunta al usuario si quiere añadir canciones o no.

    > En caso de que el usuario quiera añadir canciones, se accede a la función ```addingNewSongs()```, donde, se añadan canciones o en otro caso se accede a la función ```deleteSongs()``` en caso de que no se quieran agregar más canciones.

    ```typescript
    function addingNewSongs(PlaylisToOperate: Playlists): void {
      console.clear();
      let SongToAdd: string = '';
      inquirer.prompt({type: "list",
        name: "SongList",
        message: "Select a Song To Add: ",
        choices: SongCollectionOBJ.getSongArray().map((item) => ({name: SongCollectionOBJ.getName(item.getName())}))})
          .then((answers) => {
            SongToAdd = answers["SongList"];
            if (PlaylisToOperate.getSongString(SongToAdd) !== SongToAdd) {
              let songToAddOBJ = SongCollectionOBJ.getSong(SongToAdd);
              PlaylisToOperate.addSong(songToAddOBJ);
              collectionPlaylists.restart(PlaylistCollectionOBJ.getPlaylistArray());
              console.clear();
              console.log('<< The song has been added correctly >>');
              inquirer.prompt({
                type: "confirm",
                name: "AddNewSongs",
                message: "Do you want to add new Songs?"})
                  .then((answers) => {
                    if (answers["AddNewSongs"] === true) {
                      addingNewSongs(PlaylisToOperate);
                    } else {
                      console.clear();
                      inquirer.prompt({type: "confirm",
                        name: "SongsDelete",
                        message: "Do you want to delete any Song?"})
                          .then((answers) => {
                            if (answers["SongsDelete"] === true) {
                              deleteSongs(PlaylisToOperate);
                            } else {
                              console.clear();
                              defaultMenuReturn();
                            }
                          });
                    }
                  });
            } else {
              console.clear();
              console.log('<< The song you are trying to add is already in the playlist >>');
              inquirer.prompt({
                type: "confirm",
                name: "AddNewSongs",
                message: "Do you want to add new Songs?"})
                  .then((answers) => {
                    if (answers["AddNewSongs"] === true) {
                      addingNewSongs(PlaylisToOperate);
                    } else {
                      console.clear();
                      inquirer.prompt({type: "confirm",
                        name: "SongsDelete",
                        message: "Do you want to delete any Song?"})
                          .then((answers) => {
                            if (answers["SongsDelete"] === true) {
                              deleteSongs(PlaylisToOperate);
                            } else {
                              console.clear();
                              defaultMenuReturn();
                            }
                          });
                    }
                  });
            }
          });
    }
    ```

  3. Eliminar canciones de una playlist.

  - En este submenu, se utilizan los métodos para eliminar canciones que se encuentra en la clase de colecciones de música.

  ```typescript
  function deleteSongs(PlaylistToOperate: Playlists): void {
      console.clear();
      let SongToDelete: string = '';
      inquirer.prompt({type: "list",
        name: "SongList",
        message: "Select a Song To Delete: ",
        choices: PlaylistCollectionOBJ.getSongsArray(PlaylistToOperate.getName()).map((item) => ({name: PlaylistCollectionOBJ.getSong(PlaylistToOperate, item)}))})
          .then((answers) => {
            SongToDelete = answers["SongList"];
            if (PlaylistToOperate.getSongString(SongToDelete) === SongToDelete) {
              let songToDeleteOBJ = SongCollectionOBJ.getSong(SongToDelete);
              PlaylistToOperate.getRemoveIndex(songToDeleteOBJ.getName());
              collectionPlaylists.restart(PlaylistCollectionOBJ.getPlaylistArray());
              console.clear();
              console.log('<< The song has been deleted correctly >>');
              inquirer.prompt({
                type: "confirm",
                name: "DeleteSongs",
                message: "Do you want to delete more Songs?"})
                  .then((answers) => {
                    if (answers["DeleteSongs"] === true) {
                      deleteSongs(PlaylistToOperate);
                    } else {
                      console.clear();
                      inquirer.prompt({type: "confirm",
                        name: "SongsAdd",
                        message: "Do you want to add new Songs to the playlist?"})
                          .then((answers) => {
                            if (answers["SongsAdd"] === true) {
                              addingNewSongs(PlaylistToOperate);
                            } else {
                              defaultMenuReturn();
                            }
                          });
                    }
                  });
            }
          });
  }
  ```

  4. Eliminar una playlist creada por el usuario.

  - En este submenu, se accede a un listado de las playlists existentes o creadas por el usuario para que pueda eliminar sus playlists, las playlists del sistema no se pueden borrar.

  ```typescript
  function promptDelete(): void {
    console.clear();
    let selectedPlaylist: string = '';
    inquirer.prompt({
      type: "list", 
      name: "PlaylistSelector", 
      message: "Select a Playlist to see: ", 
      choices: PlaylistCollectionOBJ.getPlaylistArray().map((item) => ({name: PlaylistCollectionOBJ.getName(item.getName())}))})
        .then((answers) => {
          selectedPlaylist = answers["PlaylistSelector"];
          console.clear();
          console.log(`La playlist seleccionada ha sido: ${selectedPlaylist}`);
          console.log();
          const playlistSelected: Playlists = PlaylistCollectionOBJ.getPlaylist(selectedPlaylist);
          if (playlistSelected.getsystemPlaylistBoolean() === false) {
            PlaylistCollectionOBJ.getRemoveIndex(playlistSelected.getName());
            collectionPlaylists.restart(PlaylistCollectionOBJ.getPlaylistArray());
            console.log('<< The selected playlist was deleted >>');
            defaultMenuReturn();
          } else {
            console.clear();
            console.log('<< The selected playlist is a system playlist >>');
            console.log('<< It cant be deleted >>');
            defaultMenuReturn();
          }
        });
  }
  ```

  5. Salir del programa.

En los otros submenus definidos, los sistemas de elección de los diferentes submenus son muy similares al que se tiene implementado en el menu ```promptUser()```. Tras terminar cada submenu, se vuelve al punto de partida usando el menu ```defaultMenuReturn()``` donde, se le pregunta al usuario si quiere continuar con la ejecución del programa o no, en el primer caso se vuelve al menu ```promptUser()``` y en el segundo caso simplemente se sale del programa usando el método **exit()**.

### Lowdb

#### ¿Qué es Lowdb?

La librería lowdb, nos permite crear una pequeña base de datos local en formato JSON. Los elementos que se quieran incluir en una base de datos usando la libreria lowdb se guardan en un fichero **JSON** en el directorio que el programador decida. Esta libreria, cuenta con una serie de **APIS** y **Adaptadores** que permiten a los programadores trabajar de forma sencilla a la hora de crear una pequeña base de datos. Está libreria cuenta con soporte en **TypeScript**.

#### Implementación

En la implementación, se ha decidido crear una serie de clases para los diferentes tipos de objetos, estas clases, nos van a permitir añadir entradas a la base de datos y los ficheros relacionados se encuentran en el directorio **LowdbFiles**. Cada clase, va a tener un tipo de objeto asginado para crear la base de datos de dicho objeto, en conreto los tipos de objetos que deben tener una base de datos son los siguientes: género musical, canción, grupo, artista, album y playlist.

En el directorio **JsonFiles** nos encontramos con las bases de datos que se crearon gracias a las clases del directorio **LowdbFiles**. Tenemos los ficheros ```Artist.json```, ```Genre.json```, ```Group.json```, ```Song.json``` y ```Album.json```. Estas bases de datos, se han creado con la ayuda de la libreria lowdb implementada en las clases en el directorio **LowdbFiles**.

```
📦JsonFIles
 ┣ 📜Artist.json
 ┣ 📜Genre.json
 ┣ 📜Group.json
 ┗ 📜Song.json
```

En el directorio **LowdbFiles** se encuentran todas las clases relacionadas con la inserción de entradas en las bases de datos. Cada clase, tiene un fichero asignado para que sea más comodo trabajar con ello y de paso utilizar el principo **SOLID Single Responsibility Principle** para que cada clase tenga una única responsibilidad.

```
📦src
 ┣ 📂DefinitiveHierarchy
 ┃ ┣ 📂Collectionables
 ┃ ┣ 📂PrincipalClases
 ┃ ┗ 📂SortFunctions
 ┣ 📂GestorClass
 ┣ 📂LowdbFiles
 ┃ ┣ 📜jsonGenreCollection.ts
 ┃ ┣ 📜jsonGroupCollection.ts
 ┃ ┣ 📜jsonPlaylistCollection.ts
 ┃ ┣ 📜jsonSongCollection.ts
 ┃ ┗ 📜jsonTodoCollection.ts
```

Los ficheros contenidos en este directorio tienen el siguiente aspecto:

```typescript
type schemaType = {
    Song: {name: string; author: Artist[]; songDuration: number;
      genre: MusicGenre[]; single: boolean; reproductionsNumber: number}[]
};

export class JsonSongCollection extends SongCollection {
  private database: lowdb.LowdbSync<schemaType>;

  constructor(SongItems: Song[]) {
    super(SongItems);
    this.database = lowdb(new FileSync("JsonFiles/Song.json"));
    this.database.set("Song", SongItems).write();
  }

  restart(SongItems: SongCollection): void {
    this.database.set("Song", SongItems).write();
  }
}
```

En este caso se ha escogido la clase ```JsonSongCollection```. Está clase, se va utilizar como ejemplo para explicar la implementación de las demás clases dentro del mismo directorio.

Por un lado se ha creado un tipo de datos ```schemaType``` donde, se definen los principales atributos que van a contenter la base de datos de las canciones, por otro lado, tenemos la propia clase ```JsonSongCollection``` que extiende a la clase ```SongCollection``` donde se crean las colecciones de canciones. 

En la clase ```JsonSongCollection``` se tienen los siguientes métodos:

  - El constructor, crea el fichero json donde estará la base de datos ```Song.json``` y se añade cada canción a la base de datos, al constructor, se le pasa como parámetro una array de canciones.
  - El método ```restart```, permite añadir nuevos objetos tipo ```Song``` a la base de datos.

Para el resto de clases se sigue el mismo esquema.

## Conclusión

En conclusión, nos ha parecido una práctica bastante interesante, ya que nos ha permitido familiarizarnos aún más con el lenguaje de programación typescript y también nos ha permitido conocer algunas herramientas como inquirer y lowdb para el manejo de la entrada de datos por parte del usuario y de la creación de una pequeña base de datos para poder guardar la información. Otras herramientas que nos han ayudado en el desarrollo de está aplicación han sido: las github actions que nos han ayudado con la integración continua del código usando las actions de pruebas y de coveralls para asegurar que nuestro código funciona de la forma correcta y sonarcloud para asegurar la calidad de nuestro código, sonarcloud tiene en cuenta una serie de aspectos como son la fiabilidad, mantenibilidad, seguridad, cobrimiento y duplicidades en nuestro código. Sonarcloud nos muestre el numero de bugs, vulnerabilidades, líneas duplicadas, el porcentaje de cubrimiento, los *security hotspot* y los *code smells* que se encuentren en nuestro código para poder conocer las partes del código que se deben mejorar. Por último, nuestro código cumple con los principios **SOLID** de **Single Responsibility Principle** y **Open-Closed Principle**; algunos ejemplos los podemos encontrar en los directorios [PrincipalClases](./src/DefinitiveHierarchy/PrincipalClases/), [Collectionables](./src/DefinitiveHierarchy/Collectionables/), [SortFunctions](./src/DefinitiveHierarchy/SortFunctions/) y [LowdbFiles](./src/LowdbFiles/).

# Práctica 7 - Digitalizando la colección de música de los abuelos

[![Coveralls](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_s/actions/workflows/coveralls.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_s/actions/workflows/coveralls.yml)

[![Tests](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_s/actions/workflows/tests.js.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo_s/actions/workflows/tests.js.yml)

Participant 1: Samuel \
Participant 2: Felipe \
Participant 3: Pablo \
Group: S \
Course: Desarrollo de Sistemas Informáticos

## Tareas Previas
1. Aceptar la asignación de GitHub Classroom asociada a esta práctica.
2. Aprender a utilizar los módulos Inquirer.js y Lowdb.
3. Incluir documentación mediante el uso de TypeDoc y adoptar una metodología de desarrollo dirigido por pruebas/comportamiento.
4. Tratar de respetar los principios SOLID de diseño orientado a objetos.
5. Hacer uso durante el desarrollo de todas las herramientas relacionadas con el cubrimiento del código (Coveralls), integración contínua (Github Actions) y calidad del código (Sonar Cloud).

## Introducción
En esta práctica, la primera grupal de la asignatura, tendrá que llevar a cabo un diseño orientado a objetos del modelo de datos de un sistema de información que permita almacenar una biblioteca de música. Esta biblioteca de música debe guardar una serie de canciones, géneros musicales, albums, grupos y artistas donde cada elemento tiene sus atributos correspondientes; toda está información se tendrá que guardar en una playlist. En las playlists existentes en la biblioteca los usuarios van a poder visualizar toda la información asociada a una playlist, como lo son el nombre de la playlist, los géneros incluidos y la duración de dicha playlist en horas, minutos y segundos. En la playlist también se debería navegar por está para ver las canciones que se incluyen en está siguiendo una serie de criterios para ordenar la información y por último un usuario debería poder crear alguna playlist y borrar su propia playlist.

## Codificación

En está primera parte se comentará todo lo relacionada con la implementación que se ha elegido para realizar la biblioteca de música que se pretende conseguir.

Antes de empezar podemos observar todo el contenido del directorio ```src``` donde se encuentra todo nuestro código. Podemos ver 3 directorios principales, por un lado tenemos el directorio ```DefinitiveHierarchy``` donde se encuentran las clases base del proyecto, por otro lado el directorio ```GestorClass``` donde se encuentra la clase gestor y por último el directorio ```InquirerFiles``` donde se encuentra todo lo relacionado con Inquirer.

```
📦src
 ┣ 📂DefinitiveHierarchy
 ┃ ┣ 📂Collectionables
 ┃ ┣ 📂PrincipalClases
 ┃ ┗ 📂SortFunctions
 ┣ 📂GestorClass
 ┣ 📂InquirerFiles
```

### Jerarquía de Clases 

En el directorio de ```DefinitiveHierarchy``` se encuentran las clases base, donde nos encontramos con las clases principales, las colecciones y las clases que definen las distintas ordenaciones.

#### Clases Principales

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

Las principales clases se encuentran en los ficheros ```album.ts```, ```artist.ts```, ```groups.ts```, ```musicGenre.ts```, ```playlist.ts``` y ```song.ts```. La clase base dentro de este directorio es ```Artist```, ya que todas las demás clases van a utilizar objectos de tipo ```Artist``` para algunos de sus atributos. 

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

Algunos atributos interesantes son ```songs: Song[]``` y ```single: boolean```. Los atributos ```songs``` son basicamente una array de objetos de tipos ```Song```, ya que en las clases ```Playlist``` y ```Album``` necesitan un conjunto de objetos de tipo ```Song```. El atríbuto ```single``` indica si una canción es un single o pertence a algún album, basicamente se va a usar un booleano que indica ```true``` si la canción es un single y ```false``` si el single pertenece a un album.

#### Colecciones

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

Estas clases se han creado simplemente para poder guardar un conjunto de artistas, géneros y canciones. Estas colecciones también nos ayudarán a organizar mejor la información de cada uno de los conjuntos y poder acceder a la información que queramos de cada conjunto.

La clase base en este caso sería ```BasicStreamableCollection<T>``` y está clase extiende a la interfaz streameable que define el método ```getName()``` que debe estar en todas las colecciones. En está clase base se usa el tipo genérico ```<T>``` para poder definir el tipo que queramos para crear cualquier colección.

Las clases ```ArtistsCollection```, ```GenreCollection``` y ```SongCollection```, usan los mismos atríbutos que en las clases Principales ```Artist```, ```MusicGenre``` y ```Song``` ya que las colecciones usan objetos del tipo correspondiente a estas clases. En las colecciones se definen una serie de métodos para poder acceder a los atríbutos de cada objeto dentro del array del tipo objeto que sea. También se han creado métodos para poder eliminar objetos de la array del tipo que sea.

#### Funciones de ordenación

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

## Clase Gestor

## Inquirer

## Lowdb

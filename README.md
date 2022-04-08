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

Antes de empezar podemos observar todo el contenido del directorio ```src``` donde se encuentra todo nuestro código. Podemos ver 3 directorios principales, por un lado tenemos el directorio ```DefinitiveHierarchy``` donde se encuentran las clases base del proyecto, por otro lado el directorio ````GestorClass``` donde se encuentra la clase gestor y por último el directorio ```InquirerFiles``` donde se encuentra todo lo relacionado con Inquirer.

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

Las principales son ```album.ts```, ```artist.ts```, ```groups.ts```, ```musicGenre.ts```, ```playlist.ts``` y ```song.ts```. La clase base dentro de este directorio es ```Artist```, ya que todas las demás clases van a utilizar objectos de tipo ```Artist```


#### Colecciones

Las colecciones las encontramos en el directorio ```Collectionables``` y son las siguientes:

```
📦DefinitiveHierarchy
 ┣ 📂Collectionables
 ┃ ┣ 📜artistCollection.ts
 ┃ ┣ 📜basicstreamablecollection.ts
 ┃ ┣ 📜genreCollection.ts
 ┃ ┣ 📜pruebasoncol.ts
 ┃ ┣ 📜songCollection.ts
 ┃ ┗ 📜streamable.ts
 ┣ 📂PrincipalClases
 ┗ 📂SortFunctions
```

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

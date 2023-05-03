# Mejora tu página de biografía con Bootstrap

## Instrucciones

### Introducción
En esta evaluación calificada, revisará su página biográfica para usar Bootstrap.

### Meta
Usa Bootstrap para construir tu página biográfica.

### Objetivos
- Agregue una cuadrícula de Bootstrap a la página.
- Configure la cuadrícula para que el contenido se distribuya correctamente tanto en dispositivos móviles como en computadoras de escritorio.
- Configura tu foto para que responda.
- Cambie el enlace del metaperfil para usar un estilo de botón de Bootstrap.

### Instrucciones para el alumno
1. Abra index.html

2. agregue un elemento div al elemento del cuerpo.

```
<body>
    <div>
    </div>
</body>
```

3. aplique la clase CSS del contenedor Bootstrap al div.

```
<body>
    <div class="container">
    </div>
</body>
```

4. agregue un elemento div al elemento contenedor.
   
```
<div class="container">
        <div>
        </div>
    </div>
```

5. aplique la clase CSS de la fila Bootstrap al div.

```
<div class="container">
        <div class="row">
        </div>
    </div>
```

6. agregue dos elementos div al elemento de fila.
```
<div class="container">
        <div class="row">
            <div>
            </div>
            <div>
            </div>
        </div>
    </div>
```

7. en el primer elemento div, aplique el atributo id con el valor bio.

```
   <div class="container">
        <div class="row">
            <div id="bio">
            </div>
            <div>
            </div>
        </div>
    </div>
```

8. aplique el atributo id en el segundo elemento div con el valor más.

```
<div class="container">
        <div class="row">
            <div id="bio">
            </div>
            <div id="more">
            </div>
        </div>
    </div>
```
9. aplique las clases de CSS correctas para que cada div tenga 12 columnas de ancho en dispositivos móviles y 6 columnas de ancho en escritorio.

```
<div class="container">
        <div class="row">
            <div id="bio" class="col-12 col-lg-6">
            </div>
            <div id="more" class="col-12 col-lg-6">
            </div>
        </div>
    </div>
```
10. aplique la clase CSS del centro de texto en el elemento bio div.

```
 <div class="container">
        <div class="row">
            <div id="bio" class="col-12 col-lg-6 text-center">
            </div>
            <div id="more" class="col-12 col-lg-6">
            </div>
        </div>
    </div>
```

11. agregue un encabezado h1 que contenga su nombre como texto dentro del elemento bio div.

```
<div class="container">
        <div class="row">
            <div id="bio" class="col-12 col-lg-6 text-center">
                <h1>Jane</h1>
            </div>
            <div id="more" class="col-12 col-lg-6">
            </div>
        </div>
    </div>
```
12. agregue un elemento img para photo.jpg debajo del elemento h1.

```
<div class="container">
        <div class="row">
            <div id="bio" class="col-12 col-lg-6 text-center">
                <h1>Jane</h1>
                <img src="photo.jpg">
            </div>
            <div id="more" class="col-12 col-lg-6">
            </div>
        </div>
    </div>
```

13. aplique la clase CSS img-fluid al elemento img.

```
 <div class="container">
        <div class="row">
            <div id="bio" class="col-12 col-lg-6 text-center">
                <h1>Jane</h1>
                <img src="photo.jpg" class="img-fluid">
            </div>
            <div id="more" class="col-12 col-lg-6">
            </div>
        </div>
    </div>
```

14. agregue un encabezado h2 que contenga el texto Artistas musicales favoritos dentro del elemento más div.

```
<div class="container">
        <div class="row">
            <div id="bio" class="col-12 col-lg-6 text-center">
                <h1>Jane</h1>
                <img src="photo.jpg" class="img-fluid">
            </div>
            <div id="more" class="col-12 col-lg-6">
                <h2>Favorite Music Artists</h2>
            </div>
        </div>
    </div>
```

15. Agrega una lista desordenada de tus artistas musicales favoritos debajo del encabezado h2.

```
<div class="container">
        <div class="row">
            <div id="bio" class="col-12 col-lg-6 text-center">
                <h1>Jane</h1>
                <img src="photo.jpg" class="img-fluid">
            </div>
            <div id="more" class="col-12 col-lg-6">
                <h2>Favorite Music Artists</h2>
                <ul>
                    <li>Metallica</li>
                    <li>Bob Marley</li>
                    <li>Madonna</li>
                    <li>The Beatles</li>
                    <li>Pink Floyd</li>
                </ul>
            </div>
        </div>
    </div>
```
16. agregue otro encabezado h2 que contenga el texto Películas favoritas debajo de la lista de artistas musicales favoritos.

```
 <div class="container">
        <div class="row">
            <div id="bio" class="col-12 col-lg-6 text-center">
                <h1>Jane</h1>
                <img src="photo.jpg" class="img-fluid">
            </div>
            <div id="more" class="col-12 col-lg-6">
                <h2>Favorite Music Artists</h2>
                <ul>
                    <li>Metallica</li>
                    <li>Bob Marley</li>
                    <li>Madonna</li>
                    <li>The Beatles</li>
                    <li>Pink Floyd</li>
                </ul>
                <h2>Favorite Films</h2>
            </div>
        </div>
    </div>
```

17. agregue una lista ordenada de sus 5 películas principales después del encabezado Películas favoritas.

```
 <div class="container">
        <div class="row">
            <div id="bio" class="col-12 col-lg-6 text-center">
                <h1>Jane</h1>
                <img src="photo.jpg" class="img-fluid">
            </div>
            <div id="more" class="col-12 col-lg-6">
                <h2>Favorite Music Artists</h2>
                <ul>
                    <li>Metallica</li>
                    <li>Bob Marley</li>
                    <li>Madonna</li>
                    <li>The Beatles</li>
                    <li>Pink Floyd</li>
                </ul>
                <h2>Favorite Films</h2>
                <ol>
                    <li>Pulp Fiction</li>
                    <li>The Godfather</li>
                    <li>The Lord of the Rings</li>
                    <li>Iron Man</li>
                    <li>Inception</li>
                </ol>
            </div>
        </div>
    </div>
```

18. agregue una etiqueta de anclaje después de la lista ordenada.

```
 <div class="container">
        <div class="row">
            <div id="bio" class="col-12 col-lg-6 text-center">
                <h1>Jane</h1>
                <img src="photo.jpg" class="img-fluid">
            </div>
            <div id="more" class="col-12 col-lg-6">
                <h2>Favorite Music Artists</h2>
                <ul>
                    <li>Metallica</li>
                    <li>Bob Marley</li>
                    <li>Madonna</li>
                    <li>The Beatles</li>
                    <li>Pink Floyd</li>
                </ul>
                <h2>Favorite Films</h2>
                <ol>
                    <li>Pulp Fiction</li>
                    <li>The Godfather</li>
                    <li>The Lord of the Rings</li>
                    <li>Iron Man</li>
                    <li>Inception</li>
                </ol>
                <a></a>
            </div>
        </div>
    </div>
```

19. Enlace a su perfil Meta en la etiqueta de anclaje.

```
<div class="container">
        <div class="row">
            <div id="bio" class="col-12 col-lg-6 text-center">
                <h1>Jane</h1>
                <img src="photo.jpg" class="img-fluid">
            </div>
            <div id="more" class="col-12 col-lg-6">
                <h2>Favorite Music Artists</h2>
                <ul>
                    <li>Metallica</li>
                    <li>Bob Marley</li>
                    <li>Madonna</li>
                    <li>The Beatles</li>
                    <li>Pink Floyd</li>
                </ul>
                <h2>Favorite Films</h2>
                <ol>
                    <li>Pulp Fiction</li>
                    <li>The Godfather</li>
                    <li>The Lord of the Rings</li>
                    <li>Iron Man</li>
                    <li>Inception</li>
                </ol>
                <a href="https://www.meta.com/user/12"></a>
            </div>
        </div>
    </div>
```

20. configure el texto de anclaje para mostrar Mi metaperfil.

```
<div class="container">
        <div class="row">
            <div id="bio" class="col-12 col-lg-6 text-center">
                <h1>Jane</h1>
                <img src="photo.jpg" class="img-fluid">
            </div>
            <div id="more" class="col-12 col-lg-6">
                <h2>Favorite Music Artists</h2>
                <ul>
                    <li>Metallica</li>
                    <li>Bob Marley</li>
                    <li>Madonna</li>
                    <li>The Beatles</li>
                    <li>Pink Floyd</li>
                </ul>
                <h2>Favorite Films</h2>
                <ol>
                    <li>Pulp Fiction</li>
                    <li>The Godfather</li>
                    <li>The Lord of the Rings</li>
                    <li>Iron Man</li>
                    <li>Inception</li>
                </ol>
                <a href="https://www.meta.com/user/123">My Meta Profile</a>
            </div>
        </div>
    </div>
```

21. aplique la clase CSS del componente Bootstrap del botón a la etiqueta de anclaje.

```
<div class="container">
        <div class="row">
            <div id="bio" class="col-12 col-lg-6 text-center">
                <h1>Jane</h1>
                <img src="photo.jpg" class="img-fluid">
            </div>
            <div id="more" class="col-12 col-lg-6">
                <h2>Favorite Music Artists</h2>
                <ul>
                    <li>Metallica</li>
                    <li>Bob Marley</li>
                    <li>Madonna</li>
                    <li>The Beatles</li>
                    <li>Pink Floyd</li>
                </ul>
                <h2>Favorite Films</h2>
                <ol>
                    <li>Pulp Fiction</li>
                    <li>The Godfather</li>
                    <li>The Lord of the Rings</li>
                    <li>Iron Man</li>
                    <li>Inception</li>
                </ol>
                <a href="https://www.meta.com/user/123" class="btn">My Meta Profile</a>
            </div>
        </div>
    </div>
```

22. aplique el modificador principal al componente del botón.

```
<div class="container">
        <div class="row">
            <div id="bio" class="col-12 col-lg-6 text-center">
                <h1>Jane</h1>
                <img src="photo.jpg" class="img-fluid">
            </div>
            <div id="more" class="col-12 col-lg-6">
                <h2>Favorite Music Artists</h2>
                <ul>
                    <li>Metallica</li>
                    <li>Bob Marley</li>
                    <li>Madonna</li>
                    <li>The Beatles</li>
                    <li>Pink Floyd</li>
                </ul>
                <h2>Favorite Films</h2>
                <ol>
                    <li>Pulp Fiction</li>
                    <li>The Godfather</li>
                    <li>The Lord of the Rings</li>
                    <li>Iron Man</li>
                    <li>Inception</li>
                </ol>
                <a href="https://www.meta.com/user/123" class="btn btn-primary">My Meta Profile</a>
            </div>
        </div>
    </div>
```
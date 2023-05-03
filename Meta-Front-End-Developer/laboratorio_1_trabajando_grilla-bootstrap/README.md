# Trabajando con la cuadrícula de Bootstrap

Instrucciones
Introducción
En este ejercicio, practicará la creación de una página web utilizando Bootstrap Grid.

Meta
Crea un menú de comida de dos columnas para Little Lemon.

Objetivos
Configure el contenedor Bootstrap.

Muestre el logotipo de Little Lemon en la parte superior central de la página web usando Bootstrap.

Muestre el menú de comida en dos columnas usando Bootstrap Grid.

Instrucciones
Paso 1: Abra index.html

Paso 2: agregue un elemento div dentro del elemento del cuerpo. Este div será el contenedor de Bootstrap.

Paso 3: agregue el atributo de clase a este elemento con el contenedor de valor.

```
<body>
    <div class="container">
    </div>
</body>
```
Paso 4: agregue tres elementos div al elemento contenedor de Bootstrap. Cada uno de estos elementos div será una fila Bootstrap. Agregue el atributo de clase a este elemento con la fila de valor.

```
<body>
    <div class="container">
        <div class="row">
        </div>
        <div class="row">
        </div>
        <div class="row">
        </div>
    </div>
</body>
```
Paso 5: La primera fila contendrá el logotipo de Little Lemon. Agregue un elemento div a la primera fila.

Paso 6: agregue el atributo de clase a este elemento con el valor col-12. Esto ocupará 12 espacios de columna.
```
<body>
    <div class="container">
        <div class="row">
            <div class="col-12">
            </div>
        </div>
        <div class="row">
        </div>
        <div class="row">
        </div>
    </div>
</body>
```

Paso 7: agregue otro elemento div al elemento col-12.

Paso 8: agregue el atributo de clase a este elemento con el valor text-center. Esto le permitirá centrar el logotipo.

```
<body>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                </div>
            </div>
        </div>
        <div class="row">
        </div>
        <div class="row">
        </div>
    </div>
</body>
```

Paso 9: agregue un elemento de imagen en el elemento del centro de texto con la clase img-fluid aplicada.
```
<body>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                    <img src="logo.png" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="row">
        </div>
        <div class="row">
        </div>
    </div>
</body>
```

Paso 10: en la segunda fila, agregue otro elemento div con la clase col-12.

```
<body>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                    <img src="logo.png" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
            </div>
        </div>
        <div class="row">
        </div>
    </div>
</body>
```

Paso 11: agregue un elemento div a la columna y aplique la clase text-center.
```
<body>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                    <img src="logo.png" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                </div>
            </div>
        </div>
        <div class="row">
        </div>
    </div>
</body>
```

Paso 12: Dentro del elemento, agrega un elemento h1 con el texto Nuestro Menú.

```
<body>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                    <img src="logo.png" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                    <h1>Our Menu</h1>
                </div>
            </div>
        </div>
        <div class="row">
        </div>
    </div>
</body>
```

Paso 10: agregue dos elementos div en la fila final.

Paso 11: agregue un atributo de clase a cada elemento con el valor col-12 col-lg-6.
```
<body>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                    <img src="logo.png" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                    <h1>Our Menu</h1>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-lg-6">
            </div>
            <div class="col-12 col-lg-6">
            </div>
        </div>
    </div>
</body>
```

Paso 12: agregue los siguientes elementos en el primer elemento col-12 col-lg-6:

Un elemento h2 que contiene el texto Falafel.

Un elemento de párrafo que contiene el texto Garbanzos, hierbas, especias.

Un elemento h2 que contiene el texto Calamares fritos.

Un elemento de párrafo que contiene el texto Calamar, suero de leche.

Paso 13: agregue los siguientes elementos en el segundo elemento col-12 col-lg-6:

Un elemento h2 que contiene el texto Ensalada de pasta.

Un elemento de párrafo que contiene el texto Lechuga, verduras, mozzarella.

Un elemento h2 que contiene el texto Ensalada griega.

Un elemento de párrafo que contiene el texto Pepinos, cebolla, queso feta.

```
<body>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                    <img src="logo.png" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                    <h1>Our Menu</h1>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-lg-6">
                <h2>Falafel</h2>
                <p>Chickpea, herbs, spices.</p>
                <h2>Fried Calamari</h2>
                <p>Squid, buttermilk.</p>
            </div>
            <div class="col-12 col-lg-6">
                <h2>Pasta Salad</h2>
                <p>Lettuce, vegetables, mozzarella.</p>
                <h2>Greek Salad</h2>
                <p>Cucumbers, onion, feta cheese.</p>
            </div>
        </div>
    </div>
</body>
```
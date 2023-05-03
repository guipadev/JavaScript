# Trabajando con componentes de Bootstrap

## Instrucciones
### Introducción

En este ejercicio, practicará cómo agregar componentes de Bootstrap a una página web.

### Meta
- Actualice el sitio web de Little Lemon para usar componentes de Bootstrap.

### Objetivos
- Agregue un componente Badge a la página para notificar a los clientes sobre el nuevo plato de falafel.

- Agregue un componente de Alerta a la página para notificar a los clientes que el restaurante estará cerrado el día de Año Nuevo.

- Agregue un componente Botón a la página con el texto Pedido en línea.

### Instrucciones
1. Abra index.html
2. agregue otro elemento div debajo del elemento div del centro de texto de Nuestro menú.
3. agregue un atributo de clase al elemento con el valor alert alert-info.
4. Agregue un atributo de rol al elemento con la alerta de valor.
5. agregue el mensaje Nuestro restaurante estará cerrado el día de Año Nuevo, dentro del elemento div.

```
<div class="row">
    <div class="col-12">
        <div class="text-center">
            <h1>Our Menu</h1>
        </div>
        <div class="alert alert-info" role="alert">
            Our resturaunt will be closed on New Year's Day
        </div>
    </div>
</div>
```
6. Agrega un elemento span dentro del elemento Falafel h2, antes de la etiqueta de cierre h2.
7. Agregue un atributo de clase al elemento span, con la insignia de valor bg-secundario.

```
<h2>Falafel <span class="badge bg-secondary">New</span></h2>
```
8. agregue otro elemento div después del último elemento de la fila.
9. agregue un atributo de clase con la fila de valor al elemento div.
10. agregue un elemento div dentro del elemento div de fila.
11. agregue un atributo de clase con el valor col-12 al elemento div.
12. Agregue otro elemento div dentro del elemento div col-12.
13. agregue un atributo de clase con el valor text-center al elemento div.
14. agregue un elemento de botón dentro del elemento div del centro de texto.
15. Agregue un atributo de tipo con el botón de valor .
16. Agregue un atributo de clase con el valor btn btn-primar y.
17. agregue el texto Pedido en línea dentro del elemento del botón.

```
<div class="row">
    <div class="col-12">
        <div class="text-center">
            <button type="button" class="btn btn-primary">Order Online</button>
        </div>
    </div>
</div>
```
18. Guarde el archivo.
19. Haga clic en 'Transmitir en vivo', que se encuentra en la parte inferior derecha de su editor.
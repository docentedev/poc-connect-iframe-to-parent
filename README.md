# Convenciones

- siempre utilizar `const` a menos que se deba utilizar `let`
- nunca utilizar `var`
- divide y venceras
    - separa logica en funciones
- console.log no deben quedar en el codigo final
- console.log son solo para el desarrollo
- compartan conocimiento
- intenten tener la camana encendida
- si no pueden resolver un problema en 5 minutos, pasen al siguiente
    - anotar el problema con un `// TODO: Mensaje`
- Documentacion siempre abierta
    - por ejemplo la de Mozilla [link](https://developer.mozilla.org/es/)
    - Documentacion de Bootstrap
- Preferir Bootstrap 5
- En este bootcamp, se utilizaran solo servicios REST
    - Los servicios REST, son los que retornan JSON
    - JSON no es mas que un objeto de JavaScript
    ```json
    {
        "key": "valor"
    }
    ```
- Si tiene alguna duda, anotenla
- Si no tiene buena memoria, escriba esto mismo que estoy haciendo ahora
    Osea utilicen `markdown`
- Siempre separen la logica del diseño del marcado
    - Logica se refiere a JavaScript
        - JavaScript no es lo mismo que Java
        - JavaScript es el nombre comercial de Ecma Script (Actualmente en la version ES6)
    - Diseño nos referimos a CSS (Actualmente en la version CSS3)
        - No utlizar nunca estilos en linea `<div style="color:red"></div>`
        - Solo utilizar estilos en linea si es estrictamente requerido para su codigo (como iterar datos en js y agregar dinamicamente algun estilo)
    - Cuando hablamos de Marcado nos referimos al HTML
- Orden
    - Simpre importar primero antes de ocupar
    - Siempre definir primero las funciones antes de utilizarlas
    - Siempre codigo formateado
    - No utilizar comillas dobles en JS
    - No utilizar punto y coma
    - Simepre escribir variables (const, let) en camelCase
- Case de texto
    - kebab-case: css, id, class
    - camelCase: js
    - PascalCase: Clases JS o funciones constructoras
    - snake_case: para nada...
    - UPPER_CASE: para nada...
- Preferir siempre ES6
    - preferir siempre Arrow Function: `() => {}`
    - preferir siempre await
```js
const nf = async() => {}

// esta forma no es la mejor idea
nf().then(() => {})
.catch(() => {})

// preferir esta forma
try {
   await nf()
} catch (() => {
})

```

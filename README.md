# Convenciones

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

- Los errores son excepcionales, por lo tanto no deberian utilizarse al boleo
    - para la logica de su codigo preferir condicionales
    - los errores utilicenlo cuando hagan llamados a APIs sobre todo
- Bootstrap
    - Un `container` deberia tener solo `row`
    - Un `row` deberia tener solo `col-`
    - Preferir Bootstrap de manera local (osea lo descargan y lo integran)
    - Siempre tengan un proyecto con `Bootstrap` agregado y la estructura basica de carpetas por si tienen que iniciar de 0 algun proyecto
- Utilicen para todos sus proyectos NPM y GIT, siempre asocien un proyecto a un repositorio (Github)
- Si su proyecto es `HTML` activen Github Pages
- Participen en clases, no lo hagan solo por un premio, recuerden que el premio es salir bien preparado para que tengan una `Pega Pulenta` con un `Sueldo Pulento`
- Apliquen siempre los principios mas bacanosos del mundo mundial
    - DRY: No se repitan, no repitan su codigo!!!
    - KISS: Mantenganlo Simple Estudiantes (anque el original es Idiotas)
    - es increible que todo junto se escriba separado y separado todo junto
- de ahora en adelante los grupos sera de 2 personas, de tres no funciona pues no todos estan participando... Veo muchas gente muy callada. Asi no aprenderan
- Practicar, Practicar, Practicar
- Nos vemos en Iquique para celebrar
- recuerden que en el bloque `try`, los errores se manejan en `catch` y siempre se ejecutara al final un bloque `finaly`
- Olvidense de `jQuery` `Ese compa ya esta muerto, no mas no le han avisado!!!`
- Destruyan de su mente la funcionalidad `$.ajax`, en cambio abracen con fuerza `fetch`
- en clases las propiedades del objeto deben ser privadas (aun cuando igual se pueden utilizar, la convencion indica que respetamos la regla)
    - las propiedades para seguir la convencion de privadas, utilizan como prefijo un guion bajo
    - para acceder a ellas utilizaremos getter y setter
```js
// Alternativa 1
class Persona {
    constructor() {
        this._nombre = ''
    }
    
    get nombre () {
        return this._nombre
    }
    
    set nombre (nombre) {
        this._nombre = nombre
    }
}

// Alternativa 2
class Persona {
    constructor() {
        this._nombre = ''
    }
    
    getNombre () {
        return this._nombre
    }
    
    setNombre (nombre) {
        this._nombre = nombre
    }
}
```

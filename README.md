🚀 **Funcionalidades**

1. Botón de la página de inicio que redirige a la ventana de edición
2. Seleccionar fondo prediseñado o subir una imagen propia
3. Elegir temática que personalice la tipografía de la carátula (y el fondo si se ha elegido prediseñado)
4. Escribir un título
5. Opcional: escribir un subtítulo
6. Seleccionar la plataforma del videojuego
7. Escribir la edad recomendada de los jugadores
8. Seleccionar el logo de la compañía de videojuegos
9. Botón para guardar la carátula
10. Botones para compartirla en redes sociales 

🔧 **Estructura**

project-root/
│
├── index.html                    ← Página principal (home)
├── editor.html                   ← Editor de carátulas (formulario + previsualización + guardar + compartir)
│
├── src/
│   ├── scss/
│   │   ├── main.css              ← SCSS principal (compilado)
│   │   ├── core/
│   │   │   ├── reset.scss
│   │   │   └── variables.scss
│   │   └── functions/
│   │       ├── home.scss
│   │       ├── editor.scss
│   │       ├── predesigned-or-submit-image.scss
│   │       ├── select-theme.scss
│   │       ├── input-title.scss 
│   │       ├── input-subtitle.scss
│   │       ├── select-platform.scss
│   │       ├── input-age.scss
│   │       ├── select-company-logo.scss
│   │       ├── save-button.scss
│   │       └── share-section.scss
│   │
│   ├── js/
│   │   ├── main.js               ← JS principal: aquí importaremos los partials de js y pondremos todos los eventos
│   │   └── functions/
│   │       ├── home-button.js
│   │       ├── predesigned-or-submit-image.js
│   │       ├── select-theme.js
│   │       ├── input-title.js 
│   │       ├── input-subtitle.js
│   │       ├── select-platform.js
│   │       ├── input-age.js
│   │       ├── select-company-logo.js
│   │       ├── save-button.js
│   │       └── share-section.js
│
├── vite.config.js
├── package.json
├── package-lock.json
├── .gitignore
├── .eslintrc.json
├── LICENSE
└── README.md


🧩 **Cómo se carga todo**

**1) En main.scss:**

    @import './core/reset.scss';
    @import './core/variables.scss';

    @import './functions/home.scss';
    @import './functions/editor.scss';
    @import './functions/input-title.scss';
    @import './functions/select-theme.scss';
    @import './functions/select-platform.scss';
    @import './functions/input-age.scss';
    @import './functions/save-button.scss';
    @import './functions/share-section.scss';


    
    
**2) En main.js:** 

    import '../scss/main.css';

    import './functions/home-button.js';
    import './functions/input-title.js';
    import './functions/select-theme.js';
    import './functions/select-platform.js';
    import './functions/input-age.js';
    import './functions/save-button.js';
    import './functions/share-section.js';




 
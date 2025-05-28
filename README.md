🔧 **Estructura**

project-root/
│
├── index.html
├── vite.config.js
├── package.json
├── package-lock.json
├── .gitignore
├── .eslintrc.json
├── LICENSE
├── README.md
│
└── 📁src/
    ├── 📁partials/
    │   ├── home.html
    │   └── editor.html
    │
    ├── 📁scss/
    │   ├── main.scss
    │   ├── 📁core/
    │   │   ├── reset.scss
    │   │   └── variables.scss
    │   └── 📁functions/
    │       ├── home.scss
    │       ├── editor.scss
    │       ├── input-title.scss
    │       ├── select-theme.scss
    │       ├── select-platform.scss
    │       ├── input-age.scss
    │       ├── save-button.scss
    │       └── share-section.scss
    │
    ├── 📁js/
    │   ├── main.js
    │   └── 📁functions/
    │       ├── home-button.js
    │       ├── input-title.js
    │       ├── select-theme.js
    │       ├── select-platform.js
    │       ├── input-age.js
    │       ├── save-button.js
    │       └── share-section.js



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




 
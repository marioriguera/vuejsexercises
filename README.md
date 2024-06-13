# Vue Js Exercises

<p align="justify">
    This project will be dedicated to studying, reviewing and storing knowledge about the "Vue js"  frontend framework. Vue.js is a progressive JavaScript framework used to build interactive and   efficient user interfaces.
</p>

<p align="justify">
    Designed by Evan You, its main goal is to facilitate the development of dynamic web applications    using a declarative and reactive approach. Vue.js stands out for its simplicity and flexibility,   allowing developers to easily integrate its functionality into existing projects or build entire  applications from scratch.
</p>

<p align="justify">
    Its strengths include a gentle learning curve, intuitive syntax, and a robust ecosystem that    includes official tools like Vue Router for routing and Vuex for state management. Its     component-based architecture promotes code reuse and modularity, resulting in more maintainable     and scalable applications. Additionally, its ability to handle data reactivity efficiently  significantly improves user experience by providing fast and responsive interfaces. Vue.js is a  popular choice for both small projects and large-scale web applications, thanks to its balance   between simplicity and power.
</p>

See more documentation on [vue js web site](https://cli.vuejs.org/).

## Project setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Lints and fixes files

```bash
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Bootstrap

### What is Bootstrap?

<p align="justify">
    Bootstrap is an open source framework for developing web user interfaces, created by Mark Otto and Jacob Thornton at Twitter. First released in 2011, Bootstrap has become one of the most popular CSS frameworks in the world.
</p>

### What is Bootstrap for?

<p align="justify">
    Bootstrap is used to design and develop responsive and mobile websites and web applications. It offers a collection of predefined tools and components, such as grid systems, typography, forms, buttons, navigation, and other user interface elements. This allows developers to create attractive and consistent interfaces quickly and efficiently.
</p>

### Bootstrap Strengths

- Responsiveness: Bootstrap makes it easy to create websites and apps that automatically adapt to different screen sizes and devices, thanks to its flexible grid system and responsive classes.

- Consistency: Provides a consistent and professional design across browsers and devices, improving user experience.

- Reusable Components: Includes a wide range of reusable UI components, such as navigation menus, cards, modals, alerts, and more, speeding development and ensuring a consistent look.

- Customization: Although it comes with default styles and components, Bootstrap is highly customizable. Developers can modify Sass variables to adapt the framework to their specific needs.

- Community and Support: It has a large community of users and developers, which means that there is plenty of documentation, tutorials, examples and support available online.

- Compatibility: It is compatible with all modern browsers and provides solutions for some compatibility issues with older browsers.

<p align="justify">
    Bootstrap has evolved over the years and remains an essential tool for many web developers, allowing them to create professionally designed sites and applications quickly and efficiently.
</p>

### How install bootstrap on Vue js

Execute on bash:

```bash
npm install --save bootstrap
```

```bash
npm install --save @popperjs/core
```

Add next code on **src/main**:

```code
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
```

An example:

```code
<button 
  class="btn btn-primary" 
  data-bs-target="#collapseTarget" 
  data-bs-toggle="collapse">
  Bootstrap collapse
</button>
<div class="collapse py-2" id="collapseTarget">
  This is the toggle-able content!
</div>
```

---

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=vue,css,html,nodejs,js,bootstrap" />
  </a>
</p>

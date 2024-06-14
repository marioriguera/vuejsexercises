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

## Routing

How install Vue Router from the npm registry:

```bash
npm install vue-router@4
```

See more on [Routing for Vue js](https://router.vuejs.org/).

## Basic structure of the SCRIPT section

<p align="justify">
  Within the <b>script</b> section, we typically export a JavaScript object that contains various properties and methods that describe the component. Here are the main elements that can be included:
</p>

```code
<script>
  export default {
      name: "ComponentName", // Component name
      components: {}, // Child components that this component can use
      props: {}, // Properties that the component receives from its parent component
      data() { // Component local data
        return {};
      },
    computed: {}, // Computed properties based on data
    watch: {}, // Observers to react to changes in data
    methods: {}, // Component custom methods
    created() { }, // Lifecycle hook: created
    mounted() { }, // Lifecycle hook: mounted
    updated() { }, // Lifecycle hook: updated
    destroyed() { }, // Lifecycle hook: destroyed
    // Other lifecycle hooks (example: beforeCreate, beforeMount, etc.)
  };
</script>
```

### Detailed Explanation of Each Section

#### 1- name (String)

- Description: Name of the component. It is used for debugging purposes and in the Vue development tool to identify components.
- Usage: Required if you are using Vue Devtools or when debugging. It does not directly affect the operation of the component, but it is good practice to set it.

#### 2- components (Object)

- Description: Object that contains child components that this component can use.
- Usage: Allows this component to use other locally defined or imported components for rendering.

#### 3- props (Object)

- Description: Defines the properties that the component can receive from its parent component.
- Use: Allows communication between components by passing data from parent to child. Props are immutable: the child component should not modify the props directly.

#### 4- data (Function)

- Description: Function that returns an object containing the component's local data.
- Usage: The data defined here is reactive, meaning that any changes to it will automatically update the component's view.

#### 5- computed (Object)

- Description: Defines computed properties based on data.
- Use: Useful for performing calculations based on data that may depend on other reactive properties. They are cached and are only recalculated when necessary.

#### 6- watch(Object)

- Description: Observe changes in data and take actions based on those changes.
- Usage: Useful for performing asynchronous operations or making changes to data in response to specific changes in other properties.

#### 7- methods (Object)

- Description: Contains custom methods of the component.
- Usage: Defines functions that can be called in response to user events, such as button clicks or other user interface events.

#### 8- Life Cycle Hooks

- Description: Special methods that are executed at specific times during the component's life cycle.

- Use: Useful for performing actions such as data initialization (created), DOM manipulation (mounted), cleaning (destroyed), among others.

- Common examples include:

  - created() { }: Called when the component is created, after the data properties have been initialized.
  - mounted() { }: Called when the component has been mounted to the DOM, making it suitable for DOM manipulations and API calls.
  - updated() { }: Called after the component is updated, which can be useful for performing additional actions after changes to data or props.

### Example

```code
<script>
  export default {
    name: "FooterComponent",
    props: {
      year: {
        type: Number,
        default: () => new Date().getFullYear()
      }
    },
    data() {
      return {
        message: "Este es el pie de página"
      };
    },
    computed: {
      formattedMessage() {
        return this.message.toUpperCase();
      }
    },
    methods: {
      handleClick() {
        alert("¡Haz clic en el pie de página!");
      }
    },
    created() {
      console.log("Componente FooterComponent creado.");
    },
    mounted() {
      console.log("Componente FooterComponent montado.");
    },
    destroyed() {
      console.log("Componente FooterComponent destruido.");
    }
  };
</script>
```

### Conclusion

<p align="justify">
  Each section within the <b>SCRIPT<b> section of a Vue component plays a crucial role in the   definition and operation of the component. These sections allow you to manage local data, props,  custom methods, computed properties, and react to changes in the component's lifecycle.  Understanding how and when to use each of these sections is critical to developing effective and   robust Vue.js applications.
</p>

---

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=vue,css,html,nodejs,js,bootstrap" />
  </a>
</p>

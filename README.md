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

```js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
```

An example:

```html
<button
  class="btn btn-primary"
  data-bs-target="#collapseTarget"
  data-bs-toggle="collapse"
>
  Bootstrap collapse
</button>
<div class="collapse py-2" id="collapseTarget">
  This is the toggle-able content!
</div>
```

## TypeScrypt

<p align="justify">
  If it has happened to you like me in this example that you did not install vue with typepe  script, here I tell you how to do it, but I warn you that if you advance in the project, without   installing it and later you want to use it, it can be laborious to do so.
</p>

```bash
  vue add typescript
```

### How create Vue js app with routing and typescript

## **Step 1:** Create the project

```bash
  vue create <project-name>
```

## **Step 2:** Manually select features

```bash
 ?Please pick a preset:
  Default ([Vue 3] babel, eslint)
  Default ([Vue 2] babel, eslint)
> Manually select features
```

## **Step 3:** Select features

```bash
  ? Please pick a preset: Manually select features
  ? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i>  to invert selection, and <enter> to proceed)
 (*) Babel
 (*) TypeScript
 ( ) Progressive Web App (PWA) Support
>(*) Router
 ( ) Vuex
 ( ) CSS Pre-processors
 (*) Linter / Formatter
 ( ) Unit Testing
 ( ) E2E Testing
```

### Explanation of the configurations

- 1. Babel
     Babel is a JavaScript transcompiler. It is used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can run in older browsers. This ensures that your code works in a wide variety of environments.

- 2. TypeScript
     TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It offers benefits such as static typing and interfaces, which can help reduce errors and improve code maintainability.

- 3. Progressive Web App (PWA) Support
     PWA support adds progressive web app capabilities to your project, such as app installation, offline operation, and push notifications. This is achieved by setting up a service worker and other PWA resources.

- 4. Router
     Router is the Vue.js routing system that allows navigation between different views or components in your single page application (SPA). Provides a declarative way to link URLs to components.

- 5. Vuex
     Vuex is a state management library for Vue.js applications. Centralizes application state and provides a predictable pattern for managing states. This is useful in large applications where many components need to share and synchronize state.

- 6. CSS Pre-processors
     CSS pre-processors allow you to write more advanced CSS using languages ​​such as Sass, Less or Stylus. These languages ​​offer additional features such as variables, nesting, mixins, and more, that are not available in standard CSS.

- 7. Linter/Formatter
     Linter/Formatter configures tools to ensure code quality, such as ESLint and Prettier. These tools help find and fix style issues and errors in your code automatically or through manual review.

- 8. Unit Testing
     Unit Testing sets up the environment and tools necessary to write and run unit tests. Unit tests allow you to verify that each part of your application works correctly in isolation.

- 9. E2E Testing
     E2E Testing (End-to-End Testing) sets up the environment to write and run end-to-end tests. These tests simulate user actions and verify that the entire application works correctly from start to finish.

<p align="justify">
  Setting up a Vue.js project properly from the beginning allows you to establish a solid   foundation and ensure that your code is maintainable, scalable, and of high quality. Depending  on your needs and the scope of your project, you can select the features that best suit your   specific case.
</p>

## **Step 4:** Choose Vue.js

```bash
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS, Router, Linter
? Choose a version of Vue.js that you want to start the project with (Use arrow keys)
> 3.x
  2.x
```

## **Step 5:** Decide if use class-style

```bash
? Use class-style component syntax? (y/N)
```

<p align="justify">
  The "Use class-style component syntax" option refers to the class-style component syntax that   can be used with TypeScript in Vue.js. Here I explain more about this option and when you   might want to use it:
</p>

### What is class-style component syntax?

<p align="justify">
  In Vue.js, components are traditionally defined using an object syntax. However, with   TypeScript support, Vue also allows you to define components using syntax similar to  TypeScript classes. This can make the code look more familiar to developers who come from  object-oriented languages ​​or who have experience with frameworks like Angular.
</p>

#### Traditional Vue.js Syntax

```js
  <template>
    <div>{{ message }}</div>
  </template>

  <script>
  export default {
    data() {
      return {
        message: 'Hello, world!'
      }
    }
  }
  </script>
```

#### Class-style component syntax

```js
  <template>
    <div>{{ message }}</div>
  </template>

  <script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  @Component
  export default class MyComponent extends Vue {
    message: string = 'Hello, world!';
  }
  </script>
```

#### When to use class-style component syntax?

<p align="justify">
  Preference for OOP: If you have experience in object-oriented (OOP) languages ​​like Java or C#,  class syntax may seem more natural and familiar.
  Heavy use of TypeScript: Class syntax takes full advantage of TypeScript features such as   inheritance and decorators.
  Code Structuring: It can provide a clearer way to structure code, especially in large, complex  applications.
</p>

#### Should you use it?

<p align="justify">
  Choosing to use class syntax is a matter of preference and code style. Both approaches are  equally valid and supported by Vue.js. Here are some considerations to help you decide:
</p>

- Team consistency: If your development team is already familiar with class syntax and TypeScript, this may be a good option.
- Learning curve: If you are new to Vue.js or TypeScript, the traditional Vue syntax may be easier to learn and understand at first.
- Interoperability: The class syntax may be easier to integrate with other frameworks and libraries that use classes, such as Angular.

#### Summary

<p align="justify">
  The "Use class-style component syntax" option allows you to define Vue.js components using a  class syntax, which can be beneficial if you prefer an object-oriented programming style and are   using TypeScript. If you choose "and", you will be able to write components with TypeScript   classes and decorators. If you choose "n", you will use the traditional Vue.js object syntax.
</p>

## **Step 6:** Decide if use Babel

```bash
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? (Y/n)
```

### What is Babel and why use it with TypeScript in Vue.js?

<p align="justify">
  Babel is a transpilation tool that allows you to write JavaScript code using features of future   versions of the language (ECMAScript) and convert them into JavaScript code compatible with   previous versions of browsers. It is also useful for using JSX (JavaScript XML) features and  performing additional transformations on your code.
</p>

#### Using Babel together with TypeScript

<p align="justify">
  When you decide to use TypeScript with Vue.js, TypeScript takes care of static typing and other   language features. However, TypeScript alone does not transpile all the features of ECMAScript  to older versions of JavaScript. This is where Babel comes into play:
</p>

- 1. Advanced ECMAScript support: Babel allows you to use advanced ECMAScript features (such as async/await, extended classes, etc.) and ensure they are supported by older browsers.

- 2. JSX Support: If you plan to use JSX in your project (for example, in combination with libraries like React or for certain Vue.js plugins), you will need Babel to transpile JSX to standard JavaScript that browsers can understand.

- 3. Modern mode and automatic polyfills: By using Babel together with TypeScript, you can take advantage of the Vue CLI's modern mode and automatic polyfills that help ensure compatibility with older versions of browsers.

#### Should you use Babel together with TypeScript?

The decision to use Babel in conjunction with TypeScript is generally recommended, especially if:

- 1. You want to make sure your TypeScript code is compatible with older browsers.
- 2. You plan to use advanced ECMAScript features that are not fully supported by all browsers.
- 3. You need JSX support in your project.
- 4. You want to take advantage of the automatic optimizations and polyfills provided by Vue CLI in modern mode.

#### Conclusion

<p align="justify">
  Answering "Y" (or simply pressing Enter to accept the default settings) means you agree to use  Babel along with TypeScript in your Vue.js project. This will allow you to take full advantage   of the advanced features of ECMAScript and JSX, as well as ensure compatibility with a wide   range of browsers.
</p>

## **Step 7:** Decide if use history mode for router

```bash
? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n)
```

### History Mode vs. hash mode

Vue.js router can work in two main modes:

#### 1. Hash mode

- URLs contain a hash symbol (#), for example, http://example.com/#/about.
- This is the default mode and is easier to configure as it requires no additional configuration on the server.
- The hash is not sent to the server, so routes are managed entirely on the client side.

#### 2. History mode (history mode)

- The URLs are clean and do not contain the hash symbol, for example http://example.com/about.
- Uses the HTML5 History API to manage routes.
- Requires additional configuration on the server to ensure that all routes point to the index.html file in a single page application (SPA).

#### Why use history mode?

History mode provides cleaner, SEO-friendly URLs. Here are some reasons to consider it:

- Better SEO: Search engines prefer clean URLs without hash symbols. This can improve the ranking and visibility of your website.
- Better user experience: Cleaner URLs are easier to read and share.
- More natural navigation: Allows more fluid and natural navigation, similar to traditional web applications.

#### Server configuration

<p align="justify">
  To use history mode, you need to configure your server so that all routes   point to your index.html file. Here are some configuration examples for   different servers:
</p>

- Apache

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

- Nginx

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

- Node.js (Express)

```js
app.use(require("connect-history-api-fallback")());
```

#### Conclusion

<p align="justify">
  Answering "Y" to this question implies that you want to use history mode for  the Vue.js router. This is recommended if:
</p>

- You have control over your server configuration and can ensure that all routes point to index.html.
- You want cleaner, SEO-friendly URLs.
- You want to provide a better user experience with more natural navigation.

<p align="justify">
  If you choose this option, be sure to properly configure your server to   handle history mode and avoid 404 errors in your routes.
</p>

## **Step 8:** Select code formatter configuration

```bash
? Pick a linter / formatter config:
  ESLint with error prevention only
  ESLint + Airbnb config
  ESLint + Standard config
> ESLint + Prettier
```

### ESLint

<p align="justify">
  ESLint is a tool for identifying and reporting patterns in JavaScript code,   with the goal of making the code more consistent and avoiding errors. It is   highly configurable and can be adapted to different code styles and   conventions.
</p>

### Prettier

<p align="justify">
  Prettier is a code formatter that focuses on maintaining a consistent code  style, ignoring configurable aspects of the linter to avoid conflicts and  ensure that the code follows a uniform style.
</p>

### Available options

#### 1. ESLint with error prevention only

- Description: This configuration uses ESLint only to prevent code errors, without imposing a specific style.
- Ideal Use: When you're just interested in making sure there are no errors in the code, but you're not worried about maintaining a consistent style.

#### 2. ESLint + Airbnb config

- Description: This setting uses Airbnb's code style rules, which is one of the most popular and strict standards.

- Ideal Use: If you want to follow a well-defined and community-accepted code standard, and are willing to follow the strict rules it imposes.

#### 3. ESLint + Standard config

- Description: Uses the JavaScript Standard Style rule set, which is another popular and less strict style compared to Airbnb.

- Ideal Use: If you prefer a code standard that is a little less strict than Airbnb but still maintains good practices and consistency.

#### 4. ESLint + Prettier

- Description: Combine ESLint with Prettier to use ESLint for error prevention and leave code formatting to Prettier.
- Ideal Use: If you want to ensure that your code is bug-free and formatted consistently without having to worry about conflicting linter settings.

### Recommended Selection

<p align="justify">
  If you're looking for a setup that helps you keep your code clean and   well-formatted without conflicts between the linter and the formatter, ESLint   + Prettier is a great choice. Prettier will take care of automatic code   formatting while ESLint will focus on error prevention and detecting  problematic patterns.
</p>

### How to Continue?

<p align="justify">
  Select the ESLint + Prettier option to have the combined linter and formatter   configuration. This configuration will ensure that your code is consistent  and free of common errors, as well as being automatically formatted according  to Prettier rules.
</p>

## **Step 9:**

```bash
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to
proceed)
>(*) Lint on save
 ( ) Lint and fix on commit
```

### ESLint

ESLint is a tool for identifying and reporting patterns in JavaScript code, with the goal of making the code more consistent and avoiding errors. It is highly configurable and can be adapted to different code styles and conventions.

### Prettier

Prettier is a code formatter that focuses on maintaining a consistent code style, ignoring configurable aspects of the linter to avoid conflicts and ensure that the code follows a uniform style.

### Available options

- 1. ESLint with error prevention only

  - Description: This configuration uses ESLint only to prevent code errors, without imposing a specific style.
  - Ideal Use: When you're just interested in making sure there are no errors in the code, but you're not worried about maintaining a consistent style.

- 2. ESLint + Airbnb config

  - Description: This setting uses Airbnb's code style rules, which is one of the most popular and strict standards.
  - Ideal Use: If you want to follow a well-defined and community-accepted code standard, and are willing to follow the strict rules it imposes.

- 3. ESLint + Standard config

  - Description: Uses the JavaScript Standard Style rule set, which is another popular and less strict style compared to Airbnb.
  - Ideal Use: If you prefer a code standard that is a little less strict than Airbnb but still maintains good practices and consistency.

- 4. ESLint + Prettier
  - Description: Combine ESLint with Prettier to use ESLint for error prevention and leave code formatting to Prettier.
  - Ideal Use: If you want to ensure that your code is bug-free and formatted consistently without having to worry about conflicting linter settings.

### Recommended Selection

<p align="justify">
  If you're looking for a setup that helps you keep your code clean and   well-formatted without conflicts between the linter and the formatter, ESLint   + Prettier is a great choice. Prettier will take care of automatic code   formatting while ESLint will focus on error prevention and detecting  problematic patterns.
</p>

### How to Continue?

<p align="justify">
  Select the ESLint + Prettier option to have the combined linter and formatter configuration.  This configuration will ensure that your code is consistent and free of common errors, as well   as being automatically formatted according to Prettier rules.
</p>

## **Step 9:** Where put the configuration will placing

```bash
? Where do you prefer placing config for Babel, ESLint, etc.?
> In dedicated config files
  In package.json
```

### Option 1: In dedicated configuration files

- Description: Separate files are created for each configuration tool, such as .babelrc for Babel, .eslintrc for ESLint, etc.

- Advantages:
  - Organization: Keeps each configuration in its own file, making it easier to read and maintain.
  - Compatibility: Some tools prefer or require dedicated configuration files.
  - Portability: Facilitates the transfer of configurations between projects, since each configuration file is independent.
- Ideal Use: For large projects or development teams where you prefer to have a clear and separate organization of configurations.

### Option 2: In package.json

- Description: Configurations are added directly to the package.json file.

- Advantages:
  - Simplicity: Keeps all settings in a single file, which can be easier to manage for small projects.
  - File reduction: Fewer files in the project root directory, which can result in a cleaner directory structure.
- Ideal Use: For smaller projects or developers who prefer to have all configurations centralized in a single file.

### Recommended Selection

<p align="justify">
  The choice between using dedicated configuration files or including the configurations in   package.json depends on your preferences and the size of the project. Below are some  considerations:
</p>

- Large Projects or Development Teams:

  - Recommendation: Use dedicated configuration files.
  - Reason: Improves organization and facilitates collaboration between multiple developers.

- Small or Individual Projects:

  - Recommendation: Include configurations in package.json.
  - Reason: Simplifies configuration management by keeping them in one place.

## **Step 10:** If decide save this configuration for future projects

```bash
? Save this as a preset for future projects? (y/N)
```

<p align="justify">
  Saving settings as a preset can be very useful if you plan to create more projects with similar   settings in the future. Here is an explanation of the advantages and considerations for making  this decision:
</p>

### Why save a preset?

#### Advantages:

- Time savings: Avoid having to manually select all the options every time you start a new project.
- Consistency: Ensures that all your future projects follow the same set of settings, which is especially useful if you are working as a team.
- Ease: Makes it easier to start new projects, allowing you to focus on development rather than initial setup.

#### Disadvantages:

- Rigidity: If your configuration needs change, the saved preset may not be completely suitable for future projects.
- Disk space: Although minimal, presets take up some disk space.

#### When not to save a preset?

- Single Projects: If this is a single project and you do not plan to create many similar projects, it is not necessary to save a preset.
- Changing preferences: If you expect your configuration preferences to change frequently, it may be best to configure each project individually.

#### Preset Saving Example

<p align="justify">
  If you decide it's useful to save these settings for future projects, select "y." Otherwise,  select "N".
</p>

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

```js
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

```js
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

#### Conclusion

<p align="justify">
  Each section within the <b>SCRIPT<b> section of a Vue component plays a crucial role in the   definition and operation of the component. These sections allow you to manage local data, props,  custom methods, computed properties, and react to changes in the component's lifecycle.  Understanding how and when to use each of these sections is critical to developing effective and   robust Vue.js applications.
</p>

## Animations

<p align="justify">
  Web animations allow you to create dynamic and attractive visual effects that improve the user  experience. In HTML, elements such as images, text, and shapes can be animated using CSS and,  optionally, JavaScript for more complex interactions. CSS provides powerful tools like   @keyframes to define custom animations. For example, with @keyframes, you can specify key points  in an animation, such as position, size, and color changes over time. Additionally, CSS  transitions allow you to smooth changes between element states, such as fades or slides. On the  other hand, JavaScript is used to dynamically control animations, such as triggering them in   response to user events or synchronizing multiple animations. This provides flexibility to  create everything from simple hover effects to complex animation sequences in modern web   applications. Together, HTML, CSS, and JavaScript form a powerful set of tools for creating   interactive and engaging web experiences through animations.
</p>

### Fade animation when routes change

```html
<div class="container h-100 fade-enter-active">
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</div>
```

```css
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
```

See more on [Routing animations for Vue js](https://learnvue.co/articles/vue-router-transitions).

---

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=vue,css,html,nodejs,js,bootstrap" />
  </a>
</p>

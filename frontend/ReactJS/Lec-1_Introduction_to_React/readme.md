# Why should you learn react?

- Challenges using HTML, CSS and JS:

  1.  Complex DOM manipulation
  2.  Spaghetti code(means complex, tangled and difficult to maintain code).
  3.  State management is difficult
  4.  Re-usability
  5.  performance issues.
  6.  scalability.

- How React solves the challenges faced by HTML,CSS and JS?

  1.  Component-based architecture.
  2.  Virtual DOM
  3.  Declarative syntax
  4.  Easy to learn
  5.  Manage the state(data) internally via components
  6.  Manage the global state(data) via 3rd party state management tool.
  7.  Strong community support

# What is React JS?

- A frontend JS library developed by FB in 2011.
- It's an open-source JS library with storng community.
- It is used to design the complex and interactive UIs.
- What is SPA?

  - An SPA(Single Page Application) is web app that dynamically updates the content without refreshing the entire page.
  - This makes your web apps fater and more responsive, similar to native apps.

# What is the difference b/w a library and a framework?

- Library:

  - Used to perform common tasks using pre-wriiten code.
  - Provides the flexibility when to use it in you application.

- Framework:

  - A ready-made structure and toolkit that helps you the web apps by following its certain rules and patterns.
  - provides you the structure and flow of your app, decating you how to organise your code?

# Who invented the React JS library?

- Created by Jordan Walke, a software engineer in FB.
- It was first deployed on Facebook's news feed in 2011.
- Later on built the Insta app in 2012 before making it open-source in 2013.

# Prerequisite for React?

1. VS code IDE.
2. chrome tool.
3. HTML, CSS and JS (functions, objects, arrow functions, map, filter, reduce, this)

# Setting up react Dev env using CDN link: (see the intro_to_react.html file)

# what is component?

- An independent and reusable piece of code.
- They are similar to JS functions, but work independently and return JSX elements.

# what is JSX? How does it different from HTML?

- JSX stands for "Javascript XML"
- const element = <h1>Hello Ashwani</h1>; // JSX element
- JSX = JS embeds the HTML.
- Allows developers to write the HTML code withing the JS.
- After compilation of JX expressions that becomes the JS function calls that evaluates to objects.

# where can you use JSX?

1.  functions: can return the JSX elements
2.  conditional rendering
3.  variable: can store the JSX in the variables.
4.  Loops: can use JSx inside loops
5.  Event handlers: can use JSX.

# what is babel? What does it do?

- Babel is a transpiler.
- Basically it converts the ES+ code and JSX into the backward compatible JS code so that it can work in all the browsers.

# What is ReactDOM? and What does it do?

- ReactDOM is JS library for rendering the components in the real DOM and efficiently updates the DOM when data changes.
- It ensures that UI is in sync with the entire application state.

# React Build Tools:

1.  Webpack:

    - CRA(Create React App): to help you to create the react app quickly
    - npx create-react-app appname
    - benefits: beginner-friendly becsue it will setup the react app quickly.
    - drawbacks: webpack slow down for the larger appilcations. Also, customising the default setup will be a challenging.

2.  Vite:

    - It's a fast and efficient build tool for building the react apps.
    - It help you to set up react app quickly and with minimal configurations and also support the ES module.
    - npm create vite@latest
    - Docs: https://vite.dev/guide/

3.  Parcel:

    - It's a bundler tool for JS apps.
    - Parcel used for bundling the (HTML, CSS and JS )together into a smaller file size.
    - benefits: require zero configuration to set up the JS or react app.
    - drawback: It doesn't have feature-rich configuration as compared to webpack and vite build tools are having.

To use build tools:

1. Install NodeJS
2. check node version: node -v and also check npm: npm -v

# how to use vite tool to build react apps:

npm create vite@latest or yarn create vite

# installing yarn tool: https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable

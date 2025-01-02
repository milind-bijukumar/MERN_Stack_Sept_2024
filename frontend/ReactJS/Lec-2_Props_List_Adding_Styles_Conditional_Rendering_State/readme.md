# Quick recap of react first session:

1. What is React and what does it?

   - Just a frontend or UI JS library.
   - helps to build the complex and any sort UIand you can update the DOM easily and efficiently.
   - provides you the component based approach.
   - Manage the state(data)-> internal data of the component.
   - one flow of data->React sends the data from parent to child

2. What is component and types of components?

   - independent and reusable piece of code.
   - just like normal JS function that returns the JSX elements
   - In React, you will have only and only 2 types of components:

     1. FBC(Functional Based component): use to build a component using a normal function or an arrow function
     2. CBC(Class Based Component): use to build the component using ES6 class, but there some rules of a component life cycle methods that you need to follow. (will cover in upcoming session).

3. What is JSX element?

   - It just an extention of Javascript.
   - JSX stands for JavaScript XML.
   - JSX = JS + HTML -> Devs can write the HTML in JS.
   - can be used in:

     1. functions.
     2. loops
     3. variables
     4. expressions

4. What is babel? what does it do?

   - A transpiler that converts the ES6+ code /JSX code into the old and new browser compatible JS code.
   - In React, babel converts the JSX into the JS function calls.

5. What is ReactDOM? what does it do?

   - Sync or renders the comps in real DOM of your web apps.

6. Build tools:

   - provides you the complete react ecosystem to build the production ready react code.
   - types of build tools:

     1. Webpack
     2. Vite (will use Vite)
     3. Parcel

7. How build react app using vite?

   npm create vite@latest or yarn create vite

8. What are props in react?

- props stands for properties.
- A way to pass data from one to another component.
- always pass data from parent to child.
- props are immutable so that it can't be modified.

9. What is component composition in react?

- It's a design pattern in react, by combining the smaller and reusable components all together to build a complex UI.

10. How to render the list in react? What is key prop?

- To render the all list of items in you web app using loop -> map() HOF
- key prop is an attribute that helps to identify the and track the individual elements in the list.
- key should be unique idetifier for each list of items.

11. How to apply styles in react components?

- There are several ways to apply styles in react components:

1.  Inline styles.
2.  External styles.
3.  CSS Modules.

    - A CSS module is a CSS file where all class names are scoped locally by default.
    - It helps to avoid the class name collisions.
    - Maintainability: helps to organise and modularise styles for the projects in object way styling.

4.  What is conditional Rendering?

- React allows you to render the different UI elements based on different conditions.
- It's like JS condition using (terninary operator ?: and can use if...else condtion or if)

13. What is state in react?

- A state is a built-in object that holds a component data.
- A component's state can be changed over time; Whenever it changes in either state or peops then the components get re-rendered.
- to manage the state in Functional component then you have to use useState() hook.

14. What is hook in react?

- A hook is special kind of fucntion that allows funtional components to utilize react features like state or lifecyle methods, useEffect()

- useState() hook: This hook is used to manage the state(data) within the component.

- How to use it?

  - const [variablename, functionname] = useState(intialValue);

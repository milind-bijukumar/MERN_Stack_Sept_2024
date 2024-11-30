/***

   What is node and its properties?


     - Node is represented via elements in the DOM.

     - DOM nodes represnts in 3 levels:
       1. element - level-1 -> nodeType = 1
       2. attributes - level-2 -> nodeType = 2
       3. text content - level-3 -> nodeType = 3


    common properties:
    1. nodeName - returns the nodeName
    2 nodeType
    3. NodeValue

    Element specific properties:

    tagName - name of the HTML tag.
    id - gets the id of a partcular element.
    classList - will give you the class attribute value.
    style - use to provide inline style to a particular element



 */

const hOneElem = document.querySelector("h1");
console.log(hOneElem.style);
console.log(hOneElem.nodeType);

console.log(hOneElem.classList);

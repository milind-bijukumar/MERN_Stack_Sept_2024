/**

  What is CRUD in DOM?

    - CRUD (Create, Read, Update, Delete). These rae the operations that you can perform on the DOM.

    1. Read an element/Access an element:

        - document.querySelector(): returns the first element that matches the selectors.

        - document.querySelectorAll(): returns NodeList of the elements that matches the selectors.

        - document.getElementById(): returns the elements that matches a particular id.

        - document.getElementsByClassName(): returns the HTMLCollection that matches the particular class name.


        - To access the content of partcular element properties:

           - 3 properties are used to access the partilcar element:


            1. innerText: use to access the content b/w the elements but excludes the hidden content.

            2. textContent: use to access the content b/w the elemnts but it includes the hidden content

            3. innerHTML: used to access the content b/w elements along with HTML tags.

        - How to update the elements content and styles? - quiz-1 and quiz-2

        - How to create the elements dynamically?

            - documeent.createElement(): used to create the elements dynamically via JS 

        - How to update the content in the DOM?

            - parentElement.appendChild(anyTagthatbeingCreated);

            - append(), prepend()

        - How to delete the element?

            - element.remove()
            - element.parentNode.removeChild(element)
            - replaceChild() - please explore about this method
       

 */

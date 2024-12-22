/**
   
     What is drag and drop API?

     - Provided by the browser API not the part of JS.
     - Allows the end user to drag and drop the items/elements in a specified target area.

     usecase:

    1. Moving tickets from todo to inpragress to completed
    2. credit card sequential preferences
    3. drag and drop the files

    How to implemenet it?

     1. make the element darggable -> draggable="true";
     2. Handle the events -> use addEventListener('drag&drop event', ()=>{})
     3. Data transfer -> In dragstart, use event.dataTransfer.setData() to store the data and use event.dataTransfer.getData() to retrieve the data.
    
  
    drag & drop event:

    dragstart: triggers when drag start.
    dragend: triggers when drag ends
    drop: triggers when the item is dropped in a target area.
    dragover: triggers when an is dropped in  a valid target.


 */

/***

   Web accessibility:

     - the content of the web has to be accessible by everyone.(physical disabled persons as well)

     - tools you can use as:
        1. Lighthouse
        2. Screen reader software used by disabled people to read the text.


     - Take care during your development phase:

       - for icons -> use button HTML and try to use semantic elements.
       - image -> use alt attrbute inside the <img  alt=""/> to understand about the image to be presented.
       - tabIndex='0'/'-1' is useful for unsemantic elements and access by the tab.
       - aria-label or aria-* attributes you can inside any HTML element.
 */

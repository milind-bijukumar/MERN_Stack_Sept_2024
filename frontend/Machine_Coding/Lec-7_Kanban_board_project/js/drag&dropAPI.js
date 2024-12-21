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

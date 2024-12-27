/**
   Kanbanboard project:
   -------------------
    Additional Feature: 
    1. Added Filter Button => whenever we click on only color filter gets applied for entire task and 
    filter button turns red colour. Click on filter button When its red in color to remove filter.
    Instead of double clicking the filter color to remove it which cause cofnusion for user.

    Good to have Features
    1. Enabling filter on todo, in-progress and completed contianer seperatley.
    2. Enabling user to update priority of Task with unlock button.
    3. Rearranging the order of task in todo/in-progress/completed contianer
 */

//*****************************GOBAL VARIABLES***********************************************************
let addModalState = true;
let modalPriorityColor = 'red';
let taskArr=[];
let currentStatus= "todo";
let isDeleteFlag = false;
let filterColor = null;
//********************************************************************************************************

// **************************** HELPER FUNCTIONS**********************************************************
//helper Function: querySelector();
const query = (selector)=> document.querySelector(selector);
//helper Function: querySelectorAll();
const queryAll = (selector)=> document.querySelectorAll(selector);
//******************************************************************************************************** 

// **************************** FILTER HANDLER FUNCTIONS**************************************************
//Function to Handle Filter Click
const filterHandler=(e)=>{
  if(e.target.classList.contains('color')){
    //Removing highlighted color
    queryAll('.color').forEach((filterColorBox)=>{filterColorBox.style.border="2px solid grey"});
    //Setting highlight on selected color
    e.target.style.border="2px solid yellow";
    filterColor=e.target.classList[1];
    query('.fa-filter').style.color=filterColor?"red":"black";
    const allTask = queryAll('.ticket-cont');
    //Reseting display property to block 
    allTask.forEach((task)=>task.style.display="block");
    const filteredTaskId = taskArr.filter((task)=>task.color===filterColor).map((task)=>task.id);
    //Making only the selected colored task to vissible
    allTask.forEach((task)=>{
      if(!filteredTaskId.includes(task.getAttribute('id'))){
        task.style.display="none";
      } 
    })
  }
}
//Function to for Removing Filter
const removeFilterHandler = ()=>{
  filterColor=null;
  //Removing highlighted color
  queryAll('.color').forEach((filterColorBox)=>{filterColorBox.style.border="2px solid grey"});
  query('.fa-filter').style.color=filterColor!==null?"red":"black";
  const allTask = queryAll('.ticket-cont');
  //Reseting display property to block 
  allTask.forEach((task)=>task.style.display="block");
}
//********************************************************************************************************

// **************************** DRAG API HANDLER FUNCTIONS************************************************
//Drag API handler functions
const handleDragStart = (event)=>{
  event.dataTransfer.setData('text/plain',event.target.id);
  event.target.classList.add('dragging');

}
const handleDragEnd = (event)=>{
  event.target.classList.remove('dragging');
}
const handleDrop = (event)=>{
  event.preventDefault();
  const ticketId = event.dataTransfer.getData("text/plain");
  const droppedTicket= query(`#${ticketId}`);
  // console.log(ticketId);
  const targetCont = event.target.closest('.ticket-container');
  if(droppedTicket && targetCont){
    const sourceCont =  droppedTicket.closest('.ticket-container');
    sourceCont.removeChild(droppedTicket);
    targetCont.appendChild(droppedTicket);

    //Updating the chnages made on UI to Local storage
    const idx = taskArr.findIndex((taskObj)=>taskObj.id===ticketId);
    taskArr[idx].status=targetCont.id;
    updateLocalStorage(taskArr);
  }
}
//********************************************************************************************************

// **************************** DELETE HANDLER FUNCTIONS**************************************************
//Function for delete ticket handler
const deleteTicketHandler= (event)=>{
    const ticketCont = event.currentTarget;
    const id = ticketCont.querySelector(".ticket-id").innerText;
    //Remove from storage
    taskArr=taskArr.filter((task)=>task.id!==id);
    updateLocalStorage(taskArr);
    //Remove from rendering
    ticketCont.remove();
}
//Handler Function for Delete btn 
const deleteBtnFlaHandler = ()=>{
  isDeleteFlag=isDeleteFlag?false:true;
  query('.fa-trash').style.color=isDeleteFlag?"red":"black";
  const allTicketCont = queryAll('.ticket-cont');
  //Adding and removing eventlistener based on isDeleteFlag
  if (isDeleteFlag){
    allTicketCont.forEach((ticketCont)=>{
      ticketCont.addEventListener('click',deleteTicketHandler);
    })
  }else{
    allTicketCont.forEach((ticketCont)=>{
      ticketCont.removeEventListener('click',deleteTicketHandler);
    })
  }
}
//********************************************************************************************************

// **************************** LOCK-UNLOCK HANDLER FUNCTIONS*********************************************
//Function to Add Lock-Unlock Handler to each ticket contianer at the time of creation
const addLockUnlockHandler=(ticketCont,id)=>{
   const addLockUnlockBtn = ticketCont.querySelector('#lock-unlock-btn');
   const ticketTask = ticketCont.querySelector('.ticket-task');
  
   //Adding Eventlisterner for lock-unlock
   addLockUnlockBtn.addEventListener('click', ()=>{
      addLockUnlockBtn.classList.toggle('fa-lock');
      addLockUnlockBtn.classList.toggle('fa-unlock');
      ticketTask.contentEditable=addLockUnlockBtn.classList.contains('fa-unlock')?true:false;
      //Updating the chnages made on UI to Local storage
      const idx = taskArr.findIndex((taskObj)=>taskObj.id===id);
      taskArr[idx].task=ticketTask.innerText;
      updateLocalStorage(taskArr);

   })
}
//********************************************************************************************************


// **************************** LOCALSOTRAGE & RENDERING FUNCTIONS****************************************
//Fucntion to get tickets from local storage
const ticketsFromLocalStorage=()=>{
  const storedTickets = localStorage.getItem('tickets');
  return storedTickets?JSON.parse(storedTickets):[];
}
//Fucntion to append ticket to continaer
const appendTicketElement = (container, task, id, color)=>{
  /** Here we are calling function createTaskEle which create and return HTML element in required format.
   * then we are appending to container(element on which this return elemtn should be appended)*/
  const ticketEle = createTaskEle(id,task,color)
  addLockUnlockHandler(ticketEle,id);
  container.appendChild(ticketEle)
}
//Function to render tickets
const renderedStoredTickets = (tickets)=>{
  tickets.forEach(({id,task,color,status})=>{
    const container = query(`#${status}`);
    appendTicketElement(container, task, id, color);
  })
}
//Fucntion to create task in local sotrage
const updateLocalStorage=(tasks)=>{
  localStorage.setItem('tickets', JSON.stringify(tasks));
}
//********************************************************************************************************

// **************************** CREATING TASK AND CONTAINER FUNCTIONS*************************************
//Function: to set priorityColor
const priorityColorHaandler = (selectedColor) =>{
  //To remove active class from all colors
  queryAll('.priority-color').forEach((color)=>{
    color.classList.remove('active');
  });
  modalPriorityColor=selectedColor.classList[1];
  selectedColor.classList.add("active");
}
//Function : to create taskElement
const createTaskEle= (id, task,modalPriorityColor)=>{
  const ticketCont = document.createElement('div');
  ticketCont.className='ticket-cont';
  ticketCont.draggable=true;
  ticketCont.id = id;
  ticketCont.innerHTML=`
            <div class="ticket-color ${modalPriorityColor}"></div>
            <div class="ticket-id">${id}</div>
            <div class="ticket-task">${task}</div>
            <div class="lock-unlock">
              <button class="fa-solid fa-lock" id="lock-unlock-btn" aria-label="Lock"></button>
            </div>`;
  return ticketCont;
}
//Function : to handle Task creation 
const createTaskHandler = ()=>{ 
  const textArea = query('.modal-textarea')
  const task = textArea.value.trim();
  if(task){
    //creating id using thrid party script
    const id = new ShortUniqueId().randomUUID();
    const ticketCont=createTaskEle(id,task, modalPriorityColor);
    //Appending as child for todo contianer
    query('#todo').appendChild(ticketCont);
    //Addding the newly added task to taskArr
    taskArr.push({id,task, color: modalPriorityColor,status:currentStatus});
    //Updating Local Stroage
    updateLocalStorage(taskArr);
    //closing modal after creating task
    closeModal();
    //Resetting texarea input field
    textArea.value="";
    //function to add Lock-Unlock handler to each contianer
    //We are addig it here bcz whenever we create a ticket a eventhandler can be created to that ticket
    addLockUnlockHandler(ticketCont,id);
  }
}
//********************************************************************************************************

// **************************** OVERLAY MODAL HANDLER FUNCTIONS*******************************************
//Function: for Toggling Modal 
const toggleModal=()=>{
  const modal= query('.modal-overlay');
  modal.style.display=addModalState?"flex":"none";
  addModalState=!addModalState;
}

//Function: For Closing the Modal
const closeModal = ()=>{
  toggleModal();
}
//********************************************************************************************************

// ****************************  EVENTLISTENER SETUP FUNCTION*********************************************
//Function: Setting up all the EventListener
const setupEventListener = ()=>{  
  const toolBoxCont = query('.toolbox-cont').addEventListener('click',(event)=>{
    const targetClassList = event.target.classList;
    //For Add btn
    if(targetClassList.contains('fa-plus')){
      //Reseting the active color to red each time modal 0verlay is opened
      const priorityColors = queryAll('.priority-color');
      priorityColorHaandler(priorityColors[0]);
      //toggling overlay
      toggleModal();
    }
  });
  //For Closing the Modal
  query('.modal-close-btn').addEventListener('click',()=>{
    closeModal();
  });
  //For creating Task
  query('.create-task').addEventListener('click',createTaskHandler) 
  //For setting priorityColor and active class for color using mouse
  query('.priority-color-cont').addEventListener('click',(e)=>{
    //to ensure we click only on color box not outside it
    if (e.target.classList.contains('priority-color')){
      priorityColorHaandler(e.target);
    }
  })
  //Handler for Filter button
  query('.toolbox-priority-cont').addEventListener('click',filterHandler);
  query('.filter-btn').addEventListener('click',removeFilterHandler);
  //Handler for delete button
  query('.remove-btn').addEventListener('click', deleteBtnFlaHandler);
  //Drag API Events
  const mainCont = query('.main-cont');
  mainCont.addEventListener("dragstart",handleDragStart);
  mainCont.addEventListener("dragover",(event)=>{
    event.preventDefault();
  });
  mainCont.addEventListener("dragend",handleDragEnd);
  mainCont.addEventListener("drop",handleDrop);
}
//********************************************************************************************************

// ****************************KANBANBOARD INITIALIZING FUNCTION******************************************
//Initializing Kanban Board
const initKanbanBoard=()=>{
  //Function Call to get all the data
  taskArr=ticketsFromLocalStorage();
  //render all data on screen
  renderedStoredTickets(taskArr);
  //Function Call for all EventListener
  setupEventListener();
}
initKanbanBoard();
//********************************************************************************************************

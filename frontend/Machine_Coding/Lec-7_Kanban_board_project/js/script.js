/**
   Kanban board project:
   -------------------
   1. create a modal and show that modal.
   2. on a close of modal, it has to hide.
   3. create the ticket after enter the text inside the textarea of modal
 */

let addModalState = true;
let modalPriorityColor = "red";
let taskArr = [];
let currentStatus = "todo";

// helpers function
const query = (selector) => document.querySelector(selector);
const queryAll = (selector) => document.querySelectorAll(selector);

const handleDragStart = (event) => {
  event.dataTransfer.setData("text/plain", event.target.id);
  console.log(event.target.id);
  event.target.classList.add("dragging");
};

const handleDragEnd = (event) => {
  event.target.classList.remove("dragging");
};

const handleDrop = (event) => {
  event.preventDefault();
  console.log(event.dataTransfer);
  const ticketId = event.dataTransfer.getData("text/plain");
  console.log(ticketId);
  const droppedTicket = query(`#${ticketId}`);
  const targetContainer = event.target.closest(".ticket-container");

  if (droppedTicket && targetContainer) {
    const sourceContainer = droppedTicket.closest(".ticket-container");
    sourceContainer.removeChild(droppedTicket);
    targetContainer.appendChild(droppedTicket);

    const idx = taskArr.findIndex((obj) => obj.id === ticketId);
    taskArr[idx].status = targetContainer.id;
    updateLocalStorage(taskArr);
  }
};

const addLockUnLockHandler = (ticketCont, id) => {
  const lockUnlockBtn = ticketCont.querySelector(".lock-unlock i");
  const ticketTask = ticketCont.querySelector(".ticket-task");

  lockUnlockBtn.addEventListener("click", () => {
    //lockUnlockBtn.classList.toggle("fa-lock");
    lockUnlockBtn.classList.toggle("fa-unlock");
    ticketTask.contentEditable = lockUnlockBtn.classList.contains("fa-unlock");

    const idx = taskArr.findIndex((obj) => obj.id === id);
    taskArr[idx].task = ticketTask.innerHTML;
    updateLocalStorage(taskArr);
  });
};

const updateLocalStorage = (tasks) => {
  localStorage.setItem("tickets", JSON.stringify(tasks));
};

const ticketsFromLocalStorage = () => {
  const storedTickets = localStorage.getItem("tickets");
  return storedTickets ? JSON.parse(storedTickets) : [];
};

const appendTicketElement = (container, task, id, color) => {
  const ticketElem = createTicketElement(id, task, color);
  container.appendChild(ticketElem);
  addLockUnLockHandler(ticketElem, id);
};

const renderedStoredTickets = (tickets) => {
  tickets.forEach(({ id, task, color, status }) => {
    const container = query(`#${status}`); // #todo, #inprogress, #completed
    appendTicketElement(container, task, id, color);
  });
};

const handlePriorityColorClick = (event) => {
  const priorityColorElem = event.target;

  queryAll(".priority-color").forEach((priorityColorElem) => {
    priorityColorElem.classList.remove("active");
  });

  priorityColorElem.classList.add("active");

  console.log(priorityColorElem.classList);
  modalPriorityColor = priorityColorElem.classList[1];
  console.log(modalPriorityColor);
};

const createTicketElement = (id, task, modalPriorityColor) => {
  const ticketCont = document.createElement("div");
  ticketCont.className = "ticket-cont";
  ticketCont.id = id;
  ticketCont.draggable = true;

  ticketCont.innerHTML = `
        <div class="ticket-color ${modalPriorityColor}"></div>
            <div class="ticket-id">${id}</div>
            <div class="ticket-task">${task}</div>
            <div class="lock-unlock">
                <i class="fa-solid fa-lock"></i>
            </div>
        </div>
  `;

  return ticketCont;
};

const createTaskHandler = () => {
  const textArea = query(".modal-textarea");

  const task = textArea.value.trim();

  if (task) {
    const id = new ShortUniqueId().randomUUID();
    const ticketCont = createTicketElement(id, task, modalPriorityColor);
    console.log(ticketCont);
    query("#todo").appendChild(ticketCont);
    taskArr.push({
      id,
      task,
      color: modalPriorityColor,
      status: currentStatus,
    });
    updateLocalStorage(taskArr);
    closeModal();
    textArea.value = "";

    addLockUnLockHandler(ticketCont, id);
  }
};

const toggleModal = () => {
  const modal = query(".modal-overlay");

  console.log(modal);

  modal.style.display = addModalState ? "flex" : "none";

  addModalState = !addModalState;
};

const closeModal = () => {
  toggleModal();
};

const setupEventListeners = () => {
  query(".toolbox-cont").addEventListener("click", (event) => {
    const targetClassList = event.target.classList;

    if (targetClassList.contains("fa-plus")) {
      toggleModal();
    }
  });

  query(".modal-close-btn").addEventListener("click", () => {
    closeModal();
  });

  query(".create-task").addEventListener("click", createTaskHandler);

  queryAll(".priority-color").forEach((priorityColorElem) => {
    priorityColorElem.addEventListener("click", handlePriorityColorClick);
  });

  const mainCont = query(".main-cont");

  mainCont.addEventListener("dragstart", handleDragStart);
  mainCont.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
  mainCont.addEventListener("dragend", handleDragEnd);
  mainCont.addEventListener("drop", handleDrop);
};

const initKanbanBoard = () => {
  console.log("kanban intialised");
  // get the data from local storage
  taskArr = ticketsFromLocalStorage();
  // render the tickets
  renderedStoredTickets(taskArr);
  setupEventListeners();

  //Assignmnets:
  /**
   
      1. Filtering or grouping the tickets based on priority of the tickets
      2. Delete the tickets and update the localstorage as well
    */
};

initKanbanBoard();

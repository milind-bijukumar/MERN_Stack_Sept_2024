/**

  // Nested comment Box

   Real usecases:
   -------------------------
   1. FB comments
   2. youtube comments
   3. product reviews comments
   4. Blog post comments


    Requirement:

    1. Add comment if any text has been entered inside the input field but after clicking add comment button

    2. don't allow any comment to be added if input field is empty.

    3. then create the dynamic list of comments with comment box

    4. Whenever use click on reply btn, then a dyaminc comment should add and also create dynamic inputfiled along with submit button.

   Approach:

     1. get text fom input field
     2. add listener to add comment button
     3. update the dynamic text from input field with reply into reply container and add it in li and then append those lis into ul.


 */

// Implementation

const addCommentBtn = document.getElementById("addCommentBtn");
const commentInput = document.getElementById("commentInput");
const commentList = document.getElementById("commentList");

const submitReply = () => {
  // as in assigment
};

const addReplyInputBox = (parentLi) => {
  const replyCont = document.createElement("div");
  replyCont.classList.add("reply-container");

  const inputReply = document.createElement("input");
  inputReply.type = "text";
  inputReply.placeholder = "Enter your reply";

  const submitReplyBtn = document.createElement("button");
  submitReplyBtn.innerText = "Submit";

  submitReplyBtn.addEventListener("click", () => {
    console.log("comment has been replied");
    submitReply();
  });

  replyCont.appendChild(inputReply);
  replyCont.appendChild(submitReplyBtn);

  console.log(replyCont);

  parentLi.appendChild(replyCont);
};

const createCommentElement = (commentText) => {
  const li = document.createElement("li");

  li.innerText = commentText;

  const replyBtn = document.createElement("button");
  replyBtn.innerText = "Reply";

  replyBtn.classList.add("reply-btn");

  replyBtn.addEventListener("click", () => {
    addReplyInputBox(li);
  });

  li.appendChild(replyBtn);

  return li;
};

const addComment = () => {
  const commentText = commentInput.value.trim();

  if (commentText !== "") {
    const commentLi = createCommentElement(commentText);
    // append in the ul
    commentList.appendChild(commentLi);
  }
};

addCommentBtn.addEventListener("click", addComment);

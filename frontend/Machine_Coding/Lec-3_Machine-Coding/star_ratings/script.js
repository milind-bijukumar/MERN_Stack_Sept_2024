/**
   
   Requirements: 
   
    implement the the star rating component by updating the rating value based which star has been selecting. 


    Must to have:

      1. rating from 1 to 5.
      2. When you clciked on the star then raing value has to updated.
      3. Hover effect


    Good to have features:

      1. can take decimal 0.5, 1.0, 1.5 etc
      2. can have slider to provide the ratings
      3. Emojis 

    Approach:

      you have to listen 3 events:

        . click
            - give the rating
            - update the star what a user will select
            - update the rating count
        . mouseover
            - update the star color (filled the star color)
        . mouseleave
            - stars should turn back to gray

 */

const starContainer = document.getElementById("star-container");
const countElem = document.getElementById("count");
const starArr = document.querySelectorAll(".star");

let selectedRating = 0;

const resetStars = () => {
  updateStars(selectedRating);
};

const updateStars = (index) => {
  console.log(index);
  for (i = 0; i < starArr.length; i++) {
    starArr[i].classList.remove("star-filled");
  }

  for (i = 0; i < index; i++) {
    starArr[i].classList.add("star-filled");
  }
};

const getStarIndex = (elem) => {
  return elem.hasAttribute("data-index")
    ? parseInt(elem.getAttribute("data-index"))
    : null;
};

const handleClick = (event) => {
  //   console.log(event.target);
  const idx = getStarIndex(event.target);

  selectedRating = idx;

  if (idx === null) return;
  updateStars(idx);
  countElem.innerText = `Rating Count: ${selectedRating}`;
};

const handleStarHover = (event) => {
  event.stopPropagation();

  const idx = getStarIndex(event.target);
  if (idx === null) return;
  updateStars(idx);
};

const handleMouseLeave = () => {
  resetStars();
};

starContainer.addEventListener("click", handleClick);

starContainer.addEventListener("mouseover", handleStarHover);

starContainer.addEventListener("mouseleave", handleMouseLeave);

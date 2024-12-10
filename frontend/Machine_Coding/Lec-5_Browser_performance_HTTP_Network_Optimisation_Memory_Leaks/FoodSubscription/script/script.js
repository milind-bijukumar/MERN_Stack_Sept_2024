/**

  This is function which is triggered after DOM has been parsed
 */
document.addEventListener("DOMContentLoaded", () => {
  console.log(
    "After the HTML is getting parsed then this script will get loaded"
  );
  let link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "./css/fs-styles.css";

  document.head.appendChild(link);
});

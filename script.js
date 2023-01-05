const ul = document.getElementById("navigation");
const menu = document.getElementById("mnav");

menu.addEventListener("click", () => {
  if (ul.getAttribute("data-open") == "true") {
    ul.setAttribute("data-open", "false");
    menu.setAttribute("data-open", "false");
  } else {
    ul.setAttribute("data-open", "true");
    menu.setAttribute("data-open", "true");
  }
});

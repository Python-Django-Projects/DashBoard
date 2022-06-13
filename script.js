let icon = document.querySelector(".icon");
let sidebar = document.querySelector(".sidebar");

icon.onclick = function () {
  sidebar.classList.toggle("open");
};

let myNav = document.querySelector(".fa-moon");
myNav.onclick = function () {
  document.body.classList.toggle("change");
};

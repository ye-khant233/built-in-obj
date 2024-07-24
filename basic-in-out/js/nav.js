const controlNav = document.querySelector("#controlNav");
const sideBar = document.querySelector("#sideBar");
const lists = document.querySelectorAll(".list");
controlNav.onclick = () => {
  sideBar.classList.toggle("translate-x-full");
};

lists.forEach((list) => {
  console.log(list);
  list.onclick = () => {
    list.classList.toggle("bg-gray-300")
  }

});

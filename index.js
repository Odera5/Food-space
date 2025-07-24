document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector("#hamburger-icon");
  const hamburgerMenu = document.createElement("div");
  hamburgerMenu.classList.add("hamburgerMenu");
  document.body.appendChild(hamburgerMenu);
  const list = document.createElement("ul");
  hamburgerMenu.appendChild(list);
  const items = ["Home", "About us", "Contact", "Service"];
  items.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = item;
    li.appendChild(a);
    list.appendChild(li);
  });
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    hamburgerMenu.classList.toggle("visible");
  });
});

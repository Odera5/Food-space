document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector("#hamburger-icon");
  const hamburgerMenu = document.createElement("div");
  hamburgerMenu.classList.add("hamburgerMenu");
  document.body.appendChild(hamburgerMenu);
  const list = document.createElement("ul");
  hamburgerMenu.appendChild(list);
  const items = [
    { text: "Home", href: "index.html" },
    { text: "About us", href: "about.html" },
    { text: "Contact Us", href: "contact.html" },
    { text: "Service" },
  ];
  items.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = item.text;
    a.href = item.href;
    a.style.textDecoration = "none";
    a.style.color = "white";
    li.appendChild(a);
    list.appendChild(li);
  });
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    hamburgerMenu.classList.toggle("visible");
  });

  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  reveals.forEach((reveal) => {
    observer.observe(reveal);

    reveal.addEventListener("click", () => {
      reveal.classList.toggle("moved");
    });
  });
});

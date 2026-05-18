const burger=document.getElementById("burger");
const nav=document.getElementById("nav");
burger.onclick=()=>nav.classList.toggle("active");

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.onclick=e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute("href"))
      .scrollIntoView({behavior:"smooth"});
  };
});

// FEATURES
document.querySelectorAll(".feature-item").forEach(item=>{
  item.onclick=()=>{
    document.querySelectorAll(".feature-item")
      .forEach(i=>i.classList.remove("active"));
    item.classList.add("active");
  };
});

// FORM
const form=document.getElementById("form");
const message=document.getElementById("message");

form.onsubmit=e=>{
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const email=document.getElementById("email").value.trim();

const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

if (!name || !email) {

  message.textContent = "Заполни все поля";

  message.style.color = "red";

  return;

}

if (!emailValid) {

  message.textContent = "Введите корректный email";

  message.style.color = "red";

  return;

}
  message.textContent="Готово 🚀";
  message.style.color="lightgreen";
  form.reset();
};

// SCROLL ANIMATION
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add("active");
    }
  });
});
document.querySelectorAll(".reveal").forEach(el=>{
  observer.observe(el);
});

const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");

document.querySelectorAll(".open-modal").forEach(el=>{
  el.onclick=()=>modal.classList.add("active");
});

modalClose.onclick=()=>modal.classList.remove("active");

modal.onclick=e=>{
  if(e.target===modal){
    modal.classList.remove("active");
  }
};
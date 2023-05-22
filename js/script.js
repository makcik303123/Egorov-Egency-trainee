const day = document.getElementById("day");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const hour = document.getElementById("hour");


// Обратный счетчик

const targetDate = new Date("May 31, 2023 00:00:00");

function counter() {
  const todayDate = Date.now();
  const diff = targetDate.getTime() - todayDate;

  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(diff / 1000 / 60) % 60;
  const seconds = Math.floor(diff / 1000) % 60;

  day.innerHTML = days < 10 ? "0" + days : days;
  minute.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  second.innerHTML = seconds < 10 ? "0" + seconds : seconds;
  hour.innerHTML = hours < 10 ? "0" + hours : hours;
}

setInterval(counter, 1000);



// Функционал аккардиона

const slides = document.querySelectorAll(".slide");

for (const slide of slides) {
  slide.addEventListener("click", () => {
    clearActiveClasses();

    slide.classList.add("active");
  });
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}



// AJAX запрос, открытие закрытие popup

const popup = document.querySelector(".popup");
const popupTitle = document.querySelector(".popup__title");
const popupText = document.querySelector(".popup__text");

const sendEmail = async () => {
  const email = document.querySelector("#email");
  console.log(true);
  try {
    await fetch("https://646a223e183682d6144e84b7.mockapi.io/api/email", {
      method: "POST",
      body: JSON.stringify({ email: email.value }),
    });
    email.value = "";
    showPopup(
      "SUCCESS!",
      "You have successfully subscribed to the email newsletter"
    );
  } catch (err) {
    console.log(err);
    showPopup("Error!!!", "Something went wrong");
  }
};

window.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});

function showPopup(title, text) {
  popupTitle.innerText = title;
  popupText.innerText = text;
  popup.classList.add("active");
}

function closePopup() {
  popup.classList.remove("active");
}

const cross = document.querySelector(".popup__close");
const popupBtn = document.querySelector(".popup__btn");

cross.addEventListener("click", closePopup);
popupBtn.addEventListener("click", closePopup);





// Добавление анимации перехода
const events = document.querySelector("#events");


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.toggle("active");
    }
  });
});
    
observer.observe(events)
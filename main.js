// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

let modalDiv = document.getElementById("modal");
modalDiv.className = "hidden";
let modalContent = document.getElementById("modal-message");
let hearts = document.querySelectorAll(".like-glyph");
hearts.forEach((span) => span.addEventListener("click", clickHeart));

function clickHeart(e) {
  mimicServerCall()
    .then(() => {
      successAction(e.target);
    })
    .catch(failedAction);
}

function successAction(target) {
  if (target.textContent === EMPTY_HEART) {
    target.textContent = FULL_HEART;
    target.classList.add("activated-heart");
  } else {
    target.textContent = EMPTY_HEART;
    target.classList.remove("activated-heart");
  }
}

function failedAction(message) {
  modalDiv.classList.remove("hidden");
  modalContent.textContent = message;
  setTimeout(() => {
    modalDiv.classList.add("hidden");
  }, 3000);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

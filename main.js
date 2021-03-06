// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const modal = document.getElementById("modal");
modal.classList.add("hidden");

// Your JavaScript code goes here!
function hideModal() {
  modal.classList.add("hidden");
};

function showModal(message) {
  modal.innerText = message;
  modal.classList.remove("hidden");
}

function heartListener() {
  //selecting all hearts ad HTML collection
  const heart = document.getElementsByClassName("like-glyph");  

  //attaching a listener for each element of HTML collection and toggling hearts when clicked
  for (element of heart){
    element.addEventListener('click', actionsFunction);
  }
}
  // steps that happen when heart is clicked
  function actionsFunction (event) {
    event.preventDefault();
    mimicServerCall()
    .then(response => {
      return response
    })
    .then(object => {
      toggleHeart(event);
    })
    .catch(function(object) {
      console.log(object);
      showModal(object);
      setTimeout(hideModal, 5000);
    });
 
  }
 

  function toggleHeart (element) {
    if (element.target.innerHTML === EMPTY_HEART) {
      element.target.innerHTML = FULL_HEART;
      element.target.classList.add('activated-heart');
    } else {
      element.target.innerHTML = EMPTY_HEART;
    };
  };


heartListener();
hideModal();




//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

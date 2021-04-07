function play() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  if (name == "") {
    alert("Oops! Something seems to be missing.");
  } else {
    alert("Thank you, " + name + "! We'll be in touch by email.");
  }
}
let playButton = document.querySelector("button");
playButton.addEventListener("click", play);

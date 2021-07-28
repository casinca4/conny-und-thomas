const conny = document.querySelector(".conny");
const thomas = document.querySelector(".thomas");
const connySpeech = document.querySelector(".conny-speech");
const thomasSpeech = document.querySelector(".thomas-speech");
const luckySpeechConny = document.querySelector(".lucky-speech-conny");

thomas.addEventListener("click", function() {
  thomasSpeech.style.visibility = "visible";
  thomasSpeech.style.transition = "visibility 10s ease 1s";
  luckySpeechConny.style.visibility = "visible";
  luckySpeechConny.style.transition = "visibility 2s ease 3s";
})

conny.addEventListener("click", function() {
  connySpeech.style.visibility = "visible";
  connySpeech.style.transition = "visibility 5s ease 1s";
})
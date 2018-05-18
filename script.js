var homebtn= document.querySelector(".homebtn");
var resumebtn= document.querySelector(".resumebtn");
var workbtn= document.querySelector(".workbtn");
var contactbtn= document.querySelector(".contactbtn");
var home= document.querySelector("#home");
var resume= document.querySelector("#resume");
var work= document.querySelector("#work");
var contact= document.querySelector("#contacts");

homebtn.addEventListener("click", function(){
  home.classList.toggle("hidden");
  resume.classList.add("hidden");
  work.classList.add("hidden");
  contact.classList.add("hidden");

});

resumebtn.addEventListener("click", function(){
  resume.classList.toggle("hidden");
  home.classList.add("hidden");
  work.classList.add("hidden");
  contact.classList.add("hidden");
  console.log("click");

});

workbtn.addEventListener("click", function(){
  work.classList.toggle("hidden");
  resume.classList.add("hidden");
  home.classList.add("hidden");
  contact.classList.add("hidden");


});

contactbtn.addEventListener("click", function(){
  contact.classList.toggle("hidden");
  resume.classList.add("hidden");
  work.classList.add("hidden");
  home.classList.add("hidden");

});

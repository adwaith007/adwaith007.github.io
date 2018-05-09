var homebtn= document.querySelector("#homebtn");
var resumebtn= document.querySelector("#resumebtn");
var workbtn= document.querySelector("#workbtn");
var contactbtn= document.querySelector("#contactbtn");
var home= document.querySelector("#home");
var resume= document.querySelector("#resume");
var work= document.querySelector("#work");
var contact= document.querySelector("#contacts");

homebtn.addEventListener("click", function(){
  home.style.display="block";
  resume.style.display="none";
  work.style.display="none";
  contact.style.display="none";
});

resumebtn.addEventListener("click", function(){
  home.style.display="none";
  resume.style.display="block";
  work.style.display="none";
  contact.style.display="none";

});

workbtn.addEventListener("click", function(){
  home.style.display="none";
  resume.style.display="none";
  work.style.display="block";
  contact.style.display="none";

});

contactbtn.addEventListener("click", function(){
  home.style.display="none";
  resume.style.display="none";
  work.style.display="none";
  contact.style.display="block";

});

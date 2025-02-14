 let formel = document.getElementById ('form-el');
 formel.addEventListener('click',function () {
    alert("hi")
 })
 let navElement = document.getElementById ('navbar');
 let burgerElement = document.getElementById ('burgerbar');

 burgerElement.addEventListener("click", function () {
    navElement.classList.toggle("activeNav");
 })
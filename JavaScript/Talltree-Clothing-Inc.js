"use strict";

// function myProducts() {
//     document.getElementById("dropdownMenuLink").classList.toggle("show");

function submitEmail() {
    document.getElementById("newsLetter").classList.toggle("submit");
}
function myProducts() {
    document.getElementById("shirts").onclick = function () {
        location.href = "Talltree-Clothing-Shirts.html";
        console.log("clicked");
    }
}
myProducts();
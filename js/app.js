console.log("działa");
'use strict';

document.addEventListener('DOMContentLoaded', function() {
var forDropdown = document.querySelector(".for-dropdown");
var dropdown = document.querySelector(".dropdown");
console.log(forDropdown, dropdown);
    
    forDropdown.addEventListener("mouseover", function(){
        dropdown.style.display = "block";

    });
    forDropdown.addEventListener("mouseout", function(){
        dropdown.style.display = "none";
    });
    
})
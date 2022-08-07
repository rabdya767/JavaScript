$(document).ready(function () {
    var allPelements = $("p");
    $("#demo").text("The text from the id01 paragraph is: " + allPelements[1].innerHTML);
});


/**
 *const allPelements = document.getElementsByTagName("p");
 * document.getElementById("demo").innerHTML = "The text in the first paragraph is: " + allPelements[0].innerHTML;
 * 
 * 
 *! Finding HTML Elements by Id
 * 
 * ?jQuery
 * $(document).ready(function() {
 * var myElements = $("#id01");
 * $("#demo").text("The text from the id01 paragraph is: " + myElements[0].innerHTML);});
 *
 * ?javascript
 * const myElement = document.getElementById("id01");
 * document.getElementById("demo").innerHTML = "The text from the id01 paragraph is: " + myElement.innerHTML;
 * 
 */

/**
 * !Finding HTML Element by Id
 * Return the element with id="id01":
 * jq --> myElement = $("#id01");
 * js -->myElement = document.getElementById("id01");
 * 
 * 
 * !Return all <p> elements:
 * myElements = $("p");
 * myElements = document.getElementsByTagName("p");
 * 
 * 
 * !Return all elements with class="intro"
 * jQuery --> myElements = $(".intro");
 * js --> myElements = document.getElementsByClassName("intro");
 * 
 * 
 * !Return a list of all <p> elements with class="intro"
 * myElements = $("p.intro");
 * myElements = document.querySelectorAll("p.intro");
 * 
 **/
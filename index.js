var randomnumber = Math.floor(Math.random() * 6) + 1;


var randomdiceimage = "dice" + randomnumber +".png";

var randomdiceimagesource = "images/" + randomdiceimage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomdiceimagesource);



var randomnumber2 = Math.floor(Math.random() * 6) + 1;


var randomdiceimage2 = "dice" + randomnumber2 +".png";

var randomdiceimagesource2 = "images/" + randomdiceimage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomdiceimagesource2);
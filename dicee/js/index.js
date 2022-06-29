// Generating randomNumber1
var randomNumber1 = Math.random();
randomNumber1 *= 6;
randomNumber1 = Math.floor(randomNumber1);
randomNumber1++;

// Generating randomNumber2
var randomNumber2 = Math.random();
randomNumber2 *= 6;
randomNumber2 = Math.floor(randomNumber2);
randomNumber2++;

// New Images
var images1 = "images/dice"+ randomNumber1 +".png";
var images2 = "images/dice"+ randomNumber2 +".png";

//Changinng the images
document.querySelector(".img1").setAttribute("src", images1);
document.querySelector(".img2").setAttribute("src", images2);

//Displaying the result
if ( randomNumber1 > randomNumber2 ) {
    document.querySelector("h1").textContent="🚩 Player1 wins!";
} else if ( randomNumber2 > randomNumber1 ) {
    document.querySelector("h1").textContent="Player2 wins! 🚩";
} else {
    document.querySelector("h1").textContent="Draw!";
}
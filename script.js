const current = document.getElementById("image1");

current.addEventListener("click", (event) => {
   event.target.style.background = "red";
   event.target.style.color = "white";
   alert("This is an Audi car");


});

const current1 = document.getElementById("image2");

current1.addEventListener("click", (event) => {
   event.target.style.background = "blue";
   event.target.style.color = "white";
   alert("This is a Bentley car");

})

const current2 = document.getElementById("image3");

current2.addEventListener("click", (event) => {
   event.target.style.background = "rebeccapurple";
   event.target.style.color = "white";
   alert("This is a Buggati car");

})

const current3 = document.getElementById("image4");

current3.addEventListener("click", (event) => {
   event.target.style.background = "firebrick";
   event.target.style.color = "white";
   alert("This is a Ferrari car");

})

const current4 = document.getElementById("image5");

current4.addEventListener("click", (event) => {
   event.target.style.background = "green";
   event.target.style.color = "white";
   alert("This is a Lamborghini car");

});

const current5 = document.getElementById("image6");

current5.addEventListener("click", (event) => {
   event.target.style.background = "crimson";
   event.target.style.color = "white";
   alert("This is a Lexus car");

});

const current6 = document.getElementById("imagee");

current6.addEventListener("click", (event) => {
   event.target.style.background = "azure";
   event.target.style.color = "blue";
   alert("This is a Mercedes car");

});

const current7 = document.getElementById("imageee");

current7.addEventListener("click", (event) => {
   alert("This is a Rolls Royce car");

   setTimeout(() => {
   alert("Thanks for checking us out!");
   }, 1000);

});
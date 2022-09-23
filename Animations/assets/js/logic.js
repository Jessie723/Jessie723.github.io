// select the initial image from the DOM and set it to a variable called "start"
let starter = document.getElementById("first");

// create an array of the rest of the image sources/frames called imageArray
let imgArray =  [
    "assets/imgs/Asset19.png",
    "assets/imgs/Asset20.png",
    "assets/imgs/Asset21.png",
    "assets/imgs/Asset22.png",
    "assets/imgs/Asset23.png",
    "assets/imgs/Asset24.png",
    "assets/imgs/Asset25.png",
    "assets/imgs/Asset26.png",
    "assets/imgs/Asset27.png",
]

// variabel for the counter, equallling zero
let count = 0;

// function to cycle through array
function animate() {
    starter.src = imgArray[count];
    // increase count 
    count++;
    // increase the count through the length ot the array 
    if (imgArray.length == count) {
        // Reset and replay the array 
        count = 0;
    }
}

setInterval(animate, 100);


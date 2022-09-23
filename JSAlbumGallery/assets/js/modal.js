// Get modal and Get Images
let modal = document.getElementById("myModal");
let images = document.querySelectorAll(".images");

// Get Image Box
let imageBox = document.getElementById("modalImg");


for( let i = 0; i < images.length; i++) {
    //Iterate through each of the images
    let img = images[i];
    img.onclick = function(e) {
        modal.style.display ='block';
        imageBox.src = this.src;
    }
};

// Close out Modal
let exit = document.getElementById("X");

exit.onclick = function() {
    modal.style.display = "none";
}
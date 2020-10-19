let galleryImages = document.querySelectorAll(".gallery-img");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

if(galleryImages) {
    galleryImages.forEach(function(image, index) {
        image.onclick = function() {
            let getElementCSS = window.getComputedStyle(image);
            let getFullImageUrl = getElementCSS.getPropertyValue("background-image");
            let getImageUrlPos = getFullImageUrl.split("/images/thumbs/");
            let setNewImageUrl = getImageUrlPos[1].replace('")', '');

            getLatestOpenedImg = index + 1;

            let container = document.body;
            let newImageWindow = document.createElement("div");
            container.appendChild(newImageWindow);
            newImageWindow.setAttribute("class", "img-window");
            newImageWindow.setAttribute("onclick", "closeImg()");

            let newImage = document.createElement("img");
            newImageWindow.appendChild(newImage);
            newImage.setAttribute("src", "../images/" + setNewImageUrl);
            newImage.setAttribute("id", "current-img");

            /*function for next and prevoius buttons*/
            newImage.onload = function(){
            let imgWidth = this.width;
            let calcImageToEdge = ((windowWidth - imgWidth) /2 - 80);
   
            /* Next Button */
            let newNextBtn = document.createElement("a");
            let btnNextText = document.createTextNode("Next");
            newNextBtn.appendChild(btnNextText);
            container.appendChild(newNextBtn);
            newNextBtn.setAttribute("class", "img-btn-next");
            newNextBtn.setAttribute("onclick", "changeImg(1)");
            newNextBtn.style.cssText = "right: " + calcImageToEdge + "px;";

            /* Previous Button */
            let newPrevBtn = document.createElement("a");
            let btnPrevText = document.createTextNode("Prev");
            newPrevBtn.appendChild(btnPrevText);
            container.appendChild(newPrevBtn);
            newPrevBtn.setAttribute("class", "img-btn-prev");
            newPrevBtn.setAttribute("onclick", "changeImg(0)");
            newPrevBtn.style.cssText = "left: " + calcImageToEdge + "px;";
            }

            
            
        }
    });

}

/*function to close image in pop up container */
function closeImg(){
    document.querySelector(".img-window").remove();
/* remove buttons after closing */
    document.querySelector(".img-btn-next").remove();
    document.querySelector(".img-btn-prev").remove();
}

function changeImg(changeDir) {
    document.querySelector("#current-img").remove();

    let getImgWindow = document.querySelector(".img-window");
    let newImage = document.createElement("img");
    getImgWindow.appendChild(newImage);

    let calcnewImg;
    if(changeDir === 1){
        calcnewImg = getLatestOpenedImg + 1;
        if(calcnewImg > galleryImages.length){
            calcnewImg = 1;
        }

    }
    else if(changeDir === 0){
        calcnewImg = getLatestOpenedImg - 1;
        if(calcnewImg < 1){
            calcnewImg = galleryImages.length;
        }
    }

    newImage.setAttribute("src", "../images/img" + calcnewImg + ".jpg");
    newImage.setAttribute("id", "current-img");

    getLatestOpenedImg = calcnewImg;

    newImage,onload = function() {
        let imgWidth = this.width;
        let calcImageToEdge =((windowWidth - imgWidth) / 2) - 80;

        let nextBtn = document.querySelector("img-btn-next");
        nextBtn.style.cssText = "right:" + calcImageToEdge + "px;";

        let prevBtn = document.querySelector("img-btn-prev");
        prevBtn.style.cssText = "left:" + calcImageToEdge + "px;";
    }
}


console.log(changeDir);
console.log();
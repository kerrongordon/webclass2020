
window.onload = function() {

    var i = 0; // Start point
    var images = [];
    var times = 4000;

    //image list
    images[0] = './IMAGES/image1.jpg';
    images[1] = './IMAGES/image2.jpg';
    images[2] = './IMAGES/image3.jpg';
    images[3] = './IMAGES/image4.jpg';
    images[4] = './IMAGES/image5.jpg';
    images[5] = './IMAGES/image6.jpg';
    //change image
    function changeimg(){
        document.slide.src = images[i];
        
        if( i < images.length - 1){
            i++;
        } else {
            i = 0;
        }

        setTimeout(function() { changeimg(); }, times);
        
    }

    changeimg();
}











window.onload = function() {

    var i = 0; // Start point
    var images = [];
    var times = 4000;

    //image list
    images[0] = './IMAGES/1.jpg';
    images[1] = './IMAGES/2.jpg';
    images[2] = './IMAGES/3.jpg';
    images[3] = './IMAGES/4.jpg';
    images[4] = './IMAGES/5.jpg';
    images[5] = './IMAGES/6.jpg';
    images[6] = './IMAGES/7.jpg';
    images[7] = './IMAGES/8.jpg';
    images[8] = './IMAGES/9.jpg';
    images[9] = './IMAGES/10.jpg';
    images[10] = './IMAGES/14.jpg';
    images[10] = './IMAGES/15.jpg';
    images[10] = './IMAGES/13.jpg'; 
    images[10] = './IMAGES/cloie.jpg'; 
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
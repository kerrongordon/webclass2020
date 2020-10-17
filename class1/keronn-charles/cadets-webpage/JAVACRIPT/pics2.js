window.onload = function() {

    var i = 0; // Start point
    var images = [];
    var times = 4000;

    //image list
    images[0] = './IMAGES/index page images/1.jpg';
    images[1] = './IMAGES/index page images/2.jpg';
    images[2] = './IMAGES/index page images/3.jpg';
    images[3] = './IMAGES/index page images/4.jpg';
    images[4] = './IMAGES/index page images/5.jpg';

    //change image
    function changeimg(){
        document.slide2.src = images[i];
        
        if( i < images.length - 1){
            i++;
        } else {
            i = 0;
        }

        setTimeout(function() { changeimg(); }, times);
        
    }

    changeimg();
}
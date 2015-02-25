//when the document is ready, initilize the image set;
$(document).ready(function(){
    init_images();
});


function init_images(){
    //this will set up our image area at startup
}

function prev_image(){
    //this will shift our images so the previous image is visible
}

function next_image(){
    //this will shift our images so the next image is visible
}


function test_it(){
    $("#display_area > img").animate(
        {
            left:'-100%',

        }, 2000, function(){
            //alert("it's DONE!");
        });
}
function test_it2(){
    $("#display_area > img").animate(
        {
            left:'0',

        }, 2000, function(){
            //alert("it's DONE!");
        });
}















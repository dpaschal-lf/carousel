//when the document is ready, initilize the image set;
$(document).ready(function(){
    init_images();
});
var picture_array = [];  //this will hold all of our pictures in an array
var current_picture = null;  //the index of the picture that is currently visible

function init_images(){
    //this will set up our image area at startup
    
    picture_array = $("#display_area > img"); //populate our picture_array with all the images in the display area
    for(var i = 1; i< picture_array.length; i++) //iterate through each EXCEPT the first
    {
        $(picture_array[i]).css('left','100%'); //move each item to the RIGHT 
    }
    current_picture = 0;
    $("#next_image_control").click(function(){
        console.log("going to next image");
        next_image();
    });
    $("#prev_image_control").click(function(){
        console.log("going to prev image");
        prev_image();
    });
    
}

function prev_image(){
    //this will shift our images so the previous image is visible
    //move my current picture to the left
    console.log("in prev image");
    $(picture_array[current_picture]).animate(
    {
            left:'100%',
    }, 
    2000, 
    function(){
        console.log("done moving current image");
    });
    //move my next picture onto the stage
    $(picture_array[current_picture-1]).animate(
    {
            left:'0%',
    }, 
    2000, 
    function(){
        console.log("done moving previous image");
    });
    current_picture--;
}

function next_image(){
    //this will shift our images so the next image is visible
    //move my current picture to the left
    $(picture_array[current_picture]).animate(
    {
            left:'-100%',
    }, 
    2000, 
    function(){
        //alert("it's DONE!");
    });
    //move my next picture onto the stage
    $(picture_array[current_picture+1]).animate(
    {
            left:'0%',
    }, 
    2000, 
    function(){
        //alert("it's DONE!");
    });
    current_picture++;
}


function test_it(){
    $("#display_area > img").animate(
    {
            left:'-100%',
    }, 
    2000, 
    function(){
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
















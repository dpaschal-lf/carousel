//when the document is ready, initilize the image set;
$(document).ready(function(){
    init_images();
});
var picture_array = [];  //this will hold all of our pictures in an array
var current_picture = null;  //the index of the picture that is currently visible
var next_picture = null;
var transition_speed = 500;

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
function prepare_right()
{
    for(var i = 0; i< picture_array.length; i++) //iterate through each EXCEPT the first
    {
        if(i != current_picture)
        {
            $(picture_array[i]).css('left','100%'); //move each item to the RIGHT 
        }
    }
}
function prepare_left()
{
    for(var i = 0; i< picture_array.length; i++) //iterate through each EXCEPT the first
    {
        if(i != current_picture)
        {
            $(picture_array[i]).css('left','-100%'); //move each item to the LEFT 
        }
    }
}

function prev_image(){
    //this will shift our images so the previous image is visible
    //move my current picture to the left
    console.log("in prev image");
    next_picture = current_picture-1;
    if(next_picture <=0)
    {
        prepare_left();
        next_picture=picture_array.length-1;
    }
    $(picture_array[current_picture]).animate(
    {
            left:'100%',
    }, 
    transition_speed, 
    function(){
        console.log("done moving current image");
    });
    //move my next picture onto the stage
    $(picture_array[next_picture]).animate(
    {
            left:'0%',
    }, 
    transition_speed, 
    function(){
        console.log("done moving previous image");
    });
    current_picture=next_picture;
}

function next_image(){
    //this will shift our images so the next image is visible
    //move my current picture to the left
    next_picture = current_picture+1;
    if(next_picture >= picture_array.length)
    {
        prepare_right();
        next_picture=0;
    }
    $(picture_array[current_picture]).animate(
    {
            left:'-100%',
    }, 
    transition_speed, 
    function(){
        //alert("it's DONE!");
    });
    //move my next picture onto the stage
    $(picture_array[next_picture]).animate(
    {
            left:'0%',
    }, 
    transition_speed, 
    function(){
        //alert("it's DONE!");
    });
    current_picture=next_picture;
}



















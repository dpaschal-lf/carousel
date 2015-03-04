//when the document is ready, initilize the image set;
$(document).ready(function(){
    init_images();
});
var picture_array = [];  //this will hold all of our pictures in an array
var indicator_array = [];
var current_picture = null;  //the index of the picture that is currently visible
var next_picture = null;
var transition_speed = 500;
var indicator_container;

function init_images(){
    //this will set up our image area at startup
    indicator_container= $("#indicator_container");
    picture_array = $("#display_area > img"); //populate our picture_array with all the images in the display area
    for(var i = 1; i< picture_array.length; i++) //iterate through each EXCEPT the first
    {
        $(picture_array[i]).css('left','100%'); //move each item to the RIGHT 
    }
    current_picture = 0;
    $("#next_image_control").click(function(){
        next_image();
    });
    $("#prev_image_control").click(function(){
        prev_image();
    });
    console.log(picture_array.length);
    
    //make indicator divs
    for(var i=0; i< picture_array.length; i++)
    {
        var indicator = $("<div>").addClass('indicator_dot');
        if(i==current_picture)
        {
            indicator.addClass('indicator_dot_active');
        }
        indicator_array.push(indicator);
        indicator_container.append(indicator);    
    }
    
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
function change_dots()
{
    $(".indicator_dot_active").removeClass("indicator_dot_active");
    $(indicator_array[current_picture]).addClass("indicator_dot_active");
}

function prev_image(){
    //this will shift our images so the previous image is visible
    //move my current picture to the left
    console.log("current picture = ",$(picture_array[next_picture]).position());
    next_picture = current_picture-1;
    if(next_picture<0)
    {
        next_picture=picture_array.length-1;
    }
    if($(picture_array[next_picture]).position().left>=0)
    {
       console.log("not ready");
        
        $(picture_array[next_picture]).css('left','-100%');
    }
    $(picture_array[current_picture]).animate(
    {
            left:'100%',
    }, 
    transition_speed, 
    function(){
    });
    //move my next picture onto the stage
    $(picture_array[next_picture]).animate(
    {
            left:'0%',
    }, 
    transition_speed, 
    function(){
    });
    current_picture=next_picture;
    change_dots();
}

function next_image(){
    //this will shift our images so the next image is visible
    //move my current picture to the left
    next_picture = current_picture+1;
    if(next_picture >= picture_array.length)
    {
        next_picture=0;
    }
    if($(picture_array[next_picture]).position().left<=0)
    {
       console.log("not ready");
        
        $(picture_array[next_picture]).css('left','100%');
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
    change_dots()
}



















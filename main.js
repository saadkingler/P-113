function preload()
{

}

function setup() 
{ 
    canvas = createCanvas(640, 480); 
canvas.position(110, 250); 
video = createCapture(VIDEO); 
video.hide(); tint_color = ""; 
} 
function draw() 
{ 
    image(URL="https://www.finsmes.com/wp-content/uploads/2016/09/google.jpg"); 
    tint(tint_color); 
}

function take_snapshot()
{ 
    save('student_name.png'); 
}

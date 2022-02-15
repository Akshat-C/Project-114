moustache = 0;
lipstick = 0;
noseX = "";
noseY = "";
tint_value = "";
function preload()
{
    i1 = loadImage('https://i.postimg.cc/V6sTdsBR/Moustache.png');
    i2 = loadImage('https://i.postimg.cc/6p3FWpcf/imageedit-1-5826119281.png')
}

function setup(){
    canvas = createCanvas(400, 350);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(400, 350);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw()
{
    image(video, 0, 0, 400, 350);
   
    if (moustache == 1)
    {
        image(i1, noseX, noseY, 70, 60);
        tint(tint_value);
    } 
    
    if (lipstick == 2)
    {
        image(i2, noseX+10, noseY+30, 50, 40);
        tint(tint_value);
    }
    
}

function save_img()
{
    save("Realtime Filter.png");
}

function modelLoaded()
{
    console.log("Posenet is Initialised");
}

function gotPoses(results)
{
    if (results.length > 0 )
    {
        console.log(results);

        noseX = results[0].pose.nose.x-35;
        noseY = results[0].pose.nose.y-10;
        console.log("Nose X is: " + noseX + "Nose Y is: " + noseY);
    }
}

function change_tint()
{
    tint_value = document.getElementById("tint_color").value;
}

function add_moustache()
{
    moustache = 1;
}

function add_lipstick()
{
    lipstick = 2; 
}

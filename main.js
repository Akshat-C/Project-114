function preload()
{}

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

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X is: " + noseX + "Nose Y is: " + noseY);
    }
}
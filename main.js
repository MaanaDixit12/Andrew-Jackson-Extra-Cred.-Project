noseX = 0;
noseY = 0;

function preload(){
    adams = loadImage('adams.png');
}

function setup(){
    canvas = createCanvas(200,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(adams, noseX, noseY, 350, 650);
}

function take_snapshot(){
    save('Jackson VS Adams.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-150;
        noseY = results[0].pose.nose.y-+130;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}
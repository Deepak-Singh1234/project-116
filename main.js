noseX=0; 
noseY=0;

rightEyex=0;
rightEyey=0;

rightShoulderx=0;
rightShouldery=0;

leftShoulderx=0;
leftShouldery=0;


function preload(){
    image1 = loadImage("https://i.postimg.cc/8c1BCpMc/th.jpg");
    image2 =loadImage("https://i.postimg.cc/nLfPNnnx/thormjolnir.jpg");
    image3 =loadImage("https://i.postimg.cc/gj7MsWgf/thoreyepatch.jpg");
    image4 =loadImage("https://i.postimg.cc/c1vPK99V/thor-axe.jpg");
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}
function modelLoaded(){
    console.log("Model is travelling from china to India");

}
function draw(){
   image(video,0,0,300,300);
   /*fill(0,0,0); 
   stroke(255,0,0); 
   circle(noseX, noseY, 20);*/
   image(image1 , nosex-10 , nosey-10 , 30 , 30);
   image235(image2 , leftShoulderx , leftShouldery , 30 , 30);
   image456(image3 , rightEyex , rightEyey , 30 , 30);
   image128(image4 , rightShoulderx , rightShouldery , 30 , 30);
   
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x; noseY = results[0].pose.nose.y;
        console.log("nosex = "+nosex);
        console.log("nosey = "+nosey);
    }
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        leftShoulderX = results[0].pose.leftShoulder.x;
        leftShoulderY = results[0].pose.leftShoulder.y;
        console.log("leftShoulderx = "+leftShoulderx);
        console.log("leftShouldery = "+leftShouldery);
    }
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        rightShoulderX = results[0].pose.rightShoulder.x; 
        rightShoulderY = results[0].pose.rightShoulder.y;
        console.log("rightShoulderx = "+rightShoulderx);
        console.log("rightShouldery = "+rightShouldery);
    }
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        rightEyeX = results[0].pose.rightEye.x; 
        rightEyeY = results[0].pose.rightEye.y;
        console.log("rightEyex = "+rightEyex);
        console.log("rightEyey = "+rightEyey);
    }
}


function take_snapshot(){
    save('myimage.jpg');
}







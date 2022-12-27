nosex=0;
nosey=0;

function preload(){

    clownNose=loadImage('https://i.postimg.cc/L4cxv0h9/clown-nose-clipart-2.png');


}

function setup(){


canvas=createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
video.size(400,400);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);



}

function draw(){

image(video,0,0,400,400);
image(clownNose,nosex,nosey,20,20);

}



function take_snapshot(){

save('filter.png');

}

function modelLoaded(){


console.log('poseNet is loaded');



}

function gotPoses(results){

if(results.length>0){

console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("nose x = "+noseX);
console.log("nose y = "+noseY);
};

}



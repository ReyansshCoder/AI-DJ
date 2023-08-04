song="";
my_model="";
lwx=0;
lwy=0;
rwx=0;
rwy=0;
scrrw=0;
scrlw=0;

function preload(){
    song=loadSound("music.mp3")
}

function play(){
    song.play();
}

function setup(){
canvas=createCanvas(500,500);
canvas.center()
chitra=createCapture(VIDEO);
chitra.hide()
my_model=ml5.poseNet(chitra,modelLoaded)
my_model.on('pose',gotPoses)
}

function modelLoaded(){
    console.log("your model has been loaded for more quiry/anquire pls go idc")
}

function gotPoses(results){
if(results.length>0){
lwx=results[0].pose.leftWrist.x;
rwx=results[0].pose.rightWrist.x;
lwy=results[0].pose.leftWrist.y;
rwy=results[0].pose.rightWrist.y;
scrrw=results[0].pose.keypoints[10].score;
scrlw=results[0].pose.keypoints[9].score;
console.log("x pos lw:", lwx)
console.log("x pos rw:", rwx)
console.log("y pos rw:", rwy)
console.log("y pos lw:", lwy)
console.log("acc of rw: ", scrrw)
console.log("acc of lw: ", scrlw)
}
}

function draw(){
image (chitra, 0, 0, 500,500)

fill ("red")

if(scrrw>0.2){
    circle (rwx,rwy,20)
if(rwy>0 && rwy<100){
    document.getElementById("speed").innerHTML="Speeeeed=0.5";
song.rate(0.5)
}
else if(rwy>100 && rwy<200){
    document.getElementById("speed").innerHTML="speed=1";
    song.rate(1)
}
else if(rwy>200 && rwy<300){
    document.getElementById("speed").innerHTML="speed=1.5";
    song.rate(1.5)
}
else if(rwy>300 && rwy<400){
document.getElementById("speed").innerHTML="speed=2";
song.rate(2)
}
else if(rwy>400){
    document.getElementById("speed").innerHTML="speed=2.5";
    song.rate(2.5)}}

if(scrlw>0.2){
circle (lwx,lwy,20)
if(lwy>0 && lwy<100){
    document.getElementById("volume").innerHTML="Volume=0.2";
    song.setVolume(0.2)
}
else if(lwy>100 && lwy<200){
    document.getElementById("volume").innerHTML="Volume=0.5";
    song.setVolume(0.5)

}
else if(lwy>200 && lwy<300){
    document.getElementById("volume").innerHTML="volume=0.7";
song.setVolume(0.7)
}
else if(lwy>300 && lwy<400){
    document.getElementById("volume").innerHTML="volume=0.85";
    song.setVolume(0.85)
}

else if(lwy>400){
    document.getElementById("volume").innerHTML="volume=1.0";
    song.setVolume(1)
}

}


}
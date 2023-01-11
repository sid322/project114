function preload(){

}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on("pose",gotPoses);
}
function modelloaded(){
    console.log("poseNet is initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("rightEye x = "+results[0].pose.rightEye.x);
        console.log("rightEye y = "+results[0].pose.rightEye.y);
    }
    }
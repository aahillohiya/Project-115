function preload() {}

function setup() {
  canvas = createCanvas(640,480);
  canvas.position(300,300);

  video = createCapture(VIDEO);
  video.size(640,480);
  video.hide();

  poseNet = ml5.poseNet(video,modelLoaded);

  poseNet.on('pose',gotPoses);

}

function draw() {
    
    image(video,10,10,640,480);
}

function Take_snapshot() {
    save('AAHIL_LOHIYA_1.png');
}

function modelloaded() {
  console.log("Modelloaded");
}

function gotPoses(results) {
    console.log(results);
}
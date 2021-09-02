difference = 0;
noseX=0;
noseY=0;

function draw() {
background(255, 204, 100);
  fill('rgba(0,255,0, 0.25)');
rect(20, 20, 60, 60);
  stroke('rgba(0,255,0,0.25)');
strokeWeight(4);
  

  document.getElementById("rect_width").innerHTML = "Width And Height of Rectangle will be = " + difference +"px";
  

  rect(noseX, noseY, difference, difference);
}

  function setup() {

  if(windowWidth <= 800){
      canvas = createCanvas(350, 350);
      video = createCapture(VIDEO);
      video.position(40,350);
      video.size(300, 250);
       canvas.position(50, 650);
     
      
    }else{
      canvas = createCanvas(500, 400);
      video = createCapture(VIDEO);
      video.position(50,300);
      video.size(500, 500);
      canvas.position(740, 320);
    }

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Model Loaded!');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    // console.log(results);
    noseX = floor(results[0].pose.nose.x);
    noseY = floor(results[0].pose.nose.y);
    console.log("noseX = " + noseX +" noseY = " + noseY);

    rightWristX = floor(results[0].pose.rightWrist.x);
    leftWristX = floor(results[0].pose.leftWrist.x);
    difference = leftWristX - rightWristX;

    console.log("rightWristX = " + rightWristX + " leftWristX = "+leftWristX + " difference = " + difference);
  }
}


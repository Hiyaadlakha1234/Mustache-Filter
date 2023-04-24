function preload() {
    pic = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
noseX = "";
noseY = "";

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    cameraa = createCapture(VIDEO);
    cameraa.size(300, 300);
    cameraa.hide();
    posenettt = ml5.poseNet(cameraa, modelLoaded);
}
function savepic() {
    save("mypicture.png");
}
function draw() {
    image(cameraa, 0, 0, 300, 300);
    fill("yellow");
    stroke("black");
    image(pic, noseX, noseY, 50, 50);

}

function modelLoaded() {
    console.log("Pose net initialized sucessfully");
    posenettt.on("pose", getResults);
}

function getResults(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x-23;
        noseY = results[0].pose.nose.y-10;
        console.log("noseX :", noseX);
        console.log("noseY :", noseY);
    }
}
// this will find the canvas and draw a rectangle with the technique name on it

function addTechnique(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText("Technique", 10, 50);
}
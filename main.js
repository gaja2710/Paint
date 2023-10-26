canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

width = 1;
colour = "green";
mouseEvent = "";
var last_x, last_y;
var current_x, current_y;

canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e) {
    colour = document.getElementById("colour").value;
    width = document.getElementById("width").value;
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e) {
    colour = document.getElementById("colour").value;
    width = document.getElementById("width").value;
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width;
        ctx.moveTo(last_x, last_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
        console.log(last_x, last_y);
    }
    last_x = current_x;
    last_y = current_y;
}
new_width = screen.width - 50;
new_height = screen.height - 340;
if (screen.width < 992) {
    canvas.width = new_width;
    canvas.height = new_height;
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", mytouchstart);

function mytouchstart(e) {
    console.log("mytouchstart");
    last_x = e.touches[0].clientX - canvas.offsetLeft;
    last_y = e.touches[0].clientY - canvas.offsetTop;

}
canvas.addEventListener("touchmove", mytouchmove);
function mytouchmove(e) {
    colour = document.getElementById("colour").value;
    width = document.getElementById("width").value;
    current_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_touch_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = colour;
    ctx.lineWidth = width;
    ctx.moveTo(last_x, last_y);
    ctx.lineTo(current_touch_x, current_touch_y);
    ctx.stroke();
    console.log(last_x, last_y);
    last_x = current_touch_x;
    last_y = current_touch_y;
    console.log(current_touch_x, current_touch_y)
}
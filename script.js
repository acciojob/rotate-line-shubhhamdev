//your JS code here. If required.
// script.js

function rotateLine() {
    var line = document.getElementById("line");
    var rotationDegree = 360; // Change this value to adjust the rotation angle (in degrees)

    line.style.transform = `rotate(${rotationDegree}deg)`;
}

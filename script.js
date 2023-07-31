//your JS code here. If required.
// script.js
        var rotationDegree = 0;

        function rotateLine() {
            var line = document.getElementById("line");
            line.style.transform = `rotate(${rotationDegree}deg)`;
            rotationDegree += 1; // Change this value to adjust the rotation speed
            requestAnimationFrame(rotateLine);
        }

        rotateLine();
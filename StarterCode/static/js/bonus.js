//Bonus 

function buildGauge(wfreq) {
    // Entering the washing frequency 
    var level = paresFloa(wfreq) * 20;

    // Trig to calc meter point
    var degrees = 180 - level;
    var radius = 0.5;
    var radians - (degrees * Math.PI) / 180;
    var x = radius * Math.cos(radians);
    var y = radius * Math.sin(radians);

    
}
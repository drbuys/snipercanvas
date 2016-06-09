window.onload = function() {
    console.log( "We're here!" );
    var canvas = document.getElementById('main');
    console.log(canvas);

    var context = canvas.getContext('2d');
    context.shadowBlur = 50;
    context.shadowColor = 'black';
    // context.fillStyle = "red";
    var grd=context.createLinearGradient(0,0,400,0);
    grd.addColorStop(0,"black");
    grd.addColorStop(1,"white");

    // context.fillStyle=grd;
    // context.fillRect(50, 50, 500, 200);
    // context.clearRect(45,45,60,60);
    // context.strokeRect(50,50,50,50);

    context.beginPath();
    context.moveTo( 100, 100 );
    context.lineTo(100, 150 );
    context.lineTo(150, 150 );
    context.lineTo(250, 200 );
    context.lineTo(450, 200 );
    context.lineTo(450, 100 );
    context.lineTo(150, 100 );
    context.stroke();

//     var gradient = context.createRadialGradient(100,100,100,100,100,0);
// gradient.addColorStop(0,"white");
// gradient.addColorStop(1,"pink");
// context.fillStyle = gradient;
// context.fillRect(0,0,600,300);

    // context.beginPath();
    // context.arc(300,150,100,0,2*Math.PI);
    // context.stroke();
    // context.beginPath();
    // context.arc(300,150,90,0,2*Math.PI);
    // context.stroke();
    // context.beginPath();
    // context.arc(300,150,80,0,2*Math.PI);
    // context.stroke();
    // context.beginPath();
    // context.arc(300,150,70,0,2*Math.PI);
    // context.stroke();
    // context.beginPath();
    // context.arc(300,150,60,0,2*Math.PI);
    // context.stroke();
    // context.beginPath();
    // context.arc(300,150,50,0,2*Math.PI);
    // context.stroke();

    var drawCircle = function(x, y) {
    context.beginPath();
    context.arc(x-340,y-70,50,0,2*Math.PI);
    context.stroke();
};

    canvas.onclick = function(event) {
        console.log(event);

        drawCircle(event.x, event.y);

    };


};

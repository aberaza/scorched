console.log("File loaded");

var canvas = document.getElementById('main');

var c = canvas.getContext('2d');

function drawBackground(){
    c.fillStyle="rgb(50,50,200)";
    c.fillRect(0,0,640,480);
}

/* remove
var TERRAIN = [];
for(var j = 0; j<640;j++){
    TERRAIN.push(j%400);
}
*/

function drawTerrain(){
    c.fillStyle = "rgb(200,128,30)";
    var x=0;
    TERRAIN.forEach(function(h){c.fillRect(x++,480, 1, -h);});
}

function generateTerrain(){
    /*
     * To generate the terrain we will use a field of 700x500. Then it will be windowed to the canvas size:
     * The canvas is set at x=30 y=30 respect to the generated terrain.
     *
     * Create a random number of points. Assign them a "height value", x position, a power and decay value.
     * height defines the height at the point. power the strength of its influence. Influence decay
     * with distance to the point linealry
     */

    var nbPoint = Math.floor(Math.random()*8) + 2;
    var cumulatedWidth = 0;
    var pointsList=[];
    while(nbPoint>0, nbPoint--){
        var x = cumulatedWidth = Math.floor(Math.random() * ((700 -cumulatedWidth)/nbPoint) + cumulatedWidth);

        var y = Math.floor(Math.random() * 500);
        var width = Math.floor(Math.random() * 10);
        var decay = Math.random()/10 + 0.001;

        pointsList.push({
            x : x,
            y : y,
            width : width,
            decay : decay
        });
    }
    /*
     * Then calculate the height for X point of the terrain between 30 and 670
     */

    var terrain = [];
    var bias = 30;
    for (var i = 30; i < 670; i++){
        var value = pointsList.reduce(function(previous, point){
            var dist = Math.abs(point.x - i);
            var height = point.y;
            if(dist > point.width){
                height *= 1/(1 + point.decay * dist);
            }else{
                height *= Math.cos(point.decay * dist);
            }
            return previous + height; //point.y*point.power * (dist > point.width ? 1/(1+point.decay * Math.abs(point.x - i )): 1 );
        },-30);
        terrain.push(value>0?value : 0);
    }

    console.log("Terrain generated");
    console.dir(terrain);
    return terrain;
}




drawBackground();
var TERRAIN = generateTerrain();
drawTerrain();

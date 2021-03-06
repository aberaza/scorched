require(["js/tank.js", "js/terrain.js"], function(Tank, Terrain){
    console.log("loaded!");
    
    var canvas = document.getElementById('main');

    var c = canvas.getContext('2d');

    function drawBackground(){
        c.fillStyle="rgb(50,50,200)";
        c.fillRect(0,0,640,480);
    }

    function getTankPositions(nbTanks){
        var dMin = 50; //Minimum distance between tanks
        var delta =640/nbTanks - dMin;
        var lastTank;
        var positions = [];
        //first tank:
        positions[0] = lastTank = Math.floor(Math.random() * delta) + 5;

        for(var i = 1; i<nbTanks; i++){

            positions[i] = lastTank = Math.floor(((640 - lastTank)/(nbTanks - i) - dMin)*Math.random() + dMin);
        }

        return positions;
    }

    function startMatch(playersList){
        drawBackground();
        Terrain.generate();
        Terrain.draw(c);
        var positions = getTankPositions(5);
        var tank;

        console.dir(Terrain.TERRAIN);
        positions.forEach(function(position){
            tank = new Tank("algo", "algo más", "algo menos");
            tank.draw(position, Terrain.TERRAIN, c);
        });
    }

    startMatch([]);
});

/* remove
var TERRAIN = [];
for(var j = 0; j<640;j++){
    TERRAIN.push(j%400);
}
*/




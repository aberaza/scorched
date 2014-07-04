

var Tank = function Tank(type, name, color){
    this.type = type;
    this.name = name;
    this.color = color;

    this.money = 0;

    this.x = 0;
    this.y = 0;

    this.power = 0;

    this.weapons = [];
    this.shields = [];
    
    this.stuff = [];

    this.inteligence;

    this.setInteligence = function(inteligence){
        this.inteligence = inteligence;
    };


    this.turn = function(){
    };

    this.matchEnd = function(money){
        this.money += money;
    };

    this.doShopping = function(){
    }
}



var Inteligence = function Inteligence(name){
    this.shoot = function (players, terrain, lastEnemy, lastAngle, lastPower, lastHitPosition, weapons){
    };

    this.shop = function (weapons, shields, stuff, money){
    };

    this.startTurn = function (shields, stuff){
    };
}

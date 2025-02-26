

function program() {
    
    title("Bluey The Circle 2");
    size(800, 600);
    
    // All code goes here
	

//jshint undef: true


/* jshint latedef: true */

noSmooth();

var g = createGraphics(width, height, P2D/JAVA2D);

var frtimer = 0;

// Put save code stuff in here
var savecode = [0, 0];

var x;
var scene = "lvls";// scene switcher, if bugtester or helper then changed it to the play scene
var framerate = "60";
var FPS = 60;
var dbug = !!(0);
var dbugmenu = !!(1);
var alterdbug = !!!(1);
var bdbug = !(1);
var winscore = 0;
var cardx = 350;
var cardy = 400;
var altcard = 0;
var eecloud = 200;
var worldnms = ["Emerald Expanse", "Rigid Rock", "Mechanical Madness", " Dusty Desert", "Working Woods", "Casino Central", "Aluminum Acropolis", "Teal Trench", "Isolated Icebergs", "Submerged Seaweed",  "Skyopolis", "Death Cube", "Sugar Shrine"];
var lvlnames = ["EMERALD EXPANSE", "EMERALD EXPANSE", "EMERALD EXPANSE", "RIGID ROCK", "RIGID ROCK", "RIGID ROCK", "MECHANICAL MADNESS", "MECHANICAL MADNESS", "MECHANICAL MADNESS", "DUSTY DESERT", "DUSTY DESERT", "DUSTY DESERT", "WORKING WOODS", "WORKING WOODS", "WORKING WOODS", "CASINO CENTRAL", "CASINO CENTRAL", "CASINO CENTRAL", "ALUMINUM ACROPOLIS", "ALUMINUM ACROPOLIS", "ALUMINUM ACROPOLIS", "TEAL TRENCH", "TEAL TRENCH", "TEAL TRENCH", "ISOLATED ICEBERGS", "ISOLATED ICEBERGS", "ISOLATED ICEBERGS", "SUBMERGED SEAWEED", "SUBMERGED SEAWEED", "SUBMERGED SEAWEED", "SKYOPOLIS", "DEATH CUBE", "DEATH CUBE", "DEATH CUBE", "HIDDEN HANGER"];
var lvlnames2 = ["GREEN GRASSLANDS", "GREEN  GRASSLANDS", "RECKED RUINS", "RECKED RUINS", "LOST LABYRINTH", "LOST LABYRINTH", "AQUA AREA", "AQUA AREA", "CASINO CITADEL", "CASINO CITADEL", "STARLIGHT SECTION", "STARLIGHT SECTION", "CUBE CONFINERY", "CUBE CONFINERY"];
var extralvlnames = ["TACKY TUTORIAL"];
var lvlnames5 = ["SPECIAL STAGE"];
var lvlnames6 = ["GREEN MOUNTAIN", "DUNE DAZZLE", "MARINE DEBRIS", "BOUNCE BOWL", "SHOPPING CENTRE", "PACKAGE PANTRY"];
var lvlnames7 = ["PINA PALMTREE", "ACRAZE AVENUE", "LANGUID LAKE", "CONIFER CUBE", "MISSLE MANIA", "FARM FRACTAL", "WOODEN WONDERS"];
var lvlnames8 = ["AMAZING AMAZON", "LAVENDER LAGOON", "MARBLE MARSHES", "ORANGE PARK", "MEGA METRO", "HILLBILLY HILLTOP", "BOX BLIMP", "LOOPY LAUNCH"];
var lvlnames9 = ["GREEN LAKE", "AQUA TUNNEL", "PRISM PREFECTURE", "MIDNIGHT MADNESS", "HYPNA-DOME", "FROZEN FOREST", "CUBE CASTLE"];

var levelcount = ["1", "2", "3", "1", "2", "3", "1", "2", "3", "1", "2", "3", "1", "2", "3", "1", "2", "3", "1", "2", "3", "1", "2", "3", "1", "2", "3", "1", "2", "3", "X", "1", "2", "2.5", "F"];
var levelcount2 = ["1", "2", "1", "2", "1", "2", "1", "2", "1", "2", "1", "2", "1", "2"];

var challengenames = ["Nightmare Mode", "Golden Cube-nik Hunt", "Heatwave Haze", "Sunset Paradise", "Molten Mania", "Tacky Time", "Giant NXcube hunt", "Midnight Ruins", "Sludge%", "Golden Cube-nik Hunt"];

var challengeD = ["Beat the level without any coins!", "Find a golden NXcube and destroy it!", "Geometry Island has hit a massive heatwave!\n Jump on the cool platforms to make it\n safely", "Beat an alternate version of \n Emerald Expanse!"];
var Tutorialtext = ['Welcome to the tutorial zone!\n Heres a guide to Bluey The Circle 2\n and how it works!', 'Jump over this wall!', 'Heres a slope!\n Go up and down these!'];

var worldata = worldnms + random + ".entityVoid(worldnms, BTC).datavalues.Update();";

var title = "Bluey The Circle 2";

//level vars
var level = 0;
// ----------
var boltyon = true;
var character = 0;
var AdvanceChara = ["Bluey", "Bolty", "Pumpkimp", "Orangy", "Azulette"]; // playable characters in BTC2 (more will be added)
// ----------
var time = 0;
var mode = 0;
var modename = ["Bluey The Circle 2 Base", "Bluey The Circle 1 Revamped", "Special Stage", "Tutorial", "Azulette The Circle Revamped", "Bluey And Bolty Revamped", "Bluey The Circle 3A", "Bluey Dodge Mania"];
var gamemode = mode;
var TA = false;
var ghostM = 0;
// -----------
var spritemode = "Bluey 2";
var Titlecardmode = "Bluey 2";
var objectmode = "Bluey 2";
var windowmode = "All";
// -----------
var Version = "V: 0.2.53xx";
var sphereamount1 = 32;
var sphereamount2 = 45;
var sphereamount3k = 65;
var sscore = 0;
var amount2 = 0;
var amount3 = 0;
var Rubies = 0;
// -----------
var NTSC = true;
var PAL = false;

if(NTSC === true){
    FPS = 60;
}
if(PAL === true){
    FPS = 50;
}

// -----------
var EEZ = [
    level === 0,
    level === 1,
    level === 2,
    
    
    
];
var pallete = [
color(0, 0, 200),
color(0, 221, 255),
color(255, 0, 0),
color(0),



];

var islandsx = 0;

var ttrans = 255;
var ptrans = 0;
var irot = 0;
var Bx = -100;
var deaths = 0;
var Lives = 30;
var transparency = 0;
var amount = 0;
var score = 0;
var chemy = 0;
var externals;
var ctx = externals.context;
var challengeM = false;
var sleeptime = 0;
// Challenge mode vars (Emerald Expanse)
var C1 = false; // No coins mode
var C2 = false; // Golden NXcube hunt
var C3 = false; // Heatwave Haze
var C4 = false; // Sunset Paradise

var C5 = false;

var wchallenge1 = ["Nightmare Mode", "Golden Cube-nik Hunt", "Heatwave Haze", "Sunset Paradise"];
var wcvar = 0;
var chlgesperlvl = 4;

var speedshoes = false;

// frameRate stuff (Green Ghost BTW)
var deltaTime = 0;
var prevTime = millis(); 
var accumulator = 0;
var mainFramez = 45;
var fps = mainFramez; 
var framesRun = 0;
frameRate(FPS);
// intro vars
var bluY = -100;
var boltyX = 700;
var blueRot = 0;
var boltRot = 0;
var bluGain = 10;
var textx = -100;
var texty = 0;
var textY = 0;
var boltW = 0;
var boltH = 0;
var cardx2 = 350;
var x = -10;
    var rot = 0;
    var rot2 = 0;
var x2 = 320;
var pformy = 1;
// -----
var failed = true;// if you failed the stage
var x9 = -400;
var x9A = -900;
var x8 = 1000;
var r1 = -100;
var r2 = -100;
var r3 = -100;
var r4 = -100;
var r5 = -100;
var r6 = -100;
var r7 = -100;
// -----

// logo vars

//Vars{
var timedscene = 0; 
var wstimer = 0;
var x = -10;
    var rot = 0;
    var rot2 = 0;
var x2 = 420;
var wtimer = 0;
var eitim = 0;
var transp = 255;

var vrtxclr = color(216, 126, 252);


var timer = 0;  //Timer For Blinking
var eyx = 0;     //Position of the Eyes x-coordinate
var eyy = 0;      //Position of the Eyes y-coordinate
var cl = 30;       //The Height Of The Eyes
var reblink = 0;    //Makes Bluey Open His Eyes
var bx = -30;        //B x-coordinate
var lx = -36;         //L x-coordinate
var ux = -33;          //U x-coordinate
var ex = -21;           //E x-coordinate
var yx = 4;              //Y x-coordinate
var Tx = 0;               //T x-coordinate
var Hx = 0;                //H x-coordinate
var Ex = 0;                 //E x-coordinate
var Cx = 0;                  //C x-coordinate
var Ix = 0;                   //I x-coordinate
var Rx = 0;                    //R x-coordinate
var cx = 0;                     //C x-coordinate
var Lx = 0;                      //L x-coordinate
var Eex = 201;                    //E x-coordinate
var by = 0;                         //B y-coordinate    
var ly = 0;                        //L y-coordinate
var uy = 0;                       //U y-coordinate
var ey = 0;                      //E y-coordinate
var yy = 0;                     //Y y-coordinate
var Ty = 0;                    //T y-coordinate
var Hy = 0;                   //H y-coordinate
var Ey = 0;                  //E y-coordinate
var Cy = 0;                 //C y-coordinate
var Iy = 0;                //I y-coordinate
var Ry = 0;               //R y-coordinate
var cy = 0;              //C y-coordinate
var Ly = 0;             //L y-coordinate
var Eey = 0;           //E y-coordinate

//}
var timer = 0;
var watert = 0;
var x = -150;
var bubblej = 10;
var rrcloudx = 200;
var rrcloudX = 100;
var titlerot = 0;
var lx = -170;
var deathtime = 0;
var faded = 255;

// -------------
var AA = true;
// -------------
var tsize = 20;
var r1 = -30;
var r2 = -30;
var r3 = -30;
var starot = 0;
var avy = -60;
var invtimer = 0;
var ttimer = 0;
var transtimer = 0;
var s9t = 0;
var poweruptime = 0;
var tim10 = 0;
var waterx = 20;
//timer vars
//button var
var textrot = 0;
var gearot = 0;
var portalt = 0;
var qx = 4;
var qy = 31;
var qy2 = 39;
/** Filters **/
// -------------- //
var crt = false;
var crt2 = false;
var crt3 = false;

var CRTA = false;
// -------------- //
var Sound = true;
// Special Stage vars
var ssx = -100;
var squarer = 0;
var sscale = 0;
var ST = 0;
var rx = 0;
var xj = 300;
var yf = 0;

var srandom = floor(random(0, 9));
var rrandom = floor(random(0, 9));
var eewaterc = floor(random(0, 4));

var bspeed = 5;
var colors = [
    color(216, 126, 252),
];
var colorz = [
    color(255, 0, 0),
    color(255, 86, 0),
    color(255, 255, 0),
    color(0, 255, 0),
    color(5, 166, 48),
    color(0, 255, 255),
    color(0, 0, 255),
    color(148, 0, 148),
    color(255, 0, 255)
    
    
    
];
var cols =  [
    color(255, 0, 0),
    color(255, 86, 0),
    color(255, 255, 0),
    color(0, 255, 0),
    color(5, 166, 48),
    color(0, 255, 255),
    color(0, 0, 255),
    color(148, 0, 148),
    color(255, 0, 255)
    
    
    
];
var watercol = [
    color(0, 221, 255),
    color(0, 123, 255),
    color(8, 104, 194),
    color(0, 77, 255),
    color(0, 166, 255),
    
    ];

noStroke();
background(255, 255, 255, 0);
fill(242, 206, 0);
quad(qx, qy, qx + 7, qy, qx, qy2, qx - 7, qy2);
var ffq = get(0, 27, 10, 10);

//[
    var particles = [];
    var circles = [];
    var grassg = [];
    var blocks = [];
    var pblock = [];
    var ruind = [];
    var bossf = [];
    var bridge = [];
    var badgez = [];
    var gimmick1 = [];
    var movingblock = [];
    var sands = [];
    var windo = [];
    var slope = [];
    var Bigobj = [];
    var zobject = [];
    var goals = [];
    var bblock = [];
    var waterfal = [];
    var spikes = [];
    var magma = [];
    var tramp = [];
    var secondplayerai = [];
    var coin = [];
    var sticky = [];
    var lockb = [];
    var dirts = [];
    var signs = [];
    var cubes = [];
    var unstables = [];
    var lifes = [];
    var grass = [];
    var palm = [];
    var tubez = [];
    var water = [];
    var chepoi = [];
    var tpole = [];
    
    
    var power1 = [];
    var power2 = [];
    var power3 = [];
    var power4 = [];
    
    var chunk = [];
    var chunk2 = [];
    
//]


var messages = [
    "text",
    
    
    
    
    ];
    
    var loadGoogleFont = (function () {
    return this.Function ( "gfName", 
    "gfName = gfName.replace ( /\\s+/g, '+' );" + 
    "var subsets = Array.prototype.slice.call ( arguments, 1, arguments.length - 1 );" + 
    "var url = 'https://fonts.googleapis.com/css?family=' + gfName + ( subsets.length > 0 ? '&amp;subset=' + subsets : '' ), callback = arguments [ arguments.length - 1 ];" +
    "var gfs = document.querySelectorAll('link[href=\"' + url+'\"]');" + 
    "if (!gfs.length) {" + 
        "var f = document.createElement('link');" + 
        "f.setAttribute('rel', 'stylesheet');" + 
        "f.setAttribute('type', 'text/css');" + 
        "f.onload = callback;" +    
        "f.setAttribute('href', url);" + 
        "document.head.appendChild(f);" + 
    "} else if (typeof callback === 'function') {" + 
        "callback.call(gfs[0]);" + 
    "}"
);
})();

loadGoogleFont("Almendra");
loadGoogleFont("Press Start 2P");
loadGoogleFont("Orbitron");
loadGoogleFont("Oxanium");
loadGoogleFont("Creepster");
loadGoogleFont("Cedarville Cursive");
var BF = createFont("Almendra");
var UMF = createFont("Press Start 2P");
var TAF = createFont("Orbitron");
var WSF = createFont("Oxanium");
var PKMPFT = createFont("Creepster");
var AZLFONT = createFont("Cedarville Cursive");
var Smooth = function(pos, dest, div){
    return (dest - pos) / div;
};
(function() {return this;})().LoopProtector.prototype.leave = function() {};// STOP CRASHING

var DeKhan = (function() {
    /* Regular expressions derived from Element118 delag() function. */
    var plusPlusExp = new RegExp("__env__\\.KAInfiniteLoopCount\\+\\+;\\n", "g");
    var ifClauseExp = new RegExp("\\n\\s*if \\(__env__\\.KAInfiniteLoopCount > 1000\\) {[\\s]+__env__\\.KAInfiniteLoopProtect\\('[^']*'\\);[^}]+}", "g");
    var newExp = new RegExp("__env__\\.PJSCodeInjector\\.applyInstance\\((\\S+), '\\S+'\\)", "g");
    var envExp = new RegExp("__env__\\.", "g");
    var noBreakSpace = "\u00a0";  /* primenumbers7532@gmail.com */
    var lineBreak = String.fromCharCode(10);  /* Larry Serflaten for IE Windows */
    var spaceExp = new RegExp(" ", "g");
    var newlineExp = new RegExp("\\n", "g");
    var wasFrameCount = frameCount;
    frameCount = function() {
        frameCount = wasFrameCount;
        return this;
    };
    var globals = frameCount();
    var F = Object.constructor;  /* Javascript Function (capital F) constructor */
    var metIpseMecum = (0 || arguments).callee;
    
    /* Given source code, return a function in the global scope. */
    function conjureFunctionFrom(source) {
        /* Copied from Element118, delag() function. */
        return F('return (function(__env__) {return ' + source + ';});')()(globals);
    }
    
    /* Return a function like f without any loop detection. */
    function loopDetect(f) {
        var source = f.toString();
        source = source.replace(plusPlusExp, "");
        source = source.replace(ifClauseExp, "");
        return conjureFunctionFrom(source);
    }
    
    /* Return a function like f where the caller supplies the filter. */
    function applyRegExp(f, rExp, replacement) {
        var source = f.toString();
        source = source.replace(rExp, replacement);
        return conjureFunctionFrom(source);
    }
    
    /* Return a function like f that uses the keyword "new" again. */
    function renew(f) {
        return this.applyRegExp(f, newExp, "new $1");
    }
    
    /*
     * Print completely deKhanified function f source out via println.
     * All arguments are optional.
     */
    function _print(f, prefix, suffix) {
        f = f || metIpseMecum;
        prefix = prefix || "";
        suffix = suffix || "";
        f = this.loopDetect(f);
        f = this.renew(f);
        var source = f.toString();
        source = source.replace(envExp, "");
        source = prefix + source + suffix;
        this.printText(source);
    }
    
    /* Print source line(s) out via println. */
    function printText(source) {
        source = source || " "; /* blank line if nothing else... */
        source = source.replace(spaceExp, noBreakSpace);
        source = source.replace(newlineExp, lineBreak);
        println(source);
    }
    
    return {
        loopDetect: loopDetect,
        applyRegExp: applyRegExp,
        renew: renew,
        print: _print,
        printText: printText,
    };
})(); 

var new_ = (function() {
	/*
	    Replace the new function because KAs new function sucks
	    @author KWC
	    @example of usage
	    
	    new Object(param1, param2)
	    vs
	    new_.call(Object, param1, param2)
	    
	*/
	var obj = Object.create(this.prototype);
	this.apply(obj, arguments);
	return obj;
});

var musicchanged = false;

var storage;

(function() {
    audio = [];
    
    mainDocument = undefined;
    myDocument = undefined;
    
    storage = this.localStorage;
})();

var getItem = function(key) {
    if(storage === undefined) {
        storage = this.localStorage;
    }
    return storage.getItem(key);
};
var setItem = function(key, value) {
    if(storage === undefined)  {
        storage = this.localStorage;
    }
    storage.setItem(key, value);
};

var precacheAudio = function(id, name, src) {
    var audioObject = {};
    
    var audioSource = myDocument[mainDocument[1]]("source");
    var extension = src.substring(src.lastIndexOf(".") + 1, src.length);
    
    switch(extension) {
        case "mp3":
            extension = "mpeg";
            break;
        case "ogg":
            extension = "ogg";
        break;
        case "wav":
            extension = "wav";
        break;
    }
    
    audioSource.type = "audio/" + extension;
    audioSource.src = src;
    
    var object = myDocument[mainDocument[1]]("audio");
    object.appendChild(audioSource);
    
    audioObject.object = object;
    audioObject.name = name;
    
    audio[id] = audioObject;
};

mainDocument = ["ownerDocument", "createElement"];
myDocument = this.externals.canvas[mainDocument[0]];   

var playAudio = function(identifier) {
    if(typeof identifier === "string") {
        var audioObject;
        for(var i = 0; i < audio.length; i++) {
            if(audio[i].name === identifier) {
                audioObject = audio[i].object;
                break;
            }
        }
        
        if(audioObject !== undefined) {
            //audioObject.currentTime = 0;
            
            //audioObject.play();
        }
    } else if(typeof identifier === "number") {
        //if(identifier % 1 === 0) {
            //if(identifier < audio.length) {
                audioObject = audio[identifier].object;
                
                audioObject.currentTime = 0;
                
                
                if(musicchanged === false){
                audioObject.play();
                }

                audioObject.loop = true;
                if(musicchanged === true){
                    audioObject.pause();
                }

                
            //}
        //}
    }
};

mainDocument = ["ownerDocument", "createElement"];
myDocument = this.externals.canvas[mainDocument[0]];   


var transition = {
    active : false,
    out : false,
    nextScene : "",
    size : width,
};

var keys = {};
var keyR = false;
var clicked = false;
var keyPressed = function() {
    keys[keyCode] = true;
};
var keyReleased = function() {
    keys[keyCode] = false;
    keyR = true;
};
mousePressed = function(){
    clicked = true;
};

var Collision = function(a, b) {
    return a.x + a.w > b.x && a.x < b.x + b.w && a.y + a.h > b.y && a.y < b.y + b.h;
};// if crash then this is the reason
var Tricoll = function(x,y, x1, x2, y1, y2, x3, y3){
    return Collision(x, y, [{x: x1, y: y1}, {x: x2, y: y2}, {x: x3, y: y3}]);  
  
};
var Collision2 = function(obj1, obj2){
    return obj1.x<obj2.x+obj2.w&&obj1.x+obj1.w>obj2.x&&
           obj1.y<obj2.y+obj2.h&&obj1.y+obj1.h>obj2.y;
};
var collideBoxwTriangle = function(Tri){

    // in width
    if(circles.x + circles.w > Tri[0] && circles.x < Tri[0]+Tri[2]){
        // in height
         if(circles.y + circles.h > Tri[1] && circles.y < Tri[1]+Tri[3]){
             // Collide other sides first;
             if(circles.velx >= Tri[0]+Tri[2]){
                 circles.x = Tri[0]+Tri[2];
                 return;
             }
             if(circles.vely >= Tri[1]+Tri[3]){
                 circles.y = Tri[1]+Tri[3];
                 circles.gravity = 1;
                 circles.accelment.y = 0;
                 return;
             }
             // in angle
             if(circles.x + circles.w < Tri[0]+Tri[2]){
                    var a = circles.x + circles.w;
                    var b = circles.y + circles.h;
                    var d = a - Tri[0];
                    var e = b - Tri[1];
                    var q = (-(Tri[3]/Tri[2])*d) + Tri[3];
                    
                    stroke(255, 0, 0);
                    strokeWeight(4);
                    point(a,b);
                    stroke(217, 0, 195);
                    strokeWeight(4);
                    point(d+Tri[0],q+Tri[1]);
                    noStroke();
                if(q+Tri[1]<=b){
                    fill(0, 255, 9);
                    // Hit the top
                    circles.accelment.y = 0;
                    circles.gravity = 0;
                    circles.y = q+Tri[1]-circles.h;
                }
             }else{
                  fill(255, 0, 0);
                    circles.accelment.y = 0;
                    circles.gravity = 0;
                    circles.y = Tri[1]-circles.h;
                }
            
         }
    }

};
var rectCollide = function(r1, r2) {
    return (r1.x + r1.width > r2.x && 
           r1.x < r2.x + r2.width && 
           r1.y + r1.height > r2.y &&
           r1.y < r2.y + r2.height);
};
var beamCollide = function(r, x1, y1, x2, y2) {
    
    // define some variables
    var rc = {x : r.x + r.w/2, y : r.y + r.h/2}; // rect center
    var lc = {x : (x2 - x1)/2, y : (y2 - y1)/2}; // beam center
    
    var slopez = (y2 - y1) / (x2 - x1);
    //println(rc.y + ", " + map(rc.x, b.x1, b.x2, b.y1, b.y2));
    // FIRST: check if the rect is above or below the beam
    if (rc.y > map(rc.x, x1, x2, y1, y2)) {
        // (we are underneath the line)
        
        // SECOND: based upon the slope, determine which corner of the rect will be colliding against the beam
        var cc = {y: r.y}; // colliding corner
        cc.x = (slopez > 0) ? (r.x + r.w) : (r.x);
        
        // THIRD: now we can use the x-position of that corner to calculate the y position of the slope at that x-position: if cc.y < y (the position of the beam at cc.x), then we need to adjust the position of the rect
        if (cc.y < map(cc.x, x1, x2, y1, y2)) {
            // return the y-value of the line that the rect should be adjusted to
            return map(cc.x, x1, x2, y1, y2);
        }
    } else {
        // (we are above the line)
        
        // SECOND: based upon the slope, determine which corner of the rect will be colliding against the beam
        var cc = {y: r.y + r.h}; // colliding corner
        cc.x = (slopez > 0) ? (r.x) : (r.x + r.w);
        
        // THIRD: now we can use the x-position of that corner to calculate the y position of the slope at that x-position: if cc.y > y (the position of the beam at cc.x), then we need to adjust the position of the rect
        if (cc.y > map(cc.x, x1, x2, y1, y2)) {
            // return the y-value of the line that the rect should be adjusted to
            return map(cc.x, x1, x2, y1, y2) - r.h;
        }
    }
    
    return false;
};

// cubix and sequel camera function
// Credit to Thomas L. for the Camera function
var Camera = function(x, y, w, h, viewX, viewY, levelWidth, levelHeight, speed){
    // Viewport on canvas
    this.x = x;
    this.y = y;
    this.w  = w;
    this.h = h;
    
    // Inside the viewport
    this.viewX = viewX;
    this.viewY = viewY;
    this.levelWidth = levelWidth;
    this.levelHeight = levelHeight;
    
    this.speed = this.speed || speed; // the lower the number, the faster the speed
};
var funnytext = ["RETARDED BITCH ASS ALERT"];

Camera.prototype.follow = function(ent) {
    var x = -ent.x+this.x+(this.w/2)-(ent.w/2);
    var y = -ent.y+this.y+(this.h/2)-(ent.h/2);
    var a = atan2(y-this.viewY, x-this.viewX);
    var v = dist(x, y, this.viewX, this.viewY) / this.speed;
    
    this.viewX += v*cos(a);
    this.viewY += v*sin(a);

    var width  = this.x + this.w  - this.levelWidth;
    var height = this.y + this.h - this.levelHeight;
    
    this.viewX = min(this.viewX, this.x);
    this.viewX = max(this.viewX, width);
    this.viewY = min(this.viewY, this.y);
    this.viewY = max(this.viewY, height);
};

Camera.prototype.view = function(ent) {
    var viewX = -this.viewX+this.x,
        viewY = -this.viewY+this.y,
        viewW = ent.w-this.w,
        viewH = ent.w-this.h;

    if(ent.x >  viewX-ent.w &&
       ent.x <  viewX-viewW+ent.w && 
       ent.y >  viewY-ent.h &&
       ent.y <  viewY-viewH+ent.h)
    {
        var camView = {
            x: (this.viewX+ent.x),
            y: (this.viewY+ent.y),
            w: ent.w,
            h: ent.h,
            cam: this
        };
        
        return camView;
    }
};

// Arrow.programmings particle func (HALVED)

var runParticles = function() {
    noStroke();
    for (var i = particles.length - 1; i >= 0; i--) {
        var particle = particles[i];
        particle.timer++;
        particle.x += particle.velocity_x;
        particle.velocity_y += particle.gravity;
        particle.y += particle.velocity_y;
        particle.angle += particle.rot;
        particle.opacity = constrain(particle.opacity - 3, 0, 255);
        fill(particle.color, particle.opacity);
        pushMatrix();
        translate(particle.x + particle.diameter / 2, particle.y + particle.diameter / 2);
        rotate(particle.angle);
        if (particle.ellipse === true) {
            ellipse(-particle.diameter / 2, -particle.diameter / 2, particle.diameter, particle.diameter);
        } else {
            rect(-particle.diameter / 2, -particle.diameter / 2, particle.diameter, particle.diameter);
        }
        popMatrix();
        if (particle.y - particle.diameter / 2 > height) {
        }
        if (particle.timer >= 50) {
            particles.splice(i, 1);
        }
    }
};

var width = 800;
var height  = 600;


var Particle1 = function(x,y,speedx,speedy,fade){
        this.x = x;
        this.y = y;
        this.r = random(360);
        this.speedx = constrain(speedx,-5,5) || random(-1,1);
        this.speedy =  constrain(speedy,-5,5) || random(-1,1);
        this.fade = fade || random(200,300);
        this.darkness = random(50);
    };
Particle1.prototype.draw = function() {
        pushMatrix();
        translate(this.x,this.y);
        rotate(this.r);
        
        noStroke();
        fill(-this.darkness , 25-this.darkness, 200, this.fade);
        rect( -2.5, -5, 5+this.fade/20, this.fade/20, 5);
        
        popMatrix();
    };
Particle1.prototype.update = function(){
        this.x += this.speedx;
        this.y += this.speedy;
        this.fade -= 5;
        this.r += this.speedy*2;
    };
    
var particlez = [];

// Some sprite art:
var DAbrot = 0;
var DAbx = 300;
var DAby = 300;
var DAg = 0.5;
var DT = 0;
var DAvely = 0;
var unrot1 = 0;
var x = 0;
var y = 0;
var speed = 3.5;
var blinkValue = 1; // For the eye height
var blinking = false; // For if it's blinking
var waitTimer = 0;


var DAbluey = function(x, y, s, rotat, id){
    if(id === 0){
    noStroke();
    pushMatrix();
    translate(x, y);
    scale(s);
    rotate(rotat);
    fill(0, 0, 200);
    ellipse(0, 0, 80, 80);
    fill(255);
    ellipse(-18, -10, 30, 30);
    ellipse(+20, -10, 30, 30);
    strokeWeight(3);
    stroke(0);
    line(-25, -20, -10, -0);
    line(-10, -20, -25, 0);
    line(25, -20, 15, 0);
    line(10, -20, 25, 0);
    noStroke();
    fill(0, 221, 255);
    ellipse(0, +10, 15, 15);
    fill(255, 0, 0);
    arc(+0, +35, 25, 25, 180, 360);
    /*
    if(frameCount%300 < 30){
        fill(0, 0, 200);
        ellipse(-18, -10, 30, 30);
    ellipse(+20, -10, 30, 30);
        
    }
    */
    popMatrix();
    }
    if(id === 1){
        textAlign(CORNER, CORNER);
        textFont(createFont("Arial"));
        textSize(10);
        noStroke();
    pushMatrix();
    translate(x, y);
    scale(s);
    rotate(rotat);
    fill(25, 168, 168);
        ellipse(0, 0, 40, 40+2);
        
        fill(50, 235, 235);
        ellipse(0, 0, 40+2, 40);    
        
        noStroke();
        fill(255);
        ellipse(12, 0, 13, 9);
        ellipse(-12, 0, 13, 9);
                fill(25, 168, 168);
        text("X", 8, 3);
        text("X", -15, 2);
        fill(0);
        text("X", 8, 2);
        text("X", -15, 3);
        image(Boltyslightning, -5, -20, 11, 40);
        noFill();
        strokeWeight(2);
        stroke(0);
        arc(-7, 16, 10, 10, 180, 363); 
    popMatrix();
    }
    
    
    
    
    
    
};

var dtrans = 0;

var DeathAnim = function(x, y, id){
    pushMatrix();
    translate(x, y);
    DT++;



if(id === 0){
DAbluey(DAbx, DAby, 0.55, DAbrot, 0);
}
if(id === 1){
    DAbluey(DAbx, DAby, 1, DAbrot, 1);
    }


if(DT > 20){
DAbrot += 4;
}
if(DT > 20){
    DAby -= 5;
}
if(DT > 45){
if(DAby > 0){
    DAby+=8;
}
if(DAby > 600){
    dtrans += 5;
}
}
popMatrix();
};
var iBluey2 = function(x, y, s, rotat, id){
    if(id === 0){
    noStroke();
    pushMatrix();
    translate(x, y);
    scale(s);
    rotate(rotat);
    fill(0, 0, 200);
    ellipse(0, 0, 80, 80);
    fill(255);
    ellipse(-18, -10, 30, 30);
    ellipse(+20, -10, 30, 30);
    fill(0);
    ellipse(-18, -10, 15, 15);
    ellipse(+20, -10, 15, 15);
    fill(0, 221, 255);
    ellipse(0, +10, 15, 15);
    fill(255, 0, 0);
    arc(+10, +25, 20, 20, 340, 543);
    if(frameCount%300 < 30){
        fill(0, 0, 200);
        ellipse(-18, -10, 30, 30);
    ellipse(+20, -10, 30, 30);
        
    }
    popMatrix();
    }
    if(id === 1){
        pushMatrix();
    translate(x, y);
    rotate(rotat);
    scale(s);
    
    // Design
    
    pushStyle();
    //{hue(blue);// hue and others
    saturation(blue);
    blue(blue);
    fill(0, 47, 255);
//}
    strokeWeight(2);
    stroke(0, 47, 255);
    ellipse(0, 0, 40, 40);
    fill(255, 255, 255);
    ellipse(-10, -7, 15, 15);
    ellipse(10, -7, 15, 15);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    ellipse(-10, -7, 5, 5);
    ellipse(10, -7, 5, 5);
    fill(0, 255, 217);
    stroke(0, 255, 217);
    ellipse(0, 0, 5, 5);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    ellipse(0, 13, 20, 6); 
    popStyle();
    if(frameCount%300 < 20){
        stroke(0, 47, 255);
        fill(0, 47, 255);
        ellipse(-10, -7, 15, 15);
        ellipse(10, -7, 15, 15);
    }
    popMatrix();
    }
};
var MyBluey1 = function(x, y, s, r,  blink){
    
    pushMatrix();
    
    translate(x, y);
    scale(s);
    rotate(r);  
    
    pushMatrix();
    translate(-150, -250);    
    
    noStroke();
    fill(0, 0, 209);
    ellipse(150, 250, 90, 90);
    
    fill(0, 0, 247);
    arc(150, 250, 90, 90, 130, 310);

    fill(219, 219, 219);
    ellipse(130, 235, 30, 30 * blink);
    ellipse(170, 235, 30, 30 * blink);
    fill(255);   
    arc(130, 235, 30, 30 * blink, 130, 310);
    arc(170, 235, 30, 30 * blink, 130, 310);
    
    fill(48, 48, 48);
    ellipse(130, 235, 15, 15* blink);
    ellipse(170, 235, 15, 15* blink);
    fill(0);
    arc(130, 235, 15, 15 * blink, 130, 310);
    arc(170, 235, 15, 15 * blink, 130, 310);    
    
    fill(0, 197, 227);
    ellipse(150, 255, 15, 15);
    
    fill(0, 221, 255);
    arc(150, 255, 15, 15, 130, 310);    
    
    fill(255, 0, 0);
    arc(160, 265, 40, 40, 0, 143);
    
        // Makes the wait time count up
    if (!blinking && waitTimer < 7 && blinkValue >= 1) {
        waitTimer += 0.016;
    }
    
    // Starts the blinking
    if (waitTimer >= 4) {
        blinking = true;
    }
    
    // Makes the eyes shut
    if (blinking && blinkValue >= 0) {
        blinkValue -= 0.05;
    }
    
    // Resets things
    if (blinkValue <= 0) {
        blinking = false;
        waitTimer = 0;
    }
    
    // Makes the eyes open
    if (!blinking && blinkValue < 1) {
        blinkValue += 0.05;
    }

    popMatrix();
    popMatrix();
    
    
};
// Main sprites --- {
var BlueyS = function(x, y, w, h, type, rot){
    if(type === "Normal"){
    
     pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
    
    // Design
    
    //pushStyle();
    hue(blue);// hue and others
    saturation(blue);
    blue(blue);
    
//}
    strokeWeight(2);
    stroke(0, 0, 200);
    fill(0, 0, 200);
    ellipse(0, 0, 40, 40);
    stroke(0, 0, 255, 100);
    fill(0, 0, 255, 100);
    ellipse(0, -3, 40, 36);
    fill(255, 255, 255);
    ellipse(-10, -7, 17, 17);
    ellipse(10, -7, 17, 17);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    ellipse(-10, -7, 5, 5);
    ellipse(10, -7, 5, 5);
    fill(0, 255, 217);
    stroke(0, 255, 217);
    ellipse(0, 2, 5, 5);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    arc(4, 8, 20, 20, 0, 123); 
    //popStyle();
    if(frameCount%300 < 20){
        strokeWeight(1);
        stroke(0, 0, 200);
        fill(0, 0, 200);
        ellipse(-10, -7, 15, 15);
        ellipse(10, -7, 15, 15);
    }
    popMatrix();
    noStroke();
    
    }
    if(type === "Waiting"){
        pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
    
    hue(blue);
    saturation(blue);
    blue(blue);
    
    strokeWeight(2);
    stroke(8, 0, 200);
    fill(0, 0, 200);
    ellipse(0, 0, 40, 40);
    stroke(0, 0, 255, 100);
    fill(0, 0, 255, 100);
    ellipse(0, -3, 40, 36);
    fill(255, 255, 255);
    ellipse(-10, -7, 17, 17);
    ellipse(10, -7, 17, 17);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    ellipse(-10, -7, 5, 5);
    ellipse(10, -7, 5, 5);
    stroke(0, 0, 200);
    fill(0, 0, 200);
    arc(-10, -7, 17, 15, 180, 360);
    arc(10, -7, 17, 15, 180, 360);
    fill(0, 255, 217);
    stroke(0, 255, 217);
    ellipse(0, 2, 5, 5);
    noFill();
    stroke(0, 0, 0);
    arc(1, 15, 10, 10, 180, 360); 
    //popStyle();
    if(frameCount%300 < 20){
        strokeWeight(1);
        stroke(0, 0, 200);
        fill(0, 0, 200);
        ellipse(-10, -7, 15, 15);
        ellipse(10, -7, 15, 15);
    }
    popMatrix();
    noStroke();
    }
    if(type === "Waiting2"){
        
        pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
    
    hue(blue);
    saturation(blue);
    blue(blue);
    
    strokeWeight(2);
    stroke(8, 0, 200);
    fill(0, 0, 200);
    ellipse(0, 0, 40, 40);
    stroke(0, 0, 255, 100);
    fill(0, 0, 255, 100);
    ellipse(0, -3, 40, 36);
    fill(255, 255, 255);
    ellipse(-10, -7, 17, 17);
    ellipse(10, -7, 17, 17);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    ellipse(-10, -7, 5, 5);
    ellipse(10, -7, 5, 5);
    fill(0, 255, 217);
    stroke(0, 255, 217);
    ellipse(0, 2, 5, 5);
    noFill();
    stroke(0, 0, 0);
    line(2, 14, 10, 8);
    //popStyle();
    if(frameCount%300 < 20){
        strokeWeight(1);
        stroke(0, 0, 200);
        fill(0, 0, 200);
        ellipse(-10, -7, 15, 15);
        ellipse(10, -7, 15, 15);
    }
    popMatrix();
    noStroke();
    
    }
    if(type === "Hurt"){
        
    
     pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
    
    // Design
    
    //pushStyle();
    hue(blue);// hue and others
    saturation(blue);
    blue(blue);
    
//}
    strokeWeight(2);
    stroke(163, 0, 199);
    fill(163, 0, 199);
    ellipse(0, 0, 40, 40);
    stroke(255, 0, 242, 100);
    fill(255, 0, 242, 100);
    ellipse(0, -3, 40, 36);
    fill(255, 255, 255);
    ellipse(-10, -7, 17, 17);
    ellipse(10, -7, 17, 17);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    //ellipse(-10, -7, 5, 5);
    textSize(12);
    text("X", -14, -2);
    ellipse(10, -7, 5, 5);
    stroke(163, 0, 199);
    fill(163, 0, 199);
    arc(10, -7, 14, 14, 0, 183);
    stroke(0, 93, 199, 200);
    fill(1, 93, 199, 200);
    ellipse(10, -1, 3, 3);
    ellipse(13, -1, 3, 3);
    
    fill(0, 255, 217);
    stroke(0, 255, 217);
    ellipse(0, 2, 5, 5);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    ellipse(1, 14, 10, 10); 
    //popStyle();
    if(frameCount%300 < 20){
        strokeWeight(1);
        stroke(163, 0, 199);
        fill(163, 0, 199);
        ellipse(-10, -7, 15, 15);
        ellipse(10, -7, 15, 15);
    }
    popMatrix();
    noStroke();
    
    
    }
    if(type === "Bounce"){
        
    
     pushMatrix();
    translate(x, y);
    scale(w-0.2, h+0.3);
    rotate(rot);
    
    // Design
    
    //pushStyle();
    hue(blue);// hue and others
    saturation(blue);
    blue(blue);
    
//}
    strokeWeight(2);
    stroke(8, 0, 200);
    fill(0, 0, 200);
    ellipse(0, 0, 40, 40);
    stroke(0, 0, 255, 100);
    fill(0, 0, 255, 100);
    ellipse(0, -3, 40, 36);
    fill(255, 255, 255);
    ellipse(-10, -7, 17, 17);
    ellipse(10, -7, 17, 17);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    ellipse(-10, -7, 5, 5);
    ellipse(10, -7, 5, 5);
    fill(0, 255, 217);
    stroke(0, 255, 217);
    ellipse(0, 2, 5, 5);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    arc(4, 8, 20, 20, 0, 123); 
    //popStyle();
    if(frameCount%300 < 20){
        strokeWeight(1);
        stroke(0, 0, 200);
        fill(0, 0, 200);
        ellipse(-10, -7, 15, 15);
        ellipse(10, -7, 15, 15);
    }
    popMatrix();
    noStroke();
    
    
    }
    if(type === "Ledge1"){
        
    
     pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
    
    // Design
    
    //pushStyle();
    hue(blue);// hue and others
    saturation(blue);
    blue(blue);
    
//}
    strokeWeight(2);
    stroke(8, 0, 200);
    fill(0, 0, 200);
    ellipse(0, 0, 40, 40);
    stroke(0, 0, 255, 100);
    fill(0, 0, 255, 100);
    ellipse(0, -3, 40, 36);
    fill(255, 255, 255);
    ellipse(-10, -7, 17, 17);
    ellipse(10, -7, 17, 17);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    ellipse(-8, -5, 5, 5);
    ellipse(12, -5, 5, 5);
    fill(0, 255, 217);
    stroke(0, 255, 217);
    ellipse(0, 2, 5, 5);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    ellipse(-4, 12, 10, 10); 
    //popStyle();
    if(frameCount%300 < 20){
        strokeWeight(1);
        stroke(0, 0, 200);
        fill(0, 0, 200);
        ellipse(-10, -7, 15, 15);
        ellipse(10, -7, 15, 15);
    }
    popMatrix();
    noStroke();
    
    
    }
    if(type === "Ledge2"){
    
        
    
     pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
    
    // Design
    
    //pushStyle();
    hue(blue);// hue and others
    saturation(blue);
    blue(blue);
    
//}
    strokeWeight(2);
    stroke(8, 0, 200);
    fill(0, 0, 200);
    ellipse(0, 0, 40, 40);
    stroke(0, 0, 255, 100);
    fill(0, 0, 255, 100);
    ellipse(0, -3, 40, 36);
    fill(255, 255, 255);
    ellipse(-10, -7, 17, 17);
    ellipse(10, -7, 17, 17);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    ellipse(-12, -5, 5, 5);
    ellipse(8, -5, 5, 5);
    fill(0, 255, 217);
    stroke(0, 255, 217);
    ellipse(0, 2, 5, 5);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    ellipse(5, 12, 10, 10); 
    //popStyle();
    if(frameCount%300 < 20){
        strokeWeight(1);
        stroke(0, 0, 200);
        fill(0, 0, 200);
        ellipse(-10, -7, 15, 15);
        ellipse(10, -7, 15, 15);
    }
    popMatrix();
    noStroke();
    
    
    
    }
    if(type === "Burn"){
    
     pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
    
    // Design
    
    pushStyle();
    
    fill(255, 106, 0, 130);
    ellipse(0, -5, 40+2, 40+2);
    ellipse(0, -7, 40, 40+2);
    ellipse(0, -13, 40-15, 40+2);
    ellipse(0, -11, 40-25, 40+2);
    ellipse(-15, -12, 40-30, 40+2);
    ellipse(-7.5, -16, 40-30, 40+2);
    ellipse(7.5, -16, 40-30, 40+2);
    ellipse(15, -12, 40-30, 40+2);

    strokeWeight(2);
    fill(255, 102, 0);
    stroke(255, 102, 0, 250);
    ellipse(0, 0, 40+2, 40+2);
    fill(255, 218, 181);
    ellipse(-10, -7, 17, 17);
    ellipse(10, -7, 17, 17);
    fill(255, 166, 0);
    stroke(255, 166, 0);
    ellipse(-10, -7, 5, 5);
    ellipse(10, -7, 5, 5);
    fill(255, 136, 0);
    stroke(255, 136, 0);
    ellipse(0, 2, 5, 5);
    fill(255, 55, 0);
    stroke(255, 55, 0);
    arc(4, 8, 20, 20, 0, 123); 
    popStyle();
    if(frameCount%300 < 20){
        noStroke();
        fill(209, 0, 0);
        ellipse(-10, -7, 15, 15);
        ellipse(10, -7, 15, 15);
    }
    popMatrix();
    
    }
    if(type === "Bubble"){
    
    
     pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
    
    // Design
    
    //pushStyle();
//}
    strokeWeight(2);
    stroke(255);
    fill(0, 1, 200, 150);
    image(Bubbleimg, -22, -22, 45, 45);
    fill(255, 255, 255);
    ellipse(-10, -7, 14, 14);
    ellipse(10, -7, 14, 14);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    ellipse(-10, -7, 5, 5);
    ellipse(10, -7, 5, 5);
    fill(0, 255, 217, 150);
    stroke(0, 255, 217, 150);
    ellipse(0, 2, 5, 5);
    fill(255, 0, 0, 150);
    stroke(255, 0, 0, 150);
    arc(4, 8, 20, 20, 0, 123); 
    //popStyle();
    if(frameCount%300 < 20){
        strokeWeight(1);
        stroke(0, 0, 200);
        fill(0, 0, 200);
        ellipse(-10, -7, 15, 15);
        ellipse(10, -7, 15, 15);
    }
    popMatrix();
    noStroke();
    
    }
    if(type === "Breeze"){
        
    
     pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
    
    // Design
    
    //pushStyle();
    hue(blue);// hue and others
    saturation(blue);
    blue(blue);
    
//}
    strokeWeight(2);
    stroke(150);
    fill(150);
    // Body plus cloud aura
    ellipse(0, 0, 40, 40);
    ellipse(0, -10, 30, 30);
    ellipse(-10, -10, 30, 30);
    ellipse(10, -10, 30, 30);
    ellipse(10, 0, 30, 30);
    ellipse(-10, 0, 30, 30);
    ellipse(0, 10, 30, 30);
    ellipse(-10, 10, 30, 30);
    ellipse(10, 10, 30, 30);
    
    stroke(255, 100);
    fill(255, 100);
    ellipse(0, -3, 40, 40);
    fill(255, 255, 255);
    ellipse(-10, -7, 17, 17);
    ellipse(10, -7, 17, 17);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    ellipse(-10, -7, 5, 5);
    ellipse(10, -7, 5, 5);
    fill(0, 255, 217);
    stroke(0, 255, 217);
    ellipse(0, 2, 5, 5);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    arc(4, 8, 20, 20, 0, 123); 
    //popStyle();
    if(frameCount%300 < 20){
        strokeWeight(1);
        stroke(200);
        fill(200);
        ellipse(-10, -7, 15, 15);
        ellipse(10, -7, 15, 15);
    }
    popMatrix();
    noStroke();
    
    
    }
    if(type === "LookUp"){
        
    
     pushMatrix();
    translate(x, y);
    scale(w, h+0.1);
    rotate(rot);
    
    // Design
    
    //pushStyle();
    hue(blue);// hue and others
    saturation(blue);
    blue(blue);
    
//}
    strokeWeight(2);
    stroke(8, 0, 200);
    fill(0, 0, 200);
    ellipse(0, 0, 40, 40);
    stroke(0, 0, 255, 100);
    fill(0, 0, 255, 100);
    ellipse(0, -3, 40, 36);
    fill(255, 255, 255);
    ellipse(-10, -7, 17, 17);
    ellipse(10, -7, 17, 17);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    ellipse(-8, -9, 5, 5);
    ellipse(12, -9, 5, 5);
    fill(0, 255, 217);
    stroke(0, 255, 217);
    ellipse(0, 2, 5, 5);
    fill(0);
    stroke(0);
    rect(-5, 12, 14, 0.1);
    //popStyle();
    if(frameCount%300 < 20){
        strokeWeight(1);
        stroke(0, 0, 200);
        fill(0, 0, 200);
        ellipse(-10, -7, 15, 15);
        ellipse(10, -7, 15, 15);
    }
    popMatrix();
    noStroke();
    
    
    }
    if(type === "LookDown"){
        
    
     pushMatrix();
    translate(x, y+2);
    scale(w, h-0.1);
    rotate(rot);
    
    // Design
    
    //pushStyle();
    hue(blue);// hue and others
    saturation(blue);
    blue(blue);
    
//}
    strokeWeight(2);
    stroke(8, 0, 200);
    fill(0, 0, 200);
    ellipse(0, 0, 40, 40);
    stroke(0, 0, 255, 100);
    fill(0, 0, 255, 100);
    ellipse(0, -3, 40, 36);
    fill(255, 255, 255);
    ellipse(-10, -7, 17, 17);
    ellipse(10, -7, 17, 17);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    ellipse(-8, -4, 5, 5);
    ellipse(12, -4, 5, 5);
    fill(0, 255, 217);
    stroke(0, 255, 217);
    ellipse(0, 2, 5, 5);
    fill(0);
    stroke(0);
    rect(-5, 12, 14, 0.1);
    //popStyle();
    if(frameCount%300 < 20){
        strokeWeight(1);
        stroke(0, 0, 200);
        fill(0, 0, 200);
        ellipse(-10, -7, 15, 15);
        ellipse(10, -7, 15, 15);
    }
    popMatrix();
    noStroke();
    
    
    }
    if(type === "Frozen"){
        
    
     pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
    
    // Design
    
    //pushStyle();
    hue(blue);// hue and others
    saturation(blue);
    blue(blue);
    
    
//}
    strokeWeight(2);
    stroke(8, 0, 200);
    fill(0, 0, 200);
    ellipse(0, 0, 40, 40);
    stroke(0, 0, 255, 100);
    fill(0, 0, 255, 100);
    ellipse(0, -3, 40, 36);
    fill(87, 182, 250);
    ellipse(-10, -7, 17, 17);
    ellipse(10, -7, 17, 17);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    ellipse(-10, -7, 5, 5);
    ellipse(10, -7, 5, 5);
    fill(0, 55, 255);
    stroke(0, 55, 266);
    ellipse(0, 2, 5, 5);
    fill(0, 17, 255);
    stroke(0, 17, 255);
    ellipse(4, 12, 10, 10); 
    //popStyle();
    /*if(frameCount%300 < 20){
        strokeWeight(1);
        stroke(0, 0, 200);
        fill(0, 0, 200);
        ellipse(-10, -7, 15, 15);
        ellipse(10, -7, 15, 15);
    }*/
    strokeWeight(5);
    stroke(13, 235, 247);
    fill(43, 156, 227, 200);
    rect(-40, -40, 80, 80, 5);
    strokeWeight(5);
    stroke(0, 153, 255);
    fill(25, 5, 173, 150);
    rect(-30, -30, 60, 60, 5);
    
    textSize(20);
    fill(255, 100);
    text("/", -30, -15);
    text("/", 30, 35);
    textSize(40);
    text("/", -25, 0);
    text("/", 15, 35);
    textSize(70);
    text("/", -10, 25);
    popMatrix();
    noStroke();
    
    
    }
    if(type === "Minecart"){
        rectMode(CORNER);
        
    
     pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
    
    // Design
    
    //pushStyle();
    hue(blue);// hue and others
    saturation(blue);
    blue(blue);
    
//}
    strokeWeight(2);
    stroke(8, 0, 200);
    fill(0, 0, 200);
    ellipse(0, 0, 40, 40);
    stroke(0, 0, 255, 100);
    fill(0, 0, 255, 100);
    ellipse(0, -3, 40, 36);
    fill(255, 255, 255);
    ellipse(-10, -7, 17, 17);
    ellipse(10, -7, 17, 17);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    ellipse(-8, -7, 5, 5);
    ellipse(12, -7, 5, 5);
    fill(0, 255, 217);
    stroke(0, 255, 217);
    ellipse(0, 2, 5, 5);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    ellipse(-7, 12, 10, 10); 
    //popStyle();
    if(frameCount%300 < 20){
        strokeWeight(1);
        stroke(0, 0, 200);
        fill(0, 0, 200);
        ellipse(-10, -7, 15, 15);
        ellipse(10, -7, 15, 15);
    }
    minecart(0, 30, 0);
    popMatrix();
    noStroke();
    
    
    }
    if(type === "Electric"){
        pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
    fill(255, 243, 0, 20);
for (var i = 0; i <4; i+=1) {
    ellipse(0,0, 100+i*9, 100+i*9);
}
    fill(255, 255, 0);
    ellipse(0, 0, 50, 50);
    fill(0);
    ellipse(0, 0, 40, 40);
    fill(255, 255, 0);
    ellipse(-10, -7, 17, 17);
    ellipse(10, -7, 17, 17);
    ellipse(0, 2, 5, 5);
    arc(2, 15, 20, 15, 180, 363);
        popMatrix();
    }
    if(type === "Electric2"){
        pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
    fill(255, 243, 0, 20);
for (var i = 0; i <4; i+=1) {
    ellipse(0,0, 100+i*9, 100+i*9);
}
    fill(0, 0, 0);
    ellipse(0, 0, 50, 50);
    fill(196, 196, 196);
    ellipse(0, 0, 40, 40);
    fill(0);
    ellipse(-10, -7, 17, 17);
    ellipse(10, -7, 17, 17);
    ellipse(0, 2, 5, 5);
    arc(2, 15, 20, 15, 180, 363);
        popMatrix();
    }
    if(type === "Burned"){
        
        
    
     pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
    
    // Design
    
    //pushStyle();
    hue(blue);// hue and others
    saturation(blue);
    blue(blue);
    
//}
    strokeWeight(2);
    stroke(163, 5, 5);
    fill(163, 5, 5);
    ellipse(0, 0, 40, 40);
    stroke(163, 0, 5, 100);
    fill(255, 0, 2, 100);
    ellipse(0, -3, 40, 36);
    fill(255, 255, 255);
    ellipse(-10, -7, 17, 17);
    ellipse(10, -7, 17, 17);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    ellipse(-10, -7, 5, 5);
    ellipse(10, -7, 5, 5);
    stroke(199, 0, 27);
    fill(199, 0, 27);
    //arc(10, -7, 14, 14, 0, 183);
    //arc(-10, -7, 14, 14, 0, 183);
    stroke(0, 93, 199, 200);
    fill(0, 255, 217);
    stroke(0, 255, 217);
    ellipse(0, 2, 5, 5);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    ellipse(-5, 14, 10, 10); 
    ellipse(0, 14, 10, 10); 
    ellipse(5, 14, 10, 10); 
    //popStyle();
    if(frameCount%300 < 20){
        strokeWeight(1);
        stroke(163, 0, 1);
        fill(163, 0, 1);
        ellipse(-10, -7, 15, 15);
        ellipse(10, -7, 15, 15);
    }
    popMatrix();
    noStroke();
    
    
    
    }
    if(type === "Stuck"){
        
        
     pushMatrix();
    translate(x, y);
    rotate(rot);
    
    // Design
    
    pushStyle();
    //{hue(blue);// hue and others
    saturation(blue);
    blue(blue);
    fill(0, 6, 200);
//}
    strokeWeight(2);
    stroke(8, 0, 200);
    ellipse(0, 0, 40, 40);
    stroke(0, 0, 255, 100);
    fill(0, 0, 255, 100);
    ellipse(0, -3, 40, 36);
    stroke(0, 0, 255, 100);
    fill(0, 0, 255, 100);
    ellipse(0, -3, 40, 36);
    textSize(15);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    textSize(30);
    textFont(createFont("Arial Bold"));
    text(">", -19, 3);
    text("<", 0, 3);
    fill(0, 255, 217);
    stroke(0, 255, 217);
    ellipse(0, 0, 5, 5);
    //fill(255, 0, 0);
    noFill();
    strokeWeight(2);
    stroke(0);
    arc(1, 13, 10, 10, 180, 360);
    popStyle();
    
    popMatrix();
    
    
    }
    if(type === "Ultra"){
        this.f = 0;
this.noiseV = random(12, 1);

pushMatrix();
translate(x, y);
scale(w, h);
rotate(rot);
noStroke();
pushMatrix();
translate(-50, -50);
scale(0.25);
fill(65, 10, 255, 30);
for (var i = 0; i <30; i+=1) {
    ellipse(200,200, 200+i*9, 200+i*9);
} // Aura thingy
strokeWeight(sin(frameCount*9)+6);
stroke(1+noise((abs(sin(this.f))) + this.noiseV)*255, 255, 255);
fill(1+noise((abs(sin(this.f))), this.noiseV)*120, 1+noise((abs(sin(this.f))), this.noiseV)*219, 255);
beginShape();

vertex(220, 298);
vertex(180, 298);
vertex(144, 283);
vertex(117, 256);
vertex(102, 220);
vertex(38, 158);
vertex(117, 144);
vertex(109, 81);
vertex(180, 102);
vertex(199, 9);
vertex(256, 117);
vertex(353, 102);
vertex(298, 180);
vertex(380, 186);
vertex(283, 256);
vertex(256, 283);
endShape(CLOSE); // Spike-haired body (with colors)
popMatrix();

noStroke();

// Facial Features --- {
fill(255);
ellipse(-13, 0, 20, 20);
ellipse(13, 0, 20, 20);
fill(0);
ellipse(-13, 0, 10, 10);
ellipse(13, 0, 10, 10);

stroke(1+noise((abs(sin(this.f))), this.noiseV)*120, 1+noise((abs(sin(this.f))), this.noiseV)*219, 255);
fill(1+noise((abs(sin(this.f))), this.noiseV)*120, 1+noise((abs(sin(this.f))), this.noiseV)*219, 255);
arc(-13, 0, 20, 20, 210, 380);
arc(13, 0, 20, 20, 160, 330);

noStroke();

fill(0, 221, 255);
ellipse(1, 10, 5, 5);

noFill();
strokeWeight(1.5);
stroke(0);
arc(5, 15, 15, 10, -10, 150);
popMatrix();
    //}
    }
    
};
var BoltyS = function(x, y, w, h, type, rot){
    if(type === "Normal"){
        noStroke();
        pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
        fill(25, 168, 168);
        ellipse(0, 0, 40, 40+5);
        
        fill(50, 235, 235);
        ellipse(0, 0, 40+2, 40+2);    
        
        noStroke();
        fill(255);
        ellipse(12, 0, 13, 9);
        ellipse(-12, 0, 13, 9);
        fill(25, 168, 168);
        ellipse(12, 1, 6, 6);
        ellipse(-12, 1, 6, 6);
        fill(0);
        ellipse(12, 0, 6.5, 6.5);
        ellipse(-12, 0, 6.5, 6.5);
        image(Boltyslightning, -5, -20, 11, 40);
        noFill();
        strokeWeight(2);
        stroke(0);
        arc(-7, 9, 12, 15, 40, 153); 
        
        if(frameCount%300 < 20){
            noStroke();
            fill(50, 235, 235);
            ellipse(12, -1, 13, 11);
            ellipse(-12, -1, 13, 11);
            
            
        }
        
        
        
        
        noStroke();
        
        popMatrix();
    
    }
    if(type === "Waiting"){
        
        pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
        fill(25, 168, 168);
        ellipse(0, 0, 40, 40+5);
        
        fill(50, 235, 235);
        ellipse(0, 0, 40+2, 40+2);    
        
        noStroke();
        fill(255);
        ellipse(12, 0, 13, 9);
        ellipse(-12, 0, 13, 9);
        fill(25, 168, 168);
        ellipse(12, 1, 6, 6);
        ellipse(-12, 1, 6, 6);
        fill(0);
        ellipse(12, 0, 6.5, 6.5);
        ellipse(-12, 0, 6.5, 6.5);
        image(Boltyslightning, -5, -20, 11, 40);
        noFill();
        noFill();
    stroke(0, 0, 0);
    arc(-7, 15, 10, 10, 180, 360); 
        
        if(frameCount%300 < 20){
            noStroke();
            fill(50, 235, 235);
            ellipse(12, -1, 13, 11);
            ellipse(-12, -1, 13, 11);
            
            
        }
        
        
        
        
        noStroke();
        
        popMatrix();
    
    
        
    }
    if(type === "Waiting2"){
        sleeptime++;
        
        
        pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
        fill(25, 168, 168);
        ellipse(0, 0, 40, 40+5);
        
        fill(50, 235, 235);
        ellipse(0, 0, 40+2, 40+2);    
        
        noStroke();
        fill(255);
        ellipse(12, 0, 13, 9);
        ellipse(-12, 0, 13, 9);
        fill(25, 168, 168);
        ellipse(12, 1, 6, 6);
        ellipse(-12, 1, 6, 6);
        fill(50, 235, 235);
            ellipse(12, -1, 13, 7);
            ellipse(-12, -1, 13, 7);
        image(Boltyslightning, -5, -20, 11, 40);
        fill(0);
    arc(-7, 15, 10, 15*sin(sleeptime*2), 180, 360); 
    
        fill(0);
        textSize(10);
        text("z\n z\n  z\n  z", -20, -30, sleeptime, sleeptime);
        if(sleeptime > 60){
            sleeptime = 0;
        }
        noStroke();
        popMatrix();
    
    
        
    
    }
    if(type === "Hurt"){
        
        pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
        fill(166, 154, 25);
        ellipse(0, 0, 40, 40+5);
        
        fill(235, 235, 52);
        ellipse(0, 0, 40+2, 40+2);    
        
        noStroke();
        fill(255);
        ellipse(12, 0, 13, 9);
        ellipse(-12, 0, 13, 9);
        fill(25, 168, 168);
        text("X", 8, 3);
        text("X", -15, 2);
        fill(0);
        text("X", 8, 2);
        text("X", -15, 3);
        fill(0, 100, 255, 200);
        ellipse(9, 5, 5, 5);
        ellipse(12, 5, 5, 5);
        ellipse(15, 5, 5, 5);
        ellipse(-9, 5, 5, 5);
        ellipse(-12, 5, 5, 5);
        ellipse(-15, 5, 5, 5);
        image(Boltyslightning, -5, -20, 11, 40);
        fill(0);
        arc(-7, 16, 10, 10, 180, 360); 
        
        if(frameCount%300 < 20){
            noStroke();
            fill(235, 235, 52);
            ellipse(12, -1, 13, 11);
            ellipse(-12, -1, 13, 11);
            
            
        }
        
        
        
        
        noStroke();
        
        popMatrix();
    
    
        
    }
    if(type === "Bounce"){
        
    
     pushMatrix();
    translate(x, y);
    scale(w-0.2, h+0.3);
    rotate(rot);
    
    fill(25, 168, 168);
        ellipse(0, 0, 40, 40+5);
        
        fill(50, 235, 235);
        ellipse(0, 0, 40+2, 40+2);    
        
        noStroke();
        fill(255);
        ellipse(12, 0, 13, 9);
        ellipse(-12, 0, 13, 9);
        fill(25, 168, 168);
        ellipse(12, 1, 6, 6);
        ellipse(-12, 1, 6, 6);
        fill(0);
        ellipse(12, 0, 6.5, 6.5);
        ellipse(-12, 0, 6.5, 6.5);
        image(Boltyslightning, -5, -20, 11, 40);
        noFill();
        strokeWeight(2);
        stroke(0);
        arc(-7, 9, 12, 15, 40, 153); 
        
        if(frameCount%300 < 20){
            noStroke();
            fill(50, 235, 235);
            ellipse(12, -1, 13, 11);
            ellipse(-12, -1, 13, 11);
            
            
        }
        
        
        
        
        noStroke();
    popMatrix();
    noStroke();
    
    
    }
    if(type === "Ledge1"){
        
        pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
        fill(25, 168, 168);
        ellipse(0, 0, 40, 40+5);
        
        fill(50, 235, 235);
        ellipse(0, 0, 40+2, 40+2);    
        
        noStroke();
        fill(255);
        ellipse(12, 0, 13, 9);
        ellipse(-12, 0, 13, 9);
        fill(25, 168, 168);
        ellipse(12, 1, 6, 6);
        ellipse(-12, 1, 6, 6);
        fill(0);
        ellipse(13, 1, 6.5, 6.5);
        ellipse(-11, 1, 6.5, 6.5);
        image(Boltyslightning, -5, -20, 11, 40);
        arc(-7, 14, 12, 15, 180, 360); 
        
        if(frameCount%300 < 20){
            noStroke();
            fill(50, 235, 235);
            ellipse(12, -1, 13, 11);
            ellipse(-12, -1, 13, 11);
            
            
        }
        
        
        
        
        noStroke();
        
        popMatrix();
    
    
        
    }
    if(type === "Ledge2"){
        
        
        pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
        fill(25, 168, 168);
        ellipse(0, 0, 40, 40+5);
        
        fill(50, 235, 235);
        ellipse(0, 0, 40+2, 40+2);    
        
        noStroke();
        fill(255);
        ellipse(12, 0, 13, 9);
        ellipse(-12, 0, 13, 9);
        fill(25, 168, 168);
        ellipse(12, 1, 6, 6);
        ellipse(-12, 1, 6, 6);
        fill(0);
        ellipse(11, 1, 6.5, 6.5);
        ellipse(-13, 1, 6.5, 6.5);
        image(Boltyslightning, -5, -20, 11, 40);
        arc(-7, 17, 12, 15, 180, 360); 
        
        if(frameCount%300 < 20){
            noStroke();
            fill(50, 235, 235);
            ellipse(12, -1, 13, 11);
            ellipse(-12, -1, 13, 11);
            
            
        }
        
        
        
        
        noStroke();
        
        popMatrix();
    
    
        
    
    }
    if(type === "LookUp"){
        
        pushMatrix();
    translate(x, y);
    scale(w, h+0.1);
    rotate(rot);
        fill(25, 168, 168);
        ellipse(0, 0, 40, 40+5);
        
        fill(50, 235, 235);
        ellipse(0, 0, 40+2, 40+2);    
        
        noStroke();
        fill(255);
        ellipse(12, 0, 13, 9);
        ellipse(-12, 0, 13, 9);
        fill(25, 168, 168);
        ellipse(12, 0, 6, 6);
        ellipse(-12, 0, 6, 6);
        fill(0);
        ellipse(13, -1, 6.5, 6.5);
        ellipse(-11, -1, 6.5, 6.5);
        image(Boltyslightning, -5, -20, 11, 40);
        ellipse(-7, 12, 10, 10); 
        
        if(frameCount%300 < 20){
            noStroke();
            fill(50, 235, 235);
            ellipse(12, -1, 13, 11);
            ellipse(-12, -1, 13, 11);
            
            
        }
        
        
        
        
        noStroke();
        
        popMatrix();
    
    
        
    }
    if(type === "LookDown"){
        
        
        pushMatrix();
    translate(x, y+2);
    scale(w, h-0.1);
    rotate(rot);
        fill(25, 168, 168);
        ellipse(0, 0, 40, 40+5);
        
        fill(50, 235, 235);
        ellipse(0, 0, 40+2, 40+2);    
        
        noStroke();
        fill(255);
        ellipse(12, 0, 13, 9);
        ellipse(-12, 0, 13, 9);
        fill(25, 168, 168);
        ellipse(12, 0, 6, 6);
        ellipse(-12, 0, 6, 6);
        fill(0);
        ellipse(13, 1, 6.5, 6.5);
        ellipse(-11, 1, 6.5, 6.5);
        image(Boltyslightning, -5, -20, 11, 40);
        ellipse(-7, 12, 10, 10); 
        
        if(frameCount%300 < 20){
            noStroke();
            fill(50, 235, 235);
            ellipse(12, -1, 13, 11);
            ellipse(-12, -1, 13, 11);
            
            
        }
        
        
        
        
        noStroke();
        
        popMatrix();
    
    
        
    
    }
    if(type === "Frozen"){
        rectMode(CORNER);
    
     pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
    
    // Design
    
    //pushStyle();
    hue(blue);// hue and others
    saturation(blue);
    blue(blue);
    
    
//}
        fill(6, 102, 102);
        ellipse(0, 0, 40, 40+5);
        
        fill(11, 179, 179);
        ellipse(0, 0, 40+2, 40+2);    
        
        noStroke();
        fill(255);
        ellipse(12, 0, 13, 9);
        ellipse(-12, 0, 13, 9);
        fill(25, 168, 168);
        ellipse(12, 1, 6, 6);
        ellipse(-12, 1, 6, 6);
        fill(0);
        ellipse(12, 0, 6.5, 6.5);
        ellipse(-12, 0, 6.5, 6.5);
        image(Boltyslightning, -5, -20, 11, 40);
        ellipse(-7, 11, 10, 10); 
        noStroke();
        
    
    
    strokeWeight(5);
    stroke(13, 235, 247);
    fill(43, 156, 227, 200);
    rect(-40, -40, 80, 80, 5);
    strokeWeight(5);
    stroke(0, 153, 255);
    fill(25, 5, 173, 150);
    rect(-30, -30, 60, 60, 5);
    
    textSize(20);
    fill(255, 100);
    text("/", -30, -15);
    text("/", 30, 35);
    textSize(40);
    text("/", -25, 0);
    text("/", 15, 35);
    textSize(70);
    text("/", -10, 25);
    popMatrix();
    noStroke();
    
    
    }
    if(type === "Minecart"){
        rectMode(CORNER);
        
    
     
        pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
        fill(25, 168, 168);
        ellipse(0, 0, 40, 40+5);
        
        fill(50, 235, 235);
        ellipse(0, 0, 40+2, 40+2);    
        
        noStroke();
        fill(255);
        ellipse(12, 0, 13, 9);
        ellipse(-12, 0, 13, 9);
        fill(25, 168, 168);
        ellipse(12, 1, 6, 6);
        ellipse(-12, 1, 6, 6);
        fill(0);
        ellipse(13, 0, 6.5, 6.5);
        ellipse(-11, 0, 6.5, 6.5);
        image(Boltyslightning, -5, -20, 11, 40);
        ellipse(-7, 9, 10, 10); 
        
        if(frameCount%300 < 20){
            noStroke();
            fill(50, 235, 235);
            ellipse(12, -1, 13, 11);
            ellipse(-12, -1, 13, 11);
            
            
        }
    
    
    minecart(0, 30, 0);
    popMatrix();
    noStroke();
    
    
    }
    if(type === "Burned"){
        
        
    
     
        pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
        fill(166, 25, 93);
        ellipse(0, 0, 40, 40+5);
        
        fill(191, 4, 13);
        ellipse(0, 0, 40+2, 40+2);    
        
        noStroke();
        fill(255);
        ellipse(12, 0, 13, 9);
        ellipse(-12, 0, 13, 9);
        fill(25, 168, 168);
        ellipse(12, 1, 6, 6);
        ellipse(-12, 1, 6, 6);
        fill(0);
        ellipse(12, 0, 6.5, 6.5);
        ellipse(-12, 0, 6.5, 6.5);
        image(Boltyslightning, -5, -20, 11, 40);
        fill(255, 0, 0);
        ellipse(-10, 11, 5, 5); 
    ellipse(-6, 11, 5, 5); 
    ellipse(-3, 11, 5, 5); 
        if(frameCount%300 < 20){
            noStroke();
            fill(235, 52, 61);
            ellipse(12, -1, 13, 11);
            ellipse(-12, -1, 13, 11);
            
            
        }
        
        
        
        
        noStroke();
        
        popMatrix();
    
    
    
    
    
    }
    if(type === "Stuck"){
        
        pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
        fill(25, 168, 168);
        ellipse(0, 0, 40, 40+5);
        
        fill(50, 235, 235);
        ellipse(0, 0, 40+2, 40+2);    
        
        noStroke();
        fill(0);
        textSize(20);
    textFont(createFont("Arial Bold"));
    text(">", -18, 3);
    text("<", 6, 3);
        image(Boltyslightning, -5, -20, 11, 40);
        noFill();
        strokeWeight(2);
        stroke(0);
        arc(-7, 14, 10, 10, 180, 360); 
        
        if(frameCount%300 < 20){
            noStroke();
            fill(50, 235, 235);
            ellipse(12, -1, 13, 11);
            ellipse(-12, -1, 13, 11);
            
            
        }
        
        
        
        
        noStroke();
        
        popMatrix();
    
    
    }
    if(type === "Friendship"){
        
        pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
        fill(133, 130, 133);
        ellipse(0, 0, 40, 40);
        ellipse(20, 0, 40, 40);
        ellipse(-20, 0, 40, 40);
        ellipse(-30, 0, 40, 40);
        ellipse(30, 0, 40, 40);
        
        noStroke();
        fill(255);
        ellipse(12, 0, 13, 9);
        ellipse(-12, 0, 13, 9);
        fill(25, 168, 168);
        ellipse(12, 1, 6, 6);
        ellipse(-12, 1, 6, 6);
        fill(0);
        ellipse(12, 0, 6.5, 6.5);
        ellipse(-12, 0, 6.5, 6.5);
        image(Boltyslightning, -5, -20, 11, 40);
        noFill();
        strokeWeight(2);
        stroke(0);
        arc(-7, 9, 12, 15, 40, 153); 
        
        if(frameCount%300 < 20){
            noStroke();
            fill(50, 235, 235);
            ellipse(12, -1, 13, 11);
            ellipse(-12, -1, 13, 11);
            
            
        }
        
        
        
        
        noStroke();
        
        popMatrix();
    
    
    }
    if(type === "Ultra"){
        this.f = 0;
this.noiseV = random(12, 1);

pushMatrix();
translate(x, y);
scale(w, h);
rotate(rot);
noStroke();
pushMatrix();
translate(-50, -50);
scale(0.25);
fill(0, 78, 84, 30);
for (var i = 0; i <30; i+=1) {
    ellipse(200,200, 200+i*9, 200+i*9);
} // Aura thingy

fill(255, 255, 0, 150);
pushMatrix();
    translate(x + w / 1-40, y + h / 1-100);
    
    rotate(animate);
    
    
    for(var i = 0; i < 5; i ++){
        rotate(73);
        ellipse(0, -128 + sin(frameCount * 5) * 5, 100, 100);
    }
    
    popMatrix();
animate+=2;

strokeWeight(sin(frameCount*9)+6);
stroke(1+noise((abs(sin(this.f))) + this.noiseV)*255, 219, 105);
fill(1+noise((abs(sin(this.f))), this.noiseV)*100, 1+noise((abs(sin(this.f))), this.noiseV)*219, 105);
beginShape();

vertex(220, 298);
vertex(180, 298);
vertex(144, 283);
vertex(117, 256);
vertex(102, 220);
vertex(38, 158);
vertex(117, 144);
vertex(109, 81);
vertex(180, 102);
vertex(199, 9);
vertex(256, 117);
vertex(353, 102);
vertex(298, 180);
vertex(380, 186);
vertex(283, 256);
vertex(256, 283);
endShape(CLOSE); // Spike-haired body (with colors)
popMatrix();

noStroke();

// Facial Features --- {
fill(255);
ellipse(-13, 0, 20, 15);
ellipse(13, 0, 20, 15);
fill(25, 168, 168);
ellipse(-13, 1, 10, 10);
ellipse(13, 1, 10, 10);
fill(0);
ellipse(-13, 0, 10, 10);
ellipse(13, 0, 10, 10);

stroke(1+noise((abs(sin(this.f))), this.noiseV)*120, 1+noise((abs(sin(this.f))), this.noiseV)*219, 105);
fill(1+noise((abs(sin(this.f))), this.noiseV)*120, 1+noise((abs(sin(this.f))), this.noiseV)*219, 105);
arc(-13, 0, 20, 20, 210, 380);
arc(13, 0, 20, 20, 160, 330);

noStroke();
image(Boltyslightning, -5, -30, 10, 50);

noFill();
strokeWeight(1.5);
stroke(0);
arc(9, 15, 10, 10, -10, 150);
popMatrix();
    //}
    }
    
    
}; 
var AzuletteS = function(x, y, w, h, type, rot){
    if(type === "Normal"){
        pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
    noStroke();
    
    // Hair {
    fill(255, 217, 0);
    pushMatrix();
    translate(-85,-65);
    scale(0.4);
    
    beginShape();
vertex(163,210);
bezierVertex(121,38,321,57,260,217);
bezierVertex(288,112,164,51,164,216);
endShape();
strokeWeight(40);
noFill();
stroke(255, 217, 0);
arc(240,89,52,73,-180,0);
strokeWeight(1);
fill(255, 217, 0);
triangle(285,92,277,200,247,92);
textSize(40);
text("🌼 ", 185, 98);

popMatrix();
//}

    // Design
    
    pushStyle();
    //{hue(blue);// hue and others
    saturation(blue);
    blue(blue);
    fill(0, 0, 200);
    
//}
    strokeWeight(2);
    stroke(8, 0, 200);
    ellipse(0, 0, 40, 40);
    stroke(0, 0, 255, 100);
    fill(0, 0, 255, 100);
    ellipse(0, -3, 40, 36);
    strokeWeight(2);
    stroke(0);
    line(-10, -7, -20, -11);
    line(-10, -7, -16, -16);
    line(-10, -7, -22, -5);
    line(10, -7, 19, -11);
    line(10, -7, 16, -16);
    line(10, -7, 22, -5);
    
    strokeWeight(2);
    stroke(0, 0, 200);
    fill(255, 255, 255);
    ellipse(-10, -7, 17, 17);
    ellipse(10, -7, 17, 17);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    ellipse(-10, -7, 5, 5);
    ellipse(10, -7, 5, 5);
    stroke(0, 0, 200);
    fill(0, 0, 200);
    arc(-10, -9, 15, 10, 180, 360);
    arc(10, -9, 15, 10, 180, 360);
    fill(149, 0, 255);
    stroke(149, 0, 255);
    ellipse(0, 4, 5, 5);
    fill(251, 0, 255);
    textSize(8);
    textFont(createFont("Arial Bold"));
    text("/ / /", -17, 7);
    text("/ / /", 5, 7);
    noFill();
    strokeWeight((2.5));
    stroke(255, 0, 230);
    arc(4, 12, 15, 10, 0, 123); 
    popStyle();
    if(frameCount%300 < 20){
        strokeWeight(1);
        stroke(0, 0, 200);
        fill(0, 0, 200);
        ellipse(-10, -7, 15, 15);
        ellipse(10, -7, 15, 15);
    }
    popMatrix();
    noStroke();
    }
    if(type === "Waiting"){
        
        pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
    noStroke();
    
    // Hair {
    fill(255, 217, 0);
    pushMatrix();
    translate(-85,-65);
    scale(0.4);
    
    beginShape();
vertex(163,210);
bezierVertex(121,38,321,57,260,217);
bezierVertex(288,112,164,51,164,216);
endShape();
strokeWeight(40);
noFill();
stroke(255, 217, 0);
arc(240,89,52,73,-180,0);
strokeWeight(1);
fill(255, 217, 0);
triangle(285,92,277,200,247,92);
textSize(40);
text("🌼 ", 185, 98);

popMatrix();
//}

    // Design
    
    pushStyle();
    //{hue(blue);// hue and others
    saturation(blue);
    blue(blue);
    fill(0, 0, 200);
    
//}
    strokeWeight(2);
    stroke(8, 0, 200);
    ellipse(0, 0, 40, 40);
    stroke(0, 0, 255, 100);
    fill(0, 0, 255, 100);
    ellipse(0, -3, 40, 36);
    strokeWeight(2);
    stroke(0);
    line(-10, -7, -20, -11);
    line(-10, -7, -16, -16);
    line(-10, -7, -22, -5);
    line(10, -7, 19, -11);
    line(10, -7, 16, -16);
    line(10, -7, 22, -5);
    
    strokeWeight(2);
    stroke(0, 0, 200);
    fill(255, 255, 255);
    ellipse(-10, -7, 17, 17);
    ellipse(10, -7, 17, 17);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    ellipse(-10, -7, 5, 5);
    ellipse(10, -7, 5, 5);
    stroke(0, 0, 200);
    fill(0, 0, 200);
    arc(-10, -9, 15, 10, 180, 360);
    fill(149, 0, 255);
    stroke(149, 0, 255);
    ellipse(0, 4, 5, 5);
    fill(251, 0, 255);
    textSize(8);
    textFont(createFont("Arial Bold"));
    text("/ / /", -17, 7);
    text("/ / /", 5, 7);
    textSize(40);
    fill(2);
    pushMatrix();
    translate(0, random(2));
    text("?", 10, -20);
    popMatrix();
    noFill();
    strokeWeight((2.5));
    stroke(255, 0, 230);
    line(-5, 15, 5, 15); 
    popStyle();
    if(frameCount%300 < 20){
        strokeWeight(1);
        stroke(0, 0, 200);
        fill(0, 0, 200);
        ellipse(-10, -7, 15, 15);
        ellipse(10, -7, 15, 15);
    }
    popMatrix();
    noStroke();
    
    }
    if(type === "Waiting2"){
        
        
        pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
    noStroke();
    
    // Hair {
    fill(255, 217, 0);
    pushMatrix();
    translate(-85,-65);
    scale(0.4);
    
    beginShape();
vertex(163,210);
bezierVertex(121,38,321,57,260,217);
bezierVertex(288,112,164,51,164,216);
endShape();
strokeWeight(40);
noFill();
stroke(255, 217, 0);
arc(240,89,52,73,-180,0);
strokeWeight(1);
fill(255, 217, 0);
triangle(285,92,277,200,247,92);
textSize(40);
text("🌼 ", 185, 98);

popMatrix();
//}

    // Design
    
    pushStyle();
    //{hue(blue);// hue and others
    saturation(blue);
    blue(blue);
    fill(0, 0, 200);
    
//}
    strokeWeight(2);
    stroke(8, 0, 200);
    ellipse(0, 0, 40, 40);
    stroke(0, 0, 255, 100);
    fill(0, 0, 255, 100);
    ellipse(0, -3, 40, 36);
    strokeWeight(2);
    stroke(0);
    line(-10, -7, -20, -11);
    line(-10, -7, -16, -16);
    line(-10, -7, -22, -5);
    line(10, -7, 19, -11);
    line(10, -7, 16, -16);
    line(10, -7, 22, -5);
    
    strokeWeight(2);
    stroke(0, 0, 200);
    fill(255, 255, 255);
    ellipse(-10, -7, 17, 17);
    ellipse(10, -7, 17, 17);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    ellipse(-11, -5, 5, 5);
    ellipse(9, -5, 5, 5);
    fill(149, 0, 255);
    stroke(149, 0, 255);
    ellipse(0, 4, 5, 5);
    fill(251, 0, 255);
    textSize(8);
    textFont(createFont("Arial Bold"));
    text("/ / /", -17, 7);
    text("/ / /", 5, 7);
    textSize(40);
    noStroke();
    fill(255, 0, 0);
    ellipse(5, 15, 10, 10);
    fill(0);
    rect(-25, 5, 10, 15);
    fill(94, 94, 94);
    rect(-24, 6, 8, 13);
    popStyle();
    if(frameCount%300 < 20){
        strokeWeight(1);
        stroke(0, 0, 200);
        fill(0, 0, 200);
        ellipse(-10, -7, 15, 15);
        ellipse(10, -7, 15, 15);
    }
    popMatrix();
    noStroke();
    
    
    }
    if(type === "Hurt"){
        
        pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
    noStroke();
    
    // Hair {
    fill(207, 41, 77);
    pushMatrix();
    translate(-85,-65);
    scale(0.4);
    
    beginShape();
vertex(163,210);
bezierVertex(121,38,321,57,260,217);
bezierVertex(288,112,164,51,164,216);
endShape();
strokeWeight(40);
noFill();
stroke(207, 41, 77);
arc(240,89,52,73,-180,0);
strokeWeight(1);
fill(207, 41, 77);
triangle(285,92,277,200,247,92);
textSize(40);
text("🌼 ", 185, 98);

popMatrix();
//}

    // Design
    
    pushStyle();
    //{hue(blue);// hue and others
    saturation(blue);
    blue(blue);
    
//}
strokeWeight(2);
    stroke(163, 0, 199);
    fill(163, 0, 199);
    ellipse(0, 0, 40, 40);
    stroke(255, 0, 242, 20);
    fill(255, 0, 242, 100);
    ellipse(0, -3, 40, 36);
    strokeWeight(2);
    stroke(87, 2, 2);
    line(-10, -7, -20, -11);
    line(-10, -7, -16, -16);
    line(-10, -7, -22, -5);
    line(10, -7, 19, -11);
    line(10, -7, 16, -16);
    line(10, -7, 22, -5);
    
    strokeWeight(2);
    stroke(163, 0, 199);
    fill(255, 255, 255);
    ellipse(-10, -7, 17, 17);
    ellipse(10, -7, 17, 17);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    ellipse(-10, -7, 5, 5);
    //ellipse(10, -7, 5, 5);
    textSize(12);
    text("X", 6, -3);
    stroke(163, 0, 199);
    fill(163, 0, 199);
    arc(-10, -7, 15, 13, 0, 190);
    
    fill(149, 0, 255);
    stroke(149, 0, 255);
    ellipse(0, 4, 5, 5);
    stroke(2, 44, 92, 200);
    fill(2, 44, 92, 200);
    ellipse(-10, -1, 3, 3);
    ellipse(-7, -1, 3, 3);
    ellipse(-13, -1, 3, 3);
    fill(251, 0, 255);
    textSize(8);
    textFont(createFont("Arial Bold"));
    text("/ / /", -17, 7);
    text("/ / /", 5, 7);
    noStroke();
    textSize(15);
    fill(255, 0, 0);
    text("﹏", -6, 15);
    popStyle();
    if(frameCount%300 < 20){
        strokeWeight(1);
        stroke(163, 0, 255);
        fill(163, 0, 255);
        ellipse(-10, -7, 15, 15);
        ellipse(10, -7, 15, 15);
    }
    popMatrix();
    noStroke();
    
    }
    if(type === "Bounce"){
        
        pushMatrix();
    translate(x, y);
    scale(w-0.2, h+0.3);
    rotate(rot);
    noStroke();
    
    // Hair {
    fill(255, 217, 0);
    pushMatrix();
    translate(-85,-65);
    scale(0.4);
    
    beginShape();
vertex(163,210);
bezierVertex(121,38,321,57,260,217);
bezierVertex(288,112,164,51,164,216);
endShape();
strokeWeight(40);
noFill();
stroke(255, 217, 0);
arc(240,89,52,73,-180,0);
strokeWeight(1);
fill(255, 217, 0);
triangle(285,92,277,200,247,92);
textSize(40);
text("🌼 ", 185, 98);

popMatrix();
//}

    // Design
    
    pushStyle();
    //{hue(blue);// hue and others
    saturation(blue);
    blue(blue);
    fill(0, 0, 200);
    
//}
    strokeWeight(2);
    stroke(8, 0, 200);
    ellipse(0, 0, 40, 40);
    stroke(0, 0, 255, 100);
    fill(0, 0, 255, 100);
    ellipse(0, -3, 40, 36);
    strokeWeight(2);
    stroke(0);
    line(-10, -7, -20, -11);
    line(-10, -7, -16, -16);
    line(-10, -7, -22, -5);
    line(10, -7, 19, -11);
    line(10, -7, 16, -16);
    line(10, -7, 22, -5);
    
    strokeWeight(2);
    stroke(0, 0, 200);
    fill(255, 255, 255);
    ellipse(-10, -7, 17, 17);
    ellipse(10, -7, 17, 17);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    ellipse(-10, -7, 5, 5);
    ellipse(10, -7, 5, 5);
    stroke(0, 0, 200);
    fill(0, 0, 200);
    arc(-10, -9, 15, 10, 180, 360);
    arc(10, -9, 15, 10, 180, 360);
    fill(149, 0, 255);
    stroke(149, 0, 255);
    ellipse(0, 4, 5, 5);
    fill(251, 0, 255);
    textSize(8);
    textFont(createFont("Arial Bold"));
    text("/ / /", -17, 7);
    text("/ / /", 5, 7);
    noFill();
    strokeWeight((2.5));
    stroke(255, 0, 230);
    arc(4, 12, 15, 10, 0, 123); 
    popStyle();
    if(frameCount%300 < 20){
        strokeWeight(1);
        stroke(0, 0, 200);
        fill(0, 0, 200);
        ellipse(-10, -7, 15, 15);
        ellipse(10, -7, 15, 15);
    }
    popMatrix();
    noStroke();
    
    }
    if(type === "Ledge1"){
        
        pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
    noStroke();
    
    // Hair {
    fill(255, 217, 0);
    pushMatrix();
    translate(-85,-65);
    scale(0.4);
    
    beginShape();
vertex(163,210);
bezierVertex(121,38,321,57,260,217);
bezierVertex(288,112,164,51,164,216);
endShape();
strokeWeight(40);
noFill();
stroke(255, 217, 0);
arc(240,89,52,73,-180,0);
strokeWeight(1);
fill(255, 217, 0);
triangle(285,92,277,200,247,92);
textSize(40);
text("🌼 ", 185, 98);

popMatrix();
//}

    // Design
    
    pushStyle();
    //{hue(blue);// hue and others
    saturation(blue);
    blue(blue);
    fill(0, 0, 200);
    
//}
    strokeWeight(2);
    stroke(8, 0, 200);
    ellipse(0, 0, 40, 40);
    stroke(0, 0, 255, 100);
    fill(0, 0, 255, 100);
    ellipse(0, -3, 40, 36);
    strokeWeight(2);
    stroke(0);
    line(-10, -7, -20, -11);
    line(-10, -7, -16, -16);
    line(-10, -7, -22, -5);
    line(10, -7, 19, -11);
    line(10, -7, 16, -16);
    line(10, -7, 22, -5);
    
    strokeWeight(2);
    stroke(0, 0, 200);
    fill(255, 255, 255);
    ellipse(-10, -7, 17, 17);
    ellipse(10, -7, 17, 17);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    ellipse(-12, -5, 5, 5);
    ellipse(8, -5, 5, 5);
    stroke(0, 0, 200);
    fill(0, 0, 200);
    //arc(-10, -9, 15, 10, 180, 360);
    arc(10, -9, 15, 10, 180, 360);
    fill(149, 0, 255);
    stroke(149, 0, 255);
    ellipse(0, 4, 5, 5);
    fill(251, 0, 255);
    textSize(8);
    textFont(createFont("Arial Bold"));
    text("/ / /", -17, 7);
    text("/ / /", 5, 7);
    fill(255, 0, 0);
    stroke(255, 0, 23);
    arc(1, 17, 15, 10, 180, 363); 
    popStyle();
    if(frameCount%300 < 20){
        strokeWeight(1);
        stroke(0, 0, 200);
        fill(0, 0, 200);
        ellipse(-10, -7, 15, 15);
        ellipse(10, -7, 15, 15);
    }
    popMatrix();
    noStroke();
    
    }
    if(type === "Ledge2"){
        
        
        pushMatrix();
    translate(x, y);
    scale(w-2, h);
    rotate(rot);
    noStroke();
    
    // Hair {
    fill(255, 217, 0);
    pushMatrix();
    translate(-85,-65);
    scale(0.4);
    
    beginShape();
vertex(163,210);
bezierVertex(121,38,321,57,260,217);
bezierVertex(288,112,164,51,164,216);
endShape();
strokeWeight(40);
noFill();
stroke(255, 217, 0);
arc(240,89,52,73,-180,0);
strokeWeight(1);
fill(255, 217, 0);
triangle(285,92,277,200,247,92);
textSize(40);
text("🌼 ", 185, 98);

popMatrix();
//}

    // Design
    
    pushStyle();
    //{hue(blue);// hue and others
    saturation(blue);
    blue(blue);
    fill(0, 0, 200);
    
//}
    strokeWeight(2);
    stroke(8, 0, 200);
    ellipse(0, 0, 40, 40);
    stroke(0, 0, 255, 100);
    fill(0, 0, 255, 100);
    ellipse(0, -3, 40, 36);
    strokeWeight(2);
    stroke(0);
    line(-10, -7, -20, -11);
    line(-10, -7, -16, -16);
    line(-10, -7, -22, -5);
    line(10, -7, 19, -11);
    line(10, -7, 16, -16);
    line(10, -7, 22, -5);
    
    strokeWeight(2);
    stroke(0, 0, 200);
    fill(255, 255, 255);
    ellipse(-10, -7, 17, 17);
    ellipse(10, -7, 17, 17);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    ellipse(-12, -5, 5, 5);
    ellipse(8, -5, 5, 5);
    stroke(0, 0, 200);
    fill(0, 0, 200);
    //arc(-10, -9, 15, 10, 180, 360);
    arc(10, -9, 15, 10, 180, 360);
    fill(149, 0, 255);
    stroke(149, 0, 255);
    ellipse(0, 4, 5, 5);
    fill(251, 0, 255);
    textSize(8);
    textFont(createFont("Arial Bold"));
    text("/ / /", -17, 7);
    text("/ / /", 5, 7);
    fill(255, 0, 0);
    stroke(255, 0, 23);
    arc(-1, 17, 15, 10, 180, 363); 
    popStyle();
    if(frameCount%300 < 20){
        strokeWeight(1);
        stroke(0, 0, 200);
        fill(0, 0, 200);
        ellipse(-10, -7, 15, 15);
        ellipse(10, -7, 15, 15);
    }
    popMatrix();
    noStroke();
    
    
    }
    if(type === "LookUp"){
        
        pushMatrix();
    translate(x, y);
    scale(w, h+0.1);
    rotate(rot);
    noStroke();
    
    // Hair {
    fill(255, 217, 0);
    pushMatrix();
    translate(-85,-65);
    scale(0.4);
    
    beginShape();
vertex(163,210);
bezierVertex(121,38,321,57,260,217);
bezierVertex(288,112,164,51,164,216);
endShape();
strokeWeight(40);
noFill();
stroke(255, 217, 0);
arc(240,89,52,73,-180,0);
strokeWeight(1);
fill(255, 217, 0);
triangle(285,92,277,200,247,92);
textSize(40);
text("🌼 ", 185, 98);

popMatrix();
//}

    // Design
    
    pushStyle();
    //{hue(blue);// hue and others
    saturation(blue);
    blue(blue);
    fill(0, 0, 200);
    
//}
    strokeWeight(2);
    stroke(8, 0, 200);
    ellipse(0, 0, 40, 40);
    stroke(0, 0, 255, 100);
    fill(0, 0, 255, 100);
    ellipse(0, -3, 40, 36);
    strokeWeight(2);
    stroke(0);
    line(-10, -7, -20, -11);
    line(-10, -7, -16, -16);
    line(-10, -7, -22, -5);
    line(10, -7, 19, -11);
    line(10, -7, 16, -16);
    line(10, -7, 22, -5);
    
    strokeWeight(2);
    stroke(0, 0, 200);
    fill(255, 255, 255);
    ellipse(-10, -7, 17, 17);
    ellipse(10, -7, 17, 17);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    ellipse(-8, -8, 5, 5);
    ellipse(12, -8, 5, 5);
    stroke(0, 0, 200);
    fill(0, 0, 200);
    arc(-10, -9, 15, 10, 180, 360);
    arc(10, -9, 15, 10, 180, 360);
    fill(149, 0, 255);
    stroke(149, 0, 255);
    ellipse(0, 4, 5, 5);
    fill(251, 0, 255);
    textSize(8);
    textFont(createFont("Arial Bold"));
    text("/ / /", -17, 7);
    text("/ / /", 5, 7);
    noFill();
    strokeWeight((2.5));
    stroke(255, 0, 230);
    arc(4, 12, 15, 10, 0, 123); 
    popStyle();
    if(frameCount%300 < 20){
        strokeWeight(1);
        stroke(0, 0, 200);
        fill(0, 0, 200);
        ellipse(-10, -7, 15, 15);
        ellipse(10, -7, 15, 15);
    }
    popMatrix();
    noStroke();
    
    }
    if(type === "LookDown"){
        
        
        pushMatrix();
    translate(x, y);
    scale(w, h-0.1);
    rotate(rot);
    noStroke();
    
    // Hair {
    fill(255, 217, 0);
    pushMatrix();
    translate(-85,-65);
    scale(0.4);
    
    beginShape();
vertex(163,210);
bezierVertex(121,38,321,57,260,217);
bezierVertex(288,112,164,51,164,216);
endShape();
strokeWeight(40);
noFill();
stroke(255, 217, 0);
arc(240,89,52,73,-180,0);
strokeWeight(1);
fill(255, 217, 0);
triangle(285,92,277,200,247,92);
textSize(40);
text("🌼 ", 185, 98);

popMatrix();
//}

    // Design
    
    pushStyle();
    //{hue(blue);// hue and others
    saturation(blue);
    blue(blue);
    fill(0, 0, 200);
    
//}
    strokeWeight(2);
    stroke(8, 0, 200);
    ellipse(0, 0, 40, 40);
    stroke(0, 0, 255, 100);
    fill(0, 0, 255, 100);
    ellipse(0, -3, 40, 36);
    strokeWeight(2);
    stroke(0);
    line(-10, -7, -20, -11);
    line(-10, -7, -16, -16);
    line(-10, -7, -22, -5);
    line(10, -7, 19, -11);
    line(10, -7, 16, -16);
    line(10, -7, 22, -5);
    
    strokeWeight(2);
    stroke(0, 0, 200);
    fill(255, 255, 255);
    ellipse(-10, -7, 17, 17);
    ellipse(10, -7, 17, 17);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    ellipse(-8, -4, 5, 5);
    ellipse(12, -4, 5, 5);
    stroke(0, 0, 200);
    fill(0, 0, 200);
    arc(-10, -9, 15, 10, 180, 360);
    arc(10, -9, 15, 10, 180, 360);
    fill(149, 0, 255);
    stroke(149, 0, 255);
    ellipse(0, 4, 5, 5);
    fill(251, 0, 255);
    textSize(8);
    textFont(createFont("Arial Bold"));
    text("/ / /", -17, 7);
    text("/ / /", 5, 7);
    noFill();
    strokeWeight((2.5));
    stroke(255, 0, 230);
    arc(4, 12, 15, 10, 0, 123); 
    popStyle();
    if(frameCount%300 < 20){
        strokeWeight(1);
        stroke(0, 0, 200);
        fill(0, 0, 200);
        ellipse(-10, -7, 15, 15);
        ellipse(10, -7, 15, 15);
    }
    popMatrix();
    noStroke();
    
    
    }
    if(type === "Frozen"){
        
    
     pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
    
    noStroke();
    
    // Hair {
    fill(0, 166, 255);
    pushMatrix();
    translate(-85,-65);
    scale(0.4);
    
    beginShape();
vertex(163,210);
bezierVertex(121,38,321,57,260,217);
bezierVertex(288,112,164,51,164,216);
endShape();
strokeWeight(40);
noFill();
stroke(0, 166, 255);
arc(240,89,52,73,-180,0);
strokeWeight(1);
fill(0, 166, 255);
triangle(285,92,277,200,247,92);

popMatrix();
//}

    // Design
    
    pushStyle();
    //{hue(blue);// hue and others
    saturation(blue);
    blue(blue);
    fill(0, 0, 200);
    
//}
    strokeWeight(2);
    stroke(8, 0, 200);
    ellipse(0, 0, 40, 40);
    stroke(0, 0, 255, 100);
    fill(0, 0, 255, 100);
    ellipse(0, -3, 40, 36);
    strokeWeight(2);
    stroke(0);
    line(-10, -7, -20, -11);
    line(-10, -7, -16, -16);
    line(-10, -7, -22, -5);
    line(10, -7, 19, -11);
    line(10, -7, 16, -16);
    line(10, -7, 22, -5);
    
    strokeWeight(2);
    stroke(0, 0, 200);
    fill(255, 255, 255);
    ellipse(-10, -7, 17, 17);
    ellipse(10, -7, 17, 17);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    ellipse(-10, -7, 5, 5);
    ellipse(10, -7, 5, 5);
    fill(149, 0, 255);
    stroke(149, 0, 255);
    ellipse(0, 4, 5, 5);
    fill(251, 0, 255);
    textSize(8);
    textFont(createFont("Arial Bold"));
    text("/ / /", -17, 7);
    text("/ / /", 5, 7);
    fill(255, 0, 0);
    ellipse(0, 15, 10, 10);
    popStyle();
    if(frameCount%300 < 20){
        strokeWeight(1);
        stroke(0, 0, 200);
        fill(0, 0, 200);
        ellipse(-10, -7, 15, 15);
        ellipse(10, -7, 15, 15);
    }
    noStroke();
    
    pushMatrix();
    translate(0, 0-7);
    scale(1.1, 1.1);
    strokeWeight(5);
    stroke(13, 235, 247);
    fill(43, 156, 227, 200);
    rect(-40, -40, 80, 80, 5);
    strokeWeight(5);
    stroke(0, 153, 255);
    fill(25, 5, 173, 150);
    rect(-30, -30, 60, 60, 5);
    
    textSize(20);
    fill(255, 100);
    text("/", -30, -15);
    text("/", 30, 35);
    textSize(40);
    text("/", -25, 0);
    text("/", 15, 35);
    textSize(70);
    text("/", -10, 25);
    popMatrix();
    popMatrix();
    noStroke();
    
    
    }
    if(type === "Minecart"){
        rectMode(CORNER);
        
    
     pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
    
     noStroke();
    
    // Hair {
    fill(255, 217, 0);
    pushMatrix();
    translate(-85,-65);
    scale(0.4);
    
    beginShape();
vertex(163,210);
bezierVertex(121,38,321,57,260,217);
bezierVertex(288,112,164,51,164,216);
endShape();
strokeWeight(40);
noFill();
stroke(255, 217, 0);
arc(240,89,52,73,-180,0);
strokeWeight(1);
fill(255, 217, 0);
triangle(285,92,277,200,247,92);
textSize(40);
text("🌼 ", 185, 98);

popMatrix();
//}

    // Design
    
    pushStyle();
    //{hue(blue);// hue and others
    saturation(blue);
    blue(blue);
    fill(0, 0, 200);
    
//}
    strokeWeight(2);
    stroke(8, 0, 200);
    ellipse(0, 0, 40, 40);
    stroke(0, 0, 255, 100);
    fill(0, 0, 255, 100);
    ellipse(0, -3, 40, 36);
    strokeWeight(2);
    stroke(0);
    line(-10, -7, -20, -11);
    line(-10, -7, -16, -16);
    line(-10, -7, -22, -5);
    line(10, -7, 19, -11);
    line(10, -7, 16, -16);
    line(10, -7, 22, -5);
    
    strokeWeight(2);
    stroke(0, 0, 200);
    fill(255, 255, 255);
    ellipse(-10, -7, 17, 17);
    ellipse(10, -7, 17, 17);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    ellipse(-8, -7, 5, 5);
    ellipse(12, -7, 5, 5);
    stroke(0, 0, 200);
    fill(149, 0, 255);
    stroke(149, 0, 255);
    ellipse(0, 4, 5, 5);
    fill(251, 0, 255);
    textSize(8);
    textFont(createFont("Arial Bold"));
    text("/ / /", -17, 7);
    text("/ / /", 5, 7);
    noFill();
    strokeWeight((2.5));
    stroke(255, 0, 230);
    arc(4, 12, 15, 10, 0, 123); 
    popStyle();
    if(frameCount%300 < 20){
        strokeWeight(1);
        stroke(0, 0, 200);
        fill(0, 0, 200);
        ellipse(-10, -7, 15, 15);
        ellipse(10, -7, 15, 15);
    }
    minecart(0, 30, 0);
    popMatrix();
    noStroke();
    
    
    }
    if(type === "Electric"){
        strokeWeight(1);
        noStroke();
        pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
    fill(255, 243, 0, 20);
for (var i = 0; i <4; i+=1) {
    ellipse(0,0, 100+i*9, 100+i*9);
}
// Hair {
    fill(0);
    pushMatrix();
    translate(-85,-70);
    scale(0.4);
    
    beginShape();
vertex(163,210);
bezierVertex(121,38,321,57,260,217);
bezierVertex(288,112,164,51,164,216);
endShape();
strokeWeight(40);
noFill();
stroke(2);
arc(240,89,52,73,-180,0);
strokeWeight(1);
fill(0);
triangle(285,92,277,200,247,92);

popMatrix();
//}
    fill(255, 255, 0);
    ellipse(0, 0, 50, 50);
    fill(0);
    ellipse(0, 0, 40, 40);
    fill(255, 255, 0);
    ellipse(-10, -7, 17, 17);
    ellipse(10, -7, 17, 17);
    ellipse(0, 2, 5, 5);
    arc(2, 15, 20, 15, 180, 363);
        popMatrix();
    }
    if(type === "Electric2"){
        noStroke();
        pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
    fill(255, 243, 0, 20);
for (var i = 0; i <4; i+=1) {
    ellipse(0,0, 100+i*9, 100+i*9);
}
// Hair {
    fill(196, 196, 196);
    pushMatrix();
    translate(-85,-70);
    scale(0.4);
    
    beginShape();
vertex(163,210);
bezierVertex(121,38,321,57,260,217);
bezierVertex(288,112,164,51,164,216);
endShape();
strokeWeight(40);
noFill();
stroke(196, 196, 196);
arc(240,89,52,73,-180,0);
strokeWeight(1);
fill(196, 196, 196);
triangle(285,92,277,200,247,92);

popMatrix();
//}
    fill(0, 0, 0);
    ellipse(0, 0, 50, 50);
    fill(196, 196, 196);
    ellipse(0, 0, 40, 40);
    fill(0);
    ellipse(-10, -7, 17, 17);
    ellipse(10, -7, 17, 17);
    ellipse(0, 2, 5, 5);
    arc(2, 15, 20, 15, 180, 363);
        popMatrix();
    }
    if(type === "Burned"){
        
        
    
    
        pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
    noStroke();
    
    // Hair {
    fill(168, 3, 3);
    pushMatrix();
    translate(-85,-65);
    scale(0.4);
    
    beginShape();
vertex(163,210);
bezierVertex(121,38,321,57,260,217);
bezierVertex(288,112,164,51,164,216);
endShape();
strokeWeight(40);
noFill();
stroke(163, 3, 3);
arc(240,89,52,73,-180,0);
strokeWeight(1);
fill(158, 5, 5);
triangle(285,92,277,200,247,92);
textSize(40);
text("🌼 ", 185, 98);

popMatrix();
//}

    // Design
    
    pushStyle();
    //{hue(blue);// hue and others
    saturation(blue);
    blue(blue);
    fill(0, 0, 200);
    
//}
    strokeWeight(2);
    stroke(163, 5, 5);
    fill(163, 5, 5);
    ellipse(0, 0, 40, 40);
    stroke(163, 0, 5, 100);
    fill(255, 0, 2, 100);
    ellipse(0, -3, 40, 36);
    strokeWeight(2);
    stroke(0);
    line(-10, -7, -20, -11);
    line(-10, -7, -16, -16);
    line(-10, -7, -22, -5);
    line(10, -7, 19, -11);
    line(10, -7, 16, -16);
    line(10, -7, 22, -5);
    
    strokeWeight(2);
    stroke(163, 0, 0);
    fill(255, 255, 255);
    ellipse(-10, -7, 17, 17);
    ellipse(10, -7, 17, 17);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    ellipse(-10, -7, 5, 5);
    ellipse(10, -7, 5, 5);
    stroke(163, 0, 0);
    fill(153, 0, 0);
    arc(-10, -9, 15, 10, 180, 360);
    arc(10, -9, 15, 10, 180, 360);
    stroke(2, 44, 92, 200);
    fill(2, 44, 92, 200);
    ellipse(-10, -1, 3, 3);
    ellipse(-7, -1, 3, 3);
    ellipse(-13, -1, 3, 3);
    ellipse(10, -1, 3, 3);
    ellipse(7, -1, 3, 3);
    ellipse(13, -1, 3, 3);
    fill(149, 0, 255);
    stroke(149, 0, 255);
    ellipse(0, 4, 5, 5);
    fill(251, 0, 255);
    textSize(8);
    textFont(createFont("Arial Bold"));
    text("/ / /", -17, 7);
    text("/ / /", 5, 7);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    ellipse(-5, 14, 10, 10); 
    ellipse(0, 14, 10, 10); 
    ellipse(5, 14, 10, 10); 
    popStyle();
    if(frameCount%300 < 20){
        strokeWeight(1);
        stroke(163, 0, 0);
        fill(163, 0, 0);
        ellipse(-10, -7, 15, 15);
        ellipse(10, -7, 15, 15);
    }
    popMatrix();
    noStroke();
    
    
    
    
    }
    if(type === "Stuck"){
        
        pushMatrix();
    translate(x, y);
    scale(w, h);
    rotate(rot);
    noStroke();
    
    // Hair {
    fill(255, 217, 0);
    pushMatrix();
    translate(-85,-65);
    scale(0.4);
    
    beginShape();
vertex(163,210);
bezierVertex(121,38,321,57,260,217);
bezierVertex(288,112,164,51,164,216);
endShape();
strokeWeight(40);
noFill();
stroke(255, 217, 0);
arc(240,89,52,73,-180,0);
strokeWeight(1);
fill(255, 217, 0);
triangle(285,92,277,200,247,92);
textSize(40);
text("🌼 ", 185, 98);

popMatrix();
//}

    // Design
    
    pushStyle();
    //{hue(blue);// hue and others
    saturation(blue);
    blue(blue);
    fill(0, 0, 200);
    
//}
    strokeWeight(2);
    stroke(8, 0, 200);
    ellipse(0, 0, 40, 40);
    stroke(0, 0, 255, 100);
    fill(0, 0, 255, 100);
    ellipse(0, -3, 40, 36);
    
    
    strokeWeight(2);
     fill(0, 0, 0);
    stroke(0, 0, 0);
    textSize(30);
    textFont(createFont("Arial Bold"));
    text(">", -19, 3);
    text("<", 0, 3);
    fill(149, 0, 255);
    stroke(149, 0, 255);
    ellipse(0, 4, 5, 5);
    fill(251, 0, 255);
    textSize(8);
    textFont(createFont("Arial Bold"));
    text("/ / /", -17, 7);
    text("/ / /", 5, 7);
    noFill();
    strokeWeight((2.5));
    stroke(255, 0, 230);
    arc(1, 15, 10, 10, 180, 363); 
    popStyle();
    
    popMatrix();
    noStroke();
    
    }
    
    
};
//}


// BG art (prerendered)
var Mount = function(col, ScaleX, ScaleY, TranslateX, TranslateY) {
    resetMatrix();
    scale(ScaleX * 1.5, ScaleY * 1.5);
    translate(TranslateX, TranslateY);
    
    noStroke();
    fill(col);
    beginShape();
    vertex(169, 192);
    vertex(140, 212);
    vertex(130, 210);
    vertex(70, 240);
    vertex(30, 250);
    vertex(-10, 265);
    vertex(-10, 400);
    vertex(410, 400);
    vertex(410, 280);
    vertex(370, 270);
    vertex(350, 261);
    vertex(320, 251);
    vertex(290, 221);
    vertex(278, 200);
    vertex(255, 176);
    vertex(239, 186);
    vertex(223, 191);
    vertex(200, 206);
    vertex(184, 201);
    vertex(169, 192);
    endShape();
    resetMatrix();
};

//(IMGS) Level assets{

var palette = {
    clear : color(255, 255, 255, 0), 
    purple : [
        color(53, 32, 66),
        color(70, 64, 71),
        color(107, 99, 107),
        color(184, 138, 165)
    ], pink : [
        color(255, 130, 155),
        color(255, 215, 225)
    ], orange : [
        color(235, 210, 210),
        color(255, 230, 215)
    ], green : [
        color(100, 135, 170),
        color(110, 170, 175),
        color(145, 200, 185),
        color(175, 230, 195)
    ]
};

function gradient3 (x, y, w, h, c1, c2, ramp) {
        noStroke();
        for (var i = 0; i < h; i++) {
            fill(lerpColor(c1, c2, Math.pow(i, ramp) / Math.pow(h, ramp)));
            rect(x, y + i, w, 1);
        }
    }
    function roundGrad (x, y, w, h, c1, c2, ramp) {
        strokeWeight(2);
        for (var i = 0; i < h; i++) {
            stroke(lerpColor(c1, c2, Math.pow(i, ramp) / Math.pow(h, ramp)));
            line(x - cos(asin(i / h * 2 - 1)) * w / 2, y - h / 2 + i, x + cos(asin(i / h * 2 - 1)) * w / 2, y - h / 2 + i);
        }
    }
function hx (x, y, w, h) {
        beginShape();
        vertex(x - w / 2, y - h / 2);
        vertex(x - w / 2 - h / 2, y);
        vertex(x - w / 2, y + h / 2);
        vertex(x + w / 2, y + h / 2);
        vertex(x + w / 2 + h / 2, y);
        vertex(x + w / 2, y - h / 2);
        endShape();
    }
    var tree4 = function(x, y, s) {
    pushMatrix();
    translate(x, y);
    scale(s);
    stroke(43, 22, 4);
    strokeWeight(7);
    line(280, 329, 280, 367);
    noStroke();
    fill(124, 153, 107);
    arc(280, 308, 75, 75, 270, 450);
    fill(88, 115, 73);
    arc(280, 308, 75, 75, 91, 270); // bottom tree leaves
    fill(124, 153, 107);
    arc(280, 265, 56, 56, 270, 450);
    fill(88, 115, 73);
    arc(280, 265, 56, 56, 91, 270); // middle tree leaves
    fill(123, 153, 107);
    arc(280, 231, 36, 36, 270, 450);
    fill(88, 115, 73);
    arc(280, 231, 36, 36, 91, 270); // top tree leaves
    popMatrix();
};
function column (x, y, h, sz, n) {
    pushMatrix();
        translate(x, y);
        scale(sz / 100, sz / 100);
        
        noStroke();
        
        // Top
        if (n === 0) {
            fill(84, 84, 84);
            beginShape();
            vertex(-40, -75 - h);
            vertex(40, -75 - h);
            vertex(40, -75 - h / 5 * 3);
            vertex(25, -65 - h / 5 * 3);
            vertex(40, -55 - h / 5 * 3);
            vertex(40, -75);
            vertex(-40, -75);
            vertex(-40, -55 - h / 4);
            vertex(-25, -65 - h / 4);
            vertex(-40, -75 - h / 4);
            endShape();
            
            fill(palette.purple[3]);
            ellipse(-18, -5 - h, 6, 6);
            ellipse(0, -5 - h, 6, 6);
            ellipse(18, -5 - h, 6, 6);
            
            gradient3(-21, -5 - h, 6, h - 70, palette.purple[3], palette.purple[2], 2);
            
            gradient3(-3, -5 - h, 6, h - 70, palette.purple[3], palette.purple[2], 2);
            
            gradient3(15, -5 - h, 6, h - 70, palette.purple[3], palette.purple[2], 2);
            
            gradient3(-40, -60 - h, 80, 40, palette.purple[1], palette.purple[0], 2);
            
            fill(palette.purple[3]);
            rect(-40, -65 - h, 80, 5);
            rect(-40, -20 - h, 80, 5);
            
            fill(palette.purple[2]);
            rect(-45, -75 - h, 90, 10);
            ellipse(-50, -50 - h, 45, 45);
            ellipse(50, -50 - h, 45, 45);
            
            roundGrad(-50, -50 - h, 25, 25, palette.purple[1], palette.purple[0], 2);
            roundGrad(50, -50 - h, 25, 25, palette.purple[1], palette.purple[0], 2);
        } else {
            fill(palette.purple[2]);
            beginShape();
            vertex(-40, -75 - h);
            vertex(-30, -90 - h);
            vertex(-20, -75 - h);
            vertex(0, -75 - h);
            vertex(10, -60 - h);
            vertex(20, -60 - h);
            vertex(30, -75 - h);
            vertex(40, -60 - h);
            vertex(40, -75);
            vertex(-40, -75);
            endShape();
            
            fill(palette.purple[3]);
            ellipse(-18, -45 - h, 6, 6);
            ellipse(0, -45 - h, 6, 6);
            ellipse(18, -45 - h, 6, 6);
            gradient3(-21, -45 - h, 6, h - 30, palette.purple[3], palette.purple[2], 2);
            
            gradient3(-3, -45 - h, 6, h - 30, palette.purple[3], palette.purple[2], 2);
            
            gradient3(15, -45 - h, 6, h - 30, palette.purple[3], palette.purple[2], 2);
        }
        
        // Base
        
        noStroke();
        fill(palette.purple[0]);
        rect (-38, -55, 74, 10);
        
        fill(palette.purple[1]);
        hx (0, -65, 90, 20);
        
        rect(-50, -45, 100, 10);
        
        gradient3(-55, -35, 110, 35, palette.purple[2], palette.purple[1], 1);
        
        popMatrix();
    }
var drawBlockHHZ = function(x, y, sz) {
    rectMode(CENTER);
    
    
    noStroke();
    fill((x / 5 + y + frameCount) % 255, 0, 0);
    
    rect(x + sz / 2, y + sz / 2, sz, sz);
    
    
    stroke(255, 2, 2, 100);
    strokeWeight(sz / 6);
    noFill();
    
    rect(x + sz / 2, y + sz / 2, sz / 6 * 5, sz / 6 * 5);
    
    strokeWeight(sz / 10);
    rect(x + sz / 2, y + sz / 2, sz / 3, sz / 3);
    
    noStroke();
    rectMode(CORNER);
};
var HHZblock1 = function(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.clr = color(89, 88, 88);
    noStroke();
    fill(this.clr);
    rect(this.x, this.y, this.w, this.h);
    noStroke();
    fill(lerpColor(this.clr, 255, 0.1));
    quad(this.x, this.y, this.x+this.w, this.y, this.x+this.w/4*3, this.y+this.h/4, this.x+this.w/4, this.y+this.h/4);
    fill(lerpColor(this.clr, 0, 0.1));
    quad(this.x, this.y, this.x+this.w/4, this.y+this.h/4, this.x+this.w/4, this.y+this.h/4*3, this.x, this.y+this.h);
    fill(lerpColor(this.clr, 0, 0.3));
    quad(this.x, this.y+this.h, this.x+this.w, this.y+this.h, this.x+this.w/4*3, this.y+this.h/4*3, this.x+this.w/4, this.y+this.h/4*3);
    fill(lerpColor(this.clr, 0, 0.2));
    quad(this.x+this.w, this.y, this.x+this.w, this.y+this.h, this.x+this.w/4*3, this.y+this.h/4*3, this.x+this.w/4*3, this.y+this.h/4);
};
var drawLantern = function (x, y, size, length, x_vel, y_vel, swing, flicker) {
    
    pushMatrix();
    translate(x+24, y-250);
    rotate(-swing);
    translate(-215, -60+(length*17));
    scale(size);

    //light and glass
    {
    noStroke();
    //change this for the color
    fill(255, 111, 0, 50);
    if(flicker && frameCount % 10 < 5){
        fill(255, 111, 0, random(0, 100));
    }
    arc(239, 251, 90, 106, -91, 272);         
    arc(239, 251, 66, 108, -91, 272);       
    arc(239, 264, 38, 81, -91, 272);       
    arc(239, 264, 29, 66, -91, 272);    
    arc(239, 264, 21, 54, -91, 272);    
    arc(239, 264, 15, 44, -91, 272);      
    arc(239, 264, 9, 33, -91, 272);    
    arc(239, 264, 5, 33, -91, 272);    
    arc(239, 266, 4, 26, -91, 272);   
    
    fill(31, 31, 31);
    rect(224, 279, 30, 18);     
    
    fill(0, 30);
    rect(209, 205, 58, 91);    

    pushMatrix();
    rotate(32);
    
    fill(255, 255, 255, 90);
    rect(320, 100, 3, 15, 30);
    rect(328, 104, 2, 25, 30);
    rect(325, 66, 3, 15, 30);
    rect(335, 73, 2, 25, 30);
    rect(347, 59, 3, 15, 30);
    rect(355, 63, 2, 25, 30);
    
    popMatrix();
}
    
    //cage
    {    
    fill(41, 41, 41);
    rect(199, 202, 78, 8);    
    rect(200, 200, 76, 4);
    rect(205, 198, 66, 6);   
    rect(226, 194, 22, 6);   

    ellipse(238, 210, 77, 5);    

    rect(203, 210, 6, 86);    
    rect(225, 212, 6, 86);    
    rect(247, 212, 6, 86);    
    rect(267, 211, 6, 86);        
    
    ellipse(238, 296, 77, 5);    

    rect(199, 296, 78, 8);    
    rect(200, 302, 76, 4);
    rect(205, 301, 66, 6);   
}

    //chain
    {
    strokeWeight(3);
    stroke(41, 41, 41);
    noFill();
    arc(237, 200, 15, 25, -162, -18);

    for (var i = -length; i < 8; i += 1) {
        
        ellipse(i * 0 + 237.4, i * 17 + 74, 10, 10);
        rect(i * 0 + 236.4, i*17 + 59, 2, 12);    
    }
}
    
    popMatrix();
};
var grid = 40;
function HHZBlock2(x, y, left, right) {
    this.isBlock = true; // for level editor
    this.x = x;
    this.y = y;
    this.left = left;
    this.right = right;
    
    this.centerS = 0;
    this.filled = 0;
    
    
    if (x) {this.x = x;}
    if (y) {this.y = y;}
    noStroke();
    fill(66, 65, 66);
    rect(this.x, this.y, grid, grid);
    stroke(0, 0, 0);
    strokeWeight(2);

    if (this.right) {
        line(this.x + grid * 0.74, this.y + grid / 2, this.x + grid, this.y + grid / 2);
    }
    if (this.left) {
        line(this.x, this.y + grid / 2, this.x  + grid * 0.28, this.y + grid / 2);
    }
    
    fill(82, 82, 82);
    ellipse(this.x + grid / 2, this.y + grid / 2, grid * 0.5, grid * 0.5);

    
    if (this.filled) {
        fill(240);
        noStroke();
        ellipse(this.x + grid / 2, this.y + grid / 2, grid * 0.5 * this.centerS, grid * 0.5 * this.centerS);
        
        this.centerS += (1 - this.centerS) / 6;
    } else {
        this.centerS -= this.centerS / 6;
    }

}
var OLDdrawChar = function(x, y, s){
    pushMatrix();
    scale(s);
    fill(99, 99, 98);
    noStroke();
    rect(x, y - 20, 60, 70, 10);
    fill(255);
    ellipse(x + 45, y, 20, 20);
    ellipse(x + 15, y, 20, 20);
    fill(0);
    ellipse(x + 45, y, 10, 10);
    ellipse(x + 15, y, 10, 10);
    arc(x + 30, y + 15, 40, 40, 0, 180);
    popMatrix();
};

//The second planet
function planet2(x, y) {
    pushMatrix();
    translate(x, y);
    scale(1.15);
    
    //Light
    for(var light = 117; light > 0; light -= 2) {
        fill(255, 5);
        noStroke();
        ellipse(0, 0, light, light);
    }
    
    //The shape
    fill(209, 167, 104);
    ellipse(0, 0, 80, 80);
    
    //The swirls
    fill(255, 215);
    beginShape();
        vertex(-32, -24);
        bezierVertex(-28, 1, 30, -2, 38, -7);
        bezierVertex(40, -8, 40, -3, 34, -20);
        bezierVertex(20, -13, -25, -5, -25, -31);
    endShape();

    beginShape();
        vertex(-19, -35);
        bezierVertex(-14, -19, 30, -11, 23, -34);
        bezierVertex(30, -25, 18, -36, 20, -35);
        bezierVertex(20, -13, -25, -31, -4, -40);
    endShape();
    
    beginShape();
        vertex(-39, 5);
        bezierVertex(-28, 1, 30, -2, 39, 6);
        bezierVertex(40, -8, 40, -3, 38, 12);
        bezierVertex(20, -2, -25, 6, -37, 13);
    endShape();
    
    beginShape();
        vertex(-27, 28);
        bezierVertex(-28, 1, 30, 22, -4, 38);
        bezierVertex(-2, 43, 19, 34, 13, 37);
        bezierVertex(27, 7, -25, 4, -33, 22);
    endShape();
    
    //Moons
    fill(170);
    ellipse(-14, -60, 15, 15);
    
    fill(199, 54, 54);
    ellipse(-52, 30, 7, 7);
    
    popMatrix();
}

//The third planet
function planet3(x, y) {
    pushMatrix();
    translate(x, y);
    
    //Planet
    fill(159, 163, 103);
    noStroke();
    ellipse(0, 0, 25, 25);
    
    //Rings
    pushMatrix();
    rotate(201);
    
    stroke(150, 128, 60);
    strokeWeight(2);
    noFill();
    
    arc(0, 0, 40, 11, 127, 410);
    
    popMatrix();
    
    //Moon
    fill(250, 191, 255);
    ellipse(21, -9, 7, 7);
    
    popMatrix();
}

var uDirection = "right";
var uFace = "norm";
var DashPDash = function(x, y, s, skin){
    
    //The Digitsofpi Skin
    if(skin === 19){
    
    noStroke();
    fill(36, 36, 36);
    rect(x, y, s, s,s/3); //This is Dash's main red square outline
    
    
    //The following are Dash's different faces. Making multiple faces is not totally   neccessary but it you do it will be really amazing. These if statements are for Dash's Eyes and mouth
    
    //Each statement has 2 separate statement for if the character's mouth is open or not. Optional again, but definately encouraged!
    
    if(uDirection === "left"){
    
    fill(255);
    ellipse(x+(s/6), y+(s/3), s/3, s/3);
    ellipse(x+(s/10)*7, y+(s/3), s/3, s/3);
    
    fill(0);
    ellipse(x+(s/7.5), y+s/3, s/5.5, s/5.5);
    ellipse(x+s/1.5, y+s/3, s/5.5, s/5.5);
    
    if(uFace === "norm"){
    
    noFill();
    stroke(0, 0, 0, 255);
    strokeWeight(s/20);
    arc(x+s/2.3, y+(s/10)*7, s/2, s/3.5, 0, 180);
    
    }
    if(uFace === "open"){
    
    fill(0);
    stroke(0, 0, 0, 255);
    strokeWeight(s/20);
    arc(x+s/2.3, y+(s/10)*7, s/2, s/3.5, 0, 180);
    line(x+s/5.5, y+s/1.45, x+s/1.5, y+s/1.45);
    
    }
    
    
}

    if(uDirection === "right"){
    
    fill(255);
    ellipse(x+(s/3.8), y+(s/3), s/3, s/3);
    ellipse(x+(s/8.5)*7, y+(s/3), s/3, s/3);
    
    fill(0);
    ellipse(x+(s/1.18), y+s/3, s/5.5, s/5.5);
    ellipse(x+s/3.5, y+s/3, s/5.5, s/5.5);
    
    if(uFace === "norm"){
    
    noFill();
    stroke(0, 0, 0, 255);
    strokeWeight(s/20);
    arc(x+s/1.8, y+(s/10)*7, s/2, s/3.5, 0, 180);
    
    }
    if(uFace === "open"){
    
    fill(0);
    stroke(0, 0, 0, 255);
    strokeWeight(s/20);
    arc(x+s/1.8, y+(s/10)*7, s/2, s/3.5, 0, 180);
    line(x+s/3.2, y+s/1.45, x+s/1.25, y+s/1.45);
    
    }
    
    
}

    if(uDirection === "up"){
    
    fill(255);
    ellipse(x+(s/4.2), y+(s/4), s/3, s/3);
    ellipse(x+(s/1.3), y+(s/4), s/3, s/3);
    
    fill(0);
    ellipse(x+(s/4.2), y+s/5, s/5.5, s/5.5);
    ellipse(x+s/1.3, y+s/5, s/5.5, s/5.5);
    
    if(uFace === "norm"){
    
    noFill();
    stroke(0, 0, 0, 255);
    strokeWeight(s/20);
    arc(x+s/2, y+(s/10)*6, s/2, s/3.5, 0, 180);
    
    }
    if(uFace === "open"){
    
    fill(0);
    stroke(0, 0, 0, 255);
    strokeWeight(s/20);
    arc(x+s/2, y+(s/10)*6, s/2, s/3.5, 0, 180);
    line(x+s/4, y+s/1.73, x+s/1.35, y+s/1.73);
    
    }
    
    
}

    if(uDirection === "down"){
    
    fill(255);
    ellipse(x+(s/4.2), y+(s/2.5), s/3, s/3);
    ellipse(x+(s/1.3), y+(s/2.5), s/3, s/3);
    
    fill(0);
    ellipse(x+(s/4.2), y+s/2.25, s/5.5, s/5.5);
    ellipse(x+s/1.3, y+s/2.25, s/5.5, s/5.5);
    
    if(uFace === "norm"){
    
    noFill();
    stroke(0, 0, 0, 255);
    strokeWeight(s/20);
    arc(x+s/2, y+(s/10)*7.5, s/2, s/3.5, 0, 180);
    
    }
    if(uFace === "open"){
    
    fill(0);
    stroke(0, 0, 0);
    strokeWeight(s/20);
    arc(x+s/2, y+(s/10)*7.5, s/2, s/3.5, 0, 180);
    line(x+s/4, y+s/1.35, x+s/1.35, y+s/1.35);
    
    }
    
}

    if(uDirection === "up-right"){
    
    fill(255);
    ellipse(x+(s/3.8), y+(s/4), s/3, s/3);
    ellipse(x+(s/8.5)*7, y+(s/4), s/3, s/3);
    
    fill(0);
    ellipse(x+(s/1.18), y+s/5, s/5.5, s/5.5);
    ellipse(x+s/3.5, y+s/5, s/5.5, s/5.5);
    
    if(uFace === "norm"){
    
    noFill();
    stroke(0, 0, 0, 255);
    strokeWeight(s/20);
    arc(x+s/1.8, y+(s/10)*6, s/2, s/3.5, 0, 180);
    
    }
    if(uFace === "open"){
    
    fill(0);
    stroke(0, 0, 0, 255);
    strokeWeight(s/20);
    arc(x+s/1.8, y+(s/10)*6, s/2, s/3.5, 0, 180);
    line(x+s/3.2, y+s/1.73, x+s/1.25, y+s/1.73);
    
    }
    
}

    if(uDirection === "up-left"){
    
    fill(255);
    ellipse(x+(s/6), y+(s/4), s/3, s/3);
    ellipse(x+(s/10)*7, y+(s/4), s/3, s/3);
    
    fill(0);
    ellipse(x+(s/7.5), y+s/5, s/5.5, s/5.5);
    ellipse(x+s/1.5, y+s/5, s/5.5, s/5.5);
    
    if(uFace === "norm"){
    
    noFill();
    stroke(0, 0, 0, 255);
    strokeWeight(s/20);
    arc(x+s/2.3, y+(s/10)*6, s/2, s/3.5, 0, 180);
    
    }
    if(uFace === "open"){
    
    fill(0);
    stroke(0, 0, 0, 255);
    strokeWeight(s/20);
    arc(x+s/2.3, y+(s/10)*6, s/2, s/3.5, 0, 180);
    line(x+s/5.5, y+s/1.73, x+s/1.5, y+s/1.73);
    
    }
    
}

    if(uDirection === "down-right"){
    
    fill(255);
    ellipse(x+(s/3.8), y+(s/2.5), s/3, s/3);
    ellipse(x+(s/8.5)*7, y+(s/2.5), s/3, s/3);
    
    fill(0);
    ellipse(x+(s/1.18), y+s/2.25, s/5.5, s/5.5);
    ellipse(x+s/3.5, y+s/2.25, s/5.5, s/5.5);
    
    if(uFace === "norm"){
    
    noFill();
    stroke(0, 0, 0, 255);
    strokeWeight(s/20);
    arc(x+s/1.8, y+(s/10)*7.5, s/2, s/3.5, 0, 180);
    
    }
    if(uFace === "open"){
    
    fill(0);
    stroke(0, 0, 0);
    strokeWeight(s/20);
    arc(x+s/1.8, y+(s/10)*7.5, s/2, s/3.5, 0, 180);
    line(x+s/3.2, y+s/1.35, x+s/1.25, y+s/1.35);
    
    }
    
}

    if(uDirection === "down-left"){
    
    fill(255);
    ellipse(x+(s/6), y+(s/2.5), s/3, s/3);
    ellipse(x+(s/10)*7, y+(s/2.5), s/3, s/3);
    
    fill(0);
    ellipse(x+(s/7.5), y+s/2.25, s/5.5, s/5.5);
    ellipse(x+s/1.5, y+s/2.25, s/5.5, s/5.5);
    
    if(uFace === "norm"){
    
    noFill();
    stroke(0, 0, 0, 255);
    strokeWeight(s/20);
    arc(x+s/2.3, y+(s/10)*7.5, s/2, s/3.5, 0, 180);
    
    }
    if(uFace === "open"){
    
    fill(0);
    stroke(0, 0, 0);
    strokeWeight(s/20);
    arc(x+s/2.3, y+(s/10)*7.5, s/2, s/3.5, 0, 180);
    line(x+s/5.5, y+s/1.35, x+s/1.5, y+s/1.35);
    
    }
    
}

    if(uDirection === "none"){
    
    fill(255);
    ellipse(x+(s/4.2), y+(s/3), s/3, s/3);
    ellipse(x+(s/1.3), y+(s/3), s/3, s/3);
    
    fill(0);
    ellipse(x+(s/4.2), y+s/3, s/5.5, s/5.5);
    ellipse(x+s/1.3, y+s/3, s/5.5, s/5.5);
    
    if(uFace === "norm"){
    
    noFill();
    stroke(0, 0, 0, 255);
    strokeWeight(s/20);
    arc(x+s/2, y+(s/10)*7, s/2, s/3.5, 0, 180);
    
    }
    if(uFace === "open"){
    
    fill(0);
    stroke(0, 0, 0);
    strokeWeight(s/20);
    arc(x+s/2, y+(s/10)*7, s/2, s/3.5, 0, 180);
    line(x+s/4, y+s/1.45, x+s/1.35, y+s/1.45);
    
    }
    
    
} //The normal Dash Face

    
    }
    //skin number 19 out of 20 skins. Keep this the specific number and if statement
    
};

var MMcloud = function(x, y, s){
    pushMatrix();
    translate(x, y);
    scale(s);
noStroke();
fill(255, 255, 255, 150);
rect(220,276,148,7,200);
rect(211,296,148,7,200);
rect(234,296,110,-14,200);
popMatrix();
};
var Mpole = function(x, y, s) {
    noFill();
    stroke(74, 48, 1);
    strokeWeight(2);
    line(x, y, x, y - s);
    strokeWeight(1.1);
    line(x - s / 2, y - s * 0.9, x + s / 2, y - s * 1);
    line(x - s / 2, y - s * 0.7, x + s / 2, y - s * 0.8);
};
var Mfactory = function(x, y, s) {
    noStroke();
    fill(150, 150, 150);
    rect(x, y - s / 2, s, s / 2);
    rect(x + s / 2, y - s * 0.75, s / 2, s / 4 + 1);
    rect(x + s * (11 / 16), y - s, s / 8, s / 4);
    fill(75);
    ellipse(x + s * 0.75, y - s, s / 8, s / 16);
    fill(107, 3, 255);
    quad(x + s * 0.75, y - s * 0.625, x + s * 0.625, y - s / 2, x + s * 0.75, y - s * 0.375, x + s * 0.875, y - s / 2);
    fill(122, 0, 255);
    triangle(x + s * 0.75, y - s * 0.625, x + s * 0.75, y - s / 2, x + s * 0.875, y - s / 2);
    fill(0, 0, 97);
    triangle(x + s * 0.625, y - s / 2, x + s * 0.75, y - s / 2, x + s * 0.75, y - s * 0.375);
    fill(255, 255, 255, 100);
    rect(x + 30 , y - 37, s - 30, s - 12);
    fill(0, 0, 0, 50);
    rect(x , y - 25, s - 40, s - 25);
    
};
var tree1Big = function(x,y){

fill(170, 50, 0);
rect(x-15,y-25,30,223);
fill(0, 150, 0);

beginShape();

vertex(x,y);
vertex(x-60,y);
vertex(x-35,y-70);
vertex(x-50,y-70);
vertex(x-25,y-140);
vertex(x-40,y-140);
vertex(x+0,y-210);
vertex(x+40,y-140);
vertex(x+24,y-140);
vertex(x+50,y-70);
vertex(x+35,y-70);
vertex(x+60,y);
vertex(x,y);
endShape();


fill(0, 190, 0);
beginShape();

vertex(x,y-10);
vertex(x-50,y-10);
vertex(x-25,y-80);
vertex(x-40,y-80);
vertex(x-15,y-150);
vertex(x-30,y-150);
vertex(x+0,y-200);
vertex(x+30,y-150);
vertex(x+15,y-150);
vertex(x+40,y-80);
vertex(x+25,y-80);
vertex(x+50,y-10);
vertex(x,y-10);
endShape();


};
var body = function(x, y, size, color) {
        noStroke();
        fill(lerpColor(color, 0, 0.06));
        rect(x - size / 2, y - size / 2, size, size, size / 15);
        fill(color);
        rect(x - size / 4, y - size / 2.5, size / 1.5, size / 1.5, size / 15);
        fill(255, 255, 255, 50);
        rect(x + size / 9, y - size / 3, size / 4, size / 4, size / 20);
    };
var eyes = function(x, y, size, heightDiv, color, eyelashes, type) {
        if (eyelashes) {
            noFill();
            stroke(0, 0, 0);
            strokeWeight(size / 20);
            arc(x - size / 5 - size / 10, y - size / 5.5, size / 6, size / 6, 40, 140);
            arc(x + size / 5 + size / 10, y - size / 5.5, size / 6, size / 6, 40, 140);
            noStroke();
        }
        if (type === 0) {
            fill(color);
            ellipse(x - size / 5, y - size / 10, size / 6, size / 6 / heightDiv);
            ellipse(x + size / 5, y - size / 10, size / 6, size / 6 / heightDiv);
            fill(255, 255, 255, 100);
            pushMatrix();
            translate(x - size / 5 + size / 50, y - size / 10 - size / 50 / heightDiv);
            rotate(-45);
            ellipse(0, 0, size / 15, size / 10);
            popMatrix();
            pushMatrix();
            translate(x + size / 5 + size / 50, y - size / 10 - size / 50 / heightDiv);
            rotate(-45);
            ellipse(0, 0, size / 15, size / 10);
            popMatrix();
        } 
};
var drawPixelArt = function (drawing, palette, pixSize) {
    var w = drawing[0].length;
    var h = drawing.length;
    if (pixSize === undefined) {
        var pixSize = min(width / w, height / h);
    }
    pixSize = round(pixSize);
    var img = createGraphics(w * pixSize, h * pixSize, P2D);
    img.background(0, 0, 0, 0);
    img.noStroke();
    for (var row = 0; row < drawing.length; row++) {
        for (var colm = 0; colm < drawing[row].length; colm++) {
        var char = drawing[row][colm];
        if (char !== ' ') {
            img.fill(palette[char]);
            img.rect(colm * pixSize, row * pixSize, pixSize, pixSize);
        }
        }
    }
    return img.get(0, 0, w * pixSize, h * pixSize);
};
var PixelDrawing = function (s, drawing, palette) {
    this.width = s;
    this.height = s / drawing[0].length * drawing.length;
    this.img = drawPixelArt(drawing, palette);
};
PixelDrawing.prototype.draw = function (x, y) {
    imageMode(CORNER);
    image(this.img, x, y, this.width, this.height);
};
var PixelAnimation = function (s, speed, drawingArr, palette, type) {
    this.frameC = 0;
    this.width = s;
    this.height = s / drawingArr[0][0].length * drawingArr[0].length;
    this.speed = speed;
    this.imgArr = [];
    this.type = type;
    for (var i = 0; i < drawingArr.length; i++) {
        this.imgArr.push(drawPixelArt(drawingArr[i], palette, min(width / drawingArr[i][0].length, height / drawingArr[i].length)));
    }
};
PixelAnimation.prototype.run = function (x, y) {
    var currentFrame = 0;
    this.frameCount++;
    if (this.type === 'once') {
        currentFrame = floor(this.frameCount / this.speed);
        if (currentFrame >= this.imgArr.length) {
        currentFrame = this.imgArr.length - 1;
        }
    } else if (this.type === 'bounce') {
        var maxFrame = this.imgArr.length - 1;
        if (this.frameCount % (this.speed * maxFrame * 2) < this.speed * maxFrame) {
        currentFrame = floor(this.frameCount / this.speed) % maxFrame;
        } else {
        currentFrame = maxFrame - floor(this.frameCount / this.speed % maxFrame);
        }
    } else {
        currentFrame = floor(this.frameCount / this.speed) % this.imgArr.length;
    }
    image(this.imgArr[currentFrame], x, y, this.width, this.height);
};
/** Art made with Quantum Cat's Pixel Art Creator: https://www.khanacademy.org/computer-programming/pixie-art-creator/5304294474432512 **/

var blocky = {
    palette: {
        " ": color(255, 0, 0, 0),
        "a": color(107, 218, 124, 255),
        "b": color(85, 198, 103, 255),
        "c": color(69, 152, 82, 255),
        "d": color(45, 43, 42, 255),
        "e": color(117, 67, 67, 255),
        "f": color(75, 38, 38, 255),
    },

    Blockys: [
        [
            "aaaaaaaaaaaaaaaa",
            "babababababababa",
            "bbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbb",
            "ccbbccbbccbbccbb",
            "ddccddccddccddcc",
            "eeddeeddeeddeedd",
            "eeeeeeeeeeeeeeee",
            "eeefeeefeeefeeef",
            "eeeeeeeeeeeeeeee",
            "efeeefeeefeeefee",
            "eeefeeefeeefeeef",
            "efeeefeeefeeefee",
            "fefefefefefefefe",
            "efefefefefefefef",
            "ffffffffffffffff",
        ],
        [
            "aaaaaaaaaaaaaaaa",
            "babababababababa",
            "bbbbbbbbbbbbbbbb",
            "ccbbccbbccbbccbb",
            "ddccddccddccddcc",
            "eeddeeddeeddeedd",
            "eeeeeeeeeeeeeeee",
            "eeeeeeeeeeeeeeee",
            "eeefeeefeeefeeef",
            "eeeeeeeeeeeeeeee",
            "efeeefeeefeeefee",
            "eeefeeefeeefeeef",
            "efeeefeeefeeefee",
            "fefefefefefefefe",
            "efefefefefefefef",
            "ffffffffffffffff",
        ],
    ],
};
var Water = {
    palette: {
        " ": color(255, 0, 0, 0),
        "a": color(225, 237, 254, 255),
        "b": color(165, 202, 249, 255),
        "c": color(219, 234, 254, 255),
        "d": color(114, 158, 214, 255),
        "e": color(50, 101, 166, 255),
        "f": color(0, 41, 92, 255),
    },

    Waters: [
        [
            "                ",
            "ababcbcbcbcbcbcb",
            "bbbbbbbbbbbbbbbb",
            "dddddddddddddddd",
            "eeddeeddeeddeedd",
            "ddeeddeeddeeddee",
            "eeddeeddeeddeedd",
            "eeeeeeeeeeeeeeee",
            "eeedeeedeeedeeed",
            "eeeeeeeeeeeeeeee",
            "efeeedeeedeeedee",
            "eeefeeefeeefeeef",
            "efeeefeeefeeefee",
            "fefefefefefefefe",
            "efefefefefefefef",
            "ffffffffffffffff",
        ],
        [
            "cbcbcbcbcbcbcbcb",
            "bbbbbbbbbbbbbbbb",
            "dddddddddddddddd",
            "eeddeeddeeddeedd",
            "ddeeddeeddeeddee",
            "eeddeeddeeddeedd",
            "eeeeeeeeeeeeeeee",
            "eeeeeeeeeeeeeeee",
            "eeedeeedeeedeeed",
            "eeeeeeeeeeeeeeee",
            "efeeedeeedeeedee",
            "eeefeeefeeefeeef",
            "efeeefeeefeeefee",
            "fefefefefefefefe",
            "efefefefefefefef",
            "ffffffffffffffff",
        ],
        [
            "                ",
            "ababcbcbcbcbcbcb",
            "bbbbbbbbbbbbbbbb",
            "dddddddddddddddd",
            "eeddeeddeeddeedd",
            "ddeeddeeddeeddee",
            "eeddeeddeeddeedd",
            "eeeeeeeeeeeeeeee",
            "eeedeeedeeedeeed",
            "eeeeeeeeeeeeeeee",
            "efeeedeeedeeedee",
            "eeefeeefeeefeeef",
            "efeeefeeefeeefee",
            "fefefefefefefefe",
            "efefefefefefefef",
            "ffffffffffffffff",
        ],
        [
            "                ",
            "                ",
            "cbcbcbcbcbcbcbcb",
            "bbbbbbbbbbbbbbbb",
            "dddddddddddddddd",
            "eeddeeddeeddeedd",
            "ddeeddeeddeeddee",
            "eeddeeddeeddeedd",
            "eeedeeedeeedeeed",
            "eeeeeeeeeeeeeeee",
            "efeeedeeedeeedee",
            "eeefeeefeeefeeef",
            "efeeefeeefeeefee",
            "fefefefefefefefe",
            "efefefefefefefef",
            "ffffffffffffffff",
        ],
    ],
};
var Sandy = {
    palette: {
        " ": color(255, 0, 0, 0),
        "a": color(250, 223, 187, 255),
        "b": color(231, 200, 160, 255),
        "c": color(203, 169, 125, 255),
    },

    Sand: [
        [
            "aaaaaaaaaaaaaaaa",
            "aaaaaaaaaaaaaaaa",
            "aaaaaaaaaaaaaaaa",
            "bbaabbaabbaabbaa",
            "aabbaabbaabbaabb",
            "bbaabbaabbaabbaa",
            "bbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbb",
            "bcbbbcbbbcbbbcbb",
            "bbbbbbbbbbbbbbbb",
            "bbbcbbbcbbbcbbbc",
            "bcbbbcbbbcbbbcbb",
            "cbcbcbcbcbcbcbcb",
            "bcbcbcbcbcbcbcbc",
            "cccccccccccccccc",
        ],
        [
            "aaaaaaaaaaaaaaaa",
            "aaaaaaaaaaaaaaaa",
            "bbaabbaabbaabbaa",
            "aabbaabbaabbaabb",
            "bbaabbaabbaabbaa",
            "bbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbb",
            "bcbbbcbbbcbbbcbb",
            "bbbbbbbbbbbbbbbb",
            "bbbcbbbcbbbcbbbc",
            "bcbbbcbbbcbbbcbb",
            "cbcbcbcbcbcbcbcb",
            "bcbcbcbcbcbcbcbc",
            "cccccccccccccccc",
        ],
    ],
};
var Lava = {
    palette: {
        " ": color(255, 0, 0, 0),
        "a": color(254, 150, 85, 255),
        "b": color(251, 99, 3, 255),
        "c": color(237, 54, 6, 255),
    },

    Lavas: [
        [
            "                ",
            "aaaaaaaaaaaaaaaa",
            "babababababababa",
            "bbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbb",
            "ccbbccbbccbbccbb",
            "bbccbbccbbccbbcc",
            "ccbbccbbccbbccbb",
            "cccbcccbcccbcccb",
            "cccccccccccccccc",
            "cbcccbcccbcccbcc",
            "cccbcccbcccbcccb",
            "cbcccbcccbcccbcc",
            "bcbcbcbcbcbcbcbc",
            "cbcbcbcbcbcbcbcb",
            "bbbbbbbbbbbbbbbb",
        ],
        [
            "aaaaaaaaaaaaaaaa",
            "babababababababa",
            "bbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbb",
            "ccbbccbbccbbccbb",
            "bbccbbccbbccbbcc",
            "ccbbccbbccbbccbb",
            "cccccccccccccccc",
            "cccbcccbcccbcccb",
            "cccccccccccccccc",
            "cbcccbcccbcccbcc",
            "cccbcccbcccbcccb",
            "cbcccbcccbcccbcc",
            "bcbcbcbcbcbcbcbc",
            "cbcbcbcbcbcbcbcb",
            "bbbbbbbbbbbbbbbb",
        ],
        [
            "                ",
            "aaaaaaaaaaaaaaaa",
            "babababababababa",
            "bbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbb",
            "ccbbccbbccbbccbb",
            "bbccbbccbbccbbcc",
            "ccbbccbbccbbccbb",
            "cccbcccbcccbcccb",
            "cccccccccccccccc",
            "cbcccbcccbcccbcc",
            "cccbcccbcccbcccb",
            "cbcccbcccbcccbcc",
            "bcbcbcbcbcbcbcbc",
            "cbcbcbcbcbcbcbcb",
            "bbbbbbbbbbbbbbbb",
        ],
        [
            "                ",
            "                ",
            "aaaaaaaaaaaaaaaa",
            "babababababababa",
            "bbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbb",
            "ccbbccbbccbbccbb",
            "bbccbbccbbccbbcc",
            "ccbbccbbccbbccbb",
            "cccccccccccccccc",
            "cbcccbcccbcccbcc",
            "cccbcccbcccbcccb",
            "cbcccbcccbcccbcc",
            "bcbcbcbcbcbcbcbc",
            "cbcbcbcbcbcbcbcb",
            "bbbbbbbbbbbbbbbb",
        ],
    ],
};
var animation1 = new PixelAnimation(60, 15, Water.Waters, Water.palette, "forward");
var animation2 = new PixelAnimation(60, 30, blocky.Blockys, blocky.palette, "forward");
var animation3 = new PixelAnimation(60, 30, Sandy.Sand, Sandy.palette, "forward");
var animation4 = new PixelAnimation(60, 15, Lava.Lavas, Lava.palette, "forward");

function Typing (msg, x, y, size, font, clr, speed, fontStyle, typeOut, outline, outlineClr) {
    /** This typing text function was made by Ace Rogers (@AmericanGuard) **/
    
    // This is for what your message will be
    this.msg = msg;
    
    // These are for the position of the text
    this.x = x;
    this.y = y;
    
    // This is for the text size
    this.size = size;
    
    // This is for the text font
    this.font = font;
    
    // This is for the text color
    this.clr = clr;
    
    // This is for the typing speed
    this.speed = speed;
    
    // This is for the different effects
    this.fontStyle = fontStyle;
    // Styles: normal, glitch, shadow, outline
    
    // This is for if you want it to already typed out or not
    this.typeOut = typeOut;
    
    // This is for how think the outline is
    this.outline = outline;
    
    // This is for the color of the outline
    this.outlineClr = outlineClr;
    
    // This is for how many letters it's typed so far
    this.textLength = 0;
    
    // This makes your font be able to display as text (some of this code I learned how to use from looking at Victor.L and Evan S programs)
    this.customFont = function (txt, x, y, s, c) {
        var newX = x,
            newY = y,
            newS = s;
        
        for (var i = 0; i < txt.length; i++) {
            pushMatrix();
                translate(newX, newY);
                scale(s);
                
                // You design your font here and you can add new symbols/characters or take some away
                switch (txt.charAt(i)) {
                    case "A": {
                        
                        
                        
                        } break;
                    case "B": {
                        
                        
                        
                        } break;
                    case "C": {
                        
                        
                        
                        } break;
                    case "D": {
                        
                        
                        
                        } break;
                    case "E": {
                        
                        
                        
                        } break;
                    case "F": {
                        
                        
                        
                        } break;
                    case "G": {
                        
                        
                        
                        } break;
                    case "H": {
                        
                        
                        
                        } break;
                    case "I": {
                        
                        
                        
                        } break;
                    case "J": {
                        
                        
                        
                        } break;
                    case "K": {
                        
                        
                        
                        } break;
                    case "L": {
                        
                        
                        
                        } break;
                    case "M": {
                        
                        
                        
                        } break;
                    case "N": {
                        
                        
                        
                        } break;
                    case "O": {
                        
                        
                        
                        } break;
                    case "P": {
                        
                        
                        
                        } break;
                    case "Q": {
                        
                        
                        
                        } break;
                    case "R": {
                        
                        
                        
                        } break;
                    case "S": {
                        
                        
                        
                        } break;
                    case "T": {
                        
                        
                        
                        } break;
                    case "U": {
                        
                        
                        
                        } break;
                    case "V": {
                        
                        
                        
                        } break;
                    case "W": {
                        
                        
                        
                        } break;
                    case "X": {
                        
                        
                        
                        } break;
                    case "Y": {
                        
                        
                        
                        } break;
                    case "Z": {
                        
                        
                        
                        } break;
                    case "a": {
                        
                        
                        
                        } break;
                    case "b": {
                        
                        
                        
                        } break;
                    case "c": {
                        
                        
                        
                        } break;
                    case "d": {
                        
                        
                        
                        } break;
                    case "e": {
                        
                        
                        
                        } break;
                    case "f": {
                        
                        
                        
                        } break;
                    case "g": {
                        
                        
                        
                        } break;
                    case "h": {
                        
                        
                        
                        } break;
                    case "i": {
                        
                        
                        
                        } break;
                    case "j": {
                        
                        
                        
                        } break;
                    case "k": {
                        
                        
                        
                        } break;
                    case "l": {
                        
                        
                        
                        } break;
                    case "m": {
                        
                        
                        
                        } break;
                    case "n": {
                        
                        
                        
                        } break;
                    case "o": {
                        
                        
                        
                        } break;
                    case "p": {
                        
                        
                        
                        } break;
                    case "q": {
                        
                        
                        
                        } break;
                    case "r": {
                        
                        
                        
                        } break;
                    case "s": {
                        
                        
                        
                        } break;
                    case "t": {
                        
                        
                        
                        } break;
                    case "u": {
                        
                        
                        
                        } break;
                    case "v": {
                        
                        
                        
                        } break;
                    case "w": {
                        
                        
                        
                        } break;
                    case "x": {
                        
                        
                        
                        } break;
                    case "y": {
                        
                        
                        
                        } break;
                    case "z": {
                        
                        
                        
                        } break;
                    case "0": {
                        
                        
                        
                        } break;
                    case "1": {
                        
                        
                        
                        } break;
                    case "2": {
                        
                        
                        
                        } break;
                    case "3": {
                        
                        
                        
                        } break;
                    case "4": {
                        
                        
                        
                        } break;
                    case "5": {
                        
                        
                        
                        } break;
                    case "6": {
                        
                        
                        
                        } break;
                    case "7": {
                        
                        
                        
                        } break;
                    case "8": {
                        
                        
                        
                        } break;
                    case "9": {
                        
                        
                        
                        } break;
                    case ",": {
                        
                        
                        
                        } break;
                    case ".": {
                        
                        
                        
                        } break;
                    case "\"": {
                        
                        
                        
                        } break;
                    case "!": {
                        
                        
                        
                        } break;
                    case "?": {
                        
                        
                        
                        } break;
                    case "(": {
                        
                        
                        
                        } break;
                    case ")": {
                        
                        
                        
                        } break;
                    case "-": {
                        
                        
                        
                        } break;
                    case "'": {
                        
                        
                        
                        } break;
                    case ":": {
                        
                        
                        
                        } break;
                    case ";": {
                        
                        
                        
                        } break;
                    case "\n": {
                        newX = x - newS * 40;
                        newY += newS * 70;
                    } break;
                }
                
                // This is for the spacing of certain characters if once longer/shorter than other. (examples: m, w, :, *, etc)
                if (txt.charAt(i) === "") {
                    newX += newS * 10;
                } else {
                    newX += newS * 10;
                }
                
            popMatrix();
        }
    };
    
    // This is for displaying the text
    Typing.prototype.display = function () {
        
        smooth();
        
        textAlign(CORNER, CORNER);
        textFont(createFont(this.font), this.size);
        switch (this.fontStyle) {
            case "normal":
                
                // The text
                fill(this.clr);
                text(this.msg.substring(0, this.textLength), this.x, this.y);
                
                break;
            case "shadow":
                
                // The text's shadow
                fill(0, 100);
                text(this.msg.substring(0, this.textLength), this.x + this.size / 5, this.y + this.size / 5);
                
                // The text
                fill(this.clr);
                text(this.msg.substring(0, this.textLength), this.x, this.y);
                
                break;
            case "glitch":
                
                // Left text
                fill(this.clr[0]);
                text(this.msg.substring(0, this.textLength), this.x - floor(random(-this.size / 15, this.size / 15)) * floor(random(0, this.size / 6)), this.y + floor(random(-this.size / 15, this.size / 15)) * floor(random(0, this.size / 6)));
                
                // Right text
                fill(this.clr[1]);
                text(this.msg.substring(0, this.textLength), this.x + floor(random(-this.size / 15, this.size / 15)) * floor(random(0, this.size / 6)), this.y - floor(random(-this.size / 15, this.size / 15)) * floor(random(0, this.size / 6)));
                
                // Center text
                fill(this.clr[2]);
                text(this.msg.substring(0, this.textLength), this.x + floor(random(-this.size / 15, this.size / 15)) * floor(random(0, this.size / 6)), this.y + floor(random(-this.size / 15, this.size / 15)) * floor(random(0, this.size / 6)));
                
                // Front text
                fill(this.clr[3]);
                text(this.msg.substring(0, this.textLength), this.x, this.y);
                
                break;
            case "custom":
                
                // Put your custom text here
                this.customFont(this.msg.substring(0, this.textLength), this.x, this.y, this.size, this.clr, this.outlineClr, this.outline);
                
                break;
            case "outline":
                
                // The text's outline
                for (var i = 0; i < 360; i++) {
                    fill(this.outlineClr);
                    text(this.msg.substring(0, this.textLength), this.x + sin(i * this.outline) * this.outline, this.y + cos(i * this.outline) * this.outline);
                }
                
                // The text
                fill(this.clr);
                text(this.msg.substring(0, this.textLength), this.x, this.y);
                
                break;
        }
        
        // This makes it type out
        if ((this.textLength < this.msg.length) && this.typeOut === true) {
            this.textLength += this.speed;
        } else if (this.typeOut === false) {
            this.textLength = this.msg.length;
        }
        
    };
    
    // Credit to Daniel T (@dkareh)
    (function(){return this;})().LoopProtector.prototype.leave = function(){};
    
    /** Version 1.1.6 **/
}

var TTXT1 = new Typing(Tutorialtext[0], 200, 400, 30, "Kristen ITC Bold", color(0, 0, 0), 0.2, "normal", true);
var TTXT2 = new Typing(Tutorialtext[1], 200, 400, 30, "Kristen ITC Bold", color(0, 0, 0), 0.2, "normal", true);
var TTXT3 = new Typing(Tutorialtext[2], 200, 400, 30, "Kristen ITC Bold", color(0, 0, 0), 0.2, "normal", true);
var TTXT4 = new Typing(Tutorialtext[3], 200, 400, 30, "Kristen ITC Bold", color(0, 0, 0), 0.2, "normal", true);
var TTXT5 = new Typing(Tutorialtext[4], 200, 400, 30, "Kristen ITC Bold", color(0, 0, 0), 0.2, "normal", true);
var TTXT6 = new Typing(Tutorialtext[5], 200, 400, 30, "Kristen ITC Bold", color(0, 0, 0), 0.2, "normal", true);




var minecart = function(x,y,rot) {
    pushMatrix();
    rectMode(CENTER);
    translate(x,y);
    rotate(rot);
    noStroke();
    fill(168, 53, 0);
    rect(0,0,60,40);
    fill(92, 92, 92);
    ellipse(15, 22, 10, 10);
    ellipse(-15,22,10,10);
    fill(59, 59, 59);
    rect(0, 0, 60, 5);
    rect(0, -10, 60, 5);
    rect(0, 10, 60, 5);
    popMatrix();
};
var Escaper = function(x,y) {
    this.x=x;
    this.y=y;
    this.w= 40;
    this.h = 40;
    
};
Escaper.prototype.draw = function() {
    rectMode(CENTER);
        fill(0, 136, 255);
        noStroke();
        (rect)(this.x, this.y, this.w, this.h);
        fill(0);
        ellipse(this.x-this.w/3.5,this.y+this.h/100,this.w/4,this.h/4);
        ellipse(this.x+this.w/4.5,this.y+this.h/100,this.w/4,this.h/4);
        fill(255);
        ellipse(this.x-this.w/3.3,this.y-this.h/20,this.w/8,this.h/8);
        ellipse(this.x+this.w/4.3,this.y-this.h/20,this.w/8,this.h/8);
        noFill();
        strokeWeight(4);
        stroke(0);
        arc(this.x,this.y+this.h/4.2,this.w/3,this.h*-0.1,0,180);
        
        noStroke();
        fill(0,0,0,30);
        triangle(this.x-this.w/2,this.y-this.h/2,this.x+this.w/2,this.y+this.h/2,this.x-this.w/2,this.y+this.h/2);
        
        fill(0, 123, 255, 200);
        rect(this.x, this.y, this.w, this.h);
        
};

var pastidescape = new Escaper(143, 20);
var tree2Big = function(x,y){

fill(170, 50, 0);
rect(x-15,y-25,30,123);
fill(0, 150, 0);

beginShape();

vertex(x,y);
vertex(x-60,y);
vertex(x-35,y-70);
vertex(x-50,y-70);
vertex(x-25,y-140);
vertex(x-40,y-140);
vertex(x+0,y-210);
vertex(x+40,y-140);
vertex(x+24,y-140);
vertex(x+50,y-70);
vertex(x+35,y-70);
vertex(x+60,y);
vertex(x,y);
endShape();


fill(0, 190, 0);
beginShape();

vertex(x,y-10);
vertex(x-50,y-10);
vertex(x-25,y-80);
vertex(x-40,y-80);
vertex(x-15,y-150);
vertex(x-30,y-150);
vertex(x+0,y-200);
vertex(x+30,y-150);
vertex(x+15,y-150);
vertex(x+40,y-80);
vertex(x+25,y-80);
vertex(x+50,y-10);
vertex(x,y-10);
endShape();


};
var Prism = function(x, y, s){
    pushMatrix();
    translate(x, y);
    scale(s);
    
    noStroke();
    fill(18, 132, 232);
    triangle(200, 120, 202, 212, 150, 212);
    fill(185, 220, 250);
    triangle(200, 120, 202, 212, 255, 212); 
    fill(100, 165, 250);
    triangle(202, 295, 202, 212, 255, 212);
    fill(51, 67, 135);
    triangle(202, 295, 202, 212, 151, 212); 
    popMatrix();
    
    };
    var Prism2 = function(x, y, s){
        pushMatrix();
        translate(x, y);
        scale(s);
        
        stroke(230, 18, 223);
        fill(230, 18, 223);
        triangle(200, 120, 202, 212, 150, 212);
        stroke(255, 158, 255);
        fill(255, 158, 255);
        triangle(200, 120, 202, 212, 255, 212); 
        stroke(250, 100, 245);
        fill(250, 100, 245);
        triangle(202, 295, 202, 212, 255, 212);
        stroke(133, 51, 123);
        fill(133, 51, 123);
        triangle(202, 295, 202, 212, 151, 212); 
        popMatrix();
        
        };
        var Prism2A = function(x, y, s){
           pushMatrix();
        translate(x, y);
        scale(s);
        
        stroke(102, 0, 100);
        fill(102, 0, 100);
        triangle(200, 120, 202, 212, 150, 212);
        stroke(186, 0, 186);
        fill(186, 0, 186);
        triangle(200, 120, 202, 212, 255, 212); 
        stroke(163, 0, 158);
        fill(163, 0, 158);
        triangle(202, 295, 202, 212, 255, 212);
        stroke(79, 13, 71);
        fill(79, 13, 71);
        triangle(202, 295, 202, 212, 151, 212); 
        popMatrix(); 
        };
var gear = function(x, y, sz, r, teeth, w, h, inner) {
        beginShape();            
        for (var i = 0; i < teeth; i++) {
            vertex(x + cos(360 / teeth * i - w / 2 + r) * (sz / h), y + sin(360 / teeth * i - w / 2 + r) * (sz / h));
            vertex(x + cos(360 / teeth * i - w / h / 2 + r) * sz, y + sin(360 / teeth * i - w / h / 2 + r) * sz);
            vertex(x + cos(360 / teeth * i + w / h / 2 + r) * sz, y + sin(360 / teeth * i + w / h / 2 + r) * sz);
            vertex(x + cos(360 / teeth * i + w / 2 + r) * (sz / h), y + sin(360 / teeth * i + w / 2 + r) * (sz / h));
        }
        for (i -= 1; i >= -1; i--) {
            vertex(x + cos(360 / teeth * i + w / 2 + r) * (sz / w * inner), y + sin(360 / teeth * i + w / 2 + r) * (sz / w * inner));
        }
        i ++;
        vertex(x + cos(360 / teeth * i + w / 2 + r) * (sz / h), y + sin(360 / teeth * i + w / 2 + r) * (sz / h));
        endShape();
    };
    var st = [];
var Stars = function() {
    for(var i = 0; i < 60; i++) {
        var starPos = {
            x: random(0, 800),
            y: random(0, 75),
            Size: random(1, 4)
        };
        
        st.push(starPos);
        noStroke();
        for(var glow = 0; glow < 13; glow++) {
            fill(255, 255, 255, glow * -2 + 18);
            ellipse(st[i].x, st[i].y + i * 10, st[i].Size + glow * 3, st[i].Size + glow * 3);
        }
        
        fill(255, 255, 255, 190);
        ellipse(st[i].x, st[i].y + i * 10, st[i].Size, st[i].Size);
    }
};
background(255, 0);
Stars();
var StarBGCC = get(0, 0, 800, 600);
var Line = function(x,y,horizontal){
    //atributes
    this.position = new PVector(x,y);
    this.velocity = new PVector(0,0);
    this.size = 2;
    
    this.h = horizontal;
    
    
    //methods
    this.display = function(){
        strokeWeight(this.size);
        stroke(0);
        if(this.h){
            line(0, this.position.y, 800, this.position.y);
        }else{
            line(this.position.x, 0, this.position.x, height);
        }
    };
    
    this.update = function(velocity){
        velocity.mult(-1);
        this.velocity = velocity;
        this.position.add(this.velocity);
        
        if(this.position.x-this.size / 2>800){
            this.position.x = -this.size / 2;
        }
        if(this.position.x+this.size / 2<0){
            this.position.x = 800+this.size / 2;
        }
        if(this.position.y-this.size / 2>height){
            this.position.y = -this.size / 2;
        }
        if(this.position.y+this.size / 2<0){
            this.position.y = height+this.size / 2;
        }  
        
    };
};

var LineBackground = function(){
    //atributes
    this.lines = [];
    this.velocity = new PVector(0,0);
    for(var i = 0; i < 10; i++){
        this.lines.push(new Line(i * (800 / 10), height / 2, false));
        this.lines.push(new Line(800 / 2, i * (height / 10), true));
    }
    
    
    //methods
    this.display = function(){
        for(var i in this.lines){
            this.lines[i].display();
        }
    };
    this.update = function(velocity){
        this.velocity = velocity ? velocity : this.velocity;
        for(var i in this.lines){
            this.lines[i].update(this.velocity);
        }
    };
};

function gradientt (x, y, w, h, c1, c2, ramp) {
    noStroke();
    for (var i = 0; i < h; i++) {
        fill(lerpColor(c1, c2, Math.pow(i, ramp) / Math.pow(h, ramp)));
        rect(x, y + i, w, 1);
    }
}

var islandC = function(x, y, s){
    //{
    pushMatrix();
    translate(x, y);
    scale(s);
fill(7, 173, 7);
beginShape();
vertex(500, 500);
vertex(500, 500);
vertex(68, 500);
vertex(110, 490);
vertex(115, 486);
vertex(161, 467);
vertex(104, 499);
vertex(114, 467);
vertex(126, 442);
vertex(184, 453);
vertex(194, 467);
vertex(235, 471);
vertex(254, 471);
vertex(285, 482);
vertex(231, 482);
vertex(245, 453);
vertex(253, 458);
vertex(271, 428);
vertex(273, 418);
vertex(273, 428);
vertex(286, 428);
vertex(296, 428);
vertex(316, 422);
vertex(346, 419);
vertex(372, 419);
vertex(387, 423);
vertex(397, 432);
vertex(411, 432);
vertex(422, 445);
vertex(442, 455);
vertex(458, 462);
vertex(464, 474);
vertex(475, 482);
vertex(501, 499);

endShape();


popMatrix();
//}
};

var emerald = function(x, y, s, r) {
    pushMatrix();
    translate(x, y);
    scale(s);
    rotate(r);
    fill(76, 199, 84, 240);
    triangle(0, 20, 20, 0, 20, 31);
    fill(3, 176, 44, 240);
    triangle(20, 0, 20, 31, 40, 20);
    fill(4, 227, 42, 240);
    triangle(0, 20, 20, 31, 15, 51);
    fill(17, 143, 28, 240);
    triangle(40, 20, 20, 31, 25, 51);
    fill(22, 148, 35, 240);
    triangle(20, 31, 15, 51, 25, 51);
    popMatrix();
};
var mainruby = function(x, y, s, clr1, clr2, clr3, clr4, clr5, rot){
pushMatrix();
translate(x, y);
scale(s);
rotate(rot);

var hexagon = function(x, y, s, clr, sclr) {
    pushMatrix();
    translate(x, y);
    noStroke();
    fill(clr);
    beginShape();
    vertex(-s, -sqrt(3) * s);
    vertex(s, -sqrt(3) * s);
    vertex(s * 2, 0);
    vertex(s, sqrt(3) * s);
    vertex(-s, sqrt(3) * s);
    vertex(-s * 2, 0);
    endShape();
    
    strokeWeight(s);
    stroke(clr);
    line(-s, -sqrt(3) * s, s, -sqrt(3) * s);
    line(s, -sqrt(3) * s, s * 2, 0);
    line(s * 2, 0, s, sqrt(3) * s);
    stroke(sclr ? sclr : clr);
    line(s, sqrt(3) * s, -s, sqrt(3) * s);
    line(-s, sqrt(3) * s, -s * 2, 0);
    line(-s * 2, 0, -s, -sqrt(3) * s);
    popMatrix();
};



hexagon(0, 0, 48, clr2, clr4);

noStroke();
fill(clr2);
quad(-60, -103, -53, -106, -30, -107, 0, 0);
quad(60, 103, 67, 97, 81, 72, 0, 0);

hexagon(0, 0, 44, clr1);

noStroke();
fill(clr4);
quad(-111, 5, -59, 95, -31, 48, -61, 2);
fill(clr5);
quad(-50, 98, 50, 98, 32, 53, -25, 53);
fill(clr5);
quad(-59, -95, -111, -5, -60, 4, -33, -49);
fill(255, 170);
quad(59, -95, 111, -5, 60, 4, 33, -49);
fill(255, 50);
quad(-50, -98, 50, -98, 32, -53, -25, -53);
quad(111, 5, 59, 93, 31, 48, 61, 2);

hexagon(0, 0, 32, clr2, clr4);

strokeWeight(10);
stroke(clr2);
line(0, 0, -53, -93);
line(0, 0, 54, -93);
line(0, 0, 108, 0);
line(0, 0, 53, 93);
stroke(clr4);
line(0, 0, -53, 93);
line(0, 0, -108, 0);

noStroke();
fill(clr4);
quad(-60, -93, -57, -98, -36, -60, -37, -55);
quad(57, 98, 50, 98, 26, 60, 31, 55);
fill(clr2);
quad(-35, -71, 0, -71, 0, -62, -30, -62);
quad(44, 67, 57, 43, 45, 32, 38, 58);

hexagon(0, 0, 28, clr3);

noStroke();
fill(0, 20);
quad(-62.5, -107.5, -125, 0, -62.5, 107.5, 62.5, 107.5);

popMatrix();
};
var SpBl = function(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.clr = color(222, 93, 7);
    
    
    noStroke();
    fill(this.clr);
    rect(this.x, this.y, this.w, this.h);
    noStroke();
    fill(lerpColor(this.clr, 255, 0.1));
    quad(this.x, this.y, this.x+this.w, this.y, this.x+this.w/4*3, this.y+this.h/4, this.x+this.w/4, this.y+this.h/4);
    fill(lerpColor(this.clr, 0, 0.1));
    quad(this.x, this.y, this.x+this.w/4, this.y+this.h/4, this.x+this.w/4, this.y+this.h/4*3, this.x, this.y+this.h);
    fill(lerpColor(this.clr, 0, 0.3));
    quad(this.x, this.y+this.h, this.x+this.w, this.y+this.h, this.x+this.w/4*3, this.y+this.h/4*3, this.x+this.w/4, this.y+this.h/4*3);
    fill(lerpColor(this.clr, 0, 0.2));
    quad(this.x+this.w, this.y, this.x+this.w, this.y+this.h, this.x+this.w/4*3, this.y+this.h/4*3, this.x+this.w/4*3, this.y+this.h/4);
    
   mainruby(this.x+60,this.y+60, 0.2, color(99, 255, 117), color(49, 245, 82), color(71, 255, 86), color(71, 222, 102), color(29, 227, 112));
   mainruby(this.x+15,this.y+60, 0.1, color(99, 255, 117), color(49, 245, 82), color(71, 255, 86), color(71, 222, 102), color(29, 227, 112));
   mainruby(this.x+105,this.y+60, 0.1, color(99, 255, 117), color(49, 245, 82), color(71, 255, 86), color(71, 222, 102), color(29, 227, 112));
    
    
};

var Blueybadge = function(x, y, size) {
translate(x, y);
scale(size / 400, size / 400);

noStroke();
fill(110, 21, 36);
ellipse(300, 300, 390, 390);

fill(166, 66, 81); 
ellipse(300, 300, 350, 350);

fill(138, 33, 54);
ellipse(300, 300, 310, 310);

for (var Light = 52; Light < 312; Light = Light+20) {
noStroke();
fill(222, 73, 73, 16);
ellipse(300, 300, Light, Light); 

}
strokeWeight(16);
fill(26, 0, 255, 150);
ellipse(300, 300, 200, 200);
fill(255, 255, 255, 150);
ellipse(250, 250, 60, 60);
ellipse(350, 250, 60, 60);
fill(0, 0, 0, 150);
ellipse(250, 250, 30, 30);
ellipse(350, 250, 30, 30);
fill(0, 221, 255, 150);
ellipse(300, 300, 40, 40);
fill(255, 0, 0, 150);
arc(330, 350, 60, 60, 280, 500);


};
function ball(x, y, s) {
ellipse(x, y, s, s);
noStroke();
fill(255, 255, 255, 40);
ellipse(x + s * 0.04, y - s * 0.04, s * 0.85, s * 0.85);
ellipse(x + s * 0.2, y - s * 0.2, s * 0.2, s * 0.2);
}
var buildingWithHorizontalStripes = function(x,y,sx,sy) {
    noStroke();
    pushMatrix();
        translate(x,y);
        scale(sx,sy);
        for (var i = 0; i < 77; i++) {
            fill(lerpColor(color(0, 9, 140),color(0, 8, 18),i / 135));
            rect(-58, i+123, 18, 81);
        }
        
        fill(48, 0, 64);
        rect(-44,124,82, 156);
        for(var i = 0; i < 9; i++){
            noStroke();
            fill(43, 1, 69,50);
            rect(-44,123,83,20*i);
            rect(-44,125,83,21*i);
        }
        for(var i = 18; i < 41; i++) {
            stroke(73, 139, 189,80);
            rect(-43,7*i,81,0);
        }
        
        textSize(20);
        fill(33, 218, 255);
        text("` ```` `",-11,175);
        text("````` `",-41,216);
        noStroke();
    popMatrix();
};
var hexagon = function(x, y, size){
    beginShape();
     vertex(x-size/2,y-size/3.8);
     vertex(x-size/2,y+size/3.8);
     vertex(x,y+size/1.8);
     vertex(x+size/2,y+size/3.8);
     vertex(x+size/2,y-size/3.8);
     vertex(x,y-size/1.8);
    vertex(x-size/2,y-size/3.8);
    endShape();
};
var miniCCblock = function(x, y, s, color){
    pushMatrix();
    translate(x, y);
    scale(s);
    fill(color);
    rect(0, 0, 20, 22);
    fill(0, 100);
    ellipse(10, 10, 10, 10);
    fill(0, 0, 0, 100);
    rect(18, 0, 2, 20);
    rect(0, 20, 20, 2);
    fill(255, 255, 255, 100);
    rect(0, 0, 2, 19.5);
    rect(0, 0, 18, 2);
    popMatrix();
    
};
var CCBB = function(x, y, w, h, colord){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.clr = color(colord);
    
    
    noStroke();
    fill(this.clr);
    rect(this.x, this.y, this.w, this.h);
    noStroke();
    fill(lerpColor(this.clr, 255, 0.1), 100);
    quad(this.x, this.y, this.x+this.w, this.y, this.x+this.w/4*3, this.y+this.h/4, this.x+this.w/4, this.y+this.h/4);
    fill(lerpColor(this.clr, 0, 0.1), 100);
    quad(this.x, this.y, this.x+this.w/4, this.y+this.h/4, this.x+this.w/4, this.y+this.h/4*3, this.x, this.y+this.h);
    fill(lerpColor(this.clr, 0, 0.3), 100);
    quad(this.x, this.y+this.h, this.x+this.w, this.y+this.h, this.x+this.w/4*3, this.y+this.h/4*3, this.x+this.w/4, this.y+this.h/4*3);
    fill(lerpColor(this.clr, 0, 0.2), 100);
    quad(this.x+this.w, this.y, this.x+this.w, this.y+this.h, this.x+this.w/4*3, this.y+this.h/4*3, this.x+this.w/4*3, this.y+this.h/4);
    
};

var IIZtree = function(x,y){

    fill(146, 0, 168);
    rect(x-15,y-25,30,123);
    fill(255, 255, 0, 50);
    rect(x-12,y-25,25,123);
    rect(x-10,y-25,20,123);
    rect(x-8,y-25,15,123);
    rect(x-6,y-25,10,123);
    fill(135, 179, 255);
    
    beginShape();
    
    vertex(x,y);
    vertex(x-60,y);
    vertex(x-35,y-70);
    vertex(x-50,y-70);
    vertex(x-25,y-140);
    vertex(x-40,y-140);
    vertex(x+0,y-210);
    vertex(x+40,y-140);
    vertex(x+24,y-140);
    vertex(x+50,y-70);
    vertex(x+35,y-70);
    vertex(x+60,y);
    vertex(x,y);
    endShape();
    
    
    fill(242, 245, 250);
    beginShape();
    
    vertex(x,y-10);
    vertex(x-50,y-10);
    vertex(x-25,y-80);
    vertex(x-40,y-80);
    vertex(x-15,y-150);
    vertex(x-30,y-150);
    vertex(x+0,y-200);
    vertex(x+30,y-150);
    vertex(x+15,y-150);
    vertex(x+40,y-80);
    vertex(x+25,y-80);
    vertex(x+50,y-10);
    vertex(x,y-10);
    endShape();
    
    
    };
    var drawBlock = function(x,y, id){
        rectMode(CENTER);
        this.x = x;
        this.y = y;
        noStroke();
        if(id === 0){
               fill(83, 27, 189);
        }
        if(id === 1){
            fill(12, 51, 245);
        }
                
                rect(this.x, this.y, 40, 40);
                fill(0,0,0,30);
                rect(this.x,this.y-13,40,15);
                
                   stroke(20);
                strokeWeight(2);
                strokeCap(SQUARE);
                line(this.x-20,this.y-5,this.x+20,this.y-5);
                line(this.x-20,this.y+10,this.x+20,this.y+10);
                line(this.x-10,this.y-5,this.x-10,this.y+10);
                line(this.x+10,this.y-5,this.x+10,this.y+10);
                line(this.x,this.y-20,this.x,this.y-5);
                line(this.x,this.y+10,this.x,this.y+20);
    };
    var SpBl2 = function(x, y, w, h){
        rectMode(CORNER);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.clr = color(94, 0, 209);
        noStroke();
        fill(this.clr);
        rect(this.x, this.y, this.w, this.h);
        noStroke();
        fill(lerpColor(this.clr, 255, 0.1));
        quad(this.x, this.y, this.x+this.w, this.y, this.x+this.w/4*3, this.y+this.h/4, this.x+this.w/4, this.y+this.h/4);
        fill(lerpColor(this.clr, 0, 0.1));
        quad(this.x, this.y, this.x+this.w/4, this.y+this.h/4, this.x+this.w/4, this.y+this.h/4*3, this.x, this.y+this.h);
        fill(lerpColor(this.clr, 0, 0.3));
        quad(this.x, this.y+this.h, this.x+this.w, this.y+this.h, this.x+this.w/4*3, this.y+this.h/4*3, this.x+this.w/4, this.y+this.h/4*3);
        fill(lerpColor(this.clr, 0, 0.2));
        quad(this.x+this.w, this.y, this.x+this.w, this.y+this.h, this.x+this.w/4*3, this.y+this.h/4*3, this.x+this.w/4*3, this.y+this.h/4);
        
        fill(255, 255, 92, 70);
        rect(this.x+1.5, this.y, this.w-3, this.h);
        rect(this.x+6, this.y, this.w-10, this.h);
        rect(this.x+11, this.y, this.w-20, this.h);
        rect(this.x+18, this.y, this.w-30, this.h);
        fill(0, 100);
    rect(this.x, this.y, this.w-35, this.h);
    rect(this.x, this.y, this.w-30, this.h);
        
        
        
        
    };
    var icicle = function(x, y, w, h, growth) {
        noStroke();
        pushMatrix();
        translate(x, y);
        scale(w, h);
        switch (growth) {
            case 0:
                //{
                pushMatrix();
                translate(-160, -165);
                fill(0, 242, 255);
                ellipse(200, 209, 66, 65);
                fill(255, 255, 255);
                ellipse(196, 206, 62, 60);
                beginShape();
                vertex(189, 184);
                vertex(181, 182);
                vertex(189, 172);
                vertex(194, 162);
                vertex(200, 172);
                vertex(207, 178);
                endShape(CLOSE);
    
                fill(0, 0, 0);
                ellipse(205, 218, 5, 5);
                ellipse(184, 221, 5, 5);
                fill(255, 255, 255);
                ellipse(205.5, 217.5, 2.5, 2.5);
                ellipse(184.5, 220.5, 2.5, 2.5);
                popMatrix();
                //}
                break;
            case 1:
                // {
                pushMatrix();
                translate(-160, -140);
    
                fill(0, 242, 255);
                ellipse(190, 235, 46, 45);
                fill(255, 255, 255);
                ellipse(188, 233, 42, 40);
    
    
                pushMatrix();
                translate(205, 252);
                rotate(-35);
                fill(255, 255, 255);
                ellipse(0, 0, 15, 9);
                fill(0, 242, 255);
                ellipse(-1, 1, 12, 8);
                popMatrix();
    
                pushMatrix();
                translate(180, 257);
                rotate(5);
                fill(255, 255, 255);
                ellipse(0, 0, 16, 9);
                fill(0, 242, 255);
                ellipse(-1, 1, 15, 6);
                popMatrix();
    
    
                fill(0, 242, 255);
                beginShape();
                curveVertex(189, 194);
                curveVertex(188, 183);
                curveVertex(194, 175);
                curveVertex(196, 167);
                curveVertex(200, 163);
                curveVertex(204, 160);
                curveVertex(210, 155);
                curveVertex(210, 153);
                curveVertex(219, 146);
                curveVertex(229, 139);
                curveVertex(222, 153);
                curveVertex(221, 165);
                curveVertex(220, 180);
                curveVertex(216, 191);
                curveVertex(204, 201);
                curveVertex(193, 209);
                endShape(CLOSE);
    
                fill(148, 247, 252);
                pushMatrix();
                translate(-25, 20);
                scale(0.75, 0.9);
                beginShape();
                curveVertex(311, 195);
                curveVertex(298, 199);
                curveVertex(291, 192);
                curveVertex(293, 171);
                curveVertex(304, 162);
                curveVertex(311, 157);
                curveVertex(318, 156);
                curveVertex(322, 164);
                curveVertex(323, 176);
                curveVertex(320, 187);
                endShape(CLOSE);
                popMatrix();
    
                fill(255, 255, 255);
                beginShape();
                curveVertex(190, 208);
                curveVertex(194, 221);
                curveVertex(182, 221);
                curveVertex(186, 212);
                curveVertex(183, 203);
                curveVertex(180, 188);
                curveVertex(184, 173);
                curveVertex(196, 158);
                curveVertex(210, 147);
                curveVertex(227, 140);
                curveVertex(220, 147);
                curveVertex(216, 153);
                curveVertex(209, 160);
                curveVertex(203, 168);
                curveVertex(196, 181);
                curveVertex(192, 190);
                endShape(CLOSE);
                fill(0, 0, 0);
                ellipse(195, 240, 5, 5);
                ellipse(180, 243, 5, 5);
                fill(255);
                ellipse(195.5, 239.5, 2.7, 2.7);
                ellipse(180.3, 242.5, 2.7, 2.7);
                popMatrix();
                //}
                break;
            case 2:
                // {
                pushMatrix();
                translate(-170, -160);
                fill(255, 255, 255);
                translate(20, -10);
                triangle(161, 216, 187, 204, 176, 176);
                fill(0, 242, 255);
                triangle(161, 231, 187, 225, 176, 176);
                ellipse(180, 240, 26, 35);
                ellipse(180, 254, 25, 15);
                ellipse(180, 225, 46, 45);
                fill(255, 255, 255);
                ellipse(178, 223, 42, 40);
    
                pushMatrix();
                translate(80, -50);
                rotate(20);
    
                popMatrix();
    
                pushMatrix();
                translate(190, 255);
                rotate(-35);
                fill(255, 255, 255);
                ellipse(0, 0, 15, 9);
                fill(0, 242, 255);
                ellipse(-1, 1, 12, 8);
                popMatrix();
    
                pushMatrix();
                translate(170, 256);
                rotate(35);
                fill(255, 255, 255);
                ellipse(0, 0, 16, 9);
                fill(0, 242, 255);
                ellipse(1, 0, 12, 7);
                popMatrix();
    
    
                fill(0, 0, 0, 180);
                ellipse(185, 233, 6, 6);
                ellipse(170, 233, 6, 6);
                fill(255);
                ellipse(186, 232, 3, 3);
                ellipse(171, 232, 3, 3);
                popMatrix();
                //}
                break;
            case 3:
                // {    
                pushMatrix();
                translate(-170, -160);
                fill(255, 255, 255);
                translate(20, -10);
                triangle(160, 215, 181, 207, 167, 178);
                fill(0, 242, 255);
                triangle(161, 231, 187, 225, 168, 177);
                fill(255, 255, 255);
                triangle(181, 206, 198, 216, 186, 177);
                fill(0, 242, 255);
                triangle(181, 206, 198, 235, 186, 177);
                ellipse(180, 240, 26, 35);
                ellipse(180, 254, 25, 15);
                ellipse(180, 225, 46, 45);
                fill(255, 255, 255);
                ellipse(178, 223, 42, 40);
    
                pushMatrix();
                translate(80, -50);
                rotate(20);
    
                popMatrix();
    
                pushMatrix();
                translate(190, 255);
                rotate(-35);
                fill(255, 255, 255);
                ellipse(0, 0, 15, 9);
                fill(0, 242, 255);
                ellipse(-1, 1, 12, 8);
                popMatrix();
    
                pushMatrix();
                translate(170, 256);
                rotate(35);
                fill(255, 255, 255);
                ellipse(0, 0, 16, 9);
                fill(0, 242, 255);
                ellipse(1, 0, 12, 7);
                popMatrix();
    
    
                fill(0, 0, 0, 180);
                ellipse(185, 233, 6, 6);
                ellipse(170, 233, 6, 6);
                fill(255);
                ellipse(186, 232, 3, 3);
                ellipse(171, 232, 3, 3);
                popMatrix();
                //}
                break;
            case 4:
                // {
                pushMatrix();
                translate(-135, -135);
                fill(255, 255, 255);
                triangle(217, 190, 181, 186, 197, 134);
                triangle(217, 192, 175, 195, 143, 159);
                triangle(217, 203, 174, 194, 266, 159);
                triangle(216, 190, 175, 214, 127, 210);
                triangle(216, 190, 175, 214, 272, 214);
                triangle(197, 143, 194, 225, 161, 271);
                triangle(197, 143, 194, 225, 234, 271);
                fill(0, 242, 255);
                triangle(199, 135, 206, 206, 233, 270);
                triangle(205, 179, 193, 225, 161, 271);
                triangle(176, 190, 175, 214, 272, 214);
                triangle(216, 203, 175, 214, 127, 210);
                triangle(217, 203, 211, 194, 266, 159);
                triangle(188, 192, 175, 195, 143, 159);
    
                translate(-17, -70);
                scale(1.2);
                pushMatrix();
                translate(80, -30);
                rotate(20);
                popMatrix();
                pushMatrix();
                translate(325, 0);
                scale(-1, 1);
                rotate(10);
    
                pushMatrix();
                translate(3, 3);
    
                popMatrix();
    
    
    
    
                popMatrix();
    
                pushMatrix();
                translate(80, -10);
                rotate(20);
    
    
                pushMatrix();
                translate(3, 3);
    
                popMatrix();
    
    
                popMatrix();
    
    
                pushMatrix();
                translate(325, 20);
                scale(-1, 1);
                rotate(10);
    
                pushMatrix();
                translate(3, 3);
    
                popMatrix();
    
    
    
                popMatrix();
    
                fill(0, 242, 255);
                ellipse(180, 240, 26, 35);
                ellipse(180, 238, 30, 35);
                ellipse(180, 254, 23, 15);
                ellipse(180, 225, 46, 45);
                fill(255, 255, 255);
                ellipse(178, 223, 42, 40);
                triangle(178, 249, 167, 240, 189, 240);
    
    
                fill(0, 0, 0);
                noStroke();
                arc(170, 230, 7, 10, 20, 210);
                arc(185, 230, 7, 10, -20, 150);
                fill(255, 255, 255);
                ellipse(171, 233, 1.5, 1.5);
                ellipse(184, 233, 1.5, 1.5);
    
                fill(148, 247, 252);
                for (var i = 0; i < 10; i += 2) {
                    ellipse(179.5, 254, 9 + i, 5 + i);
                }
                popMatrix();
                //}
                break;
        }
        popMatrix();
    };

    var spiral = function(x, y, sz, r) {
            beginShape();
            for (var i = 0; i < 10; i++) {
                vertex(x + cos(i * 90 + r) * i * sz / 10, y + sin(i * 90 + r) * i * sz / 10);
            }
            endShape();
        };
        var star = function(x, y, sz, r) {
            beginShape();
            for (var i = 0; i < 5; i++) {
                vertex(x + cos(i * 144 + r) * sz, y + sin(i * 144 + r) * sz);
            }
            endShape();
        };
    var Vortexpast= function(x, y, r, sz) {
            strokeCap(ROUND);
            pushMatrix();
            translate(x, y);
            rotate(r);
            scale(sz / 100, sz / 100);
        
            noStroke();
            fill(vrtxclr);
        
            ellipse(0, 0, 100, 100);
        
            noFill();
            stroke(lerpColor(vrtxclr, color(0, 0, 30), 0.3), 50);
            strokeWeight(15);
            arc(0, 0, 75, 75, 90, 180);
            stroke(255, 255, 230, 60);
        
            arc(0, 0, 75, 75, -90, 0);
        
            noStroke();
        
            fill(0, 0, 0);
            rectMode(CENTER);
            rect(-20, -5, 10, 30, 5);
                    rect(20, -5, 10, 30, 5);
                    arc(0, 20, 20, 10, 0, 180);
        
                    fill(lerpColor(vrtxclr, color(255, 255, 230), 0.5));
                    rect(0, -40, 10, 30);
                    rect(0, -40, 30, 10);
            /*
            switch (num) {
                case 0:
                    rect(-20, -5, 10, 30, 5);
                    rect(20, -5, 10, 30, 5);
                    arc(0, 20, 20, 10, 0, 180);
        
                    fill(lerpColor(colors[num], color(255, 255, 230), 0.5));
                    rect(0, -40, 10, 30);
                    rect(0, -40, 30, 10);
                    break;
                case 1:
                    rect(-20, -7, 10, 25, 5, 5, 0, 0);
                    rect(20, -7, 10, 25, 5, 5, 0, 0);
                    arc(0, 20, 25, 25, 0, 180);
                    fill(lerpColor(colors[num], color(255, 255, 230), 0.5));
                    triangle(-15, -35, 15, -35, 0, -60);
                    break;
                case 2:
                    rect(-20, -3, 10, 25, 0, 0, 5, 5);
                    rect(20, -3, 10, 25, 0, 0, 5, 5);
                    arc(0, 25, 25, 10, 181, 360);
                    stroke(lerpColor(colors[num], color(255, 255, 230), 0.5));
                    noFill();
                    strokeWeight(10);
                    beginShape();
                    vertex(0, -30);
                    vertex(10, -40);
                    vertex(-10, -50);
                    vertex(0, -60);
                    endShape();
                    break;
                case 3:
                    fill(255, 255, 255);
                    rect(-20, -5, 10, 30, 5, 5, 0, 5);
                    rect(20, -5, 10, 30, 5, 5, 5, 0);
                    stroke(lerpColor(colors[num], color(255, 255, 230), 0.8));
                    noFill();
                    strokeWeight(4);
                    spiral(0, -35, 25, -180);
                    line(-10, 20, 10, 20);
                    break;
                case 4:
                    rect(-20, -5, 20, 10, 5);
                    rect(20, -5, 20, 10, 5);
                    ellipse(0, 20, 20, 5);
        
                    fill(200, 200, 230);
                    rect(-20, 0, 15, 5, 5);
                    rect(20, 0, 15, 5, 5);
                    rect(-20, -10, 15, 5, 5);
                    rect(20, -10, 15, 5, 5);
        
                    fill(lerpColor(colors[num], color(255, 255, 230), 0.5));
                    star(0, -40, 20, -90);
        
                    break;
                case 5:
                    fill(255, 255, 255, 50);
                    arc(0, 0, 100, 100, -90, 90);
        
                    stroke(255, 255, 255);
                    strokeWeight(3);
                    noFill();
                    ellipse(-20, -5, 15, 10);
                    ellipse(20, -5, 15, 10);
                    ellipse(10, 20, 5, 5);
                    ellipse(-10, 20, 5, 5);
                    ellipse(0, 30, 5, 5);
        
                    stroke(255, 170, 130);
                    ellipse(0, -30, 40, 20);
                    ellipse(0, -30, 10, 20);
                    ellipse(0, -30, 10, 5);
                    break;
            }
        */
            popMatrix();
        };
    var Climbmonster = function(x, y, s){
            rectMode(CORNER);
            this.monsterX = 0;
            this.y = 0;
            pushMatrix();
            translate(x, y);
            scale(s);
            noStroke();
            fill(169, 20, 199);
            rect(this.monsterX - 20, this.y - 40, 40, 40, 5);
            ellipse(this.monsterX - 28, this.y - 13, 12, 12);
            ellipse(this.monsterX + 28, this.y - 13, 12, 12);
            fill(250, 113, 8);
            ellipse(this.monsterX - 10, this.y - 20, 10, 10);
            ellipse(this.monsterX + 10, this.y - 20, 10, 10);
            arc(this.monsterX, this.y - 5, 20, 20, 180, 359);
            stroke(250, 113, 8);
            strokeWeight(5);
            line(this.monsterX - 5, this.y - 28, this.monsterX - 15, this.y - 31);
            line(this.monsterX + 5, this.y - 28, this.monsterX + 15, this.y - 31);
            popMatrix();
        };
        var Winterfulpast = function(x, y, w, h, r) {
            rectMode(CENTER);
        fill(250, 35, 250);
        rect(x,y,w,h,r);
        fill(255, 203, 99);
        rect(x-15,y-10,w/4,h/4,r);
        rect(x+20,y-10,w/4,h/4,r);
        fill(240, 89, 8);
        arc(x+1,y+10,w/2,h/3, 0, 180);
    };

var mountain = function(x, y, s){
    pushMatrix();
    strokeWeight(1);
    translate(x, y);
    scale(s);
    stroke(59, 59, 59);
    fill(122, 122, 122);
    beginShape();
    vertex(0, 600);
    vertex(116, 311);
    vertex(231, 122);
    vertex(300, 0);
    vertex(393, 131);
    vertex(470, 273);
    vertex(510, 395);
    vertex(600, 600);
    endShape(CLOSE);
    fill(89, 89, 89);
    beginShape();
    vertex(300, 0);
    vertex(323, 191);
    vertex(273, 332);
    vertex(200, 415);
    vertex(159, 506);
    vertex(79, 600);
    vertex(0, 600);
    endShape(CLOSE);
    fill(79, 79, 79);
    beginShape();
    vertex(300, 0);
    vertex(395, 215);
    vertex(466, 333);
    vertex(456, 413);
    vertex(425, 494);
    vertex(418, 600);
    vertex(298, 600);
    vertex(370, 413);
    vertex(359, 187);
    endShape(CLOSE);
    popMatrix();
};
function m2(x, y, s, r, c) {
    pushMatrix();
        translate(x, y);
        scale(s);
        rotate(r);
        fill(50, 94, 171);
        triangle(0, 0, 70, 100, -70, 100);
        
        fill(142, 187, 250);
        triangle(0, 0, 14, 20, -14, 20);
        triangle(0, 20, -10, 27, -14, 20);
        triangle(14, 20, 5, 27, -1, 20);
    
        fill(0, 0, 255, 40);
        triangle(0, 0, -70, 100, 0, 100);
    popMatrix();
    }

    function TZcloud(x, y, s, r, c) {
        pushMatrix();
            translate(x, y);scale(s);rotate(r);
        fill(c);
        rect(0, 361, width, 40);
        ellipse(0, 364, 100, 100);
        ellipse(62, 366, 90, 90);
        ellipse(107, 348, 40, 40);
        ellipse(155, 347, 90, 90);
        ellipse(197, 362, 70, 70);
        ellipse(239, 362, 40, 40);
        ellipse(272, 372, 50, 50);
        ellipse(317, 362, 60, 60);
        ellipse(367, 362, 70, 50);
        ellipse(418, 350, 60, 60);
        ellipse(469, 362, 70, 50);
        ellipse(535, 362, 120, 120);
        ellipse(603, 362, 70, 50);
        popMatrix();
        };

background(0, 0);
            noStroke();
            fill(0, 0, 38);
            beginShape();
                vertex(0, 373);
                vertex(48, 417);
                vertex(64, 394);
                vertex(107, 443);
                vertex(152, 327);
                vertex(201, 371);
                vertex(253, 294);
                vertex(306, 393);
                vertex(328, 339);
                vertex(349, 367);
                vertex(405, 270);
                vertex(472, 395);
                vertex(501, 358);
                vertex(553, 415);
                vertex(600, 373);
                vertex(600, 600);
                vertex(0, 600);
            endShape(CLOSE);
            
            var CChillsimg = get(0, 265, 600, 335);
            background(255, 0);
            noStroke();
            m2(300, 100, 6, 1, 4);
            var TZB1 = get(0, 0, 600, 600);
background(255, 0);
            noStroke();
    TZcloud(0, -510, 1.7, 0, color(255));
    TZcloud(-200, -470, 1.7, 0, color(215));
    TZcloud(-350, -390, 1.7, 0, color(235));
            var TZB2 = get(0, 0, 600, 600);

            var iceblock = function(x,y,s1, s2) {
                pushMatrix();
                scale(s1, s2);
                noStroke();
                fill(179, 75, 6);
                rect(x,y,50,50,5);
                fill(255, 136, 0,50);
                rect(x,y,50,20,5);
                fill(255, 255, 255,90);
                ellipse(x+5,y+10,5,5);
                ellipse(x+23,y+30,5,5);
                ellipse(x+34,y+15,5,5);
                    fill(252, 151, 68, 100);
                rect(x+24,y,25,50,5);
                popMatrix();
            };


            var mountain = function(x, y, s){
    pushMatrix();
    strokeWeight(1);
    translate(x, y);
    scale(s);
    stroke(59, 59, 59);
    fill(38, 38, 38);
    beginShape();
    vertex(0, 600);
    vertex(116, 311);
    vertex(231, 122);
    vertex(300, 0);
    vertex(393, 131);
    vertex(470, 273);
    vertex(510, 395);
    vertex(600, 600);
    endShape(CLOSE);
    fill(61, 61, 61);
    beginShape();
    vertex(300, 0);
    vertex(323, 191);
    vertex(273, 332);
    vertex(200, 415);
    vertex(159, 506);
    vertex(79, 600);
    vertex(0, 600);
    endShape(CLOSE);
    fill(66, 59, 66);
    beginShape();
    vertex(300, 0);
    vertex(395, 215);
    vertex(466, 333);
    vertex(456, 413);
    vertex(425, 494);
    vertex(418, 600);
    vertex(298, 600);
    vertex(370, 413);
    vertex(359, 187);
    endShape(CLOSE);
    popMatrix();
};
background(255, 0);
mountain(0, 40, 0.4);
mountain(200, 40, 0.4);
mountain(400, 40, 0.4);
mountain(0, 100, 0.3);
mountain(-50, 100, 0.3);
mountain(100, 100, 0.3);
mountain(200, 100, 0.3);
mountain(300, 100, 0.3);
mountain(400, 100, 0.3);
var RRmountainz = get(0, 0, 650, 300);
var DDBB = function(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.clr = color(235, 100, 9);
    
    
    noStroke();
    fill(this.clr);
    rect(this.x, this.y, this.w, this.h);
    fill(242, 164, 19);
    ellipse(this.x+15, this.y+40, 20, 20);
    ellipse(this.x+105, this.y+40, 20, 20);
    ellipse(this.x+15, this.y+70, 20, 20);
    ellipse(this.x+105, this.y+70, 20, 20);
    ellipse(this.x+60, this.y+60, 30, 30);
    ellipse(this.x+60, this.y+15, 30, 30);
    ellipse(this.x+60, this.y+105, 30, 30);
    ellipse(this.x+105, this.y + 10, 20, 20);
    ellipse(this.x+15, this.y + 10, 20, 20);
    ellipse(this.x+105, this.y + 105, 20, 20);
    ellipse(this.x+15, this.y + 105, 20, 20);
    noStroke();
    fill(lerpColor(this.clr, 255, 0.1), 100);
    quad(this.x, this.y, this.x+this.w, this.y, this.x+this.w/4*3, this.y+this.h/4, this.x+this.w/4, this.y+this.h/4);
    fill(lerpColor(this.clr, 0, 0.1), 100);
    quad(this.x, this.y, this.x+this.w/4, this.y+this.h/4, this.x+this.w/4, this.y+this.h/4*3, this.x, this.y+this.h);
    fill(lerpColor(this.clr, 0, 0.3), 100);
    quad(this.x, this.y+this.h, this.x+this.w, this.y+this.h, this.x+this.w/4*3, this.y+this.h/4*3, this.x+this.w/4, this.y+this.h/4*3);
    fill(lerpColor(this.clr, 0, 0.2), 100);
    quad(this.x+this.w, this.y, this.x+this.w, this.y+this.h, this.x+this.w/4*3, this.y+this.h/4*3, this.x+this.w/4*3, this.y+this.h/4);
    
};
var wloading = 0;
var watertime = 0;
var watercharge = function(x, y, s) {
    pushMatrix();
    translate(x, y);
    scale(s);
    noStroke();
    fill(102, 102, 102);
    ellipse(width/2, height/2, 300, 300);
    fill(0, 145, 255, 200);
    arc(width/2, height/2, 250, 250, 270, 269 + wloading);
    fill(56, 56, 56);
    ellipse(width/2, height/2, 130, 130);
    textFont(createFont("Monaco", 30));
    fill(255);
    text(floor(wloading/3.6) + "", 285, 310);
    fill(107, 107, 107);
    ellipse(width/2, height/2-150, 60, 60);
    pushMatrix();
    translate(-450, -570);
    scale(2.5);
    triangle(330, 230, 300, 300, 264, 230); 
    popMatrix();
    popMatrix();
};

var confetti = [];

var runConfetti = function() {
    noStroke();

    for(var i = confetti.length - 1; i >= 0; i--) {
        var confetto = confetti[i];
        
        //flip the width and height of the confetti
        var w = cos(confetto.sx) * confetto.w;
        var h = sin(confetto.sy) * confetto.h;

        //translate to the center of the confetti then rotate it
        translate(confetto.x + confetto.w / 2, confetto.y + confetto.h / 2);
        rotate(confetto.angle);
        
        //draw the confetti using the flipped width and height
        fill(confetto.color);
        ellipse(-w / 2, -h / 2, w, h);
        
        //reverse the rotation and translation ready for the next confetti
        rotate(-confetto.angle);
        translate(-confetto.x - confetto.w / 2, -confetto.y - confetto.h / 2);

        //update the width and height increments
        confetto.sx+=5;
        confetto.sy+=5;
        
        //move horizontally
        confetto.x+= confetto.vx;
        
        //add gravity to the velocity
        confetto.vy+= confetto.gravity;
        
        //move horizontally
        confetto.y+= confetto.vy;
        
        //rotate the confetti
        confetto.angle+= confetto.rot;
        
        //remove the confetti when it goes off the canvas
        if(confetto.y - confetto.h > height) {
            confetti.splice(i, 1);
        }
    }
};
var addConfetti = function(x, y) {
    //add 3 confetti
    for(var i = 0; i < 3; i++) {
        confetti.push(
            {
                x: x,
                y: y,
                w: random(5, 5),
                h: random(5, 5),
                vx: random(-3, 3),
                vy: random(-14, -8),
                gravity: 0.2,
                sx: random(360) | 0,
                sy: random(360) | 0,
                angle: 0,
                //rot: random(-10, 10),
                color: color(0, 123, 255),
            }
        );
    }
};
var Gradient = function(xG,yG,wG,hG,startCol,endCol) {
    pushStyle();
    noStroke();
    var pixelSize = 2;
    for (var y = yG; y < yG + hG; y += pixelSize) {
        fill(lerpColor(startCol, endCol, y / height));
        rect(xG, y, wG, pixelSize);
    }
    popStyle();
};
var crate = function(x, y, w, h, d) {
    
        noStroke();
        fill(153, 97, 0);
        rect(x, y, w, h, h / 8);
        fill(201, 127, 0);
        rect(x + (w / 8), y, w - (w / 4), h / 8);
        rect(x + (w / 8), y + h - (h / 8), w - (w / 4), h / 8);
        arc(x + (w / 8), y + (h / 8), w / 4, h / 4, 225, 270);
        arc(x + (w / 8), y + h - (h / 8), w / 4, h / 4, 90, 135);
        arc(x + w - (w / 8), y + (h / 8), w / 4, h / 4, 270, 315);
        arc(x + w - (w / 8), y + h - (h / 8), w / 4, h / 4, 45, 90);
        if (d === 0) {
            triangle(x + (w / 8), y + (h / 8), x + (w / 4), y + (h / 8), x + (w / 8), y + (h / 4));
            triangle(x + w - (w / 8), y + h - (h / 8), x + w - (w / 4), y + h - (h / 8), x + w - (w / 8), y + h - (h / 4));
            quad(x + (w / 4), y + (h / 8), x + (w / 8), y + (h / 4), x + w - (w / 4), y + h - (h / 8), x + w - (w / 8), y + h - (h / 4));
        } else {
            triangle(x + w - (w / 8), y + (h / 8), x + w - (w / 4), y + (h / 8), x + w - (w / 8), y + (h / 4));
            triangle(x + (w / 8), y + h - (h / 8), x + (w / 4), y + h - (h / 8), x + (w / 8), y + h - (h / 4));
            quad(x + w - (w / 4), y + (h / 8), x + w - (w / 8), y + (h / 4), x + (w / 4), y + h - (h / 8), x + (w / 8), y + h - (h / 4));
        }
        fill(153, 97, 0);
        if (d === 0) {
            ellipse(x + (w / 4), y + (h / 4), w / 16, h / 16);
            ellipse(x + w - (w / 4), y + h - (h / 4), w / 16, h / 16);
        } else {
            ellipse(x + w - (w / 4), y + (h / 4), w / 16, h / 16);
            ellipse(x + (w / 4), y + h - (h / 4), w / 16, h / 16);
        }
        fill(250, 166, 30);
        rect(x, y + (h / 8), w / 8, h - (h / 4));
        rect(x + w - (w / 8), y + (h / 8), w / 8, h - (h / 4));
        arc(x + (w / 8), y + (h / 8), w / 4, h / 4, 180, 225);
        arc(x + (w / 8), y + h - (h / 8), w / 4, h / 4, 135, 180);
        arc(x + w - (w / 8), y + (h / 8), w / 4, h / 4, 315, 360);
        arc(x + w - (w / 8), y + h - (h / 8), w / 4, h / 4, 0, 45);
    
};


    //{
    background(255, 255, 255, 0);
    var flame = function(f){
    fill(255, 0, 0);
    stroke(255, 255, 0);
    arc(150+f,259+(f*-1.2), 20,20, 0,180);
    beginShape();
        vertex(140+f,260+(f*-1.2));
        vertex(155+f,230+(f*-1.2));
        vertex(160+f,260+(f*-1.2));
    endShape();
    stroke(0, 0, 0);
};

flame(-129);

var fl = get(0, 380, 60, 60);
background(255, 255, 255, 0);
noStroke();
pushMatrix();
fill(0, 166, 255);
rotate(-50);
rect(-45, 40, 20, 20);

popMatrix();
fill(30, 119, 235);
ellipse(10, 50, 15, 15);
ellipse(25, 60, 10, 10);
ellipse(10, 70, 8, 8);

var bubble = get(0, 42, 35, 35);
background(255, 255, 255, 0);
fill(255, 255, 255, 150);
rect(300, 440, 100, 50, 30);
rect(300, 440 - 10, 90, 50, 30);
rect(300, 440, 90, 50, 30);
rect(290, 440, 100, 50, 30);
rect(285, 440, 130, 50, 30);
rect(275, 440, 130, 50, 30);
rect(285, 440, 130, 50, 30);
rect(275, 420, 150, 80, 30);

var breeze = get(170, 420, 260, 80);
background(255, 255, 255, 0);
fill(255, 237, 0);
    beginShape();
       vertex(335, 0);
        vertex(340, 36);
        vertex(287, 63);
        vertex(314, 113);
        vertex(274, 138);
        vertex(360, 126);
        vertex(344, 63);
        vertex(381, 58);
        vertex(399, 0);
    endShape();
    
var bolt = get(274, 0, 125, 140);
    //}
    
    
    noStroke();
    fill(255, 132, 0);
    rect(0, 0, 40, 40);
    fill(247, 151, 8);
    rect(0, 0, 20, 20);
    rect(20, 20, 20, 20);
    fill(255, 255, 255, 200);
    rect(0, -1, 20, 2.5);
    rect(20, 20, 20, 1.5);
    fill(255, 255, 255, 200);
    rect(9, 0, 5, 10);
    rect(24.5, 21, 4.5, 10);
    rect(32, 21, 4.5, 6);
var dirt = get(0, 0, 40, 40);
    
    // ---- BOLTY"S LIGHTNING {
    background(255, 0);

noStroke();
fill(25, 168, 168);
triangle(383, 410, 388, 355, 397, 390);
triangle(392, 390, 404, 370, 398, 440);
fill(248, 255, 41);
triangle(385, 410, 390, 355, 395, 390);
triangle(395, 390, 406, 370, 400, 440);

var Boltyslightning = get(383, 355, 25, 84);
var drawSize = 600, drawMinus = 0, drawChange = 0.1, Color = 200;

background(255, 255, 255, 0);
noFill();
strokeWeight(1);
for (var i = 0; i < 335; i++) {
                stroke(200, 220, 220, Color);
                ellipse(300, 300, drawSize - drawMinus, drawSize - drawMinus);
                drawMinus += drawChange;
                drawChange += 0.01;
                Color -= 0.3;
            }
stroke(255, 255, 255, 175);
strokeWeight(600 / 10);
arc(300, 300, 600 * 0.8, 600 * 0.8, 310, 360);
arc(300, 300, 600 * 0.8, 600 * 0.8, 270, 290);
var Bubbleimg = get(0, 0, 600, 600);
    //}
    background(255, 0);
for (var x = 0; x < 100; x++) {
  for (var y = 0; y < 100; y++) {
    // A random brightness!
    var bright = random(150);
    stroke(bright, bright, bright);
    point(x, y);
  }
 }
var groundtxtr = get(0, 0, 100, 100);
    noStroke();
background(255, 0);
fill(227, 103, 9, 200);
triangle(29, 1, 69, 1, 30, 41); 
var TRI = get(30, 0, 40, 40);
noStroke();
background(255, 0);
fill(227, 103, 9, 200);
triangle(29, 0, 0, 0, 30, 40);
var TRI2 = get(0, 0, 40, 40);
noStroke();
background(255, 0);
fill(250, 230, 100);
triangle(29, 1, 69, 1, 30, 41); 
var TRIA = get(30, 0, 40, 40);
noStroke();
background(255, 0);
fill(250, 230, 100);
triangle(29, 0, 0, 0, 30, 40);
var TRIA2 = get(0, 0, 40, 40);
        noStroke();
    
    

var pillar = get(0, 0, 100, 400);
    background(255, 255, 255, 0);
fill(255);
rect(20, 0, 5, 15, 10);
       rect(40, 10, 5, 15, 10);
       rect(60, 0, 5, 15, 10);
       rect(75, 0, 5, 25, 10);

var linez = get(0, 0, 80, 25);
    var rrX = (50);

noStroke();
fill(168, 168, 168);
rect(0, 0, 50, 50);
fill(255, 255, 255, 150);
rect(0, 0, 5, 50);
rect(5, 0, 45, 5);
rect(45, 5, 5, 45);
fill(0, 0, 0, 150);
rect(5, 45, 40, 5);
fill(0, 0, 0, 100);
rect(10, 10, 15, 15);
rect(26, 26, 15, 15);

var rrdirt = get(0, 0, 50, 50);
fill(69, 69, 69);
rect(0, 0, 40, 10);
fill(138, 138, 138);
rect(0, 0, 10, 10);
rect(15, 0, 10, 10);
rect(30, 0, 10, 10);
fill(0, 0, 0, 50);
rect(0, 0, 40, 5);
var RRblockb = get(0, 0, 40, 10);
noStroke();
background(255, 255, 255, 0);
fill(255, 255, 0, 100);
triangle(40, 1, 0, 40, 0, 0); 
var tri = get(0, 0, 40, 40);

image(rrdirt, 50, 0);
fill(201, 65, 16, 200);
rect(0+rrX, 0, 50, 50);
fill(0, 0, 0, 100);
rect(5+rrX, 45, 40, 5);

var rrdirt2 = get(50, 0, 50, 50);
image(rrdirt2, 100, 0, 25, 25);
image(rrdirt2, 125, 25, 25, 25);
image(rrdirt, 125, 0, 25, 25);
image(rrdirt, 100, 25, 25, 25);

var rrdirt3 = get(100, 0, 50, 50);
noStroke();
        fill(158, 76, 5);
        rect(0, 0, 40, 40);
        fill(173, 100, 3);
        rect(0, 0, 20, 20);
        rect(20, 20, 20, 20);
        fill(255, 255, 255, 150);
        rect(0, -1, 20, 2.5);
        rect(20, 20, 20, 1.5);
        fill(255, 255, 255, 150);
        rect(9, 0, 5, 10);
        rect(24.5, 21, 4.5, 10);
        rect(32, 21, 4.5, 6);
        var shaddirt = get(0, 0, 40, 40);
        noStroke();
        fill(255, 183, 0);
        rect(0, 0, 40, 40);
        fill(245, 237, 10);
        rect(0, 0, 20, 20);
        rect(20, 20, 20, 20);
        fill(255, 255, 255, 150);
        rect(0, -1, 20, 2.5);
        rect(20, 20, 20, 1.5);
        fill(255, 255, 255, 200);
        rect(9, 0, 5, 10);
        rect(24.5, 21, 4.5, 10);
        rect(32, 21, 4.5, 6);
        var ligdirt = get(0, 0, 40, 40);
image(ligdirt, 0, 0);
image(ligdirt, 40, 0);
image(ligdirt, 80, 0);
image(dirt, 40, 40);
image(shaddirt, 80, 40);
image(ligdirt, 0, 40);
image(shaddirt, 40, 80);
image(ligdirt, 0, 80);
image(shaddirt, 80, 80);

fill(255, 247, 0, 140);
rect(0, 0, 40, 80);
rect(40, 0, 120, 40);

//fill(0, 0, 0, 70);
//rect(80, 40, 40, 80);
//rect(0, 80, 80, 40);
var rdirt = get(0, 0, 120, 120);
background(255, 0);
fill(0, 123, 255);
rect(43, 0, 40, 40);
fill(0, 0, 0, 160);
rect(43, 0, 5, 40);
rect(48, 0, 35, 5);
fill(255, 255, 255, 190);
rect(78, 5, 5, 35);
rect(48, 35, 30, 5);
var tdirt = get(43, 0, 40,40);
noStroke();
fill(0, 123, 255);
rect(0, 0, 80, 80);
fill(255, 255, 255, 190);
rect(75, 5, 5, 80);
rect(5, 0, 75, 5);
fill(0, 0, 0, 160);
rect(0, 5, 5, 75);
rect(5, 75, 75, 5);
var tdirt2 = get(0, 0, 80,80);
noStroke();
    background(255, 0);
    fill(238, 255, 105);
    rect(19, 100, 150, 250, 5);
    fill(255, 0, 0);
    rect(16, 98, 157, 20, 5);
    fill(255, 255, 255);
    rect(26, 142, 137, 30, 3);
    rect(26, 182, 137, 30, 3);
    rect(26, 221, 137, 30, 3);
    rect(26, 261, 137, 30, 3);
    rect(26, 301, 137, 30, 3);
    stroke(255, 255, 255);
    point(26, 109);
    point(43, 109);
    point(63, 109);
    point(85, 109);
    point(108, 109);
    point(131, 109);
    point(155, 109);
    var CCB = get(0, 100, 180, 250);
background(255, 255, 255, 0);
pushMatrix();
        
        translate(this.x, this.y);
        scale(this.w / 100, this.h*4 / 400);
        
        noStroke();
        fill(225);
        rect(0, 0, 100, 15);
        rect(15, 30, 70, 340);
        
        rect(0, 385, 100, 15);
        
        fill(200);
        quad(0, 15, 15, 30, 85, 30, 100, 15);
        rect(10, 50, 80, 20);
        
        quad(0, 385, 15, 370, 85, 370, 100, 385);
        rect(10, 330, 80, 20);
        
        rect(25, 80, 10, 230, 5);
        rect(45, 80, 10, 230, 5);
        rect(65, 80, 10, 230, 5);   
        
    popMatrix();
var rrpillar = get(0, 0, 100, 385);
noStroke();
        fill(161, 87, 3);
        rect(0, 0, 40, 40);
        fill(140, 137, 140);
        ellipse(10, 10, 15, 15);
        ellipse(28, 10, 10, 10);
        ellipse(28, 28, 15, 15);
        
var odirt = get(0, 0, 40, 40);
noStroke();
fill(255, 170, 0, 200);
rect(0, 0, 40, 15);
fill(255, 255, 0, 200);
rect(0, 5, 40, 4, 5);

fill(237, 94, 5);
rect(40, 0, 40, 40);
fill(255, 255, 0, 100);
rect(40, 0, 40, 5);
rect(40, 5, 5, 15);
fill(0, 0, 0, 100);
rect(40, 20, 40, 5);
rect(75, 5, 5, 15);
strokeWeight(3);
stroke(255, 255, 0, 150);
line(46, 6, 46, 15);
line(49, 6, 55, 6);
strokeWeight(1);
line(65, 18, 74, 13);
var DDbrick = get(40, 0, 40, 20);
noStroke();
fill(255, 170, 0, 200);
rect(0, 0, 40, 15);
fill(255, 255, 0, 200);
rect(0, 5, 40, 4, 5);

fill(237, 94, 5);
rect(40, 0, 40, 40);
fill(255, 255, 0, 100);
rect(40, 0, 40, 5);
rect(40, 5, 5, 15);
fill(0, 0, 0, 100);
rect(40, 20, 40, 5);
rect(75, 5, 5, 15);
strokeWeight(3);
stroke(255, 255, 0, 150);
line(46, 6, 46, 15);
line(49, 6, 55, 6);
strokeWeight(1);
line(65, 18, 74, 13);
noStroke();
fill(0, 0, 0, 150);
rect(40, 0, 20, 20);
var DDbrick2A = get(40, 0, 20, 20);
noStroke();
fill(255, 170, 0, 200);
rect(0, 0, 40, 15);
fill(255, 255, 0, 200);
rect(0, 5, 40, 4, 5);

fill(237, 94, 5);
rect(40, 0, 40, 40);
fill(255, 255, 0, 100);
rect(40, 0, 40, 5);
rect(40, 5, 5, 15);
fill(0, 0, 0, 100);
rect(40, 20, 40, 5);
rect(75, 5, 5, 15);
strokeWeight(3);
stroke(255, 255, 0, 150);
line(46, 6, 46, 15);
line(49, 6, 55, 6);
strokeWeight(1);
line(65, 18, 74, 13);
var DDbrick2B = get(40, 0, 20, 20);
noStroke();
fill(255, 170, 0, 200);
rect(0, 0, 40, 15);
fill(255, 255, 0, 200);
rect(0, 5, 40, 4, 5);

fill(237, 94, 5);
rect(40, 0, 40, 40);
fill(255, 255, 0, 100);
rect(40, 0, 40, 5);
rect(40, 5, 5, 15);
fill(0, 0, 0, 100);
rect(40, 20, 40, 5);
rect(75, 5, 5, 15);
strokeWeight(3);
stroke(255, 255, 0, 150);
line(46, 6, 46, 15);
line(49, 6, 55, 6);
strokeWeight(1);
line(65, 18, 74, 13);
noStroke();
fill(0, 0, 0, 150);
rect(60, 0, 20, 20);
var DDbrick3A = get(60, 0, 20, 20);
noStroke();
fill(255, 170, 0, 200);
rect(0, 0, 40, 15);
fill(255, 255, 0, 200);
rect(0, 5, 40, 4, 5);

fill(237, 94, 5);
rect(40, 0, 40, 40);
fill(255, 255, 0, 100);
rect(40, 0, 40, 5);
rect(40, 5, 5, 15);
fill(0, 0, 0, 100);
rect(40, 20, 40, 5);
rect(75, 5, 5, 15);
strokeWeight(3);
stroke(255, 255, 0, 150);
line(46, 6, 46, 15);
line(49, 6, 55, 6);
strokeWeight(1);
line(65, 18, 74, 13);
var DDbrick3B = get(60, 0, 20, 20);
noStroke();
fill(0, 0, 0, 50);
rect(0, 26, 40, 15);
rect(0, 36, 40, 5);

fill(255, 170, 0, 200);
rect(0, 0, 40, 15);
fill(255, 255, 0, 200);
rect(0, 5, 40, 4, 5);

fill(237, 94, 5);
rect(40, 0, 40, 40);
fill(255, 255, 0, 100);
rect(40, 0, 40, 5);
rect(40, 5, 5, 15);
fill(0, 0, 0, 100);
rect(40, 20, 40, 5);
rect(75, 5, 5, 15);
strokeWeight(3);
stroke(255, 255, 0, 150);
line(46, 6, 46, 15);
line(49, 6, 55, 6);
strokeWeight(1);
line(65, 18, 74, 13);
var DDblock = get(40, 0, 40, 40);
noStroke();
background(255, 0);
fill(133, 67, 2);
         rect(0, 0, 40, 40);
         fill(222, 109, 3);
         ellipse(20, 20, 40, 40);
         fill(247, 155, 69);
         ellipse(20, 20, 5, 5);
         noFill();
         strokeWeight(2);
         stroke(242, 160, 8);
         ellipse(20, 20, 10, 10);
         ellipse(20, 20, 20, 20);
         ellipse(20, 20, 30, 30);
         noStroke();
var woodc = get(0, 0, 40, 40);
background(255, 0);
    fill(38, 1, 38);
    rect(0, 300, 50, 70);
    fill(random(255), random(255), random(255));
    rect(0, 303, 20, 3);
    rect(25, 303, 20, 3);
    rect(25, 315, 20, 3);
    rect(25, 327, 20, 3);
    rect(0, 309, 30, 3);
    rect(0, 315, 20, 3);
    rect(0, 321, 20, 3);
    rect(0, 327, 20, 3);
    rect(0, 333, 45, 3);
    rect(0, 339, 40, 3);
    rect(0, 345, 30, 3);
    rect(0, 351, 20, 3);
    rect(0, 357, 40, 3);
    var MZB = get(0, 300, 50, 70);

    fill(179, 69, 6);
rect(0, 0, 40, 40);
fill(255, 128, 0);
rect(40, 0, 40, 40);
var ggdirt = get(0, 0, 80, 40);
noStroke();
for (var x = 0; x < 5; x += 1) {
    for (var y = 0; y < 5; y += 1) {
        if (x %2 === y %2) {
            fill(255, 128, 0);
        } else {
            fill(138, 56, 5);
        }
        rect(x*50, y*50, 50, 50);
    }
}
fill(0, 50);
rect(0, 0, 250, 250);
var GGbblock = get(0, 0, 250, 250);
image(ggdirt, 0, 0, 40, 40);
fill(0, 255, 0);
rect(0, 0, 5, 20);
rect(10, 0, 5, 20);
rect(20, 0, 5, 20);
rect(30, 0, 5, 20);
fill(3, 161, 3);
rect(5, 0, 5, 20);
rect(15, 0, 5, 20);
rect(25, 0, 5, 20);
rect(35, 0, 5, 20);
fill(41, 41, 41, 150);
rect(0, 20, 40, 80);
var ggblock = get(0, 0, 40, 80);
fill(179, 69, 9);
rect(0, 300, 90, 90);
rect(90, 390, 90, 90);
fill(255, 128, 0);
rect(90, 300, 90, 90);
rect(0, 390, 90, 90);
var ggchunk = get(0, 300, 180, 180);
background(255, 255, 255, 0);
pushMatrix();
rotate(-39);
image(ggchunk, 0, 300, 120, 120);

popMatrix();
var ggchunk2 = get(180, 160, 180, 180);
fill(0, 255, 0, 150);
rect(0, 0, 5, 40);
rect(10, -10, 5, 45);
rect(20, -5, 5, 40);
rect(30, 0, 5, 40);
var gggrass = get(0, 0, 40, 40);
background(255, 255, 255, 0);
var ggpx = 300;
var ggpy = 300;
fill(255, 157, 0);
        ellipse(ggpx+20, ggpy, 40, 40);
        ellipse(ggpx+20, ggpy+40, 40, 40);
        ellipse(ggpx+20, ggpy-40, 40, 40);
        ellipse(ggpx+20, ggpy-80, 40, 40);
        ellipse(ggpx+20, ggpy-120, 40, 40);
        fill(2, 150, 29);
        rect(ggpx, ggpy-160, 40, 40);
        rect(ggpx+40, ggpy-160, 40, 40);
        rect(ggpx-40, ggpy-160, 40, 40);
        rect(ggpx-50, ggpy-140, 40, 40);
        rect(ggpx-60, ggpy-130, 40, 40);
        rect(ggpx+60, ggpy-130, 40, 40);
        rect(ggpx+70, ggpy-170, 30, 30);
        rect(ggpx+80, ggpy-180, 30, 30);
        rect(ggpx-70, ggpy-180, 30, 30);
        rect(ggpx-80, ggpy-180, 30, 30);
        rect(ggpx, ggpy-180, 40, 40);
        rect(ggpx-10, ggpy-195, 30, 30);
        rect(ggpx+25, ggpy-195, 30, 30);
        rect(ggpx+35, ggpy-205, 30, 30);
        rect(ggpx-35, ggpy-205, 30, 30);
        rect(ggpx-45, ggpy-215, 30, 30);
        rect(ggpx+45, ggpy-215, 30, 30);
        fill(240, 98, 9);
        rect(ggpx+40, ggpy-120, 20+sin(frameCount*3), 20+sin(frameCount*3));
        rect(ggpx-20, ggpy-120, 15+sin(frameCount*3), 15+sin(frameCount*3));
        //fill(255, 136, 0);
        //rect(ggpx+10, ggpy, 4, 30);
        //rect(ggpx+20, ggpy-40, 8, 30);
        //rect(ggpx+10, ggpy-80, 11, 30);
        //rect(ggpx+20, ggpy-120, 7, 30);
var ggpalmtree = get(200, 80, 210, 300);
background(255, 255, 255, 0);
var sunf = 40;
var sunfy = 70;

fill(16, 122, 12);
    
    rect(sunf, sunfy+20, 10, 40);
    
    // petals
    strokeWeight(1);
    stroke(0, 0, 0);
    fill(255, 0, 196);
    ellipse(sunf-10, sunfy, 20, 18);
    ellipse(sunf+5, sunfy-15, 20, 18);
    ellipse(sunf+5, sunfy+15, 20, 18);
    ellipse(sunf+20, sunfy, 20, 18);
    fill(16, 227, 4);
    ellipse(sunf+5, sunfy, 20, 20);
var sunfl = get(15, 40, 55, 90);



    background(255, 255, 255, 0);
strokeWeight(8);
stroke(92, 92, 92);
fill(255, 255, 255, 100);
rect(5, 5, 40, 40);
strokeWeight(4);
stroke(255, 255, 255, 200);
line(0, 25, 47, 25);
line(25, 0, 25, 47);
var windows = get(0, 0, 50, 50);
background(255, 255, 255, 0);
noStroke();
fill(4, 255, 0);
rect(0, 0, 20, 30);
rect(20, 0, 20, 30);
rect(40, 10, 20, 20);
rect(60, 5, 20, 20);
rect(80, 0, 20, 30);
rect(100, 10, 20, 20);
rect(120, 5, 20, 20);
rect(140, 0, 20, 30);
rect(160, 10, 20, 20);
rect(180, 0, 20, 30);

for(var i = 0; i < 12; i++){
    
    fill(3, 143, 5);
    rect(0 + i * 6 * 3, 3, 3, 27);
    rect(10 + i * 6 * 3, 7, 3, 23);
    
    
}
var grassimg = get(0, 0, 180, 20);
noStroke();
var r = 300;
var u = 300;
var unko = -32.5;
var unko2 = -10;

background(255, 255, 255, 0);
fill(161, 90, 20);
rect(300, 300, 110, 111, 15);
fill(255, 255, 41, 50);
rect(302-unko, 300, 40, 110, 20);
rect(302-unko, 300, 40, 110, 20);
rect(302-unko, 300, 40, 110, 20);
rect(302-unko, 300, 40, 110, 20);
rect(302-unko, 300, 40, 110, 20);
fill(250, 241, 158, 30);
rect(302-unko2, 300, 85, 110, 20);
rect(302-unko2, 300, 85, 110, 20);
rect(302-unko2, 300, 85, 110, 20);
strokeCap(PROJECT);
stroke(230, 102, 5);
fill(4, 199, 4);
rect(309, 330, 10, 35);
rect(389, 330, 10, 35);
strokeWeight(3);
stroke(4, 199, 4);
line(309, 375, 340, 355);
line(399, 375, 363, 355);
noStroke();
var pole = get(300, 300, 110, 110);
background(255, 255, 255, 0);
fill(207, 207, 207);
rect(210, 305, 285, 20);
rect(280, 305, 150, 40);
rect(370, 305, 20, 40);
rect(240, 350, 225, 20);
fill(0, 0, 0, 100);
rect(210, 320, 285, 5);
rect(280, 340, 150, 5);
rect(240, 365, 225, 5);
fill(181, 102, 23);
rect(300, 300, 110, 110, 15);
fill(255, 255, 41, 50);
rect(302-unko, 300, 40, 110, 20);
rect(302-unko, 300, 40, 110, 20);
rect(302-unko, 300, 40, 110, 20);
rect(302-unko, 300, 40, 110, 20);
rect(302-unko, 300, 40, 110, 20);
fill(250, 241, 158, 40);
rect(302-unko2, 300, 85, 110, 20);
rect(302-unko2, 300, 85, 110, 20);
rect(302-unko2, 300, 85, 110, 20);
fill(4, 227, 4);
ellipse(290, 315, 20, 20);
ellipse(420.5, 315, 20, 20);
fill(255, 255, 255, 100);
arc(290, 315, 20, 20, 180, 360);
arc(420.5, 315, 20, 20, 180, 360);
strokeCap(PROJECT);
stroke(230, 102, 5);
fill(4, 199, 4);
rect(310.5, 330, 10, 35);
rect(389, 330, 10, 35);
strokeWeight(3);
stroke(4, 199, 4);
line(309, 375, 340, 355);
line(399, 375, 363, 355);
noStroke();
var pole1 = get(210, 305, 290, 110);
background(255, 255, 255, 0);
image(pole1, 70, 300);
strokeWeight(5.5);
stroke(0, 255, 9);
fill(2, 115, 4);
ellipse(185, 330, 30, 50);
ellipse(245, 330, 30, 50);
ellipse(215, 390, 50, 30);
noFill();
strokeWeight(3);
stroke(255, 255, 255, 230);
arc(245, 326, 30, 40, 230, 310);
arc(185, 326, 30, 40, 230, 310);
arc(215, 390, 40, 30, 230, 310);
strokeWeight(5);
stroke(0, 255, 9);
fill(2, 115, 4);
var pole2 = get(70, 300, 270, 110);
image(pole, 160, 410);
ellipse(185, 450, 40, 25);
ellipse(245, 450, 40, 25);
ellipse(215, 490, 30, 30);
noFill();
strokeWeight(3);
stroke(255, 255, 255, 230);
arc(185, 456.5, 40, 40, 230, 310);
arc(245, 456.5, 40, 40, 230, 310);
arc(215, 490, 30, 30, 230, 310);
strokeWeight(5);
fill(2, 115, 4);
stroke(0, 255, 9);
var pole3 = get(160, 410, 110, 110);
image(pole, 360, 410);
pushMatrix();
rotate(18);
ellipse(508, 302, 40, 25);
rotate(-27);
ellipse(367, 510, 40, 25);
popMatrix();
arc(415, 500, 80, 40, 140, 393);
noFill();
strokeWeight(4);
stroke(255, 255, 255, 200);
arc(390, 433, 10, 3, 293, 393);
arc(440, 435, 10, 3, 293, 393);
arc(415, 500, 80, 40, 250, 295);
var pole4 = get(360, 410, 110, 110);
background(255, 255, 255, 0);
image(pole1, 70, 300);
strokeWeight(5);
stroke(9, 0, 255);
fill(0, 0, 0);
ellipse(185, 330, 30, 50);
ellipse(245, 330, 30, 50);
stroke(255, 0, 0);
ellipse(215, 390, 50, 30);
noFill();
strokeWeight(3);
stroke(255, 255, 255, 150);
arc(213, 395, 50, 40, 240, 310);
arc(185, 325, 30, 40, 230, 310);
arc(245, 325, 30, 40, 230, 310);
fill(0);
var poleA = get(70, 300, 270, 110);
background(255, 255, 255, 0);
image(pole, 160, 410);
strokeWeight(5);
stroke(255, 0, 0);
ellipse(185, 450, 40, 25);
ellipse(245, 450, 40, 25);
ellipse(215, 490, 30, 30);
noFill();
stroke(255, 255, 255, 150);
arc(214, 490, 30, 30, 240, 310);
strokeWeight(3);
arc(184, 452, 30, 30, 240, 310);
arc(244, 452, 30, 30, 240, 310);
strokeWeight(5);
fill(0);
var pole2A = get(160, 410, 110, 110);
image(pole, 360, 410);
pushMatrix();
stroke(9, 0, 255);
rotate(18);
ellipse(508, 302, 40, 25);
rotate(-27);
ellipse(367, 510, 40, 25);
popMatrix();
stroke(255, 0, 0);
arc(415, 500, 80, 40, 140, 393);
noFill();
strokeWeight(4);
stroke(255, 255, 255, 150);
arc(390, 433, 10, 3, 293, 393);
arc(440, 435, 10, 3, 293, 393);
arc(415, 500, 80, 40, 250, 285);
var pole3A = get(360, 410, 110, 110);
noStroke();
background(255, 255, 255);
fill(0, 255, 0);
rect(0, 560, 40, 40);
fill(0, 40);
rect(0, 585, 40, 20);
strokeWeight(2);
stroke(3, 145, 10);
noFill();
arc(10, 570, 11, 10, 160, 370);
arc(30, 580, 10, 10, 160, 370);
arc(10, 595, 10, 10, 160, 370);

var acidd = get(0, 560, 40, 40);
noStroke();
fill(255, 0, 0);
rect(0, 560, 40, 40);
fill(0, 40);
rect(0, 585, 40, 20);
strokeWeight(2);
stroke(143, 4, 14);
noFill();
arc(10, 570, 11, 10, 160, 370);
arc(30, 580, 10, 10, 160, 370);
arc(10, 595, 10, 10, 160, 370);

var acidd2 = get(0, 560, 40, 40);
noStroke();

        //}

    //{
background(255, 255, 255, 0);
    background(255, 255, 255, 0);
background(255, 255, 255, 0);
noStroke();
fill(255, 145, 0);
ellipse(30, 30, 50, 50);
fill(204, 93, 8);
ellipse(30, 30, 35, 35);
fill(46, 247, 15, 200);
ellipse(30, 30, 20, 20);
noFill();
strokeWeight(7);
stroke(255, 221, 0, 150);
arc(30, 30, 40, 40, 183, 356);
noStroke();
fill(255, 255, 255, 70);
arc(30, 30, 20, 20, 183, 357);
var brid = get(0, 0, 55, 55);
background(255, 255, 255, 0);
strokeWeight(3);
stroke(133, 133, 133);
line(8, 8, 28, 15);
line(28, 15, 8, 25);
line(8, 25, 28, 30);
line(28, 30, 8, 35);
line(8, 35, 28, 40);
noStroke();
fill(255, 0, 204);
rect(0, 0, 40, 10, 10);
var spring = get(0, 0, 40, 43);
background(255, 255, 255, 0);
fill(255, 179, 0);
rect(60, 472, 5, 10);
rect(60, 476, 20, 5);
rect(30, 472, 35, 8);
ellipse(75, 469, 10, 10);
ellipse(25, 476, 10, 10);
noFill();
stroke(255, 179, 0);
rect(60, 482, 15, 70);
rect(60, 472, 5, 10);
rect(60, 476, 20, 5);
rect(30, 472, 35, 8);
ellipse(75, 469, 10, 10);
ellipse(25, 476, 10, 10);
strokeWeight(1.5);
line(23, 476, 23, 495);
noFill();
stroke(255, 179, 0);
rect(120, 482, 15, 70);
fill(255, 179, 0);
rect(120, 472, 5, 10);
rect(120, 476, 20, 5);
rect(100, 502, 35, 8);
rect(120, 476, 35, 7);
ellipse(104, 516, 10, 10);
strokeWeight(1.5);
line(103, 516, 103, 530);
var scranez = get(10, 460, 148, 100);
noStroke();
background(255, 0);
fill(89, 89, 89);
rect(0, 50, 50, 50);
fill(117, 117, 117);
rect(0, 20, 50, 30);
rect(0, 100, 50, 30);
fill(38, 163, 84);
rect(10, 60, 30, 30);
fill(255);
rect(13, 62, 7, 7);
rect(29, 62, 7, 7);
rect(13, 75, 27, 7);
fill(0, 255, 0);
rect(0, 20, 50, 3);
fill(255, 255, 255, 50);
rect(0, 25, 50, 3);
rect(0, 30, 50, 3);
rect(0, 35, 50, 3);
rect(0, 40, 50, 3);
rect(0, 45, 50, 3);
rect(0, 100, 50, 3);
rect(0, 105, 50, 3);
rect(0, 110, 50, 3);
rect(0, 115, 50, 3);
rect(0, 120, 50, 3);
rect(0, 125, 50, 3);
fill(117, 117, 117);
arc(25, 20, 50, 30, 180, 360);
fill(255, 255, 255, 60);
rect(15, 20, 20, 110);
rect(10, 20, 30, 110);
rect(5, 20, 25, 110);
rect(2.5, 20, 45, 110);
noFill();
stroke(255, 255, 255, 150);
arc(25, 15, 30, 10, 180, 360);
var bbuilding = get(0, 0, 50, 130);
    background(255);
    noStroke();
fill(145, 70, 0);
rect(0, 0, 40, 40);
 fill(189, 92, 2);
         ellipse(20, 20, 40, 40);
         fill(204, 95, 0);
         ellipse(20, 20, 5, 5);
         noFill();
         strokeWeight(2.5);
         stroke(224, 143, 4);
         ellipse(20, 20, 10, 10);
         ellipse(20, 20, 20, 20);
         ellipse(20, 20, 30, 30);
         noStroke();
         fill(255, 255, 168, 50);
         arc(18, 13, 25, 20, 0, 383);
var miniwood = get(0, 0, 40, 40);
fill(143, 68, 2);
         rect(0, 0, 40, 40);
         fill(184, 94, 4);
         rect(5, 10, 5, 25);
         fill(227, 112, 4);
         rect(15, 2, 5, 15);
         fill(105, 50, 2);
         rect(25, 0, 5, 30);
var wooddb = get(0, 0, 40, 40);
noStroke();
background(255, 0);
fill(31, 196, 6);
rect(0, 205, 60, 50);
rect(60, 200, 40, 40);
rect(600, 205, 60, 50);
rect(660, 200, 40, 40);
rect(700, 205, 60, 50);
rect(760, 200, 40, 40);
fill(4, 227, 30);
rect(100, 205, 60, 50);
rect(160, 210, 40, 50);
rect(400, 205, 60, 50);
rect(460, 210, 90, 50);
rect(200, 205, 60, 50);
rect(260, 210, 40, 50);
fill(0, 255, 68);
rect(300, 200, 60, 50);
rect(360, 200, 40, 40);
rect(500, 200, 60, 50);
rect(560, 203, 50, 40);
var WWRRbga2 = get(0, 205, 800, 70);
noStroke();
background(255, 0);
fill(31, 196, 6);
rect(0, 205, 60, 50);
rect(60, 200, 40, 40);
rect(600, 205, 60, 50);
rect(660, 200, 40, 40);
rect(700, 205, 60, 50);
rect(760, 200, 40, 40);
fill(4, 227, 30);
rect(100, 205, 60, 50);
rect(160, 210, 40, 50);
rect(400, 205, 60, 50);
rect(460, 210, 90, 50);
rect(200, 205, 60, 50);
rect(260, 210, 40, 50);
fill(0, 255, 68);
rect(300, 200, 60, 50);
rect(360, 200, 40, 40);
rect(500, 200, 60, 50);
rect(560, 203, 50, 40);
fill(0, 0, 0, 100);
rect(0, 205, 60, 50);
rect(60, 200, 40, 40);
rect(600, 205, 60, 50);
rect(660, 200, 40, 40);
rect(700, 205, 60, 50);
rect(760, 200, 40, 40);
rect(100, 205, 60, 50);
rect(160, 210, 40, 50);
rect(400, 205, 60, 50);
rect(460, 210, 90, 50);
rect(200, 205, 60, 50);
rect(260, 210, 40, 50);
rect(300, 200, 60, 50);
rect(360, 200, 40, 40);
rect(500, 200, 60, 50);
rect(560, 203, 50, 40);
var WWRRbga2A = get(0, 205, 800, 70);

fill(82, 5, 76);
rect(0, 0, 40, 120);
fill(0, 0, 0, 50);
/*
rect(0, 0, 10, 120);
rect(0, 0, 5, 120);
rect(30, 0, 10, 120);
rect(35, 0, 5, 120);
*/

rect(15, 0, 10, 120);
rect(10, 0, 20, 120);
rect(5, 0, 30, 120);

var WWbga1 = get(0, 0, 40, 120);
background(255, 0);
for(var i = 0; i < 400; i++){
    fill(3, 130, 3, 150);
    rect(random(600), random(600), 20, 20);
}


var leaves1 = get(0, 0, 600, 600);
background(0,0,0,0);
fill(171, 171, 169);
noStroke();
pushMatrix();
translate(300,300);
for(var i = 0;i < 360;i += 30){
    rotate(30);
    rect(0,-150,100,300);
    quad(-80,0,80,0,50,-300,-50,-300);
}
popMatrix();
fill(135, 135, 135);
ellipse(300,300,450,450);
fill(71, 156, 230);
ellipse(300,300,300,300);
fill(82, 82, 81);
ellipse(300,300,200,200);
var cog = get(0,0,600,600);
fill(179, 149, 184);
rect(0, 560, 40, 40);
fill(255, 255, 255, 150);
rect(0, 560, 2, 40);
rect(2, 560, 40, 2);
fill(0, 0, 0, 100);
rect(37, 562, 2, 40);
rect(2, 598, 40, 2);
fill(99, 99, 99);
ellipse(10, 570, 15, 15);
ellipse(30, 570, 15, 15);
ellipse(10, 590, 15, 15);
ellipse(30, 590, 15, 15);
var MMbl2 = get(0, 560, 40, 40);
fill(0, 77, 255);
rect(163, 0, 40, 40);
fill(0, 153, 255);
rect(163, 0, 40, 5);
rect(163, 15, 40, 25);
fill(255, 255,255, 150);
rect(163, 0, 12, 40);
fill(0, 208, 255, 100);
rect(175, 0, 14, 40);
fill(0, 0, 232,100);
rect(189, 0,13, 40);
fill(133, 133, 133);
rect(165, 25, 7, 7);
rect(178, 25, 8, 8);
rect(192, 25, 7, 7);
var MMst = get(160, 0, 40, 40);
var rockiness = 7;
var nScale = 0.020;


var pNoiseSeed = random(0,100000);
var calcNoise = function(x,y,noiseScale,seed){
    return noise((x+seed+0.01)*noiseScale,(y+seed+0.01)*noiseScale);
};
var drawDensity = 10;
var x = 0;
var y = 0;
while(true){
    for(var dy = 0; dy < 400; dy += drawDensity){
        for(var dx = 0; dx < 400; dx += drawDensity){
            var cx = x+dx;
            var cy = y+dy;
            var n = map(calcNoise(cx,cy,nScale,pNoiseSeed),0,1,0,255);
            
            var nAbove = map(calcNoise(cx,cy-rockiness,nScale,pNoiseSeed),0,1,0,255);
            var amount7 = map(constrain(n-nAbove,-50,50),-50,50,0,255);
            stroke(amount7,amount7,amount7);
            point(cx,cy);
        }
    }
    x += 1;
    if(x >= drawDensity){
        x = 0;
        y += 1;
        if(y >= drawDensity){
            break;
        }
    }
}
var TTZtxtre = get(0, 0, 400, 400);
rectMode(CORNER);
background(1, 48, 99);
noStroke();
fill(2, 47, 82);

//Bottom Bricks
rect(0, 309, 187, 80);
rect(202, 309, 185, 80);


//Bottom-Middle Bricks
rect(0, 210, 70, 80);
rect(328, 210, 72, 80);
rect(83, 210, 231, 80);

//Top-Middle Bricks
rect(0, 109, 187, 80);
rect(202, 109, 185, 80);

//Top Bricks
rect(330, 13, 70, 80);
rect(0, 13, 70, 80);
rect(83, 13, 231, 80);

//Horizontal Mortar
fill(173, 173, 173);
rect(0, 91, 400, 20);
rect(0, 189, 400, 21);
rect(0, 289, 400, 21);

//Vertical Mortar
fill(94, 94, 94);
rect(314, 13, 16, 98);
rect(186, 109, 16, 102);
rect(387, 109, 16, 102);
rect(69, 210, 14, 99);
rect(314, 210, 14, 99);
rect(70, 13, 14, 98);
rect(186, 308, 16, 82);
rect(385, 308, 16, 82);
var TTZbrick2 = get(0, 0, 400, 400);
image(wooddb, 0, 80, 20, 20);
image(wooddb, 0, 100, 20, 20);
image(wooddb, 0, 120, 20, 20);
image(wooddb, 0, 140, 20, 20);
image(wooddb, 0, 160, 20, 20);
image(wooddb, 0, 180, 20, 20);
image(wooddb, 0, 200, 20, 20);
image(wooddb, 0, 220, 20, 20);
image(wooddb, 0, 240, 20, 20);
image(wooddb, 0, 260, 20, 20);
image(wooddb, 0, 280, 20, 20);
image(wooddb, 0, 300, 20, 20);
image(wooddb, 0, 320, 20, 20);
image(wooddb, 0, 340, 20, 20);
image(wooddb, 0, 360, 20, 20);
image(wooddb, 0, 380, 20, 20);
image(wooddb, 0, 400, 20, 20);
fill(148, 63, 3, 200);
rect(0, 80, 20, 340);
fill(176, 75, 7, 200);
rect(0, 80, 5, 340);
fill(94, 39, 3, 200);
rect(15, 80, 5, 340);
var TTZwood1 = get(0, 80, 20, 340);

noStroke();
background(5, 17, 250);
        strokeWeight(3);
        for(var x = -20; x < 820;x += 40){
            for(var y = -20;y < 620;y += 40){
                fill(((x + y)/40 % 2 === 0) ? color(0, 0, 255) : color(9, 2, 102));
                stroke(((x + y)/40 % 2 === 0) ? color(5, 209, 245) : color(0, 123, 255));
                pushMatrix();
                translate(x, y);
                rotate(60);
                rect(-20, -20, 33, 33, 0);
                popMatrix();
            }
        }
var UNLbg = get();
noStroke();
background(79, 79, 79);
strokeWeight(1.3);
fill(79, 79, 79);
stroke(71, 71, 71);
rect(0,0,15,10);
rect(15,0,15,10);
rect(7,10,15,10);
rect(0,20,15,10);
rect(15,20,15,10);
var HHZbrick1 = get(0, 0, 30, 30);
noStroke();
        for (var i = 0; i < 40; i++) {
            fill(64 + i * 2);
            rect(i, 0, 1, 40);
        }
        stroke(96);
        strokeWeight(2);
        noFill();
        rect(0, 0, 40, 40);
var HHZblock3 = get(0, 0, 40, 40);
noStroke();
fill(61, 61, 61);
rect(40, 0, 40, 40);
fill(99, 98, 98);
ellipse(49, 30, 10, 10);
ellipse(66, 25, 20, 20);
ellipse(50, 10, 15, 15);
var HHZdb = get(40, 0, 40, 40);
background(71, 71, 71);
noStroke();
fill(71, 71, 71);

//Bottom Bricks
rect(0, 309, 187, 80);
rect(202, 309, 185, 80);


//Bottom-Middle Bricks
rect(0, 210, 70, 80);
rect(328, 210, 72, 80);
rect(83, 210, 231, 80);

//Top-Middle Bricks
rect(0, 109, 187, 80);
rect(202, 109, 185, 80);

//Top Bricks
rect(330, 13, 70, 80);
rect(0, 13, 70, 80);
rect(83, 13, 231, 80);

//Horizontal Mortar
fill(173, 173, 173);
rect(0, 91, 400, 20);
rect(0, 189, 400, 21);
rect(0, 289, 400, 21);

//Vertical Mortar
fill(163, 163, 163);
rect(314, 13, 16, 98);
rect(186, 109, 16, 102);
rect(387, 109, 16, 102);
rect(69, 210, 14, 99);
rect(314, 210, 14, 99);
rect(70, 13, 14, 98);
rect(186, 308, 16, 82);
rect(385, 308, 16, 82);
var HHZbrick2 = get(0, 0, 400, 400);
//}

var images = {
    
    
        Image4:function(){
        noStroke();
        background(255, 255, 255, 0);


emerald(0, 500, 2.6, -40);
 return get(0, 470, 139, 139);
        
        },
        Image1: function(){
noStroke();
fill(255, 132, 0);
    rect(0, 0, 40, 40);
    fill(247, 151, 8);
        rect(0, 0, 20, 20);
        rect(20, 20, 20, 20);
    fill(4, 191, 4);
    rect(0, 0, 40, 15);
    strokeWeight(3);
    stroke(5, 237, 5);
    line(0, 1, 40, 1);
    noStroke();
    fill(3, 166, 3);
    rect(0, 10, 15, 15);
    rect(25, 10, 15, 25);
    rect(10, 10, 25, 35);
    rect(5, 15, 15, 55);
    return get(0, 0, 40, 40);
        },
        Image2: function(){
            noStroke();
            background(255, 255, 255, 0);
fill(191, 89, 6);
        rect(r+4, u, 30, 40);
        rect(r+5, u-40, 25, 40);
        rect(r, u-80, 30, 40);
        rect(r+5, u-120, 24, 40);
        rect(r+5, u+40, 25, 40);
        rect(r+3, u+80, 26, 40);
        rect(r-2, u+120, 38, 40);
        fill(3, 176, 21);
        rect(r+40, u-160, 40, 40);
        rect(r-40, u-160, 40, 40);
        rect(r-50, u-140, 40, 40);
        rect(r-60, u-130, 40, 40);
        rect(r+60, u-130, 40, 40);
        rect(r+70, u-170, 30, 30);
        rect(r-75, u-110, 35, 35);
        rect(r+75, u-110, 35, 35);
        rect(r, u-160, 40, 40);
        
        rect(r, u-180, 40, 40);
        fill(4, 227, 30);
        rect(r+80, u-180, 30, 30);
        rect(r-70, u-180, 30, 30);
        rect(r-65, u-230, 30, 30);
        rect(r+65, u-230, 30, 30);
        rect(r-80, u-180, 30, 30);
        rect(r, u-180, 40, 40);
        rect(r-40, u-160, 140, 20);
        rect(r+90, u-180, 40, 40);
        fill(4, 214, 29);
        
        rect(r-10, u-195, 30, 30);
        rect(r+25, u-195, 30, 30);
        rect(r+35, u-205, 30, 30);
        rect(r-35, u-205, 30, 30);
        rect(r-45, u-215, 30, 30);
        rect(r+45, u-215, 30, 30);
        fill(247, 101, 3);
        rect(r+30, u-120, 30+sin(frameCount*3), 30+sin(frameCount*3));
        rect(r-20, u-120, 25+sin(frameCount*3), 25+sin(frameCount*3));
        fill(255, 173, 122, 100);
        rect(r+38, u-112, 20, 20, 2);
        rect(r-12, u-112, 15, 15, 2);
        
        fill(255, 136, 0, 100);
        rect(r+12, u, 19, 35);
        rect(r+12, u, 19, 35);
        rect(r+6, u, 19, 35);
        rect(r+6, u, 19, 35);
        rect(r+8, u-40, 20, 37);
        rect(r+8, u-40, 20, 37);
        rect(r+8, u-40, 20, 37);
        rect(r+3, u-80, 14, 37);
        rect(r+3, u-80, 14, 37);
        rect(r+13, u-80, 14, 37);
        rect(r+13, u-80, 14, 37);
        rect(r+7, u-120, 19, 37);
        rect(r+10, u-120, 15, 37);
        rect(r+10, u-120, 15, 37);
        rect(r+2, u+120, 30, 40);
        rect(r+2, u+120, 30, 40);
        rect(r+2, u+120, 30, 40);
        rect(r+5, u+80, 22, 37);
        rect(r+5, u+80, 22, 37);
        rect(r+5, u+80, 22, 37);
        rect(r+8, u+40, 19, 37);
        rect(r+8, u+40, 19, 37);
        rect(r+8, u+40, 19, 37);
        fill(255, 153, 0);
        rect(r-6, u-4, 45, 5, 5);
        rect(r-6, u-44, 45, 5, 5);
        rect(r-6, u-85, 45, 5, 5);
        rect(r-6, u+35, 45, 5, 5);
        rect(r-6, u+75, 45, 5, 5);
        rect(r-6, u+115, 45, 5, 5);
        fill(255, 255, 0, 50);
        rect(r+10, u-120, 20, 280);
        fill(250, 239, 82);
        rect(r+16, u, 3, 35);
        rect(r+16, u-40, 3, 37);
        rect(r+16, u-80, 3, 37);
        rect(r+16, u-120, 3, 37);
        rect(r+16, u+120, 3, 37);
        rect(r+16, u+80, 3, 37);
        rect(r+16, u+40, 3, 37);
         
            
            return get(220, 70, 200, 410);
        },
        ImageP: function(){
            noStroke();
            background(255, 255, 255, 0);
fill(191, 89, 6);
        rect(r+4, u, 30, 40);
        rect(r+5, u-40, 25, 40);
        rect(r, u-80, 30, 40);
        rect(r+5, u-120, 24, 40);
        rect(r+5, u+40, 25, 40);
        rect(r+3, u+80, 26, 40);
        rect(r-2, u+120, 38, 40);
        fill(3, 176, 21);
        rect(r+40, u-160, 40, 40);
        rect(r-40, u-160, 40, 40);
        rect(r-50, u-140, 40, 40);
        rect(r-60, u-130, 40, 40);
        rect(r+60, u-130, 40, 40);
        rect(r+70, u-170, 30, 30);
        rect(r-75, u-110, 35, 35);
        rect(r+75, u-110, 35, 35);
        rect(r, u-160, 40, 40);
        
        rect(r, u-180, 40, 40);
        fill(4, 227, 30);
        rect(r+80, u-180, 30, 30);
        rect(r-70, u-180, 30, 30);
        rect(r-65, u-230, 30, 30);
        rect(r+65, u-230, 30, 30);
        rect(r-80, u-180, 30, 30);
        rect(r, u-180, 40, 40);
        rect(r-40, u-160, 140, 20);
        rect(r+90, u-180, 40, 40);
        fill(4, 214, 29);
        
        rect(r-10, u-195, 30, 30);
        rect(r+25, u-195, 30, 30);
        rect(r+35, u-205, 30, 30);
        rect(r-35, u-205, 30, 30);
        rect(r-45, u-215, 30, 30);
        rect(r+45, u-215, 30, 30);
        fill(247, 101, 3);
        rect(r+30, u-120, 30+sin(frameCount*3), 30+sin(frameCount*3));
        rect(r-20, u-120, 25+sin(frameCount*3), 25+sin(frameCount*3));
        fill(255, 173, 122, 100);
        rect(r+38, u-112, 20, 20, 2);
        rect(r-12, u-112, 15, 15, 2);
        
        fill(255, 136, 0, 100);
        rect(r+12, u, 19, 35);
        rect(r+12, u, 19, 35);
        rect(r+6, u, 19, 35);
        rect(r+6, u, 19, 35);
        rect(r+8, u-40, 20, 37);
        rect(r+8, u-40, 20, 37);
        rect(r+8, u-40, 20, 37);
        rect(r+3, u-80, 14, 37);
        rect(r+3, u-80, 14, 37);
        rect(r+13, u-80, 14, 37);
        rect(r+13, u-80, 14, 37);
        rect(r+7, u-120, 19, 37);
        rect(r+10, u-120, 15, 37);
        rect(r+10, u-120, 15, 37);
        rect(r+2, u+120, 30, 40);
        rect(r+2, u+120, 30, 40);
        rect(r+2, u+120, 30, 40);
        rect(r+5, u+80, 22, 37);
        rect(r+5, u+80, 22, 37);
        rect(r+5, u+80, 22, 37);
        rect(r+8, u+40, 19, 37);
        rect(r+8, u+40, 19, 37);
        rect(r+8, u+40, 19, 37);
        fill(255, 153, 0);
        rect(r-6, u-4, 45, 5, 5);
        rect(r-6, u-44, 45, 5, 5);
        rect(r-6, u-85, 45, 5, 5);
        rect(r-6, u+35, 45, 5, 5);
        rect(r-6, u+75, 45, 5, 5);
        rect(r-6, u+115, 45, 5, 5);
        fill(255, 255, 0, 50);
        rect(r+10, u-120, 20, 280);
        fill(250, 239, 82);
        rect(r+16, u, 3, 35);
        rect(r+16, u-40, 3, 37);
        rect(r+16, u-80, 3, 37);
        rect(r+16, u-120, 3, 37);
        rect(r+16, u+120, 3, 37);
        rect(r+16, u+80, 3, 37);
        rect(r+16, u+40, 3, 37);
         
        return get(220, 70, 200, 300);
        },
        Image3:function(){
            background(255, 255, 255, 0);
fill(0, 107, 0);
ellipse(10, 50, 20, 20);
ellipse(30, 40, 45, 45);
ellipse(50, 50, 20, 20);
 return get(0, 0, 60, 60);

        },
        Image4p1: function(){
            noStroke();
            background(255, 255, 255, 0);


emerald(30, 400, 2.6, 20);

return get(0, 400, 110, 140);
        },
        Image4p2: function(){
            noStroke();
             background(255, 255, 255, 0);


emerald(30, 400, 2.6, 30);

return get(0, 400, 110, 140);
        },
        Image5:function(){
        noStroke();
        fill(158, 76, 5);
        rect(0, 0, 40, 40);
        fill(173, 100, 3);
        rect(0, 0, 20, 20);
        rect(20, 20, 20, 20);
        fill(255, 255, 255, 150);
        rect(0, -1, 20, 2.5);
        rect(20, 20, 20, 1.5);
        fill(255, 255, 255, 150);
        rect(9, 0, 5, 10);
        rect(24.5, 21, 4.5, 10);
        rect(32, 21, 4.5, 6);
 return get(0, 0, 40, 40);
        },
        Image6:function(){
        noStroke();
        fill(255, 183, 0);
        rect(0, 0, 40, 40);
        fill(245, 237, 10);
        rect(0, 0, 20, 20);
        rect(20, 20, 20, 20);
        fill(255, 255, 255, 150);
        rect(0, -1, 20, 2.5);
        rect(20, 20, 20, 1.5);
        fill(255, 255, 255, 200);
        rect(9, 0, 5, 10);
        rect(24.5, 21, 4.5, 10);
        rect(32, 21, 4.5, 6);
 return get(0, 0, 40, 40);
        },
        Image7:function(){
        noStroke();
        fill(255, 132, 0);
        rect(0, 0, 40, 40);
        fill(247, 151, 8);
        rect(0, 0, 20, 20);
        rect(20, 20, 20, 20);
        fill(255, 255, 255, 150);
        rect(0, -1, 20, 2.5);
        rect(20, 20, 20, 1.5);
        fill(255, 255, 255, 200);
        rect(9, 0, 5, 10);
        rect(24.5, 21, 4.5, 10);
        rect(32, 21, 4.5, 6);
        
 return get(0, 0, 40, 40);
        },
        Image8:function(){
            noStroke();
        image(ligdirt, 0, 0);
image(ligdirt, 40, 0);
image(ligdirt, 80, 0);
image(dirt, 40, 40);
image(shaddirt, 80, 40);
image(ligdirt, 0, 40);
image(shaddirt, 40, 80);
image(shaddirt, 0, 80);
image(shaddirt, 80, 80);

fill(255, 247, 0, 100);
rect(0, 0, 40, 80);
rect(40, 0, 120, 40);

fill(0, 0, 0, 70);
rect(80, 40, 40, 80);
rect(0, 80, 80, 40);
 return get(0, 0, 120, 120);
        },
        Image9:function(){
            noStroke();
image(shaddirt, 120, 0);
image(shaddirt, 160, 0);
image(shaddirt, 200, 0);
image(shaddirt, 120, 40);
image(dirt, 160, 40);
image(ligdirt, 200, 40);
image(ligdirt, 120, 80);
image(ligdirt, 200, 80);
image(ligdirt, 160, 80);

fill(0, 0, 0, 110);
rect(120, 40, 40, 40);
rect(120, 0, 120, 40);

fill(0, 0, 0, 30);
rect(160, 40, 40, 40);

fill(255, 255, 0, 140);
rect(200, 40, 40, 80);
rect(120, 80, 80, 40);
 return get(120, 0, 120, 120);
        },
        Image10:function(){
            noStroke();
        background(255, 255, 255, 0);
image(dirt, 300, 300);
image(dirt, 30, 290);
image(dirt, 70, 290);
image(dirt, 110, 290);
image(dirt, 150, 290, 50, 40);
image(dirt, 300, 300);
image(dirt, 30, 330);
image(dirt, 70, 330);
image(dirt, 150, 330, 50, 40);
image(dirt, 30, 370);
image(dirt, 150, 370, 50, 40);
image(dirt, 30, 410);
image(dirt, 70, 410);
image(dirt, 110, 410);
image(dirt, 150, 410, 50, 40);
image(dirt, 30, 450, 40, 7);
image(dirt, 70, 450, 40, 7);
image(dirt, 110, 450, 40, 7);
image(dirt, 150, 450, 50, 7);


pushMatrix();
rotate(49);
image(rdirt, 300, 99);
popMatrix();
 return get(30, 290, 170, 170);
        },
        Image11:function(){
            noStroke();
        image(ligdirt, 240, 0);
image(ligdirt, 280, 0);
image(ligdirt, 320, 0);
image(ligdirt, 360, 0);
image(ligdirt, 240, 40);
image(dirt, 280, 40);
image(dirt, 320, 40);
image(shaddirt, 360, 40);
image(ligdirt, 240, 80);
image(dirt, 280, 80);
image(dirt, 320, 80);
image(shaddirt, 360, 80);
image(shaddirt, 240, 120);
image(shaddirt, 280, 120);
image(shaddirt, 320, 120);
image(shaddirt, 360, 120);

fill(255, 255, 0, 150);
rect(240, 40, 40, 80);
rect(240, 0, 160, 40);
//fill(0, 0, 0, 150);
//rect(360, 40, 40, 80);
//rect(240, 120, 160, 40);

 return get(240, 0, 160, 160);
        },
        Image12:function(){
            noStroke();
        image(ligdirt, 240, 0);
image(ligdirt, 280, 0);
image(ligdirt, 320, 0);
image(ligdirt, 360, 0);
image(ligdirt, 240, 40);
image(dirt, 280, 40);
image(dirt, 320, 40);
image(shaddirt, 360, 40);
image(ligdirt, 240, 80);
image(dirt, 280, 80);
image(dirt, 320, 80);
image(shaddirt, 360, 80);
image(shaddirt, 240, 120);
image(shaddirt, 280, 120);
image(shaddirt, 320, 120);
image(shaddirt, 360, 120);

mainruby(260, 20, 0.15, color(99, 255, 117), color(49, 245, 82), color(71, 255, 86), color(71, 222, 102), color(29, 227, 112));
mainruby(380, 140, 0.15, color(99, 255, 117), color(49, 245, 82), color(71, 255, 86), color(71, 222, 102), color(29, 227, 112));

fill(255, 255, 0, 100);
rect(240, 40, 40, 80);
rect(240, 0, 160, 40);
//fill(0, 0, 0, 100);
//rect(360, 40, 40, 80);
//rect(240, 120, 160, 40);
mainruby(320, 80, 0.3, color(99, 255, 117), color(49, 245, 82), color(71, 255, 86), color(71, 222, 102), color(29, 227, 112));


 return get(240, 0, 160, 160);
        },
        Image13:function(){
        noStroke();
        fill(161, 87, 3);
        rect(0, 0, 40, 40);
        fill(140, 137, 140);
        ellipse(10, 10, 15, 15);
        ellipse(28, 10, 10, 10);
        ellipse(28, 28, 15, 15);
        
 return get(0, 0, 40, 40);
        },
        Image14:function(){
            noStroke();
        fill(250, 230, 100);
rect(220, 0, 200, 120);
fill(252, 191, 68, 150);
rect(220, 20, 200, 20);
fill(255, 174, 0, 150);
rect(220, 40, 200, 80);
    for(var i = 0; i < 35; i++){
    fill(247, 182, 5);
    rect(random(0, 180) + 220, random(0, 100), 5, 5);
    
}
return get(220, 0, 200, 120);
        },
        Image15: function(){
            background(255, 255, 255, 0);
strokeWeight(3);
stroke(133, 133, 133);
line(8, 8, 28, 15);
line(28, 15, 8, 25);
line(8, 25, 28, 30);
line(28, 30, 8, 35);
line(8, 35, 28, 40);
noStroke();
fill(4, 214, 11);
rect(0, 0, 40, 10, 10);
 return get(0, 0, 40, 43);
        },
        Image16: function(){
            background(255, 255, 255, 0);
return get(20, 359, 60, 60);
        },
        Image17r: function(){
            background(255, 255, 255, 0);
fill(181, 181, 181);//dark gray
triangle(243,500,-136,500,31,215);//mountain on left
triangle(704,500,278,500,481,209);//mountain on right
/*
stroke(0, 0, 0);
strokeWeight(0.8);
line(481,209,475,255);
line(475,255,502,312);
line(502,312,477,373);
line(477,373,515,419);
line(515,419,477,500);//mountain on right's lines 

line(31,215,39,261);
line(39,261,31,296);
line(28,296,55,342);
line(55,342,32,395);
line(32,395,64,452);
line(64,452,59,500);//mountain on left's lines
*/

fill(105, 105, 105);
noStroke();
beginShape();
vertex(31,217);//leave this alone
vertex(39,261);
vertex(28,296);
vertex(55,342);
vertex(285,500);
vertex(31,217);//mountain on left's shadow
endShape();

beginShape();
vertex(481,209);//leave this alone
vertex(475,255);
vertex(502,312);
vertex(477,373);
vertex(515,419);
vertex(580,500);
vertex(701,500);
vertex(481,209);//mountain on right's shadow
endShape();



noStroke();
fill(191, 191, 191);//light gray
triangle(285,500,-66,500,117,259);//other mountain on left
triangle(608,500,270,500,401,259);//other mountain on right

/*

stroke(0, 0, 0);
strokeWeight(0.8);

line(117,259,98,310);
line(98,310,124,344);
line(124,344,99,399);
line(99,399,143,440);
line(143,440,107,489);
line(107,489,135,500);//other mountain on left's lines

line(401,259,408,287);
line(408,287,405,314);
line(405,314,426,355);
line(426,355,415,382);
line(415,382,439,418);
line(439,418,413,455);
line(413,455,424,478);
line(424,478,420,500);//other mountain on right's lines 
*/ 

fill(125, 125, 125);

noStroke();
beginShape();
vertex(117,259);//leave this alone
vertex(98,310);
vertex(124,344);
vertex(99,399);
vertex(143,440);
vertex(107,489);
vertex(135,500);
vertex(285,500);
vertex(117,259);//other mountain on left's shadow
endShape();

beginShape();
vertex(401,259);
vertex(408,287);
vertex(405,314);
vertex(426,355);
vertex(415,382);
vertex(439,418);
vertex(413,455);
vertex(424,478);
vertex(420,500);
vertex(608,500);
vertex(401,259);//other mountain on right's shadow
endShape();
 return get(0, 210, 800, 300);
        },
        Image19r: function(){
            background(255, 0);
            function pillar2(x,y,s){
    pushMatrix();
    translate(x,y);
    scale(s);
    fill(148, 148, 148);
    rect(0,0,35,20,2);
    fill(117, 117, 117);
    rect(0,7,35,2);
    rect(0,3,35,2);
    fill(130, 130, 130);
    quad(3,0,32,0,29,-190,6,-190);
    fill(138, 138, 138);
    rect(2,-193,30,8,5);
    fill(110, 110, 110);
    rect(2.5, -180, 30, 3, 5);
    rect(2.5, -170, 30, 3, 5);
    rect(2.5, -160, 30, 3, 5);
    rect(2.5, -20, 30, 3, 5);
    rect(2.5, -30, 30, 3, 5);
    rect(2.5, -40, 30, 3, 5);
    fill(255, 255, 255, 50);
    rect(5, -195, 13, 215);
    popMatrix();
    
}
pillar2(0, 195, 1);
return get(0, 0, 40, 160);
        },
        Image20r: function(){
            

 return get(0, 200, 800, 70);

        },
        Image17: function(){
            background(255, 255, 255, 0);
            strokeWeight(10);
stroke(161, 159, 159);
noFill();
rect(300, 300, 120, 120, 30);

return get(300, 300, 120, 120);
        },
        Image18: function(){
            background(255, 255, 255, 0);
            strokeWeight(10);
stroke(161, 159, 159);
noFill();
            rect(300, 430, 180, 120, 30);
            return get(295, 430, 190, 120);
        },
        Image21r: function(){
            
var goldenbronze = function(x, y, size, direcX, direcY) {
    noStroke();
        body(x, y, size, color(189, 84, 23));
        eyes(x + direcX, y + direcY, size, 1, color(0, 0, 0), false, 0);
};
background(255, 255, 255, 0);
goldenbronze(120, 120, 100, 1, 1);

return get(70, 70, 100, 100);
    
        },
        Image22r: function(){
            noStroke();
fill(255, 64, 0);
        rect(100,200,120,120);
        fill(0,0,0);
        rect(100+13,200+14,30, 70);
        rect(100+72,200+14,30, 70);
        return get(100, 200, 120, 120);
        },
        Image23r: function(){
            var drawChar = function(x, y){
    
    
    fill(201, 82, 43);
    rect(x, y - 10, 60, 60, 10);
    noStroke();
    fill(40, 64, 35);
    rect(x+35,y+4,15,15);
    rect(x+7,y+4,15,15);
    rect(x+35,y+30,10,10);
};
strokeWeight(8);
    stroke(148, 148, 148);
drawChar(100, 400);
return get(100, 400, 60, 60);
        },
        Image24r: function(){
            noStroke();

noStroke();
fill(168, 168, 168);
rect(0, 0, 50, 50);
fill(255, 255, 255, 150);
rect(0, 0, 5, 50);
rect(5, 0, 45, 5);
rect(45, 5, 5, 45);
fill(0, 0, 0, 150);
rect(5, 45, 40, 5);
fill(0, 0, 0, 100);
rect(10, 10, 15, 15);
rect(26, 26, 15, 15);

  return get(0, 0, 50, 50);


        },
        Image25r: function(){
            noStroke();
            image(rrdirt, 50, 0);
fill(201, 65, 16, 200);
rect(0+rrX, 0, 50, 50);
fill(0, 0, 0, 100);
rect(5+rrX, 45, 40, 5);

 return get(50, 0, 50, 50);
        },
        Image26r: function(){
            noStroke();
            var blockX = 15; 
var blockY = 75; 

fill(227, 224, 227);
rect(blockX,blockY,50,50);

fill(112, 112, 112);
rect(blockX+26,blockY+4,14,10,3);
rect(blockX+17,blockY+23,11,7,2);
fill(88, 88, 88);
rect(blockX+35,blockY+17,14,7,6);
rect(blockX+40,blockY+41,9,6,29);
rect(blockX+1,blockY+7,21,13,9);
rect(blockX+8,blockY+36,25,10,10);
 return get(15, 75, 50, 50);
            
        },
        Image27r: function(){
            noStroke();
            image(rrdirt2, 100, 0, 25, 25);
image(rrdirt2, 125, 25, 25, 25);
image(rrdirt, 125, 0, 25, 25);
image(rrdirt, 100, 25, 25, 25);

 return get(100, 0, 50, 50);
        },
        Image28r: function(){
            noStroke();
image(rrdirt2, 230, 0, 80, 50);

 return get(230, 0, 80, 50);
        },
        Image29r: function(){
            noStroke();
            image(rrdirt, 150, 0, 80, 50);
image(rrdirt2, 230, 0, 80, 50);

 return get(230, 0, 80, 50);
        },
        Image30r: function(){
            noStroke();
            image(rrdirt, 410, 0, 100, 100);
            return get(410, 0, 100, 100);
        },
        Image31r: function(){
            noStroke();
            image(rrdirt3, 510, 0, 100, 100);

 return get(510, 0, 100, 100);
        },
        Image32r: function(){
            noStroke();
            background(255, 255, 255, 0);
pushMatrix();
        
        translate(this.x, this.y);
        scale(this.w / 100, this.h*4 / 400);
        
        noStroke();
        fill(225);
        rect(0, 0, 100, 15);
        rect(15, 30, 70, 340);
        
        rect(0, 385, 100, 15);
        
        fill(200);
        quad(0, 15, 15, 30, 85, 30, 100, 15);
        rect(10, 50, 80, 20);
        
        quad(0, 385, 15, 370, 85, 370, 100, 385);
        rect(10, 330, 80, 20);
        
        rect(25, 80, 10, 230, 5);
        rect(45, 80, 10, 230, 5);
        rect(65, 80, 10, 230, 5);   
        
    popMatrix();
 return get(0, 0, 100, 400);
        },
        Waterf: function(){
            background(255,255, 255, 0);
image(linez, 10-10, 20);
       image(linez, 10, 40);
       image(linez, 10-10, 60);
       image(linez, 10, 100);
       image(linez, 10-10, 120);
       image(linez, 10, 140);
       image(linez, 10-10, 160);
       image(linez, 10, 180);
       image(linez, 10-10, 200);
       image(linez, 10, 220);
       image(linez, 10-10, 240);
       image(linez, 10, 260);
       image(linez, 10-10, 280);
       image(linez, 10-10, 300);
       image(linez, 10, 320);
       image(linez, 10-10, 340);
       image(linez, 10, 360);
       image(linez, 10-10, 380);
       image(linez, 10-10, 400);
       image(linez, 10, 420);
       image(linez, 10-10, 440);
       image(linez, 10, 460);
       image(linez, 10-10, 480);
       image(linez, 10-10, 500);
       image(linez, 10, 520);
       image(linez, 10-10, 540);
       image(linez, 10, 560);
       image(linez, -10, 580);
 return get(10, 0, 80, 600);

        },
        Sidebl: function(){
            noStroke();
            image(rrdirt, 0, 500);
fill(0, 0, 0, 80);
rect(0, 500, 20, 50);
rect(0, 500, 10, 50);
rect(0, 500, 5, 50);
return get(0, 500, 50, 50);
        },
        SideblA: function(){
            noStroke();
            image(rrdirt, 0, 500);
fill(0, 0, 0, 100);
rect(30, 500, 20, 50);
rect(40, 500, 10, 50);
rect(45, 500, 5, 50);
return get(0, 500, 50, 50);
        },
        PillarA: function(){
            noStroke();
            background(255, 0);
            image(rrpillar, 200, 200);

strokeWeight(8);
stroke(191, 92, 31);
fill(191, 92, 31, 200);
rect(200, 100, 100, 100, 30);

return get(200, 100, 100, 400);
        },
        BlueyandBolty: function(){
            noStroke();
            background(255, 255, 255, 0);
            fill(0, 0, 209);
    ellipse(200, 500, 90, 90);
    fill(255);
    ellipse(180, 480, 30, 30);
    ellipse(215, 480, 30, 30);
    fill(0);
    ellipse(180, 480, 15, 15);
    ellipse(215, 480, 15, 15);
    fill(0, 221, 255);
    ellipse(195, 505, 15, 15);
    noFill();
    strokeWeight(4);
    stroke(0, 0, 0);
    arc(205, 515, 30, 30, 10, 123);
    noStroke();
    fill(0, 0, 0, 100);
    ellipse(330, 530, 70, 30);
    fill(25, 168, 168);
    ellipse(350, 500, 90, 90);
    fill(50, 235, 235);
    ellipse(350, 500, 90, 85);
    noStroke();
fill(255, 255, 255);
ellipse(375, 490, 30, 20);
ellipse(325, 490, 30,20);
fill(25, 168, 168);
ellipse(375, 491, 15, 15);
ellipse(325, 491, 15, 15);
fill(0, 0, 0);
ellipse(375, 489, 15, 15);
ellipse(325, 489, 15, 15);
fill(255, 255, 0);
beginShape();
vertex(340, 470);
vertex(350, 480);
vertex(350, 490);
vertex(360, 490);
vertex(360, 520);
vertex(360, 510);
vertex(360, 530);
endShape();
fill(66, 3, 3);

arc(330, 520, 20, 20, 0, 240);
 return get(150, 450, 250, 100);
        },
        spring: function(){
            background(255, 255, 255, 0);
            strokeWeight(3);
stroke(133, 133, 133);
line(8, 8, 28, 15);
line(28, 15, 8, 25);
line(8, 25, 28, 30);
line(28, 30, 8, 35);
line(8, 35, 28, 40);
noStroke();
fill(255, 0, 204);
rect(0, 0, 40, 10, 10);
            return get(0, 0, 40, 43);
        },
        spring90: function(){
            background(255, 255, 255, 0);
pushMatrix();
rotate(49);
image(spring, 300, 200);
popMatrix();
            return get(20, 359, 60, 60);
        },
        spring290: function(){
            background(255, 255, 255, 0);
pushMatrix();
rotate(-49);
image(spring, 100, 200);
popMatrix();
            
            return get(210, 27, 60, 60);
        },
        Lspring: function(){
            background(255, 255, 255, 0);
strokeWeight(3);
stroke(133, 133, 133);
line(8, 8, 18, 28);
line(18, 28, 23, 14);
line(23, 14, 33, 34);
line(33, 34, 43, 14);
noStroke();
fill(255, 0, 204);
rect(0, 0, 10, 40, 10);
return get(0, 0, 40, 40);
        },
        Rspring: function(){
            background(255, 255, 255, 0);
strokeWeight(3);
stroke(133, 133, 133);
line(8, 8, 18, 28);
line(18, 28, 23, 14);
line(23, 14, 33, 34);
line(33, 34, 43, 14);
line(8, 8, 2, 28);
noStroke();
fill(255, 0, 204);
rect(30, 0, 10, 40, 10);
return get(0, 0, 40, 40);
        },
        
        EEW: function(){
            background(255, 255, 255, 0);
            noStroke();
fill(0, 196, 255);
rect(0,248,800,382);
fill(255, 255, 255);
rect(249,260,100,5,5);
rect(85,299,100,5,5);
rect(15,260,100,5,5);
rect(15,360,100,5,5);
rect(226,296,100,5,5);
rect(159,330,100,5,5);
rect(73,558,100,5,5);
rect(300, 350, 100, 5, 5);
rect(500, 350, 100, 5, 5);
rect(500, 550, 100, 5, 5);
rect(200, 450, 100, 5, 5);
rect(250, 550, 100, 5, 5);
rect(300, 350, 100, 5, 5);
rect(250, 550, 100, 5, 5);
rect(650, 350, 100, 5, 5);
rect(650, 250, 100, 5, 5);
rect(650, 450, 100, 5, 5);
rect(650, 550, 100, 5, 5);
rect(300, 350, 100, 5, 5);
rect(473,258,100,5,5);
rect(273,358,100,5,5);
rect(473,458,100,5,5);
rect(73,458,100,5,5);
return get(0, 248, 800, 382);
        },
        EEWA: function(){
            background(255, 255, 255, 0);
            
    noStroke();
fill(0, 196, 255);
rect(0,248,800,382);
fill(255, 255, 255);
rect(waterx + 249,260,100,5,5);
rect(waterx + 85,299,100,5,5);
rect(waterx + 15,260,100,5,5);
rect(waterx + 15,360,100,5,5);
rect(waterx + 226,296,100,5,5);
rect(waterx + 159,330,100,5,5);
rect(waterx + 73,558,100,5,5);
rect(waterx + 300, 350, 100, 5, 5);
rect(waterx + 500, 350, 100, 5, 5);
rect(waterx + 500, 550, 100, 5, 5);
rect(waterx + 200, 450, 100, 5, 5);
rect(waterx + 250, 550, 100, 5, 5);
rect(waterx + 300, 350, 100, 5, 5);
rect(waterx + 250, 550, 100, 5, 5);
rect(waterx + 650, 350, 100, 5, 5);
rect(waterx + 650, 250, 100, 5, 5);
rect(waterx + 650, 450, 100, 5, 5);
rect(waterx + 650, 550, 100, 5, 5);
rect(waterx + 300, 350, 100, 5, 5);
rect(waterx + 473,258,100,5,5);
rect(waterx + 273,358,100,5,5);
rect(waterx + 473,458,100,5,5);
rect(waterx + 73,458,100,5,5);
        },
        TotemPole: function(){
            background(255, 255, 255, 0);
            image(pole3, 90, 100, 80, 80);
            image(pole4, 90, 180, 80, 60);
            image(pole2, 0, 0, 240, 110);
            
            return get(0, 0, 245, 255);
        },
        TotemPole2: function(){
            background(255, 255, 255, 0);
            image(pole2A, 90, 100, 80, 80);
            image(pole3A, 90, 180, 80, 60);
            image(poleA, 0, 0, 240, 120);
            return get(0, 0, 245, 255);
            
        },
        TotemPole3k: function(){
            background(255, 255, 255, 0);
            image(pole3A, 90, 80, 80, 80);
            image(pole2A, 90, 160, 80, 80);
            return get(0, 0, 245, 255);
        },
        EEBB: function(){
            noStroke();
            SpBl(0, 0, 120, 120);
            return get(0, 0, 120, 120);
        },
        EEdock: function(){
            noStroke();
            background(255, 255, 255, 0);
            fill(219, 93, 3);
rect(0, 0, 180, 40);
fill(255, 255, 255, 50);
rect(0, 0, 180, 15);
fill(74, 74, 74, 50);
rect(0, 25, 180, 15);

fill(255, 94, 0);
rect(40, 40, 40, 80);
rect(35, 40, 52, 15);
rect(35, 60, 52, 15);
rect(35, 90, 52, 15);
rect(35, 110, 52, 10);
rect(130, 40, 40, 80);
rect(125, 40, 52, 15);
rect(125, 60, 52, 15);
rect(125, 90, 52, 15);
rect(125, 110, 52, 10);
fill(242, 226, 0, 100);
rect(65, 40, 17, 80);
rect(55, 40, 20, 80);
rect(45, 40, 25, 80);
rect(155, 40, 17, 80);
rect(145, 40, 20, 80);
rect(135, 40, 25, 80);
fill(0, 0, 0, 30);
rect(35, 40, 10, 80);
rect(125, 40, 10, 80);
return get(0, 0, 180, 120);
        },
        EEchunkA1: function(){
            background(255, 0);
            image(dirt, 0, 0);
image(dirt, 40, 0);
image(dirt, 0, 40);
image(dirt, 80, 0);
image(dirt, 0, 80);
image(dirt, 40, 40);
image(dirt, 80, 80);
image(dirt, 40, 80);
image(dirt, 80, 40);
image(dirt, 120, 40);
image(dirt, 80, 120);
image(dirt, 120, 0);
image(dirt, 120, 80);
image(dirt, 120, 120);
image(dirt, 40, 120);
image(dirt, 0, 120);
mainruby(50, 30, 0.25, color(99, 255, 117), color(49, 245, 82), color(71, 255, 86), color(71, 222, 102), color(29, 227, 112));

mainruby(90, 90, 0.15, color(99, 255, 117), color(49, 245, 82), color(71, 255, 86), color(71, 222, 102), color(29, 227, 112));
mainruby(30, 90, 0.10, color(99, 255, 117), color(49, 245, 82), color(71, 255, 86), color(71, 222, 102), color(29, 227, 112));
mainruby(100, 20, 0.13, color(99, 255, 117), color(49, 245, 82), color(71, 255, 86), color(71, 222, 102), color(29, 227, 112));
mainruby(130, 120, 0.17, color(99, 255, 117), color(49, 245, 82), color(71, 255, 86), color(71, 222, 102), color(29, 227, 112));
mainruby(40, 140, 0.13, color(99, 255, 117), color(49, 245, 82), color(71, 255, 86), color(71, 222, 102), color(29, 227, 112));
return get(0, 0, 120, 120);
        },
        EEslope1: function(){
            background(255, 0);
            strokeWeight(10);
                stroke(4, 191, 4);
                fill(0, 255, 0);
        pushMatrix();
        translate(0, 0);
        triangle(0, 0, 0, 35, 35, 35);
        strokeWeight(3);
stroke(5, 237, 5);
line(5, 0, 40, 36);
        popMatrix();
image(dirt, 0, 30, 10, 10);
image(dirt, 10, 30, 10, 10);
image(dirt, 20, 30, 10, 10);
image(dirt, 0, 20, 10, 10);
image(dirt, 10, 20, 10, 10);
image(dirt, 0, 10, 10, 10);
image(dirt, 30, 35, 5, 5);
image(dirt, 20, 25, 5, 5);
image(dirt, 10, 15, 5, 5);
image(dirt, 0, 5, 5, 5);
return get(0, 0, 40, 40);
        },
        EEslope2: function(){
            background(255, 0);
            pushMatrix();
            strokeWeight(10);
                stroke(4, 191, 4);
                fill(0, 255, 0);
        pushMatrix();
        translate(0 + 40, 0);
        scale(-1, 1);
        triangle(0, 0, 0, 40, 40, 40);
        popMatrix();
image(dirt, 35, 5, 10, 10);
image(dirt, 35, 15, 10, 10);
image(dirt, 35, 25, 10, 10);
image(dirt, 35, 35, 10, 10);
image(dirt, 25, 35, 10, 10);
image(dirt, 15, 35, 10, 10);
image(dirt, 5, 35, 10, 10);
image(dirt, 25, 25, 10, 10);
image(dirt, 25, 15, 10, 10);
image(dirt, 15, 25, 10, 10);
image(dirt, 0, 40, 5, 5);
image(dirt, 10, 30, 5, 5);
image(dirt, 20, 20, 5, 5);
image(dirt, 30, 10, 5, 5);
image(dirt, 40, 0, 5, 5);
strokeWeight(3.5);
stroke(5, 237, 5);
line(36, 0, 0, 36);
noStroke();
return get(0, 0, 40, 40);
        },
        
        
        Backmounts: function(){
            background(255, 255, 255, 1);
Mount(color(247, 151, 8), 0.8, 0.5, 365, 365);
    Mount(color(227, 146, 48), 0.8, 0.5, 110, 370);
    Mount(color(255, 162, 56), 0.8, 0.5, -125, 380);
 return get(0, 0, 800, 600);
        },
        RRrange: function(){
            background(4, 186, 49);
            fill(31, 196, 6);
rect(0, 205, 60, 50);
rect(60, 200, 40, 40);
rect(600, 205, 60, 50);
rect(660, 200, 40, 40);
rect(700, 205, 60, 50);
rect(760, 200, 40, 40);
fill(4, 227, 30);
rect(100, 205, 60, 50);
rect(160, 210, 40, 50);
rect(400, 205, 60, 50);
rect(460, 210, 90, 50);
rect(200, 205, 60, 50);
rect(260, 210, 40, 50);
fill(0, 255, 68);
rect(300, 200, 60, 50);
rect(360, 200, 40, 40);
rect(500, 200, 60, 50);
rect(560, 203, 50, 40);
 return get(0, 280, 800, 70);
        },
        RRclouds: function(){
            background(255, 255, 255, 0);
            var Cloud = function(){
    noStroke();
    fill(255, 255, 255);
    ellipse(30,498,60,50);
    ellipse(40,531,60,50);
    ellipse(180,634,400,400);  
    ellipse(425,704,400,400);      
    ellipse(74,481,60,50);
    ellipse(111,456,60,50);
    ellipse(74,481,60,50);
    ellipse(134,439,60,50);    
    ellipse(15,579,108,161);
    ellipse(134,406,60,50);   
    ellipse(180,398,60,50);
    ellipse(172,417,60,50);   
    ellipse(159,398,60,50);  
    ellipse(204,432,60,50);   
    ellipse(242,458,60,50);   
    ellipse(237,445,60,50);   
    ellipse(270,471,60,50);  
    ellipse(311,499,60,50); 
    ellipse(339,529,60,50); 
    ellipse(348,557,60,50);  
    ellipse(291,471,60,50);   
    ellipse(271,452,60,50);   
    ellipse(356,513,60,50); 
    ellipse(405,513,60,50); 
    ellipse(383,513,60,50);  
    ellipse(396,499,60,50); 
    ellipse(422,490,60,50);  
    ellipse(444,513,60,50);  
    ellipse(521,495,60,50);
    ellipse(556,471,60,50);    
    ellipse(593,451,60,50);        
    ellipse(479,513,60,50);     
    ellipse(642,634,400,400); 
    

    fill(250, 250, 250);
    ellipse(30,508,60,50);
    ellipse(40,568,60,50);
    
    ellipse(125,563,60,50);
    ellipse(111,456,60,50);
    ellipse(257,509,60,50);
    ellipse(134,517,60,50);    
 
    ellipse(404,565,60,50);   
    ellipse(566,524,60,50);
    ellipse(500,535,60,50);   
    ellipse(229,568,60,50);  
    ellipse(204,441,60,50);   

    fill(255, 255, 255);
    ellipse(26,511,60,50);
    ellipse(44,569,60,50);
    
    ellipse(125,570,60,50);
    ellipse(111,462,60,50);
    ellipse(257,514,60,50);
    ellipse(134,520,60,50);    
 
    ellipse(404,569,60,50);   
    ellipse(572,529,60,50);
    ellipse(495,539,60,50);   
    ellipse(229,568,60,50);  
    ellipse(198,441,60,50);    
};Cloud();
return get(0, 350, 800, 200);
        },
        RRitem: function(){
            background(2555, 2555, 255, 0);
            pushMatrix();
rotate(50);
image(rrdirt, 580, -200);

popMatrix();
noStroke();
fill(255, 0, 0, 200);
rect(490, 400, 60, 10);
image(rrpillar, 490, 410, 60, 100);

return get(490, 310, 80, 200);
        },
        RRbricks: function(){
            var bx = 20;
             noStroke();
           fill(97, 96, 96);
            
            rect(0, 0, 40, 40);
            
               stroke(20);
            strokeWeight(2);
            strokeCap(SQUARE);
            line(bx-20,bx-5,bx+20,bx-5);
            line(bx-20,bx+10,bx+20,bx+10);
            line(bx-10,bx-5,bx-10,bx+10);
            line(bx+10,bx-5,bx+10,bx+10);
            line(0,bx-20,0,bx-5);
            line(0,bx+10,0,bx+20);
            return get(0, 0, 40, 40);
        },
        RRslope1: function(){
            background(255, 0);
            strokeWeight(10);
                stroke(169, 171, 169);
                fill(140, 140, 140);
        pushMatrix();
        translate(0, 0);
        triangle(0, 0, 0, 35, 35, 35);
        strokeWeight(3);
stroke(161, 161, 161);
line(5, 0, 40, 36);
        popMatrix();
image(rrdirt, 0, 30, 10, 10);
image(rrdirt, 10, 30, 10, 10);
image(rrdirt, 20, 30, 10, 10);
image(rrdirt, 0, 20, 10, 10);
image(rrdirt, 10, 20, 10, 10);
image(rrdirt, 0, 10, 10, 10);
image(rrdirt, 30, 35, 5, 5);
image(rrdirt, 20, 25, 5, 5);
image(rrdirt, 10, 15, 5, 5);
image(rrdirt, 0, 5, 5, 5);
return get(0, 0, 40, 40);
        },
        RRslope2: function(){
            background(255, 0);
            pushMatrix();
            strokeWeight(10);
                stroke(169, 171, 169);
                fill(128, 130, 128);
        pushMatrix();
        translate(0 + 40, 0);
        scale(-1, 1);
        triangle(0, 0, 0, 40, 40, 40);
        popMatrix();
image(rrdirt2, 35, 5, 10, 10);
image(rrdirt, 35, 15, 10, 10);
image(rrdirt, 35, 25, 10, 10);
image(rrdirt2, 35, 35, 10, 10);
image(rrdirt2, 25, 35, 10, 10);
image(rrdirt2, 15, 35, 10, 10);
image(rrdirt2, 5, 35, 10, 10);
image(rrdirt, 25, 25, 10, 10);
image(rrdirt, 25, 15, 10, 10);
image(rrdirt, 15, 25, 10, 10);
image(rrdirt, 0, 40, 5, 5);
image(rrdirt2, 10, 30, 5, 5);
image(rrdirt2, 20, 20, 5, 5);
image(rrdirt2, 30, 10, 5, 5);
image(rdirt, 40, 0, 5, 5);
strokeWeight(3.5);
stroke(204, 204, 204);
line(36, 0, 0, 36);
noStroke();
return get(0, 0, 40, 40);
        },
        
        
        MMblock: function(){
            noStroke();
fill(0, 115, 255);
rect(0, 0, 43, 40);
strokeWeight(5);
stroke(255, 170, 0);
fill(255, 0, 179);
rect(0, 0, 20, 10);
rect(20, 0, 20, 10);
noStroke();
fill(0, 47, 255);
rect(0, 13, 10, 15);
rect(16, 13, 10, 15);
rect(33, 13, 10, 15);
fill(0, 191, 255);
rect(13, 13, 2, 15);
rect(26, 13, 7, 15);
fill(0, 61, 227);
rect(0, 30, 43, 10);
strokeWeight(2);
stroke(0);
line(0, 16, 10, 16);
line(0, 23, 10, 23);
line(16, 16, 23, 16);
line(16, 23, 23, 23);
line(34, 16, 40, 16);
line(34, 23, 40, 23);
noStroke();
image(ffq, 0, 25, 21, 14);
image(ffq, 21, 25, 21, 14);

return get(0, 0, 40, 40);
            
            
        },
        MMdirt: function(){
            fill(0, 123, 255);
rect(43, 0, 40, 40);
fill(0, 0, 0, 160);
rect(43, 0, 5, 40);
rect(48, 0, 35, 5);
fill(255, 255, 255, 190);
rect(78, 5, 5, 35);
rect(48, 35, 35, 5);
return get(42, 0, 40, 40);
        },
        MMfrontb: function(){
            fill(0, 81, 255);
rect(83, 0, 40, 40);
fill(0, 166, 255);
rect(83, 17, 40, 5);
fill(0, 174, 255, 100);
rect(87, 0, 31, 40);
fill(0, 208, 255, 100);
rect(92, 0, 21, 40);
fill(107, 228, 255, 100);
rect(96, 0, 13, 40);
return get(83, 0, 40, 40);
        },
        MMfrontb2: function(){
            pastidescape.draw();
            rectMode(CORNER);
            return get(123, 0, 40, 40);
            
        },
        MMfrontba: function(){
            rectMode(CORNER);

fill(0, 77, 255);
rect(163, 0, 40, 40);
fill(0, 153, 255);
rect(163, 0, 40, 5);
rect(163, 15, 40, 25);
fill(0, 0, 232,100);
rect(163, 0, 12, 40);
fill(0, 208, 255, 100);
rect(175, 0, 14, 40);
fill(255, 255, 255,100);
rect(189, 0,13, 40);
fill(133, 133, 133);
rect(165, 25, 7, 7);
rect(178, 25, 8, 8);
rect(192, 25, 7, 7);
return get(163,0,40, 40);
            
        
        },
        MMchunk: function(){
            
            
            
            background(255, 255, 255, 0);
            fill(4, 135, 222);
rect(0, 0, 200, 220);
            fill(66, 164, 255);
rect(0, 0, 200, 10);

fill(255, 136, 0);
rect(120, 20, 60, 90, 5);
fill(0, 255, 0);
rect(20, 20, 10, 90);
rect(40, 20, 10, 90);
fill(0, 91, 0);
rect(30, 20, 10, 90);
rect(50, 20, 10, 90);
fill(161, 6, 6);
ellipse(100, 150, 10, 10);
ellipse(120, 150, 10, 10);
fill(3, 110, 3);
rect(90, 160, 40, 5, 5);
fill(2, 19, 171);
rect(20, 120, 60, 8, 5);
rect(10, 180, 150, 8, 4);

return get(0, 0, 200, 200);
        
        

        },
        MMchunk1: function(){
            

            background(255, 255, 255, 0);
            fill(4, 135, 222);
rect(0, 0, 200, 220);
            fill(66, 164, 255);
rect(0, 0, 200, 10);

fill(255, 136, 0);
rect(120, 20, 60, 90, 5);
fill(0, 255, 0);
rect(20, 20, 10, 90);
rect(40, 20, 10, 90);
fill(0, 91, 0);
rect(30, 20, 10, 90);
rect(50, 20, 10, 90);
fill(161, 6, 6);
ellipse(100, 150, 10, 10);
ellipse(120, 150, 10, 10);
fill(3, 110, 3);
rect(90, 160, 40, 5, 5);
fill(2, 19, 171);
rect(20, 120, 60, 8, 5);
rect(10, 180, 150, 8, 4);

return get(0, 0, 200, 200);
        },
        MMBGp1: function(){
            background(255, 255, 255, 0);
            fill(140, 140, 140);
rect(283, 170, 5, 130);
rect(150, 100, 3, 30);
rect(700, 100, 3, 30);
strokeWeight(2);
stroke(140, 140, 140);
line(140, 90, 150, 100);
line(710, 90, 701, 100);
noStroke();
fill(105, 105, 105);
rect(100, 250, 150, 50);
rect(600, 250, 150, 50);
fill(100, 100, 100);
rect(150, 130, 3, 120);
rect(700, 130, 3, 120);
fill(70, 70, 70);
rect(310, 110, 30, 190);

fill(186, 186, 186);
rect(20, 160, 20, 140);
rect(310, 110, 30, 40, 3);
rect(310, 150.5, 30, 40);
rect(310, 192, 30, 40);
rect(310, 232.5, 30, 67);
rect(90, 130, 30, 170);
rect(170, 160, 50, 140);
rect(260, 160, 20, 140);
rect(360, 130, 30, 170);
rect(420, 120, 30, 180);
rect(90, 180, 90, 5);
rect(270, 170, 20, 5);
rect(270, 190, 20, 5);
rect(270, 220, 20, 5);
rect(270, 250, 20, 5);

rect(500, 200, 50, 100, 4);
fill(128, 128, 128);
rect(500, 230, 50, 70);
fill(255, 0, 0);
rect(500, 205, 50, 5);
for(var i = 0; i < 25; i++){

fill(222, 222, 222, 100);
rect(500, 200 + i * 4, 50, 2);

}


fill(186, 186, 186);
rect(390, 150, 30, 4);
rect(390, 250, 30, 4);

fill(153, 153, 153);
rect(600, 220, 40, 80);
rect(608, 205, 24, 20);


fill(186, 186, 186);


rect(660, 130, 30, 170);
rect(730, 130, 30, 170);

fill(70, 70, 70);
rect(20, 160, 20, 10);
rect(20, 210, 20, 10);
rect(20, 270, 20, 10);
rect(90, 130, 30, 10);
rect(90, 170, 30, 10);
rect(90, 210, 30, 10);
rect(90, 250, 30, 10);
rect(660, 250, 30, 5);
rect(660, 220, 30, 5);
rect(660, 190, 30, 5);
rect(660, 150, 30, 5);
fill(255, 0, 0);
rect(170, 165, 50, 10);
rect(170, 205, 50, 10);

fill(255, 255, 255, 150);
rect(365, 150, 10, 10);
rect(365, 170, 10, 10);
rect(365, 190, 10, 10);
rect(365, 210, 10, 10);
rect(365, 230, 10, 10);
rect(365, 250, 10, 10);
rect(365, 270, 10, 10);
rect(365, 290, 10, 10);
rect(320, 110, 2.5, 40);
rect(320, 152, 2.5, 38);
rect(320, 192, 2.5, 38);
rect(320, 232, 2.5, 68);

rect(435, 130, 10, 10);
rect(435, 150, 10, 10);
rect(435, 170, 10, 10);
rect(435, 190, 10, 10);
rect(435, 210, 10, 10);
rect(435, 230, 10, 10);
rect(435, 250, 10, 10);
rect(435, 277, 10, 10);

rect(740, 150, 10, 10);
rect(740, 170, 10, 10);
rect(740, 190, 10, 10);
rect(740, 210, 10, 10);
rect(740, 230, 10, 10);
rect(740, 250, 10, 10);
rect(740, 270, 10, 10);
rect(740, 290, 10, 10);

strokeWeight(3);
stroke(145, 145, 145);
fill(255, 255, 255, 1);
rect(470, 100, 10, 200);
rect(480, 130, 10, 170);
rect(50, 270, 30, 30);
rect(50, 255, 15, 15);
rect(553, 280, 35, 20);
rect(570, 100, 10, 200);
rect(580, 130, 10, 170);
rect(700, 270, 30, 30);
rect(700, 255, 15, 15);

noStroke();

fill(100, 100, 100);
rect(470, 280, 10, 5);
rect(480, 260, 10, 5);
rect(550, 240, 40, 40, 10);
strokeJoin(MITER);
strokeWeight(5);
stroke(255, 128, 0);
ellipse(568, 260, 15, 15);
strokeCap(SQUARE);
stroke(255);
strokeWeight(8);
line(553, 248, 565, 257);
line(573, 265, 586, 275);
strokeWeight(3);
stroke(156, 156, 156);
fill(255, 255, 255, 0);
rect(230, 230, 20, 70);
rect(5, 130, 10, 170);

noStroke();
fill(194, 194, 194);
rect(605, 207, 30, 3);
rect(605, 212, 30, 3);
for(var i = 0; i < 20; i++){

fill(255, 255, 255, 100);
rect(600, 220 + i * 4, 40, 1);

}


fill(92, 92, 92, 100);
rect(90, 130, 10, 170);
rect(20, 160, 10, 140);
rect(170, 160, 20, 140);
rect(260, 160, 5, 140);
rect(310, 110, 10, 190);
rect(360, 130, 10, 170);
rect(420, 120, 10, 180);
rect(500, 200, 10, 100);
rect(660, 130, 10, 170);
rect(730, 130, 10, 170);
rect(600, 220, 10, 80);
rect(609, 205, 5, 15);

fill(255, 255, 255, 100);
rect(330, 110, 10, 190);
rect(34, 160, 6, 140);
rect(110, 130, 10, 170);
rect(200, 160, 20, 140);
rect(272, 160, 8, 140);
rect(330, 110, 8, 190);
rect(380, 130, 10, 170);
rect(440, 120, 10, 180);
rect(540, 200, 10, 100);
rect(680, 130, 10, 170);
rect(750, 130, 10, 170);
rect(630, 220, 10, 80);
rect(627, 205, 5, 15);
            return get(0, 0, 800, 450);
        },
        MMchunk2: function(){
            image(tdirt, 200, 0, 200, 200);

fill(255, 162, 0);
rect(240, 30, 130, 20, 10);
rect(240, 60, 130, 20, 10);
rect(240, 90, 130, 20, 10);
rect(240, 120, 130, 20, 10);
rect(240, 150, 130, 20, 10);
return  get(200, 0, 200, 200);
        },
        MMchunk3: function(){
            image(tdirt2, 400, 0, 120, 120);
fill(92, 92, 92);
rect(417, 40, 91, 40);
stroke(255, 162, 0);
line(419, 60, 470, 60);
line(470, 60, 500, 40);
line(419, 65, 500, 65);
line(419, 70, 500, 70);
line(419, 75, 500, 75);
noStroke();
fill(3, 173, 63);
rect(417, 15, 20, 20);
rect(487, 15, 20, 20);
rect(417, 85, 20, 20);
rect(487, 85, 20, 20);
return get(400, 0, 120, 120);
        },
        MMchunk5: function(){
            image(tdirt2, 400, 120, 120, 120);
strokeWeight(17);
stroke(133, 133, 133);
point(427, 145);
point(497, 145);
point(427, 216);
point(497, 216);
noStroke();
return get(400, 120, 120, 120);
        },
        MMchunk6: function(){
            image(tdirt2, 400, 240, 120, 120);

noStroke();

for(var i = 0; i < 5; i++){
fill(71, 71, 71, 150);
rect(420, 260 + i * 9 * 2, 90, 3);

}
fill(5, 133, 16, 100);
rect(417, 255, 90, 90);
return get(400, 240, 120, 120);
        },
        MMchunk7: function(){
            image(tdirt2, 400, 360, 120, 120);
fill(184, 73, 4, 180);
rect(417, 375, 90, 90);
strokeWeight(4);
stroke(191, 75, 2);
line(417, 385, 505, 385);
line(417, 405, 505, 405);
line(417, 425, 505, 425);
line(417, 445, 505, 445);
strokeWeight(7);
stroke(255, 98, 0);
line(417, 385, 465, 385);
line(417, 425, 465, 425);

noStroke();
return get(400, 360, 120, 120);
        },
        MMchunk8: function(){
            image(tdirt, 400, 480, 120, 120);

fill(255, 165, 0);
rect(420, 500, 85, 10, 5);
rect(420, 520, 85, 10, 5);
rect(420, 540, 85, 10, 5);
rect(420, 560, 85, 10, 5);
return get(400, 480, 120, 120);
        },
        MMtri: function(){
            background(255, 255, 255, 0);
            strokeWeight(2);
stroke(184, 70, 4);

fill(255, 140, 0);
triangle(34, 2, 53, 62, 13, 62);

noStroke();
fill(0);
rect(3, 60, 60, 5);
pushMatrix();
rotate(-21);
rect(6, 50, 15, 15);

popMatrix();
fill(255, 255, 255, 100);
rect(30, 20, 5, 40);
rect(25, 23, 15, 35);
return get(0, 0, 70, 70);
        },
        MMscaffold: function(){
            background(255, 255, 255, 0);
            strokeWeight(5);
stroke(0);
line(0, 130, 80, 170);
line(0, 160, 80, 200);
line(0, 190, 80, 230);
line(0, 220, 80, 260);
line(0, 250, 80, 290);
line(0, 280, 40, 300);
line(20, 110, 80, 140);
line(40, 90, 80, 110);


strokeWeight(7);
stroke(159, 61, 189);
line(0, 130, 40, 90);
line(0, 160, 40, 120);
line(0, 190, 40, 150);
line(0, 220, 40, 180);
line(0, 250, 40, 210);
line(0, 280, 40, 240);
line(0, 300, 40, 270);


line(40, 90, 40, 300);
line(0, 130, 0, 300);
stroke(124, 55, 125);
line(45, 90, 45, 300);
line(80, 100, 80, 300);
stroke(104, 60, 107);
line(80, 150, 50, 125);
line(80, 175, 50, 150);
line(80, 215, 50, 185);
line(80, 255, 50, 225);
line(80, 290, 50, 260);
noStroke();
fill(115, 115, 115);
rect(0, 155, 40, 60);
fill(89, 76, 76);
rect(45, 215, 35, 50);
return get(0, 80, 85, 230);
        },
        MMBBlock: function(){
            background(255, 0);
            for(var i = 0; i < 5; i++){
image(MMbl2, 0, i * 40);
image(MMbl2, 40, i * 40);
image(MMbl2, 80, i * 40);
image(MMbl2, 120,  i * 40);

}
fill(0, 0, 0, 100);
rect(120, 0, 40, 200);
rect(0, 160, 120, 40);

image(cog, 40, 40, 80, 80);
image(MMst, 160, 0);
image(MMst, 160, 40);
image(MMst, 160, 120);
image(MMst, 160, 160);

fill(0, 0, 0, 150);
rect(160, 0, 40, 40);
rect(160, 40, 40, 40);
rect(160, 120, 40, 40);
rect(160, 160, 40, 40);
return get(0, 0, 200, 200);
        },
        
        DDblock: function(){
            noStroke();
fill(237, 94, 5);
rect(0, 0, 40, 40);

strokeWeight(2);
stroke(125, 67, 0);
line(0, 25, 10, 15);
line(10, 15, 20, 25);
line(20, 25, 30, 15);
line(30, 15, 39, 25);

noStroke();
fill(0, 0, 0, 50);
rect(0, 26, 40, 15);
rect(0, 36, 40, 5);

fill(255, 170, 0, 200);
rect(0, 0, 40, 15);
fill(255, 255, 0, 200);
rect(0, 5, 40, 4);
return get(0, 0, 40, 40);
        },
        DDdirt: function(){
            noStroke();
fill(0, 0, 0, 50);
rect(0, 26, 40, 15);
rect(0, 36, 40, 5);

fill(255, 170, 0, 200);
rect(0, 0, 40, 15);
fill(255, 255, 0, 200);
rect(0, 5, 40, 4);

fill(237, 94, 5);
rect(40, 0, 40, 40);
fill(255, 255, 0, 100);
rect(40, 0, 40, 5);
rect(40, 5, 5, 15);
fill(0, 0, 0, 100);
rect(40, 20, 40, 5);
rect(75, 5, 5, 15);
strokeWeight(3);
stroke(255, 255, 0, 150);
line(46, 6, 46, 15);
line(49, 6, 55, 6);
strokeWeight(1);
line(65, 18, 74, 13);
noStroke();
image(DDbrick3B, 40, 25, 20, 15);
image(DDbrick2B, 60, 25, 20, 15);
return get(40, 0, 40, 40);
        },
        DDdirt2: function(){
            image(DDbrick3B, 40, 25, 20, 15);
image(DDbrick2B, 60, 25, 20, 15);
image(DDblock, 80, 0);
image(DDbrick3A, 80, 25, 20, 15);
image(DDbrick2A, 100, 25, 20, 15);
fill(0, 0, 0, 150);
rect(80, 0, 40, 26);

return get(80, 0, 40, 40);
        },
        DDpillar: function(){
            background(255, 0);
            fill(227, 90, 4);
rect(120, 0, 100, 20);
rect(130, 20, 80, 20);
rect(150, 70, 40, 130);
triangle(129, 40, 211, 40, 171, 110);
triangle(133, 251, 214, 251, 170, 151);
rect(133, 250, 81, 20);
rect(123, 270, 100, 20);

fill(245, 116, 37);
rect(170, 80, 20, 20);
rect(150, 100, 20, 20);
rect(170, 160, 20, 20);
rect(150, 100, 20, 20);


fill(212, 83, 2);
rect(145, 65, 50, 10);
rect(145, 115, 50, 10);
rect(145, 126, 50, 10);
rect(145, 137, 50, 10);
rect(145, 148, 50, 10);
rect(145, 180, 50, 10);
rect(145, 191, 50, 10);

fill(255, 204, 0, 100);
rect(160, 0, 20, 290);
rect(150, 0, 40, 290);
rect(140, 0, 60, 60);
rect(140, 220, 60, 70);
fill(0, 0, 0, 100);
rect(120, 0, 20, 20);
rect(200, 0, 20, 20);
rect(123, 270, 18, 20);
rect(200, 270, 23, 20);
return get(120, 0, 100, 290);
        },
        DDpillar2: function(){
            background(255, 0);
            fill(227, 90, 4);
rect(120, 0, 100, 20);
rect(130, 20, 80, 20);
rect(150, 70, 40, 130);
triangle(129, 40, 211, 40, 171, 110);
triangle(133, 251, 214, 251, 170, 151);
rect(133, 250, 81, 20);
rect(123, 270, 100, 20);

fill(245, 116, 37);
rect(170, 80, 20, 20);
rect(150, 100, 20, 20);
rect(170, 160, 20, 20);
rect(150, 100, 20, 20);


fill(212, 83, 2);
rect(145, 65, 50, 10);
rect(145, 115, 50, 10);
rect(145, 126, 50, 10);
rect(145, 137, 50, 10);
rect(145, 148, 50, 10);
rect(145, 180, 50, 10);
rect(145, 191, 50, 10);

fill(255, 204, 0, 100);
rect(160, 0, 20, 290);
rect(150, 0, 40, 290);
rect(140, 0, 60, 60);
rect(140, 220, 60, 70);
fill(0, 0, 0, 100);
rect(120, 0, 20, 20);
rect(200, 0, 20, 20);
rect(123, 270, 18, 20);
rect(200, 270, 23, 20);
fill(0, 0, 0, 30);
rect(160, 0, 20, 290);
rect(150, 0, 40, 290);
rect(140, 0, 60, 60);
rect(140, 220, 60, 70);
return get(120, 0, 100, 290);
        },
        DDmpillar: function(){
            background(255, 0);
            fill(247, 119, 8);
rect(420, 20, 40, 80);
strokeWeight(3);
stroke(120, 53, 5);
line(430, 20, 445, 50);
line(445, 50, 435, 65);
line(435, 65, 445, 80);
line(445, 80, 435, 95);
noStroke();
fill(0, 0, 0, 100);
rect(420, 20, 5, 80);
rect(420, 20, 5, 80);
rect(425, 20, 5, 80);
fill(0, 0, 0, 200);
rect(420, 65, 40, 3);
rect(420, 97, 40, 3);

fill(255, 255, 0, 100);
rect(455, 20, 5, 80);
rect(455, 20, 5, 80);
rect(455, 20, 5, 80);
rect(450, 20, 5, 80);

fill(247, 119, 8);
ball(440, 20, 40);
            return get(420, 0, 40, 120);
        },
        DDsand: function(){
            background(255, 0);
            fill(250, 230, 100);
rect(220, 0, 200, 120);
fill(252, 191, 68, 150);
rect(220, 20, 200, 20);
fill(255, 174, 0, 150);
rect(220, 40, 200, 80);
fill(227, 103, 9, 200);
rect(220, 60, 30, 30);
rect(280, 60, 30, 30);
rect(340, 60, 30, 30);
rect(400, 60, 20, 30);
rect(250, 90, 30, 30);
rect(220, 90, 30, 30);
rect(370, 90, 30, 30);
rect(340, 90, 30, 30);
image(TRI, 280, 89, 30, 30);
image(TRI2, 311, 89, 40, 31);
image(TRI, 400, 89, 20, 30);
image(TRIA, 220, 89, 30, 30);
image(TRIA2, 250, 90, 38, 30);
image(TRIA, 340, 89, 30, 30);
image(TRIA2, 370, 90, 38, 30);
for(var i = 0; i < 15; i++){
    fill(255, 225, 0);
    rect(random(0, 180) + 220, random(0, 100), 5, 5);
    
}
return get(220, 0, 200, 120);
        },
        DDcactus: function(){
            background(255, 0);
            noStroke();
fill(0, 237, 24);
rect(467, 12, 36, 90);
ellipse(485, 20, 40, 35);

fill(250, 250, 68);
rect(467, 44, 3, 7);
rect(472, 43, 3, 7);
rect(477, 42, 3, 7);
rect(482, 41, 3, 7);
rect(487, 40, 3, 7);
rect(492, 39, 3, 7);
rect(497, 38, 3, 7);
//
rect(467, 24, 3, 7);
rect(472, 23, 3, 7);
rect(477, 22, 3, 7);
rect(482, 21, 3, 7);
rect(487, 20, 3, 7);
rect(492, 19, 3, 7);
rect(497, 18, 3, 7);
//
rect(467, 64, 3, 7);
rect(472, 63, 3, 7);
rect(477, 62, 3, 7);
rect(482, 61, 3, 7);
rect(487, 60, 3, 7);
rect(492, 59, 3, 7);
rect(497, 58, 3, 7);
//
rect(467, 84, 3, 7);
rect(472, 83, 3, 7);
rect(477, 82, 3, 7);
rect(482, 81, 3, 7);
rect(487, 80, 3, 7);
rect(492, 79, 3, 7);
rect(497, 78, 3, 7);

fill(0, 0, 0, 160);
rect(467, 20, 10, 82);
fill(255, 255, 0, 125);
rect(477, 20, 26, 82);

strokeWeight(1.5);
stroke(255, 255, 0);
fill(0, 0, 0, 150);
ellipse(485, 20, 40, 35);
return get(467, 0, 40, 120);
        },
        DDZdune1: function(){
            background(255, 0);
noStroke();
fill(181, 97, 7);
//ellipse(0, 100, 100, 100);
ellipse(50, 100, 100, 100);
ellipse(100, 100, 100, 100);
ellipse(150, 100, 100, 100);
ellipse(200, 100, 100, 100);
ellipse(250, 100, 100, 100);
ellipse(300, 100, 100, 100);
ellipse(350, 100, 100, 100);
ellipse(400, 100, 100, 100);
ellipse(450, 100, 100, 100);
ellipse(500, 100, 100, 100);
ellipse(550, 100, 100, 100);
ellipse(600, 100, 100, 100);
ellipse(650, 100, 100, 100);
ellipse(700, 100, 100, 100);
ellipse(750, 100, 100, 100);
ellipse(800, 100, 100, 100);
return get(0, 0, 800, 150);
        },
        DDZdune2: function(){
            background(255, 0);
noStroke();
fill(224, 68, 16);
//ellipse(0, 100, 100, 100);
ellipse(50, 100, 100, 100);
ellipse(100, 100, 100, 100);
ellipse(150, 100, 100, 100);
ellipse(200, 100, 100, 100);
ellipse(250, 100, 100, 100);
ellipse(300, 100, 100, 100);
ellipse(350, 100, 100, 100);
ellipse(400, 100, 100, 100);
ellipse(450, 100, 100, 100);
ellipse(500, 100, 100, 100);
ellipse(550, 100, 100, 100);
ellipse(600, 100, 100, 100);
ellipse(650, 100, 100, 100);
ellipse(700, 100, 100, 100);
ellipse(750, 100, 100, 100);
ellipse(800, 100, 100, 100);
return get(0, 0, 800, 150);
        },
        DDZdune3: function(){
            background(255, 0);
noStroke();
fill(247, 186, 19);
//ellipse(0, 100, 100, 100);
ellipse(50, 100, 100, 100);
ellipse(100, 100, 100, 100);
ellipse(150, 100, 100, 100);
ellipse(200, 100, 100, 100);
ellipse(250, 100, 100, 100);
ellipse(300, 100, 100, 100);
ellipse(350, 100, 100, 100);
ellipse(400, 100, 100, 100);
ellipse(450, 100, 100, 100);
ellipse(500, 100, 100, 100);
ellipse(550, 100, 100, 100);
ellipse(600, 100, 100, 100);
ellipse(650, 100, 100, 100);
ellipse(700, 100, 100, 100);
ellipse(750, 100, 100, 100);
ellipse(800, 100, 100, 100);
return get(0, 0, 800, 150);
        },
        DDchunk: function(){
            DDBB(0, 40, 120, 120);
            return get(0, 40, 120, 120);
        },
        DDfrontb: function(){
            background(255, 0);
            fill(179, 74, 4);
rect(0, 160, 40, 40);
fill(255, 149, 0);
rect(0, 160, 20, 20);
rect(20, 180, 20, 20);
fill(250, 129, 0, 100);
rect(15, 160, 10, 40);
rect(10, 160, 20, 40);


fill(0, 0, 0, 100);
rect(0, 160, 5, 40);
rect(35, 160, 5, 40);
rect(0, 160, 10, 40);
rect(30, 160, 10, 40);
return get(0, 160, 40, 40);
        },
        DDfrontb2: function(){
            background(255, 0);
            image(DDblock, 0, 300);
image(DDbrick3B, 0, 325, 20, 15);
image(DDbrick2B, 20, 325, 20, 15);

fill(0, 0, 0, 110);
rect(0, 300, 10, 40);
rect(0, 300, 20, 40);
fill(0, 0, 0, 50);
rect(0, 300, 40, 40);
return get(0, 300, 40, 40);
        },
        
        WWbgA1: function(){
            background(255, 0);
            fill(2, 122, 2);
rect(100, 0, 180, 600);
rect(500, 0, 200, 600);
            image(WWbga1, 0, 0, 40, 600);
image(WWbga1, 70, 0, 80, 600);
image(WWbga1, 180, 0, 40, 600);
image(WWbga1, 260, 0, 60, 600);
image(WWbga1, 360, 0, 20, 600);
image(WWbga1, 390, 0, 20, 600);
image(WWbga1, 420, 0, 20, 600);
image(WWbga1, 460, 0, 40, 600);
image(WWbga1, 530, 0, 30, 600);
image(WWbga1, 590, 0, 90, 600);
image(WWbga1, 710, 0, 20, 600);
image(leaves1, 0, 0, 40, 600);
image(leaves1, 70, 0, 80, 600);
image(leaves1, 180, 0, 40, 600);
image(leaves1, 360, 0, 20, 600);
image(leaves1, 420, 0, 20, 600);
image(leaves1, 460, 0, 40, 600);
image(leaves1, 530, 0, 30, 600);
image(leaves1, 710, 0, 20, 600);
return get(0, 0, 800, 600);
        },
        WWbgp2: function(){
            background(255, 0);
            image(WWRRbga2A, 0, 200, 800, 140);
image(WWRRbga2A, 0, 270, 800, 140);
return get(0, 200, 800, 300);
        },
        WWbgp3: function(){
            background(255, 0);
            fill(6, 163, 6);
ellipse(150, 300, 140, 140);
ellipse(250, 300, 140, 140);
ellipse(350, 300, 140, 140);
ellipse(450, 300, 140, 140);
ellipse(550, 300, 140, 140);
ellipse(650, 300, 140, 140);
ellipse(750, 300, 140, 140);
return get(0, 300, 800, 190);
        },
        WWblock: function(){
            image(wooddb, 0, 0);
fill(0, 0, 0, 100);
rect(0, 0, 40, 30);
image(miniwood, 0, 0, 20, 20);
image(miniwood, 20, 0, 20, 20);
fill(255, 225, 255, 150);
rect(0, 0, 40, 2);
rect(0, 18, 40, 2);
return get(0, 0, 40, 40);
        },
        WWdirt: function(){
            image(wooddb, 40, 0);
            return get(40, 0, 40, 40);
        },
        WWlongb: function(){
            image(wooddb, 80, 0, 200, 120);
fill(46, 163, 3);
rect(80, 0, 200, 5);
rect(80, 0, 10, 30, 3);
rect(100, -10, 10, 30, 3);
rect(120, 0, 10, 40, 3);
rect(140, 0, 10, 30, 3);
rect(160, -10, 10, 30, 3);
rect(180, 0, 10, 50, 3);
rect(200, 0, 10, 30, 3);
rect(220, -10, 10, 30, 3);
rect(240, 0, 10, 30, 3);
rect(260, 0, 10, 50, 3);
return get(80, 0, 200, 120);
        },
        WWleaf: function(){
            for (var x = 0; x < 100; x++) {
  for (var y = 0; y < 100; y++) {
    // A random brightness!
    var bright = random(150);
    stroke(bright, 200, bright);
    point(x, y);
  }
}
 return get(0, 0, 100, 100);
        },
        WWscaffold: function(){
            background(255, 0);
            fill(255, 166, 0);
rect(xj-3, yf, 10, 45);
rect(xj-3, yf, 40, 10);
rect(xj+40-3, yf, 10, 45);
fill(242, 255, 0, 100);
rect(xj-3, yf+10, 10, 35);
rect(xj, yf+10, 5, 35);
rect(xj+40-3, yf+10, 10, 35);
rect(xj+40, yf+10, 5, 35);
rect(xj-3, yf-4, 50, 10);
rect(xj-3, yf+1, 50, 8);
rect(xj-3, yf+3, 50, 3);
fill(8, 199, 17);
rect(xj, yf+10, 10, 10);
rect(xj+35, yf+12, 10, 10);
rect(xj+20, yf+5, 10, 10);
rect(xj+10, yf, 10, 10);
rect(xj+40, yf, 10, 10);
return get(297, 0, 55, 45);
        },
        WWchunk1: function(){
            background(255, 0);
            strokeWeight(20);
stroke(77, 2, 71);
line(470, 470, 320, 320);
line(470, 310, 320, 470);
noStroke();
fill(145, 70, 0);
rect(300, 300, 180, 40);
rect(300, 300, 40, 180);
rect(300, 440, 180, 40);
rect(440, 300, 40, 180);
fill(255, 255, 255, 30);
rect(310, 300, 30, 180);
rect(320, 300, 20, 180);
rect(330, 300, 10, 180);
rect(440, 300, 30, 180);
rect(440, 300, 20, 180);
rect(440, 300, 10, 180);
rect(300, 440, 180, 30);
rect(300, 440, 180, 20);
rect(300, 440, 180, 10);
rect(300, 310, 180, 30);
rect(300, 320, 180, 20);
rect(300, 330, 180, 10);
image(woodc, 300, 300);
image(woodc, 440, 300);
image(woodc, 440, 440);
image(woodc, 300, 440);
return get(300, 300, 180, 180);
        },
        WWchunk2: function(){
            background(255, 0);
            strokeWeight(70);
stroke(176, 73, 0);
fill(145, 70, 0);
rect(40, 300, 120, 120);
image(woodc, 40, 300, 120, 120);
textFont(createFont("Arial Bold"));
textSize(56);
fill(247, 153, 113);
text("W\n  W", 50, 340);
noStroke();
return get(0, 265, 240, 180);
        },
        WWtrunk: function(){
            fill(145, 70, 0);
rect(400, 0, 40, 180);
fill(255, 255, 255, 20);
rect(405, 0, 30, 180);
rect(410, 0, 20, 180); 
rect(415, 0, 10, 180); 
rect(417.5, 0, 5, 180); 
return get(400, 0, 40, 180);
        },
        
        CCBG: function(){
            background(255, 0);


buildingWithHorizontalStripes(50, 60, 0.5, 0.5);
buildingWithHorizontalStripes(270, 60, 0.5, 0.5);
buildingWithHorizontalStripes(340, 60, 0.5, 0.5);
buildingWithHorizontalStripes(500, 60, 0.5, 0.5);
image(MZB, 80, 135);
image(MZB, 180, 135);
image(MZB, 370, 135);
image(MZB, 430, 135);
image(MZB, 530, 135);
return get(0, 0, 800, 350);
        },
        CCblock: function(){
            noStroke();
// new block design with colorz
fill(0);
rect(0, 0, 40, 40);
fill(255, 0, 0);
rect(0, 0, 5, 5);
fill(255, 100, 0);
rect(5, 0, 5, 5);
fill(255, 255, 0);
rect(10, 0, 5, 5);
fill(0, 255, 0);
rect(15, 0, 5, 5);
fill(3, 158, 39);
rect(20, 0, 5, 5);
fill(0, 0, 255);
rect(25, 0, 5, 5);
fill(212, 4, 212);
rect(30, 0, 5, 5);
fill(187, 0, 255);
rect(35, 0, 5, 5);
fill(4, 71, 214);
rect(0, 7.5, 40, 2.5);
fill(0, 174, 255);
rect(0, 10, 15, 10);
rect(30, 10, 15, 10);
rect(15, 10, 15, 10);
fill(255, 200, 0);
rect(0, 20, 40, 20);
fill(255, 255, 255, 150);
rect(0, 20, 40, 5);
rect(0, 10, 40, 2.5);
rect(0, 0, 40, 2);
fill(0, 0, 0, 150);
rect(0, 35, 40, 5);
rect(0, 17, 40, 2.5);
fill(120, 120, 120);
ellipse(5, 30, 5, 5);
ellipse(15, 30, 5, 5);
ellipse(25, 30, 5, 5);
ellipse(35, 30, 5, 5);
noStroke();
return get(0, 0, 40, 40);
        },
        CCfrontb1: function(){
            fill(227, 227, 3);
rect(40, 0, 40, 40);
fill(255, 0, 255);
rect(40, 6, 40, 5);
fill(0, 0, 255);
rect(40, 5, 40, 2.5, 3);
rect(40, 10, 40, 2.5, 3);
fill(0, 0, 0, 100);
rect(40, 0, 5, 40);
rect(40, 0, 10, 40);
rect(40, 0, 15, 40);
fill(252, 242, 184, 100);
rect(55, 0, 20, 40);
rect(55, 0, 15, 40);
rect(55, 0, 10, 40);
return get(40, 0, 40, 40);
        },
        CCdirtmain: function(){
            background(0);
var backImage=function(){
for(var i = 0;i<6;i++){
pushMatrix();
scale(0.75,0.75);
translate(60, 60);
for(var a = 0;a<10;a++){
stroke(10, 4, 199);
strokeWeight(9);
fill(12, 133, 245, 200);
hexagon(-70+a*60, -70+i*100, 60);
hexagon(-70+a*60+30, -70+i*100+50, 60);
noStroke();
}
popMatrix();
}
};
background(0);
backImage();
 return get(80, 0, 45, 55);
        },
        CCdirt1: function(){
            background(255, 0);
            miniCCblock(120, 0, 1, cols[rrandom]);
miniCCblock(140, 0, 1, cols[rrandom-1]);
miniCCblock(120, 20.5, 1, cols[rrandom+1]);
miniCCblock(140, 20.5, 1, cols[rrandom*1]);
miniCCblock(160, 0, 2, cols[rrandom/1]);
return get(120, 0, 40, 40);
            
        },
        CCdirt1p5: function(){
            background(255, 0);
            miniCCblock(160, 0, 2, cols[rrandom/1]);
            return get(160, 0, 40, 40);
        },
        CCdirt2: function(){
            background(255, 0);
            miniCCblock(0, 40, 2, cols[rrandom]);
            image(tri, 0, 40);
            return get(0, 40, 40, 40);
        },
        CCdirt3: function(){
            background(255, 0);
            miniCCblock(40, 40, 2, cols[rrandom]);
            fill(0, 0, 0, 100);
rect(40, 40, 40, 40);
rect(120, 40, 40, 40);
return get(40, 40, 40, 40);
        },
        CCdirt4: function(){
            background(255, 0);
            miniCCblock(120, 40, 1, cols[rrandom]);
miniCCblock(140, 40, 1, cols[rrandom-1]);
miniCCblock(120, 60, 1, cols[rrandom/1]);
miniCCblock(140, 60, 1, cols[rrandom*1]);
return get(120, 40, 40, 40);
            
        },
        CCdirt5: function(){
            CCBB(0, 0, 40, 40, color(cols[rrandom]));
            return get(0, 0, 40, 40);
        },
        
        AAblock: function(){
            background(255, 0);
            noStroke();
fill(125, 125, 125);
rect(0, 0, 45, 40);
strokeWeight(10);
stroke(140, 140, 140);
line(0, 0, 40, 1);
line(0, 15, 40, 15);
stroke(255, 255, 255, 100);
strokeWeight(2);
line(0, 1.5, 43, 1.5);
strokeWeight(3);
line(0, 12, 43, 12);
stroke(0, 0, 0, 100);
line(0, 17, 43, 17);
noStroke();
fill(186, 186, 186);
rect(5, 5, 10, 5);
rect(30, 5, 10, 5);
rect(5, 31, 5, 5);
rect(20, 31, 5, 5);
rect(35, 31, 5, 5);
fill(0, 0, 0);
rect(5, 9, 10, 1);
rect(30, 9, 10, 1);
rect(0, 36, 45, 3);
return get(0, 0, 40, 40);
        },
        AABG: function(){
            for(var i = 0; i <= 300; i++) { 
                    fill(lerpColor(color(0, 68, 255), color(161, 196, 252), i/300));
                    rect(0, i, 800, i);
                }
                return get(0, 0, 800, 300);
        },
        AAlightpost: function(){
            background(255, 0);
            fill(77, 76, 76);
rect(40, 200, 5, 150);
ellipse(42, 270, 15, 15);
fill(255, 243, 115, 150);
ellipse(43, 200, 20, 20);
fill(77, 76, 76);
arc(43, 200, 35, 35, 183, 357);
arc(42, 350, 15, 15, 183, 358);
return get(0, 150, 80, 250);
        },
        AAchunk1: function(){
            background(255, 0);
            fill(130, 128, 130);
rect(45, 0, 120, 120);
fill(255, 255, 255, 100);
rect(45, 110, 120, 10);
rect(45, 110, 120, 10);
fill(0, 0, 0, 100);
rect(45, 0, 120, 10);
rect(45, 0, 120, 10);
fill(61, 61, 61);
ellipse(55, 20, 10, 10);
ellipse(155, 20, 10, 10);
ellipse(55, 100, 10, 10);
ellipse(155, 100, 10, 10);
return get(45, 0, 120, 120);
        },
        AAchunk2: function(){
            background(255, 0);
            fill(130, 128, 130);
rect(165, 0, 120, 120);
fill(255, 255, 255, 100);
rect(165, 110, 120, 10);
rect(165, 110, 120, 10);
fill(0, 0, 0, 100);
rect(165, 0, 120, 10);
rect(165, 0, 120, 10);
fill(252, 245, 199);
rect(175, 20, 100, 80);
fill(0);
textFont(createFont("Impact Bold"));
textSize(20);
text("Wanted", 190, 40);
textSize(8);
text("50000C, Dead or Alive", 184, 95);
ellipse(225, 65, 40, 40);
fill(255);
ellipse(217, 57, 15, 15);
ellipse(235, 57, 15, 15);
fill(0);
ellipse(217, 57, 7, 7);
ellipse(235, 57, 7, 7);
fill(115, 115, 115);
ellipse(227, 68, 7, 7);
arc(220, 73, 15, 15, 70, 203);
fill(130, 128, 130);
rect(200, 15, 10, 10);
rect(170, 45, 20, 20);
rect(270, 15, 10, 50);
return get(165, 0, 120, 120);
        },
        AAcone: function(){
            background(255, 0);
            strokeWeight(2);
stroke(184, 6, 6);

fill(255, 0, 0);
triangle(34, 2, 53, 62, 13, 62);

noStroke();
fill(255, 0, 0);
rect(3, 60, 60, 5);
pushMatrix();
fill(204, 204, 204);
rotate(-21);
rect(6, 50, 15, 15);

popMatrix();
fill(255, 255, 255, 50);
rect(30, 20, 5, 40);
rect(25, 23, 15, 35);
return get(0, 0, 70, 70);
        },
        AAbgobj: function(){
            background(255, 0);
            noStroke();


fill(84, 184, 88, 230);
arc(150, 180, 50, 50, 180, 360);
noFill();
strokeWeight(4);
stroke(255, 255, 255, 100);
arc(155, 175, 50, 35, 180, 260);

noStroke();


fill(92, 92, 92);
rect(125, 180, 50, 20);
fill(173, 173, 173);
ellipse(130, 185, 5, 5);
ellipse(170, 185, 5, 5);
ellipse(130, 195, 5, 5);
ellipse(170, 195, 5, 5);
fill(255, 255, 255, 100);
rect(125, 180, 2, 20);
fill(0, 0, 0, 100);
rect(173, 180, 2, 20);
            crate(110, 200, 40, 40, 1);
crate(151, 200, 40, 40, 0);
return  get(110, 150, 80, 90);
        },
        
        TTZblock: function(){
            noStroke();


image(TTZtxtre, 0, 0, 40, 40);

fill(145, 161, 74, 200);
rect(0, 0, 40, 40);
fill(222, 200, 91, 150);
rect(0, 0, 40, 2);

fill(143, 59, 3);
rect(5, 10, 30, 5);
fill(5, 50, 171);
rect(0, 10, 5, 5);
rect(35, 10, 5, 5);
image(TTZbrick2, 0, 15, 20, 25);
image(TTZbrick2, 20, 15, 20, 25);
return get(0, 0, 40, 40);
        },
        TTZdirt: function(){
            image(TTZtxtre, 0, 0, 30, 30);
noStroke();
fill(145, 161, 74, 200);
rect(0, 0, 30, 30);
//background(145, 161, 74, 200);
strokeWeight(1.3);
fill(255, 255, 255, 0);
stroke(59, 59, 59);
rect(0,0,15,10);
rect(15,0,15,10);
rect(7,10,15,10);
rect(0,20,15,10);
rect(15,20,15,10);
return get(0, 0, 30, 30);
        },
        TTZdirt2: function(){
            image(TTZtxtre, 0, 0, 30, 30);
noStroke();
fill(47, 213, 222, 200);
rect(0, 0, 30, 30);
//background(145, 161, 74, 200);
strokeWeight(1.3);
fill(255, 255, 255, 0);
stroke(59, 59, 59);
rect(0,0,15,10);
rect(15,0,15,10);
rect(7,10,15,10);
rect(0,20,15,10);
rect(15,20,15,10);
return get(0, 0, 30, 30);
        },
        TTZdirt3: function(){
            image(TTZtxtre, 0, 0, 30, 30);
noStroke();
fill(46, 72, 217, 200);
rect(0, 0, 30, 30);
//background(145, 161, 74, 200);
strokeWeight(1.3);
fill(255, 255, 255, 0);
stroke(59, 59, 59);
rect(0,0,15,10);
rect(15,0,15,10);
rect(7,10,15,10);
rect(0,20,15,10);
rect(15,20,15,10);
return get(0, 0, 30, 30);
        },
        TTZchunk1: function(){
            image(TTZtxtre, 160, 0, 120, 120);
fill(145, 161, 74, 200);
rect(160, 0, 120, 120);

fill(0, 0, 0, 50);
rect(180, 20, 80, 80);

strokeWeight(39);
stroke(188, 217, 59, 100);
fill(255, 255, 255, 0);
rect(180, 20, 80, 80);

noStroke();
return get(160, 0, 120, 120);
        },
        TTZchunk2: function(){
            image(TTZtxtre, 280, 0, 120, 120);
fill(47, 213, 222, 200);
rect(280, 0, 120, 120);

fill(0, 0, 0, 50);
rect(300, 20, 80, 80);

strokeWeight(39);
stroke(36, 193, 201, 200);
fill(255, 255, 255, 0);
rect(300, 20, 80, 80);

noStroke();
return get(280, 0, 120, 120);
        },
        TTZchunk3: function(){
            image(TTZtxtre, 400, 0, 120, 120);
fill(46, 72, 217, 200);
rect(400, 0, 120, 120);

fill(0, 0, 0, 50);
rect(420, 20, 80, 80);

strokeWeight(39);
stroke(14, 46, 204, 200);
fill(255, 255, 255, 0);
rect(420, 20, 80, 80);

noStroke();
return get(400, 0, 120, 120);
        },
        TTZwood: function(){
            image(wooddb, 0, 80, 20, 20);
image(wooddb, 0, 100, 20, 20);
image(wooddb, 0, 120, 20, 20);
image(wooddb, 0, 140, 20, 20);
image(wooddb, 0, 160, 20, 20);
image(wooddb, 0, 180, 20, 20);
image(wooddb, 0, 200, 20, 20);
image(wooddb, 0, 220, 20, 20);
image(wooddb, 0, 240, 20, 20);
image(wooddb, 0, 260, 20, 20);
image(wooddb, 0, 280, 20, 20);
image(wooddb, 0, 300, 20, 20);
image(wooddb, 0, 320, 20, 20);
image(wooddb, 0, 340, 20, 20);
image(wooddb, 0, 360, 20, 20);
image(wooddb, 0, 380, 20, 20);
image(wooddb, 0, 400, 20, 20);
fill(148, 63, 3, 200);
rect(0, 80, 20, 340);
fill(176, 75, 7, 200);
rect(0, 80, 5, 340);
fill(94, 39, 3, 200);
rect(15, 80, 5, 340);
return get(0, 80, 20, 340);
        },
        TTZobj1: function(){
            background(255, 0);
            noStroke();
            image(TTZwood1, 0, 80, 20, 150);
image(TTZwood1, 130, 80, 20, 150);
strokeWeight(2);
stroke(87, 86, 86);
line(20, 100, 70, 120);
line(125, 105, 70, 120);


noStroke();
fill(255, 100, 0);
rect(20, 100, 10, 10);
rect(120, 100, 10, 10);

//drawLantern(213, 378, 0.2, 3, 0, 0, 0, true);
return get(0, 80, 150, 150);
        },
        TTZobj2: function(){
            background(255,0);
            image(TTZwood1, 0, 80, 20, 150);
image(TTZwood1, 130, 60, 20, 170);
fill(0, 0, 0, 100);
rect(130, 60, 20, 170);
strokeWeight(2);
stroke(87, 86, 86);
line(20, 100, 70, 120);
line(125, 105, 70, 120);


noStroke();
fill(255, 100, 0);
rect(20, 100, 10, 10);
rect(120, 100, 10, 10);

drawLantern(213, 378, 0.2, 3, 0, 0, 0, true);
return get(0, 60, 150, 170);
        },
        TTZobj3: function(){
            background(255, 0);
            image(TTZwood1, 0, 60, 20, 170);
image(TTZwood1, 130, 80, 20, 150);
fill(0, 0, 0, 100);
rect(0, 60, 20, 170);
strokeWeight(2);
stroke(87, 86, 86);
line(20, 100, 70, 120);
line(125, 105, 70, 120);


noStroke();
fill(255, 100, 0);
rect(20, 100, 10, 10);
rect(120, 100, 10, 10);

drawLantern(213, 378, 0.2, 3, 0, 0, 0, true);
return get(0, 60, 150, 170);
        },
        TTZinnerBG: function(){
            var Bricks = function(x, y, w, h) {
for(var y = y; y < h; y+=30) {
for(var one = x; one < w; one+=25) {
    fill(14, 79, 140);
    strokeWeight(3);
    stroke(54, 53, 54);
    rect(one, y, 25, 15);
}
for(var two = x-12.5; two < w; two+=25) {
    fill(14, 79, 140);
    strokeWeight(3);
    stroke(54, 53, 54);
    rect(two, y+15, 25, 15);
}
}
};
Bricks(0, 0, 800, 600);
return get(0, 0, 800, 600);
        },

        IIZblock1: function(){
            background(255, 0);
            strokeCap(ROUND);
strokeWeight(2);
stroke(255);
fill(0, 0, 255, 200);
rect(0, 0, 40, 40, 3);

            noStroke();
            rectMode(CORNER);

            fill(0);
            rect(0, 0, 122, 20);
            fill(0, 100);
            rect(0, 0, 122, 30);
            fill(222, 221, 252);
            rect(0, 0, 122, 5);
            
            fill(158, 151, 252);
            rect(0, 15, 122, 6);
            pushMatrix();
            translate(8, -3);
            scale(0.6);
            triangle(20, 12, 40, 39, 0, 39);
            popMatrix();
            pushMatrix();
            translate(48, -3);
            scale(0.6);
            triangle(20, 12, 40, 39, 0, 39);
            popMatrix();
            pushMatrix();
            translate(88, -3);
            scale(0.6);
            triangle(20, 12, 40, 39, 0, 39);
            popMatrix();

            Prism(23, -2, 0.06);
Prism(-5, -2, 0.06);
return get(0, 0, 40, 40);

        },
        IIZblock2: function(){
background(255, 0);
strokeCap(ROUND);
strokeWeight(2);
stroke(255);
fill(0, 247, 255, 200);
rect(40, 0, 40, 40, 3);

noStroke();

fill(0);
rect(0, 0, 122, 20);
fill(0, 100);
rect(0, 0, 122, 30);
fill(222, 221, 252);
rect(0, 0, 122, 5);

fill(158, 151, 252);
rect(0, 15, 122, 6);

pushMatrix();
translate(48, -3);
scale(0.6);
triangle(20, 12, 40, 39, 0, 39);
popMatrix();

Prism(63, -2, 0.06);
Prism(35, -2, 0.06);
return get(40, 0, 40, 40);
        },
        IIZblock3: function(){
        background(255, 0);

        strokeCap(ROUND);
strokeWeight(2);
stroke(255);
        fill(132, 0, 255, 200);
rect(80, 0, 40, 40, 3);

noStroke();

fill(0);
rect(0, 0, 122, 20);
fill(0, 100);
rect(0, 0, 122, 30);
fill(222, 221, 252);
rect(0, 0, 122, 5);

fill(158, 151, 252);
rect(0, 15, 122, 6);

pushMatrix();
translate(88, -3);
scale(0.6);
triangle(20, 12, 40, 39, 0, 39);
popMatrix();

Prism(103, -2, 0.06);
Prism(75, -2, 0.06);

return get(80, 0, 40, 40);



        },
        IIZsideB: function(){
            SpBl2(0, 150, 40, 40);
            return get(0, 150, 40, 40);
        },
        IIZsideB2: function(){
            SpBl2(0, 0, 40, 40);
            noStroke();
            rectMode(CORNER);

            fill(0);
            rect(0, 0, 122, 20);
            fill(0, 100);
            rect(0, 0, 122, 30);
            fill(222, 221, 252);
            rect(0, 0, 122, 5);
            
            fill(158, 151, 252);
            rect(0, 15, 122, 6);
            pushMatrix();
            translate(8, -3);
            scale(0.6);
            triangle(20, 12, 40, 39, 0, 39);
            popMatrix();

            Prism(23, -2, 0.06);
Prism(-5, -2, 0.06);

            return get(0, 0, 40, 40);
        },
        IIZdirt1: function(){
            fill(2, 2, 125);
            rect(0, 50, 40, 40);
            fill(200);
            rect(38, 50, 2, 40);
            rect(0, 88, 40, 2);
            fill(16, 4, 184);
            rect(4, 55, 30, 30);
            fill(255);
            rect(4, 55, 30, 2);
            rect(4, 55, 2,30);
            fill(2, 2, 125);
            rect(32, 57, 2, 30);
            rect(6, 83, 30, 2);
            return get(0, 50, 40, 40);
        },
        IIZdirt2: function(){
            fill(130, 155, 255);
            rect(50, 50, 40, 40);
            fill(255);
            rect(50, 50, 40, 5);
            rect(50, 50, 5, 40);
            fill(0, 0, 0);
            rect(87, 55, 3, 35);
            rect(55, 85, 35, 5);
            fill(0, 34, 168);
            rect(55, 55, 3, 30);
            rect(58, 55, 29, 3);
            fill(255, 255, 255);
            rect(84, 58, 3, 27);
            rect(58, 82, 27, 3);
            return get(50, 50, 40, 40);
        },
        IIZdirt3: function(){
            drawBlock(20, 120, 0);
            //drawBlock(80, 120, 1);
            return get(0, 100, 40, 40);
        },
        IIZdirt4: function(){
            drawBlock(80, 120, 1);
return get(60, 100, 40, 40);
        },
        IIZobj1: function(){
background(255, 0);
IIZtree(200, 200);
return get(140, 0, 120, 300);
        },
        IIZchunk1: function(){
            fill(0);
            rect(50, 300, 100, 100);
            fill(3, 3, 143);
            rect(50, 300, 100, 5);
            rect(50, 300, 5, 100);
            fill(255);
            rect(145, 300, 5, 100);
            rect(55, 395, 90, 5);
            rect(150, 295, 5, 110);
            rect(50, 400, 105, 5);
            fill(0);
            rect(45, 295, 5, 110);
            rect(45, 295, 105, 5);
            noFill();
            strokeWeight(5);
            stroke(171, 137, 245);
            rect(42, 292, 115, 115);
            noStroke();
            fill(255);
            rect(35, 285, 5, 130);
            rect(35, 285, 130, 5);
            fill(0);
            rect(160, 290, 5, 125);
            rect(40, 410, 125, 5);
            
            
            fill(223, 109, 252);
            ellipse(100, 350, 70, 70);
            fill(255, 153, 0);
            ellipse(100, 347, 10, 10);
            ellipse(125, 347, 10, 10);
            rect(105, 360, 15, 3);
            return get(35, 285, 130, 130);

        },
        IIZchunk2: function(){
            rectMode(CORNER);
            fill(0);
            rect(50, 300, 100, 100);
            fill(3, 3, 143);
            rect(50, 300, 100, 5);
            rect(50, 300, 5, 100);
            fill(255);
            rect(145, 300, 5, 100);
            rect(55, 395, 90, 5);
            rect(150, 295, 5, 110);
            rect(50, 400, 105, 5);
            fill(0);
            rect(45, 295, 5, 110);
            rect(45, 295, 105, 5);
            noFill();
            strokeWeight(5);
            stroke(171, 137, 245);
            rect(42, 292, 115, 115);
            noStroke();
            fill(255);
            rect(35, 285, 5, 130);
            rect(35, 285, 130, 5);
            fill(0);
            rect(160, 290, 5, 125);
            rect(40, 410, 125, 5);
            
            
            Vortexpast(100, 350, 0, 80, 0);
            return get(35, 285, 130, 130);

        },
        IIZchunk3: function(){
            fill(0);
            rect(50, 300, 100, 100);
            fill(3, 3, 143);
            rect(50, 300, 100, 5);
            rect(50, 300, 5, 100);
            fill(255);
            rect(145, 300, 5, 100);
            rect(55, 395, 90, 5);
            rect(150, 295, 5, 110);
            rect(50, 400, 105, 5);
            fill(0);
            rect(45, 295, 5, 110);
            rect(45, 295, 105, 5);
            noFill();
            strokeWeight(5);
            stroke(171, 137, 245);
            rect(42, 292, 115, 115);
            noStroke();
            fill(255);
            rect(35, 285, 5, 130);
            rect(35, 285, 130, 5);
            fill(0);
            rect(160, 290, 5, 125);
            rect(40, 410, 125, 5);
            
            
            pushMatrix();
    translate(70, 304);
    scale(1.5);
    fill(255, 0, 247, 150);
        arc(20, 20, 40, 40, 181, 360);
        ellipse(20, 19, 35, 35);
        ellipse(27, 14, 10, 10);
        rect(0, 20, 8, 34, 0, 0, 10, 10);
        rect(8, 20, 8, 28, 0, 0, 10, 10);
        rect(16, 20, 8, 40, 0, 0, 10, 10);
        rect(24, 20, 8, 34, 0, 0, 10, 10);
        rect(32, 20, 8, 25, 0, 0, 10, 10);
        
        fill(50, 200);
        rect(10, 12, 5, 13, 5);
        rect(25, 12, 5, 13, 5);
        popMatrix();
            return get(35, 285, 130, 130);

        },
        IIZchunk4: function(){
            fill(0);
            rect(50, 300, 100, 100);
            fill(3, 3, 143);
            rect(50, 300, 100, 5);
            rect(50, 300, 5, 100);
            fill(255);
            rect(145, 300, 5, 100);
            rect(55, 395, 90, 5);
            rect(150, 295, 5, 110);
            rect(50, 400, 105, 5);
            fill(0);
            rect(45, 295, 5, 110);
            rect(45, 295, 105, 5);
            noFill();
            strokeWeight(5);
            stroke(171, 137, 245);
            rect(42, 292, 115, 115);
            noStroke();
            fill(255);
            rect(35, 285, 5, 130);
            rect(35, 285, 130, 5);
            fill(0);
            rect(160, 290, 5, 125);
            rect(40, 410, 125, 5);
            
            
            Climbmonster(100, 375, 1.3);
            return get(35, 285, 130, 130);

        },
        IIZchunk5: function(){
            fill(0);
            rect(50, 300, 100, 100);
            fill(3, 3, 143);
            rect(50, 300, 100, 5);
            rect(50, 300, 5, 100);
            fill(255);
            rect(145, 300, 5, 100);
            rect(55, 395, 90, 5);
            rect(150, 295, 5, 110);
            rect(50, 400, 105, 5);
            fill(0);
            rect(45, 295, 5, 110);
            rect(45, 295, 105, 5);
            noFill();
            strokeWeight(5);
            stroke(171, 137, 245);
            rect(42, 292, 115, 115);
            noStroke();
            fill(255);
            rect(35, 285, 5, 130);
            rect(35, 285, 130, 5);
            fill(0);
            rect(160, 290, 5, 125);
            rect(40, 410, 125, 5);
            
            
            Winterfulpast(100, 350,80, 80, 10);
            return get(35, 285, 130, 130);

        },
        IIZice1: function(){
            noStroke();
          background(255, 0);
          pushMatrix();
rotate(-19);
fill(31, 152, 252, 50);
rect(270, 150, 70, 15);
rect(260, 180, 70, 15);
rect(240, 240, 70, 15);
rect(230, 270, 70, 15);
fill(255);
rect(330, 150, 10, 15);
rect(320, 180, 10, 15);
rect(300, 240, 10, 15);
rect(290, 270, 10, 15);

popMatrix();
strokeCap(ROUND);
strokeWeight(7);
stroke(77, 0, 255, 200);
fill(0, 0, 255, 20);
rect(300, 3, 80, 200, 6);
strokeWeight(1);
stroke(77, 0, 255, 200);
fill(0, 0, 255, 20);
rect(305, 3, 69.5, 200, 10);

noStroke();
fill(237, 240, 255, 230);
rect(315, 6, 30, 195);
rect(353, 6, 2, 195);
return get(300, 0, 80, 210);
        },
        IIZice2: function(){
noStroke();
background(255, 0);
pushMatrix();
rotate(-19);
fill(31, 152, 252, 50);
rect(270, 150, 70, 15);
rect(260, 180, 70, 15);
//rect(240, 240, 70, 15);
//rect(230, 270, 70, 15);
fill(255);
rect(330, 150, 10, 15);
rect(320, 180, 10, 15);
//rect(300, 240, 10, 15);
//rect(290, 270, 10, 15);

popMatrix();
strokeCap(ROUND);
strokeWeight(7);
stroke(77, 0, 255, 200);
fill(0, 0, 255, 20);
rect(300, 3, 80, 100, 6);
strokeWeight(1);
stroke(77, 0, 255, 200);
fill(0, 0, 255, 20);
rect(305, 3, 69.5, 100, 10);

noStroke();
fill(237, 240, 255, 230);
rect(315, 6, 30, 95);
rect(353, 6, 2, 95);
return get(300, 0, 80, 110);
        },
        IIZobj2: function(){
            background(255, 0);
            fill(250, 105, 245);
rect(500, 500, 30, 10);
fill(255, 100);
rect(502, 500, 25, 10);
rect(504, 500, 20, 10);
rect(506, 500, 15, 10);
fill(0, 111, 255);
arc(515, 500, 30, 30, 182, 361);
fill(255, 100);
arc(515, 500, 25, 30, 182, 361);
arc(515, 500, 20, 30, 182, 361);
arc(515, 500, 15, 30, 182, 361);
fill(183, 0, 255);
arc(515, 430, 30, 30, 0, 180);
rect(513, 445, 5, 40);
fill(255, 0, 234, 100);
rect(513, 445, 3, 40);
rect(513, 445, 2, 40);
fill(255, 0, 234, 100);
arc(515, 430, 25, 30, 0, 180);
arc(515, 430, 20, 30, 0, 180);
arc(515, 430, 15, 30, 0, 180);

fill(222, 174, 0);
rect(492, 425, 45, 5);
fill(255, 100, 0, 50);
rect(494, 425, 40, 5);
rect(496, 425, 35, 5);
rect(498, 425, 30, 5);


for(var i = 0; i < 19; i++){
    fill(255, 255, 255, 20);
    //ellipse(515, 380, i * 5, i * 5);
}

icicle(485, 350, 0.5, 0.5, 4);
return get(475, 340, 80, 174);

        },
        IIZobj3: function(){

background(255, 0);
noStroke();
fill(0, 162, 255, 200);
triangle(198, 31, 250, 212, 150, 212); 
fill(0, 225, 255, 200);
triangle(198, 31, 202, 212, 150, 212); 

return get(150, 30, 100, 182);

        },
        IIZbigobj: function(){

            background(255, 0);
            strokeWeight(1);
            Prism2A(200, 300, 0.3);
Prism2(230, 300, 0.3);
Prism2(260, 300, 0.3);
Prism2(290, 300, 0.3);
Prism2(320, 300, 0.3);
Prism2A(350, 300, 0.3);

Prism2A(200, 350, 0.3);
Prism2A(230, 350, 0.3);
Prism2A(260, 350, 0.3);
Prism2(290, 350, 0.3);
Prism2(320, 350, 0.3);
Prism2A(350, 350, 0.3);

Prism2A(200, 400, 0.3);
Prism2A(290, 400, 0.3);
Prism2A(320, 400, 0.3);
Prism2(350, 400, 0.3);

Prism2A(200, 450, 0.3);
Prism2A(230, 450, 0.3);
Prism2A(260, 450, 0.3);
Prism2(290, 450, 0.3);
Prism2(320, 450, 0.3);
Prism2(350, 450, 0.3);


return get(235, 335, 200, 200);
        },
        
        HHZblock: function(){
            for(var i = 0; i < 10; i ++){
                fill(i * 5 + 50);
                rect(0, 0, 40 - i * 2, 40 - i * 2);
}
fill(0, 0, 0, 100);
rect(0, 0, 40, 17);
fill(83, 84, 83);
rect(0, 0, 5, 10);
rect(10, 0, 5, 10);
rect(20, 0, 5, 10);
rect(30, 0, 5, 10);
fill(158, 158, 158);
rect(5, 0, 5, 10);
rect(15, 0, 5, 10);
rect(25, 0, 5, 10);
rect(35, 0, 5, 10);
return get(0, 0, 40, 40);
        },
        HHZdirt: function(){
            fill(61, 61, 61);
rect(40, 0, 40, 40);
fill(99, 98, 98);
ellipse(49, 30, 10, 10);
ellipse(66, 25, 20, 20);
ellipse(50, 10, 15, 15);
return get(40, 0, 40, 40);
        },
        HHZtree: function(){
            background(255, 0);
            tree4(-150, -200, 1);
pushMatrix();
rotate(-19);
drawBlockHHZ(100, 70, 20);
popMatrix();
pushMatrix();
rotate(19);
fill(255, 0, 0);
rect(142, 30, 20, 20);
fill(0, 0, 0, 30);
rect(142, 30, 10, 20);

popMatrix();

pushMatrix();
rotate(-19);
strokeWeight(3);
stroke(255);
fill(255, 0, 0);
rect(72, 151, 20, 20, 4);

noStroke();
return get(80, 0, 100, 200);
        },
        HHZruin1: function(){
            background(255, 0);
            column(220, 170, 200, 60, 0);
            return get(175, 0, 100, 200);
        },
        HHZruin2: function(){
            background(255, 0);
            column(310, 170, 190, 60, 1);
            return get(275, 0, 100, 200);
        },
        HHZobj2: function(){
            background(255, 0, 0);
            rectMode(CORNER);
            HHZblock1(0, 200, 40, 40);


fill(71, 70, 71);
rect(40, 200, 40, 40);
fill(83, 84, 83);
rect(40, 200, 40, 10);
fill(158, 158, 158);
rect(45, 200, 5, 10);
rect(55, 200, 5, 10);
rect(65, 200, 5, 10);
rect(75, 200, 5, 10);
fill(0, 0, 0, 50);
rect(60, 200, 20, 40);

HHZBlock2(80, 200, 0, 1);
HHZBlock2(120, 200, 1, 0);
image(HHZbrick1, 160, 200, 40, 40);
image(HHZblock3, 200, 200, 40, 40);
image(HHZdb, 0, 240);
image(HHZdb, 40, 240);
image(HHZdb, 80, 240);
image(HHZdb, 120, 240);
image(HHZdb, 160, 240);
image(HHZdb, 200, 240);
image(HHZdb, 0, 280);
image(HHZdb, 40, 280);
image(HHZdb, 80, 280);
image(HHZdb, 120, 280);
image(HHZdb, 160, 280);
image(HHZdb, 200, 280);
return get(0, 200, 200, 120);
        },
        HHZBobj: function(){
            background(255, 0);
            noStroke();

fill(64, 63, 64);
rect(200, 560, 200, 40);
//rect(200, 520, 160, 40);
rect(240, 480, 160, 40);

fill(79, 79, 79);
//rect(200, 560, 40, 40, 5);
image(HHZbrick2, 200, 560, 40, 40);
image(HHZbrick2, 240, 560, 40, 40);
image(HHZbrick2, 280, 560, 40, 40);
image(HHZbrick2, 320, 560, 40, 40);
image(HHZbrick2, 360, 560, 40, 40);
image(HHZbrick2, 200, 520, 40, 40);
image(HHZbrick2, 240, 520, 40, 40);
image(HHZbrick2, 280, 520, 40, 40);
image(HHZbrick2, 320, 520, 40, 40);
image(HHZbrick2, 240, 480, 40, 40);
image(HHZbrick2, 280, 480, 40, 40);
image(HHZbrick2, 320, 480, 40, 40);
image(HHZbrick2, 360, 480, 40, 40);


//(rect)(360, 560, 40, 40, 0, 0, 2, 2);
fill(13, 13, 13);
rect(240, 480, 160, 5);
rect(200, 520, 40, 5);
rect(360, 560, 40, 5);

fill(252, 252, 252, 50);
rect(380, 560, 20, 40);
rect(340, 520, 20, 40);
rect(340, 560, 40, 40);
rect(340, 480, 60, 40);
fill(0, 0, 0, 100);
rect(200, 560, 20, 40);
rect(200, 520, 20, 40);
//rect(320, 560, 40, 40);
rect(240, 480, 20, 40);

OLDdrawChar(760, 1230, 0.4);
DashPDash(265, 525, 30, 19);

pushMatrix();
noStroke();
translate(-170, 125);
rotate(-19);
fill(61, 61, 61);
rect(270, 565, 30, 30, 5);
fill(0);
ellipse(277, 572, 5, 5);
ellipse(293, 572, 5, 5);

popMatrix();
return get(200, 450, 200, 250);
        },
        
        
        
        RRBTC1BG: function(){
            background(255, 255, 255, 0);
             beginShape();

fill(89, 89, 89);
 vertex(2,341);
 vertex(57,320);
 vertex(91,335);
 vertex(118,338);
 vertex(147,316);
 vertex(188,317);
 vertex(233,324);
 vertex(258,331);
 vertex(304,311);
 vertex(316,311);
 vertex(346,317);
 vertex(365,321);
 vertex(408,310);
 vertex(398,394);
 vertex(1,398);
 vertex(0,341);
 endShape();
 

fill(171, 171, 171);
 beginShape();

 vertex(1,371);
 vertex(37,355);
 vertex(63,360);
 vertex(78,367);
 vertex(87,373);
 vertex(116,371);
 vertex(153,366);
 vertex(178,364);
 vertex(198,350);
 vertex(233,347);
 vertex(275,350);
 vertex(321,340);
 vertex(345,358);
 vertex(377,356);
 vertex(398,360);
 vertex(395,361);
 vertex(406,400);
  vertex(0,400);
 endShape();
 fill(110, 110, 110);
 

 beginShape();

 vertex(2,386);
 vertex(51,375);
 vertex(80,388);
 vertex(111,393);
 vertex(147,387);
 vertex(180,383);
 vertex(215,386);
 vertex(296,390);
 vertex(340,390);
 vertex(362,381);
 vertex(387,386);
 vertex(396,392);
 vertex(400,400);
 vertex(0,401);
 vertex(0,393);
 endShape();
 return get(0, 300, 400, 150);
            
        },
        RRblock: function(){
            background(255, 255, 255, 0);

image(groundtxtr, 0, 0, 40, 40);
fill(143, 40, 166, 150);
rect(0, 0, 40, 40);

fill(255);
ellipse(0, 0, 40, 40);
ellipse(18, 10, 40, 40);
ellipse(30, 5, 20, 20);

fill(0, 255, 0, 150);
ellipse(5, 10, 5, 5);
fill(255, 255, 0, 150);
ellipse(15, 10, 5, 5);
fill(0, 0, 255, 150);
ellipse(25, 10, 5, 5);
fill(255, 0, 255, 150);
ellipse(35, 10, 5, 5);

fill(0, 0, 255, 80);
arc(19, 15, 40, 30, 0, 179);
return get(0, 0, 40, 40);
        },
        RRdirt: function(){
            image(groundtxtr, 40, 0, 40, 40);
fill(143, 40, 166, 150);
rect(40, 0, 40, 40);
fill(255, 255, 255, 100);
rect(70, 0, 10, 40);
fill(0, 0, 0, 100);
rect(40, 0, 10, 40);
return get(40, 0, 40, 40);
        },
        RRruin1: function(){
            background(255, 0);
            fill(132, 0, 255);
rect(120, 0, 40, 120);
fill(94, 0, 255);
rect(119, 5, 43, 5, 2);
rect(119, 15, 43, 5, 2);
rect(119, 25, 43, 5, 2);
rect(119, 95, 43, 5, 2);
rect(119, 105, 43, 5, 2);
rect(119, 115, 43, 5, 2);
fill(0, 70);
rect(125, 35, 10, 55);
rect(145, 35, 10, 55);
fill(0, 40);
rect(125, 35, 3, 55);
rect(151, 35, 3, 55);
rect(125, 35, 10, 3);
rect(145, 35, 9, 3);
fill(0, 100);
rect(120, 0, 20, 120);
return get(119, 0, 43, 120);
        },
            
            
            
        BlueB: function(){
            background(255, 255, 255, 0);
            strokeWeight(2);
stroke(0);
fill(0, 0, 200);
ellipse(20, 70, 40, 40);
noStroke();
fill(64, 169, 255, 100);
ellipse(20, 68, 37, 32);
noFill();
strokeWeight(5);
stroke(255, 255, 255, 100);
arc(20, 63, 20, 15, 200, 340);
        return get(0, 50, 40, 40);
        
        },
        
        TCpalmT: function(){
            noStroke();
            background(255, 0);
            fill(7, 98, 189);
        rect(r+9, u, 20, 40);
        rect(r+5, u-40, 20, 40);
        rect(r, u-80, 20, 40);
        rect(r+9, u-120, 20, 40);
        rect(r+5, u+40, 20, 40);
        rect(r+9, u+80, 20, 40);
        rect(r+6, u+120, 20, 40);
        fill(6, 35, 161);
        rect(r, u-160, 40, 40);
        rect(r+40, u-160, 40, 40);
        rect(r-40, u-160, 40, 40);
        rect(r-50, u-140, 40, 40);
        rect(r-60, u-130, 40, 40);
        rect(r+60, u-130, 40, 40);
        rect(r+70, u-170, 30, 30);
        rect(r+80, u-180, 30, 30);
        rect(r-70, u-180, 30, 30);
        rect(r-65, u-230, 30, 30);
        rect(r+65, u-230, 30, 30);
        rect(r-80, u-180, 30, 30);
        rect(r-75, u-110, 35, 35);
        rect(r+75, u-110, 35, 35);
        rect(r, u-180, 40, 40);
        rect(r-10, u-195, 30, 30);
        rect(r+25, u-195, 30, 30);
        rect(r+35, u-205, 30, 30);
        rect(r-35, u-205, 30, 30);
        rect(r-45, u-215, 30, 30);
        rect(r+45, u-215, 30, 30);
        fill(5, 109, 245);
        rect(r+30, u-120, 30+sin(frameCount*3), 30+sin(frameCount*3));
        rect(r-20, u-120, 25+sin(frameCount*3), 25+sin(frameCount*3));
        fill(0, 98, 255, 100);
        rect(r+12, u, 13, 35);
        rect(r+12, u, 13, 35);
        rect(r+12, u, 13, 35);
        rect(r+12, u, 13, 35);
        rect(r+8, u-40, 14, 37);
        rect(r+8, u-40, 14, 37);
        rect(r+8, u-40, 14, 37);
        rect(r+3, u-80, 14, 37);
        rect(r+3, u-80, 14, 37);
        rect(r+3, u-80, 14, 37);
        rect(r+3, u-80, 14, 37);
        rect(r+12, u-120, 12, 37);
        rect(r+12, u-120, 12, 37);
        rect(r+12, u-120, 12, 37);
        rect(r+9, u+120, 13, 37);
        rect(r+9, u+120, 13, 37);
        rect(r+9, u+120, 13, 37);
        rect(r+12, u+80, 13, 37);
        rect(r+12, u+80, 13, 37);
        rect(r+12, u+80, 13, 37);
        rect(r+8, u+40, 13, 37);
        rect(r+8, u+40, 13, 37);
        rect(r+8, u+40, 13, 37);
        fill(82, 141, 250);
        rect(r+16, u, 3, 35);
        rect(r+12, u-40, 3, 37);
        rect(r+8, u-80, 3, 37);
        rect(r+14, u-120, 3, 37);
        rect(r+14, u+120, 3, 37);
        rect(r+16, u+80, 3, 37);
        rect(r+12, u+40, 3, 37);
        fill(0, 21, 255);
        rect(r+1, u-4, 35, 5);
        rect(r-8, u-44, 40, 5);
        rect(r-2, u-85, 35, 5);
        rect(r-6, u+35, 45, 5);
        rect(r+1, u+75, 35, 5);
        rect(r-6, u+115, 45, 5);
        return get(220, 70, 200, 410);
        },
        
        ELI: function(){
            background(255, 0);
            pushMatrix();
translate(-15, -440);
scale(0.8);
fill(0, 0, 200);
    ellipse(50, 580, 40, 40);
    fill(255, 255, 255);
    ellipse(40, 572, 13, 13);
    ellipse(60, 572, 13, 13);
    fill(0);
    ellipse(39, 572, 6, 6);
    ellipse(61, 572, 6, 6);
    fill(0, 221, 255);
    ellipse(50, 580, 7, 7);
    fill(255, 0, 0);
    ellipse(50, 592, 20, 10);
popMatrix();
return get(0, 0, 40, 40);
        },

            
        
        
};
//{
fill(166, 84, 2);
         rect(0, 0, 40, 40);
         fill(166, 94, 2);
         rect(5, 0, 25, 8);
         rect(0, 32, 10, 8);
         rect(30, 32, 10, 8);
var sando = get(0, 0, 40, 40);
background(255, 255, 255, 0);
strokeWeight(3);
stroke(133, 133, 133);
line(8, 8, 18, 28);
line(18, 28, 23, 14);
line(23, 14, 33, 34);
line(33, 34, 43, 14);
noStroke();
fill(255, 0, 204);
rect(0, 0, 10, 40, 10);
var leftspring = get(0, 0, 40, 40);
background(255, 255, 255, 0);
strokeWeight(3);
stroke(133, 133, 133);
line(8, 8, 18, 28);
line(18, 28, 23, 14);
line(23, 14, 33, 34);
line(33, 34, 43, 14);
line(8, 8, 2, 28);
noStroke();
fill(255, 0, 204);
rect(30, 0, 10, 40, 10);
var rightspring = get(0, 0, 40, 40);
    
fill(150, 106, 5);
            rect(0, 0, 120, 120);
            fill(140, 83, 3, 150);
            rect(0, 0, 120, 10);
            fill(163, 128, 3, 150);
            rect(0, 110, 120, 10);
var casic = get(0, 0, 120, 120);
background(255, 255, 255, 5);
fill(2, 92, 12);
        ellipse(60, 13, 52, 53);
        ellipse(30, 20, 41, 40);
        ellipse(82, 20, 41, 40);
var busch = get(0, 0, 120, 180);
background(5, 99, 232, 230);
fill(5, 99, 232, 230);
            rect(-40, 0, 40, 40);
            fill(5, 231, 235);
            rect(34, 0, 5, 40);
            rect(10, 0, 5, 40);
            rect(20, 0, 5, 40);
            rect(1, 0, 5, 40);
var chemb = get(0, 0, 40, 40);
background(255, 255, 255, 1);
fill(255, 255, 255, 150);
rect(0, 0, 40, 40);
var aquag = get(0, 0, 40, 40);
background(255, 255, 255, 1);
noFill();
            strokeWeight(2);
            stroke(201, 209, 48);
            ellipse(60, 60, 100, 100);
            stroke(185, 95, 245);
            ellipse(60, 60, 110, 110);
            fill(58, 169, 186);
            textSize(15);
            textFont(createFont("cursive"));
            text("Unwelcome", 20, 60);
var csign = get(0, 0, 130, 130);
strokeWeight(1);
    stroke(242, 39, 232);
    fill(242, 39, 232);
    rect(0, 0, 40+sin(frameCount*3), 20+sin(frameCount*3));
    fill(0);
    stroke(0);
    rect(0, 20, 40+sin(frameCount*3), 20+sin(frameCount*3));
    
var bouncey = get(0, 0, 40, 40);
noStroke();
background(255, 255, 255, 1);
fill(255, 157, 0);
        rect(0, 0, 40, 40);
        rect(0, -40, 40, 40);
        rect(0, -80, 40, 40);
        rect(0, -120, 40, 40);
        fill(2, 150, 29);
        rect(0, -160, 40, 40);
        rect(40, -160, 40, 40);
        rect(-40, -160, 40, 40);
        rect(-50, -140, 40, 40);
        rect(-60, -130, 40, 40);
        rect(60, -130, 40, 40);
        rect(70, -170, 30, 30);
        rect(80, -180, 30, 30);
        rect(-70, -180, 30, 30);
        rect(-80, -180, 30, 30);
        rect(0, -180, 40, 40);
        rect(-10, -195, 30, 30);
        rect(25, -195, 30, 30);
        rect(35, -205, 30, 30);
        rect(-35, -205, 30, 30);
        rect(-45, -215, 30, 30);
        rect(45, -215, 30, 30);
        fill(128, 90, 10);
        rect(40, -120, 20+sin(frameCount*3), 20+sin(frameCount*3));
        rect(-20, -120, 15+sin(frameCount*3), 15+sin(frameCount*3));
        fill(255, 136, 0);
        rect(10, 0, 4, 30);
        rect(20, -40, 8, 30);
        rect(10, -80, 11, 30);
        rect(20, -120, 7, 30);
var palmtre = get(0, 0, 180, 180);
/*
fill(181, 98, 2);
        rect(0, 0, 180, 180);
fill(242, 133, 8);
rect(30, 30, 120, 120);
fill(245, 174, 8);
rect(0, 0, 30, 180);
rect(0, 0, 180, 30);
fill(207, 112, 4);
rect(30, 150, 150, 30);
rect(150, 0, 30, 150);
fill(140, 137, 140);
rect(30, 60, 40, 40);
rect(90, 90, 50, 50);
rect(95, 50, 30, 30);
*/
image(dirt, 0, 120);
image(dirt, 40, 120);
image(dirt, 80, 120);
image(dirt, 120, 120);
image(dirt, 160, 120);
image(dirt, 0, 160);
image(dirt, 40, 160);
image(dirt, 80, 160);
image(dirt, 120, 160);
image(dirt, 160, 160);
image(dirt, 0, 200);
image(dirt, 40, 200);
image(dirt, 80, 200);
image(dirt, 120, 200);
image(dirt, 160, 200);
image(dirt, 0, 240);
image(dirt, 40, 240);
image(dirt, 80, 240);
image(dirt, 120, 240);
image(dirt, 160, 240);
image(dirt, 0, 280);
image(dirt, 40, 280);
image(dirt, 80, 280);
image(dirt, 120, 280);
image(dirt, 160, 280);
mainruby(40, 160, 0.3, color(99, 255, 117), color(49, 245, 82), color(71, 255, 86), color(71, 222, 102), color(29, 227, 112));
mainruby(80, 260, 0.2, color(99, 255, 117), color(49, 245, 82), color(71, 255, 86), color(71, 222, 102), color(29, 227, 112));
mainruby(130, 160, 0.1, color(99, 255, 117), color(49, 245, 82), color(71, 255, 86), color(71, 222, 102), color(29, 227, 112));
mainruby(130, 230, 0.15, color(99, 255, 117), color(49, 245, 82), color(71, 255, 86), color(71, 222, 102), color(29, 227, 112));
mainruby(150, 290, 0.25, color(99, 255, 117), color(49, 245, 82), color(71, 255, 86), color(71, 222, 102), color(29, 227, 112));

var chunk3 = get(0, 120, 160, 160);
fill(0, 127, 217);
rect(0, 0, 200, 200);
fill(2, 114, 189);
rect(0, 15, 200, 180);
fill(255, 136, 0);
rect(120, 20, 60, 90, 5);
fill(0, 255, 0);
rect(20, 20, 10, 90);
rect(40, 20, 10, 90);
fill(0, 91, 0);
rect(30, 20, 10, 90);
rect(50, 20, 10, 90);
fill(161, 6, 6);
ellipse(100, 150, 10, 10);
ellipse(120, 150, 10, 10);
fill(3, 110, 3);
rect(90, 160, 40, 5, 5);
fill(2, 19, 171);
rect(20, 120, 60, 8, 5);
rect(10, 180, 150, 8, 4);

var chunk4 = get(0, 0, 200, 200);

fill(214, 106, 4);
rect(0, 0, 120, 120);
fill(209, 151, 4);
rect(110,0, 10, 120);
rect(0, 110, 120, 10);
fill(171, 85, 5);
rect(10, 10, 100, 100);
fill(137, 140, 137);
ellipse(30, 30, 30, 30);
ellipse(80, 80, 60, 60);
ellipse(20, 100, 10, 10);
ellipse(80, 30, 30, 30);
var chunk3a = get(0, 0, 120, 120);
background(255, 255, 255, 1);
fill(0, 107, 0);
        ellipse(0, height - 200, 150, 150);
        ellipse(75, height - 60, 100, 100);
        ellipse(155, height - 60, 100, 100);
var b = get(0, 0, 200, 200);

fill(0, 157, 255);
rect(0, 0, 120, 120);
fill(0, 20);
rect(0, 10, 120, 110);
fill(3, 73, 138);
gear(60, 55, 60, 0, 9, 10, 1.3, 4);

var chunk3b = get(0, 0, 120, 120);
noStroke();
for(var i = 0; i < 25; i++){

image(acidd, i * 9 * 4, 0);
}
var MMacid = get(0, 0, 800, 40);
noStroke();
for(var i = 0; i < 25; i++){

image(acidd2, i * 9 * 4, 0);
}
var RRLava = get(0, 0, 800, 40);

var SpringM = function(){
    this.rot = 0;
    this.chomp = 200;
    this.eating = true;
};
SpringM.prototype.draw = function(x,y,z) {
    translate(x,y);
    scale(z/400);
    
    stroke(0, 0, 0);
    strokeWeight(5);
    fill(0, 255, 9);
    rect(0,0,100,100,2);
    
    pushMatrix();//mouth
    if (this.eating === true){
    translate(0,25+sin(frameCount * -3) * 24);
    scale(400/400,this.chomp/400);
    }
    pushMatrix();
    this.chomp = 200+sin(frameCount * 3) * 199;
    popMatrix();
    
    stroke(0, 0, 0);
    strokeWeight(3);
    fill(0, 0, 0);
    rect(15,29,70,62,10);
    
    pushMatrix();
    translate(-5,0);
    rotate(0);
    
    noStroke();
    fill(255, 255, 255);
    triangle(30,29,45,29,39,53);
    
    popMatrix();
    
    pushMatrix();
    translate(30,0);
    rotate(0);
    
    noStroke();
    fill(255, 255, 255);
    triangle(30,29,45,29,39,53);
    
    popMatrix();
    
    
    pushMatrix();
    translate(70,121);
    rotate(180);
    
    noStroke();
    fill(255, 255, 255);
    triangle(30,29,45,29,39,53);
    
    popMatrix();
    
    
    pushMatrix();
    translate(108,121);
    rotate(180);
    
    noStroke();
    fill(255, 255, 255);
    triangle(30,29,45,29,39,53);
    
    popMatrix();
    
    popMatrix();
    
    
    fill(255, 255, 255);
    ellipse(14,25,30,30);
    ellipse(87,25,30,30);
    pushMatrix();
    translate(13,26);
    rotate(this.rot);
    fill(0, 0, 0);
    ellipse(0,5,10,10);
    popMatrix();
    pushMatrix();
    translate(87,26);
    rotate(this.rot-180);
    fill(0, 0, 0);
    ellipse(0,5,10,10);
    popMatrix();
    this.rot += 3;
    
    stroke(0, 0, 0);
    pushMatrix();
    translate(0,0+ sin (frameCount * 1) * 20);
    fill(10, 199, 4);
    ellipse(122,50,30,30);
    popMatrix();
    
    pushMatrix();
    translate(0,0+ sin (frameCount * -1) * 20);
    fill(10, 199, 4);
    ellipse(-22,50,30,30);
    popMatrix();
    
    
    
    
    pushMatrix();
    strokeWeight(7);
    stroke(110, 109, 109);
    line(10, -45, 70, -20);
    line(70, -20, 30, -3);
    
    
    popMatrix();
    
    
    pushMatrix();
    noStroke();
    fill(255, 0, 247);
    rect(0, -50, 110, 20, 10);
    
    popMatrix();
    
    noStroke();
};
var Sp = new SpringM();
background(255, 0);
noStroke();

fill(255, 0, 0, 30);
rect(0, 0, 800, 600);
for(var i = 0; i < 600; i++){
    fill(0, 0, 0, 100);
    rect(0, i * 1 * 3, 800, 0.5);
    
}
var crtf = get(0, 0, 800, 600);
background(255, 0);
noStroke();

fill(1, 255, 1, 25);
rect(0, 0, 800, 600);
for(var i = 0; i < 600; i++){
    fill(0, 0, 0, 100);
    rect(0, i * 1 * 3, 800, 0.5);
    
}
var crtf2 = get(0, 0, 800, 600);
background(255, 0);
noFill();
strokeWeight(2);
stroke(0, 0, 0, 50);
for(var i = 0; i < 600; i++){
    for(var j = 0; j < 600; j++){
    rect(i * 1 * 3, j* 1 * 3, 2, 2);
    }
}
var crtf3 = get(0, 0, width, height);

//}

//Level assets 2{






image(rrdirt2, 310, 0, 100, 100);


var rrdirt6 = get(310, 0, 100, 100);

background(255, 0);
// Back, back one
//{
    noStroke();
    fill(237, 82, 35);
    triangle(227, 393, 371, 318, 328, 252);
    //}
    
    // Back row
    //{
    fill(245, 84, 35);
    noStroke();
    quad(4, 308, 226, 379, 156, 258, 48, 253);
    triangle(163, 303, 278, 292, 202, 246);
    //}
    
    // 2nd row
    //{
    noStroke();
    fill(181, 47, 6);
    triangle(111, 284, 600, 510, 43, 318);
    triangle(269, 283, 504, 543, 89, 315);
    triangle(358, 261, 820, 601, 257, 369);
    triangle(-19, 231, 317, 543, -101, 315);
    triangle(577, 278, 667, 463, 256, 351);
    rect(0, 320, 800, 200);
    
    pushMatrix();
    translate(21, -15);
    strokeWeight(0);
    stroke(181, 47, 6);
    line(221, 477, 146, 311);
    line(183, 477, 148, 308);
    line(128, 445, 152, 311);
    popMatrix();
    var DDZB1 = get(0, 210, 800, 170);

    background(255, 0);
noStroke();
//Mountain range
fill(128, 69, 5);
triangle(-10, 500, 10, 450, 40, 500);
triangle(0, 500, 35, 440, 70, 500);
triangle(40, 500, 63, 470, 80, 500);
triangle(80, 500, 110, 450, 140, 500);
triangle(120, 500, 135, 480, 148, 500);
for(var i = 153; i < 180; i += 9){
    triangle(i-7, 500, i, 490, i+7, 500);
}
triangle(180, 500, 200, 460, 220, 500);
triangle(200, 500, 230, 430, 260, 500);
triangle(235, 500, 255, 470, 270, 500);
triangle(270, 500, 285, 470, 300, 500);
triangle(280, 500, 305, 450, 330, 500);
triangle(300, 500, 330, 435, 360, 500);
triangle(330, 500, 350, 460, 375, 500);
triangle(450, 500, 460, 480, 490, 500);
triangle(460, 500, 480, 450, 500, 500);
triangle(480, 500, 500, 480, 510, 500);
triangle(530, 500, 560, 435, 590, 500);
triangle(580, 500, 595, 475, 610, 500);

//Mountain overlay
fill(125, 47, 1);
triangle(-10, 500, 10, 460, 40, 500);
triangle(0, 500, 35, 450, 70, 500);
triangle(40, 500, 63, 475, 80, 500);
triangle(80, 500, 110, 460, 140, 500);
triangle(120, 500, 135, 485, 148, 500);
for(var i = 153; i < 180; i += 9){
    triangle(i-7, 500, i, 493, i+7, 500);
}
triangle(180, 500, 200, 470, 220, 500);
triangle(200, 500, 230, 443, 260, 500);
triangle(235, 500, 255, 478, 270, 500);
triangle(270, 500, 285, 477, 300, 500);
triangle(280, 500, 305, 458, 330, 500);
triangle(300, 500, 330, 445, 360, 500);
triangle(330, 500, 350, 468, 375, 500);
triangle(450, 500, 460.5, 485, 490, 500);
triangle(460, 500, 480, 460, 500, 500);
triangle(480, 500, 499.5, 485, 510, 500);
triangle(530, 500, 560, 447, 590, 500);
triangle(580, 500, 595, 483, 610, 500);

//Ground
arc(400, 504, 1000, 15, 181, 360);
rect(-1, 500, 601, 140);
var DDZB1A = get(0, 430, 600, 150);
background(255, 0);
//some sand
fill(222, 180, 13);
beginShape();
curveVertex(-3, 293);
curveVertex(-3, 268);
curveVertex(172, 306);
curveVertex(312, 278);
curveVertex(463, 323);
curveVertex(613, 308);
curveVertex(613, 633);
curveVertex(-6, 633);
curveVertex(-15, 293);
endShape();
var DDZBP = get(0, 260, 600, 150);
background(255, 0);
//some sand
fill(222, 124, 13);
beginShape();
curveVertex(-3, 293);
curveVertex(-3, 268);
curveVertex(172, 306);
curveVertex(312, 278);
curveVertex(463, 323);
curveVertex(613, 308);
curveVertex(613, 633);
curveVertex(-6, 633);
curveVertex(-15, 293);
endShape();
var DDZBP2 = get(0, 260, 600, 150);




//}

// BG assets 1: {
var c = color(random(150, 255), random(150, 255), random(150, 255));

fill(19, 9, 48);
rect(0, 0, 800, 150);
fill(224, 168, 218);
rect(0, 130, 800, 3, 10);
fill(235, 174, 229);
rect(0, 132, 800, 3);
fill(240, 180, 235);
rect(0, 134, 800, 3);
fill(245, 196, 241);
rect(0, 136, 800, 3);
fill(0);
rect(0, 140, 800, 10);
rect(10, 130, 20, 20);
rect(70, 120, 60, 30);
rect(190, 120, 60, 30);
rect(360, 120, 30, 30);
rect(490, 130, 20, 20);
rect(610, 130, 20, 20);
rect(750, 110, 40, 40);
var ssback = get(0, 0, 800, 150);
background(255, 255, 255, 0);
fill(77, 2, 76);
rect(0, 300, 800, 300);
var buildH = [];
var city = function() {
    for (var i = 3; i < 500; i += 20) {
        rectMode(CORNERS);
        fill(156, 3, 113);
        rect(i, buildH[i], i+15, 295);
        rectMode(CORNER);
        
        if (buildH[i] < 280 && buildH[i] > 270) {
            triangle(i+7, buildH[i]-10, i, buildH[i]+1, i+15, buildH[i]+1);
        }
        if (buildH[i] < 270 && buildH[i] > 260) {
            rect(i+6, buildH[i]-10, 3, 10);
            fill(213, 0, 255);
            ellipse(i+7.5, buildH[i]-10, 4, 4);
        }
        if (buildH[i] < 260 && buildH[i] > 250) {
            fill(97, 0, 68);
            triangle(i+7, buildH[i]-10, i, buildH[i]+1, i+15, buildH[i]+1);
            rect(i+5.5, buildH[i]-15, 3, 10);
            fill(0, 54, 107);
            ellipse(i+7.4, buildH[i]-15, 4, 4);
        }
    }
};
for (var i = 0; i < 500; i++) {
    buildH[i] = random(250, 280);
}
city();
var ssminic = get(0, 0, 800, 600);
var sizes = [7];
var xPos = [200];
var yPos = [200];
background(0);
for(var i = 0; i<900 ; i++){
    xPos.push(random(0, 400));
    yPos.push(random(0,354));
    sizes.push(random(2.5,1.4));
}
for(var a=0; a<xPos.length ; a++){
    fill(c);
    ellipse(xPos[a], yPos[a], sizes[a], sizes[a]);
}
var sstars = get(0, 0, 800, 600);
for(var a=0; a<xPos.length ; a++){
    fill(random(255), random(255), random(255));
    ellipse(xPos[a], yPos[a], sizes[a], sizes[a]);
}
var sstars2 = get(0, 0, 800, 250);
background(255, 255, 255, 0);
rectMode(CENTER);

fill(0);
rect(200, 300, 800, 200);
rect(35, 185, 75, 150); // Buildings
rect(210, 210, 75, 280);
rect(255, 195, 75, 290);
rect(470, 225, 90, 70);
rect(110, 247, 75, 325);
rect(235, 222.5, 55, 75);
rect(400, 185, 50, 150);
rect(580, 210, 50, 100);
rect(-15, 215, 75, 90);
rect(130, 207, 65, 265);
rect(360, 147.5, 75, 225);
rect(525, 185, 75, 150);


fill(0, 255, 0);
rect(190, 80, 10, 10);
rect(215, 80, 10, 10);
rect(235, 80, 10, 10);
rect(335, 80, 10, 10);
rect(60, 130, 10, 10);
rect(360, 130, 10, 10);
fill(250, 115, 230);
rect(190, 105, 10, 10);
rect(90, 105, 10, 10);
rect(260, 147.5, 10, 10);
rect(365, 80, 10, 10);
rect(10, 175, 10, 10);
rect(340, 65, 10, 10);
rect(370, 65, 10, 10);
fill(255);
rect(10, 130, 10, 10);
rect(60, 155, 10, 10);
rect(10, 155, 10, 10);
rect(370, 45, 10, 10);
rect(340, 115, 10, 10);
rect(340, 95, 10, 10);
rect(340, 45, 10, 10);
rect(120, 105, 10, 10);
rect(190, 125, 10, 10);
rect(60, 210, 10, 10);
rect(90, 125, 10, 10);
fill(255, 0, 0);
rect(435, 207.5, 10, 10);
rect(455, 207.5, 10, 10);
rect(155, 207.5, 10, 10);
rect(60, 230, 10, 10);
rect(60, 115, 10, 10);
rect(360, 115, 10, 10);
rect(230, 115, 10, 10);

var ssbuilding = get(0, 60, 800, 250);
background(255, 255, 255, 0);
pushMatrix();
var rectX;
fill(219, 4, 219);
beginShape();
    vertex(0, 350);
    vertex(20, 350);
    vertex(20, 274);
    vertex(103, 274);
    vertex(103, 350);
    vertex(123, 350);
    vertex(123, 294);
    vertex(149, 294);
    vertex(149, 352);
    vertex(164, 352);
    vertex(164, 280);
    vertex(187, 280);
    vertex(187, 302);
    vertex(218, 302);
    vertex(218, 315);
    vertex(254, 315);
    vertex(254, 350);
    vertex(265, 350);
    vertex(265, 259);
    vertex(275, 259);
    vertex(282, 220);
    vertex(289, 259);
    vertex(299, 259);
    vertex(299, 350);
    vertex(317, 350);
    vertex(317, 328);
    vertex(346, 328);
    vertex(346, 312);
    vertex(365, 312);
    vertex(365, 241);
    vertex(410, 241);
    vertex(410, 350);
    vertex(428, 350);
    vertex(428, 292);
    vertex(458, 292);
    vertex(458, 350);
    vertex(477, 350);
    vertex(477, 319);
    vertex(500, 300);
    vertex(520, 320);
    vertex(520, 350);
    vertex(530, 350);
    vertex(530, 329);
    vertex(553, 329);
    vertex(553, 312);
    vertex(585, 312);
    vertex(585, 350);
    vertex(598, 350);
    vertex(598, 314);
    vertex(618, 314);
    vertex(618, 236);
    vertex(618, 236);
    vertex(639, 236);
    vertex(639, 316);
    vertex(661, 316);
    vertex(661, 335);
    vertex(679, 335);
    vertex(679, 350);
    vertex(710, 350);
    vertex(700, 500);
    vertex(0, 500);
endShape();
var ssbuildingf = get(0, 200, 400, 150);
background(255, 255, 255, 0);
var buildingWithVerticalStripes = function(x,y,sx,sy) {
    pushMatrix();
        translate(x,y);
        scale(sx,sy);
        for (var i = 0; i < 142; i++) {
            fill(lerpColor(color(28, 0, 87),color(46, 51, 153),i / 175));
            rect(0, i+-3, 54, 6);
        }
        for(var i = 0; i < 9; i++) {
            stroke(127, 179, 224,80);
            rect(6*i,-2,0,145);
        }
        textSize(30);
        fill(55, 172, 214);
        text(". ",41,20);
        text(". ",41,100);
        text("..",5,63);
    popMatrix();
};
var buildingWithHorizontalStripes = function(x,y,sx,sy) {
    noStroke();
    pushMatrix();
        translate(x,y);
        scale(sx,sy);
        for (var i = 0; i < 77; i++) {
            fill(lerpColor(color(209, 11, 206),color(8, 100, 212),i / 135));
            rect(-58, i+123, 18, 81);
        }
        
        fill(142, 0, 189);
        rect(-44,124,82, 156);
        for(var i = 0; i < 9; i++){
            noStroke();
            fill(58, 0, 94,50);
            rect(-44,123,83,20*i);
            rect(-44,125,83,21*i);
        }
        for(var i = 18; i < 41; i++) {
            stroke(166, 198, 224,80);
            rect(-43,7*i,81,0);
        }
        
        textSize(20);
        fill(33, 218, 255);
        text("` ```` `",-11,175);
        text("````` `",-41,216);
        noStroke();
    popMatrix();
};
var buildingOnNeedleTower = function(x,y,sx,sy) {
    pushMatrix();
        translate(x,y);
        scale(sx,sy);
        noStroke();
        fill(34, 43, 133);
        rect(-5,0,30,35,10);
        fill(0, 10, 82);
        rect(-5,28,30,6,11);
        fill(56, 98, 156);
        rect(-3,2,27,5,12);
        fill(46, 113, 219);
        rect(-5,9,30,3,11);
        for(var i =-1; i< 4; i++){
            rect(8*i,19,3,3);
        }
    popMatrix();
};
var buildingOnBottomRight = function(x,y,sx,sy) {
    pushMatrix();
        translate(x,y);
        scale(sx,sy);
        fill(0, 16, 89);
        rect(138,-39,79,82);
        for(var i = 0; i < 37; i++) {
            fill(lerpColor(color(0, 42, 105),color(113, 175, 209),i / 85));
            rect(0, i+5, 138, -2);
            rect(163, i+5, 129, -2);
        }
        fill(0, 42, 105);
        rect(58,-39,80,44);
        fill(49, 129, 176);
        rect(0,32,138,10);
        rect(162,32,118,10);
        stroke(0, 120, 212);
        strokeWeight(2);
        line(76,-14,59,-14);
        line(76,-14,90,-21);
        line(109,-21,90,-21);
        line(155,2,136,2);
        line(115,-7,136,2);
        line(115,-7,90,-7);
        line(216,-13,185,-13);
        noStroke();
    popMatrix();
};
var cylinderBuilding = function(x,y,sx,sy) {
    pushMatrix();
        translate(x,y);
        scale(sx,sy);
        noStroke();
        fill(148, 15, 141);
        rect(20,48,99,321,2);
        fill(27, 114, 171);
        rect(83,48,38,321,2);
        for(var i = 0.9; i < 26; i++){
            stroke(37, 0, 79,50);
            strokeWeight(4*i);
            fill(37, 0, 79,50);
            rect(69,79,4,265);
        }
        noStroke();
        fill(33, 70, 115);
        triangle(50,31,51,17,86,31);
        
        fill(37, 0, 79);
        beginShape();
            vertex(20,47);
            vertex(20,33);
            vertex(51,16);
            vertex(49,29);
            vertex(76,30);
            vertex(89,22);
            vertex(121,22);
            vertex(121,47);
        endShape();
        
        textSize(6);
        fill(110, 35, 250);
        text("# ### ### ",20,82);
        text("# ### ##### ## #####",20,65);
        text("# ### ##### ## #####  #####",41,104);
        text("# ### ##### ##",79,172);
        fill(207, 25, 207);
        text("# ### ##### ##",26,213);
        text("# ### ##### #### ## ##",55,260);
        text("# ### ###",24,307);
    popMatrix();
};
var buildingWithBorder = function(x,y,sx,sy,c) {
    pushMatrix();
        translate(x,y);
        scale(sx,sy);
        fill(65, 9, 128);
        rect(0,0,50,116);
        fill(225, 26, 235);
        rect(-8,0,5,115);
        rect(52,0,5,115);
        rect(-2,-7,53,5);
        for(var i = 0; i < 15; i++) {
            stroke(c,80);
            rect(0,8*i,49,0);
        }
    popMatrix();
    
};
var needleTower = function() {
    pushMatrix();
        translate(95,-6);
        for(var i = 0; i < 45; i++) {
            fill(lerpColor(color(40, 51, 153),color(173, 230, 255),i / 101));
            beginShape();
                vertex(150,20*i);
                vertex(142,395*i);
                vertex(168,481*i);
                vertex(153,20*i);
            endShape(CLOSE);
        }
        stroke(31, 136, 255);
        strokeWeight(3);
        line(146,405,152,21);
    
        
        stroke(35, 48, 161);
        strokeWeight(5);
        line(156,73,146,73);
        line(154,57,149,57);
        
        buildingOnNeedleTower(143,254,1,1);
        
        buildingOnNeedleTower(144,190,0.9,0.9);
        
        buildingOnNeedleTower(144,118,0.9,0.9);
        buildingOnNeedleTower(146,92,0.7,0.7);
    popMatrix();
};
rectMode(CORNER);
pushMatrix();
needleTower();
buildingWithHorizontalStripes(200, -60, 1, 2);
buildingWithVerticalStripes(100, 50, 1, 3);
buildingOnBottomRight(250, 350, 0.9, 0.7);
cylinderBuilding(300, 150, 1, 1);
cylinderBuilding(450, 150, 1, 1);
popMatrix();
var ssfs = get(0, 50, 800, 400);
background(255, 255, 255, 0);
    rect(0, 200, 80, 200);
    rect(65, 180, 5, 20);
    for (var i = 10; i < 70; i += 35) {
        for (var j = 210; j < 400; j += 40) {
            fill(247, 255, 0);
            rect(i, j, 20, 25);
        }
    }
    fill(97, 2, 97);
    rect(100, 240, 80, 200);
    rect(110, 220, 5, 20);
    for (var i = 113; i < 150; i += 35) {
        for (var j = 250; j < 400; j += 40) {
            fill(247, 255, 0);
            rect(i, j, 20, 25);
        }
    }
    fill(97, 2, 97);
    rect(205, 225, 155, 200);
    rect(220, 205, 5, 20);
    for (var i = 220; i < 351; i += 35) {
        for (var j = 240; j < 400; j += 40) {
            fill(247, 255, 0);
            rect(i, j, 20, 25);
        }
    }
    
var veryfrontb = get(0, 0, 400, 400);

            
            background(255, 255, 255, 0);
            fill(171, 171, 171);
rect(0, 300, 800, 50);
fill(176, 176, 176);
rect(0, 300, 25, 45);
rect(50, 300, 25, 45);
rect(150, 300, 25, 45);
rect(300, 300, 25, 45);
rect(350, 300, 25, 45);
rect(450, 300, 25, 45);
rect(500, 300, 25, 45);
rect(600, 300, 25, 45);
rect(650, 300, 25, 45);
rect(750, 300, 25, 25);
rect(0, 300, 25, 25);
fill(255, 255, 255, 100);
rect(0, 300, 800, 5);
Mpole(10, 350, 30);
Mpole(200, 350, 30);
Mpole(400, 350, 30);
Mpole(600, 350, 30);
Mpole(750, 350, 30);
Mfactory(40, 350, 50);
Mfactory(120, 350, 50);
Mfactory(250, 350, 50);
Mfactory(320, 350, 50);
Mfactory(430, 350, 50);
Mfactory(520, 350, 50);
Mfactory(650, 350, 50);

    

var MMmiddle = get(0, 300, 800, 100);
            background(255, 0);
            
fill(93, 88, 112);
rect(0, 502, 800, 50);
fill(255, 255, 255, 100);
rect(0, 502, 800, 15);
fill(0, 0, 0, 100);
rect(0, 542, 800, 10);


strokeWeight(3);
stroke(94, 94, 94);
noFill();
rect(0, 400, 10, 150);
rect(300, 400, 10, 150);
rect(600, 400, 10, 150);
rect(40, 450, 10, 100);
rect(150, 450, 10, 100);
rect(270, 450, 10, 100);
rect(350, 450, 10, 100);
rect(390, 420, 10, 130);
rect(530, 420, 10, 130);
rect(630, 420, 10, 130);
rect(700, 470, 10, 80);
rect(740, 470, 10, 80);
noStroke();



Mpole(40, 540, 140);
Mpole(440, 550, 150);
noStroke();

fill(168, 168, 168);
rect(30, 420, 100, 132);
rect(330, 420, 100, 132);
rect(630, 420, 100, 132);
fill(255, 221, 0);
rect(30, 430, 100, 10);
rect(30, 520, 100, 10);
rect(330, 430, 100, 10);
rect(330, 520, 100, 10);
rect(630, 430, 100, 10);
rect(630, 520, 100, 10);
textSize(70);
text("☢", 35, 505);
text("☢", 335, 505);
text("☢", 635, 505);
fill(255, 255, 255, 100);
rect(60, 420, 70, 132);
rect(360, 420, 70, 132);
rect(660, 420, 70, 132);

fill(0, 0, 0, 100);
rect(30, 420, 20, 132);
rect(330, 420, 20, 132);
rect(630, 420, 20, 132);
fill(173, 138, 173);
rect(60, 522, 70, 30);
rect(110, 492, 15, 30);
rect(360, 522, 70, 30);
rect(410, 492, 15, 30);
rect(660, 522, 70, 30);
rect(710, 492, 15, 30);



image(bbuilding, 180, 425, 80, 130);
Mfactory(300, 553, 50);
Mfactory(650, 553, 50);


image(scranez, 0, 460);
image(scranez, 300, 460);
image(scranez, 170, 470, 90, 90);
image(scranez, 670, 470, 90, 90);



image(bbuilding, 460, 425);
image(bbuilding, 550, 425);
image(scranez, 500, 460);

var MMfront = get(0, 400, 800, 160);

            background(255, 0);
            fill(255, 102, 245);
rect(0, 450, 800, 50);
rect(0, 480, 800, 20);
fill(0);
ellipse(120, 500, 30, 30);
ellipse(380, 500, 30, 30);
ellipse(520, 500, 30, 30);
ellipse(590, 500, 30, 30);
ellipse(690, 500, 30, 30);
ellipse(770, 500, 30, 30);
fill(179, 179, 179);
rect(0, 500, 800, 40);
fill(99, 99, 99);
rect(0, 530, 800, 20);

for(var i = 0; i < 45; i++){
    fill(102, 102, 102, 150);
    ellipse(i * 9 * 8, 465, 15, 15);
    stroke(0, 0, 0);
    fill(71, 148, 104);
    rect(i * 9 * 8, 508, 15, 15, 3);
    noStroke();
    
}
noStroke();

fill(191, 191, 191);
rect(30, 420, 40, 110);
rect(430, 410, 40, 120);
rect(630, 430, 40, 100);

fill(0, 0, 255);
rect(40, 420, 20, 110);
rect(440, 410, 20, 120);
rect(640, 430, 20, 100);

fill(191, 191, 191);
rect(30, 420, 40, 10);
rect(30, 440, 40, 10);
rect(30, 460, 40, 10);
rect(30, 480, 40, 10);
rect(30, 500, 40, 10);
rect(430, 410, 40, 10);
rect(430, 430, 40, 10);
rect(430, 450, 40, 10);
rect(430, 470, 40, 10);
rect(430, 490, 40, 10);
rect(630, 420, 40, 10);
rect(630, 440, 40, 10);
rect(630, 460, 40, 10);
rect(630, 480, 40, 10);
rect(630, 500, 40, 10);
var MMvfront = get(0, 400, 800, 200);
background(255, 0);
strokeWeight(3);
    stroke(196, 196, 196);
    fill(148, 148, 148);

    for (var i = 0; i < 400; i += 170) {
        rect(i, 260, 25, 50);
        rect(i - 10, 275, 25, 55);
        rect(i + 85, 265, 30, 55);
        rect(i + 95, 285, 30, 55);
        rect(i + 20, 290, 50, 25);
        
        beginShape();
        vertex(i + 225 - 175, 210 + 50);
        vertex(i + 240 - 175, 210 + 50);
        vertex(i + 240 - 175, 200 + 52);
        vertex(i + 255 - 175, 200 + 52);
        vertex(i + 255 - 175, 270 + 50);
        vertex(i + 225 - 175, 260 + 50);
        endShape(CLOSE);
    }
var MMBB = get(155, 250, 150, 95);
noStroke();
background(255, 0);
fill(153, 67, 240, 200);
rect(0, 0, 800, 20);
fill(191, 2, 182, 200);
rect(0, 50, 800, 25);
MMcloud(-200, -260, 1);
MMcloud(-0, -260, 1);
MMcloud(200, -260, 1);
MMcloud(-100, -80, 0.5);
MMcloud(-0, -80, 0.5);
MMcloud(100, -80, 0.5);
MMcloud(200, -80, 0.5);
MMcloud(300, -80, 0.5);
MMcloud(400, -80, 0.5);


image(MMBB, 0, 130);
image(MMBB, 140, 130);
image(MMBB, 280, 130);
image(MMBB, 420, 130);
image(MMBB, 560, 130);
image(MMBB, 700, 130, 80, 90);
fill(156, 156, 156);
rect(0, 190, 800, 250)
var MMB1 = get(0, 0, 800, 250);

noStroke();
background(255, 0);
fill(89, 89, 89);
beginShape();
    vertex(0, 195);
    vertex(40, 195);
    vertex(40, 261);
    vertex(51, 261);
    vertex(51, 178);
    vertex(62, 178);
    vertex(62, 162);
    vertex(82, 162);
    vertex(82, 178);
    vertex(93, 178);
    vertex(93, 249);
    vertex(103, 249);
    vertex(103, 178);
    vertex(117, 142);
    vertex(131, 178);
    vertex(131, 268);
    vertex(136, 268);
    vertex(136, 206);
    vertex(163, 206);
    vertex(163, 268);
    vertex(176, 268);
    vertex(176, 147);
    vertex(201, 147);
    vertex(201, 240);
    vertex(208, 240);
    vertex(208, 128);
    vertex(230, 128);
    vertex(230, 301);
    vertex(236, 301);
    vertex(236, 215);
    vertex(248, 190);
    vertex(261, 215);
    vertex(261, 301);
    vertex(266, 301);
    vertex(266, 222);
    vertex(276, 222);
    vertex(276, 204);
    vertex(286, 204);
    vertex(286, 167);
    vertex(303, 167);
    vertex(303, 201);
    vertex(313, 201);
    vertex(313, 254);
    vertex(320, 254);
    vertex(320, 283);
    vertex(331, 283);
    vertex(331, 167);
    vertex(351, 167);
    vertex(351, 283);
    vertex(367, 283);
    vertex(367, 142);
    vertex(417, 142);
    vertex(417, 295);
    vertex(428, 295);
    vertex(428, 204);
    vertex(446, 204);
    vertex(446, 192);
    vertex(469, 192);
    vertex(469, 204);
    vertex(484, 204);
    vertex(484, 223);
    vertex(503, 223);
    vertex(503, 295);
    vertex(513, 295);
    vertex(513, 223);
    vertex(520, 223);
    vertex(528, 194);
    vertex(537, 223);
    vertex(545, 223);
    vertex(545, 295);
    vertex(560, 295);
    vertex(560, 249);
    vertex(571, 249);
    vertex(571, 240);
    vertex(584, 240);
    vertex(584, 203);
    vertex(605, 203);
    vertex(605, 157);
    vertex(612, 157);
    vertex(618, 109);
    vertex(625, 157);
    vertex(632, 157);
    vertex(632, 304);
    vertex(642, 304);
    vertex(642, 193);
    vertex(705, 193);
    vertex(705, 500);
    vertex(0, 500);
endShape();
var MMVB = get(0, 0, 700, 500);
fill(156, 3, 153, 200);
rect(0, 0, width, 50);
fill(135, 2, 117, 200);
rect(0, 50, width, 50);
fill(89, 1, 49, 200);
rect(0, 100, width, 120);

image(MMVB, 0, 150, 300, 100);
image(MMVB, 300, 150, 300, 100);
image(MMVB, 600, 150, 300, 100);
var MMWayB = get(0, 0, width, 250);

//
        
        
//}

// BG assets 2 RR: {

            background(255, 255, 255, 0);
fill(181, 181, 181);//dark gray
triangle(243,500,-136,500,31,215);//mountain on left
triangle(704,500,278,500,481,209);//mountain on right
/*
stroke(0, 0, 0);
strokeWeight(0.8);
line(481,209,475,255);
line(475,255,502,312);
line(502,312,477,373);
line(477,373,515,419);
line(515,419,477,500);//mountain on right's lines 

line(31,215,39,261);
line(39,261,31,296);
line(28,296,55,342);
line(55,342,32,395);
line(32,395,64,452);
line(64,452,59,500);//mountain on left's lines
*/

fill(105, 105, 105);
noStroke();
beginShape();
vertex(31,217);//leave this alone
vertex(39,261);
vertex(28,296);
vertex(55,342);
vertex(285,500);
vertex(31,217);//mountain on left's shadow
endShape();

beginShape();
vertex(481,209);//leave this alone
vertex(475,255);
vertex(502,312);
vertex(477,373);
vertex(515,419);
vertex(580,500);
vertex(701,500);
vertex(481,209);//mountain on right's shadow
endShape();



noStroke();
fill(191, 191, 191);//light gray
triangle(285,500,-66,500,117,259);//other mountain on left
triangle(608,500,270,500,401,259);//other mountain on right

/*

stroke(0, 0, 0);
strokeWeight(0.8);

line(117,259,98,310);
line(98,310,124,344);
line(124,344,99,399);
line(99,399,143,440);
line(143,440,107,489);
line(107,489,135,500);//other mountain on left's lines

line(401,259,408,287);
line(408,287,405,314);
line(405,314,426,355);
line(426,355,415,382);
line(415,382,439,418);
line(439,418,413,455);
line(413,455,424,478);
line(424,478,420,500);//other mountain on right's lines 
*/ 

fill(125, 125, 125);

noStroke();
beginShape();
vertex(117,259);//leave this alone
vertex(98,310);
vertex(124,344);
vertex(99,399);
vertex(143,440);
vertex(107,489);
vertex(135,500);
vertex(285,500);
vertex(117,259);//other mountain on left's shadow
endShape();

beginShape();
vertex(401,259);
vertex(408,287);
vertex(405,314);
vertex(426,355);
vertex(415,382);
vertex(439,418);
vertex(413,455);
vertex(424,478);
vertex(420,500);
vertex(608,500);
vertex(401,259);//other mountain on right's shadow
endShape();
var RRBmounts = get(0, 210, width, 300);
        
            background(255, 255, 255, 0);
fill(162, 166, 176);
    beginShape();
    vertex(0, 338);
    
    vertex(0, 290);
    
    bezierVertex(14, 279, 19, 245, 43, 283);
    endShape();
    
    //Mountain 5 Shading (Farthest Left)
    fill(40, 45, 100, 100);
    beginShape();
    vertex(0, 338);
    
    vertex(0, 290);
    
    bezierVertex(14, 279, 19, 245, 31, 299);
    endShape();
    
    //Mountain 2 (Farthest Back)
    fill(164, 169, 184);
    beginShape();
    vertex(0, 390);
    
    bezierVertex(222, 310, 273, 236, 284, 226);
    
    bezierVertex(316, 205, 331, 243, 340, 256);
    
    bezierVertex(376, 311, 424, 367, 455, 390);
    endShape();
    
    //Mountain 2 Shading (Farthest Back)
    fill(40, 45, 100, 100);
    beginShape();
    vertex(75, 390);
    
    bezierVertex(246, 310, 285, 236, 298, 226);
    
    bezierVertex(316, 205, 331, 243, 340, 256);
    
    bezierVertex(376, 311, 424, 367, 455, 390);
    endShape();
    
    //Mountain 4 (Farthest to Right)
    fill(155, 159, 173);
    beginShape();
    vertex(368, 390);
    
    bezierVertex(488, 356, 500, 309, 536, 266);
    
    bezierVertex(541, 260, 594, 307, 656, 390);
    endShape();
    
    //Mountain 4 Shading (Farthest to Right)
    fill(40, 45, 100, 100);
    beginShape();
    vertex(451, 390);
    
    bezierVertex(489, 356, 517, 309, 541, 266);
    
    bezierVertex(541, 260, 594, 307, 656, 390);
    endShape();
    
    //Mountain 3 (2nd to Right)
    fill(161, 165, 179);
    beginShape();
    vertex(285, 390);
    
    bezierVertex(332, 344, 387, 272, 424, 239);
    
    bezierVertex(446, 227, 453, 257, 500, 301);
    
    bezierVertex(531, 329, 558, 367, 580, 390);
    endShape();
    
    //Mountain 3 Shading (2nd to Right)
    fill(40, 45, 100, 100);
    beginShape();
    vertex(319, 390);
    
    bezierVertex(361, 344, 409, 272, 429, 239);
    
    bezierVertex(446, 227, 453, 257, 500, 301);
    
    bezierVertex(531, 329, 558, 367, 580, 390);
    endShape();
    
    //Mountain 1 (Farthest Back)
    fill(170, 175, 190);
    beginShape();
    vertex(0, 338);
    
    bezierVertex(22, 310, 73, 236, 87, 220);
    
    bezierVertex(97, 205, 136, 243, 150, 256);
    
    bezierVertex(216, 311, 264, 367, 287, 390);
    
    vertex(0, 390);
    endShape();
    
    //Mountain 1 (Farthest Back) Shading
    fill(40, 45, 100, 100);
    beginShape();
    vertex(0, 338);
    
    bezierVertex(22, 310, 73, 236, 84, 225);
    
    bezierVertex(97, 215, 122, 243, 137, 256);
    
    bezierVertex(189, 311, 242, 367, 259, 390);
    
    vertex(0, 390);
    endShape();
    fill(100, 100, 100);
rect(0,350,600,240);
noStroke();
var RRBack = get(0, 210, width, 290);
background(255, 0);

                fill(89, 57, 89);
                beginShape();
                    vertex(0, 600);
                    vertex(0, 560);
                    bezierVertex(12, 546, 27, 531, 43, 528);
                    bezierVertex(64, 528, 77, 542, 84, 552);
                    bezierVertex(95, 540, 119, 502, 135, 500);
                    bezierVertex(162, 504, 175, 529, 184, 546);
                    bezierVertex(198, 537, 212, 526, 229, 526);
                    bezierVertex(242, 526, 253, 538, 260, 548);
                    bezierVertex(278, 530, 290, 515, 302, 512);
                    bezierVertex(324, 513, 345, 532, 357, 550);
                    bezierVertex(363, 541, 379, 527, 396, 525);
                    bezierVertex(410, 525, 420, 540, 437, 552);
                    bezierVertex(450, 526, 461, 502, 474, 498);
                    bezierVertex(494, 496, 512, 521, 526, 540);
                    bezierVertex(538, 531, 550, 523, 562, 524);
                    bezierVertex(576, 525, 591, 549, 600, 560);
                    vertex(600, 600);
                endShape(CLOSE);
                
                var hillsFrontShape = get(0, 495, width, 105);
        

//}

// BG assets 3: {
mountain(0, 40, 0.4);
mountain(200, 40, 0.4);
mountain(400, 40, 0.4);
mountain(0, 100, 0.3);
mountain(-50, 100, 0.3);
mountain(100, 100, 0.3);
mountain(200, 100, 0.3);
mountain(300, 100, 0.3);
mountain(400, 100, 0.3);
var RRmountainz = get(0, 0, 650, 300);
            var a = 0;
            var b = 0;
            background(40, 40, 153);
        strokeWeight(5);
        for (var a = 0; a < 6; a ++) {
            if (a % 2 === 0) {
                b = a / 2;
            } else {
                b = (a - 1) / 2;
            }
            stroke(32, 90, 199);
            fill(0, 128, 255);
            rect(a * 30 + 10, a * 65 + 10, 55, 55);
            
            stroke(21, 23, 138);
            fill(43, 87, 184);
            rect(a * 60 + 105, a * 130 + 75, 20, 55);
            rect(a * 60 + 135, a * 130 + 75, 20, 55);
            rect(a * 60 + 75, a * 130 + 10, 50, 20);
            rect(a * 60 + 75, a * 130 + 45, 50, 20);
            
            fill(0, 0, 255);
            stroke(4, 113, 222);
        }
        
        rect(136,11,100,55);
        rect(197,140,100,55);
        rect(168,75,100,55);
        rect(225,207,100,55);
        rect(255,271,100,55);
        rect(285,335,100,55);
        
        fill(83, 159, 184);
        stroke(34, 0, 255);
        rect(245,11,37,55);
        rect(278,74,37,55);
        rect(308,140,37,55);
        rect(334,207,37,55);
        rect(365,271,37,55);
        rect(395,335,37,55);
    
        fill(86, 12, 204);
        stroke(0, 106, 255);
        rect(292,11,55,55);
        rect(325,74,55,55);
        rect(355,140,55,55);
        rect(380,207,55,55);
    
        fill(138, 7, 189);
        stroke(0, 60, 255);
        rect(356,45,50,20);
        rect(357,11,50,20);
        rect(390,75,20,55);
    
        fill(47, 54, 128);
        stroke(44, 56, 222);
        rect(-7,74,37,55);
        rect(23,140,37,55);
        rect(53,205,37,55);
        rect(83,271,37,55);
        rect(114,335,37,55);
    
        fill(0, 21, 255);
        stroke(135, 4, 222);
        rect(-86, 140, 100, 55);
        rect(-57, 205, 100, 55);
        rect(-27, 270, 100, 55);
        rect(4, 336, 100, 55);
        noStroke();
            var lowerBG = get(0, 0, 400, 400);
    background(0, 86, 235);
    for(var i = 0; i < 100; i++){
        fill(255);
        ellipse(random(800), random(25), random(5), random(5));
        
    }
    
    
    var starz = get(0, 0, 800, 25);
    background(0, 86, 235);
    for(var i = 0; i < 100; i++){
        fill(0, 128, 255);
        rect(random(800), random(25), 40, 40);
        fill(255);
        ellipse(random(800), random(25), random(5), random(5));
        
        
        
    }
    
    
    var starz3 = get(0, 0, 800, 25);
    background(0, 86, 235);
    for(var i = 0; i < 100; i++){
        fill(255);
        ellipse(random(800), random(25), random(10, 10), random(10, 10));
        
        
        
    }
    
    
    var starz5 = get(0, 0, 800, 25);
    background(0, 86, 235);
    for(var i = 0; i < 100; i++){
        fill(random(255), random(255), random(255));
        ellipse(random(800), random(25), random(10), random(10));
        
    }
    
    
    var starz2 = get(0, 0, 800, 25);
    background(0, 86, 235);
    for(var i = 0; i < 100; i++){
        fill(0, 128, 255);
        rect(random(800), random(25), 40, 40);
        fill(random(255), random(255), random(255));
        ellipse(random(800), random(25), random(5), random(5));
        
        
        
    }
    
    
    var starz4 = get(0, 0, 800, 25);
    background(0, 86, 235);
    for(var i = 0; i < 100; i++){
        fill(random(255), random(255), random(255));
        ellipse(random(800), random(25), random(10, 10), random(10, 10));
        
        
        
    }
    
    
    var starz6 = get(0, 0, 800, 25);
    background(255, 0);
    noStroke();
    pushMatrix();
translate(20, -150);
scale(1.5);
strokeWeight(2);
stroke(255, 153, 0);
fill(137, 8, 207);
for (var i = 0; i < 500; i += 150) {
        rect(i, 260, 25, 50);
        rect(i - 10, 275, 25, 55);
        rect(i + 85, 265, 30, 55);
        rect(i + 95, 285, 30, 55);
        rect(i + 20, 290, 50, 25);
        
        beginShape();
        vertex(i + 225 - 175, 210 + 50);
        vertex(i + 240 - 175, 210 + 50);
        vertex(i + 240 - 175, 200 + 52);
        vertex(i + 255 - 175, 200 + 52);
        vertex(i + 255 - 175, 270 + 50);
        vertex(i + 225 - 175, 260 + 50);
        endShape(CLOSE);
    }
popMatrix();
var RRMiddle = get(0, 200, width, 150);
background(255, 0);
                    fill(69, 66, 63);
                    noStroke();
                    pushMatrix();
                        translate(0, -100);
                        beginShape();
                            vertex(0, 470);
                            bezierVertex(27, 475, 43, 490, 57, 501);
                            bezierVertex(89, 482, 102, 462, 126, 440);
                            bezierVertex(150, 423, 180, 400, 200, 398);
                            bezierVertex(228, 402, 245, 420, 262, 438);
                            bezierVertex(280, 433, 286, 422, 298, 419);
                            bezierVertex(322, 423, 333, 441, 352, 474);
                            bezierVertex(366, 481, 384, 492, 402, 505);
                            bezierVertex(436, 485, 457, 454, 477, 445);
                            bezierVertex(508, 448, 524, 476, 554, 496);
                            bezierVertex(570, 490, 588, 470, 600, 470);
                            vertex(600, 700);
                            vertex(0, 700);
                        endShape(CLOSE);
                    popMatrix();
var RRparalaxx1 = get(0, 295, 600, 304);
background(0, 0);
                    
                    noStroke();
                    fill(64, 59, 54);
                    beginShape();
                        vertex(11, 484);
                        vertex(14, 460);
                        vertex(21, 477);
                        vertex(35, 464);
                        vertex(38, 434);
                        vertex(45, 457);
                        vertex(48, 452);
                        vertex(51, 430);
                        vertex(58, 447);
                        vertex(83, 436);
                        vertex(88, 414);
                        vertex(97, 446);
                        vertex(98, 447);
                        vertex(99, 430);
                        vertex(106, 454);
                        vertex(117, 470);
                        vertex(118, 447);
                        vertex(123, 472);
                        vertex(137, 484);
                        vertex(161, 462);
                        vertex(163, 437);
                        vertex(168, 457);
                        vertex(172, 453);
                        vertex(176, 427);
                        vertex(183, 444);
                        vertex(192, 436);
                        vertex(192, 405);
                        vertex(200, 431);
                        vertex(201, 430);
                        vertex(200, 409);
                        vertex(206, 428);
                        vertex(218, 418);
                        vertex(220, 390);
                        vertex(225, 412);
                        vertex(230, 406);
                        vertex(233, 389);
                        vertex(238, 402);
                        vertex(280, 389);
                        vertex(284, 366);
                        vertex(292, 393);
                        vertex(301, 401);
                        vertex(302, 382);
                        vertex(307, 401);
                        vertex(315, 407);
                        vertex(320, 378);
                        vertex(327, 413);
                        vertex(356, 432);
                        vertex(358, 413);
                        vertex(363, 436);
                        vertex(375, 444);
                        vertex(376, 424);
                        vertex(379, 447);
                        vertex(405, 461);
                        vertex(406, 443);
                        vertex(408, 464);
                        vertex(428, 475);
                        vertex(430, 451);
                        vertex(433, 476);
                        vertex(452, 480);
                        vertex(453, 461);
                        vertex(457, 473);
                        vertex(473, 462);
                        vertex(478, 437);
                        vertex(483, 454);
                        vertex(488, 449);
                        vertex(492, 422);
                        vertex(497, 442);
                        vertex(499, 439);
                        vertex(501, 425);
                        vertex(506, 436);
                        vertex(547, 452);
                        vertex(549, 434);
                        vertex(554, 454);
                        vertex(573, 472);
                        vertex(575, 452);
                        vertex(579, 474);
                        vertex(584, 478);
                        vertex(586, 464);
                        vertex(590, 481);
                        vertex(591, 505);
                        vertex(12, 503);
                    endShape(CLOSE);
                    
                    beginShape();
                        vertex(0, 487);
                        vertex(77, 421);
                        vertex(133, 477);
                        vertex(269, 375);
                        vertex(445, 479);
                        vertex(517, 422);
                        vertex(600, 487);
                        vertex(600, 600);
                        vertex(0, 600);
                    endShape(CLOSE);
var RRparalax2 = get();

//}

// BG assets 4: {
 background(255, 0);
            fill(82, 82, 82);
rect(0, 500, width, 100);
fill(0);
rect(0, 535, width, 30);
fill(255, 255, 0);
rect(40, 545, 40, 10);
rect(140, 545, 40, 10);
rect(240, 545, 40, 10);
rect(340, 545, 40, 10);
rect(440, 545, 40, 10);
rect(540, 545, 40, 10);
var AARoad = get(0, 500, width, 100);
noStroke();
background(255, 0);
fill(77, 77, 77);
beginShape();
    vertex(0, 350);
    vertex(20, 350);
    vertex(20, 274);
    vertex(103, 274);
    vertex(103, 350);
    vertex(123, 350);
    vertex(123, 294);
    vertex(149, 294);
    vertex(149, 352);
    vertex(164, 352);
    vertex(164, 280);
    vertex(187, 280);
    vertex(187, 302);
    vertex(218, 302);
    vertex(218, 315);
    vertex(254, 315);
    vertex(254, 350);
    vertex(265, 350);
    vertex(265, 259);
    vertex(275, 259);
    vertex(282, 220);
    vertex(289, 259);
    vertex(299, 259);
    vertex(299, 350);
    vertex(317, 350);
    vertex(317, 328);
    vertex(346, 328);
    vertex(346, 312);
    vertex(365, 312);
    vertex(365, 241);
    vertex(410, 241);
    vertex(410, 350);
    vertex(428, 350);
    vertex(428, 292);
    vertex(458, 292);
    vertex(458, 350);
    vertex(477, 350);
    vertex(477, 319);
    vertex(500, 300);
    vertex(520, 320);
    vertex(520, 350);
    vertex(530, 350);
    vertex(530, 329);
    vertex(553, 329);
    vertex(553, 312);
    vertex(585, 312);
    vertex(585, 350);
    vertex(598, 350);
    vertex(598, 314);
    vertex(618, 314);
    vertex(618, 236);
    vertex(618, 236);
    vertex(639, 236);
    vertex(639, 316);
    vertex(661, 316);
    vertex(661, 335);
    vertex(679, 335);
    vertex(679, 350);
    vertex(710, 350);
    vertex(700, 500);
    vertex(0, 500);
endShape();
var AAZBGA3 = get(0, 210, width, 200);
noStroke();
fill(117, 117, 117);
beginShape();
    vertex(0, 195);
    vertex(40, 195);
    vertex(40, 261);
    vertex(51, 261);
    vertex(51, 178);
    vertex(62, 178);
    vertex(62, 162);
    vertex(82, 162);
    vertex(82, 178);
    vertex(93, 178);
    vertex(93, 249);
    vertex(103, 249);
    vertex(103, 178);
    vertex(117, 142);
    vertex(131, 178);
    vertex(131, 268);
    vertex(136, 268);
    vertex(136, 206);
    vertex(163, 206);
    vertex(163, 268);
    vertex(176, 268);
    vertex(176, 147);
    vertex(201, 147);
    vertex(201, 240);
    vertex(208, 240);
    vertex(208, 128);
    vertex(230, 128);
    vertex(230, 301);
    vertex(236, 301);
    vertex(236, 215);
    vertex(248, 190);
    vertex(261, 215);
    vertex(261, 301);
    vertex(266, 301);
    vertex(266, 222);
    vertex(276, 222);
    vertex(276, 204);
    vertex(286, 204);
    vertex(286, 167);
    vertex(303, 167);
    vertex(303, 201);
    vertex(313, 201);
    vertex(313, 254);
    vertex(320, 254);
    vertex(320, 283);
    vertex(331, 283);
    vertex(331, 167);
    vertex(351, 167);
    vertex(351, 283);
    vertex(367, 283);
    vertex(367, 142);
    vertex(417, 142);
    vertex(417, 295);
    vertex(428, 295);
    vertex(428, 204);
    vertex(446, 204);
    vertex(446, 192);
    vertex(469, 192);
    vertex(469, 204);
    vertex(484, 204);
    vertex(484, 223);
    vertex(503, 223);
    vertex(503, 295);
    vertex(513, 295);
    vertex(513, 223);
    vertex(520, 223);
    vertex(528, 194);
    vertex(537, 223);
    vertex(545, 223);
    vertex(545, 295);
    vertex(560, 295);
    vertex(560, 249);
    vertex(571, 249);
    vertex(571, 240);
    vertex(584, 240);
    vertex(584, 203);
    vertex(605, 203);
    vertex(605, 157);
    vertex(612, 157);
    vertex(618, 109);
    vertex(625, 157);
    vertex(632, 157);
    vertex(632, 304);
    vertex(642, 304);
    vertex(642, 193);
    vertex(705, 193);
    vertex(705, 500);
    vertex(0, 500);
endShape();
var AAZBGA3B = get(0, 110, width, 250);
background(255, 0);
fill(66, 66, 66);
    beginShape();
        vertex(400, 500);
        vertex(650, 500);
        vertex(600, 480);
        vertex(600, 400);
        vertex(580, 300);
        vertex(580, 200);
        vertex(600, 200);
        vertex(600, 180);
        vertex(580, 180);
        vertex(560, 150);
        vertex(510, 150);
        vertex(510, 200);
        vertex(470, 300);
        vertex(470, 450);
    endShape();
var AAZB1 = get(410, 150, 200, 330);
background(255, 0);
fill(97, 96, 97);
    rect(185, 460, 150, 50);
    rect(195, 400, 130, 60);
    rect(205, 300, 110, 100);
    rect(210, 200, 100, 100);
    rect(235, 150, 50, 50);
    triangle(235, 150, 285, 150, 260, 130);
    var AAZB2 = get(210, 100, 100, 340);
    background(255, 0);
    // Far buildings
            fill(70, 70, 70);
            beginShape();
            vertex(0, 210);
            vertex(230, 210);
            vertex(230, 250);
            vertex(270, 250);
            vertex(270, 290);
            vertex(330, 290);
            vertex(330, 190);
            vertex(400, 190);
            vertex(400, 270);
            vertex(600, 270);
            vertex(600, 600);
            vertex(0, 600);
            endShape();
            fill(255, 255, 255, 5);
            for (var i = 0; i < 20; i++) {
                ellipse(300, 500, 500 + i * 20, 200 + i * 20);
            }
            
            // Close buildings
            fill(140, 140, 140);
            beginShape();
            vertex(0, 250);
            vertex(50, 250);
            vertex(50, 330);
            vertex(100, 330);
            vertex(100, 180);
            vertex(200, 180);
            vertex(200, 320);
            vertex(300, 320);
            vertex(300, 250);
            bezierVertex(300, 220, 320, 210, 340, 210);
            vertex(360, 210);
            vertex(360, 300);
            vertex(390, 300);
            vertex(390, 330);
            vertex(450, 330);
            vertex(450, 230);
            vertex(530, 230);
            vertex(530, 300);
            vertex(600, 300);
            vertex(600, 600);
            vertex(0, 600);
            endShape();
            
            // Windows
            fill(255, 255, 100);
            rect(115, 190, 30, 30);
            rect(115, 230, 30, 30);
            rect(155, 420, 30, 30);
            rect(195, 420, 30, 30);
            rect(315, 270, 30, 30);
            arc(345, 260, 60, 60, 180, 270);
            rect(315, 460, 30, 30);
            rect(275, 460, 30, 30);
            rect(275, 420, 30, 30);
            rect(460, 240, 25, 30);
            rect(495, 240, 25, 30);
            rect(495, 280, 25, 30);
            var AAZBGp2 = get(0, 150, width, 330);
            background(255, 0);
            fill(92, 75, 50);
 beginShape();

 vertex(2,341);
 vertex(57,320);
 vertex(91,335);
 vertex(118,338);
 vertex(147,316);
 vertex(188,317);
 vertex(233,324);
 vertex(258,331);
 vertex(304,311);
 vertex(316,311);
 vertex(346,317);
 vertex(365,321);
 vertex(408,310);
 vertex(398,394);
 vertex(1,398);
 vertex(0,341);
 endShape();
 

fill(84, 63, 35);
 beginShape();

 vertex(1,371);
 vertex(37,355);
 vertex(63,360);
 vertex(78,367);
 vertex(87,373);
 vertex(116,371);
 vertex(153,366);
 vertex(178,364);
 vertex(198,350);
 vertex(233,347);
 vertex(275,350);
 vertex(321,340);
 vertex(345,358);
 vertex(377,356);
 vertex(398,360);
 vertex(395,361);
 vertex(406,400);
  vertex(0,400);
 endShape();
 fill(74, 60, 36);
 

 beginShape();

 vertex(2,386);
 vertex(51,375);
 vertex(80,388);
 vertex(111,393);
 vertex(147,387);
 vertex(180,383);
 vertex(215,386);
 vertex(296,390);
 vertex(340,390);
 vertex(362,381);
 vertex(387,386);
 vertex(396,392);
 vertex(400,400);
 vertex(0,401);
 vertex(0,393);
 endShape();
var AAZBGBack = get(0, 300, 400, 120);
//}

// HHZ assets: {
noStroke();
function m(x, y, s, r, c) {
pushMatrix();
    translate(x, y);
    scale(s);
    rotate(r);
    fill(61, 72, 92);
    triangle(0, 0, 70, 100, -70, 100);
    
    fill(255, 255, 255);
    triangle(0, 0, 14, 20, -14, 20);
    triangle(0, 20, -10, 27, -14, 20);
    triangle(14, 20, 5, 27, -1, 20);

    fill(0, 0, 0, 40);
    triangle(0, 0, -70, 100, 0, 100);
popMatrix();
}
noStroke();
background(255,255,255,0);
fill(240, 20, 0);
rect(20,0,80,400);
rect(300,0,80,400);
fill(173, 25, 2);
rect(20,0,20,400);
rect(300,0,20,400);
fill(255, 52, 38);
rect(80,0,20,400);
rect(360,0,20,400);
fill(240, 32, 0);
quad(80,20,320,320,320,380,80,80);
quad(320,20,60,320,80,380,320,80);
var txtre1=get(0,0,400,400);
var orangetree = function(x, y, s, r){
    noStroke();
    translate(x, y);
    rotate(r);
    scale(s/10);
    fill(158, 90, 0);
    quad(-25, 54, -19, -38, 19, -55, 23, 54);
    pushMatrix();
    translate(23, 4);
    quad(30, -9, -8, 6, -15, -10, 30, -19);
    popMatrix();
    fill(110, 55, 0);
    ellipse(-8, 38, 4, 15);
    ellipse(8, -12, 3, 14);
    ellipse(3, 13, 4, 15);
    fill(0, 128, 9);
    ellipse(21, -53, 70, 70);
    fill(72, 171, 32);
    ellipse(-47, -98, 70, 70);
    fill(79, 209, 27);
    ellipse(41, -85, 70, 70);
    fill(76, 122, 15);
    ellipse(-34, -55, 70, 70);
    fill(66, 166, 0);
    ellipse(4, -103, 70, 70);
    fill(78, 153, 28);
    ellipse(31, -116, 70, 70);
    fill(55, 128, 7);
    ellipse(-25, -127, 70, 70);
    resetMatrix();
};
for (var i = 0; i < height; i += 2) {
        strokeWeight(2);
        stroke(lerpColor(color(23, 32, 82), color(85, 99, 171), i / height));
        line(1, i, width, i);
    }


stroke(255, 255, 0,random(155,355));

for (var i = 0; i < height; i += 1) {
        strokeWeight(random(1,4));
        point(random(0,800),random(0,600));
    }
var HHZBG = get(0, 0, 800, 600);
noStroke();
background(255, 0);
fill(158, 158, 158);
beginShape();
vertex(0, 600);
vertex(0, 309);
vertex(127, 205);
vertex(284, 385);
vertex(354, 286);
vertex(430, 394);
vertex(507, 220);
vertex(600, 383);
vertex(600, 600);
endShape();
var HHZp1 = get(0, 0, 600, 600);
background(255, 0);
fill(94, 94, 99);
beginShape();
vertex(0, 600);
vertex(0, 464);
vertex(159, 343);
vertex(257, 432);
vertex(300, 377);
vertex(423, 523);
vertex(476, 414);
vertex(490, 435);
vertex(574, 320);
vertex(600, 348);
vertex(600, 600);
endShape();
var HHZp2 = get(0, 0, 600, 600);
background(255, 0);
fill(63, 63, 64);
beginShape();
vertex(0, 600);
vertex(3, 577);
vertex(115, 320);
vertex(235, 487);
vertex(285, 355);
vertex(430, 566);
vertex(470, 465);
vertex(531, 563);
vertex(600, 370);
vertex(600, 600);
endShape();
var HHZp3 = get(0, 0, 600, 600);
background(255, 0);
image(txtre1, 100, 400, 50, 70);
image(txtre1, 300, 400, 50, 70);
image(txtre1, 530, 400, 50, 70);

m(0, 400, 3, 1);
m(100, 400, 3, 1);
m(200, 400, 3, 1);
m(300, 400, 3, 1);
m(400, 400, 3, 1);
m(500, 400, 3, 1);
m(600, 400, 3, 1);
var HHZp4 = get(0, 0, 600, 600);
background(255, 0);
orangetree(30, 500, 3, 1);
orangetree(90, 500, 3, 1);
orangetree(150, 500, 3, 1);
orangetree(210, 500, 3, 1);
orangetree(270, 500, 3, 1);
orangetree(330, 500, 3, 1);
orangetree(390, 500, 3, 1);
orangetree(450, 500, 3, 1);
orangetree(510, 500, 3, 1);
orangetree(570, 500, 3, 1);





fill(3, 128, 23);
ellipse(0, 560, 100, 100);
ellipse(50, 560, 100, 100);
ellipse(100, 560, 100, 100);
ellipse(150, 560, 100, 100);
ellipse(200, 560, 100, 100);
ellipse(250, 560, 100, 100);
ellipse(300, 560, 100, 100);
ellipse(350, 560, 100, 100);
ellipse(400, 560, 100, 100);
ellipse(450, 560, 100, 100);
ellipse(500, 560, 100, 100);
ellipse(550, 560, 100, 100);
ellipse(600, 560, 100, 100);
var HHZp5 = get(0, 0, 600, 600);
background(255, 0);
fill(3, 128, 23);
rect(0, 380, width, 20);
for(var i = -10; i<620; i+=20){
            fill(21, 99, 25);
            triangle(i, 400, i+20, 400, i+random(7, 13), random(350, 360));
        }
var lgrass = get(0, 0, 600, 400);
background(255, 0);
noStroke();
fill(255);
ellipse(0, 100, 100, 100);
ellipse(50, 100, 100, 100);
ellipse(100, 100, 100, 100);
ellipse(150, 100, 100, 100);
ellipse(200, 100, 100, 100);
ellipse(250, 100, 100, 100);
ellipse(300, 100, 100, 100);
ellipse(350, 100, 100, 100);
ellipse(400, 100, 100, 100);
ellipse(450, 100, 100, 100);
ellipse(500, 100, 100, 100);
ellipse(550, 100, 100, 100);
ellipse(600, 100, 100, 100);
ellipse(650, 100, 100, 100);
ellipse(700, 100, 100, 100);
ellipse(750, 100, 100, 100);
ellipse(800, 100, 100, 100);
var HHZcloud1 = get(0, 0, width, 150);
background(255, 0);
noStroke();
fill(225);
ellipse(0, 100, 100, 100);
ellipse(50, 100, 100, 100);
ellipse(100, 100, 100, 100);
ellipse(150, 100, 100, 100);
ellipse(200, 100, 100, 100);
ellipse(250, 100, 100, 100);
ellipse(300, 100, 100, 100);
ellipse(350, 100, 100, 100);
ellipse(400, 100, 100, 100);
ellipse(450, 100, 100, 100);
ellipse(500, 100, 100, 100);
ellipse(550, 100, 100, 100);
ellipse(600, 100, 100, 100);
ellipse(650, 100, 100, 100);
ellipse(700, 100, 100, 100);
ellipse(750, 100, 100, 100);
ellipse(800, 100, 100, 100);
var HHZcloud2 = get(0, 0, width, 150);
background(255, 0);
noStroke();
fill(185);
ellipse(0, 100, 100, 100);
ellipse(50, 100, 100, 100);
ellipse(100, 100, 100, 100);
ellipse(150, 100, 100, 100);
ellipse(200, 100, 100, 100);
ellipse(250, 100, 100, 100);
ellipse(300, 100, 100, 100);
ellipse(350, 100, 100, 100);
ellipse(400, 100, 100, 100);
ellipse(450, 100, 100, 100);
ellipse(500, 100, 100, 100);
ellipse(550, 100, 100, 100);
ellipse(600, 100, 100, 100);
ellipse(650, 100, 100, 100);
ellipse(700, 100, 100, 100);
ellipse(750, 100, 100, 100);
ellipse(800, 100, 100, 100);
var HHZcloud3 = get(0, 0, width, 150);
background(255, 0);
noStroke();
fill(135);
ellipse(0, 100, 100, 100);
ellipse(50, 100, 100, 100);
ellipse(100, 100, 100, 100);
ellipse(150, 100, 100, 100);
ellipse(200, 100, 100, 100);
ellipse(250, 100, 100, 100);
ellipse(300, 100, 100, 100);
ellipse(350, 100, 100, 100);
ellipse(400, 100, 100, 100);
ellipse(450, 100, 100, 100);
ellipse(500, 100, 100, 100);
ellipse(550, 100, 100, 100);
ellipse(600, 100, 100, 100);
ellipse(650, 100, 100, 100);
ellipse(700, 100, 100, 100);
ellipse(750, 100, 100, 100);
ellipse(800, 100, 100, 100);
var HHZcloud4 = get(0, 0, width, 150);
var externals;
var ctx = externals.context;
background(0,0);

ctx.fillStyle = "#fbba7c";
ctx.beginPath();
ctx.moveTo(296, 69);
ctx.quadraticCurveTo(373, 155, 324, 180);
ctx.quadraticCurveTo(-2, 169, 452, 514);
ctx.quadraticCurveTo(152, 220, 632, 416);
ctx.lineTo(600,300);
ctx.quadraticCurveTo(458, 220, 296, 69);
ctx.fill();
ctx.closePath();


ctx.fillStyle = "#e3a071";
ctx.beginPath();
ctx.moveTo(573, 636);
ctx.quadraticCurveTo(48, 154, 632, 393);
ctx.lineTo(600,600);
ctx.fill();
ctx.closePath();


ctx.fillStyle = "#c87f4d";


ctx.beginPath();
ctx.moveTo(296, 69);
ctx.quadraticCurveTo(373, 155, 324, 180);
ctx.quadraticCurveTo(-2, 169, 452, 514);
ctx.quadraticCurveTo(488, 544, 549, 600);
ctx.lineTo(0,600);
ctx.lineTo(0,70);
ctx.quadraticCurveTo(188, -9, 296, 69);
ctx.fill();
ctx.closePath();

var dune = get(0,0,600,600);
background(255, 255, 255, 0);
noStroke();
fill(255, 145, 0);
ellipse(30, 30, 50, 50);
fill(204, 93, 8);
ellipse(30, 30, 35, 35);
fill(46, 247, 15, 200);
ellipse(30, 30, 20, 20);
noFill();
strokeWeight(7);
stroke(255, 221, 0, 150);
arc(30, 30, 40, 40, 183, 356);
noStroke();
fill(255, 255, 255, 70);
arc(30, 30, 20, 20, 183, 357);
var brid = get(0, 0, 55, 55);
for(var i = 0; i < 600; i ++){
        var st = color(0, 106, 255);
        var end = color(0, 22, 133);
        var elpo = lerpColor(st, end, i / 600);
        fill(elpo);
        rect(0, i, 800, 1);
    }
var waterf = get();
background(255, 0);
var ext = 170;

fill(3, 153, 33);
ellipse(20, 40, 50, 50);
ellipse(80, 70, 80, 80);
ellipse(260, 70, 80, 80);
ellipse(320, 70, 80, 80);
ellipse(380, 70, 80, 80);
ellipse(440, 50, 80, 80);
ellipse(680, 70, 80, 80);
ellipse(730, 70, 50, 50);

fill(255, 132, 0);
rect(0, 40, 35, 235+ext, 7);
rect(50, 60, 35, 215+ext, 7);
rect(80, 40, 35, 235+ext, 7);
rect(210, 80, 35, 195+ext, 7);
rect(270, 80, 35, 195+ext, 7);
rect(300, 70, 35, 200+ext, 7);
rect(350, 70, 55, 200+ext, 7);
rect(465, 40, 35, 230+ext, 7);
rect(670, 50, 35, 230+ext, 7);
rect(700, 70, 35, 210+ext, 7);

fill(194, 74, 4);
rect(25, 34, 35, 245+ext, 7);
rect(235, 15, 35, 255+ext, 7);
rect(435, 5, 35, 265+ext, 7);
rect(635, 35, 35, 235+ext, 7);
rect(110, 80, 35, 195+ext, 7);
rect(320, 40, 35, 230+ext, 7);
rect(400, 40, 35, 230+ext, 7);
rect(565, 190, 15, 220+ext, 7);
rect(730, 45, 35, 240+ext, 7);

fill(255, 132, 0);
rect(30, 414, 25, 25);
rect(115, 414, 25, 25);
rect(240, 405, 25, 25);
rect(325, 404, 25, 25);
rect(410, 404, 25, 25);
rect(440, 404, 25, 25);
rect(570, 414, 5, 25);
rect(640, 404, 25, 25);
rect(735, 414, 25, 25);
fill(194, 74, 4);
rect(75, 414, 25, 25);
rect(215, 405, 15, 25);
rect(285, 404, 25, 25);
rect(360, 394, 35, 35);
rect(475, 405, 20, 20);
rect(682, 395, 40, 40);


fill(0, 162, 255);
rect(300, 300, 10, 150);
rect(400, 100, 10, 350);
rect(10, 40, 10, 420);
rect(730, 45, 10, 190);
rect(670, 245, 10, 200);

fill(7, 184, 7);
ellipse(300, 300, 20, 20);
ellipse(310, 300, 20, 20);
ellipse(320, 300, 20, 20);
ellipse(330, 300, 20, 20);
ellipse(340, 300, 20, 20);
ellipse(350, 300, 20, 20);
ellipse(430, 120, 80, 80);
ellipse(390, 120, 80, 80);
ellipse(360, 120, 80, 80);
ellipse(50, 200, 40, 40);
ellipse(70, 200, 40, 40);
ellipse(90, 200, 40, 40);
ellipse(700, 250, 40, 40);
ellipse(720, 250, 40, 40);
ellipse(740, 250, 40, 40);
ellipse(680, 250, 40, 40);


image(brid, 144, 100, 10, 10);
image(brid, 152, 100, 10, 10);
image(brid, 160, 100, 10, 10);
image(brid, 168, 100, 10, 10);
image(brid, 176, 100, 10, 10);
image(brid, 184, 100, 10, 10);
image(brid, 192, 100, 10, 10);
image(brid, 200, 100, 10, 10);

image(brid, 498, 200, 10, 10);
image(brid, 506, 200, 10, 10);
image(brid, 514, 200, 10, 10);
image(brid, 522, 200, 10, 10);
image(brid, 530, 200, 10, 10);
image(brid, 538, 200, 10, 10);
image(brid, 546, 200, 10, 10);
image(brid, 554, 200, 11, 10);
image(brid, 578, 200, 10, 10);
image(brid, 586, 200, 10, 10);
image(brid, 594, 200, 10, 10);
image(brid, 602, 200, 10, 10);
image(brid, 610, 200, 10, 10);
image(brid, 618, 200, 10, 10);
image(brid, 626, 200, 10, 10);





image(waterf, 145, 120, 65, 330);
image(waterf, 500, 220, 65, 220);
image(waterf, 580, 220, 55, 220);
var titleEEZ = get(0, 0, 800, 500);
var IIZC = function(x, y, s, id){
    pushMatrix();
    translate(x, y);
    scale(s);
    if(id !== 1){
        noStroke();
    fill(255, 255, 255);
    ellipse(310,33,25,23);
    ellipse(320,46,30,24);
    ellipse(339,43,30,24);
    ellipse(325,21,30,24);
    ellipse(335,29,30,24);
    }
    if(id === 1){
        fill(255, 255, 255, 150);
        noStroke();
        rect(1,252,187,13,200);
    rect(32,283,148,13,200);
    rect(49,283,110,-19,200);
    rect(1,309,116,7,200);
    rect(49,309,51,-13,200);
    }
    popMatrix();
    };

background(255);
gradientt(0, 0, 180, 70, color(0, 191, 255), color(4, 0, 255), 1);
var GradientM = get(0, 0, 180, 70);
background(0, 0, 0);
textFont(createFont("Impact Bold"));
textSize(50);
//fill(255, 255, 0);
text("B L U E Y", 10, 50);
var GradientT = get(0, 0, 180, 70);

background(255);
gradientt(0, 0, 140, 60, color(255, 255, 255), color(77, 35, 245), 2);
var GradientM2 = get(0, 0, 140, 60);
background(0, 0, 0);
textFont(createFont("Impact Bold"));
textSize(20);
//fill(255, 255, 0);
text("THE     CIRCLE", 10, 50);
var GradientT2 = get(0, 0, 140, 60);

//gradientt(0, 0, 140, 60, color(255, 255, 255, 255), color(245, 231, 37, 255), 2);

background(255, 94, 0);
fill(245, 245, 12);
for(var i = 0; i < 90; i += 20){
            for(var j = 0; j < 90; j += 20){
                
                rect(i, j, 10, 10);
                rect(i + 10, j + 10, 10, 10);
            }
        }
var GradientM3 = get(0, 0, 90, 90);
background(0, 0, 0);
textSize(105);
fill(255);
text("2", 10, 80);
var GradientT3 = get(0, 0, 90, 90);
noStroke();
background(0, 0);
                    
                    noStroke();
                    fill(135, 132, 135);
                    beginShape();
                        vertex(0, 420);
                        vertex(31, 523);
                        vertex(59, 461);
                        vertex(73, 488);
                        vertex(90, 446);
                        vertex(111, 515);
                        vertex(118, 485);
                        vertex(133, 524);
                        vertex(152, 447);
                        vertex(169, 478);
                        vertex(196, 414);
                        vertex(244, 521);
                        vertex(268, 446);
                        vertex(309, 522);
                        vertex(333, 426);
                        vertex(344, 462);
                        vertex(356, 432);
                        vertex(376, 485);
                        vertex(392, 452);
                        vertex(420, 513);
                        vertex(455, 422);
                        vertex(489, 507);
                        vertex(511, 470);
                        vertex(528, 508);
                        vertex(543, 481);
                        vertex(566, 523);
                        vertex(600, 420);
                        vertex(600, 600);
                        vertex(0, 600);
                    endShape(CLOSE);
                    
var titlemounts = get();
background(255, 0);
noStroke();
for(var i = 0; i < 100; i++){
        fill(255, 255, 0, 200);
        ellipse(random(800), random(50), 5, 5);
    }
    var titlestarz = get(0, 0, 800, 50);


if(GradientT){
GradientM.mask(GradientT);
}
if(GradientT2){
GradientM2.mask(GradientT2);
}
if(GradientT3){
GradientM3.mask(GradientT3);
}
//}

// Extra art: {
    background(255, 0);
    stroke(255, 255, 0,120);
    for(var x = 0;x<600;x+=5){
        for(var y= 0;y<500;y+=5){
            var n=noise(x/250,y/250,noise(y/500,x/500));
            if(random(100)>85){
                var s = random(0.5,3);
                strokeWeight(s*n*2);
                stroke(255, 255, 0,random(20,80)*n*5);
                point(x+random(-5,5),y+random(-5,5));
                if(random(100)>99.3){
                    strokeWeight(s*n*4);
                    stroke(255, 255, 0);
                    point(x,y);
                    stroke(255, 255, 0,25);
                    line(x-10*s,y,x+10*s,y);
                    line(x,y-18*s,x,y+18*s);
                    noStroke();
                    for(var i = 0;i<5;i++){
                        fill(255, 255, 255,10);
                        ellipse(x,y,30/i*s,30/i*s);
                    }    
                }    
            }
        }
    }
    
    var SpaceBG = get();
    background(255, 0);

Gradient(0, 0, 800, 600, color(48, 0, 46, 100), color(255, 0, 213, 150));
var SKyG = get();
background(0);

Gradient(0, 0, 800, 600, color(255, 85, 0, 200), color(255, 153, 0, 100));
var SKyG2 = get();

noStroke();
background(255, 0);

rectMode(CORNER);
fill(3, 13, 87);
rect(0, 320, width, 93);

iceblock(10, 470, 0.7, 0.7);
iceblock(210, 470, 0.7, 0.7);
iceblock(410, 470, 0.7, 0.7);
iceblock(610, 470, 0.7, 0.7);
iceblock(810, 470, 0.7, 0.7);

iceblock(0, 520, 0.7, 0.7);
iceblock(200, 520, 0.7, 0.7);
iceblock(400, 520, 0.7, 0.7);
iceblock(600, 520, 0.7, 0.7);
iceblock(800, 520, 0.7, 0.7);

var IIZP1 = get(0, 320, 600, 100);
rectMode(CORNER);
background(255, 0);
                stroke(102, 62, 102);
                fill(87, 53, 87);
                beginShape();
                    vertex(0, 239);
                    vertex(21, 246);
                    vertex(36, 237);
                    vertex(49, 247);
                    vertex(58, 260);
                    vertex(65, 260);
                    vertex(74, 253);
                    vertex(86, 258);
                    vertex(105, 260);
                    vertex(115, 248);
                    vertex(124, 242);
                    vertex(135, 241);
                    vertex(145, 251);
                    vertex(157, 261);
                    vertex(174, 274);
                    vertex(180, 266);
                    vertex(186, 258);
                    vertex(191, 265);
                    vertex(195, 264);
                    vertex(202, 269);
                    vertex(211, 271);
                    vertex(218, 267);
                    vertex(244, 253);
                    vertex(263, 242);
                    vertex(266, 248);
                    vertex(272, 258);
                    vertex(282, 271);
                    vertex(291, 257);
                    vertex(296, 249);
                    vertex(306, 237);
                    vertex(314, 224);
                    vertex(325, 209);
                    vertex(333, 224);
                    vertex(350, 232);
                    vertex(360, 242);
                    vertex(375, 237);
                    vertex(380, 246);
                    vertex(391, 263);
                    vertex(398, 262);
                    vertex(411, 260);
                    vertex(422, 251);
                    vertex(429, 240);
                    vertex(441, 247);
                    vertex(450, 238);
                    vertex(471, 229);
                    vertex(481, 235);
                    vertex(483, 246);
                    vertex(499, 242);
                    vertex(513, 236);
                    vertex(519, 230);
                    vertex(527, 219);
                    vertex(540, 213);
                    vertex(547, 221);
                    vertex(554, 229);
                    vertex(560, 240);
                    vertex(574, 240);
                    vertex(585, 233);
                    vertex(600, 221);
                    vertex(600, 300);
                    vertex(0, 300);
                endShape(CLOSE);
                
                var groundShape = get(0, 200, 800, 200);
background(0, 0);
            noStroke();
            fill(64, 49, 64);
            beginShape();
                vertex(0, 439);
                vertex(82, 361);
                vertex(128, 419);
                vertex(155, 371);
                vertex(221, 454);
                vertex(253, 383);
                vertex(275, 411);
                vertex(303, 354);
                vertex(375, 452);
                vertex(423, 376);
                vertex(477, 434);
                vertex(513, 406);
                vertex(550, 439);
                vertex(574, 418);
                vertex(600, 439);
                vertex(600, 600);
                vertex(0, 600);
            endShape(CLOSE);
            
            var IIMF = get(0, 350, 600, 250);
            background(255, 0);
            fill(255);
            noStroke();
            ellipse(0, 500, 100, 100);
            ellipse(50, 500, 100, 100);
            ellipse(100, 500, 100, 100);
            ellipse(150, 500, 100, 100);
            ellipse(200, 500, 100, 100);
            ellipse(250, 500, 100, 100);
            ellipse(300, 500, 100, 100);
            ellipse(350, 500, 100, 100);
            ellipse(400, 500, 100, 100);
            ellipse(450, 500, 100, 100);
            ellipse(500, 500, 100, 100);
            ellipse(550, 500, 100, 100);
            ellipse(600, 500, 100, 100);
            var IIZair1 = get(0, 440, 600, 120);
            background(255, 0);
            fill(242, 242, 242);
noStroke();
ellipse(0, 500, 100, 100);
ellipse(50, 500, 100, 100);
ellipse(100, 500, 100, 100);
ellipse(150, 500, 100, 100);
ellipse(200, 500, 100, 100);
ellipse(250, 500, 100, 100);
ellipse(300, 500, 100, 100);
ellipse(350, 500, 100, 100);
ellipse(400, 500, 100, 100);
ellipse(450, 500, 100, 100);
ellipse(500, 500, 100, 100);
ellipse(550, 500, 100, 100);
ellipse(600, 500, 100, 100);
var IIZair2 = get(0, 440, 600, 120);
background(255, 0);
fill(224, 224, 224);
noStroke();
ellipse(0, 500, 100, 100);
ellipse(50, 500, 100, 100);
ellipse(100, 500, 100, 100);
ellipse(150, 500, 100, 100);
ellipse(200, 500, 100, 100);
ellipse(250, 500, 100, 100);
ellipse(300, 500, 100, 100);
ellipse(350, 500, 100, 100);
ellipse(400, 500, 100, 100);
ellipse(450, 500, 100, 100);
ellipse(500, 500, 100, 100);
ellipse(550, 500, 100, 100);
ellipse(600, 500, 100, 100);
var IIZair3 = get(0, 440, 600, 120);


//}

// HUD art {
var g = createGraphics(width, height, P2D);
g.noStroke();
g.smooth();


g.beginDraw();
g.background(255, 255, 255, 0);
// S
g.fill(255, 230, 0);
g.rect(0, 0, 20, 5);
g.rect(20, 0, 5, 10);
g.rect(0, 0, 5, 20);
g.rect(0, 20, 20, 5);
g.rect(15, 20, 5, 17);
g.rect(0, 33, 20, 5);
var S = g.get(0, 0, 25, 40);
// c
g.rect(25, 18, 20, 5);
g.rect(25, 18, 5, 20);
g.rect(25, 35, 20, 5);
// o
g.rect(50, 15, 20, 5);
g.rect(50, 15, 5, 25);
g.rect(50, 35, 20, 5);
g.rect(65, 15, 5, 20);
// r
g.rect(75, 10, 20, 5);
g.rect(75, 10, 5, 30);
// E
g.rect(100, 0, 20, 5);
g.rect(100, 20, 20, 5);
g.rect(100, 40, 20, 5);
g.rect(100, 0, 5, 40);
// T
g.rect(0, 50, 25, 5);
g.rect(10, 50, 5, 35);
// i
g.rect(30, 50, 5, 35);
// M
g.rect(43, 50, 5, 35);
g.strokeWeight(5);
g.stroke(255, 230, 0);
g.line(45, 52, 57, 66);
g.line(57, 66, 68, 53);
g.strokeWeight(0.1);
g.rect(66, 50, 5, 35);
// E
g.rect(75, 50, 20, 5);
g.rect(75, 70, 20, 5);
g.rect(75, 90, 20, 5);
g.rect(75, 50, 5, 45);
//C
g.rect(0, 100, 25, 5);
g.rect(0, 130, 25, 5);
g.rect(0, 100, 5, 35);
// o
g.rect(30, 110, 25, 5);
g.rect(30, 130, 25, 5);
g.rect(30, 110, 5, 25);
g.rect(50, 110, 5, 20);
// i
g.rect(65, 100, 5, 35);
// n
g.rect(75, 110, 5, 25);
g.rect(75, 110, 20, 5);
g.rect(95, 110, 5, 25);
g.image(S, 105, 110);

g.endDraw();

var hud = g.get(0, 0, 160, 170);
g.noStroke();
g.smooth();
g.beginDraw();
// T
g.rect(0, 50, 25, 5);
g.rect(10, 50, 5, 35);
// i
g.rect(30, 50, 5, 35);
// M
g.rect(43, 50, 5, 35);
g.strokeWeight(5);
g.stroke(255, 230, 0);
g.line(45, 52, 57, 66);
g.line(57, 66, 68, 53);
g.strokeWeight(0.1);
g.rect(66, 50, 5, 35);
// E
g.rect(75, 50, 20, 5);
g.rect(75, 70, 20, 5);
g.rect(75, 90, 20, 5);
g.rect(75, 50, 5, 45);
//C
g.rect(0, 100, 25, 5);
g.rect(0, 130, 25, 5);
g.rect(0, 100, 5, 35);
// o
g.rect(30, 110, 25, 5);
g.rect(30, 130, 25, 5);
g.rect(30, 110, 5, 25);
g.rect(50, 110, 5, 20);
// i
g.rect(65, 100, 5, 35);
// n
g.rect(75, 110, 5, 25);
g.rect(75, 110, 20, 5);
g.rect(95, 110, 5, 25);
g.image(S, 105, 110);

g.endDraw();

var TAhud = g.get(0, 50, 170, 170);
g.background(255, 0);
g.image(S, 0, 0);
// c
g.rect(25, 18, 20, 5);
g.rect(25, 18, 5, 20);
g.rect(25, 35, 20, 5);
// o
g.rect(50, 15, 20, 5);
g.rect(50, 15, 5, 25);
g.rect(50, 35, 20, 5);
g.rect(65, 15, 5, 20);
// r
g.rect(75, 10, 20, 5);
g.rect(75, 10, 5, 30);
// E
g.rect(100, 0, 20, 5);
g.rect(100, 20, 20, 5);
g.rect(100, 40, 20, 5);
g.rect(100, 0, 5, 40);
// T
g.rect(0, 50, 25, 5);
g.rect(10, 50, 5, 35);
// i
g.rect(30, 50, 5, 35);
// M
g.rect(43, 50, 5, 35);
g.strokeWeight(5);
g.stroke(255, 230, 0);
g.line(45, 52, 57, 66);
g.line(57, 66, 68, 53);
g.strokeWeight(0.1);
g.rect(66, 50, 5, 35);
// E
g.rect(75, 50, 20, 5);
g.rect(75, 70, 20, 5);
g.rect(75, 90, 20, 5);
g.rect(75, 50, 5, 45);
g.image(S, 0, 100);
// P
g.rect(25, 120, 20, 5);
g.rect(25, 120, 5, 35);
g.rect(25, 135, 20, 5);
g.rect(40, 120, 5, 20);
g.rect(30, 150, 5, 5);
// H
g.rect(50, 100, 5, 40);
g.rect(50, 120, 20, 5);
g.rect(70, 120, 5, 25);
g.rect(50, 100, 15, 5);
// E
g.rect(80, 115, 20, 5);
g.rect(80, 115, 5, 25);
g.rect(80, 135, 20, 5);
g.rect(80, 125, 20, 5);
// R
g.rect(105, 110, 20, 5);
g.rect(105, 110, 5, 35);
// E
g.rect(130, 115, 20, 5);
g.rect(130, 115, 5, 25);
g.rect(130, 135, 20, 5);
g.rect(130, 125, 20, 5);
// S
g.image(S, 155, 110, 30, 30);

var SShud = g.get(0, 0, 185, 170);
//}

// Boss art {
background(255, 0);
//Captain Lazer
{
pushMatrix();
noStroke();
fill(107, 227, 123, 230);
rect(300, 230, 190, 190);



//Crystal 1
{
pushMatrix();

translate(-122, -75);
scale(1.4);
fill(84, 255, 107, 200);
triangle(313, 195, 297, 208, 277, 184);

fill(3, 173, 26, 200);
triangle(313, 195, 297, 208, 317, 238);

fill(84, 255, 107, 200);
triangle(317, 238, 280, 213, 297, 208);

fill(3, 173, 26, 200);
triangle(280, 213, 298, 208, 277, 184);
popMatrix();
}

//yellow/orange stones
{
fill(247, 180, 22);
rect(293, 221, 38, 100);
rect(417, 249, 55, 46);
rect(384, 328, 65, 83);


fill(255, 158, 79);
rect(300, 243, 24, 53);
rect(426, 249, 26, 24);
rect(389, 337, 29, 54);
}

//crystal 2
{
pushMatrix();


translate(735, -215);
rotate(-277);
scale(1.4);
fill(3, 173, 26, 200);
triangle(313, 195, 297, 208, 277, 184);

fill(84, 255, 107, 200);
triangle(313, 195, 297, 208, 317, 238);

fill(3, 173, 26, 200);
triangle(317, 238, 280, 213, 297, 208);

fill(84, 255, 107, 200);
triangle(280, 213, 298, 208, 277, 184);
popMatrix();
}

//Red/orange stones
{
fill(255, 124, 59);
rect(324, 287, 38, 88);
rect(452, 235, 30, 80);
rect(417, 356, 21, 83);


fill(212, 105, 55);
rect(341, 287, 21, 50);
rect(452, 235, 30, 42);
rect(417, 365, 13, 53);
}

//eyes
{
pushMatrix();    
   
//right eye
{    
fill(255, 255, 255);
ellipse(443, 293, 70, 70);


fill(7, 112, 0);
ellipse(444, 293, 24, 59);

fill(0, 0, 0);
ellipse(444, 293, 12, 53);
}

//left eye

{
pushMatrix();      
translate(-93, 0);   

fill(209, 98, 50);
ellipse(443, 293, 70, 70);


fill(0, 207, 0);
ellipse(444, 293, 44, 44);

fill(0, 255, 4);
ellipse(444, 293, 34, 34);

fill(158, 255, 158);
ellipse(444, 293, 24, 24);

fill(255, 255, 255);
ellipse(444, 293, 14, 14);




fill(209, 98, 50);
ellipse(413, 270, 40, 40);


fill(0, 207, 0);
ellipse(413, 270, 30, 30);

fill(0, 255, 4);
ellipse(413, 270, 20, 20);

fill(158, 255, 158);
ellipse(413, 270, 10, 10);

fill(255, 255, 255);
ellipse(413, 270, 7, 7);
popMatrix();
}
popMatrix();
}

//eyebrows
{
strokeWeight(10);
stroke(0, 0, 0);
line(310, 242, 387, 277);
line(472, 248, 405, 277);
}

//mouth
{
noStroke();
fill(255, 255, 255);
arc(399, 343, 100, 100, 0, 166);
}

}

var CaptainL = get(270, 180, 260, 300);
popMatrix();


//}

// Waterfall stuff {
var wy = 0;


var waterfa = [];

for(var i = 0; i < 10; i++){
    waterfa.push(
        {
            x: random(80), //x position will be between 0 and width of the screen
            y: random(120, 0), //y position will be between -height of the screen and 0
            size: random(3, 8), //radius will be between 3 and 8
            opacity: random(100, 200), //opacity will be between 100 and 200
            speed: random(0.25, 1) // speed will be between 0.75 and 3
        }
    );
}

var waterfall = function(x, y){
pushMatrix();
translate(x, y);

noStroke();

fill(0, 234, 255, 150);
rect(0, 0, 80, 120);

for(var i = 0; i < waterfa.length; i++){
fill(255, 255, 255, waterfa[i].opacity);

waterfa[i].y += waterfa[i].speed;

rect(waterfa[i].x, waterfa[i].y, waterfa[i].size, waterfa[i].size);

if(waterfa[i].y - waterfa[i].size > 120){
    waterfa[i].y = random(-waterfa[i].size);
}

}

popMatrix();

wy++;


};

//}


var disablekeys = function(){
    for(var i = 0; i < circles.length; i++){
    if(keys[37]){
        circles[i].velx = -0.001;
    }
    if(keys[RIGHT]){
        circles[i].velx = -0.001;
    }
    if(keys[90]){
        circles[i].jumping = true;
        circles[i].vely = -0.01;
    }
    
  }
    
    
};
	
	// Main circle function (Bluey)
var Bluey = (function(){
var Circle = function(x, y, w, h, Inputs, col, data) {
    // x and y and other vars
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.Inputs = Inputs;
    this.col = col;
    this.rot = 0;
    this.nameValue = "\u0098";
    this.valueIN = this.data;
    this.direction = 1;
    this.moving = false;
    this.movtime = 0;

    // acceleration
    this.velx = 0;
    this.vely = 0;
    this.speed = 20;
    this.accelment = 0.12;
    this.deaccelment = 0.03;
    this.chargedaccel = 0;
    this.emotion = "defualt";
    this.grounded = false;
    this.moded = 0;// Default walking mode
    this.dash = false; // Blueys dash

    // jump
    this.jumping = false;
    this.jumpnum = 9;
    this.gravity = 0.2;

    // mischellaneous
    this.hearts = 21;
    this.damaged = false;
    this.dead = false;
    this.count = 0;
    this.state = "Normal";
    this.name = ["Bluey The Circle"];
    this.end = false;
};
Circle.prototype.update = function(blocks) {
    if (!this.dead) {
        if (keys[LEFT]) { 
            
            if(this.moded === 0){
            this.velx -= this.accelment;
            }
            if(this.moded === 1){
                this.vely -= this.accelment;
            }
            
            this.direction = -1;
            this.moving = true;
            this.movtime = 0;
            
        }else{
            this.moving = false;
            this.movtime++;
        }
        if (keys[RIGHT]) {
            if(this.moded === 0){
            this.velx += this.accelment;
            }
            if(this.moded === 1){
                this.vely += this.accelment;
            }

            this.direction = 1;
            this.moving = true;
            this.movtime = 0;
        }else{
            this.moving = false;
            this.movtime++;
        }
        
        
        /*
        if(keyCode === 32){
            this.speed = 10;
        }
        */
        if(keys[DOWN] && keys[32]){
            this.rot+= 3;
            this.chargedaccel += 0.03;
            if(keyR === true){
                this.velx += this.chargedaccel;
            }
        }
        if(this.chargedaccel > 0.2){
            this.chargedaccel = 0.2;
        }
        
        var velxSign = Math.sign(this.velx);
        var velxAbs = Math.abs(this.velx);
        if (!keys[LEFT] && !keys[RIGHT]) {
            if(velxAbs < this.accelment){
                velxAbs = 0;
            }
            else{
                velxAbs -= this.accelment;
            }
            
        }
        
        if(velxAbs > this.speed){
            velxAbs = this.speed;
            //this.dash = true;
        }
        

        


        this.velx = velxSign * velxAbs;
        this.x += this.velx;
        this.collide(blocks, this.velx, 0);
        this.collide(bblock, this.velx, 0);
        this.collide(dirts, this.velx, 0);
        this.collide(sands, this.velx, 0);
        this.collide(bridge, this.velx, 0);
        this.collide(movingblock, this.velx, 0);
        this.collide(unstables, this.velx, 0);
        this.collide(zobject, this.velx, 0);
        this.collide(windo, this.velx, 0);
        this.collide(gimmick1, this.velx, 0);
        if(gamemode === 2){
        if(lockb[0].locked === true){
            this.collide(lockb, this.velx, 0);
          }
        }
        if(this.state === "Burn"){
            this.collide(magma, this.velx, 0);
        }
        
        
        if (keys[90] && !this.jumping) {
    
            this.vely = -this.jumpnum;
            this.jumping = true;
            this.inair = true;
            this.moving = true;
            this.movtime = 0;
            
            if(Sound === true){
            
            }
            
        }
        if(this.moving === true){
            this.movtime = 0;
        }
        
        if(this.moded === 0){
        this.vely += this.gravity;
        }
        if(this.moded === 1){
            if(this.velx < 8){
                this.vely += this.gravity;
            }
        }
        if(!this.jumping){
            this.vely = 0;
            
            this.emotion = "defualt";
        }
        
        if(this.grounded === true){
            this.emotion = "bouncy";
        }
        if(this.state === "invince"){
            invtimer++;
            
if(invtimer > 725){
    this.state = "Normal";
}

        
        
        if(this.damaged === true){
            this.state = "Normal";
        }
            
        }
        if(this.damaged !== true){
            this.emotion = "default";
        }
        
        this.y += this.vely;
        this.jumping = true;
        this.collide(blocks, 0, this.vely);
        this.collide(bblock, 0, this.vely);
        this.collide(dirts, 0, this.vely);
        this.collide(sands, 0, this.vely);
        this.collide(bridge, 0, this.vely);
        this.collide(movingblock, 0, pformy);
        this.collide(unstables, 0, this.vely);
        this.collide(zobject, 0, this.vely);
        this.collide(gimmick1, 0, this.vely);
        if(gamemode === 2){
        if(lockb[0].locked === true){
            this.collide(lockb, 0, this.vely);
          }
        }
        
        if(this.state === "Burn"){
            this.collide(magma, 0, this.vely);
        }
        
    if(this.state === "Burn"){
        if(this.inair === true && keys[32]){
            if(this.direction === 1){
            this.velx += 130;
            }
            if(this.direction === -1){
                this.velx -= 130;
            }
        }
    }
    if(this.state === "Bubble"){
            if(keys[32]){
                this.vely+=40;
            }
            if(this.collide(blocks, 0, this.vely)){
                if(this.collide(blocks, this.velx, 0)){
                this.vely-=100;
            }
            }
        }
    if(this.state === "Breeze"){
        this.gravity = 0.1;
    }
    if(this.state === "Speedy"){
        this.speed = 10*2;
        this.accelment = 0.2;
    }
    if(this.state === "Normal"){
        this.gravity = 0.2;
        this.speed = 10;
        this.accelment = 0.12;
    }
        
        
        if (this.hearts < 0) {
            if(character === 0){
            this.deathanim();
            }
            if(character === 1){
                this.deathanim2();
            }
            this.state = "Dying";
            if(character === 0){
            if(this.deathanim.done === true){
                this.dead = true;
                dtrans = 0;
            }
        }
        if(character === 1){
            if(this.deathanim2.done2 === true){
                this.dead = true;
            }
        }
            
        
        }
        
        this.rot += this.velx;
        
        
    }
};
Circle.prototype.collide = function(obj, velx, vely, vx, vy) {
    for (var u = 0; u < obj.length; u++) {
        if (Collision(this, obj[u])) {
            if (vely > 0) {
                this.vely = 0;
                this.jumping = false;
                this.y = obj[u].y - this.h;
                
            }
            if (vely < 0) {
                this.vely = 0;
                this.jumping = true;
                this.y = obj[u].y + obj[u].h;
            }
            if (velx < 0) {
                this.velx = 0;
                this.x = obj[u].x + obj[u].w;
                
            }
            if (velx > 0) {
                this.velx = 0;
                this.x = obj[u].x - this.w;
            }

        }
    }
    for (var i = 0; i < slope.length; i++) {
        var r = slope[i];
        
        if (this.x + this.w > r.x && this.x < r.x + r.w && this.y + this.h > r.y && this.y < r.y + r.h) {
            if (slope[i].id === 0) {
                var y = beamCollide(this, r.x + 4, r.y + 2.6, r.x + 3 + r.w, r.y+ r.h);
                if (y) {
                    
                    this.y = y;
                    this.vely = 0;
                    this.accelment --;
                }
            }else if (slope[i].id === 1) {
                var y = beamCollide(this, r.x + r.w, r.y, r.x, r.y + r.h);
    
                if (y) {
                    
                    this.y = y;
                    this.vely = 0;
                    this.accelment --;
                }
            }
        }
        
    }
};
//



// Draw Bluey
Circle.prototype.draw = function(cam) {
    // blue color and circle size
    var view = cam.view(this);
    
    if(dbug){
        
        g.fill(50, 16, 173, 150);
        
        g.rect(this.x, this.y, this.w, this.h);
        
        fill(0);
        text(this.x, 300, 300);
        text(this.y, 400, 400);
        
        
        
    }
    
    
    if(character === 0){
    
    if(view){
     pushMatrix();
    translate(view.x+view.w/2,view.y+view.h/2);
    BlueyS(0, 0, 1, 1, "Normal", this.rot);
    popMatrix();
    noStroke();
    if(this.movtime > 500){
        pushMatrix();
        translate(view.x+view.w/2,view.y+view.h/2);
        BlueyS(0, 0, 1, 1, "Waiting2", 0);
        popMatrix();
    }
    if(this.movtime > 1500){
        pushMatrix();
        translate(view.x+view.w/2,view.y+view.h/2);
        BlueyS(0, 0, 1, 1, "Waiting", 0);
        popMatrix();
    }
    if(this.state === "Speedy"){
        
        pushMatrix();
       translate(view.x+view.w/2,view.y+view.h/2);
       BlueyS(view.x, view.y, view.w, view.h, "Normal", this.rot);
       popMatrix();
       noStroke();
       
       }
       if(this.state === "Burn"){
        pushMatrix();
       translate(view.x+view.w/2,view.y+view.h/2);
   
       BlueyS(0, 0, 1, 1, "Burn", this.rot);
       popMatrix();
       }
       if(this.state === "Breeze"){
        pushMatrix();
       translate(view.x+view.w/2,view.y+view.h/2);
       BlueyS(0, 0, 1, 1, "Breeze", this.rot);
       popMatrix();
       }
       if(this.state === "Bubble"){
        
        pushMatrix();
       translate(view.x+view.w/2,view.y+view.h/2);
       BlueyS(0, 0, 1, 1, "Bubble", this.rot);
       popMatrix();
       }
       if(this.emotion === "Dead" && this.state === "Normal"){
        
        pushMatrix();
       translate(view.x+view.w/2,view.y+view.h/2);
       BlueyS(0, 0, 1, 1, "Hurt", this.rot);
       popMatrix();
           
       }
       if(this.emotion === "Burns" && this.state === "Normal"){
        
        pushMatrix();
       translate(view.x+view.w/2,view.y+view.h/2);
       BlueyS(0, 0, 1, 1, "Burned", this.rot);
       popMatrix();
       }
       if(this.emotion === "Stuck" && this.state === "Normal"){
           
        pushMatrix();
       translate(view.x+view.w/2,view.y+view.h/2);
       BlueyS(0, 0, 1, 1, "Stuck", this.rot);
       popMatrix();
       
       }
       if(this.emotion === "Bounced" && this.state === "Normal"){
        pushMatrix();
       translate(view.x+view.w/2,view.y+view.h/2);
       BlueyS(0, 0, 1, 1, "Bounce", 0);
       popMatrix();
       }




    }
    
    if(view && this.state === "Normal" && spritemode === "BTC1"){
        pushMatrix();
        translate(view.x+view.w/2,view.y+view.h/2);
        rotate(this.rot);
    
    // Design
    
    pushStyle();
    //{hue(blue);// hue and others
    saturation(blue);
    blue(blue);
    fill(this.col);
//}
    strokeWeight(2);
    stroke(0, 47, 255);
    ellipse(0, 0, this.w, this.h);
    fill(255, 255, 255);
    ellipse(-10, -7, 15, 15);
    ellipse(10, -7, 15, 15);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    ellipse(-10, -7, 5, 5);
    ellipse(10, -7, 5, 5);
    fill(0, 255, 217);
    stroke(0, 255, 217);
    ellipse(0, 0, 5, 5);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    ellipse(0, 13, 20, 6); 
    popStyle();
    if(frameCount%300 < 20){
        fill(0, 47, 255);
        ellipse(-10, -7, 15, 15);
        ellipse(10, -7, 15, 15);
    }
    popMatrix();
    }
    
    
    
    
    
    /*
    if(view && this.emotion === "UP"){
        pushMatrix();
    translate(view.x+view.w/2,view.y+view.h/2);
    rotate(this.rot);
    
    // Design
    
    pushStyle();
    //{hue(blue);// hue and others
    saturation(blue);
    blue(blue);
    fill(0, 0, 209);
//}
    strokeWeight(2);
    stroke(8, 0, 209);
    ellipse(0, 0, view.w, view.h+10);
    fill(255, 255, 255);
    ellipse(-10, -7, 17, 17);
    ellipse(10, -7, 17, 17);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    ellipse(-10, -9, 5, 5);
    ellipse(10, -9, 5, 5);
    fill(0, 255, 217);
    stroke(0, 255, 217);
    ellipse(0, 0, 5, 5);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    arc(4, 8, 20, 20, 0, 123);  
    popStyle();
    if(frameCount%300 < 20){
        strokeWeight(0);
        fill(0, 0, 209);
        ellipse(-10, -7, 15, 15);
        ellipse(10, -7, 15, 15);
    }
    popMatrix();
    }
    */
    if(view && this.state === "invince"){
        pushMatrix();
    translate(view.x+view.w/2,view.y+view.h/2);
    rotate(this.rot);
    
    // Design
    
    pushStyle();
    //{hue(blue);// hue and others
    saturation(blue);
    blue(blue);
    fill(0 + sin(frameCount * 20) * 255, 0 + tan(frameCount * 20) * 255, 0 + cos(frameCount * 20) * 255);
    
    
//}
    strokeWeight(2);
    stroke(0 + sin(frameCount * 20) * 255, 0 + tan(frameCount * 20) * 255, 0 + cos(frameCount * 20) * 255);
    ellipse(0, 0, view.w, view.h);
    fill(255, 255, 255);
    ellipse(-10, -7, 17, 17);
    ellipse(10, -7, 17, 17);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    ellipse(-10, -7, 6, 6);
    ellipse(10, -7, 6, 6);
    fill(0, 255, 217);
    stroke(0, 255, 217);
    ellipse(0, 0, 5, 5);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    arc(4, 8, 20, 20, 0, 123); 
    popStyle();
    if(frameCount%300 < 20){
        stroke(0 + sin(frameCount * 20) * 255, 0 + tan(frameCount * 20) * 255, 0 + cos(frameCount * 20) * 255);
        fill(0 + sin(frameCount * 20) * 255, 0 + tan(frameCount * 20) * 255, 0 + cos(frameCount * 20) * 255);
        ellipse(-10, -7, 15, 15);
        ellipse(10, -7, 15, 15);
    }
    popMatrix();
//}
    }
    /*
    if(view && this.emotion === "bouncy"){
        pushMatrix();
    translate(view.x+view.w/2,view.y+view.h/2);
    rotate(this.rot);
    
    // Design
    
    pushStyle();
    //{hue(blue);// hue and others
    saturation(blue);
    blue(blue);
    fill(0, 0, 209);
//}
    strokeWeight(2);
    stroke(8, 0, 209);
    ellipse(0, 0, view.w+10, view.h);
    fill(255, 255, 255);
    ellipse(-10, -7, 15, 15);
    ellipse(10, -7, 15, 15);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    ellipse(-10, -7, 5, 5);
    ellipse(10, -7, 5, 5);
    fill(0, 255, 217);
    stroke(0, 255, 217);
    ellipse(0, 0, 5, 5);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    ellipse(0, 13, 20, 6); 
    popStyle();
    if(frameCount%300 < 20){
        fill(0, 0, 209);
        ellipse(-10, -7, 15, 15);
        ellipse(10, -7, 15, 15);
    }
    popMatrix();
    }
    */

    this.deathanim = function(){
        disablekeys();
        this.done = false;
        if(view && this.state === "Dying" && this.hearts < 0){
            pushMatrix();
            translate(view.x+view.w/2,view.y+view.h/2);
    DeathAnim(-300, -300, 0);
    popMatrix();
            
            
        }
        /*
        if(deathtime > 50){
            
            }
          if(faded === 0){
                var x = random(0, 360);
                particlez.push(new Particle1(view.x,view.y,cos(x)*random(5),sin(x)*random(5)));
            }
        */
        if(deathtime === 0){
            if(Sound === true){
            
            }
        }
            if(deathtime > 200 && dtrans === 255){
                this.done = true;
                this.dead = true;
                deathtime = 0;
                DAby = 300;
                DAbx = 300;
                DT = 0;
                DAbrot = 0;
                dtrans = 0;
            }
    };
    }
    if(character === 1){
        if(view && this.state === "Normal" && this.emotion === "default"){
            
        pushMatrix();
    translate(view.x+view.w/2,view.y+view.h/2);
    BoltyS(0, 0, 1, 1, "Normal", this.rot);
        popMatrix();
        noStroke();
    if(this.movtime > 1000){
        pushMatrix();
        translate(view.x+view.w/2,view.y+view.h/2);
        BoltyS(0, 0, 1, 1, "Waiting", 0);
        popMatrix();
    }
    if(this.movtime > 2000){
        pushMatrix();
        translate(view.x+view.w/2,view.y+view.h/2);
        BoltyS(0, 0, 1, 1, "Waiting2", 0);
        popMatrix();
    }
    
        }
        if(view && this.state === "Speedy"){
            pushMatrix();
    translate(view.x+view.w/2,view.y+view.h/2);
    BoltyS(0, 0, 1, 1, "Normal", this.rot);
        popMatrix();
        noStroke();
        }
        if(view && this.emotion === "Dead" && this.state === "Normal"){
            if(view){
         pushMatrix();
        translate(view.x+view.w/2,view.y+view.h/2);
        BoltyS(0, 0, 1, 1, "Hurt", this.rot);
        popMatrix();
            }
        }
        if(view && this.emotion === "Burns" && this.state === "Normal"){
            
         pushMatrix();
        translate(view.x+view.w/2,view.y+view.h/2);
        BoltyS(0, 0, 1, 1, "Burned", this.rot);
        popMatrix();
        }
        if(view && this.emotion === "Stuck" && this.state === "Normal"){
            
         pushMatrix();
        translate(view.x+view.w/2,view.y+view.h/2);
        BoltyS(0, 0, 1, 1, "Stuck", this.rot);
        popMatrix();
        
        }
        if(view && this.emotion === "Bounced" && this.state === "Normal"){
         pushMatrix();
        translate(view.x+view.w/2,view.y+view.h/2);
        BoltyS(0, 0, 1, 1, "Bounce", 0);
        popMatrix();
        }

        this.deathanim2 = function(){
            disablekeys();
            this.done2 = false;
            if(view && this.state === "Dying" && this.hearts < 0){
                pushMatrix();
                translate(view.x+view.w/2,view.y+view.h/2);
        DeathAnim(-300, -300, 1);
        popMatrix();
                
                
            }
            if(deathtime === 0){
                if(Sound === true){
                
                }
            }
                if(deathtime > 200){
                    this.done2 = true;
                    this.dead = true;
                    deathtime = 0;
                    DAby = 300;
                    DAbx = 300;
                    DT = 0;
                    DAbrot = 0;
                }
        };


    }
    
};
Circle.prototype.HUD = function(w, h) {
    noStroke();
    fill(255, 0, 0);
    ellipse(0, 0, w, h / 13);

    fill(255, 0, 0);
    textAlign(LEFT, LEFT);
    textSize(((w + h) / 2) / 25);
    text("Healthbar: " + this.hearts, 15, h / 13 - 10);

};

// stores bluey in a array


circles.add = function(x, y, w, h, Inputs, col) {
    this.push(new Circle(x, y, w, h, Inputs, col));
};
circles.apply = function(blocks, cam) {
    for (var i = 0; i < this.length; i++) {
        this[i].update(blocks);
        this[i].draw(cam);
        this[i].HUD();

    }
};
//


});
Bluey({});
// AI for Bolty
var rot1 = 0;
var Circle2 = (function(){
var Bolty = function(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.velx = 0;
    this.rot1 = 0;
    this.vely = 0;
    this.gravity = 0.2;
    this.jumpnum = 7;
    this.jump = false;
    this.speed = 7;
    this.accleration = 0.1;
    
};
Bolty.prototype.update = function(){
    this.y += this.vely;
    
    var left = circles[0].x +20 < this.x;
    var right = circles[0].x -20 > this.x;
    //var accleration = 0.1;
    if (left) { 
        this.velx -= this.accleration;
    }
    if (right) {
        this.velx += this.accleration;
    }
    
        
    /*
    if(keyCode === 32){
        this.speed = 10;
    }
    */

    
    
    var velxSign = Math.sign(this.velx);
    var velxAbs = Math.abs(this.velx);
    if (!left && !right) {
        if(velxAbs < this.accleration){
            velxAbs = 0;
        }
        else{
            velxAbs -= this.accleration;
        }
        
    }
    
    if(velxAbs > this.speed){
        velxAbs = this.speed;
    }
    this.velx = velxSign * velxAbs;
    this.x += this.velx;

    this.collide(blocks, this.velx, 0);
    
    this.vely += this.gravity;
    
    if(circles[0].y + 40 < this.y){
        this.jump = true;
        this.vely = -this.jumpnum;
        
    }

    this.collide(blocks, 0, this.vely);

    this.rot1 += this.velx;
    // this.velx++;
};
Bolty.prototype.collide = function(obj, velx, velyy){
    //var hasCollided = false;
    for (var u = 0; u < obj.length; u++) {
        if (Collision(this, obj[u])) {
            
            if (this.vely > 0) {
                //hasCollided = true;
                this.vely = 0;
                this.jump = false;
                this.y = obj[u].y - this.h;
            }
            if(this.vely < 0) {
                //hasCollided = true;
                this.vely = 0;
                this.jump = true;
                this.y = obj[u].y + obj[u].h;
            }
            /*
             if (this.velx < 0) {
                 //hasCollided = true;
                 this.vely = 0;
                 this.x = obj[u].x + obj[u].w;
                
             }
             
             if (this.velx > 0) {
                 //hasCollided = true;
                 this.velx = 0;
                 this.x = obj[u].x - this.w;
             }
             */
            
             

        }
    }
    for (var i = 0; i < slope.length; i++) {
        var r = slope[i];
        
        if (this.x + this.w > r.x && this.x < r.x + r.w && this.y + this.h > r.y && this.y < r.y + r.h) {
            if (slope[i].id === 0) {
                var y = beamCollide(this, r.x + 4, r.y + 2.6, r.x + 3 + r.w, r.y+ r.h);
                if (y) {
                    
                    this.y = y;
                    this.vely = 0;
                }
            }else if (slope[i].id === 1) {
                var y = beamCollide(this, r.x + r.w, r.y, r.x, r.y + r.h);
    
                if (y) {
                    
                    this.y = y;
                    this.vely = 0;
                }
            }
        }
        
    }
    
    
};
Bolty.prototype.draw = function(cam){
    var view = cam.view(this);
    if(view){
        pushMatrix();
    translate(view.x+view.w/2,view.y+view.h/2);
    rotate(this.rot1);
        fill(25, 168, 168);
        ellipse(0, 0, view.w, view.h+5);
        
        fill(50, 235, 235);
        ellipse(0, 0, view.w+2, view.h+2);    
        
        noStroke();
        fill(255);
        ellipse(12, 0, 13, 9);
        ellipse(-12, 0, 13, 9);
        fill(25, 168, 168);
        ellipse(12, 1, 6, 6);
        ellipse(-12, 1, 6, 6);
        fill(0);
        ellipse(12, 0, 6.5, 6.5);
        ellipse(-12, 0, 6.5, 6.5);
        image(Boltyslightning, -5, -20, 11, 40);
        noFill();
        strokeWeight(2);
        stroke(0);
        arc(-7, 9, 12, 15, 40, 153); 
        
        if(frameCount%300 < 20){
            noStroke();
            fill(50, 235, 235);
            ellipse(12, -1, 13, 11);
            ellipse(-12, -1, 13, 11);
            
            
        }
        
        
        
        
        noStroke();
        
        popMatrix();
    } 
};

secondplayerai.add = function(x, y, w, h){
    this.push(new_.call(Bolty,x, y, w, h));
    
};
secondplayerai.apply = function(cam){
    for(var i = 0; i < this.length; i++){
        this[i].draw(cam);
        this[i].update();
        //this[i].collide(blocks, dirt, sands, bridge, zobject, slope);
        
    }
    
};
});

Circle2({});


/** -- Circle Trail -- **/
//{
var trailsArr = []; // define before because it after bluey
var Trail = function(x,y,w,h, which){
this.x = x;
this.y = y;
this.h = h;
this.w = w;
this.transparency = 255;
this.rate = 30;
this.nameValue = "\u0032";
this.which = which;


};
Trail.prototype.draw = function(cam) {
    var view = cam.view(this);
    
    if(view){
        if(this.which === "bluey"){
            noStroke();
fill(0, 0, 200,this.transparency);
ellipse(view.x, view.y, view.w, view.h);
}
        if(this.which === "bolty"){
            fill(3, 130, 130, this.transparency);
            ellipse(view.x, view.y, view.w, view.h+5);
            fill(50, 235, 235, this.transparency);
            ellipse(view.x, view.y, view.w, view.h);
            
        }
}
};
Trail.prototype.update = function(){

    this.transparency = this.transparency - this.rate;
};

trailsArr.add = function(x,y, transparency, rate){
this.push(new Trail(+20,+20,40,40));
};
trailsArr.apply = function(cam){
for(var i = 0; i < trailsArr.length; i++){
    trailsArr[i].update();
    if(cam){
    trailsArr[i].draw(cam);
    }
    trailsArr[i].draw();
    if(trailsArr[i].transparency < 0){
        trailsArr.pop();
        i--;
    }
}
};
//}
	// Loaded images will go here
var loadedImages = [];

// Current index of the image being loaded
var imgIndex = 0;

// The current image being loaded
var curImg;
// cache is an object full of loaded images
var cache = {};

// the current index of images we loaded
var cur_load = 0;
    
// access the respective image (give the image name)
var Get = function(img_name) {
    // if the image is already in "cache", just return the image because we have already loaded it into the cache
    if (img_name in cache) {
        return cache[img_name];
    }
    
    // otherwise, Get image and store it in "cache"
    // this statement is doing 2 things: first we are caching the image by calling the
    // images code 'images[img_name]()', which returns an image & that is what we store in
    // the 'cache' object. 2nd we return this new image
    return (cache[img_name] = images[img_name]()); 
    
    // so basically, the first time we call 'Get(img_name)' we will load it into the 
    // 'cache' object. This happens in the load scene.
    // Then after that it is already loaded so we just return the cached image.
};

// load images. 'func' is a function which we call upon load complete. 
var loadImages = function(func) {
    // call the image using 'Get' as long as we are less than the last image
    // Object.keys(object).length returns the # of entries/attributes in an object
    if (cur_load < Object.keys(images).length) {
        // Get (load) the image. Object.entries(object)[i][0] returns the ith attributes name in the object. 
        Get(Object.entries(images)[cur_load][0]);
        // continue
        cur_load++;
    // ELSE IF loading is complete
    } else {
        images.length = 0; // empty array
        cur_load = 0; // reset current loading index
        func(); // call end-function (do something)
    }
};


var Blocs = (function(){

var Waterfall = function(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
};
Waterfall.prototype.draw = function(cam) {
   var view = cam.view(this);
   if(view){
       waterfall(view.x, view.y);
       
   }
    
    
};
waterfal.add = function(x, y, w, h) {
    this.push(new Waterfall(x, y, w, h));
};
waterfal.apply = function(cam) {
    for (var i = 0; i < this.length; i++) {
        this[i].draw(cam);
    }
};

var Block = function(x, y, w, h, r, col, id) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.r = 10;
    this.col = color(173, 107, 2);
    this.namevalue = "1s4f5k3y2t8y8t9r56k68o";
    this.id = floor(random(0, 3));
};
Block.prototype.draw = function(cam) {
    var view = cam.view(this);
    if(view){
        if(gamemode === 0){
        this.block = function(){
        image(Get('Image1'), view.x, view.y);
    };
    if(level === 0){
        this.block();
    }
    if(level === 1){
        this.block();
    }
    if(level === 2){
        this.block();
    }
    this.rock = function(){
        image(Get('Image26r'), view.x, view.y, 40, 30);
        image(RRblockb, view.x, view.y+30);
         };
     if(level === 3){
         this.rock();
     }
     if(level === 4){
         this.rock();
     }
     if(level === 5){
         this.rock();
     }
     this.mmz = function(){
         image(Get('MMblock'), view.x, view.y);
         
         
         
     };
     if(level === 6){
     this.mmz();
     }
     if(level === 7){
     this.mmz();
     }
     if(level === 8){
     this.mmz();
     }
     this.desert = function(){
         image(Get('DDblock'), view.x, view.y);
     };
     if(level === 9){
         this.desert();
     }
     if(level === 10){
         this.desert();
     }
     
     if(level === 11){
         this.desert();
     }
     this.wood = function(){
         image(Get('WWblock'), view.x, view.y, 40, 40);
     };
     if(level === 12){
         this.wood();
     }
     if(level === 13){
         this.wood();
     }
     if(level === 14){
         this.wood();
     }
     
     this.sandp = function(){
         image(Get('CCblock'), view.x, view.y, 40, 40);
         
         
     };
     if(level === 15){
         this.sandp();
     }
     if(level === 16){
         this.sandp();
     }
     if(level === 17){
         this.sandp();
     }
     
     this.oilb = function(){
         image(Get('AAblock'), view.x, view.y, 40, 40);
         
         
     };
     if(level === 18){
         this.oilb();
     }
     if(level === 19){
         this.oilb();
     }
     if(level === 20){
         this.oilb();
     }
     if(level === 21){
         image(Get('TTZblock'), view.x, view.y);
     }
     if(level === 22){
         image(Get('TTZblock'), view.x, view.y);
     }
     if(level === 23){
         image(Get('TTZblock'), view.x, view.y);
     }

     if(level === 24){
        switch(this.id){
            case 0:
        image(Get('IIZblock1'), view.x, view.y);
        break;
        case 1:
            image(Get('IIZblock2'), view.x, view.y);
        break;
        case 2:
            image(Get('IIZblock3'), view.x, view.y);
        break;


        }
     }
     
     
     if(level === 34){
         image(Get('HHZblock'), view.x, view.y);
     }
    }
    if(gamemode === 1){
        if(level > -1){
        image(ggblock, view.x, view.y);
        }
        if(level > 1){
            image(Get('RRblock'), view.x, view.y);
        }
    }
    if(gamemode === 3){
        fill(86, 179, 237);
        rect(view.x, view.y, 40, 40);
        fill(0);
        rect(view.x, view.y, 40, 2);
        noStroke();

    }
    
    }
    
};

// apply blocks in a special 

blocks.add = function(x, y, w, h, r, col, id) {
    this.push(new_.call(Block,x, y, w, h, r, col, id));
};
blocks.apply = function(cam) {
    for (var i = 0; i < this.length; i++) {
        this[i].draw(cam);
    }
};


var Platform = function(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
};  
Platform.prototype.draw = function(cam) {
    var view = cam.view(this);
    if(view){
        
        image(Get('Image1'), view.x, view.y+pformy);
        
        pformy++;
        
        if(pformy > view.y+400){
            pformy -= 4;
        }
        if(pformy < view.y){
            pformy += 4;
        }
        
        
    }
    
};
movingblock.add = function(x, y, w, h) {
    this.push(new Platform(x, y, w, h));
};
movingblock.apply = function(cam) {
    for (var i = 0; i < this.length; i++) {
        this[i].draw(cam);
    }
};

var FrontB = function(x, y, w, h, id, id2){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.id = id;
    this.id2 = floor(random(0, 2));
    
    
};
FrontB.prototype.draw = function(cam) {
    var view = cam.view(this);
    if(view){
        if(mode === 0){
       if(level > -1){
        if(this.id === 0){
            image(Get('Image6'), view.x, view.y);
        }
        if(this.id === 1){
            image(Get('Image5'), view.x, view.y);
        }
    }
        if(level > 2){
            
            if(this.id === 0){
                image(Get('Sidebl'), view.x, view.y, 40, 40);
            }
            if(this.id === 1){
                image(Get('SideblA'), view.x, view.y, 40, 40);
            }
            
            
        }
        if(level > 5){
            switch(this.id2){
                
                case 0:
            image(Get('MMfrontb'), view.x, view.y);
            break;
            case 1:
                image(Get('MMfrontb2'), view.x, view.y);
            break;
            
            
            
            }
            if(this.id === 1){
                image(Get('MMfrontba'), view.x, view.y);
            }
        }
        
        if(level > 8){
            image(Get('DDfrontb'), view.x, view.y);
            if(this.id === 1){
                image(Get('DDfrontb2'), view.x, view.y);
            }
        }
        if(level > 14){
            image(Get('CCfrontb1'), view.x, view.y);
        }
        if(level > 23){
            if(this.id === 0){
            image(Get('IIZsideB'), view.x, view.y);
            }
            if(this.id === 1){
                image(Get('IIZsideB2'), view.x, view.y);
                }
        }
    }
        if(mode === 1){
        if(this.id === 0){
            if(level > -1){
            switch(this.id2){
                 case 0:
                  fill(255, 128, 0);
                  rect(view.x, view.y, 40, 40);
                  fill(255, 255, 0, 100);
                  rect(view.x, view.y, 10, 40);
                 break;
                 case 1:
                  fill(179, 69, 6);
                  rect(view.x, view.y, 40, 40);
                  fill(255, 255, 0, 150);
                  rect(view.x, view.y, 10, 40);
                 break;
            }
        }
    }
    if(this.id === 1){
        if(level > -1){
            switch(this.id2){
                 case 0:
                  fill(255, 128, 0);
                  rect(view.x, view.y, 40, 40);
                  fill(0, 100);
                  rect(view.x+30, view.y, 10, 40);
                 break;
                 case 1:
                  fill(179, 69, 6);
                  rect(view.x, view.y, 40, 40);
                  fill(0, 150);
                  rect(view.x+30, view.y, 10, 40);
                 break;
            }
        }
    }
        
    }

    if(mode === 3){
        if(this.id === 0){
        fill(86, 179, 237);
        rect(view.x, view.y, 40, 40);

        fill(0, 100);
        rect(view.x, view.y, 10, 40);
    }
    if(this.id === 1){
        fill(86, 179, 237);
        rect(view.x, view.y, 40, 40);

        fill(0, 100);
        rect(view.x+30, view.y, 10, 40);

    }







    }
        
    }
    
    
};
bblock.add = function(x, y, w, h, id, id2) {
    this.push(new_.call(FrontB,x, y, w, h, id, id2));
};
bblock.apply = function(cam) {
    for (var i = 0; i < this.length; i++) {
        this[i].draw(cam);
    }
};


var Dirt = function(x,y,w,h, id, id2, id3, id4, id5){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.id = floor(random(0, 5));
    this.id2 = floor(random(0, 8));
    this.id3 = floor(random(0, 2));
    this.id4 = floor(random(0, 3));
    this.id5 = floor(random(0, 4));
    
    
};
Dirt.prototype.draw = function(cam) {
    var view = cam.view(this);
    if(view){
        if(gamemode === 0){
            if(level === 0){
                image(Get('Image7'), view.x, view.y);
                image(Get('Image7'), view.x+40, view.y);
                image(Get('Image7'), view.x+80, view.y);
                image(Get('Image7'), view.x, view.y+40);
                image(Get('Image7'), view.x+40, view.y+40);
                image(Get('Image7'), view.x+80, view.y+40);
                image(Get('Image7'), view.x, view.y+80);
                image(Get('Image7'), view.x+40, view.y+80);
                image(Get('Image7'), view.x+80, view.y+80);
                
            }
            if(level === 1){
                image(Get('Image7'), view.x, view.y);
            }
            if(level === 2){
                image(Get('Image7'), view.x, view.y);
            }
        switch(this.id){
            case 0:
            
            if(level === 3){
                image(Get('Image25r'), view.x, view.y, 40, 40);
            }
            
            
            
            break;
            case 1:
            if(level === 3){
                image(Get('Image29r'), view.x, view.y, 40, 40);
            }
            
            break;
            case 2:
                if(level === 3){
                    image(Get('Image28r'), view.x, view.y, 80, 40);
                }
            break;
            case 3:
                if(level === 3){
                    image(Get('Image30r'), view.x, view.y, 40, 40);
                }
            break;
            case 4:
                if(level === 3){
                image(Get('Image31r'), view.x, view.y, 40, 40);
                }
            break;
            
            
            
         }
         switch(this.id3){
             case 0:
                 if(level === 9){
                image(Get('DDdirt'), view.x, view.y);
            }
            break;
            case 1:
                if(level === 9){
                image(Get('DDdirt2'), view.x, view.y);
            }
            break;
             
             
             
             
         }
         if(level === 6){
             image(Get('MMdirt'), view.x, view.y);
         }
         if(level === 12){
             image(Get('WWdirt'), view.x, view.y);
         }
         if(level === 21){
             image(Get('TTZdirt'), view.x, view.y, 40, 40);
         }
         if(level === 22){
             image(Get('TTZdirt'), view.x, view.y, 40, 40);
         }
         switch(this.id4){
                 case 0:
                     if(level === 21){
             image(Get('TTZdirt'), view.x, view.y, 40, 40);
                     }
                     if(level === 24){
                     image(Get('IIZdirt1'), view.x, view.y);
                     }
             break;
             case 1:
                 if(level === 21){
             image(Get('TTZdirt2'), view.x, view.y, 40, 40);
             }
             if(level === 24){
                     image(Get('IIZdirt2'), view.x, view.y);
                     }
             break;
             case 2:
                 if(level === 21){
             image(Get('TTZdirt3'), view.x, view.y, 40, 40);
             }
             if(level === 24){
                image(Get('IIZdirt3'), view.x, view.y);
                }
             break;
             
             
             }

             switch(this.id5){
case 0:
    if(level === 24){
        image(Get('IIZdirt1'), view.x, view.y);
        }
break;
case 1:
    if(level === 24){
        image(Get('IIZdirt2'), view.x, view.y);
        }
break;
case 2:
    if(level === 24){
        image(Get('IIZdirt3'), view.x, view.y);
        }
break;
case 3:
    if(level === 24){
        image(Get('IIZdirt4'), view.x, view.y);
        }
break;

             }
         if(level === 34){
             image(Get('HHZdirt'), view.x, view.y);
         }
        }
        if(gamemode === 1){
            image(ggdirt, view.x, view.y);
        }
        if(gamemode === 2){
            
            switch(this.id2){
                case 0:
                fill(255, 0, 0, 135);
rect(view.x, view.y, 40, 40);
break;
case 1:
fill(255, 89, 0, 135);
rect(view.x, view.y, 40, 40);
break;
case 2:
fill(255, 255, 0, 135);
rect(view.x, view.y, 40, 40);
break;
case 3:
fill(0, 255, 0, 135);
rect(view.x, view.y, 40, 40);
break;
case 4:
fill(4, 194, 4, 135);
rect(view.x, view.y, 40, 40);
break;
case 5:
fill(0, 221, 255, 135);
rect(view.x, view.y, 40, 40);
break;
case 6:
fill(0, 0, 255, 135);
rect(view.x, view.y, 40, 40);
break;
case 7:
fill(187, 0, 255, 135);
rect(view.x, view.y, 40, 40);
break;
case 8:
fill(255, 0, 255, 135);
rect(view.x, view.y, 40, 40);
break;
                
                
                
                
                
                
                
                
            }
        }
        if(gamemode === 3){
            fill(86, 179, 237);
            rect(view.x, view.y, 40, 40);
        }
        
    }
    
    
    
};

dirts.add = function(x,y,w,h, id, id2, id3, id4, id5){
    this.push(new_.call(Dirt,x,y,w,h, id, id2, id3, id4, id5));
    
};
dirts.apply = function(cam){
    for(var i = 0; i < this.length; i++){
        this[i].draw(cam);
    }
};

var Designobj = function(x, y, w, h, id){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.id = id;
    
    
    
};

Designobj.prototype.draw = function(cam) {
     var view = cam.view(this);
    if(view){
        image(Get('EEdock'), view.x, view.y);
    }
     
};

zobject.add = function(x, y, w, h, id){
    this.push(new_.call(Designobj,x,y,w,h,id));
};
zobject.apply = function(cam){
    for(var i = 0; i < this.length; i++){
        this[i].draw(cam);
    }
};

var SSLock = function(x, y, w, h, locked){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h  = h;
    
    this.locked = true;
    
    
};

SSLock.prototype.draw = function(cam) {
    var view = cam.view(this);
    if(view){
        if(this.locked){
        fill(random(255), random(255), random(255), 135);
        rect(view.x, view.y, 40, 40);
        }
    }
    
};

SSLock.prototype.update = function(){
    
    if(gamemode === 2){
    if(amount !== 32){
        //this.locked = true;
    }
    if(amount2){
        this.locked = false;
    }
    if(sphereamount2 > 45){
        this.locked = false;
    }
    }
    
};

lockb.add = function(x, y, w, h, locked){
    this.push(new_.call(SSLock, x, y, w, h, locked));
};
lockb.apply = function(cam){
    for(var i = 0; i < this.length; i++){
        this[i].draw(cam);
        this[i].update();
    }
};

var Phanto = function(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h  = h;
    
    
    
    
    
};
Phanto.prototype.draw = function(cam) {
    var view = cam.view(this);
    if(view){
        if(gamemode === 0){
        image(Get('Image7'), view.x, view.y);
        fill(0, 100);
        rect(view.x, view.y, 40, 40);
        }
        if(gamemode === 1){
            fill(255, 128, 0);
            rect(view.x, view.y, view.w, view.h);
        }
        
        
        
    }
    
};

pblock.add = function(x, y, w, h){
    this.push(new_.call(Phanto,x,y,w,h));
};
pblock.apply = function(cam){
    for(var i = 0; i < this.length; i++){
        this[i].draw(cam);
    }
};

var Sandc = function(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    
    
    
};
Sandc.prototype.draw = function(cam) {
    var view = cam.view(this);
    if(view){
        image(Get('Image14'), view.x, view.y, 200, 120);
        if(level > 8){
            image(Get('DDsand'), view.x, view.y);
        }
        if(level > 11){
            image(Get('WWlongb'), view.x, view.y);
        }
        if(level === 34){
            image(Get('HHZobj2'), view.x, view.y);
        }
    }
    
    
};

sands.add = function(x, y, w, h){
    this.push(new_.call(Sandc, x,y,w,h));
};
sands.apply = function(cam) {
    for (var i = 0; i < this.length; i++) {
        this[i].draw(cam);
    }
};

var Windowp = function(x, y, w, h, id){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.collected = false;
    
    
    //id for the powerup and which one
    this.id = id;
    
    
};
Windowp.prototype.draw = function(cam) {
    var view = cam.view(this);
    if(view){
        
        if(!this.collected){
        if(this.id === 0){
            image(fl, view.x, view.y, 40, 40);
            image(windows, view.x, view.y-5);
        }
        if(this.id === 1){
            image(breeze, view.x, view.y, 40, 40);
            image(windows, view.x, view.y-5);
        }
        if(this.id === 2){
            image(bubble, view.x, view.y, 40, 40);
            image(windows, view.x, view.y-5);
        }
        if(this.id === 3){
            strokeCap(ROUND);
strokeWeight(4);
stroke(255, 183, 0);
fill(255, 255, 0);
ellipse(view.x+25, view.y+20, sin(frameCount%360)*20, 20);
noStroke();
noFill();
strokeWeight(1.5);
stroke(120, 106, 2);
ellipse(view.x+25, view.y+20, sin(frameCount%360)*10, 10);
stroke(0, 0, 0, 200);
strokeWeight(4);
arc(view.x+25, view.y+20, sin(frameCount%360)*5, 5, 70, 300);
            
            image(windows, view.x, view.y-5);
        }
        if(this.id === 4){
            image(Get('ELI'), view.x, view.y);
image(windows, view.x, view.y-5);

        }
        if(this.id === 5){
            fill(255, 242, 0);
textSize(30);
text("x2", view.x+10, view.y+35);
image(windows, view.x, view.y-5);

        }
        
        }
    }
    
    
};

Windowp.prototype.update = function(){
    for(var i = 0; i < circles.length; i++){
        if(!this.collected){
    if(Collision(this,circles[i], secondplayerai[0])&&circles[i].vely>0&&circles[i].jumping){
        
            circles[i].vely -= 10;
            this.collected = true;
            if(this.id === 0){
                circles[i].state = "Burn";
                if(Sound === true){
                
                }
            }
            if(this.id === 1){
                circles[i].state = "Breeze";
                if(Sound === true){
                
                }
                
                    
                }
            if(this.id === 2){
                circles[i].state = "Bubble";
            }
            if(this.id === 3){
                amount += 10;
                if(Sound === true){
                
                }
                
            }
            if(this.id === 4){
                Lives += 1;
            }
            if(this.id === 5){
                circles[i].state = "Speedy";
            }
    }
    }
        
        
    }
    
    
    };
    


windo.add = function(x, y, w, h, id){
    this.push(new_.call(Windowp, x,y,w,h, id));
};
windo.apply = function(cam) {
    for (var i = 0; i < this.length; i++) {
        this[i].draw(cam);
        this[i].update(circles);
    }
};

var Bigblock = function(x, y, w, h){
        this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
};
Bigblock.prototype.draw = function(cam) {
        var view = cam.view(this);
    if(view){
        if(level === 0){
            image(Get('EEBB'), view.x, view.y, 200, 200);
        }
        if(level === 1){
            image(Get('EEBB'), view.x, view.y, 200, 200);
        }
        if(level === 2){
            image(Get('EEBB'), view.x, view.y, 200, 200);
        }
        if(level === 3){
     image(Get('RRbricks'), view.x, view.y, 200, 200);
        }
        if(level === 4){
     image(Get('RRbricks'), view.x, view.y, 200, 200);
        }
        if(level === 5){
     image(Get('RRbricks'), view.x, view.y, 200, 200);
        }
        if(level === 6){
            image(Get('MMBBlock'), view.x, view.y, 200, 200);
        }
        if(level === 7){
            image(Get('MMBBlock'), view.x, view.y, 200, 200);
        }
        if(level === 8){
            image(Get('MMBBlock'), view.x, view.y, 200, 200);
        }

        if(level === 24){
            image(Get('IIZbigobj'), view.x, view.y);
        }



        if(level === 34){
            image(Get('HHZBobj'), view.x, view.y+50);
        }

        if(mode === 1){
            image(GGbblock, view.x, view.y, 200, 200);
        }
     
    }
};
Bigobj.add = function(x, y, w, h){
    this.push(new_.call(Bigblock, x, y, w, h));
};
Bigobj.apply = function(cam) {
    for (var i = 0; i < this.length; i++) {
        this[i].draw(cam);
    }
};

var Grassg = function(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
};
Grassg.prototype.draw = function(cam) {
    var view = cam.view(this);
    if(view){
     image(grassimg, view.x, view.y+20);
     
    }
};

grassg.add = function(x, y, w, h){
    this.push(new Grassg(x, y, w, h));
};
grassg.apply = function(cam) {
    for (var i = 0; i < this.length; i++) {
        this[i].draw(cam);
    }
};

var Pole = function(x, y, w, h, id, id2){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.id = floor(random(0, 3));
    this.id2 = floor(random(0, 2));
    
};
Pole.prototype.draw = function(cam) {
    var view = cam.view(this);
    if(view){
        if(gamemode === 0){
            
            
            switch(this.id){
                case 0:
                    if(level === 0){
        image(Get('TotemPole'), view.x, view.y);
                    }
                    if(level === 9){
                        image(Get('DDpillar'), view.x, view.y-10);
                    }
        break;
        case 1:
            if(level === 0){
            image(Get('TotemPole2'), view.x, view.y);
            }
            if(level === 9){
                        image(Get('DDpillar2'), view.x, view.y-10);
                    }
        break;
        case 2:
            if(level === 0){
            image(Get('TotemPole3k'), view.x, view.y);
            }
            if(level === 9){
                        
                    }
        break;
            
            }
            switch(this.id2){
                case 0:
                if(level === 3){
                    image(Get('Image32r'), view.x, view.y, 100, 500);
                }
                break;
                case 1:
                    if(level === 3){
                    image(Get('PillarA'), view.x, view.y, 100, 500);
                    }
                break;
                
            }
            
            if(level > 2){
                
            }
            if(level === 6){
                
                image(Get('MMscaffold'), view.x, view.y+17);
            }
            if(level === 7){
                
                image(Get('MMscaffold'), view.x, view.y+17);
            }
            if(level === 8){
                
                image(Get('MMscaffold'), view.x, view.y+17);
            }
            if(level === 12){
                image(Get('WWtrunk'), view.x, view.y+20);
            }
            if(level === 18){
                image(Get('AAlightpost'), view.x-25, view.y-80);
            }
            if(level === 24){
                image(Get('IIZobj1'), view.x, view.y-160, 90, 200);
            }
            if(level === 34){
                switch(this.id2){
                    case 0:
                        image(Get('HHZruin1'), view.x, view.y);
                    break;
                    case 1:
                        image(Get('HHZruin2'), view.x, view.y);
                    break;
                    
                }
            }
        }
        
        
        if(gamemode === 1){
            if(level === 0){
            image(sunfl, view.x, view.y);
            }
            if(level === 2){
            image(Get('RRruin1'), view.x, view.y);
            }
        }
        
        
    }
    
    
};


tpole.add = function(x, y, w, h, id, id2){
    this.push(new_.call(Pole, x, y, w, h, id, id2));
};
tpole.apply = function(cam) {
    for (var i = 0; i < this.length; i++) {
        this[i].draw(cam);
    }
};

var Bridge = function(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w; 
    this.h = h;
};
Bridge.prototype.draw = function(cam) {
    var view = cam.view(this);
    if(view){
        image(brid, view.x-3, view.y-3, 22, 22);
        image(brid, view.x-3+20, view.y-3, 22, 22);
    }
};

bridge.add = function(x, y, w, h){
    this.push(new_.call(Bridge, x,y,w,h));
};
bridge.apply = function(cam) {
    for (var i = 0; i < this.length; i++) {
        this[i].draw(cam);
    }
};

var Chunk1 = function(x, y, w, h, id, id2, id3, id4){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.id = floor(random(0, 4));
    this.id2 = floor(random(0, 5));
    this.id3 = floor(random(0, 2));
    this.id4 = floor(random(0, 3));
    
    
};
Chunk1.prototype.draw = function(cam) {
    var view = cam.view(this);
    if(view){
        if(gamemode === 0){
        switch(this.id){
        case 0:
        if(level === 0){
        image(Get('Image9'), view.x, view.y, 120, 120);
        }
        if(level === 1){
        image(Get('Image9'), view.x, view.y, 120, 120);
        }
        if(level === 3){
            image(Get('Image17'), view.x, view.y);
        }
        break;
        case 1:
            /*
            
            if(level === 0){
        image(chunk3a, view.x, view.y);
            }
            */
            if(level === 0){
            image(Get('EEchunkA1'), view.x, view.y, 120, 120);
            }
            if(level === 1){
            image(Get('EEchunkA1'), view.x, view.y, 120, 120);
            }
            if(level === 3){
                image(Get('Image21r'), view.x, view.y, 120, 120);
            }
        break;
        case 2:
            if(level === 0){
        image(Get('Image10'), view.x, view.y, 120, 120);
            }
            if(level === 1){
        image(Get('Image10'), view.x, view.y, 120, 120);
            }
            if(level === 3){
                image(Get('Image22r'), view.x, view.y);
            }
        break;
        case 3:
            if(level === 0){
        image(Get('Image11'), view.x, view.y, 120, 120);
            }
            if(level === 1){
        image(Get('Image11'), view.x, view.y, 120, 120);
            }
            if(level === 3){
                image(Get('Image23r'), view.x, view.y, 120, 120);
            }
        break;
        }
        
        switch(this.id2){
            case 0:
                if(level === 6){
                image(Get('MMchunk3'), view.x, view.y);
                }
                if(level === 24){
                    image(Get('IIZchunk1'), view.x, view.y, 120, 120);
                }
            break;
            case 1:
                if(level === 6){
                image(Get('MMchunk5'), view.x, view.y);
            }
            if(level === 24){
                image(Get('IIZchunk2'), view.x, view.y, 120, 120);
            }
            break;
            case 2:
                if(level === 6){
                image(Get('MMchunk6'), view.x, view.y);
                }
                if(level === 24){
                    image(Get('IIZchunk3'), view.x, view.y, 120, 120);
                }
            break;
            case 3:
                if(level === 6){
                image(Get('MMchunk7'), view.x, view.y);
                }
                if(level === 24){
                    image(Get('IIZchunk4'), view.x, view.y, 120, 120);
                }
            break;
            case 4:
                if(level === 6){
                image(Get('MMchunk8'), view.x, view.y);
            }
            if(level === 24){
                image(Get('IIZchunk5'), view.x, view.y, 120, 120);
            }
            break;
            
        }
        
        if(level === 9){
            image(Get('DDchunk'), view.x, view.y);
        }
        if(level === 12){
            image(Get('WWleaf'), view.x, view.y, 120, 120);
        }
        if(level === 18){
            switch(this.id3){
                case 0:
                    image(Get('AAchunk1'), view.x, view.y);
                break;
                case 1:
                    image(Get('AAchunk2'), view.x, view.y);
                break;
            }
        }
        if(level === 21){
            switch(this.id4){
                case 0:
                image(Get('TTZchunk1'), view.x, view.y);
                break;
                case 1:
                image(Get('TTZchunk2'), view.x, view.y);
                break;
                case 2:
                image(Get('TTZchunk3'), view.x, view.y);
                break;
                
            }
        }
        
        }
        
        if(gamemode === 1){
            image(ggchunk, view.x, view.y);
        }

        if(gamemode === 3){
            fill(39, 104, 145);
            rect(view.x, view.y, 120, 120);

        }
        
        
    }
    
    
    
};
chunk.add = function(x,y,w,h, id, id2, id3){
    this.push(new_.call(Chunk1, x,y,w,h, id, id2, id3));
};
chunk.apply = function(cam){
    for(var i = 0; i < this.length; i++){
        this[i].draw(cam);
    }
    
    
};

var Chunk2 = function(x, y, w, h, id, id2){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.id = floor(random(0, 3));
    
    
    
    
};
Chunk2.prototype.draw = function(cam) {
    var view = cam.view(this);
    if(view){
        if(gamemode === 0){
        
        switch(this.id){
        case 0:
            if(level === 0){
        image(chunk3, view.x, view.y);
            }
            if(level === 1){
        image(chunk3, view.x, view.y);
            }
            if(level === 3){
                image(Get('Image18'), view.x, view.y);
            }
            if(level === 6){
                image(Get('MMchunk'), view.x,view.y, 160, 160);
            }
            
        break;
        case 1:
            if(level === 0){
        image(Get('Image12'), view.x, view.y);
            }
            if(level === 1){
        image(Get('Image12'), view.x, view.y);
            }
            if(level === 3){
                
            }
            if(level === 6){
                image(Get('MMchunk1'), view.x,view.y, 160, 160);
            }
        break;
        case 2:
            if(level === 0){
        image(Get('Image11'), view.x, view.y);
            }
            if(level === 1){
        image(Get('Image11'), view.x, view.y);
            }
            if(level === 3){
                
            }
            if(level === 6){
                image(Get('MMchunk2'), view.x, view.y, 160, 160);
            }
        break;
    }
    
    
        if(level === 3){
            image(Get('Image18'), view.x, view.y);
        }
        if(level === 4){
            image(chunk4, view.x, view.y);
        }
        if(level > 11){
                image(Get('WWchunk1'), view.x, view.y, 160, 160);
            }
        
        
        }
        if(gamemode === 1){
            image(ggchunk2, view.x, view.y);
        }
        
        if(gamemode === 3){

            strokeWeight(3);
            stroke(0);
            fill(54, 201, 209);
            rect(view.x, view.y, 160, 160);
            noStroke();
        }
        
    }
    
    
    
    
};
chunk2.add = function(x,y,w,h){
    this.push(new_.call(Chunk2,x,y,w,h));
};
chunk2.apply = function(cam){
    for(var i = 0; i < this.length; i++){
        this[i].draw(cam);
    }
    
    
};

var Gimmicko = function(x, y, w, h, id){
this.x = x;
this.y = Y;
this.w = w;
this.h = h;

this.id = id;


};

Gimmicko.prototype.draw = function(cam){
    var view = cam.view(this);
    if(view){
    addConfetti(view.x, view.y);
    
    watercharge(view.x, view.y, view.h);
    
    fill(255)
    rect(view.x, view.y, 40, 40);
    
    }
    
    
    };
    

Gimmicko.prototype.update = function(){

    wloading+=2;
    if(wloading > 290){
        watertime+=1;
    }
    if(watertime > 20){
        runConfetti();
        }
for(var i = 0; i < circles.length; i++){
    if(Collision(this, circles[i])){
        if(wloading > 362){
            wloading = 0;
            watertime = 0;
            confetti.length = 0;
            circles[i].vely -= 20;
        }




    }
}
};
gimmick1.add = function(x, y, w, h, id){
this.push(new_.call(Gimmicko,x, y, w, h));
};

gimmick1.apply = function(cam){
    for(var i = 0; i < this.length; i++){
        this[i].update(circles);
        this[i].draw(cam);
    }
    
    
};



var Spike = function(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    




};
Spike.prototype.update = function(circles){
    for(var i = 0; i < circles.length; i++){
        for(var k = 0; k < secondplayerai.length; k++){
        if(Tricoll(this, circles[i], secondplayerai[k])&&!circles[i].dead){
            circles[i].vely=-circles[i].jumpnum;
            circles[i].hearts -= 5;
            circles[i].emotion = "Dead";
            circles[i].damaged = true;
            secondplayerai[k].y=-secondplayerai[k].jumpnum;
            if(Sound === true){
            
            }
            
        }
        
        
        
        }
        
    }
    
    
};
Spike.prototype.draw = function(cam) {
    var view = cam.view(this);
    if(view){
        if(frameCount%20 === 0){
            //shine effect
        particles.push({
            x: view.x + random(0, 0),
            y: view.y + view.h - 30,
            diameter: 3,
            color: color(255, 255, 255),
            velocity_x: random(-0.1, 1) * -random(1, 2),
            velocity_y: random(-1.3, -4.2),
            gravity: 0.07,
            opacity: random(0, 255) || 0,
            angle: 61,
            rot: random(4, 7) * -random(1, 2),
            timer: 0
            
            
        });
        
        }
        noStroke();
        fill(105, 105, 105);
        triangle(view.x,view.y+view.h,view.x+view.w,view.y+view.h,view.x+view.w/2,view.y+sin(frameCount*2%100)*view.h/6);
        fill(163, 163, 163,1);
        triangle(view.x,view.y+view.h,view.x+view.w+-9,view.y+0+view.h,view.x+view.w/2,view.y+sin(frameCount*2%100)*view.h/6);
        fill(184, 184, 184,1);
        triangle(view.x,view.y+view.h,view.x+view.w+-21,view.y+0+view.h,view.x+view.w/2,view.y+sin(frameCount*2%100)*view.h/6);
        fill(163, 163, 163);
        triangle(view.x+5,view.y+view.h,view.x+view.w+-21+2,view.y+0+view.h,view.x+view.w/2,view.y+sin(frameCount*2%100)*view.h/6);
        
    }
    
    
    
    
};
spikes.add = function(x, y, w, h){
    this.push(new_.call(Spike,x,y,w,h));
};
spikes.apply = function(cam){
    for(var i = 0; i < this.length; i++){
     this[i].draw(cam);
     this[i].update(circles);
    }
};

var Lava = function(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.noiseV=random(2,1);
    this.f = 0;
    
};
Lava.prototype.update = function(){
    for(var i = 0; i < circles.length; i++){
     if(Collision(this,circles[i])&&!circles[i].dead){
         
         
         circles[i].emotion = "Burns";
         circles[i].hearts -= 5;
         circles[i].vely-=circles[i].jumpnum;
         circles[i].damaged = true;
         if(Sound === true){
         
         }
         
        }
    }
    
    
};
Lava.prototype.draw = function(cam) {
    var view = cam.view(this);
    this.f++;
    if(view){
        noStroke();
        this.lava = function(){
        if (frameCount % 21 === 0) {
                    particles.push({
                        x: view.x + random(0, 0),
                        y: view.y + view.h - 30,
                        diameter: 7,
                        color: color(255, 20, 0),
                        velocity_x: random(-1, 2) * -random(1, 2),
                        velocity_y: random(-2.3, -3.2),
                        gravity: 0.07,
                        opacity: random(0, 255) || 20,
                        angle: 46,
                        rot: random(4, 7) * -random(1, 2),
                        timer: 0,
                    });
        }
        
    
    fill(255, 20, 0);
    rect(view.x, view.y, view.w, view.h, 1);
    fill(0, 20);
    rect(view.x, view.y, 40, 20);
    fill(204, 2, 2);
    ellipse(view.x+10, view.y+10, 15+sin(millis()*2), 15+sin(millis()*2));
    ellipse(view.x+12, view.y+35, 10+sin(millis()*2), 10+sin(millis()*2));
    ellipse(view.x+26, view.y+25, 20+sin(millis()*2), 20+sin(millis()*2));
        };
        this.burnchem = function(){
        if (frameCount % 21 === 0) {
                    particles.push({
                        x: view.x + random(0, 0),
                        y: view.y + view.h - 30,
                        diameter: 7,
                        color: color(1, 71, 8),
                        velocity_x: random(-1, 2) * -random(1, 2),
                        velocity_y: random(-2.3, -3.2),
                        gravity: 0.07,
                        opacity: random(0, 255) || 20,
                        angle: 46,
                        rot: random(4, 7) * -random(1, 2),
                        timer: 0,
                    });
        }
        
    
    fill(3, 89, 7);
    rect(view.x, view.y, view.w, view.h, 1);
    fill(0, 20);
    rect(view.x, view.y, 40, 20);
    fill(1, 71, 8);
    ellipse(view.x+10, view.y+10, 15+sin(millis()*2), 15+sin(millis()*2));
    ellipse(view.x+12, view.y+35, 10+sin(millis()*2), 10+sin(millis()*2));
    ellipse(view.x+26, view.y+25, 20+sin(millis()*2), 20+sin(millis()*2));
    };
    this.poison = function(){
        if (frameCount % 21 === 0) {
                    particles.push({
                        x: view.x + random(0, 0),
                        y: view.y + view.h - 30,
                        diameter: 7,
                        color: color(204, 0, 255),
                        velocity_x: random(-1, 2) * -random(1, 2),
                        velocity_y: random(-2.3, -3.2),
                        gravity: 0.07,
                        opacity: random(0, 255) || 20,
                        angle: 46,
                        rot: random(4, 7) * -random(1, 2),
                        timer: 0,
                    });
        }
        fill(137, 3, 161);
    rect(view.x, view.y, view.w, view.h, 1);
    fill(0, 20);
    rect(view.x, view.y, 40, 20);
    fill(82, 4, 115);
    ellipse(view.x+10, view.y+10, 15+sin(millis()*2), 15+sin(millis()*2));
    ellipse(view.x+12, view.y+35, 10+sin(millis()*2), 10+sin(millis()*2));
    ellipse(view.x+26, view.y+25, 20+sin(millis()*2), 20+sin(millis()*2));
    };
    
        if(level === 0){
            this.lava();
        }
        if(level === 1){
            this.lava();
        }
        if(level === 2){
            this.lava();
        }
    if(level === 3){
        this.lava();
    }
    if(level === 4){
        this.lava();
    }
    if(level === 5){
        this.lava();
    }
    if(level === 6){
        this.poison();
    }
    if(level === 7){
        this.poison();
    }
    if(level === 8){
        this.poison();
    }
    if(level === 9){
        this.lava();
    }
    if(level === 10){
        this.lava();
    }
    if(level === 11){
        this.lava();
    }
    if(level === 12){
        this.lava();
    }
    if(level === 13){
        this.lava();
    }
    if(level === 14){
        this.lava();
    }
    
    
        
    
    }
    
    
    
    
};

var Boss1 =function(x,y,w,h){
    this.x = x
    ; 
    this.y = y;
    this.w = w;
    this.h = h
    ;
    this.dead = false; 
    this.velx=0; 
    this.direction=1; 
    this.angle=0; 
    this.hits = 8;
};
//}

/** --NXcube design and update **/
//{
Boss1.prototype.update=function(circles, blocks){
    if(!this.dead){
        for(var i=0; i<circles.length; i++){
            if(Collision(this,circles[i])&&!circles[i].jumping&&!this.dead&&!circles[i].dead){
                circles[i].hearts-=5;
            }else if(Collision(this,circles[i])&&circles[i].vely>0&&circles[i].jumping){
                this.hits -= 1;
                if(Sound === true){
                
                }
                if(this.hits === 0){
                this.dead=true; 
                if(Sound === true){
                
                }
                score += 100;
                }
                circles[i].vely=-circles[i].jumpnum; // make the player hop 
            }
            this.angle=atan2(this.x-circles[i].x,circles[i].y-this.y);
        }
        
        for(var i=0; i<blocks.length; i++){
            if(Collision(this,blocks[i])){
                this.velx*=-3; // reverse speed
                this.direction*=-1;
            }
        }
        
        if(Math.abs(this.velx)>2){
            if(this.velx>0){
                this.velx=2;
            }
            if(this.velx<0){
                this.velx=-2;
            }
        }
        
        if(this.direction===1){
            this.velx=3;
        }else if(this.direction===-1){
            this.velx=-3;
        }
        
        this.x+=this.velx;
    }
};
Boss1.prototype.draw= function(cam) {
    var view = cam.view(this);
    
    
    
    if(view && !this.dead){
        
        image(CaptainL, view.x-40, view.y-40);
        
    
    
    }
};
bossf.add = function(x,y,w,h){
    this.push(new_.call(Boss1,x,y,w,h));
};
bossf.apply = function(cam){
    for(var i = 0; i < this.length; i++){
        this[i].draw(cam);
        this[i].update(circles, blocks, secondplayerai);
    }
    
};



var Water = function(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    
    
};
Water.prototype.update = function(circles){
    for(var i = 0; i < circles.length; i++){
        for(var k = 0; k < secondplayerai.length; k++){
     if(Collision(this, circles[i], secondplayerai[k])){
         
         circles[i].gravity = 0;
         circles[i].vely = 1;
         circles[i].jumpnum = 2;
         secondplayerai[k].gravity=0;
         secondplayerai[k].vely = 1;
         secondplayerai[k].jumpnum = 2;
         
         
         if(keyCode === UP){
             circles[i].vely = -1;
         }
         
         
    
     }
     else{
        circles[i].gravity = 0.2;
        circles[i].jumpnum = 8;
        secondplayerai[k].gravity = 0.2;
        if(Sound === true){
        
        }
        secondplayerai[k].jumpnum = 8;
    }
        }
    
     
     }
     
    
    
    
    
};
Water.prototype.draw = function(cam) {
    var view = cam.view(this);
    if(view){
        
        noStroke();
        fill(0, 162, 255, 150);
        rect(view.x, view.y, view.w, view.h);
        
        
        
        
    }
    
    
    
    
};

water.add = function(x, y, w, h){
    this.push(new_.call(Water,x, y, w, h));
};
water.apply = function(cam){
    for(var i = 0; i < this.length; i++){
     this[i].draw(cam);
     this[i].update(circles);
    }
};



magma.add = function(x, y, w,h){
    this.push(new_.call(Lava,x,y,w,h));
};
magma.apply = function(cam){
    for(var i = 0; i < this.length; i++){
     this[i].draw(cam);
     this[i].update(circles);
    }
};

var Bounce = function(x, y, w, h, id){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.id = id;
};
Bounce.prototype.update = function(circles){
    for(var i = 0; i < circles.length; i++){
     if(Collision(this, circles[i])){
         if(this.id === 0){
     circles[i].vely=-10;
         }
         if(this.id === 1){
             circles[i].vely=-15;
         }
         if(this.id === 2){
             circles[i].vely=-10;
             circles[i].velx+=10;
         }
         if(this.id === 3){
             circles[i].vely=-20;
             circles[i].velx+=20;
         }
         if(this.id === 4){
             circles[i].vely=-10;
             circles[i].velx=-10;
         }
     circles[i].emotion = "Bounced";
     if(Sound === true){
     
     }
    }
      
   }
};
Bounce.prototype.draw = function(cam) {
    var view = cam.view(this);
    if(view){
        if(this.id === 0){
    image(Get('spring'), view.x, view.y);
        }
        if(this.id === 1){
            image(Get('Image15'), view.x, view.y);
        }
        if(this.id === 2){
            image(Get('spring90'), view.x, view.y);
        }
        if(this.id === 3){
            image(Get('spring290'), view.x, view.y);
        }
        if(this.id === 4){
            image(Get('Image1'), view.x, view.y);
        }
    
    }
    
};
tramp.add = function(x, y, w,h, id){
    this.push(new Bounce(x,y,w,h, id));
};
tramp.apply = function(cam){
    for(var i = 0; i < this.length; i++){
     this[i].draw(cam);
     this[i].update(circles);
    }
};

var Coin = function(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.turnspeed = 0.4;
    this.collected = false;
    
    
    
};
Coin.prototype.update = function(circles){
    if(Collision(this,circles[0], secondplayerai[0])){
        if(!this.collected){
            if(gamemode === 0){
        amount += 1;
        score += 1;
        this.collected = true;
        if(Sound === true){
        
        }
            }
            if(gamemode === 2){
                if(amount !== 32){
                amount ++;
                }
                if(amount === 32){
                    
                    
                }
                if(amount2){
                    amount = 0;
                    amount2 ++;
                }
        score += 1;
        this.collected = true;
        if(Sound === true){
        
        }
        
            }
        }
       
    }
};
Coin.prototype.draw = function(cam) {
    var view = cam.view(this);
    
    if(!this.collected){
                if(view){
                if(gamemode === 0){
                    pushMatrix();
                    translate(view.x, view.y);
                strokeCap(ROUND);
strokeWeight(4);
stroke(255, 183, 0);
fill(255, 255, 0);
ellipse(22, 20, sin(frameCount%360)*40, 40);
noStroke();
noFill();
strokeWeight(1.5);
stroke(120, 106, 2);
ellipse(22, 20, sin(frameCount%360)*30, 30);
stroke(0, 0, 0, 200);
strokeWeight(4);
arc(23, 20, sin(frameCount%360)*15, 15, 70, 300);
popMatrix();
noStroke();
                }
        if(gamemode === 2){
            image(Get('BlueB'), view.x, view.y);
        }
        
        
                }
            
        
        
        
    
    }
    
    
    
    
    
    
};
coin.add = function(x,y,w,h,type){
    this.push(new_.call(Coin,x,y,w,h));
};
coin.apply = function(cam){
    for(var i = 0; i < this.length; i++){
        this[i].draw(cam);
        this[i].update(circles, secondplayerai);
        
    }
};

var CBadge = function(x, y, w, h){
    this.x = x
    ;
    this.y = y
    ;
    this.w = w
    ;
    this.h = h
    ;
    this.turnspeed = 0.2;
    this.collected = false;
    
    
    
};
CBadge.prototype.update = function(circles){
    
    if(Collision(this,circles[0])){
        if(!this.collected){
        amount += 1;
        score += 1;
        this.collected = true;
        
        if(Sound === true){
        
        }
        
        }
       
    }
    
    
    
};
CBadge.prototype.draw = function(cam) {
    var view = cam.view(this);
    if(view){
        
    
        if(!this.collected){
        pushMatrix();
        Blueybadge(view.x, view.y, 70);
        popMatrix();
        
        
        
        
        }
    }
};

badgez.add = function(x,y,w,h){
    this.push(new_.call(CBadge,x,y,w,h));
};
badgez.apply = function(cam){
    for(var i = 0; i < this.length; i++){
        this[i].update(circles);
        this[i].draw(cam);
        
    }
    
    
};

var Honey = function(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    
};
Honey.prototype.update = function(){
    for(var i = 0; i < circles.length; i++){
       if(Collision(this, circles[i])){
           
           
           
           circles[i].vely=-1;
           circles[i].emotion = "Stuck";
           if(Sound === true){
           
           }
       }
    }
    
    
    
};
Honey.prototype.draw = function(cam) {
    var view = cam.view(this);
    if(view){
        this.honey = function(){
        strokeWeight(1);
        stroke(255, 179, 0);
    
    fill(245, 163+sin(frameCount*9), 0);
    rect(view.x, view.y, view.w, view.h);
    noStroke();
    fill(255, 179, 0);
    rect(view.x, view.y, view.w, 15);
    fill(255, 179, 0);
    rect(view.x, view.y+10, 15, 20+sin((millis()/1)), 5);
    rect(view.x+25, view.y+10, 15, 20-sin(millis()/1), 5);
    
    
    
    for(var i = 0; i < circles.length; i++){
       if(Collision(this, circles[i])){
    particles.push({
               x: view.x+view.w/2,
               y:view.y+view.h/2,
               diameter: 6.6,
               color: color(255, 179, 0),
               velocity_x: random(-2, 2),
               velocity_y: -3,
               gravity: 0.4,
               opacity: random(0, 255),
               angle: random(-90, -270),
           });
        }
    }
        };
        this.stichem = function(){
        noStroke();
        fill(0, 68, 255+sin(frameCount*9));
    rect(view.x, view.y, view.w, view.h);
    fill(0, 140, 255);
    rect(view.x, view.y, view.w, 15);
    fill(0, 140, 255);
    rect(view.x, view.y+10, 15, 20+sin((millis()/1)), 5);
    rect(view.x+25, view.y+10, 15, 20-sin(millis()/1), 5);
    for(var i = 0; i < circles.length; i++){
       if(Collision(this, circles[i])){
    particles.push({
               x: view.x+view.w/2,
               y:view.y+view.h/2,
               diameter: 6.6,
               color: color(255, 179, 0),
               velocity_x: random(-2, 2),
               velocity_y: -3,
               gravity: 0.4,
               opacity: random(0, 255),
               angle: random(-90, -270),
           });
        }
    }
    
    
    
    
        };
        this.greenhoney = function(){
            strokeWeight(1);
        stroke(3, 145, 15);
    
    fill(9, 184+sin(frameCount*9), 36);
    rect(view.x, view.y, view.w, view.h);
    noStroke();
    fill(0, 255, 26);
    rect(view.x, view.y, view.w, 15);
    fill(0, 255, 24);
    rect(view.x, view.y+10, 15, 20+sin((millis()/1)), 5);
    rect(view.x+25, view.y+10, 15, 20-sin(millis()/1), 5);
    for(var i = 0; i < circles.length; i++){
    if(Collision(this, circles[i])){
    particles.push({
               x: view.x+view.w/2,
               y:view.y+view.h/2,
               diameter: 6.6,
               color: color(0, 255, 98),
               velocity_x: random(-2, 2),
               velocity_y: -3,
               gravity: 0.4,
               opacity: random(0, 255),
               angle: random(-90, -270),
           });
        }
    }
    
        };
        
        this.sap = function(){
            noStroke();
        fill(196, 99, 0);
    rect(view.x, view.y, view.w, view.h);
    fill(255, 157, 0);
    rect(view.x, view.y, view.w, 15);
    fill(255, 157, 0);
    rect(view.x, view.y+10, 15, 20+sin((millis()/1)), 5);
    rect(view.x+25, view.y+10, 15, 20-sin(millis()/1), 5);
     for(var i = 0; i < circles.length; i++){
       if(Collision(this, circles[i])){
    particles.push({
               x: view.x+view.w/2,
               y:view.y+view.h/2,
               diameter: 6.6,
               color: color(163, 82, 2),
               velocity_x: random(-2, 2),
               velocity_y: -3,
               gravity: 0.4,
               opacity: random(0, 255),
               angle: random(-90, -270),
           });
        }
    }
        };
    if(level === 0){
        this.honey();
    }
    if(level === 1){
        this.honey();
    }
    if(level === 2){
        this.honey();
    }
    if(level === 3){
        this.stichem();
    }
    if(level === 4){
        this.stichem();
    }
    if(level === 5){
        this.stichem();
    }
    if(level === 6){
        this.greenhoney();
    }
    if(level === 7){
        this.greenhoney();
    }
    if(level === 9){
        this.honey();
    }
    if(level === 12){
        this.sap();
    }
    if(level === 13){
        this.sap();
    }
    if(level === 14){
        this.sap();
    }
    
    
    
    
    
    
  }
};
sticky.add = function(x, y, w, h){
    this.push(new_.call(Honey,x,y,w,h));
};
sticky.apply = function(cam){
    for(var i = 0; i < this.length; i++){
        this[i].draw(cam);
        this[i].update(circles);
    }
};
var invince = function(x, y, w, h, time){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.collected = false;
    
    this.timer = 0;
    
};
invince.prototype.update = function(){
    for(var i = 0; i < circles.length; i++){
        if(Collision2(this, circles[i])){
            this.collected = true;
            circles[i].state = "invince";
            invtimer = 0;
            invtimer++;
            circles[i].hearts = Infinity;
            
            
            
            
        }
        
        
        
        
    }
    
  
    
    
};
invince.prototype.draw = function(cam) {
    var view = cam.view(this);
    if(view && !this.collected){
        fill(0 + sin(frameCount * 20) * 255, 0 + tan(frameCount * 20) * 255, 0 + cos(frameCount * 20) * 255);
        ellipse(view.x, view.y, view.w, view.h);
        
    }
    
    
};

power1.add = function(x, y, w, h, timer){
    this.push(new invince(x,y,w,h,timer));
};
power1.apply = function(cam){
    for(var i = 0; i < this.length; i++){
        this[i].draw(cam);
        this[i].update();
        
    }
    
    
};


var Busch = function(x,y,w,h, id, id2, id3){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.id = floor(random(0, 2));
    this.id2 = floor(random(0, 3));
    this.id3 = floor(random(0, 2));
    
};
Busch.prototype.draw = function(cam) {
    var view = cam.view(this);
    if(view){
        if(gamemode === 0){
        this.emerald = function(){
        image(Get('Image4'), view.x, view.y+ 30);
        };
        this.emerald2 = function(){
            image(Get('Image4p1'), view.x, view.y);
        };
        this.emerald3 = function(){
            image(Get('Image4p2'), view.x, view.y);
        };
        this.chemblocks = function(){
            image(Get('MMtri'), view.x, view.y+15);
            };
        this.aquagrass = function(){
            image(Get('RRitem'), view.x, view.y);
        };
        this.casino = function(){
            image(Get('DDmpillar'), view.x, view.y - 20);
            
            
        };
        this.cactus2 = function(){
            image(Get('DDcactus'), view.x, view.y - 20);
        };
        this.tree = function(){
            
        image(Get('WWscaffold'), view.x, view.y);
            
        };
        this.cactus = function(){
            fill(3, 168, 3);
            rect(view.x, view.y, 40, 40);
            rect(view.x, view.y-40, 40, 40);
            rect(view.x, view.y-80, 40, 40);
            rect(view.x, view.y-120, 40, 40);
            rect(view.x-40, view.y-40, 40, 40);
            rect(view.x+40, view.y-80, 40, 40);
            
            
        };
        
        this.oilthing = function(){
            image(Get('AAcone'), view.x, view.y-25);
        };
        
        if(level === 0){
            switch(this.id){
                case 0:
            this.emerald();
            break;
            case 1:
                this.emerald2();
            break;
            case 2:
                this.emerald3();
            break;
            
            
            
            }
        
        }
        if(level === 1){
            switch(this.id){
                case 0:
            this.emerald();
            break;
            case 1:
                this.emerald2();
            break;
            case 2:
                this.emerald3();
            break;
            
            
            
            }
        }
        if(level === 2){
            switch(this.id){
                case 0:
            this.emerald();
            break;
            case 1:
                this.emerald2();
            break;
            case 2:
                this.emerald3();
            break;
            
            
            
            }
        }
        if(level === 3){
            this.aquagrass();
        }
        if(level === 4){
            this.aquagrass();
        }
        if(level === 5){
            this.aquagrass();
        }
        if(level === 6){
         this.chemblocks();
        }
        if(level === 7){
         this.chemblocks();
        }
        if(level === 8){
            this.chemblocks();
        }
        if(level === 9){
            switch(this.id){
                case 0:
                    this.casino();
                break;
                case 1: 
                    this.cactus2();
                break;
                case 2: 
                    this.cactus2();
                break;
            }
        }
        if(level === 10){
            switch(this.id){
                case 0:
                    this.casino();
                break;
                case 1: 
                    this.cactus2();
                break;
                case 2: 
                    this.cactus2();
                break;
            }
        }
        if(level === 11){
            switch(this.id){
                case 0:
                    this.casino();
                break;
                case 1: 
                    this.cactus2();
                break;
                case 2: 
                    this.cactus2();
                break;
            }
        }
        if(level === 12){
            this.tree();
        }
        if(level === 13){
            this.tree();
        }
        if(level === 14){
            this.tree();
        }
        if(level === 15){
            this.cactus();
        }
        if(level === 18){
            this.oilthing();
        }
        if(level === 19){
            this.oilthing();
        }
        if(level === 20){
            this.oilthing();
        }
        this.Lstables = function(){
            switch(this.id2){
                case 0:
                    image(Get('TTZobj1'), view.x, view.y+10);
            drawLantern(view.x+214, view.y+306, 0.2, 3, 0, 0, 0, true);
                break;
                case 1:
                    image(Get('TTZobj2'), view.x, view.y-10);
            drawLantern(view.x+214, view.y+306, 0.2, 3, 0, 0, 0, true);
                break;
                case 2:
                    image(Get('TTZobj3'), view.x, view.y-10);
            drawLantern(view.x+214, view.y+306, 0.2, 3, 0, 0, 0, true);
                break;
                
            }
        };
        this.IIZobjs = function(){
            switch(this.id3){
                case 0:
            for(var i = 0; i < 19; i++){
                fill(255, 255, 255, 20);
                ellipse(view.x+40, view.y-90, i * 5 + sin(frameCount*5), i * 5 + sin(frameCount*5));
            }
image(Get('IIZobj2'), view.x, view.y-130);
break;
case 1:
image(Get('IIZobj3'), view.x, view.y-140);
break;

        }

        };
        if(level === 21){
            this.Lstables();
        }
        if(level === 22){
            this.Lstables();
        }
        if(level === 23){
            this.Lstables();
        }
        if(level === 24){
            this.IIZobjs();
        }
        if(level === 25){
            this.IIZobjs();
        }
        if(level === 26){
            this.IIZobjs();
        }
        
        }
        if(gamemode === 1){
            image(gggrass, view.x, view.y);
        }
        
        
        
    }
    
};

grass.add = function(x,y,w,h, id, id2, id3){
    this.push(new_.call(Busch,x,y,w,h, id, id2, id3));
};
grass.apply = function(cam){
    for(var i = 0; i < this.length; i++){
        this[i].draw(cam);
        
    }
    
};

var PalmT = function(x,y,w,h, id, id2){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.id = floor(random(0, 2));
    this.id2 = floor(random(0, 2));
    
    
};
PalmT.prototype.draw = function(cam) {
    var view = cam.view(this);
    if(view){
        if(gamemode === 0){
        this.palmt = function(){
        
        switch(this.id){
            
        case 0:
        image(Get('Image2'), view.x, view.y+10);
        break;
        case 1:
            image(Get('ImageP'), view.x, view.y + 100);
        break;
        }
        
        
        };
        this.alternp = function(){
            image(Get('Image19r'), view.x, view.y);
            };
        this.greekr = function(){
            image(Get('AAbgobj'), view.x, view.y - 40);
        };
        this.car = function(){
            
        };
        this.wsidebar = function(){
            fill(255, 208, 0);
            rect(view.x, view.y, 5, 40);
            rect(view.x, view.y, 40, 10);
            rect(view.x+40, view.y, 5, 40);
            fill(255, 166, 0);
            rect(view.x-3, view.y, 5, 40);
            rect(view.x-3, view.y, 40, 10);
            rect(view.x+40-3, view.y, 5, 40);
        };
        if(level === 0){
            this.palmt();
        }
        if(level === 1){
            this.palmt();
        }
        if(level === 2){
            this.palmt();
        }
        if(level === 3){
            this.alternp();
            
        }
        if(level === 4){
            this.alternp();
            
        }
        if(level === 5){
            this.alternp();
            
        }
        if(level === 6){
            this.greekr();
        }
        if(level === 7){
            this.greekr();
        }
        if(level === 8){
         this.greekr();   
        }
        if(level === 9){
            this.car();
        }
        if(level === 10){
            this.car();
        }
        if(level === 11){
            this.car();
        }
        if(level === 12){
            this.wsidebar();
        }
        if(level === 13){
            this.wsidebar();
        }
        if(level === 14){
            this.wsidebar();
        }
        if(level === 18){
            this.greekr();
        }
        if(level === 21){
            image(Get('TTZwood'), view.x, view.y, 20, 500);
        }
        switch(this.id2){
            case 0:
        if(level === 24){
            image(Get('IIZice1'), view.x, view.y-167)
        }
        break;
        case 1:
        if(level === 24){
            image(Get('IIZice2'), view.x, view.y-67)
        }
        break;

    }


        if(level === 34){
            image(Get('HHZtree'), view.x, view.y-10);
        }
        
        }
        if(gamemode === 1){
            image(ggpalmtree, view.x, view.y);
        }
        
        
    }
    
};

palm.add = function(x,y,w,h, id, id2){
    this.push(new_.call(PalmT,x,y,w,h, id, id2));
};
palm.apply = function(cam){
        for(var i = 0; i < this.length; i++){
        this[i].draw(cam);
        
    }
    
};



var NXcube = function(x,y,w,h, id){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.id = id;
    
    this.dead = false; 
    this.velx=0; 
    this.vely = 0;
    this.direction=1; 
    this.angle=0; 
    this.speed = 0.01;
    this.gravity = 0;
    
    
    
};
NXcube.prototype.update = function(circles, blocks){
     if(!this.dead){
         if(this.id === 0){
        for(var i=0; i<circles.length; i++){
            
            if(Collision(this,circles[i])&&!circles[i].jumping&&!this.dead&&!circles[i].dead){
                circles[i].hearts-=5;
                circles[i].vely=-circles[i].jumpnum;
                
                
            }else if(Collision(this,circles[i])&&circles[i].vely>0&&circles[i].jumping){
                this.dead=true; 
                if(Sound === true){
                
                }
                
                fill(0, 255, 0);
                textSize(30);
                text("+1", 300, 200);
                score += 1;
                circles[i].vely=-circles[i].jumpnum; // make bluey hop 
            }
            this.angle=atan2(this.x-circles[i].x,circles[i].y-this.y);
        }
        
        for(var i=0; i<blocks.length; i++){
            if(Collision(this,blocks[i])){
                this.velx*=-1; // reverse speed
                this.direction*=-1;
            }
        }
        for(var i=0; i<dirts.length; i++){
            if(Collision(this,dirts[i])){
                this.velx*=-1; // reverse speed
                this.direction*=-1;
            }
        }
        
        if(Math.abs(this.velx)>2){
            if(this.velx>0){
                this.velx=2;
            }
            if(this.velx<0){
                this.velx=-2;
            }
        }
        
        if(this.direction===1){
            this.velx=1;
        }else if(this.direction===-1){
            this.velx=-1;
        }
        
        this.x+=this.velx;
         }
    
    if(this.id === 1){
        
        
        
        this.velx += this.speed;
        if(Math.abs(this.velx)>2){
            if(this.velx>0){
                this.velx=2;
            }
            if(this.velx<0){
                this.velx=-2;
            }
        }
        
        
        this.y += this.gravity;
        for(var i=0; i<circles.length; i++){
            
            if(Collision(this,circles[i])&&!circles[i].jumping&&!this.dead&&!circles[i].dead){
                circles[i].hearts-=5;
                circles[i].vely=-circles[i].jumpnum;
                
                
            }else if(Collision(this,circles[i])&&circles[i].vely>0&&circles[i].jumping){
                circles[i].vely=-10;
                
                // make bluey hop 
            }
            
            for(var i=0; i<blocks.length; i++){
            if(Collision(this,blocks[i])){
                this.velx*=-1; // reverse speed
                this.direction*=-1;
            }
        }
        
        this.x +=this.velx;
        this.y += this.vely;
        
            
        }
      
    }
    if(this.id === 2){
    for(var i=0; i<circles.length; i++){
            
            if(Collision(this,circles[i])&&!circles[i].jumping&&!this.dead&&!circles[i].dead){
                circles[i].hearts-=5;
                circles[i].vely=-circles[i].jumpnum;
                
                
            }else if(Collision(this,circles[i])&&circles[i].vely>0&&circles[i].jumping){
                this.dead=true; 
                if(Sound === true){
                
                }
                
                fill(0, 255, 0);
                textSize(30);
                text("+1", 300, 200);
                score += 1;
                circles[i].vely=-circles[i].jumpnum; // make bluey hop 
            }
            this.angle=atan2(this.x-circles[i].x,circles[i].y-this.y);
        }
        
        for(var i=0; i<blocks.length; i++){
            if(Collision(this,blocks[i])){
                this.vely*=-1; // reverse speed
                this.direction*=-1;
            }
        }
        for(var i=0; i<dirts.length; i++){
            if(Collision(this,dirts[i])){
                this.vely*=-1; // reverse speed
                this.direction*=-1;
            }
        }
        
        if(Math.abs(this.velx)>y){
            if(this.vely>0){
                this.vely=2;
            }
            if(this.vely<0){
                this.vely=-2;
            }
        }
        
        if(this.direction===1){
            this.vely=1;
        }else if(this.direction===-1){
            this.vely=-1;
        }
        
        this.y+=this.vely;
    }
    }

    
};
NXcube.prototype.draw = function(cam) {
    var view = cam.view(this);
    
    if(view && !this.dead){
    
     
        
            
            if(frameCount%17 === 0){
                particles.push({
                    x: view.x+view.w/2,
                    y: view.y+view.h/2.8,
                    diameter: 19,
                    color: color(1, 87, 17),
                    velocity_x: random(0.1, 1) * -random(1, 12),
            velocity_y: random(0, 0),
                    gravity: 0,
                    opacity: 255,
                    angle: 360,
                    rot: 10,
                    timer: 0,
                    
                    
                });
                
                
            }
            if(this.id === 0){
            {
                noStroke();
    fill(18, 112, 11);
    rect(view.x, view.y, view.w, view.h);
    
    
            fill(0, 255, 34);
        ellipse(view.x+view.w/2,view.y+view.h/2,view.w/2,view.h/2);  
        
        
    
            pushMatrix();
        translate(view.x+view.w/2,view.y+view.h/2);
        rotate(this.angle+40);
        fill(0, 0, 0);
        ellipseMode(CORNER);
        ellipse(0,0,view.w/5,view.h/5);
        ellipseMode(CENTER);
        popMatrix();
        
        if(frameCount%300 < 30){
            fill(18, 112, 11);
            ellipse(view.x+view.w/2,view.y+view.h/2,view.w/2,view.h/2);  
            
            
        }
            }
            }      
        if(this.id === 1){
            pushMatrix();
    Sp.draw(view.x,view.y+1+sin(frameCount * 30) * 0.8,150);
    popMatrix();
        }
        if(this.id === 2){
noStroke();
    fill(255, 100, 0);
    rect(view.x, view.y, view.w, view.h);
    
    
            fill(255, 0, 0);
        ellipse(view.x+view.w/2,view.y+view.h/2,view.w/2,view.h/2);  
        
        
    
            pushMatrix();
        translate(view.x+view.w/2,view.y+view.h/2);
        rotate(this.angle+40);
        fill(0, 0, 0);
        ellipseMode(CORNER);
        ellipse(0,0,view.w/5,view.h/5);
        ellipseMode(CENTER);
        popMatrix();
        
        if(frameCount%300 < 30){
            fill(255, 100, 0);
            ellipse(view.x+view.w/2,view.y+view.h/2,view.w/2,view.h/2);  
            
            
        }
        }
            
        
        
    
    }
    
    
};


cubes.add = function(x,y,w,h, id){
    this.push(new_.call(NXcube,x,y,w,h, id));
};
cubes.apply = function(cam){
    for(var i = 0; i < this.length; i++){
        this[i].update(circles,blocks);
        this[i].draw(cam);
    }
    
};

var Checkpoint = function(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.saved = false;
    
    
    
};

Checkpoint.prototype.update = function(){
    for(var i = 0; i < circles.length; i++){
        for(var i = 0; i < chepoi.length; i++){
        
        if(Collision(this, circles[i])){
            this.saved = true;
            
           
        }
        if(this.saved === true){
                if(circles[i].dead === true){
                    circles[i].x = chepoi[i].x;
                    circles[i].y = chepoi[i].y;
                    
                }
            }
        
    }
        
    }
    
    
    
    
};

Checkpoint.prototype.draw = function(cam) {
    var view = cam.view(this);
    if(view){
        if(!this.saved){
        fill(255, 255, 0);
        rect(view.x, view.y, view.w, view.h);
        }
        
    }
    
    
};


chepoi.add = function(x,y,w,h){
    this.push(new_.call(Checkpoint,x,y,w,h));
};
chepoi.apply = function(cam){
    for(var i = 0; i < this.length; i++){
        this[i].update(circles);
        this[i].draw(cam);
    }
};




var Unstable = function(x,y,w,h, id, color){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.id = id;
    this.gravity = 0.1;
    this.vely = 0;
    this.falling = false;
};
Unstable.prototype.update = function(circles){
    for(var i=0; i<circles.length; i++){
        //if(Collision2(this, circles[i])){
        if(circles[i].y+circles[i].h>=this.y&&circles[i].y+circles[i].h<this.y+this.h&& circles[i].x+circles[i].w>=this.x&&circles[i].x<=this.x+this.w){
            this.falling=true;
            
    }
        //}
    }
    
    if(this.falling){
        this.y+=this.vely; 
        this.vely+=this.gravity; // apply acceleration /
    }
};
Unstable.prototype.draw = function(cam) {
    var view = cam.view(this);
    if(view){
        if(this.id === 0){
    noStroke();
        image(Get('Image1'), view.x, view.y);
        image(Get('Image1'), view.x+40, view.y);
        image(Get('Image1'), view.x+80, view.y);
        image(Get('Image7'), view.x+80, view.y+40);
        image(Get('Image6'), view.x+40, view.y+40);
        image(Get('Image6'), view.x+80, view.y+80);
        }
        if(this.id === 1){
            image(Get('Image1'), view.x, view.y);
        image(Get('Image1'), view.x-40, view.y);
        image(Get('Image1'), view.x-80, view.y);
        image(Get('Image7'), view.x-80, view.y+40);
        image(Get('Image6'), view.x-40, view.y+40);
        image(Get('Image6'), view.x-80, view.y+80);
        }
        
    }
};
unstables.add = function(x,y,w,h,color){
    this.push(new_.call(Unstable,x,y,w,h, color));
};
unstables.apply = function(cam){
    for(var i=0; i<this.length; i++){
        this[i].draw(cam);
        this[i].update(circles, unstables);
        
    }
};

var Sign = function(x, y, w, h, text){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.text = text;
};
Sign.prototype.draw= function(cam) {
    var view = cam.view(this);
    if(view){
    if(dbug){
        fill(89, 51, 5);
        textSize(10);
        text("Sign.message.env._\nthis.text", 400, 400);
        
        fill(99, 80, 13);
        rect(this.x, this.y, 50, 50);
        
        
    }
    
    
    
    fill(145, 86, 3);
    rect(view.x,view.y,view.w,view.h);
    
    fill(255, 255, 255);
    rect(view.x+view.w/7, view.y+view.h/7, view.w/1.35, view.h/1.35);
    
    fill(13, 13, 13);
    textSize(4);
    textAlign(CENTER,CENTER);
    textLeading(6);
    text("abcdefghij\nklmnopqrs\ntuvwxyz", view.x+view.w/2, view.y+view.h/2);
    
    for(var i = 0; i < circles.length; i++){
        if(Collision2(this, circles[i])){
            fill(0, 55);
            rect(0, 0, 800, 600);
            
            fill(94, 62, 62);
            rect(400, 400, 90, 90);
            
            fill(255, 255, 255);
            rect(415, 415, 60, 60);
            
            fill(0, 0, 0);
            textSize(15);
            text("What it really says:", 400, 400);
            
            
            
            fill(13, 13, 13);
            textSize(10);
            textAlign(RIGHT, CENTER);
            text(" Welina mai i\n West \nGeometric Island, \nnāwaliwali ellipses", 471, 445);
            
        fill(255, 0, 0);
        textAlign(CENTER,CENTER);
        textSize(15);
        text(this.text, 300, 300);
        
        }
    }
    }
    
    
    
    
};


signs.on = 0;
signs.explay = signs.on;

signs.add = function(x,y,w,h,text){
    this.push(new Sign(x,y,w,h,text));
    this.on++;
    
};
signs.apply = function(cam){
    for(var i = 0; i < this.length; i++){
     this[i].draw(cam);
    }
};

var Telep = function(x, y, w, h, id){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.id = id;
    this.timer = 0;
    
};
Telep.prototype.update = function(circles, tubes, cam){
    
    for(var i = 0; i < circles.length; i++){
        for(var v = 0; v < tubes.length; v++){
            if(Collision(this, circles[i])&&this.id === tubez[v].id){
            this.timer++;
            
            if(this.timer > 100){
                
                textFont(createFont("Kristen ITC"));
                fill(0, 0, 255);
                textSize(60);
                text("3", 300, 200);
                
                
            }
            if(this.timer > 200){
            textFont(createFont("Kristen ITC"));
                fill(0, 0, 255);
                textSize(60);
                text("2", 350, 200);
            }
            if(this.timer > 300){
            textFont(createFont("Kristen ITC"));
                fill(0, 0, 255);
                textSize(60);
                text("1", 450, 200);
            }
            
            
            
            if(this.timer>400&&!Collision(tubes[v],circles[i])){
                circles[i].x = tubes[v].x;
                circles[i].y = tubes[v].y;
                this.timer = 0;
                if(Sound === true){
                
                }
            }
            
            }
            
            
            
        }
        
        
        
        
        
    }
    
    
    
    
    
};
Telep.prototype.draw = function(cam) {
    var view = cam.view(this);
    if(view){
        fill(134, 134, 134, 150);
        rect(view.x, view.y, view.w, view.h);
        fill(89, 87, 89);
        rect(view.x, view.y-40, 40, 40);
        rect(view.x+40, view.y-40, view.w, view.h);
        rect(view.x, view.y-80, view.w, view.h);
        rect(view.x, view.y-120, view.w, view.h);
        rect(view.x, view.y-160, view.w, view.h);
        rect(view.x, view.y-200, view.w, view.h);
        rect(view.x, view.y-240, view.w, view.h);
    }
    
    
};


tubez.on = 0;
tubez.add = function(x,y,w,h,id){
    this.push(new_.call( Telep,x,y,w,h,id));
    if(this.length%4===0){
        this.on++; // only make every 4
    }

};
tubez.apply = function(cam){
    for(var i=0; i<this.length; i++){
        this[i].update(circles,this,cam);
        this[i].draw(cam);
    }
};

var ptrans2 = 0;

var Portal = function(x, y, w, h, id){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        
        
        this.complete = false;
        this.id = id;
        
    };
Portal.prototype.update = function(circles){
        if(this.id === 0){
        for (var i = 0; i < circles.length; i++) {
        if(!this.complete){
            if (Collision(this, circles[i])) {
                ptrans += 4;
            }
            else {
                ptrans = max(ptrans - 9, 1);
            }
        }
        if (ptrans > 255) {
            this.complete = true;
            if(Sound === true){
            
            }
            if(dbug){
            println("Nextlvl.load.env._Menu=function() this.complete is a  sucess!");
            ptrans = 0;
            ptrans = max(ptrans - 9, 1);
            
            
            
        }
        }
        
    }
        }
        if(this.id === 1){
            for(var i = 0; i < circles.length; i++){
                if (Collision(this, circles[i])) {
                    ptrans += 4;
                    
                    if(ptrans > 255){
                        ptrans = 0;
                        this.complete = true;
                        
                    }
                    }
                    else {
                ptrans = max(ptrans - 9, 1);
            }
                }
                
                
                
                
            
        }
        
};
Portal.prototype.draw = function(cam){
        var view = cam.view(this);
        if(view){
            if(this.id === 0){
            particles.push({
                x: view.x+view.w/2,
                y: view.y+view.h/2,
                diameter: 7,
                color: color(0 + sin(frameCount * 20) * 255, 0 + tan(frameCount * 20) * 255, 0 + cos(frameCount * 20) * 255),
                velocity_x: random(-3, 2),
                velocity_y: random(-2, 2),
                gravity: 0,
                opacity: random(0, 255) || 20,
                angle: random(360),
                timer: 0,
                
                
            });
            
        pushMatrix();
    translate(random(6), random(4));
    strokeWeight(1);
    stroke(0 + sin(frameCount * 20) * 255, 0 + tan(frameCount * 20) * 255, 0 + cos(frameCount * 20) * 255);
    fill(0 + sin(frameCount * 20) * 255, 0 + tan(frameCount * 20) * 255, 0 + cos(frameCount * 20) * 255);
    rect(view.x, view.y, 40+sin(frameCount*5), 40+sin(frameCount*5));
    fill(0 + sin(frameCount * 20) * 255, 0 + tan(frameCount * 20) * 255, 0 + cos(frameCount * 20) * 255);
    pushMatrix();
    translate(view.x + view.w / 2, view.y + view.h / 2);
    
    rotate(this.animate);
    
    
        for(var i = 0; i < 11; i ++)
    {
        rotate(33);
        ellipse(0, -38 + sin(frameCount * 5) * 5, 10, 10);
    }
    
    popMatrix();
    
    popMatrix();
    
    this.animate += 3;
        }
        
        colorMode(RGB);
        if(this.id === 1){
            strokeWeight(5);
            stroke(255, 255, 0);
            noFill();
            rect(view.x, view.y, 40, 40);
        }
        
        }
        
        
    };
goals.add = function(x, y, w, h, id){
    this.push(new_.call(Portal,x, y, w, h, id));
};
goals.apply = function(cam){
    for(var i = 0; i < this.length; i++){
        this[i].draw(cam);
        this[i].update(circles);
    }
    
};
var Elife = function(x, y, w, h, size, ysize){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    
    this.howmuchitgivesfornoreasonthisvarissolonglol = 1;
    this.nameValue = "string.At(7uiq2wma//aw72nasxu.upd());";
    
    this.size = 70;
    this.ysize = 70;
    this.collected = false;
};




Elife.prototype.draw = function(cam) {
    var view = cam.view(this);
    if(view){
        if(!this.collected){
     
     
     
     fill(200, 200, 200, 150);
     ellipse(view.x, view.y, this.size+sin(millis()*2), this.ysize+sin(millis()*2));
     fill(4, 4, 209);
     ellipse(view.x-1, view.y+2, 45, 45);
     fill(255, 255, 255);
     ellipse(view.x-7, view.y-2, 15, 15);
     ellipse(view.x+11, view.y-2, 15, 15);
     fill(0);
     ellipse(view.x-7, view.y-2, 9, 9);
     ellipse(view.x+11, view.y-2, 9, 9);
     fill(0, 221, 255);
     ellipse(view.x+4, view.y+9, 9, 9);
     fill(255, 0, 0);
     ellipse(view.x+4, view.y+17, 14, 5);
     fill(255, 255, 255);
     ellipse(view.x-25, view.y-20, 10, 10);
     
     
       }
    }
    
    
    
    
};

Elife.prototype.update = function(){
      for(var i = 0; i < circles.length; i++){
        if(Collision2(this, circles[i])){
            if(!this.collected){
            this.collected = true;
            Lives += 1;
            
            
            }
        }
        
      }
    
    
    
    
    
    
};



lifes.add = function(x,y,w,h,size,ysize){
    this.push(new Elife(x,y,w,h,size,ysize));
};
lifes.apply = function(cam){
    for(var i = 0; i < this.length; i++){
        this[i].update(circles);
        this[i].draw(cam);
        
    }
    
    
};

});
Blocs({});

var beam = {
    x1: 25,
    y1: 325,
    x2: 300,
    y2: 350
};

    var gravity = 2; // acceleration due to gravity in pixel/frame² 
    
    var Slope = function(x, y, w, h, id) {
        this.x = x;
        this.y = y;
        this.w = w; // run
        this.h = h; // rise
        var mag = Math.hypot(w, h);
        var ux = w / mag; // unit run, aka cosine
        var uy = h / mag; // unit rise, aka sine
        var acc = uy * gravity; // scaler acceleration due to gravity
        this.ddx = ux * acc; // X axis acceleration due to gravity
        this.ddy = uy * acc; // Y axis acceleration due to gravity
        this.id = id;
    };
    
    Slope.prototype.draw = function(cam) {
        var view = cam.view(this);
        if(view){
            /*
            strokeWeight(2);
        stroke(0);
        line(view.x+beam.x1, view.y+beam.y1, view.x+beam.x2, view.y+beam.y2);*/
        switch(this.id){
            case 0:
                if(mode === 0){
                if(level > -1){
                image(Get('EEslope1'), view.x, view.y);
                }
                if(level > 2){
                    image(Get('RRslope1'), view.x, view.y);
                }
            }
                if(mode === 3){
                    strokeWeight(10);
                stroke(5);
                fill(39, 104, 145);
        pushMatrix();
        translate(view.x, view.y);
        triangle(0, 0, 0, this.h, this.w, this.h);
        popMatrix();
        noStroke();
                }
        
            break;
            case 1:
                if(mode === 0){
                if(level > -1){
                image(Get('EEslope2'), view.x, view.y);
                }
                if(level > 2){
                image(Get('RRslope2'), view.x, view.y);
                }
            }
                if(mode === 3){
                    strokeWeight(10);
                stroke(5);
                fill(39, 104, 145);
        pushMatrix();
        translate(view.x + this.w, view.y);
        scale(-1, 1);
        triangle(0, 0, 0, this.h, this.w, this.h);
        popMatrix();
                }
            break;
            
            
            
            
            
            
        }
        
        
        }
    };
    
    /*
     * Apply this Slope's acceleration to obj.
     * Acceleration affects obj's velocity.
     * Obj's velocity affects its position.
     
    Slope.prototype.applyAcceleration = function(obj) {
        obj.dx += this.ddx;
        obj.x += obj.dx;
        obj.dy += this.ddy;
        obj.y += obj.dy;
        
        
        
        
        var gradient = 0.7;
        var yOffset = 0;
        for(var i = 0; i < circles.length; i++){
        if(Collision(this, circles[i])){     
        
        circles[i].y = gradient * slope[0].x + yOffset;
        }
        /*
        for(var i = 0; i < circles.length; i++){
        if (beamCollide(circles[i], beam)) {
        circles[i].y = beamCollide(circles, beam);
        circles[i].vely = 0;
        circles[i].accel = 0;
    }
    
}
};
    */

    
    slope.add = function(x,y,w,h, id){
        this.push(new_.call(Slope,x, y, w, h, id));
    };
    slope.apply = function(cam){
        for(var i = 0; i < this.length; i++){
            this[i].draw(cam);
            
        }
    };
	
	var VRAM = [circles, secondplayerai, blocks, goals, trailsArr, particles, magma, tramp, spikes, coin, sticky, dirts, cubes, gimmick1,  unstables, signs, lifes, power1, grass, palm, tubez, water, chepoi, chunk, chunk2, bridge, sands, pblock, windo, grassg, tpole, slope, badgez, bossf, bblock, zobject, Bigobj, waterfal, lockb, movingblock];
VRAM.remove = function() {
    for (var t = 0; t < VRAM.length; t++) {
        for (var j = 0; j < VRAM[t].length; j++) {
            VRAM[t].splice(j, VRAM[t].length);
        }
    }
};
/**
 * LEVEL DESIGNERS GUIDE
 * s - Bluey
 * 1 - ground
 * h - honey
 * m - lava
 * q - sign
 * P - Portal
 * 3 - dirt
 * t - trampoline/bouncy
 * 2 - spike
 * u - falling block
 * x - NX cube
 * // OLD KEY
 * 
 * note:
 * The levels expand to either 20000 X or 25000.
 * Make use of the basic design blocks instead of the gimmicky fancy ones, someone else will do that (placing gimmciks, and placing enemies and coins)
 * 
 * 
 **/

var Levels = function(){
    
    this.levels = [
        // test level
        [
    [
    
"0000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000",
"0000000000000000000000000000000:0:000000",
"0000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000",
"0000000000000000000000000000000:0:000000",
"0000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000",
"0000000000000000000000000000000:0:000000",
"00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000:0:0000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"00000000000000000=000000=000000:0:0000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"00000000000%00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000:0:0000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0%000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000:0:0000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"00000000001111000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000g00g00^^^^000000X00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"s000000000^^^^0010x000000000000:0:0000j111100",
"111S111111111111111111111111111bbbb11111300300",
"_30030030030030030030030030030/0000_3003000000",
"_00000000000000000000000000000/0000_0000000000",
"_00000000000000000000000000000/0000_0000000300",
"_30030030030030030030030030030/0000_30030000000",
"_00000000000000000000000000000/0000_30030000000",
"_00000000000000000000000000000/0000_30030003000",
"_30030030030030030030030030030/",
"_00000000000000000000000000000/",
"_00000000000000000000000000000/",



    ],
    //level 1
    [
    "00000000000000000000000000000000000:0000000000000000000000000000000000000000000000000000000000000000000000000g0g00g000g000g000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000=00000000=000000000000000000000000000000000000000000000000000000ccc0",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000u11S1111S1111S1111111J0x000cc0",
"00000000000000000000000000000000000:0000000000000000000000000000000000000000000000000000000000000000000000_3333333333333333333311J00220",
"00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000_333333333333333333333311111",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000=002t0000000_33333333333333333333333333",
"0=000000000000000000000000000000000:0000000000000000000000000000000000000000000000000000000000000001110000000000000000000:0:00000000000",
"000000000=00000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000_^_00000000000%000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000_^_00c000000000000000000000000000000",
"00000000000000ccc000000000000000000:000000000000000000000000000000cc0000000000000000000000000000000_^_ccc0000000000000000:0:00000000000",
"00000000000000ccc00000000000000000000000000000000000000000000000002200000000000!&00cc00000000000000_^^111000000000000000000000000000000",
"00000000000000ccc0000000000000000000000000000000000000000%0000000011111111111111110cc00000000000000_^400/000000g0000g000000000000000000",
"00000000000000000000000000%00000000:000000000%00000000000000000000_400400400^^^^^/0cc00000000000000_^^^^/0000000000000000:0:00000000000",
"0000000000000111110000cc000000000000000000000000000000000000000000_000000000^^^^^/000000g0000000000_^^^^/000j1111111111U000000000000000",
"0000000000000_^^^/0000cc000000000000000000000000000000000000000000_000000000^^^^^/000x00000000j11111111111113335333333/000000000000c000",
"0s00000g000g0_^^^/00000000000000000:0000000g0000g000000ccc000:j1111111111111111111bbb1S1111111353333433343333333333333/00:0:0000000c000",
"11111J000x000_^^^/0000000000000000000000000cccccccc00jS11111113333353333335333333/000_33333333333333333333333333333333/0x0000000000t111",
"533333S111111111111S1111111111111110000001S11111111114333333333333333333333333333/000_33333333333333333333333333333333/0000000000001333",
"3333333333333533333333333433333433/:x0000_3353333333333333333:0:03333333333333333/000_33343333333333333333333333000000000:0:000000c_333",
"3333333333333333333333333333333333/000000_33333333333333333330000333333343343333/0000_33333333333333000000000000000000000000000000c_333",
"3333333333333333333333333333333333/0x0000_333333333/^^^^^^^^/000034333333333333/000000_33333333300000000000000c00000000000000000000_333",
"3333333333333333333333333333333333/:000000_33333333/-^^^^^^^/:0:03333333333333/0000000000000000000000000%00000c0000000000:0:000000t3333",
"3333333333333333333333333333335333/00000000_33333333333333333000033333330000000000000000000000=000000000000000c00000000000cc00000c13333",
"3333333333333333333333333333333333/00000000000000=0000000000000000000000000=0000000000000000000000000000000000f0000000000cccc0000c_3333",
"3333333333333333333333333333333333/:0000000000000000000000000:0:00000000000000000000000000000000000000000000j111J000g00g0:0:00x000_3333",
"3333333333333333333333333333333333/0000000000000000000000000000000000000000000000000000000000000000000ccc00j34333J0x0000000000000t_3333",
"3333333333333333333333333333333333/0000000000000000000000000000000000000000000000000000000000000000000j111133333331S11111bbbb1111111111",
"3333333333333333333333333333335333/:0000000000000000000001110:0:0000000000000000000000000000000000000j333333333333333333/:0:0_533333433",
"3333333333333333333333333333333333/00c0000000000000000000_^/000000000%00000000%00000ccc00000ccc00000j3335333333333353333/0000_333333333",
"3333333333333333333333333333333333/00c0000000000000000x00_^/000000000000cc0000000000000000000000000j43333333333333333333/0000_333333333",
"3333333333333333333333333333333333/:0c00000ccc00000000111^^/0:0:00000000000000000000g0000000000000j333333335333333333333/:0:0_333333333",
"3333333333333333333333333333335333/00c00000ccc00000000_^^^^/00000000000g000g0000000000000j1J00000j3333333333333333333333/0000_533333433",
"3333333333333333333333333333333333/00t0#00000000000000_^^^^/0000000000000000000000j1S11113331111143333333333333333333333/0000_333333333",
"333333333333333333333333333333333311111111bbbbb11111111111111bbbb111S1111S1111111133333334333333333333333333333333353333/:0:0_333333333",
"33333333333333333333333333333333335000333/00000_433533333433/0000_333333333333334333333333333333333333333433333333333333/0000_333333333",
"33333333333333333333333333333333330000333/00000_333333333333/0000_343343333533333333353333333334333333333333335333333333/0000_353333433",
"33333333333333333333333333333333330000333/00000_333333333333/0000_333333333333333333333333333333333333333333333333333333/:0:0_333333333",
"33333333333333333333333333333333330000333/00000_333333333333/0000_333333333333333333333333333333333333333333333333333333/00000_33333333", 
    ],//level 2
    [
        "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"00000=0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000=0000000=000000=000000=0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000%00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000g000000000000000000000000000 00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000g00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0s000000000000000000000000000000000000000000000000000000000000000000Q0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"111111111J00;000",
"333333333311(111111J",
"333333333333333333331111111bbbbbbb11111111J",
"3333333333333333333333333330000000333333333111111111111111111111111111111111111111111111111111111111111",
"333333333333333333333333333000000033333333333333333333333333333333333333333333333333333333333",
"333333333333333333333333333000000033333333333333333333333333333333333333333333333333333333333",
"333333333333333333333333333000000033333333333333333333333333333333333333333333333333333333333",
"333333333333333333333333333000000033333333333333333333333333333333333333333333333333333333333",
"333333333333333333333333333000000033333333333333333333333333333333333333333333333333333333333",


        
        ],//level 3
    [   
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000011111111110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000%3333333333%000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000033333333330000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000003333333333000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"00000000000000000000000000000000000000000B0000B00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"00000000000000g000%0000000000%0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0=00%0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"s000200000x0000000000000j1111111111111111111111111111111111111111111J",
"111111111111111111111111133333333333333333333333333333333333333333331J000000000000000c000c00000c00",
"_333333333333333333333334003333333333333333333333333333333340033333333J000000000000002000200000200",
"_3334004003350000333333300033333333333340040033500003333333000333333331111m00m00m00111111111111111",
"_333000000330000033333330003333333333330000003300000333333300033333333",
"_333000000330000033333333335000333333330000003300000333333333350003333",
"_333333333333333333333333330000333333333333333333333333333333300003333",
"_333333333333333333333333330000333333333333333333333333333333300003333",
    ],// lvl 7
    [
    "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "s00000P",
    "1111111",],// lvl 8
    ["000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "s00000P",
    "1111111",],// lvl 9
    [
    "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", 
    "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", 
    "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", 
    "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", 
    "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", 
    "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", 
    "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", 
    "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", 
    "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", 
    "00000000000%000000000000000000000000p000000000p0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", 
    "000B0000000000000000000000000000000011h00000h1100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "000000000c0000000000000g00000000000011000000011011100cc00000000000000000g000000000000000000000000110000000000000000000000000000000000000000000000000000000000000000", 
    "000000000c000000cccc000g0000000000001100000001100ggg00cc0001000000000000g00000000000000000000000011000000000000000cc000000000000000000000000000000000000000000000000", 
    "00000g00000000220000220g0000000000001100000001100ggg00cc000100000p000000g0000000000000000000000001100cc0000000000000000000000000000000000000000000000000000000000000", 
    "s000000p000x00110000110gx0000002200t1100222001100ggg00cc00x10x001100x000g00x00011cpcxcpc100000T0t1100cc0022000002200220000000000000000000000000000000000000000000001",
    "111111111111111111111111111111111111111111111111mmm111111111111111mmmm1111111mm1111111111111111111111111111mm1111111111111111111111111111111111111111111111111111111",
    "/3400/5000/5000/5000/0000/0000/0000/0000/0000/000000000300003000030000300003000050000300003000030000500003000030000300003000030000300003000030000300003000030000301",
    "_3000_0000_0000_0000_0000_0000_0000_000000000_000000000_0000_0000300003000030000000003000030000300000000003000030000300003000030000300003000030000300003000030000301",
    "_3000_0000_0000_0000_0000_0000_0000_000000000_000000000_0000_0000300003000030000000003000030000300000000003000030000300003000030000300003000030000300003000030000301",
    "_3400_0000_0000_0000_0000_0000_0000_000000000_000000000_0000_0000300003000030000000003000030000300000000003000030000300003000030000300003000030000300003000030000301",
    "_3000_5000_5000_5000_0000_0000_0000_000000000_000000000_0000_0000300003000030000000003000030000300000000003000030000300003000030000300003000030000300003000030000301",
    "_3000_0000_0000_0000_0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", 
    "_300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", 
    "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", 
    "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", 
    "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", 
    "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", 
    "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", 
    "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", 
    "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", 
    "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", 
    "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "00000000000000000000g000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000ggg0000000000000000000001110000000001", 
    "00000000000000000000g0000000000000000000000000000000000000000000000000000000000011100000111000000000000000e0000000000000000000ggg0000000000000000000000000000000001", 
    "000000000000220000000000000000000000ccc000000000000000000000000000000000000000001P01000011100000000000000gp0000000000000000000ggg00000p000000000cccc000000000000001", 
    "00000000000011000022g00x000x00p02200ccc0001111000000000000002220x0000000002200000hh00000h0h0002220001100011000x000022000022000ggg0000011000222x0cccc0000000220000T1", 
    "111111111mmm11111111111111111111111111111111111mmmm111111111111111mmm11111111111111111111111111111111111111mmmmmmm111111111111111111111111111111111111mmm1111111111",
    "5000030000300005000030000300003000030000500003000050000300003000030000300003000050000300003000030000500003000030000300003000030000300003000030000300003000030000301",
    "00000300003000000000300003000030000300000000030000000003000030000300003000030000000003000030000300000000003000030000300003000030000300003000030000300003000030000301",
    "0000030000300000000030000300003000030000000003000000000300003000030000300003000000000300003000030000000003000030000300003000030000300003000030000300003000030000301",
    "0000030000300000000030000300003000030000000003000000000300003000030000300003000000000300003000030000000003000030000300003000030000300003000030000300003000030000301",
    "0000030000300000000030000300003000030000000003000000000300003000030000300003000000000300003000030000000003000030000300003000030000300003000030000300003000030000301",
    ],// lvl 4
    [
        "000000000000000000000000000000000000000ggg00000000c00000000000000000000000000c000000000000000000000000000000030000000ccc0000000000000000e01100000000000000000000000",  
        "000000000000000000cc0000000000000000000ggg00000000c00000000000030000000000000c000000000000000000000000000000030000000ccc0000000000000001111100000000300000000000000",  
        "000000000000000000000000000000000000000ggg10000000c00000000000030000000000000c000000000000000000000000000000030000000ccc000000000p000001111100000000000000000000000",  
        "00q00222002200000p000000@00000010x00x000001002220010000x010T000@2220x0x0x0011c11000222100x0000x01000xgggx0p00@0000000ccc00000x00111000P1111100000000000000000000000",  
        "11111111mm11111mm111mm111111111mmmmmmmmmmm1111111111111111111111111mmmmmmmm1111111111111111mmmmm1111111111111111111111111111111111111111111111111111111111111111111",  
        "00030000000000000000000gg000000000000000000000000000000000000113000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",  
        "00030000000000000000000gg000000000000000000000000000000000000113000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",  
        "00030000000000000000000gg000000000000000000000000000000000000113000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",  
        "0003000000ggg0000000000gg000000000000000000000000000000000000113000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",  
        "0003000000ggg0000000001100000000000000000000000000000000e0000113000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",  
        "0003000000ggg00cc00000110000000000000000000000000000000000000113000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",  
        "0003000000ggg00cc00000110000000000000000000000000000000000000113000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",  
        "s00@00p000ggg00ccp0x0t11t00222000000220100ccc00p00x10222000T0113000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",  
        "111111111111111mm11111111111111mmm111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
        "3000050000300003000030000500003000030000500003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000301",
        "3000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000301",
        "3000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000301",
        "3000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000301",
        "3000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000301",
        "3000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000301",
        "3000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000301",
        
        
        
        
    ],// lvl 5
    [
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", 
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", 
        "0000000000000000000000000000000001111111111000000000000000000000000000000000000000000000000000000000000000000000000ggg000000000000000000000000000000000000000000000", 
        "0000000000000000000000000000000001111111111000000000000000000000000000000000000000000000000000000000000000000000000ggg000000000000000000000000000000000000000000000", 
        "00000001100000000000000000000001111111111000000000000000000000000000000000000000000000000000000000000000000000000ggg000000000011111110000000000000000000000000000", 
        "00000000gg0000000000000000000000000000011000000000000000000000000003000000000000000000000000000000000000000000000ggg000000000011111110000000000000000000000000000", 
        "cccc0000gg000000000000000000000000000001100000000000000000000000000300ggg000ccc0000011h0000000h110000000000000000ggg000000000011111110000000000000000000000000000", 
        "00000000gg00000000000000cc00000000000001100000ccc0000000ccc00000000300ggg000ccc0000011000000000110000000000000000ggg000000000011111110000000000000000000000000000", 
        "wwww0000gg00000000002200cc00000000000001100000000000000000000000000300ggg000ccc0000011000000000110002220002220000ggg000000000001111110000000000000000000000000000", 
        "s0002200gg11x00x00x01100cc000p00000T0001100T00222000p00221mmm122000@00ggg001cccx020t11222222222110001110001110000ggg0222200000P111111000000000000000000000000000000", 
        "11111111111111mmmmmmmm1111111111111111111111111111111mmm11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
        "5000030000300003000040000300003000030000300003000050000300003000030000400003000030000500003000030000300005000030000400003000030000400003000030000500003000030000301",
        "3000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000301",
        "3000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000301",
        "3000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000301",
        "3000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000301",
        "3000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000300003000030000301",
        
        
        
        
    ],// lvl 6
    [
        "00000000000000",
        "00000000000000",
        "00000000000000",
        "00000000000000",
        "00000000000000",
        "000000000%000%000%000%",
        "000=000000000000000000",
        "0000000000000000000000",
        "0000000000000000000000000000001111111",
        "000000000000000000000000000000_33333_",
        "00ggg0000000000000000000000000_33333_",
        "s00000000000000000000000000000_33333_",
        "1111S000011111111111111110",
        "/3333333333333333333333330",
        "/4033333333333333333333330",
        "/0003333333333333333333330",
        "/0003333333333333333333330",
        "/4003333400333333333333330",
        "/0003333000333333333333330",
        "/0003333000333333333333330",
        
        
        
        
        
        
    ],// lvl 10
    [
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000011110000000cccc00000000000000000000000000000000cc220000000000000*000000000000000000000000011111110000000000000000000000000000000000000000000000000000",
        "00000000000000330000000000000000000020000000000200000000020001111000022000002cc000000000000000000000000011111110000000000000000000000000000000000000000111110000000",
        "000000000020000000000000200002000cc0100001001111000x000111000330000011110000111000001110000000000000000011111110000000000000000000000000000000000000000111110000000",
        "s0p000g00111000cc000x0011mmmm100xcc11100g100mmmm0000000mmm0000000000mmmm0000mmm00000mmm011200x0g00p00p0P1111111000000000000000000000000000000000000000011111",
        "111111111111111111111111111111111111111111mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm11111111111111111111111111111111111111111111111111111111111111111111",
        "3030303030303030303033030303030303030303033030303030303030303033030303030303030303033030303030303030303033030303030303030303033030303030303030303033030303030303030",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "3030303030303030303033030303030303030303033030303030303030303033030303030303030303033030303030303030303033030303030303030303033030303030303030303033030303030303030",
        
    ],// lvl 11
    [
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003111311111111000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001111111111111000000000000000000000000000000000000000000",
        "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011111111111110000000000000000000000000000000000000000000",
        "000000ccc0000000000000000000000000000000000g000ccc0000cc00000000000000000000000000000000000000011100000000003111311111110000000000000000000000000000000000000000000",
        "00000011100000000000cc0cc0cc0000000000g00111100000000000cc00000000000000000000000000000000000001110000000000111111111111000000000000000000000000000000000000000000",
        "000000300000000000000000000000000000011111300000000001310000000000000020000200cc*00000000000000011100000000011111111111100000000000000000000000000000000000000000000",
        "s00000000x1100p00g01mmmmmm1020x00111100000000000222001111110gx00p0gx001mmmm10220g002220g02200pt111000000000P111111111111",
        "11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111mmmmmmmm1111111111111111111111111111111111111111111111111111111111",
        "3030303030303030303033030303030303030303033030303030303030303033030303030303030303033030303030303030303033030303030303030303033030303030303030303033030303030303030",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "3030303030303030303033030303030303030303033030303030303030303033030303030303030303033030303030303030303033030303030303030303033030303030303030303033030303030303030",
        
        
    ],// lvl 12
    [
        /*
        "0000000000000003330000000000000000000000000000000033300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001333333333000",
        "0000000000000003330000000000000000000000000000000033300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001333333333000",
        "0000000000000003330000000000000000000000000000000033300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001333333333000",
        "00000000000000033300000000033300c00000000000000000333000000000000000000000000000000000000000000000000*0000000000000000000000000000000000000000000000001333333333000",
        "00000000000000033300000000033300c0000000000000000033300000000000000000000000000000000000000000000000111000000000000000000000000000000000000000000000001333333333000",
        "00000000000000033300000000033300c0000000000000000033300000000000000000000000000000000000000000000000131000000000000000000000000000000000000000000000001333333333000",
        "000000000000000333000000000333002000000000000000003330000000000cc00000000000000000000000000000000000131000000000000000000000000000000000000000000000001333333333000",
        "0000000000000003330000000003330111000000000000ccc0333ccc0000022cc000000c0000000000000000000000000000131000000000000000000000000000000000000000000000001333333333000",
        "000cc000000cccc333000000000333033300000000000000003330000ccc01111000000c00cccc00000000p000ccc0000g0013100000000ccccc0000000000000ccc000000000000000cc01333333333000",
        "000000000000002333cc000000033303330000000000000200333000000003333000200c0000000200000pp0000000x01110111h10000000000000000000000000000000000000000200001333333333000",
        "s0p00g00220x001333pp0g02220333033300t0x0022pxp11103330g200000333300110020000000110220pp00g000x001110000h100g022000x0pppp000002g00ppp00g02200000011000P1333333333",
        "111111111111113111111111111mmm1111111mmm11111133311111111mmm11111113311111mmm11331111111111111111111111111111111mmm11111mmm11111111111111111mmm11111111333333333",
        "3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333",
        "3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333",
        "33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333",
        "33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333",
        "333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333",
        "333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333",
        "3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333",
        */
        "00000000000000",
        "00000000000000",
        "00000000000000",
        "00000000000000",
        "00000000000000",
        "00000000000000",
        "00000000000000",
        "00000000000000",
        "00000000000000",
        "00000000000000",
        "00000000000000",
        "00000000000000",
        "00000000000000",
        "00000000000000",
        "00000000000000",
        "00000000000000",
        "00000000000000",
        "00000000000000",
        "00g00000000000",
        "00000000000000",
        "0000000000004004000000",
        "0000000000000000000000",
        "00000000000000%0000000",
        "0000000000000000000000",
        "0000000000000000000000",
        "00000000000g0000000000",
        "s0000!0-0&0g0000000000",
        "1111S000011111111111111110",
        "33333333333533335333333330",
        "34033333333333333333333330",
        "30003333333333333333333330",
        "30003333333333333333333330",
        "34003333400333333333333330",
        "30003333000333333333333330",
        "30003333000333333333333330",
        
    ],// lvl 13
    [
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000033000000000000000000000000000000000000000000000000000001333333333000000000000000",
        "00000000000000000000000000e0*00000000000000000000000000000000000000000000000000000033000000000000000000000000000000000000000000000000000001333333333000000000000000000",
        "00000000ccc00000000000000000000000000000000000000ccc000000000000000000000000000000033000000000000000000000000000000000000000c00000000000001333333333000000000000000",
        "0000000000000000000000000011100000000000000000000000000000000000000000200000000000033000000000000000000000000000000000000000c00000000000001333333333000000000000000",
        "0000000000200000000000000013100000000000000000000000000000000000000001110000000000033000000000000000000000000000000000000000c00000000000001333333333000000000000000",
        "000000011110000000000000001310000000000111h000000h1110000000000000000333000000000003300000cccc00000000000000000c00000000000020000000000000133333333300000000000000",
        "ccc0000333300000000ccc0000131000000000013100000000131000000000cc0000033300000000000330000000000000000cc00000000c00000000000110pp00000000001333333333000000000000000",
        "0000000333300000000000011a111a100000000131000000001310000000000000000333000000000003300000mmmm00000000000000000h000000000003300pp000000x001333333333000000000000000",
        "s00g0p03333tx00220g000011aaaaa12220g00t1310222222013100x0g0xg0110220033300xg000pxp03300x0tm11m0020g002200g00g00h000g02200x1330ppp00g00gx0P1333333333",
        "1111111111111111111mmm133111111111111113331111111133311111111133111111111111mmm111mmmm11111111111111111111111111111111111111111111111111111333333333",
        "3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333",
        "3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333",
        "3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333",
        "3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333",
        "3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333",
        "3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333",
        
    ],// lvl 14
    [
         "0000000000000000000003330000000000000000000000000000000000000000000000000000000000000000000000000000000000133333333300000000000000000000000000000000000000000000000000000000000",
        "00000000000000000000033300000000000000000000000000000000000000000000000000000000000000000000000000000000001333333333000000000000000000000000000000000000000000000000000000000",
         "000000000000000000000333000000000000000000000000000ccc00000000ccc00000000000000000000000000000000000000000133333333300000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000003330000000000000000000000000000000000000000000000000000cc00000000000000000000000000001333333333000000000000000000000000000000000000000000000000000000000",
         "0000000000000000000c033300000000000000000000c111h001110000001110000h1110000cc0000000000000000000000c000000133333333300000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000c033300000000000000000000c1310000000000000000000013100000cc000000c000000000000000c000001333333333000000000000000000000000000000000000000000000000000000000",
         "000cc00000000000000c0333000000ccc00000000000c131000000000000000000001310000cc000000c00000000cccc000c000000133333333300000000000000000000000000000000000000000000000000000000000",
        "00000000000000000002033300000000000000000000c1310000000000000000000013100000000000002000000000000000c00000133333333300000000000000000000000000000000000000000000000000000000",
        "s002200g00000220xp1103330pppxg00022000g00x00t13122222222222222222222131000g0220xg001100g000g000x00g020gx0P1333333333",
        "111111111mmm111111331111111111111111mm1111111111111111111111111111111111111111111113311111111mmmm1111111111111333333333",
        "33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333",
        "33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333",
        "33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333",
        "33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333",
        "33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333",
        "33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333",
        "33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333",
    ],// lvl 15
    [
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "00000000000000000000000000000000000000000000000000000000%0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "00000000000g0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "s0g00p0P",
        "111111_11111_11111_11111_11111111111111111111111111111111111111111111111111111111111111111111111111111111111",
        "333333_00300_00500_00300_00300300300300300300300300300300300300300300300300300300300300300300300300300300300",
        "333333_000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "333333_000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "333333_000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "333333_000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        
    ],// lvl 16
    [
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "s0g00p0P",
        "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
        "300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300",
        
    ],
    [
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "s0g00p0P",
        "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
        "300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300",
        
    ],
    [
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "00000%0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "s0g0000P",
        "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
        "400400",
        
    ],
    [
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "000=000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "s0g=0p0P",
        "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
        "300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300",
        
    ], // lvl 19
    [
    "000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"0000=00000=0000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"s00000000000000000000000000000000000000000000000000000000000",
"111111111111111111111111111111111111111111111111111111111111",
"333333333333333333433333333333333433333333333333333333333333",
"334003333334003333333333340033333333333333340033333333333333",
    ],
    [
    "000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"00000000000000g000000000000000000000000000000000000000000000",
"0000=00000=0000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"s00000000000000000000000000000000000000000000000000000000000",
"111111111111111111111111111111111111111111111111111111111111",
"333333333333333333433333333333333433333333333333333333333333",
"334003333334003333333333340033333333333333340033333333333333",
    ],
    [
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "s0g00p0P",
        "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
        "_00300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300",
        
    ],
    [
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "s0g00p0P",
        "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
        "_00/00300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300",
        
    ],
    [
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000g!00g000=000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000/1111111/bbbbbb/1111111/111111111111/00000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000_4333333_000000_3333333_333333333333_00000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000_0003333_000000_4004000_333333333333_0000000000000000000000000000000000000000000000",
        "00000000000000000000000000000000000000000000000000c0000000000000000000000000000000_0003333_000000_0000000_B000B0000000_00000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000c00000000000000000000000000000000_B000000_00000000000000_000000000000_00000000000000000000000000000000000000000000",
        "000000000000000000000000000000000000000000000000c00000g0000g000=000000000000000000_00000000000000000000000000000000000_00000000000000000000000000000000000000000000",
        "00000000000000000000000000000000000000000000000c000000/1111111111/<000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000c0000000_4003333333_0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "000000000000000000000000000000000000000000000c00000000_0003333333_0000000000000000000000000000000000000000B000B0000000000000000000000000000000000000000000000000000",
        "000000000000000000000000000000g0g0000=0000%0c000000000_0003333333_00000000000000000B0000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "00000000000000000000000000000/111111111111/<0000000000_3333333333_000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "00000000000000000000000000000_333333333333_00000000000_B0000B0000_0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "00000000000000000000000000111_400333333333_0000000000000000000000_00000000000000/0x0=000x000g0/00000000000000000000000000000000000000000000000000000000000000000000",
        "00000000000000000000000000000_000000B00000_0000000000000000000000_00000000000000_1111111111111_00000000000B000B00000000000000000000000000000000000000000000000000000",
        "000000000000000000000000000003000000000000_0000000000000000000000c0000000g000000_3333333333333_00000000000000000000000000000000000000000000000000000000000000000000",
        "00000000000000000000000000000000000000000000000000000000000000000cc0000/111/0000_3333333333333_00000000000000000000000000000000000000000000000000000000000000000000",
        "00000000000000000000000000000000000000000000000000000000000000000cc0000000000000_3333333333333_00000000000000000000000000000000000000000000000000000000000000000000",
        "s00%0p000=000%000g0t0%00=00%00000%00000000000=00000000=000000000022000000000%000_3333333333333_00000000000000000000000000000000000000000000000",
        "/1111111111111//1111111111111//1111111111111//1111111111111//1111111111111//1111_3333333333333311111111111111111111111111111111111111111111111",
        "_3433333333333__3433333343333__3433333333333__4333333343333__3343333343333_3333333333333_3333333333333_3333333333333_300300300300300300",
        "_3333333333333__3333333333333__3333333343333__3333333333333__3333333333333_3333333333333_3333333333333_3333333333333_",
        "_3333333333333__3333333333333__3333333333333__3343333333333__3333333333333_3333333333333_3333333333333_3333333333333_",
        "_3333333333333__3333333333333__3333333333333__3333333333333__3333433333333_3333333333333_3333333333333_3333333333333_",
        "_3333333333333__3333333333333__3333333333333__3333333433333__3333333333333_3333333333333_3333333333333_3333333333333_",
        "_3333333333333__3333333333333__3333333333333__3333333333333__3333333333333_3333333333333_3333333333333_3333333333333_",
        "_3333333333333__3333333333333__3333333333333__3333333333333__3333333333333_3333333333333_3333333333333_3333333333333_",
    ],
    [
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "s0g00p0P",
        "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
        "300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300",
        
    ],
    [
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "s0g00p0P",
        "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
        "300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300",
        
    ],
    [
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "s0g00p0P",
        "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
        "300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300",
        
    ],
    [
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "s0g00p0P",
        "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
        "300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300",
        
    ],
    [
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "s0g00p0P",
        "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
        "300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300",
        
    ],
    [
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "s0g00p0P",
        "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
        "300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300",
        
    ],
    [
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "s0g00p0P",
        "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
        "300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300",
        
    ],
    [
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "s0g00p0P",
        "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
        "300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300",
        
    ],
    [
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "s0g00p0P",
        "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
        "300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300300",
        
    ],
    [
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"00000000000B0000000000000000000000000B00000000000000000000000",
"0=000%000%00000=0000=0000000000000=00000000%0000%00000%000=0",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000s00000000000000000000000000000000",
"S11111S111111111111S11111111111S1111111S11111S1111111S111111",
"333333333333333333333333333333333333333333333333333333333333",
"333333333333333333333333333333333333333333333333333333333333",
    ],
    ],// base BTC2
    [
    
    // BTC1 revamped levels:
     [
         
         
"0000000000000",
"0000000000000",
"0000000000000",
"0000000000000",
"0000000000000",
"0000000000000",
"0000000000000",
"0000000000000",
"0000000000000",
"0000000000000",
"0000000000000",
"0000000000000",
"000000000000000000000000000",
"000000000000000000000000000000000000000000000000000",
"000000000=000000000000=0000000000000000000000000000",
"0000000000000000000000000000000000000000000000000=0",
"00000000000000000000000000000000000000000000000000000000000000000000%000%",
"cccc000000000000000000000000000000000000000000000000000000000000000000000",
"00000000000000ccc00000000000000000000000000000000000000000000000000011111",
"0000000%00000000%000x0000%00000000000000000000000000000000000000000030303",
"s00ggg0000200gg0000x000gg00000000000000000000000000000000000%00%0000^3030",
"1111111111111111111111111111<00000000000000000000000ggg002000002000030303",
"_030303030303030303030303030/000000000=000000=0001111111111111111111^3000^",
"_305030303030304030303030303/00000000000000000000303030303030304030300ccc^",
"_030303030303030303030303030/00000000000000000000^30303030303030303030ccc^",
"^303030303030303030303030303/00000000000000000000303030303030303030300ccc^0000000110000011000000%0000000%",
"3030303030303030303030303030/c0000000000000000000^30303030303030303030000^0000011110222011110000g000ggg000g000000000000gg00P0t",
"^303030303030303030303030303/c000000000000000000030303030303030303030111111111130301111130301111111111111111111111111111111111",
"3030303030303030303030303030/222gggx00000xgggg00t0^303030303030303030303030303030303030303030303030303",
"^30303030303030303030303030301111111111111111111111130303040303040303030303030303030303030303030303030000000003030303030303030303030303030303",
"303030303030303030303030303030303030303030303030303033030303030303033030303030303033030303030303030000000000000030303030303030300000000000000000000000000303030303030303",
"^303030303030303030303030303030303030303030303030303030303030303030303030303030303030300000000000000000000000000000303030303030303",
"3030303030303030303030303030303030303030303030303030303030303030303030303030303030303000000000000000000000000000000303030303030303",
"^303030303030303030303030303030303030303030303030303030303030303030303030303030303030300000000000000000000000000000303030303030303",
"3030303030303030303030303030303030303030303030303030303030303030303030303030303030303000000000000000000000000000000303030303030303",
"^3030303030303030303030303030303030303030303030303030303030303030303030303030303030303",
"3030303030303030303030303030303030303030303030303030303030303030303030303030303030303",
"^30303030303030303030303030303030303030303030303030303",

        ], // BTC1 level
    [
"0000000000000",
"0000000000000",
"0000000000000",
"0000000000000",
"0000000000000",
"0000000000000",
"0000000000000",
"0000000000000",
"0=0000000000=00000000=00000000c00000=00000000=000000",
"000000000000000000000000000000c000000000000000000000",
"0000000000000000000000000000002000000000000000000000",
"0000000000000000000000000001111000000000000000000000",
"00000000000000000000000c000303000000000ccccc000000000",
"00000%0%000000000000000c00^30100%00000ccccc000000000",
"s00g0000000g000ggg00x000200t30300000000ggggg00000000P",
"11111111111111111111111111111111111111111111111111111",
"3030305030303030303030503030303050303030303030403030",
"^3030303030303030303030303030303030303030303030303030",
"3030303030403030303030303030303030303030353030303030",
"^3030303030303030303030303050303030303030303030303030","3030303030303030304030303030303030303030303030303030",
"^3030303030303030303030303030303030303030303030303030",
        ],
    [
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c000%00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"s000200000x0000P",
"11111111111111111",
"333333333333333333",
    ],
    [
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"s000200000x0000P",
"11111111111111111",
"333333333333333333",
    ],
    [
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"s000200000x0000P",
"11111111111111111",
"333333333333333333",
    ],
    [
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"s000200000x0000P",
"11111111111111111",
"333333333333333333",],
    
    [
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"s000200000x0000P",
"11111111111111111",
"333333333333333333",
    ],
    [
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"s000200000x0000P",
"11111111111111111",
"333333333333333333",
    ],
    [
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"s000200000x0000P",
"11111111111111111",
"333333333333333333",
    ],
    [
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"s000200000x0000P",
"11111111111111111",
"333333333333333333",
    ],
    [
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"s000200000x0000P",
"11111111111111111",
"333333333333333333",
    ],
    [
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"s000200000x0000P",
"11111111111111111",
"333333333333333333",
    ],
    [
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"s000200000x0000P",
"11111111111111111",
"333333333333333333",
    ],
    [
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"s000200000x0000P",
"11111111111111111",
"333333333333333333",
    ],
    [
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"s000200000x0000P",
"11111111111111111",
"333333333333333333",
    ],
    [
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"s000200000x0000P",
"11111111111111111",
"333333333333333333",
    ],
    [
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"s000200000x0000P",
"11111111111111111",
"333333333333333333",
    ],
    [
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"s000200000x0000P",
"11111111111111111",
"333333333333333333",
    ],
    [
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"s000200000x0000P",
"11111111111111111",
"333333333333333333",
    ],
    [
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"s000200000x0000P",
"11111111111111111",
"333333333333333333",
    ],
    [
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"000c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
"s000200000x0000P",
"11111111111111111",
"333333333333333333",
    ],
    
    ],// BTC1 revamp
    [
    
    [
        
    "3333333333333333333333",
    "30cc0000000c00000000c3",
    "30cc0000000c0000000cc3",
    "33333000000c000000ccc3",
    "30000000000c0000033333",
    "3000000000333000000003",
    "30000cc0000000000000c3",
    "3c000330000000000000c3",
    "3c00000000000000cc0333",
    "3330000000000000cc0003",
    "3000000000000000330003",
    "3000000cc0000000000003",
    "3000000330000000000003",
    "300000000000000c000003",
    "3sccc000x#00000cc00003",
    "3333333333!!3333333333",
    "3ccc0000000000000000c3",
    "3ccc0000000000000c00c3",
    "3ccc00000c0000000c0333",
    "333300000c000003330003",
    "3c00000003300000000cc3",
    "3cc0000000000000000cc3",
    "3cc0000000000000000333",
    "3333330000000000000303",
    "3000000000000333000333",
    "3cc0000000000003000cc3",
    "3330000c000000c30000c3",
    "3cc000cc00000cc30000c3",
    "3cc000cc00000c33t00cc3",
    "3333333333003333333333",
    
    
    
        
    ],// special stages
           
    ],
    [
        [
        "0000000000000000000000000",
        "0000000000000000000000000",
        "0000000000000000000000000",
        "000000000000000000000000000000000000000000000000000000000000000000000000000",
        "000000000000000000000000000000000000000000000000000000000000000000000000000",
        "000000000000000000000000000000000000000000000000000000000000000000000000000",
        "000000000000000000000000000000000000000000000000000000000000000000000000000",
        "000000000000000000000000000000000000000000000000000000000000000000000000000",
        "000000000000000000000000000000000000000000000000000000000000000000000000000",
        "000000000000000000000000000000000000000000000000000000000000000000000000000",
        "000000000000000000000000000000000000000000000000000000000000000000000000000",
        "000000000000000000000000000000000000000000000000000000000000000000000000000",
        "000000000000000000000000000000000000000000000000000000000000000000000000000",
        "000000000000000000000000000000000000000000000000000000000000000000000000000",
        "000000000000000000000000000000000000000000000000000000000000000000000000000",
        "000000000000000000000000000000000000000000000000000000000000000000000000000",
        "000000000000000000111100000000000000000000000000000000000000000000000000000",
        "000000000000000000_33/000000000000000000j0000J00000000000000000000000000000",
        "000000000000000000_33/0000000000000j00003333333333J000000000000000000000000",
        "s00000000009000000_33/00000000j000033333333333333333333J0000000000000000000",
        "111111111111111111111111111111111111111111111111111111111111111111111111111",
        "_33433333335333333333333/_33333333335333333533333/_33433433335333533335333/",
        "_33333333333333333333333/_33333333333333333333333/_33333333333333333333333/",
        "_33333333333333333333333/_33433333333333333333333/_33333333333333333333333/",
        "_33333333333333333333333/_33333333333333333333333/_33333333333333333333333/",
        "_33333333333333333333333/_33333333333333333333333/_33333333333333333333333/",
        "_33333333333333333333333/_33333333335333333333333/_33333333333333333333333/",
        "_33333333333333333333333/_33333333333333333333333/_33333333333333333333333/",





        ],
    ],
    
    ];
            
            
        
    this.size = 0;
    this.level = 0;
    this.text = [
    "This is the first level\n pretty easy",
    "Same with this level",
    "Final level, be pretty careful!",
    "Go through this tube, it'll teleport\n you pretty far",
    "Welcome to the top part!",
    ];
    this.levelexpan = [0, 0];
    this.cam = new Camera(0, 0, width, height, circles.x, circles.y, this.levelexpan[0], this.levelexpan[1], 18);
    
    this.loadToVram();
};
Levels.prototype.loadToVram = function() {
    VRAM.remove();
    for (var c = 0; c < this.levels[mode][level].length; c++) {
        for (var r = 0; r < this.levels[mode][level][c].length; r++) {
            var p = this.levels[mode][level][c][r];
            noStroke();
            if (p === "s") {
                
                
                circles.add(r * 40, c * 40, 40, 40, {LEFT: LEFT, RIGHT: RIGHT, UP: UP, DOWN: DOWN}, color(0, 26, 255));
                if(boltyon === true){
                secondplayerai.add(r * 40, c * 40, 40, 40);
                }
                 
            }
            
            if(p === "3"){
                if(level < 2){
                dirts.add(r * 40, c * 40, 120, 120);
                }else{
                dirts.add(r * 40, c * 40, 40, 40);
                }
                if(mode === 1){
                    if(level === 0){
                        dirts.add(r * 40, c * 40, 80, 40);
                    }
                }
            }
        
            if(p === "P"){
                goals.add(r * 40, c * 40, 40, 40, 0);
            }
            if(p === "^"){
                pblock.add(r * 40, c * 40, 40, 40);
            }
            if(p === ":"){
                waterfal.add(r * 40, c * 40, 80, 120);
            }
            if(p === "b"){
                bridge.add(r * 40, c * 40, 40, 40);
            }
            if(p === "!"){
                if(gamemode === 0){
                windo.add(r * 40, c * 40, 50, 50, 1);
                }
                
                if(gamemode === 2){
                    lockb.add(r * 40, c * 40, 40, 40);
                }  
                
            }
            if(p === "Q"){
                bossf.add(r * 40, c * 40, 200, 200);
            }
            if(p === "-"){
                windo.add(r * 40, c * 40, 40, 40, 0);
            }
            if(p === "&"){
                windo.add(r * 40, c * 40, 40, 40, 2);
                if(windowmode === "Flame"){
                    windo.add(r * 40, c * 40, 40, 50, 0);
                }
                
            }
            if(p === "f"){
                windo.add(r * 40, c * 40, 40, 40, 3);
                if(windowmode === "Flame"){
                    windo.add(r * 40, c * 40, 40, 50, 0);
                }
            }
            if(p === "S"){
                sands.add(r * 40, c * 40, 200, 120);
            }
            if(p === "2"){
                spikes.add(r * 40, c * 40, 40, 40);
            }
            if(p === "e"){
                lifes.add(r * 40, c * 40, 40, 40);
            }
            if(p === "m"){
                magma.add(r * 40, c *40, 120, 120);
            }
            if(p === "j"){
                if(mode !== 3){
                slope.add(r * 40, c * 40, 40, 40, 1);
                }
                if(mode === 3){
                    
                        slope.add(r * 40, c * 40, 200, 40, 1);
                    
                }
            }
            if(p === "J"){
                if(mode !== 3){
                slope.add(r * 40, c * 40, 40, 40, 0);
                }
                if(mode === 3){
                    slope.add(r * 40, c * 40, 200, 40, 0);
                }
            }
            if(p === "x"){
                cubes.add(r * 40, c * 40, 40, 40, 0);
            }
            if(p === "X"){
                cubes.add(r * 40, c * 40, 40, 40, 2);
            }
            if(p === "%"){
                tpole.add(r * 40, c * 40, 245, 255);
            }
            if(p === "#"){
                cubes.add(r * 40, c * 40, 40, 40, 1);
            }
            if(p === "Z"){
                zobject.add(r * 40, c * 40, 180, 40, 0);
            }
            if (p === "1") {
                blocks.add(r * 40, c * 40, 40, 40, color(0, 255, 4));
            }
            
            if(p === "a"){
                water.add(r * 40, c * 40, 40, 40);
            }
            if(p === "_"){
                bblock.add(r * 40, c * 40, 40, 40, 0);
            }
            if(p === "/"){
                bblock.add(r * 40, c * 40, 40, 40, 1);
            }
            if(p === "G"){
                grass.add(r * 40, c * 40, 40, 40);
                spikes.add(r * 40, c * 40, 40, 40);
            }
            if(p === "@"){
                movingblock.add(r * 40, c * 40 + pformy, 40, 40);
            }
            if(p === "*"){
                windo.add(r * 40, c * 40, 40, 40, 4);
                if(windowmode === "Flame"){
                    windo.add(r * 40, c * 40, 40, 50, 0);
                }
            }
            

            if(p === "t"){
                tramp.add(r * 40, c * 40, 40, 40, 0);
            }
            if(p === "8"){
                tramp.add(r * 40, c * 40, 40, 40, 1);
            }
            if(p === "7"){
                tramp.add(r * 40, c * 40, 40, 40, 2);
                
            }
            if(p === "<"){
                tramp.add(r * 40, c * 40, 40, 40, 3);
                
            }
            if(p === ">"){
                tramp.add(r * 40, c * 40, 40, 40, 4);
                
            }
            if(p === "u"){
                unstables.add(r * 40, c * 40, 120, 120, 0);
            }
            if(p === "U"){
                unstables.add(r * 40, c * 40, 120, 120, 1);
            }
            if(p === "c"){
                if(C1 === false){
                coin.add(r * 40, c * 40, 40, 40);
                }
            }
            if(p === "E"){
                windo.add(r * 40, c * 40, 40, 40, 5);
            }
            if(p === "R"){
                goals.add(r * 40, c * 40, 40, 40, 1);
            }
            if(p === "h"){
                sticky.add(r * 40, c * 40, 40, 40);
            }
            if(p === "4"){
                chunk.add(r * 40, c * 40, 120, 120);
            }
            if(p === "5"){
                chunk2.add(r * 40, c * 40, 160, 160);
            }
            if(p === "B"){
                Bigobj.add(r * 40, c * 40, 200, 200);
            }
            if(p === "g"){
                grass.add(r * 40, c * 40, 120, 120);
            }
            if(p === "T"){
                tubez.add(r * 40, c * 40, 40, 40, tubez.on);
            }
            if(p === "6"){
                chepoi.add(r * 40, c * 40, 40, 40);
            }
            if(p === "="){
                palm.add(r * 40, c * 40, 180, 180, 0);
            }
            if(p === "I"){
                badgez.add(r * 40, c * 40, 40, 40);
            }
            if(p === "9"){
                gimmick1.add(r * 40, c * 40, 40, 40);
            }
            
            this.levelexpan[0] = this.levels[mode][level][c].length * 40;
            this.levelexpan[1] = this.levels[mode][level].length * 40;
            
        }
    }
    
    
};
var looktime = 0;
Levels.prototype.apply = function(){
    
    
    this.cam.levelWidth= this.levelexpan[0];
    this.cam.levelHeight = this.levelexpan[1];
    
    if(gamemode === 2){
        this.size = this.levelexpan;
    }
    if(level === 34){
        this.size = this.levelexpan;
    }
    this.levelexpan = this.size;

    if(keys[UP]){
        this.cam.y  -= 200;
        if(this.cam.y > -200){
            this.cam.y = -200;
        }
    }
        if(keys[DOWN]){
            this.cam.y  += 200;
            if(this.cam.y > -200){
                this.cam.y = -200;
            }
    }else{
        this.cam.y = 0;
    }

    
    
    
    
    
    
    if(gamemode === 0){
    if(level === 0){
    if(circles[0].x < 1371 && circles[0].y < 800){
        this.cam.levelHeight -= 860;
    }
}
    }
    
    noStroke();
    this.cam.follow(circles[0]);
    blocks.apply(this.cam, circles, secondplayerai, bossf, unstables);
    dirts.apply(this.cam, circles, secondplayerai);
    windo.apply(this.cam, circles);
    trailsArr.apply(this.cam);
    pblock.apply(this.cam, circles);
    grass.apply(this.cam);
    zobject.apply(this.cam, secondplayerai);
    lockb.apply(this.cam);
    chunk.apply(this.cam, circles);
    chunk2.apply(this.cam, circles);
    chepoi.apply(this.cam, circles);
    tubez.apply(this.cam, circles);
    palm.apply(this.cam);
    Bigobj.apply(this.cam, circles);
    waterfal.apply(this.cam);
    movingblock.apply(this.cam, circles);
    bblock.apply(this.cam, circles);
    cubes.apply(this.cam, circles);
    power1.apply(this.cam, circles);
    unstables.apply(this.cam, circles, blocks);
    slope.apply(this.cam, circles);
    tpole.apply(this.cam, circles);
    bridge.apply(this.cam, circles);
    water.apply(this.cam, circles);
    badgez.apply(this.cam, circles);
    spikes.apply(this.cam, circles);
    lifes.apply(this.cam, circles);
    signs.apply(this.cam, circles);
    magma.apply(this.cam, circles);
    goals.apply(this.cam, circles);
    sands.apply(this.cam, circles);
    coin.apply(this.cam, circles);
    gimmick1.apply(this.cam, circles);
    grassg.apply(this.cam, circles);
    sticky.apply(this.cam, circles);
    tramp.apply(this.cam, circles);
    bossf.apply(this.cam, circles, blocks, secondplayerai);
    circles.apply(blocks, this.cam, goals, gimmick1, trailsArr, spikes,magma, tramp, coin, sticky, dirts, cubes, unstables, signs, lifes, power1, water, secondplayerai, chepoi, chunk, chunk2, sands, bridge, windo, grassg, movingblock, bblock, slope, badgez, bossf);
     secondplayerai.apply(this.cam, circles, blocks, dirts, sands, bridge, windo, bossf);
    
    
    
    if (level >= this.levels[0].length + 25) {
        level = 0;
        this.loadToVram();
        VRAM.remove();
    }
    
    for (var i = 0; i < goals.length; i++) {
        
        if (goals[i].complete) {
            if(goals[i].id === 0){
            if(dbug){
            println("Level Completed");
            }
            
            //level ++;
            //winscore += 15;
            scene = "Win";
            //tubez.on = 0;
            //this.loadToVram();
            circles[0].velx += 50;
        }
            if(goals[i].id === 1){
                mode = 2;
                gamemode = 2;
                scene = "opencard";
                level = 0;
                this.loadToVram();
            }
        }
        
        
            
        
    }
    
    
    
    
     for (var i = 0; i < circles.length; i++) {
        if (circles[i].x < 0) {
            circles[i].x = 0;
        }
        if(circles[i].y > 3000){
            circles[i].dead = true;
        }
        
        if (circles[i].x + circles[i].w > this.levelexpan[0]) {
            circles[i].x = this.levelexpan[0] - circles[i].w;

        }
        if (circles[i].y > this.levelexpan[1] || keys[82]) {
            circles[i].dead = true;
            
            this.loadToVram();
            this.deaths++;
            
        }
            if(circles[i].dead === true){
                Lives -= 1;
                circles[i].hearts = 15;
             this.loadToVram();
             time = 0;
             poweruptime = 0;

             amount = 0;

             scene = "opencard";
             
             
             
             /*
             if(gamemode === 2){
                 failed = true;
                 scene = "collected";
                 this.loadToVram();
                 mode = 0;
             }
             */
             
            }
            /*
            if(chepoi[0].saved === true){
                if(circles[i].dead === true){
                 
                 this.loadToVram();
                     circles[i].x = chepoi[0].x;
                     circles[i].y = chepoi[0].y;
                }
                     
                 
                 
             }
             */
            
            if(signs.length>0){
                signs.on=this.text[level].length-signs.length;
            }
            
            
        }
    
    if(Lives === 0){
        scene = "womp";
    }

    if(mode === 3){


        if(circles[0].x < 100){
            TTXT1.display();
        }
        if(circles[0].x > 300 && circles[0].x < 900){
            TTXT2.display();
        }
        if(circles[0].x > 1000 && circles[0].x < 2300){
            TTXT3.display();
        }

        

        


    }


    
    if(keys[13]){
        scene = "Paused";
    }
    
    fill(0, 0, 255, ptrans);
    rect(0, 0, width, height);
    fill(0, 0, 255, dtrans);
rect(0, 0, 800, 600);

};
	    background(255, 255, 255, 0);
for(var i = 0; i < 600; i ++){
        var st = color(0, 162, 255);
        var end = color(4, 149, 222);
        var elpo = lerpColor(st, end, i / 600);
        fill(elpo);
        rect(0, i, 800, 1);
    }
var waterf = get(0, 0, 600, 600);
//{
var Air = function(x,y,w,h){
this.x = x;
this.y = y;
this.w = w;
this.h = h;
this.speed = random(3,1);

};
Air.prototype.draw= function() {
    strokeWeight(1);
stroke(166, 206, 252);
fill(166, 206, 252);
rect(this.x,this.y+this.h-this.h/4,this.w,this.h/4,9);
rect(this.x+this.w/10,this.y+this.h/2,this.w/1.2,this.h/4,9);
rect(this.x+this.w/4,this.y+this.h/4,this.w/1.8,this.h/4,9);
rect(this.x+this.w/6,this.y+this.h/6,this.w/5,this.h/2,9);
rect(this.x+this.w-this.w/1.7,this.y+this.h/12,this.w/4,this.h/2,9);

};
var Airm = function(maxim){
this.maxim = maxim;
this.airms = [];
this.cside=round(random(2));
};
Airm.prototype.manage = function(){
    while(this.airms.length<this.maxim){
        this.airms.push(new Air(random(width),random(100),random(80,100),random(50,70)));
     
    }
};
Airm.prototype.comeon = function(){
    for(var i=0; i<this.airms.length; i++){
        if(this.side===0){
            this.airms[i].x+=this.airms[i].speed;
        }else{
            this.airms[i].x-=this.airms[i].speed;
        }
        this.airms[i].draw();
        
        if(this.airms[i].x>width){
            this.airms[i].x=-this.airms[i].w;
        }
        if(this.airms[i].x+this.airms[i].w<0){
            this.airms[i].x=width;
        }
    }
};
var Backdrop = function(y,smooth, id){
this.y = y;
this.smooth = smooth;
this.heightlvl = [];
this.id = id;

};
Backdrop.prototype.display = function(){
    while(this.heightlvl.length<30){
     this.heightlvl.push(random(this.smooth));
    } 
    for(var r = 0; r<20; r++){ 
        
        
        
     noStroke();
     var w = this.heightlvl[r];
     if(this.id === 0){
     fill(12, 212, 39);
     }
     if(this.id === 2){
         fill(4, 186, 49);
     }
     if(this.id === 1){
         fill(111, 111, 115);
     }
     rect(r*50,noise(r)*w+this.y,60,height-noise(r));
    }
    
};
var range = new_.call(Backdrop,420, 40, 2);
var range2 = new_.call(Backdrop, 480, 60);
var range3 = new_.call(Backdrop,400, 40);
var range4 = new_.call(Backdrop,250, 30);
var range5 = new_.call(Backdrop,220, 30, 2);
var range6 = new_.call(Backdrop,230, 30, 2);
var rrange = new_.call(Backdrop,200, 40, 1);
var clouds = new_.call(Airm, 7);
var back = new_.call(LineBackground);



//backgrounds
//premade assets
//{
//image assets (for space)
//{
background(204, 105, 6);
noStroke();
    rect(0, 0, 0, 0, 0);
    fill(4, 201, 4);
    rect(0, 0, 40, 15);
    fill(3, 204, 3);
    rect(0, 10, 15, 20-sin((millis()/1)), 5);
    rect(25, 10, 15, 20+sin(millis()/1), 5);
var ograssl = get(0, 0, 40, 40);
noStroke();
        fill(204, 105, 6);
        rect(0, 0, 40, 40);
        
var odirt = get(0, 0, 40, 40);
background(255, 255, 255, 1);
fill(2, 158, 2);
ellipse(10, 50, 20, 20);
ellipse(30, 40, 45, 45);
ellipse(50, 50, 20, 20);
var obusch = get(0, 0, 60, 60);



for(var i = 0; i < 30; i++){
    
    
    image(ograssl, i * 2 * 9 * 2, 150);
    image(odirt, i * 2 * 9 * 2, 190);
    image(odirt, i * 2 * 9 * 2, 230);
}
image(odirt, 0, 150);
image(odirt, 0, 110);
image(odirt, 360, 150);
image(odirt, 320, 150);
image(odirt, 680, 150);
image(odirt, 720, 150);
image(odirt, 720, 110);
image(odirt, 680, 110);
image(odirt, 320, 110);
image(odirt, 360, 110);
image(ograssl, 0, 70);
image(ograssl, 320, 70);
image(ograssl, 360, 70);
image(ograssl, 680, 70);
image(ograssl, 720, 70);
image(obusch, -15, 20);
image(obusch, 310, 20);
image(obusch, 350, 20);
image(obusch, 670, 20);
image(obusch, 710, 20);
for(var i = 0; i < 8; i++){
image(obusch, i * 2 * 9 * 2 + 25, 95);
image(obusch, i * 2 * 9 * 2 + 390, 95);
}
fill(0, 149, 255);
rect(200, 155, 40, 115);
rect(80, 155, 40, 115);
rect(500, 155, 40, 115);
rect(639, 155, 40, 115);
var mpara = get(0, 0, 800, 300);
var ext = 120;
background(255, 255, 255, 0);

fill(3, 153, 33);
ellipse(20, 40, 50, 50);
ellipse(80, 70, 80, 80);
ellipse(260, 70, 80, 80);
ellipse(320, 70, 80, 80);
ellipse(380, 70, 80, 80);
ellipse(440, 50, 80, 80);
ellipse(680, 70, 80, 80);
ellipse(730, 70, 50, 50);

fill(255, 132, 0);
rect(0, 40, 35, 235+ext, 7);
rect(50, 60, 35, 215+ext, 7);
rect(80, 40, 35, 235+ext, 7);
rect(210, 80, 35, 195+ext, 7);
rect(270, 80, 35, 195+ext, 7);
rect(300, 70, 35, 200+ext, 7);
rect(350, 70, 55, 200+ext, 7);
rect(465, 40, 35, 230+ext, 7);
rect(670, 50, 35, 230+ext, 7);
rect(700, 70, 35, 210+ext, 7);

fill(194, 74, 4);
rect(25, 34, 35, 245+ext, 7);
rect(235, 15, 35, 255+ext, 7);
rect(435, 5, 35, 265+ext, 7);
rect(635, 35, 35, 235+ext, 7);
rect(110, 80, 35, 195+ext, 7);
rect(320, 40, 35, 230+ext, 7);
rect(400, 40, 35, 230+ext, 7);
rect(565, 190, 15, 220+ext, 7);
rect(730, 45, 35, 240+ext, 7);

fill(255, 132, 0);
rect(30, 414, 25, 25);
rect(115, 414, 25, 25);
rect(240, 405, 25, 25);
rect(325, 404, 25, 25);
rect(410, 404, 25, 25);
rect(440, 404, 25, 25);
rect(570, 414, 5, 25);
rect(640, 404, 25, 25);
rect(735, 414, 25, 25);
fill(194, 74, 4);
rect(75, 414, 25, 25);
rect(215, 405, 15, 25);
rect(285, 404, 25, 25);
rect(360, 394, 35, 35);
rect(475, 405, 20, 20);
rect(682, 395, 40, 40);


fill(0, 162, 255);
rect(300, 300, 10, 150);
rect(400, 100, 10, 350);
rect(10, 40, 10, 420);
rect(730, 45, 10, 190);
rect(670, 245, 10, 200);

fill(7, 184, 7);
ellipse(300, 300, 20, 20);
ellipse(310, 300, 20, 20);
ellipse(320, 300, 20, 20);
ellipse(330, 300, 20, 20);
ellipse(340, 300, 20, 20);
ellipse(350, 300, 20, 20);
ellipse(430, 120, 80, 80);
ellipse(390, 120, 80, 80);
ellipse(360, 120, 80, 80);
ellipse(50, 200, 40, 40);
ellipse(70, 200, 40, 40);
ellipse(90, 200, 40, 40);
ellipse(700, 250, 40, 40);
ellipse(720, 250, 40, 40);
ellipse(740, 250, 40, 40);
ellipse(680, 250, 40, 40);


image(brid, 144, 100, 10, 10);
image(brid, 152, 100, 10, 10);
image(brid, 160, 100, 10, 10);
image(brid, 168, 100, 10, 10);
image(brid, 176, 100, 10, 10);
image(brid, 184, 100, 10, 10);
image(brid, 192, 100, 10, 10);
image(brid, 200, 100, 10, 10);

image(brid, 498, 200, 10, 10);
image(brid, 506, 200, 10, 10);
image(brid, 514, 200, 10, 10);
image(brid, 522, 200, 10, 10);
image(brid, 530, 200, 10, 10);
image(brid, 538, 200, 10, 10);
image(brid, 546, 200, 10, 10);
image(brid, 554, 200, 11, 10);
image(brid, 578, 200, 10, 10);
image(brid, 586, 200, 10, 10);
image(brid, 594, 200, 10, 10);
image(brid, 602, 200, 10, 10);
image(brid, 610, 200, 10, 10);
image(brid, 618, 200, 10, 10);
image(brid, 626, 200, 10, 10);





image(waterf, 145, 120, 65, 330);
image(waterf, 500, 220, 65, 220);
image(waterf, 580, 220, 55, 220);
var tmounts = get(0, 0, 800, 350);
background(255, 255, 255, 0);
noStroke();
fill(189, 96, 2);
rect(100, 100, 20, 40);
rect(120, 120, 20, 20);
fill(166, 87, 3);
rect(140, 100, 20, 40);
rect(290, 100, 20, 30);
fill(105, 50, 1);
rect(160, 80, 20, 60);
rect(310, 80, 20, 60);
fill(189, 96, 2);
rect(175, 90, 20, 50);
rect(200, 90, 40, 50);
rect(250, 100, 40, 40);
fill(87, 36, 2);
rect(100, 140, 230, 200);
rect(100, 130, 30, 30);
rect(190, 130, 30, 30);
rect(280, 130, 30, 30);
var ggpara1 = get(100, 80, 250, 180);
background(255, 255, 255, 0);
for(var i = 0; i < 7; i++){

image(ggpara1, i * 8 * 7 * 4.1, 200);

}
var ggparaw = get(0, 200, width, 180);
noStroke();
background(255, 255, 255, 1);
fill(4, 201, 4);
ellipse(10, 50, 20, 20);
ellipse(30, 40, 45, 45);
ellipse(50, 50, 20, 20);
var obusch2 = get(0, 0, 60, 60);
image(Get('Image3'), 0, 350);
image(Get('Image3'), 40, 350);
image(Get('Image3'), 80, 350);
image(Get('Image3'), 150, 350);
image(Get('Image3'), 190, 350);
image(Get('Image3'), 230, 350);
image(Get('Image3'), 270, 350);
image(Get('Image3'), 520, 350);
image(waterf, 130, 380, 30, 30);
image(waterf, 310, 380, 230, 30);

image(obusch2, -10, 380);
image(obusch2, 30, 380);
image(obusch2, 70, 380);
image(obusch2, 160, 380);
image(obusch2, 190, 380);
image(obusch2, 230, 380);
image(obusch2, 260, 380);
image(obusch2, 540, 380);
image(waterf, 120, 400, 50, 45);
image(waterf, 300, 400, 250, 45);
noStroke();
fill(0, 128, 255);
rect(0, 441, width, 300);
var ggmiddle = get(0, 350, width, 300);
background(255, 255, 255, 0);
range.display();
noStroke();
fill(0, 173, 9);
beginShape();
vertex(0,417);
vertex(36,417);
vertex(88,421);
vertex(170,438);
vertex(211,441);
vertex(328,441);
vertex(405,443);
vertex(476,458);
vertex(558,483);
vertex(600,482);
vertex(600,600);
vertex(0,600);
endShape(); 
var ggrange = get(0, 420, width, 220);
//}


background(255, 255, 255, 0);
range4.display();
var rrb = get(0, 210, width, 130);
background(255, 0);
            fill(14, 173, 35);
rect(0, 300, width, 100);
fill(4, 201, 11);
rect(0, 300, 60, 60);
rect(120, 300, 60, 60);
rect(240, 300, 60, 60);
rect(360, 300, 60, 60);
rect(480, 300, 60, 60);
rect(600, 300, 60, 60);
rect(720, 300, 60, 60);
rect(180, 350, 60, 50);
rect(310, 350, 60, 50);
rect(420, 350, 60, 50);

image(rrpillar, 300, 320, 20, 80);
image(rrpillar, 100, 320, 20, 60);
image(rrpillar, 550, 310, 20, 60);
image(rrpillar, 700, 320, 20, 60);

strokeWeight(1.5);
stroke(201, 201, 201);
fill(209, 113, 30);
rect(300, 300, 20, 20, 7);
noStroke();
fill(4, 201, 11);
rect(60, 350, 60, 50);
rect(540, 350, 60, 50);
rect(660, 350, 60, 50);
var RRimage19 = get(0, 300, width, 100);

//}

Backdrop.prototype.foreground = function() {
    // ground
    this.busch = function(){
    fill(0, 107, 0);
    rect(0, height - 50, width, 50);
    // bushes back
    for(var i = 0; i < 20; i++) {
        pushMatrix();
        translate(-200 + (i * 300 - circles[0].x/5) % (width + 500), 1);
        image(b, 0, height - 300);
        
        
        popMatrix();
    }
    fill(8, 178, 240);
    rect(0, 420, width, 200);
    fill(0, 20);
    rect(0, 425, width, 200);
    
    for(var i = 0; i < 20; i++){
        pushMatrix();
        translate(-200 + (i * 300 - circles[0].x/5) % (width + 500), 1);
        fill(0, 100, 0);
        ellipse(i * 9.9 * 2.1, height - 300, 40, 40);
        fill(255, 132, 0);
        rect(i * 9 * 2, height - 300, 60, 250);
        
        
        
        popMatrix();
    }
    // bushes front
    for(var i = 0; i < 20; i++) {
        pushMatrix();
        translate(-350 + (i * 300 - circles[0].x/2) % (width + 500), -20);
        scale(1.2, 1.2);
        fill(0, 112, 73);
        ellipse(0, height - 100, 150, 150);
        ellipse(75, height - 60, 100, 100);
        ellipse(-75, height - 60, 100, 100);
        popMatrix();
    }
    };
    
    // vines {
    this.vines = function(){
    noFill();
    strokeWeight(15);
    stroke(47, 133, 25);
    pushMatrix();
    beginShape();
    translate(0, 0);
    vertex(width, 0);
    curveVertex(width, 0);
    curveVertex(width + 13, 50);
    curveVertex(width, 100);
    curveVertex(width - 12, 200);
    curveVertex(width + 2, 250);
    curveVertex(width + 3, 300);
    curveVertex(width, 350);
    curveVertex(width - 12, 400);
    curveVertex(width + 2, 450);
    curveVertex(width + 2, 500);
    curveVertex(width - 23, 550);
    curveVertex(width, height);
    vertex(width, height);
    endShape();
    popMatrix();
    stroke(0, 82, 0);
    pushMatrix();
    translate(-10, 0);
    beginShape();
    vertex(width, 0);
    curveVertex(width, 0);
    curveVertex(width + 13, 50);
    curveVertex(width, 100);
    curveVertex(width - 12, 200);
    curveVertex(width + 2, 250);
    curveVertex(width + 3, 300);
    curveVertex(width, 350);
    curveVertex(width - 12, 400);
    curveVertex(width + 2, 450);
    curveVertex(width + 2, 500);
    curveVertex(width - 23, 550);
    curveVertex(width, height);
    vertex(width, height);
    endShape();
    popMatrix();
    
    
    stroke(47, 133, 25);
    pushMatrix();
    beginShape();
    translate(-width + 5, 0);
    vertex(width, 0);
    curveVertex(width, 0);
    curveVertex(width + 13, 50);
    curveVertex(width, 100);
    curveVertex(width - 12, 200);
    curveVertex(width + 2, 250);
    curveVertex(width + 3, 300);
    curveVertex(width, 350);
    curveVertex(width - 12, 400);
    curveVertex(width + 2, 450);
    curveVertex(width + 2, 500);
    curveVertex(width - 23, 550);
    curveVertex(width, height);
    vertex(width, height);
    endShape();
    popMatrix();
    stroke(0, 82, 0);
    pushMatrix();
    translate(-width + 15, 0);
    beginShape();
    vertex(width, 0);
    curveVertex(width, 0);
    curveVertex(width + 13, 50);
    curveVertex(width, 100);
    curveVertex(width - 12, 200);
    curveVertex(width + 2, 250);
    curveVertex(width + 3, 300);
    curveVertex(width, 350);
    curveVertex(width - 12, 400);
    curveVertex(width + 2, 450);
    curveVertex(width + 2, 500);
    curveVertex(width - 23, 550);
    curveVertex(width, height);
    vertex(width, height);
    endShape();
    popMatrix();
    };
    if(level === 0){
        this.busch();
        this.vines();
        
    }
    if(level === 1){
        this.busch();
        this.vines();
    }
    if(level === 2){
        this.busch();
        this.vines();
    }
    
    // }
    //chemical chaos scrolling bg  plus vines replacement
    this.chems = function(){
        strokeWeight(1);
        //front buidlings
        for(var i = 0; i < 20; i++){
         pushMatrix();
        translate(-200 + (i * 300 - circles[0].x/2) % (width + 500), 1);
        fill(143, 145, 143);
        rect(0, 400, 150, 250);
        fill(255, 255, 255, 100);
        rect(0, 430, 70, 20);
        rect(0, 440, 70, 20);
        rect(0, 480, 70, 20);
        rect(0, 490, 70, 20);
        
        popMatrix();
            
        }
        //chemical tubes
        for(var i = 0; i < 25; i++){
            
        pushMatrix();
        translate(-350 + (i * 300 - circles[0].x/5) % (width + 500), -20);
        fill(151, 151, 252);
        ellipse(i * 250 + 25, chemy, 40, 40);
        ellipse(i * 250 + 25, chemy+100, 40, 40);
        ellipse(i * 250 + 25, chemy+200, 40, 40);
        
        
        fill(252, 202, 252, 100);
        rect(i * 250, 0, 50, 600);
        fill(237, 111, 7);
        rect(i * 250, 100, 50, 20);
        rect(i * 250, 200, 50, 20);
        rect(i * 250, 300, 50, 20);
        rect(i * 250, 400, 50, 20);
        rect(i * 250, 500, 50, 20);
        fill(0);
        rect(i * 250, 50, 50, 2);
        rect(i * 250, 150, 50, 2);
        rect(i * 250, 250, 50, 2);
        rect(i * 250, 350, 50, 2);
        rect(i * 250, 450, 50, 2);
        rect(i * 250, 550, 50, 2);
        
        
        popMatrix();
        }
        
        for(var i = 0; i < 65; i++){
        fill(0, 0, 255);
         noStroke();
         ellipse(10, i * 6 * 9, 50+sin(frameCount*30), 50+sin(frameCount*30));
         ellipse(780, i * 6 * 9, 50+sin(frameCount*30), 50+sin(frameCount*30));
         
         
        }
        
        
        };
    if(level === 6){
        
        this.chems();
        
    }
    if(level === 7){
        
        this.chems();
        
    }
    if(level === 8){
        
        this.chems();
        
    }
    this.aquat = function(){
       for(var i = 0; i < 19; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/7.7) % (width + 500), -circles[0].y/17 % height + 150);
image(Get('RRrange'), i * 9 * 8 * 7, 340);
popMatrix();
}
for(var i = 0; i < 20; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/5.2) % (width + 500), -circles[0].y/16 % height + 150);
image(Get('RRrange'), -50 + i * 9 * 8 * 7, 385);
popMatrix();
}
for(var i = 0; i < 22; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/3.5) % (width + 500), -circles[0].y/13 % height + 150);
image(RRimage19, i * 9 * 8 * 7, 460);
popMatrix();
}
        
    };
    if(level === 3){
        this.aquat();
    }
    if(level === 4){
        this.aquat();
    }
    if(level === 5){
        this.aquat();
    }
    this.neon = function(){
        for(var i = 0; i < 65; i++){
            strokeWeight(6);
        stroke(255, 221, 0);
         noFill();
         rect(0, i * 7 * 9, 50, 50);
         rect(735, i * 7 * 9, 50, 50);
         strokeWeight(12);
        stroke(255, 221, 0, 50);
         noFill();
         rect(0, i * 7 * 9, 50, 50);
         rect(735, i * 7 * 9, 50, 50);
         
         
         
         noStroke();
        }
        
        
        for(var i = 0; i < 20; i++) {
        pushMatrix();
        translate(-200 + (i * 300 - circles[0].x/2) % (width + 500), 1);
        fill(22, 2, 255);
        rect(i * 250, 350, 50, 300);
        fill(255, 0, 0);
        rect(i * 250, 350, 50, 20);
        rect(i * 250, 520, 50, 20);
        
        if(frameCount%50 < 10){
            noFill();
            strokeWeight(6);
            stroke(0, 0, 255);
            rect(i * 250, 350, 50, 300);
            rect(i * 250, 350, 50, 20);
        rect(i * 250, 520, 50, 20);
            noStroke();
        }
        popMatrix();
        }
        
    };
    if(level === 9){
        this.neon();
    }
    if(level === 10){
       this.neon();
    }
    if(level === 11){
        this.neon();
    }
    this.wonders = function(){
        for(var i = 0; i < 10; i++){
        pushMatrix();
        translate(-200 + (i * 300 - circles[0].x/5) % (width + 500), 1);
        tree1Big(0, 500);
        
        popMatrix();
        }
    };
    
    if(level === 12){
        
    }
    if(level === 13){
        
    }
    if(level === 14){
        
    }
    
};


//}//bg
	
	
	var levels = new_.call(Levels);

var gemrot = 0;
// Premade stuff - {
var drawRange = function(color1, color2, color3) {
    var incAmount = 0.01;
    for (var t = 0; t < incAmount*600; t += incAmount) {
        var n = noise(t);
        var y = map(n, 0, 1, 0, height/2);
        stroke(color1, color2, color3);
        rect(t*100, height-y, 1, y);
    }
};
var EEZsun = function(x, y, s){
    noStroke();
        
        pushMatrix();
        
        translate(x, y);
        scale(s);
        
        fill(255, 208, 0);
        ellipse(200, 200 + sin(frameCount * 2) * 3, 75, 75);
        
        fill(255, 166, 0);
        ellipse(200, 200 + sin(frameCount * 2) * 3, 67, 67);
        
        fill(246, 252, 126, 50);
        ellipse(196, 197 + sin(frameCount * 2) * 3, 53, 53);
        ellipse(194, 194 + sin(frameCount * 2) * 3, 42, 42);
        
        fill(0, 0, 0);
        rect(187, 187 + sin(frameCount * 2) * 3, 5, 14, 3);
        rect(201, 187 + sin(frameCount * 2) * 3, 5, 14, 3);
        
        noFill();
        
        stroke(0, 0, 0);
        strokeWeight(2);
        arc(197, 207 + sin(frameCount * 2) * 3, 27, 25, 0, 180);
        noStroke();
        
        fill(255, 136, 0);
        
        popMatrix();
        
        pushMatrix();
        
        translate(x, y);
        
        rotate(frameCount);
        rect(0, 57, 2, 35, 3);
        
        rotate(26);
        rect(0, 57, 2, 35, 3);
        
        rotate(26);
        rect(0, 57, 2, 35, 3);
        
        rotate(26);
        rect(0, 57, 2, 35, 3);
        
        rotate(26);
        rect(0, 57, 2, 35, 3);
        
        rotate(26);
        rect(0, 57, 2, 35, 3);
        
        rotate(26);
        rect(0, 57, 2, 35, 3);
        
        rotate(26);
        rect(0, 57, 2, 35, 3);
        
        rotate(26);
        rect(0, 57, 2, 35, 3);
        
        rotate(26);
        rect(0, 57, 2, 35, 3);
        
        rotate(26);
        rect(0, 57, 2, 35, 3);
        
        rotate(26);
        rect(0, 57, 2, 35, 3);
        
        rotate(26);
        rect(0, 57, 2, 35, 3);
        
        rotate(25);
        rect(0, 57, 2, 35, 3);
        
        popMatrix();
};
var EEclouds = function(){
    pushMatrix();
    noStroke();
background(2, 13, 209);
  fill(0, 221, 255);
  rect(0, 290, 600, 100);
  fill(0, 102, 255);
  rect(0, 270, width+width, 20);
  fill(87, 255, 244);
  rect(0, 305, width+width, 70);
  
  EEZsun(440, 90, 2);
strokeWeight(8);
        stroke(255, 149, 0);
        fill(251, 255, 0);
    ellipse(440, 90, 70, 70);
    noStroke();
/*
fill(255, 255, 255, 220);
rect(eecloud-100, 100, 60, 10, 10);
rect(eecloud+100, 100, 60, 10, 10);
rect(eecloud-100, 200, 80, 10, 10);
rect(eecloud-200, 100, 60, 10, 10);
rect(eecloud-100, 50, 60, 10, 10);
rect(eecloud-100, 300, 90, 10, 10);
rect(eecloud+300, 100, 60, 10, 10);
rect(eecloud+400, 50, 60, 10, 10);
rect(eecloud+200, 200, 60, 10, 10);
rect(eecloud+200, 100, 60, 10, 10);
rect(eecloud+500, 200, 60, 10, 10);
rect(eecloud+100, 200, 60, 10, 10);
rect(eecloud+100, 300, 60, 10, 10);
rect(eecloud+500, 100, 60, 10, 10);
rect(eecloud+200, 300, 60, 10, 10);
rect(eecloud+300, 300, 60, 10, 10);
rect(eecloud+500, 300, 60, 10, 10);
rect(eecloud-180, 250, 80, 10, 10);
rect(eecloud+400, 200, 60, 10, 10);
rect(eecloud+400, 100, 60, 10, 10);
rect(eecloud+500, 150, 60, 10, 10);
rect(eecloud+500, 250, 60, 10, 10);
*/

eecloud = eecloud - 0.5;

if(eecloud < 0){
    eecloud = 200;
}
popMatrix();
};
var clox = 0;
var EEbcloud = function(x, y){
    pushMatrix();
    translate(x, y);
    noStroke();

fill(70, 175, 250, 220);
ellipse(clox+20, 20, 40, 20);
ellipse(clox+80, 20, 50, 20);
ellipse(clox+140, 20, 70, 20);
ellipse(clox+200, 20, 30, 20);
ellipse(clox+260, 20, 50, 20);
ellipse(clox+320, 20, 70, 20);
ellipse(clox+380, 20, 30, 20);
ellipse(clox+440, 20, 50, 20);
ellipse(clox+500, 20, 40, 20);
ellipse(clox+560, 20, 50, 20);
ellipse(clox+620, 20, 70, 20);
ellipse(clox+680, 20, 30, 20);
ellipse(clox+740, 20, 50, 20);

ellipse(clox+50, 40, 70, 20);
ellipse(clox+150, 40, 70, 20);
ellipse(clox+250, 40, 70, 20);
ellipse(clox+350, 40, 70, 20);
ellipse(clox+450, 40, 70, 20);
ellipse(clox+550, 40, 70, 20);
ellipse(clox+650, 40, 70, 20);
ellipse(clox+750, 40, 70, 20);

popMatrix();
clox -= 0.01;
if(clox < -50){
    clox = 0;
}
};
var vcx = 1;
var vcx2 = [];
for(var i = 0; i < 20; i++) {
    //add snow object to the array
    vcx2.push(
        {
            x: random(width), //x position will be between 0 and width of the screen
            y: random(50), //y position will be between -height of the screen and 0
            radius: random(3, 8), //radius will be between 3 and 8
            opacity: random(100, 200), //opacity will be between 100 and 200
            speed: random(0.75, vcx) // speed will be between 0.75 and 3
        }
    );
}
/*
var EEwater = function(x, y, nu){
    vcx = nu;
pushMatrix();
translate(x, y);

    noStroke();
fill(0, 145, 255);
rect(0, 0, width, 50);
for(var i = 0; i < vcx2.length; i++){
    fill(255, 255, 255, vcx2[i].opacity);
        vcx2[i].speed = nu;
        //move the snow object down by the object's speed
        vcx2[i].x -= vcx2[i].speed;
        
        //draw the snow at the x/y location, with size of radius
        ellipse(vcx2[i].x, vcx2[i].y, vcx2[i].radius, vcx2[i].radius);
        if(vcx2[i].x - vcx2[i].radius < -width) {
            //if it has then set it's y position to the top of the screen
            vcx2[i].x = random(width);
        }
    
    
    
}

popMatrix();


};
*/
var EEwater = function(x, y, v){
    pushMatrix();
    translate(x, y);
noStroke();

fill(watercol[eewaterc]);
rect(0, 0, width, 20);


for(var i = 0; i < 10+v; i++){
fill(255);
rect(random(800), random(10), 5, 5);

}
popMatrix();
};
function ppillar(x,y,s){
    pushMatrix();
    translate(x,y);
    scale(s);
    fill(148, 148, 148);
    rect(0,0,35,20,2);
    fill(117, 117, 117);
    rect(0,7,35,2);
    rect(0,3,35,2);
    fill(105, 105, 105);
    quad(3,0,32,0,29,-190,6,-190);
    fill(138, 138, 138);
    rect(2,-193,30,8,5);
    popMatrix();
    
}

var caveBackF = function(x, y, s){
    //top
    {
        pushMatrix();
        translate(x, y);
        scale(s);
            noStroke();
            fill(87, 87, 87);
            triangle(-5,-5,97,191,146,-5);
            fill(115, 115, 115);
            triangle(-5,-5,97,191,96,-5);
            fill(122, 122, 122);
            triangle(-5,-5,151,213,146,-5);
            fill(28, 28, 28);
            triangle(-5,-5,151,213,146,-5);
            fill(87, 87, 87);
            triangle(-5,-5,26,179,146,-5);
            fill(115, 115, 115);
            triangle(-5,-5,-25,213,146,-5);
            fill(74, 74, 74);
            triangle(-5,-5,-25,213,146,-5);
            fill(87, 87, 87);
            triangle(-5,-5,26,179,64,-5);
            fill(117, 117, 117);
            triangle(-5,-5,250,251,316,-5);
            fill(92, 92, 92);
            triangle(-5,-5,250,251,316,-5);
            fill(107, 107, 107);
            triangle(-5,-5,151,213,363,-5);
            fill(82, 82, 82);
            triangle(-5,-5,151,213,18,-5);
            fill(84, 84, 84);
            triangle(-5,-5,376,213,346,-5);
            fill(66, 66, 66);
            triangle(-5,-5,376,213,156,-5);
            fill(71, 71, 71);
            triangle(205,-5,400,213,400,-5);
            fill(54, 54, 54);
            triangle(205,-5,400,213,328,-5);
            }
    //bottom
    {
    noStroke();
            fill(89, 89, 89);
            triangle(400,400,107,320,146,400);
            fill(107, 107, 107);
            triangle(400,400,107,320,223,400);
            fill(102, 102, 102);
            triangle(399,400,290,331,310,400);
            fill(130, 130, 130);
            triangle(399,400,290,331,337,400);
            fill(102, 102, 102);
            triangle(399,400,290,331,310,400);
            fill(117, 117, 117);
            triangle(353,400,290,331,306,400);
            fill(74, 74, 74);
            triangle(401,405,402,331,310,401);
            fill(97, 97, 97);
            triangle(19,400,85,331,152,400);
            fill(107, 107, 107);
            triangle(19,400,85,331,58,400);
             fill(87, 87, 87);
            triangle(-9,400,-4,331,114,400);
            fill(117, 117, 117);
            triangle(-9,400,-4,331,51,400);
            popMatrix();
}
};
function torch(x, y, s) {
    pushMatrix();
    translate(x, y);
    scale(s);
    noStroke();
    fill(128, 119, 0);
    beginShape();
    vertex(192, 313);
    vertex(227, 210);
    vertex(218, 213);
    vertex(208, 215);
    vertex(195, 215);
    vertex(180, 214);
    vertex(166, 211);
    vertex(174, 263);
    vertex(181, 297);
    vertex(190, 312);
    endShape();
    stroke(115, 100, 0);
    beginShape();
    vertex(199, 290);
    vertex(195, 274);
    vertex(196, 254);
    vertex(220, 229);
    endShape();
    beginShape();
    vertex(195, 293);
    vertex(187, 270);
    vertex(190, 246);
    vertex(199, 230);
    endShape();
    beginShape();
    vertex(185, 286);
    vertex(178, 277);
    vertex(175, 258);
    vertex(178, 242);
    vertex(186, 232);
    endShape();
    noStroke();
    fill(255, 102, 0);
    beginShape();
    vertex(226, 212);
    vertex(242, 197+sin(millis())*random(1, 3));
    vertex(225, 202);
    vertex(230, 183+sin(millis())*random(1, 3));
    vertex(220, 193);
    vertex(218, 177+sin(millis())*random(1, 3));
    vertex(214, 193);
    vertex(202, 176+sin(millis())*random(1, 3));
    vertex(202, 189);
    vertex(192, 174+sin(millis())*random(1, 3));
    vertex(182, 188);
    vertex(182, 167+sin(millis())*random(1, 3));
    vertex(176, 185);
    vertex(166, 171+sin(millis())*random(1, 3));
    vertex(169, 188);
    vertex(157, 177+sin(millis())*random(1, 3));
    vertex(159, 193);
    vertex(150, 194+sin(millis())*random(1, 3));
    vertex(166, 211);
    vertex(180, 215);
    vertex(197, 217);
    vertex(220, 213);
    vertex(225, 211);
    endShape();
    for(var i = 140+cos(millis()/15)*10; i > 4; i-=16) {
        fill(255, 111, 0, i/2);
        ellipse(196, 192, i, i);
    }
    popMatrix();
}
var mountain1 = function(x,y,s){
    pushMatrix();
    translate(x,y);
    scale(s);
    fill(246,173, 140);
    stroke(246, 173, 140);
    beginShape();
    vertex(150, 212);
    vertex(155, 208);
    vertex(163, 206);
    vertex(169, 202);
    vertex(173, 200);
    vertex(177, 196);
    vertex(183, 200);
    vertex(185, 203);
    vertex(192, 206);
    vertex(196, 209);
    vertex(201, 212);
    endShape();

    //shading
    stroke(236, 116, 92);
    fill(236, 116, 92);
    beginShape();
    vertex(150, 212);
    vertex(155, 208);
    vertex(163, 206);
    vertex(169, 202);
    vertex(173, 201);
    vertex(177, 196);
    vertex(176, 200);
    vertex(177, 204);
    vertex(176, 206);
    vertex(176, 208);
    vertex(177, 210);
    vertex(174, 212);
    endShape();
    popMatrix();
};
var cart = function(x,y,rot,Size,col){
    pushMatrix();
    translate(x,y);
    scale(Size/80);
    rotate(rot);
    translate(-150,0);
    noStroke();
    fill(col);
    rect(100,0,100,80,25);
    fill(red(col)-10,green(col)-30,blue(col)-30);
    rect(120,0,80,80,25);
    fill(120);
    ellipse(150,0,20,20);
    stroke(100);
    strokeWeight(4);
    fill(187, 227, 237);
    rect(110,15,80,45,8);
    line(130,17,130,57);
    line(170,17,170,57);
    popMatrix();
};
var ferrisWheel = function(x,y,Size,rot){
    pushMatrix();
    translate(x,y);
    scale(Size/355);
    translate(-200,-400);
    strokeWeight(10);
    stroke(0, 39, 110);
    line(200,200,150,400);
    line(200,200,250,400);
    line(150,400,250,400);
    pushMatrix();
    translate(200,200);
    rotate(rot);
    translate(-200,-200);
    strokeWeight(8);
    noFill();
    stroke(0, 116, 179);
    ellipse(200,200,300,300);
    stroke(42, 0, 148);
    pushMatrix();
    translate(200,200);
    for (var i = 0; i < 12; i ++){
        pushMatrix();
        rotate(i*30);
        stroke(0, 27, 148);
        strokeWeight(8);
        line(0,0,150,0);
        cart(150,0,-i*30-rot,45,cols[i]);
        popMatrix();
    } 
    popMatrix();
    stroke(75, 0, 179);
    strokeWeight(7);
    noFill();
    ellipse(200,200,190,190);
    ellipse(200,200,155,155);
    noStroke();
    strokeWeight(1);
    fill(7, 65, 189);
    ellipse(200,200,80,80);
    fill(0, 109, 204);
    ellipse(200,200,60,60);
    fill(0, 61, 158);
    arc(200,200,60,60,0,180);
    popMatrix();
    popMatrix();
};
var Cloudz = function(x, y, w, h){
this.x = x;
this.y = y;
this.w = w;
this.h = h;

stroke(70, 149, 252, 100);
    fill(70, 149, 252, 250);
    rect(this.x,this.y+this.h-this.h/4,this.w,this.h/4);
    rect(this.x+this.w/10,this.y+this.h/2,this.w/1.2,this.h/4);
    rect(this.x+this.w/4,this.y+this.h/4,this.w/1.8,this.h/4);
    rect(this.x+this.w/6,this.y+this.h/6,this.w/5,this.h/2);
    rect(this.x+this.w-this.w/1.7,this.y+this.h/12,this.w/4,this.h/2);

};
var EE_CLOUDS = function(x, y, s, id){
    if(id === 0){
                pushMatrix();
                translate(x, y);
                    scale(s);
                    noStroke();
                    fill(70, 149, 252, 200);
                    beginShape();
                        vertex(290, 184);
                        bezierVertex(293, 180, 296, 177, 306, 179);
                        bezierVertex(310, 169, 314, 166, 322, 169);
                        bezierVertex(324, 160, 327, 151, 330, 150);
                        bezierVertex(337, 145, 347, 148, 355, 165);
                        bezierVertex(365, 163, 377, 165, 383, 176);
                        bezierVertex(388, 176, 392, 177, 396, 184);
                    endShape(CLOSE);
                popMatrix();
            
        
        
        
        
    }
    if(id === 1){
        pushMatrix();
        translate(x, y);
        scale(s);
        Cloudz(0, 0, 100, 100);
    popMatrix();
    }
    
    
    
    
};

var eecx = 200;
var xx = 0;
var xx2 = 0;
var EEcloudfunc = function(x, y, id, s){
pushMatrix();
translate(x, y);
scale(s);
noStroke();


Cloudz(eecx, 200, 80, 80);
Cloudz(eecx-160, 180, 80, 80);
Cloudz(eecx+200, 200, 80, 80);
Cloudz(eecx+100, 230, 80, 80);
Cloudz(eecx+300, 200, 80, 80);
Cloudz(eecx+400, 210, 80, 80);
Cloudz(eecx+500, 180, 80, 80);

eecx = eecx - 0.5;
if(eecx < -50){
    eecx = 200;
}
popMatrix();
noStroke();
};
var Cloudlayer = function(x, y){
        pushMatrix();
        translate(x, y);
    EE_CLOUDS(xx, 0, 1.2, 0);
    EE_CLOUDS(xx-100, 100, 1.2, 0);
    EE_CLOUDS(xx+0, 150, 1.2, 0);
    EE_CLOUDS(xx+100, 100, 1.2, 0);
    EE_CLOUDS(xx+250, 50, 1.2, 0);
    EE_CLOUDS(xx2+100, -50, 1.2, 0);
    EE_CLOUDS(xx2+300, 0, 1.2, 1);
    EE_CLOUDS(xx2+100, 40, 1.2, 1);
    EE_CLOUDS(xx2+100, 240, 1.2, 1);
    EE_CLOUDS(xx2+600, 40, 1.2, 1);
    
    popMatrix();
    
    xx -= 0.15;
    xx2 -= 0.3;
    
    if(xx < -150){
        xx = 0;
    }
    if(xx2 < -150){
        xx2 = 0;
    }
    
    };
    //array to hold the snow objects
var rain = [];

//create (in this example) 100 snow objects (will be reused)
for(var i = 0; i < 100; i++) {
    //add snow object to the array
    rain.push(
        {
            x: random(width), //x position will be between 0 and width of the screen
            y: random(-height, 0), //y position will be between -height of the screen and 0
            radius: random(3, 8), //radius will be between 3 and 8
            opacity: random(100, 255), //opacity will be between 100 and 200
            speed: random(3.75, 6) // speed will be between 0.75 and 3
        }
    );
}
//}
var bg1 = function(){
    noStroke();
var x = 590;
var y = 10;
    for(var i = 0; i < 600; i ++){
        var st = color(0, 106, 255);
        var end = color(0, 22, 133);
        var elpo = lerpColor(st, end, i / 600);
        fill(elpo);
        rect(0, i, 800, 1);
    }




    
    noStroke();
fill(255, 255, 255);
ellipse(x, y, 10, 10);

x = x - 2;
y = y + 2;
    fill(15, 0, 256);
rect(0, 500, width, 100);
//{
fill(9, 133, 0);
beginShape();
vertex(500, 500);
vertex(500, 500);
vertex(98, 500);
vertex(120, 490);
vertex(125, 486);
vertex(161, 467);
vertex(174, 497);
vertex(164, 467);
vertex(176, 442);
vertex(184, 453);
vertex(194, 467);
vertex(205, 471);
vertex(214, 471);
vertex(225, 482);
vertex(231, 482);
vertex(245, 453);
vertex(253, 458);
vertex(262, 428);
vertex(273, 418);
vertex(273, 428);
vertex(286, 428);
vertex(296, 428);
vertex(316, 422);
vertex(346, 419);
vertex(372, 419);
vertex(387, 423);
vertex(397, 432);
vertex(411, 432);
vertex(422, 445);
vertex(442, 455);
vertex(458, 462);
vertex(464, 474);
vertex(475, 482);
vertex(501, 499);

endShape();
//}

strokeWeight(6);
stroke(200, 255, 0);
fill(255, 187, 0);
ellipse(650, 100, 80, 80);
noStroke();

if(x < 40){
    x = 590;
}
if(y > 580){
    y = 10;
}

pushMatrix();
rotate(25);
fill(84, 84, 84, 190);
rect(70, -30, 200,200);

popMatrix();
};
var bg2 = function(){
pushMatrix();
translate(-100 + (100 - circles[0].x/183) % (width + 500), -circles[0].y/49 % height + 10);
EEclouds();
popMatrix();
noStroke();
/*
for(var i = 0; i < 20; i++) {
        pushMatrix();
        translate(-50 + (i * 300 - circles[0].x/100) % (width + 500), -circles[0].y/29 % height + 0);
        
       EEbcloud(i * 20 * 11 * 2, 260);
        popMatrix();
    }
*/
for(var i = 0; i < 18; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/24) % (width + 500), -circles[0].y/29 % height + 150);
image(Get('Backmounts'), i * 9 * 2 * 2, -245);
popMatrix();
}
for(var i = 0; i < 20; i++) {
        pushMatrix();
        translate(-50 + (i * 300 - circles[0].x/15) % (width + 500), -circles[0].y/25 % height + -60);
        
        fill(3, 135, 3);
        ellipse(0, height - 100, 150, 150);
        ellipse(75, height - 60, 100, 100);
        ellipse(-75, height - 60, 100, 100);
        popMatrix();
    }
for(var i = 0; i < 20; i++) {
        pushMatrix();
        translate(-50 + (i * 300 - circles[0].x/90) % (width + 500), -circles[0].y/29 % height + 0);
        
       EEbcloud(i * 20 * 11 * 2, 250);
        popMatrix();
    }

for(var i = 0; i < 25; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/13) % (width + 500), -circles[0].y/22 % height + 100);
scale(0.5);
image(mpara, i * 12 * 8 * 6.2, 600);
popMatrix();
}
pushMatrix();
translate(-100 + (100 - circles[0].x/73) % (width + 500), -circles[0].y/22 % height + 10);
Cloudlayer(0, -100);
Cloudlayer(600, -100);
popMatrix();

for(var i = 0; i < 15; i++){
    pushMatrix();
    translate(-100 + (i * 100 - circles[0].x/7) % (width + 400), -circles[0].y/16 % height + 180);
    scale(0.8);
    image(tmounts, i * 13 * 8 * 6.1, 230);
    popMatrix();
    
    
}
/*
for(var i = 0; i < 10; i++){
    pushMatrix();
    translate(-100 + (i * 100 - circles[0].x/6) % (width + 500), -circles[0].y/15 % height + 88);
EEwater(i * 12 * 8, 550, 0.5);
popMatrix();
}

for(var i = 0; i < 10; i++){
    pushMatrix();
    translate(-100 + (i * 100 - circles[0].x/5.5) % (width + 500), -circles[0].y/14 % height + 88);
EEwater(i * 12 * 8, 570, 0.7);
popMatrix();
}
for(var i = 0; i < 10; i++){
    pushMatrix();
    translate(-100 + (i * 100 - circles[0].x/5) % (width + 500), -circles[0].y/13 % height + 88);
EEwater(i * 12 * 8, 590, 0.9);
popMatrix();
}
for(var i = 0; i < 10; i++){
    pushMatrix();
    translate(-100 + (i * 100 - circles[0].x/4.5) % (width + 500), -circles[0].y/12 % height + 88);
EEwater(i * 12 * 8, 610, 1);
popMatrix();
}
*/

};// EEZ 1
var bg3 = function(){
    noStroke();
background(153, 67, 240);

/*
image(MMacid, 0, 500,width, 100);
*/
for(var i = 0; i < 14; i++){
    pushMatrix();
translate(-100 + (i * 100 - circles[0].x/16) % (width + 500), -circles[0].y/15 % height + 150);

   image(MMWayB, i * 9 * 8 * 8, 30, width, 120);
   popMatrix();
}
for(var i = 0; i < 15; i++){
    pushMatrix();
translate(-100 + (i * 100 - circles[0].x/13) % (width + 500), -circles[0].y/15 % height + 150);

   image(MMB1, i * 9 * 9 * 8, -43);
   popMatrix();
}
for(var i = 0; i < 18; i++){
    pushMatrix();
translate(-100 + (i * 100 - circles[0].x/11) % (width + 500), -circles[0].y/15 % height + 200);

   image(Get('MMBGp1'), i * 9 * 8 * 8, -263);
   popMatrix();
}
for(var i = 0; i < 20; i++){
    pushMatrix();
translate(-100 + (i * 100 - circles[0].x/9) % (width + 500), -circles[0].y/15 % height + 150);
image(MMmiddle, i * 9 * 8 * 8, 160, width, 100);
popMatrix();
}
for(var i = 0; i < 23; i++){
    pushMatrix();
translate(-100 + (i * 100 - circles[0].x/5) % (width + 500), -circles[0].y/15 % height + 150);
image(MMfront, i * 9 * 9 * 8.5, 100);
popMatrix();
}
for(var i = 0; i < 25; i++){
    pushMatrix();
translate(-100 + (i * 100 - circles[0].x/4) % (width + 500), -circles[0].y/15 % height + 150);
image(MMvfront, i * 10 * 8.5 * 8, 200);
popMatrix();
}
for(var i = 0; i < 25; i++){
    pushMatrix();
translate(-100 + (i * 100 - circles[0].x/3.5) % (width + 500), -circles[0].y/14 % height + 150);
image(MMacid, i * 9 * 8 * 8, 350);
popMatrix();
}
for(var i = 0; i < 25; i++){
    pushMatrix();
translate(-100 + (i * 100 - circles[0].x/3) % (width + 500), -circles[0].y/13 % height + 150);
image(MMacid, i * 9 * 8 * 8, 390);
popMatrix();
}
for(var i = 0; i < 25; i++){
    pushMatrix();
translate(-100 + (i * 100 - circles[0].x/2.5) % (width + 500), -circles[0].y/12 % height + 150);
image(MMacid, i * 9 * 8 * 8,430);
popMatrix();
}
for(var i = 0; i < 25; i++){
    pushMatrix();
translate(-100 + (i * 100 - circles[0].x/2) % (width + 500), -circles[0].y/11 % height + 150);
image(MMacid, i * 9 * 8 * 8, 470);
popMatrix();
}
for(var i = 0; i < 28; i++){
    pushMatrix();
translate(-100 + (i * 100 - circles[0].x/1.5) % (width + 500), -circles[0].y/10 % height + 150);
image(MMacid, i * 9 * 8 * 8, 510);
popMatrix();
}


/*
for(var i = 0; i < 45; i++){
            
        pushMatrix();
        translate(-350 + (i * 300 - circles[0].x/1.5) % (width + 500), -20);
        fill(151, 151, 252);
        ellipse(i * 250 + 25, chemy, 40, 40);
        ellipse(i * 250 + 25, chemy+100, 40, 40);
        ellipse(i * 250 + 25, chemy+200, 40, 40);
        
        
        fill(252, 202, 252, 100);
        rect(i * 250, 0, 50, 600);
        fill(237, 111, 7);
        rect(i * 250, 100, 50, 20);
        rect(i * 250, 200, 50, 20);
        rect(i * 250, 300, 50, 20);
        rect(i * 250, 400, 50, 20);
        rect(i * 250, 500, 50, 20);
        fill(0);
        rect(i * 250, 50, 50, 2);
        rect(i * 250, 150, 50, 2);
        rect(i * 250, 250, 50, 2);
        rect(i * 250, 350, 50, 2);
        rect(i * 250, 450, 50, 2);
        rect(i * 250, 550, 50, 2);
        
        
        popMatrix();
        }
*/
        



};// MMZ 3
var BG4IN = function(){
noStroke();
background(66, 66, 66);
for(var i = 0; i < 22; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/13) % (width + 500), -circles[0].y/24 % height + 150);
torch(i * 9 * 8 * 7, 200, 0.5);
popMatrix();
}

for(var i = 0; i < 22; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/8) % (width + 500), -circles[0].y/18 % height + 150);
caveBackF(i * 9 * 8 * 7, -130, 1.5);
popMatrix();
}

for(var i = 0; i < 22; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/3.5) % (width + 500), -circles[0].y/18 % height + 150);
ppillar(i * 9 * 8 * 8, 440, 3);
popMatrix();
}






};// RRZ 2
var bg4 = function(){
background(38, 87, 235);
image(Get('RRclouds'), rrcloudX-100, 100);
rrcloudX = rrcloudX - 0.4;
if(rrcloudX < -100){
    rrcloudX = 750;
}
for(var i = 0; i < 16; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/17) % (width + 500), -circles[0].y/19 % height + 150);
image(RRBack, i * 9 * 8 * 7, 30);
popMatrix();
}
for(var i = 0; i < 18; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/13.5) % (width + 500), -circles[0].y/18 % height + 150);
image(RRBmounts, 100 + i * 9 * 8 * 8, -10);
image(rrb, i * 9 * 8 * 8, 220);
popMatrix();
}
range.foreground();

};// RRZ 2
var bg5 = function(){
    /*
    background(38, 38, 38);
    fill(196, 196, 196);
    rect(0,350, width, 300, 2);
    fill(156, 156, 156);
    rect(0, 300, width, 50);

// Back buildings
    fill(158, 150, 123);
    rect(10, 130, 120, 200, 10);
    fill(162, 174, 176);
    rect(130, 130, 130, 220, 10);
    
    // road
    fill(0);
    rect(0, 350, width, 50);
    for(var i =  0; i < 10; i++){
        fill(255, 255, 0);
        rect(i * 12 * 8, 370, 40, 10);
        
    }
    
    
    fill(166, 141, 121);
    rect(360, 130, 110, 200, 10);
    fill(56, 49, 55);
    rect(470, 130, 120, 200, 10);
    
    fill(125, 56, 56);
    rect(640, 130, 110, 200, 10);
    
    fill(13, 255, 0);
    rect(220, 140, 180, 80, 4);
    fill(97, 237, 90);
    rect(225, 145, 170, 70, 4);
    fill(255, 255, 255, 100);
    fill(255, 255, 255, 100);
    rect(150, 140, 90, 90);
    fill(0);
    rect(25, 140, 90, 90);
    fill(255, 255, 255, 100);
    rect(370, 140, 90, 90);
    rect(485, 140, 90, 90);
    rect(655, 140, 80, 80);
    
    strokeWeight(10);
    stroke(0, 0, 0);
    line(305, 225, 280, 300);
    line(315, 225, 340, 300);
    rotate(40);
    textSize(100);
    text("🥤 ", 310, -33);
    rotate(-40);
    var ScamFont = createFont("monospace", 20);
    textFont(ScamFont, 12);
    fill(0, 0, 0);
    text("The Awe-Soda\nwill give           you \ninfinite         energy!",
222, 160);
    
    
    
// Front Left Building
    noStroke();
    fill(116, 135, 145);
    rect(20, 240, 230, 300, 5);
    fill(113, 166, 166);
    rect(40, 260, 80, 100, 2);
    rect(150, 260, 80, 100, 2);
    rect(40, 380, 80, 100, 2);
    rect(150, 380, 80, 100, 2);
    fill(0, 0, 0);
    triangle(170, 320, 200, 270, 220, 300);
    triangle(190, 350, 200, 290, 217, 310);
    
// Front Right Building
    fill(129, 148, 131);
    rect(370, 240, 210, 300, 5);
    fill(179, 179, 179);
    rect(390, 260, 80, 80);
    rect(483, 260, 80, 80);
    rect(390, 350, 80, 80);
    rect(483, 350, 80, 80);
    rect(390, 443, 80, 80);
    rect(483, 443, 80, 80);
    
// Front Most-Right Building
    fill(140, 109, 60);
    rect(650, 240, 210, 300, 5);
    fill(179, 179, 179);
    rect(670, 250, 80, 80);
    fill(0);
    rect(670, 350, 80, 80);
    fill(179, 179, 179);
    rect(670, 450, 80, 80);
    
    fill(0);
    rect(0, 550, width, 50);
    for(var i = 0; i < 10; i++){
        fill(255, 255, 0);
        rect(i * 12 * 7, 570, 40, 10);
    }
    range.foreground();
    */
    background(0);
    
    pushMatrix();
translate(-575 + (i * 100 - circles[0].x/180) % (width + 500), -circles[0].y/22 % height + 10);
    image(StarBGCC, 0, 0);
    popMatrix();
    
    
for(var i = 0; i < 14; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/20) % (width + 500), -circles[0].y/22 % height + 150);
    image(CChillsimg, i * 9 * 8 * 7, 140, 800, 120);
    popMatrix();
}
for(var i = 0; i < 14; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/16) % (width + 500), -circles[0].y/22 % height + 150);
    image(Get('CCBG'), i * 9 * 9 * 6, -60);
    
    popMatrix();
}
for(var i = 0; i < 14; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/14) % (width + 500), -circles[0].y/22 % height + 150);
    image(starz, i * 9 * 9 * 6, 270);
    
    popMatrix();
}
for(var i = 0; i < 14; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/13) % (width + 500), -circles[0].y/22 % height + 150);
    image(starz2, i * 9 * 9 * 6, 295);
    
    popMatrix();
}
for(var i = 0; i < 14; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/12) % (width + 500), -circles[0].y/22 % height + 150);
    image(starz3, i * 9 * 9 * 6, 320);
    
    popMatrix();
}
for(var i = 0; i < 14; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/11) % (width + 500), -circles[0].y/22 % height + 150);
    image(starz4, i * 9 * 9 * 6, 345);
    
    popMatrix();
}
for(var i = 0; i < 14; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/10) % (width + 500), -circles[0].y/22 % height + 150);
    image(starz5, i * 9 * 9 * 6, 370);
    
    popMatrix();
}
for(var i = 0; i < 14; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/9) % (width + 500), -circles[0].y/22 % height + 150);
    image(starz6, i * 9 * 9 * 6, 395);
    
    popMatrix();
}
for(var i = 0; i < 14; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/8) % (width + 500), -circles[0].y/22 % height + 150);
    image(lowerBG, i * 9 * 9 * 4, 420, 600, 150);
    
    popMatrix();
}
for(var i = 0; i < 14; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/5) % (width + 500), -circles[0].y/22 % height + 150);
    image(CCB, i * 19 * 19 * 8, 380);
    //ferrisWheel(i * 19 * 9 * 7, 500, 320, frameCount/4);
    
    popMatrix();
}
    
};// CCZ 6
var bg6 = function(){
    background(1, 31, 2);
   
    /*
    clouds.manage();
    clouds.comeon();// windows only
    
range3.display();

noStroke();
fill(170, 75, 0);
rect(0,500,800,100);



fill(184, 184, 184);
ellipse(12,552,20,8);
ellipse(494,564,20,7);
ellipse(146,544,10,6);
ellipse(498,516,14,4);
ellipse(264,580,36,16);
ellipse(388,526,22,8);
ellipse(588, 526, 22, 8);
ellipse(688, 526, 14, 4);
ellipse(788, 536, 10, 6);

fill(153, 153, 153);
ellipse(264,526,33,11);
ellipse(372,578,19,6);
ellipse(576,543,17,8);
ellipse(95,571,22,8);
ellipse(55,518,28,7);
ellipse(472, 518, 28, 7);
ellipse(672, 538, 28, 7);
ellipse(682, 578, 28, 7);
ellipse(782, 578, 20, 7);

tree1Big(67,316);
tree1Big(5,346);
tree1Big(107, 323);
tree1Big(330,318);
tree1Big(132,325);
tree1Big(207,325);
tree1Big(580,324);
tree1Big(402,335);
tree1Big(309,357);
tree1Big(251,341);
tree1Big(453,344);
tree1Big(516,336);
tree1Big(640, 318);
tree1Big(620, 336);
tree1Big(730, 317);
tree1Big(690, 357);
tree1Big(780, 337);

range.foreground();
*/
for(var i = 0; i < 300; i ++){
        var st = color(0, 0, 0);
        var end = color(255, 91, 15);
        var elpo = lerpColor(st, end, i / 300);
        fill(elpo);
        rect(0, i, 800, 1);
    }
    for(var i = 0; i < 14; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/18) % (width + 500), -circles[0].y/29 % height + 150);
    image(hillsFrontShape, i * 9 * 9 * 5, 50);
    
    popMatrix();
}
    for(var i = 0; i < 18; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/14) % (width + 500), -circles[0].y/29 % height + 150);
image(Get('WWbgA1'), i * 9 * 9 * 6, -265, 800, 800);
popMatrix();
}
for(var i = 0; i < 18; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/10) % (width + 500), -circles[0].y/29 % height + 150);
image(Get('WWbgp2'), i * 9 * 9 * 7.3, 0);
image(Get('WWbgp2'), i * 9 * 9 * 7.3, -300);
image(Get('WWbgp2'), i * 9 * 9 * 7.3, 270);
popMatrix();
}
for(var i = 0; i < 18; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/8) % (width + 500), -circles[0].y/29 % height + 150);
image(Get('WWbgp3'), i * 9 * 9 * 7.3, 80);
image(Get('WWbgp3'), i * 9 * 9 * 7.3, -240);
image(Get('WWbgp3'), i * 9 * 9 * 7.3, 350);
popMatrix();
}
for(var i = 0; i < 18; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/6) % (width + 500), -circles[0].y/29 % height + 150);
image(WWRRbga2, i * 9 * 9 * 7.3, 165);
image(WWRRbga2, i * 9 * 9 * 7.3, -155);
image(WWRRbga2, i * 9 * 9 * 7.3, 425);


popMatrix();
}

    


};// WWZ 5
//code for Dusty Desert zone  background{
//so I can use canvas API instaid of pjs. 

var externals;
var ctx = externals.context;
background(0,0);

ctx.fillStyle = "#fbba7c";
ctx.beginPath();
ctx.moveTo(296, 69);
ctx.quadraticCurveTo(373, 155, 324, 180);
ctx.quadraticCurveTo(-2, 169, 452, 514);
ctx.quadraticCurveTo(152, 220, 632, 416);
ctx.lineTo(600,300);
ctx.quadraticCurveTo(458, 220, 296, 69);
ctx.fill();
ctx.closePath();


ctx.fillStyle = "#e3a071";
ctx.beginPath();
ctx.moveTo(573, 636);
ctx.quadraticCurveTo(48, 154, 632, 393);
ctx.lineTo(600,600);
ctx.fill();
ctx.closePath();


ctx.fillStyle = "#c87f4d";


ctx.beginPath();
ctx.moveTo(296, 69);
ctx.quadraticCurveTo(373, 155, 324, 180);
ctx.quadraticCurveTo(-2, 169, 452, 514);
ctx.quadraticCurveTo(488, 544, 549, 600);
ctx.lineTo(0,600);
ctx.lineTo(0,70);
ctx.quadraticCurveTo(188, -9, 296, 69);
ctx.fill();
ctx.closePath();

var dune = get(0,0,600,600);

ctx.fillStyle = "#b0b1de";

ctx.fillRect(0,0,600,600);

//Varables >>>>------->[

//The varable for the background.   >>>>------->[

var fade = function(x,y,w,h,c1,c2){
    
    
    
    
//The varable that tells the "for loop" to stop.  
var loop_stop = h-12;
// the "for loop" that draws the fading thing. >>>>------->[
     for (var i = -12 ; i < loop_stop ; i++) {
//no outlines
       noStroke();
// the color
        fill(lerpColor(c1,c2,i/loop_stop));
        rect(x,i+y,w,1);
}
//]
       };
       //]
       
//The varable for the sun.  >>>>------->[

var sun = function(x,y,w,h,c1,c2){
var loop_stop = w+h/2;
     for (var i = 0 ; i < loop_stop ; i++) {
         strokeWeight(0.2);
       stroke(255, 106, 0);
        fill(lerpColor(c1,c2,i/loop_stop));
        ellipse(x,y,w-i,h-i);
}
       };
       noStroke();
//]

var SunX =283;
var SunY =170;

//]


//The background >>>>------->[
fade(0,-66,600,401,color(1, 3, 71),color(227, 132, 7));
//]

//The stars >>>>------>[
for(var i = 0;i<600;i+=random(1,90)){
var Y = random(0,255);
fill(255, 255, 255,Y);
ellipse(i,255-Y,2,2);

}
//]

//The rays of sun.  >>>>------->[
fill(255, 245, 112,50);

triangle(107, 0, SunX,SunY, 42, 0);
triangle(0, 102, SunX,SunY, 0, 34);

triangle(0, 150, SunX,SunY, 0, 219);
triangle(0, 247, SunX,SunY, 0, 297);
triangle(0, 324, SunX,SunY, 0, 365);


triangle(240, 0, SunX,SunY, 158, 0);
triangle(404, 0, SunX,SunY, 323, 0);
triangle(551, 0, SunX,SunY, 467, 0);
triangle(600, 69, SunX,SunY, 600, 8);
triangle(600, 111, SunX,SunY, 600, 159);
triangle(600, 196, SunX,SunY, 600, 251);
triangle(600, 290, SunX,SunY, 600, 347);

//]

//the sun >>>>------->[
sun(SunX,SunY,50,50,color(255, 221, 0),color(255, 255, 255));
//]
ctx.fillStyle = "#ff7f00";



ctx.fillRect(0,164,600,600);



fill(125, 94, 23,100);
textSize(15);

var f = createFont("cursive");


var qwerty_qwerty__qwerty___QWERTY____ = get(0,0,600,400); 
function desert_background(x, y, w, h){
    pushMatrix();
translate(-150 + (100 - circles[0].x/483) % (width + 500), -circles[0].y/49 % height - 0);
image(qwerty_qwerty__qwerty___QWERTY____, x, y, w, h);
popMatrix();
noStroke();
/*
for(var i = 0; i < 18; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/10) % (width + 500), -circles[0].y/69 % height + 150);
image(dune,i * 15 * 8 * 7,238, 300, 300);
popMatrix();
}
*/

for(var i = 0; i < 18; i++){
    pushMatrix();
    translate(-0 + (i * 100 - circles[0].x/24) % (width + 500), -circles[0].y/69 % height - 0);
    image(DDZBP2,i * 15 * 8 * 5.4, 288, 800, 100);
    popMatrix();
    
}

for(var i = 0; i < 18; i++){
    pushMatrix();
    translate(-100 + (i * 100 - circles[0].x/22) % (width + 500), -circles[0].y/69 % height - 0);
    image(DDZBP,i * 15 * 8 * 5.4, 328, 800, 100);
    popMatrix();
    
}

for(var i = 0; i < 18; i++){
    pushMatrix();
    translate(-100 + (i * 100 - circles[0].x/20) % (width + 500), -circles[0].y/69 % height - 50);
    image(DDZB1A,i * 15 * 8 * 5, 368, 800, 150);
    popMatrix();
    
}

for(var i = 0; i < 18; i++){
    pushMatrix();
    translate(-100 + (i * 100 - circles[0].x/16.5) % (width + 500), -circles[0].y/69 % height - 0);
    image(DDZBP,i * 15 * 8 * 5.4, 388, 800, 100);
    popMatrix();
    
}

for(var i = 0; i < 18; i++){
    pushMatrix();
    translate(-100 + (i * 100 - circles[0].x/13) % (width + 500), -circles[0].y/69 % height - 0);
    image(Get('DDZdune1'),i * 15 * 8 * 5.3, 388);
    popMatrix();
    
}

for(var i = 0; i < 18; i++){
    pushMatrix();
    translate(-100 + (i * 100 - circles[0].x/11) % (width + 500), -circles[0].y/69 % height - 0);
    image(Get('DDZdune2'),i * 15 * 8 * 5.3, 458);
    popMatrix();
    
}

for(var i = 0; i < 18; i++){
    pushMatrix();
    translate(-100 + (i * 100 - circles[0].x/11) % (width + 500), -circles[0].y/69 % height - 0);
    image(Get('DDZdune3'),i * 15 * 8 * 5.3, 528);
    popMatrix();
    
}


for(var i = 0; i < 18; i++){
    pushMatrix();
    translate(-100 + (i * 100 - circles[0].x/27) % (width + 500), -circles[0].y/69 % height - 0);
    image(DDZB1,i * 15 * 8 * 4,168);
    popMatrix();
    }
}








//}

var bg7 = function(){


desert_background(0,0,1200,600);
};// DDZ 4
var bg8 = function(){
    image(Get('AABG'), 0, 0, width, 500);
noStroke();
for(var i = 0; i < 14; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/17) % (width + 500), -circles[0].y/19 % height + 200);
    image(AAZBGBack, i * 9 * 9 * 5.1, 90, width, 120);
    
    popMatrix();
}
for(var i = 0; i < 14; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/15) % (width + 500), -circles[0].y/19 % height + 150);
    image(AAZBGp2, i * 9 * 9 * 5, 100);
    
    popMatrix();
}
for(var i = 0; i < 16; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/13) % (width + 500), -circles[0].y/19 % height + 150);
    image(AAZB1, i * 9 * 9 * 5, 50);
    image(AAZB2, i * 9 * 9 * 5 + 300, 40);
    
    popMatrix();
}
for(var i = 0; i < 18; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/11) % (width + 500), -circles[0].y/19 % height + 150);
    image(AAZBGA3B, i * 9 * 9 * 6, 190);
    
    
    popMatrix();
}
for(var i = 0; i < 20; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/9) % (width + 500), -circles[0].y/19 % height + 150);
    image(AAZBGA3, i * 9 * 9 * 6, 230);
    
    
    popMatrix();
}
for(var i = 0; i < 22; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/9) % (width + 500), -circles[0].y/19 % height + 150);
    image(AARoad, i * 9 * 9 * 6, 410);
    image(AARoad, i * 9 * 9 * 6, 500);
    
    popMatrix();
}


};// AAZ 6
var bg9 = function(){
    background(0);
for(var i = 0; i < 14; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/47) % (width + 500), -circles[0].y/89 % height + 0);
    image(Get('TTZinnerBG'), i * 19 * 9 * 3, 0, width, 700);
    
    popMatrix();
}

};// TTZ 7

var iizx = 0;
var bg10 = function(){
    
    /*
    background(229, 252, 255);
    noStroke();
    fill(194, 255, 255);
    rect(0, 300, 800, 300);
    triangle(20, 330, 100, 400, 80, 100);
    triangle(500, 330, 400, 400, 430, 100);
    triangle(90, 330, 140, 400, 110, 200);
    triangle(380, 300, 420, 400, 390, 200);
    triangle(140, 300, 220, 400, 170, 80);
    triangle(500, 300, 590, 400, 550, 80);
    fill(152, 245, 245);
    triangle(40, 330, 100, 330, 80, 130);
    triangle(500, 330, 430, 330, 440, 140);
    triangle(100, 350, 130, 350, 110, 250);
    triangle(390, 320, 420, 320, 395, 230);
    triangle(150, 300, 200, 300, 175, 120);
    triangle(500, 370, 590, 370, 550, 130);
    fill(250, 237, 203);
    arc(280, 300, 120, 70, -180, 0);
    fill(255, 220, 163);
    arc(280, 300, 100, 50, -180, 0);
    stroke(255, 220, 163);
    strokeWeight(10);
    line(220, 262, 212, 252);
    line(250, 250, 250, 240);
    line(290, 240, 288, 250);
    line(325, 260, 330, 250);
    
    noStroke();
    fill(152, 245, 245);
    triangle(156, 602, 279, 301, 409, 602);
    rect(230, 299, 100, 307, 14);
    */
   

    background(0);
    for(var i = 0; i < 14; i++){
        pushMatrix();
        translate(-100 + (i * 100 - circles[0].x/77) % (width + 500), -circles[0].y/49 % height + 0);
            image(SpaceBG, i * 19 * 9 * 3, 0, width, 700);
            
            popMatrix();
        }

        for(var i = 0; i < 14; i++){
            pushMatrix();
            translate(-100 + (i * 100 - circles[0].x/17) % (width + 500), -circles[0].y/19 % height + 250);
            image(SKyG, i * 19 * 12 * 3, 0, 800, 100);
            IIZC(i* 9 * 9, -150, 0.7, 1);
            popMatrix();
            }
            for(var i = 0; i < 14; i++){
                pushMatrix();
                translate(-100 + (i * 100 - circles[0].x/15.5) % (width + 500), -circles[0].y/19 % height + 350);
                image(SKyG2, i * 19 * 12 * 3, 0, 800, 100);
                IIZC(-150 + i* 9 * 9, 0, 1.5, 0);
                popMatrix();
            }
            for(var i = 0; i < 24; i++){
                pushMatrix();
                translate(-200 + (i * 100 - circles[0].x/15) % (width + 500), -circles[0].y/19 % height + 430);
                image(IIZP1, iizx + 19 * 9, 0)
                popMatrix();
            }
            
            for(var i = 0; i < 14; i++){
                pushMatrix();
                translate(-100 + (i * 100 - circles[0].x/13) % (width + 100), -circles[0].y/19 % height + 430);
                image(groundShape, i * 18 * 19 * 1.1, 0, 800, 250)
                popMatrix();
            }
                
            for(var i = 0; i < 14; i++){
                pushMatrix();
                translate(-150 + (i * 100 - circles[0].x/10) % (width + 100), -circles[0].y/19 % height + 470);
                image(IIMF, i * 19 * 18 * 1.1, 0, 800, 200)
                popMatrix();
            }
            for(var i = 0; i < 24; i++){
                pushMatrix();
                translate(-150 + (i * 100 - circles[0].x/8) % (width + 100), -circles[0].y/19 % height + 550);
                image(IIZair1, i * 19 * 18 * 1.1, 0, 800, 100)
                popMatrix();
            }
            for(var i = 0; i < 24; i++){
                pushMatrix();
                translate(-150 + (i * 100 - circles[0].x/7) % (width + 100), -circles[0].y/19 % height + 570);
                image(IIZair2, i * 19 * 18 * 1.1, 0, 800, 100)
                popMatrix();
            }
            for(var i = 0; i < 24; i++){
                pushMatrix();
                translate(-150 + (i * 100 - circles[0].x/6) % (width + 100), -circles[0].y/19 % height + 600);
                image(IIZair3, i * 19 * 18 * 1.1, 0, 800, 100)
                popMatrix();
            }


            iizx -= 0.06;
            

};// IIZ 8
var bg11 = function(){
    
};// SSZ
var bg12 = function(){
    
};// SZ
var bg13 = function(){
    
};
var bg14 = function(){
image(HHZBG, 0, 0);
noStroke();

image(txtre1, 210, 220, 100, 200);

noStroke();
fill(255, 255, 255, 25);
ellipse(503, 101, 100, 100);
ellipse(497, 105, 125, 125);
ellipse(501, 98, 150, 150);
ellipse(499, 101, 175, 175);
fill(245, 245, 245);
ellipse(500, 100, 75, 75);
fill(166, 166, 166);
ellipse(485, 90, 20, 20);
ellipse(525, 90, 20, 20);
ellipse(505, 116, 35, 35);
noStroke();
for(var i = 0; i < 2; i++){
pushMatrix();
translate(0 + (i * 100 - circles[0].x/28) % (width + 500), -circles[0].y/29 % height + 150);
image(HHZp1, i * 29 * 9, -225, 900, 600);
image(HHZcloud4, i * 29 * 9, -200);
popMatrix();
}
for(var i = 0; i < 2; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/20) % (width + 500), -circles[0].y/25 % height + 150);
image(HHZp2, i * 29 * 9, -225, 900, 600);
image(HHZcloud4, i * 29 * 9, -210);
popMatrix();
}
for(var i = 0; i < 2; i++){
pushMatrix();
translate(0 + (i * 100 - circles[0].x/16) % (width + 500), -circles[0].y/29 % height + 150);
image(HHZp3, i * 29 * 9, -225, 900, 600);
image(HHZcloud3, i * 29 * 9, -220);
popMatrix();
}
for(var i = 0; i < 2; i++){
pushMatrix();
translate(0 + (i * 100 - circles[0].x/10) % (width + 500), -circles[0].y/29 % height + 150);
image(HHZp4, i * 49 * 9, -225, 600, 600);
image(HHZcloud2, i * 29 * 9, -230);
popMatrix();
}
for(var i = 0; i < 3; i++){
pushMatrix();
translate(0 + (i * 100 - circles[0].x/7) % (width + 500), -circles[0].y/29 % height + 150);
scale(1.2);
image(HHZp5, i * 49 * 9, -225, 600, 600);
image(HHZcloud1, i * 29 * 9, -240);
popMatrix();
}
for(var i = 0; i < 4; i++){
pushMatrix();
translate(0 + (i * 100 - circles[0].x/4) % (width + 500), -circles[0].y/29 % height + 150);
scale(1.3);
image(lgrass, i * 49 * 9, -225, 600, 600);
popMatrix();
}
for(var i = 0; i < rain.length; i++) {
        //set the color to white with the objects opacity
        fill(0, 128, 255, rain[i].opacity);
        
        //move the snow object down by the object's speed
        rain[i].y+= rain[i].speed;
        
        //draw the snow at the x/y location, with size of radius
        ellipse(rain[i].x, rain[i].y, rain[i].radius, rain[i].radius);
        
        //check if the snow object has gone off the bottom of the screen
        if(rain[i].y - rain[i].radius > height) {
            //if it has then set it's y position to the top of the screen
            rain[i].y = random(-rain[i].radius);
        }
    }
};

var mod = function(x,n) {
    var a = floor(x/n)*n; return x-a;
};

var tzcloudx = 0;
// Tutorial Zone BG
var TZBG = function(){
    background(235);
    stroke(0, 0, 200, 150); 
    strokeWeight(10);
    var bx = mod(millis()/-40,40)+200;
    for (var b = 0; b < 25; b++) { 
        line(bx+b*40-400,0,bx+b*40-200,600);
    }
noStroke();
for(var i = 0; i < 21; i++){
    pushMatrix();
        translate(-100 + (i * 100 - circles[0].x/65) % (width + 500), -circles[0].y/46 % height + 200);
             image(TZB2, tzcloudx + i * 9 * 9 * 6.15, 0);
        popMatrix();
        
    }

for(var i = 0; i < 21; i++){
    pushMatrix();
    translate(-100 + (i * 100 - circles[0].x/45) % (width + 500), -circles[0].y/46 % height + 100);
         image(TZB1, i * 9 * 8 * 5, 0);
    popMatrix();
    }
    
tzcloudx -= 0.06;

};

// BTC1 revamp BGs

var bg2a = function(){
    this.animate = 0;
    background(0, 60, 255);
    fill(255, 255, 0, 10);
for (var i = 0; i < 8; i+=1) {
    ellipse(140,40, 250+i*5, 250+i*5);
}
    pushMatrix();
        strokeWeight(18);
        stroke(255, 149, 0);
        fill(251, 255, 0);
    ellipse(140, 40, 80, 80);
    pushMatrix();
    translate(150, 40);
    
    rotate(this.animate);
    
    
        for(var i = 0; i < 11; i ++)
    {
        rotate(33);
        ellipse(0, -128 + sin(frameCount * 5) * 5, 10, 10);
    }
    
    popMatrix();
    popMatrix();
    noStroke();
    image(Get('RRclouds'), rrcloudX-100, 100);
    rrcloudX = rrcloudX - 0.35;
if(rrcloudX < -450){
    rrcloudX = width;
}
    for(var i = 0; i < 21; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/12) % (width + 500), -circles[0].y/26 % height + 150);
     image(ggrange, i * 9 * 8 * 5, 100);
popMatrix();
}
    
    for(var i = 0; i < 21; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/7) % (width + 500), -circles[0].y/26 % height + 150);
    image(ggparaw, i * 9 * 8 * 7, 150);
popMatrix();
    }
    for(var i = 0; i < 21; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/4) % (width + 500), -circles[0].y/26 % height + 150);
    image(ggmiddle, i * 9 * 8 * 7, 250);
popMatrix();

}
    
};
var bg3a = function(){
    background(0, 0, 0);
    for(var i = 0; i < 9; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/47) % (width + 500), -circles[0].y/36 % height + 150);
image(ssback, i * 9 * 8 * 9, -140);
popMatrix();
}
    for(var i = 0; i < 21; i++){
        pushMatrix();
        translate(-100 + (i * 100 - circles[0].x/12) % (width + 500), -circles[0].y/26 % height + 150);
    image(RRmountainz, i * 9 * 8 * 5, -50);
    popMatrix();
    }
    for(var i = 0; i < 21; i++){
        pushMatrix();
        translate(-100 + (i * 100 - circles[0].x/10) % (width + 500), -circles[0].y/26 % height + 150);
    image(RRMiddle, i * 9 * 8 * 5, 120);
    popMatrix();
    }
    for(var i = 0; i < 21; i++){
        pushMatrix();
        translate(-100 + (i * 100 - circles[0].x/8) % (width + 500), -circles[0].y/26 % height + 150);
    image(RRparalaxx1, i * 9 * 8 * 5, 120);
    popMatrix();
    }
    for(var i = 0; i < 21; i++){
        pushMatrix();
        translate(-100 + (i * 100 - circles[0].x/6) % (width + 500), -circles[0].y/26 % height + 150);
    image(RRparalax2, i * 9 * 8 * 6, -130);
    popMatrix();
    }
    for(var i = 0; i < 25; i++){
    pushMatrix();
    scale(2);
translate(-100 + (i * 100 - circles[0].x/6) % (width + 500), -circles[0].y/26 % height + 150);
image(RRLava, i * 9 * 8 * 8, 135);
popMatrix();
}
for(var i = 0; i < 25; i++){
    pushMatrix();
    scale(2);
translate(-100 + (i * 100 - circles[0].x/5.5) % (width + 500), -circles[0].y/26 % height + 150);
image(RRLava, i * 9 * 8 * 8, 175);
popMatrix();
}
for(var i = 0; i < 25; i++){
    pushMatrix();
    scale(2);
translate(-100 + (i * 100 - circles[0].x/5) % (width + 500), -circles[0].y/26 % height + 150);
image(RRLava, i * 9 * 8 * 8, 215);
popMatrix();
}
    
    
};
var bg4a = function(){
    
        background(0, 0,0);
var seaweed = function(x, y, n) {
        var r;
        noStroke();
        fill(32, 112, 27);
        pushMatrix();
        translate(x, y);
        for(var i = 0; i < n; i+=2)
        {
            r = i / 6 + 3;
            rect(x + Math.sin(i), y + i * r/3, r, r);
        }
        popMatrix();
    }; 
    
        fill(255, 255, 0, 150);
        noStroke();
        rect(0, 0, width, height);
        for(var i=0; i<20; i++){
            rect(i*40,0,i*40,height);
        }
        for(var i=0; i<20; i++){
            line(0,i*40,width,i*40);
        }
        
        
        noStroke();
        seaweed(250, 135, 24);
        fill(255, 187, 0);
        stroke(255, 187, 0);
        rect(0, 0, 60, 600);
        rect(0, 0, 600, 60);
        rect(550, 0, 60, 600);
        rect(50, 580, 600, 60);
fill(242, 255, 0);
        
        rect(240, 460, 120, 120);
        rect(200, 510, 40, 40);
        rect(60, 510, 60, 60);
        rect(120, 490, 80, 80);
        seaweed(120, 190, 29);
        for(var i = 0; i < 10; i++){
            fill(255,i * 12+ 100, 0);
            rect(240, 460, 120, 120);
        }
        noStroke();
        seaweed(70, 220, 23);
        seaweed(240, 220, 33);
        seaweed(170, 135, 25);
        seaweed(110, 135, 25);
        seaweed(50, 115, 45);
        seaweed(50, 35, 25);
        seaweed(170, 35, 35);
        fill(242, 255, 0);
        stroke(255, 191, 0);
        rect(361, 490, 80, 80);
        rect(441, 520, 40, 40);
        rect(480, 510, 70, 60);
        rect(60, 310, 80, 80);
        rect(140, 350, 20, 20);
        rect(160, 330, 30, 30);
        fill(255, 140, 0);
        rect(190, 330, 70, 70);
        rect(260, 320, 50, 50);
        rect(310, 330, 90, 80);
        fill(217, 255, 0);
        rect(400, 310, 60, 60);
        rect(460, 320, 90, 70);
        rect(60, 110, 50, 50);
        rect(110, 125, 70, 70);
        rect(180, 115, 80, 80);
        fill(115, 91, 18);
        rect(260, 135, 110, 110);
        fill(242, 255, 0);
        rect(370, 155, 40, 40);
        rect(410, 125, 60, 60);
        rect(470, 105, 80, 50);
        rect(490, 155, 30, 30);
    
};
var bg5a = function(){
    background(3, 171, 37);
};
var bg6a = function(){
    background(148, 8, 148);
};
var windoww = 30;
var windowh = 30;
var bg7a = function(){
    
        background(254, 94, 9);
         
         
         
         noStroke();
  
  fill(0, 2, 255);
  rect(30, 100, 80, 300);
  fill(255, 255, 0);
  rect(190, 100, 80, 300);
  fill(20, 190,  190);
  rect(330, 100, 80, 300);
  fill(255, 45, 69);
  rect(460, 100, 80, 300);
  
  range5.display();
  
  
  
  fill(221, 11, 0);
  rect(100, 200, 80, 500);
  fill(255,0, 255);
  rect(440, 200,80, 400);
  fill(0,  0, 0);
  rect(0, 570, 600, 90);
  noStroke();
  fill(255, 255, 255);
  rect(5, 580, 50,10);
  rect(140, 580, 50, 10);
  rect(280, 580, 50, 10);
  rect(430, 580, 50, 10);
  rect(540, 580, 50, 10);
  fill(255, 255, 0);
  rect(200, 470, 220, 100);
  fill(90, 30, 190);
  rect(0, 470, 90, 100);
  rect(550, 470, 90, 100);
  fill(255, 255, 255, 150);
  rect(560, 490, windoww, windowh);
  rect(0, 480, windoww, windowh);
  rect(60, 480, windoww, windowh);
  rect(250, 490, windoww + 80, windowh + 10);
  fill(0);
  textSize(25);
  text("Shop", 275, 520);
  fill(255, 255, 255);
  rect(444, 210, windoww, windowh);
  rect(486, 210, windoww, windowh);
  rect(486, 260, windoww, windowh);
  rect(486, 320, windoww, windowh);
  rect(486, 380, windoww, windowh);
  rect(486, 430, windoww, windowh);
  rect(486, 490, windoww, windowh);
  rect(444, 260, windoww, windowh);
  rect(444, 320, windoww, windowh);
  rect(444, 380, windoww, windowh);
  rect(444, 430, windoww, windowh);
  rect(444, 490, windoww, windowh);
  rect(107, 210, windoww, windowh);
  rect(107, 260, windoww, windowh);
  rect(107, 320, windoww, windowh);
  rect(107, 380, windoww, windowh);
  rect(107, 430, windoww, windowh);
  rect(107, 490, windoww, windowh);
  rect(145, 210, windoww, windowh);
  rect(145, 260, windoww, windowh);
  rect(145, 320, windoww, windowh);
  rect(145, 380, windoww, windowh);
  rect(145, 430, windoww, windowh);
  rect(145, 490, windoww, windowh);
  rect(465, 110, windoww, windowh);
  rect(465, 150, windoww, windowh);
  rect(506, 110, windoww, windowh);
  rect(506, 150, windoww, windowh);
  rect(336, 110, windoww, windowh);
  rect(336, 150, windoww, windowh);
  rect(376, 110, windoww, windowh);
  rect(376, 150, windoww, windowh);
  rect(196, 110, windoww, windowh);
  rect(196, 150, windoww, windowh);
  rect(236, 110, windoww, windowh);
  rect(236, 150, windoww, windowh);
  rect(36, 110, windoww, windowh);
  rect(36, 150, windoww, windowh);
  rect(76, 110, windoww, windowh);
  rect(76, 150, windoww, windowh);
    
    
};
var bg8a = function(){
    
background(0, 0, 0);
for(var i = 0; i < 9; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/35) % (width + 500), -circles[0].y/36 % height + 150);
image(ssback, i * 9 * 8 * 9, -140);
popMatrix();
}
for(var i = 0; i < 10; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/13) % (width + 500), -circles[0].y/26 % height + 150);
image(sstars, i * 9 * 8 * 4, 50, width, 100);
popMatrix();
}
for(var i = 0; i < 12; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/11) % (width + 500), -circles[0].y/26 % height + 150);
image(sstars, i * 9 * 8 * 4, 100);
popMatrix();
}
for(var i = 0; i < 13; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/9) % (width + 500), -circles[0].y/16 % height + 150);
image(ssbuilding, i * 9 * 8 * 4, 80);
popMatrix();
}
for(var i = 0; i < 15; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/8) % (width + 500), -circles[0].y/16 % height + 150);
image(ssminic, i * 9 * 8 * 4, 10);
popMatrix();
}
for(var i = 0; i < 16; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/7) % (width + 500), -circles[0].y/16 % height + 150);
image(ssbuildingf, i * 9 * 8 * 4, 160);
popMatrix();
}
for(var i = 0; i < 18; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/6) % (width + 500), -circles[0].y/16 % height + 150);
image(ssfs, i * 9 * 8 * 6, 180);
popMatrix();
}
for(var i = 0; i < 21; i++){
pushMatrix();
translate(-100 + (i * 100 - circles[0].x/4) % (width + 500), -circles[0].y/16 % height + 150);
image(veryfrontb, i * 9 * 8 * 4, 160);
popMatrix();
}

};
var bg9a = function(){
    
    var minirect = function(x, y, w, h){
    stroke(0, 0, 0);
    fill(255, 0, 0);
    rect(x, y, w, h);
    for(var i = 0; i < 13; i++){
        fill(204, 6, 6);
        rect(x, y, w, h);
        
    }
    
    
    
    
};
var smoke = function(x, y, n) {
        var r;
        noStroke();
        fill(255, 255, 255);
        pushMatrix();
        translate(x, y);
        for(var i = 0; i < n; i+=5)
        {
            r = i / 6 + 3;
            ellipse(x + Math.sin(i), y + i * r/3, r, r);
        }
        popMatrix();
    }; 

noStroke();
background(65, 66, 66);
minirect(260, 150, 90, 90);
range6.display();
fill(255, 0, 0);
rect(100, 300, 50, 220);
rect(200, 300, 50, 220);
rect(400, 300, 50, 220);
rect(540, 300, 50, 220);
fill(221, 65, 232);
rect(540, 285, 20, 15);
rect(200, 290, 20, 15);
smoke(184, 210, 25);
smoke(104, 120, 25);
smoke(274, 117, 25);
smoke(86, 210, 25);
fill(255, 0, 0);
rect(360, 470, 20, 30);
rect(160, 470, 20, 30);
minirect(0, 500, 200, 100);
minirect(200, 460, 100, 140);
minirect(300, 500, 140, 100);
minirect(400, 500, 210, 100);
fill(255, 255, 255, 155);
rect(70, 530, 50, 40);
rect(226, 490, 50, 40);
rect(325, 520, 50, 40);
rect(460, 530, 90, 40);

};

//Special Stage BG
var SpecialB = function(){
background(105, 0, 143);
noStroke();
rotate(-45);
fill(0, 75);
rect(-500, 0, 1060, 1000);
fill(13, 1, 94, 100);
ellipse(9, 476, 600, 400);
fill(18, 2, 140, 100);
ellipse(9, 476, 600, 300);
fill(25, 2, 176, 100);
ellipse(9, 476, 600, 200);
fill(104, 3, 176, 100);
ellipse(9, 476, 600, 150);
fill(104, 3, 176, 100);
ellipse(9, 476, 600, 100);
fill(255, 255, 255, 40);
ellipse(9, 476, 240, 35);
ellipse(28, 476, 150, 25);
fill(255, 255, 255, 75);
ellipse(45, 476, 125, 30);
ellipse(60, 476, 100, 25);
pushMatrix();
mainruby(70, 200, 0.5, color(235, 0, 0), color(235, 89, 111), color(255, 71, 83), color(222, 71, 71), color(227, 29, 39), gemrot);
mainruby(70, 650, 0.5, color(231, 0, 235), color(235, 89, 213), color(255, 71, 249), color(222, 71, 222), color(227, 29, 187), gemrot);
mainruby(-60, 450, 0.5, color(43, 0, 235), color(111, 89, 235), color(108, 71, 255), color(71, 71, 222), color(39, 29, 227), gemrot);
popMatrix();

gemrot++;

rotate(45);
for(var i = 0; i < 500; i++) {
    var s = i*0;
    var c = random(1, 2);
    fill(255);
    noStroke();
    ellipse(s + random(0, 800), random(0, 800), c, c);
}
/*
var rotateS = function(x, y, s, rot){
pushMatrix();
translate(x, y);
scale(s);
rotate(rot);

fill(143, 0, 143, 150);
rect(x, y, 50, 50);


popMatrix();

};

rotateS(-35, 30, sscale, squarer);

squarer = -63;
sscale += 0.03;

if(sscale === 10){
    sscale -= 0.03;
}
*/
ST += 0.5;
colorMode(HSB);
            noStroke();
            for (var i = 0; i < 4; i++) {
                fill((Math.floor(ST / 60) * 60 + i * 255 / 4) % 255, 255, 255);
                pushMatrix();
                translate(400 + cos(ST * 2 + i * 90) * sin(ST * 6) * 70, 330 + sin(ST * 2 + i * 90) * sin(ST * 6) * 70);
                rotate(ST / 2 + i * 90);
                rect(45, 5, 60, 60, 5);
                popMatrix();
            }
            colorMode(RGB);

fill(colorz[srandom]);
ellipse(rx, 50, 40, 40);
ellipse(rx, 100, 40, 40);
ellipse(rx, 150, 40, 40);
ellipse(rx, 200, 40, 40);
ellipse(rx, 250, 40, 40);
ellipse(rx, 300, 40, 40);
ellipse(rx, 350, 40, 40);
ellipse(rx, 400, 40, 40);
ellipse(rx, 450, 40, 40);
ellipse(rx, 500, 40, 40);
ellipse(rx, 550, 40, 40);


if(rx > 800){
    bspeed -= 5;
    srandom = floor(random(0, 9));
}
if(rx < 0){
    bspeed += 5;
    srandom = floor(random(0, 9));
}

rx = rx + bspeed;


};


// background level system
var lvlsystem = function(){
    if(gamemode === 0){
        // EEZ
        if(level === 0){
            bg2();
        }
        if(level === 1){
            bg2();
        }
        if(level === 2){
            bg2();
        }

        // RRZ
    if(level === 3){
        bg4();
    }
    if(level === 4){
        bg4();
    }
    if(level === 5){
        bg4();
    }

    // MMZ
    if(level === 6){
        bg3();
    }
    if(level === 7){
        bg3();
    }
    if(level === 8){
        bg3();
    }

    // DDZ
    if(level === 9){
        bg7();
    }
    if(level === 10){
        bg7();
    }
    if(level === 11){
        bg7();
    }

    // WWZ
    if(level === 12){
        bg6();
    }
    if(level === 13){
        bg6();
    }
    if(level === 14){
        bg6();
    }

    // CCZ
    if(level === 15){
        bg5();
    }
    if(level === 16){
        bg5();
    }
    if(level === 17){
        bg5();
    }

    // AAZ
    if(level === 18){
        bg8();
    }
    if(level === 19){
        bg8();
    }
    if(level === 20){
        bg8();
    }

    // TTZ
    if(level === 21){
        bg9();
    }
    if(level === 22){
        bg9();
    }
    if(level === 23){
        bg9();
    }

    //IIZ
    if(level === 24){
        bg10();
    }
    if(level === 24){
        bg11();
    }
    if(level === 24){
        bg12();
    }

    if(level === 34){
        bg14();
    }
    }
    if(gamemode === 1){
        if(level > 1){
            bg3a();
        }
        if(level > 3){
            bg4a();
        }
        if(level > 5){
            bg6a();
        }
        if(level > 7){
            bg7a();
        }
        if(level > 9){
            bg8a();
        }
        if(level > 11){
            bg9a();
        }
        
        
    }
    if(gamemode === 2){
        SpecialB();
    }
    if(gamemode === 3){
        TZBG();
    }
    
};
//logo:
var blogo = function(x, y){
pushMatrix();
translate(x, y);
scale(0.8); 

//}
    
//Commands{
    
timer ++;
reblink ++;
    
//}
    
//Bluey!{
    background(252, 141, 221);
    fill(0,0,255);
    ellipse(300,300,200,200);
    fill(255, 0, 0);
    arc(265,363,50,50, 30, 230);
    fill(0, 255, 255);
    ellipse(300,315,30,30);
    fill(255);
    noStroke();
    ellipse(241,280,60,cl+30);
    ellipse(359,280,60,cl+30);
    fill(0);
    ellipse(eyx+241,eyy+280,30,cl);
    ellipse(eyx+358,eyy+280,30,cl);
    
    noFill();
    ellipse(241,280,50,cl+20);
    ellipse(359,280,50,cl+20);
    
    if (timer > 170) {
    
    fill(0,0,255);
    ellipse(241,280,52,cl+20);
    ellipse(359,280,52,cl+20);
    
    fill(0,0,255);
    ellipse(300,300,200,200);
    fill(255, 0, 0);
    arc(265,363,50,50, 30, 230);
    fill(0, 255, 255);
    ellipse(300,315,30,30);
    stroke(0);
    strokeWeight(5);
    line(228,280,260,280);
    line(338,280,370,280);

    }
    
    if (reblink > 200) {
     
     timer = 0;
     
     reblink = 0;
        
    }
    
    //}
    
//Letters{

//B[

pushMatrix();
translate(-47,200);
rotate(-45);
stroke(0, 0, 255);
strokeWeight(5);
line(bx+42,by+68,bx+53,by+180);
fill(0, 0, 255);
stroke(102, 102, 255);
strokeWeight(10);
line(bx+100,by+180,bx+100,by+69);
noFill();
arc(bx+101,by+153,95,58,-90,90);
arc(bx+101,by+95,72,58,-90,90);
line(bx+104,by+66,bx+45,by+67);
line(bx+104,by+182,bx+57,by+183);
strokeWeight(12);
stroke(0, 0, 0);
point(bx+44,by+84);
point(bx+47,by+108);
point(bx+49,by+108+24);
point(bx+51.5,by+108+48);
stroke(102, 102, 255);
strokeWeight(10);
line(bx+104,by+182-58,bx+51,by+183-58);
popMatrix();

//]

//L[

pushMatrix();
translate(-40,97);
rotate(-45/2);
strokeWeight(10);
stroke(0,0,255);
line(lx+346,ly+69,lx+346,ly+180);
line(lx+351,ly+182,lx+393,ly+182);
popMatrix();

//]

//U[

strokeWeight(10);
stroke(0, 170, 255);
arc(ux+331,uy+70,100,228,0,180);

//]

//E[

pushMatrix();
translate(77,-132);
rotate(45/2);
strokeWeight(10);
stroke(0,0,255);
line(ex+424,ey+69,ex+424,ey+180);
line(ex+482,ey+182,ex+424,ey+182);
line(ex+424,ey+69,ex+482,ey+69);
line(ex+424,ey+126,ex+482,ey+126);
strokeWeight(5);
stroke(0);
line(ex+412,ey+75,ex+439,ey+75);
line(ex+412,ey+95,ex+439,ey+95);
line(ex+412,ey+115,ex+439,ey+115);
line(ex+412,ey+135,ex+439,ey+135);
line(ex+412,ey+125,ex+481,ey+125);
line(ex+412,ey+182,ex+481,ey+182);
line(ex+412,ey+68,ex+481,ey+68);
line(ex+412,ey+155,ex+439,ey+155);
line(ex+412,ey+175,ex+439,ey+175);
line(ex+412,ey+195,ex+439,ey+195);
line(ex+412,ey+55,ex+439,ey+55);
popMatrix();

//]

//Y[

pushMatrix();
translate(221,-218);
rotate(45);
strokeWeight(10);
stroke(5, 0, 145);
line(yx+532,yy+126,yx+532,yy+182);
arc(yx+532,yy+65,80,119,0,180);
popMatrix();

//]

//T[

pushMatrix();
translate(602,129);
rotate(90); //make change of 20 Inclue SPACEBAR
strokeWeight(5);
stroke(44, 44, 245);
line(Tx+174,Ty+435,Tx+174,Ty+414);
line(Tx+164,Ty+412,Tx+183,Ty+412);
popMatrix();

//]

//H[

strokeWeight(5);
pushMatrix();
translate(516,10);
rotate(70);
line(Hx+196,Hy+412,Hx+196,Hy+436);
line(Hx+211,Hy+412,Hx+211,Hy+436);
line(Hx+198,Hy+424,Hx+210,Hy+424);
popMatrix();

//]

//E[

pushMatrix();
translate(382,-73);
rotate(50);
line(Ex+233,Ey+412,Ex+233,Ey+436);
line(Ex+242,Ey+424,Ex+237,Ey+424);
line(Ex+244,Ey+411,Ex+234,Ey+411);
line(Ex+244,Ey+437,Ex+234,Ey+437);
popMatrix();

//]

//C[

pushMatrix();
translate(59,-53);
rotate(10);
arc(Cx+300,Cy+424,26,25,-270,-90);
popMatrix();

//]

//I[

pushMatrix();
translate(-69,52);
rotate(-10);
line(Ix+318,Iy+438,Ix+318,Iy+415);
line(Ix+324,Iy+439,Ix+312,Iy+439);
line(Ix+324,Iy+415,Ix+312,Iy+415);
popMatrix();

//]

//R[

pushMatrix();
translate(-262,173);
strokeWeight(4);
scale(1.2);
rotate(-30);
line(Rx+343,Ry+438,Rx+343,Ry+415);
arc(Rx+345,Ry+421,17,14,-90,90);
line(Rx+354,Ry+439,Rx+344,Ry+427);
popMatrix();

//]

//C[

pushMatrix();
translate(-180,399);
rotate(-50);
arc(cx+382,cy+424,26,25,-270,-90);
popMatrix();

//]

//L[

pushMatrix();
translate(-127,578);
rotate(-70);
line(Lx+401,Ly+411,Lx+401,Ly+438);
line(Lx+416,Ly+439,Lx+402,Ly+439);
popMatrix();

//]

//E[

pushMatrix();
translate(-6,743);
rotate(-90);
line(Eex+233,Eey+412,Eex+233,Eey+436);
line(Eex+242,Eey+424,Eex+237,Eey+424);
line(Eex+244,Eey+411,Eex+234,Eey+411);
line(Eex+244,Eey+437,Eex+234,Eey+437);
popMatrix();

//]



//} //You said you wanted custom text: Here it is
    
//Animations{

//} //If you ever want them, let me know!!
    
//Bracket & Outside Ellipse{   
strokeWeight(15);
ellipse(300,264,640,478);
popMatrix();
noStroke();

textFont(createFont("cursive"));
textSize(120);
fill(4, 80, 138);
text("2", 368, 560);
fill(0, 0, 209);
text("2", 370, 561);
fill(43, 0, 255);
text("2", 371, 562);



};

//btc1 poster:
//{
    noStroke();
    background(255, 255, 255);




noStroke();
pushMatrix();
fill(255, 0, 0);
rotate(20);
rect(570, -190, 200, 500);
rotate(50);
fill(11, 112, 30);
rect(390, 40, 200, 200);


fill(0);
rect(390, -190, 100, 150);


fill(255, 255, 255);
textSize(20);
rotate(0);
text("The \nmost\n famous\n C I R C L E\n In the world", 390, -175);


popMatrix();
filter(BLUR, 1.3);
fill(19, 42, 194);
rect(0, 450, 600, 200);

fill(0, 0, 0);
ellipse(440, 500, 110, 20);

fill(0, 47, 255);
ellipse(400, 460, 100, 100);

fill(255, 255, 255);
ellipse(375, 440, 30, 30);
ellipse(410, 440, 30, 30);
fill(0);
ellipse(375, 440, 15, 15);
ellipse(410, 440, 15, 15);
fill(0, 255, 255);
ellipse(390, 465, 20, 20);

fill(255, 0, 0);

arc(410, 485, 40, 40, 3, 150);

fill(255, 255, 0);
strokeWeight(1);
stroke(0);
ellipse(200, 200, 200, 200);

fill(255, 255, 255);
textSize(40);
textFont(createFont("Impact Bold"));
text("BLUEY",40, 490);
textSize(15);
textFont(createFont("Noto Sans"));
text("The Circle", 70, 510);
textFont(createFont("Kristen ITC"));
textSize(60);
fill(0);
text("B", 110, 200);
text("L", 150, 200);
text("U", 180, 200);
text("E", 220, 200);
text("Y", 250, 200);

fill(0, 255, 0);
textSize(60);
text("KA", 510, 595);

fill(0);
textSize(30);
text("T", 100, 150);
text("H", 180, 100);
text("E", 285, 150);



noStroke();
fill(0, 255, 255);
rect(10, 570, 60, 30);
fill(255, 255, 225);
rect(120, 570, 60, 30);

fill(0);
textSize(15);
text("PJS5", 131, 590);
text("1 Player", 10, 590);
textSize(9);
text("Don't just sit there and waste your precious time\nWhen you want to do something do it right away\n Do it when you can It's the only way to live a life without regret", 191, 570);

fill(0);
rect(130, 220, 140, 30);
textSize(20);
fill(255);
text("C I R C L E", 150, 240);
fill(255, 255, 255);
rect(490, 460, 30, 30);
rect(530, 460, 30, 30);
rect(570, 460, 30, 30);

fill(0);
text("RomanStarCoder\n2019 - " + year(), 430, 20);
var poster = get(0, 0, 600, 600);
//}
// btc2 poster
//{
var poster2 = function(){
    
    background(255, 255, 255);
    
    for(var i = 0; i < 14; i++){
    fill(255, 255, 0);
    rect(i * 9 * 7, 300, 40, 5, 10);
    fill(255, 0, 0);
    rect(i * 9 * 7, 10, 40, 5, 10);
    fill(0, 0, 255);
    rect(i * 9 * 7, 350, 40, 5, 10);
    fill(4, 120, 120);
    rect(i * 9 * 7, 378, 40, 5, 10);
    fill(50, 235, 235);
    rect(i * 9 * 7, 380, 40, 4, 10);
    fill(0, 255, 0);
    rect(i * 9 * 7, 440, 40, 5, 10);
}
    
    fill(255);
    stroke(0);
    rect(0, 500, width+10, 300);
    noStroke();
    fill(0);
    rect(0, 0, 170, height);
    fill(255);
    textFont(createFont("Impact Bold"));
    textSize(70);
    text("B\nL\nU\nE\nY", 120, 70);
    textSize(30);
    text("T\nH\nE", 60, 50);
    text("C\nI\nR\nC\nL\nE", 60, 250);
    textSize(140);
    text("2", 60, 590);
    textSize(20);
    fill(255, 255, 0);
    text("R\nO\nM\nA\nN\nS\nT\nA\nR\nC\nO\nD\nE\nR\nP\nR\nE\nS\nE\nN\nT\nS", 10, 18);
    
    fill(0, 0, 0, 100);
    ellipse(230, 530, 70, 30);
    fill(0, 0, 209);
    ellipse(200, 500, 90, 90);
    fill(255);
    ellipse(180, 480, 30, 30);
    ellipse(215, 480, 30, 30);
    fill(0);
    ellipse(180, 480, 15, 15);
    ellipse(215, 480, 15, 15);
    fill(0, 221, 255);
    ellipse(195, 505, 15, 15);
    noFill();
    strokeWeight(4);
    stroke(0, 0, 0);
    arc(205, 515, 30, 30, 10, 123);
    noStroke();
    fill(0, 0, 0, 100);
    ellipse(330, 530, 70, 30);
    fill(25, 168, 168);
    ellipse(350, 500, 90, 90);
    fill(50, 235, 235);
    ellipse(350, 500, 90, 85);
    noStroke();
fill(255, 255, 255);
ellipse(375, 490, 30, 20);
ellipse(325, 490, 30,20);
fill(25, 168, 168);
ellipse(375, 491, 15, 15);
ellipse(325, 491, 15, 15);
fill(0, 0, 0);
ellipse(375, 489, 15, 15);
ellipse(325, 489, 15, 15);
fill(255, 255, 0);
beginShape();
vertex(340, 470);
vertex(350, 480);
vertex(350, 490);
vertex(360, 490);
vertex(360, 520);
vertex(360, 510);
vertex(360, 530);
endShape();
fill(66, 3, 3);

arc(330, 520, 20, 20, 0, 240);

pushMatrix();
fill(0, 68, 255);
textFont(createFont("Arial Bold"));
textSize(30);
rotate(-3);
text("B\nL\nU\nE\nY", 320, 50);
fill(50, 235, 235);
text("BoltY", 259, 218);
fill(255, 0, 0);
ellipse(280, 170, 10, 10);
ellipse(280, 150, 10, 10);
ellipse(280, 130, 10, 10);
ellipse(280, 110, 10, 10);
ellipse(280, 90, 10, 10);
fill(208, 255, 0);
ellipse(260, 90, 10, 10);
ellipse(240, 90, 10, 10);
ellipse(220, 90, 10, 10);
fill(0, 221, 255);
ellipse(200, 90, 10, 10);
ellipse(180, 90, 10, 10);
fill(2, 110, 24);
rect(450, 160, 100, 100);
fill(0, 255, 0);
textSize(15);
text("Khan Academy Game", 350, 200);
fill(245, 63, 63);
textSize(9);
rotate(-3);
text("Don't just sit there and\n waste your precious time\n When you want to do something\n do it right away. do it when you can\n it's the only way to live a life without regret", 350, 120);
fill(0);
rect(190, 190, 40, 40);
rect(190, 230, 40, 40);
fill(255, 255, 0);
rect(200, 200, 40, 40);
rect(200, 230, 40, 40);

popMatrix();

fill(0);
rect(460, 0, 150, 70);
textSize(25);
textFont(createFont("Impact Bold"));
fill(255, 255, 0);
text("Bluey\n The Circle", 460, 20);
textSize(50);
text("2", 575, 55);

fill(0, 0, 255);
rect(590, 100, 10, 90);
fill(255, 255, 0);
rect(590, 190, 10, 90);
fill(255, 0, 0);
rect(590, 280, 10, 90);
fill(0, 255, 0);
rect(590, 370, 10, 90);

fill(103, 2, 158);
rect(400, 550, 60, 60);
rect(470, 550, 60, 60);
rect(540, 550, 60, 60);
fill(141, 150, 14);
rect(200, 560, 70, 40);
fill(255, 0, 221);
rect(305, 0, 60, 40);
fill(0);
textSize(25);
textFont(createFont("Noto Sans"));
text("PJS5", 205, 590);
textSize(15);
text("1-Player", 305, 25);



};
//}


// game scenes
//animated scene: {
var scene1 = function(){
        noStroke();
var x = 590;
var y = 10;
    for(var i = 0; i < 600; i ++){
        var st = color(0, 106, 255);
        var end = color(0, 22, 133);
        var elpo = lerpColor(st, end, i / 600);
        fill(elpo);
        rect(0, i, 800, 1);
    }




    
    noStroke();
fill(255, 255, 255);
ellipse(x, y, 10, 10);

x = x - 2;
y = y + 2;
    fill(15, 0, 256);
rect(0, 500, width, 100);
//{
fill(9, 133, 0);
beginShape();
vertex(500, 500);
vertex(500, 500);
vertex(98, 500);
vertex(120, 490);
vertex(125, 486);
vertex(161, 467);
vertex(174, 497);
vertex(164, 467);
vertex(176, 442);
vertex(184, 453);
vertex(194, 467);
vertex(205, 471);
vertex(214, 471);
vertex(225, 482);
vertex(231, 482);
vertex(245, 453);
vertex(253, 458);
vertex(262, 428);
vertex(273, 418);
vertex(273, 428);
vertex(286, 428);
vertex(296, 428);
vertex(316, 422);
vertex(346, 419);
vertex(372, 419);
vertex(387, 423);
vertex(397, 432);
vertex(411, 432);
vertex(422, 445);
vertex(442, 455);
vertex(458, 462);
vertex(464, 474);
vertex(475, 482);
vertex(501, 499);

endShape();
//}

strokeWeight(6);
stroke(200, 255, 0);
fill(255, 187, 0);
ellipse(650, 100, 80, 80);
noStroke();

if(x < 40){
    x = 590;
}
if(y > 580){
    y = 10;
}

pushMatrix();
rotate(25);
fill(84, 84, 84, 190);
rect(70, -30, 200,200);

popMatrix();
    
    
    
    
};
var scene2 = function(){
    
    background(0, 153, 255);
    fill(46, 53, 255);
    rect(0, 470, width, 100);
    
    fill(3, 110, 34);
    ellipse(400, 500, 180, 180);
    ellipse(540, 450, 180, 180);
    
    
    fill(249, 250, 170);
    rect(0, 500, width, 100);
    
    fill(255, 255, 255);
    rect(220, 530, 180, 10, 10);
    stroke(255, 255, 255);
    line(360, 530, 451, 481);
    rect(230, 540, 20, 30);
    rect(370, 540, 20, 30);
    fill(3, 3, 194);
    stroke(2, 2, 194);
    ellipse(300, 480, 90, 90);
    fill(0);
    noStroke();
    rect(263, 450, 25, 20);
    rect(300, 450, 25, 20);
    rect(280, 456, 20, 5);
    fill(0, 221, 255);
    ellipse(290, 484, 15, 15);
    fill(255, 0, 0);
    arc(310, 500, 40, 40, 350, 490);
    
    fill(145, 0, 255);
    rect(10, 510, 60, 30);
    
    fill(204, 255, 0);
    rect(500, 510, 60, 30);
    
    
    
    if(wstimer > 1000){
        fill(255);
        ellipse(650, 200, 150, 130);
        fill(0);
        textSize(8);
        text("Circle 8 news! \nBreaking news\n A red crowned king dubbed \n'Cubelord' has built\n a space station \nmachine used to \n destroy planets \nand our world!", 610, 170);
        
        
    }
    
    if(wstimer > 1200){
        fill(0, 47, 266);
        textSize(20);
        text("Better check that out!", 200, 400);
        
    }
    
    
    
};
var scene3 = function(){
    
    background(0, 170, 255);
    
    
    fill(0);
    rect(0, 310, width, height);
    for(var i = 0; i < 15; i++){
        strokeWeight(2);
        stroke(69, 69, 69);
        fill(133, 129, 129);
        rect(i * 10 * 6, 250, 60, 60);
        
        fill(255, 255, 0);
        rect(i * 10 * 13, 430, 60, 30);
        
    }
    
    noStroke();
    fill(255, 0, 255);
    rect(-40, 40, 250, 210);
    
    fill(97, 96, 96);
    rect(209, 40, 220, 210);
    
    fill(4, 212, 94);
    rect(409, 40, 220, 210);
    
    fill(252, 136, 136);
    rect(609, 40, 220, 210);
    
    fill(0);
    textSize(30);
    text("Netsco's shop", 10, 70);
    text("Fun Foodz", 430, 70);
    text("Closed", 630, 70);
    
    fill(92, 61, 61);
    rect(150, 190, 30, 60);
    
    fill(255, 255, 255, 150);
    rect(20, 140, 80, 50);
    rect(420, 140, 80, 50);
    rect(510, 140, 80, 50);
    
    fill(0, 0, 0, 200);
    rect(215, 50, 190, 180);
    
    fill(158, 158, 158);
    rect(245, 180, 40, 40);
    rect(295, 180, 40, 40);
    rect(345, 180, 40, 40);
    rect(285, 110, 60, 60);
    
    fill(255, 0, 0);
    textSize(10);
    text("Circle \n8 news", 245, 200);
    text("Circle \n8 news", 295, 200);
    text("Circle \n8 news", 345, 200);
    textSize(15);
    text("Circle \n8 News", 285, 140);
    
    if(frameCount%30 < 10){
        fill(87, 86, 86);
        rect(245, 180, 40, 40);
    rect(295, 180, 40, 40);
    rect(345, 180, 40, 40);
    rect(285, 110, 60, 60);
        
    }
    
    
    fill(255, 0, 0);
    ellipse(200, 350, 70, 70);
    fill(250, 95, 95);
    ellipse(300, 350, 70, 70);
    fill(255, 0, 230);
    ellipse(250, 390, 70, 70);
    fill(183, 0, 255);
    ellipse(350, 390, 70, 70);
    fill(0, 255, 68);
    ellipse(450, 350, 70, 70);
    fill(238, 255, 0);
    ellipse(100, 390, 70, 70);
    
    var drawBall = function(x, y, rot) {
    pushMatrix();
      translate(x, y);
      rotate(rot);
        
      fill(0, 4, 208);
      ellipse(0, 0, 70, 70); // center ball 
            
      fill(2);
      rect(2, -20, 19, 15);
      rect(-23, -20, 19, 15);
      rect(-10, -15, 15, 5);
      
      fill(0, 221, 255);
      ellipse(0, 5, 10, 10);
      
      fill(255, 0, 0);
      ellipse(0, 25, 30, 16);
      
      if(wstimer > 1700){
          fill(255);
          ellipse(0 - 20, 0 - 20, 20, 40);
          ellipse(0 + 10, 0 - 20, 20, 40);
          
          fill(0, 4, 208);
          ellipse(0, 0, 70, 70);
      }
      
      
      
      
    popMatrix();
    
};
    drawBall(x, 520, rot);
    if(wstimer > 1760){
          fill(0, 0, 255);
          textSize(20);
          text("Whats going on?",400, 480);
          
      }
    x = x + 4;
    if(x > 1){
        rot++;
        rot += 2;
    }
    
    if(x > 550){
        x = 550;
        rot = 0;
    }
    
    
};
var scene4 = function(){
    background(128, 128, 128);
    
    fill(77, 75, 75);
    rect(50, 50, width - 100, height - 100);
    
    fill(199, 199, 199);
    rect(75, 75, width - 150, height - 150);
    
    fill(150, 0, 0);
    ellipse(200, 430, 100, 100);
    
    fill(255);
    ellipse(180, 400, 30, 30);
    ellipse(220, 400, 30, 30);
    fill(0);
    ellipse(180, 400, 15, 15);
    ellipse(220, 400, 15, 15);
    fill(255, 0, 196);
    ellipse(200, 420, 15, 15);
    fill(255, 0, 0);
    ellipse(200, 440, 50*cos(frameCount*5), 20);
    
    fill(99, 74, 74);
    rect(75, 450, 270, 75);
    
    fill(37, 37, 186);
    rect(350, 200, 150, 150);
    
    fill(6, 143, 33);
    ellipse(450, 320, 40, 40);
    ellipse(470, 320, 58, 50);
    
    fill(10, 82, 10);
    rect(350, 330, 150, 20);
    
    fill(128, 128, 128, 128);
    pushMatrix();
    rotate(10);
    rect(420, 150, 70, 70);
    popMatrix();
    
    fill(255, 0, 0);
    textSize(25);
    text("Breaking News", 350, 190);
    
    if(wstimer > 1900){
        fill(0);
        textSize(15);
        text("It appears that Cubelords\n plan has worked and is now\n going to destroy us all!", 150, 300);
        
    }
    if(wstimer > 2000){
        text("Scream and Run NOWWWW!!!", 320, 400);
        
    }
    
    
    
};
var scene5 = function(){
    background(0, 208, 255);
    fill(255, 0, 255);
    rect(0, 50, width - 300, height);
    
    fill(176, 176, 0);
    rect(300, 100, width - 300, height);
    
    fill(255, 255, 255, 150);
    rect(200, 200, 60, 60);
    rect(100, 200, 60, 60);
    rect(10, 200, 60, 60);
    
    fill(0, 0, 209);
    ellipse(100, 400, 100, 100);
    fill(255);
    ellipse(80, 370, 30, 30);
    ellipse(120, 370, 30, 30);
    fill(0);
    ellipse(80, 370, 15, 15);
    ellipse(120, 370, 15, 15);
    rect(70, 355, 22, 10);
    rect(110, 355, 22, 10);
    fill(0, 221, 255);
    ellipse(100, 400, 15, 15);
    fill(255, 0, 0);
    ellipse(80, 420, 20*sin(frameCount*5), 20);
    
    fill(0);
    rect(0, 450, width, 200);
    
    for(var i = 0; i < 14; i++){
        
        fill(255,255, 0);
        rect(i * 10 * 11, 450, 50, 20);
        
    }
    
    fill(0, 0, 255);
    textSize(30);
    text("Not Again...", 300, 300);
    
};
var scene6 = function(){
    background(0, 174, 255);
    var drawBall = function(x, y, rot) {
    pushMatrix();
      translate(x, y);
      rotate(rot);
        
      fill(0, 4, 208);
      ellipse(0, 0, 70, 70); // center ball 
            
      fill(255);
      ellipse(0 - 15, 0 - 15, 20, 20);
      ellipse(0 + 15, 0 - 15, 20, 20);
      fill(0);
      ellipse(0 - 15, 0 - 15, 10, 10);
      ellipse(0 + 15, 0 - 15, 10, 10);
      
      
      fill(0, 221, 255);
      ellipse(0, 5, 10, 10);
      
      fill(255, 0, 0);
      ellipse(0, 25, 30, 16);
      
      
      
      
      
      
      
    popMatrix();
    
};
    drawBall(x2, 450, rot2);
    
    
    if(x2 > 1){
    rot2++;
    rot2+=10;
    }
    
    fill(0, 255, 0);
    rect(0, 485, width, 200);
    fill(77, 61, 61);
    rect(0, 515, width, 200);
    
    if(wstimer > 2600){
        fill(0);
        textSize(30);
        text("Bluey Starts his adventure now!", 100, 100);
        
    }
    if(wstimer > 2650){
        text("With some help of another", 130, 150);
        
        
    }
    if(wstimer > 2700){
        textSize(150);
        text("IN", 250, 300);
        
    }
    if(wstimer > 2800){
        background(255, 0, 0);
        blogo();
        
    }
    
    
    
    
    
};
var scene7 = function(){
    transtimer++;
    transtimer++;
    transtimer++;
    background(5, 100, 148);
    for(var i = 0; i < 10; i++){
        fill(191, 191, 191);
        rect(i * 9 * 9, 50, 60, 190);
        fill(255, 255, 255, 200);
        rect(i * 9 * 9, 60, 40, 10);
         rect(i * 9 * 9, 80, 40, 10);
          rect(i * 9 * 9, 100, 40, 10);
           rect(i * 9 * 9, 120, 40, 10);
            rect(i * 9 * 9, 140, 40, 10);
        
    }
    fill(255, 189, 189);
    rect(0, 150, width, 300);
    fill(0, 255, 0);
    rect(0, 400, width, 200);
    
    
    fill(255);
    ellipse(220, 440, 20, 30);
    ellipse(190, 440, 20, 30);
    ellipse(430, 440, 20, 30);
    ellipse(460, 440, 20, 30);
    
    fill(0, 0, 209);
    ellipse(200, 480, 90, 90);
    fill(0, 221, 255);
    ellipse(450, 480, 90, 90);
    
    
    
    
    
    if(transtimer > 300){
        fill(0, 0, 255);
        textSize(20);
        text("Do we go in there?", 100, 430);
        
    }
    if(transtimer > 600){
        fill(3, 137, 158);
        textFont(createFont("fantasy"));
        text("Yeah I think so", 400, 430);
    }
    if(transtimer > 800){
        scene = "opencard";
    }
    
    
};
var scene8 = function(){
    eitim++;
    background(0, 187, 255);
    var incAmount = 0.01;
        fill(143, 143, 143);
    for (var t = 0; t < incAmount*width; t += incAmount) {
        var n = noise(t);
        var y = map(n, 0, 1, 0, height/1);    
        
        rect(t*100, 110+y, 9, 280);
    }
    fill(255, 0, 0);
    rect(0, 90, 40, height);
    rect(120, 90, 40, height);
    fill(2, 122, 2);
    rect(0, 500, width, 100);
    fill(100, 100, 100);
    rect(0, 300, 200, 300);
    
    
    fill(0, 0, 209);
    ellipse(180, 255, 90, 90);
    fill(255);
    ellipse(165, 235, 30, 30);
    ellipse(205, 235, 30, 30);
    fill(0);
    ellipse(165, 235, 15, 15);
    ellipse(205, 235, 15, 15);
    fill(0, 221, 255);
    ellipse(185, 255, 15, 15);
    fill(255, 0, 0);
    arc(175, 270, 40, 40, 100, 200);
    
    fill(50, 235, 235);
    ellipse(300, 540, 10, 10);
    
    if(eitim > 100){
        fill(0, 0, 209);
        textSize(20);
        text("Finally we are out of this place!", 200, 200);
        
    }
    if(eitim > 200){
        fill(50, 235, 235);
        text("I'm down here Bluey!", 250, 520);
        
    }
    if(eitim > 400){
        scene = "opencard";
    }
    
    
    
};
var scene9 = function(){
    s9t++;
    background(0, 170, 255);
    
    
    fill(125, 51, 51);
    rect(400, 200, 60, height);
    fill(135, 131, 131);
    rect(480, 100, 60, height);
    fill(129, 133, 49);
    rect(540, 200, 60, height);
    fill(55, 72, 148);
    rect(580, 200, 60, height);
    fill(125, 91, 26);
    rect(640, 200, 60, height);
    fill(23, 138, 98);
    rect(680, 180, 60, height);
    
    var incAmount = 0.01;
        fill(176, 176, 176);
    for (var t = 0; t < incAmount*width; t += incAmount) {
        var n = noise(t);
        var y = map(n, 0, 1, 0, height/1);    
        
        rect(t*100, 10+y, 1, 380);
    }
    
    fill(5, 148, 5);
    rect(0, 500, width, 200);
    
    fill(0);
    rect(400, 500, 80, 100);
    fill(255, 255, 0);
    rect(435, 520, 15, 30);
    rect(435, 570, 15, 30);
    
    fill(0, 0, 209);
    ellipse(350, 500, 70, 70);
    fill(255);
    ellipse(340, 485, 20, 20);
    ellipse(370, 485, 20, 20);
    fill(0);
    ellipse(340, 485, 10, 10);
    ellipse(370, 485, 10, 10);
    fill(0, 221, 255);
    ellipse(355, 500, 10, 10);
    fill(255, 0, 0);
    arc(345, 520, 25, 25, 10, 240);
    fill(50, 235, 235);
    ellipse(400, 200, 5, 5);
    
    if(s9t > 100){
        textSize(15);
        fill(0, 0, 255);
        text("Following this road we'll find a city!", 200, 450);
    }
    if(s9t > 200){
        fill(50, 235, 235);
        text("Beat you Bluey!", 250, 200);
        
    }
    if(s9t > 350){
        fill(255, 157, 0);
        text("Following this road we'll find a city!", 200, 450);
        fill(0, 0, 255);
        text("Man I wish he could stop being fast..", 200, 450);
        fill(0);
        rect(330, 475, 20, 5);
        rect(360, 475, 20, 5);
    }
    
    
    
    if(s9t > 450){
        scene = "opencard";
    }
    
    
    
    
};
var scene10 = function(){
tim10++;
    background(0, 179, 255);
    
    fill(140, 71, 2);
    rect(0, 500, width, 100);
    tree1Big(67,316);
tree1Big(5,346);
tree1Big(107, 323);
tree1Big(330,318);
tree1Big(132,325);
tree1Big(207,325);
tree1Big(580,324);
tree1Big(402,335);
tree1Big(309,357);
tree1Big(251,341);
tree1Big(453,344);
tree1Big(516,336);
tree1Big(640, 318);
tree1Big(620, 336);
tree1Big(730, 317);
tree1Big(690, 357);
tree1Big(780, 337);
    
    fill(255);
    ellipse(360, 328, 20, 30);
    ellipse(330, 328, 20, 30);
    ellipse(240, 328, 20, 30);
    ellipse(270, 328, 20, 30);
    
    fill(128, 128, 128);
    rect(200, 400, 200, height);
    fill(0, 0, 209);
    ellipse(350, 360, 80, 80);
    fill(50, 235, 235);
    ellipse(250, 360, 80, 80);
if(tim10 > 100){
    fill(50, 235, 235);
    textSize(15);
    text("Maybe we should go in there\n Bluey", 150, 300);
    
    
}
if(tim10 > 250){
    fill(0, 0, 209);
    text("I wonder what is in these woods\n Bolty, so yeah we should go", 350, 300);
    
}
if(tim10 > 400){
    scene = "opencard";
}
};

var whatscene = function(){
    image(poster, 0, 0, 800, 600);
    wstimer++;//make it faster
    fill(24, 3, 105, 150);
    rect(0, 0, width, height);
    textSize(30);
    fill(255, 255, 255, frameCount);
    textFont(createFont("Noto Sans"));
    text("After the events of Bluey The Circle...", 50, 200);
    if(wstimer > 80){
        textSize(20);
        fill(255, 255, 255, frameCount);
        text("Bluey decides to go on vacation!", 50, 230);
        
    }
    if(wstimer > 180){
        fill(255, 255, 255, frameCount);
        text("Onto West Geometry Island!", 50, 260);
        
        
    }
    if(wstimer > 280){
        fill(255, 255, 255, frameCount);
        text("A popular vacation spot and an island \nhome to a 7th mystical shard...", 50, 290);
        
    }
    if(wstimer > 490){
        pushMatrix();
        background(255, 0, 0);
        fill(0, 0, 0, frameCount);
        translate(random(10), random(10));
        textSize(40);
        text("AND CUBELORDS NEXT PLAN!", 200, 300);
        popMatrix();
    }
    if(wstimer > 600){
        scene1();
    }
    if(wstimer > 750){
        scene2();
    }
    if(wstimer > 1400){
        scene3();
    }
    if(wstimer > 1880){
        scene4();
    }
    if(wstimer > 2100){
        scene5();
    }
    if(wstimer > 2400){
        scene6();
    }
    if(wstimer > 3000){
        scene = "opencard";
        
        
    }
    
    
};


//}
// custom font: {

    var findNextNewline = function(txt, num) {
        for (var i = 0; i < txt.length - num; i++) {
            if (txt[i + num] === "\n") {
                return i;
            }
        }
        return i;
    };
    
    // Fonts adapted from previous games.
    var font = function(txt, x, y, size, spacing, align) {
        var fontX = 0, fontY = 0;
        if (align === CENTER) {
            fontX = -findNextNewline(txt, 0) * spacing / 2 + size / 10;
        }
        for (var letter in txt) {
            pushMatrix();
            translate(x + fontX, y + fontY);
            noStroke();
            switch (txt[letter]) {
                case "A":
                    (rect)(0, 7, size / 4, size - 7);
pushMatrix();
rotate(25);
rect(size / 4 - 15, -15, size / 8 + 24, size / 4);
popMatrix();
rect(size / 4, size / 2, size / 8, size / 4);
(rect)(size / 8 * 3, 0, size / 4, size, 0, size / 8);
                    break;
                case "B":
                    rect(0, 0, size / 4, size);
                    rect(size / 4, 0, size / 8, size / 4);
                    rect(size / 4, size / 8 * 3, size / 8, size / 4);
                    rect(size / 4, size / 4 * 3, size / 8, size / 4);
                    (rect)(size / 8 * 3, 0, size / 4, size / 2, 0, size / 8, size / 8, 0);
                    (rect)(size / 8 * 3, size / 2, size / 4, size / 2, 0, size / 8, size / 8, 0);
                    break;
                case "C":
                    (rect)(0, 0, size / 4, size);
                    rect(size / 4, 0, size / 8, size / 4);
                    rect(size / 4, size / 4 * 3, size / 8, size / 4);
                    (rect)(size / 8 * 3, 0, size / 4, size / 2.3);
                    (rect)(size / 8 * 3, size / 3 * 2-5, size / 4, size / 2.2);
                    break;
                case "D":
                    rect(0, 0, size / 4, size);
                    rect(size / 4, 0, size / 8, size / 4);
                    rect(size / 4, size / 4 * 3, size / 8, size / 4);
                    (rect)(size / 8 * 3, 0, size / 4, size, 0, size / 8, size / 8, 0);
                    break;
                case "E":
                    rect(0, 0, size / 4, size);
                    rect(size / 4, 0, size / 8 * 3, size / 4);
                    pushMatrix();
                    rotate(-4);
                    rect(size / 4 - 5, size / 8 * 3, size / 4 + 10, size / 4);
                    popMatrix();
                    rect(size / 4, size / 4 * 3, size / 8 * 3, size / 4);
                    break;
                case "F":
                    rect(0, 0, size / 4, size);
                    rect(size / 4, 0, size / 8 * 3, size / 4);
                    rect(size / 4, size / 8 * 3, size / 4, size / 4);
                    break;
                case "G":
                    (rect)(0, 0, size / 4, size, size / 8, 0, 0, 8);
                    rect(size / 4, 0, size / 8, size / 4);
                    rect(size / 4, size / 4 * 3, size / 8, size / 4);
                    (rect)(size / 8 * 3, 0, size / 4, size / 3, 0, size / 8, 0, 0);
                    (rect)(size / 8 * 3, size / 3 * 2, size / 4, size / 3, 0, 0, size / 8, 0);
                    rect(size / 3, size / 2, size / 10 * 3, size / 6);
                    break;
                case "H":
                    rect(0, 0, size / 4, size);
                    rect(size / 4, size / 8 * 3, size / 8, size / 4);
                    rect(size / 8 * 3, 0, size / 4, size);
                    break;
                case "I":
                    rect(size / 16 * 3, 0, size / 4, size);
                    break;
                case "J":
                    rect(size / 4, size / 4 * 3, size / 8, size / 4);
                    rect(size / 4, 0, size / 8, size / 4);
                    (rect)(size / 8 * 3, 0, size / 4, size, 0, 0, size / 8, 0);
                    (rect)(0, size / 3 * 2, size / 4, size / 3, 0, 0, 0, size / 8);
                    break;  
                case "K":
                    rect(0, 0, size / 4, size);
                    rect(size / 4, size / 8 * 3, size / 8, size / 4);
                    (rect)(size / 8 * 3, 0, size / 4, size / 2, 0, 0, size / 8, 0);
                    (rect)(size / 8 * 3, size / 2, size / 4, size / 2, 0, size / 8, 0, 0);
                    break;
                case "L":
                    rect(0, 0, size / 4, size);
                    rect(size / 4, size / 4 * 3, size / 8, size / 4);
                    (rect)(size / 8 * 3, size / 3 * 2, size / 4, size / 3, 0, 0, size / 8, 0);
                    break;
                case "M":
                    (rect)(0, 0, size / 5, size, size / 8, 0, 0, 0);
                    rect(size / 4, 0, size / 8, size / 2, size / 30);
                    rect(size / 16 * 3, 0, size / 4, size / 4);
                    (rect)(size / 40 * 17, 0, size / 5, size, 0, size / 8, 0, 0);
                    break;
                case "N":
                    (rect)(0, 0, size / 5, size);
                    rectMode(CENTER);
                    pushMatrix();
                    translate(size / 16 * 5, size / 2);
                    rotate(50);
                    rect(0, 0, size / 1.5, size / 4);
                    popMatrix();
                    rectMode(CORNER);
                    (rect)(size / 40 * 17, 0, size / 5, size);
                    break;
                case "O":
                    (rect)(0, 0, size / 4, size);
                    rect(size / 4, 0, size / 8, size / 4);
                    rect(size / 4, size / 4 * 3, size / 8, size / 4);
                    (rect)(size / 8 * 3, 0, size / 4, size);
                    break;
                case "P":
                    rect(0, 0, size / 4, size);
                    rect(size / 4, 0, size / 8, size / 4);
                    rect(size / 4, size / 8 * 3, size / 8, size / 4);
                    (rect)(size / 8 * 3, 0, size / 4, size / 8 * 5, 0, size / 8, size / 8, 0);
                    break;
                case "Q":
                    (rect)(0, 0, size / 4, size, size / 8, 0, 0, size / 8);
                    rect(size / 4, 0, size / 8, size / 4);
                    rect(size / 4, size / 4 * 3, size / 8, size / 4);
                    (rect)(size / 8 * 3, 0, size / 4, size, 0, size / 8, size / 8, 0);
                    rectMode(CENTER);
                    pushMatrix();
                    translate(size / 16 * 9, size / 16 * 13);
                    rotate(45);
                    rect(0, 0, size / 4, size / 4);
                    popMatrix();
                    rectMode(CORNER);
                    break;
                case "R":
                    rect(0, 0, size / 4, size);
                    rect(size / 4, 0, size / 8, size / 4);
                    rect(size / 4, size / 8 * 3, size / 8, size / 4);
                    (rect)(size / 8 * 3, 0, size / 4, size / 2, 0, size / 8, size / 8, 0);
                    pushMatrix();
                    translate(size / 3, size / 9 * 4);
                    rotate(50);
                    (rect)(0, 0, size / 25 * 13, size / 4, 0, size / 8, 0, 0);
                    /*
                    var size1 = 100;
noStroke();
fill(252, 146, 146);

rect(0, 15, size1 / 4, size1 - 15);
pushMatrix();
rotate(25);
                    rect(size1 / 4 - 30, -30, size1 / 8 + 31, size1 / 4);
                    popMatrix();
                    rect(size1 / 4, size1 / 8 * 3, size1 / 8, size1 / 4);
                    
                    
                    (rect)(size1 / 8 * 3, 0, size1 / 4, size1 / 2, 0, size1 / 8, size1 / 8, 0);
                    
                    translate(size1 / 3, size1 / 9 * 4);
                    rotate(50);
                    (rect)(0, 0, size1 / 25 * 11, size1 / 6, 0, size1 / 8, 0, 0);
                    popMatrix();
                    
                    rect(30, 0, 30, 30);

                    */
                    popMatrix();
                    break;
                case "S":
                    (rect)(0, 0, size / 4, size / 9 * 5, size / 8, 0, 0, size / 8);
                    rect(size / 4, 0, size / 8 * 3, size / 4);
                    rect(0, size / 4 * 3, size / 8 * 3, size / 4);
                    (rect)(size / 8 * 3, size / 28 * 11, size / 4, size / 28 * 17, 0, size / 8, size / 8, 0);
                    rect(size / 4, size / 28 * 11, size / 4, size / 6);
                    break;
                case "T":
                    rect(size / 16 * 3, 0, size / 4, size);
                    (rect)(0, 0, size / 8 * 5, size / 4);
                    break;
                case "U":
                    (rect)(0, 0, size / 4, size+3, 0, size / 8, 0, size / 8);
                    pushMatrix();
                    rotate(15);
                    rect(size / 4, size / 4 * 3, size / 2, size / 4);
                    popMatrix();
                    (rect)(size / 8 * 3, 0, size / 4, size+6, size / 8, 0, size / 8, 0);
                    break;
                case "V":
                    pushMatrix();
                    translate(size / 16 * 3, 0);
                    rotate(80);
                    (rect)(0, 0, size / 1.05, size / 5, size / 15, 0, 0, size / 15);
                    popMatrix();
                    pushMatrix();
                    translate(size / 16 * 7, 0);
                    rotate(280);
                    scale(-1, 1);
                    (rect)(0, 0, size / 1.05, size / 5, size / 15, 0, 0, size / 15);
                    popMatrix();
                    rect(size / 32 * 5, size / 10 * 9, size / 16 * 5, size / 10);
                    break;
                case "W":
                    (rect)(0, 0, size / 5, size, 0, 0, 0, size / 8);
                    rect(size / 4, size / 2, size / 8, size / 2, size / 30);
                    rect(size / 16 * 3, size / 4 * 3, size / 4, size / 4);
                    (rect)(size / 40 * 17, 0, size / 5, size, 0, 0, size / 8, 0);
                    break;
                case "X":
                    rect(size / 4, size / 8 * 3, size / 8, size / 4);
    
                    (rect)(size / 8 * 3, 0, size / 4, size / 2, 0, 0, size / 8, 0);
                    (rect)(size / 8 * 3, size / 2, size / 4, size / 2, 0, size / 8, 0, 0);
                    (rect)(0, 0, size / 4, size / 2, 0, 0, 0, size / 8);
                    (rect)(0, size / 2, size / 4, size / 2, size / 8, 0, 0, 0);
                    break;
                case "Y":
                    rect(size / 4, size / 8 * 3, size / 8, size / 4);
    
                    (rect)(size / 8 * 3, 0, size / 4, size / 2, 0, 0, size / 8, 0);
                    (rect)(0, 0, size / 4, size / 2, 0, 0, 0, size / 8);
                    rect(size / 16 * 3, size / 2, size / 4, size / 2);
                    break;
                case "Z":
                    (rect)(0, 0, size / 8 * 5, size / 4, size / 8, 0, 0, 0);
                    (rect)(0, size / 4 * 3, size / 8 * 5, size / 4, 0, 0, size / 8, 0);
                    quad(size / 8 * 5, size / 4, size / 4, size / 4 * 3, 0, size / 4 * 3, size / 8 * 3, size / 4);
                    break;
                case "a":
                    (rect)(0, size / 4, size / 4, size / 4 * 3, size / 8, 0, 0, size / 8);
                    rect(size / 4, size / 4, size / 8, size / 4);
                    rect(size / 4, size / 4 * 3, size / 2.2, size / 4);
                    (rect)(size / 8 * 3, size / 4, size / 4, size / 2, 0, size / 8, 0, 0);
                    break;
                case "b":
                    (rect)(0, 0, size / 4, size, 0, 0, 0, size / 8);
                    rect(size / 4, size / 4, size / 8, size / 4);
                    rect(size / 4, size / 4 * 3, size / 8, size / 4);
                    (rect)(size / 8 * 3, size / 4, size / 4, size / 4 * 3, 0, size / 8, size / 8, 0);
                    break;
                case "c":
                    (rect)(0, size / 4, size / 4, size / 4 * 3, size / 8, 0, 0, size / 8);
                    rect(size / 4, size / 4, size / 8, size / 4);
                    rect(size / 4, size / 4 * 3, size / 8, size / 4);
                    (rect)(size / 8 * 3, size / 4, size / 4, size / 3, 0, size / 8, 0, 0);
                    (rect)(size / 8 * 3, size / 3 * 2, size / 4, size / 3, 0, 0, size / 8, 0);
                    break;
                case "d":
                    (rect)(size / 8 * 3, 0, size / 4, size, 0, 0, size / 8, 0);
                    rect(size / 4, size / 4, size / 8, size / 4);
                    rect(size / 4, size / 4 * 3, size / 8, size / 4);
                    (rect)(0, size / 4, size / 4, size / 4 * 3, size / 8, 0, 0, size / 8);
                    break;
                case "e":
                    (rect)(0, size / 4, size / 4, size / 4 * 3, size / 8, 0, 0, size / 8);
                    rect(size / 4, size / 4, size / 8, size / 4);
                    rect(size / 4, size / 5 * 4, size / 8, size / 5);
                    (rect)(size / 8 * 3, size / 4, size / 4, size / 3, 0, size / 8, 0, 0);
                    (rect)(size / 8 * 3, size / 4 * 3, size / 4, size / 4, 0, 0, size / 8, 0);
                    rect(0, size / 7 * 4, size / 8 * 5, size / 10);
                    break;
                case "f":
                    (rect)(0, size / 8, size / 4, size / 8 * 7, size / 8, 0, 0, 0);
                    rect(size / 4, size / 8, size / 8 * 3, size / 4);
                    rect(size / 4, size / 2, size / 4, size / 4);
                    break;
                case "g":
                    (rect)(0, size / 4, size / 4, size / 5 * 4, size / 8, 0, 0, size / 8);
                    rect(size / 4, size / 4, size / 8, size / 4);
                    rect(size / 4, size / 5 * 4, size / 8, size / 4);
                    (rect)(size / 8 * 3, size / 4, size / 4, size / 4 * 5, 0, size / 8, size / 8, 0);
                    rect(0, size / 12 * 16, size / 8 * 3, size / 6);
                    break;
                case "h":
                    (rect)(0, 0, size / 4, size, 0, 0, 0, 0);
                    rect(size / 4, size / 4, size / 8, size / 4);
                    (rect)(size / 8 * 3, size / 4, size / 4, size / 4 * 3, 0, size / 8, 0, 0);
                    break;
                case "i":
                    rect(size / 4, size / 8 * 3, size / 4, size / 8 * 5);
                    rect(size / 8, size / 8 * 3, size / 4, size / 8);
                    ellipse(size / 8 * 3, size / 8, size / 4, size / 4);
                    break;
                case "j":
                    ellipse(size / 2, size / 8, size / 4, size / 4);
                    rect(size / 4, size, size / 8, size / 4);
                    (rect)(size / 8 * 3, size / 2, size / 4, size / 4 * 3, 0, 0, size / 8, 0);
                    (rect)(0, size / 12 * 11, size / 4, size / 3, 0, 0, 0, size / 8);
                    break;  
                case "k":
                    rect(0, 0, size / 4, size);
                    rect(size / 4, size / 2, size / 8, size / 4);
                    (rect)(size / 8 * 3, size / 3, size / 4, size / 3, 0, 0, size / 8, 0);
                    (rect)(size / 8 * 3, size / 3 * 2, size / 4, size / 3, 0, size / 8, 0, 0);
                    break;
                case "l":
                    rect(0, 0, size / 4, size);
                    rect(size / 4, size / 4 * 3, size / 8, size / 4);
                    break;
                case "m":
                    rect(0, size / 4, size / 5, size / 4 * 3);
                    rect(size / 4, size / 4, size / 8, size / 2, size / 30);
                    rect(size / 16 * 3, size / 4, size / 4, size / 4);
                    (rect)(size / 40 * 17, size / 4, size / 5, size / 4 *3, 0, size / 8, 0, 0);
                    break;
                case "n":
                    rect(0, size / 4, size / 4, size / 4 * 3);
                    rect(size / 4, size / 4, size / 8, size / 4);
                    (rect)(size / 8 * 3, size / 4, size / 4, size / 4 * 3, 0, size / 8, 0, 0);
                    break;
                case "o":
                    (rect)(0, size / 4, size / 4, size / 4 * 3, size / 8, 0, 0, size / 8);
                    rect(size / 4, size / 4, size / 8, size / 4);
                    rect(size / 4, size / 4 * 3, size / 8, size / 4);
                    (rect)(size / 8 * 3, size / 4, size / 4, size / 4 * 3, 0, size / 8, size / 8, 0);
                    break;
                case "p":
                    rect(0, size / 4, size / 4, size);
                    rect(size / 4, size / 4, size / 8, size / 6);
                    rect(size / 4, size / 8 * 5, size / 8, size / 6);
                    (rect)(size / 8 * 3, size / 4, size / 4, size / 20 * 11, 0, size / 8, size / 8, 0);
                    break;
                case "q":
                    (rect)(0, size / 4, size / 4, size / 20 * 11, size / 8, 0, 0, size / 8);
                    rect(size / 4, size / 4, size / 8, size / 6);
                    rect(size / 4, size / 8 * 5, size / 8, size / 6);
                    (rect)(size / 8 * 3, size / 4, size / 4, size, 0, size / 8, 0, size / 8);
                    break;
                case "r":
                    (rect)(0, size / 4, size / 4, size / 4 * 3, size / 8, 0, 0, 0);
                    
                    (rect)(size / 4, size / 4, size / 4, size / 4, 0, size / 8, 0, 0);
                    break;
                case "s":
                    (rect)(0, size / 4, size / 4, size / 2, size / 8, 0, 0, size / 8);
                    (rect)(size / 4, size / 4, size / 8 * 3, size / 16 * 3, 0, size / 8, 0, 0);
                    (rect)(0, size / 16 * 13, size / 8 * 3, size / 16 * 3, 0, 0, 0, size / 8);
                    (rect)(size / 8 * 3, size / 2, size / 4, size / 2, 0, size / 8, size / 8, 0);
                    rect(size / 4, size / 2, size / 4, size / 4);
                    break;
                case "t":
                    rect(size / 16 * 3, 0, size / 4, size);
                    rect(0, size / 4, size / 8 * 5, size / 4);
                    break;
                case "u":
                    (rect)(0, size / 4, size / 4, size / 4 * 3, 0, 0, 0, size / 8);
                    rect(size / 4, size / 4 * 3, size / 8, size / 4);
                    rect(size / 8 * 3, size / 4, size / 4, size / 4 * 3);
                    break;
                case "v":
                    beginShape();
                    vertex(0, size / 4);
                    vertex(size / 32 * 7, size / 4);
                    vertex(size / 32 * 7, size / 12 * 7);
                    bezierVertex(size / 4, size / 4 * 3, size / 8 * 3, size / 4 * 3, size / 32 * 13, size / 12 * 7);
                    vertex(size / 32 * 13, size / 4);
                    vertex(size / 8 * 5, size / 4);
                    bezierVertex(size / 2, size /4 * 5, size / 8, size / 4 * 5, 0, size / 4);
                    endShape();
                    break;
                case "w":
                    (rect)(0, size / 4, size / 5, size / 4 * 3, 0, 0, 0, size / 8);
                    rect(size / 4, size / 2, size / 8, size / 2, size / 30);
                    rect(size / 16 * 3, size / 4 * 3, size / 4, size / 4);
                    (rect)(size / 40 * 17, size / 4, size / 5, size / 4 * 3, 0, 0, size / 8, 0);
                    break;
                case "x":
                    rect(size / 4, size / 2, size / 8, size / 4);
    
                    (rect)(size / 8 * 3, size / 4, size / 4, size / 8 * 3, 0, 0, size / 8, 0);
                    (rect)(size / 8 * 3, size / 8 * 5, size / 4, size / 8 * 3, 0, size / 8, 0, 0);
                    (rect)(0, size / 4, size / 4, size / 8 * 3, 0, 0, 0, size / 8);
                    (rect)(0, size / 8 * 5, size / 4, size / 8 * 3, size / 8, 0, 0, 0);
                    break;
                case "y":
                    rect(size / 4, size / 8 * 5, size / 8, size / 8);
    
                    (rect)(size / 8 * 3, size / 4, size / 4, size, 0, 0, size / 8, 0);
                    (rect)(0, size / 4, size / 4, size / 2, 0, 0, 0, size / 8);
                    rect(0, size / 12 * 13, size / 8 * 3, size / 6);
                    break;
                case "z":
                    (rect)(0, size / 4, size / 8 * 5, size / 4, size / 8, 0, 0, 0);
                    (rect)(0, size / 4 * 3, size / 8 * 5, size / 4, 0, 0, size / 8, 0);
                    quad(size / 8 * 5, size / 2, size / 4, size / 4 * 3, 0, size / 4 * 3, size / 8 * 3, size / 2);
                    break;
                case "2":
                    (rect)(0, 0, size / 8 * 5, size / 4, size / 8, size / 8, 0, 0);
                    rect(0, size / 4 * 3, size / 8 * 5, size / 4);
                    beginShape();
                    vertex(size / 8 * 5, size / 3);
                    bezierVertex(size / 8 * 5, size / 2, size / 4, size / 8 * 5, size / 4, size / 4 * 3);
                    vertex(0, size / 4 * 3);
                    bezierVertex(size / 8, size / 2, size / 4, size / 12 * 5, size / 8 * 3, size / 3);
                    endShape();
                    rect(size / 8 * 3, size / 4, size / 4, size / 11.7);
                    break;
                
            }
            popMatrix();
            fontX += spacing;
            if (txt[letter] === "\n") {
                fontX = 0;
                fontY += size * 1.1;
                if (align === CENTER) {
                    fontX = -findNextNewline(txt, letter) * spacing / 2;
                }
                continue;
            }
        }
    };

var header = function(txt, x, y, size, spacing, o, type) {
    this.type = type;
    switch(this.type){
        case 0:
        txt = txt || "";
        x = x;
        y = y;
        size = size || 80;
        spacing = spacing || 60;
        noStroke();
        
        
        fill(255, 255, 255);
        font(txt, x, y, size, spacing, CENTER);
        noStroke();
        break;
        case 1:
            txt = txt || "";
        x = x;
        y = y;
        size = size || 80;
        spacing = spacing || 60;
        noStroke();
        
            fill(0, 0, 255);
            font(txt, x, y, size, spacing, CENTER);
        break;
        case 2:
            txt = txt || "";
        x = x;
        y = y;
        size = size || 80;
        spacing = spacing || 60;
        noStroke();
        
            fill(255, 179, 0);
            font(txt, x, y, size, spacing, CENTER);
            
        break;
        
        
        
    }
    
    
    };

//}
/*

var WorldMapEEZ = function(){
    
    noStroke();
    background(0, 98, 255);
    
    image(tmounts, 0, -10, 800, 150);
    
    fill(7, 189, 23);
    rect(0, 300, width, 300);
    
    fill(251, 255, 0);
    rect(100, 300, 40, 40);
    rect(50, 500, 60, 60);
    rect(400, 400, 30, 30);
    rect(600, 310, 40, 40);
    rect(600, 500, 40, 40);
    
    
    strokeWeight(40);
    stroke(0, 98, 255);
    line(300, 300, 280, 600);
    line(500, 300, 500, 600);
    noStroke();
    
    image(Get('TotemPole'), 30, 310, 50, 50);
    image(Get('TotemPole'), 50, 490, 50, 50);
    image(Get('TotemPole2'), 330, 350, 50, 50);
    image(Get('TotemPole'), 630, 310, 50, 50);
    image(Get('TotemPole3k'), 630, 450, 50, 50);
    image(Get('Image2'), 130, 310, 50, 70);
    image(Get('Image2'), 370, 310, 50, 70);
    image(Get('Image2'), 370, 510, 50, 70);
    image(Get('Image2'), 630, 350, 50, 70);
    image(Get('Image2'), 530, 350, 50, 70);
    image(Get('Image2'), 130, 510, 50, 70);
    image(Get('Image2'), 160, 400, 50, 70);
    image(Get('Image2'), 30, 400, 50, 70);
    image(Get('Image2'), 700, 310, 50, 70);
    image(Get('Image2'),700, 510, 50, 70);
    image(Get('Image4'), 100, 410, 50, 50);
    image(Get('Image4p1'), -10, 310, 50, 50);
    image(Get('Image4p1'), 200, 310, 50, 50);
    image(Get('Image4p1'), 200, 510, 50, 50);
    image(Get('Image4p2'), 320, 410, 50, 50);
    image(Get('Image4'), 320, 510, 50, 50);
    image(Get('Image4p1'), 420, 310, 50, 50);
    image(Get('Image4p1'), 420, 410, 50, 50);
    image(Get('Image4p1'), 420, 510, 50, 50);
    image(Get('Image4'), 500, 310, 50, 50);
    image(Get('Image4'), 500, 410, 50, 50);
    image(Get('Image4'), 500, 510, 50, 50);
    image(Get('Image4'), 600, 410, 50, 50);
    
    
    
    
    
    
    
    
    if(frameCount%70 < 40){
    fill(255, 0, 0);
    ellipse(100, 400, 10, 10);
    //ellipse(350, 310, 10, 10);
    //ellipse(700, 500, 10, 10);
    }
};

*/
var TCBluey = function(x, y, s, rotat, t){
    noStroke();
    pushMatrix();
    translate(x, y);
    scale(s);
    rotate(rotat);
    fill(0, 0, 0, t);
    ellipse(0, 0, 80, 80);
    fill(255, 255, 255, t);
    ellipse(-18, -10, 30, 30);
    ellipse(+20, -10, 30, 30);
    fill(0, 0, 0, t);
    ellipse(-18, -10, 15, 15);
    ellipse(+20, -10, 15, 15);
    fill(120, 120, 120, t);
    ellipse(0, +10, 15, 15);
    fill(250, 245, 245, t);
    arc(+10, +25, 20, 20, 340, 543);
    
    popMatrix();
};
var begY = -500;
var begX2 = 1000;
var TCtrans = 100;
var TAtrans = 255;
var TAx = 1200;
var TAx2 = 1200;
var sstimer = 0;
var TAx3 = 1200;
var TAx4 = 1200;
var TAy = 300;
var timer2 = 0;
var btctr = 255;
var bxarttri = function(x, y, s, color){
    pushMatrix();
    translate(x, y);
    scale(s);
    fill(color);
triangle(0, 1, 28, 1, 28, 40);  
popMatrix();
};
var bxarttri2 = function(x, y, s, color){
    pushMatrix();
    translate(x, y);
    scale(s);
    fill(color);
triangle(0, 40, 0, 5, 28, 40);  
popMatrix();
};
var bxarttri3 = function(x, y, s, color){
    pushMatrix();
    translate(x, y);
    scale(s);
    fill(color);
triangle(42, 30, 83, 31, 42, 94);  
popMatrix();
};
var bxarttri4 = function(x, y, s, color){
    noStroke();
    pushMatrix();
    translate(x, y);
    scale(s);
    fill(color);
triangle(32, 39, 76, 58, 33, 78);
popMatrix();
};
var bxarttri5 = function(x, y, s, color){
    noStroke();
    pushMatrix();
    translate(x, y);
    scale(s);
    fill(color);
triangle(112, 41, 70, 58, 112, 79);
popMatrix();
};
 

var clock = function(x, y, r, speed, s){
        pushMatrix();
        translate(x, y);
        scale(s);
        
        //pushStyle();
        fill(0, 0, 255);
        stroke(0, 0, 200);
        ellipse(0, 0, r + 10, r + 10);
        //popStyle();
        fill(164, 234, 252);
        ellipse(0, 0, r, r);
        
        stroke(5, 5, 5);
        pushMatrix();
        rotate(speed * frameCount);
        line(0, 0, 0, -r / 2 + 65);
        popMatrix();
        
        pushMatrix();
        rotate(speed * frameCount / 12);
        line(0, 0, 0, -r / 4 + 32);
        popMatrix();
        
        popMatrix();
        noStroke();
    };

var gx = -200;
var gx2 = 900;
var gtime = 0;
var gy = 200;
var gy2 = 200;
var wx = -200;
var wx2 = -200;
var wxA = 900;
var wx2A = 900;
var wx3 = -600;
var wx3A = 1200;
var wy = 900;
var wy2 = 900;
var wy3 = 900;
var wy4 = 800;

var licon = function(){
    if(TA === false){
        if(character === 0){
    pushMatrix();
    translate(15, -20);
    strokeCap(ROUND);
    strokeWeight(2.5);
    stroke(0);
    textFont(createFont("Arial Bold"));
    textSize(20);
    fill(255, 255, 255);
    rect(30, 560, 40, 40, 3);
    text("x  " + Lives, 80, 600);
    fill(255, 255, 0);
    textFont(createFont("Kristen ITC Bold"));
    text("Bluey", 80, 575);
    noStroke();
    fill(0, 0, 200);
    ellipse(50, 580, 40, 40);
    fill(255, 255, 255);
    ellipse(40, 572, 13, 13);
    ellipse(60, 572, 13, 13);
    fill(0);
    ellipse(39, 572, 6, 6);
    ellipse(61, 572, 6, 6);
    fill(0, 221, 255);
    ellipse(50, 580, 7, 7);
    fill(255, 0, 0);
    ellipse(50, 592, 20, 10);
    popMatrix();
        }
        if(character === 1){
            pushMatrix();
    translate(15, -20);
    strokeCap(ROUND);
    strokeWeight(2.5);
    stroke(0);
    textFont(createFont("Arial Bold"));
    textSize(20);
    fill(255, 255, 255);
    rect(30, 560, 40, 40, 3);
    text("x  " + Lives, 80, 600);
    fill(255, 255, 0);
        textSize(20);
    textFont(BF, 20);
    text("Bolty", 80, 575);
    noStroke();
    noStroke();
    fill(25, 168, 168);
    ellipse(50, 580, 40, 40);
    fill(50, 235, 235);
    ellipse(50, 580, 40, 36);
    fill(255, 255, 255);
    ellipse(38, 578, 13, 10);
    ellipse(62, 578, 13, 10);
    fill(25, 168, 168);
    ellipse(38, 579, 6, 6);
    ellipse(62, 579, 6, 6);
    fill(0);
    ellipse(38, 578, 6, 6);
    ellipse(62, 578, 6, 6);
    image(Boltyslightning, 45, 560, 10, 40);
    noFill();
    stroke(0);
    arc(59, 589, 10, 10, 0, 143);
    popMatrix();
    noStroke();
        }
    }
    if(TA === true){
        Lives = Infinity;
    }
    };
var Win = function(){
    wtimer++;
    wtimer++;
    fill(255, 255, 255, 0);
    rect(0, 0, 800, 600);
    
    bxarttri(wx3-42, 78, 1.52, color(255, 0, 0));
    bxarttri2(wx3+520, 73, 1.65, color(255, 0, 0));
    fill(255, 0, 0);
    rect(wx3, 80, 520, 58.5);
    
    bxarttri(wx3A-42, 220, 1.5, color(255, 0, 0));
    bxarttri2(wx3A+520, 213, 1.65, color(255, 0, 0));
    fill(255, 0, 0);
    rect(wx3A, 220, 520, 58.5);
    
    header(AdvanceChara[character], wx, 50, 80, 60, 0, 1);
    header("THROUGH", wx2, 200, 70, 50, 0, 0);
    header("GOT", wxA, 70, 70, 50, 0, 0);
    header("ZONE", wx2A, 200, 70, 50, 0, 0);
    
    bxarttri(120, wy+5, 0.7, color(107, 107, 107));
    
    bxarttri(120, wy2+35, 0.7, color(107, 107, 107));
    bxarttri(90, wy3+5, 0.7, color(107, 107, 107));
    bxarttri(110, wy4-5, 0.7, color(107, 107, 107));
    bxarttri2(589, wy+1, 0.8, color(107, 107, 107));
    bxarttri2(589, wy2+31, 0.8, color(107, 107, 107));
    bxarttri2(589, wy3+1, 0.8, color(107, 107, 107));
    bxarttri2(589, wy4-9, 0.8, color(107, 107, 107));
    
    fill(107, 107, 107);
    rect(139, wy+6, 450, 26.5);
    rect(139, wy2+36, 450, 26.5);
    rect(109, wy3+5.5, 480, 26.5);
    rect(129, wy4-4, 460, 26.5);
    
    
    
    
    header("TIME BONUS", 250, wy, 30, 20, 0,  2);
    header("COIN BONUS", 250, wy2+30, 30, 20, 0,  2);
    header("CUBENIK BONUS", 250, wy3, 30, 20, 0,  2);
    header("TOTAL SCORE", 250, wy4-7, 30, 20, 0,  2);
    textFont(WSF, 40);
    fill(255);
    text("0", 520, wy+30);
    text("0", 520, wy2+60);
    text("0", 520, wy3+30);
    text("0", 520, wy4+20);
    
    
    
    if(wtimer > 50){
    wx = wx + 50;
    wx2 = wx2 + 50;
    wxA = wxA - 50;
    wx2A = wx2A - 50;
    wx3 = wx3 + 50;
    wx3A = wx3A - 50;
    }
    if(wtimer > 100){
        wy = wy - 50;
    }
    if(wtimer > 135){
        wy2 = wy2 - 50;
    }
    if(wtimer > 165){
        wy3 = wy3 - 50;
    }
    if(wtimer > 195){
        wy4 = wy4 - 50;
    }
    
    
    if(wx > 250){
        wx = 250;
    }
    if(wx2 > 250){
        wx2 = 250;
    }
    if(wxA < 550){
        wxA = 550;
    }
    if(wx2A < 550){
        wx2A = 550;
    }
    if(wx3 > 100){
        wx3 = 100;
    }
    if(wx3A < 100){
        wx3A = 100;
    }
    if(wy < 310){
        wy = 310;
    }
    if(wy2 < 340){
        wy2 = 340;
    }
    if(wy3 < 440){
        wy3 = 440;
    }
    if(wy4 < 510){
        wy4 = 510;
    }
            
        if(wtimer > 800){
            scene = "opencard";
            wtimer = 0;
            wx = -200;
            wx2 = -200;
            wx2A = 900;
            wxA = 900;
            wx3 = -600;
            wx3A = -1200;
            wy = 900;
            wy2 = 900;
            wy3 = 900;
            wy4 = 900;
            level ++;
            levels.loadToVram();
            winscore += 15;
            tubez.on = 0;
            if(TA === true){
                wtimer = 0;
                scene = "TA";
            }
        }
        if(level === 3){
        scene = "lvltrans2";
    }
    if(level === 6){
        //scene = "lvltrans1";
    }
    if(level === 9){
        scene = "lvltrans3&k";
    }
    if(level === 12){
        scene = "lvltrans4ep1";
    }
            
};

var funny1 = false;




var titlecard = function(){
    if(Titlecardmode === "Bluey 2"){
    if(TA === false){
    ttimer++;
    irot++;
    TCBluey(400, 275, 8, irot, TCtrans); 
    fill(0, 0, 0, transp);
    rect(0, 0, width, height);
    noStroke();
    if(gamemode === 1){
    }
    if(ttimer > 10){
        begY += 10;
        begX2 = begX2 - 10;
    }
    if(begY > 0){
        begY = 0;
    }
    if(begX2 < 400){
        begX2 = 400;
    }
    if(ttimer > 190){
    cardx2 = cardx2 + 11;
    transp -= 10;
    TCtrans -= 10;
    begX2 = begX2 + 20;
    
    }
    // blue one
    fill(0, 0, 255);
    rect(cardx-150, 180, 215, 25);
    rect(cardx-50, 330, 150, 20);
    bxarttri(cardx-170, 180-1, 0.7, color(0, 0, 255));
    bxarttri2(cardx+65, 180-4, 0.7, color(0, 0, 255));
    fill(255, 0, 0);
    rect(altcard+50, begY, 100, 500);
    bxarttri(49.5+altcard, begY+495, 3.6, color(255, 0, 0));
    for(var i = 0; i <25; i++){
    bxarttri4(130+altcard, i * 25.65-25+begY, 0.6, color(255, 0, 0));
    }
    fill(0, 100);
    rect(altcard+50, begY, 9, 500);
    rect(altcard+55, begY, 15, 510);
    rect(altcard+74, begY, 10, 534);
    rect(altcard+86, begY, 4, 549);
    
    fill(255);
    textSize(50);
    if(character === 0){
    textFont(createFont("Impact Bold"));
    }
    if(character === 1){
        textFont(createFont("Impact Bold"));
        }
    if(character === 2){
        textFont(PKMPFT, 50);
    }
    if(character === 3){
        textFont(createFont("Impact Bold"));
        }
    if(character === 4){
textFont(AZLFONT, 50);
    }
    pushMatrix();
    rotate(-90);
    if(character === 0){
    text("B L U E Y   T H E  C I R C L E ", -535-begY, 140+altcard);
    }
if(character === 1){
    text("B O L T Y   T H E  C I R C L E ", -535-begY, 140+altcard);
}
if(character === 2){
    text("P U M P K I M P", -535-begY, 140+altcard);
}
if(character === 3){
    text("O R A N G Y   T H E  C I R C L E ", -535-begY, 140+altcard);
    }
    if(character === 4){
        text("A Z U L L E T E   T H E  C I R C L E ", -535-begY, 140+altcard);
    }


    popMatrix();
    //shading
    fill(255, 255, 255, 100);
    rect(cardx-170, 180, 235, 5);
    rect(cardx-50, 330, 150, 5);
    fill(0, 0, 0, 100);
    rect(cardx-150, 200, 225, 5);
    rect(cardx-50, 345, 150, 5);
    // yellow one
    fill(255, 221, 0);
    rect(cardx2-280, begY+250, 600, 50);
    bxarttri(cardx2-315, begY+250-1, 1.34, color(255, 221, 0));
    bxarttri2(cardx2+316, begY+250-2, 1.34, color(255, 221, 0));
    // shading for yellow
    fill(255, 255, 255, 100);
    rect(cardx2-310, begY+250, 640, 5);
    fill(0, 0, 0, 100);
    rect(cardx2-280, begY+295, 610, 5);
    
    
    
    fill(255, 255, 0);
    textSize(51);
    textFont(createFont("Arial Bold"));
    if(gamemode === 0){
        if(funny1 === false){
    text(levelcount[level], cardx2+200, begY+400);
        }
    if(funny1 === true){
    text("SHIT", cardx2+200, begY+400);
    }
    }
    if(gamemode === 1){
        text(levelcount2[level], cardx2+200, begY+400);
        }

    if(level === 0){
        image(Get('TCpalmT'), cardx+200, begY+300, 90, 120);
    }
    if(level === 1){
        image(Get('TCpalmT'), cardx+200, begY+300, 90, 120);
    }
    if(level === 2){
        image(Get('TCpalmT'), cardx+200, begY+300, 90, 120);
    }
    if(gamemode === 0){
        fill(255, 255, 255);
    textSize(51);
    textFont(createFont("Arial Bold"));
    if(funny1 === false){
    header(lvlnames[level], begX2, 210, 51, 40, 0, 1);
    header(lvlnames[level], begX2, 210, 51, 40, 0, 0);
    }
    if(funny1 === true){
        header(funnytext[0], begX2, 210, 51, 40, 0, 0);
        header(funnytext[0], begX2, 210, 51, 40, 0, 1);
    }
    }
    
    if(gamemode === 1){
        header(lvlnames2[level], begX2, 210, 51, 40, 0, 1);
    header(lvlnames2[level], begX2, 210, 51, 40, 0, 0);
    }
    if(gamemode === 3){
        header(extralvlnames[level], begX2, 210, 51, 40, 0, 1);
        header(extralvlnames[level], begX2, 210, 51, 40, 0, 0);
        
    };
    textFont(createFont("Impact Bold"));
    textSize(40);
    fill(255);
    if(challengeM === false){
    header("ZONE", cardx2+10, 320, 41, 30, 0, 1);
    header("ZONE", cardx2+10+2, 320, 41, 30, 0, 0);
    }
    if(challengeM === true){
        header("CHALLENGE", cardx2+10, 320, 41, 30, 0, 1);
    header("CHALLENGE", cardx2+10+2, 320, 41, 30, 0, 0);
    }
    
    fill(69, 69, 69);
    rect(cardx2+150, 400, 150, 20);
    fill(255, 255, 255, 100);
    rect(cardx2+150, 400, 150, 5);
    fill(0, 0, 0, 100);
    rect(cardx2+150, 415, 150, 5);
    fill(255);
    textFont(createFont("Arial Bold"));
    textSize(20);
    text("Act", cardx2+150, 415);
    
    textFont(createFont("Kristin ITC"));
    textSize(20);
    text("Bluey The Circle", cardx2-200, 430);
    fill(0, 0, 255);
    textSize(40);
    text("2", cardx2-60, 430);
    if(ttimer > 100){
        cardy = cardy + 6;
        //altcard = altcard - 6;
        transp -= 2.5;
    }
    if(ttimer > 190){
        cardx = cardx + 11;
        altcard = altcard - 6;
    }
    
    if(ttimer > 260){
        scene = "Play";
        ttimer = 0;
        cardx = 350;
        cardy = 400;
        altcard = 0;
        transp = 255;
        cardx2 = 350;
    }
    }
    if(TA === true){
        timer2++;
        fill(0, 0, 0, TAtrans);
        rect(0, 0, width, height);
        
        if(timer2 > 10){
            TAtrans -= 20;
        }
        if(timer2 > 50){
            TAx  = TAx - 10;
        }
        if(timer2 > 90){
            TAx2  = TAx2 - 10;
        }
        if(timer2 > 120){
            TAx3  = TAx3 - 10;
        }
        if(timer2 > 160){
            TAx4  = TAx4 - 10;
        }
        if(TAx < 100){
            TAx = 100;
        }
        if(TAx2 < 150){
            TAx2 = 150;
        }
        if(TAx3 < 200){
            TAx3 = 200;
        }
        if(TAx4 < 150){
            TAx4 = 150;
        }
        
        textSize(250);
        fill(0, 0, 255);
        textFont(createFont("Impact Bold"));
        text("3", TAx, TAy);
        text("2", TAx2+150, TAy);
        text("1", TAx3+300, TAy);
        fill(255, 255, 0);
        text("GO!", TAx4, TAy+200);
        
        if(timer2 > 290){
            TAy = TAy - 10;
        }
        if(timer2 > 340){
            scene = "Play";
            TAy = 300;
            timer2 = 0;
            TAx = 1200;
            TAx2 = 1200;
            TAx3 = 1200;
            TAx4 = 1200;
        }
    }
    }
    if(Titlecardmode === "BTC1"){
        ttimer++;
        var squareNum = 15;
    var squareSize = width/squareNum + 1.2;
var currentCol = 0;
noStroke();
    var squareColor = [color(0, 0, 255), color(0, 221, 255)];
    for (var i = 0; i < squareNum; i++) {
        for (var j = 0; j < squareNum; j++) {
            fill(squareColor[currentCol], btctr);
            rect(i * squareSize, j * squareSize, squareSize, squareSize);
            currentCol++;
            if(currentCol> 1){
                currentCol = 0;
            }
        }    
    }
    fill(255);
    textSize(50);
    textFont(createFont("Arial Bold"));
    if(gamemode === 0){
    text(lvlnames[level], 190, 300);
    }
    if(gamemode === 1){
    text(lvlnames2[level], 190, 300);
    }
    noFill();
    if(ttimer > 50){
        btctr -= 5;
    }
    if(ttimer > 150){
        scene = "Play";
        btctr = 255;
        ttimer = 0;
    }
    }
    
};
var totimer = 0;

var gameover = function(){
    gtime++;
    
    
    header("GAME", gx, gy, 80, 60, 0, 0);
    header("OVER", gx2, gy2, 80, 60, 0, 0);
    
    if(gtime > 50){
        gx += 50;
        gx2 -= 50;
    }
    
    if(gx > 250){
        gx = 250;
    }
    if(gx2 < 550){
        gx2 = 550;
    }
    
    if(gtime > 600){
        gy -= 50;
        gy2 += 50;
    }
    if(gtime > 660){
        scene = "Menu";
    }
    
    
    
    
};
var timeover = function(){
    totime++;
    
    
    header("TIME", gx, gy, 80, 60, 0, 0);
    header("OVER", gx2, gy2, 80, 60, 0, 0);
    
    if(totime > 50){
        gx += 50;
        gx2 -= 50;
    }
    
    if(gx > 250){
        gx = 250;
    }
    if(gx2 < 550){
        gx2 = 550;
    }
    
    if(totime > 600){
        gy -= 50;
        gy2 += 50;
    }
    if(totime > 660){
        scene = "Menu";
    }
};


var Characterst = ["Bluey", "Bolty"];
noStroke();
var SScomplete = function(){
    sstimer++;

background(180, 180, 180);
var squareNum = 17;
    var squareSize = width/squareNum + 1.2;
var currentCol = 0;
    var squareColor = [color(87, 87, 87), color(181, 181, 181)];
    var currentCol = 0;
    noStroke();
    for (var i = 0; i < squareNum; i++) {
        for (var j = 0; j < squareNum; j++) {
            fill(squareColor[currentCol]);
            rect(i * squareSize, j * squareSize, squareSize, squareSize);
            currentCol++;
            if(currentCol> 1){
                currentCol = 0;
            }
        }    
    }
    if(failed === false){
textSize(80);
header(Characterst[0], x9+80, 80, 80, 60, 2, 1);
header("GOT A", x8, 80, 80, 60, 0, 2);
header("RECTANGULAR RUBY", 380, x9A, 40, 30, 2, 0);
}
    if(failed === true){
    header("SPECIAL STAGE", x9+290, 100, 60, 40, 0, 0);
}
mainruby(150, r1, 0.3, color(255, 97, 97), color(245, 49, 49), color(255, 71, 71), color(222, 71, 71), color(227, 29, 29));
mainruby(230, r2, 0.3, color(99, 107, 255), color(56, 49, 245), color(71, 71, 255), color(71, 71, 222), color(29, 29, 227));
mainruby(310, r3, 0.3, color(99, 255, 151), color(49, 245, 91), color(71, 255, 138), color(71, 222, 104), color(29, 227, 72));
mainruby(390, r4, 0.3, color(250, 255, 99), color(245, 229, 49), color(234, 255, 71), color(209, 222, 71), color(227, 227, 29));
mainruby(470, r5, 0.3, color(255, 99, 229), color(238, 49, 245), color(252, 71, 255), color(219, 71, 222), color(224, 29, 227));
mainruby(550, r6, 0.3, color(99, 226, 255), color(49, 199, 245), color(71, 234, 255), color(71, 187, 222), color(29, 181, 227));
mainruby(630, r7, 0.3, color(255, 198, 99), color(245, 150, 49), color(255, 203, 71), color(222, 149, 71), color(227, 148, 29));

x9 = x9 + 8;
x8 = x8 - 8;
x9A = x9A + 8;
if(Rubies === 1){
    r1 = r1 + 5;
}
if(Rubies === 2){
    r2 = r2 + 5;
    r1 = r1 + 5;
}
if(Rubies === 3){
    r3 = r3 + 5;
    r2 = r2 + 5;
    r1 = r1 + 5;
}
if(Rubies === 4){
    r4 = r4 + 5;
    r3 = r3 + 5;
    r2 = r2 + 5;
    r1 = r1 + 5;
}
if(Rubies === 5){
    r5 = r5 + 5;
    r4 = r4 + 5;
    r3 = r3 + 5;
    r2 = r2 + 5;
    r1 = r1 + 5;
}
if(Rubies === 6){
    r6 = r6 + 5;
    r5 = r5 + 5;
    r4 = r4 + 5;
    r3 = r3 + 5;
    r2 = r2 + 5;
    r1 = r1 + 5;
}
if(Rubies === 7){
    r7 = r7 + 5;
    r6 = r6 + 5;
    r5 = r5 + 5;
    r4 = r4 + 5;
    r3 = r3 + 5;
    r2 = r2 + 5;
    r1 = r1 + 5;
}

if(x9 > 100){
    x9 = 100;
}
if(x8 < 550){
    x8 = 550;
}
if(x9A > 200){
    x9A = 200;
}
if(r1 > 350){
    r1 = 350;
}
if(r2 > 350){
    r2 = 350;
}
if(r3 > 350){
    r3 = 350;
}
if(r4 > 350){
    r4 = 350;
}
if(r5 > 350){
    r5 = 350;
}
if(r6 > 350){
    r6 = 350;
}
if(r7 > 350){
    r7 = 350;
}
if(sstimer > 300){
    scene = "load";
}

};

// intro  funcs{
    var bluey = function(x, y, scaley){
    noStroke();
    pushMatrix();
    translate(100, bluY);
    scale(scaley);
    rotate(blueRot);
    fill(4, 4, 209);
    ellipse(0, 0, 90, 90);
    fill(255, 255, 255);
    ellipse(-20, -10, 30, 30);
    ellipse(20, -10, 30, 30);
    fill(0);
    ellipse(-20, -10, 15, 15);
    ellipse(20, -10, 15, 15);
    fill(0, 221, 255);
    ellipse(0, 10, 20, 20);
    fill(255, 0, 0);
    arc(10, 21, 40, 40, 3, 150);
    if(frameCount%300 < 30){
        fill(4, 4, 209);
        ellipse(-20, -10, 30, 30);
        ellipse(20, -10, 30, 30);
        
    }
    popMatrix();
};
    var bolty = function(x, y, scaley){
    pushMatrix();
    scale(scaley);
    translate(boltyX, 555);
    rotate(boltRot);
    fill(25, 168, 168);
    ellipse(395, 400, 90, 90);
    fill(50, 235, 235, frameCount);
    ellipse(395, 400, 90, 85);
fill(25, 168, 168);
triangle(383, 410, 388, 355, 397, 390);
triangle(392, 390, 404, 370, 398, 440);
fill(248, 255, 41);
triangle(385, 410, 390, 355, 395, 390);
triangle(395, 390, 406, 370, 400, 440);
fill(255, 255, 255);
ellipse(370, 400, 30, 20);
ellipse(420, 400, 30,20);
fill(25, 168, 168);
ellipse(370, 401, 15, 15);
ellipse(420, 401, 15, 15);
fill(0, 0, 0);
ellipse(370, 399, 15, 15);
ellipse(420, 399, 15, 15);
noFill();
stroke(0, 0, 0);
arc(380, 420, 20, 20, 30, 180);
if(frameCount%300 < 30){
        stroke(50, 235, 235);
        fill(50, 235, 235);
        ellipse(370, 399, 30, 20);
        ellipse(420, 399, 30, 20);
        
    }
    popMatrix();
    
    
};
//}

var trailPart = function(x, y, s, clr) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.clr = clr;
    this.a = 255;
};

trailPart.prototype.draw = function() {
    this.s -= 2;
    this.a -= 5;
    noStroke();
    fill(this.clr, this.a);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.s, this.s);
    ellipseMode(CORNER);
};

var tps = [];

    

/** Buttons (NEW CODE)**/

var Button = (function () {
    // You need a button function and your arguments
    function Button (x, y, w, h, tsize, txt, clr, to) {
        
        // Now to make it so you can use the arguments, you have to write 'this.' then the argument's name then " = " then the name again.
        
        // For the positions
        this.x = x;
        this.y = y;
        
        // For the width and height
        this.w = w;
        this.h = h;
        this.addw = 100;
        // color for stuff
        this.arr = color(0, 176, 255);
        this.tclr = color(255, 255, 255);
        
        
        // For the text
        this.txt = txt;
        this.tsize = tsize;
        
        // For the color
        this.clr = clr;
        this.opac = 0;
        
        
        this.to = to;
        
        // If your mouse is over the button or not
        this.mouseOver = false;
        
        // If you can click the button or not
        this.canClick = false;
        
        
        
    }
    
    // Now for the other functions
    Button.prototype = {
        hover: function () {
            return (this.mouseOver = mouseX >= this.x - (this.w + this.addw) / 2 && mouseX <= this.x + (this.w + this.addw) / 2 && mouseY >= this.y - this.h / 2 && mouseY <= this.y + this.h / 2);
        },
        click: function () {
            if (this.hover() && mouseIsPressed && this.canClick) {
                trans.active = true;
                trans.nextScene = this.to;
                
                this.canClick = false;
            }
            if (!mouseIsPressed) {
                this.canClick = true;
                
            }
        },
        
        // Now to design the button
        display: function () {
        
    
            // Align the rect to the center, otherwise the mouse collision won't work
            rectMode(CENTER);
            stroke(this.arr);
        fill(this.clr);
        rect(this.x, this.y, this.w + this.addw, this.h);
        fill(this.tclr);
    textSize(this.tsize);
    textFont(createFont("Kristen ITC"));
    textAlign(CENTER, CENTER);
    text(this.txt, this.x, this.y);
            
            
            
            
        },
        
        // Now for just a simple function for changing the cursor
        cursor: function () {
            if (this.hover()) {
                cursor("pointer");
                this.addw = lerp(this.w, 50, 0.2);
                this.arr = color(255, 136, 0);
                this.tclr = color(96, 71, 255);
                }else{
                    this.addw = lerp(this.w, 0, 0.2);
                    this.arr = color(0, 176, 255);
                    this.tclr = color(255, 255, 255);
                }
            
        },
        
        // Now time to run all the functions together to make it easier to call all the functions
        run: function () {
            this.display();
            this.cursor();
            this.click();
        }
    };
    
    // Now to return the button. If you don't do this, you can't access anything inside here
    return Button;
})();
var Switch = (function () {
    /** Made by Ace Rogers (@AmericanGuard) **/
    function Switch (x, y, s, rad, action) {
        
        // This is for the x position
        this.x = x;
        
        // This is for the y position
        this.y = y;
        
        // This is for the size of the switch
        this.s = s;
        
        // This is for the switch's radius
        this.rad = rad;
        
        this.action = action;
        
        // This is for the circle of the switch
        this.circleX = -this.s / 4;
        
        // These are for the color of the circle
        this.clrs = [255, 0];
        
        // This is for the color of the switch
        this.rectClr = 100;
        
        // This is for if it's flipped on or not
        this.flipped = false;
        
        // This is for if the mouse is over the switch or not
        this.mouseOver = null;
        
    }
    Switch.prototype = {
        collide: function () {
            // The mouse collision with the switch
            return (this.mouseOver = mouseX >= this.x - this.s / 2 &&
                                     mouseX <= this.x + this.s / 2 &&
                                     mouseY >= this.y - this.s / 4 &&
                                     mouseY <= this.y + this.s / 4);
        },
        clicked: function () {
            // If mouse is over the switch, then...
            if (this.mouseOver) {
                // ...Make it flip to the opposite of what it was
                this.flipped = !this.flipped;
                
            }
        },
        display: function () {
            
            // Making it have no stroke
            noStroke();
            
            // The rect of the switch
            fill(this.rectClr);
            
            // Setting the rect to be drawn at the center
            rectMode(CENTER);
            
            // The rect of the switch
            rect(this.x, this.y, this.s, this.s / 2, this.rad);
            
            // The color of the inner square/circle
            fill(this.clrs[0], this.clrs[1], 0);
            
            // The inner square/circle of the switch
            rect(this.x + this.circleX, this.y, this.s / 8, this.s / 8, this.rad / 4);
            
            // Makes it have no fill
            noFill();
            
            // The stroke color of the outer square/circle
            stroke(this.clrs[0], this.clrs[1], 0);
            
            // Sets the stroke weight
            strokeWeight(5);
            
            // The outer square/circle of the switch
            rect(this.x + this.circleX, this.y, this.s / 3.1, this.s / 3.1, this.rad / 2);
            
        },
        hover: function () {
            // If the mouse is hovering over the switch, then...
            if (this.mouseOver) {
                // Change the cursor to the pointer
                cursor("pointer");
                // And change the rect color to be brighter
                this.rectClr = lerp(this.rectClr, 150, 0.2);
            } else {
                // Else, change the rect color back to normal
                this.rectClr = lerp(this.rectClr, 100, 0.2);
            }
        },
        func: function () {
            if(this.action === 0){
                crt = true;
            }else{
                crt = false;
            }
            if(this.action === 1){
                crt2 = true;
            }
            if(this.action === 2){
                crt3 = true;
            }
            if(this.action === 3){
                Sound = true;
            }
            
        },
        reset: function(){
            if(this.action === 0){
            crt = false;
            }
            if(this.action === 1){
            crt2 = false;
            }
            if(this.action === 2){
            crt3 = false;
            }
            if(this.action === 3){
                Sound = false;
            }
        },
        flip: function () {
            // If you flipped it on, then...
            if (this.flipped) {
                // Make the circle go to the right of the switch
                this.circleX = lerp(this.circleX, this.s / 4, 0.2);
                // Change the red of the circle go to 0
                this.clrs[0] = lerp(this.clrs[0], 0, 0.2);
                // Change the green of the circle go to 255
                this.clrs[1] = lerp(this.clrs[1], 255, 0.2);
                // This activates the function
                if (this.circleX <= this.s / 8) {
                    this.func();
                }
            } else if (!this.flipped) {
                // Else if you flipped it off, then...
                // Make the circle go back to the left of the switch
                this.circleX = lerp(this.circleX, -this.s / 4, 0.2);
                // Make the red of the circle go to 255
                this.clrs[0] = lerp(this.clrs[0], 255, 0.2);
                // Makes the green of the circle go to 0
                this.clrs[1] = lerp(this.clrs[1], 0, 0.2);
                this.reset();
            }
        },
        run: function () {
            // Runs (almost) everything, into one function
            this.collide();
            this.display();
            this.hover();
            this.flip();
        }
    };
    return Switch;
})();
var Bluey = function(x, y, s, rotat, id){
    if(id !== 1){
    noStroke();
    pushMatrix();
    translate(x, y);
    scale(s);
    rotate(rotat);
    fill(0, 0, 200);
    ellipse(0, 0, 80, 80);
    fill(255);
    ellipse(-18, -10, 30, 30);
    ellipse(+20, -10, 30, 30);
    fill(0);
    ellipse(-18, -10, 15, 15);
    ellipse(+20, -10, 15, 15);
    fill(0, 221, 255);
    ellipse(0, +10, 15, 15);
    fill(255, 0, 0);
    arc(+10, +25, 20, 20, 340, 543);
    if(frameCount%300 < 30){
        fill(0, 0, 200);
        ellipse(-18, -10, 30, 30);
    ellipse(+20, -10, 30, 30);
        
    }
    popMatrix();
}
if(id === 1){
    noStroke();
    pushMatrix();
    translate(x, y);
    scale(s);
    rotate(rotat);
    fill(0, 0, 200);
    ellipse(0, 0, 80, 80);
    fill(255);
    ellipse(-18, -10, 30, 30);
    ellipse(+20, -10, 30, 30);
    fill(0);
    ellipse(-18, -10, 15, 15);
    ellipse(+20, -10, 15, 15);
    fill(0, 221, 255);
    ellipse(0, +10, 15, 15);
    noFill();
    stroke(0);
    arc(+10, +25, 20, 20, -10, 113);
    if(frameCount%300 < 30){
        noStroke();
        fill(0, 0, 200);
        ellipse(-18, -10, 30, 30);
    ellipse(+20, -10, 30, 30);
        
    }
    popMatrix();
}

};


var irot = 0;
var irot2 = 0;
var ibx = 0;
var ibx2 = 0;
var intimer = 0;

var kac = color(255, 255, 255);
var kac2 = color(255, 255, 255);
var kac3 = color(255, 255, 255);


var island1 = function(x, y, s){
    //{
    pushMatrix();
    translate(x, y);
    scale(s);
fill(9, 133, 0);
beginShape();
vertex(500, 500);
vertex(500, 500);
vertex(98, 500);
vertex(120, 490);
vertex(125, 486);
vertex(161, 467);
vertex(174, 497);
vertex(164, 467);
vertex(176, 442);
vertex(184, 453);
vertex(194, 467);
vertex(205, 471);
vertex(214, 471);
vertex(225, 482);
vertex(231, 482);
vertex(245, 453);
vertex(253, 458);
vertex(262, 428);
vertex(273, 418);
vertex(273, 428);
vertex(286, 428);
vertex(296, 428);
vertex(316, 422);
vertex(346, 419);
vertex(372, 419);
vertex(387, 423);
vertex(397, 432);
vertex(411, 432);
vertex(422, 445);
vertex(442, 455);
vertex(458, 462);
vertex(464, 474);
vertex(475, 482);
vertex(501, 499);

endShape();

fill(6, 181, 6);
ellipse(-300, 490, 50, 50);
ellipse(-260, 490, 50, 50);
ellipse(-240, 480, 60, 60);
ellipse(-340, 480, 60, 60);
ellipse(-380, 480, 60, 60);
ellipse(-205, 490, 40, 40);

popMatrix();
//}
};
var emblem = function(x, y, s, rot){
    
    
    var helpx = 100;
    pushMatrix();
    translate(x, y);
    rotate(rot);
    scale(s);
    
    
    
    fill(255);
    rect(-200, -80, 100, 100);
    rect(-250, -110, 100, 100);
    rect(-290, -150, 100, 100);
    rect(-230, -30, 100, 100);
    rect(-190, 50, 100, 80);
    rect(200-helpx, -80, 100, 100);
    rect(250-helpx, -110, 100, 100);
    rect(290-helpx, -150, 100, 100);
    rect(230-helpx, -30, 100, 100);
    rect(190-helpx, 50, 100, 80);
    
    
    strokeCap(ROUND);
    strokeWeight(5);
    stroke(108, 36, 252);
    fill(0);
    ellipse(0, 0, 250, 250);
    noStroke();
    
    
    noFill();
    strokeWeight(34);
    stroke(255, 204, 0);
    ellipse(0, 0, 280, 280);
    strokeWeight(5);
    stroke(108, 36, 252);
    ellipse(0, 0, 320, 320);
    
    
    noStroke();
    fill(0, 0, 200);
    rect(-100, -110, 10, 10);
    rect(90, -110, 10, 10);
    rect(-10, -145, 10, 10);
    rect(-100, 100, 10, 10);
    rect(90, 100, 10, 10);
    rect(0, 135, 10, 10);
    rect(-145, -10, 10, 10);
    rect(135, -10, 10, 10);
    
    
    pushMatrix();
    rotate(-19);
    fill(255, 0, 0);
    rect(-230, 30, 90, 50);
    fill(255);
    rect(-230, 45, 90, 20);
    popMatrix();
    pushMatrix();
    rotate(19);
    fill(255, 0, 0);
    rect(140, 30, 100, 50);
    fill(255);
    rect(140, 45, 100, 20);
    popMatrix();
    
    
    fill(255, 0, 0);
    rect(-130, 60, 260, 80);
    fill(255, 255, 255);
    rect(-130, 80, 260, 40);
    fill(0, 0, 255);
    ellipse(-110,98, 40, 40);
    ellipse(110,98, 40, 40);
    
    
    
    popMatrix();
    
    
    
};
var TText = function(x, y, s){
    pushMatrix();
    translate(x, y);
    scale(s);
    
    fill(0, 0, 255);
    textSize(50);
    textAlign(CORNER);
    image(GradientM, -15, -40);
    image(GradientM2, 15, -20);
    
    
    
    image(GradientM3, 35, 40);
    
    popMatrix();
    
};
var iBluey = function(x, y, s, rotat){
    noStroke();
    pushMatrix();
    translate(x, y);
    scale(s);
    rotate(rotat);
    fill(0, 0, 200);
    ellipse(0, 0, 80, 80);
    fill(255);
    ellipse(-18, -10, 30, 30);
    ellipse(+20, -10, 30, 30);
    fill(0);
    ellipse(-18, -10, 15, 15);
    ellipse(+20, -10, 15, 15);
    fill(0, 221, 255);
    ellipse(0, +10, 15, 15);
    fill(255, 0, 0);
    arc(+10, +25, 20, 20, 340, 543);
    if(frameCount%300 < 30){
        fill(0, 0, 200);
        ellipse(-18, -10, 30, 30);
    ellipse(+20, -10, 30, 30);
        
    }
    popMatrix();
};
var Ctri = function(x,y,s, color){
    pushMatrix();
    translate(x, y);
    scale(s);
    fill(color);
    triangle(199, 124, 250, 212, 150, 212);
    popMatrix();
};
var iBolty = function(x, y, s, rotat){
    pushMatrix();
    translate(x, y);
    scale(s);
    rotate(rotat);
    fill(25, 168, 168);
    ellipse(0, 0, 90, 90);
    fill(50, 235, 235);
    ellipse(0, 0, 90, 85);
    image(Boltyslightning, -11, -40);
fill(255, 255, 255);
ellipse(25, 0, 30, 20);
ellipse(-25, 0, 30,20);
fill(25, 168, 168);
ellipse(25, 1, 15, 15);
ellipse(-25, 1, 15, 15);
fill(0, 0, 0);
ellipse(25, 0, 15, 15);
ellipse(-25, 0, 15, 15);
noFill();
strokeWeight(3);
stroke(0, 0, 0);
arc(-15, 20, 20, 20, 30, 180);
popMatrix();
    
};
var kalogo = function(x, y, s){
    pushMatrix();
    translate(x, y);
    scale(s);
   
    strokeCap(ROUND);
    strokeWeight(9);
    stroke(kac);
    fill(kac);
   
    rect(-92, -77, 164 ,103);
   
    pushMatrix();
    rotate(62);
    rect(-111, -55, 167 ,103);
    popMatrix();
   
    pushMatrix();
    rotate(-61);
    rect(-67, -70, 167 ,103);
    popMatrix();
   
       
    line(80, -80, 80, 30);
    line(-10, 80, -100, 30);
    line(-100, 30, -100,-80);
    line(-10,-130, 80, -80);
    line(-10, 80, 80, 30);
    line(-10,-130, -100, -80);
    
    

    pushMatrix();
    strokeWeight(17);
    scale(0.63);
    fill(kac2);
    translate(-126, -27);
    beginShape();
    curveVertex(-21,-60); 
    curveVertex(68,5); 
    curveVertex(107,118);
    curveVertex(24,78);
    curveVertex(-21,18);
    curveVertex(-21,-60);
    curveVertex(68,5);
    curveVertex(107,118);
    endShape();
    popMatrix();
    
    
    pushMatrix();
    strokeWeight(17);
    scale(0.63);
    fill(kac2);
    translate(72, -38);
    rotate(75);
    beginShape();
    curveVertex(-21,-60); 
    curveVertex(68,5); 
    curveVertex(107,118);
    curveVertex(24,78);
    curveVertex(-21,18);
    curveVertex(-21,-60);
    curveVertex(68,5);
    curveVertex(107,118);
    endShape();
    popMatrix();
    
    
    ellipse(-12, -55, 70, 70);
    
    var f = createFont("monospace");
    textFont(f);
    
    textSize(145);    
    fill(kac3);
    text("Khan", 128, -80, 6020, 4190);
    text("Academy", 525, -80, 6020, 4190);    
    popMatrix();
    
};



var KAIntro = function(){
    intimer ++;
    background(0);
    
    kalogo(300, 300, 0.2);
    noStroke();
    fill(0, 0, 200, 200);
    rect(ibx-880, 265, 800, 70);
    fill(50, 235, 235, 200);
    rect(ibx2+890, 265, 800, 70);
    iBluey(ibx + -100, 300, 1, irot);
    iBolty(ibx2 + 900, 300, 0.8, irot2);
    
    ibx = ibx + 10;
    
    
    
    if(ibx > 600){
    kac = color(0, 0, 200);
    kac3 = color(0, 0, 200);
    }
    
    if(intimer > 100){
    ibx2 = ibx2 - 10;
    }
    if(intimer > 180){
        kac = color(21, 212, 158);
        kac3 = color(0, 22, 120);
    }
    if(intimer > 220){
        scene = "Logo";
    }
    
    
    irot+=5;
    irot2-=5;
    
    
    
};

var emx = -100;
var emrot = 0;
var itime = 0;
var transp2 = 0;
var clx = 0;
var clx2 = 0;
var clx3 = 0;
var clx4 = 0;

var distext = "This is a non profit freeware KA project that has no association with any other official game owned outside \nof KA. All assets are owned by their respective owners, and to their respective programs\n All sprites, backgrounds and music are by their respective owners. This is a final prototype \nrelease of Bluey 2 but still has notable bugs and unfinished stuff. Bugs should be reported in T&T\n and addition suggestions should be reported in Questions. Footage of this software is allowed as long as its \nnot stolen. Bluey The Circle is owned by RomanStarCoder and any other characters are also. This will be \nupdated more often and will be more public within KA. Any unfinished stuff should be fixed in a newer\n update or DLC. ";
var disclaimer = function(){
    
    blogo(150, 100);
    
    fill(0, 0, 0, 50);
    rect(0, 0, width, height);
    
    fill(224, 224, 224);
    textSize(40);
    text("⁎⁎Disclaimer⁎⁎", 250, 50);
    
    fill(138, 138, 255);
    textSize(30);
    text("@RomanStarCoder 2024",250, 400);
    fill(0, 255, 230);
    textSize(25);
    text("Press space to continue", 250, 500);
    
    fill(255, 0, 115);
    textSize(14.9);
    text(distext, 20, 100);
    
    if(keys[32]){
        scene = "Btitle";
    }
    
    
};

var intro = function(){
    itime++;
    background(0);
    
    
    emblem(emx, 300, 1, emrot);
    
    
    emx = emx + 3;
    
    emrot++;
    emrot += 2;
    
    if(emx > 400){
        emx = 400;
        emrot = 0;
    }
    if(itime > 300){
        transp2 += 3;
        fill(255, 255, 255, transp2);
        rect(0, 0, width, height);
    }
    
    if(itime > 400){
        scene = "Title";
        
    }
    
};

var trans = {
    active: false, // If this is true, then the animation will play.
    out: false, // Play the animation going out if this is true, otherwise play the animation coming in.
    nextScene: '', // Which scene is next?
    w: 800 // Width of transition rectangle
    
    // NOTE: This transition just makes a rectangle cover the screen, and then uncover it. For more complicated transitions, you'd have more variables in here.
};

var transp3 = 0;

var TitleBG = function(){
    background(0); // Space BG
    image(titlestarz, 0, 0); // Stars
// Sky Gradient(s) {
gradientt(0, 50, 800, 150, color(0), color(67, 35, 196), 0.3);

gradientt(0, 200, 800, 150, color(67, 35, 196), color(168, 50, 252, 200), 1);
gradientt(0, 350, 800, 100, color(168, 50, 252, 200), color(77, 215, 250, 200), 1);
gradientt(0, 450, 800, 50, color(77, 215, 250, 200), color(252, 252, 119), 1);
gradientt(0, 500, 800, 50, color(252, 252, 119), color(234, 245, 19), 1);
//}

// Death Cube {
pushMatrix();
rotate(25);
fill(84, 84, 84, 150);
rect(130, 10, 200,200);

popMatrix();
//}

// Rigid Rock {
noStroke();
image(titlemounts, 250, 320, 200, 200);
//}

// Dusty Desert + Mechanical Madness{
image(dune, 170, 450, 100, 100);
pushMatrix();
scale(-1, 1);
image(dune, -170, 450, 100,100);
popMatrix();

fill(148, 148, 148);
rect(200, 430, 20, 60);
fill(255, 0, 0);
rect(200, 440, 20, 5);
rect(200, 455, 20, 5);
fill(255, 255, 255, 100);
rect(210, 430, 10, 60);

noFill();
strokeWeight(2);
stroke(158, 158, 158);
rect(230, 440, 10, 50);
rect(180, 420, 10, 50);


image(dune, 110, 500, 50, 50);
pushMatrix();
scale(-1, 1);
image(dune, -110, 500, 50, 50);
popMatrix();
noStroke();
//}

// Casino Central {
noFill();
strokeWeight(1);
stroke(random(255), random(255), random(255));
rect(600, 380, 10, 5, 3);
rect(550, 380, 20, 15, 3);
rect(650, 380, 30, 10, 3);
rect(640, 410, 10, 30, 3);
rect(700, 420, 15, 15, 3);


noStroke();
image(MZB, 600, 400, 30, 60);
image(MZB, 550, 400, 30, 60);
image(MZB, 650, 450, 30, 60);
//}

islandC(-40, -250, 1.6); // Main Island

// Teal Trench + Emerald Expanse {
fill(0);
ellipse(570, 440, 30, 10);

image(titleEEZ, 150, 462, 200, 100);
//}

// Aluminum Acropolis {
image(AAZBGA3B, 450, 450, 300, 100);
image(AAZBGA3, 550, 450, 200, 100);
//}

// Working Woods {
tree4(400, 500, 6);
tree4(500, 500, 6);
tree4(370, 500, 3, 0);
tree4(420, 500, 3, 20);
tree4(470, 500, 4);
tree4(530, 500, 4, -29);

fill(15, 199, 12);
ellipse(370, 530, 60, 60);
ellipse(400, 530, 60, 60);
ellipse(430, 530, 60, 60);
ellipse(460, 530, 60, 60);
ellipse(490, 530, 60, 60);
ellipse(530, 530, 60, 60);
fill(8, 150, 3);
ellipse(310, 530, 50, 50);
ellipse(340, 530, 50, 50);
ellipse(370, 530, 50, 50);
ellipse(400, 530, 50, 50);
ellipse(430, 530, 50, 50);
ellipse(460, 530, 50, 50);
ellipse(490, 530, 50, 50);
ellipse(530, 530, 50, 50);
ellipse(560, 530, 50, 50);
ellipse(590, 530, 50, 50);
//}


//ice planet (Isolated Icebergs) {
strokeWeight(3);
stroke(255, 200);
noFill();
arc(750, 200, 160, 11, 180, 363);
noStroke();
fill(26, 0, 255);
ellipse(750, 200, 90, 90);
fill(0, 60, 255);
arc(750, 200, 90, 90, 362, 540);
strokeWeight(3);
stroke(255, 200);
noFill();
arc(750, 200, 160, 11, 0, 180);
noStroke();
//}


fill(247, 247, 129, 200);
//rect(0, 550, 800, 10);
fill(12, 196, 242);
//rect(0, 560, 800, 20);
fill(12, 103, 240, 200);
rect(0, 550, 800, 50);// Ocean
};

var Bx2 = 420;
var Bx3 = 480;
var Bx4 = -100;
var titlerot2 = 0;
var titletime = 0;

var Title = function(){
ttrans -= 5;
titletime++;

TitleBG();

emblem(400, 300, 1);
Bluey(Bx2, Bx, 2, titlerot, 0);
iBolty(Bx3, Bx4, 1.7, titlerot2);
TText(335, 400, 1);


fill(0, 0, 0);
textSize(25);
text(Version, 660, 20);

fill(255, 255, 255, ttrans);
rect(0, 0, width, height);




titlerot++;
titlerot += 0.1;
titlerot2 += 0.1;
titlerot2 ++;
islandsx = islandsx - 0.07;
Bx = Bx + 9;

if(Bx > 300){
    Bx = 300;
}
if(Bx4 > 300){
    Bx4 = 300;
}
if(titletime > 100){
    Bx2 -= 5;
}
if(Bx2 < 320){
    Bx2 = 320;
}
if(titletime > 150){
    titlerot = 0;
    Bluey(Bx2, Bx, 2, titlerot, 1);
    Bx4 = Bx4 + 9;
}
if(titletime > 200){
    titlerot2 = 0;
}

if(frameCount%30 < 10){
fill(255, 221, 0);
textSize(20);
textFont(createFont("Arial Bold"));
text("Press Spacebar To Start", 300, 550);

}
fill(0, 0, 0, transp3);
    rect(0, 0, width, height);


if(keys[32]){
    
    trans.active = true;
    trans.nextScene = "Menu";
    musicchanged = true;
    titletime = 0;
    ttrans = 255;
    Bx2 = 420;
    Bx3 = 480;
    Bx4 = -100;
    
}

};

var play = new_.call(Button, 600, 200, 200, 100, 40, "Play", color(0, 0, 255), "SaveF");
var Exit = new_.call(Button,600, 500, 200, 100, 40, "Exit", color(0, 0, 255), "Title");
var Options = new_.call(Button,600, 306, 200, 100, 40, "Options", color(0, 0, 255), "Options");
var Extras = new_.call(Button,600, 406, 200, 100, 40, "Extras", color(0, 0, 255), "E1");
var Back = new_.call(Button,180, 550, 200, 100, 40, "Back", color(0, 0, 255), "Menu");
var Back2 = new_.call(Button,90, 560, 100, 50, 40, "Back", color(0, 0, 255), "E1");
var Back3 = new_.call(Button,400, 560, 100, 50, 40, "Back", color(0, 0, 255), "Menu");
var Back4 = new_.call(Button,400, 560, 100, 50, 40, "Back", color(0, 0, 255), "E1");
var AntiA = new Switch(100, 100, 150, 5, 0);
var AntiA2 = new Switch(100, 220, 150, 5, 1);
var AntiA3 = new Switch(100, 320, 150, 5, 2);
var SoundS = new Switch(300, 100, 150, 5, 3);

var TB = new_.call(Button,150, 300, 200, 100, 40, "Time Attack", color(255, 115, 0), "TA"); 
var UN = new_.call(Button,600, 300, 200, 100, 40, "Modes + Extras", color(255, 115, 0), "Unlockables"); 
var CH = new_.call(Button,350, 200, 200, 100, 40, "Challenges", color(255, 115, 0), "CMode"); 
var Ct = new_.call(Button ,600, 200, 200, 100, 40, "Continue", color(0, 0, 255), "Play");
var Fil1 = new_.call(Button,100, 100, 50, 50, "CRT Sharp", color(0, 0, 255), "Menu");

var Mrot = 0;
var mcx = 0;
var mcy = 0;

var mcr = 0;
var UNpallete = [
    color(255, 0, 0),
    color(0, 255, 0),
];


var isunlock = "Locked";
var isunlock2 = "Locked";


var unhover = true;
var unhover2 = false;
var unhover3 = false;
var unhover4 = false;
var unhover5 = false;

var pagez = 0;

var spagez = 0;
var pagez2 = 0;
var pagez3 = 0;
var pagez4 = 0;
var pagez5 = 0;

var infscreen = 0;
var infscreen2 = 0;

var MenuBG = function(){
    
    background(10, 68, 245);
    fill(8, 113, 250);
rect(0, 360, width, 20);
fill(15, 201, 252);
rect(0, 380, width, 20);
    fill(0, 0, 255, 220);
    rect(0, 400, width, 300);
    
    island1(-100, -100, 1.7, 1);
    fill(0, 153, 255);
ellipse(450, 200, 90, 90);
fill(0, 106, 255);
arc(450, 200, 90, 90, 362, 540);
strokeWeight(5);
stroke(255, 255, 255, 200);
noFill();
ellipse(450, 200, 160, 11);
noStroke();

pushMatrix();
rotate(30);
fill(125, 125, 125, 150);
rect(150, -50, 150, 150);
popMatrix();

fill(255, 255, 255, 100);
rect(clx+50, 430, 50, 10, 7);
rect(clx+150, 430, 50, 10, 7);
rect(clx+250, 430, 50, 10, 7);
rect(clx+350, 430, 50, 10, 7);
rect(clx+450, 430, 50, 10, 7);
rect(clx+550, 430, 50, 10, 7);
rect(clx+650, 430, 50, 10, 7);
rect(clx+750, 430, 50, 10, 7);

rect(clx2+5030, 470, 50, 10, 7);
rect(clx2+150-30, 470, 50, 10, 7);
rect(clx2+250-30, 470, 50, 10, 7);
rect(clx2+350-30, 470, 50, 10, 7);
rect(clx2+450-30, 470, 50, 10, 7);
rect(clx2+550-30, 470, 50, 10, 7);
rect(clx2+650-30, 470, 50, 10, 7);
rect(clx2+750-30, 470, 50, 10, 7);

rect(clx3+50+40, 510, 50, 10, 7);
rect(clx3+150+40, 510, 50, 10, 7);
rect(clx3+250+40, 510, 50, 10, 7);
rect(clx3+350+40, 510, 50, 10, 7);
rect(clx3+450+40, 510, 50, 10, 7);
rect(clx3+550+40, 510, 50, 10, 7);
rect(clx3+650+40, 510, 50, 10, 7);
rect(clx3+750+40, 510, 50, 10, 7);

rect(clx4+50+40, 560, 50, 20, 7);
rect(clx4+150+40, 560, 50, 20, 7);
rect(clx4+250+40, 560, 50, 20, 7);
rect(clx4+350+40, 560, 50, 20, 7);
rect(clx4+450+40, 560, 50, 20, 7);
rect(clx4+550+40, 560, 50, 20, 7);
rect(clx4+650+40, 560, 50, 20, 7);
rect(clx4+750+40, 560, 50, 20, 7);





clx-=0.2;
clx2 -= 0.3;
clx3 -= 0.4;
clx4 -= 0.5;

if(clx < -100){
    clx = 0;
}
if(clx2 < -100){
    clx2 = 0;
}
if(clx3 < -100){
    clx3 = 0;
}
if(clx4 < -100){
    clx4 = 0;
}



    
};
var Menu = function(){
    MenuBG();
    noStroke();
    fill(255, 255, 255, 0);
    rect(0, 0, width, height);
    
    iBluey(400, 300, 7, Mrot);
    
    Mrot ++;
    
    fill(235, 235, 235, 50);
    rect(0, 0, width, height);
    
    strokeWeight(3);
    stroke(168, 165, 250, 150);
    for(var i=0; i<20; i++){
            line(i*40,0,i*40,height);
        }
        for(var i=0; i<20; i++){
            line(0,i*40,width,i*40);
        }
    strokeWeight(6);
    for(var i = 0; i < 10; i++){
        
        stroke(0, 255, 0);
        fill(0, 255, 0);
        rect(i * 9 * 5 * 2, 290, 40, 4);
        stroke(0, 0, 255);
        fill(0, 0, 255);
        rect(i * 9 * 5 * 2, 120, 40, 4);
        stroke(255, 0, 0);
        fill(255, 0, 0);
        rect(i * 9 * 5 * 2, 450, 40, 4);
        
    }
    
    
    play.run();
    Exit.run();
    Options.run();
    Extras.run();
    noStroke();
    rectMode(ROUND);
    pushMatrix();
    rotate(-20);
    fill(3, 153, 26);
    rect(-40, 0, 300, 100);
    
    popMatrix();
    strokeWeight(3);
    stroke(0);
    fill(255, 196, 0);
    ellipse(0, 500, 300, 300);
    pushMatrix();
translate(mcx, mcy+500);
rotate(mcr);
strokeWeight(2);
stroke(0);
fill(255, 255, 0);
ellipse(100, 100, 50, 50);
ellipse(60, 140, 50, 50);
popMatrix();

mcr+=1;
    noStroke();
    fill(0, 21, 255);
    rect(200, 20, 300, 60, 5);
    fill(255, 196, 0);
    header("MENU", 350, 20, 60, 0, 0, 2);
    
    fill(0, 0, 200);
    textSize(20);
    textFont(createFont("Impact Bold"));
    text("Bluey The Circle 2", 680, 590);
    fill(0, 176, 255);
    text("ブルーイ・ザ・サークル", 660, 20);
    if(play.hover()){
        fill(0);
        textSize(20);
        textFont(createFont("Trebuchet MS Bold"));
        text("Play the main game here! You \ncan play other game \nmodes and enable unlockables to \ncustomize your experience!", 200, 200);
    }
    if(Options.hover()){
        fill(0);
        textSize(20);
        textFont(createFont("Trebuchet MS Bold"));
        text("Options & Settings \n (Filters, Sound, etc)", 200, 300);
    }
    if(Extras.hover()){
        fill(0);
        textSize(20);
        textFont(createFont("Trebuchet MS Bold"));
        text("Find other game modes, sprite settings,\n and unlockables here with the Challenge\n And Time Attack!", 200, 400);
    }
    if(Exit.hover()){
        fill(0);
        textSize(20);
        textFont(createFont("Trebuchet MS Bold"));
        text("Exit the game", 200, 500);
    }
    
    
};
var Optionz = function(){
     rectMode(CORNER);
     textAlign(CORNER, CORNER);
noStroke();
    background(255);
    noFill();
    stroke(69, 69, 69, 10);
    strokeWeight(1);
    
    for(var i = 0; i < width; i+=30)
    {
        for(var j = 0; j < width; j+=30)
        {
            rect(i - 10, j - 10, 50, 50);
        }
    }
    
    fill(180, 171, 245);
    gear(400, 280, 200, gearot, 8, 20, 1.3, 10);
    gear(100, 280, 100, gearot, 7, 20, 1.3, 10);
gear(700, 280, 100, gearot, 7, 20, 1.3, 10);
    
    gearot++;
    
    fill(180, 171, 245);
    rect(0, 450, width, 150);
    strokeWeight(sin(frameCount*5));
    stroke(0);
    Ctri(-50, 387, 0.3, color(180, 171, 245));
    Ctri(-20, 387, 0.3, color(180, 171, 245));
    Ctri(10, 387, 0.3, color(180, 171, 245));
    Ctri(40, 387, 0.3, color(180, 171, 245));
    Ctri(70, 387, 0.3, color(180, 171, 245));
    Ctri(100, 387, 0.3, color(180, 171, 245));
    Ctri(130, 387, 0.3, color(180, 171, 245));
    Ctri(160, 387, 0.3, color(180, 171, 245));
    Ctri(190, 387, 0.3, color(180, 171, 245));
    Ctri(220, 387, 0.3, color(180, 171, 245));
    Ctri(250, 387, 0.3, color(180, 171, 245));
    Ctri(280, 387, 0.3, color(180, 171, 245));
    Ctri(310, 387, 0.3, color(180, 171, 245));
    Ctri(340, 387, 0.3, color(180, 171, 245));
    Ctri(370, 387, 0.3, color(180, 171, 245));
    Ctri(400, 387, 0.3, color(180, 171, 245));
    Ctri(430, 387, 0.3, color(180, 171, 245));
    Ctri(460, 387, 0.3, color(180, 171, 245));
    Ctri(490, 387, 0.3, color(180, 171, 245));
    Ctri(520, 387, 0.3, color(180, 171, 245));
    Ctri(550, 387, 0.3, color(180, 171, 245));
    Ctri(580, 387, 0.3, color(180, 171, 245));
    Ctri(610, 387, 0.3, color(180, 171, 245));
    Ctri(640, 387, 0.3, color(180, 171, 245));
    Ctri(670, 387, 0.3, color(180, 171, 245));
    Ctri(700, 387, 0.3, color(180, 171, 245));
    Ctri(730, 387, 0.3, color(180, 171, 245));
    
    strokeWeight(3);
    stroke(255);
    line(200, 500, 150, 540);
    line(600, 500, 650, 540);
    stroke(180, 171, 245);
    line(200, 100, 150, 60);
    line(600, 100, 650, 60);
    
    
    noStroke();
    
    pushMatrix();
    rotate(-19);
    fill(255);
    rect(170, 600, 50, 50);
    popMatrix();
    pushMatrix();
    rotate(19);
    fill(180, 171, 245);
    rect(370, -95, 50, 50);
    
    popMatrix();
    
    pushMatrix();
    rotate(-20);
    fill(180, 171, 245);
    rect(-40, 0, 300, 100);
    popMatrix();
    
    fill(0, 0, 255);
    rect(0, 0, width, 30);
    bxarttri(500, 29, 1, color(0, 0, 255));
    rect(528, 30, 300, 40);
    
    header("Options", 650, 0, 60, 40, 0, 0);
    textFont(createFont("Verdana Bold"));
    textSize(20);
    fill(255);
    text("ゲームプレイの設定とオプション", 10, 20);
    fill(0, 0, 200);
    text("Bluey The Circle 2", 10, 590);
    text("ブルーイ・ザ・サークル2", 550, 590);
    fill(0);
    textFont(createFont("Trebuchet MS Bold"));
    textSize(15);
    text("CRT Sharp Filter 1", 40, 170);
    text("Sound", 280, 170);
    text("CRT Soft Filter 2", 40, 270);
    text("CRT Classic Filter 3", 40, 370);
    

mouseClicked = function(){

AntiA.clicked();
AntiA2.clicked();
AntiA3.clicked();
SoundS.clicked();
};

AntiA.run();
AntiA2.run();
AntiA3.run();
SoundS.run();


Back3.run();
//Fil1.run();
rectMode(CORNER);
    
};
var Extras1 = function(){
    rectMode(CORNER);
    textAlign(CORNER, CORNER);
    background(255);
    for (var j = 0; j < 30; j+=1) {
    for (var i = 0; i < 16; i+=1) {
        
        
        noStroke();
        fill(193, 240, 5);
        ellipse(j*30 + 20, i*30 + 20, (sin((frameCount*2+(j+i)*20))*8)+18, (sin((frameCount*2+(j+i)*20))*8)+18);
    }
}
    noStroke();
    fill(255, 255, 255, 100);
    rect(0, 0, 800, 600);
    
    textSize(700);
    fill(0);
    textFont(createFont("Arial Bold"));
    text("2", 210, 500);
    
    
    fill(255, 204, 0);
    rect(100, 450, width, 200);
    pushMatrix();
    rotate(-69);
    fill(3, 150, 0);
    rect(-560, 0, 200, height);
    
    popMatrix();
    pushMatrix();
    rotate(25);
    fill(255, 0, 0);
    rect(780, -200, 200, height+200);
    
    popMatrix();
    fill(0, 0, 255);
    rect(0, 550, width, 50);
    Ctri(-50, 487, 0.3, color(0, 0, 255));
    Ctri(-20, 487, 0.3, color(0, 0, 255));
    Ctri(10, 487, 0.3, color(0, 0, 255));
    Ctri(40, 487, 0.3, color(0, 0, 255));
    Ctri(70, 487, 0.3, color(0, 0, 255));
    Ctri(100, 487, 0.3, color(0, 0, 255));
    Ctri(130, 487, 0.3, color(0, 0, 255));
    Ctri(160, 487, 0.3, color(0, 0, 255));
    Ctri(190, 487, 0.3, color(0, 0, 255));
    Ctri(220, 487, 0.3, color(0, 0, 255));
    Ctri(250, 487, 0.3, color(0, 0, 255));
    Ctri(280, 487, 0.3, color(0, 0, 255));
    Ctri(310, 487, 0.3, color(0, 0, 255));
    Ctri(340, 487, 0.3, color(0, 0, 255));
    Ctri(370, 487, 0.3, color(0, 0, 255));
    Ctri(400, 487, 0.3, color(0, 0, 255));
    Ctri(430, 487, 0.3, color(0, 0, 255));
    Ctri(460, 487, 0.3, color(0, 0, 255));
    Ctri(490, 487, 0.3, color(0, 0, 255));
    Ctri(520, 487, 0.3, color(0, 0, 255));
    Ctri(550, 487, 0.3, color(0, 0, 255));
    Ctri(580, 487, 0.3, color(0, 0, 255));
    Ctri(610, 487, 0.3, color(0, 0, 255));
    Ctri(640, 487, 0.3, color(0, 0, 255));
    Ctri(670, 487, 0.3, color(0, 0, 255));
    Ctri(700, 487, 0.3, color(0, 0, 255));
    Ctri(730, 487, 0.3, color(0, 0, 255));
    
    pushMatrix();
    rotate(9);
    fill(0, 8, 255);
    rect(690, 310, 20, 20);
    rect(730, 310, 20, 20);
    rect(770, 310, 20, 20);
    rect(810, 310, 20, 20);
    strokeWeight(3);
    stroke(0);
    fill(255);
    rect(700, 300, 20, 20);
    rect(740, 300, 20, 20);
    rect(780, 300, 20, 20);
    rect(820, 300, 20, 20);
    
    popMatrix();
    noStroke();
    fill(255, 0, 0);
    ellipse(120, 445, 30, 30);
    fill(0, 155, 0);
    ellipse(750, 200, 20, 20);
    ellipse(720, 200, 20, 20);
    fill(255, 255, 0);
    ellipse(680, 200, 50, 50);
    
    stroke(0);
    fill(255);
    ellipse(110, 450, 30, 30);
    ellipse(675, 195, 50, 50);
    
    
    noStroke();
    
    fill(0, 0, 100);
    rect(0, 0, width, 40);
    bxarttri3(235, 18, 0.7, color(0, 0, 100));
    rect(0, 40, 265, 44);
    
    
    fill(255);
    textFont(createFont("Verdana Bold"));
    textSize(20);
    text("タイムアタック、チャレンジ、アンロック可能要素", 300, 30);
    fill(0, 0, 200);
    text("Bluey The Circle 2", 10, 590);
    text("ブルーイ・ザ・サークル2", 540, 590);
    header("Extras", 135, 12, 60, 45, 0, 0);
    if(TB.hover()){
        fill(0);
        textSize(20);
        textFont(createFont("Trebuchet MS Bold"));
        text("Race against the clock!", 20, 500);
    }
    if(CH.hover()){
        fill(0);
        textSize(20);
        textFont(createFont("Trebuchet MS Bold"));
        text("Test your skills!", 20, 500);
    }
    if(UN.hover()){
        fill(0);
        textSize(20);
        textFont(createFont("Trebuchet MS Bold"));
        text("See what you've found and what\n you can unlock! (Game modes, sprites, etc)", 20, 500);
    }
    
    
    
    
    
    Back3.run();
    TB.run();
    CH.run();
    UN.run();
    
};
var CMode = function(){
    rectMode(CORNER);
    textAlign(CORNER, CORNER);
    var lbgm = new PVector(0-width/2,(0-height/2));
    noStroke();
    lbgm.normalize();
    background(255);
    back.display();
    back.update(lbgm);
    noStroke();
    
    
    fill(0, 0, 255);
    rect(200, 200, 100, 300);
    rect(350, 170, 100, 300);
    rect(500, 140, 100, 300);
    
    strokeWeight(5);
    stroke(0);
    fill(255, 200, 0);
    ellipse(450, 330, 300, 300);
    noStroke();
    //fill(255, 0, 234);
    //ellipse(150, 130, 100, 100);
    fill(0, 255, 0);
    ellipse(650, 130, 100, 100);
    
    pushMatrix();
    rotate(-49);
    fill(12, 181, 4);
    rect(-400, 0, 300, height+100);
    popMatrix();
    pushMatrix();
    rotate(49);
    fill(255, 0, 0);
    rect(600, -550, 300, height+100);
    popMatrix();
    
    fill(0);
    rect(0, 500, width, 100);
    Ctri(-50, 437, 0.3, color(0));
    Ctri(-20, 437, 0.3, color(0));
    Ctri(10, 437, 0.3, color(0));
    Ctri(40, 437, 0.3, color(0));
    Ctri(70, 437, 0.3, color(0));
    Ctri(100, 437, 0.3, color(0));
    Ctri(130, 437, 0.3, color(0));
    Ctri(160, 437, 0.3, color(0));
    Ctri(190, 437, 0.3, color(0));
    Ctri(220, 437, 0.3, color(0));
    Ctri(250, 437, 0.3, color(0));
    Ctri(280, 437, 0.3, color(0));
    Ctri(310, 437, 0.3, color(0));
    Ctri(340, 437, 0.3, color(0));
    Ctri(370, 437, 0.3, color(0));
    Ctri(400, 437, 0.3, color(0));
    Ctri(430, 437, 0.3, color(0));
    Ctri(460, 437, 0.3, color(0));
    Ctri(490, 437, 0.3, color(0));
    Ctri(520, 437, 0.3, color(0));
    Ctri(550, 437, 0.3, color(0));
    Ctri(580, 437, 0.3, color(0));
    Ctri(610, 437, 0.3, color(0));
    Ctri(640, 437, 0.3, color(0));
    Ctri(670, 437, 0.3, color(0));
    Ctri(700, 437, 0.3, color(0));
    Ctri(730, 437, 0.3, color(0));
    
    
    fill(255);
    rect(680, 520, 20, 20);
    rect(710, 520, 20, 20);
    rect(740, 520, 20, 20);
    rect(50, 450, 20, 20);
    rect(20, 450, 20, 20);
    fill(0);
    rect(20, 90, 20, 20);
    rect(50, 90, 20, 20);
    rect(80, 90, 20, 20);
    rect(110, 90, 20, 20);
    rect(140, 90, 20, 20);
    
    fill(0, 0, 150);
    rect(0, 0, width, 40);
    bxarttri(560, 39, 1, color(0, 0, 150));
    rect(588, 40, 210, 39);
    
    fill(255);
    textFont(createFont("Verdana Bold"));
    textSize(20);
    text("Bluey The Circle 2", 10, 590);
    text("ブルーイ・ザ・サークル2", 550, 590);
    text("チャレンジモードであなたのスキルをテストしてください!", 10, 27);
    header("CHALLENGES", 680, 40, 30, 20, 0, 0);
    
     strokeWeight(3);
    stroke(0);
     fill(255);
    if(infscreen2 < 2){
    fill(0, 34, 255);
    }
    
    rect(150, 200, 200, 100);
    if(infscreen2 < 2){
    strokeWeight(5);
    stroke(255, 100, 0);
    fill(255, 255, 0);
    ellipse(310, 220, 30, 30);
    noStroke();
    }
    
    textFont(createFont("Impact Bold"));
    fill(0);
    textSize(30);
    text(lvlnames[level], 370, 200);
    fill(182, 0, 199);
    textSize(60);
    textFont(createFont("MS Sans Serif Bold"));
    text(wchallenge1[chlgesperlvl], 185, 170);
    textSize(20);
    text(challengeD[chlgesperlvl], 120, 330);
    
    
    if(keys[DOWN]){
        infscreen2++;
        level += 3;
    }
    if(keys[UP]){
        infscreen2--;
        level -= 3;
    }
    if(keys[68]){
        chlgesperlvl++;
    }
    if(keys[65]){
        chlgesperlvl--;
    }
    if(keys[32]){
        scene = "load";
        challengeM = true;
    }
    if(chlgesperlvl < 0){
       chlgesperlvl = 0; 
    }
    if(chlgesperlvl > 3){
        chlgesperlvl = 0;
    }
    if(infscreen2 < 0){
        infscreen2 = 0;
        level = 0;
    }
    if(infscreen2 > 33){
        infscreen2 = 33;
        level = 33;
    }
    
    switch(infscreen2){
        case 0:
            //{
            image(Get('Image4'), 180, 225, 40, 60);
        image(Get('Image1'), 150, 260, 20, 20);
        image(Get('Image1'), 170, 260, 20, 20);
        image(Get('Image1'), 190, 260, 20, 20);
        image(Get('Image1'), 210, 260, 20, 20);
        image(Get('Image1'), 230, 260, 20, 20);
        image(Get('Image1'), 250, 260, 20, 20);
        image(Get('Image7'), 150, 280, 20, 20);
        image(Get('Image7'), 170, 280, 20, 20);
        image(Get('Image7'), 190, 280, 20, 20);
        image(Get('Image7'), 210, 280, 20, 20);
        image(Get('Image7'), 230, 280, 20, 20);
        image(Get('Image7'), 250, 280, 20, 20);
        image(Get('Image7'), 270, 260, 20, 20);
        image(Get('Image7'), 290, 260, 20, 20);
        image(Get('Image7'), 270, 280, 20, 20);
        image(Get('Image5'), 290, 280, 20, 20);
        image(Get('EEslope2'), 270, 240, 20, 20);
        image(Get('EEslope1'), 290, 240, 20, 20);
        image(Get('ImageP'), 220, 200, 40, 60);
        image(Get('TotemPole3k'), 150, 205, 50, 60);
        
        
        image(brid, 309, 260, 10, 10);
        image(brid, 318, 260, 10, 10);
        image(brid, 327, 260, 10, 10);
        image(brid, 336, 260, 10, 10);
        //}
        //image(brid, 345, 260, 10, 10);
        
        break;
        case 1:
            //{
            image(Get('Image4'), 180, 225, 40, 60);
        image(Get('Image1'), 150, 260, 20, 20);
        image(Get('Image1'), 170, 260, 20, 20);
        image(Get('Image1'), 190, 260, 20, 20);
        image(Get('Image1'), 210, 260, 20, 20);
        image(Get('Image1'), 230, 260, 20, 20);
        image(Get('Image1'), 250, 260, 20, 20);
        image(Get('Image7'), 150, 280, 20, 20);
        image(Get('Image7'), 170, 280, 20, 20);
        image(Get('Image7'), 190, 280, 20, 20);
        image(Get('Image7'), 210, 280, 20, 20);
        image(Get('Image7'), 230, 280, 20, 20);
        image(Get('Image7'), 250, 280, 20, 20);
        image(Get('Image7'), 270, 260, 20, 20);
        image(Get('Image7'), 290, 260, 20, 20);
        image(Get('Image7'), 270, 280, 20, 20);
        image(Get('Image5'), 290, 280, 20, 20);
        image(Get('EEslope2'), 270, 240, 20, 20);
        image(Get('EEslope1'), 290, 240, 20, 20);
        image(Get('ImageP'), 220, 200, 40, 60);
        image(Get('TotemPole3k'), 150, 205, 50, 60);
        
        
        image(brid, 309, 260, 10, 10);
        image(brid, 318, 260, 10, 10);
        image(brid, 327, 260, 10, 10);
        image(brid, 336, 260, 10, 10);
        //}
        break;
        case 2:
           //{
            image(Get('Image4'), 180, 225, 40, 60);
        image(Get('Image1'), 150, 260, 20, 20);
        image(Get('Image1'), 170, 260, 20, 20);
        image(Get('Image1'), 190, 260, 20, 20);
        image(Get('Image1'), 210, 260, 20, 20);
        image(Get('Image1'), 230, 260, 20, 20);
        image(Get('Image1'), 250, 260, 20, 20);
        image(Get('Image7'), 150, 280, 20, 20);
        image(Get('Image7'), 170, 280, 20, 20);
        image(Get('Image7'), 190, 280, 20, 20);
        image(Get('Image7'), 210, 280, 20, 20);
        image(Get('Image7'), 230, 280, 20, 20);
        image(Get('Image7'), 250, 280, 20, 20);
        image(Get('Image7'), 270, 260, 20, 20);
        image(Get('Image7'), 290, 260, 20, 20);
        image(Get('Image7'), 270, 280, 20, 20);
        image(Get('Image5'), 290, 280, 20, 20);
        image(Get('EEslope2'), 270, 240, 20, 20);
        image(Get('EEslope1'), 290, 240, 20, 20);
        image(Get('ImageP'), 220, 200, 40, 60);
        image(Get('TotemPole3k'), 150, 205, 50, 60);
        
        
        image(brid, 309, 260, 10, 10);
        image(brid, 318, 260, 10, 10);
        image(brid, 327, 260, 10, 10);
        image(brid, 336, 260, 10, 10);
        //} 
        break;
        
        
        
        
    }
    switch(chlgesperlvl){
        case 0:
            C1 = true;
            C2 = false;
            C3 = false;
            C4 = false;
        break;
        case 1:
            C1 = false;
            C2 = true;
            C3 = false;
            C4 = false;
        break;
        case 2:
            C1 = false;
            C2 = false;
            C3 = true;
            C4 = false;
        break;
        case 3:
            C1 = false;
            C2 = false;
            C3 = false;
            C4 = true;
        break;
    }
    
    Back4.run();
    rectMode(CORNER);
};
// WIP of the unlock stuff
var UNlockables = function(){
    rectMode(CORNER);
    textAlign(CORNER, CORNER);
    image(UNLbg, 0, 0);
    
    noStroke();
    fill(66, 1, 1);
    rect(0, 0, 150, 600);
    
    if(unhover === true){
    stroke(255, 80, 0);
    rect(0, 80, 150, 30);
    }
    if(unhover2 === true){
    stroke(255, 80, 0);
    rect(0, 180, 150, 30);
    }
    if(unhover3 === true){
    stroke(255, 80, 0);
    rect(0, 280, 150, 30);
    }
    if(unhover4 === true){
    stroke(255, 80, 0);
    rect(0, 380, 150, 30);
    }
    if(unhover5 === true){
    stroke(255, 80, 0);
    rect(0, 480, 150, 30);
    }
    
    
    
    
    fill(102, 0, 255);
    textSize(20);
    textFont(UMF, 10);
    text("Bluey Sprites", 15, 100);
    text("Object Sprites", 7, 200);
    text("Window Mode", 15, 300);
    text("Titlecards", 15, 400);
    text("Game Modes", 15, 500);
    
    switch(pagez){
        case 0:
            unhover2 = false;
            unhover3 = false;
            unhover4 = false;
            unhover5 = false;
            unhover = true;
            fill(255);
            textFont(createFont("Impact Bold"));
            textSize(50);
            text("Bluey Sprites", 300, 100);
            
            
            if(keys[RIGHT]){
                spagez++;
            }
            if(keys[LEFT]){
                spagez--;
            }
            
            
            if(spagez > 2){
                spagez = 0;
            }
            if(spagez < 0){
                spagez = 2;
            }
            
            
            
            
        break;
        case 1:
            unhover = false;
            unhover2 = true;
            fill(255);
            textFont(createFont("Impact Bold"));
            textSize(50);
            text("Object Sprites", 300, 100);
            
            
            if(keys[RIGHT]){
                spagez++;
            }
            if(keys[LEFT]){
                spagez--;
            }
            
            
            if(spagez > 3){
                spagez = 0;
            }
            
            
            
            
        break;
        case 2:
            unhover = false;
            unhover2 = false;
            unhover3 = true;
            fill(255);
            textFont(createFont("Impact Bold"));
            textSize(50);
            text("Window Mode", 300, 100);
            
            
            if(keys[RIGHT]){
                spagez++;
            }
            if(keys[LEFT]){
                spagez--;
            }
            
            
            if(spagez > 3){
                spagez = 0;
            }
            
            
            
            
        break;
        case 3:
            unhover = false;
            unhover2 = false;
            unhover3 = false;
            unhover4 = true;
            fill(255);
            textFont(createFont("Impact Bold"));
            textSize(50);
            text("Titlecards", 300, 100);
            
            
            if(keys[RIGHT]){
                spagez++;
            }
            if(keys[LEFT]){
                spagez--;
            }
            
            
            if(spagez > 3){
                spagez = 0;
            }
            
            
            
            
        break;
        case 4:
            unhover = false;
            unhover2 = false;
            unhover3 = false;
            unhover4 = false;
            unhover5 = true;
            fill(255);
            textFont(createFont("Impact Bold"));
            textSize(50);
            text("Game Modes", 300, 100);
            
            
            if(keys[RIGHT]){
                spagez++;
            }
            if(keys[LEFT]){
                spagez--;
            }
            
            
            if(spagez > 3){
                spagez = 0;
            }
            
            
            
            
        break;
        
        
        
    }
    switch(spagez){
        case 0:
        iBluey2(490, 340, 0.7, unrot1, 0);
            unrot1++;
            
            textSize(20);
            fill(255);
            text("Bluey The Circle 2", 400, 400);
            
            
            
        break;
        case 1:
        iBluey2(490, 340, 1.1, unrot1, 1);
            unrot1++;
            
            textSize(20);
            fill(255);
            text("Bluey The Circle 1", 400, 400);
            fill(UNpallete[0]);
            text(isunlock, 450, 450);
        break;
        case 2:
        MyBluey1(490, 340, 0.6, unrot1, 1);
            unrot1++;
            
            textSize(20);
            fill(255);
            text("RedRaven9's Bluey sprites", 400, 400);
            fill(UNpallete[0]);
            text(isunlock, 450, 450);
        break;
        
        
    }
    
    if(keys[DOWN]){
        pagez++;
    }
    if(keys[UP]){
        pagez--;
    }
    if(pagez < 0){
        pagez = 0;
    }
    if(pagez > 4){
        pagez = 4;
    }
    
    Back2.run();
};

var Pause = function(){
    
  
    fill(8, 8, 245, 150);
    rect(0, 0, width, height);
    
    fill(0, 21, 255);
    rect(200, 20, 300, 60, 5);
    fill(255, 196, 0);
    header("Pause", 350, 20, 60, 0, 0, 2);
    Exit.run();
    Ct.run();
    rectMode(ROUND);
    
};

var lvlnames4 = ["Emerald Expanse zone 1", "Emerald Expanse zone 2", "Rigid Rock zone 1", "Rigid Rock zone 2"];


var ghostmode = ["Previous", "RomanStarCoder"];

var TimeAtt = function(){
    rectMode(CORNER);
    textAlign(CORNER, CORNER);
    noStroke();
    background(255);
    
    strokeWeight(3);
    stroke(0);
    fill(255);
    ellipse(200, 500, 300, 300);
    ellipse(500, 0, 300, 300);
    
    noStroke();
    pushMatrix();
    rotate(29);
    fill(180, 171, 245);
    rect(500, -400, 300, height+200);
    popMatrix();
    
    strokeWeight(1);
    clock(700, 400, 70, 2, 6);
    
    
    for(var i = 0; i < 14; i++){
    fill(255, 255, 0);
    rect(i * 9 * 7, 300, 40, 5, 10);
    fill(255, 0, 0);
    rect(i * 9 * 7, 10, 40, 5, 10);
    fill(0, 0, 255);
    rect(i * 9 * 7, 350, 40, 5, 10);
    fill(34, 255, 0);
    rect(i * 9 * 7, 380, 40, 4, 10);
    fill(242, 0, 255);
    rect(i * 9 * 7, 440, 40, 5, 10);
}
stroke(0, 255, 255);
noFill();
rect(500, 300, 50, 50);
stroke(0, 255, 0);
rect(400, 400, 50, 50);
stroke(255, 255, 0);
rect(100, 400, 50, 50);
stroke(0, 0, 255);
rect(100, 100, 50, 50);
stroke(255, 0, 255);
rect(300, 100, 50, 50);
noStroke();
fill(3, 161, 161);
rect(10, 570, 60, 30);
fill(0, 200, 255);
rect(120, 570, 60, 30);
fill(255, 0, 0);
ellipse(100, 50, 20, 20);
ellipse(130, 50, 20, 20);
ellipse(160, 50, 20, 20);
ellipse(190, 50, 20, 20);
fill(0, 255, 0);
ellipse(400, 50, 20, 20);
ellipse(400, 80, 20, 20);
ellipse(400, 110, 20, 20);
ellipse(400, 140, 20, 20);
ellipse(400, 170, 20, 20);
    
    strokeWeight(3);
    stroke(0);
    fill(255, 255, 0);
    ellipse(200, 100, 200, 200);
    fill(255, 0, 0);
    ellipse(300, 200, 200, 200);
    fill(0, 255, 0);
    ellipse(400, 300, 200, 200);
    fill(0, 0, 255);
    ellipse(500, 400, 200, 200);
    
    strokeWeight(1);
    
    noStroke();
    fill(19, 194, 6);
    rect(0, 500, width, 100);
    
    
    
    
    //fill(255, 0, 0);
    //clock(400, 300, 70, 1, 3);
    
    fill(0, 0, 255);
    rect(0, 0, 100, height);
    fill(50, 235, 235);
    rect(700, 0, 100, height);
    
    
    // Wall of triangle
    bxarttri4(76, -30, 0.7, color(0, 0, 255));
    bxarttri4(76, -10, 0.7, color(0, 0, 255));
    bxarttri4(76, 10, 0.7, color(0, 0, 255));
    bxarttri4(76, 30, 0.7, color(0, 0, 255));
    bxarttri4(76, 50, 0.7, color(0, 0, 255));
    bxarttri4(76, 70, 0.7, color(0, 0, 255));
    bxarttri4(76, 90, 0.7, color(0, 0, 255));
    bxarttri4(76, 110, 0.7, color(0, 0, 255));
    bxarttri4(76, 130, 0.7, color(0, 0, 255));
    bxarttri4(76, 150, 0.7, color(0, 0, 255));
    bxarttri4(76, 170, 0.7, color(0, 0, 255));
    bxarttri4(76, 190, 0.7, color(0, 0, 255));
    bxarttri4(76, 210, 0.7, color(0, 0, 255));
    bxarttri4(76, 230, 0.7, color(0, 0, 255));
    bxarttri4(76, 250, 0.7, color(0, 0, 255));
    bxarttri4(76, 270, 0.7, color(0, 0, 255));
    bxarttri4(76, 290, 0.7, color(0, 0, 255));
    bxarttri4(76, 310, 0.7, color(0, 0, 255));
    bxarttri4(76, 330, 0.7, color(0, 0, 255));
    bxarttri4(76, 350, 0.7, color(0, 0, 255));
    bxarttri4(76, 370, 0.7, color(0, 0, 255));
    bxarttri4(76, 390, 0.7, color(0, 0, 255));
    bxarttri4(76, 410, 0.7, color(0, 0, 255));
    bxarttri4(76, 430, 0.7, color(0, 0, 255));
    bxarttri4(76, 450, 0.7, color(0, 0, 255));
    bxarttri4(76, 470, 0.7, color(0, 0, 255));
    bxarttri4(76, 490, 0.7, color(0, 0, 255));
    bxarttri4(76, 510, 0.7, color(0, 0, 255));
    bxarttri4(76, 530, 0.7, color(0, 0, 255));
    bxarttri4(76, 550, 0.7, color(0, 0, 255));
    
    // Otherside
    
    bxarttri5(623, -30, 0.7, color(50, 235, 235));
    bxarttri5(623, -10, 0.7, color(50, 235, 235));
    bxarttri5(623, 10, 0.7, color(50, 235, 235));
    bxarttri5(623, 30, 0.7, color(50, 235, 235));
    bxarttri5(623, 50, 0.7, color(50, 235, 235));
    bxarttri5(623, 70, 0.7, color(50, 235, 235));
    bxarttri5(623, 90, 0.7, color(50, 235, 235));
    bxarttri5(623, 110, 0.7, color(50, 235, 235));
    bxarttri5(623, 130, 0.7, color(50, 235, 235));
    bxarttri5(623, 150, 0.7, color(50, 235, 235));
    bxarttri5(623, 170, 0.7, color(50, 235, 235));
    bxarttri5(623, 190, 0.7, color(50, 235, 235));
    bxarttri5(623, 210, 0.7, color(50, 235, 235));
    bxarttri5(623, 230, 0.7, color(50, 235, 235));
    bxarttri5(623, 250, 0.7, color(50, 235, 235));
    bxarttri5(623, 270, 0.7, color(50, 235, 235));
    bxarttri5(623, 290, 0.7, color(50, 235, 235));
    bxarttri5(623, 310, 0.7, color(50, 235, 235));
    bxarttri5(623, 330, 0.7, color(50, 235, 235));
    bxarttri5(623, 350, 0.7, color(50, 235, 235));
    bxarttri5(623, 370, 0.7, color(50, 235, 235));
    bxarttri5(623, 390, 0.7, color(50, 235, 235));
    bxarttri5(623, 410, 0.7, color(50, 235, 235));
    bxarttri5(623, 430, 0.7, color(50, 235, 235));
    bxarttri5(623, 450, 0.7, color(50, 235, 235));
    bxarttri5(623, 470, 0.7, color(50, 235, 235));
    bxarttri5(623, 490, 0.7, color(50, 235, 235));
    bxarttri5(623, 510, 0.7, color(50, 235, 235));
    bxarttri5(623, 530, 0.7, color(50, 235, 235));
    bxarttri5(623, 550, 0.7, color(50, 235, 235));
    
    
    fill(255);
    textFont(TAF, 120);
    text("T", 150, 120);
    text("I", 250, 220);
    text("M", 320, 320);
    text("E", 450, 420);
    
    fill(0, 221, 255);
    ellipse(50, 50, 80, 80);
    ellipse(50, 550, 80, 80);
    fill(0, 0, 255);
    ellipse(750, 50, 80, 80);
    ellipse(750, 550, 80, 80);
    
    fill(0, 0, 200);
    rect(0, 0, width, 30);
    
    bxarttri(250, 29, 1, color(0, 0, 200));
    bxarttri3(450, 9, 0.64, color(0, 0, 200));
    rect(278, 29, 200, 39.5);
    
    fill(255);
    textFont(createFont("Verdana Bold"));
    textSize(20);
    text("Bluey The Circle 2", 10, 595);
    text("ブルーイ・ザ・サークル2", 550, 595);
    text("タイムアタック!", 10, 24);
    text("時間との戦いで記録を破りましょう!", 460, 24);
    
    fill(255, 162, 0);
    header("Time \nAttack", 390, 5, 30, 20, 0, 2);
    
    strokeWeight(3);
    stroke(0);
     fill(255);
    if(infscreen < 2){
    fill(0, 34, 255);
    }
    
    rect(150, 200, 200, 100);
    if(infscreen < 2){
    strokeWeight(5);
    stroke(255, 100, 0);
    fill(255, 255, 0);
    ellipse(310, 220, 30, 30);
    noStroke();
    }
    
    // Key events for some of the shown settings
    if(keys[82]){
        ghostM = 1;
    }
    if(keys[80]){
        ghostM = 0;
    }
    if(keys[RIGHT]){
        character ++;
    }
    if(keys[LEFT]){
        character -- ;
    }
    if(character < 0){
        character = 0;
    }
    if(character > 3){
        character = 0;
    }
    
    
    fill(0);
    textSize(30);
    textFont(createFont("Arial Bold"));
    text("Act: " + levelcount[level], 160, 340);
    text("Ghost: " + ghostmode[ghostM], 160, 370);
    text("Player: " + AdvanceChara[character], 160, 400);
    
    fill(25);
    textSize(30);
    textFont(createFont("Impact Bold"));
    text(lvlnames[level], 360, 230);
    
    text("Times:" + '"' + time.toFixed(2), 300, 150);
    
    
    noStroke();
    
    if(keys[DOWN]){
        infscreen++;
        level += 1;
    }
    if(keys[UP]){
        infscreen--;
        level -= 1;
    }
    if(infscreen < 0){
        infscreen = 0;
        level = 0;
    }
    if(keys[32]){
        scene = "load";
        TA = true;
    }
    
    switch(infscreen){
        case 0:
            //{
            image(Get('Image4'), 180, 225, 40, 60);
        image(Get('Image1'), 150, 260, 20, 20);
        image(Get('Image1'), 170, 260, 20, 20);
        image(Get('Image1'), 190, 260, 20, 20);
        image(Get('Image1'), 210, 260, 20, 20);
        image(Get('Image1'), 230, 260, 20, 20);
        image(Get('Image1'), 250, 260, 20, 20);
        image(Get('Image7'), 150, 280, 20, 20);
        image(Get('Image7'), 170, 280, 20, 20);
        image(Get('Image7'), 190, 280, 20, 20);
        image(Get('Image7'), 210, 280, 20, 20);
        image(Get('Image7'), 230, 280, 20, 20);
        image(Get('Image7'), 250, 280, 20, 20);
        image(Get('Image7'), 270, 260, 20, 20);
        image(Get('Image7'), 290, 260, 20, 20);
        image(Get('Image7'), 270, 280, 20, 20);
        image(Get('Image5'), 290, 280, 20, 20);
        image(Get('EEslope2'), 270, 240, 20, 20);
        image(Get('EEslope1'), 290, 240, 20, 20);
        image(Get('ImageP'), 220, 200, 40, 60);
        image(Get('TotemPole3k'), 150, 205, 50, 60);
        
        
        image(brid, 309, 260, 10, 10);
        image(brid, 318, 260, 10, 10);
        image(brid, 327, 260, 10, 10);
        image(brid, 336, 260, 10, 10);
        //}
        //image(brid, 345, 260, 10, 10);
        
        break;
        case 1:
            //{
            image(Get('Image4'), 180, 225, 40, 60);
        image(Get('Image1'), 150, 260, 20, 20);
        image(Get('Image1'), 170, 260, 20, 20);
        image(Get('Image1'), 190, 260, 20, 20);
        image(Get('Image1'), 210, 260, 20, 20);
        image(Get('Image1'), 230, 260, 20, 20);
        image(Get('Image1'), 250, 260, 20, 20);
        image(Get('Image7'), 150, 280, 20, 20);
        image(Get('Image7'), 170, 280, 20, 20);
        image(Get('Image7'), 190, 280, 20, 20);
        image(Get('Image7'), 210, 280, 20, 20);
        image(Get('Image7'), 230, 280, 20, 20);
        image(Get('Image7'), 250, 280, 20, 20);
        image(Get('Image7'), 270, 260, 20, 20);
        image(Get('Image7'), 290, 260, 20, 20);
        image(Get('Image7'), 270, 280, 20, 20);
        image(Get('Image5'), 290, 280, 20, 20);
        image(Get('EEslope2'), 270, 240, 20, 20);
        image(Get('EEslope1'), 290, 240, 20, 20);
        image(Get('ImageP'), 220, 200, 40, 60);
        image(Get('TotemPole3k'), 150, 205, 50, 60);
        
        
        image(brid, 309, 260, 10, 10);
        image(brid, 318, 260, 10, 10);
        image(brid, 327, 260, 10, 10);
        image(brid, 336, 260, 10, 10);
        //}
        break;
        case 2:
           //{
            image(Get('Image4'), 180, 225, 40, 60);
        image(Get('Image1'), 150, 260, 20, 20);
        image(Get('Image1'), 170, 260, 20, 20);
        image(Get('Image1'), 190, 260, 20, 20);
        image(Get('Image1'), 210, 260, 20, 20);
        image(Get('Image1'), 230, 260, 20, 20);
        image(Get('Image1'), 250, 260, 20, 20);
        image(Get('Image7'), 150, 280, 20, 20);
        image(Get('Image7'), 170, 280, 20, 20);
        image(Get('Image7'), 190, 280, 20, 20);
        image(Get('Image7'), 210, 280, 20, 20);
        image(Get('Image7'), 230, 280, 20, 20);
        image(Get('Image7'), 250, 280, 20, 20);
        image(Get('Image7'), 270, 260, 20, 20);
        image(Get('Image7'), 290, 260, 20, 20);
        image(Get('Image7'), 270, 280, 20, 20);
        image(Get('Image5'), 290, 280, 20, 20);
        image(Get('EEslope2'), 270, 240, 20, 20);
        image(Get('EEslope1'), 290, 240, 20, 20);
        image(Get('ImageP'), 220, 200, 40, 60);
        image(Get('TotemPole3k'), 150, 205, 50, 60);
        
        
        image(brid, 309, 260, 10, 10);
        image(brid, 318, 260, 10, 10);
        image(brid, 327, 260, 10, 10);
        image(brid, 336, 260, 10, 10);
        //} 
        break;
        
        
        
        
    }
    
     Back3.run();
    rectMode(CORNER);
    
    
};
var SaveSelect = function(){
    textAlign(CORNER, CORNER);
    background(255, 255, 255);

for (var j = -4; j < 30; j++) {
    for (var i = -1; i < 30; i++) {
        
        noStroke();
        fill(84, 172, 255,30);
        ellipse(i*30,j*30,22,22);

    }
}
    
    fill(0);
    textSize(200);
    textFont(createFont("Arial Bold"));
    text("SAVE", 100, 350);
    textSize(100);
    text("SELECT", 0, 500);
    text("SELECT", 400, 500);
    text("SELECT", 0, 200);
    text("SELECT", 400, 200);
    
    
    
    strokeWeight(3);
    stroke(154, 150, 255, 150);
    for(var i=0; i<20; i++){
            line(i*40,0,i*40,height);
        }
        for(var i=0; i<20; i++){
            line(0,i*40,width,i*40);
        }
    stroke(0);
    fill(255, 200, 0);
    ellipse(400, 10, 200, 200);
    stroke(0);
fill(255, 255, 0, 100);
ellipse(200, 200, 320, 320);
fill(255, 0, 255, 100);
ellipse(370, 350, 320, 320);
fill(0, 255, 0, 100);
ellipse(560, 460, 320, 320);
noStroke();
stroke(0, 255, 0);
    line(150, 150, 170, 170);
    line(170, 170, 190, 170);
    line(190, 170, 400, 400);
    stroke(0, 60, 255);
    line(300, 100, 250, 150);
    line(250, 150, 110, 110);
    stroke(255, 0, 0);
    line(300, 300, 300, 250);
    line(300, 250, 270, 210);
    line(270, 210, 400, 70);
    
    noStroke();
    
    noStroke();
        fill(0, 1, 100);
        rect(0, 0, width, 60);
        bxarttri(550, 47, 1.2, color(0, 1, 100));
        rect(583, 50, 230, 45);
        rect(0, 50, 236, 47);
        bxarttri3(200, 17, 0.85, color(0, 0, 100));
        
        fill(255, 0, 0);
    rect(0, 500, width, 100);
    Ctri(-50, 437, 0.3, color(255, 0, 0));
    Ctri(-20, 437, 0.3, color(255, 0, 0));
    Ctri(10, 437, 0.3, color(255, 0, 0));
    Ctri(40, 437, 0.3, color(255, 0, 0));
    Ctri(70, 437, 0.3, color(255, 0, 0));
    Ctri(100, 437, 0.3, color(255, 0, 0));
    Ctri(130, 437, 0.3, color(255, 0, 0));
    Ctri(160, 437, 0.3, color(255, 0, 0));
    Ctri(190, 437, 0.3, color(255, 0, 0));
    Ctri(220, 437, 0.3, color(255, 0, 0));
    Ctri(250, 437, 0.3, color(255, 0, 0));
    Ctri(280, 437, 0.3, color(255, 0, 0));
    Ctri(310, 437, 0.3, color(255, 0, 0));
    Ctri(340, 437, 0.3, color(255, 0, 0));
    Ctri(370, 437, 0.3, color(255, 0, 0));
    Ctri(400, 437, 0.3, color(255, 0, 0));
    Ctri(430, 437, 0.3, color(255, 0, 0));
    Ctri(460, 437, 0.3, color(255, 0, 0));
    Ctri(490, 437, 0.3, color(255, 0, 0));
    Ctri(520, 437, 0.3, color(255, 0, 0));
    Ctri(550, 437, 0.3, color(255, 0, 0));
    Ctri(580, 437, 0.3, color(255, 0, 0));
    Ctri(610, 437, 0.3, color(255, 0, 0));
    Ctri(640, 437, 0.3, color(255, 0, 0));
    Ctri(670, 437, 0.3, color(255, 0, 0));
    Ctri(700, 437, 0.3, color(255, 0, 0));
    Ctri(730, 437, 0.3, color(255, 0, 0));
    fill(255);
    textSize(20);
    textFont(createFont("Verdana Bold"));
    text("Bluey The Circle 2", 580, 590);
    text("ブルーイ・ザ・サークル2", 10, 590);
    text("保存ファイル選択", 10, 20);
    text("ノーセーブ!", 670, 20);
    text("ファイル選択", 660, 50);
    text("サンセットカセット", 605, 80);

    header("SAVE SELECT", 420, 10, 30, 20, 0, 0);
    
    Back3.run();
    rectMode(CORNER);
        
};

/*
var lvlnames3 = ["merald                     xpanse", "merald                     xpanse", "merald                     xpanse", "igid                           ock", "igid                           ock", "igid                           ock", "echanical adness", "usty esert"];
var lvla = ["E       E      ", "E       E      ", "E       E      ", "R       R      ", "R       R      ", "R       R      ", "M       M      ", "M       M      ", "M       M      ", "D       D      "];

var slvl = level;

var Lvls = function(){
    var wichlvl = 0;
    var squareNum = 15;
    var squareSize = width/squareNum + 1.2;
var currentCol = 0;
    var sc2 = [color(31, 3, 217), color(36, 0, 143)];
    noStroke();
    for (var i = 0; i < squareNum; i++) {
        for (var j = 0; j < squareNum; j++) {
            fill(sc2[currentCol]);
            rect(i * squareSize, j * squareSize, squareSize, squareSize);
            ellipse(20, 20, squareSize, squareSize);
            currentCol++;
            if(currentCol> 1){
                currentCol = 0;
            }
        }    
    }
    
    switch(wichlvl){
        case 0:
            image(Get('Image2'), 100, 100);
            image(Get('ImageP'), 300, 200);
            for(var i = 0; i < 25; i++){
            image(Get('Image1'), i * 9 * 4.3, 500);
            }
            for(var i = 0; i < 25; i++){
            image(Get('Image7'), i * 9 * 4.3, 540);
            image(Get('Image7'), i * 9 * 4.3, 580);
            }
            image(Get('Image4p1'), 50, 400);
            image(Get('Image4'), 480, 410);
            image(Get('Image14'), 450, 500, 200, 120);
            image(Get('TotemPole'), 550, 260);
            image(Get('TotemPole3k'), 200, 260);
        break;
        case 1:
            image(Get('Image2'), 100, 100);
            image(Get('ImageP'), 300, 200);
            for(var i = 0; i < 25; i++){
            image(Get('Image1'), i * 9 * 4.3, 500);
            }
            for(var i = 0; i < 25; i++){
            image(Get('Image7'), i * 9 * 4.3, 540);
            image(Get('Image7'), i * 9 * 4.3, 580);
            }
            image(Get('Image4p1'), 50, 400);
            image(Get('Image4'), 480, 410);
            image(Get('Image14'), 450, 500, 200, 120);
            image(Get('TotemPole'), 550, 260);
            image(Get('TotemPole3k'), 200, 260);
        break;
        
        
        
        
    }
    fill(0, 0, 255, 50);
        rect(0, 0, width, height);
        
        fill(255, 255, 0);
        textSize(140);
        textFont(createFont("Impact Bold"));
        text(lvla[level], 150, 200);
        fill(255);
        textSize(40);
        text(lvlnames3[level], 250, 200);
    
    if(keys[RIGHT]){
        wichlvl ++;
        level ++;
    }
    if(wichlvl < -1){
        wichlvl = 0;
        level = 0;
    }
    if(keys[LEFT]){
        wichlvl--;
        level -= 1;
    }
    if(keys[32]){
        scene = "load";
    }
    
    
};
*/
    var angle1 = 0;
var angle2 = 320;
var angle1speed = 9;
var angle2speed = 9;
var timer = 0;
var rbx = 0;
var rby = 0;
var rbr = 0;
var loadingscreen = function(){
    mcx = rbx;
mcy = rby;
mcr = rbr;

    

pushMatrix();
translate(mcx+750, mcy+550);
rotate(mcr);
scale(0.5);
mainruby(mcx+10, mcy, 0.09, color(255, 97, 97), color(245, 49, 49), color(255, 71, 71), color(222, 71, 71), color(227, 29, 29));
mainruby(mcx+36, mcy+10, 0.09, color(99, 107, 255), color(56, 49, 245), color(71, 71, 255), color(71, 71, 222), color(29, 29, 227));
mainruby(mcx-15, mcy+10, 0.09, color(99, 255, 151), color(49, 245, 91), color(71, 255, 138), color(71, 222, 104), color(29, 227, 72));
mainruby(mcx-25, mcy+40, 0.09, color(250, 255, 99), color(245, 229, 49), color(234, 255, 71), color(209, 222, 71), color(227, 227, 29));
mainruby(mcx+45, mcy+41, 0.09, color(255, 99, 229), color(238, 49, 245), color(252, 71, 255), color(219, 71, 222), color(224, 29, 227));
mainruby(mcx-5, mcy+70, 0.09, color(99, 226, 255), color(49, 199, 245), color(71, 234, 255), color(71, 187, 222), color(29, 181, 227));
mainruby(mcx+26, mcy+70, 0.09, color(255, 198, 99), color(245, 150, 49), color(255, 203, 71), color(222, 149, 71), color(227, 148, 29));



popMatrix();
rbr+=5;
};
var unfinishedscreen = function(){
    background(5, 47, 138);

fill(0, 115, 255);
rect(0, 500, width, 300);

fill(0, 34, 255);
gear(400, 280, 200, gearot, 8, 20, 1.3, 10);
gear(100, 280, 100, gearot, 7, 20, 1.3, 10);
gear(700, 280, 100, gearot, 7, 20, 1.3, 10);


gearot++;


fill(0);
rect(0, 0, 30, height);
rect(760, 0, 30, height);
rect(0, 580, width, 30);
rect(0, 0, width, 30);


for(var i = 0; i < 10; i++){
    fill(255, 255, 0);
    rect(0 + i * 5 * 19, 0, 30, 30);
    rect(760, 0 + i * 6 * 19, 30, 30);
    rect(0 + i * 5 * 20, 580, 30, 30);
    rect(0, 0 + i * 5 * 20, 30, 30);
}

textFont(createFont("Noto Sans"));
textSize(30);
text("Come back when this is finished!", 150, 200);
};
var lvlselect = function(){
background(0, 0, 100);

fill(0, 100, 255);
textSize(80);
textFont(createFont("Impact Bold"));
text("---LEVEL SELECT---", 150, 100);


textFont(createFont("Kristen ITC Bold"));
fill(255);
textSize(30);
if(mode === 0){
text(lvlnames[level], 250, 300);
text("Act:" + levelcount[level], 250, 340);
}
if(mode === 1){
    text(lvlnames2[level], 250, 300);
    text("Act:" + levelcount2[level], 250, 340);
}
if(mode === 2){
    text(lvlnames5[level], 250, 300);
}
if(mode === 3){
    text(extralvlnames[level], 250, 300);
}
textSize(20);
fill(0, 150, 0);
text("Gamemode: " + modename[mode], 250, 200);
fill(0, 0, 200);
text("Press Spacebar To Enter Level\n press R to reset", 250, 500);


if(keys[RIGHT]){
    level++;
}
if(keys[LEFT]){
    level--;
}
if(mode === 0){
if(level < 0){
    level = 0;
}
}
if(level > 34){
    level = 0;
    mode = 1;
    //lvlnames = lvlnames2;
}
if(mode === 1){
if(level < 0){
    level = 33;
    mode = 0;
    //lvlnames2 = lvlnames;
}
if(level > 12){
    level = 0;
    mode = 2;
}
}
if(mode === 2){
if(level < 0){
    level = 12;
    mode = 1;
}
if(level > 1){
    level = 0;
    mode = 3;
}

}
if(mode === 3){
    if(level < 0){
        level = 1;
        mode = 2;
    }
    if(level > 1){
        level = 1;
    }
}


if(keys[32]){
    trans.active = true;
    trans.nextScene = "load";
    musicchanged = true;
    //levels.loadtoVram();
}
if(keys[82]){
    level = 0;
    mode = 0;
}



};

// RSC intro stuff -- {
var gradientRect = function(c1, c2, c3, c4, xRes, yRes){
    if(arguments.length < 4 || arguments.length > 6){
        throw {message: 'Oh noes! It looks like you\'re trying to use "gradientRect()". In case you forgot, you can use it like: \n"gradientRect(c1, c2, c3, c4)"'};
    }
    xRes = xRes || 20;
    yRes = yRes || 20;
    var prevImg = get();
    for(var i = 0; i < xRes; i++){
        for(var j = 0; j < yRes; j++){
            var ci1 = lerpColor(c1, c2, i/(xRes-1));
            var ci2 = lerpColor(c3, c4, i/(xRes-1));
            var c = lerpColor(ci1, ci2, j/(yRes-1));
            stroke(c);
            point(i, j);
        }
    }
    var gradientImg = get(0, 0, xRes, yRes);
    image(prevImg, 0, 0);
    return gradientImg;
};
var RomanIntro = function(){
    
    RomanIntro = function(){
        
        this.done = false;
        
        
        this.timer = 0;
        
        background(-1);
        this.positions = [];
        this.res = 5;
        fill(0);
        textSize(90);
        text("PRESENTS", 50, 300);
        for(var x = 50; x < 530; x += this.res){
            for(var y = 230; y < 300; y += this.res){
                if(get(x, y) === -16777216){
                    this.positions.push([x, y]);
                }
            }
        }
        
        this.parts = [];
        this.Res = 30;
        this.addX = 0;
        this.addY = 0;
        
    };
    
    RomanIntro.prototype.display = function(){
        
        if(!this.done){
        
            var opac = min(this.timer*2, 255),
                color1 = color(0, opac),
                color2 = color(0, 136, 255, opac);
            this.grad = gradientRect(
                color1,
                color1,
                color2,
                color2
            );
            
            pushMatrix();
                
                var x = width*3-this.timer*10;
                if(x < 195 && x > 0){
                    translate(random(-5, 5), random(-5, 5));
                }
                x = max(x, 195);
                
                background(255);
                image(this.grad, 0, 0, width, height);
                
                noStroke();
                fill(0, 170, 255, opac);
                ellipse(150, 150, 200, 200);
                textSize(50);
                text("Star Coder", 260, 170);
                fill(0, 43, 130, opac);
                text("Roman", 70, 170);
                
                textSize(200);
                text("⭐", x, 500);
                
            popMatrix();
        
            if(this.timer <= 300){
                
                this.img = get();
                
            }else{
                
                fill(-1);
                noStroke();
                for(var i = 0; i < this.parts.length; i++){
                    rect(this.parts[i][5], this.parts[i][6], this.Res, this.Res);
                }
                
                if(this.addY < height){
                    
                    if(this.positions.length){
                        var idx = round(random(0, this.positions.length-1)),
                            toPos = this.positions[idx];
                        this.parts.push([get(this.addX, this.addY, this.Res, this.Res), this.addX, this.addY, toPos[0], toPos[1], this.addX, this.addY]);
                        this.positions.splice(idx, 1);
                    }
                    
                    this.addX += this.Res;
                    if(this.addX >= width){
                        this.addX = 0;
                        this.addY += this.Res;
                    }
                
                }
                
                for(var i = 0; i < this.parts.length; i++){
                    
                    this.parts[i][1] += (this.parts[i][3]-this.parts[i][1])/20;
                    this.parts[i][2] += (this.parts[i][4]-this.parts[i][2])/20;
                    
                    var w = map(dist(this.parts[i][1], this.parts[i][2], this.parts[i][3], this.parts[i][4]), 0, dist(this.parts[i][5], this.parts[i][6], this.parts[i][3], this.parts[i][4]), 10, this.Res);
                    image(this.parts[i][0], this.parts[i][1], this.parts[i][2], w, w);
                    
                }
                
            }
            
            if(this.timer === 850){
                
                this.done = true;
                
                for(var i = 0; i < this.parts.length; i++){
                
                    this.parts[i][3] = ~~random(2)-1?-10:width;
                    this.parts[i][4] = ~~random(2)-1?-10:height;
                    
                }
                
            }
            
        }
        
        else{
            
            var x = map(this.timer, 850, 1000, 0, width/2);
            noStroke();
            fill(-1);
            rect(x+width/2, 0, width/2, height);
            rect(-x+width/2, 0, -width/2, height);
            
            for(var i = 0; i < this.parts.length; i++){
                
                this.parts[i][1] += (this.parts[i][3]-this.parts[i][1])/20;
                this.parts[i][2] += (this.parts[i][4]-this.parts[i][2])/20;
                image(this.parts[i][0], this.parts[i][1], this.parts[i][2], 10, 10);
                
            }
            
        }
        if(this.done === true){
            scene = "disclaim";
            frtimer++;
        }
        
    };
    
    RomanIntro.prototype.update = function(){
        
        this.timer++;
        this.display();
        
    };
    
    return RomanIntro;
    
}();
var romanIntro = new RomanIntro();
//}

    var warningscreen = function(){
    var squareNum = 15;
    var squareSize = width/squareNum + 1.2;
var currentCol = 0;
    var squareColor = [color(0, 0, 255), color(0, 221, 255)];
    var currentCol = 0;
    noStroke();
    for (var i = 0; i < squareNum; i++) {
        for (var j = 0; j < squareNum; j++) {
            fill(squareColor[currentCol]);
            rect(i * squareSize, j * squareSize, squareSize, squareSize);
            currentCol++;
            if(currentCol> 1){
                currentCol = 0;
            }
        }    
    }
    fill(0, 0, 0, 20);
        for(var i = 0; i < 800; i += 50){
            for(var j = 0; j < 600; j += 50){
                triangle(i, j, i + 50, j, i, j + 50);
            }
        }
    
    fill(255);
    textSize(30);
    text("Woops It appears you need to play\n at a 16:9 ratio!", 100, 100);
    
    fill(0, 200, 255);
stroke(0, 0, 0);
ellipse(545, 40, 200, 200);
fill(0, 47, 255);
strokeWeight(2);
stroke(0, 26, 255);
ellipse(505, 80, 70, 70);
fill(255, 255, 255);
ellipse(486, 70, 25, 25);
ellipse(516, 70, 25, 25);
fill(0, 255, 230);
stroke(0, 255, 230);
ellipse(500, 90, 10, 10);
noStroke();
fill(0, 0, 0);
ellipse(484, 74, 10, 10);
ellipse(514, 74, 10, 10);
fill(255, 0, 9);
beginShape();
arc(520, 94, 30, 30, 400, 475);
endShape();
if(frameCount%300 < 30){
    fill(0, 47, 255);
    ellipse(486, 70, 25, 27);
    ellipse(516, 70, 25, 27);
}
fill(0);
text("Go to \nhttps://www.khanacademy.org/computer-programming/bluey-the-cir\ncle-2-alpha/4648441985286144?width=800", 10, 300);
text("Or add ?width=800", 10, 4500);

fill(2, 2, 94);
textSize(20);
text("Bluey The Circle 2", 10, 560);

throw {
    message: "Go to \nhttps://www.khanacademy.org/computer-programming/bluey-the-cir\ncle-2-alpha/4648441985286144?width=800"
};
    
};
function runAtCorrectFPS(action) {
    if (millis() - prevTime >= 300) {
        prevTime = millis() - 1;
    }
    deltaTime = millis() - prevTime;
    prevTime = millis();
    
    if (Math.abs(deltaTime - 1 / (fps * 2)) < 0.0002) {
        deltaTime = 1 / (fps * 2);
    }
    if (Math.abs(deltaTime - 1 / fps) < 0.0002) {
        deltaTime = 1 / fps;
    }
    if (Math.abs(deltaTime - 1 / (fps / 2)) < 0.0002) {
        deltaTime = 1 / (fps / 2);
    }
    
    accumulator += deltaTime / 1000;
    
    accumulator = Math.min(accumulator, 0.5);
    
    framesRun = 0;
    while (accumulator >= 1 / fps && framesRun < 40) {
        action();
        
        
        accumulator -= 1 / fps;
        
        
    }
}

//var realTime = time / 60;
//var realTime2 = time - 60;

var HUD = function(){
//time++;
//realTime++;

    /*
    var s = second();
    var m = '"' + realTime.toFixed(2);
    var m2 = '"' + realTime2.toFixed(2);
    var mins = 0;
    var mins2 = 1;
    if(realTime > 60){
        time = 0;
        mins ++;
    }
    if(realTime2 < 0){
        time = 59;
        mins2 -= 1;
    }
        */
    var seconds = (time/60);
    var mill = floor((seconds-floor(seconds))*100);
    var minutes = floor(floor(seconds)/60);
    
    var fullTimer;
    if (floor(seconds)%60 > 9) {
        fullTimer = minutes+' " '+floor(seconds)%60+' " '+mill;
    } else {
        fullTimer = minutes+' " 0'+floor(seconds)%60+' " '+mill;
    }

    if(minutes > 9){
        circles[0].dead = true;
    }
    
    
    if(dbugmenu){
    fill(0, 0, 0);
    textSize(20);
    text(circles[0].x, 500, 20);
    text(circles[0].y, 500, 50);
    text(circles[0].jumping, 500, 70);
    text(circles[0].hearts, 500, 90);
    text(circles[0].emotion, 500, 110);
    text(circles[0].dead, 500, 130);
    text(circles[0].state, 500, 150);
    fill(255, 255, 255);
    text(circles[0].x, 501, 20);
    text(circles[0].y, 501, 50);
    text(circles[0].jumping, 501, 70);
    text(circles[0].hearts, 501, 90);
    text(circles[0].emotion, 501, 110);
    text(circles[0].dead, 501, 130);
    text(circles[0].state, 501, 150);
    text(poweruptime, 501, 170);
    text(portalt, 501, 180);
    text(circles[0].movtime, 501, 200);
    text(circles[0].moving, 501, 220);
    text(circles[0].velx, 501, 240);
    text(circles[0].speed, 501, 260);
    }
    if(alterdbug){
        fill(255, 255, 255);
        text(circles[0].x, 500, 580);
        text(circles[0].y, 630, 580);
        text(circles[0].x, 500, 20);
        text(circles[0].y, 630, 20);
        
        
    }
    if(TA === false){
        if(gamemode === 0){
    
            noStroke();
fill(0, 0, 100, 230);//we want the star so put the color back to white
pushMatrix();
translate(-180, -20);
rotate(-20);
scale(1);

for(var i = 0; i < 5;i++){
    translate(200,200);
    rotate(72);
    translate(-200,-200);
    quad(200,200,160,160,200,75,240,160);//draw a star shape
}

popMatrix();
strokeWeight(5);
stroke(0);
fill(0, 0, 200, 150);
rect(10, 38, 190, 20, 8);
rect(10, 75, 190, 20, 8);
rect(10, 128, 190, 20, 8);

noStroke();

    image(hud, 3, 20, 140, 140);
    fill(255, 255, 255);
    textSize(30);
    textFont(createFont("Impact Italic"));
    text(":  " + score, 113, 55);
    text(":     " + fullTimer, 88, 95);
    text(":  " + amount, 113, 140);
        }
        if(gamemode === 1){
            noStroke();
            fill(0, 0, 100, 230);//we want the star so put the color back to white
            pushMatrix();
            translate(-180, -20);
            rotate(-20);
            scale(1);
            
            for(var i = 0; i < 5;i++){
                translate(200,200);
                rotate(72);
                translate(-200,-200);
                quad(200,200,160,160,200,75,240,160);//draw a star shape
            }
            
            popMatrix();
            strokeWeight(5);
            stroke(0);
            fill(0, 0, 200, 150);
            rect(10, 38, 190, 20, 8);
            rect(10, 75, 190, 20, 8);
            rect(10, 128, 190, 20, 8);
            
            noStroke();
    image(hud, 3, 20, 140, 140);
    fill(255, 255, 255);
    textSize(30);
    textFont(createFont("Arial Bold"));
    text(":  " + score, 113, 55);
    text(":     " + mins + m, 88, 95);
    text(":  " + amount, 113, 130);
        }
    if(gamemode === 2){
        noStroke();
        fill(0, 0, 100, 230);//we want the star so put the color back to white
        pushMatrix();
        translate(-180, -20);
        rotate(-20);
        scale(1);
        
        for(var i = 0; i < 5;i++){
            translate(200,200);
            rotate(72);
            translate(-200,-200);
            quad(200,200,160,160,200,75,240,160);//draw a star shape
        }
        
        popMatrix();
        strokeWeight(5);
        stroke(0);
        fill(0, 0, 200, 150);
        rect(10, 38, 190, 20, 8);
        rect(10, 75, 190, 20, 8);
        rect(10, 128, 190, 20, 8);
        
        noStroke();
        image(SShud, 3, 20, 140, 140);
         fill(255, 255, 255);
    textSize(30);
    textFont(createFont("Arial Bold"));
    text(": " + score, 113, 50);
    text(":  " + mins + m, 88, 90);
    text(": " + amount + "/" + sphereamount1, 163, 130);
    if(amount === 32){
        amount = amount2;
        sphereamount1 = sphereamount2;
    }
    }
    
    }
    if(TA === true){
        fill(255, 255, 0);
    textSize(30);
    textFont(createFont("Arial Bold"));
        image(TAhud, 3, 20, 140, 140);
    fill(255, 255, 255);
    textSize(30);
    textFont(createFont("Arial Bold"));
    text(":  " + mins + m, 113, 55);
    text("  :  " + amount, 88, 95);
    }
    
   
    if(amount === 0){
        if(gamemode === 0){
        if(TA === false){
            /*
        if(frameCount%40 < 30){
            fill(255, 0, 0);
            text("Coins: " + amount, 33, 97);
            
            
        }
        }
        */
        }
        
        }
        
        
    } 
    

    
    fill(47, 0, 255);
    rect(5, 147, circles[0].hearts*5.8, 10+sin(frameCount*5), 10);
    if(circles[0].state === "Burn"){
        fill(255, 0, 0);
        rect(35, 117, poweruptime/6, 10+sin(frameCount*5), 10);
    }
    if(circles[0].state === "Breeze"){
        fill(201, 201, 201);
        rect(35, 117, poweruptime/6, 10+sin(frameCount*5), 10);
    }
    
    fill(0, 0, 0);
    textFont(createFont("sans-serif", 20));
    framerate = this.__frameRate;
    text(round(framerate), 74, 20);
    
    
};

// Bossfights{
var BossEE = function(x, y, h){
    this.x = x;
    this.y = y;
    this.speed = 8;
    this.h = 7;
    
    
    this.draw = function() {
         {
pushMatrix();

noStroke();
fill(107, 227, 123, 230);
rect(300, 230, 190, 190);



//Crystal 1
{
pushMatrix();

translate(-122, -75);
scale(1.4);
fill(84, 255, 107, 200);
triangle(313, 195, 297, 208, 277, 184);

fill(3, 173, 26, 200);
triangle(313, 195, 297, 208, 317, 238);

fill(84, 255, 107, 200);
triangle(317, 238, 280, 213, 297, 208);

fill(3, 173, 26, 200);
triangle(280, 213, 298, 208, 277, 184);
popMatrix();
}

//yellow/orange stones
{
fill(247, 180, 22);
rect(293, 221, 38, 100);
rect(417, 249, 55, 46);
rect(384, 328, 65, 83);


fill(255, 158, 79);
rect(300, 243, 24, 53);
rect(426, 249, 26, 24);
rect(389, 337, 29, 54);
}

//crystal 2
{
pushMatrix();


translate(735, -215);
rotate(-277);
scale(1.4);
fill(3, 173, 26, 200);
triangle(313, 195, 297, 208, 277, 184);

fill(84, 255, 107, 200);
triangle(313, 195, 297, 208, 317, 238);

fill(3, 173, 26, 200);
triangle(317, 238, 280, 213, 297, 208);

fill(84, 255, 107, 200);
triangle(280, 213, 298, 208, 277, 184);
popMatrix();
}

//Red/orange stones
{
fill(255, 124, 59);
rect(324, 287, 38, 88);
rect(452, 235, 30, 80);
rect(417, 356, 21, 83);


fill(212, 105, 55);
rect(341, 287, 21, 50);
rect(452, 235, 30, 42);
rect(417, 365, 13, 53);
}

//eyes
{
pushMatrix();    
   
//right eye
{    
fill(255, 255, 255);
ellipse(443, 293, 70, 70);


fill(7, 112, 0);
ellipse(444, 293, 24, 59);

fill(0, 0, 0);
ellipse(444, 293, 12, 53);
}

//left eye

{
pushMatrix();      
translate(-93, 0);   

fill(209, 98, 50);
ellipse(443, 293, 70, 70);


fill(0, 207, 0);
ellipse(444, 293, 44, 44);

fill(0, 255, 4);
ellipse(444, 293, 34, 34);

fill(158, 255, 158);
ellipse(444, 293, 24, 24);

fill(255, 255, 255);
ellipse(444, 293, 14, 14);




fill(209, 98, 50);
ellipse(413, 270, 40, 40);


fill(0, 207, 0);
ellipse(413, 270, 30, 30);

fill(0, 255, 4);
ellipse(413, 270, 20, 20);

fill(158, 255, 158);
ellipse(413, 270, 10, 10);

fill(255, 255, 255);
ellipse(413, 270, 7, 7);
popMatrix();
}
popMatrix();
}

//eyebrows
{
strokeWeight(10);
stroke(0, 0, 0);
line(310, 242, 387, 277);
line(472, 248, 405, 277);
}

//mouth
{
noStroke();
fill(255, 255, 255);
arc(399, 343, 100, 100, 0, 166);
}

}
    };
    /*
    this.update = function(){
        this.x += this.speed;
        if(Collision(this, circles[0])){
            circles[0].hearts -= 1;
            circles[0].vely -= circles[0].jumpnum;
            
            
        }
        else if(Collision(this, circles[0])&&circles[i].vely>0&&circles[i].jumping){
            
            this.h -= 1;
            circles[0].vely -= 10;
            
        }
        
        
    };
    */
    
    
    
    
    
};
BossEE.prototype.draw = function(cam) {
    var view = cam.view(this);
         {
pushMatrix();
translate(view.x, view.y);

noStroke();
fill(107, 227, 123, 230);
rect(300, 230, 190, 190);

popMatrix();

//Crystal 1
{
pushMatrix();

translate(-122, -75);
scale(1.4);
fill(84, 255, 107, 200);
triangle(313, 195, 297, 208, 277, 184);

fill(3, 173, 26, 200);
triangle(313, 195, 297, 208, 317, 238);

fill(84, 255, 107, 200);
triangle(317, 238, 280, 213, 297, 208);

fill(3, 173, 26, 200);
triangle(280, 213, 298, 208, 277, 184);
popMatrix();
}

//yellow/orange stones
{
fill(247, 180, 22);
rect(293, 221, 38, 100);
rect(417, 249, 55, 46);
rect(384, 328, 65, 83);


fill(255, 158, 79);
rect(300, 243, 24, 53);
rect(426, 249, 26, 24);
rect(389, 337, 29, 54);
}

//crystal 2
{
pushMatrix();


translate(735, -215);
rotate(-277);
scale(1.4);
fill(3, 173, 26, 200);
triangle(313, 195, 297, 208, 277, 184);

fill(84, 255, 107, 200);
triangle(313, 195, 297, 208, 317, 238);

fill(3, 173, 26, 200);
triangle(317, 238, 280, 213, 297, 208);

fill(84, 255, 107, 200);
triangle(280, 213, 298, 208, 277, 184);
popMatrix();
}

//Red/orange stones
{
fill(255, 124, 59);
rect(324, 287, 38, 88);
rect(452, 235, 30, 80);
rect(417, 356, 21, 83);


fill(212, 105, 55);
rect(341, 287, 21, 50);
rect(452, 235, 30, 42);
rect(417, 365, 13, 53);
}

//eyes
{
pushMatrix();    
   
//right eye
{    
fill(255, 255, 255);
ellipse(443, 293, 70, 70);


fill(7, 112, 0);
ellipse(444, 293, 24, 59);

fill(0, 0, 0);
ellipse(444, 293, 12, 53);
}

//left eye

{
pushMatrix();      
translate(-93, 0);   

fill(209, 98, 50);
ellipse(443, 293, 70, 70);


fill(0, 207, 0);
ellipse(444, 293, 44, 44);

fill(0, 255, 4);
ellipse(444, 293, 34, 34);

fill(158, 255, 158);
ellipse(444, 293, 24, 24);

fill(255, 255, 255);
ellipse(444, 293, 14, 14);




fill(209, 98, 50);
ellipse(413, 270, 40, 40);


fill(0, 207, 0);
ellipse(413, 270, 30, 30);

fill(0, 255, 4);
ellipse(413, 270, 20, 20);

fill(158, 255, 158);
ellipse(413, 270, 10, 10);

fill(255, 255, 255);
ellipse(413, 270, 7, 7);
popMatrix();
}
popMatrix();
}

//eyebrows
{
strokeWeight(10);
stroke(0, 0, 0);
line(310, 242, 387, 277);
line(472, 248, 405, 277);
}

//mouth
{
noStroke();
fill(255, 255, 255);
arc(399, 343, 100, 100, 0, 166);
}

         }
    };


//} // OLD CODE!
     
precacheAudio(0, "DDZ1+2", "https://ia802301.us.archive.org/7/items/SonicClassic2Soundtrack/A42%20-%20Desert%20Dunes%20Zone.mp3");
precacheAudio(1, "EEZ1+2", "https://ia802301.us.archive.org/7/items/SonicClassic2Soundtrack/A07%20-%20Crystal%20Coves%20Zone%20Act%201.mp3");
precacheAudio(2, "EEZ3", "https://ia802301.us.archive.org/7/items/SonicClassic2Soundtrack/A11%20-%20Crystal%20Coves%20Zone%20Act%202.mp3");
precacheAudio(3, "RRZ1+2", "https://ia802301.us.archive.org/7/items/SonicClassic2Soundtrack/A16%20-%20Rustic%20Ruins%20Zone%20Act%201.mp3");
precacheAudio(4, "RRZ4", "https://ia802301.us.archive.org/7/items/SonicClassic2Soundtrack/A17%20-%20Rustic%20Ruins%20Zone%20Act%202.mp3")
precacheAudio(5, "MMZ1+2", "https://ia802301.us.archive.org/7/items/SonicClassic2Soundtrack/A14%20-%20Factory%20Frenzy%20Zone%20Act%201.mp3");
precacheAudio(6, "MMZ3", "https://ia902301.us.archive.org/7/items/SonicClassic2Soundtrack/A15%20-%20Factory%20Frenzy%20Zone%20Act%202.mp3");
precacheAudio(7, "DDZ3", "DDZ3.mp3");
precacheAudio(8, "WWZ123", "https://ia802301.us.archive.org/7/items/SonicClassic2Soundtrack/C33%20-%20Wood%20Zone.mp3");
precacheAudio(9, "CCZ1", "https://ia902301.us.archive.org/7/items/SonicClassic2Soundtrack/A20%20-%20Carnival%20Chaos%20Zone%20Act%201.mp3");
precacheAudio(10, "CCZ2", "https://dn720309.ca.archive.org/0/items/SonicClassic2Soundtrack/A21a%20-%20Carnival%20Chaos%20Zone%20Act%202.mp3");
precacheAudio(11, "CCZ3", "https://dn720309.ca.archive.org/0/items/SonicClassic2Soundtrack/A21b%20-%20Carnival%20Chaos%20Zone%20Act%202%20%28Old%29.mp3");
precacheAudio(12, "AAZ123", "https://ia802301.us.archive.org/7/items/SonicClassic2Soundtrack/C35%20-%20Cyber%20City%20Zone.mp3");
precacheAudio(13, "TTZ1+2", "https://ia902301.us.archive.org/7/items/SonicClassic2Soundtrack/A24%20-%20Murky%20Mines%20Zone%20Act%201.mp3");
precacheAudio(14, "TTZ3", "https://ia802301.us.archive.org/7/items/SonicClassic2Soundtrack/A25%20-%20Murky%20Mines%20Zone%20Act%202.mp3");
precacheAudio(100, "Jump", "");
precacheAudio(15, "IIZ1+2", "https://ia802301.us.archive.org/7/items/SonicClassic2Soundtrack/A18%20-%20Frozen%20Fractal%20Zone%20Act%201.mp3");
precacheAudio(30, "BTC1GGZ", "https://ia902301.us.archive.org/7/items/SonicClassic2Soundtrack/A39a%20-%20Hazel%20Hills%20Zone.mp3");
precacheAudio(31, "BTC1RRZ", "https://ia802301.us.archive.org/7/items/SonicClassic2Soundtrack/A40%20-%20Crystal%20Caverns%20Zone.mp3");
precacheAudio(32, "BTC1LLZ", "https://ia802301.us.archive.org/7/items/SonicClassic2Soundtrack/A41%20-%20Luster%20Lakes%20Zone.mp3");
precacheAudio(33, "BTC1AAZ", "https://ia802301.us.archive.org/7/items/SonicClassic2Soundtrack/A43%20-%20Aqua%20Arena%20Zone.mp3");
precacheAudio(34, "BTC1CCZ", "https://ia802301.us.archive.org/7/items/SonicClassic2Soundtrack/A44b%20-%20Gigalopolis%20Zone%20%28Prerelease%29.mp3");
precacheAudio(35, "BTC1SSZ", "https://ia802301.us.archive.org/7/items/SonicClassic2Soundtrack/A44a%20-%20Gigalopolis%20Zone.mp3");
precacheAudio(36, "BTC1CCZ", "https://ia802301.us.archive.org/7/items/SonicClassic2Soundtrack/A45b%20-%20Robot%20Rave%20Zone%20%28Old%29.mp3");
precacheAudio(-1, "Tutorial", "TutorialZone.mp3")
precacheAudio(-2, "LVLSELECT", "https://ia802301.us.archive.org/7/items/SonicClassic2Soundtrack/C36%20-%20Sonic%202%20Options%20%28Online%20Lobby%29.mp3");

if(scene === "opencard"){
if(mode === 1){
    if(level === 0){
    playAudio(30);
    }
    if(level === 1){
        playAudio(30);
        }
        if(level === 2){
            playAudio(31);
            }
            if(level === 3){
                playAudio(31);
                }
                if(level === 4){
                    playAudio(32);
                    }
                    if(level === 5){
                        playAudio(32);
                        }
                        if(level === 6){
                            playAudio(33);
                            }
                            if(level === 7){
                                playAudio(33);
                                }
                                if(level === 8){
                                    playAudio(34);
                                    }
                                    if(level === 9){
                                        playAudio(34);
                                        }
                                        if(level === 10){
                                            playAudio(35);
                                            }
                                            if(level === 11){
                                                playAudio(35);
                                                }
                                                if(level === 12){
                                                    playAudio(36);
                                                    }
                                                    if(level === 13){
                                                        playAudio(36);
                                                        }
}

if(mode === 0){
if(level === 9){
        
    playAudio(0);
};
if(level === 10){
        
    playAudio(0);
};
if(level === 11){
        
    playAudio(7);
};
if(level === 24){
playAudio(15);
};
if(level === 25){
playAudio(15);
};



if(level === 0){
        
playAudio(1);

};

if(level === 1){
        
    playAudio(1);
};
if(level === 2){
        
    playAudio(2);
};

if(level === 3){
    playAudio(3);
    
}
if(level === 4){
    playAudio(3);
}
if(level === 5){
    playAudio(4);
}

if(level === 6){
    playAudio(5);
}
if(level === 7){
    playAudio(5);
}
if(level === 8){
    playAudio(6);
}

if(level === 12){
    playAudio(8);
}
if(level === 13){
    playAudio(8);
}
if(level === 14){
    playAudio(8);
}

if(level === 15){
    playAudio(9);
}
if(level === 16){
    playAudio(10);
}
if(level === 17){
    playAudio(11);
}

if(level === 18){
    playAudio(12);
}
if(level === 19){
    playAudio(12);
}
if(level === 20){
    playAudio(12);
}

if(level === 21){
    playAudio(13);
}
if(level === 22){
    playAudio(13);
}
if(level === 23){
    playAudio(14);
}
}
}

if(scene === "opencard"){
if(mode === 3){
playAudio(-1);

}
}
if(scene === "lvls"){

    playAudio(-2);
}






    
draw = function(){
    cursor("default");
    if(keys[54]){
funny1 = true;
scene = "gottaremovethisinthefinalrelease";
    }
    
    if (imgIndex < images.length) {
        // Clear background
        background(0, 0, 0, 0);
        
        // The current image to load
        curImg = images[imgIndex];
        
        // Draw the image you want to load
        curImg.display();
        
        // Use "get" to add the image to the other array
        loadedImages.push(get(0, 0, curImg.w, curImg.h));
        
        // Move on to the next image
        imgIndex ++;
        
        // Cover it up
        background(255, 255, 255);
        fill(0, 0, 0);
        text("+-=- LOADING -=-+", 300, 300);
    }
    if(circles[0].hearts < 0){
        deathtime ++;
    }
    
    
    if(circles[0].state === "Burn"){
    poweruptime++;
}
if(circles[0].state === "Breeze"){
    poweruptime++;
}
if(circles[0].state === "Speedy"){
    poweruptime++;
}
if(poweruptime > 800){
    circles[0].state = "Normal";
    speedshoes = false;
    poweruptime = 0;
}
    if(gamemode === 0){
        
    
    if(level === 2){
        
        
    }
    }
    
    if(gamemode === 1){
        
            bg2a();
        
    }
    
    
    chemy = chemy + 2;
    if(chemy > 580){
        chemy = 0;
    }
    
    noStroke();
    
    
    runParticles();
    pformy = pformy + 1;
    
    lvlsystem();
    
    if(circles[0].state === "Speedy"){
        if(frameCount%1 === 0){
   trailsArr.unshift(new Trail(circles[0].x+20,circles[0].y+20,40,40, "bluey"));
    }
    }
    
    
    
    
    if(bdbug){
        circles[0].x = mouseX;
        circles[0].y = mouseY;
    }
    
    for (var i = particlez.length-1; i > 0; i--){
            particlez[i].draw();
            particlez[i].update();
            
            if(particlez[i].fade < 0 ){
                particlez.splice(i,1);
            }
        }

    
    
    
    
    
    
    
    
    
    
    
    
    switch(scene){
        case "Logo":
            romanIntro.update();
        break;
        case "poster":
            poster2();
        break;
        case "lvls":
            lvlselect();
        break;
        case "E1":
            Extras1();
        break;
        case "WMCS1":
            //WorldMapEEZ();
        break;
        case "Options":
            Optionz();
        break;
        case "TA":
            TimeAtt();
        break;
        case "load":
            loadImages(function() {
                // upon load complete call this function which sets the scene to menu
                scene = "opencard";
            });
            background(0);
            loadingscreen();
            pushMatrix();
            image(Get('BlueyandBolty'), 580, 530, 125, 50);
            popMatrix();
            //levels.loadToVram();
        break;
        case "intro": 
            frtimer++;
            bg1();
            fill(4, 4, 209, 100);
            rect(0, 0, width, height);
            noStroke();
            pushMatrix();
            translate(300, 300);
            fill(0, 247, 255, 100);
            for (var i = 0; i < 10; i++) {
              quad(-20, 0, 20, 0, 100, -500, -100, -500);
              rotate(36);
            }
popMatrix();
            bluey(100, bluY, 0.6);
            if(frameCount > 1255){
                bluY += bluGain;
                if(bluGain !== 0){
                    blueRot ++;
                }
                bluGain += 0.05;
                if(bluY + 25 > 600){
                    bluGain *= -0.65;
                }
                if(bluGain < 0.1 && bluGain > -0.1 && bluY > 575){
                    bluGain = 0;
                    if(blueRot < 1080){
                        blueRot += 2;
                    }
                    bolty(null+100, null+2, 0.6);
                    if(boltyX > 400){
                        boltyX -= 1;
                    }
                }
                fill(0);
                textSize(25);
                text("Two Circles \nand 1 Cube", textx, 300);
                textSize(20);
                textFont(createFont("Kristen ITC"));
                text("Bluey", 150, texty);
                textFont(createFont(""));
                text("Bolty!", boltyX + 50, 530);
                textSize(200);
                textFont(createFont("Impact Bold"));
                text("+", 250, textY);
                fill(18, 16, 16);
                textSize(150);
                text("+", 264, textY - 20);
                textx = textx + 5;
                texty = texty + 5;
                textY = textY + 5;
                if(textx > 300){
                    textx = 350;
                }
                if(texty > 560){
                    texty = 560;
                }
                if(textY > 580){
                    textY = 610;
                }
                if(frameCount > 1700){
                    if(boltW === 0){
                        boltW = 2;
                        boltH = 2;
                    }
                    boltH *= 1.1;
                    boltW *= 1.1;
                    
                
                }
                if(frtimer > 1390){
                    fill(0);
                    textSize(40);
                    text("IN", 350, 380);
                    
                }
                if(frtimer === 1520){
                    scene = "Menu";
                }
                
            }
            
        break;
        case "bstory":
            whatscene();
        break;
        case "collected":
            SScomplete();
        break;
        case "Fintro":
            KAIntro();
        break;
        case "lvltrans1":
            scene7();
        break;
        case "lvltrans2":
            scene8();
        break;
        case "lvltrans3&k":
            scene9();
        break;
        case "lvltrans4ep1":
            scene10();
        break;
        case "Title":
            Title();
        break;
        case "CMode":
            CMode();
        break;
        case "Menu":
            Menu();
        break;
        case "SaveF":
            SaveSelect();
        break;
        case "Btitle":
            intro();
        break;
        case "Win":
            levels.apply();
            Win();
        break;
        case "gottaremovethisinthefinalrelease":
            background(0);
fill(255);
textSize(80);
text("Bluey thinks your a little\nstupid ass Faggot \nand thats right!", 100, 100);

          titlecard();
          
        break;
        case "warn":
            warningscreen();
        break;
        case "nailThumb":
            blogo();
        break;
        case "disclaim":
            disclaimer();
        break;
        case "Unlockables":
            UNlockables();
        break;
        case "Play":
            time++;
            if(level === 3 && circles[0].x > 3000){
            BG4IN();
    }
            levels.apply();
            HUD();
            licon();

            
            
        break;
        case "opencard":
            disablekeys();
            HUD();
            //levels.loadToVram();
            levels.apply();
            titlecard();
            
        break;
        case "Paused":
            disablekeys();
            levels.apply();
            Pause();
            
        break;
        case "womp":
            levels.apply();
            gameover();
        break;
        case "unfinished":
            


unfinishedscreen();

    



        
          
         break;

         
         
        
        
    }
if(crt === true){
    image(crtf, 0, 0);
}
if(crt2 === true){
    image(crtf2, 0, 0);
}
if(crt3 === true){
    image(crtf3, 0, 0);
}

/* The transition itself. */
noStroke();
rectMode(CORNER);
fill(0, 0, 200);
if(trans.active){ // If the transition is running...
    if(!trans.out){ // ... and the transition is coming in
        rect(0, 0, 800 - trans.w, 600); // When the transition is coming in, the width of the rectangle is "400 - trans.w". Since trans.w is 400, it starts out as zero. When trans.w decreases, the width of the rectangle will increase.
        
        if(trans.w < 1){ // If the width of the rectangle covers the screen,
            scene = trans.nextScene; // Change the scene.
            trans.w = 800; // Reset the rectangle's width to 400.
            trans.out = true; // The transition is now going out.
        }
        
    } else { // ... if the transition is going out
        rect(0, 0, trans.w, 600); // When the transition is going out, the width of the rectangle is "trans.w". trans.w starts out as 400. When trans.w decreases, the width of the rectangle will decrease.
        if(trans.w < 1){ // If the width of the rectangle is less than 0.1,
            trans.active = false; // Turn the transition off.
            trans.out = false; // The transition will be going in when it turns back on.
            trans.w = 800; // Reset the rectangle's width to 400.
        }
    }
    
    trans.w /= 1.2; // Slowly decrease trans.w.
}
        
    
    
    
    
    
    
}; // Draw everything

if(width !== 800){
    scene = "warn";
    
}
if(frameRate > 50){
    frameRate(60);
}

}

runPJS(program);
var hr, mn, sc,scAngle, mnAngle, hrAngle

function preload(){
    
}

function setup(){
   hr=hour();
   mn=minute();
   sc=second();
   angleMode(DEGREES)
    
}

function draw(){
    scAngle=map(sc,0,60,0,360)
    mnAngle=map(mn,0,60,0,360)
    hrAngle=map(hr,0,60,0,360)

    push();
    rotate(scAngle)
    rotate(mnAngle)
    rotate(hrAngle)
    stroke(255,0,0)
    strokeWeight(7)
    line(0,0,100,0)
}   


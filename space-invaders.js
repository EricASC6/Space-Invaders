let player = {
    x: 600,
    y: 575,
    h: 25,
    w: 50,
    col: "white",
    speed: 10
}


let bullet = { 
    x: player.x,
    y: 550,
    h: 25,
    w: 5,  
    r: 255,
    g: 255,
    b: 3,
    speed: 20,
    state: "ready"
}

let alien = {
    x: 600,
    y: 100,
    diameter: 50,
    col: "green",
    speed: 5,
    textcol: "white"
}

// alien functions
function displayAlien(){
    fill(alien.col);
    circle(alien.x, alien.y, alien.diameter)
    fill(alien.textcol)
    text("Robert", alien.x - 17, alien.y)
}

function moveAlien(){
    if (alien.x > 1175){
        alien.speed *= -1
        alien.y += 50;
    } else if (alien.x < 25){
        alien.speed *= -1
        alien.y += 50;
    } 
    alien.x += alien.speed;
}


// player functions
function displayPlayer(){
    rectMode(CENTER);
    fill(player.col);
    rect(player.x, player.y, player.w, player.h);
    fill("black");
    text("Akinola", player.x - 20, player.y+5)
}

function moveLeft(){
    if (player.x > 25){
        player.x -= player.speed;
    }
}

function moveRight(){
    if (player.x < 1175){
        player.x += player.speed;
    }
}


// bullet functions
function displayBullet(){
    if (bullet.state === "ready"){
        bullet.state = "fire";
        bullet.x = player.x;
        bullet.y = 550;
    }
}



function fireBullet(){
    bullet.x = player.x;
    rectMode(CENTER);
    fill(bullet.r, bullet.g, bullet.b);
    rect(bullet.x, bullet.y, bullet.w, bullet.h);
}


function keyPressed(){
     if (keyCode === 32){
        displayBullet()
    }
}

function collision(bullet, alien){
    distance = dist(bullet.x, bullet.y, alien.x, alien.y)
    if (distance <= (alien.diameter/2)){
        return true
    } else {
        return false
    }
}



function setup(){
    createCanvas(1200, 600);
}

function draw(){
    background(0);

    // Player
    displayPlayer();

    if (keyIsDown(LEFT_ARROW)){
        moveLeft()
    } else if (keyIsDown(RIGHT_ARROW)){
        moveRight()
    }

    // Alien
    displayAlien();
    moveAlien();

    // Bullet 
    if (bullet.state === "fire"){
        bullet.r = 255;
        bullet.g = 255;
        bullet.b = 3;
        fireBullet()
        bullet.y -= bullet.speed;
        if (bullet.y < 25){
            bullet.r = 0;
            bullet.g = 0;
            bullet.b = 0;
            bullet.state = "ready";
        }
    }
    
    if (collision(bullet, alien)){
        alien.col = "black";
        alien.textcol = "black"
    }
}



  















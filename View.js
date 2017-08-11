var resources = {
    "tileType" : {
        blank: "blankTile.png",
        start: "startingTileEasy.png",
        north: "north.png",
        east: "east.png",
        south: "south.png",
        west: "west.png",
        northSouth: "northSouth.png",
        eastWest: "eastWest.png",
        eastSouth: "eastSouth.png",
        southWest: "southWest.png",
        northEast: "northEast.png",
        northWest: "northWest.png",
        northEastSouth: "northEastSouth.png",
        eastSouthWest: "eastSouthWest.png",
        northSouthWest: "northSouthWest.png",
        northEastWest: "northEastWest.png",
        northEastSouthWest: "northEastSouthWest.png"
    },
    "encounterType": {
        easy: "Media/skeleton.png",
        medium: "Media/lion.png",
        hard: "Media/knight.png",
        key: "Media/key.png",
        chest: "Media/chest.png",
        upAttack: "Media/sword.png",
        recoverHP: "Media/bread.png"
    },
    "playerType":{
        option1:"Media/human.png",
        option2:"",
        option3:""
    },
    "dieFace": [
        "dieOne.png",
        "dieTwo.png",
        "dieThree.png",
        "dieFour.png",
        "dieFive.png",
        "dieSix.png"
    ]
};




//set up game
function genGrid(){
    var html="<table id='gameGrid'>";
    //var location = gameState.player.position;
    var playerImage;
    for (var r=0; r<6;r++)
    {
        html += "<tr>";
        for(var c=0;c<6;c++)
        {
            if(c=== 0 && r=== 5)
            {
                playerImage = "<img id='playerImage' src='Media/human.png'>";
            }
            else
            {
                playerImage = "<img class ='blank' src=Media/"+ resources.tileType.blank +">";
            }
            //match the input from the game state with its correct img in the source object.
            var temp = getTile(r,c);
           var imgTile = resources.tileType[temp];
            html+= "<td class ='gameBoardCells' id='("+r + ','+ c+")' style= 'background-image:url(Media/"+ imgTile +")'>" + playerImage +" </td>";

        }
        html += "</tr>";
    }
    html+="</table>";
    return html;
}
function genHPCard(){
    var card = document.getElementById("hpCardContainer");
    var html = "<table id='hpCard'>";
    var temp = 1;
    for (var r =0; r< 5;r++)
    {
        html+= "<tr>";
            for (var c = 0; c<3;c++)
            {

                html+="<td id='hp"+ temp +"' class='hpCells'>"+ temp +"</td>";
                temp++;
            }
            html+="</tr>"
    }

    card.innerHTML = html;
    var container = document.getElementById("hpCardContainer");
    var cells = container.getElementsByTagName("td");
    cells[gameState.player_status.hp - 1].style.borderBottom ="black solid";

}
function displayObjectives(){
    var displayTarget = document.getElementById("objectivesContainer");

    displayTarget.innerHTML = "Objectives:<br><ol>";

    displayTarget.innerHTML += "<li>Flip over tiles to explore the dungeon</li>";
    displayTarget.innerHTML += "<li>Kill monsters to get gold</li>";
    displayTarget.innerHTML += "<li>collect 25 gold, then return to start</li>";
    displayTarget.innerHTML += "<li>Collect gear to help you in the dungeon</li>";

    displayTarget.innerHTML +="</ol>";
}
////////////////////////////////

//control functions

//movement and tile flipping
function clearClickableSettings(){
    var tableCells = document.getElementsByTagName("td");
    for (i = 0; i<tableCells.length;i++){
    tableCells[i].onclick = "";
    }
}
function makeClickable(){
    var row = gameState.player_status.position[1];
    var col = gameState.player_status.position[3];
    //this takes care of the starting piece
    var clickedSpace = document.getElementById("("+ row  +","+ col +")");
        clickedSpace.onclick = move;
        /////////
       var temp = gameState.grid_paths[row][col];
    if(temp.n){
        --row;
        var option1 = document.getElementById("("+ row  +","+ col +")");
        if(!gameState.grid_paths[row][col].flipped)
        option1.onclick = flip;
        else if (gameState.grid_encounters[row][col]=== "easy" || gameState.grid_encounters[row][col]=== "medium" || gameState.grid_encounters[row][col]=== "hard" ){
            option1.onclick = battle;
        }
        else{
            option1.onclick = move;
        }
        ++row;
    }
    if(temp.e){
        ++col;
        var option2 = document.getElementById("("+ row  +","+ col +")");
        if(!gameState.grid_paths[row][col].flipped)
        option2.onclick = flip;
        else if (gameState.grid_encounters[row][col]=== "easy" || gameState.grid_encounters[row][col]=== "medium" || gameState.grid_encounters[row][col]=== "hard" ){

            option2.onclick = battle;
        }
        else{
            option2.onclick = move;
        }
        --col;
    }
    if(temp.s){
        ++row;
        var option3 = document.getElementById("("+ row  +","+ col +")");
        if(!gameState.grid_paths[row][col].flipped)
        option3.onclick = flip;
        else if (gameState.grid_encounters[row][col]=== "easy" || gameState.grid_encounters[row][col]=== "medium" || gameState.grid_encounters[row][col]=== "hard" ){

            option3.onclick = battle;
        }
        else{
            option3.onclick = move;
        }
        --row;
    }
    if(temp.w){
        --col;
        var option4 = document.getElementById("("+ row  +","+ col +")");
        if(!gameState.grid_paths[row][col].flipped)
        option4.onclick = flip;
        else if (gameState.grid_encounters[row][col]=== "easy" || gameState.grid_encounters[row][col]=== "medium" || gameState.grid_encounters[row][col]=== "hard" ){

            option4.onclick = battle;
        }
        else{
            option4.onclick = move;
        }
        ++col;
    }

}
function flip(){

    var col = this.cellIndex;
    var row = this.parentNode.rowIndex;
    var temp = gameState.grid_paths[row][col];

    if (temp.flipped === false) {
        this.innerHTML = "";
        temp.flipped = true;
        this.onclick = move;
        var cell = gameState.grid_encounters[row][col];
        if( cell !=="") {
            var imgInsert = resources.encounterType[cell];
            this.innerHTML = "<img src= "+ imgInsert +">";

            if(cell === "easy" || cell === "medium" || cell === "hard") {
               this.onclick = battle;
            }
        }
        }
       else{
           this.onclick = move;
       }

    }
function move(){
    //save click location
    var col = this.cellIndex;
    var row = this.parentNode.rowIndex;


    var clickedSpace = "("+ row +","+ col +")";
//handle loot pick ups
    var passable = true;
    var victory = false;
   switch (clickedSpace) {
       //sword
       case "(5,3)":
           gameState.player_status.weapon = "Sword";
           gameState.player_status.attackUp = 1;
           document.getElementById("swordSpot").style.display = "inline";
           break;
           //key
       case "(2,3)":
           gameState.player_status.key = true;
           document.getElementById("keySpot").style.display = "inline";
           break;
           //chest
       case "(4,5)":
           if(gameState.player_status.key){
               gameState.player_status.gold += 7;
               document.getElementById("keySpot").style.display = "none";
               updatePlayerDisplay();
           }
           else{
               passable = false;
               alert("you must first find the key to open this chest!");
           }
           break;
       case "(5,0)":
           if(gameState.player_status.gold >= 25)
           {
               victory = true;
           }

   }


    //move player
    if(passable) {
        var erase = document.getElementById(gameState.player_status.position);
        erase.innerHTML="";
        gameState.player_status.position = "("+row +","+col+")";
        var temp = this;
        temp.innerHTML = "<img class='playerImage' src='Media/human.png'>";
        clearClickableSettings();
        makeClickable();
    }
    if (victory){
       gameOver(true);
    }
}
////////////////////////////////

//battle logic
function battle(){
    //tee up current_foe object and battleBox display
    var battleBox = document.getElementById("battleContainer");
    battleBox.style.display = "inline-flex";

    var col = this.cellIndex;
    var row = this.parentNode.rowIndex;
    var foe = gameState.grid_encounters[row][col];
    var foeImage = resources.encounterType[foe];

    var foeBox = document.getElementById("foeContainer");
    foeBox.style.backgroundImage = "url("+ foeImage +")";

    var playerBox = document.getElementById("playerContainer");
    playerBox.style.backgroundImage = "url("+  resources.playerType["option1"] +")";

    var foeDice = document.getElementById("foeDice");
    var playerDice = document.getElementById("playerDice");

    foeDice.innerHTML = "<img src='Media/blankTile.png'>";

    playerDice.innerHTML = "<img src='Media/blankTile.png'>";
//make a copy of the foe type into gameState.current_foe
    var foe_selector;
    switch (foe) {
        case "easy":
            foe_selector = 0;
            break;
        case "medium":
            foe_selector = 1;
            break;
        case "hard":
            foe_selector = 2;
            break;
    }
   gameState.current_foe.hp = gameState.foe_types[foe_selector].hp;
    gameState.current_foe.armor = gameState.foe_types[foe_selector].armor;
    gameState.current_foe.gold = gameState.foe_types[foe_selector].gold;
    gameState.current_foe.weapon = gameState.foe_types[foe_selector].weapon;
    gameState.current_foe.attackUp = gameState.foe_types[foe_selector].attackUp;
    gameState.current_foe.position= "("+ row +","+ col + ")";
    //generate and display hp counter for foe
    genFoeHp();
    document.getElementById("foeArmor").innerHTML = "Armor: <br>"+ gameState.current_foe.armor;
    document.getElementById("foeWeapon").innerHTML = "Weapon: <br>"+ gameState.current_foe.weapon +"+"+ gameState.current_foe.attackUp;
    document.getElementById("playerArmor").innerHTML = "Armor: <br>"+ gameState.player_status.armor;
    document.getElementById("playerWeapon").innerHTML = "Weapon: <br>"+ gameState.player_status.weapon +"+"+ gameState.player_status.attackUp;
    //display attack button and dice

    document.getElementById("attackButton").style.display = "inline";
   // document.getElementById("instaGibButton").style.display = "inline";
    document.getElementById("foeContainer").style.display = "inline";
    document.getElementById("foeHp").style.display = "inline";
}
function attack(){
    //grab current foe data
    var foe = gameState.current_foe;
    //roll for player and foe
    var foe_roll = roll(6);
    var player_roll = roll(6);
    document.getElementById("playerDice").innerHTML = "<img src=Media/"+ resources.dieFace[player_roll - 1] +">";
    document.getElementById("foeDice").innerHTML = "<img src=Media/"+ resources.dieFace[foe_roll - 1] +">";
    if (gameState.current_foe.attackUp){
        ++foe_roll;
    }
    if (gameState.player_status.weapon === "Sword")
    {
        ++player_roll;
    }
    //compare values with needed values for a successful attack then apply changes
    if (player_roll >= foe.armor) {
        document.getElementById("playerHit").innerHTML = "Hit!";
        --foe.hp;
        genFoeHp();
    }else if(player_roll < foe.armor)
    {
        document.getElementById("playerHit").innerHTML = "Miss...";
    }
    if(foe.hp > 0 && foe_roll >= gameState.player_status.armor){
        document.getElementById("foeHit").innerHTML = "Hit!";
        --gameState.player_status.hp;
    }else if(foe.hp > 0 && foe_roll < gameState.player_status.armor){
        document.getElementById("foeHit").innerHTML = "Miss...";
    }
    updatePlayerDisplay();

    //check aftermath and apply
    if(gameState.player_status.hp === 0)
    {
         gameOver(false);
    }else if(foe.hp === 0){
        document.getElementById("foeHit").innerHTML = "Dead!";
        gameState.player_status.gold += foe.gold;
        document.getElementById("lootBox").innerHTML = "Loot received: <br> "+ foe.gold +" gold!";
        updatePlayerDisplay();
        document.getElementById("returnToDungeonButton").style.display = "inline-block";
        document.getElementById("attackButton").style.display = "none";
        document.getElementById("instaGibButton").style.display = "none";


        var clearSpace = document.getElementById(foe.position);
        clearSpace.innerHTML = "";
        clearSpace.onclick = move;
    }

}
function returnToDungeon(){
    document.getElementById("battleContainer").style.display = "none";
    var battleBox = document.getElementById("battleContainer");
    battleBox.style.display = "none";
    document.getElementById("returnToDungeonButton").style.display = "none";
    document.getElementById("lootBox").innerHTML = "";
    document.getElementById("foeHit").innerHTML="";
    document.getElementById("playerHit").innerHTML="";
}
function roll(max){
    return Math.floor(Math.random() * max) + 1;
}
function genFoeHp(){
    var foe_hp_display = document.getElementById("foeHp");
    foe_hp_display.innerHTML ="<table id='foeHpTable'>";
    for(var i =0; i<gameState.current_foe.hp; i++){
        foe_hp_display.innerHTML +="<tr> <td id="+ i +"> <img src='Media/heart.png'> </td> </tr>"
    }
    foe_hp_display.innerHtml +="</table>";
}
////////////////////////////////
function updatePlayerDisplay(){
   //update player hp
    var container = document.getElementById("hpCardContainer");
    var cells = container.getElementsByTagName("td");
    cells[gameState.player_status.hp].style.borderBottom ="none";
    if (gameState.player_status.hp === 0){
        var table = document.getElementById("hpCard");
        table.style.backgroundColor = "red";
    }
    else {
        cells[gameState.player_status.hp - 1].style.borderBottom = "black solid";


        //update player gold
        var gold = document.getElementById("goldCount");
        gold.innerHTML = gameState.player_status.gold
    }
}
//end game conditions
function gameOver(won){
    if (won){
        document.getElementById("sound").play();
        alert("Congratulations! You have defeated the dungeon of Mazard!");

        location.reload(true);
    }
    else{
        alert("Your body has been lost in the catacombs of the dungeon......");
        location.reload(true);
    }
}

//////cheat codes///////
//kill monsters instantly
function instaGib() {
    gameState.player_status.gold += gameState.current_foe.gold;
    updatePlayerDisplay();
    document.getElementById("returnToDungeonButton").style.display = "inline-block";
    var clearSpace = document.getElementById(gameState.current_foe.position);
    clearSpace.innerHTML = "";
    clearSpace.onclick = move;

    document.getElementById("attackButton").style.display = "none";
    document.getElementById("instaGibButton").style.display = "none";
    document.getElementById("foeHp").style.display = "none";
}
//get 25 gold to satisfy win condition
function maxGold(){
    gameState.player_status.gold = 25;
    updatePlayerDisplay();

}
//instant lose
function suicide(){
    gameState.player_status.hp = 0;
    var container =  document.getElementById("hpCardContainer");
    var cells = container.getElementsByTagName("td");
    for(var i =0; i <cells.length;i++){
        cells[i].style.borderBottom = "none";
    }
    updatePlayerDisplay();
    gameOver(false);
}

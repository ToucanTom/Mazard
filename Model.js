var gameState = {
"grid_tile_images": [
    ["east","eastWest","eastWest","eastSouthWest","eastWest","west"],
    ["eastSouth","eastWest","eastWest","northSouthWest","eastSouth","west"],
    ["northEast","eastWest","southWest","north","northEast",'southWest'],
    ["eastSouth","eastWest","northEastSouthWest","eastWest","eastWest","northSouthWest"],
    ["northSouth","south","northEastSouth","eastWest", "southWest","north"],
    ["start","northWest","north","east","northEastWest","west"]
],
    "grid_paths": [
        [{flipped:false, n:false, e:true, s:false, w:false},
            {flipped:false, n:false, e:true, s:false, w:true},
            {flipped:false, n:false, e:true, s:false, w:true},
            {flipped:false, n:false, e:true, s:true, w:true},
            {flipped:false, n:false, e:true, s:false, w:true},
            {flipped:false, n:false, e:false, s:false, w:true}],
        [{flipped:false, n:false, e:true, s:true, w:false},
            {flipped:false, n:false, e:true, s:false, w:true},
            {flipped:false, n:false, e:true, s:false, w:true},
            {flipped:false, n:true, e:false, s:true, w:true},
            {flipped:false, n:false, e:true, s:true, w:false},
            {flipped:false, n:false, e:false, s:false, w:true}],
        [{flipped:false, n:true, e:true, s:false, w:false},
            {flipped:false, n:false, e:true, s:false, w:true},
            {flipped:false, n:false, e:false, s:true, w:true},
            {flipped:false, n:true, e:false, s:false, w:false},
            {flipped:false, n:true, e:true, s:false, w:false},
            {flipped:false, n:false, e:false, s:true, w:true}],
        [{flipped:false, n:false, e:true, s:true, w:false},
            {flipped:false, n:false, e:true, s:false, w:true},
            {flipped:false, n:true, e:true, s:true, w:true},
            {flipped:false, n:false, e:true, s:false, w:true},
            {flipped:false, n:false, e:true, s:false, w:true},
            {flipped:false, n:true, e:false, s:true, w:true}],
        [{flipped:false, n:true, e:false, s:true, w:false},
            {flipped:false, n:false, e:false, s:true, w:false},
            {flipped:false, n:true, e:true, s:true, w:false},
            {flipped:false, n:false, e:true, s:false, w:true},
            {flipped:false, n:false, e:false, s:true, w:true},
            {flipped:false, n:true, e:false, s:false, w:false}],
        [{flipped:true, n:true, e:true, s:false, w:false},
            {flipped:false, n:true, e:false, s:false, w:true},
            {flipped:false, n:true, e:false, s:false, w:false},
            {flipped:false, n:false, e:true, s:false, w:false},
            {flipped:false, n:true, e:true, s:false, w:true},
            {flipped:false, n:false, e:false, s:false, w:true}]
    ],
    "grid_encounters": [
        ["medium","","","","","hard"],
        ["","","","","","hard"],
        ["","","","key","",""],
        ["","","","","",""],
        ["","easy","","","","chest"],
        ["","","easy","upAttack","","medium"]
    ],
    player_status:  {
        hp: 10,
        armor: 3,
        gold: 0,
        key: false,
        weapon: "bare hands",
        attackUp: 0,
        position: "(5,0)"

},
    "foe_types": [
        {level: "easy", hp:1, image: resources.encounterType.easy, armor:2, weapon:"Bone Fist", attackUp:0, gold:3},
        {level:"medium", hp:2, image:resources.encounterType.medium, armor:3, weapon:"Claws", attackUp:2, gold:5},
        {level: "hard", hp:3, image:resources.encounterType.hard, armor:4, weapon:"Sword", attackUp:1, gold:6}
    ],
    current_foe: {
        hp:0,
        armor:0,
        weapon: "",
        attackUp: 0,
        gold:0,
        position: "(0,0)"
    }


};

function getTile(row, col){
    //check to make sure the arguments are inbounds
    if (row < 7 && row >= 0 && col < 7 && col >= 0)
        return gameState.grid_tile_images[row][col];
    else
        console.log("one of the values used for getTile is out of bounds");
}
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
        [{flipped:false, n:false, e:false, s:false, w:false},
            {flipped:false, n:false, e:false, s:false, w:false},
            {flipped:false, n:false, e:false, s:false, w:false},
            {flipped:false, n:false, e:false, s:false, w:false},
            {flipped:false, n:false, e:false, s:false, w:false},
            {flipped:false, n:false, e:false, s:false, w:false},
            {flipped:false, n:false, e:false, s:false, w:false}],
        [{flipped:false, n:false, e:false, s:false, w:false},
            {flipped:false, n:false, e:false, s:false, w:false},
            {flipped:false, n:false, e:false, s:false, w:false},
            {flipped:false, n:false, e:false, s:false, w:false},
            {flipped:false, n:false, e:false, s:false, w:false},
            {flipped:false, n:false, e:false, s:false, w:false},
            {flipped:false, n:false, e:false, s:false, w:false}],
        [{flipped:false, n:false, e:false, s:false, w:false},
            {flipped:false, n:false, e:false, s:false, w:false},
            {flipped:false, n:false, e:false, s:false, w:false},
            {flipped:false, n:false, e:false, s:false, w:false},
            {flipped:false, n:false, e:false, s:false, w:false},
            {flipped:false, n:false, e:false, s:false, w:false},
            {flipped:false, n:false, e:false, s:false, w:false}],
        [{flipped:false, n:false, e:false, s:false, w:false},
            {flipped:false, n:false, e:false, s:false, w:false},
            {flipped:false, n:false, e:false, s:false, w:false},
            {flipped:false, n:false, e:false, s:false, w:false},
            {flipped:false, n:false, e:false, s:false, w:false},
            {flipped:false, n:false, e:false, s:false, w:false},
            {flipped:false, n:false, e:false, s:false, w:false}],
        [{flipped:false, n:false, e:false, s:false, w:false},
            {flipped:false, n:false, e:false, s:false, w:false},
            {flipped:false, n:false, e:false, s:false, w:false},
            {flipped:false, n:false, e:false, s:false, w:false},
            {flipped:false, n:false, e:false, s:false, w:false},
            {flipped:false, n:false, e:false, s:false, w:false},
            {flipped:false, n:false, e:false, s:false, w:false}],
        [{flipped:false, n:false, e:false, s:false, w:false},
            {flipped:false, n:false, e:false, s:false, w:false},
            {flipped:false, n:false, e:false, s:false, w:false},
            {flipped:true, n:true, e:true, s:false, w:true},
            {flipped:false, n:false, e:false, s:false, w:false},
            {flipped:false, n:false, e:false, s:false, w:false},
            {flipped:false, n:false, e:false, s:false, w:false}]
    ],
    "grid_Placement_Options":[
        [{available: true, location: "(0,0)", n:false, e:false, s:false, w:false},
            {available: true, location: "(0,1)", n:false, e:false, s:false, w:false},
            {available: true, location: "(0,2)", n:false, e:false, s:false, w:false},
            {available: true, location: "(0,3)", n:false, e:false, s:false, w:false},
            {available: true, location: "(0,4)", n:false, e:false, s:false, w:false},
            {available: true, location: "(0,5)", n:false, e:false, s:false, w:false},
            {available: true, location: "(0,6)", n:false, e:false, s:false, w:false}],
        [{available: true, location: "(1,0)", n:false, e:false, s:false, w:false},
            {available: true, location: "(1,1)", n:false, e:false, s:false, w:false},
            {available: true, location: "(1,2)", n:false, e:false, s:false, w:false},
            {available: true, location: "(1,3)", n:false, e:false, s:false, w:false},
            {available: true, location: "(1,4)", n:false, e:false, s:false, w:false},
            {available: true, location: "(1,5)", n:false, e:false, s:false, w:false},
            {available: true, location: "(1,6)", n:false, e:false, s:false, w:false}],
        [{available: true, location: "(2,0)", n:false, e:false, s:false, w:false},
            {available: true, location: "(2,1)", n:false, e:false, s:false, w:false},
            {available: true, location: "(2,2)", n:false, e:false, s:false, w:false},
            {available: true, location: "(2,3)", n:false, e:false, s:false, w:false},
            {available: true, location: "(2,4)", n:false, e:false, s:false, w:false},
            {available: true, location: "(2,5)", n:false, e:false, s:false, w:false},
            {available: true, location: "(2,6)", n:false, e:false, s:false, w:false}],
        [{available: true, location: "(3,0)", n:false, e:false, s:false, w:false},
            {available: true, location: "(3,1)", n:false, e:false, s:false, w:false}
            ,{available: true, location: "(3,2)", n:false, e:false, s:false, w:false},
            {available: true, location: "(3,3)", n:false, e:false, s:false, w:false},
            {available: true, location: "(3,4)", n:false, e:false, s:false, w:false},
            {available: true, location: "(3,5)", n:false, e:false, s:false, w:false},
            {available: true, location: "(3,6)", n:false, e:false, s:false, w:false}],
        [{available: true, location: "(4,0)", n:false, e:false, s:false, w:false},
            {available: true, location: "(4,1)", n:false, e:false, s:false, w:false},
            {available: true, location: "(4,2)", n:false, e:false, s:false, w:false},
            {available: true, location: "(4,3)", n:false, e:false, s:true, w:false},
            {available: true, location: "(4,4)", n:false, e:false, s:false, w:false},
            {available: true, location: "(4,5)", n:false, e:false, s:false, w:false},
            {available: true, location: "(4,6)", n:false, e:false, s:false, w:false}],
        [{available: true, location: "(5,0)", n:false, e:false, s:false, w:false},
            {available: true, location: "(5,1)", n:false, e:false, s:false, w:false},
            {available: true, location: "(5,2)", n:false, e:true, s:false, w:false},
            {available: false, location: "(5,3)", n:false, e:false, s:false, w:false},
            {available: true, location: "(5,4)", n:false, e:false, s:false, w:true},
            {available: true, location: "(5,5)", n:false, e:false, s:false, w:false},
            {available: true, location: "(5,6)", n:false, e:false, s:false, w:false}]

    ],
    "openSet":[],
    "current_Tile": {n:false, e:false, s:false, w:false},
    "closedSet": [],
    "grid_encounters": [
        ["medium","","","","","hard"],
        ["","","","","","hard"],
        ["","","","key","",""],
        ["","","","","",""],
        ["","easy","","","","chest"],
        ["","","easy","upAttack","","medium"]
    ],
    "grid2_tile_images":[
        ["","","","","",""],
        ["","","","","",""],
        ["","","","","",""],
        ["","","","","",""],
        ["","","","","",""],
        ["","","","","",""]
    ],


    player_status:  {
        hp: 10,
        armor: 3,
        gold: 0,
        key: false,
        weapon: "bare hands",
        attackUp: 0,
        position: "(5,3)"

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

/*function getTile(row, col){
    //check to make sure the arguments are inbounds
    if (row < 7 && row >= 0 && col < 7 && col >= 0)
        return gameState.grid_tile_images[row][col];
    else
        console.log("one of the values used for getTile is out of bounds");
}*/

/*
Original gameGrid
 ["east","eastWest","eastWest","eastSouthWest","eastWest","west"],
    ["eastSouth","eastWest","eastWest","northSouthWest","eastSouth","west"],
    ["northEast","eastWest","southWest","north","northEast",'southWest'],
    ["eastSouth","eastWest","northEastSouthWest","eastWest","eastWest","northSouthWest"],
    ["northSouth","south","northEastSouth","eastWest", "southWest","north"],
    ["start","northWest","north","east","northEastWest","west"] */
/*
    Original grid_paths
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
            {flipped:false, n:false, e:false, s:false, w:true}]*/
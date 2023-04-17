const PLAYER_X_IMAGE = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/x.png"
const PLAYER_O_IMAGE = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/circle.png"


const PLAYER_X = "X";
const PLAYER_O = "O";

const boxes = document.querySelectorAll("section div") || [];

//turn tracker
/** This tracks the players turn. If true then is X's turn and if false then is o's turn */
players_turn = false;


console.log(boxes)

for(const box of boxes){
    box.addEventListener("click", updateBox)
}


function updateBox(event) {
    console.log(event.target)

    const currentBox = event.target;
    console.log(currentBox.dataset)

    const currentMove = document.createElement("img");

    if(players_turn){
        currentMove.src = PLAYER_X_IMAGE;
        currentBox.dataset.player = PLAYER_X;
    }else{
        currentBox.dataset.player = PLAYER_O;
        currentMove.src = PLAYER_O_IMAGE;
    }

    players_turn  = !players_turn

    currentBox.appendChild(currentMove)
}
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newGame = document.querySelector(".Gnew");
let msgContant = document.querySelector(".w-msg");
let msg = document.querySelector(".msg");
let turnO = true;
let winner = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [2, 5, 8],
  [1, 4, 7],
  [2, 4, 6],
  [0, 4, 8],
];

const resetGame = () => {
    turnO = true;
    enableBox();
    msgContant.classList.add("hide");
}

const disableBox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }   
}

const enableBox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = '';
    }   
}

let showWinner = (winner) => {
    msg.innerText = `Congratulations, ${winner} is the Winner!`;
    msgContant.classList.remove("hide");
    disableBox();
}

let showTie = () => {
    msg.innerText = "Tie!";
    msgContant.classList.remove("hide");
    disableBox();
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.color = "brown";
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color = "blue";
            turnO = true;
        }

        box.disabled = true;
        chekWiner();
    });
});

const chekWiner = () => {
    for (let pattern of winner) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                return;  // Stop further checks if a winner is found
            }
        }
    }

    // Check for a tie
    if ([...boxes].every(box => box.innerText !== "")) {
        showTie();
    }
};

newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);

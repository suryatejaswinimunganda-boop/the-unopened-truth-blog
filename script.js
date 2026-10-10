// ==============================
// GAME VARIABLES
// ==============================

let timeLeft = 300; // 5 minutes

let timerInterval;

let drawerUnlocked = false;

let hasKey = false;


// ==============================
// START GAME
// ==============================

function startGame() {

    document
        .getElementById("startScreen")
        .classList.add("hidden");


    document
        .getElementById("gameScreen")
        .classList.remove("hidden");


    startTimer();

}


// ==============================
// TIMER
// ==============================

function startTimer() {

    timerInterval = setInterval(function () {

        timeLeft--;


        let minutes =
            Math.floor(timeLeft / 60);

        let seconds =
            timeLeft % 60;


        if (seconds < 10) {
            seconds = "0" + seconds;
        }


        document
            .getElementById("timer")
            .textContent =
            minutes + ":" + seconds;


        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            gameOver();

        }

    }, 1000);

}


// ==============================
// SHOW CLUES
// ==============================

function showClue(object) {

    let message =
        document.getElementById("message");


    if (object === "clock") {

        message.textContent =
            "⏰ The clock stopped at 7:25. Maybe these numbers are important...";

    }


    else if (object === "painting") {

        message.textContent =
            "🖼️ You notice three numbers hidden in the painting: 7 - 2 - 5.";

    }


    else if (object === "books") {

        message.textContent =
            "📚 One book is dusty and has a strange symbol on its cover.";

    }

}


// ==============================
// OPEN DRAWER
// ==============================

function openDrawer() {

    if (drawerUnlocked) {

        document.getElementById("message").textContent =
            "🗄️ The drawer is already open. You found a key!";

        return;

    }


    document
        .getElementById("puzzle")
        .classList.remove("hidden");

}


// ==============================
// CLOSE PUZZLE
// ==============================

function closePuzzle() {

    document
        .getElementById("puzzle")
        .classList.add("hidden");

}


// ==============================
// CHECK CODE
// ==============================

function checkCode() {

    let code =
        document
        .getElementById("codeInput")
        .value;


    let message =
        document
        .getElementById("codeMessage");


    // Correct code

    if (code === "725") {

        drawerUnlocked = true;

        hasKey = true;


        message.textContent =
            "✅ Correct! You found a 🔑 key!";


        document
            .getElementById("message")
            .textContent =
            "🔑 You found a key inside the drawer. Try the exit door!";


        setTimeout(function () {

            closePuzzle();

        }, 1500);

    }


    else {

        message.textContent =
            "❌ Wrong code! Look carefully for more clues.";

    }

}


// ==============================
// EXIT DOOR
// ==============================

function tryDoor() {

    let message =
        document.getElementById("message");


    if (hasKey) {

        clearInterval(timerInterval);


        document
            .getElementById("gameScreen")
            .classList.add("hidden");


        document
            .getElementById("winScreen")
            .classList.remove("hidden");

    }


    else {

        message.textContent =
            "🚪 The door is locked! You need a key.";

    }

}


// ==============================
// HINT
// ==============================

function showHint() {

    document
        .getElementById("message")
        .textContent =
        "💡 Hint: Check the clock and painting. The numbers you need are hidden there.";

}


// ==============================
// GAME OVER
// ==============================

function gameOver() {

    document
        .getElementById("gameScreen")
        .classList.add("hidden");


    document
        .getElementById("gameOverScreen")
        .classList.remove("hidden");

}
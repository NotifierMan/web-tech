let totalScore = 0;
let cardPoints = [0, 0, 0, 0];
let validRound = false;

let reset = () => {
    validRound = true;

    for (let n = 0; n < cardPoints.length; n++) {
        cardPoints[n] = Math.floor(Math.random() * 10.0) - 5.0;
    }

    document.querySelectorAll(".gamecard").forEach((element) => {
        element.classList.remove("bg-success");
        element.classList.remove("bg-danger");
        element.querySelector(".card-body").innerHTML = "?";
    });
};

let onCardClick = (cardNumber) => {
    if (validRound) {
        let cards = document.querySelectorAll(".gamecard");

        for (let n = 0; n < cards.length; n++) {
            cards[n].querySelector(".card-body").innerHTML = cardPoints[n];
        }

        if (cardPoints[cardNumber] >= 0) {
            cards[cardNumber].classList.add("bg-success");
        } else {
            cards[cardNumber].classList.add("bg-danger");
        }

        totalScore += cardPoints[cardNumber];
        document.querySelector("#points b").innerHTML = totalScore;

        validRound = false;
    }
};

document.getElementById("btn-next").addEventListener("click", (evt) => reset());

let computeClick = (evt) => {
    let cardNumber = parseInt(evt.target.dataset.cardNumber);
    onCardClick(cardNumber);
};
document.querySelectorAll(".card").forEach((card) => card.addEventListener("click", computeClick));

reset();

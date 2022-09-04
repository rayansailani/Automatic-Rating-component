var container = document.getElementById("button-container");
var finalRating = 0;
const buttons = [1,2,3,4,5];
buttons.forEach((buttonNumber) => {
    let button = document.createElement("button");
    button.innerHTML = buttonNumber;
    button.id = "rating-button-" + buttonNumber.toString();
    button.classList.add("rating-button");
    button.onclick = () => onRatingButtonClick(buttonNumber);
    container.appendChild(button);
});
const onRatingButtonClick = (index) => {
    var selectedButton = document.getElementById("rating-button-" + index);
    if(parseInt(finalRating)){
        var prevSelectedButton = document.getElementById("rating-button-" + parseInt(finalRating));
        prevSelectedButton.classList.remove("selected-rating");
    }
    selectedButton.classList.add("selected-rating");
    finalRating = index;
}

const onSubmitSurvey = () => {
    console.log(finalRating);
    if(parseInt(finalRating)){
        var survey = document.getElementsByClassName("survey-container")[0];
        var thanksContainer = document.getElementsByClassName("thanks-you-container")[0];
        var ratingsContent = document.getElementsByClassName("rating-display")[0];
        survey.classList.add("no-display");
        thanksContainer.classList.add("flex-display");
        ratingsContent.innerHTML = `You Selected ${finalRating} out of 5`
    }
}
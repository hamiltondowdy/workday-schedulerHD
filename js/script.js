var currentDate = document.querySelector("#currentDay");
var workDay = document.querySelector("#time-block");

currentDate = moment();
displayCurrentDate(currentDate);


function displayCurrentDate(currentDate) {
    document.getElementById("currentDay")
    .textContent=currentDate.format("MM/DD/YYYY");
}



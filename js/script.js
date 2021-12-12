var currentDate = document.querySelector("#currentDay");
var workDay = document.querySelector("#container");

currentDate = moment();
displayCurrentDate(currentDate);

workDay = container();
displayWorkDay(workDay);


function displayCurrentDate(currentDate) {
    document.getElementById("currentDay")
    .textContent=currentDate.format("MM/DD/YYYY");
}

function displayWorkDay(workDay) {
    document.getElementById("container").appendChild(workDay);
}

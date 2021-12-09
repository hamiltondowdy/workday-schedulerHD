var currentDate = document.querySelector("#currentDay")


window.onload = function() {
    const currentDate = moment();
    
    displayCurrentDate(currentDate);
}

function displayCurrentDate(currentDate) {
    document.getElementById("currentDay")
    .textContent=currentDate.format("MM/DD/YYYY");
}

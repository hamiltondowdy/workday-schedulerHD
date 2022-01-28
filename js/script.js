$(document).ready(function() {
    $("currentDay").text(moment().format('ddd MMM Do YYYY'));
})

//function that sets the background color based on current hour

//define each row as an hour (24hr format)
const rows = document.getElementById("row");
let currentHour = parseInt(moment().format('H'));


Array.from(rows).forEach(row => {
    let
      rowIdString = row.id,
      rowHour;
    if (rowIdString) {
      rowHour = parseInt(rowIdString);
    }
    if (rowHour) {
      // Compares row id to current hour and sets color accordingly
      if (currentHour === rowHour) {
        $(this).addClass("present");
      } else if ((currentHour > rowHour)){
        $(this).addClass("future");
      } else {
        $(this).addClass("past");
      }
    }
  });

function setColor(element, color) {
    element.style.backgroundColor = color;
}

function saveData() {
    var input = document.getElementById("textarea").textContent;
    localStorage.setItem("textarea", input);
}
document.getElementById("textarea").textContent = localStorage.getItem("textarea");


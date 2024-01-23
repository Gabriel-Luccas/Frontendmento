// Your JSON data
var expensesData = [
  { day: "mon", amount: 17.45 },
  { day: "tue", amount: 34.91 },
  { day: "wed", amount: 52.36 },
  { day: "thu", amount: 10.07 },
  { day: "fri", amount: 23.39 },
  { day: "sat", amount: 43.28 },
  { day: "sun", amount: 25.48 },
];

// Function to set the height of each bar based on the amount
function setBarHeights() {
  expensesData.forEach(function (item) {
    var day = item.day;
    var amount = item.amount;
    var bar = document.getElementById("bar-" + day);

    // Set the height of the bar based on the percentage
    bar.style.height = amount + "%";
    bar.setAttribute("data-percentage", "$" + amount.toFixed(2));
  });
}

// Call the function to set initial heights
setBarHeights();

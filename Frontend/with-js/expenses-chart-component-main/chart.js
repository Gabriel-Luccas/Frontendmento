// Your JSON data
var expensesData = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 62.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

function setBarHeights() {
  var maxAmount = 0; // Variável para armazenar o valor máximo
  var maxBarId = ""; // ID da barra com o valor máximo

  expensesData.forEach(function (item) {
    var day = item.day;
    var amount = item.amount;
    var bar = document.getElementById("bar-" + day);

    // Set the height of the bar based on the percentage
    bar.style.height = amount + "%";
    bar.setAttribute("data-percentage", "$" + amount.toFixed(2));

    // Verificar se esta barra é a mais alta
    if (amount > maxAmount) {
      maxAmount = amount;
      maxBarId = "bar-" + day;
    }
  });

  // Adicionar um ID único à barra mais alta
  document.getElementById(maxBarId).id = "BigExpence";
}

// Call the function to set initial heights
setBarHeights();

// numbers display

const lastMonth = 468.76;

// this month expences
const thisMonth = expensesData
  .map((expense) => expense.amount)
  .reduce((acc, expense) => acc + expense);
console.log(thisMonth);

// difernce betwen months

const diference = (thisMonth / lastMonth) * 100;
const stringDiference = diference.toFixed(0).toString() + "%";
console.log(stringDiference);

// diplay Numbers in chart

const porcentageDisplay = document.getElementById("porcentageDisplay");
const thisMonthExpences = document.getElementById("thisMonthExpences");
porcentageDisplay.innerText = stringDiference;
thisMonthExpences.innerHTML = thisMonth;

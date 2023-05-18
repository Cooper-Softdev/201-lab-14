/* TODO:
* - Instantiate a new AppState
* - Use a method on that AppState to load vote data from localStorage.
* - Create a data object for chart.js using your AppState's allProducts array.
* - Combine the data object with configuration information for chart.js type, colors, etc
* - Call chart.js with the configuration and the canvasElem
*/

'use strict';

function renderChart() {
  let canvasChart = document.getElementById('chart');
  let appState = new AppState();
  appState.loadItems();

  const productNames = [];
  const productVotes = [];
  const productViews =[];

  for (let product of appState.allProducts) {
    productNames.push(product.name);
    productVotes.push(product.timesClicked);
    productViews.push(product.timesShown);
  }

  new Chart(canvasChart, {
    type: 'bar',
    data: {
      labels: productNames,
      datasets: [{
        label: 'Views',
        data: productViews,
        backgroundColor: 'orange',
        borderColor: 'orange'
      },
      {
        label: 'Votes',
        data: productVotes,
        backgroundColor: 'black',
        borderColor: 'black',
      }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  });
}

renderChart();




// const chartData = {
//   labels: productNames,
//   datasets: [{
//   label: 'Product Votes',
//   data: productVotes,
//   backgroundColor: 'rgba(0, 123, 255, 0.5)',
//   borderColor: 'rgba(0, 123, 255, 1)',
//   borderWidth: 1,
// }
//   label: "Product Views",
//   datasets: productTimeViewed,
//   backgroundColor: 'rgba(255, 99, 132, 0.5)',
//   borderColor: 'rgba(255, 99, 132, 1)',
//   borderWidth: 1,
// }]

// const chartConfig = {
//   type: 'bar',
//   data: chartData,
//   options: {
//     responsive: true,
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// } 
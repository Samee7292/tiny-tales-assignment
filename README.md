# *** Assignment of Terribly Tiny Tales by Sameer Sahu***
 ============= ============= =============

This is a simple web application built using React that allows users to count the words in a text file from https://tinytalessameer.netlify.app/ and display the top 20 most frequently occurring words in a bar chart. The user can also export the data as a CSV file. This assignment is done by sameer sahu for the recruitment process of Terribly tiny tales.


### `Deployment link`
  https://tinytalessameer.netlify.app/


### `Libraries and Plugins Used`

*  React - a JavaScript library for building user interfaces
*  recharts - a charting library for React that makes it easy to create reusable charts
*  file-saver - enables you to save file in machine




### `Components`

The App component contains all the main logic and functionality of the app. It has three states:

* React: The main library for building user interfaces in JavaScript.

* useState: A React hook that allows functional components to have state variables.

* saveAs: A function from the 'file-saver' library that enables saving files on the client-side.

* BarChart: A component from the 'recharts' library used to render a bar chart.

* Bar: A component from the 'recharts' library used to define the bars within the bar chart.

* XAxis: A component from the 'recharts' library used to render the X-axis of the bar chart.

* YAxis: A component from the 'recharts' library used to render the Y-axis of the bar chart.

* CartesianGrid: A component from the 'recharts' library used to render the grid lines in the chart.

* Tooltip: A component from the 'recharts' library used to display tooltips on the chart.

* Legend: A component from the 'recharts' library used to render a legend for the chart.




### `Explanation`

The code starts by importing necessary dependencies from the react, file-saver, and recharts libraries.

The App component is defined as a functional component using the useState hook from React. It initializes two state variables, data and loading, using the useState hook.

The fetchData function is an asynchronous function that is triggered when the "Submit" button is clicked.

The exportData function is triggered when the "Export" button is clicked. It converts the data into a CSV format, creates a Blob object with the CSV content, and saves it as a file using the saveAs function from the file-saver library.

Finally, the App component is exported as the default export.












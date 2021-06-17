// from data.js
const tableData = data;

// define a variable for the table body
const tbody = d3.select("tbody");

// create a function to fill the table
function fill_table(data) {
    // clear any existing data if there is any
    tbody.html("");
    //use a for each to append all the rows from data.js
    data.forEach((row) => {
        // create a variable that will create a row
        const table_row = tbody.append("tr");

        // loop through each row to create the cells
        Object.values(row).forEach((value) => {
            let cell = table_row.append("td");
                //fill the cell with the value
                cell.text(value);
        }
    );
    });

}

function filter_click() {
    //take the datetime and use it as a filter
    const date = d3.select('#datetime').property("value");
    let filtered_data = tableData;

    //if a date is entered use it to filter the data
    if(date) {
        // use filter to grab rows with matching datetime values
        filtered_data = filtered_data.filter(row => row.datetime === date);
    }
    //use the fill_table function to fill the table with filtered data
    fill_table(filtered_data);
}
// create a event for a button click
d3.selectAll("#filter-btn").on("click", filter_click);

// build a table when the page is loaded
fill_table(tableData);

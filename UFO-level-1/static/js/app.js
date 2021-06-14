// from data.js
var tableData = data;

// define a variable for the table body
var tbody = d3.selct("tbody");

// create a function to fill the table
function fill_table(data) {
    // clear any existing data if there is any
    tbody.html("");
    //use a for each to append all the rows from data.js
    data.foreach((row) => {
        // create a variable that will create a row
        var table_row = tbody.append("tr");

        // loop through each row to create the cells
        Object.values(data).foreach((value) => {
            cell = table_row.append("td");
                //fill the cell with the value
                cell.text(value);
        }
        );
    });

}

// from data.js
let tableData = data;
console.log(tableData)

let table_body = d3.select("tbody");

function table(data) {
    table_body.html("");
    data.forEach((rows) => {
        let row = table_body.append("tr");

        Object.values(rows).forEach((cells) => {
            let cell = row.append("td");
            cell.text(cells)
        }
        );
    });
};

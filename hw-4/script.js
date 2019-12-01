function composeTable(arr) {
    let table = "<table>";

    let id = 1;
    for (const line of arr) {
        table += "<tr><td class='id'>" + id + "</td>";
        const filter = ["name", "region", "population", "area"];

        for (const key in line) {
            if (filter.includes(key)) {
                table += "<td class='" + key + "'>" + line[key] + "</td>";
            } else if (key === "currencies") {
                let arr = [];
                for (const item of line[key]) {
                    arr.push(item.name);
                }
                table += "<td class='" + key + "'>" + arr.join(", ") + "</td>";
            } else if (key === "flag") {
                table += "<td class='" + key + "'>" + "<img src='" + line[key] + "'></img>" + "</td>";
            }
        }

        table += "</tr>";
        id++;
    }

    table += "</table>";
    return table;
}

$(document).ready(function () {
    $.ajax({
        url: "https://restcountries.eu/rest/v2/all",
        success: function (result) {

            $("#countries").html(composeTable(result));
        }
    });
});
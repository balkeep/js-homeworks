function stripLine(element) {
    let filter = ["name", "region", "population", "area", "currencies", "flag"];
    let result = {};
    for (const key in element) {
        if (filter.includes(key)) {
            result[key] = element[key];
        }
    }
    return result;
}

function stripArray(array) {
    let resultStriped = [];
    for (const item of array) {
        resultStriped.push(stripLine(item));
    }
    return resultStriped;
}

function composeLine(element) {
    let oneLine = "";
    for (const key in element) {
        let item = element[key];
        let itemFinal = "";
        if (key === "flag") {
            itemFinal = itemFinal.concat("<img src='", item, "'></img>")
        } else {
            if (key === "currencies") {
                let arr = [];
                for (const it of item) {
                    arr.push(it.name);
                }
                itemFinal = arr.join(", ");
            } else {
                itemFinal = item;
            }
        }

        oneLine = oneLine.concat("<td class='", key, "'>", itemFinal, "</td>");

    }
    return oneLine;
}

function composeTable(arr) {
    let table = "<table>";

    let id = 1;
    for (const line of arr) {
        table = table.concat("<tr><td class='id'>", id, "</td>", composeLine(line), "</tr>");
        id++;
    }
    
    table = table.concat("</table>");
    return table;
}

$(document).ready(function () {
    $.ajax({
        url: "https://restcountries.eu/rest/v2/all",
        success: function (result) {
            result = stripArray(result);
 
            $("#countries").html(composeTable(result));
        }
    });
});


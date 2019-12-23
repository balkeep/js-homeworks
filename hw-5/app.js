function composeTable(exchangeRates) {
    let tbodyHTML = "";

    for (const counter in exchangeRates) {
        let rateLine = exchangeRates[counter];
        tbodyHTML += "<tr><td class='id'>" + (+counter + 1) + "</td><td class='name'>"
            + rateLine.txt + "</td><td class='code'>" + rateLine.cc + "</td><td class='rate'>" + (+rateLine.rate).toFixed(2) + "</td></tr>";
    }

    return tbodyHTML;
}

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

today = yyyy + mm + dd;
todayDisplay = dd + "." + mm + "." + yyyy;

$(document).ready(function () {
        $.ajax({
            url: "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=" + today + "&json",
            success: function (exchangeRates) {

                $("#date").html(todayDisplay);
                $("table.exchange-rates > tbody").html(composeTable(exchangeRates));
            }
        });
    }
);
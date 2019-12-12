let renderPage = (date) => {
    $.ajax({
        url: "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=" + moment(date, "DD.MM.YYYY")
            .format("YYYYMMDD") + "&json",

        success: (e) => {
            $("#exchange-rates > tbody").html(composeTable(e));
            $("#date").html(date);
        },
        error: (e) => {
            console.log(e);
        }
    });
};

let composeTable = (exchangeRates) => {
    let tbodyHTML = "";

    for (const counter in exchangeRates) {
        let rateLine = exchangeRates[counter];
        tbodyHTML += "<tr><td class='id text-center'>" + (+counter + 1) + "</td><td class='name text-center'>"
            + rateLine.txt + "</td><td class='code text-center'>" + rateLine.cc + "</td><td class='rate text-right'>" + (+rateLine.rate)
                .toFixed(2) + "</td></tr>";
    }

    return tbodyHTML;
};

$(document).ready(() => {
    $(() => {
        $("#date-picker")
            .datepicker({
                dateFormat: 'dd.mm.yy',
                defaultDate: moment().format("DD.MM.YYYY"),
                firstDay: 1 // Monday is first day
            })

            .change((e) => {
                renderPage($(e.target).val());
            });

    });

    renderPage(moment().format("DD.MM.YYYY"));
});
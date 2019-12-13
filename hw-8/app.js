let dataTable = [];

let renderPage = (date) => {
    let dateOfTable = date ? date : moment().format("YYYYMMDD");

    $.ajax({
        url: "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=" + dateOfTable + "&json",

        success: (currExchangeData) => {
            dataTable = currExchangeData;
            composeTable(dataTable, dateOfTable)

            $("#date-picker")
                .datepicker({
                    dateFormat: 'dd.mm.yy',
                    defaultDate: new Date(),
                    firstDay: 1 // Monday is first day
                })
                .val(moment(dateOfTable, "YYYYMMDD").format("DD.MM.YYYY"));


            $("#currency-selector")
                .autocomplete({
                    source: currExchangeData.map((el) => el.cc)
                })
                .val("");
        }
    });
};

let composeTable = (inputArr, date, currencies) => {
    let inputArrFiltered = currencies ? inputArr.filter(currLine => currLine.cc.toLowerCase().indexOf(currencies.toLowerCase()) >= 0) : inputArr;

    let tbodyHTML = "";
    for (const counter in inputArrFiltered) {
        let rateLine = inputArrFiltered[counter];
        tbodyHTML += "<tr><td class='id text-center'>" + (+counter + 1)
            + "</td><td class='name text-center'>" + rateLine.txt
            + "</td><td class='code text-center'>" + rateLine.cc
            + "</td><td class='rate text-right'>"
            + (+rateLine.rate).toFixed(2) + "</td></tr>";
    }

    $("#date").html(moment(date, "YYYYMMDD").format("DD.MM.YYYY"));
    $("#exchange-rates > tbody").html(tbodyHTML);
};

$(document).ready(() => {

    renderPage();

    $("#date-picker").change((e) => {
        $("#currency-selector").val("");
        renderPage(moment($(e.target).val(), "DD.MM.YYYY").format("YYYYMMDD"))
    });

    $("#currency-selector").change(e => composeTable(dataTable, moment($("#date-picker").val(), "DD.MM.YYYY").format("YYYYMMDD"), $(e.target).val()));
});
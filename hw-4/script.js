let nullToZero = el => {
    el = el !== null ? el : +0;
    return el;
};

function composeTable(countries) {
    let table = "";

    for (const id in countries) {
        let country = countries[id];


        table += "<tr></tr><td class='id'>" + (+id + 1) + "</td>" +
            "<td class='name'>" + country.name + "</td>" +
            "<td class='region'>" + country.region + "</td>" +
            "<td class='population'>" + country.population + "</td>" +
            "<td class='area'>" + nullToZero(country.area) + "</td>" +
            "<td class='currencies'>" + country.currencies + "</td>" +
            "<td class='flag'>" + "<img src='" + country.flag + "'></img>" + "</td>";

        table += "</tr>";
    }
    return table;
}

let composeCountrySelector = countries => {
    let countryNames = countries.map(country => country.name);
    return "<option>" + countryNames.join("</option><option>").concat("</option>");
}

$(document).ready(function () {
    let countriesFiltered = [];

    $.ajax({
        url: "https://restcountries.eu/rest/v2/all",
        success: function (countries) {
            countriesFiltered = countries.map(element => {
                let currencies = [];

                for (const key in element.currencies) {
                    currencies.push(element.currencies[key].name);
                }

                return {
                    name: element.name,
                    region: element.region,
                    population: element.population,
                    area: element.area,
                    currencies: currencies.join(", "),
                    flag: element.flag
                }
            });

            $("#countries").html(composeTable(countriesFiltered));
            $("#country-selector").html(composeCountrySelector(countriesFiltered));
        }
    });

    $('#search-pop-area-currency').on("keyup", e => {
        $("#countries").html(composeTable(countriesFiltered.filter(element => {
            let popFilter = (`${element.population}`.indexOf($(e.currentTarget).val()) >= 0);
            let areaFilter = (`${element.area}`.indexOf($(e.currentTarget).val()) >= 0);
            let currFilter = (`${element.currencies}`.indexOf($(e.currentTarget).val()) >= 0);

            return popFilter || areaFilter || currFilter;
        })));
    });

    $('#country-selector').change(e => {
        $("#countries").html(composeTable(countriesFiltered.filter(element => `${element.name}` === $(e.currentTarget).val())));
    });


});
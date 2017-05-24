var url = 'https://restcountries.eu/rest/v1/name/';

var countriesList = $('#countries');

$('#search').click(searchCountries);

window.onkeypress = function(event) {
    if (event.keyCode == 015) {
        searchCountries();
    }
}
function searchCountries() {
  	var countryName = $('#country-name').val();

    if(!countryName.length) countryName = 'Poland';

    $.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}

function showCountriesList(resp) {
    countriesList.empty();

    resp.forEach(function(item) {
        $(countriesList).append('<h2>' + 'Selected country: ' + item.name + '</h2>');
		$(countriesList).append('<p><strong>Capital</strong>: '+item.capital+'</p>');
	    $(countriesList).append('<p><strong>Currency</strong>: '+item.currencies[0] +'</p>');
        $(countriesList).append('<p><strong>Population</strong>: '+item.population+'</p>');
    });
}

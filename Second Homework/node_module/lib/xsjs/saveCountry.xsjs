var country = {
	continentName: $.request.parameters.get("continent"),
	countryName: $.request.parameters.get("countryName"),
};

var output = createCountry(country);

function createCountry(country) {
	var conn = $.hdb.getConnection();
	var output = JSON.stringify(country);
	
	var fnCreateCountry = conn.loadProcedure("HW_SPC_2.db_module.procedures::createCountry");
    var result = fnCreateCountry(country.countryName, country.continentName);

	conn.commit();
	conn.close();
	if (result && result.ex_error != null) {
		return result.ex_error;
	} else {
		return output;
	}
}

$.response.contentType = "application/json";
$.response.setBody(output);
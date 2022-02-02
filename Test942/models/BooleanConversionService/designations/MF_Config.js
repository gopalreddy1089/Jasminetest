/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"designation": "designation",
		"early_promotion": "early_promotion",
		"employee_id": "employee_id",
		"from_date": "from_date",
		"lastupdatetimestamp": "lastupdatetimestamp",
		"meets_expectation": "meets_expectation",
		"softdeleteflag": "softdeleteflag",
		"to_date": "to_date",
	};

	Object.freeze(mappings);

	var typings = {
		"designation": "string",
		"early_promotion": "boolean",
		"employee_id": "number",
		"from_date": "date",
		"lastupdatetimestamp": "date",
		"meets_expectation": "boolean",
		"softdeleteflag": "boolean",
		"to_date": "date",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"employee_id",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "BooleanConversionService",
		tableName: "designations"
	};

	Object.freeze(config);

	return config;
})
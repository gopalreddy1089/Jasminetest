/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"employee_id": "employee_id",
		"employee_name": "employee_name",
		"lastupdatetimestamp": "lastupdatetimestamp",
		"married": "married",
		"permanent": "permanent",
		"softdeleteflag": "softdeleteflag",
	};

	Object.freeze(mappings);

	var typings = {
		"employee_id": "number",
		"employee_name": "string",
		"lastupdatetimestamp": "date",
		"married": "boolean",
		"permanent": "boolean",
		"softdeleteflag": "boolean",
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
		tableName: "employees"
	};

	Object.freeze(config);

	return config;
})
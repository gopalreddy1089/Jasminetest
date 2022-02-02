/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"is_disabled": "is_disabled",
		"modifiedDate": "modifiedDate",
		"venue_id": "venue_id",
		"venue_name": "venue_name",
	};

	Object.freeze(mappings);

	var typings = {
		"is_disabled": "boolean",
		"modifiedDate": "date",
		"venue_id": "number",
		"venue_name": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"venue_id",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "EventOS",
		tableName: "venue"
	};

	Object.freeze(config);

	return config;
})
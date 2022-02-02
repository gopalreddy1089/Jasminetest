/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"contactPic": "contactPic",
		"contact_id": "contact_id",
		"designation": "designation",
		"event_id": "event_id",
		"is_disabled": "is_disabled",
		"modifiedDate": "modifiedDate",
		"name": "name",
	};

	Object.freeze(mappings);

	var typings = {
		"contactPic": "binary",
		"contact_id": "number",
		"designation": "string",
		"event_id": "number",
		"is_disabled": "boolean",
		"modifiedDate": "date",
		"name": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"contact_id",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "ContactOS",
		tableName: "binaryContact"
	};

	Object.freeze(config);

	return config;
})
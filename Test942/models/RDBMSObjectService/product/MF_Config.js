/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"description": "description",
		"id": "id",
		"name": "name",
		"price": "price",
	};

	Object.freeze(mappings);

	var typings = {
		"description": "string",
		"id": "number",
		"name": "string",
		"price": "number",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"id",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "RDBMSObjectService",
		tableName: "product"
	};

	Object.freeze(config);

	return config;
})
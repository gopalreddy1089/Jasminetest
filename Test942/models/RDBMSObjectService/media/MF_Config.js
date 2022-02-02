/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"createdtimestamp": "createdtimestamp",
		"description": "description",
		"name": "name",
		"softdeleteflag": "softdeleteflag",
		"updatedtimestamp": "updatedtimestamp",
		"url": "url",
	};

	Object.freeze(mappings);

	var typings = {
		"createdtimestamp": "date",
		"description": "string",
		"name": "number",
		"softdeleteflag": "number",
		"updatedtimestamp": "date",
		"url": "binary",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"name",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "RDBMSObjectService",
		tableName: "media"
	};

	Object.freeze(config);

	return config;
})
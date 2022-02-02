/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"id": "id",
		"description": "description",
		"image": "image",
		"CreatedBy": "CreatedBy",
		"LastUpdatedBy": "LastUpdatedBy",
		"CreatedDateTime": "CreatedDateTime",
		"LastUpdatedDateTime": "LastUpdatedDateTime",
		"SoftDeleteFlag": "SoftDeleteFlag",
	};

	Object.freeze(mappings);

	var typings = {
		"id": "number",
		"description": "string",
		"image": "binary",
		"CreatedBy": "string",
		"LastUpdatedBy": "string",
		"CreatedDateTime": "date",
		"LastUpdatedDateTime": "date",
		"SoftDeleteFlag": "boolean",
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
		serviceName: "StorageObjectService",
		tableName: "binary"
	};

	Object.freeze(config);

	return config;
})
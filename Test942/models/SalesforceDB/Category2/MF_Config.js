/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"CreatedById": "CreatedById",
		"CreatedDate": "CreatedDate",
		"Id": "Id",
		"IsDeleted": "IsDeleted",
		"LastModifiedById": "LastModifiedById",
		"LastModifiedDate": "LastModifiedDate",
		"Name": "Name",
		"OwnerId": "OwnerId",
		"SystemModstamp": "SystemModstamp",
	};

	Object.freeze(mappings);

	var typings = {
		"CreatedById": "string",
		"CreatedDate": "date",
		"Id": "string",
		"IsDeleted": "boolean",
		"LastModifiedById": "string",
		"LastModifiedDate": "date",
		"Name": "string",
		"OwnerId": "string",
		"SystemModstamp": "date",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"Id",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "SalesforceDB",
		tableName: "Category2"
	};

	Object.freeze(config);

	return config;
})
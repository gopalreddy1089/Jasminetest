/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"Category_Des__c": "Category_Des__c",
		"CreatedById": "CreatedById",
		"CreatedDate": "CreatedDate",
		"Id": "Id",
		"IsDeleted": "IsDeleted",
		"LastModifiedById": "LastModifiedById",
		"LastModifiedDate": "LastModifiedDate",
		"LastReferencedDate": "LastReferencedDate",
		"LastViewedDate": "LastViewedDate",
		"Name": "Name",
		"OwnerId": "OwnerId",
		"SystemModstamp": "SystemModstamp",
	};

	Object.freeze(mappings);

	var typings = {
		"Category_Des__c": "string",
		"CreatedById": "string",
		"CreatedDate": "date",
		"Id": "string",
		"IsDeleted": "boolean",
		"LastModifiedById": "string",
		"LastModifiedDate": "date",
		"LastReferencedDate": "date",
		"LastViewedDate": "date",
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
		tableName: "Category"
	};

	Object.freeze(config);

	return config;
})
/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"ADDRESS_ID": "ADDRESS_ID",
		"ADDR_TYPE": "ADDR_TYPE",
		"ADDR_TYPE_ID": "ADDR_TYPE_ID",
		"CONT_SEQUENCE": "CONT_SEQUENCE",
		"COUNTER": "COUNTER",
		"DELETE_IND": "DELETE_IND",
		"DOC_NUM": "DOC_NUM",
		"OPMODE": "OPMODE",
		"PARTNER_TYPE": "PARTNER_TYPE",
		"PRIM_SEC_FLAG": "PRIM_SEC_FLAG",
		"TIMESTAMP": "TIMESTAMP",
	};

	Object.freeze(mappings);

	var typings = {
		"ADDRESS_ID": "string",
		"ADDR_TYPE": "string",
		"ADDR_TYPE_ID": "string",
		"CONT_SEQUENCE": "string",
		"COUNTER": "string",
		"DELETE_IND": "string",
		"DOC_NUM": "string",
		"OPMODE": "string",
		"PARTNER_TYPE": "string",
		"PRIM_SEC_FLAG": "string",
		"TIMESTAMP": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"ADDR_TYPE",
					"ADDR_TYPE_ID",
					"DOC_NUM",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "sapobj",
		tableName: "EAM_NOTIFICATION_ADDRESS"
	};

	Object.freeze(config);

	return config;
})
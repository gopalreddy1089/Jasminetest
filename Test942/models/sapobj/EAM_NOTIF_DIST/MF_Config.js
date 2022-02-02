/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"DELETE_IND": "DELETE_IND",
		"DESSTDATE": "DESSTDATE",
		"DESSTTIME": "DESSTTIME",
		"DIST_KEY": "DIST_KEY",
		"INTERNAL_NUMBER": "INTERNAL_NUMBER",
		"NOTIF_NUM": "NOTIF_NUM",
		"OPMODE": "OPMODE",
		"PLANT": "PLANT",
		"REJECTED": "REJECTED",
		"STAT_PROF": "STAT_PROF",
		"TIMESTAMP": "TIMESTAMP",
		"USERID": "USERID",
		"USER_STATUS": "USER_STATUS",
		"WORK_CENTER": "WORK_CENTER",
	};

	Object.freeze(mappings);

	var typings = {
		"DELETE_IND": "string",
		"DESSTDATE": "string",
		"DESSTTIME": "string",
		"DIST_KEY": "string",
		"INTERNAL_NUMBER": "string",
		"NOTIF_NUM": "string",
		"OPMODE": "string",
		"PLANT": "string",
		"REJECTED": "string",
		"STAT_PROF": "string",
		"TIMESTAMP": "string",
		"USERID": "string",
		"USER_STATUS": "string",
		"WORK_CENTER": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"DIST_KEY",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "sapobj",
		tableName: "EAM_NOTIF_DIST"
	};

	Object.freeze(config);

	return config;
})
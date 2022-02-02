/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"is_disabled": "is_disabled",
		"modified_time": "modified_time",
		"rating_id": "rating_id",
		"speaker_details": "speaker_details",
		"speaker_id": "speaker_id",
		"speaker_name": "speaker_name",
	};

	Object.freeze(mappings);

	var typings = {
		"is_disabled": "boolean",
		"modified_time": "date",
		"rating_id": "number",
		"speaker_details": "string",
		"speaker_id": "number",
		"speaker_name": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"speaker_id",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "EventOS",
		tableName: "speaker"
	};

	Object.freeze(config);

	return config;
})
/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"event_id": "event_id",
		"is_disabled": "is_disabled",
		"modified_time": "modified_time",
		"session_speaker_id": "session_speaker_id",
		"speaker_id": "speaker_id",
	};

	Object.freeze(mappings);

	var typings = {
		"event_id": "number",
		"is_disabled": "boolean",
		"modified_time": "date",
		"session_speaker_id": "number",
		"speaker_id": "number",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"event_id",
					"speaker_id",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "EventOS",
		tableName: "event_speaker"
	};

	Object.freeze(config);

	return config;
})
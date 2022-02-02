/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"addedDateTime": "addedDateTime",
		"title": "title",
		"end_date": "end_date",
		"event_id": "event_id",
		"is_disabled": "is_disabled",
		"long_desc": "long_desc",
		"start_date": "start_date",
		"venue_id": "venue_id",
	};

	Object.freeze(mappings);

	var typings = {
		"addedDateTime": "date",
		"title": "string",
		"end_date": "date",
		"event_id": "number",
		"is_disabled": "boolean",
		"long_desc": "string",
		"start_date": "date",
		"venue_id": "number",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"event_id",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "EventOS",
		tableName: "event"
	};

	Object.freeze(config);

	return config;
})
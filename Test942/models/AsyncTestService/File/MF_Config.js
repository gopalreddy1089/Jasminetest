/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"checksum": "checksum",
		"commit_properties": "commit_properties",
		"createdby": "createdby",
		"custom_field1": "custom_field1",
		"custom_field10": "custom_field10",
		"custom_field11": "custom_field11",
		"custom_field12": "custom_field12",
		"custom_field13": "custom_field13",
		"custom_field14": "custom_field14",
		"custom_field15": "custom_field15",
		"custom_field16": "custom_field16",
		"custom_field17": "custom_field17",
		"custom_field18": "custom_field18",
		"custom_field19": "custom_field19",
		"custom_field2": "custom_field2",
		"custom_field20": "custom_field20",
		"custom_field3": "custom_field3",
		"custom_field4": "custom_field4",
		"custom_field5": "custom_field5",
		"custom_field6": "custom_field6",
		"custom_field7": "custom_field7",
		"custom_field8": "custom_field8",
		"custom_field9": "custom_field9",
		"description": "description",
		"download_template": "download_template",
		"file_content": "file_content",
		"file_id": "file_id",
		"file_name": "file_name",
		"file_namespace": "file_namespace",
		"mime_type": "mime_type",
		"modifiedby": "modifiedby",
		"relative_path": "relative_path",
		"security_key": "security_key",
		"size": "size",
		"status": "status",
		"tags": "tags",
		"upload_template": "upload_template",
	};

	Object.freeze(mappings);

	var typings = {
		"checksum": "string",
		"commit_properties": "string",
		"createdby": "string",
		"custom_field1": "string",
		"custom_field10": "string",
		"custom_field11": "string",
		"custom_field12": "string",
		"custom_field13": "string",
		"custom_field14": "string",
		"custom_field15": "string",
		"custom_field16": "string",
		"custom_field17": "string",
		"custom_field18": "string",
		"custom_field19": "string",
		"custom_field2": "string",
		"custom_field20": "string",
		"custom_field3": "string",
		"custom_field4": "string",
		"custom_field5": "string",
		"custom_field6": "string",
		"custom_field7": "string",
		"custom_field8": "string",
		"custom_field9": "string",
		"description": "string",
		"download_template": "string",
		"file_content": "binary",
		"file_id": "string",
		"file_name": "string",
		"file_namespace": "string",
		"mime_type": "string",
		"modifiedby": "string",
		"relative_path": "string",
		"security_key": "string",
		"size": "string",
		"status": "number",
		"tags": "string",
		"upload_template": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"file_id",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "AsyncTestService",
		tableName: "File"
	};

	Object.freeze(config);

	return config;
})
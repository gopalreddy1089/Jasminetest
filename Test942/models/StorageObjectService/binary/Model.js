/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "binary", "objectService" : "StorageObjectService"};

    var setterFunctions = {
        id: function(val, state) {
            context["field"] = "id";
            context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
            state['id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        description: function(val, state) {
            context["field"] = "description";
            context["metadata"] = (objectMetadata ? objectMetadata["description"] : null);
            state['description'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        image: function(val, state) {
            context["field"] = "image";
            context["metadata"] = (objectMetadata ? objectMetadata["image"] : null);
            state['image'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        CreatedBy: function(val, state) {
            context["field"] = "CreatedBy";
            context["metadata"] = (objectMetadata ? objectMetadata["CreatedBy"] : null);
            state['CreatedBy'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        LastUpdatedBy: function(val, state) {
            context["field"] = "LastUpdatedBy";
            context["metadata"] = (objectMetadata ? objectMetadata["LastUpdatedBy"] : null);
            state['LastUpdatedBy'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        CreatedDateTime: function(val, state) {
            context["field"] = "CreatedDateTime";
            context["metadata"] = (objectMetadata ? objectMetadata["CreatedDateTime"] : null);
            state['CreatedDateTime'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        LastUpdatedDateTime: function(val, state) {
            context["field"] = "LastUpdatedDateTime";
            context["metadata"] = (objectMetadata ? objectMetadata["LastUpdatedDateTime"] : null);
            state['LastUpdatedDateTime'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        SoftDeleteFlag: function(val, state) {
            context["field"] = "SoftDeleteFlag";
            context["metadata"] = (objectMetadata ? objectMetadata["SoftDeleteFlag"] : null);
            state['SoftDeleteFlag'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function binary(defaultValues) {
        var privateState = {};
        context["field"] = "id";
        context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
        privateState.id = defaultValues ?
            (defaultValues["id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id"], context) :
                null) :
            null;

        context["field"] = "description";
        context["metadata"] = (objectMetadata ? objectMetadata["description"] : null);
        privateState.description = defaultValues ?
            (defaultValues["description"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["description"], context) :
                null) :
            null;

        context["field"] = "image";
        context["metadata"] = (objectMetadata ? objectMetadata["image"] : null);
        privateState.image = defaultValues ?
            (defaultValues["image"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["image"], context) :
                null) :
            null;

        context["field"] = "CreatedBy";
        context["metadata"] = (objectMetadata ? objectMetadata["CreatedBy"] : null);
        privateState.CreatedBy = defaultValues ?
            (defaultValues["CreatedBy"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CreatedBy"], context) :
                null) :
            null;

        context["field"] = "LastUpdatedBy";
        context["metadata"] = (objectMetadata ? objectMetadata["LastUpdatedBy"] : null);
        privateState.LastUpdatedBy = defaultValues ?
            (defaultValues["LastUpdatedBy"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["LastUpdatedBy"], context) :
                null) :
            null;

        context["field"] = "CreatedDateTime";
        context["metadata"] = (objectMetadata ? objectMetadata["CreatedDateTime"] : null);
        privateState.CreatedDateTime = defaultValues ?
            (defaultValues["CreatedDateTime"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CreatedDateTime"], context) :
                null) :
            null;

        context["field"] = "LastUpdatedDateTime";
        context["metadata"] = (objectMetadata ? objectMetadata["LastUpdatedDateTime"] : null);
        privateState.LastUpdatedDateTime = defaultValues ?
            (defaultValues["LastUpdatedDateTime"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["LastUpdatedDateTime"], context) :
                null) :
            null;

        context["field"] = "SoftDeleteFlag";
        context["metadata"] = (objectMetadata ? objectMetadata["SoftDeleteFlag"] : null);
        privateState.SoftDeleteFlag = defaultValues ?
            (defaultValues["SoftDeleteFlag"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["SoftDeleteFlag"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "id": {
                get: function() {
                    context["field"] = "id";
                    context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.id, context);
                },
                set: function(val) {
                    setterFunctions['id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "description": {
                get: function() {
                    context["field"] = "description";
                    context["metadata"] = (objectMetadata ? objectMetadata["description"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.description, context);
                },
                set: function(val) {
                    setterFunctions['description'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "image": {
                get: function() {
                    context["field"] = "image";
                    context["metadata"] = (objectMetadata ? objectMetadata["image"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.image, context);
                },
                set: function(val) {
                    setterFunctions['image'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "CreatedBy": {
                get: function() {
                    context["field"] = "CreatedBy";
                    context["metadata"] = (objectMetadata ? objectMetadata["CreatedBy"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CreatedBy, context);
                },
                set: function(val) {
                    setterFunctions['CreatedBy'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "LastUpdatedBy": {
                get: function() {
                    context["field"] = "LastUpdatedBy";
                    context["metadata"] = (objectMetadata ? objectMetadata["LastUpdatedBy"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.LastUpdatedBy, context);
                },
                set: function(val) {
                    setterFunctions['LastUpdatedBy'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "CreatedDateTime": {
                get: function() {
                    context["field"] = "CreatedDateTime";
                    context["metadata"] = (objectMetadata ? objectMetadata["CreatedDateTime"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CreatedDateTime, context);
                },
                set: function(val) {
                    setterFunctions['CreatedDateTime'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "LastUpdatedDateTime": {
                get: function() {
                    context["field"] = "LastUpdatedDateTime";
                    context["metadata"] = (objectMetadata ? objectMetadata["LastUpdatedDateTime"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.LastUpdatedDateTime, context);
                },
                set: function(val) {
                    setterFunctions['LastUpdatedDateTime'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "SoftDeleteFlag": {
                get: function() {
                    context["field"] = "SoftDeleteFlag";
                    context["metadata"] = (objectMetadata ? objectMetadata["SoftDeleteFlag"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.SoftDeleteFlag, context);
                },
                set: function(val) {
                    setterFunctions['SoftDeleteFlag'].call(this, val, privateState);
                },
                enumerable: true,
            },
        });

        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };

        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
            privateState.id = value ? (value["id"] ? value["id"] : null) : null;
            privateState.description = value ? (value["description"] ? value["description"] : null) : null;
            privateState.image = value ? (value["image"] ? value["image"] : null) : null;
            privateState.CreatedBy = value ? (value["CreatedBy"] ? value["CreatedBy"] : null) : null;
            privateState.LastUpdatedBy = value ? (value["LastUpdatedBy"] ? value["LastUpdatedBy"] : null) : null;
            privateState.CreatedDateTime = value ? (value["CreatedDateTime"] ? value["CreatedDateTime"] : null) : null;
            privateState.LastUpdatedDateTime = value ? (value["LastUpdatedDateTime"] ? value["LastUpdatedDateTime"] : null) : null;
            privateState.SoftDeleteFlag = value ? (value["SoftDeleteFlag"] ? value["SoftDeleteFlag"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(binary);

    //Create new class level validator object
    BaseModel.Validator.call(binary);

    var registerValidatorBackup = binary.registerValidator;

    binary.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(binary.isValid(this, propName, val)) {
                    return setterBackup.apply(null, arguments);
                } else {
                    throw Error("Validation failed for " + propName + " : " + val);
                }
            }
            setterFunctions[arguments[0]].changed = true;
        }
        return registerValidatorBackup.apply(null, arguments);
    }

    //Extending Model for custom operations
    //For Operation 'createBinary' with service id 'createBinarybinary6960'
     binary.createBinary = function(params, onCompletion){
        return binary.customVerb('createBinary', params, onCompletion);
     };

    //For Operation 'getBinary' with service id 'queryBinarybinary7167'
     binary.getBinary = function(params, onCompletion){
        return binary.customVerb('getBinary', params, onCompletion);
     };

    //For Operation 'updateBinary' with service id 'updateBinarybinary7543'
     binary.updateBinary = function(params, onCompletion){
        return binary.customVerb('updateBinary', params, onCompletion);
     };

    //For Operation 'deleteBinary' with service id 'deleteBinarybinary6673'
     binary.deleteBinary = function(params, onCompletion){
        return binary.customVerb('deleteBinary', params, onCompletion);
     };

    var relations = [];

    binary.relations = relations;

    binary.prototype.isValid = function() {
        return binary.isValid(this);
    };

    binary.prototype.objModelName = "binary";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    binary.registerProcessors = function(options, successCallback, failureCallback) {

        if(!options) {
            options = {};
        }

        if(options && ((options["preProcessor"] && typeof(options["preProcessor"]) === "function") || !options["preProcessor"])) {
            preProcessorCallback = options["preProcessor"];
        }

        if(options && ((options["postProcessor"] && typeof(options["postProcessor"]) === "function") || !options["postProcessor"])) {
            postProcessorCallback = options["postProcessor"];
        }

        function metaDataSuccess(res) {
            objectMetadata = kony.mvc.util.ProcessorUtils.convertObjectMetadataToFieldMetadataMap(res);
            successCallback();
        }

        function metaDataFailure(err) {
            failureCallback(err);
        }

        kony.mvc.util.ProcessorUtils.getMetadataForObject("StorageObjectService", "binary", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    binary.clone = function(objectToClone) {
        var clonedObj = new binary();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return binary;
});
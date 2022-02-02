/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "eventhierarchy", "objectService" : "RDBMSHierarchy"};

    var setterFunctions = {
        addedDateTime: function(val, state) {
            context["field"] = "addedDateTime";
            context["metadata"] = (objectMetadata ? objectMetadata["addedDateTime"] : null);
            state['addedDateTime'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        end_date: function(val, state) {
            context["field"] = "end_date";
            context["metadata"] = (objectMetadata ? objectMetadata["end_date"] : null);
            state['end_date'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        event_id: function(val, state) {
            context["field"] = "event_id";
            context["metadata"] = (objectMetadata ? objectMetadata["event_id"] : null);
            state['event_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        is_disabled: function(val, state) {
            context["field"] = "is_disabled";
            context["metadata"] = (objectMetadata ? objectMetadata["is_disabled"] : null);
            state['is_disabled'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        long_desc: function(val, state) {
            context["field"] = "long_desc";
            context["metadata"] = (objectMetadata ? objectMetadata["long_desc"] : null);
            state['long_desc'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        start_date: function(val, state) {
            context["field"] = "start_date";
            context["metadata"] = (objectMetadata ? objectMetadata["start_date"] : null);
            state['start_date'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        title: function(val, state) {
            context["field"] = "title";
            context["metadata"] = (objectMetadata ? objectMetadata["title"] : null);
            state['title'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        venue_id: function(val, state) {
            context["field"] = "venue_id";
            context["metadata"] = (objectMetadata ? objectMetadata["venue_id"] : null);
            state['venue_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function eventhierarchy(defaultValues) {
        var privateState = {};
        context["field"] = "addedDateTime";
        context["metadata"] = (objectMetadata ? objectMetadata["addedDateTime"] : null);
        privateState.addedDateTime = defaultValues ?
            (defaultValues["addedDateTime"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["addedDateTime"], context) :
                null) :
            null;

        context["field"] = "end_date";
        context["metadata"] = (objectMetadata ? objectMetadata["end_date"] : null);
        privateState.end_date = defaultValues ?
            (defaultValues["end_date"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["end_date"], context) :
                null) :
            null;

        context["field"] = "event_id";
        context["metadata"] = (objectMetadata ? objectMetadata["event_id"] : null);
        privateState.event_id = defaultValues ?
            (defaultValues["event_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["event_id"], context) :
                null) :
            null;

        context["field"] = "is_disabled";
        context["metadata"] = (objectMetadata ? objectMetadata["is_disabled"] : null);
        privateState.is_disabled = defaultValues ?
            (defaultValues["is_disabled"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["is_disabled"], context) :
                null) :
            null;

        context["field"] = "long_desc";
        context["metadata"] = (objectMetadata ? objectMetadata["long_desc"] : null);
        privateState.long_desc = defaultValues ?
            (defaultValues["long_desc"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["long_desc"], context) :
                null) :
            null;

        context["field"] = "start_date";
        context["metadata"] = (objectMetadata ? objectMetadata["start_date"] : null);
        privateState.start_date = defaultValues ?
            (defaultValues["start_date"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["start_date"], context) :
                null) :
            null;

        context["field"] = "title";
        context["metadata"] = (objectMetadata ? objectMetadata["title"] : null);
        privateState.title = defaultValues ?
            (defaultValues["title"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["title"], context) :
                null) :
            null;

        context["field"] = "venue_id";
        context["metadata"] = (objectMetadata ? objectMetadata["venue_id"] : null);
        privateState.venue_id = defaultValues ?
            (defaultValues["venue_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["venue_id"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "addedDateTime": {
                get: function() {
                    context["field"] = "addedDateTime";
                    context["metadata"] = (objectMetadata ? objectMetadata["addedDateTime"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.addedDateTime, context);
                },
                set: function(val) {
                    setterFunctions['addedDateTime'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "end_date": {
                get: function() {
                    context["field"] = "end_date";
                    context["metadata"] = (objectMetadata ? objectMetadata["end_date"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.end_date, context);
                },
                set: function(val) {
                    setterFunctions['end_date'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "event_id": {
                get: function() {
                    context["field"] = "event_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["event_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.event_id, context);
                },
                set: function(val) {
                    setterFunctions['event_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "is_disabled": {
                get: function() {
                    context["field"] = "is_disabled";
                    context["metadata"] = (objectMetadata ? objectMetadata["is_disabled"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.is_disabled, context);
                },
                set: function(val) {
                    setterFunctions['is_disabled'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "long_desc": {
                get: function() {
                    context["field"] = "long_desc";
                    context["metadata"] = (objectMetadata ? objectMetadata["long_desc"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.long_desc, context);
                },
                set: function(val) {
                    setterFunctions['long_desc'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "start_date": {
                get: function() {
                    context["field"] = "start_date";
                    context["metadata"] = (objectMetadata ? objectMetadata["start_date"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.start_date, context);
                },
                set: function(val) {
                    setterFunctions['start_date'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "title": {
                get: function() {
                    context["field"] = "title";
                    context["metadata"] = (objectMetadata ? objectMetadata["title"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.title, context);
                },
                set: function(val) {
                    setterFunctions['title'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "venue_id": {
                get: function() {
                    context["field"] = "venue_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["venue_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.venue_id, context);
                },
                set: function(val) {
                    setterFunctions['venue_id'].call(this, val, privateState);
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
            privateState.addedDateTime = value ? (value["addedDateTime"] ? value["addedDateTime"] : null) : null;
            privateState.end_date = value ? (value["end_date"] ? value["end_date"] : null) : null;
            privateState.event_id = value ? (value["event_id"] ? value["event_id"] : null) : null;
            privateState.is_disabled = value ? (value["is_disabled"] ? value["is_disabled"] : null) : null;
            privateState.long_desc = value ? (value["long_desc"] ? value["long_desc"] : null) : null;
            privateState.start_date = value ? (value["start_date"] ? value["start_date"] : null) : null;
            privateState.title = value ? (value["title"] ? value["title"] : null) : null;
            privateState.venue_id = value ? (value["venue_id"] ? value["venue_id"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(eventhierarchy);

    //Create new class level validator object
    BaseModel.Validator.call(eventhierarchy);

    var registerValidatorBackup = eventhierarchy.registerValidator;

    eventhierarchy.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(eventhierarchy.isValid(this, propName, val)) {
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
    var relations = [];

    eventhierarchy.relations = relations;

    eventhierarchy.prototype.isValid = function() {
        return eventhierarchy.isValid(this);
    };

    eventhierarchy.prototype.objModelName = "eventhierarchy";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    eventhierarchy.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("RDBMSHierarchy", "eventhierarchy", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    eventhierarchy.clone = function(objectToClone) {
        var clonedObj = new eventhierarchy();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return eventhierarchy;
});
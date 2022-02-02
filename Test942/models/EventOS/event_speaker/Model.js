/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "event_speaker", "objectService" : "EventOS"};

    var setterFunctions = {
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
        modified_time: function(val, state) {
            context["field"] = "modified_time";
            context["metadata"] = (objectMetadata ? objectMetadata["modified_time"] : null);
            state['modified_time'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        session_speaker_id: function(val, state) {
            context["field"] = "session_speaker_id";
            context["metadata"] = (objectMetadata ? objectMetadata["session_speaker_id"] : null);
            state['session_speaker_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        speaker_id: function(val, state) {
            context["field"] = "speaker_id";
            context["metadata"] = (objectMetadata ? objectMetadata["speaker_id"] : null);
            state['speaker_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function event_speaker(defaultValues) {
        var privateState = {};
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

        context["field"] = "modified_time";
        context["metadata"] = (objectMetadata ? objectMetadata["modified_time"] : null);
        privateState.modified_time = defaultValues ?
            (defaultValues["modified_time"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["modified_time"], context) :
                null) :
            null;

        context["field"] = "session_speaker_id";
        context["metadata"] = (objectMetadata ? objectMetadata["session_speaker_id"] : null);
        privateState.session_speaker_id = defaultValues ?
            (defaultValues["session_speaker_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["session_speaker_id"], context) :
                null) :
            null;

        context["field"] = "speaker_id";
        context["metadata"] = (objectMetadata ? objectMetadata["speaker_id"] : null);
        privateState.speaker_id = defaultValues ?
            (defaultValues["speaker_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["speaker_id"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
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
            "modified_time": {
                get: function() {
                    context["field"] = "modified_time";
                    context["metadata"] = (objectMetadata ? objectMetadata["modified_time"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.modified_time, context);
                },
                set: function(val) {
                    setterFunctions['modified_time'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "session_speaker_id": {
                get: function() {
                    context["field"] = "session_speaker_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["session_speaker_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.session_speaker_id, context);
                },
                set: function(val) {
                    setterFunctions['session_speaker_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "speaker_id": {
                get: function() {
                    context["field"] = "speaker_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["speaker_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.speaker_id, context);
                },
                set: function(val) {
                    setterFunctions['speaker_id'].call(this, val, privateState);
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
            privateState.event_id = value ? (value["event_id"] ? value["event_id"] : null) : null;
            privateState.is_disabled = value ? (value["is_disabled"] ? value["is_disabled"] : null) : null;
            privateState.modified_time = value ? (value["modified_time"] ? value["modified_time"] : null) : null;
            privateState.session_speaker_id = value ? (value["session_speaker_id"] ? value["session_speaker_id"] : null) : null;
            privateState.speaker_id = value ? (value["speaker_id"] ? value["speaker_id"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(event_speaker);

    //Create new class level validator object
    BaseModel.Validator.call(event_speaker);

    var registerValidatorBackup = event_speaker.registerValidator;

    event_speaker.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(event_speaker.isValid(this, propName, val)) {
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

    event_speaker.relations = relations;

    event_speaker.prototype.isValid = function() {
        return event_speaker.isValid(this);
    };

    event_speaker.prototype.objModelName = "event_speaker";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    event_speaker.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("EventOS", "event_speaker", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    event_speaker.clone = function(objectToClone) {
        var clonedObj = new event_speaker();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return event_speaker;
});
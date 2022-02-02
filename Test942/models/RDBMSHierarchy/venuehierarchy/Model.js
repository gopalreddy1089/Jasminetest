/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "venuehierarchy", "objectService" : "RDBMSHierarchy"};

    var setterFunctions = {
        is_disabled: function(val, state) {
            context["field"] = "is_disabled";
            context["metadata"] = (objectMetadata ? objectMetadata["is_disabled"] : null);
            state['is_disabled'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        modifiedDate: function(val, state) {
            context["field"] = "modifiedDate";
            context["metadata"] = (objectMetadata ? objectMetadata["modifiedDate"] : null);
            state['modifiedDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        venue_id: function(val, state) {
            context["field"] = "venue_id";
            context["metadata"] = (objectMetadata ? objectMetadata["venue_id"] : null);
            state['venue_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        venue_name: function(val, state) {
            context["field"] = "venue_name";
            context["metadata"] = (objectMetadata ? objectMetadata["venue_name"] : null);
            state['venue_name'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function venuehierarchy(defaultValues) {
        var privateState = {};
        context["field"] = "is_disabled";
        context["metadata"] = (objectMetadata ? objectMetadata["is_disabled"] : null);
        privateState.is_disabled = defaultValues ?
            (defaultValues["is_disabled"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["is_disabled"], context) :
                null) :
            null;

        context["field"] = "modifiedDate";
        context["metadata"] = (objectMetadata ? objectMetadata["modifiedDate"] : null);
        privateState.modifiedDate = defaultValues ?
            (defaultValues["modifiedDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["modifiedDate"], context) :
                null) :
            null;

        context["field"] = "venue_id";
        context["metadata"] = (objectMetadata ? objectMetadata["venue_id"] : null);
        privateState.venue_id = defaultValues ?
            (defaultValues["venue_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["venue_id"], context) :
                null) :
            null;

        context["field"] = "venue_name";
        context["metadata"] = (objectMetadata ? objectMetadata["venue_name"] : null);
        privateState.venue_name = defaultValues ?
            (defaultValues["venue_name"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["venue_name"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
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
            "modifiedDate": {
                get: function() {
                    context["field"] = "modifiedDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["modifiedDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.modifiedDate, context);
                },
                set: function(val) {
                    setterFunctions['modifiedDate'].call(this, val, privateState);
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
            "venue_name": {
                get: function() {
                    context["field"] = "venue_name";
                    context["metadata"] = (objectMetadata ? objectMetadata["venue_name"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.venue_name, context);
                },
                set: function(val) {
                    setterFunctions['venue_name'].call(this, val, privateState);
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
            privateState.is_disabled = value ? (value["is_disabled"] ? value["is_disabled"] : null) : null;
            privateState.modifiedDate = value ? (value["modifiedDate"] ? value["modifiedDate"] : null) : null;
            privateState.venue_id = value ? (value["venue_id"] ? value["venue_id"] : null) : null;
            privateState.venue_name = value ? (value["venue_name"] ? value["venue_name"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(venuehierarchy);

    //Create new class level validator object
    BaseModel.Validator.call(venuehierarchy);

    var registerValidatorBackup = venuehierarchy.registerValidator;

    venuehierarchy.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(venuehierarchy.isValid(this, propName, val)) {
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

    venuehierarchy.relations = relations;

    venuehierarchy.prototype.isValid = function() {
        return venuehierarchy.isValid(this);
    };

    venuehierarchy.prototype.objModelName = "venuehierarchy";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    venuehierarchy.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("RDBMSHierarchy", "venuehierarchy", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    venuehierarchy.clone = function(objectToClone) {
        var clonedObj = new venuehierarchy();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return venuehierarchy;
});
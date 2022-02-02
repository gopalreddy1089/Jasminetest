/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "EAM_NOTIF_DIST", "objectService" : "sapobj"};

    var setterFunctions = {
        DELETE_IND: function(val, state) {
            context["field"] = "DELETE_IND";
            context["metadata"] = (objectMetadata ? objectMetadata["DELETE_IND"] : null);
            state['DELETE_IND'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        DESSTDATE: function(val, state) {
            context["field"] = "DESSTDATE";
            context["metadata"] = (objectMetadata ? objectMetadata["DESSTDATE"] : null);
            state['DESSTDATE'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        DESSTTIME: function(val, state) {
            context["field"] = "DESSTTIME";
            context["metadata"] = (objectMetadata ? objectMetadata["DESSTTIME"] : null);
            state['DESSTTIME'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        DIST_KEY: function(val, state) {
            context["field"] = "DIST_KEY";
            context["metadata"] = (objectMetadata ? objectMetadata["DIST_KEY"] : null);
            state['DIST_KEY'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        INTERNAL_NUMBER: function(val, state) {
            context["field"] = "INTERNAL_NUMBER";
            context["metadata"] = (objectMetadata ? objectMetadata["INTERNAL_NUMBER"] : null);
            state['INTERNAL_NUMBER'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        NOTIF_NUM: function(val, state) {
            context["field"] = "NOTIF_NUM";
            context["metadata"] = (objectMetadata ? objectMetadata["NOTIF_NUM"] : null);
            state['NOTIF_NUM'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        OPMODE: function(val, state) {
            context["field"] = "OPMODE";
            context["metadata"] = (objectMetadata ? objectMetadata["OPMODE"] : null);
            state['OPMODE'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        PLANT: function(val, state) {
            context["field"] = "PLANT";
            context["metadata"] = (objectMetadata ? objectMetadata["PLANT"] : null);
            state['PLANT'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        REJECTED: function(val, state) {
            context["field"] = "REJECTED";
            context["metadata"] = (objectMetadata ? objectMetadata["REJECTED"] : null);
            state['REJECTED'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        STAT_PROF: function(val, state) {
            context["field"] = "STAT_PROF";
            context["metadata"] = (objectMetadata ? objectMetadata["STAT_PROF"] : null);
            state['STAT_PROF'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        TIMESTAMP: function(val, state) {
            context["field"] = "TIMESTAMP";
            context["metadata"] = (objectMetadata ? objectMetadata["TIMESTAMP"] : null);
            state['TIMESTAMP'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        USERID: function(val, state) {
            context["field"] = "USERID";
            context["metadata"] = (objectMetadata ? objectMetadata["USERID"] : null);
            state['USERID'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        USER_STATUS: function(val, state) {
            context["field"] = "USER_STATUS";
            context["metadata"] = (objectMetadata ? objectMetadata["USER_STATUS"] : null);
            state['USER_STATUS'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        WORK_CENTER: function(val, state) {
            context["field"] = "WORK_CENTER";
            context["metadata"] = (objectMetadata ? objectMetadata["WORK_CENTER"] : null);
            state['WORK_CENTER'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function EAM_NOTIF_DIST(defaultValues) {
        var privateState = {};
        context["field"] = "DELETE_IND";
        context["metadata"] = (objectMetadata ? objectMetadata["DELETE_IND"] : null);
        privateState.DELETE_IND = defaultValues ?
            (defaultValues["DELETE_IND"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DELETE_IND"], context) :
                null) :
            null;

        context["field"] = "DESSTDATE";
        context["metadata"] = (objectMetadata ? objectMetadata["DESSTDATE"] : null);
        privateState.DESSTDATE = defaultValues ?
            (defaultValues["DESSTDATE"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DESSTDATE"], context) :
                null) :
            null;

        context["field"] = "DESSTTIME";
        context["metadata"] = (objectMetadata ? objectMetadata["DESSTTIME"] : null);
        privateState.DESSTTIME = defaultValues ?
            (defaultValues["DESSTTIME"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DESSTTIME"], context) :
                null) :
            null;

        context["field"] = "DIST_KEY";
        context["metadata"] = (objectMetadata ? objectMetadata["DIST_KEY"] : null);
        privateState.DIST_KEY = defaultValues ?
            (defaultValues["DIST_KEY"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DIST_KEY"], context) :
                null) :
            null;

        context["field"] = "INTERNAL_NUMBER";
        context["metadata"] = (objectMetadata ? objectMetadata["INTERNAL_NUMBER"] : null);
        privateState.INTERNAL_NUMBER = defaultValues ?
            (defaultValues["INTERNAL_NUMBER"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["INTERNAL_NUMBER"], context) :
                null) :
            null;

        context["field"] = "NOTIF_NUM";
        context["metadata"] = (objectMetadata ? objectMetadata["NOTIF_NUM"] : null);
        privateState.NOTIF_NUM = defaultValues ?
            (defaultValues["NOTIF_NUM"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["NOTIF_NUM"], context) :
                null) :
            null;

        context["field"] = "OPMODE";
        context["metadata"] = (objectMetadata ? objectMetadata["OPMODE"] : null);
        privateState.OPMODE = defaultValues ?
            (defaultValues["OPMODE"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["OPMODE"], context) :
                null) :
            null;

        context["field"] = "PLANT";
        context["metadata"] = (objectMetadata ? objectMetadata["PLANT"] : null);
        privateState.PLANT = defaultValues ?
            (defaultValues["PLANT"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["PLANT"], context) :
                null) :
            null;

        context["field"] = "REJECTED";
        context["metadata"] = (objectMetadata ? objectMetadata["REJECTED"] : null);
        privateState.REJECTED = defaultValues ?
            (defaultValues["REJECTED"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["REJECTED"], context) :
                null) :
            null;

        context["field"] = "STAT_PROF";
        context["metadata"] = (objectMetadata ? objectMetadata["STAT_PROF"] : null);
        privateState.STAT_PROF = defaultValues ?
            (defaultValues["STAT_PROF"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["STAT_PROF"], context) :
                null) :
            null;

        context["field"] = "TIMESTAMP";
        context["metadata"] = (objectMetadata ? objectMetadata["TIMESTAMP"] : null);
        privateState.TIMESTAMP = defaultValues ?
            (defaultValues["TIMESTAMP"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["TIMESTAMP"], context) :
                null) :
            null;

        context["field"] = "USERID";
        context["metadata"] = (objectMetadata ? objectMetadata["USERID"] : null);
        privateState.USERID = defaultValues ?
            (defaultValues["USERID"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["USERID"], context) :
                null) :
            null;

        context["field"] = "USER_STATUS";
        context["metadata"] = (objectMetadata ? objectMetadata["USER_STATUS"] : null);
        privateState.USER_STATUS = defaultValues ?
            (defaultValues["USER_STATUS"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["USER_STATUS"], context) :
                null) :
            null;

        context["field"] = "WORK_CENTER";
        context["metadata"] = (objectMetadata ? objectMetadata["WORK_CENTER"] : null);
        privateState.WORK_CENTER = defaultValues ?
            (defaultValues["WORK_CENTER"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["WORK_CENTER"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "DELETE_IND": {
                get: function() {
                    context["field"] = "DELETE_IND";
                    context["metadata"] = (objectMetadata ? objectMetadata["DELETE_IND"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.DELETE_IND, context);
                },
                set: function(val) {
                    setterFunctions['DELETE_IND'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "DESSTDATE": {
                get: function() {
                    context["field"] = "DESSTDATE";
                    context["metadata"] = (objectMetadata ? objectMetadata["DESSTDATE"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.DESSTDATE, context);
                },
                set: function(val) {
                    setterFunctions['DESSTDATE'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "DESSTTIME": {
                get: function() {
                    context["field"] = "DESSTTIME";
                    context["metadata"] = (objectMetadata ? objectMetadata["DESSTTIME"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.DESSTTIME, context);
                },
                set: function(val) {
                    setterFunctions['DESSTTIME'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "DIST_KEY": {
                get: function() {
                    context["field"] = "DIST_KEY";
                    context["metadata"] = (objectMetadata ? objectMetadata["DIST_KEY"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.DIST_KEY, context);
                },
                set: function(val) {
                    setterFunctions['DIST_KEY'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "INTERNAL_NUMBER": {
                get: function() {
                    context["field"] = "INTERNAL_NUMBER";
                    context["metadata"] = (objectMetadata ? objectMetadata["INTERNAL_NUMBER"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.INTERNAL_NUMBER, context);
                },
                set: function(val) {
                    setterFunctions['INTERNAL_NUMBER'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "NOTIF_NUM": {
                get: function() {
                    context["field"] = "NOTIF_NUM";
                    context["metadata"] = (objectMetadata ? objectMetadata["NOTIF_NUM"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.NOTIF_NUM, context);
                },
                set: function(val) {
                    setterFunctions['NOTIF_NUM'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "OPMODE": {
                get: function() {
                    context["field"] = "OPMODE";
                    context["metadata"] = (objectMetadata ? objectMetadata["OPMODE"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.OPMODE, context);
                },
                set: function(val) {
                    setterFunctions['OPMODE'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "PLANT": {
                get: function() {
                    context["field"] = "PLANT";
                    context["metadata"] = (objectMetadata ? objectMetadata["PLANT"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.PLANT, context);
                },
                set: function(val) {
                    setterFunctions['PLANT'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "REJECTED": {
                get: function() {
                    context["field"] = "REJECTED";
                    context["metadata"] = (objectMetadata ? objectMetadata["REJECTED"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.REJECTED, context);
                },
                set: function(val) {
                    setterFunctions['REJECTED'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "STAT_PROF": {
                get: function() {
                    context["field"] = "STAT_PROF";
                    context["metadata"] = (objectMetadata ? objectMetadata["STAT_PROF"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.STAT_PROF, context);
                },
                set: function(val) {
                    setterFunctions['STAT_PROF'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "TIMESTAMP": {
                get: function() {
                    context["field"] = "TIMESTAMP";
                    context["metadata"] = (objectMetadata ? objectMetadata["TIMESTAMP"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.TIMESTAMP, context);
                },
                set: function(val) {
                    setterFunctions['TIMESTAMP'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "USERID": {
                get: function() {
                    context["field"] = "USERID";
                    context["metadata"] = (objectMetadata ? objectMetadata["USERID"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.USERID, context);
                },
                set: function(val) {
                    setterFunctions['USERID'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "USER_STATUS": {
                get: function() {
                    context["field"] = "USER_STATUS";
                    context["metadata"] = (objectMetadata ? objectMetadata["USER_STATUS"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.USER_STATUS, context);
                },
                set: function(val) {
                    setterFunctions['USER_STATUS'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "WORK_CENTER": {
                get: function() {
                    context["field"] = "WORK_CENTER";
                    context["metadata"] = (objectMetadata ? objectMetadata["WORK_CENTER"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.WORK_CENTER, context);
                },
                set: function(val) {
                    setterFunctions['WORK_CENTER'].call(this, val, privateState);
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
            privateState.DELETE_IND = value ? (value["DELETE_IND"] ? value["DELETE_IND"] : null) : null;
            privateState.DESSTDATE = value ? (value["DESSTDATE"] ? value["DESSTDATE"] : null) : null;
            privateState.DESSTTIME = value ? (value["DESSTTIME"] ? value["DESSTTIME"] : null) : null;
            privateState.DIST_KEY = value ? (value["DIST_KEY"] ? value["DIST_KEY"] : null) : null;
            privateState.INTERNAL_NUMBER = value ? (value["INTERNAL_NUMBER"] ? value["INTERNAL_NUMBER"] : null) : null;
            privateState.NOTIF_NUM = value ? (value["NOTIF_NUM"] ? value["NOTIF_NUM"] : null) : null;
            privateState.OPMODE = value ? (value["OPMODE"] ? value["OPMODE"] : null) : null;
            privateState.PLANT = value ? (value["PLANT"] ? value["PLANT"] : null) : null;
            privateState.REJECTED = value ? (value["REJECTED"] ? value["REJECTED"] : null) : null;
            privateState.STAT_PROF = value ? (value["STAT_PROF"] ? value["STAT_PROF"] : null) : null;
            privateState.TIMESTAMP = value ? (value["TIMESTAMP"] ? value["TIMESTAMP"] : null) : null;
            privateState.USERID = value ? (value["USERID"] ? value["USERID"] : null) : null;
            privateState.USER_STATUS = value ? (value["USER_STATUS"] ? value["USER_STATUS"] : null) : null;
            privateState.WORK_CENTER = value ? (value["WORK_CENTER"] ? value["WORK_CENTER"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(EAM_NOTIF_DIST);

    //Create new class level validator object
    BaseModel.Validator.call(EAM_NOTIF_DIST);

    var registerValidatorBackup = EAM_NOTIF_DIST.registerValidator;

    EAM_NOTIF_DIST.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(EAM_NOTIF_DIST.isValid(this, propName, val)) {
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

    EAM_NOTIF_DIST.relations = relations;

    EAM_NOTIF_DIST.prototype.isValid = function() {
        return EAM_NOTIF_DIST.isValid(this);
    };

    EAM_NOTIF_DIST.prototype.objModelName = "EAM_NOTIF_DIST";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    EAM_NOTIF_DIST.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("sapobj", "EAM_NOTIF_DIST", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    EAM_NOTIF_DIST.clone = function(objectToClone) {
        var clonedObj = new EAM_NOTIF_DIST();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return EAM_NOTIF_DIST;
});
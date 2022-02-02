/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "EAM_NOTIFICATION_ADDRESS", "objectService" : "sapobj"};

    var setterFunctions = {
        ADDRESS_ID: function(val, state) {
            context["field"] = "ADDRESS_ID";
            context["metadata"] = (objectMetadata ? objectMetadata["ADDRESS_ID"] : null);
            state['ADDRESS_ID'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ADDR_TYPE: function(val, state) {
            context["field"] = "ADDR_TYPE";
            context["metadata"] = (objectMetadata ? objectMetadata["ADDR_TYPE"] : null);
            state['ADDR_TYPE'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ADDR_TYPE_ID: function(val, state) {
            context["field"] = "ADDR_TYPE_ID";
            context["metadata"] = (objectMetadata ? objectMetadata["ADDR_TYPE_ID"] : null);
            state['ADDR_TYPE_ID'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        CONT_SEQUENCE: function(val, state) {
            context["field"] = "CONT_SEQUENCE";
            context["metadata"] = (objectMetadata ? objectMetadata["CONT_SEQUENCE"] : null);
            state['CONT_SEQUENCE'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        COUNTER: function(val, state) {
            context["field"] = "COUNTER";
            context["metadata"] = (objectMetadata ? objectMetadata["COUNTER"] : null);
            state['COUNTER'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        DELETE_IND: function(val, state) {
            context["field"] = "DELETE_IND";
            context["metadata"] = (objectMetadata ? objectMetadata["DELETE_IND"] : null);
            state['DELETE_IND'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        DOC_NUM: function(val, state) {
            context["field"] = "DOC_NUM";
            context["metadata"] = (objectMetadata ? objectMetadata["DOC_NUM"] : null);
            state['DOC_NUM'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        OPMODE: function(val, state) {
            context["field"] = "OPMODE";
            context["metadata"] = (objectMetadata ? objectMetadata["OPMODE"] : null);
            state['OPMODE'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        PARTNER_TYPE: function(val, state) {
            context["field"] = "PARTNER_TYPE";
            context["metadata"] = (objectMetadata ? objectMetadata["PARTNER_TYPE"] : null);
            state['PARTNER_TYPE'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        PRIM_SEC_FLAG: function(val, state) {
            context["field"] = "PRIM_SEC_FLAG";
            context["metadata"] = (objectMetadata ? objectMetadata["PRIM_SEC_FLAG"] : null);
            state['PRIM_SEC_FLAG'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        TIMESTAMP: function(val, state) {
            context["field"] = "TIMESTAMP";
            context["metadata"] = (objectMetadata ? objectMetadata["TIMESTAMP"] : null);
            state['TIMESTAMP'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function EAM_NOTIFICATION_ADDRESS(defaultValues) {
        var privateState = {};
        context["field"] = "ADDRESS_ID";
        context["metadata"] = (objectMetadata ? objectMetadata["ADDRESS_ID"] : null);
        privateState.ADDRESS_ID = defaultValues ?
            (defaultValues["ADDRESS_ID"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ADDRESS_ID"], context) :
                null) :
            null;

        context["field"] = "ADDR_TYPE";
        context["metadata"] = (objectMetadata ? objectMetadata["ADDR_TYPE"] : null);
        privateState.ADDR_TYPE = defaultValues ?
            (defaultValues["ADDR_TYPE"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ADDR_TYPE"], context) :
                null) :
            null;

        context["field"] = "ADDR_TYPE_ID";
        context["metadata"] = (objectMetadata ? objectMetadata["ADDR_TYPE_ID"] : null);
        privateState.ADDR_TYPE_ID = defaultValues ?
            (defaultValues["ADDR_TYPE_ID"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ADDR_TYPE_ID"], context) :
                null) :
            null;

        context["field"] = "CONT_SEQUENCE";
        context["metadata"] = (objectMetadata ? objectMetadata["CONT_SEQUENCE"] : null);
        privateState.CONT_SEQUENCE = defaultValues ?
            (defaultValues["CONT_SEQUENCE"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CONT_SEQUENCE"], context) :
                null) :
            null;

        context["field"] = "COUNTER";
        context["metadata"] = (objectMetadata ? objectMetadata["COUNTER"] : null);
        privateState.COUNTER = defaultValues ?
            (defaultValues["COUNTER"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["COUNTER"], context) :
                null) :
            null;

        context["field"] = "DELETE_IND";
        context["metadata"] = (objectMetadata ? objectMetadata["DELETE_IND"] : null);
        privateState.DELETE_IND = defaultValues ?
            (defaultValues["DELETE_IND"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DELETE_IND"], context) :
                null) :
            null;

        context["field"] = "DOC_NUM";
        context["metadata"] = (objectMetadata ? objectMetadata["DOC_NUM"] : null);
        privateState.DOC_NUM = defaultValues ?
            (defaultValues["DOC_NUM"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DOC_NUM"], context) :
                null) :
            null;

        context["field"] = "OPMODE";
        context["metadata"] = (objectMetadata ? objectMetadata["OPMODE"] : null);
        privateState.OPMODE = defaultValues ?
            (defaultValues["OPMODE"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["OPMODE"], context) :
                null) :
            null;

        context["field"] = "PARTNER_TYPE";
        context["metadata"] = (objectMetadata ? objectMetadata["PARTNER_TYPE"] : null);
        privateState.PARTNER_TYPE = defaultValues ?
            (defaultValues["PARTNER_TYPE"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["PARTNER_TYPE"], context) :
                null) :
            null;

        context["field"] = "PRIM_SEC_FLAG";
        context["metadata"] = (objectMetadata ? objectMetadata["PRIM_SEC_FLAG"] : null);
        privateState.PRIM_SEC_FLAG = defaultValues ?
            (defaultValues["PRIM_SEC_FLAG"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["PRIM_SEC_FLAG"], context) :
                null) :
            null;

        context["field"] = "TIMESTAMP";
        context["metadata"] = (objectMetadata ? objectMetadata["TIMESTAMP"] : null);
        privateState.TIMESTAMP = defaultValues ?
            (defaultValues["TIMESTAMP"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["TIMESTAMP"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "ADDRESS_ID": {
                get: function() {
                    context["field"] = "ADDRESS_ID";
                    context["metadata"] = (objectMetadata ? objectMetadata["ADDRESS_ID"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ADDRESS_ID, context);
                },
                set: function(val) {
                    setterFunctions['ADDRESS_ID'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ADDR_TYPE": {
                get: function() {
                    context["field"] = "ADDR_TYPE";
                    context["metadata"] = (objectMetadata ? objectMetadata["ADDR_TYPE"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ADDR_TYPE, context);
                },
                set: function(val) {
                    setterFunctions['ADDR_TYPE'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ADDR_TYPE_ID": {
                get: function() {
                    context["field"] = "ADDR_TYPE_ID";
                    context["metadata"] = (objectMetadata ? objectMetadata["ADDR_TYPE_ID"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ADDR_TYPE_ID, context);
                },
                set: function(val) {
                    setterFunctions['ADDR_TYPE_ID'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "CONT_SEQUENCE": {
                get: function() {
                    context["field"] = "CONT_SEQUENCE";
                    context["metadata"] = (objectMetadata ? objectMetadata["CONT_SEQUENCE"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CONT_SEQUENCE, context);
                },
                set: function(val) {
                    setterFunctions['CONT_SEQUENCE'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "COUNTER": {
                get: function() {
                    context["field"] = "COUNTER";
                    context["metadata"] = (objectMetadata ? objectMetadata["COUNTER"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.COUNTER, context);
                },
                set: function(val) {
                    setterFunctions['COUNTER'].call(this, val, privateState);
                },
                enumerable: true,
            },
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
            "DOC_NUM": {
                get: function() {
                    context["field"] = "DOC_NUM";
                    context["metadata"] = (objectMetadata ? objectMetadata["DOC_NUM"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.DOC_NUM, context);
                },
                set: function(val) {
                    setterFunctions['DOC_NUM'].call(this, val, privateState);
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
            "PARTNER_TYPE": {
                get: function() {
                    context["field"] = "PARTNER_TYPE";
                    context["metadata"] = (objectMetadata ? objectMetadata["PARTNER_TYPE"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.PARTNER_TYPE, context);
                },
                set: function(val) {
                    setterFunctions['PARTNER_TYPE'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "PRIM_SEC_FLAG": {
                get: function() {
                    context["field"] = "PRIM_SEC_FLAG";
                    context["metadata"] = (objectMetadata ? objectMetadata["PRIM_SEC_FLAG"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.PRIM_SEC_FLAG, context);
                },
                set: function(val) {
                    setterFunctions['PRIM_SEC_FLAG'].call(this, val, privateState);
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
        });

        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };

        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
            privateState.ADDRESS_ID = value ? (value["ADDRESS_ID"] ? value["ADDRESS_ID"] : null) : null;
            privateState.ADDR_TYPE = value ? (value["ADDR_TYPE"] ? value["ADDR_TYPE"] : null) : null;
            privateState.ADDR_TYPE_ID = value ? (value["ADDR_TYPE_ID"] ? value["ADDR_TYPE_ID"] : null) : null;
            privateState.CONT_SEQUENCE = value ? (value["CONT_SEQUENCE"] ? value["CONT_SEQUENCE"] : null) : null;
            privateState.COUNTER = value ? (value["COUNTER"] ? value["COUNTER"] : null) : null;
            privateState.DELETE_IND = value ? (value["DELETE_IND"] ? value["DELETE_IND"] : null) : null;
            privateState.DOC_NUM = value ? (value["DOC_NUM"] ? value["DOC_NUM"] : null) : null;
            privateState.OPMODE = value ? (value["OPMODE"] ? value["OPMODE"] : null) : null;
            privateState.PARTNER_TYPE = value ? (value["PARTNER_TYPE"] ? value["PARTNER_TYPE"] : null) : null;
            privateState.PRIM_SEC_FLAG = value ? (value["PRIM_SEC_FLAG"] ? value["PRIM_SEC_FLAG"] : null) : null;
            privateState.TIMESTAMP = value ? (value["TIMESTAMP"] ? value["TIMESTAMP"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(EAM_NOTIFICATION_ADDRESS);

    //Create new class level validator object
    BaseModel.Validator.call(EAM_NOTIFICATION_ADDRESS);

    var registerValidatorBackup = EAM_NOTIFICATION_ADDRESS.registerValidator;

    EAM_NOTIFICATION_ADDRESS.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(EAM_NOTIFICATION_ADDRESS.isValid(this, propName, val)) {
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

    EAM_NOTIFICATION_ADDRESS.relations = relations;

    EAM_NOTIFICATION_ADDRESS.prototype.isValid = function() {
        return EAM_NOTIFICATION_ADDRESS.isValid(this);
    };

    EAM_NOTIFICATION_ADDRESS.prototype.objModelName = "EAM_NOTIFICATION_ADDRESS";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    EAM_NOTIFICATION_ADDRESS.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("sapobj", "EAM_NOTIFICATION_ADDRESS", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    EAM_NOTIFICATION_ADDRESS.clone = function(objectToClone) {
        var clonedObj = new EAM_NOTIFICATION_ADDRESS();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return EAM_NOTIFICATION_ADDRESS;
});
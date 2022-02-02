/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "designations", "objectService" : "BooleanConversionService"};

    var setterFunctions = {
        designation: function(val, state) {
            context["field"] = "designation";
            context["metadata"] = (objectMetadata ? objectMetadata["designation"] : null);
            state['designation'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        early_promotion: function(val, state) {
            context["field"] = "early_promotion";
            context["metadata"] = (objectMetadata ? objectMetadata["early_promotion"] : null);
            state['early_promotion'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        employee_id: function(val, state) {
            context["field"] = "employee_id";
            context["metadata"] = (objectMetadata ? objectMetadata["employee_id"] : null);
            state['employee_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        from_date: function(val, state) {
            context["field"] = "from_date";
            context["metadata"] = (objectMetadata ? objectMetadata["from_date"] : null);
            state['from_date'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        lastupdatetimestamp: function(val, state) {
            context["field"] = "lastupdatetimestamp";
            context["metadata"] = (objectMetadata ? objectMetadata["lastupdatetimestamp"] : null);
            state['lastupdatetimestamp'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        meets_expectation: function(val, state) {
            context["field"] = "meets_expectation";
            context["metadata"] = (objectMetadata ? objectMetadata["meets_expectation"] : null);
            state['meets_expectation'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        softdeleteflag: function(val, state) {
            context["field"] = "softdeleteflag";
            context["metadata"] = (objectMetadata ? objectMetadata["softdeleteflag"] : null);
            state['softdeleteflag'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        to_date: function(val, state) {
            context["field"] = "to_date";
            context["metadata"] = (objectMetadata ? objectMetadata["to_date"] : null);
            state['to_date'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function designations(defaultValues) {
        var privateState = {};
        context["field"] = "designation";
        context["metadata"] = (objectMetadata ? objectMetadata["designation"] : null);
        privateState.designation = defaultValues ?
            (defaultValues["designation"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["designation"], context) :
                null) :
            null;

        context["field"] = "early_promotion";
        context["metadata"] = (objectMetadata ? objectMetadata["early_promotion"] : null);
        privateState.early_promotion = defaultValues ?
            (defaultValues["early_promotion"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["early_promotion"], context) :
                null) :
            null;

        context["field"] = "employee_id";
        context["metadata"] = (objectMetadata ? objectMetadata["employee_id"] : null);
        privateState.employee_id = defaultValues ?
            (defaultValues["employee_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["employee_id"], context) :
                null) :
            null;

        context["field"] = "from_date";
        context["metadata"] = (objectMetadata ? objectMetadata["from_date"] : null);
        privateState.from_date = defaultValues ?
            (defaultValues["from_date"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["from_date"], context) :
                null) :
            null;

        context["field"] = "lastupdatetimestamp";
        context["metadata"] = (objectMetadata ? objectMetadata["lastupdatetimestamp"] : null);
        privateState.lastupdatetimestamp = defaultValues ?
            (defaultValues["lastupdatetimestamp"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["lastupdatetimestamp"], context) :
                null) :
            null;

        context["field"] = "meets_expectation";
        context["metadata"] = (objectMetadata ? objectMetadata["meets_expectation"] : null);
        privateState.meets_expectation = defaultValues ?
            (defaultValues["meets_expectation"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["meets_expectation"], context) :
                null) :
            null;

        context["field"] = "softdeleteflag";
        context["metadata"] = (objectMetadata ? objectMetadata["softdeleteflag"] : null);
        privateState.softdeleteflag = defaultValues ?
            (defaultValues["softdeleteflag"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["softdeleteflag"], context) :
                null) :
            null;

        context["field"] = "to_date";
        context["metadata"] = (objectMetadata ? objectMetadata["to_date"] : null);
        privateState.to_date = defaultValues ?
            (defaultValues["to_date"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["to_date"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "designation": {
                get: function() {
                    context["field"] = "designation";
                    context["metadata"] = (objectMetadata ? objectMetadata["designation"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.designation, context);
                },
                set: function(val) {
                    setterFunctions['designation'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "early_promotion": {
                get: function() {
                    context["field"] = "early_promotion";
                    context["metadata"] = (objectMetadata ? objectMetadata["early_promotion"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.early_promotion, context);
                },
                set: function(val) {
                    setterFunctions['early_promotion'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "employee_id": {
                get: function() {
                    context["field"] = "employee_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["employee_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.employee_id, context);
                },
                set: function(val) {
                    setterFunctions['employee_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "from_date": {
                get: function() {
                    context["field"] = "from_date";
                    context["metadata"] = (objectMetadata ? objectMetadata["from_date"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.from_date, context);
                },
                set: function(val) {
                    setterFunctions['from_date'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "lastupdatetimestamp": {
                get: function() {
                    context["field"] = "lastupdatetimestamp";
                    context["metadata"] = (objectMetadata ? objectMetadata["lastupdatetimestamp"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.lastupdatetimestamp, context);
                },
                set: function(val) {
                    setterFunctions['lastupdatetimestamp'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "meets_expectation": {
                get: function() {
                    context["field"] = "meets_expectation";
                    context["metadata"] = (objectMetadata ? objectMetadata["meets_expectation"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.meets_expectation, context);
                },
                set: function(val) {
                    setterFunctions['meets_expectation'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "softdeleteflag": {
                get: function() {
                    context["field"] = "softdeleteflag";
                    context["metadata"] = (objectMetadata ? objectMetadata["softdeleteflag"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.softdeleteflag, context);
                },
                set: function(val) {
                    setterFunctions['softdeleteflag'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "to_date": {
                get: function() {
                    context["field"] = "to_date";
                    context["metadata"] = (objectMetadata ? objectMetadata["to_date"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.to_date, context);
                },
                set: function(val) {
                    setterFunctions['to_date'].call(this, val, privateState);
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
            privateState.designation = value ? (value["designation"] ? value["designation"] : null) : null;
            privateState.early_promotion = value ? (value["early_promotion"] ? value["early_promotion"] : null) : null;
            privateState.employee_id = value ? (value["employee_id"] ? value["employee_id"] : null) : null;
            privateState.from_date = value ? (value["from_date"] ? value["from_date"] : null) : null;
            privateState.lastupdatetimestamp = value ? (value["lastupdatetimestamp"] ? value["lastupdatetimestamp"] : null) : null;
            privateState.meets_expectation = value ? (value["meets_expectation"] ? value["meets_expectation"] : null) : null;
            privateState.softdeleteflag = value ? (value["softdeleteflag"] ? value["softdeleteflag"] : null) : null;
            privateState.to_date = value ? (value["to_date"] ? value["to_date"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(designations);

    //Create new class level validator object
    BaseModel.Validator.call(designations);

    var registerValidatorBackup = designations.registerValidator;

    designations.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(designations.isValid(this, propName, val)) {
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

    designations.relations = relations;

    designations.prototype.isValid = function() {
        return designations.isValid(this);
    };

    designations.prototype.objModelName = "designations";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    designations.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("BooleanConversionService", "designations", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    designations.clone = function(objectToClone) {
        var clonedObj = new designations();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return designations;
});
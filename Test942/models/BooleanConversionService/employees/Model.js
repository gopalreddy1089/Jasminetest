/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "employees", "objectService" : "BooleanConversionService"};

    var setterFunctions = {
        employee_id: function(val, state) {
            context["field"] = "employee_id";
            context["metadata"] = (objectMetadata ? objectMetadata["employee_id"] : null);
            state['employee_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        employee_name: function(val, state) {
            context["field"] = "employee_name";
            context["metadata"] = (objectMetadata ? objectMetadata["employee_name"] : null);
            state['employee_name'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        lastupdatetimestamp: function(val, state) {
            context["field"] = "lastupdatetimestamp";
            context["metadata"] = (objectMetadata ? objectMetadata["lastupdatetimestamp"] : null);
            state['lastupdatetimestamp'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        married: function(val, state) {
            context["field"] = "married";
            context["metadata"] = (objectMetadata ? objectMetadata["married"] : null);
            state['married'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        permanent: function(val, state) {
            context["field"] = "permanent";
            context["metadata"] = (objectMetadata ? objectMetadata["permanent"] : null);
            state['permanent'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        softdeleteflag: function(val, state) {
            context["field"] = "softdeleteflag";
            context["metadata"] = (objectMetadata ? objectMetadata["softdeleteflag"] : null);
            state['softdeleteflag'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function employees(defaultValues) {
        var privateState = {};
        context["field"] = "employee_id";
        context["metadata"] = (objectMetadata ? objectMetadata["employee_id"] : null);
        privateState.employee_id = defaultValues ?
            (defaultValues["employee_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["employee_id"], context) :
                null) :
            null;

        context["field"] = "employee_name";
        context["metadata"] = (objectMetadata ? objectMetadata["employee_name"] : null);
        privateState.employee_name = defaultValues ?
            (defaultValues["employee_name"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["employee_name"], context) :
                null) :
            null;

        context["field"] = "lastupdatetimestamp";
        context["metadata"] = (objectMetadata ? objectMetadata["lastupdatetimestamp"] : null);
        privateState.lastupdatetimestamp = defaultValues ?
            (defaultValues["lastupdatetimestamp"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["lastupdatetimestamp"], context) :
                null) :
            null;

        context["field"] = "married";
        context["metadata"] = (objectMetadata ? objectMetadata["married"] : null);
        privateState.married = defaultValues ?
            (defaultValues["married"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["married"], context) :
                null) :
            null;

        context["field"] = "permanent";
        context["metadata"] = (objectMetadata ? objectMetadata["permanent"] : null);
        privateState.permanent = defaultValues ?
            (defaultValues["permanent"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["permanent"], context) :
                null) :
            null;

        context["field"] = "softdeleteflag";
        context["metadata"] = (objectMetadata ? objectMetadata["softdeleteflag"] : null);
        privateState.softdeleteflag = defaultValues ?
            (defaultValues["softdeleteflag"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["softdeleteflag"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
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
            "employee_name": {
                get: function() {
                    context["field"] = "employee_name";
                    context["metadata"] = (objectMetadata ? objectMetadata["employee_name"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.employee_name, context);
                },
                set: function(val) {
                    setterFunctions['employee_name'].call(this, val, privateState);
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
            "married": {
                get: function() {
                    context["field"] = "married";
                    context["metadata"] = (objectMetadata ? objectMetadata["married"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.married, context);
                },
                set: function(val) {
                    setterFunctions['married'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "permanent": {
                get: function() {
                    context["field"] = "permanent";
                    context["metadata"] = (objectMetadata ? objectMetadata["permanent"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.permanent, context);
                },
                set: function(val) {
                    setterFunctions['permanent'].call(this, val, privateState);
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
        });

        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };

        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
            privateState.employee_id = value ? (value["employee_id"] ? value["employee_id"] : null) : null;
            privateState.employee_name = value ? (value["employee_name"] ? value["employee_name"] : null) : null;
            privateState.lastupdatetimestamp = value ? (value["lastupdatetimestamp"] ? value["lastupdatetimestamp"] : null) : null;
            privateState.married = value ? (value["married"] ? value["married"] : null) : null;
            privateState.permanent = value ? (value["permanent"] ? value["permanent"] : null) : null;
            privateState.softdeleteflag = value ? (value["softdeleteflag"] ? value["softdeleteflag"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(employees);

    //Create new class level validator object
    BaseModel.Validator.call(employees);

    var registerValidatorBackup = employees.registerValidator;

    employees.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(employees.isValid(this, propName, val)) {
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

    employees.relations = relations;

    employees.prototype.isValid = function() {
        return employees.isValid(this);
    };

    employees.prototype.objModelName = "employees";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    employees.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("BooleanConversionService", "employees", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    employees.clone = function(objectToClone) {
        var clonedObj = new employees();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return employees;
});
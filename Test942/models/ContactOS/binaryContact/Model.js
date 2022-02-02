/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "binaryContact", "objectService" : "ContactOS"};

    var setterFunctions = {
        contactPic: function(val, state) {
            context["field"] = "contactPic";
            context["metadata"] = (objectMetadata ? objectMetadata["contactPic"] : null);
            state['contactPic'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        contact_id: function(val, state) {
            context["field"] = "contact_id";
            context["metadata"] = (objectMetadata ? objectMetadata["contact_id"] : null);
            state['contact_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        designation: function(val, state) {
            context["field"] = "designation";
            context["metadata"] = (objectMetadata ? objectMetadata["designation"] : null);
            state['designation'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
        modifiedDate: function(val, state) {
            context["field"] = "modifiedDate";
            context["metadata"] = (objectMetadata ? objectMetadata["modifiedDate"] : null);
            state['modifiedDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        name: function(val, state) {
            context["field"] = "name";
            context["metadata"] = (objectMetadata ? objectMetadata["name"] : null);
            state['name'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function binaryContact(defaultValues) {
        var privateState = {};
        context["field"] = "contactPic";
        context["metadata"] = (objectMetadata ? objectMetadata["contactPic"] : null);
        privateState.contactPic = defaultValues ?
            (defaultValues["contactPic"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["contactPic"], context) :
                null) :
            null;

        context["field"] = "contact_id";
        context["metadata"] = (objectMetadata ? objectMetadata["contact_id"] : null);
        privateState.contact_id = defaultValues ?
            (defaultValues["contact_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["contact_id"], context) :
                null) :
            null;

        context["field"] = "designation";
        context["metadata"] = (objectMetadata ? objectMetadata["designation"] : null);
        privateState.designation = defaultValues ?
            (defaultValues["designation"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["designation"], context) :
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

        context["field"] = "modifiedDate";
        context["metadata"] = (objectMetadata ? objectMetadata["modifiedDate"] : null);
        privateState.modifiedDate = defaultValues ?
            (defaultValues["modifiedDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["modifiedDate"], context) :
                null) :
            null;

        context["field"] = "name";
        context["metadata"] = (objectMetadata ? objectMetadata["name"] : null);
        privateState.name = defaultValues ?
            (defaultValues["name"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["name"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "contactPic": {
                get: function() {
                    context["field"] = "contactPic";
                    context["metadata"] = (objectMetadata ? objectMetadata["contactPic"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.contactPic, context);
                },
                set: function(val) {
                    setterFunctions['contactPic'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "contact_id": {
                get: function() {
                    context["field"] = "contact_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["contact_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.contact_id, context);
                },
                set: function(val) {
                    setterFunctions['contact_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
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
            "name": {
                get: function() {
                    context["field"] = "name";
                    context["metadata"] = (objectMetadata ? objectMetadata["name"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.name, context);
                },
                set: function(val) {
                    setterFunctions['name'].call(this, val, privateState);
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
            privateState.contactPic = value ? (value["contactPic"] ? value["contactPic"] : null) : null;
            privateState.contact_id = value ? (value["contact_id"] ? value["contact_id"] : null) : null;
            privateState.designation = value ? (value["designation"] ? value["designation"] : null) : null;
            privateState.event_id = value ? (value["event_id"] ? value["event_id"] : null) : null;
            privateState.is_disabled = value ? (value["is_disabled"] ? value["is_disabled"] : null) : null;
            privateState.modifiedDate = value ? (value["modifiedDate"] ? value["modifiedDate"] : null) : null;
            privateState.name = value ? (value["name"] ? value["name"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(binaryContact);

    //Create new class level validator object
    BaseModel.Validator.call(binaryContact);

    var registerValidatorBackup = binaryContact.registerValidator;

    binaryContact.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(binaryContact.isValid(this, propName, val)) {
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
    //For Operation 'createBinary' with service id 'createBinarybinaryContact8002'
     binaryContact.createBinary = function(params, onCompletion){
        return binaryContact.customVerb('createBinary', params, onCompletion);
     };

    //For Operation 'getBinary' with service id 'queryBinarybinaryContact1414'
     binaryContact.getBinary = function(params, onCompletion){
        return binaryContact.customVerb('getBinary', params, onCompletion);
     };

    //For Operation 'updateBinary' with service id 'updateBinarybinaryContact2335'
     binaryContact.updateBinary = function(params, onCompletion){
        return binaryContact.customVerb('updateBinary', params, onCompletion);
     };

    //For Operation 'deleteBinary' with service id 'deleteBinarybinaryContact8480'
     binaryContact.deleteBinary = function(params, onCompletion){
        return binaryContact.customVerb('deleteBinary', params, onCompletion);
     };

    var relations = [];

    binaryContact.relations = relations;

    binaryContact.prototype.isValid = function() {
        return binaryContact.isValid(this);
    };

    binaryContact.prototype.objModelName = "binaryContact";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    binaryContact.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("ContactOS", "binaryContact", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    binaryContact.clone = function(objectToClone) {
        var clonedObj = new binaryContact();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return binaryContact;
});
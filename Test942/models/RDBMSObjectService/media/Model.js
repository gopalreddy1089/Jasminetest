/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "media", "objectService" : "RDBMSObjectService"};

    var setterFunctions = {
        createdtimestamp: function(val, state) {
            context["field"] = "createdtimestamp";
            context["metadata"] = (objectMetadata ? objectMetadata["createdtimestamp"] : null);
            state['createdtimestamp'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        description: function(val, state) {
            context["field"] = "description";
            context["metadata"] = (objectMetadata ? objectMetadata["description"] : null);
            state['description'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        name: function(val, state) {
            context["field"] = "name";
            context["metadata"] = (objectMetadata ? objectMetadata["name"] : null);
            state['name'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        softdeleteflag: function(val, state) {
            context["field"] = "softdeleteflag";
            context["metadata"] = (objectMetadata ? objectMetadata["softdeleteflag"] : null);
            state['softdeleteflag'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        updatedtimestamp: function(val, state) {
            context["field"] = "updatedtimestamp";
            context["metadata"] = (objectMetadata ? objectMetadata["updatedtimestamp"] : null);
            state['updatedtimestamp'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        url: function(val, state) {
            context["field"] = "url";
            context["metadata"] = (objectMetadata ? objectMetadata["url"] : null);
            state['url'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function media(defaultValues) {
        var privateState = {};
        context["field"] = "createdtimestamp";
        context["metadata"] = (objectMetadata ? objectMetadata["createdtimestamp"] : null);
        privateState.createdtimestamp = defaultValues ?
            (defaultValues["createdtimestamp"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["createdtimestamp"], context) :
                null) :
            null;

        context["field"] = "description";
        context["metadata"] = (objectMetadata ? objectMetadata["description"] : null);
        privateState.description = defaultValues ?
            (defaultValues["description"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["description"], context) :
                null) :
            null;

        context["field"] = "name";
        context["metadata"] = (objectMetadata ? objectMetadata["name"] : null);
        privateState.name = defaultValues ?
            (defaultValues["name"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["name"], context) :
                null) :
            null;

        context["field"] = "softdeleteflag";
        context["metadata"] = (objectMetadata ? objectMetadata["softdeleteflag"] : null);
        privateState.softdeleteflag = defaultValues ?
            (defaultValues["softdeleteflag"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["softdeleteflag"], context) :
                null) :
            null;

        context["field"] = "updatedtimestamp";
        context["metadata"] = (objectMetadata ? objectMetadata["updatedtimestamp"] : null);
        privateState.updatedtimestamp = defaultValues ?
            (defaultValues["updatedtimestamp"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["updatedtimestamp"], context) :
                null) :
            null;

        context["field"] = "url";
        context["metadata"] = (objectMetadata ? objectMetadata["url"] : null);
        privateState.url = defaultValues ?
            (defaultValues["url"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["url"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "createdtimestamp": {
                get: function() {
                    context["field"] = "createdtimestamp";
                    context["metadata"] = (objectMetadata ? objectMetadata["createdtimestamp"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.createdtimestamp, context);
                },
                set: function(val) {
                    setterFunctions['createdtimestamp'].call(this, val, privateState);
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
            "updatedtimestamp": {
                get: function() {
                    context["field"] = "updatedtimestamp";
                    context["metadata"] = (objectMetadata ? objectMetadata["updatedtimestamp"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.updatedtimestamp, context);
                },
                set: function(val) {
                    setterFunctions['updatedtimestamp'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "url": {
                get: function() {
                    context["field"] = "url";
                    context["metadata"] = (objectMetadata ? objectMetadata["url"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.url, context);
                },
                set: function(val) {
                    setterFunctions['url'].call(this, val, privateState);
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
            privateState.createdtimestamp = value ? (value["createdtimestamp"] ? value["createdtimestamp"] : null) : null;
            privateState.description = value ? (value["description"] ? value["description"] : null) : null;
            privateState.name = value ? (value["name"] ? value["name"] : null) : null;
            privateState.softdeleteflag = value ? (value["softdeleteflag"] ? value["softdeleteflag"] : null) : null;
            privateState.updatedtimestamp = value ? (value["updatedtimestamp"] ? value["updatedtimestamp"] : null) : null;
            privateState.url = value ? (value["url"] ? value["url"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(media);

    //Create new class level validator object
    BaseModel.Validator.call(media);

    var registerValidatorBackup = media.registerValidator;

    media.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(media.isValid(this, propName, val)) {
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
    //For Operation 'createBinary' with service id 'createBinarymedia7648'
     media.createBinary = function(params, onCompletion){
        return media.customVerb('createBinary', params, onCompletion);
     };

    //For Operation 'getBinary' with service id 'queryBinarymedia7217'
     media.getBinary = function(params, onCompletion){
        return media.customVerb('getBinary', params, onCompletion);
     };

    //For Operation 'updateBinary' with service id 'updateBinarymedia6364'
     media.updateBinary = function(params, onCompletion){
        return media.customVerb('updateBinary', params, onCompletion);
     };

    //For Operation 'deleteBinary' with service id 'deleteBinarymedia5629'
     media.deleteBinary = function(params, onCompletion){
        return media.customVerb('deleteBinary', params, onCompletion);
     };

    var relations = [];

    media.relations = relations;

    media.prototype.isValid = function() {
        return media.isValid(this);
    };

    media.prototype.objModelName = "media";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    media.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("RDBMSObjectService", "media", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    media.clone = function(objectToClone) {
        var clonedObj = new media();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return media;
});
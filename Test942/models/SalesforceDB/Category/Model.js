/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "Category", "objectService" : "SalesforceDB"};

    var setterFunctions = {
        Category_Des__c: function(val, state) {
            context["field"] = "Category_Des__c";
            context["metadata"] = (objectMetadata ? objectMetadata["Category_Des__c"] : null);
            state['Category_Des__c'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        CreatedById: function(val, state) {
            context["field"] = "CreatedById";
            context["metadata"] = (objectMetadata ? objectMetadata["CreatedById"] : null);
            state['CreatedById'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        CreatedDate: function(val, state) {
            context["field"] = "CreatedDate";
            context["metadata"] = (objectMetadata ? objectMetadata["CreatedDate"] : null);
            state['CreatedDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Id: function(val, state) {
            context["field"] = "Id";
            context["metadata"] = (objectMetadata ? objectMetadata["Id"] : null);
            state['Id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        IsDeleted: function(val, state) {
            context["field"] = "IsDeleted";
            context["metadata"] = (objectMetadata ? objectMetadata["IsDeleted"] : null);
            state['IsDeleted'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        LastModifiedById: function(val, state) {
            context["field"] = "LastModifiedById";
            context["metadata"] = (objectMetadata ? objectMetadata["LastModifiedById"] : null);
            state['LastModifiedById'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        LastModifiedDate: function(val, state) {
            context["field"] = "LastModifiedDate";
            context["metadata"] = (objectMetadata ? objectMetadata["LastModifiedDate"] : null);
            state['LastModifiedDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        LastReferencedDate: function(val, state) {
            context["field"] = "LastReferencedDate";
            context["metadata"] = (objectMetadata ? objectMetadata["LastReferencedDate"] : null);
            state['LastReferencedDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        LastViewedDate: function(val, state) {
            context["field"] = "LastViewedDate";
            context["metadata"] = (objectMetadata ? objectMetadata["LastViewedDate"] : null);
            state['LastViewedDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Name: function(val, state) {
            context["field"] = "Name";
            context["metadata"] = (objectMetadata ? objectMetadata["Name"] : null);
            state['Name'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        OwnerId: function(val, state) {
            context["field"] = "OwnerId";
            context["metadata"] = (objectMetadata ? objectMetadata["OwnerId"] : null);
            state['OwnerId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        SystemModstamp: function(val, state) {
            context["field"] = "SystemModstamp";
            context["metadata"] = (objectMetadata ? objectMetadata["SystemModstamp"] : null);
            state['SystemModstamp'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function Category(defaultValues) {
        var privateState = {};
        context["field"] = "Category_Des__c";
        context["metadata"] = (objectMetadata ? objectMetadata["Category_Des__c"] : null);
        privateState.Category_Des__c = defaultValues ?
            (defaultValues["Category_Des__c"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Category_Des__c"], context) :
                null) :
            null;

        context["field"] = "CreatedById";
        context["metadata"] = (objectMetadata ? objectMetadata["CreatedById"] : null);
        privateState.CreatedById = defaultValues ?
            (defaultValues["CreatedById"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CreatedById"], context) :
                null) :
            null;

        context["field"] = "CreatedDate";
        context["metadata"] = (objectMetadata ? objectMetadata["CreatedDate"] : null);
        privateState.CreatedDate = defaultValues ?
            (defaultValues["CreatedDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CreatedDate"], context) :
                null) :
            null;

        context["field"] = "Id";
        context["metadata"] = (objectMetadata ? objectMetadata["Id"] : null);
        privateState.Id = defaultValues ?
            (defaultValues["Id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Id"], context) :
                null) :
            null;

        context["field"] = "IsDeleted";
        context["metadata"] = (objectMetadata ? objectMetadata["IsDeleted"] : null);
        privateState.IsDeleted = defaultValues ?
            (defaultValues["IsDeleted"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["IsDeleted"], context) :
                null) :
            null;

        context["field"] = "LastModifiedById";
        context["metadata"] = (objectMetadata ? objectMetadata["LastModifiedById"] : null);
        privateState.LastModifiedById = defaultValues ?
            (defaultValues["LastModifiedById"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["LastModifiedById"], context) :
                null) :
            null;

        context["field"] = "LastModifiedDate";
        context["metadata"] = (objectMetadata ? objectMetadata["LastModifiedDate"] : null);
        privateState.LastModifiedDate = defaultValues ?
            (defaultValues["LastModifiedDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["LastModifiedDate"], context) :
                null) :
            null;

        context["field"] = "LastReferencedDate";
        context["metadata"] = (objectMetadata ? objectMetadata["LastReferencedDate"] : null);
        privateState.LastReferencedDate = defaultValues ?
            (defaultValues["LastReferencedDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["LastReferencedDate"], context) :
                null) :
            null;

        context["field"] = "LastViewedDate";
        context["metadata"] = (objectMetadata ? objectMetadata["LastViewedDate"] : null);
        privateState.LastViewedDate = defaultValues ?
            (defaultValues["LastViewedDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["LastViewedDate"], context) :
                null) :
            null;

        context["field"] = "Name";
        context["metadata"] = (objectMetadata ? objectMetadata["Name"] : null);
        privateState.Name = defaultValues ?
            (defaultValues["Name"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Name"], context) :
                null) :
            null;

        context["field"] = "OwnerId";
        context["metadata"] = (objectMetadata ? objectMetadata["OwnerId"] : null);
        privateState.OwnerId = defaultValues ?
            (defaultValues["OwnerId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["OwnerId"], context) :
                null) :
            null;

        context["field"] = "SystemModstamp";
        context["metadata"] = (objectMetadata ? objectMetadata["SystemModstamp"] : null);
        privateState.SystemModstamp = defaultValues ?
            (defaultValues["SystemModstamp"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["SystemModstamp"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "Category_Des__c": {
                get: function() {
                    context["field"] = "Category_Des__c";
                    context["metadata"] = (objectMetadata ? objectMetadata["Category_Des__c"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Category_Des__c, context);
                },
                set: function(val) {
                    setterFunctions['Category_Des__c'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "CreatedById": {
                get: function() {
                    context["field"] = "CreatedById";
                    context["metadata"] = (objectMetadata ? objectMetadata["CreatedById"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CreatedById, context);
                },
                set: function(val) {
                    setterFunctions['CreatedById'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "CreatedDate": {
                get: function() {
                    context["field"] = "CreatedDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["CreatedDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CreatedDate, context);
                },
                set: function(val) {
                    setterFunctions['CreatedDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Id": {
                get: function() {
                    context["field"] = "Id";
                    context["metadata"] = (objectMetadata ? objectMetadata["Id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Id, context);
                },
                set: function(val) {
                    setterFunctions['Id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "IsDeleted": {
                get: function() {
                    context["field"] = "IsDeleted";
                    context["metadata"] = (objectMetadata ? objectMetadata["IsDeleted"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.IsDeleted, context);
                },
                set: function(val) {
                    setterFunctions['IsDeleted'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "LastModifiedById": {
                get: function() {
                    context["field"] = "LastModifiedById";
                    context["metadata"] = (objectMetadata ? objectMetadata["LastModifiedById"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.LastModifiedById, context);
                },
                set: function(val) {
                    setterFunctions['LastModifiedById'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "LastModifiedDate": {
                get: function() {
                    context["field"] = "LastModifiedDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["LastModifiedDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.LastModifiedDate, context);
                },
                set: function(val) {
                    setterFunctions['LastModifiedDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "LastReferencedDate": {
                get: function() {
                    context["field"] = "LastReferencedDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["LastReferencedDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.LastReferencedDate, context);
                },
                set: function(val) {
                    setterFunctions['LastReferencedDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "LastViewedDate": {
                get: function() {
                    context["field"] = "LastViewedDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["LastViewedDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.LastViewedDate, context);
                },
                set: function(val) {
                    setterFunctions['LastViewedDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Name": {
                get: function() {
                    context["field"] = "Name";
                    context["metadata"] = (objectMetadata ? objectMetadata["Name"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Name, context);
                },
                set: function(val) {
                    setterFunctions['Name'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "OwnerId": {
                get: function() {
                    context["field"] = "OwnerId";
                    context["metadata"] = (objectMetadata ? objectMetadata["OwnerId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.OwnerId, context);
                },
                set: function(val) {
                    setterFunctions['OwnerId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "SystemModstamp": {
                get: function() {
                    context["field"] = "SystemModstamp";
                    context["metadata"] = (objectMetadata ? objectMetadata["SystemModstamp"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.SystemModstamp, context);
                },
                set: function(val) {
                    setterFunctions['SystemModstamp'].call(this, val, privateState);
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
            privateState.Category_Des__c = value ? (value["Category_Des__c"] ? value["Category_Des__c"] : null) : null;
            privateState.CreatedById = value ? (value["CreatedById"] ? value["CreatedById"] : null) : null;
            privateState.CreatedDate = value ? (value["CreatedDate"] ? value["CreatedDate"] : null) : null;
            privateState.Id = value ? (value["Id"] ? value["Id"] : null) : null;
            privateState.IsDeleted = value ? (value["IsDeleted"] ? value["IsDeleted"] : null) : null;
            privateState.LastModifiedById = value ? (value["LastModifiedById"] ? value["LastModifiedById"] : null) : null;
            privateState.LastModifiedDate = value ? (value["LastModifiedDate"] ? value["LastModifiedDate"] : null) : null;
            privateState.LastReferencedDate = value ? (value["LastReferencedDate"] ? value["LastReferencedDate"] : null) : null;
            privateState.LastViewedDate = value ? (value["LastViewedDate"] ? value["LastViewedDate"] : null) : null;
            privateState.Name = value ? (value["Name"] ? value["Name"] : null) : null;
            privateState.OwnerId = value ? (value["OwnerId"] ? value["OwnerId"] : null) : null;
            privateState.SystemModstamp = value ? (value["SystemModstamp"] ? value["SystemModstamp"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(Category);

    //Create new class level validator object
    BaseModel.Validator.call(Category);

    var registerValidatorBackup = Category.registerValidator;

    Category.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(Category.isValid(this, propName, val)) {
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

    Category.relations = relations;

    Category.prototype.isValid = function() {
        return Category.isValid(this);
    };

    Category.prototype.objModelName = "Category";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    Category.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("SalesforceDB", "Category", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    Category.clone = function(objectToClone) {
        var clonedObj = new Category();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return Category;
});
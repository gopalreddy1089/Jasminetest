/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "EAM_ADDRESS", "objectService" : "sapobj"};

    var setterFunctions = {
        ADDRNO: function(val, state) {
            context["field"] = "ADDRNO";
            context["metadata"] = (objectMetadata ? objectMetadata["ADDRNO"] : null);
            state['ADDRNO'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        CITY: function(val, state) {
            context["field"] = "CITY";
            context["metadata"] = (objectMetadata ? objectMetadata["CITY"] : null);
            state['CITY'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        COUNTER: function(val, state) {
            context["field"] = "COUNTER";
            context["metadata"] = (objectMetadata ? objectMetadata["COUNTER"] : null);
            state['COUNTER'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        COUNTRY: function(val, state) {
            context["field"] = "COUNTRY";
            context["metadata"] = (objectMetadata ? objectMetadata["COUNTRY"] : null);
            state['COUNTRY'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        DELETE_IND: function(val, state) {
            context["field"] = "DELETE_IND";
            context["metadata"] = (objectMetadata ? objectMetadata["DELETE_IND"] : null);
            state['DELETE_IND'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        EMAIL: function(val, state) {
            context["field"] = "EMAIL";
            context["metadata"] = (objectMetadata ? objectMetadata["EMAIL"] : null);
            state['EMAIL'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        FAX: function(val, state) {
            context["field"] = "FAX";
            context["metadata"] = (objectMetadata ? objectMetadata["FAX"] : null);
            state['FAX'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        FAX_EXTENSION: function(val, state) {
            context["field"] = "FAX_EXTENSION";
            context["metadata"] = (objectMetadata ? objectMetadata["FAX_EXTENSION"] : null);
            state['FAX_EXTENSION'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        HOUSE_NUM: function(val, state) {
            context["field"] = "HOUSE_NUM";
            context["metadata"] = (objectMetadata ? objectMetadata["HOUSE_NUM"] : null);
            state['HOUSE_NUM'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        LATITUDE: function(val, state) {
            context["field"] = "LATITUDE";
            context["metadata"] = (objectMetadata ? objectMetadata["LATITUDE"] : null);
            state['LATITUDE'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        LONGITUDE: function(val, state) {
            context["field"] = "LONGITUDE";
            context["metadata"] = (objectMetadata ? objectMetadata["LONGITUDE"] : null);
            state['LONGITUDE'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        MOBILE1: function(val, state) {
            context["field"] = "MOBILE1";
            context["metadata"] = (objectMetadata ? objectMetadata["MOBILE1"] : null);
            state['MOBILE1'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        MOBILE2: function(val, state) {
            context["field"] = "MOBILE2";
            context["metadata"] = (objectMetadata ? objectMetadata["MOBILE2"] : null);
            state['MOBILE2'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        NAME1: function(val, state) {
            context["field"] = "NAME1";
            context["metadata"] = (objectMetadata ? objectMetadata["NAME1"] : null);
            state['NAME1'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        NAME2: function(val, state) {
            context["field"] = "NAME2";
            context["metadata"] = (objectMetadata ? objectMetadata["NAME2"] : null);
            state['NAME2'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        OPMODE: function(val, state) {
            context["field"] = "OPMODE";
            context["metadata"] = (objectMetadata ? objectMetadata["OPMODE"] : null);
            state['OPMODE'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        PHONE1: function(val, state) {
            context["field"] = "PHONE1";
            context["metadata"] = (objectMetadata ? objectMetadata["PHONE1"] : null);
            state['PHONE1'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        PHONE2: function(val, state) {
            context["field"] = "PHONE2";
            context["metadata"] = (objectMetadata ? objectMetadata["PHONE2"] : null);
            state['PHONE2'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        POST_CODE: function(val, state) {
            context["field"] = "POST_CODE";
            context["metadata"] = (objectMetadata ? objectMetadata["POST_CODE"] : null);
            state['POST_CODE'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        REGION: function(val, state) {
            context["field"] = "REGION";
            context["metadata"] = (objectMetadata ? objectMetadata["REGION"] : null);
            state['REGION'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        STREET: function(val, state) {
            context["field"] = "STREET";
            context["metadata"] = (objectMetadata ? objectMetadata["STREET"] : null);
            state['STREET'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        TEL_EXTENSION1: function(val, state) {
            context["field"] = "TEL_EXTENSION1";
            context["metadata"] = (objectMetadata ? objectMetadata["TEL_EXTENSION1"] : null);
            state['TEL_EXTENSION1'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        TEL_EXTENSION2: function(val, state) {
            context["field"] = "TEL_EXTENSION2";
            context["metadata"] = (objectMetadata ? objectMetadata["TEL_EXTENSION2"] : null);
            state['TEL_EXTENSION2'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        TIMESTAMP: function(val, state) {
            context["field"] = "TIMESTAMP";
            context["metadata"] = (objectMetadata ? objectMetadata["TIMESTAMP"] : null);
            state['TIMESTAMP'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function EAM_ADDRESS(defaultValues) {
        var privateState = {};
        context["field"] = "ADDRNO";
        context["metadata"] = (objectMetadata ? objectMetadata["ADDRNO"] : null);
        privateState.ADDRNO = defaultValues ?
            (defaultValues["ADDRNO"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ADDRNO"], context) :
                null) :
            null;

        context["field"] = "CITY";
        context["metadata"] = (objectMetadata ? objectMetadata["CITY"] : null);
        privateState.CITY = defaultValues ?
            (defaultValues["CITY"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CITY"], context) :
                null) :
            null;

        context["field"] = "COUNTER";
        context["metadata"] = (objectMetadata ? objectMetadata["COUNTER"] : null);
        privateState.COUNTER = defaultValues ?
            (defaultValues["COUNTER"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["COUNTER"], context) :
                null) :
            null;

        context["field"] = "COUNTRY";
        context["metadata"] = (objectMetadata ? objectMetadata["COUNTRY"] : null);
        privateState.COUNTRY = defaultValues ?
            (defaultValues["COUNTRY"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["COUNTRY"], context) :
                null) :
            null;

        context["field"] = "DELETE_IND";
        context["metadata"] = (objectMetadata ? objectMetadata["DELETE_IND"] : null);
        privateState.DELETE_IND = defaultValues ?
            (defaultValues["DELETE_IND"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DELETE_IND"], context) :
                null) :
            null;

        context["field"] = "EMAIL";
        context["metadata"] = (objectMetadata ? objectMetadata["EMAIL"] : null);
        privateState.EMAIL = defaultValues ?
            (defaultValues["EMAIL"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["EMAIL"], context) :
                null) :
            null;

        context["field"] = "FAX";
        context["metadata"] = (objectMetadata ? objectMetadata["FAX"] : null);
        privateState.FAX = defaultValues ?
            (defaultValues["FAX"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["FAX"], context) :
                null) :
            null;

        context["field"] = "FAX_EXTENSION";
        context["metadata"] = (objectMetadata ? objectMetadata["FAX_EXTENSION"] : null);
        privateState.FAX_EXTENSION = defaultValues ?
            (defaultValues["FAX_EXTENSION"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["FAX_EXTENSION"], context) :
                null) :
            null;

        context["field"] = "HOUSE_NUM";
        context["metadata"] = (objectMetadata ? objectMetadata["HOUSE_NUM"] : null);
        privateState.HOUSE_NUM = defaultValues ?
            (defaultValues["HOUSE_NUM"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["HOUSE_NUM"], context) :
                null) :
            null;

        context["field"] = "LATITUDE";
        context["metadata"] = (objectMetadata ? objectMetadata["LATITUDE"] : null);
        privateState.LATITUDE = defaultValues ?
            (defaultValues["LATITUDE"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["LATITUDE"], context) :
                null) :
            null;

        context["field"] = "LONGITUDE";
        context["metadata"] = (objectMetadata ? objectMetadata["LONGITUDE"] : null);
        privateState.LONGITUDE = defaultValues ?
            (defaultValues["LONGITUDE"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["LONGITUDE"], context) :
                null) :
            null;

        context["field"] = "MOBILE1";
        context["metadata"] = (objectMetadata ? objectMetadata["MOBILE1"] : null);
        privateState.MOBILE1 = defaultValues ?
            (defaultValues["MOBILE1"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["MOBILE1"], context) :
                null) :
            null;

        context["field"] = "MOBILE2";
        context["metadata"] = (objectMetadata ? objectMetadata["MOBILE2"] : null);
        privateState.MOBILE2 = defaultValues ?
            (defaultValues["MOBILE2"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["MOBILE2"], context) :
                null) :
            null;

        context["field"] = "NAME1";
        context["metadata"] = (objectMetadata ? objectMetadata["NAME1"] : null);
        privateState.NAME1 = defaultValues ?
            (defaultValues["NAME1"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["NAME1"], context) :
                null) :
            null;

        context["field"] = "NAME2";
        context["metadata"] = (objectMetadata ? objectMetadata["NAME2"] : null);
        privateState.NAME2 = defaultValues ?
            (defaultValues["NAME2"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["NAME2"], context) :
                null) :
            null;

        context["field"] = "OPMODE";
        context["metadata"] = (objectMetadata ? objectMetadata["OPMODE"] : null);
        privateState.OPMODE = defaultValues ?
            (defaultValues["OPMODE"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["OPMODE"], context) :
                null) :
            null;

        context["field"] = "PHONE1";
        context["metadata"] = (objectMetadata ? objectMetadata["PHONE1"] : null);
        privateState.PHONE1 = defaultValues ?
            (defaultValues["PHONE1"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["PHONE1"], context) :
                null) :
            null;

        context["field"] = "PHONE2";
        context["metadata"] = (objectMetadata ? objectMetadata["PHONE2"] : null);
        privateState.PHONE2 = defaultValues ?
            (defaultValues["PHONE2"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["PHONE2"], context) :
                null) :
            null;

        context["field"] = "POST_CODE";
        context["metadata"] = (objectMetadata ? objectMetadata["POST_CODE"] : null);
        privateState.POST_CODE = defaultValues ?
            (defaultValues["POST_CODE"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["POST_CODE"], context) :
                null) :
            null;

        context["field"] = "REGION";
        context["metadata"] = (objectMetadata ? objectMetadata["REGION"] : null);
        privateState.REGION = defaultValues ?
            (defaultValues["REGION"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["REGION"], context) :
                null) :
            null;

        context["field"] = "STREET";
        context["metadata"] = (objectMetadata ? objectMetadata["STREET"] : null);
        privateState.STREET = defaultValues ?
            (defaultValues["STREET"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["STREET"], context) :
                null) :
            null;

        context["field"] = "TEL_EXTENSION1";
        context["metadata"] = (objectMetadata ? objectMetadata["TEL_EXTENSION1"] : null);
        privateState.TEL_EXTENSION1 = defaultValues ?
            (defaultValues["TEL_EXTENSION1"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["TEL_EXTENSION1"], context) :
                null) :
            null;

        context["field"] = "TEL_EXTENSION2";
        context["metadata"] = (objectMetadata ? objectMetadata["TEL_EXTENSION2"] : null);
        privateState.TEL_EXTENSION2 = defaultValues ?
            (defaultValues["TEL_EXTENSION2"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["TEL_EXTENSION2"], context) :
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
            "ADDRNO": {
                get: function() {
                    context["field"] = "ADDRNO";
                    context["metadata"] = (objectMetadata ? objectMetadata["ADDRNO"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ADDRNO, context);
                },
                set: function(val) {
                    setterFunctions['ADDRNO'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "CITY": {
                get: function() {
                    context["field"] = "CITY";
                    context["metadata"] = (objectMetadata ? objectMetadata["CITY"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CITY, context);
                },
                set: function(val) {
                    setterFunctions['CITY'].call(this, val, privateState);
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
            "COUNTRY": {
                get: function() {
                    context["field"] = "COUNTRY";
                    context["metadata"] = (objectMetadata ? objectMetadata["COUNTRY"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.COUNTRY, context);
                },
                set: function(val) {
                    setterFunctions['COUNTRY'].call(this, val, privateState);
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
            "EMAIL": {
                get: function() {
                    context["field"] = "EMAIL";
                    context["metadata"] = (objectMetadata ? objectMetadata["EMAIL"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.EMAIL, context);
                },
                set: function(val) {
                    setterFunctions['EMAIL'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "FAX": {
                get: function() {
                    context["field"] = "FAX";
                    context["metadata"] = (objectMetadata ? objectMetadata["FAX"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.FAX, context);
                },
                set: function(val) {
                    setterFunctions['FAX'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "FAX_EXTENSION": {
                get: function() {
                    context["field"] = "FAX_EXTENSION";
                    context["metadata"] = (objectMetadata ? objectMetadata["FAX_EXTENSION"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.FAX_EXTENSION, context);
                },
                set: function(val) {
                    setterFunctions['FAX_EXTENSION'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "HOUSE_NUM": {
                get: function() {
                    context["field"] = "HOUSE_NUM";
                    context["metadata"] = (objectMetadata ? objectMetadata["HOUSE_NUM"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.HOUSE_NUM, context);
                },
                set: function(val) {
                    setterFunctions['HOUSE_NUM'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "LATITUDE": {
                get: function() {
                    context["field"] = "LATITUDE";
                    context["metadata"] = (objectMetadata ? objectMetadata["LATITUDE"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.LATITUDE, context);
                },
                set: function(val) {
                    setterFunctions['LATITUDE'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "LONGITUDE": {
                get: function() {
                    context["field"] = "LONGITUDE";
                    context["metadata"] = (objectMetadata ? objectMetadata["LONGITUDE"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.LONGITUDE, context);
                },
                set: function(val) {
                    setterFunctions['LONGITUDE'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MOBILE1": {
                get: function() {
                    context["field"] = "MOBILE1";
                    context["metadata"] = (objectMetadata ? objectMetadata["MOBILE1"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.MOBILE1, context);
                },
                set: function(val) {
                    setterFunctions['MOBILE1'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MOBILE2": {
                get: function() {
                    context["field"] = "MOBILE2";
                    context["metadata"] = (objectMetadata ? objectMetadata["MOBILE2"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.MOBILE2, context);
                },
                set: function(val) {
                    setterFunctions['MOBILE2'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "NAME1": {
                get: function() {
                    context["field"] = "NAME1";
                    context["metadata"] = (objectMetadata ? objectMetadata["NAME1"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.NAME1, context);
                },
                set: function(val) {
                    setterFunctions['NAME1'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "NAME2": {
                get: function() {
                    context["field"] = "NAME2";
                    context["metadata"] = (objectMetadata ? objectMetadata["NAME2"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.NAME2, context);
                },
                set: function(val) {
                    setterFunctions['NAME2'].call(this, val, privateState);
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
            "PHONE1": {
                get: function() {
                    context["field"] = "PHONE1";
                    context["metadata"] = (objectMetadata ? objectMetadata["PHONE1"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.PHONE1, context);
                },
                set: function(val) {
                    setterFunctions['PHONE1'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "PHONE2": {
                get: function() {
                    context["field"] = "PHONE2";
                    context["metadata"] = (objectMetadata ? objectMetadata["PHONE2"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.PHONE2, context);
                },
                set: function(val) {
                    setterFunctions['PHONE2'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "POST_CODE": {
                get: function() {
                    context["field"] = "POST_CODE";
                    context["metadata"] = (objectMetadata ? objectMetadata["POST_CODE"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.POST_CODE, context);
                },
                set: function(val) {
                    setterFunctions['POST_CODE'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "REGION": {
                get: function() {
                    context["field"] = "REGION";
                    context["metadata"] = (objectMetadata ? objectMetadata["REGION"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.REGION, context);
                },
                set: function(val) {
                    setterFunctions['REGION'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "STREET": {
                get: function() {
                    context["field"] = "STREET";
                    context["metadata"] = (objectMetadata ? objectMetadata["STREET"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.STREET, context);
                },
                set: function(val) {
                    setterFunctions['STREET'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "TEL_EXTENSION1": {
                get: function() {
                    context["field"] = "TEL_EXTENSION1";
                    context["metadata"] = (objectMetadata ? objectMetadata["TEL_EXTENSION1"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.TEL_EXTENSION1, context);
                },
                set: function(val) {
                    setterFunctions['TEL_EXTENSION1'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "TEL_EXTENSION2": {
                get: function() {
                    context["field"] = "TEL_EXTENSION2";
                    context["metadata"] = (objectMetadata ? objectMetadata["TEL_EXTENSION2"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.TEL_EXTENSION2, context);
                },
                set: function(val) {
                    setterFunctions['TEL_EXTENSION2'].call(this, val, privateState);
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
            privateState.ADDRNO = value ? (value["ADDRNO"] ? value["ADDRNO"] : null) : null;
            privateState.CITY = value ? (value["CITY"] ? value["CITY"] : null) : null;
            privateState.COUNTER = value ? (value["COUNTER"] ? value["COUNTER"] : null) : null;
            privateState.COUNTRY = value ? (value["COUNTRY"] ? value["COUNTRY"] : null) : null;
            privateState.DELETE_IND = value ? (value["DELETE_IND"] ? value["DELETE_IND"] : null) : null;
            privateState.EMAIL = value ? (value["EMAIL"] ? value["EMAIL"] : null) : null;
            privateState.FAX = value ? (value["FAX"] ? value["FAX"] : null) : null;
            privateState.FAX_EXTENSION = value ? (value["FAX_EXTENSION"] ? value["FAX_EXTENSION"] : null) : null;
            privateState.HOUSE_NUM = value ? (value["HOUSE_NUM"] ? value["HOUSE_NUM"] : null) : null;
            privateState.LATITUDE = value ? (value["LATITUDE"] ? value["LATITUDE"] : null) : null;
            privateState.LONGITUDE = value ? (value["LONGITUDE"] ? value["LONGITUDE"] : null) : null;
            privateState.MOBILE1 = value ? (value["MOBILE1"] ? value["MOBILE1"] : null) : null;
            privateState.MOBILE2 = value ? (value["MOBILE2"] ? value["MOBILE2"] : null) : null;
            privateState.NAME1 = value ? (value["NAME1"] ? value["NAME1"] : null) : null;
            privateState.NAME2 = value ? (value["NAME2"] ? value["NAME2"] : null) : null;
            privateState.OPMODE = value ? (value["OPMODE"] ? value["OPMODE"] : null) : null;
            privateState.PHONE1 = value ? (value["PHONE1"] ? value["PHONE1"] : null) : null;
            privateState.PHONE2 = value ? (value["PHONE2"] ? value["PHONE2"] : null) : null;
            privateState.POST_CODE = value ? (value["POST_CODE"] ? value["POST_CODE"] : null) : null;
            privateState.REGION = value ? (value["REGION"] ? value["REGION"] : null) : null;
            privateState.STREET = value ? (value["STREET"] ? value["STREET"] : null) : null;
            privateState.TEL_EXTENSION1 = value ? (value["TEL_EXTENSION1"] ? value["TEL_EXTENSION1"] : null) : null;
            privateState.TEL_EXTENSION2 = value ? (value["TEL_EXTENSION2"] ? value["TEL_EXTENSION2"] : null) : null;
            privateState.TIMESTAMP = value ? (value["TIMESTAMP"] ? value["TIMESTAMP"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(EAM_ADDRESS);

    //Create new class level validator object
    BaseModel.Validator.call(EAM_ADDRESS);

    var registerValidatorBackup = EAM_ADDRESS.registerValidator;

    EAM_ADDRESS.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(EAM_ADDRESS.isValid(this, propName, val)) {
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

    EAM_ADDRESS.relations = relations;

    EAM_ADDRESS.prototype.isValid = function() {
        return EAM_ADDRESS.isValid(this);
    };

    EAM_ADDRESS.prototype.objModelName = "EAM_ADDRESS";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    EAM_ADDRESS.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("sapobj", "EAM_ADDRESS", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    EAM_ADDRESS.clone = function(objectToClone) {
        var clonedObj = new EAM_ADDRESS();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return EAM_ADDRESS;
});
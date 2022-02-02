/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "EAM_NOTIF", "objectService" : "sapobj"};

    var setterFunctions = {
        ABCINDIC: function(val, state) {
            context["field"] = "ABCINDIC";
            context["metadata"] = (objectMetadata ? objectMetadata["ABCINDIC"] : null);
            state['ABCINDIC'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ACCEPTED: function(val, state) {
            context["field"] = "ACCEPTED";
            context["metadata"] = (objectMetadata ? objectMetadata["ACCEPTED"] : null);
            state['ACCEPTED'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ADDR_NO_LOC: function(val, state) {
            context["field"] = "ADDR_NO_LOC";
            context["metadata"] = (objectMetadata ? objectMetadata["ADDR_NO_LOC"] : null);
            state['ADDR_NO_LOC'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ADDR_NUMBER: function(val, state) {
            context["field"] = "ADDR_NUMBER";
            context["metadata"] = (objectMetadata ? objectMetadata["ADDR_NUMBER"] : null);
            state['ADDR_NUMBER'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ASSEMBLY: function(val, state) {
            context["field"] = "ASSEMBLY";
            context["metadata"] = (objectMetadata ? objectMetadata["ASSEMBLY"] : null);
            state['ASSEMBLY'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ASSEMBLY_EXT: function(val, state) {
            context["field"] = "ASSEMBLY_EXT";
            context["metadata"] = (objectMetadata ? objectMetadata["ASSEMBLY_EXT"] : null);
            state['ASSEMBLY_EXT'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ASSEMBLY_GUID: function(val, state) {
            context["field"] = "ASSEMBLY_GUID";
            context["metadata"] = (objectMetadata ? objectMetadata["ASSEMBLY_GUID"] : null);
            state['ASSEMBLY_GUID'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ASSEMBLY_VERSION: function(val, state) {
            context["field"] = "ASSEMBLY_VERSION";
            context["metadata"] = (objectMetadata ? objectMetadata["ASSEMBLY_VERSION"] : null);
            state['ASSEMBLY_VERSION'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ASSET_NO: function(val, state) {
            context["field"] = "ASSET_NO";
            context["metadata"] = (objectMetadata ? objectMetadata["ASSET_NO"] : null);
            state['ASSET_NO'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        BREAKDOWN: function(val, state) {
            context["field"] = "BREAKDOWN";
            context["metadata"] = (objectMetadata ? objectMetadata["BREAKDOWN"] : null);
            state['BREAKDOWN'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        BUS_AREA: function(val, state) {
            context["field"] = "BUS_AREA";
            context["metadata"] = (objectMetadata ? objectMetadata["BUS_AREA"] : null);
            state['BUS_AREA'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        CATALOG_PROFILE: function(val, state) {
            context["field"] = "CATALOG_PROFILE";
            context["metadata"] = (objectMetadata ? objectMetadata["CATALOG_PROFILE"] : null);
            state['CATALOG_PROFILE'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        CAT_TYPE: function(val, state) {
            context["field"] = "CAT_TYPE";
            context["metadata"] = (objectMetadata ? objectMetadata["CAT_TYPE"] : null);
            state['CAT_TYPE'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        CAUSE_CODE: function(val, state) {
            context["field"] = "CAUSE_CODE";
            context["metadata"] = (objectMetadata ? objectMetadata["CAUSE_CODE"] : null);
            state['CAUSE_CODE'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        CHANGED_AT: function(val, state) {
            context["field"] = "CHANGED_AT";
            context["metadata"] = (objectMetadata ? objectMetadata["CHANGED_AT"] : null);
            state['CHANGED_AT'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        CHANGED_BY: function(val, state) {
            context["field"] = "CHANGED_BY";
            context["metadata"] = (objectMetadata ? objectMetadata["CHANGED_BY"] : null);
            state['CHANGED_BY'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        CHANGED_ON: function(val, state) {
            context["field"] = "CHANGED_ON";
            context["metadata"] = (objectMetadata ? objectMetadata["CHANGED_ON"] : null);
            state['CHANGED_ON'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        CODE_GRP_CAUSE: function(val, state) {
            context["field"] = "CODE_GRP_CAUSE";
            context["metadata"] = (objectMetadata ? objectMetadata["CODE_GRP_CAUSE"] : null);
            state['CODE_GRP_CAUSE'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        CODE_GRP_CODING: function(val, state) {
            context["field"] = "CODE_GRP_CODING";
            context["metadata"] = (objectMetadata ? objectMetadata["CODE_GRP_CODING"] : null);
            state['CODE_GRP_CODING'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        CODE_GRP_PART: function(val, state) {
            context["field"] = "CODE_GRP_PART";
            context["metadata"] = (objectMetadata ? objectMetadata["CODE_GRP_PART"] : null);
            state['CODE_GRP_PART'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        CODE_GRP_PROBLEM: function(val, state) {
            context["field"] = "CODE_GRP_PROBLEM";
            context["metadata"] = (objectMetadata ? objectMetadata["CODE_GRP_PROBLEM"] : null);
            state['CODE_GRP_PROBLEM'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        CODING_CODE: function(val, state) {
            context["field"] = "CODING_CODE";
            context["metadata"] = (objectMetadata ? objectMetadata["CODING_CODE"] : null);
            state['CODING_CODE'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        COMPTIME: function(val, state) {
            context["field"] = "COMPTIME";
            context["metadata"] = (objectMetadata ? objectMetadata["COMPTIME"] : null);
            state['COMPTIME'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        COMP_CODE: function(val, state) {
            context["field"] = "COMP_CODE";
            context["metadata"] = (objectMetadata ? objectMetadata["COMP_CODE"] : null);
            state['COMP_CODE'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        CONVERT_TO_WO: function(val, state) {
            context["field"] = "CONVERT_TO_WO";
            context["metadata"] = (objectMetadata ? objectMetadata["CONVERT_TO_WO"] : null);
            state['CONVERT_TO_WO'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        COSTCENTER: function(val, state) {
            context["field"] = "COSTCENTER";
            context["metadata"] = (objectMetadata ? objectMetadata["COSTCENTER"] : null);
            state['COSTCENTER'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        CO_AREA: function(val, state) {
            context["field"] = "CO_AREA";
            context["metadata"] = (objectMetadata ? objectMetadata["CO_AREA"] : null);
            state['CO_AREA'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        CREATED_AT: function(val, state) {
            context["field"] = "CREATED_AT";
            context["metadata"] = (objectMetadata ? objectMetadata["CREATED_AT"] : null);
            state['CREATED_AT'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        CREATED_BY: function(val, state) {
            context["field"] = "CREATED_BY";
            context["metadata"] = (objectMetadata ? objectMetadata["CREATED_BY"] : null);
            state['CREATED_BY'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        CREATED_ON: function(val, state) {
            context["field"] = "CREATED_ON";
            context["metadata"] = (objectMetadata ? objectMetadata["CREATED_ON"] : null);
            state['CREATED_ON'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        CUST_NO: function(val, state) {
            context["field"] = "CUST_NO";
            context["metadata"] = (objectMetadata ? objectMetadata["CUST_NO"] : null);
            state['CUST_NO'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        DELETE_FLAG: function(val, state) {
            context["field"] = "DELETE_FLAG";
            context["metadata"] = (objectMetadata ? objectMetadata["DELETE_FLAG"] : null);
            state['DELETE_FLAG'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        DELETE_IND: function(val, state) {
            context["field"] = "DELETE_IND";
            context["metadata"] = (objectMetadata ? objectMetadata["DELETE_IND"] : null);
            state['DELETE_IND'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        DESENDDATE: function(val, state) {
            context["field"] = "DESENDDATE";
            context["metadata"] = (objectMetadata ? objectMetadata["DESENDDATE"] : null);
            state['DESENDDATE'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        DESENDTM: function(val, state) {
            context["field"] = "DESENDTM";
            context["metadata"] = (objectMetadata ? objectMetadata["DESENDTM"] : null);
            state['DESENDTM'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        DESEN_DATE_TIME: function(val, state) {
            context["field"] = "DESEN_DATE_TIME";
            context["metadata"] = (objectMetadata ? objectMetadata["DESEN_DATE_TIME"] : null);
            state['DESEN_DATE_TIME'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
        DESST_DATE_TIME: function(val, state) {
            context["field"] = "DESST_DATE_TIME";
            context["metadata"] = (objectMetadata ? objectMetadata["DESST_DATE_TIME"] : null);
            state['DESST_DATE_TIME'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        DEVICEDATA: function(val, state) {
            context["field"] = "DEVICEDATA";
            context["metadata"] = (objectMetadata ? objectMetadata["DEVICEDATA"] : null);
            state['DEVICEDATA'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        DISTR_CHAN: function(val, state) {
            context["field"] = "DISTR_CHAN";
            context["metadata"] = (objectMetadata ? objectMetadata["DISTR_CHAN"] : null);
            state['DISTR_CHAN'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        DIST_CHAN_LOC: function(val, state) {
            context["field"] = "DIST_CHAN_LOC";
            context["metadata"] = (objectMetadata ? objectMetadata["DIST_CHAN_LOC"] : null);
            state['DIST_CHAN_LOC'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        DIVISION: function(val, state) {
            context["field"] = "DIVISION";
            context["metadata"] = (objectMetadata ? objectMetadata["DIVISION"] : null);
            state['DIVISION'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        DIVISION_LOC: function(val, state) {
            context["field"] = "DIVISION_LOC";
            context["metadata"] = (objectMetadata ? objectMetadata["DIVISION_LOC"] : null);
            state['DIVISION_LOC'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        DOC_NUMBER: function(val, state) {
            context["field"] = "DOC_NUMBER";
            context["metadata"] = (objectMetadata ? objectMetadata["DOC_NUMBER"] : null);
            state['DOC_NUMBER'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        DOWNTIME: function(val, state) {
            context["field"] = "DOWNTIME";
            context["metadata"] = (objectMetadata ? objectMetadata["DOWNTIME"] : null);
            state['DOWNTIME'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ENDMLFNDATE: function(val, state) {
            context["field"] = "ENDMLFNDATE";
            context["metadata"] = (objectMetadata ? objectMetadata["ENDMLFNDATE"] : null);
            state['ENDMLFNDATE'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ENDMLFNTIME: function(val, state) {
            context["field"] = "ENDMLFNTIME";
            context["metadata"] = (objectMetadata ? objectMetadata["ENDMLFNTIME"] : null);
            state['ENDMLFNTIME'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ENDML_DATE_TIME: function(val, state) {
            context["field"] = "ENDML_DATE_TIME";
            context["metadata"] = (objectMetadata ? objectMetadata["ENDML_DATE_TIME"] : null);
            state['ENDML_DATE_TIME'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        END_POINT: function(val, state) {
            context["field"] = "END_POINT";
            context["metadata"] = (objectMetadata ? objectMetadata["END_POINT"] : null);
            state['END_POINT'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        EQUIP_NUM: function(val, state) {
            context["field"] = "EQUIP_NUM";
            context["metadata"] = (objectMetadata ? objectMetadata["EQUIP_NUM"] : null);
            state['EQUIP_NUM'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        FLOCN_DESC: function(val, state) {
            context["field"] = "FLOCN_DESC";
            context["metadata"] = (objectMetadata ? objectMetadata["FLOCN_DESC"] : null);
            state['FLOCN_DESC'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        FUNC_LOCATION: function(val, state) {
            context["field"] = "FUNC_LOCATION";
            context["metadata"] = (objectMetadata ? objectMetadata["FUNC_LOCATION"] : null);
            state['FUNC_LOCATION'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        INTERNAL_NUMBER: function(val, state) {
            context["field"] = "INTERNAL_NUMBER";
            context["metadata"] = (objectMetadata ? objectMetadata["INTERNAL_NUMBER"] : null);
            state['INTERNAL_NUMBER'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ISOCODE_UNIT: function(val, state) {
            context["field"] = "ISOCODE_UNIT";
            context["metadata"] = (objectMetadata ? objectMetadata["ISOCODE_UNIT"] : null);
            state['ISOCODE_UNIT'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ITM_NUMBER: function(val, state) {
            context["field"] = "ITM_NUMBER";
            context["metadata"] = (objectMetadata ? objectMetadata["ITM_NUMBER"] : null);
            state['ITM_NUMBER'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        LINEAR_LENGTH: function(val, state) {
            context["field"] = "LINEAR_LENGTH";
            context["metadata"] = (objectMetadata ? objectMetadata["LINEAR_LENGTH"] : null);
            state['LINEAR_LENGTH'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        LINEAR_UNIT: function(val, state) {
            context["field"] = "LINEAR_UNIT";
            context["metadata"] = (objectMetadata ? objectMetadata["LINEAR_UNIT"] : null);
            state['LINEAR_UNIT'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        LOC_ACC: function(val, state) {
            context["field"] = "LOC_ACC";
            context["metadata"] = (objectMetadata ? objectMetadata["LOC_ACC"] : null);
            state['LOC_ACC'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        LONG_TEXT: function(val, state) {
            context["field"] = "LONG_TEXT";
            context["metadata"] = (objectMetadata ? objectMetadata["LONG_TEXT"] : null);
            state['LONG_TEXT'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        LRPID: function(val, state) {
            context["field"] = "LRPID";
            context["metadata"] = (objectMetadata ? objectMetadata["LRPID"] : null);
            state['LRPID'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        LTEXT: function(val, state) {
            context["field"] = "LTEXT";
            context["metadata"] = (objectMetadata ? objectMetadata["LTEXT"] : null);
            state['LTEXT'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        MAINTITEM: function(val, state) {
            context["field"] = "MAINTITEM";
            context["metadata"] = (objectMetadata ? objectMetadata["MAINTITEM"] : null);
            state['MAINTITEM'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        MAINTLOC: function(val, state) {
            context["field"] = "MAINTLOC";
            context["metadata"] = (objectMetadata ? objectMetadata["MAINTLOC"] : null);
            state['MAINTLOC'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        MAINTPLANT: function(val, state) {
            context["field"] = "MAINTPLANT";
            context["metadata"] = (objectMetadata ? objectMetadata["MAINTPLANT"] : null);
            state['MAINTPLANT'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        MAINTROOM: function(val, state) {
            context["field"] = "MAINTROOM";
            context["metadata"] = (objectMetadata ? objectMetadata["MAINTROOM"] : null);
            state['MAINTROOM'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        MANU_WRRNTY_ENDT: function(val, state) {
            context["field"] = "MANU_WRRNTY_ENDT";
            context["metadata"] = (objectMetadata ? objectMetadata["MANU_WRRNTY_ENDT"] : null);
            state['MANU_WRRNTY_ENDT'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        MANU_WRRNTY_STDT: function(val, state) {
            context["field"] = "MANU_WRRNTY_STDT";
            context["metadata"] = (objectMetadata ? objectMetadata["MANU_WRRNTY_STDT"] : null);
            state['MANU_WRRNTY_STDT'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        MARKER_DIST_END: function(val, state) {
            context["field"] = "MARKER_DIST_END";
            context["metadata"] = (objectMetadata ? objectMetadata["MARKER_DIST_END"] : null);
            state['MARKER_DIST_END'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        MARKER_DIST_STA: function(val, state) {
            context["field"] = "MARKER_DIST_STA";
            context["metadata"] = (objectMetadata ? objectMetadata["MARKER_DIST_STA"] : null);
            state['MARKER_DIST_STA'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        MARKER_DIST_UNIT: function(val, state) {
            context["field"] = "MARKER_DIST_UNIT";
            context["metadata"] = (objectMetadata ? objectMetadata["MARKER_DIST_UNIT"] : null);
            state['MARKER_DIST_UNIT'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        MARKER_END: function(val, state) {
            context["field"] = "MARKER_END";
            context["metadata"] = (objectMetadata ? objectMetadata["MARKER_END"] : null);
            state['MARKER_END'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        MARKER_START: function(val, state) {
            context["field"] = "MARKER_START";
            context["metadata"] = (objectMetadata ? objectMetadata["MARKER_START"] : null);
            state['MARKER_START'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        MASTER_WRRNTY_NO: function(val, state) {
            context["field"] = "MASTER_WRRNTY_NO";
            context["metadata"] = (objectMetadata ? objectMetadata["MASTER_WRRNTY_NO"] : null);
            state['MASTER_WRRNTY_NO'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        MATERIAL: function(val, state) {
            context["field"] = "MATERIAL";
            context["metadata"] = (objectMetadata ? objectMetadata["MATERIAL"] : null);
            state['MATERIAL'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        MATERIAL_EXT: function(val, state) {
            context["field"] = "MATERIAL_EXT";
            context["metadata"] = (objectMetadata ? objectMetadata["MATERIAL_EXT"] : null);
            state['MATERIAL_EXT'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        MATERIAL_GUID: function(val, state) {
            context["field"] = "MATERIAL_GUID";
            context["metadata"] = (objectMetadata ? objectMetadata["MATERIAL_GUID"] : null);
            state['MATERIAL_GUID'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        MATERIAL_VERSION: function(val, state) {
            context["field"] = "MATERIAL_VERSION";
            context["metadata"] = (objectMetadata ? objectMetadata["MATERIAL_VERSION"] : null);
            state['MATERIAL_VERSION'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        MNTCALL_NO: function(val, state) {
            context["field"] = "MNTCALL_NO";
            context["metadata"] = (objectMetadata ? objectMetadata["MNTCALL_NO"] : null);
            state['MNTCALL_NO'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        MNTPLAN: function(val, state) {
            context["field"] = "MNTPLAN";
            context["metadata"] = (objectMetadata ? objectMetadata["MNTPLAN"] : null);
            state['MNTPLAN'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        NOTF_REP_PER_NAM: function(val, state) {
            context["field"] = "NOTF_REP_PER_NAM";
            context["metadata"] = (objectMetadata ? objectMetadata["NOTF_REP_PER_NAM"] : null);
            state['NOTF_REP_PER_NAM'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        NOTIFTMEZ: function(val, state) {
            context["field"] = "NOTIFTMEZ";
            context["metadata"] = (objectMetadata ? objectMetadata["NOTIFTMEZ"] : null);
            state['NOTIFTMEZ'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        NOTIF_DATE: function(val, state) {
            context["field"] = "NOTIF_DATE";
            context["metadata"] = (objectMetadata ? objectMetadata["NOTIF_DATE"] : null);
            state['NOTIF_DATE'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        NOTIF_DATE_TIME: function(val, state) {
            context["field"] = "NOTIF_DATE_TIME";
            context["metadata"] = (objectMetadata ? objectMetadata["NOTIF_DATE_TIME"] : null);
            state['NOTIF_DATE_TIME'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        NOTIF_NUM: function(val, state) {
            context["field"] = "NOTIF_NUM";
            context["metadata"] = (objectMetadata ? objectMetadata["NOTIF_NUM"] : null);
            state['NOTIF_NUM'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        NOTIF_TIME: function(val, state) {
            context["field"] = "NOTIF_TIME";
            context["metadata"] = (objectMetadata ? objectMetadata["NOTIF_TIME"] : null);
            state['NOTIF_TIME'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        NOTIF_TYPE: function(val, state) {
            context["field"] = "NOTIF_TYPE";
            context["metadata"] = (objectMetadata ? objectMetadata["NOTIF_TYPE"] : null);
            state['NOTIF_TYPE'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        OBJECT_NO: function(val, state) {
            context["field"] = "OBJECT_NO";
            context["metadata"] = (objectMetadata ? objectMetadata["OBJECT_NO"] : null);
            state['OBJECT_NO'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        OFFSET1_TYPE: function(val, state) {
            context["field"] = "OFFSET1_TYPE";
            context["metadata"] = (objectMetadata ? objectMetadata["OFFSET1_TYPE"] : null);
            state['OFFSET1_TYPE'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        OFFSET1_UNIT: function(val, state) {
            context["field"] = "OFFSET1_UNIT";
            context["metadata"] = (objectMetadata ? objectMetadata["OFFSET1_UNIT"] : null);
            state['OFFSET1_UNIT'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        OFFSET1_VALUE: function(val, state) {
            context["field"] = "OFFSET1_VALUE";
            context["metadata"] = (objectMetadata ? objectMetadata["OFFSET1_VALUE"] : null);
            state['OFFSET1_VALUE'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        OFFSET2_TYPE: function(val, state) {
            context["field"] = "OFFSET2_TYPE";
            context["metadata"] = (objectMetadata ? objectMetadata["OFFSET2_TYPE"] : null);
            state['OFFSET2_TYPE'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        OFFSET2_UNIT: function(val, state) {
            context["field"] = "OFFSET2_UNIT";
            context["metadata"] = (objectMetadata ? objectMetadata["OFFSET2_UNIT"] : null);
            state['OFFSET2_UNIT'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        OFFSET2_VALUE: function(val, state) {
            context["field"] = "OFFSET2_VALUE";
            context["metadata"] = (objectMetadata ? objectMetadata["OFFSET2_VALUE"] : null);
            state['OFFSET2_VALUE'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        OPMODE: function(val, state) {
            context["field"] = "OPMODE";
            context["metadata"] = (objectMetadata ? objectMetadata["OPMODE"] : null);
            state['OPMODE'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ORDER_NUM: function(val, state) {
            context["field"] = "ORDER_NUM";
            context["metadata"] = (objectMetadata ? objectMetadata["ORDER_NUM"] : null);
            state['ORDER_NUM'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ORDER_TEXT: function(val, state) {
            context["field"] = "ORDER_TEXT";
            context["metadata"] = (objectMetadata ? objectMetadata["ORDER_TEXT"] : null);
            state['ORDER_TEXT'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ORDER_TYPE: function(val, state) {
            context["field"] = "ORDER_TYPE";
            context["metadata"] = (objectMetadata ? objectMetadata["ORDER_TYPE"] : null);
            state['ORDER_TYPE'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        PART_OBJECT: function(val, state) {
            context["field"] = "PART_OBJECT";
            context["metadata"] = (objectMetadata ? objectMetadata["PART_OBJECT"] : null);
            state['PART_OBJECT'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        PLANGROUP: function(val, state) {
            context["field"] = "PLANGROUP";
            context["metadata"] = (objectMetadata ? objectMetadata["PLANGROUP"] : null);
            state['PLANGROUP'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        PLANPLANT: function(val, state) {
            context["field"] = "PLANPLANT";
            context["metadata"] = (objectMetadata ? objectMetadata["PLANPLANT"] : null);
            state['PLANPLANT'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        PLSECTN: function(val, state) {
            context["field"] = "PLSECTN";
            context["metadata"] = (objectMetadata ? objectMetadata["PLSECTN"] : null);
            state['PLSECTN'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        PM_WKCTR: function(val, state) {
            context["field"] = "PM_WKCTR";
            context["metadata"] = (objectMetadata ? objectMetadata["PM_WKCTR"] : null);
            state['PM_WKCTR'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        PP_WKCTR: function(val, state) {
            context["field"] = "PP_WKCTR";
            context["metadata"] = (objectMetadata ? objectMetadata["PP_WKCTR"] : null);
            state['PP_WKCTR'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        PRILANG: function(val, state) {
            context["field"] = "PRILANG";
            context["metadata"] = (objectMetadata ? objectMetadata["PRILANG"] : null);
            state['PRILANG'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        PRIORITY: function(val, state) {
            context["field"] = "PRIORITY";
            context["metadata"] = (objectMetadata ? objectMetadata["PRIORITY"] : null);
            state['PRIORITY'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        PRIORITY_TYPE: function(val, state) {
            context["field"] = "PRIORITY_TYPE";
            context["metadata"] = (objectMetadata ? objectMetadata["PRIORITY_TYPE"] : null);
            state['PRIORITY_TYPE'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        PROBLEM: function(val, state) {
            context["field"] = "PROBLEM";
            context["metadata"] = (objectMetadata ? objectMetadata["PROBLEM"] : null);
            state['PROBLEM'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        PROBLEM_TEXT: function(val, state) {
            context["field"] = "PROBLEM_TEXT";
            context["metadata"] = (objectMetadata ? objectMetadata["PROBLEM_TEXT"] : null);
            state['PROBLEM_TEXT'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        PURCH_DATE: function(val, state) {
            context["field"] = "PURCH_DATE";
            context["metadata"] = (objectMetadata ? objectMetadata["PURCH_DATE"] : null);
            state['PURCH_DATE'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        PURCH_NO_C: function(val, state) {
            context["field"] = "PURCH_NO_C";
            context["metadata"] = (objectMetadata ? objectMetadata["PURCH_NO_C"] : null);
            state['PURCH_NO_C'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        REFDATE: function(val, state) {
            context["field"] = "REFDATE";
            context["metadata"] = (objectMetadata ? objectMetadata["REFDATE"] : null);
            state['REFDATE'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        REFTIME: function(val, state) {
            context["field"] = "REFTIME";
            context["metadata"] = (objectMetadata ? objectMetadata["REFTIME"] : null);
            state['REFTIME'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        REF_DATE_TIME: function(val, state) {
            context["field"] = "REF_DATE_TIME";
            context["metadata"] = (objectMetadata ? objectMetadata["REF_DATE_TIME"] : null);
            state['REF_DATE_TIME'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        REJECTED: function(val, state) {
            context["field"] = "REJECTED";
            context["metadata"] = (objectMetadata ? objectMetadata["REJECTED"] : null);
            state['REJECTED'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        SALES_GRP: function(val, state) {
            context["field"] = "SALES_GRP";
            context["metadata"] = (objectMetadata ? objectMetadata["SALES_GRP"] : null);
            state['SALES_GRP'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        SALES_OFFICE: function(val, state) {
            context["field"] = "SALES_OFFICE";
            context["metadata"] = (objectMetadata ? objectMetadata["SALES_OFFICE"] : null);
            state['SALES_OFFICE'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        SALES_ORD: function(val, state) {
            context["field"] = "SALES_ORD";
            context["metadata"] = (objectMetadata ? objectMetadata["SALES_ORD"] : null);
            state['SALES_ORD'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        SALES_ORG: function(val, state) {
            context["field"] = "SALES_ORG";
            context["metadata"] = (objectMetadata ? objectMetadata["SALES_ORG"] : null);
            state['SALES_ORG'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        SALES_ORG_LOC: function(val, state) {
            context["field"] = "SALES_ORG_LOC";
            context["metadata"] = (objectMetadata ? objectMetadata["SALES_ORG_LOC"] : null);
            state['SALES_ORG_LOC'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        SCENARIO: function(val, state) {
            context["field"] = "SCENARIO";
            context["metadata"] = (objectMetadata ? objectMetadata["SCENARIO"] : null);
            state['SCENARIO'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        SERIALNO: function(val, state) {
            context["field"] = "SERIALNO";
            context["metadata"] = (objectMetadata ? objectMetadata["SERIALNO"] : null);
            state['SERIALNO'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        SERVER_GROUP: function(val, state) {
            context["field"] = "SERVER_GROUP";
            context["metadata"] = (objectMetadata ? objectMetadata["SERVER_GROUP"] : null);
            state['SERVER_GROUP'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        SERVER_ID: function(val, state) {
            context["field"] = "SERVER_ID";
            context["metadata"] = (objectMetadata ? objectMetadata["SERVER_ID"] : null);
            state['SERVER_ID'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        SHORT_TEXT: function(val, state) {
            context["field"] = "SHORT_TEXT";
            context["metadata"] = (objectMetadata ? objectMetadata["SHORT_TEXT"] : null);
            state['SHORT_TEXT'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        SORTFIELD: function(val, state) {
            context["field"] = "SORTFIELD";
            context["metadata"] = (objectMetadata ? objectMetadata["SORTFIELD"] : null);
            state['SORTFIELD'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        START_POINT: function(val, state) {
            context["field"] = "START_POINT";
            context["metadata"] = (objectMetadata ? objectMetadata["START_POINT"] : null);
            state['START_POINT'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        STAT_PROF: function(val, state) {
            context["field"] = "STAT_PROF";
            context["metadata"] = (objectMetadata ? objectMetadata["STAT_PROF"] : null);
            state['STAT_PROF'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        STDGORD: function(val, state) {
            context["field"] = "STDGORD";
            context["metadata"] = (objectMetadata ? objectMetadata["STDGORD"] : null);
            state['STDGORD'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        STLMTORDER: function(val, state) {
            context["field"] = "STLMTORDER";
            context["metadata"] = (objectMetadata ? objectMetadata["STLMTORDER"] : null);
            state['STLMTORDER'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        STRMLFNDATE: function(val, state) {
            context["field"] = "STRMLFNDATE";
            context["metadata"] = (objectMetadata ? objectMetadata["STRMLFNDATE"] : null);
            state['STRMLFNDATE'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        STRMLFNTIME: function(val, state) {
            context["field"] = "STRMLFNTIME";
            context["metadata"] = (objectMetadata ? objectMetadata["STRMLFNTIME"] : null);
            state['STRMLFNTIME'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        STRML_DATE_TIME: function(val, state) {
            context["field"] = "STRML_DATE_TIME";
            context["metadata"] = (objectMetadata ? objectMetadata["STRML_DATE_TIME"] : null);
            state['STRML_DATE_TIME'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        SUB_NUMBER: function(val, state) {
            context["field"] = "SUB_NUMBER";
            context["metadata"] = (objectMetadata ? objectMetadata["SUB_NUMBER"] : null);
            state['SUB_NUMBER'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        SYS_STATUS: function(val, state) {
            context["field"] = "SYS_STATUS";
            context["metadata"] = (objectMetadata ? objectMetadata["SYS_STATUS"] : null);
            state['SYS_STATUS'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        TECH_OBJ_DESC: function(val, state) {
            context["field"] = "TECH_OBJ_DESC";
            context["metadata"] = (objectMetadata ? objectMetadata["TECH_OBJ_DESC"] : null);
            state['TECH_OBJ_DESC'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        TEXT_LENGTH: function(val, state) {
            context["field"] = "TEXT_LENGTH";
            context["metadata"] = (objectMetadata ? objectMetadata["TEXT_LENGTH"] : null);
            state['TEXT_LENGTH'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        TIMESTAMP: function(val, state) {
            context["field"] = "TIMESTAMP";
            context["metadata"] = (objectMetadata ? objectMetadata["TIMESTAMP"] : null);
            state['TIMESTAMP'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        TIME_ZONE: function(val, state) {
            context["field"] = "TIME_ZONE";
            context["metadata"] = (objectMetadata ? objectMetadata["TIME_ZONE"] : null);
            state['TIME_ZONE'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        UNIT: function(val, state) {
            context["field"] = "UNIT";
            context["metadata"] = (objectMetadata ? objectMetadata["UNIT"] : null);
            state['UNIT'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        USERID: function(val, state) {
            context["field"] = "USERID";
            context["metadata"] = (objectMetadata ? objectMetadata["USERID"] : null);
            state['USERID'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        USERSTATUS_TXT: function(val, state) {
            context["field"] = "USERSTATUS_TXT";
            context["metadata"] = (objectMetadata ? objectMetadata["USERSTATUS_TXT"] : null);
            state['USERSTATUS_TXT'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        USER_ST: function(val, state) {
            context["field"] = "USER_ST";
            context["metadata"] = (objectMetadata ? objectMetadata["USER_ST"] : null);
            state['USER_ST'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        USER_STATUS: function(val, state) {
            context["field"] = "USER_STATUS";
            context["metadata"] = (objectMetadata ? objectMetadata["USER_STATUS"] : null);
            state['USER_STATUS'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        WBS_ELEMENT: function(val, state) {
            context["field"] = "WBS_ELEMENT";
            context["metadata"] = (objectMetadata ? objectMetadata["WBS_ELEMENT"] : null);
            state['WBS_ELEMENT'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        WC_SHORT_DESC: function(val, state) {
            context["field"] = "WC_SHORT_DESC";
            context["metadata"] = (objectMetadata ? objectMetadata["WC_SHORT_DESC"] : null);
            state['WC_SHORT_DESC'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        WORK_CENTER: function(val, state) {
            context["field"] = "WORK_CENTER";
            context["metadata"] = (objectMetadata ? objectMetadata["WORK_CENTER"] : null);
            state['WORK_CENTER'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        WRRNTY_END_DT: function(val, state) {
            context["field"] = "WRRNTY_END_DT";
            context["metadata"] = (objectMetadata ? objectMetadata["WRRNTY_END_DT"] : null);
            state['WRRNTY_END_DT'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        WRRNTY_START_DT: function(val, state) {
            context["field"] = "WRRNTY_START_DT";
            context["metadata"] = (objectMetadata ? objectMetadata["WRRNTY_START_DT"] : null);
            state['WRRNTY_START_DT'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function EAM_NOTIF(defaultValues) {
        var privateState = {};
        context["field"] = "ABCINDIC";
        context["metadata"] = (objectMetadata ? objectMetadata["ABCINDIC"] : null);
        privateState.ABCINDIC = defaultValues ?
            (defaultValues["ABCINDIC"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ABCINDIC"], context) :
                null) :
            null;

        context["field"] = "ACCEPTED";
        context["metadata"] = (objectMetadata ? objectMetadata["ACCEPTED"] : null);
        privateState.ACCEPTED = defaultValues ?
            (defaultValues["ACCEPTED"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ACCEPTED"], context) :
                null) :
            null;

        context["field"] = "ADDR_NO_LOC";
        context["metadata"] = (objectMetadata ? objectMetadata["ADDR_NO_LOC"] : null);
        privateState.ADDR_NO_LOC = defaultValues ?
            (defaultValues["ADDR_NO_LOC"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ADDR_NO_LOC"], context) :
                null) :
            null;

        context["field"] = "ADDR_NUMBER";
        context["metadata"] = (objectMetadata ? objectMetadata["ADDR_NUMBER"] : null);
        privateState.ADDR_NUMBER = defaultValues ?
            (defaultValues["ADDR_NUMBER"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ADDR_NUMBER"], context) :
                null) :
            null;

        context["field"] = "ASSEMBLY";
        context["metadata"] = (objectMetadata ? objectMetadata["ASSEMBLY"] : null);
        privateState.ASSEMBLY = defaultValues ?
            (defaultValues["ASSEMBLY"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ASSEMBLY"], context) :
                null) :
            null;

        context["field"] = "ASSEMBLY_EXT";
        context["metadata"] = (objectMetadata ? objectMetadata["ASSEMBLY_EXT"] : null);
        privateState.ASSEMBLY_EXT = defaultValues ?
            (defaultValues["ASSEMBLY_EXT"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ASSEMBLY_EXT"], context) :
                null) :
            null;

        context["field"] = "ASSEMBLY_GUID";
        context["metadata"] = (objectMetadata ? objectMetadata["ASSEMBLY_GUID"] : null);
        privateState.ASSEMBLY_GUID = defaultValues ?
            (defaultValues["ASSEMBLY_GUID"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ASSEMBLY_GUID"], context) :
                null) :
            null;

        context["field"] = "ASSEMBLY_VERSION";
        context["metadata"] = (objectMetadata ? objectMetadata["ASSEMBLY_VERSION"] : null);
        privateState.ASSEMBLY_VERSION = defaultValues ?
            (defaultValues["ASSEMBLY_VERSION"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ASSEMBLY_VERSION"], context) :
                null) :
            null;

        context["field"] = "ASSET_NO";
        context["metadata"] = (objectMetadata ? objectMetadata["ASSET_NO"] : null);
        privateState.ASSET_NO = defaultValues ?
            (defaultValues["ASSET_NO"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ASSET_NO"], context) :
                null) :
            null;

        context["field"] = "BREAKDOWN";
        context["metadata"] = (objectMetadata ? objectMetadata["BREAKDOWN"] : null);
        privateState.BREAKDOWN = defaultValues ?
            (defaultValues["BREAKDOWN"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["BREAKDOWN"], context) :
                null) :
            null;

        context["field"] = "BUS_AREA";
        context["metadata"] = (objectMetadata ? objectMetadata["BUS_AREA"] : null);
        privateState.BUS_AREA = defaultValues ?
            (defaultValues["BUS_AREA"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["BUS_AREA"], context) :
                null) :
            null;

        context["field"] = "CATALOG_PROFILE";
        context["metadata"] = (objectMetadata ? objectMetadata["CATALOG_PROFILE"] : null);
        privateState.CATALOG_PROFILE = defaultValues ?
            (defaultValues["CATALOG_PROFILE"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CATALOG_PROFILE"], context) :
                null) :
            null;

        context["field"] = "CAT_TYPE";
        context["metadata"] = (objectMetadata ? objectMetadata["CAT_TYPE"] : null);
        privateState.CAT_TYPE = defaultValues ?
            (defaultValues["CAT_TYPE"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CAT_TYPE"], context) :
                null) :
            null;

        context["field"] = "CAUSE_CODE";
        context["metadata"] = (objectMetadata ? objectMetadata["CAUSE_CODE"] : null);
        privateState.CAUSE_CODE = defaultValues ?
            (defaultValues["CAUSE_CODE"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CAUSE_CODE"], context) :
                null) :
            null;

        context["field"] = "CHANGED_AT";
        context["metadata"] = (objectMetadata ? objectMetadata["CHANGED_AT"] : null);
        privateState.CHANGED_AT = defaultValues ?
            (defaultValues["CHANGED_AT"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CHANGED_AT"], context) :
                null) :
            null;

        context["field"] = "CHANGED_BY";
        context["metadata"] = (objectMetadata ? objectMetadata["CHANGED_BY"] : null);
        privateState.CHANGED_BY = defaultValues ?
            (defaultValues["CHANGED_BY"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CHANGED_BY"], context) :
                null) :
            null;

        context["field"] = "CHANGED_ON";
        context["metadata"] = (objectMetadata ? objectMetadata["CHANGED_ON"] : null);
        privateState.CHANGED_ON = defaultValues ?
            (defaultValues["CHANGED_ON"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CHANGED_ON"], context) :
                null) :
            null;

        context["field"] = "CODE_GRP_CAUSE";
        context["metadata"] = (objectMetadata ? objectMetadata["CODE_GRP_CAUSE"] : null);
        privateState.CODE_GRP_CAUSE = defaultValues ?
            (defaultValues["CODE_GRP_CAUSE"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CODE_GRP_CAUSE"], context) :
                null) :
            null;

        context["field"] = "CODE_GRP_CODING";
        context["metadata"] = (objectMetadata ? objectMetadata["CODE_GRP_CODING"] : null);
        privateState.CODE_GRP_CODING = defaultValues ?
            (defaultValues["CODE_GRP_CODING"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CODE_GRP_CODING"], context) :
                null) :
            null;

        context["field"] = "CODE_GRP_PART";
        context["metadata"] = (objectMetadata ? objectMetadata["CODE_GRP_PART"] : null);
        privateState.CODE_GRP_PART = defaultValues ?
            (defaultValues["CODE_GRP_PART"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CODE_GRP_PART"], context) :
                null) :
            null;

        context["field"] = "CODE_GRP_PROBLEM";
        context["metadata"] = (objectMetadata ? objectMetadata["CODE_GRP_PROBLEM"] : null);
        privateState.CODE_GRP_PROBLEM = defaultValues ?
            (defaultValues["CODE_GRP_PROBLEM"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CODE_GRP_PROBLEM"], context) :
                null) :
            null;

        context["field"] = "CODING_CODE";
        context["metadata"] = (objectMetadata ? objectMetadata["CODING_CODE"] : null);
        privateState.CODING_CODE = defaultValues ?
            (defaultValues["CODING_CODE"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CODING_CODE"], context) :
                null) :
            null;

        context["field"] = "COMPTIME";
        context["metadata"] = (objectMetadata ? objectMetadata["COMPTIME"] : null);
        privateState.COMPTIME = defaultValues ?
            (defaultValues["COMPTIME"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["COMPTIME"], context) :
                null) :
            null;

        context["field"] = "COMP_CODE";
        context["metadata"] = (objectMetadata ? objectMetadata["COMP_CODE"] : null);
        privateState.COMP_CODE = defaultValues ?
            (defaultValues["COMP_CODE"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["COMP_CODE"], context) :
                null) :
            null;

        context["field"] = "CONVERT_TO_WO";
        context["metadata"] = (objectMetadata ? objectMetadata["CONVERT_TO_WO"] : null);
        privateState.CONVERT_TO_WO = defaultValues ?
            (defaultValues["CONVERT_TO_WO"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CONVERT_TO_WO"], context) :
                null) :
            null;

        context["field"] = "COSTCENTER";
        context["metadata"] = (objectMetadata ? objectMetadata["COSTCENTER"] : null);
        privateState.COSTCENTER = defaultValues ?
            (defaultValues["COSTCENTER"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["COSTCENTER"], context) :
                null) :
            null;

        context["field"] = "CO_AREA";
        context["metadata"] = (objectMetadata ? objectMetadata["CO_AREA"] : null);
        privateState.CO_AREA = defaultValues ?
            (defaultValues["CO_AREA"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CO_AREA"], context) :
                null) :
            null;

        context["field"] = "CREATED_AT";
        context["metadata"] = (objectMetadata ? objectMetadata["CREATED_AT"] : null);
        privateState.CREATED_AT = defaultValues ?
            (defaultValues["CREATED_AT"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CREATED_AT"], context) :
                null) :
            null;

        context["field"] = "CREATED_BY";
        context["metadata"] = (objectMetadata ? objectMetadata["CREATED_BY"] : null);
        privateState.CREATED_BY = defaultValues ?
            (defaultValues["CREATED_BY"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CREATED_BY"], context) :
                null) :
            null;

        context["field"] = "CREATED_ON";
        context["metadata"] = (objectMetadata ? objectMetadata["CREATED_ON"] : null);
        privateState.CREATED_ON = defaultValues ?
            (defaultValues["CREATED_ON"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CREATED_ON"], context) :
                null) :
            null;

        context["field"] = "CUST_NO";
        context["metadata"] = (objectMetadata ? objectMetadata["CUST_NO"] : null);
        privateState.CUST_NO = defaultValues ?
            (defaultValues["CUST_NO"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CUST_NO"], context) :
                null) :
            null;

        context["field"] = "DELETE_FLAG";
        context["metadata"] = (objectMetadata ? objectMetadata["DELETE_FLAG"] : null);
        privateState.DELETE_FLAG = defaultValues ?
            (defaultValues["DELETE_FLAG"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DELETE_FLAG"], context) :
                null) :
            null;

        context["field"] = "DELETE_IND";
        context["metadata"] = (objectMetadata ? objectMetadata["DELETE_IND"] : null);
        privateState.DELETE_IND = defaultValues ?
            (defaultValues["DELETE_IND"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DELETE_IND"], context) :
                null) :
            null;

        context["field"] = "DESENDDATE";
        context["metadata"] = (objectMetadata ? objectMetadata["DESENDDATE"] : null);
        privateState.DESENDDATE = defaultValues ?
            (defaultValues["DESENDDATE"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DESENDDATE"], context) :
                null) :
            null;

        context["field"] = "DESENDTM";
        context["metadata"] = (objectMetadata ? objectMetadata["DESENDTM"] : null);
        privateState.DESENDTM = defaultValues ?
            (defaultValues["DESENDTM"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DESENDTM"], context) :
                null) :
            null;

        context["field"] = "DESEN_DATE_TIME";
        context["metadata"] = (objectMetadata ? objectMetadata["DESEN_DATE_TIME"] : null);
        privateState.DESEN_DATE_TIME = defaultValues ?
            (defaultValues["DESEN_DATE_TIME"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DESEN_DATE_TIME"], context) :
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

        context["field"] = "DESST_DATE_TIME";
        context["metadata"] = (objectMetadata ? objectMetadata["DESST_DATE_TIME"] : null);
        privateState.DESST_DATE_TIME = defaultValues ?
            (defaultValues["DESST_DATE_TIME"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DESST_DATE_TIME"], context) :
                null) :
            null;

        context["field"] = "DEVICEDATA";
        context["metadata"] = (objectMetadata ? objectMetadata["DEVICEDATA"] : null);
        privateState.DEVICEDATA = defaultValues ?
            (defaultValues["DEVICEDATA"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DEVICEDATA"], context) :
                null) :
            null;

        context["field"] = "DISTR_CHAN";
        context["metadata"] = (objectMetadata ? objectMetadata["DISTR_CHAN"] : null);
        privateState.DISTR_CHAN = defaultValues ?
            (defaultValues["DISTR_CHAN"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DISTR_CHAN"], context) :
                null) :
            null;

        context["field"] = "DIST_CHAN_LOC";
        context["metadata"] = (objectMetadata ? objectMetadata["DIST_CHAN_LOC"] : null);
        privateState.DIST_CHAN_LOC = defaultValues ?
            (defaultValues["DIST_CHAN_LOC"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DIST_CHAN_LOC"], context) :
                null) :
            null;

        context["field"] = "DIVISION";
        context["metadata"] = (objectMetadata ? objectMetadata["DIVISION"] : null);
        privateState.DIVISION = defaultValues ?
            (defaultValues["DIVISION"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DIVISION"], context) :
                null) :
            null;

        context["field"] = "DIVISION_LOC";
        context["metadata"] = (objectMetadata ? objectMetadata["DIVISION_LOC"] : null);
        privateState.DIVISION_LOC = defaultValues ?
            (defaultValues["DIVISION_LOC"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DIVISION_LOC"], context) :
                null) :
            null;

        context["field"] = "DOC_NUMBER";
        context["metadata"] = (objectMetadata ? objectMetadata["DOC_NUMBER"] : null);
        privateState.DOC_NUMBER = defaultValues ?
            (defaultValues["DOC_NUMBER"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DOC_NUMBER"], context) :
                null) :
            null;

        context["field"] = "DOWNTIME";
        context["metadata"] = (objectMetadata ? objectMetadata["DOWNTIME"] : null);
        privateState.DOWNTIME = defaultValues ?
            (defaultValues["DOWNTIME"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DOWNTIME"], context) :
                null) :
            null;

        context["field"] = "ENDMLFNDATE";
        context["metadata"] = (objectMetadata ? objectMetadata["ENDMLFNDATE"] : null);
        privateState.ENDMLFNDATE = defaultValues ?
            (defaultValues["ENDMLFNDATE"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ENDMLFNDATE"], context) :
                null) :
            null;

        context["field"] = "ENDMLFNTIME";
        context["metadata"] = (objectMetadata ? objectMetadata["ENDMLFNTIME"] : null);
        privateState.ENDMLFNTIME = defaultValues ?
            (defaultValues["ENDMLFNTIME"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ENDMLFNTIME"], context) :
                null) :
            null;

        context["field"] = "ENDML_DATE_TIME";
        context["metadata"] = (objectMetadata ? objectMetadata["ENDML_DATE_TIME"] : null);
        privateState.ENDML_DATE_TIME = defaultValues ?
            (defaultValues["ENDML_DATE_TIME"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ENDML_DATE_TIME"], context) :
                null) :
            null;

        context["field"] = "END_POINT";
        context["metadata"] = (objectMetadata ? objectMetadata["END_POINT"] : null);
        privateState.END_POINT = defaultValues ?
            (defaultValues["END_POINT"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["END_POINT"], context) :
                null) :
            null;

        context["field"] = "EQUIP_NUM";
        context["metadata"] = (objectMetadata ? objectMetadata["EQUIP_NUM"] : null);
        privateState.EQUIP_NUM = defaultValues ?
            (defaultValues["EQUIP_NUM"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["EQUIP_NUM"], context) :
                null) :
            null;

        context["field"] = "FLOCN_DESC";
        context["metadata"] = (objectMetadata ? objectMetadata["FLOCN_DESC"] : null);
        privateState.FLOCN_DESC = defaultValues ?
            (defaultValues["FLOCN_DESC"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["FLOCN_DESC"], context) :
                null) :
            null;

        context["field"] = "FUNC_LOCATION";
        context["metadata"] = (objectMetadata ? objectMetadata["FUNC_LOCATION"] : null);
        privateState.FUNC_LOCATION = defaultValues ?
            (defaultValues["FUNC_LOCATION"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["FUNC_LOCATION"], context) :
                null) :
            null;

        context["field"] = "INTERNAL_NUMBER";
        context["metadata"] = (objectMetadata ? objectMetadata["INTERNAL_NUMBER"] : null);
        privateState.INTERNAL_NUMBER = defaultValues ?
            (defaultValues["INTERNAL_NUMBER"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["INTERNAL_NUMBER"], context) :
                null) :
            null;

        context["field"] = "ISOCODE_UNIT";
        context["metadata"] = (objectMetadata ? objectMetadata["ISOCODE_UNIT"] : null);
        privateState.ISOCODE_UNIT = defaultValues ?
            (defaultValues["ISOCODE_UNIT"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ISOCODE_UNIT"], context) :
                null) :
            null;

        context["field"] = "ITM_NUMBER";
        context["metadata"] = (objectMetadata ? objectMetadata["ITM_NUMBER"] : null);
        privateState.ITM_NUMBER = defaultValues ?
            (defaultValues["ITM_NUMBER"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ITM_NUMBER"], context) :
                null) :
            null;

        context["field"] = "LINEAR_LENGTH";
        context["metadata"] = (objectMetadata ? objectMetadata["LINEAR_LENGTH"] : null);
        privateState.LINEAR_LENGTH = defaultValues ?
            (defaultValues["LINEAR_LENGTH"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["LINEAR_LENGTH"], context) :
                null) :
            null;

        context["field"] = "LINEAR_UNIT";
        context["metadata"] = (objectMetadata ? objectMetadata["LINEAR_UNIT"] : null);
        privateState.LINEAR_UNIT = defaultValues ?
            (defaultValues["LINEAR_UNIT"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["LINEAR_UNIT"], context) :
                null) :
            null;

        context["field"] = "LOC_ACC";
        context["metadata"] = (objectMetadata ? objectMetadata["LOC_ACC"] : null);
        privateState.LOC_ACC = defaultValues ?
            (defaultValues["LOC_ACC"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["LOC_ACC"], context) :
                null) :
            null;

        context["field"] = "LONG_TEXT";
        context["metadata"] = (objectMetadata ? objectMetadata["LONG_TEXT"] : null);
        privateState.LONG_TEXT = defaultValues ?
            (defaultValues["LONG_TEXT"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["LONG_TEXT"], context) :
                null) :
            null;

        context["field"] = "LRPID";
        context["metadata"] = (objectMetadata ? objectMetadata["LRPID"] : null);
        privateState.LRPID = defaultValues ?
            (defaultValues["LRPID"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["LRPID"], context) :
                null) :
            null;

        context["field"] = "LTEXT";
        context["metadata"] = (objectMetadata ? objectMetadata["LTEXT"] : null);
        privateState.LTEXT = defaultValues ?
            (defaultValues["LTEXT"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["LTEXT"], context) :
                null) :
            null;

        context["field"] = "MAINTITEM";
        context["metadata"] = (objectMetadata ? objectMetadata["MAINTITEM"] : null);
        privateState.MAINTITEM = defaultValues ?
            (defaultValues["MAINTITEM"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["MAINTITEM"], context) :
                null) :
            null;

        context["field"] = "MAINTLOC";
        context["metadata"] = (objectMetadata ? objectMetadata["MAINTLOC"] : null);
        privateState.MAINTLOC = defaultValues ?
            (defaultValues["MAINTLOC"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["MAINTLOC"], context) :
                null) :
            null;

        context["field"] = "MAINTPLANT";
        context["metadata"] = (objectMetadata ? objectMetadata["MAINTPLANT"] : null);
        privateState.MAINTPLANT = defaultValues ?
            (defaultValues["MAINTPLANT"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["MAINTPLANT"], context) :
                null) :
            null;

        context["field"] = "MAINTROOM";
        context["metadata"] = (objectMetadata ? objectMetadata["MAINTROOM"] : null);
        privateState.MAINTROOM = defaultValues ?
            (defaultValues["MAINTROOM"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["MAINTROOM"], context) :
                null) :
            null;

        context["field"] = "MANU_WRRNTY_ENDT";
        context["metadata"] = (objectMetadata ? objectMetadata["MANU_WRRNTY_ENDT"] : null);
        privateState.MANU_WRRNTY_ENDT = defaultValues ?
            (defaultValues["MANU_WRRNTY_ENDT"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["MANU_WRRNTY_ENDT"], context) :
                null) :
            null;

        context["field"] = "MANU_WRRNTY_STDT";
        context["metadata"] = (objectMetadata ? objectMetadata["MANU_WRRNTY_STDT"] : null);
        privateState.MANU_WRRNTY_STDT = defaultValues ?
            (defaultValues["MANU_WRRNTY_STDT"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["MANU_WRRNTY_STDT"], context) :
                null) :
            null;

        context["field"] = "MARKER_DIST_END";
        context["metadata"] = (objectMetadata ? objectMetadata["MARKER_DIST_END"] : null);
        privateState.MARKER_DIST_END = defaultValues ?
            (defaultValues["MARKER_DIST_END"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["MARKER_DIST_END"], context) :
                null) :
            null;

        context["field"] = "MARKER_DIST_STA";
        context["metadata"] = (objectMetadata ? objectMetadata["MARKER_DIST_STA"] : null);
        privateState.MARKER_DIST_STA = defaultValues ?
            (defaultValues["MARKER_DIST_STA"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["MARKER_DIST_STA"], context) :
                null) :
            null;

        context["field"] = "MARKER_DIST_UNIT";
        context["metadata"] = (objectMetadata ? objectMetadata["MARKER_DIST_UNIT"] : null);
        privateState.MARKER_DIST_UNIT = defaultValues ?
            (defaultValues["MARKER_DIST_UNIT"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["MARKER_DIST_UNIT"], context) :
                null) :
            null;

        context["field"] = "MARKER_END";
        context["metadata"] = (objectMetadata ? objectMetadata["MARKER_END"] : null);
        privateState.MARKER_END = defaultValues ?
            (defaultValues["MARKER_END"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["MARKER_END"], context) :
                null) :
            null;

        context["field"] = "MARKER_START";
        context["metadata"] = (objectMetadata ? objectMetadata["MARKER_START"] : null);
        privateState.MARKER_START = defaultValues ?
            (defaultValues["MARKER_START"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["MARKER_START"], context) :
                null) :
            null;

        context["field"] = "MASTER_WRRNTY_NO";
        context["metadata"] = (objectMetadata ? objectMetadata["MASTER_WRRNTY_NO"] : null);
        privateState.MASTER_WRRNTY_NO = defaultValues ?
            (defaultValues["MASTER_WRRNTY_NO"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["MASTER_WRRNTY_NO"], context) :
                null) :
            null;

        context["field"] = "MATERIAL";
        context["metadata"] = (objectMetadata ? objectMetadata["MATERIAL"] : null);
        privateState.MATERIAL = defaultValues ?
            (defaultValues["MATERIAL"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["MATERIAL"], context) :
                null) :
            null;

        context["field"] = "MATERIAL_EXT";
        context["metadata"] = (objectMetadata ? objectMetadata["MATERIAL_EXT"] : null);
        privateState.MATERIAL_EXT = defaultValues ?
            (defaultValues["MATERIAL_EXT"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["MATERIAL_EXT"], context) :
                null) :
            null;

        context["field"] = "MATERIAL_GUID";
        context["metadata"] = (objectMetadata ? objectMetadata["MATERIAL_GUID"] : null);
        privateState.MATERIAL_GUID = defaultValues ?
            (defaultValues["MATERIAL_GUID"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["MATERIAL_GUID"], context) :
                null) :
            null;

        context["field"] = "MATERIAL_VERSION";
        context["metadata"] = (objectMetadata ? objectMetadata["MATERIAL_VERSION"] : null);
        privateState.MATERIAL_VERSION = defaultValues ?
            (defaultValues["MATERIAL_VERSION"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["MATERIAL_VERSION"], context) :
                null) :
            null;

        context["field"] = "MNTCALL_NO";
        context["metadata"] = (objectMetadata ? objectMetadata["MNTCALL_NO"] : null);
        privateState.MNTCALL_NO = defaultValues ?
            (defaultValues["MNTCALL_NO"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["MNTCALL_NO"], context) :
                null) :
            null;

        context["field"] = "MNTPLAN";
        context["metadata"] = (objectMetadata ? objectMetadata["MNTPLAN"] : null);
        privateState.MNTPLAN = defaultValues ?
            (defaultValues["MNTPLAN"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["MNTPLAN"], context) :
                null) :
            null;

        context["field"] = "NOTF_REP_PER_NAM";
        context["metadata"] = (objectMetadata ? objectMetadata["NOTF_REP_PER_NAM"] : null);
        privateState.NOTF_REP_PER_NAM = defaultValues ?
            (defaultValues["NOTF_REP_PER_NAM"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["NOTF_REP_PER_NAM"], context) :
                null) :
            null;

        context["field"] = "NOTIFTMEZ";
        context["metadata"] = (objectMetadata ? objectMetadata["NOTIFTMEZ"] : null);
        privateState.NOTIFTMEZ = defaultValues ?
            (defaultValues["NOTIFTMEZ"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["NOTIFTMEZ"], context) :
                null) :
            null;

        context["field"] = "NOTIF_DATE";
        context["metadata"] = (objectMetadata ? objectMetadata["NOTIF_DATE"] : null);
        privateState.NOTIF_DATE = defaultValues ?
            (defaultValues["NOTIF_DATE"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["NOTIF_DATE"], context) :
                null) :
            null;

        context["field"] = "NOTIF_DATE_TIME";
        context["metadata"] = (objectMetadata ? objectMetadata["NOTIF_DATE_TIME"] : null);
        privateState.NOTIF_DATE_TIME = defaultValues ?
            (defaultValues["NOTIF_DATE_TIME"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["NOTIF_DATE_TIME"], context) :
                null) :
            null;

        context["field"] = "NOTIF_NUM";
        context["metadata"] = (objectMetadata ? objectMetadata["NOTIF_NUM"] : null);
        privateState.NOTIF_NUM = defaultValues ?
            (defaultValues["NOTIF_NUM"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["NOTIF_NUM"], context) :
                null) :
            null;

        context["field"] = "NOTIF_TIME";
        context["metadata"] = (objectMetadata ? objectMetadata["NOTIF_TIME"] : null);
        privateState.NOTIF_TIME = defaultValues ?
            (defaultValues["NOTIF_TIME"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["NOTIF_TIME"], context) :
                null) :
            null;

        context["field"] = "NOTIF_TYPE";
        context["metadata"] = (objectMetadata ? objectMetadata["NOTIF_TYPE"] : null);
        privateState.NOTIF_TYPE = defaultValues ?
            (defaultValues["NOTIF_TYPE"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["NOTIF_TYPE"], context) :
                null) :
            null;

        context["field"] = "OBJECT_NO";
        context["metadata"] = (objectMetadata ? objectMetadata["OBJECT_NO"] : null);
        privateState.OBJECT_NO = defaultValues ?
            (defaultValues["OBJECT_NO"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["OBJECT_NO"], context) :
                null) :
            null;

        context["field"] = "OFFSET1_TYPE";
        context["metadata"] = (objectMetadata ? objectMetadata["OFFSET1_TYPE"] : null);
        privateState.OFFSET1_TYPE = defaultValues ?
            (defaultValues["OFFSET1_TYPE"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["OFFSET1_TYPE"], context) :
                null) :
            null;

        context["field"] = "OFFSET1_UNIT";
        context["metadata"] = (objectMetadata ? objectMetadata["OFFSET1_UNIT"] : null);
        privateState.OFFSET1_UNIT = defaultValues ?
            (defaultValues["OFFSET1_UNIT"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["OFFSET1_UNIT"], context) :
                null) :
            null;

        context["field"] = "OFFSET1_VALUE";
        context["metadata"] = (objectMetadata ? objectMetadata["OFFSET1_VALUE"] : null);
        privateState.OFFSET1_VALUE = defaultValues ?
            (defaultValues["OFFSET1_VALUE"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["OFFSET1_VALUE"], context) :
                null) :
            null;

        context["field"] = "OFFSET2_TYPE";
        context["metadata"] = (objectMetadata ? objectMetadata["OFFSET2_TYPE"] : null);
        privateState.OFFSET2_TYPE = defaultValues ?
            (defaultValues["OFFSET2_TYPE"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["OFFSET2_TYPE"], context) :
                null) :
            null;

        context["field"] = "OFFSET2_UNIT";
        context["metadata"] = (objectMetadata ? objectMetadata["OFFSET2_UNIT"] : null);
        privateState.OFFSET2_UNIT = defaultValues ?
            (defaultValues["OFFSET2_UNIT"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["OFFSET2_UNIT"], context) :
                null) :
            null;

        context["field"] = "OFFSET2_VALUE";
        context["metadata"] = (objectMetadata ? objectMetadata["OFFSET2_VALUE"] : null);
        privateState.OFFSET2_VALUE = defaultValues ?
            (defaultValues["OFFSET2_VALUE"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["OFFSET2_VALUE"], context) :
                null) :
            null;

        context["field"] = "OPMODE";
        context["metadata"] = (objectMetadata ? objectMetadata["OPMODE"] : null);
        privateState.OPMODE = defaultValues ?
            (defaultValues["OPMODE"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["OPMODE"], context) :
                null) :
            null;

        context["field"] = "ORDER_NUM";
        context["metadata"] = (objectMetadata ? objectMetadata["ORDER_NUM"] : null);
        privateState.ORDER_NUM = defaultValues ?
            (defaultValues["ORDER_NUM"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ORDER_NUM"], context) :
                null) :
            null;

        context["field"] = "ORDER_TEXT";
        context["metadata"] = (objectMetadata ? objectMetadata["ORDER_TEXT"] : null);
        privateState.ORDER_TEXT = defaultValues ?
            (defaultValues["ORDER_TEXT"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ORDER_TEXT"], context) :
                null) :
            null;

        context["field"] = "ORDER_TYPE";
        context["metadata"] = (objectMetadata ? objectMetadata["ORDER_TYPE"] : null);
        privateState.ORDER_TYPE = defaultValues ?
            (defaultValues["ORDER_TYPE"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ORDER_TYPE"], context) :
                null) :
            null;

        context["field"] = "PART_OBJECT";
        context["metadata"] = (objectMetadata ? objectMetadata["PART_OBJECT"] : null);
        privateState.PART_OBJECT = defaultValues ?
            (defaultValues["PART_OBJECT"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["PART_OBJECT"], context) :
                null) :
            null;

        context["field"] = "PLANGROUP";
        context["metadata"] = (objectMetadata ? objectMetadata["PLANGROUP"] : null);
        privateState.PLANGROUP = defaultValues ?
            (defaultValues["PLANGROUP"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["PLANGROUP"], context) :
                null) :
            null;

        context["field"] = "PLANPLANT";
        context["metadata"] = (objectMetadata ? objectMetadata["PLANPLANT"] : null);
        privateState.PLANPLANT = defaultValues ?
            (defaultValues["PLANPLANT"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["PLANPLANT"], context) :
                null) :
            null;

        context["field"] = "PLSECTN";
        context["metadata"] = (objectMetadata ? objectMetadata["PLSECTN"] : null);
        privateState.PLSECTN = defaultValues ?
            (defaultValues["PLSECTN"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["PLSECTN"], context) :
                null) :
            null;

        context["field"] = "PM_WKCTR";
        context["metadata"] = (objectMetadata ? objectMetadata["PM_WKCTR"] : null);
        privateState.PM_WKCTR = defaultValues ?
            (defaultValues["PM_WKCTR"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["PM_WKCTR"], context) :
                null) :
            null;

        context["field"] = "PP_WKCTR";
        context["metadata"] = (objectMetadata ? objectMetadata["PP_WKCTR"] : null);
        privateState.PP_WKCTR = defaultValues ?
            (defaultValues["PP_WKCTR"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["PP_WKCTR"], context) :
                null) :
            null;

        context["field"] = "PRILANG";
        context["metadata"] = (objectMetadata ? objectMetadata["PRILANG"] : null);
        privateState.PRILANG = defaultValues ?
            (defaultValues["PRILANG"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["PRILANG"], context) :
                null) :
            null;

        context["field"] = "PRIORITY";
        context["metadata"] = (objectMetadata ? objectMetadata["PRIORITY"] : null);
        privateState.PRIORITY = defaultValues ?
            (defaultValues["PRIORITY"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["PRIORITY"], context) :
                null) :
            null;

        context["field"] = "PRIORITY_TYPE";
        context["metadata"] = (objectMetadata ? objectMetadata["PRIORITY_TYPE"] : null);
        privateState.PRIORITY_TYPE = defaultValues ?
            (defaultValues["PRIORITY_TYPE"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["PRIORITY_TYPE"], context) :
                null) :
            null;

        context["field"] = "PROBLEM";
        context["metadata"] = (objectMetadata ? objectMetadata["PROBLEM"] : null);
        privateState.PROBLEM = defaultValues ?
            (defaultValues["PROBLEM"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["PROBLEM"], context) :
                null) :
            null;

        context["field"] = "PROBLEM_TEXT";
        context["metadata"] = (objectMetadata ? objectMetadata["PROBLEM_TEXT"] : null);
        privateState.PROBLEM_TEXT = defaultValues ?
            (defaultValues["PROBLEM_TEXT"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["PROBLEM_TEXT"], context) :
                null) :
            null;

        context["field"] = "PURCH_DATE";
        context["metadata"] = (objectMetadata ? objectMetadata["PURCH_DATE"] : null);
        privateState.PURCH_DATE = defaultValues ?
            (defaultValues["PURCH_DATE"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["PURCH_DATE"], context) :
                null) :
            null;

        context["field"] = "PURCH_NO_C";
        context["metadata"] = (objectMetadata ? objectMetadata["PURCH_NO_C"] : null);
        privateState.PURCH_NO_C = defaultValues ?
            (defaultValues["PURCH_NO_C"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["PURCH_NO_C"], context) :
                null) :
            null;

        context["field"] = "REFDATE";
        context["metadata"] = (objectMetadata ? objectMetadata["REFDATE"] : null);
        privateState.REFDATE = defaultValues ?
            (defaultValues["REFDATE"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["REFDATE"], context) :
                null) :
            null;

        context["field"] = "REFTIME";
        context["metadata"] = (objectMetadata ? objectMetadata["REFTIME"] : null);
        privateState.REFTIME = defaultValues ?
            (defaultValues["REFTIME"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["REFTIME"], context) :
                null) :
            null;

        context["field"] = "REF_DATE_TIME";
        context["metadata"] = (objectMetadata ? objectMetadata["REF_DATE_TIME"] : null);
        privateState.REF_DATE_TIME = defaultValues ?
            (defaultValues["REF_DATE_TIME"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["REF_DATE_TIME"], context) :
                null) :
            null;

        context["field"] = "REJECTED";
        context["metadata"] = (objectMetadata ? objectMetadata["REJECTED"] : null);
        privateState.REJECTED = defaultValues ?
            (defaultValues["REJECTED"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["REJECTED"], context) :
                null) :
            null;

        context["field"] = "SALES_GRP";
        context["metadata"] = (objectMetadata ? objectMetadata["SALES_GRP"] : null);
        privateState.SALES_GRP = defaultValues ?
            (defaultValues["SALES_GRP"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["SALES_GRP"], context) :
                null) :
            null;

        context["field"] = "SALES_OFFICE";
        context["metadata"] = (objectMetadata ? objectMetadata["SALES_OFFICE"] : null);
        privateState.SALES_OFFICE = defaultValues ?
            (defaultValues["SALES_OFFICE"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["SALES_OFFICE"], context) :
                null) :
            null;

        context["field"] = "SALES_ORD";
        context["metadata"] = (objectMetadata ? objectMetadata["SALES_ORD"] : null);
        privateState.SALES_ORD = defaultValues ?
            (defaultValues["SALES_ORD"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["SALES_ORD"], context) :
                null) :
            null;

        context["field"] = "SALES_ORG";
        context["metadata"] = (objectMetadata ? objectMetadata["SALES_ORG"] : null);
        privateState.SALES_ORG = defaultValues ?
            (defaultValues["SALES_ORG"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["SALES_ORG"], context) :
                null) :
            null;

        context["field"] = "SALES_ORG_LOC";
        context["metadata"] = (objectMetadata ? objectMetadata["SALES_ORG_LOC"] : null);
        privateState.SALES_ORG_LOC = defaultValues ?
            (defaultValues["SALES_ORG_LOC"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["SALES_ORG_LOC"], context) :
                null) :
            null;

        context["field"] = "SCENARIO";
        context["metadata"] = (objectMetadata ? objectMetadata["SCENARIO"] : null);
        privateState.SCENARIO = defaultValues ?
            (defaultValues["SCENARIO"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["SCENARIO"], context) :
                null) :
            null;

        context["field"] = "SERIALNO";
        context["metadata"] = (objectMetadata ? objectMetadata["SERIALNO"] : null);
        privateState.SERIALNO = defaultValues ?
            (defaultValues["SERIALNO"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["SERIALNO"], context) :
                null) :
            null;

        context["field"] = "SERVER_GROUP";
        context["metadata"] = (objectMetadata ? objectMetadata["SERVER_GROUP"] : null);
        privateState.SERVER_GROUP = defaultValues ?
            (defaultValues["SERVER_GROUP"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["SERVER_GROUP"], context) :
                null) :
            null;

        context["field"] = "SERVER_ID";
        context["metadata"] = (objectMetadata ? objectMetadata["SERVER_ID"] : null);
        privateState.SERVER_ID = defaultValues ?
            (defaultValues["SERVER_ID"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["SERVER_ID"], context) :
                null) :
            null;

        context["field"] = "SHORT_TEXT";
        context["metadata"] = (objectMetadata ? objectMetadata["SHORT_TEXT"] : null);
        privateState.SHORT_TEXT = defaultValues ?
            (defaultValues["SHORT_TEXT"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["SHORT_TEXT"], context) :
                null) :
            null;

        context["field"] = "SORTFIELD";
        context["metadata"] = (objectMetadata ? objectMetadata["SORTFIELD"] : null);
        privateState.SORTFIELD = defaultValues ?
            (defaultValues["SORTFIELD"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["SORTFIELD"], context) :
                null) :
            null;

        context["field"] = "START_POINT";
        context["metadata"] = (objectMetadata ? objectMetadata["START_POINT"] : null);
        privateState.START_POINT = defaultValues ?
            (defaultValues["START_POINT"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["START_POINT"], context) :
                null) :
            null;

        context["field"] = "STAT_PROF";
        context["metadata"] = (objectMetadata ? objectMetadata["STAT_PROF"] : null);
        privateState.STAT_PROF = defaultValues ?
            (defaultValues["STAT_PROF"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["STAT_PROF"], context) :
                null) :
            null;

        context["field"] = "STDGORD";
        context["metadata"] = (objectMetadata ? objectMetadata["STDGORD"] : null);
        privateState.STDGORD = defaultValues ?
            (defaultValues["STDGORD"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["STDGORD"], context) :
                null) :
            null;

        context["field"] = "STLMTORDER";
        context["metadata"] = (objectMetadata ? objectMetadata["STLMTORDER"] : null);
        privateState.STLMTORDER = defaultValues ?
            (defaultValues["STLMTORDER"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["STLMTORDER"], context) :
                null) :
            null;

        context["field"] = "STRMLFNDATE";
        context["metadata"] = (objectMetadata ? objectMetadata["STRMLFNDATE"] : null);
        privateState.STRMLFNDATE = defaultValues ?
            (defaultValues["STRMLFNDATE"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["STRMLFNDATE"], context) :
                null) :
            null;

        context["field"] = "STRMLFNTIME";
        context["metadata"] = (objectMetadata ? objectMetadata["STRMLFNTIME"] : null);
        privateState.STRMLFNTIME = defaultValues ?
            (defaultValues["STRMLFNTIME"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["STRMLFNTIME"], context) :
                null) :
            null;

        context["field"] = "STRML_DATE_TIME";
        context["metadata"] = (objectMetadata ? objectMetadata["STRML_DATE_TIME"] : null);
        privateState.STRML_DATE_TIME = defaultValues ?
            (defaultValues["STRML_DATE_TIME"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["STRML_DATE_TIME"], context) :
                null) :
            null;

        context["field"] = "SUB_NUMBER";
        context["metadata"] = (objectMetadata ? objectMetadata["SUB_NUMBER"] : null);
        privateState.SUB_NUMBER = defaultValues ?
            (defaultValues["SUB_NUMBER"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["SUB_NUMBER"], context) :
                null) :
            null;

        context["field"] = "SYS_STATUS";
        context["metadata"] = (objectMetadata ? objectMetadata["SYS_STATUS"] : null);
        privateState.SYS_STATUS = defaultValues ?
            (defaultValues["SYS_STATUS"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["SYS_STATUS"], context) :
                null) :
            null;

        context["field"] = "TECH_OBJ_DESC";
        context["metadata"] = (objectMetadata ? objectMetadata["TECH_OBJ_DESC"] : null);
        privateState.TECH_OBJ_DESC = defaultValues ?
            (defaultValues["TECH_OBJ_DESC"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["TECH_OBJ_DESC"], context) :
                null) :
            null;

        context["field"] = "TEXT_LENGTH";
        context["metadata"] = (objectMetadata ? objectMetadata["TEXT_LENGTH"] : null);
        privateState.TEXT_LENGTH = defaultValues ?
            (defaultValues["TEXT_LENGTH"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["TEXT_LENGTH"], context) :
                null) :
            null;

        context["field"] = "TIMESTAMP";
        context["metadata"] = (objectMetadata ? objectMetadata["TIMESTAMP"] : null);
        privateState.TIMESTAMP = defaultValues ?
            (defaultValues["TIMESTAMP"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["TIMESTAMP"], context) :
                null) :
            null;

        context["field"] = "TIME_ZONE";
        context["metadata"] = (objectMetadata ? objectMetadata["TIME_ZONE"] : null);
        privateState.TIME_ZONE = defaultValues ?
            (defaultValues["TIME_ZONE"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["TIME_ZONE"], context) :
                null) :
            null;

        context["field"] = "UNIT";
        context["metadata"] = (objectMetadata ? objectMetadata["UNIT"] : null);
        privateState.UNIT = defaultValues ?
            (defaultValues["UNIT"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["UNIT"], context) :
                null) :
            null;

        context["field"] = "USERID";
        context["metadata"] = (objectMetadata ? objectMetadata["USERID"] : null);
        privateState.USERID = defaultValues ?
            (defaultValues["USERID"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["USERID"], context) :
                null) :
            null;

        context["field"] = "USERSTATUS_TXT";
        context["metadata"] = (objectMetadata ? objectMetadata["USERSTATUS_TXT"] : null);
        privateState.USERSTATUS_TXT = defaultValues ?
            (defaultValues["USERSTATUS_TXT"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["USERSTATUS_TXT"], context) :
                null) :
            null;

        context["field"] = "USER_ST";
        context["metadata"] = (objectMetadata ? objectMetadata["USER_ST"] : null);
        privateState.USER_ST = defaultValues ?
            (defaultValues["USER_ST"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["USER_ST"], context) :
                null) :
            null;

        context["field"] = "USER_STATUS";
        context["metadata"] = (objectMetadata ? objectMetadata["USER_STATUS"] : null);
        privateState.USER_STATUS = defaultValues ?
            (defaultValues["USER_STATUS"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["USER_STATUS"], context) :
                null) :
            null;

        context["field"] = "WBS_ELEMENT";
        context["metadata"] = (objectMetadata ? objectMetadata["WBS_ELEMENT"] : null);
        privateState.WBS_ELEMENT = defaultValues ?
            (defaultValues["WBS_ELEMENT"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["WBS_ELEMENT"], context) :
                null) :
            null;

        context["field"] = "WC_SHORT_DESC";
        context["metadata"] = (objectMetadata ? objectMetadata["WC_SHORT_DESC"] : null);
        privateState.WC_SHORT_DESC = defaultValues ?
            (defaultValues["WC_SHORT_DESC"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["WC_SHORT_DESC"], context) :
                null) :
            null;

        context["field"] = "WORK_CENTER";
        context["metadata"] = (objectMetadata ? objectMetadata["WORK_CENTER"] : null);
        privateState.WORK_CENTER = defaultValues ?
            (defaultValues["WORK_CENTER"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["WORK_CENTER"], context) :
                null) :
            null;

        context["field"] = "WRRNTY_END_DT";
        context["metadata"] = (objectMetadata ? objectMetadata["WRRNTY_END_DT"] : null);
        privateState.WRRNTY_END_DT = defaultValues ?
            (defaultValues["WRRNTY_END_DT"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["WRRNTY_END_DT"], context) :
                null) :
            null;

        context["field"] = "WRRNTY_START_DT";
        context["metadata"] = (objectMetadata ? objectMetadata["WRRNTY_START_DT"] : null);
        privateState.WRRNTY_START_DT = defaultValues ?
            (defaultValues["WRRNTY_START_DT"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["WRRNTY_START_DT"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "ABCINDIC": {
                get: function() {
                    context["field"] = "ABCINDIC";
                    context["metadata"] = (objectMetadata ? objectMetadata["ABCINDIC"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ABCINDIC, context);
                },
                set: function(val) {
                    setterFunctions['ABCINDIC'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ACCEPTED": {
                get: function() {
                    context["field"] = "ACCEPTED";
                    context["metadata"] = (objectMetadata ? objectMetadata["ACCEPTED"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ACCEPTED, context);
                },
                set: function(val) {
                    setterFunctions['ACCEPTED'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ADDR_NO_LOC": {
                get: function() {
                    context["field"] = "ADDR_NO_LOC";
                    context["metadata"] = (objectMetadata ? objectMetadata["ADDR_NO_LOC"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ADDR_NO_LOC, context);
                },
                set: function(val) {
                    setterFunctions['ADDR_NO_LOC'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ADDR_NUMBER": {
                get: function() {
                    context["field"] = "ADDR_NUMBER";
                    context["metadata"] = (objectMetadata ? objectMetadata["ADDR_NUMBER"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ADDR_NUMBER, context);
                },
                set: function(val) {
                    setterFunctions['ADDR_NUMBER'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ASSEMBLY": {
                get: function() {
                    context["field"] = "ASSEMBLY";
                    context["metadata"] = (objectMetadata ? objectMetadata["ASSEMBLY"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ASSEMBLY, context);
                },
                set: function(val) {
                    setterFunctions['ASSEMBLY'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ASSEMBLY_EXT": {
                get: function() {
                    context["field"] = "ASSEMBLY_EXT";
                    context["metadata"] = (objectMetadata ? objectMetadata["ASSEMBLY_EXT"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ASSEMBLY_EXT, context);
                },
                set: function(val) {
                    setterFunctions['ASSEMBLY_EXT'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ASSEMBLY_GUID": {
                get: function() {
                    context["field"] = "ASSEMBLY_GUID";
                    context["metadata"] = (objectMetadata ? objectMetadata["ASSEMBLY_GUID"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ASSEMBLY_GUID, context);
                },
                set: function(val) {
                    setterFunctions['ASSEMBLY_GUID'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ASSEMBLY_VERSION": {
                get: function() {
                    context["field"] = "ASSEMBLY_VERSION";
                    context["metadata"] = (objectMetadata ? objectMetadata["ASSEMBLY_VERSION"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ASSEMBLY_VERSION, context);
                },
                set: function(val) {
                    setterFunctions['ASSEMBLY_VERSION'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ASSET_NO": {
                get: function() {
                    context["field"] = "ASSET_NO";
                    context["metadata"] = (objectMetadata ? objectMetadata["ASSET_NO"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ASSET_NO, context);
                },
                set: function(val) {
                    setterFunctions['ASSET_NO'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "BREAKDOWN": {
                get: function() {
                    context["field"] = "BREAKDOWN";
                    context["metadata"] = (objectMetadata ? objectMetadata["BREAKDOWN"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.BREAKDOWN, context);
                },
                set: function(val) {
                    setterFunctions['BREAKDOWN'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "BUS_AREA": {
                get: function() {
                    context["field"] = "BUS_AREA";
                    context["metadata"] = (objectMetadata ? objectMetadata["BUS_AREA"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.BUS_AREA, context);
                },
                set: function(val) {
                    setterFunctions['BUS_AREA'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "CATALOG_PROFILE": {
                get: function() {
                    context["field"] = "CATALOG_PROFILE";
                    context["metadata"] = (objectMetadata ? objectMetadata["CATALOG_PROFILE"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CATALOG_PROFILE, context);
                },
                set: function(val) {
                    setterFunctions['CATALOG_PROFILE'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "CAT_TYPE": {
                get: function() {
                    context["field"] = "CAT_TYPE";
                    context["metadata"] = (objectMetadata ? objectMetadata["CAT_TYPE"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CAT_TYPE, context);
                },
                set: function(val) {
                    setterFunctions['CAT_TYPE'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "CAUSE_CODE": {
                get: function() {
                    context["field"] = "CAUSE_CODE";
                    context["metadata"] = (objectMetadata ? objectMetadata["CAUSE_CODE"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CAUSE_CODE, context);
                },
                set: function(val) {
                    setterFunctions['CAUSE_CODE'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "CHANGED_AT": {
                get: function() {
                    context["field"] = "CHANGED_AT";
                    context["metadata"] = (objectMetadata ? objectMetadata["CHANGED_AT"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CHANGED_AT, context);
                },
                set: function(val) {
                    setterFunctions['CHANGED_AT'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "CHANGED_BY": {
                get: function() {
                    context["field"] = "CHANGED_BY";
                    context["metadata"] = (objectMetadata ? objectMetadata["CHANGED_BY"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CHANGED_BY, context);
                },
                set: function(val) {
                    setterFunctions['CHANGED_BY'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "CHANGED_ON": {
                get: function() {
                    context["field"] = "CHANGED_ON";
                    context["metadata"] = (objectMetadata ? objectMetadata["CHANGED_ON"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CHANGED_ON, context);
                },
                set: function(val) {
                    setterFunctions['CHANGED_ON'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "CODE_GRP_CAUSE": {
                get: function() {
                    context["field"] = "CODE_GRP_CAUSE";
                    context["metadata"] = (objectMetadata ? objectMetadata["CODE_GRP_CAUSE"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CODE_GRP_CAUSE, context);
                },
                set: function(val) {
                    setterFunctions['CODE_GRP_CAUSE'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "CODE_GRP_CODING": {
                get: function() {
                    context["field"] = "CODE_GRP_CODING";
                    context["metadata"] = (objectMetadata ? objectMetadata["CODE_GRP_CODING"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CODE_GRP_CODING, context);
                },
                set: function(val) {
                    setterFunctions['CODE_GRP_CODING'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "CODE_GRP_PART": {
                get: function() {
                    context["field"] = "CODE_GRP_PART";
                    context["metadata"] = (objectMetadata ? objectMetadata["CODE_GRP_PART"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CODE_GRP_PART, context);
                },
                set: function(val) {
                    setterFunctions['CODE_GRP_PART'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "CODE_GRP_PROBLEM": {
                get: function() {
                    context["field"] = "CODE_GRP_PROBLEM";
                    context["metadata"] = (objectMetadata ? objectMetadata["CODE_GRP_PROBLEM"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CODE_GRP_PROBLEM, context);
                },
                set: function(val) {
                    setterFunctions['CODE_GRP_PROBLEM'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "CODING_CODE": {
                get: function() {
                    context["field"] = "CODING_CODE";
                    context["metadata"] = (objectMetadata ? objectMetadata["CODING_CODE"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CODING_CODE, context);
                },
                set: function(val) {
                    setterFunctions['CODING_CODE'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "COMPTIME": {
                get: function() {
                    context["field"] = "COMPTIME";
                    context["metadata"] = (objectMetadata ? objectMetadata["COMPTIME"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.COMPTIME, context);
                },
                set: function(val) {
                    setterFunctions['COMPTIME'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "COMP_CODE": {
                get: function() {
                    context["field"] = "COMP_CODE";
                    context["metadata"] = (objectMetadata ? objectMetadata["COMP_CODE"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.COMP_CODE, context);
                },
                set: function(val) {
                    setterFunctions['COMP_CODE'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "CONVERT_TO_WO": {
                get: function() {
                    context["field"] = "CONVERT_TO_WO";
                    context["metadata"] = (objectMetadata ? objectMetadata["CONVERT_TO_WO"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CONVERT_TO_WO, context);
                },
                set: function(val) {
                    setterFunctions['CONVERT_TO_WO'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "COSTCENTER": {
                get: function() {
                    context["field"] = "COSTCENTER";
                    context["metadata"] = (objectMetadata ? objectMetadata["COSTCENTER"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.COSTCENTER, context);
                },
                set: function(val) {
                    setterFunctions['COSTCENTER'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "CO_AREA": {
                get: function() {
                    context["field"] = "CO_AREA";
                    context["metadata"] = (objectMetadata ? objectMetadata["CO_AREA"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CO_AREA, context);
                },
                set: function(val) {
                    setterFunctions['CO_AREA'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "CREATED_AT": {
                get: function() {
                    context["field"] = "CREATED_AT";
                    context["metadata"] = (objectMetadata ? objectMetadata["CREATED_AT"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CREATED_AT, context);
                },
                set: function(val) {
                    setterFunctions['CREATED_AT'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "CREATED_BY": {
                get: function() {
                    context["field"] = "CREATED_BY";
                    context["metadata"] = (objectMetadata ? objectMetadata["CREATED_BY"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CREATED_BY, context);
                },
                set: function(val) {
                    setterFunctions['CREATED_BY'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "CREATED_ON": {
                get: function() {
                    context["field"] = "CREATED_ON";
                    context["metadata"] = (objectMetadata ? objectMetadata["CREATED_ON"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CREATED_ON, context);
                },
                set: function(val) {
                    setterFunctions['CREATED_ON'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "CUST_NO": {
                get: function() {
                    context["field"] = "CUST_NO";
                    context["metadata"] = (objectMetadata ? objectMetadata["CUST_NO"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CUST_NO, context);
                },
                set: function(val) {
                    setterFunctions['CUST_NO'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "DELETE_FLAG": {
                get: function() {
                    context["field"] = "DELETE_FLAG";
                    context["metadata"] = (objectMetadata ? objectMetadata["DELETE_FLAG"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.DELETE_FLAG, context);
                },
                set: function(val) {
                    setterFunctions['DELETE_FLAG'].call(this, val, privateState);
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
            "DESENDDATE": {
                get: function() {
                    context["field"] = "DESENDDATE";
                    context["metadata"] = (objectMetadata ? objectMetadata["DESENDDATE"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.DESENDDATE, context);
                },
                set: function(val) {
                    setterFunctions['DESENDDATE'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "DESENDTM": {
                get: function() {
                    context["field"] = "DESENDTM";
                    context["metadata"] = (objectMetadata ? objectMetadata["DESENDTM"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.DESENDTM, context);
                },
                set: function(val) {
                    setterFunctions['DESENDTM'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "DESEN_DATE_TIME": {
                get: function() {
                    context["field"] = "DESEN_DATE_TIME";
                    context["metadata"] = (objectMetadata ? objectMetadata["DESEN_DATE_TIME"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.DESEN_DATE_TIME, context);
                },
                set: function(val) {
                    setterFunctions['DESEN_DATE_TIME'].call(this, val, privateState);
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
            "DESST_DATE_TIME": {
                get: function() {
                    context["field"] = "DESST_DATE_TIME";
                    context["metadata"] = (objectMetadata ? objectMetadata["DESST_DATE_TIME"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.DESST_DATE_TIME, context);
                },
                set: function(val) {
                    setterFunctions['DESST_DATE_TIME'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "DEVICEDATA": {
                get: function() {
                    context["field"] = "DEVICEDATA";
                    context["metadata"] = (objectMetadata ? objectMetadata["DEVICEDATA"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.DEVICEDATA, context);
                },
                set: function(val) {
                    setterFunctions['DEVICEDATA'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "DISTR_CHAN": {
                get: function() {
                    context["field"] = "DISTR_CHAN";
                    context["metadata"] = (objectMetadata ? objectMetadata["DISTR_CHAN"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.DISTR_CHAN, context);
                },
                set: function(val) {
                    setterFunctions['DISTR_CHAN'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "DIST_CHAN_LOC": {
                get: function() {
                    context["field"] = "DIST_CHAN_LOC";
                    context["metadata"] = (objectMetadata ? objectMetadata["DIST_CHAN_LOC"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.DIST_CHAN_LOC, context);
                },
                set: function(val) {
                    setterFunctions['DIST_CHAN_LOC'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "DIVISION": {
                get: function() {
                    context["field"] = "DIVISION";
                    context["metadata"] = (objectMetadata ? objectMetadata["DIVISION"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.DIVISION, context);
                },
                set: function(val) {
                    setterFunctions['DIVISION'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "DIVISION_LOC": {
                get: function() {
                    context["field"] = "DIVISION_LOC";
                    context["metadata"] = (objectMetadata ? objectMetadata["DIVISION_LOC"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.DIVISION_LOC, context);
                },
                set: function(val) {
                    setterFunctions['DIVISION_LOC'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "DOC_NUMBER": {
                get: function() {
                    context["field"] = "DOC_NUMBER";
                    context["metadata"] = (objectMetadata ? objectMetadata["DOC_NUMBER"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.DOC_NUMBER, context);
                },
                set: function(val) {
                    setterFunctions['DOC_NUMBER'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "DOWNTIME": {
                get: function() {
                    context["field"] = "DOWNTIME";
                    context["metadata"] = (objectMetadata ? objectMetadata["DOWNTIME"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.DOWNTIME, context);
                },
                set: function(val) {
                    setterFunctions['DOWNTIME'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ENDMLFNDATE": {
                get: function() {
                    context["field"] = "ENDMLFNDATE";
                    context["metadata"] = (objectMetadata ? objectMetadata["ENDMLFNDATE"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ENDMLFNDATE, context);
                },
                set: function(val) {
                    setterFunctions['ENDMLFNDATE'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ENDMLFNTIME": {
                get: function() {
                    context["field"] = "ENDMLFNTIME";
                    context["metadata"] = (objectMetadata ? objectMetadata["ENDMLFNTIME"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ENDMLFNTIME, context);
                },
                set: function(val) {
                    setterFunctions['ENDMLFNTIME'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ENDML_DATE_TIME": {
                get: function() {
                    context["field"] = "ENDML_DATE_TIME";
                    context["metadata"] = (objectMetadata ? objectMetadata["ENDML_DATE_TIME"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ENDML_DATE_TIME, context);
                },
                set: function(val) {
                    setterFunctions['ENDML_DATE_TIME'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "END_POINT": {
                get: function() {
                    context["field"] = "END_POINT";
                    context["metadata"] = (objectMetadata ? objectMetadata["END_POINT"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.END_POINT, context);
                },
                set: function(val) {
                    setterFunctions['END_POINT'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "EQUIP_NUM": {
                get: function() {
                    context["field"] = "EQUIP_NUM";
                    context["metadata"] = (objectMetadata ? objectMetadata["EQUIP_NUM"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.EQUIP_NUM, context);
                },
                set: function(val) {
                    setterFunctions['EQUIP_NUM'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "FLOCN_DESC": {
                get: function() {
                    context["field"] = "FLOCN_DESC";
                    context["metadata"] = (objectMetadata ? objectMetadata["FLOCN_DESC"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.FLOCN_DESC, context);
                },
                set: function(val) {
                    setterFunctions['FLOCN_DESC'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "FUNC_LOCATION": {
                get: function() {
                    context["field"] = "FUNC_LOCATION";
                    context["metadata"] = (objectMetadata ? objectMetadata["FUNC_LOCATION"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.FUNC_LOCATION, context);
                },
                set: function(val) {
                    setterFunctions['FUNC_LOCATION'].call(this, val, privateState);
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
            "ISOCODE_UNIT": {
                get: function() {
                    context["field"] = "ISOCODE_UNIT";
                    context["metadata"] = (objectMetadata ? objectMetadata["ISOCODE_UNIT"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ISOCODE_UNIT, context);
                },
                set: function(val) {
                    setterFunctions['ISOCODE_UNIT'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ITM_NUMBER": {
                get: function() {
                    context["field"] = "ITM_NUMBER";
                    context["metadata"] = (objectMetadata ? objectMetadata["ITM_NUMBER"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ITM_NUMBER, context);
                },
                set: function(val) {
                    setterFunctions['ITM_NUMBER'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "LINEAR_LENGTH": {
                get: function() {
                    context["field"] = "LINEAR_LENGTH";
                    context["metadata"] = (objectMetadata ? objectMetadata["LINEAR_LENGTH"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.LINEAR_LENGTH, context);
                },
                set: function(val) {
                    setterFunctions['LINEAR_LENGTH'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "LINEAR_UNIT": {
                get: function() {
                    context["field"] = "LINEAR_UNIT";
                    context["metadata"] = (objectMetadata ? objectMetadata["LINEAR_UNIT"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.LINEAR_UNIT, context);
                },
                set: function(val) {
                    setterFunctions['LINEAR_UNIT'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "LOC_ACC": {
                get: function() {
                    context["field"] = "LOC_ACC";
                    context["metadata"] = (objectMetadata ? objectMetadata["LOC_ACC"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.LOC_ACC, context);
                },
                set: function(val) {
                    setterFunctions['LOC_ACC'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "LONG_TEXT": {
                get: function() {
                    context["field"] = "LONG_TEXT";
                    context["metadata"] = (objectMetadata ? objectMetadata["LONG_TEXT"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.LONG_TEXT, context);
                },
                set: function(val) {
                    setterFunctions['LONG_TEXT'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "LRPID": {
                get: function() {
                    context["field"] = "LRPID";
                    context["metadata"] = (objectMetadata ? objectMetadata["LRPID"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.LRPID, context);
                },
                set: function(val) {
                    setterFunctions['LRPID'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "LTEXT": {
                get: function() {
                    context["field"] = "LTEXT";
                    context["metadata"] = (objectMetadata ? objectMetadata["LTEXT"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.LTEXT, context);
                },
                set: function(val) {
                    setterFunctions['LTEXT'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MAINTITEM": {
                get: function() {
                    context["field"] = "MAINTITEM";
                    context["metadata"] = (objectMetadata ? objectMetadata["MAINTITEM"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.MAINTITEM, context);
                },
                set: function(val) {
                    setterFunctions['MAINTITEM'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MAINTLOC": {
                get: function() {
                    context["field"] = "MAINTLOC";
                    context["metadata"] = (objectMetadata ? objectMetadata["MAINTLOC"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.MAINTLOC, context);
                },
                set: function(val) {
                    setterFunctions['MAINTLOC'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MAINTPLANT": {
                get: function() {
                    context["field"] = "MAINTPLANT";
                    context["metadata"] = (objectMetadata ? objectMetadata["MAINTPLANT"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.MAINTPLANT, context);
                },
                set: function(val) {
                    setterFunctions['MAINTPLANT'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MAINTROOM": {
                get: function() {
                    context["field"] = "MAINTROOM";
                    context["metadata"] = (objectMetadata ? objectMetadata["MAINTROOM"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.MAINTROOM, context);
                },
                set: function(val) {
                    setterFunctions['MAINTROOM'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MANU_WRRNTY_ENDT": {
                get: function() {
                    context["field"] = "MANU_WRRNTY_ENDT";
                    context["metadata"] = (objectMetadata ? objectMetadata["MANU_WRRNTY_ENDT"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.MANU_WRRNTY_ENDT, context);
                },
                set: function(val) {
                    setterFunctions['MANU_WRRNTY_ENDT'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MANU_WRRNTY_STDT": {
                get: function() {
                    context["field"] = "MANU_WRRNTY_STDT";
                    context["metadata"] = (objectMetadata ? objectMetadata["MANU_WRRNTY_STDT"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.MANU_WRRNTY_STDT, context);
                },
                set: function(val) {
                    setterFunctions['MANU_WRRNTY_STDT'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MARKER_DIST_END": {
                get: function() {
                    context["field"] = "MARKER_DIST_END";
                    context["metadata"] = (objectMetadata ? objectMetadata["MARKER_DIST_END"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.MARKER_DIST_END, context);
                },
                set: function(val) {
                    setterFunctions['MARKER_DIST_END'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MARKER_DIST_STA": {
                get: function() {
                    context["field"] = "MARKER_DIST_STA";
                    context["metadata"] = (objectMetadata ? objectMetadata["MARKER_DIST_STA"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.MARKER_DIST_STA, context);
                },
                set: function(val) {
                    setterFunctions['MARKER_DIST_STA'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MARKER_DIST_UNIT": {
                get: function() {
                    context["field"] = "MARKER_DIST_UNIT";
                    context["metadata"] = (objectMetadata ? objectMetadata["MARKER_DIST_UNIT"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.MARKER_DIST_UNIT, context);
                },
                set: function(val) {
                    setterFunctions['MARKER_DIST_UNIT'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MARKER_END": {
                get: function() {
                    context["field"] = "MARKER_END";
                    context["metadata"] = (objectMetadata ? objectMetadata["MARKER_END"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.MARKER_END, context);
                },
                set: function(val) {
                    setterFunctions['MARKER_END'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MARKER_START": {
                get: function() {
                    context["field"] = "MARKER_START";
                    context["metadata"] = (objectMetadata ? objectMetadata["MARKER_START"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.MARKER_START, context);
                },
                set: function(val) {
                    setterFunctions['MARKER_START'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MASTER_WRRNTY_NO": {
                get: function() {
                    context["field"] = "MASTER_WRRNTY_NO";
                    context["metadata"] = (objectMetadata ? objectMetadata["MASTER_WRRNTY_NO"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.MASTER_WRRNTY_NO, context);
                },
                set: function(val) {
                    setterFunctions['MASTER_WRRNTY_NO'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MATERIAL": {
                get: function() {
                    context["field"] = "MATERIAL";
                    context["metadata"] = (objectMetadata ? objectMetadata["MATERIAL"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.MATERIAL, context);
                },
                set: function(val) {
                    setterFunctions['MATERIAL'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MATERIAL_EXT": {
                get: function() {
                    context["field"] = "MATERIAL_EXT";
                    context["metadata"] = (objectMetadata ? objectMetadata["MATERIAL_EXT"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.MATERIAL_EXT, context);
                },
                set: function(val) {
                    setterFunctions['MATERIAL_EXT'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MATERIAL_GUID": {
                get: function() {
                    context["field"] = "MATERIAL_GUID";
                    context["metadata"] = (objectMetadata ? objectMetadata["MATERIAL_GUID"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.MATERIAL_GUID, context);
                },
                set: function(val) {
                    setterFunctions['MATERIAL_GUID'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MATERIAL_VERSION": {
                get: function() {
                    context["field"] = "MATERIAL_VERSION";
                    context["metadata"] = (objectMetadata ? objectMetadata["MATERIAL_VERSION"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.MATERIAL_VERSION, context);
                },
                set: function(val) {
                    setterFunctions['MATERIAL_VERSION'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MNTCALL_NO": {
                get: function() {
                    context["field"] = "MNTCALL_NO";
                    context["metadata"] = (objectMetadata ? objectMetadata["MNTCALL_NO"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.MNTCALL_NO, context);
                },
                set: function(val) {
                    setterFunctions['MNTCALL_NO'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MNTPLAN": {
                get: function() {
                    context["field"] = "MNTPLAN";
                    context["metadata"] = (objectMetadata ? objectMetadata["MNTPLAN"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.MNTPLAN, context);
                },
                set: function(val) {
                    setterFunctions['MNTPLAN'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "NOTF_REP_PER_NAM": {
                get: function() {
                    context["field"] = "NOTF_REP_PER_NAM";
                    context["metadata"] = (objectMetadata ? objectMetadata["NOTF_REP_PER_NAM"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.NOTF_REP_PER_NAM, context);
                },
                set: function(val) {
                    setterFunctions['NOTF_REP_PER_NAM'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "NOTIFTMEZ": {
                get: function() {
                    context["field"] = "NOTIFTMEZ";
                    context["metadata"] = (objectMetadata ? objectMetadata["NOTIFTMEZ"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.NOTIFTMEZ, context);
                },
                set: function(val) {
                    setterFunctions['NOTIFTMEZ'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "NOTIF_DATE": {
                get: function() {
                    context["field"] = "NOTIF_DATE";
                    context["metadata"] = (objectMetadata ? objectMetadata["NOTIF_DATE"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.NOTIF_DATE, context);
                },
                set: function(val) {
                    setterFunctions['NOTIF_DATE'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "NOTIF_DATE_TIME": {
                get: function() {
                    context["field"] = "NOTIF_DATE_TIME";
                    context["metadata"] = (objectMetadata ? objectMetadata["NOTIF_DATE_TIME"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.NOTIF_DATE_TIME, context);
                },
                set: function(val) {
                    setterFunctions['NOTIF_DATE_TIME'].call(this, val, privateState);
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
            "NOTIF_TIME": {
                get: function() {
                    context["field"] = "NOTIF_TIME";
                    context["metadata"] = (objectMetadata ? objectMetadata["NOTIF_TIME"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.NOTIF_TIME, context);
                },
                set: function(val) {
                    setterFunctions['NOTIF_TIME'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "NOTIF_TYPE": {
                get: function() {
                    context["field"] = "NOTIF_TYPE";
                    context["metadata"] = (objectMetadata ? objectMetadata["NOTIF_TYPE"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.NOTIF_TYPE, context);
                },
                set: function(val) {
                    setterFunctions['NOTIF_TYPE'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "OBJECT_NO": {
                get: function() {
                    context["field"] = "OBJECT_NO";
                    context["metadata"] = (objectMetadata ? objectMetadata["OBJECT_NO"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.OBJECT_NO, context);
                },
                set: function(val) {
                    setterFunctions['OBJECT_NO'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "OFFSET1_TYPE": {
                get: function() {
                    context["field"] = "OFFSET1_TYPE";
                    context["metadata"] = (objectMetadata ? objectMetadata["OFFSET1_TYPE"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.OFFSET1_TYPE, context);
                },
                set: function(val) {
                    setterFunctions['OFFSET1_TYPE'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "OFFSET1_UNIT": {
                get: function() {
                    context["field"] = "OFFSET1_UNIT";
                    context["metadata"] = (objectMetadata ? objectMetadata["OFFSET1_UNIT"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.OFFSET1_UNIT, context);
                },
                set: function(val) {
                    setterFunctions['OFFSET1_UNIT'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "OFFSET1_VALUE": {
                get: function() {
                    context["field"] = "OFFSET1_VALUE";
                    context["metadata"] = (objectMetadata ? objectMetadata["OFFSET1_VALUE"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.OFFSET1_VALUE, context);
                },
                set: function(val) {
                    setterFunctions['OFFSET1_VALUE'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "OFFSET2_TYPE": {
                get: function() {
                    context["field"] = "OFFSET2_TYPE";
                    context["metadata"] = (objectMetadata ? objectMetadata["OFFSET2_TYPE"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.OFFSET2_TYPE, context);
                },
                set: function(val) {
                    setterFunctions['OFFSET2_TYPE'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "OFFSET2_UNIT": {
                get: function() {
                    context["field"] = "OFFSET2_UNIT";
                    context["metadata"] = (objectMetadata ? objectMetadata["OFFSET2_UNIT"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.OFFSET2_UNIT, context);
                },
                set: function(val) {
                    setterFunctions['OFFSET2_UNIT'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "OFFSET2_VALUE": {
                get: function() {
                    context["field"] = "OFFSET2_VALUE";
                    context["metadata"] = (objectMetadata ? objectMetadata["OFFSET2_VALUE"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.OFFSET2_VALUE, context);
                },
                set: function(val) {
                    setterFunctions['OFFSET2_VALUE'].call(this, val, privateState);
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
            "ORDER_NUM": {
                get: function() {
                    context["field"] = "ORDER_NUM";
                    context["metadata"] = (objectMetadata ? objectMetadata["ORDER_NUM"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ORDER_NUM, context);
                },
                set: function(val) {
                    setterFunctions['ORDER_NUM'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ORDER_TEXT": {
                get: function() {
                    context["field"] = "ORDER_TEXT";
                    context["metadata"] = (objectMetadata ? objectMetadata["ORDER_TEXT"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ORDER_TEXT, context);
                },
                set: function(val) {
                    setterFunctions['ORDER_TEXT'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ORDER_TYPE": {
                get: function() {
                    context["field"] = "ORDER_TYPE";
                    context["metadata"] = (objectMetadata ? objectMetadata["ORDER_TYPE"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ORDER_TYPE, context);
                },
                set: function(val) {
                    setterFunctions['ORDER_TYPE'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "PART_OBJECT": {
                get: function() {
                    context["field"] = "PART_OBJECT";
                    context["metadata"] = (objectMetadata ? objectMetadata["PART_OBJECT"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.PART_OBJECT, context);
                },
                set: function(val) {
                    setterFunctions['PART_OBJECT'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "PLANGROUP": {
                get: function() {
                    context["field"] = "PLANGROUP";
                    context["metadata"] = (objectMetadata ? objectMetadata["PLANGROUP"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.PLANGROUP, context);
                },
                set: function(val) {
                    setterFunctions['PLANGROUP'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "PLANPLANT": {
                get: function() {
                    context["field"] = "PLANPLANT";
                    context["metadata"] = (objectMetadata ? objectMetadata["PLANPLANT"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.PLANPLANT, context);
                },
                set: function(val) {
                    setterFunctions['PLANPLANT'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "PLSECTN": {
                get: function() {
                    context["field"] = "PLSECTN";
                    context["metadata"] = (objectMetadata ? objectMetadata["PLSECTN"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.PLSECTN, context);
                },
                set: function(val) {
                    setterFunctions['PLSECTN'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "PM_WKCTR": {
                get: function() {
                    context["field"] = "PM_WKCTR";
                    context["metadata"] = (objectMetadata ? objectMetadata["PM_WKCTR"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.PM_WKCTR, context);
                },
                set: function(val) {
                    setterFunctions['PM_WKCTR'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "PP_WKCTR": {
                get: function() {
                    context["field"] = "PP_WKCTR";
                    context["metadata"] = (objectMetadata ? objectMetadata["PP_WKCTR"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.PP_WKCTR, context);
                },
                set: function(val) {
                    setterFunctions['PP_WKCTR'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "PRILANG": {
                get: function() {
                    context["field"] = "PRILANG";
                    context["metadata"] = (objectMetadata ? objectMetadata["PRILANG"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.PRILANG, context);
                },
                set: function(val) {
                    setterFunctions['PRILANG'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "PRIORITY": {
                get: function() {
                    context["field"] = "PRIORITY";
                    context["metadata"] = (objectMetadata ? objectMetadata["PRIORITY"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.PRIORITY, context);
                },
                set: function(val) {
                    setterFunctions['PRIORITY'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "PRIORITY_TYPE": {
                get: function() {
                    context["field"] = "PRIORITY_TYPE";
                    context["metadata"] = (objectMetadata ? objectMetadata["PRIORITY_TYPE"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.PRIORITY_TYPE, context);
                },
                set: function(val) {
                    setterFunctions['PRIORITY_TYPE'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "PROBLEM": {
                get: function() {
                    context["field"] = "PROBLEM";
                    context["metadata"] = (objectMetadata ? objectMetadata["PROBLEM"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.PROBLEM, context);
                },
                set: function(val) {
                    setterFunctions['PROBLEM'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "PROBLEM_TEXT": {
                get: function() {
                    context["field"] = "PROBLEM_TEXT";
                    context["metadata"] = (objectMetadata ? objectMetadata["PROBLEM_TEXT"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.PROBLEM_TEXT, context);
                },
                set: function(val) {
                    setterFunctions['PROBLEM_TEXT'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "PURCH_DATE": {
                get: function() {
                    context["field"] = "PURCH_DATE";
                    context["metadata"] = (objectMetadata ? objectMetadata["PURCH_DATE"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.PURCH_DATE, context);
                },
                set: function(val) {
                    setterFunctions['PURCH_DATE'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "PURCH_NO_C": {
                get: function() {
                    context["field"] = "PURCH_NO_C";
                    context["metadata"] = (objectMetadata ? objectMetadata["PURCH_NO_C"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.PURCH_NO_C, context);
                },
                set: function(val) {
                    setterFunctions['PURCH_NO_C'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "REFDATE": {
                get: function() {
                    context["field"] = "REFDATE";
                    context["metadata"] = (objectMetadata ? objectMetadata["REFDATE"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.REFDATE, context);
                },
                set: function(val) {
                    setterFunctions['REFDATE'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "REFTIME": {
                get: function() {
                    context["field"] = "REFTIME";
                    context["metadata"] = (objectMetadata ? objectMetadata["REFTIME"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.REFTIME, context);
                },
                set: function(val) {
                    setterFunctions['REFTIME'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "REF_DATE_TIME": {
                get: function() {
                    context["field"] = "REF_DATE_TIME";
                    context["metadata"] = (objectMetadata ? objectMetadata["REF_DATE_TIME"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.REF_DATE_TIME, context);
                },
                set: function(val) {
                    setterFunctions['REF_DATE_TIME'].call(this, val, privateState);
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
            "SALES_GRP": {
                get: function() {
                    context["field"] = "SALES_GRP";
                    context["metadata"] = (objectMetadata ? objectMetadata["SALES_GRP"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.SALES_GRP, context);
                },
                set: function(val) {
                    setterFunctions['SALES_GRP'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "SALES_OFFICE": {
                get: function() {
                    context["field"] = "SALES_OFFICE";
                    context["metadata"] = (objectMetadata ? objectMetadata["SALES_OFFICE"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.SALES_OFFICE, context);
                },
                set: function(val) {
                    setterFunctions['SALES_OFFICE'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "SALES_ORD": {
                get: function() {
                    context["field"] = "SALES_ORD";
                    context["metadata"] = (objectMetadata ? objectMetadata["SALES_ORD"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.SALES_ORD, context);
                },
                set: function(val) {
                    setterFunctions['SALES_ORD'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "SALES_ORG": {
                get: function() {
                    context["field"] = "SALES_ORG";
                    context["metadata"] = (objectMetadata ? objectMetadata["SALES_ORG"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.SALES_ORG, context);
                },
                set: function(val) {
                    setterFunctions['SALES_ORG'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "SALES_ORG_LOC": {
                get: function() {
                    context["field"] = "SALES_ORG_LOC";
                    context["metadata"] = (objectMetadata ? objectMetadata["SALES_ORG_LOC"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.SALES_ORG_LOC, context);
                },
                set: function(val) {
                    setterFunctions['SALES_ORG_LOC'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "SCENARIO": {
                get: function() {
                    context["field"] = "SCENARIO";
                    context["metadata"] = (objectMetadata ? objectMetadata["SCENARIO"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.SCENARIO, context);
                },
                set: function(val) {
                    setterFunctions['SCENARIO'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "SERIALNO": {
                get: function() {
                    context["field"] = "SERIALNO";
                    context["metadata"] = (objectMetadata ? objectMetadata["SERIALNO"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.SERIALNO, context);
                },
                set: function(val) {
                    setterFunctions['SERIALNO'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "SERVER_GROUP": {
                get: function() {
                    context["field"] = "SERVER_GROUP";
                    context["metadata"] = (objectMetadata ? objectMetadata["SERVER_GROUP"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.SERVER_GROUP, context);
                },
                set: function(val) {
                    setterFunctions['SERVER_GROUP'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "SERVER_ID": {
                get: function() {
                    context["field"] = "SERVER_ID";
                    context["metadata"] = (objectMetadata ? objectMetadata["SERVER_ID"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.SERVER_ID, context);
                },
                set: function(val) {
                    setterFunctions['SERVER_ID'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "SHORT_TEXT": {
                get: function() {
                    context["field"] = "SHORT_TEXT";
                    context["metadata"] = (objectMetadata ? objectMetadata["SHORT_TEXT"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.SHORT_TEXT, context);
                },
                set: function(val) {
                    setterFunctions['SHORT_TEXT'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "SORTFIELD": {
                get: function() {
                    context["field"] = "SORTFIELD";
                    context["metadata"] = (objectMetadata ? objectMetadata["SORTFIELD"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.SORTFIELD, context);
                },
                set: function(val) {
                    setterFunctions['SORTFIELD'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "START_POINT": {
                get: function() {
                    context["field"] = "START_POINT";
                    context["metadata"] = (objectMetadata ? objectMetadata["START_POINT"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.START_POINT, context);
                },
                set: function(val) {
                    setterFunctions['START_POINT'].call(this, val, privateState);
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
            "STDGORD": {
                get: function() {
                    context["field"] = "STDGORD";
                    context["metadata"] = (objectMetadata ? objectMetadata["STDGORD"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.STDGORD, context);
                },
                set: function(val) {
                    setterFunctions['STDGORD'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "STLMTORDER": {
                get: function() {
                    context["field"] = "STLMTORDER";
                    context["metadata"] = (objectMetadata ? objectMetadata["STLMTORDER"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.STLMTORDER, context);
                },
                set: function(val) {
                    setterFunctions['STLMTORDER'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "STRMLFNDATE": {
                get: function() {
                    context["field"] = "STRMLFNDATE";
                    context["metadata"] = (objectMetadata ? objectMetadata["STRMLFNDATE"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.STRMLFNDATE, context);
                },
                set: function(val) {
                    setterFunctions['STRMLFNDATE'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "STRMLFNTIME": {
                get: function() {
                    context["field"] = "STRMLFNTIME";
                    context["metadata"] = (objectMetadata ? objectMetadata["STRMLFNTIME"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.STRMLFNTIME, context);
                },
                set: function(val) {
                    setterFunctions['STRMLFNTIME'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "STRML_DATE_TIME": {
                get: function() {
                    context["field"] = "STRML_DATE_TIME";
                    context["metadata"] = (objectMetadata ? objectMetadata["STRML_DATE_TIME"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.STRML_DATE_TIME, context);
                },
                set: function(val) {
                    setterFunctions['STRML_DATE_TIME'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "SUB_NUMBER": {
                get: function() {
                    context["field"] = "SUB_NUMBER";
                    context["metadata"] = (objectMetadata ? objectMetadata["SUB_NUMBER"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.SUB_NUMBER, context);
                },
                set: function(val) {
                    setterFunctions['SUB_NUMBER'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "SYS_STATUS": {
                get: function() {
                    context["field"] = "SYS_STATUS";
                    context["metadata"] = (objectMetadata ? objectMetadata["SYS_STATUS"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.SYS_STATUS, context);
                },
                set: function(val) {
                    setterFunctions['SYS_STATUS'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "TECH_OBJ_DESC": {
                get: function() {
                    context["field"] = "TECH_OBJ_DESC";
                    context["metadata"] = (objectMetadata ? objectMetadata["TECH_OBJ_DESC"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.TECH_OBJ_DESC, context);
                },
                set: function(val) {
                    setterFunctions['TECH_OBJ_DESC'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "TEXT_LENGTH": {
                get: function() {
                    context["field"] = "TEXT_LENGTH";
                    context["metadata"] = (objectMetadata ? objectMetadata["TEXT_LENGTH"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.TEXT_LENGTH, context);
                },
                set: function(val) {
                    setterFunctions['TEXT_LENGTH'].call(this, val, privateState);
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
            "TIME_ZONE": {
                get: function() {
                    context["field"] = "TIME_ZONE";
                    context["metadata"] = (objectMetadata ? objectMetadata["TIME_ZONE"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.TIME_ZONE, context);
                },
                set: function(val) {
                    setterFunctions['TIME_ZONE'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "UNIT": {
                get: function() {
                    context["field"] = "UNIT";
                    context["metadata"] = (objectMetadata ? objectMetadata["UNIT"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.UNIT, context);
                },
                set: function(val) {
                    setterFunctions['UNIT'].call(this, val, privateState);
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
            "USERSTATUS_TXT": {
                get: function() {
                    context["field"] = "USERSTATUS_TXT";
                    context["metadata"] = (objectMetadata ? objectMetadata["USERSTATUS_TXT"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.USERSTATUS_TXT, context);
                },
                set: function(val) {
                    setterFunctions['USERSTATUS_TXT'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "USER_ST": {
                get: function() {
                    context["field"] = "USER_ST";
                    context["metadata"] = (objectMetadata ? objectMetadata["USER_ST"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.USER_ST, context);
                },
                set: function(val) {
                    setterFunctions['USER_ST'].call(this, val, privateState);
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
            "WBS_ELEMENT": {
                get: function() {
                    context["field"] = "WBS_ELEMENT";
                    context["metadata"] = (objectMetadata ? objectMetadata["WBS_ELEMENT"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.WBS_ELEMENT, context);
                },
                set: function(val) {
                    setterFunctions['WBS_ELEMENT'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "WC_SHORT_DESC": {
                get: function() {
                    context["field"] = "WC_SHORT_DESC";
                    context["metadata"] = (objectMetadata ? objectMetadata["WC_SHORT_DESC"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.WC_SHORT_DESC, context);
                },
                set: function(val) {
                    setterFunctions['WC_SHORT_DESC'].call(this, val, privateState);
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
            "WRRNTY_END_DT": {
                get: function() {
                    context["field"] = "WRRNTY_END_DT";
                    context["metadata"] = (objectMetadata ? objectMetadata["WRRNTY_END_DT"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.WRRNTY_END_DT, context);
                },
                set: function(val) {
                    setterFunctions['WRRNTY_END_DT'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "WRRNTY_START_DT": {
                get: function() {
                    context["field"] = "WRRNTY_START_DT";
                    context["metadata"] = (objectMetadata ? objectMetadata["WRRNTY_START_DT"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.WRRNTY_START_DT, context);
                },
                set: function(val) {
                    setterFunctions['WRRNTY_START_DT'].call(this, val, privateState);
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
            privateState.ABCINDIC = value ? (value["ABCINDIC"] ? value["ABCINDIC"] : null) : null;
            privateState.ACCEPTED = value ? (value["ACCEPTED"] ? value["ACCEPTED"] : null) : null;
            privateState.ADDR_NO_LOC = value ? (value["ADDR_NO_LOC"] ? value["ADDR_NO_LOC"] : null) : null;
            privateState.ADDR_NUMBER = value ? (value["ADDR_NUMBER"] ? value["ADDR_NUMBER"] : null) : null;
            privateState.ASSEMBLY = value ? (value["ASSEMBLY"] ? value["ASSEMBLY"] : null) : null;
            privateState.ASSEMBLY_EXT = value ? (value["ASSEMBLY_EXT"] ? value["ASSEMBLY_EXT"] : null) : null;
            privateState.ASSEMBLY_GUID = value ? (value["ASSEMBLY_GUID"] ? value["ASSEMBLY_GUID"] : null) : null;
            privateState.ASSEMBLY_VERSION = value ? (value["ASSEMBLY_VERSION"] ? value["ASSEMBLY_VERSION"] : null) : null;
            privateState.ASSET_NO = value ? (value["ASSET_NO"] ? value["ASSET_NO"] : null) : null;
            privateState.BREAKDOWN = value ? (value["BREAKDOWN"] ? value["BREAKDOWN"] : null) : null;
            privateState.BUS_AREA = value ? (value["BUS_AREA"] ? value["BUS_AREA"] : null) : null;
            privateState.CATALOG_PROFILE = value ? (value["CATALOG_PROFILE"] ? value["CATALOG_PROFILE"] : null) : null;
            privateState.CAT_TYPE = value ? (value["CAT_TYPE"] ? value["CAT_TYPE"] : null) : null;
            privateState.CAUSE_CODE = value ? (value["CAUSE_CODE"] ? value["CAUSE_CODE"] : null) : null;
            privateState.CHANGED_AT = value ? (value["CHANGED_AT"] ? value["CHANGED_AT"] : null) : null;
            privateState.CHANGED_BY = value ? (value["CHANGED_BY"] ? value["CHANGED_BY"] : null) : null;
            privateState.CHANGED_ON = value ? (value["CHANGED_ON"] ? value["CHANGED_ON"] : null) : null;
            privateState.CODE_GRP_CAUSE = value ? (value["CODE_GRP_CAUSE"] ? value["CODE_GRP_CAUSE"] : null) : null;
            privateState.CODE_GRP_CODING = value ? (value["CODE_GRP_CODING"] ? value["CODE_GRP_CODING"] : null) : null;
            privateState.CODE_GRP_PART = value ? (value["CODE_GRP_PART"] ? value["CODE_GRP_PART"] : null) : null;
            privateState.CODE_GRP_PROBLEM = value ? (value["CODE_GRP_PROBLEM"] ? value["CODE_GRP_PROBLEM"] : null) : null;
            privateState.CODING_CODE = value ? (value["CODING_CODE"] ? value["CODING_CODE"] : null) : null;
            privateState.COMPTIME = value ? (value["COMPTIME"] ? value["COMPTIME"] : null) : null;
            privateState.COMP_CODE = value ? (value["COMP_CODE"] ? value["COMP_CODE"] : null) : null;
            privateState.CONVERT_TO_WO = value ? (value["CONVERT_TO_WO"] ? value["CONVERT_TO_WO"] : null) : null;
            privateState.COSTCENTER = value ? (value["COSTCENTER"] ? value["COSTCENTER"] : null) : null;
            privateState.CO_AREA = value ? (value["CO_AREA"] ? value["CO_AREA"] : null) : null;
            privateState.CREATED_AT = value ? (value["CREATED_AT"] ? value["CREATED_AT"] : null) : null;
            privateState.CREATED_BY = value ? (value["CREATED_BY"] ? value["CREATED_BY"] : null) : null;
            privateState.CREATED_ON = value ? (value["CREATED_ON"] ? value["CREATED_ON"] : null) : null;
            privateState.CUST_NO = value ? (value["CUST_NO"] ? value["CUST_NO"] : null) : null;
            privateState.DELETE_FLAG = value ? (value["DELETE_FLAG"] ? value["DELETE_FLAG"] : null) : null;
            privateState.DELETE_IND = value ? (value["DELETE_IND"] ? value["DELETE_IND"] : null) : null;
            privateState.DESENDDATE = value ? (value["DESENDDATE"] ? value["DESENDDATE"] : null) : null;
            privateState.DESENDTM = value ? (value["DESENDTM"] ? value["DESENDTM"] : null) : null;
            privateState.DESEN_DATE_TIME = value ? (value["DESEN_DATE_TIME"] ? value["DESEN_DATE_TIME"] : null) : null;
            privateState.DESSTDATE = value ? (value["DESSTDATE"] ? value["DESSTDATE"] : null) : null;
            privateState.DESSTTIME = value ? (value["DESSTTIME"] ? value["DESSTTIME"] : null) : null;
            privateState.DESST_DATE_TIME = value ? (value["DESST_DATE_TIME"] ? value["DESST_DATE_TIME"] : null) : null;
            privateState.DEVICEDATA = value ? (value["DEVICEDATA"] ? value["DEVICEDATA"] : null) : null;
            privateState.DISTR_CHAN = value ? (value["DISTR_CHAN"] ? value["DISTR_CHAN"] : null) : null;
            privateState.DIST_CHAN_LOC = value ? (value["DIST_CHAN_LOC"] ? value["DIST_CHAN_LOC"] : null) : null;
            privateState.DIVISION = value ? (value["DIVISION"] ? value["DIVISION"] : null) : null;
            privateState.DIVISION_LOC = value ? (value["DIVISION_LOC"] ? value["DIVISION_LOC"] : null) : null;
            privateState.DOC_NUMBER = value ? (value["DOC_NUMBER"] ? value["DOC_NUMBER"] : null) : null;
            privateState.DOWNTIME = value ? (value["DOWNTIME"] ? value["DOWNTIME"] : null) : null;
            privateState.ENDMLFNDATE = value ? (value["ENDMLFNDATE"] ? value["ENDMLFNDATE"] : null) : null;
            privateState.ENDMLFNTIME = value ? (value["ENDMLFNTIME"] ? value["ENDMLFNTIME"] : null) : null;
            privateState.ENDML_DATE_TIME = value ? (value["ENDML_DATE_TIME"] ? value["ENDML_DATE_TIME"] : null) : null;
            privateState.END_POINT = value ? (value["END_POINT"] ? value["END_POINT"] : null) : null;
            privateState.EQUIP_NUM = value ? (value["EQUIP_NUM"] ? value["EQUIP_NUM"] : null) : null;
            privateState.FLOCN_DESC = value ? (value["FLOCN_DESC"] ? value["FLOCN_DESC"] : null) : null;
            privateState.FUNC_LOCATION = value ? (value["FUNC_LOCATION"] ? value["FUNC_LOCATION"] : null) : null;
            privateState.INTERNAL_NUMBER = value ? (value["INTERNAL_NUMBER"] ? value["INTERNAL_NUMBER"] : null) : null;
            privateState.ISOCODE_UNIT = value ? (value["ISOCODE_UNIT"] ? value["ISOCODE_UNIT"] : null) : null;
            privateState.ITM_NUMBER = value ? (value["ITM_NUMBER"] ? value["ITM_NUMBER"] : null) : null;
            privateState.LINEAR_LENGTH = value ? (value["LINEAR_LENGTH"] ? value["LINEAR_LENGTH"] : null) : null;
            privateState.LINEAR_UNIT = value ? (value["LINEAR_UNIT"] ? value["LINEAR_UNIT"] : null) : null;
            privateState.LOC_ACC = value ? (value["LOC_ACC"] ? value["LOC_ACC"] : null) : null;
            privateState.LONG_TEXT = value ? (value["LONG_TEXT"] ? value["LONG_TEXT"] : null) : null;
            privateState.LRPID = value ? (value["LRPID"] ? value["LRPID"] : null) : null;
            privateState.LTEXT = value ? (value["LTEXT"] ? value["LTEXT"] : null) : null;
            privateState.MAINTITEM = value ? (value["MAINTITEM"] ? value["MAINTITEM"] : null) : null;
            privateState.MAINTLOC = value ? (value["MAINTLOC"] ? value["MAINTLOC"] : null) : null;
            privateState.MAINTPLANT = value ? (value["MAINTPLANT"] ? value["MAINTPLANT"] : null) : null;
            privateState.MAINTROOM = value ? (value["MAINTROOM"] ? value["MAINTROOM"] : null) : null;
            privateState.MANU_WRRNTY_ENDT = value ? (value["MANU_WRRNTY_ENDT"] ? value["MANU_WRRNTY_ENDT"] : null) : null;
            privateState.MANU_WRRNTY_STDT = value ? (value["MANU_WRRNTY_STDT"] ? value["MANU_WRRNTY_STDT"] : null) : null;
            privateState.MARKER_DIST_END = value ? (value["MARKER_DIST_END"] ? value["MARKER_DIST_END"] : null) : null;
            privateState.MARKER_DIST_STA = value ? (value["MARKER_DIST_STA"] ? value["MARKER_DIST_STA"] : null) : null;
            privateState.MARKER_DIST_UNIT = value ? (value["MARKER_DIST_UNIT"] ? value["MARKER_DIST_UNIT"] : null) : null;
            privateState.MARKER_END = value ? (value["MARKER_END"] ? value["MARKER_END"] : null) : null;
            privateState.MARKER_START = value ? (value["MARKER_START"] ? value["MARKER_START"] : null) : null;
            privateState.MASTER_WRRNTY_NO = value ? (value["MASTER_WRRNTY_NO"] ? value["MASTER_WRRNTY_NO"] : null) : null;
            privateState.MATERIAL = value ? (value["MATERIAL"] ? value["MATERIAL"] : null) : null;
            privateState.MATERIAL_EXT = value ? (value["MATERIAL_EXT"] ? value["MATERIAL_EXT"] : null) : null;
            privateState.MATERIAL_GUID = value ? (value["MATERIAL_GUID"] ? value["MATERIAL_GUID"] : null) : null;
            privateState.MATERIAL_VERSION = value ? (value["MATERIAL_VERSION"] ? value["MATERIAL_VERSION"] : null) : null;
            privateState.MNTCALL_NO = value ? (value["MNTCALL_NO"] ? value["MNTCALL_NO"] : null) : null;
            privateState.MNTPLAN = value ? (value["MNTPLAN"] ? value["MNTPLAN"] : null) : null;
            privateState.NOTF_REP_PER_NAM = value ? (value["NOTF_REP_PER_NAM"] ? value["NOTF_REP_PER_NAM"] : null) : null;
            privateState.NOTIFTMEZ = value ? (value["NOTIFTMEZ"] ? value["NOTIFTMEZ"] : null) : null;
            privateState.NOTIF_DATE = value ? (value["NOTIF_DATE"] ? value["NOTIF_DATE"] : null) : null;
            privateState.NOTIF_DATE_TIME = value ? (value["NOTIF_DATE_TIME"] ? value["NOTIF_DATE_TIME"] : null) : null;
            privateState.NOTIF_NUM = value ? (value["NOTIF_NUM"] ? value["NOTIF_NUM"] : null) : null;
            privateState.NOTIF_TIME = value ? (value["NOTIF_TIME"] ? value["NOTIF_TIME"] : null) : null;
            privateState.NOTIF_TYPE = value ? (value["NOTIF_TYPE"] ? value["NOTIF_TYPE"] : null) : null;
            privateState.OBJECT_NO = value ? (value["OBJECT_NO"] ? value["OBJECT_NO"] : null) : null;
            privateState.OFFSET1_TYPE = value ? (value["OFFSET1_TYPE"] ? value["OFFSET1_TYPE"] : null) : null;
            privateState.OFFSET1_UNIT = value ? (value["OFFSET1_UNIT"] ? value["OFFSET1_UNIT"] : null) : null;
            privateState.OFFSET1_VALUE = value ? (value["OFFSET1_VALUE"] ? value["OFFSET1_VALUE"] : null) : null;
            privateState.OFFSET2_TYPE = value ? (value["OFFSET2_TYPE"] ? value["OFFSET2_TYPE"] : null) : null;
            privateState.OFFSET2_UNIT = value ? (value["OFFSET2_UNIT"] ? value["OFFSET2_UNIT"] : null) : null;
            privateState.OFFSET2_VALUE = value ? (value["OFFSET2_VALUE"] ? value["OFFSET2_VALUE"] : null) : null;
            privateState.OPMODE = value ? (value["OPMODE"] ? value["OPMODE"] : null) : null;
            privateState.ORDER_NUM = value ? (value["ORDER_NUM"] ? value["ORDER_NUM"] : null) : null;
            privateState.ORDER_TEXT = value ? (value["ORDER_TEXT"] ? value["ORDER_TEXT"] : null) : null;
            privateState.ORDER_TYPE = value ? (value["ORDER_TYPE"] ? value["ORDER_TYPE"] : null) : null;
            privateState.PART_OBJECT = value ? (value["PART_OBJECT"] ? value["PART_OBJECT"] : null) : null;
            privateState.PLANGROUP = value ? (value["PLANGROUP"] ? value["PLANGROUP"] : null) : null;
            privateState.PLANPLANT = value ? (value["PLANPLANT"] ? value["PLANPLANT"] : null) : null;
            privateState.PLSECTN = value ? (value["PLSECTN"] ? value["PLSECTN"] : null) : null;
            privateState.PM_WKCTR = value ? (value["PM_WKCTR"] ? value["PM_WKCTR"] : null) : null;
            privateState.PP_WKCTR = value ? (value["PP_WKCTR"] ? value["PP_WKCTR"] : null) : null;
            privateState.PRILANG = value ? (value["PRILANG"] ? value["PRILANG"] : null) : null;
            privateState.PRIORITY = value ? (value["PRIORITY"] ? value["PRIORITY"] : null) : null;
            privateState.PRIORITY_TYPE = value ? (value["PRIORITY_TYPE"] ? value["PRIORITY_TYPE"] : null) : null;
            privateState.PROBLEM = value ? (value["PROBLEM"] ? value["PROBLEM"] : null) : null;
            privateState.PROBLEM_TEXT = value ? (value["PROBLEM_TEXT"] ? value["PROBLEM_TEXT"] : null) : null;
            privateState.PURCH_DATE = value ? (value["PURCH_DATE"] ? value["PURCH_DATE"] : null) : null;
            privateState.PURCH_NO_C = value ? (value["PURCH_NO_C"] ? value["PURCH_NO_C"] : null) : null;
            privateState.REFDATE = value ? (value["REFDATE"] ? value["REFDATE"] : null) : null;
            privateState.REFTIME = value ? (value["REFTIME"] ? value["REFTIME"] : null) : null;
            privateState.REF_DATE_TIME = value ? (value["REF_DATE_TIME"] ? value["REF_DATE_TIME"] : null) : null;
            privateState.REJECTED = value ? (value["REJECTED"] ? value["REJECTED"] : null) : null;
            privateState.SALES_GRP = value ? (value["SALES_GRP"] ? value["SALES_GRP"] : null) : null;
            privateState.SALES_OFFICE = value ? (value["SALES_OFFICE"] ? value["SALES_OFFICE"] : null) : null;
            privateState.SALES_ORD = value ? (value["SALES_ORD"] ? value["SALES_ORD"] : null) : null;
            privateState.SALES_ORG = value ? (value["SALES_ORG"] ? value["SALES_ORG"] : null) : null;
            privateState.SALES_ORG_LOC = value ? (value["SALES_ORG_LOC"] ? value["SALES_ORG_LOC"] : null) : null;
            privateState.SCENARIO = value ? (value["SCENARIO"] ? value["SCENARIO"] : null) : null;
            privateState.SERIALNO = value ? (value["SERIALNO"] ? value["SERIALNO"] : null) : null;
            privateState.SERVER_GROUP = value ? (value["SERVER_GROUP"] ? value["SERVER_GROUP"] : null) : null;
            privateState.SERVER_ID = value ? (value["SERVER_ID"] ? value["SERVER_ID"] : null) : null;
            privateState.SHORT_TEXT = value ? (value["SHORT_TEXT"] ? value["SHORT_TEXT"] : null) : null;
            privateState.SORTFIELD = value ? (value["SORTFIELD"] ? value["SORTFIELD"] : null) : null;
            privateState.START_POINT = value ? (value["START_POINT"] ? value["START_POINT"] : null) : null;
            privateState.STAT_PROF = value ? (value["STAT_PROF"] ? value["STAT_PROF"] : null) : null;
            privateState.STDGORD = value ? (value["STDGORD"] ? value["STDGORD"] : null) : null;
            privateState.STLMTORDER = value ? (value["STLMTORDER"] ? value["STLMTORDER"] : null) : null;
            privateState.STRMLFNDATE = value ? (value["STRMLFNDATE"] ? value["STRMLFNDATE"] : null) : null;
            privateState.STRMLFNTIME = value ? (value["STRMLFNTIME"] ? value["STRMLFNTIME"] : null) : null;
            privateState.STRML_DATE_TIME = value ? (value["STRML_DATE_TIME"] ? value["STRML_DATE_TIME"] : null) : null;
            privateState.SUB_NUMBER = value ? (value["SUB_NUMBER"] ? value["SUB_NUMBER"] : null) : null;
            privateState.SYS_STATUS = value ? (value["SYS_STATUS"] ? value["SYS_STATUS"] : null) : null;
            privateState.TECH_OBJ_DESC = value ? (value["TECH_OBJ_DESC"] ? value["TECH_OBJ_DESC"] : null) : null;
            privateState.TEXT_LENGTH = value ? (value["TEXT_LENGTH"] ? value["TEXT_LENGTH"] : null) : null;
            privateState.TIMESTAMP = value ? (value["TIMESTAMP"] ? value["TIMESTAMP"] : null) : null;
            privateState.TIME_ZONE = value ? (value["TIME_ZONE"] ? value["TIME_ZONE"] : null) : null;
            privateState.UNIT = value ? (value["UNIT"] ? value["UNIT"] : null) : null;
            privateState.USERID = value ? (value["USERID"] ? value["USERID"] : null) : null;
            privateState.USERSTATUS_TXT = value ? (value["USERSTATUS_TXT"] ? value["USERSTATUS_TXT"] : null) : null;
            privateState.USER_ST = value ? (value["USER_ST"] ? value["USER_ST"] : null) : null;
            privateState.USER_STATUS = value ? (value["USER_STATUS"] ? value["USER_STATUS"] : null) : null;
            privateState.WBS_ELEMENT = value ? (value["WBS_ELEMENT"] ? value["WBS_ELEMENT"] : null) : null;
            privateState.WC_SHORT_DESC = value ? (value["WC_SHORT_DESC"] ? value["WC_SHORT_DESC"] : null) : null;
            privateState.WORK_CENTER = value ? (value["WORK_CENTER"] ? value["WORK_CENTER"] : null) : null;
            privateState.WRRNTY_END_DT = value ? (value["WRRNTY_END_DT"] ? value["WRRNTY_END_DT"] : null) : null;
            privateState.WRRNTY_START_DT = value ? (value["WRRNTY_START_DT"] ? value["WRRNTY_START_DT"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(EAM_NOTIF);

    //Create new class level validator object
    BaseModel.Validator.call(EAM_NOTIF);

    var registerValidatorBackup = EAM_NOTIF.registerValidator;

    EAM_NOTIF.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(EAM_NOTIF.isValid(this, propName, val)) {
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

    EAM_NOTIF.relations = relations;

    EAM_NOTIF.prototype.isValid = function() {
        return EAM_NOTIF.isValid(this);
    };

    EAM_NOTIF.prototype.objModelName = "EAM_NOTIF";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    EAM_NOTIF.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("sapobj", "EAM_NOTIF", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    EAM_NOTIF.clone = function(objectToClone) {
        var clonedObj = new EAM_NOTIF();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return EAM_NOTIF;
});
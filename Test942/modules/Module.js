//Type your code here
var loggerObj = null;
var numberOfStatementsToLog = 100;
var lConfig = null;
var contactObject = "contact";
var objServiceName = "boxObjectService";
var boxIdentityService = "OAuthBox";

function onPreAppInit() {
  lConfig = new kony.logger.createLoggerConfig();
  var filePersistor = new kony.logger.createFilePersistor();
  filePersistor.maxNumberOfLogFiles = 50;
  lConfig.addPersistor(filePersistor);
  lConfig.statementsLimit = 1;
  loggerObj = new kony.logger.createNewLogger("Demo_Logger", lConfig);
  KNYMetricsService.setEventTracking(["FormEntry", "FormExit", "Touch", "ServiceRequest", "ServiceResponse", "Gesture", "Orientation", "Error", "Crash"]);
}

function onPostAppInit() {
   activatePersistors();
}

function activatePersistors() {
  kony.logger.activatePersistors(kony.logger.consolePersistor);
  kony.logger.activatePersistors(kony.logger.filePersistor);
}

/* SyncV2 Apis */

function setup() {
  function successCallback(status) {
   // kony.print("Application setup successful");
    //alert("Application setup successful");
    Form1.setuplbl.text="success";
  }

  function failureCallback(error) {
//     kony.print("Application setup failed with error:" + error.code);
//     alert("Application setup failed with error:" + error.code);
    Form1.setuplbl.text="Fail";
  }
  var options = {};
  KNYMobileFabric.OfflineObjects.setup(options, successCallback, failureCallback);
}

function objectSync() {
  function successCallback(result) {
//     kony.print("Object sync successcallback :" + JSON.stringify(result));
//     alert("Object sync successcallback :" + JSON.stringify(result));
    Form1.objsynclbl.text="success";
  }

  function failureCallback(error) {
//     kony.print("Object sync failurecallback :" + JSON.stringify(error));
//     alert("Object sync failurecallback :" + JSON.stringify(error));
    Form1.objsynclbl.text="fail";
  }

  function progressCallback(object) {
//     kony.print("Object sync progresscallback :" + JSON.stringify(object));
    Form1.objsynclbl.text="progresscallback";
  }

  try {
    var syncObject = new kony.sdk.KNYObj(contactObject);
    var syncOptions = {};
    syncOptions.syncType = "fullSync";

    syncObject.startSync(syncOptions, successCallback,
                         failureCallback, progressCallback);
  } catch (err) {
//     kony.print("Exception occurred while object sync :" + JSON.stringify(err));
//     alert("Exception occurred while object sync :" + JSON.stringify(err));
    Form1.objsynclbl.text="fail";
  }
}


/* Metrics APIs */
function setAndGetFlowTag() {
  try{
     KNYMetricsService.setFlowTag("MyFlowTag");
    Form1.setlbl.text="success";
  }
  catch
  {
    Form1.setlbl.text="fail";
  }

  //getFlowTag();
}

function getFlowTag() {
  try{
    var flowtag = KNYMetricsService.getFlowTag();
    kony.print("Flow tag is: " + flowtag);
  //alert("Flow tag is: " + flowtag);
    Form1.getlbl.text="success";
  }
  catch{
     Form1.getlbl.text="fail";
  }
 
  
  
}

function flushEvents() {
  try{
    KNYMetricsService.flushEvents();
    kony.print("Events flushed");
    //alert("Events flushed");
    Form1.flushlbl.text="success";
  }
  catch{
    Form1.flushlbl.text="fail";
  }

}

function customMetrics() {
  KNYMetricsService.sendCustomMetrics("formID", {
    "metric": "metricdata"
  });
  try{
      kony.print("Custom Metrics sent");
    //alert("Custom Metrics sent");
    Form1.metricslbl.text="success"; 
  }
  catch{
    Form1.metricslbl.text="fail"; 
  }

}
    
function printMessage(msg) {
  kony.print(msg);
  alert(msg);
}
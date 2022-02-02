define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function binaryContactRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	binaryContactRepository.prototype = Object.create(BaseRepository.prototype);
	binaryContactRepository.prototype.constructor = binaryContactRepository;

	//For Operation 'createBinary' with service id 'createBinarybinaryContact8002'
	binaryContactRepository.prototype.createBinary = function(params, onCompletion){
		return binaryContactRepository.prototype.customVerb('createBinary', params, onCompletion);
	};

	//For Operation 'getBinary' with service id 'queryBinarybinaryContact1414'
	binaryContactRepository.prototype.getBinary = function(params, onCompletion){
		return binaryContactRepository.prototype.customVerb('getBinary', params, onCompletion);
	};

	//For Operation 'updateBinary' with service id 'updateBinarybinaryContact2335'
	binaryContactRepository.prototype.updateBinary = function(params, onCompletion){
		return binaryContactRepository.prototype.customVerb('updateBinary', params, onCompletion);
	};

	//For Operation 'deleteBinary' with service id 'deleteBinarybinaryContact8480'
	binaryContactRepository.prototype.deleteBinary = function(params, onCompletion){
		return binaryContactRepository.prototype.customVerb('deleteBinary', params, onCompletion);
	};

	return binaryContactRepository;
})
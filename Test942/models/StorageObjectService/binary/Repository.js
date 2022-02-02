define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function binaryRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	binaryRepository.prototype = Object.create(BaseRepository.prototype);
	binaryRepository.prototype.constructor = binaryRepository;

	//For Operation 'createBinary' with service id 'createBinarybinary6960'
	binaryRepository.prototype.createBinary = function(params, onCompletion){
		return binaryRepository.prototype.customVerb('createBinary', params, onCompletion);
	};

	//For Operation 'getBinary' with service id 'queryBinarybinary7167'
	binaryRepository.prototype.getBinary = function(params, onCompletion){
		return binaryRepository.prototype.customVerb('getBinary', params, onCompletion);
	};

	//For Operation 'updateBinary' with service id 'updateBinarybinary7543'
	binaryRepository.prototype.updateBinary = function(params, onCompletion){
		return binaryRepository.prototype.customVerb('updateBinary', params, onCompletion);
	};

	//For Operation 'deleteBinary' with service id 'deleteBinarybinary6673'
	binaryRepository.prototype.deleteBinary = function(params, onCompletion){
		return binaryRepository.prototype.customVerb('deleteBinary', params, onCompletion);
	};

	return binaryRepository;
})
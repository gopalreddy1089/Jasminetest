define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function FileRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	FileRepository.prototype = Object.create(BaseRepository.prototype);
	FileRepository.prototype.constructor = FileRepository;

	//For Operation 'createBinary' with service id 'createBinaryFile9913'
	FileRepository.prototype.createBinary = function(params, onCompletion){
		return FileRepository.prototype.customVerb('createBinary', params, onCompletion);
	};

	//For Operation 'getBinary' with service id 'queryBinaryFile7856'
	FileRepository.prototype.getBinary = function(params, onCompletion){
		return FileRepository.prototype.customVerb('getBinary', params, onCompletion);
	};

	return FileRepository;
})
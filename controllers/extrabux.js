var logger = require('../common/log').logger;
var extrabuxObj = require('../extrabux');

exports.extrabux = function(req, res){
  var params = req.query;
  var searchObj = [];
  
  if(!params.date){
    logger.error('error: 缺少参数!');
  }else{
    for(var i = 0; i < extrabuxObj.length; i++){
      var obj = extrabuxObj[i];
    	if(params['date'] == obj['date']){
    		searchObj.push(obj);
    	}
    };
    res.end(JSON.stringify(searchObj));
  }
}
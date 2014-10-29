/**
 * 请求路由
 */
// var extrabuxControllers = require(CONTROLLERS + 'extrabuxController')
var commonControllers = require(CONTROLLERS + 'commonController')

module.exports = function(app) {

	// dirlist by pagetitle.js
	app.get('/', commonControllers.dirList);

	// common route
	app.get('*', commonControllers.base)
}
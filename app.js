/**
 * app.js for nodeframe
 * @type {[type]}
 */

// 定义全局变量
global.BASEDIR = __dirname
global.VIEWS = global.BASEDIR + '/views/'
global.ASSETS = global.BASEDIR + '/assets/'
global.APPJS = global.ASSETS + 'js/appjs/'
global.COMMON = global.BASEDIR + '/common/'
global.CONF = global.BASEDIR + '/conf/'
global.ROUTERS = global.BASEDIR + '/routers/'
global.CONTROLLERS = global.BASEDIR + '/controllers/'
global.MODELS = global.BASEDIR + '/models/'
global.DATABASE = global.BASEDIR + '/database/'

// 常用模块
global.Module = {
	express: require('express'),
	http: require('http'),
	fs: require('fs'),
	path: require('path'),
	url: require('url'),
	ejs: require('ejs')
}

var express = Module.express
var http = Module.http
var path = Module.path

var config = require(CONF + 'config') // 配置文件
var common = require(COMMON + 'common')

// 创建应用及服务器
var app = express()
var server = Module.http.createServer(app)

// 日志相关
common.mkdir('logs')
var log = require(COMMON + 'log')
var logger = log.logger
logger.setLevel(config["logLevel"])
log.use(app) // 配置日志

app.use(express.compress())
app.use(express.favicon())

app.set('port', config["port"])

app.engine('.html', Module.ejs.__express)
app.set('view engine', 'html')
app.set('views', path.join(__dirname, 'views'))
app.set('assets', path.join(__dirname, 'assets'))

app.use(express.static(path.join(__dirname, 'assets')))

app.use(express.json())
app.use(express.urlencoded())
app.use(express.methodOverride())

// livereload
if(config['environment'] == 'production'){
	require(COMMON + '/livereload')
}

// 路由
var routes = require(ROUTERS + 'router')
routes(app)

server.listen(app.get('port'), function() {
	logger.info('Express server listening on port ' + app.get('port'))
})
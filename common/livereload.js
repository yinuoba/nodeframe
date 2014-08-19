/**
 * 实时预览
 * @type {[type]}
 */
var livereload = require('livereload')
var reloadserver = livereload.createServer()
reloadserver.watch(VIEWS)
reloadserver.watch(ASSETS)
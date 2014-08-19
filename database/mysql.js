/**
 * mysql数据库连接
 * @type {[type]}
 */
var mysql = require('mysql')
var _ = require('underscore')
var config = require('../conf/config')

var connection = mysql.createConnection(config['mySqlConf'])

connection.connect()

var selectSql = 'select * from flights'

connection.query(selectSql, function(err, rows, fields) {
  if (err) throw err

  // console.log(rows);
})

connection.end()
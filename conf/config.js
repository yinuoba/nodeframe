/**
 * 项目配置
 * @type {Object}
 */
module.exports = {
  "host": 'localhost',
  "port": 8080,
  "logLevel": "log",
  "baseData": {},
  "environment": 'production', // production 生产环境  development 开发环境
  "mySqlConf": { // mysql数据库配置
    host: 'localhost',
    user: 'root',
    password: '',
    database:'nodeframe',
    port: 3306
  }
};
/**
 * 项目用用方法
 */
var fs = require('fs')
var config = require('../conf/config')

module.exports = {
  /**
   * 创建文件夹
   * @param  {[type]} path
   * @return {[type]}
   */
  mkdir: function(path) {
    if (!fs.existsSync(path)) {
      fs.mkdir(path, function() {
        console.log(path + "文件夹创建成功！");
      });
    }
  },
  /**
   * 根据path获取对应js文件的路径
   * @param  {[type]} path [description]
   * @return {[type]}      [description]
   */
  getJsFilePath: function(path) {
    // 检测业务js文件是否存在
    var jsFile = config['appjs'] + path + '.js';
    if (fs.existsSync(jsFile)) {
      return '/js/appjs' + path + '.js';
    }
    return false;
  }
}
var common = require(COMMON + 'common')
var config = require(CONF + 'config')
var pageTitleObj = require(VIEWS + 'pagetitle')
var extrabuxObj = require(BASEDIR + 'extrabux')

/**
 * 通用路由
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
exports.base = function(req, res) {
  var method = req.method
  var url = req.url
  var tplpath = url.slice(1) // view的路径
  var reqpath = VIEWS + url + '.html' // 获取文件路径

  var tplArr = tplpath.split('/')
  var appName = tplArr[0] // 取appname

  tplArr.shift()

  // 取得里层目录
  var innerPath = tplArr.join('/')

  // 从配置中获取页面title
  var pageTitle = pageTitleObj[appName][innerPath] || "鑫合汇"

  // 如果对应目录的文件存在，则渲染文件
  fs.exists(reqpath, function(exists) {
    if (!exists) {
      res.writeHead(404, {
        'Content-Type': 'text/plain'
      });
      res.write("This request URL " + tplpath + " was not found on this server.")
      res.end()
    } else {
      var data = {
        title: pageTitle,
        path: url,
        environment: config['environment'],
        jsFile: false
      }

      // 根据当前url获取对应appjs的路径
      data['jsFile'] = common.getAppjsPath(url);

      // extrabux路由
      if (reqpath.indexOf('extrabux') !== -1) {
        data['extraData'] = extrabuxObj
      }

      res.render(tplpath, data)
    }
  })
}

/**
 * dirList 目录列表
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
exports.dirList = function(req, res) {
  var method = req.method
  var url = req.url
  var tplpath = url.slice(1) // view的路径

  res.render(tplpath, {
    pageTitleObj: pageTitleObj
  })
}
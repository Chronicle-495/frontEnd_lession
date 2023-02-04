1.  npm init    初始化项目文件,
输入项目名称, 版本号, 描述, 入口文件,
测试命令, git仓库, 关键字, 作者, 许可证,
输入 yes 确认, 生成package.json文件

2. ES6 转译为 ES5, 使用babel,
https://babel.dev/, 官网, 打开文档, 选Presets查看标准,
在项目中新建.babelrc文件, 配置转码标准
{
  "presets": []
}
安装babel, npm i babel-preset-env --save-dev, 囊括所有规则的规则集(推荐)
--save-dev 是安装在本文件夹, 可能会出一些警告不过无所谓, 安装好, package.json会出现
"devDependencies": {
    "babel-preset-env": "^1.7.0"
 }
 "babel-preset-env" 保存在.babelrc文件的presets数组中
接下来安装babel-cli, npm i babel-cli --save-dev
package.json, 出现babel-cli说明安装成功.
在package的scripts中配置新建"build": "babel app.js -o bundle.js"
意思是babel app.js转译app.js文件, -o bundle.js输出到bundle.js文件中
命令行输入 npm run build, 会在项目文件夹下生成bundle.js文件, 里面是转译后的代码
bundle.js就出现了(-o的全称是 --out-file)
---------------------------------------------
或者 babel src -d lib, 会把src文件夹下的所有文件转译到lib文件夹下
在package.json的script中加入"script-name": "babel-node ./app.js",
命令行输入 npm run script-name, 即可成功输出结果
这个操作也可用node执行, 进入所在文件夹, 输入node app.js, 即可输出结果
也可用idea自带终端, 甚至在文件上右键, 选择run, 也可以输出结果
babel register可以自动转译,
babel core转译具体函数, 不需要下载, ES2015就是ES6
ES6新api不会被转码, 要用babel-polyfill插件转译, 本地模块
require或import均可
其实这些也可以用官网的在线转码器, 但是这样不够灵活
浏览器, 可用text/babel + CDN的方式，主义，这将不再是js
另一种转码器traceur, 用得少
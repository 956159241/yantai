## node 环境初始化(系统环境 win10)
1. 设置NPM模块安装路径
npm set prefix "D:\nodejs\global"

2. 设置NPM缓存路径
npm set cache "D:\nodejs\cache"

3. 基本依赖库安装(使用初始安装源**npm** https://registry.npmjs.org/)
npm install -g babel babel-core bower browser-sync grunt-cli babel-runtime babel-plugin-transform-runtime  babel-preset-es2015 vue vue-cli vue-component-compiler vue-hot-reload-api vueify vueify-insert-css vue-touch vuex jquery hammerjs gulp html-minifier

4. 全局安装NPM源管理工具
npm install -g nrm

5. 切换使用CNPM
nrm use cnpm

6. 设置http代理(针对被墙下载地址)
npm set proxy http://server:port
npm set https-proxy http://server:port

7. NPM环境变量设置(建议在系统高级设置里修改环境变量)
setx /S system NODE_PATH "NODE_PATH=D:\Program Files\nodejs\global;D:\Program Files\nodejs\global\node_modules"
setx /S system "%PATH%;D:\Program Files\nodejs\global;"

## 项目环境初始化
1. WEB端semantic初始化
> 1. cd ${project}
> 2. npm install -d (可切换**CNPM**，反复运行，直到全部安装完成)
> 3. npm install semantic-ui --save
> 4. Express (Set components and output folder)
> 5. Where should we output Semantic UI? (dist/) ../app/resources/semantic/
> 6. cd semantic
> 7. gulp build
2. APP端(待完善)

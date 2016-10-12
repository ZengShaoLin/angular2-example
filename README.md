## Angular2 Example

例子使用ES6撰写，并使用[gulp-babel](https://github.com/babel/gulp-babel)转换为ES5。

使用
------

使用npm全局安装[Gulp](https://github.com/gulpjs/gulp)：

    npm install gulp -g

将项目克隆到本机上：

    git clone git@github.com:ZengShaoLin/angular2-example.git

进入项目根目录，安装组件：

    cd angular2-example
    npm install

安装完成后选择要预览的例子（可指定端口，默认端口为3000）：
    
    gulp serve --example=hero [--port=8100]

`--example`为必填参数，目前可查看的例子有`quickstart`、`hero`。
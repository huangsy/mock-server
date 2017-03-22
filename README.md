# Mock Server

mock反向代理服务器

### 设置代理

1. 安装chrome浏览器插件SwitchyOmega
2. 选项->情景模式->新建情景模式...
3. 随意填写名称，如mock-server，选择代理服务器，创建
4. 代理协议: http，代理服务器: 127.0.0.1，代理端口: 3002
5. 情景模式->auto switch->添加条件
6. 条件类型: 域名通配符，条件设置: www.taobao.com，情景模式: mock-server
7. 点击应用选项，即可保存成功

### 启动本地代理

    $ git clone https://github.com/huangsy/mock-server
    $ cd mock-server
    $ npm install
    $ npm link
    $ mock-server start

### 命令说明

##### mock-server mock

静态mock，创建数据文件，不会启动服务器，如果只使用静态mock，不需要设置代理

##### mock-server start

启动代理服务器

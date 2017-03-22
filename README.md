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

### mock.json说明

基本格式为

    {
        "host": "www.taobao.com",
        "path": "/Users/huangsy/work/mock-test/data",
        "api": {
            "item": [
                {
                    "name": "name",
                    "type": "string",
                    "length": 8
                },
                {
                    "name": "date",
                    "type": "date",
                    "length": "1"
                }
            ],
            "bill.json": [
                {
                    "name": "items",
                    "type": "item",
                    "length": 8
                }
            ]
        }
    }

##### host

代理域名，跟SwitchyOmega中条件设置的域名一致

##### path

数据仓库地址，默认为当前路径

##### api

接口列表

1. key为接口名称或数据类型，默认以.json为后缀为接口名称，其他为数据类型
2. name为字段名称，type为字段类型(string, number, date, 自定义)，length为字段长度

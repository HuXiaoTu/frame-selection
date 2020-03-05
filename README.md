# frame-selection
> 一个vue框选功能插件，支持点击和拉框选中
===========================

## 使用

- ``` npm i frame-selection ```  //安装包资源

### 全局注册方式
- //main.js中引入
``` JavaScript
    import frame-selection from 'frame-selection'
    Vue.use(frame-selection)
```
- //*.vue中 直接使用
``` JavaScript
    <frame-selection :createOption="op" :AxisX="AxisX" :AxisY="AxisY" @selectCell="getData" ></frame-selection>
    export default {
        data() {
            return {
                "op" : {
                    cellWidth: 17,
                    cellHeight: 17,
                    maxWidth: 500,
                    title: '高度/时间'
                },
                AxisX:[1,2,3],
                AxisY:[100,200,300]
            }
        },
        methods:{
            getData(value){
                console.log(value)
            }
        }
    }
```
### 单独使用
``` JavaScript
    <template>
        <frame-selection :createOption="op" :AxisX="AxisX" :AxisY="AxisY" @selectCell="getData" ></frame-selection>
    </template>
    import FrameSelection from 'frame-selection'
    export default {
        data() {
            return {
                "op" : {
                    cellWidth: 17,
                    cellHeight: 17,
                    maxWidth: 500,
                    title: '高度/时间'
                },
                AxisX:[1,2,3],
                AxisY:[100,200,300]
            }
        },
        methods:{
            getData(value){
                console.log(value)
            }
        },
        components:{
            FrameSelection,
        }
    }
```

## Options && Methods

### Options

属性 | 说明 | 例子
-|-|-
cellWidth | 每个小格子的宽度 (Number) | 17 |
cellHeight | 每个小格子的高度 (Number) | 17 |
maxWidth | 格子区域的最大宽度，超出产生滚动条(Number) | 500 |
title | 功能提示信息(String) | 高度/时间 |
AxisX | X轴方向数据列表(Array) | [01,02,03] |
AxisY | Y轴方向数据列表(Array) | [100,200,300] |
defaultSelectCellBox | 设置默认 已选择的格子(Array) |  |
usableBox | 设置默认 已选择的格子(Array) | [[01,200],[02,100]] |

### Methods

事件名称 | 说明 | 参数
-|-|-
selectCell | 当参数被选中或者取消时触发 | 当前选中的值(Array) |
mousedownMethods | 当鼠标按下时触发 | event |
mouseupMethods | 当鼠标抬起时触发 | event |
mouseleaveMethods | 当鼠标离开区域时触发 | event |

## 二次开发

-  ``` npm install ```          //安装node运行环境

-  ``` npm run dev ```          //启动项目

-  ``` npm run build ```        //打包项目

## 仓库地址

[https://github.com/HuXiaoTu/frame-selection](https://github.com/HuXiaoTu/frame-selection "GitHub")

## 目录结构描述
```js
    ├─assets                静态文件
    └─frameSelection        组件所在区域
```



## V1.1.0 版本内容更新
1. 增加事件回调函数
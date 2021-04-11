# frame-selection
> 一个vue框选功能插件，支持点击和拉框选中

> [GitHub项目地址](https://github.com/HuXiaoTu/frame-selection "GitHub")

> 欢迎留言沟通: 13676373110@163.com

## demo演示
![](http://www.qxxwss.cn/frame-selection.gif)

## 使用

- ``` npm install frame-selection ```  //安装包资源

### 全局注册方式
``` JavaScript
    //main.js中引入
    import frame-selection from 'frame-selection'
    Vue.use(frame-selection)
```
``` JavaScript
    //*.vue中 直接使用
    <frame-selection 
        :AxisX="AxisX" 
        :AxisY="AxisY" 
        @selectCell="getData" >
    </frame-selection>
    export default {
        data() {
            return {
                AxisX:[1,2,3],
                AxisY:[100,200,300]
            }
        },
        methods:{
            // 当选中格子时触发
            getData(value){
                console.log(value)
            }
        }
    }
```
### 单独使用
``` JavaScript
    //*.vue中 直接使用
    <template>
        <frame-selection 
            :AxisX="AxisX" 
            :AxisY="AxisY" 
            @selectCell="getData" >
        </frame-selection>
    </template>
    // 引入组件
    import FrameSelection from 'frame-selection'
    export default {
        data() {
            return {
                AxisX:[1,2,3],
                AxisY:[100,200,300]
            }
        },
        methods:{
            // 当选中格子时触发
            getData(value){
                console.log(value)
            }
        },
        // 注册组件
        components:{
            FrameSelection,
        }
    }
```

## Options && Methods

### Options

属性 | 说明 | 例子| 默认值 |
-|-|-|-
cellWidth | 每个小格子的宽度 (Number) | 17 | 17 |
cellHeight | 每个小格子的高度 (Number) | 17 | 17 |
maxWidth | 格子区域的最大宽度，超出产生滚动条(Number) | 200 | 200 |
maxHeight | 格子区域的最大高度，超出产生滚动条(Number) | 200 | 200 |
title | 功能提示信息(String) | 高度/时间 | 无 |
AxisX | X轴方向数据列表(Array) | [01,02,03] | 无 |
AxisY | Y轴方向数据列表(Array) | [100,200,300] | 无 |
defaultSelectCellBox | 设置默认 已选择的格子(Array) | [[01,100],[01,200],[01,300]] | 无 |
usableBox | 设置默认 可选择的格子，默认全部可选(Array) | ["01,200","02,100"] | 全部可选 |
clearBtn | 是否显示清空按钮 | false | false

### Methods

事件名称 | 说明 | 参数
-|-|-
selectCell | 当参数被选中或者取消时触发 | 当前选中的值(Array) |
mousedownMethods | 当鼠标按下时触发 | event |
mouseupMethods | 当鼠标抬起时触发 | event |
mouseleaveMethods | 当鼠标离开区域时触发 | event |
clearAll | 点击清空按钮触发 | 无

## 二次开发

-  ``` npm install ```          //安装node运行环境

-  ``` npm run dev ```          //启动项目

-  ``` npm run build ```        //打包项目

## 仓库地址

GitHub项目地址[https://github.com/HuXiaoTu/frame-selection](https://github.com/HuXiaoTu/frame-selection "GitHub")

## 目录结构描述
```js
    ├─assets                    静态文件
    └─frameSelection            组件所在区域
```



#### V1.1.0 版本内容更新
1. 增加事件回调函数
#### V1.1.9 版本内容更新
1. 修改传参方式 优化代码
#### V1.1.15 版本内容更新
1. 优化数据结构
2. 增加最大高度定义参数
#### V1.1.17 版本内容更新
1. 增加清空按钮&&清空事件
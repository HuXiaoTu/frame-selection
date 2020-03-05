<template>
    <div class="cellBox">
        <div class="cellBoxTop">{{createOption.title}}</div>
        <div class="cellBoxContetn" ref="boxHeight">
            <!-- 高度显示 -->
            <div class="cellBoxContetnLeft" ref="heightList"></div>
            <div class="cellBoxContetnAuto scroll" ref="bigBox">
                <!-- 所有的格子 -->
                <ul class="cellBoxContetnItem" ref="cellBox"></ul>
                <!-- 时效显示 -->
                <div ref="prescriptionList"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FrameSelection',
    props: {
        // Y轴数据
        AxisX: {
            type: Array,
            default: () => {
                return []
            }
        },
        // X轴数据
        AxisY: {
            type: Array,
            default: () => {
                return []
            }
        },
        // 设置默认 已选择的格子
        defaultSelectCellBox: {
            type: null,
        },
        // 设置默认 可选中的盒子
        usableBox: {
            type: null,
            default: 'all'
        },
        // 默认选项设置
        createOption: {
            type: Object,
            default: () => {
                return {
                    // 小方格宽度
                    cellWidth: 17,
                    // 小方格高度
                    cellHeight: 17,
                    // 滚动宽度
                    maxWidth: 500,
                    // 提示信息
                    title: ''
                }
            }
        },
    },
    data() {
        return {
            // 结果数组
            resArr: [],
        };
    },
    methods: {
        // 添加格子
        addCell() {
            let AxisX = this.AxisX;       // 时效
            let AxisY = this.AxisY;     // 高度
            let usableBox = this.usableBox              // 可选值
            let width = this.createOption.cellWidth;                 // 格子宽度
            let height = this.createOption.cellHeight;               // 格子高度

            let cellBox = this.$refs.cellBox;                   // 格子盒子
            let heightList = this.$refs.heightList;             // Y轴盒子
            let prescriptionList = this.$refs.prescriptionList; // X轴盒子


            // 初始化格子盒子
            for (let i = 0; i < AxisY.length; i++) {
                for (let j = 0; j < AxisX.length; j++) {
                    let li = document.createElement('li');
                    li.setAttribute('data', `${AxisX[j]},${AxisY[i]}`);
                    li.setAttribute('title', `${AxisX[j]},${AxisY[i]}`);
                    li.classList.add('cellItemBox');
                    if (usableBox !== "all") li.classList.add("disable");
                    li.style.cssText = `height:${height}px;width:${width}px;`;

                    cellBox.appendChild(li);
                }
            }
            // 初始化X轴盒子
            for (let i = 0; i < AxisX.length; i++) {

                let span = document.createElement('span');
                span.innerText = AxisX[i];
                span.style.cssText = `height:${height}px;width:${width}px;display:inline-block;text-align:center;`

                prescriptionList.appendChild(span);

            }
            // 初始化Y轴盒子
            for (let i = 0; i < AxisY.length; i++) {
                let span = document.createElement('span');
                span.innerText = AxisY[i];
                span.style.cssText = `height:${height}px;line-height:${height}px;`;

                heightList.appendChild(span);
            }

            // 监听各类事件监听
            this.addBoxSelect();

            // 更改盒子大小
            this.setBoxSize();
        },
        //更改盒子大小
        setBoxSize() {
            let box = this.$refs.cellBox;
            let prescriptionList = this.$refs.prescriptionList;
            let bigBox = this.$refs.bigBox;
            let boxHeight = this.$refs.boxHeight;
            // 获得默认参数
            let { cellWidth, cellHeight, maxWidth } = this.createOption;

            let width = (this.AxisX.length * cellWidth) + 2 + 'px';
            let height = (this.AxisY.length * cellHeight) + 'px';

            let bigHeight = ((this.AxisY.length + 1) * cellHeight) + 4 + 'px';

            box.style.cssText = `height:${height};width:${width};`;
            prescriptionList.style.cssText = `width:${width};height:${cellHeight};`;

            bigBox.style.cssText = `height:${bigHeight};width:${maxWidth}px;`;
            boxHeight.style.cssText = `height:${bigHeight};`;
        },
        // 添加格子的事件监听
        addBoxSelect() {
            let that = this;
            this.$nextTick(() => {
                let ele = this.$refs.cellBox;
                let reactArea = {
                    startX: 0,
                    startY: 0,
                    endX: 0,
                    endY: 0
                }
                // 判定为点击还是框选
                let firstTime, lastTime, isMouseDown = false;
                //将元素定位改为relative
                ele.style.position = 'relative';

                ele.addEventListener('mousedown', function (e) {
                    // 存储开始的坐标点
                    reactArea.startX = e.layerX;
                    reactArea.startY = e.layerY;
                    // 记录开始状态
                    isMouseDown = true;

                    // 鼠标按下
                    that.$emit('mousedownMethods', e);

                    firstTime = new Date().getTime();
                    ele.addEventListener('mousemove', moveHander)
                })

                ele.addEventListener('mouseup', function (e) {
                    lastTime = new Date().getTime();
                    isMouseDown = false;

                    // 鼠标抬起
                    that.$emit('mouseupMethods', e);

                    // 判断书否为点击状态
                    if (lastTime - firstTime < 200) {
                        ele.removeEventListener('mousemove', moveHander);
                        // console.log('我是点击')
                        that.selectBox(e);

                    } else {
                        // console.log('我执行了框选事件');
                        that.handleSelect();
                        ele.removeEventListener('mousemove', moveHander);
                    }
                });
                // 鼠标移出 选中离开之前的默认选中项
                ele.addEventListener('mouseleave', function (e) {
                    // 鼠标离开区域
                    that.$emit('mouseleaveMethods', e);

                    // 判断是否为down 状态下移出的
                    if (isMouseDown) {
                        that.handleSelect();
                        ele.removeEventListener('mousemove', moveHander);
                    }
                    isMouseDown = false;
                })
                // 移动处理函数
                function moveHander(e) {
                    let X = e.layerX;
                    let Y = e.layerY;
                    // if (X % 5 == 0 || Y % 5 == 0) {
                    let allActive = [];
                    reactArea.endX = X;
                    reactArea.endY = Y;
                    let leftValue = 0;
                    let topValue = 0;
                    let widthValue = Math.abs(reactArea.startX - reactArea.endX)
                    let heightValue = Math.abs(reactArea.startY - reactArea.endY)

                    if (reactArea.startX > reactArea.endX) {
                        leftValue = reactArea.endX
                    } else {
                        leftValue = reactArea.startX
                    }
                    if (reactArea.startY > reactArea.endY) {
                        topValue = reactArea.endY
                    } else {
                        topValue = reactArea.startY
                    }

                    let children = ele.querySelectorAll('.cellItemBox')

                    for (let i = 0; i < children.length; i++) {
                        // 每个li元素的宽高
                        let childrenHeight = children[i].getBoundingClientRect().height
                        let childrenWidth = children[i].getBoundingClientRect().width
                        //每个li元素的位置
                        let offsetLeft = children[i].offsetLeft
                        let offsetTop = children[i].offsetTop
                        //每个li元素的宽高
                        let endPositionH = childrenHeight + offsetTop
                        let endPositionW = childrenWidth + offsetLeft

                        //选择区域在元素体内 跳过
                        let requireBoxIn = offsetTop < topValue && offsetLeft < leftValue && offsetTop + childrenHeight > topValue + heightValue && offsetLeft + childrenWidth > leftValue + widthValue
                        if (requireBoxIn) return;

                        //五个条件满足一个就可以判断被选择
                        //一是右下角在选择区域内
                        let require1 = endPositionH > topValue && endPositionW > leftValue && endPositionH < topValue + heightValue && endPositionW < leftValue + widthValue
                        //二是左上角在选择区域内
                        let require2 = offsetTop > topValue && offsetLeft > leftValue && offsetTop < topValue + heightValue && offsetLeft < leftValue + widthValue
                        //三是右上角在选择区域内
                        let require3 = offsetTop > topValue && offsetLeft + childrenWidth > leftValue && offsetTop < topValue + heightValue && offsetLeft + childrenWidth < leftValue + widthValue
                        //四是左下角在选择区域内
                        let require4 = offsetTop + childrenHeight > topValue && offsetLeft > leftValue && offsetTop + childrenHeight < topValue + heightValue && offsetLeft < leftValue + widthValue


                        // 六 两个方向 “中” 选中
                        // 上下
                        let require5 = topValue < offsetTop && topValue + heightValue > endPositionH && leftValue > offsetLeft && leftValue + widthValue < endPositionW;
                        // 左右
                        let require6 = leftValue < offsetLeft && leftValue + widthValue > endPositionW && topValue > offsetTop && topValue + heightValue < endPositionH;

                        // 七 四个角的 “凹凸” 选中
                        // 上
                        let require7 = topValue + heightValue > offsetTop && topValue + heightValue < endPositionH && offsetLeft < leftValue && endPositionW > leftValue + widthValue;
                        // 下
                        let require8 = topValue > offsetTop && leftValue > offsetLeft && topValue < endPositionH && leftValue + widthValue < endPositionW;
                        // 左
                        let require9 = topValue > offsetTop && topValue + heightValue < endPositionH && leftValue + widthValue > offsetLeft && leftValue + widthValue < endPositionW;
                        // 右
                        let require10 = topValue > offsetTop && topValue + heightValue < endPositionH && leftValue > offsetLeft && leftValue < endPositionW;

                        if (require1 || require2 || require3 || require4 || require5 || require6 || require7 || require8 || require9 || require10) {

                            if (children[i].classList.contains("disable")) return;

                            children[i].classList.add('selectedBox');
                        } else {
                            children[i].classList.remove('selectedBox');
                        }
                        // }
                    }
                }
            })
        },
        // 框选 抛出数据
        handleSelect() {
            this.resArr = [];
            let arr = [];
            let arrChild = this.$refs.cellBox.childNodes;

            // let arrChild = document.querySelectorAll('.cellItemBox');

            for (var i = 0; i < arrChild.length; i++) {
                if (arrChild[i].classList.contains('selectedBox')) {
                    arrChild[i].classList.remove('selectedBox');
                    arrChild[i].classList.add('active');
                }
                if (arrChild[i].classList.contains('active')) {
                    arr.push(arrChild[i].getAttribute('data').split(','))
                }
            }

            this.resArr = arr;
            this.$emit("selectCell", arr);
        },
        // 点击 抛出数据
        selectBox(e) {

            // 如果点击是空div 和空text 就跳过
            if (e.target.nodeName === "DIV") return;

            let flg = true;
            let resArr = JSON.parse(JSON.stringify(this.resArr));
            let box = e.target;
            if (!box.getAttribute("data")) return
            let val = box.getAttribute("data").split(",");
            // 判断如果 有disable类名 则禁止点击
            let disable = box.classList.contains("disable");
            if (disable) return;

            if (resArr.length !== 0) {
                for (var i = 0; i < resArr.length; i++) {
                    if (resArr[i].join() == val.join()) {
                        resArr.splice(i, 1);
                        box.classList.remove("selectedBox");
                        box.classList.remove("active");
                        flg = false;
                        break;
                    }
                }
            }

            if (flg) {
                resArr.push(val);
                box.classList.add("active");
            }
            this.resArr = resArr;
            this.$emit("selectCell", resArr);
        },

        // 设置默认 可选中的盒子
        defaultBox(value) {
            let deCell = value;
            this.$nextTick(() => {
                // 所有的数据格子
                let allcell = this.$refs.cellBox.childNodes;

                for (var i = 0; i < allcell.length; i++) {
                    if (allcell[i].nodeName == "#text") continue;
                    if (deCell === "all") {
                        allcell[i].classList.remove("disable");
                        continue;
                    };
                    if (deCell.length == 0) {
                        allcell[i].classList.contains('active') ? '' : allcell[i].classList.add("disable");
                        continue;
                    }
                    for (var j = 0; j < deCell.length; j++) {
                        if (allcell[i].attributes["data"].nodeValue == deCell[j]) {
                            allcell[i].classList.remove("disable");
                        }
                    }
                }
            });
        },
        // 设置默认 已选择的格子
        defaultActive(value) {
            // 传来默认显示的格子数据
            let deCell = value;
            this.$nextTick(() => {
                // 所有的数据格子
                let allcell = this.$refs.cellBox.childNodes;

                for (var i = 0; i < allcell.length; i++) {
                    if (allcell[i].nodeName == "#text") continue;
                    allcell[i].classList.remove("active");
                    for (var j = 0; j < deCell.length; j++) {
                        if (allcell[i].attributes["data"].nodeValue == deCell[j].join()) {
                            allcell[i].classList.remove("disable");
                            allcell[i].classList.add("active");
                        }
                    }
                }
            });

            this.resArr = deCell;
        },
    },
    mounted() {
        // 新建格子
        this.addCell();
    },
    watch: {
        // 如果有默认数据 进行绘制
        defaultSelectCellBox(value) {
            // console.log('我是添加默认active')
            this.defaultActive(value);
        },
        usableBox(value) {
            // console.log('我是添加可选中状态')
            this.defaultBox(value)
        }
    }
};
</script>
<style lang="scss" scoped>
.cellBox {
    display: inline-block;
    flex-wrap: wrap;
    flex-direction: column;
    font-size: 12px;
    .cellBoxTop {
        height: 20px;
        width: 100%;
        font-size: 14px;
        text-align: left;
        padding-left: 15px;
    }
    .cellBoxContetn {
        position: relative;
        overflow: hidden;
        .cellBoxContetnLeft {
            width: 50px;
            float: left;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            > span {
                width: 100%;
            }
        }
        .cellBoxContetnAuto {
            float: left;
            overflow: hidden;
            overflow-x: scroll;
            .cellBoxContetnItem {
                width: 189px;
                display: flex;
                flex-wrap: wrap;
                top: 0;
                left: 0;
                border: 1px solid black;
                border-bottom: none;
                border-right: none;
            }
        }
    }
}
</style>
<style lang="scss">
.cellItemBox {
    /* width: 17px;
    height: 17px; */
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    box-sizing: border-box;
    cursor: pointer;
}
.active {
    background-color: #588dc8;
    border: 1px solid #fff;
    cursor: pointer;
}
.disable {
    background-color: rgba(204, 204, 204, 0.5);
    cursor: no-drop;
}
.selectedBox {
    background-color: #409eff;
    border: 1px solid #fff;
    cursor: pointer;
}

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
.scroll::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    background-color: transparent;
}

/*定义滚动条轨道 内阴影+圆角*/
.scroll::-webkit-scrollbar-track {
    /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
    border-radius: 10px;
    background-color: transparent;
}

/*定义滑块 内阴影+圆角*/
.scroll::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #ccc;
}
body {
    div,
    p,
    span,
    ul,
    li {
        box-sizing: border-box;
    }
    ul,
    li {
        padding: 0;
        margin: 0;
        list-style: none;
    }
}
</style>


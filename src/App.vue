<template>
    <div id="app">
        <frame-selection
            @clearAll="clearAll"
            title="标题"
            :AxisX="AxisX"
            :AxisY="AxisY"
            clearBtn
            @selectCell="selectCell"
        ></frame-selection>
    </div>
</template>

<script>
import FrameSelection from './frameSelection/frameSelection';
export default {
    name: 'app',
    data() {
        return {
            AxisX: [1, 2, 3, 4, 5, 6],
            AxisY: [100, 200, 300, 400, 500, 600]
        }
    },
    methods: {
        // 接受到的选中值
        selectCell(value) {
            console.info('ws value>>>>', value);
        },
        // 清空操作
        clearAll() {
            console.info('ws 清空操作>>>>');
        }
    },
    components: {
        FrameSelection,
    }
}
</script>

<style lang="scss">
body,
html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
#app {
    width: 100%;
    height: 100%;
    // background-color: #42b983;
    text-align: center;
}
</style>

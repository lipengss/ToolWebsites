<template>
  <div class="container">
    <div class="building-item" id="A">
      <div class="floor" id="A_1">1</div>
      <div class="floor" id="A_2">2</div>
      <div class="floor" id="A_3">3</div>
      <div class="floor" id="A_4">4</div>
      <div class="floor" id="A_5">5</div>
      <div class="floor" id="A_6">6</div>
    </div>
    <div class="building-item" id="B">
      <div class="floor" id="B_1">1</div>
      <div class="floor" id="B_2">2</div>
      <div class="floor" id="B_3">3</div>
      <div class="floor" id="B_4">4</div>
      <div class="floor" id="B_5">5</div>
      <div class="floor" id="B_6">6</div>
    </div>
    <div class="building-item" id="C">
      <div class="floor" id="C_1">1</div>
      <div class="floor" id="C_2">2</div>
      <div class="floor" id="C_3">3</div>
      <div class="floor" id="C_4">4</div>
      <div class="floor" id="C_5">5</div>
      <div class="floor" id="C_6">6</div>
    </div>
    <div class="building-item" id="D">
      <div class="floor" id="D_1">1</div>
      <div class="floor" id="D_2">2</div>
      <div class="floor" id="D_3">3</div>
      <div class="floor" id="D_4">4</div>
      <div class="floor" id="D_5">5</div>
      <div class="floor" id="D_6">6</div>
    </div>
    <div class="footer">
      <el-button type="success">开始</el-button>
      <el-button type="danger">暂停</el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';

const state = reactive({
  dataList: [
    {
      name: 'A栋',
      id: 'A',
      children: [
        {
          name: '一层',
          id: 1
        },
        {
          name: '二层',
          id: 2
        },
        {
          name: '三层',
          id: 3
        },
        {
          name: '四层',
          id: 4
        },
        {
          name: '五层',
          id: 5
        },
        {
          name: '六层',
          id: 6
        }
      ]
    },
    {
      name: 'B栋',
      id: 'B',
      children: [
        {
          name: '一层',
          id: 1
        },
        {
          name: '二层',
          id: 2
        },
        {
          name: '三层',
          id: 3
        },
        {
          name: '四层',
          id: 4
        },
        {
          name: '五层',
          id: 5
        },
        {
          name: '六层',
          id: 6
        }
      ]
    },
    {
      name: 'C栋',
      id: 'C',
      children: [
        {
          name: '一层',
          id: 1
        },
        {
          name: '二层',
          id: 2
        },
        {
          name: '三层',
          id: 3
        },
        {
          name: '四层',
          id: 4
        },
        {
          name: '五层',
          id: 5
        },
        {
          name: '六层',
          id: 6
        }
      ]
    },
    {
      name: 'D栋',
      id: 'D',
      children: [
        {
          name: '一层',
          id: 1
        },
        {
          name: '二层',
          id: 2
        },
        {
          name: '三层',
          id: 3
        },
        {
          name: '四层',
          id: 4
        },
        {
          name: '五层',
          id: 5
        },
        {
          name: '六层',
          id: 6
        }
      ]
    }
  ]
})

const cloneBuilds = computed(() => state.dataList)

let col = 0;
let row = 0;
let timer:any = null;


function showNextFloor() {
  const cells = document.querySelectorAll('.floor');
  // 计算当前元素的索引
  const currentIndex = row * cloneBuilds.value[0].children.length + col

  // 如果不是第一个元素，移除上一个元素的高亮
  if (currentIndex > 0) {
    const prevIndex = currentIndex - 1
    cells[prevIndex].classList.remove("light")
  } else {
    // 如果是第一个元素，需要移除最后一个元素的高亮
    cells[cells.length - 1].classList.remove("light")
  }

  // 高亮当前元素
  cells[currentIndex].classList.add("light")
  // 移动到下一个列
  col++;

  // 如果当前行的元素已经遍历完，移动到下一行
  if (col >= cloneBuilds.value[row].children.length) {
    col = 0; // 重置列索引
    row++; // 移动到下一行
  }

  // 如果所有行的元素都遍历完，重置行和列索引
  if (row >= cloneBuilds.value.length) {
    row = 0;
    col = 0;
  }
}

function resumeLoop() {
  timer = setInterval(showNextFloor, 1000)
}

function pauseLoop() {
  clearInterval(timer)
}

onMounted(() => {
  resumeLoop()
})

</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: calc(100% - 50px);
  padding: 100px;
  position: relative;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 60px;
  .building-item{
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    grid-gap: 40px;
    .floor{
      width: 100%;
      height: 60px;
      line-height: 60px;
      text-align: center;
      background-color: pink;
    }
    .light{
      background-color: green;
    }
  }

}
</style>

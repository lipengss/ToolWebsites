<template>
	<div class="container">
		<!--  @mousemove="onmousemove" -->
		<div class="wrapper" ref="wrapperRef">
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
		</div>
		<div class="wrapper-text">
			<div>wrapper: {{ state.wrapper.width }} * {{ state.wrapper.height }}</div>
			<div>X:{{ state.wrapper.layerX }} Y:{{ state.wrapper.layerY }}</div>
		</div>
	</div>
	<div v-if="state.show" class="tooltip" ref="tooltipRef">
		<div class="name">{{ state.tipData.name }}</div>
	</div>
	<div ref="xLineRef" class="x-line"></div>
	<div ref="yLineRef" class="y-line"></div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';

const xLineRef = ref();
const yLineRef = ref();

const wrapperRef = ref();
const tooltipRef = ref();

const state = reactive({
	show: false,
	tipData: {
		name: '',
	},
	wrapper: {
		width: 0,
		height: 0,
		layerX: 0,
		layerY: 0,
	},
});

function onmousemove(event: any) {
	const { layerX, layerY, target } = event;
	state.wrapper.layerX = layerX;
	state.wrapper.layerY = layerY;
	state.show = true;
	setLine();
	if (target.getAttribute('class') === 'box') {
		const { name } = target.dataset;
		state.tipData.name = name;
		setTimeout(() => {
			const { offsetWidth: toolTipWidth, offsetHeight: toolTipHeight } = tooltipRef.value;
			tooltipRef.value.style.left = `${layerX + 20}px`;
			tooltipRef.value.style.top = `${layerY + 20}px`;
			const distanceX = state.wrapper.width - layerX;
			if (distanceX < toolTipWidth) {
				tooltipRef.value.style.left = `${layerX - (toolTipWidth + 20)}px`;
			}
			const distanceY = state.wrapper.height - layerY;
			if (distanceY < toolTipHeight) {
				tooltipRef.value.style.top = `${layerY - (toolTipHeight + 20)}px`;
			}
		});
	} else {
		state.show = false;
	}
}

function setLine() {
	const { layerX, layerY } = state.wrapper;
	xLineRef.value.style.width = `${layerX}px`;
	xLineRef.value.style.top = `${layerY}px`;

	yLineRef.value.style.left = `${layerX}px`;
	yLineRef.value.style.height = `${layerY}px`;
}

function init() {
	const { offsetWidth, offsetHeight } = wrapperRef.value;
	state.wrapper.width = offsetWidth * 0.8;
	state.wrapper.height = offsetHeight * 0.8;

	const boxList = document.querySelectorAll('.box');
	boxList.forEach((box, index) => {
		box.setAttribute('data-name', `${index + 1}号房间`);
	});

	window.addEventListener('mousemove', (event: Event) => {
		onmousemove(event);
	});
}

onMounted(() => {
	init();
});
</script>
<style lang="scss" scoped>
.container {
	width: 100%;
	height: 100%;
	padding: 100px;
	position: relative;
	box-sizing: border-box;
	position: relative;
	background-color: pink;
	.wrapper {
		width: 100%;
		height: 100%;
		overflow: auto;
		box-sizing: border-box;
		padding: 20px;
		display: grid;
		grid-template-columns: repeat(auto-fill, 60px);
		grid-template-rows: repeat(auto-fill, 60px);
		grid-auto-flow: dense;
		grid-gap: 20px;
		background-color: antiquewhite;
		.box {
			height: 60px;
			background-color: skyblue;
			cursor: pointer;
		}
	}
	.wrapper-text {
		width: 200px;
		padding: 4px 10px;
		border-radius: 4px;
		border: 1px solid yellow;
		position: absolute;
		left: calc(50% - 100px);
		top: 40px;
		background-color: #fff;
	}
}
.tooltip {
	width: 200px;
	height: 240px;
	position: fixed;
	z-index: 100;
	border-radius: 4px;
	border: 1px solid #ccc;
	background-color: #fff;
	.name {
		font-size: 18px;
		font-weight: bold;
		text-align: center;
		line-height: 40px;
		background-color: aliceblue;
	}
}
.x-line,
.y-line {
	width: 1px;
	height: 1px;
	position: fixed;
	left: 0;
	top: 0;
	background-color: blue;
}

// .x-line {
// 	height: 1px;
// }
// .y-line {
// 	width: 1px;
// }
</style>

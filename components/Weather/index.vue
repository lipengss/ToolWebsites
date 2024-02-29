<template>
	<div class="wrapper">
		{{ state.data }}
	</div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import qs from 'qs';

const state = reactive({
	data: '',
});

const query = {
	key: 'ff03de30ff1c0ad671a12699414250e7',
	city: 110000,
};
async function getData() {
	const { data } = await useFetch('https://restapi.amap.com/v3/weather/weatherInfo?' + qs.stringify(query));
	state.data = data;
}

getData();
</script>
<style lang="scss" scoped>
.wrapper {
	width: 100%;
	height: 100%;
	background: linear-gradient(45deg, #237fca 58%, rgba(233, 241, 246, 0.91) 100%);
}
</style>

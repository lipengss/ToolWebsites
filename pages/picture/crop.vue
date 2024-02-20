<template>
	<TwoColumnLayout>
		<ElCheckboxGroup v-model="state.checked">
			<div v-for="item in state.list" :key="item.id">
				<ElCheckbox :label="item.id">
					{{ item.name }}
				</ElCheckbox>
			</div>
		</ElCheckboxGroup>
		<ElPagination
			v-model:current-page="state.pagination.current"
			v-model:page-size="state.pagination.pageSize"
			:page-sizes="[10, 20, 30, 40]"
			background
			layout="total, sizes, prev, pager, next, jumper"
			:total="state.pagination.total"
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
		/>
	</TwoColumnLayout>
</template>
<script setup lang="ts">
import { reactive, onMounted } from 'vue';
interface Item {
	id: number;
	name: string;
	selected: boolean;
	swicth: boolean;
}
interface State {
	list: Array<Item>;
	allList: Array<Item>;
	pagination: {
		current: number;
		pageSize: number;
		total: number;
	};
	checked: Array<string>;
}

const state: State = reactive({
	list: [],
	allList: [],
	pagination: {
		current: 1,
		pageSize: 10,
		total: 0,
	},
	checked: [],
});

// 数据
function getDataList() {
	const { current, pageSize } = state.pagination;
	const result: Array<Item> = [];
	const elements: Array<Item> = Array.from({ length: 50 }).map((item, index) => {
		return {
			id: index,
			name: `元素${index}`,
			selected: false,
			swicth: false,
		};
	});
	state.pagination.total = elements.length;
	for (let i = 0; i < elements.length; i += pageSize) {
		const chunk: Array<Item> = elements.slice(i, i + pageSize);
		result.push(chunk);
	}
	state.list = result[current - 1];
	state.allList = result;
	console.log(state);
}

// 页码
function handleSizeChange(size: number) {
	state.pagination.current = 1;
	state.pagination.pageSize = size;
	getDataList();
}
// 分页
function handleCurrentChange(page: number) {
	state.pagination.current = page;
	getDataList();
}

onMounted(() => {
	getDataList();
});
</script>

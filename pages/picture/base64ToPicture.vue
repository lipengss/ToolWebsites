<template>
	<TwoColumnLayout>
		<el-alert type="warning" :title="notions" :closable="false" class="mb10" />
		<el-card header="base64 转 图片">
			<div class="flex-between pt10 pb10">
				<el-input
					v-model="state.textarea"
					:rows="10"
					:autosize="{ minRows: 10, maxRows: 10 }"
					resize="none"
					placeholder="data:image/jpeg;base64,..."
					type="textarea"
				/>
			</div>
			<div class="flex-end mb10">
				<el-button :icon="Delete" type="danger" @click="onClearAll">清空所有</el-button>
			</div>
			<el-tooltip effect="dark" content="点击放大" placement="bottom">
				<el-image class="preview-image" :src="state.textarea" fit="cover" :preview-src-list="[state.textarea]">
					<template #error>
						<div class="image-slot">
							<el-icon><icon-picture /></el-icon>
						</div>
					</template>
				</el-image>
			</el-tooltip>
		</el-card>
	</TwoColumnLayout>
</template>
<script setup lang="ts">
const notions = '本工具不会把图片上传到服务器转换，而是在浏览器中执行。';

import { reactive } from 'vue';
import { Picture as IconPicture, Delete } from '@element-plus/icons-vue';

const state: PictureState = reactive({
	file: {
		name: '',
		size: 0,
		list: [],
	},
	textarea: '',
	radio: 'base64',
});

function onClearAll() {
	state.textarea = '';
	state.file.name = '';
	state.file.size = 0;
	state.file.list = [];
}
</script>
<style lang="scss" scoped>
.preview-image {
	width: 100%;
	height: 184px;
	border-radius: 6px;
	display: block;
	.image-slot {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		background: var(--el-fill-color-light);
		color: var(--el-text-color-secondary);
		font-size: 30px;
		.el-icon {
			font-size: 30px;
		}
	}
}
</style>

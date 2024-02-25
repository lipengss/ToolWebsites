<template>
	<TwoColumnLayout>
		<el-upload :show-file-list="false" class="mb10" drag :http-request="htttpRequest">
			<el-icon class="el-icon--upload"><upload-filled /></el-icon>
			<div class="el-upload__text">拖住到这里 或 <em>点击上传照片</em></div>
		</el-upload>
		<div class="flex-between mb10">
			<el-space>
				<el-input v-model="state.file.name" readonly placeholder="文件名" />
				<el-tag v-if="state.file.size" type="primary" round>{{ fileSize(state.file.size) }}</el-tag>
			</el-space>
			<el-space>
				<el-button :icon="Delete" type="danger" @click="onClearAll">清空所有</el-button>
			</el-space>
		</div>
		<el-image :src="state.textarea" fit="contain">
			<template #error>
				<div class="image-slot">
					<el-icon><icon-picture /></el-icon>
				</div>
			</template>
		</el-image>
	</TwoColumnLayout>
</template>
<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import { type UploadRequestOptions } from 'element-plus';
import { UploadFilled, Picture as IconPicture, Delete } from '@element-plus/icons-vue';
import { fileSize } from '~/assets/utils/tools';
import Cropper from 'cropperjs';

definePageMeta({
	title: '图片裁切',
	rank: 100,
});

const state: CropState = reactive({
	file: {
		name: '',
		size: 0,
		list: [],
	},
	textarea: '',
});

function initImage() {
	const image: HTMLImageElement | null = document.querySelector('.image');
	if (!image) return;
	const cropper = new Cropper(image, {
		aspectRatio: 16 / 9,
		crop(event) {
			console.log(event.detail.x);
			console.log(event.detail.y);
			console.log(event.detail.width);
			console.log(event.detail.height);
			console.log(event.detail.rotate);
			console.log(event.detail.scaleX);
			console.log(event.detail.scaleY);
		},
	});
}

function htttpRequest(options: UploadRequestOptions): XMLHttpRequest | Promise<unknown> {
	const { name, size } = options.file;
	state.file.name = name;
	state.file.size = size;
	const reader = new FileReader();
	reader.readAsDataURL(options.file);
	reader.onload = (event) => {
		if (event.target === null) return;
		state.textarea = event.target.result;
		state.file.list = [state.textarea];
	};
	return Promise.resolve(true);
}

function onClearAll() {
	state.textarea = '';
	state.file.name = '';
	state.file.size = 0;
	state.file.list = [];
}

onMounted(() => {
	initImage();
});
</script>

<style lang="scss" scoped>
.el-image {
	width: 100%;
	.image-slot {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		min-height: 400px;
		background: var(--el-fill-color-light);
		color: var(--el-text-color-secondary);
		font-size: 30px;
	}
}
</style>

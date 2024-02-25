<template>
	<TwoColumnLayout>
		<div class="flex-between mb10">
			<el-space>
				<el-input v-model="state.file.name" readonly placeholder="文件名" />
				<el-tag v-if="state.file.size" type="primary" round>{{ fileSize(state.file.size) }}</el-tag>
			</el-space>
			<el-space>
				<el-upload :show-file-list="false" :http-request="htttpRequest">
					<el-button type="primary" :icon="IconPicture">上传图片</el-button>
				</el-upload>
				<el-button :icon="Delete" type="danger" :disabled="!state.file.size" @click="onClearAll">清空所有</el-button>
			</el-space>
		</div>
		<div class="cropper-box">
			<img class="image" :src="state.file.imageSrc" alt="" />
		</div>
		<el-space>
			<el-button type="primary" @click="onHandlePicture('flip-horizontal')">
				<el-icon class="mr6"><svg-icon name="flip-horizontal" /></el-icon>
				水平翻转
			</el-button>
			<el-button type="primary" @click="onHandlePicture('flip-vertical')">
				<el-icon class="mr6"><svg-icon name="flip-vertical" /></el-icon>
				垂直翻转
			</el-button>
			<el-button-group>
				<el-button type="primary" @click="onHandlePicture('rotate-l')">
					<el-icon class="mr6"><svg-icon name="rotate-l" /></el-icon>
					左旋
				</el-button>
				<el-button type="primary" @click="onHandlePicture('rotate-r')">
					右旋
					<el-icon class="ml6"><svg-icon name="rotate-r" /></el-icon>
				</el-button>
				<el-button type="primary" @click="onHandlePicture('resetRotate')">
					<el-icon><svg-icon name="redo" /></el-icon>
				</el-button>
			</el-button-group>
			<el-input v-model.number="state.cropper.rotateStep" style="width: 60px">
				<template #suffix>°</template>
			</el-input>
			<el-button type="primary" @click="onCrop">
				<el-icon class="mr6"><svg-icon name="cutting" /></el-icon>
				图片裁切
			</el-button>
			<!-- <el-button-group>
				<el-button type="primary" :icon="Top" @click="onHandlePicture('moveTop')" />
				<el-button type="primary" :icon="Bottom" @click="onHandlePicture('movebottom')" />
			</el-button-group>
			<el-button-group>
				<el-button type="primary" :icon="Back" @click="onHandlePicture('moveLeft')" />
				<el-button type="primary" :icon="Right" @click="onHandlePicture('moveRight')" />
			</el-button-group> -->
		</el-space>
		<div class="crop-preview" id="crop-preview">{{ state.cropper.preview }}</div>
	</TwoColumnLayout>
</template>
<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import { type UploadRequestOptions } from 'element-plus';
import { UploadFilled, Picture as IconPicture, Delete, Top, Bottom, Back, Right } from '@element-plus/icons-vue';
import { fileSize } from '~/assets/utils/tools';
import defaultPicture from '~/assets/img/defaultPicture.jpg';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

definePageMeta({
	title: '图片裁切',
	rank: 100,
});

const state: CropState = reactive({
	file: {
		name: '',
		size: 0,
		imageSrc: defaultPicture,
	},
	cropper: {
		rotateStep: 10,
		cropPreview: '',
	},
});

let cropperInstance: Cropper | null = null;

function initCropper() {
	const image: HTMLImageElement | null = document.querySelector('.image');
	if (!image) return;
	const cropper = new Cropper(image, {
		aspectRatio: 16 / 9,
	});
	cropperInstance = cropper;
}
// 上传图片
function htttpRequest(options: UploadRequestOptions): XMLHttpRequest | Promise<unknown> {
	const { name, size } = options.file;
	state.file.name = name;
	state.file.size = size;
	const reader = new FileReader();
	reader.readAsDataURL(options.file);
	reader.onload = (event) => {
		if (event.target === null) return;
		const result = event.target.result;
		if (cropperInstance && typeof result === 'string') {
			state.file.imageSrc = result;
			cropperInstance.replace(result);
		}
	};
	return Promise.resolve(true);
}
// 图片操作
function onHandlePicture(type: string) {
	if (!cropperInstance) return;
	const { scaleX, scaleY, rotate, x, y } = cropperInstance.getData();
	switch (type) {
		case 'flip-horizontal':
			cropperInstance.scaleX(scaleX === 1 ? -1 : 1);
			break;
		case 'flip-vertical':
			cropperInstance.scaleY(scaleY === 1 ? -1 : 1);
			break;
		case 'rotate-l':
			cropperInstance.rotateTo(rotate - state.cropper.rotateStep);
			break;
		case 'rotate-r':
			cropperInstance.rotateTo(rotate + state.cropper.rotateStep);
			break;
		case 'resetRotate':
			cropperInstance.rotateTo(0);
			break;
		case 'moveTop':
			cropperInstance.moveTo(x, y + 1);
			break;
	}
}
// 图片裁切
function onCrop() {
	if (!cropperInstance) return;
	const cropPreview = document.getElementById('crop-preview');
	console.log(cropperInstance.getCroppedCanvas());
	cropPreview?.appendChild(cropperInstance.getCroppedCanvas());
	// state.cropper.cropPreview = ;
}

function onClearAll() {
	state.file.name = '';
	state.file.size = 0;
	if (cropperInstance) {
		cropperInstance.replace(defaultPicture);
	}
}

onMounted(() => {
	initCropper();
});
</script>

<style lang="scss" scoped>
.cropper-box {
	height: 400px;
	margin-bottom: 10px;
	.image {
		width: 100%;
		height: 100%;
	}
}
.crop-preview {
	width: 100%;
	height: 400px;
	overflow-x: auto;
}
</style>

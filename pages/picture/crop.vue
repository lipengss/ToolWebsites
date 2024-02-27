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
		<el-space wrap size="large">
			<el-button-group>
				<el-button type="primary" @click="onHandlePicture('flip-horizontal')">
					<el-icon class="mr6"><svg-icon name="flip-horizontal" /></el-icon>
					水平翻转
				</el-button>
				<el-button type="primary" @click="onHandlePicture('flip-vertical')">
					<el-icon class="mr6"><svg-icon name="flip-vertical" /></el-icon>
					垂直翻转
				</el-button>
			</el-button-group>
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
				<el-input
					v-model.number="state.cropper.rotateStep"
					style="width: 60px; height: 32px; border-top-left-radius: 0; border-bottom-left-radius: 0"
				>
					<template #suffix>°</template>
				</el-input>
			</el-button-group>
			<el-button type="primary" :loading-icon="Loading" :loading="state.loadingCrop" @click="onCrop">
				<el-icon class="mr6"><svg-icon name="cutting" /></el-icon>
				裁剪
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
		<el-divider></el-divider>
		<el-space>
			<el-button v-if="state.cropper.url" type="success" :icon="Download" :loading-icon="Loading" :loading="state.loadingDown" @click="downLoadImage">
				下载图片
			</el-button>
		</el-space>
		<div class="mt10">
			<el-image
				style="width: 100%; min-height: 400px"
				:src="state.cropper.url"
				:zoom-rate="1.2"
				:max-scale="7"
				:min-scale="0.2"
				:preview-src-list="state.cropper.urlList"
				:initial-index="4"
				fit="cover"
			/>
		</div>
	</TwoColumnLayout>
</template>
<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import { type UploadRequestOptions } from 'element-plus';
import { UploadFilled, Picture as IconPicture, Delete, Download, Top, Bottom, Back, Right, Loading } from '@element-plus/icons-vue';
import { fileSize } from '~/assets/utils/tools';
import defaultPicture from '~/assets/img/defaultPicture.jpg';
import { saveAs } from 'file-saver';
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
		url: '',
		urlList: [],
	},
	loadingCrop: false,
	loadingDown: false,
});

let cropperInstance: Cropper | null = null;

function initCropper() {
	const image: HTMLImageElement | null = document.querySelector('.image');
	if (!image) return;
	const cropper = new Cropper(image, {
		viewMode: 1,
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
	state.loadingCrop = true;
	const imageUrl = cropperInstance.getCroppedCanvas().toDataURL('image/jpeg');
	state.loadingCrop = false;
	state.cropper.url = imageUrl;
	state.cropper.urlList = [imageUrl];
}

// 下载图片
function downLoadImage() {
	if (!cropperInstance) return;
	state.loadingDown = true;
	cropperInstance.getCroppedCanvas().toBlob((blob) => {
		saveAs(blob, state.file.name);
		ElMessage.success('下载成功');
		state.loadingDown = false;
	});
}

function onClearAll() {
	state.file.name = '';
	state.file.size = 0;
	state.cropper.url = '';
	state.cropper.urlList = [];
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
</style>

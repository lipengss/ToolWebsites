<template>
	<GridItem size="1x1" disabled-contextmenu>
		<el-icon :size="38" color="#409eff" @click="onAdded"> <CirclePlusFilled /></el-icon>
	</GridItem>
	<ClientOnly>
		<Dialog v-model:visible="state.visible" title="添加应用">
			<el-tabs tab-position="left" v-model="state.activeTab">
				<el-tab-pane label="网址导航" name="website">
					<el-tag v-for="tag in tagList" :key="tag.value" :wrap="true">{{ tag.label }}</el-tag>
				</el-tab-pane>
				<el-tab-pane label="自定义图标" name="customIcons">
					<el-form :model="state.customIconForm" label-width="100px">
						<el-form-item label="名称" prop="name">
							<el-input v-model="state.customIconForm.name" placeholder="网站名称" :prefix-icon="Edit" />
						</el-form-item>
						<el-form-item label="地址" prop="path">
							<el-input v-model="state.customIconForm.path" placeholder="https://" :prefix-icon="Link">
								<template #append>
									<el-button @click="getWebsiteIcon">获取图标</el-button>
								</template>
							</el-input>
						</el-form-item>
						<el-form-item label="图标颜色">
							<ColorPicker :colorList="predefineColors" v-model:color="state.customIconForm.meta.bgColor" />
						</el-form-item>
						<el-form-item label="图标类型">
							<el-radio-group v-model="state.customIconForm.meta.type" size="large">
								<el-radio-button label="图标" value="icon" />
								<el-radio-button label="文字" value="text" />
								<el-radio-button label="图片" value="img" />
							</el-radio-group>
						</el-form-item>
						<el-form-item v-if="state.customIconForm.meta.type === 'text'" label="图标文字" prop="meta.type">
							<el-input v-model="state.customIconForm.meta.value" placeholder="图标文字" :prefix-icon="Edit" />
						</el-form-item>
						<!-- <el-form-item>
							<el-space>
								<GridItem
									name="图标"
									class="custom-item"
									:class="{ active: state.customIconForm.meta.type === 'img' }"
									:style="{ backgroundColor: state.customIconForm.meta.bgColor }"
									@click="onSelectIcon('img')"
								>
									<img :src="icoUrl" />
								</GridItem>
								<GridItem
									name="文字图标"
									class="custom-item"
									:class="{ active: state.customIconForm.meta.type === 'text' }"
									:style="{ backgroundColor: state.customIconForm.meta.bgColor }"
									@click="onSelectIcon('text')"
								>
									{{ state.customIconForm.meta.value }}
								</GridItem>
								<GridItem
									name="自定义图标"
									class="custom-item"
									:class="{ active: state.customIconForm.meta.type === 'icon' }"
									:style="{ backgroundColor: state.customIconForm.meta.bgColor }"
									@click="onSelectIcon('icon')"
								>
									<el-upload class="avatar-uploader" action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" :show-file-list="false">
										<img v-if="imageUrl" :src="imageUrl" class="avatar" />
										<el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
									</el-upload>
								</GridItem>
							</el-space>
						</el-form-item> -->
						<el-form-item>
							<el-button type="primary">保存</el-button>
							<el-button type="default">保存并继续</el-button>
						</el-form-item>
					</el-form>
				</el-tab-pane>
			</el-tabs>
		</Dialog>
	</ClientOnly>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useSettingsStore } from '~/stores/settings';
import { CirclePlusFilled, Link, Edit, Plus } from '@element-plus/icons-vue';
import { tagList, predefineColors } from '~/assets/utils/publicData';

const { setting } = storeToRefs(useSettingsStore());

const state = reactive({
	visible: false,
	activeTab: 'customIcons',
	customIconForm: {
		name: '',
		path: '',
		type: '',
		meta: {
			value: 'A',
			type: 'text',
			bgColor: '#FF4500',
			description: '',
		},
	},
});

async function getWebsiteIcon() {
	const { path } = state.customIconForm;
	const img = document.createElement('img');
	img.src = `${path}favicon.ico`;
}

const icoUrl = computed(() => {
	const { path } = state.customIconForm;
	if (path.endsWith('/')) {
		return path + 'favicon.ico';
	} else {
		return path + '/favicon.ico';
	}
});

function onSelectIcon(icon: string) {
	state.customIconForm.meta.value = icon;
}

function onAdded() {
	state.visible = true;
}
</script>
<style lang="scss" scoped>
.el-icon {
	width: 100%;
	height: 100%;
	background-color: var(--el-bg-color);
	cursor: pointer;
}
.el-tag {
	margin-right: 10px;
	margin-bottom: 10px;
}
.custom-item {
	border-radius: 8px;
	cursor: pointer;
}
.active {
	border: 1px solid var(--el-color-primary);
}
</style>

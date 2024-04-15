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
					<el-form :model="state.customIconForm">
						<el-form-item label="地址" prop="path">
							<el-input v-model="state.customIconForm.path" placeholder="https://" :prefix-icon="Link">
								<template #append>
									<el-button>获取图标</el-button>
								</template>
							</el-input>
						</el-form-item>
						<el-form-item label="名称" prop="name">
							<el-input v-model="state.customIconForm.name" placeholder="网站名称" :prefix-icon="Edit" />
						</el-form-item>
						<el-form-item label="图标颜色">
							<ColorPicker :colorList="predefineColors" v-model:color="state.customIconForm.meta.bgColor" />
						</el-form-item>
						<el-form-item label="图标文字">
							<el-input v-model="state.customIconForm.name" placeholder="网站名称" :prefix-icon="Edit" />
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
import { CirclePlusFilled, Link, Edit } from '@element-plus/icons-vue';
import { tagList, predefineColors } from '~/assets/utils/publicData';

const { setting } = storeToRefs(useSettingsStore());

const state = reactive({
	visible: false,
	activeTab: 'website',
	customIconForm: {
		name: '',
		path: '',
		type: '',
		meta: {
			icon: '',
			bgColor: '#fff',
			description: '',
		},
	},
});

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
</style>

<template>
	<Swiper direction="vertical" mousewheel :modules="[SwiperMousewheel]" id="swiper-container" @slideChange="onSlideChange">
		<SwiperSlide v-for="route in formatRouteList" :key="route.path">
			<Swiper
				:nested="true"
				direction="vertical"
				:modules="[SwiperScrollbar, SwiperFreeMode]"
				id="swiper-container-child"
				:freeMode="true"
				:scrollbar="true"
			>
				<SwiperSlide>
					<GirdLayout>
						<template v-if="route.path === '/'">
							<GridItem size="5x2" name="天气">
								<Weather />
							</GridItem>
							<GridItem size="5x2" name="日历">
								<Calendar />
							</GridItem>
							<GridItem size="5x2" name="下班倒计时">
								<OffWork />
							</GridItem>
						</template>
						<GridItem size="1x1" v-for="app in route.children" :name="app.name">
							<Application :app="app" />
						</GridItem>
					</GirdLayout>
				</SwiperSlide>
			</Swiper>
		</SwiperSlide>
	</Swiper>
</template>
<script setup lang="ts">
import { filterHoutWebSiteList } from '~/assets/website/index';
import { routeList } from '~/assets/utils/routeList';
import { storeToRefs } from 'pinia';
import { useSettingsStore } from '~/stores/settings';

const { appSlideIndex } = storeToRefs(useSettingsStore());

definePageMeta({ title: '首页' });

const formatRouteList = computed(() => {
	return routeList.map((route) => {
		if (route.path === '/') {
			route.children = filterHoutWebSiteList('/');
		} else {
			route.children = filterHoutWebSiteList(route.type);
		}
		return route;
	});
});

function onSlideChange(slide) {
	appSlideIndex.value = slide.activeIndex;
}

console.log(formatRouteList.value);
</script>
<style lang="scss" scoped>
#swiper-container,
#swiper-container-child {
	height: 100%;
}
</style>

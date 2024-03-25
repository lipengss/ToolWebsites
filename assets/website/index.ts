import { developers } from './developer';
import { storeToRefs } from 'pinia';
import { useSettingsStore } from '~/stores/settings';
import { orderBy } from 'lodash';

function filterHoutWebSiteList(type: string | string[]) {
	let result: Array<RouteItem> = [];
	if (typeof type === 'string') {
		result = developers.filter((item) => item.type.includes(type));
	}
	if (Array.isArray(type)) {
		result = developers.filter((item) => {
			if (item.type === 'string') {
				return type.includes(item.type);
			}
			if (Array.isArray(item.type)) {
				return item.type.some((some) => item.type.includes(some));
			}
		});
	}
	return sortWebRanks(result);
}

function sortWebRanks(webList: Array<RouteItem>) {
	const { setting } = storeToRefs(useSettingsStore());
	const { hotWebRanks } = setting.value;
	if (hotWebRanks && Object.keys(hotWebRanks).length) {
		const keys = Object.keys(hotWebRanks);
		webList.forEach((item) => {
			const { icon } = item.meta;
			if (keys.includes(icon)) {
				item.meta.rank = hotWebRanks[icon];
			}
		});
		const orderByList = orderBy(webList, 'meta.rank', 'desc');
		return orderByList;
	} else {
		return webList;
	}
}

export { developers, sortWebRanks, filterHoutWebSiteList };

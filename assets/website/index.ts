import { developers } from './developer';
import { storeToRefs } from 'pinia';
import { useSettingsStore } from '~/stores/settings';
function filterHoutWebSiteList(type: string | string[]): Array<RouteItem> {
	let result: Array<RouteItem> = [];
	const _developers = excludes(developers);
	if (typeof type === 'string') {
		result = type === '/' ? developers : _developers.filter((item) => item.type.includes(type));
	}
	if (Array.isArray(type)) {
		result = _developers.filter((item) => {
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

function excludes(developers: Array<RouteItem>) {
	const { setting } = storeToRefs(useSettingsStore());
	const names = setting.value.excludeWeb.map((item) => item.name);
	return developers.filter((item) => !names.includes(item.name));
}

function sortWebRanks(webList: Array<RouteItem>) {
	const { setting } = storeToRefs(useSettingsStore());
	const { hotWebRanks } = setting.value;
	if (hotWebRanks && Object.keys(hotWebRanks).length) {
		const keys = Object.keys(hotWebRanks);
		webList.forEach((item) => {
			const { name } = item;
			if (keys.includes(name)) {
				item.meta.rank = hotWebRanks[name];
			}
		});
		const orderByList = useOrderBy(webList, 'meta.rank', 'desc');
		return orderByList;
	} else {
		return webList;
	}
}

export { developers, sortWebRanks, filterHoutWebSiteList };

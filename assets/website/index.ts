import websites from './website.json';
import { storeToRefs } from 'pinia';
import { useSettingsStore } from '~/stores/settings';

// 热点排行
function filterHoutWebSiteList(type: string): Array<RouteItem> {
	let filteredWebsites: Array<RouteItem> = excludes(websites as RouteItem[]); // 更清晰的变量命名
	// if (typeof type === 'string') {
	// 	filteredWebsites = type === '/' ? websites as RouteItem[] : excludeBySingleType(filteredWebsites, type);
	// } else if (Array.isArray(type)) {
	// 	filteredWebsites = excludeByMultipleTypes(filteredWebsites, type);
	// }
	filteredWebsites = filteredWebsites.filter(n => {
		if (typeof n.classify ==='string') {
			return n.classify === type;	
		} else {
			return n.classify.includes(type);
		}
	})
	return sortWebRanks(filteredWebsites);
}

// 根据单个类型字符串进行过滤
function excludeBySingleType(developers: Array<RouteItem>, type: string): Array<RouteItem> {
	return developers.filter((item) => item.classify.includes(type));
}

// 根据多个类型字符串进行过滤
function excludeByMultipleTypes(developers: Array<RouteItem>, types: string[]): Array<RouteItem> {
	const list = developers.filter((item) => {
		if (typeof item.classify === 'string') {
			return types.includes(item.classify);
		}
		if (Array.isArray(item.classify)) {
			return item.classify.some((itemType) => types.includes(itemType));
		}
		return false; // 对于非字符串且非数组的item.type，默认返回false
	});
	return list;
}

function excludes(developers: Array<RouteItem>) {
	const { setting } = storeToRefs(useSettingsStore());
	const names = setting.value.excludeWeb.map((item) => item.name);
	return developers.filter((item) => !names.includes(item.name));
}

function sortWebRanks(webList: Array<RouteItem>): Array<RouteItem> {
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

export { websites, sortWebRanks, filterHoutWebSiteList };

import { developers } from './developer';
import { entertainment } from './entertainment';

// 热门网站
const hotWebsiteList: Array<RouteItem> = [...developers, ...entertainment];

function filterHoutWebSiteList(type: string | string[]) {
	if (typeof type === 'string') {
		return hotWebsiteList.filter((item) => item.type.includes(type));
	}
	if (Array.isArray(type)) {
		return hotWebsiteList.filter((item) => {
			if (item.type === 'string') {
				return type.includes(item.type);
			}
			if (Array.isArray(item.type)) {
				return item.type.some((some) => item.type.includes(some));
			}
		});
	}
}

export { hotWebsiteList, filterHoutWebSiteList };

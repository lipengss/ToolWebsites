import { developers } from './developer';

function filterHoutWebSiteList(type: string | string[]) {
	if (typeof type === 'string') {
		return developers.filter((item) => item.type.includes(type));
	}
	if (Array.isArray(type)) {
		return developers.filter((item) => {
			if (item.type === 'string') {
				return type.includes(item.type);
			}
			if (Array.isArray(item.type)) {
				return item.type.some((some) => item.type.includes(some));
			}
		});
	}
}

export { developers, filterHoutWebSiteList };

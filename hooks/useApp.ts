import { filterHoutWebSiteList } from '~/assets/website/index';

export function useApp() {
	function getApps(active: string) {
		const list = filterHoutWebSiteList('/');
		if (active === 'all') {
			return list;
		} else {
			return list.filter((n) => n.meta.tag && n.meta.tag.includes(active));
		}
	}

	return {
		getApps,
	};
}

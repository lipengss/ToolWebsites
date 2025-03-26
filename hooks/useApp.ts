import { filterHoutWebSiteList } from '~/assets/website/index';
import { useRoute } from 'vue-router';
export function useApp() {
	function getApps(active: string) {
		const route = useRoute();
		const path = route.path.slice(1);
		const list = filterHoutWebSiteList('/');
		if (active === 'hot') {
			return filterWebsite('hot', list);
		} else if (active === 'all') {
			return list;
		} else {
			return filterWebsite(path, list);
		}
	}

	function filterWebsite(path: string, list: Array<RouteItem>) {
		return list.filter((n) => {
			if (typeof n.classify === 'string') {
				return n.classify === path;
			} else {
				return n.classify?.includes(path);
			}
		});
	}

	return {
		getApps,
	};
}

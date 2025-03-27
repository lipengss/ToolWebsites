import { filterHoutWebSiteList } from '~/assets/website/index';
import { useRoute } from 'vue-router';
export function useApp() {
	function getApps(active: string):RouteItem[] {
		const { path } = useRoute();
		const routePath =  path === '/' ? 'hot' : path.slice(1);
		const list = filterHoutWebSiteList(routePath);
		const filterList = list.filter((n) => {
			if (active === 'all') {
				return true;
			}else {
				return n.meta.tag.includes(active);
			}
		});
		return filterList;
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

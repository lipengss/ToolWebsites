import { useRoute } from 'vue-router';
import { filterHoutWebSiteList } from '~/assets/website/index';

export function useApp() {
	const route = useRoute();

	const path = route.path;

	function getApps() {
		return filterHoutWebSiteList(path.substring(1));
	}

	return {
		getApps,
	};
}

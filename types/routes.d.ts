interface RouteItem {
	name: string;
	path: string;
	meta: {
		icon?: string;
		rank: number;
	};
	children?: Array<RouteItem>;
}

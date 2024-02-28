interface WebTypeItem {
	name: string;
	url: string;
	icon: string;
	type: string;
	children: Array<WebHotItem>;
}

interface WebHotItem {
	name: string;
	key: string;
	url: string;
	icon: string;
	type: string;
	description: string;
}

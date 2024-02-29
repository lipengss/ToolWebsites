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

declare module '*.json' {
	const value: any;
	export default value;
}
declare module 'numeral';
declare module 'file-saver';
declare module '@vueuse/core';
declare module 'vue3-grid-layout';

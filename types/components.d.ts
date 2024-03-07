// 锚点列表
interface AnchorPoint {
	name: string;
	id: string;
}

interface HotMenuState {
	isDrawer: boolean;
	context: string;
}

interface EditorOptions {
	mode: 'text' | 'tree' | 'table';
}

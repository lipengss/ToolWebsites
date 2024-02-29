import { nextTick } from 'vue';

/**
 * 使用动画效果
 * @param element 元素选择器
 * @param animation 动画名称
 */

export function useAnimate(element: string, animation: string) {
	// 参数验证
	if (!element || !animation) {
		throw new Error('element or animation is null');
	}

	/**
	 * 鼠标悬停动画函数
	 * @param type 动画类型，可选值为'in'（进入动画）或'out'（退出动画）
	 * @param index 当前元素的索引
	 */
	function hoverAnimate(type: 'in' | 'out', index: number) {
		const currentElement = document.querySelectorAll(element)[index];
		if (currentElement) {
			if (type === 'in' && !currentElement.classList.contains('animate__animated')) {
				// 如果当前元素未添加动画类，则添加动画类
				nextTick(() => {
					currentElement.classList.add('animate__animated', animation);
				});
			} else if (type === 'out') {
				// 如果当前元素已添加动画类，则移除动画类
				nextTick(() => {
					currentElement.classList.remove('animate__animated', animation);
				});
			}
		}
	}
	return {
		hoverAnimate,
	};
}

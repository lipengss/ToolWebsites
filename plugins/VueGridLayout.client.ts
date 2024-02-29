import VueGridLayout from 'vue3-grid-layout';

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component('grid-layout', VueGridLayout.GridLayout);
	nuxtApp.vueApp.component('grid-item', VueGridLayout.GridItem);
});

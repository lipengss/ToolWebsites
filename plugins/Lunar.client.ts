import { Solar } from 'lunar-typescript';

export default defineNuxtPlugin(() => {
	return {
		provide: {
			Solar: Solar,
		},
	};
});

import cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

export default defineNuxtPlugin(() => {
	return {
		provide: {
			cropper,
		},
	};
});

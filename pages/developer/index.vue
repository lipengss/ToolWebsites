<template>
	<div class="developer">
		<el-button @click="router.push('developer/developerChildx')">xx</el-button>
		<NuxtChild />
	</div>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import {} from 'vue';

const route = useRoute();
const router = useRouter();
</script>
<style lang="scss" scoped>
.developer {
	position: relative;
	z-index: 100;
	font-size: 24px;
	color: #fff;
}
</style>

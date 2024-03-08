<template>
	<div class="off-work">
		<div class="title">下班还有</div>
		<div class="time">02:04:24</div>
		<div class="card">
			<div class="card-item">
				<div class="card-item-title">发薪</div>
				<div class="card-item-content">2</div>
				<div class="day">天</div>
			</div>
			<div class="card-item">
				<div class="card-item-title">周五</div>
				<div class="card-item-content">0</div>
				<div class="day">天</div>
			</div>
			<div class="card-item">
				<div class="card-item-title">妇女节</div>
				<div class="card-item-content">0</div>
				<div class="day">天</div>
			</div>
			<div class="card-item">
				<div class="card-item-title">今天赚了</div>
				<div class="card-item-content">799.217</div>
				<div class="day">￥</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import {} from 'vue';
</script>

<style lang="scss" scoped>
.off-work {
	width: 100%;
	height: 100%;
	padding: 10px;
	box-sizing: border-box;
	background-color: #fc585b;
	background-image: url('~/assets/img/boy.svg');
	background-repeat: no-repeat;
	background-size: 130px;
	background-position: 95% center;
	color: #fff;
	.time {
		font-size: 30px;
		font-weight: bold;
		margin-bottom: 4px;
	}
	.card {
		display: flex;
		.card-item {
			padding: 4px 10px;
			background-color: rgba(255, 255, 255, 0.1);
			text-align: center;
			border-radius: 8px;
			&:not(:last-child) {
				margin-right: 6px;
			}
			line-height: 20px;
			.card-item-title {
				font-size: 12px;
			}
			.card-item-content {
				font-size: 14px;
				font-weight: bold;
			}
			.day {
				font-size: 12px;
			}
		}
	}
}
</style>

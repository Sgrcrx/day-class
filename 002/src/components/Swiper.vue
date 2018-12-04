<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<a href="#">
					<img src="../assets/img/swiper_1.jpg"/>
				</a>
			</div>
			<div class="swiper-slide">
				<a href="#">
					<img src="../assets/img/swiper_2.jpg"/>
				</a>
			</div>
			<div class="swiper-slide">
				<a href="#">
					<img src="../assets/img/swiper_3.jpg"/>
				</a>
			</div>
			<div class="swiper-slide">
				<a href="#">
					<img src="../assets/img/swiper_4.jpg"/>
				</a>
			</div>
			
		</div>
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	export default {
		data:function(){
			return{
				
			};
		},
		methods: {},
		created() {},
		mounted() {
			console.log("初始化轮播图！");
			new Swiper('.swiper-container', {
				pagination: {
					el: '.swiper-pagination',
				},
				autoplay: true
			});

		}
	}
</script>

<style>
	/*轮播图*/
	
	.swiper-container {
		
	}
	
	.swiper-container a {
		display: block;
	}
	
	.swiper-container img {
		width: 100%;
	}
</style>
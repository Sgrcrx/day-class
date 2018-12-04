<template>
	<header :class='{fixed:fixed}'>
				<div class='category'><i class=' fa fa-category'></i></div>
				<div class='search-input'>
					<div class='tu'>
						<img src="../assets/img/002.png"/>
						<i class='fa fa-search'></i>
					</div>
					<input type='text' name='' id='' value='' placeholder='请输入搜索内容' />
				</div>
				<div class='user'>
					<i class='fa fa-user'></i>
				</div>
			</header>
</template>

<script>
	export default {
		data(){
			return{
				fixed:false
			};
		},
		mounted() {
			var self = this;
			window.addEventListener("scroll", function() {
				var scrollTop = document.body.scrollTop || window.pageYOffset || document.documentElement.scrollTop;
				if(scrollTop > 10) {
					self.fixed = true;
				} else {
					self.fixed = false;
				}
			});
		}

	}
	
</script>

<style>
	
	
	body {
				margin: 0px;
			}
			
			header {
				width: 100%;
				height: 44px;
				display: flex;
				z-index: 9999;
				position: fixed;
				top: 0;
				left: 0;
			}
			
			header.fixed {
				background-color: #e43130;
			}
			
			.category,
			.user {
				color: #fff;
				font-size: 20px;
				text-align: center;
				line-height: 44px;
			}
			
			.category {
				width: 50px;
				height: 44px;
				box-sizing: border-box;
				/*background-color: blue;*/
			}
			
			.search-input {
				width: 100%;
				box-sizing: border-box;
				flex: 2;
				border: none;
				padding-top: 7px;
				position: relative;
			}
			
			.tu {
				display: inline-block;
				position: absolute;
				top: 11px;
				left: 5px;
			}
			
			.tu img {
				width: 20px;
				margin-top: 0.2rem;
			}
			
			.tu i {
				width: 20px;
			}
			
			.search-input input {
				width: 100%;
				height: 30px;
				border-radius: 15px;
				border: none;
				outline: none;
				padding-left: 50px;
				box-sizing: border-box;
			}
			
			.user {
				width: 50px;
				height: 44px;
				box-sizing: border-box;
				/*background-color: blue;*/
			}
			
			.swiper-container {}
			
			.swiper-container a {}
			
			.swiper-container img {
				width: 100%;
			}
			/*下拉*/
			
			.crx {
				height: 2000px;
			}
			/*图*/
			.bg01 img {
				width: 100%;
			}
</style>
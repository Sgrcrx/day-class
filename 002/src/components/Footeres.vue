<template>

	<footer>

		<ul>
			<li v-for="(item,index) in nav">
				<span class="fa" :class="item.icon"></span>
				<span class="title" v-text="item.title"></span>
			</li>
		</ul>

	</footer>

</template>

<script>
	export default {
		data() {
			return {
				nav: [{
					title: '首页',
					icon: 'fa-home'
				}, {
					title: '分类',
					icon: 'fa-list'
				}, {
					title: '搜索',
					icon: 'fa-search'
				}, {
					title: '购物车',
					icon: 'fa-shopping-cart'
				}, {
					title: '我的',
					icon: 'fa-user'
				}]
			}
		}
	}
</script>

<style>
	footer {
		width: 100%;
		height: 50px;
		background-color: red;
		position: fixed;
		bottom: 0px;
		left: 0px;
		color: #353535;
		text-align: center;
		background-color: #fff;
		box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
		-webkit-box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
		-moz-box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
	}
	
	footer ul {
		margin: 0;
		padding: 0;
		display: flex;
		display: -webkit-flex;
	}
	
	footer ul li {
		flex: 1;
		padding-top: 5px;
		list-style: none;
	}
	
	footer ul li span.fa {
		font-size: 20px;
	}
	
	footer ul li .title {
		display: block;
		font-size: 12px;
	}
</style>
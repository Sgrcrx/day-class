<template>

	<div class='floor-01'>
		<ul>
			<li v-for="(item,index) in intro">
				<a href='#'>
					<img :src='item.images' />
					<span v-text='item.name'></span>
				</a>
			</li>
		</ul>
	</div>

</template>

<script>
	export default {
		data() {
			return {

				intro: [{
					name: '京东超市',
					images: 'img/1.png'
				}, {
					name: '海囤全球',
					images: 'img/2.png'
				}, {
					name: '京东时尚',
					images: 'img/3.png'
				}, {
					name: '京东生鲜',
					images: 'img/4.png'
				}, {
					name: '京东到家',
					images: 'img/5.png'
				}, {
					name: '充值缴费',
					images: 'img/6.png'
				}, {
					name: '9.9元拼',
					images: 'img/7.png'
				}, {
					name: '领券',
					images: 'img/8.png'
				}, {
					name: '省钱',
					images: 'img/9.png'
				}, {
					name: '全部',
					images: 'img/10.png'
				}, ]
			}
		}
	}
</script>

<style>
	.floor-01 {
		height: 9rem;
		margin-top: 0.2rem;
		text-align: center;
		/*background-color: salmon;*/
	}
	
	.floor-01 ul {
		margin: 0;
		padding: 0;
		list-style: none;
		text-align: center;
		font-size: 0.18rem;
		margin-bottom: 0.3rem;
	}
	
	.floor-01 ul li {
		width: 20%;
		float: left;
		margin-bottom: 0.2rem;
	}
	
	.floor-01 ul li a {
		text-decoration: none;
		text-align: center;
		color: #666;
		line-height: 0.5rem;
	}
	
	.floor-01 ul li a img {
		width: 60%;
		display: block;
		text-align: center;
		padding-left: 0.26rem;
		margin: 2px auto;
	}
</style>
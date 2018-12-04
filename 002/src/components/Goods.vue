<template>
	<div>
		<div class='product' v-for="(item,index) in products">
			<a :href="item.id">
				<div class='product-image'>
					<img :src='item.image'>
				</div>
				<div class='product-title' v-text='item.title'></div>
				<div class='product-info clear'>
					<div class='product-price left'>￥<span v-text='item.price'></span></div>
					<div class='product-similar right'><button class='btntj'></button></div>
				</div>
				<div class='similar-info'></div>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				products: [{
					title: '连衣裙2018秋冬新款女装秋天两件套套装裙长袖秋冬装女韩版修身时尚裙子套装女大码秋冬季 图片 L',
					image: '/img/dress.jpg',
					price: 185.99,
					id: 1
				}, {
					title: '连衣裙2018秋冬新款女装秋天两件套套装裙长袖秋冬装女韩版修身时尚裙子套装女大码秋冬季 图片 L',
					image: '/img/dress.jpg',
					price: 185.99,
					id: 2
				}, {
					title: '雀巢(Nestle) 丝滑拿铁口味 即饮雀巢咖啡饮料 268ml*3瓶 3联包',
					image: '/img/quechao01.jpg',
					price: 13.99,
					id: 2
				}, {
					title: '贝思客 一见倾心 蛋糕 心形INS风水果奶油求婚创意生日 蛋糕  经典款',
					image: '/img/bsk02.jpg',
					price: 199.00,
					id: 3
				}, {
					title: '戴尔DELL全新XPS13.3英寸超轻薄窄边框4K触控屏笔记本电脑白色硅纤维(i7-8550U 16G 512G UHD 指纹识别)金',
					image: '/img/DELL01.jpg',
					price: 12999.00,
					id: 4
				}, {
					title: '03-OPPO Find X手机【6期免息】双曲面全景屏 8G运存+128G/256G内存双卡双待全网通 波尔多红（标准版）8GB+128GB',
					image: 'img/MicrosoftSurfaceBook.webp',
					price: 7999.00,
					id: 5
				}, {
					title: 'Apple iPhone X (A1865) 64GB 深空灰色 移动联通电信4G手机',
					image: 'img/iphoneX.webp',
					price: 8999.00,
					id: 5
				}, ]
			}
		}
	}
</script>

<style>
	img {
		border: 0 none;
		vertical-align: top;
	}
	
	.product {
		margin-top: 0.5rem;
		width: 50%;
		float: left;
		padding-right: 2px;
		padding-bottom: 4px;
		box-sizing: border-box;
		/*background-color: red;*/
	}
	
	.product a {
		background-color: #FFFFFF;
		display: block;
		text-decoration: none;
	}
	
	.product:nth-child(2n) {
		padding-right: 0px;
		padding-left: 2px;
	}
	
	.product-image img {
		width: 100%;
	}
	
	.product-title {
		box-sizing: border-box;
		height: 31px;
		font-size: 13px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		word-break: break-word;
		color: #232326;
		margin-top: 5px;
		line-height: 16px;
		margin-bottom: 3px;
		padding: 0 4px;
		background-color: #fff;
	}
	
	.product-price {
		color: #f23030;
		display: inline-block;
		padding: 0 5px 0 4px;
		position: relative;
		top: 1px;
		height: 25px;
		line-height: 25px;
	}
	
	.similar-info {
		height: 26px;
	}
	
	.product-info {
		/*padding: 0rem 0.3rem;*/
	}
	
	.product-similar {
		margin-right: 0.3rem;
	}
	
	button.btntj {
		display: block;
		text-align: center;
		color: #686868;
		font-size: 0.1rem;
		height: 0.42rem;
		line-height: 0.42rem;
	}
</style>
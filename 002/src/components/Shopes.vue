<template>
	<ul>
		<li class="flex" v-for="(item,index) in goods">
			<div class="left">
				<div class="check-box" :class="{'selected':item.selected}" @click="select(index)"></div>
			</div>
			<div class="flex-item right">
				<div class="flex content">
					
						<div class="image">
							<img v-bind:src="item.image" />
						</div>
					
					<div class="flex-item inner">
						<div class="text">
							<h4 v-text="item.title"></h4>
							<h5>0.85kg</h5>
							<p>
								<span class="bai">白条6期免息</span>
							</p>
						</div>
						<div class="flex bot">
							<div class="money flex-item">
								￥<span id="num" v-text="item.price"></span>.00
							</div>
							<div class="choose flex-item">
								<span id="minus" @click="item.count = item.count>1?--item.count:item.count;">-</span>
								<span id="num1" v-text="item.count"></span>
								<span id="add" @click="item.count++">+</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</li>
		<!--下拉-->
		<div class="crx"></div>
		<!--结算-->
		<div class="flex jie">
			<div class="all">
				<div id="check" class="check-box" @click="selectAll" :class="{'selected':all}" style="margin: 0.1rem;display: inline-block;"></div>
				<span id="ch">
						全选
					</span>
			</div>
			<div class="he">合计:￥
				<span id="yu" v-text="money"></span>
				<span id="jiao">.00</span>
			</div>
			<div class="go">去结算（<span v-text="total"></span>）</div>
		</div>
	</ul>
</template>

<script>
	export default {
		data() {
			return {
				image: '',
				all: false,
				goods: [{
					id: 1,
					title: 'OPPO Find X手机【6期免息】双曲面全景屏 8G运存+128G/256G内存双卡双待全网通 波尔多红（标准版）8GB+128GB',
					price: 4999,
					count: 1,
					image: 'img/phone.jpg',
					selected: false,
				}, {
					id: 2,
					title: 'Apple iPhone X (A1865) 64GB 深空灰色 移动联通电信4G手机',
					price: 5999,
					count: 1,
					image: 'img/iphoneX.webp',
					selected: false,
				}, {
					id: 3,
					title: '微软（Microsoft）Surface Book 2 二合一平板电脑笔记本 13.5英寸（Intel i5 8G内存 256G存储）银色',
					price: 6999,
					count: 1,
					image: 'img/MicrosoftSurfaceBook.webp',
					selected: false,
				}],
				selected: []
			};
		},
		methods: {
			select: function(index) {
				this.goods[index].selected = !this.goods[index].selected;
				// 如果是true则添加到selected数组中
				if(this.goods[index].selected) {
					var flag = false;
					for(var i = 0; i < this.selected.length; i++) {
						if(this.selected[i].id == this.goods[index].id) {
							flag = true;
						}
					}
					// 如果数组中不存在则新增，如果存在则不再添加
					if(!flag)
						this.selected.push(this.goods[index]);
					// 如果是false则从selected中删除
				} else {
					// 如果数组中确实有这个数据则删除
					for(var i = 0; i < this.selected.length; i++) {
						if(this.selected[i].id == this.goods[index].id) {
							this.selected.splice(i, 1);
						}
					}
				}
				// 如果选中所有的商品则全选变成true，如果有一个没有选中则变成false
				if(this.goods.length == this.selected.length) {
					this.all = true;
				} else {
					this.all = false;
				};
				console.log(this.selected);
			},

			//
			selectAll: function() {
				this.all = !this.all;
				this.selected = [];
				if(this.all) {
					for(var i = 0; i < this.goods.length; i++) {
						this.selected.push(this.goods[i]);
						this.goods[i].selected = true;
					}
				} else {
					this.selected = [];
					for(var i = 0; i < this.goods.length; i++) {
						this.goods[i].selected = false;
					}
				}

			}
		},
		computed: {
			total: function() {
				var s = 0;
				for(var i = 0; i < this.selected.length; i++) {
					s += this.selected[i].count;
				}
				return s;
			},
			money: function() {
				var su = 0;
				for(var i = 0; i < this.selected.length; i++) {
					su += this.selected[i].count * this.selected[i].price;
				}
				return su;
			}
		},
	}
</script>

<style scoped="scoped">
	body{
		margin: 0px;
		padding: 0px;
	}
	.flex {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
	}
	
	.flex-item {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
	}
	
	a {
		text-decoration: none;
		color: #333;
	}
	
	ul {
		box-sizing: border-box;
		padding: 0rem 1rem;
		/*background-color: chartreuse;*/
	}
	
	ul:first-of-type {
		margin-top: 3.4rem;
	}
	
	ul li {
		box-sizing: border-box;
		height: 9rem;
		margin-bottom:0.2rem;
		/*background-color: aqua;*/
	}
	
	.left {
		width: 1.8rem;
		height: auto;
		box-sizing: border-box;
		position: relative;
		/*background-color: salmon;*/
	}
	/*right*/
	
	.right {
		box-shadow: 0rem 0.1rem 0.3rem #eee;
		/*	background-color: maroon;*/
	}
	
	.right .content {
		margin: 1rem 0rem 0.15rem;
		text-align: left;
	}
	
	.right .content .inner {
		box-sizing: border-box;
		padding: 0rem 1rem;
	}
	
	.image {
		width: 5rem;
		height: 5rem;
		box-sizing: border-box;
		display: inline-block;
		/*background-color: blue;*/
	}
	
	.image img {
		width: 5rem;
		height: 5rem;
	}
	
	.text {
		box-sizing: border-box;
	}
	
	.text h4 {
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		height: 3em;
		font-size: 1rem;
		color: black;
		font-weight: normal;
	}
	
	.text h5 {
		font-size: 0.8rem;
		color: #666;
		text-align: left;
		font-weight: normal;
	}
	
	.text p {
		font-size: 0.1rem;
		color: #D67F8D;
		text-align: left;
		margin: 0.1rem 0rem;
	}
	
	.text p .bai {
		border: 0.01rem solid #E19EAD;
		border-radius: 0.2rem;
		box-sizing: border-box;
	}
	
	.bot {
		margin-left: -5.4rem;
		line-height: 2rem;
/*			background-color: salmon;*/
	}
	
	.money {
		font-size: 0.8rem;
		color: #F62F33;
		text-align: left;
		/*background-color: khaki;*/
	}
	
	.money #num {
		font-weight: bold;
		font-size: 1rem;
	}
	
	.choose {
		display: inline-block;
		box-sizing: border-box;
		font-size: 0.3rem;
		font-weight: bold;
		text-align: right;
		padding-right: 0.3rem;
		position: relative;
		cursor: pointer;
		/*background-color: darkorange;*/
	}
	
	.choose #minus {
		position: absolute;
		right: 4rem;
	}
	
	#minus,
	#num1 {
		font-size: 1rem;
	}
	
	.choose #num1 {
		position: absolute;
		right: 2.2rem;
		width: 0.6rem;
		height: 100%;
		font-weight: normal;
		text-align: center;
		background-color: #F7F7F7;
	}
	
	.choose #add {
		position: absolute;
		right: 0rem;
		/*background-color: saddlebrown;*/
	}
	/*下拉*/
	
	.crx {
		height: 30rem;
	}
	/*结算*/
	
	.jie {
		position: relative;
		padding: 0rem 0.25rem;
		font-size: 1rem;
		line-height: 4rem;
		position: fixed;
		bottom: 3.4rem;
		left: 0rem;
		width: 100%;
		height: 4rem;
		box-shadow: 0rem 0rem 0.3rem #ddd;
		box-sizing: border-box;
		/*background-color: white;*/
		/*background-color: slateblue;*/
	}
	
	.check-box {
		width: 1rem;
		height: 1rem;
		background-image: url(/img/chooses.png);
		background-repeat: no-repeat;
		background-size: contain;
/*		margin-top: 1.25rem;*/
		position: relative;
		right: 0.1rem;
		top: 4rem;
		/*background-color: lightcoral;*/
	}
	
	.check-box.selected {
		background-image: url(/img/ok.png);
	}
	
	#check {
		position: relative;
		top: 0.12rem;
		left: -0.1rem;
	}
	
	#ch {
		position: relative;
		left: -0.21rem;
		margin-left: 0.2rem;
		/*background-color: saddlebrown;*/
	}
	
	.jie .all {
		/*background-color: red;*/
	}
	
	.jie .all img {
		width: 1rem;
		height: 1rem;
	}
	
	.jie .he {
		position: absolute;
		left: 4rem;
		width: 13rem;
		font-weight: bold;
		text-align: left;
		/*background-color: blue;*/
	}
	
	.jie .he #yu {}
	
	.jie .he #jiao {
		/*background-color: aquamarine;*/
	}
	
	.jie .go {
		text-align: center;
		position: absolute;
		width: 9rem;
		right: 0rem;
		color: #F8ECEB;
		background-color: #FB321E;
	}
</style>
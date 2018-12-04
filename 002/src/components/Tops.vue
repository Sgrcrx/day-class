<template>
	<!--header-->
			<header>
				<a class="back" href="#">
					＜
				</a>
				<p class="title">京东购物车</p>
				<a class="search" href="#">
					<i class="fa fa-search"></i>
				</a>
			</header>
			<!--001-->
</template>

<script>
	export default{
		data(){
			return{};
		}
	}
</script>

<style>
	
	header {
	height: 3rem;
	width: 100%;
	box-shadow: 0rem 0.1rem 0.2rem #FDFDFD;
	position: fixed;
	display: flex;
	top: 0rem;
	left: 0rem;
	line-height: 3rem;
	font-size: 1.4rem;
	z-index: 9999;
	color: #000;
	background-color: white;
	/*background-color: salmon;*/
}


header a {
	display: block;
	color: #000;
	box-sizing: border-box;
}
header .title{
	flex: 1;
}

.back{
	width: 50px;
	/*background-color: aqua;*/
}
.search{
	width: 50px;
	/*background-color: lawngreen;*/
}


</style>
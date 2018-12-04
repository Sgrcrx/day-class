<template>
	<footer class='weui-tab'>
		<div class='weui-tabbar'>
			<a href='javascript:;' class='weui-tabbar__item weui-bar__item_on'><span style='display: inline-block;position: relative;'><i class='fa fa-home'></i></span>
				<p class='weui-tabbar__label'>首页</p>
			</a>
			<a href='javascript:;' class='weui-tabbar__item'><i class='fa fa-cat'></i>
				<p class='weui-tabbar__label'>分类</p>
			</a>
			<a href='javascript:;' class='weui-tabbar__item'><span style='display: inline-block;position: relative;'><i class='fa fa-search'></i></span>
				<p class='weui-tabbar__label'>搜索</p>
			</a>
			<a href='javascript:;' class='weui-tabbar__item'><span style='display: inline-block;position: relative;'><i class='fa fa-shopping-cart'></i></span>
				<p class='weui-tabbar__label'>购物车</p>
			</a>
			<a href='javascript:;' class='weui-tabbar__item'><i class='fa fa-user'></i>
				<p class='weui-tabbar__label'>我的</p>
			</a>
		</div>
	</footer>
</template>

<script>
	export default{
		
	}
	
	//底部切换
//$(function() {
//	$('.weui-tabbar__item').on('click', function() {
//		$(this).addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
//	});
//});
</script>

<style>

/* 底部菜单 */

footer.weui-tab {
	width: 100%;
	height: auto;
	position: fixed;
	bottom: 0;
	left: 0;
}

.weui-tab i.fa {
	font-size: 27px;
}

.weui-tab .weui-bar__item_on i.fa {
	color: #09BB07;
}
</style>
Vue.component('top-bar', {
	template: "<div class='top-bar'>\
							<div class='go-back'>\
								<a href='#' @click.prevent='goBack'><i class='fa fa-angle-left'></i></a>\
							</div>\
							<div class='slot'>\
								<slot></slot>\
							</div>\
							<div class='menu'>\
								<a href='#' @click.prevent='menuShow=true'><i class='fa fa-ellipsis-h'></i></a>\
								<ul class='menu-list' v-show='menuShow'>\
									<li>\
										<a href='#'> <i class='fa fa-home'></i>首页</a>\
									</li>\
									<li>\
										<a href='#'> <i class='fa fa-search'></i>分类搜索</a>\
									</li>\
									<li>\
										<a href='#'> <i class='fa fa-shopping-cart'></i>购物车</a>\
									</li>\
									<li>\
										<a href='#'> <i class='fa fa-user'></i>我的京东</a>\
									</li>\
									<li>\
										<a href='#'> <i class='fa fa-paw'></i>浏览记录</a>\
									</li>\
								</ul>\
							</div>\
							<div class='header-mask' v-show='menuShow' @click='menuShow=false;'></div>\
						</div>",
	data: function() {
		return {
			menuShow: false
		}
	}
});
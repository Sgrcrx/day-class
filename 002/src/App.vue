<template>
  <div id="app">
  	
    <!--<search-bars></search-bars>
    <swiper></swiper>
    <navss></navss>
    <p>为你推荐</p>
    <goods></goods>
    <footeres></footeres>
    <div style="height: 2000px;"></div>-->
    
    <tops></tops>
    <shopes></shopes>
    <footeres></footeres>
    
  </div>
</template>

<script>

//import SearchBars from'./components/SearchBars.vue'
//import Footeres from'./components/Footeres'
//import Swiper from'./components/Swiper'
//import Navss from'./components/Navss'
//import Goods from'./components/Goods'



import Tops from'./components/Tops'
import Shopes from'./components/Shopes'
import Footeres from'./components/Footeres'

export default {
  name: 'app',
  components: {
//  SearchBars,
//  Footeres,
//  Swiper,
//  Navss,
//  Goods

    Tops,
    Shopes,
    Footeres
  }
}
</script>

<style>

	@import url("./assets/css/swiper.min.css");
	@import url("./assets/css/font-awesome.min.css");
	@import url("./assets/css/iconfont.css");
	@import url("assets/css/weui.css");
	@import url("assets/css/swiper.css");

	body{
		margin: 0px;
		padding: 0px;
	}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>

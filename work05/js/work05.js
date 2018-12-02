Vue.component("tabs",{
	template:"<table border='1' width='600' cellpadding='10' align='center'>\
				<caption>课程表</caption>\
				<tr bgcolor='#FFFF99'>\
					<th colspan='2'>星期</th>\
					<th>星期一</th>\
					<th>星期二</th>\
					<th>星期三</th>\
					<th>星期四</th>\
					<th>星期五</th>\
					<th>星期六</th>\
				</tr>\
				<tr>\
					<td rowspan='5' bgcolor='#FFCC66'>上<br />午</td>\
				</tr>\
				<tr align='center' v-for='(row,i) in 4'>\
					<td v-for='(col,j) in 7'>\
						<span v-for='(item,index) in className' :name='item.name'>\
						</span>\
					</td>\
					<tr>\
						<td colspan='8'></td>\
					</tr>\
					<tr>\
						<td rowspan='4' bgcolor='#FFCC66'>下<br />午</td>\
					</tr>\
					<tr align='center' v-for='(row,i) in 3'>\
						<td v-for='(col,j) in 7'>\
						<span></span>\
						</td>\
					</tr>\
			</table>",
			data:function(){
				return{}
			},
			props:['className']
});
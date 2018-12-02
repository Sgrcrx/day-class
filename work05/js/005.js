Vue.component("tables", {
	template: "<table border='1' cellpadding='10' align='center'>\
			<caption>课程表</caption>\
			<tbody>\
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
					<td rowspan='5' bgcolor='#ffcc66'>上<br />午</td>\
				</tr>\
				<tr v-for='(row,i) in 4'>\
					<td v-for='(col,j) in 7'>\
						<span v-text='className[i*7+j]'></span>\
					</td>\
				</tr>\
				<tr>\
					<td colspan='8'></td>\
				</tr>\
				<tr>\
					<td rowspan='5' bgcolor='#ffcc66'>下<br />午</td>\
				</tr>\
				<tr v-for='(row,i) in 4'>\
					<td v-for='(col,j) in 7'>\
						<span></span>\
					</td>\
				</tr>\
			</tbody>\
		</table>",
	data: function() {
		return {}
	},
	props: ['className', 'classNames']
});
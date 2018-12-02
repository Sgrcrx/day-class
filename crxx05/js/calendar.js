Vue.component("calendar", {
	template: "<div class='calendar'>\
				<caption>\
					<h3 class='text-center'>\
					<span class='fa fa-chevron-left pull-left' @click='prevMonth'></span>\
					<span v-text='year'></span>年<span v-text='month+1'></span>月\
					<span class='fa fa-chevron-right pull-right' @click='nextMonth'></span>\
					</h3>\
				</caption>\
				<table class='table table-bordered text-center'>\
				<tbody>\
					<tr>\
						<th>日</th>\
						<th>一</th>\
						<th>二</th>\
						<th>三</th>\
						<th>四</th>\
						<th>五</th>\
						<th>六</th>\
					</tr>\
					<tr v-for='(row,i) in 6'>\
						<td v-for='(col,j) in 7' :class='{danger:date[i*7+j].y==year&&date[i*7+j].m==month&&date[i*7+j].d==day,\"text-muted\":!date[i*7+j].current,selected:date[i*7+j].selected}' @click='selected(i*7+j)'>\
						<span v-text='date[i*7+j].d'></span>\
						<ul class='todo-list'>\
						<li class='alert-success' v-for='(item,index) in date[i*7+j].todos'>\<span class='time' v-text='item.time'></span>\
						<span class='something' v-text='item.something'></span>\
						</li>\
						</ul>\
						</td>\
					</tr>\
					</tbody>\
				</table>\
			</div>",
	data: function() {
		return {
			date: [],
			year: 0,
			month: 0,
			day: 0,
			selectedArr: []
		}
	},
	props: ['todos'],
	methods: {
		// 根据年月日获取日历
		getDays: function(y, m, d) {
			var is_leap = false;
			if(y % 400 == 0) {
				is_leap = true;
			} else if(y % 100 != 0 && y % 4 == 0) {
				is_leap = true;
			}
			var days = [31, is_leap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
			// 上一个月需要显示的天数
			var prev_count = new Date(y + "-" + (m + 1) + "-01").getDay();
			prev_count = prev_count == 0 ? 7 : prev_count;

			this.date = [];
			// 上一个月
			for(var i = prev_count; i > 0; i--) {
				var day = {
					y: y,
					m: ((m - 1 + 12) % 12),
					d: days[(m - 1 + 12) % 12] - i + 1,
					current: false,
					todos: [],
					selected: false
				}

				this.date.push(day);
			}

			// 当前月
			for(var i = 0; i < days[m]; i++) {
				var day = {
					y: y,
					m: m,
					d: i + 1,
					current: true,
					todos: [],
					selected: false
				}

				this.date.push(day);
			}

			// 下一个月
			var next_count = 42 - prev_count - days[m];
			for(var i = 0; i < next_count; i++) {
				var day = {
					y: y,
					m: ((m + 1) % 12),
					d: i + 1,
					current: false,
					todos: [],
					selected: false
				}

				this.date.push(day);
			}

			// 传入的todos放入到dete数组中去
			for(var i = 0; i < 42; i++) {
				for(var j = 0; j < this.todos.length; j++) {
					var todoDate = this.todos[j].date.split('-');
					var todoY = todoDate[0] - 0;
					var todoM = (todoDate[1] - 1 + 12) % 12;
					var todoD = todoDate[2] - 0;
					if(this.date[i].y == todoY && this.date[i].m == todoM && this.date[i].d == todoD) {
						this.date[i].todos.push(this.todos[j]);
					}
				};
				//
				for(var k = 0; k < this.selectedArr.length; k++) {
					var selectedDate = this.selectedArr[k].split('-');
					var selectY = selectedDate[0] - 0;
					var selectM = (selectedDate[1] - 1 + 12) % 12;
					var selectD = selectedDate[2] - 0;
					if(this.date[i].y == selectY && this.date[i].m == selectM && this.date[i].d == selectD) {
						this.Date[i].selected = true;
					}
				}

			}

		},
		// 上一个月
		prevMonth: function() {
			this.month = (this.month - 1 + 12) % 12;
			if(this.month == 11) {
				this.year -= 1;
			}
			this.getDays(this.year, this.month, this.day);
		},
		// 下一个月
		nextMonth: function() {
			this.month = (this.month + 1) % 12;
			if(this.month == 0) {
				this.year += 1;
			}
			this.getDays(this.year, this.month, this.day);
		},
		selected: function(index) {
			this.date[index].selected = !this.date[index].selected;
			// 点第一次是选中,第二次是取消选中
			if(this.date[index].selected) {
				this.selectedArr.push(this.date[index].y + '-' + (this.date[index].m + 1) + '-' + this.date[index].d);
			} else {
				for(var i = 0; i < this.selectedArr.length; i++) {
					if(this.selectedArr[i] = (this.date[index].y + '-' + (this.date[index].m + 1) + '-' + this.date[index].d)) {
						this.selectedArr.splice(i, 1)
					}
				}
			}

			this.$emit("select", this.selectedArr);
		}
	},
	created: function() {
		var now = new Date();
		this.year = now.getFullYear();
		this.month = now.getMonth();
		this.day = now.getDate();
		this.getDays(this.year, this.month, this.day);
	}

});
var title = "全局标题";

var imooc = {
	title: "imoocName",
	getTitle: function () {
		console.log(this.title);
	},
};

imooc.getTitle();

var bar = imooc.getTitle;
bar();

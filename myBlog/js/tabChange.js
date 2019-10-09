function changeBar(){
	//导航栏切换
	layui.use('element', function() {
		var element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块
		//监听导航点击
		element.on('nav(demo)', function(elem) {
			//console.log(elem)
			layer.msg(elem.text());
		});
	});
	
	//图片轮播
	layui.use('carousel', function() {
		var carousel = layui.carousel;
		//建造实例
		carousel.render({
			elem: '#test1',
			width: '100%' //设置容器宽度
				,
			arrow: 'always' //始终显示箭头
			//,anim: 'updown' //切换动画方式
		});
	});
	
}
		
		
	
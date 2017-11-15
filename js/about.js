var app = new Vue({
	el: '#section',
	data: {
		introduct_box:[],
		mySwiper:''
	},
	created: function() {

	},
	updated: function() {

	},
  mounted:function(){
    this.mySwiper = new Swiper ('.swiper-container', {
      loop: true,
			observer:true,
			observeParents:true,
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev'
    })
		var marker, map = new AMap.Map('container',{
			resizeEnable: true,
			zoom: 15,
			center: [114.252352,22.713849]
		});
		marker = new AMap.Marker({
				icon: "img/ic_location.png",
				position: [114.252352,22.713849],
				offset : new AMap.Pixel(-50,-50),
		});
		marker.setMap(map);
    // 获取蛋壳介绍的轮播
		this.get_swiper();
  },
	// watch:function(introduct_box){
	// },
	methods: {
		prev_click:function(){
			// console.log(this);
			this.$refs.prev.click();
		},
		next_click:function(){
			this.$refs.next.click();
		},
		get_swiper:function(){
			var that = this;
			$.ajax({
				url:api+'api/Website/about',
				success:function(res){
					var box = [];
					var img_root = res.data.info;
					box.push({img_url:img_root.img_url});
					box.push({img_url:img_root.img_url1});
					box.push({img_url:img_root.img_url2});
					box.push({img_url:img_root.img_url3});
					box.push({img_url:img_root.img_url4});
					that.introduct_box = box;
					// that.mySwiper.update();

				}
			})
		}
	}
});

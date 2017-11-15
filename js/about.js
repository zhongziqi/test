var app = new Vue({
	el: '#section',
	data: {
	},
	created: function() {

	},
	updated: function() {

	},
  mounted:function(){
    var mySwiper = new Swiper ('.swiper-container', {
      loop: true,
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next'
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
  },
	methods: {
	}
});

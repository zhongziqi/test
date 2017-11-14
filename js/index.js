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
  },
	methods: {
	}
});

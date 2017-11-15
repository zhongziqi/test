var app = new Vue({
	el: '#section',
	data: {
		swiper_box:[],
		case_box:[],
		partner_box:[],
		common_question_box:[],
		succ_box:{},
		web:true,
		app:false,
		h5:false,
		program:false,
		click_index:9
	},
	created: function() {
		var customer_case = getUrlParam('type');
		if(customer_case=='customer_case'){
			this.mao_click()
		}else if(customer_case=='initial_custom'){
			this.initial_custom_click();
		}
	},
  mounted:function(){
    var mySwiper = new Swiper ('.swiper-container', {
      loop: true,
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next'
    })
		this.get_swiper_box();
    //初始化生成一个
		var types = 'web';
		this.get_customer_case(types,'user');
    // 合作伙伴
		this.get_partner()
    // 成功案例
		this.get_succ_box();
    // 获取常见问题
		this.get_common_question();
  },
	methods: {
		common_click:function(index){
			this.click_index=index;
		},
		get_common_question:function(){
			var that = this;
			$.ajax({
				url:api+'api/Website/problem',
				success:function(res){
					that.common_question_box = res.data.list;
				}
			})
		},
		get_succ_box:function(){
			var that = this;
			$.ajax({
				url:api+'api/Website/other',
				success:function(res){
					that.succ_box = res.data.info;
				}
			})
		},
		get_partner:function(){
			var that = this;
			$.ajax({
				url:api+'api/Website/partner',
				success:function(res){
					that.partner_box = res.data.list;
					console.log(res);
				}
			})
		},
		customer_case:function(type){
			if(type=='web'){
				this.web=true;
				this.app=false;
				this.h5 = false;
				this.program=false;
				var types = 'web';
				this.get_customer_case(types,'user');
			}else if(type=='app'){
				this.web=false;
				this.app=true;
				this.h5 = false;
				this.program=false;
				var types = 'applet';
				this.get_customer_case(types,'user');
			}else if(type=='h5'){
				this.web=false;
				this.app=false;
				this.h5 = true;
				this.program=false;
				var types = 'mobile';
				this.get_customer_case(types,'user');
			}else if(type=='program'){
				this.web=false;
				this.app=false;
				this.h5 = false;
				this.program=true;
				var types = 'small';
				this.get_customer_case(types,'user');
			}
		},
		get_customer_case:function(type,case_type){
			var that = this;
			$.ajax({
				url:api+'api/Website/casesList',
				data:{
					type:type,
					case_type:case_type
				},
				success:function(res){
					that.case_box = res.data.casesLst;
				}
			})
		},
		initial_custom_click:function(){
			document.querySelectorAll('.initial_custom')[0].click();
		},
		mao_click:function(){
			document.querySelectorAll('.mao')[0].click();
		},
		to_url:function(url){
			window.location.href=url;
		},
		get_swiper_box:function(){
			var that = this;
			$.ajax({
				url:api+'api/Website/banner',
				success:function(res){
					that.swiper_box=res.data.bannerList;
				}
			})

		}
	}
});

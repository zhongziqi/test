var app = new Vue({
	el: '#main_box',
	data: {
        the_detail:''
	},
	created: function() {
        let val = getUrlParam('c_id');
        let that = this;
        if(val){
            $.ajax({
                url: api + '/Website/casesShow',
                data:{
                    c_id:val
                },
                success: function (data) {
                    let obj = data.data.info;
                    obj.create_time = getTime(obj.create_time)
                    that.the_detail = obj
                    console.log(that.the_detail, '详情')
                },
                error: function (error) {
                    console.log(error)
                },
            });
        }
	},
	updated: function() {

	},
  mounted:function(){
    
  },
	methods: {
        goBack(){
            window.history.back()
        }
	}
});

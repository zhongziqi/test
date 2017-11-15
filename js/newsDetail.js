new Vue({
    el: '#detail_page',
    data: {
        artical:''
    },
    created: function () {
       let get_id =  getUrlParam('new_id');
        var that = this;
        $.ajax({
            url: api + '/Website/newsDetails',
            data:{
                new_id:get_id
            },
            success: function (data) {
                let obj = data.data.info;
                obj.create_time = getTime(obj.create_time);
                that.artical = obj;
                console.log(data)
            },
            error: function (error) {
                console.log(error)
            },
        });

    },
    updated: function () {

    },
    methods: {
        goBack(){
            window.history.back()
        }
    }
});



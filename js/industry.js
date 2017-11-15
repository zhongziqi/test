new Vue({
    el: '#main_box',
    data: {
        news:[]
    },
    created: function () {
        var that = this;
        $.ajax({
            url: api + '/Website/news',
            success: function (data) {
                let obj = data.data.list;
                for(let i=0;i<obj.length;i++){
                    obj[i].create_time = getTime(obj[i].create_time)
                }
                that.news = obj
                console.log(data, '公司')
            },
            error: function (error) {
                console.log(error)
            },
        });

    },
    updated: function () {

    },
    methods: {
        pass(obj){
            window.location.href = 'newsDetail.html?new_id='+obj.new_id
        }
    }
});




var api = 'http://big.dankal.cn/api';


//验证手机号码
function checkPhone(mobile) {
	if(!(/^1[34578]\d{9}$/.test(mobile))) {
		return false;
	}
}

// 验证邮箱
function checkMail(mail){
	if(!(/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(mail))){
		return false;
	}
}


//获取链接中的参数
function getUrlParam(name) {
	// 获取当前地址链接
    var url = window.location.search;
    //  正则筛选地址链接中的参数
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    // 匹配目标参数
    var result = url.substr(1).match(reg);
    //返回参数值
    return result ? decodeURIComponent(result[2]) : null;
}

//转换时间格式yyyy-MM-dd h:m:s
function getTime(timestamp,type){
//	var timestamp = 1403058804;
    var newDate = new Date();
    newDate.setTime(timestamp * 1000);
    Date.prototype.format = function(format) {
		var date = {
			"M+": this.getMonth() + 1,
			"d+": this.getDate(),
			"h+": this.getHours(),
			"m+": this.getMinutes(),
			"s+": this.getSeconds(),
			"q+": Math.floor((this.getMonth() + 3) / 3),
			"S+": this.getMilliseconds()
		};
		if(/(y+)/i.test(format)) {
			format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
		}
		for(var k in date) {
			if(new RegExp("(" + k + ")").test(format)) {
				format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
			}
		}
		return format;
	}
    if(type=="detail"){
      	return newDate.format('yyyy-MM-dd hh:mm:ss')
    }else{
    	    return newDate.format('yyyy-MM-dd')
    }
}

//设置cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

//获取cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}

//清除cookie
function clearCookie(name) {
    setCookie(name, "", -1);
}











//头部组件
header = Vue.extend({
	template:`      <div class="box_center clear">
	    	            <div class="fl">
	    	              <img src="img/logo.png" alt="">
	    	            </div>
	    	            <div class="fr">
	    	              <ul class='clear'>
	    	                <li><a href="index.html">首页</a></li>
	    	                <li><a href="index.html?type=customer_case">客户案例</a></li>
	    	                <li>
	    	                  <a href="#">技术服务</a>
	    	                  <b class="b2"></b>
	    	                  <div class="dev_type">
	                            <ul class="clear">
	                              <li><a class="font_color" href="app.html?type=app"><img src="img/ic_phone.png" alt=""><span>App开发</span></a><b></b></li>
	                              <li><a class="font_color" href="program.html?type=program"><img src="img/ic_web_copy_4.png" alt=""><span>小程序开发</span></a><b></b></li>
	                              <li><a class="font_color" href="h5.html?type=h5"><img src="img/ic_web.png" alt=""><span>网站定制</span></a><b></b></li>
	                              <li><a class="font_color" href="phone.html?type=phone"><img src="img/ic_h5.png" alt=""><span>H5&手机网页</span></a></li>
	                            </ul>
	    										</div>
	    	                </li>
	    	                <li><a href="industry.html">行业新闻</a></li>
	    	                <li><a href="index.html?type=initial_custom">我要定制</a></li>
	    	                <li><a href="about.html">关于我们</a></li>
	    	              </ul>
	    	            </div>
	    	          </div>`,
									data:function(){
										return{
											service_index:5
										}
									},
									methods:{

									}
});
Vue.component("common-header", header);
var header = new Vue({
	el: "#header"
});


//蛋壳案例
main = Vue.extend({
	template:`<div class="box_center dankal_case">
            <div class="box_center title_top">
                <span class="titiel_content">蛋壳案例</span>
                <div class="line_left"></div>
                <div class="line_right"></div>
            </div>
            <div class="icon_box">
                <img src="img/ic_case.png" alt="" class="icon_img">
            </div>
            <!--案例的集合-->

            <div class="box_center clear all_case_box ">
                <div class="case_box" v-for="(item,index) in caseList" @click.stop='test(item.c_id)'>
                    <!--图片-->
                    <div class="case_img_Box" >
                        <img class="img_cover" style="display: block;" :src="item.img_url" alt="">
                    </div>
                    <div class="nothing"></div>
                    <!--阴影-->
                    <div class="show_bg"></div>
                    <!--文字-->
                    <p class="the_title ellipsis_2">顺丰同城 | 跨界营销打入年轻消费市场 —— 热门 IP 合作</p>
                    <p class="the_detail ellipsis_2">越来越多的著名品牌，开始借助“跨界”营销，寻求强强联合的品牌协同效应。每个动漫IP内容有了形象的故事，在此基础 […]</p>
                </div>
            </div>
        </div>`,
									data:function(){
										return{
											caseList:''
										}
									},
									methods:{
										test:function(val){
											console.log('aaa')
											window.location.href='detail.html?c_id='+val
										}
									},
									created(){

										// 判断是那个页面
										let b  = getUrlParam('type');
										let that = this;
										if(b == 'app'){
												$.ajax({
													url: api + '/Website/casesList',
													type: 'post',
													// headers: {
													// 	"token": configSELF.token,
													// },
													data: {
														type: 'web',
														case_type:'dankal'
													},
													success: function(data) {
														that.caseList = data.data.casesLst;
														console.log(that.caseList,'app数据')
													},
													error: function(error) {
														console.log(error)
													},
												});
										}else if(b == 'phone'){
												$.ajax({
													url: api + '/Website/casesList',
													type: 'post',
													// headers: {
													// 	"token": configSELF.token,
													// },
													data: {
														type: 'mobile',
														case_type:'dankal'
													},
													success: function(data) {
														that.caseList = data.data.casesLst;
														console.log(that.caseList,'mobile数据')
													},
													error: function(error) {
														console.log(error)
													},
												});
										}else if(b == 'program'){
											$.ajax({
													url: api + '/Website/casesList',
													type: 'post',
													// headers: {
													// 	"token": configSELF.token,
													// },
													data: {
														type: 'small',
														case_type:'dankal'
													},
													success: function(data) {
														that.caseList = data.data.casesLst;
														console.log(that.caseList,'small数据')
													},
													error: function(error) {
														console.log(error)
													},
												});
										}else if(b == 'h5'){
											$.ajax({
													url: api + '/Website/casesList',
													type: 'post',
													// headers: {
													// 	"token": configSELF.token,
													// },
													data: {
														type: 'applet',
														case_type:'dankal'
													},
													success: function(data) {
														that.caseList = data.data.casesLst;
														console.log(that.caseList,'applet数据')
													},
													error: function(error) {
														console.log(error)
													},
												});
										}






									}
});
Vue.component("common-case", main);
var main = new Vue({
	el: "#main"
});


//尾部组件
footer = Vue.extend({
	template:` <div> <div class="box_center_two">
			<div class="fl">
				<img src="img/logo.png" alt="">
				<p>领先的互联网解决方案</p>
			</div>
			<div class="fl">
				<ul class="clear common_line_height">
					<li><a href="index.html">首页</a></li>
					<li><a href="app.html">App开发</a></li>
					<li><a href="program.html">小程序开发</a></li>
					<li><a href="phone.html">H5&手机网页</a></li>
					<li><a href="h5.html">网站建设</a></li>
					<li><a href="about.html">关于我们</a></li>
				</ul>
				<p class="common_line_height"><span>企业 QQ</span><span class="smaller">854111157 ／ 592819479</span></p>
				<p class="middle_content common_line_height"><span>企业热线</span><span class="smaller">15018504813 ／ 15018505691 ／ 15018693554</span></p>
				<p class="common_line_height"><span>企业地址</span><span>深圳市龙岗区龙城大道花样年龙年广场2305-2306</span></p>
				<p class="line"></p>
			</div>
			<div class="fr">
				<img src="img/pic_qr.png" alt="">
			</div>
		</div>
		<p class="clear bottom_words box_center_three"><span class="fl">© DANKAL . All rights reserved . 粤ICP备16007023号-1</span><span class="fr">Wechat Number</span></p></div>`,
});
Vue.component("common-footer", footer);
var footer = new Vue({
	el: "#footer"
});






//  联系我们
contact = Vue.extend({
	template:`<div class="contact">
		<div class="inputs">
			<div class="name_numbers clear">
				<input type="text" name="" value="" v-model='name' placeholder="*姓名">
				<input type="text" name="" value="" v-model='number' placeholder="*联系电话">
			</div>
			<div class="clear mail_type">
					<input type="text" name="" value="" v-model='mail' placeholder="邮箱">
					<select v-model="type">
					  <option disabled value="">*开发类型</option>
					  <option>App开发</option>
					  <option>小程序开发</option>
					  <option>网站定制</option>
						<option>H5&手机网页</option>
					</select>
			</div>
			<div class="company_name">
				<input type="text" name="" value="" v-model='company_name' placeholder="公司名称">
			</div>
			<div class="textarea">
				<textarea name="name" v-model='needs' placeholder="可填写您的行业和您的具体需求描述，方便我们更精准地了解您的需求，我们会及时联系您，谢谢..."></textarea>
			</div>
			<div class="submit" @click.stop="submit()" >
				提交
			</div>
		</div>
	</div>`,
	data:function(){
		return{
			name:'',
			number:'',
			mail:'',
			company_name:'',
			needs:'',
			type:''
		}
	},
	methods:{
		post_requirements:function(){
			$.ajax({
				url:api+'/Website/question',
				data:{
					nick_name:this.name,
					phone:this.number,
					email:this.email,
					type:this.type,
					content:this.needs,
					company_name:this.company_name
				},
				success:function(res){
					console.log(res);
				}
			})
		},
		submit:function(){
			if(this.name==''||this.number==''||this.type==''){
				alert('请完善信息');
				return false;
			}else if(checkPhone(this.number)==false){
				alert('请输入正确的手机号码');
				return false;
			}else if(checkMail(this.mail)==false){
				alert('请输入正确的邮箱');
				return false;
			}else{
        // 提交客户需求
				this.post_requirements();
			}
		}
	}
});
Vue.component("common-contact", contact);
var contact = new Vue({
	el: "#contact"
});

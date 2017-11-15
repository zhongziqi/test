

//验证手机号码
function checkPhone(mobile) {
	if(!(/^1[34578]\d{9}$/.test(mobile))) {
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
	    	                <li><a href="#">首页</a></li>
	    	                <li><a href="#">客户案例</a></li>
	    	                <li>
	    	                  <a href="#">技术服务</a>
	    	                  <b class="b2"></b>
	    	                  <div class="dev_type">
	                            <ul class="clear">
	                              <li @click='service_click(0)'><a href="#"><img src="img/ic_phone.png" alt=""><span>App开发</span></a><b></b></li>
	                              <li @click='service_click(1)'><a href="#"><img src="img/ic_web_copy_4.png" alt=""><span>小程序开发</span></a><b></b></li>
	                              <li @click='service_click(2)'><a href="#"><img src="img/ic_web.png" alt=""><span>网站定制</span></a><b></b></li>
	                              <li @click='service_click(3)'><a href="#"><img src="img/ic_h5.png" alt=""><span>H5&手机网页</span></a></li>
	                            </ul>
	    										</div>
	    	                </li>
	    	                <li><a href="#">行业新闻</a></li>
	    	                <li><a href="#">我要定制</a></li>
	    	                <li><a href="#">关于我们</a></li>
	    	              </ul>
	    	            </div>
	    	          </div>`,
									data:function(){
										return{
											service_index:5
										}
									},
									methods:{
										service_click:function(e){

										}
									}
});
Vue.component("common-header", header);
var header = new Vue({
	el: "#header"
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
					<li><a href="#">首页</a></li>
					<li><a href="#">App开发</a></li>
					<li><a href="#">小程序开发</a></li>
					<li><a href="#">H5&手机网页</a></li>
					<li><a href="#">网站建设</a></li>
					<li><a href="#">关于我们</a></li>
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





<!-- 联系我们 -->
contact = Vue.extend({
	template:`<div class="contact">
		<div class="inputs">
			<div class="name_numbers clear">
				<input type="text" name="" value="" placeholder="*姓名">
				<input type="text" name="" value="" placeholder="*联系电话">
			</div>
			<div class="clear mail_type">
					<input type="text" name="" value="" placeholder="邮箱">
					<select>
						<option selected="selected">*开发类型</option>
						<option>Mercedes</option>
						<option>Audi</option>
					</select>
			</div>
			<div class="company_name">
				<input type="text" name="" value="" placeholder="公司名称">
			</div>
			<div class="textarea">
				<textarea name="name" placeholder="可填写您的行业和您的具体需求描述，方便我们更精准地了解您的需求，我们会及时联系您，谢谢..."></textarea>
			</div>
			<div class="submit">
				提交
			</div>
		</div>
	</div>
`,
});
Vue.component("common-contact", contact);
var contact = new Vue({
	el: "#contact"
});

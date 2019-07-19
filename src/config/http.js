
import axios from 'axios'
import {baseUrl}  from "./env"

const  appAccessToken = localStorage.getItem("appAccessToken");
// axios.defaults.timeout=500000;
const post = function(options){
	var default_options = {
		'url' : '',
		'data' : {},
		'success' : function(response){},
		'error' : function(err){}
	};
	if(options && typeof options==='object'){
		default_options = {...default_options,...options}
		axios({
		  method: 'post',
		  url: baseUrl + default_options.url,
		  data: default_options.data,
		  headers:{
				"Content-type": "application/json;charset=UTF-8",
				"appAccessToken":appAccessToken
		  }
		}).then(function(response){
		  default_options.success(response);
		})
		.catch(function(err){
		  default_options.error(err);
		});
	}else{
	console.log('post请求错误')
	}
}



const post2 = function(options){
	var default_options = {
		'url' : '',
		'data' : {},
		'success' : function(response){},
		'error' : function(err){}
	};
	if(options && typeof options==='object'){
		default_options = {...default_options,...options}
		axios({
		  method: 'post',
		  url: default_options.url,
		  data: default_options.data,
		  headers:{
				"Content-type": "application/json;charset=UTF-8",
				"appAccessToken":appAccessToken
		  }
		}).then(function(response){
		  default_options.success(response);
		})
		.catch(function(err){
		  default_options.error(err);
		});
	}else{
	console.log('post请求错误')
	}
}


const get = function(options){
	var default_options = {
		'url' : '',
		'data' : {},
		'success' : function(response){},
		'error' : function(err){}
	};
	if(options && typeof options==='object'){
		// default_options = $.extend(true,{},default_options,options);
		default_options = {...default_options,...options}

		axios.get(baseUrl + default_options.url,{
		  params:default_options.data,
			headers: {
				"Content-type": "application/x-www-form-urlencoded",
				// "Content-type": "application/json;charset=UTF-8",
				"appAccessToken": appAccessToken
			}
		})
		.then(function(response){
		  default_options.success(response);
		})
		.catch(function(err){
		  	default_options.error(err);
		});
	}else{
		console.log("get请求报错")
	}
}

const postbody = function(options){
	var default_options = {
		'url' : '',
		'data' : {},
		'success' : function(response){},
		'error' : function(err){}
	};
	if(options && typeof options==='object'){
		default_options = {...default_options,...options}
		axios({
		  method: 'post',
		  url:baseUrl+ default_options.url,
		  data: default_options.data,
		  headers:{
		    'Content-type': 'application/json;charset=UTF-8'
		  }
		}).then(function(response){
		  default_options.success(response);
		})
		.catch(function(err){
		  default_options.error(err);
		});
	}else{
		return;
	}
}

const postFile = function(options){
	var default_options = {
		'url' : '',
		'data' : {},
		'success' : function(response){},
		'error' : function(err){}
	};
	if(options && typeof options==='object'){
		default_options = {...default_options,...options}
		axios({
		  method: 'post',
		  url: baseUrl + default_options.url,
		  data: default_options.data,
		  headers:{
				'Content-type': 'multipart/form-data',
				"appAccessToken": appAccessToken
		  }
		}).then(function(response){
		  default_options.success(response);
		})
		.catch(function(err){
		  default_options.error(err);
		});
	}else{
		return;
	}
}
export  default{
	appAccessToken,
	get,
	post,
	post2,
	postFile,
	postbody
}








// HttpAx.postFile = function(options){
// 	var default_options = {
// 		'url' : '',
// 		'data' : {},
// 		'success' : function(response){},
// 		'error' : function(err){}
// 	};
// 	if(options && typeof options==='object'){
// 		default_options = {...default_options,...options}
// 		axios({
// 		  method: 'post',
// 		  url: default_options.url,
// 		  data: default_options.data,
// 		  headers:{
// 				'Content-type': 'multipart/form-data',
// 				"appAccessToken": appAccessToken
// 		  }
// 		}).then(function(response){
// 		  default_options.success(response);
// 		})
// 		.catch(function(err){
// 		  default_options.error(err);
// 		});
// 	}else{
// 		return;
// 	}
// }


// HttpAx.put = function(url, params, callback){
//     axios.put(url, params)
//       .then(function (response) {
//         callback(null, response);
//       })
//       .catch(function (error) {
//         callback(error);
//       });
// }

// HttpAx.request = function(url, callback){
//     axios.request({
//         method: 'get',
//         url: url,
//         responseType: 'text'
//     }).then(function(response){
//         callback(null, response);
//     }).catch(function(error){
//         callback(error);
//     });
// }





(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{175:function(t,e,o){"use strict";o.r(e);var n={layout:"simple",head:{title:"Admin Login"},mounted:function(){},methods:{login:function(){var t=this;event.preventDefault();var form=new FormData(event.target);axios.post("/login",form).then((function(e){e.data.admin;t.$store.commit("setAuth",e.data.admin.accessToken),$.notify("Welcome back",{type:"success",time:100,delay:5e3})})).catch((function(e){e.response?422==e.response.status||401==e.response.status?($.notify("".concat(e.response.data.message),{type:"danger",time:100,delay:5e3}),t.$store.commit("removeToken")):$.notify("".concat(e.response.statusCode),{type:"danger",time:100,delay:5e3}):($.notify("No internet connection ",{type:"danger",time:100,delay:5e3}),console.log(e)),console.log(e)}))}}},r=o(7),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("form",{staticClass:"wrapper wrapper-login",on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[t._m(0)])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container container-login animated fadeIn"},[o("h3",{staticClass:"text-center"},[t._v("Sign In To Admin")]),t._v(" "),o("div",{staticClass:"login-form"},[o("div",{staticClass:"form-group form-floating-label"},[o("input",{staticClass:"form-control input-border-bottom",attrs:{id:"email",name:"email",type:"text",required:""}}),t._v(" "),o("label",{staticClass:"placeholder",attrs:{for:"username"}},[t._v("Username")])]),t._v(" "),o("div",{staticClass:"form-group form-floating-label"},[o("input",{staticClass:"form-control input-border-bottom",attrs:{id:"password",name:"password",type:"password",required:""}}),t._v(" "),o("label",{staticClass:"placeholder",attrs:{for:"password"}},[t._v("Password")]),t._v(" "),o("div",{staticClass:"show-password"},[o("i",{staticClass:"flaticon-interface"})])]),t._v(" "),o("div",{staticClass:"row form-sub m-0"},[o("div",{staticClass:"custom-control custom-checkbox"},[o("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"rememberme"}}),t._v(" "),o("label",{staticClass:"custom-control-label",attrs:{for:"rememberme"}},[t._v("Remember Me")])])]),t._v(" "),o("div",{staticClass:"form-action mb-3"},[o("button",{staticClass:"btn btn-primary btn-rounded shadow-lg btn-login",attrs:{type:"submit"}},[t._v("Sign In")])])])])}],!1,null,null,null);e.default=component.exports}}]);
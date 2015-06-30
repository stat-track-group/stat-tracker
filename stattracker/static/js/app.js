(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";var $=require("jquery"),_=require("underscore"),views=require("views"),router=require("../router"),show=require("../show");router.route("activities/:id",function(e){$.ajax({method:"GET",url:"/api/activities/"+e}).done(function(e){show("detail-template",{activity:e})})});

},{"../router":7,"../show":8,"jquery":"jquery","underscore":"underscore","views":"views"}],2:[function(require,module,exports){
"use strict";var $=require("jquery"),_=require("underscore"),views=require("views"),router=require("../router"),show=require("../show"),getCookie=require("../csrf.js");router.route("activities/:id/edit",function(e){var i=getCookie("csrftoken");$.ajax({method:"GET",url:"/api/activities/"+e}).done(function(e){show("edit-template",{activity:e})}),$(".main-content").on("submit",".edit-record-form",function(t){t.preventDefault(),$.ajax({beforeSend:function(e){e.setRequestHeader("X-CSRFToken",i)},method:"PUT",url:"/api/activities/"+e+"/",data:{id:e,activity_name:$(".edit-activity-field").val(),description:$(".edit-description-field").val()}}).done(function(e){alert("success!")})})});

},{"../csrf.js":5,"../router":7,"../show":8,"jquery":"jquery","underscore":"underscore","views":"views"}],3:[function(require,module,exports){
"use strict";var $=require("jquery"),_=require("underscore"),views=require("views"),router=require("../router"),show=require("../show");router.route("","activities",function(){$.ajax({method:"GET",url:"/api/activities/"}).done(function(e){show("home",{activities:e})})});

},{"../router":7,"../show":8,"jquery":"jquery","underscore":"underscore","views":"views"}],4:[function(require,module,exports){
"use strict";var $=require("jquery"),_=require("underscore"),views=require("views"),router=require("../router"),show=require("../show"),show=require("../show"),getCookie=require("../csrf.js");router.route("activities/new",function(){show("new-template");var e=getCookie("csrftoken");$(".new-record-form").on("submit",function(r){r.preventDefault(),$.ajax({beforeSend:function(r){r.setRequestHeader("X-CSRFToken",e)},method:"POST",url:"/api/activities/",data:{activity_name:$(".activity-field").val(),description:$(".description-field").val()}}).done(function(e){alert("Data Saved: "+e)})})});

},{"../csrf.js":5,"../router":7,"../show":8,"jquery":"jquery","underscore":"underscore","views":"views"}],5:[function(require,module,exports){
function getCookie(e){var o=null;if(document.cookie&&""!=document.cookie)for(var t=document.cookie.split(";"),r=0;r<t.length;r++){var n=$.trim(t[r]);if(n.substring(0,e.length+1)==e+"="){o=decodeURIComponent(n.substring(e.length+1));break}}return o}var $=require("jquery");module.exports=getCookie;

},{"jquery":"jquery"}],6:[function(require,module,exports){
"use strict";var router=require("./router");({controllers:{"detail-activity":require("./controllers/detail-activity.js"),"edit-activity":require("./controllers/edit-activity.js"),"home-activities":require("./controllers/home-activities.js"),"new-activity":require("./controllers/new-activity.js")}}),router.init();

},{"./controllers/detail-activity.js":1,"./controllers/edit-activity.js":2,"./controllers/home-activities.js":3,"./controllers/new-activity.js":4,"./router":7}],7:[function(require,module,exports){
"use strict";var SortedRouter=require("./sorted-router");module.exports=new SortedRouter;

},{"./sorted-router":9}],8:[function(require,module,exports){
"use strict";var $=require("jquery"),_=require("underscore"),views=require("views");module.exports=function(e,r){var i=views[e],t=_.template(i,{variable:"m"}),u=t(r);$(".main-content").html(u)};

},{"jquery":"jquery","underscore":"underscore","views":"views"}],9:[function(require,module,exports){
"use strict";var Backbone=require("backbone"),_=require("underscore"),SortedRouter=Backbone.Router.extend({sortedRoutes:{},route:function(){for(var e=arguments.length-1,t=arguments[arguments.length-1],r=0;e>r;++r)this.sortedRoutes[arguments[r]]=t},init:function(){var e=-1e6,t=this;_.chain(_.pairs(this.sortedRoutes)).sortBy(function(t){var r=t[0];return r.indexOf("*")>=0?e:-r.split(":").length}).each(function(e){Backbone.Router.prototype.route.apply(t,e)}),Backbone.history.start()}});module.exports=SortedRouter;

},{"backbone":"backbone","underscore":"underscore"}]},{},[6])


//# sourceMappingURL=app.js.map
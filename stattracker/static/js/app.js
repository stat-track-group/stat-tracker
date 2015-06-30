(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";var $=require("jquery"),_=require("underscore"),views=require("views"),router=require("../router"),show=require("../show"),getCookie=require("../csrf.js");router.route("activities/:id/stats",function(e){show("stats");var t=getCookie("csrftoken");$(".main-content").on("submit",".stat-form",function(r){r.preventDefault(),$.ajax({beforeSend:function(e){e.setRequestHeader("X-CSRFToken",t)},method:"POST",url:"/api/stats/",data:{activity:e,value:$(".stat-input").val(),statistics_date:"1986-04-06"}}).done(function(){window.location.href="#/activities"})})});

},{"../csrf.js":8,"../router":10,"../show":11,"jquery":"jquery","underscore":"underscore","views":"views"}],2:[function(require,module,exports){
"use strict";var $=require("jquery"),_=require("underscore"),views=require("views"),router=require("../router"),show=require("../show"),getCookie=require("../csrf.js");router.route("activities/:id",function(e){var t=getCookie("csrftoken");$.ajax({method:"GET",url:"/api/activities/"+e}).done(function(e){show("detail-template",{activity:e})}),setTimeout(function(){$.ajax({method:"GET",url:"/api/activities/"+e+"/stats/"}).done(function(e){e.forEach(function(e){$(".stats-container").append(e.value)})})},100),$(".main-content").on("click",".rmv-btn",function(){$.ajax({beforeSend:function(e){e.setRequestHeader("X-CSRFToken",t)},method:"DELETE",url:"/api/activities/"+e}).done(function(){window.location.href="#/activities"})})});

},{"../csrf.js":8,"../router":10,"../show":11,"jquery":"jquery","underscore":"underscore","views":"views"}],3:[function(require,module,exports){
"use strict";var $=require("jquery"),_=require("underscore"),views=require("views"),router=require("../router"),show=require("../show"),getCookie=require("../csrf.js");router.route("activities/:id/edit",function(e){var i=getCookie("csrftoken");$.ajax({method:"GET",url:"/api/activities/"+e}).done(function(e){show("edit-template",{activity:e})}),$(".main-content").on("submit",".edit-record-form",function(t){t.preventDefault(),$.ajax({beforeSend:function(e){e.setRequestHeader("X-CSRFToken",i)},method:"PUT",url:"/api/activities/"+e+"/",data:{id:e,activity_name:$(".edit-activity-field").val(),description:$(".edit-description-field").val()}}).done(function(e){window.location.href="#/activities"})})});

},{"../csrf.js":8,"../router":10,"../show":11,"jquery":"jquery","underscore":"underscore","views":"views"}],4:[function(require,module,exports){
"use strict";var $=require("jquery"),_=require("underscore"),views=require("views"),router=require("../router"),show=require("../show");router.route("activities",function(){$.ajax({method:"GET",url:"/api/activities/"}).done(function(e){show("home",{activities:e})})});

},{"../router":10,"../show":11,"jquery":"jquery","underscore":"underscore","views":"views"}],5:[function(require,module,exports){
"use strict";var $=require("jquery"),_=require("underscore"),views=require("views"),router=require("../router"),show=require("../show");router.route("",function(){show("landing-page")});

},{"../router":10,"../show":11,"jquery":"jquery","underscore":"underscore","views":"views"}],6:[function(require,module,exports){
"use strict";var $=require("jquery"),_=require("underscore"),views=require("views"),router=require("../router"),show=require("../show"),show=require("../show"),getCookie=require("../csrf.js");router.route("activities/new",function(){show("new-template");var e=getCookie("csrftoken");$(".new-record-form").on("submit",function(i){i.preventDefault(),$.ajax({beforeSend:function(i){i.setRequestHeader("X-CSRFToken",e)},method:"POST",url:"/api/activities/",data:{activity_name:$(".activity-field").val(),description:$(".description-field").val()}}).done(function(){window.location.href="#/activities"})})});

},{"../csrf.js":8,"../router":10,"../show":11,"jquery":"jquery","underscore":"underscore","views":"views"}],7:[function(require,module,exports){
"use strict";var $=require("jquery"),_=require("underscore"),views=require("views"),router=require("../router"),show=require("../show"),getCookie=require("../csrf.js");router.route("user",function(){var e=getCookie("csrftoken");show("registration"),$(".registration-form").on("submit",function(r){r.preventDefault(),$.ajax({beforeSend:function(r){r.setRequestHeader("X-CSRFToken",e)},method:"POST",url:"/api/users/",data:{username:$(".reg-username").val(),first_name:$(".reg-firstName").val(),last_name:$(".reg-lastName").val(),password:$(".password").val()}}).done(function(){window.location.href="#/activities"})})});

},{"../csrf.js":8,"../router":10,"../show":11,"jquery":"jquery","underscore":"underscore","views":"views"}],8:[function(require,module,exports){
function getCookie(e){var o=null;if(document.cookie&&""!=document.cookie)for(var t=document.cookie.split(";"),r=0;r<t.length;r++){var n=$.trim(t[r]);if(n.substring(0,e.length+1)==e+"="){o=decodeURIComponent(n.substring(e.length+1));break}}return o}var $=require("jquery");module.exports=getCookie;

},{"jquery":"jquery"}],9:[function(require,module,exports){
"use strict";var router=require("./router");({controllers:{"add-stat":require("./controllers/add-stat.js"),"detail-activity":require("./controllers/detail-activity.js"),"edit-activity":require("./controllers/edit-activity.js"),"home-activities":require("./controllers/home-activities.js"),landing:require("./controllers/landing.js"),"new-activity":require("./controllers/new-activity.js"),reistration:require("./controllers/reistration.js")}}),router.init();

},{"./controllers/add-stat.js":1,"./controllers/detail-activity.js":2,"./controllers/edit-activity.js":3,"./controllers/home-activities.js":4,"./controllers/landing.js":5,"./controllers/new-activity.js":6,"./controllers/reistration.js":7,"./router":10}],10:[function(require,module,exports){
"use strict";var SortedRouter=require("./sorted-router");module.exports=new SortedRouter;

},{"./sorted-router":12}],11:[function(require,module,exports){
"use strict";var $=require("jquery"),_=require("underscore"),views=require("views");module.exports=function(e,r){var i=views[e],t=_.template(i,{variable:"m"}),u=t(r);$(".main-content").html(u)};

},{"jquery":"jquery","underscore":"underscore","views":"views"}],12:[function(require,module,exports){
"use strict";var Backbone=require("backbone"),_=require("underscore"),SortedRouter=Backbone.Router.extend({sortedRoutes:{},route:function(){for(var e=arguments.length-1,t=arguments[arguments.length-1],r=0;e>r;++r)this.sortedRoutes[arguments[r]]=t},init:function(){var e=-1e6,t=this;_.chain(_.pairs(this.sortedRoutes)).sortBy(function(t){var r=t[0];return r.indexOf("*")>=0?e:-r.split(":").length}).each(function(e){Backbone.Router.prototype.route.apply(t,e)}),Backbone.history.start()}});module.exports=SortedRouter;

},{"backbone":"backbone","underscore":"underscore"}]},{},[9])


//# sourceMappingURL=app.js.map
/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[6],{384:function(ha,ca,h){function ba(e,h,r){h.endsWith("/")||(h+="/");r=r||{};var w=r.disableWebsockets||!1;this.lT=r.singleServerMode||!1;null!=r.customQueryParameters&&Object(n.b)("wvsQueryParameters",r.customQueryParameters);h.endsWith("blackbox/")||(h+="blackbox/");this.Im=r.uploadData||null;this.Pv=r.uriData||null;this.gM=r.cacheKey||null;this.zD=Object(f.a)(h,null,w);this.Kf=h;this.QD=e;this.kf=null;this.Mh=z();this.Ml=z();
this.Yx=!1;this.Xf=this.Yd=this.pe=this.Ue=null;this.sf=[];this.Ky=[];this.cache={};this.timeStamp=0;this.Gf=[];this.Pg=[];this.nE=null;this.JD=!1;this.DH=this.id=null;this.eG=this.cP=ea;this.JA=0;this.mF=!1;this.j6=1;this.Sz={};this.jz=null;this.xr(!0)}function z(){var e={promise:null,resolve:null,reject:null,state:0,result:null,request:null,ko:function(){return 1===(e.state&1)},h5:function(){return 2===(e.state&2)},Hh:function(){return!e.h5()&&!e.ko()},O4:function(){return 4===(e.state&4)},AS:function(){e.state|=
4}};e.promise=new Promise(function(f,h){e.resolve=function(){if(0===e.state||4===e.state)e.state=1,e.result=arguments[0],f.apply(null,arguments)};e.reject=function(){if(0===e.state||4===e.state)e.state=2,h.apply(null,arguments)}});return e}function ea(){return!1}function da(e,f,h){if(!(f in ia))return!0;f=ia[f];for(var n=0;n<f.length;n++){var r=e;var w=f[n];var x=h;if(w.name in r){var y="",z=!1;r=r[w.name];switch(w.type){case "s":y="String";z=Object(aa.isString)(r);break;case "a":y="Array";z=Object(aa.isArray)(r);
break;case "n":y="Number";z=Object(aa.isNumber)(r)&&Object(aa.isFinite)(r);break;case "o":y="Object",z=Object(aa.isObject)(r)&&!Object(aa.isArray)(r)}z||x.reject('Expected response field "'+w.name+'" to have type '+y);w=z}else x.reject('Response missing field "'+w.name+'"'),w=!1;if(!w)return!1}return!0}h.r(ca);var aa=h(0);h.n(aa);var y=h(1);ha=h(36);var f=h(401),e=h(26),x=h(75),r=h(306),w=h(123),n=h(35),fa=h(135),ia={pages:[{name:"pages",type:"a"}],pdf:[{name:"url",type:"s"}],docmod:[{name:"url",
type:"s"},{name:"rID",type:"s"}],health:[],tiles:[{name:"z",type:"n"},{name:"rID",type:"n"},{name:"tiles",type:"a"},{name:"size",type:"n"}],annots:[{name:"url",type:"s"},{name:"name",type:"s"}],image:[{name:"url",type:"s"},{name:"name",type:"s"},{name:"p",type:"n"}],text:[{name:"url",type:"s"},{name:"name",type:"s"},{name:"p",type:"n"}]};ba.prototype=Object(aa.extend)(ba.prototype,{q_:function(){var e=this;return new Promise(function(f,h){var n=new XMLHttpRequest;n.open("GET",e.Kf+"ck");n.withCredentials=
e.Xn();n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(200===n.status?f():h())};n.send()})},z$:function(e,f){this.cP=e||ea;this.eG=f||ea},wM:function(){var e=this;this.Ml=z();this.Mh=z();return this.zD.bE().then(function(){e.Yx=!1;e.id=null;e.JD=!1;return e.q_()})},oH:function(){this.cP();this.xz();this.Ue&&(this.Ue.Hh()?this.lf(this.Ue.request):this.Ue.ko()&&this.eG(this.Ue.result.url,"pdf")&&(this.Ue=null,this.ZR()));this.Xf&&this.Xf.Hh()&&this.lf(this.Xf.request);this.pe&&
this.pe.Hh()?this.lf(this.pe.request):this.Yd&&this.Yd.Hh()&&this.QO(this.Yd.request);var e;for(e=0;e<this.Gf.length;e++)this.Gf[e]&&this.Gf[e]&&(this.Gf[e].Hh()?this.lf(this.Gf[e].request):this.Gf[e].ko()&&this.eG(this.Gf[e].result.url,"image")&&(this.Gf[e]=null,this.GA(e)));for(e=0;e<this.Pg.length;e++)this.Pg[e]&&this.Pg[e]&&this.Pg[e].Hh()&&!this.Pg[e].O4()&&this.lf(this.Pg[e].request);for(e=0;e<this.sf.length;e++)this.sf[e]&&this.sf[e].Hh()&&this.lf(this.sf[e].request)},xz:function(e){var f=
this;this.Yx||(this.timeStamp=Date.now(),this.zD.iI(function(e){f.w6(e)},function(){return null},function(){return null},!0).then(function(){clearInterval(f.AA);f.AA=null},function(h){f.Yx=!1;if(!f.AA){var n=0;f.JD=!0;f.DH=0;f.AA=setInterval(function(){2>n++?f.oH():(clearInterval(f.AA),e&&e.reject(w.a),Object(y.e)("Blackbox connection failed:"+h))},5E3)}}),this.Yx=!0)},Kba:function(){var f=this,h=createPromiseCapability();if(this.Im){var n=new FormData;n.append("file",this.Im.fileHandle,this.Im.fileHandle.name);
var r=this.Im.loadCallback;var w="upload";var x=this.Im.extension}else if(this.Pv){n={uri:this.Pv.uri,ufa:this.Pv.shareId};n=Object.keys(n).map(function(e){return e+"="+(n[e]?encodeURIComponent(n[e]):"")}).join("&");var y="application/x-www-form-urlencoded; charset=UTF-8";r=this.Pv.loadCallback;w="url";x=this.Pv.extension}else return Promise.resolve();var z=new XMLHttpRequest,aa=Object(e.i)(f.Kf,"AuxUpload");aa=Object(fa.a)(aa)+"&type="+w+"&ext="+x;z.open("POST",aa);z.withCredentials=this.Xn();y&&
z.setRequestHeader("Content-Type",y);z.addEventListener("load",function(){if(z.readyState===z.DONE&&200===z.status){var e=JSON.parse(z.response);f.QD=e.uri;r(e);h.resolve(e)}});z.addEventListener("error",function(){h.reject(z.statusText+" "+JSON.stringify(z))});this.Im&&null!=this.Im.onProgress&&(z.upload.onprogress=function(e){f.Im.onProgress(e)});z.send(n);return h.promise},Q$:function(e){this.jz=e},N3:function(e){this.password&&this.Mh.ko()?e(this.password):this.jz(e)},l9:function(e){this.password=
e||null;this.Mh.ko()||(this.xz(this.Mh),this.lf({t:"pages"}));return this.Mh.promise},hv:function(e){this.nE=e||null;this.Mh.ko()||(this.xz(this.Mh),this.lf({t:"pages"}));return this.Mh.promise},yM:function(e){e=Object.assign(e,{uri:encodeURIComponent(this.QD)});this.nE&&(e.ext=this.nE);this.kf&&(e.c=this.kf);this.password&&(e.pswd=this.password);this.gM&&(e.cacheKey=this.gM);return e},lf:function(e){e=this.yM(e);this.zD.send(e)},Zj:function(e){return e},w6:function(e){var f=this,h=e.data,r=e.err,
w=e.t;if(r&&f.jz&&"This document could not be decrypted with the given password"===r)f.jz(function(e){f.l9(e)});else switch(w){case "upload":r?f.Lba.reject(r):f.Lba.resolve("Success");break;case "pages":r?f.Mh.reject(r):da(h,w,f.Mh)&&f.Mh.resolve(h);break;case "config":r?f.Ml.reject(r):da(h,w,f.Ml)&&(h.id&&(f.id=h.id),h.auth&&(e=Object(n.a)("wvsQueryParameters"),e.auth=h.auth,Object(n.b)("wvsQueryParameters",e)),h.serverVersion&&(f.dca=h.serverVersion,Object(y.f)("[WebViewer Server] server version: "+
f.dca)),h.serverID?(f.JA=h.serverID===f.DH&&f.mF?f.JA+1:0,f.DH=h.serverID):f.JA=0,f.mF=!1,f.Ml.resolve(h));break;case "health":r?f.Ml.reject(r):da(h,w,f.Ml)&&(h=h.unhealthy,f.lT&&h?Object(y.h)("Server failed health check. Single server mode ignoring check."):!f.Sda&&h&&1>=f.JA&&(f.mF=!0,f.wM().then(function(){f.oH()},function(){f.oH()})));break;case "pdf":h.url=Object(fa.a)(f.Kf+"../"+encodeURI(h.url));r?f.Ue.reject(r):da(h,w,f.Ue)&&f.Ue.resolve(h);break;case "docmod":h.url=Object(fa.a)(f.Kf+"../"+
encodeURI(h.url));r?f.Sz[h.rID].reject(r):da(h,w,f.Ue)&&f.Sz[h.rID].resolve(h);break;case "xod":if(r)this.pe&&this.pe.Hh()&&this.pe.reject(r),this.Yd&&this.Yd.Hh()&&this.Yd.reject(r);else if(h.notFound)h.noCreate||this.pe&&this.pe.Hh()&&this.pe.resolve(h),this.Yd&&this.Yd.Hh()&&this.Yd.resolve(h);else{h.url&&(h.url=Object(fa.a)(f.Kf+"../"+encodeURI(h.url)));if(!this.Yd||this.Yd.ko())this.Yd=z(),this.Yd.request={t:"xod",noCreate:!0};this.pe||(this.pe=z(),this.pe.request={t:"xod"});this.Yd.resolve(h);
this.pe.resolve(h)}break;case "annots":if(r)f.Xf.reject(r);else if(da(h,w,f.Xf)){f.Xf.AS();var aa=new XMLHttpRequest;e=f.Kf+"../"+encodeURI(h.url);var ba=h.hasAppearance?Object(fa.a)(e+".xodapp"):null;aa.open("GET",Object(fa.a)(e));aa.responseType="text";aa.withCredentials=this.Xn();aa.addEventListener("load",function(){aa.readyState===aa.DONE&&200===aa.status&&f.Xf.resolve({FI:aa.response,TL:ba})});aa.addEventListener("error",function(){f.Xf.reject(aa.statusText+" "+JSON.stringify(aa))});aa.send()}break;
case "image":var ca=this.Gf[h.p];r?ca.promise.reject(r):da(h,w,ca)&&(ca.result=h,ca.result.url=Object(fa.a)(f.Kf+"../"+encodeURI(ca.result.url)),ca.resolve(ca.result));break;case "tiles":ca=h.rID;e=this.sf[ca];this.sf[ca]=null;this.Ky.push(ca);if(r)e.reject(r);else if(da(h,w,e)){for(r=0;r<h.tiles.length;r++)h.tiles[r]=Object(fa.a)(f.Kf+"../"+encodeURI(h.tiles[r]));e.resolve(h)}break;case "text":ca=this.Pg[h.p];if(r)ca.reject(r);else if(da(h,w,ca)){ca.AS();var ea=new XMLHttpRequest;h=Object(fa.a)(f.Kf+
"../"+encodeURI(h.url));ea.open("GET",h);ea.withCredentials=this.Xn();ea.addEventListener("load",function(){ea.readyState===ea.DONE&&200===ea.status&&(ca.result=JSON.parse(ea.response),ca.resolve(ca.result))});ea.addEventListener("error",function(e){ca.reject(ea.statusText+" "+JSON.stringify(e))});ea.send()}break;case "progress":"loading"===h.t&&f.trigger(x.a.Events.DOCUMENT_LOADING_PROGRESS,[h.bytes,h.total])}},RN:function(){this.xz(this.Ml);return this.Ml.promise},O1:function(){this.Xf||(this.Xf=
z(),this.Xf.request={t:"annots"},this.lf(this.Xf.request));return this.Xf.promise},GA:function(e){this.Gf[e]||(this.Gf[e]=z(),this.Gf[e].request={t:"image",p:e},this.lf(this.Gf[e].request));return this.Gf[e].promise},m9:function(e){this.Pg[e]||(this.Pg[e]=z(),this.Pg[e].request={t:"text",p:e},this.lf(this.Pg[e].request));return this.Pg[e].promise},n9:function(e,f,h,n){var r=this.sf.length;this.Ky.length&&(r=this.Ky.pop());this.sf[r]=z();this.sf[r].request={t:"tiles",p:e,z:f,r:h,size:n,rID:r};this.lf(this.sf[r].request);
return this.sf[r].promise},ZR:function(){this.Ue||(this.Ue=z(),this.Ue.request={t:"pdf"},this.JD?this.Ue.resolve({url:this.QD}):this.lf(this.Ue.request));return this.Ue.promise},jO:function(e){var f=this,h=new XMLHttpRequest,n=Object(fa.a)(this.Kf+"aul")+"&id="+this.id,r=new FormData,w={};e.annots&&(w.annots="xfdf");e.watermark&&(w.watermark="png");e.redactions&&(w.redactions="redact");w={t:"docmod",reqID:this.j6++,parts:w};e.print&&(w.print=!0);var x=this.yM(w);r.append("msg",JSON.stringify(x));
return Promise.all([e.annots,e.watermark,e.redactions].map(function(e){return Promise.resolve(e)})).then(function(e){var w=e[0],y=e[1],aa=e[2];w&&r.append("annots",w);y&&r.append("watermark",e.watermark);aa&&r.append("redactions",aa);f.Sz[x.reqID]=z();h.open("POST",n);h.withCredentials=f.Xn;e=new Promise(function(e,f){h.onreadystatechange=function(){4===h.readyState&&(200===h.status?e():f("An error occurred while sending down annotation data to the server"))}});h.send(r);return e.then(function(){return f.Sz[x.reqID].promise})})},
QO:function(){this.Yd||(this.Yd=z(),this.Yd.request={t:"xod",noCreate:!0},this.lf(this.Yd.request));return this.Yd.promise},o9:function(){this.pe||(this.pe=z(),this.pe.request={t:"xod"},this.lf(this.pe.request));return this.pe.promise},um:function(){return!0},request:function(){},tR:function(){},abort:function(){for(var e=0;e<this.sf.length;e++)this.sf[e]&&(this.sf[e].resolve(null),this.sf[e]=null,this.Ky.push(e));this.close()},TA:function(e){this.kf=this.kf||{};this.kf.headers=e},nea:function(){return this.kf?
Object(aa.omit)(this.kf.headers,["Cookie","cookie"]):null},xr:function(e){this.kf=this.kf||{};this.kf.internal=this.kf.internal||{};this.kf.internal.withCredentials=e},Xn:function(){return this.kf&&this.kf.internal?this.kf.internal.withCredentials:null},getFileData:function(){return Promise.reject()}});Object(ha.b)(ba);Object(r.a)(ba);Object(r.b)(ba);ca["default"]=ba},401:function(ha,ca,h){function ba(h,f,e){function x(e,f){function h(e){r().then(function(f){ca&&!ha?setTimeout(function(){h(e)},1):
f.send(JSON.stringify(e))})}function n(e,f,n,r){var fa=window.createPromiseCapability(),ia=!1,ja=fa;y=e;z=f;ba=n;x=null;r&&(e=Object(da.a)("wvsQueryParameters"),e.bcid=Object(ea.j)(8),Object(da.b)("wvsQueryParameters",e));try{e=Ba?ya+"/"+Ba:ya+"/ws";e=Object(aa.a)(e);var ka=new WebSocket(e);ka.onopen=function(){fa.resolve();ia=!0;fa=null;ca=!1;w.resolve(ka);z&&z()};ka.onerror=function(e){ca=ha=!0;fa&&fa.reject(e);x&&x.reject()};ka.onclose=function(){w=window.createPromiseCapability();ca=!0;x||(x=
window.createPromiseCapability());x.resolve();ba&&ba();y&&ia&&y({t:"health",data:{unhealthy:!0,isDead:!0}})};ka.onmessage=function(e){e&&e.data&&(e=JSON.parse(e.data),e.hb?h({hb:!0}):e.end?close():y(e))}}catch(Fa){fa.reject(Fa),fa=null}return ja.promise}function r(){ca&&y&&n(y);return w.promise}var w=window.createPromiseCapability(),x=null,y,z,ba=null,ca=!1,ha=!1,Ba=f,ya=function(e){var f=e.indexOf("://"),h="ws://";0>f?f=0:(5===f&&(h="wss://"),f+=3);var n=e.lastIndexOf("/");0>n&&(n=e.length);return h+
e.slice(f,n)}(e);return{send:h,iI:n,bE:function(){return x?x.promise:r().then(function(e){x=window.createPromiseCapability();y=null;e.close();return x.promise})}}}function r(e){var f=e.lastIndexOf("/");0>f&&(f=e.length);return e.slice(0,f)}return window.WebSocket&&!e?x(h,f):function(e,f){function h(e){(da?da.promise:Promise.resolve(ca)).then(function(f){var h=new XMLHttpRequest,n=ba?y+"/"+ba+"pf":y+"/pf";n=Object(aa.a)(n)+"&id="+f;f=new FormData;f.append("data",JSON.stringify(e));h.open("POST",n);
h.withCredentials=!0;h.send(f)})}function n(){ca=0;da||(da=window.createPromiseCapability())}function w(){x=new XMLHttpRequest;var e=y+"/pf";e+=0!==ca?"?id="+ca+"&uc="+ya:"?uc="+ya;ya++;x.open("GET",e,!0);x.withCredentials=!0;x.setRequestHeader("Cache-Control","no-cache");x.setRequestHeader("X-Requested-With","XMLHttpRequest");var f=x,r=!1;x.onreadystatechange=function(){a:if(3<=f.readyState&&!r){try{var e=f.responseText.length}catch(Ca){Object(z.f)("caught exception");break a}if(0<e)try{var x=f.responseText.split("\n");
for(x[x.length-1]&&x.pop();0<x.length&&3>x[x.length-1].length;)"]"===x.pop()&&n();0<x.length&&3>x[0].length&&x.shift();for(e=0;e<x.length;++e)x[e].endsWith(",")&&(x[e]=x[e].substr(0,x[e].length-1));0===ca&&0<x.length&&(ca=JSON.parse(x.shift()).id,e=da,da=null,e.resolve(ca));var y;for(e=0;e<x.length;++e)(y=JSON.parse(x[e]))&&y.end?close():y&&y.hb&&y.id===ca?h({hb:!0}):Ba(y)}catch(Ca){}ea||(r=!0,w())}};x.send()}var x,y=r(e),ba=f,ca=0,da=window.createPromiseCapability(),ea=!1,ha=null,Ba=null,ya=0;return{send:h,
iI:function(e,f,h){Ba=e;ha=h;ea=!1;n();w();f&&f();return Promise.resolve()},bE:function(){n();Ba=null;ea=!0;ha&&ha();x.abort();return Promise.resolve()}}}(h,f)}h.d(ca,"a",function(){return ba});var z=h(1),ea=h(26),da=h(35),aa=h(135)}}]);}).call(this || window)

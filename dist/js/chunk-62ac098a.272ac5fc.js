(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62ac098a"],{"0366":function(t,n,e){var r=e("1c0b");t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},"06cf":function(t,n,e){var r=e("83ab"),o=e("d1e7"),i=e("5c6c"),c=e("fc6a"),a=e("c04e"),u=e("5135"),f=e("0cfb"),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=c(t),n=a(n,!0),f)try{return s(t,n)}catch(e){}if(u(t,n))return i(!o.f.call(t,n),t[n])}},"0ccb":function(t,n,e){var r=e("50c4"),o=e("1148"),i=e("1d80"),c=Math.ceil,a=function(t){return function(n,e,a){var u,f,s=String(i(n)),l=s.length,d=void 0===a?" ":String(a),p=r(e);return p<=l||""==d?s:(u=p-l,f=o.call(d,c(u/d.length)),f.length>u&&(f=f.slice(0,u)),t?s+f:f+s)}};t.exports={start:a(!1),end:a(!0)}},"0d03":function(t,n,e){var r=e("6eeb"),o=Date.prototype,i="Invalid Date",c="toString",a=o[c],u=o.getTime;new Date(NaN)+""!=i&&r(o,c,(function(){var t=u.call(this);return t===t?a.call(this):i}))},1148:function(t,n,e){"use strict";var r=e("a691"),o=e("1d80");t.exports="".repeat||function(t){var n=String(o(this)),e="",i=r(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(n+=n))1&i&&(e+=n);return e}},"1be4":function(t,n,e){var r=e("d066");t.exports=r("document","documentElement")},"1c0b":function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},"1d80":function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"1dde":function(t,n,e){var r=e("d039"),o=e("b622"),i=e("2d00"),c=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[],e=n.constructor={};return e[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},"23cb":function(t,n,e){var r=e("a691"),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},"23e7":function(t,n,e){var r=e("da84"),o=e("06cf").f,i=e("9112"),c=e("6eeb"),a=e("ce4e"),u=e("e893"),f=e("94ca");t.exports=function(t,n){var e,s,l,d,p,v,h=t.target,b=t.global,g=t.stat;if(s=b?r:g?r[h]||a(h,{}):(r[h]||{}).prototype,s)for(l in n){if(p=n[l],t.noTargetGet?(v=o(s,l),d=v&&v.value):d=s[l],e=f(b?l:h+(g?".":"#")+l,t.forced),!e&&void 0!==d){if(typeof p===typeof d)continue;u(p,d)}(t.sham||d&&d.sham)&&i(p,"sham",!0),c(s,l,p,t)}}},"241c":function(t,n,e){var r=e("ca84"),o=e("7839"),i=o.concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},"265e":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",[e("v-row",[t._l(t.imgs,(function(t){return e("v-list",{key:t.id,staticStyle:{display:"inline"}},[e("img",{attrs:{src:t.url,width:"68"}})])})),e("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[e("video",{ref:"rVideo",staticClass:"style_video"})]),e("v-col",{staticClass:"mt-5 text-center",attrs:{cols:"12"}},[e("p",[t._v("iOS는 지원하지 않습니다.")])])],2),e("div",{staticClass:"text-center my-3"},[this.bIsWait?t._e():e("v-btn",{attrs:{color:"red",fab:"",dark:"",bottom:""},on:{click:function(n){return t.fnCameraCapture()}}},[e("v-icon",[t._v("camera")])],1),this.bIsWait?e("v-progress-circular",{attrs:{size:50,indeterminate:"",color:"grey"}}):t._e()],1)],1)},o=[],i=(e("7db0"),e("d81d"),e("accc"),e("0d03"),e("05a2")),c={name:"App",firebase:{oTodos:i["b"]},data:function(){return{imgs:[{url:e("08d4")},{url:e("fafb")},{url:e("8554")},{url:e("9d62")},{url:e("7d05")},{url:e("fe6b")},{url:e("78ee")}],oTodos:[],oVideoStream:null,itemPic:null,bIsWait:!1}},created:function(){var t=this.$route.params.p_id;this.itemPic=this.oTodos.find((function(n){return n[".key"]===t}))},mounted:function(){var t=this;navigator.mediaDevices.getUserMedia({video:!0}).then((function(n){t.oVideoStream=n,t.$refs.rVideo.srcObject=n,t.$refs.rVideo.play()}))["catch"]((function(t){console.log(t)}))},destroyed:function(){var t=this.oVideoStream.getTracks();t.map((function(t){return t.stop()}))},methods:{fnCameraCapture:function(){var t=this.itemPic;this.bIsWait=!0;var n=this.oVideoStream.getVideoTracks()[0],e=new window.ImageCapture(n),r={imageHeight:359,imageWidth:640,fillLightMode:"off"},o=this;return e.takePhoto(r).then((function(n){var e=o.oVideoStream.getTracks();e.map((function(t){return t.stop()})),console.log("캡처: "+n.type+", "+n.size+"바이트");var r=(new Date).toISOString(),c=i["a"].ref("images").child("pic"+r).put(n);c.on("state_changed",(function(t){var n=t.bytesTransferred/t.totalBytes*100;console.log("업로드: "+n+"% 완료",t.state)}),(function(t){console.log(t)}),(function(){c.snapshot.ref.getDownloadURL().then((function(n){console.log("업로드URL:",n),i["b"].child(t[".key"]).update({b_completed:!0,filename:"pic"+r,url:n}).then(o.$router.push("/"))}))}))}))}}},a=c,u=(e("2b75"),e("2877")),f=e("6544"),s=e.n(f),l=e("8336"),d=e("62ad"),p=e("a523"),v=e("132d"),h=e("8860"),b=e("490a"),g=e("0fd9b"),m=Object(u["a"])(a,r,o,!1,null,null,null);n["default"]=m.exports;s()(m,{VBtn:l["a"],VCol:d["a"],VContainer:p["a"],VIcon:v["a"],VList:h["a"],VProgressCircular:b["a"],VRow:g["a"]})},"2b75":function(t,n,e){"use strict";var r=e("f44f"),o=e.n(r);o.a},"2d00":function(t,n,e){var r,o,i=e("da84"),c=e("342f"),a=i.process,u=a&&a.versions,f=u&&u.v8;f?(r=f.split("."),o=r[0]+r[1]):c&&(r=c.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/),r&&(o=r[1]))),t.exports=o&&+o},"342f":function(t,n,e){var r=e("d066");t.exports=r("navigator","userAgent")||""},"37e8":function(t,n,e){var r=e("83ab"),o=e("9bf2"),i=e("825a"),c=e("df75");t.exports=r?Object.defineProperties:function(t,n){i(t);var e,r=c(n),a=r.length,u=0;while(a>u)o.f(t,e=r[u++],n[e]);return t}},"428f":function(t,n,e){var r=e("da84");t.exports=r},"44ad":function(t,n,e){var r=e("d039"),o=e("c6b6"),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},"44d2":function(t,n,e){var r=e("b622"),o=e("7c73"),i=e("9bf2"),c=r("unscopables"),a=Array.prototype;void 0==a[c]&&i.f(a,c,{configurable:!0,value:o(null)}),t.exports=function(t){a[c][t]=!0}},"4d64":function(t,n,e){var r=e("fc6a"),o=e("50c4"),i=e("23cb"),c=function(t){return function(n,e,c){var a,u=r(n),f=o(u.length),s=i(c,f);if(t&&e!=e){while(f>s)if(a=u[s++],a!=a)return!0}else for(;f>s;s++)if((t||s in u)&&u[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},"50c4":function(t,n,e){var r=e("a691"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},"56ef":function(t,n,e){var r=e("d066"),o=e("241c"),i=e("7418"),c=e("825a");t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},"64e5":function(t,n,e){"use strict";var r=e("d039"),o=e("0ccb").start,i=Math.abs,c=Date.prototype,a=c.getTime,u=c.toISOString;t.exports=r((function(){return"0385-07-25T07:06:39.999Z"!=u.call(new Date(-50000000000001))}))||!r((function(){u.call(new Date(NaN))}))?function(){if(!isFinite(a.call(this)))throw RangeError("Invalid time value");var t=this,n=t.getUTCFullYear(),e=t.getUTCMilliseconds(),r=n<0?"-":n>9999?"+":"";return r+o(i(n),r?6:4,0)+"-"+o(t.getUTCMonth()+1,2,0)+"-"+o(t.getUTCDate(),2,0)+"T"+o(t.getUTCHours(),2,0)+":"+o(t.getUTCMinutes(),2,0)+":"+o(t.getUTCSeconds(),2,0)+"."+o(e,3,0)+"Z"}:u},"65f0":function(t,n,e){var r=e("861d"),o=e("e8b5"),i=e("b622"),c=i("species");t.exports=function(t,n){var e;return o(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!o(e.prototype)?r(e)&&(e=e[c],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},7418:function(t,n){n.f=Object.getOwnPropertySymbols},7839:function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,n,e){var r=e("1d80");t.exports=function(t){return Object(r(t))}},"7c73":function(t,n,e){var r,o=e("825a"),i=e("37e8"),c=e("7839"),a=e("d012"),u=e("1be4"),f=e("cc12"),s=e("f772"),l=">",d="<",p="prototype",v="script",h=s("IE_PROTO"),b=function(){},g=function(t){return d+v+l+t+d+"/"+v+l},m=function(t){t.write(g("")),t.close();var n=t.parentWindow.Object;return t=null,n},y=function(){var t,n=f("iframe"),e="java"+v+":";return n.style.display="none",u.appendChild(n),n.src=String(e),t=n.contentWindow.document,t.open(),t.write(g("document.F=Object")),t.close(),t.F},w=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(n){}w=r?m(r):y();var t=c.length;while(t--)delete w[p][c[t]];return w()};a[h]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(b[p]=o(t),e=new b,b[p]=null,e[h]=t):e=w(),void 0===n?e:i(e,n)}},"7db0":function(t,n,e){"use strict";var r=e("23e7"),o=e("b727").find,i=e("44d2"),c=e("ae40"),a="find",u=!0,f=c(a);a in[]&&Array(1)[a]((function(){u=!1})),r({target:"Array",proto:!0,forced:u||!f},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i(a)},"94ca":function(t,n,e){var r=e("d039"),o=/#|\.prototype\./,i=function(t,n){var e=a[c(t)];return e==f||e!=u&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},a691:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},accc:function(t,n,e){var r=e("23e7"),o=e("64e5");r({target:"Date",proto:!0,forced:Date.prototype.toISOString!==o},{toISOString:o})},ae40:function(t,n,e){var r=e("83ab"),o=e("d039"),i=e("5135"),c=Object.defineProperty,a={},u=function(t){throw t};t.exports=function(t,n){if(i(a,t))return a[t];n||(n={});var e=[][t],f=!!i(n,"ACCESSORS")&&n.ACCESSORS,s=i(n,0)?n[0]:u,l=i(n,1)?n[1]:void 0;return a[t]=!!e&&!o((function(){if(f&&!r)return!0;var t={length:-1};f?c(t,1,{enumerable:!0,get:u}):t[1]=1,e.call(t,s,l)}))}},b727:function(t,n,e){var r=e("0366"),o=e("44ad"),i=e("7b0b"),c=e("50c4"),a=e("65f0"),u=[].push,f=function(t){var n=1==t,e=2==t,f=3==t,s=4==t,l=6==t,d=5==t||l;return function(p,v,h,b){for(var g,m,y=i(p),w=o(y),x=r(v,h,3),O=c(w.length),S=0,C=b||a,T=n?C(p,O):e?C(p,0):void 0;O>S;S++)if((d||S in w)&&(g=w[S],m=x(g,S,y),t))if(n)T[S]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return S;case 2:u.call(T,g)}else if(s)return!1;return l?-1:f||s?s:T}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},ca84:function(t,n,e){var r=e("5135"),o=e("fc6a"),i=e("4d64").indexOf,c=e("d012");t.exports=function(t,n){var e,a=o(t),u=0,f=[];for(e in a)!r(c,e)&&r(a,e)&&f.push(e);while(n.length>u)r(a,e=n[u++])&&(~i(f,e)||f.push(e));return f}},d066:function(t,n,e){var r=e("428f"),o=e("da84"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},d1e7:function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},d81d:function(t,n,e){"use strict";var r=e("23e7"),o=e("b727").map,i=e("1dde"),c=e("ae40"),a=i("map"),u=c("map");r({target:"Array",proto:!0,forced:!a||!u},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},df75:function(t,n,e){var r=e("ca84"),o=e("7839");t.exports=Object.keys||function(t){return r(t,o)}},e893:function(t,n,e){var r=e("5135"),o=e("56ef"),i=e("06cf"),c=e("9bf2");t.exports=function(t,n){for(var e=o(n),a=c.f,u=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||a(t,s,u(n,s))}}},e8b5:function(t,n,e){var r=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},f44f:function(t,n,e){},fc6a:function(t,n,e){var r=e("44ad"),o=e("1d80");t.exports=function(t){return r(o(t))}}}]);
//# sourceMappingURL=chunk-62ac098a.272ac5fc.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-852a50ae"],{"107c":function(e,t,n){var r=n("d039"),a=n("da84"),o=a.RegExp;e.exports=r((function(){var e=o("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1276:function(e,t,n){"use strict";var r=n("d784"),a=n("44e7"),o=n("825a"),i=n("1d80"),c=n("4840"),s=n("8aa5"),u=n("50c4"),l=n("577e"),d=n("14c3"),f=n("9263"),p=n("9f7f"),g=n("d039"),v=p.UNSUPPORTED_Y,h=[].push,x=Math.min,b=4294967295,m=!g((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));r("split",(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=l(i(this)),o=void 0===n?b:n>>>0;if(0===o)return[];if(void 0===e)return[r];if(!a(e))return t.call(r,e,o);var c,s,u,d=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,v=new RegExp(e.source,p+"g");while(c=f.call(v,r)){if(s=v.lastIndex,s>g&&(d.push(r.slice(g,c.index)),c.length>1&&c.index<r.length&&h.apply(d,c.slice(1)),u=c[0].length,g=s,d.length>=o))break;v.lastIndex===c.index&&v.lastIndex++}return g===r.length?!u&&v.test("")||d.push(""):d.push(r.slice(g)),d.length>o?d.slice(0,o):d}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var a=i(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,a,n):r.call(l(a),t,n)},function(e,a){var i=o(this),f=l(e),p=n(r,i,f,a,r!==t);if(p.done)return p.value;var g=c(i,RegExp),h=i.unicode,m=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(v?"g":"y"),I=new g(v?"^(?:"+i.source+")":i,m),E=void 0===a?b:a>>>0;if(0===E)return[];if(0===f.length)return null===d(I,f)?[f]:[];var y=0,w=0,N=[];while(w<f.length){I.lastIndex=v?0:w;var _,C=d(I,v?f.slice(w):f);if(null===C||(_=x(u(I.lastIndex+(v?w:0)),f.length))===y)w=s(f,w,h);else{if(N.push(f.slice(y,w)),N.length===E)return N;for(var R=1;R<=C.length-1;R++)if(N.push(C[R]),N.length===E)return N;w=y=_}}return N.push(f.slice(y)),N}]}),!m,v)},"14c3":function(e,t,n){var r=n("c6b6"),a=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var o=n.call(e,t);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"44e7":function(e,t,n){var r=n("861d"),a=n("c6b6"),o=n("b622"),i=o("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==a(e))}},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("1d80"),a=n("577e"),o=n("5899"),i="["+o+"]",c=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),u=function(e){return function(t){var n=a(r(t));return 1&e&&(n=n.replace(c,"")),2&e&&(n=n.replace(s,"")),n}};e.exports={start:u(1),end:u(2),trim:u(3)}},"5a06":function(e,t,n){},7156:function(e,t,n){var r=n("861d"),a=n("d2bb");e.exports=function(e,t,n){var o,i;return a&&"function"==typeof(o=t.constructor)&&o!==n&&r(i=o.prototype)&&i!==n.prototype&&a(e,i),e}},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("577e"),a=n("ad6d"),o=n("9f7f"),i=n("5692"),c=n("7c73"),s=n("69f3").get,u=n("fce3"),l=n("107c"),d=RegExp.prototype.exec,f=i("native-string-replace",String.prototype.replace),p=d,g=function(){var e=/a/,t=/b*/g;return d.call(e,"a"),d.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),v=o.UNSUPPORTED_Y||o.BROKEN_CARET,h=void 0!==/()??/.exec("")[1],x=g||h||v||u||l;x&&(p=function(e){var t,n,o,i,u,l,x,b=this,m=s(b),I=r(e),E=m.raw;if(E)return E.lastIndex=b.lastIndex,t=p.call(E,I),b.lastIndex=E.lastIndex,t;var y=m.groups,w=v&&b.sticky,N=a.call(b),_=b.source,C=0,R=I;if(w&&(N=N.replace("y",""),-1===N.indexOf("g")&&(N+="g"),R=I.slice(b.lastIndex),b.lastIndex>0&&(!b.multiline||b.multiline&&"\n"!==I.charAt(b.lastIndex-1))&&(_="(?: "+_+")",R=" "+R,C++),n=new RegExp("^(?:"+_+")",N)),h&&(n=new RegExp("^"+_+"$(?!\\s)",N)),g&&(o=b.lastIndex),i=d.call(w?n:b,R),w?i?(i.input=i.input.slice(C),i[0]=i[0].slice(C),i.index=b.lastIndex,b.lastIndex+=i[0].length):b.lastIndex=0:g&&i&&(b.lastIndex=b.global?i.index+i[0].length:o),h&&i&&i.length>1&&f.call(i[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(i[u]=void 0)})),i&&y)for(i.groups=l=c(null),u=0;u<y.length;u++)x=y[u],l[x[0]]=i[x[1]];return i}),e.exports=p},9269:function(e,t,n){"use strict";n("5a06")},"9f7f":function(e,t,n){var r=n("d039"),a=n("da84"),o=a.RegExp;t.UNSUPPORTED_Y=r((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a15b:function(e,t,n){"use strict";var r=n("23e7"),a=n("44ad"),o=n("fc6a"),i=n("a640"),c=[].join,s=a!=Object,u=i("join",",");r({target:"Array",proto:!0,forced:s||!u},{join:function(e){return c.call(o(this),void 0===e?",":e)}})},a9e3:function(e,t,n){"use strict";var r=n("83ab"),a=n("da84"),o=n("94ca"),i=n("6eeb"),c=n("5135"),s=n("c6b6"),u=n("7156"),l=n("d9b5"),d=n("c04e"),f=n("d039"),p=n("7c73"),g=n("241c").f,v=n("06cf").f,h=n("9bf2").f,x=n("58a8").trim,b="Number",m=a[b],I=m.prototype,E=s(p(I))==b,y=function(e){if(l(e))throw TypeError("Cannot convert a Symbol value to a number");var t,n,r,a,o,i,c,s,u=d(e,"number");if("string"==typeof u&&u.length>2)if(u=x(u),t=u.charCodeAt(0),43===t||45===t){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+u}for(o=u.slice(2),i=o.length,c=0;c<i;c++)if(s=o.charCodeAt(c),s<48||s>a)return NaN;return parseInt(o,r)}return+u};if(o(b,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var w,N=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof N&&(E?f((function(){I.valueOf.call(n)})):s(n)!=b)?u(new m(y(t)),n,N):y(t)},_=r?g(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),C=0;_.length>C;C++)c(m,w=_[C])&&!c(N,w)&&h(N,w,v(m,w));N.prototype=I,I.constructor=N,i(a,b,N)}},ab23:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{position:"relative"}},[n("div",{attrs:{id:"signInForm"}},[n("div",{staticClass:"formTitle"},[e._v("评委账号登录")]),n("el-form",{attrs:{id:"form"}},[n("el-form-item",[e._v(" 手机号 "),n("el-input",{attrs:{placeholder:"请输入手机号"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),n("el-form-item",[e._v(" 密码 "),n("el-input",{attrs:{"show-password":"",placeholder:"请输入密码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),n("div",{staticStyle:{display:"flex","justify-content":"center"}},[n("el-button",{attrs:{type:"primary"},on:{click:e.signIn}},[e._v("开始评审")])],1)],1)])},a=[],o=n("5530"),i=(n("b0c0"),n("d81d"),n("ac1f"),n("1276"),n("a9e3"),n("a15b"),n("159b"),n("2f62")),c=n("f8c8"),s={name:"SignIn",data:function(){return{phone:"",password:"",flag:0}},computed:Object(o["a"])({},Object(i["b"])(["token","userInfo","contestConfig","votedWorks"])),mounted:function(){this.token&&this.userInfo&&this.$router.push({path:"/"})},methods:Object(o["a"])(Object(o["a"])({},Object(i["c"])(["updateToken","updateUserInfo","updateVoteInfo","updateContestConfig","updateVotedWorks","updateMaxIndex","updateTotalWorkNum"])),{},{signIn:function(){var e=this,t={username:this.phone,password:this.password};Object(c["j"])(t).then((function(t){var n=t.data.data;e.updateUserInfo({isRulesRead:n.is_rules_read,username:n.name,maxVotesNum:n.max_votes_num,isDone:n.is_done}),e.updateVotedWorks(n.voted_works.length>0?n.voted_works.split(",").map(Number):[]),e.updateContestConfig({enableMarking:!1}),Object(c["d"])().then((function(t){var n=t.data,r=e.contestConfig;r.totalWorkNum=n,e.updateContestConfig(r)})),Object(c["a"])().then((function(t){var n=t.data,r=e.contestConfig;r.roundID=n.roundID,r.roundIdx=n.roundIdx,e.updateContestConfig(r),n={round_id:e.contestConfig.roundID},Object(c["b"])(n).then((function(t){var n=t.data,r=e.contestConfig;r.maxVotesNum=n,e.updateContestConfig(r)})),Object(c["e"])({voted_works:e.votedWorks.join(","),round_id:e.contestConfig.roundID}).then((function(t){var n=t.data;n.forEach((function(e){var t;e.checked=!0,""===e.name&&(e.name="测试"),(null===(t=!e.imgList)||void 0===t||t)&&(e.imgList=["https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/static/imgs/test.png"])})),e.updateVoteInfo(n)}))})),setTimeout((function(){e.$router.push({path:"/"},2e3)}))}))}})},u=s,l=(n("9269"),n("2877")),d=Object(l["a"])(u,r,a,!1,null,"75f69ec1",null);t["default"]=d.exports},ac1f:function(e,t,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("9263"),o=n("d039"),i=n("b622"),c=n("9112"),s=i("species"),u=RegExp.prototype;e.exports=function(e,t,n,l){var d=i(e),f=!o((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),p=f&&!o((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return t=!0,null},n[d](""),!t}));if(!f||!p||n){var g=/./[d],v=t(d,""[e],(function(e,t,n,r,o){var i=t.exec;return i===a||i===u.exec?f&&!o?{done:!0,value:g.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}));r(String.prototype,e,v[0]),r(u,d,v[1])}l&&c(u[d],"sham",!0)}},d81d:function(e,t,n){"use strict";var r=n("23e7"),a=n("b727").map,o=n("1dde"),i=o("map");r({target:"Array",proto:!0,forced:!i},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},fce3:function(e,t,n){var r=n("d039"),a=n("da84"),o=a.RegExp;e.exports=r((function(){var e=o(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-852a50ae.47d114b3.js.map
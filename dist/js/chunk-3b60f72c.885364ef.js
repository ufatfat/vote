(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b60f72c"],{"1d83":function(t,e,n){},2532:function(t,e,n){"use strict";var o=n("23e7"),a=n("5a34"),i=n("1d80"),r=n("577e"),s=n("ab13");o({target:"String",proto:!0,forced:!s("includes")},{includes:function(t){return!!~r(i(this)).indexOf(r(a(t)),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(t,e,n){var o=n("861d"),a=n("c6b6"),i=n("b622"),r=i("match");t.exports=function(t){var e;return o(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==a(t))}},"5a34":function(t,e,n){var o=n("44e7");t.exports=function(t){if(o(t))throw TypeError("The method doesn't accept regular expressions");return t}},"787e":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"250px"}},[t._m(0),n("div",{staticClass:"selectedBox"},[t._l(t.voteInfo,(function(e,o){return[null!==e?[n("div",{key:o,staticClass:"selectedWorkBox"},[n("div",{staticStyle:{width:"148.5px",height:"210px"}},[n("el-image",{attrs:{src:e.imgList[0],lazy:""},on:{click:function(n){return n.stopPropagation(),t.jumpToDetailHandler(e)}}})],1),n("div",{staticStyle:{"margin-top":"5px",display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},[n("span",{staticClass:"tipText"},[t._v(t._s(e.workID)+" - "+t._s(e.name))])])])]:t._e()]}))],2),n("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",icon:"el-icon-collection-tag"}},[t._v("保存进度")])],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"titleBox"},[n("span",{staticClass:"title"},[t._v("已选方案")]),n("span",{staticClass:"stats"},[t._v("已选作品数目："),n("br"),t._v("待选作品数目：")])])}],i=n("5530"),r=n("2f62"),s={name:"Selected",data:function(){return{}},computed:Object(i["a"])({},Object(r["b"])(["voteInfo"])),methods:Object(i["a"])(Object(i["a"])({},Object(r["c"])(["updateVoteInfo"])),{},{jumpToDetailHandler:function(t){this.$router.push({path:"/detail/"+t.workID})}})},l=s,c=(n("fea1"),n("2877")),d=Object(c["a"])(l,o,a,!1,null,"5bbbbf23",null);e["a"]=d.exports},"9ecc":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-container",{staticStyle:{"margin-top":"16px",height:"calc(100vh - 120px)"}},[n("el-main",{staticStyle:{height:"100%",width:"100%",padding:"0",display:"flex","justify-content":"center"}},[n("DetailComp")],1),n("el-aside",{staticStyle:{height:"100%",display:"flex","justify-content":"center"}},[n("Selected")],1)],1)],1)},a=[],i=n("787e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"96%"}},[n("div",{staticClass:"titleBox"},[n("span",{staticClass:"title"},[t._v("作品详情")]),n("div",[n("el-tabs",{attrs:{"tab-position":"bottom"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"作品编号："+t.$route.params.workID,name:"first"}})],1)],1)]),n("div",{staticClass:"workContainer",attrs:{id:"workContainer"}},[n("div",{staticStyle:{"text-align":"center","font-family":"Noto Sans SC","font-style":"normal","font-weight":"500","font-size":"16px","line-height":"24px","font-feature-settings":"'tnum' on, 'lnum' on",color:"#4D4F53"}},[t._v(t._s(t.workInfo.name))]),n("div",{staticClass:"imgContainer"},[t._l(t.workInfo.imgList,(function(e,o){return[n("div",{key:o,staticClass:"workBox"},[n("el-image",{staticStyle:{width:"297px",height:"420px"},attrs:{src:e,"preview-src-list":t.workInfo.imgList,alt:"点击查看原图"}}),n("span",{staticClass:"tipText"},[t._v("点击图片查看原图，使用鼠标滚轮放大缩小")])],1)]}))],2),n("div",{staticStyle:{display:"flex","justify-content":"center"}},[n("div",{class:t.workInfo.checked?"checked":"",staticStyle:{height:"40px",padding:"0 10px",border:"1px solid #E4E7ED","border-radius":"4px",display:"flex","align-items":"center"}},[n("el-checkbox",{on:{change:t.checkChangeHandler},model:{value:t.workInfo.checked,callback:function(e){t.$set(t.workInfo,"checked",e)},expression:"workInfo.checked"}},[t._v("将此作品添加为优秀待选作品")])],1)])]),n("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[n("el-pagination",{attrs:{layout:"slot"}},[n("span",[t._v("共 "+t._s(t.total)+" 个作品")])]),n("el-pagination",{attrs:{layout:"slot"}},[n("span",[t._v("前往第 "),n("el-input",{staticStyle:{width:"60px"},on:{blur:t.toTargetWork},model:{value:t.targetWorkID,callback:function(e){t.targetWorkID=e},expression:"targetWorkID"}}),t._v(" 个")],1)])],1),n("div",{staticStyle:{display:"flex","justify-content":"space-between","margin-top":"20px"}},[n("el-button",{attrs:{icon:"el-icon-arrow-left",type:"primary"},on:{click:t.prevHandler}},[t._v("上一个")]),t.contestConfig.enableMarking?[n("el-button",{attrs:{icon:"el-icon-check",type:"primary"}},[t._v("打分")]),n("el-input",{staticStyle:{width:"80px"},attrs:{placeholder:"总分栏"}}),n("el-select",{attrs:{placeholder:"方案设计"},model:{value:t.design,callback:function(e){t.design=e},expression:"design"}},t._l(t.grades,(function(e,o){return n("el-option",{key:o,attrs:{label:"方案设计 | "+e.grade+"分",value:e.grade}},[n("span",[t._v(t._s(e.levelEng+"/"+e.levelChn+"/"+e.grade))])])})),1),n("el-select",{attrs:{placeholder:"图纸表现"},model:{value:t.appearance,callback:function(e){t.appearance=e},expression:"appearance"}},t._l(t.grades,(function(e,o){return n("el-option",{key:o,attrs:{label:"图纸表现 | "+e.grade+"分",value:e.grade}},[n("span",[t._v(t._s(e.levelEng+"/"+e.levelChn+"/"+e.grade))])])})),1),n("el-select",{attrs:{placeholder:"创新性"},model:{value:t.innovation,callback:function(e){t.innovation=e},expression:"innovation"}},t._l(t.grades,(function(e,o){return n("el-option",{key:o,attrs:{label:"创新性 | "+e.grade+"分",value:e.grade}},[n("span",[t._v(t._s(e.levelEng+"/"+e.levelChn+"/"+e.grade))])])})),1),n("el-button",{attrs:{icon:"el-icon-edit",type:"primary"}},[t._v("评审意见")]),n("el-button",{attrs:{icon:"el-icon-search",type:"primary"}},[t._v("保存评审进度")])]:t._e(),n("el-button",{attrs:{type:"primary"},on:{click:t.nextHandler}},[t._v("下一个"),n("i",{staticClass:"el-icon-arrow-right"})])],2),t.contestConfig.enableMarking?[n("div",{staticStyle:{display:"flex","justify-content":"flex-end","margin-top":"20px"}},[n("div",{staticStyle:{height:"150px",width:"400px",border:"1px solid #E4E7ED","border-radius":"4px",display:"flex","flex-direction":"column","align-items":"center"}},[n("div",{staticStyle:{"font-family":"Noto Sans SC","font-style":"normal","font-weight":"normal","font-size":"14px","line-height":"22px","font-feature-settings":"'tnum' on, 'lnum' on",color:"#909399",margin:"10px 0"}},[t._v("评审意见填写栏")]),n("el-input",{staticStyle:{width:"370px"},attrs:{type:"textarea",rows:4,resize:"none"},model:{value:t.voteAdvise,callback:function(e){t.voteAdvise=e},expression:"voteAdvise"}})],1)])]:t._e()],2)},s=[],l=n("5530"),c=(n("caad"),n("2532"),n("159b"),n("a434"),n("4de4"),n("2f62")),d={name:"Detail",data:function(){return{total:800,targetWorkID:null,activeName:"first",workInfo:{},grades:[{levelEng:"A",levelChn:"第一档",grade:95},{levelEng:"B",levelChn:"第二档",grade:85},{levelEng:"C",levelChn:"第三档",grade:75},{levelEng:"D",levelChn:"第四档",grade:65}],design:"",appearance:"",innovation:"",voteAdvise:""}},mounted:function(){var t={name:"测试",checked:!1,imgList:["https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/static/imgs/test.png","https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/static/imgs/test.png"]};t.workID=~~this.$route.params.workID,this.workInfo=t,this.contestConfig.enableMarking?document.querySelector("#workContainer").style.height="calc(100% - 420px)":document.querySelector("#workContainer").style.height="calc(100% - 172px)",this.workInfo.checked=this.votedWorks.includes(this.workInfo.workID)},computed:Object(l["a"])({},Object(c["b"])(["voteInfo","votedWorks","contestConfig"])),watch:{$route:function(t){this.workInfo.workID=~~t.params.workID,this.workInfo.checked=this.votedWorks.includes(this.workInfo.workID)}},methods:Object(l["a"])(Object(l["a"])({},Object(c["c"])(["updateVoteInfo","updateVotesWorks"])),{},{workBoxClickHandler:function(t){t.checked=!t.checked;var e=this.voteInfo;t.checked?(e.push(t),this.updateVoteInfo(e)):e.forEach((function(n,o){n.workID===t.workID&&e.splice(o,1)}))},toTargetWork:function(){this.$router.push({path:"/detail/"+this.targetWorkID})},checkChangeHandler:function(t){var e=this;if(t){try{var n=this.voteInfo;0===n.length?n.push(this.workInfo):(n.forEach((function(t,o){throw t.workID>e.workInfo.workID&&n.splice(o,0,e.workInfo),new Error("stop")})),this.updateVoteInfo(n))}catch(i){if("stop"!==i.message)throw i}var o=this.votedWorks;o.push(this.workInfo.workID),this.updateVotesWorks(o)}else{var a=this.voteInfo;a.forEach((function(t,n){t.workID===e.workInfo.workID&&a.splice(n,1)})),this.updateVoteInfo(a),this.updateVotesWorks(this.votedWorks.filter((function(t){return t!==e.workInfo.workID})))}}})},u=d,p=(n("f0e3"),n("2877")),f=Object(p["a"])(u,r,s,!1,null,"492ce599",null),h=f.exports,v={name:"Detail",components:{Selected:i["a"],DetailComp:h}},g=v,k=Object(p["a"])(g,o,a,!1,null,"604882c6",null);e["default"]=k.exports},a434:function(t,e,n){"use strict";var o=n("23e7"),a=n("23cb"),i=n("a691"),r=n("50c4"),s=n("7b0b"),l=n("65f0"),c=n("8418"),d=n("1dde"),u=d("splice"),p=Math.max,f=Math.min,h=9007199254740991,v="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!u},{splice:function(t,e){var n,o,d,u,g,k,m=s(this),w=r(m.length),y=a(t,w),x=arguments.length;if(0===x?n=o=0:1===x?(n=0,o=w-y):(n=x-2,o=f(p(i(e),0),w-y)),w+n-o>h)throw TypeError(v);for(d=l(m,o),u=0;u<o;u++)g=y+u,g in m&&c(d,u,m[g]);if(d.length=o,n<o){for(u=y;u<w-o;u++)g=u+o,k=u+n,g in m?m[k]=m[g]:delete m[k];for(u=w;u>w-o+n;u--)delete m[u-1]}else if(n>o)for(u=w-o;u>y;u--)g=u+o-1,k=u+n-1,g in m?m[k]=m[g]:delete m[k];for(u=0;u<n;u++)m[u+y]=arguments[u+2];return m.length=w-o+n,d}})},ab13:function(t,e,n){var o=n("b622"),a=o("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[a]=!1,"/./"[t](e)}catch(o){}}return!1}},caad:function(t,e,n){"use strict";var o=n("23e7"),a=n("4d64").includes,i=n("44d2");o({target:"Array",proto:!0},{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},e6cb:function(t,e,n){},f0e3:function(t,e,n){"use strict";n("1d83")},fea1:function(t,e,n){"use strict";n("e6cb")}}]);
//# sourceMappingURL=chunk-3b60f72c.885364ef.js.map
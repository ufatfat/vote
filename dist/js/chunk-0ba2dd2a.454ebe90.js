(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ba2dd2a"],{"3baf":function(e,t,n){},d51e:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"container"}},[e._m(0),e._m(1),n("div",{staticStyle:{width:"100%",border:"1px solid #E4E7ED","box-sizing":"border-box","border-radius":"4px",height:"70px",display:"flex","align-items":"center","padding-left":"24px",margin:"50px 0"}},[n("el-checkbox",{attrs:{disabled:e.rulesReadCheckboxDisabled},model:{value:e.rulesRead,callback:function(t){e.rulesRead=t},expression:"rulesRead"}},[e._v("我已阅读上述评审规则"+e._s(e.countDown>0?"（"+e.countDown+"s后可确认）":""))])],1),n("div",{staticStyle:{display:"flex","justify-content":"center"}},[n("el-button",{attrs:{type:"primary",disabled:!e.rulesRead},on:{click:e.enter}},[e._v("进入评审主页")])],1)])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"text-align":"center"}},[n("span",{staticClass:"title"},[e._v("评审规则")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rules"},[n("p",[e._v("作品评选分为线上初评入围和现场答辩终选两个环节。")]),n("p",[e._v("【线上初评入围】")]),n("p",[e._v("1.所有的参赛图纸由各团队自行上传至大赛线上系统（超过作品提交截止时间，上传通道将自动关闭）；")]),n("p",[e._v("2.由评审委员会组织评委进行线上评图，根据作品要求、设计要求、评审规则等维度，评选出入围作品（此环节投正票）。若第一轮线上初评平票作品超出入围数的20%（即拟入围50个团队，有10个团队平票），则进行第二轮反票筛选。最终根据得票数选出入围作品。")]),n("p",[e._v("【现场答辩终选】")]),n("p",[e._v("注意：所有的参赛团队将在山西省太原市/阳泉市（待定）进行集中答辩展示。进入答辩终选环节的小组至少有一人到场，否则取消答辩机会及获奖资格。")]),n("p",[e._v("评审团现场进行评审。每位选手（组）可以自选展示形式（模型、电脑模型、PPT、视频等方式均可）对作品进行展示，并阐释自己的设计思路。选手展示完毕后，评委轮流向选手提问，进一步了解选手的设计思路和手法。")]),n("p",[e._v("【评分规则】")]),n("p",[e._v("1.答辩过程中，每个参赛团队有10分钟的时间进行展示。超时30秒时组委会会警告一次，超时满一分钟扣除5 分，超时满两分钟将取消一等奖资格；")]),n("p",[e._v("2.每组同时上场展示和答辩的人数不得超过两人；")]),n("p",[e._v("3.评分为百分制，作品设计和选手展示表达分别占60 和 40 分。选手的最终得分=现场评图得分×70%+答辩得分×30%，工作人员现场统计计算选手所得的最终分数。最终15名答辩团队按照总成绩，依次分获一二三等奖。")])])}],i=n("5530"),r=n("2f62"),c={name:"Rule",data:function(){return{rulesRead:!1,rulesReadCheckboxDisabled:!0,countDown:5}},mounted:function(){var e=this;if(this.userInfo.isRulesRead)return this.rulesRead=!0,void(this.countDown=0);var t=setInterval((function(){e.countDown--,e.countDown<=0&&(clearInterval(t),e.rulesReadCheckboxDisabled=!1)}),1e3)},computed:Object(i["a"])({},Object(r["b"])(["userInfo"])),methods:Object(i["a"])(Object(i["a"])({},Object(r["c"])(["updateUserInfo"])),{},{enter:function(){var e=this.userInfo;e.isRulesRead=!0,this.updateUserInfo(e),this.$router.push({path:"/index"})}})},u=c,o=(n("ef6c"),n("2877")),l=Object(o["a"])(u,s,a,!1,null,"41278f2b",null);t["default"]=l.exports},ef6c:function(e,t,n){"use strict";n("3baf")}}]);
//# sourceMappingURL=chunk-0ba2dd2a.454ebe90.js.map
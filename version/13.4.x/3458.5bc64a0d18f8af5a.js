"use strict";(self.webpackChunkng_zorro_antd_doc=self.webpackChunkng_zorro_antd_doc||[]).push([[3458],{3458:(k,z,s)=>{s.r(z),s.d(z,{NzDemoMessageModule:()=>M});var F=s(610),D=s(1928),g=s(9102),r=s(3616),l=s(8751);const E=[g.gR,r.sL,l.PV];var m=s(5341),e=s(4650),c=s(2587),A=s(1932),Z=s(6506),T=s(1240),i=s(9412),_=s(1406),d=s(488);let U=(()=>{class o{constructor(n){this.message=n}startShowMessages(){this.message.loading("Action in progress",{nzDuration:2500}).onClose.pipe((0,_.b)(()=>this.message.success("Loading finished",{nzDuration:2500}).onClose),(0,_.b)(()=>this.message.info("Loading finished is finished",{nzDuration:2500}).onClose)).subscribe(()=>{console.log("All completed!")})}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(g.dD))},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-message-close"]],decls:2,vars:1,consts:[["nz-button","",3,"nzType","click"]],template:function(n,u){1&n&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return u.startShowMessages()}),e._uU(1,"Display a sequence of messages"),e.qZA()),2&n&&e.Q6J("nzType","default")},dependencies:[r.ix,i.w,d.dQ],encapsulation:2}),o})(),h=(()=>{class o{constructor(n){this.message=n}createBasicMessage(){this.message.success("This is a prompt message for success, and it will disappear in 10 seconds",{nzDuration:1e4})}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(g.dD))},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-message-duration"]],decls:2,vars:1,consts:[["nz-button","",3,"nzType","click"]],template:function(n,u){1&n&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return u.createBasicMessage()}),e._uU(1,"Customized display duration"),e.qZA()),2&n&&e.Q6J("nzType","default")},dependencies:[r.ix,i.w,d.dQ],encapsulation:2}),o})(),f=(()=>{class o{constructor(n){this.message=n}createBasicMessage(){this.message.info("This is a normal message")}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(g.dD))},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-message-info"]],decls:2,vars:1,consts:[["nz-button","",3,"nzType","click"]],template:function(n,u){1&n&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return u.createBasicMessage()}),e._uU(1,"Display normal message"),e.qZA()),2&n&&e.Q6J("nzType","primary")},dependencies:[r.ix,i.w,d.dQ],encapsulation:2}),o})(),q=(()=>{class o{constructor(n){this.message=n}createBasicMessage(){const n=this.message.loading("Action in progress..",{nzDuration:0}).messageId;setTimeout(()=>{this.message.remove(n)},2500)}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(g.dD))},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-message-loading"]],decls:2,vars:1,consts:[["nz-button","",3,"nzType","click"]],template:function(n,u){1&n&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return u.createBasicMessage()}),e._uU(1,"Display a loading indicator"),e.qZA()),2&n&&e.Q6J("nzType","default")},dependencies:[r.ix,i.w,d.dQ],encapsulation:2}),o})(),C=(()=>{class o{constructor(n){this.message=n}createMessage(n){this.message.create(n,`This is a message of ${n}`)}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(g.dD))},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-message-other"]],decls:6,vars:0,consts:[["nz-button","",3,"click"]],template:function(n,u){1&n&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return u.createMessage("success")}),e._uU(1,"Success"),e.qZA(),e.TgZ(2,"button",0),e.NdJ("click",function(){return u.createMessage("error")}),e._uU(3,"Error"),e.qZA(),e.TgZ(4,"button",0),e.NdJ("click",function(){return u.createMessage("warning")}),e._uU(5,"Warning"),e.qZA())},dependencies:[r.ix,i.w,d.dQ],styles:["[nz-button][_ngcontent-%COMP%]{margin-right:8px}"]}),o})(),N=(()=>{class o{constructor(){this.expanded=!1}goLink(n){window&&(window.location.hash=n)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(n=>{n.nzExpanded=this.expanded,n.expandCode(this.expanded),n.check()})}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-message"]],viewQuery:function(n,u){if(1&n&&e.Gf(m.G,5),2&n){let a;e.iGM(a=e.CRH())&&(u.codeBoxes=a)}},decls:336,vars:27,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-message-demo-info","nzTitle","\u666e\u901a\u63d0\u793a"],["nzHref","#components-message-demo-other","nzTitle","\u5176\u4ed6\u63d0\u793a\u7c7b\u578b"],["nzHref","#components-message-demo-duration","nzTitle","\u4fee\u6539\u5ef6\u65f6"],["nzHref","#components-message-demo-loading","nzTitle","\u52a0\u8f7d\u4e2d"],["nzHref","#components-message-demo-close","nzTitle","\u7ed3\u675f\u4e8b\u4ef6"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/doc/index.zh-CN.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","\u4f55\u65f6\u4f7f\u7528"],["onclick","window.location.hash = '\u4f55\u65f6\u4f7f\u7528'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","\u666e\u901a\u63d0\u793a","nzSelector","nz-demo-message-info","nzGenerateCommand","ng g ng-zorro-antd:message-info <name>","nzComponentName","NzDemoMessageInfoComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","\u4fee\u6539\u5ef6\u65f6","nzSelector","nz-demo-message-duration","nzGenerateCommand","ng g ng-zorro-antd:message-duration <name>","nzComponentName","NzDemoMessageDurationComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u7ed3\u675f\u4e8b\u4ef6","nzSelector","nz-demo-message-close","nzGenerateCommand","ng g ng-zorro-antd:message-close <name>","nzComponentName","NzDemoMessageCloseComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u5176\u4ed6\u63d0\u793a\u7c7b\u578b","nzSelector","nz-demo-message-other","nzGenerateCommand","ng g ng-zorro-antd:message-other <name>","nzComponentName","NzDemoMessageOtherComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u52a0\u8f7d\u4e2d","nzSelector","nz-demo-message-loading","nzGenerateCommand","ng g ng-zorro-antd:message-loading <name>","nzComponentName","NzDemoMessageLoadingComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nzmessageservice"],[1,"api-type-label","service"],["onclick","window.location.hash = 'nzmessageservice'",1,"anchor"],["id","\u5168\u5c40\u914d\u7f6e"],["onclick","window.location.hash = '\u5168\u5c40\u914d\u7f6e'",1,"anchor"],["href","/docs/global-config/zh"],["id","nzmessageref"],["onclick","window.location.hash = 'nzmessageref'",1,"anchor"],[1,"token","class-name"],[1,"token","operator"],["spellcheck","true",1,"token","comment"]],template:function(n,u){1&n&&(e.TgZ(0,"article")(1,"nz-affix",0)(2,"nz-anchor",1),e.NdJ("nzClick",function(p){return u.goLink(p)}),e._UZ(3,"nz-link",2)(4,"nz-link",3)(5,"nz-link",4)(6,"nz-link",5)(7,"nz-link",6)(8,"nz-link",7),e.qZA()(),e.TgZ(9,"section",8)(10,"h1"),e._uU(11,"Message"),e.TgZ(12,"span",9),e._uU(13,"\u5168\u5c40\u63d0\u793a"),e.qZA(),e._UZ(14,"span",10),e.TgZ(15,"a",11),e._UZ(16,"span",12),e.qZA()(),e.TgZ(17,"section",8),e.IAx(),e.TgZ(18,"p"),e._uU(19,"\u5168\u5c40\u5c55\u793a\u64cd\u4f5c\u53cd\u9988\u4fe1\u606f\u3002"),e.qZA(),e.TgZ(20,"h2",13)(21,"span"),e._uU(22,"\u4f55\u65f6\u4f7f\u7528"),e.qZA(),e.TgZ(23,"a",14),e._uU(24,"#"),e.qZA()(),e.TgZ(25,"ul")(26,"li"),e._uU(27,"\u53ef\u63d0\u4f9b\u6210\u529f\u3001\u8b66\u544a\u548c\u9519\u8bef\u7b49\u53cd\u9988\u4fe1\u606f\u3002"),e.qZA(),e.TgZ(28,"li"),e._uU(29,"\u9876\u90e8\u5c45\u4e2d\u663e\u793a\u5e76\u81ea\u52a8\u6d88\u5931\uff0c\u662f\u4e00\u79cd\u4e0d\u6253\u65ad\u7528\u6237\u64cd\u4f5c\u7684\u8f7b\u91cf\u7ea7\u63d0\u793a\u65b9\u5f0f\u3002"),e.qZA()(),e.TgZ(30,"pre",15)(31,"code")(32,"span",16),e._uU(33,"import"),e.qZA(),e._uU(34," "),e.TgZ(35,"span",17),e._uU(36,"{"),e.qZA(),e._uU(37," NzMessageModule "),e.TgZ(38,"span",17),e._uU(39,"}"),e.qZA(),e._uU(40," "),e.TgZ(41,"span",16),e._uU(42,"from"),e.qZA(),e._uU(43," "),e.TgZ(44,"span",18),e._uU(45,"'ng-zorro-antd/message'"),e.qZA(),e.TgZ(46,"span",17),e._uU(47,";"),e.qZA()()(),e.fQ9(),e.qZA(),e.TgZ(48,"h2")(49,"span"),e._uU(50,"\u4ee3\u7801\u6f14\u793a"),e.qZA(),e.TgZ(51,"span",19),e.NdJ("click",function(){return u.expandAllCode()}),e.qZA()()(),e.TgZ(52,"div",20)(53,"div",21)(54,"nz-code-box",22),e._UZ(55,"nz-demo-message-info",23),e.TgZ(56,"div",24),e.IAx(),e.TgZ(57,"p"),e._uU(58,"\u4fe1\u606f\u63d0\u9192\u53cd\u9988\u3002"),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(59,"nz-code-box",25),e._UZ(60,"nz-demo-message-duration",23),e.TgZ(61,"div",24),e.IAx(),e.TgZ(62,"p"),e._uU(63,"\u81ea\u5b9a\u4e49\u65f6\u957f "),e.TgZ(64,"code"),e._uU(65,"10s"),e.qZA(),e._uU(66,"\uff0c\u9ed8\u8ba4\u65f6\u957f\u4e3a "),e.TgZ(67,"code"),e._uU(68,"3s"),e.qZA(),e._uU(69,"\u3002"),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(70,"nz-code-box",26),e._UZ(71,"nz-demo-message-close",23),e.TgZ(72,"div",24),e.IAx(),e.TgZ(73,"p"),e._uU(74,"\u53ef\u901a\u8fc7\u8ba2\u9605 "),e.TgZ(75,"code"),e._uU(76,"onClose"),e.qZA(),e._uU(77," \u4e8b\u4ef6\u5728 message \u5173\u95ed\u65f6\u505a\u51fa\u67d0\u4e9b\u64cd\u4f5c\u3002\u4ee5\u4e0a\u7528\u4f8b\u5c06\u4f9d\u6b21\u6253\u5f00\u4e09\u4e2a message\u3002"),e.qZA(),e.fQ9(),e.qZA()()(),e.TgZ(78,"div",21)(79,"nz-code-box",27),e._UZ(80,"nz-demo-message-other",23),e.TgZ(81,"div",24),e.IAx(),e.TgZ(82,"p"),e._uU(83,"\u5305\u62ec\u6210\u529f\u3001\u5931\u8d25\u3001\u8b66\u544a\u3002"),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(84,"nz-code-box",28),e._UZ(85,"nz-demo-message-loading",23),e.TgZ(86,"div",24),e.IAx(),e.TgZ(87,"p"),e._uU(88,"\u8fdb\u884c\u5168\u5c40 loading\uff0c\u5f02\u6b65\u81ea\u884c\u79fb\u9664\u3002"),e.qZA(),e.fQ9(),e.qZA()()()(),e.TgZ(89,"section",29),e.IAx(),e.TgZ(90,"h2",30)(91,"span"),e._uU(92,"API"),e.qZA(),e.TgZ(93,"a",31),e._uU(94,"#"),e.qZA()(),e.TgZ(95,"h3",32)(96,"span"),e._uU(97,"NzMessageService"),e.qZA(),e.TgZ(98,"label",33),e._uU(99,"service"),e.qZA(),e.TgZ(100,"a",34),e._uU(101,"#"),e.qZA()(),e.TgZ(102,"p"),e._uU(103,"\u7ec4\u4ef6\u63d0\u4f9b\u4e86\u4e00\u4e9b\u670d\u52a1\u65b9\u6cd5\uff0c\u4f7f\u7528\u65b9\u5f0f\u548c\u53c2\u6570\u5982\u4e0b\uff1a"),e.qZA(),e.TgZ(104,"ul")(105,"li")(106,"code"),e._uU(107,"NzMessageService.success(content, [options])"),e.qZA()(),e.TgZ(108,"li")(109,"code"),e._uU(110,"NzMessageService.error(content, [options])"),e.qZA()(),e.TgZ(111,"li")(112,"code"),e._uU(113,"NzMessageService.info(content, [options])"),e.qZA()(),e.TgZ(114,"li")(115,"code"),e._uU(116,"NzMessageService.warning(content, [options])"),e.qZA()(),e.TgZ(117,"li")(118,"code"),e._uU(119,"NzMessageService.loading(content, [options])"),e.qZA()()(),e.TgZ(120,"table")(121,"thead")(122,"tr")(123,"th"),e._uU(124,"\u53c2\u6570"),e.qZA(),e.TgZ(125,"th"),e._uU(126,"\u8bf4\u660e"),e.qZA(),e.TgZ(127,"th"),e._uU(128,"\u7c7b\u578b"),e.qZA(),e.TgZ(129,"th"),e._uU(130,"\u9ed8\u8ba4\u503c"),e.qZA()()(),e.TgZ(131,"tbody")(132,"tr")(133,"td"),e._uU(134,"content"),e.qZA(),e.TgZ(135,"td"),e._uU(136,"\u63d0\u793a\u5185\u5bb9"),e.qZA(),e.TgZ(137,"td")(138,"code"),e._uU(139,"string | TemplateRef<void>"),e.qZA()(),e.TgZ(140,"td"),e._uU(141,"-"),e.qZA()(),e.TgZ(142,"tr")(143,"td"),e._uU(144,"options"),e.qZA(),e.TgZ(145,"td"),e._uU(146,"\u652f\u6301\u8bbe\u7f6e\u9488\u5bf9\u5f53\u524d\u63d0\u793a\u6846\u7684\u53c2\u6570\uff0c\u89c1\u4e0b\u65b9\u8868\u683c"),e.qZA(),e.TgZ(147,"td")(148,"code"),e._uU(149,"object"),e.qZA()(),e.TgZ(150,"td"),e._uU(151,"-"),e.qZA()()()(),e.TgZ(152,"p")(153,"code"),e._uU(154,"options"),e.qZA(),e._uU(155," \u652f\u6301\u8bbe\u7f6e\u7684\u53c2\u6570\u5982\u4e0b\uff1a"),e.qZA(),e.TgZ(156,"table")(157,"thead")(158,"tr")(159,"th"),e._uU(160,"\u53c2\u6570"),e.qZA(),e.TgZ(161,"th"),e._uU(162,"\u8bf4\u660e"),e.qZA(),e.TgZ(163,"th"),e._uU(164,"\u7c7b\u578b"),e.qZA()()(),e.TgZ(165,"tbody")(166,"tr")(167,"td"),e._uU(168,"nzDuration"),e.qZA(),e.TgZ(169,"td"),e._uU(170,"\u6301\u7eed\u65f6\u95f4(\u6beb\u79d2)\uff0c\u5f53\u8bbe\u7f6e\u4e3a0\u65f6\u4e0d\u6d88\u5931"),e.qZA(),e.TgZ(171,"td")(172,"code"),e._uU(173,"number"),e.qZA()()(),e.TgZ(174,"tr")(175,"td"),e._uU(176,"nzPauseOnHover"),e.qZA(),e.TgZ(177,"td"),e._uU(178,"\u9f20\u6807\u79fb\u4e0a\u65f6\u7981\u6b62\u81ea\u52a8\u79fb\u9664"),e.qZA(),e.TgZ(179,"td")(180,"code"),e._uU(181,"boolean"),e.qZA()()(),e.TgZ(182,"tr")(183,"td"),e._uU(184,"nzAnimate"),e.qZA(),e.TgZ(185,"td"),e._uU(186,"\u5f00\u5173\u52a8\u753b\u6548\u679c"),e.qZA(),e.TgZ(187,"td")(188,"code"),e._uU(189,"boolean"),e.qZA()()()()(),e.TgZ(190,"p"),e._uU(191,"\u8fd8\u63d0\u4f9b\u4e86\u5168\u5c40\u9500\u6bc1\u65b9\u6cd5\uff1a"),e.qZA(),e.TgZ(192,"ul")(193,"li")(194,"code"),e._uU(195,"NzMessageService.remove(id)"),e.qZA(),e._uU(196," // \u79fb\u9664\u7279\u5b9aid\u7684\u6d88\u606f\uff0c\u5f53id\u4e3a\u7a7a\u65f6\uff0c\u79fb\u9664\u6240\u6709\u6d88\u606f\uff08\u8be5\u6d88\u606fid\u901a\u8fc7\u4e0a\u8ff0\u65b9\u6cd5\u8fd4\u56de\u503c\u4e2d\u5f97\u5230\uff09"),e.qZA()(),e.TgZ(197,"h3",35)(198,"span"),e._uU(199,"\u5168\u5c40\u914d\u7f6e"),e.qZA(),e.TgZ(200,"a",36),e._uU(201,"#"),e.qZA()(),e.TgZ(202,"p"),e._uU(203,"\u53ef\u4ee5\u901a\u8fc7 "),e.TgZ(204,"code"),e._uU(205,"NzConfigService"),e.qZA(),e._uU(206," \u8fdb\u884c\u5168\u5c40\u914d\u7f6e\uff0c\u8be6\u60c5\u8bf7\u89c1\u6587\u6863\u4e2d "),e.TgZ(207,"a",37),e._uU(208,"\u5168\u5c40\u914d\u7f6e\u9879"),e.qZA(),e._uU(209," \u7ae0\u8282\u3002"),e.qZA(),e.TgZ(210,"table")(211,"thead")(212,"tr")(213,"th"),e._uU(214,"\u53c2\u6570"),e.qZA(),e.TgZ(215,"th"),e._uU(216,"\u8bf4\u660e"),e.qZA(),e.TgZ(217,"th"),e._uU(218,"\u7c7b\u578b"),e.qZA(),e.TgZ(219,"th"),e._uU(220,"\u9ed8\u8ba4\u503c"),e.qZA()()(),e.TgZ(221,"tbody")(222,"tr")(223,"td"),e._uU(224,"nzDuration"),e.qZA(),e.TgZ(225,"td"),e._uU(226,"\u6301\u7eed\u65f6\u95f4(\u6beb\u79d2)\uff0c\u5f53\u8bbe\u7f6e\u4e3a 0 \u65f6\u4e0d\u6d88\u5931"),e.qZA(),e.TgZ(227,"td")(228,"code"),e._uU(229,"number"),e.qZA()(),e.TgZ(230,"td")(231,"code"),e._uU(232,"3000"),e.qZA()()(),e.TgZ(233,"tr")(234,"td"),e._uU(235,"nzMaxStack"),e.qZA(),e.TgZ(236,"td"),e._uU(237,"\u540c\u4e00\u65f6\u95f4\u53ef\u5c55\u793a\u7684\u6700\u5927\u63d0\u793a\u6570\u91cf"),e.qZA(),e.TgZ(238,"td")(239,"code"),e._uU(240,"number"),e.qZA()(),e.TgZ(241,"td")(242,"code"),e._uU(243,"7"),e.qZA()()(),e.TgZ(244,"tr")(245,"td"),e._uU(246,"nzPauseOnHover"),e.qZA(),e.TgZ(247,"td"),e._uU(248,"\u9f20\u6807\u79fb\u4e0a\u65f6\u7981\u6b62\u81ea\u52a8\u79fb\u9664"),e.qZA(),e.TgZ(249,"td")(250,"code"),e._uU(251,"boolean"),e.qZA()(),e.TgZ(252,"td")(253,"code"),e._uU(254,"true"),e.qZA()()(),e.TgZ(255,"tr")(256,"td"),e._uU(257,"nzAnimate"),e.qZA(),e.TgZ(258,"td"),e._uU(259,"\u5f00\u5173\u52a8\u753b\u6548\u679c"),e.qZA(),e.TgZ(260,"td")(261,"code"),e._uU(262,"boolean"),e.qZA()(),e.TgZ(263,"td")(264,"code"),e._uU(265,"true"),e.qZA()()(),e.TgZ(266,"tr")(267,"td"),e._uU(268,"nzTop"),e.qZA(),e.TgZ(269,"td"),e._uU(270,"\u6d88\u606f\u8ddd\u79bb\u9876\u90e8\u7684\u4f4d\u7f6e"),e.qZA(),e.TgZ(271,"td")(272,"code"),e._uU(273,"number | string"),e.qZA()(),e.TgZ(274,"td")(275,"code"),e._uU(276,"24"),e.qZA()()(),e.TgZ(277,"tr")(278,"td"),e._uU(279,"nzDirection"),e.qZA(),e.TgZ(280,"td"),e._uU(281,"\u6d88\u606f\u6587\u5b57\u65b9\u5411"),e.qZA(),e.TgZ(282,"td")(283,"code"),e._uU(284,"'ltr' | 'rtl'"),e.qZA()(),e.TgZ(285,"td"),e._uU(286,"-"),e.qZA()()()(),e.TgZ(287,"h3",38)(288,"span"),e._uU(289,"NzMessageRef"),e.qZA(),e.TgZ(290,"a",39),e._uU(291,"#"),e.qZA()(),e.TgZ(292,"p"),e._uU(293,"\u5f53\u4f60\u8c03\u7528 "),e.TgZ(294,"code"),e._uU(295,"NzMessageService.success"),e.qZA(),e._uU(296," \u6216\u5176\u4ed6\u65b9\u6cd5\u65f6\u4f1a\u8fd4\u56de\u8be5\u5bf9\u8c61\u3002"),e.qZA(),e.TgZ(297,"pre",15)(298,"code")(299,"span",16),e._uU(300,"export"),e.qZA(),e._uU(301," "),e.TgZ(302,"span",16),e._uU(303,"interface"),e.qZA(),e._uU(304," "),e.TgZ(305,"span",40),e._uU(306,"NzMessageRef"),e.qZA(),e._uU(307," "),e.TgZ(308,"span",17),e._uU(309,"{"),e.qZA(),e._uU(310,"\n  messageId"),e.TgZ(311,"span",17),e._uU(312,":"),e.qZA(),e._uU(313," "),e.TgZ(314,"span",16),e._uU(315,"string"),e.qZA(),e.TgZ(316,"span",17),e._uU(317,";"),e.qZA(),e._uU(318,"\n  onClose"),e.TgZ(319,"span",17),e._uU(320,":"),e.qZA(),e._uU(321," Subject"),e.TgZ(322,"span",41),e._uU(323,"<"),e.qZA(),e.TgZ(324,"span",16),e._uU(325,"false"),e.qZA(),e.TgZ(326,"span",41),e._uU(327,">"),e.qZA(),e.TgZ(328,"span",17),e._uU(329,";"),e.qZA(),e._uU(330," "),e.TgZ(331,"span",42),e._uU(332,"// \u5f53 message \u5173\u95ed\u65f6\u5b83\u4f1a\u6d3e\u53d1\u4e00\u4e2a\u4e8b\u4ef6"),e.qZA(),e._uU(333,"\n"),e.TgZ(334,"span",17),e._uU(335,"}"),e.qZA()()(),e.fQ9(),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("nzOffsetTop",16),e.xp6(1),e.Q6J("nzAffix",!1),e.xp6(50),e.Q6J("nzGutter",16),e.xp6(1),e.Q6J("nzXl",12)("nzSpan",24),e.xp6(1),e.Q6J("nzId","components-message-demo-info")("nzLink","components-message-demo-info")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/info.md"),e.xp6(5),e.Q6J("nzId","components-message-demo-duration")("nzLink","components-message-demo-duration")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/duration.md"),e.xp6(11),e.Q6J("nzId","components-message-demo-close")("nzLink","components-message-demo-close")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/close.md"),e.xp6(8),e.Q6J("nzXl",12)("nzSpan",24),e.xp6(1),e.Q6J("nzId","components-message-demo-other")("nzLink","components-message-demo-other")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/other.md"),e.xp6(5),e.Q6J("nzId","components-message-demo-loading")("nzLink","components-message-demo-loading")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/loading.md"))},dependencies:[m.G,c.IT,c.Fp,A.$,Z.t3,Z.SK,T.SY,l.Ls,i.w,U,h,f,q,C],encapsulation:2}),o})(),b=(()=>{class o{constructor(){this.expanded=!1}goLink(n){window&&(window.location.hash=n)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(n=>{n.nzExpanded=this.expanded,n.expandCode(this.expanded),n.check()})}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-message"]],viewQuery:function(n,u){if(1&n&&e.Gf(m.G,5),2&n){let a;e.iGM(a=e.CRH())&&(u.codeBoxes=a)}},decls:340,vars:27,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-message-demo-info","nzTitle","Normal prompt"],["nzHref","#components-message-demo-other","nzTitle","Other types of message"],["nzHref","#components-message-demo-duration","nzTitle","Customize duration"],["nzHref","#components-message-demo-loading","nzTitle","Message of loading"],["nzHref","#components-message-demo-close","nzTitle","Customize duration"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","Expand All Code",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","Normal prompt","nzSelector","nz-demo-message-info","nzGenerateCommand","ng g ng-zorro-antd:message-info <name>","nzComponentName","NzDemoMessageInfoComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","Customize duration","nzSelector","nz-demo-message-duration","nzGenerateCommand","ng g ng-zorro-antd:message-duration <name>","nzComponentName","NzDemoMessageDurationComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Customize duration","nzSelector","nz-demo-message-close","nzGenerateCommand","ng g ng-zorro-antd:message-close <name>","nzComponentName","NzDemoMessageCloseComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Other types of message","nzSelector","nz-demo-message-other","nzGenerateCommand","ng g ng-zorro-antd:message-other <name>","nzComponentName","NzDemoMessageOtherComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Message of loading","nzSelector","nz-demo-message-loading","nzGenerateCommand","ng g ng-zorro-antd:message-loading <name>","nzComponentName","NzDemoMessageLoadingComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nzmessageservice"],[1,"api-type-label","service"],["onclick","window.location.hash = 'nzmessageservice'",1,"anchor"],["id","global-configuration"],["onclick","window.location.hash = 'global-configuration'",1,"anchor"],["href","/docs/global-config/en"],["id","nzmessageref"],["onclick","window.location.hash = 'nzmessageref'",1,"anchor"],[1,"token","class-name"],[1,"token","operator"],["spellcheck","true",1,"token","comment"]],template:function(n,u){1&n&&(e.TgZ(0,"article")(1,"nz-affix",0)(2,"nz-anchor",1),e.NdJ("nzClick",function(p){return u.goLink(p)}),e._UZ(3,"nz-link",2)(4,"nz-link",3)(5,"nz-link",4)(6,"nz-link",5)(7,"nz-link",6)(8,"nz-link",7),e.qZA()(),e.TgZ(9,"section",8)(10,"h1"),e._uU(11,"Message"),e._UZ(12,"span",9)(13,"span",10),e.TgZ(14,"a",11),e._UZ(15,"span",12),e.qZA()(),e.TgZ(16,"section",8),e.IAx(),e.TgZ(17,"p"),e._uU(18,"Display global messages as feedback in response to user operations."),e.qZA(),e.TgZ(19,"h2",13)(20,"span"),e._uU(21,"When To Use"),e.qZA(),e.TgZ(22,"a",14),e._uU(23,"#"),e.qZA()(),e.TgZ(24,"ul")(25,"li"),e._uU(26,"To provide feedback such as success, warning, error etc."),e.qZA(),e.TgZ(27,"li"),e._uU(28,"A message is displayed at top and center and will be dismissed automatically, as a non-interrupting light-weighted prompt."),e.qZA()(),e.TgZ(29,"pre",15)(30,"code")(31,"span",16),e._uU(32,"import"),e.qZA(),e._uU(33," "),e.TgZ(34,"span",17),e._uU(35,"{"),e.qZA(),e._uU(36," NzMessageModule "),e.TgZ(37,"span",17),e._uU(38,"}"),e.qZA(),e._uU(39," "),e.TgZ(40,"span",16),e._uU(41,"from"),e.qZA(),e._uU(42," "),e.TgZ(43,"span",18),e._uU(44,"'ng-zorro-antd/message'"),e.qZA(),e.TgZ(45,"span",17),e._uU(46,";"),e.qZA()()(),e.fQ9(),e.qZA(),e.TgZ(47,"h2")(48,"span"),e._uU(49,"Examples"),e.qZA(),e.TgZ(50,"span",19),e.NdJ("click",function(){return u.expandAllCode()}),e.qZA()()(),e.TgZ(51,"div",20)(52,"div",21)(53,"nz-code-box",22),e._UZ(54,"nz-demo-message-info",23),e.TgZ(55,"div",24),e.IAx(),e.TgZ(56,"p"),e._uU(57,"Normal messages as feedbacks."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(58,"nz-code-box",25),e._UZ(59,"nz-demo-message-duration",23),e.TgZ(60,"div",24),e.IAx(),e.TgZ(61,"p"),e._uU(62,"Customize message display duration from default "),e.TgZ(63,"code"),e._uU(64,"3s"),e.qZA(),e._uU(65," to "),e.TgZ(66,"code"),e._uU(67,"10s"),e.qZA(),e._uU(68,"."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(69,"nz-code-box",26),e._UZ(70,"nz-demo-message-close",23),e.TgZ(71,"div",24),e.IAx(),e.TgZ(72,"p"),e._uU(73,"You can subscribe to "),e.TgZ(74,"code"),e._uU(75,"onClose"),e.qZA(),e._uU(76," event to make some operations. This case would open three messages in sequence."),e.qZA(),e.fQ9(),e.qZA()()(),e.TgZ(77,"div",21)(78,"nz-code-box",27),e._UZ(79,"nz-demo-message-other",23),e.TgZ(80,"div",24),e.IAx(),e.TgZ(81,"p"),e._uU(82,"Messages of success, error and warning types."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(83,"nz-code-box",28),e._UZ(84,"nz-demo-message-loading",23),e.TgZ(85,"div",24),e.IAx(),e.TgZ(86,"p"),e._uU(87,"Display a global loading indicator, which is dismissed by itself asynchronously."),e.qZA(),e.fQ9(),e.qZA()()()(),e.TgZ(88,"section",29),e.IAx(),e.TgZ(89,"h2",30)(90,"span"),e._uU(91,"API"),e.qZA(),e.TgZ(92,"a",31),e._uU(93,"#"),e.qZA()(),e.TgZ(94,"h3",32)(95,"span"),e._uU(96,"NzMessageService"),e.qZA(),e.TgZ(97,"label",33),e._uU(98,"service"),e.qZA(),e.TgZ(99,"a",34),e._uU(100,"#"),e.qZA()(),e.TgZ(101,"p"),e._uU(102,"This components provides some service methods, with usage and arguments as following:"),e.qZA(),e.TgZ(103,"ul")(104,"li")(105,"code"),e._uU(106,"NzMessageService.success(content, [options])"),e.qZA()(),e.TgZ(107,"li")(108,"code"),e._uU(109,"NzMessageService.error(content, [options])"),e.qZA()(),e.TgZ(110,"li")(111,"code"),e._uU(112,"NzMessageService.info(content, [options])"),e.qZA()(),e.TgZ(113,"li")(114,"code"),e._uU(115,"NzMessageService.warning(content, [options])"),e.qZA()(),e.TgZ(116,"li")(117,"code"),e._uU(118,"NzMessageService.loading(content, [options])"),e.qZA()()(),e.TgZ(119,"table")(120,"thead")(121,"tr")(122,"th"),e._uU(123,"Argument"),e.qZA(),e.TgZ(124,"th"),e._uU(125,"Description"),e.qZA(),e.TgZ(126,"th"),e._uU(127,"Type"),e.qZA(),e.TgZ(128,"th"),e._uU(129,"Default"),e.qZA()()(),e.TgZ(130,"tbody")(131,"tr")(132,"td"),e._uU(133,"content"),e.qZA(),e.TgZ(134,"td"),e._uU(135,"The content of message"),e.qZA(),e.TgZ(136,"td")(137,"code"),e._uU(138,"string | TemplateRef<void>"),e.qZA()(),e.TgZ(139,"td"),e._uU(140,"-"),e.qZA()(),e.TgZ(141,"tr")(142,"td"),e._uU(143,"options"),e.qZA(),e.TgZ(144,"td"),e._uU(145,"Support setting the parameters for the current message box, see the table below"),e.qZA(),e.TgZ(146,"td")(147,"code"),e._uU(148,"object"),e.qZA()(),e.TgZ(149,"td"),e._uU(150,"-"),e.qZA()()()(),e.TgZ(151,"p"),e._uU(152,"The parameters that are set by the "),e.TgZ(153,"code"),e._uU(154,"options"),e.qZA(),e._uU(155," support are as follows:"),e.qZA(),e.TgZ(156,"table")(157,"thead")(158,"tr")(159,"th"),e._uU(160,"Argument"),e.qZA(),e.TgZ(161,"th"),e._uU(162,"Description"),e.qZA(),e.TgZ(163,"th"),e._uU(164,"Type"),e.qZA()()(),e.TgZ(165,"tbody")(166,"tr")(167,"td"),e._uU(168,"nzDuration"),e.qZA(),e.TgZ(169,"td"),e._uU(170,"Duration (milliseconds), does not disappear when set to 0"),e.qZA(),e.TgZ(171,"td")(172,"code"),e._uU(173,"number"),e.qZA()()(),e.TgZ(174,"tr")(175,"td"),e._uU(176,"nzPauseOnHover"),e.qZA(),e.TgZ(177,"td"),e._uU(178,"Do not remove automatically when mouse is over while setting to "),e.TgZ(179,"code"),e._uU(180,"true"),e.qZA()(),e.TgZ(181,"td")(182,"code"),e._uU(183,"boolean"),e.qZA()()(),e.TgZ(184,"tr")(185,"td"),e._uU(186,"nzAnimate"),e.qZA(),e.TgZ(187,"td"),e._uU(188,"Whether to turn on animation"),e.qZA(),e.TgZ(189,"td")(190,"code"),e._uU(191,"boolean"),e.qZA()()()()(),e.TgZ(192,"p"),e._uU(193,"Methods for destruction are also provided:"),e.qZA(),e.TgZ(194,"ul")(195,"li")(196,"code"),e._uU(197,"message.remove(id)"),e.qZA(),e._uU(198," // Remove the message with the specified id. When the id is empty, remove all messages (the message id is returned by the above method)"),e.qZA()(),e.TgZ(199,"h3",35)(200,"span"),e._uU(201,"Global Configuration"),e.qZA(),e.TgZ(202,"a",36),e._uU(203,"#"),e.qZA()(),e.TgZ(204,"p"),e._uU(205,"You can use "),e.TgZ(206,"code"),e._uU(207,"NzConfigService"),e.qZA(),e._uU(208," to configure this component globally. Please check the "),e.TgZ(209,"a",37),e._uU(210,"Global Configuration"),e.qZA(),e._uU(211," chapter for more information."),e.qZA(),e.TgZ(212,"table")(213,"thead")(214,"tr")(215,"th"),e._uU(216,"Argument"),e.qZA(),e.TgZ(217,"th"),e._uU(218,"Description"),e.qZA(),e.TgZ(219,"th"),e._uU(220,"Type"),e.qZA(),e.TgZ(221,"th"),e._uU(222,"Default"),e.qZA()()(),e.TgZ(223,"tbody")(224,"tr")(225,"td"),e._uU(226,"nzDuration"),e.qZA(),e.TgZ(227,"td"),e._uU(228,"Duration (milliseconds), does not disappear when set to 0"),e.qZA(),e.TgZ(229,"td")(230,"code"),e._uU(231,"number"),e.qZA()(),e.TgZ(232,"td")(233,"code"),e._uU(234,"3000"),e.qZA()()(),e.TgZ(235,"tr")(236,"td"),e._uU(237,"nzMaxStack"),e.qZA(),e.TgZ(238,"td"),e._uU(239,"The maximum number of messages that can be displayed at the same time"),e.qZA(),e.TgZ(240,"td")(241,"code"),e._uU(242,"number"),e.qZA()(),e.TgZ(243,"td")(244,"code"),e._uU(245,"7"),e.qZA()()(),e.TgZ(246,"tr")(247,"td"),e._uU(248,"nzPauseOnHover"),e.qZA(),e.TgZ(249,"td"),e._uU(250,"Do not remove automatically when mouse is over while setting to "),e.TgZ(251,"code"),e._uU(252,"true"),e.qZA()(),e.TgZ(253,"td")(254,"code"),e._uU(255,"boolean"),e.qZA()(),e.TgZ(256,"td")(257,"code"),e._uU(258,"true"),e.qZA()()(),e.TgZ(259,"tr")(260,"td"),e._uU(261,"nzAnimate"),e.qZA(),e.TgZ(262,"td"),e._uU(263,"Whether to turn on animation"),e.qZA(),e.TgZ(264,"td")(265,"code"),e._uU(266,"boolean"),e.qZA()(),e.TgZ(267,"td")(268,"code"),e._uU(269,"true"),e.qZA()()(),e.TgZ(270,"tr")(271,"td"),e._uU(272,"nzTop"),e.qZA(),e.TgZ(273,"td"),e._uU(274,"Distance from top"),e.qZA(),e.TgZ(275,"td")(276,"code"),e._uU(277,"number | string"),e.qZA()(),e.TgZ(278,"td")(279,"code"),e._uU(280,"24"),e.qZA()()(),e.TgZ(281,"tr")(282,"td"),e._uU(283,"nzDirection"),e.qZA(),e.TgZ(284,"td"),e._uU(285,"Direction of the text in the messages"),e.qZA(),e.TgZ(286,"td")(287,"code"),e._uU(288,"'ltr' | 'rtl'"),e.qZA()(),e.TgZ(289,"td"),e._uU(290,"-"),e.qZA()()()(),e.TgZ(291,"h3",38)(292,"span"),e._uU(293,"NzMessageRef"),e.qZA(),e.TgZ(294,"a",39),e._uU(295,"#"),e.qZA()(),e.TgZ(296,"p"),e._uU(297,"It's the object that returned when you call "),e.TgZ(298,"code"),e._uU(299,"NzMessageService.success"),e.qZA(),e._uU(300," and others."),e.qZA(),e.TgZ(301,"pre",15)(302,"code")(303,"span",16),e._uU(304,"export"),e.qZA(),e._uU(305," "),e.TgZ(306,"span",16),e._uU(307,"interface"),e.qZA(),e._uU(308," "),e.TgZ(309,"span",40),e._uU(310,"NzMessageRef"),e.qZA(),e._uU(311," "),e.TgZ(312,"span",17),e._uU(313,"{"),e.qZA(),e._uU(314,"\n  messageId"),e.TgZ(315,"span",17),e._uU(316,":"),e.qZA(),e._uU(317," "),e.TgZ(318,"span",16),e._uU(319,"string"),e.qZA(),e.TgZ(320,"span",17),e._uU(321,";"),e.qZA(),e._uU(322,"\n  onClose"),e.TgZ(323,"span",17),e._uU(324,":"),e.qZA(),e._uU(325," Subject"),e.TgZ(326,"span",41),e._uU(327,"<"),e.qZA(),e.TgZ(328,"span",16),e._uU(329,"false"),e.qZA(),e.TgZ(330,"span",41),e._uU(331,">"),e.qZA(),e.TgZ(332,"span",17),e._uU(333,";"),e.qZA(),e._uU(334," "),e.TgZ(335,"span",42),e._uU(336,"// It would emit an event when the message is closed"),e.qZA(),e._uU(337,"\n"),e.TgZ(338,"span",17),e._uU(339,"}"),e.qZA()()(),e.fQ9(),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("nzOffsetTop",16),e.xp6(1),e.Q6J("nzAffix",!1),e.xp6(49),e.Q6J("nzGutter",16),e.xp6(1),e.Q6J("nzXl",12)("nzSpan",24),e.xp6(1),e.Q6J("nzId","components-message-demo-info")("nzLink","components-message-demo-info")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/info.md"),e.xp6(5),e.Q6J("nzId","components-message-demo-duration")("nzLink","components-message-demo-duration")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/duration.md"),e.xp6(11),e.Q6J("nzId","components-message-demo-close")("nzLink","components-message-demo-close")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/close.md"),e.xp6(8),e.Q6J("nzXl",12)("nzSpan",24),e.xp6(1),e.Q6J("nzId","components-message-demo-other")("nzLink","components-message-demo-other")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/other.md"),e.xp6(5),e.Q6J("nzId","components-message-demo-loading")("nzLink","components-message-demo-loading")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/loading.md"))},dependencies:[m.G,c.IT,c.Fp,A.$,Z.t3,Z.SK,T.SY,l.Ls,i.w,U,h,f,q,C],encapsulation:2}),o})(),M=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[D.G,E,F.Bz.forChild([{path:"en",component:b},{path:"zh",component:N}])]}),o})()}}]);
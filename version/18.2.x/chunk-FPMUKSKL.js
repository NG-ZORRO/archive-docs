import{e as F}from"./chunk-SWHDVER2.js";import{a as S,b as h,d as C}from"./chunk-B4IH7RR4.js";import{a as f}from"./chunk-7HQXT7RK.js";import{a as D,g as A,h as w,j as H}from"./chunk-OFCIJL47.js";import"./chunk-YBR2WUTB.js";import{Ea as k,Ic as y,Kc as T,Lc as I,Wb as M}from"./chunk-BYER7FCH.js";import{Ca as p,Da as z,H as X,Hb as s,Vb as t,Wb as n,Xb as d,cc as u,lc as b,mb as r,mc as B,nb as x,nc as N,pc as e,ra as g,yc as E}from"./chunk-U274QCT3.js";import"./chunk-RKLIRILV.js";var G=(()=>{let i=class i{constructor(o){this.message=o}startShowMessages(){this.message.loading("Action in progress",{nzDuration:2500}).onClose.pipe(X(()=>this.message.success("Loading finished",{nzDuration:2500}).onClose),X(()=>this.message.info("Loading finished is finished",{nzDuration:2500}).onClose)).subscribe(()=>{console.log("All completed!")})}};i.\u0275fac=function(a){return new(a||i)(x(F))},i.\u0275cmp=g({type:i,selectors:[["nz-demo-message-close"]],standalone:!0,features:[E],decls:2,vars:0,consts:[["nz-button","","nzType","default",3,"click"]],template:function(a,l){a&1&&(t(0,"button",0),u("click",function(){return l.startShowMessages()}),e(1,"Display a sequence of messages"),n())},dependencies:[C,h,S,f],encapsulation:2});let m=i;return m})();var Z=(()=>{let i=class i{createBasicMessage(){this.message.success("This is a prompt message for success, and it will disappear in 10 seconds",{nzDuration:1e4})}constructor(o){this.message=o}};i.\u0275fac=function(a){return new(a||i)(x(F))},i.\u0275cmp=g({type:i,selectors:[["nz-demo-message-duration"]],standalone:!0,features:[E],decls:2,vars:0,consts:[["nz-button","","nzType","default",3,"click"]],template:function(a,l){a&1&&(t(0,"button",0),u("click",function(){return l.createBasicMessage()}),e(1,"Customized display duration"),n())},dependencies:[C,h,S,f],encapsulation:2});let m=i;return m})();var P=(()=>{let i=class i{constructor(o){this.message=o}createBasicMessage(){this.message.info("This is a normal message")}};i.\u0275fac=function(a){return new(a||i)(x(F))},i.\u0275cmp=g({type:i,selectors:[["nz-demo-message-info"]],standalone:!0,features:[E],decls:2,vars:0,consts:[["nz-button","","nzType","primary",3,"click"]],template:function(a,l){a&1&&(t(0,"button",0),u("click",function(){return l.createBasicMessage()}),e(1,"Display normal message"),n())},dependencies:[C,h,S,f],encapsulation:2});let m=i;return m})();var j=(()=>{let i=class i{constructor(o){this.message=o}createBasicMessage(){let o=this.message.loading("Action in progress..",{nzDuration:0}).messageId;setTimeout(()=>{this.message.remove(o)},2500)}};i.\u0275fac=function(a){return new(a||i)(x(F))},i.\u0275cmp=g({type:i,selectors:[["nz-demo-message-loading"]],standalone:!0,features:[E],decls:2,vars:0,consts:[["nz-button","","nzType","default",3,"click"]],template:function(a,l){a&1&&(t(0,"button",0),u("click",function(){return l.createBasicMessage()}),e(1,"Display a loading indicator"),n())},dependencies:[C,h,S,f],encapsulation:2});let m=i;return m})();var W=(()=>{let i=class i{createMessage(o){this.message.create(o,`This is a message of ${o}`)}constructor(o){this.message=o}};i.\u0275fac=function(a){return new(a||i)(x(F))},i.\u0275cmp=g({type:i,selectors:[["nz-demo-message-other"]],standalone:!0,features:[E],decls:6,vars:0,consts:[["nz-button","",3,"click"]],template:function(a,l){a&1&&(t(0,"button",0),u("click",function(){return l.createMessage("success")}),e(1,"Success"),n(),t(2,"button",0),u("click",function(){return l.createMessage("error")}),e(3,"Error"),n(),t(4,"button",0),u("click",function(){return l.createMessage("warning")}),e(5,"Warning"),n())},dependencies:[C,h,S,f],styles:["[nz-button][_ngcontent-%COMP%]{margin-right:8px}"]});let m=i;return m})();var q=(()=>{let i=class i{constructor(){this.expanded=!1}goLink(o){window&&(window.location.hash=o)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(o=>o.expandCode(this.expanded))}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=g({type:i,selectors:[["nz-demo-message"]],viewQuery:function(a,l){if(a&1&&b(D,5),a&2){let c;B(c=N())&&(l.codeBoxes=c)}},standalone:!0,features:[E],decls:336,vars:27,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzClick","nzAffix"],["nzHref","#components-message-demo-info","nzTitle","\u666E\u901A\u63D0\u793A"],["nzHref","#components-message-demo-other","nzTitle","\u5176\u4ED6\u63D0\u793A\u7C7B\u578B"],["nzHref","#components-message-demo-duration","nzTitle","\u4FEE\u6539\u5EF6\u65F6"],["nzHref","#components-message-demo-loading","nzTitle","\u52A0\u8F7D\u4E2D"],["nzHref","#components-message-demo-close","nzTitle","\u7ED3\u675F\u4E8B\u4EF6"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/doc/index.zh-CN.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","\u4F55\u65F6\u4F7F\u7528"],["onclick","window.location.hash = '\u4F55\u65F6\u4F7F\u7528'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","\u5C55\u5F00\u5168\u90E8\u4EE3\u7801",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","\u666E\u901A\u63D0\u793A","nzSelector","nz-demo-message-info","nzGenerateCommand","ng g ng-zorro-antd:message-info <name>","nzComponentName","NzDemoMessageInfoComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","\u4FEE\u6539\u5EF6\u65F6","nzSelector","nz-demo-message-duration","nzGenerateCommand","ng g ng-zorro-antd:message-duration <name>","nzComponentName","NzDemoMessageDurationComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u7ED3\u675F\u4E8B\u4EF6","nzSelector","nz-demo-message-close","nzGenerateCommand","ng g ng-zorro-antd:message-close <name>","nzComponentName","NzDemoMessageCloseComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u5176\u4ED6\u63D0\u793A\u7C7B\u578B","nzSelector","nz-demo-message-other","nzGenerateCommand","ng g ng-zorro-antd:message-other <name>","nzComponentName","NzDemoMessageOtherComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u52A0\u8F7D\u4E2D","nzSelector","nz-demo-message-loading","nzGenerateCommand","ng g ng-zorro-antd:message-loading <name>","nzComponentName","NzDemoMessageLoadingComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nzmessageservice"],[1,"api-type-label","service"],["onclick","window.location.hash = 'nzmessageservice'",1,"anchor"],["id","\u5168\u5C40\u914D\u7F6E"],["onclick","window.location.hash = '\u5168\u5C40\u914D\u7F6E'",1,"anchor"],["href","/docs/global-config/zh"],["id","nzmessageref"],["onclick","window.location.hash = 'nzmessageref'",1,"anchor"],[1,"token","class-name"],[1,"token","operator"],["spellcheck","true",1,"token","comment"]],template:function(a,l){a&1&&(t(0,"article")(1,"nz-affix",0)(2,"nz-anchor",1),u("nzClick",function(Q){return l.goLink(Q)}),d(3,"nz-link",2)(4,"nz-link",3)(5,"nz-link",4)(6,"nz-link",5)(7,"nz-link",6)(8,"nz-link",7),n()(),t(9,"section",8)(10,"h1"),e(11,"Message"),t(12,"span",9),e(13,"\u5168\u5C40\u63D0\u793A"),n(),d(14,"span",10),t(15,"a",11),d(16,"span",12),n()(),t(17,"section",8),z(),t(18,"p"),e(19,"\u5168\u5C40\u5C55\u793A\u64CD\u4F5C\u53CD\u9988\u4FE1\u606F\u3002"),n(),t(20,"h2",13)(21,"span"),e(22,"\u4F55\u65F6\u4F7F\u7528"),n(),t(23,"a",14),e(24,"#"),n()(),t(25,"ul")(26,"li"),e(27,"\u53EF\u63D0\u4F9B\u6210\u529F\u3001\u8B66\u544A\u548C\u9519\u8BEF\u7B49\u53CD\u9988\u4FE1\u606F\u3002"),n(),t(28,"li"),e(29,"\u9876\u90E8\u5C45\u4E2D\u663E\u793A\u5E76\u81EA\u52A8\u6D88\u5931\uFF0C\u662F\u4E00\u79CD\u4E0D\u6253\u65AD\u7528\u6237\u64CD\u4F5C\u7684\u8F7B\u91CF\u7EA7\u63D0\u793A\u65B9\u5F0F\u3002"),n()(),t(30,"pre",15)(31,"code")(32,"span",16),e(33,"import"),n(),e(34," "),t(35,"span",17),e(36,"{"),n(),e(37," NzMessageModule "),t(38,"span",17),e(39,"}"),n(),e(40," "),t(41,"span",16),e(42,"from"),n(),e(43," "),t(44,"span",18),e(45,"'ng-zorro-antd/message'"),n(),t(46,"span",17),e(47,";"),n()()(),p(),n(),t(48,"h2")(49,"span"),e(50,"\u4EE3\u7801\u6F14\u793A"),n(),t(51,"span",19),u("click",function(){return l.expandAllCode()}),n()()(),t(52,"div",20)(53,"div",21)(54,"nz-code-box",22),d(55,"nz-demo-message-info",23),t(56,"div",24),z(),t(57,"p"),e(58,"\u4FE1\u606F\u63D0\u9192\u53CD\u9988\u3002"),n(),p(),n()(),t(59,"nz-code-box",25),d(60,"nz-demo-message-duration",23),t(61,"div",24),z(),t(62,"p"),e(63,"\u81EA\u5B9A\u4E49\u65F6\u957F "),t(64,"code"),e(65,"10s"),n(),e(66,"\uFF0C\u9ED8\u8BA4\u65F6\u957F\u4E3A "),t(67,"code"),e(68,"3s"),n(),e(69,"\u3002"),n(),p(),n()(),t(70,"nz-code-box",26),d(71,"nz-demo-message-close",23),t(72,"div",24),z(),t(73,"p"),e(74,"\u53EF\u901A\u8FC7\u8BA2\u9605 "),t(75,"code"),e(76,"onClose"),n(),e(77," \u4E8B\u4EF6\u5728 message \u5173\u95ED\u65F6\u505A\u51FA\u67D0\u4E9B\u64CD\u4F5C\u3002\u4EE5\u4E0A\u7528\u4F8B\u5C06\u4F9D\u6B21\u6253\u5F00\u4E09\u4E2A message\u3002"),n(),p(),n()()(),t(78,"div",21)(79,"nz-code-box",27),d(80,"nz-demo-message-other",23),t(81,"div",24),z(),t(82,"p"),e(83,"\u5305\u62EC\u6210\u529F\u3001\u5931\u8D25\u3001\u8B66\u544A\u3002"),n(),p(),n()(),t(84,"nz-code-box",28),d(85,"nz-demo-message-loading",23),t(86,"div",24),z(),t(87,"p"),e(88,"\u8FDB\u884C\u5168\u5C40 loading\uFF0C\u5F02\u6B65\u81EA\u884C\u79FB\u9664\u3002"),n(),p(),n()()()(),t(89,"section",29),z(),t(90,"h2",30)(91,"span"),e(92,"API"),n(),t(93,"a",31),e(94,"#"),n()(),t(95,"h3",32)(96,"span"),e(97,"NzMessageService"),n(),t(98,"label",33),e(99,"service"),n(),t(100,"a",34),e(101,"#"),n()(),t(102,"p"),e(103,"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E00\u4E9B\u670D\u52A1\u65B9\u6CD5\uFF0C\u4F7F\u7528\u65B9\u5F0F\u548C\u53C2\u6570\u5982\u4E0B\uFF1A"),n(),t(104,"ul")(105,"li")(106,"code"),e(107,"NzMessageService.success(content, [options])"),n()(),t(108,"li")(109,"code"),e(110,"NzMessageService.error(content, [options])"),n()(),t(111,"li")(112,"code"),e(113,"NzMessageService.info(content, [options])"),n()(),t(114,"li")(115,"code"),e(116,"NzMessageService.warning(content, [options])"),n()(),t(117,"li")(118,"code"),e(119,"NzMessageService.loading(content, [options])"),n()()(),t(120,"table")(121,"thead")(122,"tr")(123,"th"),e(124,"\u53C2\u6570"),n(),t(125,"th"),e(126,"\u8BF4\u660E"),n(),t(127,"th"),e(128,"\u7C7B\u578B"),n(),t(129,"th"),e(130,"\u9ED8\u8BA4\u503C"),n()()(),t(131,"tbody")(132,"tr")(133,"td"),e(134,"content"),n(),t(135,"td"),e(136,"\u63D0\u793A\u5185\u5BB9"),n(),t(137,"td")(138,"code"),e(139,"string | TemplateRef<void>"),n()(),t(140,"td"),e(141,"-"),n()(),t(142,"tr")(143,"td"),e(144,"options"),n(),t(145,"td"),e(146,"\u652F\u6301\u8BBE\u7F6E\u9488\u5BF9\u5F53\u524D\u63D0\u793A\u6846\u7684\u53C2\u6570\uFF0C\u89C1\u4E0B\u65B9\u8868\u683C"),n(),t(147,"td")(148,"code"),e(149,"object"),n()(),t(150,"td"),e(151,"-"),n()()()(),t(152,"p")(153,"code"),e(154,"options"),n(),e(155," \u652F\u6301\u8BBE\u7F6E\u7684\u53C2\u6570\u5982\u4E0B\uFF1A"),n(),t(156,"table")(157,"thead")(158,"tr")(159,"th"),e(160,"\u53C2\u6570"),n(),t(161,"th"),e(162,"\u8BF4\u660E"),n(),t(163,"th"),e(164,"\u7C7B\u578B"),n()()(),t(165,"tbody")(166,"tr")(167,"td"),e(168,"nzDuration"),n(),t(169,"td"),e(170,"\u6301\u7EED\u65F6\u95F4(\u6BEB\u79D2)\uFF0C\u5F53\u8BBE\u7F6E\u4E3A0\u65F6\u4E0D\u6D88\u5931"),n(),t(171,"td")(172,"code"),e(173,"number"),n()()(),t(174,"tr")(175,"td"),e(176,"nzPauseOnHover"),n(),t(177,"td"),e(178,"\u9F20\u6807\u79FB\u4E0A\u65F6\u7981\u6B62\u81EA\u52A8\u79FB\u9664"),n(),t(179,"td")(180,"code"),e(181,"boolean"),n()()(),t(182,"tr")(183,"td"),e(184,"nzAnimate"),n(),t(185,"td"),e(186,"\u5F00\u5173\u52A8\u753B\u6548\u679C"),n(),t(187,"td")(188,"code"),e(189,"boolean"),n()()()()(),t(190,"p"),e(191,"\u8FD8\u63D0\u4F9B\u4E86\u5168\u5C40\u9500\u6BC1\u65B9\u6CD5\uFF1A"),n(),t(192,"ul")(193,"li")(194,"code"),e(195,"NzMessageService.remove(id)"),n(),e(196," // \u79FB\u9664\u7279\u5B9Aid\u7684\u6D88\u606F\uFF0C\u5F53id\u4E3A\u7A7A\u65F6\uFF0C\u79FB\u9664\u6240\u6709\u6D88\u606F\uFF08\u8BE5\u6D88\u606Fid\u901A\u8FC7\u4E0A\u8FF0\u65B9\u6CD5\u8FD4\u56DE\u503C\u4E2D\u5F97\u5230\uFF09"),n()(),t(197,"h3",35)(198,"span"),e(199,"\u5168\u5C40\u914D\u7F6E"),n(),t(200,"a",36),e(201,"#"),n()(),t(202,"p"),e(203,"\u53EF\u4EE5\u901A\u8FC7 "),t(204,"code"),e(205,"NzConfigService"),n(),e(206," \u8FDB\u884C\u5168\u5C40\u914D\u7F6E\uFF0C\u8BE6\u60C5\u8BF7\u89C1\u6587\u6863\u4E2D "),t(207,"a",37),e(208,"\u5168\u5C40\u914D\u7F6E\u9879"),n(),e(209," \u7AE0\u8282\u3002"),n(),t(210,"table")(211,"thead")(212,"tr")(213,"th"),e(214,"\u53C2\u6570"),n(),t(215,"th"),e(216,"\u8BF4\u660E"),n(),t(217,"th"),e(218,"\u7C7B\u578B"),n(),t(219,"th"),e(220,"\u9ED8\u8BA4\u503C"),n()()(),t(221,"tbody")(222,"tr")(223,"td"),e(224,"nzDuration"),n(),t(225,"td"),e(226,"\u6301\u7EED\u65F6\u95F4(\u6BEB\u79D2)\uFF0C\u5F53\u8BBE\u7F6E\u4E3A 0 \u65F6\u4E0D\u6D88\u5931"),n(),t(227,"td")(228,"code"),e(229,"number"),n()(),t(230,"td")(231,"code"),e(232,"3000"),n()()(),t(233,"tr")(234,"td"),e(235,"nzMaxStack"),n(),t(236,"td"),e(237,"\u540C\u4E00\u65F6\u95F4\u53EF\u5C55\u793A\u7684\u6700\u5927\u63D0\u793A\u6570\u91CF"),n(),t(238,"td")(239,"code"),e(240,"number"),n()(),t(241,"td")(242,"code"),e(243,"7"),n()()(),t(244,"tr")(245,"td"),e(246,"nzPauseOnHover"),n(),t(247,"td"),e(248,"\u9F20\u6807\u79FB\u4E0A\u65F6\u7981\u6B62\u81EA\u52A8\u79FB\u9664"),n(),t(249,"td")(250,"code"),e(251,"boolean"),n()(),t(252,"td")(253,"code"),e(254,"true"),n()()(),t(255,"tr")(256,"td"),e(257,"nzAnimate"),n(),t(258,"td"),e(259,"\u5F00\u5173\u52A8\u753B\u6548\u679C"),n(),t(260,"td")(261,"code"),e(262,"boolean"),n()(),t(263,"td")(264,"code"),e(265,"true"),n()()(),t(266,"tr")(267,"td"),e(268,"nzTop"),n(),t(269,"td"),e(270,"\u6D88\u606F\u8DDD\u79BB\u9876\u90E8\u7684\u4F4D\u7F6E"),n(),t(271,"td")(272,"code"),e(273,"number | string"),n()(),t(274,"td")(275,"code"),e(276,"24"),n()()(),t(277,"tr")(278,"td"),e(279,"nzDirection"),n(),t(280,"td"),e(281,"\u6D88\u606F\u6587\u5B57\u65B9\u5411"),n(),t(282,"td")(283,"code"),e(284,"'ltr' | 'rtl'"),n()(),t(285,"td"),e(286,"-"),n()()()(),t(287,"h3",38)(288,"span"),e(289,"NzMessageRef"),n(),t(290,"a",39),e(291,"#"),n()(),t(292,"p"),e(293,"\u5F53\u4F60\u8C03\u7528 "),t(294,"code"),e(295,"NzMessageService.success"),n(),e(296," \u6216\u5176\u4ED6\u65B9\u6CD5\u65F6\u4F1A\u8FD4\u56DE\u8BE5\u5BF9\u8C61\u3002"),n(),t(297,"pre",15)(298,"code")(299,"span",16),e(300,"export"),n(),e(301," "),t(302,"span",16),e(303,"interface"),n(),e(304," "),t(305,"span",40),e(306,"NzMessageRef"),n(),e(307," "),t(308,"span",17),e(309,"{"),n(),e(310,`
  messageId`),t(311,"span",17),e(312,":"),n(),e(313," "),t(314,"span",16),e(315,"string"),n(),t(316,"span",17),e(317,";"),n(),e(318,`
  onClose`),t(319,"span",17),e(320,":"),n(),e(321," Subject"),t(322,"span",41),e(323,"<"),n(),t(324,"span",16),e(325,"false"),n(),t(326,"span",41),e(327,">"),n(),t(328,"span",17),e(329,";"),n(),e(330," "),t(331,"span",42),e(332,"// \u5F53 message \u5173\u95ED\u65F6\u5B83\u4F1A\u6D3E\u53D1\u4E00\u4E2A\u4E8B\u4EF6"),n(),e(333,`
`),t(334,"span",17),e(335,"}"),n()()(),p(),n()()),a&2&&(r(),s("nzOffsetTop",16),r(),s("nzAffix",!1),r(50),s("nzGutter",16),r(),s("nzXl",12)("nzSpan",24),r(),s("nzId","components-message-demo-info")("nzLink","components-message-demo-info")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/info.md"),r(5),s("nzId","components-message-demo-duration")("nzLink","components-message-demo-duration")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/duration.md"),r(11),s("nzId","components-message-demo-close")("nzLink","components-message-demo-close")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/close.md"),r(8),s("nzXl",12)("nzSpan",24),r(),s("nzId","components-message-demo-other")("nzLink","components-message-demo-other")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/other.md"),r(5),s("nzId","components-message-demo-loading")("nzLink","components-message-demo-loading")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/loading.md"))},dependencies:[H,D,A,w,y,I,T,M,k,G,Z,P,j,W],encapsulation:2});let m=i;return m})();var U=(()=>{let i=class i{constructor(){this.expanded=!1}goLink(o){window&&(window.location.hash=o)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(o=>o.expandCode(this.expanded))}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=g({type:i,selectors:[["nz-demo-message"]],viewQuery:function(a,l){if(a&1&&b(D,5),a&2){let c;B(c=N())&&(l.codeBoxes=c)}},standalone:!0,features:[E],decls:340,vars:27,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzClick","nzAffix"],["nzHref","#components-message-demo-info","nzTitle","Normal prompt"],["nzHref","#components-message-demo-other","nzTitle","Other types of message"],["nzHref","#components-message-demo-duration","nzTitle","Customize duration"],["nzHref","#components-message-demo-loading","nzTitle","Message of loading"],["nzHref","#components-message-demo-close","nzTitle","Customize duration"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","Expand All Code",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","Normal prompt","nzSelector","nz-demo-message-info","nzGenerateCommand","ng g ng-zorro-antd:message-info <name>","nzComponentName","NzDemoMessageInfoComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","Customize duration","nzSelector","nz-demo-message-duration","nzGenerateCommand","ng g ng-zorro-antd:message-duration <name>","nzComponentName","NzDemoMessageDurationComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Customize duration","nzSelector","nz-demo-message-close","nzGenerateCommand","ng g ng-zorro-antd:message-close <name>","nzComponentName","NzDemoMessageCloseComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Other types of message","nzSelector","nz-demo-message-other","nzGenerateCommand","ng g ng-zorro-antd:message-other <name>","nzComponentName","NzDemoMessageOtherComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Message of loading","nzSelector","nz-demo-message-loading","nzGenerateCommand","ng g ng-zorro-antd:message-loading <name>","nzComponentName","NzDemoMessageLoadingComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nzmessageservice"],[1,"api-type-label","service"],["onclick","window.location.hash = 'nzmessageservice'",1,"anchor"],["id","global-configuration"],["onclick","window.location.hash = 'global-configuration'",1,"anchor"],["href","/docs/global-config/en"],["id","nzmessageref"],["onclick","window.location.hash = 'nzmessageref'",1,"anchor"],[1,"token","class-name"],[1,"token","operator"],["spellcheck","true",1,"token","comment"]],template:function(a,l){a&1&&(t(0,"article")(1,"nz-affix",0)(2,"nz-anchor",1),u("nzClick",function(Q){return l.goLink(Q)}),d(3,"nz-link",2)(4,"nz-link",3)(5,"nz-link",4)(6,"nz-link",5)(7,"nz-link",6)(8,"nz-link",7),n()(),t(9,"section",8)(10,"h1"),e(11,"Message"),d(12,"span",9)(13,"span",10),t(14,"a",11),d(15,"span",12),n()(),t(16,"section",8),z(),t(17,"p"),e(18,"Display global messages as feedback in response to user operations."),n(),t(19,"h2",13)(20,"span"),e(21,"When To Use"),n(),t(22,"a",14),e(23,"#"),n()(),t(24,"ul")(25,"li"),e(26,"To provide feedback such as success, warning, error etc."),n(),t(27,"li"),e(28,"A message is displayed at top and center and will be dismissed automatically, as a non-interrupting light-weighted prompt."),n()(),t(29,"pre",15)(30,"code")(31,"span",16),e(32,"import"),n(),e(33," "),t(34,"span",17),e(35,"{"),n(),e(36," NzMessageModule "),t(37,"span",17),e(38,"}"),n(),e(39," "),t(40,"span",16),e(41,"from"),n(),e(42," "),t(43,"span",18),e(44,"'ng-zorro-antd/message'"),n(),t(45,"span",17),e(46,";"),n()()(),p(),n(),t(47,"h2")(48,"span"),e(49,"Examples"),n(),t(50,"span",19),u("click",function(){return l.expandAllCode()}),n()()(),t(51,"div",20)(52,"div",21)(53,"nz-code-box",22),d(54,"nz-demo-message-info",23),t(55,"div",24),z(),t(56,"p"),e(57,"Normal messages as feedbacks."),n(),p(),n()(),t(58,"nz-code-box",25),d(59,"nz-demo-message-duration",23),t(60,"div",24),z(),t(61,"p"),e(62,"Customize message display duration from default "),t(63,"code"),e(64,"3s"),n(),e(65," to "),t(66,"code"),e(67,"10s"),n(),e(68,"."),n(),p(),n()(),t(69,"nz-code-box",26),d(70,"nz-demo-message-close",23),t(71,"div",24),z(),t(72,"p"),e(73,"You can subscribe to "),t(74,"code"),e(75,"onClose"),n(),e(76," event to make some operations. This case would open three messages in sequence."),n(),p(),n()()(),t(77,"div",21)(78,"nz-code-box",27),d(79,"nz-demo-message-other",23),t(80,"div",24),z(),t(81,"p"),e(82,"Messages of success, error and warning types."),n(),p(),n()(),t(83,"nz-code-box",28),d(84,"nz-demo-message-loading",23),t(85,"div",24),z(),t(86,"p"),e(87,"Display a global loading indicator, which is dismissed by itself asynchronously."),n(),p(),n()()()(),t(88,"section",29),z(),t(89,"h2",30)(90,"span"),e(91,"API"),n(),t(92,"a",31),e(93,"#"),n()(),t(94,"h3",32)(95,"span"),e(96,"NzMessageService"),n(),t(97,"label",33),e(98,"service"),n(),t(99,"a",34),e(100,"#"),n()(),t(101,"p"),e(102,"This components provides some service methods, with usage and arguments as following:"),n(),t(103,"ul")(104,"li")(105,"code"),e(106,"NzMessageService.success(content, [options])"),n()(),t(107,"li")(108,"code"),e(109,"NzMessageService.error(content, [options])"),n()(),t(110,"li")(111,"code"),e(112,"NzMessageService.info(content, [options])"),n()(),t(113,"li")(114,"code"),e(115,"NzMessageService.warning(content, [options])"),n()(),t(116,"li")(117,"code"),e(118,"NzMessageService.loading(content, [options])"),n()()(),t(119,"table")(120,"thead")(121,"tr")(122,"th"),e(123,"Argument"),n(),t(124,"th"),e(125,"Description"),n(),t(126,"th"),e(127,"Type"),n(),t(128,"th"),e(129,"Default"),n()()(),t(130,"tbody")(131,"tr")(132,"td"),e(133,"content"),n(),t(134,"td"),e(135,"The content of message"),n(),t(136,"td")(137,"code"),e(138,"string | TemplateRef<void>"),n()(),t(139,"td"),e(140,"-"),n()(),t(141,"tr")(142,"td"),e(143,"options"),n(),t(144,"td"),e(145,"Support setting the parameters for the current message box, see the table below"),n(),t(146,"td")(147,"code"),e(148,"object"),n()(),t(149,"td"),e(150,"-"),n()()()(),t(151,"p"),e(152,"The parameters that are set by the "),t(153,"code"),e(154,"options"),n(),e(155," support are as follows:"),n(),t(156,"table")(157,"thead")(158,"tr")(159,"th"),e(160,"Argument"),n(),t(161,"th"),e(162,"Description"),n(),t(163,"th"),e(164,"Type"),n()()(),t(165,"tbody")(166,"tr")(167,"td"),e(168,"nzDuration"),n(),t(169,"td"),e(170,"Duration (milliseconds), does not disappear when set to 0"),n(),t(171,"td")(172,"code"),e(173,"number"),n()()(),t(174,"tr")(175,"td"),e(176,"nzPauseOnHover"),n(),t(177,"td"),e(178,"Do not remove automatically when mouse is over while setting to "),t(179,"code"),e(180,"true"),n()(),t(181,"td")(182,"code"),e(183,"boolean"),n()()(),t(184,"tr")(185,"td"),e(186,"nzAnimate"),n(),t(187,"td"),e(188,"Whether to turn on animation"),n(),t(189,"td")(190,"code"),e(191,"boolean"),n()()()()(),t(192,"p"),e(193,"Methods for destruction are also provided:"),n(),t(194,"ul")(195,"li")(196,"code"),e(197,"message.remove(id)"),n(),e(198," // Remove the message with the specified id. When the id is empty, remove all messages (the message id is returned by the above method)"),n()(),t(199,"h3",35)(200,"span"),e(201,"Global Configuration"),n(),t(202,"a",36),e(203,"#"),n()(),t(204,"p"),e(205,"You can use "),t(206,"code"),e(207,"NzConfigService"),n(),e(208," to configure this component globally. Please check the "),t(209,"a",37),e(210,"Global Configuration"),n(),e(211," chapter for more information."),n(),t(212,"table")(213,"thead")(214,"tr")(215,"th"),e(216,"Argument"),n(),t(217,"th"),e(218,"Description"),n(),t(219,"th"),e(220,"Type"),n(),t(221,"th"),e(222,"Default"),n()()(),t(223,"tbody")(224,"tr")(225,"td"),e(226,"nzDuration"),n(),t(227,"td"),e(228,"Duration (milliseconds), does not disappear when set to 0"),n(),t(229,"td")(230,"code"),e(231,"number"),n()(),t(232,"td")(233,"code"),e(234,"3000"),n()()(),t(235,"tr")(236,"td"),e(237,"nzMaxStack"),n(),t(238,"td"),e(239,"The maximum number of messages that can be displayed at the same time"),n(),t(240,"td")(241,"code"),e(242,"number"),n()(),t(243,"td")(244,"code"),e(245,"7"),n()()(),t(246,"tr")(247,"td"),e(248,"nzPauseOnHover"),n(),t(249,"td"),e(250,"Do not remove automatically when mouse is over while setting to "),t(251,"code"),e(252,"true"),n()(),t(253,"td")(254,"code"),e(255,"boolean"),n()(),t(256,"td")(257,"code"),e(258,"true"),n()()(),t(259,"tr")(260,"td"),e(261,"nzAnimate"),n(),t(262,"td"),e(263,"Whether to turn on animation"),n(),t(264,"td")(265,"code"),e(266,"boolean"),n()(),t(267,"td")(268,"code"),e(269,"true"),n()()(),t(270,"tr")(271,"td"),e(272,"nzTop"),n(),t(273,"td"),e(274,"Distance from top"),n(),t(275,"td")(276,"code"),e(277,"number | string"),n()(),t(278,"td")(279,"code"),e(280,"24"),n()()(),t(281,"tr")(282,"td"),e(283,"nzDirection"),n(),t(284,"td"),e(285,"Direction of the text in the messages"),n(),t(286,"td")(287,"code"),e(288,"'ltr' | 'rtl'"),n()(),t(289,"td"),e(290,"-"),n()()()(),t(291,"h3",38)(292,"span"),e(293,"NzMessageRef"),n(),t(294,"a",39),e(295,"#"),n()(),t(296,"p"),e(297,"It's the object that returned when you call "),t(298,"code"),e(299,"NzMessageService.success"),n(),e(300," and others."),n(),t(301,"pre",15)(302,"code")(303,"span",16),e(304,"export"),n(),e(305," "),t(306,"span",16),e(307,"interface"),n(),e(308," "),t(309,"span",40),e(310,"NzMessageRef"),n(),e(311," "),t(312,"span",17),e(313,"{"),n(),e(314,`
  messageId`),t(315,"span",17),e(316,":"),n(),e(317," "),t(318,"span",16),e(319,"string"),n(),t(320,"span",17),e(321,";"),n(),e(322,`
  onClose`),t(323,"span",17),e(324,":"),n(),e(325," Subject"),t(326,"span",41),e(327,"<"),n(),t(328,"span",16),e(329,"false"),n(),t(330,"span",41),e(331,">"),n(),t(332,"span",17),e(333,";"),n(),e(334," "),t(335,"span",42),e(336,"// It would emit an event when the message is closed"),n(),e(337,`
`),t(338,"span",17),e(339,"}"),n()()(),p(),n()()),a&2&&(r(),s("nzOffsetTop",16),r(),s("nzAffix",!1),r(49),s("nzGutter",16),r(),s("nzXl",12)("nzSpan",24),r(),s("nzId","components-message-demo-info")("nzLink","components-message-demo-info")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/info.md"),r(5),s("nzId","components-message-demo-duration")("nzLink","components-message-demo-duration")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/duration.md"),r(11),s("nzId","components-message-demo-close")("nzLink","components-message-demo-close")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/close.md"),r(8),s("nzXl",12)("nzSpan",24),r(),s("nzId","components-message-demo-other")("nzLink","components-message-demo-other")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/other.md"),r(5),s("nzId","components-message-demo-loading")("nzLink","components-message-demo-loading")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/loading.md"))},dependencies:[H,D,A,w,y,I,T,M,k,G,Z,P,j,W],encapsulation:2});let m=i;return m})();var te=[{path:"en",component:U},{path:"zh",component:q}],Ae=te;export{Ae as default};
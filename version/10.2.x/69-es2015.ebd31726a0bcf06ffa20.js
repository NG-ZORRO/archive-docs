(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{"TB/v":function(n,e,b){"use strict";b.r(e),b.d(e,"NzDemoInputNumberModule",(function(){return v}));var t=b("tyNb"),o=b("WGB2"),c=b("nJzI"),i=b("TZWX");const r=[c.b,i.c];var d=b("rKiv"),a=b("fXoL"),m=b("utH8"),u=b("l83q"),p=b("MOHP"),s=b("uLhK"),z=b("pk25"),V=b("T+9E"),l=b("3Pt+");let U=(()=>{class n{constructor(){this.demoValue=3}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=a.Ib({type:n,selectors:[["nz-demo-input-number-basic"]],decls:1,vars:4,consts:[[3,"ngModel","nzMin","nzMax","nzStep","ngModelChange"]],template:function(n,e){1&n&&(a.Vb(0,"nz-input-number",0),a.dc("ngModelChange",(function(n){return e.demoValue=n})),a.Ub()),2&n&&a.pc("ngModel",e.demoValue)("nzMin",1)("nzMax",10)("nzStep",1)},directives:[c.a,l.p,l.s],encapsulation:2}),n})();var P=b("vdzw");let g=(()=>{class n{constructor(){this.demoValue=3,this.isDisabled=!1}toggleDisabled(){this.isDisabled=!this.isDisabled}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=a.Ib({type:n,selectors:[["nz-demo-input-number-disabled"]],decls:5,vars:6,consts:[[3,"ngModel","nzMin","nzMax","nzStep","nzDisabled","ngModelChange"],[2,"margin-top","20px"],["nz-button","",3,"nzType","click"]],template:function(n,e){1&n&&(a.Vb(0,"nz-input-number",0),a.dc("ngModelChange",(function(n){return e.demoValue=n})),a.Ub(),a.Vb(1,"div",1),a.Vb(2,"button",2),a.dc("click",(function(){return e.toggleDisabled()})),a.Vb(3,"span"),a.Pc(4,"Toggle Disabled"),a.Ub(),a.Ub(),a.Ub()),2&n&&(a.pc("ngModel",e.demoValue)("nzMin",1)("nzMax",10)("nzStep",1)("nzDisabled",e.isDisabled),a.Ab(2),a.pc("nzType","primary"))},directives:[c.a,l.p,l.s,i.a,P.a,s.a],encapsulation:2}),n})(),h=(()=>{class n{constructor(){this.demoValue=100,this.formatterPercent=n=>`${n} %`,this.parserPercent=n=>n.replace(" %",""),this.formatterDollar=n=>`$ ${n}`,this.parserDollar=n=>n.replace("$ ","")}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=a.Ib({type:n,selectors:[["nz-demo-input-number-formatter"]],decls:2,vars:12,consts:[[3,"ngModel","nzMin","nzMax","nzStep","nzFormatter","nzParser","ngModelChange"]],template:function(n,e){1&n&&(a.Vb(0,"nz-input-number",0),a.dc("ngModelChange",(function(n){return e.demoValue=n})),a.Ub(),a.Vb(1,"nz-input-number",0),a.dc("ngModelChange",(function(n){return e.demoValue=n})),a.Ub()),2&n&&(a.pc("ngModel",e.demoValue)("nzMin",1)("nzMax",100)("nzStep",1)("nzFormatter",e.formatterDollar)("nzParser",e.parserDollar),a.Ab(1),a.pc("ngModel",e.demoValue)("nzMin",1)("nzMax",100)("nzStep",1)("nzFormatter",e.formatterPercent)("nzParser",e.parserPercent))},directives:[c.a,l.p,l.s],styles:["nz-input-number[_ngcontent-%COMP%] {\n        margin-right: 8px;\n      }"]}),n})(),f=(()=>{class n{constructor(){this.demoValue=3}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=a.Ib({type:n,selectors:[["nz-demo-input-number-size"]],decls:3,vars:14,consts:[[3,"ngModel","nzSize","nzMin","nzMax","nzStep","ngModelChange"],[3,"ngModel","nzMin","nzMax","nzStep","ngModelChange"]],template:function(n,e){1&n&&(a.Vb(0,"nz-input-number",0),a.dc("ngModelChange",(function(n){return e.demoValue=n})),a.Ub(),a.Vb(1,"nz-input-number",1),a.dc("ngModelChange",(function(n){return e.demoValue=n})),a.Ub(),a.Vb(2,"nz-input-number",0),a.dc("ngModelChange",(function(n){return e.demoValue=n})),a.Ub()),2&n&&(a.pc("ngModel",e.demoValue)("nzSize","large")("nzMin",1)("nzMax",10)("nzStep",1),a.Ab(1),a.pc("ngModel",e.demoValue)("nzMin",1)("nzMax",10)("nzStep",1),a.Ab(1),a.pc("ngModel",e.demoValue)("nzSize","small")("nzMin",1)("nzMax",10)("nzStep",1))},directives:[c.a,l.p,l.s],styles:["nz-input-number[_ngcontent-%COMP%] {\n        margin-right: 8px;\n      }"]}),n})(),I=(()=>{class n{constructor(){this.demoValue=0}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=a.Ib({type:n,selectors:[["nz-demo-input-number-digit"]],decls:1,vars:5,consts:[[3,"ngModel","nzMin","nzMax","nzStep","nzPlaceHolder","ngModelChange"]],template:function(n,e){1&n&&(a.Vb(0,"nz-input-number",0),a.dc("ngModelChange",(function(n){return e.demoValue=n})),a.Ub()),2&n&&a.pc("ngModel",e.demoValue)("nzMin",1)("nzMax",10)("nzStep",.1)("nzPlaceHolder","Digital")},directives:[c.a,l.p,l.s],encapsulation:2}),n})(),M=(()=>{class n{constructor(){this.toFixedValue=2,this.cutValue=2,this.customFnValue=2,this.precision=2}customPrecisionFn(n,e){return+Number(n).toFixed(e+1)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=a.Ib({type:n,selectors:[["nz-demo-input-number-precision"]],decls:3,vars:7,consts:[["nzPlaceHolder","toFixed",3,"ngModel","nzPrecision","ngModelChange"],["nzPrecisionMode","cut","nzPlaceHolder","cut off",3,"ngModel","nzPrecision","ngModelChange"],["nzPlaceHolder","cut off",3,"ngModel","nzPrecision","nzPrecisionMode","ngModelChange"]],template:function(n,e){1&n&&(a.Vb(0,"nz-input-number",0),a.dc("ngModelChange",(function(n){return e.toFixedValue=n})),a.Ub(),a.Vb(1,"nz-input-number",1),a.dc("ngModelChange",(function(n){return e.cutValue=n})),a.Ub(),a.Vb(2,"nz-input-number",2),a.dc("ngModelChange",(function(n){return e.customFnValue=n})),a.Ub()),2&n&&(a.pc("ngModel",e.toFixedValue)("nzPrecision",e.precision),a.Ab(1),a.pc("ngModel",e.cutValue)("nzPrecision",e.precision),a.Ab(1),a.pc("ngModel",e.customFnValue)("nzPrecision",e.precision)("nzPrecisionMode",e.customPrecisionFn))},directives:[c.a,l.p,l.s],styles:["nz-input-number[_ngcontent-%COMP%] {\n        margin-right: 8px;\n      }"]}),n})(),x=(()=>{class n{constructor(){this.expanded=!1}goLink(n){window&&(window.location.hash=n)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(n=>{n.nzExpanded=this.expanded,n.expandCode(this.expanded),n.check()})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=a.Ib({type:n,selectors:[["nz-demo-input-number"]],viewQuery:function(n,e){var b;1&n&&a.Uc(d.a,!0),2&n&&a.yc(b=a.ec())&&(e.codeBoxes=b)},decls:364,vars:31,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-input-number-demo-basic","nzTitle","\u57fa\u672c"],["nzHref","#components-input-number-demo-size","nzTitle","\u4e09\u79cd\u5927\u5c0f"],["nzHref","#components-input-number-demo-disabled","nzTitle","\u4e0d\u53ef\u7528"],["nzHref","#components-input-number-demo-digit","nzTitle","\u5c0f\u6570"],["nzHref","#components-input-number-demo-formatter","nzTitle","\u683c\u5f0f\u5316\u5c55\u793a"],["nzHref","#components-input-number-demo-precision","nzTitle","\u7cbe\u5ea6"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/doc/index.zh-CN.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","\u4f55\u65f6\u4f7f\u7528"],["onclick","window.location.hash = '\u4f55\u65f6\u4f7f\u7528'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","\u57fa\u672c","nzSelector","nz-demo-input-number-basic","nzGenerateCommand","ng g ng-zorro-antd:input-number-basic <name>","nzComponentName","NzDemoInputNumberBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","\u4e0d\u53ef\u7528","nzSelector","nz-demo-input-number-disabled","nzGenerateCommand","ng g ng-zorro-antd:input-number-disabled <name>","nzComponentName","NzDemoInputNumberDisabledComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u683c\u5f0f\u5316\u5c55\u793a","nzSelector","nz-demo-input-number-formatter","nzGenerateCommand","ng g ng-zorro-antd:input-number-formatter <name>","nzComponentName","NzDemoInputNumberFormatterComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u4e09\u79cd\u5927\u5c0f","nzSelector","nz-demo-input-number-size","nzGenerateCommand","ng g ng-zorro-antd:input-number-size <name>","nzComponentName","NzDemoInputNumberSizeComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u5c0f\u6570","nzSelector","nz-demo-input-number-digit","nzGenerateCommand","ng g ng-zorro-antd:input-number-digit <name>","nzComponentName","NzDemoInputNumberDigitComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u7cbe\u5ea6","nzSelector","nz-demo-input-number-precision","nzGenerateCommand","ng g ng-zorro-antd:input-number-precision <name>","nzComponentName","NzDemoInputNumberPrecisionComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-input-number"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-input-number'",1,"anchor"],["href","https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/inputmode","target","_blank","rel","noopener"],["id","\u65b9\u6cd5"],["onclick","window.location.hash = '\u65b9\u6cd5'",1,"anchor"]],template:function(n,e){1&n&&(a.Vb(0,"article"),a.Vb(1,"nz-affix",0),a.Vb(2,"nz-anchor",1),a.dc("nzClick",(function(n){return e.goLink(n)})),a.Qb(3,"nz-link",2),a.Qb(4,"nz-link",3),a.Qb(5,"nz-link",4),a.Qb(6,"nz-link",5),a.Qb(7,"nz-link",6),a.Qb(8,"nz-link",7),a.Qb(9,"nz-link",8),a.Ub(),a.Ub(),a.Vb(10,"section",9),a.Vb(11,"h1"),a.Pc(12,"InputNumber"),a.Vb(13,"span",10),a.Pc(14,"\u6570\u5b57\u8f93\u5165\u6846"),a.Ub(),a.Qb(15,"span",11),a.Vb(16,"a",12),a.Qb(17,"i",13),a.Ub(),a.Ub(),a.Vb(18,"section",9),a.Pb(),a.Vb(19,"p"),a.Pc(20,"\u901a\u8fc7\u9f20\u6807\u6216\u952e\u76d8\uff0c\u8f93\u5165\u8303\u56f4\u5185\u7684\u6570\u503c\u3002"),a.Ub(),a.Vb(21,"h2",14),a.Vb(22,"span"),a.Pc(23,"\u4f55\u65f6\u4f7f\u7528"),a.Ub(),a.Vb(24,"a",15),a.Pc(25,"#"),a.Ub(),a.Ub(),a.Vb(26,"p"),a.Pc(27,"\u5f53\u9700\u8981\u83b7\u53d6\u6807\u51c6\u6570\u503c\u65f6\u3002"),a.Ub(),a.Vb(28,"pre",16),a.Vb(29,"code"),a.Vb(30,"span",17),a.Pc(31,"import"),a.Ub(),a.Pc(32," "),a.Vb(33,"span",18),a.Pc(34,"{"),a.Ub(),a.Pc(35," NzInputNumberModule "),a.Vb(36,"span",18),a.Pc(37,"}"),a.Ub(),a.Pc(38," "),a.Vb(39,"span",17),a.Pc(40,"from"),a.Ub(),a.Pc(41," "),a.Vb(42,"span",19),a.Pc(43,"'ng-zorro-antd/input-number'"),a.Ub(),a.Vb(44,"span",18),a.Pc(45,";"),a.Ub(),a.Ub(),a.Ub(),a.Wb(),a.Ub(),a.Vb(46,"h2"),a.Vb(47,"span"),a.Pc(48,"\u4ee3\u7801\u6f14\u793a"),a.Ub(),a.Vb(49,"i",20),a.dc("click",(function(){return e.expandAllCode()})),a.Ub(),a.Ub(),a.Ub(),a.Vb(50,"div",21),a.Vb(51,"div",22),a.Vb(52,"nz-code-box",23),a.Qb(53,"nz-demo-input-number-basic",24),a.Vb(54,"div",25),a.Pb(),a.Vb(55,"p"),a.Pc(56,"\u6570\u5b57\u8f93\u5165\u6846\u3002"),a.Ub(),a.Wb(),a.Ub(),a.Ub(),a.Vb(57,"nz-code-box",26),a.Qb(58,"nz-demo-input-number-disabled",24),a.Vb(59,"div",25),a.Pb(),a.Vb(60,"p"),a.Pc(61,"\u70b9\u51fb\u6309\u94ae\u5207\u6362\u53ef\u7528\u72b6\u6001\u3002"),a.Ub(),a.Wb(),a.Ub(),a.Ub(),a.Vb(62,"nz-code-box",27),a.Qb(63,"nz-demo-input-number-formatter",24),a.Vb(64,"div",25),a.Pb(),a.Vb(65,"p"),a.Pc(66,"\u901a\u8fc7 "),a.Vb(67,"code"),a.Pc(68,"nzFormatter"),a.Ub(),a.Pc(69," \u683c\u5f0f\u5316\u6570\u5b57\uff0c\u4ee5\u5c55\u793a\u5177\u6709\u5177\u4f53\u542b\u4e49\u7684\u6570\u636e\uff0c\u5f80\u5f80\u9700\u8981\u914d\u5408 "),a.Vb(70,"code"),a.Pc(71,"nzParser"),a.Ub(),a.Pc(72," \u4e00\u8d77\u4f7f\u7528\u3002"),a.Ub(),a.Wb(),a.Ub(),a.Ub(),a.Ub(),a.Vb(73,"div",22),a.Vb(74,"nz-code-box",28),a.Qb(75,"nz-demo-input-number-size",24),a.Vb(76,"div",25),a.Pb(),a.Vb(77,"p"),a.Pc(78,"\u4e09\u79cd\u5927\u5c0f\u7684\u6570\u5b57\u8f93\u5165\u6846\uff0c\u5f53 "),a.Vb(79,"code"),a.Pc(80,"nzSize"),a.Ub(),a.Pc(81," \u5206\u522b\u4e3a "),a.Vb(82,"code"),a.Pc(83,"large"),a.Ub(),a.Pc(84," \u548c "),a.Vb(85,"code"),a.Pc(86,"small"),a.Ub(),a.Pc(87," \u65f6\uff0c\u8f93\u5165\u6846\u9ad8\u5ea6\u4e3a "),a.Vb(88,"code"),a.Pc(89,"40px"),a.Ub(),a.Pc(90," \u548c "),a.Vb(91,"code"),a.Pc(92,"24px"),a.Ub(),a.Pc(93," \uff0c\u9ed8\u8ba4\u9ad8\u5ea6\u4e3a "),a.Vb(94,"code"),a.Pc(95,"32px"),a.Ub(),a.Pc(96,"\u3002"),a.Ub(),a.Wb(),a.Ub(),a.Ub(),a.Vb(97,"nz-code-box",29),a.Qb(98,"nz-demo-input-number-digit",24),a.Vb(99,"div",25),a.Pb(),a.Vb(100,"p"),a.Pc(101,"\u548c\u539f\u751f\u7684\u6570\u5b57\u8f93\u5165\u6846\u4e00\u6837\uff0cvalue \u7684\u7cbe\u5ea6\u7531 "),a.Vb(102,"code"),a.Pc(103,"nzStep"),a.Ub(),a.Pc(104," \u7684\u5c0f\u6570\u4f4d\u6570\u51b3\u5b9a\u3002"),a.Ub(),a.Wb(),a.Ub(),a.Ub(),a.Vb(105,"nz-code-box",30),a.Qb(106,"nz-demo-input-number-precision",24),a.Vb(107,"div",25),a.Pb(),a.Vb(108,"p"),a.Pc(109,"\u6307\u5b9a value \u7684\u7cbe\u5ea6"),a.Ub(),a.Wb(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Vb(110,"section",31),a.Pb(),a.Vb(111,"h2",32),a.Vb(112,"span"),a.Pc(113,"API"),a.Ub(),a.Vb(114,"a",33),a.Pc(115,"#"),a.Ub(),a.Ub(),a.Vb(116,"h3",34),a.Vb(117,"span"),a.Pc(118,"nz-input-number"),a.Ub(),a.Vb(119,"label",35),a.Pc(120,"component"),a.Ub(),a.Vb(121,"a",36),a.Pc(122,"#"),a.Ub(),a.Ub(),a.Vb(123,"table"),a.Vb(124,"thead"),a.Vb(125,"tr"),a.Vb(126,"th"),a.Pc(127,"\u6210\u5458"),a.Ub(),a.Vb(128,"th"),a.Pc(129,"\u8bf4\u660e"),a.Ub(),a.Vb(130,"th"),a.Pc(131,"\u7c7b\u578b"),a.Ub(),a.Vb(132,"th"),a.Pc(133,"\u9ed8\u8ba4\u503c"),a.Ub(),a.Ub(),a.Ub(),a.Vb(134,"tbody"),a.Vb(135,"tr"),a.Vb(136,"td"),a.Vb(137,"code"),a.Pc(138,"[ngModel]"),a.Ub(),a.Ub(),a.Vb(139,"td"),a.Pc(140,"\u5f53\u524d\u503c\uff0c\u53ef\u53cc\u5411\u7ed1\u5b9a"),a.Ub(),a.Vb(141,"td"),a.Vb(142,"code"),a.Pc(143,"number | string"),a.Ub(),a.Pc(144," | "),a.Vb(145,"code"),a.Pc(146,"string"),a.Ub(),a.Ub(),a.Vb(147,"td"),a.Pc(148,"-"),a.Ub(),a.Ub(),a.Vb(149,"tr"),a.Vb(150,"td"),a.Vb(151,"code"),a.Pc(152,"[nzAutoFocus]"),a.Ub(),a.Ub(),a.Vb(153,"td"),a.Pc(154,"\u81ea\u52a8\u83b7\u53d6\u7126\u70b9"),a.Ub(),a.Vb(155,"td"),a.Vb(156,"code"),a.Pc(157,"boolean"),a.Ub(),a.Ub(),a.Vb(158,"td"),a.Vb(159,"code"),a.Pc(160,"false"),a.Ub(),a.Ub(),a.Ub(),a.Vb(161,"tr"),a.Vb(162,"td"),a.Vb(163,"code"),a.Pc(164,"[nzDisabled]"),a.Ub(),a.Ub(),a.Vb(165,"td"),a.Pc(166,"\u7981\u7528"),a.Ub(),a.Vb(167,"td"),a.Vb(168,"code"),a.Pc(169,"boolean"),a.Ub(),a.Ub(),a.Vb(170,"td"),a.Vb(171,"code"),a.Pc(172,"false"),a.Ub(),a.Ub(),a.Ub(),a.Vb(173,"tr"),a.Vb(174,"td"),a.Vb(175,"code"),a.Pc(176,"[nzMax]"),a.Ub(),a.Ub(),a.Vb(177,"td"),a.Pc(178,"\u6700\u5927\u503c"),a.Ub(),a.Vb(179,"td"),a.Vb(180,"code"),a.Pc(181,"number"),a.Ub(),a.Ub(),a.Vb(182,"td"),a.Vb(183,"code"),a.Pc(184,"Infinity"),a.Ub(),a.Ub(),a.Ub(),a.Vb(185,"tr"),a.Vb(186,"td"),a.Vb(187,"code"),a.Pc(188,"[nzMin]"),a.Ub(),a.Ub(),a.Vb(189,"td"),a.Pc(190,"\u6700\u5c0f\u503c"),a.Ub(),a.Vb(191,"td"),a.Vb(192,"code"),a.Pc(193,"number"),a.Ub(),a.Ub(),a.Vb(194,"td"),a.Vb(195,"code"),a.Pc(196,"-Infinity"),a.Ub(),a.Ub(),a.Ub(),a.Vb(197,"tr"),a.Vb(198,"td"),a.Vb(199,"code"),a.Pc(200,"[nzFormatter]"),a.Ub(),a.Ub(),a.Vb(201,"td"),a.Pc(202,"\u6307\u5b9a\u8f93\u5165\u6846\u5c55\u793a\u503c\u7684\u683c\u5f0f"),a.Ub(),a.Vb(203,"td"),a.Vb(204,"code"),a.Pc(205,"(value: number | string) => string | number"),a.Ub(),a.Ub(),a.Vb(206,"td"),a.Pc(207,"-"),a.Ub(),a.Ub(),a.Vb(208,"tr"),a.Vb(209,"td"),a.Vb(210,"code"),a.Pc(211,"[nzParser]"),a.Ub(),a.Ub(),a.Vb(212,"td"),a.Pc(213,"\u6307\u5b9a\u4ece nzFormatter \u91cc\u8f6c\u6362\u56de\u6570\u5b57\u7684\u65b9\u5f0f\uff0c\u548c nzFormatter \u642d\u914d\u4f7f\u7528"),a.Ub(),a.Vb(214,"td"),a.Vb(215,"code"),a.Pc(216,"(value: string) => string | number"),a.Ub(),a.Ub(),a.Vb(217,"td"),a.Vb(218,"code"),a.Pc(219,"(value: string) => value.trim().replace(/\u3002/g, '.').replace(/[^\\w\\.-]+/g, '')"),a.Ub(),a.Ub(),a.Ub(),a.Vb(220,"tr"),a.Vb(221,"td"),a.Vb(222,"code"),a.Pc(223,"[nzPrecision]"),a.Ub(),a.Ub(),a.Vb(224,"td"),a.Pc(225,"\u6570\u503c\u7cbe\u5ea6"),a.Ub(),a.Vb(226,"td"),a.Vb(227,"code"),a.Pc(228,"number"),a.Ub(),a.Ub(),a.Vb(229,"td"),a.Pc(230,"-"),a.Ub(),a.Ub(),a.Vb(231,"tr"),a.Vb(232,"td"),a.Vb(233,"code"),a.Pc(234,"[nzPrecisionMode]"),a.Ub(),a.Ub(),a.Vb(235,"td"),a.Pc(236,"\u6570\u503c\u7cbe\u5ea6\u7684\u53d6\u503c\u65b9\u5f0f"),a.Ub(),a.Vb(237,"td"),a.Vb(238,"code"),a.Pc(239,"'cut' | 'toFixed' | ((value: number | string, precision?: number) => number)"),a.Ub(),a.Ub(),a.Vb(240,"td"),a.Vb(241,"code"),a.Pc(242,"'toFixed'"),a.Ub(),a.Ub(),a.Ub(),a.Vb(243,"tr"),a.Vb(244,"td"),a.Vb(245,"code"),a.Pc(246,"[nzSize]"),a.Ub(),a.Ub(),a.Vb(247,"td"),a.Pc(248,"\u8f93\u5165\u6846\u5927\u5c0f"),a.Ub(),a.Vb(249,"td"),a.Vb(250,"code"),a.Pc(251,"'large' | 'small' | 'default'"),a.Ub(),a.Ub(),a.Vb(252,"td"),a.Vb(253,"code"),a.Pc(254,"'default'"),a.Ub(),a.Ub(),a.Ub(),a.Vb(255,"tr"),a.Vb(256,"td"),a.Vb(257,"code"),a.Pc(258,"[nzStep]"),a.Ub(),a.Ub(),a.Vb(259,"td"),a.Pc(260,"\u6bcf\u6b21\u6539\u53d8\u6b65\u6570\uff0c\u53ef\u4ee5\u4e3a\u5c0f\u6570"),a.Ub(),a.Vb(261,"td"),a.Vb(262,"code"),a.Pc(263,"number | string"),a.Ub(),a.Ub(),a.Vb(264,"td"),a.Vb(265,"code"),a.Pc(266,"1"),a.Ub(),a.Ub(),a.Ub(),a.Vb(267,"tr"),a.Vb(268,"td"),a.Vb(269,"code"),a.Pc(270,"[nzInputMode]"),a.Ub(),a.Ub(),a.Vb(271,"td"),a.Pc(272,"\u63d0\u4f9b\u4e86\u7528\u6237\u5728\u7f16\u8f91\u5143\u7d20\u6216\u5176\u5185\u5bb9\u65f6\u53ef\u80fd\u8f93\u5165\u7684\u6570\u636e\u7c7b\u578b\u7684\u63d0\u793a\uff0c\u8be6\u89c1"),a.Vb(273,"a",37),a.Pc(274,"MDN"),a.Ub(),a.Ub(),a.Vb(275,"td"),a.Vb(276,"code"),a.Pc(277,"string"),a.Ub(),a.Ub(),a.Vb(278,"td"),a.Vb(279,"code"),a.Pc(280,"decimal"),a.Ub(),a.Ub(),a.Ub(),a.Vb(281,"tr"),a.Vb(282,"td"),a.Vb(283,"code"),a.Pc(284,"[nzPlaceHolder]"),a.Ub(),a.Ub(),a.Vb(285,"td"),a.Pc(286,"\u9009\u62e9\u6846\u9ed8\u8ba4\u6587\u5b57"),a.Ub(),a.Vb(287,"td"),a.Vb(288,"code"),a.Pc(289,"string"),a.Ub(),a.Ub(),a.Vb(290,"td"),a.Pc(291,"-"),a.Ub(),a.Ub(),a.Vb(292,"tr"),a.Vb(293,"td"),a.Vb(294,"code"),a.Pc(295,"[nzId]"),a.Ub(),a.Ub(),a.Vb(296,"td"),a.Pc(297,"\u7ec4\u4ef6\u5185\u90e8 input \u7684 id \u503c"),a.Ub(),a.Vb(298,"td"),a.Vb(299,"code"),a.Pc(300,"string"),a.Ub(),a.Ub(),a.Vb(301,"td"),a.Pc(302,"-"),a.Ub(),a.Ub(),a.Vb(303,"tr"),a.Vb(304,"td"),a.Vb(305,"code"),a.Pc(306,"(ngModelChange)"),a.Ub(),a.Ub(),a.Vb(307,"td"),a.Pc(308,"\u6570\u503c\u6539\u53d8\u65f6\u56de\u8c03"),a.Ub(),a.Vb(309,"td"),a.Vb(310,"code"),a.Pc(311,"EventEmitter<number>"),a.Ub(),a.Ub(),a.Vb(312,"td"),a.Pc(313,"-"),a.Ub(),a.Ub(),a.Vb(314,"tr"),a.Vb(315,"td"),a.Vb(316,"code"),a.Pc(317,"(nzFocus)"),a.Ub(),a.Ub(),a.Vb(318,"td"),a.Pc(319,"focus\u65f6\u56de\u8c03"),a.Ub(),a.Vb(320,"td"),a.Vb(321,"code"),a.Pc(322,"EventEmitter<void>"),a.Ub(),a.Ub(),a.Vb(323,"td"),a.Pc(324,"-"),a.Ub(),a.Ub(),a.Vb(325,"tr"),a.Vb(326,"td"),a.Vb(327,"code"),a.Pc(328,"(nzBlur)"),a.Ub(),a.Ub(),a.Vb(329,"td"),a.Pc(330,"blur\u65f6\u56de\u8c03"),a.Ub(),a.Vb(331,"td"),a.Vb(332,"code"),a.Pc(333,"EventEmitter<void>"),a.Ub(),a.Ub(),a.Vb(334,"td"),a.Pc(335,"-"),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Vb(336,"h4",38),a.Vb(337,"span"),a.Pc(338,"\u65b9\u6cd5"),a.Ub(),a.Vb(339,"a",39),a.Pc(340,"#"),a.Ub(),a.Ub(),a.Vb(341,"p"),a.Pc(342,"\u901a\u8fc7 "),a.Vb(343,"code"),a.Pc(344,"ViewChild"),a.Ub(),a.Pc(345," \u7b49\u65b9\u6cd5\u83b7\u5f97\u5b9e\u4f8b\u540e\u8c03\u7528"),a.Ub(),a.Vb(346,"table"),a.Vb(347,"thead"),a.Vb(348,"tr"),a.Vb(349,"th"),a.Pc(350,"\u540d\u79f0"),a.Ub(),a.Vb(351,"th"),a.Pc(352,"\u63cf\u8ff0"),a.Ub(),a.Ub(),a.Ub(),a.Vb(353,"tbody"),a.Vb(354,"tr"),a.Vb(355,"td"),a.Pc(356,"focus()"),a.Ub(),a.Vb(357,"td"),a.Pc(358,"\u83b7\u53d6\u7126\u70b9"),a.Ub(),a.Ub(),a.Vb(359,"tr"),a.Vb(360,"td"),a.Pc(361,"blur()"),a.Ub(),a.Vb(362,"td"),a.Pc(363,"\u79fb\u9664\u7126\u70b9"),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Wb(),a.Ub(),a.Ub()),2&n&&(a.Ab(1),a.pc("nzOffsetTop",16),a.Ab(1),a.pc("nzAffix",!1),a.Ab(48),a.pc("nzGutter",16),a.Ab(1),a.pc("nzXl",12)("nzSpan",24),a.Ab(1),a.pc("nzId","components-input-number-demo-basic")("nzLink","components-input-number-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/basic.md"),a.Ab(5),a.pc("nzId","components-input-number-demo-disabled")("nzLink","components-input-number-demo-disabled")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/disabled.md"),a.Ab(5),a.pc("nzId","components-input-number-demo-formatter")("nzLink","components-input-number-demo-formatter")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/formatter.md"),a.Ab(11),a.pc("nzXl",12)("nzSpan",24),a.Ab(1),a.pc("nzId","components-input-number-demo-size")("nzLink","components-input-number-demo-size")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/size.md"),a.Ab(23),a.pc("nzId","components-input-number-demo-digit")("nzLink","components-input-number-demo-digit")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/digit.md"),a.Ab(8),a.pc("nzId","components-input-number-demo-precision")("nzLink","components-input-number-demo-precision")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/precision.md"))},directives:[m.a,u.a,u.b,p.a,s.a,z.d,V.c,V.a,d.a,U,g,h,f,I,M],encapsulation:2}),n})(),k=(()=>{class n{constructor(){this.expanded=!1}goLink(n){window&&(window.location.hash=n)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(n=>{n.nzExpanded=this.expanded,n.expandCode(this.expanded),n.check()})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=a.Ib({type:n,selectors:[["nz-demo-input-number"]],viewQuery:function(n,e){var b;1&n&&a.Uc(d.a,!0),2&n&&a.yc(b=a.ec())&&(e.codeBoxes=b)},decls:362,vars:31,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-input-number-demo-basic","nzTitle","Basic"],["nzHref","#components-input-number-demo-size","nzTitle","Sizes"],["nzHref","#components-input-number-demo-disabled","nzTitle","Disabled"],["nzHref","#components-input-number-demo-digit","nzTitle","Decimals"],["nzHref","#components-input-number-demo-formatter","nzTitle","Formatter"],["nzHref","#components-input-number-demo-precision","nzTitle","Precision"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","Expand All Code",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","Basic","nzSelector","nz-demo-input-number-basic","nzGenerateCommand","ng g ng-zorro-antd:input-number-basic <name>","nzComponentName","NzDemoInputNumberBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","Disabled","nzSelector","nz-demo-input-number-disabled","nzGenerateCommand","ng g ng-zorro-antd:input-number-disabled <name>","nzComponentName","NzDemoInputNumberDisabledComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Formatter","nzSelector","nz-demo-input-number-formatter","nzGenerateCommand","ng g ng-zorro-antd:input-number-formatter <name>","nzComponentName","NzDemoInputNumberFormatterComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Sizes","nzSelector","nz-demo-input-number-size","nzGenerateCommand","ng g ng-zorro-antd:input-number-size <name>","nzComponentName","NzDemoInputNumberSizeComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Decimals","nzSelector","nz-demo-input-number-digit","nzGenerateCommand","ng g ng-zorro-antd:input-number-digit <name>","nzComponentName","NzDemoInputNumberDigitComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Precision","nzSelector","nz-demo-input-number-precision","nzGenerateCommand","ng g ng-zorro-antd:input-number-precision <name>","nzComponentName","NzDemoInputNumberPrecisionComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-input-number"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-input-number'",1,"anchor"],["href","https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode","target","_blank","rel","noopener"],["id","methods"],["onclick","window.location.hash = 'methods'",1,"anchor"]],template:function(n,e){1&n&&(a.Vb(0,"article"),a.Vb(1,"nz-affix",0),a.Vb(2,"nz-anchor",1),a.dc("nzClick",(function(n){return e.goLink(n)})),a.Qb(3,"nz-link",2),a.Qb(4,"nz-link",3),a.Qb(5,"nz-link",4),a.Qb(6,"nz-link",5),a.Qb(7,"nz-link",6),a.Qb(8,"nz-link",7),a.Qb(9,"nz-link",8),a.Ub(),a.Ub(),a.Vb(10,"section",9),a.Vb(11,"h1"),a.Pc(12,"InputNumber"),a.Qb(13,"span",10),a.Qb(14,"span",11),a.Vb(15,"a",12),a.Qb(16,"i",13),a.Ub(),a.Ub(),a.Vb(17,"section",9),a.Pb(),a.Vb(18,"p"),a.Pc(19,"Enter a number within certain range with the mouse or keyboard."),a.Ub(),a.Vb(20,"h2",14),a.Vb(21,"span"),a.Pc(22,"When To Use"),a.Ub(),a.Vb(23,"a",15),a.Pc(24,"#"),a.Ub(),a.Ub(),a.Vb(25,"p"),a.Pc(26,"When a numeric value needs to be provided."),a.Ub(),a.Vb(27,"pre",16),a.Vb(28,"code"),a.Vb(29,"span",17),a.Pc(30,"import"),a.Ub(),a.Pc(31," "),a.Vb(32,"span",18),a.Pc(33,"{"),a.Ub(),a.Pc(34," NzInputNumberModule "),a.Vb(35,"span",18),a.Pc(36,"}"),a.Ub(),a.Pc(37," "),a.Vb(38,"span",17),a.Pc(39,"from"),a.Ub(),a.Pc(40," "),a.Vb(41,"span",19),a.Pc(42,"'ng-zorro-antd/input-number'"),a.Ub(),a.Vb(43,"span",18),a.Pc(44,";"),a.Ub(),a.Ub(),a.Ub(),a.Wb(),a.Ub(),a.Vb(45,"h2"),a.Vb(46,"span"),a.Pc(47,"Examples"),a.Ub(),a.Vb(48,"i",20),a.dc("click",(function(){return e.expandAllCode()})),a.Ub(),a.Ub(),a.Ub(),a.Vb(49,"div",21),a.Vb(50,"div",22),a.Vb(51,"nz-code-box",23),a.Qb(52,"nz-demo-input-number-basic",24),a.Vb(53,"div",25),a.Pb(),a.Vb(54,"p"),a.Pc(55,"Numeric-only input box."),a.Ub(),a.Wb(),a.Ub(),a.Ub(),a.Vb(56,"nz-code-box",26),a.Qb(57,"nz-demo-input-number-disabled",24),a.Vb(58,"div",25),a.Pb(),a.Vb(59,"p"),a.Pc(60,"Click the button to toggle between available and disabled states."),a.Ub(),a.Wb(),a.Ub(),a.Ub(),a.Vb(61,"nz-code-box",27),a.Qb(62,"nz-demo-input-number-formatter",24),a.Vb(63,"div",25),a.Pb(),a.Vb(64,"p"),a.Pc(65,"Display value within it's situation with "),a.Vb(66,"code"),a.Pc(67,"nzFormatter"),a.Ub(),a.Pc(68,", and we usually use "),a.Vb(69,"code"),a.Pc(70,"nzParser"),a.Ub(),a.Pc(71," at the same time."),a.Ub(),a.Wb(),a.Ub(),a.Ub(),a.Ub(),a.Vb(72,"div",22),a.Vb(73,"nz-code-box",28),a.Qb(74,"nz-demo-input-number-size",24),a.Vb(75,"div",25),a.Pb(),a.Vb(76,"p"),a.Pc(77,"There are three sizes available to a numeric input box. By default, the "),a.Vb(78,"code"),a.Pc(79,"nzSize"),a.Ub(),a.Pc(80," is "),a.Vb(81,"code"),a.Pc(82,"32px"),a.Ub(),a.Pc(83,". The two additional sizes are "),a.Vb(84,"code"),a.Pc(85,"large"),a.Ub(),a.Pc(86," and "),a.Vb(87,"code"),a.Pc(88,"small"),a.Ub(),a.Pc(89," which means "),a.Vb(90,"code"),a.Pc(91,"40px"),a.Ub(),a.Pc(92," and "),a.Vb(93,"code"),a.Pc(94,"24px"),a.Ub(),a.Pc(95,", respectively."),a.Ub(),a.Wb(),a.Ub(),a.Ub(),a.Vb(96,"nz-code-box",29),a.Qb(97,"nz-demo-input-number-digit",24),a.Vb(98,"div",25),a.Pb(),a.Vb(99,"p"),a.Pc(100,"A numeric-only input box whose values can be increased or decreased using a decimal step. The number of decimals (also known as precision) is determined by the "),a.Vb(101,"code"),a.Pc(102,"nzStep"),a.Ub(),a.Pc(103," prop."),a.Ub(),a.Wb(),a.Ub(),a.Ub(),a.Vb(104,"nz-code-box",30),a.Qb(105,"nz-demo-input-number-precision",24),a.Vb(106,"div",25),a.Pb(),a.Vb(107,"p"),a.Pc(108,"Set precision of the value"),a.Ub(),a.Wb(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Vb(109,"section",31),a.Pb(),a.Vb(110,"h2",32),a.Vb(111,"span"),a.Pc(112,"API"),a.Ub(),a.Vb(113,"a",33),a.Pc(114,"#"),a.Ub(),a.Ub(),a.Vb(115,"h3",34),a.Vb(116,"span"),a.Pc(117,"nz-input-number"),a.Ub(),a.Vb(118,"label",35),a.Pc(119,"component"),a.Ub(),a.Vb(120,"a",36),a.Pc(121,"#"),a.Ub(),a.Ub(),a.Vb(122,"table"),a.Vb(123,"thead"),a.Vb(124,"tr"),a.Vb(125,"th"),a.Pc(126,"property"),a.Ub(),a.Vb(127,"th"),a.Pc(128,"description"),a.Ub(),a.Vb(129,"th"),a.Pc(130,"type"),a.Ub(),a.Vb(131,"th"),a.Pc(132,"default"),a.Ub(),a.Ub(),a.Ub(),a.Vb(133,"tbody"),a.Vb(134,"tr"),a.Vb(135,"td"),a.Vb(136,"code"),a.Pc(137,"[ngModel]"),a.Ub(),a.Ub(),a.Vb(138,"td"),a.Pc(139,"current value, double binding"),a.Ub(),a.Vb(140,"td"),a.Vb(141,"code"),a.Pc(142,"number | string"),a.Ub(),a.Pc(143," | "),a.Vb(144,"code"),a.Pc(145,"string"),a.Ub(),a.Ub(),a.Vb(146,"td"),a.Pc(147,"-"),a.Ub(),a.Ub(),a.Vb(148,"tr"),a.Vb(149,"td"),a.Vb(150,"code"),a.Pc(151,"[nzAutoFocus]"),a.Ub(),a.Ub(),a.Vb(152,"td"),a.Pc(153,"get focus when component mounted"),a.Ub(),a.Vb(154,"td"),a.Vb(155,"code"),a.Pc(156,"boolean"),a.Ub(),a.Ub(),a.Vb(157,"td"),a.Vb(158,"code"),a.Pc(159,"false"),a.Ub(),a.Ub(),a.Ub(),a.Vb(160,"tr"),a.Vb(161,"td"),a.Vb(162,"code"),a.Pc(163,"[nzDisabled]"),a.Ub(),a.Ub(),a.Vb(164,"td"),a.Pc(165,"disable the input"),a.Ub(),a.Vb(166,"td"),a.Vb(167,"code"),a.Pc(168,"boolean"),a.Ub(),a.Ub(),a.Vb(169,"td"),a.Vb(170,"code"),a.Pc(171,"false"),a.Ub(),a.Ub(),a.Ub(),a.Vb(172,"tr"),a.Vb(173,"td"),a.Vb(174,"code"),a.Pc(175,"[nzMax]"),a.Ub(),a.Ub(),a.Vb(176,"td"),a.Pc(177,"max value"),a.Ub(),a.Vb(178,"td"),a.Vb(179,"code"),a.Pc(180,"number"),a.Ub(),a.Ub(),a.Vb(181,"td"),a.Vb(182,"code"),a.Pc(183,"Infinity"),a.Ub(),a.Ub(),a.Ub(),a.Vb(184,"tr"),a.Vb(185,"td"),a.Vb(186,"code"),a.Pc(187,"[nzMin]"),a.Ub(),a.Ub(),a.Vb(188,"td"),a.Pc(189,"min value"),a.Ub(),a.Vb(190,"td"),a.Vb(191,"code"),a.Pc(192,"number"),a.Ub(),a.Ub(),a.Vb(193,"td"),a.Vb(194,"code"),a.Pc(195,"-Infinity"),a.Ub(),a.Ub(),a.Ub(),a.Vb(196,"tr"),a.Vb(197,"td"),a.Vb(198,"code"),a.Pc(199,"[nzFormatter]"),a.Ub(),a.Ub(),a.Vb(200,"td"),a.Pc(201,"Specifies the format of the value presented"),a.Ub(),a.Vb(202,"td"),a.Vb(203,"code"),a.Pc(204,"(value: number | string) => string | number"),a.Ub(),a.Ub(),a.Vb(205,"td"),a.Pc(206,"-"),a.Ub(),a.Ub(),a.Vb(207,"tr"),a.Vb(208,"td"),a.Vb(209,"code"),a.Pc(210,"[nzParser]"),a.Ub(),a.Ub(),a.Vb(211,"td"),a.Pc(212,"Specifies the value extracted from nzFormatter"),a.Ub(),a.Vb(213,"td"),a.Vb(214,"code"),a.Pc(215,"(value: string) => string | number"),a.Ub(),a.Ub(),a.Vb(216,"td"),a.Vb(217,"code"),a.Pc(218,"(value: string) => value.trim().replace(/\u3002/g, '.').replace(/[^\\w\\.-]+/g, '')"),a.Ub(),a.Ub(),a.Ub(),a.Vb(219,"tr"),a.Vb(220,"td"),a.Vb(221,"code"),a.Pc(222,"[nzPrecision]"),a.Ub(),a.Ub(),a.Vb(223,"td"),a.Pc(224,"precision of input value"),a.Ub(),a.Vb(225,"td"),a.Vb(226,"code"),a.Pc(227,"number"),a.Ub(),a.Ub(),a.Vb(228,"td"),a.Pc(229,"-"),a.Ub(),a.Ub(),a.Vb(230,"tr"),a.Vb(231,"td"),a.Vb(232,"code"),a.Pc(233,"[nzPrecisionMode]"),a.Ub(),a.Ub(),a.Vb(234,"td"),a.Pc(235,"The method for calculating the precision of input value"),a.Ub(),a.Vb(236,"td"),a.Vb(237,"code"),a.Pc(238,"'cut' | 'toFixed' | ((value: number | string, precision?: number) => number)"),a.Ub(),a.Ub(),a.Vb(239,"td"),a.Vb(240,"code"),a.Pc(241,"'toFixed'"),a.Ub(),a.Ub(),a.Ub(),a.Vb(242,"tr"),a.Vb(243,"td"),a.Vb(244,"code"),a.Pc(245,"[nzSize]"),a.Ub(),a.Ub(),a.Vb(246,"td"),a.Pc(247,"width of input box"),a.Ub(),a.Vb(248,"td"),a.Vb(249,"code"),a.Pc(250,"'large' | 'small' | 'default'"),a.Ub(),a.Ub(),a.Vb(251,"td"),a.Vb(252,"code"),a.Pc(253,"'default'"),a.Ub(),a.Ub(),a.Ub(),a.Vb(254,"tr"),a.Vb(255,"td"),a.Vb(256,"code"),a.Pc(257,"[nzStep]"),a.Ub(),a.Ub(),a.Vb(258,"td"),a.Pc(259,"The number to which the current value is increased or decreased. It can be an integer or decimal."),a.Ub(),a.Vb(260,"td"),a.Vb(261,"code"),a.Pc(262,"number | string"),a.Ub(),a.Ub(),a.Vb(263,"td"),a.Vb(264,"code"),a.Pc(265,"1"),a.Ub(),a.Ub(),a.Ub(),a.Vb(266,"tr"),a.Vb(267,"td"),a.Vb(268,"code"),a.Pc(269,"[nzInputMode]"),a.Ub(),a.Ub(),a.Vb(270,"td"),a.Pc(271,"enumerated attribute that hints at the type of data that might be entered by the user, "),a.Vb(272,"a",37),a.Pc(273,"MDN"),a.Ub(),a.Ub(),a.Vb(274,"td"),a.Vb(275,"code"),a.Pc(276,"string"),a.Ub(),a.Ub(),a.Vb(277,"td"),a.Vb(278,"code"),a.Pc(279,"decimal"),a.Ub(),a.Ub(),a.Ub(),a.Vb(280,"tr"),a.Vb(281,"td"),a.Vb(282,"code"),a.Pc(283,"[nzPlaceHolder]"),a.Ub(),a.Ub(),a.Vb(284,"td"),a.Pc(285,"Placeholder of select"),a.Ub(),a.Vb(286,"td"),a.Vb(287,"code"),a.Pc(288,"string"),a.Ub(),a.Ub(),a.Vb(289,"td"),a.Pc(290,"-"),a.Ub(),a.Ub(),a.Vb(291,"tr"),a.Vb(292,"td"),a.Vb(293,"code"),a.Pc(294,"[nzId]"),a.Ub(),a.Ub(),a.Vb(295,"td"),a.Pc(296,"input id attribute inside the component"),a.Ub(),a.Vb(297,"td"),a.Vb(298,"code"),a.Pc(299,"string"),a.Ub(),a.Ub(),a.Vb(300,"td"),a.Pc(301,"-"),a.Ub(),a.Ub(),a.Vb(302,"tr"),a.Vb(303,"td"),a.Vb(304,"code"),a.Pc(305,"(ngModelChange)"),a.Ub(),a.Ub(),a.Vb(306,"td"),a.Pc(307,"The callback triggered when the value is changed"),a.Ub(),a.Vb(308,"td"),a.Vb(309,"code"),a.Pc(310,"EventEmitter<number>"),a.Ub(),a.Ub(),a.Vb(311,"td"),a.Pc(312,"-"),a.Ub(),a.Ub(),a.Vb(313,"tr"),a.Vb(314,"td"),a.Vb(315,"code"),a.Pc(316,"(nzFocus)"),a.Ub(),a.Ub(),a.Vb(317,"td"),a.Pc(318,"focus callback"),a.Ub(),a.Vb(319,"td"),a.Vb(320,"code"),a.Pc(321,"EventEmitter<void>"),a.Ub(),a.Ub(),a.Vb(322,"td"),a.Pc(323,"-"),a.Ub(),a.Ub(),a.Vb(324,"tr"),a.Vb(325,"td"),a.Vb(326,"code"),a.Pc(327,"(nzBlur)"),a.Ub(),a.Ub(),a.Vb(328,"td"),a.Pc(329,"blur callback"),a.Ub(),a.Vb(330,"td"),a.Vb(331,"code"),a.Pc(332,"EventEmitter<void>"),a.Ub(),a.Ub(),a.Vb(333,"td"),a.Pc(334,"-"),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Vb(335,"h4",38),a.Vb(336,"span"),a.Pc(337,"Methods"),a.Ub(),a.Vb(338,"a",39),a.Pc(339,"#"),a.Ub(),a.Ub(),a.Vb(340,"p"),a.Pc(341,"You can get instance by "),a.Vb(342,"code"),a.Pc(343,"ViewChild"),a.Ub(),a.Ub(),a.Vb(344,"table"),a.Vb(345,"thead"),a.Vb(346,"tr"),a.Vb(347,"th"),a.Pc(348,"Name"),a.Ub(),a.Vb(349,"th"),a.Pc(350,"Description"),a.Ub(),a.Ub(),a.Ub(),a.Vb(351,"tbody"),a.Vb(352,"tr"),a.Vb(353,"td"),a.Pc(354,"focus()"),a.Ub(),a.Vb(355,"td"),a.Pc(356,"get focus"),a.Ub(),a.Ub(),a.Vb(357,"tr"),a.Vb(358,"td"),a.Pc(359,"blur()"),a.Ub(),a.Vb(360,"td"),a.Pc(361,"remove focus"),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Wb(),a.Ub(),a.Ub()),2&n&&(a.Ab(1),a.pc("nzOffsetTop",16),a.Ab(1),a.pc("nzAffix",!1),a.Ab(47),a.pc("nzGutter",16),a.Ab(1),a.pc("nzXl",12)("nzSpan",24),a.Ab(1),a.pc("nzId","components-input-number-demo-basic")("nzLink","components-input-number-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/basic.md"),a.Ab(5),a.pc("nzId","components-input-number-demo-disabled")("nzLink","components-input-number-demo-disabled")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/disabled.md"),a.Ab(5),a.pc("nzId","components-input-number-demo-formatter")("nzLink","components-input-number-demo-formatter")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/formatter.md"),a.Ab(11),a.pc("nzXl",12)("nzSpan",24),a.Ab(1),a.pc("nzId","components-input-number-demo-size")("nzLink","components-input-number-demo-size")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/size.md"),a.Ab(23),a.pc("nzId","components-input-number-demo-digit")("nzLink","components-input-number-demo-digit")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/digit.md"),a.Ab(8),a.pc("nzId","components-input-number-demo-precision")("nzLink","components-input-number-demo-precision")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/precision.md"))},directives:[m.a,u.a,u.b,p.a,s.a,z.d,V.c,V.a,d.a,U,g,h,f,I,M],encapsulation:2}),n})(),v=(()=>{class n{}return n.\u0275mod=a.Mb({type:n}),n.\u0275inj=a.Lb({factory:function(e){return new(e||n)},imports:[[o.a,...r,t.h.forChild([{path:"en",component:k},{path:"zh",component:x}])]]}),n})()}}]);
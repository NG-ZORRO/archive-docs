import{b as H}from"./chunk-IDKLDFK5.js";import{$b as F,Ab as k,C,H as N,Ja as s,Je as w,Ke as L,Lb as S,Na as z,Oa as A,Rc as I,Ta as M,Ua as R,W as E,Xa as b,Y as c,bb as B,ca as u,ha as y,ia as f,ib as O,ja as j,l as p,le as d,oa as m,qf as g,r as a,rf as G,sb as v,tb as D,xa as h,xb as T,zb as $}from"./chunk-GLVUJKVB.js";var J=(()=>{let t=class t{setHiddenAttribute(){this.hidden?typeof this.hidden=="string"?this.renderer.setAttribute(this.elementRef.nativeElement,"hidden",this.hidden):this.renderer.setAttribute(this.elementRef.nativeElement,"hidden",""):this.renderer.removeAttribute(this.elementRef.nativeElement,"hidden")}constructor(i,n){this.elementRef=i,this.renderer=n,this.hidden=null,this.renderer.setAttribute(this.elementRef.nativeElement,"hidden","")}ngOnChanges(){this.setHiddenAttribute()}ngAfterViewInit(){this.setHiddenAttribute()}};t.\u0275fac=function(n){return new(n||t)(s(h),s(z))},t.\u0275dir=j({type:t,selectors:[["","nz-button",""],["nz-button-group"],["","nz-icon",""],["","nz-menu-item",""],["","nz-submenu",""],["nz-select-top-control"],["nz-select-placeholder"],["nz-input-group"]],inputs:{hidden:"hidden"},standalone:!0,features:[m]});let o=t;return o})(),V=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=f({type:t}),t.\u0275inj=u({});let o=t;return o})();var U=["nz-button",""],Q=["*"];function q(o,t){o&1&&O(0,"span",0)}var P="button",_=(()=>{let t=class t{insertSpan(i,n){i.forEach(e=>{if(e.nodeName==="#text"){let r=n.createElement("span"),l=n.parentNode(e);n.insertBefore(l,r,e),n.appendChild(r,e)}})}get iconOnly(){let i=Array.from(this.elementRef?.nativeElement?.childNodes||[]),n=i.every(r=>r.nodeName!=="#text"),e=i.filter(r=>!(r.nodeName==="#comment"||r?.attributes?.getNamedItem("nz-icon"))).length==0;return!!this.nzIconDirectiveElement&&e&&n}constructor(i,n,e,r,l,Z){this.ngZone=i,this.elementRef=n,this.cdr=e,this.renderer=r,this.nzConfigService=l,this.directionality=Z,this._nzModuleName=P,this.nzBlock=!1,this.nzGhost=!1,this.nzSearch=!1,this.nzLoading=!1,this.nzDanger=!1,this.disabled=!1,this.tabIndex=null,this.nzType=null,this.nzShape=null,this.nzSize="default",this.dir="ltr",this.destroy$=new p,this.loading$=new p,this.nzConfigService.getConfigChangeEventForComponent(P).pipe(c(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){this.directionality.change?.pipe(c(this.destroy$)).subscribe(i=>{this.dir=i,this.cdr.detectChanges()}),this.dir=this.directionality.value,this.ngZone.runOutsideAngular(()=>{C(this.elementRef.nativeElement,"click",{capture:!0}).pipe(c(this.destroy$)).subscribe(i=>{(this.disabled&&i.target?.tagName==="A"||this.nzLoading)&&(i.preventDefault(),i.stopImmediatePropagation())})})}ngOnChanges(i){let{nzLoading:n}=i;n&&this.loading$.next(this.nzLoading)}ngAfterViewInit(){this.insertSpan(this.elementRef.nativeElement.childNodes,this.renderer)}ngAfterContentInit(){this.loading$.pipe(E(this.nzLoading),N(()=>!!this.nzIconDirectiveElement),c(this.destroy$)).subscribe(i=>{let n=this.nzIconDirectiveElement.nativeElement;i?this.renderer.setStyle(n,"display","none"):this.renderer.removeStyle(n,"display")})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}};t.\u0275fac=function(n){return new(n||t)(s(A),s(h),s(F),s(z),s(w),s(I,8))},t.\u0275cmp=y({type:t,selectors:[["button","nz-button",""],["a","nz-button",""]],contentQueries:function(n,e,r){if(n&1&&T(r,g,5,h),n&2){let l;$(l=k())&&(e.nzIconDirectiveElement=l.first)}},hostAttrs:[1,"ant-btn"],hostVars:34,hostBindings:function(n,e){n&2&&(R("tabindex",e.disabled?-1:e.tabIndex===null?null:e.tabIndex)("disabled",e.disabled||null),b("ant-btn-default",e.nzType==="default")("ant-btn-primary",e.nzType==="primary")("ant-btn-dashed",e.nzType==="dashed")("ant-btn-link",e.nzType==="link")("ant-btn-text",e.nzType==="text")("ant-btn-circle",e.nzShape==="circle")("ant-btn-round",e.nzShape==="round")("ant-btn-lg",e.nzSize==="large")("ant-btn-sm",e.nzSize==="small")("ant-btn-dangerous",e.nzDanger)("ant-btn-loading",e.nzLoading)("ant-btn-background-ghost",e.nzGhost)("ant-btn-block",e.nzBlock)("ant-input-search-button",e.nzSearch)("ant-btn-rtl",e.dir==="rtl")("ant-btn-icon-only",e.iconOnly))},inputs:{nzBlock:"nzBlock",nzGhost:"nzGhost",nzSearch:"nzSearch",nzLoading:"nzLoading",nzDanger:"nzDanger",disabled:"disabled",tabIndex:"tabIndex",nzType:"nzType",nzShape:"nzShape",nzSize:"nzSize"},exportAs:["nzButton"],standalone:!0,features:[m,S],attrs:U,ngContentSelectors:Q,decls:2,vars:1,consts:[["nz-icon","","nzType","loading"]],template:function(n,e){n&1&&(v(),M(0,q,1,0,"span",0),D(1)),n&2&&B(0,e.nzLoading?0:-1)},dependencies:[G,g],encapsulation:2,changeDetection:0});let o=t;return a([d()],o.prototype,"nzBlock",void 0),a([d()],o.prototype,"nzGhost",void 0),a([d()],o.prototype,"nzSearch",void 0),a([d()],o.prototype,"nzLoading",void 0),a([d()],o.prototype,"nzDanger",void 0),a([d()],o.prototype,"disabled",void 0),a([L()],o.prototype,"nzSize",void 0),o})(),ze=(()=>{let t=class t{constructor(i){this.directionality=i,this.nzSize="default",this.dir="ltr",this.destroy$=new p}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe(c(this.destroy$)).subscribe(i=>{this.dir=i})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}};t.\u0275fac=function(n){return new(n||t)(s(I,8))},t.\u0275cmp=y({type:t,selectors:[["nz-button-group"]],hostAttrs:[1,"ant-btn-group"],hostVars:6,hostBindings:function(n,e){n&2&&b("ant-btn-group-lg",e.nzSize==="large")("ant-btn-group-sm",e.nzSize==="small")("ant-btn-group-rtl",e.dir==="rtl")},inputs:{nzSize:"nzSize"},exportAs:["nzButtonGroup"],standalone:!0,features:[S],ngContentSelectors:Q,decls:1,vars:0,template:function(n,e){n&1&&(v(),D(0))},encapsulation:2,changeDetection:0});let o=t;return o})(),ge=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=f({type:t}),t.\u0275inj=u({imports:[_,V,H]});let o=t;return o})();export{J as a,_ as b,ze as c,ge as d};
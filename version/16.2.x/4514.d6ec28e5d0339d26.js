"use strict";(self.webpackChunkng_zorro_antd_doc=self.webpackChunkng_zorro_antd_doc||[]).push([[4514],{6023:(W,x,c)=>{c.d(x,{Gb:()=>it,I7:()=>$,Ie:()=>et,x8:()=>U});var A=c(7582),f=c(4755),t=c(2223),M=c(7579),I=c(4968),_=c(9300),P=c(5698),v=c(2722),C=c(7083),O=c(1724),y=c(5441),k=c(8023),w=c(2840),r=c(8792),z=c(6878),s=c(6550),l=c(2164),D=c(3424),a=c(8930),E=c(9576);const g=["imgRef"],p=["imagePreviewWrapper"];function d(i,m){if(1&i){const e=t.EpF();t.TgZ(0,"li",10),t.NdJ("click",function(){const h=t.CHM(e).$implicit;return t.KtG(h.onClick())}),t._UZ(1,"span",11),t.qZA()}if(2&i){const e=m.$implicit,n=t.oxw();t.ekj("ant-image-preview-operations-operation-disabled",n.zoomOutDisabled&&"zoomOut"===e.type),t.xp6(1),t.Q6J("nzType",e.icon)}}function S(i,m){if(1&i&&t._UZ(0,"img",13,14),2&i){const e=t.oxw().$implicit,n=t.oxw();t.Udp("width",e.width)("height",e.height)("transform",n.previewImageTransform),t.uIk("src",n.sanitizerResourceUrl(e.src),t.LSH)("srcset",e.srcset)("alt",e.alt)}}function b(i,m){if(1&i&&(t.ynx(0),t.YNc(1,S,2,9,"img",12),t.BQk()),2&i){const e=m.index,n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.index===e)}}function G(i,m){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",15),t.NdJ("click",function(o){t.CHM(e);const h=t.oxw();return t.KtG(h.onSwitchLeft(o))}),t._UZ(2,"span",16),t.qZA(),t.TgZ(3,"div",17),t.NdJ("click",function(o){t.CHM(e);const h=t.oxw();return t.KtG(h.onSwitchRight(o))}),t._UZ(4,"span",18),t.qZA(),t.BQk()}if(2&i){const e=t.oxw();t.xp6(1),t.ekj("ant-image-preview-switch-left-disabled",e.index<=0),t.xp6(2),t.ekj("ant-image-preview-switch-right-disabled",e.index>=e.images.length-1)}}const H=["*"],Y="image";class F{constructor(){this.nzKeyboard=!0,this.nzNoAnimation=!1,this.nzMaskClosable=!0,this.nzCloseOnNavigation=!0}}class J{constructor(m,e,n){this.previewInstance=m,this.config=e,this.overlayRef=n,this.destroy$=new M.x,n.keydownEvents().pipe((0,_.h)(o=>this.config.nzKeyboard&&(o.keyCode===w.hY||o.keyCode===w.oh||o.keyCode===w.SV)&&!(0,w.Vb)(o))).subscribe(o=>{o.preventDefault(),o.keyCode===w.hY&&this.close(),o.keyCode===w.oh&&this.prev(),o.keyCode===w.SV&&this.next()}),n.detachments().subscribe(()=>{this.overlayRef.dispose()}),m.containerClick.pipe((0,P.q)(1),(0,v.R)(this.destroy$)).subscribe(()=>{this.close()}),m.closeClick.pipe((0,P.q)(1),(0,v.R)(this.destroy$)).subscribe(()=>{this.close()}),m.animationStateChanged.pipe((0,_.h)(o=>"done"===o.phaseName&&"leave"===o.toState),(0,P.q)(1)).subscribe(()=>{this.dispose()})}switchTo(m){this.previewInstance.switchTo(m)}next(){this.previewInstance.next()}prev(){this.previewInstance.prev()}close(){this.previewInstance.startLeaveAnimation()}dispose(){this.destroy$.next(),this.overlayRef.dispose()}}function Z(i,m,e){const n=i+m,o=(m-e)/2;let h=null;return m>e?(i>0&&(h=o),i<0&&n<e&&(h=-o)):(i<0||n>e)&&(h=i<0?o:-o),h}const N={x:0,y:0};let q=(()=>{class i{get animationDisabled(){return this.config.nzNoAnimation??!1}get maskClosable(){const e=this.nzConfigService.getConfigForComponent(Y)||{};return this.config.nzMaskClosable??e.nzMaskClosable??!0}constructor(e,n,o,h,u,T,R,K){this.ngZone=e,this.host=n,this.cdr=o,this.nzConfigService=h,this.config=u,this.overlayRef=T,this.destroy$=R,this.sanitizer=K,this.images=[],this.index=0,this.isDragging=!1,this.visible=!0,this.animationState="enter",this.animationStateChanged=new t.vpe,this.previewImageTransform="",this.previewImageWrapperTransform="",this.operations=[{icon:"close",onClick:()=>{this.onClose()},type:"close"},{icon:"zoom-in",onClick:()=>{this.onZoomIn()},type:"zoomIn"},{icon:"zoom-out",onClick:()=>{this.onZoomOut()},type:"zoomOut"},{icon:"rotate-right",onClick:()=>{this.onRotateRight()},type:"rotateRight"},{icon:"rotate-left",onClick:()=>{this.onRotateLeft()},type:"rotateLeft"}],this.zoomOutDisabled=!1,this.position={...N},this.containerClick=new t.vpe,this.closeClick=new t.vpe,this.zoom=this.config.nzZoom??1,this.rotate=this.config.nzRotate??0,this.updateZoomOutDisabled(),this.updatePreviewImageTransform(),this.updatePreviewImageWrapperTransform()}ngOnInit(){this.ngZone.runOutsideAngular(()=>{(0,I.R)(this.host.nativeElement,"click").pipe((0,v.R)(this.destroy$)).subscribe(e=>{e.target===e.currentTarget&&this.maskClosable&&this.containerClick.observers.length&&this.ngZone.run(()=>this.containerClick.emit())}),(0,I.R)(this.imagePreviewWrapper.nativeElement,"mousedown").pipe((0,v.R)(this.destroy$)).subscribe(()=>{this.isDragging=!0})})}setImages(e){this.images=e,this.cdr.markForCheck()}switchTo(e){this.index=e,this.cdr.markForCheck()}next(){this.index<this.images.length-1&&(this.reset(),this.index++,this.updatePreviewImageTransform(),this.updatePreviewImageWrapperTransform(),this.updateZoomOutDisabled(),this.cdr.markForCheck())}prev(){this.index>0&&(this.reset(),this.index--,this.updatePreviewImageTransform(),this.updatePreviewImageWrapperTransform(),this.updateZoomOutDisabled(),this.cdr.markForCheck())}markForCheck(){this.cdr.markForCheck()}onClose(){this.closeClick.emit()}onZoomIn(){this.zoom+=1,this.updatePreviewImageTransform(),this.updateZoomOutDisabled(),this.position={...N}}onZoomOut(){this.zoom>1&&(this.zoom-=1,this.updatePreviewImageTransform(),this.updateZoomOutDisabled(),this.position={...N})}onRotateRight(){this.rotate+=90,this.updatePreviewImageTransform()}onRotateLeft(){this.rotate-=90,this.updatePreviewImageTransform()}onSwitchLeft(e){e.preventDefault(),e.stopPropagation(),this.prev()}onSwitchRight(e){e.preventDefault(),e.stopPropagation(),this.next()}onAnimationStart(e){"enter"===e.toState?this.setEnterAnimationClass():"leave"===e.toState&&this.setLeaveAnimationClass(),this.animationStateChanged.emit(e)}onAnimationDone(e){"enter"===e.toState?this.setEnterAnimationClass():"leave"===e.toState&&this.setLeaveAnimationClass(),this.animationStateChanged.emit(e)}startLeaveAnimation(){this.animationState="leave",this.cdr.markForCheck()}onDragReleased(){this.isDragging=!1;const e=this.imageRef.nativeElement.offsetWidth*this.zoom,n=this.imageRef.nativeElement.offsetHeight*this.zoom,{left:o,top:h}=function V(i){const m=i.getBoundingClientRect(),e=document.documentElement;return{left:m.left+(window.pageXOffset||e.scrollLeft)-(e.clientLeft||document.body.clientLeft||0),top:m.top+(window.pageYOffset||e.scrollTop)-(e.clientTop||document.body.clientTop||0)}}(this.imageRef.nativeElement),{width:u,height:T}=function X(){return{width:document.documentElement.clientWidth,height:window.innerHeight||document.documentElement.clientHeight}}(),R=this.rotate%180!=0,B=function Q(i){let m={};return i.width<=i.clientWidth&&i.height<=i.clientHeight&&(m={x:0,y:0}),(i.width>i.clientWidth||i.height>i.clientHeight)&&(m={x:Z(i.left,i.width,i.clientWidth),y:Z(i.top,i.height,i.clientHeight)}),m}({width:R?n:e,height:R?e:n,left:o,top:h,clientWidth:u,clientHeight:T});((0,O.DX)(B.x)||(0,O.DX)(B.y))&&(this.position={...this.position,...B})}sanitizerResourceUrl(e){return this.sanitizer.bypassSecurityTrustResourceUrl(e)}updatePreviewImageTransform(){this.previewImageTransform=`scale3d(${this.zoom}, ${this.zoom}, 1) rotate(${this.rotate}deg)`}updatePreviewImageWrapperTransform(){this.previewImageWrapperTransform=`translate3d(${this.position.x}px, ${this.position.y}px, 0)`}updateZoomOutDisabled(){this.zoomOutDisabled=this.zoom<=1}setEnterAnimationClass(){if(this.animationDisabled)return;const e=this.overlayRef.backdropElement;e&&(e.classList.add("ant-fade-enter"),e.classList.add("ant-fade-enter-active"))}setLeaveAnimationClass(){if(this.animationDisabled)return;const e=this.overlayRef.backdropElement;e&&(e.classList.add("ant-fade-leave"),e.classList.add("ant-fade-leave-active"))}reset(){this.zoom=1,this.rotate=0,this.position={...N}}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(t.R0b),t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(C.jY),t.Y36(F),t.Y36(y.Iu),t.Y36(z.kn),t.Y36(s.H7))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["nz-image-preview"]],viewQuery:function(n,o){if(1&n&&(t.Gf(g,5),t.Gf(p,7)),2&n){let h;t.iGM(h=t.CRH())&&(o.imageRef=h.first),t.iGM(h=t.CRH())&&(o.imagePreviewWrapper=h.first)}},hostAttrs:["tabindex","-1","role","document",1,"ant-image-preview-wrap"],hostVars:6,hostBindings:function(n,o){1&n&&t.WFA("@fadeMotion.start",function(u){return o.onAnimationStart(u)})("@fadeMotion.done",function(u){return o.onAnimationDone(u)}),2&n&&(t.d8E("@.disabled",o.config.nzNoAnimation)("@fadeMotion",o.animationState),t.Udp("z-index",o.config.nzZIndex),t.ekj("ant-image-preview-moving",o.isDragging))},exportAs:["nzImagePreview"],features:[t._Bn([z.kn])],decls:11,vars:6,consts:[[1,"ant-image-preview"],["tabindex","0","aria-hidden","true",2,"width","0","height","0","overflow","hidden","outline","none"],[1,"ant-image-preview-content"],[1,"ant-image-preview-body"],[1,"ant-image-preview-operations"],["class","ant-image-preview-operations-operation",3,"ant-image-preview-operations-operation-disabled","click",4,"ngFor","ngForOf"],["cdkDrag","",1,"ant-image-preview-img-wrapper",3,"cdkDragFreeDragPosition","cdkDragReleased"],["imagePreviewWrapper",""],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"ant-image-preview-operations-operation",3,"click"],["nz-icon","","nzTheme","outline",1,"ant-image-preview-operations-icon",3,"nzType"],["cdkDragHandle","","class","ant-image-preview-img",3,"width","height","transform",4,"ngIf"],["cdkDragHandle","",1,"ant-image-preview-img"],["imgRef",""],[1,"ant-image-preview-switch-left",3,"click"],["nz-icon","","nzType","left","nzTheme","outline"],[1,"ant-image-preview-switch-right",3,"click"],["nz-icon","","nzType","right","nzTheme","outline"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"div",1),t.TgZ(2,"div",2)(3,"div",3)(4,"ul",4),t.YNc(5,d,2,3,"li",5),t.qZA(),t.TgZ(6,"div",6,7),t.NdJ("cdkDragReleased",function(){return o.onDragReleased()}),t.YNc(8,b,2,1,"ng-container",8),t.qZA(),t.YNc(9,G,5,4,"ng-container",9),t.qZA()(),t._UZ(10,"div",1),t.qZA()),2&n&&(t.xp6(5),t.Q6J("ngForOf",o.operations),t.xp6(1),t.Udp("transform",o.previewImageWrapperTransform),t.Q6J("cdkDragFreeDragPosition",o.position),t.xp6(2),t.Q6J("ngForOf",o.images),t.xp6(1),t.Q6J("ngIf",o.images.length>1))},dependencies:[l.Zt,l.Bh,f.sg,f.O5,D.Ls],encapsulation:2,data:{animation:[r.MC]},changeDetection:0})}return i})(),U=(()=>{class i{constructor(e,n,o,h){this.overlay=e,this.injector=n,this.nzConfigService=o,this.directionality=h}preview(e,n){return this.display(e,n)}display(e,n){const o={...new F,...n??{}},h=this.createOverlay(o),u=this.attachPreviewComponent(h,o);u.setImages(e);const T=new J(u,o,h);return u.previewRef=T,T}attachPreviewComponent(e,n){const o=t.zs3.create({parent:this.injector,providers:[{provide:y.Iu,useValue:e},{provide:F,useValue:n}]}),h=new k.C5(q,null,o);return e.attach(h).instance}createOverlay(e){const n=this.nzConfigService.getConfigForComponent(Y)||{},o=new y.X_({hasBackdrop:!0,scrollStrategy:this.overlay.scrollStrategies.block(),positionStrategy:this.overlay.position().global(),disposeOnNavigation:e.nzCloseOnNavigation??n.nzCloseOnNavigation??!0,backdropClass:"ant-image-preview-mask",direction:e.nzDirection||n.nzDirection||this.directionality.value});return this.overlay.create(o)}static#t=this.\u0275fac=function(n){return new(n||i)(t.LFG(y.aV),t.LFG(t.zs3),t.LFG(C.jY),t.LFG(a.Is,8))};static#e=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac})}return i})(),$=(()=>{class i{constructor(){this.images=[]}addImage(e){this.images.push(e)}static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["nz-image-group"]],exportAs:["nzImageGroup"],ngContentSelectors:H,decls:1,vars:0,template:function(n,o){1&n&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0})}return i})(),et=(()=>{class i{get previewable(){return!this.nzDisablePreview&&"error"!==this.status}constructor(e,n,o,h,u,T,R){this.document=e,this.nzConfigService=n,this.elementRef=o,this.nzImageService=h,this.cdr=u,this.parentGroup=T,this.directionality=R,this._nzModuleName="image",this.nzSrc="",this.nzSrcset="",this.nzDisablePreview=!1,this.nzFallback=null,this.nzPlaceholder=null,this.status="normal",this.backLoadDestroy$=new M.x,this.destroy$=new M.x}ngOnInit(){this.backLoad(),this.parentGroup&&this.parentGroup.addImage(this),this.directionality&&(this.directionality.change?.pipe((0,v.R)(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),this.dir=this.directionality.value)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}onPreview(){if(this.previewable)if(this.parentGroup){const e=this.parentGroup.images.filter(u=>u.previewable),n=e.map(u=>({src:u.nzSrc,srcset:u.nzSrcset})),o=e.findIndex(u=>this===u);this.nzImageService.preview(n,{nzDirection:this.dir}).switchTo(o)}else this.nzImageService.preview([{src:this.nzSrc,srcset:this.nzSrcset}],{nzDirection:this.dir})}getElement(){return this.elementRef}ngOnChanges(e){const{nzSrc:n}=e;n&&(this.getElement().nativeElement.src=n.currentValue,this.backLoad())}backLoad(){this.backLoadImage=this.document.createElement("img"),this.backLoadImage.src=this.nzSrc,this.backLoadImage.srcset=this.nzSrcset,this.status="loading",this.backLoadDestroy$.next(),this.backLoadDestroy$.complete(),this.backLoadDestroy$=new M.x,this.backLoadImage.complete?(this.status="normal",this.getElement().nativeElement.src=this.nzSrc,this.getElement().nativeElement.srcset=this.nzSrcset):(this.nzPlaceholder?(this.getElement().nativeElement.src=this.nzPlaceholder,this.getElement().nativeElement.srcset=""):(this.getElement().nativeElement.src=this.nzSrc,this.getElement().nativeElement.srcset=this.nzSrcset),(0,I.R)(this.backLoadImage,"load").pipe((0,v.R)(this.backLoadDestroy$),(0,v.R)(this.destroy$)).subscribe(()=>{this.status="normal",this.getElement().nativeElement.src=this.nzSrc,this.getElement().nativeElement.srcset=this.nzSrcset}),(0,I.R)(this.backLoadImage,"error").pipe((0,v.R)(this.backLoadDestroy$),(0,v.R)(this.destroy$)).subscribe(()=>{this.status="error",this.nzFallback&&(this.getElement().nativeElement.src=this.nzFallback,this.getElement().nativeElement.srcset="")}))}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(f.K0),t.Y36(C.jY),t.Y36(t.SBq),t.Y36(U),t.Y36(t.sBO),t.Y36($,8),t.Y36(a.Is,8))};static#e=this.\u0275dir=t.lG2({type:i,selectors:[["img","nz-image",""]],hostBindings:function(n,o){1&n&&t.NdJ("click",function(){return o.onPreview()})},inputs:{nzSrc:"nzSrc",nzSrcset:"nzSrcset",nzDisablePreview:"nzDisablePreview",nzFallback:"nzFallback",nzPlaceholder:"nzPlaceholder"},exportAs:["nzImage"],features:[t.TTD]})}return(0,A.gn)([(0,O.yF)(),(0,C.oS)()],i.prototype,"nzDisablePreview",void 0),(0,A.gn)([(0,C.oS)()],i.prototype,"nzFallback",void 0),(0,A.gn)([(0,C.oS)()],i.prototype,"nzPlaceholder",void 0),i})(),it=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275mod=t.oAB({type:i});static#i=this.\u0275inj=t.cJS({providers:[U],imports:[a.vT,y.U8,k.eL,l._t,f.ez,D.PV,E.YS]})}return i})()},9576:(W,x,c)=>{c.d(x,{$i:()=>C,N7:()=>v,Pr:()=>O,VN:()=>I,YS:()=>w,ku:()=>P,oi:()=>_,q3:()=>y});var A=c(4755),f=c(2223),t=c(1724),M=c(6550);let I=(()=>{class r{transform(s,l){if(!Array.isArray(s))return s;if(0!==s.length)switch(l){case"sum":return(0,t.Sm)(s);case"avg":return(0,t.Sm)(s)/s.length;case"max":return Math.max(...s);case"min":return Math.min(...s);default:throw Error("Invalid Pipe Arguments: Aggregate pipe doesn't support this type")}}static#t=this.\u0275fac=function(l){return new(l||r)};static#e=this.\u0275pipe=f.Yjl({name:"nzAggregate",type:r,pure:!0})}return r})();class _{static#t=this.formats={B:{max:1024},kB:{max:Math.pow(1024,2),prev:"B"},KB:{max:Math.pow(1024,2),prev:"B"},MB:{max:Math.pow(1024,3),prev:"kB"},GB:{max:Math.pow(1024,4),prev:"MB"},TB:{max:Number.MAX_SAFE_INTEGER,prev:"GB"}};transform(z,s=0,l="B",D){if(!((0,t.ui)(z)&&(0,t.ui)(s)&&s%1==0&&s>=0))return z;let a=z,E=l;for(;"B"!==E;)a*=1024,E=_.formats[E].prev;if(D){const p=(0,t.YM)(_.calculateResult(_.formats[D],a),s);return _.formatResult(p,D)}for(const g in _.formats)if(_.formats.hasOwnProperty(g)){const p=_.formats[g];if(a<p.max){const d=(0,t.YM)(_.calculateResult(p,a),s);return _.formatResult(d,g)}}}static formatResult(z,s){return`${z} ${s}`}static calculateResult(z,s){const l=z.prev?_.formats[z.prev]:void 0;return l?s/l.max:s}static#e=this.\u0275fac=function(s){return new(s||_)};static#i=this.\u0275pipe=f.Yjl({name:"nzBytes",type:_,pure:!0})}let P=(()=>{class r{transform(s,l="px"){let p="px";return["cm","mm","Q","in","pc","pt","px","em","ex","ch","rem","1h","vw","vh","vmin","vmax","%"].some(d=>d===l)&&(p=l),"number"==typeof s?`${s}${p}`:`${s}`}static#t=this.\u0275fac=function(l){return new(l||r)};static#e=this.\u0275pipe=f.Yjl({name:"nzToCssUnit",type:r,pure:!0})}return r})(),v=(()=>{class r{transform(s,l,D=""){if("string"!=typeof s)return s;const a=typeof l>"u"?s.length:l;return s.length<=a?s:s.substring(0,a)+D}static#t=this.\u0275fac=function(l){return new(l||r)};static#e=this.\u0275pipe=f.Yjl({name:"nzEllipsis",type:r,pure:!0})}return r})(),C=(()=>{class r{transform(s,l=""){return(0,t.kK)(s)?l:s}static#t=this.\u0275fac=function(l){return new(l||r)};static#e=this.\u0275pipe=f.Yjl({name:"nzSafeNull",type:r,pure:!0})}return r})(),O=(()=>{class r{constructor(s){this.sanitizer=s}transform(s,l="html"){switch(l){case"html":return this.sanitizer.bypassSecurityTrustHtml(s);case"style":return this.sanitizer.bypassSecurityTrustStyle(s);case"url":return this.sanitizer.bypassSecurityTrustUrl(s);case"resourceUrl":return this.sanitizer.bypassSecurityTrustResourceUrl(s);default:throw new Error("Invalid safe type specified")}}static#t=this.\u0275fac=function(l){return new(l||r)(f.Y36(M.H7,16))};static#e=this.\u0275pipe=f.Yjl({name:"nzSanitizer",type:r,pure:!0})}return r})(),y=(()=>{class r{transform(s){return s.trim()}static#t=this.\u0275fac=function(l){return new(l||r)};static#e=this.\u0275pipe=f.Yjl({name:"nzTrim",type:r,pure:!0})}return r})(),w=(()=>{class r{static#t=this.\u0275fac=function(l){return new(l||r)};static#e=this.\u0275mod=f.oAB({type:r});static#i=this.\u0275inj=f.cJS({imports:[A.ez]})}return r})()},4683:(W,x,c)=>{c.d(x,{$1:()=>r,NU:()=>l,zf:()=>D});var A=c(8930),f=c(4755),t=c(2223),M=c(7582),I=c(7579),_=c(2722),P=c(7083),v=c(1724);function C(a,E){}const O=function(a){return{$implicit:a}};function y(a,E){if(1&a&&(t.TgZ(0,"span",4),t.YNc(1,C,0,0,"ng-template",5),t.qZA()),2&a){const g=t.oxw(),p=g.last,d=g.index,S=t.oxw();t.Udp("margin-bottom","vertical"===S.nzDirection?p?null:S.spaceSize:null,"px")("margin-right","horizontal"===S.nzDirection?p?null:S.spaceSize:null,"px"),t.xp6(1),t.Q6J("ngTemplateOutlet",S.nzSplit)("ngTemplateOutletContext",t.VKq(6,O,d))}}function k(a,E){if(1&a&&(t.TgZ(0,"div",1),t.GkF(1,2),t.qZA(),t.YNc(2,y,2,8,"span",3)),2&a){const g=E.$implicit,p=E.last,d=t.oxw();t.Udp("margin-bottom","vertical"===d.nzDirection?p?null:d.spaceSize:null,"px")("margin-right","horizontal"===d.nzDirection?p?null:d.spaceSize:null,"px"),t.xp6(1),t.Q6J("ngTemplateOutlet",g),t.xp6(1),t.Q6J("ngIf",d.nzSplit&&!p)}}const w=["*"];let r=(()=>{class a{constructor(){}static#t=this.\u0275fac=function(p){return new(p||a)};static#e=this.\u0275dir=t.lG2({type:a,selectors:[["","nzSpaceItem",""]]})}return a})();const s={small:8,middle:16,large:24};let l=(()=>{class a{constructor(g,p){this.nzConfigService=g,this.cdr=p,this._nzModuleName="space",this.nzDirection="horizontal",this.nzSplit=null,this.nzWrap=!1,this.nzSize="small",this.spaceSize=s.small,this.destroy$=new I.x}updateSpaceItems(){this.spaceSize=("string"==typeof this.nzSize?s[this.nzSize]:this.nzSize)/(this.nzSplit?2:1),this.cdr.markForCheck()}ngOnChanges(){this.updateSpaceItems(),this.mergedAlign=void 0===this.nzAlign&&"horizontal"===this.nzDirection?"center":this.nzAlign}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}ngAfterContentInit(){this.updateSpaceItems(),this.items.changes.pipe((0,_.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}static#t=this.\u0275fac=function(p){return new(p||a)(t.Y36(P.jY),t.Y36(t.sBO))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["nz-space"],["","nz-space",""]],contentQueries:function(p,d,S){if(1&p&&t.Suo(S,r,4,t.Rgc),2&p){let b;t.iGM(b=t.CRH())&&(d.items=b)}},hostAttrs:[1,"ant-space"],hostVars:14,hostBindings:function(p,d){2&p&&(t.Udp("flex-wrap",d.nzWrap?"wrap":null),t.ekj("ant-space-horizontal","horizontal"===d.nzDirection)("ant-space-vertical","vertical"===d.nzDirection)("ant-space-align-start","start"===d.mergedAlign)("ant-space-align-end","end"===d.mergedAlign)("ant-space-align-center","center"===d.mergedAlign)("ant-space-align-baseline","baseline"===d.mergedAlign))},inputs:{nzDirection:"nzDirection",nzAlign:"nzAlign",nzSplit:"nzSplit",nzWrap:"nzWrap",nzSize:"nzSize"},exportAs:["NzSpace"],features:[t.TTD],ngContentSelectors:w,decls:2,vars:1,consts:[["ngFor","",3,"ngForOf"],[1,"ant-space-item"],[3,"ngTemplateOutlet"],["class","ant-space-split",3,"margin-bottom","margin-right",4,"ngIf"],[1,"ant-space-split"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(p,d){1&p&&(t.F$t(),t.Hsn(0),t.YNc(1,k,3,6,"ng-template",0)),2&p&&(t.xp6(1),t.Q6J("ngForOf",d.items))},dependencies:[f.sg,f.O5,f.tP],encapsulation:2,changeDetection:0})}return(0,M.gn)([(0,v.yF)()],a.prototype,"nzWrap",void 0),(0,M.gn)([(0,P.oS)()],a.prototype,"nzSize",void 0),a})(),D=(()=>{class a{static#t=this.\u0275fac=function(p){return new(p||a)};static#e=this.\u0275mod=t.oAB({type:a});static#i=this.\u0275inj=t.cJS({imports:[A.vT,f.ez]})}return a})()}}]);
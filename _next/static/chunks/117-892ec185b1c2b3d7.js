(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[117],{7814:function(e,t,n){"use strict";n.d(t,{G:function(){return v}});var r=n(3636),i=n(5697),o=n.n(i),a=n(7294);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){u(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function p(e){var t;return(t=e,(t-=0)==t)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""})).substr(0,1).toLowerCase()+e.substr(1)}var b=["style"],m=!1;try{m=!0}catch(g){}function y(e){return e&&"object"===c(e)&&e.prefix&&e.iconName&&e.icon?e:r.Qc.icon?r.Qc.icon(e):null===e?null:e&&"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function h(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?u({},e,t):{}}var v=a.forwardRef(function(e,t){var n,i,o,a,l,c,d,p,b,g,O,S,x,j,k,z,A,I,E,P,_,R=e.icon,C=e.mask,N=e.symbol,L=e.className,q=e.title,T=e.titleId,M=e.maskId,W=y(R),D=h("classes",[].concat(f((o=e.beat,a=e.fade,l=e.beatFade,c=e.bounce,d=e.shake,p=e.flash,b=e.spin,g=e.spinPulse,O=e.spinReverse,S=e.pulse,x=e.fixedWidth,j=e.inverse,k=e.border,z=e.listItem,A=e.flip,I=e.size,E=e.rotation,P=e.pull,i={"fa-beat":o,"fa-fade":a,"fa-beat-fade":l,"fa-bounce":c,"fa-shake":d,"fa-flash":p,"fa-spin":b,"fa-spin-reverse":O,"fa-spin-pulse":g,"fa-pulse":S,"fa-fw":x,"fa-inverse":j,"fa-border":k,"fa-li":z,"fa-flip":!0===A,"fa-flip-horizontal":"horizontal"===A||"both"===A,"fa-flip-vertical":"vertical"===A||"both"===A},u(i,"fa-".concat(I),null!=I),u(i,"fa-rotate-".concat(E),null!=E&&0!==E),u(i,"fa-pull-".concat(P),null!=P),u(i,"fa-swap-opacity",e.swapOpacity),Object.keys(i).map(function(e){return i[e]?e:null}).filter(function(e){return e}))),f(L.split(" ")))),U=h("transform","string"==typeof e.transform?r.Qc.transform(e.transform):e.transform),B=h("mask",y(C)),F=(0,r.qv)(W,s(s(s(s({},D),U),B),{},{symbol:N,title:q,titleId:T,maskId:M}));if(!F)return!function(){if(!m&&console&&"function"==typeof console.error){var e;(e=console).error.apply(e,arguments)}}("Could not find icon",W),null;var Z=F.abstract,V={ref:t};return Object.keys(e).forEach(function(t){v.defaultProps.hasOwnProperty(t)||(V[t]=e[t])}),w(Z[0],V)});v.displayName="FontAwesomeIcon",v.propTypes={beat:o().bool,border:o().bool,beatFade:o().bool,bounce:o().bool,className:o().string,fade:o().bool,flash:o().bool,mask:o().oneOfType([o().object,o().array,o().string]),maskId:o().string,fixedWidth:o().bool,inverse:o().bool,flip:o().oneOf([!0,!1,"horizontal","vertical","both"]),icon:o().oneOfType([o().object,o().array,o().string]),listItem:o().bool,pull:o().oneOf(["right","left"]),pulse:o().bool,rotation:o().oneOf([0,90,180,270]),shake:o().bool,size:o().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o().bool,spinPulse:o().bool,spinReverse:o().bool,symbol:o().oneOfType([o().bool,o().string]),title:o().string,titleId:o().string,transform:o().oneOfType([o().string,o().object]),swapOpacity:o().bool},v.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var w=(function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var i=(n.children||[]).map(function(n){return e(t,n)}),o=Object.keys(n.attributes||{}).reduce(function(e,t){var r,i=n.attributes[t];switch(t){case"class":e.attrs.className=i,delete n.attributes.class;break;case"style":e.attrs.style=i.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var n,r=t.indexOf(":"),i=p(t.slice(0,r)),o=t.slice(r+1).trim();return i.startsWith("webkit")?e[(n=i).charAt(0).toUpperCase()+n.slice(1)]=o:e[i]=o,e},{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=i:e.attrs[p(t)]=i}return e},{attrs:{}}),a=r.style,l=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(r,b);return o.attrs.style=s(s({},o.attrs.style),void 0===a?{}:a),t.apply(void 0,[n.tag,s(s({},o.attrs),l)].concat(f(i)))}).bind(null,a.createElement)},9361:function(e,t){"use strict";t.Z=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9361).Z,i=n(4941).Z,o=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n,l=e.src,s=e.sizes,m=e.unoptimized,g=void 0!==m&&m,w=e.priority,k=void 0!==w&&w,A=e.loading,I=e.lazyRoot,E=e.lazyBoundary,P=e.className,_=e.quality,R=e.width,C=e.height,N=e.style,L=e.objectFit,q=e.objectPosition,T=e.onLoadingComplete,M=e.placeholder,W=void 0===M?"empty":M,D=e.blurDataURL,U=c(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),B=u.useContext(b.ImageConfigContext),F=u.useMemo(function(){var e=y||B||d.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort(function(e,t){return e-t}),n=e.deviceSizes.sort(function(e,t){return e-t});return a({},e,{allSizes:t,deviceSizes:n})},[B]),Z=s?"responsive":"intrinsic";"layout"in U&&(U.layout&&(Z=U.layout),delete U.layout);var V=j;if("loader"in U){if(U.loader){var H=U.loader;V=function(e){e.config;var t=c(e,["config"]);return H(t)}}delete U.loader}var G="";if(function(e){var t;return"object"==typeof e&&(O(e)||void 0!==e.src)}(l)){var Q=O(l)?l.default:l;if(!Q.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Q)));if(D=D||Q.blurDataURL,G=Q.src,(!Z||"fill"!==Z)&&(C=C||Q.height,R=R||Q.width,!Q.height||!Q.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Q)))}l="string"==typeof l?l:G;var J=!k&&("lazy"===A||void 0===A);(l.startsWith("data:")||l.startsWith("blob:"))&&(g=!0,J=!1),h.has(l)&&(J=!1),F.unoptimized&&(g=!0);var Y=i(u.useState(!1),2),$=Y[0],K=Y[1],X=i(p.useIntersection({rootRef:void 0===I?null:I,rootMargin:E||"200px",disabled:!J}),3),ee=X[0],et=X[1],en=X[2],er=!J||et,ei={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},eo={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ea=!1,el=x(R),es=x(C),ec=x(_),eu=Object.assign({},N,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:L,objectPosition:q}),ef="blur"!==W||$?{}:{backgroundSize:L||"cover",backgroundPosition:q||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(D,'")')};if("fill"===Z)ei.display="block",ei.position="absolute",ei.top=0,ei.left=0,ei.bottom=0,ei.right=0;else if(void 0!==el&&void 0!==es){var ed=es/el,ep=isNaN(ed)?"100%":"".concat(100*ed,"%");"responsive"===Z?(ei.display="block",ei.position="relative",ea=!0,eo.paddingTop=ep):"intrinsic"===Z?(ei.display="inline-block",ei.position="relative",ei.maxWidth="100%",ea=!0,eo.maxWidth="100%",t="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(el,"%27%20height=%27").concat(es,"%27/%3e")):"fixed"===Z&&(ei.display="inline-block",ei.position="relative",ei.width=el,ei.height=es)}var eb={src:v,srcSet:void 0,sizes:void 0};er&&(eb=S({config:F,src:l,unoptimized:g,layout:Z,width:el,quality:ec,sizes:s,loader:V}));var em=l,eg="imagesizes";eg="imageSizes";var ey=(r(n={},"imageSrcSet",eb.srcSet),r(n,eg,eb.sizes),r(n,"crossOrigin",U.crossOrigin),n),eh=u.default.useLayoutEffect,ev=u.useRef(T),ew=u.useRef(l);u.useEffect(function(){ev.current=T},[T]),eh(function(){ew.current!==l&&(en(),ew.current=l)},[en,l]);var eO=a({isLazy:J,imgAttributes:eb,heightInt:es,widthInt:el,qualityInt:ec,layout:Z,className:P,imgStyle:eu,blurStyle:ef,loading:A,config:F,unoptimized:g,placeholder:W,loader:V,srcString:em,onLoadingCompleteRef:ev,setBlurComplete:K,setIntersection:ee,isVisible:er,noscriptSizes:s},U);return u.default.createElement(u.default.Fragment,null,u.default.createElement("span",{style:ei},ea?u.default.createElement("span",{style:eo},t?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:t}):null):null,u.default.createElement(z,Object.assign({},eO))),k?u.default.createElement(f.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+eb.src+eb.srcSet+eb.sizes,rel:"preload",as:"image",href:eb.srcSet?void 0:eb.src},ey))):null)};var a=n(6495).Z,l=n(2648).Z,s=n(1598).Z,c=n(7273).Z,u=s(n(7294)),f=l(n(5443)),d=n(9309),p=n(7190),b=n(9977);n(3794);var m=n(2392);function g(e){return"/"===e[0]?e.slice(1):e}var y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/next-portfolio/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0},h=new Set,v="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",w=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(m.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t.path).concat(g(n))),a=o.searchParams;return a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString()),o.href}],["cloudinary",function(e){var t,n=e.config,r=e.src,i=e.width,o=["f_auto","c_limit","w_"+i,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(n.path).concat(o).concat(g(r))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(g(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function O(e){return void 0!==e.default}function S(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,a=e.width,l=e.quality,s=e.sizes,c=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,r){var i=e.deviceSizes,a=e.allSizes;if(r&&("fill"===n||"responsive"===n)){for(var l=/(^|\s)(1?\d?\d)vw/g,s=[];c=l.exec(r);c)s.push(parseInt(c[2]));if(s.length){var c,u,f=.01*(u=Math).min.apply(u,o(s));return{widths:a.filter(function(e){return e>=i[0]*f}),kind:"w"}}return{widths:a,kind:"w"}}return"number"!=typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:o(new Set([t,2*t].map(function(e){return a.find(function(t){return t>=e})||a[a.length-1]}))),kind:"x"}}(t,a,i,s),f=u.widths,d=u.kind,p=f.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:f.map(function(e,r){return"".concat(c({config:t,src:n,quality:l,width:e})," ").concat("w"===d?e:r+1).concat(d)}).join(", "),src:c({config:t,src:n,quality:l,width:f[p]})}}function x(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function j(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",r=w.get(n);if(r)return r(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(n))}function k(e,t,n,r,i,o){e&&e.src!==v&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentNode&&(h.add(t),"blur"===r&&o(!0),null==i?void 0:i.current)){var n=e.naturalWidth,a=e.naturalHeight;i.current({naturalWidth:n,naturalHeight:a})}}))}var z=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),r=e.qualityInt,i=e.layout,o=e.className,l=e.imgStyle,s=e.blurStyle,f=e.isLazy,d=e.placeholder,p=e.loading,b=e.srcString,m=e.config,g=e.unoptimized,y=e.loader,h=e.onLoadingCompleteRef,v=e.setBlurComplete,w=e.setIntersection,O=e.onLoad,x=e.onError,j=(e.isVisible,e.noscriptSizes),z=c(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return p=f?"lazy":p,u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},z,t,{decoding:"async","data-nimg":i,className:o,style:a({},l,s),ref:u.useCallback(function(e){w(e),(null==e?void 0:e.complete)&&k(e,b,i,d,h,v)},[w,b,i,d,h,v,]),onLoad:function(e){k(e.currentTarget,b,i,d,h,v),O&&O(e)},onError:function(e){"blur"===d&&v(!0),x&&x(e)}})),(f||"blur"===d)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},z,S({config:m,src:b,unoptimized:g,layout:i,width:n,quality:r,sizes:j,loader:y}),{decoding:"async","data-nimg":i,style:l,className:o,loading:p}))))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t,n=e.rootRef,c=e.rootMargin,u=e.disabled||!a,f=r(i.useState(!1),2),d=f[0],p=f[1],b=r(i.useState(null),2),m=b[0],g=b[1];return i.useEffect(function(){if(a){if(!u&&!d&&m&&m.tagName){var e,t,r,i,f,b,g;return t=function(e){return e&&p(e)},f=(i=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=s.find(function(e){return e.root===n.root&&e.margin===n.margin});if(r&&(t=l.get(r)))return t;var i=new Map;return t={id:n,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:i},s.push(n),l.set(n,t),t}(r={root:null==n?void 0:n.current,rootMargin:c})).id,b=i.observer,(g=i.elements).set(m,t),b.observe(m),function(){if(g.delete(m),b.unobserve(m),0===g.size){b.disconnect(),l.delete(f);var e=s.findIndex(function(e){return e.root===f.root&&e.margin===f.margin});e>-1&&s.splice(e,1)}}}}else if(!d){var y=o.requestIdleCallback(function(){return p(!0)});return function(){return o.cancelIdleCallback(y)}}},[m,u,c,n,d]),[g,d,i.useCallback(function(){p(!1)},[])]};var i=n(7294),o=n(9311),a="function"==typeof IntersectionObserver,l=new Map,s=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){n(8045)},2703:function(e,t,n){"use strict";var r=n(414);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,o,a){if(a!==r){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
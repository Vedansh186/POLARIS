var Vf=Object.defineProperty;var Gf=(n,t,e)=>t in n?Vf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var et=(n,t,e)=>Gf(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function lr(n){return n+.5|0}const Qn=(n,t,e)=>Math.max(Math.min(n,e),t);function Vs(n){return Qn(lr(n*2.55),0,255)}function si(n){return Qn(lr(n*255),0,255)}function Un(n){return Qn(lr(n/2.55)/100,0,1)}function wc(n){return Qn(lr(n*100),0,100)}const nn={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Ba=[..."0123456789ABCDEF"],Wf=n=>Ba[n&15],Xf=n=>Ba[(n&240)>>4]+Ba[n&15],gr=n=>(n&240)>>4===(n&15),Yf=n=>gr(n.r)&&gr(n.g)&&gr(n.b)&&gr(n.a);function jf(n){var t=n.length,e;return n[0]==="#"&&(t===4||t===5?e={r:255&nn[n[1]]*17,g:255&nn[n[2]]*17,b:255&nn[n[3]]*17,a:t===5?nn[n[4]]*17:255}:(t===7||t===9)&&(e={r:nn[n[1]]<<4|nn[n[2]],g:nn[n[3]]<<4|nn[n[4]],b:nn[n[5]]<<4|nn[n[6]],a:t===9?nn[n[7]]<<4|nn[n[8]]:255})),e}const qf=(n,t)=>n<255?t(n):"";function $f(n){var t=Yf(n)?Wf:Xf;return n?"#"+t(n.r)+t(n.g)+t(n.b)+qf(n.a,t):void 0}const Kf=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function nd(n,t,e){const i=t*Math.min(e,1-e),s=(r,o=(r+n/30)%12)=>e-i*Math.max(Math.min(o-3,9-o,1),-1);return[s(0),s(8),s(4)]}function Zf(n,t,e){const i=(s,r=(s+n/60)%6)=>e-e*t*Math.max(Math.min(r,4-r,1),0);return[i(5),i(3),i(1)]}function Jf(n,t,e){const i=nd(n,1,.5);let s;for(t+e>1&&(s=1/(t+e),t*=s,e*=s),s=0;s<3;s++)i[s]*=1-t-e,i[s]+=t;return i}function Qf(n,t,e,i,s){return n===s?(t-e)/i+(t<e?6:0):t===s?(e-n)/i+2:(n-t)/i+4}function Xl(n){const e=n.r/255,i=n.g/255,s=n.b/255,r=Math.max(e,i,s),o=Math.min(e,i,s),a=(r+o)/2;let l,c,h;return r!==o&&(h=r-o,c=a>.5?h/(2-r-o):h/(r+o),l=Qf(e,i,s,h,r),l=l*60+.5),[l|0,c||0,a]}function Yl(n,t,e,i){return(Array.isArray(t)?n(t[0],t[1],t[2]):n(t,e,i)).map(si)}function jl(n,t,e){return Yl(nd,n,t,e)}function tp(n,t,e){return Yl(Jf,n,t,e)}function ep(n,t,e){return Yl(Zf,n,t,e)}function id(n){return(n%360+360)%360}function np(n){const t=Kf.exec(n);let e=255,i;if(!t)return;t[5]!==i&&(e=t[6]?Vs(+t[5]):si(+t[5]));const s=id(+t[2]),r=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?i=tp(s,r,o):t[1]==="hsv"?i=ep(s,r,o):i=jl(s,r,o),{r:i[0],g:i[1],b:i[2],a:e}}function ip(n,t){var e=Xl(n);e[0]=id(e[0]+t),e=jl(e),n.r=e[0],n.g=e[1],n.b=e[2]}function sp(n){if(!n)return;const t=Xl(n),e=t[0],i=wc(t[1]),s=wc(t[2]);return n.a<255?`hsla(${e}, ${i}%, ${s}%, ${Un(n.a)})`:`hsl(${e}, ${i}%, ${s}%)`}const Rc={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Cc={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function rp(){const n={},t=Object.keys(Cc),e=Object.keys(Rc);let i,s,r,o,a;for(i=0;i<t.length;i++){for(o=a=t[i],s=0;s<e.length;s++)r=e[s],a=a.replace(r,Rc[r]);r=parseInt(Cc[o],16),n[a]=[r>>16&255,r>>8&255,r&255]}return n}let _r;function op(n){_r||(_r=rp(),_r.transparent=[0,0,0,0]);const t=_r[n.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const ap=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function lp(n){const t=ap.exec(n);let e=255,i,s,r;if(t){if(t[7]!==i){const o=+t[7];e=t[8]?Vs(o):Qn(o*255,0,255)}return i=+t[1],s=+t[3],r=+t[5],i=255&(t[2]?Vs(i):Qn(i,0,255)),s=255&(t[4]?Vs(s):Qn(s,0,255)),r=255&(t[6]?Vs(r):Qn(r,0,255)),{r:i,g:s,b:r,a:e}}}function cp(n){return n&&(n.a<255?`rgba(${n.r}, ${n.g}, ${n.b}, ${Un(n.a)})`:`rgb(${n.r}, ${n.g}, ${n.b})`)}const Xo=n=>n<=.0031308?n*12.92:Math.pow(n,1/2.4)*1.055-.055,Wi=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4);function hp(n,t,e){const i=Wi(Un(n.r)),s=Wi(Un(n.g)),r=Wi(Un(n.b));return{r:si(Xo(i+e*(Wi(Un(t.r))-i))),g:si(Xo(s+e*(Wi(Un(t.g))-s))),b:si(Xo(r+e*(Wi(Un(t.b))-r))),a:n.a+e*(t.a-n.a)}}function xr(n,t,e){if(n){let i=Xl(n);i[t]=Math.max(0,Math.min(i[t]+i[t]*e,t===0?360:1)),i=jl(i),n.r=i[0],n.g=i[1],n.b=i[2]}}function sd(n,t){return n&&Object.assign(t||{},n)}function Pc(n){var t={r:0,g:0,b:0,a:255};return Array.isArray(n)?n.length>=3&&(t={r:n[0],g:n[1],b:n[2],a:255},n.length>3&&(t.a=si(n[3]))):(t=sd(n,{r:0,g:0,b:0,a:1}),t.a=si(t.a)),t}function up(n){return n.charAt(0)==="r"?lp(n):np(n)}let rd=class za{constructor(t){if(t instanceof za)return t;const e=typeof t;let i;e==="object"?i=Pc(t):e==="string"&&(i=jf(t)||op(t)||up(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=sd(this._rgb);return t&&(t.a=Un(t.a)),t}set rgb(t){this._rgb=Pc(t)}rgbString(){return this._valid?cp(this._rgb):void 0}hexString(){return this._valid?$f(this._rgb):void 0}hslString(){return this._valid?sp(this._rgb):void 0}mix(t,e){if(t){const i=this.rgb,s=t.rgb;let r;const o=e===r?.5:e,a=2*o-1,l=i.a-s.a,c=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;r=1-c,i.r=255&c*i.r+r*s.r+.5,i.g=255&c*i.g+r*s.g+.5,i.b=255&c*i.b+r*s.b+.5,i.a=o*i.a+(1-o)*s.a,this.rgb=i}return this}interpolate(t,e){return t&&(this._rgb=hp(this._rgb,t._rgb,e)),this}clone(){return new za(this.rgb)}alpha(t){return this._rgb.a=si(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=lr(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return xr(this._rgb,2,t),this}darken(t){return xr(this._rgb,2,-t),this}saturate(t){return xr(this._rgb,1,t),this}desaturate(t){return xr(this._rgb,1,-t),this}rotate(t){return ip(this._rgb,t),this}};/*!
 * Chart.js v4.6.1
 * https://www.chartjs.org
 * (c) 2026 Chart.js Contributors
 * Released under the MIT License
 */function An(){}const dp=(()=>{let n=0;return()=>n++})();function zt(n){return n==null}function ce(n){if(Array.isArray&&Array.isArray(n))return!0;const t=Object.prototype.toString.call(n);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function Ht(n){return n!==null&&Object.prototype.toString.call(n)==="[object Object]"}function me(n){return(typeof n=="number"||n instanceof Number)&&isFinite(+n)}function $e(n,t){return me(n)?n:t}function Dt(n,t){return typeof n>"u"?t:n}const fp=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100:+n/t,od=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100*t:+n;function oe(n,t,e){if(n&&typeof n.call=="function")return n.apply(e,t)}function te(n,t,e,i){let s,r,o;if(ce(n))for(r=n.length,s=0;s<r;s++)t.call(e,n[s],s);else if(Ht(n))for(o=Object.keys(n),r=o.length,s=0;s<r;s++)t.call(e,n[o[s]],o[s])}function vo(n,t){let e,i,s,r;if(!n||!t||n.length!==t.length)return!1;for(e=0,i=n.length;e<i;++e)if(s=n[e],r=t[e],s.datasetIndex!==r.datasetIndex||s.index!==r.index)return!1;return!0}function Mo(n){if(ce(n))return n.map(Mo);if(Ht(n)){const t=Object.create(null),e=Object.keys(n),i=e.length;let s=0;for(;s<i;++s)t[e[s]]=Mo(n[e[s]]);return t}return n}function ad(n){return["__proto__","prototype","constructor"].indexOf(n)===-1}function pp(n,t,e,i){if(!ad(n))return;const s=t[n],r=e[n];Ht(s)&&Ht(r)?tr(s,r,i):t[n]=Mo(r)}function tr(n,t,e){const i=ce(t)?t:[t],s=i.length;if(!Ht(n))return n;e=e||{};const r=e.merger||pp;let o;for(let a=0;a<s;++a){if(o=i[a],!Ht(o))continue;const l=Object.keys(o);for(let c=0,h=l.length;c<h;++c)r(l[c],n,o,e)}return n}function $s(n,t){return tr(n,t,{merger:mp})}function mp(n,t,e){if(!ad(n))return;const i=t[n],s=e[n];Ht(i)&&Ht(s)?$s(i,s):Object.prototype.hasOwnProperty.call(t,n)||(t[n]=Mo(s))}const Dc={"":n=>n,x:n=>n.x,y:n=>n.y};function gp(n){const t=n.split("."),e=[];let i="";for(const s of t)i+=s,i.endsWith("\\")?i=i.slice(0,-1)+".":(e.push(i),i="");return e}function _p(n){const t=gp(n);return e=>{for(const i of t){if(i==="")break;e=e&&e[i]}return e}}function ai(n,t){return(Dc[t]||(Dc[t]=_p(t)))(n)}function ql(n){return n.charAt(0).toUpperCase()+n.slice(1)}const er=n=>typeof n<"u",li=n=>typeof n=="function",Lc=(n,t)=>{if(n.size!==t.size)return!1;for(const e of n)if(!t.has(e))return!1;return!0};function xp(n){return n.type==="mouseup"||n.type==="click"||n.type==="contextmenu"}const Kt=Math.PI,ee=2*Kt,vp=ee+Kt,bo=Number.POSITIVE_INFINITY,Mp=Kt/180,_e=Kt/2,pi=Kt/4,Ic=Kt*2/3,ti=Math.log10,yn=Math.sign;function Ks(n,t,e){return Math.abs(n-t)<e}function Oc(n){const t=Math.round(n);n=Ks(n,t,n/1e3)?t:n;const e=Math.pow(10,Math.floor(ti(n))),i=n/e;return(i<=1?1:i<=2?2:i<=5?5:10)*e}function bp(n){const t=[],e=Math.sqrt(n);let i;for(i=1;i<e;i++)n%i===0&&(t.push(i),t.push(n/i));return e===(e|0)&&t.push(e),t.sort((s,r)=>s-r).pop(),t}function yp(n){return typeof n=="symbol"||typeof n=="object"&&n!==null&&!(Symbol.toPrimitive in n||"toString"in n||"valueOf"in n)}function gs(n){return!yp(n)&&!isNaN(parseFloat(n))&&isFinite(n)}function Sp(n,t){const e=Math.round(n);return e-t<=n&&e+t>=n}function ld(n,t,e){let i,s,r;for(i=0,s=n.length;i<s;i++)r=n[i][e],isNaN(r)||(t.min=Math.min(t.min,r),t.max=Math.max(t.max,r))}function dn(n){return n*(Kt/180)}function $l(n){return n*(180/Kt)}function Uc(n){if(!me(n))return;let t=1,e=0;for(;Math.round(n*t)/t!==n;)t*=10,e++;return e}function cd(n,t){const e=t.x-n.x,i=t.y-n.y,s=Math.sqrt(e*e+i*i);let r=Math.atan2(i,e);return r<-.5*Kt&&(r+=ee),{angle:r,distance:s}}function Ha(n,t){return Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2))}function Ep(n,t){return(n-t+vp)%ee-Kt}function Ie(n){return(n%ee+ee)%ee}function nr(n,t,e,i){const s=Ie(n),r=Ie(t),o=Ie(e),a=Ie(r-s),l=Ie(o-s),c=Ie(s-r),h=Ie(s-o);return s===r||s===o||i&&r===o||a>l&&c<h}function Te(n,t,e){return Math.max(t,Math.min(e,n))}function Tp(n){return Te(n,-32768,32767)}function Nn(n,t,e,i=1e-6){return n>=Math.min(t,e)-i&&n<=Math.max(t,e)+i}function Kl(n,t,e){e=e||(o=>n[o]<t);let i=n.length-1,s=0,r;for(;i-s>1;)r=s+i>>1,e(r)?s=r:i=r;return{lo:s,hi:i}}const kn=(n,t,e,i)=>Kl(n,e,i?s=>{const r=n[s][t];return r<e||r===e&&n[s+1][t]===e}:s=>n[s][t]<e),Ap=(n,t,e)=>Kl(n,e,i=>n[i][t]>=e);function wp(n,t,e){let i=0,s=n.length;for(;i<s&&n[i]<t;)i++;for(;s>i&&n[s-1]>e;)s--;return i>0||s<n.length?n.slice(i,s):n}const hd=["push","pop","shift","splice","unshift"];function Rp(n,t){if(n._chartjs){n._chartjs.listeners.push(t);return}Object.defineProperty(n,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),hd.forEach(e=>{const i="_onData"+ql(e),s=n[e];Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value(...r){const o=s.apply(this,r);return n._chartjs.listeners.forEach(a=>{typeof a[i]=="function"&&a[i](...r)}),o}})})}function Fc(n,t){const e=n._chartjs;if(!e)return;const i=e.listeners,s=i.indexOf(t);s!==-1&&i.splice(s,1),!(i.length>0)&&(hd.forEach(r=>{delete n[r]}),delete n._chartjs)}function ud(n){const t=new Set(n);return t.size===n.length?n:Array.from(t)}const dd=(function(){return typeof window>"u"?function(n){return n()}:window.requestAnimationFrame})();function fd(n,t){let e=[],i=!1;return function(...s){e=s,i||(i=!0,dd.call(window,()=>{i=!1,n.apply(t,e)}))}}function Cp(n,t){let e;return function(...i){return t?(clearTimeout(e),e=setTimeout(n,t,i)):n.apply(this,i),t}}const Zl=n=>n==="start"?"left":n==="end"?"right":"center",Le=(n,t,e)=>n==="start"?t:n==="end"?e:(t+e)/2,Pp=(n,t,e,i)=>n===(i?"left":"right")?e:n==="center"?(t+e)/2:t;function pd(n,t,e){const i=t.length;let s=0,r=i;if(n._sorted){const{iScale:o,vScale:a,_parsed:l}=n,c=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null,h=o.axis,{min:u,max:d,minDefined:f,maxDefined:g}=o.getUserBounds();if(f){if(s=Math.min(kn(l,h,u).lo,e?i:kn(t,h,o.getPixelForValue(u)).lo),c){const _=l.slice(0,s+1).reverse().findIndex(m=>!zt(m[a.axis]));s-=Math.max(0,_)}s=Te(s,0,i-1)}if(g){let _=Math.max(kn(l,o.axis,d,!0).hi+1,e?0:kn(t,h,o.getPixelForValue(d),!0).hi+1);if(c){const m=l.slice(_-1).findIndex(p=>!zt(p[a.axis]));_+=Math.max(0,m)}r=Te(_,s,i)-s}else r=i-s}return{start:s,count:r}}function md(n){const{xScale:t,yScale:e,_scaleRanges:i}=n,s={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!i)return n._scaleRanges=s,!0;const r=i.xmin!==t.min||i.xmax!==t.max||i.ymin!==e.min||i.ymax!==e.max;return Object.assign(i,s),r}const vr=n=>n===0||n===1,Nc=(n,t,e)=>-(Math.pow(2,10*(n-=1))*Math.sin((n-t)*ee/e)),kc=(n,t,e)=>Math.pow(2,-10*n)*Math.sin((n-t)*ee/e)+1,Zs={linear:n=>n,easeInQuad:n=>n*n,easeOutQuad:n=>-n*(n-2),easeInOutQuad:n=>(n/=.5)<1?.5*n*n:-.5*(--n*(n-2)-1),easeInCubic:n=>n*n*n,easeOutCubic:n=>(n-=1)*n*n+1,easeInOutCubic:n=>(n/=.5)<1?.5*n*n*n:.5*((n-=2)*n*n+2),easeInQuart:n=>n*n*n*n,easeOutQuart:n=>-((n-=1)*n*n*n-1),easeInOutQuart:n=>(n/=.5)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2),easeInQuint:n=>n*n*n*n*n,easeOutQuint:n=>(n-=1)*n*n*n*n+1,easeInOutQuint:n=>(n/=.5)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2),easeInSine:n=>-Math.cos(n*_e)+1,easeOutSine:n=>Math.sin(n*_e),easeInOutSine:n=>-.5*(Math.cos(Kt*n)-1),easeInExpo:n=>n===0?0:Math.pow(2,10*(n-1)),easeOutExpo:n=>n===1?1:-Math.pow(2,-10*n)+1,easeInOutExpo:n=>vr(n)?n:n<.5?.5*Math.pow(2,10*(n*2-1)):.5*(-Math.pow(2,-10*(n*2-1))+2),easeInCirc:n=>n>=1?n:-(Math.sqrt(1-n*n)-1),easeOutCirc:n=>Math.sqrt(1-(n-=1)*n),easeInOutCirc:n=>(n/=.5)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1),easeInElastic:n=>vr(n)?n:Nc(n,.075,.3),easeOutElastic:n=>vr(n)?n:kc(n,.075,.3),easeInOutElastic(n){return vr(n)?n:n<.5?.5*Nc(n*2,.1125,.45):.5+.5*kc(n*2-1,.1125,.45)},easeInBack(n){return n*n*((1.70158+1)*n-1.70158)},easeOutBack(n){return(n-=1)*n*((1.70158+1)*n+1.70158)+1},easeInOutBack(n){let t=1.70158;return(n/=.5)<1?.5*(n*n*(((t*=1.525)+1)*n-t)):.5*((n-=2)*n*(((t*=1.525)+1)*n+t)+2)},easeInBounce:n=>1-Zs.easeOutBounce(1-n),easeOutBounce(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},easeInOutBounce:n=>n<.5?Zs.easeInBounce(n*2)*.5:Zs.easeOutBounce(n*2-1)*.5+.5};function Jl(n){if(n&&typeof n=="object"){const t=n.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function Bc(n){return Jl(n)?n:new rd(n)}function Yo(n){return Jl(n)?n:new rd(n).saturate(.5).darken(.1).hexString()}const Dp=["x","y","borderWidth","radius","tension"],Lp=["color","borderColor","backgroundColor"];function Ip(n){n.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),n.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),n.set("animations",{colors:{type:"color",properties:Lp},numbers:{type:"number",properties:Dp}}),n.describe("animations",{_fallback:"animation"}),n.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function Op(n){n.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const zc=new Map;function Up(n,t){t=t||{};const e=n+JSON.stringify(t);let i=zc.get(e);return i||(i=new Intl.NumberFormat(n,t),zc.set(e,i)),i}function cr(n,t,e){return Up(t,e).format(n)}const gd={values(n){return ce(n)?n:""+n},numeric(n,t,e){if(n===0)return"0";const i=this.chart.options.locale;let s,r=n;if(e.length>1){const c=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(c<1e-4||c>1e15)&&(s="scientific"),r=Fp(n,e)}const o=ti(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),l={notation:s,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),cr(n,i,l)},logarithmic(n,t,e){if(n===0)return"0";const i=e[t].significand||n/Math.pow(10,Math.floor(ti(n)));return[1,2,3,5,10,15].includes(i)||t>.8*e.length?gd.numeric.call(this,n,t,e):""}};function Fp(n,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&n!==Math.floor(n)&&(e=n-Math.floor(n)),e}var Lo={formatters:gd};function Np(n){n.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Lo.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),n.route("scale.ticks","color","","color"),n.route("scale.grid","color","","borderColor"),n.route("scale.border","color","","borderColor"),n.route("scale.title","color","","color"),n.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),n.describe("scales",{_fallback:"scale"}),n.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const Fi=Object.create(null),Va=Object.create(null);function Js(n,t){if(!t)return n;const e=t.split(".");for(let i=0,s=e.length;i<s;++i){const r=e[i];n=n[r]||(n[r]=Object.create(null))}return n}function jo(n,t,e){return typeof t=="string"?tr(Js(n,t),e):tr(Js(n,""),t)}class kp{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,s)=>Yo(s.backgroundColor),this.hoverBorderColor=(i,s)=>Yo(s.borderColor),this.hoverColor=(i,s)=>Yo(s.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return jo(this,t,e)}get(t){return Js(this,t)}describe(t,e){return jo(Va,t,e)}override(t,e){return jo(Fi,t,e)}route(t,e,i,s){const r=Js(this,t),o=Js(this,i),a="_"+e;Object.defineProperties(r,{[a]:{value:r[e],writable:!0},[e]:{enumerable:!0,get(){const l=this[a],c=o[s];return Ht(l)?Object.assign({},c,l):Dt(l,c)},set(l){this[a]=l}}})}apply(t){t.forEach(e=>e(this))}}var he=new kp({_scriptable:n=>!n.startsWith("on"),_indexable:n=>n!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[Ip,Op,Np]);function Bp(n){return!n||zt(n.size)||zt(n.family)?null:(n.style?n.style+" ":"")+(n.weight?n.weight+" ":"")+n.size+"px "+n.family}function yo(n,t,e,i,s){let r=t[s];return r||(r=t[s]=n.measureText(s).width,e.push(s)),r>i&&(i=r),i}function zp(n,t,e,i){i=i||{};let s=i.data=i.data||{},r=i.garbageCollect=i.garbageCollect||[];i.font!==t&&(s=i.data={},r=i.garbageCollect=[],i.font=t),n.save(),n.font=t;let o=0;const a=e.length;let l,c,h,u,d;for(l=0;l<a;l++)if(u=e[l],u!=null&&!ce(u))o=yo(n,s,r,o,u);else if(ce(u))for(c=0,h=u.length;c<h;c++)d=u[c],d!=null&&!ce(d)&&(o=yo(n,s,r,o,d));n.restore();const f=r.length/2;if(f>e.length){for(l=0;l<f;l++)delete s[r[l]];r.splice(0,f)}return o}function mi(n,t,e){const i=n.currentDevicePixelRatio,s=e!==0?Math.max(e/2,.5):0;return Math.round((t-s)*i)/i+s}function Hc(n,t){!t&&!n||(t=t||n.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,n.width,n.height),t.restore())}function Ga(n,t,e,i){_d(n,t,e,i,null)}function _d(n,t,e,i,s){let r,o,a,l,c,h,u,d;const f=t.pointStyle,g=t.rotation,_=t.radius;let m=(g||0)*Mp;if(f&&typeof f=="object"&&(r=f.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){n.save(),n.translate(e,i),n.rotate(m),n.drawImage(f,-f.width/2,-f.height/2,f.width,f.height),n.restore();return}if(!(isNaN(_)||_<=0)){switch(n.beginPath(),f){default:s?n.ellipse(e,i,s/2,_,0,0,ee):n.arc(e,i,_,0,ee),n.closePath();break;case"triangle":h=s?s/2:_,n.moveTo(e+Math.sin(m)*h,i-Math.cos(m)*_),m+=Ic,n.lineTo(e+Math.sin(m)*h,i-Math.cos(m)*_),m+=Ic,n.lineTo(e+Math.sin(m)*h,i-Math.cos(m)*_),n.closePath();break;case"rectRounded":c=_*.516,l=_-c,o=Math.cos(m+pi)*l,u=Math.cos(m+pi)*(s?s/2-c:l),a=Math.sin(m+pi)*l,d=Math.sin(m+pi)*(s?s/2-c:l),n.arc(e-u,i-a,c,m-Kt,m-_e),n.arc(e+d,i-o,c,m-_e,m),n.arc(e+u,i+a,c,m,m+_e),n.arc(e-d,i+o,c,m+_e,m+Kt),n.closePath();break;case"rect":if(!g){l=Math.SQRT1_2*_,h=s?s/2:l,n.rect(e-h,i-l,2*h,2*l);break}m+=pi;case"rectRot":u=Math.cos(m)*(s?s/2:_),o=Math.cos(m)*_,a=Math.sin(m)*_,d=Math.sin(m)*(s?s/2:_),n.moveTo(e-u,i-a),n.lineTo(e+d,i-o),n.lineTo(e+u,i+a),n.lineTo(e-d,i+o),n.closePath();break;case"crossRot":m+=pi;case"cross":u=Math.cos(m)*(s?s/2:_),o=Math.cos(m)*_,a=Math.sin(m)*_,d=Math.sin(m)*(s?s/2:_),n.moveTo(e-u,i-a),n.lineTo(e+u,i+a),n.moveTo(e+d,i-o),n.lineTo(e-d,i+o);break;case"star":u=Math.cos(m)*(s?s/2:_),o=Math.cos(m)*_,a=Math.sin(m)*_,d=Math.sin(m)*(s?s/2:_),n.moveTo(e-u,i-a),n.lineTo(e+u,i+a),n.moveTo(e+d,i-o),n.lineTo(e-d,i+o),m+=pi,u=Math.cos(m)*(s?s/2:_),o=Math.cos(m)*_,a=Math.sin(m)*_,d=Math.sin(m)*(s?s/2:_),n.moveTo(e-u,i-a),n.lineTo(e+u,i+a),n.moveTo(e+d,i-o),n.lineTo(e-d,i+o);break;case"line":o=s?s/2:Math.cos(m)*_,a=Math.sin(m)*_,n.moveTo(e-o,i-a),n.lineTo(e+o,i+a);break;case"dash":n.moveTo(e,i),n.lineTo(e+Math.cos(m)*(s?s/2:_),i+Math.sin(m)*_);break;case!1:n.closePath();break}n.fill(),t.borderWidth>0&&n.stroke()}}function Bn(n,t,e){return e=e||.5,!t||n&&n.x>t.left-e&&n.x<t.right+e&&n.y>t.top-e&&n.y<t.bottom+e}function Io(n,t){n.save(),n.beginPath(),n.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),n.clip()}function Oo(n){n.restore()}function Hp(n,t,e,i,s){if(!t)return n.lineTo(e.x,e.y);if(s==="middle"){const r=(t.x+e.x)/2;n.lineTo(r,t.y),n.lineTo(r,e.y)}else s==="after"!=!!i?n.lineTo(t.x,e.y):n.lineTo(e.x,t.y);n.lineTo(e.x,e.y)}function Vp(n,t,e,i){if(!t)return n.lineTo(e.x,e.y);n.bezierCurveTo(i?t.cp1x:t.cp2x,i?t.cp1y:t.cp2y,i?e.cp2x:e.cp1x,i?e.cp2y:e.cp1y,e.x,e.y)}function Gp(n,t){t.translation&&n.translate(t.translation[0],t.translation[1]),zt(t.rotation)||n.rotate(t.rotation),t.color&&(n.fillStyle=t.color),t.textAlign&&(n.textAlign=t.textAlign),t.textBaseline&&(n.textBaseline=t.textBaseline)}function Wp(n,t,e,i,s){if(s.strikethrough||s.underline){const r=n.measureText(i),o=t-r.actualBoundingBoxLeft,a=t+r.actualBoundingBoxRight,l=e-r.actualBoundingBoxAscent,c=e+r.actualBoundingBoxDescent,h=s.strikethrough?(l+c)/2:c;n.strokeStyle=n.fillStyle,n.beginPath(),n.lineWidth=s.decorationWidth||2,n.moveTo(o,h),n.lineTo(a,h),n.stroke()}}function Xp(n,t){const e=n.fillStyle;n.fillStyle=t.color,n.fillRect(t.left,t.top,t.width,t.height),n.fillStyle=e}function Ni(n,t,e,i,s,r={}){const o=ce(t)?t:[t],a=r.strokeWidth>0&&r.strokeColor!=="";let l,c;for(n.save(),n.font=s.string,Gp(n,r),l=0;l<o.length;++l)c=o[l],r.backdrop&&Xp(n,r.backdrop),a&&(r.strokeColor&&(n.strokeStyle=r.strokeColor),zt(r.strokeWidth)||(n.lineWidth=r.strokeWidth),n.strokeText(c,e,i,r.maxWidth)),n.fillText(c,e,i,r.maxWidth),Wp(n,e,i,c,r),i+=Number(s.lineHeight);n.restore()}function ir(n,t){const{x:e,y:i,w:s,h:r,radius:o}=t;n.arc(e+o.topLeft,i+o.topLeft,o.topLeft,1.5*Kt,Kt,!0),n.lineTo(e,i+r-o.bottomLeft),n.arc(e+o.bottomLeft,i+r-o.bottomLeft,o.bottomLeft,Kt,_e,!0),n.lineTo(e+s-o.bottomRight,i+r),n.arc(e+s-o.bottomRight,i+r-o.bottomRight,o.bottomRight,_e,0,!0),n.lineTo(e+s,i+o.topRight),n.arc(e+s-o.topRight,i+o.topRight,o.topRight,0,-_e,!0),n.lineTo(e+o.topLeft,i)}const Yp=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,jp=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function qp(n,t){const e=(""+n).match(Yp);if(!e||e[1]==="normal")return t*1.2;switch(n=+e[2],e[3]){case"px":return n;case"%":n/=100;break}return t*n}const $p=n=>+n||0;function Ql(n,t){const e={},i=Ht(t),s=i?Object.keys(t):t,r=Ht(n)?i?o=>Dt(n[o],n[t[o]]):o=>n[o]:()=>n;for(const o of s)e[o]=$p(r(o));return e}function xd(n){return Ql(n,{top:"y",right:"x",bottom:"y",left:"x"})}function Oi(n){return Ql(n,["topLeft","topRight","bottomLeft","bottomRight"])}function Ue(n){const t=xd(n);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function be(n,t){n=n||{},t=t||he.font;let e=Dt(n.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let i=Dt(n.style,t.style);i&&!(""+i).match(jp)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const s={family:Dt(n.family,t.family),lineHeight:qp(Dt(n.lineHeight,t.lineHeight),e),size:e,style:i,weight:Dt(n.weight,t.weight),string:""};return s.string=Bp(s),s}function Gs(n,t,e,i){let s,r,o;for(s=0,r=n.length;s<r;++s)if(o=n[s],o!==void 0&&o!==void 0)return o}function Kp(n,t,e){const{min:i,max:s}=n,r=od(t,(s-i)/2),o=(a,l)=>e&&a===0?0:a+l;return{min:o(i,-Math.abs(r)),max:o(s,r)}}function ui(n,t){return Object.assign(Object.create(n),t)}function tc(n,t=[""],e,i,s=()=>n[0]){const r=e||n;typeof i>"u"&&(i=yd("_fallback",n));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:n,_rootScopes:r,_fallback:i,_getTarget:s,override:a=>tc([a,...n],t,r,i)};return new Proxy(o,{deleteProperty(a,l){return delete a[l],delete a._keys,delete n[0][l],!0},get(a,l){return Md(a,l,()=>sm(l,t,n,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(n[0])},has(a,l){return Gc(a).includes(l)},ownKeys(a){return Gc(a)},set(a,l,c){const h=a._storage||(a._storage=s());return a[l]=h[l]=c,delete a._keys,!0}})}function _s(n,t,e,i){const s={_cacheable:!1,_proxy:n,_context:t,_subProxy:e,_stack:new Set,_descriptors:vd(n,i),setContext:r=>_s(n,r,e,i),override:r=>_s(n.override(r),t,e,i)};return new Proxy(s,{deleteProperty(r,o){return delete r[o],delete n[o],!0},get(r,o,a){return Md(r,o,()=>Jp(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(n,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(n,o)},getPrototypeOf(){return Reflect.getPrototypeOf(n)},has(r,o){return Reflect.has(n,o)},ownKeys(){return Reflect.ownKeys(n)},set(r,o,a){return n[o]=a,delete r[o],!0}})}function vd(n,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:i=t.indexable,_allKeys:s=t.allKeys}=n;return{allKeys:s,scriptable:e,indexable:i,isScriptable:li(e)?e:()=>e,isIndexable:li(i)?i:()=>i}}const Zp=(n,t)=>n?n+ql(t):t,ec=(n,t)=>Ht(t)&&n!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Md(n,t,e){if(Object.prototype.hasOwnProperty.call(n,t)||t==="constructor")return n[t];const i=e();return n[t]=i,i}function Jp(n,t,e){const{_proxy:i,_context:s,_subProxy:r,_descriptors:o}=n;let a=i[t];return li(a)&&o.isScriptable(t)&&(a=Qp(t,a,n,e)),ce(a)&&a.length&&(a=tm(t,a,n,o.isIndexable)),ec(t,a)&&(a=_s(a,s,r&&r[t],o)),a}function Qp(n,t,e,i){const{_proxy:s,_context:r,_subProxy:o,_stack:a}=e;if(a.has(n))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+n);a.add(n);let l=t(r,o||i);return a.delete(n),ec(n,l)&&(l=nc(s._scopes,s,n,l)),l}function tm(n,t,e,i){const{_proxy:s,_context:r,_subProxy:o,_descriptors:a}=e;if(typeof r.index<"u"&&i(n))return t[r.index%t.length];if(Ht(t[0])){const l=t,c=s._scopes.filter(h=>h!==l);t=[];for(const h of l){const u=nc(c,s,n,h);t.push(_s(u,r,o&&o[n],a))}}return t}function bd(n,t,e){return li(n)?n(t,e):n}const em=(n,t)=>n===!0?t:typeof n=="string"?ai(t,n):void 0;function nm(n,t,e,i,s){for(const r of t){const o=em(e,r);if(o){n.add(o);const a=bd(o._fallback,e,s);if(typeof a<"u"&&a!==e&&a!==i)return a}else if(o===!1&&typeof i<"u"&&e!==i)return null}return!1}function nc(n,t,e,i){const s=t._rootScopes,r=bd(t._fallback,e,i),o=[...n,...s],a=new Set;a.add(i);let l=Vc(a,o,e,r||e,i);return l===null||typeof r<"u"&&r!==e&&(l=Vc(a,o,r,l,i),l===null)?!1:tc(Array.from(a),[""],s,r,()=>im(t,e,i))}function Vc(n,t,e,i,s){for(;e;)e=nm(n,t,e,i,s);return e}function im(n,t,e){const i=n._getTarget();t in i||(i[t]={});const s=i[t];return ce(s)&&Ht(e)?e:s||{}}function sm(n,t,e,i){let s;for(const r of t)if(s=yd(Zp(r,n),e),typeof s<"u")return ec(n,s)?nc(e,i,n,s):s}function yd(n,t){for(const e of t){if(!e)continue;const i=e[n];if(typeof i<"u")return i}}function Gc(n){let t=n._keys;return t||(t=n._keys=rm(n._scopes)),t}function rm(n){const t=new Set;for(const e of n)for(const i of Object.keys(e).filter(s=>!s.startsWith("_")))t.add(i);return Array.from(t)}function Sd(n,t,e,i){const{iScale:s}=n,{key:r="r"}=this._parsing,o=new Array(i);let a,l,c,h;for(a=0,l=i;a<l;++a)c=a+e,h=t[c],o[a]={r:s.parse(ai(h,r),c)};return o}const om=Number.EPSILON||1e-14,xs=(n,t)=>t<n.length&&!n[t].skip&&n[t],Ed=n=>n==="x"?"y":"x";function am(n,t,e,i){const s=n.skip?t:n,r=t,o=e.skip?t:e,a=Ha(r,s),l=Ha(o,r);let c=a/(a+l),h=l/(a+l);c=isNaN(c)?0:c,h=isNaN(h)?0:h;const u=i*c,d=i*h;return{previous:{x:r.x-u*(o.x-s.x),y:r.y-u*(o.y-s.y)},next:{x:r.x+d*(o.x-s.x),y:r.y+d*(o.y-s.y)}}}function lm(n,t,e){const i=n.length;let s,r,o,a,l,c=xs(n,0);for(let h=0;h<i-1;++h)if(l=c,c=xs(n,h+1),!(!l||!c)){if(Ks(t[h],0,om)){e[h]=e[h+1]=0;continue}s=e[h]/t[h],r=e[h+1]/t[h],a=Math.pow(s,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),e[h]=s*o*t[h],e[h+1]=r*o*t[h])}}function cm(n,t,e="x"){const i=Ed(e),s=n.length;let r,o,a,l=xs(n,0);for(let c=0;c<s;++c){if(o=a,a=l,l=xs(n,c+1),!a)continue;const h=a[e],u=a[i];o&&(r=(h-o[e])/3,a[`cp1${e}`]=h-r,a[`cp1${i}`]=u-r*t[c]),l&&(r=(l[e]-h)/3,a[`cp2${e}`]=h+r,a[`cp2${i}`]=u+r*t[c])}}function hm(n,t="x"){const e=Ed(t),i=n.length,s=Array(i).fill(0),r=Array(i);let o,a,l,c=xs(n,0);for(o=0;o<i;++o)if(a=l,l=c,c=xs(n,o+1),!!l){if(c){const h=c[t]-l[t];s[o]=h!==0?(c[e]-l[e])/h:0}r[o]=a?c?yn(s[o-1])!==yn(s[o])?0:(s[o-1]+s[o])/2:s[o-1]:s[o]}lm(n,s,r),cm(n,r,t)}function Mr(n,t,e){return Math.max(Math.min(n,e),t)}function um(n,t){let e,i,s,r,o,a=Bn(n[0],t);for(e=0,i=n.length;e<i;++e)o=r,r=a,a=e<i-1&&Bn(n[e+1],t),r&&(s=n[e],o&&(s.cp1x=Mr(s.cp1x,t.left,t.right),s.cp1y=Mr(s.cp1y,t.top,t.bottom)),a&&(s.cp2x=Mr(s.cp2x,t.left,t.right),s.cp2y=Mr(s.cp2y,t.top,t.bottom)))}function dm(n,t,e,i,s){let r,o,a,l;if(t.spanGaps&&(n=n.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")hm(n,s);else{let c=i?n[n.length-1]:n[0];for(r=0,o=n.length;r<o;++r)a=n[r],l=am(c,a,n[Math.min(r+1,o-(i?0:1))%o],t.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,c=a}t.capBezierPoints&&um(n,e)}function ic(){return typeof window<"u"&&typeof document<"u"}function sc(n){let t=n.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function So(n,t,e){let i;return typeof n=="string"?(i=parseInt(n,10),n.indexOf("%")!==-1&&(i=i/100*t.parentNode[e])):i=n,i}const Uo=n=>n.ownerDocument.defaultView.getComputedStyle(n,null);function fm(n,t){return Uo(n).getPropertyValue(t)}const pm=["top","right","bottom","left"];function Ui(n,t,e){const i={};e=e?"-"+e:"";for(let s=0;s<4;s++){const r=pm[s];i[r]=parseFloat(n[t+"-"+r+e])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const mm=(n,t,e)=>(n>0||t>0)&&(!e||!e.shadowRoot);function gm(n,t){const e=n.touches,i=e&&e.length?e[0]:n,{offsetX:s,offsetY:r}=i;let o=!1,a,l;if(mm(s,r,n.target))a=s,l=r;else{const c=t.getBoundingClientRect();a=i.clientX-c.left,l=i.clientY-c.top,o=!0}return{x:a,y:l,box:o}}function Ei(n,t){if("native"in n)return n;const{canvas:e,currentDevicePixelRatio:i}=t,s=Uo(e),r=s.boxSizing==="border-box",o=Ui(s,"padding"),a=Ui(s,"border","width"),{x:l,y:c,box:h}=gm(n,e),u=o.left+(h&&a.left),d=o.top+(h&&a.top);let{width:f,height:g}=t;return r&&(f-=o.width+a.width,g-=o.height+a.height),{x:Math.round((l-u)/f*e.width/i),y:Math.round((c-d)/g*e.height/i)}}function _m(n,t,e){let i,s;if(t===void 0||e===void 0){const r=n&&sc(n);if(!r)t=n.clientWidth,e=n.clientHeight;else{const o=r.getBoundingClientRect(),a=Uo(r),l=Ui(a,"border","width"),c=Ui(a,"padding");t=o.width-c.width-l.width,e=o.height-c.height-l.height,i=So(a.maxWidth,r,"clientWidth"),s=So(a.maxHeight,r,"clientHeight")}}return{width:t,height:e,maxWidth:i||bo,maxHeight:s||bo}}const ei=n=>Math.round(n*10)/10;function xm(n,t,e,i){const s=Uo(n),r=Ui(s,"margin"),o=So(s.maxWidth,n,"clientWidth")||bo,a=So(s.maxHeight,n,"clientHeight")||bo,l=_m(n,t,e);let{width:c,height:h}=l;if(s.boxSizing==="content-box"){const d=Ui(s,"border","width"),f=Ui(s,"padding");c-=f.width+d.width,h-=f.height+d.height}return c=Math.max(0,c-r.width),h=Math.max(0,i?c/i:h-r.height),c=ei(Math.min(c,o,l.maxWidth)),h=ei(Math.min(h,a,l.maxHeight)),c&&!h&&(h=ei(c/2)),(t!==void 0||e!==void 0)&&i&&l.height&&h>l.height&&(h=l.height,c=ei(Math.floor(h*i))),{width:c,height:h}}function Wc(n,t,e){const i=t||1,s=ei(n.height*i),r=ei(n.width*i);n.height=ei(n.height),n.width=ei(n.width);const o=n.canvas;o.style&&(e||!o.style.height&&!o.style.width)&&(o.style.height=`${n.height}px`,o.style.width=`${n.width}px`);const a=Math.floor(s),l=Math.floor(r);return n.currentDevicePixelRatio!==i||o.height!==a||o.width!==l?(n.currentDevicePixelRatio=i,o.height=a,o.width=l,n.ctx.setTransform(i,0,0,i,0,0),!0):!1}const vm=(function(){let n=!1;try{const t={get passive(){return n=!0,!1}};ic()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return n})();function Xc(n,t){const e=fm(n,t),i=e&&e.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function Ti(n,t,e,i){return{x:n.x+e*(t.x-n.x),y:n.y+e*(t.y-n.y)}}function Mm(n,t,e,i){return{x:n.x+e*(t.x-n.x),y:i==="middle"?e<.5?n.y:t.y:i==="after"?e<1?n.y:t.y:e>0?t.y:n.y}}function bm(n,t,e,i){const s={x:n.cp2x,y:n.cp2y},r={x:t.cp1x,y:t.cp1y},o=Ti(n,s,e),a=Ti(s,r,e),l=Ti(r,t,e),c=Ti(o,a,e),h=Ti(a,l,e);return Ti(c,h,e)}const ym=function(n,t){return{x(e){return n+n+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,i){return e-i},leftForLtr(e,i){return e-i}}},Sm=function(){return{x(n){return n},setWidth(n){},textAlign(n){return n},xPlus(n,t){return n+t},leftForLtr(n,t){return n}}};function hs(n,t,e){return n?ym(t,e):Sm()}function Td(n,t){let e,i;(t==="ltr"||t==="rtl")&&(e=n.canvas.style,i=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),n.prevTextDirection=i)}function Ad(n,t){t!==void 0&&(delete n.prevTextDirection,n.canvas.style.setProperty("direction",t[0],t[1]))}function wd(n){return n==="angle"?{between:nr,compare:Ep,normalize:Ie}:{between:Nn,compare:(t,e)=>t-e,normalize:t=>t}}function Yc({start:n,end:t,count:e,loop:i,style:s}){return{start:n%e,end:t%e,loop:i&&(t-n+1)%e===0,style:s}}function Em(n,t,e){const{property:i,start:s,end:r}=e,{between:o,normalize:a}=wd(i),l=t.length;let{start:c,end:h,loop:u}=n,d,f;if(u){for(c+=l,h+=l,d=0,f=l;d<f&&o(a(t[c%l][i]),s,r);++d)c--,h--;c%=l,h%=l}return h<c&&(h+=l),{start:c,end:h,loop:u,style:n.style}}function Rd(n,t,e){if(!e)return[n];const{property:i,start:s,end:r}=e,o=t.length,{compare:a,between:l,normalize:c}=wd(i),{start:h,end:u,loop:d,style:f}=Em(n,t,e),g=[];let _=!1,m=null,p,b,E;const x=()=>l(s,E,p)&&a(s,E)!==0,T=()=>a(r,p)===0||l(r,E,p),w=()=>_||x(),A=()=>!_||T();for(let C=h,y=h;C<=u;++C)b=t[C%o],!b.skip&&(p=c(b[i]),p!==E&&(_=l(p,s,r),m===null&&w()&&(m=a(p,s)===0?C:y),m!==null&&A()&&(g.push(Yc({start:m,end:C,loop:d,count:o,style:f})),m=null),y=C,E=p));return m!==null&&g.push(Yc({start:m,end:u,loop:d,count:o,style:f})),g}function Cd(n,t){const e=[],i=n.segments;for(let s=0;s<i.length;s++){const r=Rd(i[s],n.points,t);r.length&&e.push(...r)}return e}function Tm(n,t,e,i){let s=0,r=t-1;if(e&&!i)for(;s<t&&!n[s].skip;)s++;for(;s<t&&n[s].skip;)s++;for(s%=t,e&&(r+=s);r>s&&n[r%t].skip;)r--;return r%=t,{start:s,end:r}}function Am(n,t,e,i){const s=n.length,r=[];let o=t,a=n[t],l;for(l=t+1;l<=e;++l){const c=n[l%s];c.skip||c.stop?a.skip||(i=!1,r.push({start:t%s,end:(l-1)%s,loop:i}),t=o=c.stop?l:null):(o=l,a.skip&&(t=l)),a=c}return o!==null&&r.push({start:t%s,end:o%s,loop:i}),r}function wm(n,t){const e=n.points,i=n.options.spanGaps,s=e.length;if(!s)return[];const r=!!n._loop,{start:o,end:a}=Tm(e,s,r,i);if(i===!0)return jc(n,[{start:o,end:a,loop:r}],e,t);const l=a<o?a+s:a,c=!!n._fullLoop&&o===0&&a===s-1;return jc(n,Am(e,o,l,c),e,t)}function jc(n,t,e,i){return!i||!i.setContext||!e?t:Rm(n,t,e,i)}function Rm(n,t,e,i){const s=n._chart.getContext(),r=qc(n.options),{_datasetIndex:o,options:{spanGaps:a}}=n,l=e.length,c=[];let h=r,u=t[0].start,d=u;function f(g,_,m,p){const b=a?-1:1;if(g!==_){for(g+=l;e[g%l].skip;)g-=b;for(;e[_%l].skip;)_+=b;g%l!==_%l&&(c.push({start:g%l,end:_%l,loop:m,style:p}),h=p,u=_%l)}}for(const g of t){u=a?u:g.start;let _=e[u%l],m;for(d=u+1;d<=g.end;d++){const p=e[d%l];m=qc(i.setContext(ui(s,{type:"segment",p0:_,p1:p,p0DataIndex:(d-1)%l,p1DataIndex:d%l,datasetIndex:o}))),Cm(m,h)&&f(u,d-1,g.loop,h),_=p,h=m}u<d-1&&f(u,d-1,g.loop,h)}return c}function qc(n){return{backgroundColor:n.backgroundColor,borderCapStyle:n.borderCapStyle,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderJoinStyle:n.borderJoinStyle,borderWidth:n.borderWidth,borderColor:n.borderColor}}function Cm(n,t){if(!t)return!1;const e=[],i=function(s,r){return Jl(r)?(e.includes(r)||e.push(r),e.indexOf(r)):r};return JSON.stringify(n,i)!==JSON.stringify(t,i)}function br(n,t,e){return n.options.clip?n[e]:t[e]}function Pm(n,t){const{xScale:e,yScale:i}=n;return e&&i?{left:br(e,t,"left"),right:br(e,t,"right"),top:br(i,t,"top"),bottom:br(i,t,"bottom")}:t}function Pd(n,t){const e=t._clip;if(e.disabled)return!1;const i=Pm(t,n.chartArea);return{left:e.left===!1?0:i.left-(e.left===!0?0:e.left),right:e.right===!1?n.width:i.right+(e.right===!0?0:e.right),top:e.top===!1?0:i.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?n.height:i.bottom+(e.bottom===!0?0:e.bottom)}}/*!
 * Chart.js v4.6.1
 * https://www.chartjs.org
 * (c) 2026 Chart.js Contributors
 * Released under the MIT License
 */class Dm{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,s){const r=e.listeners[s],o=e.duration;r.forEach(a=>a({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(i-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=dd.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((i,s)=>{if(!i.running||!i.items.length)return;const r=i.items;let o=r.length-1,a=!1,l;for(;o>=0;--o)l=r[o],l._active?(l._total>i.duration&&(i.duration=l._total),l.tick(t),a=!0):(r[o]=r[r.length-1],r.pop());a&&(s.draw(),this._notify(s,i,t,"progress")),r.length||(i.running=!1,this._notify(s,i,t,"complete"),i.initial=!1),e+=r.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((i,s)=>Math.max(i,s._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const i=e.items;let s=i.length-1;for(;s>=0;--s)i[s].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var Ln=new Dm;const $c="transparent",Lm={boolean(n,t,e){return e>.5?t:n},color(n,t,e){const i=Bc(n||$c),s=i.valid&&Bc(t||$c);return s&&s.valid?s.mix(i,e).hexString():t},number(n,t,e){return n+(t-n)*e}};class Im{constructor(t,e,i,s){const r=e[i];s=Gs([t.to,s,r,t.from]);const o=Gs([t.from,r,s]);this._active=!0,this._fn=t.fn||Lm[t.type||typeof o],this._easing=Zs[t.easing]||Zs.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=o,this._to=s,this._promises=void 0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);const s=this._target[this._prop],r=i-this._start,o=this._duration-r;this._start=i,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=r,this._loop=!!t.loop,this._to=Gs([t.to,e,s,t.from]),this._from=Gs([t.from,s,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,i=this._duration,s=this._prop,r=this._from,o=this._loop,a=this._to;let l;if(this._active=r!==a&&(o||e<i),!this._active){this._target[s]=a,this._notify(!0);return}if(e<0){this._target[s]=r;return}l=e/i%2,l=o&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[s]=this._fn(r,a,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,i)=>{t.push({res:e,rej:i})})}_notify(t){const e=t?"res":"rej",i=this._promises||[];for(let s=0;s<i.length;s++)i[s][e]()}}class Dd{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!Ht(t))return;const e=Object.keys(he.animation),i=this._properties;Object.getOwnPropertyNames(t).forEach(s=>{const r=t[s];if(!Ht(r))return;const o={};for(const a of e)o[a]=r[a];(ce(r.properties)&&r.properties||[s]).forEach(a=>{(a===s||!i.has(a))&&i.set(a,o)})})}_animateOptions(t,e){const i=e.options,s=Um(t,i);if(!s)return[];const r=this._createAnimations(s,i);return i.$shared&&Om(t.options.$animations,i).then(()=>{t.options=i},()=>{}),r}_createAnimations(t,e){const i=this._properties,s=[],r=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let l;for(l=o.length-1;l>=0;--l){const c=o[l];if(c.charAt(0)==="$")continue;if(c==="options"){s.push(...this._animateOptions(t,e));continue}const h=e[c];let u=r[c];const d=i.get(c);if(u)if(d&&u.active()){u.update(d,h,a);continue}else u.cancel();if(!d||!d.duration){t[c]=h;continue}r[c]=u=new Im(d,t,c,h),s.push(u)}return s}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const i=this._createAnimations(t,e);if(i.length)return Ln.add(this._chart,i),!0}}function Om(n,t){const e=[],i=Object.keys(t);for(let s=0;s<i.length;s++){const r=n[i[s]];r&&r.active()&&e.push(r.wait())}return Promise.all(e)}function Um(n,t){if(!t)return;let e=n.options;if(!e){n.options=t;return}return e.$shared&&(n.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function Kc(n,t){const e=n&&n.options||{},i=e.reverse,s=e.min===void 0?t:0,r=e.max===void 0?t:0;return{start:i?r:s,end:i?s:r}}function Fm(n,t,e){if(e===!1)return!1;const i=Kc(n,e),s=Kc(t,e);return{top:s.end,right:i.end,bottom:s.start,left:i.start}}function Nm(n){let t,e,i,s;return Ht(n)?(t=n.top,e=n.right,i=n.bottom,s=n.left):t=e=i=s=n,{top:t,right:e,bottom:i,left:s,disabled:n===!1}}function Ld(n,t){const e=[],i=n._getSortedDatasetMetas(t);let s,r;for(s=0,r=i.length;s<r;++s)e.push(i[s].index);return e}function Zc(n,t,e,i={}){const s=n.keys,r=i.mode==="single";let o,a,l,c;if(t===null)return;let h=!1;for(o=0,a=s.length;o<a;++o){if(l=+s[o],l===e){if(h=!0,i.all)continue;break}c=n.values[l],me(c)&&(r||t===0||yn(t)===yn(c))&&(t+=c)}return!h&&!i.all?0:t}function km(n,t){const{iScale:e,vScale:i}=t,s=e.axis==="x"?"x":"y",r=i.axis==="x"?"x":"y",o=Object.keys(n),a=new Array(o.length);let l,c,h;for(l=0,c=o.length;l<c;++l)h=o[l],a[l]={[s]:h,[r]:n[h]};return a}function qo(n,t){const e=n&&n.options.stacked;return e||e===void 0&&t.stack!==void 0}function Bm(n,t,e){return`${n.id}.${t.id}.${e.stack||e.type}`}function zm(n){const{min:t,max:e,minDefined:i,maxDefined:s}=n.getUserBounds();return{min:i?t:Number.NEGATIVE_INFINITY,max:s?e:Number.POSITIVE_INFINITY}}function Hm(n,t,e){const i=n[t]||(n[t]={});return i[e]||(i[e]={})}function Jc(n,t,e,i){for(const s of t.getMatchingVisibleMetas(i).reverse()){const r=n[s.index];if(e&&r>0||!e&&r<0)return s.index}return null}function Qc(n,t){const{chart:e,_cachedMeta:i}=n,s=e._stacks||(e._stacks={}),{iScale:r,vScale:o,index:a}=i,l=r.axis,c=o.axis,h=Bm(r,o,i),u=t.length;let d;for(let f=0;f<u;++f){const g=t[f],{[l]:_,[c]:m}=g,p=g._stacks||(g._stacks={});d=p[c]=Hm(s,h,_),d[a]=m,d._top=Jc(d,o,!0,i.type),d._bottom=Jc(d,o,!1,i.type);const b=d._visualValues||(d._visualValues={});b[a]=m}}function $o(n,t){const e=n.scales;return Object.keys(e).filter(i=>e[i].axis===t).shift()}function Vm(n,t){return ui(n,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function Gm(n,t,e){return ui(n,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function Cs(n,t){const e=n.controller.index,i=n.vScale&&n.vScale.axis;if(i){t=t||n._parsed;for(const s of t){const r=s._stacks;!r||r[i]===void 0||r[i][e]===void 0||(delete r[i][e],r[i]._visualValues!==void 0&&r[i]._visualValues[e]!==void 0&&delete r[i]._visualValues[e])}}}const Ko=n=>n==="reset"||n==="none",th=(n,t)=>t?n:Object.assign({},n),Wm=(n,t,e)=>n&&!t.hidden&&t._stacked&&{keys:Ld(e,!0),values:null};class pn{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=qo(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&Cs(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,i=this.getDataset(),s=(u,d,f,g)=>u==="x"?d:u==="r"?g:f,r=e.xAxisID=Dt(i.xAxisID,$o(t,"x")),o=e.yAxisID=Dt(i.yAxisID,$o(t,"y")),a=e.rAxisID=Dt(i.rAxisID,$o(t,"r")),l=e.indexAxis,c=e.iAxisID=s(l,r,o,a),h=e.vAxisID=s(l,o,r,a);e.xScale=this.getScaleForId(r),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(c),e.vScale=this.getScaleForId(h)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Fc(this._data,this),t._stacked&&Cs(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if(Ht(e)){const s=this._cachedMeta;this._data=km(e,s)}else if(i!==e){if(i){Fc(i,this);const s=this._cachedMeta;Cs(s),s._parsed=[]}e&&Object.isExtensible(e)&&Rp(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,i=this.getDataset();let s=!1;this._dataCheck();const r=e._stacked;e._stacked=qo(e.vScale,e),e.stack!==i.stack&&(s=!0,Cs(e),e.stack=i.stack),this._resyncElements(t),(s||r!==e._stacked)&&(Qc(this,e._parsed),e._stacked=qo(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:i,_data:s}=this,{iScale:r,_stacked:o}=i,a=r.axis;let l=t===0&&e===s.length?!0:i._sorted,c=t>0&&i._parsed[t-1],h,u,d;if(this._parsing===!1)i._parsed=s,i._sorted=!0,d=s;else{ce(s[t])?d=this.parseArrayData(i,s,t,e):Ht(s[t])?d=this.parseObjectData(i,s,t,e):d=this.parsePrimitiveData(i,s,t,e);const f=()=>u[a]===null||c&&u[a]<c[a];for(h=0;h<e;++h)i._parsed[h+t]=u=d[h],l&&(f()&&(l=!1),c=u);i._sorted=l}o&&Qc(this,d)}parsePrimitiveData(t,e,i,s){const{iScale:r,vScale:o}=t,a=r.axis,l=o.axis,c=r.getLabels(),h=r===o,u=new Array(s);let d,f,g;for(d=0,f=s;d<f;++d)g=d+i,u[d]={[a]:h||r.parse(c[g],g),[l]:o.parse(e[g],g)};return u}parseArrayData(t,e,i,s){const{xScale:r,yScale:o}=t,a=new Array(s);let l,c,h,u;for(l=0,c=s;l<c;++l)h=l+i,u=e[h],a[l]={x:r.parse(u[0],h),y:o.parse(u[1],h)};return a}parseObjectData(t,e,i,s){const{xScale:r,yScale:o}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=new Array(s);let h,u,d,f;for(h=0,u=s;h<u;++h)d=h+i,f=e[d],c[h]={x:r.parse(ai(f,a),d),y:o.parse(ai(f,l),d)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){const s=this.chart,r=this._cachedMeta,o=e[t.axis],a={keys:Ld(s,!0),values:e._stacks[t.axis]._visualValues};return Zc(a,o,r.index,{mode:i})}updateRangeFromParsed(t,e,i,s){const r=i[e.axis];let o=r===null?NaN:r;const a=s&&i._stacks[e.axis];s&&a&&(s.values=a,o=Zc(s,r,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const i=this._cachedMeta,s=i._parsed,r=i._sorted&&t===i.iScale,o=s.length,a=this._getOtherScale(t),l=Wm(e,i,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:h,max:u}=zm(a);let d,f;function g(){f=s[d];const _=f[a.axis];return!me(f[t.axis])||h>_||u<_}for(d=0;d<o&&!(!g()&&(this.updateRangeFromParsed(c,t,f,l),r));++d);if(r){for(d=o-1;d>=0;--d)if(!g()){this.updateRangeFromParsed(c,t,f,l);break}}return c}getAllParsedValues(t){const e=this._cachedMeta._parsed,i=[];let s,r,o;for(s=0,r=e.length;s<r;++s)o=e[s][t.axis],me(o)&&i.push(o);return i}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,i=e.iScale,s=e.vScale,r=this.getParsed(t);return{label:i?""+i.getLabelForValue(r[i.axis]):"",value:s?""+s.getLabelForValue(r[s.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=Nm(Dt(this.options.clip,Fm(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,i=this._cachedMeta,s=i.data||[],r=e.chartArea,o=[],a=this._drawStart||0,l=this._drawCount||s.length-a,c=this.options.drawActiveElementsOnTop;let h;for(i.dataset&&i.dataset.draw(t,r,a,l),h=a;h<a+l;++h){const u=s[h];u.hidden||(u.active&&c?o.push(u):u.draw(t,r))}for(h=0;h<o.length;++h)o[h].draw(t,r)}getStyle(t,e){const i=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){const s=this.getDataset();let r;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];r=o.$context||(o.$context=Gm(this.getContext(),t,o)),r.parsed=this.getParsed(t),r.raw=s.data[t],r.index=r.dataIndex=t}else r=this.$context||(this.$context=Vm(this.chart.getContext(),this.index)),r.dataset=s,r.index=r.datasetIndex=this.index;return r.active=!!e,r.mode=i,r}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){const s=e==="active",r=this._cachedDataOpts,o=t+"-"+e,a=r[o],l=this.enableOptionSharing&&er(i);if(a)return th(a,l);const c=this.chart.config,h=c.datasetElementScopeKeys(this._type,t),u=s?[`${t}Hover`,"hover",t,""]:[t,""],d=c.getOptionScopes(this.getDataset(),h),f=Object.keys(he.elements[t]),g=()=>this.getContext(i,s,e),_=c.resolveNamedOptions(d,f,g,u);return _.$shared&&(_.$shared=l,r[o]=Object.freeze(th(_,l))),_}_resolveAnimations(t,e,i){const s=this.chart,r=this._cachedDataOpts,o=`animation-${e}`,a=r[o];if(a)return a;let l;if(s.options.animation!==!1){const h=this.chart.config,u=h.datasetAnimationScopeKeys(this._type,e),d=h.getOptionScopes(this.getDataset(),u);l=h.createResolver(d,this.getContext(t,i,e))}const c=new Dd(s,l&&l.animations);return l&&l._cacheable&&(r[o]=Object.freeze(c)),c}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Ko(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const i=this.resolveDataElementOptions(t,e),s=this._sharedOptions,r=this.getSharedOptions(i),o=this.includeOptions(e,r)||r!==s;return this.updateSharedOptions(r,e,i),{sharedOptions:r,includeOptions:o}}updateElement(t,e,i,s){Ko(s)?Object.assign(t,i):this._resolveAnimations(e,s).update(t,i)}updateSharedOptions(t,e,i){t&&!Ko(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,s){t.active=s;const r=this.getStyle(e,s);this._resolveAnimations(e,i,s).update(t,{options:!s&&this.getSharedOptions(r)||r})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,i=this._cachedMeta.data;for(const[a,l,c]of this._syncList)this[a](l,c);this._syncList=[];const s=i.length,r=e.length,o=Math.min(r,s);o&&this.parse(0,o),r>s?this._insertElements(s,r-s,t):r<s&&this._removeElements(r,s-r)}_insertElements(t,e,i=!0){const s=this._cachedMeta,r=s.data,o=t+e;let a;const l=c=>{for(c.length+=e,a=c.length-1;a>=o;a--)c[a]=c[a-e]};for(l(r),a=t;a<o;++a)r[a]=new this.dataElementType;this._parsing&&l(s._parsed),this.parse(t,e),i&&this.updateElements(r,t,e,"reset")}updateElements(t,e,i,s){}_removeElements(t,e){const i=this._cachedMeta;if(this._parsing){const s=i._parsed.splice(t,e);i._stacked&&Cs(i,s)}i.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,i,s]=t;this[e](i,s)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}et(pn,"defaults",{}),et(pn,"datasetElementType",null),et(pn,"dataElementType",null);function Xm(n,t){if(!n._cache.$bar){const e=n.getMatchingVisibleMetas(t);let i=[];for(let s=0,r=e.length;s<r;s++)i=i.concat(e[s].controller.getAllParsedValues(n));n._cache.$bar=ud(i.sort((s,r)=>s-r))}return n._cache.$bar}function Ym(n){const t=n.iScale,e=Xm(t,n.type);let i=t._length,s,r,o,a;const l=()=>{o===32767||o===-32768||(er(a)&&(i=Math.min(i,Math.abs(o-a)||i)),a=o)};for(s=0,r=e.length;s<r;++s)o=t.getPixelForValue(e[s]),l();for(a=void 0,s=0,r=t.ticks.length;s<r;++s)o=t.getPixelForTick(s),l();return i}function jm(n,t,e,i){const s=e.barThickness;let r,o;return zt(s)?(r=t.min*e.categoryPercentage,o=e.barPercentage):(r=s*i,o=1),{chunk:r/i,ratio:o,start:t.pixels[n]-r/2}}function qm(n,t,e,i){const s=t.pixels,r=s[n];let o=n>0?s[n-1]:null,a=n<s.length-1?s[n+1]:null;const l=e.categoryPercentage;o===null&&(o=r-(a===null?t.end-t.start:a-r)),a===null&&(a=r+r-o);const c=r-(r-Math.min(o,a))/2*l;return{chunk:Math.abs(a-o)/2*l/i,ratio:e.barPercentage,start:c}}function $m(n,t,e,i){const s=e.parse(n[0],i),r=e.parse(n[1],i),o=Math.min(s,r),a=Math.max(s,r);let l=o,c=a;Math.abs(o)>Math.abs(a)&&(l=a,c=o),t[e.axis]=c,t._custom={barStart:l,barEnd:c,start:s,end:r,min:o,max:a}}function Id(n,t,e,i){return ce(n)?$m(n,t,e,i):t[e.axis]=e.parse(n,i),t}function eh(n,t,e,i){const s=n.iScale,r=n.vScale,o=s.getLabels(),a=s===r,l=[];let c,h,u,d;for(c=e,h=e+i;c<h;++c)d=t[c],u={},u[s.axis]=a||s.parse(o[c],c),l.push(Id(d,u,r,c));return l}function Zo(n){return n&&n.barStart!==void 0&&n.barEnd!==void 0}function Km(n,t,e){return n!==0?yn(n):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function Zm(n){let t,e,i,s,r;return n.horizontal?(t=n.base>n.x,e="left",i="right"):(t=n.base<n.y,e="bottom",i="top"),t?(s="end",r="start"):(s="start",r="end"),{start:e,end:i,reverse:t,top:s,bottom:r}}function Jm(n,t,e,i){let s=t.borderSkipped;const r={};if(!s){n.borderSkipped=r;return}if(s===!0){n.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:a,reverse:l,top:c,bottom:h}=Zm(n);s==="middle"&&e&&(n.enableBorderRadius=!0,(e._top||0)===i?s=c:(e._bottom||0)===i?s=h:(r[nh(h,o,a,l)]=!0,s=c)),r[nh(s,o,a,l)]=!0,n.borderSkipped=r}function nh(n,t,e,i){return i?(n=Qm(n,t,e),n=ih(n,e,t)):n=ih(n,t,e),n}function Qm(n,t,e){return n===t?e:n===e?t:n}function ih(n,t,e){return n==="start"?t:n==="end"?e:n}function tg(n,{inflateAmount:t},e){n.inflateAmount=t==="auto"?e===1?.33:0:t}class no extends pn{parsePrimitiveData(t,e,i,s){return eh(t,e,i,s)}parseArrayData(t,e,i,s){return eh(t,e,i,s)}parseObjectData(t,e,i,s){const{iScale:r,vScale:o}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=r.axis==="x"?a:l,h=o.axis==="x"?a:l,u=[];let d,f,g,_;for(d=i,f=i+s;d<f;++d)_=e[d],g={},g[r.axis]=r.parse(ai(_,c),d),u.push(Id(ai(_,h),g,o,d));return u}updateRangeFromParsed(t,e,i,s){super.updateRangeFromParsed(t,e,i,s);const r=i._custom;r&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,r.min),t.max=Math.max(t.max,r.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:i,vScale:s}=e,r=this.getParsed(t),o=r._custom,a=Zo(o)?"["+o.start+", "+o.end+"]":""+s.getLabelForValue(r[s.axis]);return{label:""+i.getLabelForValue(r[i.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,i,s){const r=s==="reset",{index:o,_cachedMeta:{vScale:a}}=this,l=a.getBasePixel(),c=a.isHorizontal(),h=this._getRuler(),{sharedOptions:u,includeOptions:d}=this._getSharedOptions(e,s);for(let f=e;f<e+i;f++){const g=this.getParsed(f),_=r||zt(g[a.axis])?{base:l,head:l}:this._calculateBarValuePixels(f),m=this._calculateBarIndexPixels(f,h),p=(g._stacks||{})[a.axis],b={horizontal:c,base:_.base,enableBorderRadius:!p||Zo(g._custom)||o===p._top||o===p._bottom,x:c?_.head:m.center,y:c?m.center:_.head,height:c?m.size:Math.abs(_.size),width:c?Math.abs(_.size):m.size};d&&(b.options=u||this.resolveDataElementOptions(f,t[f].active?"active":s));const E=b.options||t[f].options;Jm(b,E,p,o),tg(b,E,h.ratio),this.updateElement(t[f],f,b,s)}}_getStacks(t,e){const{iScale:i}=this._cachedMeta,s=i.getMatchingVisibleMetas(this._type).filter(h=>h.controller.options.grouped),r=i.options.stacked,o=[],a=this._cachedMeta.controller.getParsed(e),l=a&&a[i.axis],c=h=>{const u=h._parsed.find(f=>f[i.axis]===l),d=u&&u[h.vScale.axis];if(zt(d)||isNaN(d))return!0};for(const h of s)if(!(e!==void 0&&c(h))&&((r===!1||o.indexOf(h.stack)===-1||r===void 0&&h.stack===void 0)&&o.push(h.stack),h.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(i=>t[i].axis===e).shift()}_getAxis(){const t={},e=this.getFirstScaleIdForIndexAxis();for(const i of this.chart.data.datasets)t[Dt(this.chart.options.indexAxis==="x"?i.xAxisID:i.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,i){const s=this._getStacks(t,i),r=e!==void 0?s.indexOf(e):-1;return r===-1?s.length-1:r}_getRuler(){const t=this.options,e=this._cachedMeta,i=e.iScale,s=[];let r,o;for(r=0,o=e.data.length;r<o;++r)s.push(i.getPixelForValue(this.getParsed(r)[i.axis],r));const a=t.barThickness;return{min:a||Ym(e),pixels:s,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:i,index:s},options:{base:r,minBarLength:o}}=this,a=r||0,l=this.getParsed(t),c=l._custom,h=Zo(c);let u=l[e.axis],d=0,f=i?this.applyStack(e,l,i):u,g,_;f!==u&&(d=f-u,f=u),h&&(u=c.barStart,f=c.barEnd-c.barStart,u!==0&&yn(u)!==yn(c.barEnd)&&(d=0),d+=u);const m=!zt(r)&&!h?r:d;let p=e.getPixelForValue(m);if(this.chart.getDataVisibility(t)?g=e.getPixelForValue(d+f):g=p,_=g-p,Math.abs(_)<o){_=Km(_,e,a)*o,u===a&&(p-=_/2);const b=e.getPixelForDecimal(0),E=e.getPixelForDecimal(1),x=Math.min(b,E),T=Math.max(b,E);p=Math.max(Math.min(p,T),x),g=p+_,i&&!h&&(l._stacks[e.axis]._visualValues[s]=e.getValueForPixel(g)-e.getValueForPixel(p))}if(p===e.getPixelForValue(a)){const b=yn(_)*e.getLineWidthForValue(a)/2;p+=b,_-=b}return{size:_,base:p,head:g,center:g+_/2}}_calculateBarIndexPixels(t,e){const i=e.scale,s=this.options,r=s.skipNull,o=Dt(s.maxBarThickness,1/0);let a,l;const c=this._getAxisCount();if(e.grouped){const h=r?this._getStackCount(t):e.stackCount,u=s.barThickness==="flex"?qm(t,e,s,h*c):jm(t,e,s,h*c),d=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,f=this._getAxis().indexOf(Dt(d,this.getFirstScaleIdForIndexAxis())),g=this._getStackIndex(this.index,this._cachedMeta.stack,r?t:void 0)+f;a=u.start+u.chunk*g+u.chunk/2,l=Math.min(o,u.chunk*u.ratio)}else a=i.getPixelForValue(this.getParsed(t)[i.axis],t),l=Math.min(o,e.min*e.ratio);return{base:a-l/2,head:a+l/2,center:a,size:l}}draw(){const t=this._cachedMeta,e=t.vScale,i=t.data,s=i.length;let r=0;for(;r<s;++r)this.getParsed(r)[e.axis]!==null&&!i[r].hidden&&i[r].draw(this._ctx)}}et(no,"id","bar"),et(no,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),et(no,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class io extends pn{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,i,s){const r=super.parsePrimitiveData(t,e,i,s);for(let o=0;o<r.length;o++)r[o]._custom=this.resolveDataElementOptions(o+i).radius;return r}parseArrayData(t,e,i,s){const r=super.parseArrayData(t,e,i,s);for(let o=0;o<r.length;o++){const a=e[i+o];r[o]._custom=Dt(a[2],this.resolveDataElementOptions(o+i).radius)}return r}parseObjectData(t,e,i,s){const r=super.parseObjectData(t,e,i,s);for(let o=0;o<r.length;o++){const a=e[i+o];r[o]._custom=Dt(a&&a.r&&+a.r,this.resolveDataElementOptions(o+i).radius)}return r}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let i=t.length-1;i>=0;--i)e=Math.max(e,t[i].size(this.resolveDataElementOptions(i))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:s,yScale:r}=e,o=this.getParsed(t),a=s.getLabelForValue(o.x),l=r.getLabelForValue(o.y),c=o._custom;return{label:i[t]||"",value:"("+a+", "+l+(c?", "+c:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,i,s){const r=s==="reset",{iScale:o,vScale:a}=this._cachedMeta,{sharedOptions:l,includeOptions:c}=this._getSharedOptions(e,s),h=o.axis,u=a.axis;for(let d=e;d<e+i;d++){const f=t[d],g=!r&&this.getParsed(d),_={},m=_[h]=r?o.getPixelForDecimal(.5):o.getPixelForValue(g[h]),p=_[u]=r?a.getBasePixel():a.getPixelForValue(g[u]);_.skip=isNaN(m)||isNaN(p),c&&(_.options=l||this.resolveDataElementOptions(d,f.active?"active":s),r&&(_.options.radius=0)),this.updateElement(f,d,_,s)}}resolveDataElementOptions(t,e){const i=this.getParsed(t);let s=super.resolveDataElementOptions(t,e);s.$shared&&(s=Object.assign({},s,{$shared:!1}));const r=s.radius;return e!=="active"&&(s.radius=0),s.radius+=Dt(i&&i._custom,r),s}}et(io,"id","bubble"),et(io,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),et(io,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function eg(n,t,e){let i=1,s=1,r=0,o=0;if(t<ee){const a=n,l=a+t,c=Math.cos(a),h=Math.sin(a),u=Math.cos(l),d=Math.sin(l),f=(E,x,T)=>nr(E,a,l,!0)?1:Math.max(x,x*e,T,T*e),g=(E,x,T)=>nr(E,a,l,!0)?-1:Math.min(x,x*e,T,T*e),_=f(0,c,u),m=f(_e,h,d),p=g(Kt,c,u),b=g(Kt+_e,h,d);i=(_-p)/2,s=(m-b)/2,r=-(_+p)/2,o=-(m+b)/2}return{ratioX:i,ratioY:s,offsetX:r,offsetY:o}}class Pi extends pn{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const i=this.getDataset().data,s=this._cachedMeta;if(this._parsing===!1)s._parsed=i;else{let r=l=>+i[l];if(Ht(i[t])){const{key:l="value"}=this._parsing;r=c=>+ai(i[c],l)}let o,a;for(o=t,a=t+e;o<a;++o)s._parsed[o]=r(o)}}_getRotation(){return dn(this.options.rotation-90)}_getCircumference(){return dn(this.options.circumference)}_getRotationExtents(){let t=ee,e=-ee;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)&&this.chart.getDatasetMeta(i).type===this._type){const s=this.chart.getDatasetMeta(i).controller,r=s._getRotation(),o=s._getCircumference();t=Math.min(t,r),e=Math.max(e,r+o)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:i}=e,s=this._cachedMeta,r=s.data,o=this.getMaxBorderWidth()+this.getMaxOffset(r)+this.options.spacing,a=Math.max((Math.min(i.width,i.height)-o)/2,0),l=Math.min(fp(this.options.cutout,a),1),c=this._getRingWeight(this.index),{circumference:h,rotation:u}=this._getRotationExtents(),{ratioX:d,ratioY:f,offsetX:g,offsetY:_}=eg(u,h,l),m=(i.width-o)/d,p=(i.height-o)/f,b=Math.max(Math.min(m,p)/2,0),E=od(this.options.radius,b),x=Math.max(E*l,0),T=(E-x)/this._getVisibleDatasetWeightTotal();this.offsetX=g*E,this.offsetY=_*E,s.total=this.calculateTotal(),this.outerRadius=E-T*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-T*c,0),this.updateElements(r,0,r.length,t)}_circumference(t,e){const i=this.options,s=this._cachedMeta,r=this._getCircumference();return e&&i.animation.animateRotate||!this.chart.getDataVisibility(t)||s._parsed[t]===null||s.data[t].hidden?0:this.calculateCircumference(s._parsed[t]*r/ee)}updateElements(t,e,i,s){const r=s==="reset",o=this.chart,a=o.chartArea,c=o.options.animation,h=(a.left+a.right)/2,u=(a.top+a.bottom)/2,d=r&&c.animateScale,f=d?0:this.innerRadius,g=d?0:this.outerRadius,{sharedOptions:_,includeOptions:m}=this._getSharedOptions(e,s);let p=this._getRotation(),b;for(b=0;b<e;++b)p+=this._circumference(b,r);for(b=e;b<e+i;++b){const E=this._circumference(b,r),x=t[b],T={x:h+this.offsetX,y:u+this.offsetY,startAngle:p,endAngle:p+E,circumference:E,outerRadius:g,innerRadius:f};m&&(T.options=_||this.resolveDataElementOptions(b,x.active?"active":s)),p+=E,this.updateElement(x,b,T,s)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let i=0,s;for(s=0;s<e.length;s++){const r=t._parsed[s];r!==null&&!isNaN(r)&&this.chart.getDataVisibility(s)&&!e[s].hidden&&(i+=Math.abs(r))}return i}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?ee*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,s=i.data.labels||[],r=cr(e._parsed[t],i.options.locale);return{label:s[t]||"",value:r}}getMaxBorderWidth(t){let e=0;const i=this.chart;let s,r,o,a,l;if(!t){for(s=0,r=i.data.datasets.length;s<r;++s)if(i.isDatasetVisible(s)){o=i.getDatasetMeta(s),t=o.data,a=o.controller;break}}if(!t)return 0;for(s=0,r=t.length;s<r;++s)l=a.resolveDataElementOptions(s),l.borderAlign!=="inner"&&(e=Math.max(e,l.borderWidth||0,l.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let i=0,s=t.length;i<s;++i){const r=this.resolveDataElementOptions(i);e=Math.max(e,r.offset||0,r.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(e+=this._getRingWeight(i));return e}_getRingWeight(t){return Math.max(Dt(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}et(Pi,"id","doughnut"),et(Pi,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,spacingMode:"angular",indexAxis:"r"}),et(Pi,"descriptors",{_scriptable:t=>t!=="spacing"&&t!=="spacingMode",_indexable:t=>t!=="spacing"&&t!=="spacingMode"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),et(Pi,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data,{labels:{pointStyle:i,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=t.legend.options;return e.labels.length&&e.datasets.length?e.labels.map((l,c)=>{const u=t.getDatasetMeta(0).controller.getStyle(c);return{text:l,fillStyle:u.backgroundColor,fontColor:r,hidden:!t.getDataVisibility(c),lineDash:u.borderDash,lineDashOffset:u.borderDashOffset,lineJoin:u.borderJoinStyle,lineWidth:u.borderWidth,strokeStyle:u.borderColor,textAlign:s,pointStyle:i,borderRadius:o&&(a||u.borderRadius),index:c}}):[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}}}});class so extends pn{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:i,data:s=[],_dataset:r}=e,o=this.chart._animationsDisabled;let{start:a,count:l}=pd(e,s,o);this._drawStart=a,this._drawCount=l,md(e)&&(a=0,l=s.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!r._decimated,i.points=s;const c=this.resolveDatasetElementOptions(t);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(i,void 0,{animated:!o,options:c},t),this.updateElements(s,a,l,t)}updateElements(t,e,i,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:h,includeOptions:u}=this._getSharedOptions(e,s),d=o.axis,f=a.axis,{spanGaps:g,segment:_}=this.options,m=gs(g)?g:Number.POSITIVE_INFINITY,p=this.chart._animationsDisabled||r||s==="none",b=e+i,E=t.length;let x=e>0&&this.getParsed(e-1);for(let T=0;T<E;++T){const w=t[T],A=p?w:{};if(T<e||T>=b){A.skip=!0;continue}const C=this.getParsed(T),y=zt(C[f]),v=A[d]=o.getPixelForValue(C[d],T),P=A[f]=r||y?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,C,l):C[f],T);A.skip=isNaN(v)||isNaN(P)||y,A.stop=T>0&&Math.abs(C[d]-x[d])>m,_&&(A.parsed=C,A.raw=c.data[T]),u&&(A.options=h||this.resolveDataElementOptions(T,w.active?"active":s)),p||this.updateElement(w,T,A,s),x=C}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,s=t.data||[];if(!s.length)return i;const r=s[0].size(this.resolveDataElementOptions(0)),o=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(i,r,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}et(so,"id","line"),et(so,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),et(so,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class Qs extends pn{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,s=i.data.labels||[],r=cr(e._parsed[t].r,i.options.locale);return{label:s[t]||"",value:r}}parseObjectData(t,e,i,s){return Sd.bind(this)(t,e,i,s)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((i,s)=>{const r=this.getParsed(s).r;!isNaN(r)&&this.chart.getDataVisibility(s)&&(r<e.min&&(e.min=r),r>e.max&&(e.max=r))}),e}_updateRadius(){const t=this.chart,e=t.chartArea,i=t.options,s=Math.min(e.right-e.left,e.bottom-e.top),r=Math.max(s/2,0),o=Math.max(i.cutoutPercentage?r/100*i.cutoutPercentage:1,0),a=(r-o)/t.getVisibleDatasetCount();this.outerRadius=r-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,e,i,s){const r=s==="reset",o=this.chart,l=o.options.animation,c=this._cachedMeta.rScale,h=c.xCenter,u=c.yCenter,d=c.getIndexAngle(0)-.5*Kt;let f=d,g;const _=360/this.countVisibleElements();for(g=0;g<e;++g)f+=this._computeAngle(g,s,_);for(g=e;g<e+i;g++){const m=t[g];let p=f,b=f+this._computeAngle(g,s,_),E=o.getDataVisibility(g)?c.getDistanceFromCenterForValue(this.getParsed(g).r):0;f=b,r&&(l.animateScale&&(E=0),l.animateRotate&&(p=b=d));const x={x:h,y:u,innerRadius:0,outerRadius:E,startAngle:p,endAngle:b,options:this.resolveDataElementOptions(g,m.active?"active":s)};x.options.spacing===0&&(x.options.spacing=this.options.spacing),x.options.spacingMode==="angular"&&(x.options.spacingMode=this.options.spacingMode),this.updateElement(m,g,x,s)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach((i,s)=>{!isNaN(this.getParsed(s).r)&&this.chart.getDataVisibility(s)&&e++}),e}_computeAngle(t,e,i){return this.chart.getDataVisibility(t)?dn(this.resolveDataElementOptions(t,e).angle||i):0}}et(Qs,"id","polarArea"),et(Qs,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0,spacing:0,spacingMode:"proportional"}),et(Qs,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:i,color:s}}=t.legend.options;return e.labels.map((r,o)=>{const l=t.getDatasetMeta(0).controller.getStyle(o);return{text:r,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:s,lineWidth:l.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(o),index:o}})}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class Wa extends Pi{}et(Wa,"id","pie"),et(Wa,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class ro extends pn{getLabelAndValue(t){const e=this._cachedMeta.vScale,i=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(i[e.axis])}}parseObjectData(t,e,i,s){return Sd.bind(this)(t,e,i,s)}update(t){const e=this._cachedMeta,i=e.dataset,s=e.data||[],r=e.iScale.getLabels();if(i.points=s,t!=="resize"){const o=this.resolveDatasetElementOptions(t);this.options.showLine||(o.borderWidth=0);const a={_loop:!0,_fullLoop:r.length===s.length,options:o};this.updateElement(i,void 0,a,t)}this.updateElements(s,0,s.length,t)}updateElements(t,e,i,s){const r=this._cachedMeta.rScale,o=s==="reset";for(let a=e;a<e+i;a++){const l=t[a],c=this.resolveDataElementOptions(a,l.active?"active":s),h=r.getPointPositionForValue(a,this.getParsed(a).r),u=o?r.xCenter:h.x,d=o?r.yCenter:h.y,f={x:u,y:d,angle:h.angle,skip:isNaN(u)||isNaN(d),options:c};this.updateElement(l,a,f,s)}}}et(ro,"id","radar"),et(ro,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),et(ro,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class oo extends pn{getLabelAndValue(t){const e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:s,yScale:r}=e,o=this.getParsed(t),a=s.getLabelForValue(o.x),l=r.getLabelForValue(o.y);return{label:i[t]||"",value:"("+a+", "+l+")"}}update(t){const e=this._cachedMeta,{data:i=[]}=e,s=this.chart._animationsDisabled;let{start:r,count:o}=pd(e,i,s);if(this._drawStart=r,this._drawCount=o,md(e)&&(r=0,o=i.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:l}=e;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!l._decimated,a.points=i;const c=this.resolveDatasetElementOptions(t);c.segment=this.options.segment,this.updateElement(a,void 0,{animated:!s,options:c},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(i,r,o,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,i,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,h=this.resolveDataElementOptions(e,s),u=this.getSharedOptions(h),d=this.includeOptions(s,u),f=o.axis,g=a.axis,{spanGaps:_,segment:m}=this.options,p=gs(_)?_:Number.POSITIVE_INFINITY,b=this.chart._animationsDisabled||r||s==="none";let E=e>0&&this.getParsed(e-1);for(let x=e;x<e+i;++x){const T=t[x],w=this.getParsed(x),A=b?T:{},C=zt(w[g]),y=A[f]=o.getPixelForValue(w[f],x),v=A[g]=r||C?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,w,l):w[g],x);A.skip=isNaN(y)||isNaN(v)||C,A.stop=x>0&&Math.abs(w[f]-E[f])>p,m&&(A.parsed=w,A.raw=c.data[x]),d&&(A.options=u||this.resolveDataElementOptions(x,T.active?"active":s)),b||this.updateElement(T,x,A,s),E=w}this.updateSharedOptions(u,s,h)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let a=0;for(let l=e.length-1;l>=0;--l)a=Math.max(a,e[l].size(this.resolveDataElementOptions(l))/2);return a>0&&a}const i=t.dataset,s=i.options&&i.options.borderWidth||0;if(!e.length)return s;const r=e[0].size(this.resolveDataElementOptions(0)),o=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(s,r,o)/2}}et(oo,"id","scatter"),et(oo,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),et(oo,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var ng=Object.freeze({__proto__:null,BarController:no,BubbleController:io,DoughnutController:Pi,LineController:so,PieController:Wa,PolarAreaController:Qs,RadarController:ro,ScatterController:oo});function gi(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class rc{constructor(t){et(this,"options");this.options=t||{}}static override(t){Object.assign(rc.prototype,t)}init(){}formats(){return gi()}parse(){return gi()}format(){return gi()}add(){return gi()}diff(){return gi()}startOf(){return gi()}endOf(){return gi()}}var ig={_date:rc};function sg(n,t,e,i){const{controller:s,data:r,_sorted:o}=n,a=s._cachedMeta.iScale,l=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null;if(a&&t===a.axis&&t!=="r"&&o&&r.length){const c=a._reversePixels?Ap:kn;if(i){if(s._sharedOptions){const h=r[0],u=typeof h.getRange=="function"&&h.getRange(t);if(u){const d=c(r,t,e-u),f=c(r,t,e+u);return{lo:d.lo,hi:f.hi}}}}else{const h=c(r,t,e);if(l){const{vScale:u}=s._cachedMeta,{_parsed:d}=n,f=d.slice(0,h.lo+1).reverse().findIndex(_=>!zt(_[u.axis]));h.lo-=Math.max(0,f);const g=d.slice(h.hi).findIndex(_=>!zt(_[u.axis]));h.hi+=Math.max(0,g)}return h}}return{lo:0,hi:r.length-1}}function Fo(n,t,e,i,s){const r=n.getSortedVisibleDatasetMetas(),o=e[t];for(let a=0,l=r.length;a<l;++a){const{index:c,data:h}=r[a],{lo:u,hi:d}=sg(r[a],t,o,s);for(let f=u;f<=d;++f){const g=h[f];g.skip||i(g,c,f)}}}function rg(n){const t=n.indexOf("x")!==-1,e=n.indexOf("y")!==-1;return function(i,s){const r=t?Math.abs(i.x-s.x):0,o=e?Math.abs(i.y-s.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function Jo(n,t,e,i,s){const r=[];return!s&&!n.isPointInArea(t)||Fo(n,e,t,function(a,l,c){!s&&!Bn(a,n.chartArea,0)||a.inRange(t.x,t.y,i)&&r.push({element:a,datasetIndex:l,index:c})},!0),r}function og(n,t,e,i){let s=[];function r(o,a,l){const{startAngle:c,endAngle:h}=o.getProps(["startAngle","endAngle"],i),{angle:u}=cd(o,{x:t.x,y:t.y});nr(u,c,h)&&s.push({element:o,datasetIndex:a,index:l})}return Fo(n,e,t,r),s}function ag(n,t,e,i,s,r){let o=[];const a=rg(e);let l=Number.POSITIVE_INFINITY;function c(h,u,d){const f=h.inRange(t.x,t.y,s);if(i&&!f)return;const g=h.getCenterPoint(s);if(!(!!r||n.isPointInArea(g))&&!f)return;const m=a(t,g);m<l?(o=[{element:h,datasetIndex:u,index:d}],l=m):m===l&&o.push({element:h,datasetIndex:u,index:d})}return Fo(n,e,t,c),o}function Qo(n,t,e,i,s,r){return!r&&!n.isPointInArea(t)?[]:e==="r"&&!i?og(n,t,e,s):ag(n,t,e,i,s,r)}function sh(n,t,e,i,s){const r=[],o=e==="x"?"inXRange":"inYRange";let a=!1;return Fo(n,e,t,(l,c,h)=>{l[o]&&l[o](t[e],s)&&(r.push({element:l,datasetIndex:c,index:h}),a=a||l.inRange(t.x,t.y,s))}),i&&!a?[]:r}var lg={modes:{index(n,t,e,i){const s=Ei(t,n),r=e.axis||"x",o=e.includeInvisible||!1,a=e.intersect?Jo(n,s,r,i,o):Qo(n,s,r,!1,i,o),l=[];return a.length?(n.getSortedVisibleDatasetMetas().forEach(c=>{const h=a[0].index,u=c.data[h];u&&!u.skip&&l.push({element:u,datasetIndex:c.index,index:h})}),l):[]},dataset(n,t,e,i){const s=Ei(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;let a=e.intersect?Jo(n,s,r,i,o):Qo(n,s,r,!1,i,o);if(a.length>0){const l=a[0].datasetIndex,c=n.getDatasetMeta(l).data;a=[];for(let h=0;h<c.length;++h)a.push({element:c[h],datasetIndex:l,index:h})}return a},point(n,t,e,i){const s=Ei(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return Jo(n,s,r,i,o)},nearest(n,t,e,i){const s=Ei(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return Qo(n,s,r,e.intersect,i,o)},x(n,t,e,i){const s=Ei(t,n);return sh(n,s,"x",e.intersect,i)},y(n,t,e,i){const s=Ei(t,n);return sh(n,s,"y",e.intersect,i)}}};const Od=["left","top","right","bottom"];function Ps(n,t){return n.filter(e=>e.pos===t)}function rh(n,t){return n.filter(e=>Od.indexOf(e.pos)===-1&&e.box.axis===t)}function Ds(n,t){return n.sort((e,i)=>{const s=t?i:e,r=t?e:i;return s.weight===r.weight?s.index-r.index:s.weight-r.weight})}function cg(n){const t=[];let e,i,s,r,o,a;for(e=0,i=(n||[]).length;e<i;++e)s=n[e],{position:r,options:{stack:o,stackWeight:a=1}}=s,t.push({index:e,box:s,pos:r,horizontal:s.isHorizontal(),weight:s.weight,stack:o&&r+o,stackWeight:a});return t}function hg(n){const t={};for(const e of n){const{stack:i,pos:s,stackWeight:r}=e;if(!i||!Od.includes(s))continue;const o=t[i]||(t[i]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return t}function ug(n,t){const e=hg(n),{vBoxMaxWidth:i,hBoxMaxHeight:s}=t;let r,o,a;for(r=0,o=n.length;r<o;++r){a=n[r];const{fullSize:l}=a.box,c=e[a.stack],h=c&&a.stackWeight/c.weight;a.horizontal?(a.width=h?h*i:l&&t.availableWidth,a.height=s):(a.width=i,a.height=h?h*s:l&&t.availableHeight)}return e}function dg(n){const t=cg(n),e=Ds(t.filter(c=>c.box.fullSize),!0),i=Ds(Ps(t,"left"),!0),s=Ds(Ps(t,"right")),r=Ds(Ps(t,"top"),!0),o=Ds(Ps(t,"bottom")),a=rh(t,"x"),l=rh(t,"y");return{fullSize:e,leftAndTop:i.concat(r),rightAndBottom:s.concat(l).concat(o).concat(a),chartArea:Ps(t,"chartArea"),vertical:i.concat(s).concat(l),horizontal:r.concat(o).concat(a)}}function oh(n,t,e,i){return Math.max(n[e],t[e])+Math.max(n[i],t[i])}function Ud(n,t){n.top=Math.max(n.top,t.top),n.left=Math.max(n.left,t.left),n.bottom=Math.max(n.bottom,t.bottom),n.right=Math.max(n.right,t.right)}function fg(n,t,e,i){const{pos:s,box:r}=e,o=n.maxPadding;if(!Ht(s)){e.size&&(n[s]-=e.size);const u=i[e.stack]||{size:0,count:1};u.size=Math.max(u.size,e.horizontal?r.height:r.width),e.size=u.size/u.count,n[s]+=e.size}r.getPadding&&Ud(o,r.getPadding());const a=Math.max(0,t.outerWidth-oh(o,n,"left","right")),l=Math.max(0,t.outerHeight-oh(o,n,"top","bottom")),c=a!==n.w,h=l!==n.h;return n.w=a,n.h=l,e.horizontal?{same:c,other:h}:{same:h,other:c}}function pg(n){const t=n.maxPadding;function e(i){const s=Math.max(t[i]-n[i],0);return n[i]+=s,s}n.y+=e("top"),n.x+=e("left"),e("right"),e("bottom")}function mg(n,t){const e=t.maxPadding;function i(s){const r={left:0,top:0,right:0,bottom:0};return s.forEach(o=>{r[o]=Math.max(t[o],e[o])}),r}return i(n?["left","right"]:["top","bottom"])}function Ws(n,t,e,i){const s=[];let r,o,a,l,c,h;for(r=0,o=n.length,c=0;r<o;++r){a=n[r],l=a.box,l.update(a.width||t.w,a.height||t.h,mg(a.horizontal,t));const{same:u,other:d}=fg(t,e,a,i);c|=u&&s.length,h=h||d,l.fullSize||s.push(a)}return c&&Ws(s,t,e,i)||h}function yr(n,t,e,i,s){n.top=e,n.left=t,n.right=t+i,n.bottom=e+s,n.width=i,n.height=s}function ah(n,t,e,i){const s=e.padding;let{x:r,y:o}=t;for(const a of n){const l=a.box,c=i[a.stack]||{placed:0,weight:1},h=a.stackWeight/c.weight||1;if(a.horizontal){const u=t.w*h,d=c.size||l.height;er(c.start)&&(o=c.start),l.fullSize?yr(l,s.left,o,e.outerWidth-s.right-s.left,d):yr(l,t.left+c.placed,o,u,d),c.start=o,c.placed+=u,o=l.bottom}else{const u=t.h*h,d=c.size||l.width;er(c.start)&&(r=c.start),l.fullSize?yr(l,r,s.top,d,e.outerHeight-s.bottom-s.top):yr(l,r,t.top+c.placed,d,u),c.start=r,c.placed+=u,r=l.right}}t.x=r,t.y=o}var Oe={addBox(n,t){n.boxes||(n.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},n.boxes.push(t)},removeBox(n,t){const e=n.boxes?n.boxes.indexOf(t):-1;e!==-1&&n.boxes.splice(e,1)},configure(n,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(n,t,e,i){if(!n)return;const s=Ue(n.options.layout.padding),r=Math.max(t-s.width,0),o=Math.max(e-s.height,0),a=dg(n.boxes),l=a.vertical,c=a.horizontal;te(n.boxes,_=>{typeof _.beforeLayout=="function"&&_.beforeLayout()});const h=l.reduce((_,m)=>m.box.options&&m.box.options.display===!1?_:_+1,0)||1,u=Object.freeze({outerWidth:t,outerHeight:e,padding:s,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/h,hBoxMaxHeight:o/2}),d=Object.assign({},s);Ud(d,Ue(i));const f=Object.assign({maxPadding:d,w:r,h:o,x:s.left,y:s.top},s),g=ug(l.concat(c),u);Ws(a.fullSize,f,u,g),Ws(l,f,u,g),Ws(c,f,u,g)&&Ws(l,f,u,g),pg(f),ah(a.leftAndTop,f,u,g),f.x+=f.w,f.y+=f.h,ah(a.rightAndBottom,f,u,g),n.chartArea={left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},te(a.chartArea,_=>{const m=_.box;Object.assign(m,n.chartArea),m.update(f.w,f.h,{left:0,top:0,right:0,bottom:0})})}};class Fd{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,s){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,s?Math.floor(e/s):i)}}isAttached(t){return!0}updateConfig(t){}}class gg extends Fd{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const ao="$chartjs",_g={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},lh=n=>n===null||n==="";function xg(n,t){const e=n.style,i=n.getAttribute("height"),s=n.getAttribute("width");if(n[ao]={initial:{height:i,width:s,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",lh(s)){const r=Xc(n,"width");r!==void 0&&(n.width=r)}if(lh(i))if(n.style.height==="")n.height=n.width/(t||2);else{const r=Xc(n,"height");r!==void 0&&(n.height=r)}return n}const Nd=vm?{passive:!0}:!1;function vg(n,t,e){n&&n.addEventListener(t,e,Nd)}function Mg(n,t,e){n&&n.canvas&&n.canvas.removeEventListener(t,e,Nd)}function bg(n,t){const e=_g[n.type]||n.type,{x:i,y:s}=Ei(n,t);return{type:e,chart:t,native:n,x:i!==void 0?i:null,y:s!==void 0?s:null}}function Eo(n,t){for(const e of n)if(e===t||e.contains(t))return!0}function yg(n,t,e){const i=n.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Eo(a.addedNodes,i),o=o&&!Eo(a.removedNodes,i);o&&e()});return s.observe(document,{childList:!0,subtree:!0}),s}function Sg(n,t,e){const i=n.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Eo(a.removedNodes,i),o=o&&!Eo(a.addedNodes,i);o&&e()});return s.observe(document,{childList:!0,subtree:!0}),s}const sr=new Map;let ch=0;function kd(){const n=window.devicePixelRatio;n!==ch&&(ch=n,sr.forEach((t,e)=>{e.currentDevicePixelRatio!==n&&t()}))}function Eg(n,t){sr.size||window.addEventListener("resize",kd),sr.set(n,t)}function Tg(n){sr.delete(n),sr.size||window.removeEventListener("resize",kd)}function Ag(n,t,e){const i=n.canvas,s=i&&sc(i);if(!s)return;const r=fd((a,l)=>{const c=s.clientWidth;e(a,l),c<s.clientWidth&&e()},window),o=new ResizeObserver(a=>{const l=a[0],c=l.contentRect.width,h=l.contentRect.height;c===0&&h===0||r(c,h)});return o.observe(s),Eg(n,r),o}function ta(n,t,e){e&&e.disconnect(),t==="resize"&&Tg(n)}function wg(n,t,e){const i=n.canvas,s=fd(r=>{n.ctx!==null&&e(bg(r,n))},n);return vg(i,t,s),s}class Rg extends Fd{acquireContext(t,e){const i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(xg(t,e),i):null}releaseContext(t){const e=t.canvas;if(!e[ao])return!1;const i=e[ao].initial;["height","width"].forEach(r=>{const o=i[r];zt(o)?e.removeAttribute(r):e.setAttribute(r,o)});const s=i.style||{};return Object.keys(s).forEach(r=>{e.style[r]=s[r]}),e.width=e.width,delete e[ao],!0}addEventListener(t,e,i){this.removeEventListener(t,e);const s=t.$proxies||(t.$proxies={}),o={attach:yg,detach:Sg,resize:Ag}[e]||wg;s[e]=o(t,e,i)}removeEventListener(t,e){const i=t.$proxies||(t.$proxies={}),s=i[e];if(!s)return;({attach:ta,detach:ta,resize:ta}[e]||Mg)(t,e,s),i[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,s){return xm(t,e,i,s)}isAttached(t){const e=t&&sc(t);return!!(e&&e.isConnected)}}function Cg(n){return!ic()||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas?gg:Rg}class gn{constructor(){et(this,"x");et(this,"y");et(this,"active",!1);et(this,"options");et(this,"$animations")}tooltipPosition(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return gs(this.x)&&gs(this.y)}getProps(t,e){const i=this.$animations;if(!e||!i)return this;const s={};return t.forEach(r=>{s[r]=i[r]&&i[r].active()?i[r]._to:this[r]}),s}}et(gn,"defaults",{}),et(gn,"defaultRoutes");function Pg(n,t){const e=n.options.ticks,i=Dg(n),s=Math.min(e.maxTicksLimit||i,i),r=e.major.enabled?Ig(t):[],o=r.length,a=r[0],l=r[o-1],c=[];if(o>s)return Og(t,c,r,o/s),c;const h=Lg(r,t,s);if(o>0){let u,d;const f=o>1?Math.round((l-a)/(o-1)):null;for(Sr(t,c,h,zt(f)?0:a-f,a),u=0,d=o-1;u<d;u++)Sr(t,c,h,r[u],r[u+1]);return Sr(t,c,h,l,zt(f)?t.length:l+f),c}return Sr(t,c,h),c}function Dg(n){const t=n.options.offset,e=n._tickSize(),i=n._length/e+(t?0:1),s=n._maxLength/e;return Math.floor(Math.min(i,s))}function Lg(n,t,e){const i=Ug(n),s=t.length/e;if(!i)return Math.max(s,1);const r=bp(i);for(let o=0,a=r.length-1;o<a;o++){const l=r[o];if(l>s)return l}return Math.max(s,1)}function Ig(n){const t=[];let e,i;for(e=0,i=n.length;e<i;e++)n[e].major&&t.push(e);return t}function Og(n,t,e,i){let s=0,r=e[0],o;for(i=Math.ceil(i),o=0;o<n.length;o++)o===r&&(t.push(n[o]),s++,r=e[s*i])}function Sr(n,t,e,i,s){const r=Dt(i,0),o=Math.min(Dt(s,n.length),n.length);let a=0,l,c,h;for(e=Math.ceil(e),s&&(l=s-i,e=l/Math.floor(l/e)),h=r;h<0;)a++,h=Math.round(r+a*e);for(c=Math.max(r,0);c<o;c++)c===h&&(t.push(n[c]),a++,h=Math.round(r+a*e))}function Ug(n){const t=n.length;let e,i;if(t<2)return!1;for(i=n[0],e=1;e<t;++e)if(n[e]-n[e-1]!==i)return!1;return i}const Fg=n=>n==="left"?"right":n==="right"?"left":n,hh=(n,t,e)=>t==="top"||t==="left"?n[t]+e:n[t]-e,uh=(n,t)=>Math.min(t||n,n);function dh(n,t){const e=[],i=n.length/t,s=n.length;let r=0;for(;r<s;r+=i)e.push(n[Math.floor(r)]);return e}function Ng(n,t,e){const i=n.ticks.length,s=Math.min(t,i-1),r=n._startPixel,o=n._endPixel,a=1e-6;let l=n.getPixelForTick(s),c;if(!(e&&(i===1?c=Math.max(l-r,o-l):t===0?c=(n.getPixelForTick(1)-l)/2:c=(l-n.getPixelForTick(s-1))/2,l+=s<t?c:-c,l<r-a||l>o+a)))return l}function kg(n,t){te(n,e=>{const i=e.gc,s=i.length/2;let r;if(s>t){for(r=0;r<s;++r)delete e.data[i[r]];i.splice(0,s)}})}function Ls(n){return n.drawTicks?n.tickLength:0}function fh(n,t){if(!n.display)return 0;const e=be(n.font,t),i=Ue(n.padding);return(ce(n.text)?n.text.length:1)*e.lineHeight+i.height}function Bg(n,t){return ui(n,{scale:t,type:"scale"})}function zg(n,t,e){return ui(n,{tick:e,index:t,type:"tick"})}function Hg(n,t,e){let i=Zl(n);return(e&&t!=="right"||!e&&t==="right")&&(i=Fg(i)),i}function Vg(n,t,e,i){const{top:s,left:r,bottom:o,right:a,chart:l}=n,{chartArea:c,scales:h}=l;let u=0,d,f,g;const _=o-s,m=a-r;if(n.isHorizontal()){if(f=Le(i,r,a),Ht(e)){const p=Object.keys(e)[0],b=e[p];g=h[p].getPixelForValue(b)+_-t}else e==="center"?g=(c.bottom+c.top)/2+_-t:g=hh(n,e,t);d=a-r}else{if(Ht(e)){const p=Object.keys(e)[0],b=e[p];f=h[p].getPixelForValue(b)-m+t}else e==="center"?f=(c.left+c.right)/2-m+t:f=hh(n,e,t);g=Le(i,o,s),u=e==="left"?-_e:_e}return{titleX:f,titleY:g,maxWidth:d,rotation:u}}class Hi extends gn{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:s}=this;return t=$e(t,Number.POSITIVE_INFINITY),e=$e(e,Number.NEGATIVE_INFINITY),i=$e(i,Number.POSITIVE_INFINITY),s=$e(s,Number.NEGATIVE_INFINITY),{min:$e(t,i),max:$e(e,s),minDefined:me(t),maxDefined:me(e)}}getMinMax(t){let{min:e,max:i,minDefined:s,maxDefined:r}=this.getUserBounds(),o;if(s&&r)return{min:e,max:i};const a=this.getMatchingVisibleMetas();for(let l=0,c=a.length;l<c;++l)o=a[l].controller.getMinMax(this,t),s||(e=Math.min(e,o.min)),r||(i=Math.max(i,o.max));return e=r&&e>i?i:e,i=s&&e>i?e:i,{min:$e(e,$e(i,e)),max:$e(i,$e(e,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){oe(this.options.beforeUpdate,[this])}update(t,e,i){const{beginAtZero:s,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Kp(this,r,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?dh(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=Pg(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,i;this.isHorizontal()?(e=this.left,i=this.right):(e=this.top,i=this.bottom,t=!t),this._startPixel=e,this._endPixel=i,this._reversePixels=t,this._length=i-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){oe(this.options.afterUpdate,[this])}beforeSetDimensions(){oe(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){oe(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),oe(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){oe(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let i,s,r;for(i=0,s=t.length;i<s;i++)r=t[i],r.label=oe(e.callback,[r.value,i,t],this)}afterTickToLabelConversion(){oe(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){oe(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,i=uh(this.ticks.length,t.ticks.maxTicksLimit),s=e.minRotation||0,r=e.maxRotation;let o=s,a,l,c;if(!this._isVisible()||!e.display||s>=r||i<=1||!this.isHorizontal()){this.labelRotation=s;return}const h=this._getLabelSizes(),u=h.widest.width,d=h.highest.height,f=Te(this.chart.width-u,0,this.maxWidth);a=t.offset?this.maxWidth/i:f/(i-1),u+6>a&&(a=f/(i-(t.offset?.5:1)),l=this.maxHeight-Ls(t.grid)-e.padding-fh(t.title,this.chart.options.font),c=Math.sqrt(u*u+d*d),o=$l(Math.min(Math.asin(Te((h.highest.height+6)/a,-1,1)),Math.asin(Te(l/c,-1,1))-Math.asin(Te(d/c,-1,1)))),o=Math.max(s,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){oe(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){oe(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:i,title:s,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const l=fh(s,e.options.font);if(a?(t.width=this.maxWidth,t.height=Ls(r)+l):(t.height=this.maxHeight,t.width=Ls(r)+l),i.display&&this.ticks.length){const{first:c,last:h,widest:u,highest:d}=this._getLabelSizes(),f=i.padding*2,g=dn(this.labelRotation),_=Math.cos(g),m=Math.sin(g);if(a){const p=i.mirror?0:m*u.width+_*d.height;t.height=Math.min(this.maxHeight,t.height+p+f)}else{const p=i.mirror?0:_*u.width+m*d.height;t.width=Math.min(this.maxWidth,t.width+p+f)}this._calculatePadding(c,h,m,_)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,s){const{ticks:{align:r,padding:o},position:a}=this.options,l=this.labelRotation!==0,c=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const h=this.getPixelForTick(0)-this.left,u=this.right-this.getPixelForTick(this.ticks.length-1);let d=0,f=0;l?c?(d=s*t.width,f=i*e.height):(d=i*t.height,f=s*e.width):r==="start"?f=e.width:r==="end"?d=t.width:r!=="inner"&&(d=t.width/2,f=e.width/2),this.paddingLeft=Math.max((d-h+o)*this.width/(this.width-h),0),this.paddingRight=Math.max((f-u+o)*this.width/(this.width-u),0)}else{let h=e.height/2,u=t.height/2;r==="start"?(h=0,u=t.height):r==="end"&&(h=e.height,u=0),this.paddingTop=h+o,this.paddingBottom=u+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){oe(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,i;for(e=0,i=t.length;e<i;e++)zt(t[e].label)&&(t.splice(e,1),i--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let i=this.ticks;e<i.length&&(i=dh(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,i){const{ctx:s,_longestTextCache:r}=this,o=[],a=[],l=Math.floor(e/uh(e,i));let c=0,h=0,u,d,f,g,_,m,p,b,E,x,T;for(u=0;u<e;u+=l){if(g=t[u].label,_=this._resolveTickFontOptions(u),s.font=m=_.string,p=r[m]=r[m]||{data:{},gc:[]},b=_.lineHeight,E=x=0,!zt(g)&&!ce(g))E=yo(s,p.data,p.gc,E,g),x=b;else if(ce(g))for(d=0,f=g.length;d<f;++d)T=g[d],!zt(T)&&!ce(T)&&(E=yo(s,p.data,p.gc,E,T),x+=b);o.push(E),a.push(x),c=Math.max(E,c),h=Math.max(x,h)}kg(r,e);const w=o.indexOf(c),A=a.indexOf(h),C=y=>({width:o[y]||0,height:a[y]||0});return{first:C(0),last:C(e-1),widest:C(w),highest:C(A),widths:o,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return Tp(this._alignToPixels?mi(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const i=e[t];return i.$context||(i.$context=zg(this.getContext(),t,i))}return this.$context||(this.$context=Bg(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=dn(this.labelRotation),i=Math.abs(Math.cos(e)),s=Math.abs(Math.sin(e)),r=this._getLabelSizes(),o=t.autoSkipPadding||0,a=r?r.widest.width+o:0,l=r?r.highest.height+o:0;return this.isHorizontal()?l*i>a*s?a/i:l/s:l*s<a*i?l/i:a/s}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,i=this.chart,s=this.options,{grid:r,position:o,border:a}=s,l=r.offset,c=this.isHorizontal(),u=this.ticks.length+(l?1:0),d=Ls(r),f=[],g=a.setContext(this.getContext()),_=g.display?g.width:0,m=_/2,p=function(H){return mi(i,H,_)};let b,E,x,T,w,A,C,y,v,P,F,N;if(o==="top")b=p(this.bottom),A=this.bottom-d,y=b-m,P=p(t.top)+m,N=t.bottom;else if(o==="bottom")b=p(this.top),P=t.top,N=p(t.bottom)-m,A=b+m,y=this.top+d;else if(o==="left")b=p(this.right),w=this.right-d,C=b-m,v=p(t.left)+m,F=t.right;else if(o==="right")b=p(this.left),v=t.left,F=p(t.right)-m,w=b+m,C=this.left+d;else if(e==="x"){if(o==="center")b=p((t.top+t.bottom)/2+.5);else if(Ht(o)){const H=Object.keys(o)[0],j=o[H];b=p(this.chart.scales[H].getPixelForValue(j))}P=t.top,N=t.bottom,A=b+m,y=A+d}else if(e==="y"){if(o==="center")b=p((t.left+t.right)/2);else if(Ht(o)){const H=Object.keys(o)[0],j=o[H];b=p(this.chart.scales[H].getPixelForValue(j))}w=b-m,C=w-d,v=t.left,F=t.right}const X=Dt(s.ticks.maxTicksLimit,u),G=Math.max(1,Math.ceil(u/X));for(E=0;E<u;E+=G){const H=this.getContext(E),j=r.setContext(H),W=a.setContext(H),nt=j.lineWidth,it=j.color,dt=W.dash||[],vt=W.dashOffset,Lt=j.tickWidth,V=j.tickColor,J=j.tickBorderDash||[],ot=j.tickBorderDashOffset;x=Ng(this,E,l),x!==void 0&&(T=mi(i,x,nt),c?w=C=v=F=T:A=y=P=N=T,f.push({tx1:w,ty1:A,tx2:C,ty2:y,x1:v,y1:P,x2:F,y2:N,width:nt,color:it,borderDash:dt,borderDashOffset:vt,tickWidth:Lt,tickColor:V,tickBorderDash:J,tickBorderDashOffset:ot}))}return this._ticksLength=u,this._borderValue=b,f}_computeLabelItems(t){const e=this.axis,i=this.options,{position:s,ticks:r}=i,o=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:c,padding:h,mirror:u}=r,d=Ls(i.grid),f=d+h,g=u?-h:f,_=-dn(this.labelRotation),m=[];let p,b,E,x,T,w,A,C,y,v,P,F,N="middle";if(s==="top")w=this.bottom-g,A=this._getXAxisLabelAlignment();else if(s==="bottom")w=this.top+g,A=this._getXAxisLabelAlignment();else if(s==="left"){const G=this._getYAxisLabelAlignment(d);A=G.textAlign,T=G.x}else if(s==="right"){const G=this._getYAxisLabelAlignment(d);A=G.textAlign,T=G.x}else if(e==="x"){if(s==="center")w=(t.top+t.bottom)/2+f;else if(Ht(s)){const G=Object.keys(s)[0],H=s[G];w=this.chart.scales[G].getPixelForValue(H)+f}A=this._getXAxisLabelAlignment()}else if(e==="y"){if(s==="center")T=(t.left+t.right)/2-f;else if(Ht(s)){const G=Object.keys(s)[0],H=s[G];T=this.chart.scales[G].getPixelForValue(H)}A=this._getYAxisLabelAlignment(d).textAlign}e==="y"&&(l==="start"?N="top":l==="end"&&(N="bottom"));const X=this._getLabelSizes();for(p=0,b=a.length;p<b;++p){E=a[p],x=E.label;const G=r.setContext(this.getContext(p));C=this.getPixelForTick(p)+r.labelOffset,y=this._resolveTickFontOptions(p),v=y.lineHeight,P=ce(x)?x.length:1;const H=P/2,j=G.color,W=G.textStrokeColor,nt=G.textStrokeWidth;let it=A;o?(T=C,A==="inner"&&(p===b-1?it=this.options.reverse?"left":"right":p===0?it=this.options.reverse?"right":"left":it="center"),s==="top"?c==="near"||_!==0?F=-P*v+v/2:c==="center"?F=-X.highest.height/2-H*v+v:F=-X.highest.height+v/2:c==="near"||_!==0?F=v/2:c==="center"?F=X.highest.height/2-H*v:F=X.highest.height-P*v,u&&(F*=-1),_!==0&&!G.showLabelBackdrop&&(T+=v/2*Math.sin(_))):(w=C,F=(1-P)*v/2);let dt;if(G.showLabelBackdrop){const vt=Ue(G.backdropPadding),Lt=X.heights[p],V=X.widths[p];let J=F-vt.top,ot=0-vt.left;switch(N){case"middle":J-=Lt/2;break;case"bottom":J-=Lt;break}switch(A){case"center":ot-=V/2;break;case"right":ot-=V;break;case"inner":p===b-1?ot-=V:p>0&&(ot-=V/2);break}dt={left:ot,top:J,width:V+vt.width,height:Lt+vt.height,color:G.backdropColor}}m.push({label:x,font:y,textOffset:F,options:{rotation:_,color:j,strokeColor:W,strokeWidth:nt,textAlign:it,textBaseline:N,translation:[T,w],backdrop:dt}})}return m}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-dn(this.labelRotation))return t==="top"?"left":"right";let s="center";return e.align==="start"?s="left":e.align==="end"?s="right":e.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:i,mirror:s,padding:r}}=this.options,o=this._getLabelSizes(),a=t+r,l=o.widest.width;let c,h;return e==="left"?s?(h=this.right+r,i==="near"?c="left":i==="center"?(c="center",h+=l/2):(c="right",h+=l)):(h=this.right-a,i==="near"?c="right":i==="center"?(c="center",h-=l/2):(c="left",h=this.left)):e==="right"?s?(h=this.left+r,i==="near"?c="right":i==="center"?(c="center",h-=l/2):(c="left",h-=l)):(h=this.left+a,i==="near"?c="left":i==="center"?(c="center",h+=l/2):(c="right",h=this.right)):c="right",{textAlign:c,x:h}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:i,top:s,width:r,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,s,r,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const s=this.ticks.findIndex(r=>r.value===t);return s>=0?e.setContext(this.getContext(s)).lineWidth:0}drawGrid(t){const e=this.options.grid,i=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let r,o;const a=(l,c,h)=>{!h.width||!h.color||(i.save(),i.lineWidth=h.width,i.strokeStyle=h.color,i.setLineDash(h.borderDash||[]),i.lineDashOffset=h.borderDashOffset,i.beginPath(),i.moveTo(l.x,l.y),i.lineTo(c.x,c.y),i.stroke(),i.restore())};if(e.display)for(r=0,o=s.length;r<o;++r){const l=s[r];e.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),e.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:i,grid:s}}=this,r=i.setContext(this.getContext()),o=i.display?r.width:0;if(!o)return;const a=s.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,h,u,d;this.isHorizontal()?(c=mi(t,this.left,o)-o/2,h=mi(t,this.right,a)+a/2,u=d=l):(u=mi(t,this.top,o)-o/2,d=mi(t,this.bottom,a)+a/2,c=h=l),e.save(),e.lineWidth=r.width,e.strokeStyle=r.color,e.beginPath(),e.moveTo(c,u),e.lineTo(h,d),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const i=this.ctx,s=this._computeLabelArea();s&&Io(i,s);const r=this.getLabelItems(t);for(const o of r){const a=o.options,l=o.font,c=o.label,h=o.textOffset;Ni(i,c,0,h,l,a)}s&&Oo(i)}drawTitle(){const{ctx:t,options:{position:e,title:i,reverse:s}}=this;if(!i.display)return;const r=be(i.font),o=Ue(i.padding),a=i.align;let l=r.lineHeight/2;e==="bottom"||e==="center"||Ht(e)?(l+=o.bottom,ce(i.text)&&(l+=r.lineHeight*(i.text.length-1))):l+=o.top;const{titleX:c,titleY:h,maxWidth:u,rotation:d}=Vg(this,l,e,a);Ni(t,i.text,0,0,r,{color:i.color,maxWidth:u,rotation:d,textAlign:Hg(a,e,s),textBaseline:"middle",translation:[c,h],strokeColor:i.strokeColor,strokeWidth:i.strokeWidth})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,i=Dt(t.grid&&t.grid.z,-1),s=Dt(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==Hi.prototype.draw?[{z:e,draw:r=>{this.draw(r)}}]:[{z:i,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:e,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",s=[];let r,o;for(r=0,o=e.length;r<o;++r){const a=e[r];a[i]===this.id&&(!t||a.type===t)&&s.push(a)}return s}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return be(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Er{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let i;Xg(e)&&(i=this.register(e));const s=this.items,r=t.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+t);return r in s||(s[r]=t,Gg(t,o,i),this.override&&he.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,i=t.id,s=this.scope;i in e&&delete e[i],s&&i in he[s]&&(delete he[s][i],this.override&&delete Fi[i])}}function Gg(n,t,e){const i=tr(Object.create(null),[e?he.get(e):{},he.get(t),n.defaults]);he.set(t,i),n.defaultRoutes&&Wg(t,n.defaultRoutes),n.descriptors&&he.describe(t,n.descriptors)}function Wg(n,t){Object.keys(t).forEach(e=>{const i=e.split("."),s=i.pop(),r=[n].concat(i).join("."),o=t[e].split("."),a=o.pop(),l=o.join(".");he.route(r,s,l,a)})}function Xg(n){return"id"in n&&"defaults"in n}class Yg{constructor(){this.controllers=new Er(pn,"datasets",!0),this.elements=new Er(gn,"elements"),this.plugins=new Er(Object,"plugins"),this.scales=new Er(Hi,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach(s=>{const r=i||this._getRegistryForType(s);i||r.isForType(s)||r===this.plugins&&s.id?this._exec(t,r,s):te(s,o=>{const a=i||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,e,i){const s=ql(t);oe(i["before"+s],[],i),e[t](i),oe(i["after"+s],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){const s=e.get(t);if(s===void 0)throw new Error('"'+t+'" is not a registered '+i+".");return s}}var xn=new Yg;class jg{constructor(){this._init=void 0}notify(t,e,i,s){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const r=s?this._descriptors(t).filter(s):this._descriptors(t),o=this._notify(r,t,e,i);return e==="afterDestroy"&&(this._notify(r,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),o}_notify(t,e,i,s){s=s||{};for(const r of t){const o=r.plugin,a=o[i],l=[e,s,r.options];if(oe(a,l,o)===!1&&s.cancelable)return!1}return!0}invalidate(){zt(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const i=t&&t.config,s=Dt(i.options&&i.options.plugins,{}),r=qg(i);return s===!1&&!e?[]:Kg(t,r,s,e)}_notifyStateChanges(t){const e=this._oldCache||[],i=this._cache,s=(r,o)=>r.filter(a=>!o.some(l=>a.plugin.id===l.plugin.id));this._notify(s(e,i),t,"stop"),this._notify(s(i,e),t,"start")}}function qg(n){const t={},e=[],i=Object.keys(xn.plugins.items);for(let r=0;r<i.length;r++)e.push(xn.getPlugin(i[r]));const s=n.plugins||[];for(let r=0;r<s.length;r++){const o=s[r];e.indexOf(o)===-1&&(e.push(o),t[o.id]=!0)}return{plugins:e,localIds:t}}function $g(n,t){return!t&&n===!1?null:n===!0?{}:n}function Kg(n,{plugins:t,localIds:e},i,s){const r=[],o=n.getContext();for(const a of t){const l=a.id,c=$g(i[l],s);c!==null&&r.push({plugin:a,options:Zg(n.config,{plugin:a,local:e[l]},c,o)})}return r}function Zg(n,{plugin:t,local:e},i,s){const r=n.pluginScopeKeys(t),o=n.getOptionScopes(i,r);return e&&t.defaults&&o.push(t.defaults),n.createResolver(o,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Xa(n,t){const e=he.datasets[n]||{};return((t.datasets||{})[n]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function Jg(n,t){let e=n;return n==="_index_"?e=t:n==="_value_"&&(e=t==="x"?"y":"x"),e}function Qg(n,t){return n===t?"_index_":"_value_"}function ph(n){if(n==="x"||n==="y"||n==="r")return n}function t_(n){if(n==="top"||n==="bottom")return"x";if(n==="left"||n==="right")return"y"}function Ya(n,...t){if(ph(n))return n;for(const e of t){const i=e.axis||t_(e.position)||n.length>1&&ph(n[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`)}function mh(n,t,e){if(e[t+"AxisID"]===n)return{axis:t}}function e_(n,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(i=>i.xAxisID===n||i.yAxisID===n);if(e.length)return mh(n,"x",e[0])||mh(n,"y",e[0])}return{}}function n_(n,t){const e=Fi[n.type]||{scales:{}},i=t.scales||{},s=Xa(n.type,t),r=Object.create(null);return Object.keys(i).forEach(o=>{const a=i[o];if(!Ht(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const l=Ya(o,a,e_(o,n),he.scales[a.type]),c=Qg(l,s),h=e.scales||{};r[o]=$s(Object.create(null),[{axis:l},a,h[l],h[c]])}),n.data.datasets.forEach(o=>{const a=o.type||n.type,l=o.indexAxis||Xa(a,t),h=(Fi[a]||{}).scales||{};Object.keys(h).forEach(u=>{const d=Jg(u,l),f=o[d+"AxisID"]||d;r[f]=r[f]||Object.create(null),$s(r[f],[{axis:d},i[f],h[u]])})}),Object.keys(r).forEach(o=>{const a=r[o];$s(a,[he.scales[a.type],he.scale])}),r}function Bd(n){const t=n.options||(n.options={});t.plugins=Dt(t.plugins,{}),t.scales=n_(n,t)}function zd(n){return n=n||{},n.datasets=n.datasets||[],n.labels=n.labels||[],n}function i_(n){return n=n||{},n.data=zd(n.data),Bd(n),n}const gh=new Map,Hd=new Set;function Tr(n,t){let e=gh.get(n);return e||(e=t(),gh.set(n,e),Hd.add(e)),e}const Is=(n,t,e)=>{const i=ai(t,e);i!==void 0&&n.add(i)};class s_{constructor(t){this._config=i_(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=zd(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),Bd(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Tr(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return Tr(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return Tr(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,i=this.type;return Tr(`${i}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const i=this._scopeCache;let s=i.get(t);return(!s||e)&&(s=new Map,i.set(t,s)),s}getOptionScopes(t,e,i){const{options:s,type:r}=this,o=this._cachedScopes(t,i),a=o.get(e);if(a)return a;const l=new Set;e.forEach(h=>{t&&(l.add(t),h.forEach(u=>Is(l,t,u))),h.forEach(u=>Is(l,s,u)),h.forEach(u=>Is(l,Fi[r]||{},u)),h.forEach(u=>Is(l,he,u)),h.forEach(u=>Is(l,Va,u))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),Hd.has(e)&&o.set(e,c),c}chartOptionScopes(){const{options:t,type:e}=this;return[t,Fi[e]||{},he.datasets[e]||{},{type:e},he,Va]}resolveNamedOptions(t,e,i,s=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=_h(this._resolverCache,t,s);let l=o;if(o_(o,e)){r.$shared=!1,i=li(i)?i():i;const c=this.createResolver(t,i,a);l=_s(o,i,c)}for(const c of e)r[c]=l[c];return r}createResolver(t,e,i=[""],s){const{resolver:r}=_h(this._resolverCache,t,i);return Ht(e)?_s(r,e,void 0,s):r}}function _h(n,t,e){let i=n.get(t);i||(i=new Map,n.set(t,i));const s=e.join();let r=i.get(s);return r||(r={resolver:tc(t,e),subPrefixes:e.filter(a=>!a.toLowerCase().includes("hover"))},i.set(s,r)),r}const r_=n=>Ht(n)&&Object.getOwnPropertyNames(n).some(t=>li(n[t]));function o_(n,t){const{isScriptable:e,isIndexable:i}=vd(n);for(const s of t){const r=e(s),o=i(s),a=(o||r)&&n[s];if(r&&(li(a)||r_(a))||o&&ce(a))return!0}return!1}var a_="4.6.1";const l_=["top","bottom","left","right","chartArea"];function xh(n,t){return n==="top"||n==="bottom"||l_.indexOf(n)===-1&&t==="x"}function vh(n,t){return function(e,i){return e[n]===i[n]?e[t]-i[t]:e[n]-i[n]}}function Mh(n){const t=n.chart,e=t.options.animation;t.notifyPlugins("afterRender"),oe(e&&e.onComplete,[n],t)}function c_(n){const t=n.chart,e=t.options.animation;oe(e&&e.onProgress,[n],t)}function Vd(n){return ic()&&typeof n=="string"?n=document.getElementById(n):n&&n.length&&(n=n[0]),n&&n.canvas&&(n=n.canvas),n}const lo={},bh=n=>{const t=Vd(n);return Object.values(lo).filter(e=>e.canvas===t).pop()};function h_(n,t,e){const i=Object.keys(n);for(const s of i){const r=+s;if(r>=t){const o=n[s];delete n[s],(e>0||r>t)&&(n[r+e]=o)}}}function u_(n,t,e,i){return!e||n.type==="mouseout"?null:i?t:n}class Fn{static register(...t){xn.add(...t),yh()}static unregister(...t){xn.remove(...t),yh()}constructor(t,e){const i=this.config=new s_(e),s=Vd(t),r=bh(s);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||Cg(s)),this.platform.updateConfig(i);const a=this.platform.acquireContext(s,o.aspectRatio),l=a&&a.canvas,c=l&&l.height,h=l&&l.width;if(this.id=dp(),this.ctx=a,this.canvas=l,this.width=h,this.height=c,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new jg,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=Cp(u=>this.update(u),o.resizeDelay||0),this._dataChanges=[],lo[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}Ln.listen(this,"complete",Mh),Ln.listen(this,"progress",c_),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:s,_aspectRatio:r}=this;return zt(t)?e&&r?r:s?i/s:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return xn}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Wc(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Hc(this.canvas,this.ctx),this}stop(){return Ln.stop(this),this}resize(t,e){Ln.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const i=this.options,s=this.canvas,r=i.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(s,t,e,r),a=i.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,Wc(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),oe(i.onResize,[this,o],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};te(e,(i,s)=>{i.id=s})}buildOrUpdateScales(){const t=this.options,e=t.scales,i=this.scales,s=Object.keys(i).reduce((o,a)=>(o[a]=!1,o),{});let r=[];e&&(r=r.concat(Object.keys(e).map(o=>{const a=e[o],l=Ya(o,a),c=l==="r",h=l==="x";return{options:a,dposition:c?"chartArea":h?"bottom":"left",dtype:c?"radialLinear":h?"category":"linear"}}))),te(r,o=>{const a=o.options,l=a.id,c=Ya(l,a),h=Dt(a.type,o.dtype);(a.position===void 0||xh(a.position,c)!==xh(o.dposition))&&(a.position=o.dposition),s[l]=!0;let u=null;if(l in i&&i[l].type===h)u=i[l];else{const d=xn.getScale(h);u=new d({id:l,type:h,ctx:this.ctx,chart:this}),i[u.id]=u}u.init(a,t)}),te(s,(o,a)=>{o||delete i[a]}),te(i,o=>{Oe.configure(this,o,o.options),Oe.addBox(this,o)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort((s,r)=>s.index-r.index),i>e){for(let s=e;s<i;++s)this._destroyDatasetMeta(s);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(vh("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((i,s)=>{e.filter(r=>r===i._dataset).length===0&&this._destroyDatasetMeta(s)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let i,s;for(this._removeUnreferencedMetasets(),i=0,s=e.length;i<s;i++){const r=e[i];let o=this.getDatasetMeta(i);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(i),o=this.getDatasetMeta(i)),o.type=a,o.indexAxis=r.indexAxis||Xa(a,this.options),o.order=r.order||0,o.index=i,o.label=""+r.label,o.visible=this.isDatasetVisible(i),o.controller)o.controller.updateIndex(i),o.controller.linkScales();else{const l=xn.getController(a),{datasetElementType:c,dataElementType:h}=he.datasets[a];Object.assign(l,{dataElementType:xn.getElement(h),datasetElementType:c&&xn.getElement(c)}),o.controller=new l(this,i),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){te(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let c=0,h=this.data.datasets.length;c<h;c++){const{controller:u}=this.getDatasetMeta(c),d=!s&&r.indexOf(u)===-1;u.buildOrUpdateElements(d),o=Math.max(+u.getMaxOverflow(),o)}o=this._minPadding=i.layout.autoPadding?o:0,this._updateLayout(o),s||te(r,c=>{c.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(vh("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){te(this.scales,t=>{Oe.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);(!Lc(e,i)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:i,start:s,count:r}of e){const o=i==="_removeElements"?-r:r;h_(t,s,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,i=r=>new Set(t.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),s=i(0);for(let r=1;r<e;r++)if(!Lc(s,i(r)))return;return Array.from(s).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Oe.update(this,this.width,this.height,t);const e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],te(this.boxes,s=>{i&&s.position==="chartArea"||(s.configure&&s.configure(),this._layers.push(...s._layers()))},this),this._layers.forEach((s,r)=>{s._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,i=this.data.datasets.length;e<i;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,li(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const i=this.getDatasetMeta(t),s={meta:i,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",s)!==!1&&(i.controller._update(e),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Ln.has(this)?this.attached&&!Ln.running(this)&&Ln.start(this):(this.draw(),Mh({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:i,height:s}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(i,s)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,i=[];let s,r;for(s=0,r=e.length;s<r;++s){const o=e[s];(!t||o.visible)&&i.push(o)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,i={meta:t,index:t.index,cancelable:!0},s=Pd(this,t);this.notifyPlugins("beforeDatasetDraw",i)!==!1&&(s&&Io(e,s),t.controller.draw(),s&&Oo(e),i.cancelable=!1,this.notifyPlugins("afterDatasetDraw",i))}isPointInArea(t){return Bn(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,i,s){const r=lg.modes[e];return typeof r=="function"?r(this,t,i,s):[]}getDatasetMeta(t){const e=this.data.datasets[t],i=this._metasets;let s=i.filter(r=>r&&r._dataset===e).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(s)),s}getContext(){return this.$context||(this.$context=ui(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const i=this.getDatasetMeta(t);return typeof i.hidden=="boolean"?!i.hidden:!e.hidden}setDatasetVisibility(t,e){const i=this.getDatasetMeta(t);i.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,i){const s=i?"show":"hide",r=this.getDatasetMeta(t),o=r.controller._resolveAnimations(void 0,s);er(e)?(r.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),o.update(r,{visible:i}),this.update(a=>a.datasetIndex===t?s:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),Ln.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Hc(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete lo[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,i=(r,o)=>{e.addEventListener(this,r,o),t[r]=o},s=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};te(this.options.events,r=>i(r,s))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,i=(l,c)=>{e.addEventListener(this,l,c),t[l]=c},s=(l,c)=>{t[l]&&(e.removeEventListener(this,l,c),delete t[l])},r=(l,c)=>{this.canvas&&this.resize(l,c)};let o;const a=()=>{s("attach",a),this.attached=!0,this.resize(),i("resize",r),i("detach",o)};o=()=>{this.attached=!1,s("resize",r),this._stop(),this._resize(0,0),i("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){te(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},te(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){const s=i?"set":"remove";let r,o,a,l;for(e==="dataset"&&(r=this.getDatasetMeta(t[0].datasetIndex),r.controller["_"+s+"DatasetHoverStyle"]()),a=0,l=t.length;a<l;++a){o=t[a];const c=o&&this.getDatasetMeta(o.datasetIndex).controller;c&&c[s+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],i=t.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!vo(i,e)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,i){const s=this.options.hover,r=(l,c)=>l.filter(h=>!c.some(u=>h.datasetIndex===u.datasetIndex&&h.index===u.index)),o=r(e,t),a=i?t:r(t,e);o.length&&this.updateHoverStyle(o,s.mode,!1),a.length&&s.mode&&this.updateHoverStyle(a,s.mode,!0)}_eventHandler(t,e){const i={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},s=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",i,s)===!1)return;const r=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,s),(r||i.changed)&&this.render(),this}_handleEvent(t,e,i){const{_active:s=[],options:r}=this,o=e,a=this._getActiveElements(t,s,i,o),l=xp(t),c=u_(t,this._lastEvent,i,l);i&&(this._lastEvent=null,oe(r.onHover,[t,a,this],this),l&&oe(r.onClick,[t,a,this],this));const h=!vo(a,s);return(h||e)&&(this._active=a,this._updateHoverStyles(a,s,e)),this._lastEvent=c,h}_getActiveElements(t,e,i,s){if(t.type==="mouseout")return[];if(!i)return e;const r=this.options.hover;return this.getElementsAtEventForMode(t,r.mode,r,s)}}et(Fn,"defaults",he),et(Fn,"instances",lo),et(Fn,"overrides",Fi),et(Fn,"registry",xn),et(Fn,"version",a_),et(Fn,"getChart",bh);function yh(){return te(Fn.instances,n=>n._plugins.invalidate())}function d_(n,t,e){const{startAngle:i,x:s,y:r,outerRadius:o,innerRadius:a,options:l}=t,{borderWidth:c,borderJoinStyle:h}=l,u=Math.min(c/o,Ie(i-e));if(n.beginPath(),n.arc(s,r,o-c/2,i+u/2,e-u/2),a>0){const d=Math.min(c/a,Ie(i-e));n.arc(s,r,a+c/2,e-d/2,i+d/2,!0)}else{const d=Math.min(c/2,o*Ie(i-e));if(h==="round")n.arc(s,r,d,e-Kt/2,i+Kt/2,!0);else if(h==="bevel"){const f=2*d*d,g=-f*Math.cos(e+Kt/2)+s,_=-f*Math.sin(e+Kt/2)+r,m=f*Math.cos(i+Kt/2)+s,p=f*Math.sin(i+Kt/2)+r;n.lineTo(g,_),n.lineTo(m,p)}}n.closePath(),n.moveTo(0,0),n.rect(0,0,n.canvas.width,n.canvas.height),n.clip("evenodd")}function f_(n,t,e){const{startAngle:i,pixelMargin:s,x:r,y:o,outerRadius:a,innerRadius:l}=t;let c=s/a;n.beginPath(),n.arc(r,o,a,i-c,e+c),l>s?(c=s/l,n.arc(r,o,l,e+c,i-c,!0)):n.arc(r,o,s,e+_e,i-_e),n.closePath(),n.clip()}function p_(n){return Ql(n,["outerStart","outerEnd","innerStart","innerEnd"])}function m_(n,t,e,i){const s=p_(n.options.borderRadius),r=(e-t)/2,o=Math.min(r,i*t/2),a=l=>{const c=(e-Math.min(r,l))*i/2;return Te(l,0,Math.min(r,c))};return{outerStart:a(s.outerStart),outerEnd:a(s.outerEnd),innerStart:Te(s.innerStart,0,o),innerEnd:Te(s.innerEnd,0,o)}}function Xi(n,t,e,i){return{x:e+n*Math.cos(t),y:i+n*Math.sin(t)}}function g_(n,t,e,i){const{x:s,y:r,startAngle:o,pixelMargin:a,innerRadius:l}=t,c=Math.max(t.outerRadius+i+e-a,0),h=l>0?l+i+e+a:0;n.beginPath(),n.arc(s,r,c,o,o+ee),h>0&&(n.moveTo(s+Math.cos(o)*h,r+Math.sin(o)*h),n.arc(s,r,h,o+ee,o,!0)),n.closePath()}function To(n,t,e,i,s,r){const{x:o,y:a,startAngle:l,pixelMargin:c,innerRadius:h}=t,{spacingMode:u="angular"}=t.options,d=s-l;if(r&&t.options.selfJoin&&Math.abs(d)>=ee-1e-4){g_(n,t,e,i);return}const f=Math.max(t.outerRadius+i+e-c,0);let g=h>0?h+i+e+c:0,_=0,m=0;const p=f>0?Math.max(.001,d*f-e/Kt)/f:.001,b=(d-p)/2;if(i){const it=h>0?h-i:0,dt=f>0?f-i:0,vt=(it+dt)/2,Lt=(()=>{const st=vt!==0?d*vt/(vt+i):d;return(d-st)/2})(),V=vt>0?Math.asin(Math.min(1,i/vt)):0,J=Math.max(0,p/2-.001),ot=Math.sin(J);if(u==="parallel"){if(g===0&&ot>0){const At=i/ot,Nt=Math.max(0,f-.001);g=Math.min(At,Nt)}const st=Math.min(f>0?f*ot:Number.POSITIVE_INFINITY,g>0?g*ot:Number.POSITIVE_INFINITY),St=Math.min(i,st);_=f>0?Math.asin(Math.min(1,St/f)):Math.min(J,V),m=g>0?Math.asin(Math.min(1,St/g)):_}else u==="proportional"?(_=Math.min(J,Lt),m=Math.min(J,Lt)):(_=Math.min(J,V),m=Math.min(J,V))}const E=l+b+_,x=s-b-_,T=l+b+m,w=s-b-m,A=Math.min(x-E,w-T),{outerStart:C,outerEnd:y,innerStart:v,innerEnd:P}=m_(t,g,f,A),F=f-C,N=f-y,X=E+C/F,G=x-y/N,H=g+v,j=g+P,W=T+v/H,nt=w-P/j;if(n.beginPath(),r){const it=(X+G)/2;if(n.arc(o,a,f,X,it),n.arc(o,a,f,it,G),y>0){const V=Xi(N,G,o,a);n.arc(V.x,V.y,y,G,x+_e)}const dt=Xi(j,w,o,a);if(n.lineTo(dt.x,dt.y),P>0){const V=Xi(j,nt,o,a);n.arc(V.x,V.y,P,w+_e,nt+Math.PI)}const vt=(w-P/g+(T+v/g))/2;if(n.arc(o,a,g,w-P/g,vt,!0),n.arc(o,a,g,vt,T+v/g,!0),v>0){const V=Xi(H,W,o,a);n.arc(V.x,V.y,v,W+Math.PI,T-_e)}const Lt=Xi(F,E,o,a);if(n.lineTo(Lt.x,Lt.y),C>0){const V=Xi(F,X,o,a);n.arc(V.x,V.y,C,E-_e,X)}}else{n.moveTo(o,a);const it=Math.cos(X)*f+o,dt=Math.sin(X)*f+a;n.lineTo(it,dt);const vt=Math.cos(G)*f+o,Lt=Math.sin(G)*f+a;n.lineTo(vt,Lt)}n.closePath()}function __(n,t,e,i,s){const{fullCircles:r,startAngle:o,circumference:a}=t;let l=t.endAngle;if(r){To(n,t,e,i,l,s);for(let c=0;c<r;++c)n.fill();isNaN(a)||(l=o+(a%ee||ee))}return To(n,t,e,i,l,s),n.fill(),l}function x_(n,t,e,i,s){const{fullCircles:r,startAngle:o,circumference:a,options:l}=t,{borderWidth:c,borderJoinStyle:h,borderDash:u,borderDashOffset:d,borderRadius:f}=l,g=l.borderAlign==="inner";if(!c)return;n.setLineDash(u||[]),n.lineDashOffset=d,g?(n.lineWidth=c*2,n.lineJoin=h||"round"):(n.lineWidth=c,n.lineJoin=h||"bevel");let _=t.endAngle;const m=Math.abs(_-o)>=ee-1e-4;if(r){To(n,t,e,i,_,s);for(let b=0;b<r;++b)n.stroke();isNaN(a)||(_=o+(a%ee||ee))}g&&f_(n,t,_),!(m&&t.innerRadius>0)&&l.selfJoin&&_-o>=Kt&&f===0&&h!=="miter"&&d_(n,t,_),r||(To(n,t,e,i,_,s),n.stroke())}class Xs extends gn{constructor(e){super();et(this,"circumference");et(this,"endAngle");et(this,"fullCircles");et(this,"innerRadius");et(this,"outerRadius");et(this,"pixelMargin");et(this,"startAngle");et(this,"circular");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,this.circular=!1,e&&Object.assign(this,e)}inRange(e,i,s){const r=this.getProps(["x","y"],s),{angle:o,distance:a}=cd(r,{x:e,y:i}),{startAngle:l,endAngle:c,innerRadius:h,outerRadius:u,circumference:d}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],s),f=(this.options.spacing+this.options.borderWidth)/2,g=Dt(d,c-l),_=nr(o,l,c)&&l!==c,m=g>=ee||_,p=Nn(a,h+f,u+f);return m&&p}getCenterPoint(e){const{x:i,y:s,startAngle:r,endAngle:o,innerRadius:a,outerRadius:l}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:c,spacing:h}=this.options,u=(r+o)/2,d=(a+l+h+c)/2;return{x:i+Math.cos(u)*d,y:s+Math.sin(u)*d}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:i,circumference:s}=this,r=(i.offset||0)/4,o=(i.spacing||0)/2,a=i.circular;if(this.pixelMargin=i.borderAlign==="inner"?.33:0,this.fullCircles=s>ee?Math.floor(s/ee):0,s===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const l=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(l)*r,Math.sin(l)*r);const c=1-Math.sin(Math.min(Kt,s||0)),h=r*c;e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,__(e,this,h,o,a),x_(e,this,h,o,a),e.restore()}}et(Xs,"id","arc"),et(Xs,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,spacingMode:"angular",angle:void 0,circular:!0,selfJoin:!1}),et(Xs,"defaultRoutes",{backgroundColor:"backgroundColor"}),et(Xs,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function Gd(n,t,e=t){n.lineCap=Dt(e.borderCapStyle,t.borderCapStyle),n.setLineDash(Dt(e.borderDash,t.borderDash)),n.lineDashOffset=Dt(e.borderDashOffset,t.borderDashOffset),n.lineJoin=Dt(e.borderJoinStyle,t.borderJoinStyle),n.lineWidth=Dt(e.borderWidth,t.borderWidth),n.strokeStyle=Dt(e.borderColor,t.borderColor)}function v_(n,t,e){n.lineTo(e.x,e.y)}function M_(n){return n.stepped?Hp:n.tension||n.cubicInterpolationMode==="monotone"?Vp:v_}function Wd(n,t,e={}){const i=n.length,{start:s=0,end:r=i-1}=e,{start:o,end:a}=t,l=Math.max(s,o),c=Math.min(r,a),h=s<o&&r<o||s>a&&r>a;return{count:i,start:l,loop:t.loop,ilen:c<l&&!h?i+c-l:c-l}}function b_(n,t,e,i){const{points:s,options:r}=t,{count:o,start:a,loop:l,ilen:c}=Wd(s,e,i),h=M_(r);let{move:u=!0,reverse:d}=i||{},f,g,_;for(f=0;f<=c;++f)g=s[(a+(d?c-f:f))%o],!g.skip&&(u?(n.moveTo(g.x,g.y),u=!1):h(n,_,g,d,r.stepped),_=g);return l&&(g=s[(a+(d?c:0))%o],h(n,_,g,d,r.stepped)),!!l}function y_(n,t,e,i){const s=t.points,{count:r,start:o,ilen:a}=Wd(s,e,i),{move:l=!0,reverse:c}=i||{};let h=0,u=0,d,f,g,_,m,p;const b=x=>(o+(c?a-x:x))%r,E=()=>{_!==m&&(n.lineTo(h,m),n.lineTo(h,_),n.lineTo(h,p))};for(l&&(f=s[b(0)],n.moveTo(f.x,f.y)),d=0;d<=a;++d){if(f=s[b(d)],f.skip)continue;const x=f.x,T=f.y,w=x|0;w===g?(T<_?_=T:T>m&&(m=T),h=(u*h+x)/++u):(E(),n.lineTo(x,T),g=w,u=0,_=m=T),p=T}E()}function ja(n){const t=n.options,e=t.borderDash&&t.borderDash.length;return!n._decimated&&!n._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?y_:b_}function S_(n){return n.stepped?Mm:n.tension||n.cubicInterpolationMode==="monotone"?bm:Ti}function E_(n,t,e,i){let s=t._path;s||(s=t._path=new Path2D,t.path(s,e,i)&&s.closePath()),Gd(n,t.options),n.stroke(s)}function T_(n,t,e,i){const{segments:s,options:r}=t,o=ja(t);for(const a of s)Gd(n,r,a.style),n.beginPath(),o(n,t,a,{start:e,end:e+i-1})&&n.closePath(),n.stroke()}const A_=typeof Path2D=="function";function w_(n,t,e,i){A_&&!t.options.segment?E_(n,t,e,i):T_(n,t,e,i)}class ni extends gn{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const s=i.spanGaps?this._loop:this._fullLoop;dm(this._points,i,t,s,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=wm(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){const i=this.options,s=t[e],r=this.points,o=Cd(this,{property:e,start:s,end:s});if(!o.length)return;const a=[],l=S_(i);let c,h;for(c=0,h=o.length;c<h;++c){const{start:u,end:d}=o[c],f=r[u],g=r[d];if(f===g){a.push(f);continue}const _=Math.abs((s-f[e])/(g[e]-f[e])),m=l(f,g,_,i.stepped);m[e]=t[e],a.push(m)}return a.length===1?a[0]:a}pathSegment(t,e,i){return ja(this)(t,this,e,i)}path(t,e,i){const s=this.segments,r=ja(this);let o=this._loop;e=e||0,i=i||this.points.length-e;for(const a of s)o&=r(t,this,a,{start:e,end:e+i-1});return!!o}draw(t,e,i,s){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(t.save(),w_(t,this,i,s),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}et(ni,"id","line"),et(ni,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),et(ni,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),et(ni,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function Sh(n,t,e,i){const s=n.options,{[e]:r}=n.getProps([e],i);return Math.abs(t-r)<s.radius+s.hitRadius}class co extends gn{constructor(e){super();et(this,"parsed");et(this,"skip");et(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,i,s){const r=this.options,{x:o,y:a}=this.getProps(["x","y"],s);return Math.pow(e-o,2)+Math.pow(i-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(e,i){return Sh(this,e,"x",i)}inYRange(e,i){return Sh(this,e,"y",i)}getCenterPoint(e){const{x:i,y:s}=this.getProps(["x","y"],e);return{x:i,y:s}}size(e){e=e||this.options||{};let i=e.radius||0;i=Math.max(i,i&&e.hoverRadius||0);const s=i&&e.borderWidth||0;return(i+s)*2}draw(e,i){const s=this.options;this.skip||s.radius<.1||!Bn(this,i,this.size(s)/2)||(e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.fillStyle=s.backgroundColor,Ga(e,s,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}et(co,"id","point"),et(co,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),et(co,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Xd(n,t){const{x:e,y:i,base:s,width:r,height:o}=n.getProps(["x","y","base","width","height"],t);let a,l,c,h,u;return n.horizontal?(u=o/2,a=Math.min(e,s),l=Math.max(e,s),c=i-u,h=i+u):(u=r/2,a=e-u,l=e+u,c=Math.min(i,s),h=Math.max(i,s)),{left:a,top:c,right:l,bottom:h}}function ii(n,t,e,i){return n?0:Te(t,e,i)}function R_(n,t,e){const i=n.options.borderWidth,s=n.borderSkipped,r=xd(i);return{t:ii(s.top,r.top,0,e),r:ii(s.right,r.right,0,t),b:ii(s.bottom,r.bottom,0,e),l:ii(s.left,r.left,0,t)}}function C_(n,t,e){const{enableBorderRadius:i}=n.getProps(["enableBorderRadius"]),s=n.options.borderRadius,r=Oi(s),o=Math.min(t,e),a=n.borderSkipped,l=i||Ht(s);return{topLeft:ii(!l||a.top||a.left,r.topLeft,0,o),topRight:ii(!l||a.top||a.right,r.topRight,0,o),bottomLeft:ii(!l||a.bottom||a.left,r.bottomLeft,0,o),bottomRight:ii(!l||a.bottom||a.right,r.bottomRight,0,o)}}function P_(n){const t=Xd(n),e=t.right-t.left,i=t.bottom-t.top,s=R_(n,e/2,i/2),r=C_(n,e/2,i/2);return{outer:{x:t.left,y:t.top,w:e,h:i,radius:r},inner:{x:t.left+s.l,y:t.top+s.t,w:e-s.l-s.r,h:i-s.t-s.b,radius:{topLeft:Math.max(0,r.topLeft-Math.max(s.t,s.l)),topRight:Math.max(0,r.topRight-Math.max(s.t,s.r)),bottomLeft:Math.max(0,r.bottomLeft-Math.max(s.b,s.l)),bottomRight:Math.max(0,r.bottomRight-Math.max(s.b,s.r))}}}}function ea(n,t,e,i){const s=t===null,r=e===null,a=n&&!(s&&r)&&Xd(n,i);return a&&(s||Nn(t,a.left,a.right))&&(r||Nn(e,a.top,a.bottom))}function D_(n){return n.topLeft||n.topRight||n.bottomLeft||n.bottomRight}function L_(n,t){n.rect(t.x,t.y,t.w,t.h)}function na(n,t,e={}){const i=n.x!==e.x?-t:0,s=n.y!==e.y?-t:0,r=(n.x+n.w!==e.x+e.w?t:0)-i,o=(n.y+n.h!==e.y+e.h?t:0)-s;return{x:n.x+i,y:n.y+s,w:n.w+r,h:n.h+o,radius:n.radius}}class ho extends gn{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:i,backgroundColor:s}}=this,{inner:r,outer:o}=P_(this),a=D_(o.radius)?ir:L_;t.save(),(o.w!==r.w||o.h!==r.h)&&(t.beginPath(),a(t,na(o,e,r)),t.clip(),a(t,na(r,-e,o)),t.fillStyle=i,t.fill("evenodd")),t.beginPath(),a(t,na(r,e)),t.fillStyle=s,t.fill(),t.restore()}inRange(t,e,i){return ea(this,t,e,i)}inXRange(t,e){return ea(this,t,null,e)}inYRange(t,e){return ea(this,null,t,e)}getCenterPoint(t){const{x:e,y:i,base:s,horizontal:r}=this.getProps(["x","y","base","horizontal"],t);return{x:r?(e+s)/2:e,y:r?i:(i+s)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}et(ho,"id","bar"),et(ho,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),et(ho,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var I_=Object.freeze({__proto__:null,ArcElement:Xs,BarElement:ho,LineElement:ni,PointElement:co});const qa=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],Eh=qa.map(n=>n.replace("rgb(","rgba(").replace(")",", 0.5)"));function Yd(n){return qa[n%qa.length]}function jd(n){return Eh[n%Eh.length]}function O_(n,t){return n.borderColor=Yd(t),n.backgroundColor=jd(t),++t}function U_(n,t){return n.backgroundColor=n.data.map(()=>Yd(t++)),t}function F_(n,t){return n.backgroundColor=n.data.map(()=>jd(t++)),t}function N_(n){let t=0;return(e,i)=>{const s=n.getDatasetMeta(i).controller;s instanceof Pi?t=U_(e,t):s instanceof Qs?t=F_(e,t):s&&(t=O_(e,t))}}function Th(n){let t;for(t in n)if(n[t].borderColor||n[t].backgroundColor)return!0;return!1}function k_(n){return n&&(n.borderColor||n.backgroundColor)}function B_(){return he.borderColor!=="rgba(0,0,0,0.1)"||he.backgroundColor!=="rgba(0,0,0,0.1)"}var z_={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(n,t,e){if(!e.enabled)return;const{data:{datasets:i},options:s}=n.config,{elements:r}=s,o=Th(i)||k_(s)||r&&Th(r)||B_();if(!e.forceOverride&&o)return;const a=N_(n);i.forEach(a)}};function H_(n,t,e,i,s){const r=s.samples||i;if(r>=e)return n.slice(t,t+e);const o=[],a=(e-2)/(r-2);let l=0;const c=t+e-1;let h=t,u,d,f,g,_;for(o[l++]=n[h],u=0;u<r-2;u++){let m=0,p=0,b;const E=Math.floor((u+1)*a)+1+t,x=Math.min(Math.floor((u+2)*a)+1,e)+t,T=x-E;for(b=E;b<x;b++)m+=n[b].x,p+=n[b].y;m/=T,p/=T;const w=Math.floor(u*a)+1+t,A=Math.min(Math.floor((u+1)*a)+1,e)+t,{x:C,y}=n[h];for(f=g=-1,b=w;b<A;b++)g=.5*Math.abs((C-m)*(n[b].y-y)-(C-n[b].x)*(p-y)),g>f&&(f=g,d=n[b],_=b);o[l++]=d,h=_}return o[l++]=n[c],o}function V_(n,t,e,i){let s=0,r=0,o,a,l,c,h,u,d,f,g,_;const m=[],p=t+e-1,b=n[t].x,x=n[p].x-b;for(o=t;o<t+e;++o){a=n[o],l=(a.x-b)/x*i,c=a.y;const T=l|0;if(T===h)c<g?(g=c,u=o):c>_&&(_=c,d=o),s=(r*s+a.x)/++r;else{const w=o-1;if(!zt(u)&&!zt(d)){const A=Math.min(u,d),C=Math.max(u,d);A!==f&&A!==w&&m.push({...n[A],x:s}),C!==f&&C!==w&&m.push({...n[C],x:s})}o>0&&w!==f&&m.push(n[w]),m.push(a),h=T,r=0,g=_=c,u=d=f=o}}return m}function qd(n){if(n._decimated){const t=n._data;delete n._decimated,delete n._data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function Ah(n){n.data.datasets.forEach(t=>{qd(t)})}function G_(n,t){const e=t.length;let i=0,s;const{iScale:r}=n,{min:o,max:a,minDefined:l,maxDefined:c}=r.getUserBounds();return l&&(i=Te(kn(t,r.axis,o).lo,0,e-1)),c?s=Te(kn(t,r.axis,a).hi+1,i,e)-i:s=e-i,{start:i,count:s}}var W_={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(n,t,e)=>{if(!e.enabled){Ah(n);return}const i=n.width;n.data.datasets.forEach((s,r)=>{const{_data:o,indexAxis:a}=s,l=n.getDatasetMeta(r),c=o||s.data;if(Gs([a,n.options.indexAxis])==="y"||!l.controller.supportsDecimation)return;const h=n.scales[l.xAxisID];if(h.type!=="linear"&&h.type!=="time"||n.options.parsing)return;let{start:u,count:d}=G_(l,c);const f=e.threshold||4*i;if(d<=f){qd(s);return}zt(o)&&(s._data=c,delete s.data,Object.defineProperty(s,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(_){this._data=_}}));let g;switch(e.algorithm){case"lttb":g=H_(c,u,d,i,e);break;case"min-max":g=V_(c,u,d,i);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}s._decimated=g})},destroy(n){Ah(n)}};function X_(n,t,e){const i=n.segments,s=n.points,r=t.points,o=[];for(const a of i){let{start:l,end:c}=a;c=No(l,c,s);const h=$a(e,s[l],s[c],a.loop);if(!t.segments){o.push({source:a,target:h,start:s[l],end:s[c]});continue}const u=Cd(t,h);for(const d of u){const f=$a(e,r[d.start],r[d.end],d.loop),g=Rd(a,s,f);for(const _ of g)o.push({source:_,target:d,start:{[e]:wh(h,f,"start",Math.max)},end:{[e]:wh(h,f,"end",Math.min)}})}}return o}function $a(n,t,e,i){if(i)return;let s=t[n],r=e[n];return n==="angle"&&(s=Ie(s),r=Ie(r)),{property:n,start:s,end:r}}function Y_(n,t){const{x:e=null,y:i=null}=n||{},s=t.points,r=[];return t.segments.forEach(({start:o,end:a})=>{a=No(o,a,s);const l=s[o],c=s[a];i!==null?(r.push({x:l.x,y:i}),r.push({x:c.x,y:i})):e!==null&&(r.push({x:e,y:l.y}),r.push({x:e,y:c.y}))}),r}function No(n,t,e){for(;t>n;t--){const i=e[t];if(!isNaN(i.x)&&!isNaN(i.y))break}return t}function wh(n,t,e,i){return n&&t?i(n[e],t[e]):n?n[e]:t?t[e]:0}function $d(n,t){let e=[],i=!1;return ce(n)?(i=!0,e=n):e=Y_(n,t),e.length?new ni({points:e,options:{tension:0},_loop:i,_fullLoop:i}):null}function Rh(n){return n&&n.fill!==!1}function j_(n,t,e){let s=n[t].fill;const r=[t];let o;if(!e)return s;for(;s!==!1&&r.indexOf(s)===-1;){if(!me(s))return s;if(o=n[s],!o)return!1;if(o.visible)return s;r.push(s),s=o.fill}return!1}function q_(n,t,e){const i=J_(n);if(Ht(i))return isNaN(i.value)?!1:i;let s=parseFloat(i);return me(s)&&Math.floor(s)===s?$_(i[0],t,s,e):["origin","start","end","stack","shape"].indexOf(i)>=0&&i}function $_(n,t,e,i){return(n==="-"||n==="+")&&(e=t+e),e===t||e<0||e>=i?!1:e}function K_(n,t){let e=null;return n==="start"?e=t.bottom:n==="end"?e=t.top:Ht(n)?e=t.getPixelForValue(n.value):t.getBasePixel&&(e=t.getBasePixel()),e}function Z_(n,t,e){let i;return n==="start"?i=e:n==="end"?i=t.options.reverse?t.min:t.max:Ht(n)?i=n.value:i=t.getBaseValue(),i}function J_(n){const t=n.options,e=t.fill;let i=Dt(e&&e.target,e);return i===void 0&&(i=!!t.backgroundColor),i===!1||i===null?!1:i===!0?"origin":i}function Q_(n){const{scale:t,index:e,line:i}=n,s=[],r=i.segments,o=i.points,a=tx(t,e);a.push($d({x:null,y:t.bottom},i));for(let l=0;l<r.length;l++){const c=r[l];for(let h=c.start;h<=c.end;h++)ex(s,o[h],a)}return new ni({points:s,options:{}})}function tx(n,t){const e=[],i=n.getMatchingVisibleMetas("line");for(let s=0;s<i.length;s++){const r=i[s];if(r.index===t)break;r.hidden||e.unshift(r.dataset)}return e}function ex(n,t,e){const i=[];for(let s=0;s<e.length;s++){const r=e[s],{first:o,last:a,point:l}=nx(r,t,"x");if(!(!l||o&&a)){if(o)i.unshift(l);else if(n.push(l),!a)break}}n.push(...i)}function nx(n,t,e){const i=n.interpolate(t,e);if(!i)return{};const s=i[e],r=n.segments,o=n.points;let a=!1,l=!1;for(let c=0;c<r.length;c++){const h=r[c],u=o[h.start][e],d=o[h.end][e];if(Nn(s,u,d)){a=s===u,l=s===d;break}}return{first:a,last:l,point:i}}class Kd{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){const{x:s,y:r,radius:o}=this;return e=e||{start:0,end:ee},t.arc(s,r,o,e.end,e.start,!0),!i.bounds}interpolate(t){const{x:e,y:i,radius:s}=this,r=t.angle;return{x:e+Math.cos(r)*s,y:i+Math.sin(r)*s,angle:r}}}function ix(n){const{chart:t,fill:e,line:i}=n;if(me(e))return sx(t,e);if(e==="stack")return Q_(n);if(e==="shape")return!0;const s=rx(n);return s instanceof Kd?s:$d(s,i)}function sx(n,t){const e=n.getDatasetMeta(t);return e&&n.isDatasetVisible(t)?e.dataset:null}function rx(n){return(n.scale||{}).getPointPositionForValue?ax(n):ox(n)}function ox(n){const{scale:t={},fill:e}=n,i=K_(e,t);if(me(i)){const s=t.isHorizontal();return{x:s?i:null,y:s?null:i}}return null}function ax(n){const{scale:t,fill:e}=n,i=t.options,s=t.getLabels().length,r=i.reverse?t.max:t.min,o=Z_(e,t,r),a=[];if(i.grid.circular){const l=t.getPointPositionForValue(0,r);return new Kd({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(o)})}for(let l=0;l<s;++l)a.push(t.getPointPositionForValue(l,o));return a}function ia(n,t,e){const i=ix(t),{chart:s,index:r,line:o,scale:a,axis:l}=t,c=o.options,h=c.fill,u=c.backgroundColor,{above:d=u,below:f=u}=h||{},g=s.getDatasetMeta(r),_=Pd(s,g);i&&o.points.length&&(Io(n,lx(e,g.iScale)),cx(n,{line:o,target:i,above:d,below:f,area:e,scale:a,axis:l,clip:_}),Oo(n))}function lx(n,t){if(!t||t.getPointPositionForValue)return n;const e=t.getPixelForValue(t.min),i=t.getPixelForValue(t.max),s=Math.min(e,i),r=Math.max(e,i);return t.isHorizontal()?{...n,left:Math.max(n.left,s),right:Math.min(n.right,r)}:{...n,top:Math.max(n.top,s),bottom:Math.min(n.bottom,r)}}function cx(n,t){const{line:e,target:i,above:s,below:r,area:o,scale:a,clip:l}=t,c=e._loop?"angle":t.axis;n.save();let h=r;r!==s&&(c==="x"?(Ch(n,i,o.top),sa(n,{line:e,target:i,color:s,scale:a,property:c,clip:l}),n.restore(),n.save(),Ch(n,i,o.bottom)):c==="y"&&(Ph(n,i,o.left),sa(n,{line:e,target:i,color:r,scale:a,property:c,clip:l}),n.restore(),n.save(),Ph(n,i,o.right),h=s)),sa(n,{line:e,target:i,color:h,scale:a,property:c,clip:l}),n.restore()}function Ch(n,t,e){const{segments:i,points:s}=t;let r=!0,o=!1;n.beginPath();for(const a of i){const{start:l,end:c}=a,h=s[l],u=s[No(l,c,s)];r?(n.moveTo(h.x,h.y),r=!1):(n.lineTo(h.x,e),n.lineTo(h.x,h.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(u.x,e)}n.lineTo(t.first().x,e),n.closePath(),n.clip()}function Ph(n,t,e){const{segments:i,points:s}=t;let r=!0,o=!1;n.beginPath();for(const a of i){const{start:l,end:c}=a,h=s[l],u=s[No(l,c,s)];r?(n.moveTo(h.x,h.y),r=!1):(n.lineTo(e,h.y),n.lineTo(h.x,h.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(e,u.y)}n.lineTo(e,t.first().y),n.closePath(),n.clip()}function sa(n,t){const{line:e,target:i,property:s,color:r,scale:o,clip:a}=t,l=X_(e,i,s);for(const{source:c,target:h,start:u,end:d}of l){const{style:{backgroundColor:f=r}={}}=c,g=i!==!0;n.save(),n.fillStyle=f,hx(n,o,a,g&&$a(s,u,d)),n.beginPath();const _=!!e.pathSegment(n,c);let m;if(g){_?n.closePath():Dh(n,i,d,s);const p=!!i.pathSegment(n,h,{move:_,reverse:!0});m=_&&p,m||Dh(n,i,u,s)}n.closePath(),n.fill(m?"evenodd":"nonzero"),n.restore()}}function hx(n,t,e,i){const s=t.chart.chartArea,{property:r,start:o,end:a}=i||{};if(r==="x"||r==="y"){let l,c,h,u;r==="x"?(l=o,c=s.top,h=a,u=s.bottom):(l=s.left,c=o,h=s.right,u=a),n.beginPath(),e&&(l=Math.max(l,e.left),h=Math.min(h,e.right),c=Math.max(c,e.top),u=Math.min(u,e.bottom)),n.rect(l,c,h-l,u-c),n.clip()}}function Dh(n,t,e,i){const s=t.interpolate(e,i);s&&n.lineTo(s.x,s.y)}var ux={id:"filler",afterDatasetsUpdate(n,t,e){const i=(n.data.datasets||[]).length,s=[];let r,o,a,l;for(o=0;o<i;++o)r=n.getDatasetMeta(o),a=r.dataset,l=null,a&&a.options&&a instanceof ni&&(l={visible:n.isDatasetVisible(o),index:o,fill:q_(a,o,i),chart:n,axis:r.controller.options.indexAxis,scale:r.vScale,line:a}),r.$filler=l,s.push(l);for(o=0;o<i;++o)l=s[o],!(!l||l.fill===!1)&&(l.fill=j_(s,o,e.propagate))},beforeDraw(n,t,e){const i=e.drawTime==="beforeDraw",s=n.getSortedVisibleDatasetMetas(),r=n.chartArea;for(let o=s.length-1;o>=0;--o){const a=s[o].$filler;a&&(a.line.updateControlPoints(r,a.axis),i&&a.fill&&ia(n.ctx,a,r))}},beforeDatasetsDraw(n,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const i=n.getSortedVisibleDatasetMetas();for(let s=i.length-1;s>=0;--s){const r=i[s].$filler;Rh(r)&&ia(n.ctx,r,n.chartArea)}},beforeDatasetDraw(n,t,e){const i=t.meta.$filler;!Rh(i)||e.drawTime!=="beforeDatasetDraw"||ia(n.ctx,i,n.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Lh=(n,t)=>{let{boxHeight:e=t,boxWidth:i=t}=n;return n.usePointStyle&&(e=Math.min(e,t),i=n.pointStyleWidth||Math.min(i,t)),{boxWidth:i,boxHeight:e,itemHeight:Math.max(t,e)}},dx=(n,t)=>n!==null&&t!==null&&n.datasetIndex===t.datasetIndex&&n.index===t.index;class Ih extends gn{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,i){this.maxWidth=t,this.maxHeight=e,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=oe(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(i=>t.filter(i,this.chart.data))),t.sort&&(e=e.sort((i,s)=>t.sort(i,s,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const i=t.labels,s=be(i.font),r=s.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=Lh(i,r);let c,h;e.font=s.string,this.isHorizontal()?(c=this.maxWidth,h=this._fitRows(o,r,a,l)+10):(h=this.maxHeight,c=this._fitCols(o,s,a,l)+10),this.width=Math.min(c,t.maxWidth||this.maxWidth),this.height=Math.min(h,t.maxHeight||this.maxHeight)}_fitRows(t,e,i,s){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],h=s+a;let u=t;r.textAlign="left",r.textBaseline="middle";let d=-1,f=-h;return this.legendItems.forEach((g,_)=>{const m=i+e/2+r.measureText(g.text).width;(_===0||c[c.length-1]+m+2*a>o)&&(u+=h,c[c.length-(_>0?0:1)]=0,f+=h,d++),l[_]={left:0,top:f,row:d,width:m,height:s},c[c.length-1]+=m+a}),u}_fitCols(t,e,i,s){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],h=o-t;let u=a,d=0,f=0,g=0,_=0;return this.legendItems.forEach((m,p)=>{const{itemWidth:b,itemHeight:E}=fx(i,e,r,m,s);p>0&&f+E+2*a>h&&(u+=d+a,c.push({width:d,height:f}),g+=d+a,_++,d=f=0),l[p]={left:g,top:f,col:_,width:b,height:E},d=Math.max(d,b),f+=E+a}),u+=d,c.push({width:d,height:f}),u}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:i,labels:{padding:s},rtl:r}}=this,o=hs(r,this.left,this.width);if(this.isHorizontal()){let a=0,l=Le(i,this.left+s,this.right-this.lineWidths[a]);for(const c of e)a!==c.row&&(a=c.row,l=Le(i,this.left+s,this.right-this.lineWidths[a])),c.top+=this.top+t+s,c.left=o.leftForLtr(o.x(l),c.width),l+=c.width+s}else{let a=0,l=Le(i,this.top+t+s,this.bottom-this.columnSizes[a].height);for(const c of e)c.col!==a&&(a=c.col,l=Le(i,this.top+t+s,this.bottom-this.columnSizes[a].height)),c.top=l,c.left+=this.left+s,c.left=o.leftForLtr(o.x(c.left),c.width),l+=c.height+s}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;Io(t,this),this._draw(),Oo(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:i,ctx:s}=this,{align:r,labels:o}=t,a=he.color,l=hs(t.rtl,this.left,this.width),c=be(o.font),{padding:h}=o,u=c.size,d=u/2;let f;this.drawTitle(),s.textAlign=l.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=c.string;const{boxWidth:g,boxHeight:_,itemHeight:m}=Lh(o,u),p=function(w,A,C){if(isNaN(g)||g<=0||isNaN(_)||_<0)return;s.save();const y=Dt(C.lineWidth,1);if(s.fillStyle=Dt(C.fillStyle,a),s.lineCap=Dt(C.lineCap,"butt"),s.lineDashOffset=Dt(C.lineDashOffset,0),s.lineJoin=Dt(C.lineJoin,"miter"),s.lineWidth=y,s.strokeStyle=Dt(C.strokeStyle,a),s.setLineDash(Dt(C.lineDash,[])),o.usePointStyle){const v={radius:_*Math.SQRT2/2,pointStyle:C.pointStyle,rotation:C.rotation,borderWidth:y},P=l.xPlus(w,g/2),F=A+d;_d(s,v,P,F,o.pointStyleWidth&&g)}else{const v=A+Math.max((u-_)/2,0),P=l.leftForLtr(w,g),F=Oi(C.borderRadius);s.beginPath(),Object.values(F).some(N=>N!==0)?ir(s,{x:P,y:v,w:g,h:_,radius:F}):s.rect(P,v,g,_),s.fill(),y!==0&&s.stroke()}s.restore()},b=function(w,A,C){Ni(s,C.text,w,A+m/2,c,{strikethrough:C.hidden,textAlign:l.textAlign(C.textAlign)})},E=this.isHorizontal(),x=this._computeTitleHeight();E?f={x:Le(r,this.left+h,this.right-i[0]),y:this.top+h+x,line:0}:f={x:this.left+h,y:Le(r,this.top+x+h,this.bottom-e[0].height),line:0},Td(this.ctx,t.textDirection);const T=m+h;this.legendItems.forEach((w,A)=>{s.strokeStyle=w.fontColor,s.fillStyle=w.fontColor;const C=s.measureText(w.text).width,y=l.textAlign(w.textAlign||(w.textAlign=o.textAlign)),v=g+d+C;let P=f.x,F=f.y;l.setWidth(this.width),E?A>0&&P+v+h>this.right&&(F=f.y+=T,f.line++,P=f.x=Le(r,this.left+h,this.right-i[f.line])):A>0&&F+T>this.bottom&&(P=f.x=P+e[f.line].width+h,f.line++,F=f.y=Le(r,this.top+x+h,this.bottom-e[f.line].height));const N=l.x(P);if(p(N,F,w),P=Pp(y,P+g+d,E?P+v:this.right,t.rtl),b(l.x(P),F,w),E)f.x+=v+h;else if(typeof w.text!="string"){const X=c.lineHeight;f.y+=Zd(w,X)+h}else f.y+=T}),Ad(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,i=be(e.font),s=Ue(e.padding);if(!e.display)return;const r=hs(t.rtl,this.left,this.width),o=this.ctx,a=e.position,l=i.size/2,c=s.top+l;let h,u=this.left,d=this.width;if(this.isHorizontal())d=Math.max(...this.lineWidths),h=this.top+c,u=Le(t.align,u,this.right-d);else{const g=this.columnSizes.reduce((_,m)=>Math.max(_,m.height),0);h=c+Le(t.align,this.top,this.bottom-g-t.labels.padding-this._computeTitleHeight())}const f=Le(a,u,u+d);o.textAlign=r.textAlign(Zl(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=i.string,Ni(o,e.text,f,h,i)}_computeTitleHeight(){const t=this.options.title,e=be(t.font),i=Ue(t.padding);return t.display?e.lineHeight+i.height:0}_getLegendItemAt(t,e){let i,s,r;if(Nn(t,this.left,this.right)&&Nn(e,this.top,this.bottom)){for(r=this.legendHitBoxes,i=0;i<r.length;++i)if(s=r[i],Nn(t,s.left,s.left+s.width)&&Nn(e,s.top,s.top+s.height))return this.legendItems[i]}return null}handleEvent(t){const e=this.options;if(!gx(t.type,e))return;const i=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const s=this._hoveredItem,r=dx(s,i);s&&!r&&oe(e.onLeave,[t,s,this],this),this._hoveredItem=i,i&&!r&&oe(e.onHover,[t,i,this],this)}else i&&oe(e.onClick,[t,i,this],this)}}function fx(n,t,e,i,s){const r=px(i,n,t,e),o=mx(s,i,t.lineHeight);return{itemWidth:r,itemHeight:o}}function px(n,t,e,i){let s=n.text;return s&&typeof s!="string"&&(s=s.reduce((r,o)=>r.length>o.length?r:o)),t+e.size/2+i.measureText(s).width}function mx(n,t,e){let i=n;return typeof t.text!="string"&&(i=Zd(t,e)),i}function Zd(n,t){const e=n.text?n.text.length:0;return t*e}function gx(n,t){return!!((n==="mousemove"||n==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(n==="click"||n==="mouseup"))}var _x={id:"legend",_element:Ih,start(n,t,e){const i=n.legend=new Ih({ctx:n.ctx,options:e,chart:n});Oe.configure(n,i,e),Oe.addBox(n,i)},stop(n){Oe.removeBox(n,n.legend),delete n.legend},beforeUpdate(n,t,e){const i=n.legend;Oe.configure(n,i,e),i.options=e},afterUpdate(n){const t=n.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(n,t){t.replay||n.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(n,t,e){const i=t.datasetIndex,s=e.chart;s.isDatasetVisible(i)?(s.hide(i),t.hidden=!0):(s.show(i),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:n=>n.chart.options.color,boxWidth:40,padding:10,generateLabels(n){const t=n.data.datasets,{labels:{usePointStyle:e,pointStyle:i,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=n.legend.options;return n._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(e?0:void 0),h=Ue(c.borderWidth);return{text:t[l.index].label,fillStyle:c.backgroundColor,fontColor:r,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(h.width+h.height)/4,strokeStyle:c.borderColor,pointStyle:i||c.pointStyle,rotation:c.rotation,textAlign:s||c.textAlign,borderRadius:o&&(a||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:n=>n.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:n=>!n.startsWith("on"),labels:{_scriptable:n=>!["generateLabels","filter","sort"].includes(n)}}};class oc extends gn{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;const s=ce(i.text)?i.text.length:1;this._padding=Ue(i.padding);const r=s*be(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:e,left:i,bottom:s,right:r,options:o}=this,a=o.align;let l=0,c,h,u;return this.isHorizontal()?(h=Le(a,i,r),u=e+t,c=r-i):(o.position==="left"?(h=i+t,u=Le(a,s,e),l=Kt*-.5):(h=r-t,u=Le(a,e,s),l=Kt*.5),c=s-e),{titleX:h,titleY:u,maxWidth:c,rotation:l}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const i=be(e.font),r=i.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:l,rotation:c}=this._drawArgs(r);Ni(t,e.text,0,0,i,{color:e.color,maxWidth:l,rotation:c,textAlign:Zl(e.align),textBaseline:"middle",translation:[o,a]})}}function xx(n,t){const e=new oc({ctx:n.ctx,options:t,chart:n});Oe.configure(n,e,t),Oe.addBox(n,e),n.titleBlock=e}var vx={id:"title",_element:oc,start(n,t,e){xx(n,e)},stop(n){const t=n.titleBlock;Oe.removeBox(n,t),delete n.titleBlock},beforeUpdate(n,t,e){const i=n.titleBlock;Oe.configure(n,i,e),i.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Ar=new WeakMap;var Mx={id:"subtitle",start(n,t,e){const i=new oc({ctx:n.ctx,options:e,chart:n});Oe.configure(n,i,e),Oe.addBox(n,i),Ar.set(n,i)},stop(n){Oe.removeBox(n,Ar.get(n)),Ar.delete(n)},beforeUpdate(n,t,e){const i=Ar.get(n);Oe.configure(n,i,e),i.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Ys={average(n){if(!n.length)return!1;let t,e,i=new Set,s=0,r=0;for(t=0,e=n.length;t<e;++t){const a=n[t].element;if(a&&a.hasValue()){const l=a.tooltipPosition();i.add(l.x),s+=l.y,++r}}return r===0||i.size===0?!1:{x:[...i].reduce((a,l)=>a+l)/i.size,y:s/r}},nearest(n,t){if(!n.length)return!1;let e=t.x,i=t.y,s=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=n.length;r<o;++r){const l=n[r].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),h=Ha(t,c);h<s&&(s=h,a=l)}}if(a){const l=a.tooltipPosition();e=l.x,i=l.y}return{x:e,y:i}}};function _n(n,t){return t&&(ce(t)?Array.prototype.push.apply(n,t):n.push(t)),n}function In(n){return(typeof n=="string"||n instanceof String)&&n.indexOf(`
`)>-1?n.split(`
`):n}function bx(n,t){const{element:e,datasetIndex:i,index:s}=t,r=n.getDatasetMeta(i).controller,{label:o,value:a}=r.getLabelAndValue(s);return{chart:n,label:o,parsed:r.getParsed(s),raw:n.data.datasets[i].data[s],formattedValue:a,dataset:r.getDataset(),dataIndex:s,datasetIndex:i,element:e}}function Oh(n,t){const e=n.chart.ctx,{body:i,footer:s,title:r}=n,{boxWidth:o,boxHeight:a}=t,l=be(t.bodyFont),c=be(t.titleFont),h=be(t.footerFont),u=r.length,d=s.length,f=i.length,g=Ue(t.padding);let _=g.height,m=0,p=i.reduce((x,T)=>x+T.before.length+T.lines.length+T.after.length,0);if(p+=n.beforeBody.length+n.afterBody.length,u&&(_+=u*c.lineHeight+(u-1)*t.titleSpacing+t.titleMarginBottom),p){const x=t.displayColors?Math.max(a,l.lineHeight):l.lineHeight;_+=f*x+(p-f)*l.lineHeight+(p-1)*t.bodySpacing}d&&(_+=t.footerMarginTop+d*h.lineHeight+(d-1)*t.footerSpacing);let b=0;const E=function(x){m=Math.max(m,e.measureText(x).width+b)};return e.save(),e.font=c.string,te(n.title,E),e.font=l.string,te(n.beforeBody.concat(n.afterBody),E),b=t.displayColors?o+2+t.boxPadding:0,te(i,x=>{te(x.before,E),te(x.lines,E),te(x.after,E)}),b=0,e.font=h.string,te(n.footer,E),e.restore(),m+=g.width,{width:m,height:_}}function yx(n,t){const{y:e,height:i}=t;return e<i/2?"top":e>n.height-i/2?"bottom":"center"}function Sx(n,t,e,i){const{x:s,width:r}=i,o=e.caretSize+e.caretPadding;if(n==="left"&&s+r+o>t.width||n==="right"&&s-r-o<0)return!0}function Ex(n,t,e,i){const{x:s,width:r}=e,{width:o,chartArea:{left:a,right:l}}=n;let c="center";return i==="center"?c=s<=(a+l)/2?"left":"right":s<=r/2?c="left":s>=o-r/2&&(c="right"),Sx(c,n,t,e)&&(c="center"),c}function Uh(n,t,e){const i=e.yAlign||t.yAlign||yx(n,e);return{xAlign:e.xAlign||t.xAlign||Ex(n,t,e,i),yAlign:i}}function Tx(n,t){let{x:e,width:i}=n;return t==="right"?e-=i:t==="center"&&(e-=i/2),e}function Ax(n,t,e){let{y:i,height:s}=n;return t==="top"?i+=e:t==="bottom"?i-=s+e:i-=s/2,i}function Fh(n,t,e,i){const{caretSize:s,caretPadding:r,cornerRadius:o}=n,{xAlign:a,yAlign:l}=e,c=s+r,{topLeft:h,topRight:u,bottomLeft:d,bottomRight:f}=Oi(o);let g=Tx(t,a);const _=Ax(t,l,c);return l==="center"?a==="left"?g+=c:a==="right"&&(g-=c):a==="left"?g-=Math.max(h,d)+s:a==="right"&&(g+=Math.max(u,f)+s),{x:Te(g,0,i.width-t.width),y:Te(_,0,i.height-t.height)}}function wr(n,t,e){const i=Ue(e.padding);return t==="center"?n.x+n.width/2:t==="right"?n.x+n.width-i.right:n.x+i.left}function Nh(n){return _n([],In(n))}function wx(n,t,e){return ui(n,{tooltip:t,tooltipItems:e,type:"tooltip"})}function kh(n,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?n.override(e):n}const Jd={beforeTitle:An,title(n){if(n.length>0){const t=n[0],e=t.chart.data.labels,i=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(i>0&&t.dataIndex<i)return e[t.dataIndex]}return""},afterTitle:An,beforeBody:An,beforeLabel:An,label(n){if(this&&this.options&&this.options.mode==="dataset")return n.label+": "+n.formattedValue||n.formattedValue;let t=n.dataset.label||"";t&&(t+=": ");const e=n.formattedValue;return zt(e)||(t+=e),t},labelColor(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:An,afterBody:An,beforeFooter:An,footer:An,afterFooter:An};function ze(n,t,e,i){const s=n[t].call(e,i);return typeof s>"u"?Jd[t].call(e,i):s}class Ka extends gn{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,i=this.options.setContext(this.getContext()),s=i.enabled&&e.options.animation&&i.animations,r=new Dd(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=wx(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:i}=e,s=ze(i,"beforeTitle",this,t),r=ze(i,"title",this,t),o=ze(i,"afterTitle",this,t);let a=[];return a=_n(a,In(s)),a=_n(a,In(r)),a=_n(a,In(o)),a}getBeforeBody(t,e){return Nh(ze(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:i}=e,s=[];return te(t,r=>{const o={before:[],lines:[],after:[]},a=kh(i,r);_n(o.before,In(ze(a,"beforeLabel",this,r))),_n(o.lines,ze(a,"label",this,r)),_n(o.after,In(ze(a,"afterLabel",this,r))),s.push(o)}),s}getAfterBody(t,e){return Nh(ze(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:i}=e,s=ze(i,"beforeFooter",this,t),r=ze(i,"footer",this,t),o=ze(i,"afterFooter",this,t);let a=[];return a=_n(a,In(s)),a=_n(a,In(r)),a=_n(a,In(o)),a}_createItems(t){const e=this._active,i=this.chart.data,s=[],r=[],o=[];let a=[],l,c;for(l=0,c=e.length;l<c;++l)a.push(bx(this.chart,e[l]));return t.filter&&(a=a.filter((h,u,d)=>t.filter(h,u,d,i))),t.itemSort&&(a=a.sort((h,u)=>t.itemSort(h,u,i))),te(a,h=>{const u=kh(t.callbacks,h);s.push(ze(u,"labelColor",this,h)),r.push(ze(u,"labelPointStyle",this,h)),o.push(ze(u,"labelTextColor",this,h))}),this.labelColors=s,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(t,e){const i=this.options.setContext(this.getContext()),s=this._active;let r,o=[];if(!s.length)this.opacity!==0&&(r={opacity:0});else{const a=Ys[i.position].call(this,s,this._eventPosition);o=this._createItems(i),this.title=this.getTitle(o,i),this.beforeBody=this.getBeforeBody(o,i),this.body=this.getBody(o,i),this.afterBody=this.getAfterBody(o,i),this.footer=this.getFooter(o,i);const l=this._size=Oh(this,i),c=Object.assign({},a,l),h=Uh(this.chart,i,c),u=Fh(i,c,h,this.chart);this.xAlign=h.xAlign,this.yAlign=h.yAlign,r={opacity:1,x:u.x,y:u.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,s){const r=this.getCaretPosition(t,i,s);e.lineTo(r.x1,r.y1),e.lineTo(r.x2,r.y2),e.lineTo(r.x3,r.y3)}getCaretPosition(t,e,i){const{xAlign:s,yAlign:r}=this,{caretSize:o,cornerRadius:a}=i,{topLeft:l,topRight:c,bottomLeft:h,bottomRight:u}=Oi(a),{x:d,y:f}=t,{width:g,height:_}=e;let m,p,b,E,x,T;return r==="center"?(x=f+_/2,s==="left"?(m=d,p=m-o,E=x+o,T=x-o):(m=d+g,p=m+o,E=x-o,T=x+o),b=m):(s==="left"?p=d+Math.max(l,h)+o:s==="right"?p=d+g-Math.max(c,u)-o:p=this.caretX,r==="top"?(E=f,x=E-o,m=p-o,b=p+o):(E=f+_,x=E+o,m=p+o,b=p-o),T=E),{x1:m,x2:p,x3:b,y1:E,y2:x,y3:T}}drawTitle(t,e,i){const s=this.title,r=s.length;let o,a,l;if(r){const c=hs(i.rtl,this.x,this.width);for(t.x=wr(this,i.titleAlign,i),e.textAlign=c.textAlign(i.titleAlign),e.textBaseline="middle",o=be(i.titleFont),a=i.titleSpacing,e.fillStyle=i.titleColor,e.font=o.string,l=0;l<r;++l)e.fillText(s[l],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,l+1===r&&(t.y+=i.titleMarginBottom-a)}}_drawColorBox(t,e,i,s,r){const o=this.labelColors[i],a=this.labelPointStyles[i],{boxHeight:l,boxWidth:c}=r,h=be(r.bodyFont),u=wr(this,"left",r),d=s.x(u),f=l<h.lineHeight?(h.lineHeight-l)/2:0,g=e.y+f;if(r.usePointStyle){const _={radius:Math.min(c,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},m=s.leftForLtr(d,c)+c/2,p=g+l/2;t.strokeStyle=r.multiKeyBackground,t.fillStyle=r.multiKeyBackground,Ga(t,_,m,p),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,Ga(t,_,m,p)}else{t.lineWidth=Ht(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const _=s.leftForLtr(d,c),m=s.leftForLtr(s.xPlus(d,1),c-2),p=Oi(o.borderRadius);Object.values(p).some(b=>b!==0)?(t.beginPath(),t.fillStyle=r.multiKeyBackground,ir(t,{x:_,y:g,w:c,h:l,radius:p}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),ir(t,{x:m,y:g+1,w:c-2,h:l-2,radius:p}),t.fill()):(t.fillStyle=r.multiKeyBackground,t.fillRect(_,g,c,l),t.strokeRect(_,g,c,l),t.fillStyle=o.backgroundColor,t.fillRect(m,g+1,c-2,l-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){const{body:s}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:l,boxWidth:c,boxPadding:h}=i,u=be(i.bodyFont);let d=u.lineHeight,f=0;const g=hs(i.rtl,this.x,this.width),_=function(C){e.fillText(C,g.x(t.x+f),t.y+d/2),t.y+=d+r},m=g.textAlign(o);let p,b,E,x,T,w,A;for(e.textAlign=o,e.textBaseline="middle",e.font=u.string,t.x=wr(this,m,i),e.fillStyle=i.bodyColor,te(this.beforeBody,_),f=a&&m!=="right"?o==="center"?c/2+h:c+2+h:0,x=0,w=s.length;x<w;++x){for(p=s[x],b=this.labelTextColors[x],e.fillStyle=b,te(p.before,_),E=p.lines,a&&E.length&&(this._drawColorBox(e,t,x,g,i),d=Math.max(u.lineHeight,l)),T=0,A=E.length;T<A;++T)_(E[T]),d=u.lineHeight;te(p.after,_)}f=0,d=u.lineHeight,te(this.afterBody,_),t.y-=r}drawFooter(t,e,i){const s=this.footer,r=s.length;let o,a;if(r){const l=hs(i.rtl,this.x,this.width);for(t.x=wr(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=l.textAlign(i.footerAlign),e.textBaseline="middle",o=be(i.footerFont),e.fillStyle=i.footerColor,e.font=o.string,a=0;a<r;++a)e.fillText(s[a],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+i.footerSpacing}}drawBackground(t,e,i,s){const{xAlign:r,yAlign:o}=this,{x:a,y:l}=t,{width:c,height:h}=i,{topLeft:u,topRight:d,bottomLeft:f,bottomRight:g}=Oi(s.cornerRadius);e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.beginPath(),e.moveTo(a+u,l),o==="top"&&this.drawCaret(t,e,i,s),e.lineTo(a+c-d,l),e.quadraticCurveTo(a+c,l,a+c,l+d),o==="center"&&r==="right"&&this.drawCaret(t,e,i,s),e.lineTo(a+c,l+h-g),e.quadraticCurveTo(a+c,l+h,a+c-g,l+h),o==="bottom"&&this.drawCaret(t,e,i,s),e.lineTo(a+f,l+h),e.quadraticCurveTo(a,l+h,a,l+h-f),o==="center"&&r==="left"&&this.drawCaret(t,e,i,s),e.lineTo(a,l+u),e.quadraticCurveTo(a,l,a+u,l),e.closePath(),e.fill(),s.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,i=this.$animations,s=i&&i.x,r=i&&i.y;if(s||r){const o=Ys[t.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=Oh(this,t),l=Object.assign({},o,this._size),c=Uh(e,t,l),h=Fh(t,l,c,e);(s._to!==h.x||r._to!==h.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,h))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(e);const s={width:this.width,height:this.height},r={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const o=Ue(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=i,this.drawBackground(r,t,s,e),Td(t,e.textDirection),r.y+=o.top,this.drawTitle(r,t,e),this.drawBody(r,t,e),this.drawFooter(r,t,e),Ad(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const i=this._active,s=t.map(({datasetIndex:a,index:l})=>{const c=this.chart.getDatasetMeta(a);if(!c)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:c.data[l],index:l}}),r=!vo(i,s),o=this._positionChanged(s,e);(r||o)&&(this._active=s,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,r=this._active||[],o=this._getActiveElements(t,r,e,i),a=this._positionChanged(o,t),l=e||!vo(o,r)||a;return l&&(this._active=o,(s.enabled||s.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),l}_getActiveElements(t,e,i,s){const r=this.options;if(t.type==="mouseout")return[];if(!s)return e.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(t,r.mode,r,i);return r.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:i,caretY:s,options:r}=this,o=Ys[r.position].call(this,t,e);return o!==!1&&(i!==o.x||s!==o.y)}}et(Ka,"positioners",Ys);var Rx={id:"tooltip",_element:Ka,positioners:Ys,afterInit(n,t,e){e&&(n.tooltip=new Ka({chart:n,options:e}))},beforeUpdate(n,t,e){n.tooltip&&n.tooltip.initialize(e)},reset(n,t,e){n.tooltip&&n.tooltip.initialize(e)},afterDraw(n){const t=n.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(n.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(n.ctx),n.notifyPlugins("afterTooltipDraw",e)}},afterEvent(n,t){if(n.tooltip){const e=t.replay;n.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(n,t)=>t.bodyFont.size,boxWidth:(n,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:Jd},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:n=>n!=="filter"&&n!=="itemSort"&&n!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},Cx=Object.freeze({__proto__:null,Colors:z_,Decimation:W_,Filler:ux,Legend:_x,SubTitle:Mx,Title:vx,Tooltip:Rx});const Px=(n,t,e,i)=>(typeof t=="string"?(e=n.push(t)-1,i.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function Dx(n,t,e,i){const s=n.indexOf(t);if(s===-1)return Px(n,t,e,i);const r=n.lastIndexOf(t);return s!==r?e:s}const Lx=(n,t)=>n===null?null:Te(Math.round(n),0,t);function Bh(n){const t=this.getLabels();return n>=0&&n<t.length?t[n]:n}class Za extends Hi{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const i=this.getLabels();for(const{index:s,label:r}of e)i[s]===r&&i.splice(s,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(zt(t))return null;const i=this.getLabels();return e=isFinite(e)&&i[e]===t?e:Dx(i,t,Dt(e,t),this._addedLabels),Lx(e,i.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:i,max:s}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(i=0),e||(s=this.getLabels().length-1)),this.min=i,this.max=s}buildTicks(){const t=this.min,e=this.max,i=this.options.offset,s=[];let r=this.getLabels();r=t===0&&e===r.length-1?r:r.slice(t,e+1),this._valueRange=Math.max(r.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let o=t;o<=e;o++)s.push({value:o});return s}getLabelForValue(t){return Bh.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}et(Za,"id","category"),et(Za,"defaults",{ticks:{callback:Bh}});function Ix(n,t){const e=[],{bounds:s,step:r,min:o,max:a,precision:l,count:c,maxTicks:h,maxDigits:u,includeBounds:d}=n,f=r||1,g=h-1,{min:_,max:m}=t,p=!zt(o),b=!zt(a),E=!zt(c),x=(m-_)/(u+1);let T=Oc((m-_)/g/f)*f,w,A,C,y;if(T<1e-14&&!p&&!b)return[{value:_},{value:m}];y=Math.ceil(m/T)-Math.floor(_/T),y>g&&(T=Oc(y*T/g/f)*f),zt(l)||(w=Math.pow(10,l),T=Math.ceil(T*w)/w),s==="ticks"?(A=Math.floor(_/T)*T,C=Math.ceil(m/T)*T):(A=_,C=m),p&&b&&r&&Sp((a-o)/r,T/1e3)?(y=Math.round(Math.min((a-o)/T,h)),T=(a-o)/y,A=o,C=a):E?(A=p?o:A,C=b?a:C,y=c-1,T=(C-A)/y):(y=(C-A)/T,Ks(y,Math.round(y),T/1e3)?y=Math.round(y):y=Math.ceil(y));const v=Math.max(Uc(T),Uc(A));w=Math.pow(10,zt(l)?v:l),A=Math.round(A*w)/w,C=Math.round(C*w)/w;let P=0;for(p&&(d&&A!==o?(e.push({value:o}),A<o&&P++,Ks(Math.round((A+P*T)*w)/w,o,zh(o,x,n))&&P++):A<o&&P++);P<y;++P){const F=Math.round((A+P*T)*w)/w;if(b&&F>a)break;e.push({value:F})}return b&&d&&C!==a?e.length&&Ks(e[e.length-1].value,a,zh(a,x,n))?e[e.length-1].value=a:e.push({value:a}):(!b||C===a)&&e.push({value:C}),e}function zh(n,t,{horizontal:e,minRotation:i}){const s=dn(i),r=(e?Math.sin(s):Math.cos(s))||.001,o=.75*t*(""+n).length;return Math.min(t/r,o)}class Ao extends Hi{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return zt(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds();let{min:s,max:r}=this;const o=l=>s=e?s:l,a=l=>r=i?r:l;if(t){const l=yn(s),c=yn(r);l<0&&c<0?a(0):l>0&&c>0&&o(0)}if(s===r){let l=r===0?1:Math.abs(r*.05);a(r+l),t||o(s-l)}this.min=s,this.max=r}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:i}=t,s;return i?(s=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,s>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`),s=1e3)):(s=this.computeTickLimit(),e=e||11),e&&(s=Math.min(e,s)),s}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let i=this.getTickLimit();i=Math.max(2,i);const s={maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},r=this._range||this,o=Ix(s,r);return t.bounds==="ticks"&&ld(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){const s=(i-e)/Math.max(t.length-1,1)/2;e-=s,i+=s}this._startValue=e,this._endValue=i,this._valueRange=i-e}getLabelForValue(t){return cr(t,this.chart.options.locale,this.options.ticks.format)}}class Ja extends Ao{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=me(t)?t:0,this.max=me(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,i=dn(this.options.ticks.minRotation),s=(t?Math.sin(i):Math.cos(i))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,r.lineHeight/s))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}et(Ja,"id","linear"),et(Ja,"defaults",{ticks:{callback:Lo.formatters.numeric}});const rr=n=>Math.floor(ti(n)),_i=(n,t)=>Math.pow(10,rr(n)+t);function Hh(n){return n/Math.pow(10,rr(n))===1}function Vh(n,t,e){const i=Math.pow(10,e),s=Math.floor(n/i);return Math.ceil(t/i)-s}function Ox(n,t){const e=t-n;let i=rr(e);for(;Vh(n,t,i)>10;)i++;for(;Vh(n,t,i)<10;)i--;return Math.min(i,rr(n))}function Ux(n,{min:t,max:e}){t=$e(n.min,t);const i=[],s=rr(t);let r=Ox(t,e),o=r<0?Math.pow(10,Math.abs(r)):1;const a=Math.pow(10,r),l=s>r?Math.pow(10,s):0,c=Math.round((t-l)*o)/o,h=Math.floor((t-l)/a/10)*a*10;let u=Math.floor((c-h)/Math.pow(10,r)),d=$e(n.min,Math.round((l+h+u*Math.pow(10,r))*o)/o);for(;d<e;)i.push({value:d,major:Hh(d),significand:u}),u>=10?u=u<15?15:20:u++,u>=20&&(r++,u=2,o=r>=0?1:o),d=Math.round((l+h+u*Math.pow(10,r))*o)/o;const f=$e(n.max,d);return i.push({value:f,major:Hh(f),significand:u}),i}class Qa extends Hi{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const i=Ao.prototype.parse.apply(this,[t,e]);if(i===0){this._zero=!0;return}return me(i)&&i>0?i:null}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=me(t)?Math.max(0,t):null,this.max=me(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!me(this._userMin)&&(this.min=t===_i(this.min,0)?_i(this.min,-1):_i(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let i=this.min,s=this.max;const r=a=>i=t?i:a,o=a=>s=e?s:a;i===s&&(i<=0?(r(1),o(10)):(r(_i(i,-1)),o(_i(s,1)))),i<=0&&r(_i(s,-1)),s<=0&&o(_i(i,1)),this.min=i,this.max=s}buildTicks(){const t=this.options,e={min:this._userMin,max:this._userMax},i=Ux(e,this);return t.bounds==="ticks"&&ld(i,this,"value"),t.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(t){return t===void 0?"0":cr(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=ti(t),this._valueRange=ti(this.max)-ti(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(ti(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}et(Qa,"id","logarithmic"),et(Qa,"defaults",{ticks:{callback:Lo.formatters.logarithmic,major:{enabled:!0}}});function tl(n){const t=n.ticks;if(t.display&&n.display){const e=Ue(t.backdropPadding);return Dt(t.font&&t.font.size,he.font.size)+e.height}return 0}function Fx(n,t,e){return e=ce(e)?e:[e],{w:zp(n,t.string,e),h:e.length*t.lineHeight}}function Gh(n,t,e,i,s){return n===i||n===s?{start:t-e/2,end:t+e/2}:n<i||n>s?{start:t-e,end:t}:{start:t,end:t+e}}function Nx(n){const t={l:n.left+n._padding.left,r:n.right-n._padding.right,t:n.top+n._padding.top,b:n.bottom-n._padding.bottom},e=Object.assign({},t),i=[],s=[],r=n._pointLabels.length,o=n.options.pointLabels,a=o.centerPointLabels?Kt/r:0;for(let l=0;l<r;l++){const c=o.setContext(n.getPointLabelContext(l));s[l]=c.padding;const h=n.getPointPosition(l,n.drawingArea+s[l],a),u=be(c.font),d=Fx(n.ctx,u,n._pointLabels[l]);i[l]=d;const f=Ie(n.getIndexAngle(l)+a),g=Math.round($l(f)),_=Gh(g,h.x,d.w,0,180),m=Gh(g,h.y,d.h,90,270);kx(e,t,f,_,m)}n.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),n._pointLabelItems=Hx(n,i,s)}function kx(n,t,e,i,s){const r=Math.abs(Math.sin(e)),o=Math.abs(Math.cos(e));let a=0,l=0;i.start<t.l?(a=(t.l-i.start)/r,n.l=Math.min(n.l,t.l-a)):i.end>t.r&&(a=(i.end-t.r)/r,n.r=Math.max(n.r,t.r+a)),s.start<t.t?(l=(t.t-s.start)/o,n.t=Math.min(n.t,t.t-l)):s.end>t.b&&(l=(s.end-t.b)/o,n.b=Math.max(n.b,t.b+l))}function Bx(n,t,e){const i=n.drawingArea,{extra:s,additionalAngle:r,padding:o,size:a}=e,l=n.getPointPosition(t,i+s+o,r),c=Math.round($l(Ie(l.angle+_e))),h=Wx(l.y,a.h,c),u=Vx(c),d=Gx(l.x,a.w,u);return{visible:!0,x:l.x,y:h,textAlign:u,left:d,top:h,right:d+a.w,bottom:h+a.h}}function zx(n,t){if(!t)return!0;const{left:e,top:i,right:s,bottom:r}=n;return!(Bn({x:e,y:i},t)||Bn({x:e,y:r},t)||Bn({x:s,y:i},t)||Bn({x:s,y:r},t))}function Hx(n,t,e){const i=[],s=n._pointLabels.length,r=n.options,{centerPointLabels:o,display:a}=r.pointLabels,l={extra:tl(r)/2,additionalAngle:o?Kt/s:0};let c;for(let h=0;h<s;h++){l.padding=e[h],l.size=t[h];const u=Bx(n,h,l);i.push(u),a==="auto"&&(u.visible=zx(u,c),u.visible&&(c=u))}return i}function Vx(n){return n===0||n===180?"center":n<180?"left":"right"}function Gx(n,t,e){return e==="right"?n-=t:e==="center"&&(n-=t/2),n}function Wx(n,t,e){return e===90||e===270?n-=t/2:(e>270||e<90)&&(n-=t),n}function Xx(n,t,e){const{left:i,top:s,right:r,bottom:o}=e,{backdropColor:a}=t;if(!zt(a)){const l=Oi(t.borderRadius),c=Ue(t.backdropPadding);n.fillStyle=a;const h=i-c.left,u=s-c.top,d=r-i+c.width,f=o-s+c.height;Object.values(l).some(g=>g!==0)?(n.beginPath(),ir(n,{x:h,y:u,w:d,h:f,radius:l}),n.fill()):n.fillRect(h,u,d,f)}}function Yx(n,t){const{ctx:e,options:{pointLabels:i}}=n;for(let s=t-1;s>=0;s--){const r=n._pointLabelItems[s];if(!r.visible)continue;const o=i.setContext(n.getPointLabelContext(s));Xx(e,o,r);const a=be(o.font),{x:l,y:c,textAlign:h}=r;Ni(e,n._pointLabels[s],l,c+a.lineHeight/2,a,{color:o.color,textAlign:h,textBaseline:"middle"})}}function Qd(n,t,e,i){const{ctx:s}=n;if(e)s.arc(n.xCenter,n.yCenter,t,0,ee);else{let r=n.getPointPosition(0,t);s.moveTo(r.x,r.y);for(let o=1;o<i;o++)r=n.getPointPosition(o,t),s.lineTo(r.x,r.y)}}function jx(n,t,e,i,s){const r=n.ctx,o=t.circular,{color:a,lineWidth:l}=t;!o&&!i||!a||!l||e<0||(r.save(),r.strokeStyle=a,r.lineWidth=l,r.setLineDash(s.dash||[]),r.lineDashOffset=s.dashOffset,r.beginPath(),Qd(n,e,o,i),r.closePath(),r.stroke(),r.restore())}function qx(n,t,e){return ui(n,{label:e,index:t,type:"pointLabel"})}class js extends Ao{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=Ue(tl(this.options)/2),e=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(e,i)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=me(t)&&!isNaN(t)?t:0,this.max=me(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/tl(this.options))}generateTickLabels(t){Ao.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,i)=>{const s=oe(this.options.pointLabels.callback,[e,i],this);return s||s===0?s:""}).filter((e,i)=>this.chart.getDataVisibility(i))}fit(){const t=this.options;t.display&&t.pointLabels.display?Nx(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,i,s){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((i-s)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,i,s))}getIndexAngle(t){const e=ee/(this._pointLabels.length||1),i=this.options.startAngle||0;return Ie(t*e+dn(i))}getDistanceFromCenterForValue(t){if(zt(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(zt(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const i=e[t];return qx(this.getContext(),t,i)}}getPointPosition(t,e,i=0){const s=this.getIndexAngle(t)-_e+i;return{x:Math.cos(s)*e+this.xCenter,y:Math.sin(s)*e+this.yCenter,angle:s}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:i,right:s,bottom:r}=this._pointLabelItems[t];return{left:e,top:i,right:s,bottom:r}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const i=this.ctx;i.save(),i.beginPath(),Qd(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:i,grid:s,border:r}=e,o=this._pointLabels.length;let a,l,c;if(e.pointLabels.display&&Yx(this,o),s.display&&this.ticks.forEach((h,u)=>{if(u!==0||u===0&&this.min<0){l=this.getDistanceFromCenterForValue(h.value);const d=this.getContext(u),f=s.setContext(d),g=r.setContext(d);jx(this,f,l,o,g)}}),i.display){for(t.save(),a=o-1;a>=0;a--){const h=i.setContext(this.getPointLabelContext(a)),{color:u,lineWidth:d}=h;!d||!u||(t.lineWidth=d,t.strokeStyle=u,t.setLineDash(h.borderDash),t.lineDashOffset=h.borderDashOffset,l=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),c=this.getPointPosition(a,l),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(c.x,c.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,i=e.ticks;if(!i.display)return;const s=this.getIndexAngle(0);let r,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(s),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,l)=>{if(l===0&&this.min>=0&&!e.reverse)return;const c=i.setContext(this.getContext(l)),h=be(c.font);if(r=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){t.font=h.string,o=t.measureText(a.label).width,t.fillStyle=c.backdropColor;const u=Ue(c.backdropPadding);t.fillRect(-o/2-u.left,-r-h.size/2-u.top,o+u.width,h.size+u.height)}Ni(t,a.label,0,-r,h,{color:c.color,strokeColor:c.textStrokeColor,strokeWidth:c.textStrokeWidth})}),t.restore()}drawTitle(){}}et(js,"id","radialLinear"),et(js,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Lo.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),et(js,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),et(js,"descriptors",{angleLines:{_fallback:"grid"}});const ko={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Ge=Object.keys(ko);function Wh(n,t){return n-t}function Xh(n,t){if(zt(t))return null;const e=n._adapter,{parser:i,round:s,isoWeekday:r}=n._parseOpts;let o=t;return typeof i=="function"&&(o=i(o)),me(o)||(o=typeof i=="string"?e.parse(o,i):e.parse(o)),o===null?null:(s&&(o=s==="week"&&(gs(r)||r===!0)?e.startOf(o,"isoWeek",r):e.startOf(o,s)),+o)}function Yh(n,t,e,i){const s=Ge.length;for(let r=Ge.indexOf(n);r<s-1;++r){const o=ko[Ge[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((e-t)/(a*o.size))<=i)return Ge[r]}return Ge[s-1]}function $x(n,t,e,i,s){for(let r=Ge.length-1;r>=Ge.indexOf(e);r--){const o=Ge[r];if(ko[o].common&&n._adapter.diff(s,i,o)>=t-1)return o}return Ge[e?Ge.indexOf(e):0]}function Kx(n){for(let t=Ge.indexOf(n)+1,e=Ge.length;t<e;++t)if(ko[Ge[t]].common)return Ge[t]}function jh(n,t,e){if(!e)n[t]=!0;else if(e.length){const{lo:i,hi:s}=Kl(e,t),r=e[i]>=t?e[i]:e[s];n[r]=!0}}function Zx(n,t,e,i){const s=n._adapter,r=+s.startOf(t[0].value,i),o=t[t.length-1].value;let a,l;for(a=r;a<=o;a=+s.add(a,1,i))l=e[a],l>=0&&(t[l].major=!0);return t}function qh(n,t,e){const i=[],s={},r=t.length;let o,a;for(o=0;o<r;++o)a=t[o],s[a]=o,i.push({value:a,major:!1});return r===0||!e?i:Zx(n,i,s,e)}class or extends Hi{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const i=t.time||(t.time={}),s=this._adapter=new ig._date(t.adapters.date);s.init(e),$s(i.displayFormats,s.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:Xh(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,i=t.time.unit||"day";let{min:s,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function l(c){!o&&!isNaN(c.min)&&(s=Math.min(s,c.min)),!a&&!isNaN(c.max)&&(r=Math.max(r,c.max))}(!o||!a)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),s=me(s)&&!isNaN(s)?s:+e.startOf(Date.now(),i),r=me(r)&&!isNaN(r)?r:+e.endOf(Date.now(),i)+1,this.min=Math.min(s,r-1),this.max=Math.max(s+1,r)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){const t=this.options,e=t.time,i=t.ticks,s=i.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const r=this.min,o=this.max,a=wp(s,r,o);return this._unit=e.unit||(i.autoSkip?Yh(e.minUnit,this.min,this.max,this._getLabelCapacity(r)):$x(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:Kx(this._unit),this.initOffsets(s),t.reverse&&a.reverse(),qh(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,i=0,s,r;this.options.offset&&t.length&&(s=this.getDecimalForValue(t[0]),t.length===1?e=1-s:e=(this.getDecimalForValue(t[1])-s)/2,r=this.getDecimalForValue(t[t.length-1]),t.length===1?i=r:i=(r-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;e=Te(e,0,o),i=Te(i,0,o),this._offsets={start:e,end:i,factor:1/(e+1+i)}}_generate(){const t=this._adapter,e=this.min,i=this.max,s=this.options,r=s.time,o=r.unit||Yh(r.minUnit,e,i,this._getLabelCapacity(e)),a=Dt(s.ticks.stepSize,1),l=o==="week"?r.isoWeekday:!1,c=gs(l)||l===!0,h={};let u=e,d,f;if(c&&(u=+t.startOf(u,"isoWeek",l)),u=+t.startOf(u,c?"day":o),t.diff(i,e,o)>1e5*a)throw new Error(e+" and "+i+" are too far apart with stepSize of "+a+" "+o);const g=s.ticks.source==="data"&&this.getDataTimestamps();for(d=u,f=0;d<i;d=+t.add(d,a,o),f++)jh(h,d,g);return(d===i||s.bounds==="ticks"||f===1)&&jh(h,d,g),Object.keys(h).sort(Wh).map(_=>+_)}getLabelForValue(t){const e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}format(t,e){const s=this.options.time.displayFormats,r=this._unit,o=e||s[r];return this._adapter.format(t,o)}_tickFormatFunction(t,e,i,s){const r=this.options,o=r.ticks.callback;if(o)return oe(o,[t,e,i],this);const a=r.time.displayFormats,l=this._unit,c=this._majorUnit,h=l&&a[l],u=c&&a[c],d=i[e],f=c&&u&&d&&d.major;return this._adapter.format(t,s||(f?u:h))}generateTickLabels(t){let e,i,s;for(e=0,i=t.length;e<i;++e)s=t[e],s.label=this._tickFormatFunction(s.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+i)*e.factor)}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,i=this.ctx.measureText(t).width,s=dn(this.isHorizontal()?e.maxRotation:e.minRotation),r=Math.cos(s),o=Math.sin(s),a=this._resolveTickFontOptions(0).size;return{w:i*r+a*o,h:i*o+a*r}}_getLabelCapacity(t){const e=this.options.time,i=e.displayFormats,s=i[e.unit]||i.millisecond,r=this._tickFormatFunction(t,0,qh(this,[t],this._majorUnit),s),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],e,i;if(t.length)return t;const s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return this._cache.data=s[0].controller.getAllParsedValues(this);for(e=0,i=s.length;e<i;++e)t=t.concat(s[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,i;if(t.length)return t;const s=this.getLabels();for(e=0,i=s.length;e<i;++e)t.push(Xh(this,s[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return ud(t.sort(Wh))}}et(or,"id","time"),et(or,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function Rr(n,t,e){let i=0,s=n.length-1,r,o,a,l;e?(t>=n[i].pos&&t<=n[s].pos&&({lo:i,hi:s}=kn(n,"pos",t)),{pos:r,time:a}=n[i],{pos:o,time:l}=n[s]):(t>=n[i].time&&t<=n[s].time&&({lo:i,hi:s}=kn(n,"time",t)),{time:r,pos:a}=n[i],{time:o,pos:l}=n[s]);const c=o-r;return c?a+(l-a)*(t-r)/c:a}class el extends or{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=Rr(e,this.min),this._tableRange=Rr(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:i}=this,s=[],r=[];let o,a,l,c,h;for(o=0,a=t.length;o<a;++o)c=t[o],c>=e&&c<=i&&s.push(c);if(s.length<2)return[{time:e,pos:0},{time:i,pos:1}];for(o=0,a=s.length;o<a;++o)h=s[o+1],l=s[o-1],c=s[o],Math.round((h+l)/2)!==c&&r.push({time:c,pos:o/(a-1)});return r}_generate(){const t=this.min,e=this.max;let i=super.getDataTimestamps();return(!i.includes(t)||!i.length)&&i.splice(0,0,t),(!i.includes(e)||i.length===1)&&i.push(e),i.sort((s,r)=>s-r)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),i=this.getLabelTimestamps();return e.length&&i.length?t=this.normalize(e.concat(i)):t=e.length?e:i,t=this._cache.all=t,t}getDecimalForValue(t){return(Rr(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return Rr(this._table,i*this._tableRange+this._minPos,!0)}}et(el,"id","timeseries"),et(el,"defaults",or.defaults);var Jx=Object.freeze({__proto__:null,CategoryScale:Za,LinearScale:Ja,LogarithmicScale:Qa,RadialLinearScale:js,TimeScale:or,TimeSeriesScale:el});const Qx=[ng,I_,Cx,Jx];Fn.register(...Qx);const wi=n=>n*Math.PI/180;function nl(n){return(Number(n)%180+180)%180}function t0(n,t){if(!Array.isArray(t)||t.length===0)return{stages:[],finalIntensity:n};let e=Math.max(0,Number(n));return{stages:t.map((s,r)=>{const o=nl(s),a=r===0?null:nl(o-t[r-1]),l=r===0?.5:Math.cos(wi(a))**2;return e*=l,{index:r,angle:o,relativeAngle:a,transmission:l,intensity:e}}),finalIntensity:e}}function e0(n,t){return n<=0?0:Math.sqrt(Math.max(0,t)/n)}function n0(n=50,t=181){return Array.from({length:t},(e,i)=>{const s=180*i/(t-1);return{angle:s,intensity:n*Math.cos(wi(s))**2}})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ac="172",us={ROTATE:0,DOLLY:1,PAN:2},ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},i0=0,$h=1,s0=2,tf=1,r0=2,On=3,ci=0,We=1,Mn=2,ri=0,ds=1,il=2,Kh=3,Zh=4,o0=5,Ri=100,a0=101,l0=102,c0=103,h0=104,u0=200,d0=201,f0=202,p0=203,sl=204,rl=205,m0=206,g0=207,_0=208,x0=209,v0=210,M0=211,b0=212,y0=213,S0=214,ol=0,al=1,ll=2,vs=3,cl=4,hl=5,ul=6,dl=7,ef=0,E0=1,T0=2,oi=0,A0=1,w0=2,R0=3,C0=4,P0=5,D0=6,L0=7,nf=300,Ms=301,bs=302,fl=303,pl=304,Bo=306,ml=1e3,Di=1001,gl=1002,mn=1003,I0=1004,Cr=1005,bn=1006,ra=1007,Li=1008,Gn=1009,sf=1010,rf=1011,ar=1012,lc=1013,ki=1014,zn=1015,hr=1016,cc=1017,hc=1018,ys=1020,of=35902,af=1021,lf=1022,fn=1023,cf=1024,hf=1025,fs=1026,Ss=1027,uf=1028,uc=1029,df=1030,dc=1031,fc=1033,uo=33776,fo=33777,po=33778,mo=33779,_l=35840,xl=35841,vl=35842,Ml=35843,bl=36196,yl=37492,Sl=37496,El=37808,Tl=37809,Al=37810,wl=37811,Rl=37812,Cl=37813,Pl=37814,Dl=37815,Ll=37816,Il=37817,Ol=37818,Ul=37819,Fl=37820,Nl=37821,go=36492,kl=36494,Bl=36495,ff=36283,zl=36284,Hl=36285,Vl=36286,O0=3200,U0=3201,pf=0,F0=1,Jn="",Ze="srgb",Es="srgb-linear",wo="linear",ne="srgb",Yi=7680,Jh=519,N0=512,k0=513,B0=514,mf=515,z0=516,H0=517,V0=518,G0=519,Qh=35044,tu="300 es",Hn=2e3,Ro=2001;class Vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_o=Math.PI/180,Gl=180/Math.PI;function ur(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]).toLowerCase()}function kt(n,t,e){return Math.max(t,Math.min(e,n))}function W0(n,t){return(n%t+t)%t}function oa(n,t,e){return(1-e)*n+e*t}function Os(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function He(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const X0={DEG2RAD:_o};class Pt{constructor(t=0,e=0){Pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,i,s,r,o,a,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],b=s[1],E=s[4],x=s[7],T=s[2],w=s[5],A=s[8];return r[0]=o*_+a*b+l*T,r[3]=o*m+a*E+l*w,r[6]=o*p+a*x+l*A,r[1]=c*_+h*b+u*T,r[4]=c*m+h*E+u*w,r[7]=c*p+h*x+u*A,r[2]=d*_+f*b+g*T,r[5]=d*m+f*E+g*w,r[8]=d*p+f*x+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(aa.makeScale(t,e)),this}rotate(t){return this.premultiply(aa.makeRotation(-t)),this}translate(t,e){return this.premultiply(aa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const aa=new Ot;function gf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Co(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Y0(){const n=Co("canvas");return n.style.display="block",n}const eu={};function as(n){n in eu||(eu[n]=!0,console.warn(n))}function j0(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function q0(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function $0(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const nu=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),iu=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function K0(){const n={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ne&&(s.r=Vn(s.r),s.g=Vn(s.g),s.b=Vn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ne&&(s.r=ps(s.r),s.g=ps(s.g),s.b=ps(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Jn?wo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Es]:{primaries:t,whitePoint:i,transfer:wo,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:t,whitePoint:i,transfer:ne,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}}),n}const $t=K0();function Vn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ps(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ji;class Z0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ji===void 0&&(ji=Co("canvas")),ji.width=t.width,ji.height=t.height;const i=ji.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Co("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Vn(e[i]/255)*255):e[i]=Vn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let J0=0;class _f{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=ur(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(la(s[o].image)):r.push(la(s[o]))}else r=la(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function la(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Z0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Q0=0;class Xe extends Vi{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,i=Di,s=Di,r=bn,o=Li,a=fn,l=Gn,c=Xe.DEFAULT_ANISOTROPY,h=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=ur(),this.name="",this.source=new _f(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ml:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case gl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ml:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case gl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=nf;Xe.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,i=0,s=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,x=(f+1)/2,T=(p+1)/2,w=(h+d)/4,A=(u+_)/4,C=(g+m)/4;return E>x&&E>T?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=w/i,r=A/i):x>T?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=w/s,r=C/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=A/r,s=C/r),this.set(i,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-_)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this.w=kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this.w=kt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tv extends Vi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Xe(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new _f(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends tv{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class xf extends Xe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ev extends Xe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*_,b=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const T=Math.sqrt(E),w=Math.atan2(T,p*b);m=Math.sin(m*w)/T,a=Math.sin(a*w)/T}const x=a*b;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(kt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,i=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(su.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(su.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ca.copy(this).projectOnVector(t),this.sub(ca)}reflect(t){return this.sub(ca.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ca=new L,su=new zi;class dr{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ln):ln.fromBufferAttribute(r,o),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pr.copy(i.boundingBox)),Pr.applyMatrix4(t.matrixWorld),this.union(Pr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Us),Dr.subVectors(this.max,Us),qi.subVectors(t.a,Us),$i.subVectors(t.b,Us),Ki.subVectors(t.c,Us),Wn.subVectors($i,qi),Xn.subVectors(Ki,$i),xi.subVectors(qi,Ki);let e=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-xi.z,xi.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,xi.z,0,-xi.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-xi.y,xi.x,0];return!ha(e,qi,$i,Ki,Dr)||(e=[1,0,0,0,1,0,0,0,1],!ha(e,qi,$i,Ki,Dr))?!1:(Lr.crossVectors(Wn,Xn),e=[Lr.x,Lr.y,Lr.z],ha(e,qi,$i,Ki,Dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const wn=[new L,new L,new L,new L,new L,new L,new L,new L],ln=new L,Pr=new dr,qi=new L,$i=new L,Ki=new L,Wn=new L,Xn=new L,xi=new L,Us=new L,Dr=new L,Lr=new L,vi=new L;function ha(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){vi.fromArray(n,r);const a=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),l=t.dot(vi),c=e.dot(vi),h=i.dot(vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const nv=new dr,Fs=new L,ua=new L;class zo{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):nv.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fs.subVectors(t,this.center);const e=Fs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Fs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ua.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fs.copy(t.center).add(ua)),this.expandByPoint(Fs.copy(t.center).sub(ua))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rn=new L,da=new L,Ir=new L,Yn=new L,fa=new L,Or=new L,pa=new L;class pc{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){da.copy(t).add(e).multiplyScalar(.5),Ir.copy(e).sub(t).normalize(),Yn.copy(this.origin).sub(da);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ir),a=Yn.dot(this.direction),l=-Yn.dot(Ir),c=Yn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(da).addScaledVector(Ir,d),f}intersectSphere(t,e){Rn.subVectors(t.center,this.origin);const i=Rn.dot(this.direction),s=Rn.dot(Rn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,i,s,r){fa.subVectors(e,t),Or.subVectors(i,t),pa.crossVectors(fa,Or);let o=this.direction.dot(pa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,t);const l=a*this.direction.dot(Or.crossVectors(Yn,Or));if(l<0)return null;const c=a*this.direction.dot(fa.cross(Yn));if(c<0||l+c>o)return null;const h=-a*Yn.dot(pa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,i,s,r,o,a,l,c,h,u,d,f,g,_,m){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,d,f,g,_,m)}set(t,e,i,s,r,o,a,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Zi.setFromMatrixColumn(t,0).length(),r=1/Zi.setFromMatrixColumn(t,1).length(),o=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(iv,t,sv)}lookAt(t,e,i){const s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),jn.crossVectors(i,je),jn.lengthSq()===0&&(Math.abs(i.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),jn.crossVectors(i,je)),jn.normalize(),Ur.crossVectors(je,jn),s[0]=jn.x,s[4]=Ur.x,s[8]=je.x,s[1]=jn.y,s[5]=Ur.y,s[9]=je.y,s[2]=jn.z,s[6]=Ur.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],b=i[3],E=i[7],x=i[11],T=i[15],w=s[0],A=s[4],C=s[8],y=s[12],v=s[1],P=s[5],F=s[9],N=s[13],X=s[2],G=s[6],H=s[10],j=s[14],W=s[3],nt=s[7],it=s[11],dt=s[15];return r[0]=o*w+a*v+l*X+c*W,r[4]=o*A+a*P+l*G+c*nt,r[8]=o*C+a*F+l*H+c*it,r[12]=o*y+a*N+l*j+c*dt,r[1]=h*w+u*v+d*X+f*W,r[5]=h*A+u*P+d*G+f*nt,r[9]=h*C+u*F+d*H+f*it,r[13]=h*y+u*N+d*j+f*dt,r[2]=g*w+_*v+m*X+p*W,r[6]=g*A+_*P+m*G+p*nt,r[10]=g*C+_*F+m*H+p*it,r[14]=g*y+_*N+m*j+p*dt,r[3]=b*w+E*v+x*X+T*W,r[7]=b*A+E*P+x*G+T*nt,r[11]=b*C+E*F+x*H+T*it,r[15]=b*y+E*N+x*j+T*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+_*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-i*o*d+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],b=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,E=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,x=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,T=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,w=e*b+i*E+s*x+r*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=b*A,t[1]=(_*d*r-u*m*r-_*s*f+i*m*f+u*s*p-i*d*p)*A,t[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*A,t[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*A,t[4]=E*A,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*A,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*A,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*A,t[8]=x*A,t[9]=(g*u*r-h*_*r-g*i*f+e*_*f+h*i*p-e*u*p)*A,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*p+e*a*p)*A,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*f-e*a*f)*A,t[12]=T*A,t[13]=(h*_*s-g*u*s+g*i*d-e*_*d-h*i*m+e*u*m)*A,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*m-e*a*m)*A,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*d+e*a*d)*A,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,b=l*c,E=l*h,x=l*u,T=i.x,w=i.y,A=i.z;return s[0]=(1-(_+p))*T,s[1]=(f+x)*T,s[2]=(g-E)*T,s[3]=0,s[4]=(f-x)*w,s[5]=(1-(d+p))*w,s[6]=(m+b)*w,s[7]=0,s[8]=(g+E)*A,s[9]=(m-b)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Zi.set(s[0],s[1],s[2]).length();const o=Zi.set(s[4],s[5],s[6]).length(),a=Zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],cn.copy(this);const c=1/r,h=1/o,u=1/a;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=u,cn.elements[9]*=u,cn.elements[10]*=u,e.setFromRotationMatrix(cn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Hn){const l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let f,g;if(a===Hn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ro)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Hn){const l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),d=(e+t)*c,f=(i+s)*h;let g,_;if(a===Hn)g=(o+r)*u,_=-2*u;else if(a===Ro)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Zi=new L,cn=new ue,iv=new L(0,0,0),sv=new L(1,1,1),jn=new L,Ur=new L,je=new L,ru=new ue,ou=new zi;class En{constructor(t=0,e=0,i=0,s=En.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ru.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ru,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ou.setFromEuler(this),this.setFromQuaternion(ou,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class vf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rv=0;const au=new L,Ji=new zi,Cn=new ue,Fr=new L,Ns=new L,ov=new L,av=new zi,lu=new L(1,0,0),cu=new L(0,1,0),hu=new L(0,0,1),uu={type:"added"},lv={type:"removed"},Qi={type:"childadded",child:null},ma={type:"childremoved",child:null};class Re extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rv++}),this.uuid=ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new L,e=new En,i=new zi,s=new L(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Ot}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(lu,t)}rotateY(t){return this.rotateOnAxis(cu,t)}rotateZ(t){return this.rotateOnAxis(hu,t)}translateOnAxis(t,e){return au.copy(t).applyQuaternion(this.quaternion),this.position.add(au.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lu,t)}translateY(t){return this.translateOnAxis(cu,t)}translateZ(t){return this.translateOnAxis(hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Fr.copy(t):Fr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(Ns,Fr,this.up):Cn.lookAt(Fr,Ns,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Ji.setFromRotationMatrix(Cn),this.quaternion.premultiply(Ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uu),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lv),ma.child=t,this.dispatchEvent(ma),ma.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uu),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,t,ov),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,av,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Re.DEFAULT_UP=new L(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new L,Pn=new L,ga=new L,Dn=new L,ts=new L,es=new L,du=new L,_a=new L,xa=new L,va=new L,Ma=new se,ba=new se,ya=new se;class un{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),hn.subVectors(t,e),s.cross(hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){hn.subVectors(s,e),Pn.subVectors(i,e),ga.subVectors(t,e);const o=hn.dot(hn),a=hn.dot(Pn),l=hn.dot(ga),c=Pn.dot(Pn),h=Pn.dot(ga),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Dn.x),l.addScaledVector(o,Dn.y),l.addScaledVector(a,Dn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Ma.setScalar(0),ba.setScalar(0),ya.setScalar(0),Ma.fromBufferAttribute(t,e),ba.fromBufferAttribute(t,i),ya.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ma,r.x),o.addScaledVector(ba,r.y),o.addScaledVector(ya,r.z),o}static isFrontFacing(t,e,i,s){return hn.subVectors(i,e),Pn.subVectors(t,e),hn.cross(Pn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),hn.cross(Pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return un.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;ts.subVectors(s,i),es.subVectors(r,i),_a.subVectors(t,i);const l=ts.dot(_a),c=es.dot(_a);if(l<=0&&c<=0)return e.copy(i);xa.subVectors(t,s);const h=ts.dot(xa),u=es.dot(xa);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(ts,o);va.subVectors(t,r);const f=ts.dot(va),g=es.dot(va);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(es,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return du.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(du,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(i).addScaledVector(ts,o).addScaledVector(es,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Mf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function Sa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Bt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=i,$t.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=$t.workingColorSpace){if(t=W0(t,1),e=kt(e,0,1),i=kt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Sa(o,r,t+1/3),this.g=Sa(o,r,t),this.b=Sa(o,r,t-1/3)}return $t.toWorkingColorSpace(this,s),this}setStyle(t,e=Ze){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){const i=Mf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vn(t.r),this.g=Vn(t.g),this.b=Vn(t.b),this}copyLinearToSRGB(t){return this.r=ps(t.r),this.g=ps(t.g),this.b=ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return $t.fromWorkingColorSpace(De.copy(this),t),Math.round(kt(De.r*255,0,255))*65536+Math.round(kt(De.g*255,0,255))*256+Math.round(kt(De.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(De.copy(this),e);const i=De.r,s=De.g,r=De.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=Ze){$t.fromWorkingColorSpace(De.copy(this),t);const e=De.r,i=De.g,s=De.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(qn),this.setHSL(qn.h+t,qn.s+e,qn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(qn),t.getHSL(Nr);const i=oa(qn.h,Nr.h,e),s=oa(qn.s,Nr.s,e),r=oa(qn.l,Nr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new Bt;Bt.NAMES=Mf;let cv=0;class As extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=ur(),this.name="",this.type="Material",this.blending=ds,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sl,this.blendDst=rl,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(i.blending=this.blending),this.side!==ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sl&&(i.blendSrc=this.blendSrc),this.blendDst!==rl&&(i.blendDst=this.blendDst),this.blendEquation!==Ri&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ii extends As{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=ef,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new L,kr=new Pt;class Sn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Qh,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)kr.fromBufferAttribute(this,e),kr.applyMatrix3(t),this.setXY(e,kr.x,kr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Os(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=He(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Os(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Os(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Os(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Os(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),i=He(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),i=He(i,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),i=He(i,this.array),s=He(s,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qh&&(t.usage=this.usage),t}}class bf extends Sn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class yf extends Sn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ae extends Sn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let hv=0;const sn=new ue,Ea=new Re,ns=new L,qe=new dr,ks=new dr,Ee=new L;class rn extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=ur(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gf(t)?yf:bf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ot().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,i){return sn.makeTranslation(t,e,i),this.applyMatrix4(sn),this}scale(t,e,i){return sn.makeScale(t,e,i),this.applyMatrix4(sn),this}lookAt(t){return Ea.lookAt(t),Ea.updateMatrix(),this.applyMatrix4(Ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ae(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors(qe.min,ks.min),qe.expandByPoint(Ee),Ee.addVectors(qe.max,ks.max),qe.expandByPoint(Ee)):(qe.expandByPoint(ks.min),qe.expandByPoint(ks.max))}qe.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ee));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ee.fromBufferAttribute(a,c),l&&(ns.fromBufferAttribute(t,c),Ee.add(ns)),s=Math.max(s,i.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new L,l[C]=new L;const c=new L,h=new L,u=new L,d=new Pt,f=new Pt,g=new Pt,_=new L,m=new L;function p(C,y,v){c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,y),u.fromBufferAttribute(i,v),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,y),g.fromBufferAttribute(r,v),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[C].add(_),a[y].add(_),a[v].add(_),l[C].add(m),l[y].add(m),l[v].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let C=0,y=b.length;C<y;++C){const v=b[C],P=v.start,F=v.count;for(let N=P,X=P+F;N<X;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const E=new L,x=new L,T=new L,w=new L;function A(C){T.fromBufferAttribute(s,C),w.copy(T);const y=a[C];E.copy(y),E.sub(T.multiplyScalar(T.dot(y))).normalize(),x.crossVectors(w,y);const P=x.dot(l[C])<0?-1:1;o.setXYZW(C,E.x,E.y,E.z,P)}for(let C=0,y=b.length;C<y;++C){const v=b[C],P=v.start,F=v.count;for(let N=P,X=P+F;N<X;N+=3)A(t.getX(N+0)),A(t.getX(N+1)),A(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Sn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Sn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new rn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fu=new ue,Mi=new pc,Br=new zo,pu=new L,zr=new L,Hr=new L,Vr=new L,Ta=new L,Gr=new L,mu=new L,Wr=new L;class ke extends Re{constructor(t=new rn,e=new Ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Gr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Ta.fromBufferAttribute(u,t),o?Gr.addScaledVector(Ta,h):Gr.addScaledVector(Ta.sub(e),h))}e.add(Gr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Br.copy(i.boundingSphere),Br.applyMatrix4(r),Mi.copy(t.ray).recast(t.near),!(Br.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Br,pu)===null||Mi.origin.distanceToSquared(pu)>(t.far-t.near)**2))&&(fu.copy(r).invert(),Mi.copy(t.ray).applyMatrix4(fu),!(i.boundingBox!==null&&Mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Mi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),E=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,T=E;x<T;x+=3){const w=a.getX(x),A=a.getX(x+1),C=a.getX(x+2);s=Xr(this,p,t,i,c,h,u,w,A,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=a.getX(m),E=a.getX(m+1),x=a.getX(m+2);s=Xr(this,o,t,i,c,h,u,b,E,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,T=E;x<T;x+=3){const w=x,A=x+1,C=x+2;s=Xr(this,p,t,i,c,h,u,w,A,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=m,E=m+1,x=m+2;s=Xr(this,o,t,i,c,h,u,b,E,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function uv(n,t,e,i,s,r,o,a){let l;if(t.side===We?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===ci,a),l===null)return null;Wr.copy(a),Wr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Wr);return c<e.near||c>e.far?null:{distance:c,point:Wr.clone(),object:n}}function Xr(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,zr),n.getVertexPosition(l,Hr),n.getVertexPosition(c,Vr);const h=uv(n,t,e,i,zr,Hr,Vr,mu);if(h){const u=new L;un.getBarycoord(mu,zr,Hr,Vr,u),s&&(h.uv=un.getInterpolatedAttribute(s,a,l,c,u,new Pt)),r&&(h.uv1=un.getInterpolatedAttribute(r,a,l,c,u,new Pt)),o&&(h.normal=un.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};un.getNormal(zr,Hr,Vr,d.normal),h.face=d,h.barycoord=u}return h}class fr extends rn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(u,2));function g(_,m,p,b,E,x,T,w,A,C,y){const v=x/A,P=T/C,F=x/2,N=T/2,X=w/2,G=A+1,H=C+1;let j=0,W=0;const nt=new L;for(let it=0;it<H;it++){const dt=it*P-N;for(let vt=0;vt<G;vt++){const Lt=vt*v-F;nt[_]=Lt*b,nt[m]=dt*E,nt[p]=X,c.push(nt.x,nt.y,nt.z),nt[_]=0,nt[m]=0,nt[p]=w>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(vt/A),u.push(1-it/C),j+=1}}for(let it=0;it<C;it++)for(let dt=0;dt<A;dt++){const vt=d+dt+G*it,Lt=d+dt+G*(it+1),V=d+(dt+1)+G*(it+1),J=d+(dt+1)+G*it;l.push(vt,Lt,J),l.push(Lt,V,J),W+=6}a.addGroup(f,W,y),f+=W,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ts(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ne(n){const t={};for(let e=0;e<n.length;e++){const i=Ts(n[e]);for(const s in i)t[s]=i[s]}return t}function dv(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Sf(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const fv={clone:Ts,merge:Ne};var pv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends As{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pv,this.fragmentShader=mv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=dv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Ef extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new L,gu=new Pt,_u=new Pt;class Je extends Ef{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Gl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gl*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,gu,_u),e.subVectors(_u,gu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_o*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const is=-90,ss=1;class gv extends Re{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Je(is,ss,t,e);s.layers=this.layers,this.add(s);const r=new Je(is,ss,t,e);r.layers=this.layers,this.add(r);const o=new Je(is,ss,t,e);o.layers=this.layers,this.add(o);const a=new Je(is,ss,t,e);a.layers=this.layers,this.add(a);const l=new Je(is,ss,t,e);l.layers=this.layers,this.add(l);const c=new Je(is,ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Hn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ro)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Tf extends Xe{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ms,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _v extends Bi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Tf(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new fr(5,5,5),r=new hi({name:"CubemapFromEquirect",uniforms:Ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:We,blending:ri});r.uniforms.tEquirect.value=e;const o=new ke(s,r),a=e.minFilter;return e.minFilter===Li&&(e.minFilter=bn),new gv(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}class xv extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Aa=new L,vv=new L,Mv=new Ot;class Zn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Aa.subVectors(i,e).cross(vv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Aa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Mv.getNormalMatrix(t),s=this.coplanarPoint(Aa).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new zo,Yr=new L;class mc{constructor(t=new Zn,e=new Zn,i=new Zn,s=new Zn,r=new Zn,o=new Zn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Hn){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],b=s[13],E=s[14],x=s[15];if(i[0].setComponents(l-r,d-c,m-f,x-p).normalize(),i[1].setComponents(l+r,d+c,m+f,x+p).normalize(),i[2].setComponents(l+o,d+h,m+g,x+b).normalize(),i[3].setComponents(l-o,d-h,m-g,x-b).normalize(),i[4].setComponents(l-a,d-u,m-_,x-E).normalize(),e===Hn)i[5].setComponents(l+a,d+u,m+_,x+E).normalize();else if(e===Ro)i[5].setComponents(a,u,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(t){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Yr.x=s.normal.x>0?t.max.x:t.min.x,Yr.y=s.normal.y>0?t.max.y:t.min.y,Yr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Af extends As{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Po=new L,Do=new L,xu=new ue,Bs=new pc,jr=new zo,wa=new L,vu=new L;class bv extends Re{constructor(t=new rn,e=new Af){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Po.fromBufferAttribute(e,s-1),Do.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Po.distanceTo(Do);t.setAttribute("lineDistance",new Ae(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),jr.copy(i.boundingSphere),jr.applyMatrix4(s),jr.radius+=r,t.ray.intersectsSphere(jr)===!1)return;xu.copy(s).invert(),Bs.copy(t.ray).applyMatrix4(xu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),b=h.getX(_+1),E=qr(this,t,Bs,l,p,b);E&&e.push(E)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=qr(this,t,Bs,l,_,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=qr(this,t,Bs,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=qr(this,t,Bs,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function qr(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(Po.fromBufferAttribute(o,s),Do.fromBufferAttribute(o,r),e.distanceSqToSegment(Po,Do,wa,vu)>i)return;wa.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(wa);if(!(l<t.near||l>t.far))return{distance:l,point:vu.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}class Ke extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}class wf extends Xe{constructor(t,e,i,s,r,o,a,l,c,h=fs){if(h!==fs&&h!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===fs&&(i=ki),i===void 0&&h===Ss&&(i=ys),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:mn,this.minFilter=l!==void 0?l:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ms extends rn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=i/2;let p=0;b(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Ae(u,3)),this.setAttribute("normal",new Ae(d,3)),this.setAttribute("uv",new Ae(f,2));function b(){const x=new L,T=new L;let w=0;const A=(e-t)/i;for(let C=0;C<=r;C++){const y=[],v=C/r,P=v*(e-t)+t;for(let F=0;F<=s;F++){const N=F/s,X=N*l+a,G=Math.sin(X),H=Math.cos(X);T.x=P*G,T.y=-v*i+m,T.z=P*H,u.push(T.x,T.y,T.z),x.set(G,A,H).normalize(),d.push(x.x,x.y,x.z),f.push(N,1-v),y.push(g++)}_.push(y)}for(let C=0;C<s;C++)for(let y=0;y<r;y++){const v=_[y][C],P=_[y+1][C],F=_[y+1][C+1],N=_[y][C+1];(t>0||y!==0)&&(h.push(v,P,N),w+=3),(e>0||y!==r-1)&&(h.push(P,F,N),w+=3)}c.addGroup(p,w,0),p+=w}function E(x){const T=g,w=new Pt,A=new L;let C=0;const y=x===!0?t:e,v=x===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;const P=g;for(let F=0;F<=s;F++){const X=F/s*l+a,G=Math.cos(X),H=Math.sin(X);A.x=y*H,A.y=m*v,A.z=y*G,u.push(A.x,A.y,A.z),d.push(0,v,0),w.x=G*.5+.5,w.y=H*.5*v+.5,f.push(w.x,w.y),g++}for(let F=0;F<s;F++){const N=T+F,X=P+F;x===!0?h.push(X,X+1,N):h.push(X+1,X,N),C+=3}c.addGroup(p,C,x===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ms(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ho extends rn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const b=p*d-o;for(let E=0;E<c;E++){const x=E*u-r;g.push(x,-b,0),_.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const E=b+c*p,x=b+c*(p+1),T=b+1+c*(p+1),w=b+1+c*p;f.push(E,x,w),f.push(x,T,w)}this.setIndex(f),this.setAttribute("position",new Ae(g,3)),this.setAttribute("normal",new Ae(_,3)),this.setAttribute("uv",new Ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ho(t.width,t.height,t.widthSegments,t.heightSegments)}}class gc extends rn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new L,d=new L,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const b=[],E=p/i;let x=0;p===0&&o===0?x=.5/e:p===i&&l===Math.PI&&(x=-.5/e);for(let T=0;T<=e;T++){const w=T/e;u.x=-t*Math.cos(s+w*r)*Math.sin(o+E*a),u.y=t*Math.cos(o+E*a),u.z=t*Math.sin(s+w*r)*Math.sin(o+E*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(w+x,1-E),b.push(c++)}h.push(b)}for(let p=0;p<i;p++)for(let b=0;b<e;b++){const E=h[p][b+1],x=h[p][b],T=h[p+1][b],w=h[p+1][b+1];(p!==0||o>0)&&f.push(E,x,w),(p!==i-1||l<Math.PI)&&f.push(x,T,w)}this.setIndex(f),this.setAttribute("position",new Ae(g,3)),this.setAttribute("normal",new Ae(_,3)),this.setAttribute("uv",new Ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class _c extends rn{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new L,u=new L,d=new L;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,b=(s+1)*f+g;o.push(_,m,b),o.push(m,p,b)}this.setIndex(o),this.setAttribute("position",new Ae(a,3)),this.setAttribute("normal",new Ae(l,3)),this.setAttribute("uv",new Ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _c(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class yv extends As{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pf,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Sv extends yv{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Pt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Ev extends As{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=O0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Tv extends As{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Rf extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Av extends Rf{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ra=new ue,Mu=new L,bu=new L;class wv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mc,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Mu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Mu),bu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bu),e.updateMatrixWorld(),Ra.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ra),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ra)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const yu=new ue,zs=new L,Ca=new L;class Rv extends wv{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pt(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),zs.setFromMatrixPosition(t.matrixWorld),i.position.copy(zs),Ca.copy(i.position),Ca.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Ca),i.updateMatrixWorld(),s.makeTranslation(-zs.x,-zs.y,-zs.z),yu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yu)}}class Su extends Rf{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Rv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Cv extends Ef{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Pv extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Dv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Eu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Eu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Eu(){return performance.now()}class Tu{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(kt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Au=new L;let $r,Pa;class Hs extends Re{constructor(t=new L(0,0,1),e=new L(0,0,0),i=1,s=16776960,r=i*.2,o=r*.2){super(),this.type="ArrowHelper",$r===void 0&&($r=new rn,$r.setAttribute("position",new Ae([0,0,0,0,1,0],3)),Pa=new ms(0,.5,1,5,1),Pa.translate(0,-.5,0)),this.position.copy(e),this.line=new bv($r,new Af({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ke(Pa,new Ii({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Au.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Au,e)}}setLength(t,e=t*.2,i=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(i,e,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Lv extends Vi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function wu(n,t,e,i){const s=Iv(i);switch(e){case af:return n*t;case cf:return n*t;case hf:return n*t*2;case uf:return n*t/s.components*s.byteLength;case uc:return n*t/s.components*s.byteLength;case df:return n*t*2/s.components*s.byteLength;case dc:return n*t*2/s.components*s.byteLength;case lf:return n*t*3/s.components*s.byteLength;case fn:return n*t*4/s.components*s.byteLength;case fc:return n*t*4/s.components*s.byteLength;case uo:case fo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case po:case mo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xl:case Ml:return Math.max(n,16)*Math.max(t,8)/4;case _l:case vl:return Math.max(n,8)*Math.max(t,8)/2;case bl:case yl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Sl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case El:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Al:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case wl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ll:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Il:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Fl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Nl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case go:case kl:case Bl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ff:case zl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Hl:case Vl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Iv(n){switch(n){case Gn:case sf:return{byteLength:1,components:1};case ar:case rf:case hr:return{byteLength:2,components:1};case cc:case hc:return{byteLength:2,components:4};case ki:case lc:case zn:return{byteLength:4,components:1};case of:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ac}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ac);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cf(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Ov(n){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Uv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Wv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$v=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,sM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,oM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,aM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uM="gl_FragColor = linearToOutputTexel( gl_FragColor );",dM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_M=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,MM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,SM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,EM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,RM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,LM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,IM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,OM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,UM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,FM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,HM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,VM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,WM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,YM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$M=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ZM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,QM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ib=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ob=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ab=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ub=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,db=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_b=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Eb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ab=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ib=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ob=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ub=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Vb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$b=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ty=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ey=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ny=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ry=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ay=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ly=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:Uv,alphahash_pars_fragment:Fv,alphamap_fragment:Nv,alphamap_pars_fragment:kv,alphatest_fragment:Bv,alphatest_pars_fragment:zv,aomap_fragment:Hv,aomap_pars_fragment:Vv,batching_pars_vertex:Gv,batching_vertex:Wv,begin_vertex:Xv,beginnormal_vertex:Yv,bsdfs:jv,iridescence_fragment:qv,bumpmap_pars_fragment:$v,clipping_planes_fragment:Kv,clipping_planes_pars_fragment:Zv,clipping_planes_pars_vertex:Jv,clipping_planes_vertex:Qv,color_fragment:tM,color_pars_fragment:eM,color_pars_vertex:nM,color_vertex:iM,common:sM,cube_uv_reflection_fragment:rM,defaultnormal_vertex:oM,displacementmap_pars_vertex:aM,displacementmap_vertex:lM,emissivemap_fragment:cM,emissivemap_pars_fragment:hM,colorspace_fragment:uM,colorspace_pars_fragment:dM,envmap_fragment:fM,envmap_common_pars_fragment:pM,envmap_pars_fragment:mM,envmap_pars_vertex:gM,envmap_physical_pars_fragment:wM,envmap_vertex:_M,fog_vertex:xM,fog_pars_vertex:vM,fog_fragment:MM,fog_pars_fragment:bM,gradientmap_pars_fragment:yM,lightmap_pars_fragment:SM,lights_lambert_fragment:EM,lights_lambert_pars_fragment:TM,lights_pars_begin:AM,lights_toon_fragment:RM,lights_toon_pars_fragment:CM,lights_phong_fragment:PM,lights_phong_pars_fragment:DM,lights_physical_fragment:LM,lights_physical_pars_fragment:IM,lights_fragment_begin:OM,lights_fragment_maps:UM,lights_fragment_end:FM,logdepthbuf_fragment:NM,logdepthbuf_pars_fragment:kM,logdepthbuf_pars_vertex:BM,logdepthbuf_vertex:zM,map_fragment:HM,map_pars_fragment:VM,map_particle_fragment:GM,map_particle_pars_fragment:WM,metalnessmap_fragment:XM,metalnessmap_pars_fragment:YM,morphinstance_vertex:jM,morphcolor_vertex:qM,morphnormal_vertex:$M,morphtarget_pars_vertex:KM,morphtarget_vertex:ZM,normal_fragment_begin:JM,normal_fragment_maps:QM,normal_pars_fragment:tb,normal_pars_vertex:eb,normal_vertex:nb,normalmap_pars_fragment:ib,clearcoat_normal_fragment_begin:sb,clearcoat_normal_fragment_maps:rb,clearcoat_pars_fragment:ob,iridescence_pars_fragment:ab,opaque_fragment:lb,packing:cb,premultiplied_alpha_fragment:hb,project_vertex:ub,dithering_fragment:db,dithering_pars_fragment:fb,roughnessmap_fragment:pb,roughnessmap_pars_fragment:mb,shadowmap_pars_fragment:gb,shadowmap_pars_vertex:_b,shadowmap_vertex:xb,shadowmask_pars_fragment:vb,skinbase_vertex:Mb,skinning_pars_vertex:bb,skinning_vertex:yb,skinnormal_vertex:Sb,specularmap_fragment:Eb,specularmap_pars_fragment:Tb,tonemapping_fragment:Ab,tonemapping_pars_fragment:wb,transmission_fragment:Rb,transmission_pars_fragment:Cb,uv_pars_fragment:Pb,uv_pars_vertex:Db,uv_vertex:Lb,worldpos_vertex:Ib,background_vert:Ob,background_frag:Ub,backgroundCube_vert:Fb,backgroundCube_frag:Nb,cube_vert:kb,cube_frag:Bb,depth_vert:zb,depth_frag:Hb,distanceRGBA_vert:Vb,distanceRGBA_frag:Gb,equirect_vert:Wb,equirect_frag:Xb,linedashed_vert:Yb,linedashed_frag:jb,meshbasic_vert:qb,meshbasic_frag:$b,meshlambert_vert:Kb,meshlambert_frag:Zb,meshmatcap_vert:Jb,meshmatcap_frag:Qb,meshnormal_vert:ty,meshnormal_frag:ey,meshphong_vert:ny,meshphong_frag:iy,meshphysical_vert:sy,meshphysical_frag:ry,meshtoon_vert:oy,meshtoon_frag:ay,points_vert:ly,points_frag:cy,shadow_vert:hy,shadow_frag:uy,sprite_vert:dy,sprite_frag:fy},rt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},vn={basic:{uniforms:Ne([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Ne([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Ne([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Ne([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Ne([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Ne([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Ne([rt.points,rt.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Ne([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Ne([rt.common,rt.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Ne([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Ne([rt.sprite,rt.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Ne([rt.common,rt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Ne([rt.lights,rt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};vn.physical={uniforms:Ne([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const Kr={r:0,b:0,g:0},yi=new En,py=new ue;function my(n,t,e,i,s,r,o){const a=new Bt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?e:t).get(x)),x}function _(E){let x=!1;const T=g(E);T===null?p(a,l):T&&T.isColor&&(p(T,1),x=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,x){const T=g(x);T&&(T.isCubeTexture||T.mapping===Bo)?(h===void 0&&(h=new ke(new fr(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:Ts(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),yi.copy(x.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(py.makeRotationFromEuler(yi)),h.material.toneMapped=$t.getTransfer(T.colorSpace)!==ne,(u!==T||d!==T.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,f=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new ke(new Ho(2,2),new hi({name:"BackgroundMaterial",uniforms:Ts(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=$t.getTransfer(T.colorSpace)!==ne,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=T,d=T.version,f=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,x){E.getRGB(Kr,Sf(n)),i.buffers.color.setClear(Kr.r,Kr.g,Kr.b,x,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(E,x=1){a.set(E),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:_,addToRenderList:m,dispose:b}}function gy(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(v,P,F,N,X){let G=!1;const H=u(N,F,P);r!==H&&(r=H,c(r.object)),G=f(v,N,F,X),G&&g(v,N,F,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,x(v,P,F,N),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function h(v){return n.deleteVertexArray(v)}function u(v,P,F){const N=F.wireframe===!0;let X=i[v.id];X===void 0&&(X={},i[v.id]=X);let G=X[P.id];G===void 0&&(G={},X[P.id]=G);let H=G[N];return H===void 0&&(H=d(l()),G[N]=H),H}function d(v){const P=[],F=[],N=[];for(let X=0;X<e;X++)P[X]=0,F[X]=0,N[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:N,object:v,attributes:{},index:null}}function f(v,P,F,N){const X=r.attributes,G=P.attributes;let H=0;const j=F.getAttributes();for(const W in j)if(j[W].location>=0){const it=X[W];let dt=G[W];if(dt===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(dt=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(dt=v.instanceColor)),it===void 0||it.attribute!==dt||dt&&it.data!==dt.data)return!0;H++}return r.attributesNum!==H||r.index!==N}function g(v,P,F,N){const X={},G=P.attributes;let H=0;const j=F.getAttributes();for(const W in j)if(j[W].location>=0){let it=G[W];it===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(it=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(it=v.instanceColor));const dt={};dt.attribute=it,it&&it.data&&(dt.data=it.data),X[W]=dt,H++}r.attributes=X,r.attributesNum=H,r.index=N}function _(){const v=r.newAttributes;for(let P=0,F=v.length;P<F;P++)v[P]=0}function m(v){p(v,0)}function p(v,P){const F=r.newAttributes,N=r.enabledAttributes,X=r.attributeDivisors;F[v]=1,N[v]===0&&(n.enableVertexAttribArray(v),N[v]=1),X[v]!==P&&(n.vertexAttribDivisor(v,P),X[v]=P)}function b(){const v=r.newAttributes,P=r.enabledAttributes;for(let F=0,N=P.length;F<N;F++)P[F]!==v[F]&&(n.disableVertexAttribArray(F),P[F]=0)}function E(v,P,F,N,X,G,H){H===!0?n.vertexAttribIPointer(v,P,F,X,G):n.vertexAttribPointer(v,P,F,N,X,G)}function x(v,P,F,N){_();const X=N.attributes,G=F.getAttributes(),H=P.defaultAttributeValues;for(const j in G){const W=G[j];if(W.location>=0){let nt=X[j];if(nt===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(nt=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(nt=v.instanceColor)),nt!==void 0){const it=nt.normalized,dt=nt.itemSize,vt=t.get(nt);if(vt===void 0)continue;const Lt=vt.buffer,V=vt.type,J=vt.bytesPerElement,ot=V===n.INT||V===n.UNSIGNED_INT||nt.gpuType===lc;if(nt.isInterleavedBufferAttribute){const st=nt.data,St=st.stride,At=nt.offset;if(st.isInstancedInterleavedBuffer){for(let Nt=0;Nt<W.locationSize;Nt++)p(W.location+Nt,st.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Nt=0;Nt<W.locationSize;Nt++)m(W.location+Nt);n.bindBuffer(n.ARRAY_BUFFER,Lt);for(let Nt=0;Nt<W.locationSize;Nt++)E(W.location+Nt,dt/W.locationSize,V,it,St*J,(At+dt/W.locationSize*Nt)*J,ot)}else{if(nt.isInstancedBufferAttribute){for(let st=0;st<W.locationSize;st++)p(W.location+st,nt.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let st=0;st<W.locationSize;st++)m(W.location+st);n.bindBuffer(n.ARRAY_BUFFER,Lt);for(let st=0;st<W.locationSize;st++)E(W.location+st,dt/W.locationSize,V,it,dt*J,dt/W.locationSize*st*J,ot)}}else if(H!==void 0){const it=H[j];if(it!==void 0)switch(it.length){case 2:n.vertexAttrib2fv(W.location,it);break;case 3:n.vertexAttrib3fv(W.location,it);break;case 4:n.vertexAttrib4fv(W.location,it);break;default:n.vertexAttrib1fv(W.location,it)}}}}b()}function T(){C();for(const v in i){const P=i[v];for(const F in P){const N=P[F];for(const X in N)h(N[X].object),delete N[X];delete P[F]}delete i[v]}}function w(v){if(i[v.id]===void 0)return;const P=i[v.id];for(const F in P){const N=P[F];for(const X in N)h(N[X].object),delete N[X];delete P[F]}delete i[v.id]}function A(v){for(const P in i){const F=i[P];if(F[v.id]===void 0)continue;const N=F[v.id];for(const X in N)h(N[X].object),delete N[X];delete F[v.id]}}function C(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:y,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function _y(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function xy(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==fn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===hr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Gn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==zn&&!C)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:T,maxSamples:w}}function vy(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Zn,a=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const b=r?0:i,E=b*4;let x=p.clippingState||null;l.value=x,x=h(g,d,E,f);for(let T=0;T!==E;++T)x[T]=e[T];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,x=f;E!==_;++E,x+=4)o.copy(u[E]).applyMatrix4(b,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function My(n){let t=new WeakMap;function e(o,a){return a===fl?o.mapping=Ms:a===pl&&(o.mapping=bs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===fl||a===pl)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new _v(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const cs=4,Ru=[.125,.215,.35,.446,.526,.582],Ci=20,Da=new Cv,Cu=new Bt;let La=null,Ia=0,Oa=0,Ua=!1;const Ai=(1+Math.sqrt(5))/2,rs=1/Ai,Pu=[new L(-Ai,rs,0),new L(Ai,rs,0),new L(-rs,0,Ai),new L(rs,0,Ai),new L(0,Ai,-rs),new L(0,Ai,rs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Du{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){La=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(La,Ia,Oa),this._renderer.xr.enabled=Ua,t.scissorTest=!1,Zr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ms||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),La=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:hr,format:fn,colorSpace:Es,depthBuffer:!1},s=Lu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lu(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=by(r)),this._blurMaterial=yy(r,t,e)}return s}_compileMaterial(t){const e=new ke(this._lodPlanes[0],t);this._renderer.compile(e,Da)}_sceneToCubeUV(t,e,i,s){const a=new Je(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Cu),h.toneMapping=oi,h.autoClear=!1;const f=new Ii({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),g=new ke(new fr,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Cu),_=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const E=this._cubeSize;Zr(s,b*E,p>2?E:0,E,E),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Ms||t.mapping===bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ou()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ke(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Zr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Da)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Pu[(s-r-1)%Pu.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ke(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ci-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ci;m>Ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ci}`);const p=[];let b=0;for(let A=0;A<Ci;++A){const C=A/_,y=Math.exp(-C*C/2);p.push(y),A===0?b+=y:A<m&&(b+=2*y)}for(let A=0;A<p.length;A++)p[A]=p[A]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-i;const x=this._sizeLods[s],T=3*x*(s>E-cs?s-E+cs:0),w=4*(this._cubeSize-x);Zr(e,T,w,3*x,2*x),l.setRenderTarget(e),l.render(u,Da)}}function by(n){const t=[],e=[],i=[];let s=n;const r=n-cs+1+Ru.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-cs?l=Ru[o-n+cs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*f),E=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let w=0;w<f;w++){const A=w%3*2/3-1,C=w>2?0:-1,y=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];b.set(y,_*g*w),E.set(d,m*g*w);const v=[w,w,w,w,w,w];x.set(v,p*g*w)}const T=new rn;T.setAttribute("position",new Sn(b,_)),T.setAttribute("uv",new Sn(E,m)),T.setAttribute("faceIndex",new Sn(x,p)),t.push(T),s>cs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Lu(n,t,e){const i=new Bi(n,t,e);return i.texture.mapping=Bo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function yy(n,t,e){const i=new Float32Array(Ci),s=new L(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Iu(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Ou(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function xc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Sy(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===fl||l===pl,h=l===Ms||l===bs;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Du(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Du(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Ey(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&as("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Ty(n,t,e,i){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],n.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const b=f.array;_=f.version;for(let E=0,x=b.length;E<x;E+=3){const T=b[E+0],w=b[E+1],A=b[E+2];d.push(T,w,w,A,A,T)}}else if(g!==void 0){const b=g.array;_=g.version;for(let E=0,x=b.length/3-1;E<x;E+=3){const T=E+0,w=E+1,A=E+2;d.push(T,w,w,A,A,T)}}else return;const m=new(gf(d)?yf:bf)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Ay(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),e.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*o,g),e.update(f,i,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*_[b];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function wy(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Ry(n,t,e){const i=new WeakMap,s=new se;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let v=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",v)};var f=v;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let T=a.attributes.position.count*x,w=1;T>t.maxTextureSize&&(w=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const A=new Float32Array(T*w*4*u),C=new xf(A,T,w,u);C.type=zn,C.needsUpdate=!0;const y=x*4;for(let P=0;P<u;P++){const F=p[P],N=b[P],X=E[P],G=T*w*4*P;for(let H=0;H<F.count;H++){const j=H*y;g===!0&&(s.fromBufferAttribute(F,H),A[G+j+0]=s.x,A[G+j+1]=s.y,A[G+j+2]=s.z,A[G+j+3]=0),_===!0&&(s.fromBufferAttribute(N,H),A[G+j+4]=s.x,A[G+j+5]=s.y,A[G+j+6]=s.z,A[G+j+7]=0),m===!0&&(s.fromBufferAttribute(X,H),A[G+j+8]=s.x,A[G+j+9]=s.y,A[G+j+10]=s.z,A[G+j+11]=X.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new Pt(T,w)},i.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Cy(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Pf=new Xe,Uu=new wf(1,1),Df=new xf,Lf=new ev,If=new Tf,Fu=[],Nu=[],ku=new Float32Array(16),Bu=new Float32Array(9),zu=new Float32Array(4);function ws(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Fu[s];if(r===void 0&&(r=new Float32Array(s),Fu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function ye(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Se(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Vo(n,t){let e=Nu[t];e===void 0&&(e=new Int32Array(t),Nu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Py(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Dy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;n.uniform2fv(this.addr,t),Se(e,t)}}function Ly(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;n.uniform3fv(this.addr,t),Se(e,t)}}function Iy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;n.uniform4fv(this.addr,t),Se(e,t)}}function Oy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,i))return;zu.set(i),n.uniformMatrix2fv(this.addr,!1,zu),Se(e,i)}}function Uy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,i))return;Bu.set(i),n.uniformMatrix3fv(this.addr,!1,Bu),Se(e,i)}}function Fy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,i))return;ku.set(i),n.uniformMatrix4fv(this.addr,!1,ku),Se(e,i)}}function Ny(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function ky(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;n.uniform2iv(this.addr,t),Se(e,t)}}function By(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;n.uniform3iv(this.addr,t),Se(e,t)}}function zy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;n.uniform4iv(this.addr,t),Se(e,t)}}function Hy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Vy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;n.uniform2uiv(this.addr,t),Se(e,t)}}function Gy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;n.uniform3uiv(this.addr,t),Se(e,t)}}function Wy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;n.uniform4uiv(this.addr,t),Se(e,t)}}function Xy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Uu.compareFunction=mf,r=Uu):r=Pf,e.setTexture2D(t||r,s)}function Yy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Lf,s)}function jy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||If,s)}function qy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Df,s)}function $y(n){switch(n){case 5126:return Py;case 35664:return Dy;case 35665:return Ly;case 35666:return Iy;case 35674:return Oy;case 35675:return Uy;case 35676:return Fy;case 5124:case 35670:return Ny;case 35667:case 35671:return ky;case 35668:case 35672:return By;case 35669:case 35673:return zy;case 5125:return Hy;case 36294:return Vy;case 36295:return Gy;case 36296:return Wy;case 35678:case 36198:case 36298:case 36306:case 35682:return Xy;case 35679:case 36299:case 36307:return Yy;case 35680:case 36300:case 36308:case 36293:return jy;case 36289:case 36303:case 36311:case 36292:return qy}}function Ky(n,t){n.uniform1fv(this.addr,t)}function Zy(n,t){const e=ws(t,this.size,2);n.uniform2fv(this.addr,e)}function Jy(n,t){const e=ws(t,this.size,3);n.uniform3fv(this.addr,e)}function Qy(n,t){const e=ws(t,this.size,4);n.uniform4fv(this.addr,e)}function tS(n,t){const e=ws(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function eS(n,t){const e=ws(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function nS(n,t){const e=ws(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function iS(n,t){n.uniform1iv(this.addr,t)}function sS(n,t){n.uniform2iv(this.addr,t)}function rS(n,t){n.uniform3iv(this.addr,t)}function oS(n,t){n.uniform4iv(this.addr,t)}function aS(n,t){n.uniform1uiv(this.addr,t)}function lS(n,t){n.uniform2uiv(this.addr,t)}function cS(n,t){n.uniform3uiv(this.addr,t)}function hS(n,t){n.uniform4uiv(this.addr,t)}function uS(n,t,e){const i=this.cache,s=t.length,r=Vo(e,s);ye(i,r)||(n.uniform1iv(this.addr,r),Se(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Pf,r[o])}function dS(n,t,e){const i=this.cache,s=t.length,r=Vo(e,s);ye(i,r)||(n.uniform1iv(this.addr,r),Se(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Lf,r[o])}function fS(n,t,e){const i=this.cache,s=t.length,r=Vo(e,s);ye(i,r)||(n.uniform1iv(this.addr,r),Se(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||If,r[o])}function pS(n,t,e){const i=this.cache,s=t.length,r=Vo(e,s);ye(i,r)||(n.uniform1iv(this.addr,r),Se(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Df,r[o])}function mS(n){switch(n){case 5126:return Ky;case 35664:return Zy;case 35665:return Jy;case 35666:return Qy;case 35674:return tS;case 35675:return eS;case 35676:return nS;case 5124:case 35670:return iS;case 35667:case 35671:return sS;case 35668:case 35672:return rS;case 35669:case 35673:return oS;case 5125:return aS;case 36294:return lS;case 36295:return cS;case 36296:return hS;case 35678:case 36198:case 36298:case 36306:case 35682:return uS;case 35679:case 36299:case 36307:return dS;case 35680:case 36300:case 36308:case 36293:return fS;case 36289:case 36303:case 36311:case 36292:return pS}}class gS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=$y(e.type)}}class _S{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mS(e.type)}}class xS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Fa=/(\w+)(\])?(\[|\.)?/g;function Hu(n,t){n.seq.push(t),n.map[t.id]=t}function vS(n,t,e){const i=n.name,s=i.length;for(Fa.lastIndex=0;;){const r=Fa.exec(i),o=Fa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Hu(e,c===void 0?new gS(a,n,t):new _S(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new xS(a),Hu(e,u)),e=u}}}class xo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);vS(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Vu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const MS=37297;let bS=0;function yS(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Gu=new Ot;function SS(n){$t._getMatrix(Gu,$t.workingColorSpace,n);const t=`mat3( ${Gu.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(n)){case wo:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Wu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+yS(n.getShaderSource(t),o)}else return s}function ES(n,t){const e=SS(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function TS(n,t){let e;switch(t){case A0:e="Linear";break;case w0:e="Reinhard";break;case R0:e="Cineon";break;case C0:e="ACESFilmic";break;case D0:e="AgX";break;case L0:e="Neutral";break;case P0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Jr=new L;function AS(){$t.getLuminanceCoefficients(Jr);const n=Jr.x.toFixed(4),t=Jr.y.toFixed(4),e=Jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)}function RS(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function CS(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function qs(n){return n!==""}function Xu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const PS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wl(n){return n.replace(PS,LS)}const DS=new Map;function LS(n,t){let e=Ft[t];if(e===void 0){const i=DS.get(t);if(i!==void 0)e=Ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Wl(e)}const IS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ju(n){return n.replace(IS,OS)}function OS(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function US(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===tf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===r0?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function FS(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ms:case bs:t="ENVMAP_TYPE_CUBE";break;case Bo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function NS(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case bs:t="ENVMAP_MODE_REFRACTION";break}return t}function kS(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ef:t="ENVMAP_BLENDING_MULTIPLY";break;case E0:t="ENVMAP_BLENDING_MIX";break;case T0:t="ENVMAP_BLENDING_ADD";break}return t}function BS(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function zS(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=US(e),c=FS(e),h=NS(e),u=kS(e),d=BS(e),f=wS(e),g=RS(r),_=s.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qs).join(`
`),p.length>0&&(p+=`
`)):(m=[qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),p=[qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?Ft.tonemapping_pars_fragment:"",e.toneMapping!==oi?TS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,ES("linearToOutputTexel",e.outputColorSpace),AS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qs).join(`
`)),o=Wl(o),o=Xu(o,e),o=Yu(o,e),a=Wl(a),a=Xu(a,e),a=Yu(a,e),o=ju(o),a=ju(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=b+m+o,x=b+p+a,T=Vu(s,s.VERTEX_SHADER,E),w=Vu(s,s.FRAGMENT_SHADER,x);s.attachShader(_,T),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(P){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(_).trim(),N=s.getShaderInfoLog(T).trim(),X=s.getShaderInfoLog(w).trim();let G=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,T,w);else{const j=Wu(s,T,"vertex"),W=Wu(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+j+`
`+W)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(N===""||X==="")&&(H=!1);H&&(P.diagnostics={runnable:G,programLog:F,vertexShader:{log:N,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(T),s.deleteShader(w),C=new xo(s,_),y=CS(s,_)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,MS)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bS++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}let HS=0;class VS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new GS(t),e.set(t,i)),i}}class GS{constructor(t){this.id=HS++,this.code=t,this.usedTimes=0}}function WS(n,t,e,i,s,r,o){const a=new vf,l=new VS,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,v,P,F,N){const X=F.fog,G=N.geometry,H=y.isMeshStandardMaterial?F.environment:null,j=(y.isMeshStandardMaterial?e:t).get(y.envMap||H),W=j&&j.mapping===Bo?j.image.height:null,nt=g[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const it=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,dt=it!==void 0?it.length:0;let vt=0;G.morphAttributes.position!==void 0&&(vt=1),G.morphAttributes.normal!==void 0&&(vt=2),G.morphAttributes.color!==void 0&&(vt=3);let Lt,V,J,ot;if(nt){const Qt=vn[nt];Lt=Qt.vertexShader,V=Qt.fragmentShader}else Lt=y.vertexShader,V=y.fragmentShader,l.update(y),J=l.getVertexShaderID(y),ot=l.getFragmentShaderID(y);const st=n.getRenderTarget(),St=n.state.buffers.depth.getReversed(),At=N.isInstancedMesh===!0,Nt=N.isBatchedMesh===!0,de=!!y.map,Xt=!!y.matcap,ge=!!j,D=!!y.aoMap,Qe=!!y.lightMap,Vt=!!y.bumpMap,Gt=!!y.normalMap,bt=!!y.displacementMap,ae=!!y.emissiveMap,Mt=!!y.metalnessMap,R=!!y.roughnessMap,M=y.anisotropy>0,k=y.clearcoat>0,$=y.dispersion>0,Z=y.iridescence>0,q=y.sheen>0,xt=y.transmission>0,ct=M&&!!y.anisotropyMap,pt=k&&!!y.clearcoatMap,Yt=k&&!!y.clearcoatNormalMap,tt=k&&!!y.clearcoatRoughnessMap,mt=Z&&!!y.iridescenceMap,Tt=Z&&!!y.iridescenceThicknessMap,wt=q&&!!y.sheenColorMap,gt=q&&!!y.sheenRoughnessMap,Wt=!!y.specularMap,Ut=!!y.specularColorMap,re=!!y.specularIntensityMap,I=xt&&!!y.transmissionMap,at=xt&&!!y.thicknessMap,Y=!!y.gradientMap,K=!!y.alphaMap,ut=y.alphaTest>0,ht=!!y.alphaHash,It=!!y.extensions;let fe=oi;y.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(fe=n.toneMapping);const Ce={shaderID:nt,shaderType:y.type,shaderName:y.name,vertexShader:Lt,fragmentShader:V,defines:y.defines,customVertexShaderID:J,customFragmentShaderID:ot,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Nt,batchingColor:Nt&&N._colorsTexture!==null,instancing:At,instancingColor:At&&N.instanceColor!==null,instancingMorph:At&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?n.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Es,alphaToCoverage:!!y.alphaToCoverage,map:de,matcap:Xt,envMap:ge,envMapMode:ge&&j.mapping,envMapCubeUVHeight:W,aoMap:D,lightMap:Qe,bumpMap:Vt,normalMap:Gt,displacementMap:d&&bt,emissiveMap:ae,normalMapObjectSpace:Gt&&y.normalMapType===F0,normalMapTangentSpace:Gt&&y.normalMapType===pf,metalnessMap:Mt,roughnessMap:R,anisotropy:M,anisotropyMap:ct,clearcoat:k,clearcoatMap:pt,clearcoatNormalMap:Yt,clearcoatRoughnessMap:tt,dispersion:$,iridescence:Z,iridescenceMap:mt,iridescenceThicknessMap:Tt,sheen:q,sheenColorMap:wt,sheenRoughnessMap:gt,specularMap:Wt,specularColorMap:Ut,specularIntensityMap:re,transmission:xt,transmissionMap:I,thicknessMap:at,gradientMap:Y,opaque:y.transparent===!1&&y.blending===ds&&y.alphaToCoverage===!1,alphaMap:K,alphaTest:ut,alphaHash:ht,combine:y.combine,mapUv:de&&_(y.map.channel),aoMapUv:D&&_(y.aoMap.channel),lightMapUv:Qe&&_(y.lightMap.channel),bumpMapUv:Vt&&_(y.bumpMap.channel),normalMapUv:Gt&&_(y.normalMap.channel),displacementMapUv:bt&&_(y.displacementMap.channel),emissiveMapUv:ae&&_(y.emissiveMap.channel),metalnessMapUv:Mt&&_(y.metalnessMap.channel),roughnessMapUv:R&&_(y.roughnessMap.channel),anisotropyMapUv:ct&&_(y.anisotropyMap.channel),clearcoatMapUv:pt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:gt&&_(y.sheenRoughnessMap.channel),specularMapUv:Wt&&_(y.specularMap.channel),specularColorMapUv:Ut&&_(y.specularColorMap.channel),specularIntensityMapUv:re&&_(y.specularIntensityMap.channel),transmissionMapUv:I&&_(y.transmissionMap.channel),thicknessMapUv:at&&_(y.thicknessMap.channel),alphaMapUv:K&&_(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Gt||M),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!G.attributes.uv&&(de||K),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:St,skinning:N.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:vt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:fe,decodeVideoTexture:de&&y.map.isVideoTexture===!0&&$t.getTransfer(y.map.colorSpace)===ne,decodeVideoTextureEmissive:ae&&y.emissiveMap.isVideoTexture===!0&&$t.getTransfer(y.emissiveMap.colorSpace)===ne,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Mn,flipSided:y.side===We,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:It&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&y.extensions.multiDraw===!0||Nt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ce.vertexUv1s=c.has(1),Ce.vertexUv2s=c.has(2),Ce.vertexUv3s=c.has(3),c.clear(),Ce}function p(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)v.push(P),v.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(b(v,y),E(v,y),v.push(n.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function b(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function E(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const v=g[y.type];let P;if(v){const F=vn[v];P=fv.clone(F.uniforms)}else P=y.uniforms;return P}function T(y,v){let P;for(let F=0,N=h.length;F<N;F++){const X=h[F];if(X.cacheKey===v){P=X,++P.usedTimes;break}}return P===void 0&&(P=new zS(n,v,y,r),h.push(P)),P}function w(y){if(--y.usedTimes===0){const v=h.indexOf(y);h[v]=h[h.length-1],h.pop(),y.destroy()}}function A(y){l.remove(y)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:T,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:C}}function XS(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function YS(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function $u(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ku(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,f,g,_,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||YS),i.length>1&&i.sort(d||$u),s.length>1&&s.sort(d||$u)}function h(){for(let u=t,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function jS(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Ku,n.set(i,[o])):s>=r.length?(o=new Ku,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function qS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Bt};break;case"SpotLight":e={position:new L,direction:new L,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function $S(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let KS=0;function ZS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function JS(n){const t=new qS,e=$S(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const s=new L,r=new ue,o=new ue;function a(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,b=0,E=0,x=0,T=0,w=0,A=0;c.sort(ZS);for(let y=0,v=c.length;y<v;y++){const P=c[y],F=P.color,N=P.intensity,X=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=F.r*N,u+=F.g*N,d+=F.b*N;else if(P.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],N);A++}else if(P.isDirectionalLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,W=e.get(P);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,i.directionalShadow[f]=W,i.directionalShadowMap[f]=G,i.directionalShadowMatrix[f]=P.shadow.matrix,b++}i.directional[f]=H,f++}else if(P.isSpotLight){const H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(F).multiplyScalar(N),H.distance=X,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[_]=H;const j=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,j.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[_]=j.matrix,P.castShadow){const W=e.get(P);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,i.spotShadow[_]=W,i.spotShadowMap[_]=G,x++}_++}else if(P.isRectAreaLight){const H=t.get(P);H.color.copy(F).multiplyScalar(N),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=H,m++}else if(P.isPointLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const j=P.shadow,W=e.get(P);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=G,i.pointShadowMatrix[g]=P.shadow.matrix,E++}i.point[g]=H,g++}else if(P.isHemisphereLight){const H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(N),H.groundColor.copy(P.groundColor).multiplyScalar(N),i.hemi[p]=H,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const C=i.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==b||C.numPointShadows!==E||C.numSpotShadows!==x||C.numSpotMaps!==T||C.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=x+T-w,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=b,C.numPointShadows=E,C.numSpotShadows=x,C.numSpotMaps=T,C.numLightProbes=A,i.version=KS++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const E=c[p];if(E.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(E.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Zu(n){const t=new JS(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function QS(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Zu(n),t.set(s,[a])):r>=o.length?(a=new Zu(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const tE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nE(n,t,e){let i=new mc;const s=new Pt,r=new Pt,o=new se,a=new Ev({depthPacking:U0}),l=new Tv,c={},h=e.maxTextureSize,u={[ci]:We,[We]:ci,[Mn]:Mn},d=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:tE,fragmentShader:eE}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new rn;g.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ke(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tf;let p=this.type;this.render=function(w,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const y=n.getRenderTarget(),v=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),F=n.state;F.setBlending(ri),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const N=p!==On&&this.type===On,X=p===On&&this.type!==On;for(let G=0,H=w.length;G<H;G++){const j=w[G],W=j.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const nt=W.getFrameExtents();if(s.multiply(nt),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,W.mapSize.y=r.y)),W.map===null||N===!0||X===!0){const dt=this.type!==On?{minFilter:mn,magFilter:mn}:{};W.map!==null&&W.map.dispose(),W.map=new Bi(s.x,s.y,dt),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const it=W.getViewportCount();for(let dt=0;dt<it;dt++){const vt=W.getViewport(dt);o.set(r.x*vt.x,r.y*vt.y,r.x*vt.z,r.y*vt.w),F.viewport(o),W.updateMatrices(j,dt),i=W.getFrustum(),x(A,C,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===On&&b(W,C),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(y,v,P)};function b(w,A){const C=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Bi(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,C,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,C,f,_,null)}function E(w,A,C,y){let v=null;const P=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)v=P;else if(v=C.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const F=v.uuid,N=A.uuid;let X=c[F];X===void 0&&(X={},c[F]=X);let G=X[N];G===void 0&&(G=v.clone(),X[N]=G,A.addEventListener("dispose",T)),v=G}if(v.visible=A.visible,v.wireframe=A.wireframe,y===On?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:u[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const F=n.properties.get(v);F.light=C}return v}function x(w,A,C,y,v){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===On)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const N=t.update(w),X=w.material;if(Array.isArray(X)){const G=N.groups;for(let H=0,j=G.length;H<j;H++){const W=G[H],nt=X[W.materialIndex];if(nt&&nt.visible){const it=E(w,nt,y,v);w.onBeforeShadow(n,w,A,C,N,it,W),n.renderBufferDirect(C,null,N,it,w,W),w.onAfterShadow(n,w,A,C,N,it,W)}}}else if(X.visible){const G=E(w,X,y,v);w.onBeforeShadow(n,w,A,C,N,G,null),n.renderBufferDirect(C,null,N,G,w,null),w.onAfterShadow(n,w,A,C,N,G,null)}}const F=w.children;for(let N=0,X=F.length;N<X;N++)x(F[N],A,C,y,v)}function T(w){w.target.removeEventListener("dispose",T);for(const C in c){const y=c[C],v=w.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}const iE={[ol]:al,[ll]:ul,[cl]:dl,[vs]:hl,[al]:ol,[ul]:ll,[dl]:cl,[hl]:vs};function sE(n,t){function e(){let I=!1;const at=new se;let Y=null;const K=new se(0,0,0,0);return{setMask:function(ut){Y!==ut&&!I&&(n.colorMask(ut,ut,ut,ut),Y=ut)},setLocked:function(ut){I=ut},setClear:function(ut,ht,It,fe,Ce){Ce===!0&&(ut*=fe,ht*=fe,It*=fe),at.set(ut,ht,It,fe),K.equals(at)===!1&&(n.clearColor(ut,ht,It,fe),K.copy(at))},reset:function(){I=!1,Y=null,K.set(-1,0,0,0)}}}function i(){let I=!1,at=!1,Y=null,K=null,ut=null;return{setReversed:function(ht){if(at!==ht){const It=t.get("EXT_clip_control");at?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);const fe=ut;ut=null,this.setClear(fe)}at=ht},getReversed:function(){return at},setTest:function(ht){ht?st(n.DEPTH_TEST):St(n.DEPTH_TEST)},setMask:function(ht){Y!==ht&&!I&&(n.depthMask(ht),Y=ht)},setFunc:function(ht){if(at&&(ht=iE[ht]),K!==ht){switch(ht){case ol:n.depthFunc(n.NEVER);break;case al:n.depthFunc(n.ALWAYS);break;case ll:n.depthFunc(n.LESS);break;case vs:n.depthFunc(n.LEQUAL);break;case cl:n.depthFunc(n.EQUAL);break;case hl:n.depthFunc(n.GEQUAL);break;case ul:n.depthFunc(n.GREATER);break;case dl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=ht}},setLocked:function(ht){I=ht},setClear:function(ht){ut!==ht&&(at&&(ht=1-ht),n.clearDepth(ht),ut=ht)},reset:function(){I=!1,Y=null,K=null,ut=null,at=!1}}}function s(){let I=!1,at=null,Y=null,K=null,ut=null,ht=null,It=null,fe=null,Ce=null;return{setTest:function(Qt){I||(Qt?st(n.STENCIL_TEST):St(n.STENCIL_TEST))},setMask:function(Qt){at!==Qt&&!I&&(n.stencilMask(Qt),at=Qt)},setFunc:function(Qt,on,Tn){(Y!==Qt||K!==on||ut!==Tn)&&(n.stencilFunc(Qt,on,Tn),Y=Qt,K=on,ut=Tn)},setOp:function(Qt,on,Tn){(ht!==Qt||It!==on||fe!==Tn)&&(n.stencilOp(Qt,on,Tn),ht=Qt,It=on,fe=Tn)},setLocked:function(Qt){I=Qt},setClear:function(Qt){Ce!==Qt&&(n.clearStencil(Qt),Ce=Qt)},reset:function(){I=!1,at=null,Y=null,K=null,ut=null,ht=null,It=null,fe=null,Ce=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,E=null,x=null,T=null,w=null,A=new Bt(0,0,0),C=0,y=!1,v=null,P=null,F=null,N=null,X=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,j=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=j>=2);let nt=null,it={};const dt=n.getParameter(n.SCISSOR_BOX),vt=n.getParameter(n.VIEWPORT),Lt=new se().fromArray(dt),V=new se().fromArray(vt);function J(I,at,Y,K){const ut=new Uint8Array(4),ht=n.createTexture();n.bindTexture(I,ht),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let It=0;It<Y;It++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(at,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,ut):n.texImage2D(at+It,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ut);return ht}const ot={};ot[n.TEXTURE_2D]=J(n.TEXTURE_2D,n.TEXTURE_2D,1),ot[n.TEXTURE_CUBE_MAP]=J(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[n.TEXTURE_2D_ARRAY]=J(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ot[n.TEXTURE_3D]=J(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(n.DEPTH_TEST),o.setFunc(vs),Vt(!1),Gt($h),st(n.CULL_FACE),D(ri);function st(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function St(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function At(I,at){return u[I]!==at?(n.bindFramebuffer(I,at),u[I]=at,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=at),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=at),!0):!1}function Nt(I,at){let Y=f,K=!1;if(I){Y=d.get(at),Y===void 0&&(Y=[],d.set(at,Y));const ut=I.textures;if(Y.length!==ut.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let ht=0,It=ut.length;ht<It;ht++)Y[ht]=n.COLOR_ATTACHMENT0+ht;Y.length=ut.length,K=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,K=!0);K&&n.drawBuffers(Y)}function de(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const Xt={[Ri]:n.FUNC_ADD,[a0]:n.FUNC_SUBTRACT,[l0]:n.FUNC_REVERSE_SUBTRACT};Xt[c0]=n.MIN,Xt[h0]=n.MAX;const ge={[u0]:n.ZERO,[d0]:n.ONE,[f0]:n.SRC_COLOR,[sl]:n.SRC_ALPHA,[v0]:n.SRC_ALPHA_SATURATE,[_0]:n.DST_COLOR,[m0]:n.DST_ALPHA,[p0]:n.ONE_MINUS_SRC_COLOR,[rl]:n.ONE_MINUS_SRC_ALPHA,[x0]:n.ONE_MINUS_DST_COLOR,[g0]:n.ONE_MINUS_DST_ALPHA,[M0]:n.CONSTANT_COLOR,[b0]:n.ONE_MINUS_CONSTANT_COLOR,[y0]:n.CONSTANT_ALPHA,[S0]:n.ONE_MINUS_CONSTANT_ALPHA};function D(I,at,Y,K,ut,ht,It,fe,Ce,Qt){if(I===ri){_===!0&&(St(n.BLEND),_=!1);return}if(_===!1&&(st(n.BLEND),_=!0),I!==o0){if(I!==m||Qt!==y){if((p!==Ri||x!==Ri)&&(n.blendEquation(n.FUNC_ADD),p=Ri,x=Ri),Qt)switch(I){case ds:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case il:n.blendFunc(n.ONE,n.ONE);break;case Kh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ds:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case il:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Kh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,E=null,T=null,w=null,A.set(0,0,0),C=0,m=I,y=Qt}return}ut=ut||at,ht=ht||Y,It=It||K,(at!==p||ut!==x)&&(n.blendEquationSeparate(Xt[at],Xt[ut]),p=at,x=ut),(Y!==b||K!==E||ht!==T||It!==w)&&(n.blendFuncSeparate(ge[Y],ge[K],ge[ht],ge[It]),b=Y,E=K,T=ht,w=It),(fe.equals(A)===!1||Ce!==C)&&(n.blendColor(fe.r,fe.g,fe.b,Ce),A.copy(fe),C=Ce),m=I,y=!1}function Qe(I,at){I.side===Mn?St(n.CULL_FACE):st(n.CULL_FACE);let Y=I.side===We;at&&(Y=!Y),Vt(Y),I.blending===ds&&I.transparent===!1?D(ri):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const K=I.stencilWrite;a.setTest(K),K&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ae(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?st(n.SAMPLE_ALPHA_TO_COVERAGE):St(n.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(I){v!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),v=I)}function Gt(I){I!==i0?(st(n.CULL_FACE),I!==P&&(I===$h?n.cullFace(n.BACK):I===s0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):St(n.CULL_FACE),P=I}function bt(I){I!==F&&(H&&n.lineWidth(I),F=I)}function ae(I,at,Y){I?(st(n.POLYGON_OFFSET_FILL),(N!==at||X!==Y)&&(n.polygonOffset(at,Y),N=at,X=Y)):St(n.POLYGON_OFFSET_FILL)}function Mt(I){I?st(n.SCISSOR_TEST):St(n.SCISSOR_TEST)}function R(I){I===void 0&&(I=n.TEXTURE0+G-1),nt!==I&&(n.activeTexture(I),nt=I)}function M(I,at,Y){Y===void 0&&(nt===null?Y=n.TEXTURE0+G-1:Y=nt);let K=it[Y];K===void 0&&(K={type:void 0,texture:void 0},it[Y]=K),(K.type!==I||K.texture!==at)&&(nt!==Y&&(n.activeTexture(Y),nt=Y),n.bindTexture(I,at||ot[I]),K.type=I,K.texture=at)}function k(){const I=it[nt];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function $(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ct(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Yt(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function mt(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(I){Lt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Lt.copy(I))}function gt(I){V.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),V.copy(I))}function Wt(I,at){let Y=c.get(at);Y===void 0&&(Y=new WeakMap,c.set(at,Y));let K=Y.get(I);K===void 0&&(K=n.getUniformBlockIndex(at,I.name),Y.set(I,K))}function Ut(I,at){const K=c.get(at).get(I);l.get(at)!==K&&(n.uniformBlockBinding(at,K,I.__bindingPointIndex),l.set(at,K))}function re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},nt=null,it={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,E=null,x=null,T=null,w=null,A=new Bt(0,0,0),C=0,y=!1,v=null,P=null,F=null,N=null,X=null,Lt.set(0,0,n.canvas.width,n.canvas.height),V.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:St,bindFramebuffer:At,drawBuffers:Nt,useProgram:de,setBlending:D,setMaterial:Qe,setFlipSided:Vt,setCullFace:Gt,setLineWidth:bt,setPolygonOffset:ae,setScissorTest:Mt,activeTexture:R,bindTexture:M,unbindTexture:k,compressedTexImage2D:$,compressedTexImage3D:Z,texImage2D:mt,texImage3D:Tt,updateUBOMapping:Wt,uniformBlockBinding:Ut,texStorage2D:Yt,texStorage3D:tt,texSubImage2D:q,texSubImage3D:xt,compressedTexSubImage2D:ct,compressedTexSubImage3D:pt,scissor:wt,viewport:gt,reset:re}}function rE(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return f?new OffscreenCanvas(R,M):Co("canvas")}function _(R,M,k){let $=1;const Z=Mt(R);if((Z.width>k||Z.height>k)&&($=k/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const q=Math.floor($*Z.width),xt=Math.floor($*Z.height);u===void 0&&(u=g(q,xt));const ct=M?g(q,xt):u;return ct.width=q,ct.height=xt,ct.getContext("2d").drawImage(R,0,0,q,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+xt+")."),ct}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){n.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(R,M,k,$,Z=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=M;if(M===n.RED&&(k===n.FLOAT&&(q=n.R32F),k===n.HALF_FLOAT&&(q=n.R16F),k===n.UNSIGNED_BYTE&&(q=n.R8)),M===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(q=n.R8UI),k===n.UNSIGNED_SHORT&&(q=n.R16UI),k===n.UNSIGNED_INT&&(q=n.R32UI),k===n.BYTE&&(q=n.R8I),k===n.SHORT&&(q=n.R16I),k===n.INT&&(q=n.R32I)),M===n.RG&&(k===n.FLOAT&&(q=n.RG32F),k===n.HALF_FLOAT&&(q=n.RG16F),k===n.UNSIGNED_BYTE&&(q=n.RG8)),M===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(q=n.RG8UI),k===n.UNSIGNED_SHORT&&(q=n.RG16UI),k===n.UNSIGNED_INT&&(q=n.RG32UI),k===n.BYTE&&(q=n.RG8I),k===n.SHORT&&(q=n.RG16I),k===n.INT&&(q=n.RG32I)),M===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(q=n.RGB8UI),k===n.UNSIGNED_SHORT&&(q=n.RGB16UI),k===n.UNSIGNED_INT&&(q=n.RGB32UI),k===n.BYTE&&(q=n.RGB8I),k===n.SHORT&&(q=n.RGB16I),k===n.INT&&(q=n.RGB32I)),M===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),k===n.UNSIGNED_INT&&(q=n.RGBA32UI),k===n.BYTE&&(q=n.RGBA8I),k===n.SHORT&&(q=n.RGBA16I),k===n.INT&&(q=n.RGBA32I)),M===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),M===n.RGBA){const xt=Z?wo:$t.getTransfer($);k===n.FLOAT&&(q=n.RGBA32F),k===n.HALF_FLOAT&&(q=n.RGBA16F),k===n.UNSIGNED_BYTE&&(q=xt===ne?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function x(R,M){let k;return R?M===null||M===ki||M===ys?k=n.DEPTH24_STENCIL8:M===zn?k=n.DEPTH32F_STENCIL8:M===ar&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ki||M===ys?k=n.DEPTH_COMPONENT24:M===zn?k=n.DEPTH_COMPONENT32F:M===ar&&(k=n.DEPTH_COMPONENT16),k}function T(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==mn&&R.minFilter!==bn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function w(R){const M=R.target;M.removeEventListener("dispose",w),C(M),M.isVideoTexture&&h.delete(M)}function A(R){const M=R.target;M.removeEventListener("dispose",A),v(M)}function C(R){const M=i.get(R);if(M.__webglInit===void 0)return;const k=R.source,$=d.get(k);if($){const Z=$[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&y(R),Object.keys($).length===0&&d.delete(k)}i.remove(R)}function y(R){const M=i.get(R);n.deleteTexture(M.__webglTexture);const k=R.source,$=d.get(k);delete $[M.__cacheKey],o.memory.textures--}function v(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let Z=0;Z<M.__webglFramebuffer[$].length;Z++)n.deleteFramebuffer(M.__webglFramebuffer[$][Z]);else n.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)n.deleteFramebuffer(M.__webglFramebuffer[$]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=R.textures;for(let $=0,Z=k.length;$<Z;$++){const q=i.get(k[$]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(k[$])}i.remove(R)}let P=0;function F(){P=0}function N(){const R=P;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),P+=1,R}function X(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function G(R,M){const k=i.get(R);if(R.isVideoTexture&&bt(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(k,R,M);return}}e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+M)}function H(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){V(k,R,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+M)}function j(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){V(k,R,M);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+M)}function W(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){J(k,R,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+M)}const nt={[ml]:n.REPEAT,[Di]:n.CLAMP_TO_EDGE,[gl]:n.MIRRORED_REPEAT},it={[mn]:n.NEAREST,[I0]:n.NEAREST_MIPMAP_NEAREST,[Cr]:n.NEAREST_MIPMAP_LINEAR,[bn]:n.LINEAR,[ra]:n.LINEAR_MIPMAP_NEAREST,[Li]:n.LINEAR_MIPMAP_LINEAR},dt={[N0]:n.NEVER,[G0]:n.ALWAYS,[k0]:n.LESS,[mf]:n.LEQUAL,[B0]:n.EQUAL,[V0]:n.GEQUAL,[z0]:n.GREATER,[H0]:n.NOTEQUAL};function vt(R,M){if(M.type===zn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===bn||M.magFilter===ra||M.magFilter===Cr||M.magFilter===Li||M.minFilter===bn||M.minFilter===ra||M.minFilter===Cr||M.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,nt[M.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,nt[M.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,nt[M.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,it[M.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,it[M.minFilter]),M.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,dt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===mn||M.minFilter!==Cr&&M.minFilter!==Li||M.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Lt(R,M){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",w));const $=M.source;let Z=d.get($);Z===void 0&&(Z={},d.set($,Z));const q=X(M);if(q!==R.__cacheKey){Z[q]===void 0&&(Z[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Z[q].usedTimes++;const xt=Z[R.__cacheKey];xt!==void 0&&(Z[R.__cacheKey].usedTimes--,xt.usedTimes===0&&y(M)),R.__cacheKey=q,R.__webglTexture=Z[q].texture}return k}function V(R,M,k){let $=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=n.TEXTURE_3D);const Z=Lt(R,M),q=M.source;e.bindTexture($,R.__webglTexture,n.TEXTURE0+k);const xt=i.get(q);if(q.version!==xt.__version||Z===!0){e.activeTexture(n.TEXTURE0+k);const ct=$t.getPrimaries($t.workingColorSpace),pt=M.colorSpace===Jn?null:$t.getPrimaries(M.colorSpace),Yt=M.colorSpace===Jn||ct===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let tt=_(M.image,!1,s.maxTextureSize);tt=ae(M,tt);const mt=r.convert(M.format,M.colorSpace),Tt=r.convert(M.type);let wt=E(M.internalFormat,mt,Tt,M.colorSpace,M.isVideoTexture);vt($,M);let gt;const Wt=M.mipmaps,Ut=M.isVideoTexture!==!0,re=xt.__version===void 0||Z===!0,I=q.dataReady,at=T(M,tt);if(M.isDepthTexture)wt=x(M.format===Ss,M.type),re&&(Ut?e.texStorage2D(n.TEXTURE_2D,1,wt,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,wt,tt.width,tt.height,0,mt,Tt,null));else if(M.isDataTexture)if(Wt.length>0){Ut&&re&&e.texStorage2D(n.TEXTURE_2D,at,wt,Wt[0].width,Wt[0].height);for(let Y=0,K=Wt.length;Y<K;Y++)gt=Wt[Y],Ut?I&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,gt.width,gt.height,mt,Tt,gt.data):e.texImage2D(n.TEXTURE_2D,Y,wt,gt.width,gt.height,0,mt,Tt,gt.data);M.generateMipmaps=!1}else Ut?(re&&e.texStorage2D(n.TEXTURE_2D,at,wt,tt.width,tt.height),I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,tt.width,tt.height,mt,Tt,tt.data)):e.texImage2D(n.TEXTURE_2D,0,wt,tt.width,tt.height,0,mt,Tt,tt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ut&&re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,at,wt,Wt[0].width,Wt[0].height,tt.depth);for(let Y=0,K=Wt.length;Y<K;Y++)if(gt=Wt[Y],M.format!==fn)if(mt!==null)if(Ut){if(I)if(M.layerUpdates.size>0){const ut=wu(gt.width,gt.height,M.format,M.type);for(const ht of M.layerUpdates){const It=gt.data.subarray(ht*ut/gt.data.BYTES_PER_ELEMENT,(ht+1)*ut/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,ht,gt.width,gt.height,1,mt,It)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,gt.width,gt.height,tt.depth,mt,gt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,wt,gt.width,gt.height,tt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?I&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,gt.width,gt.height,tt.depth,mt,Tt,gt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Y,wt,gt.width,gt.height,tt.depth,0,mt,Tt,gt.data)}else{Ut&&re&&e.texStorage2D(n.TEXTURE_2D,at,wt,Wt[0].width,Wt[0].height);for(let Y=0,K=Wt.length;Y<K;Y++)gt=Wt[Y],M.format!==fn?mt!==null?Ut?I&&e.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(n.TEXTURE_2D,Y,wt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?I&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,gt.width,gt.height,mt,Tt,gt.data):e.texImage2D(n.TEXTURE_2D,Y,wt,gt.width,gt.height,0,mt,Tt,gt.data)}else if(M.isDataArrayTexture)if(Ut){if(re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,at,wt,tt.width,tt.height,tt.depth),I)if(M.layerUpdates.size>0){const Y=wu(tt.width,tt.height,M.format,M.type);for(const K of M.layerUpdates){const ut=tt.data.subarray(K*Y/tt.data.BYTES_PER_ELEMENT,(K+1)*Y/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,tt.width,tt.height,1,mt,Tt,ut)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,mt,Tt,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,wt,tt.width,tt.height,tt.depth,0,mt,Tt,tt.data);else if(M.isData3DTexture)Ut?(re&&e.texStorage3D(n.TEXTURE_3D,at,wt,tt.width,tt.height,tt.depth),I&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,mt,Tt,tt.data)):e.texImage3D(n.TEXTURE_3D,0,wt,tt.width,tt.height,tt.depth,0,mt,Tt,tt.data);else if(M.isFramebufferTexture){if(re)if(Ut)e.texStorage2D(n.TEXTURE_2D,at,wt,tt.width,tt.height);else{let Y=tt.width,K=tt.height;for(let ut=0;ut<at;ut++)e.texImage2D(n.TEXTURE_2D,ut,wt,Y,K,0,mt,Tt,null),Y>>=1,K>>=1}}else if(Wt.length>0){if(Ut&&re){const Y=Mt(Wt[0]);e.texStorage2D(n.TEXTURE_2D,at,wt,Y.width,Y.height)}for(let Y=0,K=Wt.length;Y<K;Y++)gt=Wt[Y],Ut?I&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,mt,Tt,gt):e.texImage2D(n.TEXTURE_2D,Y,wt,mt,Tt,gt);M.generateMipmaps=!1}else if(Ut){if(re){const Y=Mt(tt);e.texStorage2D(n.TEXTURE_2D,at,wt,Y.width,Y.height)}I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,mt,Tt,tt)}else e.texImage2D(n.TEXTURE_2D,0,wt,mt,Tt,tt);m(M)&&p($),xt.__version=q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function J(R,M,k){if(M.image.length!==6)return;const $=Lt(R,M),Z=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+k);const q=i.get(Z);if(Z.version!==q.__version||$===!0){e.activeTexture(n.TEXTURE0+k);const xt=$t.getPrimaries($t.workingColorSpace),ct=M.colorSpace===Jn?null:$t.getPrimaries(M.colorSpace),pt=M.colorSpace===Jn||xt===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Yt=M.isCompressedTexture||M.image[0].isCompressedTexture,tt=M.image[0]&&M.image[0].isDataTexture,mt=[];for(let K=0;K<6;K++)!Yt&&!tt?mt[K]=_(M.image[K],!0,s.maxCubemapSize):mt[K]=tt?M.image[K].image:M.image[K],mt[K]=ae(M,mt[K]);const Tt=mt[0],wt=r.convert(M.format,M.colorSpace),gt=r.convert(M.type),Wt=E(M.internalFormat,wt,gt,M.colorSpace),Ut=M.isVideoTexture!==!0,re=q.__version===void 0||$===!0,I=Z.dataReady;let at=T(M,Tt);vt(n.TEXTURE_CUBE_MAP,M);let Y;if(Yt){Ut&&re&&e.texStorage2D(n.TEXTURE_CUBE_MAP,at,Wt,Tt.width,Tt.height);for(let K=0;K<6;K++){Y=mt[K].mipmaps;for(let ut=0;ut<Y.length;ut++){const ht=Y[ut];M.format!==fn?wt!==null?Ut?I&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,0,0,ht.width,ht.height,wt,ht.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,Wt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,0,0,ht.width,ht.height,wt,gt,ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,Wt,ht.width,ht.height,0,wt,gt,ht.data)}}}else{if(Y=M.mipmaps,Ut&&re){Y.length>0&&at++;const K=Mt(mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,at,Wt,K.width,K.height)}for(let K=0;K<6;K++)if(tt){Ut?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,mt[K].width,mt[K].height,wt,gt,mt[K].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Wt,mt[K].width,mt[K].height,0,wt,gt,mt[K].data);for(let ut=0;ut<Y.length;ut++){const It=Y[ut].image[K].image;Ut?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,0,0,It.width,It.height,wt,gt,It.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,Wt,It.width,It.height,0,wt,gt,It.data)}}else{Ut?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,wt,gt,mt[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Wt,wt,gt,mt[K]);for(let ut=0;ut<Y.length;ut++){const ht=Y[ut];Ut?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,0,0,wt,gt,ht.image[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,Wt,wt,gt,ht.image[K])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),q.__version=Z.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ot(R,M,k,$,Z,q){const xt=r.convert(k.format,k.colorSpace),ct=r.convert(k.type),pt=E(k.internalFormat,xt,ct,k.colorSpace),Yt=i.get(M),tt=i.get(k);if(tt.__renderTarget=M,!Yt.__hasExternalTextures){const mt=Math.max(1,M.width>>q),Tt=Math.max(1,M.height>>q);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,q,pt,mt,Tt,M.depth,0,xt,ct,null):e.texImage2D(Z,q,pt,mt,Tt,0,xt,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),Gt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,Z,tt.__webglTexture,0,Vt(M)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,Z,tt.__webglTexture,q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function st(R,M,k){if(n.bindRenderbuffer(n.RENDERBUFFER,R),M.depthBuffer){const $=M.depthTexture,Z=$&&$.isDepthTexture?$.type:null,q=x(M.stencilBuffer,Z),xt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=Vt(M);Gt(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,q,M.width,M.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,q,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,q,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xt,n.RENDERBUFFER,R)}else{const $=M.textures;for(let Z=0;Z<$.length;Z++){const q=$[Z],xt=r.convert(q.format,q.colorSpace),ct=r.convert(q.type),pt=E(q.internalFormat,xt,ct,q.colorSpace),Yt=Vt(M);k&&Gt(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Yt,pt,M.width,M.height):Gt(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Yt,pt,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,pt,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function St(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(M.depthTexture);$.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);const Z=$.__webglTexture,q=Vt(M);if(M.depthTexture.format===fs)Gt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(M.depthTexture.format===Ss)Gt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function At(R){const M=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){const Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=$}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");St(M.__webglFramebuffer,R)}else if(k){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=n.createRenderbuffer(),st(M.__webglDepthbuffer[$],R,!1);else{const Z=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,q)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),st(M.__webglDepthbuffer,R,!1);else{const $=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,Z)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(R,M,k){const $=i.get(R);M!==void 0&&ot($.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&At(R)}function de(R){const M=R.texture,k=i.get(R),$=i.get(M);R.addEventListener("dispose",A);const Z=R.textures,q=R.isWebGLCubeRenderTarget===!0,xt=Z.length>1;if(xt||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=M.version,o.memory.textures++),q){k.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[ct]=[];for(let pt=0;pt<M.mipmaps.length;pt++)k.__webglFramebuffer[ct][pt]=n.createFramebuffer()}else k.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let ct=0;ct<M.mipmaps.length;ct++)k.__webglFramebuffer[ct]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(xt)for(let ct=0,pt=Z.length;ct<pt;ct++){const Yt=i.get(Z[ct]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&Gt(R)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ct=0;ct<Z.length;ct++){const pt=Z[ct];k.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[ct]);const Yt=r.convert(pt.format,pt.colorSpace),tt=r.convert(pt.type),mt=E(pt.internalFormat,Yt,tt,pt.colorSpace,R.isXRRenderTarget===!0),Tt=Vt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,mt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,k.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),st(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),vt(n.TEXTURE_CUBE_MAP,M);for(let ct=0;ct<6;ct++)if(M.mipmaps&&M.mipmaps.length>0)for(let pt=0;pt<M.mipmaps.length;pt++)ot(k.__webglFramebuffer[ct][pt],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,pt);else ot(k.__webglFramebuffer[ct],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(M)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let ct=0,pt=Z.length;ct<pt;ct++){const Yt=Z[ct],tt=i.get(Yt);e.bindTexture(n.TEXTURE_2D,tt.__webglTexture),vt(n.TEXTURE_2D,Yt),ot(k.__webglFramebuffer,R,Yt,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,0),m(Yt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ct=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,$.__webglTexture),vt(ct,M),M.mipmaps&&M.mipmaps.length>0)for(let pt=0;pt<M.mipmaps.length;pt++)ot(k.__webglFramebuffer[pt],R,M,n.COLOR_ATTACHMENT0,ct,pt);else ot(k.__webglFramebuffer,R,M,n.COLOR_ATTACHMENT0,ct,0);m(M)&&p(ct),e.unbindTexture()}R.depthBuffer&&At(R)}function Xt(R){const M=R.textures;for(let k=0,$=M.length;k<$;k++){const Z=M[k];if(m(Z)){const q=b(R),xt=i.get(Z).__webglTexture;e.bindTexture(q,xt),p(q),e.unbindTexture()}}}const ge=[],D=[];function Qe(R){if(R.samples>0){if(Gt(R)===!1){const M=R.textures,k=R.width,$=R.height;let Z=n.COLOR_BUFFER_BIT;const q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=i.get(R),ct=M.length>1;if(ct)for(let pt=0;pt<M.length;pt++)e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let pt=0;pt<M.length;pt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xt.__webglColorRenderbuffer[pt]);const Yt=i.get(M[pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Yt,0)}n.blitFramebuffer(0,0,k,$,0,0,k,$,Z,n.NEAREST),l===!0&&(ge.length=0,D.length=0,ge.push(n.COLOR_ATTACHMENT0+pt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ge.push(q),D.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ge))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let pt=0;pt<M.length;pt++){e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,xt.__webglColorRenderbuffer[pt]);const Yt=i.get(M[pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,Yt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Vt(R){return Math.min(s.maxSamples,R.samples)}function Gt(R){const M=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function bt(R){const M=o.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function ae(R,M){const k=R.colorSpace,$=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Es&&k!==Jn&&($t.getTransfer(k)===ne?($!==fn||Z!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function Mt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=F,this.setTexture2D=G,this.setTexture2DArray=H,this.setTexture3D=j,this.setTextureCube=W,this.rebindTextures=Nt,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=Gt}function oE(n,t){function e(i,s=Jn){let r;const o=$t.getTransfer(s);if(i===Gn)return n.UNSIGNED_BYTE;if(i===cc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===hc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===of)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===sf)return n.BYTE;if(i===rf)return n.SHORT;if(i===ar)return n.UNSIGNED_SHORT;if(i===lc)return n.INT;if(i===ki)return n.UNSIGNED_INT;if(i===zn)return n.FLOAT;if(i===hr)return n.HALF_FLOAT;if(i===af)return n.ALPHA;if(i===lf)return n.RGB;if(i===fn)return n.RGBA;if(i===cf)return n.LUMINANCE;if(i===hf)return n.LUMINANCE_ALPHA;if(i===fs)return n.DEPTH_COMPONENT;if(i===Ss)return n.DEPTH_STENCIL;if(i===uf)return n.RED;if(i===uc)return n.RED_INTEGER;if(i===df)return n.RG;if(i===dc)return n.RG_INTEGER;if(i===fc)return n.RGBA_INTEGER;if(i===uo||i===fo||i===po||i===mo)if(o===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_l||i===xl||i===vl||i===Ml)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===_l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ml)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bl||i===yl||i===Sl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===bl||i===yl)return o===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Sl)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===El||i===Tl||i===Al||i===wl||i===Rl||i===Cl||i===Pl||i===Dl||i===Ll||i===Il||i===Ol||i===Ul||i===Fl||i===Nl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===El)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Tl)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Al)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wl)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Rl)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Cl)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Pl)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dl)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ll)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Il)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ol)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ul)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fl)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nl)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===go||i===kl||i===Bl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===go)return o===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===kl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ff||i===zl||i===Hl||i===Vl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===go)return r.COMPRESSED_RED_RGTC1_EXT;if(i===zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ys?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const aE={type:"move"};class Na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(aE)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ke;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const lE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class hE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Xe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new hi({vertexShader:lE,fragmentShader:cE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ke(new Ho(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uE extends Vi{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new hE,m=e.getContextAttributes();let p=null,b=null;const E=[],x=[],T=new Pt;let w=null;const A=new Je;A.viewport=new se;const C=new Je;C.viewport=new se;const y=[A,C],v=new Pv;let P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let J=E[V];return J===void 0&&(J=new Na,E[V]=J),J.getTargetRaySpace()},this.getControllerGrip=function(V){let J=E[V];return J===void 0&&(J=new Na,E[V]=J),J.getGripSpace()},this.getHand=function(V){let J=E[V];return J===void 0&&(J=new Na,E[V]=J),J.getHandSpace()};function N(V){const J=x.indexOf(V.inputSource);if(J===-1)return;const ot=E[J];ot!==void 0&&(ot.update(V.inputSource,V.frame,c||o),ot.dispatchEvent({type:V.type,data:V.inputSource}))}function X(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",G);for(let V=0;V<E.length;V++){const J=x[V];J!==null&&(x[V]=null,E[V].disconnect(J))}P=null,F=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,b=null,Lt.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",X),s.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(T),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let ot=null,st=null,St=null;m.depth&&(St=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=m.stencil?Ss:fs,st=m.stencil?ys:ki);const At={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(At),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Bi(d.textureWidth,d.textureHeight,{format:fn,type:Gn,depthTexture:new wf(d.textureWidth,d.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const ot={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Bi(f.framebufferWidth,f.framebufferHeight,{format:fn,type:Gn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Lt.setContext(s),Lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(V){for(let J=0;J<V.removed.length;J++){const ot=V.removed[J],st=x.indexOf(ot);st>=0&&(x[st]=null,E[st].disconnect(ot))}for(let J=0;J<V.added.length;J++){const ot=V.added[J];let st=x.indexOf(ot);if(st===-1){for(let At=0;At<E.length;At++)if(At>=x.length){x.push(ot),st=At;break}else if(x[At]===null){x[At]=ot,st=At;break}if(st===-1)break}const St=E[st];St&&St.connect(ot)}}const H=new L,j=new L;function W(V,J,ot){H.setFromMatrixPosition(J.matrixWorld),j.setFromMatrixPosition(ot.matrixWorld);const st=H.distanceTo(j),St=J.projectionMatrix.elements,At=ot.projectionMatrix.elements,Nt=St[14]/(St[10]-1),de=St[14]/(St[10]+1),Xt=(St[9]+1)/St[5],ge=(St[9]-1)/St[5],D=(St[8]-1)/St[0],Qe=(At[8]+1)/At[0],Vt=Nt*D,Gt=Nt*Qe,bt=st/(-D+Qe),ae=bt*-D;if(J.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ae),V.translateZ(bt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),St[10]===-1)V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Mt=Nt+bt,R=de+bt,M=Vt-ae,k=Gt+(st-ae),$=Xt*de/R*Mt,Z=ge*de/R*Mt;V.projectionMatrix.makePerspective(M,k,$,Z,Mt,R),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function nt(V,J){J===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(J.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let J=V.near,ot=V.far;_.texture!==null&&(_.depthNear>0&&(J=_.depthNear),_.depthFar>0&&(ot=_.depthFar)),v.near=C.near=A.near=J,v.far=C.far=A.far=ot,(P!==v.near||F!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),P=v.near,F=v.far),A.layers.mask=V.layers.mask|2,C.layers.mask=V.layers.mask|4,v.layers.mask=A.layers.mask|C.layers.mask;const st=V.parent,St=v.cameras;nt(v,st);for(let At=0;At<St.length;At++)nt(St[At],st);St.length===2?W(v,A,C):v.projectionMatrix.copy(A.projectionMatrix),it(V,v,st)};function it(V,J,ot){ot===null?V.matrix.copy(J.matrixWorld):(V.matrix.copy(ot.matrixWorld),V.matrix.invert(),V.matrix.multiply(J.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Gl*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let dt=null;function vt(V,J){if(h=J.getViewerPose(c||o),g=J,h!==null){const ot=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let st=!1;ot.length!==v.cameras.length&&(v.cameras.length=0,st=!0);for(let At=0;At<ot.length;At++){const Nt=ot[At];let de=null;if(f!==null)de=f.getViewport(Nt);else{const ge=u.getViewSubImage(d,Nt);de=ge.viewport,At===0&&(t.setRenderTargetTextures(b,ge.colorTexture,d.ignoreDepthValues?void 0:ge.depthStencilTexture),t.setRenderTarget(b))}let Xt=y[At];Xt===void 0&&(Xt=new Je,Xt.layers.enable(At),Xt.viewport=new se,y[At]=Xt),Xt.matrix.fromArray(Nt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Nt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(de.x,de.y,de.width,de.height),At===0&&(v.matrix.copy(Xt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),st===!0&&v.cameras.push(Xt)}const St=s.enabledFeatures;if(St&&St.includes("depth-sensing")){const At=u.getDepthInformation(ot[0]);At&&At.isValid&&At.texture&&_.init(t,At,s.renderState)}}for(let ot=0;ot<E.length;ot++){const st=x[ot],St=E[ot];st!==null&&St!==void 0&&St.update(st,J,c||o)}dt&&dt(V,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const Lt=new Cf;Lt.setAnimationLoop(vt),this.setAnimationLoop=function(V){dt=V},this.dispose=function(){}}}const Si=new En,dE=new ue;function fE(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Sf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,E,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===We&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===We&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),E=b.envMap,x=b.envMapRotation;E&&(m.envMap.value=E,Si.copy(x),Si.x*=-1,Si.y*=-1,Si.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),m.envMapRotation.value.setFromMatrix4(dE.makeRotationFromEuler(Si)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===We&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function pE(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,E){const x=E.program;i.uniformBlockBinding(b,x)}function c(b,E){let x=s[b.id];x===void 0&&(g(b),x=h(b),s[b.id]=x,b.addEventListener("dispose",m));const T=E.program;i.updateUBOMapping(b,T);const w=t.render.frame;r[b.id]!==w&&(d(b),r[b.id]=w)}function h(b){const E=u();b.__bindingPointIndex=E;const x=n.createBuffer(),T=b.__size,w=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,T,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,x),x}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const E=s[b.id],x=b.uniforms,T=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let w=0,A=x.length;w<A;w++){const C=Array.isArray(x[w])?x[w]:[x[w]];for(let y=0,v=C.length;y<v;y++){const P=C[y];if(f(P,w,y,T)===!0){const F=P.__offset,N=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let G=0;G<N.length;G++){const H=N[G],j=_(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,F+X,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,X),X+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,E,x,T){const w=b.value,A=E+"_"+x;if(T[A]===void 0)return typeof w=="number"||typeof w=="boolean"?T[A]=w:T[A]=w.clone(),!0;{const C=T[A];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return T[A]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(b){const E=b.uniforms;let x=0;const T=16;for(let A=0,C=E.length;A<C;A++){const y=Array.isArray(E[A])?E[A]:[E[A]];for(let v=0,P=y.length;v<P;v++){const F=y[v],N=Array.isArray(F.value)?F.value:[F.value];for(let X=0,G=N.length;X<G;X++){const H=N[X],j=_(H),W=x%T,nt=W%j.boundary,it=W+nt;x+=nt,it!==0&&T-it<j.storage&&(x+=T-it),F.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=j.storage}}}const w=x%T;return w>0&&(x+=T-w),b.__size=x,b.__cache={},this}function _(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function m(b){const E=b.target;E.removeEventListener("dispose",m);const x=o.indexOf(E.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class mE{constructor(t={}){const{canvas:e=Y0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const b=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ze,this.toneMapping=oi,this.toneMappingExposure=1;const x=this;let T=!1,w=0,A=0,C=null,y=-1,v=null;const P=new se,F=new se;let N=null;const X=new Bt(0);let G=0,H=e.width,j=e.height,W=1,nt=null,it=null;const dt=new se(0,0,H,j),vt=new se(0,0,H,j);let Lt=!1;const V=new mc;let J=!1,ot=!1;this.transmissionResolutionScale=1;const st=new ue,St=new ue,At=new L,Nt=new se,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function ge(){return C===null?W:1}let D=i;function Qe(S,O){return e.getContext(S,O)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ac}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",ht,!1),D===null){const O="webgl2";if(D=Qe(O,S),D===null)throw Qe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Vt,Gt,bt,ae,Mt,R,M,k,$,Z,q,xt,ct,pt,Yt,tt,mt,Tt,wt,gt,Wt,Ut,re,I;function at(){Vt=new Ey(D),Vt.init(),Ut=new oE(D,Vt),Gt=new xy(D,Vt,t,Ut),bt=new sE(D,Vt),Gt.reverseDepthBuffer&&d&&bt.buffers.depth.setReversed(!0),ae=new wy(D),Mt=new XS,R=new rE(D,Vt,bt,Mt,Gt,Ut,ae),M=new My(x),k=new Sy(x),$=new Ov(D),re=new gy(D,$),Z=new Ty(D,$,ae,re),q=new Cy(D,Z,$,ae),wt=new Ry(D,Gt,R),tt=new vy(Mt),xt=new WS(x,M,k,Vt,Gt,re,tt),ct=new fE(x,Mt),pt=new jS,Yt=new QS(Vt),Tt=new my(x,M,k,bt,q,f,l),mt=new nE(x,q,Gt),I=new pE(D,ae,Gt,bt),gt=new _y(D,Vt,ae),Wt=new Ay(D,Vt,ae),ae.programs=xt.programs,x.capabilities=Gt,x.extensions=Vt,x.properties=Mt,x.renderLists=pt,x.shadowMap=mt,x.state=bt,x.info=ae}at();const Y=new uE(x,D);this.xr=Y,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=Vt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Vt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(S){S!==void 0&&(W=S,this.setSize(H,j,!1))},this.getSize=function(S){return S.set(H,j)},this.setSize=function(S,O,B=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=S,j=O,e.width=Math.floor(S*W),e.height=Math.floor(O*W),B===!0&&(e.style.width=S+"px",e.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(H*W,j*W).floor()},this.setDrawingBufferSize=function(S,O,B){H=S,j=O,W=B,e.width=Math.floor(S*B),e.height=Math.floor(O*B),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(dt)},this.setViewport=function(S,O,B,z){S.isVector4?dt.set(S.x,S.y,S.z,S.w):dt.set(S,O,B,z),bt.viewport(P.copy(dt).multiplyScalar(W).round())},this.getScissor=function(S){return S.copy(vt)},this.setScissor=function(S,O,B,z){S.isVector4?vt.set(S.x,S.y,S.z,S.w):vt.set(S,O,B,z),bt.scissor(F.copy(vt).multiplyScalar(W).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(S){bt.setScissorTest(Lt=S)},this.setOpaqueSort=function(S){nt=S},this.setTransparentSort=function(S){it=S},this.getClearColor=function(S){return S.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(S=!0,O=!0,B=!0){let z=0;if(S){let U=!1;if(C!==null){const Q=C.texture.format;U=Q===fc||Q===dc||Q===uc}if(U){const Q=C.texture.type,lt=Q===Gn||Q===ki||Q===ar||Q===ys||Q===cc||Q===hc,ft=Tt.getClearColor(),_t=Tt.getClearAlpha(),Rt=ft.r,Ct=ft.g,yt=ft.b;lt?(g[0]=Rt,g[1]=Ct,g[2]=yt,g[3]=_t,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Rt,_[1]=Ct,_[2]=yt,_[3]=_t,D.clearBufferiv(D.COLOR,0,_))}else z|=D.COLOR_BUFFER_BIT}O&&(z|=D.DEPTH_BUFFER_BIT),B&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),Tt.dispose(),pt.dispose(),Yt.dispose(),Mt.dispose(),M.dispose(),k.dispose(),q.dispose(),re.dispose(),I.dispose(),xt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Mc),Y.removeEventListener("sessionend",bc),di.stop()};function K(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const S=ae.autoReset,O=mt.enabled,B=mt.autoUpdate,z=mt.needsUpdate,U=mt.type;at(),ae.autoReset=S,mt.enabled=O,mt.autoUpdate=B,mt.needsUpdate=z,mt.type=U}function ht(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function It(S){const O=S.target;O.removeEventListener("dispose",It),fe(O)}function fe(S){Ce(S),Mt.remove(S)}function Ce(S){const O=Mt.get(S).programs;O!==void 0&&(O.forEach(function(B){xt.releaseProgram(B)}),S.isShaderMaterial&&xt.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,B,z,U,Q){O===null&&(O=de);const lt=U.isMesh&&U.matrixWorld.determinant()<0,ft=Ff(S,O,B,z,U);bt.setMaterial(z,lt);let _t=B.index,Rt=1;if(z.wireframe===!0){if(_t=Z.getWireframeAttribute(B),_t===void 0)return;Rt=2}const Ct=B.drawRange,yt=B.attributes.position;let jt=Ct.start*Rt,Zt=(Ct.start+Ct.count)*Rt;Q!==null&&(jt=Math.max(jt,Q.start*Rt),Zt=Math.min(Zt,(Q.start+Q.count)*Rt)),_t!==null?(jt=Math.max(jt,0),Zt=Math.min(Zt,_t.count)):yt!=null&&(jt=Math.max(jt,0),Zt=Math.min(Zt,yt.count));const xe=Zt-jt;if(xe<0||xe===1/0)return;re.setup(U,z,ft,B,_t);let pe,qt=gt;if(_t!==null&&(pe=$.get(_t),qt=Wt,qt.setIndex(pe)),U.isMesh)z.wireframe===!0?(bt.setLineWidth(z.wireframeLinewidth*ge()),qt.setMode(D.LINES)):qt.setMode(D.TRIANGLES);else if(U.isLine){let Et=z.linewidth;Et===void 0&&(Et=1),bt.setLineWidth(Et*ge()),U.isLineSegments?qt.setMode(D.LINES):U.isLineLoop?qt.setMode(D.LINE_LOOP):qt.setMode(D.LINE_STRIP)}else U.isPoints?qt.setMode(D.POINTS):U.isSprite&&qt.setMode(D.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)qt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))qt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Et=U._multiDrawStarts,we=U._multiDrawCounts,Jt=U._multiDrawCount,an=_t?$.get(_t).bytesPerElement:1,Gi=Mt.get(z).currentProgram.getUniforms();for(let Ye=0;Ye<Jt;Ye++)Gi.setValue(D,"_gl_DrawID",Ye),qt.render(Et[Ye]/an,we[Ye])}else if(U.isInstancedMesh)qt.renderInstances(jt,xe,U.count);else if(B.isInstancedBufferGeometry){const Et=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,we=Math.min(B.instanceCount,Et);qt.renderInstances(jt,xe,we)}else qt.render(jt,xe)};function Qt(S,O,B){S.transparent===!0&&S.side===Mn&&S.forceSinglePass===!1?(S.side=We,S.needsUpdate=!0,mr(S,O,B),S.side=ci,S.needsUpdate=!0,mr(S,O,B),S.side=Mn):mr(S,O,B)}this.compile=function(S,O,B=null){B===null&&(B=S),p=Yt.get(B),p.init(O),E.push(p),B.traverseVisible(function(U){U.isLight&&U.layers.test(O.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),S!==B&&S.traverseVisible(function(U){U.isLight&&U.layers.test(O.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const z=new Set;return S.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const Q=U.material;if(Q)if(Array.isArray(Q))for(let lt=0;lt<Q.length;lt++){const ft=Q[lt];Qt(ft,B,U),z.add(ft)}else Qt(Q,B,U),z.add(Q)}),E.pop(),p=null,z},this.compileAsync=function(S,O,B=null){const z=this.compile(S,O,B);return new Promise(U=>{function Q(){if(z.forEach(function(lt){Mt.get(lt).currentProgram.isReady()&&z.delete(lt)}),z.size===0){U(S);return}setTimeout(Q,10)}Vt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let on=null;function Tn(S){on&&on(S)}function Mc(){di.stop()}function bc(){di.start()}const di=new Cf;di.setAnimationLoop(Tn),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(S){on=S,Y.setAnimationLoop(S),S===null?di.stop():di.start()},Y.addEventListener("sessionstart",Mc),Y.addEventListener("sessionend",bc),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(O),O=Y.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,O,C),p=Yt.get(S,E.length),p.init(O),E.push(p),St.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),V.setFromProjectionMatrix(St),ot=this.localClippingEnabled,J=tt.init(this.clippingPlanes,ot),m=pt.get(S,b.length),m.init(),b.push(m),Y.enabled===!0&&Y.isPresenting===!0){const Q=x.xr.getDepthSensingMesh();Q!==null&&Go(Q,O,-1/0,x.sortObjects)}Go(S,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(nt,it),Xt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Xt&&Tt.addToRenderList(m,S),this.info.render.frame++,J===!0&&tt.beginShadows();const B=p.state.shadowsArray;mt.render(B,S,O),J===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,U=m.transmissive;if(p.setupLights(),O.isArrayCamera){const Q=O.cameras;if(U.length>0)for(let lt=0,ft=Q.length;lt<ft;lt++){const _t=Q[lt];Sc(z,U,S,_t)}Xt&&Tt.render(S);for(let lt=0,ft=Q.length;lt<ft;lt++){const _t=Q[lt];yc(m,S,_t,_t.viewport)}}else U.length>0&&Sc(z,U,S,O),Xt&&Tt.render(S),yc(m,S,O);C!==null&&A===0&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(x,S,O),re.resetDefaultState(),y=-1,v=null,E.pop(),E.length>0?(p=E[E.length-1],J===!0&&tt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Go(S,O,B,z){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||V.intersectsSprite(S)){z&&Nt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(St);const lt=q.update(S),ft=S.material;ft.visible&&m.push(S,lt,ft,B,Nt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||V.intersectsObject(S))){const lt=q.update(S),ft=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Nt.copy(S.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Nt.copy(lt.boundingSphere.center)),Nt.applyMatrix4(S.matrixWorld).applyMatrix4(St)),Array.isArray(ft)){const _t=lt.groups;for(let Rt=0,Ct=_t.length;Rt<Ct;Rt++){const yt=_t[Rt],jt=ft[yt.materialIndex];jt&&jt.visible&&m.push(S,lt,jt,B,Nt.z,yt)}}else ft.visible&&m.push(S,lt,ft,B,Nt.z,null)}}const Q=S.children;for(let lt=0,ft=Q.length;lt<ft;lt++)Go(Q[lt],O,B,z)}function yc(S,O,B,z){const U=S.opaque,Q=S.transmissive,lt=S.transparent;p.setupLightsView(B),J===!0&&tt.setGlobalState(x.clippingPlanes,B),z&&bt.viewport(P.copy(z)),U.length>0&&pr(U,O,B),Q.length>0&&pr(Q,O,B),lt.length>0&&pr(lt,O,B),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function Sc(S,O,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new Bi(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?hr:Gn,minFilter:Li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const Q=p.state.transmissionRenderTarget[z.id],lt=z.viewport||P;Q.setSize(lt.z*x.transmissionResolutionScale,lt.w*x.transmissionResolutionScale);const ft=x.getRenderTarget();x.setRenderTarget(Q),x.getClearColor(X),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear(),Xt&&Tt.render(B);const _t=x.toneMapping;x.toneMapping=oi;const Rt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),J===!0&&tt.setGlobalState(x.clippingPlanes,z),pr(S,B,z),R.updateMultisampleRenderTarget(Q),R.updateRenderTargetMipmap(Q),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let yt=0,jt=O.length;yt<jt;yt++){const Zt=O[yt],xe=Zt.object,pe=Zt.geometry,qt=Zt.material,Et=Zt.group;if(qt.side===Mn&&xe.layers.test(z.layers)){const we=qt.side;qt.side=We,qt.needsUpdate=!0,Ec(xe,B,z,pe,qt,Et),qt.side=we,qt.needsUpdate=!0,Ct=!0}}Ct===!0&&(R.updateMultisampleRenderTarget(Q),R.updateRenderTargetMipmap(Q))}x.setRenderTarget(ft),x.setClearColor(X,G),Rt!==void 0&&(z.viewport=Rt),x.toneMapping=_t}function pr(S,O,B){const z=O.isScene===!0?O.overrideMaterial:null;for(let U=0,Q=S.length;U<Q;U++){const lt=S[U],ft=lt.object,_t=lt.geometry,Rt=z===null?lt.material:z,Ct=lt.group;ft.layers.test(B.layers)&&Ec(ft,O,B,_t,Rt,Ct)}}function Ec(S,O,B,z,U,Q){S.onBeforeRender(x,O,B,z,U,Q),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),U.onBeforeRender(x,O,B,z,S,Q),U.transparent===!0&&U.side===Mn&&U.forceSinglePass===!1?(U.side=We,U.needsUpdate=!0,x.renderBufferDirect(B,O,z,U,S,Q),U.side=ci,U.needsUpdate=!0,x.renderBufferDirect(B,O,z,U,S,Q),U.side=Mn):x.renderBufferDirect(B,O,z,U,S,Q),S.onAfterRender(x,O,B,z,U,Q)}function mr(S,O,B){O.isScene!==!0&&(O=de);const z=Mt.get(S),U=p.state.lights,Q=p.state.shadowsArray,lt=U.state.version,ft=xt.getParameters(S,U.state,Q,O,B),_t=xt.getProgramCacheKey(ft);let Rt=z.programs;z.environment=S.isMeshStandardMaterial?O.environment:null,z.fog=O.fog,z.envMap=(S.isMeshStandardMaterial?k:M).get(S.envMap||z.environment),z.envMapRotation=z.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,Rt===void 0&&(S.addEventListener("dispose",It),Rt=new Map,z.programs=Rt);let Ct=Rt.get(_t);if(Ct!==void 0){if(z.currentProgram===Ct&&z.lightsStateVersion===lt)return Ac(S,ft),Ct}else ft.uniforms=xt.getUniforms(S),S.onBeforeCompile(ft,x),Ct=xt.acquireProgram(ft,_t),Rt.set(_t,Ct),z.uniforms=ft.uniforms;const yt=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(yt.clippingPlanes=tt.uniform),Ac(S,ft),z.needsLights=kf(S),z.lightsStateVersion=lt,z.needsLights&&(yt.ambientLightColor.value=U.state.ambient,yt.lightProbe.value=U.state.probe,yt.directionalLights.value=U.state.directional,yt.directionalLightShadows.value=U.state.directionalShadow,yt.spotLights.value=U.state.spot,yt.spotLightShadows.value=U.state.spotShadow,yt.rectAreaLights.value=U.state.rectArea,yt.ltc_1.value=U.state.rectAreaLTC1,yt.ltc_2.value=U.state.rectAreaLTC2,yt.pointLights.value=U.state.point,yt.pointLightShadows.value=U.state.pointShadow,yt.hemisphereLights.value=U.state.hemi,yt.directionalShadowMap.value=U.state.directionalShadowMap,yt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,yt.spotShadowMap.value=U.state.spotShadowMap,yt.spotLightMatrix.value=U.state.spotLightMatrix,yt.spotLightMap.value=U.state.spotLightMap,yt.pointShadowMap.value=U.state.pointShadowMap,yt.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Ct,z.uniformsList=null,Ct}function Tc(S){if(S.uniformsList===null){const O=S.currentProgram.getUniforms();S.uniformsList=xo.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function Ac(S,O){const B=Mt.get(S);B.outputColorSpace=O.outputColorSpace,B.batching=O.batching,B.batchingColor=O.batchingColor,B.instancing=O.instancing,B.instancingColor=O.instancingColor,B.instancingMorph=O.instancingMorph,B.skinning=O.skinning,B.morphTargets=O.morphTargets,B.morphNormals=O.morphNormals,B.morphColors=O.morphColors,B.morphTargetsCount=O.morphTargetsCount,B.numClippingPlanes=O.numClippingPlanes,B.numIntersection=O.numClipIntersection,B.vertexAlphas=O.vertexAlphas,B.vertexTangents=O.vertexTangents,B.toneMapping=O.toneMapping}function Ff(S,O,B,z,U){O.isScene!==!0&&(O=de),R.resetTextureUnits();const Q=O.fog,lt=z.isMeshStandardMaterial?O.environment:null,ft=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Es,_t=(z.isMeshStandardMaterial?k:M).get(z.envMap||lt),Rt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ct=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),yt=!!B.morphAttributes.position,jt=!!B.morphAttributes.normal,Zt=!!B.morphAttributes.color;let xe=oi;z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(xe=x.toneMapping);const pe=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,qt=pe!==void 0?pe.length:0,Et=Mt.get(z),we=p.state.lights;if(J===!0&&(ot===!0||S!==v)){const Fe=S===v&&z.id===y;tt.setState(z,S,Fe)}let Jt=!1;z.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==we.state.version||Et.outputColorSpace!==ft||U.isBatchedMesh&&Et.batching===!1||!U.isBatchedMesh&&Et.batching===!0||U.isBatchedMesh&&Et.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Et.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Et.instancing===!1||!U.isInstancedMesh&&Et.instancing===!0||U.isSkinnedMesh&&Et.skinning===!1||!U.isSkinnedMesh&&Et.skinning===!0||U.isInstancedMesh&&Et.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Et.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Et.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Et.instancingMorph===!1&&U.morphTexture!==null||Et.envMap!==_t||z.fog===!0&&Et.fog!==Q||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==tt.numPlanes||Et.numIntersection!==tt.numIntersection)||Et.vertexAlphas!==Rt||Et.vertexTangents!==Ct||Et.morphTargets!==yt||Et.morphNormals!==jt||Et.morphColors!==Zt||Et.toneMapping!==xe||Et.morphTargetsCount!==qt)&&(Jt=!0):(Jt=!0,Et.__version=z.version);let an=Et.currentProgram;Jt===!0&&(an=mr(z,O,U));let Gi=!1,Ye=!1,Rs=!1;const le=an.getUniforms(),tn=Et.uniforms;if(bt.useProgram(an.program)&&(Gi=!0,Ye=!0,Rs=!0),z.id!==y&&(y=z.id,Ye=!0),Gi||v!==S){bt.buffers.depth.getReversed()?(st.copy(S.projectionMatrix),q0(st),$0(st),le.setValue(D,"projectionMatrix",st)):le.setValue(D,"projectionMatrix",S.projectionMatrix),le.setValue(D,"viewMatrix",S.matrixWorldInverse);const Be=le.map.cameraPosition;Be!==void 0&&Be.setValue(D,At.setFromMatrixPosition(S.matrixWorld)),Gt.logarithmicDepthBuffer&&le.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&le.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),v!==S&&(v=S,Ye=!0,Rs=!0)}if(U.isSkinnedMesh){le.setOptional(D,U,"bindMatrix"),le.setOptional(D,U,"bindMatrixInverse");const Fe=U.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),le.setValue(D,"boneTexture",Fe.boneTexture,R))}U.isBatchedMesh&&(le.setOptional(D,U,"batchingTexture"),le.setValue(D,"batchingTexture",U._matricesTexture,R),le.setOptional(D,U,"batchingIdTexture"),le.setValue(D,"batchingIdTexture",U._indirectTexture,R),le.setOptional(D,U,"batchingColorTexture"),U._colorsTexture!==null&&le.setValue(D,"batchingColorTexture",U._colorsTexture,R));const en=B.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&wt.update(U,B,an),(Ye||Et.receiveShadow!==U.receiveShadow)&&(Et.receiveShadow=U.receiveShadow,le.setValue(D,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(tn.envMap.value=_t,tn.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&O.environment!==null&&(tn.envMapIntensity.value=O.environmentIntensity),Ye&&(le.setValue(D,"toneMappingExposure",x.toneMappingExposure),Et.needsLights&&Nf(tn,Rs),Q&&z.fog===!0&&ct.refreshFogUniforms(tn,Q),ct.refreshMaterialUniforms(tn,z,W,j,p.state.transmissionRenderTarget[S.id]),xo.upload(D,Tc(Et),tn,R)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(xo.upload(D,Tc(Et),tn,R),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&le.setValue(D,"center",U.center),le.setValue(D,"modelViewMatrix",U.modelViewMatrix),le.setValue(D,"normalMatrix",U.normalMatrix),le.setValue(D,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Fe=z.uniformsGroups;for(let Be=0,Wo=Fe.length;Be<Wo;Be++){const fi=Fe[Be];I.update(fi,an),I.bind(fi,an)}}return an}function Nf(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function kf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,O,B){Mt.get(S.texture).__webglTexture=O,Mt.get(S.depthTexture).__webglTexture=B;const z=Mt.get(S);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,O){const B=Mt.get(S);B.__webglFramebuffer=O,B.__useDefaultFramebuffer=O===void 0};const Bf=D.createFramebuffer();this.setRenderTarget=function(S,O=0,B=0){C=S,w=O,A=B;let z=!0,U=null,Q=!1,lt=!1;if(S){const _t=Mt.get(S);if(_t.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(D.FRAMEBUFFER,null),z=!1;else if(_t.__webglFramebuffer===void 0)R.setupRenderTarget(S);else if(_t.__hasExternalTextures)R.rebindTextures(S,Mt.get(S.texture).__webglTexture,Mt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const yt=S.depthTexture;if(_t.__boundDepthTexture!==yt){if(yt!==null&&Mt.has(yt)&&(S.width!==yt.image.width||S.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(S)}}const Rt=S.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(lt=!0);const Ct=Mt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ct[O])?U=Ct[O][B]:U=Ct[O],Q=!0):S.samples>0&&R.useMultisampledRTT(S)===!1?U=Mt.get(S).__webglMultisampledFramebuffer:Array.isArray(Ct)?U=Ct[B]:U=Ct,P.copy(S.viewport),F.copy(S.scissor),N=S.scissorTest}else P.copy(dt).multiplyScalar(W).floor(),F.copy(vt).multiplyScalar(W).floor(),N=Lt;if(B!==0&&(U=Bf),bt.bindFramebuffer(D.FRAMEBUFFER,U)&&z&&bt.drawBuffers(S,U),bt.viewport(P),bt.scissor(F),bt.setScissorTest(N),Q){const _t=Mt.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,_t.__webglTexture,B)}else if(lt){const _t=Mt.get(S.texture),Rt=O;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,_t.__webglTexture,B,Rt)}else if(S!==null&&B!==0){const _t=Mt.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_t.__webglTexture,B)}y=-1},this.readRenderTargetPixels=function(S,O,B,z,U,Q,lt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=Mt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&lt!==void 0&&(ft=ft[lt]),ft){bt.bindFramebuffer(D.FRAMEBUFFER,ft);try{const _t=S.texture,Rt=_t.format,Ct=_t.type;if(!Gt.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-z&&B>=0&&B<=S.height-U&&D.readPixels(O,B,z,U,Ut.convert(Rt),Ut.convert(Ct),Q)}finally{const _t=C!==null?Mt.get(C).__webglFramebuffer:null;bt.bindFramebuffer(D.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(S,O,B,z,U,Q,lt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=Mt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&lt!==void 0&&(ft=ft[lt]),ft){const _t=S.texture,Rt=_t.format,Ct=_t.type;if(!Gt.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=S.width-z&&B>=0&&B<=S.height-U){bt.bindFramebuffer(D.FRAMEBUFFER,ft);const yt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,yt),D.bufferData(D.PIXEL_PACK_BUFFER,Q.byteLength,D.STREAM_READ),D.readPixels(O,B,z,U,Ut.convert(Rt),Ut.convert(Ct),0);const jt=C!==null?Mt.get(C).__webglFramebuffer:null;bt.bindFramebuffer(D.FRAMEBUFFER,jt);const Zt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await j0(D,Zt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,yt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Q),D.deleteBuffer(yt),D.deleteSync(Zt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,O=null,B=0){S.isTexture!==!0&&(as("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,S=arguments[1]);const z=Math.pow(2,-B),U=Math.floor(S.image.width*z),Q=Math.floor(S.image.height*z),lt=O!==null?O.x:0,ft=O!==null?O.y:0;R.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,B,0,0,lt,ft,U,Q),bt.unbindTexture()};const zf=D.createFramebuffer(),Hf=D.createFramebuffer();this.copyTextureToTexture=function(S,O,B=null,z=null,U=0,Q=null){S.isTexture!==!0&&(as("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,S=arguments[1],O=arguments[2],Q=arguments[3]||0,B=null),Q===null&&(U!==0?(as("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=U,U=0):Q=0);let lt,ft,_t,Rt,Ct,yt,jt,Zt,xe;const pe=S.isCompressedTexture?S.mipmaps[Q]:S.image;if(B!==null)lt=B.max.x-B.min.x,ft=B.max.y-B.min.y,_t=B.isBox3?B.max.z-B.min.z:1,Rt=B.min.x,Ct=B.min.y,yt=B.isBox3?B.min.z:0;else{const en=Math.pow(2,-U);lt=Math.floor(pe.width*en),ft=Math.floor(pe.height*en),S.isDataArrayTexture?_t=pe.depth:S.isData3DTexture?_t=Math.floor(pe.depth*en):_t=1,Rt=0,Ct=0,yt=0}z!==null?(jt=z.x,Zt=z.y,xe=z.z):(jt=0,Zt=0,xe=0);const qt=Ut.convert(O.format),Et=Ut.convert(O.type);let we;O.isData3DTexture?(R.setTexture3D(O,0),we=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(R.setTexture2DArray(O,0),we=D.TEXTURE_2D_ARRAY):(R.setTexture2D(O,0),we=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const Jt=D.getParameter(D.UNPACK_ROW_LENGTH),an=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Gi=D.getParameter(D.UNPACK_SKIP_PIXELS),Ye=D.getParameter(D.UNPACK_SKIP_ROWS),Rs=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,pe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Rt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ct),D.pixelStorei(D.UNPACK_SKIP_IMAGES,yt);const le=S.isDataArrayTexture||S.isData3DTexture,tn=O.isDataArrayTexture||O.isData3DTexture;if(S.isDepthTexture){const en=Mt.get(S),Fe=Mt.get(O),Be=Mt.get(en.__renderTarget),Wo=Mt.get(Fe.__renderTarget);bt.bindFramebuffer(D.READ_FRAMEBUFFER,Be.__webglFramebuffer),bt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Wo.__webglFramebuffer);for(let fi=0;fi<_t;fi++)le&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mt.get(S).__webglTexture,U,yt+fi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mt.get(O).__webglTexture,Q,xe+fi)),D.blitFramebuffer(Rt,Ct,lt,ft,jt,Zt,lt,ft,D.DEPTH_BUFFER_BIT,D.NEAREST);bt.bindFramebuffer(D.READ_FRAMEBUFFER,null),bt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(U!==0||S.isRenderTargetTexture||Mt.has(S)){const en=Mt.get(S),Fe=Mt.get(O);bt.bindFramebuffer(D.READ_FRAMEBUFFER,zf),bt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Hf);for(let Be=0;Be<_t;Be++)le?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,en.__webglTexture,U,yt+Be):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,en.__webglTexture,U),tn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Fe.__webglTexture,Q,xe+Be):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Fe.__webglTexture,Q),U!==0?D.blitFramebuffer(Rt,Ct,lt,ft,jt,Zt,lt,ft,D.COLOR_BUFFER_BIT,D.NEAREST):tn?D.copyTexSubImage3D(we,Q,jt,Zt,xe+Be,Rt,Ct,lt,ft):D.copyTexSubImage2D(we,Q,jt,Zt,Rt,Ct,lt,ft);bt.bindFramebuffer(D.READ_FRAMEBUFFER,null),bt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else tn?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(we,Q,jt,Zt,xe,lt,ft,_t,qt,Et,pe.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(we,Q,jt,Zt,xe,lt,ft,_t,qt,pe.data):D.texSubImage3D(we,Q,jt,Zt,xe,lt,ft,_t,qt,Et,pe):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Q,jt,Zt,lt,ft,qt,Et,pe.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Q,jt,Zt,pe.width,pe.height,qt,pe.data):D.texSubImage2D(D.TEXTURE_2D,Q,jt,Zt,lt,ft,qt,Et,pe);D.pixelStorei(D.UNPACK_ROW_LENGTH,Jt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,an),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Gi),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ye),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Rs),Q===0&&O.generateMipmaps&&D.generateMipmap(we),bt.unbindTexture()},this.copyTextureToTexture3D=function(S,O,B=null,z=null,U=0){return S.isTexture!==!0&&(as("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,S=arguments[2],O=arguments[3],U=arguments[4]||0),as('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,O,B,z,U)},this.initRenderTarget=function(S){Mt.get(S).__webglFramebuffer===void 0&&R.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?R.setTextureCube(S,0):S.isData3DTexture?R.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?R.setTexture2DArray(S,0):R.setTexture2D(S,0),bt.unbindTexture()},this.resetState=function(){w=0,A=0,C=null,bt.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}const Ju={type:"change"},vc={type:"start"},Of={type:"end"},Qr=new pc,Qu=new Zn,gE=Math.cos(70*X0.DEG2RAD),Me=new L,Ve=2*Math.PI,ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ka=1e-6;class _E extends Lv{constructor(t,e=null){super(t,e),this.state=ie.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:us.ROTATE,MIDDLE:us.DOLLY,RIGHT:us.PAN},this.touches={ONE:ls.ROTATE,TWO:ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new zi,this._lastTargetPosition=new L,this._quat=new zi().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Tu,this._sphericalDelta=new Tu,this._scale=1,this._panOffset=new L,this._rotateStart=new Pt,this._rotateEnd=new Pt,this._rotateDelta=new Pt,this._panStart=new Pt,this._panEnd=new Pt,this._panDelta=new Pt,this._dollyStart=new Pt,this._dollyEnd=new Pt,this._dollyDelta=new Pt,this._dollyDirection=new L,this._mouse=new Pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=vE.bind(this),this._onPointerDown=xE.bind(this),this._onPointerUp=ME.bind(this),this._onContextMenu=wE.bind(this),this._onMouseWheel=SE.bind(this),this._onKeyDown=EE.bind(this),this._onTouchStart=TE.bind(this),this._onTouchMove=AE.bind(this),this._onMouseDown=bE.bind(this),this._onMouseMove=yE.bind(this),this._interceptControlDown=RE.bind(this),this._interceptControlUp=CE.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ju),this.update(),this.state=ie.NONE}update(t=null){const e=this.object.position;Me.copy(e).sub(this.target),Me.applyQuaternion(this._quat),this._spherical.setFromVector3(Me),this.autoRotate&&this.state===ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Ve:i>Math.PI&&(i-=Ve),s<-Math.PI?s+=Ve:s>Math.PI&&(s-=Ve),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Me.setFromSpherical(this._spherical),Me.applyQuaternion(this._quatInverse),e.copy(this.target).add(Me),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Me.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Me.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Qr.origin.copy(this.object.position),Qr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qr.direction))<gE?this.object.lookAt(this.target):(Qu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qr.intersectPlane(Qu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ka||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ka||this._lastTargetPosition.distanceToSquared(this.target)>ka?(this.dispatchEvent(Ju),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ve/60*this.autoRotateSpeed*t:Ve/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Me.setFromMatrixColumn(e,0),Me.multiplyScalar(-t),this._panOffset.add(Me)}_panUp(t,e){this.screenSpacePanning===!0?Me.setFromMatrixColumn(e,1):(Me.setFromMatrixColumn(e,0),Me.crossVectors(this.object.up,Me)),Me.multiplyScalar(t),this._panOffset.add(Me)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Me.copy(s).sub(this.target);let r=Me.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ve*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ve*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ve*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ve*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Pt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function xE(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function vE(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function ME(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Of),this.state=ie.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function bE(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case us.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ie.DOLLY;break;case us.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ie.ROTATE}break;case us.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ie.PAN}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(vc)}function yE(n){switch(this.state){case ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function SE(n){this.enabled===!1||this.enableZoom===!1||this.state!==ie.NONE||(n.preventDefault(),this.dispatchEvent(vc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Of))}function EE(n){this.enabled!==!1&&this._handleKeyDown(n)}function TE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ls.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ie.TOUCH_ROTATE;break;case ls.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ie.TOUCH_PAN;break;default:this.state=ie.NONE}break;case 2:switch(this.touches.TWO){case ls.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ie.TOUCH_DOLLY_PAN;break;case ls.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ie.TOUCH_DOLLY_ROTATE;break;default:this.state=ie.NONE}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(vc)}function AE(n){switch(this._trackPointer(n),this.state){case ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ie.NONE}}function wE(n){this.enabled!==!1&&n.preventDefault()}function RE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function CE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const os=3725567,td=16765802;function ed(n){n.traverse(t=>{var e,i;(e=t.geometry)==null||e.dispose(),Array.isArray(t.material)?t.material.forEach(s=>s.dispose()):(i=t.material)==null||i.dispose()})}class PE{constructor(t,e){this.container=t,this.clock=new Dv,this.running=!0,this.speed=1,this.time=0,this.settings={electric:!0,magnetic:!1,components:!0,direction:!0},this.scene=new xv,this.scene.background=new Bt(463135),this.camera=new Je(38,1,.1,100),this.camera.position.set(9,7,11);try{this.renderer=new mE({antialias:!0,alpha:!0})}catch{e==null||e();return}this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.outputColorSpace=Ze,t.appendChild(this.renderer.domElement),this.controls=new _E(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.target.set(0,0,0),this.scene.add(new Av(11069695,397598,2));const i=new Su(os,20,35);i.position.set(0,5,5),this.scene.add(i),this.source=this.makeSource(),this.scene.add(this.source),this.beams=this.makeBeams(),this.scene.add(this.beams),this.vectorGroup=new Ke,this.scene.add(this.vectorGroup),this.magneticGroup=new Ke,this.scene.add(this.magneticGroup),this.componentGroup=new Ke,this.scene.add(this.componentGroup),this.directionGroup=this.makeDirections(),this.scene.add(this.directionGroup),this.polarizerGroup=new Ke,this.scene.add(this.polarizerGroup),this.resize=this.resize.bind(this),window.addEventListener("resize",this.resize),this.resize(),this.animate()}makeSource(){const t=new Ke,e=new ke(new gc(.46,24,24),new Ii({color:os,transparent:!0,opacity:.9})),i=new Su(os,5,5);return t.add(e,i),t.position.x=-6.3,t}makeBeams(){const t=new Ke;return[-3.2,0,3.2].forEach((e,i)=>{const s=new Ii({color:os,transparent:!0,opacity:i===2?.55:.25,blending:il,depthWrite:!1}),r=new ke(new ms(.12,.12,3,12,1,!0),s);r.rotation.z=Math.PI/2,r.position.x=e,t.add(r)}),t}makeDirections(){const t=new Ke;return[-4.9,-3.8,-2.7,-.5,.8,2,4.2].forEach(e=>{const i=new Hs(new L(1,0,0),new L(e,-1.9,0),.55,5803179,.18,.1);t.add(i)}),t}updatePolarizers(t){ed(this.polarizerGroup),this.scene.remove(this.polarizerGroup),this.polarizerGroup=new Ke;const e=t.length===1?[0]:t.map((i,s)=>-1+s*6/(t.length-1));t.forEach((i,s)=>{const r=new Ke,o=new ke(new ms(1.15,1.15,.1,48),new Sv({color:3963296,transparent:!0,opacity:.32,roughness:.2,metalness:.1,side:Mn}));o.rotation.z=Math.PI/2;const a=new ke(new ms(.036,.036,1.65,10),new Ii({color:td}));a.rotation.z=wi(i);const l=new ke(new _c(1.16,.045,10,48),new Ii({color:os,transparent:!0,opacity:.8}));l.rotation.y=Math.PI/2,r.add(o,a,l),r.position.x=e[s],this.polarizerGroup.add(r)}),this.scene.add(this.polarizerGroup)}updateExperiment({angles:t,initialIntensity:e,stages:i}){this.renderer&&(this.angles=t,this.initialIntensity=e,this.stages=i,this.updatePolarizers(t))}updateVectors(){const t=s=>{for(;s.children.length;){const r=s.children.pop();ed(r)}};if(t(this.vectorGroup),t(this.magneticGroup),t(this.componentGroup),!this.stages)return;[-5.3,-4.65,-4,-3.35,-2.7,-2.05].forEach((s,r)=>{const o=r*1.91+this.time*.8,a=new L(0,Math.cos(o),Math.sin(o)).normalize(),l=.6+.4*Math.abs(Math.sin(this.time*2+r)),c=new Hs(a,new L(s,0,0),l,os,.18,.1);this.vectorGroup.add(c);const h=new L(0,-a.z,a.y);this.magneticGroup.add(new Hs(h,new L(s,0,0),l,16740528,.18,.1))});const i=this.angles.length===1?[1.4]:this.angles.map((s,r)=>.6+r*5.5/Math.max(1,this.angles.length-1));this.stages.forEach((s,r)=>{const o=new L(0,Math.cos(wi(s.angle)),Math.sin(wi(s.angle))),a=.15+e0(this.initialIntensity,s.intensity)*.95;for(let l=0;l<5;l+=1){const c=i[r]+l*.42,h=a*Math.sin(this.time*3-l*1.2)*o.y,u=a*Math.sin(this.time*3-l*1.2)*o.z;this.vectorGroup.add(new Hs(o.clone().multiplyScalar(Math.sign(Math.sin(this.time*3-l*1.2))||1),new L(c,0,0),Math.abs(h||u)+.08,td,.13,.07))}if(r>0&&this.settings.components){const l=this.stages[r-1].angle,c=new L(0,Math.cos(wi(l)),Math.sin(wi(l))),h=c.clone().sub(o.clone().multiplyScalar(c.dot(o)));h.length()>.05&&this.componentGroup.add(new Hs(h.normalize(),new L(i[r]-.25,0,0),.7,16739210,.18,.1))}}),this.vectorGroup.visible=this.settings.electric,this.componentGroup.visible=this.settings.components,this.magneticGroup.visible=this.settings.magnetic,this.directionGroup.visible=this.settings.direction}setSettings(t){Object.assign(this.settings,t)}setPaused(t){this.running=!t}resize(){if(!this.renderer)return;const{clientWidth:t,clientHeight:e}=this.container;this.camera.aspect=t/Math.max(e,1),this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e,!1)}animate(){var e,i;requestAnimationFrame(()=>this.animate());const t=this.clock.getDelta();this.running&&(this.time+=t*this.speed),this.updateVectors(),(e=this.controls)==null||e.update(),(i=this.renderer)==null||i.render(this.scene,this.camera)}dispose(){var t,e;window.removeEventListener("resize",this.resize),(t=this.controls)==null||t.dispose(),(e=this.renderer)==null||e.dispose()}}function DE(n,t){const e=r=>document.getElementById(r),i=()=>t({...n,angles:[...n.angles],settings:{...n.settings}}),s=()=>{const r=e("polarizer-list");r.innerHTML="",n.angles.forEach((o,a)=>{const l=document.createElement("div");l.className="polarizer-row",l.innerHTML=`<div><span class="element-index">P${a+1}</span><strong>${a===0?"Reference polarizer":a===1?"Analyzer":"Polarizer"}</strong></div><label><input aria-label="Polarizer ${a+1} angle" type="range" min="0" max="180" value="${o}" ${a===0?"disabled":""}/><output>${o}°</output></label>`;const c=l.querySelector("input");c.addEventListener("input",()=>{n.angles[a]=nl(c.value),l.querySelector("output").textContent=`${n.angles[a]}°`,i()}),r.appendChild(l)})};return e("input-intensity").addEventListener("input",r=>{n.initialIntensity=Number(r.target.value),e("input-intensity-value").value=`${n.initialIntensity}%`,i()}),e("speed").addEventListener("input",r=>{n.speed=Number(r.target.value),e("speed-value").value=`${n.speed.toFixed(1)}×`,i()}),[["toggle-electric","electric"],["toggle-magnetic","magnetic"],["toggle-components","components"],["toggle-direction","direction"]].forEach(([r,o])=>e(r).addEventListener("change",a=>{n.settings[o]=a.target.checked,i()})),e("play-button").addEventListener("click",r=>{n.paused=!n.paused,r.currentTarget.textContent=n.paused?"▶":"❚❚",r.currentTarget.setAttribute("aria-label",n.paused?"Play animation":"Pause animation"),i()}),e("add-polarizer").addEventListener("click",()=>{n.angles.length<5&&(n.angles.push(90),s(),i())}),e("remove-polarizer").addEventListener("click",()=>{n.angles.length>2&&(n.angles.pop(),s(),i())}),e("reset-button").addEventListener("click",()=>{Object.assign(n,{initialIntensity:100,angles:[0,45],speed:1,paused:!1,settings:{electric:!0,magnetic:!1,components:!0,direction:!0}}),document.querySelectorAll('input[type="checkbox"]').forEach(r=>{r.checked=n.settings[r.id.replace("toggle-","")]}),e("input-intensity").value=100,e("input-intensity-value").value="100%",e("speed").value=1,e("speed-value").value="1.0×",e("play-button").textContent="❚❚",s(),i()}),document.querySelectorAll("[data-preset]").forEach(r=>r.addEventListener("click",()=>{const o={aligned:[0,0],crossed:[0,90],three:[0,45,90]};n.angles=o[r.dataset.preset],s(),i()})),s(),{rebuild:s}}const Kn={initialIntensity:100,angles:[0,45],speed:1,paused:!1,settings:{electric:!0,magnetic:!1,components:!0,direction:!0}},to=new Fn(document.getElementById("intensity-chart"),{type:"line",data:{labels:[],datasets:[{data:[],borderColor:"#3bd7ff",backgroundColor:"rgba(59,215,255,.12)",fill:!0,pointRadius:0,tension:.28,borderWidth:2},{data:[],borderColor:"#ffd36a",pointBackgroundColor:"#ffd36a",pointRadius:5,showLine:!1}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{callbacks:{label:n=>`${n.parsed.y.toFixed(1)}% transmitted`}}},scales:{x:{title:{display:!0,text:"Analyzer angle (degrees)",color:"#91a7bb"},ticks:{color:"#91a7bb",maxTicksLimit:7},grid:{color:"rgba(150,190,220,.08)"}},y:{min:0,max:55,title:{display:!0,text:"Intensity (%)",color:"#91a7bb"},ticks:{color:"#91a7bb"},grid:{color:"rgba(150,190,220,.08)"}}}}}),eo=new PE(document.getElementById("scene-container"),()=>{document.getElementById("webgl-fallback").hidden=!1});function Uf(){const n=t0(Kn.initialIntensity,Kn.angles);eo.speed=Kn.speed,eo.setPaused(Kn.paused),eo.setSettings(Kn.settings),eo.updateExperiment({...Kn,...n}),document.getElementById("final-intensity").textContent=n.finalIntensity.toFixed(1),document.getElementById("stage-readouts").innerHTML=n.stages.map(o=>`<div class="stage-row"><span>P${o.index+1} · ${o.angle}°${o.relativeAngle===null?"":` <small>Δ ${o.relativeAngle.toFixed(0)}°</small>`}</span><strong>${o.intensity.toFixed(1)}%</strong></div>`).join("");const t=n.stages.at(-1),e=document.getElementById("equation"),i=document.getElementById("physics-explanation");n.stages.length===1?(e.textContent="I₁ = I₀ / 2",i.textContent="The first ideal polarizer transmits half the average intensity of an unpolarized ensemble."):(e.textContent=`I${n.stages.length} = I${n.stages.length-1} cos²(${t.relativeAngle.toFixed(0)}°)`,i.textContent="The field is projected onto the next axis; its perpendicular component is rejected. Intensity follows the squared projection.");const s=n.stages.length===1?Kn.initialIntensity/2:n.stages.at(-2).intensity,r=n0(s,181);to.data.labels=r.map(o=>o.angle),to.data.datasets[0].data=r.map(o=>o.intensity),to.data.datasets[1].data=[{x:t.relativeAngle??0,y:t.intensity}],to.update("none")}DE(Kn,Uf);Uf();
//# sourceMappingURL=index-BEAiHj58.js.map

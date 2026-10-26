var ym=Object.defineProperty;var Mm=(r,e,t)=>e in r?ym(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var vn=(r,e,t)=>Mm(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wo="180",Yi={ROTATE:0,DOLLY:1,PAN:2},ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Tm=0,Al=1,wm=2,Fc=1,bm=2,$n=3,ai=0,on=1,Ln=2,ri=0,Ki=1,Rl=2,Cl=3,Pl=4,Am=5,Ti=100,Rm=101,Cm=102,Pm=103,Dm=104,Lm=200,Fm=201,Im=202,Um=203,Ia=204,Ua=205,Nm=206,Om=207,km=208,Bm=209,zm=210,Hm=211,Vm=212,Gm=213,Wm=214,Na=0,Oa=1,ka=2,Ji=3,Ba=4,za=5,Ha=6,Va=7,Ic=0,Xm=1,$m=2,si=0,jm=1,qm=2,Ym=3,Km=4,Zm=5,Jm=6,Qm=7,Uc=300,Qi=301,er=302,Ga=303,Wa=304,Ls=306,Xa=1e3,bi=1001,$a=1002,wn=1003,e_=1004,Kr=1005,Fn=1006,Qs=1007,Ai=1008,Un=1009,Nc=1010,Oc=1011,Er=1012,bo=1013,Ri=1014,jn=1015,wr=1016,Ao=1017,Ro=1018,Sr=1020,kc=35902,Bc=35899,zc=1021,Hc=1022,Mn=1023,yr=1026,Mr=1027,Vc=1028,Co=1029,Gc=1030,Po=1031,Do=1033,Ss=33776,ys=33777,Ms=33778,Ts=33779,ja=35840,qa=35841,Ya=35842,Ka=35843,Za=36196,Ja=37492,Qa=37496,eo=37808,to=37809,no=37810,io=37811,ro=37812,so=37813,ao=37814,oo=37815,lo=37816,co=37817,uo=37818,ho=37819,fo=37820,po=37821,mo=36492,_o=36494,go=36495,vo=36283,xo=36284,Eo=36285,So=36286,t_=3200,n_=3201,Wc=0,i_=1,ii="",hn="srgb",tr="srgb-linear",As="linear",wt="srgb",Fi=7680,Dl=519,r_=512,s_=513,a_=514,Xc=515,o_=516,l_=517,c_=518,u_=519,Ll=35044,Fl="300 es",In=2e3,Rs=2001;class Di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const a=n[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let o=0,u=a.length;o<u;o++)a[o].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ws=Math.PI/180,yo=180/Math.PI;function br(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[r&255]+Jt[r>>8&255]+Jt[r>>16&255]+Jt[r>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function ht(r,e,t){return Math.max(e,Math.min(t,r))}function h_(r,e){return(r%e+e)%e}function ea(r,e,t){return(1-t)*r+t*e}function hr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function sn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const d_={DEG2RAD:ws};class tt{constructor(e=0,t=0){tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),o=this.x-e.x,u=this.y-e.y;return this.x=o*n-u*a+e.x,this.y=o*a+u*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ci{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,o,u,h){let p=n[a+0],f=n[a+1],g=n[a+2],v=n[a+3];const x=o[u+0],E=o[u+1],A=o[u+2],C=o[u+3];if(h===0){e[t+0]=p,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(h===1){e[t+0]=x,e[t+1]=E,e[t+2]=A,e[t+3]=C;return}if(v!==C||p!==x||f!==E||g!==A){let S=1-h;const _=p*x+f*E+g*A+v*C,k=_>=0?1:-1,U=1-_*_;if(U>Number.EPSILON){const G=Math.sqrt(U),P=Math.atan2(G,_*k);S=Math.sin(S*P)/G,h=Math.sin(h*P)/G}const F=h*k;if(p=p*S+x*F,f=f*S+E*F,g=g*S+A*F,v=v*S+C*F,S===1-h){const G=1/Math.sqrt(p*p+f*f+g*g+v*v);p*=G,f*=G,g*=G,v*=G}}e[t]=p,e[t+1]=f,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,n,a,o,u){const h=n[a],p=n[a+1],f=n[a+2],g=n[a+3],v=o[u],x=o[u+1],E=o[u+2],A=o[u+3];return e[t]=h*A+g*v+p*E-f*x,e[t+1]=p*A+g*x+f*v-h*E,e[t+2]=f*A+g*E+h*x-p*v,e[t+3]=g*A-h*v-p*x-f*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,o=e._z,u=e._order,h=Math.cos,p=Math.sin,f=h(n/2),g=h(a/2),v=h(o/2),x=p(n/2),E=p(a/2),A=p(o/2);switch(u){case"XYZ":this._x=x*g*v+f*E*A,this._y=f*E*v-x*g*A,this._z=f*g*A+x*E*v,this._w=f*g*v-x*E*A;break;case"YXZ":this._x=x*g*v+f*E*A,this._y=f*E*v-x*g*A,this._z=f*g*A-x*E*v,this._w=f*g*v+x*E*A;break;case"ZXY":this._x=x*g*v-f*E*A,this._y=f*E*v+x*g*A,this._z=f*g*A+x*E*v,this._w=f*g*v-x*E*A;break;case"ZYX":this._x=x*g*v-f*E*A,this._y=f*E*v+x*g*A,this._z=f*g*A-x*E*v,this._w=f*g*v+x*E*A;break;case"YZX":this._x=x*g*v+f*E*A,this._y=f*E*v+x*g*A,this._z=f*g*A-x*E*v,this._w=f*g*v-x*E*A;break;case"XZY":this._x=x*g*v-f*E*A,this._y=f*E*v-x*g*A,this._z=f*g*A+x*E*v,this._w=f*g*v+x*E*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],o=t[8],u=t[1],h=t[5],p=t[9],f=t[2],g=t[6],v=t[10],x=n+h+v;if(x>0){const E=.5/Math.sqrt(x+1);this._w=.25/E,this._x=(g-p)*E,this._y=(o-f)*E,this._z=(u-a)*E}else if(n>h&&n>v){const E=2*Math.sqrt(1+n-h-v);this._w=(g-p)/E,this._x=.25*E,this._y=(a+u)/E,this._z=(o+f)/E}else if(h>v){const E=2*Math.sqrt(1+h-n-v);this._w=(o-f)/E,this._x=(a+u)/E,this._y=.25*E,this._z=(p+g)/E}else{const E=2*Math.sqrt(1+v-n-h);this._w=(u-a)/E,this._x=(o+f)/E,this._y=(p+g)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,o=e._z,u=e._w,h=t._x,p=t._y,f=t._z,g=t._w;return this._x=n*g+u*h+a*f-o*p,this._y=a*g+u*p+o*h-n*f,this._z=o*g+u*f+n*p-a*h,this._w=u*g-n*h-a*p-o*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,a=this._y,o=this._z,u=this._w;let h=u*e._w+n*e._x+a*e._y+o*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=u,this._x=n,this._y=a,this._z=o,this;const p=1-h*h;if(p<=Number.EPSILON){const E=1-t;return this._w=E*u+t*this._w,this._x=E*n+t*this._x,this._y=E*a+t*this._y,this._z=E*o+t*this._z,this.normalize(),this}const f=Math.sqrt(p),g=Math.atan2(f,h),v=Math.sin((1-t)*g)/f,x=Math.sin(t*g)/f;return this._w=u*v+this._w*x,this._x=n*v+this._x*x,this._y=a*v+this._y*x,this._z=o*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,n=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Il.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Il.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*a,this.y=o[1]*t+o[4]*n+o[7]*a,this.z=o[2]*t+o[5]*n+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,o=e.elements,u=1/(o[3]*t+o[7]*n+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*a+o[12])*u,this.y=(o[1]*t+o[5]*n+o[9]*a+o[13])*u,this.z=(o[2]*t+o[6]*n+o[10]*a+o[14])*u,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,o=e.x,u=e.y,h=e.z,p=e.w,f=2*(u*a-h*n),g=2*(h*t-o*a),v=2*(o*n-u*t);return this.x=t+p*f+u*v-h*g,this.y=n+p*g+h*f-o*v,this.z=a+p*v+o*g-u*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*a,this.y=o[1]*t+o[5]*n+o[9]*a,this.z=o[2]*t+o[6]*n+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,o=e.z,u=t.x,h=t.y,p=t.z;return this.x=a*p-o*h,this.y=o*u-n*p,this.z=n*h-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ta.copy(this).projectOnVector(e),this.sub(ta)}reflect(e){return this.sub(ta.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ta=new Y,Il=new Ci;class it{constructor(e,t,n,a,o,u,h,p,f){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,o,u,h,p,f)}set(e,t,n,a,o,u,h,p,f){const g=this.elements;return g[0]=e,g[1]=a,g[2]=h,g[3]=t,g[4]=o,g[5]=p,g[6]=n,g[7]=u,g[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,o=this.elements,u=n[0],h=n[3],p=n[6],f=n[1],g=n[4],v=n[7],x=n[2],E=n[5],A=n[8],C=a[0],S=a[3],_=a[6],k=a[1],U=a[4],F=a[7],G=a[2],P=a[5],W=a[8];return o[0]=u*C+h*k+p*G,o[3]=u*S+h*U+p*P,o[6]=u*_+h*F+p*W,o[1]=f*C+g*k+v*G,o[4]=f*S+g*U+v*P,o[7]=f*_+g*F+v*W,o[2]=x*C+E*k+A*G,o[5]=x*S+E*U+A*P,o[8]=x*_+E*F+A*W,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],u=e[4],h=e[5],p=e[6],f=e[7],g=e[8];return t*u*g-t*h*f-n*o*g+n*h*p+a*o*f-a*u*p}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],u=e[4],h=e[5],p=e[6],f=e[7],g=e[8],v=g*u-h*f,x=h*p-g*o,E=f*o-u*p,A=t*v+n*x+a*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=v*C,e[1]=(a*f-g*n)*C,e[2]=(h*n-a*u)*C,e[3]=x*C,e[4]=(g*t-a*p)*C,e[5]=(a*o-h*t)*C,e[6]=E*C,e[7]=(n*p-f*t)*C,e[8]=(u*t-n*o)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,o,u,h){const p=Math.cos(o),f=Math.sin(o);return this.set(n*p,n*f,-n*(p*u+f*h)+u+e,-a*f,a*p,-a*(-f*u+p*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(na.makeScale(e,t)),this}rotate(e){return this.premultiply(na.makeRotation(-e)),this}translate(e,t){return this.premultiply(na.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const na=new it;function $c(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Cs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function f_(){const r=Cs("canvas");return r.style.display="block",r}const Ul={};function Tr(r){r in Ul||(Ul[r]=!0,console.warn(r))}function p_(r,e,t){return new Promise(function(n,a){function o(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}const Nl=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ol=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function m_(){const r={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(a,o,u){return this.enabled===!1||o===u||!o||!u||(this.spaces[o].transfer===wt&&(a.r=qn(a.r),a.g=qn(a.g),a.b=qn(a.b)),this.spaces[o].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===wt&&(a.r=Zi(a.r),a.g=Zi(a.g),a.b=Zi(a.b))),a},workingToColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},colorSpaceToWorking:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ii?As:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,u){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,o){return Tr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(a,o)},toWorkingColorSpace:function(a,o){return Tr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(a,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[tr]:{primaries:e,whitePoint:n,transfer:As,toXYZ:Nl,fromXYZ:Ol,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:e,whitePoint:n,transfer:wt,toXYZ:Nl,fromXYZ:Ol,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),r}const vt=m_();function qn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Zi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ii;class __{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ii===void 0&&(Ii=Cs("canvas")),Ii.width=e.width,Ii.height=e.height;const a=Ii.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),n=Ii}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),o=a.data;for(let u=0;u<o.length;u++)o[u]=qn(o[u]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qn(t[n]/255)*255):t[n]=qn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let g_=0;class Lo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=br(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let u=0,h=a.length;u<h;u++)a[u].isDataTexture?o.push(ia(a[u].image)):o.push(ia(a[u]))}else o=ia(a);n.url=o}return t||(e.images[this.uuid]=n),n}}function ia(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?__.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let v_=0;const ra=new Y;class ln extends Di{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,n=bi,a=bi,o=Fn,u=Ai,h=Mn,p=Un,f=ln.DEFAULT_ANISOTROPY,g=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=br(),this.name="",this.source=new Lo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=o,this.minFilter=u,this.anisotropy=f,this.format=h,this.internalFormat=null,this.type=p,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ra).x}get height(){return this.source.getSize(ra).y}get depth(){return this.source.getSize(ra).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}a&&n&&a.isVector2&&n.isVector2||a&&n&&a.isVector3&&n.isVector3||a&&n&&a.isMatrix3&&n.isMatrix3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xa:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case $a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xa:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case $a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Uc;ln.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,n=0,a=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,o=this.w,u=e.elements;return this.x=u[0]*t+u[4]*n+u[8]*a+u[12]*o,this.y=u[1]*t+u[5]*n+u[9]*a+u[13]*o,this.z=u[2]*t+u[6]*n+u[10]*a+u[14]*o,this.w=u[3]*t+u[7]*n+u[11]*a+u[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,o;const p=e.elements,f=p[0],g=p[4],v=p[8],x=p[1],E=p[5],A=p[9],C=p[2],S=p[6],_=p[10];if(Math.abs(g-x)<.01&&Math.abs(v-C)<.01&&Math.abs(A-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+C)<.1&&Math.abs(A+S)<.1&&Math.abs(f+E+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const U=(f+1)/2,F=(E+1)/2,G=(_+1)/2,P=(g+x)/4,W=(v+C)/4,K=(A+S)/4;return U>F&&U>G?U<.01?(n=0,a=.707106781,o=.707106781):(n=Math.sqrt(U),a=P/n,o=W/n):F>G?F<.01?(n=.707106781,a=0,o=.707106781):(a=Math.sqrt(F),n=P/a,o=K/a):G<.01?(n=.707106781,a=.707106781,o=0):(o=Math.sqrt(G),n=W/o,a=K/o),this.set(n,a,o,t),this}let k=Math.sqrt((S-A)*(S-A)+(v-C)*(v-C)+(x-g)*(x-g));return Math.abs(k)<.001&&(k=1),this.x=(S-A)/k,this.y=(v-C)/k,this.z=(x-g)/k,this.w=Math.acos((f+E+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class x_ extends Di{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const a={width:e,height:t,depth:n.depth},o=new ln(a);this.textures=[];const u=n.count;for(let h=0;h<u;h++)this.textures[h]=o.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Lo(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends x_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class jc extends ln{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=wn,this.minFilter=wn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class E_ extends ln{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=wn,this.minFilter=wn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ar{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=o.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,xn):xn.fromBufferAttribute(o,u),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zr.copy(n.boundingBox)),Zr.applyMatrix4(e.matrixWorld),this.union(Zr)}const a=e.children;for(let o=0,u=a.length;o<u;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),Jr.subVectors(this.max,dr),Ui.subVectors(e.a,dr),Ni.subVectors(e.b,dr),Oi.subVectors(e.c,dr),Kn.subVectors(Ni,Ui),Zn.subVectors(Oi,Ni),gi.subVectors(Ui,Oi);let t=[0,-Kn.z,Kn.y,0,-Zn.z,Zn.y,0,-gi.z,gi.y,Kn.z,0,-Kn.x,Zn.z,0,-Zn.x,gi.z,0,-gi.x,-Kn.y,Kn.x,0,-Zn.y,Zn.x,0,-gi.y,gi.x,0];return!sa(t,Ui,Ni,Oi,Jr)||(t=[1,0,0,0,1,0,0,0,1],!sa(t,Ui,Ni,Oi,Jr))?!1:(Qr.crossVectors(Kn,Zn),t=[Qr.x,Qr.y,Qr.z],sa(t,Ui,Ni,Oi,Jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Hn=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],xn=new Y,Zr=new Ar,Ui=new Y,Ni=new Y,Oi=new Y,Kn=new Y,Zn=new Y,gi=new Y,dr=new Y,Jr=new Y,Qr=new Y,vi=new Y;function sa(r,e,t,n,a){for(let o=0,u=r.length-3;o<=u;o+=3){vi.fromArray(r,o);const h=a.x*Math.abs(vi.x)+a.y*Math.abs(vi.y)+a.z*Math.abs(vi.z),p=e.dot(vi),f=t.dot(vi),g=n.dot(vi);if(Math.max(-Math.max(p,f,g),Math.min(p,f,g))>h)return!1}return!0}const S_=new Ar,fr=new Y,aa=new Y;class Fs{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):S_.setFromPoints(e).getCenter(n);let a=0;for(let o=0,u=e.length;o<u;o++)a=Math.max(a,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fr.subVectors(e,this.center);const t=fr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(fr,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(aa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fr.copy(e.center).add(aa)),this.expandByPoint(fr.copy(e.center).sub(aa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Vn=new Y,oa=new Y,es=new Y,Jn=new Y,la=new Y,ts=new Y,ca=new Y;class Fo{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){oa.copy(e).add(t).multiplyScalar(.5),es.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(oa);const o=e.distanceTo(t)*.5,u=-this.direction.dot(es),h=Jn.dot(this.direction),p=-Jn.dot(es),f=Jn.lengthSq(),g=Math.abs(1-u*u);let v,x,E,A;if(g>0)if(v=u*p-h,x=u*h-p,A=o*g,v>=0)if(x>=-A)if(x<=A){const C=1/g;v*=C,x*=C,E=v*(v+u*x+2*h)+x*(u*v+x+2*p)+f}else x=o,v=Math.max(0,-(u*x+h)),E=-v*v+x*(x+2*p)+f;else x=-o,v=Math.max(0,-(u*x+h)),E=-v*v+x*(x+2*p)+f;else x<=-A?(v=Math.max(0,-(-u*o+h)),x=v>0?-o:Math.min(Math.max(-o,-p),o),E=-v*v+x*(x+2*p)+f):x<=A?(v=0,x=Math.min(Math.max(-o,-p),o),E=x*(x+2*p)+f):(v=Math.max(0,-(u*o+h)),x=v>0?o:Math.min(Math.max(-o,-p),o),E=-v*v+x*(x+2*p)+f);else x=u>0?-o:o,v=Math.max(0,-(u*x+h)),E=-v*v+x*(x+2*p)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(oa).addScaledVector(es,x),E}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);const n=Vn.dot(this.direction),a=Vn.dot(Vn)-n*n,o=e.radius*e.radius;if(a>o)return null;const u=Math.sqrt(o-a),h=n-u,p=n+u;return p<0?null:h<0?this.at(p,t):this.at(h,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,o,u,h,p;const f=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return f>=0?(n=(e.min.x-x.x)*f,a=(e.max.x-x.x)*f):(n=(e.max.x-x.x)*f,a=(e.min.x-x.x)*f),g>=0?(o=(e.min.y-x.y)*g,u=(e.max.y-x.y)*g):(o=(e.max.y-x.y)*g,u=(e.min.y-x.y)*g),n>u||o>a||((o>n||isNaN(n))&&(n=o),(u<a||isNaN(a))&&(a=u),v>=0?(h=(e.min.z-x.z)*v,p=(e.max.z-x.z)*v):(h=(e.max.z-x.z)*v,p=(e.min.z-x.z)*v),n>p||h>a)||((h>n||n!==n)&&(n=h),(p<a||a!==a)&&(a=p),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,n,a,o){la.subVectors(t,e),ts.subVectors(n,e),ca.crossVectors(la,ts);let u=this.direction.dot(ca),h;if(u>0){if(a)return null;h=1}else if(u<0)h=-1,u=-u;else return null;Jn.subVectors(this.origin,e);const p=h*this.direction.dot(ts.crossVectors(Jn,ts));if(p<0)return null;const f=h*this.direction.dot(la.cross(Jn));if(f<0||p+f>u)return null;const g=-h*Jn.dot(ca);return g<0?null:this.at(g/u,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(e,t,n,a,o,u,h,p,f,g,v,x,E,A,C,S){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,o,u,h,p,f,g,v,x,E,A,C,S)}set(e,t,n,a,o,u,h,p,f,g,v,x,E,A,C,S){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=a,_[1]=o,_[5]=u,_[9]=h,_[13]=p,_[2]=f,_[6]=g,_[10]=v,_[14]=x,_[3]=E,_[7]=A,_[11]=C,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,a=1/ki.setFromMatrixColumn(e,0).length(),o=1/ki.setFromMatrixColumn(e,1).length(),u=1/ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,o=e.z,u=Math.cos(n),h=Math.sin(n),p=Math.cos(a),f=Math.sin(a),g=Math.cos(o),v=Math.sin(o);if(e.order==="XYZ"){const x=u*g,E=u*v,A=h*g,C=h*v;t[0]=p*g,t[4]=-p*v,t[8]=f,t[1]=E+A*f,t[5]=x-C*f,t[9]=-h*p,t[2]=C-x*f,t[6]=A+E*f,t[10]=u*p}else if(e.order==="YXZ"){const x=p*g,E=p*v,A=f*g,C=f*v;t[0]=x+C*h,t[4]=A*h-E,t[8]=u*f,t[1]=u*v,t[5]=u*g,t[9]=-h,t[2]=E*h-A,t[6]=C+x*h,t[10]=u*p}else if(e.order==="ZXY"){const x=p*g,E=p*v,A=f*g,C=f*v;t[0]=x-C*h,t[4]=-u*v,t[8]=A+E*h,t[1]=E+A*h,t[5]=u*g,t[9]=C-x*h,t[2]=-u*f,t[6]=h,t[10]=u*p}else if(e.order==="ZYX"){const x=u*g,E=u*v,A=h*g,C=h*v;t[0]=p*g,t[4]=A*f-E,t[8]=x*f+C,t[1]=p*v,t[5]=C*f+x,t[9]=E*f-A,t[2]=-f,t[6]=h*p,t[10]=u*p}else if(e.order==="YZX"){const x=u*p,E=u*f,A=h*p,C=h*f;t[0]=p*g,t[4]=C-x*v,t[8]=A*v+E,t[1]=v,t[5]=u*g,t[9]=-h*g,t[2]=-f*g,t[6]=E*v+A,t[10]=x-C*v}else if(e.order==="XZY"){const x=u*p,E=u*f,A=h*p,C=h*f;t[0]=p*g,t[4]=-v,t[8]=f*g,t[1]=x*v+C,t[5]=u*g,t[9]=E*v-A,t[2]=A*v-E,t[6]=h*g,t[10]=C*v+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(y_,e,M_)}lookAt(e,t,n){const a=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Qn.crossVectors(n,cn),Qn.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Qn.crossVectors(n,cn)),Qn.normalize(),ns.crossVectors(cn,Qn),a[0]=Qn.x,a[4]=ns.x,a[8]=cn.x,a[1]=Qn.y,a[5]=ns.y,a[9]=cn.y,a[2]=Qn.z,a[6]=ns.z,a[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,o=this.elements,u=n[0],h=n[4],p=n[8],f=n[12],g=n[1],v=n[5],x=n[9],E=n[13],A=n[2],C=n[6],S=n[10],_=n[14],k=n[3],U=n[7],F=n[11],G=n[15],P=a[0],W=a[4],K=a[8],L=a[12],T=a[1],O=a[5],Z=a[9],ie=a[13],ne=a[2],ue=a[6],ae=a[10],ve=a[14],ee=a[3],we=a[7],Fe=a[11],Be=a[15];return o[0]=u*P+h*T+p*ne+f*ee,o[4]=u*W+h*O+p*ue+f*we,o[8]=u*K+h*Z+p*ae+f*Fe,o[12]=u*L+h*ie+p*ve+f*Be,o[1]=g*P+v*T+x*ne+E*ee,o[5]=g*W+v*O+x*ue+E*we,o[9]=g*K+v*Z+x*ae+E*Fe,o[13]=g*L+v*ie+x*ve+E*Be,o[2]=A*P+C*T+S*ne+_*ee,o[6]=A*W+C*O+S*ue+_*we,o[10]=A*K+C*Z+S*ae+_*Fe,o[14]=A*L+C*ie+S*ve+_*Be,o[3]=k*P+U*T+F*ne+G*ee,o[7]=k*W+U*O+F*ue+G*we,o[11]=k*K+U*Z+F*ae+G*Fe,o[15]=k*L+U*ie+F*ve+G*Be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],o=e[12],u=e[1],h=e[5],p=e[9],f=e[13],g=e[2],v=e[6],x=e[10],E=e[14],A=e[3],C=e[7],S=e[11],_=e[15];return A*(+o*p*v-a*f*v-o*h*x+n*f*x+a*h*E-n*p*E)+C*(+t*p*E-t*f*x+o*u*x-a*u*E+a*f*g-o*p*g)+S*(+t*f*v-t*h*E-o*u*v+n*u*E+o*h*g-n*f*g)+_*(-a*h*g-t*p*v+t*h*x+a*u*v-n*u*x+n*p*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],u=e[4],h=e[5],p=e[6],f=e[7],g=e[8],v=e[9],x=e[10],E=e[11],A=e[12],C=e[13],S=e[14],_=e[15],k=v*S*f-C*x*f+C*p*E-h*S*E-v*p*_+h*x*_,U=A*x*f-g*S*f-A*p*E+u*S*E+g*p*_-u*x*_,F=g*C*f-A*v*f+A*h*E-u*C*E-g*h*_+u*v*_,G=A*v*p-g*C*p-A*h*x+u*C*x+g*h*S-u*v*S,P=t*k+n*U+a*F+o*G;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/P;return e[0]=k*W,e[1]=(C*x*o-v*S*o-C*a*E+n*S*E+v*a*_-n*x*_)*W,e[2]=(h*S*o-C*p*o+C*a*f-n*S*f-h*a*_+n*p*_)*W,e[3]=(v*p*o-h*x*o-v*a*f+n*x*f+h*a*E-n*p*E)*W,e[4]=U*W,e[5]=(g*S*o-A*x*o+A*a*E-t*S*E-g*a*_+t*x*_)*W,e[6]=(A*p*o-u*S*o-A*a*f+t*S*f+u*a*_-t*p*_)*W,e[7]=(u*x*o-g*p*o+g*a*f-t*x*f-u*a*E+t*p*E)*W,e[8]=F*W,e[9]=(A*v*o-g*C*o-A*n*E+t*C*E+g*n*_-t*v*_)*W,e[10]=(u*C*o-A*h*o+A*n*f-t*C*f-u*n*_+t*h*_)*W,e[11]=(g*h*o-u*v*o-g*n*f+t*v*f+u*n*E-t*h*E)*W,e[12]=G*W,e[13]=(g*C*a-A*v*a+A*n*x-t*C*x-g*n*S+t*v*S)*W,e[14]=(A*h*a-u*C*a-A*n*p+t*C*p+u*n*S-t*h*S)*W,e[15]=(u*v*a-g*h*a+g*n*p-t*v*p-u*n*x+t*h*x)*W,this}scale(e){const t=this.elements,n=e.x,a=e.y,o=e.z;return t[0]*=n,t[4]*=a,t[8]*=o,t[1]*=n,t[5]*=a,t[9]*=o,t[2]*=n,t[6]*=a,t[10]*=o,t[3]*=n,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),o=1-n,u=e.x,h=e.y,p=e.z,f=o*u,g=o*h;return this.set(f*u+n,f*h-a*p,f*p+a*h,0,f*h+a*p,g*h+n,g*p-a*u,0,f*p-a*h,g*p+a*u,o*p*p+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,o,u){return this.set(1,n,o,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,o=t._x,u=t._y,h=t._z,p=t._w,f=o+o,g=u+u,v=h+h,x=o*f,E=o*g,A=o*v,C=u*g,S=u*v,_=h*v,k=p*f,U=p*g,F=p*v,G=n.x,P=n.y,W=n.z;return a[0]=(1-(C+_))*G,a[1]=(E+F)*G,a[2]=(A-U)*G,a[3]=0,a[4]=(E-F)*P,a[5]=(1-(x+_))*P,a[6]=(S+k)*P,a[7]=0,a[8]=(A+U)*W,a[9]=(S-k)*W,a[10]=(1-(x+C))*W,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;let o=ki.set(a[0],a[1],a[2]).length();const u=ki.set(a[4],a[5],a[6]).length(),h=ki.set(a[8],a[9],a[10]).length();this.determinant()<0&&(o=-o),e.x=a[12],e.y=a[13],e.z=a[14],En.copy(this);const f=1/o,g=1/u,v=1/h;return En.elements[0]*=f,En.elements[1]*=f,En.elements[2]*=f,En.elements[4]*=g,En.elements[5]*=g,En.elements[6]*=g,En.elements[8]*=v,En.elements[9]*=v,En.elements[10]*=v,t.setFromRotationMatrix(En),n.x=o,n.y=u,n.z=h,this}makePerspective(e,t,n,a,o,u,h=In,p=!1){const f=this.elements,g=2*o/(t-e),v=2*o/(n-a),x=(t+e)/(t-e),E=(n+a)/(n-a);let A,C;if(p)A=o/(u-o),C=u*o/(u-o);else if(h===In)A=-(u+o)/(u-o),C=-2*u*o/(u-o);else if(h===Rs)A=-u/(u-o),C=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return f[0]=g,f[4]=0,f[8]=x,f[12]=0,f[1]=0,f[5]=v,f[9]=E,f[13]=0,f[2]=0,f[6]=0,f[10]=A,f[14]=C,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,n,a,o,u,h=In,p=!1){const f=this.elements,g=2/(t-e),v=2/(n-a),x=-(t+e)/(t-e),E=-(n+a)/(n-a);let A,C;if(p)A=1/(u-o),C=u/(u-o);else if(h===In)A=-2/(u-o),C=-(u+o)/(u-o);else if(h===Rs)A=-1/(u-o),C=-o/(u-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return f[0]=g,f[4]=0,f[8]=0,f[12]=x,f[1]=0,f[5]=v,f[9]=0,f[13]=E,f[2]=0,f[6]=0,f[10]=A,f[14]=C,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ki=new Y,En=new Nt,y_=new Y(0,0,0),M_=new Y(1,1,1),Qn=new Y,ns=new Y,cn=new Y,kl=new Nt,Bl=new Ci;class Nn{constructor(e=0,t=0,n=0,a=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,o=a[0],u=a[4],h=a[8],p=a[1],f=a[5],g=a[9],v=a[2],x=a[6],E=a[10];switch(t){case"XYZ":this._y=Math.asin(ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,E),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(x,f),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(p,f)):(this._y=Math.atan2(-v,o),this._z=0);break;case"ZXY":this._x=Math.asin(ht(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,E),this._z=Math.atan2(-u,f)):(this._y=0,this._z=Math.atan2(p,o));break;case"ZYX":this._y=Math.asin(-ht(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,E),this._z=Math.atan2(p,o)):(this._x=0,this._z=Math.atan2(-u,f));break;case"YZX":this._z=Math.asin(ht(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,f),this._y=Math.atan2(-v,o)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,f),this._y=Math.atan2(h,o)):(this._x=Math.atan2(-g,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bl.setFromEuler(this),this.setFromQuaternion(Bl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class qc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let T_=0;const zl=new Y,Bi=new Ci,Gn=new Nt,is=new Y,pr=new Y,w_=new Y,b_=new Ci,Hl=new Y(1,0,0),Vl=new Y(0,1,0),Gl=new Y(0,0,1),Wl={type:"added"},A_={type:"removed"},zi={type:"childadded",child:null},ua={type:"childremoved",child:null};class jt extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new Y,t=new Nn,n=new Ci,a=new Y(1,1,1);function o(){n.setFromEuler(t,!1)}function u(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Nt},normalMatrix:{value:new it}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.premultiply(Bi),this}rotateX(e){return this.rotateOnAxis(Hl,e)}rotateY(e){return this.rotateOnAxis(Vl,e)}rotateZ(e){return this.rotateOnAxis(Gl,e)}translateOnAxis(e,t){return zl.copy(e).applyQuaternion(this.quaternion),this.position.add(zl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hl,e)}translateY(e){return this.translateOnAxis(Vl,e)}translateZ(e){return this.translateOnAxis(Gl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?is.copy(e):is.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(pr,is,this.up):Gn.lookAt(is,pr,this.up),this.quaternion.setFromRotationMatrix(Gn),a&&(Gn.extractRotation(a.matrixWorld),Bi.setFromRotationMatrix(Gn),this.quaternion.premultiply(Bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wl),zi.child=e,this.dispatchEvent(zi),zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(A_),ua.child=e,this.dispatchEvent(ua),ua.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wl),zi.child=e,this.dispatchEvent(zi),zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const u=this.children[n].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let o=0,u=a.length;o<u;o++)a[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,e,w_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,b_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let o=0,u=a.length;o<u;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(h=>({...h})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function o(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let f=0,g=p.length;f<g;f++){const v=p[f];o(e.shapes,v)}else o(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,f=this.material.length;p<f;p++)h.push(o(e.materials,this.material[p]));a.material=h}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let h=0;h<this.children.length;h++)a.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];a.animations.push(o(e.animations,p))}}if(t){const h=u(e.geometries),p=u(e.materials),f=u(e.textures),g=u(e.images),v=u(e.shapes),x=u(e.skeletons),E=u(e.animations),A=u(e.nodes);h.length>0&&(n.geometries=h),p.length>0&&(n.materials=p),f.length>0&&(n.textures=f),g.length>0&&(n.images=g),v.length>0&&(n.shapes=v),x.length>0&&(n.skeletons=x),E.length>0&&(n.animations=E),A.length>0&&(n.nodes=A)}return n.object=a,n;function u(h){const p=[];for(const f in h){const g=h[f];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}}jt.DEFAULT_UP=new Y(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new Y,Wn=new Y,ha=new Y,Xn=new Y,Hi=new Y,Vi=new Y,Xl=new Y,da=new Y,fa=new Y,pa=new Y,ma=new Ut,_a=new Ut,ga=new Ut;class yn{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),Sn.subVectors(e,t),a.cross(Sn);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,n,a,o){Sn.subVectors(a,t),Wn.subVectors(n,t),ha.subVectors(e,t);const u=Sn.dot(Sn),h=Sn.dot(Wn),p=Sn.dot(ha),f=Wn.dot(Wn),g=Wn.dot(ha),v=u*f-h*h;if(v===0)return o.set(0,0,0),null;const x=1/v,E=(f*p-h*g)*x,A=(u*g-h*p)*x;return o.set(1-E-A,A,E)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,a,o,u,h,p){return this.getBarycoord(e,t,n,a,Xn)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(o,Xn.x),p.addScaledVector(u,Xn.y),p.addScaledVector(h,Xn.z),p)}static getInterpolatedAttribute(e,t,n,a,o,u){return ma.setScalar(0),_a.setScalar(0),ga.setScalar(0),ma.fromBufferAttribute(e,t),_a.fromBufferAttribute(e,n),ga.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(ma,o.x),u.addScaledVector(_a,o.y),u.addScaledVector(ga,o.z),u}static isFrontFacing(e,t,n,a){return Sn.subVectors(n,t),Wn.subVectors(e,t),Sn.cross(Wn).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),Sn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,o){return yn.getInterpolation(e,this.a,this.b,this.c,t,n,a,o)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,o=this.c;let u,h;Hi.subVectors(a,n),Vi.subVectors(o,n),da.subVectors(e,n);const p=Hi.dot(da),f=Vi.dot(da);if(p<=0&&f<=0)return t.copy(n);fa.subVectors(e,a);const g=Hi.dot(fa),v=Vi.dot(fa);if(g>=0&&v<=g)return t.copy(a);const x=p*v-g*f;if(x<=0&&p>=0&&g<=0)return u=p/(p-g),t.copy(n).addScaledVector(Hi,u);pa.subVectors(e,o);const E=Hi.dot(pa),A=Vi.dot(pa);if(A>=0&&E<=A)return t.copy(o);const C=E*f-p*A;if(C<=0&&f>=0&&A<=0)return h=f/(f-A),t.copy(n).addScaledVector(Vi,h);const S=g*A-E*v;if(S<=0&&v-g>=0&&E-A>=0)return Xl.subVectors(o,a),h=(v-g)/(v-g+(E-A)),t.copy(a).addScaledVector(Xl,h);const _=1/(S+C+x);return u=C*_,h=x*_,t.copy(n).addScaledVector(Hi,u).addScaledVector(Vi,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},rs={h:0,s:0,l:0};function va(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class dt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,a=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.colorSpaceToWorking(this,a),this}setHSL(e,t,n,a=vt.workingColorSpace){if(e=h_(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,u=2*n-o;this.r=va(u,o,e+1/3),this.g=va(u,o,e),this.b=va(u,o,e-1/3)}return vt.colorSpaceToWorking(this,a),this}setStyle(e,t=hn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const u=a[1],h=a[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){const n=Yc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}copyLinearToSRGB(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return vt.workingToColorSpace(Qt.copy(this),e),Math.round(ht(Qt.r*255,0,255))*65536+Math.round(ht(Qt.g*255,0,255))*256+Math.round(ht(Qt.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(Qt.copy(this),t);const n=Qt.r,a=Qt.g,o=Qt.b,u=Math.max(n,a,o),h=Math.min(n,a,o);let p,f;const g=(h+u)/2;if(h===u)p=0,f=0;else{const v=u-h;switch(f=g<=.5?v/(u+h):v/(2-u-h),u){case n:p=(a-o)/v+(a<o?6:0);break;case a:p=(o-n)/v+2;break;case o:p=(n-a)/v+4;break}p/=6}return e.h=p,e.s=f,e.l=g,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=hn){vt.workingToColorSpace(Qt.copy(this),e);const t=Qt.r,n=Qt.g,a=Qt.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(rs);const n=ea(ei.h,rs.h,t),a=ea(ei.s,rs.s,t),o=ea(ei.l,rs.l,t);return this.setHSL(n,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*a,this.g=o[1]*t+o[4]*n+o[7]*a,this.b=o[2]*t+o[5]*n+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new dt;dt.NAMES=Yc;let R_=0;class ir extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=br(),this.name="",this.type="Material",this.blending=Ki,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ia,this.blendDst=Ua,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(n.blending=this.blending),this.side!==ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ia&&(n.blendSrc=this.blendSrc),this.blendDst!==Ua&&(n.blendDst=this.blendDst),this.blendEquation!==Ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(o){const u=[];for(const h in o){const p=o[h];delete p.metadata,u.push(p)}return u}if(t){const o=a(e.textures),u=a(e.images);o.length>0&&(n.textures=o),u.length>0&&(n.images=u)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let o=0;o!==a;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Kc extends ir{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new Y,ss=new tt;let C_=0;class mn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:C_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ll,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ss.fromBufferAttribute(this,t),ss.applyMatrix3(e),this.setXY(t,ss.x,ss.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hr(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hr(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hr(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array),a=sn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,o){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array),a=sn(a,this.array),o=sn(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ll&&(e.usage=this.usage),e}}class Zc extends mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jc extends mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class bn extends mn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let P_=0;const fn=new Nt,xa=new jt,Gi=new Y,un=new Ar,mr=new Ar,$t=new Y;class On extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=br(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($c(e)?Jc:Zc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new it().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return xa.lookAt(e),xa.updateMatrix(),this.applyMatrix4(xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let a=0,o=e.length;a<o;a++){const u=e[a];n.push(u.x,u.y,u.z||0)}this.setAttribute("position",new bn(n,3))}else{const n=Math.min(e.length,t.count);for(let a=0;a<n;a++){const o=e[a];t.setXYZ(a,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const o=t[n];un.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let o=0,u=t.length;o<u;o++){const h=t[o];mr.setFromBufferAttribute(h),this.morphTargetsRelative?($t.addVectors(un.min,mr.min),un.expandByPoint($t),$t.addVectors(un.max,mr.max),un.expandByPoint($t)):(un.expandByPoint(mr.min),un.expandByPoint(mr.max))}un.getCenter(n);let a=0;for(let o=0,u=e.count;o<u;o++)$t.fromBufferAttribute(e,o),a=Math.max(a,n.distanceToSquared($t));if(t)for(let o=0,u=t.length;o<u;o++){const h=t[o],p=this.morphTargetsRelative;for(let f=0,g=h.count;f<g;f++)$t.fromBufferAttribute(h,f),p&&(Gi.fromBufferAttribute(e,f),$t.add(Gi)),a=Math.max(a,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*n.count),4));const u=this.getAttribute("tangent"),h=[],p=[];for(let K=0;K<n.count;K++)h[K]=new Y,p[K]=new Y;const f=new Y,g=new Y,v=new Y,x=new tt,E=new tt,A=new tt,C=new Y,S=new Y;function _(K,L,T){f.fromBufferAttribute(n,K),g.fromBufferAttribute(n,L),v.fromBufferAttribute(n,T),x.fromBufferAttribute(o,K),E.fromBufferAttribute(o,L),A.fromBufferAttribute(o,T),g.sub(f),v.sub(f),E.sub(x),A.sub(x);const O=1/(E.x*A.y-A.x*E.y);isFinite(O)&&(C.copy(g).multiplyScalar(A.y).addScaledVector(v,-E.y).multiplyScalar(O),S.copy(v).multiplyScalar(E.x).addScaledVector(g,-A.x).multiplyScalar(O),h[K].add(C),h[L].add(C),h[T].add(C),p[K].add(S),p[L].add(S),p[T].add(S))}let k=this.groups;k.length===0&&(k=[{start:0,count:e.count}]);for(let K=0,L=k.length;K<L;++K){const T=k[K],O=T.start,Z=T.count;for(let ie=O,ne=O+Z;ie<ne;ie+=3)_(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const U=new Y,F=new Y,G=new Y,P=new Y;function W(K){G.fromBufferAttribute(a,K),P.copy(G);const L=h[K];U.copy(L),U.sub(G.multiplyScalar(G.dot(L))).normalize(),F.crossVectors(P,L);const O=F.dot(p[K])<0?-1:1;u.setXYZW(K,U.x,U.y,U.z,O)}for(let K=0,L=k.length;K<L;++K){const T=k[K],O=T.start,Z=T.count;for(let ie=O,ne=O+Z;ie<ne;ie+=3)W(e.getX(ie+0)),W(e.getX(ie+1)),W(e.getX(ie+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let x=0,E=n.count;x<E;x++)n.setXYZ(x,0,0,0);const a=new Y,o=new Y,u=new Y,h=new Y,p=new Y,f=new Y,g=new Y,v=new Y;if(e)for(let x=0,E=e.count;x<E;x+=3){const A=e.getX(x+0),C=e.getX(x+1),S=e.getX(x+2);a.fromBufferAttribute(t,A),o.fromBufferAttribute(t,C),u.fromBufferAttribute(t,S),g.subVectors(u,o),v.subVectors(a,o),g.cross(v),h.fromBufferAttribute(n,A),p.fromBufferAttribute(n,C),f.fromBufferAttribute(n,S),h.add(g),p.add(g),f.add(g),n.setXYZ(A,h.x,h.y,h.z),n.setXYZ(C,p.x,p.y,p.z),n.setXYZ(S,f.x,f.y,f.z)}else for(let x=0,E=t.count;x<E;x+=3)a.fromBufferAttribute(t,x+0),o.fromBufferAttribute(t,x+1),u.fromBufferAttribute(t,x+2),g.subVectors(u,o),v.subVectors(a,o),g.cross(v),n.setXYZ(x+0,g.x,g.y,g.z),n.setXYZ(x+1,g.x,g.y,g.z),n.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(h,p){const f=h.array,g=h.itemSize,v=h.normalized,x=new f.constructor(p.length*g);let E=0,A=0;for(let C=0,S=p.length;C<S;C++){h.isInterleavedBufferAttribute?E=p[C]*h.data.stride+h.offset:E=p[C]*g;for(let _=0;_<g;_++)x[A++]=f[E++]}return new mn(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new On,n=this.index.array,a=this.attributes;for(const h in a){const p=a[h],f=e(p,n);t.setAttribute(h,f)}const o=this.morphAttributes;for(const h in o){const p=[],f=o[h];for(let g=0,v=f.length;g<v;g++){const x=f[g],E=e(x,n);p.push(E)}t.morphAttributes[h]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,p=u.length;h<p;h++){const f=u[h];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const f in p)p[f]!==void 0&&(e[f]=p[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const p in n){const f=n[p];e.data.attributes[p]=f.toJSON(e.data)}const a={};let o=!1;for(const p in this.morphAttributes){const f=this.morphAttributes[p],g=[];for(let v=0,x=f.length;v<x;v++){const E=f[v];g.push(E.toJSON(e.data))}g.length>0&&(a[p]=g,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const a=e.attributes;for(const f in a){const g=a[f];this.setAttribute(f,g.clone(t))}const o=e.morphAttributes;for(const f in o){const g=[],v=o[f];for(let x=0,E=v.length;x<E;x++)g.push(v[x].clone(t));this.morphAttributes[f]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let f=0,g=u.length;f<g;f++){const v=u[f];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $l=new Nt,xi=new Fo,as=new Fs,jl=new Y,os=new Y,ls=new Y,cs=new Y,Ea=new Y,us=new Y,ql=new Y,hs=new Y;class Tn extends jt{constructor(e=new On,t=new Kc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const h=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=o}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,o=n.morphAttributes.position,u=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const h=this.morphTargetInfluences;if(o&&h){us.set(0,0,0);for(let p=0,f=o.length;p<f;p++){const g=h[p],v=o[p];g!==0&&(Ea.fromBufferAttribute(v,e),u?us.addScaledVector(Ea,g):us.addScaledVector(Ea.sub(t),g))}t.add(us)}return t}raycast(e,t){const n=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere),as.applyMatrix4(o),xi.copy(e.ray).recast(e.near),!(as.containsPoint(xi.origin)===!1&&(xi.intersectSphere(as,jl)===null||xi.origin.distanceToSquared(jl)>(e.far-e.near)**2))&&($l.copy(o).invert(),xi.copy(e.ray).applyMatrix4($l),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xi)))}_computeIntersections(e,t,n){let a;const o=this.geometry,u=this.material,h=o.index,p=o.attributes.position,f=o.attributes.uv,g=o.attributes.uv1,v=o.attributes.normal,x=o.groups,E=o.drawRange;if(h!==null)if(Array.isArray(u))for(let A=0,C=x.length;A<C;A++){const S=x[A],_=u[S.materialIndex],k=Math.max(S.start,E.start),U=Math.min(h.count,Math.min(S.start+S.count,E.start+E.count));for(let F=k,G=U;F<G;F+=3){const P=h.getX(F),W=h.getX(F+1),K=h.getX(F+2);a=ds(this,_,e,n,f,g,v,P,W,K),a&&(a.faceIndex=Math.floor(F/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const A=Math.max(0,E.start),C=Math.min(h.count,E.start+E.count);for(let S=A,_=C;S<_;S+=3){const k=h.getX(S),U=h.getX(S+1),F=h.getX(S+2);a=ds(this,u,e,n,f,g,v,k,U,F),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}else if(p!==void 0)if(Array.isArray(u))for(let A=0,C=x.length;A<C;A++){const S=x[A],_=u[S.materialIndex],k=Math.max(S.start,E.start),U=Math.min(p.count,Math.min(S.start+S.count,E.start+E.count));for(let F=k,G=U;F<G;F+=3){const P=F,W=F+1,K=F+2;a=ds(this,_,e,n,f,g,v,P,W,K),a&&(a.faceIndex=Math.floor(F/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const A=Math.max(0,E.start),C=Math.min(p.count,E.start+E.count);for(let S=A,_=C;S<_;S+=3){const k=S,U=S+1,F=S+2;a=ds(this,u,e,n,f,g,v,k,U,F),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}}}function D_(r,e,t,n,a,o,u,h){let p;if(e.side===on?p=n.intersectTriangle(u,o,a,!0,h):p=n.intersectTriangle(a,o,u,e.side===ai,h),p===null)return null;hs.copy(h),hs.applyMatrix4(r.matrixWorld);const f=t.ray.origin.distanceTo(hs);return f<t.near||f>t.far?null:{distance:f,point:hs.clone(),object:r}}function ds(r,e,t,n,a,o,u,h,p,f){r.getVertexPosition(h,os),r.getVertexPosition(p,ls),r.getVertexPosition(f,cs);const g=D_(r,e,t,n,os,ls,cs,ql);if(g){const v=new Y;yn.getBarycoord(ql,os,ls,cs,v),a&&(g.uv=yn.getInterpolatedAttribute(a,h,p,f,v,new tt)),o&&(g.uv1=yn.getInterpolatedAttribute(o,h,p,f,v,new tt)),u&&(g.normal=yn.getInterpolatedAttribute(u,h,p,f,v,new Y),g.normal.dot(n.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:p,c:f,normal:new Y,materialIndex:0};yn.getNormal(os,ls,cs,x.normal),g.face=x,g.barycoord=v}return g}class Rr extends On{constructor(e=1,t=1,n=1,a=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:o,depthSegments:u};const h=this;a=Math.floor(a),o=Math.floor(o),u=Math.floor(u);const p=[],f=[],g=[],v=[];let x=0,E=0;A("z","y","x",-1,-1,n,t,e,u,o,0),A("z","y","x",1,-1,n,t,-e,u,o,1),A("x","z","y",1,1,e,n,t,a,u,2),A("x","z","y",1,-1,e,n,-t,a,u,3),A("x","y","z",1,-1,e,t,n,a,o,4),A("x","y","z",-1,-1,e,t,-n,a,o,5),this.setIndex(p),this.setAttribute("position",new bn(f,3)),this.setAttribute("normal",new bn(g,3)),this.setAttribute("uv",new bn(v,2));function A(C,S,_,k,U,F,G,P,W,K,L){const T=F/W,O=G/K,Z=F/2,ie=G/2,ne=P/2,ue=W+1,ae=K+1;let ve=0,ee=0;const we=new Y;for(let Fe=0;Fe<ae;Fe++){const Be=Fe*O-ie;for(let Ze=0;Ze<ue;Ze++){const gt=Ze*T-Z;we[C]=gt*k,we[S]=Be*U,we[_]=ne,f.push(we.x,we.y,we.z),we[C]=0,we[S]=0,we[_]=P>0?1:-1,g.push(we.x,we.y,we.z),v.push(Ze/W),v.push(1-Fe/K),ve+=1}}for(let Fe=0;Fe<K;Fe++)for(let Be=0;Be<W;Be++){const Ze=x+Be+ue*Fe,gt=x+Be+ue*(Fe+1),nt=x+(Be+1)+ue*(Fe+1),Qe=x+(Be+1)+ue*Fe;p.push(Ze,gt,Qe),p.push(gt,nt,Qe),ee+=6}h.addGroup(E,ee,L),E+=ee,x+=ve}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function nr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const a=r[t][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone():Array.isArray(a)?e[t][n]=a.slice():e[t][n]=a}}return e}function tn(r){const e={};for(let t=0;t<r.length;t++){const n=nr(r[t]);for(const a in n)e[a]=n[a]}return e}function L_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Qc(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const F_={clone:nr,merge:tn};var I_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,U_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends ir{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I_,this.fragmentShader=U_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nr(e.uniforms),this.uniformsGroups=L_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class eu extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new Y,Yl=new tt,Kl=new tt;class pn extends eu{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yo*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ti.x,ti.y).multiplyScalar(-e/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-e/ti.z)}getViewSize(e,t){return this.getViewBounds(e,Yl,Kl),t.subVectors(Kl,Yl)}setViewOffset(e,t,n,a,o,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ws*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,o=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,f=u.fullHeight;o+=u.offsetX*a/p,t-=u.offsetY*n/f,a*=u.width/p,n*=u.height/f}const h=this.filmOffset;h!==0&&(o+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Wi=-90,Xi=1;class N_ extends jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new pn(Wi,Xi,e,t);a.layers=this.layers,this.add(a);const o=new pn(Wi,Xi,e,t);o.layers=this.layers,this.add(o);const u=new pn(Wi,Xi,e,t);u.layers=this.layers,this.add(u);const h=new pn(Wi,Xi,e,t);h.layers=this.layers,this.add(h);const p=new pn(Wi,Xi,e,t);p.layers=this.layers,this.add(p);const f=new pn(Wi,Xi,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,o,u,h,p]=t;for(const f of t)this.remove(f);if(e===In)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,u,h,p,f,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const C=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,a),e.render(t,o),e.setRenderTarget(n,1,a),e.render(t,u),e.setRenderTarget(n,2,a),e.render(t,h),e.setRenderTarget(n,3,a),e.render(t,p),e.setRenderTarget(n,4,a),e.render(t,f),n.texture.generateMipmaps=C,e.setRenderTarget(n,5,a),e.render(t,g),e.setRenderTarget(v,x,E),e.xr.enabled=A,n.texture.needsPMREMUpdate=!0}}class tu extends ln{constructor(e=[],t=Qi,n,a,o,u,h,p,f,g){super(e,t,n,a,o,u,h,p,f,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class O_ extends Pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new tu(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Rr(5,5,5),o=new oi({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:ri});o.uniforms.tEquirect.value=t;const u=new Tn(a,o),h=t.minFilter;return t.minFilter===Ai&&(t.minFilter=Fn),new N_(1,10,this).update(e,u),t.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,n=!0,a=!0){const o=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,n,a);e.setRenderTarget(o)}}class fs extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const k_={type:"move"};class Sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,o=null,u=null;const h=this._targetRay,p=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){u=!0;for(const C of e.hand.values()){const S=t.getJointPose(C,n),_=this._getHandJoint(f,C);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=f.joints["index-finger-tip"],v=f.joints["thumb-tip"],x=g.position.distanceTo(v.position),E=.02,A=.005;f.inputState.pinching&&x>E+A?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&x<=E-A&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(p.matrix.fromArray(o.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,o.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(o.linearVelocity)):p.hasLinearVelocity=!1,o.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(o.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&o!==null&&(a=o),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(k_)))}return h!==null&&(h.visible=a!==null),p!==null&&(p.visible=o!==null),f!==null&&(f.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new fs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class B_ extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ya=new Y,z_=new Y,H_=new it;class ni{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=ya.subVectors(n,t).cross(z_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ya),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||H_.getNormalMatrix(e),a=this.coplanarPoint(ya).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new Fs,V_=new tt(.5,.5),ps=new Y;class Io{constructor(e=new ni,t=new ni,n=new ni,a=new ni,o=new ni,u=new ni){this.planes=[e,t,n,a,o,u]}set(e,t,n,a,o,u){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(n),h[3].copy(a),h[4].copy(o),h[5].copy(u),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=In,n=!1){const a=this.planes,o=e.elements,u=o[0],h=o[1],p=o[2],f=o[3],g=o[4],v=o[5],x=o[6],E=o[7],A=o[8],C=o[9],S=o[10],_=o[11],k=o[12],U=o[13],F=o[14],G=o[15];if(a[0].setComponents(f-u,E-g,_-A,G-k).normalize(),a[1].setComponents(f+u,E+g,_+A,G+k).normalize(),a[2].setComponents(f+h,E+v,_+C,G+U).normalize(),a[3].setComponents(f-h,E-v,_-C,G-U).normalize(),n)a[4].setComponents(p,x,S,F).normalize(),a[5].setComponents(f-p,E-x,_-S,G-F).normalize();else if(a[4].setComponents(f-p,E-x,_-S,G-F).normalize(),t===In)a[5].setComponents(f+p,E+x,_+S,G+F).normalize();else if(t===Rs)a[5].setComponents(p,x,S,F).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){Ei.center.set(0,0,0);const t=V_.distanceTo(e.center);return Ei.radius=.7071067811865476+t,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(ps.x=a.normal.x>0?e.max.x:e.min.x,ps.y=a.normal.y>0?e.max.y:e.min.y,ps.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ps)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class nu extends ir{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ps=new Y,Ds=new Y,Zl=new Nt,_r=new Fo,ms=new Fs,Ma=new Y,Jl=new Y;class G_ extends jt{constructor(e=new On,t=new nu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let a=1,o=t.count;a<o;a++)Ps.fromBufferAttribute(t,a-1),Ds.fromBufferAttribute(t,a),n[a]=n[a-1],n[a]+=Ps.distanceTo(Ds);e.setAttribute("lineDistance",new bn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,o=e.params.Line.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere),ms.applyMatrix4(a),ms.radius+=o,e.ray.intersectsSphere(ms)===!1)return;Zl.copy(a).invert(),_r.copy(e.ray).applyMatrix4(Zl);const h=o/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,f=this.isLineSegments?2:1,g=n.index,x=n.attributes.position;if(g!==null){const E=Math.max(0,u.start),A=Math.min(g.count,u.start+u.count);for(let C=E,S=A-1;C<S;C+=f){const _=g.getX(C),k=g.getX(C+1),U=_s(this,e,_r,p,_,k,C);U&&t.push(U)}if(this.isLineLoop){const C=g.getX(A-1),S=g.getX(E),_=_s(this,e,_r,p,C,S,A-1);_&&t.push(_)}}else{const E=Math.max(0,u.start),A=Math.min(x.count,u.start+u.count);for(let C=E,S=A-1;C<S;C+=f){const _=_s(this,e,_r,p,C,C+1,C);_&&t.push(_)}if(this.isLineLoop){const C=_s(this,e,_r,p,A-1,E,A-1);C&&t.push(C)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const h=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=o}}}}}function _s(r,e,t,n,a,o,u){const h=r.geometry.attributes.position;if(Ps.fromBufferAttribute(h,a),Ds.fromBufferAttribute(h,o),t.distanceSqToSegment(Ps,Ds,Ma,Jl)>n)return;Ma.applyMatrix4(r.matrixWorld);const f=e.ray.origin.distanceTo(Ma);if(!(f<e.near||f>e.far))return{distance:f,point:Jl.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}const Ql=new Y,ec=new Y;class W_ extends G_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let a=0,o=t.count;a<o;a+=2)Ql.fromBufferAttribute(t,a),ec.fromBufferAttribute(t,a+1),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+Ql.distanceTo(ec);e.setAttribute("lineDistance",new bn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class iu extends ln{constructor(e,t,n=Ri,a,o,u,h=wn,p=wn,f,g=yr,v=1){if(g!==yr&&g!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:v};super(x,a,o,u,h,p,g,n,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ru extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Cr extends On{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const o=e/2,u=t/2,h=Math.floor(n),p=Math.floor(a),f=h+1,g=p+1,v=e/h,x=t/p,E=[],A=[],C=[],S=[];for(let _=0;_<g;_++){const k=_*x-u;for(let U=0;U<f;U++){const F=U*v-o;A.push(F,-k,0),C.push(0,0,1),S.push(U/h),S.push(1-_/p)}}for(let _=0;_<p;_++)for(let k=0;k<h;k++){const U=k+f*_,F=k+f*(_+1),G=k+1+f*(_+1),P=k+1+f*_;E.push(U,F,P),E.push(F,G,P)}this.setIndex(E),this.setAttribute("position",new bn(A,3)),this.setAttribute("normal",new bn(C,3)),this.setAttribute("uv",new bn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.width,e.height,e.widthSegments,e.heightSegments)}}class tc extends ir{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wc,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class X_ extends ir{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=t_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $_ extends ir{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class su extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class j_ extends su{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new dt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ta=new Nt,nc=new Y,ic=new Y;class q_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Io,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;nc.setFromMatrixPosition(e.matrixWorld),t.position.copy(nc),ic.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ic),t.updateMatrixWorld(),Ta.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ta,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ta)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class au extends eu{constructor(e=-1,t=1,n=1,a=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=n-e,u=n+e,h=a+t,p=a-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,u=o+f*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(o,u,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Y_ extends q_{constructor(){super(new au(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class K_ extends su{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new Y_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Z_ extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class rc{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ht(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class J_ extends W_{constructor(e=10,t=10,n=4473924,a=8947848){n=new dt(n),a=new dt(a);const o=t/2,u=e/t,h=e/2,p=[],f=[];for(let x=0,E=0,A=-h;x<=t;x++,A+=u){p.push(-h,0,A,h,0,A),p.push(A,0,-h,A,0,h);const C=x===o?n:a;C.toArray(f,E),E+=3,C.toArray(f,E),E+=3,C.toArray(f,E),E+=3,C.toArray(f,E),E+=3}const g=new On;g.setAttribute("position",new bn(p,3)),g.setAttribute("color",new bn(f,3));const v=new nu({vertexColors:!0,toneMapped:!1});super(g,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Q_ extends Di{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function sc(r,e,t,n){const a=eg(n);switch(t){case zc:return r*e;case Vc:return r*e/a.components*a.byteLength;case Co:return r*e/a.components*a.byteLength;case Gc:return r*e*2/a.components*a.byteLength;case Po:return r*e*2/a.components*a.byteLength;case Hc:return r*e*3/a.components*a.byteLength;case Mn:return r*e*4/a.components*a.byteLength;case Do:return r*e*4/a.components*a.byteLength;case Ss:case ys:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ms:case Ts:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case qa:case Ka:return Math.max(r,16)*Math.max(e,8)/4;case ja:case Ya:return Math.max(r,8)*Math.max(e,8)/2;case Za:case Ja:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Qa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case eo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case to:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case no:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case io:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ro:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case so:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ao:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case oo:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case lo:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case co:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case uo:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ho:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case fo:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case po:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case mo:case _o:case go:return Math.ceil(r/4)*Math.ceil(e/4)*16;case vo:case xo:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Eo:case So:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function eg(r){switch(r){case Un:case Nc:return{byteLength:1,components:1};case Er:case Oc:case wr:return{byteLength:2,components:1};case Ao:case Ro:return{byteLength:2,components:4};case Ri:case bo:case jn:return{byteLength:4,components:1};case kc:case Bc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ou(){let r=null,e=!1,t=null,n=null;function a(o,u){t(o,u),n=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){r=o}}}function tg(r){const e=new WeakMap;function t(h,p){const f=h.array,g=h.usage,v=f.byteLength,x=r.createBuffer();r.bindBuffer(p,x),r.bufferData(p,f,g),h.onUploadCallback();let E;if(f instanceof Float32Array)E=r.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)E=r.HALF_FLOAT;else if(f instanceof Uint16Array)h.isFloat16BufferAttribute?E=r.HALF_FLOAT:E=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)E=r.SHORT;else if(f instanceof Uint32Array)E=r.UNSIGNED_INT;else if(f instanceof Int32Array)E=r.INT;else if(f instanceof Int8Array)E=r.BYTE;else if(f instanceof Uint8Array)E=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)E=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:x,type:E,bytesPerElement:f.BYTES_PER_ELEMENT,version:h.version,size:v}}function n(h,p,f){const g=p.array,v=p.updateRanges;if(r.bindBuffer(f,h),v.length===0)r.bufferSubData(f,0,g);else{v.sort((E,A)=>E.start-A.start);let x=0;for(let E=1;E<v.length;E++){const A=v[x],C=v[E];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++x,v[x]=C)}v.length=x+1;for(let E=0,A=v.length;E<A;E++){const C=v[E];r.bufferSubData(f,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(r.deleteBuffer(p.buffer),e.delete(h))}function u(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const f=e.get(h);if(f===void 0)e.set(h,t(h,p));else if(f.version<h.version){if(f.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,h,p),f.version=h.version}}return{get:a,remove:o,update:u}}var ng=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ig=`#ifdef USE_ALPHAHASH
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
#endif`,rg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ag=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,og=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lg=`#ifdef USE_AOMAP
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
#endif`,cg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ug=`#ifdef USE_BATCHING
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
#endif`,hg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mg=`#ifdef USE_IRIDESCENCE
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
#endif`,_g=`#ifdef USE_BUMPMAP
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
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wg=`#define PI 3.141592653589793
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
} // validated`,bg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ag=`vec3 transformedNormal = objectNormal;
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
#endif`,Rg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ig=`#ifdef USE_ENVMAP
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
#endif`,Ug=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ng=`#ifdef USE_ENVMAP
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
#endif`,Og=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kg=`#ifdef USE_ENVMAP
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
#endif`,Bg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gg=`#ifdef USE_GRADIENTMAP
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
}`,Wg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jg=`uniform bool receiveShadow;
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
#endif`,qg=`#ifdef USE_ENVMAP
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
#endif`,Yg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qg=`PhysicalMaterial material;
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
#endif`,ev=`struct PhysicalMaterial {
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
}`,tv=`
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
#endif`,nv=`#if defined( RE_IndirectDiffuse )
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
#endif`,iv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,av=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ov=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hv=`#if defined( USE_POINTS_UV )
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
#endif`,dv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_v=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gv=`#ifdef USE_MORPHTARGETS
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
#endif`,vv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ev=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tv=`#ifdef USE_NORMALMAP
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
#endif`,wv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Av=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Iv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ov=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,kv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zv=`float getShadowMask() {
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
}`,Hv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vv=`#ifdef USE_SKINNING
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
#endif`,Gv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wv=`#ifdef USE_SKINNING
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
#endif`,Xv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$v=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yv=`#ifdef USE_TRANSMISSION
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
#endif`,Kv=`#ifdef USE_TRANSMISSION
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
#endif`,Zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const t0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n0=`uniform sampler2D t2D;
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
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`#include <common>
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
}`,l0=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,c0=`#define DISTANCE
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
}`,u0=`#define DISTANCE
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
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`uniform float scale;
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
}`,p0=`uniform vec3 diffuse;
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
}`,m0=`#include <common>
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
}`,_0=`uniform vec3 diffuse;
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
}`,g0=`#define LAMBERT
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
}`,v0=`#define LAMBERT
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
}`,x0=`#define MATCAP
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
}`,E0=`#define MATCAP
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
}`,S0=`#define NORMAL
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
}`,y0=`#define NORMAL
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
}`,M0=`#define PHONG
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
}`,T0=`#define PHONG
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
}`,w0=`#define STANDARD
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
}`,b0=`#define STANDARD
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
}`,A0=`#define TOON
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
}`,R0=`#define TOON
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
}`,C0=`uniform float size;
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
}`,P0=`uniform vec3 diffuse;
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
}`,D0=`#include <common>
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
}`,L0=`uniform vec3 color;
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
}`,F0=`uniform float rotation;
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
}`,I0=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:ng,alphahash_pars_fragment:ig,alphamap_fragment:rg,alphamap_pars_fragment:sg,alphatest_fragment:ag,alphatest_pars_fragment:og,aomap_fragment:lg,aomap_pars_fragment:cg,batching_pars_vertex:ug,batching_vertex:hg,begin_vertex:dg,beginnormal_vertex:fg,bsdfs:pg,iridescence_fragment:mg,bumpmap_pars_fragment:_g,clipping_planes_fragment:gg,clipping_planes_pars_fragment:vg,clipping_planes_pars_vertex:xg,clipping_planes_vertex:Eg,color_fragment:Sg,color_pars_fragment:yg,color_pars_vertex:Mg,color_vertex:Tg,common:wg,cube_uv_reflection_fragment:bg,defaultnormal_vertex:Ag,displacementmap_pars_vertex:Rg,displacementmap_vertex:Cg,emissivemap_fragment:Pg,emissivemap_pars_fragment:Dg,colorspace_fragment:Lg,colorspace_pars_fragment:Fg,envmap_fragment:Ig,envmap_common_pars_fragment:Ug,envmap_pars_fragment:Ng,envmap_pars_vertex:Og,envmap_physical_pars_fragment:qg,envmap_vertex:kg,fog_vertex:Bg,fog_pars_vertex:zg,fog_fragment:Hg,fog_pars_fragment:Vg,gradientmap_pars_fragment:Gg,lightmap_pars_fragment:Wg,lights_lambert_fragment:Xg,lights_lambert_pars_fragment:$g,lights_pars_begin:jg,lights_toon_fragment:Yg,lights_toon_pars_fragment:Kg,lights_phong_fragment:Zg,lights_phong_pars_fragment:Jg,lights_physical_fragment:Qg,lights_physical_pars_fragment:ev,lights_fragment_begin:tv,lights_fragment_maps:nv,lights_fragment_end:iv,logdepthbuf_fragment:rv,logdepthbuf_pars_fragment:sv,logdepthbuf_pars_vertex:av,logdepthbuf_vertex:ov,map_fragment:lv,map_pars_fragment:cv,map_particle_fragment:uv,map_particle_pars_fragment:hv,metalnessmap_fragment:dv,metalnessmap_pars_fragment:fv,morphinstance_vertex:pv,morphcolor_vertex:mv,morphnormal_vertex:_v,morphtarget_pars_vertex:gv,morphtarget_vertex:vv,normal_fragment_begin:xv,normal_fragment_maps:Ev,normal_pars_fragment:Sv,normal_pars_vertex:yv,normal_vertex:Mv,normalmap_pars_fragment:Tv,clearcoat_normal_fragment_begin:wv,clearcoat_normal_fragment_maps:bv,clearcoat_pars_fragment:Av,iridescence_pars_fragment:Rv,opaque_fragment:Cv,packing:Pv,premultiplied_alpha_fragment:Dv,project_vertex:Lv,dithering_fragment:Fv,dithering_pars_fragment:Iv,roughnessmap_fragment:Uv,roughnessmap_pars_fragment:Nv,shadowmap_pars_fragment:Ov,shadowmap_pars_vertex:kv,shadowmap_vertex:Bv,shadowmask_pars_fragment:zv,skinbase_vertex:Hv,skinning_pars_vertex:Vv,skinning_vertex:Gv,skinnormal_vertex:Wv,specularmap_fragment:Xv,specularmap_pars_fragment:$v,tonemapping_fragment:jv,tonemapping_pars_fragment:qv,transmission_fragment:Yv,transmission_pars_fragment:Kv,uv_pars_fragment:Zv,uv_pars_vertex:Jv,uv_vertex:Qv,worldpos_vertex:e0,background_vert:t0,background_frag:n0,backgroundCube_vert:i0,backgroundCube_frag:r0,cube_vert:s0,cube_frag:a0,depth_vert:o0,depth_frag:l0,distanceRGBA_vert:c0,distanceRGBA_frag:u0,equirect_vert:h0,equirect_frag:d0,linedashed_vert:f0,linedashed_frag:p0,meshbasic_vert:m0,meshbasic_frag:_0,meshlambert_vert:g0,meshlambert_frag:v0,meshmatcap_vert:x0,meshmatcap_frag:E0,meshnormal_vert:S0,meshnormal_frag:y0,meshphong_vert:M0,meshphong_frag:T0,meshphysical_vert:w0,meshphysical_frag:b0,meshtoon_vert:A0,meshtoon_frag:R0,points_vert:C0,points_frag:P0,shadow_vert:D0,shadow_frag:L0,sprite_vert:F0,sprite_frag:I0},Re={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Dn={basic:{uniforms:tn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:tn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new dt(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:tn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:tn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:tn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new dt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:tn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:tn([Re.points,Re.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:tn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:tn([Re.common,Re.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:tn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:tn([Re.sprite,Re.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:tn([Re.common,Re.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:tn([Re.lights,Re.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Dn.physical={uniforms:tn([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const gs={r:0,b:0,g:0},Si=new Nn,U0=new Nt;function N0(r,e,t,n,a,o,u){const h=new dt(0);let p=o===!0?0:1,f,g,v=null,x=0,E=null;function A(U){let F=U.isScene===!0?U.background:null;return F&&F.isTexture&&(F=(U.backgroundBlurriness>0?t:e).get(F)),F}function C(U){let F=!1;const G=A(U);G===null?_(h,p):G&&G.isColor&&(_(G,1),F=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,u):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(r.autoClear||F)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(U,F){const G=A(F);G&&(G.isCubeTexture||G.mapping===Ls)?(g===void 0&&(g=new Tn(new Rr(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:nr(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(P,W,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),Si.copy(F.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),g.material.uniforms.envMap.value=G,g.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(U0.makeRotationFromEuler(Si)),g.material.toneMapped=vt.getTransfer(G.colorSpace)!==wt,(v!==G||x!==G.version||E!==r.toneMapping)&&(g.material.needsUpdate=!0,v=G,x=G.version,E=r.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):G&&G.isTexture&&(f===void 0&&(f=new Tn(new Cr(2,2),new oi({name:"BackgroundMaterial",uniforms:nr(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(f)),f.material.uniforms.t2D.value=G,f.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,f.material.toneMapped=vt.getTransfer(G.colorSpace)!==wt,G.matrixAutoUpdate===!0&&G.updateMatrix(),f.material.uniforms.uvTransform.value.copy(G.matrix),(v!==G||x!==G.version||E!==r.toneMapping)&&(f.material.needsUpdate=!0,v=G,x=G.version,E=r.toneMapping),f.layers.enableAll(),U.unshift(f,f.geometry,f.material,0,0,null))}function _(U,F){U.getRGB(gs,Qc(r)),n.buffers.color.setClear(gs.r,gs.g,gs.b,F,u)}function k(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,F=1){h.set(U),p=F,_(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,_(h,p)},render:C,addToRenderList:S,dispose:k}}function O0(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},a=x(null);let o=a,u=!1;function h(T,O,Z,ie,ne){let ue=!1;const ae=v(ie,Z,O);o!==ae&&(o=ae,f(o.object)),ue=E(T,ie,Z,ne),ue&&A(T,ie,Z,ne),ne!==null&&e.update(ne,r.ELEMENT_ARRAY_BUFFER),(ue||u)&&(u=!1,F(T,O,Z,ie),ne!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function p(){return r.createVertexArray()}function f(T){return r.bindVertexArray(T)}function g(T){return r.deleteVertexArray(T)}function v(T,O,Z){const ie=Z.wireframe===!0;let ne=n[T.id];ne===void 0&&(ne={},n[T.id]=ne);let ue=ne[O.id];ue===void 0&&(ue={},ne[O.id]=ue);let ae=ue[ie];return ae===void 0&&(ae=x(p()),ue[ie]=ae),ae}function x(T){const O=[],Z=[],ie=[];for(let ne=0;ne<t;ne++)O[ne]=0,Z[ne]=0,ie[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Z,attributeDivisors:ie,object:T,attributes:{},index:null}}function E(T,O,Z,ie){const ne=o.attributes,ue=O.attributes;let ae=0;const ve=Z.getAttributes();for(const ee in ve)if(ve[ee].location>=0){const Fe=ne[ee];let Be=ue[ee];if(Be===void 0&&(ee==="instanceMatrix"&&T.instanceMatrix&&(Be=T.instanceMatrix),ee==="instanceColor"&&T.instanceColor&&(Be=T.instanceColor)),Fe===void 0||Fe.attribute!==Be||Be&&Fe.data!==Be.data)return!0;ae++}return o.attributesNum!==ae||o.index!==ie}function A(T,O,Z,ie){const ne={},ue=O.attributes;let ae=0;const ve=Z.getAttributes();for(const ee in ve)if(ve[ee].location>=0){let Fe=ue[ee];Fe===void 0&&(ee==="instanceMatrix"&&T.instanceMatrix&&(Fe=T.instanceMatrix),ee==="instanceColor"&&T.instanceColor&&(Fe=T.instanceColor));const Be={};Be.attribute=Fe,Fe&&Fe.data&&(Be.data=Fe.data),ne[ee]=Be,ae++}o.attributes=ne,o.attributesNum=ae,o.index=ie}function C(){const T=o.newAttributes;for(let O=0,Z=T.length;O<Z;O++)T[O]=0}function S(T){_(T,0)}function _(T,O){const Z=o.newAttributes,ie=o.enabledAttributes,ne=o.attributeDivisors;Z[T]=1,ie[T]===0&&(r.enableVertexAttribArray(T),ie[T]=1),ne[T]!==O&&(r.vertexAttribDivisor(T,O),ne[T]=O)}function k(){const T=o.newAttributes,O=o.enabledAttributes;for(let Z=0,ie=O.length;Z<ie;Z++)O[Z]!==T[Z]&&(r.disableVertexAttribArray(Z),O[Z]=0)}function U(T,O,Z,ie,ne,ue,ae){ae===!0?r.vertexAttribIPointer(T,O,Z,ne,ue):r.vertexAttribPointer(T,O,Z,ie,ne,ue)}function F(T,O,Z,ie){C();const ne=ie.attributes,ue=Z.getAttributes(),ae=O.defaultAttributeValues;for(const ve in ue){const ee=ue[ve];if(ee.location>=0){let we=ne[ve];if(we===void 0&&(ve==="instanceMatrix"&&T.instanceMatrix&&(we=T.instanceMatrix),ve==="instanceColor"&&T.instanceColor&&(we=T.instanceColor)),we!==void 0){const Fe=we.normalized,Be=we.itemSize,Ze=e.get(we);if(Ze===void 0)continue;const gt=Ze.buffer,nt=Ze.type,Qe=Ze.bytesPerElement,ce=nt===r.INT||nt===r.UNSIGNED_INT||we.gpuType===bo;if(we.isInterleavedBufferAttribute){const de=we.data,le=de.stride,ye=we.offset;if(de.isInstancedInterleavedBuffer){for(let Ve=0;Ve<ee.locationSize;Ve++)_(ee.location+Ve,de.meshPerAttribute);T.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ve=0;Ve<ee.locationSize;Ve++)S(ee.location+Ve);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let Ve=0;Ve<ee.locationSize;Ve++)U(ee.location+Ve,Be/ee.locationSize,nt,Fe,le*Qe,(ye+Be/ee.locationSize*Ve)*Qe,ce)}else{if(we.isInstancedBufferAttribute){for(let de=0;de<ee.locationSize;de++)_(ee.location+de,we.meshPerAttribute);T.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let de=0;de<ee.locationSize;de++)S(ee.location+de);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let de=0;de<ee.locationSize;de++)U(ee.location+de,Be/ee.locationSize,nt,Fe,Be*Qe,Be/ee.locationSize*de*Qe,ce)}}else if(ae!==void 0){const Fe=ae[ve];if(Fe!==void 0)switch(Fe.length){case 2:r.vertexAttrib2fv(ee.location,Fe);break;case 3:r.vertexAttrib3fv(ee.location,Fe);break;case 4:r.vertexAttrib4fv(ee.location,Fe);break;default:r.vertexAttrib1fv(ee.location,Fe)}}}}k()}function G(){K();for(const T in n){const O=n[T];for(const Z in O){const ie=O[Z];for(const ne in ie)g(ie[ne].object),delete ie[ne];delete O[Z]}delete n[T]}}function P(T){if(n[T.id]===void 0)return;const O=n[T.id];for(const Z in O){const ie=O[Z];for(const ne in ie)g(ie[ne].object),delete ie[ne];delete O[Z]}delete n[T.id]}function W(T){for(const O in n){const Z=n[O];if(Z[T.id]===void 0)continue;const ie=Z[T.id];for(const ne in ie)g(ie[ne].object),delete ie[ne];delete Z[T.id]}}function K(){L(),u=!0,o!==a&&(o=a,f(o.object))}function L(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:h,reset:K,resetDefaultState:L,dispose:G,releaseStatesOfGeometry:P,releaseStatesOfProgram:W,initAttributes:C,enableAttribute:S,disableUnusedAttributes:k}}function k0(r,e,t){let n;function a(f){n=f}function o(f,g){r.drawArrays(n,f,g),t.update(g,n,1)}function u(f,g,v){v!==0&&(r.drawArraysInstanced(n,f,g,v),t.update(g,n,v))}function h(f,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,g,0,v);let E=0;for(let A=0;A<v;A++)E+=g[A];t.update(E,n,1)}function p(f,g,v,x){if(v===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let A=0;A<f.length;A++)u(f[A],g[A],x[A]);else{E.multiDrawArraysInstancedWEBGL(n,f,0,g,0,x,0,v);let A=0;for(let C=0;C<v;C++)A+=g[C]*x[C];t.update(A,n,1)}}this.setMode=a,this.render=o,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function B0(r,e,t,n){let a;function o(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const W=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(W.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(W){return!(W!==Mn&&n.convert(W)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(W){const K=W===wr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(W!==Un&&n.convert(W)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&W!==jn&&!K)}function p(W){if(W==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";W="mediump"}return W==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const g=p(f);g!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",g,"instead."),f=g);const v=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),k=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),F=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),G=A>0,P=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:h,precision:f,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:E,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:k,maxVaryings:U,maxFragmentUniforms:F,vertexTextures:G,maxSamples:P}}function z0(r){const e=this;let t=null,n=0,a=!1,o=!1;const u=new ni,h=new it,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const E=v.length!==0||x||n!==0||a;return a=x,n=v.length,E},this.beginShadows=function(){o=!0,g(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(v,x){t=g(v,x,0)},this.setState=function(v,x,E){const A=v.clippingPlanes,C=v.clipIntersection,S=v.clipShadows,_=r.get(v);if(!a||A===null||A.length===0||o&&!S)o?g(null):f();else{const k=o?0:n,U=k*4;let F=_.clippingState||null;p.value=F,F=g(A,x,U,E);for(let G=0;G!==U;++G)F[G]=t[G];_.clippingState=F,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=k}};function f(){p.value!==t&&(p.value=t,p.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function g(v,x,E,A){const C=v!==null?v.length:0;let S=null;if(C!==0){if(S=p.value,A!==!0||S===null){const _=E+C*4,k=x.matrixWorldInverse;h.getNormalMatrix(k),(S===null||S.length<_)&&(S=new Float32Array(_));for(let U=0,F=E;U!==C;++U,F+=4)u.copy(v[U]).applyMatrix4(k,h),u.normal.toArray(S,F),S[F+3]=u.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}function H0(r){let e=new WeakMap;function t(u,h){return h===Ga?u.mapping=Qi:h===Wa&&(u.mapping=er),u}function n(u){if(u&&u.isTexture){const h=u.mapping;if(h===Ga||h===Wa)if(e.has(u)){const p=e.get(u).texture;return t(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const f=new O_(p.height);return f.fromEquirectangularTexture(r,u),e.set(u,f),u.addEventListener("dispose",a),t(f.texture,u.mapping)}else return null}}return u}function a(u){const h=u.target;h.removeEventListener("dispose",a);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}const qi=4,ac=[.125,.215,.35,.446,.526,.582],wi=20,wa=new au,oc=new dt;let ba=null,Aa=0,Ra=0,Ca=!1;const Mi=(1+Math.sqrt(5))/2,$i=1/Mi,lc=[new Y(-Mi,$i,0),new Y(Mi,$i,0),new Y(-$i,0,Mi),new Y($i,0,Mi),new Y(0,Mi,-$i),new Y(0,Mi,$i),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)],V0=new Y;class cc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,a=100,o={}){const{size:u=256,position:h=V0}=o;ba=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,n,a,p,h),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ba,Aa,Ra),this._renderer.xr.enabled=Ca,e.scissorTest=!1,vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ba=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:wr,format:Mn,colorSpace:tr,depthBuffer:!1},a=uc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uc(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=G0(o)),this._blurMaterial=W0(o,e,t)}return a}_compileMaterial(e){const t=new Tn(this._lodPlanes[0],e);this._renderer.compile(t,wa)}_sceneToCubeUV(e,t,n,a,o){const p=new pn(90,1,t,n),f=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,E=v.toneMapping;v.getClearColor(oc),v.toneMapping=si,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(a),v.clearDepth(),v.setRenderTarget(null));const C=new Kc({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),S=new Tn(new Rr,C);let _=!1;const k=e.background;k?k.isColor&&(C.color.copy(k),e.background=null,_=!0):(C.color.copy(oc),_=!0);for(let U=0;U<6;U++){const F=U%3;F===0?(p.up.set(0,f[U],0),p.position.set(o.x,o.y,o.z),p.lookAt(o.x+g[U],o.y,o.z)):F===1?(p.up.set(0,0,f[U]),p.position.set(o.x,o.y,o.z),p.lookAt(o.x,o.y+g[U],o.z)):(p.up.set(0,f[U],0),p.position.set(o.x,o.y,o.z),p.lookAt(o.x,o.y,o.z+g[U]));const G=this._cubeSize;vs(a,F*G,U>2?G:0,G,G),v.setRenderTarget(a),_&&v.render(S,p),v.render(e,p)}S.geometry.dispose(),S.material.dispose(),v.toneMapping=E,v.autoClear=x,e.background=k}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===Qi||e.mapping===er;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=dc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hc());const o=a?this._cubemapMaterial:this._equirectMaterial,u=new Tn(this._lodPlanes[0],o),h=o.uniforms;h.envMap.value=e;const p=this._cubeSize;vs(t,0,0,3*p,2*p),n.setRenderTarget(t),n.render(u,wa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let o=1;o<a;o++){const u=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),h=lc[(a-o-1)%lc.length];this._blur(e,o-1,o,u,h)}t.autoClear=n}_blur(e,t,n,a,o){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,n,a,"latitudinal",o),this._halfBlur(u,e,n,n,a,"longitudinal",o)}_halfBlur(e,t,n,a,o,u,h){const p=this._renderer,f=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Tn(this._lodPlanes[a],f),x=f.uniforms,E=this._sizeLods[n]-1,A=isFinite(o)?Math.PI/(2*E):2*Math.PI/(2*wi-1),C=o/A,S=isFinite(o)?1+Math.floor(g*C):wi;S>wi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${wi}`);const _=[];let k=0;for(let W=0;W<wi;++W){const K=W/C,L=Math.exp(-K*K/2);_.push(L),W===0?k+=L:W<S&&(k+=2*L)}for(let W=0;W<_.length;W++)_[W]=_[W]/k;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=u==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:U}=this;x.dTheta.value=A,x.mipInt.value=U-n;const F=this._sizeLods[a],G=3*F*(a>U-qi?a-U+qi:0),P=4*(this._cubeSize-F);vs(t,G,P,3*F,2*F),p.setRenderTarget(t),p.render(v,wa)}}function G0(r){const e=[],t=[],n=[];let a=r;const o=r-qi+1+ac.length;for(let u=0;u<o;u++){const h=Math.pow(2,a);t.push(h);let p=1/h;u>r-qi?p=ac[u-r+qi-1]:u===0&&(p=0),n.push(p);const f=1/(h-2),g=-f,v=1+f,x=[g,g,v,g,v,v,g,g,v,v,g,v],E=6,A=6,C=3,S=2,_=1,k=new Float32Array(C*A*E),U=new Float32Array(S*A*E),F=new Float32Array(_*A*E);for(let P=0;P<E;P++){const W=P%3*2/3-1,K=P>2?0:-1,L=[W,K,0,W+2/3,K,0,W+2/3,K+1,0,W,K,0,W+2/3,K+1,0,W,K+1,0];k.set(L,C*A*P),U.set(x,S*A*P);const T=[P,P,P,P,P,P];F.set(T,_*A*P)}const G=new On;G.setAttribute("position",new mn(k,C)),G.setAttribute("uv",new mn(U,S)),G.setAttribute("faceIndex",new mn(F,_)),e.push(G),a>qi&&a--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function uc(r,e,t){const n=new Pi(r,e,t);return n.texture.mapping=Ls,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vs(r,e,t,n,a){r.viewport.set(e,t,n,a),r.scissor.set(e,t,n,a)}function W0(r,e,t){const n=new Float32Array(wi),a=new Y(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Uo(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function hc(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uo(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function dc(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Uo(){return`

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
	`}function X0(r){let e=new WeakMap,t=null;function n(h){if(h&&h.isTexture){const p=h.mapping,f=p===Ga||p===Wa,g=p===Qi||p===er;if(f||g){let v=e.get(h);const x=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return t===null&&(t=new cc(r)),v=f?t.fromEquirectangular(h,v):t.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),v.texture;if(v!==void 0)return v.texture;{const E=h.image;return f&&E&&E.height>0||g&&E&&a(E)?(t===null&&(t=new cc(r)),v=f?t.fromEquirectangular(h):t.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),h.addEventListener("dispose",o),v.texture):null}}}return h}function a(h){let p=0;const f=6;for(let g=0;g<f;g++)h[g]!==void 0&&p++;return p===f}function o(h){const p=h.target;p.removeEventListener("dispose",o);const f=e.get(p);f!==void 0&&(e.delete(p),f.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:u}}function $0(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let a;switch(n){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(n)}return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&Tr("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function j0(r,e,t,n){const a={},o=new WeakMap;function u(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);x.removeEventListener("dispose",u),delete a[x.id];const E=o.get(x);E&&(e.remove(E),o.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function h(v,x){return a[x.id]===!0||(x.addEventListener("dispose",u),a[x.id]=!0,t.memory.geometries++),x}function p(v){const x=v.attributes;for(const E in x)e.update(x[E],r.ARRAY_BUFFER)}function f(v){const x=[],E=v.index,A=v.attributes.position;let C=0;if(E!==null){const k=E.array;C=E.version;for(let U=0,F=k.length;U<F;U+=3){const G=k[U+0],P=k[U+1],W=k[U+2];x.push(G,P,P,W,W,G)}}else if(A!==void 0){const k=A.array;C=A.version;for(let U=0,F=k.length/3-1;U<F;U+=3){const G=U+0,P=U+1,W=U+2;x.push(G,P,P,W,W,G)}}else return;const S=new($c(x)?Jc:Zc)(x,1);S.version=C;const _=o.get(v);_&&e.remove(_),o.set(v,S)}function g(v){const x=o.get(v);if(x){const E=v.index;E!==null&&x.version<E.version&&f(v)}else f(v);return o.get(v)}return{get:h,update:p,getWireframeAttribute:g}}function q0(r,e,t){let n;function a(x){n=x}let o,u;function h(x){o=x.type,u=x.bytesPerElement}function p(x,E){r.drawElements(n,E,o,x*u),t.update(E,n,1)}function f(x,E,A){A!==0&&(r.drawElementsInstanced(n,E,o,x*u,A),t.update(E,n,A))}function g(x,E,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,E,0,o,x,0,A);let S=0;for(let _=0;_<A;_++)S+=E[_];t.update(S,n,1)}function v(x,E,A,C){if(A===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<x.length;_++)f(x[_]/u,E[_],C[_]);else{S.multiDrawElementsInstancedWEBGL(n,E,0,o,x,0,C,0,A);let _=0;for(let k=0;k<A;k++)_+=E[k]*C[k];t.update(_,n,1)}}this.setMode=a,this.setIndex=h,this.render=p,this.renderInstances=f,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function Y0(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,u,h){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=h*(o/3);break;case r.LINES:t.lines+=h*(o/2);break;case r.LINE_STRIP:t.lines+=h*(o-1);break;case r.LINE_LOOP:t.lines+=h*o;break;case r.POINTS:t.points+=h*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function K0(r,e,t){const n=new WeakMap,a=new Ut;function o(u,h,p){const f=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let x=n.get(h);if(x===void 0||x.count!==v){let L=function(){W.dispose(),n.delete(h),h.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],_=h.morphAttributes.normal||[],k=h.morphAttributes.color||[];let U=0;E===!0&&(U=1),A===!0&&(U=2),C===!0&&(U=3);let F=h.attributes.position.count*U,G=1;F>e.maxTextureSize&&(G=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const P=new Float32Array(F*G*4*v),W=new jc(P,F,G,v);W.type=jn,W.needsUpdate=!0;const K=U*4;for(let T=0;T<v;T++){const O=S[T],Z=_[T],ie=k[T],ne=F*G*4*T;for(let ue=0;ue<O.count;ue++){const ae=ue*K;E===!0&&(a.fromBufferAttribute(O,ue),P[ne+ae+0]=a.x,P[ne+ae+1]=a.y,P[ne+ae+2]=a.z,P[ne+ae+3]=0),A===!0&&(a.fromBufferAttribute(Z,ue),P[ne+ae+4]=a.x,P[ne+ae+5]=a.y,P[ne+ae+6]=a.z,P[ne+ae+7]=0),C===!0&&(a.fromBufferAttribute(ie,ue),P[ne+ae+8]=a.x,P[ne+ae+9]=a.y,P[ne+ae+10]=a.z,P[ne+ae+11]=ie.itemSize===4?a.w:1)}}x={count:v,texture:W,size:new tt(F,G)},n.set(h,x),h.addEventListener("dispose",L)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let E=0;for(let C=0;C<f.length;C++)E+=f[C];const A=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(r,"morphTargetBaseInfluence",A),p.getUniforms().setValue(r,"morphTargetInfluences",f)}p.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),p.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:o}}function Z0(r,e,t,n){let a=new WeakMap;function o(p){const f=n.render.frame,g=p.geometry,v=e.get(p,g);if(a.get(v)!==f&&(e.update(v),a.set(v,f)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),a.get(p)!==f&&(t.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,r.ARRAY_BUFFER),a.set(p,f))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==f&&(x.update(),a.set(x,f))}return v}function u(){a=new WeakMap}function h(p){const f=p.target;f.removeEventListener("dispose",h),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:u}}const lu=new ln,fc=new iu(1,1),cu=new jc,uu=new E_,hu=new tu,pc=[],mc=[],_c=new Float32Array(16),gc=new Float32Array(9),vc=new Float32Array(4);function rr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const a=e*t;let o=pc[a];if(o===void 0&&(o=new Float32Array(a),pc[a]=o),e!==0){n.toArray(o,0);for(let u=1,h=0;u!==e;++u)h+=t,r[u].toArray(o,h)}return o}function Wt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Xt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Is(r,e){let t=mc[e];t===void 0&&(t=new Int32Array(e),mc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function J0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Q0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;r.uniform2fv(this.addr,e),Xt(t,e)}}function ex(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;r.uniform3fv(this.addr,e),Xt(t,e)}}function tx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;r.uniform4fv(this.addr,e),Xt(t,e)}}function nx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;vc.set(n),r.uniformMatrix2fv(this.addr,!1,vc),Xt(t,n)}}function ix(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;gc.set(n),r.uniformMatrix3fv(this.addr,!1,gc),Xt(t,n)}}function rx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;_c.set(n),r.uniformMatrix4fv(this.addr,!1,_c),Xt(t,n)}}function sx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ax(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;r.uniform2iv(this.addr,e),Xt(t,e)}}function ox(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;r.uniform3iv(this.addr,e),Xt(t,e)}}function lx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;r.uniform4iv(this.addr,e),Xt(t,e)}}function cx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ux(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;r.uniform2uiv(this.addr,e),Xt(t,e)}}function hx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;r.uniform3uiv(this.addr,e),Xt(t,e)}}function dx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;r.uniform4uiv(this.addr,e),Xt(t,e)}}function fx(r,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(r.uniform1i(this.addr,a),n[0]=a);let o;this.type===r.SAMPLER_2D_SHADOW?(fc.compareFunction=Xc,o=fc):o=lu,t.setTexture2D(e||o,a)}function px(r,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(r.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||uu,a)}function mx(r,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(r.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||hu,a)}function _x(r,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(r.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||cu,a)}function gx(r){switch(r){case 5126:return J0;case 35664:return Q0;case 35665:return ex;case 35666:return tx;case 35674:return nx;case 35675:return ix;case 35676:return rx;case 5124:case 35670:return sx;case 35667:case 35671:return ax;case 35668:case 35672:return ox;case 35669:case 35673:return lx;case 5125:return cx;case 36294:return ux;case 36295:return hx;case 36296:return dx;case 35678:case 36198:case 36298:case 36306:case 35682:return fx;case 35679:case 36299:case 36307:return px;case 35680:case 36300:case 36308:case 36293:return mx;case 36289:case 36303:case 36311:case 36292:return _x}}function vx(r,e){r.uniform1fv(this.addr,e)}function xx(r,e){const t=rr(e,this.size,2);r.uniform2fv(this.addr,t)}function Ex(r,e){const t=rr(e,this.size,3);r.uniform3fv(this.addr,t)}function Sx(r,e){const t=rr(e,this.size,4);r.uniform4fv(this.addr,t)}function yx(r,e){const t=rr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Mx(r,e){const t=rr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Tx(r,e){const t=rr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function wx(r,e){r.uniform1iv(this.addr,e)}function bx(r,e){r.uniform2iv(this.addr,e)}function Ax(r,e){r.uniform3iv(this.addr,e)}function Rx(r,e){r.uniform4iv(this.addr,e)}function Cx(r,e){r.uniform1uiv(this.addr,e)}function Px(r,e){r.uniform2uiv(this.addr,e)}function Dx(r,e){r.uniform3uiv(this.addr,e)}function Lx(r,e){r.uniform4uiv(this.addr,e)}function Fx(r,e,t){const n=this.cache,a=e.length,o=Is(t,a);Wt(n,o)||(r.uniform1iv(this.addr,o),Xt(n,o));for(let u=0;u!==a;++u)t.setTexture2D(e[u]||lu,o[u])}function Ix(r,e,t){const n=this.cache,a=e.length,o=Is(t,a);Wt(n,o)||(r.uniform1iv(this.addr,o),Xt(n,o));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||uu,o[u])}function Ux(r,e,t){const n=this.cache,a=e.length,o=Is(t,a);Wt(n,o)||(r.uniform1iv(this.addr,o),Xt(n,o));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||hu,o[u])}function Nx(r,e,t){const n=this.cache,a=e.length,o=Is(t,a);Wt(n,o)||(r.uniform1iv(this.addr,o),Xt(n,o));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||cu,o[u])}function Ox(r){switch(r){case 5126:return vx;case 35664:return xx;case 35665:return Ex;case 35666:return Sx;case 35674:return yx;case 35675:return Mx;case 35676:return Tx;case 5124:case 35670:return wx;case 35667:case 35671:return bx;case 35668:case 35672:return Ax;case 35669:case 35673:return Rx;case 5125:return Cx;case 36294:return Px;case 36295:return Dx;case 36296:return Lx;case 35678:case 36198:case 36298:case 36306:case 35682:return Fx;case 35679:case 36299:case 36307:return Ix;case 35680:case 36300:case 36308:case 36293:return Ux;case 36289:case 36303:case 36311:case 36292:return Nx}}class kx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gx(t.type)}}class Bx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ox(t.type)}}class zx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let o=0,u=a.length;o!==u;++o){const h=a[o];h.setValue(e,t[h.id],n)}}}const Pa=/(\w+)(\])?(\[|\.)?/g;function xc(r,e){r.seq.push(e),r.map[e.id]=e}function Hx(r,e,t){const n=r.name,a=n.length;for(Pa.lastIndex=0;;){const o=Pa.exec(n),u=Pa.lastIndex;let h=o[1];const p=o[2]==="]",f=o[3];if(p&&(h=h|0),f===void 0||f==="["&&u+2===a){xc(t,f===void 0?new kx(h,r,e):new Bx(h,r,e));break}else{let v=t.map[h];v===void 0&&(v=new zx(h),xc(t,v)),t=v}}}class bs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),u=e.getUniformLocation(t,o.name);Hx(o,u,this)}}setValue(e,t,n,a){const o=this.map[t];o!==void 0&&o.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let o=0,u=t.length;o!==u;++o){const h=t[o],p=n[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,o=e.length;a!==o;++a){const u=e[a];u.id in t&&n.push(u)}return n}}function Ec(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Vx=37297;let Gx=0;function Wx(r,e){const t=r.split(`
`),n=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let u=a;u<o;u++){const h=u+1;n.push(`${h===e?">":" "} ${h}: ${t[u]}`)}return n.join(`
`)}const Sc=new it;function Xx(r){vt._getMatrix(Sc,vt.workingColorSpace,r);const e=`mat3( ${Sc.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(r)){case As:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function yc(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),o=(r.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const h=parseInt(u[1]);return t.toUpperCase()+`

`+o+`

`+Wx(r.getShaderSource(e),h)}else return o}function $x(r,e){const t=Xx(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function jx(r,e){let t;switch(e){case jm:t="Linear";break;case qm:t="Reinhard";break;case Ym:t="Cineon";break;case Km:t="ACESFilmic";break;case Jm:t="AgX";break;case Qm:t="Neutral";break;case Zm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xs=new Y;function qx(){vt.getLuminanceCoefficients(xs);const r=xs.x.toFixed(4),e=xs.y.toFixed(4),t=xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function Kx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Zx(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const o=r.getActiveAttrib(e,a),u=o.name;let h=1;o.type===r.FLOAT_MAT2&&(h=2),o.type===r.FLOAT_MAT3&&(h=3),o.type===r.FLOAT_MAT4&&(h=4),t[u]={type:o.type,location:r.getAttribLocation(e,u),locationSize:h}}return t}function xr(r){return r!==""}function Mc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Jx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mo(r){return r.replace(Jx,eE)}const Qx=new Map;function eE(r,e){let t=ot[e];if(t===void 0){const n=Qx.get(e);if(n!==void 0)t=ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Mo(t)}const tE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wc(r){return r.replace(tE,nE)}function nE(r,e,t,n){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function bc(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function iE(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Fc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===bm?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function rE(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Qi:case er:e="ENVMAP_TYPE_CUBE";break;case Ls:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sE(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case er:e="ENVMAP_MODE_REFRACTION";break}return e}function aE(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ic:e="ENVMAP_BLENDING_MULTIPLY";break;case Xm:e="ENVMAP_BLENDING_MIX";break;case $m:e="ENVMAP_BLENDING_ADD";break}return e}function oE(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function lE(r,e,t,n){const a=r.getContext(),o=t.defines;let u=t.vertexShader,h=t.fragmentShader;const p=iE(t),f=rE(t),g=sE(t),v=aE(t),x=oE(t),E=Yx(t),A=Kx(o),C=a.createProgram();let S,_,k=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(xr).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(xr).join(`
`),_.length>0&&(_+=`
`)):(S=[bc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),_=[bc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?ot.tonemapping_pars_fragment:"",t.toneMapping!==si?jx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,$x("linearToOutputTexel",t.outputColorSpace),qx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xr).join(`
`)),u=Mo(u),u=Mc(u,t),u=Tc(u,t),h=Mo(h),h=Mc(h,t),h=Tc(h,t),u=wc(u),h=wc(h),t.isRawShaderMaterial!==!0&&(k=`#version 300 es
`,S=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",t.glslVersion===Fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=k+S+u,F=k+_+h,G=Ec(a,a.VERTEX_SHADER,U),P=Ec(a,a.FRAGMENT_SHADER,F);a.attachShader(C,G),a.attachShader(C,P),t.index0AttributeName!==void 0?a.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(C,0,"position"),a.linkProgram(C);function W(O){if(r.debug.checkShaderErrors){const Z=a.getProgramInfoLog(C)||"",ie=a.getShaderInfoLog(G)||"",ne=a.getShaderInfoLog(P)||"",ue=Z.trim(),ae=ie.trim(),ve=ne.trim();let ee=!0,we=!0;if(a.getProgramParameter(C,a.LINK_STATUS)===!1)if(ee=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,C,G,P);else{const Fe=yc(a,G,"vertex"),Be=yc(a,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(C,a.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+ue+`
`+Fe+`
`+Be)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(ae===""||ve==="")&&(we=!1);we&&(O.diagnostics={runnable:ee,programLog:ue,vertexShader:{log:ae,prefix:S},fragmentShader:{log:ve,prefix:_}})}a.deleteShader(G),a.deleteShader(P),K=new bs(a,C),L=Zx(a,C)}let K;this.getUniforms=function(){return K===void 0&&W(this),K};let L;this.getAttributes=function(){return L===void 0&&W(this),L};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=a.getProgramParameter(C,Vx)),T},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gx++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=G,this.fragmentShader=P,this}let cE=0;class uE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,a=this._getShaderStage(t),o=this._getShaderStage(n),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(o)===!1&&(u.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new hE(e),t.set(e,n)),n}}class hE{constructor(e){this.id=cE++,this.code=e,this.usedTimes=0}}function dE(r,e,t,n,a,o,u){const h=new qc,p=new uE,f=new Set,g=[],v=a.logarithmicDepthBuffer,x=a.vertexTextures;let E=a.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(L){return f.add(L),L===0?"uv":`uv${L}`}function S(L,T,O,Z,ie){const ne=Z.fog,ue=ie.geometry,ae=L.isMeshStandardMaterial?Z.environment:null,ve=(L.isMeshStandardMaterial?t:e).get(L.envMap||ae),ee=ve&&ve.mapping===Ls?ve.image.height:null,we=A[L.type];L.precision!==null&&(E=a.getMaxPrecision(L.precision),E!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",E,"instead."));const Fe=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Be=Fe!==void 0?Fe.length:0;let Ze=0;ue.morphAttributes.position!==void 0&&(Ze=1),ue.morphAttributes.normal!==void 0&&(Ze=2),ue.morphAttributes.color!==void 0&&(Ze=3);let gt,nt,Qe,ce;if(we){const rt=Dn[we];gt=rt.vertexShader,nt=rt.fragmentShader}else gt=L.vertexShader,nt=L.fragmentShader,p.update(L),Qe=p.getVertexShaderID(L),ce=p.getFragmentShaderID(L);const de=r.getRenderTarget(),le=r.state.buffers.depth.getReversed(),ye=ie.isInstancedMesh===!0,Ve=ie.isBatchedMesh===!0,ct=!!L.map,At=!!L.matcap,N=!!ve,xt=!!L.aoMap,Je=!!L.lightMap,qe=!!L.bumpMap,Ne=!!L.normalMap,Dt=!!L.displacementMap,Ie=!!L.emissiveMap,Ye=!!L.metalnessMap,Ft=!!L.roughnessMap,Mt=L.anisotropy>0,I=L.clearcoat>0,b=L.dispersion>0,j=L.iridescence>0,re=L.sheen>0,fe=L.transmission>0,oe=Mt&&!!L.anisotropyMap,Ge=I&&!!L.clearcoatMap,Me=I&&!!L.clearcoatNormalMap,Oe=I&&!!L.clearcoatRoughnessMap,ze=j&&!!L.iridescenceMap,Ee=j&&!!L.iridescenceThicknessMap,Pe=re&&!!L.sheenColorMap,je=re&&!!L.sheenRoughnessMap,ke=!!L.specularMap,be=!!L.specularColorMap,et=!!L.specularIntensityMap,z=fe&&!!L.transmissionMap,Se=fe&&!!L.thicknessMap,Te=!!L.gradientMap,Le=!!L.alphaMap,H=L.alphaTest>0,B=!!L.alphaHash,De=!!L.extensions;let Ke=si;L.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Ke=r.toneMapping);const mt={shaderID:we,shaderType:L.type,shaderName:L.name,vertexShader:gt,fragmentShader:nt,defines:L.defines,customVertexShaderID:Qe,customFragmentShaderID:ce,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:E,batching:Ve,batchingColor:Ve&&ie._colorsTexture!==null,instancing:ye,instancingColor:ye&&ie.instanceColor!==null,instancingMorph:ye&&ie.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:de===null?r.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:tr,alphaToCoverage:!!L.alphaToCoverage,map:ct,matcap:At,envMap:N,envMapMode:N&&ve.mapping,envMapCubeUVHeight:ee,aoMap:xt,lightMap:Je,bumpMap:qe,normalMap:Ne,displacementMap:x&&Dt,emissiveMap:Ie,normalMapObjectSpace:Ne&&L.normalMapType===i_,normalMapTangentSpace:Ne&&L.normalMapType===Wc,metalnessMap:Ye,roughnessMap:Ft,anisotropy:Mt,anisotropyMap:oe,clearcoat:I,clearcoatMap:Ge,clearcoatNormalMap:Me,clearcoatRoughnessMap:Oe,dispersion:b,iridescence:j,iridescenceMap:ze,iridescenceThicknessMap:Ee,sheen:re,sheenColorMap:Pe,sheenRoughnessMap:je,specularMap:ke,specularColorMap:be,specularIntensityMap:et,transmission:fe,transmissionMap:z,thicknessMap:Se,gradientMap:Te,opaque:L.transparent===!1&&L.blending===Ki&&L.alphaToCoverage===!1,alphaMap:Le,alphaTest:H,alphaHash:B,combine:L.combine,mapUv:ct&&C(L.map.channel),aoMapUv:xt&&C(L.aoMap.channel),lightMapUv:Je&&C(L.lightMap.channel),bumpMapUv:qe&&C(L.bumpMap.channel),normalMapUv:Ne&&C(L.normalMap.channel),displacementMapUv:Dt&&C(L.displacementMap.channel),emissiveMapUv:Ie&&C(L.emissiveMap.channel),metalnessMapUv:Ye&&C(L.metalnessMap.channel),roughnessMapUv:Ft&&C(L.roughnessMap.channel),anisotropyMapUv:oe&&C(L.anisotropyMap.channel),clearcoatMapUv:Ge&&C(L.clearcoatMap.channel),clearcoatNormalMapUv:Me&&C(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&C(L.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&C(L.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&C(L.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&C(L.sheenColorMap.channel),sheenRoughnessMapUv:je&&C(L.sheenRoughnessMap.channel),specularMapUv:ke&&C(L.specularMap.channel),specularColorMapUv:be&&C(L.specularColorMap.channel),specularIntensityMapUv:et&&C(L.specularIntensityMap.channel),transmissionMapUv:z&&C(L.transmissionMap.channel),thicknessMapUv:Se&&C(L.thicknessMap.channel),alphaMapUv:Le&&C(L.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(Ne||Mt),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:ie.isPoints===!0&&!!ue.attributes.uv&&(ct||Le),fog:!!ne,useFog:L.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:L.flatShading===!0&&L.wireframe===!1,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:le,skinning:ie.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:Ze,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:L.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ke,decodeVideoTexture:ct&&L.map.isVideoTexture===!0&&vt.getTransfer(L.map.colorSpace)===wt,decodeVideoTextureEmissive:Ie&&L.emissiveMap.isVideoTexture===!0&&vt.getTransfer(L.emissiveMap.colorSpace)===wt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===Ln,flipSided:L.side===on,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:De&&L.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&L.extensions.multiDraw===!0||Ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return mt.vertexUv1s=f.has(1),mt.vertexUv2s=f.has(2),mt.vertexUv3s=f.has(3),f.clear(),mt}function _(L){const T=[];if(L.shaderID?T.push(L.shaderID):(T.push(L.customVertexShaderID),T.push(L.customFragmentShaderID)),L.defines!==void 0)for(const O in L.defines)T.push(O),T.push(L.defines[O]);return L.isRawShaderMaterial===!1&&(k(T,L),U(T,L),T.push(r.outputColorSpace)),T.push(L.customProgramCacheKey),T.join()}function k(L,T){L.push(T.precision),L.push(T.outputColorSpace),L.push(T.envMapMode),L.push(T.envMapCubeUVHeight),L.push(T.mapUv),L.push(T.alphaMapUv),L.push(T.lightMapUv),L.push(T.aoMapUv),L.push(T.bumpMapUv),L.push(T.normalMapUv),L.push(T.displacementMapUv),L.push(T.emissiveMapUv),L.push(T.metalnessMapUv),L.push(T.roughnessMapUv),L.push(T.anisotropyMapUv),L.push(T.clearcoatMapUv),L.push(T.clearcoatNormalMapUv),L.push(T.clearcoatRoughnessMapUv),L.push(T.iridescenceMapUv),L.push(T.iridescenceThicknessMapUv),L.push(T.sheenColorMapUv),L.push(T.sheenRoughnessMapUv),L.push(T.specularMapUv),L.push(T.specularColorMapUv),L.push(T.specularIntensityMapUv),L.push(T.transmissionMapUv),L.push(T.thicknessMapUv),L.push(T.combine),L.push(T.fogExp2),L.push(T.sizeAttenuation),L.push(T.morphTargetsCount),L.push(T.morphAttributeCount),L.push(T.numDirLights),L.push(T.numPointLights),L.push(T.numSpotLights),L.push(T.numSpotLightMaps),L.push(T.numHemiLights),L.push(T.numRectAreaLights),L.push(T.numDirLightShadows),L.push(T.numPointLightShadows),L.push(T.numSpotLightShadows),L.push(T.numSpotLightShadowsWithMaps),L.push(T.numLightProbes),L.push(T.shadowMapType),L.push(T.toneMapping),L.push(T.numClippingPlanes),L.push(T.numClipIntersection),L.push(T.depthPacking)}function U(L,T){h.disableAll(),T.supportsVertexTextures&&h.enable(0),T.instancing&&h.enable(1),T.instancingColor&&h.enable(2),T.instancingMorph&&h.enable(3),T.matcap&&h.enable(4),T.envMap&&h.enable(5),T.normalMapObjectSpace&&h.enable(6),T.normalMapTangentSpace&&h.enable(7),T.clearcoat&&h.enable(8),T.iridescence&&h.enable(9),T.alphaTest&&h.enable(10),T.vertexColors&&h.enable(11),T.vertexAlphas&&h.enable(12),T.vertexUv1s&&h.enable(13),T.vertexUv2s&&h.enable(14),T.vertexUv3s&&h.enable(15),T.vertexTangents&&h.enable(16),T.anisotropy&&h.enable(17),T.alphaHash&&h.enable(18),T.batching&&h.enable(19),T.dispersion&&h.enable(20),T.batchingColor&&h.enable(21),T.gradientMap&&h.enable(22),L.push(h.mask),h.disableAll(),T.fog&&h.enable(0),T.useFog&&h.enable(1),T.flatShading&&h.enable(2),T.logarithmicDepthBuffer&&h.enable(3),T.reversedDepthBuffer&&h.enable(4),T.skinning&&h.enable(5),T.morphTargets&&h.enable(6),T.morphNormals&&h.enable(7),T.morphColors&&h.enable(8),T.premultipliedAlpha&&h.enable(9),T.shadowMapEnabled&&h.enable(10),T.doubleSided&&h.enable(11),T.flipSided&&h.enable(12),T.useDepthPacking&&h.enable(13),T.dithering&&h.enable(14),T.transmission&&h.enable(15),T.sheen&&h.enable(16),T.opaque&&h.enable(17),T.pointsUvs&&h.enable(18),T.decodeVideoTexture&&h.enable(19),T.decodeVideoTextureEmissive&&h.enable(20),T.alphaToCoverage&&h.enable(21),L.push(h.mask)}function F(L){const T=A[L.type];let O;if(T){const Z=Dn[T];O=F_.clone(Z.uniforms)}else O=L.uniforms;return O}function G(L,T){let O;for(let Z=0,ie=g.length;Z<ie;Z++){const ne=g[Z];if(ne.cacheKey===T){O=ne,++O.usedTimes;break}}return O===void 0&&(O=new lE(r,T,L,o),g.push(O)),O}function P(L){if(--L.usedTimes===0){const T=g.indexOf(L);g[T]=g[g.length-1],g.pop(),L.destroy()}}function W(L){p.remove(L)}function K(){p.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:F,acquireProgram:G,releaseProgram:P,releaseShaderCache:W,programs:g,dispose:K}}function fE(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let h=r.get(u);return h===void 0&&(h={},r.set(u,h)),h}function n(u){r.delete(u)}function a(u,h,p){r.get(u)[h]=p}function o(){r=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:o}}function pE(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ac(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Rc(){const r=[];let e=0;const t=[],n=[],a=[];function o(){e=0,t.length=0,n.length=0,a.length=0}function u(v,x,E,A,C,S){let _=r[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:E,groupOrder:A,renderOrder:v.renderOrder,z:C,group:S},r[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=E,_.groupOrder=A,_.renderOrder=v.renderOrder,_.z=C,_.group=S),e++,_}function h(v,x,E,A,C,S){const _=u(v,x,E,A,C,S);E.transmission>0?n.push(_):E.transparent===!0?a.push(_):t.push(_)}function p(v,x,E,A,C,S){const _=u(v,x,E,A,C,S);E.transmission>0?n.unshift(_):E.transparent===!0?a.unshift(_):t.unshift(_)}function f(v,x){t.length>1&&t.sort(v||pE),n.length>1&&n.sort(x||Ac),a.length>1&&a.sort(x||Ac)}function g(){for(let v=e,x=r.length;v<x;v++){const E=r[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:n,transparent:a,init:o,push:h,unshift:p,finish:g,sort:f}}function mE(){let r=new WeakMap;function e(n,a){const o=r.get(n);let u;return o===void 0?(u=new Rc,r.set(n,[u])):a>=o.length?(u=new Rc,o.push(u)):u=o[a],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function _E(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new dt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[e.id]=t,t}}}function gE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let vE=0;function xE(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function EE(r){const e=new _E,t=gE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new Y);const a=new Y,o=new Nt,u=new Nt;function h(f){let g=0,v=0,x=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let E=0,A=0,C=0,S=0,_=0,k=0,U=0,F=0,G=0,P=0,W=0;f.sort(xE);for(let L=0,T=f.length;L<T;L++){const O=f[L],Z=O.color,ie=O.intensity,ne=O.distance,ue=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)g+=Z.r*ie,v+=Z.g*ie,x+=Z.b*ie;else if(O.isLightProbe){for(let ae=0;ae<9;ae++)n.probe[ae].addScaledVector(O.sh.coefficients[ae],ie);W++}else if(O.isDirectionalLight){const ae=e.get(O);if(ae.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const ve=O.shadow,ee=t.get(O);ee.shadowIntensity=ve.intensity,ee.shadowBias=ve.bias,ee.shadowNormalBias=ve.normalBias,ee.shadowRadius=ve.radius,ee.shadowMapSize=ve.mapSize,n.directionalShadow[E]=ee,n.directionalShadowMap[E]=ue,n.directionalShadowMatrix[E]=O.shadow.matrix,k++}n.directional[E]=ae,E++}else if(O.isSpotLight){const ae=e.get(O);ae.position.setFromMatrixPosition(O.matrixWorld),ae.color.copy(Z).multiplyScalar(ie),ae.distance=ne,ae.coneCos=Math.cos(O.angle),ae.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ae.decay=O.decay,n.spot[C]=ae;const ve=O.shadow;if(O.map&&(n.spotLightMap[G]=O.map,G++,ve.updateMatrices(O),O.castShadow&&P++),n.spotLightMatrix[C]=ve.matrix,O.castShadow){const ee=t.get(O);ee.shadowIntensity=ve.intensity,ee.shadowBias=ve.bias,ee.shadowNormalBias=ve.normalBias,ee.shadowRadius=ve.radius,ee.shadowMapSize=ve.mapSize,n.spotShadow[C]=ee,n.spotShadowMap[C]=ue,F++}C++}else if(O.isRectAreaLight){const ae=e.get(O);ae.color.copy(Z).multiplyScalar(ie),ae.halfWidth.set(O.width*.5,0,0),ae.halfHeight.set(0,O.height*.5,0),n.rectArea[S]=ae,S++}else if(O.isPointLight){const ae=e.get(O);if(ae.color.copy(O.color).multiplyScalar(O.intensity),ae.distance=O.distance,ae.decay=O.decay,O.castShadow){const ve=O.shadow,ee=t.get(O);ee.shadowIntensity=ve.intensity,ee.shadowBias=ve.bias,ee.shadowNormalBias=ve.normalBias,ee.shadowRadius=ve.radius,ee.shadowMapSize=ve.mapSize,ee.shadowCameraNear=ve.camera.near,ee.shadowCameraFar=ve.camera.far,n.pointShadow[A]=ee,n.pointShadowMap[A]=ue,n.pointShadowMatrix[A]=O.shadow.matrix,U++}n.point[A]=ae,A++}else if(O.isHemisphereLight){const ae=e.get(O);ae.skyColor.copy(O.color).multiplyScalar(ie),ae.groundColor.copy(O.groundColor).multiplyScalar(ie),n.hemi[_]=ae,_++}}S>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=g,n.ambient[1]=v,n.ambient[2]=x;const K=n.hash;(K.directionalLength!==E||K.pointLength!==A||K.spotLength!==C||K.rectAreaLength!==S||K.hemiLength!==_||K.numDirectionalShadows!==k||K.numPointShadows!==U||K.numSpotShadows!==F||K.numSpotMaps!==G||K.numLightProbes!==W)&&(n.directional.length=E,n.spot.length=C,n.rectArea.length=S,n.point.length=A,n.hemi.length=_,n.directionalShadow.length=k,n.directionalShadowMap.length=k,n.pointShadow.length=U,n.pointShadowMap.length=U,n.spotShadow.length=F,n.spotShadowMap.length=F,n.directionalShadowMatrix.length=k,n.pointShadowMatrix.length=U,n.spotLightMatrix.length=F+G-P,n.spotLightMap.length=G,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=W,K.directionalLength=E,K.pointLength=A,K.spotLength=C,K.rectAreaLength=S,K.hemiLength=_,K.numDirectionalShadows=k,K.numPointShadows=U,K.numSpotShadows=F,K.numSpotMaps=G,K.numLightProbes=W,n.version=vE++)}function p(f,g){let v=0,x=0,E=0,A=0,C=0;const S=g.matrixWorldInverse;for(let _=0,k=f.length;_<k;_++){const U=f[_];if(U.isDirectionalLight){const F=n.directional[v];F.direction.setFromMatrixPosition(U.matrixWorld),a.setFromMatrixPosition(U.target.matrixWorld),F.direction.sub(a),F.direction.transformDirection(S),v++}else if(U.isSpotLight){const F=n.spot[E];F.position.setFromMatrixPosition(U.matrixWorld),F.position.applyMatrix4(S),F.direction.setFromMatrixPosition(U.matrixWorld),a.setFromMatrixPosition(U.target.matrixWorld),F.direction.sub(a),F.direction.transformDirection(S),E++}else if(U.isRectAreaLight){const F=n.rectArea[A];F.position.setFromMatrixPosition(U.matrixWorld),F.position.applyMatrix4(S),u.identity(),o.copy(U.matrixWorld),o.premultiply(S),u.extractRotation(o),F.halfWidth.set(U.width*.5,0,0),F.halfHeight.set(0,U.height*.5,0),F.halfWidth.applyMatrix4(u),F.halfHeight.applyMatrix4(u),A++}else if(U.isPointLight){const F=n.point[x];F.position.setFromMatrixPosition(U.matrixWorld),F.position.applyMatrix4(S),x++}else if(U.isHemisphereLight){const F=n.hemi[C];F.direction.setFromMatrixPosition(U.matrixWorld),F.direction.transformDirection(S),C++}}}return{setup:h,setupView:p,state:n}}function Cc(r){const e=new EE(r),t=[],n=[];function a(g){f.camera=g,t.length=0,n.length=0}function o(g){t.push(g)}function u(g){n.push(g)}function h(){e.setup(t)}function p(g){e.setupView(t,g)}const f={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:f,setupLights:h,setupLightsView:p,pushLight:o,pushShadow:u}}function SE(r){let e=new WeakMap;function t(a,o=0){const u=e.get(a);let h;return u===void 0?(h=new Cc(r),e.set(a,[h])):o>=u.length?(h=new Cc(r),u.push(h)):h=u[o],h}function n(){e=new WeakMap}return{get:t,dispose:n}}const yE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ME=`uniform sampler2D shadow_pass;
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
}`;function TE(r,e,t){let n=new Io;const a=new tt,o=new tt,u=new Ut,h=new X_({depthPacking:n_}),p=new $_,f={},g=t.maxTextureSize,v={[ai]:on,[on]:ai,[Ln]:Ln},x=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:yE,fragmentShader:ME}),E=x.clone();E.defines.HORIZONTAL_PASS=1;const A=new On;A.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Tn(A,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fc;let _=this.type;this.render=function(P,W,K){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;const L=r.getRenderTarget(),T=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(ri),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const ie=_!==$n&&this.type===$n,ne=_===$n&&this.type!==$n;for(let ue=0,ae=P.length;ue<ae;ue++){const ve=P[ue],ee=ve.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",ve,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;a.copy(ee.mapSize);const we=ee.getFrameExtents();if(a.multiply(we),o.copy(ee.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(o.x=Math.floor(g/we.x),a.x=o.x*we.x,ee.mapSize.x=o.x),a.y>g&&(o.y=Math.floor(g/we.y),a.y=o.y*we.y,ee.mapSize.y=o.y)),ee.map===null||ie===!0||ne===!0){const Be=this.type!==$n?{minFilter:wn,magFilter:wn}:{};ee.map!==null&&ee.map.dispose(),ee.map=new Pi(a.x,a.y,Be),ee.map.texture.name=ve.name+".shadowMap",ee.camera.updateProjectionMatrix()}r.setRenderTarget(ee.map),r.clear();const Fe=ee.getViewportCount();for(let Be=0;Be<Fe;Be++){const Ze=ee.getViewport(Be);u.set(o.x*Ze.x,o.y*Ze.y,o.x*Ze.z,o.y*Ze.w),Z.viewport(u),ee.updateMatrices(ve,Be),n=ee.getFrustum(),F(W,K,ee.camera,ve,this.type)}ee.isPointLightShadow!==!0&&this.type===$n&&k(ee,K),ee.needsUpdate=!1}_=this.type,S.needsUpdate=!1,r.setRenderTarget(L,T,O)};function k(P,W){const K=e.update(C);x.defines.VSM_SAMPLES!==P.blurSamples&&(x.defines.VSM_SAMPLES=P.blurSamples,E.defines.VSM_SAMPLES=P.blurSamples,x.needsUpdate=!0,E.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Pi(a.x,a.y)),x.uniforms.shadow_pass.value=P.map.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(W,null,K,x,C,null),E.uniforms.shadow_pass.value=P.mapPass.texture,E.uniforms.resolution.value=P.mapSize,E.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(W,null,K,E,C,null)}function U(P,W,K,L){let T=null;const O=K.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(O!==void 0)T=O;else if(T=K.isPointLight===!0?p:h,r.localClippingEnabled&&W.clipShadows===!0&&Array.isArray(W.clippingPlanes)&&W.clippingPlanes.length!==0||W.displacementMap&&W.displacementScale!==0||W.alphaMap&&W.alphaTest>0||W.map&&W.alphaTest>0||W.alphaToCoverage===!0){const Z=T.uuid,ie=W.uuid;let ne=f[Z];ne===void 0&&(ne={},f[Z]=ne);let ue=ne[ie];ue===void 0&&(ue=T.clone(),ne[ie]=ue,W.addEventListener("dispose",G)),T=ue}if(T.visible=W.visible,T.wireframe=W.wireframe,L===$n?T.side=W.shadowSide!==null?W.shadowSide:W.side:T.side=W.shadowSide!==null?W.shadowSide:v[W.side],T.alphaMap=W.alphaMap,T.alphaTest=W.alphaToCoverage===!0?.5:W.alphaTest,T.map=W.map,T.clipShadows=W.clipShadows,T.clippingPlanes=W.clippingPlanes,T.clipIntersection=W.clipIntersection,T.displacementMap=W.displacementMap,T.displacementScale=W.displacementScale,T.displacementBias=W.displacementBias,T.wireframeLinewidth=W.wireframeLinewidth,T.linewidth=W.linewidth,K.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Z=r.properties.get(T);Z.light=K}return T}function F(P,W,K,L,T){if(P.visible===!1)return;if(P.layers.test(W.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&T===$n)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,P.matrixWorld);const ie=e.update(P),ne=P.material;if(Array.isArray(ne)){const ue=ie.groups;for(let ae=0,ve=ue.length;ae<ve;ae++){const ee=ue[ae],we=ne[ee.materialIndex];if(we&&we.visible){const Fe=U(P,we,L,T);P.onBeforeShadow(r,P,W,K,ie,Fe,ee),r.renderBufferDirect(K,null,ie,Fe,P,ee),P.onAfterShadow(r,P,W,K,ie,Fe,ee)}}}else if(ne.visible){const ue=U(P,ne,L,T);P.onBeforeShadow(r,P,W,K,ie,ue,null),r.renderBufferDirect(K,null,ie,ue,P,null),P.onAfterShadow(r,P,W,K,ie,ue,null)}}const Z=P.children;for(let ie=0,ne=Z.length;ie<ne;ie++)F(Z[ie],W,K,L,T)}function G(P){P.target.removeEventListener("dispose",G);for(const K in f){const L=f[K],T=P.target.uuid;T in L&&(L[T].dispose(),delete L[T])}}}const wE={[Na]:Oa,[ka]:Ha,[Ba]:Va,[Ji]:za,[Oa]:Na,[Ha]:ka,[Va]:Ba,[za]:Ji};function bE(r,e){function t(){let z=!1;const Se=new Ut;let Te=null;const Le=new Ut(0,0,0,0);return{setMask:function(H){Te!==H&&!z&&(r.colorMask(H,H,H,H),Te=H)},setLocked:function(H){z=H},setClear:function(H,B,De,Ke,mt){mt===!0&&(H*=Ke,B*=Ke,De*=Ke),Se.set(H,B,De,Ke),Le.equals(Se)===!1&&(r.clearColor(H,B,De,Ke),Le.copy(Se))},reset:function(){z=!1,Te=null,Le.set(-1,0,0,0)}}}function n(){let z=!1,Se=!1,Te=null,Le=null,H=null;return{setReversed:function(B){if(Se!==B){const De=e.get("EXT_clip_control");B?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),Se=B;const Ke=H;H=null,this.setClear(Ke)}},getReversed:function(){return Se},setTest:function(B){B?de(r.DEPTH_TEST):le(r.DEPTH_TEST)},setMask:function(B){Te!==B&&!z&&(r.depthMask(B),Te=B)},setFunc:function(B){if(Se&&(B=wE[B]),Le!==B){switch(B){case Na:r.depthFunc(r.NEVER);break;case Oa:r.depthFunc(r.ALWAYS);break;case ka:r.depthFunc(r.LESS);break;case Ji:r.depthFunc(r.LEQUAL);break;case Ba:r.depthFunc(r.EQUAL);break;case za:r.depthFunc(r.GEQUAL);break;case Ha:r.depthFunc(r.GREATER);break;case Va:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Le=B}},setLocked:function(B){z=B},setClear:function(B){H!==B&&(Se&&(B=1-B),r.clearDepth(B),H=B)},reset:function(){z=!1,Te=null,Le=null,H=null,Se=!1}}}function a(){let z=!1,Se=null,Te=null,Le=null,H=null,B=null,De=null,Ke=null,mt=null;return{setTest:function(rt){z||(rt?de(r.STENCIL_TEST):le(r.STENCIL_TEST))},setMask:function(rt){Se!==rt&&!z&&(r.stencilMask(rt),Se=rt)},setFunc:function(rt,_n,Ot){(Te!==rt||Le!==_n||H!==Ot)&&(r.stencilFunc(rt,_n,Ot),Te=rt,Le=_n,H=Ot)},setOp:function(rt,_n,Ot){(B!==rt||De!==_n||Ke!==Ot)&&(r.stencilOp(rt,_n,Ot),B=rt,De=_n,Ke=Ot)},setLocked:function(rt){z=rt},setClear:function(rt){mt!==rt&&(r.clearStencil(rt),mt=rt)},reset:function(){z=!1,Se=null,Te=null,Le=null,H=null,B=null,De=null,Ke=null,mt=null}}}const o=new t,u=new n,h=new a,p=new WeakMap,f=new WeakMap;let g={},v={},x=new WeakMap,E=[],A=null,C=!1,S=null,_=null,k=null,U=null,F=null,G=null,P=null,W=new dt(0,0,0),K=0,L=!1,T=null,O=null,Z=null,ie=null,ne=null;const ue=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,ve=0;const ee=r.getParameter(r.VERSION);ee.indexOf("WebGL")!==-1?(ve=parseFloat(/^WebGL (\d)/.exec(ee)[1]),ae=ve>=1):ee.indexOf("OpenGL ES")!==-1&&(ve=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),ae=ve>=2);let we=null,Fe={};const Be=r.getParameter(r.SCISSOR_BOX),Ze=r.getParameter(r.VIEWPORT),gt=new Ut().fromArray(Be),nt=new Ut().fromArray(Ze);function Qe(z,Se,Te,Le){const H=new Uint8Array(4),B=r.createTexture();r.bindTexture(z,B),r.texParameteri(z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let De=0;De<Te;De++)z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY?r.texImage3D(Se,0,r.RGBA,1,1,Le,0,r.RGBA,r.UNSIGNED_BYTE,H):r.texImage2D(Se+De,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,H);return B}const ce={};ce[r.TEXTURE_2D]=Qe(r.TEXTURE_2D,r.TEXTURE_2D,1),ce[r.TEXTURE_CUBE_MAP]=Qe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[r.TEXTURE_2D_ARRAY]=Qe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ce[r.TEXTURE_3D]=Qe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),o.setClear(0,0,0,1),u.setClear(1),h.setClear(0),de(r.DEPTH_TEST),u.setFunc(Ji),qe(!1),Ne(Al),de(r.CULL_FACE),xt(ri);function de(z){g[z]!==!0&&(r.enable(z),g[z]=!0)}function le(z){g[z]!==!1&&(r.disable(z),g[z]=!1)}function ye(z,Se){return v[z]!==Se?(r.bindFramebuffer(z,Se),v[z]=Se,z===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Se),z===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Se),!0):!1}function Ve(z,Se){let Te=E,Le=!1;if(z){Te=x.get(Se),Te===void 0&&(Te=[],x.set(Se,Te));const H=z.textures;if(Te.length!==H.length||Te[0]!==r.COLOR_ATTACHMENT0){for(let B=0,De=H.length;B<De;B++)Te[B]=r.COLOR_ATTACHMENT0+B;Te.length=H.length,Le=!0}}else Te[0]!==r.BACK&&(Te[0]=r.BACK,Le=!0);Le&&r.drawBuffers(Te)}function ct(z){return A!==z?(r.useProgram(z),A=z,!0):!1}const At={[Ti]:r.FUNC_ADD,[Rm]:r.FUNC_SUBTRACT,[Cm]:r.FUNC_REVERSE_SUBTRACT};At[Pm]=r.MIN,At[Dm]=r.MAX;const N={[Lm]:r.ZERO,[Fm]:r.ONE,[Im]:r.SRC_COLOR,[Ia]:r.SRC_ALPHA,[zm]:r.SRC_ALPHA_SATURATE,[km]:r.DST_COLOR,[Nm]:r.DST_ALPHA,[Um]:r.ONE_MINUS_SRC_COLOR,[Ua]:r.ONE_MINUS_SRC_ALPHA,[Bm]:r.ONE_MINUS_DST_COLOR,[Om]:r.ONE_MINUS_DST_ALPHA,[Hm]:r.CONSTANT_COLOR,[Vm]:r.ONE_MINUS_CONSTANT_COLOR,[Gm]:r.CONSTANT_ALPHA,[Wm]:r.ONE_MINUS_CONSTANT_ALPHA};function xt(z,Se,Te,Le,H,B,De,Ke,mt,rt){if(z===ri){C===!0&&(le(r.BLEND),C=!1);return}if(C===!1&&(de(r.BLEND),C=!0),z!==Am){if(z!==S||rt!==L){if((_!==Ti||F!==Ti)&&(r.blendEquation(r.FUNC_ADD),_=Ti,F=Ti),rt)switch(z){case Ki:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Rl:r.blendFunc(r.ONE,r.ONE);break;case Cl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Pl:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ki:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Rl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Cl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}k=null,U=null,G=null,P=null,W.set(0,0,0),K=0,S=z,L=rt}return}H=H||Se,B=B||Te,De=De||Le,(Se!==_||H!==F)&&(r.blendEquationSeparate(At[Se],At[H]),_=Se,F=H),(Te!==k||Le!==U||B!==G||De!==P)&&(r.blendFuncSeparate(N[Te],N[Le],N[B],N[De]),k=Te,U=Le,G=B,P=De),(Ke.equals(W)===!1||mt!==K)&&(r.blendColor(Ke.r,Ke.g,Ke.b,mt),W.copy(Ke),K=mt),S=z,L=!1}function Je(z,Se){z.side===Ln?le(r.CULL_FACE):de(r.CULL_FACE);let Te=z.side===on;Se&&(Te=!Te),qe(Te),z.blending===Ki&&z.transparent===!1?xt(ri):xt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),u.setFunc(z.depthFunc),u.setTest(z.depthTest),u.setMask(z.depthWrite),o.setMask(z.colorWrite);const Le=z.stencilWrite;h.setTest(Le),Le&&(h.setMask(z.stencilWriteMask),h.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),h.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ie(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?de(r.SAMPLE_ALPHA_TO_COVERAGE):le(r.SAMPLE_ALPHA_TO_COVERAGE)}function qe(z){T!==z&&(z?r.frontFace(r.CW):r.frontFace(r.CCW),T=z)}function Ne(z){z!==Tm?(de(r.CULL_FACE),z!==O&&(z===Al?r.cullFace(r.BACK):z===wm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):le(r.CULL_FACE),O=z}function Dt(z){z!==Z&&(ae&&r.lineWidth(z),Z=z)}function Ie(z,Se,Te){z?(de(r.POLYGON_OFFSET_FILL),(ie!==Se||ne!==Te)&&(r.polygonOffset(Se,Te),ie=Se,ne=Te)):le(r.POLYGON_OFFSET_FILL)}function Ye(z){z?de(r.SCISSOR_TEST):le(r.SCISSOR_TEST)}function Ft(z){z===void 0&&(z=r.TEXTURE0+ue-1),we!==z&&(r.activeTexture(z),we=z)}function Mt(z,Se,Te){Te===void 0&&(we===null?Te=r.TEXTURE0+ue-1:Te=we);let Le=Fe[Te];Le===void 0&&(Le={type:void 0,texture:void 0},Fe[Te]=Le),(Le.type!==z||Le.texture!==Se)&&(we!==Te&&(r.activeTexture(Te),we=Te),r.bindTexture(z,Se||ce[z]),Le.type=z,Le.texture=Se)}function I(){const z=Fe[we];z!==void 0&&z.type!==void 0&&(r.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function j(){try{r.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function re(){try{r.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{r.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function oe(){try{r.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ge(){try{r.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Me(){try{r.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Oe(){try{r.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ze(){try{r.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(){try{r.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Pe(z){gt.equals(z)===!1&&(r.scissor(z.x,z.y,z.z,z.w),gt.copy(z))}function je(z){nt.equals(z)===!1&&(r.viewport(z.x,z.y,z.z,z.w),nt.copy(z))}function ke(z,Se){let Te=f.get(Se);Te===void 0&&(Te=new WeakMap,f.set(Se,Te));let Le=Te.get(z);Le===void 0&&(Le=r.getUniformBlockIndex(Se,z.name),Te.set(z,Le))}function be(z,Se){const Le=f.get(Se).get(z);p.get(Se)!==Le&&(r.uniformBlockBinding(Se,Le,z.__bindingPointIndex),p.set(Se,Le))}function et(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},we=null,Fe={},v={},x=new WeakMap,E=[],A=null,C=!1,S=null,_=null,k=null,U=null,F=null,G=null,P=null,W=new dt(0,0,0),K=0,L=!1,T=null,O=null,Z=null,ie=null,ne=null,gt.set(0,0,r.canvas.width,r.canvas.height),nt.set(0,0,r.canvas.width,r.canvas.height),o.reset(),u.reset(),h.reset()}return{buffers:{color:o,depth:u,stencil:h},enable:de,disable:le,bindFramebuffer:ye,drawBuffers:Ve,useProgram:ct,setBlending:xt,setMaterial:Je,setFlipSided:qe,setCullFace:Ne,setLineWidth:Dt,setPolygonOffset:Ie,setScissorTest:Ye,activeTexture:Ft,bindTexture:Mt,unbindTexture:I,compressedTexImage2D:b,compressedTexImage3D:j,texImage2D:ze,texImage3D:Ee,updateUBOMapping:ke,uniformBlockBinding:be,texStorage2D:Me,texStorage3D:Oe,texSubImage2D:re,texSubImage3D:fe,compressedTexSubImage2D:oe,compressedTexSubImage3D:Ge,scissor:Pe,viewport:je,reset:et}}function AE(r,e,t,n,a,o,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new tt,g=new WeakMap;let v;const x=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(I,b){return E?new OffscreenCanvas(I,b):Cs("canvas")}function C(I,b,j){let re=1;const fe=Mt(I);if((fe.width>j||fe.height>j)&&(re=j/Math.max(fe.width,fe.height)),re<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const oe=Math.floor(re*fe.width),Ge=Math.floor(re*fe.height);v===void 0&&(v=A(oe,Ge));const Me=b?A(oe,Ge):v;return Me.width=oe,Me.height=Ge,Me.getContext("2d").drawImage(I,0,0,oe,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+oe+"x"+Ge+")."),Me}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),I;return I}function S(I){return I.generateMipmaps}function _(I){r.generateMipmap(I)}function k(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(I,b,j,re,fe=!1){if(I!==null){if(r[I]!==void 0)return r[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let oe=b;if(b===r.RED&&(j===r.FLOAT&&(oe=r.R32F),j===r.HALF_FLOAT&&(oe=r.R16F),j===r.UNSIGNED_BYTE&&(oe=r.R8)),b===r.RED_INTEGER&&(j===r.UNSIGNED_BYTE&&(oe=r.R8UI),j===r.UNSIGNED_SHORT&&(oe=r.R16UI),j===r.UNSIGNED_INT&&(oe=r.R32UI),j===r.BYTE&&(oe=r.R8I),j===r.SHORT&&(oe=r.R16I),j===r.INT&&(oe=r.R32I)),b===r.RG&&(j===r.FLOAT&&(oe=r.RG32F),j===r.HALF_FLOAT&&(oe=r.RG16F),j===r.UNSIGNED_BYTE&&(oe=r.RG8)),b===r.RG_INTEGER&&(j===r.UNSIGNED_BYTE&&(oe=r.RG8UI),j===r.UNSIGNED_SHORT&&(oe=r.RG16UI),j===r.UNSIGNED_INT&&(oe=r.RG32UI),j===r.BYTE&&(oe=r.RG8I),j===r.SHORT&&(oe=r.RG16I),j===r.INT&&(oe=r.RG32I)),b===r.RGB_INTEGER&&(j===r.UNSIGNED_BYTE&&(oe=r.RGB8UI),j===r.UNSIGNED_SHORT&&(oe=r.RGB16UI),j===r.UNSIGNED_INT&&(oe=r.RGB32UI),j===r.BYTE&&(oe=r.RGB8I),j===r.SHORT&&(oe=r.RGB16I),j===r.INT&&(oe=r.RGB32I)),b===r.RGBA_INTEGER&&(j===r.UNSIGNED_BYTE&&(oe=r.RGBA8UI),j===r.UNSIGNED_SHORT&&(oe=r.RGBA16UI),j===r.UNSIGNED_INT&&(oe=r.RGBA32UI),j===r.BYTE&&(oe=r.RGBA8I),j===r.SHORT&&(oe=r.RGBA16I),j===r.INT&&(oe=r.RGBA32I)),b===r.RGB&&(j===r.UNSIGNED_INT_5_9_9_9_REV&&(oe=r.RGB9_E5),j===r.UNSIGNED_INT_10F_11F_11F_REV&&(oe=r.R11F_G11F_B10F)),b===r.RGBA){const Ge=fe?As:vt.getTransfer(re);j===r.FLOAT&&(oe=r.RGBA32F),j===r.HALF_FLOAT&&(oe=r.RGBA16F),j===r.UNSIGNED_BYTE&&(oe=Ge===wt?r.SRGB8_ALPHA8:r.RGBA8),j===r.UNSIGNED_SHORT_4_4_4_4&&(oe=r.RGBA4),j===r.UNSIGNED_SHORT_5_5_5_1&&(oe=r.RGB5_A1)}return(oe===r.R16F||oe===r.R32F||oe===r.RG16F||oe===r.RG32F||oe===r.RGBA16F||oe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function F(I,b){let j;return I?b===null||b===Ri||b===Sr?j=r.DEPTH24_STENCIL8:b===jn?j=r.DEPTH32F_STENCIL8:b===Er&&(j=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ri||b===Sr?j=r.DEPTH_COMPONENT24:b===jn?j=r.DEPTH_COMPONENT32F:b===Er&&(j=r.DEPTH_COMPONENT16),j}function G(I,b){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==wn&&I.minFilter!==Fn?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function P(I){const b=I.target;b.removeEventListener("dispose",P),K(b),b.isVideoTexture&&g.delete(b)}function W(I){const b=I.target;b.removeEventListener("dispose",W),T(b)}function K(I){const b=n.get(I);if(b.__webglInit===void 0)return;const j=I.source,re=x.get(j);if(re){const fe=re[b.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&L(I),Object.keys(re).length===0&&x.delete(j)}n.remove(I)}function L(I){const b=n.get(I);r.deleteTexture(b.__webglTexture);const j=I.source,re=x.get(j);delete re[b.__cacheKey],u.memory.textures--}function T(I){const b=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(b.__webglFramebuffer[re]))for(let fe=0;fe<b.__webglFramebuffer[re].length;fe++)r.deleteFramebuffer(b.__webglFramebuffer[re][fe]);else r.deleteFramebuffer(b.__webglFramebuffer[re]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[re])}else{if(Array.isArray(b.__webglFramebuffer))for(let re=0;re<b.__webglFramebuffer.length;re++)r.deleteFramebuffer(b.__webglFramebuffer[re]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let re=0;re<b.__webglColorRenderbuffer.length;re++)b.__webglColorRenderbuffer[re]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[re]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const j=I.textures;for(let re=0,fe=j.length;re<fe;re++){const oe=n.get(j[re]);oe.__webglTexture&&(r.deleteTexture(oe.__webglTexture),u.memory.textures--),n.remove(j[re])}n.remove(I)}let O=0;function Z(){O=0}function ie(){const I=O;return I>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+a.maxTextures),O+=1,I}function ne(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function ue(I,b){const j=n.get(I);if(I.isVideoTexture&&Ye(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&j.__version!==I.version){const re=I.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(j,I,b);return}}else I.isExternalTexture&&(j.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,j.__webglTexture,r.TEXTURE0+b)}function ae(I,b){const j=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){ce(j,I,b);return}t.bindTexture(r.TEXTURE_2D_ARRAY,j.__webglTexture,r.TEXTURE0+b)}function ve(I,b){const j=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){ce(j,I,b);return}t.bindTexture(r.TEXTURE_3D,j.__webglTexture,r.TEXTURE0+b)}function ee(I,b){const j=n.get(I);if(I.version>0&&j.__version!==I.version){de(j,I,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture,r.TEXTURE0+b)}const we={[Xa]:r.REPEAT,[bi]:r.CLAMP_TO_EDGE,[$a]:r.MIRRORED_REPEAT},Fe={[wn]:r.NEAREST,[e_]:r.NEAREST_MIPMAP_NEAREST,[Kr]:r.NEAREST_MIPMAP_LINEAR,[Fn]:r.LINEAR,[Qs]:r.LINEAR_MIPMAP_NEAREST,[Ai]:r.LINEAR_MIPMAP_LINEAR},Be={[r_]:r.NEVER,[u_]:r.ALWAYS,[s_]:r.LESS,[Xc]:r.LEQUAL,[a_]:r.EQUAL,[c_]:r.GEQUAL,[o_]:r.GREATER,[l_]:r.NOTEQUAL};function Ze(I,b){if(b.type===jn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Fn||b.magFilter===Qs||b.magFilter===Kr||b.magFilter===Ai||b.minFilter===Fn||b.minFilter===Qs||b.minFilter===Kr||b.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,we[b.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,we[b.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,we[b.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,Fe[b.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,Fe[b.minFilter]),b.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,Be[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===wn||b.minFilter!==Kr&&b.minFilter!==Ai||b.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,a.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function gt(I,b){let j=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",P));const re=b.source;let fe=x.get(re);fe===void 0&&(fe={},x.set(re,fe));const oe=ne(b);if(oe!==I.__cacheKey){fe[oe]===void 0&&(fe[oe]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,j=!0),fe[oe].usedTimes++;const Ge=fe[I.__cacheKey];Ge!==void 0&&(fe[I.__cacheKey].usedTimes--,Ge.usedTimes===0&&L(b)),I.__cacheKey=oe,I.__webglTexture=fe[oe].texture}return j}function nt(I,b,j){return Math.floor(Math.floor(I/j)/b)}function Qe(I,b,j,re){const oe=I.updateRanges;if(oe.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,j,re,b.data);else{oe.sort((Ee,Pe)=>Ee.start-Pe.start);let Ge=0;for(let Ee=1;Ee<oe.length;Ee++){const Pe=oe[Ge],je=oe[Ee],ke=Pe.start+Pe.count,be=nt(je.start,b.width,4),et=nt(Pe.start,b.width,4);je.start<=ke+1&&be===et&&nt(je.start+je.count-1,b.width,4)===be?Pe.count=Math.max(Pe.count,je.start+je.count-Pe.start):(++Ge,oe[Ge]=je)}oe.length=Ge+1;const Me=r.getParameter(r.UNPACK_ROW_LENGTH),Oe=r.getParameter(r.UNPACK_SKIP_PIXELS),ze=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Ee=0,Pe=oe.length;Ee<Pe;Ee++){const je=oe[Ee],ke=Math.floor(je.start/4),be=Math.ceil(je.count/4),et=ke%b.width,z=Math.floor(ke/b.width),Se=be,Te=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,et),r.pixelStorei(r.UNPACK_SKIP_ROWS,z),t.texSubImage2D(r.TEXTURE_2D,0,et,z,Se,Te,j,re,b.data)}I.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Me),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Oe),r.pixelStorei(r.UNPACK_SKIP_ROWS,ze)}}function ce(I,b,j){let re=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(re=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(re=r.TEXTURE_3D);const fe=gt(I,b),oe=b.source;t.bindTexture(re,I.__webglTexture,r.TEXTURE0+j);const Ge=n.get(oe);if(oe.version!==Ge.__version||fe===!0){t.activeTexture(r.TEXTURE0+j);const Me=vt.getPrimaries(vt.workingColorSpace),Oe=b.colorSpace===ii?null:vt.getPrimaries(b.colorSpace),ze=b.colorSpace===ii||Me===Oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let Ee=C(b.image,!1,a.maxTextureSize);Ee=Ft(b,Ee);const Pe=o.convert(b.format,b.colorSpace),je=o.convert(b.type);let ke=U(b.internalFormat,Pe,je,b.colorSpace,b.isVideoTexture);Ze(re,b);let be;const et=b.mipmaps,z=b.isVideoTexture!==!0,Se=Ge.__version===void 0||fe===!0,Te=oe.dataReady,Le=G(b,Ee);if(b.isDepthTexture)ke=F(b.format===Mr,b.type),Se&&(z?t.texStorage2D(r.TEXTURE_2D,1,ke,Ee.width,Ee.height):t.texImage2D(r.TEXTURE_2D,0,ke,Ee.width,Ee.height,0,Pe,je,null));else if(b.isDataTexture)if(et.length>0){z&&Se&&t.texStorage2D(r.TEXTURE_2D,Le,ke,et[0].width,et[0].height);for(let H=0,B=et.length;H<B;H++)be=et[H],z?Te&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,be.width,be.height,Pe,je,be.data):t.texImage2D(r.TEXTURE_2D,H,ke,be.width,be.height,0,Pe,je,be.data);b.generateMipmaps=!1}else z?(Se&&t.texStorage2D(r.TEXTURE_2D,Le,ke,Ee.width,Ee.height),Te&&Qe(b,Ee,Pe,je)):t.texImage2D(r.TEXTURE_2D,0,ke,Ee.width,Ee.height,0,Pe,je,Ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){z&&Se&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Le,ke,et[0].width,et[0].height,Ee.depth);for(let H=0,B=et.length;H<B;H++)if(be=et[H],b.format!==Mn)if(Pe!==null)if(z){if(Te)if(b.layerUpdates.size>0){const De=sc(be.width,be.height,b.format,b.type);for(const Ke of b.layerUpdates){const mt=be.data.subarray(Ke*De/be.data.BYTES_PER_ELEMENT,(Ke+1)*De/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,Ke,be.width,be.height,1,Pe,mt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,0,be.width,be.height,Ee.depth,Pe,be.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,H,ke,be.width,be.height,Ee.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?Te&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,0,be.width,be.height,Ee.depth,Pe,je,be.data):t.texImage3D(r.TEXTURE_2D_ARRAY,H,ke,be.width,be.height,Ee.depth,0,Pe,je,be.data)}else{z&&Se&&t.texStorage2D(r.TEXTURE_2D,Le,ke,et[0].width,et[0].height);for(let H=0,B=et.length;H<B;H++)be=et[H],b.format!==Mn?Pe!==null?z?Te&&t.compressedTexSubImage2D(r.TEXTURE_2D,H,0,0,be.width,be.height,Pe,be.data):t.compressedTexImage2D(r.TEXTURE_2D,H,ke,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?Te&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,be.width,be.height,Pe,je,be.data):t.texImage2D(r.TEXTURE_2D,H,ke,be.width,be.height,0,Pe,je,be.data)}else if(b.isDataArrayTexture)if(z){if(Se&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Le,ke,Ee.width,Ee.height,Ee.depth),Te)if(b.layerUpdates.size>0){const H=sc(Ee.width,Ee.height,b.format,b.type);for(const B of b.layerUpdates){const De=Ee.data.subarray(B*H/Ee.data.BYTES_PER_ELEMENT,(B+1)*H/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,B,Ee.width,Ee.height,1,Pe,je,De)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Pe,je,Ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ke,Ee.width,Ee.height,Ee.depth,0,Pe,je,Ee.data);else if(b.isData3DTexture)z?(Se&&t.texStorage3D(r.TEXTURE_3D,Le,ke,Ee.width,Ee.height,Ee.depth),Te&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Pe,je,Ee.data)):t.texImage3D(r.TEXTURE_3D,0,ke,Ee.width,Ee.height,Ee.depth,0,Pe,je,Ee.data);else if(b.isFramebufferTexture){if(Se)if(z)t.texStorage2D(r.TEXTURE_2D,Le,ke,Ee.width,Ee.height);else{let H=Ee.width,B=Ee.height;for(let De=0;De<Le;De++)t.texImage2D(r.TEXTURE_2D,De,ke,H,B,0,Pe,je,null),H>>=1,B>>=1}}else if(et.length>0){if(z&&Se){const H=Mt(et[0]);t.texStorage2D(r.TEXTURE_2D,Le,ke,H.width,H.height)}for(let H=0,B=et.length;H<B;H++)be=et[H],z?Te&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,Pe,je,be):t.texImage2D(r.TEXTURE_2D,H,ke,Pe,je,be);b.generateMipmaps=!1}else if(z){if(Se){const H=Mt(Ee);t.texStorage2D(r.TEXTURE_2D,Le,ke,H.width,H.height)}Te&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Pe,je,Ee)}else t.texImage2D(r.TEXTURE_2D,0,ke,Pe,je,Ee);S(b)&&_(re),Ge.__version=oe.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function de(I,b,j){if(b.image.length!==6)return;const re=gt(I,b),fe=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+j);const oe=n.get(fe);if(fe.version!==oe.__version||re===!0){t.activeTexture(r.TEXTURE0+j);const Ge=vt.getPrimaries(vt.workingColorSpace),Me=b.colorSpace===ii?null:vt.getPrimaries(b.colorSpace),Oe=b.colorSpace===ii||Ge===Me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const ze=b.isCompressedTexture||b.image[0].isCompressedTexture,Ee=b.image[0]&&b.image[0].isDataTexture,Pe=[];for(let B=0;B<6;B++)!ze&&!Ee?Pe[B]=C(b.image[B],!0,a.maxCubemapSize):Pe[B]=Ee?b.image[B].image:b.image[B],Pe[B]=Ft(b,Pe[B]);const je=Pe[0],ke=o.convert(b.format,b.colorSpace),be=o.convert(b.type),et=U(b.internalFormat,ke,be,b.colorSpace),z=b.isVideoTexture!==!0,Se=oe.__version===void 0||re===!0,Te=fe.dataReady;let Le=G(b,je);Ze(r.TEXTURE_CUBE_MAP,b);let H;if(ze){z&&Se&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Le,et,je.width,je.height);for(let B=0;B<6;B++){H=Pe[B].mipmaps;for(let De=0;De<H.length;De++){const Ke=H[De];b.format!==Mn?ke!==null?z?Te&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,De,0,0,Ke.width,Ke.height,ke,Ke.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,De,et,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?Te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,De,0,0,Ke.width,Ke.height,ke,be,Ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,De,et,Ke.width,Ke.height,0,ke,be,Ke.data)}}}else{if(H=b.mipmaps,z&&Se){H.length>0&&Le++;const B=Mt(Pe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Le,et,B.width,B.height)}for(let B=0;B<6;B++)if(Ee){z?Te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,Pe[B].width,Pe[B].height,ke,be,Pe[B].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,et,Pe[B].width,Pe[B].height,0,ke,be,Pe[B].data);for(let De=0;De<H.length;De++){const mt=H[De].image[B].image;z?Te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,De+1,0,0,mt.width,mt.height,ke,be,mt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,De+1,et,mt.width,mt.height,0,ke,be,mt.data)}}else{z?Te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,ke,be,Pe[B]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,et,ke,be,Pe[B]);for(let De=0;De<H.length;De++){const Ke=H[De];z?Te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,De+1,0,0,ke,be,Ke.image[B]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,De+1,et,ke,be,Ke.image[B])}}}S(b)&&_(r.TEXTURE_CUBE_MAP),oe.__version=fe.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function le(I,b,j,re,fe,oe){const Ge=o.convert(j.format,j.colorSpace),Me=o.convert(j.type),Oe=U(j.internalFormat,Ge,Me,j.colorSpace),ze=n.get(b),Ee=n.get(j);if(Ee.__renderTarget=b,!ze.__hasExternalTextures){const Pe=Math.max(1,b.width>>oe),je=Math.max(1,b.height>>oe);fe===r.TEXTURE_3D||fe===r.TEXTURE_2D_ARRAY?t.texImage3D(fe,oe,Oe,Pe,je,b.depth,0,Ge,Me,null):t.texImage2D(fe,oe,Oe,Pe,je,0,Ge,Me,null)}t.bindFramebuffer(r.FRAMEBUFFER,I),Ie(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,re,fe,Ee.__webglTexture,0,Dt(b)):(fe===r.TEXTURE_2D||fe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,re,fe,Ee.__webglTexture,oe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ye(I,b,j){if(r.bindRenderbuffer(r.RENDERBUFFER,I),b.depthBuffer){const re=b.depthTexture,fe=re&&re.isDepthTexture?re.type:null,oe=F(b.stencilBuffer,fe),Ge=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Me=Dt(b);Ie(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Me,oe,b.width,b.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,Me,oe,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,oe,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ge,r.RENDERBUFFER,I)}else{const re=b.textures;for(let fe=0;fe<re.length;fe++){const oe=re[fe],Ge=o.convert(oe.format,oe.colorSpace),Me=o.convert(oe.type),Oe=U(oe.internalFormat,Ge,Me,oe.colorSpace),ze=Dt(b);j&&Ie(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ze,Oe,b.width,b.height):Ie(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ze,Oe,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Oe,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ve(I,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const re=n.get(b.depthTexture);re.__renderTarget=b,(!re.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ue(b.depthTexture,0);const fe=re.__webglTexture,oe=Dt(b);if(b.depthTexture.format===yr)Ie(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,fe,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,fe,0);else if(b.depthTexture.format===Mr)Ie(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,fe,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function ct(I){const b=n.get(I),j=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){const re=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),re){const fe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,re.removeEventListener("dispose",fe)};re.addEventListener("dispose",fe),b.__depthDisposeCallback=fe}b.__boundDepthTexture=re}if(I.depthTexture&&!b.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");const re=I.texture.mipmaps;re&&re.length>0?Ve(b.__webglFramebuffer[0],I):Ve(b.__webglFramebuffer,I)}else if(j){b.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[re]),b.__webglDepthbuffer[re]===void 0)b.__webglDepthbuffer[re]=r.createRenderbuffer(),ye(b.__webglDepthbuffer[re],I,!1);else{const fe=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=b.__webglDepthbuffer[re];r.bindRenderbuffer(r.RENDERBUFFER,oe),r.framebufferRenderbuffer(r.FRAMEBUFFER,fe,r.RENDERBUFFER,oe)}}else{const re=I.texture.mipmaps;if(re&&re.length>0?t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),ye(b.__webglDepthbuffer,I,!1);else{const fe=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,oe),r.framebufferRenderbuffer(r.FRAMEBUFFER,fe,r.RENDERBUFFER,oe)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function At(I,b,j){const re=n.get(I);b!==void 0&&le(re.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),j!==void 0&&ct(I)}function N(I){const b=I.texture,j=n.get(I),re=n.get(b);I.addEventListener("dispose",W);const fe=I.textures,oe=I.isWebGLCubeRenderTarget===!0,Ge=fe.length>1;if(Ge||(re.__webglTexture===void 0&&(re.__webglTexture=r.createTexture()),re.__version=b.version,u.memory.textures++),oe){j.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer[Me]=[];for(let Oe=0;Oe<b.mipmaps.length;Oe++)j.__webglFramebuffer[Me][Oe]=r.createFramebuffer()}else j.__webglFramebuffer[Me]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer=[];for(let Me=0;Me<b.mipmaps.length;Me++)j.__webglFramebuffer[Me]=r.createFramebuffer()}else j.__webglFramebuffer=r.createFramebuffer();if(Ge)for(let Me=0,Oe=fe.length;Me<Oe;Me++){const ze=n.get(fe[Me]);ze.__webglTexture===void 0&&(ze.__webglTexture=r.createTexture(),u.memory.textures++)}if(I.samples>0&&Ie(I)===!1){j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Me=0;Me<fe.length;Me++){const Oe=fe[Me];j.__webglColorRenderbuffer[Me]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,j.__webglColorRenderbuffer[Me]);const ze=o.convert(Oe.format,Oe.colorSpace),Ee=o.convert(Oe.type),Pe=U(Oe.internalFormat,ze,Ee,Oe.colorSpace,I.isXRRenderTarget===!0),je=Dt(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,je,Pe,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,j.__webglColorRenderbuffer[Me])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),ye(j.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(oe){t.bindTexture(r.TEXTURE_CUBE_MAP,re.__webglTexture),Ze(r.TEXTURE_CUBE_MAP,b);for(let Me=0;Me<6;Me++)if(b.mipmaps&&b.mipmaps.length>0)for(let Oe=0;Oe<b.mipmaps.length;Oe++)le(j.__webglFramebuffer[Me][Oe],I,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Oe);else le(j.__webglFramebuffer[Me],I,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);S(b)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let Me=0,Oe=fe.length;Me<Oe;Me++){const ze=fe[Me],Ee=n.get(ze);let Pe=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Pe=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Pe,Ee.__webglTexture),Ze(Pe,ze),le(j.__webglFramebuffer,I,ze,r.COLOR_ATTACHMENT0+Me,Pe,0),S(ze)&&_(Pe)}t.unbindTexture()}else{let Me=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Me=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Me,re.__webglTexture),Ze(Me,b),b.mipmaps&&b.mipmaps.length>0)for(let Oe=0;Oe<b.mipmaps.length;Oe++)le(j.__webglFramebuffer[Oe],I,b,r.COLOR_ATTACHMENT0,Me,Oe);else le(j.__webglFramebuffer,I,b,r.COLOR_ATTACHMENT0,Me,0);S(b)&&_(Me),t.unbindTexture()}I.depthBuffer&&ct(I)}function xt(I){const b=I.textures;for(let j=0,re=b.length;j<re;j++){const fe=b[j];if(S(fe)){const oe=k(I),Ge=n.get(fe).__webglTexture;t.bindTexture(oe,Ge),_(oe),t.unbindTexture()}}}const Je=[],qe=[];function Ne(I){if(I.samples>0){if(Ie(I)===!1){const b=I.textures,j=I.width,re=I.height;let fe=r.COLOR_BUFFER_BIT;const oe=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ge=n.get(I),Me=b.length>1;if(Me)for(let ze=0;ze<b.length;ze++)t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ze,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ze,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer);const Oe=I.texture.mipmaps;Oe&&Oe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let ze=0;ze<b.length;ze++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(fe|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(fe|=r.STENCIL_BUFFER_BIT)),Me){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[ze]);const Ee=n.get(b[ze]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ee,0)}r.blitFramebuffer(0,0,j,re,0,0,j,re,fe,r.NEAREST),p===!0&&(Je.length=0,qe.length=0,Je.push(r.COLOR_ATTACHMENT0+ze),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Je.push(oe),qe.push(oe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,qe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Me)for(let ze=0;ze<b.length;ze++){t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ze,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[ze]);const Ee=n.get(b[ze]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ze,r.TEXTURE_2D,Ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&p){const b=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function Dt(I){return Math.min(a.maxSamples,I.samples)}function Ie(I){const b=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ye(I){const b=u.render.frame;g.get(I)!==b&&(g.set(I,b),I.update())}function Ft(I,b){const j=I.colorSpace,re=I.format,fe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||j!==tr&&j!==ii&&(vt.getTransfer(j)===wt?(re!==Mn||fe!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),b}function Mt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(f.width=I.naturalWidth||I.width,f.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(f.width=I.displayWidth,f.height=I.displayHeight):(f.width=I.width,f.height=I.height),f}this.allocateTextureUnit=ie,this.resetTextureUnits=Z,this.setTexture2D=ue,this.setTexture2DArray=ae,this.setTexture3D=ve,this.setTextureCube=ee,this.rebindTextures=At,this.setupRenderTarget=N,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Ie}function RE(r,e){function t(n,a=ii){let o;const u=vt.getTransfer(a);if(n===Un)return r.UNSIGNED_BYTE;if(n===Ao)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ro)return r.UNSIGNED_SHORT_5_5_5_1;if(n===kc)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Bc)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Nc)return r.BYTE;if(n===Oc)return r.SHORT;if(n===Er)return r.UNSIGNED_SHORT;if(n===bo)return r.INT;if(n===Ri)return r.UNSIGNED_INT;if(n===jn)return r.FLOAT;if(n===wr)return r.HALF_FLOAT;if(n===zc)return r.ALPHA;if(n===Hc)return r.RGB;if(n===Mn)return r.RGBA;if(n===yr)return r.DEPTH_COMPONENT;if(n===Mr)return r.DEPTH_STENCIL;if(n===Vc)return r.RED;if(n===Co)return r.RED_INTEGER;if(n===Gc)return r.RG;if(n===Po)return r.RG_INTEGER;if(n===Do)return r.RGBA_INTEGER;if(n===Ss||n===ys||n===Ms||n===Ts)if(u===wt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ss)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ys)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ms)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ts)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ss)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ys)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ms)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ts)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ja||n===qa||n===Ya||n===Ka)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===ja)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ya)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ka)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Za||n===Ja||n===Qa)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Za||n===Ja)return u===wt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Qa)return u===wt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===eo||n===to||n===no||n===io||n===ro||n===so||n===ao||n===oo||n===lo||n===co||n===uo||n===ho||n===fo||n===po)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===eo)return u===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===to)return u===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===no)return u===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===io)return u===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ro)return u===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===so)return u===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ao)return u===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oo)return u===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lo)return u===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===co)return u===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uo)return u===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ho)return u===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fo)return u===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===po)return u===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mo||n===_o||n===go)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===mo)return u===wt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_o)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===go)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vo||n===xo||n===Eo||n===So)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===vo)return o.COMPRESSED_RED_RGTC1_EXT;if(n===xo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Eo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===So)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Sr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const CE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PE=`
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

}`;class DE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ru(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new oi({vertexShader:CE,fragmentShader:PE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tn(new Cr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LE extends Di{constructor(e,t){super();const n=this;let a=null,o=1,u=null,h="local-floor",p=1,f=null,g=null,v=null,x=null,E=null,A=null;const C=typeof XRWebGLBinding<"u",S=new DE,_={},k=t.getContextAttributes();let U=null,F=null;const G=[],P=[],W=new tt;let K=null;const L=new pn;L.viewport=new Ut;const T=new pn;T.viewport=new Ut;const O=[L,T],Z=new Z_;let ie=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let de=G[ce];return de===void 0&&(de=new Sa,G[ce]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ce){let de=G[ce];return de===void 0&&(de=new Sa,G[ce]=de),de.getGripSpace()},this.getHand=function(ce){let de=G[ce];return de===void 0&&(de=new Sa,G[ce]=de),de.getHandSpace()};function ue(ce){const de=P.indexOf(ce.inputSource);if(de===-1)return;const le=G[de];le!==void 0&&(le.update(ce.inputSource,ce.frame,f||u),le.dispatchEvent({type:ce.type,data:ce.inputSource}))}function ae(){a.removeEventListener("select",ue),a.removeEventListener("selectstart",ue),a.removeEventListener("selectend",ue),a.removeEventListener("squeeze",ue),a.removeEventListener("squeezestart",ue),a.removeEventListener("squeezeend",ue),a.removeEventListener("end",ae),a.removeEventListener("inputsourceschange",ve);for(let ce=0;ce<G.length;ce++){const de=P[ce];de!==null&&(P[ce]=null,G[ce].disconnect(de))}ie=null,ne=null,S.reset();for(const ce in _)delete _[ce];e.setRenderTarget(U),E=null,x=null,v=null,a=null,F=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(K),e.setSize(W.width,W.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){o=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){h=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||u},this.setReferenceSpace=function(ce){f=ce},this.getBaseLayer=function(){return x!==null?x:E},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(a,t)),v},this.getFrame=function(){return A},this.getSession=function(){return a},this.setSession=async function(ce){if(a=ce,a!==null){if(U=e.getRenderTarget(),a.addEventListener("select",ue),a.addEventListener("selectstart",ue),a.addEventListener("selectend",ue),a.addEventListener("squeeze",ue),a.addEventListener("squeezestart",ue),a.addEventListener("squeezeend",ue),a.addEventListener("end",ae),a.addEventListener("inputsourceschange",ve),k.xrCompatible!==!0&&await t.makeXRCompatible(),K=e.getPixelRatio(),e.getSize(W),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,ye=null,Ve=null;k.depth&&(Ve=k.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=k.stencil?Mr:yr,ye=k.stencil?Sr:Ri);const ct={colorFormat:t.RGBA8,depthFormat:Ve,scaleFactor:o};v=this.getBinding(),x=v.createProjectionLayer(ct),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),F=new Pi(x.textureWidth,x.textureHeight,{format:Mn,type:Un,depthTexture:new iu(x.textureWidth,x.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:k.stencil,colorSpace:e.outputColorSpace,samples:k.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const le={antialias:k.antialias,alpha:!0,depth:k.depth,stencil:k.stencil,framebufferScaleFactor:o};E=new XRWebGLLayer(a,t,le),a.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),F=new Pi(E.framebufferWidth,E.framebufferHeight,{format:Mn,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:k.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(p),f=null,u=await a.requestReferenceSpace(h),Qe.setContext(a),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function ve(ce){for(let de=0;de<ce.removed.length;de++){const le=ce.removed[de],ye=P.indexOf(le);ye>=0&&(P[ye]=null,G[ye].disconnect(le))}for(let de=0;de<ce.added.length;de++){const le=ce.added[de];let ye=P.indexOf(le);if(ye===-1){for(let ct=0;ct<G.length;ct++)if(ct>=P.length){P.push(le),ye=ct;break}else if(P[ct]===null){P[ct]=le,ye=ct;break}if(ye===-1)break}const Ve=G[ye];Ve&&Ve.connect(le)}}const ee=new Y,we=new Y;function Fe(ce,de,le){ee.setFromMatrixPosition(de.matrixWorld),we.setFromMatrixPosition(le.matrixWorld);const ye=ee.distanceTo(we),Ve=de.projectionMatrix.elements,ct=le.projectionMatrix.elements,At=Ve[14]/(Ve[10]-1),N=Ve[14]/(Ve[10]+1),xt=(Ve[9]+1)/Ve[5],Je=(Ve[9]-1)/Ve[5],qe=(Ve[8]-1)/Ve[0],Ne=(ct[8]+1)/ct[0],Dt=At*qe,Ie=At*Ne,Ye=ye/(-qe+Ne),Ft=Ye*-qe;if(de.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(Ft),ce.translateZ(Ye),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),Ve[10]===-1)ce.projectionMatrix.copy(de.projectionMatrix),ce.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Mt=At+Ye,I=N+Ye,b=Dt-Ft,j=Ie+(ye-Ft),re=xt*N/I*Mt,fe=Je*N/I*Mt;ce.projectionMatrix.makePerspective(b,j,re,fe,Mt,I),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function Be(ce,de){de===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(de.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(a===null)return;let de=ce.near,le=ce.far;S.texture!==null&&(S.depthNear>0&&(de=S.depthNear),S.depthFar>0&&(le=S.depthFar)),Z.near=T.near=L.near=de,Z.far=T.far=L.far=le,(ie!==Z.near||ne!==Z.far)&&(a.updateRenderState({depthNear:Z.near,depthFar:Z.far}),ie=Z.near,ne=Z.far),Z.layers.mask=ce.layers.mask|6,L.layers.mask=Z.layers.mask&3,T.layers.mask=Z.layers.mask&5;const ye=ce.parent,Ve=Z.cameras;Be(Z,ye);for(let ct=0;ct<Ve.length;ct++)Be(Ve[ct],ye);Ve.length===2?Fe(Z,L,T):Z.projectionMatrix.copy(L.projectionMatrix),Ze(ce,Z,ye)};function Ze(ce,de,le){le===null?ce.matrix.copy(de.matrixWorld):(ce.matrix.copy(le.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(de.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(de.projectionMatrix),ce.projectionMatrixInverse.copy(de.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=yo*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(x===null&&E===null))return p},this.setFoveation=function(ce){p=ce,x!==null&&(x.fixedFoveation=ce),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=ce)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Z)},this.getCameraTexture=function(ce){return _[ce]};let gt=null;function nt(ce,de){if(g=de.getViewerPose(f||u),A=de,g!==null){const le=g.views;E!==null&&(e.setRenderTargetFramebuffer(F,E.framebuffer),e.setRenderTarget(F));let ye=!1;le.length!==Z.cameras.length&&(Z.cameras.length=0,ye=!0);for(let N=0;N<le.length;N++){const xt=le[N];let Je=null;if(E!==null)Je=E.getViewport(xt);else{const Ne=v.getViewSubImage(x,xt);Je=Ne.viewport,N===0&&(e.setRenderTargetTextures(F,Ne.colorTexture,Ne.depthStencilTexture),e.setRenderTarget(F))}let qe=O[N];qe===void 0&&(qe=new pn,qe.layers.enable(N),qe.viewport=new Ut,O[N]=qe),qe.matrix.fromArray(xt.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(xt.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(Je.x,Je.y,Je.width,Je.height),N===0&&(Z.matrix.copy(qe.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),ye===!0&&Z.cameras.push(qe)}const Ve=a.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&C){v=n.getBinding();const N=v.getDepthInformation(le[0]);N&&N.isValid&&N.texture&&S.init(N,a.renderState)}if(Ve&&Ve.includes("camera-access")&&C){e.state.unbindTexture(),v=n.getBinding();for(let N=0;N<le.length;N++){const xt=le[N].camera;if(xt){let Je=_[xt];Je||(Je=new ru,_[xt]=Je);const qe=v.getCameraImage(xt);Je.sourceTexture=qe}}}}for(let le=0;le<G.length;le++){const ye=P[le],Ve=G[le];ye!==null&&Ve!==void 0&&Ve.update(ye,de,f||u)}gt&&gt(ce,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),A=null}const Qe=new ou;Qe.setAnimationLoop(nt),this.setAnimationLoop=function(ce){gt=ce},this.dispose=function(){}}}const yi=new Nn,FE=new Nt;function IE(r,e){function t(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function n(S,_){_.color.getRGB(S.fogColor.value,Qc(r)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function a(S,_,k,U,F){_.isMeshBasicMaterial||_.isMeshLambertMaterial?o(S,_):_.isMeshToonMaterial?(o(S,_),v(S,_)):_.isMeshPhongMaterial?(o(S,_),g(S,_)):_.isMeshStandardMaterial?(o(S,_),x(S,_),_.isMeshPhysicalMaterial&&E(S,_,F)):_.isMeshMatcapMaterial?(o(S,_),A(S,_)):_.isMeshDepthMaterial?o(S,_):_.isMeshDistanceMaterial?(o(S,_),C(S,_)):_.isMeshNormalMaterial?o(S,_):_.isLineBasicMaterial?(u(S,_),_.isLineDashedMaterial&&h(S,_)):_.isPointsMaterial?p(S,_,k,U):_.isSpriteMaterial?f(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function o(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,t(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===on&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,t(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===on&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,t(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,t(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const k=e.get(_),U=k.envMap,F=k.envMapRotation;U&&(S.envMap.value=U,yi.copy(F),yi.x*=-1,yi.y*=-1,yi.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),S.envMapRotation.value.setFromMatrix4(FE.makeRotationFromEuler(yi)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,S.aoMapTransform))}function u(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform))}function h(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function p(S,_,k,U){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*k,S.scale.value=U*.5,_.map&&(S.map.value=_.map,t(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function f(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function v(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function E(S,_,k){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===on&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=k.texture,S.transmissionSamplerSize.value.set(k.width,k.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,S.specularIntensityMapTransform))}function A(S,_){_.matcap&&(S.matcap.value=_.matcap)}function C(S,_){const k=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(k.matrixWorld),S.nearDistance.value=k.shadow.camera.near,S.farDistance.value=k.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function UE(r,e,t,n){let a={},o={},u=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(k,U){const F=U.program;n.uniformBlockBinding(k,F)}function f(k,U){let F=a[k.id];F===void 0&&(A(k),F=g(k),a[k.id]=F,k.addEventListener("dispose",S));const G=U.program;n.updateUBOMapping(k,G);const P=e.render.frame;o[k.id]!==P&&(x(k),o[k.id]=P)}function g(k){const U=v();k.__bindingPointIndex=U;const F=r.createBuffer(),G=k.__size,P=k.usage;return r.bindBuffer(r.UNIFORM_BUFFER,F),r.bufferData(r.UNIFORM_BUFFER,G,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,F),F}function v(){for(let k=0;k<h;k++)if(u.indexOf(k)===-1)return u.push(k),k;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(k){const U=a[k.id],F=k.uniforms,G=k.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let P=0,W=F.length;P<W;P++){const K=Array.isArray(F[P])?F[P]:[F[P]];for(let L=0,T=K.length;L<T;L++){const O=K[L];if(E(O,P,L,G)===!0){const Z=O.__offset,ie=Array.isArray(O.value)?O.value:[O.value];let ne=0;for(let ue=0;ue<ie.length;ue++){const ae=ie[ue],ve=C(ae);typeof ae=="number"||typeof ae=="boolean"?(O.__data[0]=ae,r.bufferSubData(r.UNIFORM_BUFFER,Z+ne,O.__data)):ae.isMatrix3?(O.__data[0]=ae.elements[0],O.__data[1]=ae.elements[1],O.__data[2]=ae.elements[2],O.__data[3]=0,O.__data[4]=ae.elements[3],O.__data[5]=ae.elements[4],O.__data[6]=ae.elements[5],O.__data[7]=0,O.__data[8]=ae.elements[6],O.__data[9]=ae.elements[7],O.__data[10]=ae.elements[8],O.__data[11]=0):(ae.toArray(O.__data,ne),ne+=ve.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Z,O.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function E(k,U,F,G){const P=k.value,W=U+"_"+F;if(G[W]===void 0)return typeof P=="number"||typeof P=="boolean"?G[W]=P:G[W]=P.clone(),!0;{const K=G[W];if(typeof P=="number"||typeof P=="boolean"){if(K!==P)return G[W]=P,!0}else if(K.equals(P)===!1)return K.copy(P),!0}return!1}function A(k){const U=k.uniforms;let F=0;const G=16;for(let W=0,K=U.length;W<K;W++){const L=Array.isArray(U[W])?U[W]:[U[W]];for(let T=0,O=L.length;T<O;T++){const Z=L[T],ie=Array.isArray(Z.value)?Z.value:[Z.value];for(let ne=0,ue=ie.length;ne<ue;ne++){const ae=ie[ne],ve=C(ae),ee=F%G,we=ee%ve.boundary,Fe=ee+we;F+=we,Fe!==0&&G-Fe<ve.storage&&(F+=G-Fe),Z.__data=new Float32Array(ve.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=F,F+=ve.storage}}}const P=F%G;return P>0&&(F+=G-P),k.__size=F,k.__cache={},this}function C(k){const U={boundary:0,storage:0};return typeof k=="number"||typeof k=="boolean"?(U.boundary=4,U.storage=4):k.isVector2?(U.boundary=8,U.storage=8):k.isVector3||k.isColor?(U.boundary=16,U.storage=12):k.isVector4?(U.boundary=16,U.storage=16):k.isMatrix3?(U.boundary=48,U.storage=48):k.isMatrix4?(U.boundary=64,U.storage=64):k.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",k),U}function S(k){const U=k.target;U.removeEventListener("dispose",S);const F=u.indexOf(U.__bindingPointIndex);u.splice(F,1),r.deleteBuffer(a[U.id]),delete a[U.id],delete o[U.id]}function _(){for(const k in a)r.deleteBuffer(a[k]);u=[],a={},o={}}return{bind:p,update:f,dispose:_}}class NE{constructor(e={}){const{canvas:t=f_(),context:n=null,depth:a=!0,stencil:o=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:f=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let E;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=n.getContextAttributes().alpha}else E=u;const A=new Uint32Array(4),C=new Int32Array(4);let S=null,_=null;const k=[],U=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let G=!1;this._outputColorSpace=hn;let P=0,W=0,K=null,L=-1,T=null;const O=new Ut,Z=new Ut;let ie=null;const ne=new dt(0);let ue=0,ae=t.width,ve=t.height,ee=1,we=null,Fe=null;const Be=new Ut(0,0,ae,ve),Ze=new Ut(0,0,ae,ve);let gt=!1;const nt=new Io;let Qe=!1,ce=!1;const de=new Nt,le=new Y,ye=new Ut,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function At(){return K===null?ee:1}let N=n;function xt(R,X){return t.getContext(R,X)}try{const R={alpha:!0,depth:a,stencil:o,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:f,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wo}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",H,!1),N===null){const X="webgl2";if(N=xt(X,R),N===null)throw xt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Je,qe,Ne,Dt,Ie,Ye,Ft,Mt,I,b,j,re,fe,oe,Ge,Me,Oe,ze,Ee,Pe,je,ke,be,et;function z(){Je=new $0(N),Je.init(),ke=new RE(N,Je),qe=new B0(N,Je,e,ke),Ne=new bE(N,Je),qe.reversedDepthBuffer&&x&&Ne.buffers.depth.setReversed(!0),Dt=new Y0(N),Ie=new fE,Ye=new AE(N,Je,Ne,Ie,qe,ke,Dt),Ft=new H0(F),Mt=new X0(F),I=new tg(N),be=new O0(N,I),b=new j0(N,I,Dt,be),j=new Z0(N,b,I,Dt),Ee=new K0(N,qe,Ye),Me=new z0(Ie),re=new dE(F,Ft,Mt,Je,qe,be,Me),fe=new IE(F,Ie),oe=new mE,Ge=new SE(Je),ze=new N0(F,Ft,Mt,Ne,j,E,p),Oe=new TE(F,j,qe),et=new UE(N,Dt,qe,Ne),Pe=new k0(N,Je,Dt),je=new q0(N,Je,Dt),Dt.programs=re.programs,F.capabilities=qe,F.extensions=Je,F.properties=Ie,F.renderLists=oe,F.shadowMap=Oe,F.state=Ne,F.info=Dt}z();const Se=new LE(F,N);this.xr=Se,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const R=Je.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Je.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(R){R!==void 0&&(ee=R,this.setSize(ae,ve,!1))},this.getSize=function(R){return R.set(ae,ve)},this.setSize=function(R,X,J=!0){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=R,ve=X,t.width=Math.floor(R*ee),t.height=Math.floor(X*ee),J===!0&&(t.style.width=R+"px",t.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(ae*ee,ve*ee).floor()},this.setDrawingBufferSize=function(R,X,J){ae=R,ve=X,ee=J,t.width=Math.floor(R*J),t.height=Math.floor(X*J),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(Be)},this.setViewport=function(R,X,J,Q){R.isVector4?Be.set(R.x,R.y,R.z,R.w):Be.set(R,X,J,Q),Ne.viewport(O.copy(Be).multiplyScalar(ee).round())},this.getScissor=function(R){return R.copy(Ze)},this.setScissor=function(R,X,J,Q){R.isVector4?Ze.set(R.x,R.y,R.z,R.w):Ze.set(R,X,J,Q),Ne.scissor(Z.copy(Ze).multiplyScalar(ee).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(R){Ne.setScissorTest(gt=R)},this.setOpaqueSort=function(R){we=R},this.setTransparentSort=function(R){Fe=R},this.getClearColor=function(R){return R.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,J=!0){let Q=0;if(R){let $=!1;if(K!==null){const ge=K.texture.format;$=ge===Do||ge===Po||ge===Co}if($){const ge=K.texture.type,Ae=ge===Un||ge===Ri||ge===Er||ge===Sr||ge===Ao||ge===Ro,Ue=ze.getClearColor(),Ce=ze.getClearAlpha(),$e=Ue.r,xe=Ue.g,We=Ue.b;Ae?(A[0]=$e,A[1]=xe,A[2]=We,A[3]=Ce,N.clearBufferuiv(N.COLOR,0,A)):(C[0]=$e,C[1]=xe,C[2]=We,C[3]=Ce,N.clearBufferiv(N.COLOR,0,C))}else Q|=N.COLOR_BUFFER_BIT}X&&(Q|=N.DEPTH_BUFFER_BIT),J&&(Q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",H,!1),ze.dispose(),oe.dispose(),Ge.dispose(),Ie.dispose(),Ft.dispose(),Mt.dispose(),j.dispose(),be.dispose(),et.dispose(),re.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Ot),Se.removeEventListener("sessionend",li),kn.stop()};function Te(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const R=Dt.autoReset,X=Oe.enabled,J=Oe.autoUpdate,Q=Oe.needsUpdate,$=Oe.type;z(),Dt.autoReset=R,Oe.enabled=X,Oe.autoUpdate=J,Oe.needsUpdate=Q,Oe.type=$}function H(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function B(R){const X=R.target;X.removeEventListener("dispose",B),De(X)}function De(R){Ke(R),Ie.remove(R)}function Ke(R){const X=Ie.get(R).programs;X!==void 0&&(X.forEach(function(J){re.releaseProgram(J)}),R.isShaderMaterial&&re.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,J,Q,$,ge){X===null&&(X=Ve);const Ae=$.isMesh&&$.matrixWorld.determinant()<0,Ue=Fr(R,X,J,Q,$);Ne.setMaterial(Q,Ae);let Ce=J.index,$e=1;if(Q.wireframe===!0){if(Ce=b.getWireframeAttribute(J),Ce===void 0)return;$e=2}const xe=J.drawRange,We=J.attributes.position;let lt=xe.start*$e,St=(xe.start+xe.count)*$e;ge!==null&&(lt=Math.max(lt,ge.start*$e),St=Math.min(St,(ge.start+ge.count)*$e)),Ce!==null?(lt=Math.max(lt,0),St=Math.min(St,Ce.count)):We!=null&&(lt=Math.max(lt,0),St=Math.min(St,We.count));const It=St-lt;if(It<0||It===1/0)return;be.setup($,Q,Ue,J,Ce);let Rt,yt=Pe;if(Ce!==null&&(Rt=I.get(Ce),yt=je,yt.setIndex(Rt)),$.isMesh)Q.wireframe===!0?(Ne.setLineWidth(Q.wireframeLinewidth*At()),yt.setMode(N.LINES)):yt.setMode(N.TRIANGLES);else if($.isLine){let Xe=Q.linewidth;Xe===void 0&&(Xe=1),Ne.setLineWidth(Xe*At()),$.isLineSegments?yt.setMode(N.LINES):$.isLineLoop?yt.setMode(N.LINE_LOOP):yt.setMode(N.LINE_STRIP)}else $.isPoints?yt.setMode(N.POINTS):$.isSprite&&yt.setMode(N.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Tr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))yt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Xe=$._multiDrawStarts,Ct=$._multiDrawCounts,pt=$._multiDrawCount,Yt=Ce?I.get(Ce).bytesPerElement:1,y=Ie.get(Q).currentProgram.getUniforms();for(let ut=0;ut<pt;ut++)y.setValue(N,"_gl_DrawID",ut),yt.render(Xe[ut]/Yt,Ct[ut])}else if($.isInstancedMesh)yt.renderInstances(lt,It,$.count);else if(J.isInstancedBufferGeometry){const Xe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ct=Math.min(J.instanceCount,Xe);yt.renderInstances(lt,It,Ct)}else yt.render(lt,It)};function mt(R,X,J){R.transparent===!0&&R.side===Ln&&R.forceSinglePass===!1?(R.side=on,R.needsUpdate=!0,ui(R,X,J),R.side=ai,R.needsUpdate=!0,ui(R,X,J),R.side=Ln):ui(R,X,J)}this.compile=function(R,X,J=null){J===null&&(J=R),_=Ge.get(J),_.init(X),U.push(_),J.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(_.pushLight($),$.castShadow&&_.pushShadow($))}),R!==J&&R.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(_.pushLight($),$.castShadow&&_.pushShadow($))}),_.setupLights();const Q=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const ge=$.material;if(ge)if(Array.isArray(ge))for(let Ae=0;Ae<ge.length;Ae++){const Ue=ge[Ae];mt(Ue,J,$),Q.add(Ue)}else mt(ge,J,$),Q.add(ge)}),_=U.pop(),Q},this.compileAsync=function(R,X,J=null){const Q=this.compile(R,X,J);return new Promise($=>{function ge(){if(Q.forEach(function(Ae){Ie.get(Ae).currentProgram.isReady()&&Q.delete(Ae)}),Q.size===0){$(R);return}setTimeout(ge,10)}Je.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let rt=null;function _n(R){rt&&rt(R)}function Ot(){kn.stop()}function li(){kn.start()}const kn=new ou;kn.setAnimationLoop(_n),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(R){rt=R,Se.setAnimationLoop(R),R===null?kn.stop():kn.start()},Se.addEventListener("sessionstart",Ot),Se.addEventListener("sessionend",li),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(X),X=Se.getCamera()),R.isScene===!0&&R.onBeforeRender(F,R,X,K),_=Ge.get(R,U.length),_.init(X),U.push(_),de.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),nt.setFromProjectionMatrix(de,In,X.reversedDepth),ce=this.localClippingEnabled,Qe=Me.init(this.clippingPlanes,ce),S=oe.get(R,k.length),S.init(),k.push(S),Se.enabled===!0&&Se.isPresenting===!0){const ge=F.xr.getDepthSensingMesh();ge!==null&&sr(ge,X,-1/0,F.sortObjects)}sr(R,X,0,F.sortObjects),S.finish(),F.sortObjects===!0&&S.sort(we,Fe),ct=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,ct&&ze.addToRenderList(S,R),this.info.render.frame++,Qe===!0&&Me.beginShadows();const J=_.state.shadowsArray;Oe.render(J,R,X),Qe===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=S.opaque,$=S.transmissive;if(_.setupLights(),X.isArrayCamera){const ge=X.cameras;if($.length>0)for(let Ae=0,Ue=ge.length;Ae<Ue;Ae++){const Ce=ge[Ae];Pr(Q,$,R,Ce)}ct&&ze.render(R);for(let Ae=0,Ue=ge.length;Ae<Ue;Ae++){const Ce=ge[Ae];nn(S,R,Ce,Ce.viewport)}}else $.length>0&&Pr(Q,$,R,X),ct&&ze.render(R),nn(S,R,X);K!==null&&W===0&&(Ye.updateMultisampleRenderTarget(K),Ye.updateRenderTargetMipmap(K)),R.isScene===!0&&R.onAfterRender(F,R,X),be.resetDefaultState(),L=-1,T=null,U.pop(),U.length>0?(_=U[U.length-1],Qe===!0&&Me.setGlobalState(F.clippingPlanes,_.state.camera)):_=null,k.pop(),k.length>0?S=k[k.length-1]:S=null};function sr(R,X,J,Q){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)J=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||nt.intersectsSprite(R)){Q&&ye.setFromMatrixPosition(R.matrixWorld).applyMatrix4(de);const Ae=j.update(R),Ue=R.material;Ue.visible&&S.push(R,Ae,Ue,J,ye.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||nt.intersectsObject(R))){const Ae=j.update(R),Ue=R.material;if(Q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ye.copy(R.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),ye.copy(Ae.boundingSphere.center)),ye.applyMatrix4(R.matrixWorld).applyMatrix4(de)),Array.isArray(Ue)){const Ce=Ae.groups;for(let $e=0,xe=Ce.length;$e<xe;$e++){const We=Ce[$e],lt=Ue[We.materialIndex];lt&&lt.visible&&S.push(R,Ae,lt,J,ye.z,We)}}else Ue.visible&&S.push(R,Ae,Ue,J,ye.z,null)}}const ge=R.children;for(let Ae=0,Ue=ge.length;Ae<Ue;Ae++)sr(ge[Ae],X,J,Q)}function nn(R,X,J,Q){const $=R.opaque,ge=R.transmissive,Ae=R.transparent;_.setupLightsView(J),Qe===!0&&Me.setGlobalState(F.clippingPlanes,J),Q&&Ne.viewport(O.copy(Q)),$.length>0&&Bn($,X,J),ge.length>0&&Bn(ge,X,J),Ae.length>0&&Bn(Ae,X,J),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function Pr(R,X,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[Q.id]===void 0&&(_.state.transmissionRenderTarget[Q.id]=new Pi(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?wr:Un,minFilter:Ai,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));const ge=_.state.transmissionRenderTarget[Q.id],Ae=Q.viewport||O;ge.setSize(Ae.z*F.transmissionResolutionScale,Ae.w*F.transmissionResolutionScale);const Ue=F.getRenderTarget(),Ce=F.getActiveCubeFace(),$e=F.getActiveMipmapLevel();F.setRenderTarget(ge),F.getClearColor(ne),ue=F.getClearAlpha(),ue<1&&F.setClearColor(16777215,.5),F.clear(),ct&&ze.render(J);const xe=F.toneMapping;F.toneMapping=si;const We=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),_.setupLightsView(Q),Qe===!0&&Me.setGlobalState(F.clippingPlanes,Q),Bn(R,J,Q),Ye.updateMultisampleRenderTarget(ge),Ye.updateRenderTargetMipmap(ge),Je.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let St=0,It=X.length;St<It;St++){const Rt=X[St],yt=Rt.object,Xe=Rt.geometry,Ct=Rt.material,pt=Rt.group;if(Ct.side===Ln&&yt.layers.test(Q.layers)){const Yt=Ct.side;Ct.side=on,Ct.needsUpdate=!0,ci(yt,J,Q,Xe,Ct,pt),Ct.side=Yt,Ct.needsUpdate=!0,lt=!0}}lt===!0&&(Ye.updateMultisampleRenderTarget(ge),Ye.updateRenderTargetMipmap(ge))}F.setRenderTarget(Ue,Ce,$e),F.setClearColor(ne,ue),We!==void 0&&(Q.viewport=We),F.toneMapping=xe}function Bn(R,X,J){const Q=X.isScene===!0?X.overrideMaterial:null;for(let $=0,ge=R.length;$<ge;$++){const Ae=R[$],Ue=Ae.object,Ce=Ae.geometry,$e=Ae.group;let xe=Ae.material;xe.allowOverride===!0&&Q!==null&&(xe=Q),Ue.layers.test(J.layers)&&ci(Ue,X,J,Ce,xe,$e)}}function ci(R,X,J,Q,$,ge){R.onBeforeRender(F,X,J,Q,$,ge),R.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(F,X,J,Q,R,ge),$.transparent===!0&&$.side===Ln&&$.forceSinglePass===!1?($.side=on,$.needsUpdate=!0,F.renderBufferDirect(J,X,Q,$,R,ge),$.side=ai,$.needsUpdate=!0,F.renderBufferDirect(J,X,Q,$,R,ge),$.side=Ln):F.renderBufferDirect(J,X,Q,$,R,ge),R.onAfterRender(F,X,J,Q,$,ge)}function ui(R,X,J){X.isScene!==!0&&(X=Ve);const Q=Ie.get(R),$=_.state.lights,ge=_.state.shadowsArray,Ae=$.state.version,Ue=re.getParameters(R,$.state,ge,X,J),Ce=re.getProgramCacheKey(Ue);let $e=Q.programs;Q.environment=R.isMeshStandardMaterial?X.environment:null,Q.fog=X.fog,Q.envMap=(R.isMeshStandardMaterial?Mt:Ft).get(R.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,$e===void 0&&(R.addEventListener("dispose",B),$e=new Map,Q.programs=$e);let xe=$e.get(Ce);if(xe!==void 0){if(Q.currentProgram===xe&&Q.lightsStateVersion===Ae)return Lr(R,Ue),xe}else Ue.uniforms=re.getUniforms(R),R.onBeforeCompile(Ue,F),xe=re.acquireProgram(Ue,Ce),$e.set(Ce,xe),Q.uniforms=Ue.uniforms;const We=Q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(We.clippingPlanes=Me.uniform),Lr(R,Ue),Q.needsLights=Ns(R),Q.lightsStateVersion=Ae,Q.needsLights&&(We.ambientLightColor.value=$.state.ambient,We.lightProbe.value=$.state.probe,We.directionalLights.value=$.state.directional,We.directionalLightShadows.value=$.state.directionalShadow,We.spotLights.value=$.state.spot,We.spotLightShadows.value=$.state.spotShadow,We.rectAreaLights.value=$.state.rectArea,We.ltc_1.value=$.state.rectAreaLTC1,We.ltc_2.value=$.state.rectAreaLTC2,We.pointLights.value=$.state.point,We.pointLightShadows.value=$.state.pointShadow,We.hemisphereLights.value=$.state.hemi,We.directionalShadowMap.value=$.state.directionalShadowMap,We.directionalShadowMatrix.value=$.state.directionalShadowMatrix,We.spotShadowMap.value=$.state.spotShadowMap,We.spotLightMatrix.value=$.state.spotLightMatrix,We.spotLightMap.value=$.state.spotLightMap,We.pointShadowMap.value=$.state.pointShadowMap,We.pointShadowMatrix.value=$.state.pointShadowMatrix),Q.currentProgram=xe,Q.uniformsList=null,xe}function Dr(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=bs.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function Lr(R,X){const J=Ie.get(R);J.outputColorSpace=X.outputColorSpace,J.batching=X.batching,J.batchingColor=X.batchingColor,J.instancing=X.instancing,J.instancingColor=X.instancingColor,J.instancingMorph=X.instancingMorph,J.skinning=X.skinning,J.morphTargets=X.morphTargets,J.morphNormals=X.morphNormals,J.morphColors=X.morphColors,J.morphTargetsCount=X.morphTargetsCount,J.numClippingPlanes=X.numClippingPlanes,J.numIntersection=X.numClipIntersection,J.vertexAlphas=X.vertexAlphas,J.vertexTangents=X.vertexTangents,J.toneMapping=X.toneMapping}function Fr(R,X,J,Q,$){X.isScene!==!0&&(X=Ve),Ye.resetTextureUnits();const ge=X.fog,Ae=Q.isMeshStandardMaterial?X.environment:null,Ue=K===null?F.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:tr,Ce=(Q.isMeshStandardMaterial?Mt:Ft).get(Q.envMap||Ae),$e=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,xe=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),We=!!J.morphAttributes.position,lt=!!J.morphAttributes.normal,St=!!J.morphAttributes.color;let It=si;Q.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(It=F.toneMapping);const Rt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,yt=Rt!==void 0?Rt.length:0,Xe=Ie.get(Q),Ct=_.state.lights;if(Qe===!0&&(ce===!0||R!==T)){const qt=R===T&&Q.id===L;Me.setState(Q,R,qt)}let pt=!1;Q.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Ct.state.version||Xe.outputColorSpace!==Ue||$.isBatchedMesh&&Xe.batching===!1||!$.isBatchedMesh&&Xe.batching===!0||$.isBatchedMesh&&Xe.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Xe.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Xe.instancing===!1||!$.isInstancedMesh&&Xe.instancing===!0||$.isSkinnedMesh&&Xe.skinning===!1||!$.isSkinnedMesh&&Xe.skinning===!0||$.isInstancedMesh&&Xe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Xe.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Xe.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Xe.instancingMorph===!1&&$.morphTexture!==null||Xe.envMap!==Ce||Q.fog===!0&&Xe.fog!==ge||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Me.numPlanes||Xe.numIntersection!==Me.numIntersection)||Xe.vertexAlphas!==$e||Xe.vertexTangents!==xe||Xe.morphTargets!==We||Xe.morphNormals!==lt||Xe.morphColors!==St||Xe.toneMapping!==It||Xe.morphTargetsCount!==yt)&&(pt=!0):(pt=!0,Xe.__version=Q.version);let Yt=Xe.currentProgram;pt===!0&&(Yt=ui(Q,X,$));let y=!1,ut=!1,hi=!1;const Tt=Yt.getUniforms(),zt=Xe.uniforms;if(Ne.useProgram(Yt.program)&&(y=!0,ut=!0,hi=!0),Q.id!==L&&(L=Q.id,ut=!0),y||T!==R){Ne.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Tt.setValue(N,"projectionMatrix",R.projectionMatrix),Tt.setValue(N,"viewMatrix",R.matrixWorldInverse);const Kt=Tt.map.cameraPosition;Kt!==void 0&&Kt.setValue(N,le.setFromMatrixPosition(R.matrixWorld)),qe.logarithmicDepthBuffer&&Tt.setValue(N,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Tt.setValue(N,"isOrthographic",R.isOrthographicCamera===!0),T!==R&&(T=R,ut=!0,hi=!0)}if($.isSkinnedMesh){Tt.setOptional(N,$,"bindMatrix"),Tt.setOptional(N,$,"bindMatrixInverse");const qt=$.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Tt.setValue(N,"boneTexture",qt.boneTexture,Ye))}$.isBatchedMesh&&(Tt.setOptional(N,$,"batchingTexture"),Tt.setValue(N,"batchingTexture",$._matricesTexture,Ye),Tt.setOptional(N,$,"batchingIdTexture"),Tt.setValue(N,"batchingIdTexture",$._indirectTexture,Ye),Tt.setOptional(N,$,"batchingColorTexture"),$._colorsTexture!==null&&Tt.setValue(N,"batchingColorTexture",$._colorsTexture,Ye));const rn=J.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&Ee.update($,J,Yt),(ut||Xe.receiveShadow!==$.receiveShadow)&&(Xe.receiveShadow=$.receiveShadow,Tt.setValue(N,"receiveShadow",$.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(zt.envMap.value=Ce,zt.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&X.environment!==null&&(zt.envMapIntensity.value=X.environmentIntensity),ut&&(Tt.setValue(N,"toneMappingExposure",F.toneMappingExposure),Xe.needsLights&&Us(zt,hi),ge&&Q.fog===!0&&fe.refreshFogUniforms(zt,ge),fe.refreshMaterialUniforms(zt,Q,ee,ve,_.state.transmissionRenderTarget[R.id]),bs.upload(N,Dr(Xe),zt,Ye)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(bs.upload(N,Dr(Xe),zt,Ye),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Tt.setValue(N,"center",$.center),Tt.setValue(N,"modelViewMatrix",$.modelViewMatrix),Tt.setValue(N,"normalMatrix",$.normalMatrix),Tt.setValue(N,"modelMatrix",$.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const qt=Q.uniformsGroups;for(let Kt=0,ar=qt.length;Kt<ar;Kt++){const zn=qt[Kt];et.update(zn,Yt),et.bind(zn,Yt)}}return Yt}function Us(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function Ns(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(R,X,J){const Q=Ie.get(R);Q.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),Ie.get(R.texture).__webglTexture=X,Ie.get(R.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:J,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){const J=Ie.get(R);J.__webglFramebuffer=X,J.__useDefaultFramebuffer=X===void 0};const Os=N.createFramebuffer();this.setRenderTarget=function(R,X=0,J=0){K=R,P=X,W=J;let Q=!0,$=null,ge=!1,Ae=!1;if(R){const Ce=Ie.get(R);if(Ce.__useDefaultFramebuffer!==void 0)Ne.bindFramebuffer(N.FRAMEBUFFER,null),Q=!1;else if(Ce.__webglFramebuffer===void 0)Ye.setupRenderTarget(R);else if(Ce.__hasExternalTextures)Ye.rebindTextures(R,Ie.get(R.texture).__webglTexture,Ie.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const We=R.depthTexture;if(Ce.__boundDepthTexture!==We){if(We!==null&&Ie.has(We)&&(R.width!==We.image.width||R.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ye.setupDepthRenderbuffer(R)}}const $e=R.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ae=!0);const xe=Ie.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(xe[X])?$=xe[X][J]:$=xe[X],ge=!0):R.samples>0&&Ye.useMultisampledRTT(R)===!1?$=Ie.get(R).__webglMultisampledFramebuffer:Array.isArray(xe)?$=xe[J]:$=xe,O.copy(R.viewport),Z.copy(R.scissor),ie=R.scissorTest}else O.copy(Be).multiplyScalar(ee).floor(),Z.copy(Ze).multiplyScalar(ee).floor(),ie=gt;if(J!==0&&($=Os),Ne.bindFramebuffer(N.FRAMEBUFFER,$)&&Q&&Ne.drawBuffers(R,$),Ne.viewport(O),Ne.scissor(Z),Ne.setScissorTest(ie),ge){const Ce=Ie.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ce.__webglTexture,J)}else if(Ae){const Ce=X;for(let $e=0;$e<R.textures.length;$e++){const xe=Ie.get(R.textures[$e]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+$e,xe.__webglTexture,J,Ce)}}else if(R!==null&&J!==0){const Ce=Ie.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ce.__webglTexture,J)}L=-1},this.readRenderTargetPixels=function(R,X,J,Q,$,ge,Ae,Ue=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ie.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ce=Ce[Ae]),Ce){Ne.bindFramebuffer(N.FRAMEBUFFER,Ce);try{const $e=R.textures[Ue],xe=$e.format,We=$e.type;if(!qe.textureFormatReadable(xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-Q&&J>=0&&J<=R.height-$&&(R.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ue),N.readPixels(X,J,Q,$,ke.convert(xe),ke.convert(We),ge))}finally{const $e=K!==null?Ie.get(K).__webglFramebuffer:null;Ne.bindFramebuffer(N.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(R,X,J,Q,$,ge,Ae,Ue=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Ie.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ce=Ce[Ae]),Ce)if(X>=0&&X<=R.width-Q&&J>=0&&J<=R.height-$){Ne.bindFramebuffer(N.FRAMEBUFFER,Ce);const $e=R.textures[Ue],xe=$e.format,We=$e.type;if(!qe.textureFormatReadable(xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const lt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,lt),N.bufferData(N.PIXEL_PACK_BUFFER,ge.byteLength,N.STREAM_READ),R.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ue),N.readPixels(X,J,Q,$,ke.convert(xe),ke.convert(We),0);const St=K!==null?Ie.get(K).__webglFramebuffer:null;Ne.bindFramebuffer(N.FRAMEBUFFER,St);const It=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await p_(N,It,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,lt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ge),N.deleteBuffer(lt),N.deleteSync(It),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,J=0){const Q=Math.pow(2,-J),$=Math.floor(R.image.width*Q),ge=Math.floor(R.image.height*Q),Ae=X!==null?X.x:0,Ue=X!==null?X.y:0;Ye.setTexture2D(R,0),N.copyTexSubImage2D(N.TEXTURE_2D,J,0,0,Ae,Ue,$,ge),Ne.unbindTexture()};const ks=N.createFramebuffer(),Et=N.createFramebuffer();this.copyTextureToTexture=function(R,X,J=null,Q=null,$=0,ge=null){ge===null&&($!==0?(Tr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=$,$=0):ge=0);let Ae,Ue,Ce,$e,xe,We,lt,St,It;const Rt=R.isCompressedTexture?R.mipmaps[ge]:R.image;if(J!==null)Ae=J.max.x-J.min.x,Ue=J.max.y-J.min.y,Ce=J.isBox3?J.max.z-J.min.z:1,$e=J.min.x,xe=J.min.y,We=J.isBox3?J.min.z:0;else{const rn=Math.pow(2,-$);Ae=Math.floor(Rt.width*rn),Ue=Math.floor(Rt.height*rn),R.isDataArrayTexture?Ce=Rt.depth:R.isData3DTexture?Ce=Math.floor(Rt.depth*rn):Ce=1,$e=0,xe=0,We=0}Q!==null?(lt=Q.x,St=Q.y,It=Q.z):(lt=0,St=0,It=0);const yt=ke.convert(X.format),Xe=ke.convert(X.type);let Ct;X.isData3DTexture?(Ye.setTexture3D(X,0),Ct=N.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(Ye.setTexture2DArray(X,0),Ct=N.TEXTURE_2D_ARRAY):(Ye.setTexture2D(X,0),Ct=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,X.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,X.unpackAlignment);const pt=N.getParameter(N.UNPACK_ROW_LENGTH),Yt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),y=N.getParameter(N.UNPACK_SKIP_PIXELS),ut=N.getParameter(N.UNPACK_SKIP_ROWS),hi=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Rt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Rt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,$e),N.pixelStorei(N.UNPACK_SKIP_ROWS,xe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,We);const Tt=R.isDataArrayTexture||R.isData3DTexture,zt=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const rn=Ie.get(R),qt=Ie.get(X),Kt=Ie.get(rn.__renderTarget),ar=Ie.get(qt.__renderTarget);Ne.bindFramebuffer(N.READ_FRAMEBUFFER,Kt.__webglFramebuffer),Ne.bindFramebuffer(N.DRAW_FRAMEBUFFER,ar.__webglFramebuffer);for(let zn=0;zn<Ce;zn++)Tt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ie.get(R).__webglTexture,$,We+zn),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ie.get(X).__webglTexture,ge,It+zn)),N.blitFramebuffer($e,xe,Ae,Ue,lt,St,Ae,Ue,N.DEPTH_BUFFER_BIT,N.NEAREST);Ne.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if($!==0||R.isRenderTargetTexture||Ie.has(R)){const rn=Ie.get(R),qt=Ie.get(X);Ne.bindFramebuffer(N.READ_FRAMEBUFFER,ks),Ne.bindFramebuffer(N.DRAW_FRAMEBUFFER,Et);for(let Kt=0;Kt<Ce;Kt++)Tt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,rn.__webglTexture,$,We+Kt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,rn.__webglTexture,$),zt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,qt.__webglTexture,ge,It+Kt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,qt.__webglTexture,ge),$!==0?N.blitFramebuffer($e,xe,Ae,Ue,lt,St,Ae,Ue,N.COLOR_BUFFER_BIT,N.NEAREST):zt?N.copyTexSubImage3D(Ct,ge,lt,St,It+Kt,$e,xe,Ae,Ue):N.copyTexSubImage2D(Ct,ge,lt,St,$e,xe,Ae,Ue);Ne.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else zt?R.isDataTexture||R.isData3DTexture?N.texSubImage3D(Ct,ge,lt,St,It,Ae,Ue,Ce,yt,Xe,Rt.data):X.isCompressedArrayTexture?N.compressedTexSubImage3D(Ct,ge,lt,St,It,Ae,Ue,Ce,yt,Rt.data):N.texSubImage3D(Ct,ge,lt,St,It,Ae,Ue,Ce,yt,Xe,Rt):R.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ge,lt,St,Ae,Ue,yt,Xe,Rt.data):R.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ge,lt,St,Rt.width,Rt.height,yt,Rt.data):N.texSubImage2D(N.TEXTURE_2D,ge,lt,St,Ae,Ue,yt,Xe,Rt);N.pixelStorei(N.UNPACK_ROW_LENGTH,pt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Yt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,y),N.pixelStorei(N.UNPACK_SKIP_ROWS,ut),N.pixelStorei(N.UNPACK_SKIP_IMAGES,hi),ge===0&&X.generateMipmaps&&N.generateMipmap(Ct),Ne.unbindTexture()},this.initRenderTarget=function(R){Ie.get(R).__webglFramebuffer===void 0&&Ye.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Ye.setTextureCube(R,0):R.isData3DTexture?Ye.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Ye.setTexture2DArray(R,0):Ye.setTexture2D(R,0),Ne.unbindTexture()},this.resetState=function(){P=0,W=0,K=null,Ne.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}const Pc={type:"change"},No={type:"start"},du={type:"end"},Es=new Fo,Dc=new ni,OE=Math.cos(70*d_.DEG2RAD),Gt=new Y,an=2*Math.PI,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Da=1e-6;class kE extends Q_{constructor(e,t=null){super(e,t),this.state=bt.NONE,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Yi.ROTATE,MIDDLE:Yi.DOLLY,RIGHT:Yi.PAN},this.touches={ONE:ji.ROTATE,TWO:ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new Ci,this._lastTargetPosition=new Y,this._quat=new Ci().setFromUnitVectors(e.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new rc,this._sphericalDelta=new rc,this._scale=1,this._panOffset=new Y,this._rotateStart=new tt,this._rotateEnd=new tt,this._rotateDelta=new tt,this._panStart=new tt,this._panEnd=new tt,this._panDelta=new tt,this._dollyStart=new tt,this._dollyEnd=new tt,this._dollyDelta=new tt,this._dollyDirection=new Y,this._mouse=new tt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zE.bind(this),this._onPointerDown=BE.bind(this),this._onPointerUp=HE.bind(this),this._onContextMenu=qE.bind(this),this._onMouseWheel=WE.bind(this),this._onKeyDown=XE.bind(this),this._onTouchStart=$E.bind(this),this._onTouchMove=jE.bind(this),this._onMouseDown=VE.bind(this),this._onMouseMove=GE.bind(this),this._interceptControlDown=YE.bind(this),this._interceptControlUp=KE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Pc),this.update(),this.state=bt.NONE}update(e=null){const t=this.object.position;Gt.copy(t).sub(this.target),Gt.applyQuaternion(this._quat),this._spherical.setFromVector3(Gt),this.autoRotate&&this.state===bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(n)&&isFinite(a)&&(n<-Math.PI?n+=an:n>Math.PI&&(n-=an),a<-Math.PI?a+=an:a>Math.PI&&(a-=an),n<=a?this._spherical.theta=Math.max(n,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+a)/2?Math.max(n,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=u!=this._spherical.radius}if(Gt.setFromSpherical(this._spherical),Gt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Gt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const h=Gt.length();u=this._clampDistance(h*this._scale);const p=h-u;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),o=!!p}else if(this.object.isOrthographicCamera){const h=new Y(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=p!==this.object.zoom;const f=new Y(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(h),this.object.updateMatrixWorld(),u=Gt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Es.origin.copy(this.object.position),Es.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Es.direction))<OE?this.object.lookAt(this.target):(Dc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Es.intersectPlane(Dc,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Da||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Da||this._lastTargetPosition.distanceToSquared(this.target)>Da?(this.dispatchEvent(Pc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?an/60*this.autoRotateSpeed*e:an/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Gt.setFromMatrixColumn(t,0),Gt.multiplyScalar(-e),this._panOffset.add(Gt)}_panUp(e,t){this.screenSpacePanning===!0?Gt.setFromMatrixColumn(t,1):(Gt.setFromMatrixColumn(t,0),Gt.crossVectors(this.object.up,Gt)),Gt.multiplyScalar(e),this._panOffset.add(Gt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;Gt.copy(a).sub(this.target);let o=Gt.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/n.clientHeight,this.object.matrix),this._panUp(2*t*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),a=e-n.left,o=t-n.top,u=n.width,h=n.height;this._mouse.x=a/u*2-1,this._mouse.y=-(o/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(n,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(n,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,a=e.pageY-t.y,o=Math.sqrt(n*n+a*a);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._rotateEnd.set(a,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(n,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,a=e.pageY-t.y,o=Math.sqrt(n*n+a*a);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,h=(e.pageY+t.y)*.5;this._updateZoomParameters(u,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new tt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function BE(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function zE(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function HE(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(du),this.state=bt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function VE(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Yi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=bt.DOLLY;break;case Yi.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=bt.ROTATE}break;case Yi.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=bt.PAN}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(No)}function GE(r){switch(this.state){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function WE(r){this.enabled===!1||this.enableZoom===!1||this.state!==bt.NONE||(r.preventDefault(),this.dispatchEvent(No),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(du))}function XE(r){this.enabled!==!1&&this._handleKeyDown(r)}function $E(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case ji.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=bt.TOUCH_ROTATE;break;case ji.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=bt.TOUCH_PAN;break;default:this.state=bt.NONE}break;case 2:switch(this.touches.TWO){case ji.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=bt.TOUCH_DOLLY_PAN;break;case ji.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=bt.TOUCH_DOLLY_ROTATE;break;default:this.state=bt.NONE}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(No)}function jE(r){switch(this._trackPointer(r),this.state){case bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=bt.NONE}}function qE(r){this.enabled!==!1&&r.preventDefault()}function YE(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function KE(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ZE="modulepreload",JE=function(r,e){return new URL(r,e).href},Lc={},QE=function(e,t,n){let a=Promise.resolve();if(t&&t.length>0){const u=document.getElementsByTagName("link"),h=document.querySelector("meta[property=csp-nonce]"),p=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));a=Promise.allSettled(t.map(f=>{if(f=JE(f,n),f in Lc)return;Lc[f]=!0;const g=f.endsWith(".css"),v=g?'[rel="stylesheet"]':"";if(!!n)for(let A=u.length-1;A>=0;A--){const C=u[A];if(C.href===f&&(!g||C.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${v}`))return;const E=document.createElement("link");if(E.rel=g?"stylesheet":ZE,g||(E.as="script"),E.crossOrigin="",E.href=f,p&&E.setAttribute("nonce",p),document.head.appendChild(E),g)return new Promise((A,C)=>{E.addEventListener("load",A),E.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${f}`)))})}))}function o(u){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=u,window.dispatchEvent(h),!h.defaultPrevented)throw u}return a.then(u=>{for(const h of u||[])h.status==="rejected"&&o(h.reason);return e().catch(o)})};var eS=async function(r={}){var Ml,Tl,wl;var e,t=r,n=typeof window=="object",a=typeof WorkerGlobalScope<"u",o=typeof process=="object"&&((Ml=process.versions)==null?void 0:Ml.node)&&process.type!="renderer",u=!n&&!o&&!a;if(o){const{createRequire:i}=await QE(async()=>{const{createRequire:s}=await Promise.resolve().then(()=>sS);return{createRequire:s}},void 0,import.meta.url);var h=i(import.meta.url)}var p="./this.program",f=(i,s)=>{throw s},g=import.meta.url,v="";function x(i){return t.locateFile?t.locateFile(i,v):v+i}var E,A;if(o){if(!(typeof process=="object"&&((Tl=process.versions)==null?void 0:Tl.node)&&process.type!="renderer"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var C=process.versions.node,S=C.split(".").slice(0,3);if(S=S[0]*1e4+S[1]*100+S[2].split("-")[0]*1,S<16e4)throw new Error("This emscripten-generated code requires node v16.0.0 (detected v"+C+")");var _=h("fs");g.startsWith("file:")&&(v=h("path").dirname(h("url").fileURLToPath(g))+"/"),A=s=>{s=W(s)?new URL(s):s;var l=_.readFileSync(s);return P(Buffer.isBuffer(l)),l},E=async(s,l=!0)=>{s=W(s)?new URL(s):s;var c=_.readFileSync(s,l?void 0:"utf8");return P(l?Buffer.isBuffer(c):typeof c=="string"),c},process.argv.length>1&&(p=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),f=(s,l)=>{throw process.exitCode=s,l}}else if(u){if(typeof process=="object"&&((wl=process.versions)==null?void 0:wl.node)&&process.type!="renderer"||typeof window=="object"||typeof WorkerGlobalScope<"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)")}else if(n||a){try{v=new URL(".",g).href}catch{}if(!(typeof window=="object"||typeof WorkerGlobalScope<"u"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");a&&(A=i=>{var s=new XMLHttpRequest;return s.open("GET",i,!1),s.responseType="arraybuffer",s.send(null),new Uint8Array(s.response)}),E=async i=>{if(W(i))return new Promise((l,c)=>{var d=new XMLHttpRequest;d.open("GET",i,!0),d.responseType="arraybuffer",d.onload=()=>{if(d.status==200||d.status==0&&d.response){l(d.response);return}c(d.status)},d.onerror=c,d.send(null)});var s=await fetch(i,{credentials:"same-origin"});if(s.ok)return s.arrayBuffer();throw new Error(s.status+" : "+s.url)}}else throw new Error("environment detection error");var k=console.log.bind(console),U=console.error.bind(console);P(!u,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");var F;typeof WebAssembly!="object"&&U("no native wasm support detected");var G=!1;function P(i,s){i||j("Assertion failed"+(s?": "+s:""))}var W=i=>i.startsWith("file://");function K(){var i=Ks();P((i&3)==0),i==0&&(i+=4),ye[i>>2]=34821223,ye[i+4>>2]=2310721022,ye[0]=1668509029}function L(){if(!G){var i=Ks();i==0&&(i+=4);var s=ye[i>>2],l=ye[i+4>>2];(s!=34821223||l!=2310721022)&&j(`Stack overflow! Stack cookie has been overwritten at ${Le(i)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${Le(l)} ${Le(s)}`),ye[0]!=1668509029&&j("Runtime error: The application has corrupted its heap memory area (address zero)!")}}class T extends Error{}class O extends T{}class Z extends T{constructor(s){super(s),this.excPtr=s;const l=cl(s);this.name=l[0],this.message=l[1]}}(()=>{var i=new Int16Array(1),s=new Int8Array(i.buffer);if(i[0]=25459,s[0]!==115||s[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();function ie(i){Object.getOwnPropertyDescriptor(t,i)||Object.defineProperty(t,i,{configurable:!0,set(){j(`Attempt to set \`Module.${i}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function ne(i){return()=>P(!1,`call to '${i}' via reference taken before Wasm module initialization`)}function ue(i){Object.getOwnPropertyDescriptor(t,i)&&j(`\`Module.${i}\` was supplied but \`${i}\` not included in INCOMING_MODULE_JS_API`)}function ae(i){return i==="FS_createPath"||i==="FS_createDataFile"||i==="FS_createPreloadedFile"||i==="FS_unlink"||i==="addRunDependency"||i==="FS_createLazyFile"||i==="FS_createDevice"||i==="removeRunDependency"}function ve(i,s){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,i)&&Object.defineProperty(globalThis,i,{configurable:!0,get(){s()}})}function ee(i,s){ve(i,()=>{De(`\`${i}\` is not longer defined by emscripten. ${s}`)})}ee("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),ee("asm","Please use wasmExports instead");function we(i){ve(i,()=>{var s=`\`${i}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,l=i;l.startsWith("_")||(l="$"+i),s+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${l}')`,ae(i)&&(s+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),De(s)}),Fe(i)}function Fe(i){Object.getOwnPropertyDescriptor(t,i)||Object.defineProperty(t,i,{configurable:!0,get(){var s=`'${i}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;ae(i)&&(s+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),j(s)}})}var Be,Ze,gt,nt,Qe,ce,de,le,ye,Ve,ct,At,N,xt=!1;function Je(){var i=gt.buffer;nt=new Int8Array(i),ce=new Int16Array(i),Qe=new Uint8Array(i),de=new Uint16Array(i),le=new Int32Array(i),ye=new Uint32Array(i),Ve=new Float32Array(i),ct=new Float64Array(i),At=new BigInt64Array(i),N=new BigUint64Array(i)}P(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support");function qe(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)Se(t.preRun.shift());ie("preRun"),ke(z)}function Ne(){P(!xt),xt=!0,L(),!t.noFSInit&&!y.initialized&&y.init(),_i.__wasm_call_ctors(),y.ignorePermissions=!1}function Dt(){if(L(),t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)et(t.postRun.shift());ie("postRun"),ke(be)}var Ie=0,Ye=null,Ft={},Mt=null;function I(i){var s;Ie++,(s=t.monitorRunDependencies)==null||s.call(t,Ie),i?(P(!Ft[i]),Ft[i]=1,Mt===null&&typeof setInterval<"u"&&(Mt=setInterval(()=>{if(G){clearInterval(Mt),Mt=null;return}var l=!1;for(var c in Ft)l||(l=!0,U("still waiting on run dependencies:")),U(`dependency: ${c}`);l&&U("(end of list)")},1e4))):U("warning: run dependency added without ID")}function b(i){var l;if(Ie--,(l=t.monitorRunDependencies)==null||l.call(t,Ie),i?(P(Ft[i]),delete Ft[i]):U("warning: run dependency removed without ID"),Ie==0&&(Mt!==null&&(clearInterval(Mt),Mt=null),Ye)){var s=Ye;Ye=null,s()}}function j(i){var l;(l=t.onAbort)==null||l.call(t,i),i="Aborted("+i+")",U(i),G=!0;var s=new WebAssembly.RuntimeError(i);throw Ze==null||Ze(s),s}function re(i,s){return(...l)=>{P(xt,`native function \`${i}\` called before runtime initialization`);var c=_i[i];return P(c,`exported native function \`${i}\` not found`),P(l.length<=s,`native function \`${i}\` called with ${l.length} args but expects ${s}`),c(...l)}}var fe;function oe(){return t.locateFile?x("mujoco.wasm"):new URL(""+new URL("mujoco-CGsuVDfV.wasm",import.meta.url).href,import.meta.url).href}function Ge(i){if(i==fe&&F)return new Uint8Array(F);if(A)return A(i);throw"both async and sync fetching of the wasm failed"}async function Me(i){if(!F)try{var s=await E(i);return new Uint8Array(s)}catch{}return Ge(i)}async function Oe(i,s){try{var l=await Me(i),c=await WebAssembly.instantiate(l,s);return c}catch(d){U(`failed to asynchronously prepare wasm: ${d}`),W(fe)&&U(`warning: Loading from a file URI (${fe}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),j(d)}}async function ze(i,s,l){if(!i&&typeof WebAssembly.instantiateStreaming=="function"&&!W(s)&&!o)try{var c=fetch(s,{credentials:"same-origin"}),d=await WebAssembly.instantiateStreaming(c,l);return d}catch(m){U(`wasm streaming compile failed: ${m}`),U("falling back to ArrayBuffer instantiation")}return Oe(s,l)}function Ee(){return{env:Sl,wasi_snapshot_preview1:Sl}}async function Pe(){function i(M,w){return _i=M.exports,gt=_i.memory,P(gt,"memory not found in wasm exports"),Je(),Vr=_i.__indirect_function_table,P(Vr,"table not found in wasm exports"),xd(_i),b("wasm-instantiate"),_i}I("wasm-instantiate");var s=t;function l(M){return P(t===s,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),s=null,i(M.instance)}var c=Ee();if(t.instantiateWasm)return new Promise((M,w)=>{try{t.instantiateWasm(c,(D,V)=>{M(i(D,V))})}catch(D){U(`Module.instantiateWasm callback failed with error: ${D}`),w(D)}});fe??(fe=oe());var d=await ze(F,fe,c),m=l(d);return m}class je{constructor(s){vn(this,"name","ExitStatus");this.message=`Program terminated with exit(${s})`,this.status=s}}var ke=i=>{for(;i.length>0;)i.shift()(t)},be=[],et=i=>be.push(i),z=[],Se=i=>z.push(i),Te=!0,Le=i=>(P(typeof i=="number"),i>>>=0,"0x"+i.toString(16).padStart(8,"0")),H=i=>ml(i),B=()=>gl(),De=i=>{De.shown||(De.shown={}),De.shown[i]||(De.shown[i]=1,o&&(i="warning: "+i),U(i))},Ke=typeof TextDecoder<"u"?new TextDecoder:void 0,mt=(i,s=0,l=NaN)=>{for(var c=s+l,d=s;i[d]&&!(d>=c);)++d;if(d-s>16&&i.buffer&&Ke)return Ke.decode(i.subarray(s,d));for(var m="";s<d;){var M=i[s++];if(!(M&128)){m+=String.fromCharCode(M);continue}var w=i[s++]&63;if((M&224)==192){m+=String.fromCharCode((M&31)<<6|w);continue}var D=i[s++]&63;if((M&240)==224?M=(M&15)<<12|w<<6|D:((M&248)!=240&&De("Invalid UTF-8 leading byte "+Le(M)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),M=(M&7)<<18|w<<12|D<<6|i[s++]&63),M<65536)m+=String.fromCharCode(M);else{var V=M-65536;m+=String.fromCharCode(55296|V>>10,56320|V&1023)}}return m},rt=(i,s)=>(P(typeof i=="number",`UTF8ToString expects a number (got ${typeof i})`),i?mt(Qe,i,s):""),_n=(i,s,l,c)=>j(`Assertion failed: ${rt(i)}, at: `+[s?rt(s):"unknown filename",l,c?rt(c):"unknown function"]),Ot=[],li=0,kn=i=>{var s=new Bn(i);return s.get_caught()||(s.set_caught(!0),li--),s.set_rethrown(!1),Ot.push(s),qr(i),El(i)},sr=()=>{if(!Ot.length)return 0;var i=Ot[Ot.length-1];return qr(i.excPtr),i.excPtr},nn=0,Pr=()=>{pe(0,0),P(Ot.length>0);var i=Ot.pop();Zs(i.excPtr),nn=0};class Bn{constructor(s){this.excPtr=s,this.ptr=s-24}set_type(s){ye[this.ptr+4>>2]=s}get_type(){return ye[this.ptr+4>>2]}set_destructor(s){ye[this.ptr+8>>2]=s}get_destructor(){return ye[this.ptr+8>>2]}set_caught(s){s=s?1:0,nt[this.ptr+12]=s}get_caught(){return nt[this.ptr+12]!=0}set_rethrown(s){s=s?1:0,nt[this.ptr+13]=s}get_rethrown(){return nt[this.ptr+13]!=0}init(s,l){this.set_adjusted_ptr(0),this.set_type(s),this.set_destructor(l)}set_adjusted_ptr(s){ye[this.ptr+16>>2]=s}get_adjusted_ptr(){return ye[this.ptr+16>>2]}}var ci=i=>fl(i),ui=i=>{var s=nn==null?void 0:nn.excPtr;if(!s)return ci(0),0;var l=new Bn(s);l.set_adjusted_ptr(s);var c=l.get_type();if(!c)return ci(0),s;for(var d of i){if(d===0||d===c)break;var m=l.ptr+16;if(xl(d,c,m))return ci(d),s}return ci(c),s},Dr=()=>ui([]),Lr=i=>ui([i]),Fr=()=>{var i=Ot.pop();i||j("no exception to throw");var s=i.excPtr;throw i.get_rethrown()||(Ot.push(i),i.set_rethrown(!0),i.set_caught(!1),li++),nn=new Z(s),nn},Us=i=>{if(i){var s=new Bn(i);Ot.push(s),s.set_rethrown(!0),Fr()}},Ns=(i,s,l)=>{var c=new Bn(i);throw c.init(s,l),nn=new Z(i),li++,nn},Os=()=>li,ks=i=>{throw nn||(nn=new Z(i)),nn},Et={isAbs:i=>i.charAt(0)==="/",splitPath:i=>{var s=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return s.exec(i).slice(1)},normalizeArray:(i,s)=>{for(var l=0,c=i.length-1;c>=0;c--){var d=i[c];d==="."?i.splice(c,1):d===".."?(i.splice(c,1),l++):l&&(i.splice(c,1),l--)}if(s)for(;l;l--)i.unshift("..");return i},normalize:i=>{var s=Et.isAbs(i),l=i.slice(-1)==="/";return i=Et.normalizeArray(i.split("/").filter(c=>!!c),!s).join("/"),!i&&!s&&(i="."),i&&l&&(i+="/"),(s?"/":"")+i},dirname:i=>{var s=Et.splitPath(i),l=s[0],c=s[1];return!l&&!c?".":(c&&(c=c.slice(0,-1)),l+c)},basename:i=>i&&i.match(/([^\/]+|\/)\/*$/)[1],join:(...i)=>Et.normalize(i.join("/")),join2:(i,s)=>Et.normalize(i+"/"+s)},R=()=>{if(o){var i=h("crypto");return s=>i.randomFillSync(s)}return s=>crypto.getRandomValues(s)},X=i=>{(X=R())(i)},J={resolve:(...i)=>{for(var s="",l=!1,c=i.length-1;c>=-1&&!l;c--){var d=c>=0?i[c]:y.cwd();if(typeof d!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!d)return"";s=d+"/"+s,l=Et.isAbs(d)}return s=Et.normalizeArray(s.split("/").filter(m=>!!m),!l).join("/"),(l?"/":"")+s||"."},relative:(i,s)=>{i=J.resolve(i).slice(1),s=J.resolve(s).slice(1);function l(V){for(var q=0;q<V.length&&V[q]==="";q++);for(var te=V.length-1;te>=0&&V[te]==="";te--);return q>te?[]:V.slice(q,te-q+1)}for(var c=l(i.split("/")),d=l(s.split("/")),m=Math.min(c.length,d.length),M=m,w=0;w<m;w++)if(c[w]!==d[w]){M=w;break}for(var D=[],w=M;w<c.length;w++)D.push("..");return D=D.concat(d.slice(M)),D.join("/")}},Q=[],$=i=>{for(var s=0,l=0;l<i.length;++l){var c=i.charCodeAt(l);c<=127?s++:c<=2047?s+=2:c>=55296&&c<=57343?(s+=4,++l):s+=3}return s},ge=(i,s,l,c)=>{if(P(typeof i=="string",`stringToUTF8Array expects a string (got ${typeof i})`),!(c>0))return 0;for(var d=l,m=l+c-1,M=0;M<i.length;++M){var w=i.codePointAt(M);if(w<=127){if(l>=m)break;s[l++]=w}else if(w<=2047){if(l+1>=m)break;s[l++]=192|w>>6,s[l++]=128|w&63}else if(w<=65535){if(l+2>=m)break;s[l++]=224|w>>12,s[l++]=128|w>>6&63,s[l++]=128|w&63}else{if(l+3>=m)break;w>1114111&&De("Invalid Unicode code point "+Le(w)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),s[l++]=240|w>>18,s[l++]=128|w>>12&63,s[l++]=128|w>>6&63,s[l++]=128|w&63,M++}}return s[l]=0,l-d},Ae=(i,s,l)=>{var c=$(i)+1,d=new Array(c),m=ge(i,d,0,d.length);return d.length=m,d},Ue=()=>{if(!Q.length){var i=null;if(o){var s=256,l=Buffer.alloc(s),c=0,d=process.stdin.fd;try{c=_.readSync(d,l,0,s)}catch(m){if(m.toString().includes("EOF"))c=0;else throw m}c>0&&(i=l.slice(0,c).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(i=window.prompt("Input: "),i!==null&&(i+=`
`));if(!i)return null;Q=Ae(i)}return Q.shift()},Ce={ttys:[],init(){},shutdown(){},register(i,s){Ce.ttys[i]={input:[],output:[],ops:s},y.registerDevice(i,Ce.stream_ops)},stream_ops:{open(i){var s=Ce.ttys[i.node.rdev];if(!s)throw new y.ErrnoError(43);i.tty=s,i.seekable=!1},close(i){i.tty.ops.fsync(i.tty)},fsync(i){i.tty.ops.fsync(i.tty)},read(i,s,l,c,d){if(!i.tty||!i.tty.ops.get_char)throw new y.ErrnoError(60);for(var m=0,M=0;M<c;M++){var w;try{w=i.tty.ops.get_char(i.tty)}catch{throw new y.ErrnoError(29)}if(w===void 0&&m===0)throw new y.ErrnoError(6);if(w==null)break;m++,s[l+M]=w}return m&&(i.node.atime=Date.now()),m},write(i,s,l,c,d){if(!i.tty||!i.tty.ops.put_char)throw new y.ErrnoError(60);try{for(var m=0;m<c;m++)i.tty.ops.put_char(i.tty,s[l+m])}catch{throw new y.ErrnoError(29)}return c&&(i.node.mtime=i.node.ctime=Date.now()),m}},default_tty_ops:{get_char(i){return Ue()},put_char(i,s){s===null||s===10?(k(mt(i.output)),i.output=[]):s!=0&&i.output.push(s)},fsync(i){var s;((s=i.output)==null?void 0:s.length)>0&&(k(mt(i.output)),i.output=[])},ioctl_tcgets(i){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(i,s,l){return 0},ioctl_tiocgwinsz(i){return[24,80]}},default_tty1_ops:{put_char(i,s){s===null||s===10?(U(mt(i.output)),i.output=[]):s!=0&&i.output.push(s)},fsync(i){var s;((s=i.output)==null?void 0:s.length)>0&&(U(mt(i.output)),i.output=[])}}},$e=i=>{j("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")},xe={ops_table:null,mount(i){return xe.createNode(null,"/",16895,0)},createNode(i,s,l,c){if(y.isBlkdev(l)||y.isFIFO(l))throw new y.ErrnoError(63);xe.ops_table||(xe.ops_table={dir:{node:{getattr:xe.node_ops.getattr,setattr:xe.node_ops.setattr,lookup:xe.node_ops.lookup,mknod:xe.node_ops.mknod,rename:xe.node_ops.rename,unlink:xe.node_ops.unlink,rmdir:xe.node_ops.rmdir,readdir:xe.node_ops.readdir,symlink:xe.node_ops.symlink},stream:{llseek:xe.stream_ops.llseek}},file:{node:{getattr:xe.node_ops.getattr,setattr:xe.node_ops.setattr},stream:{llseek:xe.stream_ops.llseek,read:xe.stream_ops.read,write:xe.stream_ops.write,mmap:xe.stream_ops.mmap,msync:xe.stream_ops.msync}},link:{node:{getattr:xe.node_ops.getattr,setattr:xe.node_ops.setattr,readlink:xe.node_ops.readlink},stream:{}},chrdev:{node:{getattr:xe.node_ops.getattr,setattr:xe.node_ops.setattr},stream:y.chrdev_stream_ops}});var d=y.createNode(i,s,l,c);return y.isDir(d.mode)?(d.node_ops=xe.ops_table.dir.node,d.stream_ops=xe.ops_table.dir.stream,d.contents={}):y.isFile(d.mode)?(d.node_ops=xe.ops_table.file.node,d.stream_ops=xe.ops_table.file.stream,d.usedBytes=0,d.contents=null):y.isLink(d.mode)?(d.node_ops=xe.ops_table.link.node,d.stream_ops=xe.ops_table.link.stream):y.isChrdev(d.mode)&&(d.node_ops=xe.ops_table.chrdev.node,d.stream_ops=xe.ops_table.chrdev.stream),d.atime=d.mtime=d.ctime=Date.now(),i&&(i.contents[s]=d,i.atime=i.mtime=i.ctime=d.atime),d},getFileDataAsTypedArray(i){return i.contents?i.contents.subarray?i.contents.subarray(0,i.usedBytes):new Uint8Array(i.contents):new Uint8Array(0)},expandFileStorage(i,s){var l=i.contents?i.contents.length:0;if(!(l>=s)){var c=1024*1024;s=Math.max(s,l*(l<c?2:1.125)>>>0),l!=0&&(s=Math.max(s,256));var d=i.contents;i.contents=new Uint8Array(s),i.usedBytes>0&&i.contents.set(d.subarray(0,i.usedBytes),0)}},resizeFileStorage(i,s){if(i.usedBytes!=s)if(s==0)i.contents=null,i.usedBytes=0;else{var l=i.contents;i.contents=new Uint8Array(s),l&&i.contents.set(l.subarray(0,Math.min(s,i.usedBytes))),i.usedBytes=s}},node_ops:{getattr(i){var s={};return s.dev=y.isChrdev(i.mode)?i.id:1,s.ino=i.id,s.mode=i.mode,s.nlink=1,s.uid=0,s.gid=0,s.rdev=i.rdev,y.isDir(i.mode)?s.size=4096:y.isFile(i.mode)?s.size=i.usedBytes:y.isLink(i.mode)?s.size=i.link.length:s.size=0,s.atime=new Date(i.atime),s.mtime=new Date(i.mtime),s.ctime=new Date(i.ctime),s.blksize=4096,s.blocks=Math.ceil(s.size/s.blksize),s},setattr(i,s){for(const l of["mode","atime","mtime","ctime"])s[l]!=null&&(i[l]=s[l]);s.size!==void 0&&xe.resizeFileStorage(i,s.size)},lookup(i,s){throw new y.ErrnoError(44)},mknod(i,s,l,c){return xe.createNode(i,s,l,c)},rename(i,s,l){var c;try{c=y.lookupNode(s,l)}catch{}if(c){if(y.isDir(i.mode))for(var d in c.contents)throw new y.ErrnoError(55);y.hashRemoveNode(c)}delete i.parent.contents[i.name],s.contents[l]=i,i.name=l,s.ctime=s.mtime=i.parent.ctime=i.parent.mtime=Date.now()},unlink(i,s){delete i.contents[s],i.ctime=i.mtime=Date.now()},rmdir(i,s){var l=y.lookupNode(i,s);for(var c in l.contents)throw new y.ErrnoError(55);delete i.contents[s],i.ctime=i.mtime=Date.now()},readdir(i){return[".","..",...Object.keys(i.contents)]},symlink(i,s,l){var c=xe.createNode(i,s,41471,0);return c.link=l,c},readlink(i){if(!y.isLink(i.mode))throw new y.ErrnoError(28);return i.link}},stream_ops:{read(i,s,l,c,d){var m=i.node.contents;if(d>=i.node.usedBytes)return 0;var M=Math.min(i.node.usedBytes-d,c);if(P(M>=0),M>8&&m.subarray)s.set(m.subarray(d,d+M),l);else for(var w=0;w<M;w++)s[l+w]=m[d+w];return M},write(i,s,l,c,d,m){if(P(!(s instanceof ArrayBuffer)),s.buffer===nt.buffer&&(m=!1),!c)return 0;var M=i.node;if(M.mtime=M.ctime=Date.now(),s.subarray&&(!M.contents||M.contents.subarray)){if(m)return P(d===0,"canOwn must imply no weird position inside the file"),M.contents=s.subarray(l,l+c),M.usedBytes=c,c;if(M.usedBytes===0&&d===0)return M.contents=s.slice(l,l+c),M.usedBytes=c,c;if(d+c<=M.usedBytes)return M.contents.set(s.subarray(l,l+c),d),c}if(xe.expandFileStorage(M,d+c),M.contents.subarray&&s.subarray)M.contents.set(s.subarray(l,l+c),d);else for(var w=0;w<c;w++)M.contents[d+w]=s[l+w];return M.usedBytes=Math.max(M.usedBytes,d+c),c},llseek(i,s,l){var c=s;if(l===1?c+=i.position:l===2&&y.isFile(i.node.mode)&&(c+=i.node.usedBytes),c<0)throw new y.ErrnoError(28);return c},mmap(i,s,l,c,d){if(!y.isFile(i.node.mode))throw new y.ErrnoError(43);var m,M,w=i.node.contents;if(!(d&2)&&w&&w.buffer===nt.buffer)M=!1,m=w.byteOffset;else{if(M=!0,m=$e(),!m)throw new y.ErrnoError(48);w&&((l>0||l+s<w.length)&&(w.subarray?w=w.subarray(l,l+s):w=Array.prototype.slice.call(w,l,l+s)),nt.set(w,m))}return{ptr:m,allocated:M}},msync(i,s,l,c,d){return xe.stream_ops.write(i,s,0,c,l,!1),0}}},We=async i=>{var s=await E(i);return P(s,`Loading data file "${i}" failed (no arrayBuffer).`),new Uint8Array(s)},lt=(...i)=>y.createDataFile(...i),St=i=>{for(var s=i;;){if(!Ft[i])return i;i=s+Math.random()}},It=[],Rt=(i,s,l,c)=>{typeof Browser<"u"&&Browser.init();var d=!1;return It.forEach(m=>{d||m.canHandle(s)&&(m.handle(i,s,l,c),d=!0)}),d},yt=(i,s,l,c,d,m,M,w,D,V)=>{var q=s?J.resolve(Et.join2(i,s)):i,te=St(`cp ${q}`);function he(se){function me(He){V==null||V(),w||lt(i,s,He,c,d,D),m==null||m(),b(te)}Rt(se,q,me,()=>{M==null||M(),b(te)})||me(se)}I(te),typeof l=="string"?We(l).then(he,M):he(l)},Xe=i=>{var s={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},l=s[i];if(typeof l>"u")throw new Error(`Unknown file open mode: ${i}`);return l},Ct=(i,s)=>{var l=0;return i&&(l|=365),s&&(l|=146),l},pt=i=>rt(dl(i)),Yt={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},y={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class extends Error{constructor(s){super(xt?pt(s):"");vn(this,"name","ErrnoError");this.errno=s;for(var l in Yt)if(Yt[l]===s){this.code=l;break}}},FSStream:class{constructor(){vn(this,"shared",{})}get object(){return this.node}set object(i){this.node=i}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(i){this.shared.flags=i}get position(){return this.shared.position}set position(i){this.shared.position=i}},FSNode:class{constructor(i,s,l,c){vn(this,"node_ops",{});vn(this,"stream_ops",{});vn(this,"readMode",365);vn(this,"writeMode",146);vn(this,"mounted",null);i||(i=this),this.parent=i,this.mount=i.mount,this.id=y.nextInode++,this.name=s,this.mode=l,this.rdev=c,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(i){i?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(i){i?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return y.isDir(this.mode)}get isDevice(){return y.isChrdev(this.mode)}},lookupPath(i,s={}){if(!i)throw new y.ErrnoError(44);s.follow_mount??(s.follow_mount=!0),Et.isAbs(i)||(i=y.cwd()+"/"+i);e:for(var l=0;l<40;l++){for(var c=i.split("/").filter(V=>!!V),d=y.root,m="/",M=0;M<c.length;M++){var w=M===c.length-1;if(w&&s.parent)break;if(c[M]!=="."){if(c[M]===".."){if(m=Et.dirname(m),y.isRoot(d)){i=m+"/"+c.slice(M+1).join("/");continue e}else d=d.parent;continue}m=Et.join2(m,c[M]);try{d=y.lookupNode(d,c[M])}catch(V){if((V==null?void 0:V.errno)===44&&w&&s.noent_okay)return{path:m};throw V}if(y.isMountpoint(d)&&(!w||s.follow_mount)&&(d=d.mounted.root),y.isLink(d.mode)&&(!w||s.follow)){if(!d.node_ops.readlink)throw new y.ErrnoError(52);var D=d.node_ops.readlink(d);Et.isAbs(D)||(D=Et.dirname(m)+"/"+D),i=D+"/"+c.slice(M+1).join("/");continue e}}}return{path:m,node:d}}throw new y.ErrnoError(32)},getPath(i){for(var s;;){if(y.isRoot(i)){var l=i.mount.mountpoint;return s?l[l.length-1]!=="/"?`${l}/${s}`:l+s:l}s=s?`${i.name}/${s}`:i.name,i=i.parent}},hashName(i,s){for(var l=0,c=0;c<s.length;c++)l=(l<<5)-l+s.charCodeAt(c)|0;return(i+l>>>0)%y.nameTable.length},hashAddNode(i){var s=y.hashName(i.parent.id,i.name);i.name_next=y.nameTable[s],y.nameTable[s]=i},hashRemoveNode(i){var s=y.hashName(i.parent.id,i.name);if(y.nameTable[s]===i)y.nameTable[s]=i.name_next;else for(var l=y.nameTable[s];l;){if(l.name_next===i){l.name_next=i.name_next;break}l=l.name_next}},lookupNode(i,s){var l=y.mayLookup(i);if(l)throw new y.ErrnoError(l);for(var c=y.hashName(i.id,s),d=y.nameTable[c];d;d=d.name_next){var m=d.name;if(d.parent.id===i.id&&m===s)return d}return y.lookup(i,s)},createNode(i,s,l,c){P(typeof i=="object");var d=new y.FSNode(i,s,l,c);return y.hashAddNode(d),d},destroyNode(i){y.hashRemoveNode(i)},isRoot(i){return i===i.parent},isMountpoint(i){return!!i.mounted},isFile(i){return(i&61440)===32768},isDir(i){return(i&61440)===16384},isLink(i){return(i&61440)===40960},isChrdev(i){return(i&61440)===8192},isBlkdev(i){return(i&61440)===24576},isFIFO(i){return(i&61440)===4096},isSocket(i){return(i&49152)===49152},flagsToPermissionString(i){var s=["r","w","rw"][i&3];return i&512&&(s+="w"),s},nodePermissions(i,s){return y.ignorePermissions?0:s.includes("r")&&!(i.mode&292)||s.includes("w")&&!(i.mode&146)||s.includes("x")&&!(i.mode&73)?2:0},mayLookup(i){if(!y.isDir(i.mode))return 54;var s=y.nodePermissions(i,"x");return s||(i.node_ops.lookup?0:2)},mayCreate(i,s){if(!y.isDir(i.mode))return 54;try{var l=y.lookupNode(i,s);return 20}catch{}return y.nodePermissions(i,"wx")},mayDelete(i,s,l){var c;try{c=y.lookupNode(i,s)}catch(m){return m.errno}var d=y.nodePermissions(i,"wx");if(d)return d;if(l){if(!y.isDir(c.mode))return 54;if(y.isRoot(c)||y.getPath(c)===y.cwd())return 10}else if(y.isDir(c.mode))return 31;return 0},mayOpen(i,s){return i?y.isLink(i.mode)?32:y.isDir(i.mode)&&(y.flagsToPermissionString(s)!=="r"||s&576)?31:y.nodePermissions(i,y.flagsToPermissionString(s)):44},checkOpExists(i,s){if(!i)throw new y.ErrnoError(s);return i},MAX_OPEN_FDS:4096,nextfd(){for(var i=0;i<=y.MAX_OPEN_FDS;i++)if(!y.streams[i])return i;throw new y.ErrnoError(33)},getStreamChecked(i){var s=y.getStream(i);if(!s)throw new y.ErrnoError(8);return s},getStream:i=>y.streams[i],createStream(i,s=-1){return P(s>=-1),i=Object.assign(new y.FSStream,i),s==-1&&(s=y.nextfd()),i.fd=s,y.streams[s]=i,i},closeStream(i){y.streams[i]=null},dupStream(i,s=-1){var c,d;var l=y.createStream(i,s);return(d=(c=l.stream_ops)==null?void 0:c.dup)==null||d.call(c,l),l},doSetAttr(i,s,l){var c=i==null?void 0:i.stream_ops.setattr,d=c?i:s;c??(c=s.node_ops.setattr),y.checkOpExists(c,63),c(d,l)},chrdev_stream_ops:{open(i){var l,c;var s=y.getDevice(i.node.rdev);i.stream_ops=s.stream_ops,(c=(l=i.stream_ops).open)==null||c.call(l,i)},llseek(){throw new y.ErrnoError(70)}},major:i=>i>>8,minor:i=>i&255,makedev:(i,s)=>i<<8|s,registerDevice(i,s){y.devices[i]={stream_ops:s}},getDevice:i=>y.devices[i],getMounts(i){for(var s=[],l=[i];l.length;){var c=l.pop();s.push(c),l.push(...c.mounts)}return s},syncfs(i,s){typeof i=="function"&&(s=i,i=!1),y.syncFSRequests++,y.syncFSRequests>1&&U(`warning: ${y.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var l=y.getMounts(y.root.mount),c=0;function d(M){return P(y.syncFSRequests>0),y.syncFSRequests--,s(M)}function m(M){if(M)return m.errored?void 0:(m.errored=!0,d(M));++c>=l.length&&d(null)}l.forEach(M=>{if(!M.type.syncfs)return m(null);M.type.syncfs(M,i,m)})},mount(i,s,l){if(typeof i=="string")throw i;var c=l==="/",d=!l,m;if(c&&y.root)throw new y.ErrnoError(10);if(!c&&!d){var M=y.lookupPath(l,{follow_mount:!1});if(l=M.path,m=M.node,y.isMountpoint(m))throw new y.ErrnoError(10);if(!y.isDir(m.mode))throw new y.ErrnoError(54)}var w={type:i,opts:s,mountpoint:l,mounts:[]},D=i.mount(w);return D.mount=w,w.root=D,c?y.root=D:m&&(m.mounted=w,m.mount&&m.mount.mounts.push(w)),D},unmount(i){var s=y.lookupPath(i,{follow_mount:!1});if(!y.isMountpoint(s.node))throw new y.ErrnoError(28);var l=s.node,c=l.mounted,d=y.getMounts(c);Object.keys(y.nameTable).forEach(M=>{for(var w=y.nameTable[M];w;){var D=w.name_next;d.includes(w.mount)&&y.destroyNode(w),w=D}}),l.mounted=null;var m=l.mount.mounts.indexOf(c);P(m!==-1),l.mount.mounts.splice(m,1)},lookup(i,s){return i.node_ops.lookup(i,s)},mknod(i,s,l){var c=y.lookupPath(i,{parent:!0}),d=c.node,m=Et.basename(i);if(!m)throw new y.ErrnoError(28);if(m==="."||m==="..")throw new y.ErrnoError(20);var M=y.mayCreate(d,m);if(M)throw new y.ErrnoError(M);if(!d.node_ops.mknod)throw new y.ErrnoError(63);return d.node_ops.mknod(d,m,s,l)},statfs(i){return y.statfsNode(y.lookupPath(i,{follow:!0}).node)},statfsStream(i){return y.statfsNode(i.node)},statfsNode(i){var s={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:y.nextInode,ffree:y.nextInode-1,fsid:42,flags:2,namelen:255};return i.node_ops.statfs&&Object.assign(s,i.node_ops.statfs(i.mount.opts.root)),s},create(i,s=438){return s&=4095,s|=32768,y.mknod(i,s,0)},mkdir(i,s=511){return s&=1023,s|=16384,y.mknod(i,s,0)},mkdirTree(i,s){var l=i.split("/"),c="";for(var d of l)if(d){(c||Et.isAbs(i))&&(c+="/"),c+=d;try{y.mkdir(c,s)}catch(m){if(m.errno!=20)throw m}}},mkdev(i,s,l){return typeof l>"u"&&(l=s,s=438),s|=8192,y.mknod(i,s,l)},symlink(i,s){if(!J.resolve(i))throw new y.ErrnoError(44);var l=y.lookupPath(s,{parent:!0}),c=l.node;if(!c)throw new y.ErrnoError(44);var d=Et.basename(s),m=y.mayCreate(c,d);if(m)throw new y.ErrnoError(m);if(!c.node_ops.symlink)throw new y.ErrnoError(63);return c.node_ops.symlink(c,d,i)},rename(i,s){var l=Et.dirname(i),c=Et.dirname(s),d=Et.basename(i),m=Et.basename(s),M,w,D;if(M=y.lookupPath(i,{parent:!0}),w=M.node,M=y.lookupPath(s,{parent:!0}),D=M.node,!w||!D)throw new y.ErrnoError(44);if(w.mount!==D.mount)throw new y.ErrnoError(75);var V=y.lookupNode(w,d),q=J.relative(i,c);if(q.charAt(0)!==".")throw new y.ErrnoError(28);if(q=J.relative(s,l),q.charAt(0)!==".")throw new y.ErrnoError(55);var te;try{te=y.lookupNode(D,m)}catch{}if(V!==te){var he=y.isDir(V.mode),se=y.mayDelete(w,d,he);if(se)throw new y.ErrnoError(se);if(se=te?y.mayDelete(D,m,he):y.mayCreate(D,m),se)throw new y.ErrnoError(se);if(!w.node_ops.rename)throw new y.ErrnoError(63);if(y.isMountpoint(V)||te&&y.isMountpoint(te))throw new y.ErrnoError(10);if(D!==w&&(se=y.nodePermissions(w,"w"),se))throw new y.ErrnoError(se);y.hashRemoveNode(V);try{w.node_ops.rename(V,D,m),V.parent=D}catch(me){throw me}finally{y.hashAddNode(V)}}},rmdir(i){var s=y.lookupPath(i,{parent:!0}),l=s.node,c=Et.basename(i),d=y.lookupNode(l,c),m=y.mayDelete(l,c,!0);if(m)throw new y.ErrnoError(m);if(!l.node_ops.rmdir)throw new y.ErrnoError(63);if(y.isMountpoint(d))throw new y.ErrnoError(10);l.node_ops.rmdir(l,c),y.destroyNode(d)},readdir(i){var s=y.lookupPath(i,{follow:!0}),l=s.node,c=y.checkOpExists(l.node_ops.readdir,54);return c(l)},unlink(i){var s=y.lookupPath(i,{parent:!0}),l=s.node;if(!l)throw new y.ErrnoError(44);var c=Et.basename(i),d=y.lookupNode(l,c),m=y.mayDelete(l,c,!1);if(m)throw new y.ErrnoError(m);if(!l.node_ops.unlink)throw new y.ErrnoError(63);if(y.isMountpoint(d))throw new y.ErrnoError(10);l.node_ops.unlink(l,c),y.destroyNode(d)},readlink(i){var s=y.lookupPath(i),l=s.node;if(!l)throw new y.ErrnoError(44);if(!l.node_ops.readlink)throw new y.ErrnoError(28);return l.node_ops.readlink(l)},stat(i,s){var l=y.lookupPath(i,{follow:!s}),c=l.node,d=y.checkOpExists(c.node_ops.getattr,63);return d(c)},fstat(i){var s=y.getStreamChecked(i),l=s.node,c=s.stream_ops.getattr,d=c?s:l;return c??(c=l.node_ops.getattr),y.checkOpExists(c,63),c(d)},lstat(i){return y.stat(i,!0)},doChmod(i,s,l,c){y.doSetAttr(i,s,{mode:l&4095|s.mode&-4096,ctime:Date.now(),dontFollow:c})},chmod(i,s,l){var c;if(typeof i=="string"){var d=y.lookupPath(i,{follow:!l});c=d.node}else c=i;y.doChmod(null,c,s,l)},lchmod(i,s){y.chmod(i,s,!0)},fchmod(i,s){var l=y.getStreamChecked(i);y.doChmod(l,l.node,s,!1)},doChown(i,s,l){y.doSetAttr(i,s,{timestamp:Date.now(),dontFollow:l})},chown(i,s,l,c){var d;if(typeof i=="string"){var m=y.lookupPath(i,{follow:!c});d=m.node}else d=i;y.doChown(null,d,c)},lchown(i,s,l){y.chown(i,s,l,!0)},fchown(i,s,l){var c=y.getStreamChecked(i);y.doChown(c,c.node,!1)},doTruncate(i,s,l){if(y.isDir(s.mode))throw new y.ErrnoError(31);if(!y.isFile(s.mode))throw new y.ErrnoError(28);var c=y.nodePermissions(s,"w");if(c)throw new y.ErrnoError(c);y.doSetAttr(i,s,{size:l,timestamp:Date.now()})},truncate(i,s){if(s<0)throw new y.ErrnoError(28);var l;if(typeof i=="string"){var c=y.lookupPath(i,{follow:!0});l=c.node}else l=i;y.doTruncate(null,l,s)},ftruncate(i,s){var l=y.getStreamChecked(i);if(s<0||!(l.flags&2097155))throw new y.ErrnoError(28);y.doTruncate(l,l.node,s)},utime(i,s,l){var c=y.lookupPath(i,{follow:!0}),d=c.node,m=y.checkOpExists(d.node_ops.setattr,63);m(d,{atime:s,mtime:l})},open(i,s,l=438){if(i==="")throw new y.ErrnoError(44);s=typeof s=="string"?Xe(s):s,s&64?l=l&4095|32768:l=0;var c,d;if(typeof i=="object")c=i;else{d=i.endsWith("/");var m=y.lookupPath(i,{follow:!(s&131072),noent_okay:!0});c=m.node,i=m.path}var M=!1;if(s&64)if(c){if(s&128)throw new y.ErrnoError(20)}else{if(d)throw new y.ErrnoError(31);c=y.mknod(i,l|511,0),M=!0}if(!c)throw new y.ErrnoError(44);if(y.isChrdev(c.mode)&&(s&=-513),s&65536&&!y.isDir(c.mode))throw new y.ErrnoError(54);if(!M){var w=y.mayOpen(c,s);if(w)throw new y.ErrnoError(w)}s&512&&!M&&y.truncate(c,0),s&=-131713;var D=y.createStream({node:c,path:y.getPath(c),flags:s,seekable:!0,position:0,stream_ops:c.stream_ops,ungotten:[],error:!1});return D.stream_ops.open&&D.stream_ops.open(D),M&&y.chmod(c,l&511),t.logReadFiles&&!(s&1)&&(i in y.readFiles||(y.readFiles[i]=1)),D},close(i){if(y.isClosed(i))throw new y.ErrnoError(8);i.getdents&&(i.getdents=null);try{i.stream_ops.close&&i.stream_ops.close(i)}catch(s){throw s}finally{y.closeStream(i.fd)}i.fd=null},isClosed(i){return i.fd===null},llseek(i,s,l){if(y.isClosed(i))throw new y.ErrnoError(8);if(!i.seekable||!i.stream_ops.llseek)throw new y.ErrnoError(70);if(l!=0&&l!=1&&l!=2)throw new y.ErrnoError(28);return i.position=i.stream_ops.llseek(i,s,l),i.ungotten=[],i.position},read(i,s,l,c,d){if(P(l>=0),c<0||d<0)throw new y.ErrnoError(28);if(y.isClosed(i))throw new y.ErrnoError(8);if((i.flags&2097155)===1)throw new y.ErrnoError(8);if(y.isDir(i.node.mode))throw new y.ErrnoError(31);if(!i.stream_ops.read)throw new y.ErrnoError(28);var m=typeof d<"u";if(!m)d=i.position;else if(!i.seekable)throw new y.ErrnoError(70);var M=i.stream_ops.read(i,s,l,c,d);return m||(i.position+=M),M},write(i,s,l,c,d,m){if(P(l>=0),c<0||d<0)throw new y.ErrnoError(28);if(y.isClosed(i))throw new y.ErrnoError(8);if(!(i.flags&2097155))throw new y.ErrnoError(8);if(y.isDir(i.node.mode))throw new y.ErrnoError(31);if(!i.stream_ops.write)throw new y.ErrnoError(28);i.seekable&&i.flags&1024&&y.llseek(i,0,2);var M=typeof d<"u";if(!M)d=i.position;else if(!i.seekable)throw new y.ErrnoError(70);var w=i.stream_ops.write(i,s,l,c,d,m);return M||(i.position+=w),w},mmap(i,s,l,c,d){if(c&2&&!(d&2)&&(i.flags&2097155)!==2)throw new y.ErrnoError(2);if((i.flags&2097155)===1)throw new y.ErrnoError(2);if(!i.stream_ops.mmap)throw new y.ErrnoError(43);if(!s)throw new y.ErrnoError(28);return i.stream_ops.mmap(i,s,l,c,d)},msync(i,s,l,c,d){return P(l>=0),i.stream_ops.msync?i.stream_ops.msync(i,s,l,c,d):0},ioctl(i,s,l){if(!i.stream_ops.ioctl)throw new y.ErrnoError(59);return i.stream_ops.ioctl(i,s,l)},readFile(i,s={}){if(s.flags=s.flags||0,s.encoding=s.encoding||"binary",s.encoding!=="utf8"&&s.encoding!=="binary")throw new Error(`Invalid encoding type "${s.encoding}"`);var l=y.open(i,s.flags),c=y.stat(i),d=c.size,m=new Uint8Array(d);return y.read(l,m,0,d,0),s.encoding==="utf8"&&(m=mt(m)),y.close(l),m},writeFile(i,s,l={}){l.flags=l.flags||577;var c=y.open(i,l.flags,l.mode);if(typeof s=="string"&&(s=new Uint8Array(Ae(s))),ArrayBuffer.isView(s))y.write(c,s,0,s.byteLength,void 0,l.canOwn);else throw new Error("Unsupported data type");y.close(c)},cwd:()=>y.currentPath,chdir(i){var s=y.lookupPath(i,{follow:!0});if(s.node===null)throw new y.ErrnoError(44);if(!y.isDir(s.node.mode))throw new y.ErrnoError(54);var l=y.nodePermissions(s.node,"x");if(l)throw new y.ErrnoError(l);y.currentPath=s.path},createDefaultDirectories(){y.mkdir("/tmp"),y.mkdir("/home"),y.mkdir("/home/web_user")},createDefaultDevices(){y.mkdir("/dev"),y.registerDevice(y.makedev(1,3),{read:()=>0,write:(c,d,m,M,w)=>M,llseek:()=>0}),y.mkdev("/dev/null",y.makedev(1,3)),Ce.register(y.makedev(5,0),Ce.default_tty_ops),Ce.register(y.makedev(6,0),Ce.default_tty1_ops),y.mkdev("/dev/tty",y.makedev(5,0)),y.mkdev("/dev/tty1",y.makedev(6,0));var i=new Uint8Array(1024),s=0,l=()=>(s===0&&(X(i),s=i.byteLength),i[--s]);y.createDevice("/dev","random",l),y.createDevice("/dev","urandom",l),y.mkdir("/dev/shm"),y.mkdir("/dev/shm/tmp")},createSpecialDirectories(){y.mkdir("/proc");var i=y.mkdir("/proc/self");y.mkdir("/proc/self/fd"),y.mount({mount(){var s=y.createNode(i,"fd",16895,73);return s.stream_ops={llseek:xe.stream_ops.llseek},s.node_ops={lookup(l,c){var d=+c,m=y.getStreamChecked(d),M={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>m.path},id:d+1};return M.parent=M,M},readdir(){return Array.from(y.streams.entries()).filter(([l,c])=>c).map(([l,c])=>l.toString())}},s}},{},"/proc/self/fd")},createStandardStreams(i,s,l){i?y.createDevice("/dev","stdin",i):y.symlink("/dev/tty","/dev/stdin"),s?y.createDevice("/dev","stdout",null,s):y.symlink("/dev/tty","/dev/stdout"),l?y.createDevice("/dev","stderr",null,l):y.symlink("/dev/tty1","/dev/stderr");var c=y.open("/dev/stdin",0),d=y.open("/dev/stdout",1),m=y.open("/dev/stderr",1);P(c.fd===0,`invalid handle for stdin (${c.fd})`),P(d.fd===1,`invalid handle for stdout (${d.fd})`),P(m.fd===2,`invalid handle for stderr (${m.fd})`)},staticInit(){y.nameTable=new Array(4096),y.mount(xe,{},"/"),y.createDefaultDirectories(),y.createDefaultDevices(),y.createSpecialDirectories(),y.filesystems={MEMFS:xe}},init(i,s,l){P(!y.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),y.initialized=!0,i??(i=t.stdin),s??(s=t.stdout),l??(l=t.stderr),y.createStandardStreams(i,s,l)},quit(){y.initialized=!1,Ys(0);for(var i of y.streams)i&&y.close(i)},findObject(i,s){var l=y.analyzePath(i,s);return l.exists?l.object:null},analyzePath(i,s){try{var l=y.lookupPath(i,{follow:!s});i=l.path}catch{}var c={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var l=y.lookupPath(i,{parent:!0});c.parentExists=!0,c.parentPath=l.path,c.parentObject=l.node,c.name=Et.basename(i),l=y.lookupPath(i,{follow:!s}),c.exists=!0,c.path=l.path,c.object=l.node,c.name=l.node.name,c.isRoot=l.path==="/"}catch(d){c.error=d.errno}return c},createPath(i,s,l,c){i=typeof i=="string"?i:y.getPath(i);for(var d=s.split("/").reverse();d.length;){var m=d.pop();if(m){var M=Et.join2(i,m);try{y.mkdir(M)}catch(w){if(w.errno!=20)throw w}i=M}}return M},createFile(i,s,l,c,d){var m=Et.join2(typeof i=="string"?i:y.getPath(i),s),M=Ct(c,d);return y.create(m,M)},createDataFile(i,s,l,c,d,m){var M=s;i&&(i=typeof i=="string"?i:y.getPath(i),M=s?Et.join2(i,s):i);var w=Ct(c,d),D=y.create(M,w);if(l){if(typeof l=="string"){for(var V=new Array(l.length),q=0,te=l.length;q<te;++q)V[q]=l.charCodeAt(q);l=V}y.chmod(D,w|146);var he=y.open(D,577);y.write(he,l,0,l.length,0,m),y.close(he),y.chmod(D,w)}},createDevice(i,s,l,c){var w;var d=Et.join2(typeof i=="string"?i:y.getPath(i),s),m=Ct(!!l,!!c);(w=y.createDevice).major??(w.major=64);var M=y.makedev(y.createDevice.major++,0);return y.registerDevice(M,{open(D){D.seekable=!1},close(D){var V;(V=c==null?void 0:c.buffer)!=null&&V.length&&c(10)},read(D,V,q,te,he){for(var se=0,me=0;me<te;me++){var He;try{He=l()}catch{throw new y.ErrnoError(29)}if(He===void 0&&se===0)throw new y.ErrnoError(6);if(He==null)break;se++,V[q+me]=He}return se&&(D.node.atime=Date.now()),se},write(D,V,q,te,he){for(var se=0;se<te;se++)try{c(V[q+se])}catch{throw new y.ErrnoError(29)}return te&&(D.node.mtime=D.node.ctime=Date.now()),se}}),y.mkdev(d,m,M)},forceLoadFile(i){if(i.isDevice||i.isFolder||i.link||i.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{i.contents=A(i.url),i.usedBytes=i.contents.length}catch{throw new y.ErrnoError(29)}},createLazyFile(i,s,l,c,d){class m{constructor(){vn(this,"lengthKnown",!1);vn(this,"chunks",[])}get(se){if(!(se>this.length-1||se<0)){var me=se%this.chunkSize,He=se/this.chunkSize|0;return this.getter(He)[me]}}setDataGetter(se){this.getter=se}cacheLength(){var se=new XMLHttpRequest;if(se.open("HEAD",l,!1),se.send(null),!(se.status>=200&&se.status<300||se.status===304))throw new Error("Couldn't load "+l+". Status: "+se.status);var me=Number(se.getResponseHeader("Content-length")),He,st=(He=se.getResponseHeader("Accept-Ranges"))&&He==="bytes",at=(He=se.getResponseHeader("Content-Encoding"))&&He==="gzip",Lt=1024*1024;st||(Lt=me);var _t=(Vt,en)=>{if(Vt>en)throw new Error("invalid range ("+Vt+", "+en+") or no bytes requested!");if(en>me-1)throw new Error("only "+me+" bytes available! programmer error!");var Pt=new XMLHttpRequest;if(Pt.open("GET",l,!1),me!==Lt&&Pt.setRequestHeader("Range","bytes="+Vt+"-"+en),Pt.responseType="arraybuffer",Pt.overrideMimeType&&Pt.overrideMimeType("text/plain; charset=x-user-defined"),Pt.send(null),!(Pt.status>=200&&Pt.status<300||Pt.status===304))throw new Error("Couldn't load "+l+". Status: "+Pt.status);return Pt.response!==void 0?new Uint8Array(Pt.response||[]):Ae(Pt.responseText||"")},Zt=this;Zt.setDataGetter(Vt=>{var en=Vt*Lt,Pt=(Vt+1)*Lt-1;if(Pt=Math.min(Pt,me-1),typeof Zt.chunks[Vt]>"u"&&(Zt.chunks[Vt]=_t(en,Pt)),typeof Zt.chunks[Vt]>"u")throw new Error("doXHR failed!");return Zt.chunks[Vt]}),(at||!me)&&(Lt=me=1,me=this.getter(0).length,Lt=me,k("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=me,this._chunkSize=Lt,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!a)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var M=new m,w={isDevice:!1,contents:M}}else var w={isDevice:!1,url:l};var D=y.createFile(i,s,w,c,d);w.contents?D.contents=w.contents:w.url&&(D.contents=null,D.url=w.url),Object.defineProperties(D,{usedBytes:{get:function(){return this.contents.length}}});var V={},q=Object.keys(D.stream_ops);q.forEach(he=>{var se=D.stream_ops[he];V[he]=(...me)=>(y.forceLoadFile(D),se(...me))});function te(he,se,me,He,st){var at=he.node.contents;if(st>=at.length)return 0;var Lt=Math.min(at.length-st,He);if(P(Lt>=0),at.slice)for(var _t=0;_t<Lt;_t++)se[me+_t]=at[st+_t];else for(var _t=0;_t<Lt;_t++)se[me+_t]=at.get(st+_t);return Lt}return V.read=(he,se,me,He,st)=>(y.forceLoadFile(D),te(he,se,me,He,st)),V.mmap=(he,se,me,He,st)=>{y.forceLoadFile(D);var at=$e();if(!at)throw new y.ErrnoError(48);return te(he,nt,at,se,me),{ptr:at,allocated:!0}},D.stream_ops=V,D},absolutePath(){j("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder(){j("FS.createFolder has been removed; use FS.mkdir instead")},createLink(){j("FS.createLink has been removed; use FS.symlink instead")},joinPath(){j("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc(){j("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath(){j("FS.standardizePath has been removed; use PATH.normalize instead")}},ut={DEFAULT_POLLMASK:5,calculateAt(i,s,l){if(Et.isAbs(s))return s;var c;if(i===-100)c=y.cwd();else{var d=ut.getStreamFromFD(i);c=d.path}if(s.length==0){if(!l)throw new y.ErrnoError(44);return c}return c+"/"+s},writeStat(i,s){le[i>>2]=s.dev,le[i+4>>2]=s.mode,ye[i+8>>2]=s.nlink,le[i+12>>2]=s.uid,le[i+16>>2]=s.gid,le[i+20>>2]=s.rdev,At[i+24>>3]=BigInt(s.size),le[i+32>>2]=4096,le[i+36>>2]=s.blocks;var l=s.atime.getTime(),c=s.mtime.getTime(),d=s.ctime.getTime();return At[i+40>>3]=BigInt(Math.floor(l/1e3)),ye[i+48>>2]=l%1e3*1e3*1e3,At[i+56>>3]=BigInt(Math.floor(c/1e3)),ye[i+64>>2]=c%1e3*1e3*1e3,At[i+72>>3]=BigInt(Math.floor(d/1e3)),ye[i+80>>2]=d%1e3*1e3*1e3,At[i+88>>3]=BigInt(s.ino),0},writeStatFs(i,s){le[i+4>>2]=s.bsize,le[i+40>>2]=s.bsize,le[i+8>>2]=s.blocks,le[i+12>>2]=s.bfree,le[i+16>>2]=s.bavail,le[i+20>>2]=s.files,le[i+24>>2]=s.ffree,le[i+28>>2]=s.fsid,le[i+44>>2]=s.flags,le[i+36>>2]=s.namelen},doMsync(i,s,l,c,d){if(!y.isFile(s.node.mode))throw new y.ErrnoError(43);if(c&2)return 0;var m=Qe.slice(i,i+l);y.msync(s,m,d,l,c)},getStreamFromFD(i){var s=y.getStreamChecked(i);return s},varargs:void 0,getStr(i){var s=rt(i);return s}};function hi(i,s,l){try{var c=ut.getStreamFromFD(i);if(P(!l),c.fd===s)return-28;if(s<0||s>=y.MAX_OPEN_FDS)return-8;var d=y.getStream(s);return d&&y.close(d),y.dupStream(c,s).fd}catch(m){if(typeof y>"u"||m.name!=="ErrnoError")throw m;return-m.errno}}var Tt=()=>{P(ut.varargs!=null);var i=le[+ut.varargs>>2];return ut.varargs+=4,i},zt=Tt;function rn(i,s,l){ut.varargs=l;try{var c=ut.getStreamFromFD(i);switch(s){case 0:{var d=Tt();if(d<0)return-28;for(;y.streams[d];)d++;var m;return m=y.dupStream(c,d),m.fd}case 1:case 2:return 0;case 3:return c.flags;case 4:{var d=Tt();return c.flags|=d,0}case 12:{var d=zt(),M=0;return ce[d+M>>1]=2,0}case 13:case 14:return 0}return-28}catch(w){if(typeof y>"u"||w.name!=="ErrnoError")throw w;return-w.errno}}function qt(i,s){try{return ut.writeStat(s,y.fstat(i))}catch(l){if(typeof y>"u"||l.name!=="ErrnoError")throw l;return-l.errno}}function Kt(i,s,l){ut.varargs=l;try{var c=ut.getStreamFromFD(i);switch(s){case 21509:return c.tty?0:-59;case 21505:{if(!c.tty)return-59;if(c.tty.ops.ioctl_tcgets){var d=c.tty.ops.ioctl_tcgets(c),m=zt();le[m>>2]=d.c_iflag||0,le[m+4>>2]=d.c_oflag||0,le[m+8>>2]=d.c_cflag||0,le[m+12>>2]=d.c_lflag||0;for(var M=0;M<32;M++)nt[m+M+17]=d.c_cc[M]||0;return 0}return 0}case 21510:case 21511:case 21512:return c.tty?0:-59;case 21506:case 21507:case 21508:{if(!c.tty)return-59;if(c.tty.ops.ioctl_tcsets){for(var m=zt(),w=le[m>>2],D=le[m+4>>2],V=le[m+8>>2],q=le[m+12>>2],te=[],M=0;M<32;M++)te.push(nt[m+M+17]);return c.tty.ops.ioctl_tcsets(c.tty,s,{c_iflag:w,c_oflag:D,c_cflag:V,c_lflag:q,c_cc:te})}return 0}case 21519:{if(!c.tty)return-59;var m=zt();return le[m>>2]=0,0}case 21520:return c.tty?-28:-59;case 21531:{var m=zt();return y.ioctl(c,s,m)}case 21523:{if(!c.tty)return-59;if(c.tty.ops.ioctl_tiocgwinsz){var he=c.tty.ops.ioctl_tiocgwinsz(c.tty),m=zt();ce[m>>1]=he[0],ce[m+2>>1]=he[1]}return 0}case 21524:return c.tty?0:-59;case 21515:return c.tty?0:-59;default:return-28}}catch(se){if(typeof y>"u"||se.name!=="ErrnoError")throw se;return-se.errno}}function ar(i,s){try{return i=ut.getStr(i),ut.writeStat(s,y.lstat(i))}catch(l){if(typeof y>"u"||l.name!=="ErrnoError")throw l;return-l.errno}}function zn(i,s,l,c){try{s=ut.getStr(s);var d=c&256,m=c&4096;return c=c&-6401,P(!c,`unknown flags in __syscall_newfstatat: ${c}`),s=ut.calculateAt(i,s,m),ut.writeStat(l,d?y.lstat(s):y.stat(s))}catch(M){if(typeof y>"u"||M.name!=="ErrnoError")throw M;return-M.errno}}function fu(i,s,l,c){ut.varargs=c;try{s=ut.getStr(s),s=ut.calculateAt(i,s);var d=c?Tt():0;return y.open(s,l,d).fd}catch(m){if(typeof y>"u"||m.name!=="ErrnoError")throw m;return-m.errno}}function pu(i,s){try{return i=ut.getStr(i),ut.writeStat(s,y.stat(i))}catch(l){if(typeof y>"u"||l.name!=="ErrnoError")throw l;return-l.errno}}var mu=()=>j("native code called abort()"),Ht=i=>{for(var s="";;){var l=Qe[i++];if(!l)return s;s+=String.fromCharCode(l)}},Li={},di={},Ir={},or=class extends Error{constructor(s){super(s),this.name="BindingError"}},ft=i=>{throw new or(i)};function _u(i,s,l={}){var c=s.name;if(i||ft(`type "${c}" must have a positive integer typeid pointer`),di.hasOwnProperty(i)){if(l.ignoreDuplicateRegistrations)return;ft(`Cannot register type '${c}' twice`)}if(di[i]=s,delete Ir[i],Li.hasOwnProperty(i)){var d=Li[i];delete Li[i],d.forEach(m=>m())}}function dn(i,s,l={}){if(s.argPackAdvance===void 0)throw new TypeError("registerType registeredInstance requires argPackAdvance");return _u(i,s,l)}var Oo=(i,s,l)=>{switch(s){case 1:return l?c=>nt[c]:c=>Qe[c];case 2:return l?c=>ce[c>>1]:c=>de[c>>1];case 4:return l?c=>le[c>>2]:c=>ye[c>>2];case 8:return l?c=>At[c>>3]:c=>N[c>>3];default:throw new TypeError(`invalid integer width (${s}): ${i}`)}},fi=i=>{if(i===null)return"null";var s=typeof i;return s==="object"||s==="array"||s==="function"?i.toString():""+i},ko=(i,s,l,c)=>{if(s<l||s>c)throw new TypeError(`Passing a number "${fi(s)}" from JS side to C/C++ side to an argument of type "${i}", which is outside the valid range [${l}, ${c}]!`)},gu=(i,s,l,c,d)=>{s=Ht(s);const m=c===0n;let M=w=>w;if(m){const w=l*8;M=D=>BigInt.asUintN(w,D),d=M(d)}dn(i,{name:s,fromWireType:M,toWireType:(w,D)=>{if(typeof D=="number")D=BigInt(D);else if(typeof D!="bigint")throw new TypeError(`Cannot convert "${fi(D)}" to ${this.name}`);return ko(s,D,c,d),D},argPackAdvance:An,readValueFromPointer:Oo(s,l,!m),destructorFunction:null})},An=8,vu=(i,s,l,c)=>{s=Ht(s),dn(i,{name:s,fromWireType:function(d){return!!d},toWireType:function(d,m){return m?l:c},argPackAdvance:An,readValueFromPointer:function(d){return this.fromWireType(Qe[d])},destructorFunction:null})},xu=i=>({count:i.count,deleteScheduled:i.deleteScheduled,preservePointerOnDelete:i.preservePointerOnDelete,ptr:i.ptr,ptrType:i.ptrType,smartPtr:i.smartPtr,smartPtrType:i.smartPtrType}),Bs=i=>{function s(l){return l.$$.ptrType.registeredClass.name}ft(s(i)+" instance already deleted")},zs=!1,Bo=i=>{},Eu=i=>{i.smartPtr?i.smartPtrType.rawDestructor(i.smartPtr):i.ptrType.registeredClass.rawDestructor(i.ptr)},zo=i=>{i.count.value-=1;var s=i.count.value===0;s&&Eu(i)},Ho=(i,s,l)=>{if(s===l)return i;if(l.baseClass===void 0)return null;var c=Ho(i,s,l.baseClass);return c===null?null:l.downcast(c)},Vo={},Su={},yu=(i,s)=>{for(s===void 0&&ft("ptr should not be undefined");i.baseClass;)s=i.upcast(s),i=i.baseClass;return s},Mu=(i,s)=>(s=yu(i,s),Su[s]),Tu=class extends Error{constructor(s){super(s),this.name="InternalError"}},Ur=i=>{throw new Tu(i)},Nr=(i,s)=>{(!s.ptrType||!s.ptr)&&Ur("makeClassHandle requires ptr and ptrType");var l=!!s.smartPtrType,c=!!s.smartPtr;return l!==c&&Ur("Both smartPtrType and smartPtr must be specified"),s.count={value:1},lr(Object.create(i,{$$:{value:s,writable:!0}}))};function Go(i){var s=this.getPointee(i);if(!s)return this.destructor(i),null;var l=Mu(this.registeredClass,s);if(l!==void 0){if(l.$$.count.value===0)return l.$$.ptr=s,l.$$.smartPtr=i,l.clone();var c=l.clone();return this.destructor(i),c}function d(){return this.isSmartPointer?Nr(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:s,smartPtrType:this,smartPtr:i}):Nr(this.registeredClass.instancePrototype,{ptrType:this,ptr:i})}var m=this.registeredClass.getActualType(s),M=Vo[m];if(!M)return d.call(this);var w;this.isConst?w=M.constPointerType:w=M.pointerType;var D=Ho(s,this.registeredClass,w.registeredClass);return D===null?d.call(this):this.isSmartPointer?Nr(w.registeredClass.instancePrototype,{ptrType:w,ptr:D,smartPtrType:this,smartPtr:i}):Nr(w.registeredClass.instancePrototype,{ptrType:w,ptr:D})}var lr=i=>typeof FinalizationRegistry>"u"?(lr=s=>s,i):(zs=new FinalizationRegistry(s=>{console.warn(s.leakWarning),zo(s.$$)}),lr=s=>{var l=s.$$,c=!!l.smartPtr;if(c){var d={$$:l},m=l.ptrType.registeredClass,M=new Error(`Embind found a leaked C++ instance ${m.name} <${Le(l.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);"captureStackTrace"in Error&&Error.captureStackTrace(M,Go),d.leakWarning=M.stack.replace(/^Error: /,""),zs.register(s,d,s)}return s},Bo=s=>zs.unregister(s),lr(i)),wu=()=>{let i=Or.prototype;Object.assign(i,{isAliasOf(l){if(!(this instanceof Or)||!(l instanceof Or))return!1;var c=this.$$.ptrType.registeredClass,d=this.$$.ptr;l.$$=l.$$;for(var m=l.$$.ptrType.registeredClass,M=l.$$.ptr;c.baseClass;)d=c.upcast(d),c=c.baseClass;for(;m.baseClass;)M=m.upcast(M),m=m.baseClass;return c===m&&d===M},clone(){if(this.$$.ptr||Bs(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var l=lr(Object.create(Object.getPrototypeOf(this),{$$:{value:xu(this.$$)}}));return l.$$.count.value+=1,l.$$.deleteScheduled=!1,l},delete(){this.$$.ptr||Bs(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&ft("Object already scheduled for deletion"),Bo(this),zo(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||Bs(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&ft("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const s=Symbol.dispose;s&&(i[s]=i.delete)};function Or(){}var kr=(i,s)=>Object.defineProperty(s,"name",{value:i}),Hs=(i,s,l)=>{if(i[s].overloadTable===void 0){var c=i[s];i[s]=function(...d){return i[s].overloadTable.hasOwnProperty(d.length)||ft(`Function '${l}' called with an invalid number of arguments (${d.length}) - expects one of (${i[s].overloadTable})!`),i[s].overloadTable[d.length].apply(this,d)},i[s].overloadTable=[],i[s].overloadTable[c.argCount]=c}},Vs=(i,s,l)=>{t.hasOwnProperty(i)?((l===void 0||t[i].overloadTable!==void 0&&t[i].overloadTable[l]!==void 0)&&ft(`Cannot register public name '${i}' twice`),Hs(t,i,i),t[i].overloadTable.hasOwnProperty(l)&&ft(`Cannot register multiple overloads of a function with the same number of arguments (${l})!`),t[i].overloadTable[l]=s):(t[i]=s,t[i].argCount=l)},bu=48,Au=57,Ru=i=>{P(typeof i=="string"),i=i.replace(/[^a-zA-Z0-9_]/g,"$");var s=i.charCodeAt(0);return s>=bu&&s<=Au?`_${i}`:i};function Cu(i,s,l,c,d,m,M,w){this.name=i,this.constructor=s,this.instancePrototype=l,this.rawDestructor=c,this.baseClass=d,this.getActualType=m,this.upcast=M,this.downcast=w,this.pureVirtualFunctions=[]}var Br=(i,s,l)=>{for(;s!==l;)s.upcast||ft(`Expected null or instance of ${l.name}, got an instance of ${s.name}`),i=s.upcast(i),s=s.baseClass;return i};function Pu(i,s){if(s===null)return this.isReference&&ft(`null is not a valid ${this.name}`),0;s.$$||ft(`Cannot pass "${fi(s)}" as a ${this.name}`),s.$$.ptr||ft(`Cannot pass deleted object as a pointer of type ${this.name}`);var l=s.$$.ptrType.registeredClass,c=Br(s.$$.ptr,l,this.registeredClass);return c}function Du(i,s){var l;if(s===null)return this.isReference&&ft(`null is not a valid ${this.name}`),this.isSmartPointer?(l=this.rawConstructor(),i!==null&&i.push(this.rawDestructor,l),l):0;(!s||!s.$$)&&ft(`Cannot pass "${fi(s)}" as a ${this.name}`),s.$$.ptr||ft(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&s.$$.ptrType.isConst&&ft(`Cannot convert argument of type ${s.$$.smartPtrType?s.$$.smartPtrType.name:s.$$.ptrType.name} to parameter type ${this.name}`);var c=s.$$.ptrType.registeredClass;if(l=Br(s.$$.ptr,c,this.registeredClass),this.isSmartPointer)switch(s.$$.smartPtr===void 0&&ft("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:s.$$.smartPtrType===this?l=s.$$.smartPtr:ft(`Cannot convert argument of type ${s.$$.smartPtrType?s.$$.smartPtrType.name:s.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:l=s.$$.smartPtr;break;case 2:if(s.$$.smartPtrType===this)l=s.$$.smartPtr;else{var d=s.clone();l=this.rawShare(l,kt.toHandle(()=>d.delete())),i!==null&&i.push(this.rawDestructor,l)}break;default:ft("Unsupporting sharing policy")}return l}function Lu(i,s){if(s===null)return this.isReference&&ft(`null is not a valid ${this.name}`),0;s.$$||ft(`Cannot pass "${fi(s)}" as a ${this.name}`),s.$$.ptr||ft(`Cannot pass deleted object as a pointer of type ${this.name}`),s.$$.ptrType.isConst&&ft(`Cannot convert argument of type ${s.$$.ptrType.name} to parameter type ${this.name}`);var l=s.$$.ptrType.registeredClass,c=Br(s.$$.ptr,l,this.registeredClass);return c}function zr(i){return this.fromWireType(ye[i>>2])}var Fu=()=>{Object.assign(Hr.prototype,{getPointee(i){return this.rawGetPointee&&(i=this.rawGetPointee(i)),i},destructor(i){var s;(s=this.rawDestructor)==null||s.call(this,i)},argPackAdvance:An,readValueFromPointer:zr,fromWireType:Go})};function Hr(i,s,l,c,d,m,M,w,D,V,q){this.name=i,this.registeredClass=s,this.isReference=l,this.isConst=c,this.isSmartPointer=d,this.pointeeType=m,this.sharingPolicy=M,this.rawGetPointee=w,this.rawConstructor=D,this.rawShare=V,this.rawDestructor=q,!d&&s.baseClass===void 0?c?(this.toWireType=Pu,this.destructorFunction=null):(this.toWireType=Lu,this.destructorFunction=null):this.toWireType=Du}var Wo=(i,s,l)=>{t.hasOwnProperty(i)||Ur("Replacing nonexistent public symbol"),t[i].overloadTable!==void 0&&l!==void 0?t[i].overloadTable[l]=s:(t[i]=s,t[i].argCount=l)},Xo=[],Vr,_e=i=>{var s=Xo[i];return s||(Xo[i]=s=Vr.get(i)),P(Vr.get(i)==s,"JavaScript-side Wasm function table mirror is out of date!"),s},Rn=(i,s,l=!1)=>{P(!l,"Async bindings are only supported with JSPI."),i=Ht(i);function c(){var m=_e(s);return m}var d=c();return typeof d!="function"&&ft(`unknown function pointer with signature ${i}: ${s}`),d};class Iu extends Error{}var $o=i=>{var s=hl(i),l=Ht(s);return Pn(s),l},pi=(i,s)=>{var l=[],c={};function d(m){if(!c[m]&&!di[m]){if(Ir[m]){Ir[m].forEach(d);return}l.push(m),c[m]=!0}}throw s.forEach(d),new Iu(`${i}: `+l.map($o).join([", "]))},gn=(i,s,l)=>{i.forEach(w=>Ir[w]=s);function c(w){var D=l(w);D.length!==i.length&&Ur("Mismatched type converter count");for(var V=0;V<i.length;++V)dn(i[V],D[V])}var d=new Array(s.length),m=[],M=0;s.forEach((w,D)=>{di.hasOwnProperty(w)?d[D]=di[w]:(m.push(w),Li.hasOwnProperty(w)||(Li[w]=[]),Li[w].push(()=>{d[D]=di[w],++M,M===m.length&&c(d)}))}),m.length===0&&c(d)},Uu=(i,s,l,c,d,m,M,w,D,V,q,te,he)=>{q=Ht(q),m=Rn(d,m),w&&(w=Rn(M,w)),V&&(V=Rn(D,V)),he=Rn(te,he);var se=Ru(q);Vs(se,function(){pi(`Cannot construct ${q} due to unbound types`,[c])}),gn([i,s,l],c?[c]:[],me=>{var Pt;me=me[0];var He,st;c?(He=me.registeredClass,st=He.instancePrototype):st=Or.prototype;var at=kr(q,function(...Yn){if(Object.getPrototypeOf(this)!==Lt)throw new or(`Use 'new' to construct ${q}`);if(_t.constructor_body===void 0)throw new or(`${q} has no accessible constructor`);var Yr=_t.constructor_body[Yn.length];if(Yr===void 0)throw new or(`Tried to invoke ctor of ${q} with invalid number of parameters (${Yn.length}) - expected (${Object.keys(_t.constructor_body).toString()}) parameters instead!`);return Yr.apply(this,Yn)}),Lt=Object.create(st,{constructor:{value:at}});at.prototype=Lt;var _t=new Cu(q,at,Lt,he,He,m,w,V);_t.baseClass&&((Pt=_t.baseClass).__derivedClasses??(Pt.__derivedClasses=[]),_t.baseClass.__derivedClasses.push(_t));var Zt=new Hr(q,_t,!0,!1,!1),Vt=new Hr(q+"*",_t,!1,!1,!1),en=new Hr(q+" const*",_t,!1,!0,!1);return Vo[i]={pointerType:Vt,constPointerType:en},Wo(se,at),[Zt,Vt,en]})},Gs=i=>{for(;i.length;){var s=i.pop(),l=i.pop();l(s)}};function jo(i){for(var s=1;s<i.length;++s)if(i[s]!==null&&i[s].destructorFunction===void 0)return!0;return!1}function Nu(i,s,l,c,d){if(i<s||i>l){var m=s==l?s:`${s} to ${l}`;d(`function ${c} called with ${i} arguments, expected ${m}`)}}function Ou(i,s,l,c){var d=jo(i),m=i.length-2,M=[],w=["fn"];s&&w.push("thisWired");for(var D=0;D<m;++D)M.push(`arg${D}`),w.push(`arg${D}Wired`);M=M.join(","),w=w.join(",");var V=`return function (${M}) {
`;V+=`checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`,d&&(V+=`var destructors = [];
`);var q=d?"destructors":"null",te=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];s&&(V+=`var thisWired = classParam['toWireType'](${q}, this);
`);for(var D=0;D<m;++D)V+=`var arg${D}Wired = argType${D}['toWireType'](${q}, arg${D});
`,te.push(`argType${D}`);if(V+=(l||c?"var rv = ":"")+`invoker(${w});
`,d)V+=`runDestructors(destructors);
`;else for(var D=s?1:2;D<i.length;++D){var he=D===1?"thisWired":"arg"+(D-2)+"Wired";i[D].destructorFunction!==null&&(V+=`${he}_dtor(${he});
`,te.push(`${he}_dtor`))}return l&&(V+=`var ret = retType['fromWireType'](rv);
return ret;
`),V+=`}
`,te.push("checkArgCount","minArgs","maxArgs"),V=`if (arguments.length !== ${te.length}){ throw new Error(humanName + "Expected ${te.length} closure arguments " + arguments.length + " given."); }
${V}`,[te,V]}function ku(i){for(var s=i.length-2,l=i.length-1;l>=2&&i[l].optional;--l)s--;return s}function Gr(i,s,l,c,d,m){var M=s.length;M<2&&ft("argTypes array size mismatch! Must at least get return value and 'this' types!"),P(!m,"Async bindings are only supported with JSPI.");for(var w=s[1]!==null&&l!==null,D=jo(s),V=s[0].name!=="void",q=M-2,te=ku(s),he=[i,ft,c,d,Gs,s[0],s[1]],se=0;se<M-2;++se)he.push(s[se+2]);if(!D)for(var se=w?1:2;se<s.length;++se)s[se].destructorFunction!==null&&he.push(s[se].destructorFunction);he.push(Nu,te,q);let[me,He]=Ou(s,w,V,m);var st=new Function(...me,He)(...he);return kr(i,st)}var Wr=(i,s)=>{for(var l=[],c=0;c<i;c++)l.push(ye[s+c*4>>2]);return l},Ws=i=>{i=i.trim();const s=i.indexOf("(");return s===-1?i:(P(i.endsWith(")"),"Parentheses for argument names should match."),i.slice(0,s))},Bu=(i,s,l,c,d,m,M,w,D)=>{var V=Wr(l,c);s=Ht(s),s=Ws(s),m=Rn(d,m,w),gn([],[i],q=>{q=q[0];var te=`${q.name}.${s}`;function he(){pi(`Cannot call ${te} due to unbound types`,V)}s.startsWith("@@")&&(s=Symbol[s.substring(2)]);var se=q.registeredClass.constructor;return se[s]===void 0?(he.argCount=l-1,se[s]=he):(Hs(se,s,te),se[s].overloadTable[l-1]=he),gn([],V,me=>{var He=[me[0],null].concat(me.slice(1)),st=Gr(te,He,null,m,M,w);if(se[s].overloadTable===void 0?(st.argCount=l-1,se[s]=st):se[s].overloadTable[l-1]=st,q.registeredClass.__derivedClasses)for(const at of q.registeredClass.__derivedClasses)at.constructor.hasOwnProperty(s)||(at.constructor[s]=st);return[]}),[]})},zu=(i,s,l,c,d,m)=>{P(s>0);var M=Wr(s,l);d=Rn(c,d),gn([],[i],w=>{w=w[0];var D=`constructor ${w.name}`;if(w.registeredClass.constructor_body===void 0&&(w.registeredClass.constructor_body=[]),w.registeredClass.constructor_body[s-1]!==void 0)throw new or(`Cannot register multiple constructors with identical number of parameters (${s-1}) for class '${w.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return w.registeredClass.constructor_body[s-1]=()=>{pi(`Cannot construct ${w.name} due to unbound types`,M)},gn([],M,V=>(V.splice(1,0,null),w.registeredClass.constructor_body[s-1]=Gr(D,V,null,d,m),[])),[]})},Hu=(i,s,l,c,d,m,M,w,D,V)=>{var q=Wr(l,c);s=Ht(s),s=Ws(s),m=Rn(d,m,D),gn([],[i],te=>{te=te[0];var he=`${te.name}.${s}`;s.startsWith("@@")&&(s=Symbol[s.substring(2)]),w&&te.registeredClass.pureVirtualFunctions.push(s);function se(){pi(`Cannot call ${he} due to unbound types`,q)}var me=te.registeredClass.instancePrototype,He=me[s];return He===void 0||He.overloadTable===void 0&&He.className!==te.name&&He.argCount===l-2?(se.argCount=l-2,se.className=te.name,me[s]=se):(Hs(me,s,he),me[s].overloadTable[l-2]=se),gn([],q,st=>{var at=Gr(he,st,te,m,M,D);return me[s].overloadTable===void 0?(at.argCount=l-2,me[s]=at):me[s].overloadTable[l-2]=at,[]}),[]})},qo=(i,s,l)=>(i instanceof Object||ft(`${l} with invalid "this": ${i}`),i instanceof s.registeredClass.constructor||ft(`${l} incompatible with "this" of type ${i.constructor.name}`),i.$$.ptr||ft(`cannot call emscripten binding method ${l} on deleted object`),Br(i.$$.ptr,i.$$.ptrType.registeredClass,s.registeredClass)),Vu=(i,s,l,c,d,m,M,w,D,V)=>{s=Ht(s),d=Rn(c,d),gn([],[i],q=>{q=q[0];var te=`${q.name}.${s}`,he={get(){pi(`Cannot access ${te} due to unbound types`,[l,M])},enumerable:!0,configurable:!0};return D?he.set=()=>pi(`Cannot access ${te} due to unbound types`,[l,M]):he.set=se=>ft(te+" is a read-only property"),Object.defineProperty(q.registeredClass.instancePrototype,s,he),gn([],D?[l,M]:[l],se=>{var me=se[0],He={get(){var at=qo(this,q,te+" getter");return me.fromWireType(d(m,at))},enumerable:!0};if(D){D=Rn(w,D);var st=se[1];He.set=function(at){var Lt=qo(this,q,te+" setter"),_t=[];D(V,Lt,st.toWireType(_t,at)),Gs(_t)}}return Object.defineProperty(q.registeredClass.instancePrototype,s,He),[]}),[]})},Gu=(i,s,l)=>{i=Ht(i),gn([],[s],c=>(c=c[0],t[i]=c.fromWireType(l),[]))},Yo=[],Cn=[0,1,,1,null,1,!0,1,!1,1],Xs=i=>{i>9&&--Cn[i+1]===0&&(P(Cn[i]!==void 0,"Decref for unallocated handle."),Cn[i]=void 0,Yo.push(i))},kt={toValue:i=>(i||ft(`Cannot use deleted val. handle = ${i}`),P(i===2||Cn[i]!==void 0&&i%2===0,`invalid handle: ${i}`),Cn[i]),toHandle:i=>{switch(i){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const s=Yo.pop()||Cn.length;return Cn[s]=i,Cn[s+1]=1,s}}}},Ko={name:"emscripten::val",fromWireType:i=>{var s=kt.toValue(i);return Xs(i),s},toWireType:(i,s)=>kt.toHandle(s),argPackAdvance:An,readValueFromPointer:zr,destructorFunction:null},Zo=i=>dn(i,Ko),Wu=(i,s,l)=>{switch(s){case 1:return l?function(c){return this.fromWireType(nt[c])}:function(c){return this.fromWireType(Qe[c])};case 2:return l?function(c){return this.fromWireType(ce[c>>1])}:function(c){return this.fromWireType(de[c>>1])};case 4:return l?function(c){return this.fromWireType(le[c>>2])}:function(c){return this.fromWireType(ye[c>>2])};default:throw new TypeError(`invalid integer width (${s}): ${i}`)}},Xu=(i,s,l,c)=>{s=Ht(s);function d(){}d.values={},dn(i,{name:s,constructor:d,fromWireType:function(m){return this.constructor.values[m]},toWireType:(m,M)=>M.value,argPackAdvance:An,readValueFromPointer:Wu(s,l,c),destructorFunction:null}),Vs(s,d)},cr=(i,s)=>{var l=di[i];return l===void 0&&ft(`${s} has unknown type ${$o(i)}`),l},$u=(i,s,l)=>{var c=cr(i,"enum");s=Ht(s);var d=c.constructor,m=Object.create(c.constructor.prototype,{value:{value:l},constructor:{value:kr(`${c.name}_${s}`,function(){})}});d.values[l]=m,d[s]=m},ju=(i,s)=>{switch(s){case 4:return function(l){return this.fromWireType(Ve[l>>2])};case 8:return function(l){return this.fromWireType(ct[l>>3])};default:throw new TypeError(`invalid float width (${s}): ${i}`)}},qu=(i,s,l)=>{s=Ht(s),dn(i,{name:s,fromWireType:c=>c,toWireType:(c,d)=>{if(typeof d!="number"&&typeof d!="boolean")throw new TypeError(`Cannot convert ${fi(d)} to ${this.name}`);return d},argPackAdvance:An,readValueFromPointer:ju(s,l),destructorFunction:null})},Yu=(i,s,l,c,d,m,M,w)=>{var D=Wr(s,l);i=Ht(i),i=Ws(i),d=Rn(c,d,M),Vs(i,function(){pi(`Cannot call ${i} due to unbound types`,D)},s-1),gn([],D,V=>{var q=[V[0],null].concat(V.slice(1));return Wo(i,Gr(i,q,null,d,m,M),s-1),[]})},Ku=(i,s,l,c,d)=>{s=Ht(s);const m=c===0;let M=D=>D;if(m){var w=32-8*l;M=D=>D<<w>>>w,d=M(d)}dn(i,{name:s,fromWireType:M,toWireType:(D,V)=>{if(typeof V!="number"&&typeof V!="boolean")throw new TypeError(`Cannot convert "${fi(V)}" to ${s}`);return ko(s,V,c,d),V},argPackAdvance:An,readValueFromPointer:Oo(s,l,c!==0),destructorFunction:null})},Zu=(i,s,l)=>{var c=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],d=c[s];function m(M){var w=ye[M>>2],D=ye[M+4>>2];return new d(nt.buffer,D,w)}l=Ht(l),dn(i,{name:l,fromWireType:m,argPackAdvance:An,readValueFromPointer:m},{ignoreDuplicateRegistrations:!0})},Ju=Object.assign({optional:!0},Ko),Qu=(i,s)=>{dn(i,Ju)},mi=(i,s,l)=>(P(typeof l=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),ge(i,Qe,s,l)),eh=(i,s)=>{s=Ht(s),dn(i,{name:s,fromWireType(l){for(var c=ye[l>>2],d=l+4,m,M,w=d,M=0;M<=c;++M){var D=d+M;if(M==c||Qe[D]==0){var V=D-w,q=rt(w,V);m===void 0?m=q:(m+="\0",m+=q),w=D+1}}return Pn(l),m},toWireType(l,c){c instanceof ArrayBuffer&&(c=new Uint8Array(c));var d,m=typeof c=="string";m||ArrayBuffer.isView(c)&&c.BYTES_PER_ELEMENT==1||ft("Cannot pass non-string to std::string"),m?d=$(c):d=c.length;var M=qs(4+d+1),w=M+4;return ye[M>>2]=d,m?mi(c,w,d+1):Qe.set(c,w),l!==null&&l.push(Pn,M),M},argPackAdvance:An,readValueFromPointer:zr,destructorFunction(l){Pn(l)}})},Jo=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,th=(i,s)=>{P(i%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var l=i>>1,c=l+s/2,d=l;!(d>=c)&&de[d];)++d;if(d-l>16&&Jo)return Jo.decode(de.subarray(l,d));for(var m="",M=l;!(M>=c);++M){var w=de[M];if(w==0)break;m+=String.fromCharCode(w)}return m},nh=(i,s,l)=>{if(P(s%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),P(typeof l=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),l??(l=2147483647),l<2)return 0;l-=2;for(var c=s,d=l<i.length*2?l/2:i.length,m=0;m<d;++m){var M=i.charCodeAt(m);ce[s>>1]=M,s+=2}return ce[s>>1]=0,s-c},ih=i=>i.length*2,rh=(i,s)=>{P(i%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var l="",c=0;!(c>=s/4);c++){var d=le[i+c*4>>2];if(!d)break;l+=String.fromCodePoint(d)}return l},sh=(i,s,l)=>{if(P(s%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),P(typeof l=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),l??(l=2147483647),l<4)return 0;for(var c=s,d=c+l-4,m=0;m<i.length;++m){var M=i.codePointAt(m);if(M>65535&&m++,le[s>>2]=M,s+=4,s+4>d)break}return le[s>>2]=0,s-c},ah=i=>{for(var s=0,l=0;l<i.length;++l){var c=i.codePointAt(l);c>65535&&l++,s+=4}return s},oh=(i,s,l)=>{l=Ht(l);var c,d,m,M;s===2?(c=th,d=nh,M=ih,m=w=>de[w>>1]):s===4&&(c=rh,d=sh,M=ah,m=w=>ye[w>>2]),dn(i,{name:l,fromWireType:w=>{for(var D=ye[w>>2],V,q=w+4,te=0;te<=D;++te){var he=w+4+te*s;if(te==D||m(he)==0){var se=he-q,me=c(q,se);V===void 0?V=me:(V+="\0",V+=me),q=he+s}}return Pn(w),V},toWireType:(w,D)=>{typeof D!="string"&&ft(`Cannot pass non-string to C++ string type ${l}`);var V=M(D),q=qs(4+V+s);return ye[q>>2]=V/s,d(D,q+4,V+s),w!==null&&w.push(Pn,q),q},argPackAdvance:An,readValueFromPointer:zr,destructorFunction(w){Pn(w)}})},lh=(i,s)=>{Zo(i)},ch=(i,s)=>{s=Ht(s),dn(i,{isVoid:!0,name:s,argPackAdvance:0,fromWireType:()=>{},toWireType:(l,c)=>{}})},uh=()=>{throw new O},Qo=(i,s,l)=>{var c=[],d=i.toWireType(c,l);return c.length&&(ye[s>>2]=kt.toHandle(c)),d},hh=(i,s,l)=>(i=kt.toValue(i),s=cr(s,"emval::as"),Qo(s,l,i)),dh=(i,s)=>(i=kt.toValue(i),s=cr(s,"emval::as"),s.toWireType(null,i)),Xr=[],fh=(i,s,l,c)=>(i=Xr[i],s=kt.toValue(s),i(null,s,l,c)),ph={},$s=i=>{var s=ph[i];return s===void 0?Ht(i):s},mh=(i,s,l,c,d)=>(i=Xr[i],s=kt.toValue(s),l=$s(l),i(s,s[l],c,d)),el=()=>globalThis,_h=i=>i===0?kt.toHandle(el()):(i=$s(i),kt.toHandle(el()[i])),gh=i=>{var s=Xr.length;return Xr.push(i),s},vh=(i,s)=>{for(var l=new Array(i),c=0;c<i;++c)l[c]=cr(ye[s+c*4>>2],`parameter ${c}`);return l},xh=(i,s,l)=>{var c=vh(i,s),d=c.shift();i--;var m=`return function (obj, func, destructorsRef, args) {
`,M=0,w=[];l===0&&w.push("obj");for(var D=["retType"],V=[d],q=0;q<i;++q)w.push(`arg${q}`),D.push(`argType${q}`),V.push(c[q]),m+=`  var arg${q} = argType${q}.readValueFromPointer(args${M?"+"+M:""});
`,M+=c[q].argPackAdvance;var te=l===1?"new func":"func.call";m+=`  var rv = ${te}(${w.join(", ")});
`,d.isVoid||(D.push("emval_returnValue"),V.push(Qo),m+=`  return emval_returnValue(retType, destructorsRef, rv);
`),m+=`};
`;var he=new Function(...D,m)(...V),se=`methodCaller<(${c.map(me=>me.name).join(", ")}) => ${d.name}>`;return gh(kr(se,he))},Eh=(i,s)=>(i=kt.toValue(i),s=kt.toValue(s),kt.toHandle(i[s])),Sh=i=>{i>9&&(Cn[i+1]+=1)},yh=i=>(i=kt.toValue(i),typeof i=="number"),Mh=i=>(i=kt.toValue(i),typeof i=="string"),Th=()=>kt.toHandle([]),wh=i=>kt.toHandle($s(i)),bh=i=>{var s=kt.toValue(i);Gs(s),Xs(i)},Ah=(i,s)=>{i=cr(i,"_emval_take_value");var l=i.readValueFromPointer(s);return kt.toHandle(l)},Rh=i=>{throw i=kt.toValue(i),i},Ch=i=>i%4===0&&(i%100!==0||i%400===0),Ph=[0,31,60,91,121,152,182,213,244,274,305,335],Dh=[0,31,59,90,120,151,181,212,243,273,304,334],tl=i=>{var s=Ch(i.getFullYear()),l=s?Ph:Dh,c=l[i.getMonth()]+i.getDate()-1;return c},Lh=9007199254740992,Fh=-9007199254740992,nl=i=>i<Fh||i>Lh?NaN:Number(i);function Ih(i,s){i=nl(i);var l=new Date(i*1e3);le[s>>2]=l.getSeconds(),le[s+4>>2]=l.getMinutes(),le[s+8>>2]=l.getHours(),le[s+12>>2]=l.getDate(),le[s+16>>2]=l.getMonth(),le[s+20>>2]=l.getFullYear()-1900,le[s+24>>2]=l.getDay();var c=tl(l)|0;le[s+28>>2]=c,le[s+36>>2]=-(l.getTimezoneOffset()*60);var d=new Date(l.getFullYear(),0,1),m=new Date(l.getFullYear(),6,1).getTimezoneOffset(),M=d.getTimezoneOffset(),w=(m!=M&&l.getTimezoneOffset()==Math.min(M,m))|0;le[s+32>>2]=w}var Uh=function(i){var s=(()=>{var l=new Date(le[i+20>>2]+1900,le[i+16>>2],le[i+12>>2],le[i+8>>2],le[i+4>>2],le[i>>2],0),c=le[i+32>>2],d=l.getTimezoneOffset(),m=new Date(l.getFullYear(),0,1),M=new Date(l.getFullYear(),6,1).getTimezoneOffset(),w=m.getTimezoneOffset(),D=Math.min(w,M);if(c<0)le[i+32>>2]=+(M!=w&&D==d);else if(c>0!=(D==d)){var V=Math.max(w,M),q=c>0?D:V;l.setTime(l.getTime()+(q-d)*6e4)}le[i+24>>2]=l.getDay();var te=tl(l)|0;le[i+28>>2]=te,le[i>>2]=l.getSeconds(),le[i+4>>2]=l.getMinutes(),le[i+8>>2]=l.getHours(),le[i+12>>2]=l.getDate(),le[i+16>>2]=l.getMonth(),le[i+20>>2]=l.getYear();var he=l.getTime();return isNaN(he)?-1:he/1e3})();return BigInt(s)},Nh=(i,s,l,c)=>{var d=new Date().getFullYear(),m=new Date(d,0,1),M=new Date(d,6,1),w=m.getTimezoneOffset(),D=M.getTimezoneOffset(),V=Math.max(w,D);ye[i>>2]=V*60,le[s>>2]=+(w!=D);var q=se=>{var me=se>=0?"-":"+",He=Math.abs(se),st=String(Math.floor(He/60)).padStart(2,"0"),at=String(He%60).padStart(2,"0");return`UTC${me}${st}${at}`},te=q(w),he=q(D);P(te),P(he),P($(te)<=16,`timezone name truncated to fit in TZNAME_MAX (${te})`),P($(he)<=16,`timezone name truncated to fit in TZNAME_MAX (${he})`),D<w?(mi(te,l,17),mi(he,c,17)):(mi(te,c,17),mi(he,l,17))},il=()=>performance.now(),rl=()=>Date.now(),Oh=i=>i>=0&&i<=3;function kh(i,s,l){if(!Oh(i))return 28;var c;i===0?c=rl():c=il();var d=Math.round(c*1e3*1e3);return At[l>>3]=BigInt(d),0}var $r=[],Bh=(i,s)=>{P(Array.isArray($r)),P(s%16==0),$r.length=0;for(var l;l=Qe[i++];){var c=String.fromCharCode(l),d=["d","f","i","p"];d.push("j"),P(d.includes(c),`Invalid character ${l}("${c}") in readEmAsmArgs! Use only [${d}], and do not specify "v" for void return argument.`);var m=l!=105;m&=l!=112,s+=m&&s%8?4:0,$r.push(l==112?ye[s>>2]:l==106?At[s>>3]:l==105?le[s>>2]:ct[s>>3]),s+=m?8:4}return $r},zh=(i,s,l)=>{var c=Bh(s,l);return P(ul.hasOwnProperty(i),`No EM_ASM constant found at address ${i}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),ul[i](...c)},Hh=(i,s,l)=>zh(i,s,l),sl=()=>2147483648,Vh=()=>sl(),Gh=(i,s)=>(P(s,"alignment argument is required"),Math.ceil(i/s)*s),Wh=i=>{var s=gt.buffer,l=(i-s.byteLength+65535)/65536|0;try{return gt.grow(l),Je(),1}catch(c){U(`growMemory: Attempted to grow heap from ${s.byteLength} bytes to ${i} bytes, but got error: ${c}`)}},Xh=i=>{var s=Qe.length;i>>>=0,P(i>s);var l=sl();if(i>l)return U(`Cannot enlarge memory, requested ${i} bytes, but the limit is ${l} bytes!`),!1;for(var c=1;c<=4;c*=2){var d=s*(1+.2/c);d=Math.min(d,i+100663296);var m=Math.min(l,Gh(Math.max(i,d),65536)),M=Wh(m);if(M)return!0}return U(`Failed to grow the heap from ${s} bytes to ${m} bytes, not enough memory!`),!1},js={},$h=()=>p||"./this.program",ur=()=>{if(!ur.strings){var i=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8",s={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:i,_:$h()};for(var l in js)js[l]===void 0?delete s[l]:s[l]=js[l];var c=[];for(var l in s)c.push(`${l}=${s[l]}`);ur.strings=c}return ur.strings},jh=(i,s)=>{var l=0,c=0;for(var d of ur()){var m=s+l;ye[i+c>>2]=m,l+=mi(d,m,1/0)+1,c+=4}return 0},qh=(i,s)=>{var l=ur();ye[i>>2]=l.length;var c=0;for(var d of l)c+=$(d)+1;return ye[s>>2]=c,0},al=0,ol=()=>Te||al>0,Yh=i=>{var s;ol()||((s=t.onExit)==null||s.call(t,i),G=!0),f(i,new je(i))},Kh=(i,s)=>{if(fp(),ol()&&!s){var l=`program exited (with status: ${i}), but keepRuntimeAlive() is set (counter=${al}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;Ze==null||Ze(l),U(l)}Yh(i)},Zh=Kh;function Jh(i){try{var s=ut.getStreamFromFD(i);return y.close(s),0}catch(l){if(typeof y>"u"||l.name!=="ErrnoError")throw l;return l.errno}}var Qh=(i,s,l,c)=>{for(var d=0,m=0;m<l;m++){var M=ye[s>>2],w=ye[s+4>>2];s+=8;var D=y.read(i,nt,M,w,c);if(D<0)return-1;if(d+=D,D<w)break}return d};function ed(i,s,l,c){try{var d=ut.getStreamFromFD(i),m=Qh(d,s,l);return ye[c>>2]=m,0}catch(M){if(typeof y>"u"||M.name!=="ErrnoError")throw M;return M.errno}}function td(i,s,l,c){s=nl(s);try{if(isNaN(s))return 61;var d=ut.getStreamFromFD(i);return y.llseek(d,s,l),At[c>>3]=BigInt(d.position),d.getdents&&s===0&&l===0&&(d.getdents=null),0}catch(m){if(typeof y>"u"||m.name!=="ErrnoError")throw m;return m.errno}}var nd=(i,s,l,c)=>{for(var d=0,m=0;m<l;m++){var M=ye[s>>2],w=ye[s+4>>2];s+=8;var D=y.write(i,nt,M,w,c);if(D<0)return-1;if(d+=D,D<w)break}return d};function id(i,s,l,c){try{var d=ut.getStreamFromFD(i),m=nd(d,s,l);return ye[c>>2]=m,0}catch(M){if(typeof y>"u"||M.name!=="ErrnoError")throw M;return M.errno}}var rd=i=>i,sd=i=>{var s=t["_"+i];return P(s,"Cannot call unknown function "+i+", make sure it is exported"),s},ad=(i,s)=>{P(i.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),nt.set(i,s)},jr=i=>_l(i),od=i=>{var s=$(i)+1,l=jr(s);return mi(i,l,s),l},ll=(i,s,l,c,d)=>{var m={string:me=>{var He=0;return me!=null&&me!==0&&(He=od(me)),He},array:me=>{var He=jr(me.length);return ad(me,He),He}};function M(me){return s==="string"?rt(me):s==="boolean"?!!me:me}var w=sd(i),D=[],V=0;if(P(s!=="array",'Return type should not be "array".'),c)for(var q=0;q<c.length;q++){var te=m[l[q]];te?(V===0&&(V=B()),D[q]=te(c[q])):D[q]=c[q]}var he=w(...D);function se(me){return V!==0&&H(V),M(me)}return he=se(he),he},ld=(i,s,l,c)=>(...d)=>ll(i,s,l,d),cd=(...i)=>y.createPath(...i),ud=(...i)=>y.unlink(...i),hd=(...i)=>y.createLazyFile(...i),dd=(...i)=>y.createDevice(...i),fd=i=>qr(i),pd=i=>Zs(i),md=i=>{var s=B(),l=jr(4),c=jr(4);vl(i,l,c);var d=ye[l>>2],m=ye[c>>2],M=rt(d);Pn(d);var w;return m&&(w=rt(m),Pn(m)),H(s),[M,w]},cl=i=>md(i);y.createPreloadedFile=yt,y.staticInit(),wu(),Fu(),P(Cn.length===5*2),t.noExitRuntime&&(Te=t.noExitRuntime),t.preloadPlugins&&(It=t.preloadPlugins),t.print&&(k=t.print),t.printErr&&(U=t.printErr),t.wasmBinary&&(F=t.wasmBinary),vd(),t.arguments&&t.arguments,t.thisProgram&&(p=t.thisProgram),P(typeof t.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),P(typeof t.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),P(typeof t.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),P(typeof t.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),P(typeof t.read>"u","Module.read option was removed"),P(typeof t.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),P(typeof t.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),P(typeof t.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),P(typeof t.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),P(typeof t.ENVIRONMENT>"u","Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),P(typeof t.STACK_SIZE>"u","STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),P(typeof t.wasmMemory>"u","Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),P(typeof t.INITIAL_MEMORY>"u","Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),t.addRunDependency=I,t.removeRunDependency=b,t.ccall=ll,t.cwrap=ld,t.FS_createPreloadedFile=yt,t.FS_unlink=ud,t.FS_createPath=cd,t.FS_createDevice=dd,t.FS=y,t.FS_createDataFile=lt,t.FS_createLazyFile=hd,t.MEMFS=xe;var _d=["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","zeroMemory","withStackSave","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","runMainThreadEmAsm","jstoi_q","autoResumeAudioContext","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","HandleAllocator","getNativeTypeSize","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","stringToAscii","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace","getFunctionArgsName","createJsInvokerSignature","PureVirtualError","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","setDelayFunction","count_emval_handles"];_d.forEach(we);var gd=["run","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP8","HEAPU8","HEAP16","HEAPU16","HEAP32","HEAPU32","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","setTempRet0","ptrToString","exitJS","getHeapMax","growMemory","ENV","ERRNO_CODES","strError","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","getExecutableName","keepRuntimeAlive","asyncLoad","alignMemory","mmapAlloc","wasmTable","getUniqueRunDependency","noExitRuntime","addOnPreRun","addOnPostRun","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","intArrayFromString","AsciiToString","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","getEnvStrings","checkWasiClock","doReadv","doWritev","initRandomFill","randomFill","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","preloadPlugins","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS_readFile","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_forceLoadFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s","InternalError","BindingError","throwInternalError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","whenDependentTypesAreResolved","getTypeName","getFunctionName","heap32VectorToArray","requireRegisteredType","usesDestructorStack","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","GenericWireTypeSize","EmValType","EmValOptionalType","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","getInheritedInstance","registeredPointers","registerType","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","assertIntegerRange","readPointer","runDestructors","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","deletionQueue","flushPendingDeletes","delayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_freelist","emval_handles","emval_symbols","getStringOrSymbol","Emval","emval_get_global","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller"];gd.forEach(Fe),t.incrementExceptionRefcount=fd,t.decrementExceptionRefcount=pd,t.getExceptionMessage=cl;function vd(){ue("fetchSettings")}var ul={701944:()=>{typeof t<"u"&&"mjDISABLESTRING mjENABLESTRING mjFRAMESTRING mjLABELSTRING mjRNDSTRING mjTIMERSTRING mjVISSTRING".split(" ").forEach(function(i){Object.defineProperty(t,i,{get:function(){return t["get_"+i]()},set:function(s){},enumerable:!0,configurable:!0})})}},hl=ne("___getTypeName"),qs=ne("_malloc"),Ys=ne("_fflush"),Pn=ne("_free"),Ks=ne("_emscripten_stack_get_end"),dl=ne("_strerror"),pe=ne("_setThrew"),fl=ne("__emscripten_tempret_set"),pl=ne("_emscripten_stack_init"),ml=ne("__emscripten_stack_restore"),_l=ne("__emscripten_stack_alloc"),gl=ne("_emscripten_stack_get_current"),Zs=ne("___cxa_decrement_exception_refcount"),qr=ne("___cxa_increment_exception_refcount"),vl=ne("___get_exception_message"),xl=ne("___cxa_can_catch"),El=ne("___cxa_get_exception_ptr");function xd(i){hl=re("__getTypeName",1),qs=re("malloc",1),Ys=re("fflush",1),Pn=re("free",1),Ks=i.emscripten_stack_get_end,i.emscripten_stack_get_base,dl=re("strerror",1),pe=re("setThrew",2),fl=re("_emscripten_tempret_set",1),pl=i.emscripten_stack_init,i.emscripten_stack_get_free,ml=i._emscripten_stack_restore,_l=i._emscripten_stack_alloc,gl=i.emscripten_stack_get_current,Zs=re("__cxa_decrement_exception_refcount",1),qr=re("__cxa_increment_exception_refcount",1),vl=re("__get_exception_message",3),xl=re("__cxa_can_catch",3),El=re("__cxa_get_exception_ptr",1)}var Sl={__assert_fail:_n,__cxa_begin_catch:kn,__cxa_current_primary_exception:sr,__cxa_end_catch:Pr,__cxa_find_matching_catch_2:Dr,__cxa_find_matching_catch_3:Lr,__cxa_rethrow:Fr,__cxa_rethrow_primary_exception:Us,__cxa_throw:Ns,__cxa_uncaught_exceptions:Os,__resumeException:ks,__syscall_dup3:hi,__syscall_fcntl64:rn,__syscall_fstat64:qt,__syscall_ioctl:Kt,__syscall_lstat64:ar,__syscall_newfstatat:zn,__syscall_openat:fu,__syscall_stat64:pu,_abort_js:mu,_embind_register_bigint:gu,_embind_register_bool:vu,_embind_register_class:Uu,_embind_register_class_class_function:Bu,_embind_register_class_constructor:zu,_embind_register_class_function:Hu,_embind_register_class_property:Vu,_embind_register_constant:Gu,_embind_register_emval:Zo,_embind_register_enum:Xu,_embind_register_enum_value:$u,_embind_register_float:qu,_embind_register_function:Yu,_embind_register_integer:Ku,_embind_register_memory_view:Zu,_embind_register_optional:Qu,_embind_register_std_string:eh,_embind_register_std_wstring:oh,_embind_register_user_type:lh,_embind_register_void:ch,_emscripten_throw_longjmp:uh,_emval_as:hh,_emval_as_int64:dh,_emval_call:fh,_emval_call_method:mh,_emval_decref:Xs,_emval_get_global:_h,_emval_get_method_caller:xh,_emval_get_property:Eh,_emval_incref:Sh,_emval_is_number:yh,_emval_is_string:Mh,_emval_new_array:Th,_emval_new_cstring:wh,_emval_run_destructors:bh,_emval_take_value:Ah,_emval_throw:Rh,_localtime_js:Ih,_mktime_js:Uh,_tzset_js:Nh,clock_time_get:kh,emscripten_asm_const_int:Hh,emscripten_date_now:rl,emscripten_get_heap_max:Vh,emscripten_get_now:il,emscripten_resize_heap:Xh,environ_get:jh,environ_sizes_get:qh,exit:Zh,fd_close:Jh,fd_read:ed,fd_seek:td,fd_write:id,invoke_ddd:tp,invoke_dddi:hf,invoke_dddidi:df,invoke_ddidi:uf,invoke_di:ff,invoke_didd:Wf,invoke_dii:ef,invoke_diii:Id,invoke_diiii:cf,invoke_diiiidd:of,invoke_diiiidi:Od,invoke_diiiii:Rd,invoke_diiiiii:Gd,invoke_diiiiiii:pf,invoke_diiiiiiiii:Hd,invoke_diiiiiiiiiiii:Vd,invoke_fiii:cp,invoke_i:Cd,invoke_id:Af,invoke_ii:yd,invoke_iid:Tf,invoke_iidiii:Zd,invoke_iidiiid:Yd,invoke_iidiiiiidi:Jd,invoke_iii:Ed,invoke_iiid:Qd,invoke_iiididdddddd:Kd,invoke_iiidiiiiiiii:qd,invoke_iiii:wd,invoke_iiiidddiiiii:_f,invoke_iiiii:Fd,invoke_iiiiid:Hf,invoke_iiiiii:Lf,invoke_iiiiiii:bf,invoke_iiiiiiii:Mf,invoke_iiiiiiiidd:Vf,invoke_iiiiiiiii:af,invoke_iiiiiiiiid:ep,invoke_iiiiiiiiii:Pf,invoke_iiiiiiiiiidddiiiiiiiii:jd,invoke_iiiiiiiiiii:Rf,invoke_iiiiiiiiiiii:up,invoke_iiiiiiiiiiiii:Xf,invoke_iiij:Df,invoke_iiji:Cf,invoke_j:op,invoke_ji:Jf,invoke_jiiii:Ff,invoke_jij:$f,invoke_v:Td,invoke_vi:Md,invoke_vid:wf,invoke_viddd:Uf,invoke_vidddd:Nf,invoke_vidi:lf,invoke_vidiii:Xd,invoke_vif:rp,invoke_vii:Ad,invoke_viid:rf,invoke_viiddi:zf,invoke_viiddidi:Bf,invoke_viiddii:mf,invoke_viidi:nf,invoke_viidii:Nd,invoke_viidiii:Sf,invoke_viidiiid:xf,invoke_viidiiiii:$d,invoke_viidiiiiidi:yf,invoke_viidiiiiiiii:Wd,invoke_viii:Sd,invoke_viiid:Bd,invoke_viiidd:kf,invoke_viiidi:tf,invoke_viiididdddddd:Ef,invoke_viiidiiiiiiii:vf,invoke_viiii:Dd,invoke_viiiiddd:Of,invoke_viiiidi:np,invoke_viiiifi:ip,invoke_viiiii:bd,invoke_viiiiid:kd,invoke_viiiiii:Pd,invoke_viiiiiii:Ud,invoke_viiiiiiii:sf,invoke_viiiiiiiii:Gf,invoke_viiiiiiiiii:Kf,invoke_viiiiiiiiiidddiiiiiiiii:gf,invoke_viiiiiiiiiii:Qf,invoke_viiiiiiiiiiid:zd,invoke_viiiiiiiiiiiii:qf,invoke_viiiiiiiiiiiiii:Yf,invoke_viiiiiiiiiiiiiii:hp,invoke_viiiiiiiiiiiiiiiiii:Zf,invoke_viiiij:sp,invoke_viiij:Ld,invoke_viij:ap,invoke_viijii:lp,invoke_vij:jf,invoke_vijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj:If,llvm_eh_typeid_for:rd},_i=await Pe();function Ed(i,s,l){var c=B();try{return _e(i)(s,l)}catch(d){if(H(c),!(d instanceof T))throw d;pe(1,0)}}function Sd(i,s,l,c){var d=B();try{_e(i)(s,l,c)}catch(m){if(H(d),!(m instanceof T))throw m;pe(1,0)}}function yd(i,s){var l=B();try{return _e(i)(s)}catch(c){if(H(l),!(c instanceof T))throw c;pe(1,0)}}function Md(i,s){var l=B();try{_e(i)(s)}catch(c){if(H(l),!(c instanceof T))throw c;pe(1,0)}}function Td(i){var s=B();try{_e(i)()}catch(l){if(H(s),!(l instanceof T))throw l;pe(1,0)}}function wd(i,s,l,c){var d=B();try{return _e(i)(s,l,c)}catch(m){if(H(d),!(m instanceof T))throw m;pe(1,0)}}function bd(i,s,l,c,d,m){var M=B();try{_e(i)(s,l,c,d,m)}catch(w){if(H(M),!(w instanceof T))throw w;pe(1,0)}}function Ad(i,s,l){var c=B();try{_e(i)(s,l)}catch(d){if(H(c),!(d instanceof T))throw d;pe(1,0)}}function Rd(i,s,l,c,d,m){var M=B();try{return _e(i)(s,l,c,d,m)}catch(w){if(H(M),!(w instanceof T))throw w;pe(1,0)}}function Cd(i){var s=B();try{return _e(i)()}catch(l){if(H(s),!(l instanceof T))throw l;pe(1,0)}}function Pd(i,s,l,c,d,m,M){var w=B();try{_e(i)(s,l,c,d,m,M)}catch(D){if(H(w),!(D instanceof T))throw D;pe(1,0)}}function Dd(i,s,l,c,d){var m=B();try{_e(i)(s,l,c,d)}catch(M){if(H(m),!(M instanceof T))throw M;pe(1,0)}}function Ld(i,s,l,c,d){var m=B();try{_e(i)(s,l,c,d)}catch(M){if(H(m),!(M instanceof T))throw M;pe(1,0)}}function Fd(i,s,l,c,d){var m=B();try{return _e(i)(s,l,c,d)}catch(M){if(H(m),!(M instanceof T))throw M;pe(1,0)}}function Id(i,s,l,c){var d=B();try{return _e(i)(s,l,c)}catch(m){if(H(d),!(m instanceof T))throw m;pe(1,0)}}function Ud(i,s,l,c,d,m,M,w){var D=B();try{_e(i)(s,l,c,d,m,M,w)}catch(V){if(H(D),!(V instanceof T))throw V;pe(1,0)}}function Nd(i,s,l,c,d,m){var M=B();try{_e(i)(s,l,c,d,m)}catch(w){if(H(M),!(w instanceof T))throw w;pe(1,0)}}function Od(i,s,l,c,d,m,M){var w=B();try{return _e(i)(s,l,c,d,m,M)}catch(D){if(H(w),!(D instanceof T))throw D;pe(1,0)}}function kd(i,s,l,c,d,m,M){var w=B();try{_e(i)(s,l,c,d,m,M)}catch(D){if(H(w),!(D instanceof T))throw D;pe(1,0)}}function Bd(i,s,l,c,d){var m=B();try{_e(i)(s,l,c,d)}catch(M){if(H(m),!(M instanceof T))throw M;pe(1,0)}}function zd(i,s,l,c,d,m,M,w,D,V,q,te,he){var se=B();try{_e(i)(s,l,c,d,m,M,w,D,V,q,te,he)}catch(me){if(H(se),!(me instanceof T))throw me;pe(1,0)}}function Hd(i,s,l,c,d,m,M,w,D,V){var q=B();try{return _e(i)(s,l,c,d,m,M,w,D,V)}catch(te){if(H(q),!(te instanceof T))throw te;pe(1,0)}}function Vd(i,s,l,c,d,m,M,w,D,V,q,te,he){var se=B();try{return _e(i)(s,l,c,d,m,M,w,D,V,q,te,he)}catch(me){if(H(se),!(me instanceof T))throw me;pe(1,0)}}function Gd(i,s,l,c,d,m,M){var w=B();try{return _e(i)(s,l,c,d,m,M)}catch(D){if(H(w),!(D instanceof T))throw D;pe(1,0)}}function Wd(i,s,l,c,d,m,M,w,D,V,q,te){var he=B();try{_e(i)(s,l,c,d,m,M,w,D,V,q,te)}catch(se){if(H(he),!(se instanceof T))throw se;pe(1,0)}}function Xd(i,s,l,c,d,m){var M=B();try{_e(i)(s,l,c,d,m)}catch(w){if(H(M),!(w instanceof T))throw w;pe(1,0)}}function $d(i,s,l,c,d,m,M,w,D){var V=B();try{_e(i)(s,l,c,d,m,M,w,D)}catch(q){if(H(V),!(q instanceof T))throw q;pe(1,0)}}function jd(i,s,l,c,d,m,M,w,D,V,q,te,he,se,me,He,st,at,Lt,_t,Zt,Vt){var en=B();try{return _e(i)(s,l,c,d,m,M,w,D,V,q,te,he,se,me,He,st,at,Lt,_t,Zt,Vt)}catch(Pt){if(H(en),!(Pt instanceof T))throw Pt;pe(1,0)}}function qd(i,s,l,c,d,m,M,w,D,V,q,te){var he=B();try{return _e(i)(s,l,c,d,m,M,w,D,V,q,te)}catch(se){if(H(he),!(se instanceof T))throw se;pe(1,0)}}function Yd(i,s,l,c,d,m,M){var w=B();try{return _e(i)(s,l,c,d,m,M)}catch(D){if(H(w),!(D instanceof T))throw D;pe(1,0)}}function Kd(i,s,l,c,d,m,M,w,D,V,q,te){var he=B();try{return _e(i)(s,l,c,d,m,M,w,D,V,q,te)}catch(se){if(H(he),!(se instanceof T))throw se;pe(1,0)}}function Zd(i,s,l,c,d,m){var M=B();try{return _e(i)(s,l,c,d,m)}catch(w){if(H(M),!(w instanceof T))throw w;pe(1,0)}}function Jd(i,s,l,c,d,m,M,w,D,V){var q=B();try{return _e(i)(s,l,c,d,m,M,w,D,V)}catch(te){if(H(q),!(te instanceof T))throw te;pe(1,0)}}function Qd(i,s,l,c){var d=B();try{return _e(i)(s,l,c)}catch(m){if(H(d),!(m instanceof T))throw m;pe(1,0)}}function ef(i,s,l){var c=B();try{return _e(i)(s,l)}catch(d){if(H(c),!(d instanceof T))throw d;pe(1,0)}}function tf(i,s,l,c,d,m){var M=B();try{_e(i)(s,l,c,d,m)}catch(w){if(H(M),!(w instanceof T))throw w;pe(1,0)}}function nf(i,s,l,c,d){var m=B();try{_e(i)(s,l,c,d)}catch(M){if(H(m),!(M instanceof T))throw M;pe(1,0)}}function rf(i,s,l,c){var d=B();try{_e(i)(s,l,c)}catch(m){if(H(d),!(m instanceof T))throw m;pe(1,0)}}function sf(i,s,l,c,d,m,M,w,D){var V=B();try{_e(i)(s,l,c,d,m,M,w,D)}catch(q){if(H(V),!(q instanceof T))throw q;pe(1,0)}}function af(i,s,l,c,d,m,M,w,D){var V=B();try{return _e(i)(s,l,c,d,m,M,w,D)}catch(q){if(H(V),!(q instanceof T))throw q;pe(1,0)}}function of(i,s,l,c,d,m,M){var w=B();try{return _e(i)(s,l,c,d,m,M)}catch(D){if(H(w),!(D instanceof T))throw D;pe(1,0)}}function lf(i,s,l,c){var d=B();try{_e(i)(s,l,c)}catch(m){if(H(d),!(m instanceof T))throw m;pe(1,0)}}function cf(i,s,l,c,d){var m=B();try{return _e(i)(s,l,c,d)}catch(M){if(H(m),!(M instanceof T))throw M;pe(1,0)}}function uf(i,s,l,c,d){var m=B();try{return _e(i)(s,l,c,d)}catch(M){if(H(m),!(M instanceof T))throw M;pe(1,0)}}function hf(i,s,l,c){var d=B();try{return _e(i)(s,l,c)}catch(m){if(H(d),!(m instanceof T))throw m;pe(1,0)}}function df(i,s,l,c,d,m){var M=B();try{return _e(i)(s,l,c,d,m)}catch(w){if(H(M),!(w instanceof T))throw w;pe(1,0)}}function ff(i,s){var l=B();try{return _e(i)(s)}catch(c){if(H(l),!(c instanceof T))throw c;pe(1,0)}}function pf(i,s,l,c,d,m,M,w){var D=B();try{return _e(i)(s,l,c,d,m,M,w)}catch(V){if(H(D),!(V instanceof T))throw V;pe(1,0)}}function mf(i,s,l,c,d,m,M){var w=B();try{_e(i)(s,l,c,d,m,M)}catch(D){if(H(w),!(D instanceof T))throw D;pe(1,0)}}function _f(i,s,l,c,d,m,M,w,D,V,q,te){var he=B();try{return _e(i)(s,l,c,d,m,M,w,D,V,q,te)}catch(se){if(H(he),!(se instanceof T))throw se;pe(1,0)}}function gf(i,s,l,c,d,m,M,w,D,V,q,te,he,se,me,He,st,at,Lt,_t,Zt,Vt,en){var Pt=B();try{_e(i)(s,l,c,d,m,M,w,D,V,q,te,he,se,me,He,st,at,Lt,_t,Zt,Vt,en)}catch(Yn){if(H(Pt),!(Yn instanceof T))throw Yn;pe(1,0)}}function vf(i,s,l,c,d,m,M,w,D,V,q,te,he){var se=B();try{_e(i)(s,l,c,d,m,M,w,D,V,q,te,he)}catch(me){if(H(se),!(me instanceof T))throw me;pe(1,0)}}function xf(i,s,l,c,d,m,M,w){var D=B();try{_e(i)(s,l,c,d,m,M,w)}catch(V){if(H(D),!(V instanceof T))throw V;pe(1,0)}}function Ef(i,s,l,c,d,m,M,w,D,V,q,te,he){var se=B();try{_e(i)(s,l,c,d,m,M,w,D,V,q,te,he)}catch(me){if(H(se),!(me instanceof T))throw me;pe(1,0)}}function Sf(i,s,l,c,d,m,M){var w=B();try{_e(i)(s,l,c,d,m,M)}catch(D){if(H(w),!(D instanceof T))throw D;pe(1,0)}}function yf(i,s,l,c,d,m,M,w,D,V,q){var te=B();try{_e(i)(s,l,c,d,m,M,w,D,V,q)}catch(he){if(H(te),!(he instanceof T))throw he;pe(1,0)}}function Mf(i,s,l,c,d,m,M,w){var D=B();try{return _e(i)(s,l,c,d,m,M,w)}catch(V){if(H(D),!(V instanceof T))throw V;pe(1,0)}}function Tf(i,s,l){var c=B();try{return _e(i)(s,l)}catch(d){if(H(c),!(d instanceof T))throw d;pe(1,0)}}function wf(i,s,l){var c=B();try{_e(i)(s,l)}catch(d){if(H(c),!(d instanceof T))throw d;pe(1,0)}}function bf(i,s,l,c,d,m,M){var w=B();try{return _e(i)(s,l,c,d,m,M)}catch(D){if(H(w),!(D instanceof T))throw D;pe(1,0)}}function Af(i,s){var l=B();try{return _e(i)(s)}catch(c){if(H(l),!(c instanceof T))throw c;pe(1,0)}}function Rf(i,s,l,c,d,m,M,w,D,V,q){var te=B();try{return _e(i)(s,l,c,d,m,M,w,D,V,q)}catch(he){if(H(te),!(he instanceof T))throw he;pe(1,0)}}function Cf(i,s,l,c){var d=B();try{return _e(i)(s,l,c)}catch(m){if(H(d),!(m instanceof T))throw m;pe(1,0)}}function Pf(i,s,l,c,d,m,M,w,D,V){var q=B();try{return _e(i)(s,l,c,d,m,M,w,D,V)}catch(te){if(H(q),!(te instanceof T))throw te;pe(1,0)}}function Df(i,s,l,c){var d=B();try{return _e(i)(s,l,c)}catch(m){if(H(d),!(m instanceof T))throw m;pe(1,0)}}function Lf(i,s,l,c,d,m){var M=B();try{return _e(i)(s,l,c,d,m)}catch(w){if(H(M),!(w instanceof T))throw w;pe(1,0)}}function Ff(i,s,l,c,d){var m=B();try{return _e(i)(s,l,c,d)}catch(M){if(H(m),!(M instanceof T))throw M;return pe(1,0),0n}}function If(i,s,l,c,d,m,M,w,D,V,q,te,he,se,me,He,st,at,Lt,_t,Zt,Vt,en,Pt,Yn,Yr,mp,_p,gp,vp,xp,Ep,Sp,yp,Mp,Tp,wp,bp,Ap,Rp,Cp,Pp,Dp,Lp,Fp,Ip,Up,Np,Op,kp,Bp,zp,Hp,Vp,Gp,Wp,Xp,$p,jp,qp,Yp,Kp,Zp,Jp,Qp,em,tm,nm,im,rm,sm,am,om,lm,cm,um,hm,dm,fm,pm,mm,_m,gm,vm,xm,Em){var Sm=B();try{_e(i)(s,l,c,d,m,M,w,D,V,q,te,he,se,me,He,st,at,Lt,_t,Zt,Vt,en,Pt,Yn,Yr,mp,_p,gp,vp,xp,Ep,Sp,yp,Mp,Tp,wp,bp,Ap,Rp,Cp,Pp,Dp,Lp,Fp,Ip,Up,Np,Op,kp,Bp,zp,Hp,Vp,Gp,Wp,Xp,$p,jp,qp,Yp,Kp,Zp,Jp,Qp,em,tm,nm,im,rm,sm,am,om,lm,cm,um,hm,dm,fm,pm,mm,_m,gm,vm,xm,Em)}catch(bl){if(H(Sm),!(bl instanceof T))throw bl;pe(1,0)}}function Uf(i,s,l,c,d){var m=B();try{_e(i)(s,l,c,d)}catch(M){if(H(m),!(M instanceof T))throw M;pe(1,0)}}function Nf(i,s,l,c,d,m){var M=B();try{_e(i)(s,l,c,d,m)}catch(w){if(H(M),!(w instanceof T))throw w;pe(1,0)}}function Of(i,s,l,c,d,m,M,w){var D=B();try{_e(i)(s,l,c,d,m,M,w)}catch(V){if(H(D),!(V instanceof T))throw V;pe(1,0)}}function kf(i,s,l,c,d,m){var M=B();try{_e(i)(s,l,c,d,m)}catch(w){if(H(M),!(w instanceof T))throw w;pe(1,0)}}function Bf(i,s,l,c,d,m,M,w){var D=B();try{_e(i)(s,l,c,d,m,M,w)}catch(V){if(H(D),!(V instanceof T))throw V;pe(1,0)}}function zf(i,s,l,c,d,m){var M=B();try{_e(i)(s,l,c,d,m)}catch(w){if(H(M),!(w instanceof T))throw w;pe(1,0)}}function Hf(i,s,l,c,d,m){var M=B();try{return _e(i)(s,l,c,d,m)}catch(w){if(H(M),!(w instanceof T))throw w;pe(1,0)}}function Vf(i,s,l,c,d,m,M,w,D,V){var q=B();try{return _e(i)(s,l,c,d,m,M,w,D,V)}catch(te){if(H(q),!(te instanceof T))throw te;pe(1,0)}}function Gf(i,s,l,c,d,m,M,w,D,V){var q=B();try{_e(i)(s,l,c,d,m,M,w,D,V)}catch(te){if(H(q),!(te instanceof T))throw te;pe(1,0)}}function Wf(i,s,l,c){var d=B();try{return _e(i)(s,l,c)}catch(m){if(H(d),!(m instanceof T))throw m;pe(1,0)}}function Xf(i,s,l,c,d,m,M,w,D,V,q,te,he){var se=B();try{return _e(i)(s,l,c,d,m,M,w,D,V,q,te,he)}catch(me){if(H(se),!(me instanceof T))throw me;pe(1,0)}}function $f(i,s,l){var c=B();try{return _e(i)(s,l)}catch(d){if(H(c),!(d instanceof T))throw d;return pe(1,0),0n}}function jf(i,s,l){var c=B();try{_e(i)(s,l)}catch(d){if(H(c),!(d instanceof T))throw d;pe(1,0)}}function qf(i,s,l,c,d,m,M,w,D,V,q,te,he,se){var me=B();try{_e(i)(s,l,c,d,m,M,w,D,V,q,te,he,se)}catch(He){if(H(me),!(He instanceof T))throw He;pe(1,0)}}function Yf(i,s,l,c,d,m,M,w,D,V,q,te,he,se,me){var He=B();try{_e(i)(s,l,c,d,m,M,w,D,V,q,te,he,se,me)}catch(st){if(H(He),!(st instanceof T))throw st;pe(1,0)}}function Kf(i,s,l,c,d,m,M,w,D,V,q){var te=B();try{_e(i)(s,l,c,d,m,M,w,D,V,q)}catch(he){if(H(te),!(he instanceof T))throw he;pe(1,0)}}function Zf(i,s,l,c,d,m,M,w,D,V,q,te,he,se,me,He,st,at,Lt){var _t=B();try{_e(i)(s,l,c,d,m,M,w,D,V,q,te,he,se,me,He,st,at,Lt)}catch(Zt){if(H(_t),!(Zt instanceof T))throw Zt;pe(1,0)}}function Jf(i,s){var l=B();try{return _e(i)(s)}catch(c){if(H(l),!(c instanceof T))throw c;return pe(1,0),0n}}function Qf(i,s,l,c,d,m,M,w,D,V,q,te){var he=B();try{_e(i)(s,l,c,d,m,M,w,D,V,q,te)}catch(se){if(H(he),!(se instanceof T))throw se;pe(1,0)}}function ep(i,s,l,c,d,m,M,w,D,V){var q=B();try{return _e(i)(s,l,c,d,m,M,w,D,V)}catch(te){if(H(q),!(te instanceof T))throw te;pe(1,0)}}function tp(i,s,l){var c=B();try{return _e(i)(s,l)}catch(d){if(H(c),!(d instanceof T))throw d;pe(1,0)}}function np(i,s,l,c,d,m,M){var w=B();try{_e(i)(s,l,c,d,m,M)}catch(D){if(H(w),!(D instanceof T))throw D;pe(1,0)}}function ip(i,s,l,c,d,m,M){var w=B();try{_e(i)(s,l,c,d,m,M)}catch(D){if(H(w),!(D instanceof T))throw D;pe(1,0)}}function rp(i,s,l){var c=B();try{_e(i)(s,l)}catch(d){if(H(c),!(d instanceof T))throw d;pe(1,0)}}function sp(i,s,l,c,d,m){var M=B();try{_e(i)(s,l,c,d,m)}catch(w){if(H(M),!(w instanceof T))throw w;pe(1,0)}}function ap(i,s,l,c){var d=B();try{_e(i)(s,l,c)}catch(m){if(H(d),!(m instanceof T))throw m;pe(1,0)}}function op(i){var s=B();try{return _e(i)()}catch(l){if(H(s),!(l instanceof T))throw l;return pe(1,0),0n}}function lp(i,s,l,c,d,m){var M=B();try{_e(i)(s,l,c,d,m)}catch(w){if(H(M),!(w instanceof T))throw w;pe(1,0)}}function cp(i,s,l,c){var d=B();try{return _e(i)(s,l,c)}catch(m){if(H(d),!(m instanceof T))throw m;pe(1,0)}}function up(i,s,l,c,d,m,M,w,D,V,q,te){var he=B();try{return _e(i)(s,l,c,d,m,M,w,D,V,q,te)}catch(se){if(H(he),!(se instanceof T))throw se;pe(1,0)}}function hp(i,s,l,c,d,m,M,w,D,V,q,te,he,se,me,He){var st=B();try{_e(i)(s,l,c,d,m,M,w,D,V,q,te,he,se,me,He)}catch(at){if(H(st),!(at instanceof T))throw at;pe(1,0)}}var yl;function dp(){pl(),K()}function Js(){if(Ie>0){Ye=Js;return}if(dp(),qe(),Ie>0){Ye=Js;return}function i(){var s;P(!yl),yl=!0,t.calledRun=!0,!G&&(Ne(),Be==null||Be(t),(s=t.onRuntimeInitialized)==null||s.call(t),ie("onRuntimeInitialized"),P(!t._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),Dt())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),i()},1)):i(),L()}function fp(){var i=k,s=U,l=!1;k=U=c=>{l=!0};try{Ys(0),["stdout","stderr"].forEach(c=>{var D;var d=y.analyzePath("/dev/"+c);if(d){var m=d.object,M=m.rdev,w=Ce.ttys[M];(D=w==null?void 0:w.output)!=null&&D.length&&(l=!0)}})}catch{}k=i,U=s,l&&De("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}function pp(){if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();ie("preInit")}pp(),Js(),xt?e=t:e=new Promise((i,s)=>{Be=i,Ze=s});for(const i of Object.keys(t))i in r||Object.defineProperty(r,i,{configurable:!0,get(){j(`Access to module property ('${i}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return e};const To=document.querySelector("#status"),La=document.querySelector("#viewport"),Fa=document.querySelector("#toggle"),gr=document.querySelector("#seek"),tS=document.querySelector("#time"),nS=document.querySelector("#frame");async function vr(r,e="arrayBuffer"){const t=await fetch(new URL(`./${r}`,document.baseURI));if(!t.ok)throw new Error(`${r}: HTTP ${t.status}`);return t[e]()}function iS(r,e){const t=r.mesh_vertadr[e]*3,n=r.mesh_vertnum[e],a=r.mesh_faceadr[e]*3,o=r.mesh_facenum[e],u=Float32Array.from(r.mesh_vert.subarray(t,t+n*3)),h=Uint32Array.from(r.mesh_face.subarray(a,a+o*3)),p=new On;return p.setAttribute("position",new mn(u,3)),p.setIndex(new mn(h,1)),p.computeVertexNormals(),p}async function rS(){const r=await vr("motion/meta.json","json"),e=await vr("motion/frames.bin"),t=new Float32Array(e);if(t.length!==r.frames*r.nq)throw new Error("动作数据长度与元数据不一致");To.textContent="正在加载 MuJoCo WASM 与机器人模型…";const n=await eS();for(const O of["/working","/working/xml","/working/meshes"])n.FS.mkdir(O);const a=await vr("model/xml/scene_flat.xml","text"),o=await vr("model/xml/biped_s17.xml","text");n.FS.writeFile("/working/xml/scene_flat.xml",a),n.FS.writeFile("/working/xml/biped_s17.xml",o),await Promise.all(r.meshes.map(async O=>{const Z=await vr(`model/meshes/${encodeURIComponent(O)}`);n.FS.writeFile(`/working/meshes/${O}`,new Uint8Array(Z))}));const u=n.MjModel.mj_loadXML("/working/xml/scene_flat.xml"),h=new n.MjData(u);if(u.nq!==r.nq)throw new Error(`模型 nq=${u.nq}，动作 nq=${r.nq}`);const p=new B_;p.background=new dt("#141c29"),p.add(new j_(15135231,3820646,2));const f=new K_(16777215,2.4);f.position.set(-2,-3,6),p.add(f);const g=new Tn(new Cr(200,200),new tc({color:2306370,roughness:1}));g.position.z=-.004,p.add(g);const v=new J_(20,40,5796747,3227987);v.rotateX(Math.PI/2),v.position.z=.001,p.add(v);const x=new pn(45,1,.02,100);x.up.set(0,0,1),x.position.set(2.1,-2.8,1.8);const E=new NE({antialias:!0});E.setPixelRatio(Math.min(window.devicePixelRatio,2)),E.outputColorSpace=hn,La.appendChild(E.domElement);const A=new kE(x,E.domElement);A.target.set(0,0,.85),A.enableDamping=!0,A.update();const C=new tt(0,0),S=()=>{const{width:O,height:Z}=La.getBoundingClientRect();E.setSize(O,Z,!1),x.aspect=O/Z,x.updateProjectionMatrix()};new ResizeObserver(S).observe(La),S();const _=new Map,k=[],U=n.mjtGeom.mjGEOM_MESH.value;for(let O=0;O<u.ngeom;O++){if(u.geom_type[O]!==U||u.geom_group[O]!==1)continue;const Z=u.geom_dataid[O];_.has(Z)||_.set(Z,iS(u,Z));const ie=Array.from(u.geom_rgba.subarray(O*4,O*4+4)),ne=new tc({color:new dt(ie[0],ie[1],ie[2]),roughness:.65,metalness:.12,side:Ln}),ue=new Tn(_.get(Z),ne);p.add(ue),k.push([O,ue])}if(!k.length)throw new Error("模型没有可显示的 S17 网格");let F=0,G=!1,P=performance.now(),W=0;gr.max=String(r.frames-1),gr.disabled=!1,Fa.disabled=!1,To.textContent=`${r.source} · ${r.fps} FPS · ${k.length} 个网格`;function K(){h.qpos.set(t.subarray(F*r.nq,(F+1)*r.nq)),n.mj_forward(u,h);const O=h.qpos[0]-C.x,Z=h.qpos[1]-C.y;x.position.x+=O,x.position.y+=Z,A.target.x+=O,A.target.y+=Z,C.set(h.qpos[0],h.qpos[1]);for(const[ie,ne]of k){const ue=ie*3,ae=ie*9,ve=h.geom_xpos,ee=h.geom_xmat;ne.matrixAutoUpdate=!1,ne.matrix.set(ee[ae],ee[ae+1],ee[ae+2],ve[ue],ee[ae+3],ee[ae+4],ee[ae+5],ve[ue+1],ee[ae+6],ee[ae+7],ee[ae+8],ve[ue+2],0,0,0,1),ne.matrixWorldNeedsUpdate=!0}gr.value=String(F),tS.textContent=`${(F/r.fps).toFixed(2)} / ${((r.frames-1)/r.fps).toFixed(2)} s`,nS.textContent=`${F+1} / ${r.frames}`}function L(O){G=O,Fa.textContent=G?"暂停":"播放",P=performance.now(),W=0}Fa.addEventListener("click",()=>L(!G)),gr.addEventListener("input",()=>{L(!1),F=Number(gr.value),K()}),window.addEventListener("keydown",O=>{O.target instanceof HTMLInputElement||(O.code==="Space"&&(O.preventDefault(),L(!G)),(O.code==="ArrowRight"||O.code==="ArrowLeft")&&(O.preventDefault(),L(!1),F=Math.max(0,Math.min(r.frames-1,F+(O.code==="ArrowRight"?1:-1))),K()))}),K(),L(!0);function T(O){if(requestAnimationFrame(T),G){W+=Math.min((O-P)/1e3,.25);const Z=Math.floor(W*r.fps);Z&&(F=(F+Z)%r.frames,W-=Z/r.fps,K())}P=O,A.update(),E.render(p,x)}requestAnimationFrame(T)}rS().catch(r=>{console.error(r),To.textContent=`加载失败：${r.message}`});const sS=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));

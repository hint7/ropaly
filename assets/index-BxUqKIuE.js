var d_=Object.defineProperty;var p_=(i,e,t)=>e in i?d_(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var An=(i,e,t)=>p_(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const el="180",hr={ROTATE:0,DOLLY:1,PAN:2},lr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},m_=0,sc=1,__=2,_u=1,g_=2,ei=3,_i=0,hn=1,Ln=2,pi=0,fr=1,oc=2,ac=3,lc=4,v_=5,Ui=100,x_=101,y_=102,E_=103,S_=104,M_=200,T_=201,w_=202,b_=203,ca=204,ua=205,A_=206,R_=207,C_=208,P_=209,D_=210,L_=211,F_=212,I_=213,U_=214,ha=0,fa=1,da=2,pr=3,pa=4,ma=5,_a=6,ga=7,gu=0,N_=1,O_=2,mi=0,k_=1,B_=2,z_=3,H_=4,V_=5,G_=6,W_=7,vu=300,mr=301,_r=302,va=303,xa=304,Js=306,ya=1e3,Oi=1001,Ea=1002,Un=1003,X_=1004,fs=1005,Gn=1006,yo=1007,ki=1008,Xn=1009,xu=1010,yu=1011,Nr=1012,tl=1013,Bi=1014,ti=1015,Hr=1016,nl=1017,il=1018,Or=1020,Eu=35902,Su=35899,Mu=1021,Tu=1022,In=1023,kr=1026,Br=1027,wu=1028,rl=1029,bu=1030,sl=1031,ol=1033,Hs=33776,Vs=33777,Gs=33778,Ws=33779,Sa=35840,Ma=35841,Ta=35842,wa=35843,ba=36196,Aa=37492,Ra=37496,Ca=37808,Pa=37809,Da=37810,La=37811,Fa=37812,Ia=37813,Ua=37814,Na=37815,Oa=37816,ka=37817,Ba=37818,za=37819,Ha=37820,Va=37821,Ga=36492,Wa=36494,Xa=36495,$a=36283,qa=36284,ja=36285,Ya=36286,$_=3200,q_=3201,Au=0,j_=1,di="",gn="srgb",gr="srgb-linear",qs="linear",Ct="srgb",Wi=7680,cc=519,Y_=512,K_=513,Z_=514,Ru=515,J_=516,Q_=517,eg=518,tg=519,uc=35044,hc="300 es",Wn=2e3,js=2001;class Vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const o=n[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const o=n.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xs=Math.PI/180,Ka=180/Math.PI;function Vr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function dt(i,e,t){return Math.max(e,Math.min(t,i))}function ng(i,e){return(i%e+e)%e}function Eo(i,e,t){return(1-t)*i+t*e}function br(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function cn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ig={DEG2RAD:Xs};class st{constructor(e=0,t=0){st.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6],this.y=o[1]*t+o[4]*n+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*n-c*o+e.x,this.y=a*o+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zi{constructor(e=0,t=0,n=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=o}static slerpFlat(e,t,n,o,a,c,h){let p=n[o+0],f=n[o+1],v=n[o+2],_=n[o+3];const x=a[c+0],E=a[c+1],b=a[c+2],R=a[c+3];if(h===0){e[t+0]=p,e[t+1]=f,e[t+2]=v,e[t+3]=_;return}if(h===1){e[t+0]=x,e[t+1]=E,e[t+2]=b,e[t+3]=R;return}if(_!==R||p!==x||f!==E||v!==b){let y=1-h;const m=p*x+f*E+v*b+_*R,N=m>=0?1:-1,I=1-m*m;if(I>Number.EPSILON){const O=Math.sqrt(I),D=Math.atan2(O,m*N);y=Math.sin(y*D)/O,h=Math.sin(h*D)/O}const L=h*N;if(p=p*y+x*L,f=f*y+E*L,v=v*y+b*L,_=_*y+R*L,y===1-h){const O=1/Math.sqrt(p*p+f*f+v*v+_*_);p*=O,f*=O,v*=O,_*=O}}e[t]=p,e[t+1]=f,e[t+2]=v,e[t+3]=_}static multiplyQuaternionsFlat(e,t,n,o,a,c){const h=n[o],p=n[o+1],f=n[o+2],v=n[o+3],_=a[c],x=a[c+1],E=a[c+2],b=a[c+3];return e[t]=h*b+v*_+p*E-f*x,e[t+1]=p*b+v*x+f*_-h*E,e[t+2]=f*b+v*E+h*x-p*_,e[t+3]=v*b-h*_-p*x-f*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,o){return this._x=e,this._y=t,this._z=n,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,o=e._y,a=e._z,c=e._order,h=Math.cos,p=Math.sin,f=h(n/2),v=h(o/2),_=h(a/2),x=p(n/2),E=p(o/2),b=p(a/2);switch(c){case"XYZ":this._x=x*v*_+f*E*b,this._y=f*E*_-x*v*b,this._z=f*v*b+x*E*_,this._w=f*v*_-x*E*b;break;case"YXZ":this._x=x*v*_+f*E*b,this._y=f*E*_-x*v*b,this._z=f*v*b-x*E*_,this._w=f*v*_+x*E*b;break;case"ZXY":this._x=x*v*_-f*E*b,this._y=f*E*_+x*v*b,this._z=f*v*b+x*E*_,this._w=f*v*_-x*E*b;break;case"ZYX":this._x=x*v*_-f*E*b,this._y=f*E*_+x*v*b,this._z=f*v*b-x*E*_,this._w=f*v*_+x*E*b;break;case"YZX":this._x=x*v*_+f*E*b,this._y=f*E*_+x*v*b,this._z=f*v*b-x*E*_,this._w=f*v*_-x*E*b;break;case"XZY":this._x=x*v*_-f*E*b,this._y=f*E*_-x*v*b,this._z=f*v*b+x*E*_,this._w=f*v*_+x*E*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,o=Math.sin(n);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],o=t[4],a=t[8],c=t[1],h=t[5],p=t[9],f=t[2],v=t[6],_=t[10],x=n+h+_;if(x>0){const E=.5/Math.sqrt(x+1);this._w=.25/E,this._x=(v-p)*E,this._y=(a-f)*E,this._z=(c-o)*E}else if(n>h&&n>_){const E=2*Math.sqrt(1+n-h-_);this._w=(v-p)/E,this._x=.25*E,this._y=(o+c)/E,this._z=(a+f)/E}else if(h>_){const E=2*Math.sqrt(1+h-n-_);this._w=(a-f)/E,this._x=(o+c)/E,this._y=.25*E,this._z=(p+v)/E}else{const E=2*Math.sqrt(1+_-n-h);this._w=(c-o)/E,this._x=(a+f)/E,this._y=(p+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const o=Math.min(1,t/n);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,o=e._y,a=e._z,c=e._w,h=t._x,p=t._y,f=t._z,v=t._w;return this._x=n*v+c*h+o*f-a*p,this._y=o*v+c*p+a*h-n*f,this._z=a*v+c*f+n*p-o*h,this._w=c*v-n*h-o*p-a*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,o=this._y,a=this._z,c=this._w;let h=c*e._w+n*e._x+o*e._y+a*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=c,this._x=n,this._y=o,this._z=a,this;const p=1-h*h;if(p<=Number.EPSILON){const E=1-t;return this._w=E*c+t*this._w,this._x=E*n+t*this._x,this._y=E*o+t*this._y,this._z=E*a+t*this._z,this.normalize(),this}const f=Math.sqrt(p),v=Math.atan2(f,h),_=Math.sin((1-t)*v)/f,x=Math.sin(t*v)/f;return this._w=c*_+this._w*x,this._x=n*_+this._x*x,this._y=o*_+this._y*x,this._z=a*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),o=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,t=0,n=0){ee.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*o,this.y=a[1]*t+a[4]*n+a[7]*o,this.z=a[2]*t+a[5]*n+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*n+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*n+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*n+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,o=this.z,a=e.x,c=e.y,h=e.z,p=e.w,f=2*(c*o-h*n),v=2*(h*t-a*o),_=2*(a*n-c*t);return this.x=t+p*f+c*_-h*v,this.y=n+p*v+h*f-a*_,this.z=o+p*_+a*v-c*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*o,this.y=a[1]*t+a[5]*n+a[9]*o,this.z=a[2]*t+a[6]*n+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,o=e.y,a=e.z,c=t.x,h=t.y,p=t.z;return this.x=o*p-a*h,this.y=a*c-n*p,this.z=n*h-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return So.copy(this).projectOnVector(e),this.sub(So)}reflect(e){return this.sub(So.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,o=this.z-e.z;return t*t+n*n+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const o=Math.sin(t)*e;return this.x=o*Math.sin(n),this.y=Math.cos(t)*e,this.z=o*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const So=new ee,fc=new zi;class ot{constructor(e,t,n,o,a,c,h,p,f){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,o,a,c,h,p,f)}set(e,t,n,o,a,c,h,p,f){const v=this.elements;return v[0]=e,v[1]=o,v[2]=h,v[3]=t,v[4]=a,v[5]=p,v[6]=n,v[7]=c,v[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,a=this.elements,c=n[0],h=n[3],p=n[6],f=n[1],v=n[4],_=n[7],x=n[2],E=n[5],b=n[8],R=o[0],y=o[3],m=o[6],N=o[1],I=o[4],L=o[7],O=o[2],D=o[5],G=o[8];return a[0]=c*R+h*N+p*O,a[3]=c*y+h*I+p*D,a[6]=c*m+h*L+p*G,a[1]=f*R+v*N+_*O,a[4]=f*y+v*I+_*D,a[7]=f*m+v*L+_*G,a[2]=x*R+E*N+b*O,a[5]=x*y+E*I+b*D,a[8]=x*m+E*L+b*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],c=e[4],h=e[5],p=e[6],f=e[7],v=e[8];return t*c*v-t*h*f-n*a*v+n*h*p+o*a*f-o*c*p}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],c=e[4],h=e[5],p=e[6],f=e[7],v=e[8],_=v*c-h*f,x=h*p-v*a,E=f*a-c*p,b=t*_+n*x+o*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=_*R,e[1]=(o*f-v*n)*R,e[2]=(h*n-o*c)*R,e[3]=x*R,e[4]=(v*t-o*p)*R,e[5]=(o*a-h*t)*R,e[6]=E*R,e[7]=(n*p-f*t)*R,e[8]=(c*t-n*a)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,o,a,c,h){const p=Math.cos(a),f=Math.sin(a);return this.set(n*p,n*f,-n*(p*c+f*h)+c+e,-o*f,o*p,-o*(-f*c+p*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(Mo.makeScale(e,t)),this}rotate(e){return this.premultiply(Mo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<9;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mo=new ot;function Cu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rg(){const i=Ys("canvas");return i.style.display="block",i}const dc={};function zr(i){i in dc||(dc[i]=!0,console.warn(i))}function sg(i,e,t){return new Promise(function(n,o){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const pc=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mc=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function og(){const i={enabled:!0,workingColorSpace:gr,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Ct&&(o.r=ni(o.r),o.g=ni(o.g),o.b=ni(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ct&&(o.r=dr(o.r),o.g=dr(o.g),o.b=dr(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===di?qs:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return zr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return zr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[gr]:{primaries:e,whitePoint:n,transfer:qs,toXYZ:pc,fromXYZ:mc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:e,whitePoint:n,transfer:Ct,toXYZ:pc,fromXYZ:mc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),i}const St=og();function ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function dr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Xi;class ag{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xi===void 0&&(Xi=Ys("canvas")),Xi.width=e.width,Xi.height=e.height;const o=Xi.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),n=Xi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ys("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const o=n.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=ni(a[c]/255)*255;return n.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ni(t[n]/255)*255):t[n]=ni(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lg=0;class al{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lg++}),this.uuid=Vr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,h=o.length;c<h;c++)o[c].isDataTexture?a.push(To(o[c].image)):a.push(To(o[c]))}else a=To(o);n.url=a}return t||(e.images[this.uuid]=n),n}}function To(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ag.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cg=0;const wo=new ee;class fn extends Vi{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,n=Oi,o=Oi,a=Gn,c=ki,h=In,p=Xn,f=fn.DEFAULT_ANISOTROPY,v=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=Vr(),this.name="",this.source=new al(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=f,this.format=h,this.internalFormat=null,this.type=p,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wo).x}get height(){return this.source.getSize(wo).y}get depth(){return this.source.getSize(wo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}o&&n&&o.isVector2&&n.isVector2||o&&n&&o.isVector3&&n.isVector3||o&&n&&o.isMatrix3&&n.isMatrix3?o.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ya:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case Ea:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ya:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case Ea:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=vu;fn.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,n=0,o=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,o){return this.x=e,this.y=t,this.z=n,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*n+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*n+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*n+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,o,a;const p=e.elements,f=p[0],v=p[4],_=p[8],x=p[1],E=p[5],b=p[9],R=p[2],y=p[6],m=p[10];if(Math.abs(v-x)<.01&&Math.abs(_-R)<.01&&Math.abs(b-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(_+R)<.1&&Math.abs(b+y)<.1&&Math.abs(f+E+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(f+1)/2,L=(E+1)/2,O=(m+1)/2,D=(v+x)/4,G=(_+R)/4,V=(b+y)/4;return I>L&&I>O?I<.01?(n=0,o=.707106781,a=.707106781):(n=Math.sqrt(I),o=D/n,a=G/n):L>O?L<.01?(n=.707106781,o=0,a=.707106781):(o=Math.sqrt(L),n=D/o,a=V/o):O<.01?(n=.707106781,o=.707106781,a=0):(a=Math.sqrt(O),n=G/a,o=V/a),this.set(n,o,a,t),this}let N=Math.sqrt((y-b)*(y-b)+(_-R)*(_-R)+(x-v)*(x-v));return Math.abs(N)<.001&&(N=1),this.x=(y-b)/N,this.y=(_-R)/N,this.z=(x-v)/N,this.w=Math.acos((f+E+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ug extends Vi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);const o={width:e,height:t,depth:n.depth},a=new fn(o);this.textures=[];const c=n.count;for(let h=0;h<c;h++)this.textures[h]=a.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=n,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new al(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends ug{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Pu extends fn{constructor(e=null,t=1,n=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=Un,this.minFilter=Un,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hg extends fn{constructor(e=null,t=1,n=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=Un,this.minFilter=Un,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gr{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,h=a.count;c<h;c++)e.isMesh===!0?e.getVertexPosition(c,Rn):Rn.fromBufferAttribute(a,c),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ds.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ds.copy(n.boundingBox)),ds.applyMatrix4(e.matrixWorld),this.union(ds)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ar),ps.subVectors(this.max,Ar),$i.subVectors(e.a,Ar),qi.subVectors(e.b,Ar),ji.subVectors(e.c,Ar),ri.subVectors(qi,$i),si.subVectors(ji,qi),Ai.subVectors($i,ji);let t=[0,-ri.z,ri.y,0,-si.z,si.y,0,-Ai.z,Ai.y,ri.z,0,-ri.x,si.z,0,-si.x,Ai.z,0,-Ai.x,-ri.y,ri.x,0,-si.y,si.x,0,-Ai.y,Ai.x,0];return!bo(t,$i,qi,ji,ps)||(t=[1,0,0,0,1,0,0,0,1],!bo(t,$i,qi,ji,ps))?!1:(ms.crossVectors(ri,si),t=[ms.x,ms.y,ms.z],bo(t,$i,qi,ji,ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yn=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],Rn=new ee,ds=new Gr,$i=new ee,qi=new ee,ji=new ee,ri=new ee,si=new ee,Ai=new ee,Ar=new ee,ps=new ee,ms=new ee,Ri=new ee;function bo(i,e,t,n,o){for(let a=0,c=i.length-3;a<=c;a+=3){Ri.fromArray(i,a);const h=o.x*Math.abs(Ri.x)+o.y*Math.abs(Ri.y)+o.z*Math.abs(Ri.z),p=e.dot(Ri),f=t.dot(Ri),v=n.dot(Ri);if(Math.max(-Math.max(p,f,v),Math.min(p,f,v))>h)return!1}return!0}const fg=new Gr,Rr=new ee,Ao=new ee;class Qs{constructor(e=new ee,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):fg.setFromPoints(e).getCenter(n);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);const t=Rr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),o=(n-this.radius)*.5;this.center.addScaledVector(Rr,o/n),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ao.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(Ao)),this.expandByPoint(Rr.copy(e.center).sub(Ao))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Kn=new ee,Ro=new ee,_s=new ee,oi=new ee,Co=new ee,gs=new ee,Po=new ee;class ll{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,o){Ro.copy(e).add(t).multiplyScalar(.5),_s.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(Ro);const a=e.distanceTo(t)*.5,c=-this.direction.dot(_s),h=oi.dot(this.direction),p=-oi.dot(_s),f=oi.lengthSq(),v=Math.abs(1-c*c);let _,x,E,b;if(v>0)if(_=c*p-h,x=c*h-p,b=a*v,_>=0)if(x>=-b)if(x<=b){const R=1/v;_*=R,x*=R,E=_*(_+c*x+2*h)+x*(c*_+x+2*p)+f}else x=a,_=Math.max(0,-(c*x+h)),E=-_*_+x*(x+2*p)+f;else x=-a,_=Math.max(0,-(c*x+h)),E=-_*_+x*(x+2*p)+f;else x<=-b?(_=Math.max(0,-(-c*a+h)),x=_>0?-a:Math.min(Math.max(-a,-p),a),E=-_*_+x*(x+2*p)+f):x<=b?(_=0,x=Math.min(Math.max(-a,-p),a),E=x*(x+2*p)+f):(_=Math.max(0,-(c*a+h)),x=_>0?a:Math.min(Math.max(-a,-p),a),E=-_*_+x*(x+2*p)+f);else x=c>0?-a:a,_=Math.max(0,-(c*x+h)),E=-_*_+x*(x+2*p)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Ro).addScaledVector(_s,x),E}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);const n=Kn.dot(this.direction),o=Kn.dot(Kn)-n*n,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),h=n-c,p=n+c;return p<0?null:h<0?this.at(p,t):this.at(h,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,o,a,c,h,p;const f=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,x=this.origin;return f>=0?(n=(e.min.x-x.x)*f,o=(e.max.x-x.x)*f):(n=(e.max.x-x.x)*f,o=(e.min.x-x.x)*f),v>=0?(a=(e.min.y-x.y)*v,c=(e.max.y-x.y)*v):(a=(e.max.y-x.y)*v,c=(e.min.y-x.y)*v),n>c||a>o||((a>n||isNaN(n))&&(n=a),(c<o||isNaN(o))&&(o=c),_>=0?(h=(e.min.z-x.z)*_,p=(e.max.z-x.z)*_):(h=(e.max.z-x.z)*_,p=(e.min.z-x.z)*_),n>p||h>o)||((h>n||n!==n)&&(n=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(n>=0?n:o,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,n,o,a){Co.subVectors(t,e),gs.subVectors(n,e),Po.crossVectors(Co,gs);let c=this.direction.dot(Po),h;if(c>0){if(o)return null;h=1}else if(c<0)h=-1,c=-c;else return null;oi.subVectors(this.origin,e);const p=h*this.direction.dot(gs.crossVectors(oi,gs));if(p<0)return null;const f=h*this.direction.dot(Co.cross(oi));if(f<0||p+f>c)return null;const v=-h*oi.dot(Po);return v<0?null:this.at(v/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,t,n,o,a,c,h,p,f,v,_,x,E,b,R,y){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,o,a,c,h,p,f,v,_,x,E,b,R,y)}set(e,t,n,o,a,c,h,p,f,v,_,x,E,b,R,y){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=o,m[1]=a,m[5]=c,m[9]=h,m[13]=p,m[2]=f,m[6]=v,m[10]=_,m[14]=x,m[3]=E,m[7]=b,m[11]=R,m[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,o=1/Yi.setFromMatrixColumn(e,0).length(),a=1/Yi.setFromMatrixColumn(e,1).length(),c=1/Yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*o,t[1]=n[1]*o,t[2]=n[2]*o,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,o=e.y,a=e.z,c=Math.cos(n),h=Math.sin(n),p=Math.cos(o),f=Math.sin(o),v=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const x=c*v,E=c*_,b=h*v,R=h*_;t[0]=p*v,t[4]=-p*_,t[8]=f,t[1]=E+b*f,t[5]=x-R*f,t[9]=-h*p,t[2]=R-x*f,t[6]=b+E*f,t[10]=c*p}else if(e.order==="YXZ"){const x=p*v,E=p*_,b=f*v,R=f*_;t[0]=x+R*h,t[4]=b*h-E,t[8]=c*f,t[1]=c*_,t[5]=c*v,t[9]=-h,t[2]=E*h-b,t[6]=R+x*h,t[10]=c*p}else if(e.order==="ZXY"){const x=p*v,E=p*_,b=f*v,R=f*_;t[0]=x-R*h,t[4]=-c*_,t[8]=b+E*h,t[1]=E+b*h,t[5]=c*v,t[9]=R-x*h,t[2]=-c*f,t[6]=h,t[10]=c*p}else if(e.order==="ZYX"){const x=c*v,E=c*_,b=h*v,R=h*_;t[0]=p*v,t[4]=b*f-E,t[8]=x*f+R,t[1]=p*_,t[5]=R*f+x,t[9]=E*f-b,t[2]=-f,t[6]=h*p,t[10]=c*p}else if(e.order==="YZX"){const x=c*p,E=c*f,b=h*p,R=h*f;t[0]=p*v,t[4]=R-x*_,t[8]=b*_+E,t[1]=_,t[5]=c*v,t[9]=-h*v,t[2]=-f*v,t[6]=E*_+b,t[10]=x-R*_}else if(e.order==="XZY"){const x=c*p,E=c*f,b=h*p,R=h*f;t[0]=p*v,t[4]=-_,t[8]=f*v,t[1]=x*_+R,t[5]=c*v,t[9]=E*_-b,t[2]=b*_-E,t[6]=h*v,t[10]=R*_+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dg,e,pg)}lookAt(e,t,n){const o=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),ai.crossVectors(n,pn),ai.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),ai.crossVectors(n,pn)),ai.normalize(),vs.crossVectors(pn,ai),o[0]=ai.x,o[4]=vs.x,o[8]=pn.x,o[1]=ai.y,o[5]=vs.y,o[9]=pn.y,o[2]=ai.z,o[6]=vs.z,o[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,a=this.elements,c=n[0],h=n[4],p=n[8],f=n[12],v=n[1],_=n[5],x=n[9],E=n[13],b=n[2],R=n[6],y=n[10],m=n[14],N=n[3],I=n[7],L=n[11],O=n[15],D=o[0],G=o[4],V=o[8],P=o[12],S=o[1],H=o[5],Y=o[9],te=o[13],ne=o[2],he=o[6],ae=o[10],Ee=o[14],oe=o[3],fe=o[7],De=o[11],He=o[15];return a[0]=c*D+h*S+p*ne+f*oe,a[4]=c*G+h*H+p*he+f*fe,a[8]=c*V+h*Y+p*ae+f*De,a[12]=c*P+h*te+p*Ee+f*He,a[1]=v*D+_*S+x*ne+E*oe,a[5]=v*G+_*H+x*he+E*fe,a[9]=v*V+_*Y+x*ae+E*De,a[13]=v*P+_*te+x*Ee+E*He,a[2]=b*D+R*S+y*ne+m*oe,a[6]=b*G+R*H+y*he+m*fe,a[10]=b*V+R*Y+y*ae+m*De,a[14]=b*P+R*te+y*Ee+m*He,a[3]=N*D+I*S+L*ne+O*oe,a[7]=N*G+I*H+L*he+O*fe,a[11]=N*V+I*Y+L*ae+O*De,a[15]=N*P+I*te+L*Ee+O*He,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],o=e[8],a=e[12],c=e[1],h=e[5],p=e[9],f=e[13],v=e[2],_=e[6],x=e[10],E=e[14],b=e[3],R=e[7],y=e[11],m=e[15];return b*(+a*p*_-o*f*_-a*h*x+n*f*x+o*h*E-n*p*E)+R*(+t*p*E-t*f*x+a*c*x-o*c*E+o*f*v-a*p*v)+y*(+t*f*_-t*h*E-a*c*_+n*c*E+a*h*v-n*f*v)+m*(-o*h*v-t*p*_+t*h*x+o*c*_-n*c*x+n*p*v)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],c=e[4],h=e[5],p=e[6],f=e[7],v=e[8],_=e[9],x=e[10],E=e[11],b=e[12],R=e[13],y=e[14],m=e[15],N=_*y*f-R*x*f+R*p*E-h*y*E-_*p*m+h*x*m,I=b*x*f-v*y*f-b*p*E+c*y*E+v*p*m-c*x*m,L=v*R*f-b*_*f+b*h*E-c*R*E-v*h*m+c*_*m,O=b*_*p-v*R*p-b*h*x+c*R*x+v*h*y-c*_*y,D=t*N+n*I+o*L+a*O;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/D;return e[0]=N*G,e[1]=(R*x*a-_*y*a-R*o*E+n*y*E+_*o*m-n*x*m)*G,e[2]=(h*y*a-R*p*a+R*o*f-n*y*f-h*o*m+n*p*m)*G,e[3]=(_*p*a-h*x*a-_*o*f+n*x*f+h*o*E-n*p*E)*G,e[4]=I*G,e[5]=(v*y*a-b*x*a+b*o*E-t*y*E-v*o*m+t*x*m)*G,e[6]=(b*p*a-c*y*a-b*o*f+t*y*f+c*o*m-t*p*m)*G,e[7]=(c*x*a-v*p*a+v*o*f-t*x*f-c*o*E+t*p*E)*G,e[8]=L*G,e[9]=(b*_*a-v*R*a-b*n*E+t*R*E+v*n*m-t*_*m)*G,e[10]=(c*R*a-b*h*a+b*n*f-t*R*f-c*n*m+t*h*m)*G,e[11]=(v*h*a-c*_*a-v*n*f+t*_*f+c*n*E-t*h*E)*G,e[12]=O*G,e[13]=(v*R*o-b*_*o+b*n*x-t*R*x-v*n*y+t*_*y)*G,e[14]=(b*h*o-c*R*o-b*n*p+t*R*p+c*n*y-t*h*y)*G,e[15]=(c*_*o-v*h*o+v*n*p-t*_*p-c*n*x+t*h*x)*G,this}scale(e){const t=this.elements,n=e.x,o=e.y,a=e.z;return t[0]*=n,t[4]*=o,t[8]*=a,t[1]*=n,t[5]*=o,t[9]*=a,t[2]*=n,t[6]*=o,t[10]*=a,t[3]*=n,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,o))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),o=Math.sin(t),a=1-n,c=e.x,h=e.y,p=e.z,f=a*c,v=a*h;return this.set(f*c+n,f*h-o*p,f*p+o*h,0,f*h+o*p,v*h+n,v*p-o*c,0,f*p-o*h,v*p+o*c,a*p*p+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,o,a,c){return this.set(1,n,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,n){const o=this.elements,a=t._x,c=t._y,h=t._z,p=t._w,f=a+a,v=c+c,_=h+h,x=a*f,E=a*v,b=a*_,R=c*v,y=c*_,m=h*_,N=p*f,I=p*v,L=p*_,O=n.x,D=n.y,G=n.z;return o[0]=(1-(R+m))*O,o[1]=(E+L)*O,o[2]=(b-I)*O,o[3]=0,o[4]=(E-L)*D,o[5]=(1-(x+m))*D,o[6]=(y+N)*D,o[7]=0,o[8]=(b+I)*G,o[9]=(y-N)*G,o[10]=(1-(x+R))*G,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,n){const o=this.elements;let a=Yi.set(o[0],o[1],o[2]).length();const c=Yi.set(o[4],o[5],o[6]).length(),h=Yi.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],Cn.copy(this);const f=1/a,v=1/c,_=1/h;return Cn.elements[0]*=f,Cn.elements[1]*=f,Cn.elements[2]*=f,Cn.elements[4]*=v,Cn.elements[5]*=v,Cn.elements[6]*=v,Cn.elements[8]*=_,Cn.elements[9]*=_,Cn.elements[10]*=_,t.setFromRotationMatrix(Cn),n.x=a,n.y=c,n.z=h,this}makePerspective(e,t,n,o,a,c,h=Wn,p=!1){const f=this.elements,v=2*a/(t-e),_=2*a/(n-o),x=(t+e)/(t-e),E=(n+o)/(n-o);let b,R;if(p)b=a/(c-a),R=c*a/(c-a);else if(h===Wn)b=-(c+a)/(c-a),R=-2*c*a/(c-a);else if(h===js)b=-c/(c-a),R=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return f[0]=v,f[4]=0,f[8]=x,f[12]=0,f[1]=0,f[5]=_,f[9]=E,f[13]=0,f[2]=0,f[6]=0,f[10]=b,f[14]=R,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,n,o,a,c,h=Wn,p=!1){const f=this.elements,v=2/(t-e),_=2/(n-o),x=-(t+e)/(t-e),E=-(n+o)/(n-o);let b,R;if(p)b=1/(c-a),R=c/(c-a);else if(h===Wn)b=-2/(c-a),R=-(c+a)/(c-a);else if(h===js)b=-1/(c-a),R=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return f[0]=v,f[4]=0,f[8]=0,f[12]=x,f[1]=0,f[5]=_,f[9]=0,f[13]=E,f[2]=0,f[6]=0,f[10]=b,f[14]=R,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<16;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Yi=new ee,Cn=new zt,dg=new ee(0,0,0),pg=new ee(1,1,1),ai=new ee,vs=new ee,pn=new ee,_c=new zt,gc=new zi;class $n{constructor(e=0,t=0,n=0,o=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,o=this._order){return this._x=e,this._y=t,this._z=n,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const o=e.elements,a=o[0],c=o[4],h=o[8],p=o[1],f=o[5],v=o[9],_=o[2],x=o[6],E=o[10];switch(t){case"XYZ":this._y=Math.asin(dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(x,f),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(p,f)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(dt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(p,a));break;case"ZYX":this._y=Math.asin(-dt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,E),this._z=Math.atan2(p,a)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(dt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,f),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,f),this._y=Math.atan2(h,a)):(this._x=Math.atan2(-v,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _c.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_c,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gc.setFromEuler(this),this.setFromQuaternion(gc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class Du{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mg=0;const vc=new ee,Ki=new zi,Zn=new zt,xs=new ee,Cr=new ee,_g=new ee,gg=new zi,xc=new ee(1,0,0),yc=new ee(0,1,0),Ec=new ee(0,0,1),Sc={type:"added"},vg={type:"removed"},Zi={type:"childadded",child:null},Do={type:"childremoved",child:null};class Zt extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=Vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new ee,t=new $n,n=new zi,o=new ee(1,1,1);function a(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new zt},normalMatrix:{value:new ot}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Du,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(xc,e)}rotateY(e){return this.rotateOnAxis(yc,e)}rotateZ(e){return this.rotateOnAxis(Ec,e)}translateOnAxis(e,t){return vc.copy(e).applyQuaternion(this.quaternion),this.position.add(vc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xc,e)}translateY(e){return this.translateOnAxis(yc,e)}translateZ(e){return this.translateOnAxis(Ec,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xs.copy(e):xs.set(e,t,n);const o=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Cr,xs,this.up):Zn.lookAt(xs,Cr,this.up),this.quaternion.setFromRotationMatrix(Zn),o&&(Zn.extractRotation(o.matrixWorld),Ki.setFromRotationMatrix(Zn),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sc),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vg),Do.child=e,this.dispatchEvent(Do),Do.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sc),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,o=this.children.length;n<o;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,e,_g),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,gg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let f=0,v=p.length;f<v;f++){const _=p[f];a(e.shapes,_)}else a(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,f=this.material.length;p<f;p++)h.push(a(e.materials,this.material[p]));o.material=h}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(a(e.animations,p))}}if(t){const h=c(e.geometries),p=c(e.materials),f=c(e.textures),v=c(e.images),_=c(e.shapes),x=c(e.skeletons),E=c(e.animations),b=c(e.nodes);h.length>0&&(n.geometries=h),p.length>0&&(n.materials=p),f.length>0&&(n.textures=f),v.length>0&&(n.images=v),_.length>0&&(n.shapes=_),x.length>0&&(n.skeletons=x),E.length>0&&(n.animations=E),b.length>0&&(n.nodes=b)}return n.object=o,n;function c(h){const p=[];for(const f in h){const v=h[f];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const o=e.children[n];this.add(o.clone())}return this}}Zt.DEFAULT_UP=new ee(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new ee,Jn=new ee,Lo=new ee,Qn=new ee,Ji=new ee,Qi=new ee,Mc=new ee,Fo=new ee,Io=new ee,Uo=new ee,No=new Bt,Oo=new Bt,ko=new Bt;class Fn{constructor(e=new ee,t=new ee,n=new ee){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,o){o.subVectors(n,t),Pn.subVectors(e,t),o.cross(Pn);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,n,o,a){Pn.subVectors(o,t),Jn.subVectors(n,t),Lo.subVectors(e,t);const c=Pn.dot(Pn),h=Pn.dot(Jn),p=Pn.dot(Lo),f=Jn.dot(Jn),v=Jn.dot(Lo),_=c*f-h*h;if(_===0)return a.set(0,0,0),null;const x=1/_,E=(f*p-h*v)*x,b=(c*v-h*p)*x;return a.set(1-E-b,b,E)}static containsPoint(e,t,n,o){return this.getBarycoord(e,t,n,o,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,n,o,a,c,h,p){return this.getBarycoord(e,t,n,o,Qn)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(a,Qn.x),p.addScaledVector(c,Qn.y),p.addScaledVector(h,Qn.z),p)}static getInterpolatedAttribute(e,t,n,o,a,c){return No.setScalar(0),Oo.setScalar(0),ko.setScalar(0),No.fromBufferAttribute(e,t),Oo.fromBufferAttribute(e,n),ko.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(No,a.x),c.addScaledVector(Oo,a.y),c.addScaledVector(ko,a.z),c}static isFrontFacing(e,t,n,o){return Pn.subVectors(n,t),Jn.subVectors(e,t),Pn.cross(Jn).dot(o)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,o){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,n,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Pn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,o,a){return Fn.getInterpolation(e,this.a,this.b,this.c,t,n,o,a)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,o=this.b,a=this.c;let c,h;Ji.subVectors(o,n),Qi.subVectors(a,n),Fo.subVectors(e,n);const p=Ji.dot(Fo),f=Qi.dot(Fo);if(p<=0&&f<=0)return t.copy(n);Io.subVectors(e,o);const v=Ji.dot(Io),_=Qi.dot(Io);if(v>=0&&_<=v)return t.copy(o);const x=p*_-v*f;if(x<=0&&p>=0&&v<=0)return c=p/(p-v),t.copy(n).addScaledVector(Ji,c);Uo.subVectors(e,a);const E=Ji.dot(Uo),b=Qi.dot(Uo);if(b>=0&&E<=b)return t.copy(a);const R=E*f-p*b;if(R<=0&&f>=0&&b<=0)return h=f/(f-b),t.copy(n).addScaledVector(Qi,h);const y=v*b-E*_;if(y<=0&&_-v>=0&&E-b>=0)return Mc.subVectors(a,o),h=(_-v)/(_-v+(E-b)),t.copy(o).addScaledVector(Mc,h);const m=1/(y+R+x);return c=R*m,h=x*m,t.copy(n).addScaledVector(Ji,c).addScaledVector(Qi,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},ys={h:0,s:0,l:0};function Bo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class pt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.colorSpaceToWorking(this,t),this}setRGB(e,t,n,o=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.colorSpaceToWorking(this,o),this}setHSL(e,t,n,o=St.workingColorSpace){if(e=ng(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,c=2*n-a;this.r=Bo(c,a,e+1/3),this.g=Bo(c,a,e),this.b=Bo(c,a,e-1/3)}return St.colorSpaceToWorking(this,o),this}setStyle(e,t=gn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],h=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gn){const n=Lu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ni(e.r),this.g=ni(e.g),this.b=ni(e.b),this}copyLinearToSRGB(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return St.workingToColorSpace(sn.copy(this),e),Math.round(dt(sn.r*255,0,255))*65536+Math.round(dt(sn.g*255,0,255))*256+Math.round(dt(sn.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.workingToColorSpace(sn.copy(this),t);const n=sn.r,o=sn.g,a=sn.b,c=Math.max(n,o,a),h=Math.min(n,o,a);let p,f;const v=(h+c)/2;if(h===c)p=0,f=0;else{const _=c-h;switch(f=v<=.5?_/(c+h):_/(2-c-h),c){case n:p=(o-a)/_+(o<a?6:0);break;case o:p=(a-n)/_+2;break;case a:p=(n-o)/_+4;break}p/=6}return e.h=p,e.s=f,e.l=v,e}getRGB(e,t=St.workingColorSpace){return St.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=gn){St.workingToColorSpace(sn.copy(this),e);const t=sn.r,n=sn.g,o=sn.b;return e!==gn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(o*255)})`}offsetHSL(e,t,n){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(ys);const n=Eo(li.h,ys.h,t),o=Eo(li.s,ys.s,t),a=Eo(li.l,ys.l,t);return this.setHSL(n,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*o,this.g=a[1]*t+a[4]*n+a[7]*o,this.b=a[2]*t+a[5]*n+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new pt;pt.NAMES=Lu;let xg=0;class xr extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=Vr(),this.name="",this.type="Material",this.blending=fr,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ca,this.blendDst=ua,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(n):o&&o.isVector3&&n&&n.isVector3?o.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ca&&(n.blendSrc=this.blendSrc),this.blendDst!==ua&&(n.blendDst=this.blendDst),this.blendEquation!==Ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==pr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function o(a){const c=[];for(const h in a){const p=a[h];delete p.metadata,c.push(p)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(n.textures=a),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const o=t.length;n=new Array(o);for(let a=0;a!==o;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cl extends xr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=gu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new ee,Es=new st;let yg=0;class wn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=uc,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[n+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Es.fromBufferAttribute(this,t),Es.applyMatrix3(e),this.setXY(t,Es.x,Es.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=br(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=br(t,this.array)),t}setX(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=br(t,this.array)),t}setY(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=br(t,this.array)),t}setZ(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=br(t,this.array)),t}setW(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),n=cn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,o){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),n=cn(n,this.array),o=cn(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this}setXYZW(e,t,n,o,a){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),n=cn(n,this.array),o=cn(o,this.array),a=cn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uc&&(e.usage=this.usage),e}}class Fu extends wn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Iu extends wn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dn extends wn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Eg=0;const En=new zt,zo=new Zt,er=new ee,mn=new Gr,Pr=new Gr,Kt=new ee;class Nn extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=Vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cu(e)?Iu:Fu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ot().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return zo.lookAt(e),zo.updateMatrix(),this.applyMatrix4(zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];n.push(c.x,c.y,c.z||0)}this.setAttribute("position",new dn(n,3))}else{const n=Math.min(e.length,t.count);for(let o=0;o<n;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,o=t.length;n<o;n++){const a=t[n];mn.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const h=t[a];Pr.setFromBufferAttribute(h),this.morphTargetsRelative?(Kt.addVectors(mn.min,Pr.min),mn.expandByPoint(Kt),Kt.addVectors(mn.max,Pr.max),mn.expandByPoint(Kt)):(mn.expandByPoint(Pr.min),mn.expandByPoint(Pr.max))}mn.getCenter(n);let o=0;for(let a=0,c=e.count;a<c;a++)Kt.fromBufferAttribute(e,a),o=Math.max(o,n.distanceToSquared(Kt));if(t)for(let a=0,c=t.length;a<c;a++){const h=t[a],p=this.morphTargetsRelative;for(let f=0,v=h.count;f<v;f++)Kt.fromBufferAttribute(h,f),p&&(er.fromBufferAttribute(e,f),Kt.add(er)),o=Math.max(o,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*n.count),4));const c=this.getAttribute("tangent"),h=[],p=[];for(let V=0;V<n.count;V++)h[V]=new ee,p[V]=new ee;const f=new ee,v=new ee,_=new ee,x=new st,E=new st,b=new st,R=new ee,y=new ee;function m(V,P,S){f.fromBufferAttribute(n,V),v.fromBufferAttribute(n,P),_.fromBufferAttribute(n,S),x.fromBufferAttribute(a,V),E.fromBufferAttribute(a,P),b.fromBufferAttribute(a,S),v.sub(f),_.sub(f),E.sub(x),b.sub(x);const H=1/(E.x*b.y-b.x*E.y);isFinite(H)&&(R.copy(v).multiplyScalar(b.y).addScaledVector(_,-E.y).multiplyScalar(H),y.copy(_).multiplyScalar(E.x).addScaledVector(v,-b.x).multiplyScalar(H),h[V].add(R),h[P].add(R),h[S].add(R),p[V].add(y),p[P].add(y),p[S].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let V=0,P=N.length;V<P;++V){const S=N[V],H=S.start,Y=S.count;for(let te=H,ne=H+Y;te<ne;te+=3)m(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const I=new ee,L=new ee,O=new ee,D=new ee;function G(V){O.fromBufferAttribute(o,V),D.copy(O);const P=h[V];I.copy(P),I.sub(O.multiplyScalar(O.dot(P))).normalize(),L.crossVectors(D,P);const H=L.dot(p[V])<0?-1:1;c.setXYZW(V,I.x,I.y,I.z,H)}for(let V=0,P=N.length;V<P;++V){const S=N[V],H=S.start,Y=S.count;for(let te=H,ne=H+Y;te<ne;te+=3)G(e.getX(te+0)),G(e.getX(te+1)),G(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let x=0,E=n.count;x<E;x++)n.setXYZ(x,0,0,0);const o=new ee,a=new ee,c=new ee,h=new ee,p=new ee,f=new ee,v=new ee,_=new ee;if(e)for(let x=0,E=e.count;x<E;x+=3){const b=e.getX(x+0),R=e.getX(x+1),y=e.getX(x+2);o.fromBufferAttribute(t,b),a.fromBufferAttribute(t,R),c.fromBufferAttribute(t,y),v.subVectors(c,a),_.subVectors(o,a),v.cross(_),h.fromBufferAttribute(n,b),p.fromBufferAttribute(n,R),f.fromBufferAttribute(n,y),h.add(v),p.add(v),f.add(v),n.setXYZ(b,h.x,h.y,h.z),n.setXYZ(R,p.x,p.y,p.z),n.setXYZ(y,f.x,f.y,f.z)}else for(let x=0,E=t.count;x<E;x+=3)o.fromBufferAttribute(t,x+0),a.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),v.subVectors(c,a),_.subVectors(o,a),v.cross(_),n.setXYZ(x+0,v.x,v.y,v.z),n.setXYZ(x+1,v.x,v.y,v.z),n.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(h,p){const f=h.array,v=h.itemSize,_=h.normalized,x=new f.constructor(p.length*v);let E=0,b=0;for(let R=0,y=p.length;R<y;R++){h.isInterleavedBufferAttribute?E=p[R]*h.data.stride+h.offset:E=p[R]*v;for(let m=0;m<v;m++)x[b++]=f[E++]}return new wn(x,v,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nn,n=this.index.array,o=this.attributes;for(const h in o){const p=o[h],f=e(p,n);t.setAttribute(h,f)}const a=this.morphAttributes;for(const h in a){const p=[],f=a[h];for(let v=0,_=f.length;v<_;v++){const x=f[v],E=e(x,n);p.push(E)}t.morphAttributes[h]=p}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let h=0,p=c.length;h<p;h++){const f=c[h];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const f in p)p[f]!==void 0&&(e[f]=p[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const p in n){const f=n[p];e.data.attributes[p]=f.toJSON(e.data)}const o={};let a=!1;for(const p in this.morphAttributes){const f=this.morphAttributes[p],v=[];for(let _=0,x=f.length;_<x;_++){const E=f[_];v.push(E.toJSON(e.data))}v.length>0&&(o[p]=v,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const o=e.attributes;for(const f in o){const v=o[f];this.setAttribute(f,v.clone(t))}const a=e.morphAttributes;for(const f in a){const v=[],_=a[f];for(let x=0,E=_.length;x<E;x++)v.push(_[x].clone(t));this.morphAttributes[f]=v}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let f=0,v=c.length;f<v;f++){const _=c[f];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tc=new zt,Ci=new ll,Ss=new Qs,wc=new ee,Ms=new ee,Ts=new ee,ws=new ee,Ho=new ee,bs=new ee,bc=new ee,As=new ee;class Tn extends Zt{constructor(e=new Nn,t=new cl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const h=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}getVertexPosition(e,t){const n=this.geometry,o=n.attributes.position,a=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(a&&h){bs.set(0,0,0);for(let p=0,f=a.length;p<f;p++){const v=h[p],_=a[p];v!==0&&(Ho.fromBufferAttribute(_,e),c?bs.addScaledVector(Ho,v):bs.addScaledVector(Ho.sub(t),v))}t.add(bs)}return t}raycast(e,t){const n=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(a),Ci.copy(e.ray).recast(e.near),!(Ss.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Ss,wc)===null||Ci.origin.distanceToSquared(wc)>(e.far-e.near)**2))&&(Tc.copy(a).invert(),Ci.copy(e.ray).applyMatrix4(Tc),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,n){let o;const a=this.geometry,c=this.material,h=a.index,p=a.attributes.position,f=a.attributes.uv,v=a.attributes.uv1,_=a.attributes.normal,x=a.groups,E=a.drawRange;if(h!==null)if(Array.isArray(c))for(let b=0,R=x.length;b<R;b++){const y=x[b],m=c[y.materialIndex],N=Math.max(y.start,E.start),I=Math.min(h.count,Math.min(y.start+y.count,E.start+E.count));for(let L=N,O=I;L<O;L+=3){const D=h.getX(L),G=h.getX(L+1),V=h.getX(L+2);o=Rs(this,m,e,n,f,v,_,D,G,V),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const b=Math.max(0,E.start),R=Math.min(h.count,E.start+E.count);for(let y=b,m=R;y<m;y+=3){const N=h.getX(y),I=h.getX(y+1),L=h.getX(y+2);o=Rs(this,c,e,n,f,v,_,N,I,L),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(c))for(let b=0,R=x.length;b<R;b++){const y=x[b],m=c[y.materialIndex],N=Math.max(y.start,E.start),I=Math.min(p.count,Math.min(y.start+y.count,E.start+E.count));for(let L=N,O=I;L<O;L+=3){const D=L,G=L+1,V=L+2;o=Rs(this,m,e,n,f,v,_,D,G,V),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const b=Math.max(0,E.start),R=Math.min(p.count,E.start+E.count);for(let y=b,m=R;y<m;y+=3){const N=y,I=y+1,L=y+2;o=Rs(this,c,e,n,f,v,_,N,I,L),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function Sg(i,e,t,n,o,a,c,h){let p;if(e.side===hn?p=n.intersectTriangle(c,a,o,!0,h):p=n.intersectTriangle(o,a,c,e.side===_i,h),p===null)return null;As.copy(h),As.applyMatrix4(i.matrixWorld);const f=t.ray.origin.distanceTo(As);return f<t.near||f>t.far?null:{distance:f,point:As.clone(),object:i}}function Rs(i,e,t,n,o,a,c,h,p,f){i.getVertexPosition(h,Ms),i.getVertexPosition(p,Ts),i.getVertexPosition(f,ws);const v=Sg(i,e,t,n,Ms,Ts,ws,bc);if(v){const _=new ee;Fn.getBarycoord(bc,Ms,Ts,ws,_),o&&(v.uv=Fn.getInterpolatedAttribute(o,h,p,f,_,new st)),a&&(v.uv1=Fn.getInterpolatedAttribute(a,h,p,f,_,new st)),c&&(v.normal=Fn.getInterpolatedAttribute(c,h,p,f,_,new ee),v.normal.dot(n.direction)>0&&v.normal.multiplyScalar(-1));const x={a:h,b:p,c:f,normal:new ee,materialIndex:0};Fn.getNormal(Ms,Ts,ws,x.normal),v.face=x,v.barycoord=_}return v}class Wr extends Nn{constructor(e=1,t=1,n=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:o,heightSegments:a,depthSegments:c};const h=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const p=[],f=[],v=[],_=[];let x=0,E=0;b("z","y","x",-1,-1,n,t,e,c,a,0),b("z","y","x",1,-1,n,t,-e,c,a,1),b("x","z","y",1,1,e,n,t,o,c,2),b("x","z","y",1,-1,e,n,-t,o,c,3),b("x","y","z",1,-1,e,t,n,o,a,4),b("x","y","z",-1,-1,e,t,-n,o,a,5),this.setIndex(p),this.setAttribute("position",new dn(f,3)),this.setAttribute("normal",new dn(v,3)),this.setAttribute("uv",new dn(_,2));function b(R,y,m,N,I,L,O,D,G,V,P){const S=L/G,H=O/V,Y=L/2,te=O/2,ne=D/2,he=G+1,ae=V+1;let Ee=0,oe=0;const fe=new ee;for(let De=0;De<ae;De++){const He=De*H-te;for(let Be=0;Be<he;Be++){const Ye=Be*S-Y;fe[R]=Ye*N,fe[y]=He*I,fe[m]=ne,f.push(fe.x,fe.y,fe.z),fe[R]=0,fe[y]=0,fe[m]=D>0?1:-1,v.push(fe.x,fe.y,fe.z),_.push(Be/G),_.push(1-De/V),Ee+=1}}for(let De=0;De<V;De++)for(let He=0;He<G;He++){const Be=x+He+he*De,Ye=x+He+he*(De+1),Ke=x+(He+1)+he*(De+1),Ze=x+(He+1)+he*De;p.push(Be,Ye,Ze),p.push(Ye,Ke,Ze),oe+=6}h.addGroup(E,oe,P),E+=oe,x+=Ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const o=i[t][n];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=o.clone():Array.isArray(o)?e[t][n]=o.slice():e[t][n]=o}}return e}function an(i){const e={};for(let t=0;t<i.length;t++){const n=vr(i[t]);for(const o in n)e[o]=n[o]}return e}function Mg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Uu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const Tg={clone:vr,merge:an};var wg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends xr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wg,this.fragmentShader=bg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vr(e.uniforms),this.uniformsGroups=Mg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const o in this.extensions)this.extensions[o]===!0&&(n[o]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Nu extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new ee,Ac=new st,Rc=new st;class Mn extends Nu{constructor(e=50,t=1,n=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ka*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ka*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ci.x,ci.y).multiplyScalar(-e/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-e/ci.z)}getViewSize(e,t){return this.getViewBounds(e,Ac,Rc),t.subVectors(Rc,Ac)}setViewOffset(e,t,n,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*t,o=this.aspect*n,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,f=c.fullHeight;a+=c.offsetX*o/p,t-=c.offsetY*n/f,o*=c.width/p,n*=c.height/f}const h=this.filmOffset;h!==0&&(a+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const tr=-90,nr=1;class Ag extends Zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Mn(tr,nr,e,t);o.layers=this.layers,this.add(o);const a=new Mn(tr,nr,e,t);a.layers=this.layers,this.add(a);const c=new Mn(tr,nr,e,t);c.layers=this.layers,this.add(c);const h=new Mn(tr,nr,e,t);h.layers=this.layers,this.add(h);const p=new Mn(tr,nr,e,t);p.layers=this.layers,this.add(p);const f=new Mn(tr,nr,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,o,a,c,h,p]=t;for(const f of t)this.remove(f);if(e===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,h,p,f,v]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const R=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,o),e.render(t,a),e.setRenderTarget(n,1,o),e.render(t,c),e.setRenderTarget(n,2,o),e.render(t,h),e.setRenderTarget(n,3,o),e.render(t,p),e.setRenderTarget(n,4,o),e.render(t,f),n.texture.generateMipmaps=R,e.setRenderTarget(n,5,o),e.render(t,v),e.setRenderTarget(_,x,E),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class Ou extends fn{constructor(e=[],t=mr,n,o,a,c,h,p,f,v){super(e,t,n,o,a,c,h,p,f,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rg extends Hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},o=[n,n,n,n,n,n];this.texture=new Ou(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Wr(5,5,5),a=new gi({name:"CubemapFromEquirect",uniforms:vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:pi});a.uniforms.tEquirect.value=t;const c=new Tn(o,a),h=t.minFilter;return t.minFilter===ki&&(t.minFilter=Gn),new Ag(1,10,this).update(e,c),t.minFilter=h,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,n=!0,o=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,o);e.setRenderTarget(a)}}class Cs extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cg={type:"move"};class Vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let o=null,a=null,c=null;const h=this._targetRay,p=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){c=!0;for(const R of e.hand.values()){const y=t.getJointPose(R,n),m=this._getHandJoint(f,R);y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=y.radius),m.visible=y!==null}const v=f.joints["index-finger-tip"],_=f.joints["thumb-tip"],x=v.position.distanceTo(_.position),E=.02,b=.005;f.inputState.pinching&&x>E+b?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&x<=E-b&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(p.matrix.fromArray(a.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,a.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(a.linearVelocity)):p.hasLinearVelocity=!1,a.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(a.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(o=t.getPose(e.targetRaySpace,n),o===null&&a!==null&&(o=a),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Cg)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=a!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Cs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Pg extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Go=new ee,Dg=new ee,Lg=new ot;class fi{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,o){return this.normal.set(e,t,n),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const o=Go.subVectors(n,t).cross(Dg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Go),o=this.normal.dot(n);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lg.getNormalMatrix(e),o=this.coplanarPoint(Go).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new Qs,Fg=new st(.5,.5),Ps=new ee;class ul{constructor(e=new fi,t=new fi,n=new fi,o=new fi,a=new fi,c=new fi){this.planes=[e,t,n,o,a,c]}set(e,t,n,o,a,c){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(n),h[3].copy(o),h[4].copy(a),h[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wn,n=!1){const o=this.planes,a=e.elements,c=a[0],h=a[1],p=a[2],f=a[3],v=a[4],_=a[5],x=a[6],E=a[7],b=a[8],R=a[9],y=a[10],m=a[11],N=a[12],I=a[13],L=a[14],O=a[15];if(o[0].setComponents(f-c,E-v,m-b,O-N).normalize(),o[1].setComponents(f+c,E+v,m+b,O+N).normalize(),o[2].setComponents(f+h,E+_,m+R,O+I).normalize(),o[3].setComponents(f-h,E-_,m-R,O-I).normalize(),n)o[4].setComponents(p,x,y,L).normalize(),o[5].setComponents(f-p,E-x,m-y,O-L).normalize();else if(o[4].setComponents(f-p,E-x,m-y,O-L).normalize(),t===Wn)o[5].setComponents(f+p,E+x,m+y,O+L).normalize();else if(t===js)o[5].setComponents(p,x,y,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){Pi.center.set(0,0,0);const t=Fg.distanceTo(e.center);return Pi.radius=.7071067811865476+t,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){const t=this.planes,n=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const o=t[n];if(Ps.x=o.normal.x>0?e.max.x:e.min.x,Ps.y=o.normal.y>0?e.max.y:e.min.y,Ps.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ku extends xr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ks=new ee,Zs=new ee,Cc=new zt,Dr=new ll,Ds=new Qs,Wo=new ee,Pc=new ee;class Ig extends Zt{constructor(e=new Nn,t=new ku){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let o=1,a=t.count;o<a;o++)Ks.fromBufferAttribute(t,o-1),Zs.fromBufferAttribute(t,o),n[o]=n[o-1],n[o]+=Ks.distanceTo(Zs);e.setAttribute("lineDistance",new dn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,o=this.matrixWorld,a=e.params.Line.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(o),Ds.radius+=a,e.ray.intersectsSphere(Ds)===!1)return;Cc.copy(o).invert(),Dr.copy(e.ray).applyMatrix4(Cc);const h=a/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,f=this.isLineSegments?2:1,v=n.index,x=n.attributes.position;if(v!==null){const E=Math.max(0,c.start),b=Math.min(v.count,c.start+c.count);for(let R=E,y=b-1;R<y;R+=f){const m=v.getX(R),N=v.getX(R+1),I=Ls(this,e,Dr,p,m,N,R);I&&t.push(I)}if(this.isLineLoop){const R=v.getX(b-1),y=v.getX(E),m=Ls(this,e,Dr,p,R,y,b-1);m&&t.push(m)}}else{const E=Math.max(0,c.start),b=Math.min(x.count,c.start+c.count);for(let R=E,y=b-1;R<y;R+=f){const m=Ls(this,e,Dr,p,R,R+1,R);m&&t.push(m)}if(this.isLineLoop){const R=Ls(this,e,Dr,p,b-1,E,b-1);R&&t.push(R)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const h=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}}function Ls(i,e,t,n,o,a,c){const h=i.geometry.attributes.position;if(Ks.fromBufferAttribute(h,o),Zs.fromBufferAttribute(h,a),t.distanceSqToSegment(Ks,Zs,Wo,Pc)>n)return;Wo.applyMatrix4(i.matrixWorld);const f=e.ray.origin.distanceTo(Wo);if(!(f<e.near||f>e.far))return{distance:f,point:Pc.clone().applyMatrix4(i.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:i}}const Dc=new ee,Lc=new ee;class Ug extends Ig{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let o=0,a=t.count;o<a;o+=2)Dc.fromBufferAttribute(t,o),Lc.fromBufferAttribute(t,o+1),n[o]=o===0?0:n[o-1],n[o+1]=n[o]+Dc.distanceTo(Lc);e.setAttribute("lineDistance",new dn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bu extends fn{constructor(e,t,n=Bi,o,a,c,h=Un,p=Un,f,v=kr,_=1){if(v!==kr&&v!==Br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:_};super(x,o,a,c,h,p,v,n,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new al(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class zu extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class hl extends Nn{constructor(e=1,t=1,n=1,o=32,a=1,c=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:o,heightSegments:a,openEnded:c,thetaStart:h,thetaLength:p};const f=this;o=Math.floor(o),a=Math.floor(a);const v=[],_=[],x=[],E=[];let b=0;const R=[],y=n/2;let m=0;N(),c===!1&&(e>0&&I(!0),t>0&&I(!1)),this.setIndex(v),this.setAttribute("position",new dn(_,3)),this.setAttribute("normal",new dn(x,3)),this.setAttribute("uv",new dn(E,2));function N(){const L=new ee,O=new ee;let D=0;const G=(t-e)/n;for(let V=0;V<=a;V++){const P=[],S=V/a,H=S*(t-e)+e;for(let Y=0;Y<=o;Y++){const te=Y/o,ne=te*p+h,he=Math.sin(ne),ae=Math.cos(ne);O.x=H*he,O.y=-S*n+y,O.z=H*ae,_.push(O.x,O.y,O.z),L.set(he,G,ae).normalize(),x.push(L.x,L.y,L.z),E.push(te,1-S),P.push(b++)}R.push(P)}for(let V=0;V<o;V++)for(let P=0;P<a;P++){const S=R[P][V],H=R[P+1][V],Y=R[P+1][V+1],te=R[P][V+1];(e>0||P!==0)&&(v.push(S,H,te),D+=3),(t>0||P!==a-1)&&(v.push(H,Y,te),D+=3)}f.addGroup(m,D,0),m+=D}function I(L){const O=b,D=new st,G=new ee;let V=0;const P=L===!0?e:t,S=L===!0?1:-1;for(let Y=1;Y<=o;Y++)_.push(0,y*S,0),x.push(0,S,0),E.push(.5,.5),b++;const H=b;for(let Y=0;Y<=o;Y++){const ne=Y/o*p+h,he=Math.cos(ne),ae=Math.sin(ne);G.x=P*ae,G.y=y*S,G.z=P*he,_.push(G.x,G.y,G.z),x.push(0,S,0),D.x=he*.5+.5,D.y=ae*.5*S+.5,E.push(D.x,D.y),b++}for(let Y=0;Y<o;Y++){const te=O+Y,ne=H+Y;L===!0?v.push(ne,ne+1,te):v.push(ne+1,ne,te),V+=3}f.addGroup(m,V,L===!0?1:2),m+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xr extends Nn{constructor(e=1,t=1,n=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:o};const a=e/2,c=t/2,h=Math.floor(n),p=Math.floor(o),f=h+1,v=p+1,_=e/h,x=t/p,E=[],b=[],R=[],y=[];for(let m=0;m<v;m++){const N=m*x-c;for(let I=0;I<f;I++){const L=I*_-a;b.push(L,-N,0),R.push(0,0,1),y.push(I/h),y.push(1-m/p)}}for(let m=0;m<p;m++)for(let N=0;N<h;N++){const I=N+f*m,L=N+f*(m+1),O=N+1+f*(m+1),D=N+1+f*m;E.push(I,L,D),E.push(L,O,D)}this.setIndex(E),this.setAttribute("position",new dn(b,3)),this.setAttribute("normal",new dn(R,3)),this.setAttribute("uv",new dn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Fc extends xr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Au,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ng extends xr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Og extends xr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Hu extends Zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class kg extends Hu{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Xo=new zt,Ic=new ee,Uc=new ee;class Bg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ul,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ic.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ic),Uc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uc),t.updateMatrixWorld(),Xo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Vu extends Nu{constructor(e=-1,t=1,n=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=n-e,c=n+e,h=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,c=a+f*this.view.width,h-=v*this.view.offsetY,p=h-v*this.view.height}this.projectionMatrix.makeOrthographic(a,c,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class zg extends Bg{constructor(){super(new Vu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hg extends Hu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new zg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Vg extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Nc{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=dt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Gg extends Ug{constructor(e=10,t=10,n=4473924,o=8947848){n=new pt(n),o=new pt(o);const a=t/2,c=e/t,h=e/2,p=[],f=[];for(let x=0,E=0,b=-h;x<=t;x++,b+=c){p.push(-h,0,b,h,0,b),p.push(b,0,-h,b,0,h);const R=x===a?n:o;R.toArray(f,E),E+=3,R.toArray(f,E),E+=3,R.toArray(f,E),E+=3,R.toArray(f,E),E+=3}const v=new Nn;v.setAttribute("position",new dn(p,3)),v.setAttribute("color",new dn(f,3));const _=new ku({vertexColors:!0,toneMapped:!1});super(v,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Wg extends Vi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Oc(i,e,t,n){const o=Xg(n);switch(t){case Mu:return i*e;case wu:return i*e/o.components*o.byteLength;case rl:return i*e/o.components*o.byteLength;case bu:return i*e*2/o.components*o.byteLength;case sl:return i*e*2/o.components*o.byteLength;case Tu:return i*e*3/o.components*o.byteLength;case In:return i*e*4/o.components*o.byteLength;case ol:return i*e*4/o.components*o.byteLength;case Hs:case Vs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Gs:case Ws:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ma:case wa:return Math.max(i,16)*Math.max(e,8)/4;case Sa:case Ta:return Math.max(i,8)*Math.max(e,8)/2;case ba:case Aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Da:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case La:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ka:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ha:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Va:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ga:case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case $a:case qa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ja:case Ya:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xg(i){switch(i){case Xn:case xu:return{byteLength:1,components:1};case Nr:case yu:case Hr:return{byteLength:2,components:1};case nl:case il:return{byteLength:2,components:4};case Bi:case tl:case ti:return{byteLength:4,components:1};case Eu:case Su:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:el}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=el);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gu(){let i=null,e=!1,t=null,n=null;function o(a,c){t(a,c),n=i.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(o),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function $g(i){const e=new WeakMap;function t(h,p){const f=h.array,v=h.usage,_=f.byteLength,x=i.createBuffer();i.bindBuffer(p,x),i.bufferData(p,f,v),h.onUploadCallback();let E;if(f instanceof Float32Array)E=i.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)E=i.HALF_FLOAT;else if(f instanceof Uint16Array)h.isFloat16BufferAttribute?E=i.HALF_FLOAT:E=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)E=i.SHORT;else if(f instanceof Uint32Array)E=i.UNSIGNED_INT;else if(f instanceof Int32Array)E=i.INT;else if(f instanceof Int8Array)E=i.BYTE;else if(f instanceof Uint8Array)E=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)E=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:x,type:E,bytesPerElement:f.BYTES_PER_ELEMENT,version:h.version,size:_}}function n(h,p,f){const v=p.array,_=p.updateRanges;if(i.bindBuffer(f,h),_.length===0)i.bufferSubData(f,0,v);else{_.sort((E,b)=>E.start-b.start);let x=0;for(let E=1;E<_.length;E++){const b=_[x],R=_[E];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++x,_[x]=R)}_.length=x+1;for(let E=0,b=_.length;E<b;E++){const R=_[E];i.bufferSubData(f,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(i.deleteBuffer(p.buffer),e.delete(h))}function c(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const f=e.get(h);if(f===void 0)e.set(h,t(h,p));else if(f.version<h.version){if(f.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,h,p),f.version=h.version}}return{get:o,remove:a,update:c}}var qg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jg=`#ifdef USE_ALPHAHASH
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
#endif`,Yg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qg=`#ifdef USE_AOMAP
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
#endif`,ev=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tv=`#ifdef USE_BATCHING
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
#endif`,nv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ov=`#ifdef USE_IRIDESCENCE
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
#endif`,av=`#ifdef USE_BUMPMAP
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
#endif`,lv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_v=`#define PI 3.141592653589793
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
} // validated`,gv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vv=`vec3 transformedNormal = objectNormal;
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
#endif`,xv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ev=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wv=`#ifdef USE_ENVMAP
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
#endif`,bv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Av=`#ifdef USE_ENVMAP
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
#endif`,Rv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cv=`#ifdef USE_ENVMAP
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
#endif`,Pv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iv=`#ifdef USE_GRADIENTMAP
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
}`,Uv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ov=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kv=`uniform bool receiveShadow;
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
#endif`,Bv=`#ifdef USE_ENVMAP
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
#endif`,zv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wv=`PhysicalMaterial material;
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
#endif`,Xv=`struct PhysicalMaterial {
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
}`,$v=`
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
#endif`,qv=`#if defined( RE_IndirectDiffuse )
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
#endif`,jv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,n0=`#if defined( USE_POINTS_UV )
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
#endif`,i0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,o0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l0=`#ifdef USE_MORPHTARGETS
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
#endif`,c0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,h0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,f0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m0=`#ifdef USE_NORMALMAP
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
#endif`,_0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,v0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,S0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,M0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,b0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,R0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,D0=`float getShadowMask() {
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
}`,L0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F0=`#ifdef USE_SKINNING
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
#endif`,I0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U0=`#ifdef USE_SKINNING
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
#endif`,N0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,z0=`#ifdef USE_TRANSMISSION
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
#endif`,H0=`#ifdef USE_TRANSMISSION
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
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q0=`uniform sampler2D t2D;
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`#include <common>
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
}`,Q0=`#if DEPTH_PACKING == 3200
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
}`,ex=`#define DISTANCE
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
}`,tx=`#define DISTANCE
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
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ix=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`uniform float scale;
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
}`,sx=`uniform vec3 diffuse;
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
}`,ox=`#include <common>
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
}`,ax=`uniform vec3 diffuse;
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
}`,lx=`#define LAMBERT
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
}`,cx=`#define LAMBERT
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
}`,ux=`#define MATCAP
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
}`,hx=`#define MATCAP
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
}`,fx=`#define NORMAL
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
}`,dx=`#define NORMAL
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
}`,px=`#define PHONG
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
}`,mx=`#define PHONG
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
}`,_x=`#define STANDARD
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
}`,gx=`#define STANDARD
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
}`,vx=`#define TOON
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
}`,xx=`#define TOON
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
}`,yx=`uniform float size;
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
}`,Ex=`uniform vec3 diffuse;
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
}`,Sx=`#include <common>
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
}`,Mx=`uniform vec3 color;
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
}`,Tx=`uniform float rotation;
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
}`,wx=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:qg,alphahash_pars_fragment:jg,alphamap_fragment:Yg,alphamap_pars_fragment:Kg,alphatest_fragment:Zg,alphatest_pars_fragment:Jg,aomap_fragment:Qg,aomap_pars_fragment:ev,batching_pars_vertex:tv,batching_vertex:nv,begin_vertex:iv,beginnormal_vertex:rv,bsdfs:sv,iridescence_fragment:ov,bumpmap_pars_fragment:av,clipping_planes_fragment:lv,clipping_planes_pars_fragment:cv,clipping_planes_pars_vertex:uv,clipping_planes_vertex:hv,color_fragment:fv,color_pars_fragment:dv,color_pars_vertex:pv,color_vertex:mv,common:_v,cube_uv_reflection_fragment:gv,defaultnormal_vertex:vv,displacementmap_pars_vertex:xv,displacementmap_vertex:yv,emissivemap_fragment:Ev,emissivemap_pars_fragment:Sv,colorspace_fragment:Mv,colorspace_pars_fragment:Tv,envmap_fragment:wv,envmap_common_pars_fragment:bv,envmap_pars_fragment:Av,envmap_pars_vertex:Rv,envmap_physical_pars_fragment:Bv,envmap_vertex:Cv,fog_vertex:Pv,fog_pars_vertex:Dv,fog_fragment:Lv,fog_pars_fragment:Fv,gradientmap_pars_fragment:Iv,lightmap_pars_fragment:Uv,lights_lambert_fragment:Nv,lights_lambert_pars_fragment:Ov,lights_pars_begin:kv,lights_toon_fragment:zv,lights_toon_pars_fragment:Hv,lights_phong_fragment:Vv,lights_phong_pars_fragment:Gv,lights_physical_fragment:Wv,lights_physical_pars_fragment:Xv,lights_fragment_begin:$v,lights_fragment_maps:qv,lights_fragment_end:jv,logdepthbuf_fragment:Yv,logdepthbuf_pars_fragment:Kv,logdepthbuf_pars_vertex:Zv,logdepthbuf_vertex:Jv,map_fragment:Qv,map_pars_fragment:e0,map_particle_fragment:t0,map_particle_pars_fragment:n0,metalnessmap_fragment:i0,metalnessmap_pars_fragment:r0,morphinstance_vertex:s0,morphcolor_vertex:o0,morphnormal_vertex:a0,morphtarget_pars_vertex:l0,morphtarget_vertex:c0,normal_fragment_begin:u0,normal_fragment_maps:h0,normal_pars_fragment:f0,normal_pars_vertex:d0,normal_vertex:p0,normalmap_pars_fragment:m0,clearcoat_normal_fragment_begin:_0,clearcoat_normal_fragment_maps:g0,clearcoat_pars_fragment:v0,iridescence_pars_fragment:x0,opaque_fragment:y0,packing:E0,premultiplied_alpha_fragment:S0,project_vertex:M0,dithering_fragment:T0,dithering_pars_fragment:w0,roughnessmap_fragment:b0,roughnessmap_pars_fragment:A0,shadowmap_pars_fragment:R0,shadowmap_pars_vertex:C0,shadowmap_vertex:P0,shadowmask_pars_fragment:D0,skinbase_vertex:L0,skinning_pars_vertex:F0,skinning_vertex:I0,skinnormal_vertex:U0,specularmap_fragment:N0,specularmap_pars_fragment:O0,tonemapping_fragment:k0,tonemapping_pars_fragment:B0,transmission_fragment:z0,transmission_pars_fragment:H0,uv_pars_fragment:V0,uv_pars_vertex:G0,uv_vertex:W0,worldpos_vertex:X0,background_vert:$0,background_frag:q0,backgroundCube_vert:j0,backgroundCube_frag:Y0,cube_vert:K0,cube_frag:Z0,depth_vert:J0,depth_frag:Q0,distanceRGBA_vert:ex,distanceRGBA_frag:tx,equirect_vert:nx,equirect_frag:ix,linedashed_vert:rx,linedashed_frag:sx,meshbasic_vert:ox,meshbasic_frag:ax,meshlambert_vert:lx,meshlambert_frag:cx,meshmatcap_vert:ux,meshmatcap_frag:hx,meshnormal_vert:fx,meshnormal_frag:dx,meshphong_vert:px,meshphong_frag:mx,meshphysical_vert:_x,meshphysical_frag:gx,meshtoon_vert:vx,meshtoon_frag:xx,points_vert:yx,points_frag:Ex,shadow_vert:Sx,shadow_frag:Mx,sprite_vert:Tx,sprite_frag:wx},Oe={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Hn={basic:{uniforms:an([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:an([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new pt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:an([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:an([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:an([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new pt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:an([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:an([Oe.points,Oe.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:an([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:an([Oe.common,Oe.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:an([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:an([Oe.sprite,Oe.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:an([Oe.common,Oe.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:an([Oe.lights,Oe.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Hn.physical={uniforms:an([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Fs={r:0,b:0,g:0},Di=new $n,bx=new zt;function Ax(i,e,t,n,o,a,c){const h=new pt(0);let p=a===!0?0:1,f,v,_=null,x=0,E=null;function b(I){let L=I.isScene===!0?I.background:null;return L&&L.isTexture&&(L=(I.backgroundBlurriness>0?t:e).get(L)),L}function R(I){let L=!1;const O=b(I);O===null?m(h,p):O&&O.isColor&&(m(O,1),L=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,c):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||L)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(I,L){const O=b(L);O&&(O.isCubeTexture||O.mapping===Js)?(v===void 0&&(v=new Tn(new Wr(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:vr(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(D,G,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),Di.copy(L.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),v.material.uniforms.envMap.value=O,v.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(bx.makeRotationFromEuler(Di)),v.material.toneMapped=St.getTransfer(O.colorSpace)!==Ct,(_!==O||x!==O.version||E!==i.toneMapping)&&(v.material.needsUpdate=!0,_=O,x=O.version,E=i.toneMapping),v.layers.enableAll(),I.unshift(v,v.geometry,v.material,0,0,null)):O&&O.isTexture&&(f===void 0&&(f=new Tn(new Xr(2,2),new gi({name:"BackgroundMaterial",uniforms:vr(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(f)),f.material.uniforms.t2D.value=O,f.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,f.material.toneMapped=St.getTransfer(O.colorSpace)!==Ct,O.matrixAutoUpdate===!0&&O.updateMatrix(),f.material.uniforms.uvTransform.value.copy(O.matrix),(_!==O||x!==O.version||E!==i.toneMapping)&&(f.material.needsUpdate=!0,_=O,x=O.version,E=i.toneMapping),f.layers.enableAll(),I.unshift(f,f.geometry,f.material,0,0,null))}function m(I,L){I.getRGB(Fs,Uu(i)),n.buffers.color.setClear(Fs.r,Fs.g,Fs.b,L,c)}function N(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return h},setClearColor:function(I,L=1){h.set(I),p=L,m(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(I){p=I,m(h,p)},render:R,addToRenderList:y,dispose:N}}function Rx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},o=x(null);let a=o,c=!1;function h(S,H,Y,te,ne){let he=!1;const ae=_(te,Y,H);a!==ae&&(a=ae,f(a.object)),he=E(S,te,Y,ne),he&&b(S,te,Y,ne),ne!==null&&e.update(ne,i.ELEMENT_ARRAY_BUFFER),(he||c)&&(c=!1,L(S,H,Y,te),ne!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function p(){return i.createVertexArray()}function f(S){return i.bindVertexArray(S)}function v(S){return i.deleteVertexArray(S)}function _(S,H,Y){const te=Y.wireframe===!0;let ne=n[S.id];ne===void 0&&(ne={},n[S.id]=ne);let he=ne[H.id];he===void 0&&(he={},ne[H.id]=he);let ae=he[te];return ae===void 0&&(ae=x(p()),he[te]=ae),ae}function x(S){const H=[],Y=[],te=[];for(let ne=0;ne<t;ne++)H[ne]=0,Y[ne]=0,te[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Y,attributeDivisors:te,object:S,attributes:{},index:null}}function E(S,H,Y,te){const ne=a.attributes,he=H.attributes;let ae=0;const Ee=Y.getAttributes();for(const oe in Ee)if(Ee[oe].location>=0){const De=ne[oe];let He=he[oe];if(He===void 0&&(oe==="instanceMatrix"&&S.instanceMatrix&&(He=S.instanceMatrix),oe==="instanceColor"&&S.instanceColor&&(He=S.instanceColor)),De===void 0||De.attribute!==He||He&&De.data!==He.data)return!0;ae++}return a.attributesNum!==ae||a.index!==te}function b(S,H,Y,te){const ne={},he=H.attributes;let ae=0;const Ee=Y.getAttributes();for(const oe in Ee)if(Ee[oe].location>=0){let De=he[oe];De===void 0&&(oe==="instanceMatrix"&&S.instanceMatrix&&(De=S.instanceMatrix),oe==="instanceColor"&&S.instanceColor&&(De=S.instanceColor));const He={};He.attribute=De,De&&De.data&&(He.data=De.data),ne[oe]=He,ae++}a.attributes=ne,a.attributesNum=ae,a.index=te}function R(){const S=a.newAttributes;for(let H=0,Y=S.length;H<Y;H++)S[H]=0}function y(S){m(S,0)}function m(S,H){const Y=a.newAttributes,te=a.enabledAttributes,ne=a.attributeDivisors;Y[S]=1,te[S]===0&&(i.enableVertexAttribArray(S),te[S]=1),ne[S]!==H&&(i.vertexAttribDivisor(S,H),ne[S]=H)}function N(){const S=a.newAttributes,H=a.enabledAttributes;for(let Y=0,te=H.length;Y<te;Y++)H[Y]!==S[Y]&&(i.disableVertexAttribArray(Y),H[Y]=0)}function I(S,H,Y,te,ne,he,ae){ae===!0?i.vertexAttribIPointer(S,H,Y,ne,he):i.vertexAttribPointer(S,H,Y,te,ne,he)}function L(S,H,Y,te){R();const ne=te.attributes,he=Y.getAttributes(),ae=H.defaultAttributeValues;for(const Ee in he){const oe=he[Ee];if(oe.location>=0){let fe=ne[Ee];if(fe===void 0&&(Ee==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),Ee==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor)),fe!==void 0){const De=fe.normalized,He=fe.itemSize,Be=e.get(fe);if(Be===void 0)continue;const Ye=Be.buffer,Ke=Be.type,Ze=Be.bytesPerElement,se=Ke===i.INT||Ke===i.UNSIGNED_INT||fe.gpuType===tl;if(fe.isInterleavedBufferAttribute){const pe=fe.data,ue=pe.stride,we=fe.offset;if(pe.isInstancedInterleavedBuffer){for(let We=0;We<oe.locationSize;We++)m(oe.location+We,pe.meshPerAttribute);S.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let We=0;We<oe.locationSize;We++)y(oe.location+We);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let We=0;We<oe.locationSize;We++)I(oe.location+We,He/oe.locationSize,Ke,De,ue*Ze,(we+He/oe.locationSize*We)*Ze,se)}else{if(fe.isInstancedBufferAttribute){for(let pe=0;pe<oe.locationSize;pe++)m(oe.location+pe,fe.meshPerAttribute);S.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let pe=0;pe<oe.locationSize;pe++)y(oe.location+pe);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let pe=0;pe<oe.locationSize;pe++)I(oe.location+pe,He/oe.locationSize,Ke,De,He*Ze,He/oe.locationSize*pe*Ze,se)}}else if(ae!==void 0){const De=ae[Ee];if(De!==void 0)switch(De.length){case 2:i.vertexAttrib2fv(oe.location,De);break;case 3:i.vertexAttrib3fv(oe.location,De);break;case 4:i.vertexAttrib4fv(oe.location,De);break;default:i.vertexAttrib1fv(oe.location,De)}}}}N()}function O(){V();for(const S in n){const H=n[S];for(const Y in H){const te=H[Y];for(const ne in te)v(te[ne].object),delete te[ne];delete H[Y]}delete n[S]}}function D(S){if(n[S.id]===void 0)return;const H=n[S.id];for(const Y in H){const te=H[Y];for(const ne in te)v(te[ne].object),delete te[ne];delete H[Y]}delete n[S.id]}function G(S){for(const H in n){const Y=n[H];if(Y[S.id]===void 0)continue;const te=Y[S.id];for(const ne in te)v(te[ne].object),delete te[ne];delete Y[S.id]}}function V(){P(),c=!0,a!==o&&(a=o,f(a.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:V,resetDefaultState:P,dispose:O,releaseStatesOfGeometry:D,releaseStatesOfProgram:G,initAttributes:R,enableAttribute:y,disableUnusedAttributes:N}}function Cx(i,e,t){let n;function o(f){n=f}function a(f,v){i.drawArrays(n,f,v),t.update(v,n,1)}function c(f,v,_){_!==0&&(i.drawArraysInstanced(n,f,v,_),t.update(v,n,_))}function h(f,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,v,0,_);let E=0;for(let b=0;b<_;b++)E+=v[b];t.update(E,n,1)}function p(f,v,_,x){if(_===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let b=0;b<f.length;b++)c(f[b],v[b],x[b]);else{E.multiDrawArraysInstancedWEBGL(n,f,0,v,0,x,0,_);let b=0;for(let R=0;R<_;R++)b+=v[R]*x[R];t.update(b,n,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function Px(i,e,t,n){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const G=e.get("EXT_texture_filter_anisotropic");o=i.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(G){return!(G!==In&&n.convert(G)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(G){const V=G===Hr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(G!==Xn&&n.convert(G)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&G!==ti&&!V)}function p(G){if(G==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const v=p(f);v!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",v,"instead."),f=v);const _=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),N=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),L=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=b>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:h,precision:f,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:E,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:N,maxVaryings:I,maxFragmentUniforms:L,vertexTextures:O,maxSamples:D}}function Dx(i){const e=this;let t=null,n=0,o=!1,a=!1;const c=new fi,h=new ot,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const E=_.length!==0||x||n!==0||o;return o=x,n=_.length,E},this.beginShadows=function(){a=!0,v(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,x){t=v(_,x,0)},this.setState=function(_,x,E){const b=_.clippingPlanes,R=_.clipIntersection,y=_.clipShadows,m=i.get(_);if(!o||b===null||b.length===0||a&&!y)a?v(null):f();else{const N=a?0:n,I=N*4;let L=m.clippingState||null;p.value=L,L=v(b,x,I,E);for(let O=0;O!==I;++O)L[O]=t[O];m.clippingState=L,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=N}};function f(){p.value!==t&&(p.value=t,p.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function v(_,x,E,b){const R=_!==null?_.length:0;let y=null;if(R!==0){if(y=p.value,b!==!0||y===null){const m=E+R*4,N=x.matrixWorldInverse;h.getNormalMatrix(N),(y===null||y.length<m)&&(y=new Float32Array(m));for(let I=0,L=E;I!==R;++I,L+=4)c.copy(_[I]).applyMatrix4(N,h),c.normal.toArray(y,L),y[L+3]=c.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}function Lx(i){let e=new WeakMap;function t(c,h){return h===va?c.mapping=mr:h===xa&&(c.mapping=_r),c}function n(c){if(c&&c.isTexture){const h=c.mapping;if(h===va||h===xa)if(e.has(c)){const p=e.get(c).texture;return t(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const f=new Rg(p.height);return f.fromEquirectangularTexture(i,c),e.set(c,f),c.addEventListener("dispose",o),t(f.texture,c.mapping)}else return null}}return c}function o(c){const h=c.target;h.removeEventListener("dispose",o);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const cr=4,kc=[.125,.215,.35,.446,.526,.582],Ni=20,$o=new Vu,Bc=new pt;let qo=null,jo=0,Yo=0,Ko=!1;const Ii=(1+Math.sqrt(5))/2,ir=1/Ii,zc=[new ee(-Ii,ir,0),new ee(Ii,ir,0),new ee(-ir,0,Ii),new ee(ir,0,Ii),new ee(0,Ii,-ir),new ee(0,Ii,ir),new ee(-1,1,-1),new ee(1,1,-1),new ee(-1,1,1),new ee(1,1,1)],Fx=new ee;class Hc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,o=100,a={}){const{size:c=256,position:h=Fx}=a;qo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,n,o,p,h),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qo,jo,Yo),this._renderer.xr.enabled=Ko,e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mr||e.mapping===_r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Hr,format:In,colorSpace:gr,depthBuffer:!1},o=Vc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vc(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ix(a)),this._blurMaterial=Ux(a,e,t)}return o}_compileMaterial(e){const t=new Tn(this._lodPlanes[0],e);this._renderer.compile(t,$o)}_sceneToCubeUV(e,t,n,o,a){const p=new Mn(90,1,t,n),f=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,E=_.toneMapping;_.getClearColor(Bc),_.toneMapping=mi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null));const R=new cl({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),y=new Tn(new Wr,R);let m=!1;const N=e.background;N?N.isColor&&(R.color.copy(N),e.background=null,m=!0):(R.color.copy(Bc),m=!0);for(let I=0;I<6;I++){const L=I%3;L===0?(p.up.set(0,f[I],0),p.position.set(a.x,a.y,a.z),p.lookAt(a.x+v[I],a.y,a.z)):L===1?(p.up.set(0,0,f[I]),p.position.set(a.x,a.y,a.z),p.lookAt(a.x,a.y+v[I],a.z)):(p.up.set(0,f[I],0),p.position.set(a.x,a.y,a.z),p.lookAt(a.x,a.y,a.z+v[I]));const O=this._cubeSize;Is(o,L*O,I>2?O:0,O,O),_.setRenderTarget(o),m&&_.render(y,p),_.render(e,p)}y.geometry.dispose(),y.material.dispose(),_.toneMapping=E,_.autoClear=x,e.background=N}_textureToCubeUV(e,t){const n=this._renderer,o=e.mapping===mr||e.mapping===_r;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gc());const a=o?this._cubemapMaterial:this._equirectMaterial,c=new Tn(this._lodPlanes[0],a),h=a.uniforms;h.envMap.value=e;const p=this._cubeSize;Is(t,0,0,3*p,2*p),n.setRenderTarget(t),n.render(c,$o)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let a=1;a<o;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),h=zc[(o-a-1)%zc.length];this._blur(e,a-1,a,c,h)}t.autoClear=n}_blur(e,t,n,o,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,o,"latitudinal",a),this._halfBlur(c,e,n,n,o,"longitudinal",a)}_halfBlur(e,t,n,o,a,c,h){const p=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,_=new Tn(this._lodPlanes[o],f),x=f.uniforms,E=this._sizeLods[n]-1,b=isFinite(a)?Math.PI/(2*E):2*Math.PI/(2*Ni-1),R=a/b,y=isFinite(a)?1+Math.floor(v*R):Ni;y>Ni&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ni}`);const m=[];let N=0;for(let G=0;G<Ni;++G){const V=G/R,P=Math.exp(-V*V/2);m.push(P),G===0?N+=P:G<y&&(N+=2*P)}for(let G=0;G<m.length;G++)m[G]=m[G]/N;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=m,x.latitudinal.value=c==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:I}=this;x.dTheta.value=b,x.mipInt.value=I-n;const L=this._sizeLods[o],O=3*L*(o>I-cr?o-I+cr:0),D=4*(this._cubeSize-L);Is(t,O,D,3*L,2*L),p.setRenderTarget(t),p.render(_,$o)}}function Ix(i){const e=[],t=[],n=[];let o=i;const a=i-cr+1+kc.length;for(let c=0;c<a;c++){const h=Math.pow(2,o);t.push(h);let p=1/h;c>i-cr?p=kc[c-i+cr-1]:c===0&&(p=0),n.push(p);const f=1/(h-2),v=-f,_=1+f,x=[v,v,_,v,_,_,v,v,_,_,v,_],E=6,b=6,R=3,y=2,m=1,N=new Float32Array(R*b*E),I=new Float32Array(y*b*E),L=new Float32Array(m*b*E);for(let D=0;D<E;D++){const G=D%3*2/3-1,V=D>2?0:-1,P=[G,V,0,G+2/3,V,0,G+2/3,V+1,0,G,V,0,G+2/3,V+1,0,G,V+1,0];N.set(P,R*b*D),I.set(x,y*b*D);const S=[D,D,D,D,D,D];L.set(S,m*b*D)}const O=new Nn;O.setAttribute("position",new wn(N,R)),O.setAttribute("uv",new wn(I,y)),O.setAttribute("faceIndex",new wn(L,m)),e.push(O),o>cr&&o--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Vc(i,e,t){const n=new Hi(i,e,t);return n.texture.mapping=Js,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Is(i,e,t,n,o){i.viewport.set(e,t,n,o),i.scissor.set(e,t,n,o)}function Ux(i,e,t){const n=new Float32Array(Ni),o=new ee(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:fl(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Gc(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fl(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Wc(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function fl(){return`

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
	`}function Nx(i){let e=new WeakMap,t=null;function n(h){if(h&&h.isTexture){const p=h.mapping,f=p===va||p===xa,v=p===mr||p===_r;if(f||v){let _=e.get(h);const x=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return t===null&&(t=new Hc(i)),_=f?t.fromEquirectangular(h,_):t.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const E=h.image;return f&&E&&E.height>0||v&&E&&o(E)?(t===null&&(t=new Hc(i)),_=f?t.fromEquirectangular(h):t.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",a),_.texture):null}}}return h}function o(h){let p=0;const f=6;for(let v=0;v<f;v++)h[v]!==void 0&&p++;return p===f}function a(h){const p=h.target;p.removeEventListener("dispose",a);const f=e.get(p);f!==void 0&&(e.delete(p),f.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function Ox(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let o;switch(n){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(n)}return e[n]=o,o}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const o=t(n);return o===null&&zr("THREE.WebGLRenderer: "+n+" extension not supported."),o}}}function kx(i,e,t,n){const o={},a=new WeakMap;function c(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);x.removeEventListener("dispose",c),delete o[x.id];const E=a.get(x);E&&(e.remove(E),a.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function h(_,x){return o[x.id]===!0||(x.addEventListener("dispose",c),o[x.id]=!0,t.memory.geometries++),x}function p(_){const x=_.attributes;for(const E in x)e.update(x[E],i.ARRAY_BUFFER)}function f(_){const x=[],E=_.index,b=_.attributes.position;let R=0;if(E!==null){const N=E.array;R=E.version;for(let I=0,L=N.length;I<L;I+=3){const O=N[I+0],D=N[I+1],G=N[I+2];x.push(O,D,D,G,G,O)}}else if(b!==void 0){const N=b.array;R=b.version;for(let I=0,L=N.length/3-1;I<L;I+=3){const O=I+0,D=I+1,G=I+2;x.push(O,D,D,G,G,O)}}else return;const y=new(Cu(x)?Iu:Fu)(x,1);y.version=R;const m=a.get(_);m&&e.remove(m),a.set(_,y)}function v(_){const x=a.get(_);if(x){const E=_.index;E!==null&&x.version<E.version&&f(_)}else f(_);return a.get(_)}return{get:h,update:p,getWireframeAttribute:v}}function Bx(i,e,t){let n;function o(x){n=x}let a,c;function h(x){a=x.type,c=x.bytesPerElement}function p(x,E){i.drawElements(n,E,a,x*c),t.update(E,n,1)}function f(x,E,b){b!==0&&(i.drawElementsInstanced(n,E,a,x*c,b),t.update(E,n,b))}function v(x,E,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,E,0,a,x,0,b);let y=0;for(let m=0;m<b;m++)y+=E[m];t.update(y,n,1)}function _(x,E,b,R){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let m=0;m<x.length;m++)f(x[m]/c,E[m],R[m]);else{y.multiDrawElementsInstancedWEBGL(n,E,0,a,x,0,R,0,b);let m=0;for(let N=0;N<b;N++)m+=E[N]*R[N];t.update(m,n,1)}}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=f,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function zx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,c,h){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=h*(a/3);break;case i.LINES:t.lines+=h*(a/2);break;case i.LINE_STRIP:t.lines+=h*(a-1);break;case i.LINE_LOOP:t.lines+=h*a;break;case i.POINTS:t.points+=h*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:n}}function Hx(i,e,t){const n=new WeakMap,o=new Bt;function a(c,h,p){const f=c.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=v!==void 0?v.length:0;let x=n.get(h);if(x===void 0||x.count!==_){let P=function(){G.dispose(),n.delete(h),h.removeEventListener("dispose",P)};x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],m=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let I=0;E===!0&&(I=1),b===!0&&(I=2),R===!0&&(I=3);let L=h.attributes.position.count*I,O=1;L>e.maxTextureSize&&(O=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const D=new Float32Array(L*O*4*_),G=new Pu(D,L,O,_);G.type=ti,G.needsUpdate=!0;const V=I*4;for(let S=0;S<_;S++){const H=y[S],Y=m[S],te=N[S],ne=L*O*4*S;for(let he=0;he<H.count;he++){const ae=he*V;E===!0&&(o.fromBufferAttribute(H,he),D[ne+ae+0]=o.x,D[ne+ae+1]=o.y,D[ne+ae+2]=o.z,D[ne+ae+3]=0),b===!0&&(o.fromBufferAttribute(Y,he),D[ne+ae+4]=o.x,D[ne+ae+5]=o.y,D[ne+ae+6]=o.z,D[ne+ae+7]=0),R===!0&&(o.fromBufferAttribute(te,he),D[ne+ae+8]=o.x,D[ne+ae+9]=o.y,D[ne+ae+10]=o.z,D[ne+ae+11]=te.itemSize===4?o.w:1)}}x={count:_,texture:G,size:new st(L,O)},n.set(h,x),h.addEventListener("dispose",P)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let E=0;for(let R=0;R<f.length;R++)E+=f[R];const b=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(i,"morphTargetBaseInfluence",b),p.getUniforms().setValue(i,"morphTargetInfluences",f)}p.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}return{update:a}}function Vx(i,e,t,n){let o=new WeakMap;function a(p){const f=n.render.frame,v=p.geometry,_=e.get(p,v);if(o.get(_)!==f&&(e.update(_),o.set(_,f)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),o.get(p)!==f&&(t.update(p.instanceMatrix,i.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,i.ARRAY_BUFFER),o.set(p,f))),p.isSkinnedMesh){const x=p.skeleton;o.get(x)!==f&&(x.update(),o.set(x,f))}return _}function c(){o=new WeakMap}function h(p){const f=p.target;f.removeEventListener("dispose",h),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:c}}const Wu=new fn,Xc=new Bu(1,1),Xu=new Pu,$u=new hg,qu=new Ou,$c=[],qc=[],jc=new Float32Array(16),Yc=new Float32Array(9),Kc=new Float32Array(4);function yr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const o=e*t;let a=$c[o];if(a===void 0&&(a=new Float32Array(o),$c[o]=a),e!==0){n.toArray(a,0);for(let c=1,h=0;c!==e;++c)h+=t,i[c].toArray(a,h)}return a}function jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function eo(i,e){let t=qc[e];t===void 0&&(t=new Int32Array(e),qc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Gx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Wx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}function Xx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}function $x(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}function qx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(jt(t,n))return;Kc.set(n),i.uniformMatrix2fv(this.addr,!1,Kc),Yt(t,n)}}function jx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(jt(t,n))return;Yc.set(n),i.uniformMatrix3fv(this.addr,!1,Yc),Yt(t,n)}}function Yx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(jt(t,n))return;jc.set(n),i.uniformMatrix4fv(this.addr,!1,jc),Yt(t,n)}}function Kx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Zx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}function Jx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}function Qx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}function ey(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ty(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}function ny(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}function iy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}function ry(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o);let a;this.type===i.SAMPLER_2D_SHADOW?(Xc.compareFunction=Ru,a=Xc):a=Wu,t.setTexture2D(e||a,o)}function sy(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTexture3D(e||$u,o)}function oy(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTextureCube(e||qu,o)}function ay(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTexture2DArray(e||Xu,o)}function ly(i){switch(i){case 5126:return Gx;case 35664:return Wx;case 35665:return Xx;case 35666:return $x;case 35674:return qx;case 35675:return jx;case 35676:return Yx;case 5124:case 35670:return Kx;case 35667:case 35671:return Zx;case 35668:case 35672:return Jx;case 35669:case 35673:return Qx;case 5125:return ey;case 36294:return ty;case 36295:return ny;case 36296:return iy;case 35678:case 36198:case 36298:case 36306:case 35682:return ry;case 35679:case 36299:case 36307:return sy;case 35680:case 36300:case 36308:case 36293:return oy;case 36289:case 36303:case 36311:case 36292:return ay}}function cy(i,e){i.uniform1fv(this.addr,e)}function uy(i,e){const t=yr(e,this.size,2);i.uniform2fv(this.addr,t)}function hy(i,e){const t=yr(e,this.size,3);i.uniform3fv(this.addr,t)}function fy(i,e){const t=yr(e,this.size,4);i.uniform4fv(this.addr,t)}function dy(i,e){const t=yr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function py(i,e){const t=yr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function my(i,e){const t=yr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function _y(i,e){i.uniform1iv(this.addr,e)}function gy(i,e){i.uniform2iv(this.addr,e)}function vy(i,e){i.uniform3iv(this.addr,e)}function xy(i,e){i.uniform4iv(this.addr,e)}function yy(i,e){i.uniform1uiv(this.addr,e)}function Ey(i,e){i.uniform2uiv(this.addr,e)}function Sy(i,e){i.uniform3uiv(this.addr,e)}function My(i,e){i.uniform4uiv(this.addr,e)}function Ty(i,e,t){const n=this.cache,o=e.length,a=eo(t,o);jt(n,a)||(i.uniform1iv(this.addr,a),Yt(n,a));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||Wu,a[c])}function wy(i,e,t){const n=this.cache,o=e.length,a=eo(t,o);jt(n,a)||(i.uniform1iv(this.addr,a),Yt(n,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||$u,a[c])}function by(i,e,t){const n=this.cache,o=e.length,a=eo(t,o);jt(n,a)||(i.uniform1iv(this.addr,a),Yt(n,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||qu,a[c])}function Ay(i,e,t){const n=this.cache,o=e.length,a=eo(t,o);jt(n,a)||(i.uniform1iv(this.addr,a),Yt(n,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||Xu,a[c])}function Ry(i){switch(i){case 5126:return cy;case 35664:return uy;case 35665:return hy;case 35666:return fy;case 35674:return dy;case 35675:return py;case 35676:return my;case 5124:case 35670:return _y;case 35667:case 35671:return gy;case 35668:case 35672:return vy;case 35669:case 35673:return xy;case 5125:return yy;case 36294:return Ey;case 36295:return Sy;case 36296:return My;case 35678:case 36198:case 36298:case 36306:case 35682:return Ty;case 35679:case 36299:case 36307:return wy;case 35680:case 36300:case 36308:case 36293:return by;case 36289:case 36303:case 36311:case 36292:return Ay}}class Cy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ly(t.type)}}class Py{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ry(t.type)}}class Dy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const h=o[a];h.setValue(e,t[h.id],n)}}}const Zo=/(\w+)(\])?(\[|\.)?/g;function Zc(i,e){i.seq.push(e),i.map[e.id]=e}function Ly(i,e,t){const n=i.name,o=n.length;for(Zo.lastIndex=0;;){const a=Zo.exec(n),c=Zo.lastIndex;let h=a[1];const p=a[2]==="]",f=a[3];if(p&&(h=h|0),f===void 0||f==="["&&c+2===o){Zc(t,f===void 0?new Cy(h,i,e):new Py(h,i,e));break}else{let _=t.map[h];_===void 0&&(_=new Dy(h),Zc(t,_)),t=_}}}class $s{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Ly(a,c,this)}}setValue(e,t,n,o){const a=this.map[t];a!==void 0&&a.setValue(e,n,o)}setOptional(e,t,n){const o=t[n];o!==void 0&&this.setValue(e,n,o)}static upload(e,t,n,o){for(let a=0,c=t.length;a!==c;++a){const h=t[a],p=n[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,o)}}static seqWithValue(e,t){const n=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&n.push(c)}return n}}function Jc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Fy=37297;let Iy=0;function Uy(i,e){const t=i.split(`
`),n=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const h=c+1;n.push(`${h===e?">":" "} ${h}: ${t[c]}`)}return n.join(`
`)}const Qc=new ot;function Ny(i){St._getMatrix(Qc,St.workingColorSpace,i);const e=`mat3( ${Qc.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(i)){case qs:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function eu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const h=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+Uy(i.getShaderSource(e),h)}else return a}function Oy(i,e){const t=Ny(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ky(i,e){let t;switch(e){case k_:t="Linear";break;case B_:t="Reinhard";break;case z_:t="Cineon";break;case H_:t="ACESFilmic";break;case G_:t="AgX";break;case W_:t="Neutral";break;case V_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Us=new ee;function By(){St.getLuminanceCoefficients(Us);const i=Us.x.toFixed(4),e=Us.y.toFixed(4),t=Us.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fr).join(`
`)}function Hy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Vy(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let o=0;o<n;o++){const a=i.getActiveAttrib(e,o),c=a.name;let h=1;a.type===i.FLOAT_MAT2&&(h=2),a.type===i.FLOAT_MAT3&&(h=3),a.type===i.FLOAT_MAT4&&(h=4),t[c]={type:a.type,location:i.getAttribLocation(e,c),locationSize:h}}return t}function Fr(i){return i!==""}function tu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Za(i){return i.replace(Gy,Xy)}const Wy=new Map;function Xy(i,e){let t=ct[e];if(t===void 0){const n=Wy.get(e);if(n!==void 0)t=ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Za(t)}const $y=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iu(i){return i.replace($y,qy)}function qy(i,e,t,n){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function ru(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_u?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===g_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function Yy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case mr:case _r:e="ENVMAP_TYPE_CUBE";break;case Js:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ky(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _r:e="ENVMAP_MODE_REFRACTION";break}return e}function Zy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case gu:e="ENVMAP_BLENDING_MULTIPLY";break;case N_:e="ENVMAP_BLENDING_MIX";break;case O_:e="ENVMAP_BLENDING_ADD";break}return e}function Jy(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Qy(i,e,t,n){const o=i.getContext(),a=t.defines;let c=t.vertexShader,h=t.fragmentShader;const p=jy(t),f=Yy(t),v=Ky(t),_=Zy(t),x=Jy(t),E=zy(t),b=Hy(a),R=o.createProgram();let y,m,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Fr).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Fr).join(`
`),m.length>0&&(m+=`
`)):(y=[ru(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),m=[ru(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+v:"",t.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?ct.tonemapping_pars_fragment:"",t.toneMapping!==mi?ky("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,Oy("linearToOutputTexel",t.outputColorSpace),By(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fr).join(`
`)),c=Za(c),c=tu(c,t),c=nu(c,t),h=Za(h),h=tu(h,t),h=nu(h,t),c=iu(c),h=iu(h),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",t.glslVersion===hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const I=N+y+c,L=N+m+h,O=Jc(o,o.VERTEX_SHADER,I),D=Jc(o,o.FRAGMENT_SHADER,L);o.attachShader(R,O),o.attachShader(R,D),t.index0AttributeName!==void 0?o.bindAttribLocation(R,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function G(H){if(i.debug.checkShaderErrors){const Y=o.getProgramInfoLog(R)||"",te=o.getShaderInfoLog(O)||"",ne=o.getShaderInfoLog(D)||"",he=Y.trim(),ae=te.trim(),Ee=ne.trim();let oe=!0,fe=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(oe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,R,O,D);else{const De=eu(o,O,"vertex"),He=eu(o,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+he+`
`+De+`
`+He)}else he!==""?console.warn("THREE.WebGLProgram: Program Info Log:",he):(ae===""||Ee==="")&&(fe=!1);fe&&(H.diagnostics={runnable:oe,programLog:he,vertexShader:{log:ae,prefix:y},fragmentShader:{log:Ee,prefix:m}})}o.deleteShader(O),o.deleteShader(D),V=new $s(o,R),P=Vy(o,R)}let V;this.getUniforms=function(){return V===void 0&&G(this),V};let P;this.getAttributes=function(){return P===void 0&&G(this),P};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=o.getProgramParameter(R,Fy)),S},this.destroy=function(){n.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Iy++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=O,this.fragmentShader=D,this}let eE=0;class tE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new nE(e),t.set(e,n)),n}}class nE{constructor(e){this.id=eE++,this.code=e,this.usedTimes=0}}function iE(i,e,t,n,o,a,c){const h=new Du,p=new tE,f=new Set,v=[],_=o.logarithmicDepthBuffer,x=o.vertexTextures;let E=o.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(P){return f.add(P),P===0?"uv":`uv${P}`}function y(P,S,H,Y,te){const ne=Y.fog,he=te.geometry,ae=P.isMeshStandardMaterial?Y.environment:null,Ee=(P.isMeshStandardMaterial?t:e).get(P.envMap||ae),oe=Ee&&Ee.mapping===Js?Ee.image.height:null,fe=b[P.type];P.precision!==null&&(E=o.getMaxPrecision(P.precision),E!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",E,"instead."));const De=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,He=De!==void 0?De.length:0;let Be=0;he.morphAttributes.position!==void 0&&(Be=1),he.morphAttributes.normal!==void 0&&(Be=2),he.morphAttributes.color!==void 0&&(Be=3);let Ye,Ke,Ze,se;if(fe){const rt=Hn[fe];Ye=rt.vertexShader,Ke=rt.fragmentShader}else Ye=P.vertexShader,Ke=P.fragmentShader,p.update(P),Ze=p.getVertexShaderID(P),se=p.getFragmentShaderID(P);const pe=i.getRenderTarget(),ue=i.state.buffers.depth.getReversed(),we=te.isInstancedMesh===!0,We=te.isBatchedMesh===!0,it=!!P.map,vt=!!P.matcap,k=!!Ee,xt=!!P.aoMap,et=!!P.lightMap,$e=!!P.bumpMap,Ve=!!P.normalMap,_t=!!P.displacementMap,ze=!!P.emissiveMap,nt=!!P.metalnessMap,At=!!P.roughnessMap,Et=P.anisotropy>0,U=P.clearcoat>0,A=P.dispersion>0,j=P.iridescence>0,B=P.sheen>0,J=P.transmission>0,q=Et&&!!P.anisotropyMap,ve=U&&!!P.clearcoatMap,_e=U&&!!P.clearcoatNormalMap,Le=U&&!!P.clearcoatRoughnessMap,Ce=j&&!!P.iridescenceMap,de=j&&!!P.iridescenceThicknessMap,xe=B&&!!P.sheenColorMap,ye=B&&!!P.sheenRoughnessMap,Re=!!P.specularMap,Fe=!!P.specularColorMap,Je=!!P.specularIntensityMap,W=J&&!!P.transmissionMap,me=J&&!!P.thicknessMap,be=!!P.gradientMap,Ie=!!P.alphaMap,X=P.alphaTest>0,z=!!P.alphaHash,Ue=!!P.extensions;let qe=mi;P.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(qe=i.toneMapping);const ht={shaderID:fe,shaderType:P.type,shaderName:P.name,vertexShader:Ye,fragmentShader:Ke,defines:P.defines,customVertexShaderID:Ze,customFragmentShaderID:se,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:E,batching:We,batchingColor:We&&te._colorsTexture!==null,instancing:we,instancingColor:we&&te.instanceColor!==null,instancingMorph:we&&te.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:gr,alphaToCoverage:!!P.alphaToCoverage,map:it,matcap:vt,envMap:k,envMapMode:k&&Ee.mapping,envMapCubeUVHeight:oe,aoMap:xt,lightMap:et,bumpMap:$e,normalMap:Ve,displacementMap:x&&_t,emissiveMap:ze,normalMapObjectSpace:Ve&&P.normalMapType===j_,normalMapTangentSpace:Ve&&P.normalMapType===Au,metalnessMap:nt,roughnessMap:At,anisotropy:Et,anisotropyMap:q,clearcoat:U,clearcoatMap:ve,clearcoatNormalMap:_e,clearcoatRoughnessMap:Le,dispersion:A,iridescence:j,iridescenceMap:Ce,iridescenceThicknessMap:de,sheen:B,sheenColorMap:xe,sheenRoughnessMap:ye,specularMap:Re,specularColorMap:Fe,specularIntensityMap:Je,transmission:J,transmissionMap:W,thicknessMap:me,gradientMap:be,opaque:P.transparent===!1&&P.blending===fr&&P.alphaToCoverage===!1,alphaMap:Ie,alphaTest:X,alphaHash:z,combine:P.combine,mapUv:it&&R(P.map.channel),aoMapUv:xt&&R(P.aoMap.channel),lightMapUv:et&&R(P.lightMap.channel),bumpMapUv:$e&&R(P.bumpMap.channel),normalMapUv:Ve&&R(P.normalMap.channel),displacementMapUv:_t&&R(P.displacementMap.channel),emissiveMapUv:ze&&R(P.emissiveMap.channel),metalnessMapUv:nt&&R(P.metalnessMap.channel),roughnessMapUv:At&&R(P.roughnessMap.channel),anisotropyMapUv:q&&R(P.anisotropyMap.channel),clearcoatMapUv:ve&&R(P.clearcoatMap.channel),clearcoatNormalMapUv:_e&&R(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&R(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&R(P.iridescenceMap.channel),iridescenceThicknessMapUv:de&&R(P.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&R(P.sheenColorMap.channel),sheenRoughnessMapUv:ye&&R(P.sheenRoughnessMap.channel),specularMapUv:Re&&R(P.specularMap.channel),specularColorMapUv:Fe&&R(P.specularColorMap.channel),specularIntensityMapUv:Je&&R(P.specularIntensityMap.channel),transmissionMapUv:W&&R(P.transmissionMap.channel),thicknessMapUv:me&&R(P.thicknessMap.channel),alphaMapUv:Ie&&R(P.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(Ve||Et),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!he.attributes.uv&&(it||Ie),fog:!!ne,useFog:P.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:P.flatShading===!0&&P.wireframe===!1,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:ue,skinning:te.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:He,morphTextureStride:Be,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:qe,decodeVideoTexture:it&&P.map.isVideoTexture===!0&&St.getTransfer(P.map.colorSpace)===Ct,decodeVideoTextureEmissive:ze&&P.emissiveMap.isVideoTexture===!0&&St.getTransfer(P.emissiveMap.colorSpace)===Ct,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Ln,flipSided:P.side===hn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:Ue&&P.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&P.extensions.multiDraw===!0||We)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return ht.vertexUv1s=f.has(1),ht.vertexUv2s=f.has(2),ht.vertexUv3s=f.has(3),f.clear(),ht}function m(P){const S=[];if(P.shaderID?S.push(P.shaderID):(S.push(P.customVertexShaderID),S.push(P.customFragmentShaderID)),P.defines!==void 0)for(const H in P.defines)S.push(H),S.push(P.defines[H]);return P.isRawShaderMaterial===!1&&(N(S,P),I(S,P),S.push(i.outputColorSpace)),S.push(P.customProgramCacheKey),S.join()}function N(P,S){P.push(S.precision),P.push(S.outputColorSpace),P.push(S.envMapMode),P.push(S.envMapCubeUVHeight),P.push(S.mapUv),P.push(S.alphaMapUv),P.push(S.lightMapUv),P.push(S.aoMapUv),P.push(S.bumpMapUv),P.push(S.normalMapUv),P.push(S.displacementMapUv),P.push(S.emissiveMapUv),P.push(S.metalnessMapUv),P.push(S.roughnessMapUv),P.push(S.anisotropyMapUv),P.push(S.clearcoatMapUv),P.push(S.clearcoatNormalMapUv),P.push(S.clearcoatRoughnessMapUv),P.push(S.iridescenceMapUv),P.push(S.iridescenceThicknessMapUv),P.push(S.sheenColorMapUv),P.push(S.sheenRoughnessMapUv),P.push(S.specularMapUv),P.push(S.specularColorMapUv),P.push(S.specularIntensityMapUv),P.push(S.transmissionMapUv),P.push(S.thicknessMapUv),P.push(S.combine),P.push(S.fogExp2),P.push(S.sizeAttenuation),P.push(S.morphTargetsCount),P.push(S.morphAttributeCount),P.push(S.numDirLights),P.push(S.numPointLights),P.push(S.numSpotLights),P.push(S.numSpotLightMaps),P.push(S.numHemiLights),P.push(S.numRectAreaLights),P.push(S.numDirLightShadows),P.push(S.numPointLightShadows),P.push(S.numSpotLightShadows),P.push(S.numSpotLightShadowsWithMaps),P.push(S.numLightProbes),P.push(S.shadowMapType),P.push(S.toneMapping),P.push(S.numClippingPlanes),P.push(S.numClipIntersection),P.push(S.depthPacking)}function I(P,S){h.disableAll(),S.supportsVertexTextures&&h.enable(0),S.instancing&&h.enable(1),S.instancingColor&&h.enable(2),S.instancingMorph&&h.enable(3),S.matcap&&h.enable(4),S.envMap&&h.enable(5),S.normalMapObjectSpace&&h.enable(6),S.normalMapTangentSpace&&h.enable(7),S.clearcoat&&h.enable(8),S.iridescence&&h.enable(9),S.alphaTest&&h.enable(10),S.vertexColors&&h.enable(11),S.vertexAlphas&&h.enable(12),S.vertexUv1s&&h.enable(13),S.vertexUv2s&&h.enable(14),S.vertexUv3s&&h.enable(15),S.vertexTangents&&h.enable(16),S.anisotropy&&h.enable(17),S.alphaHash&&h.enable(18),S.batching&&h.enable(19),S.dispersion&&h.enable(20),S.batchingColor&&h.enable(21),S.gradientMap&&h.enable(22),P.push(h.mask),h.disableAll(),S.fog&&h.enable(0),S.useFog&&h.enable(1),S.flatShading&&h.enable(2),S.logarithmicDepthBuffer&&h.enable(3),S.reversedDepthBuffer&&h.enable(4),S.skinning&&h.enable(5),S.morphTargets&&h.enable(6),S.morphNormals&&h.enable(7),S.morphColors&&h.enable(8),S.premultipliedAlpha&&h.enable(9),S.shadowMapEnabled&&h.enable(10),S.doubleSided&&h.enable(11),S.flipSided&&h.enable(12),S.useDepthPacking&&h.enable(13),S.dithering&&h.enable(14),S.transmission&&h.enable(15),S.sheen&&h.enable(16),S.opaque&&h.enable(17),S.pointsUvs&&h.enable(18),S.decodeVideoTexture&&h.enable(19),S.decodeVideoTextureEmissive&&h.enable(20),S.alphaToCoverage&&h.enable(21),P.push(h.mask)}function L(P){const S=b[P.type];let H;if(S){const Y=Hn[S];H=Tg.clone(Y.uniforms)}else H=P.uniforms;return H}function O(P,S){let H;for(let Y=0,te=v.length;Y<te;Y++){const ne=v[Y];if(ne.cacheKey===S){H=ne,++H.usedTimes;break}}return H===void 0&&(H=new Qy(i,S,P,a),v.push(H)),H}function D(P){if(--P.usedTimes===0){const S=v.indexOf(P);v[S]=v[v.length-1],v.pop(),P.destroy()}}function G(P){p.remove(P)}function V(){p.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:L,acquireProgram:O,releaseProgram:D,releaseShaderCache:G,programs:v,dispose:V}}function rE(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let h=i.get(c);return h===void 0&&(h={},i.set(c,h)),h}function n(c){i.delete(c)}function o(c,h,p){i.get(c)[h]=p}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:o,dispose:a}}function sE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function su(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ou(){const i=[];let e=0;const t=[],n=[],o=[];function a(){e=0,t.length=0,n.length=0,o.length=0}function c(_,x,E,b,R,y){let m=i[e];return m===void 0?(m={id:_.id,object:_,geometry:x,material:E,groupOrder:b,renderOrder:_.renderOrder,z:R,group:y},i[e]=m):(m.id=_.id,m.object=_,m.geometry=x,m.material=E,m.groupOrder=b,m.renderOrder=_.renderOrder,m.z=R,m.group=y),e++,m}function h(_,x,E,b,R,y){const m=c(_,x,E,b,R,y);E.transmission>0?n.push(m):E.transparent===!0?o.push(m):t.push(m)}function p(_,x,E,b,R,y){const m=c(_,x,E,b,R,y);E.transmission>0?n.unshift(m):E.transparent===!0?o.unshift(m):t.unshift(m)}function f(_,x){t.length>1&&t.sort(_||sE),n.length>1&&n.sort(x||su),o.length>1&&o.sort(x||su)}function v(){for(let _=e,x=i.length;_<x;_++){const E=i[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:n,transparent:o,init:a,push:h,unshift:p,finish:v,sort:f}}function oE(){let i=new WeakMap;function e(n,o){const a=i.get(n);let c;return a===void 0?(c=new ou,i.set(n,[c])):o>=a.length?(c=new ou,a.push(c)):c=a[o],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function aE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ee,color:new pt};break;case"SpotLight":t={position:new ee,direction:new ee,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return i[e.id]=t,t}}}function lE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let cE=0;function uE(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function hE(i){const e=new aE,t=lE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new ee);const o=new ee,a=new zt,c=new zt;function h(f){let v=0,_=0,x=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let E=0,b=0,R=0,y=0,m=0,N=0,I=0,L=0,O=0,D=0,G=0;f.sort(uE);for(let P=0,S=f.length;P<S;P++){const H=f[P],Y=H.color,te=H.intensity,ne=H.distance,he=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)v+=Y.r*te,_+=Y.g*te,x+=Y.b*te;else if(H.isLightProbe){for(let ae=0;ae<9;ae++)n.probe[ae].addScaledVector(H.sh.coefficients[ae],te);G++}else if(H.isDirectionalLight){const ae=e.get(H);if(ae.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Ee=H.shadow,oe=t.get(H);oe.shadowIntensity=Ee.intensity,oe.shadowBias=Ee.bias,oe.shadowNormalBias=Ee.normalBias,oe.shadowRadius=Ee.radius,oe.shadowMapSize=Ee.mapSize,n.directionalShadow[E]=oe,n.directionalShadowMap[E]=he,n.directionalShadowMatrix[E]=H.shadow.matrix,N++}n.directional[E]=ae,E++}else if(H.isSpotLight){const ae=e.get(H);ae.position.setFromMatrixPosition(H.matrixWorld),ae.color.copy(Y).multiplyScalar(te),ae.distance=ne,ae.coneCos=Math.cos(H.angle),ae.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ae.decay=H.decay,n.spot[R]=ae;const Ee=H.shadow;if(H.map&&(n.spotLightMap[O]=H.map,O++,Ee.updateMatrices(H),H.castShadow&&D++),n.spotLightMatrix[R]=Ee.matrix,H.castShadow){const oe=t.get(H);oe.shadowIntensity=Ee.intensity,oe.shadowBias=Ee.bias,oe.shadowNormalBias=Ee.normalBias,oe.shadowRadius=Ee.radius,oe.shadowMapSize=Ee.mapSize,n.spotShadow[R]=oe,n.spotShadowMap[R]=he,L++}R++}else if(H.isRectAreaLight){const ae=e.get(H);ae.color.copy(Y).multiplyScalar(te),ae.halfWidth.set(H.width*.5,0,0),ae.halfHeight.set(0,H.height*.5,0),n.rectArea[y]=ae,y++}else if(H.isPointLight){const ae=e.get(H);if(ae.color.copy(H.color).multiplyScalar(H.intensity),ae.distance=H.distance,ae.decay=H.decay,H.castShadow){const Ee=H.shadow,oe=t.get(H);oe.shadowIntensity=Ee.intensity,oe.shadowBias=Ee.bias,oe.shadowNormalBias=Ee.normalBias,oe.shadowRadius=Ee.radius,oe.shadowMapSize=Ee.mapSize,oe.shadowCameraNear=Ee.camera.near,oe.shadowCameraFar=Ee.camera.far,n.pointShadow[b]=oe,n.pointShadowMap[b]=he,n.pointShadowMatrix[b]=H.shadow.matrix,I++}n.point[b]=ae,b++}else if(H.isHemisphereLight){const ae=e.get(H);ae.skyColor.copy(H.color).multiplyScalar(te),ae.groundColor.copy(H.groundColor).multiplyScalar(te),n.hemi[m]=ae,m++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Oe.LTC_FLOAT_1,n.rectAreaLTC2=Oe.LTC_FLOAT_2):(n.rectAreaLTC1=Oe.LTC_HALF_1,n.rectAreaLTC2=Oe.LTC_HALF_2)),n.ambient[0]=v,n.ambient[1]=_,n.ambient[2]=x;const V=n.hash;(V.directionalLength!==E||V.pointLength!==b||V.spotLength!==R||V.rectAreaLength!==y||V.hemiLength!==m||V.numDirectionalShadows!==N||V.numPointShadows!==I||V.numSpotShadows!==L||V.numSpotMaps!==O||V.numLightProbes!==G)&&(n.directional.length=E,n.spot.length=R,n.rectArea.length=y,n.point.length=b,n.hemi.length=m,n.directionalShadow.length=N,n.directionalShadowMap.length=N,n.pointShadow.length=I,n.pointShadowMap.length=I,n.spotShadow.length=L,n.spotShadowMap.length=L,n.directionalShadowMatrix.length=N,n.pointShadowMatrix.length=I,n.spotLightMatrix.length=L+O-D,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=G,V.directionalLength=E,V.pointLength=b,V.spotLength=R,V.rectAreaLength=y,V.hemiLength=m,V.numDirectionalShadows=N,V.numPointShadows=I,V.numSpotShadows=L,V.numSpotMaps=O,V.numLightProbes=G,n.version=cE++)}function p(f,v){let _=0,x=0,E=0,b=0,R=0;const y=v.matrixWorldInverse;for(let m=0,N=f.length;m<N;m++){const I=f[m];if(I.isDirectionalLight){const L=n.directional[_];L.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(y),_++}else if(I.isSpotLight){const L=n.spot[E];L.position.setFromMatrixPosition(I.matrixWorld),L.position.applyMatrix4(y),L.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(y),E++}else if(I.isRectAreaLight){const L=n.rectArea[b];L.position.setFromMatrixPosition(I.matrixWorld),L.position.applyMatrix4(y),c.identity(),a.copy(I.matrixWorld),a.premultiply(y),c.extractRotation(a),L.halfWidth.set(I.width*.5,0,0),L.halfHeight.set(0,I.height*.5,0),L.halfWidth.applyMatrix4(c),L.halfHeight.applyMatrix4(c),b++}else if(I.isPointLight){const L=n.point[x];L.position.setFromMatrixPosition(I.matrixWorld),L.position.applyMatrix4(y),x++}else if(I.isHemisphereLight){const L=n.hemi[R];L.direction.setFromMatrixPosition(I.matrixWorld),L.direction.transformDirection(y),R++}}}return{setup:h,setupView:p,state:n}}function au(i){const e=new hE(i),t=[],n=[];function o(v){f.camera=v,t.length=0,n.length=0}function a(v){t.push(v)}function c(v){n.push(v)}function h(){e.setup(t)}function p(v){e.setupView(t,v)}const f={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:f,setupLights:h,setupLightsView:p,pushLight:a,pushShadow:c}}function fE(i){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let h;return c===void 0?(h=new au(i),e.set(o,[h])):a>=c.length?(h=new au(i),c.push(h)):h=c[a],h}function n(){e=new WeakMap}return{get:t,dispose:n}}const dE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pE=`uniform sampler2D shadow_pass;
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
}`;function mE(i,e,t){let n=new ul;const o=new st,a=new st,c=new Bt,h=new Ng({depthPacking:q_}),p=new Og,f={},v=t.maxTextureSize,_={[_i]:hn,[hn]:_i,[Ln]:Ln},x=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:dE,fragmentShader:pE}),E=x.clone();E.defines.HORIZONTAL_PASS=1;const b=new Nn;b.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Tn(b,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_u;let m=this.type;this.render=function(D,G,V){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;const P=i.getRenderTarget(),S=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(pi),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const te=m!==ei&&this.type===ei,ne=m===ei&&this.type!==ei;for(let he=0,ae=D.length;he<ae;he++){const Ee=D[he],oe=Ee.shadow;if(oe===void 0){console.warn("THREE.WebGLShadowMap:",Ee,"has no shadow.");continue}if(oe.autoUpdate===!1&&oe.needsUpdate===!1)continue;o.copy(oe.mapSize);const fe=oe.getFrameExtents();if(o.multiply(fe),a.copy(oe.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(a.x=Math.floor(v/fe.x),o.x=a.x*fe.x,oe.mapSize.x=a.x),o.y>v&&(a.y=Math.floor(v/fe.y),o.y=a.y*fe.y,oe.mapSize.y=a.y)),oe.map===null||te===!0||ne===!0){const He=this.type!==ei?{minFilter:Un,magFilter:Un}:{};oe.map!==null&&oe.map.dispose(),oe.map=new Hi(o.x,o.y,He),oe.map.texture.name=Ee.name+".shadowMap",oe.camera.updateProjectionMatrix()}i.setRenderTarget(oe.map),i.clear();const De=oe.getViewportCount();for(let He=0;He<De;He++){const Be=oe.getViewport(He);c.set(a.x*Be.x,a.y*Be.y,a.x*Be.z,a.y*Be.w),Y.viewport(c),oe.updateMatrices(Ee,He),n=oe.getFrustum(),L(G,V,oe.camera,Ee,this.type)}oe.isPointLightShadow!==!0&&this.type===ei&&N(oe,V),oe.needsUpdate=!1}m=this.type,y.needsUpdate=!1,i.setRenderTarget(P,S,H)};function N(D,G){const V=e.update(R);x.defines.VSM_SAMPLES!==D.blurSamples&&(x.defines.VSM_SAMPLES=D.blurSamples,E.defines.VSM_SAMPLES=D.blurSamples,x.needsUpdate=!0,E.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Hi(o.x,o.y)),x.uniforms.shadow_pass.value=D.map.texture,x.uniforms.resolution.value=D.mapSize,x.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(G,null,V,x,R,null),E.uniforms.shadow_pass.value=D.mapPass.texture,E.uniforms.resolution.value=D.mapSize,E.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(G,null,V,E,R,null)}function I(D,G,V,P){let S=null;const H=V.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(H!==void 0)S=H;else if(S=V.isPointLight===!0?p:h,i.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0||G.map&&G.alphaTest>0||G.alphaToCoverage===!0){const Y=S.uuid,te=G.uuid;let ne=f[Y];ne===void 0&&(ne={},f[Y]=ne);let he=ne[te];he===void 0&&(he=S.clone(),ne[te]=he,G.addEventListener("dispose",O)),S=he}if(S.visible=G.visible,S.wireframe=G.wireframe,P===ei?S.side=G.shadowSide!==null?G.shadowSide:G.side:S.side=G.shadowSide!==null?G.shadowSide:_[G.side],S.alphaMap=G.alphaMap,S.alphaTest=G.alphaToCoverage===!0?.5:G.alphaTest,S.map=G.map,S.clipShadows=G.clipShadows,S.clippingPlanes=G.clippingPlanes,S.clipIntersection=G.clipIntersection,S.displacementMap=G.displacementMap,S.displacementScale=G.displacementScale,S.displacementBias=G.displacementBias,S.wireframeLinewidth=G.wireframeLinewidth,S.linewidth=G.linewidth,V.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const Y=i.properties.get(S);Y.light=V}return S}function L(D,G,V,P,S){if(D.visible===!1)return;if(D.layers.test(G.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&S===ei)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,D.matrixWorld);const te=e.update(D),ne=D.material;if(Array.isArray(ne)){const he=te.groups;for(let ae=0,Ee=he.length;ae<Ee;ae++){const oe=he[ae],fe=ne[oe.materialIndex];if(fe&&fe.visible){const De=I(D,fe,P,S);D.onBeforeShadow(i,D,G,V,te,De,oe),i.renderBufferDirect(V,null,te,De,D,oe),D.onAfterShadow(i,D,G,V,te,De,oe)}}}else if(ne.visible){const he=I(D,ne,P,S);D.onBeforeShadow(i,D,G,V,te,he,null),i.renderBufferDirect(V,null,te,he,D,null),D.onAfterShadow(i,D,G,V,te,he,null)}}const Y=D.children;for(let te=0,ne=Y.length;te<ne;te++)L(Y[te],G,V,P,S)}function O(D){D.target.removeEventListener("dispose",O);for(const V in f){const P=f[V],S=D.target.uuid;S in P&&(P[S].dispose(),delete P[S])}}}const _E={[ha]:fa,[da]:_a,[pa]:ga,[pr]:ma,[fa]:ha,[_a]:da,[ga]:pa,[ma]:pr};function gE(i,e){function t(){let W=!1;const me=new Bt;let be=null;const Ie=new Bt(0,0,0,0);return{setMask:function(X){be!==X&&!W&&(i.colorMask(X,X,X,X),be=X)},setLocked:function(X){W=X},setClear:function(X,z,Ue,qe,ht){ht===!0&&(X*=qe,z*=qe,Ue*=qe),me.set(X,z,Ue,qe),Ie.equals(me)===!1&&(i.clearColor(X,z,Ue,qe),Ie.copy(me))},reset:function(){W=!1,be=null,Ie.set(-1,0,0,0)}}}function n(){let W=!1,me=!1,be=null,Ie=null,X=null;return{setReversed:function(z){if(me!==z){const Ue=e.get("EXT_clip_control");z?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),me=z;const qe=X;X=null,this.setClear(qe)}},getReversed:function(){return me},setTest:function(z){z?pe(i.DEPTH_TEST):ue(i.DEPTH_TEST)},setMask:function(z){be!==z&&!W&&(i.depthMask(z),be=z)},setFunc:function(z){if(me&&(z=_E[z]),Ie!==z){switch(z){case ha:i.depthFunc(i.NEVER);break;case fa:i.depthFunc(i.ALWAYS);break;case da:i.depthFunc(i.LESS);break;case pr:i.depthFunc(i.LEQUAL);break;case pa:i.depthFunc(i.EQUAL);break;case ma:i.depthFunc(i.GEQUAL);break;case _a:i.depthFunc(i.GREATER);break;case ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ie=z}},setLocked:function(z){W=z},setClear:function(z){X!==z&&(me&&(z=1-z),i.clearDepth(z),X=z)},reset:function(){W=!1,be=null,Ie=null,X=null,me=!1}}}function o(){let W=!1,me=null,be=null,Ie=null,X=null,z=null,Ue=null,qe=null,ht=null;return{setTest:function(rt){W||(rt?pe(i.STENCIL_TEST):ue(i.STENCIL_TEST))},setMask:function(rt){me!==rt&&!W&&(i.stencilMask(rt),me=rt)},setFunc:function(rt,Qt,It){(be!==rt||Ie!==Qt||X!==It)&&(i.stencilFunc(rt,Qt,It),be=rt,Ie=Qt,X=It)},setOp:function(rt,Qt,It){(z!==rt||Ue!==Qt||qe!==It)&&(i.stencilOp(rt,Qt,It),z=rt,Ue=Qt,qe=It)},setLocked:function(rt){W=rt},setClear:function(rt){ht!==rt&&(i.clearStencil(rt),ht=rt)},reset:function(){W=!1,me=null,be=null,Ie=null,X=null,z=null,Ue=null,qe=null,ht=null}}}const a=new t,c=new n,h=new o,p=new WeakMap,f=new WeakMap;let v={},_={},x=new WeakMap,E=[],b=null,R=!1,y=null,m=null,N=null,I=null,L=null,O=null,D=null,G=new pt(0,0,0),V=0,P=!1,S=null,H=null,Y=null,te=null,ne=null;const he=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,Ee=0;const oe=i.getParameter(i.VERSION);oe.indexOf("WebGL")!==-1?(Ee=parseFloat(/^WebGL (\d)/.exec(oe)[1]),ae=Ee>=1):oe.indexOf("OpenGL ES")!==-1&&(Ee=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),ae=Ee>=2);let fe=null,De={};const He=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),Ye=new Bt().fromArray(He),Ke=new Bt().fromArray(Be);function Ze(W,me,be,Ie){const X=new Uint8Array(4),z=i.createTexture();i.bindTexture(W,z),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ue=0;Ue<be;Ue++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,X):i.texImage2D(me+Ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,X);return z}const se={};se[i.TEXTURE_2D]=Ze(i.TEXTURE_2D,i.TEXTURE_2D,1),se[i.TEXTURE_CUBE_MAP]=Ze(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[i.TEXTURE_2D_ARRAY]=Ze(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),se[i.TEXTURE_3D]=Ze(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),h.setClear(0),pe(i.DEPTH_TEST),c.setFunc(pr),$e(!1),Ve(sc),pe(i.CULL_FACE),xt(pi);function pe(W){v[W]!==!0&&(i.enable(W),v[W]=!0)}function ue(W){v[W]!==!1&&(i.disable(W),v[W]=!1)}function we(W,me){return _[W]!==me?(i.bindFramebuffer(W,me),_[W]=me,W===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=me),W===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=me),!0):!1}function We(W,me){let be=E,Ie=!1;if(W){be=x.get(me),be===void 0&&(be=[],x.set(me,be));const X=W.textures;if(be.length!==X.length||be[0]!==i.COLOR_ATTACHMENT0){for(let z=0,Ue=X.length;z<Ue;z++)be[z]=i.COLOR_ATTACHMENT0+z;be.length=X.length,Ie=!0}}else be[0]!==i.BACK&&(be[0]=i.BACK,Ie=!0);Ie&&i.drawBuffers(be)}function it(W){return b!==W?(i.useProgram(W),b=W,!0):!1}const vt={[Ui]:i.FUNC_ADD,[x_]:i.FUNC_SUBTRACT,[y_]:i.FUNC_REVERSE_SUBTRACT};vt[E_]=i.MIN,vt[S_]=i.MAX;const k={[M_]:i.ZERO,[T_]:i.ONE,[w_]:i.SRC_COLOR,[ca]:i.SRC_ALPHA,[D_]:i.SRC_ALPHA_SATURATE,[C_]:i.DST_COLOR,[A_]:i.DST_ALPHA,[b_]:i.ONE_MINUS_SRC_COLOR,[ua]:i.ONE_MINUS_SRC_ALPHA,[P_]:i.ONE_MINUS_DST_COLOR,[R_]:i.ONE_MINUS_DST_ALPHA,[L_]:i.CONSTANT_COLOR,[F_]:i.ONE_MINUS_CONSTANT_COLOR,[I_]:i.CONSTANT_ALPHA,[U_]:i.ONE_MINUS_CONSTANT_ALPHA};function xt(W,me,be,Ie,X,z,Ue,qe,ht,rt){if(W===pi){R===!0&&(ue(i.BLEND),R=!1);return}if(R===!1&&(pe(i.BLEND),R=!0),W!==v_){if(W!==y||rt!==P){if((m!==Ui||L!==Ui)&&(i.blendEquation(i.FUNC_ADD),m=Ui,L=Ui),rt)switch(W){case fr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oc:i.blendFunc(i.ONE,i.ONE);break;case ac:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case fr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ac:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}N=null,I=null,O=null,D=null,G.set(0,0,0),V=0,y=W,P=rt}return}X=X||me,z=z||be,Ue=Ue||Ie,(me!==m||X!==L)&&(i.blendEquationSeparate(vt[me],vt[X]),m=me,L=X),(be!==N||Ie!==I||z!==O||Ue!==D)&&(i.blendFuncSeparate(k[be],k[Ie],k[z],k[Ue]),N=be,I=Ie,O=z,D=Ue),(qe.equals(G)===!1||ht!==V)&&(i.blendColor(qe.r,qe.g,qe.b,ht),G.copy(qe),V=ht),y=W,P=!1}function et(W,me){W.side===Ln?ue(i.CULL_FACE):pe(i.CULL_FACE);let be=W.side===hn;me&&(be=!be),$e(be),W.blending===fr&&W.transparent===!1?xt(pi):xt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),a.setMask(W.colorWrite);const Ie=W.stencilWrite;h.setTest(Ie),Ie&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),ze(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function $e(W){S!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),S=W)}function Ve(W){W!==m_?(pe(i.CULL_FACE),W!==H&&(W===sc?i.cullFace(i.BACK):W===__?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ue(i.CULL_FACE),H=W}function _t(W){W!==Y&&(ae&&i.lineWidth(W),Y=W)}function ze(W,me,be){W?(pe(i.POLYGON_OFFSET_FILL),(te!==me||ne!==be)&&(i.polygonOffset(me,be),te=me,ne=be)):ue(i.POLYGON_OFFSET_FILL)}function nt(W){W?pe(i.SCISSOR_TEST):ue(i.SCISSOR_TEST)}function At(W){W===void 0&&(W=i.TEXTURE0+he-1),fe!==W&&(i.activeTexture(W),fe=W)}function Et(W,me,be){be===void 0&&(fe===null?be=i.TEXTURE0+he-1:be=fe);let Ie=De[be];Ie===void 0&&(Ie={type:void 0,texture:void 0},De[be]=Ie),(Ie.type!==W||Ie.texture!==me)&&(fe!==be&&(i.activeTexture(be),fe=be),i.bindTexture(W,me||se[W]),Ie.type=W,Ie.texture=me)}function U(){const W=De[fe];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function A(){try{i.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function j(){try{i.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function B(){try{i.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function J(){try{i.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ve(){try{i.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _e(){try{i.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Le(){try{i.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ce(){try{i.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function de(){try{i.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function xe(W){Ye.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Ye.copy(W))}function ye(W){Ke.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),Ke.copy(W))}function Re(W,me){let be=f.get(me);be===void 0&&(be=new WeakMap,f.set(me,be));let Ie=be.get(W);Ie===void 0&&(Ie=i.getUniformBlockIndex(me,W.name),be.set(W,Ie))}function Fe(W,me){const Ie=f.get(me).get(W);p.get(me)!==Ie&&(i.uniformBlockBinding(me,Ie,W.__bindingPointIndex),p.set(me,Ie))}function Je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),v={},fe=null,De={},_={},x=new WeakMap,E=[],b=null,R=!1,y=null,m=null,N=null,I=null,L=null,O=null,D=null,G=new pt(0,0,0),V=0,P=!1,S=null,H=null,Y=null,te=null,ne=null,Ye.set(0,0,i.canvas.width,i.canvas.height),Ke.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),h.reset()}return{buffers:{color:a,depth:c,stencil:h},enable:pe,disable:ue,bindFramebuffer:we,drawBuffers:We,useProgram:it,setBlending:xt,setMaterial:et,setFlipSided:$e,setCullFace:Ve,setLineWidth:_t,setPolygonOffset:ze,setScissorTest:nt,activeTexture:At,bindTexture:Et,unbindTexture:U,compressedTexImage2D:A,compressedTexImage3D:j,texImage2D:Ce,texImage3D:de,updateUBOMapping:Re,uniformBlockBinding:Fe,texStorage2D:_e,texStorage3D:Le,texSubImage2D:B,texSubImage3D:J,compressedTexSubImage2D:q,compressedTexSubImage3D:ve,scissor:xe,viewport:ye,reset:Je}}function vE(i,e,t,n,o,a,c){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new st,v=new WeakMap;let _;const x=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,A){return E?new OffscreenCanvas(U,A):Ys("canvas")}function R(U,A,j){let B=1;const J=Et(U);if((J.width>j||J.height>j)&&(B=j/Math.max(J.width,J.height)),B<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const q=Math.floor(B*J.width),ve=Math.floor(B*J.height);_===void 0&&(_=b(q,ve));const _e=A?b(q,ve):_;return _e.width=q,_e.height=ve,_e.getContext("2d").drawImage(U,0,0,q,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+ve+")."),_e}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),U;return U}function y(U){return U.generateMipmaps}function m(U){i.generateMipmap(U)}function N(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function I(U,A,j,B,J=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let q=A;if(A===i.RED&&(j===i.FLOAT&&(q=i.R32F),j===i.HALF_FLOAT&&(q=i.R16F),j===i.UNSIGNED_BYTE&&(q=i.R8)),A===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(q=i.R8UI),j===i.UNSIGNED_SHORT&&(q=i.R16UI),j===i.UNSIGNED_INT&&(q=i.R32UI),j===i.BYTE&&(q=i.R8I),j===i.SHORT&&(q=i.R16I),j===i.INT&&(q=i.R32I)),A===i.RG&&(j===i.FLOAT&&(q=i.RG32F),j===i.HALF_FLOAT&&(q=i.RG16F),j===i.UNSIGNED_BYTE&&(q=i.RG8)),A===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(q=i.RG8UI),j===i.UNSIGNED_SHORT&&(q=i.RG16UI),j===i.UNSIGNED_INT&&(q=i.RG32UI),j===i.BYTE&&(q=i.RG8I),j===i.SHORT&&(q=i.RG16I),j===i.INT&&(q=i.RG32I)),A===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(q=i.RGB8UI),j===i.UNSIGNED_SHORT&&(q=i.RGB16UI),j===i.UNSIGNED_INT&&(q=i.RGB32UI),j===i.BYTE&&(q=i.RGB8I),j===i.SHORT&&(q=i.RGB16I),j===i.INT&&(q=i.RGB32I)),A===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),j===i.UNSIGNED_INT&&(q=i.RGBA32UI),j===i.BYTE&&(q=i.RGBA8I),j===i.SHORT&&(q=i.RGBA16I),j===i.INT&&(q=i.RGBA32I)),A===i.RGB&&(j===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),j===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),A===i.RGBA){const ve=J?qs:St.getTransfer(B);j===i.FLOAT&&(q=i.RGBA32F),j===i.HALF_FLOAT&&(q=i.RGBA16F),j===i.UNSIGNED_BYTE&&(q=ve===Ct?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function L(U,A){let j;return U?A===null||A===Bi||A===Or?j=i.DEPTH24_STENCIL8:A===ti?j=i.DEPTH32F_STENCIL8:A===Nr&&(j=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Bi||A===Or?j=i.DEPTH_COMPONENT24:A===ti?j=i.DEPTH_COMPONENT32F:A===Nr&&(j=i.DEPTH_COMPONENT16),j}function O(U,A){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Un&&U.minFilter!==Gn?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function D(U){const A=U.target;A.removeEventListener("dispose",D),V(A),A.isVideoTexture&&v.delete(A)}function G(U){const A=U.target;A.removeEventListener("dispose",G),S(A)}function V(U){const A=n.get(U);if(A.__webglInit===void 0)return;const j=U.source,B=x.get(j);if(B){const J=B[A.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(U),Object.keys(B).length===0&&x.delete(j)}n.remove(U)}function P(U){const A=n.get(U);i.deleteTexture(A.__webglTexture);const j=U.source,B=x.get(j);delete B[A.__cacheKey],c.memory.textures--}function S(U){const A=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(A.__webglFramebuffer[B]))for(let J=0;J<A.__webglFramebuffer[B].length;J++)i.deleteFramebuffer(A.__webglFramebuffer[B][J]);else i.deleteFramebuffer(A.__webglFramebuffer[B]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[B])}else{if(Array.isArray(A.__webglFramebuffer))for(let B=0;B<A.__webglFramebuffer.length;B++)i.deleteFramebuffer(A.__webglFramebuffer[B]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let B=0;B<A.__webglColorRenderbuffer.length;B++)A.__webglColorRenderbuffer[B]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[B]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const j=U.textures;for(let B=0,J=j.length;B<J;B++){const q=n.get(j[B]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),c.memory.textures--),n.remove(j[B])}n.remove(U)}let H=0;function Y(){H=0}function te(){const U=H;return U>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),H+=1,U}function ne(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function he(U,A){const j=n.get(U);if(U.isVideoTexture&&nt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&j.__version!==U.version){const B=U.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(j,U,A);return}}else U.isExternalTexture&&(j.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+A)}function ae(U,A){const j=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&j.__version!==U.version){se(j,U,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+A)}function Ee(U,A){const j=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&j.__version!==U.version){se(j,U,A);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+A)}function oe(U,A){const j=n.get(U);if(U.version>0&&j.__version!==U.version){pe(j,U,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+A)}const fe={[ya]:i.REPEAT,[Oi]:i.CLAMP_TO_EDGE,[Ea]:i.MIRRORED_REPEAT},De={[Un]:i.NEAREST,[X_]:i.NEAREST_MIPMAP_NEAREST,[fs]:i.NEAREST_MIPMAP_LINEAR,[Gn]:i.LINEAR,[yo]:i.LINEAR_MIPMAP_NEAREST,[ki]:i.LINEAR_MIPMAP_LINEAR},He={[Y_]:i.NEVER,[tg]:i.ALWAYS,[K_]:i.LESS,[Ru]:i.LEQUAL,[Z_]:i.EQUAL,[eg]:i.GEQUAL,[J_]:i.GREATER,[Q_]:i.NOTEQUAL};function Be(U,A){if(A.type===ti&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Gn||A.magFilter===yo||A.magFilter===fs||A.magFilter===ki||A.minFilter===Gn||A.minFilter===yo||A.minFilter===fs||A.minFilter===ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,fe[A.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,fe[A.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,fe[A.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,De[A.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,De[A.minFilter]),A.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,He[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Un||A.minFilter!==fs&&A.minFilter!==ki||A.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Ye(U,A){let j=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",D));const B=A.source;let J=x.get(B);J===void 0&&(J={},x.set(B,J));const q=ne(A);if(q!==U.__cacheKey){J[q]===void 0&&(J[q]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,j=!0),J[q].usedTimes++;const ve=J[U.__cacheKey];ve!==void 0&&(J[U.__cacheKey].usedTimes--,ve.usedTimes===0&&P(A)),U.__cacheKey=q,U.__webglTexture=J[q].texture}return j}function Ke(U,A,j){return Math.floor(Math.floor(U/j)/A)}function Ze(U,A,j,B){const q=U.updateRanges;if(q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,j,B,A.data);else{q.sort((de,xe)=>de.start-xe.start);let ve=0;for(let de=1;de<q.length;de++){const xe=q[ve],ye=q[de],Re=xe.start+xe.count,Fe=Ke(ye.start,A.width,4),Je=Ke(xe.start,A.width,4);ye.start<=Re+1&&Fe===Je&&Ke(ye.start+ye.count-1,A.width,4)===Fe?xe.count=Math.max(xe.count,ye.start+ye.count-xe.start):(++ve,q[ve]=ye)}q.length=ve+1;const _e=i.getParameter(i.UNPACK_ROW_LENGTH),Le=i.getParameter(i.UNPACK_SKIP_PIXELS),Ce=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let de=0,xe=q.length;de<xe;de++){const ye=q[de],Re=Math.floor(ye.start/4),Fe=Math.ceil(ye.count/4),Je=Re%A.width,W=Math.floor(Re/A.width),me=Fe,be=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Je),i.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,Je,W,me,be,j,B,A.data)}U.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,_e),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Le),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ce)}}function se(U,A,j){let B=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(B=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(B=i.TEXTURE_3D);const J=Ye(U,A),q=A.source;t.bindTexture(B,U.__webglTexture,i.TEXTURE0+j);const ve=n.get(q);if(q.version!==ve.__version||J===!0){t.activeTexture(i.TEXTURE0+j);const _e=St.getPrimaries(St.workingColorSpace),Le=A.colorSpace===di?null:St.getPrimaries(A.colorSpace),Ce=A.colorSpace===di||_e===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let de=R(A.image,!1,o.maxTextureSize);de=At(A,de);const xe=a.convert(A.format,A.colorSpace),ye=a.convert(A.type);let Re=I(A.internalFormat,xe,ye,A.colorSpace,A.isVideoTexture);Be(B,A);let Fe;const Je=A.mipmaps,W=A.isVideoTexture!==!0,me=ve.__version===void 0||J===!0,be=q.dataReady,Ie=O(A,de);if(A.isDepthTexture)Re=L(A.format===Br,A.type),me&&(W?t.texStorage2D(i.TEXTURE_2D,1,Re,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Re,de.width,de.height,0,xe,ye,null));else if(A.isDataTexture)if(Je.length>0){W&&me&&t.texStorage2D(i.TEXTURE_2D,Ie,Re,Je[0].width,Je[0].height);for(let X=0,z=Je.length;X<z;X++)Fe=Je[X],W?be&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,Fe.width,Fe.height,xe,ye,Fe.data):t.texImage2D(i.TEXTURE_2D,X,Re,Fe.width,Fe.height,0,xe,ye,Fe.data);A.generateMipmaps=!1}else W?(me&&t.texStorage2D(i.TEXTURE_2D,Ie,Re,de.width,de.height),be&&Ze(A,de,xe,ye)):t.texImage2D(i.TEXTURE_2D,0,Re,de.width,de.height,0,xe,ye,de.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){W&&me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Re,Je[0].width,Je[0].height,de.depth);for(let X=0,z=Je.length;X<z;X++)if(Fe=Je[X],A.format!==In)if(xe!==null)if(W){if(be)if(A.layerUpdates.size>0){const Ue=Oc(Fe.width,Fe.height,A.format,A.type);for(const qe of A.layerUpdates){const ht=Fe.data.subarray(qe*Ue/Fe.data.BYTES_PER_ELEMENT,(qe+1)*Ue/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,qe,Fe.width,Fe.height,1,xe,ht)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Fe.width,Fe.height,de.depth,xe,Fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Re,Fe.width,Fe.height,de.depth,0,Fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?be&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Fe.width,Fe.height,de.depth,xe,ye,Fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,Re,Fe.width,Fe.height,de.depth,0,xe,ye,Fe.data)}else{W&&me&&t.texStorage2D(i.TEXTURE_2D,Ie,Re,Je[0].width,Je[0].height);for(let X=0,z=Je.length;X<z;X++)Fe=Je[X],A.format!==In?xe!==null?W?be&&t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,Fe.width,Fe.height,xe,Fe.data):t.compressedTexImage2D(i.TEXTURE_2D,X,Re,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?be&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,Fe.width,Fe.height,xe,ye,Fe.data):t.texImage2D(i.TEXTURE_2D,X,Re,Fe.width,Fe.height,0,xe,ye,Fe.data)}else if(A.isDataArrayTexture)if(W){if(me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Re,de.width,de.height,de.depth),be)if(A.layerUpdates.size>0){const X=Oc(de.width,de.height,A.format,A.type);for(const z of A.layerUpdates){const Ue=de.data.subarray(z*X/de.data.BYTES_PER_ELEMENT,(z+1)*X/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,z,de.width,de.height,1,xe,ye,Ue)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,xe,ye,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,de.width,de.height,de.depth,0,xe,ye,de.data);else if(A.isData3DTexture)W?(me&&t.texStorage3D(i.TEXTURE_3D,Ie,Re,de.width,de.height,de.depth),be&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,xe,ye,de.data)):t.texImage3D(i.TEXTURE_3D,0,Re,de.width,de.height,de.depth,0,xe,ye,de.data);else if(A.isFramebufferTexture){if(me)if(W)t.texStorage2D(i.TEXTURE_2D,Ie,Re,de.width,de.height);else{let X=de.width,z=de.height;for(let Ue=0;Ue<Ie;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,Re,X,z,0,xe,ye,null),X>>=1,z>>=1}}else if(Je.length>0){if(W&&me){const X=Et(Je[0]);t.texStorage2D(i.TEXTURE_2D,Ie,Re,X.width,X.height)}for(let X=0,z=Je.length;X<z;X++)Fe=Je[X],W?be&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,xe,ye,Fe):t.texImage2D(i.TEXTURE_2D,X,Re,xe,ye,Fe);A.generateMipmaps=!1}else if(W){if(me){const X=Et(de);t.texStorage2D(i.TEXTURE_2D,Ie,Re,X.width,X.height)}be&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,ye,de)}else t.texImage2D(i.TEXTURE_2D,0,Re,xe,ye,de);y(A)&&m(B),ve.__version=q.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function pe(U,A,j){if(A.image.length!==6)return;const B=Ye(U,A),J=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+j);const q=n.get(J);if(J.version!==q.__version||B===!0){t.activeTexture(i.TEXTURE0+j);const ve=St.getPrimaries(St.workingColorSpace),_e=A.colorSpace===di?null:St.getPrimaries(A.colorSpace),Le=A.colorSpace===di||ve===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Ce=A.isCompressedTexture||A.image[0].isCompressedTexture,de=A.image[0]&&A.image[0].isDataTexture,xe=[];for(let z=0;z<6;z++)!Ce&&!de?xe[z]=R(A.image[z],!0,o.maxCubemapSize):xe[z]=de?A.image[z].image:A.image[z],xe[z]=At(A,xe[z]);const ye=xe[0],Re=a.convert(A.format,A.colorSpace),Fe=a.convert(A.type),Je=I(A.internalFormat,Re,Fe,A.colorSpace),W=A.isVideoTexture!==!0,me=q.__version===void 0||B===!0,be=J.dataReady;let Ie=O(A,ye);Be(i.TEXTURE_CUBE_MAP,A);let X;if(Ce){W&&me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,Je,ye.width,ye.height);for(let z=0;z<6;z++){X=xe[z].mipmaps;for(let Ue=0;Ue<X.length;Ue++){const qe=X[Ue];A.format!==In?Re!==null?W?be&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ue,0,0,qe.width,qe.height,Re,qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ue,Je,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ue,0,0,qe.width,qe.height,Re,Fe,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ue,Je,qe.width,qe.height,0,Re,Fe,qe.data)}}}else{if(X=A.mipmaps,W&&me){X.length>0&&Ie++;const z=Et(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,Je,z.width,z.height)}for(let z=0;z<6;z++)if(de){W?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,xe[z].width,xe[z].height,Re,Fe,xe[z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,Je,xe[z].width,xe[z].height,0,Re,Fe,xe[z].data);for(let Ue=0;Ue<X.length;Ue++){const ht=X[Ue].image[z].image;W?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ue+1,0,0,ht.width,ht.height,Re,Fe,ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ue+1,Je,ht.width,ht.height,0,Re,Fe,ht.data)}}else{W?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,Re,Fe,xe[z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,Je,Re,Fe,xe[z]);for(let Ue=0;Ue<X.length;Ue++){const qe=X[Ue];W?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ue+1,0,0,Re,Fe,qe.image[z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ue+1,Je,Re,Fe,qe.image[z])}}}y(A)&&m(i.TEXTURE_CUBE_MAP),q.__version=J.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function ue(U,A,j,B,J,q){const ve=a.convert(j.format,j.colorSpace),_e=a.convert(j.type),Le=I(j.internalFormat,ve,_e,j.colorSpace),Ce=n.get(A),de=n.get(j);if(de.__renderTarget=A,!Ce.__hasExternalTextures){const xe=Math.max(1,A.width>>q),ye=Math.max(1,A.height>>q);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,q,Le,xe,ye,A.depth,0,ve,_e,null):t.texImage2D(J,q,Le,xe,ye,0,ve,_e,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),ze(A)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,B,J,de.__webglTexture,0,_t(A)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,B,J,de.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function we(U,A,j){if(i.bindRenderbuffer(i.RENDERBUFFER,U),A.depthBuffer){const B=A.depthTexture,J=B&&B.isDepthTexture?B.type:null,q=L(A.stencilBuffer,J),ve=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=_t(A);ze(A)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,q,A.width,A.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,q,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,q,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,U)}else{const B=A.textures;for(let J=0;J<B.length;J++){const q=B[J],ve=a.convert(q.format,q.colorSpace),_e=a.convert(q.type),Le=I(q.internalFormat,ve,_e,q.colorSpace),Ce=_t(A);j&&ze(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,Le,A.width,A.height):ze(A)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce,Le,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Le,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function We(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const B=n.get(A.depthTexture);B.__renderTarget=A,(!B.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),he(A.depthTexture,0);const J=B.__webglTexture,q=_t(A);if(A.depthTexture.format===kr)ze(A)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(A.depthTexture.format===Br)ze(A)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function it(U){const A=n.get(U),j=U.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==U.depthTexture){const B=U.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),B){const J=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,B.removeEventListener("dispose",J)};B.addEventListener("dispose",J),A.__depthDisposeCallback=J}A.__boundDepthTexture=B}if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");const B=U.texture.mipmaps;B&&B.length>0?We(A.__webglFramebuffer[0],U):We(A.__webglFramebuffer,U)}else if(j){A.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[B]),A.__webglDepthbuffer[B]===void 0)A.__webglDepthbuffer[B]=i.createRenderbuffer(),we(A.__webglDepthbuffer[B],U,!1);else{const J=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=A.__webglDepthbuffer[B];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,q)}}else{const B=U.texture.mipmaps;if(B&&B.length>0?t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),we(A.__webglDepthbuffer,U,!1);else{const J=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(U,A,j){const B=n.get(U);A!==void 0&&ue(B.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&it(U)}function k(U){const A=U.texture,j=n.get(U),B=n.get(A);U.addEventListener("dispose",G);const J=U.textures,q=U.isWebGLCubeRenderTarget===!0,ve=J.length>1;if(ve||(B.__webglTexture===void 0&&(B.__webglTexture=i.createTexture()),B.__version=A.version,c.memory.textures++),q){j.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer[_e]=[];for(let Le=0;Le<A.mipmaps.length;Le++)j.__webglFramebuffer[_e][Le]=i.createFramebuffer()}else j.__webglFramebuffer[_e]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer=[];for(let _e=0;_e<A.mipmaps.length;_e++)j.__webglFramebuffer[_e]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(ve)for(let _e=0,Le=J.length;_e<Le;_e++){const Ce=n.get(J[_e]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),c.memory.textures++)}if(U.samples>0&&ze(U)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let _e=0;_e<J.length;_e++){const Le=J[_e];j.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[_e]);const Ce=a.convert(Le.format,Le.colorSpace),de=a.convert(Le.type),xe=I(Le.internalFormat,Ce,de,Le.colorSpace,U.isXRRenderTarget===!0),ye=_t(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,xe,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,j.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),we(j.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture),Be(i.TEXTURE_CUBE_MAP,A);for(let _e=0;_e<6;_e++)if(A.mipmaps&&A.mipmaps.length>0)for(let Le=0;Le<A.mipmaps.length;Le++)ue(j.__webglFramebuffer[_e][Le],U,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Le);else ue(j.__webglFramebuffer[_e],U,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);y(A)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let _e=0,Le=J.length;_e<Le;_e++){const Ce=J[_e],de=n.get(Ce);let xe=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(xe=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,de.__webglTexture),Be(xe,Ce),ue(j.__webglFramebuffer,U,Ce,i.COLOR_ATTACHMENT0+_e,xe,0),y(Ce)&&m(xe)}t.unbindTexture()}else{let _e=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(_e=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,B.__webglTexture),Be(_e,A),A.mipmaps&&A.mipmaps.length>0)for(let Le=0;Le<A.mipmaps.length;Le++)ue(j.__webglFramebuffer[Le],U,A,i.COLOR_ATTACHMENT0,_e,Le);else ue(j.__webglFramebuffer,U,A,i.COLOR_ATTACHMENT0,_e,0);y(A)&&m(_e),t.unbindTexture()}U.depthBuffer&&it(U)}function xt(U){const A=U.textures;for(let j=0,B=A.length;j<B;j++){const J=A[j];if(y(J)){const q=N(U),ve=n.get(J).__webglTexture;t.bindTexture(q,ve),m(q),t.unbindTexture()}}}const et=[],$e=[];function Ve(U){if(U.samples>0){if(ze(U)===!1){const A=U.textures,j=U.width,B=U.height;let J=i.COLOR_BUFFER_BIT;const q=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(U),_e=A.length>1;if(_e)for(let Ce=0;Ce<A.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const Le=U.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Ce=0;Ce<A.length;Ce++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),_e){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Ce]);const de=n.get(A[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,j,B,0,0,j,B,J,i.NEAREST),p===!0&&(et.length=0,$e.length=0,et.push(i.COLOR_ATTACHMENT0+Ce),U.depthBuffer&&U.resolveDepthBuffer===!1&&(et.push(q),$e.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$e)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_e)for(let Ce=0;Ce<A.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Ce]);const de=n.get(A[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,de,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const A=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function _t(U){return Math.min(o.maxSamples,U.samples)}function ze(U){const A=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function nt(U){const A=c.render.frame;v.get(U)!==A&&(v.set(U,A),U.update())}function At(U,A){const j=U.colorSpace,B=U.format,J=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||j!==gr&&j!==di&&(St.getTransfer(j)===Ct?(B!==In||J!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),A}function Et(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(f.width=U.naturalWidth||U.width,f.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(f.width=U.displayWidth,f.height=U.displayHeight):(f.width=U.width,f.height=U.height),f}this.allocateTextureUnit=te,this.resetTextureUnits=Y,this.setTexture2D=he,this.setTexture2DArray=ae,this.setTexture3D=Ee,this.setTextureCube=oe,this.rebindTextures=vt,this.setupRenderTarget=k,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=ze}function xE(i,e){function t(n,o=di){let a;const c=St.getTransfer(o);if(n===Xn)return i.UNSIGNED_BYTE;if(n===nl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===il)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Eu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Su)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===xu)return i.BYTE;if(n===yu)return i.SHORT;if(n===Nr)return i.UNSIGNED_SHORT;if(n===tl)return i.INT;if(n===Bi)return i.UNSIGNED_INT;if(n===ti)return i.FLOAT;if(n===Hr)return i.HALF_FLOAT;if(n===Mu)return i.ALPHA;if(n===Tu)return i.RGB;if(n===In)return i.RGBA;if(n===kr)return i.DEPTH_COMPONENT;if(n===Br)return i.DEPTH_STENCIL;if(n===wu)return i.RED;if(n===rl)return i.RED_INTEGER;if(n===bu)return i.RG;if(n===sl)return i.RG_INTEGER;if(n===ol)return i.RGBA_INTEGER;if(n===Hs||n===Vs||n===Gs||n===Ws)if(c===Ct)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Hs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ws)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Hs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ws)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sa||n===Ma||n===Ta||n===wa)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Sa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ma)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ta)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ba||n===Aa||n===Ra)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===ba||n===Aa)return c===Ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Ra)return c===Ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ca||n===Pa||n===Da||n===La||n===Fa||n===Ia||n===Ua||n===Na||n===Oa||n===ka||n===Ba||n===za||n===Ha||n===Va)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Ca)return c===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pa)return c===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Da)return c===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===La)return c===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fa)return c===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ia)return c===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ua)return c===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Na)return c===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oa)return c===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ka)return c===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ba)return c===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===za)return c===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ha)return c===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Va)return c===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ga||n===Wa||n===Xa)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Ga)return c===Ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wa)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xa)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$a||n===qa||n===ja||n===Ya)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===$a)return a.COMPRESSED_RED_RGTC1_EXT;if(n===qa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ja)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ya)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Or?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const yE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EE=`
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

}`;class SE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new zu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new gi({vertexShader:yE,fragmentShader:EE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tn(new Xr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ME extends Vi{constructor(e,t){super();const n=this;let o=null,a=1,c=null,h="local-floor",p=1,f=null,v=null,_=null,x=null,E=null,b=null;const R=typeof XRWebGLBinding<"u",y=new SE,m={},N=t.getContextAttributes();let I=null,L=null;const O=[],D=[],G=new st;let V=null;const P=new Mn;P.viewport=new Bt;const S=new Mn;S.viewport=new Bt;const H=[P,S],Y=new Vg;let te=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let pe=O[se];return pe===void 0&&(pe=new Vo,O[se]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(se){let pe=O[se];return pe===void 0&&(pe=new Vo,O[se]=pe),pe.getGripSpace()},this.getHand=function(se){let pe=O[se];return pe===void 0&&(pe=new Vo,O[se]=pe),pe.getHandSpace()};function he(se){const pe=D.indexOf(se.inputSource);if(pe===-1)return;const ue=O[pe];ue!==void 0&&(ue.update(se.inputSource,se.frame,f||c),ue.dispatchEvent({type:se.type,data:se.inputSource}))}function ae(){o.removeEventListener("select",he),o.removeEventListener("selectstart",he),o.removeEventListener("selectend",he),o.removeEventListener("squeeze",he),o.removeEventListener("squeezestart",he),o.removeEventListener("squeezeend",he),o.removeEventListener("end",ae),o.removeEventListener("inputsourceschange",Ee);for(let se=0;se<O.length;se++){const pe=D[se];pe!==null&&(D[se]=null,O[se].disconnect(pe))}te=null,ne=null,y.reset();for(const se in m)delete m[se];e.setRenderTarget(I),E=null,x=null,_=null,o=null,L=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(V),e.setSize(G.width,G.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){a=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){h=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(se){f=se},this.getBaseLayer=function(){return x!==null?x:E},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(o,t)),_},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(se){if(o=se,o!==null){if(I=e.getRenderTarget(),o.addEventListener("select",he),o.addEventListener("selectstart",he),o.addEventListener("selectend",he),o.addEventListener("squeeze",he),o.addEventListener("squeezestart",he),o.addEventListener("squeezeend",he),o.addEventListener("end",ae),o.addEventListener("inputsourceschange",Ee),N.xrCompatible!==!0&&await t.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(G),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,we=null,We=null;N.depth&&(We=N.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=N.stencil?Br:kr,we=N.stencil?Or:Bi);const it={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:a};_=this.getBinding(),x=_.createProjectionLayer(it),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),L=new Hi(x.textureWidth,x.textureHeight,{format:In,type:Xn,depthTexture:new Bu(x.textureWidth,x.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const ue={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:a};E=new XRWebGLLayer(o,t,ue),o.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),L=new Hi(E.framebufferWidth,E.framebufferHeight,{format:In,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),f=null,c=await o.requestReferenceSpace(h),Ze.setContext(o),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Ee(se){for(let pe=0;pe<se.removed.length;pe++){const ue=se.removed[pe],we=D.indexOf(ue);we>=0&&(D[we]=null,O[we].disconnect(ue))}for(let pe=0;pe<se.added.length;pe++){const ue=se.added[pe];let we=D.indexOf(ue);if(we===-1){for(let it=0;it<O.length;it++)if(it>=D.length){D.push(ue),we=it;break}else if(D[it]===null){D[it]=ue,we=it;break}if(we===-1)break}const We=O[we];We&&We.connect(ue)}}const oe=new ee,fe=new ee;function De(se,pe,ue){oe.setFromMatrixPosition(pe.matrixWorld),fe.setFromMatrixPosition(ue.matrixWorld);const we=oe.distanceTo(fe),We=pe.projectionMatrix.elements,it=ue.projectionMatrix.elements,vt=We[14]/(We[10]-1),k=We[14]/(We[10]+1),xt=(We[9]+1)/We[5],et=(We[9]-1)/We[5],$e=(We[8]-1)/We[0],Ve=(it[8]+1)/it[0],_t=vt*$e,ze=vt*Ve,nt=we/(-$e+Ve),At=nt*-$e;if(pe.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(At),se.translateZ(nt),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),We[10]===-1)se.projectionMatrix.copy(pe.projectionMatrix),se.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Et=vt+nt,U=k+nt,A=_t-At,j=ze+(we-At),B=xt*k/U*Et,J=et*k/U*Et;se.projectionMatrix.makePerspective(A,j,B,J,Et,U),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function He(se,pe){pe===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(pe.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(o===null)return;let pe=se.near,ue=se.far;y.texture!==null&&(y.depthNear>0&&(pe=y.depthNear),y.depthFar>0&&(ue=y.depthFar)),Y.near=S.near=P.near=pe,Y.far=S.far=P.far=ue,(te!==Y.near||ne!==Y.far)&&(o.updateRenderState({depthNear:Y.near,depthFar:Y.far}),te=Y.near,ne=Y.far),Y.layers.mask=se.layers.mask|6,P.layers.mask=Y.layers.mask&3,S.layers.mask=Y.layers.mask&5;const we=se.parent,We=Y.cameras;He(Y,we);for(let it=0;it<We.length;it++)He(We[it],we);We.length===2?De(Y,P,S):Y.projectionMatrix.copy(P.projectionMatrix),Be(se,Y,we)};function Be(se,pe,ue){ue===null?se.matrix.copy(pe.matrixWorld):(se.matrix.copy(ue.matrixWorld),se.matrix.invert(),se.matrix.multiply(pe.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(pe.projectionMatrix),se.projectionMatrixInverse.copy(pe.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Ka*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(x===null&&E===null))return p},this.setFoveation=function(se){p=se,x!==null&&(x.fixedFoveation=se),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=se)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Y)},this.getCameraTexture=function(se){return m[se]};let Ye=null;function Ke(se,pe){if(v=pe.getViewerPose(f||c),b=pe,v!==null){const ue=v.views;E!==null&&(e.setRenderTargetFramebuffer(L,E.framebuffer),e.setRenderTarget(L));let we=!1;ue.length!==Y.cameras.length&&(Y.cameras.length=0,we=!0);for(let k=0;k<ue.length;k++){const xt=ue[k];let et=null;if(E!==null)et=E.getViewport(xt);else{const Ve=_.getViewSubImage(x,xt);et=Ve.viewport,k===0&&(e.setRenderTargetTextures(L,Ve.colorTexture,Ve.depthStencilTexture),e.setRenderTarget(L))}let $e=H[k];$e===void 0&&($e=new Mn,$e.layers.enable(k),$e.viewport=new Bt,H[k]=$e),$e.matrix.fromArray(xt.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(xt.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(et.x,et.y,et.width,et.height),k===0&&(Y.matrix.copy($e.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),we===!0&&Y.cameras.push($e)}const We=o.enabledFeatures;if(We&&We.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){_=n.getBinding();const k=_.getDepthInformation(ue[0]);k&&k.isValid&&k.texture&&y.init(k,o.renderState)}if(We&&We.includes("camera-access")&&R){e.state.unbindTexture(),_=n.getBinding();for(let k=0;k<ue.length;k++){const xt=ue[k].camera;if(xt){let et=m[xt];et||(et=new zu,m[xt]=et);const $e=_.getCameraImage(xt);et.sourceTexture=$e}}}}for(let ue=0;ue<O.length;ue++){const we=D[ue],We=O[ue];we!==null&&We!==void 0&&We.update(we,pe,f||c)}Ye&&Ye(se,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),b=null}const Ze=new Gu;Ze.setAnimationLoop(Ke),this.setAnimationLoop=function(se){Ye=se},this.dispose=function(){}}}const Li=new $n,TE=new zt;function wE(i,e){function t(y,m){y.matrixAutoUpdate===!0&&y.updateMatrix(),m.value.copy(y.matrix)}function n(y,m){m.color.getRGB(y.fogColor.value,Uu(i)),m.isFog?(y.fogNear.value=m.near,y.fogFar.value=m.far):m.isFogExp2&&(y.fogDensity.value=m.density)}function o(y,m,N,I,L){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(y,m):m.isMeshToonMaterial?(a(y,m),_(y,m)):m.isMeshPhongMaterial?(a(y,m),v(y,m)):m.isMeshStandardMaterial?(a(y,m),x(y,m),m.isMeshPhysicalMaterial&&E(y,m,L)):m.isMeshMatcapMaterial?(a(y,m),b(y,m)):m.isMeshDepthMaterial?a(y,m):m.isMeshDistanceMaterial?(a(y,m),R(y,m)):m.isMeshNormalMaterial?a(y,m):m.isLineBasicMaterial?(c(y,m),m.isLineDashedMaterial&&h(y,m)):m.isPointsMaterial?p(y,m,N,I):m.isSpriteMaterial?f(y,m):m.isShadowMaterial?(y.color.value.copy(m.color),y.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(y,m){y.opacity.value=m.opacity,m.color&&y.diffuse.value.copy(m.color),m.emissive&&y.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(y.map.value=m.map,t(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,t(m.alphaMap,y.alphaMapTransform)),m.bumpMap&&(y.bumpMap.value=m.bumpMap,t(m.bumpMap,y.bumpMapTransform),y.bumpScale.value=m.bumpScale,m.side===hn&&(y.bumpScale.value*=-1)),m.normalMap&&(y.normalMap.value=m.normalMap,t(m.normalMap,y.normalMapTransform),y.normalScale.value.copy(m.normalScale),m.side===hn&&y.normalScale.value.negate()),m.displacementMap&&(y.displacementMap.value=m.displacementMap,t(m.displacementMap,y.displacementMapTransform),y.displacementScale.value=m.displacementScale,y.displacementBias.value=m.displacementBias),m.emissiveMap&&(y.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,y.emissiveMapTransform)),m.specularMap&&(y.specularMap.value=m.specularMap,t(m.specularMap,y.specularMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest);const N=e.get(m),I=N.envMap,L=N.envMapRotation;I&&(y.envMap.value=I,Li.copy(L),Li.x*=-1,Li.y*=-1,Li.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),y.envMapRotation.value.setFromMatrix4(TE.makeRotationFromEuler(Li)),y.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=m.reflectivity,y.ior.value=m.ior,y.refractionRatio.value=m.refractionRatio),m.lightMap&&(y.lightMap.value=m.lightMap,y.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,y.lightMapTransform)),m.aoMap&&(y.aoMap.value=m.aoMap,y.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,y.aoMapTransform))}function c(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,m.map&&(y.map.value=m.map,t(m.map,y.mapTransform))}function h(y,m){y.dashSize.value=m.dashSize,y.totalSize.value=m.dashSize+m.gapSize,y.scale.value=m.scale}function p(y,m,N,I){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.size.value=m.size*N,y.scale.value=I*.5,m.map&&(y.map.value=m.map,t(m.map,y.uvTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,t(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function f(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.rotation.value=m.rotation,m.map&&(y.map.value=m.map,t(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,t(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function v(y,m){y.specular.value.copy(m.specular),y.shininess.value=Math.max(m.shininess,1e-4)}function _(y,m){m.gradientMap&&(y.gradientMap.value=m.gradientMap)}function x(y,m){y.metalness.value=m.metalness,m.metalnessMap&&(y.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,y.metalnessMapTransform)),y.roughness.value=m.roughness,m.roughnessMap&&(y.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,y.roughnessMapTransform)),m.envMap&&(y.envMapIntensity.value=m.envMapIntensity)}function E(y,m,N){y.ior.value=m.ior,m.sheen>0&&(y.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),y.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(y.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,y.sheenColorMapTransform)),m.sheenRoughnessMap&&(y.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,y.sheenRoughnessMapTransform))),m.clearcoat>0&&(y.clearcoat.value=m.clearcoat,y.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(y.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,y.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(y.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===hn&&y.clearcoatNormalScale.value.negate())),m.dispersion>0&&(y.dispersion.value=m.dispersion),m.iridescence>0&&(y.iridescence.value=m.iridescence,y.iridescenceIOR.value=m.iridescenceIOR,y.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(y.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,y.iridescenceMapTransform)),m.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),m.transmission>0&&(y.transmission.value=m.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),m.transmissionMap&&(y.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,y.transmissionMapTransform)),y.thickness.value=m.thickness,m.thicknessMap&&(y.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=m.attenuationDistance,y.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(y.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(y.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=m.specularIntensity,y.specularColor.value.copy(m.specularColor),m.specularColorMap&&(y.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,y.specularColorMapTransform)),m.specularIntensityMap&&(y.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,m){m.matcap&&(y.matcap.value=m.matcap)}function R(y,m){const N=e.get(m).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:o}}function bE(i,e,t,n){let o={},a={},c=[];const h=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,I){const L=I.program;n.uniformBlockBinding(N,L)}function f(N,I){let L=o[N.id];L===void 0&&(b(N),L=v(N),o[N.id]=L,N.addEventListener("dispose",y));const O=I.program;n.updateUBOMapping(N,O);const D=e.render.frame;a[N.id]!==D&&(x(N),a[N.id]=D)}function v(N){const I=_();N.__bindingPointIndex=I;const L=i.createBuffer(),O=N.__size,D=N.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,O,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,L),L}function _(){for(let N=0;N<h;N++)if(c.indexOf(N)===-1)return c.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const I=o[N.id],L=N.uniforms,O=N.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let D=0,G=L.length;D<G;D++){const V=Array.isArray(L[D])?L[D]:[L[D]];for(let P=0,S=V.length;P<S;P++){const H=V[P];if(E(H,D,P,O)===!0){const Y=H.__offset,te=Array.isArray(H.value)?H.value:[H.value];let ne=0;for(let he=0;he<te.length;he++){const ae=te[he],Ee=R(ae);typeof ae=="number"||typeof ae=="boolean"?(H.__data[0]=ae,i.bufferSubData(i.UNIFORM_BUFFER,Y+ne,H.__data)):ae.isMatrix3?(H.__data[0]=ae.elements[0],H.__data[1]=ae.elements[1],H.__data[2]=ae.elements[2],H.__data[3]=0,H.__data[4]=ae.elements[3],H.__data[5]=ae.elements[4],H.__data[6]=ae.elements[5],H.__data[7]=0,H.__data[8]=ae.elements[6],H.__data[9]=ae.elements[7],H.__data[10]=ae.elements[8],H.__data[11]=0):(ae.toArray(H.__data,ne),ne+=Ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function E(N,I,L,O){const D=N.value,G=I+"_"+L;if(O[G]===void 0)return typeof D=="number"||typeof D=="boolean"?O[G]=D:O[G]=D.clone(),!0;{const V=O[G];if(typeof D=="number"||typeof D=="boolean"){if(V!==D)return O[G]=D,!0}else if(V.equals(D)===!1)return V.copy(D),!0}return!1}function b(N){const I=N.uniforms;let L=0;const O=16;for(let G=0,V=I.length;G<V;G++){const P=Array.isArray(I[G])?I[G]:[I[G]];for(let S=0,H=P.length;S<H;S++){const Y=P[S],te=Array.isArray(Y.value)?Y.value:[Y.value];for(let ne=0,he=te.length;ne<he;ne++){const ae=te[ne],Ee=R(ae),oe=L%O,fe=oe%Ee.boundary,De=oe+fe;L+=fe,De!==0&&O-De<Ee.storage&&(L+=O-De),Y.__data=new Float32Array(Ee.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=L,L+=Ee.storage}}}const D=L%O;return D>0&&(L+=O-D),N.__size=L,N.__cache={},this}function R(N){const I={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(I.boundary=4,I.storage=4):N.isVector2?(I.boundary=8,I.storage=8):N.isVector3||N.isColor?(I.boundary=16,I.storage=12):N.isVector4?(I.boundary=16,I.storage=16):N.isMatrix3?(I.boundary=48,I.storage=48):N.isMatrix4?(I.boundary=64,I.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),I}function y(N){const I=N.target;I.removeEventListener("dispose",y);const L=c.indexOf(I.__bindingPointIndex);c.splice(L,1),i.deleteBuffer(o[I.id]),delete o[I.id],delete a[I.id]}function m(){for(const N in o)i.deleteBuffer(o[N]);c=[],o={},a={}}return{bind:p,update:f,dispose:m}}class AE{constructor(e={}){const{canvas:t=rg(),context:n=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:f=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let E;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=n.getContextAttributes().alpha}else E=c;const b=new Uint32Array(4),R=new Int32Array(4);let y=null,m=null;const N=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let O=!1;this._outputColorSpace=gn;let D=0,G=0,V=null,P=-1,S=null;const H=new Bt,Y=new Bt;let te=null;const ne=new pt(0);let he=0,ae=t.width,Ee=t.height,oe=1,fe=null,De=null;const He=new Bt(0,0,ae,Ee),Be=new Bt(0,0,ae,Ee);let Ye=!1;const Ke=new ul;let Ze=!1,se=!1;const pe=new zt,ue=new ee,we=new Bt,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function vt(){return V===null?oe:1}let k=n;function xt(C,K){return t.getContext(C,K)}try{const C={alpha:!0,depth:o,stencil:a,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:f,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${el}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",X,!1),k===null){const K="webgl2";if(k=xt(K,C),k===null)throw xt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let et,$e,Ve,_t,ze,nt,At,Et,U,A,j,B,J,q,ve,_e,Le,Ce,de,xe,ye,Re,Fe,Je;function W(){et=new Ox(k),et.init(),Re=new xE(k,et),$e=new Px(k,et,e,Re),Ve=new gE(k,et),$e.reversedDepthBuffer&&x&&Ve.buffers.depth.setReversed(!0),_t=new zx(k),ze=new rE,nt=new vE(k,et,Ve,ze,$e,Re,_t),At=new Lx(L),Et=new Nx(L),U=new $g(k),Fe=new Rx(k,U),A=new kx(k,U,_t,Fe),j=new Vx(k,A,U,_t),de=new Hx(k,$e,nt),_e=new Dx(ze),B=new iE(L,At,Et,et,$e,Fe,_e),J=new wE(L,ze),q=new oE,ve=new fE(et),Ce=new Ax(L,At,Et,Ve,j,E,p),Le=new mE(L,j,$e),Je=new bE(k,_t,$e,Ve),xe=new Cx(k,et,_t),ye=new Bx(k,et,_t),_t.programs=B.programs,L.capabilities=$e,L.extensions=et,L.properties=ze,L.renderLists=q,L.shadowMap=Le,L.state=Ve,L.info=_t}W();const me=new ME(L,k);this.xr=me,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=et.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=et.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(C){C!==void 0&&(oe=C,this.setSize(ae,Ee,!1))},this.getSize=function(C){return C.set(ae,Ee)},this.setSize=function(C,K,ie=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=C,Ee=K,t.width=Math.floor(C*oe),t.height=Math.floor(K*oe),ie===!0&&(t.style.width=C+"px",t.style.height=K+"px"),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(ae*oe,Ee*oe).floor()},this.setDrawingBufferSize=function(C,K,ie){ae=C,Ee=K,oe=ie,t.width=Math.floor(C*ie),t.height=Math.floor(K*ie),this.setViewport(0,0,C,K)},this.getCurrentViewport=function(C){return C.copy(H)},this.getViewport=function(C){return C.copy(He)},this.setViewport=function(C,K,ie,re){C.isVector4?He.set(C.x,C.y,C.z,C.w):He.set(C,K,ie,re),Ve.viewport(H.copy(He).multiplyScalar(oe).round())},this.getScissor=function(C){return C.copy(Be)},this.setScissor=function(C,K,ie,re){C.isVector4?Be.set(C.x,C.y,C.z,C.w):Be.set(C,K,ie,re),Ve.scissor(Y.copy(Be).multiplyScalar(oe).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(C){Ve.setScissorTest(Ye=C)},this.setOpaqueSort=function(C){fe=C},this.setTransparentSort=function(C){De=C},this.getClearColor=function(C){return C.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(C=!0,K=!0,ie=!0){let re=0;if(C){let Z=!1;if(V!==null){const Ae=V.texture.format;Z=Ae===ol||Ae===sl||Ae===rl}if(Z){const Ae=V.texture.type,Ne=Ae===Xn||Ae===Bi||Ae===Nr||Ae===Or||Ae===nl||Ae===il,Ge=Ce.getClearColor(),ke=Ce.getClearAlpha(),tt=Ge.r,Pe=Ge.g,je=Ge.b;Ne?(b[0]=tt,b[1]=Pe,b[2]=je,b[3]=ke,k.clearBufferuiv(k.COLOR,0,b)):(R[0]=tt,R[1]=Pe,R[2]=je,R[3]=ke,k.clearBufferiv(k.COLOR,0,R))}else re|=k.COLOR_BUFFER_BIT}K&&(re|=k.DEPTH_BUFFER_BIT),ie&&(re|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",X,!1),Ce.dispose(),q.dispose(),ve.dispose(),ze.dispose(),At.dispose(),Et.dispose(),j.dispose(),Fe.dispose(),Je.dispose(),B.dispose(),me.dispose(),me.removeEventListener("sessionstart",It),me.removeEventListener("sessionend",xn),Mt.stop()};function be(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const C=_t.autoReset,K=Le.enabled,ie=Le.autoUpdate,re=Le.needsUpdate,Z=Le.type;W(),_t.autoReset=C,Le.enabled=K,Le.autoUpdate=ie,Le.needsUpdate=re,Le.type=Z}function X(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function z(C){const K=C.target;K.removeEventListener("dispose",z),Ue(K)}function Ue(C){qe(C),ze.remove(C)}function qe(C){const K=ze.get(C).programs;K!==void 0&&(K.forEach(function(ie){B.releaseProgram(ie)}),C.isShaderMaterial&&B.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,ie,re,Z,Ae){K===null&&(K=We);const Ne=Z.isMesh&&Z.matrixWorld.determinant()<0,Ge=Yr(C,K,ie,re,Z);Ve.setMaterial(re,Ne);let ke=ie.index,tt=1;if(re.wireframe===!0){if(ke=A.getWireframeAttribute(ie),ke===void 0)return;tt=2}const Pe=ie.drawRange,je=ie.attributes.position;let ut=Pe.start*tt,wt=(Pe.start+Pe.count)*tt;Ae!==null&&(ut=Math.max(ut,Ae.start*tt),wt=Math.min(wt,(Ae.start+Ae.count)*tt)),ke!==null?(ut=Math.max(ut,0),wt=Math.min(wt,ke.count)):je!=null&&(ut=Math.max(ut,0),wt=Math.min(wt,je.count));const Nt=wt-ut;if(Nt<0||Nt===1/0)return;Fe.setup(Z,re,Ge,ie,ke);let Dt,bt=xe;if(ke!==null&&(Dt=U.get(ke),bt=ye,bt.setIndex(Dt)),Z.isMesh)re.wireframe===!0?(Ve.setLineWidth(re.wireframeLinewidth*vt()),bt.setMode(k.LINES)):bt.setMode(k.TRIANGLES);else if(Z.isLine){let Qe=re.linewidth;Qe===void 0&&(Qe=1),Ve.setLineWidth(Qe*vt()),Z.isLineSegments?bt.setMode(k.LINES):Z.isLineLoop?bt.setMode(k.LINE_LOOP):bt.setMode(k.LINE_STRIP)}else Z.isPoints?bt.setMode(k.POINTS):Z.isSprite&&bt.setMode(k.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)zr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))bt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Qe=Z._multiDrawStarts,Lt=Z._multiDrawCounts,gt=Z._multiDrawCount,en=ke?U.get(ke).bytesPerElement:1,M=ze.get(re).currentProgram.getUniforms();for(let ft=0;ft<gt;ft++)M.setValue(k,"_gl_DrawID",ft),bt.render(Qe[ft]/en,Lt[ft])}else if(Z.isInstancedMesh)bt.renderInstances(ut,Nt,Z.count);else if(ie.isInstancedBufferGeometry){const Qe=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Lt=Math.min(ie.instanceCount,Qe);bt.renderInstances(ut,Nt,Lt)}else bt.render(ut,Nt)};function ht(C,K,ie){C.transparent===!0&&C.side===Ln&&C.forceSinglePass===!1?(C.side=hn,C.needsUpdate=!0,yi(C,K,ie),C.side=_i,C.needsUpdate=!0,yi(C,K,ie),C.side=Ln):yi(C,K,ie)}this.compile=function(C,K,ie=null){ie===null&&(ie=C),m=ve.get(ie),m.init(K),I.push(m),ie.traverseVisible(function(Z){Z.isLight&&Z.layers.test(K.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),C!==ie&&C.traverseVisible(function(Z){Z.isLight&&Z.layers.test(K.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),m.setupLights();const re=new Set;return C.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ae=Z.material;if(Ae)if(Array.isArray(Ae))for(let Ne=0;Ne<Ae.length;Ne++){const Ge=Ae[Ne];ht(Ge,ie,Z),re.add(Ge)}else ht(Ae,ie,Z),re.add(Ae)}),m=I.pop(),re},this.compileAsync=function(C,K,ie=null){const re=this.compile(C,K,ie);return new Promise(Z=>{function Ae(){if(re.forEach(function(Ne){ze.get(Ne).currentProgram.isReady()&&re.delete(Ne)}),re.size===0){Z(C);return}setTimeout(Ae,10)}et.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let rt=null;function Qt(C){rt&&rt(C)}function It(){Mt.stop()}function xn(){Mt.start()}const Mt=new Gu;Mt.setAnimationLoop(Qt),typeof self<"u"&&Mt.setContext(self),this.setAnimationLoop=function(C){rt=C,me.setAnimationLoop(C),C===null?Mt.stop():Mt.start()},me.addEventListener("sessionstart",It),me.addEventListener("sessionend",xn),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(K),K=me.getCamera()),C.isScene===!0&&C.onBeforeRender(L,C,K,V),m=ve.get(C,I.length),m.init(K),I.push(m),pe.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Ke.setFromProjectionMatrix(pe,Wn,K.reversedDepth),se=this.localClippingEnabled,Ze=_e.init(this.clippingPlanes,se),y=q.get(C,N.length),y.init(),N.push(y),me.enabled===!0&&me.isPresenting===!0){const Ae=L.xr.getDepthSensingMesh();Ae!==null&&kt(Ae,K,-1/0,L.sortObjects)}kt(C,K,0,L.sortObjects),y.finish(),L.sortObjects===!0&&y.sort(fe,De),it=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,it&&Ce.addToRenderList(y,C),this.info.render.frame++,Ze===!0&&_e.beginShadows();const ie=m.state.shadowsArray;Le.render(ie,C,K),Ze===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=y.opaque,Z=y.transmissive;if(m.setupLights(),K.isArrayCamera){const Ae=K.cameras;if(Z.length>0)for(let Ne=0,Ge=Ae.length;Ne<Ge;Ne++){const ke=Ae[Ne];vi(re,Z,C,ke)}it&&Ce.render(C);for(let Ne=0,Ge=Ae.length;Ne<Ge;Ne++){const ke=Ae[Ne];Gt(y,C,ke,ke.viewport)}}else Z.length>0&&vi(re,Z,C,K),it&&Ce.render(C),Gt(y,C,K);V!==null&&G===0&&(nt.updateMultisampleRenderTarget(V),nt.updateRenderTargetMipmap(V)),C.isScene===!0&&C.onAfterRender(L,C,K),Fe.resetDefaultState(),P=-1,S=null,I.pop(),I.length>0?(m=I[I.length-1],Ze===!0&&_e.setGlobalState(L.clippingPlanes,m.state.camera)):m=null,N.pop(),N.length>0?y=N[N.length-1]:y=null};function kt(C,K,ie,re){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)ie=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ke.intersectsSprite(C)){re&&we.setFromMatrixPosition(C.matrixWorld).applyMatrix4(pe);const Ne=j.update(C),Ge=C.material;Ge.visible&&y.push(C,Ne,Ge,ie,we.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ke.intersectsObject(C))){const Ne=j.update(C),Ge=C.material;if(re&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),we.copy(C.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),we.copy(Ne.boundingSphere.center)),we.applyMatrix4(C.matrixWorld).applyMatrix4(pe)),Array.isArray(Ge)){const ke=Ne.groups;for(let tt=0,Pe=ke.length;tt<Pe;tt++){const je=ke[tt],ut=Ge[je.materialIndex];ut&&ut.visible&&y.push(C,Ne,ut,ie,we.z,je)}}else Ge.visible&&y.push(C,Ne,Ge,ie,we.z,null)}}const Ae=C.children;for(let Ne=0,Ge=Ae.length;Ne<Ge;Ne++)kt(Ae[Ne],K,ie,re)}function Gt(C,K,ie,re){const Z=C.opaque,Ae=C.transmissive,Ne=C.transparent;m.setupLightsView(ie),Ze===!0&&_e.setGlobalState(L.clippingPlanes,ie),re&&Ve.viewport(H.copy(re)),Z.length>0&&qn(Z,K,ie),Ae.length>0&&qn(Ae,K,ie),Ne.length>0&&qn(Ne,K,ie),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function vi(C,K,ie,re){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[re.id]===void 0&&(m.state.transmissionRenderTarget[re.id]=new Hi(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?Hr:Xn,minFilter:ki,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const Ae=m.state.transmissionRenderTarget[re.id],Ne=re.viewport||H;Ae.setSize(Ne.z*L.transmissionResolutionScale,Ne.w*L.transmissionResolutionScale);const Ge=L.getRenderTarget(),ke=L.getActiveCubeFace(),tt=L.getActiveMipmapLevel();L.setRenderTarget(Ae),L.getClearColor(ne),he=L.getClearAlpha(),he<1&&L.setClearColor(16777215,.5),L.clear(),it&&Ce.render(ie);const Pe=L.toneMapping;L.toneMapping=mi;const je=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),m.setupLightsView(re),Ze===!0&&_e.setGlobalState(L.clippingPlanes,re),qn(C,ie,re),nt.updateMultisampleRenderTarget(Ae),nt.updateRenderTargetMipmap(Ae),et.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let wt=0,Nt=K.length;wt<Nt;wt++){const Dt=K[wt],bt=Dt.object,Qe=Dt.geometry,Lt=Dt.material,gt=Dt.group;if(Lt.side===Ln&&bt.layers.test(re.layers)){const en=Lt.side;Lt.side=hn,Lt.needsUpdate=!0,xi(bt,ie,re,Qe,Lt,gt),Lt.side=en,Lt.needsUpdate=!0,ut=!0}}ut===!0&&(nt.updateMultisampleRenderTarget(Ae),nt.updateRenderTargetMipmap(Ae))}L.setRenderTarget(Ge,ke,tt),L.setClearColor(ne,he),je!==void 0&&(re.viewport=je),L.toneMapping=Pe}function qn(C,K,ie){const re=K.isScene===!0?K.overrideMaterial:null;for(let Z=0,Ae=C.length;Z<Ae;Z++){const Ne=C[Z],Ge=Ne.object,ke=Ne.geometry,tt=Ne.group;let Pe=Ne.material;Pe.allowOverride===!0&&re!==null&&(Pe=re),Ge.layers.test(ie.layers)&&xi(Ge,K,ie,ke,Pe,tt)}}function xi(C,K,ie,re,Z,Ae){C.onBeforeRender(L,K,ie,re,Z,Ae),C.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(L,K,ie,re,C,Ae),Z.transparent===!0&&Z.side===Ln&&Z.forceSinglePass===!1?(Z.side=hn,Z.needsUpdate=!0,L.renderBufferDirect(ie,K,re,Z,C,Ae),Z.side=_i,Z.needsUpdate=!0,L.renderBufferDirect(ie,K,re,Z,C,Ae),Z.side=Ln):L.renderBufferDirect(ie,K,re,Z,C,Ae),C.onAfterRender(L,K,ie,re,Z,Ae)}function yi(C,K,ie){K.isScene!==!0&&(K=We);const re=ze.get(C),Z=m.state.lights,Ae=m.state.shadowsArray,Ne=Z.state.version,Ge=B.getParameters(C,Z.state,Ae,K,ie),ke=B.getProgramCacheKey(Ge);let tt=re.programs;re.environment=C.isMeshStandardMaterial?K.environment:null,re.fog=K.fog,re.envMap=(C.isMeshStandardMaterial?Et:At).get(C.envMap||re.environment),re.envMapRotation=re.environment!==null&&C.envMap===null?K.environmentRotation:C.envMapRotation,tt===void 0&&(C.addEventListener("dispose",z),tt=new Map,re.programs=tt);let Pe=tt.get(ke);if(Pe!==void 0){if(re.currentProgram===Pe&&re.lightsStateVersion===Ne)return jr(C,Ge),Pe}else Ge.uniforms=B.getUniforms(C),C.onBeforeCompile(Ge,L),Pe=B.acquireProgram(Ge,ke),tt.set(ke,Pe),re.uniforms=Ge.uniforms;const je=re.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(je.clippingPlanes=_e.uniform),jr(C,Ge),re.needsLights=no(C),re.lightsStateVersion=Ne,re.needsLights&&(je.ambientLightColor.value=Z.state.ambient,je.lightProbe.value=Z.state.probe,je.directionalLights.value=Z.state.directional,je.directionalLightShadows.value=Z.state.directionalShadow,je.spotLights.value=Z.state.spot,je.spotLightShadows.value=Z.state.spotShadow,je.rectAreaLights.value=Z.state.rectArea,je.ltc_1.value=Z.state.rectAreaLTC1,je.ltc_2.value=Z.state.rectAreaLTC2,je.pointLights.value=Z.state.point,je.pointLightShadows.value=Z.state.pointShadow,je.hemisphereLights.value=Z.state.hemi,je.directionalShadowMap.value=Z.state.directionalShadowMap,je.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,je.spotShadowMap.value=Z.state.spotShadowMap,je.spotLightMatrix.value=Z.state.spotLightMatrix,je.spotLightMap.value=Z.state.spotLightMap,je.pointShadowMap.value=Z.state.pointShadowMap,je.pointShadowMatrix.value=Z.state.pointShadowMatrix),re.currentProgram=Pe,re.uniformsList=null,Pe}function qr(C){if(C.uniformsList===null){const K=C.currentProgram.getUniforms();C.uniformsList=$s.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function jr(C,K){const ie=ze.get(C);ie.outputColorSpace=K.outputColorSpace,ie.batching=K.batching,ie.batchingColor=K.batchingColor,ie.instancing=K.instancing,ie.instancingColor=K.instancingColor,ie.instancingMorph=K.instancingMorph,ie.skinning=K.skinning,ie.morphTargets=K.morphTargets,ie.morphNormals=K.morphNormals,ie.morphColors=K.morphColors,ie.morphTargetsCount=K.morphTargetsCount,ie.numClippingPlanes=K.numClippingPlanes,ie.numIntersection=K.numClipIntersection,ie.vertexAlphas=K.vertexAlphas,ie.vertexTangents=K.vertexTangents,ie.toneMapping=K.toneMapping}function Yr(C,K,ie,re,Z){K.isScene!==!0&&(K=We),nt.resetTextureUnits();const Ae=K.fog,Ne=re.isMeshStandardMaterial?K.environment:null,Ge=V===null?L.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:gr,ke=(re.isMeshStandardMaterial?Et:At).get(re.envMap||Ne),tt=re.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Pe=!!ie.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),je=!!ie.morphAttributes.position,ut=!!ie.morphAttributes.normal,wt=!!ie.morphAttributes.color;let Nt=mi;re.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Nt=L.toneMapping);const Dt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,bt=Dt!==void 0?Dt.length:0,Qe=ze.get(re),Lt=m.state.lights;if(Ze===!0&&(se===!0||C!==S)){const Jt=C===S&&re.id===P;_e.setState(re,C,Jt)}let gt=!1;re.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Lt.state.version||Qe.outputColorSpace!==Ge||Z.isBatchedMesh&&Qe.batching===!1||!Z.isBatchedMesh&&Qe.batching===!0||Z.isBatchedMesh&&Qe.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Qe.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Qe.instancing===!1||!Z.isInstancedMesh&&Qe.instancing===!0||Z.isSkinnedMesh&&Qe.skinning===!1||!Z.isSkinnedMesh&&Qe.skinning===!0||Z.isInstancedMesh&&Qe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Qe.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Qe.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Qe.instancingMorph===!1&&Z.morphTexture!==null||Qe.envMap!==ke||re.fog===!0&&Qe.fog!==Ae||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==_e.numPlanes||Qe.numIntersection!==_e.numIntersection)||Qe.vertexAlphas!==tt||Qe.vertexTangents!==Pe||Qe.morphTargets!==je||Qe.morphNormals!==ut||Qe.morphColors!==wt||Qe.toneMapping!==Nt||Qe.morphTargetsCount!==bt)&&(gt=!0):(gt=!0,Qe.__version=re.version);let en=Qe.currentProgram;gt===!0&&(en=yi(re,K,Z));let M=!1,ft=!1,Ei=!1;const Rt=en.getUniforms(),Wt=Qe.uniforms;if(Ve.useProgram(en.program)&&(M=!0,ft=!0,Ei=!0),re.id!==P&&(P=re.id,ft=!0),M||S!==C){Ve.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Rt.setValue(k,"projectionMatrix",C.projectionMatrix),Rt.setValue(k,"viewMatrix",C.matrixWorldInverse);const tn=Rt.map.cameraPosition;tn!==void 0&&tn.setValue(k,ue.setFromMatrixPosition(C.matrixWorld)),$e.logarithmicDepthBuffer&&Rt.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Rt.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,ft=!0,Ei=!0)}if(Z.isSkinnedMesh){Rt.setOptional(k,Z,"bindMatrix"),Rt.setOptional(k,Z,"bindMatrixInverse");const Jt=Z.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),Rt.setValue(k,"boneTexture",Jt.boneTexture,nt))}Z.isBatchedMesh&&(Rt.setOptional(k,Z,"batchingTexture"),Rt.setValue(k,"batchingTexture",Z._matricesTexture,nt),Rt.setOptional(k,Z,"batchingIdTexture"),Rt.setValue(k,"batchingIdTexture",Z._indirectTexture,nt),Rt.setOptional(k,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Rt.setValue(k,"batchingColorTexture",Z._colorsTexture,nt));const ln=ie.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&de.update(Z,ie,en),(ft||Qe.receiveShadow!==Z.receiveShadow)&&(Qe.receiveShadow=Z.receiveShadow,Rt.setValue(k,"receiveShadow",Z.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Wt.envMap.value=ke,Wt.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&K.environment!==null&&(Wt.envMapIntensity.value=K.environmentIntensity),ft&&(Rt.setValue(k,"toneMappingExposure",L.toneMappingExposure),Qe.needsLights&&to(Wt,Ei),Ae&&re.fog===!0&&J.refreshFogUniforms(Wt,Ae),J.refreshMaterialUniforms(Wt,re,oe,Ee,m.state.transmissionRenderTarget[C.id]),$s.upload(k,qr(Qe),Wt,nt)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&($s.upload(k,qr(Qe),Wt,nt),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Rt.setValue(k,"center",Z.center),Rt.setValue(k,"modelViewMatrix",Z.modelViewMatrix),Rt.setValue(k,"normalMatrix",Z.normalMatrix),Rt.setValue(k,"modelMatrix",Z.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const Jt=re.uniformsGroups;for(let tn=0,Er=Jt.length;tn<Er;tn++){const jn=Jt[tn];Je.update(jn,en),Je.bind(jn,en)}}return en}function to(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function no(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(C,K,ie){const re=ze.get(C);re.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),ze.get(C.texture).__webglTexture=K,ze.get(C.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ie,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,K){const ie=ze.get(C);ie.__webglFramebuffer=K,ie.__useDefaultFramebuffer=K===void 0};const io=k.createFramebuffer();this.setRenderTarget=function(C,K=0,ie=0){V=C,D=K,G=ie;let re=!0,Z=null,Ae=!1,Ne=!1;if(C){const ke=ze.get(C);if(ke.__useDefaultFramebuffer!==void 0)Ve.bindFramebuffer(k.FRAMEBUFFER,null),re=!1;else if(ke.__webglFramebuffer===void 0)nt.setupRenderTarget(C);else if(ke.__hasExternalTextures)nt.rebindTextures(C,ze.get(C.texture).__webglTexture,ze.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const je=C.depthTexture;if(ke.__boundDepthTexture!==je){if(je!==null&&ze.has(je)&&(C.width!==je.image.width||C.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(C)}}const tt=C.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ne=!0);const Pe=ze.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Pe[K])?Z=Pe[K][ie]:Z=Pe[K],Ae=!0):C.samples>0&&nt.useMultisampledRTT(C)===!1?Z=ze.get(C).__webglMultisampledFramebuffer:Array.isArray(Pe)?Z=Pe[ie]:Z=Pe,H.copy(C.viewport),Y.copy(C.scissor),te=C.scissorTest}else H.copy(He).multiplyScalar(oe).floor(),Y.copy(Be).multiplyScalar(oe).floor(),te=Ye;if(ie!==0&&(Z=io),Ve.bindFramebuffer(k.FRAMEBUFFER,Z)&&re&&Ve.drawBuffers(C,Z),Ve.viewport(H),Ve.scissor(Y),Ve.setScissorTest(te),Ae){const ke=ze.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+K,ke.__webglTexture,ie)}else if(Ne){const ke=K;for(let tt=0;tt<C.textures.length;tt++){const Pe=ze.get(C.textures[tt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+tt,Pe.__webglTexture,ie,ke)}}else if(C!==null&&ie!==0){const ke=ze.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ke.__webglTexture,ie)}P=-1},this.readRenderTargetPixels=function(C,K,ie,re,Z,Ae,Ne,Ge=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(ke=ke[Ne]),ke){Ve.bindFramebuffer(k.FRAMEBUFFER,ke);try{const tt=C.textures[Ge],Pe=tt.format,je=tt.type;if(!$e.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-re&&ie>=0&&ie<=C.height-Z&&(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ge),k.readPixels(K,ie,re,Z,Re.convert(Pe),Re.convert(je),Ae))}finally{const tt=V!==null?ze.get(V).__webglFramebuffer:null;Ve.bindFramebuffer(k.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(C,K,ie,re,Z,Ae,Ne,Ge=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(ke=ke[Ne]),ke)if(K>=0&&K<=C.width-re&&ie>=0&&ie<=C.height-Z){Ve.bindFramebuffer(k.FRAMEBUFFER,ke);const tt=C.textures[Ge],Pe=tt.format,je=tt.type;if(!$e.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ut),k.bufferData(k.PIXEL_PACK_BUFFER,Ae.byteLength,k.STREAM_READ),C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ge),k.readPixels(K,ie,re,Z,Re.convert(Pe),Re.convert(je),0);const wt=V!==null?ze.get(V).__webglFramebuffer:null;Ve.bindFramebuffer(k.FRAMEBUFFER,wt);const Nt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await sg(k,Nt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ut),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ae),k.deleteBuffer(ut),k.deleteSync(Nt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,K=null,ie=0){const re=Math.pow(2,-ie),Z=Math.floor(C.image.width*re),Ae=Math.floor(C.image.height*re),Ne=K!==null?K.x:0,Ge=K!==null?K.y:0;nt.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,ie,0,0,Ne,Ge,Z,Ae),Ve.unbindTexture()};const ro=k.createFramebuffer(),Tt=k.createFramebuffer();this.copyTextureToTexture=function(C,K,ie=null,re=null,Z=0,Ae=null){Ae===null&&(Z!==0?(zr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=Z,Z=0):Ae=0);let Ne,Ge,ke,tt,Pe,je,ut,wt,Nt;const Dt=C.isCompressedTexture?C.mipmaps[Ae]:C.image;if(ie!==null)Ne=ie.max.x-ie.min.x,Ge=ie.max.y-ie.min.y,ke=ie.isBox3?ie.max.z-ie.min.z:1,tt=ie.min.x,Pe=ie.min.y,je=ie.isBox3?ie.min.z:0;else{const ln=Math.pow(2,-Z);Ne=Math.floor(Dt.width*ln),Ge=Math.floor(Dt.height*ln),C.isDataArrayTexture?ke=Dt.depth:C.isData3DTexture?ke=Math.floor(Dt.depth*ln):ke=1,tt=0,Pe=0,je=0}re!==null?(ut=re.x,wt=re.y,Nt=re.z):(ut=0,wt=0,Nt=0);const bt=Re.convert(K.format),Qe=Re.convert(K.type);let Lt;K.isData3DTexture?(nt.setTexture3D(K,0),Lt=k.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(nt.setTexture2DArray(K,0),Lt=k.TEXTURE_2D_ARRAY):(nt.setTexture2D(K,0),Lt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,K.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,K.unpackAlignment);const gt=k.getParameter(k.UNPACK_ROW_LENGTH),en=k.getParameter(k.UNPACK_IMAGE_HEIGHT),M=k.getParameter(k.UNPACK_SKIP_PIXELS),ft=k.getParameter(k.UNPACK_SKIP_ROWS),Ei=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Dt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Dt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,tt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Pe),k.pixelStorei(k.UNPACK_SKIP_IMAGES,je);const Rt=C.isDataArrayTexture||C.isData3DTexture,Wt=K.isDataArrayTexture||K.isData3DTexture;if(C.isDepthTexture){const ln=ze.get(C),Jt=ze.get(K),tn=ze.get(ln.__renderTarget),Er=ze.get(Jt.__renderTarget);Ve.bindFramebuffer(k.READ_FRAMEBUFFER,tn.__webglFramebuffer),Ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,Er.__webglFramebuffer);for(let jn=0;jn<ke;jn++)Rt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ze.get(C).__webglTexture,Z,je+jn),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ze.get(K).__webglTexture,Ae,Nt+jn)),k.blitFramebuffer(tt,Pe,Ne,Ge,ut,wt,Ne,Ge,k.DEPTH_BUFFER_BIT,k.NEAREST);Ve.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Z!==0||C.isRenderTargetTexture||ze.has(C)){const ln=ze.get(C),Jt=ze.get(K);Ve.bindFramebuffer(k.READ_FRAMEBUFFER,ro),Ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,Tt);for(let tn=0;tn<ke;tn++)Rt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ln.__webglTexture,Z,je+tn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ln.__webglTexture,Z),Wt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Jt.__webglTexture,Ae,Nt+tn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Jt.__webglTexture,Ae),Z!==0?k.blitFramebuffer(tt,Pe,Ne,Ge,ut,wt,Ne,Ge,k.COLOR_BUFFER_BIT,k.NEAREST):Wt?k.copyTexSubImage3D(Lt,Ae,ut,wt,Nt+tn,tt,Pe,Ne,Ge):k.copyTexSubImage2D(Lt,Ae,ut,wt,tt,Pe,Ne,Ge);Ve.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Wt?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(Lt,Ae,ut,wt,Nt,Ne,Ge,ke,bt,Qe,Dt.data):K.isCompressedArrayTexture?k.compressedTexSubImage3D(Lt,Ae,ut,wt,Nt,Ne,Ge,ke,bt,Dt.data):k.texSubImage3D(Lt,Ae,ut,wt,Nt,Ne,Ge,ke,bt,Qe,Dt):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ae,ut,wt,Ne,Ge,bt,Qe,Dt.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ae,ut,wt,Dt.width,Dt.height,bt,Dt.data):k.texSubImage2D(k.TEXTURE_2D,Ae,ut,wt,Ne,Ge,bt,Qe,Dt);k.pixelStorei(k.UNPACK_ROW_LENGTH,gt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,en),k.pixelStorei(k.UNPACK_SKIP_PIXELS,M),k.pixelStorei(k.UNPACK_SKIP_ROWS,ft),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ei),Ae===0&&K.generateMipmaps&&k.generateMipmap(Lt),Ve.unbindTexture()},this.initRenderTarget=function(C){ze.get(C).__webglFramebuffer===void 0&&nt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?nt.setTextureCube(C,0):C.isData3DTexture?nt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?nt.setTexture2DArray(C,0):nt.setTexture2D(C,0),Ve.unbindTexture()},this.resetState=function(){D=0,G=0,V=null,Ve.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}const lu={type:"change"},dl={type:"start"},ju={type:"end"},Ns=new ll,cu=new fi,RE=Math.cos(70*ig.DEG2RAD),qt=new ee,un=2*Math.PI,Pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Jo=1e-6;class CE extends Wg{constructor(e,t=null){super(e,t),this.state=Pt.NONE,this.target=new ee,this.cursor=new ee,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:hr.ROTATE,MIDDLE:hr.DOLLY,RIGHT:hr.PAN},this.touches={ONE:lr.ROTATE,TWO:lr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new ee,this._lastQuaternion=new zi,this._lastTargetPosition=new ee,this._quat=new zi().setFromUnitVectors(e.up,new ee(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Nc,this._sphericalDelta=new Nc,this._scale=1,this._panOffset=new ee,this._rotateStart=new st,this._rotateEnd=new st,this._rotateDelta=new st,this._panStart=new st,this._panEnd=new st,this._panDelta=new st,this._dollyStart=new st,this._dollyEnd=new st,this._dollyDelta=new st,this._dollyDirection=new ee,this._mouse=new st,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=DE.bind(this),this._onPointerDown=PE.bind(this),this._onPointerUp=LE.bind(this),this._onContextMenu=BE.bind(this),this._onMouseWheel=UE.bind(this),this._onKeyDown=NE.bind(this),this._onTouchStart=OE.bind(this),this._onTouchMove=kE.bind(this),this._onMouseDown=FE.bind(this),this._onMouseMove=IE.bind(this),this._interceptControlDown=zE.bind(this),this._interceptControlUp=HE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(lu),this.update(),this.state=Pt.NONE}update(e=null){const t=this.object.position;qt.copy(t).sub(this.target),qt.applyQuaternion(this._quat),this._spherical.setFromVector3(qt),this.autoRotate&&this.state===Pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(n)&&isFinite(o)&&(n<-Math.PI?n+=un:n>Math.PI&&(n-=un),o<-Math.PI?o+=un:o>Math.PI&&(o-=un),n<=o?this._spherical.theta=Math.max(n,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+o)/2?Math.max(n,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=c!=this._spherical.radius}if(qt.setFromSpherical(this._spherical),qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const h=qt.length();c=this._clampDistance(h*this._scale);const p=h-c;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),a=!!p}else if(this.object.isOrthographicCamera){const h=new ee(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=p!==this.object.zoom;const f=new ee(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(h),this.object.updateMatrixWorld(),c=qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(Ns.origin.copy(this.object.position),Ns.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ns.direction))<RE?this.object.lookAt(this.target):(cu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ns.intersectPlane(cu,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Jo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Jo||this._lastTargetPosition.distanceToSquared(this.target)>Jo?(this.dispatchEvent(lu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?un/60*this.autoRotateSpeed*e:un/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){qt.setFromMatrixColumn(t,0),qt.multiplyScalar(-e),this._panOffset.add(qt)}_panUp(e,t){this.screenSpacePanning===!0?qt.setFromMatrixColumn(t,1):(qt.setFromMatrixColumn(t,0),qt.crossVectors(this.object.up,qt)),qt.multiplyScalar(e),this._panOffset.add(qt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;qt.copy(o).sub(this.target);let a=qt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/n.clientHeight,this.object.matrix),this._panUp(2*t*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),o=e-n.left,a=t-n.top,c=n.width,h=n.height;this._mouse.x=o/c*2-1,this._mouse.y=-(a/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(un*this._rotateDelta.x/t.clientHeight),this._rotateUp(un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(n,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(n,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(n*n+o*o);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),o=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateEnd.set(o,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(un*this._rotateDelta.x/t.clientHeight),this._rotateUp(un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(n,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(n*n+o*o);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,h=(e.pageY+t.y)*.5;this._updateZoomParameters(c,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new st,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function PE(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function DE(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function LE(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ju),this.state=Pt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function FE(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case hr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Pt.DOLLY;break;case hr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Pt.ROTATE}break;case hr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Pt.PAN}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(dl)}function IE(i){switch(this.state){case Pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function UE(i){this.enabled===!1||this.enableZoom===!1||this.state!==Pt.NONE||(i.preventDefault(),this.dispatchEvent(dl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ju))}function NE(i){this.enabled!==!1&&this._handleKeyDown(i)}function OE(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case lr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Pt.TOUCH_ROTATE;break;case lr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Pt.TOUCH_PAN;break;default:this.state=Pt.NONE}break;case 2:switch(this.touches.TWO){case lr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Pt.TOUCH_DOLLY_PAN;break;case lr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Pt.TOUCH_DOLLY_ROTATE;break;default:this.state=Pt.NONE}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(dl)}function kE(i){switch(this._trackPointer(i),this.state){case Pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Pt.NONE}}function BE(i){this.enabled!==!1&&i.preventDefault()}function zE(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function HE(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const VE="modulepreload",GE=function(i,e){return new URL(i,e).href},uu={},WE=function(e,t,n){let o=Promise.resolve();if(t&&t.length>0){const c=document.getElementsByTagName("link"),h=document.querySelector("meta[property=csp-nonce]"),p=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));o=Promise.allSettled(t.map(f=>{if(f=GE(f,n),f in uu)return;uu[f]=!0;const v=f.endsWith(".css"),_=v?'[rel="stylesheet"]':"";if(!!n)for(let b=c.length-1;b>=0;b--){const R=c[b];if(R.href===f&&(!v||R.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${_}`))return;const E=document.createElement("link");if(E.rel=v?"stylesheet":VE,v||(E.as="script"),E.crossOrigin="",E.href=f,p&&E.setAttribute("nonce",p),document.head.appendChild(E),v)return new Promise((b,R)=>{E.addEventListener("load",b),E.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${f}`)))})}))}function a(c){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=c,window.dispatchEvent(h),!h.defaultPrevented)throw c}return o.then(c=>{for(const h of c||[])h.status==="rejected"&&a(h.reason);return e().catch(a)})};var XE=async function(i={}){var tc,nc,ic;var e,t=i,n=typeof window=="object",o=typeof WorkerGlobalScope<"u",a=typeof process=="object"&&((tc=process.versions)==null?void 0:tc.node)&&process.type!="renderer",c=!n&&!a&&!o;if(a){const{createRequire:r}=await WE(async()=>{const{createRequire:s}=await Promise.resolve().then(()=>ES);return{createRequire:s}},void 0,import.meta.url);var h=r(import.meta.url)}var p="./this.program",f=(r,s)=>{throw s},v=import.meta.url,_="";function x(r){return t.locateFile?t.locateFile(r,_):_+r}var E,b;if(a){if(!(typeof process=="object"&&((nc=process.versions)==null?void 0:nc.node)&&process.type!="renderer"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var R=process.versions.node,y=R.split(".").slice(0,3);if(y=y[0]*1e4+y[1]*100+y[2].split("-")[0]*1,y<16e4)throw new Error("This emscripten-generated code requires node v16.0.0 (detected v"+R+")");var m=h("fs");v.startsWith("file:")&&(_=h("path").dirname(h("url").fileURLToPath(v))+"/"),b=s=>{s=G(s)?new URL(s):s;var l=m.readFileSync(s);return D(Buffer.isBuffer(l)),l},E=async(s,l=!0)=>{s=G(s)?new URL(s):s;var u=m.readFileSync(s,l?void 0:"utf8");return D(l?Buffer.isBuffer(u):typeof u=="string"),u},process.argv.length>1&&(p=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),f=(s,l)=>{throw process.exitCode=s,l}}else if(c){if(typeof process=="object"&&((ic=process.versions)==null?void 0:ic.node)&&process.type!="renderer"||typeof window=="object"||typeof WorkerGlobalScope<"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)")}else if(n||o){try{_=new URL(".",v).href}catch{}if(!(typeof window=="object"||typeof WorkerGlobalScope<"u"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");o&&(b=r=>{var s=new XMLHttpRequest;return s.open("GET",r,!1),s.responseType="arraybuffer",s.send(null),new Uint8Array(s.response)}),E=async r=>{if(G(r))return new Promise((l,u)=>{var d=new XMLHttpRequest;d.open("GET",r,!0),d.responseType="arraybuffer",d.onload=()=>{if(d.status==200||d.status==0&&d.response){l(d.response);return}u(d.status)},d.onerror=u,d.send(null)});var s=await fetch(r,{credentials:"same-origin"});if(s.ok)return s.arrayBuffer();throw new Error(s.status+" : "+s.url)}}else throw new Error("environment detection error");var N=console.log.bind(console),I=console.error.bind(console);D(!c,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");var L;typeof WebAssembly!="object"&&I("no native wasm support detected");var O=!1;function D(r,s){r||j("Assertion failed"+(s?": "+s:""))}var G=r=>r.startsWith("file://");function V(){var r=go();D((r&3)==0),r==0&&(r+=4),we[r>>2]=34821223,we[r+4>>2]=2310721022,we[0]=1668509029}function P(){if(!O){var r=go();r==0&&(r+=4);var s=we[r>>2],l=we[r+4>>2];(s!=34821223||l!=2310721022)&&j(`Stack overflow! Stack cookie has been overwritten at ${Ie(r)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${Ie(l)} ${Ie(s)}`),we[0]!=1668509029&&j("Runtime error: The application has corrupted its heap memory area (address zero)!")}}class S extends Error{}class H extends S{}class Y extends S{constructor(s){super(s),this.excPtr=s;const l=Hl(s);this.name=l[0],this.message=l[1]}}(()=>{var r=new Int16Array(1),s=new Int8Array(r.buffer);if(r[0]=25459,s[0]!==115||s[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();function te(r){Object.getOwnPropertyDescriptor(t,r)||Object.defineProperty(t,r,{configurable:!0,set(){j(`Attempt to set \`Module.${r}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function ne(r){return()=>D(!1,`call to '${r}' via reference taken before Wasm module initialization`)}function he(r){Object.getOwnPropertyDescriptor(t,r)&&j(`\`Module.${r}\` was supplied but \`${r}\` not included in INCOMING_MODULE_JS_API`)}function ae(r){return r==="FS_createPath"||r==="FS_createDataFile"||r==="FS_createPreloadedFile"||r==="FS_unlink"||r==="addRunDependency"||r==="FS_createLazyFile"||r==="FS_createDevice"||r==="removeRunDependency"}function Ee(r,s){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,r)&&Object.defineProperty(globalThis,r,{configurable:!0,get(){s()}})}function oe(r,s){Ee(r,()=>{Ue(`\`${r}\` is not longer defined by emscripten. ${s}`)})}oe("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),oe("asm","Please use wasmExports instead");function fe(r){Ee(r,()=>{var s=`\`${r}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,l=r;l.startsWith("_")||(l="$"+r),s+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${l}')`,ae(r)&&(s+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Ue(s)}),De(r)}function De(r){Object.getOwnPropertyDescriptor(t,r)||Object.defineProperty(t,r,{configurable:!0,get(){var s=`'${r}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;ae(r)&&(s+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),j(s)}})}var He,Be,Ye,Ke,Ze,se,pe,ue,we,We,it,vt,k,xt=!1;function et(){var r=Ye.buffer;Ke=new Int8Array(r),se=new Int16Array(r),Ze=new Uint8Array(r),pe=new Uint16Array(r),ue=new Int32Array(r),we=new Uint32Array(r),We=new Float32Array(r),it=new Float64Array(r),vt=new BigInt64Array(r),k=new BigUint64Array(r)}D(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support");function $e(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)me(t.preRun.shift());te("preRun"),Re(W)}function Ve(){D(!xt),xt=!0,P(),!t.noFSInit&&!M.initialized&&M.init(),bi.__wasm_call_ctors(),M.ignorePermissions=!1}function _t(){if(P(),t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)Je(t.postRun.shift());te("postRun"),Re(Fe)}var ze=0,nt=null,At={},Et=null;function U(r){var s;ze++,(s=t.monitorRunDependencies)==null||s.call(t,ze),r?(D(!At[r]),At[r]=1,Et===null&&typeof setInterval<"u"&&(Et=setInterval(()=>{if(O){clearInterval(Et),Et=null;return}var l=!1;for(var u in At)l||(l=!0,I("still waiting on run dependencies:")),I(`dependency: ${u}`);l&&I("(end of list)")},1e4))):I("warning: run dependency added without ID")}function A(r){var l;if(ze--,(l=t.monitorRunDependencies)==null||l.call(t,ze),r?(D(At[r]),delete At[r]):I("warning: run dependency removed without ID"),ze==0&&(Et!==null&&(clearInterval(Et),Et=null),nt)){var s=nt;nt=null,s()}}function j(r){var l;(l=t.onAbort)==null||l.call(t,r),r="Aborted("+r+")",I(r),O=!0;var s=new WebAssembly.RuntimeError(r);throw Be==null||Be(s),s}function B(r,s){return(...l)=>{D(xt,`native function \`${r}\` called before runtime initialization`);var u=bi[r];return D(u,`exported native function \`${r}\` not found`),D(l.length<=s,`native function \`${r}\` called with ${l.length} args but expects ${s}`),u(...l)}}var J;function q(){return t.locateFile?x("mujoco.wasm"):new URL(""+new URL("mujoco-CGsuVDfV.wasm",import.meta.url).href,import.meta.url).href}function ve(r){if(r==J&&L)return new Uint8Array(L);if(b)return b(r);throw"both async and sync fetching of the wasm failed"}async function _e(r){if(!L)try{var s=await E(r);return new Uint8Array(s)}catch{}return ve(r)}async function Le(r,s){try{var l=await _e(r),u=await WebAssembly.instantiate(l,s);return u}catch(d){I(`failed to asynchronously prepare wasm: ${d}`),G(J)&&I(`warning: Loading from a file URI (${J}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),j(d)}}async function Ce(r,s,l){if(!r&&typeof WebAssembly.instantiateStreaming=="function"&&!G(s)&&!a)try{var u=fetch(s,{credentials:"same-origin"}),d=await WebAssembly.instantiateStreaming(u,l);return d}catch(g){I(`wasm streaming compile failed: ${g}`),I("falling back to ArrayBuffer instantiation")}return Le(s,l)}function de(){return{env:Ql,wasi_snapshot_preview1:Ql}}async function xe(){function r(T,w){return bi=T.exports,Ye=bi.memory,D(Ye,"memory not found in wasm exports"),et(),rs=bi.__indirect_function_table,D(rs,"table not found in wasm exports"),hd(bi),A("wasm-instantiate"),bi}U("wasm-instantiate");var s=t;function l(T){return D(t===s,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),s=null,r(T.instance)}var u=de();if(t.instantiateWasm)return new Promise((T,w)=>{try{t.instantiateWasm(u,(F,$)=>{T(r(F,$))})}catch(F){I(`Module.instantiateWasm callback failed with error: ${F}`),w(F)}});J??(J=q());var d=await Ce(L,J,u),g=l(d);return g}class ye{constructor(s){An(this,"name","ExitStatus");this.message=`Program terminated with exit(${s})`,this.status=s}}var Re=r=>{for(;r.length>0;)r.shift()(t)},Fe=[],Je=r=>Fe.push(r),W=[],me=r=>W.push(r),be=!0,Ie=r=>(D(typeof r=="number"),r>>>=0,"0x"+r.toString(16).padStart(8,"0")),X=r=>ql(r),z=()=>Yl(),Ue=r=>{Ue.shown||(Ue.shown={}),Ue.shown[r]||(Ue.shown[r]=1,a&&(r="warning: "+r),I(r))},qe=typeof TextDecoder<"u"?new TextDecoder:void 0,ht=(r,s=0,l=NaN)=>{for(var u=s+l,d=s;r[d]&&!(d>=u);)++d;if(d-s>16&&r.buffer&&qe)return qe.decode(r.subarray(s,d));for(var g="";s<d;){var T=r[s++];if(!(T&128)){g+=String.fromCharCode(T);continue}var w=r[s++]&63;if((T&224)==192){g+=String.fromCharCode((T&31)<<6|w);continue}var F=r[s++]&63;if((T&240)==224?T=(T&15)<<12|w<<6|F:((T&248)!=240&&Ue("Invalid UTF-8 leading byte "+Ie(T)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),T=(T&7)<<18|w<<12|F<<6|r[s++]&63),T<65536)g+=String.fromCharCode(T);else{var $=T-65536;g+=String.fromCharCode(55296|$>>10,56320|$&1023)}}return g},rt=(r,s)=>(D(typeof r=="number",`UTF8ToString expects a number (got ${typeof r})`),r?ht(Ze,r,s):""),Qt=(r,s,l,u)=>j(`Assertion failed: ${rt(r)}, at: `+[s?rt(s):"unknown filename",l,u?rt(u):"unknown function"]),It=[],xn=0,Mt=r=>{var s=new qn(r);return s.get_caught()||(s.set_caught(!0),xn--),s.set_rethrown(!1),It.push(s),us(r),Jl(r)},kt=()=>{if(!It.length)return 0;var r=It[It.length-1];return us(r.excPtr),r.excPtr},Gt=0,vi=()=>{Se(0,0),D(It.length>0);var r=It.pop();vo(r.excPtr),Gt=0};class qn{constructor(s){this.excPtr=s,this.ptr=s-24}set_type(s){we[this.ptr+4>>2]=s}get_type(){return we[this.ptr+4>>2]}set_destructor(s){we[this.ptr+8>>2]=s}get_destructor(){return we[this.ptr+8>>2]}set_caught(s){s=s?1:0,Ke[this.ptr+12]=s}get_caught(){return Ke[this.ptr+12]!=0}set_rethrown(s){s=s?1:0,Ke[this.ptr+13]=s}get_rethrown(){return Ke[this.ptr+13]!=0}init(s,l){this.set_adjusted_ptr(0),this.set_type(s),this.set_destructor(l)}set_adjusted_ptr(s){we[this.ptr+16>>2]=s}get_adjusted_ptr(){return we[this.ptr+16>>2]}}var xi=r=>Xl(r),yi=r=>{var s=Gt==null?void 0:Gt.excPtr;if(!s)return xi(0),0;var l=new qn(s);l.set_adjusted_ptr(s);var u=l.get_type();if(!u)return xi(0),s;for(var d of r){if(d===0||d===u)break;var g=l.ptr+16;if(Zl(d,u,g))return xi(d),s}return xi(u),s},qr=()=>yi([]),jr=r=>yi([r]),Yr=()=>{var r=It.pop();r||j("no exception to throw");var s=r.excPtr;throw r.get_rethrown()||(It.push(r),r.set_rethrown(!0),r.set_caught(!1),xn++),Gt=new Y(s),Gt},to=r=>{if(r){var s=new qn(r);It.push(s),s.set_rethrown(!0),Yr()}},no=(r,s,l)=>{var u=new qn(r);throw u.init(s,l),Gt=new Y(r),xn++,Gt},io=()=>xn,ro=r=>{throw Gt||(Gt=new Y(r)),Gt},Tt={isAbs:r=>r.charAt(0)==="/",splitPath:r=>{var s=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return s.exec(r).slice(1)},normalizeArray:(r,s)=>{for(var l=0,u=r.length-1;u>=0;u--){var d=r[u];d==="."?r.splice(u,1):d===".."?(r.splice(u,1),l++):l&&(r.splice(u,1),l--)}if(s)for(;l;l--)r.unshift("..");return r},normalize:r=>{var s=Tt.isAbs(r),l=r.slice(-1)==="/";return r=Tt.normalizeArray(r.split("/").filter(u=>!!u),!s).join("/"),!r&&!s&&(r="."),r&&l&&(r+="/"),(s?"/":"")+r},dirname:r=>{var s=Tt.splitPath(r),l=s[0],u=s[1];return!l&&!u?".":(u&&(u=u.slice(0,-1)),l+u)},basename:r=>r&&r.match(/([^\/]+|\/)\/*$/)[1],join:(...r)=>Tt.normalize(r.join("/")),join2:(r,s)=>Tt.normalize(r+"/"+s)},C=()=>{if(a){var r=h("crypto");return s=>r.randomFillSync(s)}return s=>crypto.getRandomValues(s)},K=r=>{(K=C())(r)},ie={resolve:(...r)=>{for(var s="",l=!1,u=r.length-1;u>=-1&&!l;u--){var d=u>=0?r[u]:M.cwd();if(typeof d!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!d)return"";s=d+"/"+s,l=Tt.isAbs(d)}return s=Tt.normalizeArray(s.split("/").filter(g=>!!g),!l).join("/"),(l?"/":"")+s||"."},relative:(r,s)=>{r=ie.resolve(r).slice(1),s=ie.resolve(s).slice(1);function l($){for(var Q=0;Q<$.length&&$[Q]==="";Q++);for(var le=$.length-1;le>=0&&$[le]==="";le--);return Q>le?[]:$.slice(Q,le-Q+1)}for(var u=l(r.split("/")),d=l(s.split("/")),g=Math.min(u.length,d.length),T=g,w=0;w<g;w++)if(u[w]!==d[w]){T=w;break}for(var F=[],w=T;w<u.length;w++)F.push("..");return F=F.concat(d.slice(T)),F.join("/")}},re=[],Z=r=>{for(var s=0,l=0;l<r.length;++l){var u=r.charCodeAt(l);u<=127?s++:u<=2047?s+=2:u>=55296&&u<=57343?(s+=4,++l):s+=3}return s},Ae=(r,s,l,u)=>{if(D(typeof r=="string",`stringToUTF8Array expects a string (got ${typeof r})`),!(u>0))return 0;for(var d=l,g=l+u-1,T=0;T<r.length;++T){var w=r.codePointAt(T);if(w<=127){if(l>=g)break;s[l++]=w}else if(w<=2047){if(l+1>=g)break;s[l++]=192|w>>6,s[l++]=128|w&63}else if(w<=65535){if(l+2>=g)break;s[l++]=224|w>>12,s[l++]=128|w>>6&63,s[l++]=128|w&63}else{if(l+3>=g)break;w>1114111&&Ue("Invalid Unicode code point "+Ie(w)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),s[l++]=240|w>>18,s[l++]=128|w>>12&63,s[l++]=128|w>>6&63,s[l++]=128|w&63,T++}}return s[l]=0,l-d},Ne=(r,s,l)=>{var u=Z(r)+1,d=new Array(u),g=Ae(r,d,0,d.length);return d.length=g,d},Ge=()=>{if(!re.length){var r=null;if(a){var s=256,l=Buffer.alloc(s),u=0,d=process.stdin.fd;try{u=m.readSync(d,l,0,s)}catch(g){if(g.toString().includes("EOF"))u=0;else throw g}u>0&&(r=l.slice(0,u).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(r=window.prompt("Input: "),r!==null&&(r+=`
`));if(!r)return null;re=Ne(r)}return re.shift()},ke={ttys:[],init(){},shutdown(){},register(r,s){ke.ttys[r]={input:[],output:[],ops:s},M.registerDevice(r,ke.stream_ops)},stream_ops:{open(r){var s=ke.ttys[r.node.rdev];if(!s)throw new M.ErrnoError(43);r.tty=s,r.seekable=!1},close(r){r.tty.ops.fsync(r.tty)},fsync(r){r.tty.ops.fsync(r.tty)},read(r,s,l,u,d){if(!r.tty||!r.tty.ops.get_char)throw new M.ErrnoError(60);for(var g=0,T=0;T<u;T++){var w;try{w=r.tty.ops.get_char(r.tty)}catch{throw new M.ErrnoError(29)}if(w===void 0&&g===0)throw new M.ErrnoError(6);if(w==null)break;g++,s[l+T]=w}return g&&(r.node.atime=Date.now()),g},write(r,s,l,u,d){if(!r.tty||!r.tty.ops.put_char)throw new M.ErrnoError(60);try{for(var g=0;g<u;g++)r.tty.ops.put_char(r.tty,s[l+g])}catch{throw new M.ErrnoError(29)}return u&&(r.node.mtime=r.node.ctime=Date.now()),g}},default_tty_ops:{get_char(r){return Ge()},put_char(r,s){s===null||s===10?(N(ht(r.output)),r.output=[]):s!=0&&r.output.push(s)},fsync(r){var s;((s=r.output)==null?void 0:s.length)>0&&(N(ht(r.output)),r.output=[])},ioctl_tcgets(r){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(r,s,l){return 0},ioctl_tiocgwinsz(r){return[24,80]}},default_tty1_ops:{put_char(r,s){s===null||s===10?(I(ht(r.output)),r.output=[]):s!=0&&r.output.push(s)},fsync(r){var s;((s=r.output)==null?void 0:s.length)>0&&(I(ht(r.output)),r.output=[])}}},tt=r=>{j("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")},Pe={ops_table:null,mount(r){return Pe.createNode(null,"/",16895,0)},createNode(r,s,l,u){if(M.isBlkdev(l)||M.isFIFO(l))throw new M.ErrnoError(63);Pe.ops_table||(Pe.ops_table={dir:{node:{getattr:Pe.node_ops.getattr,setattr:Pe.node_ops.setattr,lookup:Pe.node_ops.lookup,mknod:Pe.node_ops.mknod,rename:Pe.node_ops.rename,unlink:Pe.node_ops.unlink,rmdir:Pe.node_ops.rmdir,readdir:Pe.node_ops.readdir,symlink:Pe.node_ops.symlink},stream:{llseek:Pe.stream_ops.llseek}},file:{node:{getattr:Pe.node_ops.getattr,setattr:Pe.node_ops.setattr},stream:{llseek:Pe.stream_ops.llseek,read:Pe.stream_ops.read,write:Pe.stream_ops.write,mmap:Pe.stream_ops.mmap,msync:Pe.stream_ops.msync}},link:{node:{getattr:Pe.node_ops.getattr,setattr:Pe.node_ops.setattr,readlink:Pe.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Pe.node_ops.getattr,setattr:Pe.node_ops.setattr},stream:M.chrdev_stream_ops}});var d=M.createNode(r,s,l,u);return M.isDir(d.mode)?(d.node_ops=Pe.ops_table.dir.node,d.stream_ops=Pe.ops_table.dir.stream,d.contents={}):M.isFile(d.mode)?(d.node_ops=Pe.ops_table.file.node,d.stream_ops=Pe.ops_table.file.stream,d.usedBytes=0,d.contents=null):M.isLink(d.mode)?(d.node_ops=Pe.ops_table.link.node,d.stream_ops=Pe.ops_table.link.stream):M.isChrdev(d.mode)&&(d.node_ops=Pe.ops_table.chrdev.node,d.stream_ops=Pe.ops_table.chrdev.stream),d.atime=d.mtime=d.ctime=Date.now(),r&&(r.contents[s]=d,r.atime=r.mtime=r.ctime=d.atime),d},getFileDataAsTypedArray(r){return r.contents?r.contents.subarray?r.contents.subarray(0,r.usedBytes):new Uint8Array(r.contents):new Uint8Array(0)},expandFileStorage(r,s){var l=r.contents?r.contents.length:0;if(!(l>=s)){var u=1024*1024;s=Math.max(s,l*(l<u?2:1.125)>>>0),l!=0&&(s=Math.max(s,256));var d=r.contents;r.contents=new Uint8Array(s),r.usedBytes>0&&r.contents.set(d.subarray(0,r.usedBytes),0)}},resizeFileStorage(r,s){if(r.usedBytes!=s)if(s==0)r.contents=null,r.usedBytes=0;else{var l=r.contents;r.contents=new Uint8Array(s),l&&r.contents.set(l.subarray(0,Math.min(s,r.usedBytes))),r.usedBytes=s}},node_ops:{getattr(r){var s={};return s.dev=M.isChrdev(r.mode)?r.id:1,s.ino=r.id,s.mode=r.mode,s.nlink=1,s.uid=0,s.gid=0,s.rdev=r.rdev,M.isDir(r.mode)?s.size=4096:M.isFile(r.mode)?s.size=r.usedBytes:M.isLink(r.mode)?s.size=r.link.length:s.size=0,s.atime=new Date(r.atime),s.mtime=new Date(r.mtime),s.ctime=new Date(r.ctime),s.blksize=4096,s.blocks=Math.ceil(s.size/s.blksize),s},setattr(r,s){for(const l of["mode","atime","mtime","ctime"])s[l]!=null&&(r[l]=s[l]);s.size!==void 0&&Pe.resizeFileStorage(r,s.size)},lookup(r,s){throw new M.ErrnoError(44)},mknod(r,s,l,u){return Pe.createNode(r,s,l,u)},rename(r,s,l){var u;try{u=M.lookupNode(s,l)}catch{}if(u){if(M.isDir(r.mode))for(var d in u.contents)throw new M.ErrnoError(55);M.hashRemoveNode(u)}delete r.parent.contents[r.name],s.contents[l]=r,r.name=l,s.ctime=s.mtime=r.parent.ctime=r.parent.mtime=Date.now()},unlink(r,s){delete r.contents[s],r.ctime=r.mtime=Date.now()},rmdir(r,s){var l=M.lookupNode(r,s);for(var u in l.contents)throw new M.ErrnoError(55);delete r.contents[s],r.ctime=r.mtime=Date.now()},readdir(r){return[".","..",...Object.keys(r.contents)]},symlink(r,s,l){var u=Pe.createNode(r,s,41471,0);return u.link=l,u},readlink(r){if(!M.isLink(r.mode))throw new M.ErrnoError(28);return r.link}},stream_ops:{read(r,s,l,u,d){var g=r.node.contents;if(d>=r.node.usedBytes)return 0;var T=Math.min(r.node.usedBytes-d,u);if(D(T>=0),T>8&&g.subarray)s.set(g.subarray(d,d+T),l);else for(var w=0;w<T;w++)s[l+w]=g[d+w];return T},write(r,s,l,u,d,g){if(D(!(s instanceof ArrayBuffer)),s.buffer===Ke.buffer&&(g=!1),!u)return 0;var T=r.node;if(T.mtime=T.ctime=Date.now(),s.subarray&&(!T.contents||T.contents.subarray)){if(g)return D(d===0,"canOwn must imply no weird position inside the file"),T.contents=s.subarray(l,l+u),T.usedBytes=u,u;if(T.usedBytes===0&&d===0)return T.contents=s.slice(l,l+u),T.usedBytes=u,u;if(d+u<=T.usedBytes)return T.contents.set(s.subarray(l,l+u),d),u}if(Pe.expandFileStorage(T,d+u),T.contents.subarray&&s.subarray)T.contents.set(s.subarray(l,l+u),d);else for(var w=0;w<u;w++)T.contents[d+w]=s[l+w];return T.usedBytes=Math.max(T.usedBytes,d+u),u},llseek(r,s,l){var u=s;if(l===1?u+=r.position:l===2&&M.isFile(r.node.mode)&&(u+=r.node.usedBytes),u<0)throw new M.ErrnoError(28);return u},mmap(r,s,l,u,d){if(!M.isFile(r.node.mode))throw new M.ErrnoError(43);var g,T,w=r.node.contents;if(!(d&2)&&w&&w.buffer===Ke.buffer)T=!1,g=w.byteOffset;else{if(T=!0,g=tt(),!g)throw new M.ErrnoError(48);w&&((l>0||l+s<w.length)&&(w.subarray?w=w.subarray(l,l+s):w=Array.prototype.slice.call(w,l,l+s)),Ke.set(w,g))}return{ptr:g,allocated:T}},msync(r,s,l,u,d){return Pe.stream_ops.write(r,s,0,u,l,!1),0}}},je=async r=>{var s=await E(r);return D(s,`Loading data file "${r}" failed (no arrayBuffer).`),new Uint8Array(s)},ut=(...r)=>M.createDataFile(...r),wt=r=>{for(var s=r;;){if(!At[r])return r;r=s+Math.random()}},Nt=[],Dt=(r,s,l,u)=>{typeof Browser<"u"&&Browser.init();var d=!1;return Nt.forEach(g=>{d||g.canHandle(s)&&(g.handle(r,s,l,u),d=!0)}),d},bt=(r,s,l,u,d,g,T,w,F,$)=>{var Q=s?ie.resolve(Tt.join2(r,s)):r,le=wt(`cp ${Q}`);function ge(ce){function Me(Xe){$==null||$(),w||ut(r,s,Xe,u,d,F),g==null||g(),A(le)}Dt(ce,Q,Me,()=>{T==null||T(),A(le)})||Me(ce)}U(le),typeof l=="string"?je(l).then(ge,T):ge(l)},Qe=r=>{var s={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},l=s[r];if(typeof l>"u")throw new Error(`Unknown file open mode: ${r}`);return l},Lt=(r,s)=>{var l=0;return r&&(l|=365),s&&(l|=146),l},gt=r=>rt(Wl(r)),en={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},M={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class extends Error{constructor(s){super(xt?gt(s):"");An(this,"name","ErrnoError");this.errno=s;for(var l in en)if(en[l]===s){this.code=l;break}}},FSStream:class{constructor(){An(this,"shared",{})}get object(){return this.node}set object(r){this.node=r}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(r){this.shared.flags=r}get position(){return this.shared.position}set position(r){this.shared.position=r}},FSNode:class{constructor(r,s,l,u){An(this,"node_ops",{});An(this,"stream_ops",{});An(this,"readMode",365);An(this,"writeMode",146);An(this,"mounted",null);r||(r=this),this.parent=r,this.mount=r.mount,this.id=M.nextInode++,this.name=s,this.mode=l,this.rdev=u,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(r){r?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(r){r?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return M.isDir(this.mode)}get isDevice(){return M.isChrdev(this.mode)}},lookupPath(r,s={}){if(!r)throw new M.ErrnoError(44);s.follow_mount??(s.follow_mount=!0),Tt.isAbs(r)||(r=M.cwd()+"/"+r);e:for(var l=0;l<40;l++){for(var u=r.split("/").filter($=>!!$),d=M.root,g="/",T=0;T<u.length;T++){var w=T===u.length-1;if(w&&s.parent)break;if(u[T]!=="."){if(u[T]===".."){if(g=Tt.dirname(g),M.isRoot(d)){r=g+"/"+u.slice(T+1).join("/");continue e}else d=d.parent;continue}g=Tt.join2(g,u[T]);try{d=M.lookupNode(d,u[T])}catch($){if(($==null?void 0:$.errno)===44&&w&&s.noent_okay)return{path:g};throw $}if(M.isMountpoint(d)&&(!w||s.follow_mount)&&(d=d.mounted.root),M.isLink(d.mode)&&(!w||s.follow)){if(!d.node_ops.readlink)throw new M.ErrnoError(52);var F=d.node_ops.readlink(d);Tt.isAbs(F)||(F=Tt.dirname(g)+"/"+F),r=F+"/"+u.slice(T+1).join("/");continue e}}}return{path:g,node:d}}throw new M.ErrnoError(32)},getPath(r){for(var s;;){if(M.isRoot(r)){var l=r.mount.mountpoint;return s?l[l.length-1]!=="/"?`${l}/${s}`:l+s:l}s=s?`${r.name}/${s}`:r.name,r=r.parent}},hashName(r,s){for(var l=0,u=0;u<s.length;u++)l=(l<<5)-l+s.charCodeAt(u)|0;return(r+l>>>0)%M.nameTable.length},hashAddNode(r){var s=M.hashName(r.parent.id,r.name);r.name_next=M.nameTable[s],M.nameTable[s]=r},hashRemoveNode(r){var s=M.hashName(r.parent.id,r.name);if(M.nameTable[s]===r)M.nameTable[s]=r.name_next;else for(var l=M.nameTable[s];l;){if(l.name_next===r){l.name_next=r.name_next;break}l=l.name_next}},lookupNode(r,s){var l=M.mayLookup(r);if(l)throw new M.ErrnoError(l);for(var u=M.hashName(r.id,s),d=M.nameTable[u];d;d=d.name_next){var g=d.name;if(d.parent.id===r.id&&g===s)return d}return M.lookup(r,s)},createNode(r,s,l,u){D(typeof r=="object");var d=new M.FSNode(r,s,l,u);return M.hashAddNode(d),d},destroyNode(r){M.hashRemoveNode(r)},isRoot(r){return r===r.parent},isMountpoint(r){return!!r.mounted},isFile(r){return(r&61440)===32768},isDir(r){return(r&61440)===16384},isLink(r){return(r&61440)===40960},isChrdev(r){return(r&61440)===8192},isBlkdev(r){return(r&61440)===24576},isFIFO(r){return(r&61440)===4096},isSocket(r){return(r&49152)===49152},flagsToPermissionString(r){var s=["r","w","rw"][r&3];return r&512&&(s+="w"),s},nodePermissions(r,s){return M.ignorePermissions?0:s.includes("r")&&!(r.mode&292)||s.includes("w")&&!(r.mode&146)||s.includes("x")&&!(r.mode&73)?2:0},mayLookup(r){if(!M.isDir(r.mode))return 54;var s=M.nodePermissions(r,"x");return s||(r.node_ops.lookup?0:2)},mayCreate(r,s){if(!M.isDir(r.mode))return 54;try{var l=M.lookupNode(r,s);return 20}catch{}return M.nodePermissions(r,"wx")},mayDelete(r,s,l){var u;try{u=M.lookupNode(r,s)}catch(g){return g.errno}var d=M.nodePermissions(r,"wx");if(d)return d;if(l){if(!M.isDir(u.mode))return 54;if(M.isRoot(u)||M.getPath(u)===M.cwd())return 10}else if(M.isDir(u.mode))return 31;return 0},mayOpen(r,s){return r?M.isLink(r.mode)?32:M.isDir(r.mode)&&(M.flagsToPermissionString(s)!=="r"||s&576)?31:M.nodePermissions(r,M.flagsToPermissionString(s)):44},checkOpExists(r,s){if(!r)throw new M.ErrnoError(s);return r},MAX_OPEN_FDS:4096,nextfd(){for(var r=0;r<=M.MAX_OPEN_FDS;r++)if(!M.streams[r])return r;throw new M.ErrnoError(33)},getStreamChecked(r){var s=M.getStream(r);if(!s)throw new M.ErrnoError(8);return s},getStream:r=>M.streams[r],createStream(r,s=-1){return D(s>=-1),r=Object.assign(new M.FSStream,r),s==-1&&(s=M.nextfd()),r.fd=s,M.streams[s]=r,r},closeStream(r){M.streams[r]=null},dupStream(r,s=-1){var u,d;var l=M.createStream(r,s);return(d=(u=l.stream_ops)==null?void 0:u.dup)==null||d.call(u,l),l},doSetAttr(r,s,l){var u=r==null?void 0:r.stream_ops.setattr,d=u?r:s;u??(u=s.node_ops.setattr),M.checkOpExists(u,63),u(d,l)},chrdev_stream_ops:{open(r){var l,u;var s=M.getDevice(r.node.rdev);r.stream_ops=s.stream_ops,(u=(l=r.stream_ops).open)==null||u.call(l,r)},llseek(){throw new M.ErrnoError(70)}},major:r=>r>>8,minor:r=>r&255,makedev:(r,s)=>r<<8|s,registerDevice(r,s){M.devices[r]={stream_ops:s}},getDevice:r=>M.devices[r],getMounts(r){for(var s=[],l=[r];l.length;){var u=l.pop();s.push(u),l.push(...u.mounts)}return s},syncfs(r,s){typeof r=="function"&&(s=r,r=!1),M.syncFSRequests++,M.syncFSRequests>1&&I(`warning: ${M.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var l=M.getMounts(M.root.mount),u=0;function d(T){return D(M.syncFSRequests>0),M.syncFSRequests--,s(T)}function g(T){if(T)return g.errored?void 0:(g.errored=!0,d(T));++u>=l.length&&d(null)}l.forEach(T=>{if(!T.type.syncfs)return g(null);T.type.syncfs(T,r,g)})},mount(r,s,l){if(typeof r=="string")throw r;var u=l==="/",d=!l,g;if(u&&M.root)throw new M.ErrnoError(10);if(!u&&!d){var T=M.lookupPath(l,{follow_mount:!1});if(l=T.path,g=T.node,M.isMountpoint(g))throw new M.ErrnoError(10);if(!M.isDir(g.mode))throw new M.ErrnoError(54)}var w={type:r,opts:s,mountpoint:l,mounts:[]},F=r.mount(w);return F.mount=w,w.root=F,u?M.root=F:g&&(g.mounted=w,g.mount&&g.mount.mounts.push(w)),F},unmount(r){var s=M.lookupPath(r,{follow_mount:!1});if(!M.isMountpoint(s.node))throw new M.ErrnoError(28);var l=s.node,u=l.mounted,d=M.getMounts(u);Object.keys(M.nameTable).forEach(T=>{for(var w=M.nameTable[T];w;){var F=w.name_next;d.includes(w.mount)&&M.destroyNode(w),w=F}}),l.mounted=null;var g=l.mount.mounts.indexOf(u);D(g!==-1),l.mount.mounts.splice(g,1)},lookup(r,s){return r.node_ops.lookup(r,s)},mknod(r,s,l){var u=M.lookupPath(r,{parent:!0}),d=u.node,g=Tt.basename(r);if(!g)throw new M.ErrnoError(28);if(g==="."||g==="..")throw new M.ErrnoError(20);var T=M.mayCreate(d,g);if(T)throw new M.ErrnoError(T);if(!d.node_ops.mknod)throw new M.ErrnoError(63);return d.node_ops.mknod(d,g,s,l)},statfs(r){return M.statfsNode(M.lookupPath(r,{follow:!0}).node)},statfsStream(r){return M.statfsNode(r.node)},statfsNode(r){var s={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:M.nextInode,ffree:M.nextInode-1,fsid:42,flags:2,namelen:255};return r.node_ops.statfs&&Object.assign(s,r.node_ops.statfs(r.mount.opts.root)),s},create(r,s=438){return s&=4095,s|=32768,M.mknod(r,s,0)},mkdir(r,s=511){return s&=1023,s|=16384,M.mknod(r,s,0)},mkdirTree(r,s){var l=r.split("/"),u="";for(var d of l)if(d){(u||Tt.isAbs(r))&&(u+="/"),u+=d;try{M.mkdir(u,s)}catch(g){if(g.errno!=20)throw g}}},mkdev(r,s,l){return typeof l>"u"&&(l=s,s=438),s|=8192,M.mknod(r,s,l)},symlink(r,s){if(!ie.resolve(r))throw new M.ErrnoError(44);var l=M.lookupPath(s,{parent:!0}),u=l.node;if(!u)throw new M.ErrnoError(44);var d=Tt.basename(s),g=M.mayCreate(u,d);if(g)throw new M.ErrnoError(g);if(!u.node_ops.symlink)throw new M.ErrnoError(63);return u.node_ops.symlink(u,d,r)},rename(r,s){var l=Tt.dirname(r),u=Tt.dirname(s),d=Tt.basename(r),g=Tt.basename(s),T,w,F;if(T=M.lookupPath(r,{parent:!0}),w=T.node,T=M.lookupPath(s,{parent:!0}),F=T.node,!w||!F)throw new M.ErrnoError(44);if(w.mount!==F.mount)throw new M.ErrnoError(75);var $=M.lookupNode(w,d),Q=ie.relative(r,u);if(Q.charAt(0)!==".")throw new M.ErrnoError(28);if(Q=ie.relative(s,l),Q.charAt(0)!==".")throw new M.ErrnoError(55);var le;try{le=M.lookupNode(F,g)}catch{}if($!==le){var ge=M.isDir($.mode),ce=M.mayDelete(w,d,ge);if(ce)throw new M.ErrnoError(ce);if(ce=le?M.mayDelete(F,g,ge):M.mayCreate(F,g),ce)throw new M.ErrnoError(ce);if(!w.node_ops.rename)throw new M.ErrnoError(63);if(M.isMountpoint($)||le&&M.isMountpoint(le))throw new M.ErrnoError(10);if(F!==w&&(ce=M.nodePermissions(w,"w"),ce))throw new M.ErrnoError(ce);M.hashRemoveNode($);try{w.node_ops.rename($,F,g),$.parent=F}catch(Me){throw Me}finally{M.hashAddNode($)}}},rmdir(r){var s=M.lookupPath(r,{parent:!0}),l=s.node,u=Tt.basename(r),d=M.lookupNode(l,u),g=M.mayDelete(l,u,!0);if(g)throw new M.ErrnoError(g);if(!l.node_ops.rmdir)throw new M.ErrnoError(63);if(M.isMountpoint(d))throw new M.ErrnoError(10);l.node_ops.rmdir(l,u),M.destroyNode(d)},readdir(r){var s=M.lookupPath(r,{follow:!0}),l=s.node,u=M.checkOpExists(l.node_ops.readdir,54);return u(l)},unlink(r){var s=M.lookupPath(r,{parent:!0}),l=s.node;if(!l)throw new M.ErrnoError(44);var u=Tt.basename(r),d=M.lookupNode(l,u),g=M.mayDelete(l,u,!1);if(g)throw new M.ErrnoError(g);if(!l.node_ops.unlink)throw new M.ErrnoError(63);if(M.isMountpoint(d))throw new M.ErrnoError(10);l.node_ops.unlink(l,u),M.destroyNode(d)},readlink(r){var s=M.lookupPath(r),l=s.node;if(!l)throw new M.ErrnoError(44);if(!l.node_ops.readlink)throw new M.ErrnoError(28);return l.node_ops.readlink(l)},stat(r,s){var l=M.lookupPath(r,{follow:!s}),u=l.node,d=M.checkOpExists(u.node_ops.getattr,63);return d(u)},fstat(r){var s=M.getStreamChecked(r),l=s.node,u=s.stream_ops.getattr,d=u?s:l;return u??(u=l.node_ops.getattr),M.checkOpExists(u,63),u(d)},lstat(r){return M.stat(r,!0)},doChmod(r,s,l,u){M.doSetAttr(r,s,{mode:l&4095|s.mode&-4096,ctime:Date.now(),dontFollow:u})},chmod(r,s,l){var u;if(typeof r=="string"){var d=M.lookupPath(r,{follow:!l});u=d.node}else u=r;M.doChmod(null,u,s,l)},lchmod(r,s){M.chmod(r,s,!0)},fchmod(r,s){var l=M.getStreamChecked(r);M.doChmod(l,l.node,s,!1)},doChown(r,s,l){M.doSetAttr(r,s,{timestamp:Date.now(),dontFollow:l})},chown(r,s,l,u){var d;if(typeof r=="string"){var g=M.lookupPath(r,{follow:!u});d=g.node}else d=r;M.doChown(null,d,u)},lchown(r,s,l){M.chown(r,s,l,!0)},fchown(r,s,l){var u=M.getStreamChecked(r);M.doChown(u,u.node,!1)},doTruncate(r,s,l){if(M.isDir(s.mode))throw new M.ErrnoError(31);if(!M.isFile(s.mode))throw new M.ErrnoError(28);var u=M.nodePermissions(s,"w");if(u)throw new M.ErrnoError(u);M.doSetAttr(r,s,{size:l,timestamp:Date.now()})},truncate(r,s){if(s<0)throw new M.ErrnoError(28);var l;if(typeof r=="string"){var u=M.lookupPath(r,{follow:!0});l=u.node}else l=r;M.doTruncate(null,l,s)},ftruncate(r,s){var l=M.getStreamChecked(r);if(s<0||!(l.flags&2097155))throw new M.ErrnoError(28);M.doTruncate(l,l.node,s)},utime(r,s,l){var u=M.lookupPath(r,{follow:!0}),d=u.node,g=M.checkOpExists(d.node_ops.setattr,63);g(d,{atime:s,mtime:l})},open(r,s,l=438){if(r==="")throw new M.ErrnoError(44);s=typeof s=="string"?Qe(s):s,s&64?l=l&4095|32768:l=0;var u,d;if(typeof r=="object")u=r;else{d=r.endsWith("/");var g=M.lookupPath(r,{follow:!(s&131072),noent_okay:!0});u=g.node,r=g.path}var T=!1;if(s&64)if(u){if(s&128)throw new M.ErrnoError(20)}else{if(d)throw new M.ErrnoError(31);u=M.mknod(r,l|511,0),T=!0}if(!u)throw new M.ErrnoError(44);if(M.isChrdev(u.mode)&&(s&=-513),s&65536&&!M.isDir(u.mode))throw new M.ErrnoError(54);if(!T){var w=M.mayOpen(u,s);if(w)throw new M.ErrnoError(w)}s&512&&!T&&M.truncate(u,0),s&=-131713;var F=M.createStream({node:u,path:M.getPath(u),flags:s,seekable:!0,position:0,stream_ops:u.stream_ops,ungotten:[],error:!1});return F.stream_ops.open&&F.stream_ops.open(F),T&&M.chmod(u,l&511),t.logReadFiles&&!(s&1)&&(r in M.readFiles||(M.readFiles[r]=1)),F},close(r){if(M.isClosed(r))throw new M.ErrnoError(8);r.getdents&&(r.getdents=null);try{r.stream_ops.close&&r.stream_ops.close(r)}catch(s){throw s}finally{M.closeStream(r.fd)}r.fd=null},isClosed(r){return r.fd===null},llseek(r,s,l){if(M.isClosed(r))throw new M.ErrnoError(8);if(!r.seekable||!r.stream_ops.llseek)throw new M.ErrnoError(70);if(l!=0&&l!=1&&l!=2)throw new M.ErrnoError(28);return r.position=r.stream_ops.llseek(r,s,l),r.ungotten=[],r.position},read(r,s,l,u,d){if(D(l>=0),u<0||d<0)throw new M.ErrnoError(28);if(M.isClosed(r))throw new M.ErrnoError(8);if((r.flags&2097155)===1)throw new M.ErrnoError(8);if(M.isDir(r.node.mode))throw new M.ErrnoError(31);if(!r.stream_ops.read)throw new M.ErrnoError(28);var g=typeof d<"u";if(!g)d=r.position;else if(!r.seekable)throw new M.ErrnoError(70);var T=r.stream_ops.read(r,s,l,u,d);return g||(r.position+=T),T},write(r,s,l,u,d,g){if(D(l>=0),u<0||d<0)throw new M.ErrnoError(28);if(M.isClosed(r))throw new M.ErrnoError(8);if(!(r.flags&2097155))throw new M.ErrnoError(8);if(M.isDir(r.node.mode))throw new M.ErrnoError(31);if(!r.stream_ops.write)throw new M.ErrnoError(28);r.seekable&&r.flags&1024&&M.llseek(r,0,2);var T=typeof d<"u";if(!T)d=r.position;else if(!r.seekable)throw new M.ErrnoError(70);var w=r.stream_ops.write(r,s,l,u,d,g);return T||(r.position+=w),w},mmap(r,s,l,u,d){if(u&2&&!(d&2)&&(r.flags&2097155)!==2)throw new M.ErrnoError(2);if((r.flags&2097155)===1)throw new M.ErrnoError(2);if(!r.stream_ops.mmap)throw new M.ErrnoError(43);if(!s)throw new M.ErrnoError(28);return r.stream_ops.mmap(r,s,l,u,d)},msync(r,s,l,u,d){return D(l>=0),r.stream_ops.msync?r.stream_ops.msync(r,s,l,u,d):0},ioctl(r,s,l){if(!r.stream_ops.ioctl)throw new M.ErrnoError(59);return r.stream_ops.ioctl(r,s,l)},readFile(r,s={}){if(s.flags=s.flags||0,s.encoding=s.encoding||"binary",s.encoding!=="utf8"&&s.encoding!=="binary")throw new Error(`Invalid encoding type "${s.encoding}"`);var l=M.open(r,s.flags),u=M.stat(r),d=u.size,g=new Uint8Array(d);return M.read(l,g,0,d,0),s.encoding==="utf8"&&(g=ht(g)),M.close(l),g},writeFile(r,s,l={}){l.flags=l.flags||577;var u=M.open(r,l.flags,l.mode);if(typeof s=="string"&&(s=new Uint8Array(Ne(s))),ArrayBuffer.isView(s))M.write(u,s,0,s.byteLength,void 0,l.canOwn);else throw new Error("Unsupported data type");M.close(u)},cwd:()=>M.currentPath,chdir(r){var s=M.lookupPath(r,{follow:!0});if(s.node===null)throw new M.ErrnoError(44);if(!M.isDir(s.node.mode))throw new M.ErrnoError(54);var l=M.nodePermissions(s.node,"x");if(l)throw new M.ErrnoError(l);M.currentPath=s.path},createDefaultDirectories(){M.mkdir("/tmp"),M.mkdir("/home"),M.mkdir("/home/web_user")},createDefaultDevices(){M.mkdir("/dev"),M.registerDevice(M.makedev(1,3),{read:()=>0,write:(u,d,g,T,w)=>T,llseek:()=>0}),M.mkdev("/dev/null",M.makedev(1,3)),ke.register(M.makedev(5,0),ke.default_tty_ops),ke.register(M.makedev(6,0),ke.default_tty1_ops),M.mkdev("/dev/tty",M.makedev(5,0)),M.mkdev("/dev/tty1",M.makedev(6,0));var r=new Uint8Array(1024),s=0,l=()=>(s===0&&(K(r),s=r.byteLength),r[--s]);M.createDevice("/dev","random",l),M.createDevice("/dev","urandom",l),M.mkdir("/dev/shm"),M.mkdir("/dev/shm/tmp")},createSpecialDirectories(){M.mkdir("/proc");var r=M.mkdir("/proc/self");M.mkdir("/proc/self/fd"),M.mount({mount(){var s=M.createNode(r,"fd",16895,73);return s.stream_ops={llseek:Pe.stream_ops.llseek},s.node_ops={lookup(l,u){var d=+u,g=M.getStreamChecked(d),T={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>g.path},id:d+1};return T.parent=T,T},readdir(){return Array.from(M.streams.entries()).filter(([l,u])=>u).map(([l,u])=>l.toString())}},s}},{},"/proc/self/fd")},createStandardStreams(r,s,l){r?M.createDevice("/dev","stdin",r):M.symlink("/dev/tty","/dev/stdin"),s?M.createDevice("/dev","stdout",null,s):M.symlink("/dev/tty","/dev/stdout"),l?M.createDevice("/dev","stderr",null,l):M.symlink("/dev/tty1","/dev/stderr");var u=M.open("/dev/stdin",0),d=M.open("/dev/stdout",1),g=M.open("/dev/stderr",1);D(u.fd===0,`invalid handle for stdin (${u.fd})`),D(d.fd===1,`invalid handle for stdout (${d.fd})`),D(g.fd===2,`invalid handle for stderr (${g.fd})`)},staticInit(){M.nameTable=new Array(4096),M.mount(Pe,{},"/"),M.createDefaultDirectories(),M.createDefaultDevices(),M.createSpecialDirectories(),M.filesystems={MEMFS:Pe}},init(r,s,l){D(!M.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),M.initialized=!0,r??(r=t.stdin),s??(s=t.stdout),l??(l=t.stderr),M.createStandardStreams(r,s,l)},quit(){M.initialized=!1,_o(0);for(var r of M.streams)r&&M.close(r)},findObject(r,s){var l=M.analyzePath(r,s);return l.exists?l.object:null},analyzePath(r,s){try{var l=M.lookupPath(r,{follow:!s});r=l.path}catch{}var u={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var l=M.lookupPath(r,{parent:!0});u.parentExists=!0,u.parentPath=l.path,u.parentObject=l.node,u.name=Tt.basename(r),l=M.lookupPath(r,{follow:!s}),u.exists=!0,u.path=l.path,u.object=l.node,u.name=l.node.name,u.isRoot=l.path==="/"}catch(d){u.error=d.errno}return u},createPath(r,s,l,u){r=typeof r=="string"?r:M.getPath(r);for(var d=s.split("/").reverse();d.length;){var g=d.pop();if(g){var T=Tt.join2(r,g);try{M.mkdir(T)}catch(w){if(w.errno!=20)throw w}r=T}}return T},createFile(r,s,l,u,d){var g=Tt.join2(typeof r=="string"?r:M.getPath(r),s),T=Lt(u,d);return M.create(g,T)},createDataFile(r,s,l,u,d,g){var T=s;r&&(r=typeof r=="string"?r:M.getPath(r),T=s?Tt.join2(r,s):r);var w=Lt(u,d),F=M.create(T,w);if(l){if(typeof l=="string"){for(var $=new Array(l.length),Q=0,le=l.length;Q<le;++Q)$[Q]=l.charCodeAt(Q);l=$}M.chmod(F,w|146);var ge=M.open(F,577);M.write(ge,l,0,l.length,0,g),M.close(ge),M.chmod(F,w)}},createDevice(r,s,l,u){var w;var d=Tt.join2(typeof r=="string"?r:M.getPath(r),s),g=Lt(!!l,!!u);(w=M.createDevice).major??(w.major=64);var T=M.makedev(M.createDevice.major++,0);return M.registerDevice(T,{open(F){F.seekable=!1},close(F){var $;($=u==null?void 0:u.buffer)!=null&&$.length&&u(10)},read(F,$,Q,le,ge){for(var ce=0,Me=0;Me<le;Me++){var Xe;try{Xe=l()}catch{throw new M.ErrnoError(29)}if(Xe===void 0&&ce===0)throw new M.ErrnoError(6);if(Xe==null)break;ce++,$[Q+Me]=Xe}return ce&&(F.node.atime=Date.now()),ce},write(F,$,Q,le,ge){for(var ce=0;ce<le;ce++)try{u($[Q+ce])}catch{throw new M.ErrnoError(29)}return le&&(F.node.mtime=F.node.ctime=Date.now()),ce}}),M.mkdev(d,g,T)},forceLoadFile(r){if(r.isDevice||r.isFolder||r.link||r.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{r.contents=b(r.url),r.usedBytes=r.contents.length}catch{throw new M.ErrnoError(29)}},createLazyFile(r,s,l,u,d){class g{constructor(){An(this,"lengthKnown",!1);An(this,"chunks",[])}get(ce){if(!(ce>this.length-1||ce<0)){var Me=ce%this.chunkSize,Xe=ce/this.chunkSize|0;return this.getter(Xe)[Me]}}setDataGetter(ce){this.getter=ce}cacheLength(){var ce=new XMLHttpRequest;if(ce.open("HEAD",l,!1),ce.send(null),!(ce.status>=200&&ce.status<300||ce.status===304))throw new Error("Couldn't load "+l+". Status: "+ce.status);var Me=Number(ce.getResponseHeader("Content-length")),Xe,at=(Xe=ce.getResponseHeader("Accept-Ranges"))&&Xe==="bytes",lt=(Xe=ce.getResponseHeader("Content-Encoding"))&&Xe==="gzip",Ut=1024*1024;at||(Ut=Me);var yt=($t,on)=>{if($t>on)throw new Error("invalid range ("+$t+", "+on+") or no bytes requested!");if(on>Me-1)throw new Error("only "+Me+" bytes available! programmer error!");var Ft=new XMLHttpRequest;if(Ft.open("GET",l,!1),Me!==Ut&&Ft.setRequestHeader("Range","bytes="+$t+"-"+on),Ft.responseType="arraybuffer",Ft.overrideMimeType&&Ft.overrideMimeType("text/plain; charset=x-user-defined"),Ft.send(null),!(Ft.status>=200&&Ft.status<300||Ft.status===304))throw new Error("Couldn't load "+l+". Status: "+Ft.status);return Ft.response!==void 0?new Uint8Array(Ft.response||[]):Ne(Ft.responseText||"")},nn=this;nn.setDataGetter($t=>{var on=$t*Ut,Ft=($t+1)*Ut-1;if(Ft=Math.min(Ft,Me-1),typeof nn.chunks[$t]>"u"&&(nn.chunks[$t]=yt(on,Ft)),typeof nn.chunks[$t]>"u")throw new Error("doXHR failed!");return nn.chunks[$t]}),(lt||!Me)&&(Ut=Me=1,Me=this.getter(0).length,Ut=Me,N("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=Me,this._chunkSize=Ut,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!o)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var T=new g,w={isDevice:!1,contents:T}}else var w={isDevice:!1,url:l};var F=M.createFile(r,s,w,u,d);w.contents?F.contents=w.contents:w.url&&(F.contents=null,F.url=w.url),Object.defineProperties(F,{usedBytes:{get:function(){return this.contents.length}}});var $={},Q=Object.keys(F.stream_ops);Q.forEach(ge=>{var ce=F.stream_ops[ge];$[ge]=(...Me)=>(M.forceLoadFile(F),ce(...Me))});function le(ge,ce,Me,Xe,at){var lt=ge.node.contents;if(at>=lt.length)return 0;var Ut=Math.min(lt.length-at,Xe);if(D(Ut>=0),lt.slice)for(var yt=0;yt<Ut;yt++)ce[Me+yt]=lt[at+yt];else for(var yt=0;yt<Ut;yt++)ce[Me+yt]=lt.get(at+yt);return Ut}return $.read=(ge,ce,Me,Xe,at)=>(M.forceLoadFile(F),le(ge,ce,Me,Xe,at)),$.mmap=(ge,ce,Me,Xe,at)=>{M.forceLoadFile(F);var lt=tt();if(!lt)throw new M.ErrnoError(48);return le(ge,Ke,lt,ce,Me),{ptr:lt,allocated:!0}},F.stream_ops=$,F},absolutePath(){j("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder(){j("FS.createFolder has been removed; use FS.mkdir instead")},createLink(){j("FS.createLink has been removed; use FS.symlink instead")},joinPath(){j("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc(){j("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath(){j("FS.standardizePath has been removed; use PATH.normalize instead")}},ft={DEFAULT_POLLMASK:5,calculateAt(r,s,l){if(Tt.isAbs(s))return s;var u;if(r===-100)u=M.cwd();else{var d=ft.getStreamFromFD(r);u=d.path}if(s.length==0){if(!l)throw new M.ErrnoError(44);return u}return u+"/"+s},writeStat(r,s){ue[r>>2]=s.dev,ue[r+4>>2]=s.mode,we[r+8>>2]=s.nlink,ue[r+12>>2]=s.uid,ue[r+16>>2]=s.gid,ue[r+20>>2]=s.rdev,vt[r+24>>3]=BigInt(s.size),ue[r+32>>2]=4096,ue[r+36>>2]=s.blocks;var l=s.atime.getTime(),u=s.mtime.getTime(),d=s.ctime.getTime();return vt[r+40>>3]=BigInt(Math.floor(l/1e3)),we[r+48>>2]=l%1e3*1e3*1e3,vt[r+56>>3]=BigInt(Math.floor(u/1e3)),we[r+64>>2]=u%1e3*1e3*1e3,vt[r+72>>3]=BigInt(Math.floor(d/1e3)),we[r+80>>2]=d%1e3*1e3*1e3,vt[r+88>>3]=BigInt(s.ino),0},writeStatFs(r,s){ue[r+4>>2]=s.bsize,ue[r+40>>2]=s.bsize,ue[r+8>>2]=s.blocks,ue[r+12>>2]=s.bfree,ue[r+16>>2]=s.bavail,ue[r+20>>2]=s.files,ue[r+24>>2]=s.ffree,ue[r+28>>2]=s.fsid,ue[r+44>>2]=s.flags,ue[r+36>>2]=s.namelen},doMsync(r,s,l,u,d){if(!M.isFile(s.node.mode))throw new M.ErrnoError(43);if(u&2)return 0;var g=Ze.slice(r,r+l);M.msync(s,g,d,l,u)},getStreamFromFD(r){var s=M.getStreamChecked(r);return s},varargs:void 0,getStr(r){var s=rt(r);return s}};function Ei(r,s,l){try{var u=ft.getStreamFromFD(r);if(D(!l),u.fd===s)return-28;if(s<0||s>=M.MAX_OPEN_FDS)return-8;var d=M.getStream(s);return d&&M.close(d),M.dupStream(u,s).fd}catch(g){if(typeof M>"u"||g.name!=="ErrnoError")throw g;return-g.errno}}var Rt=()=>{D(ft.varargs!=null);var r=ue[+ft.varargs>>2];return ft.varargs+=4,r},Wt=Rt;function ln(r,s,l){ft.varargs=l;try{var u=ft.getStreamFromFD(r);switch(s){case 0:{var d=Rt();if(d<0)return-28;for(;M.streams[d];)d++;var g;return g=M.dupStream(u,d),g.fd}case 1:case 2:return 0;case 3:return u.flags;case 4:{var d=Rt();return u.flags|=d,0}case 12:{var d=Wt(),T=0;return se[d+T>>1]=2,0}case 13:case 14:return 0}return-28}catch(w){if(typeof M>"u"||w.name!=="ErrnoError")throw w;return-w.errno}}function Jt(r,s){try{return ft.writeStat(s,M.fstat(r))}catch(l){if(typeof M>"u"||l.name!=="ErrnoError")throw l;return-l.errno}}function tn(r,s,l){ft.varargs=l;try{var u=ft.getStreamFromFD(r);switch(s){case 21509:return u.tty?0:-59;case 21505:{if(!u.tty)return-59;if(u.tty.ops.ioctl_tcgets){var d=u.tty.ops.ioctl_tcgets(u),g=Wt();ue[g>>2]=d.c_iflag||0,ue[g+4>>2]=d.c_oflag||0,ue[g+8>>2]=d.c_cflag||0,ue[g+12>>2]=d.c_lflag||0;for(var T=0;T<32;T++)Ke[g+T+17]=d.c_cc[T]||0;return 0}return 0}case 21510:case 21511:case 21512:return u.tty?0:-59;case 21506:case 21507:case 21508:{if(!u.tty)return-59;if(u.tty.ops.ioctl_tcsets){for(var g=Wt(),w=ue[g>>2],F=ue[g+4>>2],$=ue[g+8>>2],Q=ue[g+12>>2],le=[],T=0;T<32;T++)le.push(Ke[g+T+17]);return u.tty.ops.ioctl_tcsets(u.tty,s,{c_iflag:w,c_oflag:F,c_cflag:$,c_lflag:Q,c_cc:le})}return 0}case 21519:{if(!u.tty)return-59;var g=Wt();return ue[g>>2]=0,0}case 21520:return u.tty?-28:-59;case 21531:{var g=Wt();return M.ioctl(u,s,g)}case 21523:{if(!u.tty)return-59;if(u.tty.ops.ioctl_tiocgwinsz){var ge=u.tty.ops.ioctl_tiocgwinsz(u.tty),g=Wt();se[g>>1]=ge[0],se[g+2>>1]=ge[1]}return 0}case 21524:return u.tty?0:-59;case 21515:return u.tty?0:-59;default:return-28}}catch(ce){if(typeof M>"u"||ce.name!=="ErrnoError")throw ce;return-ce.errno}}function Er(r,s){try{return r=ft.getStr(r),ft.writeStat(s,M.lstat(r))}catch(l){if(typeof M>"u"||l.name!=="ErrnoError")throw l;return-l.errno}}function jn(r,s,l,u){try{s=ft.getStr(s);var d=u&256,g=u&4096;return u=u&-6401,D(!u,`unknown flags in __syscall_newfstatat: ${u}`),s=ft.calculateAt(r,s,g),ft.writeStat(l,d?M.lstat(s):M.stat(s))}catch(T){if(typeof M>"u"||T.name!=="ErrnoError")throw T;return-T.errno}}function rh(r,s,l,u){ft.varargs=u;try{s=ft.getStr(s),s=ft.calculateAt(r,s);var d=u?Rt():0;return M.open(s,l,d).fd}catch(g){if(typeof M>"u"||g.name!=="ErrnoError")throw g;return-g.errno}}function sh(r,s){try{return r=ft.getStr(r),ft.writeStat(s,M.stat(r))}catch(l){if(typeof M>"u"||l.name!=="ErrnoError")throw l;return-l.errno}}var oh=()=>j("native code called abort()"),Xt=r=>{for(var s="";;){var l=Ze[r++];if(!l)return s;s+=String.fromCharCode(l)}},Gi={},Si={},Kr={},Sr=class extends Error{constructor(s){super(s),this.name="BindingError"}},mt=r=>{throw new Sr(r)};function ah(r,s,l={}){var u=s.name;if(r||mt(`type "${u}" must have a positive integer typeid pointer`),Si.hasOwnProperty(r)){if(l.ignoreDuplicateRegistrations)return;mt(`Cannot register type '${u}' twice`)}if(Si[r]=s,delete Kr[r],Gi.hasOwnProperty(r)){var d=Gi[r];delete Gi[r],d.forEach(g=>g())}}function yn(r,s,l={}){if(s.argPackAdvance===void 0)throw new TypeError("registerType registeredInstance requires argPackAdvance");return ah(r,s,l)}var ml=(r,s,l)=>{switch(s){case 1:return l?u=>Ke[u]:u=>Ze[u];case 2:return l?u=>se[u>>1]:u=>pe[u>>1];case 4:return l?u=>ue[u>>2]:u=>we[u>>2];case 8:return l?u=>vt[u>>3]:u=>k[u>>3];default:throw new TypeError(`invalid integer width (${s}): ${r}`)}},Mi=r=>{if(r===null)return"null";var s=typeof r;return s==="object"||s==="array"||s==="function"?r.toString():""+r},_l=(r,s,l,u)=>{if(s<l||s>u)throw new TypeError(`Passing a number "${Mi(s)}" from JS side to C/C++ side to an argument of type "${r}", which is outside the valid range [${l}, ${u}]!`)},lh=(r,s,l,u,d)=>{s=Xt(s);const g=u===0n;let T=w=>w;if(g){const w=l*8;T=F=>BigInt.asUintN(w,F),d=T(d)}yn(r,{name:s,fromWireType:T,toWireType:(w,F)=>{if(typeof F=="number")F=BigInt(F);else if(typeof F!="bigint")throw new TypeError(`Cannot convert "${Mi(F)}" to ${this.name}`);return _l(s,F,u,d),F},argPackAdvance:On,readValueFromPointer:ml(s,l,!g),destructorFunction:null})},On=8,ch=(r,s,l,u)=>{s=Xt(s),yn(r,{name:s,fromWireType:function(d){return!!d},toWireType:function(d,g){return g?l:u},argPackAdvance:On,readValueFromPointer:function(d){return this.fromWireType(Ze[d])},destructorFunction:null})},uh=r=>({count:r.count,deleteScheduled:r.deleteScheduled,preservePointerOnDelete:r.preservePointerOnDelete,ptr:r.ptr,ptrType:r.ptrType,smartPtr:r.smartPtr,smartPtrType:r.smartPtrType}),so=r=>{function s(l){return l.$$.ptrType.registeredClass.name}mt(s(r)+" instance already deleted")},oo=!1,gl=r=>{},hh=r=>{r.smartPtr?r.smartPtrType.rawDestructor(r.smartPtr):r.ptrType.registeredClass.rawDestructor(r.ptr)},vl=r=>{r.count.value-=1;var s=r.count.value===0;s&&hh(r)},xl=(r,s,l)=>{if(s===l)return r;if(l.baseClass===void 0)return null;var u=xl(r,s,l.baseClass);return u===null?null:l.downcast(u)},yl={},fh={},dh=(r,s)=>{for(s===void 0&&mt("ptr should not be undefined");r.baseClass;)s=r.upcast(s),r=r.baseClass;return s},ph=(r,s)=>(s=dh(r,s),fh[s]),mh=class extends Error{constructor(s){super(s),this.name="InternalError"}},Zr=r=>{throw new mh(r)},Jr=(r,s)=>{(!s.ptrType||!s.ptr)&&Zr("makeClassHandle requires ptr and ptrType");var l=!!s.smartPtrType,u=!!s.smartPtr;return l!==u&&Zr("Both smartPtrType and smartPtr must be specified"),s.count={value:1},Mr(Object.create(r,{$$:{value:s,writable:!0}}))};function El(r){var s=this.getPointee(r);if(!s)return this.destructor(r),null;var l=ph(this.registeredClass,s);if(l!==void 0){if(l.$$.count.value===0)return l.$$.ptr=s,l.$$.smartPtr=r,l.clone();var u=l.clone();return this.destructor(r),u}function d(){return this.isSmartPointer?Jr(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:s,smartPtrType:this,smartPtr:r}):Jr(this.registeredClass.instancePrototype,{ptrType:this,ptr:r})}var g=this.registeredClass.getActualType(s),T=yl[g];if(!T)return d.call(this);var w;this.isConst?w=T.constPointerType:w=T.pointerType;var F=xl(s,this.registeredClass,w.registeredClass);return F===null?d.call(this):this.isSmartPointer?Jr(w.registeredClass.instancePrototype,{ptrType:w,ptr:F,smartPtrType:this,smartPtr:r}):Jr(w.registeredClass.instancePrototype,{ptrType:w,ptr:F})}var Mr=r=>typeof FinalizationRegistry>"u"?(Mr=s=>s,r):(oo=new FinalizationRegistry(s=>{console.warn(s.leakWarning),vl(s.$$)}),Mr=s=>{var l=s.$$,u=!!l.smartPtr;if(u){var d={$$:l},g=l.ptrType.registeredClass,T=new Error(`Embind found a leaked C++ instance ${g.name} <${Ie(l.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);"captureStackTrace"in Error&&Error.captureStackTrace(T,El),d.leakWarning=T.stack.replace(/^Error: /,""),oo.register(s,d,s)}return s},gl=s=>oo.unregister(s),Mr(r)),_h=()=>{let r=Qr.prototype;Object.assign(r,{isAliasOf(l){if(!(this instanceof Qr)||!(l instanceof Qr))return!1;var u=this.$$.ptrType.registeredClass,d=this.$$.ptr;l.$$=l.$$;for(var g=l.$$.ptrType.registeredClass,T=l.$$.ptr;u.baseClass;)d=u.upcast(d),u=u.baseClass;for(;g.baseClass;)T=g.upcast(T),g=g.baseClass;return u===g&&d===T},clone(){if(this.$$.ptr||so(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var l=Mr(Object.create(Object.getPrototypeOf(this),{$$:{value:uh(this.$$)}}));return l.$$.count.value+=1,l.$$.deleteScheduled=!1,l},delete(){this.$$.ptr||so(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&mt("Object already scheduled for deletion"),gl(this),vl(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||so(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&mt("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const s=Symbol.dispose;s&&(r[s]=r.delete)};function Qr(){}var es=(r,s)=>Object.defineProperty(s,"name",{value:r}),ao=(r,s,l)=>{if(r[s].overloadTable===void 0){var u=r[s];r[s]=function(...d){return r[s].overloadTable.hasOwnProperty(d.length)||mt(`Function '${l}' called with an invalid number of arguments (${d.length}) - expects one of (${r[s].overloadTable})!`),r[s].overloadTable[d.length].apply(this,d)},r[s].overloadTable=[],r[s].overloadTable[u.argCount]=u}},lo=(r,s,l)=>{t.hasOwnProperty(r)?((l===void 0||t[r].overloadTable!==void 0&&t[r].overloadTable[l]!==void 0)&&mt(`Cannot register public name '${r}' twice`),ao(t,r,r),t[r].overloadTable.hasOwnProperty(l)&&mt(`Cannot register multiple overloads of a function with the same number of arguments (${l})!`),t[r].overloadTable[l]=s):(t[r]=s,t[r].argCount=l)},gh=48,vh=57,xh=r=>{D(typeof r=="string"),r=r.replace(/[^a-zA-Z0-9_]/g,"$");var s=r.charCodeAt(0);return s>=gh&&s<=vh?`_${r}`:r};function yh(r,s,l,u,d,g,T,w){this.name=r,this.constructor=s,this.instancePrototype=l,this.rawDestructor=u,this.baseClass=d,this.getActualType=g,this.upcast=T,this.downcast=w,this.pureVirtualFunctions=[]}var ts=(r,s,l)=>{for(;s!==l;)s.upcast||mt(`Expected null or instance of ${l.name}, got an instance of ${s.name}`),r=s.upcast(r),s=s.baseClass;return r};function Eh(r,s){if(s===null)return this.isReference&&mt(`null is not a valid ${this.name}`),0;s.$$||mt(`Cannot pass "${Mi(s)}" as a ${this.name}`),s.$$.ptr||mt(`Cannot pass deleted object as a pointer of type ${this.name}`);var l=s.$$.ptrType.registeredClass,u=ts(s.$$.ptr,l,this.registeredClass);return u}function Sh(r,s){var l;if(s===null)return this.isReference&&mt(`null is not a valid ${this.name}`),this.isSmartPointer?(l=this.rawConstructor(),r!==null&&r.push(this.rawDestructor,l),l):0;(!s||!s.$$)&&mt(`Cannot pass "${Mi(s)}" as a ${this.name}`),s.$$.ptr||mt(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&s.$$.ptrType.isConst&&mt(`Cannot convert argument of type ${s.$$.smartPtrType?s.$$.smartPtrType.name:s.$$.ptrType.name} to parameter type ${this.name}`);var u=s.$$.ptrType.registeredClass;if(l=ts(s.$$.ptr,u,this.registeredClass),this.isSmartPointer)switch(s.$$.smartPtr===void 0&&mt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:s.$$.smartPtrType===this?l=s.$$.smartPtr:mt(`Cannot convert argument of type ${s.$$.smartPtrType?s.$$.smartPtrType.name:s.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:l=s.$$.smartPtr;break;case 2:if(s.$$.smartPtrType===this)l=s.$$.smartPtr;else{var d=s.clone();l=this.rawShare(l,Ht.toHandle(()=>d.delete())),r!==null&&r.push(this.rawDestructor,l)}break;default:mt("Unsupporting sharing policy")}return l}function Mh(r,s){if(s===null)return this.isReference&&mt(`null is not a valid ${this.name}`),0;s.$$||mt(`Cannot pass "${Mi(s)}" as a ${this.name}`),s.$$.ptr||mt(`Cannot pass deleted object as a pointer of type ${this.name}`),s.$$.ptrType.isConst&&mt(`Cannot convert argument of type ${s.$$.ptrType.name} to parameter type ${this.name}`);var l=s.$$.ptrType.registeredClass,u=ts(s.$$.ptr,l,this.registeredClass);return u}function ns(r){return this.fromWireType(we[r>>2])}var Th=()=>{Object.assign(is.prototype,{getPointee(r){return this.rawGetPointee&&(r=this.rawGetPointee(r)),r},destructor(r){var s;(s=this.rawDestructor)==null||s.call(this,r)},argPackAdvance:On,readValueFromPointer:ns,fromWireType:El})};function is(r,s,l,u,d,g,T,w,F,$,Q){this.name=r,this.registeredClass=s,this.isReference=l,this.isConst=u,this.isSmartPointer=d,this.pointeeType=g,this.sharingPolicy=T,this.rawGetPointee=w,this.rawConstructor=F,this.rawShare=$,this.rawDestructor=Q,!d&&s.baseClass===void 0?u?(this.toWireType=Eh,this.destructorFunction=null):(this.toWireType=Mh,this.destructorFunction=null):this.toWireType=Sh}var Sl=(r,s,l)=>{t.hasOwnProperty(r)||Zr("Replacing nonexistent public symbol"),t[r].overloadTable!==void 0&&l!==void 0?t[r].overloadTable[l]=s:(t[r]=s,t[r].argCount=l)},Ml=[],rs,Te=r=>{var s=Ml[r];return s||(Ml[r]=s=rs.get(r)),D(rs.get(r)==s,"JavaScript-side Wasm function table mirror is out of date!"),s},kn=(r,s,l=!1)=>{D(!l,"Async bindings are only supported with JSPI."),r=Xt(r);function u(){var g=Te(s);return g}var d=u();return typeof d!="function"&&mt(`unknown function pointer with signature ${r}: ${s}`),d};class wh extends Error{}var Tl=r=>{var s=Gl(r),l=Xt(s);return zn(s),l},Ti=(r,s)=>{var l=[],u={};function d(g){if(!u[g]&&!Si[g]){if(Kr[g]){Kr[g].forEach(d);return}l.push(g),u[g]=!0}}throw s.forEach(d),new wh(`${r}: `+l.map(Tl).join([", "]))},bn=(r,s,l)=>{r.forEach(w=>Kr[w]=s);function u(w){var F=l(w);F.length!==r.length&&Zr("Mismatched type converter count");for(var $=0;$<r.length;++$)yn(r[$],F[$])}var d=new Array(s.length),g=[],T=0;s.forEach((w,F)=>{Si.hasOwnProperty(w)?d[F]=Si[w]:(g.push(w),Gi.hasOwnProperty(w)||(Gi[w]=[]),Gi[w].push(()=>{d[F]=Si[w],++T,T===g.length&&u(d)}))}),g.length===0&&u(d)},bh=(r,s,l,u,d,g,T,w,F,$,Q,le,ge)=>{Q=Xt(Q),g=kn(d,g),w&&(w=kn(T,w)),$&&($=kn(F,$)),ge=kn(le,ge);var ce=xh(Q);lo(ce,function(){Ti(`Cannot construct ${Q} due to unbound types`,[u])}),bn([r,s,l],u?[u]:[],Me=>{var Ft;Me=Me[0];var Xe,at;u?(Xe=Me.registeredClass,at=Xe.instancePrototype):at=Qr.prototype;var lt=es(Q,function(...ii){if(Object.getPrototypeOf(this)!==Ut)throw new Sr(`Use 'new' to construct ${Q}`);if(yt.constructor_body===void 0)throw new Sr(`${Q} has no accessible constructor`);var hs=yt.constructor_body[ii.length];if(hs===void 0)throw new Sr(`Tried to invoke ctor of ${Q} with invalid number of parameters (${ii.length}) - expected (${Object.keys(yt.constructor_body).toString()}) parameters instead!`);return hs.apply(this,ii)}),Ut=Object.create(at,{constructor:{value:lt}});lt.prototype=Ut;var yt=new yh(Q,lt,Ut,ge,Xe,g,w,$);yt.baseClass&&((Ft=yt.baseClass).__derivedClasses??(Ft.__derivedClasses=[]),yt.baseClass.__derivedClasses.push(yt));var nn=new is(Q,yt,!0,!1,!1),$t=new is(Q+"*",yt,!1,!1,!1),on=new is(Q+" const*",yt,!1,!0,!1);return yl[r]={pointerType:$t,constPointerType:on},Sl(ce,lt),[nn,$t,on]})},co=r=>{for(;r.length;){var s=r.pop(),l=r.pop();l(s)}};function wl(r){for(var s=1;s<r.length;++s)if(r[s]!==null&&r[s].destructorFunction===void 0)return!0;return!1}function Ah(r,s,l,u,d){if(r<s||r>l){var g=s==l?s:`${s} to ${l}`;d(`function ${u} called with ${r} arguments, expected ${g}`)}}function Rh(r,s,l,u){var d=wl(r),g=r.length-2,T=[],w=["fn"];s&&w.push("thisWired");for(var F=0;F<g;++F)T.push(`arg${F}`),w.push(`arg${F}Wired`);T=T.join(","),w=w.join(",");var $=`return function (${T}) {
`;$+=`checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`,d&&($+=`var destructors = [];
`);var Q=d?"destructors":"null",le=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];s&&($+=`var thisWired = classParam['toWireType'](${Q}, this);
`);for(var F=0;F<g;++F)$+=`var arg${F}Wired = argType${F}['toWireType'](${Q}, arg${F});
`,le.push(`argType${F}`);if($+=(l||u?"var rv = ":"")+`invoker(${w});
`,d)$+=`runDestructors(destructors);
`;else for(var F=s?1:2;F<r.length;++F){var ge=F===1?"thisWired":"arg"+(F-2)+"Wired";r[F].destructorFunction!==null&&($+=`${ge}_dtor(${ge});
`,le.push(`${ge}_dtor`))}return l&&($+=`var ret = retType['fromWireType'](rv);
return ret;
`),$+=`}
`,le.push("checkArgCount","minArgs","maxArgs"),$=`if (arguments.length !== ${le.length}){ throw new Error(humanName + "Expected ${le.length} closure arguments " + arguments.length + " given."); }
${$}`,[le,$]}function Ch(r){for(var s=r.length-2,l=r.length-1;l>=2&&r[l].optional;--l)s--;return s}function ss(r,s,l,u,d,g){var T=s.length;T<2&&mt("argTypes array size mismatch! Must at least get return value and 'this' types!"),D(!g,"Async bindings are only supported with JSPI.");for(var w=s[1]!==null&&l!==null,F=wl(s),$=s[0].name!=="void",Q=T-2,le=Ch(s),ge=[r,mt,u,d,co,s[0],s[1]],ce=0;ce<T-2;++ce)ge.push(s[ce+2]);if(!F)for(var ce=w?1:2;ce<s.length;++ce)s[ce].destructorFunction!==null&&ge.push(s[ce].destructorFunction);ge.push(Ah,le,Q);let[Me,Xe]=Rh(s,w,$,g);var at=new Function(...Me,Xe)(...ge);return es(r,at)}var os=(r,s)=>{for(var l=[],u=0;u<r;u++)l.push(we[s+u*4>>2]);return l},uo=r=>{r=r.trim();const s=r.indexOf("(");return s===-1?r:(D(r.endsWith(")"),"Parentheses for argument names should match."),r.slice(0,s))},Ph=(r,s,l,u,d,g,T,w,F)=>{var $=os(l,u);s=Xt(s),s=uo(s),g=kn(d,g,w),bn([],[r],Q=>{Q=Q[0];var le=`${Q.name}.${s}`;function ge(){Ti(`Cannot call ${le} due to unbound types`,$)}s.startsWith("@@")&&(s=Symbol[s.substring(2)]);var ce=Q.registeredClass.constructor;return ce[s]===void 0?(ge.argCount=l-1,ce[s]=ge):(ao(ce,s,le),ce[s].overloadTable[l-1]=ge),bn([],$,Me=>{var Xe=[Me[0],null].concat(Me.slice(1)),at=ss(le,Xe,null,g,T,w);if(ce[s].overloadTable===void 0?(at.argCount=l-1,ce[s]=at):ce[s].overloadTable[l-1]=at,Q.registeredClass.__derivedClasses)for(const lt of Q.registeredClass.__derivedClasses)lt.constructor.hasOwnProperty(s)||(lt.constructor[s]=at);return[]}),[]})},Dh=(r,s,l,u,d,g)=>{D(s>0);var T=os(s,l);d=kn(u,d),bn([],[r],w=>{w=w[0];var F=`constructor ${w.name}`;if(w.registeredClass.constructor_body===void 0&&(w.registeredClass.constructor_body=[]),w.registeredClass.constructor_body[s-1]!==void 0)throw new Sr(`Cannot register multiple constructors with identical number of parameters (${s-1}) for class '${w.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return w.registeredClass.constructor_body[s-1]=()=>{Ti(`Cannot construct ${w.name} due to unbound types`,T)},bn([],T,$=>($.splice(1,0,null),w.registeredClass.constructor_body[s-1]=ss(F,$,null,d,g),[])),[]})},Lh=(r,s,l,u,d,g,T,w,F,$)=>{var Q=os(l,u);s=Xt(s),s=uo(s),g=kn(d,g,F),bn([],[r],le=>{le=le[0];var ge=`${le.name}.${s}`;s.startsWith("@@")&&(s=Symbol[s.substring(2)]),w&&le.registeredClass.pureVirtualFunctions.push(s);function ce(){Ti(`Cannot call ${ge} due to unbound types`,Q)}var Me=le.registeredClass.instancePrototype,Xe=Me[s];return Xe===void 0||Xe.overloadTable===void 0&&Xe.className!==le.name&&Xe.argCount===l-2?(ce.argCount=l-2,ce.className=le.name,Me[s]=ce):(ao(Me,s,ge),Me[s].overloadTable[l-2]=ce),bn([],Q,at=>{var lt=ss(ge,at,le,g,T,F);return Me[s].overloadTable===void 0?(lt.argCount=l-2,Me[s]=lt):Me[s].overloadTable[l-2]=lt,[]}),[]})},bl=(r,s,l)=>(r instanceof Object||mt(`${l} with invalid "this": ${r}`),r instanceof s.registeredClass.constructor||mt(`${l} incompatible with "this" of type ${r.constructor.name}`),r.$$.ptr||mt(`cannot call emscripten binding method ${l} on deleted object`),ts(r.$$.ptr,r.$$.ptrType.registeredClass,s.registeredClass)),Fh=(r,s,l,u,d,g,T,w,F,$)=>{s=Xt(s),d=kn(u,d),bn([],[r],Q=>{Q=Q[0];var le=`${Q.name}.${s}`,ge={get(){Ti(`Cannot access ${le} due to unbound types`,[l,T])},enumerable:!0,configurable:!0};return F?ge.set=()=>Ti(`Cannot access ${le} due to unbound types`,[l,T]):ge.set=ce=>mt(le+" is a read-only property"),Object.defineProperty(Q.registeredClass.instancePrototype,s,ge),bn([],F?[l,T]:[l],ce=>{var Me=ce[0],Xe={get(){var lt=bl(this,Q,le+" getter");return Me.fromWireType(d(g,lt))},enumerable:!0};if(F){F=kn(w,F);var at=ce[1];Xe.set=function(lt){var Ut=bl(this,Q,le+" setter"),yt=[];F($,Ut,at.toWireType(yt,lt)),co(yt)}}return Object.defineProperty(Q.registeredClass.instancePrototype,s,Xe),[]}),[]})},Ih=(r,s,l)=>{r=Xt(r),bn([],[s],u=>(u=u[0],t[r]=u.fromWireType(l),[]))},Al=[],Bn=[0,1,,1,null,1,!0,1,!1,1],ho=r=>{r>9&&--Bn[r+1]===0&&(D(Bn[r]!==void 0,"Decref for unallocated handle."),Bn[r]=void 0,Al.push(r))},Ht={toValue:r=>(r||mt(`Cannot use deleted val. handle = ${r}`),D(r===2||Bn[r]!==void 0&&r%2===0,`invalid handle: ${r}`),Bn[r]),toHandle:r=>{switch(r){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const s=Al.pop()||Bn.length;return Bn[s]=r,Bn[s+1]=1,s}}}},Rl={name:"emscripten::val",fromWireType:r=>{var s=Ht.toValue(r);return ho(r),s},toWireType:(r,s)=>Ht.toHandle(s),argPackAdvance:On,readValueFromPointer:ns,destructorFunction:null},Cl=r=>yn(r,Rl),Uh=(r,s,l)=>{switch(s){case 1:return l?function(u){return this.fromWireType(Ke[u])}:function(u){return this.fromWireType(Ze[u])};case 2:return l?function(u){return this.fromWireType(se[u>>1])}:function(u){return this.fromWireType(pe[u>>1])};case 4:return l?function(u){return this.fromWireType(ue[u>>2])}:function(u){return this.fromWireType(we[u>>2])};default:throw new TypeError(`invalid integer width (${s}): ${r}`)}},Nh=(r,s,l,u)=>{s=Xt(s);function d(){}d.values={},yn(r,{name:s,constructor:d,fromWireType:function(g){return this.constructor.values[g]},toWireType:(g,T)=>T.value,argPackAdvance:On,readValueFromPointer:Uh(s,l,u),destructorFunction:null}),lo(s,d)},Tr=(r,s)=>{var l=Si[r];return l===void 0&&mt(`${s} has unknown type ${Tl(r)}`),l},Oh=(r,s,l)=>{var u=Tr(r,"enum");s=Xt(s);var d=u.constructor,g=Object.create(u.constructor.prototype,{value:{value:l},constructor:{value:es(`${u.name}_${s}`,function(){})}});d.values[l]=g,d[s]=g},kh=(r,s)=>{switch(s){case 4:return function(l){return this.fromWireType(We[l>>2])};case 8:return function(l){return this.fromWireType(it[l>>3])};default:throw new TypeError(`invalid float width (${s}): ${r}`)}},Bh=(r,s,l)=>{s=Xt(s),yn(r,{name:s,fromWireType:u=>u,toWireType:(u,d)=>{if(typeof d!="number"&&typeof d!="boolean")throw new TypeError(`Cannot convert ${Mi(d)} to ${this.name}`);return d},argPackAdvance:On,readValueFromPointer:kh(s,l),destructorFunction:null})},zh=(r,s,l,u,d,g,T,w)=>{var F=os(s,l);r=Xt(r),r=uo(r),d=kn(u,d,T),lo(r,function(){Ti(`Cannot call ${r} due to unbound types`,F)},s-1),bn([],F,$=>{var Q=[$[0],null].concat($.slice(1));return Sl(r,ss(r,Q,null,d,g,T),s-1),[]})},Hh=(r,s,l,u,d)=>{s=Xt(s);const g=u===0;let T=F=>F;if(g){var w=32-8*l;T=F=>F<<w>>>w,d=T(d)}yn(r,{name:s,fromWireType:T,toWireType:(F,$)=>{if(typeof $!="number"&&typeof $!="boolean")throw new TypeError(`Cannot convert "${Mi($)}" to ${s}`);return _l(s,$,u,d),$},argPackAdvance:On,readValueFromPointer:ml(s,l,u!==0),destructorFunction:null})},Vh=(r,s,l)=>{var u=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],d=u[s];function g(T){var w=we[T>>2],F=we[T+4>>2];return new d(Ke.buffer,F,w)}l=Xt(l),yn(r,{name:l,fromWireType:g,argPackAdvance:On,readValueFromPointer:g},{ignoreDuplicateRegistrations:!0})},Gh=Object.assign({optional:!0},Rl),Wh=(r,s)=>{yn(r,Gh)},wi=(r,s,l)=>(D(typeof l=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),Ae(r,Ze,s,l)),Xh=(r,s)=>{s=Xt(s),yn(r,{name:s,fromWireType(l){for(var u=we[l>>2],d=l+4,g,T,w=d,T=0;T<=u;++T){var F=d+T;if(T==u||Ze[F]==0){var $=F-w,Q=rt(w,$);g===void 0?g=Q:(g+="\0",g+=Q),w=F+1}}return zn(l),g},toWireType(l,u){u instanceof ArrayBuffer&&(u=new Uint8Array(u));var d,g=typeof u=="string";g||ArrayBuffer.isView(u)&&u.BYTES_PER_ELEMENT==1||mt("Cannot pass non-string to std::string"),g?d=Z(u):d=u.length;var T=mo(4+d+1),w=T+4;return we[T>>2]=d,g?wi(u,w,d+1):Ze.set(u,w),l!==null&&l.push(zn,T),T},argPackAdvance:On,readValueFromPointer:ns,destructorFunction(l){zn(l)}})},Pl=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,$h=(r,s)=>{D(r%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var l=r>>1,u=l+s/2,d=l;!(d>=u)&&pe[d];)++d;if(d-l>16&&Pl)return Pl.decode(pe.subarray(l,d));for(var g="",T=l;!(T>=u);++T){var w=pe[T];if(w==0)break;g+=String.fromCharCode(w)}return g},qh=(r,s,l)=>{if(D(s%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),D(typeof l=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),l??(l=2147483647),l<2)return 0;l-=2;for(var u=s,d=l<r.length*2?l/2:r.length,g=0;g<d;++g){var T=r.charCodeAt(g);se[s>>1]=T,s+=2}return se[s>>1]=0,s-u},jh=r=>r.length*2,Yh=(r,s)=>{D(r%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var l="",u=0;!(u>=s/4);u++){var d=ue[r+u*4>>2];if(!d)break;l+=String.fromCodePoint(d)}return l},Kh=(r,s,l)=>{if(D(s%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),D(typeof l=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),l??(l=2147483647),l<4)return 0;for(var u=s,d=u+l-4,g=0;g<r.length;++g){var T=r.codePointAt(g);if(T>65535&&g++,ue[s>>2]=T,s+=4,s+4>d)break}return ue[s>>2]=0,s-u},Zh=r=>{for(var s=0,l=0;l<r.length;++l){var u=r.codePointAt(l);u>65535&&l++,s+=4}return s},Jh=(r,s,l)=>{l=Xt(l);var u,d,g,T;s===2?(u=$h,d=qh,T=jh,g=w=>pe[w>>1]):s===4&&(u=Yh,d=Kh,T=Zh,g=w=>we[w>>2]),yn(r,{name:l,fromWireType:w=>{for(var F=we[w>>2],$,Q=w+4,le=0;le<=F;++le){var ge=w+4+le*s;if(le==F||g(ge)==0){var ce=ge-Q,Me=u(Q,ce);$===void 0?$=Me:($+="\0",$+=Me),Q=ge+s}}return zn(w),$},toWireType:(w,F)=>{typeof F!="string"&&mt(`Cannot pass non-string to C++ string type ${l}`);var $=T(F),Q=mo(4+$+s);return we[Q>>2]=$/s,d(F,Q+4,$+s),w!==null&&w.push(zn,Q),Q},argPackAdvance:On,readValueFromPointer:ns,destructorFunction(w){zn(w)}})},Qh=(r,s)=>{Cl(r)},ef=(r,s)=>{s=Xt(s),yn(r,{isVoid:!0,name:s,argPackAdvance:0,fromWireType:()=>{},toWireType:(l,u)=>{}})},tf=()=>{throw new H},Dl=(r,s,l)=>{var u=[],d=r.toWireType(u,l);return u.length&&(we[s>>2]=Ht.toHandle(u)),d},nf=(r,s,l)=>(r=Ht.toValue(r),s=Tr(s,"emval::as"),Dl(s,l,r)),rf=(r,s)=>(r=Ht.toValue(r),s=Tr(s,"emval::as"),s.toWireType(null,r)),as=[],sf=(r,s,l,u)=>(r=as[r],s=Ht.toValue(s),r(null,s,l,u)),of={},fo=r=>{var s=of[r];return s===void 0?Xt(r):s},af=(r,s,l,u,d)=>(r=as[r],s=Ht.toValue(s),l=fo(l),r(s,s[l],u,d)),Ll=()=>globalThis,lf=r=>r===0?Ht.toHandle(Ll()):(r=fo(r),Ht.toHandle(Ll()[r])),cf=r=>{var s=as.length;return as.push(r),s},uf=(r,s)=>{for(var l=new Array(r),u=0;u<r;++u)l[u]=Tr(we[s+u*4>>2],`parameter ${u}`);return l},hf=(r,s,l)=>{var u=uf(r,s),d=u.shift();r--;var g=`return function (obj, func, destructorsRef, args) {
`,T=0,w=[];l===0&&w.push("obj");for(var F=["retType"],$=[d],Q=0;Q<r;++Q)w.push(`arg${Q}`),F.push(`argType${Q}`),$.push(u[Q]),g+=`  var arg${Q} = argType${Q}.readValueFromPointer(args${T?"+"+T:""});
`,T+=u[Q].argPackAdvance;var le=l===1?"new func":"func.call";g+=`  var rv = ${le}(${w.join(", ")});
`,d.isVoid||(F.push("emval_returnValue"),$.push(Dl),g+=`  return emval_returnValue(retType, destructorsRef, rv);
`),g+=`};
`;var ge=new Function(...F,g)(...$),ce=`methodCaller<(${u.map(Me=>Me.name).join(", ")}) => ${d.name}>`;return cf(es(ce,ge))},ff=(r,s)=>(r=Ht.toValue(r),s=Ht.toValue(s),Ht.toHandle(r[s])),df=r=>{r>9&&(Bn[r+1]+=1)},pf=r=>(r=Ht.toValue(r),typeof r=="number"),mf=r=>(r=Ht.toValue(r),typeof r=="string"),_f=()=>Ht.toHandle([]),gf=r=>Ht.toHandle(fo(r)),vf=r=>{var s=Ht.toValue(r);co(s),ho(r)},xf=(r,s)=>{r=Tr(r,"_emval_take_value");var l=r.readValueFromPointer(s);return Ht.toHandle(l)},yf=r=>{throw r=Ht.toValue(r),r},Ef=r=>r%4===0&&(r%100!==0||r%400===0),Sf=[0,31,60,91,121,152,182,213,244,274,305,335],Mf=[0,31,59,90,120,151,181,212,243,273,304,334],Fl=r=>{var s=Ef(r.getFullYear()),l=s?Sf:Mf,u=l[r.getMonth()]+r.getDate()-1;return u},Tf=9007199254740992,wf=-9007199254740992,Il=r=>r<wf||r>Tf?NaN:Number(r);function bf(r,s){r=Il(r);var l=new Date(r*1e3);ue[s>>2]=l.getSeconds(),ue[s+4>>2]=l.getMinutes(),ue[s+8>>2]=l.getHours(),ue[s+12>>2]=l.getDate(),ue[s+16>>2]=l.getMonth(),ue[s+20>>2]=l.getFullYear()-1900,ue[s+24>>2]=l.getDay();var u=Fl(l)|0;ue[s+28>>2]=u,ue[s+36>>2]=-(l.getTimezoneOffset()*60);var d=new Date(l.getFullYear(),0,1),g=new Date(l.getFullYear(),6,1).getTimezoneOffset(),T=d.getTimezoneOffset(),w=(g!=T&&l.getTimezoneOffset()==Math.min(T,g))|0;ue[s+32>>2]=w}var Af=function(r){var s=(()=>{var l=new Date(ue[r+20>>2]+1900,ue[r+16>>2],ue[r+12>>2],ue[r+8>>2],ue[r+4>>2],ue[r>>2],0),u=ue[r+32>>2],d=l.getTimezoneOffset(),g=new Date(l.getFullYear(),0,1),T=new Date(l.getFullYear(),6,1).getTimezoneOffset(),w=g.getTimezoneOffset(),F=Math.min(w,T);if(u<0)ue[r+32>>2]=+(T!=w&&F==d);else if(u>0!=(F==d)){var $=Math.max(w,T),Q=u>0?F:$;l.setTime(l.getTime()+(Q-d)*6e4)}ue[r+24>>2]=l.getDay();var le=Fl(l)|0;ue[r+28>>2]=le,ue[r>>2]=l.getSeconds(),ue[r+4>>2]=l.getMinutes(),ue[r+8>>2]=l.getHours(),ue[r+12>>2]=l.getDate(),ue[r+16>>2]=l.getMonth(),ue[r+20>>2]=l.getYear();var ge=l.getTime();return isNaN(ge)?-1:ge/1e3})();return BigInt(s)},Rf=(r,s,l,u)=>{var d=new Date().getFullYear(),g=new Date(d,0,1),T=new Date(d,6,1),w=g.getTimezoneOffset(),F=T.getTimezoneOffset(),$=Math.max(w,F);we[r>>2]=$*60,ue[s>>2]=+(w!=F);var Q=ce=>{var Me=ce>=0?"-":"+",Xe=Math.abs(ce),at=String(Math.floor(Xe/60)).padStart(2,"0"),lt=String(Xe%60).padStart(2,"0");return`UTC${Me}${at}${lt}`},le=Q(w),ge=Q(F);D(le),D(ge),D(Z(le)<=16,`timezone name truncated to fit in TZNAME_MAX (${le})`),D(Z(ge)<=16,`timezone name truncated to fit in TZNAME_MAX (${ge})`),F<w?(wi(le,l,17),wi(ge,u,17)):(wi(le,u,17),wi(ge,l,17))},Ul=()=>performance.now(),Nl=()=>Date.now(),Cf=r=>r>=0&&r<=3;function Pf(r,s,l){if(!Cf(r))return 28;var u;r===0?u=Nl():u=Ul();var d=Math.round(u*1e3*1e3);return vt[l>>3]=BigInt(d),0}var ls=[],Df=(r,s)=>{D(Array.isArray(ls)),D(s%16==0),ls.length=0;for(var l;l=Ze[r++];){var u=String.fromCharCode(l),d=["d","f","i","p"];d.push("j"),D(d.includes(u),`Invalid character ${l}("${u}") in readEmAsmArgs! Use only [${d}], and do not specify "v" for void return argument.`);var g=l!=105;g&=l!=112,s+=g&&s%8?4:0,ls.push(l==112?we[s>>2]:l==106?vt[s>>3]:l==105?ue[s>>2]:it[s>>3]),s+=g?8:4}return ls},Lf=(r,s,l)=>{var u=Df(s,l);return D(Vl.hasOwnProperty(r),`No EM_ASM constant found at address ${r}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),Vl[r](...u)},Ff=(r,s,l)=>Lf(r,s,l),Ol=()=>2147483648,If=()=>Ol(),Uf=(r,s)=>(D(s,"alignment argument is required"),Math.ceil(r/s)*s),Nf=r=>{var s=Ye.buffer,l=(r-s.byteLength+65535)/65536|0;try{return Ye.grow(l),et(),1}catch(u){I(`growMemory: Attempted to grow heap from ${s.byteLength} bytes to ${r} bytes, but got error: ${u}`)}},Of=r=>{var s=Ze.length;r>>>=0,D(r>s);var l=Ol();if(r>l)return I(`Cannot enlarge memory, requested ${r} bytes, but the limit is ${l} bytes!`),!1;for(var u=1;u<=4;u*=2){var d=s*(1+.2/u);d=Math.min(d,r+100663296);var g=Math.min(l,Uf(Math.max(r,d),65536)),T=Nf(g);if(T)return!0}return I(`Failed to grow the heap from ${s} bytes to ${g} bytes, not enough memory!`),!1},po={},kf=()=>p||"./this.program",wr=()=>{if(!wr.strings){var r=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8",s={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:r,_:kf()};for(var l in po)po[l]===void 0?delete s[l]:s[l]=po[l];var u=[];for(var l in s)u.push(`${l}=${s[l]}`);wr.strings=u}return wr.strings},Bf=(r,s)=>{var l=0,u=0;for(var d of wr()){var g=s+l;we[r+u>>2]=g,l+=wi(d,g,1/0)+1,u+=4}return 0},zf=(r,s)=>{var l=wr();we[r>>2]=l.length;var u=0;for(var d of l)u+=Z(d)+1;return we[s>>2]=u,0},kl=0,Bl=()=>be||kl>0,Hf=r=>{var s;Bl()||((s=t.onExit)==null||s.call(t,r),O=!0),f(r,new ye(r))},Vf=(r,s)=>{if(rm(),Bl()&&!s){var l=`program exited (with status: ${r}), but keepRuntimeAlive() is set (counter=${kl}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;Be==null||Be(l),I(l)}Hf(r)},Gf=Vf;function Wf(r){try{var s=ft.getStreamFromFD(r);return M.close(s),0}catch(l){if(typeof M>"u"||l.name!=="ErrnoError")throw l;return l.errno}}var Xf=(r,s,l,u)=>{for(var d=0,g=0;g<l;g++){var T=we[s>>2],w=we[s+4>>2];s+=8;var F=M.read(r,Ke,T,w,u);if(F<0)return-1;if(d+=F,F<w)break}return d};function $f(r,s,l,u){try{var d=ft.getStreamFromFD(r),g=Xf(d,s,l);return we[u>>2]=g,0}catch(T){if(typeof M>"u"||T.name!=="ErrnoError")throw T;return T.errno}}function qf(r,s,l,u){s=Il(s);try{if(isNaN(s))return 61;var d=ft.getStreamFromFD(r);return M.llseek(d,s,l),vt[u>>3]=BigInt(d.position),d.getdents&&s===0&&l===0&&(d.getdents=null),0}catch(g){if(typeof M>"u"||g.name!=="ErrnoError")throw g;return g.errno}}var jf=(r,s,l,u)=>{for(var d=0,g=0;g<l;g++){var T=we[s>>2],w=we[s+4>>2];s+=8;var F=M.write(r,Ke,T,w,u);if(F<0)return-1;if(d+=F,F<w)break}return d};function Yf(r,s,l,u){try{var d=ft.getStreamFromFD(r),g=jf(d,s,l);return we[u>>2]=g,0}catch(T){if(typeof M>"u"||T.name!=="ErrnoError")throw T;return T.errno}}var Kf=r=>r,Zf=r=>{var s=t["_"+r];return D(s,"Cannot call unknown function "+r+", make sure it is exported"),s},Jf=(r,s)=>{D(r.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),Ke.set(r,s)},cs=r=>jl(r),Qf=r=>{var s=Z(r)+1,l=cs(s);return wi(r,l,s),l},zl=(r,s,l,u,d)=>{var g={string:Me=>{var Xe=0;return Me!=null&&Me!==0&&(Xe=Qf(Me)),Xe},array:Me=>{var Xe=cs(Me.length);return Jf(Me,Xe),Xe}};function T(Me){return s==="string"?rt(Me):s==="boolean"?!!Me:Me}var w=Zf(r),F=[],$=0;if(D(s!=="array",'Return type should not be "array".'),u)for(var Q=0;Q<u.length;Q++){var le=g[l[Q]];le?($===0&&($=z()),F[Q]=le(u[Q])):F[Q]=u[Q]}var ge=w(...F);function ce(Me){return $!==0&&X($),T(Me)}return ge=ce(ge),ge},ed=(r,s,l,u)=>(...d)=>zl(r,s,l,d),td=(...r)=>M.createPath(...r),nd=(...r)=>M.unlink(...r),id=(...r)=>M.createLazyFile(...r),rd=(...r)=>M.createDevice(...r),sd=r=>us(r),od=r=>vo(r),ad=r=>{var s=z(),l=cs(4),u=cs(4);Kl(r,l,u);var d=we[l>>2],g=we[u>>2],T=rt(d);zn(d);var w;return g&&(w=rt(g),zn(g)),X(s),[T,w]},Hl=r=>ad(r);M.createPreloadedFile=bt,M.staticInit(),_h(),Th(),D(Bn.length===5*2),t.noExitRuntime&&(be=t.noExitRuntime),t.preloadPlugins&&(Nt=t.preloadPlugins),t.print&&(N=t.print),t.printErr&&(I=t.printErr),t.wasmBinary&&(L=t.wasmBinary),ud(),t.arguments&&t.arguments,t.thisProgram&&(p=t.thisProgram),D(typeof t.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),D(typeof t.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),D(typeof t.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),D(typeof t.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),D(typeof t.read>"u","Module.read option was removed"),D(typeof t.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),D(typeof t.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),D(typeof t.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),D(typeof t.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),D(typeof t.ENVIRONMENT>"u","Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),D(typeof t.STACK_SIZE>"u","STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),D(typeof t.wasmMemory>"u","Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),D(typeof t.INITIAL_MEMORY>"u","Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),t.addRunDependency=U,t.removeRunDependency=A,t.ccall=zl,t.cwrap=ed,t.FS_createPreloadedFile=bt,t.FS_unlink=nd,t.FS_createPath=td,t.FS_createDevice=rd,t.FS=M,t.FS_createDataFile=ut,t.FS_createLazyFile=id,t.MEMFS=Pe;var ld=["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","zeroMemory","withStackSave","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","runMainThreadEmAsm","jstoi_q","autoResumeAudioContext","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","HandleAllocator","getNativeTypeSize","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","stringToAscii","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace","getFunctionArgsName","createJsInvokerSignature","PureVirtualError","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","setDelayFunction","count_emval_handles"];ld.forEach(fe);var cd=["run","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP8","HEAPU8","HEAP16","HEAPU16","HEAP32","HEAPU32","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","setTempRet0","ptrToString","exitJS","getHeapMax","growMemory","ENV","ERRNO_CODES","strError","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","getExecutableName","keepRuntimeAlive","asyncLoad","alignMemory","mmapAlloc","wasmTable","getUniqueRunDependency","noExitRuntime","addOnPreRun","addOnPostRun","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","intArrayFromString","AsciiToString","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","getEnvStrings","checkWasiClock","doReadv","doWritev","initRandomFill","randomFill","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","preloadPlugins","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS_readFile","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_forceLoadFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s","InternalError","BindingError","throwInternalError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","whenDependentTypesAreResolved","getTypeName","getFunctionName","heap32VectorToArray","requireRegisteredType","usesDestructorStack","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","GenericWireTypeSize","EmValType","EmValOptionalType","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","getInheritedInstance","registeredPointers","registerType","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","assertIntegerRange","readPointer","runDestructors","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","deletionQueue","flushPendingDeletes","delayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_freelist","emval_handles","emval_symbols","getStringOrSymbol","Emval","emval_get_global","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller"];cd.forEach(De),t.incrementExceptionRefcount=sd,t.decrementExceptionRefcount=od,t.getExceptionMessage=Hl;function ud(){he("fetchSettings")}var Vl={701944:()=>{typeof t<"u"&&"mjDISABLESTRING mjENABLESTRING mjFRAMESTRING mjLABELSTRING mjRNDSTRING mjTIMERSTRING mjVISSTRING".split(" ").forEach(function(r){Object.defineProperty(t,r,{get:function(){return t["get_"+r]()},set:function(s){},enumerable:!0,configurable:!0})})}},Gl=ne("___getTypeName"),mo=ne("_malloc"),_o=ne("_fflush"),zn=ne("_free"),go=ne("_emscripten_stack_get_end"),Wl=ne("_strerror"),Se=ne("_setThrew"),Xl=ne("__emscripten_tempret_set"),$l=ne("_emscripten_stack_init"),ql=ne("__emscripten_stack_restore"),jl=ne("__emscripten_stack_alloc"),Yl=ne("_emscripten_stack_get_current"),vo=ne("___cxa_decrement_exception_refcount"),us=ne("___cxa_increment_exception_refcount"),Kl=ne("___get_exception_message"),Zl=ne("___cxa_can_catch"),Jl=ne("___cxa_get_exception_ptr");function hd(r){Gl=B("__getTypeName",1),mo=B("malloc",1),_o=B("fflush",1),zn=B("free",1),go=r.emscripten_stack_get_end,r.emscripten_stack_get_base,Wl=B("strerror",1),Se=B("setThrew",2),Xl=B("_emscripten_tempret_set",1),$l=r.emscripten_stack_init,r.emscripten_stack_get_free,ql=r._emscripten_stack_restore,jl=r._emscripten_stack_alloc,Yl=r.emscripten_stack_get_current,vo=B("__cxa_decrement_exception_refcount",1),us=B("__cxa_increment_exception_refcount",1),Kl=B("__get_exception_message",3),Zl=B("__cxa_can_catch",3),Jl=B("__cxa_get_exception_ptr",1)}var Ql={__assert_fail:Qt,__cxa_begin_catch:Mt,__cxa_current_primary_exception:kt,__cxa_end_catch:vi,__cxa_find_matching_catch_2:qr,__cxa_find_matching_catch_3:jr,__cxa_rethrow:Yr,__cxa_rethrow_primary_exception:to,__cxa_throw:no,__cxa_uncaught_exceptions:io,__resumeException:ro,__syscall_dup3:Ei,__syscall_fcntl64:ln,__syscall_fstat64:Jt,__syscall_ioctl:tn,__syscall_lstat64:Er,__syscall_newfstatat:jn,__syscall_openat:rh,__syscall_stat64:sh,_abort_js:oh,_embind_register_bigint:lh,_embind_register_bool:ch,_embind_register_class:bh,_embind_register_class_class_function:Ph,_embind_register_class_constructor:Dh,_embind_register_class_function:Lh,_embind_register_class_property:Fh,_embind_register_constant:Ih,_embind_register_emval:Cl,_embind_register_enum:Nh,_embind_register_enum_value:Oh,_embind_register_float:Bh,_embind_register_function:zh,_embind_register_integer:Hh,_embind_register_memory_view:Vh,_embind_register_optional:Wh,_embind_register_std_string:Xh,_embind_register_std_wstring:Jh,_embind_register_user_type:Qh,_embind_register_void:ef,_emscripten_throw_longjmp:tf,_emval_as:nf,_emval_as_int64:rf,_emval_call:sf,_emval_call_method:af,_emval_decref:ho,_emval_get_global:lf,_emval_get_method_caller:hf,_emval_get_property:ff,_emval_incref:df,_emval_is_number:pf,_emval_is_string:mf,_emval_new_array:_f,_emval_new_cstring:gf,_emval_run_destructors:vf,_emval_take_value:xf,_emval_throw:yf,_localtime_js:bf,_mktime_js:Af,_tzset_js:Rf,clock_time_get:Pf,emscripten_asm_const_int:Ff,emscripten_date_now:Nl,emscripten_get_heap_max:If,emscripten_get_now:Ul,emscripten_resize_heap:Of,environ_get:Bf,environ_sizes_get:zf,exit:Gf,fd_close:Wf,fd_read:$f,fd_seek:qf,fd_write:Yf,invoke_ddd:$p,invoke_dddi:np,invoke_dddidi:ip,invoke_ddidi:tp,invoke_di:rp,invoke_didd:Up,invoke_dii:$d,invoke_diii:bd,invoke_diiii:ep,invoke_diiiidd:Jd,invoke_diiiidi:Cd,invoke_diiiii:yd,invoke_diiiiii:Ud,invoke_diiiiiii:sp,invoke_diiiiiiiii:Fd,invoke_diiiiiiiiiiii:Id,invoke_fiii:em,invoke_i:Ed,invoke_id:vp,invoke_ii:pd,invoke_iid:mp,invoke_iidiii:Gd,invoke_iidiiid:Hd,invoke_iidiiiiidi:Wd,invoke_iii:fd,invoke_iiid:Xd,invoke_iiididdddddd:Vd,invoke_iiidiiiiiiii:zd,invoke_iiii:gd,invoke_iiiidddiiiii:ap,invoke_iiiii:wd,invoke_iiiiid:Lp,invoke_iiiiii:Mp,invoke_iiiiiii:gp,invoke_iiiiiiii:pp,invoke_iiiiiiiidd:Fp,invoke_iiiiiiiii:Zd,invoke_iiiiiiiiid:Xp,invoke_iiiiiiiiii:Ep,invoke_iiiiiiiiiidddiiiiiiiii:Bd,invoke_iiiiiiiiiii:xp,invoke_iiiiiiiiiiii:tm,invoke_iiiiiiiiiiiii:Np,invoke_iiij:Sp,invoke_iiji:yp,invoke_j:Jp,invoke_ji:Gp,invoke_jiiii:Tp,invoke_jij:Op,invoke_v:_d,invoke_vi:md,invoke_vid:_p,invoke_viddd:bp,invoke_vidddd:Ap,invoke_vidi:Qd,invoke_vidiii:Od,invoke_vif:Yp,invoke_vii:xd,invoke_viid:Yd,invoke_viiddi:Dp,invoke_viiddidi:Pp,invoke_viiddii:op,invoke_viidi:jd,invoke_viidii:Rd,invoke_viidiii:fp,invoke_viidiiid:up,invoke_viidiiiii:kd,invoke_viidiiiiidi:dp,invoke_viidiiiiiiii:Nd,invoke_viii:dd,invoke_viiid:Dd,invoke_viiidd:Cp,invoke_viiidi:qd,invoke_viiididdddddd:hp,invoke_viiidiiiiiiii:cp,invoke_viiii:Md,invoke_viiiiddd:Rp,invoke_viiiidi:qp,invoke_viiiifi:jp,invoke_viiiii:vd,invoke_viiiiid:Pd,invoke_viiiiii:Sd,invoke_viiiiiii:Ad,invoke_viiiiiiii:Kd,invoke_viiiiiiiii:Ip,invoke_viiiiiiiiii:Hp,invoke_viiiiiiiiiidddiiiiiiiii:lp,invoke_viiiiiiiiiii:Wp,invoke_viiiiiiiiiiid:Ld,invoke_viiiiiiiiiiiii:Bp,invoke_viiiiiiiiiiiiii:zp,invoke_viiiiiiiiiiiiiii:nm,invoke_viiiiiiiiiiiiiiiiii:Vp,invoke_viiiij:Kp,invoke_viiij:Td,invoke_viij:Zp,invoke_viijii:Qp,invoke_vij:kp,invoke_vijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj:wp,llvm_eh_typeid_for:Kf},bi=await xe();function fd(r,s,l){var u=z();try{return Te(r)(s,l)}catch(d){if(X(u),!(d instanceof S))throw d;Se(1,0)}}function dd(r,s,l,u){var d=z();try{Te(r)(s,l,u)}catch(g){if(X(d),!(g instanceof S))throw g;Se(1,0)}}function pd(r,s){var l=z();try{return Te(r)(s)}catch(u){if(X(l),!(u instanceof S))throw u;Se(1,0)}}function md(r,s){var l=z();try{Te(r)(s)}catch(u){if(X(l),!(u instanceof S))throw u;Se(1,0)}}function _d(r){var s=z();try{Te(r)()}catch(l){if(X(s),!(l instanceof S))throw l;Se(1,0)}}function gd(r,s,l,u){var d=z();try{return Te(r)(s,l,u)}catch(g){if(X(d),!(g instanceof S))throw g;Se(1,0)}}function vd(r,s,l,u,d,g){var T=z();try{Te(r)(s,l,u,d,g)}catch(w){if(X(T),!(w instanceof S))throw w;Se(1,0)}}function xd(r,s,l){var u=z();try{Te(r)(s,l)}catch(d){if(X(u),!(d instanceof S))throw d;Se(1,0)}}function yd(r,s,l,u,d,g){var T=z();try{return Te(r)(s,l,u,d,g)}catch(w){if(X(T),!(w instanceof S))throw w;Se(1,0)}}function Ed(r){var s=z();try{return Te(r)()}catch(l){if(X(s),!(l instanceof S))throw l;Se(1,0)}}function Sd(r,s,l,u,d,g,T){var w=z();try{Te(r)(s,l,u,d,g,T)}catch(F){if(X(w),!(F instanceof S))throw F;Se(1,0)}}function Md(r,s,l,u,d){var g=z();try{Te(r)(s,l,u,d)}catch(T){if(X(g),!(T instanceof S))throw T;Se(1,0)}}function Td(r,s,l,u,d){var g=z();try{Te(r)(s,l,u,d)}catch(T){if(X(g),!(T instanceof S))throw T;Se(1,0)}}function wd(r,s,l,u,d){var g=z();try{return Te(r)(s,l,u,d)}catch(T){if(X(g),!(T instanceof S))throw T;Se(1,0)}}function bd(r,s,l,u){var d=z();try{return Te(r)(s,l,u)}catch(g){if(X(d),!(g instanceof S))throw g;Se(1,0)}}function Ad(r,s,l,u,d,g,T,w){var F=z();try{Te(r)(s,l,u,d,g,T,w)}catch($){if(X(F),!($ instanceof S))throw $;Se(1,0)}}function Rd(r,s,l,u,d,g){var T=z();try{Te(r)(s,l,u,d,g)}catch(w){if(X(T),!(w instanceof S))throw w;Se(1,0)}}function Cd(r,s,l,u,d,g,T){var w=z();try{return Te(r)(s,l,u,d,g,T)}catch(F){if(X(w),!(F instanceof S))throw F;Se(1,0)}}function Pd(r,s,l,u,d,g,T){var w=z();try{Te(r)(s,l,u,d,g,T)}catch(F){if(X(w),!(F instanceof S))throw F;Se(1,0)}}function Dd(r,s,l,u,d){var g=z();try{Te(r)(s,l,u,d)}catch(T){if(X(g),!(T instanceof S))throw T;Se(1,0)}}function Ld(r,s,l,u,d,g,T,w,F,$,Q,le,ge){var ce=z();try{Te(r)(s,l,u,d,g,T,w,F,$,Q,le,ge)}catch(Me){if(X(ce),!(Me instanceof S))throw Me;Se(1,0)}}function Fd(r,s,l,u,d,g,T,w,F,$){var Q=z();try{return Te(r)(s,l,u,d,g,T,w,F,$)}catch(le){if(X(Q),!(le instanceof S))throw le;Se(1,0)}}function Id(r,s,l,u,d,g,T,w,F,$,Q,le,ge){var ce=z();try{return Te(r)(s,l,u,d,g,T,w,F,$,Q,le,ge)}catch(Me){if(X(ce),!(Me instanceof S))throw Me;Se(1,0)}}function Ud(r,s,l,u,d,g,T){var w=z();try{return Te(r)(s,l,u,d,g,T)}catch(F){if(X(w),!(F instanceof S))throw F;Se(1,0)}}function Nd(r,s,l,u,d,g,T,w,F,$,Q,le){var ge=z();try{Te(r)(s,l,u,d,g,T,w,F,$,Q,le)}catch(ce){if(X(ge),!(ce instanceof S))throw ce;Se(1,0)}}function Od(r,s,l,u,d,g){var T=z();try{Te(r)(s,l,u,d,g)}catch(w){if(X(T),!(w instanceof S))throw w;Se(1,0)}}function kd(r,s,l,u,d,g,T,w,F){var $=z();try{Te(r)(s,l,u,d,g,T,w,F)}catch(Q){if(X($),!(Q instanceof S))throw Q;Se(1,0)}}function Bd(r,s,l,u,d,g,T,w,F,$,Q,le,ge,ce,Me,Xe,at,lt,Ut,yt,nn,$t){var on=z();try{return Te(r)(s,l,u,d,g,T,w,F,$,Q,le,ge,ce,Me,Xe,at,lt,Ut,yt,nn,$t)}catch(Ft){if(X(on),!(Ft instanceof S))throw Ft;Se(1,0)}}function zd(r,s,l,u,d,g,T,w,F,$,Q,le){var ge=z();try{return Te(r)(s,l,u,d,g,T,w,F,$,Q,le)}catch(ce){if(X(ge),!(ce instanceof S))throw ce;Se(1,0)}}function Hd(r,s,l,u,d,g,T){var w=z();try{return Te(r)(s,l,u,d,g,T)}catch(F){if(X(w),!(F instanceof S))throw F;Se(1,0)}}function Vd(r,s,l,u,d,g,T,w,F,$,Q,le){var ge=z();try{return Te(r)(s,l,u,d,g,T,w,F,$,Q,le)}catch(ce){if(X(ge),!(ce instanceof S))throw ce;Se(1,0)}}function Gd(r,s,l,u,d,g){var T=z();try{return Te(r)(s,l,u,d,g)}catch(w){if(X(T),!(w instanceof S))throw w;Se(1,0)}}function Wd(r,s,l,u,d,g,T,w,F,$){var Q=z();try{return Te(r)(s,l,u,d,g,T,w,F,$)}catch(le){if(X(Q),!(le instanceof S))throw le;Se(1,0)}}function Xd(r,s,l,u){var d=z();try{return Te(r)(s,l,u)}catch(g){if(X(d),!(g instanceof S))throw g;Se(1,0)}}function $d(r,s,l){var u=z();try{return Te(r)(s,l)}catch(d){if(X(u),!(d instanceof S))throw d;Se(1,0)}}function qd(r,s,l,u,d,g){var T=z();try{Te(r)(s,l,u,d,g)}catch(w){if(X(T),!(w instanceof S))throw w;Se(1,0)}}function jd(r,s,l,u,d){var g=z();try{Te(r)(s,l,u,d)}catch(T){if(X(g),!(T instanceof S))throw T;Se(1,0)}}function Yd(r,s,l,u){var d=z();try{Te(r)(s,l,u)}catch(g){if(X(d),!(g instanceof S))throw g;Se(1,0)}}function Kd(r,s,l,u,d,g,T,w,F){var $=z();try{Te(r)(s,l,u,d,g,T,w,F)}catch(Q){if(X($),!(Q instanceof S))throw Q;Se(1,0)}}function Zd(r,s,l,u,d,g,T,w,F){var $=z();try{return Te(r)(s,l,u,d,g,T,w,F)}catch(Q){if(X($),!(Q instanceof S))throw Q;Se(1,0)}}function Jd(r,s,l,u,d,g,T){var w=z();try{return Te(r)(s,l,u,d,g,T)}catch(F){if(X(w),!(F instanceof S))throw F;Se(1,0)}}function Qd(r,s,l,u){var d=z();try{Te(r)(s,l,u)}catch(g){if(X(d),!(g instanceof S))throw g;Se(1,0)}}function ep(r,s,l,u,d){var g=z();try{return Te(r)(s,l,u,d)}catch(T){if(X(g),!(T instanceof S))throw T;Se(1,0)}}function tp(r,s,l,u,d){var g=z();try{return Te(r)(s,l,u,d)}catch(T){if(X(g),!(T instanceof S))throw T;Se(1,0)}}function np(r,s,l,u){var d=z();try{return Te(r)(s,l,u)}catch(g){if(X(d),!(g instanceof S))throw g;Se(1,0)}}function ip(r,s,l,u,d,g){var T=z();try{return Te(r)(s,l,u,d,g)}catch(w){if(X(T),!(w instanceof S))throw w;Se(1,0)}}function rp(r,s){var l=z();try{return Te(r)(s)}catch(u){if(X(l),!(u instanceof S))throw u;Se(1,0)}}function sp(r,s,l,u,d,g,T,w){var F=z();try{return Te(r)(s,l,u,d,g,T,w)}catch($){if(X(F),!($ instanceof S))throw $;Se(1,0)}}function op(r,s,l,u,d,g,T){var w=z();try{Te(r)(s,l,u,d,g,T)}catch(F){if(X(w),!(F instanceof S))throw F;Se(1,0)}}function ap(r,s,l,u,d,g,T,w,F,$,Q,le){var ge=z();try{return Te(r)(s,l,u,d,g,T,w,F,$,Q,le)}catch(ce){if(X(ge),!(ce instanceof S))throw ce;Se(1,0)}}function lp(r,s,l,u,d,g,T,w,F,$,Q,le,ge,ce,Me,Xe,at,lt,Ut,yt,nn,$t,on){var Ft=z();try{Te(r)(s,l,u,d,g,T,w,F,$,Q,le,ge,ce,Me,Xe,at,lt,Ut,yt,nn,$t,on)}catch(ii){if(X(Ft),!(ii instanceof S))throw ii;Se(1,0)}}function cp(r,s,l,u,d,g,T,w,F,$,Q,le,ge){var ce=z();try{Te(r)(s,l,u,d,g,T,w,F,$,Q,le,ge)}catch(Me){if(X(ce),!(Me instanceof S))throw Me;Se(1,0)}}function up(r,s,l,u,d,g,T,w){var F=z();try{Te(r)(s,l,u,d,g,T,w)}catch($){if(X(F),!($ instanceof S))throw $;Se(1,0)}}function hp(r,s,l,u,d,g,T,w,F,$,Q,le,ge){var ce=z();try{Te(r)(s,l,u,d,g,T,w,F,$,Q,le,ge)}catch(Me){if(X(ce),!(Me instanceof S))throw Me;Se(1,0)}}function fp(r,s,l,u,d,g,T){var w=z();try{Te(r)(s,l,u,d,g,T)}catch(F){if(X(w),!(F instanceof S))throw F;Se(1,0)}}function dp(r,s,l,u,d,g,T,w,F,$,Q){var le=z();try{Te(r)(s,l,u,d,g,T,w,F,$,Q)}catch(ge){if(X(le),!(ge instanceof S))throw ge;Se(1,0)}}function pp(r,s,l,u,d,g,T,w){var F=z();try{return Te(r)(s,l,u,d,g,T,w)}catch($){if(X(F),!($ instanceof S))throw $;Se(1,0)}}function mp(r,s,l){var u=z();try{return Te(r)(s,l)}catch(d){if(X(u),!(d instanceof S))throw d;Se(1,0)}}function _p(r,s,l){var u=z();try{Te(r)(s,l)}catch(d){if(X(u),!(d instanceof S))throw d;Se(1,0)}}function gp(r,s,l,u,d,g,T){var w=z();try{return Te(r)(s,l,u,d,g,T)}catch(F){if(X(w),!(F instanceof S))throw F;Se(1,0)}}function vp(r,s){var l=z();try{return Te(r)(s)}catch(u){if(X(l),!(u instanceof S))throw u;Se(1,0)}}function xp(r,s,l,u,d,g,T,w,F,$,Q){var le=z();try{return Te(r)(s,l,u,d,g,T,w,F,$,Q)}catch(ge){if(X(le),!(ge instanceof S))throw ge;Se(1,0)}}function yp(r,s,l,u){var d=z();try{return Te(r)(s,l,u)}catch(g){if(X(d),!(g instanceof S))throw g;Se(1,0)}}function Ep(r,s,l,u,d,g,T,w,F,$){var Q=z();try{return Te(r)(s,l,u,d,g,T,w,F,$)}catch(le){if(X(Q),!(le instanceof S))throw le;Se(1,0)}}function Sp(r,s,l,u){var d=z();try{return Te(r)(s,l,u)}catch(g){if(X(d),!(g instanceof S))throw g;Se(1,0)}}function Mp(r,s,l,u,d,g){var T=z();try{return Te(r)(s,l,u,d,g)}catch(w){if(X(T),!(w instanceof S))throw w;Se(1,0)}}function Tp(r,s,l,u,d){var g=z();try{return Te(r)(s,l,u,d)}catch(T){if(X(g),!(T instanceof S))throw T;return Se(1,0),0n}}function wp(r,s,l,u,d,g,T,w,F,$,Q,le,ge,ce,Me,Xe,at,lt,Ut,yt,nn,$t,on,Ft,ii,hs,om,am,lm,cm,um,hm,fm,dm,pm,mm,_m,gm,vm,xm,ym,Em,Sm,Mm,Tm,wm,bm,Am,Rm,Cm,Pm,Dm,Lm,Fm,Im,Um,Nm,Om,km,Bm,zm,Hm,Vm,Gm,Wm,Xm,$m,qm,jm,Ym,Km,Zm,Jm,Qm,e_,t_,n_,i_,r_,s_,o_,a_,l_,c_,u_,h_){var f_=z();try{Te(r)(s,l,u,d,g,T,w,F,$,Q,le,ge,ce,Me,Xe,at,lt,Ut,yt,nn,$t,on,Ft,ii,hs,om,am,lm,cm,um,hm,fm,dm,pm,mm,_m,gm,vm,xm,ym,Em,Sm,Mm,Tm,wm,bm,Am,Rm,Cm,Pm,Dm,Lm,Fm,Im,Um,Nm,Om,km,Bm,zm,Hm,Vm,Gm,Wm,Xm,$m,qm,jm,Ym,Km,Zm,Jm,Qm,e_,t_,n_,i_,r_,s_,o_,a_,l_,c_,u_,h_)}catch(rc){if(X(f_),!(rc instanceof S))throw rc;Se(1,0)}}function bp(r,s,l,u,d){var g=z();try{Te(r)(s,l,u,d)}catch(T){if(X(g),!(T instanceof S))throw T;Se(1,0)}}function Ap(r,s,l,u,d,g){var T=z();try{Te(r)(s,l,u,d,g)}catch(w){if(X(T),!(w instanceof S))throw w;Se(1,0)}}function Rp(r,s,l,u,d,g,T,w){var F=z();try{Te(r)(s,l,u,d,g,T,w)}catch($){if(X(F),!($ instanceof S))throw $;Se(1,0)}}function Cp(r,s,l,u,d,g){var T=z();try{Te(r)(s,l,u,d,g)}catch(w){if(X(T),!(w instanceof S))throw w;Se(1,0)}}function Pp(r,s,l,u,d,g,T,w){var F=z();try{Te(r)(s,l,u,d,g,T,w)}catch($){if(X(F),!($ instanceof S))throw $;Se(1,0)}}function Dp(r,s,l,u,d,g){var T=z();try{Te(r)(s,l,u,d,g)}catch(w){if(X(T),!(w instanceof S))throw w;Se(1,0)}}function Lp(r,s,l,u,d,g){var T=z();try{return Te(r)(s,l,u,d,g)}catch(w){if(X(T),!(w instanceof S))throw w;Se(1,0)}}function Fp(r,s,l,u,d,g,T,w,F,$){var Q=z();try{return Te(r)(s,l,u,d,g,T,w,F,$)}catch(le){if(X(Q),!(le instanceof S))throw le;Se(1,0)}}function Ip(r,s,l,u,d,g,T,w,F,$){var Q=z();try{Te(r)(s,l,u,d,g,T,w,F,$)}catch(le){if(X(Q),!(le instanceof S))throw le;Se(1,0)}}function Up(r,s,l,u){var d=z();try{return Te(r)(s,l,u)}catch(g){if(X(d),!(g instanceof S))throw g;Se(1,0)}}function Np(r,s,l,u,d,g,T,w,F,$,Q,le,ge){var ce=z();try{return Te(r)(s,l,u,d,g,T,w,F,$,Q,le,ge)}catch(Me){if(X(ce),!(Me instanceof S))throw Me;Se(1,0)}}function Op(r,s,l){var u=z();try{return Te(r)(s,l)}catch(d){if(X(u),!(d instanceof S))throw d;return Se(1,0),0n}}function kp(r,s,l){var u=z();try{Te(r)(s,l)}catch(d){if(X(u),!(d instanceof S))throw d;Se(1,0)}}function Bp(r,s,l,u,d,g,T,w,F,$,Q,le,ge,ce){var Me=z();try{Te(r)(s,l,u,d,g,T,w,F,$,Q,le,ge,ce)}catch(Xe){if(X(Me),!(Xe instanceof S))throw Xe;Se(1,0)}}function zp(r,s,l,u,d,g,T,w,F,$,Q,le,ge,ce,Me){var Xe=z();try{Te(r)(s,l,u,d,g,T,w,F,$,Q,le,ge,ce,Me)}catch(at){if(X(Xe),!(at instanceof S))throw at;Se(1,0)}}function Hp(r,s,l,u,d,g,T,w,F,$,Q){var le=z();try{Te(r)(s,l,u,d,g,T,w,F,$,Q)}catch(ge){if(X(le),!(ge instanceof S))throw ge;Se(1,0)}}function Vp(r,s,l,u,d,g,T,w,F,$,Q,le,ge,ce,Me,Xe,at,lt,Ut){var yt=z();try{Te(r)(s,l,u,d,g,T,w,F,$,Q,le,ge,ce,Me,Xe,at,lt,Ut)}catch(nn){if(X(yt),!(nn instanceof S))throw nn;Se(1,0)}}function Gp(r,s){var l=z();try{return Te(r)(s)}catch(u){if(X(l),!(u instanceof S))throw u;return Se(1,0),0n}}function Wp(r,s,l,u,d,g,T,w,F,$,Q,le){var ge=z();try{Te(r)(s,l,u,d,g,T,w,F,$,Q,le)}catch(ce){if(X(ge),!(ce instanceof S))throw ce;Se(1,0)}}function Xp(r,s,l,u,d,g,T,w,F,$){var Q=z();try{return Te(r)(s,l,u,d,g,T,w,F,$)}catch(le){if(X(Q),!(le instanceof S))throw le;Se(1,0)}}function $p(r,s,l){var u=z();try{return Te(r)(s,l)}catch(d){if(X(u),!(d instanceof S))throw d;Se(1,0)}}function qp(r,s,l,u,d,g,T){var w=z();try{Te(r)(s,l,u,d,g,T)}catch(F){if(X(w),!(F instanceof S))throw F;Se(1,0)}}function jp(r,s,l,u,d,g,T){var w=z();try{Te(r)(s,l,u,d,g,T)}catch(F){if(X(w),!(F instanceof S))throw F;Se(1,0)}}function Yp(r,s,l){var u=z();try{Te(r)(s,l)}catch(d){if(X(u),!(d instanceof S))throw d;Se(1,0)}}function Kp(r,s,l,u,d,g){var T=z();try{Te(r)(s,l,u,d,g)}catch(w){if(X(T),!(w instanceof S))throw w;Se(1,0)}}function Zp(r,s,l,u){var d=z();try{Te(r)(s,l,u)}catch(g){if(X(d),!(g instanceof S))throw g;Se(1,0)}}function Jp(r){var s=z();try{return Te(r)()}catch(l){if(X(s),!(l instanceof S))throw l;return Se(1,0),0n}}function Qp(r,s,l,u,d,g){var T=z();try{Te(r)(s,l,u,d,g)}catch(w){if(X(T),!(w instanceof S))throw w;Se(1,0)}}function em(r,s,l,u){var d=z();try{return Te(r)(s,l,u)}catch(g){if(X(d),!(g instanceof S))throw g;Se(1,0)}}function tm(r,s,l,u,d,g,T,w,F,$,Q,le){var ge=z();try{return Te(r)(s,l,u,d,g,T,w,F,$,Q,le)}catch(ce){if(X(ge),!(ce instanceof S))throw ce;Se(1,0)}}function nm(r,s,l,u,d,g,T,w,F,$,Q,le,ge,ce,Me,Xe){var at=z();try{Te(r)(s,l,u,d,g,T,w,F,$,Q,le,ge,ce,Me,Xe)}catch(lt){if(X(at),!(lt instanceof S))throw lt;Se(1,0)}}var ec;function im(){$l(),V()}function xo(){if(ze>0){nt=xo;return}if(im(),$e(),ze>0){nt=xo;return}function r(){var s;D(!ec),ec=!0,t.calledRun=!0,!O&&(Ve(),He==null||He(t),(s=t.onRuntimeInitialized)==null||s.call(t),te("onRuntimeInitialized"),D(!t._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),_t())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),r()},1)):r(),P()}function rm(){var r=N,s=I,l=!1;N=I=u=>{l=!0};try{_o(0),["stdout","stderr"].forEach(u=>{var F;var d=M.analyzePath("/dev/"+u);if(d){var g=d.object,T=g.rdev,w=ke.ttys[T];(F=w==null?void 0:w.output)!=null&&F.length&&(l=!0)}})}catch{}N=r,I=s,l&&Ue("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}function sm(){if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();te("preInit")}sm(),xo(),xt?e=t:e=new Promise((r,s)=>{He=r,Be=s});for(const r of Object.keys(t))r in i||Object.defineProperty(i,r,{configurable:!0,get(){j(`Access to module property ('${r}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return e},vn=Uint8Array,ur=Uint16Array,$E=Int32Array,Yu=new vn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ku=new vn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),qE=new vn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Zu=function(i,e){for(var t=new ur(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var o=new $E(t[30]),n=1;n<30;++n)for(var a=t[n];a<t[n+1];++a)o[a]=a-t[n]<<5|n;return{b:t,r:o}},Ju=Zu(Yu,2),Qu=Ju.b,jE=Ju.r;Qu[28]=258,jE[258]=28;var YE=Zu(Ku,0),KE=YE.b,Ja=new ur(32768);for(var Ot=0;Ot<32768;++Ot){var ui=(Ot&43690)>>1|(Ot&21845)<<1;ui=(ui&52428)>>2|(ui&13107)<<2,ui=(ui&61680)>>4|(ui&3855)<<4,Ja[Ot]=((ui&65280)>>8|(ui&255)<<8)>>1}var Ur=function(i,e,t){for(var n=i.length,o=0,a=new ur(e);o<n;++o)i[o]&&++a[i[o]-1];var c=new ur(e);for(o=1;o<e;++o)c[o]=c[o-1]+a[o-1]<<1;var h;if(t){h=new ur(1<<e);var p=15-e;for(o=0;o<n;++o)if(i[o])for(var f=o<<4|i[o],v=e-i[o],_=c[i[o]-1]++<<v,x=_|(1<<v)-1;_<=x;++_)h[Ja[_]>>p]=f}else for(h=new ur(n),o=0;o<n;++o)i[o]&&(h[o]=Ja[c[i[o]-1]++]>>15-i[o]);return h},$r=new vn(288);for(var Ot=0;Ot<144;++Ot)$r[Ot]=8;for(var Ot=144;Ot<256;++Ot)$r[Ot]=9;for(var Ot=256;Ot<280;++Ot)$r[Ot]=7;for(var Ot=280;Ot<288;++Ot)$r[Ot]=8;var eh=new vn(32);for(var Ot=0;Ot<32;++Ot)eh[Ot]=5;var ZE=Ur($r,9,1),JE=Ur(eh,5,1),Qo=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Dn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},ea=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},QE=function(i){return(i+7)/8|0},pl=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new vn(i.subarray(e,t))},eS=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],_n=function(i,e,t){var n=new Error(e||eS[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,_n),!t)throw n;return n},tS=function(i,e,t,n){var o=i.length,a=n?n.length:0;if(!o||e.f&&!e.l)return t||new vn(0);var c=!t,h=c||e.i!=2,p=e.i;c&&(t=new vn(o*3));var f=function(it){var vt=t.length;if(it>vt){var k=new vn(Math.max(vt*2,it));k.set(t),t=k}},v=e.f||0,_=e.p||0,x=e.b||0,E=e.l,b=e.d,R=e.m,y=e.n,m=o*8;do{if(!E){v=Dn(i,_,1);var N=Dn(i,_+1,3);if(_+=3,N)if(N==1)E=ZE,b=JE,R=9,y=5;else if(N==2){var D=Dn(i,_,31)+257,G=Dn(i,_+10,15)+4,V=D+Dn(i,_+5,31)+1;_+=14;for(var P=new vn(V),S=new vn(19),H=0;H<G;++H)S[qE[H]]=Dn(i,_+H*3,7);_+=G*3;for(var Y=Qo(S),te=(1<<Y)-1,ne=Ur(S,Y,1),H=0;H<V;){var he=ne[Dn(i,_,te)];_+=he&15;var I=he>>4;if(I<16)P[H++]=I;else{var ae=0,Ee=0;for(I==16?(Ee=3+Dn(i,_,3),_+=2,ae=P[H-1]):I==17?(Ee=3+Dn(i,_,7),_+=3):I==18&&(Ee=11+Dn(i,_,127),_+=7);Ee--;)P[H++]=ae}}var oe=P.subarray(0,D),fe=P.subarray(D);R=Qo(oe),y=Qo(fe),E=Ur(oe,R,1),b=Ur(fe,y,1)}else _n(1);else{var I=QE(_)+4,L=i[I-4]|i[I-3]<<8,O=I+L;if(O>o){p&&_n(0);break}h&&f(x+L),t.set(i.subarray(I,O),x),e.b=x+=L,e.p=_=O*8,e.f=v;continue}if(_>m){p&&_n(0);break}}h&&f(x+131072);for(var De=(1<<R)-1,He=(1<<y)-1,Be=_;;Be=_){var ae=E[ea(i,_)&De],Ye=ae>>4;if(_+=ae&15,_>m){p&&_n(0);break}if(ae||_n(2),Ye<256)t[x++]=Ye;else if(Ye==256){Be=_,E=null;break}else{var Ke=Ye-254;if(Ye>264){var H=Ye-257,Ze=Yu[H];Ke=Dn(i,_,(1<<Ze)-1)+Qu[H],_+=Ze}var se=b[ea(i,_)&He],pe=se>>4;se||_n(3),_+=se&15;var fe=KE[pe];if(pe>3){var Ze=Ku[pe];fe+=ea(i,_)&(1<<Ze)-1,_+=Ze}if(_>m){p&&_n(0);break}h&&f(x+131072);var ue=x+Ke;if(x<fe){var we=a-fe,We=Math.min(fe,ue);for(we+x<0&&_n(3);x<We;++x)t[x]=n[we+x]}for(;x<ue;++x)t[x]=t[x-fe]}}e.l=E,e.p=Be,e.b=x,e.f=v,E&&(v=1,e.m=R,e.d=b,e.n=y)}while(!v);return x!=t.length&&c?pl(t,0,x):t.subarray(0,x)},nS=new vn(0),Vn=function(i,e){return i[e]|i[e+1]<<8},Sn=function(i,e){return(i[e]|i[e+1]<<8|i[e+2]<<16|i[e+3]<<24)>>>0},ta=function(i,e){return Sn(i,e)+Sn(i,e+4)*4294967296};function iS(i,e){return tS(i,{i:2},e&&e.out,e&&e.dictionary)}var Qa=typeof TextDecoder<"u"&&new TextDecoder,rS=0;try{Qa.decode(nS,{stream:!0}),rS=1}catch{}var sS=function(i){for(var e="",t=0;;){var n=i[t++],o=(n>127)+(n>223)+(n>239);if(t+o>i.length)return{s:e,r:pl(i,t-1)};o?o==3?(n=((n&15)<<18|(i[t++]&63)<<12|(i[t++]&63)<<6|i[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):o&1?e+=String.fromCharCode((n&31)<<6|i[t++]&63):e+=String.fromCharCode((n&15)<<12|(i[t++]&63)<<6|i[t++]&63):e+=String.fromCharCode(n)}};function oS(i,e){if(e){for(var t="",n=0;n<i.length;n+=16384)t+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return t}else{if(Qa)return Qa.decode(i);var o=sS(i),a=o.s,t=o.r;return t.length&&_n(8),a}}var aS=function(i,e){return e+30+Vn(i,e+26)+Vn(i,e+28)},lS=function(i,e,t){var n=Vn(i,e+28),o=Vn(i,e+30),a=oS(i.subarray(e+46,e+46+n),!(Vn(i,e+8)&2048)),c=e+46+n,h=cS(i,c,o,t,Sn(i,e+20),Sn(i,e+24),Sn(i,e+42)),p=h[0],f=h[1],v=h[2];return[Vn(i,e+10),p,f,a,c+o+Vn(i,e+32),v]},cS=function(i,e,t,n,o,a,c){var h=o==4294967295,p=a==4294967295,f=c==4294967295,v=e+t,_=h+p+f;if(n&&_){for(;e+4<v;e+=4+Vn(i,e+2))if(Vn(i,e)==1)return[h?ta(i,e+4+8*p):o,p?ta(i,e+4):a,f?ta(i,e+4+8*(p+h)):c,1];n<2&&_n(13)}return[o,a,c,0]};function th(i,e){for(var t={},n=i.length-22;Sn(i,n)!=101010256;--n)(!n||i.length-n>65558)&&_n(13);var o=Vn(i,n+8);if(!o)return{};var a=Sn(i,n+16),c=Sn(i,n-20)==117853008;if(c){var h=Sn(i,n-12);c=Sn(i,h)==101075792,c&&(o=Sn(i,h+32),a=Sn(i,h+48))}for(var p=0;p<o;++p){var f=lS(i,a,c),v=f[0],_=f[1],x=f[2],E=f[3],b=f[4],R=f[5],y=aS(i,R);a=b,v?v==8?t[E]=iS(i.subarray(y,y+_),{out:new vn(x)}):_n(14,"unknown compression type "+v):t[E]=pl(i,y,y+_)}return t}function uS(i){var y,m;if(i.length<12||String.fromCharCode(...i.subarray(0,6))!=="NUMPY")throw new Error("NPZ 中包含无效的 NPY 数组");const e=new DataView(i.buffer,i.byteOffset,i.byteLength),t=i[6],n=t===1?e.getUint16(8,!0):e.getUint32(8,!0),o=t===1?10:12,a=new TextDecoder(t===3?"utf-8":"latin1").decode(i.subarray(o,o+n)),c=(y=/['"]descr['"]\s*:\s*['"]([^'"]+)['"]/.exec(a))==null?void 0:y[1],h=(m=/['"]shape['"]\s*:\s*\(([^)]*)\)/.exec(a))==null?void 0:m[1];if(!c||h==null||/['"]fortran_order['"]\s*:\s*True/.test(a))throw new Error("不支持的 NPY 数组布局");const p=h.split(",").map(N=>N.trim()).filter(Boolean).map(Number);if(p.some(N=>!Number.isSafeInteger(N)||N<0))throw new Error("NPY 数组形状无效");const f=p.reduce((N,I)=>N*I,1),v=c.slice(1),_=c[0]!==">",E={f4:4,f8:8,i4:4,i8:8,u4:4,u8:8}[v];if(!E||o+n+f*E>i.length)throw new Error(`不支持或损坏的 NPY 数值类型：${c}`);const b=o+n,R=new Float64Array(f);for(let N=0;N<f;N++){const I=b+N*E;v==="f4"?R[N]=e.getFloat32(I,_):v==="f8"?R[N]=e.getFloat64(I,_):v==="i4"?R[N]=e.getInt32(I,_):v==="u4"?R[N]=e.getUint32(I,_):v==="i8"?R[N]=Number(e.getBigInt64(I,_)):R[N]=Number(e.getBigUint64(I,_))}return{shape:p,numbers:R}}function na(i,e){return i.length===e.length&&i.every((t,n)=>e[n]==null||t===e[n])}function hu(i,e,t){var R;const n=th(new Uint8Array(i)),o=y=>n[`${y}.npy`]?uS(n[`${y}.npy`]):null,a=o("fps"),c=a==null?void 0:a.numbers[0];if(!Number.isFinite(c)||c<=0||c>1e3)throw new Error("NPZ 缺少有效的 fps");const h=n["body_pos_w.npy"]&&n["body_quat_w.npy"]&&n["joint_pos.npy"],p=n["body_positions.npy"]&&n["body_rotations.npy"]&&n["dof_positions.npy"];if(!h&&!p)throw new Error("仅支持 S17 tracking 或当前数据集的 raw retarget NPZ");const f=o(h?"body_pos_w":"body_positions"),v=o(h?"body_quat_w":"body_rotations"),_=o(h?"joint_pos":"dof_positions"),x=f.shape[0],E=f.shape[1];if(!Number.isSafeInteger(x)||x<1||x>1e5||!na(f.shape,[x,E,3])||!na(v.shape,[x,E,4])||!na(_.shape,[x,21])||p&&E!==22||((R=e.joint_qposadr)==null?void 0:R.length)!==21)throw new Error("NPZ 帧数、底座或 21 个关节的形状不符合 S17 模型");const b=new Float32Array(x*e.nq);for(let y=0;y<x;y++){const m=y*e.nq;b.set(t,m);const N=y*E*3,I=y*E*4;for(let O=0;O<3;O++)b[m+e.root_qposadr+O]=f.numbers[N+O];const L=Math.hypot(...v.numbers.subarray(I,I+4));if(!Number.isFinite(L)||L<1e-6)throw new Error(`第 ${y+1} 帧四元数无效`);for(let O=0;O<4;O++)b[m+e.root_qposadr+3+O]=v.numbers[I+O]/L;for(let O=0;O<21;O++)b[m+e.joint_qposadr[O]]=_.numbers[y*21+O]}if(!b.every(Number.isFinite))throw new Error("NPZ 中存在 NaN 或无限大数值");return{frames:b,count:x,fps:c}}const Os=9.81,hS=.8;function fS(i){return Math.max(0,Math.min(1,i))}async function dS(i,e,t,n,o){const a=new i.MjData(e),c=new Set(t.foot_body_ids),h=Math.max(2,Math.round(n.fps*.08)),p=n.count-h*2;if(p<1)return a.delete(),null;const f=Math.min(120,p),v=e.body_mass.reduce((O,D)=>O+D,0);let _=0,x=0,E=0,b=0,R=0;function y(O){a.qpos.set(n.frames.subarray(O*t.nq,(O+1)*t.nq)),i.mj_forward(e,a);const D=[0,0,0];for(let G=1;G<e.nbody;G++){const V=e.body_mass[G];for(let P=0;P<3;P++)D[P]+=V*a.xipos[G*3+P]}return D.map(G=>G/v)}try{for(let O=0;O<f;O++){if(o())return null;const D=h+Math.floor(O*p/f),G=y(D-h),V=t.foot_body_ids.map(fe=>[a.xpos[fe*3],a.xpos[fe*3+1]]),P=y(D+h),S=t.foot_body_ids.map(fe=>[a.xpos[fe*3],a.xpos[fe*3+1]]),H=y(D),Y=h/n.fps,te=H.map((fe,De)=>(G[De]-2*fe+P[De])/(Y*Y)),ne=new Set;let he=0;const ae=a.contact;for(let fe=0;fe<ae.size();fe++){const De=ae.get(fe),[He,Be]=De.geom,Ye=He===t.floor_geom_id?Be:Be===t.floor_geom_id?He:-1;Ye>=0&&c.has(e.geom_bodyid[Ye])&&(ne.add(e.geom_bodyid[Ye]),he=Math.max(he,-De.dist)),De.delete()}ae.delete();const Ee=Math.hypot(te[0],te[1]),oe=te[2]+Os;if(ne.size){const fe=Math.max(0,oe),De=Math.max(0,-oe)/Os,He=Math.max(0,Ee-hS*fe)/Os;_+=Math.exp(-De-He);let Be=0;for(const Ye of ne){const Ke=t.foot_body_ids.indexOf(Ye);Be=Math.max(Be,Math.hypot(S[Ke][0]-V[Ke][0],S[Ke][1]-V[Ke][1])/(2*Y))}R=Math.max(R,Be),x+=Math.exp(-Math.max(0,Be-.08)/.5),b++}else _+=Math.exp(-Math.hypot(Ee,oe)/Os),x+=1;E+=Math.exp(-Math.max(0,he-.005)/.04),O%12===11&&await new Promise(fe=>setTimeout(fe,0))}}finally{a.delete()}const m=_/f,N=x/f,I=E/f;return{score:Math.round(100*fS(.65*m+.25*N+.1*I)),sampleCount:f,force:m,slip:N,penetration:I,contactSamples:b,worstSlip:R}}function pS(i,e,t,n,o=null,a=null){const c=i.length;if(c!==e.length||c!==t.length||c<n*2||n<=0)return null;let h=0;for(let V=0;V<c;V++)if(h=t[V]?0:h+1,h>=Math.max(3,Math.ceil(n*.2)))return null;if((o==null?void 0:o.length)===c&&(a==null?void 0:a.length)===c){const V=Array.from(o,(Y,te)=>Math.min(Y,a[te])),S=V.slice().sort((Y,te)=>Y-te)[Math.floor((c-1)*.05)];let H=0;for(const Y of V)if(H=Y>S+.12?H+1:0,H>=Math.max(3,Math.ceil(n*.2)))return null}const p=Float64Array.from(i,(V,P)=>V-e[P]),f=new Float64Array(c),v=Math.max(1,Math.round(n*.06));let _=0,x=0,E=0;for(let V=0;V<c;V++){const P=Math.max(0,V-v),S=Math.min(c,V+v+1);for(;E<S;)_+=p[E++];for(;x<P;)_-=p[x++];f[V]=_/(E-x)}const b=.08,R=[];let y=0,m=0,N=0;for(let V=1;V<c;V++)N===0?(f[V]<f[y]&&(y=V),f[V]>f[m]&&(m=V),f[V]-f[y]>=b?(R.push(y),m=V,N=1):f[m]-f[V]>=b&&(R.push(m),y=V,N=-1)):N===1?f[V]>=f[m]?m=V:f[m]-f[V]>=b&&(R.push(m),y=V,N=-1):f[V]<=f[y]?y=V:f[V]-f[y]>=b&&(R.push(y),m=V,N=1);const I=[];let L=[];const O=()=>{L.length>=4&&I.push(L),L=[]};for(let V=1;V<R.length;V++){const P=R[V-1],S=R[V],H=(S-P)/n;let Y=0;for(let te=P;te<=S;te++)Y+=t[te]?1:0;H<.25||H>1.5||Y/(S-P+1)<.8?O():L.push(H)}O();let D=0,G=0;for(const V of I){const P=V.reduce((H,Y)=>H+Y,0)/V.length;Math.sqrt(V.reduce((H,Y)=>H+(Y-P)**2,0)/V.length)/P>.3||(D+=V.length,G+=P*V.length)}return D>=4&&G>0?{stepsPerSecond:D/G,steps:D,duration:G}:null}const Ir=document.querySelector("#status"),ia=document.querySelector("#viewport"),rr=document.querySelector("#toggle"),ra=document.querySelector("#prevFrame"),sa=document.querySelector("#nextFrame"),sr=document.querySelector("#seek"),mS=document.querySelector("#time"),_S=document.querySelector("#frame"),or=document.querySelector("#contactToggle"),Fi=document.querySelector("#motionList"),hi=document.querySelector("#libraryStatus"),ks=document.querySelector("#baseHeight"),Bs=document.querySelector("#credibility"),Lr=document.querySelector("#credibilityScore"),oa=document.querySelector("#footHeightChart"),aa=document.querySelector("#footForwardChart"),la=document.querySelector("#imuRollChart"),fu=document.querySelector("#footHeightValue"),du=document.querySelector("#imuRollValue"),pu=document.querySelector("#strideValue"),zs=document.querySelector("#cadenceValue");function gS(i){return new Promise((e,t)=>i.readEntries(e,t))}async function nh(i,e=""){if(i.isFile){const o=await new Promise((a,c)=>i.file(a,c));return o.name.toLowerCase().endsWith(".npz")?[{file:o,path:e+o.name}]:[]}if(!i.isDirectory)return[];const t=i.createReader(),n=[];for(;;){const o=await gS(t);if(!o.length)break;for(const a of o)n.push(...await nh(a,`${e}${i.name}/`))}return n}async function ar(i,e="arrayBuffer"){const t=new URL(`./${i}`,document.baseURI),n=i.startsWith("model/")?"s17-model-v2":new URL(import.meta.url).pathname;t.searchParams.set("v",n);const o=await fetch(t);if(!o.ok)throw new Error(`${i}: HTTP ${o.status}`);return o[e]()}function vS(i,e){const t=i.mesh_vertadr[e]*3,n=i.mesh_vertnum[e],o=i.mesh_faceadr[e]*3,a=i.mesh_facenum[e],c=Float32Array.from(i.mesh_vert.subarray(t,t+n*3)),h=Uint32Array.from(i.mesh_face.subarray(o,o+a*3)),p=new Nn;return p.setAttribute("position",new wn(c,3)),p.setIndex(new wn(h,1)),p.computeVertexNormals(),p}function mu(i=""){return{name:i,folders:new Map,files:[]}}function xS(i){const e=mu();for(const t of i){const n=t.path.split("/").filter(Boolean);let o=e;for(const a of n.slice(0,-1))o.folders.has(a)||o.folders.set(a,mu(a)),o=o.folders.get(a);o.files.push(t)}return e}function ih(i){return i.files.length+Array.from(i.folders.values()).reduce((e,t)=>e+ih(t),0)}async function yS(){Ir.textContent="正在并行加载 MuJoCo 与机器人资源…";const i=ar("motion/meta.json","json"),e=ar("motion/frames.bin"),t=XE(),n=ar("model/xml/scene_flat.xml","text"),o=ar("model/xml/biped_s17.xml","text"),a=ar("model/meshes.zip"),[c,h,p,f,v,_]=await Promise.all([i,e,t,n,o,a]),x=new Float32Array(h);if(x.length!==c.frames*c.nq)throw new Error("动作数据长度与元数据不一致");Ir.textContent="正在初始化机器人模型…";for(const B of["/working","/working/xml","/working/meshes"])p.FS.mkdir(B);p.FS.writeFile("/working/xml/scene_flat.xml",f),p.FS.writeFile("/working/xml/biped_s17.xml",v);const E=th(new Uint8Array(_));for(const B of c.meshes){const J=E[B];if(!J)throw new Error(`机器人网格压缩包缺少 ${B}`);p.FS.writeFile(`/working/meshes/${B}`,new Uint8Array(J))}const b=p.MjModel.mj_loadXML("/working/xml/scene_flat.xml"),R=new p.MjData(b);if(b.nq!==c.nq)throw new Error(`模型 nq=${b.nq}，动作 nq=${c.nq}`);const y=Float32Array.from(R.qpos),m=new Pg;m.background=new pt("#2d3a48"),m.add(new kg(15135231,3820646,2));const N=new Hg(16777215,2.4);N.position.set(-2,-3,6),m.add(N);const I=new Tn(new Xr(200,200),new Fc({color:4412771,roughness:1}));I.position.z=-.004,m.add(I);const L=new Gg(20,40,8956349,5796743);L.rotateX(Math.PI/2),L.position.z=.001,m.add(L);const O=new Mn(45,1,.02,100);O.up.set(0,0,1),O.position.set(2.1,-2.8,1.8);const D=new AE({antialias:!0});D.setPixelRatio(Math.min(window.devicePixelRatio,2)),D.outputColorSpace=gn,ia.appendChild(D.domElement);const G=new CE(O,D.domElement);G.target.set(0,0,.85),G.enableDamping=!0,G.update();const V=new st(0,0),P=()=>{const{width:B,height:J}=ia.getBoundingClientRect();D.setSize(B,J,!1),O.aspect=B/J,O.updateProjectionMatrix()};new ResizeObserver(P).observe(ia),P();const S=new Map,H=[],Y=p.mjtGeom.mjGEOM_MESH.value;for(let B=0;B<b.ngeom;B++){if(b.geom_type[B]!==Y||b.geom_group[B]!==1)continue;const J=b.geom_dataid[B];S.has(J)||S.set(J,vS(b,J));const q=Array.from(b.geom_rgba.subarray(B*4,B*4+4)),ve=new Fc({color:new pt(q[0],q[1],q[2]),roughness:.65,metalness:.12,side:Ln}),_e=new Tn(S.get(J),ve);m.add(_e),H.push([B,_e])}if(!H.length)throw new Error("模型没有可显示的 S17 网格");const te=new hl(.016,.016,.004,18);te.rotateX(Math.PI/2);const ne=new cl({color:16767830,side:Ln}),he=[],ae=new Set(c.foot_body_ids);let Ee=!0;function oe(){for(const q of he)q.visible=!1;if(!Ee)return;const B=R.contact;let J=0;for(let q=0;q<B.size();q++){const ve=B.get(q),[_e,Le]=ve.geom,Ce=_e===c.floor_geom_id?Le:Le===c.floor_geom_id?_e:-1;if(Ce>=0&&ae.has(b.geom_bodyid[Ce])){if(!he[J]){const xe=new Tn(te,ne);xe.renderOrder=2,m.add(xe),he.push(xe)}const de=ve.pos;he[J].position.set(de[0],de[1],Math.max(.003,de[2]+.004)),he[J].visible=!0,J++}ve.delete()}B.delete(),or.textContent=`接触点：开 (C) · ${J}`}let fe={frames:x,count:c.frames,fps:c.fps,name:c.source},De=.77,He=0,Be=0,Ye=!1,Ke=performance.now(),Ze=0,se=null,pe=0;function ue(B,J,q,ve=!1){var xn;const _e=(xn=J[0])==null?void 0:xn.values;if(!(_e!=null&&_e.length))return;const Le=B.getBoundingClientRect();if(!Le.width||!Le.height)return;const Ce=Math.min(window.devicePixelRatio,2),de=Math.round(Le.width*Ce),xe=Math.round(Le.height*Ce);(B.width!==de||B.height!==xe)&&(B.width=de,B.height=xe);const ye=B.getContext("2d");ye.setTransform(Ce,0,0,Ce,0,0),ye.clearRect(0,0,Le.width,Le.height);const Re={left:45,right:5,top:8,bottom:20},Fe=Le.width-Re.left-Re.right,Je=Le.height-Re.top-Re.bottom,W=ve?De-se.baseHeight:0;let me=1/0,be=-1/0;for(const Mt of J)for(const kt of Mt.values)me=Math.min(me,kt+W),be=Math.max(be,kt+W);const Ie=Math.max(be-me,q==="m"?.02:2);me-=Ie*.12,be+=Ie*.12;const X=Mt=>Re.left+Mt/Math.max(1,_e.length-1)*Fe,z=Mt=>Re.top+(be-(Mt+W))/(be-me)*Je,Ue=me<=0&&be>=0,qe=[be,(be+me)/2,me];if(Ue){const Mt=z(-W);for(let kt=qe.length-1;kt>=0;kt--)Math.abs(z(qe[kt]-W)-Mt)<12&&qe.splice(kt,1);qe.push(0)}ye.font="10px system-ui",ye.textAlign="right",ye.textBaseline="middle",ye.lineWidth=1;for(const Mt of qe){const kt=z(Mt-W);ye.strokeStyle=Mt===0?"#9eb3c0":"#dce9f0",ye.setLineDash(Mt===0?[3,2]:[]),ye.beginPath(),ye.moveTo(Re.left,kt),ye.lineTo(Le.width-Re.right,kt),ye.stroke(),ye.fillStyle="#718899";const Gt=Mt===0?"0":Mt.toFixed(q==="m"?2:0);ye.fillText(Gt,Re.left-5,kt)}ye.setLineDash([]);const ht=Math.max(1,Math.ceil(_e.length/Math.max(1,Fe*2)));for(const Mt of J){ye.strokeStyle=Mt.color,ye.lineWidth=1.6,ye.beginPath();for(let kt=0;kt<Mt.values.length;kt+=ht){const Gt=X(kt),vi=z(Mt.values[kt]);kt===0?ye.moveTo(Gt,vi):ye.lineTo(Gt,vi)}ye.lineTo(X(Mt.values.length-1),z(Mt.values[Mt.values.length-1])),ye.stroke()}const rt=X(Math.min(Be,_e.length-1));ye.strokeStyle="#ed8b46",ye.lineWidth=1,ye.beginPath(),ye.moveTo(rt,Re.top),ye.lineTo(rt,Re.top+Je),ye.stroke(),ye.fillStyle="#718899",ye.textAlign="left",ye.textBaseline="alphabetic";const Qt=(_e.length-1)/fe.fps;ye.fillText("时间 0 s",Re.left,Le.height-3);const It=`${Qt.toFixed(1)} s`;ye.fillText(It,Le.width-Re.right-ye.measureText(It).width,Le.height-3)}function we(){if(!se)return;const B=Math.min(Be,se.roll.length-1),J=De-se.baseHeight;fu.textContent=`左 ${(se.leftFootZ[B]+J).toFixed(3)} m · 右 ${(se.rightFootZ[B]+J).toFixed(3)} m`,du.textContent=`${se.roll[B].toFixed(1)}°`;const q=se.leftFootX[B]-se.rightFootX[B];pu.textContent=`实时步幅估计：${q>=0?"+":""}${q.toFixed(3)} m`,ue(oa,[{values:se.leftFootZ,color:"#388ab8"},{values:se.rightFootZ,color:"#465b6b"}],"m",!0),ue(aa,[{values:se.leftFootX,color:"#388ab8"},{values:se.rightFootX,color:"#465b6b"}],"m"),ue(la,[{values:se.roll,color:"#ed8b46"}],"°")}async function We(){const B=++pe,J=fe,q=De,ve=new p.MjData(b),[_e,Le]=c.foot_body_ids,Ce=new Float32Array(J.count),de=new Float32Array(J.count),xe=new Float32Array(J.count),ye=new Float32Array(J.count),Re=new Uint8Array(J.count),Fe=new Float32Array(J.count),Je=c.root_qposadr+2;try{for(let me=0;me<J.count;me++){if(B!==pe)return;const be=me*c.nq;ve.qpos.set(J.frames.subarray(be,be+c.nq)),ve.qpos[Je]+=q-J.frames[Je],p.mj_forward(b,ve),Ce[me]=ve.xpos[_e*3+2],de[me]=ve.xpos[Le*3+2];const Ie=ve.qpos[c.root_qposadr+3],X=ve.qpos[c.root_qposadr+4],z=ve.qpos[c.root_qposadr+5],Ue=ve.qpos[c.root_qposadr+6],qe=Math.atan2(2*(Ie*Ue+X*z),1-2*(z*z+Ue*Ue)),ht=Math.cos(qe),rt=Math.sin(qe),Qt=ve.qpos[c.root_qposadr],It=ve.qpos[c.root_qposadr+1];xe[me]=ht*(ve.xpos[_e*3]-Qt)+rt*(ve.xpos[_e*3+1]-It),ye[me]=ht*(ve.xpos[Le*3]-Qt)+rt*(ve.xpos[Le*3+1]-It),Re[me]=1-2*(X*X+z*z)>=.65?1:0,Fe[me]=Math.atan2(2*(Ie*X+z*Ue),1-2*(X*X+z*z))*180/Math.PI,me%32===31&&await new Promise(xn=>setTimeout(xn,0))}if(B!==pe)return;se={leftFootZ:Ce,rightFootZ:de,leftFootX:xe,rightFootX:ye,roll:Fe,baseHeight:q};const W=pS(xe,ye,Re,J.fps,Ce,de);zs.textContent=W?`整段步频估计：${W.stepsPerSecond.toFixed(2)} 步/秒`:"整段步频估计：无法可靠估计",zs.title=W?`有效步态 ${W.steps} 步、${W.duration.toFixed(1)} 秒；已排除间歇。`:"没有识别到足够稳定的直立交替步态",we()}finally{ve.delete()}}new ResizeObserver(we).observe(oa),new ResizeObserver(we).observe(aa),new ResizeObserver(we).observe(la);let it=0,vt;async function k(){const B=++it,J=fe;Lr.textContent="…",Bs.title="正在抽样评估动作…",await new Promise(q=>setTimeout(q,0));try{const q=await dS(p,b,c,J,()=>B!==it);if(B!==it)return;if(!q){Lr.textContent="—",Bs.title="动作太短，无法估计加速度";return}Lr.textContent=`${q.score}%`,Bs.title=`抽样 ${q.sampleCount} 帧 · 浮动机身受力 ${Math.round(q.force*100)}% · 脚底防滑 ${Math.round(q.slip*100)}% · 穿地检查 ${Math.round(q.penetration*100)}% · 接触帧 ${q.contactSamples}/${q.sampleCount}。仅供参考，非严格动力学验证。`}catch(q){if(B!==it)return;console.error("动力学可信度评估失败",q),Lr.textContent="—",Bs.title=`评估失败：${q.message}`}}function xt(){it++,pe++,se=null,Lr.textContent="…",fu.textContent="左 — m · 右 — m",du.textContent="—°",pu.textContent="实时步幅估计：— m",zs.textContent="整段步频估计：计算中",zs.title="";for(const B of[oa,aa,la]){const J=B.getContext("2d");J.setTransform(1,0,0,1,0,0),J.clearRect(0,0,B.width,B.height)}clearTimeout(vt),vt=setTimeout(()=>{k(),We()},80)}sr.max=String(fe.count-1),sr.disabled=!1,rr.disabled=!1,ra.disabled=!1,sa.disabled=!1,or.disabled=!1,Ir.textContent=`${fe.name} · ${fe.fps} FPS · ${H.length} 个网格`,Fi.querySelector("[data-default]").textContent=`内置示例 · ${c.source}`;function et(){R.qpos.set(fe.frames.subarray(Be*c.nq,(Be+1)*c.nq));const B=c.root_qposadr+2,J=De-fe.frames[B];R.qpos[B]+=J,p.mj_forward(b,R);const q=R.qpos[0]-V.x,ve=R.qpos[1]-V.y;O.position.x+=q,O.position.y+=ve,G.target.x+=q,G.target.y+=ve,V.set(R.qpos[0],R.qpos[1]);const _e=J-He;O.position.z+=_e,G.target.z+=_e,He=J;for(const[Le,Ce]of H){const de=Le*3,xe=Le*9,ye=R.geom_xpos,Re=R.geom_xmat;Ce.matrixAutoUpdate=!1,Ce.matrix.set(Re[xe],Re[xe+1],Re[xe+2],ye[de],Re[xe+3],Re[xe+4],Re[xe+5],ye[de+1],Re[xe+6],Re[xe+7],Re[xe+8],ye[de+2],0,0,0,1),Ce.matrixWorldNeedsUpdate=!0}oe(),sr.value=String(Be),mS.textContent=`${(Be/fe.fps).toFixed(2)} / ${((fe.count-1)/fe.fps).toFixed(2)} s`,_S.textContent=`${Be+1} / ${fe.count}`,ra.disabled=Be===0,sa.disabled=Be===fe.count-1,we()}function $e(B){Ye=B,rr.classList.toggle("is-playing",Ye),rr.setAttribute("aria-label",Ye?"暂停（空格）":"播放（空格）"),rr.setAttribute("title",Ye?"暂停（空格）":"播放（空格）"),rr.setAttribute("aria-pressed",String(Ye)),Ke=performance.now(),Ze=0}function Ve(B){$e(!1),Be=Math.max(0,Math.min(fe.count-1,Be+B)),et()}rr.addEventListener("click",()=>$e(!Ye)),ra.addEventListener("click",()=>Ve(-1)),sa.addEventListener("click",()=>Ve(1)),or.addEventListener("click",()=>{Ee=!Ee,or.setAttribute("aria-pressed",String(Ee)),or.textContent=Ee?"接触点：开 (C)":"接触点：关 (C)",oe()}),ks.addEventListener("change",()=>{const B=Number(ks.value);if(!ks.value||!Number.isFinite(B)||B<0||B>3){ks.value=String(De);return}De=B,et(),we()}),sr.addEventListener("input",()=>{$e(!1),Be=Number(sr.value),et()}),window.addEventListener("keydown",B=>{B.target instanceof HTMLInputElement||(B.code==="Space"&&(B.preventDefault(),B.repeat||$e(!Ye)),B.code==="KeyC"&&or.click(),(B.code==="ArrowRight"||B.code==="ArrowLeft")&&(B.preventDefault(),Ve(B.code==="ArrowRight"?1:-1)))});let _t=0;function ze(B,J,q,ve){fe={...B,name:J},Be=0,sr.max=String(fe.count-1),Ir.textContent=`${fe.name} · ${fe.fps} FPS · ${H.length} 个网格`,Fi.querySelectorAll("button").forEach(_e=>_e.classList.remove("active")),q.classList.add("active"),et(),$e(!0),hi.textContent=ve,xt()}async function nt(B,J){const q=++_t;$e(!1),hi.textContent=`正在读取 ${B.path}…`;try{const ve=await hu(await B.file.arrayBuffer(),c,y);if(q!==_t)return;ze(ve,B.file.name,J,`已加载 ${ve.count} 帧 · ${B.path}`)}catch(ve){if(q!==_t)return;console.error(ve),hi.textContent=`加载失败：${ve.message}`}}function At(B){const J=B.filter(Ce=>Ce.file.name.toLowerCase().endsWith(".npz")).sort((Ce,de)=>Ce.path.localeCompare(de.path,"zh-CN"));Fi.querySelectorAll("[data-local]").forEach(Ce=>Ce.remove());const q=(Ce,de)=>Ce.localeCompare(de,"zh-CN",{numeric:!0});function ve(Ce,de){const xe=document.createElement("li"),ye=document.createElement("button");return ye.textContent=de.file.name,ye.title=de.path,ye.addEventListener("click",()=>nt(de,ye)),xe.appendChild(ye),Ce.appendChild(xe),xe}function _e(Ce,de,xe){const ye=document.createElement("li"),Re=document.createElement("details");Re.open=xe===0;const Fe=document.createElement("summary");Fe.append(document.createTextNode(de.name));const Je=document.createElement("span");Je.className="count",Je.textContent=String(ih(de)),Fe.appendChild(Je),Re.appendChild(Fe);const W=document.createElement("ul");for(const me of Array.from(de.folders.values()).sort((be,Ie)=>q(be.name,Ie.name)))_e(W,me,xe+1);for(const me of de.files.sort((be,Ie)=>q(be.file.name,Ie.file.name)))ve(W,me);return Re.appendChild(W),ye.appendChild(Re),Ce.appendChild(ye),ye}const Le=xS(J);for(const Ce of Array.from(Le.folders.values()).sort((de,xe)=>q(de.name,xe.name)))_e(Fi,Ce,0).dataset.local="true";for(const Ce of Le.files.sort((de,xe)=>q(de.file.name,xe.file.name)))ve(Fi,Ce).dataset.local="true";hi.textContent=J.length?`找到 ${J.length} 个 NPZ，点击文件名播放`:"没有找到 NPZ 文件"}const Et=document.querySelector("#fileInput"),U=document.querySelector("#folderInput");document.querySelector("#chooseFiles").addEventListener("click",()=>Et.click()),document.querySelector("#chooseFolder").addEventListener("click",()=>U.click());for(const B of[Et,U])B.addEventListener("change",()=>{At(Array.from(B.files,J=>({file:J,path:J.webkitRelativePath||J.name}))),B.value=""});window.addEventListener("dragover",B=>{B.preventDefault(),document.body.classList.add("dragging")}),window.addEventListener("dragleave",B=>{B.relatedTarget||document.body.classList.remove("dragging")}),window.addEventListener("drop",async B=>{B.preventDefault(),document.body.classList.remove("dragging");const J=Array.from(B.dataTransfer.items,q=>{var ve;return(ve=q.webkitGetAsEntry)==null?void 0:ve.call(q)}).filter(Boolean);if(!J.length){At(Array.from(B.dataTransfer.files,q=>({file:q,path:q.name})));return}hi.textContent="正在扫描文件夹…";try{const q=(await Promise.all(J.map(ve=>nh(ve)))).flat();At(q)}catch(q){hi.textContent=`读取文件夹失败：${q.message}`}}),Fi.querySelector("[data-default]").addEventListener("click",B=>{_t++,ze({frames:x,count:c.frames,fps:c.fps},c.source,B.currentTarget,"内置示例已就绪")});let A;Fi.querySelector("[data-second]").addEventListener("click",async B=>{const J=B.currentTarget,q=++_t;$e(!1),hi.textContent="正在读取 105_50fps.npz…";try{A??(A=ar("motion/105_50fps.npz").then(_e=>hu(_e,c,y)));const ve=await A;if(q!==_t)return;ze(ve,"105_50fps.npz",J,`已加载 ${ve.count} 帧 · 内置示例`)}catch(ve){if(A=null,q!==_t)return;console.error(ve),hi.textContent=`加载失败：${ve.message}`}}),et(),$e(!0);function j(B){if(requestAnimationFrame(j),Ye){Ze+=Math.min((B-Ke)/1e3,.25);const J=Math.floor(Ze*fe.fps);J&&(Be=(Be+J)%fe.count,Ze-=J/fe.fps,et())}Ke=B,G.update(),D.render(m,O)}requestAnimationFrame(j),xt()}yS().catch(i=>{console.error(i),Ir.textContent=`加载失败：${i.message}`});const ES=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));

var l_=Object.defineProperty;var c_=(i,e,t)=>e in i?l_(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var wn=(i,e,t)=>c_(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ja="180",cr={ROTATE:0,DOLLY:1,PAN:2},or={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},u_=0,ic=1,h_=2,hu=1,f_=2,Qn=3,mi=0,cn=1,Pn=2,di=0,ur=1,rc=2,sc=3,oc=4,d_=5,Fi=100,p_=101,m_=102,__=103,g_=104,v_=200,x_=201,y_=202,E_=203,aa=204,la=205,S_=206,M_=207,T_=208,w_=209,b_=210,A_=211,R_=212,C_=213,P_=214,ca=0,ua=1,ha=2,fr=3,fa=4,da=5,pa=6,ma=7,fu=0,D_=1,L_=2,pi=0,F_=1,I_=2,U_=3,N_=4,O_=5,k_=6,B_=7,du=300,dr=301,pr=302,_a=303,ga=304,Zs=306,va=1e3,Ui=1001,xa=1002,Fn=1003,z_=1004,fs=1005,Vn=1006,xo=1007,Ni=1008,Wn=1009,pu=1010,mu=1011,Ur=1012,Qa=1013,Oi=1014,ei=1015,zr=1016,el=1017,tl=1018,Nr=1020,_u=35902,gu=35899,vu=1021,xu=1022,Ln=1023,Or=1026,kr=1027,yu=1028,nl=1029,Eu=1030,il=1031,rl=1033,zs=33776,Hs=33777,Vs=33778,Gs=33779,ya=35840,Ea=35841,Sa=35842,Ma=35843,Ta=36196,wa=37492,ba=37496,Aa=37808,Ra=37809,Ca=37810,Pa=37811,Da=37812,La=37813,Fa=37814,Ia=37815,Ua=37816,Na=37817,Oa=37818,ka=37819,Ba=37820,za=37821,Ha=36492,Va=36494,Ga=36495,Wa=36283,Xa=36284,$a=36285,qa=36286,H_=3200,V_=3201,Su=0,G_=1,fi="",mn="srgb",mr="srgb-linear",$s="linear",Pt="srgb",Vi=7680,ac=519,W_=512,X_=513,$_=514,Mu=515,q_=516,j_=517,Y_=518,K_=519,lc=35044,cc="300 es",Gn=2e3,qs=2001;class zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const o=n[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const o=n.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ws=Math.PI/180,ja=180/Math.PI;function Hr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function ft(i,e,t){return Math.max(e,Math.min(t,i))}function Z_(i,e){return(i%e+e)%e}function yo(i,e,t){return(1-t)*i+t*e}function wr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function an(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const J_={DEG2RAD:Ws};class rt{constructor(e=0,t=0){rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6],this.y=o[1]*t+o[4]*n+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*n-c*o+e.x,this.y=a*o+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ki{constructor(e=0,t=0,n=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=o}static slerpFlat(e,t,n,o,a,c,h){let p=n[o+0],d=n[o+1],v=n[o+2],_=n[o+3];const x=a[c+0],E=a[c+1],b=a[c+2],R=a[c+3];if(h===0){e[t+0]=p,e[t+1]=d,e[t+2]=v,e[t+3]=_;return}if(h===1){e[t+0]=x,e[t+1]=E,e[t+2]=b,e[t+3]=R;return}if(_!==R||p!==x||d!==E||v!==b){let y=1-h;const m=p*x+d*E+v*b+_*R,N=m>=0?1:-1,I=1-m*m;if(I>Number.EPSILON){const O=Math.sqrt(I),P=Math.atan2(O,m*N);y=Math.sin(y*P)/O,h=Math.sin(h*P)/O}const L=h*N;if(p=p*y+x*L,d=d*y+E*L,v=v*y+b*L,_=_*y+R*L,y===1-h){const O=1/Math.sqrt(p*p+d*d+v*v+_*_);p*=O,d*=O,v*=O,_*=O}}e[t]=p,e[t+1]=d,e[t+2]=v,e[t+3]=_}static multiplyQuaternionsFlat(e,t,n,o,a,c){const h=n[o],p=n[o+1],d=n[o+2],v=n[o+3],_=a[c],x=a[c+1],E=a[c+2],b=a[c+3];return e[t]=h*b+v*_+p*E-d*x,e[t+1]=p*b+v*x+d*_-h*E,e[t+2]=d*b+v*E+h*x-p*_,e[t+3]=v*b-h*_-p*x-d*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,o){return this._x=e,this._y=t,this._z=n,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,o=e._y,a=e._z,c=e._order,h=Math.cos,p=Math.sin,d=h(n/2),v=h(o/2),_=h(a/2),x=p(n/2),E=p(o/2),b=p(a/2);switch(c){case"XYZ":this._x=x*v*_+d*E*b,this._y=d*E*_-x*v*b,this._z=d*v*b+x*E*_,this._w=d*v*_-x*E*b;break;case"YXZ":this._x=x*v*_+d*E*b,this._y=d*E*_-x*v*b,this._z=d*v*b-x*E*_,this._w=d*v*_+x*E*b;break;case"ZXY":this._x=x*v*_-d*E*b,this._y=d*E*_+x*v*b,this._z=d*v*b+x*E*_,this._w=d*v*_-x*E*b;break;case"ZYX":this._x=x*v*_-d*E*b,this._y=d*E*_+x*v*b,this._z=d*v*b-x*E*_,this._w=d*v*_+x*E*b;break;case"YZX":this._x=x*v*_+d*E*b,this._y=d*E*_+x*v*b,this._z=d*v*b-x*E*_,this._w=d*v*_-x*E*b;break;case"XZY":this._x=x*v*_-d*E*b,this._y=d*E*_-x*v*b,this._z=d*v*b+x*E*_,this._w=d*v*_+x*E*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,o=Math.sin(n);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],o=t[4],a=t[8],c=t[1],h=t[5],p=t[9],d=t[2],v=t[6],_=t[10],x=n+h+_;if(x>0){const E=.5/Math.sqrt(x+1);this._w=.25/E,this._x=(v-p)*E,this._y=(a-d)*E,this._z=(c-o)*E}else if(n>h&&n>_){const E=2*Math.sqrt(1+n-h-_);this._w=(v-p)/E,this._x=.25*E,this._y=(o+c)/E,this._z=(a+d)/E}else if(h>_){const E=2*Math.sqrt(1+h-n-_);this._w=(a-d)/E,this._x=(o+c)/E,this._y=.25*E,this._z=(p+v)/E}else{const E=2*Math.sqrt(1+_-n-h);this._w=(c-o)/E,this._x=(a+d)/E,this._y=(p+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const o=Math.min(1,t/n);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,o=e._y,a=e._z,c=e._w,h=t._x,p=t._y,d=t._z,v=t._w;return this._x=n*v+c*h+o*d-a*p,this._y=o*v+c*p+a*h-n*d,this._z=a*v+c*d+n*p-o*h,this._w=c*v-n*h-o*p-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,o=this._y,a=this._z,c=this._w;let h=c*e._w+n*e._x+o*e._y+a*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=c,this._x=n,this._y=o,this._z=a,this;const p=1-h*h;if(p<=Number.EPSILON){const E=1-t;return this._w=E*c+t*this._w,this._x=E*n+t*this._x,this._y=E*o+t*this._y,this._z=E*a+t*this._z,this.normalize(),this}const d=Math.sqrt(p),v=Math.atan2(d,h),_=Math.sin((1-t)*v)/d,x=Math.sin(t*v)/d;return this._w=c*_+this._w*x,this._x=n*_+this._x*x,this._y=o*_+this._y*x,this._z=a*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),o=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,t=0,n=0){ee.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*o,this.y=a[1]*t+a[4]*n+a[7]*o,this.z=a[2]*t+a[5]*n+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*n+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*n+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*n+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,o=this.z,a=e.x,c=e.y,h=e.z,p=e.w,d=2*(c*o-h*n),v=2*(h*t-a*o),_=2*(a*n-c*t);return this.x=t+p*d+c*_-h*v,this.y=n+p*v+h*d-a*_,this.z=o+p*_+a*v-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*o,this.y=a[1]*t+a[5]*n+a[9]*o,this.z=a[2]*t+a[6]*n+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,o=e.y,a=e.z,c=t.x,h=t.y,p=t.z;return this.x=o*p-a*h,this.y=a*c-n*p,this.z=n*h-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Eo.copy(this).projectOnVector(e),this.sub(Eo)}reflect(e){return this.sub(Eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,o=this.z-e.z;return t*t+n*n+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const o=Math.sin(t)*e;return this.x=o*Math.sin(n),this.y=Math.cos(t)*e,this.z=o*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eo=new ee,uc=new ki;class ot{constructor(e,t,n,o,a,c,h,p,d){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,o,a,c,h,p,d)}set(e,t,n,o,a,c,h,p,d){const v=this.elements;return v[0]=e,v[1]=o,v[2]=h,v[3]=t,v[4]=a,v[5]=p,v[6]=n,v[7]=c,v[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,a=this.elements,c=n[0],h=n[3],p=n[6],d=n[1],v=n[4],_=n[7],x=n[2],E=n[5],b=n[8],R=o[0],y=o[3],m=o[6],N=o[1],I=o[4],L=o[7],O=o[2],P=o[5],z=o[8];return a[0]=c*R+h*N+p*O,a[3]=c*y+h*I+p*P,a[6]=c*m+h*L+p*z,a[1]=d*R+v*N+_*O,a[4]=d*y+v*I+_*P,a[7]=d*m+v*L+_*z,a[2]=x*R+E*N+b*O,a[5]=x*y+E*I+b*P,a[8]=x*m+E*L+b*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],c=e[4],h=e[5],p=e[6],d=e[7],v=e[8];return t*c*v-t*h*d-n*a*v+n*h*p+o*a*d-o*c*p}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],c=e[4],h=e[5],p=e[6],d=e[7],v=e[8],_=v*c-h*d,x=h*p-v*a,E=d*a-c*p,b=t*_+n*x+o*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=_*R,e[1]=(o*d-v*n)*R,e[2]=(h*n-o*c)*R,e[3]=x*R,e[4]=(v*t-o*p)*R,e[5]=(o*a-h*t)*R,e[6]=E*R,e[7]=(n*p-d*t)*R,e[8]=(c*t-n*a)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,o,a,c,h){const p=Math.cos(a),d=Math.sin(a);return this.set(n*p,n*d,-n*(p*c+d*h)+c+e,-o*d,o*p,-o*(-d*c+p*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(So.makeScale(e,t)),this}rotate(e){return this.premultiply(So.makeRotation(-e)),this}translate(e,t){return this.premultiply(So.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<9;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const So=new ot;function Tu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Q_(){const i=js("canvas");return i.style.display="block",i}const hc={};function Br(i){i in hc||(hc[i]=!0,console.warn(i))}function eg(i,e,t){return new Promise(function(n,o){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const fc=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dc=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tg(){const i={enabled:!0,workingColorSpace:mr,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Pt&&(o.r=ti(o.r),o.g=ti(o.g),o.b=ti(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Pt&&(o.r=hr(o.r),o.g=hr(o.g),o.b=hr(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===fi?$s:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return Br("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return Br("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[mr]:{primaries:e,whitePoint:n,transfer:$s,toXYZ:fc,fromXYZ:dc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:e,whitePoint:n,transfer:Pt,toXYZ:fc,fromXYZ:dc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}}),i}const Mt=tg();function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Gi;class ng{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gi===void 0&&(Gi=js("canvas")),Gi.width=e.width,Gi.height=e.height;const o=Gi.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),n=Gi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=js("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const o=n.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=ti(a[c]/255)*255;return n.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ti(t[n]/255)*255):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ig=0;class sl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=Hr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,h=o.length;c<h;c++)o[c].isDataTexture?a.push(Mo(o[c].image)):a.push(Mo(o[c]))}else a=Mo(o);n.url=a}return t||(e.images[this.uuid]=n),n}}function Mo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ng.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rg=0;const To=new ee;class un extends zi{constructor(e=un.DEFAULT_IMAGE,t=un.DEFAULT_MAPPING,n=Ui,o=Ui,a=Vn,c=Ni,h=Ln,p=Wn,d=un.DEFAULT_ANISOTROPY,v=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=Hr(),this.name="",this.source=new sl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=p,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(To).x}get height(){return this.source.getSize(To).y}get depth(){return this.source.getSize(To).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}o&&n&&o.isVector2&&n.isVector2||o&&n&&o.isVector3&&n.isVector3||o&&n&&o.isMatrix3&&n.isMatrix3?o.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==du)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case va:e.x=e.x-Math.floor(e.x);break;case Ui:e.x=e.x<0?0:1;break;case xa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case va:e.y=e.y-Math.floor(e.y);break;case Ui:e.y=e.y<0?0:1;break;case xa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=du;un.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,t=0,n=0,o=1){kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,o){return this.x=e,this.y=t,this.z=n,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*n+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*n+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*n+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,o,a;const p=e.elements,d=p[0],v=p[4],_=p[8],x=p[1],E=p[5],b=p[9],R=p[2],y=p[6],m=p[10];if(Math.abs(v-x)<.01&&Math.abs(_-R)<.01&&Math.abs(b-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(_+R)<.1&&Math.abs(b+y)<.1&&Math.abs(d+E+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(d+1)/2,L=(E+1)/2,O=(m+1)/2,P=(v+x)/4,z=(_+R)/4,j=(b+y)/4;return I>L&&I>O?I<.01?(n=0,o=.707106781,a=.707106781):(n=Math.sqrt(I),o=P/n,a=z/n):L>O?L<.01?(n=.707106781,o=0,a=.707106781):(o=Math.sqrt(L),n=P/o,a=j/o):O<.01?(n=.707106781,o=.707106781,a=0):(a=Math.sqrt(O),n=z/a,o=j/a),this.set(n,o,a,t),this}let N=Math.sqrt((y-b)*(y-b)+(_-R)*(_-R)+(x-v)*(x-v));return Math.abs(N)<.001&&(N=1),this.x=(y-b)/N,this.y=(_-R)/N,this.z=(x-v)/N,this.w=Math.acos((d+E+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sg extends zi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t);const o={width:e,height:t,depth:n.depth},a=new un(o);this.textures=[];const c=n.count;for(let h=0;h<c;h++)this.textures[h]=a.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=n,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new sl(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends sg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class wu extends un{constructor(e=null,t=1,n=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class og extends un{constructor(e=null,t=1,n=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vr{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,h=a.count;c<h;c++)e.isMesh===!0?e.getVertexPosition(c,bn):bn.fromBufferAttribute(a,c),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ds.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ds.copy(n.boundingBox)),ds.applyMatrix4(e.matrixWorld),this.union(ds)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),ps.subVectors(this.max,br),Wi.subVectors(e.a,br),Xi.subVectors(e.b,br),$i.subVectors(e.c,br),ii.subVectors(Xi,Wi),ri.subVectors($i,Xi),wi.subVectors(Wi,$i);let t=[0,-ii.z,ii.y,0,-ri.z,ri.y,0,-wi.z,wi.y,ii.z,0,-ii.x,ri.z,0,-ri.x,wi.z,0,-wi.x,-ii.y,ii.x,0,-ri.y,ri.x,0,-wi.y,wi.x,0];return!wo(t,Wi,Xi,$i,ps)||(t=[1,0,0,0,1,0,0,0,1],!wo(t,Wi,Xi,$i,ps))?!1:(ms.crossVectors(ii,ri),t=[ms.x,ms.y,ms.z],wo(t,Wi,Xi,$i,ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const jn=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],bn=new ee,ds=new Vr,Wi=new ee,Xi=new ee,$i=new ee,ii=new ee,ri=new ee,wi=new ee,br=new ee,ps=new ee,ms=new ee,bi=new ee;function wo(i,e,t,n,o){for(let a=0,c=i.length-3;a<=c;a+=3){bi.fromArray(i,a);const h=o.x*Math.abs(bi.x)+o.y*Math.abs(bi.y)+o.z*Math.abs(bi.z),p=e.dot(bi),d=t.dot(bi),v=n.dot(bi);if(Math.max(-Math.max(p,d,v),Math.min(p,d,v))>h)return!1}return!0}const ag=new Vr,Ar=new ee,bo=new ee;class Js{constructor(e=new ee,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ag.setFromPoints(e).getCenter(n);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ar.subVectors(e,this.center);const t=Ar.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),o=(n-this.radius)*.5;this.center.addScaledVector(Ar,o/n),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ar.copy(e.center).add(bo)),this.expandByPoint(Ar.copy(e.center).sub(bo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Yn=new ee,Ao=new ee,_s=new ee,si=new ee,Ro=new ee,gs=new ee,Co=new ee;class ol{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,o){Ao.copy(e).add(t).multiplyScalar(.5),_s.copy(t).sub(e).normalize(),si.copy(this.origin).sub(Ao);const a=e.distanceTo(t)*.5,c=-this.direction.dot(_s),h=si.dot(this.direction),p=-si.dot(_s),d=si.lengthSq(),v=Math.abs(1-c*c);let _,x,E,b;if(v>0)if(_=c*p-h,x=c*h-p,b=a*v,_>=0)if(x>=-b)if(x<=b){const R=1/v;_*=R,x*=R,E=_*(_+c*x+2*h)+x*(c*_+x+2*p)+d}else x=a,_=Math.max(0,-(c*x+h)),E=-_*_+x*(x+2*p)+d;else x=-a,_=Math.max(0,-(c*x+h)),E=-_*_+x*(x+2*p)+d;else x<=-b?(_=Math.max(0,-(-c*a+h)),x=_>0?-a:Math.min(Math.max(-a,-p),a),E=-_*_+x*(x+2*p)+d):x<=b?(_=0,x=Math.min(Math.max(-a,-p),a),E=x*(x+2*p)+d):(_=Math.max(0,-(c*a+h)),x=_>0?a:Math.min(Math.max(-a,-p),a),E=-_*_+x*(x+2*p)+d);else x=c>0?-a:a,_=Math.max(0,-(c*x+h)),E=-_*_+x*(x+2*p)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Ao).addScaledVector(_s,x),E}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const n=Yn.dot(this.direction),o=Yn.dot(Yn)-n*n,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),h=n-c,p=n+c;return p<0?null:h<0?this.at(p,t):this.at(h,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,o,a,c,h,p;const d=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,x=this.origin;return d>=0?(n=(e.min.x-x.x)*d,o=(e.max.x-x.x)*d):(n=(e.max.x-x.x)*d,o=(e.min.x-x.x)*d),v>=0?(a=(e.min.y-x.y)*v,c=(e.max.y-x.y)*v):(a=(e.max.y-x.y)*v,c=(e.min.y-x.y)*v),n>c||a>o||((a>n||isNaN(n))&&(n=a),(c<o||isNaN(o))&&(o=c),_>=0?(h=(e.min.z-x.z)*_,p=(e.max.z-x.z)*_):(h=(e.max.z-x.z)*_,p=(e.min.z-x.z)*_),n>p||h>o)||((h>n||n!==n)&&(n=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(n>=0?n:o,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,o,a){Ro.subVectors(t,e),gs.subVectors(n,e),Co.crossVectors(Ro,gs);let c=this.direction.dot(Co),h;if(c>0){if(o)return null;h=1}else if(c<0)h=-1,c=-c;else return null;si.subVectors(this.origin,e);const p=h*this.direction.dot(gs.crossVectors(si,gs));if(p<0)return null;const d=h*this.direction.dot(Ro.cross(si));if(d<0||p+d>c)return null;const v=-h*si.dot(Co);return v<0?null:this.at(v/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,t,n,o,a,c,h,p,d,v,_,x,E,b,R,y){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,o,a,c,h,p,d,v,_,x,E,b,R,y)}set(e,t,n,o,a,c,h,p,d,v,_,x,E,b,R,y){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=o,m[1]=a,m[5]=c,m[9]=h,m[13]=p,m[2]=d,m[6]=v,m[10]=_,m[14]=x,m[3]=E,m[7]=b,m[11]=R,m[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,o=1/qi.setFromMatrixColumn(e,0).length(),a=1/qi.setFromMatrixColumn(e,1).length(),c=1/qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*o,t[1]=n[1]*o,t[2]=n[2]*o,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,o=e.y,a=e.z,c=Math.cos(n),h=Math.sin(n),p=Math.cos(o),d=Math.sin(o),v=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const x=c*v,E=c*_,b=h*v,R=h*_;t[0]=p*v,t[4]=-p*_,t[8]=d,t[1]=E+b*d,t[5]=x-R*d,t[9]=-h*p,t[2]=R-x*d,t[6]=b+E*d,t[10]=c*p}else if(e.order==="YXZ"){const x=p*v,E=p*_,b=d*v,R=d*_;t[0]=x+R*h,t[4]=b*h-E,t[8]=c*d,t[1]=c*_,t[5]=c*v,t[9]=-h,t[2]=E*h-b,t[6]=R+x*h,t[10]=c*p}else if(e.order==="ZXY"){const x=p*v,E=p*_,b=d*v,R=d*_;t[0]=x-R*h,t[4]=-c*_,t[8]=b+E*h,t[1]=E+b*h,t[5]=c*v,t[9]=R-x*h,t[2]=-c*d,t[6]=h,t[10]=c*p}else if(e.order==="ZYX"){const x=c*v,E=c*_,b=h*v,R=h*_;t[0]=p*v,t[4]=b*d-E,t[8]=x*d+R,t[1]=p*_,t[5]=R*d+x,t[9]=E*d-b,t[2]=-d,t[6]=h*p,t[10]=c*p}else if(e.order==="YZX"){const x=c*p,E=c*d,b=h*p,R=h*d;t[0]=p*v,t[4]=R-x*_,t[8]=b*_+E,t[1]=_,t[5]=c*v,t[9]=-h*v,t[2]=-d*v,t[6]=E*_+b,t[10]=x-R*_}else if(e.order==="XZY"){const x=c*p,E=c*d,b=h*p,R=h*d;t[0]=p*v,t[4]=-_,t[8]=d*v,t[1]=x*_+R,t[5]=c*v,t[9]=E*_-b,t[2]=b*_-E,t[6]=h*v,t[10]=R*_+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lg,e,cg)}lookAt(e,t,n){const o=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),oi.crossVectors(n,fn),oi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),oi.crossVectors(n,fn)),oi.normalize(),vs.crossVectors(fn,oi),o[0]=oi.x,o[4]=vs.x,o[8]=fn.x,o[1]=oi.y,o[5]=vs.y,o[9]=fn.y,o[2]=oi.z,o[6]=vs.z,o[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,a=this.elements,c=n[0],h=n[4],p=n[8],d=n[12],v=n[1],_=n[5],x=n[9],E=n[13],b=n[2],R=n[6],y=n[10],m=n[14],N=n[3],I=n[7],L=n[11],O=n[15],P=o[0],z=o[4],j=o[8],D=o[12],T=o[1],H=o[5],Z=o[9],ie=o[13],te=o[2],fe=o[6],oe=o[10],ye=o[14],se=o[3],de=o[7],Pe=o[11],He=o[15];return a[0]=c*P+h*T+p*te+d*se,a[4]=c*z+h*H+p*fe+d*de,a[8]=c*j+h*Z+p*oe+d*Pe,a[12]=c*D+h*ie+p*ye+d*He,a[1]=v*P+_*T+x*te+E*se,a[5]=v*z+_*H+x*fe+E*de,a[9]=v*j+_*Z+x*oe+E*Pe,a[13]=v*D+_*ie+x*ye+E*He,a[2]=b*P+R*T+y*te+m*se,a[6]=b*z+R*H+y*fe+m*de,a[10]=b*j+R*Z+y*oe+m*Pe,a[14]=b*D+R*ie+y*ye+m*He,a[3]=N*P+I*T+L*te+O*se,a[7]=N*z+I*H+L*fe+O*de,a[11]=N*j+I*Z+L*oe+O*Pe,a[15]=N*D+I*ie+L*ye+O*He,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],o=e[8],a=e[12],c=e[1],h=e[5],p=e[9],d=e[13],v=e[2],_=e[6],x=e[10],E=e[14],b=e[3],R=e[7],y=e[11],m=e[15];return b*(+a*p*_-o*d*_-a*h*x+n*d*x+o*h*E-n*p*E)+R*(+t*p*E-t*d*x+a*c*x-o*c*E+o*d*v-a*p*v)+y*(+t*d*_-t*h*E-a*c*_+n*c*E+a*h*v-n*d*v)+m*(-o*h*v-t*p*_+t*h*x+o*c*_-n*c*x+n*p*v)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],c=e[4],h=e[5],p=e[6],d=e[7],v=e[8],_=e[9],x=e[10],E=e[11],b=e[12],R=e[13],y=e[14],m=e[15],N=_*y*d-R*x*d+R*p*E-h*y*E-_*p*m+h*x*m,I=b*x*d-v*y*d-b*p*E+c*y*E+v*p*m-c*x*m,L=v*R*d-b*_*d+b*h*E-c*R*E-v*h*m+c*_*m,O=b*_*p-v*R*p-b*h*x+c*R*x+v*h*y-c*_*y,P=t*N+n*I+o*L+a*O;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/P;return e[0]=N*z,e[1]=(R*x*a-_*y*a-R*o*E+n*y*E+_*o*m-n*x*m)*z,e[2]=(h*y*a-R*p*a+R*o*d-n*y*d-h*o*m+n*p*m)*z,e[3]=(_*p*a-h*x*a-_*o*d+n*x*d+h*o*E-n*p*E)*z,e[4]=I*z,e[5]=(v*y*a-b*x*a+b*o*E-t*y*E-v*o*m+t*x*m)*z,e[6]=(b*p*a-c*y*a-b*o*d+t*y*d+c*o*m-t*p*m)*z,e[7]=(c*x*a-v*p*a+v*o*d-t*x*d-c*o*E+t*p*E)*z,e[8]=L*z,e[9]=(b*_*a-v*R*a-b*n*E+t*R*E+v*n*m-t*_*m)*z,e[10]=(c*R*a-b*h*a+b*n*d-t*R*d-c*n*m+t*h*m)*z,e[11]=(v*h*a-c*_*a-v*n*d+t*_*d+c*n*E-t*h*E)*z,e[12]=O*z,e[13]=(v*R*o-b*_*o+b*n*x-t*R*x-v*n*y+t*_*y)*z,e[14]=(b*h*o-c*R*o-b*n*p+t*R*p+c*n*y-t*h*y)*z,e[15]=(c*_*o-v*h*o+v*n*p-t*_*p-c*n*x+t*h*x)*z,this}scale(e){const t=this.elements,n=e.x,o=e.y,a=e.z;return t[0]*=n,t[4]*=o,t[8]*=a,t[1]*=n,t[5]*=o,t[9]*=a,t[2]*=n,t[6]*=o,t[10]*=a,t[3]*=n,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,o))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),o=Math.sin(t),a=1-n,c=e.x,h=e.y,p=e.z,d=a*c,v=a*h;return this.set(d*c+n,d*h-o*p,d*p+o*h,0,d*h+o*p,v*h+n,v*p-o*c,0,d*p-o*h,v*p+o*c,a*p*p+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,o,a,c){return this.set(1,n,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,n){const o=this.elements,a=t._x,c=t._y,h=t._z,p=t._w,d=a+a,v=c+c,_=h+h,x=a*d,E=a*v,b=a*_,R=c*v,y=c*_,m=h*_,N=p*d,I=p*v,L=p*_,O=n.x,P=n.y,z=n.z;return o[0]=(1-(R+m))*O,o[1]=(E+L)*O,o[2]=(b-I)*O,o[3]=0,o[4]=(E-L)*P,o[5]=(1-(x+m))*P,o[6]=(y+N)*P,o[7]=0,o[8]=(b+I)*z,o[9]=(y-N)*z,o[10]=(1-(x+R))*z,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,n){const o=this.elements;let a=qi.set(o[0],o[1],o[2]).length();const c=qi.set(o[4],o[5],o[6]).length(),h=qi.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],An.copy(this);const d=1/a,v=1/c,_=1/h;return An.elements[0]*=d,An.elements[1]*=d,An.elements[2]*=d,An.elements[4]*=v,An.elements[5]*=v,An.elements[6]*=v,An.elements[8]*=_,An.elements[9]*=_,An.elements[10]*=_,t.setFromRotationMatrix(An),n.x=a,n.y=c,n.z=h,this}makePerspective(e,t,n,o,a,c,h=Gn,p=!1){const d=this.elements,v=2*a/(t-e),_=2*a/(n-o),x=(t+e)/(t-e),E=(n+o)/(n-o);let b,R;if(p)b=a/(c-a),R=c*a/(c-a);else if(h===Gn)b=-(c+a)/(c-a),R=-2*c*a/(c-a);else if(h===qs)b=-c/(c-a),R=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=v,d[4]=0,d[8]=x,d[12]=0,d[1]=0,d[5]=_,d[9]=E,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=R,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,o,a,c,h=Gn,p=!1){const d=this.elements,v=2/(t-e),_=2/(n-o),x=-(t+e)/(t-e),E=-(n+o)/(n-o);let b,R;if(p)b=1/(c-a),R=c/(c-a);else if(h===Gn)b=-2/(c-a),R=-(c+a)/(c-a);else if(h===qs)b=-1/(c-a),R=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=v,d[4]=0,d[8]=0,d[12]=x,d[1]=0,d[5]=_,d[9]=0,d[13]=E,d[2]=0,d[6]=0,d[10]=b,d[14]=R,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<16;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qi=new ee,An=new Bt,lg=new ee(0,0,0),cg=new ee(1,1,1),oi=new ee,vs=new ee,fn=new ee,pc=new Bt,mc=new ki;class Xn{constructor(e=0,t=0,n=0,o=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,o=this._order){return this._x=e,this._y=t,this._z=n,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const o=e.elements,a=o[0],c=o[4],h=o[8],p=o[1],d=o[5],v=o[9],_=o[2],x=o[6],E=o[10];switch(t){case"XYZ":this._y=Math.asin(ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(x,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(ft(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(p,a));break;case"ZYX":this._y=Math.asin(-ft(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,E),this._z=Math.atan2(p,a)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(ft(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,d),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,d),this._y=Math.atan2(h,a)):(this._x=Math.atan2(-v,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mc.setFromEuler(this),this.setFromQuaternion(mc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class bu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ug=0;const _c=new ee,ji=new ki,Kn=new Bt,xs=new ee,Rr=new ee,hg=new ee,fg=new ki,gc=new ee(1,0,0),vc=new ee(0,1,0),xc=new ee(0,0,1),yc={type:"added"},dg={type:"removed"},Yi={type:"childadded",child:null},Po={type:"childremoved",child:null};class Yt extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=Hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new ee,t=new Xn,n=new ki,o=new ee(1,1,1);function a(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Bt},normalMatrix:{value:new ot}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.multiply(ji),this}rotateOnWorldAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.premultiply(ji),this}rotateX(e){return this.rotateOnAxis(gc,e)}rotateY(e){return this.rotateOnAxis(vc,e)}rotateZ(e){return this.rotateOnAxis(xc,e)}translateOnAxis(e,t){return _c.copy(e).applyQuaternion(this.quaternion),this.position.add(_c.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gc,e)}translateY(e){return this.translateOnAxis(vc,e)}translateZ(e){return this.translateOnAxis(xc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xs.copy(e):xs.set(e,t,n);const o=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Rr,xs,this.up):Kn.lookAt(xs,Rr,this.up),this.quaternion.setFromRotationMatrix(Kn),o&&(Kn.extractRotation(o.matrixWorld),ji.setFromRotationMatrix(Kn),this.quaternion.premultiply(ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yc),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dg),Po.child=e,this.dispatchEvent(Po),Po.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yc),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,o=this.children.length;n<o;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,hg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,fg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let d=0,v=p.length;d<v;d++){const _=p[d];a(e.shapes,_)}else a(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,d=this.material.length;p<d;p++)h.push(a(e.materials,this.material[p]));o.material=h}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(a(e.animations,p))}}if(t){const h=c(e.geometries),p=c(e.materials),d=c(e.textures),v=c(e.images),_=c(e.shapes),x=c(e.skeletons),E=c(e.animations),b=c(e.nodes);h.length>0&&(n.geometries=h),p.length>0&&(n.materials=p),d.length>0&&(n.textures=d),v.length>0&&(n.images=v),_.length>0&&(n.shapes=_),x.length>0&&(n.skeletons=x),E.length>0&&(n.animations=E),b.length>0&&(n.nodes=b)}return n.object=o,n;function c(h){const p=[];for(const d in h){const v=h[d];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const o=e.children[n];this.add(o.clone())}return this}}Yt.DEFAULT_UP=new ee(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new ee,Zn=new ee,Do=new ee,Jn=new ee,Ki=new ee,Zi=new ee,Ec=new ee,Lo=new ee,Fo=new ee,Io=new ee,Uo=new kt,No=new kt,Oo=new kt;class Dn{constructor(e=new ee,t=new ee,n=new ee){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,o){o.subVectors(n,t),Rn.subVectors(e,t),o.cross(Rn);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,n,o,a){Rn.subVectors(o,t),Zn.subVectors(n,t),Do.subVectors(e,t);const c=Rn.dot(Rn),h=Rn.dot(Zn),p=Rn.dot(Do),d=Zn.dot(Zn),v=Zn.dot(Do),_=c*d-h*h;if(_===0)return a.set(0,0,0),null;const x=1/_,E=(d*p-h*v)*x,b=(c*v-h*p)*x;return a.set(1-E-b,b,E)}static containsPoint(e,t,n,o){return this.getBarycoord(e,t,n,o,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,n,o,a,c,h,p){return this.getBarycoord(e,t,n,o,Jn)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(a,Jn.x),p.addScaledVector(c,Jn.y),p.addScaledVector(h,Jn.z),p)}static getInterpolatedAttribute(e,t,n,o,a,c){return Uo.setScalar(0),No.setScalar(0),Oo.setScalar(0),Uo.fromBufferAttribute(e,t),No.fromBufferAttribute(e,n),Oo.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Uo,a.x),c.addScaledVector(No,a.y),c.addScaledVector(Oo,a.z),c}static isFrontFacing(e,t,n,o){return Rn.subVectors(n,t),Zn.subVectors(e,t),Rn.cross(Zn).dot(o)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,o){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,n,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Rn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,o,a){return Dn.getInterpolation(e,this.a,this.b,this.c,t,n,o,a)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,o=this.b,a=this.c;let c,h;Ki.subVectors(o,n),Zi.subVectors(a,n),Lo.subVectors(e,n);const p=Ki.dot(Lo),d=Zi.dot(Lo);if(p<=0&&d<=0)return t.copy(n);Fo.subVectors(e,o);const v=Ki.dot(Fo),_=Zi.dot(Fo);if(v>=0&&_<=v)return t.copy(o);const x=p*_-v*d;if(x<=0&&p>=0&&v<=0)return c=p/(p-v),t.copy(n).addScaledVector(Ki,c);Io.subVectors(e,a);const E=Ki.dot(Io),b=Zi.dot(Io);if(b>=0&&E<=b)return t.copy(a);const R=E*d-p*b;if(R<=0&&d>=0&&b<=0)return h=d/(d-b),t.copy(n).addScaledVector(Zi,h);const y=v*b-E*_;if(y<=0&&_-v>=0&&E-b>=0)return Ec.subVectors(a,o),h=(_-v)/(_-v+(E-b)),t.copy(o).addScaledVector(Ec,h);const m=1/(y+R+x);return c=R*m,h=x*m,t.copy(n).addScaledVector(Ki,c).addScaledVector(Zi,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},ys={h:0,s:0,l:0};function ko(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class dt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,o=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Mt.colorSpaceToWorking(this,o),this}setHSL(e,t,n,o=Mt.workingColorSpace){if(e=Z_(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,c=2*n-a;this.r=ko(c,a,e+1/3),this.g=ko(c,a,e),this.b=ko(c,a,e-1/3)}return Mt.colorSpaceToWorking(this,o),this}setStyle(e,t=mn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],h=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mn){const n=Au[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return Mt.workingToColorSpace(tn.copy(this),e),Math.round(ft(tn.r*255,0,255))*65536+Math.round(ft(tn.g*255,0,255))*256+Math.round(ft(tn.b*255,0,255))}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.workingToColorSpace(tn.copy(this),t);const n=tn.r,o=tn.g,a=tn.b,c=Math.max(n,o,a),h=Math.min(n,o,a);let p,d;const v=(h+c)/2;if(h===c)p=0,d=0;else{const _=c-h;switch(d=v<=.5?_/(c+h):_/(2-c-h),c){case n:p=(o-a)/_+(o<a?6:0);break;case o:p=(a-n)/_+2;break;case a:p=(n-o)/_+4;break}p/=6}return e.h=p,e.s=d,e.l=v,e}getRGB(e,t=Mt.workingColorSpace){return Mt.workingToColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=mn){Mt.workingToColorSpace(tn.copy(this),e);const t=tn.r,n=tn.g,o=tn.b;return e!==mn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(o*255)})`}offsetHSL(e,t,n){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(ys);const n=yo(ai.h,ys.h,t),o=yo(ai.s,ys.s,t),a=yo(ai.l,ys.l,t);return this.setHSL(n,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*o,this.g=a[1]*t+a[4]*n+a[7]*o,this.b=a[2]*t+a[5]*n+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new dt;dt.NAMES=Au;let pg=0;class gr extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=Hr(),this.name="",this.type="Material",this.blending=ur,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=aa,this.blendDst=la,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(n):o&&o.isVector3&&n&&n.isVector3?o.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ur&&(n.blending=this.blending),this.side!==mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==aa&&(n.blendSrc=this.blendSrc),this.blendDst!==la&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ac&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function o(a){const c=[];for(const h in a){const p=a[h];delete p.metadata,c.push(p)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(n.textures=a),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const o=t.length;n=new Array(o);for(let a=0;a!==o;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class al extends gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ht=new ee,Es=new rt;let mg=0;class Mn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lc,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[n+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Es.fromBufferAttribute(this,t),Es.applyMatrix3(e),this.setXY(t,Es.x,Es.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wr(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wr(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wr(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,o){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array),o=an(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this}setXYZW(e,t,n,o,a){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array),o=an(o,this.array),a=an(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lc&&(e.usage=this.usage),e}}class Ru extends Mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Cu extends Mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class hn extends Mn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _g=0;const xn=new Bt,Bo=new Yt,Ji=new ee,dn=new Vr,Cr=new Vr,jt=new ee;class In extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=Hr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tu(e)?Cu:Ru)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ot().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return Bo.lookAt(e),Bo.updateMatrix(),this.applyMatrix4(Bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];n.push(c.x,c.y,c.z||0)}this.setAttribute("position",new hn(n,3))}else{const n=Math.min(e.length,t.count);for(let o=0;o<n;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,o=t.length;n<o;n++){const a=t[n];dn.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const h=t[a];Cr.setFromBufferAttribute(h),this.morphTargetsRelative?(jt.addVectors(dn.min,Cr.min),dn.expandByPoint(jt),jt.addVectors(dn.max,Cr.max),dn.expandByPoint(jt)):(dn.expandByPoint(Cr.min),dn.expandByPoint(Cr.max))}dn.getCenter(n);let o=0;for(let a=0,c=e.count;a<c;a++)jt.fromBufferAttribute(e,a),o=Math.max(o,n.distanceToSquared(jt));if(t)for(let a=0,c=t.length;a<c;a++){const h=t[a],p=this.morphTargetsRelative;for(let d=0,v=h.count;d<v;d++)jt.fromBufferAttribute(h,d),p&&(Ji.fromBufferAttribute(e,d),jt.add(Ji)),o=Math.max(o,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*n.count),4));const c=this.getAttribute("tangent"),h=[],p=[];for(let j=0;j<n.count;j++)h[j]=new ee,p[j]=new ee;const d=new ee,v=new ee,_=new ee,x=new rt,E=new rt,b=new rt,R=new ee,y=new ee;function m(j,D,T){d.fromBufferAttribute(n,j),v.fromBufferAttribute(n,D),_.fromBufferAttribute(n,T),x.fromBufferAttribute(a,j),E.fromBufferAttribute(a,D),b.fromBufferAttribute(a,T),v.sub(d),_.sub(d),E.sub(x),b.sub(x);const H=1/(E.x*b.y-b.x*E.y);isFinite(H)&&(R.copy(v).multiplyScalar(b.y).addScaledVector(_,-E.y).multiplyScalar(H),y.copy(_).multiplyScalar(E.x).addScaledVector(v,-b.x).multiplyScalar(H),h[j].add(R),h[D].add(R),h[T].add(R),p[j].add(y),p[D].add(y),p[T].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let j=0,D=N.length;j<D;++j){const T=N[j],H=T.start,Z=T.count;for(let ie=H,te=H+Z;ie<te;ie+=3)m(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const I=new ee,L=new ee,O=new ee,P=new ee;function z(j){O.fromBufferAttribute(o,j),P.copy(O);const D=h[j];I.copy(D),I.sub(O.multiplyScalar(O.dot(D))).normalize(),L.crossVectors(P,D);const H=L.dot(p[j])<0?-1:1;c.setXYZW(j,I.x,I.y,I.z,H)}for(let j=0,D=N.length;j<D;++j){const T=N[j],H=T.start,Z=T.count;for(let ie=H,te=H+Z;ie<te;ie+=3)z(e.getX(ie+0)),z(e.getX(ie+1)),z(e.getX(ie+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let x=0,E=n.count;x<E;x++)n.setXYZ(x,0,0,0);const o=new ee,a=new ee,c=new ee,h=new ee,p=new ee,d=new ee,v=new ee,_=new ee;if(e)for(let x=0,E=e.count;x<E;x+=3){const b=e.getX(x+0),R=e.getX(x+1),y=e.getX(x+2);o.fromBufferAttribute(t,b),a.fromBufferAttribute(t,R),c.fromBufferAttribute(t,y),v.subVectors(c,a),_.subVectors(o,a),v.cross(_),h.fromBufferAttribute(n,b),p.fromBufferAttribute(n,R),d.fromBufferAttribute(n,y),h.add(v),p.add(v),d.add(v),n.setXYZ(b,h.x,h.y,h.z),n.setXYZ(R,p.x,p.y,p.z),n.setXYZ(y,d.x,d.y,d.z)}else for(let x=0,E=t.count;x<E;x+=3)o.fromBufferAttribute(t,x+0),a.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),v.subVectors(c,a),_.subVectors(o,a),v.cross(_),n.setXYZ(x+0,v.x,v.y,v.z),n.setXYZ(x+1,v.x,v.y,v.z),n.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(h,p){const d=h.array,v=h.itemSize,_=h.normalized,x=new d.constructor(p.length*v);let E=0,b=0;for(let R=0,y=p.length;R<y;R++){h.isInterleavedBufferAttribute?E=p[R]*h.data.stride+h.offset:E=p[R]*v;for(let m=0;m<v;m++)x[b++]=d[E++]}return new Mn(x,v,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new In,n=this.index.array,o=this.attributes;for(const h in o){const p=o[h],d=e(p,n);t.setAttribute(h,d)}const a=this.morphAttributes;for(const h in a){const p=[],d=a[h];for(let v=0,_=d.length;v<_;v++){const x=d[v],E=e(x,n);p.push(E)}t.morphAttributes[h]=p}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let h=0,p=c.length;h<p;h++){const d=c[h];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(e[d]=p[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const p in n){const d=n[p];e.data.attributes[p]=d.toJSON(e.data)}const o={};let a=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],v=[];for(let _=0,x=d.length;_<x;_++){const E=d[_];v.push(E.toJSON(e.data))}v.length>0&&(o[p]=v,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const o=e.attributes;for(const d in o){const v=o[d];this.setAttribute(d,v.clone(t))}const a=e.morphAttributes;for(const d in a){const v=[],_=a[d];for(let x=0,E=_.length;x<E;x++)v.push(_[x].clone(t));this.morphAttributes[d]=v}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,v=c.length;d<v;d++){const _=c[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sc=new Bt,Ai=new ol,Ss=new Js,Mc=new ee,Ms=new ee,Ts=new ee,ws=new ee,zo=new ee,bs=new ee,Tc=new ee,As=new ee;class Sn extends Yt{constructor(e=new In,t=new al){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const h=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}getVertexPosition(e,t){const n=this.geometry,o=n.attributes.position,a=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(a&&h){bs.set(0,0,0);for(let p=0,d=a.length;p<d;p++){const v=h[p],_=a[p];v!==0&&(zo.fromBufferAttribute(_,e),c?bs.addScaledVector(zo,v):bs.addScaledVector(zo.sub(t),v))}t.add(bs)}return t}raycast(e,t){const n=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(a),Ai.copy(e.ray).recast(e.near),!(Ss.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Ss,Mc)===null||Ai.origin.distanceToSquared(Mc)>(e.far-e.near)**2))&&(Sc.copy(a).invert(),Ai.copy(e.ray).applyMatrix4(Sc),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,n){let o;const a=this.geometry,c=this.material,h=a.index,p=a.attributes.position,d=a.attributes.uv,v=a.attributes.uv1,_=a.attributes.normal,x=a.groups,E=a.drawRange;if(h!==null)if(Array.isArray(c))for(let b=0,R=x.length;b<R;b++){const y=x[b],m=c[y.materialIndex],N=Math.max(y.start,E.start),I=Math.min(h.count,Math.min(y.start+y.count,E.start+E.count));for(let L=N,O=I;L<O;L+=3){const P=h.getX(L),z=h.getX(L+1),j=h.getX(L+2);o=Rs(this,m,e,n,d,v,_,P,z,j),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const b=Math.max(0,E.start),R=Math.min(h.count,E.start+E.count);for(let y=b,m=R;y<m;y+=3){const N=h.getX(y),I=h.getX(y+1),L=h.getX(y+2);o=Rs(this,c,e,n,d,v,_,N,I,L),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(c))for(let b=0,R=x.length;b<R;b++){const y=x[b],m=c[y.materialIndex],N=Math.max(y.start,E.start),I=Math.min(p.count,Math.min(y.start+y.count,E.start+E.count));for(let L=N,O=I;L<O;L+=3){const P=L,z=L+1,j=L+2;o=Rs(this,m,e,n,d,v,_,P,z,j),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const b=Math.max(0,E.start),R=Math.min(p.count,E.start+E.count);for(let y=b,m=R;y<m;y+=3){const N=y,I=y+1,L=y+2;o=Rs(this,c,e,n,d,v,_,N,I,L),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function gg(i,e,t,n,o,a,c,h){let p;if(e.side===cn?p=n.intersectTriangle(c,a,o,!0,h):p=n.intersectTriangle(o,a,c,e.side===mi,h),p===null)return null;As.copy(h),As.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(As);return d<t.near||d>t.far?null:{distance:d,point:As.clone(),object:i}}function Rs(i,e,t,n,o,a,c,h,p,d){i.getVertexPosition(h,Ms),i.getVertexPosition(p,Ts),i.getVertexPosition(d,ws);const v=gg(i,e,t,n,Ms,Ts,ws,Tc);if(v){const _=new ee;Dn.getBarycoord(Tc,Ms,Ts,ws,_),o&&(v.uv=Dn.getInterpolatedAttribute(o,h,p,d,_,new rt)),a&&(v.uv1=Dn.getInterpolatedAttribute(a,h,p,d,_,new rt)),c&&(v.normal=Dn.getInterpolatedAttribute(c,h,p,d,_,new ee),v.normal.dot(n.direction)>0&&v.normal.multiplyScalar(-1));const x={a:h,b:p,c:d,normal:new ee,materialIndex:0};Dn.getNormal(Ms,Ts,ws,x.normal),v.face=x,v.barycoord=_}return v}class Gr extends In{constructor(e=1,t=1,n=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:o,heightSegments:a,depthSegments:c};const h=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const p=[],d=[],v=[],_=[];let x=0,E=0;b("z","y","x",-1,-1,n,t,e,c,a,0),b("z","y","x",1,-1,n,t,-e,c,a,1),b("x","z","y",1,1,e,n,t,o,c,2),b("x","z","y",1,-1,e,n,-t,o,c,3),b("x","y","z",1,-1,e,t,n,o,a,4),b("x","y","z",-1,-1,e,t,-n,o,a,5),this.setIndex(p),this.setAttribute("position",new hn(d,3)),this.setAttribute("normal",new hn(v,3)),this.setAttribute("uv",new hn(_,2));function b(R,y,m,N,I,L,O,P,z,j,D){const T=L/z,H=O/j,Z=L/2,ie=O/2,te=P/2,fe=z+1,oe=j+1;let ye=0,se=0;const de=new ee;for(let Pe=0;Pe<oe;Pe++){const He=Pe*H-ie;for(let Be=0;Be<fe;Be++){const je=Be*T-Z;de[R]=je*N,de[y]=He*I,de[m]=te,d.push(de.x,de.y,de.z),de[R]=0,de[y]=0,de[m]=P>0?1:-1,v.push(de.x,de.y,de.z),_.push(Be/z),_.push(1-Pe/j),ye+=1}}for(let Pe=0;Pe<j;Pe++)for(let He=0;He<z;He++){const Be=x+He+fe*Pe,je=x+He+fe*(Pe+1),Ye=x+(He+1)+fe*(Pe+1),Ke=x+(He+1)+fe*Pe;p.push(Be,je,Ke),p.push(je,Ye,Ke),se+=6}h.addGroup(E,se,D),E+=se,x+=ye}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _r(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const o=i[t][n];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=o.clone():Array.isArray(o)?e[t][n]=o.slice():e[t][n]=o}}return e}function rn(i){const e={};for(let t=0;t<i.length;t++){const n=_r(i[t]);for(const o in n)e[o]=n[o]}return e}function vg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Pu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const xg={clone:_r,merge:rn};var yg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yg,this.fragmentShader=Eg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_r(e.uniforms),this.uniformsGroups=vg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const o in this.extensions)this.extensions[o]===!0&&(n[o]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Du extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const li=new ee,wc=new rt,bc=new rt;class En extends Du{constructor(e=50,t=1,n=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ja*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ja*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,wc,bc),t.subVectors(bc,wc)}setViewOffset(e,t,n,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ws*.5*this.fov)/this.zoom,n=2*t,o=this.aspect*n,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,d=c.fullHeight;a+=c.offsetX*o/p,t-=c.offsetY*n/d,o*=c.width/p,n*=c.height/d}const h=this.filmOffset;h!==0&&(a+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qi=-90,er=1;class Sg extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new En(Qi,er,e,t);o.layers=this.layers,this.add(o);const a=new En(Qi,er,e,t);a.layers=this.layers,this.add(a);const c=new En(Qi,er,e,t);c.layers=this.layers,this.add(c);const h=new En(Qi,er,e,t);h.layers=this.layers,this.add(h);const p=new En(Qi,er,e,t);p.layers=this.layers,this.add(p);const d=new En(Qi,er,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,o,a,c,h,p]=t;for(const d of t)this.remove(d);if(e===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,h,p,d,v]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const R=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,o),e.render(t,a),e.setRenderTarget(n,1,o),e.render(t,c),e.setRenderTarget(n,2,o),e.render(t,h),e.setRenderTarget(n,3,o),e.render(t,p),e.setRenderTarget(n,4,o),e.render(t,d),n.texture.generateMipmaps=R,e.setRenderTarget(n,5,o),e.render(t,v),e.setRenderTarget(_,x,E),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class Lu extends un{constructor(e=[],t=dr,n,o,a,c,h,p,d,v){super(e,t,n,o,a,c,h,p,d,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mg extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},o=[n,n,n,n,n,n];this.texture=new Lu(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Gr(5,5,5),a=new _i({name:"CubemapFromEquirect",uniforms:_r(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:di});a.uniforms.tEquirect.value=t;const c=new Sn(o,a),h=t.minFilter;return t.minFilter===Ni&&(t.minFilter=Vn),new Sg(1,10,this).update(e,c),t.minFilter=h,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,n=!0,o=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,o);e.setRenderTarget(a)}}class Cs extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tg={type:"move"};class Ho{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let o=null,a=null,c=null;const h=this._targetRay,p=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const R of e.hand.values()){const y=t.getJointPose(R,n),m=this._getHandJoint(d,R);y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=y.radius),m.visible=y!==null}const v=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],x=v.position.distanceTo(_.position),E=.02,b=.005;d.inputState.pinching&&x>E+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&x<=E-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(p.matrix.fromArray(a.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,a.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(a.linearVelocity)):p.hasLinearVelocity=!1,a.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(a.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(o=t.getPose(e.targetRaySpace,n),o===null&&a!==null&&(o=a),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Tg)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=a!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Cs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class wg extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Vo=new ee,bg=new ee,Ag=new ot;class hi{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,o){return this.normal.set(e,t,n),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const o=Vo.subVectors(n,t).cross(bg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Vo),o=this.normal.dot(n);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ag.getNormalMatrix(e),o=this.coplanarPoint(Vo).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new Js,Rg=new rt(.5,.5),Ps=new ee;class ll{constructor(e=new hi,t=new hi,n=new hi,o=new hi,a=new hi,c=new hi){this.planes=[e,t,n,o,a,c]}set(e,t,n,o,a,c){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(n),h[3].copy(o),h[4].copy(a),h[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gn,n=!1){const o=this.planes,a=e.elements,c=a[0],h=a[1],p=a[2],d=a[3],v=a[4],_=a[5],x=a[6],E=a[7],b=a[8],R=a[9],y=a[10],m=a[11],N=a[12],I=a[13],L=a[14],O=a[15];if(o[0].setComponents(d-c,E-v,m-b,O-N).normalize(),o[1].setComponents(d+c,E+v,m+b,O+N).normalize(),o[2].setComponents(d+h,E+_,m+R,O+I).normalize(),o[3].setComponents(d-h,E-_,m-R,O-I).normalize(),n)o[4].setComponents(p,x,y,L).normalize(),o[5].setComponents(d-p,E-x,m-y,O-L).normalize();else if(o[4].setComponents(d-p,E-x,m-y,O-L).normalize(),t===Gn)o[5].setComponents(d+p,E+x,m+y,O+L).normalize();else if(t===qs)o[5].setComponents(p,x,y,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){Ri.center.set(0,0,0);const t=Rg.distanceTo(e.center);return Ri.radius=.7071067811865476+t,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,n=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const o=t[n];if(Ps.x=o.normal.x>0?e.max.x:e.min.x,Ps.y=o.normal.y>0?e.max.y:e.min.y,Ps.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fu extends gr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ys=new ee,Ks=new ee,Ac=new Bt,Pr=new ol,Ds=new Js,Go=new ee,Rc=new ee;class Cg extends Yt{constructor(e=new In,t=new Fu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let o=1,a=t.count;o<a;o++)Ys.fromBufferAttribute(t,o-1),Ks.fromBufferAttribute(t,o),n[o]=n[o-1],n[o]+=Ys.distanceTo(Ks);e.setAttribute("lineDistance",new hn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,o=this.matrixWorld,a=e.params.Line.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(o),Ds.radius+=a,e.ray.intersectsSphere(Ds)===!1)return;Ac.copy(o).invert(),Pr.copy(e.ray).applyMatrix4(Ac);const h=a/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=this.isLineSegments?2:1,v=n.index,x=n.attributes.position;if(v!==null){const E=Math.max(0,c.start),b=Math.min(v.count,c.start+c.count);for(let R=E,y=b-1;R<y;R+=d){const m=v.getX(R),N=v.getX(R+1),I=Ls(this,e,Pr,p,m,N,R);I&&t.push(I)}if(this.isLineLoop){const R=v.getX(b-1),y=v.getX(E),m=Ls(this,e,Pr,p,R,y,b-1);m&&t.push(m)}}else{const E=Math.max(0,c.start),b=Math.min(x.count,c.start+c.count);for(let R=E,y=b-1;R<y;R+=d){const m=Ls(this,e,Pr,p,R,R+1,R);m&&t.push(m)}if(this.isLineLoop){const R=Ls(this,e,Pr,p,b-1,E,b-1);R&&t.push(R)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const h=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}}function Ls(i,e,t,n,o,a,c){const h=i.geometry.attributes.position;if(Ys.fromBufferAttribute(h,o),Ks.fromBufferAttribute(h,a),t.distanceSqToSegment(Ys,Ks,Go,Rc)>n)return;Go.applyMatrix4(i.matrixWorld);const d=e.ray.origin.distanceTo(Go);if(!(d<e.near||d>e.far))return{distance:d,point:Rc.clone().applyMatrix4(i.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:i}}const Cc=new ee,Pc=new ee;class Pg extends Cg{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let o=0,a=t.count;o<a;o+=2)Cc.fromBufferAttribute(t,o),Pc.fromBufferAttribute(t,o+1),n[o]=o===0?0:n[o-1],n[o+1]=n[o]+Cc.distanceTo(Pc);e.setAttribute("lineDistance",new hn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Iu extends un{constructor(e,t,n=Oi,o,a,c,h=Fn,p=Fn,d,v=Or,_=1){if(v!==Or&&v!==kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:_};super(x,o,a,c,h,p,v,n,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Uu extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class cl extends In{constructor(e=1,t=1,n=1,o=32,a=1,c=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:o,heightSegments:a,openEnded:c,thetaStart:h,thetaLength:p};const d=this;o=Math.floor(o),a=Math.floor(a);const v=[],_=[],x=[],E=[];let b=0;const R=[],y=n/2;let m=0;N(),c===!1&&(e>0&&I(!0),t>0&&I(!1)),this.setIndex(v),this.setAttribute("position",new hn(_,3)),this.setAttribute("normal",new hn(x,3)),this.setAttribute("uv",new hn(E,2));function N(){const L=new ee,O=new ee;let P=0;const z=(t-e)/n;for(let j=0;j<=a;j++){const D=[],T=j/a,H=T*(t-e)+e;for(let Z=0;Z<=o;Z++){const ie=Z/o,te=ie*p+h,fe=Math.sin(te),oe=Math.cos(te);O.x=H*fe,O.y=-T*n+y,O.z=H*oe,_.push(O.x,O.y,O.z),L.set(fe,z,oe).normalize(),x.push(L.x,L.y,L.z),E.push(ie,1-T),D.push(b++)}R.push(D)}for(let j=0;j<o;j++)for(let D=0;D<a;D++){const T=R[D][j],H=R[D+1][j],Z=R[D+1][j+1],ie=R[D][j+1];(e>0||D!==0)&&(v.push(T,H,ie),P+=3),(t>0||D!==a-1)&&(v.push(H,Z,ie),P+=3)}d.addGroup(m,P,0),m+=P}function I(L){const O=b,P=new rt,z=new ee;let j=0;const D=L===!0?e:t,T=L===!0?1:-1;for(let Z=1;Z<=o;Z++)_.push(0,y*T,0),x.push(0,T,0),E.push(.5,.5),b++;const H=b;for(let Z=0;Z<=o;Z++){const te=Z/o*p+h,fe=Math.cos(te),oe=Math.sin(te);z.x=D*oe,z.y=y*T,z.z=D*fe,_.push(z.x,z.y,z.z),x.push(0,T,0),P.x=fe*.5+.5,P.y=oe*.5*T+.5,E.push(P.x,P.y),b++}for(let Z=0;Z<o;Z++){const ie=O+Z,te=H+Z;L===!0?v.push(te,te+1,ie):v.push(te+1,te,ie),j+=3}d.addGroup(m,j,L===!0?1:2),m+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wr extends In{constructor(e=1,t=1,n=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:o};const a=e/2,c=t/2,h=Math.floor(n),p=Math.floor(o),d=h+1,v=p+1,_=e/h,x=t/p,E=[],b=[],R=[],y=[];for(let m=0;m<v;m++){const N=m*x-c;for(let I=0;I<d;I++){const L=I*_-a;b.push(L,-N,0),R.push(0,0,1),y.push(I/h),y.push(1-m/p)}}for(let m=0;m<p;m++)for(let N=0;N<h;N++){const I=N+d*m,L=N+d*(m+1),O=N+1+d*(m+1),P=N+1+d*m;E.push(I,L,P),E.push(L,O,P)}this.setIndex(E),this.setAttribute("position",new hn(b,3)),this.setAttribute("normal",new hn(R,3)),this.setAttribute("uv",new hn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Dc extends gr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Su,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dg extends gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=H_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lg extends gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Nu extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Fg extends Nu{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new dt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Wo=new Bt,Lc=new ee,Fc=new ee;class Ig{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ll,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Lc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lc),Fc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fc),t.updateMatrixWorld(),Wo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ou extends Du{constructor(e=-1,t=1,n=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=n-e,c=n+e,h=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,c=a+d*this.view.width,h-=v*this.view.offsetY,p=h-v*this.view.height}this.projectionMatrix.makeOrthographic(a,c,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ug extends Ig{constructor(){super(new Ou(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ng extends Nu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new Ug}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Og extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ic{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ft(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class kg extends Pg{constructor(e=10,t=10,n=4473924,o=8947848){n=new dt(n),o=new dt(o);const a=t/2,c=e/t,h=e/2,p=[],d=[];for(let x=0,E=0,b=-h;x<=t;x++,b+=c){p.push(-h,0,b,h,0,b),p.push(b,0,-h,b,0,h);const R=x===a?n:o;R.toArray(d,E),E+=3,R.toArray(d,E),E+=3,R.toArray(d,E),E+=3,R.toArray(d,E),E+=3}const v=new In;v.setAttribute("position",new hn(p,3)),v.setAttribute("color",new hn(d,3));const _=new Fu({vertexColors:!0,toneMapped:!1});super(v,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Bg extends zi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Uc(i,e,t,n){const o=zg(n);switch(t){case vu:return i*e;case yu:return i*e/o.components*o.byteLength;case nl:return i*e/o.components*o.byteLength;case Eu:return i*e*2/o.components*o.byteLength;case il:return i*e*2/o.components*o.byteLength;case xu:return i*e*3/o.components*o.byteLength;case Ln:return i*e*4/o.components*o.byteLength;case rl:return i*e*4/o.components*o.byteLength;case zs:case Hs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vs:case Gs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ea:case Ma:return Math.max(i,16)*Math.max(e,8)/4;case ya:case Sa:return Math.max(i,8)*Math.max(e,8)/2;case Ta:case wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ra:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ca:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case La:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Na:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ka:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ba:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case za:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ha:case Va:case Ga:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case $a:case qa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zg(i){switch(i){case Wn:case pu:return{byteLength:1,components:1};case Ur:case mu:case zr:return{byteLength:2,components:1};case el:case tl:return{byteLength:2,components:4};case Oi:case Qa:case ei:return{byteLength:4,components:1};case _u:case gu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ja}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ja);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ku(){let i=null,e=!1,t=null,n=null;function o(a,c){t(a,c),n=i.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(o),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Hg(i){const e=new WeakMap;function t(h,p){const d=h.array,v=h.usage,_=d.byteLength,x=i.createBuffer();i.bindBuffer(p,x),i.bufferData(p,d,v),h.onUploadCallback();let E;if(d instanceof Float32Array)E=i.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)E=i.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?E=i.HALF_FLOAT:E=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)E=i.SHORT;else if(d instanceof Uint32Array)E=i.UNSIGNED_INT;else if(d instanceof Int32Array)E=i.INT;else if(d instanceof Int8Array)E=i.BYTE;else if(d instanceof Uint8Array)E=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)E=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:E,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function n(h,p,d){const v=p.array,_=p.updateRanges;if(i.bindBuffer(d,h),_.length===0)i.bufferSubData(d,0,v);else{_.sort((E,b)=>E.start-b.start);let x=0;for(let E=1;E<_.length;E++){const b=_[x],R=_[E];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++x,_[x]=R)}_.length=x+1;for(let E=0,b=_.length;E<b;E++){const R=_[E];i.bufferSubData(d,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(i.deleteBuffer(p.buffer),e.delete(h))}function c(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=e.get(h);if(d===void 0)e.set(h,t(h,p));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,h,p),d.version=h.version}}return{get:o,remove:a,update:c}}var Vg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gg=`#ifdef USE_ALPHAHASH
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
#endif`,Wg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$g=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jg=`#ifdef USE_AOMAP
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
#endif`,Yg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kg=`#ifdef USE_BATCHING
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
#endif`,Zg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ev=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tv=`#ifdef USE_IRIDESCENCE
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
#endif`,nv=`#ifdef USE_BUMPMAP
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
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ov=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,av=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,hv=`#define PI 3.141592653589793
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
} // validated`,fv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dv=`vec3 transformedNormal = objectNormal;
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
#endif`,pv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_v=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vv="gl_FragColor = linearToOutputTexel( gl_FragColor );",xv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yv=`#ifdef USE_ENVMAP
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
#endif`,Ev=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sv=`#ifdef USE_ENVMAP
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
#endif`,Mv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tv=`#ifdef USE_ENVMAP
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
#endif`,wv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Av=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cv=`#ifdef USE_GRADIENTMAP
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
}`,Pv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fv=`uniform bool receiveShadow;
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
#endif`,Iv=`#ifdef USE_ENVMAP
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
#endif`,Uv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ov=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bv=`PhysicalMaterial material;
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
#endif`,zv=`struct PhysicalMaterial {
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
}`,Hv=`
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
#endif`,Vv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$v=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zv=`#if defined( USE_POINTS_UV )
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
#endif`,Jv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,t0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i0=`#ifdef USE_MORPHTARGETS
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
#endif`,r0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,o0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,a0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,u0=`#ifdef USE_NORMALMAP
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
#endif`,h0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,d0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,p0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,g0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,v0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,y0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,b0=`float getShadowMask() {
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
}`,A0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R0=`#ifdef USE_SKINNING
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
#endif`,C0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,P0=`#ifdef USE_SKINNING
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
#endif`,D0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,U0=`#ifdef USE_TRANSMISSION
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
#endif`,N0=`#ifdef USE_TRANSMISSION
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
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const H0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V0=`uniform sampler2D t2D;
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
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`#include <common>
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
}`,j0=`#if DEPTH_PACKING == 3200
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
}`,Y0=`#define DISTANCE
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
}`,K0=`#define DISTANCE
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
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q0=`uniform float scale;
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
}`,ex=`uniform vec3 diffuse;
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
}`,tx=`#include <common>
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
}`,nx=`uniform vec3 diffuse;
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
}`,ix=`#define LAMBERT
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
}`,rx=`#define LAMBERT
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
}`,sx=`#define MATCAP
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
}`,ox=`#define MATCAP
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
}`,ax=`#define NORMAL
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
}`,lx=`#define NORMAL
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
}`,cx=`#define PHONG
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
}`,ux=`#define PHONG
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
}`,hx=`#define STANDARD
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
}`,fx=`#define STANDARD
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
}`,dx=`#define TOON
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
}`,px=`#define TOON
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
}`,mx=`uniform float size;
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
}`,_x=`uniform vec3 diffuse;
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
}`,gx=`#include <common>
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
}`,vx=`uniform vec3 color;
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
}`,xx=`uniform float rotation;
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
}`,yx=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:Vg,alphahash_pars_fragment:Gg,alphamap_fragment:Wg,alphamap_pars_fragment:Xg,alphatest_fragment:$g,alphatest_pars_fragment:qg,aomap_fragment:jg,aomap_pars_fragment:Yg,batching_pars_vertex:Kg,batching_vertex:Zg,begin_vertex:Jg,beginnormal_vertex:Qg,bsdfs:ev,iridescence_fragment:tv,bumpmap_pars_fragment:nv,clipping_planes_fragment:iv,clipping_planes_pars_fragment:rv,clipping_planes_pars_vertex:sv,clipping_planes_vertex:ov,color_fragment:av,color_pars_fragment:lv,color_pars_vertex:cv,color_vertex:uv,common:hv,cube_uv_reflection_fragment:fv,defaultnormal_vertex:dv,displacementmap_pars_vertex:pv,displacementmap_vertex:mv,emissivemap_fragment:_v,emissivemap_pars_fragment:gv,colorspace_fragment:vv,colorspace_pars_fragment:xv,envmap_fragment:yv,envmap_common_pars_fragment:Ev,envmap_pars_fragment:Sv,envmap_pars_vertex:Mv,envmap_physical_pars_fragment:Iv,envmap_vertex:Tv,fog_vertex:wv,fog_pars_vertex:bv,fog_fragment:Av,fog_pars_fragment:Rv,gradientmap_pars_fragment:Cv,lightmap_pars_fragment:Pv,lights_lambert_fragment:Dv,lights_lambert_pars_fragment:Lv,lights_pars_begin:Fv,lights_toon_fragment:Uv,lights_toon_pars_fragment:Nv,lights_phong_fragment:Ov,lights_phong_pars_fragment:kv,lights_physical_fragment:Bv,lights_physical_pars_fragment:zv,lights_fragment_begin:Hv,lights_fragment_maps:Vv,lights_fragment_end:Gv,logdepthbuf_fragment:Wv,logdepthbuf_pars_fragment:Xv,logdepthbuf_pars_vertex:$v,logdepthbuf_vertex:qv,map_fragment:jv,map_pars_fragment:Yv,map_particle_fragment:Kv,map_particle_pars_fragment:Zv,metalnessmap_fragment:Jv,metalnessmap_pars_fragment:Qv,morphinstance_vertex:e0,morphcolor_vertex:t0,morphnormal_vertex:n0,morphtarget_pars_vertex:i0,morphtarget_vertex:r0,normal_fragment_begin:s0,normal_fragment_maps:o0,normal_pars_fragment:a0,normal_pars_vertex:l0,normal_vertex:c0,normalmap_pars_fragment:u0,clearcoat_normal_fragment_begin:h0,clearcoat_normal_fragment_maps:f0,clearcoat_pars_fragment:d0,iridescence_pars_fragment:p0,opaque_fragment:m0,packing:_0,premultiplied_alpha_fragment:g0,project_vertex:v0,dithering_fragment:x0,dithering_pars_fragment:y0,roughnessmap_fragment:E0,roughnessmap_pars_fragment:S0,shadowmap_pars_fragment:M0,shadowmap_pars_vertex:T0,shadowmap_vertex:w0,shadowmask_pars_fragment:b0,skinbase_vertex:A0,skinning_pars_vertex:R0,skinning_vertex:C0,skinnormal_vertex:P0,specularmap_fragment:D0,specularmap_pars_fragment:L0,tonemapping_fragment:F0,tonemapping_pars_fragment:I0,transmission_fragment:U0,transmission_pars_fragment:N0,uv_pars_fragment:O0,uv_pars_vertex:k0,uv_vertex:B0,worldpos_vertex:z0,background_vert:H0,background_frag:V0,backgroundCube_vert:G0,backgroundCube_frag:W0,cube_vert:X0,cube_frag:$0,depth_vert:q0,depth_frag:j0,distanceRGBA_vert:Y0,distanceRGBA_frag:K0,equirect_vert:Z0,equirect_frag:J0,linedashed_vert:Q0,linedashed_frag:ex,meshbasic_vert:tx,meshbasic_frag:nx,meshlambert_vert:ix,meshlambert_frag:rx,meshmatcap_vert:sx,meshmatcap_frag:ox,meshnormal_vert:ax,meshnormal_frag:lx,meshphong_vert:cx,meshphong_frag:ux,meshphysical_vert:hx,meshphysical_frag:fx,meshtoon_vert:dx,meshtoon_frag:px,points_vert:mx,points_frag:_x,shadow_vert:gx,shadow_frag:vx,sprite_vert:xx,sprite_frag:yx},Ne={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},zn={basic:{uniforms:rn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:rn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new dt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:rn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:rn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:rn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new dt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:rn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:rn([Ne.points,Ne.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:rn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:rn([Ne.common,Ne.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:rn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:rn([Ne.sprite,Ne.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:rn([Ne.common,Ne.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:rn([Ne.lights,Ne.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};zn.physical={uniforms:rn([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Fs={r:0,b:0,g:0},Ci=new Xn,Ex=new Bt;function Sx(i,e,t,n,o,a,c){const h=new dt(0);let p=a===!0?0:1,d,v,_=null,x=0,E=null;function b(I){let L=I.isScene===!0?I.background:null;return L&&L.isTexture&&(L=(I.backgroundBlurriness>0?t:e).get(L)),L}function R(I){let L=!1;const O=b(I);O===null?m(h,p):O&&O.isColor&&(m(O,1),L=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||L)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(I,L){const O=b(L);O&&(O.isCubeTexture||O.mapping===Zs)?(v===void 0&&(v=new Sn(new Gr(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:_r(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(P,z,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),Ci.copy(L.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),v.material.uniforms.envMap.value=O,v.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(Ex.makeRotationFromEuler(Ci)),v.material.toneMapped=Mt.getTransfer(O.colorSpace)!==Pt,(_!==O||x!==O.version||E!==i.toneMapping)&&(v.material.needsUpdate=!0,_=O,x=O.version,E=i.toneMapping),v.layers.enableAll(),I.unshift(v,v.geometry,v.material,0,0,null)):O&&O.isTexture&&(d===void 0&&(d=new Sn(new Wr(2,2),new _i({name:"BackgroundMaterial",uniforms:_r(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=O,d.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,d.material.toneMapped=Mt.getTransfer(O.colorSpace)!==Pt,O.matrixAutoUpdate===!0&&O.updateMatrix(),d.material.uniforms.uvTransform.value.copy(O.matrix),(_!==O||x!==O.version||E!==i.toneMapping)&&(d.material.needsUpdate=!0,_=O,x=O.version,E=i.toneMapping),d.layers.enableAll(),I.unshift(d,d.geometry,d.material,0,0,null))}function m(I,L){I.getRGB(Fs,Pu(i)),n.buffers.color.setClear(Fs.r,Fs.g,Fs.b,L,c)}function N(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(I,L=1){h.set(I),p=L,m(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(I){p=I,m(h,p)},render:R,addToRenderList:y,dispose:N}}function Mx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},o=x(null);let a=o,c=!1;function h(T,H,Z,ie,te){let fe=!1;const oe=_(ie,Z,H);a!==oe&&(a=oe,d(a.object)),fe=E(T,ie,Z,te),fe&&b(T,ie,Z,te),te!==null&&e.update(te,i.ELEMENT_ARRAY_BUFFER),(fe||c)&&(c=!1,L(T,H,Z,ie),te!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function p(){return i.createVertexArray()}function d(T){return i.bindVertexArray(T)}function v(T){return i.deleteVertexArray(T)}function _(T,H,Z){const ie=Z.wireframe===!0;let te=n[T.id];te===void 0&&(te={},n[T.id]=te);let fe=te[H.id];fe===void 0&&(fe={},te[H.id]=fe);let oe=fe[ie];return oe===void 0&&(oe=x(p()),fe[ie]=oe),oe}function x(T){const H=[],Z=[],ie=[];for(let te=0;te<t;te++)H[te]=0,Z[te]=0,ie[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Z,attributeDivisors:ie,object:T,attributes:{},index:null}}function E(T,H,Z,ie){const te=a.attributes,fe=H.attributes;let oe=0;const ye=Z.getAttributes();for(const se in ye)if(ye[se].location>=0){const Pe=te[se];let He=fe[se];if(He===void 0&&(se==="instanceMatrix"&&T.instanceMatrix&&(He=T.instanceMatrix),se==="instanceColor"&&T.instanceColor&&(He=T.instanceColor)),Pe===void 0||Pe.attribute!==He||He&&Pe.data!==He.data)return!0;oe++}return a.attributesNum!==oe||a.index!==ie}function b(T,H,Z,ie){const te={},fe=H.attributes;let oe=0;const ye=Z.getAttributes();for(const se in ye)if(ye[se].location>=0){let Pe=fe[se];Pe===void 0&&(se==="instanceMatrix"&&T.instanceMatrix&&(Pe=T.instanceMatrix),se==="instanceColor"&&T.instanceColor&&(Pe=T.instanceColor));const He={};He.attribute=Pe,Pe&&Pe.data&&(He.data=Pe.data),te[se]=He,oe++}a.attributes=te,a.attributesNum=oe,a.index=ie}function R(){const T=a.newAttributes;for(let H=0,Z=T.length;H<Z;H++)T[H]=0}function y(T){m(T,0)}function m(T,H){const Z=a.newAttributes,ie=a.enabledAttributes,te=a.attributeDivisors;Z[T]=1,ie[T]===0&&(i.enableVertexAttribArray(T),ie[T]=1),te[T]!==H&&(i.vertexAttribDivisor(T,H),te[T]=H)}function N(){const T=a.newAttributes,H=a.enabledAttributes;for(let Z=0,ie=H.length;Z<ie;Z++)H[Z]!==T[Z]&&(i.disableVertexAttribArray(Z),H[Z]=0)}function I(T,H,Z,ie,te,fe,oe){oe===!0?i.vertexAttribIPointer(T,H,Z,te,fe):i.vertexAttribPointer(T,H,Z,ie,te,fe)}function L(T,H,Z,ie){R();const te=ie.attributes,fe=Z.getAttributes(),oe=H.defaultAttributeValues;for(const ye in fe){const se=fe[ye];if(se.location>=0){let de=te[ye];if(de===void 0&&(ye==="instanceMatrix"&&T.instanceMatrix&&(de=T.instanceMatrix),ye==="instanceColor"&&T.instanceColor&&(de=T.instanceColor)),de!==void 0){const Pe=de.normalized,He=de.itemSize,Be=e.get(de);if(Be===void 0)continue;const je=Be.buffer,Ye=Be.type,Ke=Be.bytesPerElement,le=Ye===i.INT||Ye===i.UNSIGNED_INT||de.gpuType===Qa;if(de.isInterleavedBufferAttribute){const _e=de.data,ue=_e.stride,Te=de.offset;if(_e.isInstancedInterleavedBuffer){for(let We=0;We<se.locationSize;We++)m(se.location+We,_e.meshPerAttribute);T.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let We=0;We<se.locationSize;We++)y(se.location+We);i.bindBuffer(i.ARRAY_BUFFER,je);for(let We=0;We<se.locationSize;We++)I(se.location+We,He/se.locationSize,Ye,Pe,ue*Ke,(Te+He/se.locationSize*We)*Ke,le)}else{if(de.isInstancedBufferAttribute){for(let _e=0;_e<se.locationSize;_e++)m(se.location+_e,de.meshPerAttribute);T.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let _e=0;_e<se.locationSize;_e++)y(se.location+_e);i.bindBuffer(i.ARRAY_BUFFER,je);for(let _e=0;_e<se.locationSize;_e++)I(se.location+_e,He/se.locationSize,Ye,Pe,He*Ke,He/se.locationSize*_e*Ke,le)}}else if(oe!==void 0){const Pe=oe[ye];if(Pe!==void 0)switch(Pe.length){case 2:i.vertexAttrib2fv(se.location,Pe);break;case 3:i.vertexAttrib3fv(se.location,Pe);break;case 4:i.vertexAttrib4fv(se.location,Pe);break;default:i.vertexAttrib1fv(se.location,Pe)}}}}N()}function O(){j();for(const T in n){const H=n[T];for(const Z in H){const ie=H[Z];for(const te in ie)v(ie[te].object),delete ie[te];delete H[Z]}delete n[T]}}function P(T){if(n[T.id]===void 0)return;const H=n[T.id];for(const Z in H){const ie=H[Z];for(const te in ie)v(ie[te].object),delete ie[te];delete H[Z]}delete n[T.id]}function z(T){for(const H in n){const Z=n[H];if(Z[T.id]===void 0)continue;const ie=Z[T.id];for(const te in ie)v(ie[te].object),delete ie[te];delete Z[T.id]}}function j(){D(),c=!0,a!==o&&(a=o,d(a.object))}function D(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:j,resetDefaultState:D,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfProgram:z,initAttributes:R,enableAttribute:y,disableUnusedAttributes:N}}function Tx(i,e,t){let n;function o(d){n=d}function a(d,v){i.drawArrays(n,d,v),t.update(v,n,1)}function c(d,v,_){_!==0&&(i.drawArraysInstanced(n,d,v,_),t.update(v,n,_))}function h(d,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,v,0,_);let E=0;for(let b=0;b<_;b++)E+=v[b];t.update(E,n,1)}function p(d,v,_,x){if(_===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let b=0;b<d.length;b++)c(d[b],v[b],x[b]);else{E.multiDrawArraysInstancedWEBGL(n,d,0,v,0,x,0,_);let b=0;for(let R=0;R<_;R++)b+=v[R]*x[R];t.update(b,n,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function wx(i,e,t,n){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");o=i.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(z){return!(z!==Ln&&n.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const j=z===zr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Wn&&n.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ei&&!j)}function p(z){if(z==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const v=p(d);v!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",v,"instead."),d=v);const _=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),N=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),L=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=b>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:E,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:N,maxVaryings:I,maxFragmentUniforms:L,vertexTextures:O,maxSamples:P}}function bx(i){const e=this;let t=null,n=0,o=!1,a=!1;const c=new hi,h=new ot,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const E=_.length!==0||x||n!==0||o;return o=x,n=_.length,E},this.beginShadows=function(){a=!0,v(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,x){t=v(_,x,0)},this.setState=function(_,x,E){const b=_.clippingPlanes,R=_.clipIntersection,y=_.clipShadows,m=i.get(_);if(!o||b===null||b.length===0||a&&!y)a?v(null):d();else{const N=a?0:n,I=N*4;let L=m.clippingState||null;p.value=L,L=v(b,x,I,E);for(let O=0;O!==I;++O)L[O]=t[O];m.clippingState=L,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=N}};function d(){p.value!==t&&(p.value=t,p.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function v(_,x,E,b){const R=_!==null?_.length:0;let y=null;if(R!==0){if(y=p.value,b!==!0||y===null){const m=E+R*4,N=x.matrixWorldInverse;h.getNormalMatrix(N),(y===null||y.length<m)&&(y=new Float32Array(m));for(let I=0,L=E;I!==R;++I,L+=4)c.copy(_[I]).applyMatrix4(N,h),c.normal.toArray(y,L),y[L+3]=c.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}function Ax(i){let e=new WeakMap;function t(c,h){return h===_a?c.mapping=dr:h===ga&&(c.mapping=pr),c}function n(c){if(c&&c.isTexture){const h=c.mapping;if(h===_a||h===ga)if(e.has(c)){const p=e.get(c).texture;return t(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const d=new Mg(p.height);return d.fromEquirectangularTexture(i,c),e.set(c,d),c.addEventListener("dispose",o),t(d.texture,c.mapping)}else return null}}return c}function o(c){const h=c.target;h.removeEventListener("dispose",o);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const ar=4,Nc=[.125,.215,.35,.446,.526,.582],Ii=20,Xo=new Ou,Oc=new dt;let $o=null,qo=0,jo=0,Yo=!1;const Li=(1+Math.sqrt(5))/2,tr=1/Li,kc=[new ee(-Li,tr,0),new ee(Li,tr,0),new ee(-tr,0,Li),new ee(tr,0,Li),new ee(0,Li,-tr),new ee(0,Li,tr),new ee(-1,1,-1),new ee(1,1,-1),new ee(-1,1,1),new ee(1,1,1)],Rx=new ee;class Bc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,o=100,a={}){const{size:c=256,position:h=Rx}=a;$o=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,n,o,p,h),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($o,qo,jo),this._renderer.xr.enabled=Yo,e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$o=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:zr,format:Ln,colorSpace:mr,depthBuffer:!1},o=zc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zc(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cx(a)),this._blurMaterial=Px(a,e,t)}return o}_compileMaterial(e){const t=new Sn(this._lodPlanes[0],e);this._renderer.compile(t,Xo)}_sceneToCubeUV(e,t,n,o,a){const p=new En(90,1,t,n),d=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,E=_.toneMapping;_.getClearColor(Oc),_.toneMapping=pi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null));const R=new al({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),y=new Sn(new Gr,R);let m=!1;const N=e.background;N?N.isColor&&(R.color.copy(N),e.background=null,m=!0):(R.color.copy(Oc),m=!0);for(let I=0;I<6;I++){const L=I%3;L===0?(p.up.set(0,d[I],0),p.position.set(a.x,a.y,a.z),p.lookAt(a.x+v[I],a.y,a.z)):L===1?(p.up.set(0,0,d[I]),p.position.set(a.x,a.y,a.z),p.lookAt(a.x,a.y+v[I],a.z)):(p.up.set(0,d[I],0),p.position.set(a.x,a.y,a.z),p.lookAt(a.x,a.y,a.z+v[I]));const O=this._cubeSize;Is(o,L*O,I>2?O:0,O,O),_.setRenderTarget(o),m&&_.render(y,p),_.render(e,p)}y.geometry.dispose(),y.material.dispose(),_.toneMapping=E,_.autoClear=x,e.background=N}_textureToCubeUV(e,t){const n=this._renderer,o=e.mapping===dr||e.mapping===pr;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hc());const a=o?this._cubemapMaterial:this._equirectMaterial,c=new Sn(this._lodPlanes[0],a),h=a.uniforms;h.envMap.value=e;const p=this._cubeSize;Is(t,0,0,3*p,2*p),n.setRenderTarget(t),n.render(c,Xo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let a=1;a<o;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),h=kc[(o-a-1)%kc.length];this._blur(e,a-1,a,c,h)}t.autoClear=n}_blur(e,t,n,o,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,o,"latitudinal",a),this._halfBlur(c,e,n,n,o,"longitudinal",a)}_halfBlur(e,t,n,o,a,c,h){const p=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,_=new Sn(this._lodPlanes[o],d),x=d.uniforms,E=this._sizeLods[n]-1,b=isFinite(a)?Math.PI/(2*E):2*Math.PI/(2*Ii-1),R=a/b,y=isFinite(a)?1+Math.floor(v*R):Ii;y>Ii&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ii}`);const m=[];let N=0;for(let z=0;z<Ii;++z){const j=z/R,D=Math.exp(-j*j/2);m.push(D),z===0?N+=D:z<y&&(N+=2*D)}for(let z=0;z<m.length;z++)m[z]=m[z]/N;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=m,x.latitudinal.value=c==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:I}=this;x.dTheta.value=b,x.mipInt.value=I-n;const L=this._sizeLods[o],O=3*L*(o>I-ar?o-I+ar:0),P=4*(this._cubeSize-L);Is(t,O,P,3*L,2*L),p.setRenderTarget(t),p.render(_,Xo)}}function Cx(i){const e=[],t=[],n=[];let o=i;const a=i-ar+1+Nc.length;for(let c=0;c<a;c++){const h=Math.pow(2,o);t.push(h);let p=1/h;c>i-ar?p=Nc[c-i+ar-1]:c===0&&(p=0),n.push(p);const d=1/(h-2),v=-d,_=1+d,x=[v,v,_,v,_,_,v,v,_,_,v,_],E=6,b=6,R=3,y=2,m=1,N=new Float32Array(R*b*E),I=new Float32Array(y*b*E),L=new Float32Array(m*b*E);for(let P=0;P<E;P++){const z=P%3*2/3-1,j=P>2?0:-1,D=[z,j,0,z+2/3,j,0,z+2/3,j+1,0,z,j,0,z+2/3,j+1,0,z,j+1,0];N.set(D,R*b*P),I.set(x,y*b*P);const T=[P,P,P,P,P,P];L.set(T,m*b*P)}const O=new In;O.setAttribute("position",new Mn(N,R)),O.setAttribute("uv",new Mn(I,y)),O.setAttribute("faceIndex",new Mn(L,m)),e.push(O),o>ar&&o--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function zc(i,e,t){const n=new Bi(i,e,t);return n.texture.mapping=Zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Is(i,e,t,n,o){i.viewport.set(e,t,n,o),i.scissor.set(e,t,n,o)}function Px(i,e,t){const n=new Float32Array(Ii),o=new ee(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:ul(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Hc(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ul(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Vc(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function ul(){return`

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
	`}function Dx(i){let e=new WeakMap,t=null;function n(h){if(h&&h.isTexture){const p=h.mapping,d=p===_a||p===ga,v=p===dr||p===pr;if(d||v){let _=e.get(h);const x=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return t===null&&(t=new Bc(i)),_=d?t.fromEquirectangular(h,_):t.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const E=h.image;return d&&E&&E.height>0||v&&E&&o(E)?(t===null&&(t=new Bc(i)),_=d?t.fromEquirectangular(h):t.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",a),_.texture):null}}}return h}function o(h){let p=0;const d=6;for(let v=0;v<d;v++)h[v]!==void 0&&p++;return p===d}function a(h){const p=h.target;p.removeEventListener("dispose",a);const d=e.get(p);d!==void 0&&(e.delete(p),d.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function Lx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let o;switch(n){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(n)}return e[n]=o,o}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const o=t(n);return o===null&&Br("THREE.WebGLRenderer: "+n+" extension not supported."),o}}}function Fx(i,e,t,n){const o={},a=new WeakMap;function c(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);x.removeEventListener("dispose",c),delete o[x.id];const E=a.get(x);E&&(e.remove(E),a.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function h(_,x){return o[x.id]===!0||(x.addEventListener("dispose",c),o[x.id]=!0,t.memory.geometries++),x}function p(_){const x=_.attributes;for(const E in x)e.update(x[E],i.ARRAY_BUFFER)}function d(_){const x=[],E=_.index,b=_.attributes.position;let R=0;if(E!==null){const N=E.array;R=E.version;for(let I=0,L=N.length;I<L;I+=3){const O=N[I+0],P=N[I+1],z=N[I+2];x.push(O,P,P,z,z,O)}}else if(b!==void 0){const N=b.array;R=b.version;for(let I=0,L=N.length/3-1;I<L;I+=3){const O=I+0,P=I+1,z=I+2;x.push(O,P,P,z,z,O)}}else return;const y=new(Tu(x)?Cu:Ru)(x,1);y.version=R;const m=a.get(_);m&&e.remove(m),a.set(_,y)}function v(_){const x=a.get(_);if(x){const E=_.index;E!==null&&x.version<E.version&&d(_)}else d(_);return a.get(_)}return{get:h,update:p,getWireframeAttribute:v}}function Ix(i,e,t){let n;function o(x){n=x}let a,c;function h(x){a=x.type,c=x.bytesPerElement}function p(x,E){i.drawElements(n,E,a,x*c),t.update(E,n,1)}function d(x,E,b){b!==0&&(i.drawElementsInstanced(n,E,a,x*c,b),t.update(E,n,b))}function v(x,E,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,E,0,a,x,0,b);let y=0;for(let m=0;m<b;m++)y+=E[m];t.update(y,n,1)}function _(x,E,b,R){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let m=0;m<x.length;m++)d(x[m]/c,E[m],R[m]);else{y.multiDrawElementsInstancedWEBGL(n,E,0,a,x,0,R,0,b);let m=0;for(let N=0;N<b;N++)m+=E[N]*R[N];t.update(m,n,1)}}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=d,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function Ux(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,c,h){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=h*(a/3);break;case i.LINES:t.lines+=h*(a/2);break;case i.LINE_STRIP:t.lines+=h*(a-1);break;case i.LINE_LOOP:t.lines+=h*a;break;case i.POINTS:t.points+=h*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:n}}function Nx(i,e,t){const n=new WeakMap,o=new kt;function a(c,h,p){const d=c.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=v!==void 0?v.length:0;let x=n.get(h);if(x===void 0||x.count!==_){let D=function(){z.dispose(),n.delete(h),h.removeEventListener("dispose",D)};x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],m=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let I=0;E===!0&&(I=1),b===!0&&(I=2),R===!0&&(I=3);let L=h.attributes.position.count*I,O=1;L>e.maxTextureSize&&(O=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const P=new Float32Array(L*O*4*_),z=new wu(P,L,O,_);z.type=ei,z.needsUpdate=!0;const j=I*4;for(let T=0;T<_;T++){const H=y[T],Z=m[T],ie=N[T],te=L*O*4*T;for(let fe=0;fe<H.count;fe++){const oe=fe*j;E===!0&&(o.fromBufferAttribute(H,fe),P[te+oe+0]=o.x,P[te+oe+1]=o.y,P[te+oe+2]=o.z,P[te+oe+3]=0),b===!0&&(o.fromBufferAttribute(Z,fe),P[te+oe+4]=o.x,P[te+oe+5]=o.y,P[te+oe+6]=o.z,P[te+oe+7]=0),R===!0&&(o.fromBufferAttribute(ie,fe),P[te+oe+8]=o.x,P[te+oe+9]=o.y,P[te+oe+10]=o.z,P[te+oe+11]=ie.itemSize===4?o.w:1)}}x={count:_,texture:z,size:new rt(L,O)},n.set(h,x),h.addEventListener("dispose",D)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let E=0;for(let R=0;R<d.length;R++)E+=d[R];const b=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(i,"morphTargetBaseInfluence",b),p.getUniforms().setValue(i,"morphTargetInfluences",d)}p.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}return{update:a}}function Ox(i,e,t,n){let o=new WeakMap;function a(p){const d=n.render.frame,v=p.geometry,_=e.get(p,v);if(o.get(_)!==d&&(e.update(_),o.set(_,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),o.get(p)!==d&&(t.update(p.instanceMatrix,i.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,i.ARRAY_BUFFER),o.set(p,d))),p.isSkinnedMesh){const x=p.skeleton;o.get(x)!==d&&(x.update(),o.set(x,d))}return _}function c(){o=new WeakMap}function h(p){const d=p.target;d.removeEventListener("dispose",h),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:c}}const Bu=new un,Gc=new Iu(1,1),zu=new wu,Hu=new og,Vu=new Lu,Wc=[],Xc=[],$c=new Float32Array(16),qc=new Float32Array(9),jc=new Float32Array(4);function vr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const o=e*t;let a=Wc[o];if(a===void 0&&(a=new Float32Array(o),Wc[o]=a),e!==0){n.toArray(a,0);for(let c=1,h=0;c!==e;++c)h+=t,i[c].toArray(a,h)}return a}function $t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Qs(i,e){let t=Xc[e];t===void 0&&(t=new Int32Array(e),Xc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function kx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Bx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2fv(this.addr,e),qt(t,e)}}function zx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;i.uniform3fv(this.addr,e),qt(t,e)}}function Hx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4fv(this.addr,e),qt(t,e)}}function Vx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if($t(t,n))return;jc.set(n),i.uniformMatrix2fv(this.addr,!1,jc),qt(t,n)}}function Gx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if($t(t,n))return;qc.set(n),i.uniformMatrix3fv(this.addr,!1,qc),qt(t,n)}}function Wx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if($t(t,n))return;$c.set(n),i.uniformMatrix4fv(this.addr,!1,$c),qt(t,n)}}function Xx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $x(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2iv(this.addr,e),qt(t,e)}}function qx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3iv(this.addr,e),qt(t,e)}}function jx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4iv(this.addr,e),qt(t,e)}}function Yx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Kx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2uiv(this.addr,e),qt(t,e)}}function Zx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3uiv(this.addr,e),qt(t,e)}}function Jx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4uiv(this.addr,e),qt(t,e)}}function Qx(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o);let a;this.type===i.SAMPLER_2D_SHADOW?(Gc.compareFunction=Mu,a=Gc):a=Bu,t.setTexture2D(e||a,o)}function ey(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTexture3D(e||Hu,o)}function ty(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTextureCube(e||Vu,o)}function ny(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTexture2DArray(e||zu,o)}function iy(i){switch(i){case 5126:return kx;case 35664:return Bx;case 35665:return zx;case 35666:return Hx;case 35674:return Vx;case 35675:return Gx;case 35676:return Wx;case 5124:case 35670:return Xx;case 35667:case 35671:return $x;case 35668:case 35672:return qx;case 35669:case 35673:return jx;case 5125:return Yx;case 36294:return Kx;case 36295:return Zx;case 36296:return Jx;case 35678:case 36198:case 36298:case 36306:case 35682:return Qx;case 35679:case 36299:case 36307:return ey;case 35680:case 36300:case 36308:case 36293:return ty;case 36289:case 36303:case 36311:case 36292:return ny}}function ry(i,e){i.uniform1fv(this.addr,e)}function sy(i,e){const t=vr(e,this.size,2);i.uniform2fv(this.addr,t)}function oy(i,e){const t=vr(e,this.size,3);i.uniform3fv(this.addr,t)}function ay(i,e){const t=vr(e,this.size,4);i.uniform4fv(this.addr,t)}function ly(i,e){const t=vr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function cy(i,e){const t=vr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function uy(i,e){const t=vr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function hy(i,e){i.uniform1iv(this.addr,e)}function fy(i,e){i.uniform2iv(this.addr,e)}function dy(i,e){i.uniform3iv(this.addr,e)}function py(i,e){i.uniform4iv(this.addr,e)}function my(i,e){i.uniform1uiv(this.addr,e)}function _y(i,e){i.uniform2uiv(this.addr,e)}function gy(i,e){i.uniform3uiv(this.addr,e)}function vy(i,e){i.uniform4uiv(this.addr,e)}function xy(i,e,t){const n=this.cache,o=e.length,a=Qs(t,o);$t(n,a)||(i.uniform1iv(this.addr,a),qt(n,a));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||Bu,a[c])}function yy(i,e,t){const n=this.cache,o=e.length,a=Qs(t,o);$t(n,a)||(i.uniform1iv(this.addr,a),qt(n,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||Hu,a[c])}function Ey(i,e,t){const n=this.cache,o=e.length,a=Qs(t,o);$t(n,a)||(i.uniform1iv(this.addr,a),qt(n,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||Vu,a[c])}function Sy(i,e,t){const n=this.cache,o=e.length,a=Qs(t,o);$t(n,a)||(i.uniform1iv(this.addr,a),qt(n,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||zu,a[c])}function My(i){switch(i){case 5126:return ry;case 35664:return sy;case 35665:return oy;case 35666:return ay;case 35674:return ly;case 35675:return cy;case 35676:return uy;case 5124:case 35670:return hy;case 35667:case 35671:return fy;case 35668:case 35672:return dy;case 35669:case 35673:return py;case 5125:return my;case 36294:return _y;case 36295:return gy;case 36296:return vy;case 35678:case 36198:case 36298:case 36306:case 35682:return xy;case 35679:case 36299:case 36307:return yy;case 35680:case 36300:case 36308:case 36293:return Ey;case 36289:case 36303:case 36311:case 36292:return Sy}}class Ty{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=iy(t.type)}}class wy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=My(t.type)}}class by{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const h=o[a];h.setValue(e,t[h.id],n)}}}const Ko=/(\w+)(\])?(\[|\.)?/g;function Yc(i,e){i.seq.push(e),i.map[e.id]=e}function Ay(i,e,t){const n=i.name,o=n.length;for(Ko.lastIndex=0;;){const a=Ko.exec(n),c=Ko.lastIndex;let h=a[1];const p=a[2]==="]",d=a[3];if(p&&(h=h|0),d===void 0||d==="["&&c+2===o){Yc(t,d===void 0?new Ty(h,i,e):new wy(h,i,e));break}else{let _=t.map[h];_===void 0&&(_=new by(h),Yc(t,_)),t=_}}}class Xs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Ay(a,c,this)}}setValue(e,t,n,o){const a=this.map[t];a!==void 0&&a.setValue(e,n,o)}setOptional(e,t,n){const o=t[n];o!==void 0&&this.setValue(e,n,o)}static upload(e,t,n,o){for(let a=0,c=t.length;a!==c;++a){const h=t[a],p=n[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,o)}}static seqWithValue(e,t){const n=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&n.push(c)}return n}}function Kc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ry=37297;let Cy=0;function Py(i,e){const t=i.split(`
`),n=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const h=c+1;n.push(`${h===e?">":" "} ${h}: ${t[c]}`)}return n.join(`
`)}const Zc=new ot;function Dy(i){Mt._getMatrix(Zc,Mt.workingColorSpace,i);const e=`mat3( ${Zc.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(i)){case $s:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Jc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const h=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+Py(i.getShaderSource(e),h)}else return a}function Ly(i,e){const t=Dy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Fy(i,e){let t;switch(e){case F_:t="Linear";break;case I_:t="Reinhard";break;case U_:t="Cineon";break;case N_:t="ACESFilmic";break;case k_:t="AgX";break;case B_:t="Neutral";break;case O_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Us=new ee;function Iy(){Mt.getLuminanceCoefficients(Us);const i=Us.x.toFixed(4),e=Us.y.toFixed(4),t=Us.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Uy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function Ny(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Oy(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let o=0;o<n;o++){const a=i.getActiveAttrib(e,o),c=a.name;let h=1;a.type===i.FLOAT_MAT2&&(h=2),a.type===i.FLOAT_MAT3&&(h=3),a.type===i.FLOAT_MAT4&&(h=4),t[c]={type:a.type,location:i.getAttribLocation(e,c),locationSize:h}}return t}function Lr(i){return i!==""}function Qc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ky=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ya(i){return i.replace(ky,zy)}const By=new Map;function zy(i,e){let t=ct[e];if(t===void 0){const n=By.get(e);if(n!==void 0)t=ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ya(t)}const Hy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tu(i){return i.replace(Hy,Vy)}function Vy(i,e,t,n){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function nu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Gy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===f_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function Wy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case dr:case pr:e="ENVMAP_TYPE_CUBE";break;case Zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case pr:e="ENVMAP_MODE_REFRACTION";break}return e}function $y(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fu:e="ENVMAP_BLENDING_MULTIPLY";break;case D_:e="ENVMAP_BLENDING_MIX";break;case L_:e="ENVMAP_BLENDING_ADD";break}return e}function qy(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function jy(i,e,t,n){const o=i.getContext(),a=t.defines;let c=t.vertexShader,h=t.fragmentShader;const p=Gy(t),d=Wy(t),v=Xy(t),_=$y(t),x=qy(t),E=Uy(t),b=Ny(a),R=o.createProgram();let y,m,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Lr).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Lr).join(`
`),m.length>0&&(m+=`
`)):(y=[nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),m=[nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+v:"",t.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?ct.tonemapping_pars_fragment:"",t.toneMapping!==pi?Fy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,Ly("linearToOutputTexel",t.outputColorSpace),Iy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lr).join(`
`)),c=Ya(c),c=Qc(c,t),c=eu(c,t),h=Ya(h),h=Qc(h,t),h=eu(h,t),c=tu(c),h=tu(h),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",t.glslVersion===cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const I=N+y+c,L=N+m+h,O=Kc(o,o.VERTEX_SHADER,I),P=Kc(o,o.FRAGMENT_SHADER,L);o.attachShader(R,O),o.attachShader(R,P),t.index0AttributeName!==void 0?o.bindAttribLocation(R,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function z(H){if(i.debug.checkShaderErrors){const Z=o.getProgramInfoLog(R)||"",ie=o.getShaderInfoLog(O)||"",te=o.getShaderInfoLog(P)||"",fe=Z.trim(),oe=ie.trim(),ye=te.trim();let se=!0,de=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,R,O,P);else{const Pe=Jc(o,O,"vertex"),He=Jc(o,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+fe+`
`+Pe+`
`+He)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(oe===""||ye==="")&&(de=!1);de&&(H.diagnostics={runnable:se,programLog:fe,vertexShader:{log:oe,prefix:y},fragmentShader:{log:ye,prefix:m}})}o.deleteShader(O),o.deleteShader(P),j=new Xs(o,R),D=Oy(o,R)}let j;this.getUniforms=function(){return j===void 0&&z(this),j};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=o.getProgramParameter(R,Ry)),T},this.destroy=function(){n.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cy++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=O,this.fragmentShader=P,this}let Yy=0;class Ky{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Zy(e),t.set(e,n)),n}}class Zy{constructor(e){this.id=Yy++,this.code=e,this.usedTimes=0}}function Jy(i,e,t,n,o,a,c){const h=new bu,p=new Ky,d=new Set,v=[],_=o.logarithmicDepthBuffer,x=o.vertexTextures;let E=o.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){return d.add(D),D===0?"uv":`uv${D}`}function y(D,T,H,Z,ie){const te=Z.fog,fe=ie.geometry,oe=D.isMeshStandardMaterial?Z.environment:null,ye=(D.isMeshStandardMaterial?t:e).get(D.envMap||oe),se=ye&&ye.mapping===Zs?ye.image.height:null,de=b[D.type];D.precision!==null&&(E=o.getMaxPrecision(D.precision),E!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",E,"instead."));const Pe=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,He=Pe!==void 0?Pe.length:0;let Be=0;fe.morphAttributes.position!==void 0&&(Be=1),fe.morphAttributes.normal!==void 0&&(Be=2),fe.morphAttributes.color!==void 0&&(Be=3);let je,Ye,Ke,le;if(de){const st=zn[de];je=st.vertexShader,Ye=st.fragmentShader}else je=D.vertexShader,Ye=D.fragmentShader,p.update(D),Ke=p.getVertexShaderID(D),le=p.getFragmentShaderID(D);const _e=i.getRenderTarget(),ue=i.state.buffers.depth.getReversed(),Te=ie.isInstancedMesh===!0,We=ie.isBatchedMesh===!0,it=!!D.map,vt=!!D.matcap,k=!!ye,xt=!!D.aoMap,Qe=!!D.lightMap,$e=!!D.bumpMap,Ve=!!D.normalMap,_t=!!D.displacementMap,ze=!!D.emissiveMap,tt=!!D.metalnessMap,At=!!D.roughnessMap,Et=D.anisotropy>0,U=D.clearcoat>0,A=D.dispersion>0,q=D.iridescence>0,B=D.sheen>0,Q=D.transmission>0,$=Et&&!!D.anisotropyMap,ve=U&&!!D.clearcoatMap,me=U&&!!D.clearcoatNormalMap,Ie=U&&!!D.clearcoatRoughnessMap,Re=q&&!!D.iridescenceMap,pe=q&&!!D.iridescenceThicknessMap,he=B&&!!D.sheenColorMap,Le=B&&!!D.sheenRoughnessMap,De=!!D.specularMap,Ce=!!D.specularColorMap,Ze=!!D.specularIntensityMap,G=Q&&!!D.transmissionMap,xe=Q&&!!D.thicknessMap,be=!!D.gradientMap,Fe=!!D.alphaMap,W=D.alphaTest>0,V=!!D.alphaHash,Oe=!!D.extensions;let nt=pi;D.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(nt=i.toneMapping);const pt={shaderID:de,shaderType:D.type,shaderName:D.name,vertexShader:je,fragmentShader:Ye,defines:D.defines,customVertexShaderID:Ke,customFragmentShaderID:le,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:E,batching:We,batchingColor:We&&ie._colorsTexture!==null,instancing:Te,instancingColor:Te&&ie.instanceColor!==null,instancingMorph:Te&&ie.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:_e===null?i.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:mr,alphaToCoverage:!!D.alphaToCoverage,map:it,matcap:vt,envMap:k,envMapMode:k&&ye.mapping,envMapCubeUVHeight:se,aoMap:xt,lightMap:Qe,bumpMap:$e,normalMap:Ve,displacementMap:x&&_t,emissiveMap:ze,normalMapObjectSpace:Ve&&D.normalMapType===G_,normalMapTangentSpace:Ve&&D.normalMapType===Su,metalnessMap:tt,roughnessMap:At,anisotropy:Et,anisotropyMap:$,clearcoat:U,clearcoatMap:ve,clearcoatNormalMap:me,clearcoatRoughnessMap:Ie,dispersion:A,iridescence:q,iridescenceMap:Re,iridescenceThicknessMap:pe,sheen:B,sheenColorMap:he,sheenRoughnessMap:Le,specularMap:De,specularColorMap:Ce,specularIntensityMap:Ze,transmission:Q,transmissionMap:G,thicknessMap:xe,gradientMap:be,opaque:D.transparent===!1&&D.blending===ur&&D.alphaToCoverage===!1,alphaMap:Fe,alphaTest:W,alphaHash:V,combine:D.combine,mapUv:it&&R(D.map.channel),aoMapUv:xt&&R(D.aoMap.channel),lightMapUv:Qe&&R(D.lightMap.channel),bumpMapUv:$e&&R(D.bumpMap.channel),normalMapUv:Ve&&R(D.normalMap.channel),displacementMapUv:_t&&R(D.displacementMap.channel),emissiveMapUv:ze&&R(D.emissiveMap.channel),metalnessMapUv:tt&&R(D.metalnessMap.channel),roughnessMapUv:At&&R(D.roughnessMap.channel),anisotropyMapUv:$&&R(D.anisotropyMap.channel),clearcoatMapUv:ve&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:me&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:he&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:Le&&R(D.sheenRoughnessMap.channel),specularMapUv:De&&R(D.specularMap.channel),specularColorMapUv:Ce&&R(D.specularColorMap.channel),specularIntensityMapUv:Ze&&R(D.specularIntensityMap.channel),transmissionMapUv:G&&R(D.transmissionMap.channel),thicknessMapUv:xe&&R(D.thicknessMap.channel),alphaMapUv:Fe&&R(D.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(Ve||Et),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:ie.isPoints===!0&&!!fe.attributes.uv&&(it||Fe),fog:!!te,useFog:D.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:ue,skinning:ie.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:He,morphTextureStride:Be,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:D.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:nt,decodeVideoTexture:it&&D.map.isVideoTexture===!0&&Mt.getTransfer(D.map.colorSpace)===Pt,decodeVideoTextureEmissive:ze&&D.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(D.emissiveMap.colorSpace)===Pt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Pn,flipSided:D.side===cn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Oe&&D.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&D.extensions.multiDraw===!0||We)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return pt.vertexUv1s=d.has(1),pt.vertexUv2s=d.has(2),pt.vertexUv3s=d.has(3),d.clear(),pt}function m(D){const T=[];if(D.shaderID?T.push(D.shaderID):(T.push(D.customVertexShaderID),T.push(D.customFragmentShaderID)),D.defines!==void 0)for(const H in D.defines)T.push(H),T.push(D.defines[H]);return D.isRawShaderMaterial===!1&&(N(T,D),I(T,D),T.push(i.outputColorSpace)),T.push(D.customProgramCacheKey),T.join()}function N(D,T){D.push(T.precision),D.push(T.outputColorSpace),D.push(T.envMapMode),D.push(T.envMapCubeUVHeight),D.push(T.mapUv),D.push(T.alphaMapUv),D.push(T.lightMapUv),D.push(T.aoMapUv),D.push(T.bumpMapUv),D.push(T.normalMapUv),D.push(T.displacementMapUv),D.push(T.emissiveMapUv),D.push(T.metalnessMapUv),D.push(T.roughnessMapUv),D.push(T.anisotropyMapUv),D.push(T.clearcoatMapUv),D.push(T.clearcoatNormalMapUv),D.push(T.clearcoatRoughnessMapUv),D.push(T.iridescenceMapUv),D.push(T.iridescenceThicknessMapUv),D.push(T.sheenColorMapUv),D.push(T.sheenRoughnessMapUv),D.push(T.specularMapUv),D.push(T.specularColorMapUv),D.push(T.specularIntensityMapUv),D.push(T.transmissionMapUv),D.push(T.thicknessMapUv),D.push(T.combine),D.push(T.fogExp2),D.push(T.sizeAttenuation),D.push(T.morphTargetsCount),D.push(T.morphAttributeCount),D.push(T.numDirLights),D.push(T.numPointLights),D.push(T.numSpotLights),D.push(T.numSpotLightMaps),D.push(T.numHemiLights),D.push(T.numRectAreaLights),D.push(T.numDirLightShadows),D.push(T.numPointLightShadows),D.push(T.numSpotLightShadows),D.push(T.numSpotLightShadowsWithMaps),D.push(T.numLightProbes),D.push(T.shadowMapType),D.push(T.toneMapping),D.push(T.numClippingPlanes),D.push(T.numClipIntersection),D.push(T.depthPacking)}function I(D,T){h.disableAll(),T.supportsVertexTextures&&h.enable(0),T.instancing&&h.enable(1),T.instancingColor&&h.enable(2),T.instancingMorph&&h.enable(3),T.matcap&&h.enable(4),T.envMap&&h.enable(5),T.normalMapObjectSpace&&h.enable(6),T.normalMapTangentSpace&&h.enable(7),T.clearcoat&&h.enable(8),T.iridescence&&h.enable(9),T.alphaTest&&h.enable(10),T.vertexColors&&h.enable(11),T.vertexAlphas&&h.enable(12),T.vertexUv1s&&h.enable(13),T.vertexUv2s&&h.enable(14),T.vertexUv3s&&h.enable(15),T.vertexTangents&&h.enable(16),T.anisotropy&&h.enable(17),T.alphaHash&&h.enable(18),T.batching&&h.enable(19),T.dispersion&&h.enable(20),T.batchingColor&&h.enable(21),T.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),T.fog&&h.enable(0),T.useFog&&h.enable(1),T.flatShading&&h.enable(2),T.logarithmicDepthBuffer&&h.enable(3),T.reversedDepthBuffer&&h.enable(4),T.skinning&&h.enable(5),T.morphTargets&&h.enable(6),T.morphNormals&&h.enable(7),T.morphColors&&h.enable(8),T.premultipliedAlpha&&h.enable(9),T.shadowMapEnabled&&h.enable(10),T.doubleSided&&h.enable(11),T.flipSided&&h.enable(12),T.useDepthPacking&&h.enable(13),T.dithering&&h.enable(14),T.transmission&&h.enable(15),T.sheen&&h.enable(16),T.opaque&&h.enable(17),T.pointsUvs&&h.enable(18),T.decodeVideoTexture&&h.enable(19),T.decodeVideoTextureEmissive&&h.enable(20),T.alphaToCoverage&&h.enable(21),D.push(h.mask)}function L(D){const T=b[D.type];let H;if(T){const Z=zn[T];H=xg.clone(Z.uniforms)}else H=D.uniforms;return H}function O(D,T){let H;for(let Z=0,ie=v.length;Z<ie;Z++){const te=v[Z];if(te.cacheKey===T){H=te,++H.usedTimes;break}}return H===void 0&&(H=new jy(i,T,D,a),v.push(H)),H}function P(D){if(--D.usedTimes===0){const T=v.indexOf(D);v[T]=v[v.length-1],v.pop(),D.destroy()}}function z(D){p.remove(D)}function j(){p.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:L,acquireProgram:O,releaseProgram:P,releaseShaderCache:z,programs:v,dispose:j}}function Qy(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let h=i.get(c);return h===void 0&&(h={},i.set(c,h)),h}function n(c){i.delete(c)}function o(c,h,p){i.get(c)[h]=p}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:o,dispose:a}}function eE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function iu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ru(){const i=[];let e=0;const t=[],n=[],o=[];function a(){e=0,t.length=0,n.length=0,o.length=0}function c(_,x,E,b,R,y){let m=i[e];return m===void 0?(m={id:_.id,object:_,geometry:x,material:E,groupOrder:b,renderOrder:_.renderOrder,z:R,group:y},i[e]=m):(m.id=_.id,m.object=_,m.geometry=x,m.material=E,m.groupOrder=b,m.renderOrder=_.renderOrder,m.z=R,m.group=y),e++,m}function h(_,x,E,b,R,y){const m=c(_,x,E,b,R,y);E.transmission>0?n.push(m):E.transparent===!0?o.push(m):t.push(m)}function p(_,x,E,b,R,y){const m=c(_,x,E,b,R,y);E.transmission>0?n.unshift(m):E.transparent===!0?o.unshift(m):t.unshift(m)}function d(_,x){t.length>1&&t.sort(_||eE),n.length>1&&n.sort(x||iu),o.length>1&&o.sort(x||iu)}function v(){for(let _=e,x=i.length;_<x;_++){const E=i[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:n,transparent:o,init:a,push:h,unshift:p,finish:v,sort:d}}function tE(){let i=new WeakMap;function e(n,o){const a=i.get(n);let c;return a===void 0?(c=new ru,i.set(n,[c])):o>=a.length?(c=new ru,a.push(c)):c=a[o],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function nE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ee,color:new dt};break;case"SpotLight":t={position:new ee,direction:new ee,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return i[e.id]=t,t}}}function iE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let rE=0;function sE(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function oE(i){const e=new nE,t=iE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new ee);const o=new ee,a=new Bt,c=new Bt;function h(d){let v=0,_=0,x=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let E=0,b=0,R=0,y=0,m=0,N=0,I=0,L=0,O=0,P=0,z=0;d.sort(sE);for(let D=0,T=d.length;D<T;D++){const H=d[D],Z=H.color,ie=H.intensity,te=H.distance,fe=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)v+=Z.r*ie,_+=Z.g*ie,x+=Z.b*ie;else if(H.isLightProbe){for(let oe=0;oe<9;oe++)n.probe[oe].addScaledVector(H.sh.coefficients[oe],ie);z++}else if(H.isDirectionalLight){const oe=e.get(H);if(oe.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const ye=H.shadow,se=t.get(H);se.shadowIntensity=ye.intensity,se.shadowBias=ye.bias,se.shadowNormalBias=ye.normalBias,se.shadowRadius=ye.radius,se.shadowMapSize=ye.mapSize,n.directionalShadow[E]=se,n.directionalShadowMap[E]=fe,n.directionalShadowMatrix[E]=H.shadow.matrix,N++}n.directional[E]=oe,E++}else if(H.isSpotLight){const oe=e.get(H);oe.position.setFromMatrixPosition(H.matrixWorld),oe.color.copy(Z).multiplyScalar(ie),oe.distance=te,oe.coneCos=Math.cos(H.angle),oe.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),oe.decay=H.decay,n.spot[R]=oe;const ye=H.shadow;if(H.map&&(n.spotLightMap[O]=H.map,O++,ye.updateMatrices(H),H.castShadow&&P++),n.spotLightMatrix[R]=ye.matrix,H.castShadow){const se=t.get(H);se.shadowIntensity=ye.intensity,se.shadowBias=ye.bias,se.shadowNormalBias=ye.normalBias,se.shadowRadius=ye.radius,se.shadowMapSize=ye.mapSize,n.spotShadow[R]=se,n.spotShadowMap[R]=fe,L++}R++}else if(H.isRectAreaLight){const oe=e.get(H);oe.color.copy(Z).multiplyScalar(ie),oe.halfWidth.set(H.width*.5,0,0),oe.halfHeight.set(0,H.height*.5,0),n.rectArea[y]=oe,y++}else if(H.isPointLight){const oe=e.get(H);if(oe.color.copy(H.color).multiplyScalar(H.intensity),oe.distance=H.distance,oe.decay=H.decay,H.castShadow){const ye=H.shadow,se=t.get(H);se.shadowIntensity=ye.intensity,se.shadowBias=ye.bias,se.shadowNormalBias=ye.normalBias,se.shadowRadius=ye.radius,se.shadowMapSize=ye.mapSize,se.shadowCameraNear=ye.camera.near,se.shadowCameraFar=ye.camera.far,n.pointShadow[b]=se,n.pointShadowMap[b]=fe,n.pointShadowMatrix[b]=H.shadow.matrix,I++}n.point[b]=oe,b++}else if(H.isHemisphereLight){const oe=e.get(H);oe.skyColor.copy(H.color).multiplyScalar(ie),oe.groundColor.copy(H.groundColor).multiplyScalar(ie),n.hemi[m]=oe,m++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ne.LTC_FLOAT_1,n.rectAreaLTC2=Ne.LTC_FLOAT_2):(n.rectAreaLTC1=Ne.LTC_HALF_1,n.rectAreaLTC2=Ne.LTC_HALF_2)),n.ambient[0]=v,n.ambient[1]=_,n.ambient[2]=x;const j=n.hash;(j.directionalLength!==E||j.pointLength!==b||j.spotLength!==R||j.rectAreaLength!==y||j.hemiLength!==m||j.numDirectionalShadows!==N||j.numPointShadows!==I||j.numSpotShadows!==L||j.numSpotMaps!==O||j.numLightProbes!==z)&&(n.directional.length=E,n.spot.length=R,n.rectArea.length=y,n.point.length=b,n.hemi.length=m,n.directionalShadow.length=N,n.directionalShadowMap.length=N,n.pointShadow.length=I,n.pointShadowMap.length=I,n.spotShadow.length=L,n.spotShadowMap.length=L,n.directionalShadowMatrix.length=N,n.pointShadowMatrix.length=I,n.spotLightMatrix.length=L+O-P,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=z,j.directionalLength=E,j.pointLength=b,j.spotLength=R,j.rectAreaLength=y,j.hemiLength=m,j.numDirectionalShadows=N,j.numPointShadows=I,j.numSpotShadows=L,j.numSpotMaps=O,j.numLightProbes=z,n.version=rE++)}function p(d,v){let _=0,x=0,E=0,b=0,R=0;const y=v.matrixWorldInverse;for(let m=0,N=d.length;m<N;m++){const I=d[m];if(I.isDirectionalLight){const L=n.directional[_];L.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(y),_++}else if(I.isSpotLight){const L=n.spot[E];L.position.setFromMatrixPosition(I.matrixWorld),L.position.applyMatrix4(y),L.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(y),E++}else if(I.isRectAreaLight){const L=n.rectArea[b];L.position.setFromMatrixPosition(I.matrixWorld),L.position.applyMatrix4(y),c.identity(),a.copy(I.matrixWorld),a.premultiply(y),c.extractRotation(a),L.halfWidth.set(I.width*.5,0,0),L.halfHeight.set(0,I.height*.5,0),L.halfWidth.applyMatrix4(c),L.halfHeight.applyMatrix4(c),b++}else if(I.isPointLight){const L=n.point[x];L.position.setFromMatrixPosition(I.matrixWorld),L.position.applyMatrix4(y),x++}else if(I.isHemisphereLight){const L=n.hemi[R];L.direction.setFromMatrixPosition(I.matrixWorld),L.direction.transformDirection(y),R++}}}return{setup:h,setupView:p,state:n}}function su(i){const e=new oE(i),t=[],n=[];function o(v){d.camera=v,t.length=0,n.length=0}function a(v){t.push(v)}function c(v){n.push(v)}function h(){e.setup(t)}function p(v){e.setupView(t,v)}const d={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:h,setupLightsView:p,pushLight:a,pushShadow:c}}function aE(i){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let h;return c===void 0?(h=new su(i),e.set(o,[h])):a>=c.length?(h=new su(i),c.push(h)):h=c[a],h}function n(){e=new WeakMap}return{get:t,dispose:n}}const lE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cE=`uniform sampler2D shadow_pass;
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
}`;function uE(i,e,t){let n=new ll;const o=new rt,a=new rt,c=new kt,h=new Dg({depthPacking:V_}),p=new Lg,d={},v=t.maxTextureSize,_={[mi]:cn,[cn]:mi,[Pn]:Pn},x=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:lE,fragmentShader:cE}),E=x.clone();E.defines.HORIZONTAL_PASS=1;const b=new In;b.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Sn(b,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hu;let m=this.type;this.render=function(P,z,j){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;const D=i.getRenderTarget(),T=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(di),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const ie=m!==Qn&&this.type===Qn,te=m===Qn&&this.type!==Qn;for(let fe=0,oe=P.length;fe<oe;fe++){const ye=P[fe],se=ye.shadow;if(se===void 0){console.warn("THREE.WebGLShadowMap:",ye,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;o.copy(se.mapSize);const de=se.getFrameExtents();if(o.multiply(de),a.copy(se.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(a.x=Math.floor(v/de.x),o.x=a.x*de.x,se.mapSize.x=a.x),o.y>v&&(a.y=Math.floor(v/de.y),o.y=a.y*de.y,se.mapSize.y=a.y)),se.map===null||ie===!0||te===!0){const He=this.type!==Qn?{minFilter:Fn,magFilter:Fn}:{};se.map!==null&&se.map.dispose(),se.map=new Bi(o.x,o.y,He),se.map.texture.name=ye.name+".shadowMap",se.camera.updateProjectionMatrix()}i.setRenderTarget(se.map),i.clear();const Pe=se.getViewportCount();for(let He=0;He<Pe;He++){const Be=se.getViewport(He);c.set(a.x*Be.x,a.y*Be.y,a.x*Be.z,a.y*Be.w),Z.viewport(c),se.updateMatrices(ye,He),n=se.getFrustum(),L(z,j,se.camera,ye,this.type)}se.isPointLightShadow!==!0&&this.type===Qn&&N(se,j),se.needsUpdate=!1}m=this.type,y.needsUpdate=!1,i.setRenderTarget(D,T,H)};function N(P,z){const j=e.update(R);x.defines.VSM_SAMPLES!==P.blurSamples&&(x.defines.VSM_SAMPLES=P.blurSamples,E.defines.VSM_SAMPLES=P.blurSamples,x.needsUpdate=!0,E.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Bi(o.x,o.y)),x.uniforms.shadow_pass.value=P.map.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(z,null,j,x,R,null),E.uniforms.shadow_pass.value=P.mapPass.texture,E.uniforms.resolution.value=P.mapSize,E.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(z,null,j,E,R,null)}function I(P,z,j,D){let T=null;const H=j.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(H!==void 0)T=H;else if(T=j.isPointLight===!0?p:h,i.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Z=T.uuid,ie=z.uuid;let te=d[Z];te===void 0&&(te={},d[Z]=te);let fe=te[ie];fe===void 0&&(fe=T.clone(),te[ie]=fe,z.addEventListener("dispose",O)),T=fe}if(T.visible=z.visible,T.wireframe=z.wireframe,D===Qn?T.side=z.shadowSide!==null?z.shadowSide:z.side:T.side=z.shadowSide!==null?z.shadowSide:_[z.side],T.alphaMap=z.alphaMap,T.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,T.map=z.map,T.clipShadows=z.clipShadows,T.clippingPlanes=z.clippingPlanes,T.clipIntersection=z.clipIntersection,T.displacementMap=z.displacementMap,T.displacementScale=z.displacementScale,T.displacementBias=z.displacementBias,T.wireframeLinewidth=z.wireframeLinewidth,T.linewidth=z.linewidth,j.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Z=i.properties.get(T);Z.light=j}return T}function L(P,z,j,D,T){if(P.visible===!1)return;if(P.layers.test(z.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&T===Qn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,P.matrixWorld);const ie=e.update(P),te=P.material;if(Array.isArray(te)){const fe=ie.groups;for(let oe=0,ye=fe.length;oe<ye;oe++){const se=fe[oe],de=te[se.materialIndex];if(de&&de.visible){const Pe=I(P,de,D,T);P.onBeforeShadow(i,P,z,j,ie,Pe,se),i.renderBufferDirect(j,null,ie,Pe,P,se),P.onAfterShadow(i,P,z,j,ie,Pe,se)}}}else if(te.visible){const fe=I(P,te,D,T);P.onBeforeShadow(i,P,z,j,ie,fe,null),i.renderBufferDirect(j,null,ie,fe,P,null),P.onAfterShadow(i,P,z,j,ie,fe,null)}}const Z=P.children;for(let ie=0,te=Z.length;ie<te;ie++)L(Z[ie],z,j,D,T)}function O(P){P.target.removeEventListener("dispose",O);for(const j in d){const D=d[j],T=P.target.uuid;T in D&&(D[T].dispose(),delete D[T])}}}const hE={[ca]:ua,[ha]:pa,[fa]:ma,[fr]:da,[ua]:ca,[pa]:ha,[ma]:fa,[da]:fr};function fE(i,e){function t(){let G=!1;const xe=new kt;let be=null;const Fe=new kt(0,0,0,0);return{setMask:function(W){be!==W&&!G&&(i.colorMask(W,W,W,W),be=W)},setLocked:function(W){G=W},setClear:function(W,V,Oe,nt,pt){pt===!0&&(W*=nt,V*=nt,Oe*=nt),xe.set(W,V,Oe,nt),Fe.equals(xe)===!1&&(i.clearColor(W,V,Oe,nt),Fe.copy(xe))},reset:function(){G=!1,be=null,Fe.set(-1,0,0,0)}}}function n(){let G=!1,xe=!1,be=null,Fe=null,W=null;return{setReversed:function(V){if(xe!==V){const Oe=e.get("EXT_clip_control");V?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),xe=V;const nt=W;W=null,this.setClear(nt)}},getReversed:function(){return xe},setTest:function(V){V?_e(i.DEPTH_TEST):ue(i.DEPTH_TEST)},setMask:function(V){be!==V&&!G&&(i.depthMask(V),be=V)},setFunc:function(V){if(xe&&(V=hE[V]),Fe!==V){switch(V){case ca:i.depthFunc(i.NEVER);break;case ua:i.depthFunc(i.ALWAYS);break;case ha:i.depthFunc(i.LESS);break;case fr:i.depthFunc(i.LEQUAL);break;case fa:i.depthFunc(i.EQUAL);break;case da:i.depthFunc(i.GEQUAL);break;case pa:i.depthFunc(i.GREATER);break;case ma:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Fe=V}},setLocked:function(V){G=V},setClear:function(V){W!==V&&(xe&&(V=1-V),i.clearDepth(V),W=V)},reset:function(){G=!1,be=null,Fe=null,W=null,xe=!1}}}function o(){let G=!1,xe=null,be=null,Fe=null,W=null,V=null,Oe=null,nt=null,pt=null;return{setTest:function(st){G||(st?_e(i.STENCIL_TEST):ue(i.STENCIL_TEST))},setMask:function(st){xe!==st&&!G&&(i.stencilMask(st),xe=st)},setFunc:function(st,Rt,St){(be!==st||Fe!==Rt||W!==St)&&(i.stencilFunc(st,Rt,St),be=st,Fe=Rt,W=St)},setOp:function(st,Rt,St){(V!==st||Oe!==Rt||nt!==St)&&(i.stencilOp(st,Rt,St),V=st,Oe=Rt,nt=St)},setLocked:function(st){G=st},setClear:function(st){pt!==st&&(i.clearStencil(st),pt=st)},reset:function(){G=!1,xe=null,be=null,Fe=null,W=null,V=null,Oe=null,nt=null,pt=null}}}const a=new t,c=new n,h=new o,p=new WeakMap,d=new WeakMap;let v={},_={},x=new WeakMap,E=[],b=null,R=!1,y=null,m=null,N=null,I=null,L=null,O=null,P=null,z=new dt(0,0,0),j=0,D=!1,T=null,H=null,Z=null,ie=null,te=null;const fe=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,ye=0;const se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(ye=parseFloat(/^WebGL (\d)/.exec(se)[1]),oe=ye>=1):se.indexOf("OpenGL ES")!==-1&&(ye=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),oe=ye>=2);let de=null,Pe={};const He=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),je=new kt().fromArray(He),Ye=new kt().fromArray(Be);function Ke(G,xe,be,Fe){const W=new Uint8Array(4),V=i.createTexture();i.bindTexture(G,V),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<be;Oe++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,Fe,0,i.RGBA,i.UNSIGNED_BYTE,W):i.texImage2D(xe+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,W);return V}const le={};le[i.TEXTURE_2D]=Ke(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=Ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=Ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=Ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),h.setClear(0),_e(i.DEPTH_TEST),c.setFunc(fr),$e(!1),Ve(ic),_e(i.CULL_FACE),xt(di);function _e(G){v[G]!==!0&&(i.enable(G),v[G]=!0)}function ue(G){v[G]!==!1&&(i.disable(G),v[G]=!1)}function Te(G,xe){return _[G]!==xe?(i.bindFramebuffer(G,xe),_[G]=xe,G===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=xe),G===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function We(G,xe){let be=E,Fe=!1;if(G){be=x.get(xe),be===void 0&&(be=[],x.set(xe,be));const W=G.textures;if(be.length!==W.length||be[0]!==i.COLOR_ATTACHMENT0){for(let V=0,Oe=W.length;V<Oe;V++)be[V]=i.COLOR_ATTACHMENT0+V;be.length=W.length,Fe=!0}}else be[0]!==i.BACK&&(be[0]=i.BACK,Fe=!0);Fe&&i.drawBuffers(be)}function it(G){return b!==G?(i.useProgram(G),b=G,!0):!1}const vt={[Fi]:i.FUNC_ADD,[p_]:i.FUNC_SUBTRACT,[m_]:i.FUNC_REVERSE_SUBTRACT};vt[__]=i.MIN,vt[g_]=i.MAX;const k={[v_]:i.ZERO,[x_]:i.ONE,[y_]:i.SRC_COLOR,[aa]:i.SRC_ALPHA,[b_]:i.SRC_ALPHA_SATURATE,[T_]:i.DST_COLOR,[S_]:i.DST_ALPHA,[E_]:i.ONE_MINUS_SRC_COLOR,[la]:i.ONE_MINUS_SRC_ALPHA,[w_]:i.ONE_MINUS_DST_COLOR,[M_]:i.ONE_MINUS_DST_ALPHA,[A_]:i.CONSTANT_COLOR,[R_]:i.ONE_MINUS_CONSTANT_COLOR,[C_]:i.CONSTANT_ALPHA,[P_]:i.ONE_MINUS_CONSTANT_ALPHA};function xt(G,xe,be,Fe,W,V,Oe,nt,pt,st){if(G===di){R===!0&&(ue(i.BLEND),R=!1);return}if(R===!1&&(_e(i.BLEND),R=!0),G!==d_){if(G!==y||st!==D){if((m!==Fi||L!==Fi)&&(i.blendEquation(i.FUNC_ADD),m=Fi,L=Fi),st)switch(G){case ur:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rc:i.blendFunc(i.ONE,i.ONE);break;case sc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case ur:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case sc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case oc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}N=null,I=null,O=null,P=null,z.set(0,0,0),j=0,y=G,D=st}return}W=W||xe,V=V||be,Oe=Oe||Fe,(xe!==m||W!==L)&&(i.blendEquationSeparate(vt[xe],vt[W]),m=xe,L=W),(be!==N||Fe!==I||V!==O||Oe!==P)&&(i.blendFuncSeparate(k[be],k[Fe],k[V],k[Oe]),N=be,I=Fe,O=V,P=Oe),(nt.equals(z)===!1||pt!==j)&&(i.blendColor(nt.r,nt.g,nt.b,pt),z.copy(nt),j=pt),y=G,D=!1}function Qe(G,xe){G.side===Pn?ue(i.CULL_FACE):_e(i.CULL_FACE);let be=G.side===cn;xe&&(be=!be),$e(be),G.blending===ur&&G.transparent===!1?xt(di):xt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),a.setMask(G.colorWrite);const Fe=G.stencilWrite;h.setTest(Fe),Fe&&(h.setMask(G.stencilWriteMask),h.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),h.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ze(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?_e(i.SAMPLE_ALPHA_TO_COVERAGE):ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function $e(G){T!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),T=G)}function Ve(G){G!==u_?(_e(i.CULL_FACE),G!==H&&(G===ic?i.cullFace(i.BACK):G===h_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ue(i.CULL_FACE),H=G}function _t(G){G!==Z&&(oe&&i.lineWidth(G),Z=G)}function ze(G,xe,be){G?(_e(i.POLYGON_OFFSET_FILL),(ie!==xe||te!==be)&&(i.polygonOffset(xe,be),ie=xe,te=be)):ue(i.POLYGON_OFFSET_FILL)}function tt(G){G?_e(i.SCISSOR_TEST):ue(i.SCISSOR_TEST)}function At(G){G===void 0&&(G=i.TEXTURE0+fe-1),de!==G&&(i.activeTexture(G),de=G)}function Et(G,xe,be){be===void 0&&(de===null?be=i.TEXTURE0+fe-1:be=de);let Fe=Pe[be];Fe===void 0&&(Fe={type:void 0,texture:void 0},Pe[be]=Fe),(Fe.type!==G||Fe.texture!==xe)&&(de!==be&&(i.activeTexture(be),de=be),i.bindTexture(G,xe||le[G]),Fe.type=G,Fe.texture=xe)}function U(){const G=Pe[de];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function A(){try{i.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function q(){try{i.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function B(){try{i.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Q(){try{i.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ve(){try{i.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(){try{i.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ie(){try{i.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Re(){try{i.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{i.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function he(G){je.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),je.copy(G))}function Le(G){Ye.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),Ye.copy(G))}function De(G,xe){let be=d.get(xe);be===void 0&&(be=new WeakMap,d.set(xe,be));let Fe=be.get(G);Fe===void 0&&(Fe=i.getUniformBlockIndex(xe,G.name),be.set(G,Fe))}function Ce(G,xe){const Fe=d.get(xe).get(G);p.get(xe)!==Fe&&(i.uniformBlockBinding(xe,Fe,G.__bindingPointIndex),p.set(xe,Fe))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),v={},de=null,Pe={},_={},x=new WeakMap,E=[],b=null,R=!1,y=null,m=null,N=null,I=null,L=null,O=null,P=null,z=new dt(0,0,0),j=0,D=!1,T=null,H=null,Z=null,ie=null,te=null,je.set(0,0,i.canvas.width,i.canvas.height),Ye.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),h.reset()}return{buffers:{color:a,depth:c,stencil:h},enable:_e,disable:ue,bindFramebuffer:Te,drawBuffers:We,useProgram:it,setBlending:xt,setMaterial:Qe,setFlipSided:$e,setCullFace:Ve,setLineWidth:_t,setPolygonOffset:ze,setScissorTest:tt,activeTexture:At,bindTexture:Et,unbindTexture:U,compressedTexImage2D:A,compressedTexImage3D:q,texImage2D:Re,texImage3D:pe,updateUBOMapping:De,uniformBlockBinding:Ce,texStorage2D:me,texStorage3D:Ie,texSubImage2D:B,texSubImage3D:Q,compressedTexSubImage2D:$,compressedTexSubImage3D:ve,scissor:he,viewport:Le,reset:Ze}}function dE(i,e,t,n,o,a,c){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new rt,v=new WeakMap;let _;const x=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,A){return E?new OffscreenCanvas(U,A):js("canvas")}function R(U,A,q){let B=1;const Q=Et(U);if((Q.width>q||Q.height>q)&&(B=q/Math.max(Q.width,Q.height)),B<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const $=Math.floor(B*Q.width),ve=Math.floor(B*Q.height);_===void 0&&(_=b($,ve));const me=A?b($,ve):_;return me.width=$,me.height=ve,me.getContext("2d").drawImage(U,0,0,$,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+ve+")."),me}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),U;return U}function y(U){return U.generateMipmaps}function m(U){i.generateMipmap(U)}function N(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function I(U,A,q,B,Q=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let $=A;if(A===i.RED&&(q===i.FLOAT&&($=i.R32F),q===i.HALF_FLOAT&&($=i.R16F),q===i.UNSIGNED_BYTE&&($=i.R8)),A===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&($=i.R8UI),q===i.UNSIGNED_SHORT&&($=i.R16UI),q===i.UNSIGNED_INT&&($=i.R32UI),q===i.BYTE&&($=i.R8I),q===i.SHORT&&($=i.R16I),q===i.INT&&($=i.R32I)),A===i.RG&&(q===i.FLOAT&&($=i.RG32F),q===i.HALF_FLOAT&&($=i.RG16F),q===i.UNSIGNED_BYTE&&($=i.RG8)),A===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&($=i.RG8UI),q===i.UNSIGNED_SHORT&&($=i.RG16UI),q===i.UNSIGNED_INT&&($=i.RG32UI),q===i.BYTE&&($=i.RG8I),q===i.SHORT&&($=i.RG16I),q===i.INT&&($=i.RG32I)),A===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&($=i.RGB8UI),q===i.UNSIGNED_SHORT&&($=i.RGB16UI),q===i.UNSIGNED_INT&&($=i.RGB32UI),q===i.BYTE&&($=i.RGB8I),q===i.SHORT&&($=i.RGB16I),q===i.INT&&($=i.RGB32I)),A===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&($=i.RGBA8UI),q===i.UNSIGNED_SHORT&&($=i.RGBA16UI),q===i.UNSIGNED_INT&&($=i.RGBA32UI),q===i.BYTE&&($=i.RGBA8I),q===i.SHORT&&($=i.RGBA16I),q===i.INT&&($=i.RGBA32I)),A===i.RGB&&(q===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),A===i.RGBA){const ve=Q?$s:Mt.getTransfer(B);q===i.FLOAT&&($=i.RGBA32F),q===i.HALF_FLOAT&&($=i.RGBA16F),q===i.UNSIGNED_BYTE&&($=ve===Pt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function L(U,A){let q;return U?A===null||A===Oi||A===Nr?q=i.DEPTH24_STENCIL8:A===ei?q=i.DEPTH32F_STENCIL8:A===Ur&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Oi||A===Nr?q=i.DEPTH_COMPONENT24:A===ei?q=i.DEPTH_COMPONENT32F:A===Ur&&(q=i.DEPTH_COMPONENT16),q}function O(U,A){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Fn&&U.minFilter!==Vn?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function P(U){const A=U.target;A.removeEventListener("dispose",P),j(A),A.isVideoTexture&&v.delete(A)}function z(U){const A=U.target;A.removeEventListener("dispose",z),T(A)}function j(U){const A=n.get(U);if(A.__webglInit===void 0)return;const q=U.source,B=x.get(q);if(B){const Q=B[A.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&D(U),Object.keys(B).length===0&&x.delete(q)}n.remove(U)}function D(U){const A=n.get(U);i.deleteTexture(A.__webglTexture);const q=U.source,B=x.get(q);delete B[A.__cacheKey],c.memory.textures--}function T(U){const A=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(A.__webglFramebuffer[B]))for(let Q=0;Q<A.__webglFramebuffer[B].length;Q++)i.deleteFramebuffer(A.__webglFramebuffer[B][Q]);else i.deleteFramebuffer(A.__webglFramebuffer[B]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[B])}else{if(Array.isArray(A.__webglFramebuffer))for(let B=0;B<A.__webglFramebuffer.length;B++)i.deleteFramebuffer(A.__webglFramebuffer[B]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let B=0;B<A.__webglColorRenderbuffer.length;B++)A.__webglColorRenderbuffer[B]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[B]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const q=U.textures;for(let B=0,Q=q.length;B<Q;B++){const $=n.get(q[B]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),c.memory.textures--),n.remove(q[B])}n.remove(U)}let H=0;function Z(){H=0}function ie(){const U=H;return U>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),H+=1,U}function te(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function fe(U,A){const q=n.get(U);if(U.isVideoTexture&&tt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&q.__version!==U.version){const B=U.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(q,U,A);return}}else U.isExternalTexture&&(q.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+A)}function oe(U,A){const q=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){le(q,U,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+A)}function ye(U,A){const q=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){le(q,U,A);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+A)}function se(U,A){const q=n.get(U);if(U.version>0&&q.__version!==U.version){_e(q,U,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+A)}const de={[va]:i.REPEAT,[Ui]:i.CLAMP_TO_EDGE,[xa]:i.MIRRORED_REPEAT},Pe={[Fn]:i.NEAREST,[z_]:i.NEAREST_MIPMAP_NEAREST,[fs]:i.NEAREST_MIPMAP_LINEAR,[Vn]:i.LINEAR,[xo]:i.LINEAR_MIPMAP_NEAREST,[Ni]:i.LINEAR_MIPMAP_LINEAR},He={[W_]:i.NEVER,[K_]:i.ALWAYS,[X_]:i.LESS,[Mu]:i.LEQUAL,[$_]:i.EQUAL,[Y_]:i.GEQUAL,[q_]:i.GREATER,[j_]:i.NOTEQUAL};function Be(U,A){if(A.type===ei&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Vn||A.magFilter===xo||A.magFilter===fs||A.magFilter===Ni||A.minFilter===Vn||A.minFilter===xo||A.minFilter===fs||A.minFilter===Ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,de[A.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,de[A.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,de[A.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,Pe[A.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,Pe[A.minFilter]),A.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,He[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Fn||A.minFilter!==fs&&A.minFilter!==Ni||A.type===ei&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function je(U,A){let q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",P));const B=A.source;let Q=x.get(B);Q===void 0&&(Q={},x.set(B,Q));const $=te(A);if($!==U.__cacheKey){Q[$]===void 0&&(Q[$]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,q=!0),Q[$].usedTimes++;const ve=Q[U.__cacheKey];ve!==void 0&&(Q[U.__cacheKey].usedTimes--,ve.usedTimes===0&&D(A)),U.__cacheKey=$,U.__webglTexture=Q[$].texture}return q}function Ye(U,A,q){return Math.floor(Math.floor(U/q)/A)}function Ke(U,A,q,B){const $=U.updateRanges;if($.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,q,B,A.data);else{$.sort((pe,he)=>pe.start-he.start);let ve=0;for(let pe=1;pe<$.length;pe++){const he=$[ve],Le=$[pe],De=he.start+he.count,Ce=Ye(Le.start,A.width,4),Ze=Ye(he.start,A.width,4);Le.start<=De+1&&Ce===Ze&&Ye(Le.start+Le.count-1,A.width,4)===Ce?he.count=Math.max(he.count,Le.start+Le.count-he.start):(++ve,$[ve]=Le)}$.length=ve+1;const me=i.getParameter(i.UNPACK_ROW_LENGTH),Ie=i.getParameter(i.UNPACK_SKIP_PIXELS),Re=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let pe=0,he=$.length;pe<he;pe++){const Le=$[pe],De=Math.floor(Le.start/4),Ce=Math.ceil(Le.count/4),Ze=De%A.width,G=Math.floor(De/A.width),xe=Ce,be=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,G),t.texSubImage2D(i.TEXTURE_2D,0,Ze,G,xe,be,q,B,A.data)}U.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,me),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ie),i.pixelStorei(i.UNPACK_SKIP_ROWS,Re)}}function le(U,A,q){let B=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(B=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(B=i.TEXTURE_3D);const Q=je(U,A),$=A.source;t.bindTexture(B,U.__webglTexture,i.TEXTURE0+q);const ve=n.get($);if($.version!==ve.__version||Q===!0){t.activeTexture(i.TEXTURE0+q);const me=Mt.getPrimaries(Mt.workingColorSpace),Ie=A.colorSpace===fi?null:Mt.getPrimaries(A.colorSpace),Re=A.colorSpace===fi||me===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let pe=R(A.image,!1,o.maxTextureSize);pe=At(A,pe);const he=a.convert(A.format,A.colorSpace),Le=a.convert(A.type);let De=I(A.internalFormat,he,Le,A.colorSpace,A.isVideoTexture);Be(B,A);let Ce;const Ze=A.mipmaps,G=A.isVideoTexture!==!0,xe=ve.__version===void 0||Q===!0,be=$.dataReady,Fe=O(A,pe);if(A.isDepthTexture)De=L(A.format===kr,A.type),xe&&(G?t.texStorage2D(i.TEXTURE_2D,1,De,pe.width,pe.height):t.texImage2D(i.TEXTURE_2D,0,De,pe.width,pe.height,0,he,Le,null));else if(A.isDataTexture)if(Ze.length>0){G&&xe&&t.texStorage2D(i.TEXTURE_2D,Fe,De,Ze[0].width,Ze[0].height);for(let W=0,V=Ze.length;W<V;W++)Ce=Ze[W],G?be&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,Ce.width,Ce.height,he,Le,Ce.data):t.texImage2D(i.TEXTURE_2D,W,De,Ce.width,Ce.height,0,he,Le,Ce.data);A.generateMipmaps=!1}else G?(xe&&t.texStorage2D(i.TEXTURE_2D,Fe,De,pe.width,pe.height),be&&Ke(A,pe,he,Le)):t.texImage2D(i.TEXTURE_2D,0,De,pe.width,pe.height,0,he,Le,pe.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){G&&xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,De,Ze[0].width,Ze[0].height,pe.depth);for(let W=0,V=Ze.length;W<V;W++)if(Ce=Ze[W],A.format!==Ln)if(he!==null)if(G){if(be)if(A.layerUpdates.size>0){const Oe=Uc(Ce.width,Ce.height,A.format,A.type);for(const nt of A.layerUpdates){const pt=Ce.data.subarray(nt*Oe/Ce.data.BYTES_PER_ELEMENT,(nt+1)*Oe/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,nt,Ce.width,Ce.height,1,he,pt)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Ce.width,Ce.height,pe.depth,he,Ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,De,Ce.width,Ce.height,pe.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?be&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Ce.width,Ce.height,pe.depth,he,Le,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,De,Ce.width,Ce.height,pe.depth,0,he,Le,Ce.data)}else{G&&xe&&t.texStorage2D(i.TEXTURE_2D,Fe,De,Ze[0].width,Ze[0].height);for(let W=0,V=Ze.length;W<V;W++)Ce=Ze[W],A.format!==Ln?he!==null?G?be&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,Ce.width,Ce.height,he,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,W,De,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?be&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,Ce.width,Ce.height,he,Le,Ce.data):t.texImage2D(i.TEXTURE_2D,W,De,Ce.width,Ce.height,0,he,Le,Ce.data)}else if(A.isDataArrayTexture)if(G){if(xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,De,pe.width,pe.height,pe.depth),be)if(A.layerUpdates.size>0){const W=Uc(pe.width,pe.height,A.format,A.type);for(const V of A.layerUpdates){const Oe=pe.data.subarray(V*W/pe.data.BYTES_PER_ELEMENT,(V+1)*W/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,V,pe.width,pe.height,1,he,Le,Oe)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,he,Le,pe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,pe.width,pe.height,pe.depth,0,he,Le,pe.data);else if(A.isData3DTexture)G?(xe&&t.texStorage3D(i.TEXTURE_3D,Fe,De,pe.width,pe.height,pe.depth),be&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,he,Le,pe.data)):t.texImage3D(i.TEXTURE_3D,0,De,pe.width,pe.height,pe.depth,0,he,Le,pe.data);else if(A.isFramebufferTexture){if(xe)if(G)t.texStorage2D(i.TEXTURE_2D,Fe,De,pe.width,pe.height);else{let W=pe.width,V=pe.height;for(let Oe=0;Oe<Fe;Oe++)t.texImage2D(i.TEXTURE_2D,Oe,De,W,V,0,he,Le,null),W>>=1,V>>=1}}else if(Ze.length>0){if(G&&xe){const W=Et(Ze[0]);t.texStorage2D(i.TEXTURE_2D,Fe,De,W.width,W.height)}for(let W=0,V=Ze.length;W<V;W++)Ce=Ze[W],G?be&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,he,Le,Ce):t.texImage2D(i.TEXTURE_2D,W,De,he,Le,Ce);A.generateMipmaps=!1}else if(G){if(xe){const W=Et(pe);t.texStorage2D(i.TEXTURE_2D,Fe,De,W.width,W.height)}be&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Le,pe)}else t.texImage2D(i.TEXTURE_2D,0,De,he,Le,pe);y(A)&&m(B),ve.__version=$.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function _e(U,A,q){if(A.image.length!==6)return;const B=je(U,A),Q=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+q);const $=n.get(Q);if(Q.version!==$.__version||B===!0){t.activeTexture(i.TEXTURE0+q);const ve=Mt.getPrimaries(Mt.workingColorSpace),me=A.colorSpace===fi?null:Mt.getPrimaries(A.colorSpace),Ie=A.colorSpace===fi||ve===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const Re=A.isCompressedTexture||A.image[0].isCompressedTexture,pe=A.image[0]&&A.image[0].isDataTexture,he=[];for(let V=0;V<6;V++)!Re&&!pe?he[V]=R(A.image[V],!0,o.maxCubemapSize):he[V]=pe?A.image[V].image:A.image[V],he[V]=At(A,he[V]);const Le=he[0],De=a.convert(A.format,A.colorSpace),Ce=a.convert(A.type),Ze=I(A.internalFormat,De,Ce,A.colorSpace),G=A.isVideoTexture!==!0,xe=$.__version===void 0||B===!0,be=Q.dataReady;let Fe=O(A,Le);Be(i.TEXTURE_CUBE_MAP,A);let W;if(Re){G&&xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,Ze,Le.width,Le.height);for(let V=0;V<6;V++){W=he[V].mipmaps;for(let Oe=0;Oe<W.length;Oe++){const nt=W[Oe];A.format!==Ln?De!==null?G?be&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,Oe,0,0,nt.width,nt.height,De,nt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,Oe,Ze,nt.width,nt.height,0,nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,Oe,0,0,nt.width,nt.height,De,Ce,nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,Oe,Ze,nt.width,nt.height,0,De,Ce,nt.data)}}}else{if(W=A.mipmaps,G&&xe){W.length>0&&Fe++;const V=Et(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,Ze,V.width,V.height)}for(let V=0;V<6;V++)if(pe){G?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,he[V].width,he[V].height,De,Ce,he[V].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,Ze,he[V].width,he[V].height,0,De,Ce,he[V].data);for(let Oe=0;Oe<W.length;Oe++){const pt=W[Oe].image[V].image;G?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,Oe+1,0,0,pt.width,pt.height,De,Ce,pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,Oe+1,Ze,pt.width,pt.height,0,De,Ce,pt.data)}}else{G?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,De,Ce,he[V]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,Ze,De,Ce,he[V]);for(let Oe=0;Oe<W.length;Oe++){const nt=W[Oe];G?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,Oe+1,0,0,De,Ce,nt.image[V]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,Oe+1,Ze,De,Ce,nt.image[V])}}}y(A)&&m(i.TEXTURE_CUBE_MAP),$.__version=Q.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function ue(U,A,q,B,Q,$){const ve=a.convert(q.format,q.colorSpace),me=a.convert(q.type),Ie=I(q.internalFormat,ve,me,q.colorSpace),Re=n.get(A),pe=n.get(q);if(pe.__renderTarget=A,!Re.__hasExternalTextures){const he=Math.max(1,A.width>>$),Le=Math.max(1,A.height>>$);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,$,Ie,he,Le,A.depth,0,ve,me,null):t.texImage2D(Q,$,Ie,he,Le,0,ve,me,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),ze(A)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,B,Q,pe.__webglTexture,0,_t(A)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,B,Q,pe.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(U,A,q){if(i.bindRenderbuffer(i.RENDERBUFFER,U),A.depthBuffer){const B=A.depthTexture,Q=B&&B.isDepthTexture?B.type:null,$=L(A.stencilBuffer,Q),ve=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=_t(A);ze(A)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,$,A.width,A.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,$,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,$,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,U)}else{const B=A.textures;for(let Q=0;Q<B.length;Q++){const $=B[Q],ve=a.convert($.format,$.colorSpace),me=a.convert($.type),Ie=I($.internalFormat,ve,me,$.colorSpace),Re=_t(A);q&&ze(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,Ie,A.width,A.height):ze(A)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,Ie,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function We(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const B=n.get(A.depthTexture);B.__renderTarget=A,(!B.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),fe(A.depthTexture,0);const Q=B.__webglTexture,$=_t(A);if(A.depthTexture.format===Or)ze(A)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(A.depthTexture.format===kr)ze(A)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function it(U){const A=n.get(U),q=U.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==U.depthTexture){const B=U.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),B){const Q=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,B.removeEventListener("dispose",Q)};B.addEventListener("dispose",Q),A.__depthDisposeCallback=Q}A.__boundDepthTexture=B}if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const B=U.texture.mipmaps;B&&B.length>0?We(A.__webglFramebuffer[0],U):We(A.__webglFramebuffer,U)}else if(q){A.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[B]),A.__webglDepthbuffer[B]===void 0)A.__webglDepthbuffer[B]=i.createRenderbuffer(),Te(A.__webglDepthbuffer[B],U,!1);else{const Q=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=A.__webglDepthbuffer[B];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,$)}}else{const B=U.texture.mipmaps;if(B&&B.length>0?t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),Te(A.__webglDepthbuffer,U,!1);else{const Q=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,$)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(U,A,q){const B=n.get(U);A!==void 0&&ue(B.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&it(U)}function k(U){const A=U.texture,q=n.get(U),B=n.get(A);U.addEventListener("dispose",z);const Q=U.textures,$=U.isWebGLCubeRenderTarget===!0,ve=Q.length>1;if(ve||(B.__webglTexture===void 0&&(B.__webglTexture=i.createTexture()),B.__version=A.version,c.memory.textures++),$){q.__webglFramebuffer=[];for(let me=0;me<6;me++)if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer[me]=[];for(let Ie=0;Ie<A.mipmaps.length;Ie++)q.__webglFramebuffer[me][Ie]=i.createFramebuffer()}else q.__webglFramebuffer[me]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer=[];for(let me=0;me<A.mipmaps.length;me++)q.__webglFramebuffer[me]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(ve)for(let me=0,Ie=Q.length;me<Ie;me++){const Re=n.get(Q[me]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),c.memory.textures++)}if(U.samples>0&&ze(U)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let me=0;me<Q.length;me++){const Ie=Q[me];q.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[me]);const Re=a.convert(Ie.format,Ie.colorSpace),pe=a.convert(Ie.type),he=I(Ie.internalFormat,Re,pe,Ie.colorSpace,U.isXRRenderTarget===!0),Le=_t(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,he,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,q.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Te(q.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture),Be(i.TEXTURE_CUBE_MAP,A);for(let me=0;me<6;me++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ie=0;Ie<A.mipmaps.length;Ie++)ue(q.__webglFramebuffer[me][Ie],U,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie);else ue(q.__webglFramebuffer[me],U,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);y(A)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let me=0,Ie=Q.length;me<Ie;me++){const Re=Q[me],pe=n.get(Re);let he=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(he=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,pe.__webglTexture),Be(he,Re),ue(q.__webglFramebuffer,U,Re,i.COLOR_ATTACHMENT0+me,he,0),y(Re)&&m(he)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(me=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,B.__webglTexture),Be(me,A),A.mipmaps&&A.mipmaps.length>0)for(let Ie=0;Ie<A.mipmaps.length;Ie++)ue(q.__webglFramebuffer[Ie],U,A,i.COLOR_ATTACHMENT0,me,Ie);else ue(q.__webglFramebuffer,U,A,i.COLOR_ATTACHMENT0,me,0);y(A)&&m(me),t.unbindTexture()}U.depthBuffer&&it(U)}function xt(U){const A=U.textures;for(let q=0,B=A.length;q<B;q++){const Q=A[q];if(y(Q)){const $=N(U),ve=n.get(Q).__webglTexture;t.bindTexture($,ve),m($),t.unbindTexture()}}}const Qe=[],$e=[];function Ve(U){if(U.samples>0){if(ze(U)===!1){const A=U.textures,q=U.width,B=U.height;let Q=i.COLOR_BUFFER_BIT;const $=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(U),me=A.length>1;if(me)for(let Re=0;Re<A.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const Ie=U.texture.mipmaps;Ie&&Ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Re=0;Re<A.length;Re++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Re]);const pe=n.get(A[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pe,0)}i.blitFramebuffer(0,0,q,B,0,0,q,B,Q,i.NEAREST),p===!0&&(Qe.length=0,$e.length=0,Qe.push(i.COLOR_ATTACHMENT0+Re),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Qe.push($),$e.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$e)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Qe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let Re=0;Re<A.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Re]);const pe=n.get(A[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const A=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function _t(U){return Math.min(o.maxSamples,U.samples)}function ze(U){const A=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function tt(U){const A=c.render.frame;v.get(U)!==A&&(v.set(U,A),U.update())}function At(U,A){const q=U.colorSpace,B=U.format,Q=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||q!==mr&&q!==fi&&(Mt.getTransfer(q)===Pt?(B!==Ln||Q!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),A}function Et(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(d.width=U.naturalWidth||U.width,d.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(d.width=U.displayWidth,d.height=U.displayHeight):(d.width=U.width,d.height=U.height),d}this.allocateTextureUnit=ie,this.resetTextureUnits=Z,this.setTexture2D=fe,this.setTexture2DArray=oe,this.setTexture3D=ye,this.setTextureCube=se,this.rebindTextures=vt,this.setupRenderTarget=k,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=ze}function pE(i,e){function t(n,o=fi){let a;const c=Mt.getTransfer(o);if(n===Wn)return i.UNSIGNED_BYTE;if(n===el)return i.UNSIGNED_SHORT_4_4_4_4;if(n===tl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_u)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===pu)return i.BYTE;if(n===mu)return i.SHORT;if(n===Ur)return i.UNSIGNED_SHORT;if(n===Qa)return i.INT;if(n===Oi)return i.UNSIGNED_INT;if(n===ei)return i.FLOAT;if(n===zr)return i.HALF_FLOAT;if(n===vu)return i.ALPHA;if(n===xu)return i.RGB;if(n===Ln)return i.RGBA;if(n===Or)return i.DEPTH_COMPONENT;if(n===kr)return i.DEPTH_STENCIL;if(n===yu)return i.RED;if(n===nl)return i.RED_INTEGER;if(n===Eu)return i.RG;if(n===il)return i.RG_INTEGER;if(n===rl)return i.RGBA_INTEGER;if(n===zs||n===Hs||n===Vs||n===Gs)if(c===Pt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===zs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===zs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ya||n===Ea||n===Sa||n===Ma)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===ya)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ea)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ma)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ta||n===wa||n===ba)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Ta||n===wa)return c===Pt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===ba)return c===Pt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Aa||n===Ra||n===Ca||n===Pa||n===Da||n===La||n===Fa||n===Ia||n===Ua||n===Na||n===Oa||n===ka||n===Ba||n===za)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Aa)return c===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ra)return c===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ca)return c===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pa)return c===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Da)return c===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===La)return c===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fa)return c===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ia)return c===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ua)return c===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Na)return c===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oa)return c===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ka)return c===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ba)return c===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===za)return c===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ha||n===Va||n===Ga)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Ha)return c===Pt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Va)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ga)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wa||n===Xa||n===$a||n===qa)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Wa)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Xa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$a)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qa)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const mE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_E=`
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

}`;class gE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Uu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new _i({vertexShader:mE,fragmentShader:_E,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Sn(new Wr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vE extends zi{constructor(e,t){super();const n=this;let o=null,a=1,c=null,h="local-floor",p=1,d=null,v=null,_=null,x=null,E=null,b=null;const R=typeof XRWebGLBinding<"u",y=new gE,m={},N=t.getContextAttributes();let I=null,L=null;const O=[],P=[],z=new rt;let j=null;const D=new En;D.viewport=new kt;const T=new En;T.viewport=new kt;const H=[D,T],Z=new Og;let ie=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let _e=O[le];return _e===void 0&&(_e=new Ho,O[le]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(le){let _e=O[le];return _e===void 0&&(_e=new Ho,O[le]=_e),_e.getGripSpace()},this.getHand=function(le){let _e=O[le];return _e===void 0&&(_e=new Ho,O[le]=_e),_e.getHandSpace()};function fe(le){const _e=P.indexOf(le.inputSource);if(_e===-1)return;const ue=O[_e];ue!==void 0&&(ue.update(le.inputSource,le.frame,d||c),ue.dispatchEvent({type:le.type,data:le.inputSource}))}function oe(){o.removeEventListener("select",fe),o.removeEventListener("selectstart",fe),o.removeEventListener("selectend",fe),o.removeEventListener("squeeze",fe),o.removeEventListener("squeezestart",fe),o.removeEventListener("squeezeend",fe),o.removeEventListener("end",oe),o.removeEventListener("inputsourceschange",ye);for(let le=0;le<O.length;le++){const _e=P[le];_e!==null&&(P[le]=null,O[le].disconnect(_e))}ie=null,te=null,y.reset();for(const le in m)delete m[le];e.setRenderTarget(I),E=null,x=null,_=null,o=null,L=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(j),e.setSize(z.width,z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){a=le,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){h=le,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(le){d=le},this.getBaseLayer=function(){return x!==null?x:E},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(o,t)),_},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(le){if(o=le,o!==null){if(I=e.getRenderTarget(),o.addEventListener("select",fe),o.addEventListener("selectstart",fe),o.addEventListener("selectend",fe),o.addEventListener("squeeze",fe),o.addEventListener("squeezestart",fe),o.addEventListener("squeezeend",fe),o.addEventListener("end",oe),o.addEventListener("inputsourceschange",ye),N.xrCompatible!==!0&&await t.makeXRCompatible(),j=e.getPixelRatio(),e.getSize(z),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Te=null,We=null;N.depth&&(We=N.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=N.stencil?kr:Or,Te=N.stencil?Nr:Oi);const it={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:a};_=this.getBinding(),x=_.createProjectionLayer(it),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),L=new Bi(x.textureWidth,x.textureHeight,{format:Ln,type:Wn,depthTexture:new Iu(x.textureWidth,x.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const ue={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:a};E=new XRWebGLLayer(o,t,ue),o.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),L=new Bi(E.framebufferWidth,E.framebufferHeight,{format:Ln,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),d=null,c=await o.requestReferenceSpace(h),Ke.setContext(o),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ye(le){for(let _e=0;_e<le.removed.length;_e++){const ue=le.removed[_e],Te=P.indexOf(ue);Te>=0&&(P[Te]=null,O[Te].disconnect(ue))}for(let _e=0;_e<le.added.length;_e++){const ue=le.added[_e];let Te=P.indexOf(ue);if(Te===-1){for(let it=0;it<O.length;it++)if(it>=P.length){P.push(ue),Te=it;break}else if(P[it]===null){P[it]=ue,Te=it;break}if(Te===-1)break}const We=O[Te];We&&We.connect(ue)}}const se=new ee,de=new ee;function Pe(le,_e,ue){se.setFromMatrixPosition(_e.matrixWorld),de.setFromMatrixPosition(ue.matrixWorld);const Te=se.distanceTo(de),We=_e.projectionMatrix.elements,it=ue.projectionMatrix.elements,vt=We[14]/(We[10]-1),k=We[14]/(We[10]+1),xt=(We[9]+1)/We[5],Qe=(We[9]-1)/We[5],$e=(We[8]-1)/We[0],Ve=(it[8]+1)/it[0],_t=vt*$e,ze=vt*Ve,tt=Te/(-$e+Ve),At=tt*-$e;if(_e.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(At),le.translateZ(tt),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),We[10]===-1)le.projectionMatrix.copy(_e.projectionMatrix),le.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const Et=vt+tt,U=k+tt,A=_t-At,q=ze+(Te-At),B=xt*k/U*Et,Q=Qe*k/U*Et;le.projectionMatrix.makePerspective(A,q,B,Q,Et,U),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function He(le,_e){_e===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(_e.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(o===null)return;let _e=le.near,ue=le.far;y.texture!==null&&(y.depthNear>0&&(_e=y.depthNear),y.depthFar>0&&(ue=y.depthFar)),Z.near=T.near=D.near=_e,Z.far=T.far=D.far=ue,(ie!==Z.near||te!==Z.far)&&(o.updateRenderState({depthNear:Z.near,depthFar:Z.far}),ie=Z.near,te=Z.far),Z.layers.mask=le.layers.mask|6,D.layers.mask=Z.layers.mask&3,T.layers.mask=Z.layers.mask&5;const Te=le.parent,We=Z.cameras;He(Z,Te);for(let it=0;it<We.length;it++)He(We[it],Te);We.length===2?Pe(Z,D,T):Z.projectionMatrix.copy(D.projectionMatrix),Be(le,Z,Te)};function Be(le,_e,ue){ue===null?le.matrix.copy(_e.matrixWorld):(le.matrix.copy(ue.matrixWorld),le.matrix.invert(),le.matrix.multiply(_e.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(_e.projectionMatrix),le.projectionMatrixInverse.copy(_e.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=ja*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(x===null&&E===null))return p},this.setFoveation=function(le){p=le,x!==null&&(x.fixedFoveation=le),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=le)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Z)},this.getCameraTexture=function(le){return m[le]};let je=null;function Ye(le,_e){if(v=_e.getViewerPose(d||c),b=_e,v!==null){const ue=v.views;E!==null&&(e.setRenderTargetFramebuffer(L,E.framebuffer),e.setRenderTarget(L));let Te=!1;ue.length!==Z.cameras.length&&(Z.cameras.length=0,Te=!0);for(let k=0;k<ue.length;k++){const xt=ue[k];let Qe=null;if(E!==null)Qe=E.getViewport(xt);else{const Ve=_.getViewSubImage(x,xt);Qe=Ve.viewport,k===0&&(e.setRenderTargetTextures(L,Ve.colorTexture,Ve.depthStencilTexture),e.setRenderTarget(L))}let $e=H[k];$e===void 0&&($e=new En,$e.layers.enable(k),$e.viewport=new kt,H[k]=$e),$e.matrix.fromArray(xt.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(xt.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),k===0&&(Z.matrix.copy($e.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Te===!0&&Z.cameras.push($e)}const We=o.enabledFeatures;if(We&&We.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){_=n.getBinding();const k=_.getDepthInformation(ue[0]);k&&k.isValid&&k.texture&&y.init(k,o.renderState)}if(We&&We.includes("camera-access")&&R){e.state.unbindTexture(),_=n.getBinding();for(let k=0;k<ue.length;k++){const xt=ue[k].camera;if(xt){let Qe=m[xt];Qe||(Qe=new Uu,m[xt]=Qe);const $e=_.getCameraImage(xt);Qe.sourceTexture=$e}}}}for(let ue=0;ue<O.length;ue++){const Te=P[ue],We=O[ue];Te!==null&&We!==void 0&&We.update(Te,_e,d||c)}je&&je(le,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),b=null}const Ke=new ku;Ke.setAnimationLoop(Ye),this.setAnimationLoop=function(le){je=le},this.dispose=function(){}}}const Pi=new Xn,xE=new Bt;function yE(i,e){function t(y,m){y.matrixAutoUpdate===!0&&y.updateMatrix(),m.value.copy(y.matrix)}function n(y,m){m.color.getRGB(y.fogColor.value,Pu(i)),m.isFog?(y.fogNear.value=m.near,y.fogFar.value=m.far):m.isFogExp2&&(y.fogDensity.value=m.density)}function o(y,m,N,I,L){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(y,m):m.isMeshToonMaterial?(a(y,m),_(y,m)):m.isMeshPhongMaterial?(a(y,m),v(y,m)):m.isMeshStandardMaterial?(a(y,m),x(y,m),m.isMeshPhysicalMaterial&&E(y,m,L)):m.isMeshMatcapMaterial?(a(y,m),b(y,m)):m.isMeshDepthMaterial?a(y,m):m.isMeshDistanceMaterial?(a(y,m),R(y,m)):m.isMeshNormalMaterial?a(y,m):m.isLineBasicMaterial?(c(y,m),m.isLineDashedMaterial&&h(y,m)):m.isPointsMaterial?p(y,m,N,I):m.isSpriteMaterial?d(y,m):m.isShadowMaterial?(y.color.value.copy(m.color),y.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(y,m){y.opacity.value=m.opacity,m.color&&y.diffuse.value.copy(m.color),m.emissive&&y.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(y.map.value=m.map,t(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,t(m.alphaMap,y.alphaMapTransform)),m.bumpMap&&(y.bumpMap.value=m.bumpMap,t(m.bumpMap,y.bumpMapTransform),y.bumpScale.value=m.bumpScale,m.side===cn&&(y.bumpScale.value*=-1)),m.normalMap&&(y.normalMap.value=m.normalMap,t(m.normalMap,y.normalMapTransform),y.normalScale.value.copy(m.normalScale),m.side===cn&&y.normalScale.value.negate()),m.displacementMap&&(y.displacementMap.value=m.displacementMap,t(m.displacementMap,y.displacementMapTransform),y.displacementScale.value=m.displacementScale,y.displacementBias.value=m.displacementBias),m.emissiveMap&&(y.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,y.emissiveMapTransform)),m.specularMap&&(y.specularMap.value=m.specularMap,t(m.specularMap,y.specularMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest);const N=e.get(m),I=N.envMap,L=N.envMapRotation;I&&(y.envMap.value=I,Pi.copy(L),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),y.envMapRotation.value.setFromMatrix4(xE.makeRotationFromEuler(Pi)),y.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=m.reflectivity,y.ior.value=m.ior,y.refractionRatio.value=m.refractionRatio),m.lightMap&&(y.lightMap.value=m.lightMap,y.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,y.lightMapTransform)),m.aoMap&&(y.aoMap.value=m.aoMap,y.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,y.aoMapTransform))}function c(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,m.map&&(y.map.value=m.map,t(m.map,y.mapTransform))}function h(y,m){y.dashSize.value=m.dashSize,y.totalSize.value=m.dashSize+m.gapSize,y.scale.value=m.scale}function p(y,m,N,I){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.size.value=m.size*N,y.scale.value=I*.5,m.map&&(y.map.value=m.map,t(m.map,y.uvTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,t(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function d(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.rotation.value=m.rotation,m.map&&(y.map.value=m.map,t(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,t(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function v(y,m){y.specular.value.copy(m.specular),y.shininess.value=Math.max(m.shininess,1e-4)}function _(y,m){m.gradientMap&&(y.gradientMap.value=m.gradientMap)}function x(y,m){y.metalness.value=m.metalness,m.metalnessMap&&(y.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,y.metalnessMapTransform)),y.roughness.value=m.roughness,m.roughnessMap&&(y.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,y.roughnessMapTransform)),m.envMap&&(y.envMapIntensity.value=m.envMapIntensity)}function E(y,m,N){y.ior.value=m.ior,m.sheen>0&&(y.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),y.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(y.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,y.sheenColorMapTransform)),m.sheenRoughnessMap&&(y.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,y.sheenRoughnessMapTransform))),m.clearcoat>0&&(y.clearcoat.value=m.clearcoat,y.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(y.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,y.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(y.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===cn&&y.clearcoatNormalScale.value.negate())),m.dispersion>0&&(y.dispersion.value=m.dispersion),m.iridescence>0&&(y.iridescence.value=m.iridescence,y.iridescenceIOR.value=m.iridescenceIOR,y.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(y.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,y.iridescenceMapTransform)),m.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),m.transmission>0&&(y.transmission.value=m.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),m.transmissionMap&&(y.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,y.transmissionMapTransform)),y.thickness.value=m.thickness,m.thicknessMap&&(y.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=m.attenuationDistance,y.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(y.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(y.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=m.specularIntensity,y.specularColor.value.copy(m.specularColor),m.specularColorMap&&(y.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,y.specularColorMapTransform)),m.specularIntensityMap&&(y.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,m){m.matcap&&(y.matcap.value=m.matcap)}function R(y,m){const N=e.get(m).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:o}}function EE(i,e,t,n){let o={},a={},c=[];const h=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,I){const L=I.program;n.uniformBlockBinding(N,L)}function d(N,I){let L=o[N.id];L===void 0&&(b(N),L=v(N),o[N.id]=L,N.addEventListener("dispose",y));const O=I.program;n.updateUBOMapping(N,O);const P=e.render.frame;a[N.id]!==P&&(x(N),a[N.id]=P)}function v(N){const I=_();N.__bindingPointIndex=I;const L=i.createBuffer(),O=N.__size,P=N.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,O,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,L),L}function _(){for(let N=0;N<h;N++)if(c.indexOf(N)===-1)return c.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const I=o[N.id],L=N.uniforms,O=N.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let P=0,z=L.length;P<z;P++){const j=Array.isArray(L[P])?L[P]:[L[P]];for(let D=0,T=j.length;D<T;D++){const H=j[D];if(E(H,P,D,O)===!0){const Z=H.__offset,ie=Array.isArray(H.value)?H.value:[H.value];let te=0;for(let fe=0;fe<ie.length;fe++){const oe=ie[fe],ye=R(oe);typeof oe=="number"||typeof oe=="boolean"?(H.__data[0]=oe,i.bufferSubData(i.UNIFORM_BUFFER,Z+te,H.__data)):oe.isMatrix3?(H.__data[0]=oe.elements[0],H.__data[1]=oe.elements[1],H.__data[2]=oe.elements[2],H.__data[3]=0,H.__data[4]=oe.elements[3],H.__data[5]=oe.elements[4],H.__data[6]=oe.elements[5],H.__data[7]=0,H.__data[8]=oe.elements[6],H.__data[9]=oe.elements[7],H.__data[10]=oe.elements[8],H.__data[11]=0):(oe.toArray(H.__data,te),te+=ye.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Z,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function E(N,I,L,O){const P=N.value,z=I+"_"+L;if(O[z]===void 0)return typeof P=="number"||typeof P=="boolean"?O[z]=P:O[z]=P.clone(),!0;{const j=O[z];if(typeof P=="number"||typeof P=="boolean"){if(j!==P)return O[z]=P,!0}else if(j.equals(P)===!1)return j.copy(P),!0}return!1}function b(N){const I=N.uniforms;let L=0;const O=16;for(let z=0,j=I.length;z<j;z++){const D=Array.isArray(I[z])?I[z]:[I[z]];for(let T=0,H=D.length;T<H;T++){const Z=D[T],ie=Array.isArray(Z.value)?Z.value:[Z.value];for(let te=0,fe=ie.length;te<fe;te++){const oe=ie[te],ye=R(oe),se=L%O,de=se%ye.boundary,Pe=se+de;L+=de,Pe!==0&&O-Pe<ye.storage&&(L+=O-Pe),Z.__data=new Float32Array(ye.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=L,L+=ye.storage}}}const P=L%O;return P>0&&(L+=O-P),N.__size=L,N.__cache={},this}function R(N){const I={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(I.boundary=4,I.storage=4):N.isVector2?(I.boundary=8,I.storage=8):N.isVector3||N.isColor?(I.boundary=16,I.storage=12):N.isVector4?(I.boundary=16,I.storage=16):N.isMatrix3?(I.boundary=48,I.storage=48):N.isMatrix4?(I.boundary=64,I.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),I}function y(N){const I=N.target;I.removeEventListener("dispose",y);const L=c.indexOf(I.__bindingPointIndex);c.splice(L,1),i.deleteBuffer(o[I.id]),delete o[I.id],delete a[I.id]}function m(){for(const N in o)i.deleteBuffer(o[N]);c=[],o={},a={}}return{bind:p,update:d,dispose:m}}class SE{constructor(e={}){const{canvas:t=Q_(),context:n=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let E;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=n.getContextAttributes().alpha}else E=c;const b=new Uint32Array(4),R=new Int32Array(4);let y=null,m=null;const N=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let O=!1;this._outputColorSpace=mn;let P=0,z=0,j=null,D=-1,T=null;const H=new kt,Z=new kt;let ie=null;const te=new dt(0);let fe=0,oe=t.width,ye=t.height,se=1,de=null,Pe=null;const He=new kt(0,0,oe,ye),Be=new kt(0,0,oe,ye);let je=!1;const Ye=new ll;let Ke=!1,le=!1;const _e=new Bt,ue=new ee,Te=new kt,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function vt(){return j===null?se:1}let k=n;function xt(C,Y){return t.getContext(C,Y)}try{const C={alpha:!0,depth:o,stencil:a,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ja}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",W,!1),k===null){const Y="webgl2";if(k=xt(Y,C),k===null)throw xt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Qe,$e,Ve,_t,ze,tt,At,Et,U,A,q,B,Q,$,ve,me,Ie,Re,pe,he,Le,De,Ce,Ze;function G(){Qe=new Lx(k),Qe.init(),De=new pE(k,Qe),$e=new wx(k,Qe,e,De),Ve=new fE(k,Qe),$e.reversedDepthBuffer&&x&&Ve.buffers.depth.setReversed(!0),_t=new Ux(k),ze=new Qy,tt=new dE(k,Qe,Ve,ze,$e,De,_t),At=new Ax(L),Et=new Dx(L),U=new Hg(k),Ce=new Mx(k,U),A=new Fx(k,U,_t,Ce),q=new Ox(k,A,U,_t),pe=new Nx(k,$e,tt),me=new bx(ze),B=new Jy(L,At,Et,Qe,$e,Ce,me),Q=new yE(L,ze),$=new tE,ve=new aE(Qe),Re=new Sx(L,At,Et,Ve,q,E,p),Ie=new uE(L,q,$e),Ze=new EE(k,_t,$e,Ve),he=new Tx(k,Qe,_t),Le=new Ix(k,Qe,_t),_t.programs=B.programs,L.capabilities=$e,L.extensions=Qe,L.properties=ze,L.renderLists=$,L.shadowMap=Ie,L.state=Ve,L.info=_t}G();const xe=new vE(L,k);this.xr=xe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=Qe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Qe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(C){C!==void 0&&(se=C,this.setSize(oe,ye,!1))},this.getSize=function(C){return C.set(oe,ye)},this.setSize=function(C,Y,ne=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=C,ye=Y,t.width=Math.floor(C*se),t.height=Math.floor(Y*se),ne===!0&&(t.style.width=C+"px",t.style.height=Y+"px"),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(oe*se,ye*se).floor()},this.setDrawingBufferSize=function(C,Y,ne){oe=C,ye=Y,se=ne,t.width=Math.floor(C*ne),t.height=Math.floor(Y*ne),this.setViewport(0,0,C,Y)},this.getCurrentViewport=function(C){return C.copy(H)},this.getViewport=function(C){return C.copy(He)},this.setViewport=function(C,Y,ne,re){C.isVector4?He.set(C.x,C.y,C.z,C.w):He.set(C,Y,ne,re),Ve.viewport(H.copy(He).multiplyScalar(se).round())},this.getScissor=function(C){return C.copy(Be)},this.setScissor=function(C,Y,ne,re){C.isVector4?Be.set(C.x,C.y,C.z,C.w):Be.set(C,Y,ne,re),Ve.scissor(Z.copy(Be).multiplyScalar(se).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(C){Ve.setScissorTest(je=C)},this.setOpaqueSort=function(C){de=C},this.setTransparentSort=function(C){Pe=C},this.getClearColor=function(C){return C.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,ne=!0){let re=0;if(C){let K=!1;if(j!==null){const we=j.texture.format;K=we===rl||we===il||we===nl}if(K){const we=j.texture.type,Ue=we===Wn||we===Oi||we===Ur||we===Nr||we===el||we===tl,Ge=Re.getClearColor(),ke=Re.getClearAlpha(),et=Ge.r,Ae=Ge.g,qe=Ge.b;Ue?(b[0]=et,b[1]=Ae,b[2]=qe,b[3]=ke,k.clearBufferuiv(k.COLOR,0,b)):(R[0]=et,R[1]=Ae,R[2]=qe,R[3]=ke,k.clearBufferiv(k.COLOR,0,R))}else re|=k.COLOR_BUFFER_BIT}Y&&(re|=k.DEPTH_BUFFER_BIT),ne&&(re|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",W,!1),Re.dispose(),$.dispose(),ve.dispose(),ze.dispose(),At.dispose(),Et.dispose(),q.dispose(),Ce.dispose(),Ze.dispose(),B.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",St),xe.removeEventListener("sessionend",Un),gn.stop()};function be(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const C=_t.autoReset,Y=Ie.enabled,ne=Ie.autoUpdate,re=Ie.needsUpdate,K=Ie.type;G(),_t.autoReset=C,Ie.enabled=Y,Ie.autoUpdate=ne,Ie.needsUpdate=re,Ie.type=K}function W(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function V(C){const Y=C.target;Y.removeEventListener("dispose",V),Oe(Y)}function Oe(C){nt(C),ze.remove(C)}function nt(C){const Y=ze.get(C).programs;Y!==void 0&&(Y.forEach(function(ne){B.releaseProgram(ne)}),C.isShaderMaterial&&B.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,ne,re,K,we){Y===null&&(Y=We);const Ue=K.isMesh&&K.matrixWorld.determinant()<0,Ge=Yr(C,Y,ne,re,K);Ve.setMaterial(re,Ue);let ke=ne.index,et=1;if(re.wireframe===!0){if(ke=A.getWireframeAttribute(ne),ke===void 0)return;et=2}const Ae=ne.drawRange,qe=ne.attributes.position;let ut=Ae.start*et,wt=(Ae.start+Ae.count)*et;we!==null&&(ut=Math.max(ut,we.start*et),wt=Math.min(wt,(we.start+we.count)*et)),ke!==null?(ut=Math.max(ut,0),wt=Math.min(wt,ke.count)):qe!=null&&(ut=Math.max(ut,0),wt=Math.min(wt,qe.count));const Nt=wt-ut;if(Nt<0||Nt===1/0)return;Ce.setup(K,re,Ge,ne,ke);let Lt,bt=he;if(ke!==null&&(Lt=U.get(ke),bt=Le,bt.setIndex(Lt)),K.isMesh)re.wireframe===!0?(Ve.setLineWidth(re.wireframeLinewidth*vt()),bt.setMode(k.LINES)):bt.setMode(k.TRIANGLES);else if(K.isLine){let Je=re.linewidth;Je===void 0&&(Je=1),Ve.setLineWidth(Je*vt()),K.isLineSegments?bt.setMode(k.LINES):K.isLineLoop?bt.setMode(k.LINE_LOOP):bt.setMode(k.LINE_STRIP)}else K.isPoints?bt.setMode(k.POINTS):K.isSprite&&bt.setMode(k.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Br("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))bt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Je=K._multiDrawStarts,Ft=K._multiDrawCounts,gt=K._multiDrawCount,Zt=ke?U.get(ke).bytesPerElement:1,S=ze.get(re).currentProgram.getUniforms();for(let ht=0;ht<gt;ht++)S.setValue(k,"_gl_DrawID",ht),bt.render(Je[ht]/Zt,Ft[ht])}else if(K.isInstancedMesh)bt.renderInstances(ut,Nt,K.count);else if(ne.isInstancedBufferGeometry){const Je=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Ft=Math.min(ne.instanceCount,Je);bt.renderInstances(ut,Nt,Ft)}else bt.render(ut,Nt)};function pt(C,Y,ne){C.transparent===!0&&C.side===Pn&&C.forceSinglePass===!1?(C.side=cn,C.needsUpdate=!0,vi(C,Y,ne),C.side=mi,C.needsUpdate=!0,vi(C,Y,ne),C.side=Pn):vi(C,Y,ne)}this.compile=function(C,Y,ne=null){ne===null&&(ne=C),m=ve.get(ne),m.init(Y),I.push(m),ne.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),C!==ne&&C.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights();const re=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const we=K.material;if(we)if(Array.isArray(we))for(let Ue=0;Ue<we.length;Ue++){const Ge=we[Ue];pt(Ge,ne,K),re.add(Ge)}else pt(we,ne,K),re.add(we)}),m=I.pop(),re},this.compileAsync=function(C,Y,ne=null){const re=this.compile(C,Y,ne);return new Promise(K=>{function we(){if(re.forEach(function(Ue){ze.get(Ue).currentProgram.isReady()&&re.delete(Ue)}),re.size===0){K(C);return}setTimeout(we,10)}Qe.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let st=null;function Rt(C){st&&st(C)}function St(){gn.stop()}function Un(){gn.start()}const gn=new ku;gn.setAnimationLoop(Rt),typeof self<"u"&&gn.setContext(self),this.setAnimationLoop=function(C){st=C,xe.setAnimationLoop(C),C===null?gn.stop():gn.start()},xe.addEventListener("sessionstart",St),xe.addEventListener("sessionend",Un),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(Y),Y=xe.getCamera()),C.isScene===!0&&C.onBeforeRender(L,C,Y,j),m=ve.get(C,I.length),m.init(Y),I.push(m),_e.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ye.setFromProjectionMatrix(_e,Gn,Y.reversedDepth),le=this.localClippingEnabled,Ke=me.init(this.clippingPlanes,le),y=$.get(C,N.length),y.init(),N.push(y),xe.enabled===!0&&xe.isPresenting===!0){const we=L.xr.getDepthSensingMesh();we!==null&&xr(we,Y,-1/0,L.sortObjects)}xr(C,Y,0,L.sortObjects),y.finish(),L.sortObjects===!0&&y.sort(de,Pe),it=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,it&&Re.addToRenderList(y,C),this.info.render.frame++,Ke===!0&&me.beginShadows();const ne=m.state.shadowsArray;Ie.render(ne,C,Y),Ke===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=y.opaque,K=y.transmissive;if(m.setupLights(),Y.isArrayCamera){const we=Y.cameras;if(K.length>0)for(let Ue=0,Ge=we.length;Ue<Ge;Ue++){const ke=we[Ue];$r(re,K,C,ke)}it&&Re.render(C);for(let Ue=0,Ge=we.length;Ue<Ge;Ue++){const ke=we[Ue];sn(y,C,ke,ke.viewport)}}else K.length>0&&$r(re,K,C,Y),it&&Re.render(C),sn(y,C,Y);j!==null&&z===0&&(tt.updateMultisampleRenderTarget(j),tt.updateRenderTargetMipmap(j)),C.isScene===!0&&C.onAfterRender(L,C,Y),Ce.resetDefaultState(),D=-1,T=null,I.pop(),I.length>0?(m=I[I.length-1],Ke===!0&&me.setGlobalState(L.clippingPlanes,m.state.camera)):m=null,N.pop(),N.length>0?y=N[N.length-1]:y=null};function xr(C,Y,ne,re){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)ne=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ye.intersectsSprite(C)){re&&Te.setFromMatrixPosition(C.matrixWorld).applyMatrix4(_e);const Ue=q.update(C),Ge=C.material;Ge.visible&&y.push(C,Ue,Ge,ne,Te.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ye.intersectsObject(C))){const Ue=q.update(C),Ge=C.material;if(re&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Te.copy(C.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Te.copy(Ue.boundingSphere.center)),Te.applyMatrix4(C.matrixWorld).applyMatrix4(_e)),Array.isArray(Ge)){const ke=Ue.groups;for(let et=0,Ae=ke.length;et<Ae;et++){const qe=ke[et],ut=Ge[qe.materialIndex];ut&&ut.visible&&y.push(C,Ue,ut,ne,Te.z,qe)}}else Ge.visible&&y.push(C,Ue,Ge,ne,Te.z,null)}}const we=C.children;for(let Ue=0,Ge=we.length;Ue<Ge;Ue++)xr(we[Ue],Y,ne,re)}function sn(C,Y,ne,re){const K=C.opaque,we=C.transmissive,Ue=C.transparent;m.setupLightsView(ne),Ke===!0&&me.setGlobalState(L.clippingPlanes,ne),re&&Ve.viewport(H.copy(re)),K.length>0&&$n(K,Y,ne),we.length>0&&$n(we,Y,ne),Ue.length>0&&$n(Ue,Y,ne),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function $r(C,Y,ne,re){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[re.id]===void 0&&(m.state.transmissionRenderTarget[re.id]=new Bi(1,1,{generateMipmaps:!0,type:Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float")?zr:Wn,minFilter:Ni,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const we=m.state.transmissionRenderTarget[re.id],Ue=re.viewport||H;we.setSize(Ue.z*L.transmissionResolutionScale,Ue.w*L.transmissionResolutionScale);const Ge=L.getRenderTarget(),ke=L.getActiveCubeFace(),et=L.getActiveMipmapLevel();L.setRenderTarget(we),L.getClearColor(te),fe=L.getClearAlpha(),fe<1&&L.setClearColor(16777215,.5),L.clear(),it&&Re.render(ne);const Ae=L.toneMapping;L.toneMapping=pi;const qe=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),m.setupLightsView(re),Ke===!0&&me.setGlobalState(L.clippingPlanes,re),$n(C,ne,re),tt.updateMultisampleRenderTarget(we),tt.updateRenderTargetMipmap(we),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let wt=0,Nt=Y.length;wt<Nt;wt++){const Lt=Y[wt],bt=Lt.object,Je=Lt.geometry,Ft=Lt.material,gt=Lt.group;if(Ft.side===Pn&&bt.layers.test(re.layers)){const Zt=Ft.side;Ft.side=cn,Ft.needsUpdate=!0,gi(bt,ne,re,Je,Ft,gt),Ft.side=Zt,Ft.needsUpdate=!0,ut=!0}}ut===!0&&(tt.updateMultisampleRenderTarget(we),tt.updateRenderTargetMipmap(we))}L.setRenderTarget(Ge,ke,et),L.setClearColor(te,fe),qe!==void 0&&(re.viewport=qe),L.toneMapping=Ae}function $n(C,Y,ne){const re=Y.isScene===!0?Y.overrideMaterial:null;for(let K=0,we=C.length;K<we;K++){const Ue=C[K],Ge=Ue.object,ke=Ue.geometry,et=Ue.group;let Ae=Ue.material;Ae.allowOverride===!0&&re!==null&&(Ae=re),Ge.layers.test(ne.layers)&&gi(Ge,Y,ne,ke,Ae,et)}}function gi(C,Y,ne,re,K,we){C.onBeforeRender(L,Y,ne,re,K,we),C.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(L,Y,ne,re,C,we),K.transparent===!0&&K.side===Pn&&K.forceSinglePass===!1?(K.side=cn,K.needsUpdate=!0,L.renderBufferDirect(ne,Y,re,K,C,we),K.side=mi,K.needsUpdate=!0,L.renderBufferDirect(ne,Y,re,K,C,we),K.side=Pn):L.renderBufferDirect(ne,Y,re,K,C,we),C.onAfterRender(L,Y,ne,re,K,we)}function vi(C,Y,ne){Y.isScene!==!0&&(Y=We);const re=ze.get(C),K=m.state.lights,we=m.state.shadowsArray,Ue=K.state.version,Ge=B.getParameters(C,K.state,we,Y,ne),ke=B.getProgramCacheKey(Ge);let et=re.programs;re.environment=C.isMeshStandardMaterial?Y.environment:null,re.fog=Y.fog,re.envMap=(C.isMeshStandardMaterial?Et:At).get(C.envMap||re.environment),re.envMapRotation=re.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,et===void 0&&(C.addEventListener("dispose",V),et=new Map,re.programs=et);let Ae=et.get(ke);if(Ae!==void 0){if(re.currentProgram===Ae&&re.lightsStateVersion===Ue)return jr(C,Ge),Ae}else Ge.uniforms=B.getUniforms(C),C.onBeforeCompile(Ge,L),Ae=B.acquireProgram(Ge,ke),et.set(ke,Ae),re.uniforms=Ge.uniforms;const qe=re.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(qe.clippingPlanes=me.uniform),jr(C,Ge),re.needsLights=to(C),re.lightsStateVersion=Ue,re.needsLights&&(qe.ambientLightColor.value=K.state.ambient,qe.lightProbe.value=K.state.probe,qe.directionalLights.value=K.state.directional,qe.directionalLightShadows.value=K.state.directionalShadow,qe.spotLights.value=K.state.spot,qe.spotLightShadows.value=K.state.spotShadow,qe.rectAreaLights.value=K.state.rectArea,qe.ltc_1.value=K.state.rectAreaLTC1,qe.ltc_2.value=K.state.rectAreaLTC2,qe.pointLights.value=K.state.point,qe.pointLightShadows.value=K.state.pointShadow,qe.hemisphereLights.value=K.state.hemi,qe.directionalShadowMap.value=K.state.directionalShadowMap,qe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,qe.spotShadowMap.value=K.state.spotShadowMap,qe.spotLightMatrix.value=K.state.spotLightMatrix,qe.spotLightMap.value=K.state.spotLightMap,qe.pointShadowMap.value=K.state.pointShadowMap,qe.pointShadowMatrix.value=K.state.pointShadowMatrix),re.currentProgram=Ae,re.uniformsList=null,Ae}function qr(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=Xs.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function jr(C,Y){const ne=ze.get(C);ne.outputColorSpace=Y.outputColorSpace,ne.batching=Y.batching,ne.batchingColor=Y.batchingColor,ne.instancing=Y.instancing,ne.instancingColor=Y.instancingColor,ne.instancingMorph=Y.instancingMorph,ne.skinning=Y.skinning,ne.morphTargets=Y.morphTargets,ne.morphNormals=Y.morphNormals,ne.morphColors=Y.morphColors,ne.morphTargetsCount=Y.morphTargetsCount,ne.numClippingPlanes=Y.numClippingPlanes,ne.numIntersection=Y.numClipIntersection,ne.vertexAlphas=Y.vertexAlphas,ne.vertexTangents=Y.vertexTangents,ne.toneMapping=Y.toneMapping}function Yr(C,Y,ne,re,K){Y.isScene!==!0&&(Y=We),tt.resetTextureUnits();const we=Y.fog,Ue=re.isMeshStandardMaterial?Y.environment:null,Ge=j===null?L.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:mr,ke=(re.isMeshStandardMaterial?Et:At).get(re.envMap||Ue),et=re.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Ae=!!ne.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),qe=!!ne.morphAttributes.position,ut=!!ne.morphAttributes.normal,wt=!!ne.morphAttributes.color;let Nt=pi;re.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Nt=L.toneMapping);const Lt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,bt=Lt!==void 0?Lt.length:0,Je=ze.get(re),Ft=m.state.lights;if(Ke===!0&&(le===!0||C!==T)){const Kt=C===T&&re.id===D;me.setState(re,C,Kt)}let gt=!1;re.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Ft.state.version||Je.outputColorSpace!==Ge||K.isBatchedMesh&&Je.batching===!1||!K.isBatchedMesh&&Je.batching===!0||K.isBatchedMesh&&Je.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Je.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Je.instancing===!1||!K.isInstancedMesh&&Je.instancing===!0||K.isSkinnedMesh&&Je.skinning===!1||!K.isSkinnedMesh&&Je.skinning===!0||K.isInstancedMesh&&Je.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Je.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Je.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Je.instancingMorph===!1&&K.morphTexture!==null||Je.envMap!==ke||re.fog===!0&&Je.fog!==we||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==me.numPlanes||Je.numIntersection!==me.numIntersection)||Je.vertexAlphas!==et||Je.vertexTangents!==Ae||Je.morphTargets!==qe||Je.morphNormals!==ut||Je.morphColors!==wt||Je.toneMapping!==Nt||Je.morphTargetsCount!==bt)&&(gt=!0):(gt=!0,Je.__version=re.version);let Zt=Je.currentProgram;gt===!0&&(Zt=vi(re,Y,K));let S=!1,ht=!1,xi=!1;const Ct=Zt.getUniforms(),Vt=Je.uniforms;if(Ve.useProgram(Zt.program)&&(S=!0,ht=!0,xi=!0),re.id!==D&&(D=re.id,ht=!0),S||T!==C){Ve.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ct.setValue(k,"projectionMatrix",C.projectionMatrix),Ct.setValue(k,"viewMatrix",C.matrixWorldInverse);const Jt=Ct.map.cameraPosition;Jt!==void 0&&Jt.setValue(k,ue.setFromMatrixPosition(C.matrixWorld)),$e.logarithmicDepthBuffer&&Ct.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Ct.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),T!==C&&(T=C,ht=!0,xi=!0)}if(K.isSkinnedMesh){Ct.setOptional(k,K,"bindMatrix"),Ct.setOptional(k,K,"bindMatrixInverse");const Kt=K.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),Ct.setValue(k,"boneTexture",Kt.boneTexture,tt))}K.isBatchedMesh&&(Ct.setOptional(k,K,"batchingTexture"),Ct.setValue(k,"batchingTexture",K._matricesTexture,tt),Ct.setOptional(k,K,"batchingIdTexture"),Ct.setValue(k,"batchingIdTexture",K._indirectTexture,tt),Ct.setOptional(k,K,"batchingColorTexture"),K._colorsTexture!==null&&Ct.setValue(k,"batchingColorTexture",K._colorsTexture,tt));const on=ne.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&pe.update(K,ne,Zt),(ht||Je.receiveShadow!==K.receiveShadow)&&(Je.receiveShadow=K.receiveShadow,Ct.setValue(k,"receiveShadow",K.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Vt.envMap.value=ke,Vt.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&Y.environment!==null&&(Vt.envMapIntensity.value=Y.environmentIntensity),ht&&(Ct.setValue(k,"toneMappingExposure",L.toneMappingExposure),Je.needsLights&&eo(Vt,xi),we&&re.fog===!0&&Q.refreshFogUniforms(Vt,we),Q.refreshMaterialUniforms(Vt,re,se,ye,m.state.transmissionRenderTarget[C.id]),Xs.upload(k,qr(Je),Vt,tt)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Xs.upload(k,qr(Je),Vt,tt),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Ct.setValue(k,"center",K.center),Ct.setValue(k,"modelViewMatrix",K.modelViewMatrix),Ct.setValue(k,"normalMatrix",K.normalMatrix),Ct.setValue(k,"modelMatrix",K.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const Kt=re.uniformsGroups;for(let Jt=0,yr=Kt.length;Jt<yr;Jt++){const qn=Kt[Jt];Ze.update(qn,Zt),Ze.bind(qn,Zt)}}return Zt}function eo(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function to(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(C,Y,ne){const re=ze.get(C);re.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),ze.get(C.texture).__webglTexture=Y,ze.get(C.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ne,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){const ne=ze.get(C);ne.__webglFramebuffer=Y,ne.__useDefaultFramebuffer=Y===void 0};const no=k.createFramebuffer();this.setRenderTarget=function(C,Y=0,ne=0){j=C,P=Y,z=ne;let re=!0,K=null,we=!1,Ue=!1;if(C){const ke=ze.get(C);if(ke.__useDefaultFramebuffer!==void 0)Ve.bindFramebuffer(k.FRAMEBUFFER,null),re=!1;else if(ke.__webglFramebuffer===void 0)tt.setupRenderTarget(C);else if(ke.__hasExternalTextures)tt.rebindTextures(C,ze.get(C.texture).__webglTexture,ze.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const qe=C.depthTexture;if(ke.__boundDepthTexture!==qe){if(qe!==null&&ze.has(qe)&&(C.width!==qe.image.width||C.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(C)}}const et=C.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ue=!0);const Ae=ze.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ae[Y])?K=Ae[Y][ne]:K=Ae[Y],we=!0):C.samples>0&&tt.useMultisampledRTT(C)===!1?K=ze.get(C).__webglMultisampledFramebuffer:Array.isArray(Ae)?K=Ae[ne]:K=Ae,H.copy(C.viewport),Z.copy(C.scissor),ie=C.scissorTest}else H.copy(He).multiplyScalar(se).floor(),Z.copy(Be).multiplyScalar(se).floor(),ie=je;if(ne!==0&&(K=no),Ve.bindFramebuffer(k.FRAMEBUFFER,K)&&re&&Ve.drawBuffers(C,K),Ve.viewport(H),Ve.scissor(Z),Ve.setScissorTest(ie),we){const ke=ze.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ke.__webglTexture,ne)}else if(Ue){const ke=Y;for(let et=0;et<C.textures.length;et++){const Ae=ze.get(C.textures[et]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+et,Ae.__webglTexture,ne,ke)}}else if(C!==null&&ne!==0){const ke=ze.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ke.__webglTexture,ne)}D=-1},this.readRenderTargetPixels=function(C,Y,ne,re,K,we,Ue,Ge=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(ke=ke[Ue]),ke){Ve.bindFramebuffer(k.FRAMEBUFFER,ke);try{const et=C.textures[Ge],Ae=et.format,qe=et.type;if(!$e.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-re&&ne>=0&&ne<=C.height-K&&(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ge),k.readPixels(Y,ne,re,K,De.convert(Ae),De.convert(qe),we))}finally{const et=j!==null?ze.get(j).__webglFramebuffer:null;Ve.bindFramebuffer(k.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(C,Y,ne,re,K,we,Ue,Ge=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(ke=ke[Ue]),ke)if(Y>=0&&Y<=C.width-re&&ne>=0&&ne<=C.height-K){Ve.bindFramebuffer(k.FRAMEBUFFER,ke);const et=C.textures[Ge],Ae=et.format,qe=et.type;if(!$e.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ut),k.bufferData(k.PIXEL_PACK_BUFFER,we.byteLength,k.STREAM_READ),C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ge),k.readPixels(Y,ne,re,K,De.convert(Ae),De.convert(qe),0);const wt=j!==null?ze.get(j).__webglFramebuffer:null;Ve.bindFramebuffer(k.FRAMEBUFFER,wt);const Nt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await eg(k,Nt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ut),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,we),k.deleteBuffer(ut),k.deleteSync(Nt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,ne=0){const re=Math.pow(2,-ne),K=Math.floor(C.image.width*re),we=Math.floor(C.image.height*re),Ue=Y!==null?Y.x:0,Ge=Y!==null?Y.y:0;tt.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,ne,0,0,Ue,Ge,K,we),Ve.unbindTexture()};const io=k.createFramebuffer(),Tt=k.createFramebuffer();this.copyTextureToTexture=function(C,Y,ne=null,re=null,K=0,we=null){we===null&&(K!==0?(Br("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=K,K=0):we=0);let Ue,Ge,ke,et,Ae,qe,ut,wt,Nt;const Lt=C.isCompressedTexture?C.mipmaps[we]:C.image;if(ne!==null)Ue=ne.max.x-ne.min.x,Ge=ne.max.y-ne.min.y,ke=ne.isBox3?ne.max.z-ne.min.z:1,et=ne.min.x,Ae=ne.min.y,qe=ne.isBox3?ne.min.z:0;else{const on=Math.pow(2,-K);Ue=Math.floor(Lt.width*on),Ge=Math.floor(Lt.height*on),C.isDataArrayTexture?ke=Lt.depth:C.isData3DTexture?ke=Math.floor(Lt.depth*on):ke=1,et=0,Ae=0,qe=0}re!==null?(ut=re.x,wt=re.y,Nt=re.z):(ut=0,wt=0,Nt=0);const bt=De.convert(Y.format),Je=De.convert(Y.type);let Ft;Y.isData3DTexture?(tt.setTexture3D(Y,0),Ft=k.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(tt.setTexture2DArray(Y,0),Ft=k.TEXTURE_2D_ARRAY):(tt.setTexture2D(Y,0),Ft=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment);const gt=k.getParameter(k.UNPACK_ROW_LENGTH),Zt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),S=k.getParameter(k.UNPACK_SKIP_PIXELS),ht=k.getParameter(k.UNPACK_SKIP_ROWS),xi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Lt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Lt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,et),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ae),k.pixelStorei(k.UNPACK_SKIP_IMAGES,qe);const Ct=C.isDataArrayTexture||C.isData3DTexture,Vt=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){const on=ze.get(C),Kt=ze.get(Y),Jt=ze.get(on.__renderTarget),yr=ze.get(Kt.__renderTarget);Ve.bindFramebuffer(k.READ_FRAMEBUFFER,Jt.__webglFramebuffer),Ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,yr.__webglFramebuffer);for(let qn=0;qn<ke;qn++)Ct&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ze.get(C).__webglTexture,K,qe+qn),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ze.get(Y).__webglTexture,we,Nt+qn)),k.blitFramebuffer(et,Ae,Ue,Ge,ut,wt,Ue,Ge,k.DEPTH_BUFFER_BIT,k.NEAREST);Ve.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(K!==0||C.isRenderTargetTexture||ze.has(C)){const on=ze.get(C),Kt=ze.get(Y);Ve.bindFramebuffer(k.READ_FRAMEBUFFER,io),Ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,Tt);for(let Jt=0;Jt<ke;Jt++)Ct?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,on.__webglTexture,K,qe+Jt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,on.__webglTexture,K),Vt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Kt.__webglTexture,we,Nt+Jt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Kt.__webglTexture,we),K!==0?k.blitFramebuffer(et,Ae,Ue,Ge,ut,wt,Ue,Ge,k.COLOR_BUFFER_BIT,k.NEAREST):Vt?k.copyTexSubImage3D(Ft,we,ut,wt,Nt+Jt,et,Ae,Ue,Ge):k.copyTexSubImage2D(Ft,we,ut,wt,et,Ae,Ue,Ge);Ve.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Vt?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(Ft,we,ut,wt,Nt,Ue,Ge,ke,bt,Je,Lt.data):Y.isCompressedArrayTexture?k.compressedTexSubImage3D(Ft,we,ut,wt,Nt,Ue,Ge,ke,bt,Lt.data):k.texSubImage3D(Ft,we,ut,wt,Nt,Ue,Ge,ke,bt,Je,Lt):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,we,ut,wt,Ue,Ge,bt,Je,Lt.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,we,ut,wt,Lt.width,Lt.height,bt,Lt.data):k.texSubImage2D(k.TEXTURE_2D,we,ut,wt,Ue,Ge,bt,Je,Lt);k.pixelStorei(k.UNPACK_ROW_LENGTH,gt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Zt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,S),k.pixelStorei(k.UNPACK_SKIP_ROWS,ht),k.pixelStorei(k.UNPACK_SKIP_IMAGES,xi),we===0&&Y.generateMipmaps&&k.generateMipmap(Ft),Ve.unbindTexture()},this.initRenderTarget=function(C){ze.get(C).__webglFramebuffer===void 0&&tt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?tt.setTextureCube(C,0):C.isData3DTexture?tt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?tt.setTexture2DArray(C,0):tt.setTexture2D(C,0),Ve.unbindTexture()},this.resetState=function(){P=0,z=0,j=null,Ve.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}const ou={type:"change"},hl={type:"start"},Gu={type:"end"},Ns=new ol,au=new hi,ME=Math.cos(70*J_.DEG2RAD),Xt=new ee,ln=2*Math.PI,Dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Zo=1e-6;class TE extends Bg{constructor(e,t=null){super(e,t),this.state=Dt.NONE,this.target=new ee,this.cursor=new ee,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:cr.ROTATE,MIDDLE:cr.DOLLY,RIGHT:cr.PAN},this.touches={ONE:or.ROTATE,TWO:or.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new ee,this._lastQuaternion=new ki,this._lastTargetPosition=new ee,this._quat=new ki().setFromUnitVectors(e.up,new ee(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ic,this._sphericalDelta=new Ic,this._scale=1,this._panOffset=new ee,this._rotateStart=new rt,this._rotateEnd=new rt,this._rotateDelta=new rt,this._panStart=new rt,this._panEnd=new rt,this._panDelta=new rt,this._dollyStart=new rt,this._dollyEnd=new rt,this._dollyDelta=new rt,this._dollyDirection=new ee,this._mouse=new rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=bE.bind(this),this._onPointerDown=wE.bind(this),this._onPointerUp=AE.bind(this),this._onContextMenu=IE.bind(this),this._onMouseWheel=PE.bind(this),this._onKeyDown=DE.bind(this),this._onTouchStart=LE.bind(this),this._onTouchMove=FE.bind(this),this._onMouseDown=RE.bind(this),this._onMouseMove=CE.bind(this),this._interceptControlDown=UE.bind(this),this._interceptControlUp=NE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ou),this.update(),this.state=Dt.NONE}update(e=null){const t=this.object.position;Xt.copy(t).sub(this.target),Xt.applyQuaternion(this._quat),this._spherical.setFromVector3(Xt),this.autoRotate&&this.state===Dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(n)&&isFinite(o)&&(n<-Math.PI?n+=ln:n>Math.PI&&(n-=ln),o<-Math.PI?o+=ln:o>Math.PI&&(o-=ln),n<=o?this._spherical.theta=Math.max(n,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+o)/2?Math.max(n,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=c!=this._spherical.radius}if(Xt.setFromSpherical(this._spherical),Xt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Xt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const h=Xt.length();c=this._clampDistance(h*this._scale);const p=h-c;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),a=!!p}else if(this.object.isOrthographicCamera){const h=new ee(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=p!==this.object.zoom;const d=new ee(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(h),this.object.updateMatrixWorld(),c=Xt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(Ns.origin.copy(this.object.position),Ns.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ns.direction))<ME?this.object.lookAt(this.target):(au.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ns.intersectPlane(au,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Zo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Zo||this._lastTargetPosition.distanceToSquared(this.target)>Zo?(this.dispatchEvent(ou),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ln/60*this.autoRotateSpeed*e:ln/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Xt.setFromMatrixColumn(t,0),Xt.multiplyScalar(-e),this._panOffset.add(Xt)}_panUp(e,t){this.screenSpacePanning===!0?Xt.setFromMatrixColumn(t,1):(Xt.setFromMatrixColumn(t,0),Xt.crossVectors(this.object.up,Xt)),Xt.multiplyScalar(e),this._panOffset.add(Xt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;Xt.copy(o).sub(this.target);let a=Xt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/n.clientHeight,this.object.matrix),this._panUp(2*t*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),o=e-n.left,a=t-n.top,c=n.width,h=n.height;this._mouse.x=o/c*2-1,this._mouse.y=-(a/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(n,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(n,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(n*n+o*o);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),o=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateEnd.set(o,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(n,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(n*n+o*o);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,h=(e.pageY+t.y)*.5;this._updateZoomParameters(c,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new rt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function wE(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function bE(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function AE(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Gu),this.state=Dt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function RE(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case cr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Dt.DOLLY;break;case cr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Dt.ROTATE}break;case cr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Dt.PAN}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(hl)}function CE(i){switch(this.state){case Dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function PE(i){this.enabled===!1||this.enableZoom===!1||this.state!==Dt.NONE||(i.preventDefault(),this.dispatchEvent(hl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Gu))}function DE(i){this.enabled!==!1&&this._handleKeyDown(i)}function LE(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case or.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Dt.TOUCH_ROTATE;break;case or.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Dt.TOUCH_PAN;break;default:this.state=Dt.NONE}break;case 2:switch(this.touches.TWO){case or.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Dt.TOUCH_DOLLY_PAN;break;case or.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Dt.TOUCH_DOLLY_ROTATE;break;default:this.state=Dt.NONE}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(hl)}function FE(i){switch(this._trackPointer(i),this.state){case Dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Dt.NONE}}function IE(i){this.enabled!==!1&&i.preventDefault()}function UE(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function NE(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const OE="modulepreload",kE=function(i,e){return new URL(i,e).href},lu={},BE=function(e,t,n){let o=Promise.resolve();if(t&&t.length>0){const c=document.getElementsByTagName("link"),h=document.querySelector("meta[property=csp-nonce]"),p=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));o=Promise.allSettled(t.map(d=>{if(d=kE(d,n),d in lu)return;lu[d]=!0;const v=d.endsWith(".css"),_=v?'[rel="stylesheet"]':"";if(!!n)for(let b=c.length-1;b>=0;b--){const R=c[b];if(R.href===d&&(!v||R.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${_}`))return;const E=document.createElement("link");if(E.rel=v?"stylesheet":OE,v||(E.as="script"),E.crossOrigin="",E.href=d,p&&E.setAttribute("nonce",p),document.head.appendChild(E),v)return new Promise((b,R)=>{E.addEventListener("load",b),E.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${d}`)))})}))}function a(c){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=c,window.dispatchEvent(h),!h.defaultPrevented)throw c}return o.then(c=>{for(const h of c||[])h.status==="rejected"&&a(h.reason);return e().catch(a)})};var zE=async function(i={}){var Ql,ec,tc;var e,t=i,n=typeof window=="object",o=typeof WorkerGlobalScope<"u",a=typeof process=="object"&&((Ql=process.versions)==null?void 0:Ql.node)&&process.type!="renderer",c=!n&&!a&&!o;if(a){const{createRequire:r}=await BE(async()=>{const{createRequire:s}=await Promise.resolve().then(()=>mS);return{createRequire:s}},void 0,import.meta.url);var h=r(import.meta.url)}var p="./this.program",d=(r,s)=>{throw s},v=import.meta.url,_="";function x(r){return t.locateFile?t.locateFile(r,_):_+r}var E,b;if(a){if(!(typeof process=="object"&&((ec=process.versions)==null?void 0:ec.node)&&process.type!="renderer"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var R=process.versions.node,y=R.split(".").slice(0,3);if(y=y[0]*1e4+y[1]*100+y[2].split("-")[0]*1,y<16e4)throw new Error("This emscripten-generated code requires node v16.0.0 (detected v"+R+")");var m=h("fs");v.startsWith("file:")&&(_=h("path").dirname(h("url").fileURLToPath(v))+"/"),b=s=>{s=z(s)?new URL(s):s;var l=m.readFileSync(s);return P(Buffer.isBuffer(l)),l},E=async(s,l=!0)=>{s=z(s)?new URL(s):s;var u=m.readFileSync(s,l?void 0:"utf8");return P(l?Buffer.isBuffer(u):typeof u=="string"),u},process.argv.length>1&&(p=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),d=(s,l)=>{throw process.exitCode=s,l}}else if(c){if(typeof process=="object"&&((tc=process.versions)==null?void 0:tc.node)&&process.type!="renderer"||typeof window=="object"||typeof WorkerGlobalScope<"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)")}else if(n||o){try{_=new URL(".",v).href}catch{}if(!(typeof window=="object"||typeof WorkerGlobalScope<"u"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");o&&(b=r=>{var s=new XMLHttpRequest;return s.open("GET",r,!1),s.responseType="arraybuffer",s.send(null),new Uint8Array(s.response)}),E=async r=>{if(z(r))return new Promise((l,u)=>{var f=new XMLHttpRequest;f.open("GET",r,!0),f.responseType="arraybuffer",f.onload=()=>{if(f.status==200||f.status==0&&f.response){l(f.response);return}u(f.status)},f.onerror=u,f.send(null)});var s=await fetch(r,{credentials:"same-origin"});if(s.ok)return s.arrayBuffer();throw new Error(s.status+" : "+s.url)}}else throw new Error("environment detection error");var N=console.log.bind(console),I=console.error.bind(console);P(!c,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");var L;typeof WebAssembly!="object"&&I("no native wasm support detected");var O=!1;function P(r,s){r||q("Assertion failed"+(s?": "+s:""))}var z=r=>r.startsWith("file://");function j(){var r=_o();P((r&3)==0),r==0&&(r+=4),Te[r>>2]=34821223,Te[r+4>>2]=2310721022,Te[0]=1668509029}function D(){if(!O){var r=_o();r==0&&(r+=4);var s=Te[r>>2],l=Te[r+4>>2];(s!=34821223||l!=2310721022)&&q(`Stack overflow! Stack cookie has been overwritten at ${Fe(r)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${Fe(l)} ${Fe(s)}`),Te[0]!=1668509029&&q("Runtime error: The application has corrupted its heap memory area (address zero)!")}}class T extends Error{}class H extends T{}class Z extends T{constructor(s){super(s),this.excPtr=s;const l=Bl(s);this.name=l[0],this.message=l[1]}}(()=>{var r=new Int16Array(1),s=new Int8Array(r.buffer);if(r[0]=25459,s[0]!==115||s[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();function ie(r){Object.getOwnPropertyDescriptor(t,r)||Object.defineProperty(t,r,{configurable:!0,set(){q(`Attempt to set \`Module.${r}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function te(r){return()=>P(!1,`call to '${r}' via reference taken before Wasm module initialization`)}function fe(r){Object.getOwnPropertyDescriptor(t,r)&&q(`\`Module.${r}\` was supplied but \`${r}\` not included in INCOMING_MODULE_JS_API`)}function oe(r){return r==="FS_createPath"||r==="FS_createDataFile"||r==="FS_createPreloadedFile"||r==="FS_unlink"||r==="addRunDependency"||r==="FS_createLazyFile"||r==="FS_createDevice"||r==="removeRunDependency"}function ye(r,s){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,r)&&Object.defineProperty(globalThis,r,{configurable:!0,get(){s()}})}function se(r,s){ye(r,()=>{Oe(`\`${r}\` is not longer defined by emscripten. ${s}`)})}se("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),se("asm","Please use wasmExports instead");function de(r){ye(r,()=>{var s=`\`${r}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,l=r;l.startsWith("_")||(l="$"+r),s+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${l}')`,oe(r)&&(s+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Oe(s)}),Pe(r)}function Pe(r){Object.getOwnPropertyDescriptor(t,r)||Object.defineProperty(t,r,{configurable:!0,get(){var s=`'${r}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;oe(r)&&(s+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),q(s)}})}var He,Be,je,Ye,Ke,le,_e,ue,Te,We,it,vt,k,xt=!1;function Qe(){var r=je.buffer;Ye=new Int8Array(r),le=new Int16Array(r),Ke=new Uint8Array(r),_e=new Uint16Array(r),ue=new Int32Array(r),Te=new Uint32Array(r),We=new Float32Array(r),it=new Float64Array(r),vt=new BigInt64Array(r),k=new BigUint64Array(r)}P(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support");function $e(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)xe(t.preRun.shift());ie("preRun"),De(G)}function Ve(){P(!xt),xt=!0,D(),!t.noFSInit&&!S.initialized&&S.init(),Ti.__wasm_call_ctors(),S.ignorePermissions=!1}function _t(){if(D(),t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)Ze(t.postRun.shift());ie("postRun"),De(Ce)}var ze=0,tt=null,At={},Et=null;function U(r){var s;ze++,(s=t.monitorRunDependencies)==null||s.call(t,ze),r?(P(!At[r]),At[r]=1,Et===null&&typeof setInterval<"u"&&(Et=setInterval(()=>{if(O){clearInterval(Et),Et=null;return}var l=!1;for(var u in At)l||(l=!0,I("still waiting on run dependencies:")),I(`dependency: ${u}`);l&&I("(end of list)")},1e4))):I("warning: run dependency added without ID")}function A(r){var l;if(ze--,(l=t.monitorRunDependencies)==null||l.call(t,ze),r?(P(At[r]),delete At[r]):I("warning: run dependency removed without ID"),ze==0&&(Et!==null&&(clearInterval(Et),Et=null),tt)){var s=tt;tt=null,s()}}function q(r){var l;(l=t.onAbort)==null||l.call(t,r),r="Aborted("+r+")",I(r),O=!0;var s=new WebAssembly.RuntimeError(r);throw Be==null||Be(s),s}function B(r,s){return(...l)=>{P(xt,`native function \`${r}\` called before runtime initialization`);var u=Ti[r];return P(u,`exported native function \`${r}\` not found`),P(l.length<=s,`native function \`${r}\` called with ${l.length} args but expects ${s}`),u(...l)}}var Q;function $(){return t.locateFile?x("mujoco.wasm"):new URL(""+new URL("mujoco-CGsuVDfV.wasm",import.meta.url).href,import.meta.url).href}function ve(r){if(r==Q&&L)return new Uint8Array(L);if(b)return b(r);throw"both async and sync fetching of the wasm failed"}async function me(r){if(!L)try{var s=await E(r);return new Uint8Array(s)}catch{}return ve(r)}async function Ie(r,s){try{var l=await me(r),u=await WebAssembly.instantiate(l,s);return u}catch(f){I(`failed to asynchronously prepare wasm: ${f}`),z(Q)&&I(`warning: Loading from a file URI (${Q}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),q(f)}}async function Re(r,s,l){if(!r&&typeof WebAssembly.instantiateStreaming=="function"&&!z(s)&&!a)try{var u=fetch(s,{credentials:"same-origin"}),f=await WebAssembly.instantiateStreaming(u,l);return f}catch(g){I(`wasm streaming compile failed: ${g}`),I("falling back to ArrayBuffer instantiation")}return Ie(s,l)}function pe(){return{env:Zl,wasi_snapshot_preview1:Zl}}async function he(){function r(M,w){return Ti=M.exports,je=Ti.memory,P(je,"memory not found in wasm exports"),Qe(),rs=Ti.__indirect_function_table,P(rs,"table not found in wasm exports"),od(Ti),A("wasm-instantiate"),Ti}U("wasm-instantiate");var s=t;function l(M){return P(t===s,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),s=null,r(M.instance)}var u=pe();if(t.instantiateWasm)return new Promise((M,w)=>{try{t.instantiateWasm(u,(F,X)=>{M(r(F,X))})}catch(F){I(`Module.instantiateWasm callback failed with error: ${F}`),w(F)}});Q??(Q=$());var f=await Re(L,Q,u),g=l(f);return g}class Le{constructor(s){wn(this,"name","ExitStatus");this.message=`Program terminated with exit(${s})`,this.status=s}}var De=r=>{for(;r.length>0;)r.shift()(t)},Ce=[],Ze=r=>Ce.push(r),G=[],xe=r=>G.push(r),be=!0,Fe=r=>(P(typeof r=="number"),r>>>=0,"0x"+r.toString(16).padStart(8,"0")),W=r=>Xl(r),V=()=>ql(),Oe=r=>{Oe.shown||(Oe.shown={}),Oe.shown[r]||(Oe.shown[r]=1,a&&(r="warning: "+r),I(r))},nt=typeof TextDecoder<"u"?new TextDecoder:void 0,pt=(r,s=0,l=NaN)=>{for(var u=s+l,f=s;r[f]&&!(f>=u);)++f;if(f-s>16&&r.buffer&&nt)return nt.decode(r.subarray(s,f));for(var g="";s<f;){var M=r[s++];if(!(M&128)){g+=String.fromCharCode(M);continue}var w=r[s++]&63;if((M&224)==192){g+=String.fromCharCode((M&31)<<6|w);continue}var F=r[s++]&63;if((M&240)==224?M=(M&15)<<12|w<<6|F:((M&248)!=240&&Oe("Invalid UTF-8 leading byte "+Fe(M)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),M=(M&7)<<18|w<<12|F<<6|r[s++]&63),M<65536)g+=String.fromCharCode(M);else{var X=M-65536;g+=String.fromCharCode(55296|X>>10,56320|X&1023)}}return g},st=(r,s)=>(P(typeof r=="number",`UTF8ToString expects a number (got ${typeof r})`),r?pt(Ke,r,s):""),Rt=(r,s,l,u)=>q(`Assertion failed: ${st(r)}, at: `+[s?st(s):"unknown filename",l,u?st(u):"unknown function"]),St=[],Un=0,gn=r=>{var s=new $n(r);return s.get_caught()||(s.set_caught(!0),Un--),s.set_rethrown(!1),St.push(s),us(r),Kl(r)},xr=()=>{if(!St.length)return 0;var r=St[St.length-1];return us(r.excPtr),r.excPtr},sn=0,$r=()=>{Ee(0,0),P(St.length>0);var r=St.pop();go(r.excPtr),sn=0};class $n{constructor(s){this.excPtr=s,this.ptr=s-24}set_type(s){Te[this.ptr+4>>2]=s}get_type(){return Te[this.ptr+4>>2]}set_destructor(s){Te[this.ptr+8>>2]=s}get_destructor(){return Te[this.ptr+8>>2]}set_caught(s){s=s?1:0,Ye[this.ptr+12]=s}get_caught(){return Ye[this.ptr+12]!=0}set_rethrown(s){s=s?1:0,Ye[this.ptr+13]=s}get_rethrown(){return Ye[this.ptr+13]!=0}init(s,l){this.set_adjusted_ptr(0),this.set_type(s),this.set_destructor(l)}set_adjusted_ptr(s){Te[this.ptr+16>>2]=s}get_adjusted_ptr(){return Te[this.ptr+16>>2]}}var gi=r=>Gl(r),vi=r=>{var s=sn==null?void 0:sn.excPtr;if(!s)return gi(0),0;var l=new $n(s);l.set_adjusted_ptr(s);var u=l.get_type();if(!u)return gi(0),s;for(var f of r){if(f===0||f===u)break;var g=l.ptr+16;if(Yl(f,u,g))return gi(f),s}return gi(u),s},qr=()=>vi([]),jr=r=>vi([r]),Yr=()=>{var r=St.pop();r||q("no exception to throw");var s=r.excPtr;throw r.get_rethrown()||(St.push(r),r.set_rethrown(!0),r.set_caught(!1),Un++),sn=new Z(s),sn},eo=r=>{if(r){var s=new $n(r);St.push(s),s.set_rethrown(!0),Yr()}},to=(r,s,l)=>{var u=new $n(r);throw u.init(s,l),sn=new Z(r),Un++,sn},no=()=>Un,io=r=>{throw sn||(sn=new Z(r)),sn},Tt={isAbs:r=>r.charAt(0)==="/",splitPath:r=>{var s=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return s.exec(r).slice(1)},normalizeArray:(r,s)=>{for(var l=0,u=r.length-1;u>=0;u--){var f=r[u];f==="."?r.splice(u,1):f===".."?(r.splice(u,1),l++):l&&(r.splice(u,1),l--)}if(s)for(;l;l--)r.unshift("..");return r},normalize:r=>{var s=Tt.isAbs(r),l=r.slice(-1)==="/";return r=Tt.normalizeArray(r.split("/").filter(u=>!!u),!s).join("/"),!r&&!s&&(r="."),r&&l&&(r+="/"),(s?"/":"")+r},dirname:r=>{var s=Tt.splitPath(r),l=s[0],u=s[1];return!l&&!u?".":(u&&(u=u.slice(0,-1)),l+u)},basename:r=>r&&r.match(/([^\/]+|\/)\/*$/)[1],join:(...r)=>Tt.normalize(r.join("/")),join2:(r,s)=>Tt.normalize(r+"/"+s)},C=()=>{if(a){var r=h("crypto");return s=>r.randomFillSync(s)}return s=>crypto.getRandomValues(s)},Y=r=>{(Y=C())(r)},ne={resolve:(...r)=>{for(var s="",l=!1,u=r.length-1;u>=-1&&!l;u--){var f=u>=0?r[u]:S.cwd();if(typeof f!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!f)return"";s=f+"/"+s,l=Tt.isAbs(f)}return s=Tt.normalizeArray(s.split("/").filter(g=>!!g),!l).join("/"),(l?"/":"")+s||"."},relative:(r,s)=>{r=ne.resolve(r).slice(1),s=ne.resolve(s).slice(1);function l(X){for(var J=0;J<X.length&&X[J]==="";J++);for(var ae=X.length-1;ae>=0&&X[ae]==="";ae--);return J>ae?[]:X.slice(J,ae-J+1)}for(var u=l(r.split("/")),f=l(s.split("/")),g=Math.min(u.length,f.length),M=g,w=0;w<g;w++)if(u[w]!==f[w]){M=w;break}for(var F=[],w=M;w<u.length;w++)F.push("..");return F=F.concat(f.slice(M)),F.join("/")}},re=[],K=r=>{for(var s=0,l=0;l<r.length;++l){var u=r.charCodeAt(l);u<=127?s++:u<=2047?s+=2:u>=55296&&u<=57343?(s+=4,++l):s+=3}return s},we=(r,s,l,u)=>{if(P(typeof r=="string",`stringToUTF8Array expects a string (got ${typeof r})`),!(u>0))return 0;for(var f=l,g=l+u-1,M=0;M<r.length;++M){var w=r.codePointAt(M);if(w<=127){if(l>=g)break;s[l++]=w}else if(w<=2047){if(l+1>=g)break;s[l++]=192|w>>6,s[l++]=128|w&63}else if(w<=65535){if(l+2>=g)break;s[l++]=224|w>>12,s[l++]=128|w>>6&63,s[l++]=128|w&63}else{if(l+3>=g)break;w>1114111&&Oe("Invalid Unicode code point "+Fe(w)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),s[l++]=240|w>>18,s[l++]=128|w>>12&63,s[l++]=128|w>>6&63,s[l++]=128|w&63,M++}}return s[l]=0,l-f},Ue=(r,s,l)=>{var u=K(r)+1,f=new Array(u),g=we(r,f,0,f.length);return f.length=g,f},Ge=()=>{if(!re.length){var r=null;if(a){var s=256,l=Buffer.alloc(s),u=0,f=process.stdin.fd;try{u=m.readSync(f,l,0,s)}catch(g){if(g.toString().includes("EOF"))u=0;else throw g}u>0&&(r=l.slice(0,u).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(r=window.prompt("Input: "),r!==null&&(r+=`
`));if(!r)return null;re=Ue(r)}return re.shift()},ke={ttys:[],init(){},shutdown(){},register(r,s){ke.ttys[r]={input:[],output:[],ops:s},S.registerDevice(r,ke.stream_ops)},stream_ops:{open(r){var s=ke.ttys[r.node.rdev];if(!s)throw new S.ErrnoError(43);r.tty=s,r.seekable=!1},close(r){r.tty.ops.fsync(r.tty)},fsync(r){r.tty.ops.fsync(r.tty)},read(r,s,l,u,f){if(!r.tty||!r.tty.ops.get_char)throw new S.ErrnoError(60);for(var g=0,M=0;M<u;M++){var w;try{w=r.tty.ops.get_char(r.tty)}catch{throw new S.ErrnoError(29)}if(w===void 0&&g===0)throw new S.ErrnoError(6);if(w==null)break;g++,s[l+M]=w}return g&&(r.node.atime=Date.now()),g},write(r,s,l,u,f){if(!r.tty||!r.tty.ops.put_char)throw new S.ErrnoError(60);try{for(var g=0;g<u;g++)r.tty.ops.put_char(r.tty,s[l+g])}catch{throw new S.ErrnoError(29)}return u&&(r.node.mtime=r.node.ctime=Date.now()),g}},default_tty_ops:{get_char(r){return Ge()},put_char(r,s){s===null||s===10?(N(pt(r.output)),r.output=[]):s!=0&&r.output.push(s)},fsync(r){var s;((s=r.output)==null?void 0:s.length)>0&&(N(pt(r.output)),r.output=[])},ioctl_tcgets(r){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(r,s,l){return 0},ioctl_tiocgwinsz(r){return[24,80]}},default_tty1_ops:{put_char(r,s){s===null||s===10?(I(pt(r.output)),r.output=[]):s!=0&&r.output.push(s)},fsync(r){var s;((s=r.output)==null?void 0:s.length)>0&&(I(pt(r.output)),r.output=[])}}},et=r=>{q("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")},Ae={ops_table:null,mount(r){return Ae.createNode(null,"/",16895,0)},createNode(r,s,l,u){if(S.isBlkdev(l)||S.isFIFO(l))throw new S.ErrnoError(63);Ae.ops_table||(Ae.ops_table={dir:{node:{getattr:Ae.node_ops.getattr,setattr:Ae.node_ops.setattr,lookup:Ae.node_ops.lookup,mknod:Ae.node_ops.mknod,rename:Ae.node_ops.rename,unlink:Ae.node_ops.unlink,rmdir:Ae.node_ops.rmdir,readdir:Ae.node_ops.readdir,symlink:Ae.node_ops.symlink},stream:{llseek:Ae.stream_ops.llseek}},file:{node:{getattr:Ae.node_ops.getattr,setattr:Ae.node_ops.setattr},stream:{llseek:Ae.stream_ops.llseek,read:Ae.stream_ops.read,write:Ae.stream_ops.write,mmap:Ae.stream_ops.mmap,msync:Ae.stream_ops.msync}},link:{node:{getattr:Ae.node_ops.getattr,setattr:Ae.node_ops.setattr,readlink:Ae.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Ae.node_ops.getattr,setattr:Ae.node_ops.setattr},stream:S.chrdev_stream_ops}});var f=S.createNode(r,s,l,u);return S.isDir(f.mode)?(f.node_ops=Ae.ops_table.dir.node,f.stream_ops=Ae.ops_table.dir.stream,f.contents={}):S.isFile(f.mode)?(f.node_ops=Ae.ops_table.file.node,f.stream_ops=Ae.ops_table.file.stream,f.usedBytes=0,f.contents=null):S.isLink(f.mode)?(f.node_ops=Ae.ops_table.link.node,f.stream_ops=Ae.ops_table.link.stream):S.isChrdev(f.mode)&&(f.node_ops=Ae.ops_table.chrdev.node,f.stream_ops=Ae.ops_table.chrdev.stream),f.atime=f.mtime=f.ctime=Date.now(),r&&(r.contents[s]=f,r.atime=r.mtime=r.ctime=f.atime),f},getFileDataAsTypedArray(r){return r.contents?r.contents.subarray?r.contents.subarray(0,r.usedBytes):new Uint8Array(r.contents):new Uint8Array(0)},expandFileStorage(r,s){var l=r.contents?r.contents.length:0;if(!(l>=s)){var u=1024*1024;s=Math.max(s,l*(l<u?2:1.125)>>>0),l!=0&&(s=Math.max(s,256));var f=r.contents;r.contents=new Uint8Array(s),r.usedBytes>0&&r.contents.set(f.subarray(0,r.usedBytes),0)}},resizeFileStorage(r,s){if(r.usedBytes!=s)if(s==0)r.contents=null,r.usedBytes=0;else{var l=r.contents;r.contents=new Uint8Array(s),l&&r.contents.set(l.subarray(0,Math.min(s,r.usedBytes))),r.usedBytes=s}},node_ops:{getattr(r){var s={};return s.dev=S.isChrdev(r.mode)?r.id:1,s.ino=r.id,s.mode=r.mode,s.nlink=1,s.uid=0,s.gid=0,s.rdev=r.rdev,S.isDir(r.mode)?s.size=4096:S.isFile(r.mode)?s.size=r.usedBytes:S.isLink(r.mode)?s.size=r.link.length:s.size=0,s.atime=new Date(r.atime),s.mtime=new Date(r.mtime),s.ctime=new Date(r.ctime),s.blksize=4096,s.blocks=Math.ceil(s.size/s.blksize),s},setattr(r,s){for(const l of["mode","atime","mtime","ctime"])s[l]!=null&&(r[l]=s[l]);s.size!==void 0&&Ae.resizeFileStorage(r,s.size)},lookup(r,s){throw new S.ErrnoError(44)},mknod(r,s,l,u){return Ae.createNode(r,s,l,u)},rename(r,s,l){var u;try{u=S.lookupNode(s,l)}catch{}if(u){if(S.isDir(r.mode))for(var f in u.contents)throw new S.ErrnoError(55);S.hashRemoveNode(u)}delete r.parent.contents[r.name],s.contents[l]=r,r.name=l,s.ctime=s.mtime=r.parent.ctime=r.parent.mtime=Date.now()},unlink(r,s){delete r.contents[s],r.ctime=r.mtime=Date.now()},rmdir(r,s){var l=S.lookupNode(r,s);for(var u in l.contents)throw new S.ErrnoError(55);delete r.contents[s],r.ctime=r.mtime=Date.now()},readdir(r){return[".","..",...Object.keys(r.contents)]},symlink(r,s,l){var u=Ae.createNode(r,s,41471,0);return u.link=l,u},readlink(r){if(!S.isLink(r.mode))throw new S.ErrnoError(28);return r.link}},stream_ops:{read(r,s,l,u,f){var g=r.node.contents;if(f>=r.node.usedBytes)return 0;var M=Math.min(r.node.usedBytes-f,u);if(P(M>=0),M>8&&g.subarray)s.set(g.subarray(f,f+M),l);else for(var w=0;w<M;w++)s[l+w]=g[f+w];return M},write(r,s,l,u,f,g){if(P(!(s instanceof ArrayBuffer)),s.buffer===Ye.buffer&&(g=!1),!u)return 0;var M=r.node;if(M.mtime=M.ctime=Date.now(),s.subarray&&(!M.contents||M.contents.subarray)){if(g)return P(f===0,"canOwn must imply no weird position inside the file"),M.contents=s.subarray(l,l+u),M.usedBytes=u,u;if(M.usedBytes===0&&f===0)return M.contents=s.slice(l,l+u),M.usedBytes=u,u;if(f+u<=M.usedBytes)return M.contents.set(s.subarray(l,l+u),f),u}if(Ae.expandFileStorage(M,f+u),M.contents.subarray&&s.subarray)M.contents.set(s.subarray(l,l+u),f);else for(var w=0;w<u;w++)M.contents[f+w]=s[l+w];return M.usedBytes=Math.max(M.usedBytes,f+u),u},llseek(r,s,l){var u=s;if(l===1?u+=r.position:l===2&&S.isFile(r.node.mode)&&(u+=r.node.usedBytes),u<0)throw new S.ErrnoError(28);return u},mmap(r,s,l,u,f){if(!S.isFile(r.node.mode))throw new S.ErrnoError(43);var g,M,w=r.node.contents;if(!(f&2)&&w&&w.buffer===Ye.buffer)M=!1,g=w.byteOffset;else{if(M=!0,g=et(),!g)throw new S.ErrnoError(48);w&&((l>0||l+s<w.length)&&(w.subarray?w=w.subarray(l,l+s):w=Array.prototype.slice.call(w,l,l+s)),Ye.set(w,g))}return{ptr:g,allocated:M}},msync(r,s,l,u,f){return Ae.stream_ops.write(r,s,0,u,l,!1),0}}},qe=async r=>{var s=await E(r);return P(s,`Loading data file "${r}" failed (no arrayBuffer).`),new Uint8Array(s)},ut=(...r)=>S.createDataFile(...r),wt=r=>{for(var s=r;;){if(!At[r])return r;r=s+Math.random()}},Nt=[],Lt=(r,s,l,u)=>{typeof Browser<"u"&&Browser.init();var f=!1;return Nt.forEach(g=>{f||g.canHandle(s)&&(g.handle(r,s,l,u),f=!0)}),f},bt=(r,s,l,u,f,g,M,w,F,X)=>{var J=s?ne.resolve(Tt.join2(r,s)):r,ae=wt(`cp ${J}`);function ge(ce){function Se(Xe){X==null||X(),w||ut(r,s,Xe,u,f,F),g==null||g(),A(ae)}Lt(ce,J,Se,()=>{M==null||M(),A(ae)})||Se(ce)}U(ae),typeof l=="string"?qe(l).then(ge,M):ge(l)},Je=r=>{var s={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},l=s[r];if(typeof l>"u")throw new Error(`Unknown file open mode: ${r}`);return l},Ft=(r,s)=>{var l=0;return r&&(l|=365),s&&(l|=146),l},gt=r=>st(Vl(r)),Zt={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},S={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class extends Error{constructor(s){super(xt?gt(s):"");wn(this,"name","ErrnoError");this.errno=s;for(var l in Zt)if(Zt[l]===s){this.code=l;break}}},FSStream:class{constructor(){wn(this,"shared",{})}get object(){return this.node}set object(r){this.node=r}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(r){this.shared.flags=r}get position(){return this.shared.position}set position(r){this.shared.position=r}},FSNode:class{constructor(r,s,l,u){wn(this,"node_ops",{});wn(this,"stream_ops",{});wn(this,"readMode",365);wn(this,"writeMode",146);wn(this,"mounted",null);r||(r=this),this.parent=r,this.mount=r.mount,this.id=S.nextInode++,this.name=s,this.mode=l,this.rdev=u,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(r){r?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(r){r?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return S.isDir(this.mode)}get isDevice(){return S.isChrdev(this.mode)}},lookupPath(r,s={}){if(!r)throw new S.ErrnoError(44);s.follow_mount??(s.follow_mount=!0),Tt.isAbs(r)||(r=S.cwd()+"/"+r);e:for(var l=0;l<40;l++){for(var u=r.split("/").filter(X=>!!X),f=S.root,g="/",M=0;M<u.length;M++){var w=M===u.length-1;if(w&&s.parent)break;if(u[M]!=="."){if(u[M]===".."){if(g=Tt.dirname(g),S.isRoot(f)){r=g+"/"+u.slice(M+1).join("/");continue e}else f=f.parent;continue}g=Tt.join2(g,u[M]);try{f=S.lookupNode(f,u[M])}catch(X){if((X==null?void 0:X.errno)===44&&w&&s.noent_okay)return{path:g};throw X}if(S.isMountpoint(f)&&(!w||s.follow_mount)&&(f=f.mounted.root),S.isLink(f.mode)&&(!w||s.follow)){if(!f.node_ops.readlink)throw new S.ErrnoError(52);var F=f.node_ops.readlink(f);Tt.isAbs(F)||(F=Tt.dirname(g)+"/"+F),r=F+"/"+u.slice(M+1).join("/");continue e}}}return{path:g,node:f}}throw new S.ErrnoError(32)},getPath(r){for(var s;;){if(S.isRoot(r)){var l=r.mount.mountpoint;return s?l[l.length-1]!=="/"?`${l}/${s}`:l+s:l}s=s?`${r.name}/${s}`:r.name,r=r.parent}},hashName(r,s){for(var l=0,u=0;u<s.length;u++)l=(l<<5)-l+s.charCodeAt(u)|0;return(r+l>>>0)%S.nameTable.length},hashAddNode(r){var s=S.hashName(r.parent.id,r.name);r.name_next=S.nameTable[s],S.nameTable[s]=r},hashRemoveNode(r){var s=S.hashName(r.parent.id,r.name);if(S.nameTable[s]===r)S.nameTable[s]=r.name_next;else for(var l=S.nameTable[s];l;){if(l.name_next===r){l.name_next=r.name_next;break}l=l.name_next}},lookupNode(r,s){var l=S.mayLookup(r);if(l)throw new S.ErrnoError(l);for(var u=S.hashName(r.id,s),f=S.nameTable[u];f;f=f.name_next){var g=f.name;if(f.parent.id===r.id&&g===s)return f}return S.lookup(r,s)},createNode(r,s,l,u){P(typeof r=="object");var f=new S.FSNode(r,s,l,u);return S.hashAddNode(f),f},destroyNode(r){S.hashRemoveNode(r)},isRoot(r){return r===r.parent},isMountpoint(r){return!!r.mounted},isFile(r){return(r&61440)===32768},isDir(r){return(r&61440)===16384},isLink(r){return(r&61440)===40960},isChrdev(r){return(r&61440)===8192},isBlkdev(r){return(r&61440)===24576},isFIFO(r){return(r&61440)===4096},isSocket(r){return(r&49152)===49152},flagsToPermissionString(r){var s=["r","w","rw"][r&3];return r&512&&(s+="w"),s},nodePermissions(r,s){return S.ignorePermissions?0:s.includes("r")&&!(r.mode&292)||s.includes("w")&&!(r.mode&146)||s.includes("x")&&!(r.mode&73)?2:0},mayLookup(r){if(!S.isDir(r.mode))return 54;var s=S.nodePermissions(r,"x");return s||(r.node_ops.lookup?0:2)},mayCreate(r,s){if(!S.isDir(r.mode))return 54;try{var l=S.lookupNode(r,s);return 20}catch{}return S.nodePermissions(r,"wx")},mayDelete(r,s,l){var u;try{u=S.lookupNode(r,s)}catch(g){return g.errno}var f=S.nodePermissions(r,"wx");if(f)return f;if(l){if(!S.isDir(u.mode))return 54;if(S.isRoot(u)||S.getPath(u)===S.cwd())return 10}else if(S.isDir(u.mode))return 31;return 0},mayOpen(r,s){return r?S.isLink(r.mode)?32:S.isDir(r.mode)&&(S.flagsToPermissionString(s)!=="r"||s&576)?31:S.nodePermissions(r,S.flagsToPermissionString(s)):44},checkOpExists(r,s){if(!r)throw new S.ErrnoError(s);return r},MAX_OPEN_FDS:4096,nextfd(){for(var r=0;r<=S.MAX_OPEN_FDS;r++)if(!S.streams[r])return r;throw new S.ErrnoError(33)},getStreamChecked(r){var s=S.getStream(r);if(!s)throw new S.ErrnoError(8);return s},getStream:r=>S.streams[r],createStream(r,s=-1){return P(s>=-1),r=Object.assign(new S.FSStream,r),s==-1&&(s=S.nextfd()),r.fd=s,S.streams[s]=r,r},closeStream(r){S.streams[r]=null},dupStream(r,s=-1){var u,f;var l=S.createStream(r,s);return(f=(u=l.stream_ops)==null?void 0:u.dup)==null||f.call(u,l),l},doSetAttr(r,s,l){var u=r==null?void 0:r.stream_ops.setattr,f=u?r:s;u??(u=s.node_ops.setattr),S.checkOpExists(u,63),u(f,l)},chrdev_stream_ops:{open(r){var l,u;var s=S.getDevice(r.node.rdev);r.stream_ops=s.stream_ops,(u=(l=r.stream_ops).open)==null||u.call(l,r)},llseek(){throw new S.ErrnoError(70)}},major:r=>r>>8,minor:r=>r&255,makedev:(r,s)=>r<<8|s,registerDevice(r,s){S.devices[r]={stream_ops:s}},getDevice:r=>S.devices[r],getMounts(r){for(var s=[],l=[r];l.length;){var u=l.pop();s.push(u),l.push(...u.mounts)}return s},syncfs(r,s){typeof r=="function"&&(s=r,r=!1),S.syncFSRequests++,S.syncFSRequests>1&&I(`warning: ${S.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var l=S.getMounts(S.root.mount),u=0;function f(M){return P(S.syncFSRequests>0),S.syncFSRequests--,s(M)}function g(M){if(M)return g.errored?void 0:(g.errored=!0,f(M));++u>=l.length&&f(null)}l.forEach(M=>{if(!M.type.syncfs)return g(null);M.type.syncfs(M,r,g)})},mount(r,s,l){if(typeof r=="string")throw r;var u=l==="/",f=!l,g;if(u&&S.root)throw new S.ErrnoError(10);if(!u&&!f){var M=S.lookupPath(l,{follow_mount:!1});if(l=M.path,g=M.node,S.isMountpoint(g))throw new S.ErrnoError(10);if(!S.isDir(g.mode))throw new S.ErrnoError(54)}var w={type:r,opts:s,mountpoint:l,mounts:[]},F=r.mount(w);return F.mount=w,w.root=F,u?S.root=F:g&&(g.mounted=w,g.mount&&g.mount.mounts.push(w)),F},unmount(r){var s=S.lookupPath(r,{follow_mount:!1});if(!S.isMountpoint(s.node))throw new S.ErrnoError(28);var l=s.node,u=l.mounted,f=S.getMounts(u);Object.keys(S.nameTable).forEach(M=>{for(var w=S.nameTable[M];w;){var F=w.name_next;f.includes(w.mount)&&S.destroyNode(w),w=F}}),l.mounted=null;var g=l.mount.mounts.indexOf(u);P(g!==-1),l.mount.mounts.splice(g,1)},lookup(r,s){return r.node_ops.lookup(r,s)},mknod(r,s,l){var u=S.lookupPath(r,{parent:!0}),f=u.node,g=Tt.basename(r);if(!g)throw new S.ErrnoError(28);if(g==="."||g==="..")throw new S.ErrnoError(20);var M=S.mayCreate(f,g);if(M)throw new S.ErrnoError(M);if(!f.node_ops.mknod)throw new S.ErrnoError(63);return f.node_ops.mknod(f,g,s,l)},statfs(r){return S.statfsNode(S.lookupPath(r,{follow:!0}).node)},statfsStream(r){return S.statfsNode(r.node)},statfsNode(r){var s={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:S.nextInode,ffree:S.nextInode-1,fsid:42,flags:2,namelen:255};return r.node_ops.statfs&&Object.assign(s,r.node_ops.statfs(r.mount.opts.root)),s},create(r,s=438){return s&=4095,s|=32768,S.mknod(r,s,0)},mkdir(r,s=511){return s&=1023,s|=16384,S.mknod(r,s,0)},mkdirTree(r,s){var l=r.split("/"),u="";for(var f of l)if(f){(u||Tt.isAbs(r))&&(u+="/"),u+=f;try{S.mkdir(u,s)}catch(g){if(g.errno!=20)throw g}}},mkdev(r,s,l){return typeof l>"u"&&(l=s,s=438),s|=8192,S.mknod(r,s,l)},symlink(r,s){if(!ne.resolve(r))throw new S.ErrnoError(44);var l=S.lookupPath(s,{parent:!0}),u=l.node;if(!u)throw new S.ErrnoError(44);var f=Tt.basename(s),g=S.mayCreate(u,f);if(g)throw new S.ErrnoError(g);if(!u.node_ops.symlink)throw new S.ErrnoError(63);return u.node_ops.symlink(u,f,r)},rename(r,s){var l=Tt.dirname(r),u=Tt.dirname(s),f=Tt.basename(r),g=Tt.basename(s),M,w,F;if(M=S.lookupPath(r,{parent:!0}),w=M.node,M=S.lookupPath(s,{parent:!0}),F=M.node,!w||!F)throw new S.ErrnoError(44);if(w.mount!==F.mount)throw new S.ErrnoError(75);var X=S.lookupNode(w,f),J=ne.relative(r,u);if(J.charAt(0)!==".")throw new S.ErrnoError(28);if(J=ne.relative(s,l),J.charAt(0)!==".")throw new S.ErrnoError(55);var ae;try{ae=S.lookupNode(F,g)}catch{}if(X!==ae){var ge=S.isDir(X.mode),ce=S.mayDelete(w,f,ge);if(ce)throw new S.ErrnoError(ce);if(ce=ae?S.mayDelete(F,g,ge):S.mayCreate(F,g),ce)throw new S.ErrnoError(ce);if(!w.node_ops.rename)throw new S.ErrnoError(63);if(S.isMountpoint(X)||ae&&S.isMountpoint(ae))throw new S.ErrnoError(10);if(F!==w&&(ce=S.nodePermissions(w,"w"),ce))throw new S.ErrnoError(ce);S.hashRemoveNode(X);try{w.node_ops.rename(X,F,g),X.parent=F}catch(Se){throw Se}finally{S.hashAddNode(X)}}},rmdir(r){var s=S.lookupPath(r,{parent:!0}),l=s.node,u=Tt.basename(r),f=S.lookupNode(l,u),g=S.mayDelete(l,u,!0);if(g)throw new S.ErrnoError(g);if(!l.node_ops.rmdir)throw new S.ErrnoError(63);if(S.isMountpoint(f))throw new S.ErrnoError(10);l.node_ops.rmdir(l,u),S.destroyNode(f)},readdir(r){var s=S.lookupPath(r,{follow:!0}),l=s.node,u=S.checkOpExists(l.node_ops.readdir,54);return u(l)},unlink(r){var s=S.lookupPath(r,{parent:!0}),l=s.node;if(!l)throw new S.ErrnoError(44);var u=Tt.basename(r),f=S.lookupNode(l,u),g=S.mayDelete(l,u,!1);if(g)throw new S.ErrnoError(g);if(!l.node_ops.unlink)throw new S.ErrnoError(63);if(S.isMountpoint(f))throw new S.ErrnoError(10);l.node_ops.unlink(l,u),S.destroyNode(f)},readlink(r){var s=S.lookupPath(r),l=s.node;if(!l)throw new S.ErrnoError(44);if(!l.node_ops.readlink)throw new S.ErrnoError(28);return l.node_ops.readlink(l)},stat(r,s){var l=S.lookupPath(r,{follow:!s}),u=l.node,f=S.checkOpExists(u.node_ops.getattr,63);return f(u)},fstat(r){var s=S.getStreamChecked(r),l=s.node,u=s.stream_ops.getattr,f=u?s:l;return u??(u=l.node_ops.getattr),S.checkOpExists(u,63),u(f)},lstat(r){return S.stat(r,!0)},doChmod(r,s,l,u){S.doSetAttr(r,s,{mode:l&4095|s.mode&-4096,ctime:Date.now(),dontFollow:u})},chmod(r,s,l){var u;if(typeof r=="string"){var f=S.lookupPath(r,{follow:!l});u=f.node}else u=r;S.doChmod(null,u,s,l)},lchmod(r,s){S.chmod(r,s,!0)},fchmod(r,s){var l=S.getStreamChecked(r);S.doChmod(l,l.node,s,!1)},doChown(r,s,l){S.doSetAttr(r,s,{timestamp:Date.now(),dontFollow:l})},chown(r,s,l,u){var f;if(typeof r=="string"){var g=S.lookupPath(r,{follow:!u});f=g.node}else f=r;S.doChown(null,f,u)},lchown(r,s,l){S.chown(r,s,l,!0)},fchown(r,s,l){var u=S.getStreamChecked(r);S.doChown(u,u.node,!1)},doTruncate(r,s,l){if(S.isDir(s.mode))throw new S.ErrnoError(31);if(!S.isFile(s.mode))throw new S.ErrnoError(28);var u=S.nodePermissions(s,"w");if(u)throw new S.ErrnoError(u);S.doSetAttr(r,s,{size:l,timestamp:Date.now()})},truncate(r,s){if(s<0)throw new S.ErrnoError(28);var l;if(typeof r=="string"){var u=S.lookupPath(r,{follow:!0});l=u.node}else l=r;S.doTruncate(null,l,s)},ftruncate(r,s){var l=S.getStreamChecked(r);if(s<0||!(l.flags&2097155))throw new S.ErrnoError(28);S.doTruncate(l,l.node,s)},utime(r,s,l){var u=S.lookupPath(r,{follow:!0}),f=u.node,g=S.checkOpExists(f.node_ops.setattr,63);g(f,{atime:s,mtime:l})},open(r,s,l=438){if(r==="")throw new S.ErrnoError(44);s=typeof s=="string"?Je(s):s,s&64?l=l&4095|32768:l=0;var u,f;if(typeof r=="object")u=r;else{f=r.endsWith("/");var g=S.lookupPath(r,{follow:!(s&131072),noent_okay:!0});u=g.node,r=g.path}var M=!1;if(s&64)if(u){if(s&128)throw new S.ErrnoError(20)}else{if(f)throw new S.ErrnoError(31);u=S.mknod(r,l|511,0),M=!0}if(!u)throw new S.ErrnoError(44);if(S.isChrdev(u.mode)&&(s&=-513),s&65536&&!S.isDir(u.mode))throw new S.ErrnoError(54);if(!M){var w=S.mayOpen(u,s);if(w)throw new S.ErrnoError(w)}s&512&&!M&&S.truncate(u,0),s&=-131713;var F=S.createStream({node:u,path:S.getPath(u),flags:s,seekable:!0,position:0,stream_ops:u.stream_ops,ungotten:[],error:!1});return F.stream_ops.open&&F.stream_ops.open(F),M&&S.chmod(u,l&511),t.logReadFiles&&!(s&1)&&(r in S.readFiles||(S.readFiles[r]=1)),F},close(r){if(S.isClosed(r))throw new S.ErrnoError(8);r.getdents&&(r.getdents=null);try{r.stream_ops.close&&r.stream_ops.close(r)}catch(s){throw s}finally{S.closeStream(r.fd)}r.fd=null},isClosed(r){return r.fd===null},llseek(r,s,l){if(S.isClosed(r))throw new S.ErrnoError(8);if(!r.seekable||!r.stream_ops.llseek)throw new S.ErrnoError(70);if(l!=0&&l!=1&&l!=2)throw new S.ErrnoError(28);return r.position=r.stream_ops.llseek(r,s,l),r.ungotten=[],r.position},read(r,s,l,u,f){if(P(l>=0),u<0||f<0)throw new S.ErrnoError(28);if(S.isClosed(r))throw new S.ErrnoError(8);if((r.flags&2097155)===1)throw new S.ErrnoError(8);if(S.isDir(r.node.mode))throw new S.ErrnoError(31);if(!r.stream_ops.read)throw new S.ErrnoError(28);var g=typeof f<"u";if(!g)f=r.position;else if(!r.seekable)throw new S.ErrnoError(70);var M=r.stream_ops.read(r,s,l,u,f);return g||(r.position+=M),M},write(r,s,l,u,f,g){if(P(l>=0),u<0||f<0)throw new S.ErrnoError(28);if(S.isClosed(r))throw new S.ErrnoError(8);if(!(r.flags&2097155))throw new S.ErrnoError(8);if(S.isDir(r.node.mode))throw new S.ErrnoError(31);if(!r.stream_ops.write)throw new S.ErrnoError(28);r.seekable&&r.flags&1024&&S.llseek(r,0,2);var M=typeof f<"u";if(!M)f=r.position;else if(!r.seekable)throw new S.ErrnoError(70);var w=r.stream_ops.write(r,s,l,u,f,g);return M||(r.position+=w),w},mmap(r,s,l,u,f){if(u&2&&!(f&2)&&(r.flags&2097155)!==2)throw new S.ErrnoError(2);if((r.flags&2097155)===1)throw new S.ErrnoError(2);if(!r.stream_ops.mmap)throw new S.ErrnoError(43);if(!s)throw new S.ErrnoError(28);return r.stream_ops.mmap(r,s,l,u,f)},msync(r,s,l,u,f){return P(l>=0),r.stream_ops.msync?r.stream_ops.msync(r,s,l,u,f):0},ioctl(r,s,l){if(!r.stream_ops.ioctl)throw new S.ErrnoError(59);return r.stream_ops.ioctl(r,s,l)},readFile(r,s={}){if(s.flags=s.flags||0,s.encoding=s.encoding||"binary",s.encoding!=="utf8"&&s.encoding!=="binary")throw new Error(`Invalid encoding type "${s.encoding}"`);var l=S.open(r,s.flags),u=S.stat(r),f=u.size,g=new Uint8Array(f);return S.read(l,g,0,f,0),s.encoding==="utf8"&&(g=pt(g)),S.close(l),g},writeFile(r,s,l={}){l.flags=l.flags||577;var u=S.open(r,l.flags,l.mode);if(typeof s=="string"&&(s=new Uint8Array(Ue(s))),ArrayBuffer.isView(s))S.write(u,s,0,s.byteLength,void 0,l.canOwn);else throw new Error("Unsupported data type");S.close(u)},cwd:()=>S.currentPath,chdir(r){var s=S.lookupPath(r,{follow:!0});if(s.node===null)throw new S.ErrnoError(44);if(!S.isDir(s.node.mode))throw new S.ErrnoError(54);var l=S.nodePermissions(s.node,"x");if(l)throw new S.ErrnoError(l);S.currentPath=s.path},createDefaultDirectories(){S.mkdir("/tmp"),S.mkdir("/home"),S.mkdir("/home/web_user")},createDefaultDevices(){S.mkdir("/dev"),S.registerDevice(S.makedev(1,3),{read:()=>0,write:(u,f,g,M,w)=>M,llseek:()=>0}),S.mkdev("/dev/null",S.makedev(1,3)),ke.register(S.makedev(5,0),ke.default_tty_ops),ke.register(S.makedev(6,0),ke.default_tty1_ops),S.mkdev("/dev/tty",S.makedev(5,0)),S.mkdev("/dev/tty1",S.makedev(6,0));var r=new Uint8Array(1024),s=0,l=()=>(s===0&&(Y(r),s=r.byteLength),r[--s]);S.createDevice("/dev","random",l),S.createDevice("/dev","urandom",l),S.mkdir("/dev/shm"),S.mkdir("/dev/shm/tmp")},createSpecialDirectories(){S.mkdir("/proc");var r=S.mkdir("/proc/self");S.mkdir("/proc/self/fd"),S.mount({mount(){var s=S.createNode(r,"fd",16895,73);return s.stream_ops={llseek:Ae.stream_ops.llseek},s.node_ops={lookup(l,u){var f=+u,g=S.getStreamChecked(f),M={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>g.path},id:f+1};return M.parent=M,M},readdir(){return Array.from(S.streams.entries()).filter(([l,u])=>u).map(([l,u])=>l.toString())}},s}},{},"/proc/self/fd")},createStandardStreams(r,s,l){r?S.createDevice("/dev","stdin",r):S.symlink("/dev/tty","/dev/stdin"),s?S.createDevice("/dev","stdout",null,s):S.symlink("/dev/tty","/dev/stdout"),l?S.createDevice("/dev","stderr",null,l):S.symlink("/dev/tty1","/dev/stderr");var u=S.open("/dev/stdin",0),f=S.open("/dev/stdout",1),g=S.open("/dev/stderr",1);P(u.fd===0,`invalid handle for stdin (${u.fd})`),P(f.fd===1,`invalid handle for stdout (${f.fd})`),P(g.fd===2,`invalid handle for stderr (${g.fd})`)},staticInit(){S.nameTable=new Array(4096),S.mount(Ae,{},"/"),S.createDefaultDirectories(),S.createDefaultDevices(),S.createSpecialDirectories(),S.filesystems={MEMFS:Ae}},init(r,s,l){P(!S.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),S.initialized=!0,r??(r=t.stdin),s??(s=t.stdout),l??(l=t.stderr),S.createStandardStreams(r,s,l)},quit(){S.initialized=!1,mo(0);for(var r of S.streams)r&&S.close(r)},findObject(r,s){var l=S.analyzePath(r,s);return l.exists?l.object:null},analyzePath(r,s){try{var l=S.lookupPath(r,{follow:!s});r=l.path}catch{}var u={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var l=S.lookupPath(r,{parent:!0});u.parentExists=!0,u.parentPath=l.path,u.parentObject=l.node,u.name=Tt.basename(r),l=S.lookupPath(r,{follow:!s}),u.exists=!0,u.path=l.path,u.object=l.node,u.name=l.node.name,u.isRoot=l.path==="/"}catch(f){u.error=f.errno}return u},createPath(r,s,l,u){r=typeof r=="string"?r:S.getPath(r);for(var f=s.split("/").reverse();f.length;){var g=f.pop();if(g){var M=Tt.join2(r,g);try{S.mkdir(M)}catch(w){if(w.errno!=20)throw w}r=M}}return M},createFile(r,s,l,u,f){var g=Tt.join2(typeof r=="string"?r:S.getPath(r),s),M=Ft(u,f);return S.create(g,M)},createDataFile(r,s,l,u,f,g){var M=s;r&&(r=typeof r=="string"?r:S.getPath(r),M=s?Tt.join2(r,s):r);var w=Ft(u,f),F=S.create(M,w);if(l){if(typeof l=="string"){for(var X=new Array(l.length),J=0,ae=l.length;J<ae;++J)X[J]=l.charCodeAt(J);l=X}S.chmod(F,w|146);var ge=S.open(F,577);S.write(ge,l,0,l.length,0,g),S.close(ge),S.chmod(F,w)}},createDevice(r,s,l,u){var w;var f=Tt.join2(typeof r=="string"?r:S.getPath(r),s),g=Ft(!!l,!!u);(w=S.createDevice).major??(w.major=64);var M=S.makedev(S.createDevice.major++,0);return S.registerDevice(M,{open(F){F.seekable=!1},close(F){var X;(X=u==null?void 0:u.buffer)!=null&&X.length&&u(10)},read(F,X,J,ae,ge){for(var ce=0,Se=0;Se<ae;Se++){var Xe;try{Xe=l()}catch{throw new S.ErrnoError(29)}if(Xe===void 0&&ce===0)throw new S.ErrnoError(6);if(Xe==null)break;ce++,X[J+Se]=Xe}return ce&&(F.node.atime=Date.now()),ce},write(F,X,J,ae,ge){for(var ce=0;ce<ae;ce++)try{u(X[J+ce])}catch{throw new S.ErrnoError(29)}return ae&&(F.node.mtime=F.node.ctime=Date.now()),ce}}),S.mkdev(f,g,M)},forceLoadFile(r){if(r.isDevice||r.isFolder||r.link||r.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{r.contents=b(r.url),r.usedBytes=r.contents.length}catch{throw new S.ErrnoError(29)}},createLazyFile(r,s,l,u,f){class g{constructor(){wn(this,"lengthKnown",!1);wn(this,"chunks",[])}get(ce){if(!(ce>this.length-1||ce<0)){var Se=ce%this.chunkSize,Xe=ce/this.chunkSize|0;return this.getter(Xe)[Se]}}setDataGetter(ce){this.getter=ce}cacheLength(){var ce=new XMLHttpRequest;if(ce.open("HEAD",l,!1),ce.send(null),!(ce.status>=200&&ce.status<300||ce.status===304))throw new Error("Couldn't load "+l+". Status: "+ce.status);var Se=Number(ce.getResponseHeader("Content-length")),Xe,at=(Xe=ce.getResponseHeader("Accept-Ranges"))&&Xe==="bytes",lt=(Xe=ce.getResponseHeader("Content-Encoding"))&&Xe==="gzip",Ut=1024*1024;at||(Ut=Se);var yt=(Wt,nn)=>{if(Wt>nn)throw new Error("invalid range ("+Wt+", "+nn+") or no bytes requested!");if(nn>Se-1)throw new Error("only "+Se+" bytes available! programmer error!");var It=new XMLHttpRequest;if(It.open("GET",l,!1),Se!==Ut&&It.setRequestHeader("Range","bytes="+Wt+"-"+nn),It.responseType="arraybuffer",It.overrideMimeType&&It.overrideMimeType("text/plain; charset=x-user-defined"),It.send(null),!(It.status>=200&&It.status<300||It.status===304))throw new Error("Couldn't load "+l+". Status: "+It.status);return It.response!==void 0?new Uint8Array(It.response||[]):Ue(It.responseText||"")},Qt=this;Qt.setDataGetter(Wt=>{var nn=Wt*Ut,It=(Wt+1)*Ut-1;if(It=Math.min(It,Se-1),typeof Qt.chunks[Wt]>"u"&&(Qt.chunks[Wt]=yt(nn,It)),typeof Qt.chunks[Wt]>"u")throw new Error("doXHR failed!");return Qt.chunks[Wt]}),(lt||!Se)&&(Ut=Se=1,Se=this.getter(0).length,Ut=Se,N("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=Se,this._chunkSize=Ut,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!o)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var M=new g,w={isDevice:!1,contents:M}}else var w={isDevice:!1,url:l};var F=S.createFile(r,s,w,u,f);w.contents?F.contents=w.contents:w.url&&(F.contents=null,F.url=w.url),Object.defineProperties(F,{usedBytes:{get:function(){return this.contents.length}}});var X={},J=Object.keys(F.stream_ops);J.forEach(ge=>{var ce=F.stream_ops[ge];X[ge]=(...Se)=>(S.forceLoadFile(F),ce(...Se))});function ae(ge,ce,Se,Xe,at){var lt=ge.node.contents;if(at>=lt.length)return 0;var Ut=Math.min(lt.length-at,Xe);if(P(Ut>=0),lt.slice)for(var yt=0;yt<Ut;yt++)ce[Se+yt]=lt[at+yt];else for(var yt=0;yt<Ut;yt++)ce[Se+yt]=lt.get(at+yt);return Ut}return X.read=(ge,ce,Se,Xe,at)=>(S.forceLoadFile(F),ae(ge,ce,Se,Xe,at)),X.mmap=(ge,ce,Se,Xe,at)=>{S.forceLoadFile(F);var lt=et();if(!lt)throw new S.ErrnoError(48);return ae(ge,Ye,lt,ce,Se),{ptr:lt,allocated:!0}},F.stream_ops=X,F},absolutePath(){q("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder(){q("FS.createFolder has been removed; use FS.mkdir instead")},createLink(){q("FS.createLink has been removed; use FS.symlink instead")},joinPath(){q("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc(){q("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath(){q("FS.standardizePath has been removed; use PATH.normalize instead")}},ht={DEFAULT_POLLMASK:5,calculateAt(r,s,l){if(Tt.isAbs(s))return s;var u;if(r===-100)u=S.cwd();else{var f=ht.getStreamFromFD(r);u=f.path}if(s.length==0){if(!l)throw new S.ErrnoError(44);return u}return u+"/"+s},writeStat(r,s){ue[r>>2]=s.dev,ue[r+4>>2]=s.mode,Te[r+8>>2]=s.nlink,ue[r+12>>2]=s.uid,ue[r+16>>2]=s.gid,ue[r+20>>2]=s.rdev,vt[r+24>>3]=BigInt(s.size),ue[r+32>>2]=4096,ue[r+36>>2]=s.blocks;var l=s.atime.getTime(),u=s.mtime.getTime(),f=s.ctime.getTime();return vt[r+40>>3]=BigInt(Math.floor(l/1e3)),Te[r+48>>2]=l%1e3*1e3*1e3,vt[r+56>>3]=BigInt(Math.floor(u/1e3)),Te[r+64>>2]=u%1e3*1e3*1e3,vt[r+72>>3]=BigInt(Math.floor(f/1e3)),Te[r+80>>2]=f%1e3*1e3*1e3,vt[r+88>>3]=BigInt(s.ino),0},writeStatFs(r,s){ue[r+4>>2]=s.bsize,ue[r+40>>2]=s.bsize,ue[r+8>>2]=s.blocks,ue[r+12>>2]=s.bfree,ue[r+16>>2]=s.bavail,ue[r+20>>2]=s.files,ue[r+24>>2]=s.ffree,ue[r+28>>2]=s.fsid,ue[r+44>>2]=s.flags,ue[r+36>>2]=s.namelen},doMsync(r,s,l,u,f){if(!S.isFile(s.node.mode))throw new S.ErrnoError(43);if(u&2)return 0;var g=Ke.slice(r,r+l);S.msync(s,g,f,l,u)},getStreamFromFD(r){var s=S.getStreamChecked(r);return s},varargs:void 0,getStr(r){var s=st(r);return s}};function xi(r,s,l){try{var u=ht.getStreamFromFD(r);if(P(!l),u.fd===s)return-28;if(s<0||s>=S.MAX_OPEN_FDS)return-8;var f=S.getStream(s);return f&&S.close(f),S.dupStream(u,s).fd}catch(g){if(typeof S>"u"||g.name!=="ErrnoError")throw g;return-g.errno}}var Ct=()=>{P(ht.varargs!=null);var r=ue[+ht.varargs>>2];return ht.varargs+=4,r},Vt=Ct;function on(r,s,l){ht.varargs=l;try{var u=ht.getStreamFromFD(r);switch(s){case 0:{var f=Ct();if(f<0)return-28;for(;S.streams[f];)f++;var g;return g=S.dupStream(u,f),g.fd}case 1:case 2:return 0;case 3:return u.flags;case 4:{var f=Ct();return u.flags|=f,0}case 12:{var f=Vt(),M=0;return le[f+M>>1]=2,0}case 13:case 14:return 0}return-28}catch(w){if(typeof S>"u"||w.name!=="ErrnoError")throw w;return-w.errno}}function Kt(r,s){try{return ht.writeStat(s,S.fstat(r))}catch(l){if(typeof S>"u"||l.name!=="ErrnoError")throw l;return-l.errno}}function Jt(r,s,l){ht.varargs=l;try{var u=ht.getStreamFromFD(r);switch(s){case 21509:return u.tty?0:-59;case 21505:{if(!u.tty)return-59;if(u.tty.ops.ioctl_tcgets){var f=u.tty.ops.ioctl_tcgets(u),g=Vt();ue[g>>2]=f.c_iflag||0,ue[g+4>>2]=f.c_oflag||0,ue[g+8>>2]=f.c_cflag||0,ue[g+12>>2]=f.c_lflag||0;for(var M=0;M<32;M++)Ye[g+M+17]=f.c_cc[M]||0;return 0}return 0}case 21510:case 21511:case 21512:return u.tty?0:-59;case 21506:case 21507:case 21508:{if(!u.tty)return-59;if(u.tty.ops.ioctl_tcsets){for(var g=Vt(),w=ue[g>>2],F=ue[g+4>>2],X=ue[g+8>>2],J=ue[g+12>>2],ae=[],M=0;M<32;M++)ae.push(Ye[g+M+17]);return u.tty.ops.ioctl_tcsets(u.tty,s,{c_iflag:w,c_oflag:F,c_cflag:X,c_lflag:J,c_cc:ae})}return 0}case 21519:{if(!u.tty)return-59;var g=Vt();return ue[g>>2]=0,0}case 21520:return u.tty?-28:-59;case 21531:{var g=Vt();return S.ioctl(u,s,g)}case 21523:{if(!u.tty)return-59;if(u.tty.ops.ioctl_tiocgwinsz){var ge=u.tty.ops.ioctl_tiocgwinsz(u.tty),g=Vt();le[g>>1]=ge[0],le[g+2>>1]=ge[1]}return 0}case 21524:return u.tty?0:-59;case 21515:return u.tty?0:-59;default:return-28}}catch(ce){if(typeof S>"u"||ce.name!=="ErrnoError")throw ce;return-ce.errno}}function yr(r,s){try{return r=ht.getStr(r),ht.writeStat(s,S.lstat(r))}catch(l){if(typeof S>"u"||l.name!=="ErrnoError")throw l;return-l.errno}}function qn(r,s,l,u){try{s=ht.getStr(s);var f=u&256,g=u&4096;return u=u&-6401,P(!u,`unknown flags in __syscall_newfstatat: ${u}`),s=ht.calculateAt(r,s,g),ht.writeStat(l,f?S.lstat(s):S.stat(s))}catch(M){if(typeof S>"u"||M.name!=="ErrnoError")throw M;return-M.errno}}function Qu(r,s,l,u){ht.varargs=u;try{s=ht.getStr(s),s=ht.calculateAt(r,s);var f=u?Ct():0;return S.open(s,l,f).fd}catch(g){if(typeof S>"u"||g.name!=="ErrnoError")throw g;return-g.errno}}function eh(r,s){try{return r=ht.getStr(r),ht.writeStat(s,S.stat(r))}catch(l){if(typeof S>"u"||l.name!=="ErrnoError")throw l;return-l.errno}}var th=()=>q("native code called abort()"),Gt=r=>{for(var s="";;){var l=Ke[r++];if(!l)return s;s+=String.fromCharCode(l)}},Hi={},yi={},Kr={},Er=class extends Error{constructor(s){super(s),this.name="BindingError"}},mt=r=>{throw new Er(r)};function nh(r,s,l={}){var u=s.name;if(r||mt(`type "${u}" must have a positive integer typeid pointer`),yi.hasOwnProperty(r)){if(l.ignoreDuplicateRegistrations)return;mt(`Cannot register type '${u}' twice`)}if(yi[r]=s,delete Kr[r],Hi.hasOwnProperty(r)){var f=Hi[r];delete Hi[r],f.forEach(g=>g())}}function vn(r,s,l={}){if(s.argPackAdvance===void 0)throw new TypeError("registerType registeredInstance requires argPackAdvance");return nh(r,s,l)}var dl=(r,s,l)=>{switch(s){case 1:return l?u=>Ye[u]:u=>Ke[u];case 2:return l?u=>le[u>>1]:u=>_e[u>>1];case 4:return l?u=>ue[u>>2]:u=>Te[u>>2];case 8:return l?u=>vt[u>>3]:u=>k[u>>3];default:throw new TypeError(`invalid integer width (${s}): ${r}`)}},Ei=r=>{if(r===null)return"null";var s=typeof r;return s==="object"||s==="array"||s==="function"?r.toString():""+r},pl=(r,s,l,u)=>{if(s<l||s>u)throw new TypeError(`Passing a number "${Ei(s)}" from JS side to C/C++ side to an argument of type "${r}", which is outside the valid range [${l}, ${u}]!`)},ih=(r,s,l,u,f)=>{s=Gt(s);const g=u===0n;let M=w=>w;if(g){const w=l*8;M=F=>BigInt.asUintN(w,F),f=M(f)}vn(r,{name:s,fromWireType:M,toWireType:(w,F)=>{if(typeof F=="number")F=BigInt(F);else if(typeof F!="bigint")throw new TypeError(`Cannot convert "${Ei(F)}" to ${this.name}`);return pl(s,F,u,f),F},argPackAdvance:Nn,readValueFromPointer:dl(s,l,!g),destructorFunction:null})},Nn=8,rh=(r,s,l,u)=>{s=Gt(s),vn(r,{name:s,fromWireType:function(f){return!!f},toWireType:function(f,g){return g?l:u},argPackAdvance:Nn,readValueFromPointer:function(f){return this.fromWireType(Ke[f])},destructorFunction:null})},sh=r=>({count:r.count,deleteScheduled:r.deleteScheduled,preservePointerOnDelete:r.preservePointerOnDelete,ptr:r.ptr,ptrType:r.ptrType,smartPtr:r.smartPtr,smartPtrType:r.smartPtrType}),ro=r=>{function s(l){return l.$$.ptrType.registeredClass.name}mt(s(r)+" instance already deleted")},so=!1,ml=r=>{},oh=r=>{r.smartPtr?r.smartPtrType.rawDestructor(r.smartPtr):r.ptrType.registeredClass.rawDestructor(r.ptr)},_l=r=>{r.count.value-=1;var s=r.count.value===0;s&&oh(r)},gl=(r,s,l)=>{if(s===l)return r;if(l.baseClass===void 0)return null;var u=gl(r,s,l.baseClass);return u===null?null:l.downcast(u)},vl={},ah={},lh=(r,s)=>{for(s===void 0&&mt("ptr should not be undefined");r.baseClass;)s=r.upcast(s),r=r.baseClass;return s},ch=(r,s)=>(s=lh(r,s),ah[s]),uh=class extends Error{constructor(s){super(s),this.name="InternalError"}},Zr=r=>{throw new uh(r)},Jr=(r,s)=>{(!s.ptrType||!s.ptr)&&Zr("makeClassHandle requires ptr and ptrType");var l=!!s.smartPtrType,u=!!s.smartPtr;return l!==u&&Zr("Both smartPtrType and smartPtr must be specified"),s.count={value:1},Sr(Object.create(r,{$$:{value:s,writable:!0}}))};function xl(r){var s=this.getPointee(r);if(!s)return this.destructor(r),null;var l=ch(this.registeredClass,s);if(l!==void 0){if(l.$$.count.value===0)return l.$$.ptr=s,l.$$.smartPtr=r,l.clone();var u=l.clone();return this.destructor(r),u}function f(){return this.isSmartPointer?Jr(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:s,smartPtrType:this,smartPtr:r}):Jr(this.registeredClass.instancePrototype,{ptrType:this,ptr:r})}var g=this.registeredClass.getActualType(s),M=vl[g];if(!M)return f.call(this);var w;this.isConst?w=M.constPointerType:w=M.pointerType;var F=gl(s,this.registeredClass,w.registeredClass);return F===null?f.call(this):this.isSmartPointer?Jr(w.registeredClass.instancePrototype,{ptrType:w,ptr:F,smartPtrType:this,smartPtr:r}):Jr(w.registeredClass.instancePrototype,{ptrType:w,ptr:F})}var Sr=r=>typeof FinalizationRegistry>"u"?(Sr=s=>s,r):(so=new FinalizationRegistry(s=>{console.warn(s.leakWarning),_l(s.$$)}),Sr=s=>{var l=s.$$,u=!!l.smartPtr;if(u){var f={$$:l},g=l.ptrType.registeredClass,M=new Error(`Embind found a leaked C++ instance ${g.name} <${Fe(l.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);"captureStackTrace"in Error&&Error.captureStackTrace(M,xl),f.leakWarning=M.stack.replace(/^Error: /,""),so.register(s,f,s)}return s},ml=s=>so.unregister(s),Sr(r)),hh=()=>{let r=Qr.prototype;Object.assign(r,{isAliasOf(l){if(!(this instanceof Qr)||!(l instanceof Qr))return!1;var u=this.$$.ptrType.registeredClass,f=this.$$.ptr;l.$$=l.$$;for(var g=l.$$.ptrType.registeredClass,M=l.$$.ptr;u.baseClass;)f=u.upcast(f),u=u.baseClass;for(;g.baseClass;)M=g.upcast(M),g=g.baseClass;return u===g&&f===M},clone(){if(this.$$.ptr||ro(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var l=Sr(Object.create(Object.getPrototypeOf(this),{$$:{value:sh(this.$$)}}));return l.$$.count.value+=1,l.$$.deleteScheduled=!1,l},delete(){this.$$.ptr||ro(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&mt("Object already scheduled for deletion"),ml(this),_l(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||ro(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&mt("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const s=Symbol.dispose;s&&(r[s]=r.delete)};function Qr(){}var es=(r,s)=>Object.defineProperty(s,"name",{value:r}),oo=(r,s,l)=>{if(r[s].overloadTable===void 0){var u=r[s];r[s]=function(...f){return r[s].overloadTable.hasOwnProperty(f.length)||mt(`Function '${l}' called with an invalid number of arguments (${f.length}) - expects one of (${r[s].overloadTable})!`),r[s].overloadTable[f.length].apply(this,f)},r[s].overloadTable=[],r[s].overloadTable[u.argCount]=u}},ao=(r,s,l)=>{t.hasOwnProperty(r)?((l===void 0||t[r].overloadTable!==void 0&&t[r].overloadTable[l]!==void 0)&&mt(`Cannot register public name '${r}' twice`),oo(t,r,r),t[r].overloadTable.hasOwnProperty(l)&&mt(`Cannot register multiple overloads of a function with the same number of arguments (${l})!`),t[r].overloadTable[l]=s):(t[r]=s,t[r].argCount=l)},fh=48,dh=57,ph=r=>{P(typeof r=="string"),r=r.replace(/[^a-zA-Z0-9_]/g,"$");var s=r.charCodeAt(0);return s>=fh&&s<=dh?`_${r}`:r};function mh(r,s,l,u,f,g,M,w){this.name=r,this.constructor=s,this.instancePrototype=l,this.rawDestructor=u,this.baseClass=f,this.getActualType=g,this.upcast=M,this.downcast=w,this.pureVirtualFunctions=[]}var ts=(r,s,l)=>{for(;s!==l;)s.upcast||mt(`Expected null or instance of ${l.name}, got an instance of ${s.name}`),r=s.upcast(r),s=s.baseClass;return r};function _h(r,s){if(s===null)return this.isReference&&mt(`null is not a valid ${this.name}`),0;s.$$||mt(`Cannot pass "${Ei(s)}" as a ${this.name}`),s.$$.ptr||mt(`Cannot pass deleted object as a pointer of type ${this.name}`);var l=s.$$.ptrType.registeredClass,u=ts(s.$$.ptr,l,this.registeredClass);return u}function gh(r,s){var l;if(s===null)return this.isReference&&mt(`null is not a valid ${this.name}`),this.isSmartPointer?(l=this.rawConstructor(),r!==null&&r.push(this.rawDestructor,l),l):0;(!s||!s.$$)&&mt(`Cannot pass "${Ei(s)}" as a ${this.name}`),s.$$.ptr||mt(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&s.$$.ptrType.isConst&&mt(`Cannot convert argument of type ${s.$$.smartPtrType?s.$$.smartPtrType.name:s.$$.ptrType.name} to parameter type ${this.name}`);var u=s.$$.ptrType.registeredClass;if(l=ts(s.$$.ptr,u,this.registeredClass),this.isSmartPointer)switch(s.$$.smartPtr===void 0&&mt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:s.$$.smartPtrType===this?l=s.$$.smartPtr:mt(`Cannot convert argument of type ${s.$$.smartPtrType?s.$$.smartPtrType.name:s.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:l=s.$$.smartPtr;break;case 2:if(s.$$.smartPtrType===this)l=s.$$.smartPtr;else{var f=s.clone();l=this.rawShare(l,zt.toHandle(()=>f.delete())),r!==null&&r.push(this.rawDestructor,l)}break;default:mt("Unsupporting sharing policy")}return l}function vh(r,s){if(s===null)return this.isReference&&mt(`null is not a valid ${this.name}`),0;s.$$||mt(`Cannot pass "${Ei(s)}" as a ${this.name}`),s.$$.ptr||mt(`Cannot pass deleted object as a pointer of type ${this.name}`),s.$$.ptrType.isConst&&mt(`Cannot convert argument of type ${s.$$.ptrType.name} to parameter type ${this.name}`);var l=s.$$.ptrType.registeredClass,u=ts(s.$$.ptr,l,this.registeredClass);return u}function ns(r){return this.fromWireType(Te[r>>2])}var xh=()=>{Object.assign(is.prototype,{getPointee(r){return this.rawGetPointee&&(r=this.rawGetPointee(r)),r},destructor(r){var s;(s=this.rawDestructor)==null||s.call(this,r)},argPackAdvance:Nn,readValueFromPointer:ns,fromWireType:xl})};function is(r,s,l,u,f,g,M,w,F,X,J){this.name=r,this.registeredClass=s,this.isReference=l,this.isConst=u,this.isSmartPointer=f,this.pointeeType=g,this.sharingPolicy=M,this.rawGetPointee=w,this.rawConstructor=F,this.rawShare=X,this.rawDestructor=J,!f&&s.baseClass===void 0?u?(this.toWireType=_h,this.destructorFunction=null):(this.toWireType=vh,this.destructorFunction=null):this.toWireType=gh}var yl=(r,s,l)=>{t.hasOwnProperty(r)||Zr("Replacing nonexistent public symbol"),t[r].overloadTable!==void 0&&l!==void 0?t[r].overloadTable[l]=s:(t[r]=s,t[r].argCount=l)},El=[],rs,Me=r=>{var s=El[r];return s||(El[r]=s=rs.get(r)),P(rs.get(r)==s,"JavaScript-side Wasm function table mirror is out of date!"),s},On=(r,s,l=!1)=>{P(!l,"Async bindings are only supported with JSPI."),r=Gt(r);function u(){var g=Me(s);return g}var f=u();return typeof f!="function"&&mt(`unknown function pointer with signature ${r}: ${s}`),f};class yh extends Error{}var Sl=r=>{var s=Hl(r),l=Gt(s);return Bn(s),l},Si=(r,s)=>{var l=[],u={};function f(g){if(!u[g]&&!yi[g]){if(Kr[g]){Kr[g].forEach(f);return}l.push(g),u[g]=!0}}throw s.forEach(f),new yh(`${r}: `+l.map(Sl).join([", "]))},Tn=(r,s,l)=>{r.forEach(w=>Kr[w]=s);function u(w){var F=l(w);F.length!==r.length&&Zr("Mismatched type converter count");for(var X=0;X<r.length;++X)vn(r[X],F[X])}var f=new Array(s.length),g=[],M=0;s.forEach((w,F)=>{yi.hasOwnProperty(w)?f[F]=yi[w]:(g.push(w),Hi.hasOwnProperty(w)||(Hi[w]=[]),Hi[w].push(()=>{f[F]=yi[w],++M,M===g.length&&u(f)}))}),g.length===0&&u(f)},Eh=(r,s,l,u,f,g,M,w,F,X,J,ae,ge)=>{J=Gt(J),g=On(f,g),w&&(w=On(M,w)),X&&(X=On(F,X)),ge=On(ae,ge);var ce=ph(J);ao(ce,function(){Si(`Cannot construct ${J} due to unbound types`,[u])}),Tn([r,s,l],u?[u]:[],Se=>{var It;Se=Se[0];var Xe,at;u?(Xe=Se.registeredClass,at=Xe.instancePrototype):at=Qr.prototype;var lt=es(J,function(...ni){if(Object.getPrototypeOf(this)!==Ut)throw new Er(`Use 'new' to construct ${J}`);if(yt.constructor_body===void 0)throw new Er(`${J} has no accessible constructor`);var hs=yt.constructor_body[ni.length];if(hs===void 0)throw new Er(`Tried to invoke ctor of ${J} with invalid number of parameters (${ni.length}) - expected (${Object.keys(yt.constructor_body).toString()}) parameters instead!`);return hs.apply(this,ni)}),Ut=Object.create(at,{constructor:{value:lt}});lt.prototype=Ut;var yt=new mh(J,lt,Ut,ge,Xe,g,w,X);yt.baseClass&&((It=yt.baseClass).__derivedClasses??(It.__derivedClasses=[]),yt.baseClass.__derivedClasses.push(yt));var Qt=new is(J,yt,!0,!1,!1),Wt=new is(J+"*",yt,!1,!1,!1),nn=new is(J+" const*",yt,!1,!0,!1);return vl[r]={pointerType:Wt,constPointerType:nn},yl(ce,lt),[Qt,Wt,nn]})},lo=r=>{for(;r.length;){var s=r.pop(),l=r.pop();l(s)}};function Ml(r){for(var s=1;s<r.length;++s)if(r[s]!==null&&r[s].destructorFunction===void 0)return!0;return!1}function Sh(r,s,l,u,f){if(r<s||r>l){var g=s==l?s:`${s} to ${l}`;f(`function ${u} called with ${r} arguments, expected ${g}`)}}function Mh(r,s,l,u){var f=Ml(r),g=r.length-2,M=[],w=["fn"];s&&w.push("thisWired");for(var F=0;F<g;++F)M.push(`arg${F}`),w.push(`arg${F}Wired`);M=M.join(","),w=w.join(",");var X=`return function (${M}) {
`;X+=`checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`,f&&(X+=`var destructors = [];
`);var J=f?"destructors":"null",ae=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];s&&(X+=`var thisWired = classParam['toWireType'](${J}, this);
`);for(var F=0;F<g;++F)X+=`var arg${F}Wired = argType${F}['toWireType'](${J}, arg${F});
`,ae.push(`argType${F}`);if(X+=(l||u?"var rv = ":"")+`invoker(${w});
`,f)X+=`runDestructors(destructors);
`;else for(var F=s?1:2;F<r.length;++F){var ge=F===1?"thisWired":"arg"+(F-2)+"Wired";r[F].destructorFunction!==null&&(X+=`${ge}_dtor(${ge});
`,ae.push(`${ge}_dtor`))}return l&&(X+=`var ret = retType['fromWireType'](rv);
return ret;
`),X+=`}
`,ae.push("checkArgCount","minArgs","maxArgs"),X=`if (arguments.length !== ${ae.length}){ throw new Error(humanName + "Expected ${ae.length} closure arguments " + arguments.length + " given."); }
${X}`,[ae,X]}function Th(r){for(var s=r.length-2,l=r.length-1;l>=2&&r[l].optional;--l)s--;return s}function ss(r,s,l,u,f,g){var M=s.length;M<2&&mt("argTypes array size mismatch! Must at least get return value and 'this' types!"),P(!g,"Async bindings are only supported with JSPI.");for(var w=s[1]!==null&&l!==null,F=Ml(s),X=s[0].name!=="void",J=M-2,ae=Th(s),ge=[r,mt,u,f,lo,s[0],s[1]],ce=0;ce<M-2;++ce)ge.push(s[ce+2]);if(!F)for(var ce=w?1:2;ce<s.length;++ce)s[ce].destructorFunction!==null&&ge.push(s[ce].destructorFunction);ge.push(Sh,ae,J);let[Se,Xe]=Mh(s,w,X,g);var at=new Function(...Se,Xe)(...ge);return es(r,at)}var os=(r,s)=>{for(var l=[],u=0;u<r;u++)l.push(Te[s+u*4>>2]);return l},co=r=>{r=r.trim();const s=r.indexOf("(");return s===-1?r:(P(r.endsWith(")"),"Parentheses for argument names should match."),r.slice(0,s))},wh=(r,s,l,u,f,g,M,w,F)=>{var X=os(l,u);s=Gt(s),s=co(s),g=On(f,g,w),Tn([],[r],J=>{J=J[0];var ae=`${J.name}.${s}`;function ge(){Si(`Cannot call ${ae} due to unbound types`,X)}s.startsWith("@@")&&(s=Symbol[s.substring(2)]);var ce=J.registeredClass.constructor;return ce[s]===void 0?(ge.argCount=l-1,ce[s]=ge):(oo(ce,s,ae),ce[s].overloadTable[l-1]=ge),Tn([],X,Se=>{var Xe=[Se[0],null].concat(Se.slice(1)),at=ss(ae,Xe,null,g,M,w);if(ce[s].overloadTable===void 0?(at.argCount=l-1,ce[s]=at):ce[s].overloadTable[l-1]=at,J.registeredClass.__derivedClasses)for(const lt of J.registeredClass.__derivedClasses)lt.constructor.hasOwnProperty(s)||(lt.constructor[s]=at);return[]}),[]})},bh=(r,s,l,u,f,g)=>{P(s>0);var M=os(s,l);f=On(u,f),Tn([],[r],w=>{w=w[0];var F=`constructor ${w.name}`;if(w.registeredClass.constructor_body===void 0&&(w.registeredClass.constructor_body=[]),w.registeredClass.constructor_body[s-1]!==void 0)throw new Er(`Cannot register multiple constructors with identical number of parameters (${s-1}) for class '${w.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return w.registeredClass.constructor_body[s-1]=()=>{Si(`Cannot construct ${w.name} due to unbound types`,M)},Tn([],M,X=>(X.splice(1,0,null),w.registeredClass.constructor_body[s-1]=ss(F,X,null,f,g),[])),[]})},Ah=(r,s,l,u,f,g,M,w,F,X)=>{var J=os(l,u);s=Gt(s),s=co(s),g=On(f,g,F),Tn([],[r],ae=>{ae=ae[0];var ge=`${ae.name}.${s}`;s.startsWith("@@")&&(s=Symbol[s.substring(2)]),w&&ae.registeredClass.pureVirtualFunctions.push(s);function ce(){Si(`Cannot call ${ge} due to unbound types`,J)}var Se=ae.registeredClass.instancePrototype,Xe=Se[s];return Xe===void 0||Xe.overloadTable===void 0&&Xe.className!==ae.name&&Xe.argCount===l-2?(ce.argCount=l-2,ce.className=ae.name,Se[s]=ce):(oo(Se,s,ge),Se[s].overloadTable[l-2]=ce),Tn([],J,at=>{var lt=ss(ge,at,ae,g,M,F);return Se[s].overloadTable===void 0?(lt.argCount=l-2,Se[s]=lt):Se[s].overloadTable[l-2]=lt,[]}),[]})},Tl=(r,s,l)=>(r instanceof Object||mt(`${l} with invalid "this": ${r}`),r instanceof s.registeredClass.constructor||mt(`${l} incompatible with "this" of type ${r.constructor.name}`),r.$$.ptr||mt(`cannot call emscripten binding method ${l} on deleted object`),ts(r.$$.ptr,r.$$.ptrType.registeredClass,s.registeredClass)),Rh=(r,s,l,u,f,g,M,w,F,X)=>{s=Gt(s),f=On(u,f),Tn([],[r],J=>{J=J[0];var ae=`${J.name}.${s}`,ge={get(){Si(`Cannot access ${ae} due to unbound types`,[l,M])},enumerable:!0,configurable:!0};return F?ge.set=()=>Si(`Cannot access ${ae} due to unbound types`,[l,M]):ge.set=ce=>mt(ae+" is a read-only property"),Object.defineProperty(J.registeredClass.instancePrototype,s,ge),Tn([],F?[l,M]:[l],ce=>{var Se=ce[0],Xe={get(){var lt=Tl(this,J,ae+" getter");return Se.fromWireType(f(g,lt))},enumerable:!0};if(F){F=On(w,F);var at=ce[1];Xe.set=function(lt){var Ut=Tl(this,J,ae+" setter"),yt=[];F(X,Ut,at.toWireType(yt,lt)),lo(yt)}}return Object.defineProperty(J.registeredClass.instancePrototype,s,Xe),[]}),[]})},Ch=(r,s,l)=>{r=Gt(r),Tn([],[s],u=>(u=u[0],t[r]=u.fromWireType(l),[]))},wl=[],kn=[0,1,,1,null,1,!0,1,!1,1],uo=r=>{r>9&&--kn[r+1]===0&&(P(kn[r]!==void 0,"Decref for unallocated handle."),kn[r]=void 0,wl.push(r))},zt={toValue:r=>(r||mt(`Cannot use deleted val. handle = ${r}`),P(r===2||kn[r]!==void 0&&r%2===0,`invalid handle: ${r}`),kn[r]),toHandle:r=>{switch(r){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const s=wl.pop()||kn.length;return kn[s]=r,kn[s+1]=1,s}}}},bl={name:"emscripten::val",fromWireType:r=>{var s=zt.toValue(r);return uo(r),s},toWireType:(r,s)=>zt.toHandle(s),argPackAdvance:Nn,readValueFromPointer:ns,destructorFunction:null},Al=r=>vn(r,bl),Ph=(r,s,l)=>{switch(s){case 1:return l?function(u){return this.fromWireType(Ye[u])}:function(u){return this.fromWireType(Ke[u])};case 2:return l?function(u){return this.fromWireType(le[u>>1])}:function(u){return this.fromWireType(_e[u>>1])};case 4:return l?function(u){return this.fromWireType(ue[u>>2])}:function(u){return this.fromWireType(Te[u>>2])};default:throw new TypeError(`invalid integer width (${s}): ${r}`)}},Dh=(r,s,l,u)=>{s=Gt(s);function f(){}f.values={},vn(r,{name:s,constructor:f,fromWireType:function(g){return this.constructor.values[g]},toWireType:(g,M)=>M.value,argPackAdvance:Nn,readValueFromPointer:Ph(s,l,u),destructorFunction:null}),ao(s,f)},Mr=(r,s)=>{var l=yi[r];return l===void 0&&mt(`${s} has unknown type ${Sl(r)}`),l},Lh=(r,s,l)=>{var u=Mr(r,"enum");s=Gt(s);var f=u.constructor,g=Object.create(u.constructor.prototype,{value:{value:l},constructor:{value:es(`${u.name}_${s}`,function(){})}});f.values[l]=g,f[s]=g},Fh=(r,s)=>{switch(s){case 4:return function(l){return this.fromWireType(We[l>>2])};case 8:return function(l){return this.fromWireType(it[l>>3])};default:throw new TypeError(`invalid float width (${s}): ${r}`)}},Ih=(r,s,l)=>{s=Gt(s),vn(r,{name:s,fromWireType:u=>u,toWireType:(u,f)=>{if(typeof f!="number"&&typeof f!="boolean")throw new TypeError(`Cannot convert ${Ei(f)} to ${this.name}`);return f},argPackAdvance:Nn,readValueFromPointer:Fh(s,l),destructorFunction:null})},Uh=(r,s,l,u,f,g,M,w)=>{var F=os(s,l);r=Gt(r),r=co(r),f=On(u,f,M),ao(r,function(){Si(`Cannot call ${r} due to unbound types`,F)},s-1),Tn([],F,X=>{var J=[X[0],null].concat(X.slice(1));return yl(r,ss(r,J,null,f,g,M),s-1),[]})},Nh=(r,s,l,u,f)=>{s=Gt(s);const g=u===0;let M=F=>F;if(g){var w=32-8*l;M=F=>F<<w>>>w,f=M(f)}vn(r,{name:s,fromWireType:M,toWireType:(F,X)=>{if(typeof X!="number"&&typeof X!="boolean")throw new TypeError(`Cannot convert "${Ei(X)}" to ${s}`);return pl(s,X,u,f),X},argPackAdvance:Nn,readValueFromPointer:dl(s,l,u!==0),destructorFunction:null})},Oh=(r,s,l)=>{var u=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],f=u[s];function g(M){var w=Te[M>>2],F=Te[M+4>>2];return new f(Ye.buffer,F,w)}l=Gt(l),vn(r,{name:l,fromWireType:g,argPackAdvance:Nn,readValueFromPointer:g},{ignoreDuplicateRegistrations:!0})},kh=Object.assign({optional:!0},bl),Bh=(r,s)=>{vn(r,kh)},Mi=(r,s,l)=>(P(typeof l=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),we(r,Ke,s,l)),zh=(r,s)=>{s=Gt(s),vn(r,{name:s,fromWireType(l){for(var u=Te[l>>2],f=l+4,g,M,w=f,M=0;M<=u;++M){var F=f+M;if(M==u||Ke[F]==0){var X=F-w,J=st(w,X);g===void 0?g=J:(g+="\0",g+=J),w=F+1}}return Bn(l),g},toWireType(l,u){u instanceof ArrayBuffer&&(u=new Uint8Array(u));var f,g=typeof u=="string";g||ArrayBuffer.isView(u)&&u.BYTES_PER_ELEMENT==1||mt("Cannot pass non-string to std::string"),g?f=K(u):f=u.length;var M=po(4+f+1),w=M+4;return Te[M>>2]=f,g?Mi(u,w,f+1):Ke.set(u,w),l!==null&&l.push(Bn,M),M},argPackAdvance:Nn,readValueFromPointer:ns,destructorFunction(l){Bn(l)}})},Rl=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Hh=(r,s)=>{P(r%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var l=r>>1,u=l+s/2,f=l;!(f>=u)&&_e[f];)++f;if(f-l>16&&Rl)return Rl.decode(_e.subarray(l,f));for(var g="",M=l;!(M>=u);++M){var w=_e[M];if(w==0)break;g+=String.fromCharCode(w)}return g},Vh=(r,s,l)=>{if(P(s%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),P(typeof l=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),l??(l=2147483647),l<2)return 0;l-=2;for(var u=s,f=l<r.length*2?l/2:r.length,g=0;g<f;++g){var M=r.charCodeAt(g);le[s>>1]=M,s+=2}return le[s>>1]=0,s-u},Gh=r=>r.length*2,Wh=(r,s)=>{P(r%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var l="",u=0;!(u>=s/4);u++){var f=ue[r+u*4>>2];if(!f)break;l+=String.fromCodePoint(f)}return l},Xh=(r,s,l)=>{if(P(s%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),P(typeof l=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),l??(l=2147483647),l<4)return 0;for(var u=s,f=u+l-4,g=0;g<r.length;++g){var M=r.codePointAt(g);if(M>65535&&g++,ue[s>>2]=M,s+=4,s+4>f)break}return ue[s>>2]=0,s-u},$h=r=>{for(var s=0,l=0;l<r.length;++l){var u=r.codePointAt(l);u>65535&&l++,s+=4}return s},qh=(r,s,l)=>{l=Gt(l);var u,f,g,M;s===2?(u=Hh,f=Vh,M=Gh,g=w=>_e[w>>1]):s===4&&(u=Wh,f=Xh,M=$h,g=w=>Te[w>>2]),vn(r,{name:l,fromWireType:w=>{for(var F=Te[w>>2],X,J=w+4,ae=0;ae<=F;++ae){var ge=w+4+ae*s;if(ae==F||g(ge)==0){var ce=ge-J,Se=u(J,ce);X===void 0?X=Se:(X+="\0",X+=Se),J=ge+s}}return Bn(w),X},toWireType:(w,F)=>{typeof F!="string"&&mt(`Cannot pass non-string to C++ string type ${l}`);var X=M(F),J=po(4+X+s);return Te[J>>2]=X/s,f(F,J+4,X+s),w!==null&&w.push(Bn,J),J},argPackAdvance:Nn,readValueFromPointer:ns,destructorFunction(w){Bn(w)}})},jh=(r,s)=>{Al(r)},Yh=(r,s)=>{s=Gt(s),vn(r,{isVoid:!0,name:s,argPackAdvance:0,fromWireType:()=>{},toWireType:(l,u)=>{}})},Kh=()=>{throw new H},Cl=(r,s,l)=>{var u=[],f=r.toWireType(u,l);return u.length&&(Te[s>>2]=zt.toHandle(u)),f},Zh=(r,s,l)=>(r=zt.toValue(r),s=Mr(s,"emval::as"),Cl(s,l,r)),Jh=(r,s)=>(r=zt.toValue(r),s=Mr(s,"emval::as"),s.toWireType(null,r)),as=[],Qh=(r,s,l,u)=>(r=as[r],s=zt.toValue(s),r(null,s,l,u)),ef={},ho=r=>{var s=ef[r];return s===void 0?Gt(r):s},tf=(r,s,l,u,f)=>(r=as[r],s=zt.toValue(s),l=ho(l),r(s,s[l],u,f)),Pl=()=>globalThis,nf=r=>r===0?zt.toHandle(Pl()):(r=ho(r),zt.toHandle(Pl()[r])),rf=r=>{var s=as.length;return as.push(r),s},sf=(r,s)=>{for(var l=new Array(r),u=0;u<r;++u)l[u]=Mr(Te[s+u*4>>2],`parameter ${u}`);return l},of=(r,s,l)=>{var u=sf(r,s),f=u.shift();r--;var g=`return function (obj, func, destructorsRef, args) {
`,M=0,w=[];l===0&&w.push("obj");for(var F=["retType"],X=[f],J=0;J<r;++J)w.push(`arg${J}`),F.push(`argType${J}`),X.push(u[J]),g+=`  var arg${J} = argType${J}.readValueFromPointer(args${M?"+"+M:""});
`,M+=u[J].argPackAdvance;var ae=l===1?"new func":"func.call";g+=`  var rv = ${ae}(${w.join(", ")});
`,f.isVoid||(F.push("emval_returnValue"),X.push(Cl),g+=`  return emval_returnValue(retType, destructorsRef, rv);
`),g+=`};
`;var ge=new Function(...F,g)(...X),ce=`methodCaller<(${u.map(Se=>Se.name).join(", ")}) => ${f.name}>`;return rf(es(ce,ge))},af=(r,s)=>(r=zt.toValue(r),s=zt.toValue(s),zt.toHandle(r[s])),lf=r=>{r>9&&(kn[r+1]+=1)},cf=r=>(r=zt.toValue(r),typeof r=="number"),uf=r=>(r=zt.toValue(r),typeof r=="string"),hf=()=>zt.toHandle([]),ff=r=>zt.toHandle(ho(r)),df=r=>{var s=zt.toValue(r);lo(s),uo(r)},pf=(r,s)=>{r=Mr(r,"_emval_take_value");var l=r.readValueFromPointer(s);return zt.toHandle(l)},mf=r=>{throw r=zt.toValue(r),r},_f=r=>r%4===0&&(r%100!==0||r%400===0),gf=[0,31,60,91,121,152,182,213,244,274,305,335],vf=[0,31,59,90,120,151,181,212,243,273,304,334],Dl=r=>{var s=_f(r.getFullYear()),l=s?gf:vf,u=l[r.getMonth()]+r.getDate()-1;return u},xf=9007199254740992,yf=-9007199254740992,Ll=r=>r<yf||r>xf?NaN:Number(r);function Ef(r,s){r=Ll(r);var l=new Date(r*1e3);ue[s>>2]=l.getSeconds(),ue[s+4>>2]=l.getMinutes(),ue[s+8>>2]=l.getHours(),ue[s+12>>2]=l.getDate(),ue[s+16>>2]=l.getMonth(),ue[s+20>>2]=l.getFullYear()-1900,ue[s+24>>2]=l.getDay();var u=Dl(l)|0;ue[s+28>>2]=u,ue[s+36>>2]=-(l.getTimezoneOffset()*60);var f=new Date(l.getFullYear(),0,1),g=new Date(l.getFullYear(),6,1).getTimezoneOffset(),M=f.getTimezoneOffset(),w=(g!=M&&l.getTimezoneOffset()==Math.min(M,g))|0;ue[s+32>>2]=w}var Sf=function(r){var s=(()=>{var l=new Date(ue[r+20>>2]+1900,ue[r+16>>2],ue[r+12>>2],ue[r+8>>2],ue[r+4>>2],ue[r>>2],0),u=ue[r+32>>2],f=l.getTimezoneOffset(),g=new Date(l.getFullYear(),0,1),M=new Date(l.getFullYear(),6,1).getTimezoneOffset(),w=g.getTimezoneOffset(),F=Math.min(w,M);if(u<0)ue[r+32>>2]=+(M!=w&&F==f);else if(u>0!=(F==f)){var X=Math.max(w,M),J=u>0?F:X;l.setTime(l.getTime()+(J-f)*6e4)}ue[r+24>>2]=l.getDay();var ae=Dl(l)|0;ue[r+28>>2]=ae,ue[r>>2]=l.getSeconds(),ue[r+4>>2]=l.getMinutes(),ue[r+8>>2]=l.getHours(),ue[r+12>>2]=l.getDate(),ue[r+16>>2]=l.getMonth(),ue[r+20>>2]=l.getYear();var ge=l.getTime();return isNaN(ge)?-1:ge/1e3})();return BigInt(s)},Mf=(r,s,l,u)=>{var f=new Date().getFullYear(),g=new Date(f,0,1),M=new Date(f,6,1),w=g.getTimezoneOffset(),F=M.getTimezoneOffset(),X=Math.max(w,F);Te[r>>2]=X*60,ue[s>>2]=+(w!=F);var J=ce=>{var Se=ce>=0?"-":"+",Xe=Math.abs(ce),at=String(Math.floor(Xe/60)).padStart(2,"0"),lt=String(Xe%60).padStart(2,"0");return`UTC${Se}${at}${lt}`},ae=J(w),ge=J(F);P(ae),P(ge),P(K(ae)<=16,`timezone name truncated to fit in TZNAME_MAX (${ae})`),P(K(ge)<=16,`timezone name truncated to fit in TZNAME_MAX (${ge})`),F<w?(Mi(ae,l,17),Mi(ge,u,17)):(Mi(ae,u,17),Mi(ge,l,17))},Fl=()=>performance.now(),Il=()=>Date.now(),Tf=r=>r>=0&&r<=3;function wf(r,s,l){if(!Tf(r))return 28;var u;r===0?u=Il():u=Fl();var f=Math.round(u*1e3*1e3);return vt[l>>3]=BigInt(f),0}var ls=[],bf=(r,s)=>{P(Array.isArray(ls)),P(s%16==0),ls.length=0;for(var l;l=Ke[r++];){var u=String.fromCharCode(l),f=["d","f","i","p"];f.push("j"),P(f.includes(u),`Invalid character ${l}("${u}") in readEmAsmArgs! Use only [${f}], and do not specify "v" for void return argument.`);var g=l!=105;g&=l!=112,s+=g&&s%8?4:0,ls.push(l==112?Te[s>>2]:l==106?vt[s>>3]:l==105?ue[s>>2]:it[s>>3]),s+=g?8:4}return ls},Af=(r,s,l)=>{var u=bf(s,l);return P(zl.hasOwnProperty(r),`No EM_ASM constant found at address ${r}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),zl[r](...u)},Rf=(r,s,l)=>Af(r,s,l),Ul=()=>2147483648,Cf=()=>Ul(),Pf=(r,s)=>(P(s,"alignment argument is required"),Math.ceil(r/s)*s),Df=r=>{var s=je.buffer,l=(r-s.byteLength+65535)/65536|0;try{return je.grow(l),Qe(),1}catch(u){I(`growMemory: Attempted to grow heap from ${s.byteLength} bytes to ${r} bytes, but got error: ${u}`)}},Lf=r=>{var s=Ke.length;r>>>=0,P(r>s);var l=Ul();if(r>l)return I(`Cannot enlarge memory, requested ${r} bytes, but the limit is ${l} bytes!`),!1;for(var u=1;u<=4;u*=2){var f=s*(1+.2/u);f=Math.min(f,r+100663296);var g=Math.min(l,Pf(Math.max(r,f),65536)),M=Df(g);if(M)return!0}return I(`Failed to grow the heap from ${s} bytes to ${g} bytes, not enough memory!`),!1},fo={},Ff=()=>p||"./this.program",Tr=()=>{if(!Tr.strings){var r=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8",s={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:r,_:Ff()};for(var l in fo)fo[l]===void 0?delete s[l]:s[l]=fo[l];var u=[];for(var l in s)u.push(`${l}=${s[l]}`);Tr.strings=u}return Tr.strings},If=(r,s)=>{var l=0,u=0;for(var f of Tr()){var g=s+l;Te[r+u>>2]=g,l+=Mi(f,g,1/0)+1,u+=4}return 0},Uf=(r,s)=>{var l=Tr();Te[r>>2]=l.length;var u=0;for(var f of l)u+=K(f)+1;return Te[s>>2]=u,0},Nl=0,Ol=()=>be||Nl>0,Nf=r=>{var s;Ol()||((s=t.onExit)==null||s.call(t,r),O=!0),d(r,new Le(r))},Of=(r,s)=>{if(Qp(),Ol()&&!s){var l=`program exited (with status: ${r}), but keepRuntimeAlive() is set (counter=${Nl}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;Be==null||Be(l),I(l)}Nf(r)},kf=Of;function Bf(r){try{var s=ht.getStreamFromFD(r);return S.close(s),0}catch(l){if(typeof S>"u"||l.name!=="ErrnoError")throw l;return l.errno}}var zf=(r,s,l,u)=>{for(var f=0,g=0;g<l;g++){var M=Te[s>>2],w=Te[s+4>>2];s+=8;var F=S.read(r,Ye,M,w,u);if(F<0)return-1;if(f+=F,F<w)break}return f};function Hf(r,s,l,u){try{var f=ht.getStreamFromFD(r),g=zf(f,s,l);return Te[u>>2]=g,0}catch(M){if(typeof S>"u"||M.name!=="ErrnoError")throw M;return M.errno}}function Vf(r,s,l,u){s=Ll(s);try{if(isNaN(s))return 61;var f=ht.getStreamFromFD(r);return S.llseek(f,s,l),vt[u>>3]=BigInt(f.position),f.getdents&&s===0&&l===0&&(f.getdents=null),0}catch(g){if(typeof S>"u"||g.name!=="ErrnoError")throw g;return g.errno}}var Gf=(r,s,l,u)=>{for(var f=0,g=0;g<l;g++){var M=Te[s>>2],w=Te[s+4>>2];s+=8;var F=S.write(r,Ye,M,w,u);if(F<0)return-1;if(f+=F,F<w)break}return f};function Wf(r,s,l,u){try{var f=ht.getStreamFromFD(r),g=Gf(f,s,l);return Te[u>>2]=g,0}catch(M){if(typeof S>"u"||M.name!=="ErrnoError")throw M;return M.errno}}var Xf=r=>r,$f=r=>{var s=t["_"+r];return P(s,"Cannot call unknown function "+r+", make sure it is exported"),s},qf=(r,s)=>{P(r.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),Ye.set(r,s)},cs=r=>$l(r),jf=r=>{var s=K(r)+1,l=cs(s);return Mi(r,l,s),l},kl=(r,s,l,u,f)=>{var g={string:Se=>{var Xe=0;return Se!=null&&Se!==0&&(Xe=jf(Se)),Xe},array:Se=>{var Xe=cs(Se.length);return qf(Se,Xe),Xe}};function M(Se){return s==="string"?st(Se):s==="boolean"?!!Se:Se}var w=$f(r),F=[],X=0;if(P(s!=="array",'Return type should not be "array".'),u)for(var J=0;J<u.length;J++){var ae=g[l[J]];ae?(X===0&&(X=V()),F[J]=ae(u[J])):F[J]=u[J]}var ge=w(...F);function ce(Se){return X!==0&&W(X),M(Se)}return ge=ce(ge),ge},Yf=(r,s,l,u)=>(...f)=>kl(r,s,l,f),Kf=(...r)=>S.createPath(...r),Zf=(...r)=>S.unlink(...r),Jf=(...r)=>S.createLazyFile(...r),Qf=(...r)=>S.createDevice(...r),ed=r=>us(r),td=r=>go(r),nd=r=>{var s=V(),l=cs(4),u=cs(4);jl(r,l,u);var f=Te[l>>2],g=Te[u>>2],M=st(f);Bn(f);var w;return g&&(w=st(g),Bn(g)),W(s),[M,w]},Bl=r=>nd(r);S.createPreloadedFile=bt,S.staticInit(),hh(),xh(),P(kn.length===5*2),t.noExitRuntime&&(be=t.noExitRuntime),t.preloadPlugins&&(Nt=t.preloadPlugins),t.print&&(N=t.print),t.printErr&&(I=t.printErr),t.wasmBinary&&(L=t.wasmBinary),sd(),t.arguments&&t.arguments,t.thisProgram&&(p=t.thisProgram),P(typeof t.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),P(typeof t.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),P(typeof t.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),P(typeof t.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),P(typeof t.read>"u","Module.read option was removed"),P(typeof t.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),P(typeof t.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),P(typeof t.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),P(typeof t.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),P(typeof t.ENVIRONMENT>"u","Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),P(typeof t.STACK_SIZE>"u","STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),P(typeof t.wasmMemory>"u","Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),P(typeof t.INITIAL_MEMORY>"u","Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),t.addRunDependency=U,t.removeRunDependency=A,t.ccall=kl,t.cwrap=Yf,t.FS_createPreloadedFile=bt,t.FS_unlink=Zf,t.FS_createPath=Kf,t.FS_createDevice=Qf,t.FS=S,t.FS_createDataFile=ut,t.FS_createLazyFile=Jf,t.MEMFS=Ae;var id=["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","zeroMemory","withStackSave","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","runMainThreadEmAsm","jstoi_q","autoResumeAudioContext","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","HandleAllocator","getNativeTypeSize","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","stringToAscii","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace","getFunctionArgsName","createJsInvokerSignature","PureVirtualError","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","setDelayFunction","count_emval_handles"];id.forEach(de);var rd=["run","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP8","HEAPU8","HEAP16","HEAPU16","HEAP32","HEAPU32","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","setTempRet0","ptrToString","exitJS","getHeapMax","growMemory","ENV","ERRNO_CODES","strError","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","getExecutableName","keepRuntimeAlive","asyncLoad","alignMemory","mmapAlloc","wasmTable","getUniqueRunDependency","noExitRuntime","addOnPreRun","addOnPostRun","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","intArrayFromString","AsciiToString","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","getEnvStrings","checkWasiClock","doReadv","doWritev","initRandomFill","randomFill","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","preloadPlugins","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS_readFile","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_forceLoadFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s","InternalError","BindingError","throwInternalError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","whenDependentTypesAreResolved","getTypeName","getFunctionName","heap32VectorToArray","requireRegisteredType","usesDestructorStack","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","GenericWireTypeSize","EmValType","EmValOptionalType","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","getInheritedInstance","registeredPointers","registerType","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","assertIntegerRange","readPointer","runDestructors","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","deletionQueue","flushPendingDeletes","delayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_freelist","emval_handles","emval_symbols","getStringOrSymbol","Emval","emval_get_global","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller"];rd.forEach(Pe),t.incrementExceptionRefcount=ed,t.decrementExceptionRefcount=td,t.getExceptionMessage=Bl;function sd(){fe("fetchSettings")}var zl={701944:()=>{typeof t<"u"&&"mjDISABLESTRING mjENABLESTRING mjFRAMESTRING mjLABELSTRING mjRNDSTRING mjTIMERSTRING mjVISSTRING".split(" ").forEach(function(r){Object.defineProperty(t,r,{get:function(){return t["get_"+r]()},set:function(s){},enumerable:!0,configurable:!0})})}},Hl=te("___getTypeName"),po=te("_malloc"),mo=te("_fflush"),Bn=te("_free"),_o=te("_emscripten_stack_get_end"),Vl=te("_strerror"),Ee=te("_setThrew"),Gl=te("__emscripten_tempret_set"),Wl=te("_emscripten_stack_init"),Xl=te("__emscripten_stack_restore"),$l=te("__emscripten_stack_alloc"),ql=te("_emscripten_stack_get_current"),go=te("___cxa_decrement_exception_refcount"),us=te("___cxa_increment_exception_refcount"),jl=te("___get_exception_message"),Yl=te("___cxa_can_catch"),Kl=te("___cxa_get_exception_ptr");function od(r){Hl=B("__getTypeName",1),po=B("malloc",1),mo=B("fflush",1),Bn=B("free",1),_o=r.emscripten_stack_get_end,r.emscripten_stack_get_base,Vl=B("strerror",1),Ee=B("setThrew",2),Gl=B("_emscripten_tempret_set",1),Wl=r.emscripten_stack_init,r.emscripten_stack_get_free,Xl=r._emscripten_stack_restore,$l=r._emscripten_stack_alloc,ql=r.emscripten_stack_get_current,go=B("__cxa_decrement_exception_refcount",1),us=B("__cxa_increment_exception_refcount",1),jl=B("__get_exception_message",3),Yl=B("__cxa_can_catch",3),Kl=B("__cxa_get_exception_ptr",1)}var Zl={__assert_fail:Rt,__cxa_begin_catch:gn,__cxa_current_primary_exception:xr,__cxa_end_catch:$r,__cxa_find_matching_catch_2:qr,__cxa_find_matching_catch_3:jr,__cxa_rethrow:Yr,__cxa_rethrow_primary_exception:eo,__cxa_throw:to,__cxa_uncaught_exceptions:no,__resumeException:io,__syscall_dup3:xi,__syscall_fcntl64:on,__syscall_fstat64:Kt,__syscall_ioctl:Jt,__syscall_lstat64:yr,__syscall_newfstatat:qn,__syscall_openat:Qu,__syscall_stat64:eh,_abort_js:th,_embind_register_bigint:ih,_embind_register_bool:rh,_embind_register_class:Eh,_embind_register_class_class_function:wh,_embind_register_class_constructor:bh,_embind_register_class_function:Ah,_embind_register_class_property:Rh,_embind_register_constant:Ch,_embind_register_emval:Al,_embind_register_enum:Dh,_embind_register_enum_value:Lh,_embind_register_float:Ih,_embind_register_function:Uh,_embind_register_integer:Nh,_embind_register_memory_view:Oh,_embind_register_optional:Bh,_embind_register_std_string:zh,_embind_register_std_wstring:qh,_embind_register_user_type:jh,_embind_register_void:Yh,_emscripten_throw_longjmp:Kh,_emval_as:Zh,_emval_as_int64:Jh,_emval_call:Qh,_emval_call_method:tf,_emval_decref:uo,_emval_get_global:nf,_emval_get_method_caller:of,_emval_get_property:af,_emval_incref:lf,_emval_is_number:cf,_emval_is_string:uf,_emval_new_array:hf,_emval_new_cstring:ff,_emval_run_destructors:df,_emval_take_value:pf,_emval_throw:mf,_localtime_js:Ef,_mktime_js:Sf,_tzset_js:Mf,clock_time_get:wf,emscripten_asm_const_int:Rf,emscripten_date_now:Il,emscripten_get_heap_max:Cf,emscripten_get_now:Fl,emscripten_resize_heap:Lf,environ_get:If,environ_sizes_get:Uf,exit:kf,fd_close:Bf,fd_read:Hf,fd_seek:Vf,fd_write:Wf,invoke_ddd:Hp,invoke_dddi:Zd,invoke_dddidi:Jd,invoke_ddidi:Kd,invoke_di:Qd,invoke_didd:Pp,invoke_dii:Hd,invoke_diii:Ed,invoke_diiii:Yd,invoke_diiiidd:qd,invoke_diiiidi:Td,invoke_diiiii:md,invoke_diiiiii:Pd,invoke_diiiiiii:ep,invoke_diiiiiiiii:Rd,invoke_diiiiiiiiiiii:Cd,invoke_fiii:Yp,invoke_i:_d,invoke_id:dp,invoke_ii:cd,invoke_iid:up,invoke_iidiii:kd,invoke_iidiiid:Nd,invoke_iidiiiiidi:Bd,invoke_iii:ad,invoke_iiid:zd,invoke_iiididdddddd:Od,invoke_iiidiiiiiiii:Ud,invoke_iiii:fd,invoke_iiiidddiiiii:np,invoke_iiiii:yd,invoke_iiiiid:Ap,invoke_iiiiii:vp,invoke_iiiiiii:fp,invoke_iiiiiiii:cp,invoke_iiiiiiiidd:Rp,invoke_iiiiiiiii:$d,invoke_iiiiiiiiid:zp,invoke_iiiiiiiiii:_p,invoke_iiiiiiiiiidddiiiiiiiii:Id,invoke_iiiiiiiiiii:pp,invoke_iiiiiiiiiiii:Kp,invoke_iiiiiiiiiiiii:Dp,invoke_iiij:gp,invoke_iiji:mp,invoke_j:qp,invoke_ji:kp,invoke_jiiii:xp,invoke_jij:Lp,invoke_v:hd,invoke_vi:ud,invoke_vid:hp,invoke_viddd:Ep,invoke_vidddd:Sp,invoke_vidi:jd,invoke_vidiii:Ld,invoke_vif:Wp,invoke_vii:pd,invoke_viid:Wd,invoke_viiddi:bp,invoke_viiddidi:wp,invoke_viiddii:tp,invoke_viidi:Gd,invoke_viidii:Md,invoke_viidiii:ap,invoke_viidiiid:sp,invoke_viidiiiii:Fd,invoke_viidiiiiidi:lp,invoke_viidiiiiiiii:Dd,invoke_viii:ld,invoke_viiid:bd,invoke_viiidd:Tp,invoke_viiidi:Vd,invoke_viiididdddddd:op,invoke_viiidiiiiiiii:rp,invoke_viiii:vd,invoke_viiiiddd:Mp,invoke_viiiidi:Vp,invoke_viiiifi:Gp,invoke_viiiii:dd,invoke_viiiiid:wd,invoke_viiiiii:gd,invoke_viiiiiii:Sd,invoke_viiiiiiii:Xd,invoke_viiiiiiiii:Cp,invoke_viiiiiiiiii:Np,invoke_viiiiiiiiiidddiiiiiiiii:ip,invoke_viiiiiiiiiii:Bp,invoke_viiiiiiiiiiid:Ad,invoke_viiiiiiiiiiiii:Ip,invoke_viiiiiiiiiiiiii:Up,invoke_viiiiiiiiiiiiiii:Zp,invoke_viiiiiiiiiiiiiiiiii:Op,invoke_viiiij:Xp,invoke_viiij:xd,invoke_viij:$p,invoke_viijii:jp,invoke_vij:Fp,invoke_vijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj:yp,llvm_eh_typeid_for:Xf},Ti=await he();function ad(r,s,l){var u=V();try{return Me(r)(s,l)}catch(f){if(W(u),!(f instanceof T))throw f;Ee(1,0)}}function ld(r,s,l,u){var f=V();try{Me(r)(s,l,u)}catch(g){if(W(f),!(g instanceof T))throw g;Ee(1,0)}}function cd(r,s){var l=V();try{return Me(r)(s)}catch(u){if(W(l),!(u instanceof T))throw u;Ee(1,0)}}function ud(r,s){var l=V();try{Me(r)(s)}catch(u){if(W(l),!(u instanceof T))throw u;Ee(1,0)}}function hd(r){var s=V();try{Me(r)()}catch(l){if(W(s),!(l instanceof T))throw l;Ee(1,0)}}function fd(r,s,l,u){var f=V();try{return Me(r)(s,l,u)}catch(g){if(W(f),!(g instanceof T))throw g;Ee(1,0)}}function dd(r,s,l,u,f,g){var M=V();try{Me(r)(s,l,u,f,g)}catch(w){if(W(M),!(w instanceof T))throw w;Ee(1,0)}}function pd(r,s,l){var u=V();try{Me(r)(s,l)}catch(f){if(W(u),!(f instanceof T))throw f;Ee(1,0)}}function md(r,s,l,u,f,g){var M=V();try{return Me(r)(s,l,u,f,g)}catch(w){if(W(M),!(w instanceof T))throw w;Ee(1,0)}}function _d(r){var s=V();try{return Me(r)()}catch(l){if(W(s),!(l instanceof T))throw l;Ee(1,0)}}function gd(r,s,l,u,f,g,M){var w=V();try{Me(r)(s,l,u,f,g,M)}catch(F){if(W(w),!(F instanceof T))throw F;Ee(1,0)}}function vd(r,s,l,u,f){var g=V();try{Me(r)(s,l,u,f)}catch(M){if(W(g),!(M instanceof T))throw M;Ee(1,0)}}function xd(r,s,l,u,f){var g=V();try{Me(r)(s,l,u,f)}catch(M){if(W(g),!(M instanceof T))throw M;Ee(1,0)}}function yd(r,s,l,u,f){var g=V();try{return Me(r)(s,l,u,f)}catch(M){if(W(g),!(M instanceof T))throw M;Ee(1,0)}}function Ed(r,s,l,u){var f=V();try{return Me(r)(s,l,u)}catch(g){if(W(f),!(g instanceof T))throw g;Ee(1,0)}}function Sd(r,s,l,u,f,g,M,w){var F=V();try{Me(r)(s,l,u,f,g,M,w)}catch(X){if(W(F),!(X instanceof T))throw X;Ee(1,0)}}function Md(r,s,l,u,f,g){var M=V();try{Me(r)(s,l,u,f,g)}catch(w){if(W(M),!(w instanceof T))throw w;Ee(1,0)}}function Td(r,s,l,u,f,g,M){var w=V();try{return Me(r)(s,l,u,f,g,M)}catch(F){if(W(w),!(F instanceof T))throw F;Ee(1,0)}}function wd(r,s,l,u,f,g,M){var w=V();try{Me(r)(s,l,u,f,g,M)}catch(F){if(W(w),!(F instanceof T))throw F;Ee(1,0)}}function bd(r,s,l,u,f){var g=V();try{Me(r)(s,l,u,f)}catch(M){if(W(g),!(M instanceof T))throw M;Ee(1,0)}}function Ad(r,s,l,u,f,g,M,w,F,X,J,ae,ge){var ce=V();try{Me(r)(s,l,u,f,g,M,w,F,X,J,ae,ge)}catch(Se){if(W(ce),!(Se instanceof T))throw Se;Ee(1,0)}}function Rd(r,s,l,u,f,g,M,w,F,X){var J=V();try{return Me(r)(s,l,u,f,g,M,w,F,X)}catch(ae){if(W(J),!(ae instanceof T))throw ae;Ee(1,0)}}function Cd(r,s,l,u,f,g,M,w,F,X,J,ae,ge){var ce=V();try{return Me(r)(s,l,u,f,g,M,w,F,X,J,ae,ge)}catch(Se){if(W(ce),!(Se instanceof T))throw Se;Ee(1,0)}}function Pd(r,s,l,u,f,g,M){var w=V();try{return Me(r)(s,l,u,f,g,M)}catch(F){if(W(w),!(F instanceof T))throw F;Ee(1,0)}}function Dd(r,s,l,u,f,g,M,w,F,X,J,ae){var ge=V();try{Me(r)(s,l,u,f,g,M,w,F,X,J,ae)}catch(ce){if(W(ge),!(ce instanceof T))throw ce;Ee(1,0)}}function Ld(r,s,l,u,f,g){var M=V();try{Me(r)(s,l,u,f,g)}catch(w){if(W(M),!(w instanceof T))throw w;Ee(1,0)}}function Fd(r,s,l,u,f,g,M,w,F){var X=V();try{Me(r)(s,l,u,f,g,M,w,F)}catch(J){if(W(X),!(J instanceof T))throw J;Ee(1,0)}}function Id(r,s,l,u,f,g,M,w,F,X,J,ae,ge,ce,Se,Xe,at,lt,Ut,yt,Qt,Wt){var nn=V();try{return Me(r)(s,l,u,f,g,M,w,F,X,J,ae,ge,ce,Se,Xe,at,lt,Ut,yt,Qt,Wt)}catch(It){if(W(nn),!(It instanceof T))throw It;Ee(1,0)}}function Ud(r,s,l,u,f,g,M,w,F,X,J,ae){var ge=V();try{return Me(r)(s,l,u,f,g,M,w,F,X,J,ae)}catch(ce){if(W(ge),!(ce instanceof T))throw ce;Ee(1,0)}}function Nd(r,s,l,u,f,g,M){var w=V();try{return Me(r)(s,l,u,f,g,M)}catch(F){if(W(w),!(F instanceof T))throw F;Ee(1,0)}}function Od(r,s,l,u,f,g,M,w,F,X,J,ae){var ge=V();try{return Me(r)(s,l,u,f,g,M,w,F,X,J,ae)}catch(ce){if(W(ge),!(ce instanceof T))throw ce;Ee(1,0)}}function kd(r,s,l,u,f,g){var M=V();try{return Me(r)(s,l,u,f,g)}catch(w){if(W(M),!(w instanceof T))throw w;Ee(1,0)}}function Bd(r,s,l,u,f,g,M,w,F,X){var J=V();try{return Me(r)(s,l,u,f,g,M,w,F,X)}catch(ae){if(W(J),!(ae instanceof T))throw ae;Ee(1,0)}}function zd(r,s,l,u){var f=V();try{return Me(r)(s,l,u)}catch(g){if(W(f),!(g instanceof T))throw g;Ee(1,0)}}function Hd(r,s,l){var u=V();try{return Me(r)(s,l)}catch(f){if(W(u),!(f instanceof T))throw f;Ee(1,0)}}function Vd(r,s,l,u,f,g){var M=V();try{Me(r)(s,l,u,f,g)}catch(w){if(W(M),!(w instanceof T))throw w;Ee(1,0)}}function Gd(r,s,l,u,f){var g=V();try{Me(r)(s,l,u,f)}catch(M){if(W(g),!(M instanceof T))throw M;Ee(1,0)}}function Wd(r,s,l,u){var f=V();try{Me(r)(s,l,u)}catch(g){if(W(f),!(g instanceof T))throw g;Ee(1,0)}}function Xd(r,s,l,u,f,g,M,w,F){var X=V();try{Me(r)(s,l,u,f,g,M,w,F)}catch(J){if(W(X),!(J instanceof T))throw J;Ee(1,0)}}function $d(r,s,l,u,f,g,M,w,F){var X=V();try{return Me(r)(s,l,u,f,g,M,w,F)}catch(J){if(W(X),!(J instanceof T))throw J;Ee(1,0)}}function qd(r,s,l,u,f,g,M){var w=V();try{return Me(r)(s,l,u,f,g,M)}catch(F){if(W(w),!(F instanceof T))throw F;Ee(1,0)}}function jd(r,s,l,u){var f=V();try{Me(r)(s,l,u)}catch(g){if(W(f),!(g instanceof T))throw g;Ee(1,0)}}function Yd(r,s,l,u,f){var g=V();try{return Me(r)(s,l,u,f)}catch(M){if(W(g),!(M instanceof T))throw M;Ee(1,0)}}function Kd(r,s,l,u,f){var g=V();try{return Me(r)(s,l,u,f)}catch(M){if(W(g),!(M instanceof T))throw M;Ee(1,0)}}function Zd(r,s,l,u){var f=V();try{return Me(r)(s,l,u)}catch(g){if(W(f),!(g instanceof T))throw g;Ee(1,0)}}function Jd(r,s,l,u,f,g){var M=V();try{return Me(r)(s,l,u,f,g)}catch(w){if(W(M),!(w instanceof T))throw w;Ee(1,0)}}function Qd(r,s){var l=V();try{return Me(r)(s)}catch(u){if(W(l),!(u instanceof T))throw u;Ee(1,0)}}function ep(r,s,l,u,f,g,M,w){var F=V();try{return Me(r)(s,l,u,f,g,M,w)}catch(X){if(W(F),!(X instanceof T))throw X;Ee(1,0)}}function tp(r,s,l,u,f,g,M){var w=V();try{Me(r)(s,l,u,f,g,M)}catch(F){if(W(w),!(F instanceof T))throw F;Ee(1,0)}}function np(r,s,l,u,f,g,M,w,F,X,J,ae){var ge=V();try{return Me(r)(s,l,u,f,g,M,w,F,X,J,ae)}catch(ce){if(W(ge),!(ce instanceof T))throw ce;Ee(1,0)}}function ip(r,s,l,u,f,g,M,w,F,X,J,ae,ge,ce,Se,Xe,at,lt,Ut,yt,Qt,Wt,nn){var It=V();try{Me(r)(s,l,u,f,g,M,w,F,X,J,ae,ge,ce,Se,Xe,at,lt,Ut,yt,Qt,Wt,nn)}catch(ni){if(W(It),!(ni instanceof T))throw ni;Ee(1,0)}}function rp(r,s,l,u,f,g,M,w,F,X,J,ae,ge){var ce=V();try{Me(r)(s,l,u,f,g,M,w,F,X,J,ae,ge)}catch(Se){if(W(ce),!(Se instanceof T))throw Se;Ee(1,0)}}function sp(r,s,l,u,f,g,M,w){var F=V();try{Me(r)(s,l,u,f,g,M,w)}catch(X){if(W(F),!(X instanceof T))throw X;Ee(1,0)}}function op(r,s,l,u,f,g,M,w,F,X,J,ae,ge){var ce=V();try{Me(r)(s,l,u,f,g,M,w,F,X,J,ae,ge)}catch(Se){if(W(ce),!(Se instanceof T))throw Se;Ee(1,0)}}function ap(r,s,l,u,f,g,M){var w=V();try{Me(r)(s,l,u,f,g,M)}catch(F){if(W(w),!(F instanceof T))throw F;Ee(1,0)}}function lp(r,s,l,u,f,g,M,w,F,X,J){var ae=V();try{Me(r)(s,l,u,f,g,M,w,F,X,J)}catch(ge){if(W(ae),!(ge instanceof T))throw ge;Ee(1,0)}}function cp(r,s,l,u,f,g,M,w){var F=V();try{return Me(r)(s,l,u,f,g,M,w)}catch(X){if(W(F),!(X instanceof T))throw X;Ee(1,0)}}function up(r,s,l){var u=V();try{return Me(r)(s,l)}catch(f){if(W(u),!(f instanceof T))throw f;Ee(1,0)}}function hp(r,s,l){var u=V();try{Me(r)(s,l)}catch(f){if(W(u),!(f instanceof T))throw f;Ee(1,0)}}function fp(r,s,l,u,f,g,M){var w=V();try{return Me(r)(s,l,u,f,g,M)}catch(F){if(W(w),!(F instanceof T))throw F;Ee(1,0)}}function dp(r,s){var l=V();try{return Me(r)(s)}catch(u){if(W(l),!(u instanceof T))throw u;Ee(1,0)}}function pp(r,s,l,u,f,g,M,w,F,X,J){var ae=V();try{return Me(r)(s,l,u,f,g,M,w,F,X,J)}catch(ge){if(W(ae),!(ge instanceof T))throw ge;Ee(1,0)}}function mp(r,s,l,u){var f=V();try{return Me(r)(s,l,u)}catch(g){if(W(f),!(g instanceof T))throw g;Ee(1,0)}}function _p(r,s,l,u,f,g,M,w,F,X){var J=V();try{return Me(r)(s,l,u,f,g,M,w,F,X)}catch(ae){if(W(J),!(ae instanceof T))throw ae;Ee(1,0)}}function gp(r,s,l,u){var f=V();try{return Me(r)(s,l,u)}catch(g){if(W(f),!(g instanceof T))throw g;Ee(1,0)}}function vp(r,s,l,u,f,g){var M=V();try{return Me(r)(s,l,u,f,g)}catch(w){if(W(M),!(w instanceof T))throw w;Ee(1,0)}}function xp(r,s,l,u,f){var g=V();try{return Me(r)(s,l,u,f)}catch(M){if(W(g),!(M instanceof T))throw M;return Ee(1,0),0n}}function yp(r,s,l,u,f,g,M,w,F,X,J,ae,ge,ce,Se,Xe,at,lt,Ut,yt,Qt,Wt,nn,It,ni,hs,tm,nm,im,rm,sm,om,am,lm,cm,um,hm,fm,dm,pm,mm,_m,gm,vm,xm,ym,Em,Sm,Mm,Tm,wm,bm,Am,Rm,Cm,Pm,Dm,Lm,Fm,Im,Um,Nm,Om,km,Bm,zm,Hm,Vm,Gm,Wm,Xm,$m,qm,jm,Ym,Km,Zm,Jm,Qm,e_,t_,n_,i_,r_,s_,o_){var a_=V();try{Me(r)(s,l,u,f,g,M,w,F,X,J,ae,ge,ce,Se,Xe,at,lt,Ut,yt,Qt,Wt,nn,It,ni,hs,tm,nm,im,rm,sm,om,am,lm,cm,um,hm,fm,dm,pm,mm,_m,gm,vm,xm,ym,Em,Sm,Mm,Tm,wm,bm,Am,Rm,Cm,Pm,Dm,Lm,Fm,Im,Um,Nm,Om,km,Bm,zm,Hm,Vm,Gm,Wm,Xm,$m,qm,jm,Ym,Km,Zm,Jm,Qm,e_,t_,n_,i_,r_,s_,o_)}catch(nc){if(W(a_),!(nc instanceof T))throw nc;Ee(1,0)}}function Ep(r,s,l,u,f){var g=V();try{Me(r)(s,l,u,f)}catch(M){if(W(g),!(M instanceof T))throw M;Ee(1,0)}}function Sp(r,s,l,u,f,g){var M=V();try{Me(r)(s,l,u,f,g)}catch(w){if(W(M),!(w instanceof T))throw w;Ee(1,0)}}function Mp(r,s,l,u,f,g,M,w){var F=V();try{Me(r)(s,l,u,f,g,M,w)}catch(X){if(W(F),!(X instanceof T))throw X;Ee(1,0)}}function Tp(r,s,l,u,f,g){var M=V();try{Me(r)(s,l,u,f,g)}catch(w){if(W(M),!(w instanceof T))throw w;Ee(1,0)}}function wp(r,s,l,u,f,g,M,w){var F=V();try{Me(r)(s,l,u,f,g,M,w)}catch(X){if(W(F),!(X instanceof T))throw X;Ee(1,0)}}function bp(r,s,l,u,f,g){var M=V();try{Me(r)(s,l,u,f,g)}catch(w){if(W(M),!(w instanceof T))throw w;Ee(1,0)}}function Ap(r,s,l,u,f,g){var M=V();try{return Me(r)(s,l,u,f,g)}catch(w){if(W(M),!(w instanceof T))throw w;Ee(1,0)}}function Rp(r,s,l,u,f,g,M,w,F,X){var J=V();try{return Me(r)(s,l,u,f,g,M,w,F,X)}catch(ae){if(W(J),!(ae instanceof T))throw ae;Ee(1,0)}}function Cp(r,s,l,u,f,g,M,w,F,X){var J=V();try{Me(r)(s,l,u,f,g,M,w,F,X)}catch(ae){if(W(J),!(ae instanceof T))throw ae;Ee(1,0)}}function Pp(r,s,l,u){var f=V();try{return Me(r)(s,l,u)}catch(g){if(W(f),!(g instanceof T))throw g;Ee(1,0)}}function Dp(r,s,l,u,f,g,M,w,F,X,J,ae,ge){var ce=V();try{return Me(r)(s,l,u,f,g,M,w,F,X,J,ae,ge)}catch(Se){if(W(ce),!(Se instanceof T))throw Se;Ee(1,0)}}function Lp(r,s,l){var u=V();try{return Me(r)(s,l)}catch(f){if(W(u),!(f instanceof T))throw f;return Ee(1,0),0n}}function Fp(r,s,l){var u=V();try{Me(r)(s,l)}catch(f){if(W(u),!(f instanceof T))throw f;Ee(1,0)}}function Ip(r,s,l,u,f,g,M,w,F,X,J,ae,ge,ce){var Se=V();try{Me(r)(s,l,u,f,g,M,w,F,X,J,ae,ge,ce)}catch(Xe){if(W(Se),!(Xe instanceof T))throw Xe;Ee(1,0)}}function Up(r,s,l,u,f,g,M,w,F,X,J,ae,ge,ce,Se){var Xe=V();try{Me(r)(s,l,u,f,g,M,w,F,X,J,ae,ge,ce,Se)}catch(at){if(W(Xe),!(at instanceof T))throw at;Ee(1,0)}}function Np(r,s,l,u,f,g,M,w,F,X,J){var ae=V();try{Me(r)(s,l,u,f,g,M,w,F,X,J)}catch(ge){if(W(ae),!(ge instanceof T))throw ge;Ee(1,0)}}function Op(r,s,l,u,f,g,M,w,F,X,J,ae,ge,ce,Se,Xe,at,lt,Ut){var yt=V();try{Me(r)(s,l,u,f,g,M,w,F,X,J,ae,ge,ce,Se,Xe,at,lt,Ut)}catch(Qt){if(W(yt),!(Qt instanceof T))throw Qt;Ee(1,0)}}function kp(r,s){var l=V();try{return Me(r)(s)}catch(u){if(W(l),!(u instanceof T))throw u;return Ee(1,0),0n}}function Bp(r,s,l,u,f,g,M,w,F,X,J,ae){var ge=V();try{Me(r)(s,l,u,f,g,M,w,F,X,J,ae)}catch(ce){if(W(ge),!(ce instanceof T))throw ce;Ee(1,0)}}function zp(r,s,l,u,f,g,M,w,F,X){var J=V();try{return Me(r)(s,l,u,f,g,M,w,F,X)}catch(ae){if(W(J),!(ae instanceof T))throw ae;Ee(1,0)}}function Hp(r,s,l){var u=V();try{return Me(r)(s,l)}catch(f){if(W(u),!(f instanceof T))throw f;Ee(1,0)}}function Vp(r,s,l,u,f,g,M){var w=V();try{Me(r)(s,l,u,f,g,M)}catch(F){if(W(w),!(F instanceof T))throw F;Ee(1,0)}}function Gp(r,s,l,u,f,g,M){var w=V();try{Me(r)(s,l,u,f,g,M)}catch(F){if(W(w),!(F instanceof T))throw F;Ee(1,0)}}function Wp(r,s,l){var u=V();try{Me(r)(s,l)}catch(f){if(W(u),!(f instanceof T))throw f;Ee(1,0)}}function Xp(r,s,l,u,f,g){var M=V();try{Me(r)(s,l,u,f,g)}catch(w){if(W(M),!(w instanceof T))throw w;Ee(1,0)}}function $p(r,s,l,u){var f=V();try{Me(r)(s,l,u)}catch(g){if(W(f),!(g instanceof T))throw g;Ee(1,0)}}function qp(r){var s=V();try{return Me(r)()}catch(l){if(W(s),!(l instanceof T))throw l;return Ee(1,0),0n}}function jp(r,s,l,u,f,g){var M=V();try{Me(r)(s,l,u,f,g)}catch(w){if(W(M),!(w instanceof T))throw w;Ee(1,0)}}function Yp(r,s,l,u){var f=V();try{return Me(r)(s,l,u)}catch(g){if(W(f),!(g instanceof T))throw g;Ee(1,0)}}function Kp(r,s,l,u,f,g,M,w,F,X,J,ae){var ge=V();try{return Me(r)(s,l,u,f,g,M,w,F,X,J,ae)}catch(ce){if(W(ge),!(ce instanceof T))throw ce;Ee(1,0)}}function Zp(r,s,l,u,f,g,M,w,F,X,J,ae,ge,ce,Se,Xe){var at=V();try{Me(r)(s,l,u,f,g,M,w,F,X,J,ae,ge,ce,Se,Xe)}catch(lt){if(W(at),!(lt instanceof T))throw lt;Ee(1,0)}}var Jl;function Jp(){Wl(),j()}function vo(){if(ze>0){tt=vo;return}if(Jp(),$e(),ze>0){tt=vo;return}function r(){var s;P(!Jl),Jl=!0,t.calledRun=!0,!O&&(Ve(),He==null||He(t),(s=t.onRuntimeInitialized)==null||s.call(t),ie("onRuntimeInitialized"),P(!t._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),_t())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),r()},1)):r(),D()}function Qp(){var r=N,s=I,l=!1;N=I=u=>{l=!0};try{mo(0),["stdout","stderr"].forEach(u=>{var F;var f=S.analyzePath("/dev/"+u);if(f){var g=f.object,M=g.rdev,w=ke.ttys[M];(F=w==null?void 0:w.output)!=null&&F.length&&(l=!0)}})}catch{}N=r,I=s,l&&Oe("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}function em(){if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();ie("preInit")}em(),vo(),xt?e=t:e=new Promise((r,s)=>{He=r,Be=s});for(const r of Object.keys(t))r in i||Object.defineProperty(i,r,{configurable:!0,get(){q(`Access to module property ('${r}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return e},_n=Uint8Array,lr=Uint16Array,HE=Int32Array,Wu=new _n([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Xu=new _n([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),VE=new _n([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),$u=function(i,e){for(var t=new lr(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var o=new HE(t[30]),n=1;n<30;++n)for(var a=t[n];a<t[n+1];++a)o[a]=a-t[n]<<5|n;return{b:t,r:o}},qu=$u(Wu,2),ju=qu.b,GE=qu.r;ju[28]=258,GE[258]=28;var WE=$u(Xu,0),XE=WE.b,Ka=new lr(32768);for(var Ot=0;Ot<32768;++Ot){var ci=(Ot&43690)>>1|(Ot&21845)<<1;ci=(ci&52428)>>2|(ci&13107)<<2,ci=(ci&61680)>>4|(ci&3855)<<4,Ka[Ot]=((ci&65280)>>8|(ci&255)<<8)>>1}var Ir=function(i,e,t){for(var n=i.length,o=0,a=new lr(e);o<n;++o)i[o]&&++a[i[o]-1];var c=new lr(e);for(o=1;o<e;++o)c[o]=c[o-1]+a[o-1]<<1;var h;if(t){h=new lr(1<<e);var p=15-e;for(o=0;o<n;++o)if(i[o])for(var d=o<<4|i[o],v=e-i[o],_=c[i[o]-1]++<<v,x=_|(1<<v)-1;_<=x;++_)h[Ka[_]>>p]=d}else for(h=new lr(n),o=0;o<n;++o)i[o]&&(h[o]=Ka[c[i[o]-1]++]>>15-i[o]);return h},Xr=new _n(288);for(var Ot=0;Ot<144;++Ot)Xr[Ot]=8;for(var Ot=144;Ot<256;++Ot)Xr[Ot]=9;for(var Ot=256;Ot<280;++Ot)Xr[Ot]=7;for(var Ot=280;Ot<288;++Ot)Xr[Ot]=8;var Yu=new _n(32);for(var Ot=0;Ot<32;++Ot)Yu[Ot]=5;var $E=Ir(Xr,9,1),qE=Ir(Yu,5,1),Jo=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Cn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Qo=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},jE=function(i){return(i+7)/8|0},fl=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new _n(i.subarray(e,t))},YE=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],pn=function(i,e,t){var n=new Error(e||YE[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,pn),!t)throw n;return n},KE=function(i,e,t,n){var o=i.length,a=n?n.length:0;if(!o||e.f&&!e.l)return t||new _n(0);var c=!t,h=c||e.i!=2,p=e.i;c&&(t=new _n(o*3));var d=function(it){var vt=t.length;if(it>vt){var k=new _n(Math.max(vt*2,it));k.set(t),t=k}},v=e.f||0,_=e.p||0,x=e.b||0,E=e.l,b=e.d,R=e.m,y=e.n,m=o*8;do{if(!E){v=Cn(i,_,1);var N=Cn(i,_+1,3);if(_+=3,N)if(N==1)E=$E,b=qE,R=9,y=5;else if(N==2){var P=Cn(i,_,31)+257,z=Cn(i,_+10,15)+4,j=P+Cn(i,_+5,31)+1;_+=14;for(var D=new _n(j),T=new _n(19),H=0;H<z;++H)T[VE[H]]=Cn(i,_+H*3,7);_+=z*3;for(var Z=Jo(T),ie=(1<<Z)-1,te=Ir(T,Z,1),H=0;H<j;){var fe=te[Cn(i,_,ie)];_+=fe&15;var I=fe>>4;if(I<16)D[H++]=I;else{var oe=0,ye=0;for(I==16?(ye=3+Cn(i,_,3),_+=2,oe=D[H-1]):I==17?(ye=3+Cn(i,_,7),_+=3):I==18&&(ye=11+Cn(i,_,127),_+=7);ye--;)D[H++]=oe}}var se=D.subarray(0,P),de=D.subarray(P);R=Jo(se),y=Jo(de),E=Ir(se,R,1),b=Ir(de,y,1)}else pn(1);else{var I=jE(_)+4,L=i[I-4]|i[I-3]<<8,O=I+L;if(O>o){p&&pn(0);break}h&&d(x+L),t.set(i.subarray(I,O),x),e.b=x+=L,e.p=_=O*8,e.f=v;continue}if(_>m){p&&pn(0);break}}h&&d(x+131072);for(var Pe=(1<<R)-1,He=(1<<y)-1,Be=_;;Be=_){var oe=E[Qo(i,_)&Pe],je=oe>>4;if(_+=oe&15,_>m){p&&pn(0);break}if(oe||pn(2),je<256)t[x++]=je;else if(je==256){Be=_,E=null;break}else{var Ye=je-254;if(je>264){var H=je-257,Ke=Wu[H];Ye=Cn(i,_,(1<<Ke)-1)+ju[H],_+=Ke}var le=b[Qo(i,_)&He],_e=le>>4;le||pn(3),_+=le&15;var de=XE[_e];if(_e>3){var Ke=Xu[_e];de+=Qo(i,_)&(1<<Ke)-1,_+=Ke}if(_>m){p&&pn(0);break}h&&d(x+131072);var ue=x+Ye;if(x<de){var Te=a-de,We=Math.min(de,ue);for(Te+x<0&&pn(3);x<We;++x)t[x]=n[Te+x]}for(;x<ue;++x)t[x]=t[x-de]}}e.l=E,e.p=Be,e.b=x,e.f=v,E&&(v=1,e.m=R,e.d=b,e.n=y)}while(!v);return x!=t.length&&c?fl(t,0,x):t.subarray(0,x)},ZE=new _n(0),Hn=function(i,e){return i[e]|i[e+1]<<8},yn=function(i,e){return(i[e]|i[e+1]<<8|i[e+2]<<16|i[e+3]<<24)>>>0},ea=function(i,e){return yn(i,e)+yn(i,e+4)*4294967296};function JE(i,e){return KE(i,{i:2},e&&e.out,e&&e.dictionary)}var Za=typeof TextDecoder<"u"&&new TextDecoder,QE=0;try{Za.decode(ZE,{stream:!0}),QE=1}catch{}var eS=function(i){for(var e="",t=0;;){var n=i[t++],o=(n>127)+(n>223)+(n>239);if(t+o>i.length)return{s:e,r:fl(i,t-1)};o?o==3?(n=((n&15)<<18|(i[t++]&63)<<12|(i[t++]&63)<<6|i[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):o&1?e+=String.fromCharCode((n&31)<<6|i[t++]&63):e+=String.fromCharCode((n&15)<<12|(i[t++]&63)<<6|i[t++]&63):e+=String.fromCharCode(n)}};function tS(i,e){if(e){for(var t="",n=0;n<i.length;n+=16384)t+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return t}else{if(Za)return Za.decode(i);var o=eS(i),a=o.s,t=o.r;return t.length&&pn(8),a}}var nS=function(i,e){return e+30+Hn(i,e+26)+Hn(i,e+28)},iS=function(i,e,t){var n=Hn(i,e+28),o=Hn(i,e+30),a=tS(i.subarray(e+46,e+46+n),!(Hn(i,e+8)&2048)),c=e+46+n,h=rS(i,c,o,t,yn(i,e+20),yn(i,e+24),yn(i,e+42)),p=h[0],d=h[1],v=h[2];return[Hn(i,e+10),p,d,a,c+o+Hn(i,e+32),v]},rS=function(i,e,t,n,o,a,c){var h=o==4294967295,p=a==4294967295,d=c==4294967295,v=e+t,_=h+p+d;if(n&&_){for(;e+4<v;e+=4+Hn(i,e+2))if(Hn(i,e)==1)return[h?ea(i,e+4+8*p):o,p?ea(i,e+4):a,d?ea(i,e+4+8*(p+h)):c,1];n<2&&pn(13)}return[o,a,c,0]};function Ku(i,e){for(var t={},n=i.length-22;yn(i,n)!=101010256;--n)(!n||i.length-n>65558)&&pn(13);var o=Hn(i,n+8);if(!o)return{};var a=yn(i,n+16),c=yn(i,n-20)==117853008;if(c){var h=yn(i,n-12);c=yn(i,h)==101075792,c&&(o=yn(i,h+32),a=yn(i,h+48))}for(var p=0;p<o;++p){var d=iS(i,a,c),v=d[0],_=d[1],x=d[2],E=d[3],b=d[4],R=d[5],y=nS(i,R);a=b,v?v==8?t[E]=JE(i.subarray(y,y+_),{out:new _n(x)}):pn(14,"unknown compression type "+v):t[E]=fl(i,y,y+_)}return t}function sS(i){var y,m;if(i.length<12||String.fromCharCode(...i.subarray(0,6))!=="NUMPY")throw new Error("NPZ 中包含无效的 NPY 数组");const e=new DataView(i.buffer,i.byteOffset,i.byteLength),t=i[6],n=t===1?e.getUint16(8,!0):e.getUint32(8,!0),o=t===1?10:12,a=new TextDecoder(t===3?"utf-8":"latin1").decode(i.subarray(o,o+n)),c=(y=/['"]descr['"]\s*:\s*['"]([^'"]+)['"]/.exec(a))==null?void 0:y[1],h=(m=/['"]shape['"]\s*:\s*\(([^)]*)\)/.exec(a))==null?void 0:m[1];if(!c||h==null||/['"]fortran_order['"]\s*:\s*True/.test(a))throw new Error("不支持的 NPY 数组布局");const p=h.split(",").map(N=>N.trim()).filter(Boolean).map(Number);if(p.some(N=>!Number.isSafeInteger(N)||N<0))throw new Error("NPY 数组形状无效");const d=p.reduce((N,I)=>N*I,1),v=c.slice(1),_=c[0]!==">",E={f4:4,f8:8,i4:4,i8:8,u4:4,u8:8}[v];if(!E||o+n+d*E>i.length)throw new Error(`不支持或损坏的 NPY 数值类型：${c}`);const b=o+n,R=new Float64Array(d);for(let N=0;N<d;N++){const I=b+N*E;v==="f4"?R[N]=e.getFloat32(I,_):v==="f8"?R[N]=e.getFloat64(I,_):v==="i4"?R[N]=e.getInt32(I,_):v==="u4"?R[N]=e.getUint32(I,_):v==="i8"?R[N]=Number(e.getBigInt64(I,_)):R[N]=Number(e.getBigUint64(I,_))}return{shape:p,numbers:R}}function ta(i,e){return i.length===e.length&&i.every((t,n)=>e[n]==null||t===e[n])}function cu(i,e,t){var R;const n=Ku(new Uint8Array(i)),o=y=>n[`${y}.npy`]?sS(n[`${y}.npy`]):null,a=o("fps"),c=a==null?void 0:a.numbers[0];if(!Number.isFinite(c)||c<=0||c>1e3)throw new Error("NPZ 缺少有效的 fps");const h=n["body_pos_w.npy"]&&n["body_quat_w.npy"]&&n["joint_pos.npy"],p=n["body_positions.npy"]&&n["body_rotations.npy"]&&n["dof_positions.npy"];if(!h&&!p)throw new Error("仅支持 S17 tracking 或当前数据集的 raw retarget NPZ");const d=o(h?"body_pos_w":"body_positions"),v=o(h?"body_quat_w":"body_rotations"),_=o(h?"joint_pos":"dof_positions"),x=d.shape[0],E=d.shape[1];if(!Number.isSafeInteger(x)||x<1||x>1e5||!ta(d.shape,[x,E,3])||!ta(v.shape,[x,E,4])||!ta(_.shape,[x,21])||p&&E!==22||((R=e.joint_qposadr)==null?void 0:R.length)!==21)throw new Error("NPZ 帧数、底座或 21 个关节的形状不符合 S17 模型");const b=new Float32Array(x*e.nq);for(let y=0;y<x;y++){const m=y*e.nq;b.set(t,m);const N=y*E*3,I=y*E*4;for(let O=0;O<3;O++)b[m+e.root_qposadr+O]=d.numbers[N+O];const L=Math.hypot(...v.numbers.subarray(I,I+4));if(!Number.isFinite(L)||L<1e-6)throw new Error(`第 ${y+1} 帧四元数无效`);for(let O=0;O<4;O++)b[m+e.root_qposadr+3+O]=v.numbers[I+O]/L;for(let O=0;O<21;O++)b[m+e.joint_qposadr[O]]=_.numbers[y*21+O]}if(!b.every(Number.isFinite))throw new Error("NPZ 中存在 NaN 或无限大数值");return{frames:b,count:x,fps:c}}const Os=9.81,oS=.8;function aS(i){return Math.max(0,Math.min(1,i))}async function lS(i,e,t,n,o){const a=new i.MjData(e),c=new Set(t.foot_body_ids),h=Math.max(2,Math.round(n.fps*.08)),p=n.count-h*2;if(p<1)return a.delete(),null;const d=Math.min(120,p),v=e.body_mass.reduce((O,P)=>O+P,0);let _=0,x=0,E=0,b=0,R=0;function y(O){a.qpos.set(n.frames.subarray(O*t.nq,(O+1)*t.nq)),i.mj_forward(e,a);const P=[0,0,0];for(let z=1;z<e.nbody;z++){const j=e.body_mass[z];for(let D=0;D<3;D++)P[D]+=j*a.xipos[z*3+D]}return P.map(z=>z/v)}try{for(let O=0;O<d;O++){if(o())return null;const P=h+Math.floor(O*p/d),z=y(P-h),j=t.foot_body_ids.map(de=>[a.xpos[de*3],a.xpos[de*3+1]]),D=y(P+h),T=t.foot_body_ids.map(de=>[a.xpos[de*3],a.xpos[de*3+1]]),H=y(P),Z=h/n.fps,ie=H.map((de,Pe)=>(z[Pe]-2*de+D[Pe])/(Z*Z)),te=new Set;let fe=0;const oe=a.contact;for(let de=0;de<oe.size();de++){const Pe=oe.get(de),[He,Be]=Pe.geom,je=He===t.floor_geom_id?Be:Be===t.floor_geom_id?He:-1;je>=0&&c.has(e.geom_bodyid[je])&&(te.add(e.geom_bodyid[je]),fe=Math.max(fe,-Pe.dist)),Pe.delete()}oe.delete();const ye=Math.hypot(ie[0],ie[1]),se=ie[2]+Os;if(te.size){const de=Math.max(0,se),Pe=Math.max(0,-se)/Os,He=Math.max(0,ye-oS*de)/Os;_+=Math.exp(-Pe-He);let Be=0;for(const je of te){const Ye=t.foot_body_ids.indexOf(je);Be=Math.max(Be,Math.hypot(T[Ye][0]-j[Ye][0],T[Ye][1]-j[Ye][1])/(2*Z))}R=Math.max(R,Be),x+=Math.exp(-Math.max(0,Be-.08)/.5),b++}else _+=Math.exp(-Math.hypot(ye,se)/Os),x+=1;E+=Math.exp(-Math.max(0,fe-.005)/.04),O%12===11&&await new Promise(de=>setTimeout(de,0))}}finally{a.delete()}const m=_/d,N=x/d,I=E/d;return{score:Math.round(100*aS(.65*m+.25*N+.1*I)),sampleCount:d,force:m,slip:N,penetration:I,contactSamples:b,worstSlip:R}}const Fr=document.querySelector("#status"),na=document.querySelector("#viewport"),nr=document.querySelector("#toggle"),ia=document.querySelector("#prevFrame"),ra=document.querySelector("#nextFrame"),ir=document.querySelector("#seek"),cS=document.querySelector("#time"),uS=document.querySelector("#frame"),rr=document.querySelector("#contactToggle"),Di=document.querySelector("#motionList"),ui=document.querySelector("#libraryStatus"),ks=document.querySelector("#baseHeight"),Bs=document.querySelector("#credibility"),Dr=document.querySelector("#credibilityScore"),sa=document.querySelector("#footHeightChart"),oa=document.querySelector("#imuRollChart");function hS(i){return new Promise((e,t)=>i.readEntries(e,t))}async function Zu(i,e=""){if(i.isFile){const o=await new Promise((a,c)=>i.file(a,c));return o.name.toLowerCase().endsWith(".npz")?[{file:o,path:e+o.name}]:[]}if(!i.isDirectory)return[];const t=i.createReader(),n=[];for(;;){const o=await hS(t);if(!o.length)break;for(const a of o)n.push(...await Zu(a,`${e}${i.name}/`))}return n}async function sr(i,e="arrayBuffer"){const t=new URL(`./${i}`,document.baseURI),n=i.startsWith("model/")?"s17-model-v2":new URL(import.meta.url).pathname;t.searchParams.set("v",n);const o=await fetch(t);if(!o.ok)throw new Error(`${i}: HTTP ${o.status}`);return o[e]()}function fS(i,e){const t=i.mesh_vertadr[e]*3,n=i.mesh_vertnum[e],o=i.mesh_faceadr[e]*3,a=i.mesh_facenum[e],c=Float32Array.from(i.mesh_vert.subarray(t,t+n*3)),h=Uint32Array.from(i.mesh_face.subarray(o,o+a*3)),p=new In;return p.setAttribute("position",new Mn(c,3)),p.setIndex(new Mn(h,1)),p.computeVertexNormals(),p}function uu(i=""){return{name:i,folders:new Map,files:[]}}function dS(i){const e=uu();for(const t of i){const n=t.path.split("/").filter(Boolean);let o=e;for(const a of n.slice(0,-1))o.folders.has(a)||o.folders.set(a,uu(a)),o=o.folders.get(a);o.files.push(t)}return e}function Ju(i){return i.files.length+Array.from(i.folders.values()).reduce((e,t)=>e+Ju(t),0)}async function pS(){Fr.textContent="正在并行加载 MuJoCo 与机器人资源…";const i=sr("motion/meta.json","json"),e=sr("motion/frames.bin"),t=zE(),n=sr("model/xml/scene_flat.xml","text"),o=sr("model/xml/biped_s17.xml","text"),a=sr("model/meshes.zip"),[c,h,p,d,v,_]=await Promise.all([i,e,t,n,o,a]),x=new Float32Array(h);if(x.length!==c.frames*c.nq)throw new Error("动作数据长度与元数据不一致");Fr.textContent="正在初始化机器人模型…";for(const B of["/working","/working/xml","/working/meshes"])p.FS.mkdir(B);p.FS.writeFile("/working/xml/scene_flat.xml",d),p.FS.writeFile("/working/xml/biped_s17.xml",v);const E=Ku(new Uint8Array(_));for(const B of c.meshes){const Q=E[B];if(!Q)throw new Error(`机器人网格压缩包缺少 ${B}`);p.FS.writeFile(`/working/meshes/${B}`,new Uint8Array(Q))}const b=p.MjModel.mj_loadXML("/working/xml/scene_flat.xml"),R=new p.MjData(b);if(b.nq!==c.nq)throw new Error(`模型 nq=${b.nq}，动作 nq=${c.nq}`);const y=Float32Array.from(R.qpos),m=new wg;m.background=new dt("#2d3a48"),m.add(new Fg(15135231,3820646,2));const N=new Ng(16777215,2.4);N.position.set(-2,-3,6),m.add(N);const I=new Sn(new Wr(200,200),new Dc({color:4412771,roughness:1}));I.position.z=-.004,m.add(I);const L=new kg(20,40,8956349,5796743);L.rotateX(Math.PI/2),L.position.z=.001,m.add(L);const O=new En(45,1,.02,100);O.up.set(0,0,1),O.position.set(2.1,-2.8,1.8);const P=new SE({antialias:!0});P.setPixelRatio(Math.min(window.devicePixelRatio,2)),P.outputColorSpace=mn,na.appendChild(P.domElement);const z=new TE(O,P.domElement);z.target.set(0,0,.85),z.enableDamping=!0,z.update();const j=new rt(0,0),D=()=>{const{width:B,height:Q}=na.getBoundingClientRect();P.setSize(B,Q,!1),O.aspect=B/Q,O.updateProjectionMatrix()};new ResizeObserver(D).observe(na),D();const T=new Map,H=[],Z=p.mjtGeom.mjGEOM_MESH.value;for(let B=0;B<b.ngeom;B++){if(b.geom_type[B]!==Z||b.geom_group[B]!==1)continue;const Q=b.geom_dataid[B];T.has(Q)||T.set(Q,fS(b,Q));const $=Array.from(b.geom_rgba.subarray(B*4,B*4+4)),ve=new Dc({color:new dt($[0],$[1],$[2]),roughness:.65,metalness:.12,side:Pn}),me=new Sn(T.get(Q),ve);m.add(me),H.push([B,me])}if(!H.length)throw new Error("模型没有可显示的 S17 网格");const ie=new cl(.016,.016,.004,18);ie.rotateX(Math.PI/2);const te=new al({color:16767830,side:Pn}),fe=[],oe=new Set(c.foot_body_ids);let ye=!0;function se(){for(const $ of fe)$.visible=!1;if(!ye)return;const B=R.contact;let Q=0;for(let $=0;$<B.size();$++){const ve=B.get($),[me,Ie]=ve.geom,Re=me===c.floor_geom_id?Ie:Ie===c.floor_geom_id?me:-1;if(Re>=0&&oe.has(b.geom_bodyid[Re])){if(!fe[Q]){const he=new Sn(ie,te);he.renderOrder=2,m.add(he),fe.push(he)}const pe=ve.pos;fe[Q].position.set(pe[0],pe[1],Math.max(.003,pe[2]+.004)),fe[Q].visible=!0,Q++}ve.delete()}B.delete(),rr.textContent=`接触点：开 (C) · ${Q}`}let de={frames:x,count:c.frames,fps:c.fps,name:c.source},Pe=.77,He=0,Be=0,je=!1,Ye=performance.now(),Ke=0,le=null,_e=0;function ue(B,Q,$){var st;const ve=(st=Q[0])==null?void 0:st.values;if(!(ve!=null&&ve.length))return;const me=B.getBoundingClientRect();if(!me.width||!me.height)return;const Ie=Math.min(window.devicePixelRatio,2),Re=Math.round(me.width*Ie),pe=Math.round(me.height*Ie);(B.width!==Re||B.height!==pe)&&(B.width=Re,B.height=pe);const he=B.getContext("2d");he.setTransform(Ie,0,0,Ie,0,0),he.clearRect(0,0,me.width,me.height);const Le={left:4,right:4,top:15,bottom:16},De=me.width-Le.left-Le.right,Ce=me.height-Le.top-Le.bottom,Ze=$==="m"?Pe-le.baseHeight:0;let G=1/0,xe=-1/0;for(const Rt of Q)for(const St of Rt.values)G=Math.min(G,St+Ze),xe=Math.max(xe,St+Ze);const be=Math.max(xe-G,$==="m"?.02:2);G-=be*.12,xe+=be*.12;const Fe=Rt=>Le.left+Rt/Math.max(1,ve.length-1)*De,W=Rt=>Le.top+(xe-(Rt+Ze))/(xe-G)*Ce;he.strokeStyle="#dce9f0",he.lineWidth=1;for(let Rt=0;Rt<=2;Rt++){const St=Le.top+Ce*Rt/2;he.beginPath(),he.moveTo(Le.left,St),he.lineTo(me.width-Le.right,St),he.stroke()}const V=Math.max(1,Math.ceil(ve.length/Math.max(1,De*2)));for(const Rt of Q){he.strokeStyle=Rt.color,he.lineWidth=1.6,he.beginPath();for(let St=0;St<Rt.values.length;St+=V){const Un=Fe(St),gn=W(Rt.values[St]);St===0?he.moveTo(Un,gn):he.lineTo(Un,gn)}he.lineTo(Fe(Rt.values.length-1),W(Rt.values[Rt.values.length-1])),he.stroke()}const Oe=Fe(Math.min(Be,ve.length-1));he.strokeStyle="#ed8b46",he.lineWidth=1,he.beginPath(),he.moveTo(Oe,Le.top),he.lineTo(Oe,Le.top+Ce),he.stroke(),he.fillStyle="#718899",he.font="10px system-ui",he.fillText(`${xe.toFixed($==="m"?2:0)} ${$}`,Le.left,10);const nt=(ve.length-1)/de.fps;he.fillText("0",Le.left,me.height-3);const pt=`${nt.toFixed(1)} s`;he.fillText(pt,me.width-Le.right-he.measureText(pt).width,me.height-3)}function Te(){le&&(ue(sa,[{values:le.leftFootZ,color:"#388ab8"},{values:le.rightFootZ,color:"#465b6b"}],"m"),ue(oa,[{values:le.roll,color:"#ed8b46"}],"°"))}async function We(){const B=++_e,Q=de,$=Pe,ve=new p.MjData(b),[me,Ie]=c.foot_body_ids,Re=new Float32Array(Q.count),pe=new Float32Array(Q.count),he=new Float32Array(Q.count),Le=c.root_qposadr+2;try{for(let De=0;De<Q.count;De++){if(B!==_e)return;const Ce=De*c.nq;ve.qpos.set(Q.frames.subarray(Ce,Ce+c.nq)),ve.qpos[Le]+=$-Q.frames[Ce+Le],p.mj_forward(b,ve),Re[De]=ve.xpos[me*3+2],pe[De]=ve.xpos[Ie*3+2];const Ze=ve.qpos[c.root_qposadr+3],G=ve.qpos[c.root_qposadr+4],xe=ve.qpos[c.root_qposadr+5],be=ve.qpos[c.root_qposadr+6];he[De]=Math.atan2(2*(Ze*G+xe*be),1-2*(G*G+xe*xe))*180/Math.PI,De%32===31&&await new Promise(Fe=>setTimeout(Fe,0))}if(B!==_e)return;le={leftFootZ:Re,rightFootZ:pe,roll:he,baseHeight:$},Te()}finally{ve.delete()}}new ResizeObserver(Te).observe(sa),new ResizeObserver(Te).observe(oa);let it=0,vt;async function k(){const B=++it,Q=de;Dr.textContent="…",Bs.title="正在抽样评估动作…",await new Promise($=>setTimeout($,0));try{const $=await lS(p,b,c,Q,()=>B!==it);if(B!==it)return;if(!$){Dr.textContent="—",Bs.title="动作太短，无法估计加速度";return}Dr.textContent=`${$.score}%`,Bs.title=`抽样 ${$.sampleCount} 帧 · 浮动机身受力 ${Math.round($.force*100)}% · 脚底防滑 ${Math.round($.slip*100)}% · 穿地检查 ${Math.round($.penetration*100)}% · 接触帧 ${$.contactSamples}/${$.sampleCount}。仅供参考，非严格动力学验证。`}catch($){if(B!==it)return;console.error("动力学可信度评估失败",$),Dr.textContent="—",Bs.title=`评估失败：${$.message}`}}function xt(){it++,_e++,le=null,Dr.textContent="…";for(const B of[sa,oa]){const Q=B.getContext("2d");Q.setTransform(1,0,0,1,0,0),Q.clearRect(0,0,B.width,B.height)}clearTimeout(vt),vt=setTimeout(()=>{k(),We()},80)}ir.max=String(de.count-1),ir.disabled=!1,nr.disabled=!1,ia.disabled=!1,ra.disabled=!1,rr.disabled=!1,Fr.textContent=`${de.name} · ${de.fps} FPS · ${H.length} 个网格`,Di.querySelector("[data-default]").textContent=`内置示例 · ${c.source}`;function Qe(){R.qpos.set(de.frames.subarray(Be*c.nq,(Be+1)*c.nq));const B=c.root_qposadr+2,Q=Pe-de.frames[B];R.qpos[B]+=Q,p.mj_forward(b,R);const $=R.qpos[0]-j.x,ve=R.qpos[1]-j.y;O.position.x+=$,O.position.y+=ve,z.target.x+=$,z.target.y+=ve,j.set(R.qpos[0],R.qpos[1]);const me=Q-He;O.position.z+=me,z.target.z+=me,He=Q;for(const[Ie,Re]of H){const pe=Ie*3,he=Ie*9,Le=R.geom_xpos,De=R.geom_xmat;Re.matrixAutoUpdate=!1,Re.matrix.set(De[he],De[he+1],De[he+2],Le[pe],De[he+3],De[he+4],De[he+5],Le[pe+1],De[he+6],De[he+7],De[he+8],Le[pe+2],0,0,0,1),Re.matrixWorldNeedsUpdate=!0}se(),ir.value=String(Be),cS.textContent=`${(Be/de.fps).toFixed(2)} / ${((de.count-1)/de.fps).toFixed(2)} s`,uS.textContent=`${Be+1} / ${de.count}`,ia.disabled=Be===0,ra.disabled=Be===de.count-1,Te()}function $e(B){je=B,nr.classList.toggle("is-playing",je),nr.setAttribute("aria-label",je?"暂停（空格）":"播放（空格）"),nr.setAttribute("title",je?"暂停（空格）":"播放（空格）"),nr.setAttribute("aria-pressed",String(je)),Ye=performance.now(),Ke=0}function Ve(B){$e(!1),Be=Math.max(0,Math.min(de.count-1,Be+B)),Qe()}nr.addEventListener("click",()=>$e(!je)),ia.addEventListener("click",()=>Ve(-1)),ra.addEventListener("click",()=>Ve(1)),rr.addEventListener("click",()=>{ye=!ye,rr.setAttribute("aria-pressed",String(ye)),rr.textContent=ye?"接触点：开 (C)":"接触点：关 (C)",se()}),ks.addEventListener("change",()=>{const B=Number(ks.value);if(!ks.value||!Number.isFinite(B)||B<0||B>3){ks.value=String(Pe);return}Pe=B,Qe(),Te()}),ir.addEventListener("input",()=>{$e(!1),Be=Number(ir.value),Qe()}),window.addEventListener("keydown",B=>{B.target instanceof HTMLInputElement||(B.code==="Space"&&(B.preventDefault(),B.repeat||$e(!je)),B.code==="KeyC"&&rr.click(),(B.code==="ArrowRight"||B.code==="ArrowLeft")&&(B.preventDefault(),Ve(B.code==="ArrowRight"?1:-1)))});let _t=0;function ze(B,Q,$,ve){de={...B,name:Q},Be=0,ir.max=String(de.count-1),Fr.textContent=`${de.name} · ${de.fps} FPS · ${H.length} 个网格`,Di.querySelectorAll("button").forEach(me=>me.classList.remove("active")),$.classList.add("active"),Qe(),$e(!0),ui.textContent=ve,xt()}async function tt(B,Q){const $=++_t;$e(!1),ui.textContent=`正在读取 ${B.path}…`;try{const ve=await cu(await B.file.arrayBuffer(),c,y);if($!==_t)return;ze(ve,B.file.name,Q,`已加载 ${ve.count} 帧 · ${B.path}`)}catch(ve){if($!==_t)return;console.error(ve),ui.textContent=`加载失败：${ve.message}`}}function At(B){const Q=B.filter(Re=>Re.file.name.toLowerCase().endsWith(".npz")).sort((Re,pe)=>Re.path.localeCompare(pe.path,"zh-CN"));Di.querySelectorAll("[data-local]").forEach(Re=>Re.remove());const $=(Re,pe)=>Re.localeCompare(pe,"zh-CN",{numeric:!0});function ve(Re,pe){const he=document.createElement("li"),Le=document.createElement("button");return Le.textContent=pe.file.name,Le.title=pe.path,Le.addEventListener("click",()=>tt(pe,Le)),he.appendChild(Le),Re.appendChild(he),he}function me(Re,pe,he){const Le=document.createElement("li"),De=document.createElement("details");De.open=he===0;const Ce=document.createElement("summary");Ce.append(document.createTextNode(pe.name));const Ze=document.createElement("span");Ze.className="count",Ze.textContent=String(Ju(pe)),Ce.appendChild(Ze),De.appendChild(Ce);const G=document.createElement("ul");for(const xe of Array.from(pe.folders.values()).sort((be,Fe)=>$(be.name,Fe.name)))me(G,xe,he+1);for(const xe of pe.files.sort((be,Fe)=>$(be.file.name,Fe.file.name)))ve(G,xe);return De.appendChild(G),Le.appendChild(De),Re.appendChild(Le),Le}const Ie=dS(Q);for(const Re of Array.from(Ie.folders.values()).sort((pe,he)=>$(pe.name,he.name)))me(Di,Re,0).dataset.local="true";for(const Re of Ie.files.sort((pe,he)=>$(pe.file.name,he.file.name)))ve(Di,Re).dataset.local="true";ui.textContent=Q.length?`找到 ${Q.length} 个 NPZ，点击文件名播放`:"没有找到 NPZ 文件"}const Et=document.querySelector("#fileInput"),U=document.querySelector("#folderInput");document.querySelector("#chooseFiles").addEventListener("click",()=>Et.click()),document.querySelector("#chooseFolder").addEventListener("click",()=>U.click());for(const B of[Et,U])B.addEventListener("change",()=>{At(Array.from(B.files,Q=>({file:Q,path:Q.webkitRelativePath||Q.name}))),B.value=""});window.addEventListener("dragover",B=>{B.preventDefault(),document.body.classList.add("dragging")}),window.addEventListener("dragleave",B=>{B.relatedTarget||document.body.classList.remove("dragging")}),window.addEventListener("drop",async B=>{B.preventDefault(),document.body.classList.remove("dragging");const Q=Array.from(B.dataTransfer.items,$=>{var ve;return(ve=$.webkitGetAsEntry)==null?void 0:ve.call($)}).filter(Boolean);if(!Q.length){At(Array.from(B.dataTransfer.files,$=>({file:$,path:$.name})));return}ui.textContent="正在扫描文件夹…";try{const $=(await Promise.all(Q.map(ve=>Zu(ve)))).flat();At($)}catch($){ui.textContent=`读取文件夹失败：${$.message}`}}),Di.querySelector("[data-default]").addEventListener("click",B=>{_t++,ze({frames:x,count:c.frames,fps:c.fps},c.source,B.currentTarget,"内置示例已就绪")});let A;Di.querySelector("[data-second]").addEventListener("click",async B=>{const Q=B.currentTarget,$=++_t;$e(!1),ui.textContent="正在读取 105_50fps.npz…";try{A??(A=sr("motion/105_50fps.npz").then(me=>cu(me,c,y)));const ve=await A;if($!==_t)return;ze(ve,"105_50fps.npz",Q,`已加载 ${ve.count} 帧 · 内置示例`)}catch(ve){if(A=null,$!==_t)return;console.error(ve),ui.textContent=`加载失败：${ve.message}`}}),Qe(),$e(!0);function q(B){if(requestAnimationFrame(q),je){Ke+=Math.min((B-Ye)/1e3,.25);const Q=Math.floor(Ke*de.fps);Q&&(Be=(Be+Q)%de.count,Ke-=Q/de.fps,Qe())}Ye=B,z.update(),P.render(m,O)}requestAnimationFrame(q),xt()}pS().catch(i=>{console.error(i),Fr.textContent=`加载失败：${i.message}`});const mS=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));

var Qm=Object.defineProperty;var e_=(i,e,t)=>e in i?Qm(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Tn=(i,e,t)=>e_(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xo="180",or={ROTATE:0,DOLLY:1,PAN:2},rr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},t_=0,Kl=1,n_=2,iu=1,i_=2,Jn=3,pi=0,ln=1,Cn=2,fi=0,lr=1,Zl=2,Jl=3,Ql=4,r_=5,Ii=100,s_=101,a_=102,o_=103,l_=104,c_=200,u_=201,h_=202,f_=203,Qa=204,eo=205,d_=206,p_=207,m_=208,__=209,g_=210,v_=211,x_=212,E_=213,y_=214,to=0,no=1,io=2,ur=3,ro=4,so=5,ao=6,oo=7,ru=0,S_=1,M_=2,di=0,T_=1,w_=2,b_=3,A_=4,R_=5,C_=6,P_=7,su=300,hr=301,fr=302,lo=303,co=304,js=306,uo=1e3,Ni=1001,ho=1002,Ln=1003,D_=1004,us=1005,zn=1006,pa=1007,Oi=1008,Vn=1009,au=1010,ou=1011,Fr=1012,$o=1013,ki=1014,Qn=1015,kr=1016,jo=1017,qo=1018,Ir=1020,lu=35902,cu=35899,uu=1021,hu=1022,Dn=1023,Ur=1026,Nr=1027,fu=1028,Yo=1029,du=1030,Ko=1031,Zo=1033,Ns=33776,Os=33777,ks=33778,Bs=33779,fo=35840,po=35841,mo=35842,_o=35843,go=36196,vo=37492,xo=37496,Eo=37808,yo=37809,So=37810,Mo=37811,To=37812,wo=37813,bo=37814,Ao=37815,Ro=37816,Co=37817,Po=37818,Do=37819,Lo=37820,Fo=37821,Io=36492,Uo=36494,No=36495,Oo=36283,ko=36284,Bo=36285,zo=36286,L_=3200,F_=3201,pu=0,I_=1,hi="",pn="srgb",dr="srgb-linear",Vs="linear",Rt="srgb",Gi=7680,ec=519,U_=512,N_=513,O_=514,mu=515,k_=516,B_=517,z_=518,H_=519,tc=35044,nc="300 es",Hn=2e3,Gs=2001;class Hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const a=n[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let o=0,u=a.length;o<u;o++)a[o].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zs=Math.PI/180,Ho=180/Math.PI;function Br(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function pt(i,e,t){return Math.max(e,Math.min(t,i))}function V_(i,e){return(i%e+e)%e}function ma(i,e,t){return(1-t)*i+t*e}function Mr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function an(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const G_={DEG2RAD:zs};class rt{constructor(e=0,t=0){rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),o=this.x-e.x,u=this.y-e.y;return this.x=o*n-u*a+e.x,this.y=o*a+u*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bi{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,o,u,h){let p=n[a+0],d=n[a+1],v=n[a+2],_=n[a+3];const x=o[u+0],E=o[u+1],A=o[u+2],R=o[u+3];if(h===0){e[t+0]=p,e[t+1]=d,e[t+2]=v,e[t+3]=_;return}if(h===1){e[t+0]=x,e[t+1]=E,e[t+2]=A,e[t+3]=R;return}if(_!==R||p!==x||d!==E||v!==A){let y=1-h;const m=p*x+d*E+v*A+_*R,O=m>=0?1:-1,I=1-m*m;if(I>Number.EPSILON){const B=Math.sqrt(I),D=Math.atan2(B,m*O);y=Math.sin(y*D)/B,h=Math.sin(h*D)/B}const F=h*O;if(p=p*y+x*F,d=d*y+E*F,v=v*y+A*F,_=_*y+R*F,y===1-h){const B=1/Math.sqrt(p*p+d*d+v*v+_*_);p*=B,d*=B,v*=B,_*=B}}e[t]=p,e[t+1]=d,e[t+2]=v,e[t+3]=_}static multiplyQuaternionsFlat(e,t,n,a,o,u){const h=n[a],p=n[a+1],d=n[a+2],v=n[a+3],_=o[u],x=o[u+1],E=o[u+2],A=o[u+3];return e[t]=h*A+v*_+p*E-d*x,e[t+1]=p*A+v*x+d*_-h*E,e[t+2]=d*A+v*E+h*x-p*_,e[t+3]=v*A-h*_-p*x-d*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,o=e._z,u=e._order,h=Math.cos,p=Math.sin,d=h(n/2),v=h(a/2),_=h(o/2),x=p(n/2),E=p(a/2),A=p(o/2);switch(u){case"XYZ":this._x=x*v*_+d*E*A,this._y=d*E*_-x*v*A,this._z=d*v*A+x*E*_,this._w=d*v*_-x*E*A;break;case"YXZ":this._x=x*v*_+d*E*A,this._y=d*E*_-x*v*A,this._z=d*v*A-x*E*_,this._w=d*v*_+x*E*A;break;case"ZXY":this._x=x*v*_-d*E*A,this._y=d*E*_+x*v*A,this._z=d*v*A+x*E*_,this._w=d*v*_-x*E*A;break;case"ZYX":this._x=x*v*_-d*E*A,this._y=d*E*_+x*v*A,this._z=d*v*A-x*E*_,this._w=d*v*_+x*E*A;break;case"YZX":this._x=x*v*_+d*E*A,this._y=d*E*_+x*v*A,this._z=d*v*A-x*E*_,this._w=d*v*_-x*E*A;break;case"XZY":this._x=x*v*_-d*E*A,this._y=d*E*_-x*v*A,this._z=d*v*A+x*E*_,this._w=d*v*_+x*E*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],o=t[8],u=t[1],h=t[5],p=t[9],d=t[2],v=t[6],_=t[10],x=n+h+_;if(x>0){const E=.5/Math.sqrt(x+1);this._w=.25/E,this._x=(v-p)*E,this._y=(o-d)*E,this._z=(u-a)*E}else if(n>h&&n>_){const E=2*Math.sqrt(1+n-h-_);this._w=(v-p)/E,this._x=.25*E,this._y=(a+u)/E,this._z=(o+d)/E}else if(h>_){const E=2*Math.sqrt(1+h-n-_);this._w=(o-d)/E,this._x=(a+u)/E,this._y=.25*E,this._z=(p+v)/E}else{const E=2*Math.sqrt(1+_-n-h);this._w=(u-a)/E,this._x=(o+d)/E,this._y=(p+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,o=e._z,u=e._w,h=t._x,p=t._y,d=t._z,v=t._w;return this._x=n*v+u*h+a*d-o*p,this._y=a*v+u*p+o*h-n*d,this._z=o*v+u*d+n*p-a*h,this._w=u*v-n*h-a*p-o*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,a=this._y,o=this._z,u=this._w;let h=u*e._w+n*e._x+a*e._y+o*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=u,this._x=n,this._y=a,this._z=o,this;const p=1-h*h;if(p<=Number.EPSILON){const E=1-t;return this._w=E*u+t*this._w,this._x=E*n+t*this._x,this._y=E*a+t*this._y,this._z=E*o+t*this._z,this.normalize(),this}const d=Math.sqrt(p),v=Math.atan2(d,h),_=Math.sin((1-t)*v)/d,x=Math.sin(t*v)/d;return this._w=u*_+this._w*x,this._x=n*_+this._x*x,this._y=a*_+this._y*x,this._z=o*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,n=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ic.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ic.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*a,this.y=o[1]*t+o[4]*n+o[7]*a,this.z=o[2]*t+o[5]*n+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,o=e.elements,u=1/(o[3]*t+o[7]*n+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*a+o[12])*u,this.y=(o[1]*t+o[5]*n+o[9]*a+o[13])*u,this.z=(o[2]*t+o[6]*n+o[10]*a+o[14])*u,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,o=e.x,u=e.y,h=e.z,p=e.w,d=2*(u*a-h*n),v=2*(h*t-o*a),_=2*(o*n-u*t);return this.x=t+p*d+u*_-h*v,this.y=n+p*v+h*d-o*_,this.z=a+p*_+o*v-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*a,this.y=o[1]*t+o[5]*n+o[9]*a,this.z=o[2]*t+o[6]*n+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,o=e.z,u=t.x,h=t.y,p=t.z;return this.x=a*p-o*h,this.y=o*u-n*p,this.z=n*h-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _a.copy(this).projectOnVector(e),this.sub(_a)}reflect(e){return this.sub(_a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _a=new J,ic=new Bi;class ot{constructor(e,t,n,a,o,u,h,p,d){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,o,u,h,p,d)}set(e,t,n,a,o,u,h,p,d){const v=this.elements;return v[0]=e,v[1]=a,v[2]=h,v[3]=t,v[4]=o,v[5]=p,v[6]=n,v[7]=u,v[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,o=this.elements,u=n[0],h=n[3],p=n[6],d=n[1],v=n[4],_=n[7],x=n[2],E=n[5],A=n[8],R=a[0],y=a[3],m=a[6],O=a[1],I=a[4],F=a[7],B=a[2],D=a[5],H=a[8];return o[0]=u*R+h*O+p*B,o[3]=u*y+h*I+p*D,o[6]=u*m+h*F+p*H,o[1]=d*R+v*O+_*B,o[4]=d*y+v*I+_*D,o[7]=d*m+v*F+_*H,o[2]=x*R+E*O+A*B,o[5]=x*y+E*I+A*D,o[8]=x*m+E*F+A*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],u=e[4],h=e[5],p=e[6],d=e[7],v=e[8];return t*u*v-t*h*d-n*o*v+n*h*p+a*o*d-a*u*p}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],u=e[4],h=e[5],p=e[6],d=e[7],v=e[8],_=v*u-h*d,x=h*p-v*o,E=d*o-u*p,A=t*_+n*x+a*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=_*R,e[1]=(a*d-v*n)*R,e[2]=(h*n-a*u)*R,e[3]=x*R,e[4]=(v*t-a*p)*R,e[5]=(a*o-h*t)*R,e[6]=E*R,e[7]=(n*p-d*t)*R,e[8]=(u*t-n*o)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,o,u,h){const p=Math.cos(o),d=Math.sin(o);return this.set(n*p,n*d,-n*(p*u+d*h)+u+e,-a*d,a*p,-a*(-d*u+p*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(ga.makeScale(e,t)),this}rotate(e){return this.premultiply(ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(ga.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ga=new ot;function _u(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ws(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function W_(){const i=Ws("canvas");return i.style.display="block",i}const rc={};function Or(i){i in rc||(rc[i]=!0,console.warn(i))}function X_(i,e,t){return new Promise(function(n,a){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}const sc=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ac=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $_(){const i={enabled:!0,workingColorSpace:dr,spaces:{},convert:function(a,o,u){return this.enabled===!1||o===u||!o||!u||(this.spaces[o].transfer===Rt&&(a.r=ei(a.r),a.g=ei(a.g),a.b=ei(a.b)),this.spaces[o].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Rt&&(a.r=cr(a.r),a.g=cr(a.g),a.b=cr(a.b))),a},workingToColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},colorSpaceToWorking:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===hi?Vs:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,u){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,o){return Or("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,o)},toWorkingColorSpace:function(a,o){return Or("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[dr]:{primaries:e,whitePoint:n,transfer:Vs,toXYZ:sc,fromXYZ:ac,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:e,whitePoint:n,transfer:Rt,toXYZ:sc,fromXYZ:ac,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),i}const Et=$_();function ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Wi;class j_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Wi===void 0&&(Wi=Ws("canvas")),Wi.width=e.width,Wi.height=e.height;const a=Wi.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),n=Wi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ws("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),o=a.data;for(let u=0;u<o.length;u++)o[u]=ei(o[u]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ei(t[n]/255)*255):t[n]=ei(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let q_=0;class Jo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=Br(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let u=0,h=a.length;u<h;u++)a[u].isDataTexture?o.push(va(a[u].image)):o.push(va(a[u]))}else o=va(a);n.url=o}return t||(e.images[this.uuid]=n),n}}function va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?j_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Y_=0;const xa=new J;class cn extends Hi{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,n=Ni,a=Ni,o=zn,u=Oi,h=Dn,p=Vn,d=cn.DEFAULT_ANISOTROPY,v=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=Br(),this.name="",this.source=new Jo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=o,this.minFilter=u,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=p,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xa).x}get height(){return this.source.getSize(xa).y}get depth(){return this.source.getSize(xa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}a&&n&&a.isVector2&&n.isVector2||a&&n&&a.isVector3&&n.isVector3||a&&n&&a.isMatrix3&&n.isMatrix3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==su)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uo:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uo:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=su;cn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,n=0,a=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,o=this.w,u=e.elements;return this.x=u[0]*t+u[4]*n+u[8]*a+u[12]*o,this.y=u[1]*t+u[5]*n+u[9]*a+u[13]*o,this.z=u[2]*t+u[6]*n+u[10]*a+u[14]*o,this.w=u[3]*t+u[7]*n+u[11]*a+u[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,o;const p=e.elements,d=p[0],v=p[4],_=p[8],x=p[1],E=p[5],A=p[9],R=p[2],y=p[6],m=p[10];if(Math.abs(v-x)<.01&&Math.abs(_-R)<.01&&Math.abs(A-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(_+R)<.1&&Math.abs(A+y)<.1&&Math.abs(d+E+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(d+1)/2,F=(E+1)/2,B=(m+1)/2,D=(v+x)/4,H=(_+R)/4,q=(A+y)/4;return I>F&&I>B?I<.01?(n=0,a=.707106781,o=.707106781):(n=Math.sqrt(I),a=D/n,o=H/n):F>B?F<.01?(n=.707106781,a=0,o=.707106781):(a=Math.sqrt(F),n=D/a,o=q/a):B<.01?(n=.707106781,a=.707106781,o=0):(o=Math.sqrt(B),n=H/o,a=q/o),this.set(n,a,o,t),this}let O=Math.sqrt((y-A)*(y-A)+(_-R)*(_-R)+(x-v)*(x-v));return Math.abs(O)<.001&&(O=1),this.x=(y-A)/O,this.y=(_-R)/O,this.z=(x-v)/O,this.w=Math.acos((d+E+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class K_ extends Hi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const a={width:e,height:t,depth:n.depth},o=new cn(a);this.textures=[];const u=n.count;for(let h=0;h<u;h++)this.textures[h]=o.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Jo(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends K_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class gu extends cn{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Z_ extends cn{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zr{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=o.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,wn):wn.fromBufferAttribute(o,u),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hs.copy(n.boundingBox)),hs.applyMatrix4(e.matrixWorld),this.union(hs)}const a=e.children;for(let o=0,u=a.length;o<u;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tr),fs.subVectors(this.max,Tr),Xi.subVectors(e.a,Tr),$i.subVectors(e.b,Tr),ji.subVectors(e.c,Tr),ni.subVectors($i,Xi),ii.subVectors(ji,$i),wi.subVectors(Xi,ji);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-wi.z,wi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,wi.z,0,-wi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-wi.y,wi.x,0];return!Ea(t,Xi,$i,ji,fs)||(t=[1,0,0,0,1,0,0,0,1],!Ea(t,Xi,$i,ji,fs))?!1:(ds.crossVectors(ni,ii),t=[ds.x,ds.y,ds.z],Ea(t,Xi,$i,ji,fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const jn=[new J,new J,new J,new J,new J,new J,new J,new J],wn=new J,hs=new zr,Xi=new J,$i=new J,ji=new J,ni=new J,ii=new J,wi=new J,Tr=new J,fs=new J,ds=new J,bi=new J;function Ea(i,e,t,n,a){for(let o=0,u=i.length-3;o<=u;o+=3){bi.fromArray(i,o);const h=a.x*Math.abs(bi.x)+a.y*Math.abs(bi.y)+a.z*Math.abs(bi.z),p=e.dot(bi),d=t.dot(bi),v=n.dot(bi);if(Math.max(-Math.max(p,d,v),Math.min(p,d,v))>h)return!1}return!0}const J_=new zr,wr=new J,ya=new J;class qs{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):J_.setFromPoints(e).getCenter(n);let a=0;for(let o=0,u=e.length;o<u;o++)a=Math.max(a,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wr.subVectors(e,this.center);const t=wr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(wr,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wr.copy(e.center).add(ya)),this.expandByPoint(wr.copy(e.center).sub(ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const qn=new J,Sa=new J,ps=new J,ri=new J,Ma=new J,ms=new J,Ta=new J;class Qo{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){Sa.copy(e).add(t).multiplyScalar(.5),ps.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(Sa);const o=e.distanceTo(t)*.5,u=-this.direction.dot(ps),h=ri.dot(this.direction),p=-ri.dot(ps),d=ri.lengthSq(),v=Math.abs(1-u*u);let _,x,E,A;if(v>0)if(_=u*p-h,x=u*h-p,A=o*v,_>=0)if(x>=-A)if(x<=A){const R=1/v;_*=R,x*=R,E=_*(_+u*x+2*h)+x*(u*_+x+2*p)+d}else x=o,_=Math.max(0,-(u*x+h)),E=-_*_+x*(x+2*p)+d;else x=-o,_=Math.max(0,-(u*x+h)),E=-_*_+x*(x+2*p)+d;else x<=-A?(_=Math.max(0,-(-u*o+h)),x=_>0?-o:Math.min(Math.max(-o,-p),o),E=-_*_+x*(x+2*p)+d):x<=A?(_=0,x=Math.min(Math.max(-o,-p),o),E=x*(x+2*p)+d):(_=Math.max(0,-(u*o+h)),x=_>0?o:Math.min(Math.max(-o,-p),o),E=-_*_+x*(x+2*p)+d);else x=u>0?-o:o,_=Math.max(0,-(u*x+h)),E=-_*_+x*(x+2*p)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(Sa).addScaledVector(ps,x),E}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const n=qn.dot(this.direction),a=qn.dot(qn)-n*n,o=e.radius*e.radius;if(a>o)return null;const u=Math.sqrt(o-a),h=n-u,p=n+u;return p<0?null:h<0?this.at(p,t):this.at(h,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,o,u,h,p;const d=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,x=this.origin;return d>=0?(n=(e.min.x-x.x)*d,a=(e.max.x-x.x)*d):(n=(e.max.x-x.x)*d,a=(e.min.x-x.x)*d),v>=0?(o=(e.min.y-x.y)*v,u=(e.max.y-x.y)*v):(o=(e.max.y-x.y)*v,u=(e.min.y-x.y)*v),n>u||o>a||((o>n||isNaN(n))&&(n=o),(u<a||isNaN(a))&&(a=u),_>=0?(h=(e.min.z-x.z)*_,p=(e.max.z-x.z)*_):(h=(e.max.z-x.z)*_,p=(e.min.z-x.z)*_),n>p||h>a)||((h>n||n!==n)&&(n=h),(p<a||a!==a)&&(a=p),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,n,a,o){Ma.subVectors(t,e),ms.subVectors(n,e),Ta.crossVectors(Ma,ms);let u=this.direction.dot(Ta),h;if(u>0){if(a)return null;h=1}else if(u<0)h=-1,u=-u;else return null;ri.subVectors(this.origin,e);const p=h*this.direction.dot(ms.crossVectors(ri,ms));if(p<0)return null;const d=h*this.direction.dot(Ma.cross(ri));if(d<0||p+d>u)return null;const v=-h*ri.dot(Ta);return v<0?null:this.at(v/u,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,t,n,a,o,u,h,p,d,v,_,x,E,A,R,y){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,o,u,h,p,d,v,_,x,E,A,R,y)}set(e,t,n,a,o,u,h,p,d,v,_,x,E,A,R,y){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=a,m[1]=o,m[5]=u,m[9]=h,m[13]=p,m[2]=d,m[6]=v,m[10]=_,m[14]=x,m[3]=E,m[7]=A,m[11]=R,m[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,a=1/qi.setFromMatrixColumn(e,0).length(),o=1/qi.setFromMatrixColumn(e,1).length(),u=1/qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,o=e.z,u=Math.cos(n),h=Math.sin(n),p=Math.cos(a),d=Math.sin(a),v=Math.cos(o),_=Math.sin(o);if(e.order==="XYZ"){const x=u*v,E=u*_,A=h*v,R=h*_;t[0]=p*v,t[4]=-p*_,t[8]=d,t[1]=E+A*d,t[5]=x-R*d,t[9]=-h*p,t[2]=R-x*d,t[6]=A+E*d,t[10]=u*p}else if(e.order==="YXZ"){const x=p*v,E=p*_,A=d*v,R=d*_;t[0]=x+R*h,t[4]=A*h-E,t[8]=u*d,t[1]=u*_,t[5]=u*v,t[9]=-h,t[2]=E*h-A,t[6]=R+x*h,t[10]=u*p}else if(e.order==="ZXY"){const x=p*v,E=p*_,A=d*v,R=d*_;t[0]=x-R*h,t[4]=-u*_,t[8]=A+E*h,t[1]=E+A*h,t[5]=u*v,t[9]=R-x*h,t[2]=-u*d,t[6]=h,t[10]=u*p}else if(e.order==="ZYX"){const x=u*v,E=u*_,A=h*v,R=h*_;t[0]=p*v,t[4]=A*d-E,t[8]=x*d+R,t[1]=p*_,t[5]=R*d+x,t[9]=E*d-A,t[2]=-d,t[6]=h*p,t[10]=u*p}else if(e.order==="YZX"){const x=u*p,E=u*d,A=h*p,R=h*d;t[0]=p*v,t[4]=R-x*_,t[8]=A*_+E,t[1]=_,t[5]=u*v,t[9]=-h*v,t[2]=-d*v,t[6]=E*_+A,t[10]=x-R*_}else if(e.order==="XZY"){const x=u*p,E=u*d,A=h*p,R=h*d;t[0]=p*v,t[4]=-_,t[8]=d*v,t[1]=x*_+R,t[5]=u*v,t[9]=E*_-A,t[2]=A*_-E,t[6]=h*v,t[10]=R*_+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Q_,e,eg)}lookAt(e,t,n){const a=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),si.crossVectors(n,hn),si.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),si.crossVectors(n,hn)),si.normalize(),_s.crossVectors(hn,si),a[0]=si.x,a[4]=_s.x,a[8]=hn.x,a[1]=si.y,a[5]=_s.y,a[9]=hn.y,a[2]=si.z,a[6]=_s.z,a[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,o=this.elements,u=n[0],h=n[4],p=n[8],d=n[12],v=n[1],_=n[5],x=n[9],E=n[13],A=n[2],R=n[6],y=n[10],m=n[14],O=n[3],I=n[7],F=n[11],B=n[15],D=a[0],H=a[4],q=a[8],P=a[12],T=a[1],k=a[5],K=a[9],re=a[13],Q=a[2],he=a[6],oe=a[10],xe=a[14],se=a[3],Ee=a[7],De=a[11],Oe=a[15];return o[0]=u*D+h*T+p*Q+d*se,o[4]=u*H+h*k+p*he+d*Ee,o[8]=u*q+h*K+p*oe+d*De,o[12]=u*P+h*re+p*xe+d*Oe,o[1]=v*D+_*T+x*Q+E*se,o[5]=v*H+_*k+x*he+E*Ee,o[9]=v*q+_*K+x*oe+E*De,o[13]=v*P+_*re+x*xe+E*Oe,o[2]=A*D+R*T+y*Q+m*se,o[6]=A*H+R*k+y*he+m*Ee,o[10]=A*q+R*K+y*oe+m*De,o[14]=A*P+R*re+y*xe+m*Oe,o[3]=O*D+I*T+F*Q+B*se,o[7]=O*H+I*k+F*he+B*Ee,o[11]=O*q+I*K+F*oe+B*De,o[15]=O*P+I*re+F*xe+B*Oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],o=e[12],u=e[1],h=e[5],p=e[9],d=e[13],v=e[2],_=e[6],x=e[10],E=e[14],A=e[3],R=e[7],y=e[11],m=e[15];return A*(+o*p*_-a*d*_-o*h*x+n*d*x+a*h*E-n*p*E)+R*(+t*p*E-t*d*x+o*u*x-a*u*E+a*d*v-o*p*v)+y*(+t*d*_-t*h*E-o*u*_+n*u*E+o*h*v-n*d*v)+m*(-a*h*v-t*p*_+t*h*x+a*u*_-n*u*x+n*p*v)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],u=e[4],h=e[5],p=e[6],d=e[7],v=e[8],_=e[9],x=e[10],E=e[11],A=e[12],R=e[13],y=e[14],m=e[15],O=_*y*d-R*x*d+R*p*E-h*y*E-_*p*m+h*x*m,I=A*x*d-v*y*d-A*p*E+u*y*E+v*p*m-u*x*m,F=v*R*d-A*_*d+A*h*E-u*R*E-v*h*m+u*_*m,B=A*_*p-v*R*p-A*h*x+u*R*x+v*h*y-u*_*y,D=t*O+n*I+a*F+o*B;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/D;return e[0]=O*H,e[1]=(R*x*o-_*y*o-R*a*E+n*y*E+_*a*m-n*x*m)*H,e[2]=(h*y*o-R*p*o+R*a*d-n*y*d-h*a*m+n*p*m)*H,e[3]=(_*p*o-h*x*o-_*a*d+n*x*d+h*a*E-n*p*E)*H,e[4]=I*H,e[5]=(v*y*o-A*x*o+A*a*E-t*y*E-v*a*m+t*x*m)*H,e[6]=(A*p*o-u*y*o-A*a*d+t*y*d+u*a*m-t*p*m)*H,e[7]=(u*x*o-v*p*o+v*a*d-t*x*d-u*a*E+t*p*E)*H,e[8]=F*H,e[9]=(A*_*o-v*R*o-A*n*E+t*R*E+v*n*m-t*_*m)*H,e[10]=(u*R*o-A*h*o+A*n*d-t*R*d-u*n*m+t*h*m)*H,e[11]=(v*h*o-u*_*o-v*n*d+t*_*d+u*n*E-t*h*E)*H,e[12]=B*H,e[13]=(v*R*a-A*_*a+A*n*x-t*R*x-v*n*y+t*_*y)*H,e[14]=(A*h*a-u*R*a-A*n*p+t*R*p+u*n*y-t*h*y)*H,e[15]=(u*_*a-v*h*a+v*n*p-t*_*p-u*n*x+t*h*x)*H,this}scale(e){const t=this.elements,n=e.x,a=e.y,o=e.z;return t[0]*=n,t[4]*=a,t[8]*=o,t[1]*=n,t[5]*=a,t[9]*=o,t[2]*=n,t[6]*=a,t[10]*=o,t[3]*=n,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),o=1-n,u=e.x,h=e.y,p=e.z,d=o*u,v=o*h;return this.set(d*u+n,d*h-a*p,d*p+a*h,0,d*h+a*p,v*h+n,v*p-a*u,0,d*p-a*h,v*p+a*u,o*p*p+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,o,u){return this.set(1,n,o,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,o=t._x,u=t._y,h=t._z,p=t._w,d=o+o,v=u+u,_=h+h,x=o*d,E=o*v,A=o*_,R=u*v,y=u*_,m=h*_,O=p*d,I=p*v,F=p*_,B=n.x,D=n.y,H=n.z;return a[0]=(1-(R+m))*B,a[1]=(E+F)*B,a[2]=(A-I)*B,a[3]=0,a[4]=(E-F)*D,a[5]=(1-(x+m))*D,a[6]=(y+O)*D,a[7]=0,a[8]=(A+I)*H,a[9]=(y-O)*H,a[10]=(1-(x+R))*H,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;let o=qi.set(a[0],a[1],a[2]).length();const u=qi.set(a[4],a[5],a[6]).length(),h=qi.set(a[8],a[9],a[10]).length();this.determinant()<0&&(o=-o),e.x=a[12],e.y=a[13],e.z=a[14],bn.copy(this);const d=1/o,v=1/u,_=1/h;return bn.elements[0]*=d,bn.elements[1]*=d,bn.elements[2]*=d,bn.elements[4]*=v,bn.elements[5]*=v,bn.elements[6]*=v,bn.elements[8]*=_,bn.elements[9]*=_,bn.elements[10]*=_,t.setFromRotationMatrix(bn),n.x=o,n.y=u,n.z=h,this}makePerspective(e,t,n,a,o,u,h=Hn,p=!1){const d=this.elements,v=2*o/(t-e),_=2*o/(n-a),x=(t+e)/(t-e),E=(n+a)/(n-a);let A,R;if(p)A=o/(u-o),R=u*o/(u-o);else if(h===Hn)A=-(u+o)/(u-o),R=-2*u*o/(u-o);else if(h===Gs)A=-u/(u-o),R=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=v,d[4]=0,d[8]=x,d[12]=0,d[1]=0,d[5]=_,d[9]=E,d[13]=0,d[2]=0,d[6]=0,d[10]=A,d[14]=R,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,a,o,u,h=Hn,p=!1){const d=this.elements,v=2/(t-e),_=2/(n-a),x=-(t+e)/(t-e),E=-(n+a)/(n-a);let A,R;if(p)A=1/(u-o),R=u/(u-o);else if(h===Hn)A=-2/(u-o),R=-(u+o)/(u-o);else if(h===Gs)A=-1/(u-o),R=-o/(u-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=v,d[4]=0,d[8]=0,d[12]=x,d[1]=0,d[5]=_,d[9]=0,d[13]=E,d[2]=0,d[6]=0,d[10]=A,d[14]=R,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qi=new J,bn=new Ot,Q_=new J(0,0,0),eg=new J(1,1,1),si=new J,_s=new J,hn=new J,oc=new Ot,lc=new Bi;class Gn{constructor(e=0,t=0,n=0,a=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,o=a[0],u=a[4],h=a[8],p=a[1],d=a[5],v=a[9],_=a[2],x=a[6],E=a[10];switch(t){case"XYZ":this._y=Math.asin(pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(x,d),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-_,o),this._z=0);break;case"ZXY":this._x=Math.asin(pt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,o));break;case"ZYX":this._y=Math.asin(-pt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,E),this._z=Math.atan2(p,o)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(pt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,d),this._y=Math.atan2(-_,o)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,d),this._y=Math.atan2(h,o)):(this._x=Math.atan2(-v,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return oc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lc.setFromEuler(this),this.setFromQuaternion(lc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class vu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tg=0;const cc=new J,Yi=new Bi,Yn=new Ot,gs=new J,br=new J,ng=new J,ig=new Bi,uc=new J(1,0,0),hc=new J(0,1,0),fc=new J(0,0,1),dc={type:"added"},rg={type:"removed"},Ki={type:"childadded",child:null},wa={type:"childremoved",child:null};class qt extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=Br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new J,t=new Gn,n=new Bi,a=new J(1,1,1);function o(){n.setFromEuler(t,!1)}function u(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ot},normalMatrix:{value:new ot}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(uc,e)}rotateY(e){return this.rotateOnAxis(hc,e)}rotateZ(e){return this.rotateOnAxis(fc,e)}translateOnAxis(e,t){return cc.copy(e).applyQuaternion(this.quaternion),this.position.add(cc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uc,e)}translateY(e){return this.translateOnAxis(hc,e)}translateZ(e){return this.translateOnAxis(fc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gs.copy(e):gs.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(br,gs,this.up):Yn.lookAt(gs,br,this.up),this.quaternion.setFromRotationMatrix(Yn),a&&(Yn.extractRotation(a.matrixWorld),Yi.setFromRotationMatrix(Yn),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dc),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rg),wa.child=e,this.dispatchEvent(wa),wa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dc),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const u=this.children[n].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let o=0,u=a.length;o<u;o++)a[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,e,ng),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,ig,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let o=0,u=a.length;o<u;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(h=>({...h})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function o(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let d=0,v=p.length;d<v;d++){const _=p[d];o(e.shapes,_)}else o(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,d=this.material.length;p<d;p++)h.push(o(e.materials,this.material[p]));a.material=h}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let h=0;h<this.children.length;h++)a.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];a.animations.push(o(e.animations,p))}}if(t){const h=u(e.geometries),p=u(e.materials),d=u(e.textures),v=u(e.images),_=u(e.shapes),x=u(e.skeletons),E=u(e.animations),A=u(e.nodes);h.length>0&&(n.geometries=h),p.length>0&&(n.materials=p),d.length>0&&(n.textures=d),v.length>0&&(n.images=v),_.length>0&&(n.shapes=_),x.length>0&&(n.skeletons=x),E.length>0&&(n.animations=E),A.length>0&&(n.nodes=A)}return n.object=a,n;function u(h){const p=[];for(const d in h){const v=h[d];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}}qt.DEFAULT_UP=new J(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new J,Kn=new J,ba=new J,Zn=new J,Zi=new J,Ji=new J,pc=new J,Aa=new J,Ra=new J,Ca=new J,Pa=new Nt,Da=new Nt,La=new Nt;class Pn{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),An.subVectors(e,t),a.cross(An);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,n,a,o){An.subVectors(a,t),Kn.subVectors(n,t),ba.subVectors(e,t);const u=An.dot(An),h=An.dot(Kn),p=An.dot(ba),d=Kn.dot(Kn),v=Kn.dot(ba),_=u*d-h*h;if(_===0)return o.set(0,0,0),null;const x=1/_,E=(d*p-h*v)*x,A=(u*v-h*p)*x;return o.set(1-E-A,A,E)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,n,a,o,u,h,p){return this.getBarycoord(e,t,n,a,Zn)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(o,Zn.x),p.addScaledVector(u,Zn.y),p.addScaledVector(h,Zn.z),p)}static getInterpolatedAttribute(e,t,n,a,o,u){return Pa.setScalar(0),Da.setScalar(0),La.setScalar(0),Pa.fromBufferAttribute(e,t),Da.fromBufferAttribute(e,n),La.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Pa,o.x),u.addScaledVector(Da,o.y),u.addScaledVector(La,o.z),u}static isFrontFacing(e,t,n,a){return An.subVectors(n,t),Kn.subVectors(e,t),An.cross(Kn).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),An.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,o){return Pn.getInterpolation(e,this.a,this.b,this.c,t,n,a,o)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,o=this.c;let u,h;Zi.subVectors(a,n),Ji.subVectors(o,n),Aa.subVectors(e,n);const p=Zi.dot(Aa),d=Ji.dot(Aa);if(p<=0&&d<=0)return t.copy(n);Ra.subVectors(e,a);const v=Zi.dot(Ra),_=Ji.dot(Ra);if(v>=0&&_<=v)return t.copy(a);const x=p*_-v*d;if(x<=0&&p>=0&&v<=0)return u=p/(p-v),t.copy(n).addScaledVector(Zi,u);Ca.subVectors(e,o);const E=Zi.dot(Ca),A=Ji.dot(Ca);if(A>=0&&E<=A)return t.copy(o);const R=E*d-p*A;if(R<=0&&d>=0&&A<=0)return h=d/(d-A),t.copy(n).addScaledVector(Ji,h);const y=v*A-E*_;if(y<=0&&_-v>=0&&E-A>=0)return pc.subVectors(o,a),h=(_-v)/(_-v+(E-A)),t.copy(a).addScaledVector(pc,h);const m=1/(y+R+x);return u=R*m,h=x*m,t.copy(n).addScaledVector(Zi,u).addScaledVector(Ji,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},vs={h:0,s:0,l:0};function Fa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class mt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,a=Et.workingColorSpace){return this.r=e,this.g=t,this.b=n,Et.colorSpaceToWorking(this,a),this}setHSL(e,t,n,a=Et.workingColorSpace){if(e=V_(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,u=2*n-o;this.r=Fa(u,o,e+1/3),this.g=Fa(u,o,e),this.b=Fa(u,o,e-1/3)}return Et.colorSpaceToWorking(this,a),this}setStyle(e,t=pn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const u=a[1],h=a[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){const n=xu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return Et.workingToColorSpace(en.copy(this),e),Math.round(pt(en.r*255,0,255))*65536+Math.round(pt(en.g*255,0,255))*256+Math.round(pt(en.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.workingToColorSpace(en.copy(this),t);const n=en.r,a=en.g,o=en.b,u=Math.max(n,a,o),h=Math.min(n,a,o);let p,d;const v=(h+u)/2;if(h===u)p=0,d=0;else{const _=u-h;switch(d=v<=.5?_/(u+h):_/(2-u-h),u){case n:p=(a-o)/_+(a<o?6:0);break;case a:p=(o-n)/_+2;break;case o:p=(n-a)/_+4;break}p/=6}return e.h=p,e.s=d,e.l=v,e}getRGB(e,t=Et.workingColorSpace){return Et.workingToColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=pn){Et.workingToColorSpace(en.copy(this),e);const t=en.r,n=en.g,a=en.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(vs);const n=ma(ai.h,vs.h,t),a=ma(ai.s,vs.s,t),o=ma(ai.l,vs.l,t);return this.setHSL(n,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*a,this.g=o[1]*t+o[4]*n+o[7]*a,this.b=o[2]*t+o[5]*n+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new mt;mt.NAMES=xu;let sg=0;class mr extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=Br(),this.name="",this.type="Material",this.blending=lr,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qa,this.blendDst=eo,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qa&&(n.blendSrc=this.blendSrc),this.blendDst!==eo&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ur&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ec&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(o){const u=[];for(const h in o){const p=o[h];delete p.metadata,u.push(p)}return u}if(t){const o=a(e.textures),u=a(e.images);o.length>0&&(n.textures=o),u.length>0&&(n.images=u)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let o=0;o!==a;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class el extends mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=ru,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new J,xs=new rt;let ag=0;class yn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ag++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=tc,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xs.fromBufferAttribute(this,t),xs.applyMatrix3(e),this.setXY(t,xs.x,xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mr(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mr(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mr(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array),a=an(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,o){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array),a=an(a,this.array),o=an(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tc&&(e.usage=this.usage),e}}class Eu extends yn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class yu extends yn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class un extends yn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let og=0;const gn=new Ot,Ia=new qt,Qi=new J,fn=new zr,Ar=new zr,jt=new J;class Fn extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=Br(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_u(e)?yu:Eu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ot().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return Ia.lookAt(e),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let a=0,o=e.length;a<o;a++){const u=e[a];n.push(u.x,u.y,u.z||0)}this.setAttribute("position",new un(n,3))}else{const n=Math.min(e.length,t.count);for(let a=0;a<n;a++){const o=e[a];t.setXYZ(a,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const o=t[n];fn.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let o=0,u=t.length;o<u;o++){const h=t[o];Ar.setFromBufferAttribute(h),this.morphTargetsRelative?(jt.addVectors(fn.min,Ar.min),fn.expandByPoint(jt),jt.addVectors(fn.max,Ar.max),fn.expandByPoint(jt)):(fn.expandByPoint(Ar.min),fn.expandByPoint(Ar.max))}fn.getCenter(n);let a=0;for(let o=0,u=e.count;o<u;o++)jt.fromBufferAttribute(e,o),a=Math.max(a,n.distanceToSquared(jt));if(t)for(let o=0,u=t.length;o<u;o++){const h=t[o],p=this.morphTargetsRelative;for(let d=0,v=h.count;d<v;d++)jt.fromBufferAttribute(h,d),p&&(Qi.fromBufferAttribute(e,d),jt.add(Qi)),a=Math.max(a,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*n.count),4));const u=this.getAttribute("tangent"),h=[],p=[];for(let q=0;q<n.count;q++)h[q]=new J,p[q]=new J;const d=new J,v=new J,_=new J,x=new rt,E=new rt,A=new rt,R=new J,y=new J;function m(q,P,T){d.fromBufferAttribute(n,q),v.fromBufferAttribute(n,P),_.fromBufferAttribute(n,T),x.fromBufferAttribute(o,q),E.fromBufferAttribute(o,P),A.fromBufferAttribute(o,T),v.sub(d),_.sub(d),E.sub(x),A.sub(x);const k=1/(E.x*A.y-A.x*E.y);isFinite(k)&&(R.copy(v).multiplyScalar(A.y).addScaledVector(_,-E.y).multiplyScalar(k),y.copy(_).multiplyScalar(E.x).addScaledVector(v,-A.x).multiplyScalar(k),h[q].add(R),h[P].add(R),h[T].add(R),p[q].add(y),p[P].add(y),p[T].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let q=0,P=O.length;q<P;++q){const T=O[q],k=T.start,K=T.count;for(let re=k,Q=k+K;re<Q;re+=3)m(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const I=new J,F=new J,B=new J,D=new J;function H(q){B.fromBufferAttribute(a,q),D.copy(B);const P=h[q];I.copy(P),I.sub(B.multiplyScalar(B.dot(P))).normalize(),F.crossVectors(D,P);const k=F.dot(p[q])<0?-1:1;u.setXYZW(q,I.x,I.y,I.z,k)}for(let q=0,P=O.length;q<P;++q){const T=O[q],k=T.start,K=T.count;for(let re=k,Q=k+K;re<Q;re+=3)H(e.getX(re+0)),H(e.getX(re+1)),H(e.getX(re+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let x=0,E=n.count;x<E;x++)n.setXYZ(x,0,0,0);const a=new J,o=new J,u=new J,h=new J,p=new J,d=new J,v=new J,_=new J;if(e)for(let x=0,E=e.count;x<E;x+=3){const A=e.getX(x+0),R=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(t,A),o.fromBufferAttribute(t,R),u.fromBufferAttribute(t,y),v.subVectors(u,o),_.subVectors(a,o),v.cross(_),h.fromBufferAttribute(n,A),p.fromBufferAttribute(n,R),d.fromBufferAttribute(n,y),h.add(v),p.add(v),d.add(v),n.setXYZ(A,h.x,h.y,h.z),n.setXYZ(R,p.x,p.y,p.z),n.setXYZ(y,d.x,d.y,d.z)}else for(let x=0,E=t.count;x<E;x+=3)a.fromBufferAttribute(t,x+0),o.fromBufferAttribute(t,x+1),u.fromBufferAttribute(t,x+2),v.subVectors(u,o),_.subVectors(a,o),v.cross(_),n.setXYZ(x+0,v.x,v.y,v.z),n.setXYZ(x+1,v.x,v.y,v.z),n.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(h,p){const d=h.array,v=h.itemSize,_=h.normalized,x=new d.constructor(p.length*v);let E=0,A=0;for(let R=0,y=p.length;R<y;R++){h.isInterleavedBufferAttribute?E=p[R]*h.data.stride+h.offset:E=p[R]*v;for(let m=0;m<v;m++)x[A++]=d[E++]}return new yn(x,v,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fn,n=this.index.array,a=this.attributes;for(const h in a){const p=a[h],d=e(p,n);t.setAttribute(h,d)}const o=this.morphAttributes;for(const h in o){const p=[],d=o[h];for(let v=0,_=d.length;v<_;v++){const x=d[v],E=e(x,n);p.push(E)}t.morphAttributes[h]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,p=u.length;h<p;h++){const d=u[h];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(e[d]=p[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const p in n){const d=n[p];e.data.attributes[p]=d.toJSON(e.data)}const a={};let o=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],v=[];for(let _=0,x=d.length;_<x;_++){const E=d[_];v.push(E.toJSON(e.data))}v.length>0&&(a[p]=v,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const a=e.attributes;for(const d in a){const v=a[d];this.setAttribute(d,v.clone(t))}const o=e.morphAttributes;for(const d in o){const v=[],_=o[d];for(let x=0,E=_.length;x<E;x++)v.push(_[x].clone(t));this.morphAttributes[d]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,v=u.length;d<v;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mc=new Ot,Ai=new Qo,Es=new qs,_c=new J,ys=new J,Ss=new J,Ms=new J,Ua=new J,Ts=new J,gc=new J,ws=new J;class En extends qt{constructor(e=new Fn,t=new el){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const h=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=o}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,o=n.morphAttributes.position,u=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const h=this.morphTargetInfluences;if(o&&h){Ts.set(0,0,0);for(let p=0,d=o.length;p<d;p++){const v=h[p],_=o[p];v!==0&&(Ua.fromBufferAttribute(_,e),u?Ts.addScaledVector(Ua,v):Ts.addScaledVector(Ua.sub(t),v))}t.add(Ts)}return t}raycast(e,t){const n=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(o),Ai.copy(e.ray).recast(e.near),!(Es.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Es,_c)===null||Ai.origin.distanceToSquared(_c)>(e.far-e.near)**2))&&(mc.copy(o).invert(),Ai.copy(e.ray).applyMatrix4(mc),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,n){let a;const o=this.geometry,u=this.material,h=o.index,p=o.attributes.position,d=o.attributes.uv,v=o.attributes.uv1,_=o.attributes.normal,x=o.groups,E=o.drawRange;if(h!==null)if(Array.isArray(u))for(let A=0,R=x.length;A<R;A++){const y=x[A],m=u[y.materialIndex],O=Math.max(y.start,E.start),I=Math.min(h.count,Math.min(y.start+y.count,E.start+E.count));for(let F=O,B=I;F<B;F+=3){const D=h.getX(F),H=h.getX(F+1),q=h.getX(F+2);a=bs(this,m,e,n,d,v,_,D,H,q),a&&(a.faceIndex=Math.floor(F/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const A=Math.max(0,E.start),R=Math.min(h.count,E.start+E.count);for(let y=A,m=R;y<m;y+=3){const O=h.getX(y),I=h.getX(y+1),F=h.getX(y+2);a=bs(this,u,e,n,d,v,_,O,I,F),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(p!==void 0)if(Array.isArray(u))for(let A=0,R=x.length;A<R;A++){const y=x[A],m=u[y.materialIndex],O=Math.max(y.start,E.start),I=Math.min(p.count,Math.min(y.start+y.count,E.start+E.count));for(let F=O,B=I;F<B;F+=3){const D=F,H=F+1,q=F+2;a=bs(this,m,e,n,d,v,_,D,H,q),a&&(a.faceIndex=Math.floor(F/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const A=Math.max(0,E.start),R=Math.min(p.count,E.start+E.count);for(let y=A,m=R;y<m;y+=3){const O=y,I=y+1,F=y+2;a=bs(this,u,e,n,d,v,_,O,I,F),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function lg(i,e,t,n,a,o,u,h){let p;if(e.side===ln?p=n.intersectTriangle(u,o,a,!0,h):p=n.intersectTriangle(a,o,u,e.side===pi,h),p===null)return null;ws.copy(h),ws.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(ws);return d<t.near||d>t.far?null:{distance:d,point:ws.clone(),object:i}}function bs(i,e,t,n,a,o,u,h,p,d){i.getVertexPosition(h,ys),i.getVertexPosition(p,Ss),i.getVertexPosition(d,Ms);const v=lg(i,e,t,n,ys,Ss,Ms,gc);if(v){const _=new J;Pn.getBarycoord(gc,ys,Ss,Ms,_),a&&(v.uv=Pn.getInterpolatedAttribute(a,h,p,d,_,new rt)),o&&(v.uv1=Pn.getInterpolatedAttribute(o,h,p,d,_,new rt)),u&&(v.normal=Pn.getInterpolatedAttribute(u,h,p,d,_,new J),v.normal.dot(n.direction)>0&&v.normal.multiplyScalar(-1));const x={a:h,b:p,c:d,normal:new J,materialIndex:0};Pn.getNormal(ys,Ss,Ms,x.normal),v.face=x,v.barycoord=_}return v}class Hr extends Fn{constructor(e=1,t=1,n=1,a=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:o,depthSegments:u};const h=this;a=Math.floor(a),o=Math.floor(o),u=Math.floor(u);const p=[],d=[],v=[],_=[];let x=0,E=0;A("z","y","x",-1,-1,n,t,e,u,o,0),A("z","y","x",1,-1,n,t,-e,u,o,1),A("x","z","y",1,1,e,n,t,a,u,2),A("x","z","y",1,-1,e,n,-t,a,u,3),A("x","y","z",1,-1,e,t,n,a,o,4),A("x","y","z",-1,-1,e,t,-n,a,o,5),this.setIndex(p),this.setAttribute("position",new un(d,3)),this.setAttribute("normal",new un(v,3)),this.setAttribute("uv",new un(_,2));function A(R,y,m,O,I,F,B,D,H,q,P){const T=F/H,k=B/q,K=F/2,re=B/2,Q=D/2,he=H+1,oe=q+1;let xe=0,se=0;const Ee=new J;for(let De=0;De<oe;De++){const Oe=De*k-re;for(let Ze=0;Ze<he;Ze++){const at=Ze*T-K;Ee[R]=at*O,Ee[y]=Oe*I,Ee[m]=Q,d.push(Ee.x,Ee.y,Ee.z),Ee[R]=0,Ee[y]=0,Ee[m]=D>0?1:-1,v.push(Ee.x,Ee.y,Ee.z),_.push(Ze/H),_.push(1-De/q),xe+=1}}for(let De=0;De<q;De++)for(let Oe=0;Oe<H;Oe++){const Ze=x+Oe+he*De,at=x+Oe+he*(De+1),tt=x+(Oe+1)+he*(De+1),fe=x+(Oe+1)+he*De;p.push(Ze,at,fe),p.push(at,tt,fe),se+=6}h.addGroup(E,se,P),E+=se,x+=xe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function pr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const a=i[t][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone():Array.isArray(a)?e[t][n]=a.slice():e[t][n]=a}}return e}function nn(i){const e={};for(let t=0;t<i.length;t++){const n=pr(i[t]);for(const a in n)e[a]=n[a]}return e}function cg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Su(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const ug={clone:pr,merge:nn};var hg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends mr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hg,this.fragmentShader=fg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pr(e.uniforms),this.uniformsGroups=cg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Mu extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new J,vc=new rt,xc=new rt;class xn extends Mu{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ho*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ho*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,vc,xc),t.subVectors(xc,vc)}setViewOffset(e,t,n,a,o,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zs*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,o=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;o+=u.offsetX*a/p,t-=u.offsetY*n/d,a*=u.width/p,n*=u.height/d}const h=this.filmOffset;h!==0&&(o+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const er=-90,tr=1;class dg extends qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new xn(er,tr,e,t);a.layers=this.layers,this.add(a);const o=new xn(er,tr,e,t);o.layers=this.layers,this.add(o);const u=new xn(er,tr,e,t);u.layers=this.layers,this.add(u);const h=new xn(er,tr,e,t);h.layers=this.layers,this.add(h);const p=new xn(er,tr,e,t);p.layers=this.layers,this.add(p);const d=new xn(er,tr,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,o,u,h,p]=t;for(const d of t)this.remove(d);if(e===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,u,h,p,d,v]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const R=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,a),e.render(t,o),e.setRenderTarget(n,1,a),e.render(t,u),e.setRenderTarget(n,2,a),e.render(t,h),e.setRenderTarget(n,3,a),e.render(t,p),e.setRenderTarget(n,4,a),e.render(t,d),n.texture.generateMipmaps=R,e.setRenderTarget(n,5,a),e.render(t,v),e.setRenderTarget(_,x,E),e.xr.enabled=A,n.texture.needsPMREMUpdate=!0}}class Tu extends cn{constructor(e=[],t=hr,n,a,o,u,h,p,d,v){super(e,t,n,a,o,u,h,p,d,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pg extends zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new Tu(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Hr(5,5,5),o=new mi({name:"CubemapFromEquirect",uniforms:pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:fi});o.uniforms.tEquirect.value=t;const u=new En(a,o),h=t.minFilter;return t.minFilter===Oi&&(t.minFilter=zn),new dg(1,10,this).update(e,u),t.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,n=!0,a=!0){const o=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,n,a);e.setRenderTarget(o)}}class As extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mg={type:"move"};class Na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new As,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new As,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new As,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,o=null,u=null;const h=this._targetRay,p=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const R of e.hand.values()){const y=t.getJointPose(R,n),m=this._getHandJoint(d,R);y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=y.radius),m.visible=y!==null}const v=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],x=v.position.distanceTo(_.position),E=.02,A=.005;d.inputState.pinching&&x>E+A?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&x<=E-A&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(p.matrix.fromArray(o.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,o.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(o.linearVelocity)):p.hasLinearVelocity=!1,o.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(o.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&o!==null&&(a=o),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(mg)))}return h!==null&&(h.visible=a!==null),p!==null&&(p.visible=o!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new As;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class _g extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Oa=new J,gg=new J,vg=new ot;class ui{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=Oa.subVectors(n,t).cross(gg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Oa),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||vg.getNormalMatrix(e),a=this.coplanarPoint(Oa).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new qs,xg=new rt(.5,.5),Rs=new J;class tl{constructor(e=new ui,t=new ui,n=new ui,a=new ui,o=new ui,u=new ui){this.planes=[e,t,n,a,o,u]}set(e,t,n,a,o,u){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(n),h[3].copy(a),h[4].copy(o),h[5].copy(u),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hn,n=!1){const a=this.planes,o=e.elements,u=o[0],h=o[1],p=o[2],d=o[3],v=o[4],_=o[5],x=o[6],E=o[7],A=o[8],R=o[9],y=o[10],m=o[11],O=o[12],I=o[13],F=o[14],B=o[15];if(a[0].setComponents(d-u,E-v,m-A,B-O).normalize(),a[1].setComponents(d+u,E+v,m+A,B+O).normalize(),a[2].setComponents(d+h,E+_,m+R,B+I).normalize(),a[3].setComponents(d-h,E-_,m-R,B-I).normalize(),n)a[4].setComponents(p,x,y,F).normalize(),a[5].setComponents(d-p,E-x,m-y,B-F).normalize();else if(a[4].setComponents(d-p,E-x,m-y,B-F).normalize(),t===Hn)a[5].setComponents(d+p,E+x,m+y,B+F).normalize();else if(t===Gs)a[5].setComponents(p,x,y,F).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){Ri.center.set(0,0,0);const t=xg.distanceTo(e.center);return Ri.radius=.7071067811865476+t,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(Rs.x=a.normal.x>0?e.max.x:e.min.x,Rs.y=a.normal.y>0?e.max.y:e.min.y,Rs.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wu extends mr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xs=new J,$s=new J,Ec=new Ot,Rr=new Qo,Cs=new qs,ka=new J,yc=new J;class Eg extends qt{constructor(e=new Fn,t=new wu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let a=1,o=t.count;a<o;a++)Xs.fromBufferAttribute(t,a-1),$s.fromBufferAttribute(t,a),n[a]=n[a-1],n[a]+=Xs.distanceTo($s);e.setAttribute("lineDistance",new un(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,o=e.params.Line.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(a),Cs.radius+=o,e.ray.intersectsSphere(Cs)===!1)return;Ec.copy(a).invert(),Rr.copy(e.ray).applyMatrix4(Ec);const h=o/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=this.isLineSegments?2:1,v=n.index,x=n.attributes.position;if(v!==null){const E=Math.max(0,u.start),A=Math.min(v.count,u.start+u.count);for(let R=E,y=A-1;R<y;R+=d){const m=v.getX(R),O=v.getX(R+1),I=Ps(this,e,Rr,p,m,O,R);I&&t.push(I)}if(this.isLineLoop){const R=v.getX(A-1),y=v.getX(E),m=Ps(this,e,Rr,p,R,y,A-1);m&&t.push(m)}}else{const E=Math.max(0,u.start),A=Math.min(x.count,u.start+u.count);for(let R=E,y=A-1;R<y;R+=d){const m=Ps(this,e,Rr,p,R,R+1,R);m&&t.push(m)}if(this.isLineLoop){const R=Ps(this,e,Rr,p,A-1,E,A-1);R&&t.push(R)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const h=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=o}}}}}function Ps(i,e,t,n,a,o,u){const h=i.geometry.attributes.position;if(Xs.fromBufferAttribute(h,a),$s.fromBufferAttribute(h,o),t.distanceSqToSegment(Xs,$s,ka,yc)>n)return;ka.applyMatrix4(i.matrixWorld);const d=e.ray.origin.distanceTo(ka);if(!(d<e.near||d>e.far))return{distance:d,point:yc.clone().applyMatrix4(i.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:i}}const Sc=new J,Mc=new J;class yg extends Eg{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let a=0,o=t.count;a<o;a+=2)Sc.fromBufferAttribute(t,a),Mc.fromBufferAttribute(t,a+1),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+Sc.distanceTo(Mc);e.setAttribute("lineDistance",new un(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bu extends cn{constructor(e,t,n=ki,a,o,u,h=Ln,p=Ln,d,v=Ur,_=1){if(v!==Ur&&v!==Nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:_};super(x,a,o,u,h,p,v,n,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Au extends cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class nl extends Fn{constructor(e=1,t=1,n=1,a=32,o=1,u=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:a,heightSegments:o,openEnded:u,thetaStart:h,thetaLength:p};const d=this;a=Math.floor(a),o=Math.floor(o);const v=[],_=[],x=[],E=[];let A=0;const R=[],y=n/2;let m=0;O(),u===!1&&(e>0&&I(!0),t>0&&I(!1)),this.setIndex(v),this.setAttribute("position",new un(_,3)),this.setAttribute("normal",new un(x,3)),this.setAttribute("uv",new un(E,2));function O(){const F=new J,B=new J;let D=0;const H=(t-e)/n;for(let q=0;q<=o;q++){const P=[],T=q/o,k=T*(t-e)+e;for(let K=0;K<=a;K++){const re=K/a,Q=re*p+h,he=Math.sin(Q),oe=Math.cos(Q);B.x=k*he,B.y=-T*n+y,B.z=k*oe,_.push(B.x,B.y,B.z),F.set(he,H,oe).normalize(),x.push(F.x,F.y,F.z),E.push(re,1-T),P.push(A++)}R.push(P)}for(let q=0;q<a;q++)for(let P=0;P<o;P++){const T=R[P][q],k=R[P+1][q],K=R[P+1][q+1],re=R[P][q+1];(e>0||P!==0)&&(v.push(T,k,re),D+=3),(t>0||P!==o-1)&&(v.push(k,K,re),D+=3)}d.addGroup(m,D,0),m+=D}function I(F){const B=A,D=new rt,H=new J;let q=0;const P=F===!0?e:t,T=F===!0?1:-1;for(let K=1;K<=a;K++)_.push(0,y*T,0),x.push(0,T,0),E.push(.5,.5),A++;const k=A;for(let K=0;K<=a;K++){const Q=K/a*p+h,he=Math.cos(Q),oe=Math.sin(Q);H.x=P*oe,H.y=y*T,H.z=P*he,_.push(H.x,H.y,H.z),x.push(0,T,0),D.x=he*.5+.5,D.y=oe*.5*T+.5,E.push(D.x,D.y),A++}for(let K=0;K<a;K++){const re=B+K,Q=k+K;F===!0?v.push(Q,Q+1,re):v.push(Q+1,Q,re),q+=3}d.addGroup(m,q,F===!0?1:2),m+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vr extends Fn{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const o=e/2,u=t/2,h=Math.floor(n),p=Math.floor(a),d=h+1,v=p+1,_=e/h,x=t/p,E=[],A=[],R=[],y=[];for(let m=0;m<v;m++){const O=m*x-u;for(let I=0;I<d;I++){const F=I*_-o;A.push(F,-O,0),R.push(0,0,1),y.push(I/h),y.push(1-m/p)}}for(let m=0;m<p;m++)for(let O=0;O<h;O++){const I=O+d*m,F=O+d*(m+1),B=O+1+d*(m+1),D=O+1+d*m;E.push(I,F,D),E.push(F,B,D)}this.setIndex(E),this.setAttribute("position",new un(A,3)),this.setAttribute("normal",new un(R,3)),this.setAttribute("uv",new un(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Tc extends mr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pu,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sg extends mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=L_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mg extends mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ru extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Tg extends Ru{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new mt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ba=new Ot,wc=new J,bc=new J;class wg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tl,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;wc.setFromMatrixPosition(e.matrixWorld),t.position.copy(wc),bc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bc),t.updateMatrixWorld(),Ba.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ba,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ba)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Cu extends Mu{constructor(e=-1,t=1,n=1,a=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=n-e,u=n+e,h=a+t,p=a-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,u=o+d*this.view.width,h-=v*this.view.offsetY,p=h-v*this.view.height}this.projectionMatrix.makeOrthographic(o,u,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class bg extends wg{constructor(){super(new Cu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ag extends Ru{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new bg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Rg extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ac{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=pt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Cg extends yg{constructor(e=10,t=10,n=4473924,a=8947848){n=new mt(n),a=new mt(a);const o=t/2,u=e/t,h=e/2,p=[],d=[];for(let x=0,E=0,A=-h;x<=t;x++,A+=u){p.push(-h,0,A,h,0,A),p.push(A,0,-h,A,0,h);const R=x===o?n:a;R.toArray(d,E),E+=3,R.toArray(d,E),E+=3,R.toArray(d,E),E+=3,R.toArray(d,E),E+=3}const v=new Fn;v.setAttribute("position",new un(p,3)),v.setAttribute("color",new un(d,3));const _=new wu({vertexColors:!0,toneMapped:!1});super(v,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Pg extends Hi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Rc(i,e,t,n){const a=Dg(n);switch(t){case uu:return i*e;case fu:return i*e/a.components*a.byteLength;case Yo:return i*e/a.components*a.byteLength;case du:return i*e*2/a.components*a.byteLength;case Ko:return i*e*2/a.components*a.byteLength;case hu:return i*e*3/a.components*a.byteLength;case Dn:return i*e*4/a.components*a.byteLength;case Zo:return i*e*4/a.components*a.byteLength;case Ns:case Os:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ks:case Bs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case po:case _o:return Math.max(i,16)*Math.max(e,8)/4;case fo:case mo:return Math.max(i,8)*Math.max(e,8)/2;case go:case vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case So:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case To:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case wo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case bo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ao:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Co:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Po:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Do:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Lo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Fo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Io:case Uo:case No:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Oo:case ko:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Bo:case zo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Dg(i){switch(i){case Vn:case au:return{byteLength:1,components:1};case Fr:case ou:case kr:return{byteLength:2,components:1};case jo:case qo:return{byteLength:2,components:4};case ki:case $o:case Qn:return{byteLength:4,components:1};case lu:case cu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Pu(){let i=null,e=!1,t=null,n=null;function a(o,u){t(o,u),n=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function Lg(i){const e=new WeakMap;function t(h,p){const d=h.array,v=h.usage,_=d.byteLength,x=i.createBuffer();i.bindBuffer(p,x),i.bufferData(p,d,v),h.onUploadCallback();let E;if(d instanceof Float32Array)E=i.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)E=i.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?E=i.HALF_FLOAT:E=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)E=i.SHORT;else if(d instanceof Uint32Array)E=i.UNSIGNED_INT;else if(d instanceof Int32Array)E=i.INT;else if(d instanceof Int8Array)E=i.BYTE;else if(d instanceof Uint8Array)E=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)E=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:E,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function n(h,p,d){const v=p.array,_=p.updateRanges;if(i.bindBuffer(d,h),_.length===0)i.bufferSubData(d,0,v);else{_.sort((E,A)=>E.start-A.start);let x=0;for(let E=1;E<_.length;E++){const A=_[x],R=_[E];R.start<=A.start+A.count+1?A.count=Math.max(A.count,R.start+R.count-A.start):(++x,_[x]=R)}_.length=x+1;for(let E=0,A=_.length;E<A;E++){const R=_[E];i.bufferSubData(d,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(i.deleteBuffer(p.buffer),e.delete(h))}function u(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=e.get(h);if(d===void 0)e.set(h,t(h,p));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,h,p),d.version=h.version}}return{get:a,remove:o,update:u}}var Fg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ig=`#ifdef USE_ALPHAHASH
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
#endif`,Ug=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ng=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Og=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bg=`#ifdef USE_AOMAP
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
#endif`,zg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hg=`#ifdef USE_BATCHING
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
#endif`,Vg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$g=`#ifdef USE_IRIDESCENCE
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
#endif`,jg=`#ifdef USE_BUMPMAP
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
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ev=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nv=`#define PI 3.141592653589793
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
} // validated`,iv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rv=`vec3 transformedNormal = objectNormal;
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
#endif`,sv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,av=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ov=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cv="gl_FragColor = linearToOutputTexel( gl_FragColor );",uv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hv=`#ifdef USE_ENVMAP
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
#endif`,fv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dv=`#ifdef USE_ENVMAP
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
#endif`,pv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mv=`#ifdef USE_ENVMAP
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
#endif`,_v=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ev=`#ifdef USE_GRADIENTMAP
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
}`,yv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tv=`uniform bool receiveShadow;
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
#endif`,wv=`#ifdef USE_ENVMAP
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
#endif`,bv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Av=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pv=`PhysicalMaterial material;
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
#endif`,Dv=`struct PhysicalMaterial {
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
}`,Lv=`
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
#endif`,Fv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Iv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ov=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vv=`#if defined( USE_POINTS_UV )
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
#endif`,Gv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$v=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qv=`#ifdef USE_MORPHTARGETS
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
#endif`,Yv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,t0=`#ifdef USE_NORMALMAP
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
#endif`,n0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,i0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,r0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,s0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,a0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,o0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,l0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,c0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,h0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,f0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,d0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,m0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,g0=`float getShadowMask() {
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
}`,v0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,x0=`#ifdef USE_SKINNING
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
#endif`,E0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y0=`#ifdef USE_SKINNING
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
#endif`,S0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,M0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,b0=`#ifdef USE_TRANSMISSION
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
#endif`,A0=`#ifdef USE_TRANSMISSION
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
#endif`,R0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const L0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F0=`uniform sampler2D t2D;
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
}`,I0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k0=`#include <common>
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
}`,B0=`#if DEPTH_PACKING == 3200
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
}`,z0=`#define DISTANCE
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
}`,H0=`#define DISTANCE
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
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`uniform float scale;
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
}`,X0=`uniform vec3 diffuse;
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
}`,$0=`#include <common>
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
}`,j0=`uniform vec3 diffuse;
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
}`,q0=`#define LAMBERT
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
}`,Y0=`#define LAMBERT
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
}`,K0=`#define MATCAP
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
}`,Z0=`#define MATCAP
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
}`,J0=`#define NORMAL
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
}`,Q0=`#define NORMAL
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
}`,ex=`#define PHONG
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
}`,tx=`#define PHONG
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
}`,nx=`#define STANDARD
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
}`,ix=`#define STANDARD
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
}`,rx=`#define TOON
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
}`,sx=`#define TOON
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
}`,ax=`uniform float size;
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
}`,ox=`uniform vec3 diffuse;
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
}`,lx=`#include <common>
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
}`,cx=`uniform vec3 color;
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
}`,ux=`uniform float rotation;
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
}`,hx=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:Fg,alphahash_pars_fragment:Ig,alphamap_fragment:Ug,alphamap_pars_fragment:Ng,alphatest_fragment:Og,alphatest_pars_fragment:kg,aomap_fragment:Bg,aomap_pars_fragment:zg,batching_pars_vertex:Hg,batching_vertex:Vg,begin_vertex:Gg,beginnormal_vertex:Wg,bsdfs:Xg,iridescence_fragment:$g,bumpmap_pars_fragment:jg,clipping_planes_fragment:qg,clipping_planes_pars_fragment:Yg,clipping_planes_pars_vertex:Kg,clipping_planes_vertex:Zg,color_fragment:Jg,color_pars_fragment:Qg,color_pars_vertex:ev,color_vertex:tv,common:nv,cube_uv_reflection_fragment:iv,defaultnormal_vertex:rv,displacementmap_pars_vertex:sv,displacementmap_vertex:av,emissivemap_fragment:ov,emissivemap_pars_fragment:lv,colorspace_fragment:cv,colorspace_pars_fragment:uv,envmap_fragment:hv,envmap_common_pars_fragment:fv,envmap_pars_fragment:dv,envmap_pars_vertex:pv,envmap_physical_pars_fragment:wv,envmap_vertex:mv,fog_vertex:_v,fog_pars_vertex:gv,fog_fragment:vv,fog_pars_fragment:xv,gradientmap_pars_fragment:Ev,lightmap_pars_fragment:yv,lights_lambert_fragment:Sv,lights_lambert_pars_fragment:Mv,lights_pars_begin:Tv,lights_toon_fragment:bv,lights_toon_pars_fragment:Av,lights_phong_fragment:Rv,lights_phong_pars_fragment:Cv,lights_physical_fragment:Pv,lights_physical_pars_fragment:Dv,lights_fragment_begin:Lv,lights_fragment_maps:Fv,lights_fragment_end:Iv,logdepthbuf_fragment:Uv,logdepthbuf_pars_fragment:Nv,logdepthbuf_pars_vertex:Ov,logdepthbuf_vertex:kv,map_fragment:Bv,map_pars_fragment:zv,map_particle_fragment:Hv,map_particle_pars_fragment:Vv,metalnessmap_fragment:Gv,metalnessmap_pars_fragment:Wv,morphinstance_vertex:Xv,morphcolor_vertex:$v,morphnormal_vertex:jv,morphtarget_pars_vertex:qv,morphtarget_vertex:Yv,normal_fragment_begin:Kv,normal_fragment_maps:Zv,normal_pars_fragment:Jv,normal_pars_vertex:Qv,normal_vertex:e0,normalmap_pars_fragment:t0,clearcoat_normal_fragment_begin:n0,clearcoat_normal_fragment_maps:i0,clearcoat_pars_fragment:r0,iridescence_pars_fragment:s0,opaque_fragment:a0,packing:o0,premultiplied_alpha_fragment:l0,project_vertex:c0,dithering_fragment:u0,dithering_pars_fragment:h0,roughnessmap_fragment:f0,roughnessmap_pars_fragment:d0,shadowmap_pars_fragment:p0,shadowmap_pars_vertex:m0,shadowmap_vertex:_0,shadowmask_pars_fragment:g0,skinbase_vertex:v0,skinning_pars_vertex:x0,skinning_vertex:E0,skinnormal_vertex:y0,specularmap_fragment:S0,specularmap_pars_fragment:M0,tonemapping_fragment:T0,tonemapping_pars_fragment:w0,transmission_fragment:b0,transmission_pars_fragment:A0,uv_pars_fragment:R0,uv_pars_vertex:C0,uv_vertex:P0,worldpos_vertex:D0,background_vert:L0,background_frag:F0,backgroundCube_vert:I0,backgroundCube_frag:U0,cube_vert:N0,cube_frag:O0,depth_vert:k0,depth_frag:B0,distanceRGBA_vert:z0,distanceRGBA_frag:H0,equirect_vert:V0,equirect_frag:G0,linedashed_vert:W0,linedashed_frag:X0,meshbasic_vert:$0,meshbasic_frag:j0,meshlambert_vert:q0,meshlambert_frag:Y0,meshmatcap_vert:K0,meshmatcap_frag:Z0,meshnormal_vert:J0,meshnormal_frag:Q0,meshphong_vert:ex,meshphong_frag:tx,meshphysical_vert:nx,meshphysical_frag:ix,meshtoon_vert:rx,meshtoon_frag:sx,points_vert:ax,points_frag:ox,shadow_vert:lx,shadow_frag:cx,sprite_vert:ux,sprite_frag:hx},Ce={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},kn={basic:{uniforms:nn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:nn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new mt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:nn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:nn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:nn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new mt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:nn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:nn([Ce.points,Ce.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:nn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:nn([Ce.common,Ce.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:nn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:nn([Ce.sprite,Ce.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:nn([Ce.common,Ce.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:nn([Ce.lights,Ce.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};kn.physical={uniforms:nn([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Ds={r:0,b:0,g:0},Ci=new Gn,fx=new Ot;function dx(i,e,t,n,a,o,u){const h=new mt(0);let p=o===!0?0:1,d,v,_=null,x=0,E=null;function A(I){let F=I.isScene===!0?I.background:null;return F&&F.isTexture&&(F=(I.backgroundBlurriness>0?t:e).get(F)),F}function R(I){let F=!1;const B=A(I);B===null?m(h,p):B&&B.isColor&&(m(B,1),F=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,u):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(i.autoClear||F)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(I,F){const B=A(F);B&&(B.isCubeTexture||B.mapping===js)?(v===void 0&&(v=new En(new Hr(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:pr(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(D,H,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),Ci.copy(F.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),v.material.uniforms.envMap.value=B,v.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(fx.makeRotationFromEuler(Ci)),v.material.toneMapped=Et.getTransfer(B.colorSpace)!==Rt,(_!==B||x!==B.version||E!==i.toneMapping)&&(v.material.needsUpdate=!0,_=B,x=B.version,E=i.toneMapping),v.layers.enableAll(),I.unshift(v,v.geometry,v.material,0,0,null)):B&&B.isTexture&&(d===void 0&&(d=new En(new Vr(2,2),new mi({name:"BackgroundMaterial",uniforms:pr(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(d)),d.material.uniforms.t2D.value=B,d.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,d.material.toneMapped=Et.getTransfer(B.colorSpace)!==Rt,B.matrixAutoUpdate===!0&&B.updateMatrix(),d.material.uniforms.uvTransform.value.copy(B.matrix),(_!==B||x!==B.version||E!==i.toneMapping)&&(d.material.needsUpdate=!0,_=B,x=B.version,E=i.toneMapping),d.layers.enableAll(),I.unshift(d,d.geometry,d.material,0,0,null))}function m(I,F){I.getRGB(Ds,Su(i)),n.buffers.color.setClear(Ds.r,Ds.g,Ds.b,F,u)}function O(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(I,F=1){h.set(I),p=F,m(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(I){p=I,m(h,p)},render:R,addToRenderList:y,dispose:O}}function px(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=x(null);let o=a,u=!1;function h(T,k,K,re,Q){let he=!1;const oe=_(re,K,k);o!==oe&&(o=oe,d(o.object)),he=E(T,re,K,Q),he&&A(T,re,K,Q),Q!==null&&e.update(Q,i.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,F(T,k,K,re),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function p(){return i.createVertexArray()}function d(T){return i.bindVertexArray(T)}function v(T){return i.deleteVertexArray(T)}function _(T,k,K){const re=K.wireframe===!0;let Q=n[T.id];Q===void 0&&(Q={},n[T.id]=Q);let he=Q[k.id];he===void 0&&(he={},Q[k.id]=he);let oe=he[re];return oe===void 0&&(oe=x(p()),he[re]=oe),oe}function x(T){const k=[],K=[],re=[];for(let Q=0;Q<t;Q++)k[Q]=0,K[Q]=0,re[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:K,attributeDivisors:re,object:T,attributes:{},index:null}}function E(T,k,K,re){const Q=o.attributes,he=k.attributes;let oe=0;const xe=K.getAttributes();for(const se in xe)if(xe[se].location>=0){const De=Q[se];let Oe=he[se];if(Oe===void 0&&(se==="instanceMatrix"&&T.instanceMatrix&&(Oe=T.instanceMatrix),se==="instanceColor"&&T.instanceColor&&(Oe=T.instanceColor)),De===void 0||De.attribute!==Oe||Oe&&De.data!==Oe.data)return!0;oe++}return o.attributesNum!==oe||o.index!==re}function A(T,k,K,re){const Q={},he=k.attributes;let oe=0;const xe=K.getAttributes();for(const se in xe)if(xe[se].location>=0){let De=he[se];De===void 0&&(se==="instanceMatrix"&&T.instanceMatrix&&(De=T.instanceMatrix),se==="instanceColor"&&T.instanceColor&&(De=T.instanceColor));const Oe={};Oe.attribute=De,De&&De.data&&(Oe.data=De.data),Q[se]=Oe,oe++}o.attributes=Q,o.attributesNum=oe,o.index=re}function R(){const T=o.newAttributes;for(let k=0,K=T.length;k<K;k++)T[k]=0}function y(T){m(T,0)}function m(T,k){const K=o.newAttributes,re=o.enabledAttributes,Q=o.attributeDivisors;K[T]=1,re[T]===0&&(i.enableVertexAttribArray(T),re[T]=1),Q[T]!==k&&(i.vertexAttribDivisor(T,k),Q[T]=k)}function O(){const T=o.newAttributes,k=o.enabledAttributes;for(let K=0,re=k.length;K<re;K++)k[K]!==T[K]&&(i.disableVertexAttribArray(K),k[K]=0)}function I(T,k,K,re,Q,he,oe){oe===!0?i.vertexAttribIPointer(T,k,K,Q,he):i.vertexAttribPointer(T,k,K,re,Q,he)}function F(T,k,K,re){R();const Q=re.attributes,he=K.getAttributes(),oe=k.defaultAttributeValues;for(const xe in he){const se=he[xe];if(se.location>=0){let Ee=Q[xe];if(Ee===void 0&&(xe==="instanceMatrix"&&T.instanceMatrix&&(Ee=T.instanceMatrix),xe==="instanceColor"&&T.instanceColor&&(Ee=T.instanceColor)),Ee!==void 0){const De=Ee.normalized,Oe=Ee.itemSize,Ze=e.get(Ee);if(Ze===void 0)continue;const at=Ze.buffer,tt=Ze.type,fe=Ze.bytesPerElement,Z=tt===i.INT||tt===i.UNSIGNED_INT||Ee.gpuType===$o;if(Ee.isInterleavedBufferAttribute){const ne=Ee.data,te=ne.stride,pe=Ee.offset;if(ne.isInstancedInterleavedBuffer){for(let Ne=0;Ne<se.locationSize;Ne++)m(se.location+Ne,ne.meshPerAttribute);T.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ne=0;Ne<se.locationSize;Ne++)y(se.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,at);for(let Ne=0;Ne<se.locationSize;Ne++)I(se.location+Ne,Oe/se.locationSize,tt,De,te*fe,(pe+Oe/se.locationSize*Ne)*fe,Z)}else{if(Ee.isInstancedBufferAttribute){for(let ne=0;ne<se.locationSize;ne++)m(se.location+ne,Ee.meshPerAttribute);T.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let ne=0;ne<se.locationSize;ne++)y(se.location+ne);i.bindBuffer(i.ARRAY_BUFFER,at);for(let ne=0;ne<se.locationSize;ne++)I(se.location+ne,Oe/se.locationSize,tt,De,Oe*fe,Oe/se.locationSize*ne*fe,Z)}}else if(oe!==void 0){const De=oe[xe];if(De!==void 0)switch(De.length){case 2:i.vertexAttrib2fv(se.location,De);break;case 3:i.vertexAttrib3fv(se.location,De);break;case 4:i.vertexAttrib4fv(se.location,De);break;default:i.vertexAttrib1fv(se.location,De)}}}}O()}function B(){q();for(const T in n){const k=n[T];for(const K in k){const re=k[K];for(const Q in re)v(re[Q].object),delete re[Q];delete k[K]}delete n[T]}}function D(T){if(n[T.id]===void 0)return;const k=n[T.id];for(const K in k){const re=k[K];for(const Q in re)v(re[Q].object),delete re[Q];delete k[K]}delete n[T.id]}function H(T){for(const k in n){const K=n[k];if(K[T.id]===void 0)continue;const re=K[T.id];for(const Q in re)v(re[Q].object),delete re[Q];delete K[T.id]}}function q(){P(),u=!0,o!==a&&(o=a,d(o.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:h,reset:q,resetDefaultState:P,dispose:B,releaseStatesOfGeometry:D,releaseStatesOfProgram:H,initAttributes:R,enableAttribute:y,disableUnusedAttributes:O}}function mx(i,e,t){let n;function a(d){n=d}function o(d,v){i.drawArrays(n,d,v),t.update(v,n,1)}function u(d,v,_){_!==0&&(i.drawArraysInstanced(n,d,v,_),t.update(v,n,_))}function h(d,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,v,0,_);let E=0;for(let A=0;A<_;A++)E+=v[A];t.update(E,n,1)}function p(d,v,_,x){if(_===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let A=0;A<d.length;A++)u(d[A],v[A],x[A]);else{E.multiDrawArraysInstancedWEBGL(n,d,0,v,0,x,0,_);let A=0;for(let R=0;R<_;R++)A+=v[R]*x[R];t.update(A,n,1)}}this.setMode=a,this.render=o,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function _x(i,e,t,n){let a;function o(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(H){return!(H!==Dn&&n.convert(H)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(H){const q=H===kr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(H!==Vn&&n.convert(H)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==Qn&&!q)}function p(H){if(H==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const v=p(d);v!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",v,"instead."),d=v);const _=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),O=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),F=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=A>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:E,maxVertexTextures:A,maxTextureSize:R,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:O,maxVaryings:I,maxFragmentUniforms:F,vertexTextures:B,maxSamples:D}}function gx(i){const e=this;let t=null,n=0,a=!1,o=!1;const u=new ui,h=new ot,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const E=_.length!==0||x||n!==0||a;return a=x,n=_.length,E},this.beginShadows=function(){o=!0,v(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(_,x){t=v(_,x,0)},this.setState=function(_,x,E){const A=_.clippingPlanes,R=_.clipIntersection,y=_.clipShadows,m=i.get(_);if(!a||A===null||A.length===0||o&&!y)o?v(null):d();else{const O=o?0:n,I=O*4;let F=m.clippingState||null;p.value=F,F=v(A,x,I,E);for(let B=0;B!==I;++B)F[B]=t[B];m.clippingState=F,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=O}};function d(){p.value!==t&&(p.value=t,p.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function v(_,x,E,A){const R=_!==null?_.length:0;let y=null;if(R!==0){if(y=p.value,A!==!0||y===null){const m=E+R*4,O=x.matrixWorldInverse;h.getNormalMatrix(O),(y===null||y.length<m)&&(y=new Float32Array(m));for(let I=0,F=E;I!==R;++I,F+=4)u.copy(_[I]).applyMatrix4(O,h),u.normal.toArray(y,F),y[F+3]=u.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}function vx(i){let e=new WeakMap;function t(u,h){return h===lo?u.mapping=hr:h===co&&(u.mapping=fr),u}function n(u){if(u&&u.isTexture){const h=u.mapping;if(h===lo||h===co)if(e.has(u)){const p=e.get(u).texture;return t(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const d=new pg(p.height);return d.fromEquirectangularTexture(i,u),e.set(u,d),u.addEventListener("dispose",a),t(d.texture,u.mapping)}else return null}}return u}function a(u){const h=u.target;h.removeEventListener("dispose",a);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}const sr=4,Cc=[.125,.215,.35,.446,.526,.582],Ui=20,za=new Cu,Pc=new mt;let Ha=null,Va=0,Ga=0,Wa=!1;const Fi=(1+Math.sqrt(5))/2,nr=1/Fi,Dc=[new J(-Fi,nr,0),new J(Fi,nr,0),new J(-nr,0,Fi),new J(nr,0,Fi),new J(0,Fi,-nr),new J(0,Fi,nr),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],xx=new J;class Lc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,a=100,o={}){const{size:u=256,position:h=xx}=o;Ha=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,n,a,p,h),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ha,Va,Ga),this._renderer.xr.enabled=Wa,e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hr||e.mapping===fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ha=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:kr,format:Dn,colorSpace:dr,depthBuffer:!1},a=Fc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fc(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ex(o)),this._blurMaterial=yx(o,e,t)}return a}_compileMaterial(e){const t=new En(this._lodPlanes[0],e);this._renderer.compile(t,za)}_sceneToCubeUV(e,t,n,a,o){const p=new xn(90,1,t,n),d=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,E=_.toneMapping;_.getClearColor(Pc),_.toneMapping=di,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(a),_.clearDepth(),_.setRenderTarget(null));const R=new el({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),y=new En(new Hr,R);let m=!1;const O=e.background;O?O.isColor&&(R.color.copy(O),e.background=null,m=!0):(R.color.copy(Pc),m=!0);for(let I=0;I<6;I++){const F=I%3;F===0?(p.up.set(0,d[I],0),p.position.set(o.x,o.y,o.z),p.lookAt(o.x+v[I],o.y,o.z)):F===1?(p.up.set(0,0,d[I]),p.position.set(o.x,o.y,o.z),p.lookAt(o.x,o.y+v[I],o.z)):(p.up.set(0,d[I],0),p.position.set(o.x,o.y,o.z),p.lookAt(o.x,o.y,o.z+v[I]));const B=this._cubeSize;Ls(a,F*B,I>2?B:0,B,B),_.setRenderTarget(a),m&&_.render(y,p),_.render(e,p)}y.geometry.dispose(),y.material.dispose(),_.toneMapping=E,_.autoClear=x,e.background=O}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===hr||e.mapping===fr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ic());const o=a?this._cubemapMaterial:this._equirectMaterial,u=new En(this._lodPlanes[0],o),h=o.uniforms;h.envMap.value=e;const p=this._cubeSize;Ls(t,0,0,3*p,2*p),n.setRenderTarget(t),n.render(u,za)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let o=1;o<a;o++){const u=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),h=Dc[(a-o-1)%Dc.length];this._blur(e,o-1,o,u,h)}t.autoClear=n}_blur(e,t,n,a,o){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,n,a,"latitudinal",o),this._halfBlur(u,e,n,n,a,"longitudinal",o)}_halfBlur(e,t,n,a,o,u,h){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,_=new En(this._lodPlanes[a],d),x=d.uniforms,E=this._sizeLods[n]-1,A=isFinite(o)?Math.PI/(2*E):2*Math.PI/(2*Ui-1),R=o/A,y=isFinite(o)?1+Math.floor(v*R):Ui;y>Ui&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ui}`);const m=[];let O=0;for(let H=0;H<Ui;++H){const q=H/R,P=Math.exp(-q*q/2);m.push(P),H===0?O+=P:H<y&&(O+=2*P)}for(let H=0;H<m.length;H++)m[H]=m[H]/O;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=m,x.latitudinal.value=u==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:I}=this;x.dTheta.value=A,x.mipInt.value=I-n;const F=this._sizeLods[a],B=3*F*(a>I-sr?a-I+sr:0),D=4*(this._cubeSize-F);Ls(t,B,D,3*F,2*F),p.setRenderTarget(t),p.render(_,za)}}function Ex(i){const e=[],t=[],n=[];let a=i;const o=i-sr+1+Cc.length;for(let u=0;u<o;u++){const h=Math.pow(2,a);t.push(h);let p=1/h;u>i-sr?p=Cc[u-i+sr-1]:u===0&&(p=0),n.push(p);const d=1/(h-2),v=-d,_=1+d,x=[v,v,_,v,_,_,v,v,_,_,v,_],E=6,A=6,R=3,y=2,m=1,O=new Float32Array(R*A*E),I=new Float32Array(y*A*E),F=new Float32Array(m*A*E);for(let D=0;D<E;D++){const H=D%3*2/3-1,q=D>2?0:-1,P=[H,q,0,H+2/3,q,0,H+2/3,q+1,0,H,q,0,H+2/3,q+1,0,H,q+1,0];O.set(P,R*A*D),I.set(x,y*A*D);const T=[D,D,D,D,D,D];F.set(T,m*A*D)}const B=new Fn;B.setAttribute("position",new yn(O,R)),B.setAttribute("uv",new yn(I,y)),B.setAttribute("faceIndex",new yn(F,m)),e.push(B),a>sr&&a--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fc(i,e,t){const n=new zi(i,e,t);return n.texture.mapping=js,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ls(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function yx(i,e,t){const n=new Float32Array(Ui),a=new J(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:il(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Ic(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:il(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Uc(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function il(){return`

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
	`}function Sx(i){let e=new WeakMap,t=null;function n(h){if(h&&h.isTexture){const p=h.mapping,d=p===lo||p===co,v=p===hr||p===fr;if(d||v){let _=e.get(h);const x=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return t===null&&(t=new Lc(i)),_=d?t.fromEquirectangular(h,_):t.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const E=h.image;return d&&E&&E.height>0||v&&E&&a(E)?(t===null&&(t=new Lc(i)),_=d?t.fromEquirectangular(h):t.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",o),_.texture):null}}}return h}function a(h){let p=0;const d=6;for(let v=0;v<d;v++)h[v]!==void 0&&p++;return p===d}function o(h){const p=h.target;p.removeEventListener("dispose",o);const d=e.get(p);d!==void 0&&(e.delete(p),d.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:u}}function Mx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let a;switch(n){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(n)}return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&Or("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function Tx(i,e,t,n){const a={},o=new WeakMap;function u(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);x.removeEventListener("dispose",u),delete a[x.id];const E=o.get(x);E&&(e.remove(E),o.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function h(_,x){return a[x.id]===!0||(x.addEventListener("dispose",u),a[x.id]=!0,t.memory.geometries++),x}function p(_){const x=_.attributes;for(const E in x)e.update(x[E],i.ARRAY_BUFFER)}function d(_){const x=[],E=_.index,A=_.attributes.position;let R=0;if(E!==null){const O=E.array;R=E.version;for(let I=0,F=O.length;I<F;I+=3){const B=O[I+0],D=O[I+1],H=O[I+2];x.push(B,D,D,H,H,B)}}else if(A!==void 0){const O=A.array;R=A.version;for(let I=0,F=O.length/3-1;I<F;I+=3){const B=I+0,D=I+1,H=I+2;x.push(B,D,D,H,H,B)}}else return;const y=new(_u(x)?yu:Eu)(x,1);y.version=R;const m=o.get(_);m&&e.remove(m),o.set(_,y)}function v(_){const x=o.get(_);if(x){const E=_.index;E!==null&&x.version<E.version&&d(_)}else d(_);return o.get(_)}return{get:h,update:p,getWireframeAttribute:v}}function wx(i,e,t){let n;function a(x){n=x}let o,u;function h(x){o=x.type,u=x.bytesPerElement}function p(x,E){i.drawElements(n,E,o,x*u),t.update(E,n,1)}function d(x,E,A){A!==0&&(i.drawElementsInstanced(n,E,o,x*u,A),t.update(E,n,A))}function v(x,E,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,E,0,o,x,0,A);let y=0;for(let m=0;m<A;m++)y+=E[m];t.update(y,n,1)}function _(x,E,A,R){if(A===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let m=0;m<x.length;m++)d(x[m]/u,E[m],R[m]);else{y.multiDrawElementsInstancedWEBGL(n,E,0,o,x,0,R,0,A);let m=0;for(let O=0;O<A;O++)m+=E[O]*R[O];t.update(m,n,1)}}this.setMode=a,this.setIndex=h,this.render=p,this.renderInstances=d,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function bx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,u,h){switch(t.calls++,u){case i.TRIANGLES:t.triangles+=h*(o/3);break;case i.LINES:t.lines+=h*(o/2);break;case i.LINE_STRIP:t.lines+=h*(o-1);break;case i.LINE_LOOP:t.lines+=h*o;break;case i.POINTS:t.points+=h*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function Ax(i,e,t){const n=new WeakMap,a=new Nt;function o(u,h,p){const d=u.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=v!==void 0?v.length:0;let x=n.get(h);if(x===void 0||x.count!==_){let P=function(){H.dispose(),n.delete(h),h.removeEventListener("dispose",P)};x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],m=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let I=0;E===!0&&(I=1),A===!0&&(I=2),R===!0&&(I=3);let F=h.attributes.position.count*I,B=1;F>e.maxTextureSize&&(B=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const D=new Float32Array(F*B*4*_),H=new gu(D,F,B,_);H.type=Qn,H.needsUpdate=!0;const q=I*4;for(let T=0;T<_;T++){const k=y[T],K=m[T],re=O[T],Q=F*B*4*T;for(let he=0;he<k.count;he++){const oe=he*q;E===!0&&(a.fromBufferAttribute(k,he),D[Q+oe+0]=a.x,D[Q+oe+1]=a.y,D[Q+oe+2]=a.z,D[Q+oe+3]=0),A===!0&&(a.fromBufferAttribute(K,he),D[Q+oe+4]=a.x,D[Q+oe+5]=a.y,D[Q+oe+6]=a.z,D[Q+oe+7]=0),R===!0&&(a.fromBufferAttribute(re,he),D[Q+oe+8]=a.x,D[Q+oe+9]=a.y,D[Q+oe+10]=a.z,D[Q+oe+11]=re.itemSize===4?a.w:1)}}x={count:_,texture:H,size:new rt(F,B)},n.set(h,x),h.addEventListener("dispose",P)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(i,"morphTexture",u.morphTexture,t);else{let E=0;for(let R=0;R<d.length;R++)E+=d[R];const A=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(i,"morphTargetBaseInfluence",A),p.getUniforms().setValue(i,"morphTargetInfluences",d)}p.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}return{update:o}}function Rx(i,e,t,n){let a=new WeakMap;function o(p){const d=n.render.frame,v=p.geometry,_=e.get(p,v);if(a.get(_)!==d&&(e.update(_),a.set(_,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),a.get(p)!==d&&(t.update(p.instanceMatrix,i.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,i.ARRAY_BUFFER),a.set(p,d))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==d&&(x.update(),a.set(x,d))}return _}function u(){a=new WeakMap}function h(p){const d=p.target;d.removeEventListener("dispose",h),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:u}}const Du=new cn,Nc=new bu(1,1),Lu=new gu,Fu=new Z_,Iu=new Tu,Oc=[],kc=[],Bc=new Float32Array(16),zc=new Float32Array(9),Hc=new Float32Array(4);function _r(i,e,t){const n=i[0];if(n<=0||n>0)return i;const a=e*t;let o=Oc[a];if(o===void 0&&(o=new Float32Array(a),Oc[a]=o),e!==0){n.toArray(o,0);for(let u=1,h=0;u!==e;++u)h+=t,i[u].toArray(o,h)}return o}function Xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ys(i,e){let t=kc[e];t===void 0&&(t=new Int32Array(e),kc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Cx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Px(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function Dx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function Lx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function Fx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Xt(t,n))return;Hc.set(n),i.uniformMatrix2fv(this.addr,!1,Hc),$t(t,n)}}function Ix(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Xt(t,n))return;zc.set(n),i.uniformMatrix3fv(this.addr,!1,zc),$t(t,n)}}function Ux(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Xt(t,n))return;Bc.set(n),i.uniformMatrix4fv(this.addr,!1,Bc),$t(t,n)}}function Nx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ox(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function kx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function Bx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function zx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Hx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function Vx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function Gx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function Wx(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let o;this.type===i.SAMPLER_2D_SHADOW?(Nc.compareFunction=mu,o=Nc):o=Du,t.setTexture2D(e||o,a)}function Xx(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||Fu,a)}function $x(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||Iu,a)}function jx(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||Lu,a)}function qx(i){switch(i){case 5126:return Cx;case 35664:return Px;case 35665:return Dx;case 35666:return Lx;case 35674:return Fx;case 35675:return Ix;case 35676:return Ux;case 5124:case 35670:return Nx;case 35667:case 35671:return Ox;case 35668:case 35672:return kx;case 35669:case 35673:return Bx;case 5125:return zx;case 36294:return Hx;case 36295:return Vx;case 36296:return Gx;case 35678:case 36198:case 36298:case 36306:case 35682:return Wx;case 35679:case 36299:case 36307:return Xx;case 35680:case 36300:case 36308:case 36293:return $x;case 36289:case 36303:case 36311:case 36292:return jx}}function Yx(i,e){i.uniform1fv(this.addr,e)}function Kx(i,e){const t=_r(e,this.size,2);i.uniform2fv(this.addr,t)}function Zx(i,e){const t=_r(e,this.size,3);i.uniform3fv(this.addr,t)}function Jx(i,e){const t=_r(e,this.size,4);i.uniform4fv(this.addr,t)}function Qx(i,e){const t=_r(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function eE(i,e){const t=_r(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function tE(i,e){const t=_r(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function nE(i,e){i.uniform1iv(this.addr,e)}function iE(i,e){i.uniform2iv(this.addr,e)}function rE(i,e){i.uniform3iv(this.addr,e)}function sE(i,e){i.uniform4iv(this.addr,e)}function aE(i,e){i.uniform1uiv(this.addr,e)}function oE(i,e){i.uniform2uiv(this.addr,e)}function lE(i,e){i.uniform3uiv(this.addr,e)}function cE(i,e){i.uniform4uiv(this.addr,e)}function uE(i,e,t){const n=this.cache,a=e.length,o=Ys(t,a);Xt(n,o)||(i.uniform1iv(this.addr,o),$t(n,o));for(let u=0;u!==a;++u)t.setTexture2D(e[u]||Du,o[u])}function hE(i,e,t){const n=this.cache,a=e.length,o=Ys(t,a);Xt(n,o)||(i.uniform1iv(this.addr,o),$t(n,o));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||Fu,o[u])}function fE(i,e,t){const n=this.cache,a=e.length,o=Ys(t,a);Xt(n,o)||(i.uniform1iv(this.addr,o),$t(n,o));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||Iu,o[u])}function dE(i,e,t){const n=this.cache,a=e.length,o=Ys(t,a);Xt(n,o)||(i.uniform1iv(this.addr,o),$t(n,o));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||Lu,o[u])}function pE(i){switch(i){case 5126:return Yx;case 35664:return Kx;case 35665:return Zx;case 35666:return Jx;case 35674:return Qx;case 35675:return eE;case 35676:return tE;case 5124:case 35670:return nE;case 35667:case 35671:return iE;case 35668:case 35672:return rE;case 35669:case 35673:return sE;case 5125:return aE;case 36294:return oE;case 36295:return lE;case 36296:return cE;case 35678:case 36198:case 36298:case 36306:case 35682:return uE;case 35679:case 36299:case 36307:return hE;case 35680:case 36300:case 36308:case 36293:return fE;case 36289:case 36303:case 36311:case 36292:return dE}}class mE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qx(t.type)}}class _E{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pE(t.type)}}class gE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let o=0,u=a.length;o!==u;++o){const h=a[o];h.setValue(e,t[h.id],n)}}}const Xa=/(\w+)(\])?(\[|\.)?/g;function Vc(i,e){i.seq.push(e),i.map[e.id]=e}function vE(i,e,t){const n=i.name,a=n.length;for(Xa.lastIndex=0;;){const o=Xa.exec(n),u=Xa.lastIndex;let h=o[1];const p=o[2]==="]",d=o[3];if(p&&(h=h|0),d===void 0||d==="["&&u+2===a){Vc(t,d===void 0?new mE(h,i,e):new _E(h,i,e));break}else{let _=t.map[h];_===void 0&&(_=new gE(h),Vc(t,_)),t=_}}}class Hs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),u=e.getUniformLocation(t,o.name);vE(o,u,this)}}setValue(e,t,n,a){const o=this.map[t];o!==void 0&&o.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let o=0,u=t.length;o!==u;++o){const h=t[o],p=n[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,o=e.length;a!==o;++a){const u=e[a];u.id in t&&n.push(u)}return n}}function Gc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const xE=37297;let EE=0;function yE(i,e){const t=i.split(`
`),n=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let u=a;u<o;u++){const h=u+1;n.push(`${h===e?">":" "} ${h}: ${t[u]}`)}return n.join(`
`)}const Wc=new ot;function SE(i){Et._getMatrix(Wc,Et.workingColorSpace,i);const e=`mat3( ${Wc.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(i)){case Vs:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Xc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),o=(i.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const h=parseInt(u[1]);return t.toUpperCase()+`

`+o+`

`+yE(i.getShaderSource(e),h)}else return o}function ME(i,e){const t=SE(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function TE(i,e){let t;switch(e){case T_:t="Linear";break;case w_:t="Reinhard";break;case b_:t="Cineon";break;case A_:t="ACESFilmic";break;case C_:t="AgX";break;case P_:t="Neutral";break;case R_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fs=new J;function wE(){Et.getLuminanceCoefficients(Fs);const i=Fs.x.toFixed(4),e=Fs.y.toFixed(4),t=Fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pr).join(`
`)}function AE(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function RE(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const o=i.getActiveAttrib(e,a),u=o.name;let h=1;o.type===i.FLOAT_MAT2&&(h=2),o.type===i.FLOAT_MAT3&&(h=3),o.type===i.FLOAT_MAT4&&(h=4),t[u]={type:o.type,location:i.getAttribLocation(e,u),locationSize:h}}return t}function Pr(i){return i!==""}function $c(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vo(i){return i.replace(CE,DE)}const PE=new Map;function DE(i,e){let t=ht[e];if(t===void 0){const n=PE.get(e);if(n!==void 0)t=ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Vo(t)}const LE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qc(i){return i.replace(LE,FE)}function FE(i,e,t,n){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function Yc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function IE(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===iu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===i_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function UE(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hr:case fr:e="ENVMAP_TYPE_CUBE";break;case js:e="ENVMAP_TYPE_CUBE_UV";break}return e}function NE(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fr:e="ENVMAP_MODE_REFRACTION";break}return e}function OE(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ru:e="ENVMAP_BLENDING_MULTIPLY";break;case S_:e="ENVMAP_BLENDING_MIX";break;case M_:e="ENVMAP_BLENDING_ADD";break}return e}function kE(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function BE(i,e,t,n){const a=i.getContext(),o=t.defines;let u=t.vertexShader,h=t.fragmentShader;const p=IE(t),d=UE(t),v=NE(t),_=OE(t),x=kE(t),E=bE(t),A=AE(o),R=a.createProgram();let y,m,O=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(Pr).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(Pr).join(`
`),m.length>0&&(m+=`
`)):(y=[Yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),m=[Yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+v:"",t.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?ht.tonemapping_pars_fragment:"",t.toneMapping!==di?TE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,ME("linearToOutputTexel",t.outputColorSpace),wE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pr).join(`
`)),u=Vo(u),u=$c(u,t),u=jc(u,t),h=Vo(h),h=$c(h,t),h=jc(h,t),u=qc(u),h=qc(h),t.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",t.glslVersion===nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const I=O+y+u,F=O+m+h,B=Gc(a,a.VERTEX_SHADER,I),D=Gc(a,a.FRAGMENT_SHADER,F);a.attachShader(R,B),a.attachShader(R,D),t.index0AttributeName!==void 0?a.bindAttribLocation(R,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function H(k){if(i.debug.checkShaderErrors){const K=a.getProgramInfoLog(R)||"",re=a.getShaderInfoLog(B)||"",Q=a.getShaderInfoLog(D)||"",he=K.trim(),oe=re.trim(),xe=Q.trim();let se=!0,Ee=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,R,B,D);else{const De=Xc(a,B,"vertex"),Oe=Xc(a,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+he+`
`+De+`
`+Oe)}else he!==""?console.warn("THREE.WebGLProgram: Program Info Log:",he):(oe===""||xe==="")&&(Ee=!1);Ee&&(k.diagnostics={runnable:se,programLog:he,vertexShader:{log:oe,prefix:y},fragmentShader:{log:xe,prefix:m}})}a.deleteShader(B),a.deleteShader(D),q=new Hs(a,R),P=RE(a,R)}let q;this.getUniforms=function(){return q===void 0&&H(this),q};let P;this.getAttributes=function(){return P===void 0&&H(this),P};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=a.getProgramParameter(R,xE)),T},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=EE++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=B,this.fragmentShader=D,this}let zE=0;class HE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,a=this._getShaderStage(t),o=this._getShaderStage(n),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(o)===!1&&(u.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new VE(e),t.set(e,n)),n}}class VE{constructor(e){this.id=zE++,this.code=e,this.usedTimes=0}}function GE(i,e,t,n,a,o,u){const h=new vu,p=new HE,d=new Set,v=[],_=a.logarithmicDepthBuffer,x=a.vertexTextures;let E=a.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(P){return d.add(P),P===0?"uv":`uv${P}`}function y(P,T,k,K,re){const Q=K.fog,he=re.geometry,oe=P.isMeshStandardMaterial?K.environment:null,xe=(P.isMeshStandardMaterial?t:e).get(P.envMap||oe),se=xe&&xe.mapping===js?xe.image.height:null,Ee=A[P.type];P.precision!==null&&(E=a.getMaxPrecision(P.precision),E!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",E,"instead."));const De=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,Oe=De!==void 0?De.length:0;let Ze=0;he.morphAttributes.position!==void 0&&(Ze=1),he.morphAttributes.normal!==void 0&&(Ze=2),he.morphAttributes.color!==void 0&&(Ze=3);let at,tt,fe,Z;if(Ee){const lt=kn[Ee];at=lt.vertexShader,tt=lt.fragmentShader}else at=P.vertexShader,tt=P.fragmentShader,p.update(P),fe=p.getVertexShaderID(P),Z=p.getFragmentShaderID(P);const ne=i.getRenderTarget(),te=i.state.buffers.depth.getReversed(),pe=re.isInstancedMesh===!0,Ne=re.isBatchedMesh===!0,Be=!!P.map,je=!!P.matcap,N=!!xe,it=!!P.aoMap,He=!!P.lightMap,Ye=!!P.bumpMap,ke=!!P.normalMap,yt=!!P.displacementMap,Fe=!!P.emissiveMap,Qe=!!P.metalnessMap,wt=!!P.roughnessMap,bt=P.anisotropy>0,U=P.clearcoat>0,b=P.dispersion>0,j=P.iridescence>0,le=P.sheen>0,me=P.transmission>0,ue=bt&&!!P.anisotropyMap,$e=U&&!!P.clearcoatMap,we=U&&!!P.clearcoatNormalMap,Ve=U&&!!P.clearcoatRoughnessMap,We=j&&!!P.iridescenceMap,Me=j&&!!P.iridescenceThicknessMap,Le=le&&!!P.sheenColorMap,et=le&&!!P.sheenRoughnessMap,Ge=!!P.specularMap,Ae=!!P.specularColorMap,st=!!P.specularIntensityMap,V=me&&!!P.transmissionMap,Te=me&&!!P.thicknessMap,be=!!P.gradientMap,Ue=!!P.alphaMap,G=P.alphaTest>0,z=!!P.alphaHash,Ie=!!P.extensions;let nt=di;P.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(nt=i.toneMapping);const vt={shaderID:Ee,shaderType:P.type,shaderName:P.name,vertexShader:at,fragmentShader:tt,defines:P.defines,customVertexShaderID:fe,customFragmentShaderID:Z,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:E,batching:Ne,batchingColor:Ne&&re._colorsTexture!==null,instancing:pe,instancingColor:pe&&re.instanceColor!==null,instancingMorph:pe&&re.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:dr,alphaToCoverage:!!P.alphaToCoverage,map:Be,matcap:je,envMap:N,envMapMode:N&&xe.mapping,envMapCubeUVHeight:se,aoMap:it,lightMap:He,bumpMap:Ye,normalMap:ke,displacementMap:x&&yt,emissiveMap:Fe,normalMapObjectSpace:ke&&P.normalMapType===I_,normalMapTangentSpace:ke&&P.normalMapType===pu,metalnessMap:Qe,roughnessMap:wt,anisotropy:bt,anisotropyMap:ue,clearcoat:U,clearcoatMap:$e,clearcoatNormalMap:we,clearcoatRoughnessMap:Ve,dispersion:b,iridescence:j,iridescenceMap:We,iridescenceThicknessMap:Me,sheen:le,sheenColorMap:Le,sheenRoughnessMap:et,specularMap:Ge,specularColorMap:Ae,specularIntensityMap:st,transmission:me,transmissionMap:V,thicknessMap:Te,gradientMap:be,opaque:P.transparent===!1&&P.blending===lr&&P.alphaToCoverage===!1,alphaMap:Ue,alphaTest:G,alphaHash:z,combine:P.combine,mapUv:Be&&R(P.map.channel),aoMapUv:it&&R(P.aoMap.channel),lightMapUv:He&&R(P.lightMap.channel),bumpMapUv:Ye&&R(P.bumpMap.channel),normalMapUv:ke&&R(P.normalMap.channel),displacementMapUv:yt&&R(P.displacementMap.channel),emissiveMapUv:Fe&&R(P.emissiveMap.channel),metalnessMapUv:Qe&&R(P.metalnessMap.channel),roughnessMapUv:wt&&R(P.roughnessMap.channel),anisotropyMapUv:ue&&R(P.anisotropyMap.channel),clearcoatMapUv:$e&&R(P.clearcoatMap.channel),clearcoatNormalMapUv:we&&R(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&R(P.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&R(P.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&R(P.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&R(P.sheenColorMap.channel),sheenRoughnessMapUv:et&&R(P.sheenRoughnessMap.channel),specularMapUv:Ge&&R(P.specularMap.channel),specularColorMapUv:Ae&&R(P.specularColorMap.channel),specularIntensityMapUv:st&&R(P.specularIntensityMap.channel),transmissionMapUv:V&&R(P.transmissionMap.channel),thicknessMapUv:Te&&R(P.thicknessMap.channel),alphaMapUv:Ue&&R(P.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(ke||bt),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:re.isPoints===!0&&!!he.attributes.uv&&(Be||Ue),fog:!!Q,useFog:P.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:P.flatShading===!0&&P.wireframe===!1,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:te,skinning:re.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:Ze,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:nt,decodeVideoTexture:Be&&P.map.isVideoTexture===!0&&Et.getTransfer(P.map.colorSpace)===Rt,decodeVideoTextureEmissive:Fe&&P.emissiveMap.isVideoTexture===!0&&Et.getTransfer(P.emissiveMap.colorSpace)===Rt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Cn,flipSided:P.side===ln,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:Ie&&P.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&P.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return vt.vertexUv1s=d.has(1),vt.vertexUv2s=d.has(2),vt.vertexUv3s=d.has(3),d.clear(),vt}function m(P){const T=[];if(P.shaderID?T.push(P.shaderID):(T.push(P.customVertexShaderID),T.push(P.customFragmentShaderID)),P.defines!==void 0)for(const k in P.defines)T.push(k),T.push(P.defines[k]);return P.isRawShaderMaterial===!1&&(O(T,P),I(T,P),T.push(i.outputColorSpace)),T.push(P.customProgramCacheKey),T.join()}function O(P,T){P.push(T.precision),P.push(T.outputColorSpace),P.push(T.envMapMode),P.push(T.envMapCubeUVHeight),P.push(T.mapUv),P.push(T.alphaMapUv),P.push(T.lightMapUv),P.push(T.aoMapUv),P.push(T.bumpMapUv),P.push(T.normalMapUv),P.push(T.displacementMapUv),P.push(T.emissiveMapUv),P.push(T.metalnessMapUv),P.push(T.roughnessMapUv),P.push(T.anisotropyMapUv),P.push(T.clearcoatMapUv),P.push(T.clearcoatNormalMapUv),P.push(T.clearcoatRoughnessMapUv),P.push(T.iridescenceMapUv),P.push(T.iridescenceThicknessMapUv),P.push(T.sheenColorMapUv),P.push(T.sheenRoughnessMapUv),P.push(T.specularMapUv),P.push(T.specularColorMapUv),P.push(T.specularIntensityMapUv),P.push(T.transmissionMapUv),P.push(T.thicknessMapUv),P.push(T.combine),P.push(T.fogExp2),P.push(T.sizeAttenuation),P.push(T.morphTargetsCount),P.push(T.morphAttributeCount),P.push(T.numDirLights),P.push(T.numPointLights),P.push(T.numSpotLights),P.push(T.numSpotLightMaps),P.push(T.numHemiLights),P.push(T.numRectAreaLights),P.push(T.numDirLightShadows),P.push(T.numPointLightShadows),P.push(T.numSpotLightShadows),P.push(T.numSpotLightShadowsWithMaps),P.push(T.numLightProbes),P.push(T.shadowMapType),P.push(T.toneMapping),P.push(T.numClippingPlanes),P.push(T.numClipIntersection),P.push(T.depthPacking)}function I(P,T){h.disableAll(),T.supportsVertexTextures&&h.enable(0),T.instancing&&h.enable(1),T.instancingColor&&h.enable(2),T.instancingMorph&&h.enable(3),T.matcap&&h.enable(4),T.envMap&&h.enable(5),T.normalMapObjectSpace&&h.enable(6),T.normalMapTangentSpace&&h.enable(7),T.clearcoat&&h.enable(8),T.iridescence&&h.enable(9),T.alphaTest&&h.enable(10),T.vertexColors&&h.enable(11),T.vertexAlphas&&h.enable(12),T.vertexUv1s&&h.enable(13),T.vertexUv2s&&h.enable(14),T.vertexUv3s&&h.enable(15),T.vertexTangents&&h.enable(16),T.anisotropy&&h.enable(17),T.alphaHash&&h.enable(18),T.batching&&h.enable(19),T.dispersion&&h.enable(20),T.batchingColor&&h.enable(21),T.gradientMap&&h.enable(22),P.push(h.mask),h.disableAll(),T.fog&&h.enable(0),T.useFog&&h.enable(1),T.flatShading&&h.enable(2),T.logarithmicDepthBuffer&&h.enable(3),T.reversedDepthBuffer&&h.enable(4),T.skinning&&h.enable(5),T.morphTargets&&h.enable(6),T.morphNormals&&h.enable(7),T.morphColors&&h.enable(8),T.premultipliedAlpha&&h.enable(9),T.shadowMapEnabled&&h.enable(10),T.doubleSided&&h.enable(11),T.flipSided&&h.enable(12),T.useDepthPacking&&h.enable(13),T.dithering&&h.enable(14),T.transmission&&h.enable(15),T.sheen&&h.enable(16),T.opaque&&h.enable(17),T.pointsUvs&&h.enable(18),T.decodeVideoTexture&&h.enable(19),T.decodeVideoTextureEmissive&&h.enable(20),T.alphaToCoverage&&h.enable(21),P.push(h.mask)}function F(P){const T=A[P.type];let k;if(T){const K=kn[T];k=ug.clone(K.uniforms)}else k=P.uniforms;return k}function B(P,T){let k;for(let K=0,re=v.length;K<re;K++){const Q=v[K];if(Q.cacheKey===T){k=Q,++k.usedTimes;break}}return k===void 0&&(k=new BE(i,T,P,o),v.push(k)),k}function D(P){if(--P.usedTimes===0){const T=v.indexOf(P);v[T]=v[v.length-1],v.pop(),P.destroy()}}function H(P){p.remove(P)}function q(){p.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:F,acquireProgram:B,releaseProgram:D,releaseShaderCache:H,programs:v,dispose:q}}function WE(){let i=new WeakMap;function e(u){return i.has(u)}function t(u){let h=i.get(u);return h===void 0&&(h={},i.set(u,h)),h}function n(u){i.delete(u)}function a(u,h,p){i.get(u)[h]=p}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:o}}function XE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Kc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Zc(){const i=[];let e=0;const t=[],n=[],a=[];function o(){e=0,t.length=0,n.length=0,a.length=0}function u(_,x,E,A,R,y){let m=i[e];return m===void 0?(m={id:_.id,object:_,geometry:x,material:E,groupOrder:A,renderOrder:_.renderOrder,z:R,group:y},i[e]=m):(m.id=_.id,m.object=_,m.geometry=x,m.material=E,m.groupOrder=A,m.renderOrder=_.renderOrder,m.z=R,m.group=y),e++,m}function h(_,x,E,A,R,y){const m=u(_,x,E,A,R,y);E.transmission>0?n.push(m):E.transparent===!0?a.push(m):t.push(m)}function p(_,x,E,A,R,y){const m=u(_,x,E,A,R,y);E.transmission>0?n.unshift(m):E.transparent===!0?a.unshift(m):t.unshift(m)}function d(_,x){t.length>1&&t.sort(_||XE),n.length>1&&n.sort(x||Kc),a.length>1&&a.sort(x||Kc)}function v(){for(let _=e,x=i.length;_<x;_++){const E=i[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:n,transparent:a,init:o,push:h,unshift:p,finish:v,sort:d}}function $E(){let i=new WeakMap;function e(n,a){const o=i.get(n);let u;return o===void 0?(u=new Zc,i.set(n,[u])):a>=o.length?(u=new Zc,o.push(u)):u=o[a],u}function t(){i=new WeakMap}return{get:e,dispose:t}}function jE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new mt};break;case"SpotLight":t={position:new J,direction:new J,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new J,halfWidth:new J,halfHeight:new J};break}return i[e.id]=t,t}}}function qE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let YE=0;function KE(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ZE(i){const e=new jE,t=qE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new J);const a=new J,o=new Ot,u=new Ot;function h(d){let v=0,_=0,x=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let E=0,A=0,R=0,y=0,m=0,O=0,I=0,F=0,B=0,D=0,H=0;d.sort(KE);for(let P=0,T=d.length;P<T;P++){const k=d[P],K=k.color,re=k.intensity,Q=k.distance,he=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)v+=K.r*re,_+=K.g*re,x+=K.b*re;else if(k.isLightProbe){for(let oe=0;oe<9;oe++)n.probe[oe].addScaledVector(k.sh.coefficients[oe],re);H++}else if(k.isDirectionalLight){const oe=e.get(k);if(oe.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const xe=k.shadow,se=t.get(k);se.shadowIntensity=xe.intensity,se.shadowBias=xe.bias,se.shadowNormalBias=xe.normalBias,se.shadowRadius=xe.radius,se.shadowMapSize=xe.mapSize,n.directionalShadow[E]=se,n.directionalShadowMap[E]=he,n.directionalShadowMatrix[E]=k.shadow.matrix,O++}n.directional[E]=oe,E++}else if(k.isSpotLight){const oe=e.get(k);oe.position.setFromMatrixPosition(k.matrixWorld),oe.color.copy(K).multiplyScalar(re),oe.distance=Q,oe.coneCos=Math.cos(k.angle),oe.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),oe.decay=k.decay,n.spot[R]=oe;const xe=k.shadow;if(k.map&&(n.spotLightMap[B]=k.map,B++,xe.updateMatrices(k),k.castShadow&&D++),n.spotLightMatrix[R]=xe.matrix,k.castShadow){const se=t.get(k);se.shadowIntensity=xe.intensity,se.shadowBias=xe.bias,se.shadowNormalBias=xe.normalBias,se.shadowRadius=xe.radius,se.shadowMapSize=xe.mapSize,n.spotShadow[R]=se,n.spotShadowMap[R]=he,F++}R++}else if(k.isRectAreaLight){const oe=e.get(k);oe.color.copy(K).multiplyScalar(re),oe.halfWidth.set(k.width*.5,0,0),oe.halfHeight.set(0,k.height*.5,0),n.rectArea[y]=oe,y++}else if(k.isPointLight){const oe=e.get(k);if(oe.color.copy(k.color).multiplyScalar(k.intensity),oe.distance=k.distance,oe.decay=k.decay,k.castShadow){const xe=k.shadow,se=t.get(k);se.shadowIntensity=xe.intensity,se.shadowBias=xe.bias,se.shadowNormalBias=xe.normalBias,se.shadowRadius=xe.radius,se.shadowMapSize=xe.mapSize,se.shadowCameraNear=xe.camera.near,se.shadowCameraFar=xe.camera.far,n.pointShadow[A]=se,n.pointShadowMap[A]=he,n.pointShadowMatrix[A]=k.shadow.matrix,I++}n.point[A]=oe,A++}else if(k.isHemisphereLight){const oe=e.get(k);oe.skyColor.copy(k.color).multiplyScalar(re),oe.groundColor.copy(k.groundColor).multiplyScalar(re),n.hemi[m]=oe,m++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=v,n.ambient[1]=_,n.ambient[2]=x;const q=n.hash;(q.directionalLength!==E||q.pointLength!==A||q.spotLength!==R||q.rectAreaLength!==y||q.hemiLength!==m||q.numDirectionalShadows!==O||q.numPointShadows!==I||q.numSpotShadows!==F||q.numSpotMaps!==B||q.numLightProbes!==H)&&(n.directional.length=E,n.spot.length=R,n.rectArea.length=y,n.point.length=A,n.hemi.length=m,n.directionalShadow.length=O,n.directionalShadowMap.length=O,n.pointShadow.length=I,n.pointShadowMap.length=I,n.spotShadow.length=F,n.spotShadowMap.length=F,n.directionalShadowMatrix.length=O,n.pointShadowMatrix.length=I,n.spotLightMatrix.length=F+B-D,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=H,q.directionalLength=E,q.pointLength=A,q.spotLength=R,q.rectAreaLength=y,q.hemiLength=m,q.numDirectionalShadows=O,q.numPointShadows=I,q.numSpotShadows=F,q.numSpotMaps=B,q.numLightProbes=H,n.version=YE++)}function p(d,v){let _=0,x=0,E=0,A=0,R=0;const y=v.matrixWorldInverse;for(let m=0,O=d.length;m<O;m++){const I=d[m];if(I.isDirectionalLight){const F=n.directional[_];F.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),F.direction.sub(a),F.direction.transformDirection(y),_++}else if(I.isSpotLight){const F=n.spot[E];F.position.setFromMatrixPosition(I.matrixWorld),F.position.applyMatrix4(y),F.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),F.direction.sub(a),F.direction.transformDirection(y),E++}else if(I.isRectAreaLight){const F=n.rectArea[A];F.position.setFromMatrixPosition(I.matrixWorld),F.position.applyMatrix4(y),u.identity(),o.copy(I.matrixWorld),o.premultiply(y),u.extractRotation(o),F.halfWidth.set(I.width*.5,0,0),F.halfHeight.set(0,I.height*.5,0),F.halfWidth.applyMatrix4(u),F.halfHeight.applyMatrix4(u),A++}else if(I.isPointLight){const F=n.point[x];F.position.setFromMatrixPosition(I.matrixWorld),F.position.applyMatrix4(y),x++}else if(I.isHemisphereLight){const F=n.hemi[R];F.direction.setFromMatrixPosition(I.matrixWorld),F.direction.transformDirection(y),R++}}}return{setup:h,setupView:p,state:n}}function Jc(i){const e=new ZE(i),t=[],n=[];function a(v){d.camera=v,t.length=0,n.length=0}function o(v){t.push(v)}function u(v){n.push(v)}function h(){e.setup(t)}function p(v){e.setupView(t,v)}const d={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:d,setupLights:h,setupLightsView:p,pushLight:o,pushShadow:u}}function JE(i){let e=new WeakMap;function t(a,o=0){const u=e.get(a);let h;return u===void 0?(h=new Jc(i),e.set(a,[h])):o>=u.length?(h=new Jc(i),u.push(h)):h=u[o],h}function n(){e=new WeakMap}return{get:t,dispose:n}}const QE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ey=`uniform sampler2D shadow_pass;
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
}`;function ty(i,e,t){let n=new tl;const a=new rt,o=new rt,u=new Nt,h=new Sg({depthPacking:F_}),p=new Mg,d={},v=t.maxTextureSize,_={[pi]:ln,[ln]:pi,[Cn]:Cn},x=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:QE,fragmentShader:ey}),E=x.clone();E.defines.HORIZONTAL_PASS=1;const A=new Fn;A.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new En(A,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iu;let m=this.type;this.render=function(D,H,q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;const P=i.getRenderTarget(),T=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),K=i.state;K.setBlending(fi),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const re=m!==Jn&&this.type===Jn,Q=m===Jn&&this.type!==Jn;for(let he=0,oe=D.length;he<oe;he++){const xe=D[he],se=xe.shadow;if(se===void 0){console.warn("THREE.WebGLShadowMap:",xe,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;a.copy(se.mapSize);const Ee=se.getFrameExtents();if(a.multiply(Ee),o.copy(se.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(o.x=Math.floor(v/Ee.x),a.x=o.x*Ee.x,se.mapSize.x=o.x),a.y>v&&(o.y=Math.floor(v/Ee.y),a.y=o.y*Ee.y,se.mapSize.y=o.y)),se.map===null||re===!0||Q===!0){const Oe=this.type!==Jn?{minFilter:Ln,magFilter:Ln}:{};se.map!==null&&se.map.dispose(),se.map=new zi(a.x,a.y,Oe),se.map.texture.name=xe.name+".shadowMap",se.camera.updateProjectionMatrix()}i.setRenderTarget(se.map),i.clear();const De=se.getViewportCount();for(let Oe=0;Oe<De;Oe++){const Ze=se.getViewport(Oe);u.set(o.x*Ze.x,o.y*Ze.y,o.x*Ze.z,o.y*Ze.w),K.viewport(u),se.updateMatrices(xe,Oe),n=se.getFrustum(),F(H,q,se.camera,xe,this.type)}se.isPointLightShadow!==!0&&this.type===Jn&&O(se,q),se.needsUpdate=!1}m=this.type,y.needsUpdate=!1,i.setRenderTarget(P,T,k)};function O(D,H){const q=e.update(R);x.defines.VSM_SAMPLES!==D.blurSamples&&(x.defines.VSM_SAMPLES=D.blurSamples,E.defines.VSM_SAMPLES=D.blurSamples,x.needsUpdate=!0,E.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new zi(a.x,a.y)),x.uniforms.shadow_pass.value=D.map.texture,x.uniforms.resolution.value=D.mapSize,x.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(H,null,q,x,R,null),E.uniforms.shadow_pass.value=D.mapPass.texture,E.uniforms.resolution.value=D.mapSize,E.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(H,null,q,E,R,null)}function I(D,H,q,P){let T=null;const k=q.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(k!==void 0)T=k;else if(T=q.isPointLight===!0?p:h,i.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const K=T.uuid,re=H.uuid;let Q=d[K];Q===void 0&&(Q={},d[K]=Q);let he=Q[re];he===void 0&&(he=T.clone(),Q[re]=he,H.addEventListener("dispose",B)),T=he}if(T.visible=H.visible,T.wireframe=H.wireframe,P===Jn?T.side=H.shadowSide!==null?H.shadowSide:H.side:T.side=H.shadowSide!==null?H.shadowSide:_[H.side],T.alphaMap=H.alphaMap,T.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,T.map=H.map,T.clipShadows=H.clipShadows,T.clippingPlanes=H.clippingPlanes,T.clipIntersection=H.clipIntersection,T.displacementMap=H.displacementMap,T.displacementScale=H.displacementScale,T.displacementBias=H.displacementBias,T.wireframeLinewidth=H.wireframeLinewidth,T.linewidth=H.linewidth,q.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const K=i.properties.get(T);K.light=q}return T}function F(D,H,q,P,T){if(D.visible===!1)return;if(D.layers.test(H.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&T===Jn)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,D.matrixWorld);const re=e.update(D),Q=D.material;if(Array.isArray(Q)){const he=re.groups;for(let oe=0,xe=he.length;oe<xe;oe++){const se=he[oe],Ee=Q[se.materialIndex];if(Ee&&Ee.visible){const De=I(D,Ee,P,T);D.onBeforeShadow(i,D,H,q,re,De,se),i.renderBufferDirect(q,null,re,De,D,se),D.onAfterShadow(i,D,H,q,re,De,se)}}}else if(Q.visible){const he=I(D,Q,P,T);D.onBeforeShadow(i,D,H,q,re,he,null),i.renderBufferDirect(q,null,re,he,D,null),D.onAfterShadow(i,D,H,q,re,he,null)}}const K=D.children;for(let re=0,Q=K.length;re<Q;re++)F(K[re],H,q,P,T)}function B(D){D.target.removeEventListener("dispose",B);for(const q in d){const P=d[q],T=D.target.uuid;T in P&&(P[T].dispose(),delete P[T])}}}const ny={[to]:no,[io]:ao,[ro]:oo,[ur]:so,[no]:to,[ao]:io,[oo]:ro,[so]:ur};function iy(i,e){function t(){let V=!1;const Te=new Nt;let be=null;const Ue=new Nt(0,0,0,0);return{setMask:function(G){be!==G&&!V&&(i.colorMask(G,G,G,G),be=G)},setLocked:function(G){V=G},setClear:function(G,z,Ie,nt,vt){vt===!0&&(G*=nt,z*=nt,Ie*=nt),Te.set(G,z,Ie,nt),Ue.equals(Te)===!1&&(i.clearColor(G,z,Ie,nt),Ue.copy(Te))},reset:function(){V=!1,be=null,Ue.set(-1,0,0,0)}}}function n(){let V=!1,Te=!1,be=null,Ue=null,G=null;return{setReversed:function(z){if(Te!==z){const Ie=e.get("EXT_clip_control");z?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),Te=z;const nt=G;G=null,this.setClear(nt)}},getReversed:function(){return Te},setTest:function(z){z?ne(i.DEPTH_TEST):te(i.DEPTH_TEST)},setMask:function(z){be!==z&&!V&&(i.depthMask(z),be=z)},setFunc:function(z){if(Te&&(z=ny[z]),Ue!==z){switch(z){case to:i.depthFunc(i.NEVER);break;case no:i.depthFunc(i.ALWAYS);break;case io:i.depthFunc(i.LESS);break;case ur:i.depthFunc(i.LEQUAL);break;case ro:i.depthFunc(i.EQUAL);break;case so:i.depthFunc(i.GEQUAL);break;case ao:i.depthFunc(i.GREATER);break;case oo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ue=z}},setLocked:function(z){V=z},setClear:function(z){G!==z&&(Te&&(z=1-z),i.clearDepth(z),G=z)},reset:function(){V=!1,be=null,Ue=null,G=null,Te=!1}}}function a(){let V=!1,Te=null,be=null,Ue=null,G=null,z=null,Ie=null,nt=null,vt=null;return{setTest:function(lt){V||(lt?ne(i.STENCIL_TEST):te(i.STENCIL_TEST))},setMask:function(lt){Te!==lt&&!V&&(i.stencilMask(lt),Te=lt)},setFunc:function(lt,Sn,kt){(be!==lt||Ue!==Sn||G!==kt)&&(i.stencilFunc(lt,Sn,kt),be=lt,Ue=Sn,G=kt)},setOp:function(lt,Sn,kt){(z!==lt||Ie!==Sn||nt!==kt)&&(i.stencilOp(lt,Sn,kt),z=lt,Ie=Sn,nt=kt)},setLocked:function(lt){V=lt},setClear:function(lt){vt!==lt&&(i.clearStencil(lt),vt=lt)},reset:function(){V=!1,Te=null,be=null,Ue=null,G=null,z=null,Ie=null,nt=null,vt=null}}}const o=new t,u=new n,h=new a,p=new WeakMap,d=new WeakMap;let v={},_={},x=new WeakMap,E=[],A=null,R=!1,y=null,m=null,O=null,I=null,F=null,B=null,D=null,H=new mt(0,0,0),q=0,P=!1,T=null,k=null,K=null,re=null,Q=null;const he=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,xe=0;const se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(xe=parseFloat(/^WebGL (\d)/.exec(se)[1]),oe=xe>=1):se.indexOf("OpenGL ES")!==-1&&(xe=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),oe=xe>=2);let Ee=null,De={};const Oe=i.getParameter(i.SCISSOR_BOX),Ze=i.getParameter(i.VIEWPORT),at=new Nt().fromArray(Oe),tt=new Nt().fromArray(Ze);function fe(V,Te,be,Ue){const G=new Uint8Array(4),z=i.createTexture();i.bindTexture(V,z),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<be;Ie++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(Te,0,i.RGBA,1,1,Ue,0,i.RGBA,i.UNSIGNED_BYTE,G):i.texImage2D(Te+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,G);return z}const Z={};Z[i.TEXTURE_2D]=fe(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),u.setClear(1),h.setClear(0),ne(i.DEPTH_TEST),u.setFunc(ur),Ye(!1),ke(Kl),ne(i.CULL_FACE),it(fi);function ne(V){v[V]!==!0&&(i.enable(V),v[V]=!0)}function te(V){v[V]!==!1&&(i.disable(V),v[V]=!1)}function pe(V,Te){return _[V]!==Te?(i.bindFramebuffer(V,Te),_[V]=Te,V===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=Te),V===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=Te),!0):!1}function Ne(V,Te){let be=E,Ue=!1;if(V){be=x.get(Te),be===void 0&&(be=[],x.set(Te,be));const G=V.textures;if(be.length!==G.length||be[0]!==i.COLOR_ATTACHMENT0){for(let z=0,Ie=G.length;z<Ie;z++)be[z]=i.COLOR_ATTACHMENT0+z;be.length=G.length,Ue=!0}}else be[0]!==i.BACK&&(be[0]=i.BACK,Ue=!0);Ue&&i.drawBuffers(be)}function Be(V){return A!==V?(i.useProgram(V),A=V,!0):!1}const je={[Ii]:i.FUNC_ADD,[s_]:i.FUNC_SUBTRACT,[a_]:i.FUNC_REVERSE_SUBTRACT};je[o_]=i.MIN,je[l_]=i.MAX;const N={[c_]:i.ZERO,[u_]:i.ONE,[h_]:i.SRC_COLOR,[Qa]:i.SRC_ALPHA,[g_]:i.SRC_ALPHA_SATURATE,[m_]:i.DST_COLOR,[d_]:i.DST_ALPHA,[f_]:i.ONE_MINUS_SRC_COLOR,[eo]:i.ONE_MINUS_SRC_ALPHA,[__]:i.ONE_MINUS_DST_COLOR,[p_]:i.ONE_MINUS_DST_ALPHA,[v_]:i.CONSTANT_COLOR,[x_]:i.ONE_MINUS_CONSTANT_COLOR,[E_]:i.CONSTANT_ALPHA,[y_]:i.ONE_MINUS_CONSTANT_ALPHA};function it(V,Te,be,Ue,G,z,Ie,nt,vt,lt){if(V===fi){R===!0&&(te(i.BLEND),R=!1);return}if(R===!1&&(ne(i.BLEND),R=!0),V!==r_){if(V!==y||lt!==P){if((m!==Ii||F!==Ii)&&(i.blendEquation(i.FUNC_ADD),m=Ii,F=Ii),lt)switch(V){case lr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zl:i.blendFunc(i.ONE,i.ONE);break;case Jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ql:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case lr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Jl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ql:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}O=null,I=null,B=null,D=null,H.set(0,0,0),q=0,y=V,P=lt}return}G=G||Te,z=z||be,Ie=Ie||Ue,(Te!==m||G!==F)&&(i.blendEquationSeparate(je[Te],je[G]),m=Te,F=G),(be!==O||Ue!==I||z!==B||Ie!==D)&&(i.blendFuncSeparate(N[be],N[Ue],N[z],N[Ie]),O=be,I=Ue,B=z,D=Ie),(nt.equals(H)===!1||vt!==q)&&(i.blendColor(nt.r,nt.g,nt.b,vt),H.copy(nt),q=vt),y=V,P=!1}function He(V,Te){V.side===Cn?te(i.CULL_FACE):ne(i.CULL_FACE);let be=V.side===ln;Te&&(be=!be),Ye(be),V.blending===lr&&V.transparent===!1?it(fi):it(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),o.setMask(V.colorWrite);const Ue=V.stencilWrite;h.setTest(Ue),Ue&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Fe(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):te(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(V){T!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),T=V)}function ke(V){V!==t_?(ne(i.CULL_FACE),V!==k&&(V===Kl?i.cullFace(i.BACK):V===n_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):te(i.CULL_FACE),k=V}function yt(V){V!==K&&(oe&&i.lineWidth(V),K=V)}function Fe(V,Te,be){V?(ne(i.POLYGON_OFFSET_FILL),(re!==Te||Q!==be)&&(i.polygonOffset(Te,be),re=Te,Q=be)):te(i.POLYGON_OFFSET_FILL)}function Qe(V){V?ne(i.SCISSOR_TEST):te(i.SCISSOR_TEST)}function wt(V){V===void 0&&(V=i.TEXTURE0+he-1),Ee!==V&&(i.activeTexture(V),Ee=V)}function bt(V,Te,be){be===void 0&&(Ee===null?be=i.TEXTURE0+he-1:be=Ee);let Ue=De[be];Ue===void 0&&(Ue={type:void 0,texture:void 0},De[be]=Ue),(Ue.type!==V||Ue.texture!==Te)&&(Ee!==be&&(i.activeTexture(be),Ee=be),i.bindTexture(V,Te||Z[V]),Ue.type=V,Ue.texture=Te)}function U(){const V=De[Ee];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function j(){try{i.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function le(){try{i.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function me(){try{i.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ue(){try{i.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function $e(){try{i.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function we(){try{i.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ve(){try{i.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function We(){try{i.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{i.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Le(V){at.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),at.copy(V))}function et(V){tt.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),tt.copy(V))}function Ge(V,Te){let be=d.get(Te);be===void 0&&(be=new WeakMap,d.set(Te,be));let Ue=be.get(V);Ue===void 0&&(Ue=i.getUniformBlockIndex(Te,V.name),be.set(V,Ue))}function Ae(V,Te){const Ue=d.get(Te).get(V);p.get(Te)!==Ue&&(i.uniformBlockBinding(Te,Ue,V.__bindingPointIndex),p.set(Te,Ue))}function st(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),v={},Ee=null,De={},_={},x=new WeakMap,E=[],A=null,R=!1,y=null,m=null,O=null,I=null,F=null,B=null,D=null,H=new mt(0,0,0),q=0,P=!1,T=null,k=null,K=null,re=null,Q=null,at.set(0,0,i.canvas.width,i.canvas.height),tt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),u.reset(),h.reset()}return{buffers:{color:o,depth:u,stencil:h},enable:ne,disable:te,bindFramebuffer:pe,drawBuffers:Ne,useProgram:Be,setBlending:it,setMaterial:He,setFlipSided:Ye,setCullFace:ke,setLineWidth:yt,setPolygonOffset:Fe,setScissorTest:Qe,activeTexture:wt,bindTexture:bt,unbindTexture:U,compressedTexImage2D:b,compressedTexImage3D:j,texImage2D:We,texImage3D:Me,updateUBOMapping:Ge,uniformBlockBinding:Ae,texStorage2D:we,texStorage3D:Ve,texSubImage2D:le,texSubImage3D:me,compressedTexSubImage2D:ue,compressedTexSubImage3D:$e,scissor:Le,viewport:et,reset:st}}function ry(i,e,t,n,a,o,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new rt,v=new WeakMap;let _;const x=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(U,b){return E?new OffscreenCanvas(U,b):Ws("canvas")}function R(U,b,j){let le=1;const me=bt(U);if((me.width>j||me.height>j)&&(le=j/Math.max(me.width,me.height)),le<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ue=Math.floor(le*me.width),$e=Math.floor(le*me.height);_===void 0&&(_=A(ue,$e));const we=b?A(ue,$e):_;return we.width=ue,we.height=$e,we.getContext("2d").drawImage(U,0,0,ue,$e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+ue+"x"+$e+")."),we}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),U;return U}function y(U){return U.generateMipmaps}function m(U){i.generateMipmap(U)}function O(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function I(U,b,j,le,me=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ue=b;if(b===i.RED&&(j===i.FLOAT&&(ue=i.R32F),j===i.HALF_FLOAT&&(ue=i.R16F),j===i.UNSIGNED_BYTE&&(ue=i.R8)),b===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(ue=i.R8UI),j===i.UNSIGNED_SHORT&&(ue=i.R16UI),j===i.UNSIGNED_INT&&(ue=i.R32UI),j===i.BYTE&&(ue=i.R8I),j===i.SHORT&&(ue=i.R16I),j===i.INT&&(ue=i.R32I)),b===i.RG&&(j===i.FLOAT&&(ue=i.RG32F),j===i.HALF_FLOAT&&(ue=i.RG16F),j===i.UNSIGNED_BYTE&&(ue=i.RG8)),b===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(ue=i.RG8UI),j===i.UNSIGNED_SHORT&&(ue=i.RG16UI),j===i.UNSIGNED_INT&&(ue=i.RG32UI),j===i.BYTE&&(ue=i.RG8I),j===i.SHORT&&(ue=i.RG16I),j===i.INT&&(ue=i.RG32I)),b===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(ue=i.RGB8UI),j===i.UNSIGNED_SHORT&&(ue=i.RGB16UI),j===i.UNSIGNED_INT&&(ue=i.RGB32UI),j===i.BYTE&&(ue=i.RGB8I),j===i.SHORT&&(ue=i.RGB16I),j===i.INT&&(ue=i.RGB32I)),b===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(ue=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(ue=i.RGBA16UI),j===i.UNSIGNED_INT&&(ue=i.RGBA32UI),j===i.BYTE&&(ue=i.RGBA8I),j===i.SHORT&&(ue=i.RGBA16I),j===i.INT&&(ue=i.RGBA32I)),b===i.RGB&&(j===i.UNSIGNED_INT_5_9_9_9_REV&&(ue=i.RGB9_E5),j===i.UNSIGNED_INT_10F_11F_11F_REV&&(ue=i.R11F_G11F_B10F)),b===i.RGBA){const $e=me?Vs:Et.getTransfer(le);j===i.FLOAT&&(ue=i.RGBA32F),j===i.HALF_FLOAT&&(ue=i.RGBA16F),j===i.UNSIGNED_BYTE&&(ue=$e===Rt?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(ue=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(ue=i.RGB5_A1)}return(ue===i.R16F||ue===i.R32F||ue===i.RG16F||ue===i.RG32F||ue===i.RGBA16F||ue===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function F(U,b){let j;return U?b===null||b===ki||b===Ir?j=i.DEPTH24_STENCIL8:b===Qn?j=i.DEPTH32F_STENCIL8:b===Fr&&(j=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ki||b===Ir?j=i.DEPTH_COMPONENT24:b===Qn?j=i.DEPTH_COMPONENT32F:b===Fr&&(j=i.DEPTH_COMPONENT16),j}function B(U,b){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ln&&U.minFilter!==zn?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function D(U){const b=U.target;b.removeEventListener("dispose",D),q(b),b.isVideoTexture&&v.delete(b)}function H(U){const b=U.target;b.removeEventListener("dispose",H),T(b)}function q(U){const b=n.get(U);if(b.__webglInit===void 0)return;const j=U.source,le=x.get(j);if(le){const me=le[b.__cacheKey];me.usedTimes--,me.usedTimes===0&&P(U),Object.keys(le).length===0&&x.delete(j)}n.remove(U)}function P(U){const b=n.get(U);i.deleteTexture(b.__webglTexture);const j=U.source,le=x.get(j);delete le[b.__cacheKey],u.memory.textures--}function T(U){const b=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(b.__webglFramebuffer[le]))for(let me=0;me<b.__webglFramebuffer[le].length;me++)i.deleteFramebuffer(b.__webglFramebuffer[le][me]);else i.deleteFramebuffer(b.__webglFramebuffer[le]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[le])}else{if(Array.isArray(b.__webglFramebuffer))for(let le=0;le<b.__webglFramebuffer.length;le++)i.deleteFramebuffer(b.__webglFramebuffer[le]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let le=0;le<b.__webglColorRenderbuffer.length;le++)b.__webglColorRenderbuffer[le]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[le]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const j=U.textures;for(let le=0,me=j.length;le<me;le++){const ue=n.get(j[le]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),u.memory.textures--),n.remove(j[le])}n.remove(U)}let k=0;function K(){k=0}function re(){const U=k;return U>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+a.maxTextures),k+=1,U}function Q(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function he(U,b){const j=n.get(U);if(U.isVideoTexture&&Qe(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&j.__version!==U.version){const le=U.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(j,U,b);return}}else U.isExternalTexture&&(j.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+b)}function oe(U,b){const j=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&j.__version!==U.version){Z(j,U,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+b)}function xe(U,b){const j=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&j.__version!==U.version){Z(j,U,b);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+b)}function se(U,b){const j=n.get(U);if(U.version>0&&j.__version!==U.version){ne(j,U,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+b)}const Ee={[uo]:i.REPEAT,[Ni]:i.CLAMP_TO_EDGE,[ho]:i.MIRRORED_REPEAT},De={[Ln]:i.NEAREST,[D_]:i.NEAREST_MIPMAP_NEAREST,[us]:i.NEAREST_MIPMAP_LINEAR,[zn]:i.LINEAR,[pa]:i.LINEAR_MIPMAP_NEAREST,[Oi]:i.LINEAR_MIPMAP_LINEAR},Oe={[U_]:i.NEVER,[H_]:i.ALWAYS,[N_]:i.LESS,[mu]:i.LEQUAL,[O_]:i.EQUAL,[z_]:i.GEQUAL,[k_]:i.GREATER,[B_]:i.NOTEQUAL};function Ze(U,b){if(b.type===Qn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===zn||b.magFilter===pa||b.magFilter===us||b.magFilter===Oi||b.minFilter===zn||b.minFilter===pa||b.minFilter===us||b.minFilter===Oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,Ee[b.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,Ee[b.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,Ee[b.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,De[b.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,De[b.minFilter]),b.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,Oe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ln||b.minFilter!==us&&b.minFilter!==Oi||b.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,a.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function at(U,b){let j=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",D));const le=b.source;let me=x.get(le);me===void 0&&(me={},x.set(le,me));const ue=Q(b);if(ue!==U.__cacheKey){me[ue]===void 0&&(me[ue]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,j=!0),me[ue].usedTimes++;const $e=me[U.__cacheKey];$e!==void 0&&(me[U.__cacheKey].usedTimes--,$e.usedTimes===0&&P(b)),U.__cacheKey=ue,U.__webglTexture=me[ue].texture}return j}function tt(U,b,j){return Math.floor(Math.floor(U/j)/b)}function fe(U,b,j,le){const ue=U.updateRanges;if(ue.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,j,le,b.data);else{ue.sort((Me,Le)=>Me.start-Le.start);let $e=0;for(let Me=1;Me<ue.length;Me++){const Le=ue[$e],et=ue[Me],Ge=Le.start+Le.count,Ae=tt(et.start,b.width,4),st=tt(Le.start,b.width,4);et.start<=Ge+1&&Ae===st&&tt(et.start+et.count-1,b.width,4)===Ae?Le.count=Math.max(Le.count,et.start+et.count-Le.start):(++$e,ue[$e]=et)}ue.length=$e+1;const we=i.getParameter(i.UNPACK_ROW_LENGTH),Ve=i.getParameter(i.UNPACK_SKIP_PIXELS),We=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let Me=0,Le=ue.length;Me<Le;Me++){const et=ue[Me],Ge=Math.floor(et.start/4),Ae=Math.ceil(et.count/4),st=Ge%b.width,V=Math.floor(Ge/b.width),Te=Ae,be=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,st),i.pixelStorei(i.UNPACK_SKIP_ROWS,V),t.texSubImage2D(i.TEXTURE_2D,0,st,V,Te,be,j,le,b.data)}U.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,we),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,We)}}function Z(U,b,j){let le=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(le=i.TEXTURE_3D);const me=at(U,b),ue=b.source;t.bindTexture(le,U.__webglTexture,i.TEXTURE0+j);const $e=n.get(ue);if(ue.version!==$e.__version||me===!0){t.activeTexture(i.TEXTURE0+j);const we=Et.getPrimaries(Et.workingColorSpace),Ve=b.colorSpace===hi?null:Et.getPrimaries(b.colorSpace),We=b.colorSpace===hi||we===Ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let Me=R(b.image,!1,a.maxTextureSize);Me=wt(b,Me);const Le=o.convert(b.format,b.colorSpace),et=o.convert(b.type);let Ge=I(b.internalFormat,Le,et,b.colorSpace,b.isVideoTexture);Ze(le,b);let Ae;const st=b.mipmaps,V=b.isVideoTexture!==!0,Te=$e.__version===void 0||me===!0,be=ue.dataReady,Ue=B(b,Me);if(b.isDepthTexture)Ge=F(b.format===Nr,b.type),Te&&(V?t.texStorage2D(i.TEXTURE_2D,1,Ge,Me.width,Me.height):t.texImage2D(i.TEXTURE_2D,0,Ge,Me.width,Me.height,0,Le,et,null));else if(b.isDataTexture)if(st.length>0){V&&Te&&t.texStorage2D(i.TEXTURE_2D,Ue,Ge,st[0].width,st[0].height);for(let G=0,z=st.length;G<z;G++)Ae=st[G],V?be&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,Ae.width,Ae.height,Le,et,Ae.data):t.texImage2D(i.TEXTURE_2D,G,Ge,Ae.width,Ae.height,0,Le,et,Ae.data);b.generateMipmaps=!1}else V?(Te&&t.texStorage2D(i.TEXTURE_2D,Ue,Ge,Me.width,Me.height),be&&fe(b,Me,Le,et)):t.texImage2D(i.TEXTURE_2D,0,Ge,Me.width,Me.height,0,Le,et,Me.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){V&&Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Ge,st[0].width,st[0].height,Me.depth);for(let G=0,z=st.length;G<z;G++)if(Ae=st[G],b.format!==Dn)if(Le!==null)if(V){if(be)if(b.layerUpdates.size>0){const Ie=Rc(Ae.width,Ae.height,b.format,b.type);for(const nt of b.layerUpdates){const vt=Ae.data.subarray(nt*Ie/Ae.data.BYTES_PER_ELEMENT,(nt+1)*Ie/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,nt,Ae.width,Ae.height,1,Le,vt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,Ae.width,Ae.height,Me.depth,Le,Ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Ge,Ae.width,Ae.height,Me.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?be&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,Ae.width,Ae.height,Me.depth,Le,et,Ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,G,Ge,Ae.width,Ae.height,Me.depth,0,Le,et,Ae.data)}else{V&&Te&&t.texStorage2D(i.TEXTURE_2D,Ue,Ge,st[0].width,st[0].height);for(let G=0,z=st.length;G<z;G++)Ae=st[G],b.format!==Dn?Le!==null?V?be&&t.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,Ae.width,Ae.height,Le,Ae.data):t.compressedTexImage2D(i.TEXTURE_2D,G,Ge,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?be&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,Ae.width,Ae.height,Le,et,Ae.data):t.texImage2D(i.TEXTURE_2D,G,Ge,Ae.width,Ae.height,0,Le,et,Ae.data)}else if(b.isDataArrayTexture)if(V){if(Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Ge,Me.width,Me.height,Me.depth),be)if(b.layerUpdates.size>0){const G=Rc(Me.width,Me.height,b.format,b.type);for(const z of b.layerUpdates){const Ie=Me.data.subarray(z*G/Me.data.BYTES_PER_ELEMENT,(z+1)*G/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,z,Me.width,Me.height,1,Le,et,Ie)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Le,et,Me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ge,Me.width,Me.height,Me.depth,0,Le,et,Me.data);else if(b.isData3DTexture)V?(Te&&t.texStorage3D(i.TEXTURE_3D,Ue,Ge,Me.width,Me.height,Me.depth),be&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Le,et,Me.data)):t.texImage3D(i.TEXTURE_3D,0,Ge,Me.width,Me.height,Me.depth,0,Le,et,Me.data);else if(b.isFramebufferTexture){if(Te)if(V)t.texStorage2D(i.TEXTURE_2D,Ue,Ge,Me.width,Me.height);else{let G=Me.width,z=Me.height;for(let Ie=0;Ie<Ue;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,Ge,G,z,0,Le,et,null),G>>=1,z>>=1}}else if(st.length>0){if(V&&Te){const G=bt(st[0]);t.texStorage2D(i.TEXTURE_2D,Ue,Ge,G.width,G.height)}for(let G=0,z=st.length;G<z;G++)Ae=st[G],V?be&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,Le,et,Ae):t.texImage2D(i.TEXTURE_2D,G,Ge,Le,et,Ae);b.generateMipmaps=!1}else if(V){if(Te){const G=bt(Me);t.texStorage2D(i.TEXTURE_2D,Ue,Ge,G.width,G.height)}be&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Le,et,Me)}else t.texImage2D(i.TEXTURE_2D,0,Ge,Le,et,Me);y(b)&&m(le),$e.__version=ue.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function ne(U,b,j){if(b.image.length!==6)return;const le=at(U,b),me=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+j);const ue=n.get(me);if(me.version!==ue.__version||le===!0){t.activeTexture(i.TEXTURE0+j);const $e=Et.getPrimaries(Et.workingColorSpace),we=b.colorSpace===hi?null:Et.getPrimaries(b.colorSpace),Ve=b.colorSpace===hi||$e===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const We=b.isCompressedTexture||b.image[0].isCompressedTexture,Me=b.image[0]&&b.image[0].isDataTexture,Le=[];for(let z=0;z<6;z++)!We&&!Me?Le[z]=R(b.image[z],!0,a.maxCubemapSize):Le[z]=Me?b.image[z].image:b.image[z],Le[z]=wt(b,Le[z]);const et=Le[0],Ge=o.convert(b.format,b.colorSpace),Ae=o.convert(b.type),st=I(b.internalFormat,Ge,Ae,b.colorSpace),V=b.isVideoTexture!==!0,Te=ue.__version===void 0||le===!0,be=me.dataReady;let Ue=B(b,et);Ze(i.TEXTURE_CUBE_MAP,b);let G;if(We){V&&Te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,st,et.width,et.height);for(let z=0;z<6;z++){G=Le[z].mipmaps;for(let Ie=0;Ie<G.length;Ie++){const nt=G[Ie];b.format!==Dn?Ge!==null?V?be&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ie,0,0,nt.width,nt.height,Ge,nt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ie,st,nt.width,nt.height,0,nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ie,0,0,nt.width,nt.height,Ge,Ae,nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ie,st,nt.width,nt.height,0,Ge,Ae,nt.data)}}}else{if(G=b.mipmaps,V&&Te){G.length>0&&Ue++;const z=bt(Le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,st,z.width,z.height)}for(let z=0;z<6;z++)if(Me){V?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,Le[z].width,Le[z].height,Ge,Ae,Le[z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,st,Le[z].width,Le[z].height,0,Ge,Ae,Le[z].data);for(let Ie=0;Ie<G.length;Ie++){const vt=G[Ie].image[z].image;V?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ie+1,0,0,vt.width,vt.height,Ge,Ae,vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ie+1,st,vt.width,vt.height,0,Ge,Ae,vt.data)}}else{V?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,Ge,Ae,Le[z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,st,Ge,Ae,Le[z]);for(let Ie=0;Ie<G.length;Ie++){const nt=G[Ie];V?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ie+1,0,0,Ge,Ae,nt.image[z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ie+1,st,Ge,Ae,nt.image[z])}}}y(b)&&m(i.TEXTURE_CUBE_MAP),ue.__version=me.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function te(U,b,j,le,me,ue){const $e=o.convert(j.format,j.colorSpace),we=o.convert(j.type),Ve=I(j.internalFormat,$e,we,j.colorSpace),We=n.get(b),Me=n.get(j);if(Me.__renderTarget=b,!We.__hasExternalTextures){const Le=Math.max(1,b.width>>ue),et=Math.max(1,b.height>>ue);me===i.TEXTURE_3D||me===i.TEXTURE_2D_ARRAY?t.texImage3D(me,ue,Ve,Le,et,b.depth,0,$e,we,null):t.texImage2D(me,ue,Ve,Le,et,0,$e,we,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),Fe(b)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,me,Me.__webglTexture,0,yt(b)):(me===i.TEXTURE_2D||me>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,me,Me.__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(U,b,j){if(i.bindRenderbuffer(i.RENDERBUFFER,U),b.depthBuffer){const le=b.depthTexture,me=le&&le.isDepthTexture?le.type:null,ue=F(b.stencilBuffer,me),$e=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=yt(b);Fe(b)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,ue,b.width,b.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,ue,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ue,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,$e,i.RENDERBUFFER,U)}else{const le=b.textures;for(let me=0;me<le.length;me++){const ue=le[me],$e=o.convert(ue.format,ue.colorSpace),we=o.convert(ue.type),Ve=I(ue.internalFormat,$e,we,ue.colorSpace),We=yt(b);j&&Fe(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,We,Ve,b.width,b.height):Fe(b)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We,Ve,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Ve,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(U,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const le=n.get(b.depthTexture);le.__renderTarget=b,(!le.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),he(b.depthTexture,0);const me=le.__webglTexture,ue=yt(b);if(b.depthTexture.format===Ur)Fe(b)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,me,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,me,0);else if(b.depthTexture.format===Nr)Fe(b)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,me,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function Be(U){const b=n.get(U),j=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const le=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),le){const me=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,le.removeEventListener("dispose",me)};le.addEventListener("dispose",me),b.__depthDisposeCallback=me}b.__boundDepthTexture=le}if(U.depthTexture&&!b.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");const le=U.texture.mipmaps;le&&le.length>0?Ne(b.__webglFramebuffer[0],U):Ne(b.__webglFramebuffer,U)}else if(j){b.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[le]),b.__webglDepthbuffer[le]===void 0)b.__webglDepthbuffer[le]=i.createRenderbuffer(),pe(b.__webglDepthbuffer[le],U,!1);else{const me=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer[le];i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,ue)}}else{const le=U.texture.mipmaps;if(le&&le.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),pe(b.__webglDepthbuffer,U,!1);else{const me=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,ue)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(U,b,j){const le=n.get(U);b!==void 0&&te(le.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&Be(U)}function N(U){const b=U.texture,j=n.get(U),le=n.get(b);U.addEventListener("dispose",H);const me=U.textures,ue=U.isWebGLCubeRenderTarget===!0,$e=me.length>1;if($e||(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=b.version,u.memory.textures++),ue){j.__webglFramebuffer=[];for(let we=0;we<6;we++)if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer[we]=[];for(let Ve=0;Ve<b.mipmaps.length;Ve++)j.__webglFramebuffer[we][Ve]=i.createFramebuffer()}else j.__webglFramebuffer[we]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer=[];for(let we=0;we<b.mipmaps.length;we++)j.__webglFramebuffer[we]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if($e)for(let we=0,Ve=me.length;we<Ve;we++){const We=n.get(me[we]);We.__webglTexture===void 0&&(We.__webglTexture=i.createTexture(),u.memory.textures++)}if(U.samples>0&&Fe(U)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let we=0;we<me.length;we++){const Ve=me[we];j.__webglColorRenderbuffer[we]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[we]);const We=o.convert(Ve.format,Ve.colorSpace),Me=o.convert(Ve.type),Le=I(Ve.internalFormat,We,Me,Ve.colorSpace,U.isXRRenderTarget===!0),et=yt(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,et,Le,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,j.__webglColorRenderbuffer[we])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(j.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),Ze(i.TEXTURE_CUBE_MAP,b);for(let we=0;we<6;we++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ve=0;Ve<b.mipmaps.length;Ve++)te(j.__webglFramebuffer[we][Ve],U,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ve);else te(j.__webglFramebuffer[we],U,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);y(b)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($e){for(let we=0,Ve=me.length;we<Ve;we++){const We=me[we],Me=n.get(We);let Le=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Le=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Le,Me.__webglTexture),Ze(Le,We),te(j.__webglFramebuffer,U,We,i.COLOR_ATTACHMENT0+we,Le,0),y(We)&&m(Le)}t.unbindTexture()}else{let we=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(we=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(we,le.__webglTexture),Ze(we,b),b.mipmaps&&b.mipmaps.length>0)for(let Ve=0;Ve<b.mipmaps.length;Ve++)te(j.__webglFramebuffer[Ve],U,b,i.COLOR_ATTACHMENT0,we,Ve);else te(j.__webglFramebuffer,U,b,i.COLOR_ATTACHMENT0,we,0);y(b)&&m(we),t.unbindTexture()}U.depthBuffer&&Be(U)}function it(U){const b=U.textures;for(let j=0,le=b.length;j<le;j++){const me=b[j];if(y(me)){const ue=O(U),$e=n.get(me).__webglTexture;t.bindTexture(ue,$e),m(ue),t.unbindTexture()}}}const He=[],Ye=[];function ke(U){if(U.samples>0){if(Fe(U)===!1){const b=U.textures,j=U.width,le=U.height;let me=i.COLOR_BUFFER_BIT;const ue=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$e=n.get(U),we=b.length>1;if(we)for(let We=0;We<b.length;We++)t.bindFramebuffer(i.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+We,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,$e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+We,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer);const Ve=U.texture.mipmaps;Ve&&Ve.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let We=0;We<b.length;We++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(me|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(me|=i.STENCIL_BUFFER_BIT)),we){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,$e.__webglColorRenderbuffer[We]);const Me=n.get(b[We]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Me,0)}i.blitFramebuffer(0,0,j,le,0,0,j,le,me,i.NEAREST),p===!0&&(He.length=0,Ye.length=0,He.push(i.COLOR_ATTACHMENT0+We),U.depthBuffer&&U.resolveDepthBuffer===!1&&(He.push(ue),Ye.push(ue),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ye)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),we)for(let We=0;We<b.length;We++){t.bindFramebuffer(i.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+We,i.RENDERBUFFER,$e.__webglColorRenderbuffer[We]);const Me=n.get(b[We]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,$e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+We,i.TEXTURE_2D,Me,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const b=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function yt(U){return Math.min(a.maxSamples,U.samples)}function Fe(U){const b=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Qe(U){const b=u.render.frame;v.get(U)!==b&&(v.set(U,b),U.update())}function wt(U,b){const j=U.colorSpace,le=U.format,me=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||j!==dr&&j!==hi&&(Et.getTransfer(j)===Rt?(le!==Dn||me!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),b}function bt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(d.width=U.naturalWidth||U.width,d.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(d.width=U.displayWidth,d.height=U.displayHeight):(d.width=U.width,d.height=U.height),d}this.allocateTextureUnit=re,this.resetTextureUnits=K,this.setTexture2D=he,this.setTexture2DArray=oe,this.setTexture3D=xe,this.setTextureCube=se,this.rebindTextures=je,this.setupRenderTarget=N,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Fe}function sy(i,e){function t(n,a=hi){let o;const u=Et.getTransfer(a);if(n===Vn)return i.UNSIGNED_BYTE;if(n===jo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===lu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===au)return i.BYTE;if(n===ou)return i.SHORT;if(n===Fr)return i.UNSIGNED_SHORT;if(n===$o)return i.INT;if(n===ki)return i.UNSIGNED_INT;if(n===Qn)return i.FLOAT;if(n===kr)return i.HALF_FLOAT;if(n===uu)return i.ALPHA;if(n===hu)return i.RGB;if(n===Dn)return i.RGBA;if(n===Ur)return i.DEPTH_COMPONENT;if(n===Nr)return i.DEPTH_STENCIL;if(n===fu)return i.RED;if(n===Yo)return i.RED_INTEGER;if(n===du)return i.RG;if(n===Ko)return i.RG_INTEGER;if(n===Zo)return i.RGBA_INTEGER;if(n===Ns||n===Os||n===ks||n===Bs)if(u===Rt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ns)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Os)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ks)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ns)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Os)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ks)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fo||n===po||n===mo||n===_o)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===fo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===po)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_o)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===go||n===vo||n===xo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===go||n===vo)return u===Rt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===xo)return u===Rt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Eo||n===yo||n===So||n===Mo||n===To||n===wo||n===bo||n===Ao||n===Ro||n===Co||n===Po||n===Do||n===Lo||n===Fo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Eo)return u===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yo)return u===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===So)return u===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mo)return u===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===To)return u===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wo)return u===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bo)return u===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ao)return u===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ro)return u===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Co)return u===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Po)return u===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Do)return u===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lo)return u===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fo)return u===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Io||n===Uo||n===No)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Io)return u===Rt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===No)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oo||n===ko||n===Bo||n===zo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Oo)return o.COMPRESSED_RED_RGTC1_EXT;if(n===ko)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ir?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const ay=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oy=`
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

}`;class ly{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Au(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new mi({vertexShader:ay,fragmentShader:oy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new En(new Vr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cy extends Hi{constructor(e,t){super();const n=this;let a=null,o=1,u=null,h="local-floor",p=1,d=null,v=null,_=null,x=null,E=null,A=null;const R=typeof XRWebGLBinding<"u",y=new ly,m={},O=t.getContextAttributes();let I=null,F=null;const B=[],D=[],H=new rt;let q=null;const P=new xn;P.viewport=new Nt;const T=new xn;T.viewport=new Nt;const k=[P,T],K=new Rg;let re=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ne=B[Z];return ne===void 0&&(ne=new Na,B[Z]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Z){let ne=B[Z];return ne===void 0&&(ne=new Na,B[Z]=ne),ne.getGripSpace()},this.getHand=function(Z){let ne=B[Z];return ne===void 0&&(ne=new Na,B[Z]=ne),ne.getHandSpace()};function he(Z){const ne=D.indexOf(Z.inputSource);if(ne===-1)return;const te=B[ne];te!==void 0&&(te.update(Z.inputSource,Z.frame,d||u),te.dispatchEvent({type:Z.type,data:Z.inputSource}))}function oe(){a.removeEventListener("select",he),a.removeEventListener("selectstart",he),a.removeEventListener("selectend",he),a.removeEventListener("squeeze",he),a.removeEventListener("squeezestart",he),a.removeEventListener("squeezeend",he),a.removeEventListener("end",oe),a.removeEventListener("inputsourceschange",xe);for(let Z=0;Z<B.length;Z++){const ne=D[Z];ne!==null&&(D[Z]=null,B[Z].disconnect(ne))}re=null,Q=null,y.reset();for(const Z in m)delete m[Z];e.setRenderTarget(I),E=null,x=null,_=null,a=null,F=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(q),e.setSize(H.width,H.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){h=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(Z){d=Z},this.getBaseLayer=function(){return x!==null?x:E},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(a,t)),_},this.getFrame=function(){return A},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(I=e.getRenderTarget(),a.addEventListener("select",he),a.addEventListener("selectstart",he),a.addEventListener("selectend",he),a.addEventListener("squeeze",he),a.addEventListener("squeezestart",he),a.addEventListener("squeezeend",he),a.addEventListener("end",oe),a.addEventListener("inputsourceschange",xe),O.xrCompatible!==!0&&await t.makeXRCompatible(),q=e.getPixelRatio(),e.getSize(H),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,pe=null,Ne=null;O.depth&&(Ne=O.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=O.stencil?Nr:Ur,pe=O.stencil?Ir:ki);const Be={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:o};_=this.getBinding(),x=_.createProjectionLayer(Be),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),F=new zi(x.textureWidth,x.textureHeight,{format:Dn,type:Vn,depthTexture:new bu(x.textureWidth,x.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const te={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:o};E=new XRWebGLLayer(a,t,te),a.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),F=new zi(E.framebufferWidth,E.framebufferHeight,{format:Dn,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await a.requestReferenceSpace(h),fe.setContext(a),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function xe(Z){for(let ne=0;ne<Z.removed.length;ne++){const te=Z.removed[ne],pe=D.indexOf(te);pe>=0&&(D[pe]=null,B[pe].disconnect(te))}for(let ne=0;ne<Z.added.length;ne++){const te=Z.added[ne];let pe=D.indexOf(te);if(pe===-1){for(let Be=0;Be<B.length;Be++)if(Be>=D.length){D.push(te),pe=Be;break}else if(D[Be]===null){D[Be]=te,pe=Be;break}if(pe===-1)break}const Ne=B[pe];Ne&&Ne.connect(te)}}const se=new J,Ee=new J;function De(Z,ne,te){se.setFromMatrixPosition(ne.matrixWorld),Ee.setFromMatrixPosition(te.matrixWorld);const pe=se.distanceTo(Ee),Ne=ne.projectionMatrix.elements,Be=te.projectionMatrix.elements,je=Ne[14]/(Ne[10]-1),N=Ne[14]/(Ne[10]+1),it=(Ne[9]+1)/Ne[5],He=(Ne[9]-1)/Ne[5],Ye=(Ne[8]-1)/Ne[0],ke=(Be[8]+1)/Be[0],yt=je*Ye,Fe=je*ke,Qe=pe/(-Ye+ke),wt=Qe*-Ye;if(ne.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(wt),Z.translateZ(Qe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ne[10]===-1)Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const bt=je+Qe,U=N+Qe,b=yt-wt,j=Fe+(pe-wt),le=it*N/U*bt,me=He*N/U*bt;Z.projectionMatrix.makePerspective(b,j,le,me,bt,U),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Oe(Z,ne){ne===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ne.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let ne=Z.near,te=Z.far;y.texture!==null&&(y.depthNear>0&&(ne=y.depthNear),y.depthFar>0&&(te=y.depthFar)),K.near=T.near=P.near=ne,K.far=T.far=P.far=te,(re!==K.near||Q!==K.far)&&(a.updateRenderState({depthNear:K.near,depthFar:K.far}),re=K.near,Q=K.far),K.layers.mask=Z.layers.mask|6,P.layers.mask=K.layers.mask&3,T.layers.mask=K.layers.mask&5;const pe=Z.parent,Ne=K.cameras;Oe(K,pe);for(let Be=0;Be<Ne.length;Be++)Oe(Ne[Be],pe);Ne.length===2?De(K,P,T):K.projectionMatrix.copy(P.projectionMatrix),Ze(Z,K,pe)};function Ze(Z,ne,te){te===null?Z.matrix.copy(ne.matrixWorld):(Z.matrix.copy(te.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ne.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ho*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(x===null&&E===null))return p},this.setFoveation=function(Z){p=Z,x!==null&&(x.fixedFoveation=Z),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=Z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(K)},this.getCameraTexture=function(Z){return m[Z]};let at=null;function tt(Z,ne){if(v=ne.getViewerPose(d||u),A=ne,v!==null){const te=v.views;E!==null&&(e.setRenderTargetFramebuffer(F,E.framebuffer),e.setRenderTarget(F));let pe=!1;te.length!==K.cameras.length&&(K.cameras.length=0,pe=!0);for(let N=0;N<te.length;N++){const it=te[N];let He=null;if(E!==null)He=E.getViewport(it);else{const ke=_.getViewSubImage(x,it);He=ke.viewport,N===0&&(e.setRenderTargetTextures(F,ke.colorTexture,ke.depthStencilTexture),e.setRenderTarget(F))}let Ye=k[N];Ye===void 0&&(Ye=new xn,Ye.layers.enable(N),Ye.viewport=new Nt,k[N]=Ye),Ye.matrix.fromArray(it.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(it.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(He.x,He.y,He.width,He.height),N===0&&(K.matrix.copy(Ye.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),pe===!0&&K.cameras.push(Ye)}const Ne=a.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&R){_=n.getBinding();const N=_.getDepthInformation(te[0]);N&&N.isValid&&N.texture&&y.init(N,a.renderState)}if(Ne&&Ne.includes("camera-access")&&R){e.state.unbindTexture(),_=n.getBinding();for(let N=0;N<te.length;N++){const it=te[N].camera;if(it){let He=m[it];He||(He=new Au,m[it]=He);const Ye=_.getCameraImage(it);He.sourceTexture=Ye}}}}for(let te=0;te<B.length;te++){const pe=D[te],Ne=B[te];pe!==null&&Ne!==void 0&&Ne.update(pe,ne,d||u)}at&&at(Z,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),A=null}const fe=new Pu;fe.setAnimationLoop(tt),this.setAnimationLoop=function(Z){at=Z},this.dispose=function(){}}}const Pi=new Gn,uy=new Ot;function hy(i,e){function t(y,m){y.matrixAutoUpdate===!0&&y.updateMatrix(),m.value.copy(y.matrix)}function n(y,m){m.color.getRGB(y.fogColor.value,Su(i)),m.isFog?(y.fogNear.value=m.near,y.fogFar.value=m.far):m.isFogExp2&&(y.fogDensity.value=m.density)}function a(y,m,O,I,F){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(y,m):m.isMeshToonMaterial?(o(y,m),_(y,m)):m.isMeshPhongMaterial?(o(y,m),v(y,m)):m.isMeshStandardMaterial?(o(y,m),x(y,m),m.isMeshPhysicalMaterial&&E(y,m,F)):m.isMeshMatcapMaterial?(o(y,m),A(y,m)):m.isMeshDepthMaterial?o(y,m):m.isMeshDistanceMaterial?(o(y,m),R(y,m)):m.isMeshNormalMaterial?o(y,m):m.isLineBasicMaterial?(u(y,m),m.isLineDashedMaterial&&h(y,m)):m.isPointsMaterial?p(y,m,O,I):m.isSpriteMaterial?d(y,m):m.isShadowMaterial?(y.color.value.copy(m.color),y.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(y,m){y.opacity.value=m.opacity,m.color&&y.diffuse.value.copy(m.color),m.emissive&&y.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(y.map.value=m.map,t(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,t(m.alphaMap,y.alphaMapTransform)),m.bumpMap&&(y.bumpMap.value=m.bumpMap,t(m.bumpMap,y.bumpMapTransform),y.bumpScale.value=m.bumpScale,m.side===ln&&(y.bumpScale.value*=-1)),m.normalMap&&(y.normalMap.value=m.normalMap,t(m.normalMap,y.normalMapTransform),y.normalScale.value.copy(m.normalScale),m.side===ln&&y.normalScale.value.negate()),m.displacementMap&&(y.displacementMap.value=m.displacementMap,t(m.displacementMap,y.displacementMapTransform),y.displacementScale.value=m.displacementScale,y.displacementBias.value=m.displacementBias),m.emissiveMap&&(y.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,y.emissiveMapTransform)),m.specularMap&&(y.specularMap.value=m.specularMap,t(m.specularMap,y.specularMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest);const O=e.get(m),I=O.envMap,F=O.envMapRotation;I&&(y.envMap.value=I,Pi.copy(F),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),y.envMapRotation.value.setFromMatrix4(uy.makeRotationFromEuler(Pi)),y.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=m.reflectivity,y.ior.value=m.ior,y.refractionRatio.value=m.refractionRatio),m.lightMap&&(y.lightMap.value=m.lightMap,y.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,y.lightMapTransform)),m.aoMap&&(y.aoMap.value=m.aoMap,y.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,y.aoMapTransform))}function u(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,m.map&&(y.map.value=m.map,t(m.map,y.mapTransform))}function h(y,m){y.dashSize.value=m.dashSize,y.totalSize.value=m.dashSize+m.gapSize,y.scale.value=m.scale}function p(y,m,O,I){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.size.value=m.size*O,y.scale.value=I*.5,m.map&&(y.map.value=m.map,t(m.map,y.uvTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,t(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function d(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.rotation.value=m.rotation,m.map&&(y.map.value=m.map,t(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,t(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function v(y,m){y.specular.value.copy(m.specular),y.shininess.value=Math.max(m.shininess,1e-4)}function _(y,m){m.gradientMap&&(y.gradientMap.value=m.gradientMap)}function x(y,m){y.metalness.value=m.metalness,m.metalnessMap&&(y.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,y.metalnessMapTransform)),y.roughness.value=m.roughness,m.roughnessMap&&(y.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,y.roughnessMapTransform)),m.envMap&&(y.envMapIntensity.value=m.envMapIntensity)}function E(y,m,O){y.ior.value=m.ior,m.sheen>0&&(y.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),y.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(y.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,y.sheenColorMapTransform)),m.sheenRoughnessMap&&(y.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,y.sheenRoughnessMapTransform))),m.clearcoat>0&&(y.clearcoat.value=m.clearcoat,y.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(y.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,y.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(y.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ln&&y.clearcoatNormalScale.value.negate())),m.dispersion>0&&(y.dispersion.value=m.dispersion),m.iridescence>0&&(y.iridescence.value=m.iridescence,y.iridescenceIOR.value=m.iridescenceIOR,y.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(y.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,y.iridescenceMapTransform)),m.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),m.transmission>0&&(y.transmission.value=m.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),m.transmissionMap&&(y.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,y.transmissionMapTransform)),y.thickness.value=m.thickness,m.thicknessMap&&(y.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=m.attenuationDistance,y.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(y.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(y.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=m.specularIntensity,y.specularColor.value.copy(m.specularColor),m.specularColorMap&&(y.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,y.specularColorMapTransform)),m.specularIntensityMap&&(y.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,m){m.matcap&&(y.matcap.value=m.matcap)}function R(y,m){const O=e.get(m).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function fy(i,e,t,n){let a={},o={},u=[];const h=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function p(O,I){const F=I.program;n.uniformBlockBinding(O,F)}function d(O,I){let F=a[O.id];F===void 0&&(A(O),F=v(O),a[O.id]=F,O.addEventListener("dispose",y));const B=I.program;n.updateUBOMapping(O,B);const D=e.render.frame;o[O.id]!==D&&(x(O),o[O.id]=D)}function v(O){const I=_();O.__bindingPointIndex=I;const F=i.createBuffer(),B=O.__size,D=O.usage;return i.bindBuffer(i.UNIFORM_BUFFER,F),i.bufferData(i.UNIFORM_BUFFER,B,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,F),F}function _(){for(let O=0;O<h;O++)if(u.indexOf(O)===-1)return u.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(O){const I=a[O.id],F=O.uniforms,B=O.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let D=0,H=F.length;D<H;D++){const q=Array.isArray(F[D])?F[D]:[F[D]];for(let P=0,T=q.length;P<T;P++){const k=q[P];if(E(k,D,P,B)===!0){const K=k.__offset,re=Array.isArray(k.value)?k.value:[k.value];let Q=0;for(let he=0;he<re.length;he++){const oe=re[he],xe=R(oe);typeof oe=="number"||typeof oe=="boolean"?(k.__data[0]=oe,i.bufferSubData(i.UNIFORM_BUFFER,K+Q,k.__data)):oe.isMatrix3?(k.__data[0]=oe.elements[0],k.__data[1]=oe.elements[1],k.__data[2]=oe.elements[2],k.__data[3]=0,k.__data[4]=oe.elements[3],k.__data[5]=oe.elements[4],k.__data[6]=oe.elements[5],k.__data[7]=0,k.__data[8]=oe.elements[6],k.__data[9]=oe.elements[7],k.__data[10]=oe.elements[8],k.__data[11]=0):(oe.toArray(k.__data,Q),Q+=xe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,K,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function E(O,I,F,B){const D=O.value,H=I+"_"+F;if(B[H]===void 0)return typeof D=="number"||typeof D=="boolean"?B[H]=D:B[H]=D.clone(),!0;{const q=B[H];if(typeof D=="number"||typeof D=="boolean"){if(q!==D)return B[H]=D,!0}else if(q.equals(D)===!1)return q.copy(D),!0}return!1}function A(O){const I=O.uniforms;let F=0;const B=16;for(let H=0,q=I.length;H<q;H++){const P=Array.isArray(I[H])?I[H]:[I[H]];for(let T=0,k=P.length;T<k;T++){const K=P[T],re=Array.isArray(K.value)?K.value:[K.value];for(let Q=0,he=re.length;Q<he;Q++){const oe=re[Q],xe=R(oe),se=F%B,Ee=se%xe.boundary,De=se+Ee;F+=Ee,De!==0&&B-De<xe.storage&&(F+=B-De),K.__data=new Float32Array(xe.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=F,F+=xe.storage}}}const D=F%B;return D>0&&(F+=B-D),O.__size=F,O.__cache={},this}function R(O){const I={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(I.boundary=4,I.storage=4):O.isVector2?(I.boundary=8,I.storage=8):O.isVector3||O.isColor?(I.boundary=16,I.storage=12):O.isVector4?(I.boundary=16,I.storage=16):O.isMatrix3?(I.boundary=48,I.storage=48):O.isMatrix4?(I.boundary=64,I.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),I}function y(O){const I=O.target;I.removeEventListener("dispose",y);const F=u.indexOf(I.__bindingPointIndex);u.splice(F,1),i.deleteBuffer(a[I.id]),delete a[I.id],delete o[I.id]}function m(){for(const O in a)i.deleteBuffer(a[O]);u=[],a={},o={}}return{bind:p,update:d,dispose:m}}class dy{constructor(e={}){const{canvas:t=W_(),context:n=null,depth:a=!0,stencil:o=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let E;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=n.getContextAttributes().alpha}else E=u;const A=new Uint32Array(4),R=new Int32Array(4);let y=null,m=null;const O=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let B=!1;this._outputColorSpace=pn;let D=0,H=0,q=null,P=-1,T=null;const k=new Nt,K=new Nt;let re=null;const Q=new mt(0);let he=0,oe=t.width,xe=t.height,se=1,Ee=null,De=null;const Oe=new Nt(0,0,oe,xe),Ze=new Nt(0,0,oe,xe);let at=!1;const tt=new tl;let fe=!1,Z=!1;const ne=new Ot,te=new J,pe=new Nt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function je(){return q===null?se:1}let N=n;function it(C,X){return t.getContext(C,X)}try{const C={alpha:!0,depth:a,stencil:o,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xo}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",G,!1),N===null){const X="webgl2";if(N=it(X,C),N===null)throw it(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let He,Ye,ke,yt,Fe,Qe,wt,bt,U,b,j,le,me,ue,$e,we,Ve,We,Me,Le,et,Ge,Ae,st;function V(){He=new Mx(N),He.init(),Ge=new sy(N,He),Ye=new _x(N,He,e,Ge),ke=new iy(N,He),Ye.reversedDepthBuffer&&x&&ke.buffers.depth.setReversed(!0),yt=new bx(N),Fe=new WE,Qe=new ry(N,He,ke,Fe,Ye,Ge,yt),wt=new vx(F),bt=new Sx(F),U=new Lg(N),Ae=new px(N,U),b=new Tx(N,U,yt,Ae),j=new Rx(N,b,U,yt),Me=new Ax(N,Ye,Qe),we=new gx(Fe),le=new GE(F,wt,bt,He,Ye,Ae,we),me=new hy(F,Fe),ue=new $E,$e=new JE(He),We=new dx(F,wt,bt,ke,j,E,p),Ve=new ty(F,j,Ye),st=new fy(N,yt,Ye,ke),Le=new mx(N,He,yt),et=new wx(N,He,yt),yt.programs=le.programs,F.capabilities=Ye,F.extensions=He,F.properties=Fe,F.renderLists=ue,F.shadowMap=Ve,F.state=ke,F.info=yt}V();const Te=new cy(F,N);this.xr=Te,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const C=He.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=He.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(C){C!==void 0&&(se=C,this.setSize(oe,xe,!1))},this.getSize=function(C){return C.set(oe,xe)},this.setSize=function(C,X,ee=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=C,xe=X,t.width=Math.floor(C*se),t.height=Math.floor(X*se),ee===!0&&(t.style.width=C+"px",t.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(oe*se,xe*se).floor()},this.setDrawingBufferSize=function(C,X,ee){oe=C,xe=X,se=ee,t.width=Math.floor(C*ee),t.height=Math.floor(X*ee),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(k)},this.getViewport=function(C){return C.copy(Oe)},this.setViewport=function(C,X,ee,ie){C.isVector4?Oe.set(C.x,C.y,C.z,C.w):Oe.set(C,X,ee,ie),ke.viewport(k.copy(Oe).multiplyScalar(se).round())},this.getScissor=function(C){return C.copy(Ze)},this.setScissor=function(C,X,ee,ie){C.isVector4?Ze.set(C.x,C.y,C.z,C.w):Ze.set(C,X,ee,ie),ke.scissor(K.copy(Ze).multiplyScalar(se).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(C){ke.setScissorTest(at=C)},this.setOpaqueSort=function(C){Ee=C},this.setTransparentSort=function(C){De=C},this.getClearColor=function(C){return C.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(C=!0,X=!0,ee=!0){let ie=0;if(C){let $=!1;if(q!==null){const ye=q.texture.format;$=ye===Zo||ye===Ko||ye===Yo}if($){const ye=q.texture.type,Re=ye===Vn||ye===ki||ye===Fr||ye===Ir||ye===jo||ye===qo,ze=We.getClearColor(),Pe=We.getClearAlpha(),Je=ze.r,Se=ze.g,qe=ze.b;Re?(A[0]=Je,A[1]=Se,A[2]=qe,A[3]=Pe,N.clearBufferuiv(N.COLOR,0,A)):(R[0]=Je,R[1]=Se,R[2]=qe,R[3]=Pe,N.clearBufferiv(N.COLOR,0,R))}else ie|=N.COLOR_BUFFER_BIT}X&&(ie|=N.DEPTH_BUFFER_BIT),ee&&(ie|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",G,!1),We.dispose(),ue.dispose(),$e.dispose(),Fe.dispose(),wt.dispose(),bt.dispose(),j.dispose(),Ae.dispose(),st.dispose(),le.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",kt),Te.removeEventListener("sessionend",_i),Wn.stop()};function be(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const C=yt.autoReset,X=Ve.enabled,ee=Ve.autoUpdate,ie=Ve.needsUpdate,$=Ve.type;V(),yt.autoReset=C,Ve.enabled=X,Ve.autoUpdate=ee,Ve.needsUpdate=ie,Ve.type=$}function G(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function z(C){const X=C.target;X.removeEventListener("dispose",z),Ie(X)}function Ie(C){nt(C),Fe.remove(C)}function nt(C){const X=Fe.get(C).programs;X!==void 0&&(X.forEach(function(ee){le.releaseProgram(ee)}),C.isShaderMaterial&&le.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,ee,ie,$,ye){X===null&&(X=Ne);const Re=$.isMesh&&$.matrixWorld.determinant()<0,ze=jr(C,X,ee,ie,$);ke.setMaterial(ie,Re);let Pe=ee.index,Je=1;if(ie.wireframe===!0){if(Pe=b.getWireframeAttribute(ee),Pe===void 0)return;Je=2}const Se=ee.drawRange,qe=ee.attributes.position;let ft=Se.start*Je,Mt=(Se.start+Se.count)*Je;ye!==null&&(ft=Math.max(ft,ye.start*Je),Mt=Math.min(Mt,(ye.start+ye.count)*Je)),Pe!==null?(ft=Math.max(ft,0),Mt=Math.min(Mt,Pe.count)):qe!=null&&(ft=Math.max(ft,0),Mt=Math.min(Mt,qe.count));const It=Mt-ft;if(It<0||It===1/0)return;Ae.setup($,ie,ze,ee,Pe);let Pt,Tt=Le;if(Pe!==null&&(Pt=U.get(Pe),Tt=et,Tt.setIndex(Pt)),$.isMesh)ie.wireframe===!0?(ke.setLineWidth(ie.wireframeLinewidth*je()),Tt.setMode(N.LINES)):Tt.setMode(N.TRIANGLES);else if($.isLine){let Ke=ie.linewidth;Ke===void 0&&(Ke=1),ke.setLineWidth(Ke*je()),$.isLineSegments?Tt.setMode(N.LINES):$.isLineLoop?Tt.setMode(N.LINE_LOOP):Tt.setMode(N.LINE_STRIP)}else $.isPoints?Tt.setMode(N.POINTS):$.isSprite&&Tt.setMode(N.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Or("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))Tt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Ke=$._multiDrawStarts,Dt=$._multiDrawCounts,gt=$._multiDrawCount,Kt=Pe?U.get(Pe).bytesPerElement:1,S=Fe.get(ie).currentProgram.getUniforms();for(let dt=0;dt<gt;dt++)S.setValue(N,"_gl_DrawID",dt),Tt.render(Ke[dt]/Kt,Dt[dt])}else if($.isInstancedMesh)Tt.renderInstances(ft,It,$.count);else if(ee.isInstancedBufferGeometry){const Ke=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Dt=Math.min(ee.instanceCount,Ke);Tt.renderInstances(ft,It,Dt)}else Tt.render(ft,It)};function vt(C,X,ee){C.transparent===!0&&C.side===Cn&&C.forceSinglePass===!1?(C.side=ln,C.needsUpdate=!0,vi(C,X,ee),C.side=pi,C.needsUpdate=!0,vi(C,X,ee),C.side=Cn):vi(C,X,ee)}this.compile=function(C,X,ee=null){ee===null&&(ee=C),m=$e.get(ee),m.init(X),I.push(m),ee.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),C!==ee&&C.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights();const ie=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const ye=$.material;if(ye)if(Array.isArray(ye))for(let Re=0;Re<ye.length;Re++){const ze=ye[Re];vt(ze,ee,$),ie.add(ze)}else vt(ye,ee,$),ie.add(ye)}),m=I.pop(),ie},this.compileAsync=function(C,X,ee=null){const ie=this.compile(C,X,ee);return new Promise($=>{function ye(){if(ie.forEach(function(Re){Fe.get(Re).currentProgram.isReady()&&ie.delete(Re)}),ie.size===0){$(C);return}setTimeout(ye,10)}He.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let lt=null;function Sn(C){lt&&lt(C)}function kt(){Wn.stop()}function _i(){Wn.start()}const Wn=new Pu;Wn.setAnimationLoop(Sn),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(C){lt=C,Te.setAnimationLoop(C),C===null?Wn.stop():Wn.start()},Te.addEventListener("sessionstart",kt),Te.addEventListener("sessionend",_i),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(X),X=Te.getCamera()),C.isScene===!0&&C.onBeforeRender(F,C,X,q),m=$e.get(C,I.length),m.init(X),I.push(m),ne.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),tt.setFromProjectionMatrix(ne,Hn,X.reversedDepth),Z=this.localClippingEnabled,fe=we.init(this.clippingPlanes,Z),y=ue.get(C,O.length),y.init(),O.push(y),Te.enabled===!0&&Te.isPresenting===!0){const ye=F.xr.getDepthSensingMesh();ye!==null&&gr(ye,X,-1/0,F.sortObjects)}gr(C,X,0,F.sortObjects),y.finish(),F.sortObjects===!0&&y.sort(Ee,De),Be=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,Be&&We.addToRenderList(y,C),this.info.render.frame++,fe===!0&&we.beginShadows();const ee=m.state.shadowsArray;Ve.render(ee,C,X),fe===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=y.opaque,$=y.transmissive;if(m.setupLights(),X.isArrayCamera){const ye=X.cameras;if($.length>0)for(let Re=0,ze=ye.length;Re<ze;Re++){const Pe=ye[Re];Wr(ie,$,C,Pe)}Be&&We.render(C);for(let Re=0,ze=ye.length;Re<ze;Re++){const Pe=ye[Re];rn(y,C,Pe,Pe.viewport)}}else $.length>0&&Wr(ie,$,C,X),Be&&We.render(C),rn(y,C,X);q!==null&&H===0&&(Qe.updateMultisampleRenderTarget(q),Qe.updateRenderTargetMipmap(q)),C.isScene===!0&&C.onAfterRender(F,C,X),Ae.resetDefaultState(),P=-1,T=null,I.pop(),I.length>0?(m=I[I.length-1],fe===!0&&we.setGlobalState(F.clippingPlanes,m.state.camera)):m=null,O.pop(),O.length>0?y=O[O.length-1]:y=null};function gr(C,X,ee,ie){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)ee=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||tt.intersectsSprite(C)){ie&&pe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ne);const Re=j.update(C),ze=C.material;ze.visible&&y.push(C,Re,ze,ee,pe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||tt.intersectsObject(C))){const Re=j.update(C),ze=C.material;if(ie&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),pe.copy(C.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),pe.copy(Re.boundingSphere.center)),pe.applyMatrix4(C.matrixWorld).applyMatrix4(ne)),Array.isArray(ze)){const Pe=Re.groups;for(let Je=0,Se=Pe.length;Je<Se;Je++){const qe=Pe[Je],ft=ze[qe.materialIndex];ft&&ft.visible&&y.push(C,Re,ft,ee,pe.z,qe)}}else ze.visible&&y.push(C,Re,ze,ee,pe.z,null)}}const ye=C.children;for(let Re=0,ze=ye.length;Re<ze;Re++)gr(ye[Re],X,ee,ie)}function rn(C,X,ee,ie){const $=C.opaque,ye=C.transmissive,Re=C.transparent;m.setupLightsView(ee),fe===!0&&we.setGlobalState(F.clippingPlanes,ee),ie&&ke.viewport(k.copy(ie)),$.length>0&&Xn($,X,ee),ye.length>0&&Xn(ye,X,ee),Re.length>0&&Xn(Re,X,ee),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function Wr(C,X,ee,ie){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[ie.id]===void 0&&(m.state.transmissionRenderTarget[ie.id]=new zi(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?kr:Vn,minFilter:Oi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const ye=m.state.transmissionRenderTarget[ie.id],Re=ie.viewport||k;ye.setSize(Re.z*F.transmissionResolutionScale,Re.w*F.transmissionResolutionScale);const ze=F.getRenderTarget(),Pe=F.getActiveCubeFace(),Je=F.getActiveMipmapLevel();F.setRenderTarget(ye),F.getClearColor(Q),he=F.getClearAlpha(),he<1&&F.setClearColor(16777215,.5),F.clear(),Be&&We.render(ee);const Se=F.toneMapping;F.toneMapping=di;const qe=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),m.setupLightsView(ie),fe===!0&&we.setGlobalState(F.clippingPlanes,ie),Xn(C,ee,ie),Qe.updateMultisampleRenderTarget(ye),Qe.updateRenderTargetMipmap(ye),He.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let Mt=0,It=X.length;Mt<It;Mt++){const Pt=X[Mt],Tt=Pt.object,Ke=Pt.geometry,Dt=Pt.material,gt=Pt.group;if(Dt.side===Cn&&Tt.layers.test(ie.layers)){const Kt=Dt.side;Dt.side=ln,Dt.needsUpdate=!0,gi(Tt,ee,ie,Ke,Dt,gt),Dt.side=Kt,Dt.needsUpdate=!0,ft=!0}}ft===!0&&(Qe.updateMultisampleRenderTarget(ye),Qe.updateRenderTargetMipmap(ye))}F.setRenderTarget(ze,Pe,Je),F.setClearColor(Q,he),qe!==void 0&&(ie.viewport=qe),F.toneMapping=Se}function Xn(C,X,ee){const ie=X.isScene===!0?X.overrideMaterial:null;for(let $=0,ye=C.length;$<ye;$++){const Re=C[$],ze=Re.object,Pe=Re.geometry,Je=Re.group;let Se=Re.material;Se.allowOverride===!0&&ie!==null&&(Se=ie),ze.layers.test(ee.layers)&&gi(ze,X,ee,Pe,Se,Je)}}function gi(C,X,ee,ie,$,ye){C.onBeforeRender(F,X,ee,ie,$,ye),C.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(F,X,ee,ie,C,ye),$.transparent===!0&&$.side===Cn&&$.forceSinglePass===!1?($.side=ln,$.needsUpdate=!0,F.renderBufferDirect(ee,X,ie,$,C,ye),$.side=pi,$.needsUpdate=!0,F.renderBufferDirect(ee,X,ie,$,C,ye),$.side=Cn):F.renderBufferDirect(ee,X,ie,$,C,ye),C.onAfterRender(F,X,ee,ie,$,ye)}function vi(C,X,ee){X.isScene!==!0&&(X=Ne);const ie=Fe.get(C),$=m.state.lights,ye=m.state.shadowsArray,Re=$.state.version,ze=le.getParameters(C,$.state,ye,X,ee),Pe=le.getProgramCacheKey(ze);let Je=ie.programs;ie.environment=C.isMeshStandardMaterial?X.environment:null,ie.fog=X.fog,ie.envMap=(C.isMeshStandardMaterial?bt:wt).get(C.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,Je===void 0&&(C.addEventListener("dispose",z),Je=new Map,ie.programs=Je);let Se=Je.get(Pe);if(Se!==void 0){if(ie.currentProgram===Se&&ie.lightsStateVersion===Re)return $r(C,ze),Se}else ze.uniforms=le.getUniforms(C),C.onBeforeCompile(ze,F),Se=le.acquireProgram(ze,Pe),Je.set(Pe,Se),ie.uniforms=ze.uniforms;const qe=ie.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(qe.clippingPlanes=we.uniform),$r(C,ze),ie.needsLights=Zs(C),ie.lightsStateVersion=Re,ie.needsLights&&(qe.ambientLightColor.value=$.state.ambient,qe.lightProbe.value=$.state.probe,qe.directionalLights.value=$.state.directional,qe.directionalLightShadows.value=$.state.directionalShadow,qe.spotLights.value=$.state.spot,qe.spotLightShadows.value=$.state.spotShadow,qe.rectAreaLights.value=$.state.rectArea,qe.ltc_1.value=$.state.rectAreaLTC1,qe.ltc_2.value=$.state.rectAreaLTC2,qe.pointLights.value=$.state.point,qe.pointLightShadows.value=$.state.pointShadow,qe.hemisphereLights.value=$.state.hemi,qe.directionalShadowMap.value=$.state.directionalShadowMap,qe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,qe.spotShadowMap.value=$.state.spotShadowMap,qe.spotLightMatrix.value=$.state.spotLightMatrix,qe.spotLightMap.value=$.state.spotLightMap,qe.pointShadowMap.value=$.state.pointShadowMap,qe.pointShadowMatrix.value=$.state.pointShadowMatrix),ie.currentProgram=Se,ie.uniformsList=null,Se}function Xr(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=Hs.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function $r(C,X){const ee=Fe.get(C);ee.outputColorSpace=X.outputColorSpace,ee.batching=X.batching,ee.batchingColor=X.batchingColor,ee.instancing=X.instancing,ee.instancingColor=X.instancingColor,ee.instancingMorph=X.instancingMorph,ee.skinning=X.skinning,ee.morphTargets=X.morphTargets,ee.morphNormals=X.morphNormals,ee.morphColors=X.morphColors,ee.morphTargetsCount=X.morphTargetsCount,ee.numClippingPlanes=X.numClippingPlanes,ee.numIntersection=X.numClipIntersection,ee.vertexAlphas=X.vertexAlphas,ee.vertexTangents=X.vertexTangents,ee.toneMapping=X.toneMapping}function jr(C,X,ee,ie,$){X.isScene!==!0&&(X=Ne),Qe.resetTextureUnits();const ye=X.fog,Re=ie.isMeshStandardMaterial?X.environment:null,ze=q===null?F.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:dr,Pe=(ie.isMeshStandardMaterial?bt:wt).get(ie.envMap||Re),Je=ie.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Se=!!ee.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),qe=!!ee.morphAttributes.position,ft=!!ee.morphAttributes.normal,Mt=!!ee.morphAttributes.color;let It=di;ie.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(It=F.toneMapping);const Pt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Tt=Pt!==void 0?Pt.length:0,Ke=Fe.get(ie),Dt=m.state.lights;if(fe===!0&&(Z===!0||C!==T)){const Yt=C===T&&ie.id===P;we.setState(ie,C,Yt)}let gt=!1;ie.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Dt.state.version||Ke.outputColorSpace!==ze||$.isBatchedMesh&&Ke.batching===!1||!$.isBatchedMesh&&Ke.batching===!0||$.isBatchedMesh&&Ke.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ke.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ke.instancing===!1||!$.isInstancedMesh&&Ke.instancing===!0||$.isSkinnedMesh&&Ke.skinning===!1||!$.isSkinnedMesh&&Ke.skinning===!0||$.isInstancedMesh&&Ke.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ke.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ke.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ke.instancingMorph===!1&&$.morphTexture!==null||Ke.envMap!==Pe||ie.fog===!0&&Ke.fog!==ye||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==we.numPlanes||Ke.numIntersection!==we.numIntersection)||Ke.vertexAlphas!==Je||Ke.vertexTangents!==Se||Ke.morphTargets!==qe||Ke.morphNormals!==ft||Ke.morphColors!==Mt||Ke.toneMapping!==It||Ke.morphTargetsCount!==Tt)&&(gt=!0):(gt=!0,Ke.__version=ie.version);let Kt=Ke.currentProgram;gt===!0&&(Kt=vi(ie,X,$));let S=!1,dt=!1,xi=!1;const At=Kt.getUniforms(),Ht=Ke.uniforms;if(ke.useProgram(Kt.program)&&(S=!0,dt=!0,xi=!0),ie.id!==P&&(P=ie.id,dt=!0),S||T!==C){ke.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),At.setValue(N,"projectionMatrix",C.projectionMatrix),At.setValue(N,"viewMatrix",C.matrixWorldInverse);const Zt=At.map.cameraPosition;Zt!==void 0&&Zt.setValue(N,te.setFromMatrixPosition(C.matrixWorld)),Ye.logarithmicDepthBuffer&&At.setValue(N,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&At.setValue(N,"isOrthographic",C.isOrthographicCamera===!0),T!==C&&(T=C,dt=!0,xi=!0)}if($.isSkinnedMesh){At.setOptional(N,$,"bindMatrix"),At.setOptional(N,$,"bindMatrixInverse");const Yt=$.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),At.setValue(N,"boneTexture",Yt.boneTexture,Qe))}$.isBatchedMesh&&(At.setOptional(N,$,"batchingTexture"),At.setValue(N,"batchingTexture",$._matricesTexture,Qe),At.setOptional(N,$,"batchingIdTexture"),At.setValue(N,"batchingIdTexture",$._indirectTexture,Qe),At.setOptional(N,$,"batchingColorTexture"),$._colorsTexture!==null&&At.setValue(N,"batchingColorTexture",$._colorsTexture,Qe));const sn=ee.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&Me.update($,ee,Kt),(dt||Ke.receiveShadow!==$.receiveShadow)&&(Ke.receiveShadow=$.receiveShadow,At.setValue(N,"receiveShadow",$.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Ht.envMap.value=Pe,Ht.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&X.environment!==null&&(Ht.envMapIntensity.value=X.environmentIntensity),dt&&(At.setValue(N,"toneMappingExposure",F.toneMappingExposure),Ke.needsLights&&Ks(Ht,xi),ye&&ie.fog===!0&&me.refreshFogUniforms(Ht,ye),me.refreshMaterialUniforms(Ht,ie,se,xe,m.state.transmissionRenderTarget[C.id]),Hs.upload(N,Xr(Ke),Ht,Qe)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Hs.upload(N,Xr(Ke),Ht,Qe),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&At.setValue(N,"center",$.center),At.setValue(N,"modelViewMatrix",$.modelViewMatrix),At.setValue(N,"normalMatrix",$.normalMatrix),At.setValue(N,"modelMatrix",$.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Yt=ie.uniformsGroups;for(let Zt=0,vr=Yt.length;Zt<vr;Zt++){const $n=Yt[Zt];st.update($n,Kt),st.bind($n,Kt)}}return Kt}function Ks(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function Zs(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(C,X,ee){const ie=Fe.get(C);ie.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),Fe.get(C.texture).__webglTexture=X,Fe.get(C.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ee,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,X){const ee=Fe.get(C);ee.__webglFramebuffer=X,ee.__useDefaultFramebuffer=X===void 0};const Js=N.createFramebuffer();this.setRenderTarget=function(C,X=0,ee=0){q=C,D=X,H=ee;let ie=!0,$=null,ye=!1,Re=!1;if(C){const Pe=Fe.get(C);if(Pe.__useDefaultFramebuffer!==void 0)ke.bindFramebuffer(N.FRAMEBUFFER,null),ie=!1;else if(Pe.__webglFramebuffer===void 0)Qe.setupRenderTarget(C);else if(Pe.__hasExternalTextures)Qe.rebindTextures(C,Fe.get(C.texture).__webglTexture,Fe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const qe=C.depthTexture;if(Pe.__boundDepthTexture!==qe){if(qe!==null&&Fe.has(qe)&&(C.width!==qe.image.width||C.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Qe.setupDepthRenderbuffer(C)}}const Je=C.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Re=!0);const Se=Fe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Se[X])?$=Se[X][ee]:$=Se[X],ye=!0):C.samples>0&&Qe.useMultisampledRTT(C)===!1?$=Fe.get(C).__webglMultisampledFramebuffer:Array.isArray(Se)?$=Se[ee]:$=Se,k.copy(C.viewport),K.copy(C.scissor),re=C.scissorTest}else k.copy(Oe).multiplyScalar(se).floor(),K.copy(Ze).multiplyScalar(se).floor(),re=at;if(ee!==0&&($=Js),ke.bindFramebuffer(N.FRAMEBUFFER,$)&&ie&&ke.drawBuffers(C,$),ke.viewport(k),ke.scissor(K),ke.setScissorTest(re),ye){const Pe=Fe.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+X,Pe.__webglTexture,ee)}else if(Re){const Pe=X;for(let Je=0;Je<C.textures.length;Je++){const Se=Fe.get(C.textures[Je]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Je,Se.__webglTexture,ee,Pe)}}else if(C!==null&&ee!==0){const Pe=Fe.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Pe.__webglTexture,ee)}P=-1},this.readRenderTargetPixels=function(C,X,ee,ie,$,ye,Re,ze=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Fe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Re!==void 0&&(Pe=Pe[Re]),Pe){ke.bindFramebuffer(N.FRAMEBUFFER,Pe);try{const Je=C.textures[ze],Se=Je.format,qe=Je.type;if(!Ye.textureFormatReadable(Se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-ie&&ee>=0&&ee<=C.height-$&&(C.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ze),N.readPixels(X,ee,ie,$,Ge.convert(Se),Ge.convert(qe),ye))}finally{const Je=q!==null?Fe.get(q).__webglFramebuffer:null;ke.bindFramebuffer(N.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(C,X,ee,ie,$,ye,Re,ze=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Fe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Re!==void 0&&(Pe=Pe[Re]),Pe)if(X>=0&&X<=C.width-ie&&ee>=0&&ee<=C.height-$){ke.bindFramebuffer(N.FRAMEBUFFER,Pe);const Je=C.textures[ze],Se=Je.format,qe=Je.type;if(!Ye.textureFormatReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ft=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ft),N.bufferData(N.PIXEL_PACK_BUFFER,ye.byteLength,N.STREAM_READ),C.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ze),N.readPixels(X,ee,ie,$,Ge.convert(Se),Ge.convert(qe),0);const Mt=q!==null?Fe.get(q).__webglFramebuffer:null;ke.bindFramebuffer(N.FRAMEBUFFER,Mt);const It=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await X_(N,It,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ft),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ye),N.deleteBuffer(ft),N.deleteSync(It),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,X=null,ee=0){const ie=Math.pow(2,-ee),$=Math.floor(C.image.width*ie),ye=Math.floor(C.image.height*ie),Re=X!==null?X.x:0,ze=X!==null?X.y:0;Qe.setTexture2D(C,0),N.copyTexSubImage2D(N.TEXTURE_2D,ee,0,0,Re,ze,$,ye),ke.unbindTexture()};const Qs=N.createFramebuffer(),St=N.createFramebuffer();this.copyTextureToTexture=function(C,X,ee=null,ie=null,$=0,ye=null){ye===null&&($!==0?(Or("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=$,$=0):ye=0);let Re,ze,Pe,Je,Se,qe,ft,Mt,It;const Pt=C.isCompressedTexture?C.mipmaps[ye]:C.image;if(ee!==null)Re=ee.max.x-ee.min.x,ze=ee.max.y-ee.min.y,Pe=ee.isBox3?ee.max.z-ee.min.z:1,Je=ee.min.x,Se=ee.min.y,qe=ee.isBox3?ee.min.z:0;else{const sn=Math.pow(2,-$);Re=Math.floor(Pt.width*sn),ze=Math.floor(Pt.height*sn),C.isDataArrayTexture?Pe=Pt.depth:C.isData3DTexture?Pe=Math.floor(Pt.depth*sn):Pe=1,Je=0,Se=0,qe=0}ie!==null?(ft=ie.x,Mt=ie.y,It=ie.z):(ft=0,Mt=0,It=0);const Tt=Ge.convert(X.format),Ke=Ge.convert(X.type);let Dt;X.isData3DTexture?(Qe.setTexture3D(X,0),Dt=N.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(Qe.setTexture2DArray(X,0),Dt=N.TEXTURE_2D_ARRAY):(Qe.setTexture2D(X,0),Dt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,X.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,X.unpackAlignment);const gt=N.getParameter(N.UNPACK_ROW_LENGTH),Kt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),S=N.getParameter(N.UNPACK_SKIP_PIXELS),dt=N.getParameter(N.UNPACK_SKIP_ROWS),xi=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Pt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Pt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Je),N.pixelStorei(N.UNPACK_SKIP_ROWS,Se),N.pixelStorei(N.UNPACK_SKIP_IMAGES,qe);const At=C.isDataArrayTexture||C.isData3DTexture,Ht=X.isDataArrayTexture||X.isData3DTexture;if(C.isDepthTexture){const sn=Fe.get(C),Yt=Fe.get(X),Zt=Fe.get(sn.__renderTarget),vr=Fe.get(Yt.__renderTarget);ke.bindFramebuffer(N.READ_FRAMEBUFFER,Zt.__webglFramebuffer),ke.bindFramebuffer(N.DRAW_FRAMEBUFFER,vr.__webglFramebuffer);for(let $n=0;$n<Pe;$n++)At&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Fe.get(C).__webglTexture,$,qe+$n),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Fe.get(X).__webglTexture,ye,It+$n)),N.blitFramebuffer(Je,Se,Re,ze,ft,Mt,Re,ze,N.DEPTH_BUFFER_BIT,N.NEAREST);ke.bindFramebuffer(N.READ_FRAMEBUFFER,null),ke.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if($!==0||C.isRenderTargetTexture||Fe.has(C)){const sn=Fe.get(C),Yt=Fe.get(X);ke.bindFramebuffer(N.READ_FRAMEBUFFER,Qs),ke.bindFramebuffer(N.DRAW_FRAMEBUFFER,St);for(let Zt=0;Zt<Pe;Zt++)At?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,sn.__webglTexture,$,qe+Zt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,sn.__webglTexture,$),Ht?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Yt.__webglTexture,ye,It+Zt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Yt.__webglTexture,ye),$!==0?N.blitFramebuffer(Je,Se,Re,ze,ft,Mt,Re,ze,N.COLOR_BUFFER_BIT,N.NEAREST):Ht?N.copyTexSubImage3D(Dt,ye,ft,Mt,It+Zt,Je,Se,Re,ze):N.copyTexSubImage2D(Dt,ye,ft,Mt,Je,Se,Re,ze);ke.bindFramebuffer(N.READ_FRAMEBUFFER,null),ke.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ht?C.isDataTexture||C.isData3DTexture?N.texSubImage3D(Dt,ye,ft,Mt,It,Re,ze,Pe,Tt,Ke,Pt.data):X.isCompressedArrayTexture?N.compressedTexSubImage3D(Dt,ye,ft,Mt,It,Re,ze,Pe,Tt,Pt.data):N.texSubImage3D(Dt,ye,ft,Mt,It,Re,ze,Pe,Tt,Ke,Pt):C.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ye,ft,Mt,Re,ze,Tt,Ke,Pt.data):C.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ye,ft,Mt,Pt.width,Pt.height,Tt,Pt.data):N.texSubImage2D(N.TEXTURE_2D,ye,ft,Mt,Re,ze,Tt,Ke,Pt);N.pixelStorei(N.UNPACK_ROW_LENGTH,gt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Kt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,S),N.pixelStorei(N.UNPACK_SKIP_ROWS,dt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,xi),ye===0&&X.generateMipmaps&&N.generateMipmap(Dt),ke.unbindTexture()},this.initRenderTarget=function(C){Fe.get(C).__webglFramebuffer===void 0&&Qe.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Qe.setTextureCube(C,0):C.isData3DTexture?Qe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Qe.setTexture2DArray(C,0):Qe.setTexture2D(C,0),ke.unbindTexture()},this.resetState=function(){D=0,H=0,q=null,ke.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}const Qc={type:"change"},rl={type:"start"},Uu={type:"end"},Is=new Qo,eu=new ui,py=Math.cos(70*G_.DEG2RAD),Wt=new J,on=2*Math.PI,Ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$a=1e-6;class my extends Pg{constructor(e,t=null){super(e,t),this.state=Ct.NONE,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:or.ROTATE,MIDDLE:or.DOLLY,RIGHT:or.PAN},this.touches={ONE:rr.ROTATE,TWO:rr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new Bi,this._lastTargetPosition=new J,this._quat=new Bi().setFromUnitVectors(e.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ac,this._sphericalDelta=new Ac,this._scale=1,this._panOffset=new J,this._rotateStart=new rt,this._rotateEnd=new rt,this._rotateDelta=new rt,this._panStart=new rt,this._panEnd=new rt,this._panDelta=new rt,this._dollyStart=new rt,this._dollyEnd=new rt,this._dollyDelta=new rt,this._dollyDirection=new J,this._mouse=new rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=gy.bind(this),this._onPointerDown=_y.bind(this),this._onPointerUp=vy.bind(this),this._onContextMenu=wy.bind(this),this._onMouseWheel=yy.bind(this),this._onKeyDown=Sy.bind(this),this._onTouchStart=My.bind(this),this._onTouchMove=Ty.bind(this),this._onMouseDown=xy.bind(this),this._onMouseMove=Ey.bind(this),this._interceptControlDown=by.bind(this),this._interceptControlUp=Ay.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Qc),this.update(),this.state=Ct.NONE}update(e=null){const t=this.object.position;Wt.copy(t).sub(this.target),Wt.applyQuaternion(this._quat),this._spherical.setFromVector3(Wt),this.autoRotate&&this.state===Ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(n)&&isFinite(a)&&(n<-Math.PI?n+=on:n>Math.PI&&(n-=on),a<-Math.PI?a+=on:a>Math.PI&&(a-=on),n<=a?this._spherical.theta=Math.max(n,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+a)/2?Math.max(n,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=u!=this._spherical.radius}if(Wt.setFromSpherical(this._spherical),Wt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const h=Wt.length();u=this._clampDistance(h*this._scale);const p=h-u;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),o=!!p}else if(this.object.isOrthographicCamera){const h=new J(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=p!==this.object.zoom;const d=new J(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(h),this.object.updateMatrixWorld(),u=Wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Is.origin.copy(this.object.position),Is.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Is.direction))<py?this.object.lookAt(this.target):(eu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Is.intersectPlane(eu,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>$a||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$a||this._lastTargetPosition.distanceToSquared(this.target)>$a?(this.dispatchEvent(Qc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?on/60*this.autoRotateSpeed*e:on/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Wt.setFromMatrixColumn(t,0),Wt.multiplyScalar(-e),this._panOffset.add(Wt)}_panUp(e,t){this.screenSpacePanning===!0?Wt.setFromMatrixColumn(t,1):(Wt.setFromMatrixColumn(t,0),Wt.crossVectors(this.object.up,Wt)),Wt.multiplyScalar(e),this._panOffset.add(Wt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;Wt.copy(a).sub(this.target);let o=Wt.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/n.clientHeight,this.object.matrix),this._panUp(2*t*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),a=e-n.left,o=t-n.top,u=n.width,h=n.height;this._mouse.x=a/u*2-1,this._mouse.y=-(o/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(n,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(n,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,a=e.pageY-t.y,o=Math.sqrt(n*n+a*a);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._rotateEnd.set(a,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(n,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,a=e.pageY-t.y,o=Math.sqrt(n*n+a*a);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,h=(e.pageY+t.y)*.5;this._updateZoomParameters(u,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new rt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function _y(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function gy(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function vy(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Uu),this.state=Ct.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function xy(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case or.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ct.DOLLY;break;case or.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ct.ROTATE}break;case or.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ct.PAN}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(rl)}function Ey(i){switch(this.state){case Ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function yy(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ct.NONE||(i.preventDefault(),this.dispatchEvent(rl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Uu))}function Sy(i){this.enabled!==!1&&this._handleKeyDown(i)}function My(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case rr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ct.TOUCH_ROTATE;break;case rr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ct.TOUCH_PAN;break;default:this.state=Ct.NONE}break;case 2:switch(this.touches.TWO){case rr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ct.TOUCH_DOLLY_PAN;break;case rr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ct.TOUCH_DOLLY_ROTATE;break;default:this.state=Ct.NONE}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(rl)}function Ty(i){switch(this._trackPointer(i),this.state){case Ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ct.NONE}}function wy(i){this.enabled!==!1&&i.preventDefault()}function by(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ay(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ry="modulepreload",Cy=function(i,e){return new URL(i,e).href},tu={},Py=function(e,t,n){let a=Promise.resolve();if(t&&t.length>0){const u=document.getElementsByTagName("link"),h=document.querySelector("meta[property=csp-nonce]"),p=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));a=Promise.allSettled(t.map(d=>{if(d=Cy(d,n),d in tu)return;tu[d]=!0;const v=d.endsWith(".css"),_=v?'[rel="stylesheet"]':"";if(!!n)for(let A=u.length-1;A>=0;A--){const R=u[A];if(R.href===d&&(!v||R.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${_}`))return;const E=document.createElement("link");if(E.rel=v?"stylesheet":Ry,v||(E.as="script"),E.crossOrigin="",E.href=d,p&&E.setAttribute("nonce",p),document.head.appendChild(E),v)return new Promise((A,R)=>{E.addEventListener("load",A),E.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(u){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=u,window.dispatchEvent(h),!h.defaultPrevented)throw u}return a.then(u=>{for(const h of u||[])h.status==="rejected"&&o(h.reason);return e().catch(o)})};var Dy=async function(i={}){var $l,jl,ql;var e,t=i,n=typeof window=="object",a=typeof WorkerGlobalScope<"u",o=typeof process=="object"&&(($l=process.versions)==null?void 0:$l.node)&&process.type!="renderer",u=!n&&!o&&!a;if(o){const{createRequire:r}=await Py(async()=>{const{createRequire:s}=await Promise.resolve().then(()=>sS);return{createRequire:s}},void 0,import.meta.url);var h=r(import.meta.url)}var p="./this.program",d=(r,s)=>{throw s},v=import.meta.url,_="";function x(r){return t.locateFile?t.locateFile(r,_):_+r}var E,A;if(o){if(!(typeof process=="object"&&((jl=process.versions)==null?void 0:jl.node)&&process.type!="renderer"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var R=process.versions.node,y=R.split(".").slice(0,3);if(y=y[0]*1e4+y[1]*100+y[2].split("-")[0]*1,y<16e4)throw new Error("This emscripten-generated code requires node v16.0.0 (detected v"+R+")");var m=h("fs");v.startsWith("file:")&&(_=h("path").dirname(h("url").fileURLToPath(v))+"/"),A=s=>{s=H(s)?new URL(s):s;var l=m.readFileSync(s);return D(Buffer.isBuffer(l)),l},E=async(s,l=!0)=>{s=H(s)?new URL(s):s;var c=m.readFileSync(s,l?void 0:"utf8");return D(l?Buffer.isBuffer(c):typeof c=="string"),c},process.argv.length>1&&(p=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),d=(s,l)=>{throw process.exitCode=s,l}}else if(u){if(typeof process=="object"&&((ql=process.versions)==null?void 0:ql.node)&&process.type!="renderer"||typeof window=="object"||typeof WorkerGlobalScope<"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)")}else if(n||a){try{_=new URL(".",v).href}catch{}if(!(typeof window=="object"||typeof WorkerGlobalScope<"u"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");a&&(A=r=>{var s=new XMLHttpRequest;return s.open("GET",r,!1),s.responseType="arraybuffer",s.send(null),new Uint8Array(s.response)}),E=async r=>{if(H(r))return new Promise((l,c)=>{var f=new XMLHttpRequest;f.open("GET",r,!0),f.responseType="arraybuffer",f.onload=()=>{if(f.status==200||f.status==0&&f.response){l(f.response);return}c(f.status)},f.onerror=c,f.send(null)});var s=await fetch(r,{credentials:"same-origin"});if(s.ok)return s.arrayBuffer();throw new Error(s.status+" : "+s.url)}}else throw new Error("environment detection error");var O=console.log.bind(console),I=console.error.bind(console);D(!u,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");var F;typeof WebAssembly!="object"&&I("no native wasm support detected");var B=!1;function D(r,s){r||j("Assertion failed"+(s?": "+s:""))}var H=r=>r.startsWith("file://");function q(){var r=ha();D((r&3)==0),r==0&&(r+=4),pe[r>>2]=34821223,pe[r+4>>2]=2310721022,pe[0]=1668509029}function P(){if(!B){var r=ha();r==0&&(r+=4);var s=pe[r>>2],l=pe[r+4>>2];(s!=34821223||l!=2310721022)&&j(`Stack overflow! Stack cookie has been overwritten at ${Ue(r)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${Ue(l)} ${Ue(s)}`),pe[0]!=1668509029&&j("Runtime error: The application has corrupted its heap memory area (address zero)!")}}class T extends Error{}class k extends T{}class K extends T{constructor(s){super(s),this.excPtr=s;const l=Ll(s);this.name=l[0],this.message=l[1]}}(()=>{var r=new Int16Array(1),s=new Int8Array(r.buffer);if(r[0]=25459,s[0]!==115||s[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();function re(r){Object.getOwnPropertyDescriptor(t,r)||Object.defineProperty(t,r,{configurable:!0,set(){j(`Attempt to set \`Module.${r}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function Q(r){return()=>D(!1,`call to '${r}' via reference taken before Wasm module initialization`)}function he(r){Object.getOwnPropertyDescriptor(t,r)&&j(`\`Module.${r}\` was supplied but \`${r}\` not included in INCOMING_MODULE_JS_API`)}function oe(r){return r==="FS_createPath"||r==="FS_createDataFile"||r==="FS_createPreloadedFile"||r==="FS_unlink"||r==="addRunDependency"||r==="FS_createLazyFile"||r==="FS_createDevice"||r==="removeRunDependency"}function xe(r,s){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,r)&&Object.defineProperty(globalThis,r,{configurable:!0,get(){s()}})}function se(r,s){xe(r,()=>{Ie(`\`${r}\` is not longer defined by emscripten. ${s}`)})}se("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),se("asm","Please use wasmExports instead");function Ee(r){xe(r,()=>{var s=`\`${r}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,l=r;l.startsWith("_")||(l="$"+r),s+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${l}')`,oe(r)&&(s+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Ie(s)}),De(r)}function De(r){Object.getOwnPropertyDescriptor(t,r)||Object.defineProperty(t,r,{configurable:!0,get(){var s=`'${r}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;oe(r)&&(s+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),j(s)}})}var Oe,Ze,at,tt,fe,Z,ne,te,pe,Ne,Be,je,N,it=!1;function He(){var r=at.buffer;tt=new Int8Array(r),Z=new Int16Array(r),fe=new Uint8Array(r),ne=new Uint16Array(r),te=new Int32Array(r),pe=new Uint32Array(r),Ne=new Float32Array(r),Be=new Float64Array(r),je=new BigInt64Array(r),N=new BigUint64Array(r)}D(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support");function Ye(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)Te(t.preRun.shift());re("preRun"),Ge(V)}function ke(){D(!it),it=!0,P(),!t.noFSInit&&!S.initialized&&S.init(),Ti.__wasm_call_ctors(),S.ignorePermissions=!1}function yt(){if(P(),t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)st(t.postRun.shift());re("postRun"),Ge(Ae)}var Fe=0,Qe=null,wt={},bt=null;function U(r){var s;Fe++,(s=t.monitorRunDependencies)==null||s.call(t,Fe),r?(D(!wt[r]),wt[r]=1,bt===null&&typeof setInterval<"u"&&(bt=setInterval(()=>{if(B){clearInterval(bt),bt=null;return}var l=!1;for(var c in wt)l||(l=!0,I("still waiting on run dependencies:")),I(`dependency: ${c}`);l&&I("(end of list)")},1e4))):I("warning: run dependency added without ID")}function b(r){var l;if(Fe--,(l=t.monitorRunDependencies)==null||l.call(t,Fe),r?(D(wt[r]),delete wt[r]):I("warning: run dependency removed without ID"),Fe==0&&(bt!==null&&(clearInterval(bt),bt=null),Qe)){var s=Qe;Qe=null,s()}}function j(r){var l;(l=t.onAbort)==null||l.call(t,r),r="Aborted("+r+")",I(r),B=!0;var s=new WebAssembly.RuntimeError(r);throw Ze==null||Ze(s),s}function le(r,s){return(...l)=>{D(it,`native function \`${r}\` called before runtime initialization`);var c=Ti[r];return D(c,`exported native function \`${r}\` not found`),D(l.length<=s,`native function \`${r}\` called with ${l.length} args but expects ${s}`),c(...l)}}var me;function ue(){return t.locateFile?x("mujoco.wasm"):new URL(""+new URL("mujoco-CGsuVDfV.wasm",import.meta.url).href,import.meta.url).href}function $e(r){if(r==me&&F)return new Uint8Array(F);if(A)return A(r);throw"both async and sync fetching of the wasm failed"}async function we(r){if(!F)try{var s=await E(r);return new Uint8Array(s)}catch{}return $e(r)}async function Ve(r,s){try{var l=await we(r),c=await WebAssembly.instantiate(l,s);return c}catch(f){I(`failed to asynchronously prepare wasm: ${f}`),H(me)&&I(`warning: Loading from a file URI (${me}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),j(f)}}async function We(r,s,l){if(!r&&typeof WebAssembly.instantiateStreaming=="function"&&!H(s)&&!o)try{var c=fetch(s,{credentials:"same-origin"}),f=await WebAssembly.instantiateStreaming(c,l);return f}catch(g){I(`wasm streaming compile failed: ${g}`),I("falling back to ArrayBuffer instantiation")}return Ve(s,l)}function Me(){return{env:Wl,wasi_snapshot_preview1:Wl}}async function Le(){function r(M,w){return Ti=M.exports,at=Ti.memory,D(at,"memory not found in wasm exports"),He(),ns=Ti.__indirect_function_table,D(ns,"table not found in wasm exports"),Zf(Ti),b("wasm-instantiate"),Ti}U("wasm-instantiate");var s=t;function l(M){return D(t===s,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),s=null,r(M.instance)}var c=Me();if(t.instantiateWasm)return new Promise((M,w)=>{try{t.instantiateWasm(c,(L,W)=>{M(r(L,W))})}catch(L){I(`Module.instantiateWasm callback failed with error: ${L}`),w(L)}});me??(me=ue());var f=await We(F,me,c),g=l(f);return g}class et{constructor(s){Tn(this,"name","ExitStatus");this.message=`Program terminated with exit(${s})`,this.status=s}}var Ge=r=>{for(;r.length>0;)r.shift()(t)},Ae=[],st=r=>Ae.push(r),V=[],Te=r=>V.push(r),be=!0,Ue=r=>(D(typeof r=="number"),r>>>=0,"0x"+r.toString(16).padStart(8,"0")),G=r=>kl(r),z=()=>zl(),Ie=r=>{Ie.shown||(Ie.shown={}),Ie.shown[r]||(Ie.shown[r]=1,o&&(r="warning: "+r),I(r))},nt=typeof TextDecoder<"u"?new TextDecoder:void 0,vt=(r,s=0,l=NaN)=>{for(var c=s+l,f=s;r[f]&&!(f>=c);)++f;if(f-s>16&&r.buffer&&nt)return nt.decode(r.subarray(s,f));for(var g="";s<f;){var M=r[s++];if(!(M&128)){g+=String.fromCharCode(M);continue}var w=r[s++]&63;if((M&224)==192){g+=String.fromCharCode((M&31)<<6|w);continue}var L=r[s++]&63;if((M&240)==224?M=(M&15)<<12|w<<6|L:((M&248)!=240&&Ie("Invalid UTF-8 leading byte "+Ue(M)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),M=(M&7)<<18|w<<12|L<<6|r[s++]&63),M<65536)g+=String.fromCharCode(M);else{var W=M-65536;g+=String.fromCharCode(55296|W>>10,56320|W&1023)}}return g},lt=(r,s)=>(D(typeof r=="number",`UTF8ToString expects a number (got ${typeof r})`),r?vt(fe,r,s):""),Sn=(r,s,l,c)=>j(`Assertion failed: ${lt(r)}, at: `+[s?lt(s):"unknown filename",l,c?lt(c):"unknown function"]),kt=[],_i=0,Wn=r=>{var s=new Xn(r);return s.get_caught()||(s.set_caught(!0),_i--),s.set_rethrown(!1),kt.push(s),ls(r),Gl(r)},gr=()=>{if(!kt.length)return 0;var r=kt[kt.length-1];return ls(r.excPtr),r.excPtr},rn=0,Wr=()=>{_e(0,0),D(kt.length>0);var r=kt.pop();fa(r.excPtr),rn=0};class Xn{constructor(s){this.excPtr=s,this.ptr=s-24}set_type(s){pe[this.ptr+4>>2]=s}get_type(){return pe[this.ptr+4>>2]}set_destructor(s){pe[this.ptr+8>>2]=s}get_destructor(){return pe[this.ptr+8>>2]}set_caught(s){s=s?1:0,tt[this.ptr+12]=s}get_caught(){return tt[this.ptr+12]!=0}set_rethrown(s){s=s?1:0,tt[this.ptr+13]=s}get_rethrown(){return tt[this.ptr+13]!=0}init(s,l){this.set_adjusted_ptr(0),this.set_type(s),this.set_destructor(l)}set_adjusted_ptr(s){pe[this.ptr+16>>2]=s}get_adjusted_ptr(){return pe[this.ptr+16>>2]}}var gi=r=>Nl(r),vi=r=>{var s=rn==null?void 0:rn.excPtr;if(!s)return gi(0),0;var l=new Xn(s);l.set_adjusted_ptr(s);var c=l.get_type();if(!c)return gi(0),s;for(var f of r){if(f===0||f===c)break;var g=l.ptr+16;if(Vl(f,c,g))return gi(f),s}return gi(c),s},Xr=()=>vi([]),$r=r=>vi([r]),jr=()=>{var r=kt.pop();r||j("no exception to throw");var s=r.excPtr;throw r.get_rethrown()||(kt.push(r),r.set_rethrown(!0),r.set_caught(!1),_i++),rn=new K(s),rn},Ks=r=>{if(r){var s=new Xn(r);kt.push(s),s.set_rethrown(!0),jr()}},Zs=(r,s,l)=>{var c=new Xn(r);throw c.init(s,l),rn=new K(r),_i++,rn},Js=()=>_i,Qs=r=>{throw rn||(rn=new K(r)),rn},St={isAbs:r=>r.charAt(0)==="/",splitPath:r=>{var s=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return s.exec(r).slice(1)},normalizeArray:(r,s)=>{for(var l=0,c=r.length-1;c>=0;c--){var f=r[c];f==="."?r.splice(c,1):f===".."?(r.splice(c,1),l++):l&&(r.splice(c,1),l--)}if(s)for(;l;l--)r.unshift("..");return r},normalize:r=>{var s=St.isAbs(r),l=r.slice(-1)==="/";return r=St.normalizeArray(r.split("/").filter(c=>!!c),!s).join("/"),!r&&!s&&(r="."),r&&l&&(r+="/"),(s?"/":"")+r},dirname:r=>{var s=St.splitPath(r),l=s[0],c=s[1];return!l&&!c?".":(c&&(c=c.slice(0,-1)),l+c)},basename:r=>r&&r.match(/([^\/]+|\/)\/*$/)[1],join:(...r)=>St.normalize(r.join("/")),join2:(r,s)=>St.normalize(r+"/"+s)},C=()=>{if(o){var r=h("crypto");return s=>r.randomFillSync(s)}return s=>crypto.getRandomValues(s)},X=r=>{(X=C())(r)},ee={resolve:(...r)=>{for(var s="",l=!1,c=r.length-1;c>=-1&&!l;c--){var f=c>=0?r[c]:S.cwd();if(typeof f!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!f)return"";s=f+"/"+s,l=St.isAbs(f)}return s=St.normalizeArray(s.split("/").filter(g=>!!g),!l).join("/"),(l?"/":"")+s||"."},relative:(r,s)=>{r=ee.resolve(r).slice(1),s=ee.resolve(s).slice(1);function l(W){for(var Y=0;Y<W.length&&W[Y]==="";Y++);for(var ae=W.length-1;ae>=0&&W[ae]==="";ae--);return Y>ae?[]:W.slice(Y,ae-Y+1)}for(var c=l(r.split("/")),f=l(s.split("/")),g=Math.min(c.length,f.length),M=g,w=0;w<g;w++)if(c[w]!==f[w]){M=w;break}for(var L=[],w=M;w<c.length;w++)L.push("..");return L=L.concat(f.slice(M)),L.join("/")}},ie=[],$=r=>{for(var s=0,l=0;l<r.length;++l){var c=r.charCodeAt(l);c<=127?s++:c<=2047?s+=2:c>=55296&&c<=57343?(s+=4,++l):s+=3}return s},ye=(r,s,l,c)=>{if(D(typeof r=="string",`stringToUTF8Array expects a string (got ${typeof r})`),!(c>0))return 0;for(var f=l,g=l+c-1,M=0;M<r.length;++M){var w=r.codePointAt(M);if(w<=127){if(l>=g)break;s[l++]=w}else if(w<=2047){if(l+1>=g)break;s[l++]=192|w>>6,s[l++]=128|w&63}else if(w<=65535){if(l+2>=g)break;s[l++]=224|w>>12,s[l++]=128|w>>6&63,s[l++]=128|w&63}else{if(l+3>=g)break;w>1114111&&Ie("Invalid Unicode code point "+Ue(w)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),s[l++]=240|w>>18,s[l++]=128|w>>12&63,s[l++]=128|w>>6&63,s[l++]=128|w&63,M++}}return s[l]=0,l-f},Re=(r,s,l)=>{var c=$(r)+1,f=new Array(c),g=ye(r,f,0,f.length);return f.length=g,f},ze=()=>{if(!ie.length){var r=null;if(o){var s=256,l=Buffer.alloc(s),c=0,f=process.stdin.fd;try{c=m.readSync(f,l,0,s)}catch(g){if(g.toString().includes("EOF"))c=0;else throw g}c>0&&(r=l.slice(0,c).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(r=window.prompt("Input: "),r!==null&&(r+=`
`));if(!r)return null;ie=Re(r)}return ie.shift()},Pe={ttys:[],init(){},shutdown(){},register(r,s){Pe.ttys[r]={input:[],output:[],ops:s},S.registerDevice(r,Pe.stream_ops)},stream_ops:{open(r){var s=Pe.ttys[r.node.rdev];if(!s)throw new S.ErrnoError(43);r.tty=s,r.seekable=!1},close(r){r.tty.ops.fsync(r.tty)},fsync(r){r.tty.ops.fsync(r.tty)},read(r,s,l,c,f){if(!r.tty||!r.tty.ops.get_char)throw new S.ErrnoError(60);for(var g=0,M=0;M<c;M++){var w;try{w=r.tty.ops.get_char(r.tty)}catch{throw new S.ErrnoError(29)}if(w===void 0&&g===0)throw new S.ErrnoError(6);if(w==null)break;g++,s[l+M]=w}return g&&(r.node.atime=Date.now()),g},write(r,s,l,c,f){if(!r.tty||!r.tty.ops.put_char)throw new S.ErrnoError(60);try{for(var g=0;g<c;g++)r.tty.ops.put_char(r.tty,s[l+g])}catch{throw new S.ErrnoError(29)}return c&&(r.node.mtime=r.node.ctime=Date.now()),g}},default_tty_ops:{get_char(r){return ze()},put_char(r,s){s===null||s===10?(O(vt(r.output)),r.output=[]):s!=0&&r.output.push(s)},fsync(r){var s;((s=r.output)==null?void 0:s.length)>0&&(O(vt(r.output)),r.output=[])},ioctl_tcgets(r){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(r,s,l){return 0},ioctl_tiocgwinsz(r){return[24,80]}},default_tty1_ops:{put_char(r,s){s===null||s===10?(I(vt(r.output)),r.output=[]):s!=0&&r.output.push(s)},fsync(r){var s;((s=r.output)==null?void 0:s.length)>0&&(I(vt(r.output)),r.output=[])}}},Je=r=>{j("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")},Se={ops_table:null,mount(r){return Se.createNode(null,"/",16895,0)},createNode(r,s,l,c){if(S.isBlkdev(l)||S.isFIFO(l))throw new S.ErrnoError(63);Se.ops_table||(Se.ops_table={dir:{node:{getattr:Se.node_ops.getattr,setattr:Se.node_ops.setattr,lookup:Se.node_ops.lookup,mknod:Se.node_ops.mknod,rename:Se.node_ops.rename,unlink:Se.node_ops.unlink,rmdir:Se.node_ops.rmdir,readdir:Se.node_ops.readdir,symlink:Se.node_ops.symlink},stream:{llseek:Se.stream_ops.llseek}},file:{node:{getattr:Se.node_ops.getattr,setattr:Se.node_ops.setattr},stream:{llseek:Se.stream_ops.llseek,read:Se.stream_ops.read,write:Se.stream_ops.write,mmap:Se.stream_ops.mmap,msync:Se.stream_ops.msync}},link:{node:{getattr:Se.node_ops.getattr,setattr:Se.node_ops.setattr,readlink:Se.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Se.node_ops.getattr,setattr:Se.node_ops.setattr},stream:S.chrdev_stream_ops}});var f=S.createNode(r,s,l,c);return S.isDir(f.mode)?(f.node_ops=Se.ops_table.dir.node,f.stream_ops=Se.ops_table.dir.stream,f.contents={}):S.isFile(f.mode)?(f.node_ops=Se.ops_table.file.node,f.stream_ops=Se.ops_table.file.stream,f.usedBytes=0,f.contents=null):S.isLink(f.mode)?(f.node_ops=Se.ops_table.link.node,f.stream_ops=Se.ops_table.link.stream):S.isChrdev(f.mode)&&(f.node_ops=Se.ops_table.chrdev.node,f.stream_ops=Se.ops_table.chrdev.stream),f.atime=f.mtime=f.ctime=Date.now(),r&&(r.contents[s]=f,r.atime=r.mtime=r.ctime=f.atime),f},getFileDataAsTypedArray(r){return r.contents?r.contents.subarray?r.contents.subarray(0,r.usedBytes):new Uint8Array(r.contents):new Uint8Array(0)},expandFileStorage(r,s){var l=r.contents?r.contents.length:0;if(!(l>=s)){var c=1024*1024;s=Math.max(s,l*(l<c?2:1.125)>>>0),l!=0&&(s=Math.max(s,256));var f=r.contents;r.contents=new Uint8Array(s),r.usedBytes>0&&r.contents.set(f.subarray(0,r.usedBytes),0)}},resizeFileStorage(r,s){if(r.usedBytes!=s)if(s==0)r.contents=null,r.usedBytes=0;else{var l=r.contents;r.contents=new Uint8Array(s),l&&r.contents.set(l.subarray(0,Math.min(s,r.usedBytes))),r.usedBytes=s}},node_ops:{getattr(r){var s={};return s.dev=S.isChrdev(r.mode)?r.id:1,s.ino=r.id,s.mode=r.mode,s.nlink=1,s.uid=0,s.gid=0,s.rdev=r.rdev,S.isDir(r.mode)?s.size=4096:S.isFile(r.mode)?s.size=r.usedBytes:S.isLink(r.mode)?s.size=r.link.length:s.size=0,s.atime=new Date(r.atime),s.mtime=new Date(r.mtime),s.ctime=new Date(r.ctime),s.blksize=4096,s.blocks=Math.ceil(s.size/s.blksize),s},setattr(r,s){for(const l of["mode","atime","mtime","ctime"])s[l]!=null&&(r[l]=s[l]);s.size!==void 0&&Se.resizeFileStorage(r,s.size)},lookup(r,s){throw new S.ErrnoError(44)},mknod(r,s,l,c){return Se.createNode(r,s,l,c)},rename(r,s,l){var c;try{c=S.lookupNode(s,l)}catch{}if(c){if(S.isDir(r.mode))for(var f in c.contents)throw new S.ErrnoError(55);S.hashRemoveNode(c)}delete r.parent.contents[r.name],s.contents[l]=r,r.name=l,s.ctime=s.mtime=r.parent.ctime=r.parent.mtime=Date.now()},unlink(r,s){delete r.contents[s],r.ctime=r.mtime=Date.now()},rmdir(r,s){var l=S.lookupNode(r,s);for(var c in l.contents)throw new S.ErrnoError(55);delete r.contents[s],r.ctime=r.mtime=Date.now()},readdir(r){return[".","..",...Object.keys(r.contents)]},symlink(r,s,l){var c=Se.createNode(r,s,41471,0);return c.link=l,c},readlink(r){if(!S.isLink(r.mode))throw new S.ErrnoError(28);return r.link}},stream_ops:{read(r,s,l,c,f){var g=r.node.contents;if(f>=r.node.usedBytes)return 0;var M=Math.min(r.node.usedBytes-f,c);if(D(M>=0),M>8&&g.subarray)s.set(g.subarray(f,f+M),l);else for(var w=0;w<M;w++)s[l+w]=g[f+w];return M},write(r,s,l,c,f,g){if(D(!(s instanceof ArrayBuffer)),s.buffer===tt.buffer&&(g=!1),!c)return 0;var M=r.node;if(M.mtime=M.ctime=Date.now(),s.subarray&&(!M.contents||M.contents.subarray)){if(g)return D(f===0,"canOwn must imply no weird position inside the file"),M.contents=s.subarray(l,l+c),M.usedBytes=c,c;if(M.usedBytes===0&&f===0)return M.contents=s.slice(l,l+c),M.usedBytes=c,c;if(f+c<=M.usedBytes)return M.contents.set(s.subarray(l,l+c),f),c}if(Se.expandFileStorage(M,f+c),M.contents.subarray&&s.subarray)M.contents.set(s.subarray(l,l+c),f);else for(var w=0;w<c;w++)M.contents[f+w]=s[l+w];return M.usedBytes=Math.max(M.usedBytes,f+c),c},llseek(r,s,l){var c=s;if(l===1?c+=r.position:l===2&&S.isFile(r.node.mode)&&(c+=r.node.usedBytes),c<0)throw new S.ErrnoError(28);return c},mmap(r,s,l,c,f){if(!S.isFile(r.node.mode))throw new S.ErrnoError(43);var g,M,w=r.node.contents;if(!(f&2)&&w&&w.buffer===tt.buffer)M=!1,g=w.byteOffset;else{if(M=!0,g=Je(),!g)throw new S.ErrnoError(48);w&&((l>0||l+s<w.length)&&(w.subarray?w=w.subarray(l,l+s):w=Array.prototype.slice.call(w,l,l+s)),tt.set(w,g))}return{ptr:g,allocated:M}},msync(r,s,l,c,f){return Se.stream_ops.write(r,s,0,c,l,!1),0}}},qe=async r=>{var s=await E(r);return D(s,`Loading data file "${r}" failed (no arrayBuffer).`),new Uint8Array(s)},ft=(...r)=>S.createDataFile(...r),Mt=r=>{for(var s=r;;){if(!wt[r])return r;r=s+Math.random()}},It=[],Pt=(r,s,l,c)=>{typeof Browser<"u"&&Browser.init();var f=!1;return It.forEach(g=>{f||g.canHandle(s)&&(g.handle(r,s,l,c),f=!0)}),f},Tt=(r,s,l,c,f,g,M,w,L,W)=>{var Y=s?ee.resolve(St.join2(r,s)):r,ae=Mt(`cp ${Y}`);function de(ce){function ge(Xe){W==null||W(),w||ft(r,s,Xe,c,f,L),g==null||g(),b(ae)}Pt(ce,Y,ge,()=>{M==null||M(),b(ae)})||ge(ce)}U(ae),typeof l=="string"?qe(l).then(de,M):de(l)},Ke=r=>{var s={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},l=s[r];if(typeof l>"u")throw new Error(`Unknown file open mode: ${r}`);return l},Dt=(r,s)=>{var l=0;return r&&(l|=365),s&&(l|=146),l},gt=r=>lt(Ul(r)),Kt={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},S={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class extends Error{constructor(s){super(it?gt(s):"");Tn(this,"name","ErrnoError");this.errno=s;for(var l in Kt)if(Kt[l]===s){this.code=l;break}}},FSStream:class{constructor(){Tn(this,"shared",{})}get object(){return this.node}set object(r){this.node=r}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(r){this.shared.flags=r}get position(){return this.shared.position}set position(r){this.shared.position=r}},FSNode:class{constructor(r,s,l,c){Tn(this,"node_ops",{});Tn(this,"stream_ops",{});Tn(this,"readMode",365);Tn(this,"writeMode",146);Tn(this,"mounted",null);r||(r=this),this.parent=r,this.mount=r.mount,this.id=S.nextInode++,this.name=s,this.mode=l,this.rdev=c,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(r){r?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(r){r?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return S.isDir(this.mode)}get isDevice(){return S.isChrdev(this.mode)}},lookupPath(r,s={}){if(!r)throw new S.ErrnoError(44);s.follow_mount??(s.follow_mount=!0),St.isAbs(r)||(r=S.cwd()+"/"+r);e:for(var l=0;l<40;l++){for(var c=r.split("/").filter(W=>!!W),f=S.root,g="/",M=0;M<c.length;M++){var w=M===c.length-1;if(w&&s.parent)break;if(c[M]!=="."){if(c[M]===".."){if(g=St.dirname(g),S.isRoot(f)){r=g+"/"+c.slice(M+1).join("/");continue e}else f=f.parent;continue}g=St.join2(g,c[M]);try{f=S.lookupNode(f,c[M])}catch(W){if((W==null?void 0:W.errno)===44&&w&&s.noent_okay)return{path:g};throw W}if(S.isMountpoint(f)&&(!w||s.follow_mount)&&(f=f.mounted.root),S.isLink(f.mode)&&(!w||s.follow)){if(!f.node_ops.readlink)throw new S.ErrnoError(52);var L=f.node_ops.readlink(f);St.isAbs(L)||(L=St.dirname(g)+"/"+L),r=L+"/"+c.slice(M+1).join("/");continue e}}}return{path:g,node:f}}throw new S.ErrnoError(32)},getPath(r){for(var s;;){if(S.isRoot(r)){var l=r.mount.mountpoint;return s?l[l.length-1]!=="/"?`${l}/${s}`:l+s:l}s=s?`${r.name}/${s}`:r.name,r=r.parent}},hashName(r,s){for(var l=0,c=0;c<s.length;c++)l=(l<<5)-l+s.charCodeAt(c)|0;return(r+l>>>0)%S.nameTable.length},hashAddNode(r){var s=S.hashName(r.parent.id,r.name);r.name_next=S.nameTable[s],S.nameTable[s]=r},hashRemoveNode(r){var s=S.hashName(r.parent.id,r.name);if(S.nameTable[s]===r)S.nameTable[s]=r.name_next;else for(var l=S.nameTable[s];l;){if(l.name_next===r){l.name_next=r.name_next;break}l=l.name_next}},lookupNode(r,s){var l=S.mayLookup(r);if(l)throw new S.ErrnoError(l);for(var c=S.hashName(r.id,s),f=S.nameTable[c];f;f=f.name_next){var g=f.name;if(f.parent.id===r.id&&g===s)return f}return S.lookup(r,s)},createNode(r,s,l,c){D(typeof r=="object");var f=new S.FSNode(r,s,l,c);return S.hashAddNode(f),f},destroyNode(r){S.hashRemoveNode(r)},isRoot(r){return r===r.parent},isMountpoint(r){return!!r.mounted},isFile(r){return(r&61440)===32768},isDir(r){return(r&61440)===16384},isLink(r){return(r&61440)===40960},isChrdev(r){return(r&61440)===8192},isBlkdev(r){return(r&61440)===24576},isFIFO(r){return(r&61440)===4096},isSocket(r){return(r&49152)===49152},flagsToPermissionString(r){var s=["r","w","rw"][r&3];return r&512&&(s+="w"),s},nodePermissions(r,s){return S.ignorePermissions?0:s.includes("r")&&!(r.mode&292)||s.includes("w")&&!(r.mode&146)||s.includes("x")&&!(r.mode&73)?2:0},mayLookup(r){if(!S.isDir(r.mode))return 54;var s=S.nodePermissions(r,"x");return s||(r.node_ops.lookup?0:2)},mayCreate(r,s){if(!S.isDir(r.mode))return 54;try{var l=S.lookupNode(r,s);return 20}catch{}return S.nodePermissions(r,"wx")},mayDelete(r,s,l){var c;try{c=S.lookupNode(r,s)}catch(g){return g.errno}var f=S.nodePermissions(r,"wx");if(f)return f;if(l){if(!S.isDir(c.mode))return 54;if(S.isRoot(c)||S.getPath(c)===S.cwd())return 10}else if(S.isDir(c.mode))return 31;return 0},mayOpen(r,s){return r?S.isLink(r.mode)?32:S.isDir(r.mode)&&(S.flagsToPermissionString(s)!=="r"||s&576)?31:S.nodePermissions(r,S.flagsToPermissionString(s)):44},checkOpExists(r,s){if(!r)throw new S.ErrnoError(s);return r},MAX_OPEN_FDS:4096,nextfd(){for(var r=0;r<=S.MAX_OPEN_FDS;r++)if(!S.streams[r])return r;throw new S.ErrnoError(33)},getStreamChecked(r){var s=S.getStream(r);if(!s)throw new S.ErrnoError(8);return s},getStream:r=>S.streams[r],createStream(r,s=-1){return D(s>=-1),r=Object.assign(new S.FSStream,r),s==-1&&(s=S.nextfd()),r.fd=s,S.streams[s]=r,r},closeStream(r){S.streams[r]=null},dupStream(r,s=-1){var c,f;var l=S.createStream(r,s);return(f=(c=l.stream_ops)==null?void 0:c.dup)==null||f.call(c,l),l},doSetAttr(r,s,l){var c=r==null?void 0:r.stream_ops.setattr,f=c?r:s;c??(c=s.node_ops.setattr),S.checkOpExists(c,63),c(f,l)},chrdev_stream_ops:{open(r){var l,c;var s=S.getDevice(r.node.rdev);r.stream_ops=s.stream_ops,(c=(l=r.stream_ops).open)==null||c.call(l,r)},llseek(){throw new S.ErrnoError(70)}},major:r=>r>>8,minor:r=>r&255,makedev:(r,s)=>r<<8|s,registerDevice(r,s){S.devices[r]={stream_ops:s}},getDevice:r=>S.devices[r],getMounts(r){for(var s=[],l=[r];l.length;){var c=l.pop();s.push(c),l.push(...c.mounts)}return s},syncfs(r,s){typeof r=="function"&&(s=r,r=!1),S.syncFSRequests++,S.syncFSRequests>1&&I(`warning: ${S.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var l=S.getMounts(S.root.mount),c=0;function f(M){return D(S.syncFSRequests>0),S.syncFSRequests--,s(M)}function g(M){if(M)return g.errored?void 0:(g.errored=!0,f(M));++c>=l.length&&f(null)}l.forEach(M=>{if(!M.type.syncfs)return g(null);M.type.syncfs(M,r,g)})},mount(r,s,l){if(typeof r=="string")throw r;var c=l==="/",f=!l,g;if(c&&S.root)throw new S.ErrnoError(10);if(!c&&!f){var M=S.lookupPath(l,{follow_mount:!1});if(l=M.path,g=M.node,S.isMountpoint(g))throw new S.ErrnoError(10);if(!S.isDir(g.mode))throw new S.ErrnoError(54)}var w={type:r,opts:s,mountpoint:l,mounts:[]},L=r.mount(w);return L.mount=w,w.root=L,c?S.root=L:g&&(g.mounted=w,g.mount&&g.mount.mounts.push(w)),L},unmount(r){var s=S.lookupPath(r,{follow_mount:!1});if(!S.isMountpoint(s.node))throw new S.ErrnoError(28);var l=s.node,c=l.mounted,f=S.getMounts(c);Object.keys(S.nameTable).forEach(M=>{for(var w=S.nameTable[M];w;){var L=w.name_next;f.includes(w.mount)&&S.destroyNode(w),w=L}}),l.mounted=null;var g=l.mount.mounts.indexOf(c);D(g!==-1),l.mount.mounts.splice(g,1)},lookup(r,s){return r.node_ops.lookup(r,s)},mknod(r,s,l){var c=S.lookupPath(r,{parent:!0}),f=c.node,g=St.basename(r);if(!g)throw new S.ErrnoError(28);if(g==="."||g==="..")throw new S.ErrnoError(20);var M=S.mayCreate(f,g);if(M)throw new S.ErrnoError(M);if(!f.node_ops.mknod)throw new S.ErrnoError(63);return f.node_ops.mknod(f,g,s,l)},statfs(r){return S.statfsNode(S.lookupPath(r,{follow:!0}).node)},statfsStream(r){return S.statfsNode(r.node)},statfsNode(r){var s={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:S.nextInode,ffree:S.nextInode-1,fsid:42,flags:2,namelen:255};return r.node_ops.statfs&&Object.assign(s,r.node_ops.statfs(r.mount.opts.root)),s},create(r,s=438){return s&=4095,s|=32768,S.mknod(r,s,0)},mkdir(r,s=511){return s&=1023,s|=16384,S.mknod(r,s,0)},mkdirTree(r,s){var l=r.split("/"),c="";for(var f of l)if(f){(c||St.isAbs(r))&&(c+="/"),c+=f;try{S.mkdir(c,s)}catch(g){if(g.errno!=20)throw g}}},mkdev(r,s,l){return typeof l>"u"&&(l=s,s=438),s|=8192,S.mknod(r,s,l)},symlink(r,s){if(!ee.resolve(r))throw new S.ErrnoError(44);var l=S.lookupPath(s,{parent:!0}),c=l.node;if(!c)throw new S.ErrnoError(44);var f=St.basename(s),g=S.mayCreate(c,f);if(g)throw new S.ErrnoError(g);if(!c.node_ops.symlink)throw new S.ErrnoError(63);return c.node_ops.symlink(c,f,r)},rename(r,s){var l=St.dirname(r),c=St.dirname(s),f=St.basename(r),g=St.basename(s),M,w,L;if(M=S.lookupPath(r,{parent:!0}),w=M.node,M=S.lookupPath(s,{parent:!0}),L=M.node,!w||!L)throw new S.ErrnoError(44);if(w.mount!==L.mount)throw new S.ErrnoError(75);var W=S.lookupNode(w,f),Y=ee.relative(r,c);if(Y.charAt(0)!==".")throw new S.ErrnoError(28);if(Y=ee.relative(s,l),Y.charAt(0)!==".")throw new S.ErrnoError(55);var ae;try{ae=S.lookupNode(L,g)}catch{}if(W!==ae){var de=S.isDir(W.mode),ce=S.mayDelete(w,f,de);if(ce)throw new S.ErrnoError(ce);if(ce=ae?S.mayDelete(L,g,de):S.mayCreate(L,g),ce)throw new S.ErrnoError(ce);if(!w.node_ops.rename)throw new S.ErrnoError(63);if(S.isMountpoint(W)||ae&&S.isMountpoint(ae))throw new S.ErrnoError(10);if(L!==w&&(ce=S.nodePermissions(w,"w"),ce))throw new S.ErrnoError(ce);S.hashRemoveNode(W);try{w.node_ops.rename(W,L,g),W.parent=L}catch(ge){throw ge}finally{S.hashAddNode(W)}}},rmdir(r){var s=S.lookupPath(r,{parent:!0}),l=s.node,c=St.basename(r),f=S.lookupNode(l,c),g=S.mayDelete(l,c,!0);if(g)throw new S.ErrnoError(g);if(!l.node_ops.rmdir)throw new S.ErrnoError(63);if(S.isMountpoint(f))throw new S.ErrnoError(10);l.node_ops.rmdir(l,c),S.destroyNode(f)},readdir(r){var s=S.lookupPath(r,{follow:!0}),l=s.node,c=S.checkOpExists(l.node_ops.readdir,54);return c(l)},unlink(r){var s=S.lookupPath(r,{parent:!0}),l=s.node;if(!l)throw new S.ErrnoError(44);var c=St.basename(r),f=S.lookupNode(l,c),g=S.mayDelete(l,c,!1);if(g)throw new S.ErrnoError(g);if(!l.node_ops.unlink)throw new S.ErrnoError(63);if(S.isMountpoint(f))throw new S.ErrnoError(10);l.node_ops.unlink(l,c),S.destroyNode(f)},readlink(r){var s=S.lookupPath(r),l=s.node;if(!l)throw new S.ErrnoError(44);if(!l.node_ops.readlink)throw new S.ErrnoError(28);return l.node_ops.readlink(l)},stat(r,s){var l=S.lookupPath(r,{follow:!s}),c=l.node,f=S.checkOpExists(c.node_ops.getattr,63);return f(c)},fstat(r){var s=S.getStreamChecked(r),l=s.node,c=s.stream_ops.getattr,f=c?s:l;return c??(c=l.node_ops.getattr),S.checkOpExists(c,63),c(f)},lstat(r){return S.stat(r,!0)},doChmod(r,s,l,c){S.doSetAttr(r,s,{mode:l&4095|s.mode&-4096,ctime:Date.now(),dontFollow:c})},chmod(r,s,l){var c;if(typeof r=="string"){var f=S.lookupPath(r,{follow:!l});c=f.node}else c=r;S.doChmod(null,c,s,l)},lchmod(r,s){S.chmod(r,s,!0)},fchmod(r,s){var l=S.getStreamChecked(r);S.doChmod(l,l.node,s,!1)},doChown(r,s,l){S.doSetAttr(r,s,{timestamp:Date.now(),dontFollow:l})},chown(r,s,l,c){var f;if(typeof r=="string"){var g=S.lookupPath(r,{follow:!c});f=g.node}else f=r;S.doChown(null,f,c)},lchown(r,s,l){S.chown(r,s,l,!0)},fchown(r,s,l){var c=S.getStreamChecked(r);S.doChown(c,c.node,!1)},doTruncate(r,s,l){if(S.isDir(s.mode))throw new S.ErrnoError(31);if(!S.isFile(s.mode))throw new S.ErrnoError(28);var c=S.nodePermissions(s,"w");if(c)throw new S.ErrnoError(c);S.doSetAttr(r,s,{size:l,timestamp:Date.now()})},truncate(r,s){if(s<0)throw new S.ErrnoError(28);var l;if(typeof r=="string"){var c=S.lookupPath(r,{follow:!0});l=c.node}else l=r;S.doTruncate(null,l,s)},ftruncate(r,s){var l=S.getStreamChecked(r);if(s<0||!(l.flags&2097155))throw new S.ErrnoError(28);S.doTruncate(l,l.node,s)},utime(r,s,l){var c=S.lookupPath(r,{follow:!0}),f=c.node,g=S.checkOpExists(f.node_ops.setattr,63);g(f,{atime:s,mtime:l})},open(r,s,l=438){if(r==="")throw new S.ErrnoError(44);s=typeof s=="string"?Ke(s):s,s&64?l=l&4095|32768:l=0;var c,f;if(typeof r=="object")c=r;else{f=r.endsWith("/");var g=S.lookupPath(r,{follow:!(s&131072),noent_okay:!0});c=g.node,r=g.path}var M=!1;if(s&64)if(c){if(s&128)throw new S.ErrnoError(20)}else{if(f)throw new S.ErrnoError(31);c=S.mknod(r,l|511,0),M=!0}if(!c)throw new S.ErrnoError(44);if(S.isChrdev(c.mode)&&(s&=-513),s&65536&&!S.isDir(c.mode))throw new S.ErrnoError(54);if(!M){var w=S.mayOpen(c,s);if(w)throw new S.ErrnoError(w)}s&512&&!M&&S.truncate(c,0),s&=-131713;var L=S.createStream({node:c,path:S.getPath(c),flags:s,seekable:!0,position:0,stream_ops:c.stream_ops,ungotten:[],error:!1});return L.stream_ops.open&&L.stream_ops.open(L),M&&S.chmod(c,l&511),t.logReadFiles&&!(s&1)&&(r in S.readFiles||(S.readFiles[r]=1)),L},close(r){if(S.isClosed(r))throw new S.ErrnoError(8);r.getdents&&(r.getdents=null);try{r.stream_ops.close&&r.stream_ops.close(r)}catch(s){throw s}finally{S.closeStream(r.fd)}r.fd=null},isClosed(r){return r.fd===null},llseek(r,s,l){if(S.isClosed(r))throw new S.ErrnoError(8);if(!r.seekable||!r.stream_ops.llseek)throw new S.ErrnoError(70);if(l!=0&&l!=1&&l!=2)throw new S.ErrnoError(28);return r.position=r.stream_ops.llseek(r,s,l),r.ungotten=[],r.position},read(r,s,l,c,f){if(D(l>=0),c<0||f<0)throw new S.ErrnoError(28);if(S.isClosed(r))throw new S.ErrnoError(8);if((r.flags&2097155)===1)throw new S.ErrnoError(8);if(S.isDir(r.node.mode))throw new S.ErrnoError(31);if(!r.stream_ops.read)throw new S.ErrnoError(28);var g=typeof f<"u";if(!g)f=r.position;else if(!r.seekable)throw new S.ErrnoError(70);var M=r.stream_ops.read(r,s,l,c,f);return g||(r.position+=M),M},write(r,s,l,c,f,g){if(D(l>=0),c<0||f<0)throw new S.ErrnoError(28);if(S.isClosed(r))throw new S.ErrnoError(8);if(!(r.flags&2097155))throw new S.ErrnoError(8);if(S.isDir(r.node.mode))throw new S.ErrnoError(31);if(!r.stream_ops.write)throw new S.ErrnoError(28);r.seekable&&r.flags&1024&&S.llseek(r,0,2);var M=typeof f<"u";if(!M)f=r.position;else if(!r.seekable)throw new S.ErrnoError(70);var w=r.stream_ops.write(r,s,l,c,f,g);return M||(r.position+=w),w},mmap(r,s,l,c,f){if(c&2&&!(f&2)&&(r.flags&2097155)!==2)throw new S.ErrnoError(2);if((r.flags&2097155)===1)throw new S.ErrnoError(2);if(!r.stream_ops.mmap)throw new S.ErrnoError(43);if(!s)throw new S.ErrnoError(28);return r.stream_ops.mmap(r,s,l,c,f)},msync(r,s,l,c,f){return D(l>=0),r.stream_ops.msync?r.stream_ops.msync(r,s,l,c,f):0},ioctl(r,s,l){if(!r.stream_ops.ioctl)throw new S.ErrnoError(59);return r.stream_ops.ioctl(r,s,l)},readFile(r,s={}){if(s.flags=s.flags||0,s.encoding=s.encoding||"binary",s.encoding!=="utf8"&&s.encoding!=="binary")throw new Error(`Invalid encoding type "${s.encoding}"`);var l=S.open(r,s.flags),c=S.stat(r),f=c.size,g=new Uint8Array(f);return S.read(l,g,0,f,0),s.encoding==="utf8"&&(g=vt(g)),S.close(l),g},writeFile(r,s,l={}){l.flags=l.flags||577;var c=S.open(r,l.flags,l.mode);if(typeof s=="string"&&(s=new Uint8Array(Re(s))),ArrayBuffer.isView(s))S.write(c,s,0,s.byteLength,void 0,l.canOwn);else throw new Error("Unsupported data type");S.close(c)},cwd:()=>S.currentPath,chdir(r){var s=S.lookupPath(r,{follow:!0});if(s.node===null)throw new S.ErrnoError(44);if(!S.isDir(s.node.mode))throw new S.ErrnoError(54);var l=S.nodePermissions(s.node,"x");if(l)throw new S.ErrnoError(l);S.currentPath=s.path},createDefaultDirectories(){S.mkdir("/tmp"),S.mkdir("/home"),S.mkdir("/home/web_user")},createDefaultDevices(){S.mkdir("/dev"),S.registerDevice(S.makedev(1,3),{read:()=>0,write:(c,f,g,M,w)=>M,llseek:()=>0}),S.mkdev("/dev/null",S.makedev(1,3)),Pe.register(S.makedev(5,0),Pe.default_tty_ops),Pe.register(S.makedev(6,0),Pe.default_tty1_ops),S.mkdev("/dev/tty",S.makedev(5,0)),S.mkdev("/dev/tty1",S.makedev(6,0));var r=new Uint8Array(1024),s=0,l=()=>(s===0&&(X(r),s=r.byteLength),r[--s]);S.createDevice("/dev","random",l),S.createDevice("/dev","urandom",l),S.mkdir("/dev/shm"),S.mkdir("/dev/shm/tmp")},createSpecialDirectories(){S.mkdir("/proc");var r=S.mkdir("/proc/self");S.mkdir("/proc/self/fd"),S.mount({mount(){var s=S.createNode(r,"fd",16895,73);return s.stream_ops={llseek:Se.stream_ops.llseek},s.node_ops={lookup(l,c){var f=+c,g=S.getStreamChecked(f),M={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>g.path},id:f+1};return M.parent=M,M},readdir(){return Array.from(S.streams.entries()).filter(([l,c])=>c).map(([l,c])=>l.toString())}},s}},{},"/proc/self/fd")},createStandardStreams(r,s,l){r?S.createDevice("/dev","stdin",r):S.symlink("/dev/tty","/dev/stdin"),s?S.createDevice("/dev","stdout",null,s):S.symlink("/dev/tty","/dev/stdout"),l?S.createDevice("/dev","stderr",null,l):S.symlink("/dev/tty1","/dev/stderr");var c=S.open("/dev/stdin",0),f=S.open("/dev/stdout",1),g=S.open("/dev/stderr",1);D(c.fd===0,`invalid handle for stdin (${c.fd})`),D(f.fd===1,`invalid handle for stdout (${f.fd})`),D(g.fd===2,`invalid handle for stderr (${g.fd})`)},staticInit(){S.nameTable=new Array(4096),S.mount(Se,{},"/"),S.createDefaultDirectories(),S.createDefaultDevices(),S.createSpecialDirectories(),S.filesystems={MEMFS:Se}},init(r,s,l){D(!S.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),S.initialized=!0,r??(r=t.stdin),s??(s=t.stdout),l??(l=t.stderr),S.createStandardStreams(r,s,l)},quit(){S.initialized=!1,ua(0);for(var r of S.streams)r&&S.close(r)},findObject(r,s){var l=S.analyzePath(r,s);return l.exists?l.object:null},analyzePath(r,s){try{var l=S.lookupPath(r,{follow:!s});r=l.path}catch{}var c={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var l=S.lookupPath(r,{parent:!0});c.parentExists=!0,c.parentPath=l.path,c.parentObject=l.node,c.name=St.basename(r),l=S.lookupPath(r,{follow:!s}),c.exists=!0,c.path=l.path,c.object=l.node,c.name=l.node.name,c.isRoot=l.path==="/"}catch(f){c.error=f.errno}return c},createPath(r,s,l,c){r=typeof r=="string"?r:S.getPath(r);for(var f=s.split("/").reverse();f.length;){var g=f.pop();if(g){var M=St.join2(r,g);try{S.mkdir(M)}catch(w){if(w.errno!=20)throw w}r=M}}return M},createFile(r,s,l,c,f){var g=St.join2(typeof r=="string"?r:S.getPath(r),s),M=Dt(c,f);return S.create(g,M)},createDataFile(r,s,l,c,f,g){var M=s;r&&(r=typeof r=="string"?r:S.getPath(r),M=s?St.join2(r,s):r);var w=Dt(c,f),L=S.create(M,w);if(l){if(typeof l=="string"){for(var W=new Array(l.length),Y=0,ae=l.length;Y<ae;++Y)W[Y]=l.charCodeAt(Y);l=W}S.chmod(L,w|146);var de=S.open(L,577);S.write(de,l,0,l.length,0,g),S.close(de),S.chmod(L,w)}},createDevice(r,s,l,c){var w;var f=St.join2(typeof r=="string"?r:S.getPath(r),s),g=Dt(!!l,!!c);(w=S.createDevice).major??(w.major=64);var M=S.makedev(S.createDevice.major++,0);return S.registerDevice(M,{open(L){L.seekable=!1},close(L){var W;(W=c==null?void 0:c.buffer)!=null&&W.length&&c(10)},read(L,W,Y,ae,de){for(var ce=0,ge=0;ge<ae;ge++){var Xe;try{Xe=l()}catch{throw new S.ErrnoError(29)}if(Xe===void 0&&ce===0)throw new S.ErrnoError(6);if(Xe==null)break;ce++,W[Y+ge]=Xe}return ce&&(L.node.atime=Date.now()),ce},write(L,W,Y,ae,de){for(var ce=0;ce<ae;ce++)try{c(W[Y+ce])}catch{throw new S.ErrnoError(29)}return ae&&(L.node.mtime=L.node.ctime=Date.now()),ce}}),S.mkdev(f,g,M)},forceLoadFile(r){if(r.isDevice||r.isFolder||r.link||r.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{r.contents=A(r.url),r.usedBytes=r.contents.length}catch{throw new S.ErrnoError(29)}},createLazyFile(r,s,l,c,f){class g{constructor(){Tn(this,"lengthKnown",!1);Tn(this,"chunks",[])}get(ce){if(!(ce>this.length-1||ce<0)){var ge=ce%this.chunkSize,Xe=ce/this.chunkSize|0;return this.getter(Xe)[ge]}}setDataGetter(ce){this.getter=ce}cacheLength(){var ce=new XMLHttpRequest;if(ce.open("HEAD",l,!1),ce.send(null),!(ce.status>=200&&ce.status<300||ce.status===304))throw new Error("Couldn't load "+l+". Status: "+ce.status);var ge=Number(ce.getResponseHeader("Content-length")),Xe,ct=(Xe=ce.getResponseHeader("Accept-Ranges"))&&Xe==="bytes",ut=(Xe=ce.getResponseHeader("Content-Encoding"))&&Xe==="gzip",Ft=1024*1024;ct||(Ft=ge);var xt=(Gt,tn)=>{if(Gt>tn)throw new Error("invalid range ("+Gt+", "+tn+") or no bytes requested!");if(tn>ge-1)throw new Error("only "+ge+" bytes available! programmer error!");var Lt=new XMLHttpRequest;if(Lt.open("GET",l,!1),ge!==Ft&&Lt.setRequestHeader("Range","bytes="+Gt+"-"+tn),Lt.responseType="arraybuffer",Lt.overrideMimeType&&Lt.overrideMimeType("text/plain; charset=x-user-defined"),Lt.send(null),!(Lt.status>=200&&Lt.status<300||Lt.status===304))throw new Error("Couldn't load "+l+". Status: "+Lt.status);return Lt.response!==void 0?new Uint8Array(Lt.response||[]):Re(Lt.responseText||"")},Jt=this;Jt.setDataGetter(Gt=>{var tn=Gt*Ft,Lt=(Gt+1)*Ft-1;if(Lt=Math.min(Lt,ge-1),typeof Jt.chunks[Gt]>"u"&&(Jt.chunks[Gt]=xt(tn,Lt)),typeof Jt.chunks[Gt]>"u")throw new Error("doXHR failed!");return Jt.chunks[Gt]}),(ut||!ge)&&(Ft=ge=1,ge=this.getter(0).length,Ft=ge,O("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=ge,this._chunkSize=Ft,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!a)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var M=new g,w={isDevice:!1,contents:M}}else var w={isDevice:!1,url:l};var L=S.createFile(r,s,w,c,f);w.contents?L.contents=w.contents:w.url&&(L.contents=null,L.url=w.url),Object.defineProperties(L,{usedBytes:{get:function(){return this.contents.length}}});var W={},Y=Object.keys(L.stream_ops);Y.forEach(de=>{var ce=L.stream_ops[de];W[de]=(...ge)=>(S.forceLoadFile(L),ce(...ge))});function ae(de,ce,ge,Xe,ct){var ut=de.node.contents;if(ct>=ut.length)return 0;var Ft=Math.min(ut.length-ct,Xe);if(D(Ft>=0),ut.slice)for(var xt=0;xt<Ft;xt++)ce[ge+xt]=ut[ct+xt];else for(var xt=0;xt<Ft;xt++)ce[ge+xt]=ut.get(ct+xt);return Ft}return W.read=(de,ce,ge,Xe,ct)=>(S.forceLoadFile(L),ae(de,ce,ge,Xe,ct)),W.mmap=(de,ce,ge,Xe,ct)=>{S.forceLoadFile(L);var ut=Je();if(!ut)throw new S.ErrnoError(48);return ae(de,tt,ut,ce,ge),{ptr:ut,allocated:!0}},L.stream_ops=W,L},absolutePath(){j("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder(){j("FS.createFolder has been removed; use FS.mkdir instead")},createLink(){j("FS.createLink has been removed; use FS.symlink instead")},joinPath(){j("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc(){j("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath(){j("FS.standardizePath has been removed; use PATH.normalize instead")}},dt={DEFAULT_POLLMASK:5,calculateAt(r,s,l){if(St.isAbs(s))return s;var c;if(r===-100)c=S.cwd();else{var f=dt.getStreamFromFD(r);c=f.path}if(s.length==0){if(!l)throw new S.ErrnoError(44);return c}return c+"/"+s},writeStat(r,s){te[r>>2]=s.dev,te[r+4>>2]=s.mode,pe[r+8>>2]=s.nlink,te[r+12>>2]=s.uid,te[r+16>>2]=s.gid,te[r+20>>2]=s.rdev,je[r+24>>3]=BigInt(s.size),te[r+32>>2]=4096,te[r+36>>2]=s.blocks;var l=s.atime.getTime(),c=s.mtime.getTime(),f=s.ctime.getTime();return je[r+40>>3]=BigInt(Math.floor(l/1e3)),pe[r+48>>2]=l%1e3*1e3*1e3,je[r+56>>3]=BigInt(Math.floor(c/1e3)),pe[r+64>>2]=c%1e3*1e3*1e3,je[r+72>>3]=BigInt(Math.floor(f/1e3)),pe[r+80>>2]=f%1e3*1e3*1e3,je[r+88>>3]=BigInt(s.ino),0},writeStatFs(r,s){te[r+4>>2]=s.bsize,te[r+40>>2]=s.bsize,te[r+8>>2]=s.blocks,te[r+12>>2]=s.bfree,te[r+16>>2]=s.bavail,te[r+20>>2]=s.files,te[r+24>>2]=s.ffree,te[r+28>>2]=s.fsid,te[r+44>>2]=s.flags,te[r+36>>2]=s.namelen},doMsync(r,s,l,c,f){if(!S.isFile(s.node.mode))throw new S.ErrnoError(43);if(c&2)return 0;var g=fe.slice(r,r+l);S.msync(s,g,f,l,c)},getStreamFromFD(r){var s=S.getStreamChecked(r);return s},varargs:void 0,getStr(r){var s=lt(r);return s}};function xi(r,s,l){try{var c=dt.getStreamFromFD(r);if(D(!l),c.fd===s)return-28;if(s<0||s>=S.MAX_OPEN_FDS)return-8;var f=S.getStream(s);return f&&S.close(f),S.dupStream(c,s).fd}catch(g){if(typeof S>"u"||g.name!=="ErrnoError")throw g;return-g.errno}}var At=()=>{D(dt.varargs!=null);var r=te[+dt.varargs>>2];return dt.varargs+=4,r},Ht=At;function sn(r,s,l){dt.varargs=l;try{var c=dt.getStreamFromFD(r);switch(s){case 0:{var f=At();if(f<0)return-28;for(;S.streams[f];)f++;var g;return g=S.dupStream(c,f),g.fd}case 1:case 2:return 0;case 3:return c.flags;case 4:{var f=At();return c.flags|=f,0}case 12:{var f=Ht(),M=0;return Z[f+M>>1]=2,0}case 13:case 14:return 0}return-28}catch(w){if(typeof S>"u"||w.name!=="ErrnoError")throw w;return-w.errno}}function Yt(r,s){try{return dt.writeStat(s,S.fstat(r))}catch(l){if(typeof S>"u"||l.name!=="ErrnoError")throw l;return-l.errno}}function Zt(r,s,l){dt.varargs=l;try{var c=dt.getStreamFromFD(r);switch(s){case 21509:return c.tty?0:-59;case 21505:{if(!c.tty)return-59;if(c.tty.ops.ioctl_tcgets){var f=c.tty.ops.ioctl_tcgets(c),g=Ht();te[g>>2]=f.c_iflag||0,te[g+4>>2]=f.c_oflag||0,te[g+8>>2]=f.c_cflag||0,te[g+12>>2]=f.c_lflag||0;for(var M=0;M<32;M++)tt[g+M+17]=f.c_cc[M]||0;return 0}return 0}case 21510:case 21511:case 21512:return c.tty?0:-59;case 21506:case 21507:case 21508:{if(!c.tty)return-59;if(c.tty.ops.ioctl_tcsets){for(var g=Ht(),w=te[g>>2],L=te[g+4>>2],W=te[g+8>>2],Y=te[g+12>>2],ae=[],M=0;M<32;M++)ae.push(tt[g+M+17]);return c.tty.ops.ioctl_tcsets(c.tty,s,{c_iflag:w,c_oflag:L,c_cflag:W,c_lflag:Y,c_cc:ae})}return 0}case 21519:{if(!c.tty)return-59;var g=Ht();return te[g>>2]=0,0}case 21520:return c.tty?-28:-59;case 21531:{var g=Ht();return S.ioctl(c,s,g)}case 21523:{if(!c.tty)return-59;if(c.tty.ops.ioctl_tiocgwinsz){var de=c.tty.ops.ioctl_tiocgwinsz(c.tty),g=Ht();Z[g>>1]=de[0],Z[g+2>>1]=de[1]}return 0}case 21524:return c.tty?0:-59;case 21515:return c.tty?0:-59;default:return-28}}catch(ce){if(typeof S>"u"||ce.name!=="ErrnoError")throw ce;return-ce.errno}}function vr(r,s){try{return r=dt.getStr(r),dt.writeStat(s,S.lstat(r))}catch(l){if(typeof S>"u"||l.name!=="ErrnoError")throw l;return-l.errno}}function $n(r,s,l,c){try{s=dt.getStr(s);var f=c&256,g=c&4096;return c=c&-6401,D(!c,`unknown flags in __syscall_newfstatat: ${c}`),s=dt.calculateAt(r,s,g),dt.writeStat(l,f?S.lstat(s):S.stat(s))}catch(M){if(typeof S>"u"||M.name!=="ErrnoError")throw M;return-M.errno}}function Wu(r,s,l,c){dt.varargs=c;try{s=dt.getStr(s),s=dt.calculateAt(r,s);var f=c?At():0;return S.open(s,l,f).fd}catch(g){if(typeof S>"u"||g.name!=="ErrnoError")throw g;return-g.errno}}function Xu(r,s){try{return r=dt.getStr(r),dt.writeStat(s,S.stat(r))}catch(l){if(typeof S>"u"||l.name!=="ErrnoError")throw l;return-l.errno}}var $u=()=>j("native code called abort()"),Vt=r=>{for(var s="";;){var l=fe[r++];if(!l)return s;s+=String.fromCharCode(l)}},Vi={},Ei={},qr={},xr=class extends Error{constructor(s){super(s),this.name="BindingError"}},_t=r=>{throw new xr(r)};function ju(r,s,l={}){var c=s.name;if(r||_t(`type "${c}" must have a positive integer typeid pointer`),Ei.hasOwnProperty(r)){if(l.ignoreDuplicateRegistrations)return;_t(`Cannot register type '${c}' twice`)}if(Ei[r]=s,delete qr[r],Vi.hasOwnProperty(r)){var f=Vi[r];delete Vi[r],f.forEach(g=>g())}}function _n(r,s,l={}){if(s.argPackAdvance===void 0)throw new TypeError("registerType registeredInstance requires argPackAdvance");return ju(r,s,l)}var al=(r,s,l)=>{switch(s){case 1:return l?c=>tt[c]:c=>fe[c];case 2:return l?c=>Z[c>>1]:c=>ne[c>>1];case 4:return l?c=>te[c>>2]:c=>pe[c>>2];case 8:return l?c=>je[c>>3]:c=>N[c>>3];default:throw new TypeError(`invalid integer width (${s}): ${r}`)}},yi=r=>{if(r===null)return"null";var s=typeof r;return s==="object"||s==="array"||s==="function"?r.toString():""+r},ol=(r,s,l,c)=>{if(s<l||s>c)throw new TypeError(`Passing a number "${yi(s)}" from JS side to C/C++ side to an argument of type "${r}", which is outside the valid range [${l}, ${c}]!`)},qu=(r,s,l,c,f)=>{s=Vt(s);const g=c===0n;let M=w=>w;if(g){const w=l*8;M=L=>BigInt.asUintN(w,L),f=M(f)}_n(r,{name:s,fromWireType:M,toWireType:(w,L)=>{if(typeof L=="number")L=BigInt(L);else if(typeof L!="bigint")throw new TypeError(`Cannot convert "${yi(L)}" to ${this.name}`);return ol(s,L,c,f),L},argPackAdvance:In,readValueFromPointer:al(s,l,!g),destructorFunction:null})},In=8,Yu=(r,s,l,c)=>{s=Vt(s),_n(r,{name:s,fromWireType:function(f){return!!f},toWireType:function(f,g){return g?l:c},argPackAdvance:In,readValueFromPointer:function(f){return this.fromWireType(fe[f])},destructorFunction:null})},Ku=r=>({count:r.count,deleteScheduled:r.deleteScheduled,preservePointerOnDelete:r.preservePointerOnDelete,ptr:r.ptr,ptrType:r.ptrType,smartPtr:r.smartPtr,smartPtrType:r.smartPtrType}),ea=r=>{function s(l){return l.$$.ptrType.registeredClass.name}_t(s(r)+" instance already deleted")},ta=!1,ll=r=>{},Zu=r=>{r.smartPtr?r.smartPtrType.rawDestructor(r.smartPtr):r.ptrType.registeredClass.rawDestructor(r.ptr)},cl=r=>{r.count.value-=1;var s=r.count.value===0;s&&Zu(r)},ul=(r,s,l)=>{if(s===l)return r;if(l.baseClass===void 0)return null;var c=ul(r,s,l.baseClass);return c===null?null:l.downcast(c)},hl={},Ju={},Qu=(r,s)=>{for(s===void 0&&_t("ptr should not be undefined");r.baseClass;)s=r.upcast(s),r=r.baseClass;return s},eh=(r,s)=>(s=Qu(r,s),Ju[s]),th=class extends Error{constructor(s){super(s),this.name="InternalError"}},Yr=r=>{throw new th(r)},Kr=(r,s)=>{(!s.ptrType||!s.ptr)&&Yr("makeClassHandle requires ptr and ptrType");var l=!!s.smartPtrType,c=!!s.smartPtr;return l!==c&&Yr("Both smartPtrType and smartPtr must be specified"),s.count={value:1},Er(Object.create(r,{$$:{value:s,writable:!0}}))};function fl(r){var s=this.getPointee(r);if(!s)return this.destructor(r),null;var l=eh(this.registeredClass,s);if(l!==void 0){if(l.$$.count.value===0)return l.$$.ptr=s,l.$$.smartPtr=r,l.clone();var c=l.clone();return this.destructor(r),c}function f(){return this.isSmartPointer?Kr(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:s,smartPtrType:this,smartPtr:r}):Kr(this.registeredClass.instancePrototype,{ptrType:this,ptr:r})}var g=this.registeredClass.getActualType(s),M=hl[g];if(!M)return f.call(this);var w;this.isConst?w=M.constPointerType:w=M.pointerType;var L=ul(s,this.registeredClass,w.registeredClass);return L===null?f.call(this):this.isSmartPointer?Kr(w.registeredClass.instancePrototype,{ptrType:w,ptr:L,smartPtrType:this,smartPtr:r}):Kr(w.registeredClass.instancePrototype,{ptrType:w,ptr:L})}var Er=r=>typeof FinalizationRegistry>"u"?(Er=s=>s,r):(ta=new FinalizationRegistry(s=>{console.warn(s.leakWarning),cl(s.$$)}),Er=s=>{var l=s.$$,c=!!l.smartPtr;if(c){var f={$$:l},g=l.ptrType.registeredClass,M=new Error(`Embind found a leaked C++ instance ${g.name} <${Ue(l.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);"captureStackTrace"in Error&&Error.captureStackTrace(M,fl),f.leakWarning=M.stack.replace(/^Error: /,""),ta.register(s,f,s)}return s},ll=s=>ta.unregister(s),Er(r)),nh=()=>{let r=Zr.prototype;Object.assign(r,{isAliasOf(l){if(!(this instanceof Zr)||!(l instanceof Zr))return!1;var c=this.$$.ptrType.registeredClass,f=this.$$.ptr;l.$$=l.$$;for(var g=l.$$.ptrType.registeredClass,M=l.$$.ptr;c.baseClass;)f=c.upcast(f),c=c.baseClass;for(;g.baseClass;)M=g.upcast(M),g=g.baseClass;return c===g&&f===M},clone(){if(this.$$.ptr||ea(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var l=Er(Object.create(Object.getPrototypeOf(this),{$$:{value:Ku(this.$$)}}));return l.$$.count.value+=1,l.$$.deleteScheduled=!1,l},delete(){this.$$.ptr||ea(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&_t("Object already scheduled for deletion"),ll(this),cl(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||ea(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&_t("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const s=Symbol.dispose;s&&(r[s]=r.delete)};function Zr(){}var Jr=(r,s)=>Object.defineProperty(s,"name",{value:r}),na=(r,s,l)=>{if(r[s].overloadTable===void 0){var c=r[s];r[s]=function(...f){return r[s].overloadTable.hasOwnProperty(f.length)||_t(`Function '${l}' called with an invalid number of arguments (${f.length}) - expects one of (${r[s].overloadTable})!`),r[s].overloadTable[f.length].apply(this,f)},r[s].overloadTable=[],r[s].overloadTable[c.argCount]=c}},ia=(r,s,l)=>{t.hasOwnProperty(r)?((l===void 0||t[r].overloadTable!==void 0&&t[r].overloadTable[l]!==void 0)&&_t(`Cannot register public name '${r}' twice`),na(t,r,r),t[r].overloadTable.hasOwnProperty(l)&&_t(`Cannot register multiple overloads of a function with the same number of arguments (${l})!`),t[r].overloadTable[l]=s):(t[r]=s,t[r].argCount=l)},ih=48,rh=57,sh=r=>{D(typeof r=="string"),r=r.replace(/[^a-zA-Z0-9_]/g,"$");var s=r.charCodeAt(0);return s>=ih&&s<=rh?`_${r}`:r};function ah(r,s,l,c,f,g,M,w){this.name=r,this.constructor=s,this.instancePrototype=l,this.rawDestructor=c,this.baseClass=f,this.getActualType=g,this.upcast=M,this.downcast=w,this.pureVirtualFunctions=[]}var Qr=(r,s,l)=>{for(;s!==l;)s.upcast||_t(`Expected null or instance of ${l.name}, got an instance of ${s.name}`),r=s.upcast(r),s=s.baseClass;return r};function oh(r,s){if(s===null)return this.isReference&&_t(`null is not a valid ${this.name}`),0;s.$$||_t(`Cannot pass "${yi(s)}" as a ${this.name}`),s.$$.ptr||_t(`Cannot pass deleted object as a pointer of type ${this.name}`);var l=s.$$.ptrType.registeredClass,c=Qr(s.$$.ptr,l,this.registeredClass);return c}function lh(r,s){var l;if(s===null)return this.isReference&&_t(`null is not a valid ${this.name}`),this.isSmartPointer?(l=this.rawConstructor(),r!==null&&r.push(this.rawDestructor,l),l):0;(!s||!s.$$)&&_t(`Cannot pass "${yi(s)}" as a ${this.name}`),s.$$.ptr||_t(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&s.$$.ptrType.isConst&&_t(`Cannot convert argument of type ${s.$$.smartPtrType?s.$$.smartPtrType.name:s.$$.ptrType.name} to parameter type ${this.name}`);var c=s.$$.ptrType.registeredClass;if(l=Qr(s.$$.ptr,c,this.registeredClass),this.isSmartPointer)switch(s.$$.smartPtr===void 0&&_t("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:s.$$.smartPtrType===this?l=s.$$.smartPtr:_t(`Cannot convert argument of type ${s.$$.smartPtrType?s.$$.smartPtrType.name:s.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:l=s.$$.smartPtr;break;case 2:if(s.$$.smartPtrType===this)l=s.$$.smartPtr;else{var f=s.clone();l=this.rawShare(l,Bt.toHandle(()=>f.delete())),r!==null&&r.push(this.rawDestructor,l)}break;default:_t("Unsupporting sharing policy")}return l}function ch(r,s){if(s===null)return this.isReference&&_t(`null is not a valid ${this.name}`),0;s.$$||_t(`Cannot pass "${yi(s)}" as a ${this.name}`),s.$$.ptr||_t(`Cannot pass deleted object as a pointer of type ${this.name}`),s.$$.ptrType.isConst&&_t(`Cannot convert argument of type ${s.$$.ptrType.name} to parameter type ${this.name}`);var l=s.$$.ptrType.registeredClass,c=Qr(s.$$.ptr,l,this.registeredClass);return c}function es(r){return this.fromWireType(pe[r>>2])}var uh=()=>{Object.assign(ts.prototype,{getPointee(r){return this.rawGetPointee&&(r=this.rawGetPointee(r)),r},destructor(r){var s;(s=this.rawDestructor)==null||s.call(this,r)},argPackAdvance:In,readValueFromPointer:es,fromWireType:fl})};function ts(r,s,l,c,f,g,M,w,L,W,Y){this.name=r,this.registeredClass=s,this.isReference=l,this.isConst=c,this.isSmartPointer=f,this.pointeeType=g,this.sharingPolicy=M,this.rawGetPointee=w,this.rawConstructor=L,this.rawShare=W,this.rawDestructor=Y,!f&&s.baseClass===void 0?c?(this.toWireType=oh,this.destructorFunction=null):(this.toWireType=ch,this.destructorFunction=null):this.toWireType=lh}var dl=(r,s,l)=>{t.hasOwnProperty(r)||Yr("Replacing nonexistent public symbol"),t[r].overloadTable!==void 0&&l!==void 0?t[r].overloadTable[l]=s:(t[r]=s,t[r].argCount=l)},pl=[],ns,ve=r=>{var s=pl[r];return s||(pl[r]=s=ns.get(r)),D(ns.get(r)==s,"JavaScript-side Wasm function table mirror is out of date!"),s},Un=(r,s,l=!1)=>{D(!l,"Async bindings are only supported with JSPI."),r=Vt(r);function c(){var g=ve(s);return g}var f=c();return typeof f!="function"&&_t(`unknown function pointer with signature ${r}: ${s}`),f};class hh extends Error{}var ml=r=>{var s=Il(r),l=Vt(s);return On(s),l},Si=(r,s)=>{var l=[],c={};function f(g){if(!c[g]&&!Ei[g]){if(qr[g]){qr[g].forEach(f);return}l.push(g),c[g]=!0}}throw s.forEach(f),new hh(`${r}: `+l.map(ml).join([", "]))},Mn=(r,s,l)=>{r.forEach(w=>qr[w]=s);function c(w){var L=l(w);L.length!==r.length&&Yr("Mismatched type converter count");for(var W=0;W<r.length;++W)_n(r[W],L[W])}var f=new Array(s.length),g=[],M=0;s.forEach((w,L)=>{Ei.hasOwnProperty(w)?f[L]=Ei[w]:(g.push(w),Vi.hasOwnProperty(w)||(Vi[w]=[]),Vi[w].push(()=>{f[L]=Ei[w],++M,M===g.length&&c(f)}))}),g.length===0&&c(f)},fh=(r,s,l,c,f,g,M,w,L,W,Y,ae,de)=>{Y=Vt(Y),g=Un(f,g),w&&(w=Un(M,w)),W&&(W=Un(L,W)),de=Un(ae,de);var ce=sh(Y);ia(ce,function(){Si(`Cannot construct ${Y} due to unbound types`,[c])}),Mn([r,s,l],c?[c]:[],ge=>{var Lt;ge=ge[0];var Xe,ct;c?(Xe=ge.registeredClass,ct=Xe.instancePrototype):ct=Zr.prototype;var ut=Jr(Y,function(...ti){if(Object.getPrototypeOf(this)!==Ft)throw new xr(`Use 'new' to construct ${Y}`);if(xt.constructor_body===void 0)throw new xr(`${Y} has no accessible constructor`);var cs=xt.constructor_body[ti.length];if(cs===void 0)throw new xr(`Tried to invoke ctor of ${Y} with invalid number of parameters (${ti.length}) - expected (${Object.keys(xt.constructor_body).toString()}) parameters instead!`);return cs.apply(this,ti)}),Ft=Object.create(ct,{constructor:{value:ut}});ut.prototype=Ft;var xt=new ah(Y,ut,Ft,de,Xe,g,w,W);xt.baseClass&&((Lt=xt.baseClass).__derivedClasses??(Lt.__derivedClasses=[]),xt.baseClass.__derivedClasses.push(xt));var Jt=new ts(Y,xt,!0,!1,!1),Gt=new ts(Y+"*",xt,!1,!1,!1),tn=new ts(Y+" const*",xt,!1,!0,!1);return hl[r]={pointerType:Gt,constPointerType:tn},dl(ce,ut),[Jt,Gt,tn]})},ra=r=>{for(;r.length;){var s=r.pop(),l=r.pop();l(s)}};function _l(r){for(var s=1;s<r.length;++s)if(r[s]!==null&&r[s].destructorFunction===void 0)return!0;return!1}function dh(r,s,l,c,f){if(r<s||r>l){var g=s==l?s:`${s} to ${l}`;f(`function ${c} called with ${r} arguments, expected ${g}`)}}function ph(r,s,l,c){var f=_l(r),g=r.length-2,M=[],w=["fn"];s&&w.push("thisWired");for(var L=0;L<g;++L)M.push(`arg${L}`),w.push(`arg${L}Wired`);M=M.join(","),w=w.join(",");var W=`return function (${M}) {
`;W+=`checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`,f&&(W+=`var destructors = [];
`);var Y=f?"destructors":"null",ae=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];s&&(W+=`var thisWired = classParam['toWireType'](${Y}, this);
`);for(var L=0;L<g;++L)W+=`var arg${L}Wired = argType${L}['toWireType'](${Y}, arg${L});
`,ae.push(`argType${L}`);if(W+=(l||c?"var rv = ":"")+`invoker(${w});
`,f)W+=`runDestructors(destructors);
`;else for(var L=s?1:2;L<r.length;++L){var de=L===1?"thisWired":"arg"+(L-2)+"Wired";r[L].destructorFunction!==null&&(W+=`${de}_dtor(${de});
`,ae.push(`${de}_dtor`))}return l&&(W+=`var ret = retType['fromWireType'](rv);
return ret;
`),W+=`}
`,ae.push("checkArgCount","minArgs","maxArgs"),W=`if (arguments.length !== ${ae.length}){ throw new Error(humanName + "Expected ${ae.length} closure arguments " + arguments.length + " given."); }
${W}`,[ae,W]}function mh(r){for(var s=r.length-2,l=r.length-1;l>=2&&r[l].optional;--l)s--;return s}function is(r,s,l,c,f,g){var M=s.length;M<2&&_t("argTypes array size mismatch! Must at least get return value and 'this' types!"),D(!g,"Async bindings are only supported with JSPI.");for(var w=s[1]!==null&&l!==null,L=_l(s),W=s[0].name!=="void",Y=M-2,ae=mh(s),de=[r,_t,c,f,ra,s[0],s[1]],ce=0;ce<M-2;++ce)de.push(s[ce+2]);if(!L)for(var ce=w?1:2;ce<s.length;++ce)s[ce].destructorFunction!==null&&de.push(s[ce].destructorFunction);de.push(dh,ae,Y);let[ge,Xe]=ph(s,w,W,g);var ct=new Function(...ge,Xe)(...de);return Jr(r,ct)}var rs=(r,s)=>{for(var l=[],c=0;c<r;c++)l.push(pe[s+c*4>>2]);return l},sa=r=>{r=r.trim();const s=r.indexOf("(");return s===-1?r:(D(r.endsWith(")"),"Parentheses for argument names should match."),r.slice(0,s))},_h=(r,s,l,c,f,g,M,w,L)=>{var W=rs(l,c);s=Vt(s),s=sa(s),g=Un(f,g,w),Mn([],[r],Y=>{Y=Y[0];var ae=`${Y.name}.${s}`;function de(){Si(`Cannot call ${ae} due to unbound types`,W)}s.startsWith("@@")&&(s=Symbol[s.substring(2)]);var ce=Y.registeredClass.constructor;return ce[s]===void 0?(de.argCount=l-1,ce[s]=de):(na(ce,s,ae),ce[s].overloadTable[l-1]=de),Mn([],W,ge=>{var Xe=[ge[0],null].concat(ge.slice(1)),ct=is(ae,Xe,null,g,M,w);if(ce[s].overloadTable===void 0?(ct.argCount=l-1,ce[s]=ct):ce[s].overloadTable[l-1]=ct,Y.registeredClass.__derivedClasses)for(const ut of Y.registeredClass.__derivedClasses)ut.constructor.hasOwnProperty(s)||(ut.constructor[s]=ct);return[]}),[]})},gh=(r,s,l,c,f,g)=>{D(s>0);var M=rs(s,l);f=Un(c,f),Mn([],[r],w=>{w=w[0];var L=`constructor ${w.name}`;if(w.registeredClass.constructor_body===void 0&&(w.registeredClass.constructor_body=[]),w.registeredClass.constructor_body[s-1]!==void 0)throw new xr(`Cannot register multiple constructors with identical number of parameters (${s-1}) for class '${w.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return w.registeredClass.constructor_body[s-1]=()=>{Si(`Cannot construct ${w.name} due to unbound types`,M)},Mn([],M,W=>(W.splice(1,0,null),w.registeredClass.constructor_body[s-1]=is(L,W,null,f,g),[])),[]})},vh=(r,s,l,c,f,g,M,w,L,W)=>{var Y=rs(l,c);s=Vt(s),s=sa(s),g=Un(f,g,L),Mn([],[r],ae=>{ae=ae[0];var de=`${ae.name}.${s}`;s.startsWith("@@")&&(s=Symbol[s.substring(2)]),w&&ae.registeredClass.pureVirtualFunctions.push(s);function ce(){Si(`Cannot call ${de} due to unbound types`,Y)}var ge=ae.registeredClass.instancePrototype,Xe=ge[s];return Xe===void 0||Xe.overloadTable===void 0&&Xe.className!==ae.name&&Xe.argCount===l-2?(ce.argCount=l-2,ce.className=ae.name,ge[s]=ce):(na(ge,s,de),ge[s].overloadTable[l-2]=ce),Mn([],Y,ct=>{var ut=is(de,ct,ae,g,M,L);return ge[s].overloadTable===void 0?(ut.argCount=l-2,ge[s]=ut):ge[s].overloadTable[l-2]=ut,[]}),[]})},gl=(r,s,l)=>(r instanceof Object||_t(`${l} with invalid "this": ${r}`),r instanceof s.registeredClass.constructor||_t(`${l} incompatible with "this" of type ${r.constructor.name}`),r.$$.ptr||_t(`cannot call emscripten binding method ${l} on deleted object`),Qr(r.$$.ptr,r.$$.ptrType.registeredClass,s.registeredClass)),xh=(r,s,l,c,f,g,M,w,L,W)=>{s=Vt(s),f=Un(c,f),Mn([],[r],Y=>{Y=Y[0];var ae=`${Y.name}.${s}`,de={get(){Si(`Cannot access ${ae} due to unbound types`,[l,M])},enumerable:!0,configurable:!0};return L?de.set=()=>Si(`Cannot access ${ae} due to unbound types`,[l,M]):de.set=ce=>_t(ae+" is a read-only property"),Object.defineProperty(Y.registeredClass.instancePrototype,s,de),Mn([],L?[l,M]:[l],ce=>{var ge=ce[0],Xe={get(){var ut=gl(this,Y,ae+" getter");return ge.fromWireType(f(g,ut))},enumerable:!0};if(L){L=Un(w,L);var ct=ce[1];Xe.set=function(ut){var Ft=gl(this,Y,ae+" setter"),xt=[];L(W,Ft,ct.toWireType(xt,ut)),ra(xt)}}return Object.defineProperty(Y.registeredClass.instancePrototype,s,Xe),[]}),[]})},Eh=(r,s,l)=>{r=Vt(r),Mn([],[s],c=>(c=c[0],t[r]=c.fromWireType(l),[]))},vl=[],Nn=[0,1,,1,null,1,!0,1,!1,1],aa=r=>{r>9&&--Nn[r+1]===0&&(D(Nn[r]!==void 0,"Decref for unallocated handle."),Nn[r]=void 0,vl.push(r))},Bt={toValue:r=>(r||_t(`Cannot use deleted val. handle = ${r}`),D(r===2||Nn[r]!==void 0&&r%2===0,`invalid handle: ${r}`),Nn[r]),toHandle:r=>{switch(r){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const s=vl.pop()||Nn.length;return Nn[s]=r,Nn[s+1]=1,s}}}},xl={name:"emscripten::val",fromWireType:r=>{var s=Bt.toValue(r);return aa(r),s},toWireType:(r,s)=>Bt.toHandle(s),argPackAdvance:In,readValueFromPointer:es,destructorFunction:null},El=r=>_n(r,xl),yh=(r,s,l)=>{switch(s){case 1:return l?function(c){return this.fromWireType(tt[c])}:function(c){return this.fromWireType(fe[c])};case 2:return l?function(c){return this.fromWireType(Z[c>>1])}:function(c){return this.fromWireType(ne[c>>1])};case 4:return l?function(c){return this.fromWireType(te[c>>2])}:function(c){return this.fromWireType(pe[c>>2])};default:throw new TypeError(`invalid integer width (${s}): ${r}`)}},Sh=(r,s,l,c)=>{s=Vt(s);function f(){}f.values={},_n(r,{name:s,constructor:f,fromWireType:function(g){return this.constructor.values[g]},toWireType:(g,M)=>M.value,argPackAdvance:In,readValueFromPointer:yh(s,l,c),destructorFunction:null}),ia(s,f)},yr=(r,s)=>{var l=Ei[r];return l===void 0&&_t(`${s} has unknown type ${ml(r)}`),l},Mh=(r,s,l)=>{var c=yr(r,"enum");s=Vt(s);var f=c.constructor,g=Object.create(c.constructor.prototype,{value:{value:l},constructor:{value:Jr(`${c.name}_${s}`,function(){})}});f.values[l]=g,f[s]=g},Th=(r,s)=>{switch(s){case 4:return function(l){return this.fromWireType(Ne[l>>2])};case 8:return function(l){return this.fromWireType(Be[l>>3])};default:throw new TypeError(`invalid float width (${s}): ${r}`)}},wh=(r,s,l)=>{s=Vt(s),_n(r,{name:s,fromWireType:c=>c,toWireType:(c,f)=>{if(typeof f!="number"&&typeof f!="boolean")throw new TypeError(`Cannot convert ${yi(f)} to ${this.name}`);return f},argPackAdvance:In,readValueFromPointer:Th(s,l),destructorFunction:null})},bh=(r,s,l,c,f,g,M,w)=>{var L=rs(s,l);r=Vt(r),r=sa(r),f=Un(c,f,M),ia(r,function(){Si(`Cannot call ${r} due to unbound types`,L)},s-1),Mn([],L,W=>{var Y=[W[0],null].concat(W.slice(1));return dl(r,is(r,Y,null,f,g,M),s-1),[]})},Ah=(r,s,l,c,f)=>{s=Vt(s);const g=c===0;let M=L=>L;if(g){var w=32-8*l;M=L=>L<<w>>>w,f=M(f)}_n(r,{name:s,fromWireType:M,toWireType:(L,W)=>{if(typeof W!="number"&&typeof W!="boolean")throw new TypeError(`Cannot convert "${yi(W)}" to ${s}`);return ol(s,W,c,f),W},argPackAdvance:In,readValueFromPointer:al(s,l,c!==0),destructorFunction:null})},Rh=(r,s,l)=>{var c=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],f=c[s];function g(M){var w=pe[M>>2],L=pe[M+4>>2];return new f(tt.buffer,L,w)}l=Vt(l),_n(r,{name:l,fromWireType:g,argPackAdvance:In,readValueFromPointer:g},{ignoreDuplicateRegistrations:!0})},Ch=Object.assign({optional:!0},xl),Ph=(r,s)=>{_n(r,Ch)},Mi=(r,s,l)=>(D(typeof l=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),ye(r,fe,s,l)),Dh=(r,s)=>{s=Vt(s),_n(r,{name:s,fromWireType(l){for(var c=pe[l>>2],f=l+4,g,M,w=f,M=0;M<=c;++M){var L=f+M;if(M==c||fe[L]==0){var W=L-w,Y=lt(w,W);g===void 0?g=Y:(g+="\0",g+=Y),w=L+1}}return On(l),g},toWireType(l,c){c instanceof ArrayBuffer&&(c=new Uint8Array(c));var f,g=typeof c=="string";g||ArrayBuffer.isView(c)&&c.BYTES_PER_ELEMENT==1||_t("Cannot pass non-string to std::string"),g?f=$(c):f=c.length;var M=ca(4+f+1),w=M+4;return pe[M>>2]=f,g?Mi(c,w,f+1):fe.set(c,w),l!==null&&l.push(On,M),M},argPackAdvance:In,readValueFromPointer:es,destructorFunction(l){On(l)}})},yl=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Lh=(r,s)=>{D(r%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var l=r>>1,c=l+s/2,f=l;!(f>=c)&&ne[f];)++f;if(f-l>16&&yl)return yl.decode(ne.subarray(l,f));for(var g="",M=l;!(M>=c);++M){var w=ne[M];if(w==0)break;g+=String.fromCharCode(w)}return g},Fh=(r,s,l)=>{if(D(s%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),D(typeof l=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),l??(l=2147483647),l<2)return 0;l-=2;for(var c=s,f=l<r.length*2?l/2:r.length,g=0;g<f;++g){var M=r.charCodeAt(g);Z[s>>1]=M,s+=2}return Z[s>>1]=0,s-c},Ih=r=>r.length*2,Uh=(r,s)=>{D(r%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var l="",c=0;!(c>=s/4);c++){var f=te[r+c*4>>2];if(!f)break;l+=String.fromCodePoint(f)}return l},Nh=(r,s,l)=>{if(D(s%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),D(typeof l=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),l??(l=2147483647),l<4)return 0;for(var c=s,f=c+l-4,g=0;g<r.length;++g){var M=r.codePointAt(g);if(M>65535&&g++,te[s>>2]=M,s+=4,s+4>f)break}return te[s>>2]=0,s-c},Oh=r=>{for(var s=0,l=0;l<r.length;++l){var c=r.codePointAt(l);c>65535&&l++,s+=4}return s},kh=(r,s,l)=>{l=Vt(l);var c,f,g,M;s===2?(c=Lh,f=Fh,M=Ih,g=w=>ne[w>>1]):s===4&&(c=Uh,f=Nh,M=Oh,g=w=>pe[w>>2]),_n(r,{name:l,fromWireType:w=>{for(var L=pe[w>>2],W,Y=w+4,ae=0;ae<=L;++ae){var de=w+4+ae*s;if(ae==L||g(de)==0){var ce=de-Y,ge=c(Y,ce);W===void 0?W=ge:(W+="\0",W+=ge),Y=de+s}}return On(w),W},toWireType:(w,L)=>{typeof L!="string"&&_t(`Cannot pass non-string to C++ string type ${l}`);var W=M(L),Y=ca(4+W+s);return pe[Y>>2]=W/s,f(L,Y+4,W+s),w!==null&&w.push(On,Y),Y},argPackAdvance:In,readValueFromPointer:es,destructorFunction(w){On(w)}})},Bh=(r,s)=>{El(r)},zh=(r,s)=>{s=Vt(s),_n(r,{isVoid:!0,name:s,argPackAdvance:0,fromWireType:()=>{},toWireType:(l,c)=>{}})},Hh=()=>{throw new k},Sl=(r,s,l)=>{var c=[],f=r.toWireType(c,l);return c.length&&(pe[s>>2]=Bt.toHandle(c)),f},Vh=(r,s,l)=>(r=Bt.toValue(r),s=yr(s,"emval::as"),Sl(s,l,r)),Gh=(r,s)=>(r=Bt.toValue(r),s=yr(s,"emval::as"),s.toWireType(null,r)),ss=[],Wh=(r,s,l,c)=>(r=ss[r],s=Bt.toValue(s),r(null,s,l,c)),Xh={},oa=r=>{var s=Xh[r];return s===void 0?Vt(r):s},$h=(r,s,l,c,f)=>(r=ss[r],s=Bt.toValue(s),l=oa(l),r(s,s[l],c,f)),Ml=()=>globalThis,jh=r=>r===0?Bt.toHandle(Ml()):(r=oa(r),Bt.toHandle(Ml()[r])),qh=r=>{var s=ss.length;return ss.push(r),s},Yh=(r,s)=>{for(var l=new Array(r),c=0;c<r;++c)l[c]=yr(pe[s+c*4>>2],`parameter ${c}`);return l},Kh=(r,s,l)=>{var c=Yh(r,s),f=c.shift();r--;var g=`return function (obj, func, destructorsRef, args) {
`,M=0,w=[];l===0&&w.push("obj");for(var L=["retType"],W=[f],Y=0;Y<r;++Y)w.push(`arg${Y}`),L.push(`argType${Y}`),W.push(c[Y]),g+=`  var arg${Y} = argType${Y}.readValueFromPointer(args${M?"+"+M:""});
`,M+=c[Y].argPackAdvance;var ae=l===1?"new func":"func.call";g+=`  var rv = ${ae}(${w.join(", ")});
`,f.isVoid||(L.push("emval_returnValue"),W.push(Sl),g+=`  return emval_returnValue(retType, destructorsRef, rv);
`),g+=`};
`;var de=new Function(...L,g)(...W),ce=`methodCaller<(${c.map(ge=>ge.name).join(", ")}) => ${f.name}>`;return qh(Jr(ce,de))},Zh=(r,s)=>(r=Bt.toValue(r),s=Bt.toValue(s),Bt.toHandle(r[s])),Jh=r=>{r>9&&(Nn[r+1]+=1)},Qh=r=>(r=Bt.toValue(r),typeof r=="number"),ef=r=>(r=Bt.toValue(r),typeof r=="string"),tf=()=>Bt.toHandle([]),nf=r=>Bt.toHandle(oa(r)),rf=r=>{var s=Bt.toValue(r);ra(s),aa(r)},sf=(r,s)=>{r=yr(r,"_emval_take_value");var l=r.readValueFromPointer(s);return Bt.toHandle(l)},af=r=>{throw r=Bt.toValue(r),r},of=r=>r%4===0&&(r%100!==0||r%400===0),lf=[0,31,60,91,121,152,182,213,244,274,305,335],cf=[0,31,59,90,120,151,181,212,243,273,304,334],Tl=r=>{var s=of(r.getFullYear()),l=s?lf:cf,c=l[r.getMonth()]+r.getDate()-1;return c},uf=9007199254740992,hf=-9007199254740992,wl=r=>r<hf||r>uf?NaN:Number(r);function ff(r,s){r=wl(r);var l=new Date(r*1e3);te[s>>2]=l.getSeconds(),te[s+4>>2]=l.getMinutes(),te[s+8>>2]=l.getHours(),te[s+12>>2]=l.getDate(),te[s+16>>2]=l.getMonth(),te[s+20>>2]=l.getFullYear()-1900,te[s+24>>2]=l.getDay();var c=Tl(l)|0;te[s+28>>2]=c,te[s+36>>2]=-(l.getTimezoneOffset()*60);var f=new Date(l.getFullYear(),0,1),g=new Date(l.getFullYear(),6,1).getTimezoneOffset(),M=f.getTimezoneOffset(),w=(g!=M&&l.getTimezoneOffset()==Math.min(M,g))|0;te[s+32>>2]=w}var df=function(r){var s=(()=>{var l=new Date(te[r+20>>2]+1900,te[r+16>>2],te[r+12>>2],te[r+8>>2],te[r+4>>2],te[r>>2],0),c=te[r+32>>2],f=l.getTimezoneOffset(),g=new Date(l.getFullYear(),0,1),M=new Date(l.getFullYear(),6,1).getTimezoneOffset(),w=g.getTimezoneOffset(),L=Math.min(w,M);if(c<0)te[r+32>>2]=+(M!=w&&L==f);else if(c>0!=(L==f)){var W=Math.max(w,M),Y=c>0?L:W;l.setTime(l.getTime()+(Y-f)*6e4)}te[r+24>>2]=l.getDay();var ae=Tl(l)|0;te[r+28>>2]=ae,te[r>>2]=l.getSeconds(),te[r+4>>2]=l.getMinutes(),te[r+8>>2]=l.getHours(),te[r+12>>2]=l.getDate(),te[r+16>>2]=l.getMonth(),te[r+20>>2]=l.getYear();var de=l.getTime();return isNaN(de)?-1:de/1e3})();return BigInt(s)},pf=(r,s,l,c)=>{var f=new Date().getFullYear(),g=new Date(f,0,1),M=new Date(f,6,1),w=g.getTimezoneOffset(),L=M.getTimezoneOffset(),W=Math.max(w,L);pe[r>>2]=W*60,te[s>>2]=+(w!=L);var Y=ce=>{var ge=ce>=0?"-":"+",Xe=Math.abs(ce),ct=String(Math.floor(Xe/60)).padStart(2,"0"),ut=String(Xe%60).padStart(2,"0");return`UTC${ge}${ct}${ut}`},ae=Y(w),de=Y(L);D(ae),D(de),D($(ae)<=16,`timezone name truncated to fit in TZNAME_MAX (${ae})`),D($(de)<=16,`timezone name truncated to fit in TZNAME_MAX (${de})`),L<w?(Mi(ae,l,17),Mi(de,c,17)):(Mi(ae,c,17),Mi(de,l,17))},bl=()=>performance.now(),Al=()=>Date.now(),mf=r=>r>=0&&r<=3;function _f(r,s,l){if(!mf(r))return 28;var c;r===0?c=Al():c=bl();var f=Math.round(c*1e3*1e3);return je[l>>3]=BigInt(f),0}var as=[],gf=(r,s)=>{D(Array.isArray(as)),D(s%16==0),as.length=0;for(var l;l=fe[r++];){var c=String.fromCharCode(l),f=["d","f","i","p"];f.push("j"),D(f.includes(c),`Invalid character ${l}("${c}") in readEmAsmArgs! Use only [${f}], and do not specify "v" for void return argument.`);var g=l!=105;g&=l!=112,s+=g&&s%8?4:0,as.push(l==112?pe[s>>2]:l==106?je[s>>3]:l==105?te[s>>2]:Be[s>>3]),s+=g?8:4}return as},vf=(r,s,l)=>{var c=gf(s,l);return D(Fl.hasOwnProperty(r),`No EM_ASM constant found at address ${r}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),Fl[r](...c)},xf=(r,s,l)=>vf(r,s,l),Rl=()=>2147483648,Ef=()=>Rl(),yf=(r,s)=>(D(s,"alignment argument is required"),Math.ceil(r/s)*s),Sf=r=>{var s=at.buffer,l=(r-s.byteLength+65535)/65536|0;try{return at.grow(l),He(),1}catch(c){I(`growMemory: Attempted to grow heap from ${s.byteLength} bytes to ${r} bytes, but got error: ${c}`)}},Mf=r=>{var s=fe.length;r>>>=0,D(r>s);var l=Rl();if(r>l)return I(`Cannot enlarge memory, requested ${r} bytes, but the limit is ${l} bytes!`),!1;for(var c=1;c<=4;c*=2){var f=s*(1+.2/c);f=Math.min(f,r+100663296);var g=Math.min(l,yf(Math.max(r,f),65536)),M=Sf(g);if(M)return!0}return I(`Failed to grow the heap from ${s} bytes to ${g} bytes, not enough memory!`),!1},la={},Tf=()=>p||"./this.program",Sr=()=>{if(!Sr.strings){var r=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8",s={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:r,_:Tf()};for(var l in la)la[l]===void 0?delete s[l]:s[l]=la[l];var c=[];for(var l in s)c.push(`${l}=${s[l]}`);Sr.strings=c}return Sr.strings},wf=(r,s)=>{var l=0,c=0;for(var f of Sr()){var g=s+l;pe[r+c>>2]=g,l+=Mi(f,g,1/0)+1,c+=4}return 0},bf=(r,s)=>{var l=Sr();pe[r>>2]=l.length;var c=0;for(var f of l)c+=$(f)+1;return pe[s>>2]=c,0},Cl=0,Pl=()=>be||Cl>0,Af=r=>{var s;Pl()||((s=t.onExit)==null||s.call(t,r),B=!0),d(r,new et(r))},Rf=(r,s)=>{if(Wp(),Pl()&&!s){var l=`program exited (with status: ${r}), but keepRuntimeAlive() is set (counter=${Cl}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;Ze==null||Ze(l),I(l)}Af(r)},Cf=Rf;function Pf(r){try{var s=dt.getStreamFromFD(r);return S.close(s),0}catch(l){if(typeof S>"u"||l.name!=="ErrnoError")throw l;return l.errno}}var Df=(r,s,l,c)=>{for(var f=0,g=0;g<l;g++){var M=pe[s>>2],w=pe[s+4>>2];s+=8;var L=S.read(r,tt,M,w,c);if(L<0)return-1;if(f+=L,L<w)break}return f};function Lf(r,s,l,c){try{var f=dt.getStreamFromFD(r),g=Df(f,s,l);return pe[c>>2]=g,0}catch(M){if(typeof S>"u"||M.name!=="ErrnoError")throw M;return M.errno}}function Ff(r,s,l,c){s=wl(s);try{if(isNaN(s))return 61;var f=dt.getStreamFromFD(r);return S.llseek(f,s,l),je[c>>3]=BigInt(f.position),f.getdents&&s===0&&l===0&&(f.getdents=null),0}catch(g){if(typeof S>"u"||g.name!=="ErrnoError")throw g;return g.errno}}var If=(r,s,l,c)=>{for(var f=0,g=0;g<l;g++){var M=pe[s>>2],w=pe[s+4>>2];s+=8;var L=S.write(r,tt,M,w,c);if(L<0)return-1;if(f+=L,L<w)break}return f};function Uf(r,s,l,c){try{var f=dt.getStreamFromFD(r),g=If(f,s,l);return pe[c>>2]=g,0}catch(M){if(typeof S>"u"||M.name!=="ErrnoError")throw M;return M.errno}}var Nf=r=>r,Of=r=>{var s=t["_"+r];return D(s,"Cannot call unknown function "+r+", make sure it is exported"),s},kf=(r,s)=>{D(r.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),tt.set(r,s)},os=r=>Bl(r),Bf=r=>{var s=$(r)+1,l=os(s);return Mi(r,l,s),l},Dl=(r,s,l,c,f)=>{var g={string:ge=>{var Xe=0;return ge!=null&&ge!==0&&(Xe=Bf(ge)),Xe},array:ge=>{var Xe=os(ge.length);return kf(ge,Xe),Xe}};function M(ge){return s==="string"?lt(ge):s==="boolean"?!!ge:ge}var w=Of(r),L=[],W=0;if(D(s!=="array",'Return type should not be "array".'),c)for(var Y=0;Y<c.length;Y++){var ae=g[l[Y]];ae?(W===0&&(W=z()),L[Y]=ae(c[Y])):L[Y]=c[Y]}var de=w(...L);function ce(ge){return W!==0&&G(W),M(ge)}return de=ce(de),de},zf=(r,s,l,c)=>(...f)=>Dl(r,s,l,f),Hf=(...r)=>S.createPath(...r),Vf=(...r)=>S.unlink(...r),Gf=(...r)=>S.createLazyFile(...r),Wf=(...r)=>S.createDevice(...r),Xf=r=>ls(r),$f=r=>fa(r),jf=r=>{var s=z(),l=os(4),c=os(4);Hl(r,l,c);var f=pe[l>>2],g=pe[c>>2],M=lt(f);On(f);var w;return g&&(w=lt(g),On(g)),G(s),[M,w]},Ll=r=>jf(r);S.createPreloadedFile=Tt,S.staticInit(),nh(),uh(),D(Nn.length===5*2),t.noExitRuntime&&(be=t.noExitRuntime),t.preloadPlugins&&(It=t.preloadPlugins),t.print&&(O=t.print),t.printErr&&(I=t.printErr),t.wasmBinary&&(F=t.wasmBinary),Kf(),t.arguments&&t.arguments,t.thisProgram&&(p=t.thisProgram),D(typeof t.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),D(typeof t.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),D(typeof t.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),D(typeof t.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),D(typeof t.read>"u","Module.read option was removed"),D(typeof t.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),D(typeof t.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),D(typeof t.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),D(typeof t.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),D(typeof t.ENVIRONMENT>"u","Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),D(typeof t.STACK_SIZE>"u","STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),D(typeof t.wasmMemory>"u","Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),D(typeof t.INITIAL_MEMORY>"u","Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),t.addRunDependency=U,t.removeRunDependency=b,t.ccall=Dl,t.cwrap=zf,t.FS_createPreloadedFile=Tt,t.FS_unlink=Vf,t.FS_createPath=Hf,t.FS_createDevice=Wf,t.FS=S,t.FS_createDataFile=ft,t.FS_createLazyFile=Gf,t.MEMFS=Se;var qf=["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","zeroMemory","withStackSave","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","runMainThreadEmAsm","jstoi_q","autoResumeAudioContext","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","HandleAllocator","getNativeTypeSize","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","stringToAscii","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace","getFunctionArgsName","createJsInvokerSignature","PureVirtualError","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","setDelayFunction","count_emval_handles"];qf.forEach(Ee);var Yf=["run","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP8","HEAPU8","HEAP16","HEAPU16","HEAP32","HEAPU32","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","setTempRet0","ptrToString","exitJS","getHeapMax","growMemory","ENV","ERRNO_CODES","strError","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","getExecutableName","keepRuntimeAlive","asyncLoad","alignMemory","mmapAlloc","wasmTable","getUniqueRunDependency","noExitRuntime","addOnPreRun","addOnPostRun","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","intArrayFromString","AsciiToString","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","getEnvStrings","checkWasiClock","doReadv","doWritev","initRandomFill","randomFill","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","preloadPlugins","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS_readFile","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_forceLoadFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s","InternalError","BindingError","throwInternalError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","whenDependentTypesAreResolved","getTypeName","getFunctionName","heap32VectorToArray","requireRegisteredType","usesDestructorStack","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","GenericWireTypeSize","EmValType","EmValOptionalType","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","getInheritedInstance","registeredPointers","registerType","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","assertIntegerRange","readPointer","runDestructors","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","deletionQueue","flushPendingDeletes","delayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_freelist","emval_handles","emval_symbols","getStringOrSymbol","Emval","emval_get_global","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller"];Yf.forEach(De),t.incrementExceptionRefcount=Xf,t.decrementExceptionRefcount=$f,t.getExceptionMessage=Ll;function Kf(){he("fetchSettings")}var Fl={701944:()=>{typeof t<"u"&&"mjDISABLESTRING mjENABLESTRING mjFRAMESTRING mjLABELSTRING mjRNDSTRING mjTIMERSTRING mjVISSTRING".split(" ").forEach(function(r){Object.defineProperty(t,r,{get:function(){return t["get_"+r]()},set:function(s){},enumerable:!0,configurable:!0})})}},Il=Q("___getTypeName"),ca=Q("_malloc"),ua=Q("_fflush"),On=Q("_free"),ha=Q("_emscripten_stack_get_end"),Ul=Q("_strerror"),_e=Q("_setThrew"),Nl=Q("__emscripten_tempret_set"),Ol=Q("_emscripten_stack_init"),kl=Q("__emscripten_stack_restore"),Bl=Q("__emscripten_stack_alloc"),zl=Q("_emscripten_stack_get_current"),fa=Q("___cxa_decrement_exception_refcount"),ls=Q("___cxa_increment_exception_refcount"),Hl=Q("___get_exception_message"),Vl=Q("___cxa_can_catch"),Gl=Q("___cxa_get_exception_ptr");function Zf(r){Il=le("__getTypeName",1),ca=le("malloc",1),ua=le("fflush",1),On=le("free",1),ha=r.emscripten_stack_get_end,r.emscripten_stack_get_base,Ul=le("strerror",1),_e=le("setThrew",2),Nl=le("_emscripten_tempret_set",1),Ol=r.emscripten_stack_init,r.emscripten_stack_get_free,kl=r._emscripten_stack_restore,Bl=r._emscripten_stack_alloc,zl=r.emscripten_stack_get_current,fa=le("__cxa_decrement_exception_refcount",1),ls=le("__cxa_increment_exception_refcount",1),Hl=le("__get_exception_message",3),Vl=le("__cxa_can_catch",3),Gl=le("__cxa_get_exception_ptr",1)}var Wl={__assert_fail:Sn,__cxa_begin_catch:Wn,__cxa_current_primary_exception:gr,__cxa_end_catch:Wr,__cxa_find_matching_catch_2:Xr,__cxa_find_matching_catch_3:$r,__cxa_rethrow:jr,__cxa_rethrow_primary_exception:Ks,__cxa_throw:Zs,__cxa_uncaught_exceptions:Js,__resumeException:Qs,__syscall_dup3:xi,__syscall_fcntl64:sn,__syscall_fstat64:Yt,__syscall_ioctl:Zt,__syscall_lstat64:vr,__syscall_newfstatat:$n,__syscall_openat:Wu,__syscall_stat64:Xu,_abort_js:$u,_embind_register_bigint:qu,_embind_register_bool:Yu,_embind_register_class:fh,_embind_register_class_class_function:_h,_embind_register_class_constructor:gh,_embind_register_class_function:vh,_embind_register_class_property:xh,_embind_register_constant:Eh,_embind_register_emval:El,_embind_register_enum:Sh,_embind_register_enum_value:Mh,_embind_register_float:wh,_embind_register_function:bh,_embind_register_integer:Ah,_embind_register_memory_view:Rh,_embind_register_optional:Ph,_embind_register_std_string:Dh,_embind_register_std_wstring:kh,_embind_register_user_type:Bh,_embind_register_void:zh,_emscripten_throw_longjmp:Hh,_emval_as:Vh,_emval_as_int64:Gh,_emval_call:Wh,_emval_call_method:$h,_emval_decref:aa,_emval_get_global:jh,_emval_get_method_caller:Kh,_emval_get_property:Zh,_emval_incref:Jh,_emval_is_number:Qh,_emval_is_string:ef,_emval_new_array:tf,_emval_new_cstring:nf,_emval_run_destructors:rf,_emval_take_value:sf,_emval_throw:af,_localtime_js:ff,_mktime_js:df,_tzset_js:pf,clock_time_get:_f,emscripten_asm_const_int:xf,emscripten_date_now:Al,emscripten_get_heap_max:Ef,emscripten_get_now:bl,emscripten_resize_heap:Mf,environ_get:wf,environ_sizes_get:bf,exit:Cf,fd_close:Pf,fd_read:Lf,fd_seek:Ff,fd_write:Uf,invoke_ddd:Lp,invoke_dddi:Vd,invoke_dddidi:Gd,invoke_ddidi:Hd,invoke_di:Wd,invoke_didd:yp,invoke_dii:Ld,invoke_diii:fd,invoke_diiii:zd,invoke_diiiidd:kd,invoke_diiiidi:md,invoke_diiiii:ad,invoke_diiiiii:yd,invoke_diiiiiii:Xd,invoke_diiiiiiiii:xd,invoke_diiiiiiiiiiii:Ed,invoke_fiii:zp,invoke_i:od,invoke_id:rp,invoke_ii:ed,invoke_iid:tp,invoke_iidiii:Cd,invoke_iidiiid:Ad,invoke_iidiiiiidi:Pd,invoke_iii:Jf,invoke_iiid:Dd,invoke_iiididdddddd:Rd,invoke_iiidiiiiiiii:bd,invoke_iiii:id,invoke_iiiidddiiiii:jd,invoke_iiiii:hd,invoke_iiiiid:vp,invoke_iiiiii:cp,invoke_iiiiiii:ip,invoke_iiiiiiii:ep,invoke_iiiiiiiidd:xp,invoke_iiiiiiiii:Od,invoke_iiiiiiiiid:Dp,invoke_iiiiiiiiii:op,invoke_iiiiiiiiiidddiiiiiiiii:wd,invoke_iiiiiiiiiii:sp,invoke_iiiiiiiiiiii:Hp,invoke_iiiiiiiiiiiii:Sp,invoke_iiij:lp,invoke_iiji:ap,invoke_j:kp,invoke_ji:Cp,invoke_jiiii:up,invoke_jij:Mp,invoke_v:nd,invoke_vi:td,invoke_vid:np,invoke_viddd:fp,invoke_vidddd:dp,invoke_vidi:Bd,invoke_vidiii:Md,invoke_vif:Up,invoke_vii:sd,invoke_viid:Ud,invoke_viiddi:gp,invoke_viiddidi:_p,invoke_viiddii:$d,invoke_viidi:Id,invoke_viidii:pd,invoke_viidiii:Jd,invoke_viidiiid:Kd,invoke_viidiiiii:Td,invoke_viidiiiiidi:Qd,invoke_viidiiiiiiii:Sd,invoke_viii:Qf,invoke_viiid:gd,invoke_viiidd:mp,invoke_viiidi:Fd,invoke_viiididdddddd:Zd,invoke_viiidiiiiiiii:Yd,invoke_viiii:cd,invoke_viiiiddd:pp,invoke_viiiidi:Fp,invoke_viiiifi:Ip,invoke_viiiii:rd,invoke_viiiiid:_d,invoke_viiiiii:ld,invoke_viiiiiii:dd,invoke_viiiiiiii:Nd,invoke_viiiiiiiii:Ep,invoke_viiiiiiiiii:Ap,invoke_viiiiiiiiiidddiiiiiiiii:qd,invoke_viiiiiiiiiii:Pp,invoke_viiiiiiiiiiid:vd,invoke_viiiiiiiiiiiii:wp,invoke_viiiiiiiiiiiiii:bp,invoke_viiiiiiiiiiiiiii:Vp,invoke_viiiiiiiiiiiiiiiiii:Rp,invoke_viiiij:Np,invoke_viiij:ud,invoke_viij:Op,invoke_viijii:Bp,invoke_vij:Tp,invoke_vijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj:hp,llvm_eh_typeid_for:Nf},Ti=await Le();function Jf(r,s,l){var c=z();try{return ve(r)(s,l)}catch(f){if(G(c),!(f instanceof T))throw f;_e(1,0)}}function Qf(r,s,l,c){var f=z();try{ve(r)(s,l,c)}catch(g){if(G(f),!(g instanceof T))throw g;_e(1,0)}}function ed(r,s){var l=z();try{return ve(r)(s)}catch(c){if(G(l),!(c instanceof T))throw c;_e(1,0)}}function td(r,s){var l=z();try{ve(r)(s)}catch(c){if(G(l),!(c instanceof T))throw c;_e(1,0)}}function nd(r){var s=z();try{ve(r)()}catch(l){if(G(s),!(l instanceof T))throw l;_e(1,0)}}function id(r,s,l,c){var f=z();try{return ve(r)(s,l,c)}catch(g){if(G(f),!(g instanceof T))throw g;_e(1,0)}}function rd(r,s,l,c,f,g){var M=z();try{ve(r)(s,l,c,f,g)}catch(w){if(G(M),!(w instanceof T))throw w;_e(1,0)}}function sd(r,s,l){var c=z();try{ve(r)(s,l)}catch(f){if(G(c),!(f instanceof T))throw f;_e(1,0)}}function ad(r,s,l,c,f,g){var M=z();try{return ve(r)(s,l,c,f,g)}catch(w){if(G(M),!(w instanceof T))throw w;_e(1,0)}}function od(r){var s=z();try{return ve(r)()}catch(l){if(G(s),!(l instanceof T))throw l;_e(1,0)}}function ld(r,s,l,c,f,g,M){var w=z();try{ve(r)(s,l,c,f,g,M)}catch(L){if(G(w),!(L instanceof T))throw L;_e(1,0)}}function cd(r,s,l,c,f){var g=z();try{ve(r)(s,l,c,f)}catch(M){if(G(g),!(M instanceof T))throw M;_e(1,0)}}function ud(r,s,l,c,f){var g=z();try{ve(r)(s,l,c,f)}catch(M){if(G(g),!(M instanceof T))throw M;_e(1,0)}}function hd(r,s,l,c,f){var g=z();try{return ve(r)(s,l,c,f)}catch(M){if(G(g),!(M instanceof T))throw M;_e(1,0)}}function fd(r,s,l,c){var f=z();try{return ve(r)(s,l,c)}catch(g){if(G(f),!(g instanceof T))throw g;_e(1,0)}}function dd(r,s,l,c,f,g,M,w){var L=z();try{ve(r)(s,l,c,f,g,M,w)}catch(W){if(G(L),!(W instanceof T))throw W;_e(1,0)}}function pd(r,s,l,c,f,g){var M=z();try{ve(r)(s,l,c,f,g)}catch(w){if(G(M),!(w instanceof T))throw w;_e(1,0)}}function md(r,s,l,c,f,g,M){var w=z();try{return ve(r)(s,l,c,f,g,M)}catch(L){if(G(w),!(L instanceof T))throw L;_e(1,0)}}function _d(r,s,l,c,f,g,M){var w=z();try{ve(r)(s,l,c,f,g,M)}catch(L){if(G(w),!(L instanceof T))throw L;_e(1,0)}}function gd(r,s,l,c,f){var g=z();try{ve(r)(s,l,c,f)}catch(M){if(G(g),!(M instanceof T))throw M;_e(1,0)}}function vd(r,s,l,c,f,g,M,w,L,W,Y,ae,de){var ce=z();try{ve(r)(s,l,c,f,g,M,w,L,W,Y,ae,de)}catch(ge){if(G(ce),!(ge instanceof T))throw ge;_e(1,0)}}function xd(r,s,l,c,f,g,M,w,L,W){var Y=z();try{return ve(r)(s,l,c,f,g,M,w,L,W)}catch(ae){if(G(Y),!(ae instanceof T))throw ae;_e(1,0)}}function Ed(r,s,l,c,f,g,M,w,L,W,Y,ae,de){var ce=z();try{return ve(r)(s,l,c,f,g,M,w,L,W,Y,ae,de)}catch(ge){if(G(ce),!(ge instanceof T))throw ge;_e(1,0)}}function yd(r,s,l,c,f,g,M){var w=z();try{return ve(r)(s,l,c,f,g,M)}catch(L){if(G(w),!(L instanceof T))throw L;_e(1,0)}}function Sd(r,s,l,c,f,g,M,w,L,W,Y,ae){var de=z();try{ve(r)(s,l,c,f,g,M,w,L,W,Y,ae)}catch(ce){if(G(de),!(ce instanceof T))throw ce;_e(1,0)}}function Md(r,s,l,c,f,g){var M=z();try{ve(r)(s,l,c,f,g)}catch(w){if(G(M),!(w instanceof T))throw w;_e(1,0)}}function Td(r,s,l,c,f,g,M,w,L){var W=z();try{ve(r)(s,l,c,f,g,M,w,L)}catch(Y){if(G(W),!(Y instanceof T))throw Y;_e(1,0)}}function wd(r,s,l,c,f,g,M,w,L,W,Y,ae,de,ce,ge,Xe,ct,ut,Ft,xt,Jt,Gt){var tn=z();try{return ve(r)(s,l,c,f,g,M,w,L,W,Y,ae,de,ce,ge,Xe,ct,ut,Ft,xt,Jt,Gt)}catch(Lt){if(G(tn),!(Lt instanceof T))throw Lt;_e(1,0)}}function bd(r,s,l,c,f,g,M,w,L,W,Y,ae){var de=z();try{return ve(r)(s,l,c,f,g,M,w,L,W,Y,ae)}catch(ce){if(G(de),!(ce instanceof T))throw ce;_e(1,0)}}function Ad(r,s,l,c,f,g,M){var w=z();try{return ve(r)(s,l,c,f,g,M)}catch(L){if(G(w),!(L instanceof T))throw L;_e(1,0)}}function Rd(r,s,l,c,f,g,M,w,L,W,Y,ae){var de=z();try{return ve(r)(s,l,c,f,g,M,w,L,W,Y,ae)}catch(ce){if(G(de),!(ce instanceof T))throw ce;_e(1,0)}}function Cd(r,s,l,c,f,g){var M=z();try{return ve(r)(s,l,c,f,g)}catch(w){if(G(M),!(w instanceof T))throw w;_e(1,0)}}function Pd(r,s,l,c,f,g,M,w,L,W){var Y=z();try{return ve(r)(s,l,c,f,g,M,w,L,W)}catch(ae){if(G(Y),!(ae instanceof T))throw ae;_e(1,0)}}function Dd(r,s,l,c){var f=z();try{return ve(r)(s,l,c)}catch(g){if(G(f),!(g instanceof T))throw g;_e(1,0)}}function Ld(r,s,l){var c=z();try{return ve(r)(s,l)}catch(f){if(G(c),!(f instanceof T))throw f;_e(1,0)}}function Fd(r,s,l,c,f,g){var M=z();try{ve(r)(s,l,c,f,g)}catch(w){if(G(M),!(w instanceof T))throw w;_e(1,0)}}function Id(r,s,l,c,f){var g=z();try{ve(r)(s,l,c,f)}catch(M){if(G(g),!(M instanceof T))throw M;_e(1,0)}}function Ud(r,s,l,c){var f=z();try{ve(r)(s,l,c)}catch(g){if(G(f),!(g instanceof T))throw g;_e(1,0)}}function Nd(r,s,l,c,f,g,M,w,L){var W=z();try{ve(r)(s,l,c,f,g,M,w,L)}catch(Y){if(G(W),!(Y instanceof T))throw Y;_e(1,0)}}function Od(r,s,l,c,f,g,M,w,L){var W=z();try{return ve(r)(s,l,c,f,g,M,w,L)}catch(Y){if(G(W),!(Y instanceof T))throw Y;_e(1,0)}}function kd(r,s,l,c,f,g,M){var w=z();try{return ve(r)(s,l,c,f,g,M)}catch(L){if(G(w),!(L instanceof T))throw L;_e(1,0)}}function Bd(r,s,l,c){var f=z();try{ve(r)(s,l,c)}catch(g){if(G(f),!(g instanceof T))throw g;_e(1,0)}}function zd(r,s,l,c,f){var g=z();try{return ve(r)(s,l,c,f)}catch(M){if(G(g),!(M instanceof T))throw M;_e(1,0)}}function Hd(r,s,l,c,f){var g=z();try{return ve(r)(s,l,c,f)}catch(M){if(G(g),!(M instanceof T))throw M;_e(1,0)}}function Vd(r,s,l,c){var f=z();try{return ve(r)(s,l,c)}catch(g){if(G(f),!(g instanceof T))throw g;_e(1,0)}}function Gd(r,s,l,c,f,g){var M=z();try{return ve(r)(s,l,c,f,g)}catch(w){if(G(M),!(w instanceof T))throw w;_e(1,0)}}function Wd(r,s){var l=z();try{return ve(r)(s)}catch(c){if(G(l),!(c instanceof T))throw c;_e(1,0)}}function Xd(r,s,l,c,f,g,M,w){var L=z();try{return ve(r)(s,l,c,f,g,M,w)}catch(W){if(G(L),!(W instanceof T))throw W;_e(1,0)}}function $d(r,s,l,c,f,g,M){var w=z();try{ve(r)(s,l,c,f,g,M)}catch(L){if(G(w),!(L instanceof T))throw L;_e(1,0)}}function jd(r,s,l,c,f,g,M,w,L,W,Y,ae){var de=z();try{return ve(r)(s,l,c,f,g,M,w,L,W,Y,ae)}catch(ce){if(G(de),!(ce instanceof T))throw ce;_e(1,0)}}function qd(r,s,l,c,f,g,M,w,L,W,Y,ae,de,ce,ge,Xe,ct,ut,Ft,xt,Jt,Gt,tn){var Lt=z();try{ve(r)(s,l,c,f,g,M,w,L,W,Y,ae,de,ce,ge,Xe,ct,ut,Ft,xt,Jt,Gt,tn)}catch(ti){if(G(Lt),!(ti instanceof T))throw ti;_e(1,0)}}function Yd(r,s,l,c,f,g,M,w,L,W,Y,ae,de){var ce=z();try{ve(r)(s,l,c,f,g,M,w,L,W,Y,ae,de)}catch(ge){if(G(ce),!(ge instanceof T))throw ge;_e(1,0)}}function Kd(r,s,l,c,f,g,M,w){var L=z();try{ve(r)(s,l,c,f,g,M,w)}catch(W){if(G(L),!(W instanceof T))throw W;_e(1,0)}}function Zd(r,s,l,c,f,g,M,w,L,W,Y,ae,de){var ce=z();try{ve(r)(s,l,c,f,g,M,w,L,W,Y,ae,de)}catch(ge){if(G(ce),!(ge instanceof T))throw ge;_e(1,0)}}function Jd(r,s,l,c,f,g,M){var w=z();try{ve(r)(s,l,c,f,g,M)}catch(L){if(G(w),!(L instanceof T))throw L;_e(1,0)}}function Qd(r,s,l,c,f,g,M,w,L,W,Y){var ae=z();try{ve(r)(s,l,c,f,g,M,w,L,W,Y)}catch(de){if(G(ae),!(de instanceof T))throw de;_e(1,0)}}function ep(r,s,l,c,f,g,M,w){var L=z();try{return ve(r)(s,l,c,f,g,M,w)}catch(W){if(G(L),!(W instanceof T))throw W;_e(1,0)}}function tp(r,s,l){var c=z();try{return ve(r)(s,l)}catch(f){if(G(c),!(f instanceof T))throw f;_e(1,0)}}function np(r,s,l){var c=z();try{ve(r)(s,l)}catch(f){if(G(c),!(f instanceof T))throw f;_e(1,0)}}function ip(r,s,l,c,f,g,M){var w=z();try{return ve(r)(s,l,c,f,g,M)}catch(L){if(G(w),!(L instanceof T))throw L;_e(1,0)}}function rp(r,s){var l=z();try{return ve(r)(s)}catch(c){if(G(l),!(c instanceof T))throw c;_e(1,0)}}function sp(r,s,l,c,f,g,M,w,L,W,Y){var ae=z();try{return ve(r)(s,l,c,f,g,M,w,L,W,Y)}catch(de){if(G(ae),!(de instanceof T))throw de;_e(1,0)}}function ap(r,s,l,c){var f=z();try{return ve(r)(s,l,c)}catch(g){if(G(f),!(g instanceof T))throw g;_e(1,0)}}function op(r,s,l,c,f,g,M,w,L,W){var Y=z();try{return ve(r)(s,l,c,f,g,M,w,L,W)}catch(ae){if(G(Y),!(ae instanceof T))throw ae;_e(1,0)}}function lp(r,s,l,c){var f=z();try{return ve(r)(s,l,c)}catch(g){if(G(f),!(g instanceof T))throw g;_e(1,0)}}function cp(r,s,l,c,f,g){var M=z();try{return ve(r)(s,l,c,f,g)}catch(w){if(G(M),!(w instanceof T))throw w;_e(1,0)}}function up(r,s,l,c,f){var g=z();try{return ve(r)(s,l,c,f)}catch(M){if(G(g),!(M instanceof T))throw M;return _e(1,0),0n}}function hp(r,s,l,c,f,g,M,w,L,W,Y,ae,de,ce,ge,Xe,ct,ut,Ft,xt,Jt,Gt,tn,Lt,ti,cs,$p,jp,qp,Yp,Kp,Zp,Jp,Qp,em,tm,nm,im,rm,sm,am,om,lm,cm,um,hm,fm,dm,pm,mm,_m,gm,vm,xm,Em,ym,Sm,Mm,Tm,wm,bm,Am,Rm,Cm,Pm,Dm,Lm,Fm,Im,Um,Nm,Om,km,Bm,zm,Hm,Vm,Gm,Wm,Xm,$m,jm,qm,Ym,Km,Zm){var Jm=z();try{ve(r)(s,l,c,f,g,M,w,L,W,Y,ae,de,ce,ge,Xe,ct,ut,Ft,xt,Jt,Gt,tn,Lt,ti,cs,$p,jp,qp,Yp,Kp,Zp,Jp,Qp,em,tm,nm,im,rm,sm,am,om,lm,cm,um,hm,fm,dm,pm,mm,_m,gm,vm,xm,Em,ym,Sm,Mm,Tm,wm,bm,Am,Rm,Cm,Pm,Dm,Lm,Fm,Im,Um,Nm,Om,km,Bm,zm,Hm,Vm,Gm,Wm,Xm,$m,jm,qm,Ym,Km,Zm)}catch(Yl){if(G(Jm),!(Yl instanceof T))throw Yl;_e(1,0)}}function fp(r,s,l,c,f){var g=z();try{ve(r)(s,l,c,f)}catch(M){if(G(g),!(M instanceof T))throw M;_e(1,0)}}function dp(r,s,l,c,f,g){var M=z();try{ve(r)(s,l,c,f,g)}catch(w){if(G(M),!(w instanceof T))throw w;_e(1,0)}}function pp(r,s,l,c,f,g,M,w){var L=z();try{ve(r)(s,l,c,f,g,M,w)}catch(W){if(G(L),!(W instanceof T))throw W;_e(1,0)}}function mp(r,s,l,c,f,g){var M=z();try{ve(r)(s,l,c,f,g)}catch(w){if(G(M),!(w instanceof T))throw w;_e(1,0)}}function _p(r,s,l,c,f,g,M,w){var L=z();try{ve(r)(s,l,c,f,g,M,w)}catch(W){if(G(L),!(W instanceof T))throw W;_e(1,0)}}function gp(r,s,l,c,f,g){var M=z();try{ve(r)(s,l,c,f,g)}catch(w){if(G(M),!(w instanceof T))throw w;_e(1,0)}}function vp(r,s,l,c,f,g){var M=z();try{return ve(r)(s,l,c,f,g)}catch(w){if(G(M),!(w instanceof T))throw w;_e(1,0)}}function xp(r,s,l,c,f,g,M,w,L,W){var Y=z();try{return ve(r)(s,l,c,f,g,M,w,L,W)}catch(ae){if(G(Y),!(ae instanceof T))throw ae;_e(1,0)}}function Ep(r,s,l,c,f,g,M,w,L,W){var Y=z();try{ve(r)(s,l,c,f,g,M,w,L,W)}catch(ae){if(G(Y),!(ae instanceof T))throw ae;_e(1,0)}}function yp(r,s,l,c){var f=z();try{return ve(r)(s,l,c)}catch(g){if(G(f),!(g instanceof T))throw g;_e(1,0)}}function Sp(r,s,l,c,f,g,M,w,L,W,Y,ae,de){var ce=z();try{return ve(r)(s,l,c,f,g,M,w,L,W,Y,ae,de)}catch(ge){if(G(ce),!(ge instanceof T))throw ge;_e(1,0)}}function Mp(r,s,l){var c=z();try{return ve(r)(s,l)}catch(f){if(G(c),!(f instanceof T))throw f;return _e(1,0),0n}}function Tp(r,s,l){var c=z();try{ve(r)(s,l)}catch(f){if(G(c),!(f instanceof T))throw f;_e(1,0)}}function wp(r,s,l,c,f,g,M,w,L,W,Y,ae,de,ce){var ge=z();try{ve(r)(s,l,c,f,g,M,w,L,W,Y,ae,de,ce)}catch(Xe){if(G(ge),!(Xe instanceof T))throw Xe;_e(1,0)}}function bp(r,s,l,c,f,g,M,w,L,W,Y,ae,de,ce,ge){var Xe=z();try{ve(r)(s,l,c,f,g,M,w,L,W,Y,ae,de,ce,ge)}catch(ct){if(G(Xe),!(ct instanceof T))throw ct;_e(1,0)}}function Ap(r,s,l,c,f,g,M,w,L,W,Y){var ae=z();try{ve(r)(s,l,c,f,g,M,w,L,W,Y)}catch(de){if(G(ae),!(de instanceof T))throw de;_e(1,0)}}function Rp(r,s,l,c,f,g,M,w,L,W,Y,ae,de,ce,ge,Xe,ct,ut,Ft){var xt=z();try{ve(r)(s,l,c,f,g,M,w,L,W,Y,ae,de,ce,ge,Xe,ct,ut,Ft)}catch(Jt){if(G(xt),!(Jt instanceof T))throw Jt;_e(1,0)}}function Cp(r,s){var l=z();try{return ve(r)(s)}catch(c){if(G(l),!(c instanceof T))throw c;return _e(1,0),0n}}function Pp(r,s,l,c,f,g,M,w,L,W,Y,ae){var de=z();try{ve(r)(s,l,c,f,g,M,w,L,W,Y,ae)}catch(ce){if(G(de),!(ce instanceof T))throw ce;_e(1,0)}}function Dp(r,s,l,c,f,g,M,w,L,W){var Y=z();try{return ve(r)(s,l,c,f,g,M,w,L,W)}catch(ae){if(G(Y),!(ae instanceof T))throw ae;_e(1,0)}}function Lp(r,s,l){var c=z();try{return ve(r)(s,l)}catch(f){if(G(c),!(f instanceof T))throw f;_e(1,0)}}function Fp(r,s,l,c,f,g,M){var w=z();try{ve(r)(s,l,c,f,g,M)}catch(L){if(G(w),!(L instanceof T))throw L;_e(1,0)}}function Ip(r,s,l,c,f,g,M){var w=z();try{ve(r)(s,l,c,f,g,M)}catch(L){if(G(w),!(L instanceof T))throw L;_e(1,0)}}function Up(r,s,l){var c=z();try{ve(r)(s,l)}catch(f){if(G(c),!(f instanceof T))throw f;_e(1,0)}}function Np(r,s,l,c,f,g){var M=z();try{ve(r)(s,l,c,f,g)}catch(w){if(G(M),!(w instanceof T))throw w;_e(1,0)}}function Op(r,s,l,c){var f=z();try{ve(r)(s,l,c)}catch(g){if(G(f),!(g instanceof T))throw g;_e(1,0)}}function kp(r){var s=z();try{return ve(r)()}catch(l){if(G(s),!(l instanceof T))throw l;return _e(1,0),0n}}function Bp(r,s,l,c,f,g){var M=z();try{ve(r)(s,l,c,f,g)}catch(w){if(G(M),!(w instanceof T))throw w;_e(1,0)}}function zp(r,s,l,c){var f=z();try{return ve(r)(s,l,c)}catch(g){if(G(f),!(g instanceof T))throw g;_e(1,0)}}function Hp(r,s,l,c,f,g,M,w,L,W,Y,ae){var de=z();try{return ve(r)(s,l,c,f,g,M,w,L,W,Y,ae)}catch(ce){if(G(de),!(ce instanceof T))throw ce;_e(1,0)}}function Vp(r,s,l,c,f,g,M,w,L,W,Y,ae,de,ce,ge,Xe){var ct=z();try{ve(r)(s,l,c,f,g,M,w,L,W,Y,ae,de,ce,ge,Xe)}catch(ut){if(G(ct),!(ut instanceof T))throw ut;_e(1,0)}}var Xl;function Gp(){Ol(),q()}function da(){if(Fe>0){Qe=da;return}if(Gp(),Ye(),Fe>0){Qe=da;return}function r(){var s;D(!Xl),Xl=!0,t.calledRun=!0,!B&&(ke(),Oe==null||Oe(t),(s=t.onRuntimeInitialized)==null||s.call(t),re("onRuntimeInitialized"),D(!t._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),yt())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),r()},1)):r(),P()}function Wp(){var r=O,s=I,l=!1;O=I=c=>{l=!0};try{ua(0),["stdout","stderr"].forEach(c=>{var L;var f=S.analyzePath("/dev/"+c);if(f){var g=f.object,M=g.rdev,w=Pe.ttys[M];(L=w==null?void 0:w.output)!=null&&L.length&&(l=!0)}})}catch{}O=r,I=s,l&&Ie("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}function Xp(){if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();re("preInit")}Xp(),da(),it?e=t:e=new Promise((r,s)=>{Oe=r,Ze=s});for(const r of Object.keys(t))r in i||Object.defineProperty(i,r,{configurable:!0,get(){j(`Access to module property ('${r}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return e},mn=Uint8Array,ar=Uint16Array,Ly=Int32Array,Nu=new mn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ou=new mn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Fy=new mn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ku=function(i,e){for(var t=new ar(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var a=new Ly(t[30]),n=1;n<30;++n)for(var o=t[n];o<t[n+1];++o)a[o]=o-t[n]<<5|n;return{b:t,r:a}},Bu=ku(Nu,2),zu=Bu.b,Iy=Bu.r;zu[28]=258,Iy[258]=28;var Uy=ku(Ou,0),Ny=Uy.b,Go=new ar(32768);for(var Ut=0;Ut<32768;++Ut){var li=(Ut&43690)>>1|(Ut&21845)<<1;li=(li&52428)>>2|(li&13107)<<2,li=(li&61680)>>4|(li&3855)<<4,Go[Ut]=((li&65280)>>8|(li&255)<<8)>>1}var Lr=function(i,e,t){for(var n=i.length,a=0,o=new ar(e);a<n;++a)i[a]&&++o[i[a]-1];var u=new ar(e);for(a=1;a<e;++a)u[a]=u[a-1]+o[a-1]<<1;var h;if(t){h=new ar(1<<e);var p=15-e;for(a=0;a<n;++a)if(i[a])for(var d=a<<4|i[a],v=e-i[a],_=u[i[a]-1]++<<v,x=_|(1<<v)-1;_<=x;++_)h[Go[_]>>p]=d}else for(h=new ar(n),a=0;a<n;++a)i[a]&&(h[a]=Go[u[i[a]-1]++]>>15-i[a]);return h},Gr=new mn(288);for(var Ut=0;Ut<144;++Ut)Gr[Ut]=8;for(var Ut=144;Ut<256;++Ut)Gr[Ut]=9;for(var Ut=256;Ut<280;++Ut)Gr[Ut]=7;for(var Ut=280;Ut<288;++Ut)Gr[Ut]=8;var Hu=new mn(32);for(var Ut=0;Ut<32;++Ut)Hu[Ut]=5;var Oy=Lr(Gr,9,1),ky=Lr(Hu,5,1),ja=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Rn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},qa=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},By=function(i){return(i+7)/8|0},sl=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new mn(i.subarray(e,t))},zy=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],dn=function(i,e,t){var n=new Error(e||zy[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,dn),!t)throw n;return n},Hy=function(i,e,t,n){var a=i.length,o=n?n.length:0;if(!a||e.f&&!e.l)return t||new mn(0);var u=!t,h=u||e.i!=2,p=e.i;u&&(t=new mn(a*3));var d=function(Be){var je=t.length;if(Be>je){var N=new mn(Math.max(je*2,Be));N.set(t),t=N}},v=e.f||0,_=e.p||0,x=e.b||0,E=e.l,A=e.d,R=e.m,y=e.n,m=a*8;do{if(!E){v=Rn(i,_,1);var O=Rn(i,_+1,3);if(_+=3,O)if(O==1)E=Oy,A=ky,R=9,y=5;else if(O==2){var D=Rn(i,_,31)+257,H=Rn(i,_+10,15)+4,q=D+Rn(i,_+5,31)+1;_+=14;for(var P=new mn(q),T=new mn(19),k=0;k<H;++k)T[Fy[k]]=Rn(i,_+k*3,7);_+=H*3;for(var K=ja(T),re=(1<<K)-1,Q=Lr(T,K,1),k=0;k<q;){var he=Q[Rn(i,_,re)];_+=he&15;var I=he>>4;if(I<16)P[k++]=I;else{var oe=0,xe=0;for(I==16?(xe=3+Rn(i,_,3),_+=2,oe=P[k-1]):I==17?(xe=3+Rn(i,_,7),_+=3):I==18&&(xe=11+Rn(i,_,127),_+=7);xe--;)P[k++]=oe}}var se=P.subarray(0,D),Ee=P.subarray(D);R=ja(se),y=ja(Ee),E=Lr(se,R,1),A=Lr(Ee,y,1)}else dn(1);else{var I=By(_)+4,F=i[I-4]|i[I-3]<<8,B=I+F;if(B>a){p&&dn(0);break}h&&d(x+F),t.set(i.subarray(I,B),x),e.b=x+=F,e.p=_=B*8,e.f=v;continue}if(_>m){p&&dn(0);break}}h&&d(x+131072);for(var De=(1<<R)-1,Oe=(1<<y)-1,Ze=_;;Ze=_){var oe=E[qa(i,_)&De],at=oe>>4;if(_+=oe&15,_>m){p&&dn(0);break}if(oe||dn(2),at<256)t[x++]=at;else if(at==256){Ze=_,E=null;break}else{var tt=at-254;if(at>264){var k=at-257,fe=Nu[k];tt=Rn(i,_,(1<<fe)-1)+zu[k],_+=fe}var Z=A[qa(i,_)&Oe],ne=Z>>4;Z||dn(3),_+=Z&15;var Ee=Ny[ne];if(ne>3){var fe=Ou[ne];Ee+=qa(i,_)&(1<<fe)-1,_+=fe}if(_>m){p&&dn(0);break}h&&d(x+131072);var te=x+tt;if(x<Ee){var pe=o-Ee,Ne=Math.min(Ee,te);for(pe+x<0&&dn(3);x<Ne;++x)t[x]=n[pe+x]}for(;x<te;++x)t[x]=t[x-Ee]}}e.l=E,e.p=Ze,e.b=x,e.f=v,E&&(v=1,e.m=R,e.d=A,e.n=y)}while(!v);return x!=t.length&&u?sl(t,0,x):t.subarray(0,x)},Vy=new mn(0),Bn=function(i,e){return i[e]|i[e+1]<<8},vn=function(i,e){return(i[e]|i[e+1]<<8|i[e+2]<<16|i[e+3]<<24)>>>0},Ya=function(i,e){return vn(i,e)+vn(i,e+4)*4294967296};function Gy(i,e){return Hy(i,{i:2},e&&e.out,e&&e.dictionary)}var Wo=typeof TextDecoder<"u"&&new TextDecoder,Wy=0;try{Wo.decode(Vy,{stream:!0}),Wy=1}catch{}var Xy=function(i){for(var e="",t=0;;){var n=i[t++],a=(n>127)+(n>223)+(n>239);if(t+a>i.length)return{s:e,r:sl(i,t-1)};a?a==3?(n=((n&15)<<18|(i[t++]&63)<<12|(i[t++]&63)<<6|i[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):a&1?e+=String.fromCharCode((n&31)<<6|i[t++]&63):e+=String.fromCharCode((n&15)<<12|(i[t++]&63)<<6|i[t++]&63):e+=String.fromCharCode(n)}};function $y(i,e){if(e){for(var t="",n=0;n<i.length;n+=16384)t+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return t}else{if(Wo)return Wo.decode(i);var a=Xy(i),o=a.s,t=a.r;return t.length&&dn(8),o}}var jy=function(i,e){return e+30+Bn(i,e+26)+Bn(i,e+28)},qy=function(i,e,t){var n=Bn(i,e+28),a=Bn(i,e+30),o=$y(i.subarray(e+46,e+46+n),!(Bn(i,e+8)&2048)),u=e+46+n,h=Yy(i,u,a,t,vn(i,e+20),vn(i,e+24),vn(i,e+42)),p=h[0],d=h[1],v=h[2];return[Bn(i,e+10),p,d,o,u+a+Bn(i,e+32),v]},Yy=function(i,e,t,n,a,o,u){var h=a==4294967295,p=o==4294967295,d=u==4294967295,v=e+t,_=h+p+d;if(n&&_){for(;e+4<v;e+=4+Bn(i,e+2))if(Bn(i,e)==1)return[h?Ya(i,e+4+8*p):a,p?Ya(i,e+4):o,d?Ya(i,e+4+8*(p+h)):u,1];n<2&&dn(13)}return[a,o,u,0]};function Ky(i,e){for(var t={},n=i.length-22;vn(i,n)!=101010256;--n)(!n||i.length-n>65558)&&dn(13);var a=Bn(i,n+8);if(!a)return{};var o=vn(i,n+16),u=vn(i,n-20)==117853008;if(u){var h=vn(i,n-12);u=vn(i,h)==101075792,u&&(a=vn(i,h+32),o=vn(i,h+48))}for(var p=0;p<a;++p){var d=qy(i,o,u),v=d[0],_=d[1],x=d[2],E=d[3],A=d[4],R=d[5],y=jy(i,R);o=A,v?v==8?t[E]=Gy(i.subarray(y,y+_),{out:new mn(x)}):dn(14,"unknown compression type "+v):t[E]=sl(i,y,y+_)}return t}function Zy(i){var y,m;if(i.length<12||String.fromCharCode(...i.subarray(0,6))!=="NUMPY")throw new Error("NPZ 中包含无效的 NPY 数组");const e=new DataView(i.buffer,i.byteOffset,i.byteLength),t=i[6],n=t===1?e.getUint16(8,!0):e.getUint32(8,!0),a=t===1?10:12,o=new TextDecoder(t===3?"utf-8":"latin1").decode(i.subarray(a,a+n)),u=(y=/['"]descr['"]\s*:\s*['"]([^'"]+)['"]/.exec(o))==null?void 0:y[1],h=(m=/['"]shape['"]\s*:\s*\(([^)]*)\)/.exec(o))==null?void 0:m[1];if(!u||h==null||/['"]fortran_order['"]\s*:\s*True/.test(o))throw new Error("不支持的 NPY 数组布局");const p=h.split(",").map(O=>O.trim()).filter(Boolean).map(Number);if(p.some(O=>!Number.isSafeInteger(O)||O<0))throw new Error("NPY 数组形状无效");const d=p.reduce((O,I)=>O*I,1),v=u.slice(1),_=u[0]!==">",E={f4:4,f8:8,i4:4,i8:8,u4:4,u8:8}[v];if(!E||a+n+d*E>i.length)throw new Error(`不支持或损坏的 NPY 数值类型：${u}`);const A=a+n,R=new Float64Array(d);for(let O=0;O<d;O++){const I=A+O*E;v==="f4"?R[O]=e.getFloat32(I,_):v==="f8"?R[O]=e.getFloat64(I,_):v==="i4"?R[O]=e.getInt32(I,_):v==="u4"?R[O]=e.getUint32(I,_):v==="i8"?R[O]=Number(e.getBigInt64(I,_)):R[O]=Number(e.getBigUint64(I,_))}return{shape:p,numbers:R}}function Ka(i,e){return i.length===e.length&&i.every((t,n)=>e[n]==null||t===e[n])}function Jy(i,e,t){var R;const n=Ky(new Uint8Array(i)),a=y=>n[`${y}.npy`]?Zy(n[`${y}.npy`]):null,o=a("fps"),u=o==null?void 0:o.numbers[0];if(!Number.isFinite(u)||u<=0||u>1e3)throw new Error("NPZ 缺少有效的 fps");const h=n["body_pos_w.npy"]&&n["body_quat_w.npy"]&&n["joint_pos.npy"],p=n["body_positions.npy"]&&n["body_rotations.npy"]&&n["dof_positions.npy"];if(!h&&!p)throw new Error("仅支持 S17 tracking 或当前数据集的 raw retarget NPZ");const d=a(h?"body_pos_w":"body_positions"),v=a(h?"body_quat_w":"body_rotations"),_=a(h?"joint_pos":"dof_positions"),x=d.shape[0],E=d.shape[1];if(!Number.isSafeInteger(x)||x<1||x>1e5||!Ka(d.shape,[x,E,3])||!Ka(v.shape,[x,E,4])||!Ka(_.shape,[x,21])||p&&E!==22||((R=e.joint_qposadr)==null?void 0:R.length)!==21)throw new Error("NPZ 帧数、底座或 21 个关节的形状不符合 S17 模型");const A=new Float32Array(x*e.nq);for(let y=0;y<x;y++){const m=y*e.nq;A.set(t,m);const O=y*E*3,I=y*E*4;for(let B=0;B<3;B++)A[m+e.root_qposadr+B]=d.numbers[O+B];const F=Math.hypot(...v.numbers.subarray(I,I+4));if(!Number.isFinite(F)||F<1e-6)throw new Error(`第 ${y+1} 帧四元数无效`);for(let B=0;B<4;B++)A[m+e.root_qposadr+3+B]=v.numbers[I+B]/F;for(let B=0;B<21;B++)A[m+e.joint_qposadr[B]]=_.numbers[y*21+B]}if(!A.every(Number.isFinite))throw new Error("NPZ 中存在 NaN 或无限大数值");return{frames:A,count:x,fps:u}}const Dr=document.querySelector("#status"),Za=document.querySelector("#viewport"),Ja=document.querySelector("#toggle"),Di=document.querySelector("#seek"),Qy=document.querySelector("#time"),eS=document.querySelector("#frame"),ir=document.querySelector("#contactToggle"),ci=document.querySelector("#motionList"),Li=document.querySelector("#libraryStatus"),Us=document.querySelector("#baseHeight");function tS(i){return new Promise((e,t)=>i.readEntries(e,t))}async function Vu(i,e=""){if(i.isFile){const a=await new Promise((o,u)=>i.file(o,u));return a.name.toLowerCase().endsWith(".npz")?[{file:a,path:e+a.name}]:[]}if(!i.isDirectory)return[];const t=i.createReader(),n=[];for(;;){const a=await tS(t);if(!a.length)break;for(const o of a)n.push(...await Vu(o,`${e}${i.name}/`))}return n}async function Cr(i,e="arrayBuffer"){const t=await fetch(new URL(`./${i}`,document.baseURI));if(!t.ok)throw new Error(`${i}: HTTP ${t.status}`);return t[e]()}function nS(i,e){const t=i.mesh_vertadr[e]*3,n=i.mesh_vertnum[e],a=i.mesh_faceadr[e]*3,o=i.mesh_facenum[e],u=Float32Array.from(i.mesh_vert.subarray(t,t+n*3)),h=Uint32Array.from(i.mesh_face.subarray(a,a+o*3)),p=new Fn;return p.setAttribute("position",new yn(u,3)),p.setIndex(new yn(h,1)),p.computeVertexNormals(),p}function nu(i=""){return{name:i,folders:new Map,files:[]}}function iS(i){const e=nu();for(const t of i){const n=t.path.split("/").filter(Boolean);let a=e;for(const o of n.slice(0,-1))a.folders.has(o)||a.folders.set(o,nu(o)),a=a.folders.get(o);a.files.push(t)}return e}function Gu(i){return i.files.length+Array.from(i.folders.values()).reduce((e,t)=>e+Gu(t),0)}async function rS(){const i=await Cr("motion/meta.json","json"),e=await Cr("motion/frames.bin"),t=new Float32Array(e);if(t.length!==i.frames*i.nq)throw new Error("动作数据长度与元数据不一致");Dr.textContent="正在加载 MuJoCo WASM 与机器人模型…";const n=await Dy();for(const fe of["/working","/working/xml","/working/meshes"])n.FS.mkdir(fe);const a=await Cr("model/xml/scene_flat.xml","text"),o=await Cr("model/xml/biped_s17.xml","text");n.FS.writeFile("/working/xml/scene_flat.xml",a),n.FS.writeFile("/working/xml/biped_s17.xml",o),await Promise.all(i.meshes.map(async fe=>{const Z=await Cr(`model/meshes/${encodeURIComponent(fe)}`);n.FS.writeFile(`/working/meshes/${fe}`,new Uint8Array(Z))}));const u=n.MjModel.mj_loadXML("/working/xml/scene_flat.xml"),h=new n.MjData(u);if(u.nq!==i.nq)throw new Error(`模型 nq=${u.nq}，动作 nq=${i.nq}`);const p=Float32Array.from(h.qpos),d=new _g;d.background=new mt("#141c29"),d.add(new Tg(15135231,3820646,2));const v=new Ag(16777215,2.4);v.position.set(-2,-3,6),d.add(v);const _=new En(new Vr(200,200),new Tc({color:2306370,roughness:1}));_.position.z=-.004,d.add(_);const x=new Cg(20,40,5796747,3227987);x.rotateX(Math.PI/2),x.position.z=.001,d.add(x);const E=new xn(45,1,.02,100);E.up.set(0,0,1),E.position.set(2.1,-2.8,1.8);const A=new dy({antialias:!0});A.setPixelRatio(Math.min(window.devicePixelRatio,2)),A.outputColorSpace=pn,Za.appendChild(A.domElement);const R=new my(E,A.domElement);R.target.set(0,0,.85),R.enableDamping=!0,R.update();const y=new rt(0,0),m=()=>{const{width:fe,height:Z}=Za.getBoundingClientRect();A.setSize(fe,Z,!1),E.aspect=fe/Z,E.updateProjectionMatrix()};new ResizeObserver(m).observe(Za),m();const O=new Map,I=[],F=n.mjtGeom.mjGEOM_MESH.value;for(let fe=0;fe<u.ngeom;fe++){if(u.geom_type[fe]!==F||u.geom_group[fe]!==1)continue;const Z=u.geom_dataid[fe];O.has(Z)||O.set(Z,nS(u,Z));const ne=Array.from(u.geom_rgba.subarray(fe*4,fe*4+4)),te=new Tc({color:new mt(ne[0],ne[1],ne[2]),roughness:.65,metalness:.12,side:Cn}),pe=new En(O.get(Z),te);d.add(pe),I.push([fe,pe])}if(!I.length)throw new Error("模型没有可显示的 S17 网格");const B=new nl(.016,.016,.004,18);B.rotateX(Math.PI/2);const D=new el({color:16767830,side:Cn}),H=[],q=new Set(i.foot_body_ids);let P=!0;function T(){for(const ne of H)ne.visible=!1;if(!P)return;const fe=h.contact;let Z=0;for(let ne=0;ne<fe.size();ne++){const te=fe.get(ne),[pe,Ne]=te.geom,Be=pe===i.floor_geom_id?Ne:Ne===i.floor_geom_id?pe:-1;if(Be>=0&&q.has(u.geom_bodyid[Be])){if(!H[Z]){const N=new En(B,D);N.renderOrder=2,d.add(N),H.push(N)}const je=te.pos;H[Z].position.set(je[0],je[1],Math.max(.003,je[2]+.004)),H[Z].visible=!0,Z++}te.delete()}fe.delete(),ir.textContent=`接触点：开 (C) · ${Z}`}let k={frames:t,count:i.frames,fps:i.fps,name:i.source},K=.77,re=0,Q=0,he=!1,oe=performance.now(),xe=0;Di.max=String(k.count-1),Di.disabled=!1,Ja.disabled=!1,ir.disabled=!1,Dr.textContent=`${k.name} · ${k.fps} FPS · ${I.length} 个网格`,ci.querySelector("[data-default]").textContent=`内置示例 · ${i.source}`;function se(){h.qpos.set(k.frames.subarray(Q*i.nq,(Q+1)*i.nq));const fe=i.root_qposadr+2,Z=K-k.frames[fe];h.qpos[fe]+=Z,n.mj_forward(u,h);const ne=h.qpos[0]-y.x,te=h.qpos[1]-y.y;E.position.x+=ne,E.position.y+=te,R.target.x+=ne,R.target.y+=te,y.set(h.qpos[0],h.qpos[1]);const pe=Z-re;E.position.z+=pe,R.target.z+=pe,re=Z;for(const[Ne,Be]of I){const je=Ne*3,N=Ne*9,it=h.geom_xpos,He=h.geom_xmat;Be.matrixAutoUpdate=!1,Be.matrix.set(He[N],He[N+1],He[N+2],it[je],He[N+3],He[N+4],He[N+5],it[je+1],He[N+6],He[N+7],He[N+8],it[je+2],0,0,0,1),Be.matrixWorldNeedsUpdate=!0}T(),Di.value=String(Q),Qy.textContent=`${(Q/k.fps).toFixed(2)} / ${((k.count-1)/k.fps).toFixed(2)} s`,eS.textContent=`${Q+1} / ${k.count}`}function Ee(fe){he=fe,Ja.textContent=he?"暂停":"播放",oe=performance.now(),xe=0}Ja.addEventListener("click",()=>Ee(!he)),ir.addEventListener("click",()=>{P=!P,ir.setAttribute("aria-pressed",String(P)),ir.textContent=P?"接触点：开 (C)":"接触点：关 (C)",T()}),Us.addEventListener("change",()=>{const fe=Number(Us.value);if(!Us.value||!Number.isFinite(fe)||fe<0||fe>3){Us.value=String(K);return}K=fe,se()}),Di.addEventListener("input",()=>{Ee(!1),Q=Number(Di.value),se()}),window.addEventListener("keydown",fe=>{fe.target instanceof HTMLInputElement||(fe.code==="Space"&&(fe.preventDefault(),Ee(!he)),fe.code==="KeyC"&&ir.click(),(fe.code==="ArrowRight"||fe.code==="ArrowLeft")&&(fe.preventDefault(),Ee(!1),Q=Math.max(0,Math.min(k.count-1,Q+(fe.code==="ArrowRight"?1:-1))),se()))});async function De(fe,Z){Ee(!1),Li.textContent=`正在读取 ${fe.path}…`;try{k={...await Jy(await fe.file.arrayBuffer(),i,p),name:fe.file.name},Q=0,Di.max=String(k.count-1),Dr.textContent=`${k.name} · ${k.fps} FPS · ${I.length} 个网格`,ci.querySelectorAll("button").forEach(te=>te.classList.remove("active")),Z.classList.add("active"),se(),Ee(!0),Li.textContent=`已加载 ${k.count} 帧 · ${fe.path}`}catch(ne){console.error(ne),Li.textContent=`加载失败：${ne.message}`}}function Oe(fe){const Z=fe.filter(Be=>Be.file.name.toLowerCase().endsWith(".npz")).sort((Be,je)=>Be.path.localeCompare(je.path,"zh-CN"));ci.querySelectorAll("[data-local]").forEach(Be=>Be.remove());const ne=(Be,je)=>Be.localeCompare(je,"zh-CN",{numeric:!0});function te(Be,je){const N=document.createElement("li"),it=document.createElement("button");return it.textContent=je.file.name,it.title=je.path,it.addEventListener("click",()=>De(je,it)),N.appendChild(it),Be.appendChild(N),N}function pe(Be,je,N){const it=document.createElement("li"),He=document.createElement("details");He.open=N===0;const Ye=document.createElement("summary");Ye.append(document.createTextNode(je.name));const ke=document.createElement("span");ke.className="count",ke.textContent=String(Gu(je)),Ye.appendChild(ke),He.appendChild(Ye);const yt=document.createElement("ul");for(const Fe of Array.from(je.folders.values()).sort((Qe,wt)=>ne(Qe.name,wt.name)))pe(yt,Fe,N+1);for(const Fe of je.files.sort((Qe,wt)=>ne(Qe.file.name,wt.file.name)))te(yt,Fe);return He.appendChild(yt),it.appendChild(He),Be.appendChild(it),it}const Ne=iS(Z);for(const Be of Array.from(Ne.folders.values()).sort((je,N)=>ne(je.name,N.name)))pe(ci,Be,0).dataset.local="true";for(const Be of Ne.files.sort((je,N)=>ne(je.file.name,N.file.name)))te(ci,Be).dataset.local="true";Li.textContent=Z.length?`找到 ${Z.length} 个 NPZ，点击文件名播放`:"没有找到 NPZ 文件"}const Ze=document.querySelector("#fileInput"),at=document.querySelector("#folderInput");document.querySelector("#chooseFiles").addEventListener("click",()=>Ze.click()),document.querySelector("#chooseFolder").addEventListener("click",()=>at.click());for(const fe of[Ze,at])fe.addEventListener("change",()=>{Oe(Array.from(fe.files,Z=>({file:Z,path:Z.webkitRelativePath||Z.name}))),fe.value=""});window.addEventListener("dragover",fe=>{fe.preventDefault(),document.body.classList.add("dragging")}),window.addEventListener("dragleave",fe=>{fe.relatedTarget||document.body.classList.remove("dragging")}),window.addEventListener("drop",async fe=>{fe.preventDefault(),document.body.classList.remove("dragging");const Z=Array.from(fe.dataTransfer.items,ne=>{var te;return(te=ne.webkitGetAsEntry)==null?void 0:te.call(ne)}).filter(Boolean);if(!Z.length){Oe(Array.from(fe.dataTransfer.files,ne=>({file:ne,path:ne.name})));return}Li.textContent="正在扫描文件夹…";try{const ne=(await Promise.all(Z.map(te=>Vu(te)))).flat();Oe(ne)}catch(ne){Li.textContent=`读取文件夹失败：${ne.message}`}}),ci.querySelector("[data-default]").addEventListener("click",()=>{k={frames:t,count:i.frames,fps:i.fps,name:i.source},Q=0,Di.max=String(k.count-1),Dr.textContent=`${k.name} · ${k.fps} FPS · ${I.length} 个网格`,ci.querySelectorAll("button").forEach(fe=>fe.classList.remove("active")),ci.querySelector("[data-default]").classList.add("active"),se(),Ee(!0),Li.textContent="内置示例已就绪"}),se(),Ee(!0);function tt(fe){if(requestAnimationFrame(tt),he){xe+=Math.min((fe-oe)/1e3,.25);const Z=Math.floor(xe*k.fps);Z&&(Q=(Q+Z)%k.count,xe-=Z/k.fps,se())}oe=fe,R.update(),A.render(d,E)}requestAnimationFrame(tt)}rS().catch(i=>{console.error(i),Dr.textContent=`加载失败：${i.message}`});const sS=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));

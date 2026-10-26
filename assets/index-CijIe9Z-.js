var s_=Object.defineProperty;var a_=(i,e,t)=>e in i?s_(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Tn=(i,e,t)=>a_(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ko="180",lr={ROTATE:0,DOLLY:1,PAN:2},ar={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},o_=0,tl=1,c_=2,lu=1,l_=2,Jn=3,pi=0,cn=1,Cn=2,fi=0,ur=1,nl=2,il=3,rl=4,u_=5,Fi=100,h_=101,f_=102,d_=103,p_=104,m_=200,__=201,g_=202,v_=203,ro=204,so=205,x_=206,y_=207,E_=208,S_=209,M_=210,T_=211,w_=212,b_=213,A_=214,ao=0,oo=1,co=2,fr=3,lo=4,uo=5,ho=6,fo=7,uu=0,R_=1,C_=2,di=0,P_=1,D_=2,L_=3,F_=4,I_=5,U_=6,N_=7,hu=300,dr=301,pr=302,po=303,mo=304,Zs=306,_o=1e3,Ui=1001,go=1002,Ln=1003,O_=1004,us=1005,zn=1006,va=1007,Ni=1008,Vn=1009,fu=1010,du=1011,Fr=1012,Zo=1013,Oi=1014,Qn=1015,kr=1016,Jo=1017,Qo=1018,Ir=1020,pu=35902,mu=35899,_u=1021,gu=1022,Dn=1023,Ur=1026,Nr=1027,vu=1028,ec=1029,xu=1030,tc=1031,nc=1033,Bs=33776,zs=33777,Hs=33778,Vs=33779,vo=35840,xo=35841,yo=35842,Eo=35843,So=36196,Mo=37492,To=37496,wo=37808,bo=37809,Ao=37810,Ro=37811,Co=37812,Po=37813,Do=37814,Lo=37815,Fo=37816,Io=37817,Uo=37818,No=37819,Oo=37820,ko=37821,Bo=36492,zo=36494,Ho=36495,Vo=36283,Go=36284,Wo=36285,Xo=36286,k_=3200,B_=3201,yu=0,z_=1,hi="",pn="srgb",mr="srgb-linear",$s="linear",Rt="srgb",Vi=7680,sl=519,H_=512,V_=513,G_=514,Eu=515,W_=516,X_=517,$_=518,j_=519,al=35044,ol="300 es",Hn=2e3,js=2001;class zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const a=n[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let o=0,u=a.length;o<u;o++)a[o].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gs=Math.PI/180,$o=180/Math.PI;function Br(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function _t(i,e,t){return Math.max(e,Math.min(t,i))}function q_(i,e){return(i%e+e)%e}function xa(i,e,t){return(1-t)*i+t*e}function wr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function an(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Y_={DEG2RAD:Gs};class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),o=this.x-e.x,u=this.y-e.y;return this.x=o*n-u*a+e.x,this.y=o*a+u*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ki{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,o,u,h){let p=n[a+0],d=n[a+1],v=n[a+2],m=n[a+3];const x=o[u+0],y=o[u+1],A=o[u+2],R=o[u+3];if(h===0){e[t+0]=p,e[t+1]=d,e[t+2]=v,e[t+3]=m;return}if(h===1){e[t+0]=x,e[t+1]=y,e[t+2]=A,e[t+3]=R;return}if(m!==R||p!==x||d!==y||v!==A){let E=1-h;const _=p*x+d*y+v*A+m*R,O=_>=0?1:-1,I=1-_*_;if(I>Number.EPSILON){const k=Math.sqrt(I),D=Math.atan2(k,_*O);E=Math.sin(E*D)/k,h=Math.sin(h*D)/k}const F=h*O;if(p=p*E+x*F,d=d*E+y*F,v=v*E+A*F,m=m*E+R*F,E===1-h){const k=1/Math.sqrt(p*p+d*d+v*v+m*m);p*=k,d*=k,v*=k,m*=k}}e[t]=p,e[t+1]=d,e[t+2]=v,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,a,o,u){const h=n[a],p=n[a+1],d=n[a+2],v=n[a+3],m=o[u],x=o[u+1],y=o[u+2],A=o[u+3];return e[t]=h*A+v*m+p*y-d*x,e[t+1]=p*A+v*x+d*m-h*y,e[t+2]=d*A+v*y+h*x-p*m,e[t+3]=v*A-h*m-p*x-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,o=e._z,u=e._order,h=Math.cos,p=Math.sin,d=h(n/2),v=h(a/2),m=h(o/2),x=p(n/2),y=p(a/2),A=p(o/2);switch(u){case"XYZ":this._x=x*v*m+d*y*A,this._y=d*y*m-x*v*A,this._z=d*v*A+x*y*m,this._w=d*v*m-x*y*A;break;case"YXZ":this._x=x*v*m+d*y*A,this._y=d*y*m-x*v*A,this._z=d*v*A-x*y*m,this._w=d*v*m+x*y*A;break;case"ZXY":this._x=x*v*m-d*y*A,this._y=d*y*m+x*v*A,this._z=d*v*A+x*y*m,this._w=d*v*m-x*y*A;break;case"ZYX":this._x=x*v*m-d*y*A,this._y=d*y*m+x*v*A,this._z=d*v*A-x*y*m,this._w=d*v*m+x*y*A;break;case"YZX":this._x=x*v*m+d*y*A,this._y=d*y*m+x*v*A,this._z=d*v*A-x*y*m,this._w=d*v*m-x*y*A;break;case"XZY":this._x=x*v*m-d*y*A,this._y=d*y*m-x*v*A,this._z=d*v*A+x*y*m,this._w=d*v*m+x*y*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],o=t[8],u=t[1],h=t[5],p=t[9],d=t[2],v=t[6],m=t[10],x=n+h+m;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(v-p)*y,this._y=(o-d)*y,this._z=(u-a)*y}else if(n>h&&n>m){const y=2*Math.sqrt(1+n-h-m);this._w=(v-p)/y,this._x=.25*y,this._y=(a+u)/y,this._z=(o+d)/y}else if(h>m){const y=2*Math.sqrt(1+h-n-m);this._w=(o-d)/y,this._x=(a+u)/y,this._y=.25*y,this._z=(p+v)/y}else{const y=2*Math.sqrt(1+m-n-h);this._w=(u-a)/y,this._x=(o+d)/y,this._y=(p+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,o=e._z,u=e._w,h=t._x,p=t._y,d=t._z,v=t._w;return this._x=n*v+u*h+a*d-o*p,this._y=a*v+u*p+o*h-n*d,this._z=o*v+u*d+n*p-a*h,this._w=u*v-n*h-a*p-o*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,a=this._y,o=this._z,u=this._w;let h=u*e._w+n*e._x+a*e._y+o*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=u,this._x=n,this._y=a,this._z=o,this;const p=1-h*h;if(p<=Number.EPSILON){const y=1-t;return this._w=y*u+t*this._w,this._x=y*n+t*this._x,this._y=y*a+t*this._y,this._z=y*o+t*this._z,this.normalize(),this}const d=Math.sqrt(p),v=Math.atan2(d,h),m=Math.sin((1-t)*v)/d,x=Math.sin(t*v)/d;return this._w=u*m+this._w*x,this._x=n*m+this._x*x,this._y=a*m+this._y*x,this._z=o*m+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,n=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*a,this.y=o[1]*t+o[4]*n+o[7]*a,this.z=o[2]*t+o[5]*n+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,o=e.elements,u=1/(o[3]*t+o[7]*n+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*a+o[12])*u,this.y=(o[1]*t+o[5]*n+o[9]*a+o[13])*u,this.z=(o[2]*t+o[6]*n+o[10]*a+o[14])*u,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,o=e.x,u=e.y,h=e.z,p=e.w,d=2*(u*a-h*n),v=2*(h*t-o*a),m=2*(o*n-u*t);return this.x=t+p*d+u*m-h*v,this.y=n+p*v+h*d-o*m,this.z=a+p*m+o*v-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*a,this.y=o[1]*t+o[5]*n+o[9]*a,this.z=o[2]*t+o[6]*n+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,o=e.z,u=t.x,h=t.y,p=t.z;return this.x=a*p-o*h,this.y=o*u-n*p,this.z=n*h-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ya.copy(this).projectOnVector(e),this.sub(ya)}reflect(e){return this.sub(ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ya=new J,cl=new ki;class ct{constructor(e,t,n,a,o,u,h,p,d){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,o,u,h,p,d)}set(e,t,n,a,o,u,h,p,d){const v=this.elements;return v[0]=e,v[1]=a,v[2]=h,v[3]=t,v[4]=o,v[5]=p,v[6]=n,v[7]=u,v[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,o=this.elements,u=n[0],h=n[3],p=n[6],d=n[1],v=n[4],m=n[7],x=n[2],y=n[5],A=n[8],R=a[0],E=a[3],_=a[6],O=a[1],I=a[4],F=a[7],k=a[2],D=a[5],z=a[8];return o[0]=u*R+h*O+p*k,o[3]=u*E+h*I+p*D,o[6]=u*_+h*F+p*z,o[1]=d*R+v*O+m*k,o[4]=d*E+v*I+m*D,o[7]=d*_+v*F+m*z,o[2]=x*R+y*O+A*k,o[5]=x*E+y*I+A*D,o[8]=x*_+y*F+A*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],u=e[4],h=e[5],p=e[6],d=e[7],v=e[8];return t*u*v-t*h*d-n*o*v+n*h*p+a*o*d-a*u*p}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],u=e[4],h=e[5],p=e[6],d=e[7],v=e[8],m=v*u-h*d,x=h*p-v*o,y=d*o-u*p,A=t*m+n*x+a*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=m*R,e[1]=(a*d-v*n)*R,e[2]=(h*n-a*u)*R,e[3]=x*R,e[4]=(v*t-a*p)*R,e[5]=(a*o-h*t)*R,e[6]=y*R,e[7]=(n*p-d*t)*R,e[8]=(u*t-n*o)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,o,u,h){const p=Math.cos(o),d=Math.sin(o);return this.set(n*p,n*d,-n*(p*u+d*h)+u+e,-a*d,a*p,-a*(-d*u+p*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(Ea.makeScale(e,t)),this}rotate(e){return this.premultiply(Ea.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ea.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ea=new ct;function Su(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function K_(){const i=qs("canvas");return i.style.display="block",i}const ll={};function Or(i){i in ll||(ll[i]=!0,console.warn(i))}function Z_(i,e,t){return new Promise(function(n,a){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}const ul=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hl=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function J_(){const i={enabled:!0,workingColorSpace:mr,spaces:{},convert:function(a,o,u){return this.enabled===!1||o===u||!o||!u||(this.spaces[o].transfer===Rt&&(a.r=ei(a.r),a.g=ei(a.g),a.b=ei(a.b)),this.spaces[o].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Rt&&(a.r=hr(a.r),a.g=hr(a.g),a.b=hr(a.b))),a},workingToColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},colorSpaceToWorking:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===hi?$s:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,u){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,o){return Or("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,o)},toWorkingColorSpace:function(a,o){return Or("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[mr]:{primaries:e,whitePoint:n,transfer:$s,toXYZ:ul,fromXYZ:hl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:e,whitePoint:n,transfer:Rt,toXYZ:ul,fromXYZ:hl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),i}const Mt=J_();function ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Gi;class Q_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gi===void 0&&(Gi=qs("canvas")),Gi.width=e.width,Gi.height=e.height;const a=Gi.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),n=Gi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),o=a.data;for(let u=0;u<o.length;u++)o[u]=ei(o[u]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ei(t[n]/255)*255):t[n]=ei(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eg=0;class ic{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=Br(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let u=0,h=a.length;u<h;u++)a[u].isDataTexture?o.push(Sa(a[u].image)):o.push(Sa(a[u]))}else o=Sa(a);n.url=o}return t||(e.images[this.uuid]=n),n}}function Sa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Q_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tg=0;const Ma=new J;class ln extends zi{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,n=Ui,a=Ui,o=zn,u=Ni,h=Dn,p=Vn,d=ln.DEFAULT_ANISOTROPY,v=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=Br(),this.name="",this.source=new ic(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=o,this.minFilter=u,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=p,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ma).x}get height(){return this.source.getSize(Ma).y}get depth(){return this.source.getSize(Ma).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}a&&n&&a.isVector2&&n.isVector2||a&&n&&a.isVector3&&n.isVector3||a&&n&&a.isMatrix3&&n.isMatrix3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _o:e.x=e.x-Math.floor(e.x);break;case Ui:e.x=e.x<0?0:1;break;case go:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _o:e.y=e.y-Math.floor(e.y);break;case Ui:e.y=e.y<0?0:1;break;case go:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=hu;ln.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,n=0,a=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,o=this.w,u=e.elements;return this.x=u[0]*t+u[4]*n+u[8]*a+u[12]*o,this.y=u[1]*t+u[5]*n+u[9]*a+u[13]*o,this.z=u[2]*t+u[6]*n+u[10]*a+u[14]*o,this.w=u[3]*t+u[7]*n+u[11]*a+u[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,o;const p=e.elements,d=p[0],v=p[4],m=p[8],x=p[1],y=p[5],A=p[9],R=p[2],E=p[6],_=p[10];if(Math.abs(v-x)<.01&&Math.abs(m-R)<.01&&Math.abs(A-E)<.01){if(Math.abs(v+x)<.1&&Math.abs(m+R)<.1&&Math.abs(A+E)<.1&&Math.abs(d+y+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(d+1)/2,F=(y+1)/2,k=(_+1)/2,D=(v+x)/4,z=(m+R)/4,q=(A+E)/4;return I>F&&I>k?I<.01?(n=0,a=.707106781,o=.707106781):(n=Math.sqrt(I),a=D/n,o=z/n):F>k?F<.01?(n=.707106781,a=0,o=.707106781):(a=Math.sqrt(F),n=D/a,o=q/a):k<.01?(n=.707106781,a=.707106781,o=0):(o=Math.sqrt(k),n=z/o,a=q/o),this.set(n,a,o,t),this}let O=Math.sqrt((E-A)*(E-A)+(m-R)*(m-R)+(x-v)*(x-v));return Math.abs(O)<.001&&(O=1),this.x=(E-A)/O,this.y=(m-R)/O,this.z=(x-v)/O,this.w=Math.acos((d+y+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ng extends zi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const a={width:e,height:t,depth:n.depth},o=new ln(a);this.textures=[];const u=n.count;for(let h=0;h<u;h++)this.textures[h]=o.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new ic(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends ng{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Mu extends ln{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ig extends ln{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zr{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=o.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,wn):wn.fromBufferAttribute(o,u),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hs.copy(n.boundingBox)),hs.applyMatrix4(e.matrixWorld),this.union(hs)}const a=e.children;for(let o=0,u=a.length;o<u;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),fs.subVectors(this.max,br),Wi.subVectors(e.a,br),Xi.subVectors(e.b,br),$i.subVectors(e.c,br),ni.subVectors(Xi,Wi),ii.subVectors($i,Xi),wi.subVectors(Wi,$i);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-wi.z,wi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,wi.z,0,-wi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-wi.y,wi.x,0];return!Ta(t,Wi,Xi,$i,fs)||(t=[1,0,0,0,1,0,0,0,1],!Ta(t,Wi,Xi,$i,fs))?!1:(ds.crossVectors(ni,ii),t=[ds.x,ds.y,ds.z],Ta(t,Wi,Xi,$i,fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const jn=[new J,new J,new J,new J,new J,new J,new J,new J],wn=new J,hs=new zr,Wi=new J,Xi=new J,$i=new J,ni=new J,ii=new J,wi=new J,br=new J,fs=new J,ds=new J,bi=new J;function Ta(i,e,t,n,a){for(let o=0,u=i.length-3;o<=u;o+=3){bi.fromArray(i,o);const h=a.x*Math.abs(bi.x)+a.y*Math.abs(bi.y)+a.z*Math.abs(bi.z),p=e.dot(bi),d=t.dot(bi),v=n.dot(bi);if(Math.max(-Math.max(p,d,v),Math.min(p,d,v))>h)return!1}return!0}const rg=new zr,Ar=new J,wa=new J;class Js{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):rg.setFromPoints(e).getCenter(n);let a=0;for(let o=0,u=e.length;o<u;o++)a=Math.max(a,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ar.subVectors(e,this.center);const t=Ar.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(Ar,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ar.copy(e.center).add(wa)),this.expandByPoint(Ar.copy(e.center).sub(wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const qn=new J,ba=new J,ps=new J,ri=new J,Aa=new J,ms=new J,Ra=new J;class rc{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){ba.copy(e).add(t).multiplyScalar(.5),ps.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(ba);const o=e.distanceTo(t)*.5,u=-this.direction.dot(ps),h=ri.dot(this.direction),p=-ri.dot(ps),d=ri.lengthSq(),v=Math.abs(1-u*u);let m,x,y,A;if(v>0)if(m=u*p-h,x=u*h-p,A=o*v,m>=0)if(x>=-A)if(x<=A){const R=1/v;m*=R,x*=R,y=m*(m+u*x+2*h)+x*(u*m+x+2*p)+d}else x=o,m=Math.max(0,-(u*x+h)),y=-m*m+x*(x+2*p)+d;else x=-o,m=Math.max(0,-(u*x+h)),y=-m*m+x*(x+2*p)+d;else x<=-A?(m=Math.max(0,-(-u*o+h)),x=m>0?-o:Math.min(Math.max(-o,-p),o),y=-m*m+x*(x+2*p)+d):x<=A?(m=0,x=Math.min(Math.max(-o,-p),o),y=x*(x+2*p)+d):(m=Math.max(0,-(u*o+h)),x=m>0?o:Math.min(Math.max(-o,-p),o),y=-m*m+x*(x+2*p)+d);else x=u>0?-o:o,m=Math.max(0,-(u*x+h)),y=-m*m+x*(x+2*p)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,m),a&&a.copy(ba).addScaledVector(ps,x),y}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const n=qn.dot(this.direction),a=qn.dot(qn)-n*n,o=e.radius*e.radius;if(a>o)return null;const u=Math.sqrt(o-a),h=n-u,p=n+u;return p<0?null:h<0?this.at(p,t):this.at(h,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,o,u,h,p;const d=1/this.direction.x,v=1/this.direction.y,m=1/this.direction.z,x=this.origin;return d>=0?(n=(e.min.x-x.x)*d,a=(e.max.x-x.x)*d):(n=(e.max.x-x.x)*d,a=(e.min.x-x.x)*d),v>=0?(o=(e.min.y-x.y)*v,u=(e.max.y-x.y)*v):(o=(e.max.y-x.y)*v,u=(e.min.y-x.y)*v),n>u||o>a||((o>n||isNaN(n))&&(n=o),(u<a||isNaN(a))&&(a=u),m>=0?(h=(e.min.z-x.z)*m,p=(e.max.z-x.z)*m):(h=(e.max.z-x.z)*m,p=(e.min.z-x.z)*m),n>p||h>a)||((h>n||n!==n)&&(n=h),(p<a||a!==a)&&(a=p),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,n,a,o){Aa.subVectors(t,e),ms.subVectors(n,e),Ra.crossVectors(Aa,ms);let u=this.direction.dot(Ra),h;if(u>0){if(a)return null;h=1}else if(u<0)h=-1,u=-u;else return null;ri.subVectors(this.origin,e);const p=h*this.direction.dot(ms.crossVectors(ri,ms));if(p<0)return null;const d=h*this.direction.dot(Aa.cross(ri));if(d<0||p+d>u)return null;const v=-h*ri.dot(Ra);return v<0?null:this.at(v/u,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,t,n,a,o,u,h,p,d,v,m,x,y,A,R,E){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,o,u,h,p,d,v,m,x,y,A,R,E)}set(e,t,n,a,o,u,h,p,d,v,m,x,y,A,R,E){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=a,_[1]=o,_[5]=u,_[9]=h,_[13]=p,_[2]=d,_[6]=v,_[10]=m,_[14]=x,_[3]=y,_[7]=A,_[11]=R,_[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,a=1/ji.setFromMatrixColumn(e,0).length(),o=1/ji.setFromMatrixColumn(e,1).length(),u=1/ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,o=e.z,u=Math.cos(n),h=Math.sin(n),p=Math.cos(a),d=Math.sin(a),v=Math.cos(o),m=Math.sin(o);if(e.order==="XYZ"){const x=u*v,y=u*m,A=h*v,R=h*m;t[0]=p*v,t[4]=-p*m,t[8]=d,t[1]=y+A*d,t[5]=x-R*d,t[9]=-h*p,t[2]=R-x*d,t[6]=A+y*d,t[10]=u*p}else if(e.order==="YXZ"){const x=p*v,y=p*m,A=d*v,R=d*m;t[0]=x+R*h,t[4]=A*h-y,t[8]=u*d,t[1]=u*m,t[5]=u*v,t[9]=-h,t[2]=y*h-A,t[6]=R+x*h,t[10]=u*p}else if(e.order==="ZXY"){const x=p*v,y=p*m,A=d*v,R=d*m;t[0]=x-R*h,t[4]=-u*m,t[8]=A+y*h,t[1]=y+A*h,t[5]=u*v,t[9]=R-x*h,t[2]=-u*d,t[6]=h,t[10]=u*p}else if(e.order==="ZYX"){const x=u*v,y=u*m,A=h*v,R=h*m;t[0]=p*v,t[4]=A*d-y,t[8]=x*d+R,t[1]=p*m,t[5]=R*d+x,t[9]=y*d-A,t[2]=-d,t[6]=h*p,t[10]=u*p}else if(e.order==="YZX"){const x=u*p,y=u*d,A=h*p,R=h*d;t[0]=p*v,t[4]=R-x*m,t[8]=A*m+y,t[1]=m,t[5]=u*v,t[9]=-h*v,t[2]=-d*v,t[6]=y*m+A,t[10]=x-R*m}else if(e.order==="XZY"){const x=u*p,y=u*d,A=h*p,R=h*d;t[0]=p*v,t[4]=-m,t[8]=d*v,t[1]=x*m+R,t[5]=u*v,t[9]=y*m-A,t[2]=A*m-y,t[6]=h*v,t[10]=R*m+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sg,e,ag)}lookAt(e,t,n){const a=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),si.crossVectors(n,hn),si.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),si.crossVectors(n,hn)),si.normalize(),_s.crossVectors(hn,si),a[0]=si.x,a[4]=_s.x,a[8]=hn.x,a[1]=si.y,a[5]=_s.y,a[9]=hn.y,a[2]=si.z,a[6]=_s.z,a[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,o=this.elements,u=n[0],h=n[4],p=n[8],d=n[12],v=n[1],m=n[5],x=n[9],y=n[13],A=n[2],R=n[6],E=n[10],_=n[14],O=n[3],I=n[7],F=n[11],k=n[15],D=a[0],z=a[4],q=a[8],P=a[12],T=a[1],B=a[5],Y=a[9],ee=a[13],Z=a[2],oe=a[6],ie=a[10],ve=a[14],ne=a[3],me=a[7],be=a[11],Le=a[15];return o[0]=u*D+h*T+p*Z+d*ne,o[4]=u*z+h*B+p*oe+d*me,o[8]=u*q+h*Y+p*ie+d*be,o[12]=u*P+h*ee+p*ve+d*Le,o[1]=v*D+m*T+x*Z+y*ne,o[5]=v*z+m*B+x*oe+y*me,o[9]=v*q+m*Y+x*ie+y*be,o[13]=v*P+m*ee+x*ve+y*Le,o[2]=A*D+R*T+E*Z+_*ne,o[6]=A*z+R*B+E*oe+_*me,o[10]=A*q+R*Y+E*ie+_*be,o[14]=A*P+R*ee+E*ve+_*Le,o[3]=O*D+I*T+F*Z+k*ne,o[7]=O*z+I*B+F*oe+k*me,o[11]=O*q+I*Y+F*ie+k*be,o[15]=O*P+I*ee+F*ve+k*Le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],o=e[12],u=e[1],h=e[5],p=e[9],d=e[13],v=e[2],m=e[6],x=e[10],y=e[14],A=e[3],R=e[7],E=e[11],_=e[15];return A*(+o*p*m-a*d*m-o*h*x+n*d*x+a*h*y-n*p*y)+R*(+t*p*y-t*d*x+o*u*x-a*u*y+a*d*v-o*p*v)+E*(+t*d*m-t*h*y-o*u*m+n*u*y+o*h*v-n*d*v)+_*(-a*h*v-t*p*m+t*h*x+a*u*m-n*u*x+n*p*v)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],u=e[4],h=e[5],p=e[6],d=e[7],v=e[8],m=e[9],x=e[10],y=e[11],A=e[12],R=e[13],E=e[14],_=e[15],O=m*E*d-R*x*d+R*p*y-h*E*y-m*p*_+h*x*_,I=A*x*d-v*E*d-A*p*y+u*E*y+v*p*_-u*x*_,F=v*R*d-A*m*d+A*h*y-u*R*y-v*h*_+u*m*_,k=A*m*p-v*R*p-A*h*x+u*R*x+v*h*E-u*m*E,D=t*O+n*I+a*F+o*k;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/D;return e[0]=O*z,e[1]=(R*x*o-m*E*o-R*a*y+n*E*y+m*a*_-n*x*_)*z,e[2]=(h*E*o-R*p*o+R*a*d-n*E*d-h*a*_+n*p*_)*z,e[3]=(m*p*o-h*x*o-m*a*d+n*x*d+h*a*y-n*p*y)*z,e[4]=I*z,e[5]=(v*E*o-A*x*o+A*a*y-t*E*y-v*a*_+t*x*_)*z,e[6]=(A*p*o-u*E*o-A*a*d+t*E*d+u*a*_-t*p*_)*z,e[7]=(u*x*o-v*p*o+v*a*d-t*x*d-u*a*y+t*p*y)*z,e[8]=F*z,e[9]=(A*m*o-v*R*o-A*n*y+t*R*y+v*n*_-t*m*_)*z,e[10]=(u*R*o-A*h*o+A*n*d-t*R*d-u*n*_+t*h*_)*z,e[11]=(v*h*o-u*m*o-v*n*d+t*m*d+u*n*y-t*h*y)*z,e[12]=k*z,e[13]=(v*R*a-A*m*a+A*n*x-t*R*x-v*n*E+t*m*E)*z,e[14]=(A*h*a-u*R*a-A*n*p+t*R*p+u*n*E-t*h*E)*z,e[15]=(u*m*a-v*h*a+v*n*p-t*m*p-u*n*x+t*h*x)*z,this}scale(e){const t=this.elements,n=e.x,a=e.y,o=e.z;return t[0]*=n,t[4]*=a,t[8]*=o,t[1]*=n,t[5]*=a,t[9]*=o,t[2]*=n,t[6]*=a,t[10]*=o,t[3]*=n,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),o=1-n,u=e.x,h=e.y,p=e.z,d=o*u,v=o*h;return this.set(d*u+n,d*h-a*p,d*p+a*h,0,d*h+a*p,v*h+n,v*p-a*u,0,d*p-a*h,v*p+a*u,o*p*p+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,o,u){return this.set(1,n,o,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,o=t._x,u=t._y,h=t._z,p=t._w,d=o+o,v=u+u,m=h+h,x=o*d,y=o*v,A=o*m,R=u*v,E=u*m,_=h*m,O=p*d,I=p*v,F=p*m,k=n.x,D=n.y,z=n.z;return a[0]=(1-(R+_))*k,a[1]=(y+F)*k,a[2]=(A-I)*k,a[3]=0,a[4]=(y-F)*D,a[5]=(1-(x+_))*D,a[6]=(E+O)*D,a[7]=0,a[8]=(A+I)*z,a[9]=(E-O)*z,a[10]=(1-(x+R))*z,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;let o=ji.set(a[0],a[1],a[2]).length();const u=ji.set(a[4],a[5],a[6]).length(),h=ji.set(a[8],a[9],a[10]).length();this.determinant()<0&&(o=-o),e.x=a[12],e.y=a[13],e.z=a[14],bn.copy(this);const d=1/o,v=1/u,m=1/h;return bn.elements[0]*=d,bn.elements[1]*=d,bn.elements[2]*=d,bn.elements[4]*=v,bn.elements[5]*=v,bn.elements[6]*=v,bn.elements[8]*=m,bn.elements[9]*=m,bn.elements[10]*=m,t.setFromRotationMatrix(bn),n.x=o,n.y=u,n.z=h,this}makePerspective(e,t,n,a,o,u,h=Hn,p=!1){const d=this.elements,v=2*o/(t-e),m=2*o/(n-a),x=(t+e)/(t-e),y=(n+a)/(n-a);let A,R;if(p)A=o/(u-o),R=u*o/(u-o);else if(h===Hn)A=-(u+o)/(u-o),R=-2*u*o/(u-o);else if(h===js)A=-u/(u-o),R=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=v,d[4]=0,d[8]=x,d[12]=0,d[1]=0,d[5]=m,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=A,d[14]=R,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,a,o,u,h=Hn,p=!1){const d=this.elements,v=2/(t-e),m=2/(n-a),x=-(t+e)/(t-e),y=-(n+a)/(n-a);let A,R;if(p)A=1/(u-o),R=u/(u-o);else if(h===Hn)A=-2/(u-o),R=-(u+o)/(u-o);else if(h===js)A=-1/(u-o),R=-o/(u-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=v,d[4]=0,d[8]=0,d[12]=x,d[1]=0,d[5]=m,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=A,d[14]=R,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ji=new J,bn=new Ot,sg=new J(0,0,0),ag=new J(1,1,1),si=new J,_s=new J,hn=new J,fl=new Ot,dl=new ki;class Gn{constructor(e=0,t=0,n=0,a=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,o=a[0],u=a[4],h=a[8],p=a[1],d=a[5],v=a[9],m=a[2],x=a[6],y=a[10];switch(t){case"XYZ":this._y=Math.asin(_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(x,d),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(_t(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-m,y),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,o));break;case"ZYX":this._y=Math.asin(-_t(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(p,o)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(_t(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,d),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,d),this._y=Math.atan2(h,o)):(this._x=Math.atan2(-v,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dl.setFromEuler(this),this.setFromQuaternion(dl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class Tu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let og=0;const pl=new J,qi=new ki,Yn=new Ot,gs=new J,Rr=new J,cg=new J,lg=new ki,ml=new J(1,0,0),_l=new J(0,1,0),gl=new J(0,0,1),vl={type:"added"},ug={type:"removed"},Yi={type:"childadded",child:null},Ca={type:"childremoved",child:null};class qt extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=Br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new J,t=new Gn,n=new ki,a=new J(1,1,1);function o(){n.setFromEuler(t,!1)}function u(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ot},normalMatrix:{value:new ct}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.multiply(qi),this}rotateOnWorldAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.premultiply(qi),this}rotateX(e){return this.rotateOnAxis(ml,e)}rotateY(e){return this.rotateOnAxis(_l,e)}rotateZ(e){return this.rotateOnAxis(gl,e)}translateOnAxis(e,t){return pl.copy(e).applyQuaternion(this.quaternion),this.position.add(pl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ml,e)}translateY(e){return this.translateOnAxis(_l,e)}translateZ(e){return this.translateOnAxis(gl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gs.copy(e):gs.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Rr,gs,this.up):Yn.lookAt(gs,Rr,this.up),this.quaternion.setFromRotationMatrix(Yn),a&&(Yn.extractRotation(a.matrixWorld),qi.setFromRotationMatrix(Yn),this.quaternion.premultiply(qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vl),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ug),Ca.child=e,this.dispatchEvent(Ca),Ca.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vl),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const u=this.children[n].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let o=0,u=a.length;o<u;o++)a[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,cg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,lg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let o=0,u=a.length;o<u;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(h=>({...h})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function o(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let d=0,v=p.length;d<v;d++){const m=p[d];o(e.shapes,m)}else o(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,d=this.material.length;p<d;p++)h.push(o(e.materials,this.material[p]));a.material=h}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let h=0;h<this.children.length;h++)a.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];a.animations.push(o(e.animations,p))}}if(t){const h=u(e.geometries),p=u(e.materials),d=u(e.textures),v=u(e.images),m=u(e.shapes),x=u(e.skeletons),y=u(e.animations),A=u(e.nodes);h.length>0&&(n.geometries=h),p.length>0&&(n.materials=p),d.length>0&&(n.textures=d),v.length>0&&(n.images=v),m.length>0&&(n.shapes=m),x.length>0&&(n.skeletons=x),y.length>0&&(n.animations=y),A.length>0&&(n.nodes=A)}return n.object=a,n;function u(h){const p=[];for(const d in h){const v=h[d];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}}qt.DEFAULT_UP=new J(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new J,Kn=new J,Pa=new J,Zn=new J,Ki=new J,Zi=new J,xl=new J,Da=new J,La=new J,Fa=new J,Ia=new Nt,Ua=new Nt,Na=new Nt;class Pn{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),An.subVectors(e,t),a.cross(An);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,n,a,o){An.subVectors(a,t),Kn.subVectors(n,t),Pa.subVectors(e,t);const u=An.dot(An),h=An.dot(Kn),p=An.dot(Pa),d=Kn.dot(Kn),v=Kn.dot(Pa),m=u*d-h*h;if(m===0)return o.set(0,0,0),null;const x=1/m,y=(d*p-h*v)*x,A=(u*v-h*p)*x;return o.set(1-y-A,A,y)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,n,a,o,u,h,p){return this.getBarycoord(e,t,n,a,Zn)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(o,Zn.x),p.addScaledVector(u,Zn.y),p.addScaledVector(h,Zn.z),p)}static getInterpolatedAttribute(e,t,n,a,o,u){return Ia.setScalar(0),Ua.setScalar(0),Na.setScalar(0),Ia.fromBufferAttribute(e,t),Ua.fromBufferAttribute(e,n),Na.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Ia,o.x),u.addScaledVector(Ua,o.y),u.addScaledVector(Na,o.z),u}static isFrontFacing(e,t,n,a){return An.subVectors(n,t),Kn.subVectors(e,t),An.cross(Kn).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),An.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,o){return Pn.getInterpolation(e,this.a,this.b,this.c,t,n,a,o)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,o=this.c;let u,h;Ki.subVectors(a,n),Zi.subVectors(o,n),Da.subVectors(e,n);const p=Ki.dot(Da),d=Zi.dot(Da);if(p<=0&&d<=0)return t.copy(n);La.subVectors(e,a);const v=Ki.dot(La),m=Zi.dot(La);if(v>=0&&m<=v)return t.copy(a);const x=p*m-v*d;if(x<=0&&p>=0&&v<=0)return u=p/(p-v),t.copy(n).addScaledVector(Ki,u);Fa.subVectors(e,o);const y=Ki.dot(Fa),A=Zi.dot(Fa);if(A>=0&&y<=A)return t.copy(o);const R=y*d-p*A;if(R<=0&&d>=0&&A<=0)return h=d/(d-A),t.copy(n).addScaledVector(Zi,h);const E=v*A-y*m;if(E<=0&&m-v>=0&&y-A>=0)return xl.subVectors(o,a),h=(m-v)/(m-v+(y-A)),t.copy(a).addScaledVector(xl,h);const _=1/(E+R+x);return u=R*_,h=x*_,t.copy(n).addScaledVector(Ki,u).addScaledVector(Zi,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},vs={h:0,s:0,l:0};function Oa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class gt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,a=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Mt.colorSpaceToWorking(this,a),this}setHSL(e,t,n,a=Mt.workingColorSpace){if(e=q_(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,u=2*n-o;this.r=Oa(u,o,e+1/3),this.g=Oa(u,o,e),this.b=Oa(u,o,e-1/3)}return Mt.colorSpaceToWorking(this,a),this}setStyle(e,t=pn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const u=a[1],h=a[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){const n=wu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return Mt.workingToColorSpace(en.copy(this),e),Math.round(_t(en.r*255,0,255))*65536+Math.round(_t(en.g*255,0,255))*256+Math.round(_t(en.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.workingToColorSpace(en.copy(this),t);const n=en.r,a=en.g,o=en.b,u=Math.max(n,a,o),h=Math.min(n,a,o);let p,d;const v=(h+u)/2;if(h===u)p=0,d=0;else{const m=u-h;switch(d=v<=.5?m/(u+h):m/(2-u-h),u){case n:p=(a-o)/m+(a<o?6:0);break;case a:p=(o-n)/m+2;break;case o:p=(n-a)/m+4;break}p/=6}return e.h=p,e.s=d,e.l=v,e}getRGB(e,t=Mt.workingColorSpace){return Mt.workingToColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=pn){Mt.workingToColorSpace(en.copy(this),e);const t=en.r,n=en.g,a=en.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(vs);const n=xa(ai.h,vs.h,t),a=xa(ai.s,vs.s,t),o=xa(ai.l,vs.l,t);return this.setHSL(n,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*a,this.g=o[1]*t+o[4]*n+o[7]*a,this.b=o[2]*t+o[5]*n+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new gt;gt.NAMES=wu;let hg=0;class gr extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=Br(),this.name="",this.type="Material",this.blending=ur,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ro,this.blendDst=so,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ur&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ro&&(n.blendSrc=this.blendSrc),this.blendDst!==so&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(o){const u=[];for(const h in o){const p=o[h];delete p.metadata,u.push(p)}return u}if(t){const o=a(e.textures),u=a(e.images);o.length>0&&(n.textures=o),u.length>0&&(n.images=u)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let o=0;o!==a;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class sc extends gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=uu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new J,xs=new at;let fg=0;class En{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=al,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xs.fromBufferAttribute(this,t),xs.applyMatrix3(e),this.setXY(t,xs.x,xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wr(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wr(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wr(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array),a=an(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,o){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array),a=an(a,this.array),o=an(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==al&&(e.usage=this.usage),e}}class bu extends En{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Au extends En{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class un extends En{constructor(e,t,n){super(new Float32Array(e),t,n)}}let dg=0;const gn=new Ot,ka=new qt,Ji=new J,fn=new zr,Cr=new zr,jt=new J;class Fn extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=Br(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Su(e)?Au:bu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ct().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return ka.lookAt(e),ka.updateMatrix(),this.applyMatrix4(ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let a=0,o=e.length;a<o;a++){const u=e[a];n.push(u.x,u.y,u.z||0)}this.setAttribute("position",new un(n,3))}else{const n=Math.min(e.length,t.count);for(let a=0;a<n;a++){const o=e[a];t.setXYZ(a,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const o=t[n];fn.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let o=0,u=t.length;o<u;o++){const h=t[o];Cr.setFromBufferAttribute(h),this.morphTargetsRelative?(jt.addVectors(fn.min,Cr.min),fn.expandByPoint(jt),jt.addVectors(fn.max,Cr.max),fn.expandByPoint(jt)):(fn.expandByPoint(Cr.min),fn.expandByPoint(Cr.max))}fn.getCenter(n);let a=0;for(let o=0,u=e.count;o<u;o++)jt.fromBufferAttribute(e,o),a=Math.max(a,n.distanceToSquared(jt));if(t)for(let o=0,u=t.length;o<u;o++){const h=t[o],p=this.morphTargetsRelative;for(let d=0,v=h.count;d<v;d++)jt.fromBufferAttribute(h,d),p&&(Ji.fromBufferAttribute(e,d),jt.add(Ji)),a=Math.max(a,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*n.count),4));const u=this.getAttribute("tangent"),h=[],p=[];for(let q=0;q<n.count;q++)h[q]=new J,p[q]=new J;const d=new J,v=new J,m=new J,x=new at,y=new at,A=new at,R=new J,E=new J;function _(q,P,T){d.fromBufferAttribute(n,q),v.fromBufferAttribute(n,P),m.fromBufferAttribute(n,T),x.fromBufferAttribute(o,q),y.fromBufferAttribute(o,P),A.fromBufferAttribute(o,T),v.sub(d),m.sub(d),y.sub(x),A.sub(x);const B=1/(y.x*A.y-A.x*y.y);isFinite(B)&&(R.copy(v).multiplyScalar(A.y).addScaledVector(m,-y.y).multiplyScalar(B),E.copy(m).multiplyScalar(y.x).addScaledVector(v,-A.x).multiplyScalar(B),h[q].add(R),h[P].add(R),h[T].add(R),p[q].add(E),p[P].add(E),p[T].add(E))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let q=0,P=O.length;q<P;++q){const T=O[q],B=T.start,Y=T.count;for(let ee=B,Z=B+Y;ee<Z;ee+=3)_(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const I=new J,F=new J,k=new J,D=new J;function z(q){k.fromBufferAttribute(a,q),D.copy(k);const P=h[q];I.copy(P),I.sub(k.multiplyScalar(k.dot(P))).normalize(),F.crossVectors(D,P);const B=F.dot(p[q])<0?-1:1;u.setXYZW(q,I.x,I.y,I.z,B)}for(let q=0,P=O.length;q<P;++q){const T=O[q],B=T.start,Y=T.count;for(let ee=B,Z=B+Y;ee<Z;ee+=3)z(e.getX(ee+0)),z(e.getX(ee+1)),z(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let x=0,y=n.count;x<y;x++)n.setXYZ(x,0,0,0);const a=new J,o=new J,u=new J,h=new J,p=new J,d=new J,v=new J,m=new J;if(e)for(let x=0,y=e.count;x<y;x+=3){const A=e.getX(x+0),R=e.getX(x+1),E=e.getX(x+2);a.fromBufferAttribute(t,A),o.fromBufferAttribute(t,R),u.fromBufferAttribute(t,E),v.subVectors(u,o),m.subVectors(a,o),v.cross(m),h.fromBufferAttribute(n,A),p.fromBufferAttribute(n,R),d.fromBufferAttribute(n,E),h.add(v),p.add(v),d.add(v),n.setXYZ(A,h.x,h.y,h.z),n.setXYZ(R,p.x,p.y,p.z),n.setXYZ(E,d.x,d.y,d.z)}else for(let x=0,y=t.count;x<y;x+=3)a.fromBufferAttribute(t,x+0),o.fromBufferAttribute(t,x+1),u.fromBufferAttribute(t,x+2),v.subVectors(u,o),m.subVectors(a,o),v.cross(m),n.setXYZ(x+0,v.x,v.y,v.z),n.setXYZ(x+1,v.x,v.y,v.z),n.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(h,p){const d=h.array,v=h.itemSize,m=h.normalized,x=new d.constructor(p.length*v);let y=0,A=0;for(let R=0,E=p.length;R<E;R++){h.isInterleavedBufferAttribute?y=p[R]*h.data.stride+h.offset:y=p[R]*v;for(let _=0;_<v;_++)x[A++]=d[y++]}return new En(x,v,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fn,n=this.index.array,a=this.attributes;for(const h in a){const p=a[h],d=e(p,n);t.setAttribute(h,d)}const o=this.morphAttributes;for(const h in o){const p=[],d=o[h];for(let v=0,m=d.length;v<m;v++){const x=d[v],y=e(x,n);p.push(y)}t.morphAttributes[h]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,p=u.length;h<p;h++){const d=u[h];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(e[d]=p[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const p in n){const d=n[p];e.data.attributes[p]=d.toJSON(e.data)}const a={};let o=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],v=[];for(let m=0,x=d.length;m<x;m++){const y=d[m];v.push(y.toJSON(e.data))}v.length>0&&(a[p]=v,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const a=e.attributes;for(const d in a){const v=a[d];this.setAttribute(d,v.clone(t))}const o=e.morphAttributes;for(const d in o){const v=[],m=o[d];for(let x=0,y=m.length;x<y;x++)v.push(m[x].clone(t));this.morphAttributes[d]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,v=u.length;d<v;d++){const m=u[d];this.addGroup(m.start,m.count,m.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yl=new Ot,Ai=new rc,ys=new Js,El=new J,Es=new J,Ss=new J,Ms=new J,Ba=new J,Ts=new J,Sl=new J,ws=new J;class yn extends qt{constructor(e=new Fn,t=new sc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const h=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=o}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,o=n.morphAttributes.position,u=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const h=this.morphTargetInfluences;if(o&&h){Ts.set(0,0,0);for(let p=0,d=o.length;p<d;p++){const v=h[p],m=o[p];v!==0&&(Ba.fromBufferAttribute(m,e),u?Ts.addScaledVector(Ba,v):Ts.addScaledVector(Ba.sub(t),v))}t.add(Ts)}return t}raycast(e,t){const n=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(o),Ai.copy(e.ray).recast(e.near),!(ys.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(ys,El)===null||Ai.origin.distanceToSquared(El)>(e.far-e.near)**2))&&(yl.copy(o).invert(),Ai.copy(e.ray).applyMatrix4(yl),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,n){let a;const o=this.geometry,u=this.material,h=o.index,p=o.attributes.position,d=o.attributes.uv,v=o.attributes.uv1,m=o.attributes.normal,x=o.groups,y=o.drawRange;if(h!==null)if(Array.isArray(u))for(let A=0,R=x.length;A<R;A++){const E=x[A],_=u[E.materialIndex],O=Math.max(E.start,y.start),I=Math.min(h.count,Math.min(E.start+E.count,y.start+y.count));for(let F=O,k=I;F<k;F+=3){const D=h.getX(F),z=h.getX(F+1),q=h.getX(F+2);a=bs(this,_,e,n,d,v,m,D,z,q),a&&(a.faceIndex=Math.floor(F/3),a.face.materialIndex=E.materialIndex,t.push(a))}}else{const A=Math.max(0,y.start),R=Math.min(h.count,y.start+y.count);for(let E=A,_=R;E<_;E+=3){const O=h.getX(E),I=h.getX(E+1),F=h.getX(E+2);a=bs(this,u,e,n,d,v,m,O,I,F),a&&(a.faceIndex=Math.floor(E/3),t.push(a))}}else if(p!==void 0)if(Array.isArray(u))for(let A=0,R=x.length;A<R;A++){const E=x[A],_=u[E.materialIndex],O=Math.max(E.start,y.start),I=Math.min(p.count,Math.min(E.start+E.count,y.start+y.count));for(let F=O,k=I;F<k;F+=3){const D=F,z=F+1,q=F+2;a=bs(this,_,e,n,d,v,m,D,z,q),a&&(a.faceIndex=Math.floor(F/3),a.face.materialIndex=E.materialIndex,t.push(a))}}else{const A=Math.max(0,y.start),R=Math.min(p.count,y.start+y.count);for(let E=A,_=R;E<_;E+=3){const O=E,I=E+1,F=E+2;a=bs(this,u,e,n,d,v,m,O,I,F),a&&(a.faceIndex=Math.floor(E/3),t.push(a))}}}}function pg(i,e,t,n,a,o,u,h){let p;if(e.side===cn?p=n.intersectTriangle(u,o,a,!0,h):p=n.intersectTriangle(a,o,u,e.side===pi,h),p===null)return null;ws.copy(h),ws.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(ws);return d<t.near||d>t.far?null:{distance:d,point:ws.clone(),object:i}}function bs(i,e,t,n,a,o,u,h,p,d){i.getVertexPosition(h,Es),i.getVertexPosition(p,Ss),i.getVertexPosition(d,Ms);const v=pg(i,e,t,n,Es,Ss,Ms,Sl);if(v){const m=new J;Pn.getBarycoord(Sl,Es,Ss,Ms,m),a&&(v.uv=Pn.getInterpolatedAttribute(a,h,p,d,m,new at)),o&&(v.uv1=Pn.getInterpolatedAttribute(o,h,p,d,m,new at)),u&&(v.normal=Pn.getInterpolatedAttribute(u,h,p,d,m,new J),v.normal.dot(n.direction)>0&&v.normal.multiplyScalar(-1));const x={a:h,b:p,c:d,normal:new J,materialIndex:0};Pn.getNormal(Es,Ss,Ms,x.normal),v.face=x,v.barycoord=m}return v}class Hr extends Fn{constructor(e=1,t=1,n=1,a=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:o,depthSegments:u};const h=this;a=Math.floor(a),o=Math.floor(o),u=Math.floor(u);const p=[],d=[],v=[],m=[];let x=0,y=0;A("z","y","x",-1,-1,n,t,e,u,o,0),A("z","y","x",1,-1,n,t,-e,u,o,1),A("x","z","y",1,1,e,n,t,a,u,2),A("x","z","y",1,-1,e,n,-t,a,u,3),A("x","y","z",1,-1,e,t,n,a,o,4),A("x","y","z",-1,-1,e,t,-n,a,o,5),this.setIndex(p),this.setAttribute("position",new un(d,3)),this.setAttribute("normal",new un(v,3)),this.setAttribute("uv",new un(m,2));function A(R,E,_,O,I,F,k,D,z,q,P){const T=F/z,B=k/q,Y=F/2,ee=k/2,Z=D/2,oe=z+1,ie=q+1;let ve=0,ne=0;const me=new J;for(let be=0;be<ie;be++){const Le=be*B-ee;for(let He=0;He<oe;He++){const Qe=He*T-Y;me[R]=Qe*O,me[E]=Le*I,me[_]=Z,d.push(me.x,me.y,me.z),me[R]=0,me[E]=0,me[_]=D>0?1:-1,v.push(me.x,me.y,me.z),m.push(He/z),m.push(1-be/q),ve+=1}}for(let be=0;be<q;be++)for(let Le=0;Le<z;Le++){const He=x+Le+oe*be,Qe=x+Le+oe*(be+1),Je=x+(Le+1)+oe*(be+1),nt=x+(Le+1)+oe*be;p.push(He,Qe,nt),p.push(Qe,Je,nt),ne+=6}h.addGroup(y,ne,P),y+=ne,x+=ve}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _r(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const a=i[t][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone():Array.isArray(a)?e[t][n]=a.slice():e[t][n]=a}}return e}function nn(i){const e={};for(let t=0;t<i.length;t++){const n=_r(i[t]);for(const a in n)e[a]=n[a]}return e}function mg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ru(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const _g={clone:_r,merge:nn};var gg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gg,this.fragmentShader=vg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_r(e.uniforms),this.uniformsGroups=mg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Cu extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new J,Ml=new at,Tl=new at;class xn extends Cu{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$o*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $o*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,Ml,Tl),t.subVectors(Tl,Ml)}setViewOffset(e,t,n,a,o,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gs*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,o=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;o+=u.offsetX*a/p,t-=u.offsetY*n/d,a*=u.width/p,n*=u.height/d}const h=this.filmOffset;h!==0&&(o+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qi=-90,er=1;class xg extends qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new xn(Qi,er,e,t);a.layers=this.layers,this.add(a);const o=new xn(Qi,er,e,t);o.layers=this.layers,this.add(o);const u=new xn(Qi,er,e,t);u.layers=this.layers,this.add(u);const h=new xn(Qi,er,e,t);h.layers=this.layers,this.add(h);const p=new xn(Qi,er,e,t);p.layers=this.layers,this.add(p);const d=new xn(Qi,er,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,o,u,h,p]=t;for(const d of t)this.remove(d);if(e===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,u,h,p,d,v]=this.children,m=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const R=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,a),e.render(t,o),e.setRenderTarget(n,1,a),e.render(t,u),e.setRenderTarget(n,2,a),e.render(t,h),e.setRenderTarget(n,3,a),e.render(t,p),e.setRenderTarget(n,4,a),e.render(t,d),n.texture.generateMipmaps=R,e.setRenderTarget(n,5,a),e.render(t,v),e.setRenderTarget(m,x,y),e.xr.enabled=A,n.texture.needsPMREMUpdate=!0}}class Pu extends ln{constructor(e=[],t=dr,n,a,o,u,h,p,d,v){super(e,t,n,a,o,u,h,p,d,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yg extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new Pu(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Hr(5,5,5),o=new mi({name:"CubemapFromEquirect",uniforms:_r(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:fi});o.uniforms.tEquirect.value=t;const u=new yn(a,o),h=t.minFilter;return t.minFilter===Ni&&(t.minFilter=zn),new xg(1,10,this).update(e,u),t.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,n=!0,a=!0){const o=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,n,a);e.setRenderTarget(o)}}class As extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Eg={type:"move"};class za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new As,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new As,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new As,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,o=null,u=null;const h=this._targetRay,p=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const R of e.hand.values()){const E=t.getJointPose(R,n),_=this._getHandJoint(d,R);E!==null&&(_.matrix.fromArray(E.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=E.radius),_.visible=E!==null}const v=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],x=v.position.distanceTo(m.position),y=.02,A=.005;d.inputState.pinching&&x>y+A?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&x<=y-A&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(p.matrix.fromArray(o.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,o.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(o.linearVelocity)):p.hasLinearVelocity=!1,o.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(o.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&o!==null&&(a=o),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Eg)))}return h!==null&&(h.visible=a!==null),p!==null&&(p.visible=o!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new As;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Sg extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ha=new J,Mg=new J,Tg=new ct;class ui{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=Ha.subVectors(n,t).cross(Mg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ha),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Tg.getNormalMatrix(e),a=this.coplanarPoint(Ha).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new Js,wg=new at(.5,.5),Rs=new J;class ac{constructor(e=new ui,t=new ui,n=new ui,a=new ui,o=new ui,u=new ui){this.planes=[e,t,n,a,o,u]}set(e,t,n,a,o,u){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(n),h[3].copy(a),h[4].copy(o),h[5].copy(u),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hn,n=!1){const a=this.planes,o=e.elements,u=o[0],h=o[1],p=o[2],d=o[3],v=o[4],m=o[5],x=o[6],y=o[7],A=o[8],R=o[9],E=o[10],_=o[11],O=o[12],I=o[13],F=o[14],k=o[15];if(a[0].setComponents(d-u,y-v,_-A,k-O).normalize(),a[1].setComponents(d+u,y+v,_+A,k+O).normalize(),a[2].setComponents(d+h,y+m,_+R,k+I).normalize(),a[3].setComponents(d-h,y-m,_-R,k-I).normalize(),n)a[4].setComponents(p,x,E,F).normalize(),a[5].setComponents(d-p,y-x,_-E,k-F).normalize();else if(a[4].setComponents(d-p,y-x,_-E,k-F).normalize(),t===Hn)a[5].setComponents(d+p,y+x,_+E,k+F).normalize();else if(t===js)a[5].setComponents(p,x,E,F).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){Ri.center.set(0,0,0);const t=wg.distanceTo(e.center);return Ri.radius=.7071067811865476+t,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(Rs.x=a.normal.x>0?e.max.x:e.min.x,Rs.y=a.normal.y>0?e.max.y:e.min.y,Rs.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Du extends gr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ys=new J,Ks=new J,wl=new Ot,Pr=new rc,Cs=new Js,Va=new J,bl=new J;class bg extends qt{constructor(e=new Fn,t=new Du){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let a=1,o=t.count;a<o;a++)Ys.fromBufferAttribute(t,a-1),Ks.fromBufferAttribute(t,a),n[a]=n[a-1],n[a]+=Ys.distanceTo(Ks);e.setAttribute("lineDistance",new un(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,o=e.params.Line.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(a),Cs.radius+=o,e.ray.intersectsSphere(Cs)===!1)return;wl.copy(a).invert(),Pr.copy(e.ray).applyMatrix4(wl);const h=o/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=this.isLineSegments?2:1,v=n.index,x=n.attributes.position;if(v!==null){const y=Math.max(0,u.start),A=Math.min(v.count,u.start+u.count);for(let R=y,E=A-1;R<E;R+=d){const _=v.getX(R),O=v.getX(R+1),I=Ps(this,e,Pr,p,_,O,R);I&&t.push(I)}if(this.isLineLoop){const R=v.getX(A-1),E=v.getX(y),_=Ps(this,e,Pr,p,R,E,A-1);_&&t.push(_)}}else{const y=Math.max(0,u.start),A=Math.min(x.count,u.start+u.count);for(let R=y,E=A-1;R<E;R+=d){const _=Ps(this,e,Pr,p,R,R+1,R);_&&t.push(_)}if(this.isLineLoop){const R=Ps(this,e,Pr,p,A-1,y,A-1);R&&t.push(R)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const h=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=o}}}}}function Ps(i,e,t,n,a,o,u){const h=i.geometry.attributes.position;if(Ys.fromBufferAttribute(h,a),Ks.fromBufferAttribute(h,o),t.distanceSqToSegment(Ys,Ks,Va,bl)>n)return;Va.applyMatrix4(i.matrixWorld);const d=e.ray.origin.distanceTo(Va);if(!(d<e.near||d>e.far))return{distance:d,point:bl.clone().applyMatrix4(i.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:i}}const Al=new J,Rl=new J;class Ag extends bg{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let a=0,o=t.count;a<o;a+=2)Al.fromBufferAttribute(t,a),Rl.fromBufferAttribute(t,a+1),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+Al.distanceTo(Rl);e.setAttribute("lineDistance",new un(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Lu extends ln{constructor(e,t,n=Oi,a,o,u,h=Ln,p=Ln,d,v=Ur,m=1){if(v!==Ur&&v!==Nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:m};super(x,a,o,u,h,p,v,n,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ic(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Fu extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class oc extends Fn{constructor(e=1,t=1,n=1,a=32,o=1,u=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:a,heightSegments:o,openEnded:u,thetaStart:h,thetaLength:p};const d=this;a=Math.floor(a),o=Math.floor(o);const v=[],m=[],x=[],y=[];let A=0;const R=[],E=n/2;let _=0;O(),u===!1&&(e>0&&I(!0),t>0&&I(!1)),this.setIndex(v),this.setAttribute("position",new un(m,3)),this.setAttribute("normal",new un(x,3)),this.setAttribute("uv",new un(y,2));function O(){const F=new J,k=new J;let D=0;const z=(t-e)/n;for(let q=0;q<=o;q++){const P=[],T=q/o,B=T*(t-e)+e;for(let Y=0;Y<=a;Y++){const ee=Y/a,Z=ee*p+h,oe=Math.sin(Z),ie=Math.cos(Z);k.x=B*oe,k.y=-T*n+E,k.z=B*ie,m.push(k.x,k.y,k.z),F.set(oe,z,ie).normalize(),x.push(F.x,F.y,F.z),y.push(ee,1-T),P.push(A++)}R.push(P)}for(let q=0;q<a;q++)for(let P=0;P<o;P++){const T=R[P][q],B=R[P+1][q],Y=R[P+1][q+1],ee=R[P][q+1];(e>0||P!==0)&&(v.push(T,B,ee),D+=3),(t>0||P!==o-1)&&(v.push(B,Y,ee),D+=3)}d.addGroup(_,D,0),_+=D}function I(F){const k=A,D=new at,z=new J;let q=0;const P=F===!0?e:t,T=F===!0?1:-1;for(let Y=1;Y<=a;Y++)m.push(0,E*T,0),x.push(0,T,0),y.push(.5,.5),A++;const B=A;for(let Y=0;Y<=a;Y++){const Z=Y/a*p+h,oe=Math.cos(Z),ie=Math.sin(Z);z.x=P*ie,z.y=E*T,z.z=P*oe,m.push(z.x,z.y,z.z),x.push(0,T,0),D.x=oe*.5+.5,D.y=ie*.5*T+.5,y.push(D.x,D.y),A++}for(let Y=0;Y<a;Y++){const ee=k+Y,Z=B+Y;F===!0?v.push(Z,Z+1,ee):v.push(Z+1,Z,ee),q+=3}d.addGroup(_,q,F===!0?1:2),_+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vr extends Fn{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const o=e/2,u=t/2,h=Math.floor(n),p=Math.floor(a),d=h+1,v=p+1,m=e/h,x=t/p,y=[],A=[],R=[],E=[];for(let _=0;_<v;_++){const O=_*x-u;for(let I=0;I<d;I++){const F=I*m-o;A.push(F,-O,0),R.push(0,0,1),E.push(I/h),E.push(1-_/p)}}for(let _=0;_<p;_++)for(let O=0;O<h;O++){const I=O+d*_,F=O+d*(_+1),k=O+1+d*(_+1),D=O+1+d*_;y.push(I,F,D),y.push(F,k,D)}this.setIndex(y),this.setAttribute("position",new un(A,3)),this.setAttribute("normal",new un(R,3)),this.setAttribute("uv",new un(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Cl extends gr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yu,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rg extends gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=k_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cg extends gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Iu extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Pg extends Iu{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new gt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ga=new Ot,Pl=new J,Dl=new J;class Dg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ac,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Pl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pl),Dl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dl),t.updateMatrixWorld(),Ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ga,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Uu extends Cu{constructor(e=-1,t=1,n=1,a=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=n-e,u=n+e,h=a+t,p=a-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,u=o+d*this.view.width,h-=v*this.view.offsetY,p=h-v*this.view.height}this.projectionMatrix.makeOrthographic(o,u,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Lg extends Dg{constructor(){super(new Uu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fg extends Iu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new Lg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ig extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ll{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=_t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ug extends Ag{constructor(e=10,t=10,n=4473924,a=8947848){n=new gt(n),a=new gt(a);const o=t/2,u=e/t,h=e/2,p=[],d=[];for(let x=0,y=0,A=-h;x<=t;x++,A+=u){p.push(-h,0,A,h,0,A),p.push(A,0,-h,A,0,h);const R=x===o?n:a;R.toArray(d,y),y+=3,R.toArray(d,y),y+=3,R.toArray(d,y),y+=3,R.toArray(d,y),y+=3}const v=new Fn;v.setAttribute("position",new un(p,3)),v.setAttribute("color",new un(d,3));const m=new Du({vertexColors:!0,toneMapped:!1});super(v,m),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ng extends zi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Fl(i,e,t,n){const a=Og(n);switch(t){case _u:return i*e;case vu:return i*e/a.components*a.byteLength;case ec:return i*e/a.components*a.byteLength;case xu:return i*e*2/a.components*a.byteLength;case tc:return i*e*2/a.components*a.byteLength;case gu:return i*e*3/a.components*a.byteLength;case Dn:return i*e*4/a.components*a.byteLength;case nc:return i*e*4/a.components*a.byteLength;case Bs:case zs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Hs:case Vs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xo:case Eo:return Math.max(i,16)*Math.max(e,8)/4;case vo:case yo:return Math.max(i,8)*Math.max(e,8)/2;case So:case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case To:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Co:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Po:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Do:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Io:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case No:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Oo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ko:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Bo:case zo:case Ho:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Vo:case Go:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Wo:case Xo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Og(i){switch(i){case Vn:case fu:return{byteLength:1,components:1};case Fr:case du:case kr:return{byteLength:2,components:1};case Jo:case Qo:return{byteLength:2,components:4};case Oi:case Zo:case Qn:return{byteLength:4,components:1};case pu:case mu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ko}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ko);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Nu(){let i=null,e=!1,t=null,n=null;function a(o,u){t(o,u),n=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function kg(i){const e=new WeakMap;function t(h,p){const d=h.array,v=h.usage,m=d.byteLength,x=i.createBuffer();i.bindBuffer(p,x),i.bufferData(p,d,v),h.onUploadCallback();let y;if(d instanceof Float32Array)y=i.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=i.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=i.SHORT;else if(d instanceof Uint32Array)y=i.UNSIGNED_INT;else if(d instanceof Int32Array)y=i.INT;else if(d instanceof Int8Array)y=i.BYTE;else if(d instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:m}}function n(h,p,d){const v=p.array,m=p.updateRanges;if(i.bindBuffer(d,h),m.length===0)i.bufferSubData(d,0,v);else{m.sort((y,A)=>y.start-A.start);let x=0;for(let y=1;y<m.length;y++){const A=m[x],R=m[y];R.start<=A.start+A.count+1?A.count=Math.max(A.count,R.start+R.count-A.start):(++x,m[x]=R)}m.length=x+1;for(let y=0,A=m.length;y<A;y++){const R=m[y];i.bufferSubData(d,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(i.deleteBuffer(p.buffer),e.delete(h))}function u(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=e.get(h);if(d===void 0)e.set(h,t(h,p));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,h,p),d.version=h.version}}return{get:a,remove:o,update:u}}var Bg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zg=`#ifdef USE_ALPHAHASH
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
#endif`,Hg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xg=`#ifdef USE_AOMAP
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
#endif`,$g=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jg=`#ifdef USE_BATCHING
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
#endif`,qg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jg=`#ifdef USE_IRIDESCENCE
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
#endif`,Qg=`#ifdef USE_BUMPMAP
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
#endif`,ev=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,av=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ov=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cv=`#define PI 3.141592653589793
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
} // validated`,lv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uv=`vec3 transformedNormal = objectNormal;
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
#endif`,hv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mv="gl_FragColor = linearToOutputTexel( gl_FragColor );",_v=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gv=`#ifdef USE_ENVMAP
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
#endif`,vv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xv=`#ifdef USE_ENVMAP
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
#endif`,yv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ev=`#ifdef USE_ENVMAP
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
#endif`,Sv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bv=`#ifdef USE_GRADIENTMAP
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
}`,Av=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pv=`uniform bool receiveShadow;
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
#endif`,Dv=`#ifdef USE_ENVMAP
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
#endif`,Lv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Iv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nv=`PhysicalMaterial material;
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
#endif`,Ov=`struct PhysicalMaterial {
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
}`,kv=`
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
#endif`,Bv=`#if defined( RE_IndirectDiffuse )
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
#endif`,zv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$v=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qv=`#if defined( USE_POINTS_UV )
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
#endif`,Yv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e0=`#ifdef USE_MORPHTARGETS
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
#endif`,t0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,i0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,r0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,o0=`#ifdef USE_NORMALMAP
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
#endif`,c0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,p0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,v0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,M0=`float getShadowMask() {
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
}`,T0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w0=`#ifdef USE_SKINNING
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
#endif`,b0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A0=`#ifdef USE_SKINNING
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
#endif`,R0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,L0=`#ifdef USE_TRANSMISSION
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
#endif`,F0=`#ifdef USE_TRANSMISSION
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
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const k0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B0=`uniform sampler2D t2D;
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
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`#include <common>
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
}`,X0=`#if DEPTH_PACKING == 3200
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
}`,$0=`#define DISTANCE
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
}`,j0=`#define DISTANCE
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
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Y0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`uniform float scale;
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
}`,Z0=`uniform vec3 diffuse;
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
}`,J0=`#include <common>
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
}`,Q0=`uniform vec3 diffuse;
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
}`,ex=`#define LAMBERT
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
}`,tx=`#define LAMBERT
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
}`,nx=`#define MATCAP
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
}`,ix=`#define MATCAP
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
}`,rx=`#define NORMAL
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
}`,sx=`#define NORMAL
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
}`,ax=`#define PHONG
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
}`,ox=`#define PHONG
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
}`,cx=`#define STANDARD
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
}`,lx=`#define STANDARD
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
}`,ux=`#define TOON
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
}`,hx=`#define TOON
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
}`,fx=`uniform float size;
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
}`,dx=`uniform vec3 diffuse;
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
}`,px=`#include <common>
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
}`,mx=`uniform vec3 color;
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
}`,_x=`uniform float rotation;
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
}`,gx=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:Bg,alphahash_pars_fragment:zg,alphamap_fragment:Hg,alphamap_pars_fragment:Vg,alphatest_fragment:Gg,alphatest_pars_fragment:Wg,aomap_fragment:Xg,aomap_pars_fragment:$g,batching_pars_vertex:jg,batching_vertex:qg,begin_vertex:Yg,beginnormal_vertex:Kg,bsdfs:Zg,iridescence_fragment:Jg,bumpmap_pars_fragment:Qg,clipping_planes_fragment:ev,clipping_planes_pars_fragment:tv,clipping_planes_pars_vertex:nv,clipping_planes_vertex:iv,color_fragment:rv,color_pars_fragment:sv,color_pars_vertex:av,color_vertex:ov,common:cv,cube_uv_reflection_fragment:lv,defaultnormal_vertex:uv,displacementmap_pars_vertex:hv,displacementmap_vertex:fv,emissivemap_fragment:dv,emissivemap_pars_fragment:pv,colorspace_fragment:mv,colorspace_pars_fragment:_v,envmap_fragment:gv,envmap_common_pars_fragment:vv,envmap_pars_fragment:xv,envmap_pars_vertex:yv,envmap_physical_pars_fragment:Dv,envmap_vertex:Ev,fog_vertex:Sv,fog_pars_vertex:Mv,fog_fragment:Tv,fog_pars_fragment:wv,gradientmap_pars_fragment:bv,lightmap_pars_fragment:Av,lights_lambert_fragment:Rv,lights_lambert_pars_fragment:Cv,lights_pars_begin:Pv,lights_toon_fragment:Lv,lights_toon_pars_fragment:Fv,lights_phong_fragment:Iv,lights_phong_pars_fragment:Uv,lights_physical_fragment:Nv,lights_physical_pars_fragment:Ov,lights_fragment_begin:kv,lights_fragment_maps:Bv,lights_fragment_end:zv,logdepthbuf_fragment:Hv,logdepthbuf_pars_fragment:Vv,logdepthbuf_pars_vertex:Gv,logdepthbuf_vertex:Wv,map_fragment:Xv,map_pars_fragment:$v,map_particle_fragment:jv,map_particle_pars_fragment:qv,metalnessmap_fragment:Yv,metalnessmap_pars_fragment:Kv,morphinstance_vertex:Zv,morphcolor_vertex:Jv,morphnormal_vertex:Qv,morphtarget_pars_vertex:e0,morphtarget_vertex:t0,normal_fragment_begin:n0,normal_fragment_maps:i0,normal_pars_fragment:r0,normal_pars_vertex:s0,normal_vertex:a0,normalmap_pars_fragment:o0,clearcoat_normal_fragment_begin:c0,clearcoat_normal_fragment_maps:l0,clearcoat_pars_fragment:u0,iridescence_pars_fragment:h0,opaque_fragment:f0,packing:d0,premultiplied_alpha_fragment:p0,project_vertex:m0,dithering_fragment:_0,dithering_pars_fragment:g0,roughnessmap_fragment:v0,roughnessmap_pars_fragment:x0,shadowmap_pars_fragment:y0,shadowmap_pars_vertex:E0,shadowmap_vertex:S0,shadowmask_pars_fragment:M0,skinbase_vertex:T0,skinning_pars_vertex:w0,skinning_vertex:b0,skinnormal_vertex:A0,specularmap_fragment:R0,specularmap_pars_fragment:C0,tonemapping_fragment:P0,tonemapping_pars_fragment:D0,transmission_fragment:L0,transmission_pars_fragment:F0,uv_pars_fragment:I0,uv_pars_vertex:U0,uv_vertex:N0,worldpos_vertex:O0,background_vert:k0,background_frag:B0,backgroundCube_vert:z0,backgroundCube_frag:H0,cube_vert:V0,cube_frag:G0,depth_vert:W0,depth_frag:X0,distanceRGBA_vert:$0,distanceRGBA_frag:j0,equirect_vert:q0,equirect_frag:Y0,linedashed_vert:K0,linedashed_frag:Z0,meshbasic_vert:J0,meshbasic_frag:Q0,meshlambert_vert:ex,meshlambert_frag:tx,meshmatcap_vert:nx,meshmatcap_frag:ix,meshnormal_vert:rx,meshnormal_frag:sx,meshphong_vert:ax,meshphong_frag:ox,meshphysical_vert:cx,meshphysical_frag:lx,meshtoon_vert:ux,meshtoon_frag:hx,points_vert:fx,points_frag:dx,shadow_vert:px,shadow_frag:mx,sprite_vert:_x,sprite_frag:gx},Fe={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},kn={basic:{uniforms:nn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:nn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new gt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:nn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:nn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:nn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new gt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:nn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:nn([Fe.points,Fe.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:nn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:nn([Fe.common,Fe.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:nn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:nn([Fe.sprite,Fe.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:nn([Fe.common,Fe.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:nn([Fe.lights,Fe.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};kn.physical={uniforms:nn([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Ds={r:0,b:0,g:0},Ci=new Gn,vx=new Ot;function xx(i,e,t,n,a,o,u){const h=new gt(0);let p=o===!0?0:1,d,v,m=null,x=0,y=null;function A(I){let F=I.isScene===!0?I.background:null;return F&&F.isTexture&&(F=(I.backgroundBlurriness>0?t:e).get(F)),F}function R(I){let F=!1;const k=A(I);k===null?_(h,p):k&&k.isColor&&(_(k,1),F=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,u):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(i.autoClear||F)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function E(I,F){const k=A(F);k&&(k.isCubeTexture||k.mapping===Zs)?(v===void 0&&(v=new yn(new Hr(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:_r(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(D,z,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),Ci.copy(F.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),v.material.uniforms.envMap.value=k,v.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(vx.makeRotationFromEuler(Ci)),v.material.toneMapped=Mt.getTransfer(k.colorSpace)!==Rt,(m!==k||x!==k.version||y!==i.toneMapping)&&(v.material.needsUpdate=!0,m=k,x=k.version,y=i.toneMapping),v.layers.enableAll(),I.unshift(v,v.geometry,v.material,0,0,null)):k&&k.isTexture&&(d===void 0&&(d=new yn(new Vr(2,2),new mi({name:"BackgroundMaterial",uniforms:_r(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(d)),d.material.uniforms.t2D.value=k,d.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,d.material.toneMapped=Mt.getTransfer(k.colorSpace)!==Rt,k.matrixAutoUpdate===!0&&k.updateMatrix(),d.material.uniforms.uvTransform.value.copy(k.matrix),(m!==k||x!==k.version||y!==i.toneMapping)&&(d.material.needsUpdate=!0,m=k,x=k.version,y=i.toneMapping),d.layers.enableAll(),I.unshift(d,d.geometry,d.material,0,0,null))}function _(I,F){I.getRGB(Ds,Ru(i)),n.buffers.color.setClear(Ds.r,Ds.g,Ds.b,F,u)}function O(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(I,F=1){h.set(I),p=F,_(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(I){p=I,_(h,p)},render:R,addToRenderList:E,dispose:O}}function yx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=x(null);let o=a,u=!1;function h(T,B,Y,ee,Z){let oe=!1;const ie=m(ee,Y,B);o!==ie&&(o=ie,d(o.object)),oe=y(T,ee,Y,Z),oe&&A(T,ee,Y,Z),Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(oe||u)&&(u=!1,F(T,B,Y,ee),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function p(){return i.createVertexArray()}function d(T){return i.bindVertexArray(T)}function v(T){return i.deleteVertexArray(T)}function m(T,B,Y){const ee=Y.wireframe===!0;let Z=n[T.id];Z===void 0&&(Z={},n[T.id]=Z);let oe=Z[B.id];oe===void 0&&(oe={},Z[B.id]=oe);let ie=oe[ee];return ie===void 0&&(ie=x(p()),oe[ee]=ie),ie}function x(T){const B=[],Y=[],ee=[];for(let Z=0;Z<t;Z++)B[Z]=0,Y[Z]=0,ee[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Y,attributeDivisors:ee,object:T,attributes:{},index:null}}function y(T,B,Y,ee){const Z=o.attributes,oe=B.attributes;let ie=0;const ve=Y.getAttributes();for(const ne in ve)if(ve[ne].location>=0){const be=Z[ne];let Le=oe[ne];if(Le===void 0&&(ne==="instanceMatrix"&&T.instanceMatrix&&(Le=T.instanceMatrix),ne==="instanceColor"&&T.instanceColor&&(Le=T.instanceColor)),be===void 0||be.attribute!==Le||Le&&be.data!==Le.data)return!0;ie++}return o.attributesNum!==ie||o.index!==ee}function A(T,B,Y,ee){const Z={},oe=B.attributes;let ie=0;const ve=Y.getAttributes();for(const ne in ve)if(ve[ne].location>=0){let be=oe[ne];be===void 0&&(ne==="instanceMatrix"&&T.instanceMatrix&&(be=T.instanceMatrix),ne==="instanceColor"&&T.instanceColor&&(be=T.instanceColor));const Le={};Le.attribute=be,be&&be.data&&(Le.data=be.data),Z[ne]=Le,ie++}o.attributes=Z,o.attributesNum=ie,o.index=ee}function R(){const T=o.newAttributes;for(let B=0,Y=T.length;B<Y;B++)T[B]=0}function E(T){_(T,0)}function _(T,B){const Y=o.newAttributes,ee=o.enabledAttributes,Z=o.attributeDivisors;Y[T]=1,ee[T]===0&&(i.enableVertexAttribArray(T),ee[T]=1),Z[T]!==B&&(i.vertexAttribDivisor(T,B),Z[T]=B)}function O(){const T=o.newAttributes,B=o.enabledAttributes;for(let Y=0,ee=B.length;Y<ee;Y++)B[Y]!==T[Y]&&(i.disableVertexAttribArray(Y),B[Y]=0)}function I(T,B,Y,ee,Z,oe,ie){ie===!0?i.vertexAttribIPointer(T,B,Y,Z,oe):i.vertexAttribPointer(T,B,Y,ee,Z,oe)}function F(T,B,Y,ee){R();const Z=ee.attributes,oe=Y.getAttributes(),ie=B.defaultAttributeValues;for(const ve in oe){const ne=oe[ve];if(ne.location>=0){let me=Z[ve];if(me===void 0&&(ve==="instanceMatrix"&&T.instanceMatrix&&(me=T.instanceMatrix),ve==="instanceColor"&&T.instanceColor&&(me=T.instanceColor)),me!==void 0){const be=me.normalized,Le=me.itemSize,He=e.get(me);if(He===void 0)continue;const Qe=He.buffer,Je=He.type,nt=He.bytesPerElement,le=Je===i.INT||Je===i.UNSIGNED_INT||me.gpuType===Zo;if(me.isInterleavedBufferAttribute){const fe=me.data,ce=fe.stride,ye=me.offset;if(fe.isInstancedInterleavedBuffer){for(let Be=0;Be<ne.locationSize;Be++)_(ne.location+Be,fe.meshPerAttribute);T.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Be=0;Be<ne.locationSize;Be++)E(ne.location+Be);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let Be=0;Be<ne.locationSize;Be++)I(ne.location+Be,Le/ne.locationSize,Je,be,ce*nt,(ye+Le/ne.locationSize*Be)*nt,le)}else{if(me.isInstancedBufferAttribute){for(let fe=0;fe<ne.locationSize;fe++)_(ne.location+fe,me.meshPerAttribute);T.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let fe=0;fe<ne.locationSize;fe++)E(ne.location+fe);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let fe=0;fe<ne.locationSize;fe++)I(ne.location+fe,Le/ne.locationSize,Je,be,Le*nt,Le/ne.locationSize*fe*nt,le)}}else if(ie!==void 0){const be=ie[ve];if(be!==void 0)switch(be.length){case 2:i.vertexAttrib2fv(ne.location,be);break;case 3:i.vertexAttrib3fv(ne.location,be);break;case 4:i.vertexAttrib4fv(ne.location,be);break;default:i.vertexAttrib1fv(ne.location,be)}}}}O()}function k(){q();for(const T in n){const B=n[T];for(const Y in B){const ee=B[Y];for(const Z in ee)v(ee[Z].object),delete ee[Z];delete B[Y]}delete n[T]}}function D(T){if(n[T.id]===void 0)return;const B=n[T.id];for(const Y in B){const ee=B[Y];for(const Z in ee)v(ee[Z].object),delete ee[Z];delete B[Y]}delete n[T.id]}function z(T){for(const B in n){const Y=n[B];if(Y[T.id]===void 0)continue;const ee=Y[T.id];for(const Z in ee)v(ee[Z].object),delete ee[Z];delete Y[T.id]}}function q(){P(),u=!0,o!==a&&(o=a,d(o.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:h,reset:q,resetDefaultState:P,dispose:k,releaseStatesOfGeometry:D,releaseStatesOfProgram:z,initAttributes:R,enableAttribute:E,disableUnusedAttributes:O}}function Ex(i,e,t){let n;function a(d){n=d}function o(d,v){i.drawArrays(n,d,v),t.update(v,n,1)}function u(d,v,m){m!==0&&(i.drawArraysInstanced(n,d,v,m),t.update(v,n,m))}function h(d,v,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,v,0,m);let y=0;for(let A=0;A<m;A++)y+=v[A];t.update(y,n,1)}function p(d,v,m,x){if(m===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let A=0;A<d.length;A++)u(d[A],v[A],x[A]);else{y.multiDrawArraysInstancedWEBGL(n,d,0,v,0,x,0,m);let A=0;for(let R=0;R<m;R++)A+=v[R]*x[R];t.update(A,n,1)}}this.setMode=a,this.render=o,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function Sx(i,e,t,n){let a;function o(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(z){return!(z!==Dn&&n.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const q=z===kr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Vn&&n.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Qn&&!q)}function p(z){if(z==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const v=p(d);v!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",v,"instead."),d=v);const m=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=i.getParameter(i.MAX_TEXTURE_SIZE),E=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),O=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),F=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),k=A>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:m,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:A,maxTextureSize:R,maxCubemapSize:E,maxAttributes:_,maxVertexUniforms:O,maxVaryings:I,maxFragmentUniforms:F,vertexTextures:k,maxSamples:D}}function Mx(i){const e=this;let t=null,n=0,a=!1,o=!1;const u=new ui,h=new ct,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(m,x){const y=m.length!==0||x||n!==0||a;return a=x,n=m.length,y},this.beginShadows=function(){o=!0,v(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,x){t=v(m,x,0)},this.setState=function(m,x,y){const A=m.clippingPlanes,R=m.clipIntersection,E=m.clipShadows,_=i.get(m);if(!a||A===null||A.length===0||o&&!E)o?v(null):d();else{const O=o?0:n,I=O*4;let F=_.clippingState||null;p.value=F,F=v(A,x,I,y);for(let k=0;k!==I;++k)F[k]=t[k];_.clippingState=F,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=O}};function d(){p.value!==t&&(p.value=t,p.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function v(m,x,y,A){const R=m!==null?m.length:0;let E=null;if(R!==0){if(E=p.value,A!==!0||E===null){const _=y+R*4,O=x.matrixWorldInverse;h.getNormalMatrix(O),(E===null||E.length<_)&&(E=new Float32Array(_));for(let I=0,F=y;I!==R;++I,F+=4)u.copy(m[I]).applyMatrix4(O,h),u.normal.toArray(E,F),E[F+3]=u.constant}p.value=E,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,E}}function Tx(i){let e=new WeakMap;function t(u,h){return h===po?u.mapping=dr:h===mo&&(u.mapping=pr),u}function n(u){if(u&&u.isTexture){const h=u.mapping;if(h===po||h===mo)if(e.has(u)){const p=e.get(u).texture;return t(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const d=new yg(p.height);return d.fromEquirectangularTexture(i,u),e.set(u,d),u.addEventListener("dispose",a),t(d.texture,u.mapping)}else return null}}return u}function a(u){const h=u.target;h.removeEventListener("dispose",a);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}const or=4,Il=[.125,.215,.35,.446,.526,.582],Ii=20,Wa=new Uu,Ul=new gt;let Xa=null,$a=0,ja=0,qa=!1;const Li=(1+Math.sqrt(5))/2,tr=1/Li,Nl=[new J(-Li,tr,0),new J(Li,tr,0),new J(-tr,0,Li),new J(tr,0,Li),new J(0,Li,-tr),new J(0,Li,tr),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],wx=new J;class Ol{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,a=100,o={}){const{size:u=256,position:h=wx}=o;Xa=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,n,a,p,h),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xa,$a,ja),this._renderer.xr.enabled=qa,e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xa=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:kr,format:Dn,colorSpace:mr,depthBuffer:!1},a=kl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kl(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bx(o)),this._blurMaterial=Ax(o,e,t)}return a}_compileMaterial(e){const t=new yn(this._lodPlanes[0],e);this._renderer.compile(t,Wa)}_sceneToCubeUV(e,t,n,a,o){const p=new xn(90,1,t,n),d=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],m=this._renderer,x=m.autoClear,y=m.toneMapping;m.getClearColor(Ul),m.toneMapping=di,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(a),m.clearDepth(),m.setRenderTarget(null));const R=new sc({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),E=new yn(new Hr,R);let _=!1;const O=e.background;O?O.isColor&&(R.color.copy(O),e.background=null,_=!0):(R.color.copy(Ul),_=!0);for(let I=0;I<6;I++){const F=I%3;F===0?(p.up.set(0,d[I],0),p.position.set(o.x,o.y,o.z),p.lookAt(o.x+v[I],o.y,o.z)):F===1?(p.up.set(0,0,d[I]),p.position.set(o.x,o.y,o.z),p.lookAt(o.x,o.y+v[I],o.z)):(p.up.set(0,d[I],0),p.position.set(o.x,o.y,o.z),p.lookAt(o.x,o.y,o.z+v[I]));const k=this._cubeSize;Ls(a,F*k,I>2?k:0,k,k),m.setRenderTarget(a),_&&m.render(E,p),m.render(e,p)}E.geometry.dispose(),E.material.dispose(),m.toneMapping=y,m.autoClear=x,e.background=O}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===dr||e.mapping===pr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=zl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bl());const o=a?this._cubemapMaterial:this._equirectMaterial,u=new yn(this._lodPlanes[0],o),h=o.uniforms;h.envMap.value=e;const p=this._cubeSize;Ls(t,0,0,3*p,2*p),n.setRenderTarget(t),n.render(u,Wa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let o=1;o<a;o++){const u=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),h=Nl[(a-o-1)%Nl.length];this._blur(e,o-1,o,u,h)}t.autoClear=n}_blur(e,t,n,a,o){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,n,a,"latitudinal",o),this._halfBlur(u,e,n,n,a,"longitudinal",o)}_halfBlur(e,t,n,a,o,u,h){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,m=new yn(this._lodPlanes[a],d),x=d.uniforms,y=this._sizeLods[n]-1,A=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*Ii-1),R=o/A,E=isFinite(o)?1+Math.floor(v*R):Ii;E>Ii&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${Ii}`);const _=[];let O=0;for(let z=0;z<Ii;++z){const q=z/R,P=Math.exp(-q*q/2);_.push(P),z===0?O+=P:z<E&&(O+=2*P)}for(let z=0;z<_.length;z++)_[z]=_[z]/O;x.envMap.value=e.texture,x.samples.value=E,x.weights.value=_,x.latitudinal.value=u==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:I}=this;x.dTheta.value=A,x.mipInt.value=I-n;const F=this._sizeLods[a],k=3*F*(a>I-or?a-I+or:0),D=4*(this._cubeSize-F);Ls(t,k,D,3*F,2*F),p.setRenderTarget(t),p.render(m,Wa)}}function bx(i){const e=[],t=[],n=[];let a=i;const o=i-or+1+Il.length;for(let u=0;u<o;u++){const h=Math.pow(2,a);t.push(h);let p=1/h;u>i-or?p=Il[u-i+or-1]:u===0&&(p=0),n.push(p);const d=1/(h-2),v=-d,m=1+d,x=[v,v,m,v,m,m,v,v,m,m,v,m],y=6,A=6,R=3,E=2,_=1,O=new Float32Array(R*A*y),I=new Float32Array(E*A*y),F=new Float32Array(_*A*y);for(let D=0;D<y;D++){const z=D%3*2/3-1,q=D>2?0:-1,P=[z,q,0,z+2/3,q,0,z+2/3,q+1,0,z,q,0,z+2/3,q+1,0,z,q+1,0];O.set(P,R*A*D),I.set(x,E*A*D);const T=[D,D,D,D,D,D];F.set(T,_*A*D)}const k=new Fn;k.setAttribute("position",new En(O,R)),k.setAttribute("uv",new En(I,E)),k.setAttribute("faceIndex",new En(F,_)),e.push(k),a>or&&a--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function kl(i,e,t){const n=new Bi(i,e,t);return n.texture.mapping=Zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ls(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function Ax(i,e,t){const n=new Float32Array(Ii),a=new J(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:cc(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Bl(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cc(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function zl(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function cc(){return`

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
	`}function Rx(i){let e=new WeakMap,t=null;function n(h){if(h&&h.isTexture){const p=h.mapping,d=p===po||p===mo,v=p===dr||p===pr;if(d||v){let m=e.get(h);const x=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return t===null&&(t=new Ol(i)),m=d?t.fromEquirectangular(h,m):t.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const y=h.image;return d&&y&&y.height>0||v&&y&&a(y)?(t===null&&(t=new Ol(i)),m=d?t.fromEquirectangular(h):t.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",o),m.texture):null}}}return h}function a(h){let p=0;const d=6;for(let v=0;v<d;v++)h[v]!==void 0&&p++;return p===d}function o(h){const p=h.target;p.removeEventListener("dispose",o);const d=e.get(p);d!==void 0&&(e.delete(p),d.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:u}}function Cx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let a;switch(n){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(n)}return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&Or("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function Px(i,e,t,n){const a={},o=new WeakMap;function u(m){const x=m.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);x.removeEventListener("dispose",u),delete a[x.id];const y=o.get(x);y&&(e.remove(y),o.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function h(m,x){return a[x.id]===!0||(x.addEventListener("dispose",u),a[x.id]=!0,t.memory.geometries++),x}function p(m){const x=m.attributes;for(const y in x)e.update(x[y],i.ARRAY_BUFFER)}function d(m){const x=[],y=m.index,A=m.attributes.position;let R=0;if(y!==null){const O=y.array;R=y.version;for(let I=0,F=O.length;I<F;I+=3){const k=O[I+0],D=O[I+1],z=O[I+2];x.push(k,D,D,z,z,k)}}else if(A!==void 0){const O=A.array;R=A.version;for(let I=0,F=O.length/3-1;I<F;I+=3){const k=I+0,D=I+1,z=I+2;x.push(k,D,D,z,z,k)}}else return;const E=new(Su(x)?Au:bu)(x,1);E.version=R;const _=o.get(m);_&&e.remove(_),o.set(m,E)}function v(m){const x=o.get(m);if(x){const y=m.index;y!==null&&x.version<y.version&&d(m)}else d(m);return o.get(m)}return{get:h,update:p,getWireframeAttribute:v}}function Dx(i,e,t){let n;function a(x){n=x}let o,u;function h(x){o=x.type,u=x.bytesPerElement}function p(x,y){i.drawElements(n,y,o,x*u),t.update(y,n,1)}function d(x,y,A){A!==0&&(i.drawElementsInstanced(n,y,o,x*u,A),t.update(y,n,A))}function v(x,y,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,y,0,o,x,0,A);let E=0;for(let _=0;_<A;_++)E+=y[_];t.update(E,n,1)}function m(x,y,A,R){if(A===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let _=0;_<x.length;_++)d(x[_]/u,y[_],R[_]);else{E.multiDrawElementsInstancedWEBGL(n,y,0,o,x,0,R,0,A);let _=0;for(let O=0;O<A;O++)_+=y[O]*R[O];t.update(_,n,1)}}this.setMode=a,this.setIndex=h,this.render=p,this.renderInstances=d,this.renderMultiDraw=v,this.renderMultiDrawInstances=m}function Lx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,u,h){switch(t.calls++,u){case i.TRIANGLES:t.triangles+=h*(o/3);break;case i.LINES:t.lines+=h*(o/2);break;case i.LINE_STRIP:t.lines+=h*(o-1);break;case i.LINE_LOOP:t.lines+=h*o;break;case i.POINTS:t.points+=h*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function Fx(i,e,t){const n=new WeakMap,a=new Nt;function o(u,h,p){const d=u.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=v!==void 0?v.length:0;let x=n.get(h);if(x===void 0||x.count!==m){let P=function(){z.dispose(),n.delete(h),h.removeEventListener("dispose",P)};x!==void 0&&x.texture.dispose();const y=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],_=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let I=0;y===!0&&(I=1),A===!0&&(I=2),R===!0&&(I=3);let F=h.attributes.position.count*I,k=1;F>e.maxTextureSize&&(k=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const D=new Float32Array(F*k*4*m),z=new Mu(D,F,k,m);z.type=Qn,z.needsUpdate=!0;const q=I*4;for(let T=0;T<m;T++){const B=E[T],Y=_[T],ee=O[T],Z=F*k*4*T;for(let oe=0;oe<B.count;oe++){const ie=oe*q;y===!0&&(a.fromBufferAttribute(B,oe),D[Z+ie+0]=a.x,D[Z+ie+1]=a.y,D[Z+ie+2]=a.z,D[Z+ie+3]=0),A===!0&&(a.fromBufferAttribute(Y,oe),D[Z+ie+4]=a.x,D[Z+ie+5]=a.y,D[Z+ie+6]=a.z,D[Z+ie+7]=0),R===!0&&(a.fromBufferAttribute(ee,oe),D[Z+ie+8]=a.x,D[Z+ie+9]=a.y,D[Z+ie+10]=a.z,D[Z+ie+11]=ee.itemSize===4?a.w:1)}}x={count:m,texture:z,size:new at(F,k)},n.set(h,x),h.addEventListener("dispose",P)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(i,"morphTexture",u.morphTexture,t);else{let y=0;for(let R=0;R<d.length;R++)y+=d[R];const A=h.morphTargetsRelative?1:1-y;p.getUniforms().setValue(i,"morphTargetBaseInfluence",A),p.getUniforms().setValue(i,"morphTargetInfluences",d)}p.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}return{update:o}}function Ix(i,e,t,n){let a=new WeakMap;function o(p){const d=n.render.frame,v=p.geometry,m=e.get(p,v);if(a.get(m)!==d&&(e.update(m),a.set(m,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),a.get(p)!==d&&(t.update(p.instanceMatrix,i.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,i.ARRAY_BUFFER),a.set(p,d))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==d&&(x.update(),a.set(x,d))}return m}function u(){a=new WeakMap}function h(p){const d=p.target;d.removeEventListener("dispose",h),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:u}}const Ou=new ln,Hl=new Lu(1,1),ku=new Mu,Bu=new ig,zu=new Pu,Vl=[],Gl=[],Wl=new Float32Array(16),Xl=new Float32Array(9),$l=new Float32Array(4);function vr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const a=e*t;let o=Vl[a];if(o===void 0&&(o=new Float32Array(a),Vl[a]=o),e!==0){n.toArray(o,0);for(let u=1,h=0;u!==e;++u)h+=t,i[u].toArray(o,h)}return o}function Xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Qs(i,e){let t=Gl[e];t===void 0&&(t=new Int32Array(e),Gl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ux(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Nx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function Ox(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function kx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function Bx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Xt(t,n))return;$l.set(n),i.uniformMatrix2fv(this.addr,!1,$l),$t(t,n)}}function zx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Xt(t,n))return;Xl.set(n),i.uniformMatrix3fv(this.addr,!1,Xl),$t(t,n)}}function Hx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Xt(t,n))return;Wl.set(n),i.uniformMatrix4fv(this.addr,!1,Wl),$t(t,n)}}function Vx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Gx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function Wx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function Xx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function $x(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function qx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function Yx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function Kx(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let o;this.type===i.SAMPLER_2D_SHADOW?(Hl.compareFunction=Eu,o=Hl):o=Ou,t.setTexture2D(e||o,a)}function Zx(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||Bu,a)}function Jx(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||zu,a)}function Qx(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||ku,a)}function ey(i){switch(i){case 5126:return Ux;case 35664:return Nx;case 35665:return Ox;case 35666:return kx;case 35674:return Bx;case 35675:return zx;case 35676:return Hx;case 5124:case 35670:return Vx;case 35667:case 35671:return Gx;case 35668:case 35672:return Wx;case 35669:case 35673:return Xx;case 5125:return $x;case 36294:return jx;case 36295:return qx;case 36296:return Yx;case 35678:case 36198:case 36298:case 36306:case 35682:return Kx;case 35679:case 36299:case 36307:return Zx;case 35680:case 36300:case 36308:case 36293:return Jx;case 36289:case 36303:case 36311:case 36292:return Qx}}function ty(i,e){i.uniform1fv(this.addr,e)}function ny(i,e){const t=vr(e,this.size,2);i.uniform2fv(this.addr,t)}function iy(i,e){const t=vr(e,this.size,3);i.uniform3fv(this.addr,t)}function ry(i,e){const t=vr(e,this.size,4);i.uniform4fv(this.addr,t)}function sy(i,e){const t=vr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ay(i,e){const t=vr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function oy(i,e){const t=vr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function cy(i,e){i.uniform1iv(this.addr,e)}function ly(i,e){i.uniform2iv(this.addr,e)}function uy(i,e){i.uniform3iv(this.addr,e)}function hy(i,e){i.uniform4iv(this.addr,e)}function fy(i,e){i.uniform1uiv(this.addr,e)}function dy(i,e){i.uniform2uiv(this.addr,e)}function py(i,e){i.uniform3uiv(this.addr,e)}function my(i,e){i.uniform4uiv(this.addr,e)}function _y(i,e,t){const n=this.cache,a=e.length,o=Qs(t,a);Xt(n,o)||(i.uniform1iv(this.addr,o),$t(n,o));for(let u=0;u!==a;++u)t.setTexture2D(e[u]||Ou,o[u])}function gy(i,e,t){const n=this.cache,a=e.length,o=Qs(t,a);Xt(n,o)||(i.uniform1iv(this.addr,o),$t(n,o));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||Bu,o[u])}function vy(i,e,t){const n=this.cache,a=e.length,o=Qs(t,a);Xt(n,o)||(i.uniform1iv(this.addr,o),$t(n,o));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||zu,o[u])}function xy(i,e,t){const n=this.cache,a=e.length,o=Qs(t,a);Xt(n,o)||(i.uniform1iv(this.addr,o),$t(n,o));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||ku,o[u])}function yy(i){switch(i){case 5126:return ty;case 35664:return ny;case 35665:return iy;case 35666:return ry;case 35674:return sy;case 35675:return ay;case 35676:return oy;case 5124:case 35670:return cy;case 35667:case 35671:return ly;case 35668:case 35672:return uy;case 35669:case 35673:return hy;case 5125:return fy;case 36294:return dy;case 36295:return py;case 36296:return my;case 35678:case 36198:case 36298:case 36306:case 35682:return _y;case 35679:case 36299:case 36307:return gy;case 35680:case 36300:case 36308:case 36293:return vy;case 36289:case 36303:case 36311:case 36292:return xy}}class Ey{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ey(t.type)}}class Sy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yy(t.type)}}class My{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let o=0,u=a.length;o!==u;++o){const h=a[o];h.setValue(e,t[h.id],n)}}}const Ya=/(\w+)(\])?(\[|\.)?/g;function jl(i,e){i.seq.push(e),i.map[e.id]=e}function Ty(i,e,t){const n=i.name,a=n.length;for(Ya.lastIndex=0;;){const o=Ya.exec(n),u=Ya.lastIndex;let h=o[1];const p=o[2]==="]",d=o[3];if(p&&(h=h|0),d===void 0||d==="["&&u+2===a){jl(t,d===void 0?new Ey(h,i,e):new Sy(h,i,e));break}else{let m=t.map[h];m===void 0&&(m=new My(h),jl(t,m)),t=m}}}class Ws{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),u=e.getUniformLocation(t,o.name);Ty(o,u,this)}}setValue(e,t,n,a){const o=this.map[t];o!==void 0&&o.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let o=0,u=t.length;o!==u;++o){const h=t[o],p=n[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,o=e.length;a!==o;++a){const u=e[a];u.id in t&&n.push(u)}return n}}function ql(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const wy=37297;let by=0;function Ay(i,e){const t=i.split(`
`),n=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let u=a;u<o;u++){const h=u+1;n.push(`${h===e?">":" "} ${h}: ${t[u]}`)}return n.join(`
`)}const Yl=new ct;function Ry(i){Mt._getMatrix(Yl,Mt.workingColorSpace,i);const e=`mat3( ${Yl.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(i)){case $s:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Kl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),o=(i.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const h=parseInt(u[1]);return t.toUpperCase()+`

`+o+`

`+Ay(i.getShaderSource(e),h)}else return o}function Cy(i,e){const t=Ry(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Py(i,e){let t;switch(e){case P_:t="Linear";break;case D_:t="Reinhard";break;case L_:t="Cineon";break;case F_:t="ACESFilmic";break;case U_:t="AgX";break;case N_:t="Neutral";break;case I_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fs=new J;function Dy(){Mt.getLuminanceCoefficients(Fs);const i=Fs.x.toFixed(4),e=Fs.y.toFixed(4),t=Fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ly(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function Fy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Iy(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const o=i.getActiveAttrib(e,a),u=o.name;let h=1;o.type===i.FLOAT_MAT2&&(h=2),o.type===i.FLOAT_MAT3&&(h=3),o.type===i.FLOAT_MAT4&&(h=4),t[u]={type:o.type,location:i.getAttribLocation(e,u),locationSize:h}}return t}function Dr(i){return i!==""}function Zl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Uy=/^[ \t]*#include +<([\w\d./]+)>/gm;function jo(i){return i.replace(Uy,Oy)}const Ny=new Map;function Oy(i,e){let t=dt[e];if(t===void 0){const n=Ny.get(e);if(n!==void 0)t=dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return jo(t)}const ky=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ql(i){return i.replace(ky,By)}function By(i,e,t,n){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function eu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function zy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===lu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===l_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function Hy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case dr:case pr:e="ENVMAP_TYPE_CUBE";break;case Zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case pr:e="ENVMAP_MODE_REFRACTION";break}return e}function Gy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case uu:e="ENVMAP_BLENDING_MULTIPLY";break;case R_:e="ENVMAP_BLENDING_MIX";break;case C_:e="ENVMAP_BLENDING_ADD";break}return e}function Wy(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Xy(i,e,t,n){const a=i.getContext(),o=t.defines;let u=t.vertexShader,h=t.fragmentShader;const p=zy(t),d=Hy(t),v=Vy(t),m=Gy(t),x=Wy(t),y=Ly(t),A=Fy(o),R=a.createProgram();let E,_,O=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(E=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(Dr).join(`
`),E.length>0&&(E+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(Dr).join(`
`),_.length>0&&(_+=`
`)):(E=[eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),_=[eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+v:"",t.envMap?"#define "+m:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?dt.tonemapping_pars_fragment:"",t.toneMapping!==di?Py("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,Cy("linearToOutputTexel",t.outputColorSpace),Dy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Dr).join(`
`)),u=jo(u),u=Zl(u,t),u=Jl(u,t),h=jo(h),h=Zl(h,t),h=Jl(h,t),u=Ql(u),h=Ql(h),t.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,E=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,_=["#define varying in",t.glslVersion===ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const I=O+E+u,F=O+_+h,k=ql(a,a.VERTEX_SHADER,I),D=ql(a,a.FRAGMENT_SHADER,F);a.attachShader(R,k),a.attachShader(R,D),t.index0AttributeName!==void 0?a.bindAttribLocation(R,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function z(B){if(i.debug.checkShaderErrors){const Y=a.getProgramInfoLog(R)||"",ee=a.getShaderInfoLog(k)||"",Z=a.getShaderInfoLog(D)||"",oe=Y.trim(),ie=ee.trim(),ve=Z.trim();let ne=!0,me=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,R,k,D);else{const be=Kl(a,k,"vertex"),Le=Kl(a,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+oe+`
`+be+`
`+Le)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(ie===""||ve==="")&&(me=!1);me&&(B.diagnostics={runnable:ne,programLog:oe,vertexShader:{log:ie,prefix:E},fragmentShader:{log:ve,prefix:_}})}a.deleteShader(k),a.deleteShader(D),q=new Ws(a,R),P=Iy(a,R)}let q;this.getUniforms=function(){return q===void 0&&z(this),q};let P;this.getAttributes=function(){return P===void 0&&z(this),P};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=a.getProgramParameter(R,wy)),T},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=by++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=k,this.fragmentShader=D,this}let $y=0;class jy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,a=this._getShaderStage(t),o=this._getShaderStage(n),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(o)===!1&&(u.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new qy(e),t.set(e,n)),n}}class qy{constructor(e){this.id=$y++,this.code=e,this.usedTimes=0}}function Yy(i,e,t,n,a,o,u){const h=new Tu,p=new jy,d=new Set,v=[],m=a.logarithmicDepthBuffer,x=a.vertexTextures;let y=a.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(P){return d.add(P),P===0?"uv":`uv${P}`}function E(P,T,B,Y,ee){const Z=Y.fog,oe=ee.geometry,ie=P.isMeshStandardMaterial?Y.environment:null,ve=(P.isMeshStandardMaterial?t:e).get(P.envMap||ie),ne=ve&&ve.mapping===Zs?ve.image.height:null,me=A[P.type];P.precision!==null&&(y=a.getMaxPrecision(P.precision),y!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",y,"instead."));const be=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Le=be!==void 0?be.length:0;let He=0;oe.morphAttributes.position!==void 0&&(He=1),oe.morphAttributes.normal!==void 0&&(He=2),oe.morphAttributes.color!==void 0&&(He=3);let Qe,Je,nt,le;if(me){const ut=kn[me];Qe=ut.vertexShader,Je=ut.fragmentShader}else Qe=P.vertexShader,Je=P.fragmentShader,p.update(P),nt=p.getVertexShaderID(P),le=p.getFragmentShaderID(P);const fe=i.getRenderTarget(),ce=i.state.buffers.depth.getReversed(),ye=ee.isInstancedMesh===!0,Be=ee.isBatchedMesh===!0,he=!!P.map,Ue=!!P.matcap,U=!!ve,Ve=!!P.aoMap,Ge=!!P.lightMap,Ye=!!P.bumpMap,Ae=!!P.normalMap,it=!!P.displacementMap,Se=!!P.emissiveMap,We=!!P.metalnessMap,lt=!!P.roughnessMap,yt=P.anisotropy>0,N=P.clearcoat>0,b=P.dispersion>0,X=P.iridescence>0,se=P.sheen>0,pe=P.transmission>0,ue=yt&&!!P.anisotropyMap,Ke=N&&!!P.clearcoatMap,Re=N&&!!P.clearcoatNormalMap,Xe=N&&!!P.clearcoatRoughnessMap,je=X&&!!P.iridescenceMap,Te=X&&!!P.iridescenceThicknessMap,Ne=se&&!!P.sheenColorMap,rt=se&&!!P.sheenRoughnessMap,$e=!!P.specularMap,Pe=!!P.specularColorMap,ot=!!P.specularIntensityMap,V=pe&&!!P.transmissionMap,we=pe&&!!P.thicknessMap,Ce=!!P.gradientMap,ke=!!P.alphaMap,G=P.alphaTest>0,H=!!P.alphaHash,Oe=!!P.extensions;let st=di;P.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(st=i.toneMapping);const Et={shaderID:me,shaderType:P.type,shaderName:P.name,vertexShader:Qe,fragmentShader:Je,defines:P.defines,customVertexShaderID:nt,customFragmentShaderID:le,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:y,batching:Be,batchingColor:Be&&ee._colorsTexture!==null,instancing:ye,instancingColor:ye&&ee.instanceColor!==null,instancingMorph:ye&&ee.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:fe===null?i.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:mr,alphaToCoverage:!!P.alphaToCoverage,map:he,matcap:Ue,envMap:U,envMapMode:U&&ve.mapping,envMapCubeUVHeight:ne,aoMap:Ve,lightMap:Ge,bumpMap:Ye,normalMap:Ae,displacementMap:x&&it,emissiveMap:Se,normalMapObjectSpace:Ae&&P.normalMapType===z_,normalMapTangentSpace:Ae&&P.normalMapType===yu,metalnessMap:We,roughnessMap:lt,anisotropy:yt,anisotropyMap:ue,clearcoat:N,clearcoatMap:Ke,clearcoatNormalMap:Re,clearcoatRoughnessMap:Xe,dispersion:b,iridescence:X,iridescenceMap:je,iridescenceThicknessMap:Te,sheen:se,sheenColorMap:Ne,sheenRoughnessMap:rt,specularMap:$e,specularColorMap:Pe,specularIntensityMap:ot,transmission:pe,transmissionMap:V,thicknessMap:we,gradientMap:Ce,opaque:P.transparent===!1&&P.blending===ur&&P.alphaToCoverage===!1,alphaMap:ke,alphaTest:G,alphaHash:H,combine:P.combine,mapUv:he&&R(P.map.channel),aoMapUv:Ve&&R(P.aoMap.channel),lightMapUv:Ge&&R(P.lightMap.channel),bumpMapUv:Ye&&R(P.bumpMap.channel),normalMapUv:Ae&&R(P.normalMap.channel),displacementMapUv:it&&R(P.displacementMap.channel),emissiveMapUv:Se&&R(P.emissiveMap.channel),metalnessMapUv:We&&R(P.metalnessMap.channel),roughnessMapUv:lt&&R(P.roughnessMap.channel),anisotropyMapUv:ue&&R(P.anisotropyMap.channel),clearcoatMapUv:Ke&&R(P.clearcoatMap.channel),clearcoatNormalMapUv:Re&&R(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&R(P.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&R(P.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&R(P.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&R(P.sheenColorMap.channel),sheenRoughnessMapUv:rt&&R(P.sheenRoughnessMap.channel),specularMapUv:$e&&R(P.specularMap.channel),specularColorMapUv:Pe&&R(P.specularColorMap.channel),specularIntensityMapUv:ot&&R(P.specularIntensityMap.channel),transmissionMapUv:V&&R(P.transmissionMap.channel),thicknessMapUv:we&&R(P.thicknessMap.channel),alphaMapUv:ke&&R(P.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(Ae||yt),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!oe.attributes.uv&&(he||ke),fog:!!Z,useFog:P.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:P.flatShading===!0&&P.wireframe===!1,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:ce,skinning:ee.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:He,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,decodeVideoTexture:he&&P.map.isVideoTexture===!0&&Mt.getTransfer(P.map.colorSpace)===Rt,decodeVideoTextureEmissive:Se&&P.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(P.emissiveMap.colorSpace)===Rt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Cn,flipSided:P.side===cn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:Oe&&P.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&P.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Et.vertexUv1s=d.has(1),Et.vertexUv2s=d.has(2),Et.vertexUv3s=d.has(3),d.clear(),Et}function _(P){const T=[];if(P.shaderID?T.push(P.shaderID):(T.push(P.customVertexShaderID),T.push(P.customFragmentShaderID)),P.defines!==void 0)for(const B in P.defines)T.push(B),T.push(P.defines[B]);return P.isRawShaderMaterial===!1&&(O(T,P),I(T,P),T.push(i.outputColorSpace)),T.push(P.customProgramCacheKey),T.join()}function O(P,T){P.push(T.precision),P.push(T.outputColorSpace),P.push(T.envMapMode),P.push(T.envMapCubeUVHeight),P.push(T.mapUv),P.push(T.alphaMapUv),P.push(T.lightMapUv),P.push(T.aoMapUv),P.push(T.bumpMapUv),P.push(T.normalMapUv),P.push(T.displacementMapUv),P.push(T.emissiveMapUv),P.push(T.metalnessMapUv),P.push(T.roughnessMapUv),P.push(T.anisotropyMapUv),P.push(T.clearcoatMapUv),P.push(T.clearcoatNormalMapUv),P.push(T.clearcoatRoughnessMapUv),P.push(T.iridescenceMapUv),P.push(T.iridescenceThicknessMapUv),P.push(T.sheenColorMapUv),P.push(T.sheenRoughnessMapUv),P.push(T.specularMapUv),P.push(T.specularColorMapUv),P.push(T.specularIntensityMapUv),P.push(T.transmissionMapUv),P.push(T.thicknessMapUv),P.push(T.combine),P.push(T.fogExp2),P.push(T.sizeAttenuation),P.push(T.morphTargetsCount),P.push(T.morphAttributeCount),P.push(T.numDirLights),P.push(T.numPointLights),P.push(T.numSpotLights),P.push(T.numSpotLightMaps),P.push(T.numHemiLights),P.push(T.numRectAreaLights),P.push(T.numDirLightShadows),P.push(T.numPointLightShadows),P.push(T.numSpotLightShadows),P.push(T.numSpotLightShadowsWithMaps),P.push(T.numLightProbes),P.push(T.shadowMapType),P.push(T.toneMapping),P.push(T.numClippingPlanes),P.push(T.numClipIntersection),P.push(T.depthPacking)}function I(P,T){h.disableAll(),T.supportsVertexTextures&&h.enable(0),T.instancing&&h.enable(1),T.instancingColor&&h.enable(2),T.instancingMorph&&h.enable(3),T.matcap&&h.enable(4),T.envMap&&h.enable(5),T.normalMapObjectSpace&&h.enable(6),T.normalMapTangentSpace&&h.enable(7),T.clearcoat&&h.enable(8),T.iridescence&&h.enable(9),T.alphaTest&&h.enable(10),T.vertexColors&&h.enable(11),T.vertexAlphas&&h.enable(12),T.vertexUv1s&&h.enable(13),T.vertexUv2s&&h.enable(14),T.vertexUv3s&&h.enable(15),T.vertexTangents&&h.enable(16),T.anisotropy&&h.enable(17),T.alphaHash&&h.enable(18),T.batching&&h.enable(19),T.dispersion&&h.enable(20),T.batchingColor&&h.enable(21),T.gradientMap&&h.enable(22),P.push(h.mask),h.disableAll(),T.fog&&h.enable(0),T.useFog&&h.enable(1),T.flatShading&&h.enable(2),T.logarithmicDepthBuffer&&h.enable(3),T.reversedDepthBuffer&&h.enable(4),T.skinning&&h.enable(5),T.morphTargets&&h.enable(6),T.morphNormals&&h.enable(7),T.morphColors&&h.enable(8),T.premultipliedAlpha&&h.enable(9),T.shadowMapEnabled&&h.enable(10),T.doubleSided&&h.enable(11),T.flipSided&&h.enable(12),T.useDepthPacking&&h.enable(13),T.dithering&&h.enable(14),T.transmission&&h.enable(15),T.sheen&&h.enable(16),T.opaque&&h.enable(17),T.pointsUvs&&h.enable(18),T.decodeVideoTexture&&h.enable(19),T.decodeVideoTextureEmissive&&h.enable(20),T.alphaToCoverage&&h.enable(21),P.push(h.mask)}function F(P){const T=A[P.type];let B;if(T){const Y=kn[T];B=_g.clone(Y.uniforms)}else B=P.uniforms;return B}function k(P,T){let B;for(let Y=0,ee=v.length;Y<ee;Y++){const Z=v[Y];if(Z.cacheKey===T){B=Z,++B.usedTimes;break}}return B===void 0&&(B=new Xy(i,T,P,o),v.push(B)),B}function D(P){if(--P.usedTimes===0){const T=v.indexOf(P);v[T]=v[v.length-1],v.pop(),P.destroy()}}function z(P){p.remove(P)}function q(){p.dispose()}return{getParameters:E,getProgramCacheKey:_,getUniforms:F,acquireProgram:k,releaseProgram:D,releaseShaderCache:z,programs:v,dispose:q}}function Ky(){let i=new WeakMap;function e(u){return i.has(u)}function t(u){let h=i.get(u);return h===void 0&&(h={},i.set(u,h)),h}function n(u){i.delete(u)}function a(u,h,p){i.get(u)[h]=p}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:o}}function Zy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function tu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function nu(){const i=[];let e=0;const t=[],n=[],a=[];function o(){e=0,t.length=0,n.length=0,a.length=0}function u(m,x,y,A,R,E){let _=i[e];return _===void 0?(_={id:m.id,object:m,geometry:x,material:y,groupOrder:A,renderOrder:m.renderOrder,z:R,group:E},i[e]=_):(_.id=m.id,_.object=m,_.geometry=x,_.material=y,_.groupOrder=A,_.renderOrder=m.renderOrder,_.z=R,_.group=E),e++,_}function h(m,x,y,A,R,E){const _=u(m,x,y,A,R,E);y.transmission>0?n.push(_):y.transparent===!0?a.push(_):t.push(_)}function p(m,x,y,A,R,E){const _=u(m,x,y,A,R,E);y.transmission>0?n.unshift(_):y.transparent===!0?a.unshift(_):t.unshift(_)}function d(m,x){t.length>1&&t.sort(m||Zy),n.length>1&&n.sort(x||tu),a.length>1&&a.sort(x||tu)}function v(){for(let m=e,x=i.length;m<x;m++){const y=i[m];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:a,init:o,push:h,unshift:p,finish:v,sort:d}}function Jy(){let i=new WeakMap;function e(n,a){const o=i.get(n);let u;return o===void 0?(u=new nu,i.set(n,[u])):a>=o.length?(u=new nu,o.push(u)):u=o[a],u}function t(){i=new WeakMap}return{get:e,dispose:t}}function Qy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new gt};break;case"SpotLight":t={position:new J,direction:new J,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new J,halfWidth:new J,halfHeight:new J};break}return i[e.id]=t,t}}}function eE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let tE=0;function nE(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function iE(i){const e=new Qy,t=eE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new J);const a=new J,o=new Ot,u=new Ot;function h(d){let v=0,m=0,x=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let y=0,A=0,R=0,E=0,_=0,O=0,I=0,F=0,k=0,D=0,z=0;d.sort(nE);for(let P=0,T=d.length;P<T;P++){const B=d[P],Y=B.color,ee=B.intensity,Z=B.distance,oe=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)v+=Y.r*ee,m+=Y.g*ee,x+=Y.b*ee;else if(B.isLightProbe){for(let ie=0;ie<9;ie++)n.probe[ie].addScaledVector(B.sh.coefficients[ie],ee);z++}else if(B.isDirectionalLight){const ie=e.get(B);if(ie.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ve=B.shadow,ne=t.get(B);ne.shadowIntensity=ve.intensity,ne.shadowBias=ve.bias,ne.shadowNormalBias=ve.normalBias,ne.shadowRadius=ve.radius,ne.shadowMapSize=ve.mapSize,n.directionalShadow[y]=ne,n.directionalShadowMap[y]=oe,n.directionalShadowMatrix[y]=B.shadow.matrix,O++}n.directional[y]=ie,y++}else if(B.isSpotLight){const ie=e.get(B);ie.position.setFromMatrixPosition(B.matrixWorld),ie.color.copy(Y).multiplyScalar(ee),ie.distance=Z,ie.coneCos=Math.cos(B.angle),ie.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ie.decay=B.decay,n.spot[R]=ie;const ve=B.shadow;if(B.map&&(n.spotLightMap[k]=B.map,k++,ve.updateMatrices(B),B.castShadow&&D++),n.spotLightMatrix[R]=ve.matrix,B.castShadow){const ne=t.get(B);ne.shadowIntensity=ve.intensity,ne.shadowBias=ve.bias,ne.shadowNormalBias=ve.normalBias,ne.shadowRadius=ve.radius,ne.shadowMapSize=ve.mapSize,n.spotShadow[R]=ne,n.spotShadowMap[R]=oe,F++}R++}else if(B.isRectAreaLight){const ie=e.get(B);ie.color.copy(Y).multiplyScalar(ee),ie.halfWidth.set(B.width*.5,0,0),ie.halfHeight.set(0,B.height*.5,0),n.rectArea[E]=ie,E++}else if(B.isPointLight){const ie=e.get(B);if(ie.color.copy(B.color).multiplyScalar(B.intensity),ie.distance=B.distance,ie.decay=B.decay,B.castShadow){const ve=B.shadow,ne=t.get(B);ne.shadowIntensity=ve.intensity,ne.shadowBias=ve.bias,ne.shadowNormalBias=ve.normalBias,ne.shadowRadius=ve.radius,ne.shadowMapSize=ve.mapSize,ne.shadowCameraNear=ve.camera.near,ne.shadowCameraFar=ve.camera.far,n.pointShadow[A]=ne,n.pointShadowMap[A]=oe,n.pointShadowMatrix[A]=B.shadow.matrix,I++}n.point[A]=ie,A++}else if(B.isHemisphereLight){const ie=e.get(B);ie.skyColor.copy(B.color).multiplyScalar(ee),ie.groundColor.copy(B.groundColor).multiplyScalar(ee),n.hemi[_]=ie,_++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Fe.LTC_FLOAT_1,n.rectAreaLTC2=Fe.LTC_FLOAT_2):(n.rectAreaLTC1=Fe.LTC_HALF_1,n.rectAreaLTC2=Fe.LTC_HALF_2)),n.ambient[0]=v,n.ambient[1]=m,n.ambient[2]=x;const q=n.hash;(q.directionalLength!==y||q.pointLength!==A||q.spotLength!==R||q.rectAreaLength!==E||q.hemiLength!==_||q.numDirectionalShadows!==O||q.numPointShadows!==I||q.numSpotShadows!==F||q.numSpotMaps!==k||q.numLightProbes!==z)&&(n.directional.length=y,n.spot.length=R,n.rectArea.length=E,n.point.length=A,n.hemi.length=_,n.directionalShadow.length=O,n.directionalShadowMap.length=O,n.pointShadow.length=I,n.pointShadowMap.length=I,n.spotShadow.length=F,n.spotShadowMap.length=F,n.directionalShadowMatrix.length=O,n.pointShadowMatrix.length=I,n.spotLightMatrix.length=F+k-D,n.spotLightMap.length=k,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=z,q.directionalLength=y,q.pointLength=A,q.spotLength=R,q.rectAreaLength=E,q.hemiLength=_,q.numDirectionalShadows=O,q.numPointShadows=I,q.numSpotShadows=F,q.numSpotMaps=k,q.numLightProbes=z,n.version=tE++)}function p(d,v){let m=0,x=0,y=0,A=0,R=0;const E=v.matrixWorldInverse;for(let _=0,O=d.length;_<O;_++){const I=d[_];if(I.isDirectionalLight){const F=n.directional[m];F.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),F.direction.sub(a),F.direction.transformDirection(E),m++}else if(I.isSpotLight){const F=n.spot[y];F.position.setFromMatrixPosition(I.matrixWorld),F.position.applyMatrix4(E),F.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),F.direction.sub(a),F.direction.transformDirection(E),y++}else if(I.isRectAreaLight){const F=n.rectArea[A];F.position.setFromMatrixPosition(I.matrixWorld),F.position.applyMatrix4(E),u.identity(),o.copy(I.matrixWorld),o.premultiply(E),u.extractRotation(o),F.halfWidth.set(I.width*.5,0,0),F.halfHeight.set(0,I.height*.5,0),F.halfWidth.applyMatrix4(u),F.halfHeight.applyMatrix4(u),A++}else if(I.isPointLight){const F=n.point[x];F.position.setFromMatrixPosition(I.matrixWorld),F.position.applyMatrix4(E),x++}else if(I.isHemisphereLight){const F=n.hemi[R];F.direction.setFromMatrixPosition(I.matrixWorld),F.direction.transformDirection(E),R++}}}return{setup:h,setupView:p,state:n}}function iu(i){const e=new iE(i),t=[],n=[];function a(v){d.camera=v,t.length=0,n.length=0}function o(v){t.push(v)}function u(v){n.push(v)}function h(){e.setup(t)}function p(v){e.setupView(t,v)}const d={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:d,setupLights:h,setupLightsView:p,pushLight:o,pushShadow:u}}function rE(i){let e=new WeakMap;function t(a,o=0){const u=e.get(a);let h;return u===void 0?(h=new iu(i),e.set(a,[h])):o>=u.length?(h=new iu(i),u.push(h)):h=u[o],h}function n(){e=new WeakMap}return{get:t,dispose:n}}const sE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aE=`uniform sampler2D shadow_pass;
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
}`;function oE(i,e,t){let n=new ac;const a=new at,o=new at,u=new Nt,h=new Rg({depthPacking:B_}),p=new Cg,d={},v=t.maxTextureSize,m={[pi]:cn,[cn]:pi,[Cn]:Cn},x=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:sE,fragmentShader:aE}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const A=new Fn;A.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new yn(A,x),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lu;let _=this.type;this.render=function(D,z,q){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||D.length===0)return;const P=i.getRenderTarget(),T=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(fi),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const ee=_!==Jn&&this.type===Jn,Z=_===Jn&&this.type!==Jn;for(let oe=0,ie=D.length;oe<ie;oe++){const ve=D[oe],ne=ve.shadow;if(ne===void 0){console.warn("THREE.WebGLShadowMap:",ve,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;a.copy(ne.mapSize);const me=ne.getFrameExtents();if(a.multiply(me),o.copy(ne.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(o.x=Math.floor(v/me.x),a.x=o.x*me.x,ne.mapSize.x=o.x),a.y>v&&(o.y=Math.floor(v/me.y),a.y=o.y*me.y,ne.mapSize.y=o.y)),ne.map===null||ee===!0||Z===!0){const Le=this.type!==Jn?{minFilter:Ln,magFilter:Ln}:{};ne.map!==null&&ne.map.dispose(),ne.map=new Bi(a.x,a.y,Le),ne.map.texture.name=ve.name+".shadowMap",ne.camera.updateProjectionMatrix()}i.setRenderTarget(ne.map),i.clear();const be=ne.getViewportCount();for(let Le=0;Le<be;Le++){const He=ne.getViewport(Le);u.set(o.x*He.x,o.y*He.y,o.x*He.z,o.y*He.w),Y.viewport(u),ne.updateMatrices(ve,Le),n=ne.getFrustum(),F(z,q,ne.camera,ve,this.type)}ne.isPointLightShadow!==!0&&this.type===Jn&&O(ne,q),ne.needsUpdate=!1}_=this.type,E.needsUpdate=!1,i.setRenderTarget(P,T,B)};function O(D,z){const q=e.update(R);x.defines.VSM_SAMPLES!==D.blurSamples&&(x.defines.VSM_SAMPLES=D.blurSamples,y.defines.VSM_SAMPLES=D.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Bi(a.x,a.y)),x.uniforms.shadow_pass.value=D.map.texture,x.uniforms.resolution.value=D.mapSize,x.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(z,null,q,x,R,null),y.uniforms.shadow_pass.value=D.mapPass.texture,y.uniforms.resolution.value=D.mapSize,y.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(z,null,q,y,R,null)}function I(D,z,q,P){let T=null;const B=q.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(B!==void 0)T=B;else if(T=q.isPointLight===!0?p:h,i.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Y=T.uuid,ee=z.uuid;let Z=d[Y];Z===void 0&&(Z={},d[Y]=Z);let oe=Z[ee];oe===void 0&&(oe=T.clone(),Z[ee]=oe,z.addEventListener("dispose",k)),T=oe}if(T.visible=z.visible,T.wireframe=z.wireframe,P===Jn?T.side=z.shadowSide!==null?z.shadowSide:z.side:T.side=z.shadowSide!==null?z.shadowSide:m[z.side],T.alphaMap=z.alphaMap,T.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,T.map=z.map,T.clipShadows=z.clipShadows,T.clippingPlanes=z.clippingPlanes,T.clipIntersection=z.clipIntersection,T.displacementMap=z.displacementMap,T.displacementScale=z.displacementScale,T.displacementBias=z.displacementBias,T.wireframeLinewidth=z.wireframeLinewidth,T.linewidth=z.linewidth,q.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Y=i.properties.get(T);Y.light=q}return T}function F(D,z,q,P,T){if(D.visible===!1)return;if(D.layers.test(z.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&T===Jn)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,D.matrixWorld);const ee=e.update(D),Z=D.material;if(Array.isArray(Z)){const oe=ee.groups;for(let ie=0,ve=oe.length;ie<ve;ie++){const ne=oe[ie],me=Z[ne.materialIndex];if(me&&me.visible){const be=I(D,me,P,T);D.onBeforeShadow(i,D,z,q,ee,be,ne),i.renderBufferDirect(q,null,ee,be,D,ne),D.onAfterShadow(i,D,z,q,ee,be,ne)}}}else if(Z.visible){const oe=I(D,Z,P,T);D.onBeforeShadow(i,D,z,q,ee,oe,null),i.renderBufferDirect(q,null,ee,oe,D,null),D.onAfterShadow(i,D,z,q,ee,oe,null)}}const Y=D.children;for(let ee=0,Z=Y.length;ee<Z;ee++)F(Y[ee],z,q,P,T)}function k(D){D.target.removeEventListener("dispose",k);for(const q in d){const P=d[q],T=D.target.uuid;T in P&&(P[T].dispose(),delete P[T])}}}const cE={[ao]:oo,[co]:ho,[lo]:fo,[fr]:uo,[oo]:ao,[ho]:co,[fo]:lo,[uo]:fr};function lE(i,e){function t(){let V=!1;const we=new Nt;let Ce=null;const ke=new Nt(0,0,0,0);return{setMask:function(G){Ce!==G&&!V&&(i.colorMask(G,G,G,G),Ce=G)},setLocked:function(G){V=G},setClear:function(G,H,Oe,st,Et){Et===!0&&(G*=st,H*=st,Oe*=st),we.set(G,H,Oe,st),ke.equals(we)===!1&&(i.clearColor(G,H,Oe,st),ke.copy(we))},reset:function(){V=!1,Ce=null,ke.set(-1,0,0,0)}}}function n(){let V=!1,we=!1,Ce=null,ke=null,G=null;return{setReversed:function(H){if(we!==H){const Oe=e.get("EXT_clip_control");H?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),we=H;const st=G;G=null,this.setClear(st)}},getReversed:function(){return we},setTest:function(H){H?fe(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(H){Ce!==H&&!V&&(i.depthMask(H),Ce=H)},setFunc:function(H){if(we&&(H=cE[H]),ke!==H){switch(H){case ao:i.depthFunc(i.NEVER);break;case oo:i.depthFunc(i.ALWAYS);break;case co:i.depthFunc(i.LESS);break;case fr:i.depthFunc(i.LEQUAL);break;case lo:i.depthFunc(i.EQUAL);break;case uo:i.depthFunc(i.GEQUAL);break;case ho:i.depthFunc(i.GREATER);break;case fo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ke=H}},setLocked:function(H){V=H},setClear:function(H){G!==H&&(we&&(H=1-H),i.clearDepth(H),G=H)},reset:function(){V=!1,Ce=null,ke=null,G=null,we=!1}}}function a(){let V=!1,we=null,Ce=null,ke=null,G=null,H=null,Oe=null,st=null,Et=null;return{setTest:function(ut){V||(ut?fe(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function(ut){we!==ut&&!V&&(i.stencilMask(ut),we=ut)},setFunc:function(ut,Sn,kt){(Ce!==ut||ke!==Sn||G!==kt)&&(i.stencilFunc(ut,Sn,kt),Ce=ut,ke=Sn,G=kt)},setOp:function(ut,Sn,kt){(H!==ut||Oe!==Sn||st!==kt)&&(i.stencilOp(ut,Sn,kt),H=ut,Oe=Sn,st=kt)},setLocked:function(ut){V=ut},setClear:function(ut){Et!==ut&&(i.clearStencil(ut),Et=ut)},reset:function(){V=!1,we=null,Ce=null,ke=null,G=null,H=null,Oe=null,st=null,Et=null}}}const o=new t,u=new n,h=new a,p=new WeakMap,d=new WeakMap;let v={},m={},x=new WeakMap,y=[],A=null,R=!1,E=null,_=null,O=null,I=null,F=null,k=null,D=null,z=new gt(0,0,0),q=0,P=!1,T=null,B=null,Y=null,ee=null,Z=null;const oe=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,ve=0;const ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(ve=parseFloat(/^WebGL (\d)/.exec(ne)[1]),ie=ve>=1):ne.indexOf("OpenGL ES")!==-1&&(ve=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),ie=ve>=2);let me=null,be={};const Le=i.getParameter(i.SCISSOR_BOX),He=i.getParameter(i.VIEWPORT),Qe=new Nt().fromArray(Le),Je=new Nt().fromArray(He);function nt(V,we,Ce,ke){const G=new Uint8Array(4),H=i.createTexture();i.bindTexture(V,H),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<Ce;Oe++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(we,0,i.RGBA,1,1,ke,0,i.RGBA,i.UNSIGNED_BYTE,G):i.texImage2D(we+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,G);return H}const le={};le[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),u.setClear(1),h.setClear(0),fe(i.DEPTH_TEST),u.setFunc(fr),Ye(!1),Ae(tl),fe(i.CULL_FACE),Ve(fi);function fe(V){v[V]!==!0&&(i.enable(V),v[V]=!0)}function ce(V){v[V]!==!1&&(i.disable(V),v[V]=!1)}function ye(V,we){return m[V]!==we?(i.bindFramebuffer(V,we),m[V]=we,V===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=we),V===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=we),!0):!1}function Be(V,we){let Ce=y,ke=!1;if(V){Ce=x.get(we),Ce===void 0&&(Ce=[],x.set(we,Ce));const G=V.textures;if(Ce.length!==G.length||Ce[0]!==i.COLOR_ATTACHMENT0){for(let H=0,Oe=G.length;H<Oe;H++)Ce[H]=i.COLOR_ATTACHMENT0+H;Ce.length=G.length,ke=!0}}else Ce[0]!==i.BACK&&(Ce[0]=i.BACK,ke=!0);ke&&i.drawBuffers(Ce)}function he(V){return A!==V?(i.useProgram(V),A=V,!0):!1}const Ue={[Fi]:i.FUNC_ADD,[h_]:i.FUNC_SUBTRACT,[f_]:i.FUNC_REVERSE_SUBTRACT};Ue[d_]=i.MIN,Ue[p_]=i.MAX;const U={[m_]:i.ZERO,[__]:i.ONE,[g_]:i.SRC_COLOR,[ro]:i.SRC_ALPHA,[M_]:i.SRC_ALPHA_SATURATE,[E_]:i.DST_COLOR,[x_]:i.DST_ALPHA,[v_]:i.ONE_MINUS_SRC_COLOR,[so]:i.ONE_MINUS_SRC_ALPHA,[S_]:i.ONE_MINUS_DST_COLOR,[y_]:i.ONE_MINUS_DST_ALPHA,[T_]:i.CONSTANT_COLOR,[w_]:i.ONE_MINUS_CONSTANT_COLOR,[b_]:i.CONSTANT_ALPHA,[A_]:i.ONE_MINUS_CONSTANT_ALPHA};function Ve(V,we,Ce,ke,G,H,Oe,st,Et,ut){if(V===fi){R===!0&&(ce(i.BLEND),R=!1);return}if(R===!1&&(fe(i.BLEND),R=!0),V!==u_){if(V!==E||ut!==P){if((_!==Fi||F!==Fi)&&(i.blendEquation(i.FUNC_ADD),_=Fi,F=Fi),ut)switch(V){case ur:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nl:i.blendFunc(i.ONE,i.ONE);break;case il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case ur:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case il:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}O=null,I=null,k=null,D=null,z.set(0,0,0),q=0,E=V,P=ut}return}G=G||we,H=H||Ce,Oe=Oe||ke,(we!==_||G!==F)&&(i.blendEquationSeparate(Ue[we],Ue[G]),_=we,F=G),(Ce!==O||ke!==I||H!==k||Oe!==D)&&(i.blendFuncSeparate(U[Ce],U[ke],U[H],U[Oe]),O=Ce,I=ke,k=H,D=Oe),(st.equals(z)===!1||Et!==q)&&(i.blendColor(st.r,st.g,st.b,Et),z.copy(st),q=Et),E=V,P=!1}function Ge(V,we){V.side===Cn?ce(i.CULL_FACE):fe(i.CULL_FACE);let Ce=V.side===cn;we&&(Ce=!Ce),Ye(Ce),V.blending===ur&&V.transparent===!1?Ve(fi):Ve(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),o.setMask(V.colorWrite);const ke=V.stencilWrite;h.setTest(ke),ke&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Se(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(V){T!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),T=V)}function Ae(V){V!==o_?(fe(i.CULL_FACE),V!==B&&(V===tl?i.cullFace(i.BACK):V===c_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),B=V}function it(V){V!==Y&&(ie&&i.lineWidth(V),Y=V)}function Se(V,we,Ce){V?(fe(i.POLYGON_OFFSET_FILL),(ee!==we||Z!==Ce)&&(i.polygonOffset(we,Ce),ee=we,Z=Ce)):ce(i.POLYGON_OFFSET_FILL)}function We(V){V?fe(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function lt(V){V===void 0&&(V=i.TEXTURE0+oe-1),me!==V&&(i.activeTexture(V),me=V)}function yt(V,we,Ce){Ce===void 0&&(me===null?Ce=i.TEXTURE0+oe-1:Ce=me);let ke=be[Ce];ke===void 0&&(ke={type:void 0,texture:void 0},be[Ce]=ke),(ke.type!==V||ke.texture!==we)&&(me!==Ce&&(i.activeTexture(Ce),me=Ce),i.bindTexture(V,we||le[V]),ke.type=V,ke.texture=we)}function N(){const V=be[me];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function X(){try{i.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function se(){try{i.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pe(){try{i.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ue(){try{i.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ke(){try{i.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Re(){try{i.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xe(){try{i.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function je(){try{i.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Te(){try{i.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ne(V){Qe.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Qe.copy(V))}function rt(V){Je.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),Je.copy(V))}function $e(V,we){let Ce=d.get(we);Ce===void 0&&(Ce=new WeakMap,d.set(we,Ce));let ke=Ce.get(V);ke===void 0&&(ke=i.getUniformBlockIndex(we,V.name),Ce.set(V,ke))}function Pe(V,we){const ke=d.get(we).get(V);p.get(we)!==ke&&(i.uniformBlockBinding(we,ke,V.__bindingPointIndex),p.set(we,ke))}function ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),v={},me=null,be={},m={},x=new WeakMap,y=[],A=null,R=!1,E=null,_=null,O=null,I=null,F=null,k=null,D=null,z=new gt(0,0,0),q=0,P=!1,T=null,B=null,Y=null,ee=null,Z=null,Qe.set(0,0,i.canvas.width,i.canvas.height),Je.set(0,0,i.canvas.width,i.canvas.height),o.reset(),u.reset(),h.reset()}return{buffers:{color:o,depth:u,stencil:h},enable:fe,disable:ce,bindFramebuffer:ye,drawBuffers:Be,useProgram:he,setBlending:Ve,setMaterial:Ge,setFlipSided:Ye,setCullFace:Ae,setLineWidth:it,setPolygonOffset:Se,setScissorTest:We,activeTexture:lt,bindTexture:yt,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:X,texImage2D:je,texImage3D:Te,updateUBOMapping:$e,uniformBlockBinding:Pe,texStorage2D:Re,texStorage3D:Xe,texSubImage2D:se,texSubImage3D:pe,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ke,scissor:Ne,viewport:rt,reset:ot}}function uE(i,e,t,n,a,o,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new at,v=new WeakMap;let m;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(N,b){return y?new OffscreenCanvas(N,b):qs("canvas")}function R(N,b,X){let se=1;const pe=yt(N);if((pe.width>X||pe.height>X)&&(se=X/Math.max(pe.width,pe.height)),se<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ue=Math.floor(se*pe.width),Ke=Math.floor(se*pe.height);m===void 0&&(m=A(ue,Ke));const Re=b?A(ue,Ke):m;return Re.width=ue,Re.height=Ke,Re.getContext("2d").drawImage(N,0,0,ue,Ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+ue+"x"+Ke+")."),Re}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),N;return N}function E(N){return N.generateMipmaps}function _(N){i.generateMipmap(N)}function O(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function I(N,b,X,se,pe=!1){if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ue=b;if(b===i.RED&&(X===i.FLOAT&&(ue=i.R32F),X===i.HALF_FLOAT&&(ue=i.R16F),X===i.UNSIGNED_BYTE&&(ue=i.R8)),b===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ue=i.R8UI),X===i.UNSIGNED_SHORT&&(ue=i.R16UI),X===i.UNSIGNED_INT&&(ue=i.R32UI),X===i.BYTE&&(ue=i.R8I),X===i.SHORT&&(ue=i.R16I),X===i.INT&&(ue=i.R32I)),b===i.RG&&(X===i.FLOAT&&(ue=i.RG32F),X===i.HALF_FLOAT&&(ue=i.RG16F),X===i.UNSIGNED_BYTE&&(ue=i.RG8)),b===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(ue=i.RG8UI),X===i.UNSIGNED_SHORT&&(ue=i.RG16UI),X===i.UNSIGNED_INT&&(ue=i.RG32UI),X===i.BYTE&&(ue=i.RG8I),X===i.SHORT&&(ue=i.RG16I),X===i.INT&&(ue=i.RG32I)),b===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(ue=i.RGB8UI),X===i.UNSIGNED_SHORT&&(ue=i.RGB16UI),X===i.UNSIGNED_INT&&(ue=i.RGB32UI),X===i.BYTE&&(ue=i.RGB8I),X===i.SHORT&&(ue=i.RGB16I),X===i.INT&&(ue=i.RGB32I)),b===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(ue=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(ue=i.RGBA16UI),X===i.UNSIGNED_INT&&(ue=i.RGBA32UI),X===i.BYTE&&(ue=i.RGBA8I),X===i.SHORT&&(ue=i.RGBA16I),X===i.INT&&(ue=i.RGBA32I)),b===i.RGB&&(X===i.UNSIGNED_INT_5_9_9_9_REV&&(ue=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(ue=i.R11F_G11F_B10F)),b===i.RGBA){const Ke=pe?$s:Mt.getTransfer(se);X===i.FLOAT&&(ue=i.RGBA32F),X===i.HALF_FLOAT&&(ue=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ue=Ke===Rt?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(ue=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ue=i.RGB5_A1)}return(ue===i.R16F||ue===i.R32F||ue===i.RG16F||ue===i.RG32F||ue===i.RGBA16F||ue===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function F(N,b){let X;return N?b===null||b===Oi||b===Ir?X=i.DEPTH24_STENCIL8:b===Qn?X=i.DEPTH32F_STENCIL8:b===Fr&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Oi||b===Ir?X=i.DEPTH_COMPONENT24:b===Qn?X=i.DEPTH_COMPONENT32F:b===Fr&&(X=i.DEPTH_COMPONENT16),X}function k(N,b){return E(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ln&&N.minFilter!==zn?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function D(N){const b=N.target;b.removeEventListener("dispose",D),q(b),b.isVideoTexture&&v.delete(b)}function z(N){const b=N.target;b.removeEventListener("dispose",z),T(b)}function q(N){const b=n.get(N);if(b.__webglInit===void 0)return;const X=N.source,se=x.get(X);if(se){const pe=se[b.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&P(N),Object.keys(se).length===0&&x.delete(X)}n.remove(N)}function P(N){const b=n.get(N);i.deleteTexture(b.__webglTexture);const X=N.source,se=x.get(X);delete se[b.__cacheKey],u.memory.textures--}function T(N){const b=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(b.__webglFramebuffer[se]))for(let pe=0;pe<b.__webglFramebuffer[se].length;pe++)i.deleteFramebuffer(b.__webglFramebuffer[se][pe]);else i.deleteFramebuffer(b.__webglFramebuffer[se]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[se])}else{if(Array.isArray(b.__webglFramebuffer))for(let se=0;se<b.__webglFramebuffer.length;se++)i.deleteFramebuffer(b.__webglFramebuffer[se]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let se=0;se<b.__webglColorRenderbuffer.length;se++)b.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[se]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const X=N.textures;for(let se=0,pe=X.length;se<pe;se++){const ue=n.get(X[se]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),u.memory.textures--),n.remove(X[se])}n.remove(N)}let B=0;function Y(){B=0}function ee(){const N=B;return N>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+a.maxTextures),B+=1,N}function Z(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function oe(N,b){const X=n.get(N);if(N.isVideoTexture&&We(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&X.__version!==N.version){const se=N.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(X,N,b);return}}else N.isExternalTexture&&(X.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+b)}function ie(N,b){const X=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&X.__version!==N.version){le(X,N,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+b)}function ve(N,b){const X=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&X.__version!==N.version){le(X,N,b);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+b)}function ne(N,b){const X=n.get(N);if(N.version>0&&X.__version!==N.version){fe(X,N,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+b)}const me={[_o]:i.REPEAT,[Ui]:i.CLAMP_TO_EDGE,[go]:i.MIRRORED_REPEAT},be={[Ln]:i.NEAREST,[O_]:i.NEAREST_MIPMAP_NEAREST,[us]:i.NEAREST_MIPMAP_LINEAR,[zn]:i.LINEAR,[va]:i.LINEAR_MIPMAP_NEAREST,[Ni]:i.LINEAR_MIPMAP_LINEAR},Le={[H_]:i.NEVER,[j_]:i.ALWAYS,[V_]:i.LESS,[Eu]:i.LEQUAL,[G_]:i.EQUAL,[$_]:i.GEQUAL,[W_]:i.GREATER,[X_]:i.NOTEQUAL};function He(N,b){if(b.type===Qn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===zn||b.magFilter===va||b.magFilter===us||b.magFilter===Ni||b.minFilter===zn||b.minFilter===va||b.minFilter===us||b.minFilter===Ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,me[b.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,me[b.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,me[b.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,be[b.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,be[b.minFilter]),b.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,Le[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ln||b.minFilter!==us&&b.minFilter!==Ni||b.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,a.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Qe(N,b){let X=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",D));const se=b.source;let pe=x.get(se);pe===void 0&&(pe={},x.set(se,pe));const ue=Z(b);if(ue!==N.__cacheKey){pe[ue]===void 0&&(pe[ue]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,X=!0),pe[ue].usedTimes++;const Ke=pe[N.__cacheKey];Ke!==void 0&&(pe[N.__cacheKey].usedTimes--,Ke.usedTimes===0&&P(b)),N.__cacheKey=ue,N.__webglTexture=pe[ue].texture}return X}function Je(N,b,X){return Math.floor(Math.floor(N/X)/b)}function nt(N,b,X,se){const ue=N.updateRanges;if(ue.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,X,se,b.data);else{ue.sort((Te,Ne)=>Te.start-Ne.start);let Ke=0;for(let Te=1;Te<ue.length;Te++){const Ne=ue[Ke],rt=ue[Te],$e=Ne.start+Ne.count,Pe=Je(rt.start,b.width,4),ot=Je(Ne.start,b.width,4);rt.start<=$e+1&&Pe===ot&&Je(rt.start+rt.count-1,b.width,4)===Pe?Ne.count=Math.max(Ne.count,rt.start+rt.count-Ne.start):(++Ke,ue[Ke]=rt)}ue.length=Ke+1;const Re=i.getParameter(i.UNPACK_ROW_LENGTH),Xe=i.getParameter(i.UNPACK_SKIP_PIXELS),je=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let Te=0,Ne=ue.length;Te<Ne;Te++){const rt=ue[Te],$e=Math.floor(rt.start/4),Pe=Math.ceil(rt.count/4),ot=$e%b.width,V=Math.floor($e/b.width),we=Pe,Ce=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),i.pixelStorei(i.UNPACK_SKIP_ROWS,V),t.texSubImage2D(i.TEXTURE_2D,0,ot,V,we,Ce,X,se,b.data)}N.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Re),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,je)}}function le(N,b,X){let se=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(se=i.TEXTURE_3D);const pe=Qe(N,b),ue=b.source;t.bindTexture(se,N.__webglTexture,i.TEXTURE0+X);const Ke=n.get(ue);if(ue.version!==Ke.__version||pe===!0){t.activeTexture(i.TEXTURE0+X);const Re=Mt.getPrimaries(Mt.workingColorSpace),Xe=b.colorSpace===hi?null:Mt.getPrimaries(b.colorSpace),je=b.colorSpace===hi||Re===Xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let Te=R(b.image,!1,a.maxTextureSize);Te=lt(b,Te);const Ne=o.convert(b.format,b.colorSpace),rt=o.convert(b.type);let $e=I(b.internalFormat,Ne,rt,b.colorSpace,b.isVideoTexture);He(se,b);let Pe;const ot=b.mipmaps,V=b.isVideoTexture!==!0,we=Ke.__version===void 0||pe===!0,Ce=ue.dataReady,ke=k(b,Te);if(b.isDepthTexture)$e=F(b.format===Nr,b.type),we&&(V?t.texStorage2D(i.TEXTURE_2D,1,$e,Te.width,Te.height):t.texImage2D(i.TEXTURE_2D,0,$e,Te.width,Te.height,0,Ne,rt,null));else if(b.isDataTexture)if(ot.length>0){V&&we&&t.texStorage2D(i.TEXTURE_2D,ke,$e,ot[0].width,ot[0].height);for(let G=0,H=ot.length;G<H;G++)Pe=ot[G],V?Ce&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,Pe.width,Pe.height,Ne,rt,Pe.data):t.texImage2D(i.TEXTURE_2D,G,$e,Pe.width,Pe.height,0,Ne,rt,Pe.data);b.generateMipmaps=!1}else V?(we&&t.texStorage2D(i.TEXTURE_2D,ke,$e,Te.width,Te.height),Ce&&nt(b,Te,Ne,rt)):t.texImage2D(i.TEXTURE_2D,0,$e,Te.width,Te.height,0,Ne,rt,Te.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){V&&we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,$e,ot[0].width,ot[0].height,Te.depth);for(let G=0,H=ot.length;G<H;G++)if(Pe=ot[G],b.format!==Dn)if(Ne!==null)if(V){if(Ce)if(b.layerUpdates.size>0){const Oe=Fl(Pe.width,Pe.height,b.format,b.type);for(const st of b.layerUpdates){const Et=Pe.data.subarray(st*Oe/Pe.data.BYTES_PER_ELEMENT,(st+1)*Oe/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,st,Pe.width,Pe.height,1,Ne,Et)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,Pe.width,Pe.height,Te.depth,Ne,Pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,$e,Pe.width,Pe.height,Te.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Ce&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,Pe.width,Pe.height,Te.depth,Ne,rt,Pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,G,$e,Pe.width,Pe.height,Te.depth,0,Ne,rt,Pe.data)}else{V&&we&&t.texStorage2D(i.TEXTURE_2D,ke,$e,ot[0].width,ot[0].height);for(let G=0,H=ot.length;G<H;G++)Pe=ot[G],b.format!==Dn?Ne!==null?V?Ce&&t.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,Pe.width,Pe.height,Ne,Pe.data):t.compressedTexImage2D(i.TEXTURE_2D,G,$e,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Ce&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,Pe.width,Pe.height,Ne,rt,Pe.data):t.texImage2D(i.TEXTURE_2D,G,$e,Pe.width,Pe.height,0,Ne,rt,Pe.data)}else if(b.isDataArrayTexture)if(V){if(we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,$e,Te.width,Te.height,Te.depth),Ce)if(b.layerUpdates.size>0){const G=Fl(Te.width,Te.height,b.format,b.type);for(const H of b.layerUpdates){const Oe=Te.data.subarray(H*G/Te.data.BYTES_PER_ELEMENT,(H+1)*G/Te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,H,Te.width,Te.height,1,Ne,rt,Oe)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Ne,rt,Te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,$e,Te.width,Te.height,Te.depth,0,Ne,rt,Te.data);else if(b.isData3DTexture)V?(we&&t.texStorage3D(i.TEXTURE_3D,ke,$e,Te.width,Te.height,Te.depth),Ce&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Ne,rt,Te.data)):t.texImage3D(i.TEXTURE_3D,0,$e,Te.width,Te.height,Te.depth,0,Ne,rt,Te.data);else if(b.isFramebufferTexture){if(we)if(V)t.texStorage2D(i.TEXTURE_2D,ke,$e,Te.width,Te.height);else{let G=Te.width,H=Te.height;for(let Oe=0;Oe<ke;Oe++)t.texImage2D(i.TEXTURE_2D,Oe,$e,G,H,0,Ne,rt,null),G>>=1,H>>=1}}else if(ot.length>0){if(V&&we){const G=yt(ot[0]);t.texStorage2D(i.TEXTURE_2D,ke,$e,G.width,G.height)}for(let G=0,H=ot.length;G<H;G++)Pe=ot[G],V?Ce&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,Ne,rt,Pe):t.texImage2D(i.TEXTURE_2D,G,$e,Ne,rt,Pe);b.generateMipmaps=!1}else if(V){if(we){const G=yt(Te);t.texStorage2D(i.TEXTURE_2D,ke,$e,G.width,G.height)}Ce&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ne,rt,Te)}else t.texImage2D(i.TEXTURE_2D,0,$e,Ne,rt,Te);E(b)&&_(se),Ke.__version=ue.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function fe(N,b,X){if(b.image.length!==6)return;const se=Qe(N,b),pe=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+X);const ue=n.get(pe);if(pe.version!==ue.__version||se===!0){t.activeTexture(i.TEXTURE0+X);const Ke=Mt.getPrimaries(Mt.workingColorSpace),Re=b.colorSpace===hi?null:Mt.getPrimaries(b.colorSpace),Xe=b.colorSpace===hi||Ke===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const je=b.isCompressedTexture||b.image[0].isCompressedTexture,Te=b.image[0]&&b.image[0].isDataTexture,Ne=[];for(let H=0;H<6;H++)!je&&!Te?Ne[H]=R(b.image[H],!0,a.maxCubemapSize):Ne[H]=Te?b.image[H].image:b.image[H],Ne[H]=lt(b,Ne[H]);const rt=Ne[0],$e=o.convert(b.format,b.colorSpace),Pe=o.convert(b.type),ot=I(b.internalFormat,$e,Pe,b.colorSpace),V=b.isVideoTexture!==!0,we=ue.__version===void 0||se===!0,Ce=pe.dataReady;let ke=k(b,rt);He(i.TEXTURE_CUBE_MAP,b);let G;if(je){V&&we&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,ot,rt.width,rt.height);for(let H=0;H<6;H++){G=Ne[H].mipmaps;for(let Oe=0;Oe<G.length;Oe++){const st=G[Oe];b.format!==Dn?$e!==null?V?Ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,Oe,0,0,st.width,st.height,$e,st.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,Oe,ot,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,Oe,0,0,st.width,st.height,$e,Pe,st.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,Oe,ot,st.width,st.height,0,$e,Pe,st.data)}}}else{if(G=b.mipmaps,V&&we){G.length>0&&ke++;const H=yt(Ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,ot,H.width,H.height)}for(let H=0;H<6;H++)if(Te){V?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,Ne[H].width,Ne[H].height,$e,Pe,Ne[H].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,ot,Ne[H].width,Ne[H].height,0,$e,Pe,Ne[H].data);for(let Oe=0;Oe<G.length;Oe++){const Et=G[Oe].image[H].image;V?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,Oe+1,0,0,Et.width,Et.height,$e,Pe,Et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,Oe+1,ot,Et.width,Et.height,0,$e,Pe,Et.data)}}else{V?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,$e,Pe,Ne[H]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,ot,$e,Pe,Ne[H]);for(let Oe=0;Oe<G.length;Oe++){const st=G[Oe];V?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,Oe+1,0,0,$e,Pe,st.image[H]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,Oe+1,ot,$e,Pe,st.image[H])}}}E(b)&&_(i.TEXTURE_CUBE_MAP),ue.__version=pe.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function ce(N,b,X,se,pe,ue){const Ke=o.convert(X.format,X.colorSpace),Re=o.convert(X.type),Xe=I(X.internalFormat,Ke,Re,X.colorSpace),je=n.get(b),Te=n.get(X);if(Te.__renderTarget=b,!je.__hasExternalTextures){const Ne=Math.max(1,b.width>>ue),rt=Math.max(1,b.height>>ue);pe===i.TEXTURE_3D||pe===i.TEXTURE_2D_ARRAY?t.texImage3D(pe,ue,Xe,Ne,rt,b.depth,0,Ke,Re,null):t.texImage2D(pe,ue,Xe,Ne,rt,0,Ke,Re,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),Se(b)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,pe,Te.__webglTexture,0,it(b)):(pe===i.TEXTURE_2D||pe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,pe,Te.__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(N,b,X){if(i.bindRenderbuffer(i.RENDERBUFFER,N),b.depthBuffer){const se=b.depthTexture,pe=se&&se.isDepthTexture?se.type:null,ue=F(b.stencilBuffer,pe),Ke=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=it(b);Se(b)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,ue,b.width,b.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,ue,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ue,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ke,i.RENDERBUFFER,N)}else{const se=b.textures;for(let pe=0;pe<se.length;pe++){const ue=se[pe],Ke=o.convert(ue.format,ue.colorSpace),Re=o.convert(ue.type),Xe=I(ue.internalFormat,Ke,Re,ue.colorSpace),je=it(b);X&&Se(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,je,Xe,b.width,b.height):Se(b)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,je,Xe,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Xe,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Be(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=n.get(b.depthTexture);se.__renderTarget=b,(!se.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),oe(b.depthTexture,0);const pe=se.__webglTexture,ue=it(b);if(b.depthTexture.format===Ur)Se(b)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pe,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pe,0);else if(b.depthTexture.format===Nr)Se(b)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pe,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function he(N){const b=n.get(N),X=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const se=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),se){const pe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,se.removeEventListener("dispose",pe)};se.addEventListener("dispose",pe),b.__depthDisposeCallback=pe}b.__boundDepthTexture=se}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");const se=N.texture.mipmaps;se&&se.length>0?Be(b.__webglFramebuffer[0],N):Be(b.__webglFramebuffer,N)}else if(X){b.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[se]),b.__webglDepthbuffer[se]===void 0)b.__webglDepthbuffer[se]=i.createRenderbuffer(),ye(b.__webglDepthbuffer[se],N,!1);else{const pe=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,ue)}}else{const se=N.texture.mipmaps;if(se&&se.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ye(b.__webglDepthbuffer,N,!1);else{const pe=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,ue)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(N,b,X){const se=n.get(N);b!==void 0&&ce(se.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&he(N)}function U(N){const b=N.texture,X=n.get(N),se=n.get(b);N.addEventListener("dispose",z);const pe=N.textures,ue=N.isWebGLCubeRenderTarget===!0,Ke=pe.length>1;if(Ke||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=b.version,u.memory.textures++),ue){X.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer[Re]=[];for(let Xe=0;Xe<b.mipmaps.length;Xe++)X.__webglFramebuffer[Re][Xe]=i.createFramebuffer()}else X.__webglFramebuffer[Re]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer=[];for(let Re=0;Re<b.mipmaps.length;Re++)X.__webglFramebuffer[Re]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Ke)for(let Re=0,Xe=pe.length;Re<Xe;Re++){const je=n.get(pe[Re]);je.__webglTexture===void 0&&(je.__webglTexture=i.createTexture(),u.memory.textures++)}if(N.samples>0&&Se(N)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Re=0;Re<pe.length;Re++){const Xe=pe[Re];X.__webglColorRenderbuffer[Re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[Re]);const je=o.convert(Xe.format,Xe.colorSpace),Te=o.convert(Xe.type),Ne=I(Xe.internalFormat,je,Te,Xe.colorSpace,N.isXRRenderTarget===!0),rt=it(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,Ne,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,X.__webglColorRenderbuffer[Re])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),ye(X.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),He(i.TEXTURE_CUBE_MAP,b);for(let Re=0;Re<6;Re++)if(b.mipmaps&&b.mipmaps.length>0)for(let Xe=0;Xe<b.mipmaps.length;Xe++)ce(X.__webglFramebuffer[Re][Xe],N,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Xe);else ce(X.__webglFramebuffer[Re],N,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);E(b)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ke){for(let Re=0,Xe=pe.length;Re<Xe;Re++){const je=pe[Re],Te=n.get(je);let Ne=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ne=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ne,Te.__webglTexture),He(Ne,je),ce(X.__webglFramebuffer,N,je,i.COLOR_ATTACHMENT0+Re,Ne,0),E(je)&&_(Ne)}t.unbindTexture()}else{let Re=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Re=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Re,se.__webglTexture),He(Re,b),b.mipmaps&&b.mipmaps.length>0)for(let Xe=0;Xe<b.mipmaps.length;Xe++)ce(X.__webglFramebuffer[Xe],N,b,i.COLOR_ATTACHMENT0,Re,Xe);else ce(X.__webglFramebuffer,N,b,i.COLOR_ATTACHMENT0,Re,0);E(b)&&_(Re),t.unbindTexture()}N.depthBuffer&&he(N)}function Ve(N){const b=N.textures;for(let X=0,se=b.length;X<se;X++){const pe=b[X];if(E(pe)){const ue=O(N),Ke=n.get(pe).__webglTexture;t.bindTexture(ue,Ke),_(ue),t.unbindTexture()}}}const Ge=[],Ye=[];function Ae(N){if(N.samples>0){if(Se(N)===!1){const b=N.textures,X=N.width,se=N.height;let pe=i.COLOR_BUFFER_BIT;const ue=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ke=n.get(N),Re=b.length>1;if(Re)for(let je=0;je<b.length;je++)t.bindFramebuffer(i.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+je,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+je,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const Xe=N.texture.mipmaps;Xe&&Xe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let je=0;je<b.length;je++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(pe|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(pe|=i.STENCIL_BUFFER_BIT)),Re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ke.__webglColorRenderbuffer[je]);const Te=n.get(b[je]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,X,se,0,0,X,se,pe,i.NEAREST),p===!0&&(Ge.length=0,Ye.length=0,Ge.push(i.COLOR_ATTACHMENT0+je),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Ge.push(ue),Ye.push(ue),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ye)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ge))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Re)for(let je=0;je<b.length;je++){t.bindFramebuffer(i.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+je,i.RENDERBUFFER,Ke.__webglColorRenderbuffer[je]);const Te=n.get(b[je]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+je,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&p){const b=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function it(N){return Math.min(a.maxSamples,N.samples)}function Se(N){const b=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function We(N){const b=u.render.frame;v.get(N)!==b&&(v.set(N,b),N.update())}function lt(N,b){const X=N.colorSpace,se=N.format,pe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||X!==mr&&X!==hi&&(Mt.getTransfer(X)===Rt?(se!==Dn||pe!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),b}function yt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(d.width=N.naturalWidth||N.width,d.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(d.width=N.displayWidth,d.height=N.displayHeight):(d.width=N.width,d.height=N.height),d}this.allocateTextureUnit=ee,this.resetTextureUnits=Y,this.setTexture2D=oe,this.setTexture2DArray=ie,this.setTexture3D=ve,this.setTextureCube=ne,this.rebindTextures=Ue,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Se}function hE(i,e){function t(n,a=hi){let o;const u=Mt.getTransfer(a);if(n===Vn)return i.UNSIGNED_BYTE;if(n===Jo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===pu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===fu)return i.BYTE;if(n===du)return i.SHORT;if(n===Fr)return i.UNSIGNED_SHORT;if(n===Zo)return i.INT;if(n===Oi)return i.UNSIGNED_INT;if(n===Qn)return i.FLOAT;if(n===kr)return i.HALF_FLOAT;if(n===_u)return i.ALPHA;if(n===gu)return i.RGB;if(n===Dn)return i.RGBA;if(n===Ur)return i.DEPTH_COMPONENT;if(n===Nr)return i.DEPTH_STENCIL;if(n===vu)return i.RED;if(n===ec)return i.RED_INTEGER;if(n===xu)return i.RG;if(n===tc)return i.RG_INTEGER;if(n===nc)return i.RGBA_INTEGER;if(n===Bs||n===zs||n===Hs||n===Vs)if(u===Rt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Bs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Bs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vo||n===xo||n===yo||n===Eo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===vo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Eo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===So||n===Mo||n===To)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===So||n===Mo)return u===Rt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===To)return u===Rt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wo||n===bo||n===Ao||n===Ro||n===Co||n===Po||n===Do||n===Lo||n===Fo||n===Io||n===Uo||n===No||n===Oo||n===ko)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===wo)return u===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bo)return u===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ao)return u===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ro)return u===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Co)return u===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Po)return u===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Do)return u===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lo)return u===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fo)return u===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Io)return u===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uo)return u===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===No)return u===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oo)return u===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ko)return u===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bo||n===zo||n===Ho)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Bo)return u===Rt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ho)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vo||n===Go||n===Wo||n===Xo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Vo)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Go)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ir?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const fE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dE=`
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

}`;class pE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Fu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new mi({vertexShader:fE,fragmentShader:dE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yn(new Vr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mE extends zi{constructor(e,t){super();const n=this;let a=null,o=1,u=null,h="local-floor",p=1,d=null,v=null,m=null,x=null,y=null,A=null;const R=typeof XRWebGLBinding<"u",E=new pE,_={},O=t.getContextAttributes();let I=null,F=null;const k=[],D=[],z=new at;let q=null;const P=new xn;P.viewport=new Nt;const T=new xn;T.viewport=new Nt;const B=[P,T],Y=new Ig;let ee=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let fe=k[le];return fe===void 0&&(fe=new za,k[le]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(le){let fe=k[le];return fe===void 0&&(fe=new za,k[le]=fe),fe.getGripSpace()},this.getHand=function(le){let fe=k[le];return fe===void 0&&(fe=new za,k[le]=fe),fe.getHandSpace()};function oe(le){const fe=D.indexOf(le.inputSource);if(fe===-1)return;const ce=k[fe];ce!==void 0&&(ce.update(le.inputSource,le.frame,d||u),ce.dispatchEvent({type:le.type,data:le.inputSource}))}function ie(){a.removeEventListener("select",oe),a.removeEventListener("selectstart",oe),a.removeEventListener("selectend",oe),a.removeEventListener("squeeze",oe),a.removeEventListener("squeezestart",oe),a.removeEventListener("squeezeend",oe),a.removeEventListener("end",ie),a.removeEventListener("inputsourceschange",ve);for(let le=0;le<k.length;le++){const fe=D[le];fe!==null&&(D[le]=null,k[le].disconnect(fe))}ee=null,Z=null,E.reset();for(const le in _)delete _[le];e.setRenderTarget(I),y=null,x=null,m=null,a=null,F=null,nt.stop(),n.isPresenting=!1,e.setPixelRatio(q),e.setSize(z.width,z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){o=le,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){h=le,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(le){d=le},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return m===null&&R&&(m=new XRWebGLBinding(a,t)),m},this.getFrame=function(){return A},this.getSession=function(){return a},this.setSession=async function(le){if(a=le,a!==null){if(I=e.getRenderTarget(),a.addEventListener("select",oe),a.addEventListener("selectstart",oe),a.addEventListener("selectend",oe),a.addEventListener("squeeze",oe),a.addEventListener("squeezestart",oe),a.addEventListener("squeezeend",oe),a.addEventListener("end",ie),a.addEventListener("inputsourceschange",ve),O.xrCompatible!==!0&&await t.makeXRCompatible(),q=e.getPixelRatio(),e.getSize(z),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,ye=null,Be=null;O.depth&&(Be=O.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=O.stencil?Nr:Ur,ye=O.stencil?Ir:Oi);const he={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:o};m=this.getBinding(),x=m.createProjectionLayer(he),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),F=new Bi(x.textureWidth,x.textureHeight,{format:Dn,type:Vn,depthTexture:new Lu(x.textureWidth,x.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const ce={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(a,t,ce),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),F=new Bi(y.framebufferWidth,y.framebufferHeight,{format:Dn,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await a.requestReferenceSpace(h),nt.setContext(a),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function ve(le){for(let fe=0;fe<le.removed.length;fe++){const ce=le.removed[fe],ye=D.indexOf(ce);ye>=0&&(D[ye]=null,k[ye].disconnect(ce))}for(let fe=0;fe<le.added.length;fe++){const ce=le.added[fe];let ye=D.indexOf(ce);if(ye===-1){for(let he=0;he<k.length;he++)if(he>=D.length){D.push(ce),ye=he;break}else if(D[he]===null){D[he]=ce,ye=he;break}if(ye===-1)break}const Be=k[ye];Be&&Be.connect(ce)}}const ne=new J,me=new J;function be(le,fe,ce){ne.setFromMatrixPosition(fe.matrixWorld),me.setFromMatrixPosition(ce.matrixWorld);const ye=ne.distanceTo(me),Be=fe.projectionMatrix.elements,he=ce.projectionMatrix.elements,Ue=Be[14]/(Be[10]-1),U=Be[14]/(Be[10]+1),Ve=(Be[9]+1)/Be[5],Ge=(Be[9]-1)/Be[5],Ye=(Be[8]-1)/Be[0],Ae=(he[8]+1)/he[0],it=Ue*Ye,Se=Ue*Ae,We=ye/(-Ye+Ae),lt=We*-Ye;if(fe.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(lt),le.translateZ(We),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),Be[10]===-1)le.projectionMatrix.copy(fe.projectionMatrix),le.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const yt=Ue+We,N=U+We,b=it-lt,X=Se+(ye-lt),se=Ve*U/N*yt,pe=Ge*U/N*yt;le.projectionMatrix.makePerspective(b,X,se,pe,yt,N),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function Le(le,fe){fe===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(fe.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(a===null)return;let fe=le.near,ce=le.far;E.texture!==null&&(E.depthNear>0&&(fe=E.depthNear),E.depthFar>0&&(ce=E.depthFar)),Y.near=T.near=P.near=fe,Y.far=T.far=P.far=ce,(ee!==Y.near||Z!==Y.far)&&(a.updateRenderState({depthNear:Y.near,depthFar:Y.far}),ee=Y.near,Z=Y.far),Y.layers.mask=le.layers.mask|6,P.layers.mask=Y.layers.mask&3,T.layers.mask=Y.layers.mask&5;const ye=le.parent,Be=Y.cameras;Le(Y,ye);for(let he=0;he<Be.length;he++)Le(Be[he],ye);Be.length===2?be(Y,P,T):Y.projectionMatrix.copy(P.projectionMatrix),He(le,Y,ye)};function He(le,fe,ce){ce===null?le.matrix.copy(fe.matrixWorld):(le.matrix.copy(ce.matrixWorld),le.matrix.invert(),le.matrix.multiply(fe.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(fe.projectionMatrix),le.projectionMatrixInverse.copy(fe.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=$o*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(x===null&&y===null))return p},this.setFoveation=function(le){p=le,x!==null&&(x.fixedFoveation=le),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=le)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(Y)},this.getCameraTexture=function(le){return _[le]};let Qe=null;function Je(le,fe){if(v=fe.getViewerPose(d||u),A=fe,v!==null){const ce=v.views;y!==null&&(e.setRenderTargetFramebuffer(F,y.framebuffer),e.setRenderTarget(F));let ye=!1;ce.length!==Y.cameras.length&&(Y.cameras.length=0,ye=!0);for(let U=0;U<ce.length;U++){const Ve=ce[U];let Ge=null;if(y!==null)Ge=y.getViewport(Ve);else{const Ae=m.getViewSubImage(x,Ve);Ge=Ae.viewport,U===0&&(e.setRenderTargetTextures(F,Ae.colorTexture,Ae.depthStencilTexture),e.setRenderTarget(F))}let Ye=B[U];Ye===void 0&&(Ye=new xn,Ye.layers.enable(U),Ye.viewport=new Nt,B[U]=Ye),Ye.matrix.fromArray(Ve.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(Ve.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),U===0&&(Y.matrix.copy(Ye.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),ye===!0&&Y.cameras.push(Ye)}const Be=a.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&R){m=n.getBinding();const U=m.getDepthInformation(ce[0]);U&&U.isValid&&U.texture&&E.init(U,a.renderState)}if(Be&&Be.includes("camera-access")&&R){e.state.unbindTexture(),m=n.getBinding();for(let U=0;U<ce.length;U++){const Ve=ce[U].camera;if(Ve){let Ge=_[Ve];Ge||(Ge=new Fu,_[Ve]=Ge);const Ye=m.getCameraImage(Ve);Ge.sourceTexture=Ye}}}}for(let ce=0;ce<k.length;ce++){const ye=D[ce],Be=k[ce];ye!==null&&Be!==void 0&&Be.update(ye,fe,d||u)}Qe&&Qe(le,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),A=null}const nt=new Nu;nt.setAnimationLoop(Je),this.setAnimationLoop=function(le){Qe=le},this.dispose=function(){}}}const Pi=new Gn,_E=new Ot;function gE(i,e){function t(E,_){E.matrixAutoUpdate===!0&&E.updateMatrix(),_.value.copy(E.matrix)}function n(E,_){_.color.getRGB(E.fogColor.value,Ru(i)),_.isFog?(E.fogNear.value=_.near,E.fogFar.value=_.far):_.isFogExp2&&(E.fogDensity.value=_.density)}function a(E,_,O,I,F){_.isMeshBasicMaterial||_.isMeshLambertMaterial?o(E,_):_.isMeshToonMaterial?(o(E,_),m(E,_)):_.isMeshPhongMaterial?(o(E,_),v(E,_)):_.isMeshStandardMaterial?(o(E,_),x(E,_),_.isMeshPhysicalMaterial&&y(E,_,F)):_.isMeshMatcapMaterial?(o(E,_),A(E,_)):_.isMeshDepthMaterial?o(E,_):_.isMeshDistanceMaterial?(o(E,_),R(E,_)):_.isMeshNormalMaterial?o(E,_):_.isLineBasicMaterial?(u(E,_),_.isLineDashedMaterial&&h(E,_)):_.isPointsMaterial?p(E,_,O,I):_.isSpriteMaterial?d(E,_):_.isShadowMaterial?(E.color.value.copy(_.color),E.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function o(E,_){E.opacity.value=_.opacity,_.color&&E.diffuse.value.copy(_.color),_.emissive&&E.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(E.map.value=_.map,t(_.map,E.mapTransform)),_.alphaMap&&(E.alphaMap.value=_.alphaMap,t(_.alphaMap,E.alphaMapTransform)),_.bumpMap&&(E.bumpMap.value=_.bumpMap,t(_.bumpMap,E.bumpMapTransform),E.bumpScale.value=_.bumpScale,_.side===cn&&(E.bumpScale.value*=-1)),_.normalMap&&(E.normalMap.value=_.normalMap,t(_.normalMap,E.normalMapTransform),E.normalScale.value.copy(_.normalScale),_.side===cn&&E.normalScale.value.negate()),_.displacementMap&&(E.displacementMap.value=_.displacementMap,t(_.displacementMap,E.displacementMapTransform),E.displacementScale.value=_.displacementScale,E.displacementBias.value=_.displacementBias),_.emissiveMap&&(E.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,E.emissiveMapTransform)),_.specularMap&&(E.specularMap.value=_.specularMap,t(_.specularMap,E.specularMapTransform)),_.alphaTest>0&&(E.alphaTest.value=_.alphaTest);const O=e.get(_),I=O.envMap,F=O.envMapRotation;I&&(E.envMap.value=I,Pi.copy(F),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),E.envMapRotation.value.setFromMatrix4(_E.makeRotationFromEuler(Pi)),E.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,E.reflectivity.value=_.reflectivity,E.ior.value=_.ior,E.refractionRatio.value=_.refractionRatio),_.lightMap&&(E.lightMap.value=_.lightMap,E.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,E.lightMapTransform)),_.aoMap&&(E.aoMap.value=_.aoMap,E.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,E.aoMapTransform))}function u(E,_){E.diffuse.value.copy(_.color),E.opacity.value=_.opacity,_.map&&(E.map.value=_.map,t(_.map,E.mapTransform))}function h(E,_){E.dashSize.value=_.dashSize,E.totalSize.value=_.dashSize+_.gapSize,E.scale.value=_.scale}function p(E,_,O,I){E.diffuse.value.copy(_.color),E.opacity.value=_.opacity,E.size.value=_.size*O,E.scale.value=I*.5,_.map&&(E.map.value=_.map,t(_.map,E.uvTransform)),_.alphaMap&&(E.alphaMap.value=_.alphaMap,t(_.alphaMap,E.alphaMapTransform)),_.alphaTest>0&&(E.alphaTest.value=_.alphaTest)}function d(E,_){E.diffuse.value.copy(_.color),E.opacity.value=_.opacity,E.rotation.value=_.rotation,_.map&&(E.map.value=_.map,t(_.map,E.mapTransform)),_.alphaMap&&(E.alphaMap.value=_.alphaMap,t(_.alphaMap,E.alphaMapTransform)),_.alphaTest>0&&(E.alphaTest.value=_.alphaTest)}function v(E,_){E.specular.value.copy(_.specular),E.shininess.value=Math.max(_.shininess,1e-4)}function m(E,_){_.gradientMap&&(E.gradientMap.value=_.gradientMap)}function x(E,_){E.metalness.value=_.metalness,_.metalnessMap&&(E.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,E.metalnessMapTransform)),E.roughness.value=_.roughness,_.roughnessMap&&(E.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,E.roughnessMapTransform)),_.envMap&&(E.envMapIntensity.value=_.envMapIntensity)}function y(E,_,O){E.ior.value=_.ior,_.sheen>0&&(E.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),E.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(E.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,E.sheenColorMapTransform)),_.sheenRoughnessMap&&(E.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,E.sheenRoughnessMapTransform))),_.clearcoat>0&&(E.clearcoat.value=_.clearcoat,E.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(E.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,E.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(E.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===cn&&E.clearcoatNormalScale.value.negate())),_.dispersion>0&&(E.dispersion.value=_.dispersion),_.iridescence>0&&(E.iridescence.value=_.iridescence,E.iridescenceIOR.value=_.iridescenceIOR,E.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(E.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,E.iridescenceMapTransform)),_.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),_.transmission>0&&(E.transmission.value=_.transmission,E.transmissionSamplerMap.value=O.texture,E.transmissionSamplerSize.value.set(O.width,O.height),_.transmissionMap&&(E.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,E.transmissionMapTransform)),E.thickness.value=_.thickness,_.thicknessMap&&(E.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=_.attenuationDistance,E.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(E.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(E.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=_.specularIntensity,E.specularColor.value.copy(_.specularColor),_.specularColorMap&&(E.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,E.specularColorMapTransform)),_.specularIntensityMap&&(E.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,E.specularIntensityMapTransform))}function A(E,_){_.matcap&&(E.matcap.value=_.matcap)}function R(E,_){const O=e.get(_).light;E.referencePosition.value.setFromMatrixPosition(O.matrixWorld),E.nearDistance.value=O.shadow.camera.near,E.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function vE(i,e,t,n){let a={},o={},u=[];const h=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function p(O,I){const F=I.program;n.uniformBlockBinding(O,F)}function d(O,I){let F=a[O.id];F===void 0&&(A(O),F=v(O),a[O.id]=F,O.addEventListener("dispose",E));const k=I.program;n.updateUBOMapping(O,k);const D=e.render.frame;o[O.id]!==D&&(x(O),o[O.id]=D)}function v(O){const I=m();O.__bindingPointIndex=I;const F=i.createBuffer(),k=O.__size,D=O.usage;return i.bindBuffer(i.UNIFORM_BUFFER,F),i.bufferData(i.UNIFORM_BUFFER,k,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,F),F}function m(){for(let O=0;O<h;O++)if(u.indexOf(O)===-1)return u.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(O){const I=a[O.id],F=O.uniforms,k=O.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let D=0,z=F.length;D<z;D++){const q=Array.isArray(F[D])?F[D]:[F[D]];for(let P=0,T=q.length;P<T;P++){const B=q[P];if(y(B,D,P,k)===!0){const Y=B.__offset,ee=Array.isArray(B.value)?B.value:[B.value];let Z=0;for(let oe=0;oe<ee.length;oe++){const ie=ee[oe],ve=R(ie);typeof ie=="number"||typeof ie=="boolean"?(B.__data[0]=ie,i.bufferSubData(i.UNIFORM_BUFFER,Y+Z,B.__data)):ie.isMatrix3?(B.__data[0]=ie.elements[0],B.__data[1]=ie.elements[1],B.__data[2]=ie.elements[2],B.__data[3]=0,B.__data[4]=ie.elements[3],B.__data[5]=ie.elements[4],B.__data[6]=ie.elements[5],B.__data[7]=0,B.__data[8]=ie.elements[6],B.__data[9]=ie.elements[7],B.__data[10]=ie.elements[8],B.__data[11]=0):(ie.toArray(B.__data,Z),Z+=ve.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(O,I,F,k){const D=O.value,z=I+"_"+F;if(k[z]===void 0)return typeof D=="number"||typeof D=="boolean"?k[z]=D:k[z]=D.clone(),!0;{const q=k[z];if(typeof D=="number"||typeof D=="boolean"){if(q!==D)return k[z]=D,!0}else if(q.equals(D)===!1)return q.copy(D),!0}return!1}function A(O){const I=O.uniforms;let F=0;const k=16;for(let z=0,q=I.length;z<q;z++){const P=Array.isArray(I[z])?I[z]:[I[z]];for(let T=0,B=P.length;T<B;T++){const Y=P[T],ee=Array.isArray(Y.value)?Y.value:[Y.value];for(let Z=0,oe=ee.length;Z<oe;Z++){const ie=ee[Z],ve=R(ie),ne=F%k,me=ne%ve.boundary,be=ne+me;F+=me,be!==0&&k-be<ve.storage&&(F+=k-be),Y.__data=new Float32Array(ve.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=F,F+=ve.storage}}}const D=F%k;return D>0&&(F+=k-D),O.__size=F,O.__cache={},this}function R(O){const I={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(I.boundary=4,I.storage=4):O.isVector2?(I.boundary=8,I.storage=8):O.isVector3||O.isColor?(I.boundary=16,I.storage=12):O.isVector4?(I.boundary=16,I.storage=16):O.isMatrix3?(I.boundary=48,I.storage=48):O.isMatrix4?(I.boundary=64,I.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),I}function E(O){const I=O.target;I.removeEventListener("dispose",E);const F=u.indexOf(I.__bindingPointIndex);u.splice(F,1),i.deleteBuffer(a[I.id]),delete a[I.id],delete o[I.id]}function _(){for(const O in a)i.deleteBuffer(a[O]);u=[],a={},o={}}return{bind:p,update:d,dispose:_}}class xE{constructor(e={}){const{canvas:t=K_(),context:n=null,depth:a=!0,stencil:o=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=u;const A=new Uint32Array(4),R=new Int32Array(4);let E=null,_=null;const O=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let k=!1;this._outputColorSpace=pn;let D=0,z=0,q=null,P=-1,T=null;const B=new Nt,Y=new Nt;let ee=null;const Z=new gt(0);let oe=0,ie=t.width,ve=t.height,ne=1,me=null,be=null;const Le=new Nt(0,0,ie,ve),He=new Nt(0,0,ie,ve);let Qe=!1;const Je=new ac;let nt=!1,le=!1;const fe=new Ot,ce=new J,ye=new Nt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function Ue(){return q===null?ne:1}let U=n;function Ve(C,$){return t.getContext(C,$)}try{const C={alpha:!0,depth:a,stencil:o,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:v,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ko}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",G,!1),U===null){const $="webgl2";if(U=Ve($,C),U===null)throw Ve($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ge,Ye,Ae,it,Se,We,lt,yt,N,b,X,se,pe,ue,Ke,Re,Xe,je,Te,Ne,rt,$e,Pe,ot;function V(){Ge=new Cx(U),Ge.init(),$e=new hE(U,Ge),Ye=new Sx(U,Ge,e,$e),Ae=new lE(U,Ge),Ye.reversedDepthBuffer&&x&&Ae.buffers.depth.setReversed(!0),it=new Lx(U),Se=new Ky,We=new uE(U,Ge,Ae,Se,Ye,$e,it),lt=new Tx(F),yt=new Rx(F),N=new kg(U),Pe=new yx(U,N),b=new Px(U,N,it,Pe),X=new Ix(U,b,N,it),Te=new Fx(U,Ye,We),Re=new Mx(Se),se=new Yy(F,lt,yt,Ge,Ye,Pe,Re),pe=new gE(F,Se),ue=new Jy,Ke=new rE(Ge),je=new xx(F,lt,yt,Ae,X,y,p),Xe=new oE(F,X,Ye),ot=new vE(U,it,Ye,Ae),Ne=new Ex(U,Ge,it),rt=new Dx(U,Ge,it),it.programs=se.programs,F.capabilities=Ye,F.extensions=Ge,F.properties=Se,F.renderLists=ue,F.shadowMap=Xe,F.state=Ae,F.info=it}V();const we=new mE(F,U);this.xr=we,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const C=Ge.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ge.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(C){C!==void 0&&(ne=C,this.setSize(ie,ve,!1))},this.getSize=function(C){return C.set(ie,ve)},this.setSize=function(C,$,Q=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=C,ve=$,t.width=Math.floor(C*ne),t.height=Math.floor($*ne),Q===!0&&(t.style.width=C+"px",t.style.height=$+"px"),this.setViewport(0,0,C,$)},this.getDrawingBufferSize=function(C){return C.set(ie*ne,ve*ne).floor()},this.setDrawingBufferSize=function(C,$,Q){ie=C,ve=$,ne=Q,t.width=Math.floor(C*Q),t.height=Math.floor($*Q),this.setViewport(0,0,C,$)},this.getCurrentViewport=function(C){return C.copy(B)},this.getViewport=function(C){return C.copy(Le)},this.setViewport=function(C,$,Q,te){C.isVector4?Le.set(C.x,C.y,C.z,C.w):Le.set(C,$,Q,te),Ae.viewport(B.copy(Le).multiplyScalar(ne).round())},this.getScissor=function(C){return C.copy(He)},this.setScissor=function(C,$,Q,te){C.isVector4?He.set(C.x,C.y,C.z,C.w):He.set(C,$,Q,te),Ae.scissor(Y.copy(He).multiplyScalar(ne).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(C){Ae.setScissorTest(Qe=C)},this.setOpaqueSort=function(C){me=C},this.setTransparentSort=function(C){be=C},this.getClearColor=function(C){return C.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(C=!0,$=!0,Q=!0){let te=0;if(C){let j=!1;if(q!==null){const Ee=q.texture.format;j=Ee===nc||Ee===tc||Ee===ec}if(j){const Ee=q.texture.type,De=Ee===Vn||Ee===Oi||Ee===Fr||Ee===Ir||Ee===Jo||Ee===Qo,ze=je.getClearColor(),Ie=je.getClearAlpha(),tt=ze.r,Me=ze.g,Ze=ze.b;De?(A[0]=tt,A[1]=Me,A[2]=Ze,A[3]=Ie,U.clearBufferuiv(U.COLOR,0,A)):(R[0]=tt,R[1]=Me,R[2]=Ze,R[3]=Ie,U.clearBufferiv(U.COLOR,0,R))}else te|=U.COLOR_BUFFER_BIT}$&&(te|=U.DEPTH_BUFFER_BIT),Q&&(te|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",G,!1),je.dispose(),ue.dispose(),Ke.dispose(),Se.dispose(),lt.dispose(),yt.dispose(),X.dispose(),Pe.dispose(),ot.dispose(),se.dispose(),we.dispose(),we.removeEventListener("sessionstart",kt),we.removeEventListener("sessionend",_i),Wn.stop()};function Ce(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const C=it.autoReset,$=Xe.enabled,Q=Xe.autoUpdate,te=Xe.needsUpdate,j=Xe.type;V(),it.autoReset=C,Xe.enabled=$,Xe.autoUpdate=Q,Xe.needsUpdate=te,Xe.type=j}function G(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function H(C){const $=C.target;$.removeEventListener("dispose",H),Oe($)}function Oe(C){st(C),Se.remove(C)}function st(C){const $=Se.get(C).programs;$!==void 0&&($.forEach(function(Q){se.releaseProgram(Q)}),C.isShaderMaterial&&se.releaseShaderCache(C))}this.renderBufferDirect=function(C,$,Q,te,j,Ee){$===null&&($=Be);const De=j.isMesh&&j.matrixWorld.determinant()<0,ze=jr(C,$,Q,te,j);Ae.setMaterial(te,De);let Ie=Q.index,tt=1;if(te.wireframe===!0){if(Ie=b.getWireframeAttribute(Q),Ie===void 0)return;tt=2}const Me=Q.drawRange,Ze=Q.attributes.position;let pt=Me.start*tt,wt=(Me.start+Me.count)*tt;Ee!==null&&(pt=Math.max(pt,Ee.start*tt),wt=Math.min(wt,(Ee.start+Ee.count)*tt)),Ie!==null?(pt=Math.max(pt,0),wt=Math.min(wt,Ie.count)):Ze!=null&&(pt=Math.max(pt,0),wt=Math.min(wt,Ze.count));const It=wt-pt;if(It<0||It===1/0)return;Pe.setup(j,te,ze,Q,Ie);let Pt,bt=Ne;if(Ie!==null&&(Pt=N.get(Ie),bt=rt,bt.setIndex(Pt)),j.isMesh)te.wireframe===!0?(Ae.setLineWidth(te.wireframeLinewidth*Ue()),bt.setMode(U.LINES)):bt.setMode(U.TRIANGLES);else if(j.isLine){let et=te.linewidth;et===void 0&&(et=1),Ae.setLineWidth(et*Ue()),j.isLineSegments?bt.setMode(U.LINES):j.isLineLoop?bt.setMode(U.LINE_LOOP):bt.setMode(U.LINE_STRIP)}else j.isPoints?bt.setMode(U.POINTS):j.isSprite&&bt.setMode(U.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Or("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))bt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const et=j._multiDrawStarts,Dt=j._multiDrawCounts,xt=j._multiDrawCount,Kt=Ie?N.get(Ie).bytesPerElement:1,S=Se.get(te).currentProgram.getUniforms();for(let mt=0;mt<xt;mt++)S.setValue(U,"_gl_DrawID",mt),bt.render(et[mt]/Kt,Dt[mt])}else if(j.isInstancedMesh)bt.renderInstances(pt,It,j.count);else if(Q.isInstancedBufferGeometry){const et=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Dt=Math.min(Q.instanceCount,et);bt.renderInstances(pt,It,Dt)}else bt.render(pt,It)};function Et(C,$,Q){C.transparent===!0&&C.side===Cn&&C.forceSinglePass===!1?(C.side=cn,C.needsUpdate=!0,vi(C,$,Q),C.side=pi,C.needsUpdate=!0,vi(C,$,Q),C.side=Cn):vi(C,$,Q)}this.compile=function(C,$,Q=null){Q===null&&(Q=C),_=Ke.get(Q),_.init($),I.push(_),Q.traverseVisible(function(j){j.isLight&&j.layers.test($.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),C!==Q&&C.traverseVisible(function(j){j.isLight&&j.layers.test($.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const te=new Set;return C.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Ee=j.material;if(Ee)if(Array.isArray(Ee))for(let De=0;De<Ee.length;De++){const ze=Ee[De];Et(ze,Q,j),te.add(ze)}else Et(Ee,Q,j),te.add(Ee)}),_=I.pop(),te},this.compileAsync=function(C,$,Q=null){const te=this.compile(C,$,Q);return new Promise(j=>{function Ee(){if(te.forEach(function(De){Se.get(De).currentProgram.isReady()&&te.delete(De)}),te.size===0){j(C);return}setTimeout(Ee,10)}Ge.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let ut=null;function Sn(C){ut&&ut(C)}function kt(){Wn.stop()}function _i(){Wn.start()}const Wn=new Nu;Wn.setAnimationLoop(Sn),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(C){ut=C,we.setAnimationLoop(C),C===null?Wn.stop():Wn.start()},we.addEventListener("sessionstart",kt),we.addEventListener("sessionend",_i),this.render=function(C,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera($),$=we.getCamera()),C.isScene===!0&&C.onBeforeRender(F,C,$,q),_=Ke.get(C,I.length),_.init($),I.push(_),fe.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Je.setFromProjectionMatrix(fe,Hn,$.reversedDepth),le=this.localClippingEnabled,nt=Re.init(this.clippingPlanes,le),E=ue.get(C,O.length),E.init(),O.push(E),we.enabled===!0&&we.isPresenting===!0){const Ee=F.xr.getDepthSensingMesh();Ee!==null&&xr(Ee,$,-1/0,F.sortObjects)}xr(C,$,0,F.sortObjects),E.finish(),F.sortObjects===!0&&E.sort(me,be),he=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,he&&je.addToRenderList(E,C),this.info.render.frame++,nt===!0&&Re.beginShadows();const Q=_.state.shadowsArray;Xe.render(Q,C,$),nt===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=E.opaque,j=E.transmissive;if(_.setupLights(),$.isArrayCamera){const Ee=$.cameras;if(j.length>0)for(let De=0,ze=Ee.length;De<ze;De++){const Ie=Ee[De];Wr(te,j,C,Ie)}he&&je.render(C);for(let De=0,ze=Ee.length;De<ze;De++){const Ie=Ee[De];rn(E,C,Ie,Ie.viewport)}}else j.length>0&&Wr(te,j,C,$),he&&je.render(C),rn(E,C,$);q!==null&&z===0&&(We.updateMultisampleRenderTarget(q),We.updateRenderTargetMipmap(q)),C.isScene===!0&&C.onAfterRender(F,C,$),Pe.resetDefaultState(),P=-1,T=null,I.pop(),I.length>0?(_=I[I.length-1],nt===!0&&Re.setGlobalState(F.clippingPlanes,_.state.camera)):_=null,O.pop(),O.length>0?E=O[O.length-1]:E=null};function xr(C,$,Q,te){if(C.visible===!1)return;if(C.layers.test($.layers)){if(C.isGroup)Q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update($);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Je.intersectsSprite(C)){te&&ye.setFromMatrixPosition(C.matrixWorld).applyMatrix4(fe);const De=X.update(C),ze=C.material;ze.visible&&E.push(C,De,ze,Q,ye.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Je.intersectsObject(C))){const De=X.update(C),ze=C.material;if(te&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ye.copy(C.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),ye.copy(De.boundingSphere.center)),ye.applyMatrix4(C.matrixWorld).applyMatrix4(fe)),Array.isArray(ze)){const Ie=De.groups;for(let tt=0,Me=Ie.length;tt<Me;tt++){const Ze=Ie[tt],pt=ze[Ze.materialIndex];pt&&pt.visible&&E.push(C,De,pt,Q,ye.z,Ze)}}else ze.visible&&E.push(C,De,ze,Q,ye.z,null)}}const Ee=C.children;for(let De=0,ze=Ee.length;De<ze;De++)xr(Ee[De],$,Q,te)}function rn(C,$,Q,te){const j=C.opaque,Ee=C.transmissive,De=C.transparent;_.setupLightsView(Q),nt===!0&&Re.setGlobalState(F.clippingPlanes,Q),te&&Ae.viewport(B.copy(te)),j.length>0&&Xn(j,$,Q),Ee.length>0&&Xn(Ee,$,Q),De.length>0&&Xn(De,$,Q),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Wr(C,$,Q,te){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[te.id]===void 0&&(_.state.transmissionRenderTarget[te.id]=new Bi(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?kr:Vn,minFilter:Ni,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const Ee=_.state.transmissionRenderTarget[te.id],De=te.viewport||B;Ee.setSize(De.z*F.transmissionResolutionScale,De.w*F.transmissionResolutionScale);const ze=F.getRenderTarget(),Ie=F.getActiveCubeFace(),tt=F.getActiveMipmapLevel();F.setRenderTarget(Ee),F.getClearColor(Z),oe=F.getClearAlpha(),oe<1&&F.setClearColor(16777215,.5),F.clear(),he&&je.render(Q);const Me=F.toneMapping;F.toneMapping=di;const Ze=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),_.setupLightsView(te),nt===!0&&Re.setGlobalState(F.clippingPlanes,te),Xn(C,Q,te),We.updateMultisampleRenderTarget(Ee),We.updateRenderTargetMipmap(Ee),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let wt=0,It=$.length;wt<It;wt++){const Pt=$[wt],bt=Pt.object,et=Pt.geometry,Dt=Pt.material,xt=Pt.group;if(Dt.side===Cn&&bt.layers.test(te.layers)){const Kt=Dt.side;Dt.side=cn,Dt.needsUpdate=!0,gi(bt,Q,te,et,Dt,xt),Dt.side=Kt,Dt.needsUpdate=!0,pt=!0}}pt===!0&&(We.updateMultisampleRenderTarget(Ee),We.updateRenderTargetMipmap(Ee))}F.setRenderTarget(ze,Ie,tt),F.setClearColor(Z,oe),Ze!==void 0&&(te.viewport=Ze),F.toneMapping=Me}function Xn(C,$,Q){const te=$.isScene===!0?$.overrideMaterial:null;for(let j=0,Ee=C.length;j<Ee;j++){const De=C[j],ze=De.object,Ie=De.geometry,tt=De.group;let Me=De.material;Me.allowOverride===!0&&te!==null&&(Me=te),ze.layers.test(Q.layers)&&gi(ze,$,Q,Ie,Me,tt)}}function gi(C,$,Q,te,j,Ee){C.onBeforeRender(F,$,Q,te,j,Ee),C.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),j.onBeforeRender(F,$,Q,te,C,Ee),j.transparent===!0&&j.side===Cn&&j.forceSinglePass===!1?(j.side=cn,j.needsUpdate=!0,F.renderBufferDirect(Q,$,te,j,C,Ee),j.side=pi,j.needsUpdate=!0,F.renderBufferDirect(Q,$,te,j,C,Ee),j.side=Cn):F.renderBufferDirect(Q,$,te,j,C,Ee),C.onAfterRender(F,$,Q,te,j,Ee)}function vi(C,$,Q){$.isScene!==!0&&($=Be);const te=Se.get(C),j=_.state.lights,Ee=_.state.shadowsArray,De=j.state.version,ze=se.getParameters(C,j.state,Ee,$,Q),Ie=se.getProgramCacheKey(ze);let tt=te.programs;te.environment=C.isMeshStandardMaterial?$.environment:null,te.fog=$.fog,te.envMap=(C.isMeshStandardMaterial?yt:lt).get(C.envMap||te.environment),te.envMapRotation=te.environment!==null&&C.envMap===null?$.environmentRotation:C.envMapRotation,tt===void 0&&(C.addEventListener("dispose",H),tt=new Map,te.programs=tt);let Me=tt.get(Ie);if(Me!==void 0){if(te.currentProgram===Me&&te.lightsStateVersion===De)return $r(C,ze),Me}else ze.uniforms=se.getUniforms(C),C.onBeforeCompile(ze,F),Me=se.acquireProgram(ze,Ie),tt.set(Ie,Me),te.uniforms=ze.uniforms;const Ze=te.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ze.clippingPlanes=Re.uniform),$r(C,ze),te.needsLights=ta(C),te.lightsStateVersion=De,te.needsLights&&(Ze.ambientLightColor.value=j.state.ambient,Ze.lightProbe.value=j.state.probe,Ze.directionalLights.value=j.state.directional,Ze.directionalLightShadows.value=j.state.directionalShadow,Ze.spotLights.value=j.state.spot,Ze.spotLightShadows.value=j.state.spotShadow,Ze.rectAreaLights.value=j.state.rectArea,Ze.ltc_1.value=j.state.rectAreaLTC1,Ze.ltc_2.value=j.state.rectAreaLTC2,Ze.pointLights.value=j.state.point,Ze.pointLightShadows.value=j.state.pointShadow,Ze.hemisphereLights.value=j.state.hemi,Ze.directionalShadowMap.value=j.state.directionalShadowMap,Ze.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ze.spotShadowMap.value=j.state.spotShadowMap,Ze.spotLightMatrix.value=j.state.spotLightMatrix,Ze.spotLightMap.value=j.state.spotLightMap,Ze.pointShadowMap.value=j.state.pointShadowMap,Ze.pointShadowMatrix.value=j.state.pointShadowMatrix),te.currentProgram=Me,te.uniformsList=null,Me}function Xr(C){if(C.uniformsList===null){const $=C.currentProgram.getUniforms();C.uniformsList=Ws.seqWithValue($.seq,C.uniforms)}return C.uniformsList}function $r(C,$){const Q=Se.get(C);Q.outputColorSpace=$.outputColorSpace,Q.batching=$.batching,Q.batchingColor=$.batchingColor,Q.instancing=$.instancing,Q.instancingColor=$.instancingColor,Q.instancingMorph=$.instancingMorph,Q.skinning=$.skinning,Q.morphTargets=$.morphTargets,Q.morphNormals=$.morphNormals,Q.morphColors=$.morphColors,Q.morphTargetsCount=$.morphTargetsCount,Q.numClippingPlanes=$.numClippingPlanes,Q.numIntersection=$.numClipIntersection,Q.vertexAlphas=$.vertexAlphas,Q.vertexTangents=$.vertexTangents,Q.toneMapping=$.toneMapping}function jr(C,$,Q,te,j){$.isScene!==!0&&($=Be),We.resetTextureUnits();const Ee=$.fog,De=te.isMeshStandardMaterial?$.environment:null,ze=q===null?F.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:mr,Ie=(te.isMeshStandardMaterial?yt:lt).get(te.envMap||De),tt=te.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Me=!!Q.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ze=!!Q.morphAttributes.position,pt=!!Q.morphAttributes.normal,wt=!!Q.morphAttributes.color;let It=di;te.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(It=F.toneMapping);const Pt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,bt=Pt!==void 0?Pt.length:0,et=Se.get(te),Dt=_.state.lights;if(nt===!0&&(le===!0||C!==T)){const Yt=C===T&&te.id===P;Re.setState(te,C,Yt)}let xt=!1;te.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Dt.state.version||et.outputColorSpace!==ze||j.isBatchedMesh&&et.batching===!1||!j.isBatchedMesh&&et.batching===!0||j.isBatchedMesh&&et.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&et.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&et.instancing===!1||!j.isInstancedMesh&&et.instancing===!0||j.isSkinnedMesh&&et.skinning===!1||!j.isSkinnedMesh&&et.skinning===!0||j.isInstancedMesh&&et.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&et.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&et.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&et.instancingMorph===!1&&j.morphTexture!==null||et.envMap!==Ie||te.fog===!0&&et.fog!==Ee||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Re.numPlanes||et.numIntersection!==Re.numIntersection)||et.vertexAlphas!==tt||et.vertexTangents!==Me||et.morphTargets!==Ze||et.morphNormals!==pt||et.morphColors!==wt||et.toneMapping!==It||et.morphTargetsCount!==bt)&&(xt=!0):(xt=!0,et.__version=te.version);let Kt=et.currentProgram;xt===!0&&(Kt=vi(te,$,j));let S=!1,mt=!1,xi=!1;const At=Kt.getUniforms(),Ht=et.uniforms;if(Ae.useProgram(Kt.program)&&(S=!0,mt=!0,xi=!0),te.id!==P&&(P=te.id,mt=!0),S||T!==C){Ae.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),At.setValue(U,"projectionMatrix",C.projectionMatrix),At.setValue(U,"viewMatrix",C.matrixWorldInverse);const Zt=At.map.cameraPosition;Zt!==void 0&&Zt.setValue(U,ce.setFromMatrixPosition(C.matrixWorld)),Ye.logarithmicDepthBuffer&&At.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&At.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),T!==C&&(T=C,mt=!0,xi=!0)}if(j.isSkinnedMesh){At.setOptional(U,j,"bindMatrix"),At.setOptional(U,j,"bindMatrixInverse");const Yt=j.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),At.setValue(U,"boneTexture",Yt.boneTexture,We))}j.isBatchedMesh&&(At.setOptional(U,j,"batchingTexture"),At.setValue(U,"batchingTexture",j._matricesTexture,We),At.setOptional(U,j,"batchingIdTexture"),At.setValue(U,"batchingIdTexture",j._indirectTexture,We),At.setOptional(U,j,"batchingColorTexture"),j._colorsTexture!==null&&At.setValue(U,"batchingColorTexture",j._colorsTexture,We));const sn=Q.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&Te.update(j,Q,Kt),(mt||et.receiveShadow!==j.receiveShadow)&&(et.receiveShadow=j.receiveShadow,At.setValue(U,"receiveShadow",j.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Ht.envMap.value=Ie,Ht.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&$.environment!==null&&(Ht.envMapIntensity.value=$.environmentIntensity),mt&&(At.setValue(U,"toneMappingExposure",F.toneMappingExposure),et.needsLights&&ea(Ht,xi),Ee&&te.fog===!0&&pe.refreshFogUniforms(Ht,Ee),pe.refreshMaterialUniforms(Ht,te,ne,ve,_.state.transmissionRenderTarget[C.id]),Ws.upload(U,Xr(et),Ht,We)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Ws.upload(U,Xr(et),Ht,We),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&At.setValue(U,"center",j.center),At.setValue(U,"modelViewMatrix",j.modelViewMatrix),At.setValue(U,"normalMatrix",j.normalMatrix),At.setValue(U,"modelMatrix",j.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Yt=te.uniformsGroups;for(let Zt=0,yr=Yt.length;Zt<yr;Zt++){const $n=Yt[Zt];ot.update($n,Kt),ot.bind($n,Kt)}}return Kt}function ea(C,$){C.ambientLightColor.needsUpdate=$,C.lightProbe.needsUpdate=$,C.directionalLights.needsUpdate=$,C.directionalLightShadows.needsUpdate=$,C.pointLights.needsUpdate=$,C.pointLightShadows.needsUpdate=$,C.spotLights.needsUpdate=$,C.spotLightShadows.needsUpdate=$,C.rectAreaLights.needsUpdate=$,C.hemisphereLights.needsUpdate=$}function ta(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(C,$,Q){const te=Se.get(C);te.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),Se.get(C.texture).__webglTexture=$,Se.get(C.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:Q,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,$){const Q=Se.get(C);Q.__webglFramebuffer=$,Q.__useDefaultFramebuffer=$===void 0};const na=U.createFramebuffer();this.setRenderTarget=function(C,$=0,Q=0){q=C,D=$,z=Q;let te=!0,j=null,Ee=!1,De=!1;if(C){const Ie=Se.get(C);if(Ie.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(U.FRAMEBUFFER,null),te=!1;else if(Ie.__webglFramebuffer===void 0)We.setupRenderTarget(C);else if(Ie.__hasExternalTextures)We.rebindTextures(C,Se.get(C.texture).__webglTexture,Se.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ze=C.depthTexture;if(Ie.__boundDepthTexture!==Ze){if(Ze!==null&&Se.has(Ze)&&(C.width!==Ze.image.width||C.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(C)}}const tt=C.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(De=!0);const Me=Se.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Me[$])?j=Me[$][Q]:j=Me[$],Ee=!0):C.samples>0&&We.useMultisampledRTT(C)===!1?j=Se.get(C).__webglMultisampledFramebuffer:Array.isArray(Me)?j=Me[Q]:j=Me,B.copy(C.viewport),Y.copy(C.scissor),ee=C.scissorTest}else B.copy(Le).multiplyScalar(ne).floor(),Y.copy(He).multiplyScalar(ne).floor(),ee=Qe;if(Q!==0&&(j=na),Ae.bindFramebuffer(U.FRAMEBUFFER,j)&&te&&Ae.drawBuffers(C,j),Ae.viewport(B),Ae.scissor(Y),Ae.setScissorTest(ee),Ee){const Ie=Se.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ie.__webglTexture,Q)}else if(De){const Ie=$;for(let tt=0;tt<C.textures.length;tt++){const Me=Se.get(C.textures[tt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+tt,Me.__webglTexture,Q,Ie)}}else if(C!==null&&Q!==0){const Ie=Se.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ie.__webglTexture,Q)}P=-1},this.readRenderTargetPixels=function(C,$,Q,te,j,Ee,De,ze=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Se.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Ie=Ie[De]),Ie){Ae.bindFramebuffer(U.FRAMEBUFFER,Ie);try{const tt=C.textures[ze],Me=tt.format,Ze=tt.type;if(!Ye.textureFormatReadable(Me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=C.width-te&&Q>=0&&Q<=C.height-j&&(C.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ze),U.readPixels($,Q,te,j,$e.convert(Me),$e.convert(Ze),Ee))}finally{const tt=q!==null?Se.get(q).__webglFramebuffer:null;Ae.bindFramebuffer(U.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(C,$,Q,te,j,Ee,De,ze=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Se.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Ie=Ie[De]),Ie)if($>=0&&$<=C.width-te&&Q>=0&&Q<=C.height-j){Ae.bindFramebuffer(U.FRAMEBUFFER,Ie);const tt=C.textures[ze],Me=tt.format,Ze=tt.type;if(!Ye.textureFormatReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,pt),U.bufferData(U.PIXEL_PACK_BUFFER,Ee.byteLength,U.STREAM_READ),C.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ze),U.readPixels($,Q,te,j,$e.convert(Me),$e.convert(Ze),0);const wt=q!==null?Se.get(q).__webglFramebuffer:null;Ae.bindFramebuffer(U.FRAMEBUFFER,wt);const It=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Z_(U,It,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,pt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ee),U.deleteBuffer(pt),U.deleteSync(It),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,$=null,Q=0){const te=Math.pow(2,-Q),j=Math.floor(C.image.width*te),Ee=Math.floor(C.image.height*te),De=$!==null?$.x:0,ze=$!==null?$.y:0;We.setTexture2D(C,0),U.copyTexSubImage2D(U.TEXTURE_2D,Q,0,0,De,ze,j,Ee),Ae.unbindTexture()};const ia=U.createFramebuffer(),Tt=U.createFramebuffer();this.copyTextureToTexture=function(C,$,Q=null,te=null,j=0,Ee=null){Ee===null&&(j!==0?(Or("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=j,j=0):Ee=0);let De,ze,Ie,tt,Me,Ze,pt,wt,It;const Pt=C.isCompressedTexture?C.mipmaps[Ee]:C.image;if(Q!==null)De=Q.max.x-Q.min.x,ze=Q.max.y-Q.min.y,Ie=Q.isBox3?Q.max.z-Q.min.z:1,tt=Q.min.x,Me=Q.min.y,Ze=Q.isBox3?Q.min.z:0;else{const sn=Math.pow(2,-j);De=Math.floor(Pt.width*sn),ze=Math.floor(Pt.height*sn),C.isDataArrayTexture?Ie=Pt.depth:C.isData3DTexture?Ie=Math.floor(Pt.depth*sn):Ie=1,tt=0,Me=0,Ze=0}te!==null?(pt=te.x,wt=te.y,It=te.z):(pt=0,wt=0,It=0);const bt=$e.convert($.format),et=$e.convert($.type);let Dt;$.isData3DTexture?(We.setTexture3D($,0),Dt=U.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(We.setTexture2DArray($,0),Dt=U.TEXTURE_2D_ARRAY):(We.setTexture2D($,0),Dt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,$.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,$.unpackAlignment);const xt=U.getParameter(U.UNPACK_ROW_LENGTH),Kt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),S=U.getParameter(U.UNPACK_SKIP_PIXELS),mt=U.getParameter(U.UNPACK_SKIP_ROWS),xi=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Pt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Pt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,tt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Me),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ze);const At=C.isDataArrayTexture||C.isData3DTexture,Ht=$.isDataArrayTexture||$.isData3DTexture;if(C.isDepthTexture){const sn=Se.get(C),Yt=Se.get($),Zt=Se.get(sn.__renderTarget),yr=Se.get(Yt.__renderTarget);Ae.bindFramebuffer(U.READ_FRAMEBUFFER,Zt.__webglFramebuffer),Ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,yr.__webglFramebuffer);for(let $n=0;$n<Ie;$n++)At&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Se.get(C).__webglTexture,j,Ze+$n),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Se.get($).__webglTexture,Ee,It+$n)),U.blitFramebuffer(tt,Me,De,ze,pt,wt,De,ze,U.DEPTH_BUFFER_BIT,U.NEAREST);Ae.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(j!==0||C.isRenderTargetTexture||Se.has(C)){const sn=Se.get(C),Yt=Se.get($);Ae.bindFramebuffer(U.READ_FRAMEBUFFER,ia),Ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,Tt);for(let Zt=0;Zt<Ie;Zt++)At?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,sn.__webglTexture,j,Ze+Zt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,sn.__webglTexture,j),Ht?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Yt.__webglTexture,Ee,It+Zt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Yt.__webglTexture,Ee),j!==0?U.blitFramebuffer(tt,Me,De,ze,pt,wt,De,ze,U.COLOR_BUFFER_BIT,U.NEAREST):Ht?U.copyTexSubImage3D(Dt,Ee,pt,wt,It+Zt,tt,Me,De,ze):U.copyTexSubImage2D(Dt,Ee,pt,wt,tt,Me,De,ze);Ae.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ht?C.isDataTexture||C.isData3DTexture?U.texSubImage3D(Dt,Ee,pt,wt,It,De,ze,Ie,bt,et,Pt.data):$.isCompressedArrayTexture?U.compressedTexSubImage3D(Dt,Ee,pt,wt,It,De,ze,Ie,bt,Pt.data):U.texSubImage3D(Dt,Ee,pt,wt,It,De,ze,Ie,bt,et,Pt):C.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Ee,pt,wt,De,ze,bt,et,Pt.data):C.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Ee,pt,wt,Pt.width,Pt.height,bt,Pt.data):U.texSubImage2D(U.TEXTURE_2D,Ee,pt,wt,De,ze,bt,et,Pt);U.pixelStorei(U.UNPACK_ROW_LENGTH,xt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Kt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,S),U.pixelStorei(U.UNPACK_SKIP_ROWS,mt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,xi),Ee===0&&$.generateMipmaps&&U.generateMipmap(Dt),Ae.unbindTexture()},this.initRenderTarget=function(C){Se.get(C).__webglFramebuffer===void 0&&We.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?We.setTextureCube(C,0):C.isData3DTexture?We.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?We.setTexture2DArray(C,0):We.setTexture2D(C,0),Ae.unbindTexture()},this.resetState=function(){D=0,z=0,q=null,Ae.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}const ru={type:"change"},lc={type:"start"},Hu={type:"end"},Is=new rc,su=new ui,yE=Math.cos(70*Y_.DEG2RAD),Wt=new J,on=2*Math.PI,Ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ka=1e-6;class EE extends Ng{constructor(e,t=null){super(e,t),this.state=Ct.NONE,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:lr.ROTATE,MIDDLE:lr.DOLLY,RIGHT:lr.PAN},this.touches={ONE:ar.ROTATE,TWO:ar.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new ki,this._lastTargetPosition=new J,this._quat=new ki().setFromUnitVectors(e.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ll,this._sphericalDelta=new Ll,this._scale=1,this._panOffset=new J,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new J,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ME.bind(this),this._onPointerDown=SE.bind(this),this._onPointerUp=TE.bind(this),this._onContextMenu=DE.bind(this),this._onMouseWheel=AE.bind(this),this._onKeyDown=RE.bind(this),this._onTouchStart=CE.bind(this),this._onTouchMove=PE.bind(this),this._onMouseDown=wE.bind(this),this._onMouseMove=bE.bind(this),this._interceptControlDown=LE.bind(this),this._interceptControlUp=FE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ru),this.update(),this.state=Ct.NONE}update(e=null){const t=this.object.position;Wt.copy(t).sub(this.target),Wt.applyQuaternion(this._quat),this._spherical.setFromVector3(Wt),this.autoRotate&&this.state===Ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(n)&&isFinite(a)&&(n<-Math.PI?n+=on:n>Math.PI&&(n-=on),a<-Math.PI?a+=on:a>Math.PI&&(a-=on),n<=a?this._spherical.theta=Math.max(n,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+a)/2?Math.max(n,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=u!=this._spherical.radius}if(Wt.setFromSpherical(this._spherical),Wt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const h=Wt.length();u=this._clampDistance(h*this._scale);const p=h-u;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),o=!!p}else if(this.object.isOrthographicCamera){const h=new J(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=p!==this.object.zoom;const d=new J(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(h),this.object.updateMatrixWorld(),u=Wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Is.origin.copy(this.object.position),Is.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Is.direction))<yE?this.object.lookAt(this.target):(su.setFromNormalAndCoplanarPoint(this.object.up,this.target),Is.intersectPlane(su,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Ka||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ka||this._lastTargetPosition.distanceToSquared(this.target)>Ka?(this.dispatchEvent(ru),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?on/60*this.autoRotateSpeed*e:on/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Wt.setFromMatrixColumn(t,0),Wt.multiplyScalar(-e),this._panOffset.add(Wt)}_panUp(e,t){this.screenSpacePanning===!0?Wt.setFromMatrixColumn(t,1):(Wt.setFromMatrixColumn(t,0),Wt.crossVectors(this.object.up,Wt)),Wt.multiplyScalar(e),this._panOffset.add(Wt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;Wt.copy(a).sub(this.target);let o=Wt.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/n.clientHeight,this.object.matrix),this._panUp(2*t*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),a=e-n.left,o=t-n.top,u=n.width,h=n.height;this._mouse.x=a/u*2-1,this._mouse.y=-(o/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(n,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(n,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,a=e.pageY-t.y,o=Math.sqrt(n*n+a*a);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._rotateEnd.set(a,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(n,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,a=e.pageY-t.y,o=Math.sqrt(n*n+a*a);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,h=(e.pageY+t.y)*.5;this._updateZoomParameters(u,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new at,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function SE(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function ME(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function TE(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hu),this.state=Ct.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function wE(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case lr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ct.DOLLY;break;case lr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ct.ROTATE}break;case lr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ct.PAN}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(lc)}function bE(i){switch(this.state){case Ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function AE(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ct.NONE||(i.preventDefault(),this.dispatchEvent(lc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Hu))}function RE(i){this.enabled!==!1&&this._handleKeyDown(i)}function CE(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ar.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ct.TOUCH_ROTATE;break;case ar.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ct.TOUCH_PAN;break;default:this.state=Ct.NONE}break;case 2:switch(this.touches.TWO){case ar.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ct.TOUCH_DOLLY_PAN;break;case ar.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ct.TOUCH_DOLLY_ROTATE;break;default:this.state=Ct.NONE}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(lc)}function PE(i){switch(this._trackPointer(i),this.state){case Ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ct.NONE}}function DE(i){this.enabled!==!1&&i.preventDefault()}function LE(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function FE(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const IE="modulepreload",UE=function(i,e){return new URL(i,e).href},au={},NE=function(e,t,n){let a=Promise.resolve();if(t&&t.length>0){const u=document.getElementsByTagName("link"),h=document.querySelector("meta[property=csp-nonce]"),p=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));a=Promise.allSettled(t.map(d=>{if(d=UE(d,n),d in au)return;au[d]=!0;const v=d.endsWith(".css"),m=v?'[rel="stylesheet"]':"";if(!!n)for(let A=u.length-1;A>=0;A--){const R=u[A];if(R.href===d&&(!v||R.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${m}`))return;const y=document.createElement("link");if(y.rel=v?"stylesheet":IE,v||(y.as="script"),y.crossOrigin="",y.href=d,p&&y.setAttribute("nonce",p),document.head.appendChild(y),v)return new Promise((A,R)=>{y.addEventListener("load",A),y.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(u){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=u,window.dispatchEvent(h),!h.defaultPrevented)throw u}return a.then(u=>{for(const h of u||[])h.status==="rejected"&&o(h.reason);return e().catch(o)})};var OE=async function(i={}){var Zc,Jc,Qc;var e,t=i,n=typeof window=="object",a=typeof WorkerGlobalScope<"u",o=typeof process=="object"&&((Zc=process.versions)==null?void 0:Zc.node)&&process.type!="renderer",u=!n&&!o&&!a;if(o){const{createRequire:r}=await NE(async()=>{const{createRequire:s}=await Promise.resolve().then(()=>dS);return{createRequire:s}},void 0,import.meta.url);var h=r(import.meta.url)}var p="./this.program",d=(r,s)=>{throw s},v=import.meta.url,m="";function x(r){return t.locateFile?t.locateFile(r,m):m+r}var y,A;if(o){if(!(typeof process=="object"&&((Jc=process.versions)==null?void 0:Jc.node)&&process.type!="renderer"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var R=process.versions.node,E=R.split(".").slice(0,3);if(E=E[0]*1e4+E[1]*100+E[2].split("-")[0]*1,E<16e4)throw new Error("This emscripten-generated code requires node v16.0.0 (detected v"+R+")");var _=h("fs");v.startsWith("file:")&&(m=h("path").dirname(h("url").fileURLToPath(v))+"/"),A=s=>{s=z(s)?new URL(s):s;var c=_.readFileSync(s);return D(Buffer.isBuffer(c)),c},y=async(s,c=!0)=>{s=z(s)?new URL(s):s;var l=_.readFileSync(s,c?void 0:"utf8");return D(c?Buffer.isBuffer(l):typeof l=="string"),l},process.argv.length>1&&(p=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),d=(s,c)=>{throw process.exitCode=s,c}}else if(u){if(typeof process=="object"&&((Qc=process.versions)==null?void 0:Qc.node)&&process.type!="renderer"||typeof window=="object"||typeof WorkerGlobalScope<"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)")}else if(n||a){try{m=new URL(".",v).href}catch{}if(!(typeof window=="object"||typeof WorkerGlobalScope<"u"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");a&&(A=r=>{var s=new XMLHttpRequest;return s.open("GET",r,!1),s.responseType="arraybuffer",s.send(null),new Uint8Array(s.response)}),y=async r=>{if(z(r))return new Promise((c,l)=>{var f=new XMLHttpRequest;f.open("GET",r,!0),f.responseType="arraybuffer",f.onload=()=>{if(f.status==200||f.status==0&&f.response){c(f.response);return}l(f.status)},f.onerror=l,f.send(null)});var s=await fetch(r,{credentials:"same-origin"});if(s.ok)return s.arrayBuffer();throw new Error(s.status+" : "+s.url)}}else throw new Error("environment detection error");var O=console.log.bind(console),I=console.error.bind(console);D(!u,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");var F;typeof WebAssembly!="object"&&I("no native wasm support detected");var k=!1;function D(r,s){r||X("Assertion failed"+(s?": "+s:""))}var z=r=>r.startsWith("file://");function q(){var r=ma();D((r&3)==0),r==0&&(r+=4),ye[r>>2]=34821223,ye[r+4>>2]=2310721022,ye[0]=1668509029}function P(){if(!k){var r=ma();r==0&&(r+=4);var s=ye[r>>2],c=ye[r+4>>2];(s!=34821223||c!=2310721022)&&X(`Stack overflow! Stack cookie has been overwritten at ${ke(r)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${ke(c)} ${ke(s)}`),ye[0]!=1668509029&&X("Runtime error: The application has corrupted its heap memory area (address zero)!")}}class T extends Error{}class B extends T{}class Y extends T{constructor(s){super(s),this.excPtr=s;const c=Oc(s);this.name=c[0],this.message=c[1]}}(()=>{var r=new Int16Array(1),s=new Int8Array(r.buffer);if(r[0]=25459,s[0]!==115||s[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();function ee(r){Object.getOwnPropertyDescriptor(t,r)||Object.defineProperty(t,r,{configurable:!0,set(){X(`Attempt to set \`Module.${r}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function Z(r){return()=>D(!1,`call to '${r}' via reference taken before Wasm module initialization`)}function oe(r){Object.getOwnPropertyDescriptor(t,r)&&X(`\`Module.${r}\` was supplied but \`${r}\` not included in INCOMING_MODULE_JS_API`)}function ie(r){return r==="FS_createPath"||r==="FS_createDataFile"||r==="FS_createPreloadedFile"||r==="FS_unlink"||r==="addRunDependency"||r==="FS_createLazyFile"||r==="FS_createDevice"||r==="removeRunDependency"}function ve(r,s){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,r)&&Object.defineProperty(globalThis,r,{configurable:!0,get(){s()}})}function ne(r,s){ve(r,()=>{Oe(`\`${r}\` is not longer defined by emscripten. ${s}`)})}ne("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),ne("asm","Please use wasmExports instead");function me(r){ve(r,()=>{var s=`\`${r}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,c=r;c.startsWith("_")||(c="$"+r),s+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${c}')`,ie(r)&&(s+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Oe(s)}),be(r)}function be(r){Object.getOwnPropertyDescriptor(t,r)||Object.defineProperty(t,r,{configurable:!0,get(){var s=`'${r}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;ie(r)&&(s+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),X(s)}})}var Le,He,Qe,Je,nt,le,fe,ce,ye,Be,he,Ue,U,Ve=!1;function Ge(){var r=Qe.buffer;Je=new Int8Array(r),le=new Int16Array(r),nt=new Uint8Array(r),fe=new Uint16Array(r),ce=new Int32Array(r),ye=new Uint32Array(r),Be=new Float32Array(r),he=new Float64Array(r),Ue=new BigInt64Array(r),U=new BigUint64Array(r)}D(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support");function Ye(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)we(t.preRun.shift());ee("preRun"),$e(V)}function Ae(){D(!Ve),Ve=!0,P(),!t.noFSInit&&!S.initialized&&S.init(),Ti.__wasm_call_ctors(),S.ignorePermissions=!1}function it(){if(P(),t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)ot(t.postRun.shift());ee("postRun"),$e(Pe)}var Se=0,We=null,lt={},yt=null;function N(r){var s;Se++,(s=t.monitorRunDependencies)==null||s.call(t,Se),r?(D(!lt[r]),lt[r]=1,yt===null&&typeof setInterval<"u"&&(yt=setInterval(()=>{if(k){clearInterval(yt),yt=null;return}var c=!1;for(var l in lt)c||(c=!0,I("still waiting on run dependencies:")),I(`dependency: ${l}`);c&&I("(end of list)")},1e4))):I("warning: run dependency added without ID")}function b(r){var c;if(Se--,(c=t.monitorRunDependencies)==null||c.call(t,Se),r?(D(lt[r]),delete lt[r]):I("warning: run dependency removed without ID"),Se==0&&(yt!==null&&(clearInterval(yt),yt=null),We)){var s=We;We=null,s()}}function X(r){var c;(c=t.onAbort)==null||c.call(t,r),r="Aborted("+r+")",I(r),k=!0;var s=new WebAssembly.RuntimeError(r);throw He==null||He(s),s}function se(r,s){return(...c)=>{D(Ve,`native function \`${r}\` called before runtime initialization`);var l=Ti[r];return D(l,`exported native function \`${r}\` not found`),D(c.length<=s,`native function \`${r}\` called with ${c.length} args but expects ${s}`),l(...c)}}var pe;function ue(){return t.locateFile?x("mujoco.wasm"):new URL(""+new URL("mujoco-CGsuVDfV.wasm",import.meta.url).href,import.meta.url).href}function Ke(r){if(r==pe&&F)return new Uint8Array(F);if(A)return A(r);throw"both async and sync fetching of the wasm failed"}async function Re(r){if(!F)try{var s=await y(r);return new Uint8Array(s)}catch{}return Ke(r)}async function Xe(r,s){try{var c=await Re(r),l=await WebAssembly.instantiate(c,s);return l}catch(f){I(`failed to asynchronously prepare wasm: ${f}`),z(pe)&&I(`warning: Loading from a file URI (${pe}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),X(f)}}async function je(r,s,c){if(!r&&typeof WebAssembly.instantiateStreaming=="function"&&!z(s)&&!o)try{var l=fetch(s,{credentials:"same-origin"}),f=await WebAssembly.instantiateStreaming(l,c);return f}catch(g){I(`wasm streaming compile failed: ${g}`),I("falling back to ArrayBuffer instantiation")}return Xe(s,c)}function Te(){return{env:Yc,wasi_snapshot_preview1:Yc}}async function Ne(){function r(M,w){return Ti=M.exports,Qe=Ti.memory,D(Qe,"memory not found in wasm exports"),Ge(),ns=Ti.__indirect_function_table,D(ns,"table not found in wasm exports"),id(Ti),b("wasm-instantiate"),Ti}N("wasm-instantiate");var s=t;function c(M){return D(t===s,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),s=null,r(M.instance)}var l=Te();if(t.instantiateWasm)return new Promise((M,w)=>{try{t.instantiateWasm(l,(L,W)=>{M(r(L,W))})}catch(L){I(`Module.instantiateWasm callback failed with error: ${L}`),w(L)}});pe??(pe=ue());var f=await je(F,pe,l),g=c(f);return g}class rt{constructor(s){Tn(this,"name","ExitStatus");this.message=`Program terminated with exit(${s})`,this.status=s}}var $e=r=>{for(;r.length>0;)r.shift()(t)},Pe=[],ot=r=>Pe.push(r),V=[],we=r=>V.push(r),Ce=!0,ke=r=>(D(typeof r=="number"),r>>>=0,"0x"+r.toString(16).padStart(8,"0")),G=r=>Gc(r),H=()=>Xc(),Oe=r=>{Oe.shown||(Oe.shown={}),Oe.shown[r]||(Oe.shown[r]=1,o&&(r="warning: "+r),I(r))},st=typeof TextDecoder<"u"?new TextDecoder:void 0,Et=(r,s=0,c=NaN)=>{for(var l=s+c,f=s;r[f]&&!(f>=l);)++f;if(f-s>16&&r.buffer&&st)return st.decode(r.subarray(s,f));for(var g="";s<f;){var M=r[s++];if(!(M&128)){g+=String.fromCharCode(M);continue}var w=r[s++]&63;if((M&224)==192){g+=String.fromCharCode((M&31)<<6|w);continue}var L=r[s++]&63;if((M&240)==224?M=(M&15)<<12|w<<6|L:((M&248)!=240&&Oe("Invalid UTF-8 leading byte "+ke(M)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),M=(M&7)<<18|w<<12|L<<6|r[s++]&63),M<65536)g+=String.fromCharCode(M);else{var W=M-65536;g+=String.fromCharCode(55296|W>>10,56320|W&1023)}}return g},ut=(r,s)=>(D(typeof r=="number",`UTF8ToString expects a number (got ${typeof r})`),r?Et(nt,r,s):""),Sn=(r,s,c,l)=>X(`Assertion failed: ${ut(r)}, at: `+[s?ut(s):"unknown filename",c,l?ut(l):"unknown function"]),kt=[],_i=0,Wn=r=>{var s=new Xn(r);return s.get_caught()||(s.set_caught(!0),_i--),s.set_rethrown(!1),kt.push(s),cs(r),qc(r)},xr=()=>{if(!kt.length)return 0;var r=kt[kt.length-1];return cs(r.excPtr),r.excPtr},rn=0,Wr=()=>{_e(0,0),D(kt.length>0);var r=kt.pop();_a(r.excPtr),rn=0};class Xn{constructor(s){this.excPtr=s,this.ptr=s-24}set_type(s){ye[this.ptr+4>>2]=s}get_type(){return ye[this.ptr+4>>2]}set_destructor(s){ye[this.ptr+8>>2]=s}get_destructor(){return ye[this.ptr+8>>2]}set_caught(s){s=s?1:0,Je[this.ptr+12]=s}get_caught(){return Je[this.ptr+12]!=0}set_rethrown(s){s=s?1:0,Je[this.ptr+13]=s}get_rethrown(){return Je[this.ptr+13]!=0}init(s,c){this.set_adjusted_ptr(0),this.set_type(s),this.set_destructor(c)}set_adjusted_ptr(s){ye[this.ptr+16>>2]=s}get_adjusted_ptr(){return ye[this.ptr+16>>2]}}var gi=r=>Hc(r),vi=r=>{var s=rn==null?void 0:rn.excPtr;if(!s)return gi(0),0;var c=new Xn(s);c.set_adjusted_ptr(s);var l=c.get_type();if(!l)return gi(0),s;for(var f of r){if(f===0||f===l)break;var g=c.ptr+16;if(jc(f,l,g))return gi(f),s}return gi(l),s},Xr=()=>vi([]),$r=r=>vi([r]),jr=()=>{var r=kt.pop();r||X("no exception to throw");var s=r.excPtr;throw r.get_rethrown()||(kt.push(r),r.set_rethrown(!0),r.set_caught(!1),_i++),rn=new Y(s),rn},ea=r=>{if(r){var s=new Xn(r);kt.push(s),s.set_rethrown(!0),jr()}},ta=(r,s,c)=>{var l=new Xn(r);throw l.init(s,c),rn=new Y(r),_i++,rn},na=()=>_i,ia=r=>{throw rn||(rn=new Y(r)),rn},Tt={isAbs:r=>r.charAt(0)==="/",splitPath:r=>{var s=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return s.exec(r).slice(1)},normalizeArray:(r,s)=>{for(var c=0,l=r.length-1;l>=0;l--){var f=r[l];f==="."?r.splice(l,1):f===".."?(r.splice(l,1),c++):c&&(r.splice(l,1),c--)}if(s)for(;c;c--)r.unshift("..");return r},normalize:r=>{var s=Tt.isAbs(r),c=r.slice(-1)==="/";return r=Tt.normalizeArray(r.split("/").filter(l=>!!l),!s).join("/"),!r&&!s&&(r="."),r&&c&&(r+="/"),(s?"/":"")+r},dirname:r=>{var s=Tt.splitPath(r),c=s[0],l=s[1];return!c&&!l?".":(l&&(l=l.slice(0,-1)),c+l)},basename:r=>r&&r.match(/([^\/]+|\/)\/*$/)[1],join:(...r)=>Tt.normalize(r.join("/")),join2:(r,s)=>Tt.normalize(r+"/"+s)},C=()=>{if(o){var r=h("crypto");return s=>r.randomFillSync(s)}return s=>crypto.getRandomValues(s)},$=r=>{($=C())(r)},Q={resolve:(...r)=>{for(var s="",c=!1,l=r.length-1;l>=-1&&!c;l--){var f=l>=0?r[l]:S.cwd();if(typeof f!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!f)return"";s=f+"/"+s,c=Tt.isAbs(f)}return s=Tt.normalizeArray(s.split("/").filter(g=>!!g),!c).join("/"),(c?"/":"")+s||"."},relative:(r,s)=>{r=Q.resolve(r).slice(1),s=Q.resolve(s).slice(1);function c(W){for(var K=0;K<W.length&&W[K]==="";K++);for(var re=W.length-1;re>=0&&W[re]==="";re--);return K>re?[]:W.slice(K,re-K+1)}for(var l=c(r.split("/")),f=c(s.split("/")),g=Math.min(l.length,f.length),M=g,w=0;w<g;w++)if(l[w]!==f[w]){M=w;break}for(var L=[],w=M;w<l.length;w++)L.push("..");return L=L.concat(f.slice(M)),L.join("/")}},te=[],j=r=>{for(var s=0,c=0;c<r.length;++c){var l=r.charCodeAt(c);l<=127?s++:l<=2047?s+=2:l>=55296&&l<=57343?(s+=4,++c):s+=3}return s},Ee=(r,s,c,l)=>{if(D(typeof r=="string",`stringToUTF8Array expects a string (got ${typeof r})`),!(l>0))return 0;for(var f=c,g=c+l-1,M=0;M<r.length;++M){var w=r.codePointAt(M);if(w<=127){if(c>=g)break;s[c++]=w}else if(w<=2047){if(c+1>=g)break;s[c++]=192|w>>6,s[c++]=128|w&63}else if(w<=65535){if(c+2>=g)break;s[c++]=224|w>>12,s[c++]=128|w>>6&63,s[c++]=128|w&63}else{if(c+3>=g)break;w>1114111&&Oe("Invalid Unicode code point "+ke(w)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),s[c++]=240|w>>18,s[c++]=128|w>>12&63,s[c++]=128|w>>6&63,s[c++]=128|w&63,M++}}return s[c]=0,c-f},De=(r,s,c)=>{var l=j(r)+1,f=new Array(l),g=Ee(r,f,0,f.length);return f.length=g,f},ze=()=>{if(!te.length){var r=null;if(o){var s=256,c=Buffer.alloc(s),l=0,f=process.stdin.fd;try{l=_.readSync(f,c,0,s)}catch(g){if(g.toString().includes("EOF"))l=0;else throw g}l>0&&(r=c.slice(0,l).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(r=window.prompt("Input: "),r!==null&&(r+=`
`));if(!r)return null;te=De(r)}return te.shift()},Ie={ttys:[],init(){},shutdown(){},register(r,s){Ie.ttys[r]={input:[],output:[],ops:s},S.registerDevice(r,Ie.stream_ops)},stream_ops:{open(r){var s=Ie.ttys[r.node.rdev];if(!s)throw new S.ErrnoError(43);r.tty=s,r.seekable=!1},close(r){r.tty.ops.fsync(r.tty)},fsync(r){r.tty.ops.fsync(r.tty)},read(r,s,c,l,f){if(!r.tty||!r.tty.ops.get_char)throw new S.ErrnoError(60);for(var g=0,M=0;M<l;M++){var w;try{w=r.tty.ops.get_char(r.tty)}catch{throw new S.ErrnoError(29)}if(w===void 0&&g===0)throw new S.ErrnoError(6);if(w==null)break;g++,s[c+M]=w}return g&&(r.node.atime=Date.now()),g},write(r,s,c,l,f){if(!r.tty||!r.tty.ops.put_char)throw new S.ErrnoError(60);try{for(var g=0;g<l;g++)r.tty.ops.put_char(r.tty,s[c+g])}catch{throw new S.ErrnoError(29)}return l&&(r.node.mtime=r.node.ctime=Date.now()),g}},default_tty_ops:{get_char(r){return ze()},put_char(r,s){s===null||s===10?(O(Et(r.output)),r.output=[]):s!=0&&r.output.push(s)},fsync(r){var s;((s=r.output)==null?void 0:s.length)>0&&(O(Et(r.output)),r.output=[])},ioctl_tcgets(r){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(r,s,c){return 0},ioctl_tiocgwinsz(r){return[24,80]}},default_tty1_ops:{put_char(r,s){s===null||s===10?(I(Et(r.output)),r.output=[]):s!=0&&r.output.push(s)},fsync(r){var s;((s=r.output)==null?void 0:s.length)>0&&(I(Et(r.output)),r.output=[])}}},tt=r=>{X("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")},Me={ops_table:null,mount(r){return Me.createNode(null,"/",16895,0)},createNode(r,s,c,l){if(S.isBlkdev(c)||S.isFIFO(c))throw new S.ErrnoError(63);Me.ops_table||(Me.ops_table={dir:{node:{getattr:Me.node_ops.getattr,setattr:Me.node_ops.setattr,lookup:Me.node_ops.lookup,mknod:Me.node_ops.mknod,rename:Me.node_ops.rename,unlink:Me.node_ops.unlink,rmdir:Me.node_ops.rmdir,readdir:Me.node_ops.readdir,symlink:Me.node_ops.symlink},stream:{llseek:Me.stream_ops.llseek}},file:{node:{getattr:Me.node_ops.getattr,setattr:Me.node_ops.setattr},stream:{llseek:Me.stream_ops.llseek,read:Me.stream_ops.read,write:Me.stream_ops.write,mmap:Me.stream_ops.mmap,msync:Me.stream_ops.msync}},link:{node:{getattr:Me.node_ops.getattr,setattr:Me.node_ops.setattr,readlink:Me.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Me.node_ops.getattr,setattr:Me.node_ops.setattr},stream:S.chrdev_stream_ops}});var f=S.createNode(r,s,c,l);return S.isDir(f.mode)?(f.node_ops=Me.ops_table.dir.node,f.stream_ops=Me.ops_table.dir.stream,f.contents={}):S.isFile(f.mode)?(f.node_ops=Me.ops_table.file.node,f.stream_ops=Me.ops_table.file.stream,f.usedBytes=0,f.contents=null):S.isLink(f.mode)?(f.node_ops=Me.ops_table.link.node,f.stream_ops=Me.ops_table.link.stream):S.isChrdev(f.mode)&&(f.node_ops=Me.ops_table.chrdev.node,f.stream_ops=Me.ops_table.chrdev.stream),f.atime=f.mtime=f.ctime=Date.now(),r&&(r.contents[s]=f,r.atime=r.mtime=r.ctime=f.atime),f},getFileDataAsTypedArray(r){return r.contents?r.contents.subarray?r.contents.subarray(0,r.usedBytes):new Uint8Array(r.contents):new Uint8Array(0)},expandFileStorage(r,s){var c=r.contents?r.contents.length:0;if(!(c>=s)){var l=1024*1024;s=Math.max(s,c*(c<l?2:1.125)>>>0),c!=0&&(s=Math.max(s,256));var f=r.contents;r.contents=new Uint8Array(s),r.usedBytes>0&&r.contents.set(f.subarray(0,r.usedBytes),0)}},resizeFileStorage(r,s){if(r.usedBytes!=s)if(s==0)r.contents=null,r.usedBytes=0;else{var c=r.contents;r.contents=new Uint8Array(s),c&&r.contents.set(c.subarray(0,Math.min(s,r.usedBytes))),r.usedBytes=s}},node_ops:{getattr(r){var s={};return s.dev=S.isChrdev(r.mode)?r.id:1,s.ino=r.id,s.mode=r.mode,s.nlink=1,s.uid=0,s.gid=0,s.rdev=r.rdev,S.isDir(r.mode)?s.size=4096:S.isFile(r.mode)?s.size=r.usedBytes:S.isLink(r.mode)?s.size=r.link.length:s.size=0,s.atime=new Date(r.atime),s.mtime=new Date(r.mtime),s.ctime=new Date(r.ctime),s.blksize=4096,s.blocks=Math.ceil(s.size/s.blksize),s},setattr(r,s){for(const c of["mode","atime","mtime","ctime"])s[c]!=null&&(r[c]=s[c]);s.size!==void 0&&Me.resizeFileStorage(r,s.size)},lookup(r,s){throw new S.ErrnoError(44)},mknod(r,s,c,l){return Me.createNode(r,s,c,l)},rename(r,s,c){var l;try{l=S.lookupNode(s,c)}catch{}if(l){if(S.isDir(r.mode))for(var f in l.contents)throw new S.ErrnoError(55);S.hashRemoveNode(l)}delete r.parent.contents[r.name],s.contents[c]=r,r.name=c,s.ctime=s.mtime=r.parent.ctime=r.parent.mtime=Date.now()},unlink(r,s){delete r.contents[s],r.ctime=r.mtime=Date.now()},rmdir(r,s){var c=S.lookupNode(r,s);for(var l in c.contents)throw new S.ErrnoError(55);delete r.contents[s],r.ctime=r.mtime=Date.now()},readdir(r){return[".","..",...Object.keys(r.contents)]},symlink(r,s,c){var l=Me.createNode(r,s,41471,0);return l.link=c,l},readlink(r){if(!S.isLink(r.mode))throw new S.ErrnoError(28);return r.link}},stream_ops:{read(r,s,c,l,f){var g=r.node.contents;if(f>=r.node.usedBytes)return 0;var M=Math.min(r.node.usedBytes-f,l);if(D(M>=0),M>8&&g.subarray)s.set(g.subarray(f,f+M),c);else for(var w=0;w<M;w++)s[c+w]=g[f+w];return M},write(r,s,c,l,f,g){if(D(!(s instanceof ArrayBuffer)),s.buffer===Je.buffer&&(g=!1),!l)return 0;var M=r.node;if(M.mtime=M.ctime=Date.now(),s.subarray&&(!M.contents||M.contents.subarray)){if(g)return D(f===0,"canOwn must imply no weird position inside the file"),M.contents=s.subarray(c,c+l),M.usedBytes=l,l;if(M.usedBytes===0&&f===0)return M.contents=s.slice(c,c+l),M.usedBytes=l,l;if(f+l<=M.usedBytes)return M.contents.set(s.subarray(c,c+l),f),l}if(Me.expandFileStorage(M,f+l),M.contents.subarray&&s.subarray)M.contents.set(s.subarray(c,c+l),f);else for(var w=0;w<l;w++)M.contents[f+w]=s[c+w];return M.usedBytes=Math.max(M.usedBytes,f+l),l},llseek(r,s,c){var l=s;if(c===1?l+=r.position:c===2&&S.isFile(r.node.mode)&&(l+=r.node.usedBytes),l<0)throw new S.ErrnoError(28);return l},mmap(r,s,c,l,f){if(!S.isFile(r.node.mode))throw new S.ErrnoError(43);var g,M,w=r.node.contents;if(!(f&2)&&w&&w.buffer===Je.buffer)M=!1,g=w.byteOffset;else{if(M=!0,g=tt(),!g)throw new S.ErrnoError(48);w&&((c>0||c+s<w.length)&&(w.subarray?w=w.subarray(c,c+s):w=Array.prototype.slice.call(w,c,c+s)),Je.set(w,g))}return{ptr:g,allocated:M}},msync(r,s,c,l,f){return Me.stream_ops.write(r,s,0,l,c,!1),0}}},Ze=async r=>{var s=await y(r);return D(s,`Loading data file "${r}" failed (no arrayBuffer).`),new Uint8Array(s)},pt=(...r)=>S.createDataFile(...r),wt=r=>{for(var s=r;;){if(!lt[r])return r;r=s+Math.random()}},It=[],Pt=(r,s,c,l)=>{typeof Browser<"u"&&Browser.init();var f=!1;return It.forEach(g=>{f||g.canHandle(s)&&(g.handle(r,s,c,l),f=!0)}),f},bt=(r,s,c,l,f,g,M,w,L,W)=>{var K=s?Q.resolve(Tt.join2(r,s)):r,re=wt(`cp ${K}`);function de(ae){function ge(qe){W==null||W(),w||pt(r,s,qe,l,f,L),g==null||g(),b(re)}Pt(ae,K,ge,()=>{M==null||M(),b(re)})||ge(ae)}N(re),typeof c=="string"?Ze(c).then(de,M):de(c)},et=r=>{var s={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},c=s[r];if(typeof c>"u")throw new Error(`Unknown file open mode: ${r}`);return c},Dt=(r,s)=>{var c=0;return r&&(c|=365),s&&(c|=146),c},xt=r=>ut(zc(r)),Kt={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},S={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class extends Error{constructor(s){super(Ve?xt(s):"");Tn(this,"name","ErrnoError");this.errno=s;for(var c in Kt)if(Kt[c]===s){this.code=c;break}}},FSStream:class{constructor(){Tn(this,"shared",{})}get object(){return this.node}set object(r){this.node=r}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(r){this.shared.flags=r}get position(){return this.shared.position}set position(r){this.shared.position=r}},FSNode:class{constructor(r,s,c,l){Tn(this,"node_ops",{});Tn(this,"stream_ops",{});Tn(this,"readMode",365);Tn(this,"writeMode",146);Tn(this,"mounted",null);r||(r=this),this.parent=r,this.mount=r.mount,this.id=S.nextInode++,this.name=s,this.mode=c,this.rdev=l,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(r){r?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(r){r?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return S.isDir(this.mode)}get isDevice(){return S.isChrdev(this.mode)}},lookupPath(r,s={}){if(!r)throw new S.ErrnoError(44);s.follow_mount??(s.follow_mount=!0),Tt.isAbs(r)||(r=S.cwd()+"/"+r);e:for(var c=0;c<40;c++){for(var l=r.split("/").filter(W=>!!W),f=S.root,g="/",M=0;M<l.length;M++){var w=M===l.length-1;if(w&&s.parent)break;if(l[M]!=="."){if(l[M]===".."){if(g=Tt.dirname(g),S.isRoot(f)){r=g+"/"+l.slice(M+1).join("/");continue e}else f=f.parent;continue}g=Tt.join2(g,l[M]);try{f=S.lookupNode(f,l[M])}catch(W){if((W==null?void 0:W.errno)===44&&w&&s.noent_okay)return{path:g};throw W}if(S.isMountpoint(f)&&(!w||s.follow_mount)&&(f=f.mounted.root),S.isLink(f.mode)&&(!w||s.follow)){if(!f.node_ops.readlink)throw new S.ErrnoError(52);var L=f.node_ops.readlink(f);Tt.isAbs(L)||(L=Tt.dirname(g)+"/"+L),r=L+"/"+l.slice(M+1).join("/");continue e}}}return{path:g,node:f}}throw new S.ErrnoError(32)},getPath(r){for(var s;;){if(S.isRoot(r)){var c=r.mount.mountpoint;return s?c[c.length-1]!=="/"?`${c}/${s}`:c+s:c}s=s?`${r.name}/${s}`:r.name,r=r.parent}},hashName(r,s){for(var c=0,l=0;l<s.length;l++)c=(c<<5)-c+s.charCodeAt(l)|0;return(r+c>>>0)%S.nameTable.length},hashAddNode(r){var s=S.hashName(r.parent.id,r.name);r.name_next=S.nameTable[s],S.nameTable[s]=r},hashRemoveNode(r){var s=S.hashName(r.parent.id,r.name);if(S.nameTable[s]===r)S.nameTable[s]=r.name_next;else for(var c=S.nameTable[s];c;){if(c.name_next===r){c.name_next=r.name_next;break}c=c.name_next}},lookupNode(r,s){var c=S.mayLookup(r);if(c)throw new S.ErrnoError(c);for(var l=S.hashName(r.id,s),f=S.nameTable[l];f;f=f.name_next){var g=f.name;if(f.parent.id===r.id&&g===s)return f}return S.lookup(r,s)},createNode(r,s,c,l){D(typeof r=="object");var f=new S.FSNode(r,s,c,l);return S.hashAddNode(f),f},destroyNode(r){S.hashRemoveNode(r)},isRoot(r){return r===r.parent},isMountpoint(r){return!!r.mounted},isFile(r){return(r&61440)===32768},isDir(r){return(r&61440)===16384},isLink(r){return(r&61440)===40960},isChrdev(r){return(r&61440)===8192},isBlkdev(r){return(r&61440)===24576},isFIFO(r){return(r&61440)===4096},isSocket(r){return(r&49152)===49152},flagsToPermissionString(r){var s=["r","w","rw"][r&3];return r&512&&(s+="w"),s},nodePermissions(r,s){return S.ignorePermissions?0:s.includes("r")&&!(r.mode&292)||s.includes("w")&&!(r.mode&146)||s.includes("x")&&!(r.mode&73)?2:0},mayLookup(r){if(!S.isDir(r.mode))return 54;var s=S.nodePermissions(r,"x");return s||(r.node_ops.lookup?0:2)},mayCreate(r,s){if(!S.isDir(r.mode))return 54;try{var c=S.lookupNode(r,s);return 20}catch{}return S.nodePermissions(r,"wx")},mayDelete(r,s,c){var l;try{l=S.lookupNode(r,s)}catch(g){return g.errno}var f=S.nodePermissions(r,"wx");if(f)return f;if(c){if(!S.isDir(l.mode))return 54;if(S.isRoot(l)||S.getPath(l)===S.cwd())return 10}else if(S.isDir(l.mode))return 31;return 0},mayOpen(r,s){return r?S.isLink(r.mode)?32:S.isDir(r.mode)&&(S.flagsToPermissionString(s)!=="r"||s&576)?31:S.nodePermissions(r,S.flagsToPermissionString(s)):44},checkOpExists(r,s){if(!r)throw new S.ErrnoError(s);return r},MAX_OPEN_FDS:4096,nextfd(){for(var r=0;r<=S.MAX_OPEN_FDS;r++)if(!S.streams[r])return r;throw new S.ErrnoError(33)},getStreamChecked(r){var s=S.getStream(r);if(!s)throw new S.ErrnoError(8);return s},getStream:r=>S.streams[r],createStream(r,s=-1){return D(s>=-1),r=Object.assign(new S.FSStream,r),s==-1&&(s=S.nextfd()),r.fd=s,S.streams[s]=r,r},closeStream(r){S.streams[r]=null},dupStream(r,s=-1){var l,f;var c=S.createStream(r,s);return(f=(l=c.stream_ops)==null?void 0:l.dup)==null||f.call(l,c),c},doSetAttr(r,s,c){var l=r==null?void 0:r.stream_ops.setattr,f=l?r:s;l??(l=s.node_ops.setattr),S.checkOpExists(l,63),l(f,c)},chrdev_stream_ops:{open(r){var c,l;var s=S.getDevice(r.node.rdev);r.stream_ops=s.stream_ops,(l=(c=r.stream_ops).open)==null||l.call(c,r)},llseek(){throw new S.ErrnoError(70)}},major:r=>r>>8,minor:r=>r&255,makedev:(r,s)=>r<<8|s,registerDevice(r,s){S.devices[r]={stream_ops:s}},getDevice:r=>S.devices[r],getMounts(r){for(var s=[],c=[r];c.length;){var l=c.pop();s.push(l),c.push(...l.mounts)}return s},syncfs(r,s){typeof r=="function"&&(s=r,r=!1),S.syncFSRequests++,S.syncFSRequests>1&&I(`warning: ${S.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var c=S.getMounts(S.root.mount),l=0;function f(M){return D(S.syncFSRequests>0),S.syncFSRequests--,s(M)}function g(M){if(M)return g.errored?void 0:(g.errored=!0,f(M));++l>=c.length&&f(null)}c.forEach(M=>{if(!M.type.syncfs)return g(null);M.type.syncfs(M,r,g)})},mount(r,s,c){if(typeof r=="string")throw r;var l=c==="/",f=!c,g;if(l&&S.root)throw new S.ErrnoError(10);if(!l&&!f){var M=S.lookupPath(c,{follow_mount:!1});if(c=M.path,g=M.node,S.isMountpoint(g))throw new S.ErrnoError(10);if(!S.isDir(g.mode))throw new S.ErrnoError(54)}var w={type:r,opts:s,mountpoint:c,mounts:[]},L=r.mount(w);return L.mount=w,w.root=L,l?S.root=L:g&&(g.mounted=w,g.mount&&g.mount.mounts.push(w)),L},unmount(r){var s=S.lookupPath(r,{follow_mount:!1});if(!S.isMountpoint(s.node))throw new S.ErrnoError(28);var c=s.node,l=c.mounted,f=S.getMounts(l);Object.keys(S.nameTable).forEach(M=>{for(var w=S.nameTable[M];w;){var L=w.name_next;f.includes(w.mount)&&S.destroyNode(w),w=L}}),c.mounted=null;var g=c.mount.mounts.indexOf(l);D(g!==-1),c.mount.mounts.splice(g,1)},lookup(r,s){return r.node_ops.lookup(r,s)},mknod(r,s,c){var l=S.lookupPath(r,{parent:!0}),f=l.node,g=Tt.basename(r);if(!g)throw new S.ErrnoError(28);if(g==="."||g==="..")throw new S.ErrnoError(20);var M=S.mayCreate(f,g);if(M)throw new S.ErrnoError(M);if(!f.node_ops.mknod)throw new S.ErrnoError(63);return f.node_ops.mknod(f,g,s,c)},statfs(r){return S.statfsNode(S.lookupPath(r,{follow:!0}).node)},statfsStream(r){return S.statfsNode(r.node)},statfsNode(r){var s={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:S.nextInode,ffree:S.nextInode-1,fsid:42,flags:2,namelen:255};return r.node_ops.statfs&&Object.assign(s,r.node_ops.statfs(r.mount.opts.root)),s},create(r,s=438){return s&=4095,s|=32768,S.mknod(r,s,0)},mkdir(r,s=511){return s&=1023,s|=16384,S.mknod(r,s,0)},mkdirTree(r,s){var c=r.split("/"),l="";for(var f of c)if(f){(l||Tt.isAbs(r))&&(l+="/"),l+=f;try{S.mkdir(l,s)}catch(g){if(g.errno!=20)throw g}}},mkdev(r,s,c){return typeof c>"u"&&(c=s,s=438),s|=8192,S.mknod(r,s,c)},symlink(r,s){if(!Q.resolve(r))throw new S.ErrnoError(44);var c=S.lookupPath(s,{parent:!0}),l=c.node;if(!l)throw new S.ErrnoError(44);var f=Tt.basename(s),g=S.mayCreate(l,f);if(g)throw new S.ErrnoError(g);if(!l.node_ops.symlink)throw new S.ErrnoError(63);return l.node_ops.symlink(l,f,r)},rename(r,s){var c=Tt.dirname(r),l=Tt.dirname(s),f=Tt.basename(r),g=Tt.basename(s),M,w,L;if(M=S.lookupPath(r,{parent:!0}),w=M.node,M=S.lookupPath(s,{parent:!0}),L=M.node,!w||!L)throw new S.ErrnoError(44);if(w.mount!==L.mount)throw new S.ErrnoError(75);var W=S.lookupNode(w,f),K=Q.relative(r,l);if(K.charAt(0)!==".")throw new S.ErrnoError(28);if(K=Q.relative(s,c),K.charAt(0)!==".")throw new S.ErrnoError(55);var re;try{re=S.lookupNode(L,g)}catch{}if(W!==re){var de=S.isDir(W.mode),ae=S.mayDelete(w,f,de);if(ae)throw new S.ErrnoError(ae);if(ae=re?S.mayDelete(L,g,de):S.mayCreate(L,g),ae)throw new S.ErrnoError(ae);if(!w.node_ops.rename)throw new S.ErrnoError(63);if(S.isMountpoint(W)||re&&S.isMountpoint(re))throw new S.ErrnoError(10);if(L!==w&&(ae=S.nodePermissions(w,"w"),ae))throw new S.ErrnoError(ae);S.hashRemoveNode(W);try{w.node_ops.rename(W,L,g),W.parent=L}catch(ge){throw ge}finally{S.hashAddNode(W)}}},rmdir(r){var s=S.lookupPath(r,{parent:!0}),c=s.node,l=Tt.basename(r),f=S.lookupNode(c,l),g=S.mayDelete(c,l,!0);if(g)throw new S.ErrnoError(g);if(!c.node_ops.rmdir)throw new S.ErrnoError(63);if(S.isMountpoint(f))throw new S.ErrnoError(10);c.node_ops.rmdir(c,l),S.destroyNode(f)},readdir(r){var s=S.lookupPath(r,{follow:!0}),c=s.node,l=S.checkOpExists(c.node_ops.readdir,54);return l(c)},unlink(r){var s=S.lookupPath(r,{parent:!0}),c=s.node;if(!c)throw new S.ErrnoError(44);var l=Tt.basename(r),f=S.lookupNode(c,l),g=S.mayDelete(c,l,!1);if(g)throw new S.ErrnoError(g);if(!c.node_ops.unlink)throw new S.ErrnoError(63);if(S.isMountpoint(f))throw new S.ErrnoError(10);c.node_ops.unlink(c,l),S.destroyNode(f)},readlink(r){var s=S.lookupPath(r),c=s.node;if(!c)throw new S.ErrnoError(44);if(!c.node_ops.readlink)throw new S.ErrnoError(28);return c.node_ops.readlink(c)},stat(r,s){var c=S.lookupPath(r,{follow:!s}),l=c.node,f=S.checkOpExists(l.node_ops.getattr,63);return f(l)},fstat(r){var s=S.getStreamChecked(r),c=s.node,l=s.stream_ops.getattr,f=l?s:c;return l??(l=c.node_ops.getattr),S.checkOpExists(l,63),l(f)},lstat(r){return S.stat(r,!0)},doChmod(r,s,c,l){S.doSetAttr(r,s,{mode:c&4095|s.mode&-4096,ctime:Date.now(),dontFollow:l})},chmod(r,s,c){var l;if(typeof r=="string"){var f=S.lookupPath(r,{follow:!c});l=f.node}else l=r;S.doChmod(null,l,s,c)},lchmod(r,s){S.chmod(r,s,!0)},fchmod(r,s){var c=S.getStreamChecked(r);S.doChmod(c,c.node,s,!1)},doChown(r,s,c){S.doSetAttr(r,s,{timestamp:Date.now(),dontFollow:c})},chown(r,s,c,l){var f;if(typeof r=="string"){var g=S.lookupPath(r,{follow:!l});f=g.node}else f=r;S.doChown(null,f,l)},lchown(r,s,c){S.chown(r,s,c,!0)},fchown(r,s,c){var l=S.getStreamChecked(r);S.doChown(l,l.node,!1)},doTruncate(r,s,c){if(S.isDir(s.mode))throw new S.ErrnoError(31);if(!S.isFile(s.mode))throw new S.ErrnoError(28);var l=S.nodePermissions(s,"w");if(l)throw new S.ErrnoError(l);S.doSetAttr(r,s,{size:c,timestamp:Date.now()})},truncate(r,s){if(s<0)throw new S.ErrnoError(28);var c;if(typeof r=="string"){var l=S.lookupPath(r,{follow:!0});c=l.node}else c=r;S.doTruncate(null,c,s)},ftruncate(r,s){var c=S.getStreamChecked(r);if(s<0||!(c.flags&2097155))throw new S.ErrnoError(28);S.doTruncate(c,c.node,s)},utime(r,s,c){var l=S.lookupPath(r,{follow:!0}),f=l.node,g=S.checkOpExists(f.node_ops.setattr,63);g(f,{atime:s,mtime:c})},open(r,s,c=438){if(r==="")throw new S.ErrnoError(44);s=typeof s=="string"?et(s):s,s&64?c=c&4095|32768:c=0;var l,f;if(typeof r=="object")l=r;else{f=r.endsWith("/");var g=S.lookupPath(r,{follow:!(s&131072),noent_okay:!0});l=g.node,r=g.path}var M=!1;if(s&64)if(l){if(s&128)throw new S.ErrnoError(20)}else{if(f)throw new S.ErrnoError(31);l=S.mknod(r,c|511,0),M=!0}if(!l)throw new S.ErrnoError(44);if(S.isChrdev(l.mode)&&(s&=-513),s&65536&&!S.isDir(l.mode))throw new S.ErrnoError(54);if(!M){var w=S.mayOpen(l,s);if(w)throw new S.ErrnoError(w)}s&512&&!M&&S.truncate(l,0),s&=-131713;var L=S.createStream({node:l,path:S.getPath(l),flags:s,seekable:!0,position:0,stream_ops:l.stream_ops,ungotten:[],error:!1});return L.stream_ops.open&&L.stream_ops.open(L),M&&S.chmod(l,c&511),t.logReadFiles&&!(s&1)&&(r in S.readFiles||(S.readFiles[r]=1)),L},close(r){if(S.isClosed(r))throw new S.ErrnoError(8);r.getdents&&(r.getdents=null);try{r.stream_ops.close&&r.stream_ops.close(r)}catch(s){throw s}finally{S.closeStream(r.fd)}r.fd=null},isClosed(r){return r.fd===null},llseek(r,s,c){if(S.isClosed(r))throw new S.ErrnoError(8);if(!r.seekable||!r.stream_ops.llseek)throw new S.ErrnoError(70);if(c!=0&&c!=1&&c!=2)throw new S.ErrnoError(28);return r.position=r.stream_ops.llseek(r,s,c),r.ungotten=[],r.position},read(r,s,c,l,f){if(D(c>=0),l<0||f<0)throw new S.ErrnoError(28);if(S.isClosed(r))throw new S.ErrnoError(8);if((r.flags&2097155)===1)throw new S.ErrnoError(8);if(S.isDir(r.node.mode))throw new S.ErrnoError(31);if(!r.stream_ops.read)throw new S.ErrnoError(28);var g=typeof f<"u";if(!g)f=r.position;else if(!r.seekable)throw new S.ErrnoError(70);var M=r.stream_ops.read(r,s,c,l,f);return g||(r.position+=M),M},write(r,s,c,l,f,g){if(D(c>=0),l<0||f<0)throw new S.ErrnoError(28);if(S.isClosed(r))throw new S.ErrnoError(8);if(!(r.flags&2097155))throw new S.ErrnoError(8);if(S.isDir(r.node.mode))throw new S.ErrnoError(31);if(!r.stream_ops.write)throw new S.ErrnoError(28);r.seekable&&r.flags&1024&&S.llseek(r,0,2);var M=typeof f<"u";if(!M)f=r.position;else if(!r.seekable)throw new S.ErrnoError(70);var w=r.stream_ops.write(r,s,c,l,f,g);return M||(r.position+=w),w},mmap(r,s,c,l,f){if(l&2&&!(f&2)&&(r.flags&2097155)!==2)throw new S.ErrnoError(2);if((r.flags&2097155)===1)throw new S.ErrnoError(2);if(!r.stream_ops.mmap)throw new S.ErrnoError(43);if(!s)throw new S.ErrnoError(28);return r.stream_ops.mmap(r,s,c,l,f)},msync(r,s,c,l,f){return D(c>=0),r.stream_ops.msync?r.stream_ops.msync(r,s,c,l,f):0},ioctl(r,s,c){if(!r.stream_ops.ioctl)throw new S.ErrnoError(59);return r.stream_ops.ioctl(r,s,c)},readFile(r,s={}){if(s.flags=s.flags||0,s.encoding=s.encoding||"binary",s.encoding!=="utf8"&&s.encoding!=="binary")throw new Error(`Invalid encoding type "${s.encoding}"`);var c=S.open(r,s.flags),l=S.stat(r),f=l.size,g=new Uint8Array(f);return S.read(c,g,0,f,0),s.encoding==="utf8"&&(g=Et(g)),S.close(c),g},writeFile(r,s,c={}){c.flags=c.flags||577;var l=S.open(r,c.flags,c.mode);if(typeof s=="string"&&(s=new Uint8Array(De(s))),ArrayBuffer.isView(s))S.write(l,s,0,s.byteLength,void 0,c.canOwn);else throw new Error("Unsupported data type");S.close(l)},cwd:()=>S.currentPath,chdir(r){var s=S.lookupPath(r,{follow:!0});if(s.node===null)throw new S.ErrnoError(44);if(!S.isDir(s.node.mode))throw new S.ErrnoError(54);var c=S.nodePermissions(s.node,"x");if(c)throw new S.ErrnoError(c);S.currentPath=s.path},createDefaultDirectories(){S.mkdir("/tmp"),S.mkdir("/home"),S.mkdir("/home/web_user")},createDefaultDevices(){S.mkdir("/dev"),S.registerDevice(S.makedev(1,3),{read:()=>0,write:(l,f,g,M,w)=>M,llseek:()=>0}),S.mkdev("/dev/null",S.makedev(1,3)),Ie.register(S.makedev(5,0),Ie.default_tty_ops),Ie.register(S.makedev(6,0),Ie.default_tty1_ops),S.mkdev("/dev/tty",S.makedev(5,0)),S.mkdev("/dev/tty1",S.makedev(6,0));var r=new Uint8Array(1024),s=0,c=()=>(s===0&&($(r),s=r.byteLength),r[--s]);S.createDevice("/dev","random",c),S.createDevice("/dev","urandom",c),S.mkdir("/dev/shm"),S.mkdir("/dev/shm/tmp")},createSpecialDirectories(){S.mkdir("/proc");var r=S.mkdir("/proc/self");S.mkdir("/proc/self/fd"),S.mount({mount(){var s=S.createNode(r,"fd",16895,73);return s.stream_ops={llseek:Me.stream_ops.llseek},s.node_ops={lookup(c,l){var f=+l,g=S.getStreamChecked(f),M={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>g.path},id:f+1};return M.parent=M,M},readdir(){return Array.from(S.streams.entries()).filter(([c,l])=>l).map(([c,l])=>c.toString())}},s}},{},"/proc/self/fd")},createStandardStreams(r,s,c){r?S.createDevice("/dev","stdin",r):S.symlink("/dev/tty","/dev/stdin"),s?S.createDevice("/dev","stdout",null,s):S.symlink("/dev/tty","/dev/stdout"),c?S.createDevice("/dev","stderr",null,c):S.symlink("/dev/tty1","/dev/stderr");var l=S.open("/dev/stdin",0),f=S.open("/dev/stdout",1),g=S.open("/dev/stderr",1);D(l.fd===0,`invalid handle for stdin (${l.fd})`),D(f.fd===1,`invalid handle for stdout (${f.fd})`),D(g.fd===2,`invalid handle for stderr (${g.fd})`)},staticInit(){S.nameTable=new Array(4096),S.mount(Me,{},"/"),S.createDefaultDirectories(),S.createDefaultDevices(),S.createSpecialDirectories(),S.filesystems={MEMFS:Me}},init(r,s,c){D(!S.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),S.initialized=!0,r??(r=t.stdin),s??(s=t.stdout),c??(c=t.stderr),S.createStandardStreams(r,s,c)},quit(){S.initialized=!1,pa(0);for(var r of S.streams)r&&S.close(r)},findObject(r,s){var c=S.analyzePath(r,s);return c.exists?c.object:null},analyzePath(r,s){try{var c=S.lookupPath(r,{follow:!s});r=c.path}catch{}var l={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var c=S.lookupPath(r,{parent:!0});l.parentExists=!0,l.parentPath=c.path,l.parentObject=c.node,l.name=Tt.basename(r),c=S.lookupPath(r,{follow:!s}),l.exists=!0,l.path=c.path,l.object=c.node,l.name=c.node.name,l.isRoot=c.path==="/"}catch(f){l.error=f.errno}return l},createPath(r,s,c,l){r=typeof r=="string"?r:S.getPath(r);for(var f=s.split("/").reverse();f.length;){var g=f.pop();if(g){var M=Tt.join2(r,g);try{S.mkdir(M)}catch(w){if(w.errno!=20)throw w}r=M}}return M},createFile(r,s,c,l,f){var g=Tt.join2(typeof r=="string"?r:S.getPath(r),s),M=Dt(l,f);return S.create(g,M)},createDataFile(r,s,c,l,f,g){var M=s;r&&(r=typeof r=="string"?r:S.getPath(r),M=s?Tt.join2(r,s):r);var w=Dt(l,f),L=S.create(M,w);if(c){if(typeof c=="string"){for(var W=new Array(c.length),K=0,re=c.length;K<re;++K)W[K]=c.charCodeAt(K);c=W}S.chmod(L,w|146);var de=S.open(L,577);S.write(de,c,0,c.length,0,g),S.close(de),S.chmod(L,w)}},createDevice(r,s,c,l){var w;var f=Tt.join2(typeof r=="string"?r:S.getPath(r),s),g=Dt(!!c,!!l);(w=S.createDevice).major??(w.major=64);var M=S.makedev(S.createDevice.major++,0);return S.registerDevice(M,{open(L){L.seekable=!1},close(L){var W;(W=l==null?void 0:l.buffer)!=null&&W.length&&l(10)},read(L,W,K,re,de){for(var ae=0,ge=0;ge<re;ge++){var qe;try{qe=c()}catch{throw new S.ErrnoError(29)}if(qe===void 0&&ae===0)throw new S.ErrnoError(6);if(qe==null)break;ae++,W[K+ge]=qe}return ae&&(L.node.atime=Date.now()),ae},write(L,W,K,re,de){for(var ae=0;ae<re;ae++)try{l(W[K+ae])}catch{throw new S.ErrnoError(29)}return re&&(L.node.mtime=L.node.ctime=Date.now()),ae}}),S.mkdev(f,g,M)},forceLoadFile(r){if(r.isDevice||r.isFolder||r.link||r.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{r.contents=A(r.url),r.usedBytes=r.contents.length}catch{throw new S.ErrnoError(29)}},createLazyFile(r,s,c,l,f){class g{constructor(){Tn(this,"lengthKnown",!1);Tn(this,"chunks",[])}get(ae){if(!(ae>this.length-1||ae<0)){var ge=ae%this.chunkSize,qe=ae/this.chunkSize|0;return this.getter(qe)[ge]}}setDataGetter(ae){this.getter=ae}cacheLength(){var ae=new XMLHttpRequest;if(ae.open("HEAD",c,!1),ae.send(null),!(ae.status>=200&&ae.status<300||ae.status===304))throw new Error("Couldn't load "+c+". Status: "+ae.status);var ge=Number(ae.getResponseHeader("Content-length")),qe,ht=(qe=ae.getResponseHeader("Accept-Ranges"))&&qe==="bytes",ft=(qe=ae.getResponseHeader("Content-Encoding"))&&qe==="gzip",Ft=1024*1024;ht||(Ft=ge);var St=(Gt,tn)=>{if(Gt>tn)throw new Error("invalid range ("+Gt+", "+tn+") or no bytes requested!");if(tn>ge-1)throw new Error("only "+ge+" bytes available! programmer error!");var Lt=new XMLHttpRequest;if(Lt.open("GET",c,!1),ge!==Ft&&Lt.setRequestHeader("Range","bytes="+Gt+"-"+tn),Lt.responseType="arraybuffer",Lt.overrideMimeType&&Lt.overrideMimeType("text/plain; charset=x-user-defined"),Lt.send(null),!(Lt.status>=200&&Lt.status<300||Lt.status===304))throw new Error("Couldn't load "+c+". Status: "+Lt.status);return Lt.response!==void 0?new Uint8Array(Lt.response||[]):De(Lt.responseText||"")},Jt=this;Jt.setDataGetter(Gt=>{var tn=Gt*Ft,Lt=(Gt+1)*Ft-1;if(Lt=Math.min(Lt,ge-1),typeof Jt.chunks[Gt]>"u"&&(Jt.chunks[Gt]=St(tn,Lt)),typeof Jt.chunks[Gt]>"u")throw new Error("doXHR failed!");return Jt.chunks[Gt]}),(ft||!ge)&&(Ft=ge=1,ge=this.getter(0).length,Ft=ge,O("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=ge,this._chunkSize=Ft,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!a)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var M=new g,w={isDevice:!1,contents:M}}else var w={isDevice:!1,url:c};var L=S.createFile(r,s,w,l,f);w.contents?L.contents=w.contents:w.url&&(L.contents=null,L.url=w.url),Object.defineProperties(L,{usedBytes:{get:function(){return this.contents.length}}});var W={},K=Object.keys(L.stream_ops);K.forEach(de=>{var ae=L.stream_ops[de];W[de]=(...ge)=>(S.forceLoadFile(L),ae(...ge))});function re(de,ae,ge,qe,ht){var ft=de.node.contents;if(ht>=ft.length)return 0;var Ft=Math.min(ft.length-ht,qe);if(D(Ft>=0),ft.slice)for(var St=0;St<Ft;St++)ae[ge+St]=ft[ht+St];else for(var St=0;St<Ft;St++)ae[ge+St]=ft.get(ht+St);return Ft}return W.read=(de,ae,ge,qe,ht)=>(S.forceLoadFile(L),re(de,ae,ge,qe,ht)),W.mmap=(de,ae,ge,qe,ht)=>{S.forceLoadFile(L);var ft=tt();if(!ft)throw new S.ErrnoError(48);return re(de,Je,ft,ae,ge),{ptr:ft,allocated:!0}},L.stream_ops=W,L},absolutePath(){X("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder(){X("FS.createFolder has been removed; use FS.mkdir instead")},createLink(){X("FS.createLink has been removed; use FS.symlink instead")},joinPath(){X("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc(){X("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath(){X("FS.standardizePath has been removed; use PATH.normalize instead")}},mt={DEFAULT_POLLMASK:5,calculateAt(r,s,c){if(Tt.isAbs(s))return s;var l;if(r===-100)l=S.cwd();else{var f=mt.getStreamFromFD(r);l=f.path}if(s.length==0){if(!c)throw new S.ErrnoError(44);return l}return l+"/"+s},writeStat(r,s){ce[r>>2]=s.dev,ce[r+4>>2]=s.mode,ye[r+8>>2]=s.nlink,ce[r+12>>2]=s.uid,ce[r+16>>2]=s.gid,ce[r+20>>2]=s.rdev,Ue[r+24>>3]=BigInt(s.size),ce[r+32>>2]=4096,ce[r+36>>2]=s.blocks;var c=s.atime.getTime(),l=s.mtime.getTime(),f=s.ctime.getTime();return Ue[r+40>>3]=BigInt(Math.floor(c/1e3)),ye[r+48>>2]=c%1e3*1e3*1e3,Ue[r+56>>3]=BigInt(Math.floor(l/1e3)),ye[r+64>>2]=l%1e3*1e3*1e3,Ue[r+72>>3]=BigInt(Math.floor(f/1e3)),ye[r+80>>2]=f%1e3*1e3*1e3,Ue[r+88>>3]=BigInt(s.ino),0},writeStatFs(r,s){ce[r+4>>2]=s.bsize,ce[r+40>>2]=s.bsize,ce[r+8>>2]=s.blocks,ce[r+12>>2]=s.bfree,ce[r+16>>2]=s.bavail,ce[r+20>>2]=s.files,ce[r+24>>2]=s.ffree,ce[r+28>>2]=s.fsid,ce[r+44>>2]=s.flags,ce[r+36>>2]=s.namelen},doMsync(r,s,c,l,f){if(!S.isFile(s.node.mode))throw new S.ErrnoError(43);if(l&2)return 0;var g=nt.slice(r,r+c);S.msync(s,g,f,c,l)},getStreamFromFD(r){var s=S.getStreamChecked(r);return s},varargs:void 0,getStr(r){var s=ut(r);return s}};function xi(r,s,c){try{var l=mt.getStreamFromFD(r);if(D(!c),l.fd===s)return-28;if(s<0||s>=S.MAX_OPEN_FDS)return-8;var f=S.getStream(s);return f&&S.close(f),S.dupStream(l,s).fd}catch(g){if(typeof S>"u"||g.name!=="ErrnoError")throw g;return-g.errno}}var At=()=>{D(mt.varargs!=null);var r=ce[+mt.varargs>>2];return mt.varargs+=4,r},Ht=At;function sn(r,s,c){mt.varargs=c;try{var l=mt.getStreamFromFD(r);switch(s){case 0:{var f=At();if(f<0)return-28;for(;S.streams[f];)f++;var g;return g=S.dupStream(l,f),g.fd}case 1:case 2:return 0;case 3:return l.flags;case 4:{var f=At();return l.flags|=f,0}case 12:{var f=Ht(),M=0;return le[f+M>>1]=2,0}case 13:case 14:return 0}return-28}catch(w){if(typeof S>"u"||w.name!=="ErrnoError")throw w;return-w.errno}}function Yt(r,s){try{return mt.writeStat(s,S.fstat(r))}catch(c){if(typeof S>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}function Zt(r,s,c){mt.varargs=c;try{var l=mt.getStreamFromFD(r);switch(s){case 21509:return l.tty?0:-59;case 21505:{if(!l.tty)return-59;if(l.tty.ops.ioctl_tcgets){var f=l.tty.ops.ioctl_tcgets(l),g=Ht();ce[g>>2]=f.c_iflag||0,ce[g+4>>2]=f.c_oflag||0,ce[g+8>>2]=f.c_cflag||0,ce[g+12>>2]=f.c_lflag||0;for(var M=0;M<32;M++)Je[g+M+17]=f.c_cc[M]||0;return 0}return 0}case 21510:case 21511:case 21512:return l.tty?0:-59;case 21506:case 21507:case 21508:{if(!l.tty)return-59;if(l.tty.ops.ioctl_tcsets){for(var g=Ht(),w=ce[g>>2],L=ce[g+4>>2],W=ce[g+8>>2],K=ce[g+12>>2],re=[],M=0;M<32;M++)re.push(Je[g+M+17]);return l.tty.ops.ioctl_tcsets(l.tty,s,{c_iflag:w,c_oflag:L,c_cflag:W,c_lflag:K,c_cc:re})}return 0}case 21519:{if(!l.tty)return-59;var g=Ht();return ce[g>>2]=0,0}case 21520:return l.tty?-28:-59;case 21531:{var g=Ht();return S.ioctl(l,s,g)}case 21523:{if(!l.tty)return-59;if(l.tty.ops.ioctl_tiocgwinsz){var de=l.tty.ops.ioctl_tiocgwinsz(l.tty),g=Ht();le[g>>1]=de[0],le[g+2>>1]=de[1]}return 0}case 21524:return l.tty?0:-59;case 21515:return l.tty?0:-59;default:return-28}}catch(ae){if(typeof S>"u"||ae.name!=="ErrnoError")throw ae;return-ae.errno}}function yr(r,s){try{return r=mt.getStr(r),mt.writeStat(s,S.lstat(r))}catch(c){if(typeof S>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}function $n(r,s,c,l){try{s=mt.getStr(s);var f=l&256,g=l&4096;return l=l&-6401,D(!l,`unknown flags in __syscall_newfstatat: ${l}`),s=mt.calculateAt(r,s,g),mt.writeStat(c,f?S.lstat(s):S.stat(s))}catch(M){if(typeof S>"u"||M.name!=="ErrnoError")throw M;return-M.errno}}function Ku(r,s,c,l){mt.varargs=l;try{s=mt.getStr(s),s=mt.calculateAt(r,s);var f=l?At():0;return S.open(s,c,f).fd}catch(g){if(typeof S>"u"||g.name!=="ErrnoError")throw g;return-g.errno}}function Zu(r,s){try{return r=mt.getStr(r),mt.writeStat(s,S.stat(r))}catch(c){if(typeof S>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}var Ju=()=>X("native code called abort()"),Vt=r=>{for(var s="";;){var c=nt[r++];if(!c)return s;s+=String.fromCharCode(c)}},Hi={},yi={},qr={},Er=class extends Error{constructor(s){super(s),this.name="BindingError"}},vt=r=>{throw new Er(r)};function Qu(r,s,c={}){var l=s.name;if(r||vt(`type "${l}" must have a positive integer typeid pointer`),yi.hasOwnProperty(r)){if(c.ignoreDuplicateRegistrations)return;vt(`Cannot register type '${l}' twice`)}if(yi[r]=s,delete qr[r],Hi.hasOwnProperty(r)){var f=Hi[r];delete Hi[r],f.forEach(g=>g())}}function _n(r,s,c={}){if(s.argPackAdvance===void 0)throw new TypeError("registerType registeredInstance requires argPackAdvance");return Qu(r,s,c)}var hc=(r,s,c)=>{switch(s){case 1:return c?l=>Je[l]:l=>nt[l];case 2:return c?l=>le[l>>1]:l=>fe[l>>1];case 4:return c?l=>ce[l>>2]:l=>ye[l>>2];case 8:return c?l=>Ue[l>>3]:l=>U[l>>3];default:throw new TypeError(`invalid integer width (${s}): ${r}`)}},Ei=r=>{if(r===null)return"null";var s=typeof r;return s==="object"||s==="array"||s==="function"?r.toString():""+r},fc=(r,s,c,l)=>{if(s<c||s>l)throw new TypeError(`Passing a number "${Ei(s)}" from JS side to C/C++ side to an argument of type "${r}", which is outside the valid range [${c}, ${l}]!`)},eh=(r,s,c,l,f)=>{s=Vt(s);const g=l===0n;let M=w=>w;if(g){const w=c*8;M=L=>BigInt.asUintN(w,L),f=M(f)}_n(r,{name:s,fromWireType:M,toWireType:(w,L)=>{if(typeof L=="number")L=BigInt(L);else if(typeof L!="bigint")throw new TypeError(`Cannot convert "${Ei(L)}" to ${this.name}`);return fc(s,L,l,f),L},argPackAdvance:In,readValueFromPointer:hc(s,c,!g),destructorFunction:null})},In=8,th=(r,s,c,l)=>{s=Vt(s),_n(r,{name:s,fromWireType:function(f){return!!f},toWireType:function(f,g){return g?c:l},argPackAdvance:In,readValueFromPointer:function(f){return this.fromWireType(nt[f])},destructorFunction:null})},nh=r=>({count:r.count,deleteScheduled:r.deleteScheduled,preservePointerOnDelete:r.preservePointerOnDelete,ptr:r.ptr,ptrType:r.ptrType,smartPtr:r.smartPtr,smartPtrType:r.smartPtrType}),ra=r=>{function s(c){return c.$$.ptrType.registeredClass.name}vt(s(r)+" instance already deleted")},sa=!1,dc=r=>{},ih=r=>{r.smartPtr?r.smartPtrType.rawDestructor(r.smartPtr):r.ptrType.registeredClass.rawDestructor(r.ptr)},pc=r=>{r.count.value-=1;var s=r.count.value===0;s&&ih(r)},mc=(r,s,c)=>{if(s===c)return r;if(c.baseClass===void 0)return null;var l=mc(r,s,c.baseClass);return l===null?null:c.downcast(l)},_c={},rh={},sh=(r,s)=>{for(s===void 0&&vt("ptr should not be undefined");r.baseClass;)s=r.upcast(s),r=r.baseClass;return s},ah=(r,s)=>(s=sh(r,s),rh[s]),oh=class extends Error{constructor(s){super(s),this.name="InternalError"}},Yr=r=>{throw new oh(r)},Kr=(r,s)=>{(!s.ptrType||!s.ptr)&&Yr("makeClassHandle requires ptr and ptrType");var c=!!s.smartPtrType,l=!!s.smartPtr;return c!==l&&Yr("Both smartPtrType and smartPtr must be specified"),s.count={value:1},Sr(Object.create(r,{$$:{value:s,writable:!0}}))};function gc(r){var s=this.getPointee(r);if(!s)return this.destructor(r),null;var c=ah(this.registeredClass,s);if(c!==void 0){if(c.$$.count.value===0)return c.$$.ptr=s,c.$$.smartPtr=r,c.clone();var l=c.clone();return this.destructor(r),l}function f(){return this.isSmartPointer?Kr(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:s,smartPtrType:this,smartPtr:r}):Kr(this.registeredClass.instancePrototype,{ptrType:this,ptr:r})}var g=this.registeredClass.getActualType(s),M=_c[g];if(!M)return f.call(this);var w;this.isConst?w=M.constPointerType:w=M.pointerType;var L=mc(s,this.registeredClass,w.registeredClass);return L===null?f.call(this):this.isSmartPointer?Kr(w.registeredClass.instancePrototype,{ptrType:w,ptr:L,smartPtrType:this,smartPtr:r}):Kr(w.registeredClass.instancePrototype,{ptrType:w,ptr:L})}var Sr=r=>typeof FinalizationRegistry>"u"?(Sr=s=>s,r):(sa=new FinalizationRegistry(s=>{console.warn(s.leakWarning),pc(s.$$)}),Sr=s=>{var c=s.$$,l=!!c.smartPtr;if(l){var f={$$:c},g=c.ptrType.registeredClass,M=new Error(`Embind found a leaked C++ instance ${g.name} <${ke(c.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);"captureStackTrace"in Error&&Error.captureStackTrace(M,gc),f.leakWarning=M.stack.replace(/^Error: /,""),sa.register(s,f,s)}return s},dc=s=>sa.unregister(s),Sr(r)),ch=()=>{let r=Zr.prototype;Object.assign(r,{isAliasOf(c){if(!(this instanceof Zr)||!(c instanceof Zr))return!1;var l=this.$$.ptrType.registeredClass,f=this.$$.ptr;c.$$=c.$$;for(var g=c.$$.ptrType.registeredClass,M=c.$$.ptr;l.baseClass;)f=l.upcast(f),l=l.baseClass;for(;g.baseClass;)M=g.upcast(M),g=g.baseClass;return l===g&&f===M},clone(){if(this.$$.ptr||ra(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var c=Sr(Object.create(Object.getPrototypeOf(this),{$$:{value:nh(this.$$)}}));return c.$$.count.value+=1,c.$$.deleteScheduled=!1,c},delete(){this.$$.ptr||ra(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&vt("Object already scheduled for deletion"),dc(this),pc(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||ra(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&vt("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const s=Symbol.dispose;s&&(r[s]=r.delete)};function Zr(){}var Jr=(r,s)=>Object.defineProperty(s,"name",{value:r}),aa=(r,s,c)=>{if(r[s].overloadTable===void 0){var l=r[s];r[s]=function(...f){return r[s].overloadTable.hasOwnProperty(f.length)||vt(`Function '${c}' called with an invalid number of arguments (${f.length}) - expects one of (${r[s].overloadTable})!`),r[s].overloadTable[f.length].apply(this,f)},r[s].overloadTable=[],r[s].overloadTable[l.argCount]=l}},oa=(r,s,c)=>{t.hasOwnProperty(r)?((c===void 0||t[r].overloadTable!==void 0&&t[r].overloadTable[c]!==void 0)&&vt(`Cannot register public name '${r}' twice`),aa(t,r,r),t[r].overloadTable.hasOwnProperty(c)&&vt(`Cannot register multiple overloads of a function with the same number of arguments (${c})!`),t[r].overloadTable[c]=s):(t[r]=s,t[r].argCount=c)},lh=48,uh=57,hh=r=>{D(typeof r=="string"),r=r.replace(/[^a-zA-Z0-9_]/g,"$");var s=r.charCodeAt(0);return s>=lh&&s<=uh?`_${r}`:r};function fh(r,s,c,l,f,g,M,w){this.name=r,this.constructor=s,this.instancePrototype=c,this.rawDestructor=l,this.baseClass=f,this.getActualType=g,this.upcast=M,this.downcast=w,this.pureVirtualFunctions=[]}var Qr=(r,s,c)=>{for(;s!==c;)s.upcast||vt(`Expected null or instance of ${c.name}, got an instance of ${s.name}`),r=s.upcast(r),s=s.baseClass;return r};function dh(r,s){if(s===null)return this.isReference&&vt(`null is not a valid ${this.name}`),0;s.$$||vt(`Cannot pass "${Ei(s)}" as a ${this.name}`),s.$$.ptr||vt(`Cannot pass deleted object as a pointer of type ${this.name}`);var c=s.$$.ptrType.registeredClass,l=Qr(s.$$.ptr,c,this.registeredClass);return l}function ph(r,s){var c;if(s===null)return this.isReference&&vt(`null is not a valid ${this.name}`),this.isSmartPointer?(c=this.rawConstructor(),r!==null&&r.push(this.rawDestructor,c),c):0;(!s||!s.$$)&&vt(`Cannot pass "${Ei(s)}" as a ${this.name}`),s.$$.ptr||vt(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&s.$$.ptrType.isConst&&vt(`Cannot convert argument of type ${s.$$.smartPtrType?s.$$.smartPtrType.name:s.$$.ptrType.name} to parameter type ${this.name}`);var l=s.$$.ptrType.registeredClass;if(c=Qr(s.$$.ptr,l,this.registeredClass),this.isSmartPointer)switch(s.$$.smartPtr===void 0&&vt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:s.$$.smartPtrType===this?c=s.$$.smartPtr:vt(`Cannot convert argument of type ${s.$$.smartPtrType?s.$$.smartPtrType.name:s.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:c=s.$$.smartPtr;break;case 2:if(s.$$.smartPtrType===this)c=s.$$.smartPtr;else{var f=s.clone();c=this.rawShare(c,Bt.toHandle(()=>f.delete())),r!==null&&r.push(this.rawDestructor,c)}break;default:vt("Unsupporting sharing policy")}return c}function mh(r,s){if(s===null)return this.isReference&&vt(`null is not a valid ${this.name}`),0;s.$$||vt(`Cannot pass "${Ei(s)}" as a ${this.name}`),s.$$.ptr||vt(`Cannot pass deleted object as a pointer of type ${this.name}`),s.$$.ptrType.isConst&&vt(`Cannot convert argument of type ${s.$$.ptrType.name} to parameter type ${this.name}`);var c=s.$$.ptrType.registeredClass,l=Qr(s.$$.ptr,c,this.registeredClass);return l}function es(r){return this.fromWireType(ye[r>>2])}var _h=()=>{Object.assign(ts.prototype,{getPointee(r){return this.rawGetPointee&&(r=this.rawGetPointee(r)),r},destructor(r){var s;(s=this.rawDestructor)==null||s.call(this,r)},argPackAdvance:In,readValueFromPointer:es,fromWireType:gc})};function ts(r,s,c,l,f,g,M,w,L,W,K){this.name=r,this.registeredClass=s,this.isReference=c,this.isConst=l,this.isSmartPointer=f,this.pointeeType=g,this.sharingPolicy=M,this.rawGetPointee=w,this.rawConstructor=L,this.rawShare=W,this.rawDestructor=K,!f&&s.baseClass===void 0?l?(this.toWireType=dh,this.destructorFunction=null):(this.toWireType=mh,this.destructorFunction=null):this.toWireType=ph}var vc=(r,s,c)=>{t.hasOwnProperty(r)||Yr("Replacing nonexistent public symbol"),t[r].overloadTable!==void 0&&c!==void 0?t[r].overloadTable[c]=s:(t[r]=s,t[r].argCount=c)},xc=[],ns,xe=r=>{var s=xc[r];return s||(xc[r]=s=ns.get(r)),D(ns.get(r)==s,"JavaScript-side Wasm function table mirror is out of date!"),s},Un=(r,s,c=!1)=>{D(!c,"Async bindings are only supported with JSPI."),r=Vt(r);function l(){var g=xe(s);return g}var f=l();return typeof f!="function"&&vt(`unknown function pointer with signature ${r}: ${s}`),f};class gh extends Error{}var yc=r=>{var s=Bc(r),c=Vt(s);return On(s),c},Si=(r,s)=>{var c=[],l={};function f(g){if(!l[g]&&!yi[g]){if(qr[g]){qr[g].forEach(f);return}c.push(g),l[g]=!0}}throw s.forEach(f),new gh(`${r}: `+c.map(yc).join([", "]))},Mn=(r,s,c)=>{r.forEach(w=>qr[w]=s);function l(w){var L=c(w);L.length!==r.length&&Yr("Mismatched type converter count");for(var W=0;W<r.length;++W)_n(r[W],L[W])}var f=new Array(s.length),g=[],M=0;s.forEach((w,L)=>{yi.hasOwnProperty(w)?f[L]=yi[w]:(g.push(w),Hi.hasOwnProperty(w)||(Hi[w]=[]),Hi[w].push(()=>{f[L]=yi[w],++M,M===g.length&&l(f)}))}),g.length===0&&l(f)},vh=(r,s,c,l,f,g,M,w,L,W,K,re,de)=>{K=Vt(K),g=Un(f,g),w&&(w=Un(M,w)),W&&(W=Un(L,W)),de=Un(re,de);var ae=hh(K);oa(ae,function(){Si(`Cannot construct ${K} due to unbound types`,[l])}),Mn([r,s,c],l?[l]:[],ge=>{var Lt;ge=ge[0];var qe,ht;l?(qe=ge.registeredClass,ht=qe.instancePrototype):ht=Zr.prototype;var ft=Jr(K,function(...ti){if(Object.getPrototypeOf(this)!==Ft)throw new Er(`Use 'new' to construct ${K}`);if(St.constructor_body===void 0)throw new Er(`${K} has no accessible constructor`);var ls=St.constructor_body[ti.length];if(ls===void 0)throw new Er(`Tried to invoke ctor of ${K} with invalid number of parameters (${ti.length}) - expected (${Object.keys(St.constructor_body).toString()}) parameters instead!`);return ls.apply(this,ti)}),Ft=Object.create(ht,{constructor:{value:ft}});ft.prototype=Ft;var St=new fh(K,ft,Ft,de,qe,g,w,W);St.baseClass&&((Lt=St.baseClass).__derivedClasses??(Lt.__derivedClasses=[]),St.baseClass.__derivedClasses.push(St));var Jt=new ts(K,St,!0,!1,!1),Gt=new ts(K+"*",St,!1,!1,!1),tn=new ts(K+" const*",St,!1,!0,!1);return _c[r]={pointerType:Gt,constPointerType:tn},vc(ae,ft),[Jt,Gt,tn]})},ca=r=>{for(;r.length;){var s=r.pop(),c=r.pop();c(s)}};function Ec(r){for(var s=1;s<r.length;++s)if(r[s]!==null&&r[s].destructorFunction===void 0)return!0;return!1}function xh(r,s,c,l,f){if(r<s||r>c){var g=s==c?s:`${s} to ${c}`;f(`function ${l} called with ${r} arguments, expected ${g}`)}}function yh(r,s,c,l){var f=Ec(r),g=r.length-2,M=[],w=["fn"];s&&w.push("thisWired");for(var L=0;L<g;++L)M.push(`arg${L}`),w.push(`arg${L}Wired`);M=M.join(","),w=w.join(",");var W=`return function (${M}) {
`;W+=`checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`,f&&(W+=`var destructors = [];
`);var K=f?"destructors":"null",re=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];s&&(W+=`var thisWired = classParam['toWireType'](${K}, this);
`);for(var L=0;L<g;++L)W+=`var arg${L}Wired = argType${L}['toWireType'](${K}, arg${L});
`,re.push(`argType${L}`);if(W+=(c||l?"var rv = ":"")+`invoker(${w});
`,f)W+=`runDestructors(destructors);
`;else for(var L=s?1:2;L<r.length;++L){var de=L===1?"thisWired":"arg"+(L-2)+"Wired";r[L].destructorFunction!==null&&(W+=`${de}_dtor(${de});
`,re.push(`${de}_dtor`))}return c&&(W+=`var ret = retType['fromWireType'](rv);
return ret;
`),W+=`}
`,re.push("checkArgCount","minArgs","maxArgs"),W=`if (arguments.length !== ${re.length}){ throw new Error(humanName + "Expected ${re.length} closure arguments " + arguments.length + " given."); }
${W}`,[re,W]}function Eh(r){for(var s=r.length-2,c=r.length-1;c>=2&&r[c].optional;--c)s--;return s}function is(r,s,c,l,f,g){var M=s.length;M<2&&vt("argTypes array size mismatch! Must at least get return value and 'this' types!"),D(!g,"Async bindings are only supported with JSPI.");for(var w=s[1]!==null&&c!==null,L=Ec(s),W=s[0].name!=="void",K=M-2,re=Eh(s),de=[r,vt,l,f,ca,s[0],s[1]],ae=0;ae<M-2;++ae)de.push(s[ae+2]);if(!L)for(var ae=w?1:2;ae<s.length;++ae)s[ae].destructorFunction!==null&&de.push(s[ae].destructorFunction);de.push(xh,re,K);let[ge,qe]=yh(s,w,W,g);var ht=new Function(...ge,qe)(...de);return Jr(r,ht)}var rs=(r,s)=>{for(var c=[],l=0;l<r;l++)c.push(ye[s+l*4>>2]);return c},la=r=>{r=r.trim();const s=r.indexOf("(");return s===-1?r:(D(r.endsWith(")"),"Parentheses for argument names should match."),r.slice(0,s))},Sh=(r,s,c,l,f,g,M,w,L)=>{var W=rs(c,l);s=Vt(s),s=la(s),g=Un(f,g,w),Mn([],[r],K=>{K=K[0];var re=`${K.name}.${s}`;function de(){Si(`Cannot call ${re} due to unbound types`,W)}s.startsWith("@@")&&(s=Symbol[s.substring(2)]);var ae=K.registeredClass.constructor;return ae[s]===void 0?(de.argCount=c-1,ae[s]=de):(aa(ae,s,re),ae[s].overloadTable[c-1]=de),Mn([],W,ge=>{var qe=[ge[0],null].concat(ge.slice(1)),ht=is(re,qe,null,g,M,w);if(ae[s].overloadTable===void 0?(ht.argCount=c-1,ae[s]=ht):ae[s].overloadTable[c-1]=ht,K.registeredClass.__derivedClasses)for(const ft of K.registeredClass.__derivedClasses)ft.constructor.hasOwnProperty(s)||(ft.constructor[s]=ht);return[]}),[]})},Mh=(r,s,c,l,f,g)=>{D(s>0);var M=rs(s,c);f=Un(l,f),Mn([],[r],w=>{w=w[0];var L=`constructor ${w.name}`;if(w.registeredClass.constructor_body===void 0&&(w.registeredClass.constructor_body=[]),w.registeredClass.constructor_body[s-1]!==void 0)throw new Er(`Cannot register multiple constructors with identical number of parameters (${s-1}) for class '${w.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return w.registeredClass.constructor_body[s-1]=()=>{Si(`Cannot construct ${w.name} due to unbound types`,M)},Mn([],M,W=>(W.splice(1,0,null),w.registeredClass.constructor_body[s-1]=is(L,W,null,f,g),[])),[]})},Th=(r,s,c,l,f,g,M,w,L,W)=>{var K=rs(c,l);s=Vt(s),s=la(s),g=Un(f,g,L),Mn([],[r],re=>{re=re[0];var de=`${re.name}.${s}`;s.startsWith("@@")&&(s=Symbol[s.substring(2)]),w&&re.registeredClass.pureVirtualFunctions.push(s);function ae(){Si(`Cannot call ${de} due to unbound types`,K)}var ge=re.registeredClass.instancePrototype,qe=ge[s];return qe===void 0||qe.overloadTable===void 0&&qe.className!==re.name&&qe.argCount===c-2?(ae.argCount=c-2,ae.className=re.name,ge[s]=ae):(aa(ge,s,de),ge[s].overloadTable[c-2]=ae),Mn([],K,ht=>{var ft=is(de,ht,re,g,M,L);return ge[s].overloadTable===void 0?(ft.argCount=c-2,ge[s]=ft):ge[s].overloadTable[c-2]=ft,[]}),[]})},Sc=(r,s,c)=>(r instanceof Object||vt(`${c} with invalid "this": ${r}`),r instanceof s.registeredClass.constructor||vt(`${c} incompatible with "this" of type ${r.constructor.name}`),r.$$.ptr||vt(`cannot call emscripten binding method ${c} on deleted object`),Qr(r.$$.ptr,r.$$.ptrType.registeredClass,s.registeredClass)),wh=(r,s,c,l,f,g,M,w,L,W)=>{s=Vt(s),f=Un(l,f),Mn([],[r],K=>{K=K[0];var re=`${K.name}.${s}`,de={get(){Si(`Cannot access ${re} due to unbound types`,[c,M])},enumerable:!0,configurable:!0};return L?de.set=()=>Si(`Cannot access ${re} due to unbound types`,[c,M]):de.set=ae=>vt(re+" is a read-only property"),Object.defineProperty(K.registeredClass.instancePrototype,s,de),Mn([],L?[c,M]:[c],ae=>{var ge=ae[0],qe={get(){var ft=Sc(this,K,re+" getter");return ge.fromWireType(f(g,ft))},enumerable:!0};if(L){L=Un(w,L);var ht=ae[1];qe.set=function(ft){var Ft=Sc(this,K,re+" setter"),St=[];L(W,Ft,ht.toWireType(St,ft)),ca(St)}}return Object.defineProperty(K.registeredClass.instancePrototype,s,qe),[]}),[]})},bh=(r,s,c)=>{r=Vt(r),Mn([],[s],l=>(l=l[0],t[r]=l.fromWireType(c),[]))},Mc=[],Nn=[0,1,,1,null,1,!0,1,!1,1],ua=r=>{r>9&&--Nn[r+1]===0&&(D(Nn[r]!==void 0,"Decref for unallocated handle."),Nn[r]=void 0,Mc.push(r))},Bt={toValue:r=>(r||vt(`Cannot use deleted val. handle = ${r}`),D(r===2||Nn[r]!==void 0&&r%2===0,`invalid handle: ${r}`),Nn[r]),toHandle:r=>{switch(r){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const s=Mc.pop()||Nn.length;return Nn[s]=r,Nn[s+1]=1,s}}}},Tc={name:"emscripten::val",fromWireType:r=>{var s=Bt.toValue(r);return ua(r),s},toWireType:(r,s)=>Bt.toHandle(s),argPackAdvance:In,readValueFromPointer:es,destructorFunction:null},wc=r=>_n(r,Tc),Ah=(r,s,c)=>{switch(s){case 1:return c?function(l){return this.fromWireType(Je[l])}:function(l){return this.fromWireType(nt[l])};case 2:return c?function(l){return this.fromWireType(le[l>>1])}:function(l){return this.fromWireType(fe[l>>1])};case 4:return c?function(l){return this.fromWireType(ce[l>>2])}:function(l){return this.fromWireType(ye[l>>2])};default:throw new TypeError(`invalid integer width (${s}): ${r}`)}},Rh=(r,s,c,l)=>{s=Vt(s);function f(){}f.values={},_n(r,{name:s,constructor:f,fromWireType:function(g){return this.constructor.values[g]},toWireType:(g,M)=>M.value,argPackAdvance:In,readValueFromPointer:Ah(s,c,l),destructorFunction:null}),oa(s,f)},Mr=(r,s)=>{var c=yi[r];return c===void 0&&vt(`${s} has unknown type ${yc(r)}`),c},Ch=(r,s,c)=>{var l=Mr(r,"enum");s=Vt(s);var f=l.constructor,g=Object.create(l.constructor.prototype,{value:{value:c},constructor:{value:Jr(`${l.name}_${s}`,function(){})}});f.values[c]=g,f[s]=g},Ph=(r,s)=>{switch(s){case 4:return function(c){return this.fromWireType(Be[c>>2])};case 8:return function(c){return this.fromWireType(he[c>>3])};default:throw new TypeError(`invalid float width (${s}): ${r}`)}},Dh=(r,s,c)=>{s=Vt(s),_n(r,{name:s,fromWireType:l=>l,toWireType:(l,f)=>{if(typeof f!="number"&&typeof f!="boolean")throw new TypeError(`Cannot convert ${Ei(f)} to ${this.name}`);return f},argPackAdvance:In,readValueFromPointer:Ph(s,c),destructorFunction:null})},Lh=(r,s,c,l,f,g,M,w)=>{var L=rs(s,c);r=Vt(r),r=la(r),f=Un(l,f,M),oa(r,function(){Si(`Cannot call ${r} due to unbound types`,L)},s-1),Mn([],L,W=>{var K=[W[0],null].concat(W.slice(1));return vc(r,is(r,K,null,f,g,M),s-1),[]})},Fh=(r,s,c,l,f)=>{s=Vt(s);const g=l===0;let M=L=>L;if(g){var w=32-8*c;M=L=>L<<w>>>w,f=M(f)}_n(r,{name:s,fromWireType:M,toWireType:(L,W)=>{if(typeof W!="number"&&typeof W!="boolean")throw new TypeError(`Cannot convert "${Ei(W)}" to ${s}`);return fc(s,W,l,f),W},argPackAdvance:In,readValueFromPointer:hc(s,c,l!==0),destructorFunction:null})},Ih=(r,s,c)=>{var l=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],f=l[s];function g(M){var w=ye[M>>2],L=ye[M+4>>2];return new f(Je.buffer,L,w)}c=Vt(c),_n(r,{name:c,fromWireType:g,argPackAdvance:In,readValueFromPointer:g},{ignoreDuplicateRegistrations:!0})},Uh=Object.assign({optional:!0},Tc),Nh=(r,s)=>{_n(r,Uh)},Mi=(r,s,c)=>(D(typeof c=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),Ee(r,nt,s,c)),Oh=(r,s)=>{s=Vt(s),_n(r,{name:s,fromWireType(c){for(var l=ye[c>>2],f=c+4,g,M,w=f,M=0;M<=l;++M){var L=f+M;if(M==l||nt[L]==0){var W=L-w,K=ut(w,W);g===void 0?g=K:(g+="\0",g+=K),w=L+1}}return On(c),g},toWireType(c,l){l instanceof ArrayBuffer&&(l=new Uint8Array(l));var f,g=typeof l=="string";g||ArrayBuffer.isView(l)&&l.BYTES_PER_ELEMENT==1||vt("Cannot pass non-string to std::string"),g?f=j(l):f=l.length;var M=da(4+f+1),w=M+4;return ye[M>>2]=f,g?Mi(l,w,f+1):nt.set(l,w),c!==null&&c.push(On,M),M},argPackAdvance:In,readValueFromPointer:es,destructorFunction(c){On(c)}})},bc=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,kh=(r,s)=>{D(r%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var c=r>>1,l=c+s/2,f=c;!(f>=l)&&fe[f];)++f;if(f-c>16&&bc)return bc.decode(fe.subarray(c,f));for(var g="",M=c;!(M>=l);++M){var w=fe[M];if(w==0)break;g+=String.fromCharCode(w)}return g},Bh=(r,s,c)=>{if(D(s%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),D(typeof c=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),c??(c=2147483647),c<2)return 0;c-=2;for(var l=s,f=c<r.length*2?c/2:r.length,g=0;g<f;++g){var M=r.charCodeAt(g);le[s>>1]=M,s+=2}return le[s>>1]=0,s-l},zh=r=>r.length*2,Hh=(r,s)=>{D(r%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var c="",l=0;!(l>=s/4);l++){var f=ce[r+l*4>>2];if(!f)break;c+=String.fromCodePoint(f)}return c},Vh=(r,s,c)=>{if(D(s%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),D(typeof c=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),c??(c=2147483647),c<4)return 0;for(var l=s,f=l+c-4,g=0;g<r.length;++g){var M=r.codePointAt(g);if(M>65535&&g++,ce[s>>2]=M,s+=4,s+4>f)break}return ce[s>>2]=0,s-l},Gh=r=>{for(var s=0,c=0;c<r.length;++c){var l=r.codePointAt(c);l>65535&&c++,s+=4}return s},Wh=(r,s,c)=>{c=Vt(c);var l,f,g,M;s===2?(l=kh,f=Bh,M=zh,g=w=>fe[w>>1]):s===4&&(l=Hh,f=Vh,M=Gh,g=w=>ye[w>>2]),_n(r,{name:c,fromWireType:w=>{for(var L=ye[w>>2],W,K=w+4,re=0;re<=L;++re){var de=w+4+re*s;if(re==L||g(de)==0){var ae=de-K,ge=l(K,ae);W===void 0?W=ge:(W+="\0",W+=ge),K=de+s}}return On(w),W},toWireType:(w,L)=>{typeof L!="string"&&vt(`Cannot pass non-string to C++ string type ${c}`);var W=M(L),K=da(4+W+s);return ye[K>>2]=W/s,f(L,K+4,W+s),w!==null&&w.push(On,K),K},argPackAdvance:In,readValueFromPointer:es,destructorFunction(w){On(w)}})},Xh=(r,s)=>{wc(r)},$h=(r,s)=>{s=Vt(s),_n(r,{isVoid:!0,name:s,argPackAdvance:0,fromWireType:()=>{},toWireType:(c,l)=>{}})},jh=()=>{throw new B},Ac=(r,s,c)=>{var l=[],f=r.toWireType(l,c);return l.length&&(ye[s>>2]=Bt.toHandle(l)),f},qh=(r,s,c)=>(r=Bt.toValue(r),s=Mr(s,"emval::as"),Ac(s,c,r)),Yh=(r,s)=>(r=Bt.toValue(r),s=Mr(s,"emval::as"),s.toWireType(null,r)),ss=[],Kh=(r,s,c,l)=>(r=ss[r],s=Bt.toValue(s),r(null,s,c,l)),Zh={},ha=r=>{var s=Zh[r];return s===void 0?Vt(r):s},Jh=(r,s,c,l,f)=>(r=ss[r],s=Bt.toValue(s),c=ha(c),r(s,s[c],l,f)),Rc=()=>globalThis,Qh=r=>r===0?Bt.toHandle(Rc()):(r=ha(r),Bt.toHandle(Rc()[r])),ef=r=>{var s=ss.length;return ss.push(r),s},tf=(r,s)=>{for(var c=new Array(r),l=0;l<r;++l)c[l]=Mr(ye[s+l*4>>2],`parameter ${l}`);return c},nf=(r,s,c)=>{var l=tf(r,s),f=l.shift();r--;var g=`return function (obj, func, destructorsRef, args) {
`,M=0,w=[];c===0&&w.push("obj");for(var L=["retType"],W=[f],K=0;K<r;++K)w.push(`arg${K}`),L.push(`argType${K}`),W.push(l[K]),g+=`  var arg${K} = argType${K}.readValueFromPointer(args${M?"+"+M:""});
`,M+=l[K].argPackAdvance;var re=c===1?"new func":"func.call";g+=`  var rv = ${re}(${w.join(", ")});
`,f.isVoid||(L.push("emval_returnValue"),W.push(Ac),g+=`  return emval_returnValue(retType, destructorsRef, rv);
`),g+=`};
`;var de=new Function(...L,g)(...W),ae=`methodCaller<(${l.map(ge=>ge.name).join(", ")}) => ${f.name}>`;return ef(Jr(ae,de))},rf=(r,s)=>(r=Bt.toValue(r),s=Bt.toValue(s),Bt.toHandle(r[s])),sf=r=>{r>9&&(Nn[r+1]+=1)},af=r=>(r=Bt.toValue(r),typeof r=="number"),of=r=>(r=Bt.toValue(r),typeof r=="string"),cf=()=>Bt.toHandle([]),lf=r=>Bt.toHandle(ha(r)),uf=r=>{var s=Bt.toValue(r);ca(s),ua(r)},hf=(r,s)=>{r=Mr(r,"_emval_take_value");var c=r.readValueFromPointer(s);return Bt.toHandle(c)},ff=r=>{throw r=Bt.toValue(r),r},df=r=>r%4===0&&(r%100!==0||r%400===0),pf=[0,31,60,91,121,152,182,213,244,274,305,335],mf=[0,31,59,90,120,151,181,212,243,273,304,334],Cc=r=>{var s=df(r.getFullYear()),c=s?pf:mf,l=c[r.getMonth()]+r.getDate()-1;return l},_f=9007199254740992,gf=-9007199254740992,Pc=r=>r<gf||r>_f?NaN:Number(r);function vf(r,s){r=Pc(r);var c=new Date(r*1e3);ce[s>>2]=c.getSeconds(),ce[s+4>>2]=c.getMinutes(),ce[s+8>>2]=c.getHours(),ce[s+12>>2]=c.getDate(),ce[s+16>>2]=c.getMonth(),ce[s+20>>2]=c.getFullYear()-1900,ce[s+24>>2]=c.getDay();var l=Cc(c)|0;ce[s+28>>2]=l,ce[s+36>>2]=-(c.getTimezoneOffset()*60);var f=new Date(c.getFullYear(),0,1),g=new Date(c.getFullYear(),6,1).getTimezoneOffset(),M=f.getTimezoneOffset(),w=(g!=M&&c.getTimezoneOffset()==Math.min(M,g))|0;ce[s+32>>2]=w}var xf=function(r){var s=(()=>{var c=new Date(ce[r+20>>2]+1900,ce[r+16>>2],ce[r+12>>2],ce[r+8>>2],ce[r+4>>2],ce[r>>2],0),l=ce[r+32>>2],f=c.getTimezoneOffset(),g=new Date(c.getFullYear(),0,1),M=new Date(c.getFullYear(),6,1).getTimezoneOffset(),w=g.getTimezoneOffset(),L=Math.min(w,M);if(l<0)ce[r+32>>2]=+(M!=w&&L==f);else if(l>0!=(L==f)){var W=Math.max(w,M),K=l>0?L:W;c.setTime(c.getTime()+(K-f)*6e4)}ce[r+24>>2]=c.getDay();var re=Cc(c)|0;ce[r+28>>2]=re,ce[r>>2]=c.getSeconds(),ce[r+4>>2]=c.getMinutes(),ce[r+8>>2]=c.getHours(),ce[r+12>>2]=c.getDate(),ce[r+16>>2]=c.getMonth(),ce[r+20>>2]=c.getYear();var de=c.getTime();return isNaN(de)?-1:de/1e3})();return BigInt(s)},yf=(r,s,c,l)=>{var f=new Date().getFullYear(),g=new Date(f,0,1),M=new Date(f,6,1),w=g.getTimezoneOffset(),L=M.getTimezoneOffset(),W=Math.max(w,L);ye[r>>2]=W*60,ce[s>>2]=+(w!=L);var K=ae=>{var ge=ae>=0?"-":"+",qe=Math.abs(ae),ht=String(Math.floor(qe/60)).padStart(2,"0"),ft=String(qe%60).padStart(2,"0");return`UTC${ge}${ht}${ft}`},re=K(w),de=K(L);D(re),D(de),D(j(re)<=16,`timezone name truncated to fit in TZNAME_MAX (${re})`),D(j(de)<=16,`timezone name truncated to fit in TZNAME_MAX (${de})`),L<w?(Mi(re,c,17),Mi(de,l,17)):(Mi(re,l,17),Mi(de,c,17))},Dc=()=>performance.now(),Lc=()=>Date.now(),Ef=r=>r>=0&&r<=3;function Sf(r,s,c){if(!Ef(r))return 28;var l;r===0?l=Lc():l=Dc();var f=Math.round(l*1e3*1e3);return Ue[c>>3]=BigInt(f),0}var as=[],Mf=(r,s)=>{D(Array.isArray(as)),D(s%16==0),as.length=0;for(var c;c=nt[r++];){var l=String.fromCharCode(c),f=["d","f","i","p"];f.push("j"),D(f.includes(l),`Invalid character ${c}("${l}") in readEmAsmArgs! Use only [${f}], and do not specify "v" for void return argument.`);var g=c!=105;g&=c!=112,s+=g&&s%8?4:0,as.push(c==112?ye[s>>2]:c==106?Ue[s>>3]:c==105?ce[s>>2]:he[s>>3]),s+=g?8:4}return as},Tf=(r,s,c)=>{var l=Mf(s,c);return D(kc.hasOwnProperty(r),`No EM_ASM constant found at address ${r}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),kc[r](...l)},wf=(r,s,c)=>Tf(r,s,c),Fc=()=>2147483648,bf=()=>Fc(),Af=(r,s)=>(D(s,"alignment argument is required"),Math.ceil(r/s)*s),Rf=r=>{var s=Qe.buffer,c=(r-s.byteLength+65535)/65536|0;try{return Qe.grow(c),Ge(),1}catch(l){I(`growMemory: Attempted to grow heap from ${s.byteLength} bytes to ${r} bytes, but got error: ${l}`)}},Cf=r=>{var s=nt.length;r>>>=0,D(r>s);var c=Fc();if(r>c)return I(`Cannot enlarge memory, requested ${r} bytes, but the limit is ${c} bytes!`),!1;for(var l=1;l<=4;l*=2){var f=s*(1+.2/l);f=Math.min(f,r+100663296);var g=Math.min(c,Af(Math.max(r,f),65536)),M=Rf(g);if(M)return!0}return I(`Failed to grow the heap from ${s} bytes to ${g} bytes, not enough memory!`),!1},fa={},Pf=()=>p||"./this.program",Tr=()=>{if(!Tr.strings){var r=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8",s={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:r,_:Pf()};for(var c in fa)fa[c]===void 0?delete s[c]:s[c]=fa[c];var l=[];for(var c in s)l.push(`${c}=${s[c]}`);Tr.strings=l}return Tr.strings},Df=(r,s)=>{var c=0,l=0;for(var f of Tr()){var g=s+c;ye[r+l>>2]=g,c+=Mi(f,g,1/0)+1,l+=4}return 0},Lf=(r,s)=>{var c=Tr();ye[r>>2]=c.length;var l=0;for(var f of c)l+=j(f)+1;return ye[s>>2]=l,0},Ic=0,Uc=()=>Ce||Ic>0,Ff=r=>{var s;Uc()||((s=t.onExit)==null||s.call(t,r),k=!0),d(r,new rt(r))},If=(r,s)=>{if(Kp(),Uc()&&!s){var c=`program exited (with status: ${r}), but keepRuntimeAlive() is set (counter=${Ic}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;He==null||He(c),I(c)}Ff(r)},Uf=If;function Nf(r){try{var s=mt.getStreamFromFD(r);return S.close(s),0}catch(c){if(typeof S>"u"||c.name!=="ErrnoError")throw c;return c.errno}}var Of=(r,s,c,l)=>{for(var f=0,g=0;g<c;g++){var M=ye[s>>2],w=ye[s+4>>2];s+=8;var L=S.read(r,Je,M,w,l);if(L<0)return-1;if(f+=L,L<w)break}return f};function kf(r,s,c,l){try{var f=mt.getStreamFromFD(r),g=Of(f,s,c);return ye[l>>2]=g,0}catch(M){if(typeof S>"u"||M.name!=="ErrnoError")throw M;return M.errno}}function Bf(r,s,c,l){s=Pc(s);try{if(isNaN(s))return 61;var f=mt.getStreamFromFD(r);return S.llseek(f,s,c),Ue[l>>3]=BigInt(f.position),f.getdents&&s===0&&c===0&&(f.getdents=null),0}catch(g){if(typeof S>"u"||g.name!=="ErrnoError")throw g;return g.errno}}var zf=(r,s,c,l)=>{for(var f=0,g=0;g<c;g++){var M=ye[s>>2],w=ye[s+4>>2];s+=8;var L=S.write(r,Je,M,w,l);if(L<0)return-1;if(f+=L,L<w)break}return f};function Hf(r,s,c,l){try{var f=mt.getStreamFromFD(r),g=zf(f,s,c);return ye[l>>2]=g,0}catch(M){if(typeof S>"u"||M.name!=="ErrnoError")throw M;return M.errno}}var Vf=r=>r,Gf=r=>{var s=t["_"+r];return D(s,"Cannot call unknown function "+r+", make sure it is exported"),s},Wf=(r,s)=>{D(r.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),Je.set(r,s)},os=r=>Wc(r),Xf=r=>{var s=j(r)+1,c=os(s);return Mi(r,c,s),c},Nc=(r,s,c,l,f)=>{var g={string:ge=>{var qe=0;return ge!=null&&ge!==0&&(qe=Xf(ge)),qe},array:ge=>{var qe=os(ge.length);return Wf(ge,qe),qe}};function M(ge){return s==="string"?ut(ge):s==="boolean"?!!ge:ge}var w=Gf(r),L=[],W=0;if(D(s!=="array",'Return type should not be "array".'),l)for(var K=0;K<l.length;K++){var re=g[c[K]];re?(W===0&&(W=H()),L[K]=re(l[K])):L[K]=l[K]}var de=w(...L);function ae(ge){return W!==0&&G(W),M(ge)}return de=ae(de),de},$f=(r,s,c,l)=>(...f)=>Nc(r,s,c,f),jf=(...r)=>S.createPath(...r),qf=(...r)=>S.unlink(...r),Yf=(...r)=>S.createLazyFile(...r),Kf=(...r)=>S.createDevice(...r),Zf=r=>cs(r),Jf=r=>_a(r),Qf=r=>{var s=H(),c=os(4),l=os(4);$c(r,c,l);var f=ye[c>>2],g=ye[l>>2],M=ut(f);On(f);var w;return g&&(w=ut(g),On(g)),G(s),[M,w]},Oc=r=>Qf(r);S.createPreloadedFile=bt,S.staticInit(),ch(),_h(),D(Nn.length===5*2),t.noExitRuntime&&(Ce=t.noExitRuntime),t.preloadPlugins&&(It=t.preloadPlugins),t.print&&(O=t.print),t.printErr&&(I=t.printErr),t.wasmBinary&&(F=t.wasmBinary),nd(),t.arguments&&t.arguments,t.thisProgram&&(p=t.thisProgram),D(typeof t.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),D(typeof t.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),D(typeof t.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),D(typeof t.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),D(typeof t.read>"u","Module.read option was removed"),D(typeof t.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),D(typeof t.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),D(typeof t.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),D(typeof t.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),D(typeof t.ENVIRONMENT>"u","Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),D(typeof t.STACK_SIZE>"u","STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),D(typeof t.wasmMemory>"u","Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),D(typeof t.INITIAL_MEMORY>"u","Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),t.addRunDependency=N,t.removeRunDependency=b,t.ccall=Nc,t.cwrap=$f,t.FS_createPreloadedFile=bt,t.FS_unlink=qf,t.FS_createPath=jf,t.FS_createDevice=Kf,t.FS=S,t.FS_createDataFile=pt,t.FS_createLazyFile=Yf,t.MEMFS=Me;var ed=["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","zeroMemory","withStackSave","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","runMainThreadEmAsm","jstoi_q","autoResumeAudioContext","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","HandleAllocator","getNativeTypeSize","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","stringToAscii","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace","getFunctionArgsName","createJsInvokerSignature","PureVirtualError","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","setDelayFunction","count_emval_handles"];ed.forEach(me);var td=["run","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP8","HEAPU8","HEAP16","HEAPU16","HEAP32","HEAPU32","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","setTempRet0","ptrToString","exitJS","getHeapMax","growMemory","ENV","ERRNO_CODES","strError","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","getExecutableName","keepRuntimeAlive","asyncLoad","alignMemory","mmapAlloc","wasmTable","getUniqueRunDependency","noExitRuntime","addOnPreRun","addOnPostRun","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","intArrayFromString","AsciiToString","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","getEnvStrings","checkWasiClock","doReadv","doWritev","initRandomFill","randomFill","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","preloadPlugins","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS_readFile","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_forceLoadFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s","InternalError","BindingError","throwInternalError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","whenDependentTypesAreResolved","getTypeName","getFunctionName","heap32VectorToArray","requireRegisteredType","usesDestructorStack","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","GenericWireTypeSize","EmValType","EmValOptionalType","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","getInheritedInstance","registeredPointers","registerType","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","assertIntegerRange","readPointer","runDestructors","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","deletionQueue","flushPendingDeletes","delayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_freelist","emval_handles","emval_symbols","getStringOrSymbol","Emval","emval_get_global","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller"];td.forEach(be),t.incrementExceptionRefcount=Zf,t.decrementExceptionRefcount=Jf,t.getExceptionMessage=Oc;function nd(){oe("fetchSettings")}var kc={701944:()=>{typeof t<"u"&&"mjDISABLESTRING mjENABLESTRING mjFRAMESTRING mjLABELSTRING mjRNDSTRING mjTIMERSTRING mjVISSTRING".split(" ").forEach(function(r){Object.defineProperty(t,r,{get:function(){return t["get_"+r]()},set:function(s){},enumerable:!0,configurable:!0})})}},Bc=Z("___getTypeName"),da=Z("_malloc"),pa=Z("_fflush"),On=Z("_free"),ma=Z("_emscripten_stack_get_end"),zc=Z("_strerror"),_e=Z("_setThrew"),Hc=Z("__emscripten_tempret_set"),Vc=Z("_emscripten_stack_init"),Gc=Z("__emscripten_stack_restore"),Wc=Z("__emscripten_stack_alloc"),Xc=Z("_emscripten_stack_get_current"),_a=Z("___cxa_decrement_exception_refcount"),cs=Z("___cxa_increment_exception_refcount"),$c=Z("___get_exception_message"),jc=Z("___cxa_can_catch"),qc=Z("___cxa_get_exception_ptr");function id(r){Bc=se("__getTypeName",1),da=se("malloc",1),pa=se("fflush",1),On=se("free",1),ma=r.emscripten_stack_get_end,r.emscripten_stack_get_base,zc=se("strerror",1),_e=se("setThrew",2),Hc=se("_emscripten_tempret_set",1),Vc=r.emscripten_stack_init,r.emscripten_stack_get_free,Gc=r._emscripten_stack_restore,Wc=r._emscripten_stack_alloc,Xc=r.emscripten_stack_get_current,_a=se("__cxa_decrement_exception_refcount",1),cs=se("__cxa_increment_exception_refcount",1),$c=se("__get_exception_message",3),jc=se("__cxa_can_catch",3),qc=se("__cxa_get_exception_ptr",1)}var Yc={__assert_fail:Sn,__cxa_begin_catch:Wn,__cxa_current_primary_exception:xr,__cxa_end_catch:Wr,__cxa_find_matching_catch_2:Xr,__cxa_find_matching_catch_3:$r,__cxa_rethrow:jr,__cxa_rethrow_primary_exception:ea,__cxa_throw:ta,__cxa_uncaught_exceptions:na,__resumeException:ia,__syscall_dup3:xi,__syscall_fcntl64:sn,__syscall_fstat64:Yt,__syscall_ioctl:Zt,__syscall_lstat64:yr,__syscall_newfstatat:$n,__syscall_openat:Ku,__syscall_stat64:Zu,_abort_js:Ju,_embind_register_bigint:eh,_embind_register_bool:th,_embind_register_class:vh,_embind_register_class_class_function:Sh,_embind_register_class_constructor:Mh,_embind_register_class_function:Th,_embind_register_class_property:wh,_embind_register_constant:bh,_embind_register_emval:wc,_embind_register_enum:Rh,_embind_register_enum_value:Ch,_embind_register_float:Dh,_embind_register_function:Lh,_embind_register_integer:Fh,_embind_register_memory_view:Ih,_embind_register_optional:Nh,_embind_register_std_string:Oh,_embind_register_std_wstring:Wh,_embind_register_user_type:Xh,_embind_register_void:$h,_emscripten_throw_longjmp:jh,_emval_as:qh,_emval_as_int64:Yh,_emval_call:Kh,_emval_call_method:Jh,_emval_decref:ua,_emval_get_global:Qh,_emval_get_method_caller:nf,_emval_get_property:rf,_emval_incref:sf,_emval_is_number:af,_emval_is_string:of,_emval_new_array:cf,_emval_new_cstring:lf,_emval_run_destructors:uf,_emval_take_value:hf,_emval_throw:ff,_localtime_js:vf,_mktime_js:xf,_tzset_js:yf,clock_time_get:Sf,emscripten_asm_const_int:wf,emscripten_date_now:Lc,emscripten_get_heap_max:bf,emscripten_get_now:Dc,emscripten_resize_heap:Cf,environ_get:Df,environ_sizes_get:Lf,exit:Uf,fd_close:Nf,fd_read:kf,fd_seek:Bf,fd_write:Hf,invoke_ddd:kp,invoke_dddi:qd,invoke_dddidi:Yd,invoke_ddidi:jd,invoke_di:Kd,invoke_didd:Ap,invoke_dii:kd,invoke_diii:vd,invoke_diiii:$d,invoke_diiiidd:Wd,invoke_diiiidi:Ed,invoke_diiiii:fd,invoke_diiiiii:Ad,invoke_diiiiiii:Zd,invoke_diiiiiiiii:wd,invoke_diiiiiiiiiiii:bd,invoke_fiii:$p,invoke_i:dd,invoke_id:up,invoke_ii:ad,invoke_iid:op,invoke_iidiii:Ud,invoke_iidiiid:Fd,invoke_iidiiiiidi:Nd,invoke_iii:rd,invoke_iiid:Od,invoke_iiididdddddd:Id,invoke_iiidiiiiiiii:Ld,invoke_iiii:ld,invoke_iiiidddiiiii:Qd,invoke_iiiii:gd,invoke_iiiiid:Tp,invoke_iiiiii:mp,invoke_iiiiiii:lp,invoke_iiiiiiii:ap,invoke_iiiiiiiidd:wp,invoke_iiiiiiiii:Gd,invoke_iiiiiiiiid:Op,invoke_iiiiiiiiii:dp,invoke_iiiiiiiiiidddiiiiiiiii:Dd,invoke_iiiiiiiiiii:hp,invoke_iiiiiiiiiiii:jp,invoke_iiiiiiiiiiiii:Rp,invoke_iiij:pp,invoke_iiji:fp,invoke_j:Wp,invoke_ji:Up,invoke_jiiii:_p,invoke_jij:Cp,invoke_v:cd,invoke_vi:od,invoke_vid:cp,invoke_viddd:vp,invoke_vidddd:xp,invoke_vidi:Xd,invoke_vidiii:Cd,invoke_vif:Hp,invoke_vii:hd,invoke_viid:Hd,invoke_viiddi:Mp,invoke_viiddidi:Sp,invoke_viiddii:Jd,invoke_viidi:zd,invoke_viidii:yd,invoke_viidiii:rp,invoke_viidiiid:np,invoke_viidiiiii:Pd,invoke_viidiiiiidi:sp,invoke_viidiiiiiiii:Rd,invoke_viii:sd,invoke_viiid:Md,invoke_viiidd:Ep,invoke_viiidi:Bd,invoke_viiididdddddd:ip,invoke_viiidiiiiiiii:tp,invoke_viiii:md,invoke_viiiiddd:yp,invoke_viiiidi:Bp,invoke_viiiifi:zp,invoke_viiiii:ud,invoke_viiiiid:Sd,invoke_viiiiii:pd,invoke_viiiiiii:xd,invoke_viiiiiiii:Vd,invoke_viiiiiiiii:bp,invoke_viiiiiiiiii:Fp,invoke_viiiiiiiiiidddiiiiiiiii:ep,invoke_viiiiiiiiiii:Np,invoke_viiiiiiiiiiid:Td,invoke_viiiiiiiiiiiii:Dp,invoke_viiiiiiiiiiiiii:Lp,invoke_viiiiiiiiiiiiiii:qp,invoke_viiiiiiiiiiiiiiiiii:Ip,invoke_viiiij:Vp,invoke_viiij:_d,invoke_viij:Gp,invoke_viijii:Xp,invoke_vij:Pp,invoke_vijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj:gp,llvm_eh_typeid_for:Vf},Ti=await Ne();function rd(r,s,c){var l=H();try{return xe(r)(s,c)}catch(f){if(G(l),!(f instanceof T))throw f;_e(1,0)}}function sd(r,s,c,l){var f=H();try{xe(r)(s,c,l)}catch(g){if(G(f),!(g instanceof T))throw g;_e(1,0)}}function ad(r,s){var c=H();try{return xe(r)(s)}catch(l){if(G(c),!(l instanceof T))throw l;_e(1,0)}}function od(r,s){var c=H();try{xe(r)(s)}catch(l){if(G(c),!(l instanceof T))throw l;_e(1,0)}}function cd(r){var s=H();try{xe(r)()}catch(c){if(G(s),!(c instanceof T))throw c;_e(1,0)}}function ld(r,s,c,l){var f=H();try{return xe(r)(s,c,l)}catch(g){if(G(f),!(g instanceof T))throw g;_e(1,0)}}function ud(r,s,c,l,f,g){var M=H();try{xe(r)(s,c,l,f,g)}catch(w){if(G(M),!(w instanceof T))throw w;_e(1,0)}}function hd(r,s,c){var l=H();try{xe(r)(s,c)}catch(f){if(G(l),!(f instanceof T))throw f;_e(1,0)}}function fd(r,s,c,l,f,g){var M=H();try{return xe(r)(s,c,l,f,g)}catch(w){if(G(M),!(w instanceof T))throw w;_e(1,0)}}function dd(r){var s=H();try{return xe(r)()}catch(c){if(G(s),!(c instanceof T))throw c;_e(1,0)}}function pd(r,s,c,l,f,g,M){var w=H();try{xe(r)(s,c,l,f,g,M)}catch(L){if(G(w),!(L instanceof T))throw L;_e(1,0)}}function md(r,s,c,l,f){var g=H();try{xe(r)(s,c,l,f)}catch(M){if(G(g),!(M instanceof T))throw M;_e(1,0)}}function _d(r,s,c,l,f){var g=H();try{xe(r)(s,c,l,f)}catch(M){if(G(g),!(M instanceof T))throw M;_e(1,0)}}function gd(r,s,c,l,f){var g=H();try{return xe(r)(s,c,l,f)}catch(M){if(G(g),!(M instanceof T))throw M;_e(1,0)}}function vd(r,s,c,l){var f=H();try{return xe(r)(s,c,l)}catch(g){if(G(f),!(g instanceof T))throw g;_e(1,0)}}function xd(r,s,c,l,f,g,M,w){var L=H();try{xe(r)(s,c,l,f,g,M,w)}catch(W){if(G(L),!(W instanceof T))throw W;_e(1,0)}}function yd(r,s,c,l,f,g){var M=H();try{xe(r)(s,c,l,f,g)}catch(w){if(G(M),!(w instanceof T))throw w;_e(1,0)}}function Ed(r,s,c,l,f,g,M){var w=H();try{return xe(r)(s,c,l,f,g,M)}catch(L){if(G(w),!(L instanceof T))throw L;_e(1,0)}}function Sd(r,s,c,l,f,g,M){var w=H();try{xe(r)(s,c,l,f,g,M)}catch(L){if(G(w),!(L instanceof T))throw L;_e(1,0)}}function Md(r,s,c,l,f){var g=H();try{xe(r)(s,c,l,f)}catch(M){if(G(g),!(M instanceof T))throw M;_e(1,0)}}function Td(r,s,c,l,f,g,M,w,L,W,K,re,de){var ae=H();try{xe(r)(s,c,l,f,g,M,w,L,W,K,re,de)}catch(ge){if(G(ae),!(ge instanceof T))throw ge;_e(1,0)}}function wd(r,s,c,l,f,g,M,w,L,W){var K=H();try{return xe(r)(s,c,l,f,g,M,w,L,W)}catch(re){if(G(K),!(re instanceof T))throw re;_e(1,0)}}function bd(r,s,c,l,f,g,M,w,L,W,K,re,de){var ae=H();try{return xe(r)(s,c,l,f,g,M,w,L,W,K,re,de)}catch(ge){if(G(ae),!(ge instanceof T))throw ge;_e(1,0)}}function Ad(r,s,c,l,f,g,M){var w=H();try{return xe(r)(s,c,l,f,g,M)}catch(L){if(G(w),!(L instanceof T))throw L;_e(1,0)}}function Rd(r,s,c,l,f,g,M,w,L,W,K,re){var de=H();try{xe(r)(s,c,l,f,g,M,w,L,W,K,re)}catch(ae){if(G(de),!(ae instanceof T))throw ae;_e(1,0)}}function Cd(r,s,c,l,f,g){var M=H();try{xe(r)(s,c,l,f,g)}catch(w){if(G(M),!(w instanceof T))throw w;_e(1,0)}}function Pd(r,s,c,l,f,g,M,w,L){var W=H();try{xe(r)(s,c,l,f,g,M,w,L)}catch(K){if(G(W),!(K instanceof T))throw K;_e(1,0)}}function Dd(r,s,c,l,f,g,M,w,L,W,K,re,de,ae,ge,qe,ht,ft,Ft,St,Jt,Gt){var tn=H();try{return xe(r)(s,c,l,f,g,M,w,L,W,K,re,de,ae,ge,qe,ht,ft,Ft,St,Jt,Gt)}catch(Lt){if(G(tn),!(Lt instanceof T))throw Lt;_e(1,0)}}function Ld(r,s,c,l,f,g,M,w,L,W,K,re){var de=H();try{return xe(r)(s,c,l,f,g,M,w,L,W,K,re)}catch(ae){if(G(de),!(ae instanceof T))throw ae;_e(1,0)}}function Fd(r,s,c,l,f,g,M){var w=H();try{return xe(r)(s,c,l,f,g,M)}catch(L){if(G(w),!(L instanceof T))throw L;_e(1,0)}}function Id(r,s,c,l,f,g,M,w,L,W,K,re){var de=H();try{return xe(r)(s,c,l,f,g,M,w,L,W,K,re)}catch(ae){if(G(de),!(ae instanceof T))throw ae;_e(1,0)}}function Ud(r,s,c,l,f,g){var M=H();try{return xe(r)(s,c,l,f,g)}catch(w){if(G(M),!(w instanceof T))throw w;_e(1,0)}}function Nd(r,s,c,l,f,g,M,w,L,W){var K=H();try{return xe(r)(s,c,l,f,g,M,w,L,W)}catch(re){if(G(K),!(re instanceof T))throw re;_e(1,0)}}function Od(r,s,c,l){var f=H();try{return xe(r)(s,c,l)}catch(g){if(G(f),!(g instanceof T))throw g;_e(1,0)}}function kd(r,s,c){var l=H();try{return xe(r)(s,c)}catch(f){if(G(l),!(f instanceof T))throw f;_e(1,0)}}function Bd(r,s,c,l,f,g){var M=H();try{xe(r)(s,c,l,f,g)}catch(w){if(G(M),!(w instanceof T))throw w;_e(1,0)}}function zd(r,s,c,l,f){var g=H();try{xe(r)(s,c,l,f)}catch(M){if(G(g),!(M instanceof T))throw M;_e(1,0)}}function Hd(r,s,c,l){var f=H();try{xe(r)(s,c,l)}catch(g){if(G(f),!(g instanceof T))throw g;_e(1,0)}}function Vd(r,s,c,l,f,g,M,w,L){var W=H();try{xe(r)(s,c,l,f,g,M,w,L)}catch(K){if(G(W),!(K instanceof T))throw K;_e(1,0)}}function Gd(r,s,c,l,f,g,M,w,L){var W=H();try{return xe(r)(s,c,l,f,g,M,w,L)}catch(K){if(G(W),!(K instanceof T))throw K;_e(1,0)}}function Wd(r,s,c,l,f,g,M){var w=H();try{return xe(r)(s,c,l,f,g,M)}catch(L){if(G(w),!(L instanceof T))throw L;_e(1,0)}}function Xd(r,s,c,l){var f=H();try{xe(r)(s,c,l)}catch(g){if(G(f),!(g instanceof T))throw g;_e(1,0)}}function $d(r,s,c,l,f){var g=H();try{return xe(r)(s,c,l,f)}catch(M){if(G(g),!(M instanceof T))throw M;_e(1,0)}}function jd(r,s,c,l,f){var g=H();try{return xe(r)(s,c,l,f)}catch(M){if(G(g),!(M instanceof T))throw M;_e(1,0)}}function qd(r,s,c,l){var f=H();try{return xe(r)(s,c,l)}catch(g){if(G(f),!(g instanceof T))throw g;_e(1,0)}}function Yd(r,s,c,l,f,g){var M=H();try{return xe(r)(s,c,l,f,g)}catch(w){if(G(M),!(w instanceof T))throw w;_e(1,0)}}function Kd(r,s){var c=H();try{return xe(r)(s)}catch(l){if(G(c),!(l instanceof T))throw l;_e(1,0)}}function Zd(r,s,c,l,f,g,M,w){var L=H();try{return xe(r)(s,c,l,f,g,M,w)}catch(W){if(G(L),!(W instanceof T))throw W;_e(1,0)}}function Jd(r,s,c,l,f,g,M){var w=H();try{xe(r)(s,c,l,f,g,M)}catch(L){if(G(w),!(L instanceof T))throw L;_e(1,0)}}function Qd(r,s,c,l,f,g,M,w,L,W,K,re){var de=H();try{return xe(r)(s,c,l,f,g,M,w,L,W,K,re)}catch(ae){if(G(de),!(ae instanceof T))throw ae;_e(1,0)}}function ep(r,s,c,l,f,g,M,w,L,W,K,re,de,ae,ge,qe,ht,ft,Ft,St,Jt,Gt,tn){var Lt=H();try{xe(r)(s,c,l,f,g,M,w,L,W,K,re,de,ae,ge,qe,ht,ft,Ft,St,Jt,Gt,tn)}catch(ti){if(G(Lt),!(ti instanceof T))throw ti;_e(1,0)}}function tp(r,s,c,l,f,g,M,w,L,W,K,re,de){var ae=H();try{xe(r)(s,c,l,f,g,M,w,L,W,K,re,de)}catch(ge){if(G(ae),!(ge instanceof T))throw ge;_e(1,0)}}function np(r,s,c,l,f,g,M,w){var L=H();try{xe(r)(s,c,l,f,g,M,w)}catch(W){if(G(L),!(W instanceof T))throw W;_e(1,0)}}function ip(r,s,c,l,f,g,M,w,L,W,K,re,de){var ae=H();try{xe(r)(s,c,l,f,g,M,w,L,W,K,re,de)}catch(ge){if(G(ae),!(ge instanceof T))throw ge;_e(1,0)}}function rp(r,s,c,l,f,g,M){var w=H();try{xe(r)(s,c,l,f,g,M)}catch(L){if(G(w),!(L instanceof T))throw L;_e(1,0)}}function sp(r,s,c,l,f,g,M,w,L,W,K){var re=H();try{xe(r)(s,c,l,f,g,M,w,L,W,K)}catch(de){if(G(re),!(de instanceof T))throw de;_e(1,0)}}function ap(r,s,c,l,f,g,M,w){var L=H();try{return xe(r)(s,c,l,f,g,M,w)}catch(W){if(G(L),!(W instanceof T))throw W;_e(1,0)}}function op(r,s,c){var l=H();try{return xe(r)(s,c)}catch(f){if(G(l),!(f instanceof T))throw f;_e(1,0)}}function cp(r,s,c){var l=H();try{xe(r)(s,c)}catch(f){if(G(l),!(f instanceof T))throw f;_e(1,0)}}function lp(r,s,c,l,f,g,M){var w=H();try{return xe(r)(s,c,l,f,g,M)}catch(L){if(G(w),!(L instanceof T))throw L;_e(1,0)}}function up(r,s){var c=H();try{return xe(r)(s)}catch(l){if(G(c),!(l instanceof T))throw l;_e(1,0)}}function hp(r,s,c,l,f,g,M,w,L,W,K){var re=H();try{return xe(r)(s,c,l,f,g,M,w,L,W,K)}catch(de){if(G(re),!(de instanceof T))throw de;_e(1,0)}}function fp(r,s,c,l){var f=H();try{return xe(r)(s,c,l)}catch(g){if(G(f),!(g instanceof T))throw g;_e(1,0)}}function dp(r,s,c,l,f,g,M,w,L,W){var K=H();try{return xe(r)(s,c,l,f,g,M,w,L,W)}catch(re){if(G(K),!(re instanceof T))throw re;_e(1,0)}}function pp(r,s,c,l){var f=H();try{return xe(r)(s,c,l)}catch(g){if(G(f),!(g instanceof T))throw g;_e(1,0)}}function mp(r,s,c,l,f,g){var M=H();try{return xe(r)(s,c,l,f,g)}catch(w){if(G(M),!(w instanceof T))throw w;_e(1,0)}}function _p(r,s,c,l,f){var g=H();try{return xe(r)(s,c,l,f)}catch(M){if(G(g),!(M instanceof T))throw M;return _e(1,0),0n}}function gp(r,s,c,l,f,g,M,w,L,W,K,re,de,ae,ge,qe,ht,ft,Ft,St,Jt,Gt,tn,Lt,ti,ls,Jp,Qp,em,tm,nm,im,rm,sm,am,om,cm,lm,um,hm,fm,dm,pm,mm,_m,gm,vm,xm,ym,Em,Sm,Mm,Tm,wm,bm,Am,Rm,Cm,Pm,Dm,Lm,Fm,Im,Um,Nm,Om,km,Bm,zm,Hm,Vm,Gm,Wm,Xm,$m,jm,qm,Ym,Km,Zm,Jm,Qm,e_,t_,n_,i_){var r_=H();try{xe(r)(s,c,l,f,g,M,w,L,W,K,re,de,ae,ge,qe,ht,ft,Ft,St,Jt,Gt,tn,Lt,ti,ls,Jp,Qp,em,tm,nm,im,rm,sm,am,om,cm,lm,um,hm,fm,dm,pm,mm,_m,gm,vm,xm,ym,Em,Sm,Mm,Tm,wm,bm,Am,Rm,Cm,Pm,Dm,Lm,Fm,Im,Um,Nm,Om,km,Bm,zm,Hm,Vm,Gm,Wm,Xm,$m,jm,qm,Ym,Km,Zm,Jm,Qm,e_,t_,n_,i_)}catch(el){if(G(r_),!(el instanceof T))throw el;_e(1,0)}}function vp(r,s,c,l,f){var g=H();try{xe(r)(s,c,l,f)}catch(M){if(G(g),!(M instanceof T))throw M;_e(1,0)}}function xp(r,s,c,l,f,g){var M=H();try{xe(r)(s,c,l,f,g)}catch(w){if(G(M),!(w instanceof T))throw w;_e(1,0)}}function yp(r,s,c,l,f,g,M,w){var L=H();try{xe(r)(s,c,l,f,g,M,w)}catch(W){if(G(L),!(W instanceof T))throw W;_e(1,0)}}function Ep(r,s,c,l,f,g){var M=H();try{xe(r)(s,c,l,f,g)}catch(w){if(G(M),!(w instanceof T))throw w;_e(1,0)}}function Sp(r,s,c,l,f,g,M,w){var L=H();try{xe(r)(s,c,l,f,g,M,w)}catch(W){if(G(L),!(W instanceof T))throw W;_e(1,0)}}function Mp(r,s,c,l,f,g){var M=H();try{xe(r)(s,c,l,f,g)}catch(w){if(G(M),!(w instanceof T))throw w;_e(1,0)}}function Tp(r,s,c,l,f,g){var M=H();try{return xe(r)(s,c,l,f,g)}catch(w){if(G(M),!(w instanceof T))throw w;_e(1,0)}}function wp(r,s,c,l,f,g,M,w,L,W){var K=H();try{return xe(r)(s,c,l,f,g,M,w,L,W)}catch(re){if(G(K),!(re instanceof T))throw re;_e(1,0)}}function bp(r,s,c,l,f,g,M,w,L,W){var K=H();try{xe(r)(s,c,l,f,g,M,w,L,W)}catch(re){if(G(K),!(re instanceof T))throw re;_e(1,0)}}function Ap(r,s,c,l){var f=H();try{return xe(r)(s,c,l)}catch(g){if(G(f),!(g instanceof T))throw g;_e(1,0)}}function Rp(r,s,c,l,f,g,M,w,L,W,K,re,de){var ae=H();try{return xe(r)(s,c,l,f,g,M,w,L,W,K,re,de)}catch(ge){if(G(ae),!(ge instanceof T))throw ge;_e(1,0)}}function Cp(r,s,c){var l=H();try{return xe(r)(s,c)}catch(f){if(G(l),!(f instanceof T))throw f;return _e(1,0),0n}}function Pp(r,s,c){var l=H();try{xe(r)(s,c)}catch(f){if(G(l),!(f instanceof T))throw f;_e(1,0)}}function Dp(r,s,c,l,f,g,M,w,L,W,K,re,de,ae){var ge=H();try{xe(r)(s,c,l,f,g,M,w,L,W,K,re,de,ae)}catch(qe){if(G(ge),!(qe instanceof T))throw qe;_e(1,0)}}function Lp(r,s,c,l,f,g,M,w,L,W,K,re,de,ae,ge){var qe=H();try{xe(r)(s,c,l,f,g,M,w,L,W,K,re,de,ae,ge)}catch(ht){if(G(qe),!(ht instanceof T))throw ht;_e(1,0)}}function Fp(r,s,c,l,f,g,M,w,L,W,K){var re=H();try{xe(r)(s,c,l,f,g,M,w,L,W,K)}catch(de){if(G(re),!(de instanceof T))throw de;_e(1,0)}}function Ip(r,s,c,l,f,g,M,w,L,W,K,re,de,ae,ge,qe,ht,ft,Ft){var St=H();try{xe(r)(s,c,l,f,g,M,w,L,W,K,re,de,ae,ge,qe,ht,ft,Ft)}catch(Jt){if(G(St),!(Jt instanceof T))throw Jt;_e(1,0)}}function Up(r,s){var c=H();try{return xe(r)(s)}catch(l){if(G(c),!(l instanceof T))throw l;return _e(1,0),0n}}function Np(r,s,c,l,f,g,M,w,L,W,K,re){var de=H();try{xe(r)(s,c,l,f,g,M,w,L,W,K,re)}catch(ae){if(G(de),!(ae instanceof T))throw ae;_e(1,0)}}function Op(r,s,c,l,f,g,M,w,L,W){var K=H();try{return xe(r)(s,c,l,f,g,M,w,L,W)}catch(re){if(G(K),!(re instanceof T))throw re;_e(1,0)}}function kp(r,s,c){var l=H();try{return xe(r)(s,c)}catch(f){if(G(l),!(f instanceof T))throw f;_e(1,0)}}function Bp(r,s,c,l,f,g,M){var w=H();try{xe(r)(s,c,l,f,g,M)}catch(L){if(G(w),!(L instanceof T))throw L;_e(1,0)}}function zp(r,s,c,l,f,g,M){var w=H();try{xe(r)(s,c,l,f,g,M)}catch(L){if(G(w),!(L instanceof T))throw L;_e(1,0)}}function Hp(r,s,c){var l=H();try{xe(r)(s,c)}catch(f){if(G(l),!(f instanceof T))throw f;_e(1,0)}}function Vp(r,s,c,l,f,g){var M=H();try{xe(r)(s,c,l,f,g)}catch(w){if(G(M),!(w instanceof T))throw w;_e(1,0)}}function Gp(r,s,c,l){var f=H();try{xe(r)(s,c,l)}catch(g){if(G(f),!(g instanceof T))throw g;_e(1,0)}}function Wp(r){var s=H();try{return xe(r)()}catch(c){if(G(s),!(c instanceof T))throw c;return _e(1,0),0n}}function Xp(r,s,c,l,f,g){var M=H();try{xe(r)(s,c,l,f,g)}catch(w){if(G(M),!(w instanceof T))throw w;_e(1,0)}}function $p(r,s,c,l){var f=H();try{return xe(r)(s,c,l)}catch(g){if(G(f),!(g instanceof T))throw g;_e(1,0)}}function jp(r,s,c,l,f,g,M,w,L,W,K,re){var de=H();try{return xe(r)(s,c,l,f,g,M,w,L,W,K,re)}catch(ae){if(G(de),!(ae instanceof T))throw ae;_e(1,0)}}function qp(r,s,c,l,f,g,M,w,L,W,K,re,de,ae,ge,qe){var ht=H();try{xe(r)(s,c,l,f,g,M,w,L,W,K,re,de,ae,ge,qe)}catch(ft){if(G(ht),!(ft instanceof T))throw ft;_e(1,0)}}var Kc;function Yp(){Vc(),q()}function ga(){if(Se>0){We=ga;return}if(Yp(),Ye(),Se>0){We=ga;return}function r(){var s;D(!Kc),Kc=!0,t.calledRun=!0,!k&&(Ae(),Le==null||Le(t),(s=t.onRuntimeInitialized)==null||s.call(t),ee("onRuntimeInitialized"),D(!t._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),it())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),r()},1)):r(),P()}function Kp(){var r=O,s=I,c=!1;O=I=l=>{c=!0};try{pa(0),["stdout","stderr"].forEach(l=>{var L;var f=S.analyzePath("/dev/"+l);if(f){var g=f.object,M=g.rdev,w=Ie.ttys[M];(L=w==null?void 0:w.output)!=null&&L.length&&(c=!0)}})}catch{}O=r,I=s,c&&Oe("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}function Zp(){if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();ee("preInit")}Zp(),ga(),Ve?e=t:e=new Promise((r,s)=>{Le=r,He=s});for(const r of Object.keys(t))r in i||Object.defineProperty(i,r,{configurable:!0,get(){X(`Access to module property ('${r}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return e},mn=Uint8Array,cr=Uint16Array,kE=Int32Array,Vu=new mn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Gu=new mn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),BE=new mn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Wu=function(i,e){for(var t=new cr(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var a=new kE(t[30]),n=1;n<30;++n)for(var o=t[n];o<t[n+1];++o)a[o]=o-t[n]<<5|n;return{b:t,r:a}},Xu=Wu(Vu,2),$u=Xu.b,zE=Xu.r;$u[28]=258,zE[258]=28;var HE=Wu(Gu,0),VE=HE.b,qo=new cr(32768);for(var Ut=0;Ut<32768;++Ut){var ci=(Ut&43690)>>1|(Ut&21845)<<1;ci=(ci&52428)>>2|(ci&13107)<<2,ci=(ci&61680)>>4|(ci&3855)<<4,qo[Ut]=((ci&65280)>>8|(ci&255)<<8)>>1}var Lr=function(i,e,t){for(var n=i.length,a=0,o=new cr(e);a<n;++a)i[a]&&++o[i[a]-1];var u=new cr(e);for(a=1;a<e;++a)u[a]=u[a-1]+o[a-1]<<1;var h;if(t){h=new cr(1<<e);var p=15-e;for(a=0;a<n;++a)if(i[a])for(var d=a<<4|i[a],v=e-i[a],m=u[i[a]-1]++<<v,x=m|(1<<v)-1;m<=x;++m)h[qo[m]>>p]=d}else for(h=new cr(n),a=0;a<n;++a)i[a]&&(h[a]=qo[u[i[a]-1]++]>>15-i[a]);return h},Gr=new mn(288);for(var Ut=0;Ut<144;++Ut)Gr[Ut]=8;for(var Ut=144;Ut<256;++Ut)Gr[Ut]=9;for(var Ut=256;Ut<280;++Ut)Gr[Ut]=7;for(var Ut=280;Ut<288;++Ut)Gr[Ut]=8;var ju=new mn(32);for(var Ut=0;Ut<32;++Ut)ju[Ut]=5;var GE=Lr(Gr,9,1),WE=Lr(ju,5,1),Za=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Rn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Ja=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},XE=function(i){return(i+7)/8|0},uc=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new mn(i.subarray(e,t))},$E=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],dn=function(i,e,t){var n=new Error(e||$E[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,dn),!t)throw n;return n},jE=function(i,e,t,n){var a=i.length,o=n?n.length:0;if(!a||e.f&&!e.l)return t||new mn(0);var u=!t,h=u||e.i!=2,p=e.i;u&&(t=new mn(a*3));var d=function(he){var Ue=t.length;if(he>Ue){var U=new mn(Math.max(Ue*2,he));U.set(t),t=U}},v=e.f||0,m=e.p||0,x=e.b||0,y=e.l,A=e.d,R=e.m,E=e.n,_=a*8;do{if(!y){v=Rn(i,m,1);var O=Rn(i,m+1,3);if(m+=3,O)if(O==1)y=GE,A=WE,R=9,E=5;else if(O==2){var D=Rn(i,m,31)+257,z=Rn(i,m+10,15)+4,q=D+Rn(i,m+5,31)+1;m+=14;for(var P=new mn(q),T=new mn(19),B=0;B<z;++B)T[BE[B]]=Rn(i,m+B*3,7);m+=z*3;for(var Y=Za(T),ee=(1<<Y)-1,Z=Lr(T,Y,1),B=0;B<q;){var oe=Z[Rn(i,m,ee)];m+=oe&15;var I=oe>>4;if(I<16)P[B++]=I;else{var ie=0,ve=0;for(I==16?(ve=3+Rn(i,m,3),m+=2,ie=P[B-1]):I==17?(ve=3+Rn(i,m,7),m+=3):I==18&&(ve=11+Rn(i,m,127),m+=7);ve--;)P[B++]=ie}}var ne=P.subarray(0,D),me=P.subarray(D);R=Za(ne),E=Za(me),y=Lr(ne,R,1),A=Lr(me,E,1)}else dn(1);else{var I=XE(m)+4,F=i[I-4]|i[I-3]<<8,k=I+F;if(k>a){p&&dn(0);break}h&&d(x+F),t.set(i.subarray(I,k),x),e.b=x+=F,e.p=m=k*8,e.f=v;continue}if(m>_){p&&dn(0);break}}h&&d(x+131072);for(var be=(1<<R)-1,Le=(1<<E)-1,He=m;;He=m){var ie=y[Ja(i,m)&be],Qe=ie>>4;if(m+=ie&15,m>_){p&&dn(0);break}if(ie||dn(2),Qe<256)t[x++]=Qe;else if(Qe==256){He=m,y=null;break}else{var Je=Qe-254;if(Qe>264){var B=Qe-257,nt=Vu[B];Je=Rn(i,m,(1<<nt)-1)+$u[B],m+=nt}var le=A[Ja(i,m)&Le],fe=le>>4;le||dn(3),m+=le&15;var me=VE[fe];if(fe>3){var nt=Gu[fe];me+=Ja(i,m)&(1<<nt)-1,m+=nt}if(m>_){p&&dn(0);break}h&&d(x+131072);var ce=x+Je;if(x<me){var ye=o-me,Be=Math.min(me,ce);for(ye+x<0&&dn(3);x<Be;++x)t[x]=n[ye+x]}for(;x<ce;++x)t[x]=t[x-me]}}e.l=y,e.p=He,e.b=x,e.f=v,y&&(v=1,e.m=R,e.d=A,e.n=E)}while(!v);return x!=t.length&&u?uc(t,0,x):t.subarray(0,x)},qE=new mn(0),Bn=function(i,e){return i[e]|i[e+1]<<8},vn=function(i,e){return(i[e]|i[e+1]<<8|i[e+2]<<16|i[e+3]<<24)>>>0},Qa=function(i,e){return vn(i,e)+vn(i,e+4)*4294967296};function YE(i,e){return jE(i,{i:2},e&&e.out,e&&e.dictionary)}var Yo=typeof TextDecoder<"u"&&new TextDecoder,KE=0;try{Yo.decode(qE,{stream:!0}),KE=1}catch{}var ZE=function(i){for(var e="",t=0;;){var n=i[t++],a=(n>127)+(n>223)+(n>239);if(t+a>i.length)return{s:e,r:uc(i,t-1)};a?a==3?(n=((n&15)<<18|(i[t++]&63)<<12|(i[t++]&63)<<6|i[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):a&1?e+=String.fromCharCode((n&31)<<6|i[t++]&63):e+=String.fromCharCode((n&15)<<12|(i[t++]&63)<<6|i[t++]&63):e+=String.fromCharCode(n)}};function JE(i,e){if(e){for(var t="",n=0;n<i.length;n+=16384)t+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return t}else{if(Yo)return Yo.decode(i);var a=ZE(i),o=a.s,t=a.r;return t.length&&dn(8),o}}var QE=function(i,e){return e+30+Bn(i,e+26)+Bn(i,e+28)},eS=function(i,e,t){var n=Bn(i,e+28),a=Bn(i,e+30),o=JE(i.subarray(e+46,e+46+n),!(Bn(i,e+8)&2048)),u=e+46+n,h=tS(i,u,a,t,vn(i,e+20),vn(i,e+24),vn(i,e+42)),p=h[0],d=h[1],v=h[2];return[Bn(i,e+10),p,d,o,u+a+Bn(i,e+32),v]},tS=function(i,e,t,n,a,o,u){var h=a==4294967295,p=o==4294967295,d=u==4294967295,v=e+t,m=h+p+d;if(n&&m){for(;e+4<v;e+=4+Bn(i,e+2))if(Bn(i,e)==1)return[h?Qa(i,e+4+8*p):a,p?Qa(i,e+4):o,d?Qa(i,e+4+8*(p+h)):u,1];n<2&&dn(13)}return[a,o,u,0]};function nS(i,e){for(var t={},n=i.length-22;vn(i,n)!=101010256;--n)(!n||i.length-n>65558)&&dn(13);var a=Bn(i,n+8);if(!a)return{};var o=vn(i,n+16),u=vn(i,n-20)==117853008;if(u){var h=vn(i,n-12);u=vn(i,h)==101075792,u&&(a=vn(i,h+32),o=vn(i,h+48))}for(var p=0;p<a;++p){var d=eS(i,o,u),v=d[0],m=d[1],x=d[2],y=d[3],A=d[4],R=d[5],E=QE(i,R);o=A,v?v==8?t[y]=YE(i.subarray(E,E+m),{out:new mn(x)}):dn(14,"unknown compression type "+v):t[y]=uc(i,E,E+m)}return t}function iS(i){var E,_;if(i.length<12||String.fromCharCode(...i.subarray(0,6))!=="NUMPY")throw new Error("NPZ 中包含无效的 NPY 数组");const e=new DataView(i.buffer,i.byteOffset,i.byteLength),t=i[6],n=t===1?e.getUint16(8,!0):e.getUint32(8,!0),a=t===1?10:12,o=new TextDecoder(t===3?"utf-8":"latin1").decode(i.subarray(a,a+n)),u=(E=/['"]descr['"]\s*:\s*['"]([^'"]+)['"]/.exec(o))==null?void 0:E[1],h=(_=/['"]shape['"]\s*:\s*\(([^)]*)\)/.exec(o))==null?void 0:_[1];if(!u||h==null||/['"]fortran_order['"]\s*:\s*True/.test(o))throw new Error("不支持的 NPY 数组布局");const p=h.split(",").map(O=>O.trim()).filter(Boolean).map(Number);if(p.some(O=>!Number.isSafeInteger(O)||O<0))throw new Error("NPY 数组形状无效");const d=p.reduce((O,I)=>O*I,1),v=u.slice(1),m=u[0]!==">",y={f4:4,f8:8,i4:4,i8:8,u4:4,u8:8}[v];if(!y||a+n+d*y>i.length)throw new Error(`不支持或损坏的 NPY 数值类型：${u}`);const A=a+n,R=new Float64Array(d);for(let O=0;O<d;O++){const I=A+O*y;v==="f4"?R[O]=e.getFloat32(I,m):v==="f8"?R[O]=e.getFloat64(I,m):v==="i4"?R[O]=e.getInt32(I,m):v==="u4"?R[O]=e.getUint32(I,m):v==="i8"?R[O]=Number(e.getBigInt64(I,m)):R[O]=Number(e.getBigUint64(I,m))}return{shape:p,numbers:R}}function eo(i,e){return i.length===e.length&&i.every((t,n)=>e[n]==null||t===e[n])}function ou(i,e,t){var R;const n=nS(new Uint8Array(i)),a=E=>n[`${E}.npy`]?iS(n[`${E}.npy`]):null,o=a("fps"),u=o==null?void 0:o.numbers[0];if(!Number.isFinite(u)||u<=0||u>1e3)throw new Error("NPZ 缺少有效的 fps");const h=n["body_pos_w.npy"]&&n["body_quat_w.npy"]&&n["joint_pos.npy"],p=n["body_positions.npy"]&&n["body_rotations.npy"]&&n["dof_positions.npy"];if(!h&&!p)throw new Error("仅支持 S17 tracking 或当前数据集的 raw retarget NPZ");const d=a(h?"body_pos_w":"body_positions"),v=a(h?"body_quat_w":"body_rotations"),m=a(h?"joint_pos":"dof_positions"),x=d.shape[0],y=d.shape[1];if(!Number.isSafeInteger(x)||x<1||x>1e5||!eo(d.shape,[x,y,3])||!eo(v.shape,[x,y,4])||!eo(m.shape,[x,21])||p&&y!==22||((R=e.joint_qposadr)==null?void 0:R.length)!==21)throw new Error("NPZ 帧数、底座或 21 个关节的形状不符合 S17 模型");const A=new Float32Array(x*e.nq);for(let E=0;E<x;E++){const _=E*e.nq;A.set(t,_);const O=E*y*3,I=E*y*4;for(let k=0;k<3;k++)A[_+e.root_qposadr+k]=d.numbers[O+k];const F=Math.hypot(...v.numbers.subarray(I,I+4));if(!Number.isFinite(F)||F<1e-6)throw new Error(`第 ${E+1} 帧四元数无效`);for(let k=0;k<4;k++)A[_+e.root_qposadr+3+k]=v.numbers[I+k]/F;for(let k=0;k<21;k++)A[_+e.joint_qposadr[k]]=m.numbers[E*21+k]}if(!A.every(Number.isFinite))throw new Error("NPZ 中存在 NaN 或无限大数值");return{frames:A,count:x,fps:u}}const Us=9.81,rS=.8;function sS(i){return Math.max(0,Math.min(1,i))}async function aS(i,e,t,n,a){const o=new i.MjData(e),u=new Set(t.foot_body_ids),h=Math.max(2,Math.round(n.fps*.08)),p=n.count-h*2;if(p<1)return o.delete(),null;const d=Math.min(120,p),v=e.body_mass.reduce((k,D)=>k+D,0);let m=0,x=0,y=0,A=0,R=0;function E(k){o.qpos.set(n.frames.subarray(k*t.nq,(k+1)*t.nq)),i.mj_forward(e,o);const D=[0,0,0];for(let z=1;z<e.nbody;z++){const q=e.body_mass[z];for(let P=0;P<3;P++)D[P]+=q*o.xipos[z*3+P]}return D.map(z=>z/v)}try{for(let k=0;k<d;k++){if(a())return null;const D=h+Math.floor(k*p/d),z=E(D-h),q=t.foot_body_ids.map(me=>[o.xpos[me*3],o.xpos[me*3+1]]),P=E(D+h),T=t.foot_body_ids.map(me=>[o.xpos[me*3],o.xpos[me*3+1]]),B=E(D),Y=h/n.fps,ee=B.map((me,be)=>(z[be]-2*me+P[be])/(Y*Y)),Z=new Set;let oe=0;const ie=o.contact;for(let me=0;me<ie.size();me++){const be=ie.get(me),[Le,He]=be.geom,Qe=Le===t.floor_geom_id?He:He===t.floor_geom_id?Le:-1;Qe>=0&&u.has(e.geom_bodyid[Qe])&&(Z.add(e.geom_bodyid[Qe]),oe=Math.max(oe,-be.dist)),be.delete()}ie.delete();const ve=Math.hypot(ee[0],ee[1]),ne=ee[2]+Us;if(Z.size){const me=Math.max(0,ne),be=Math.max(0,-ne)/Us,Le=Math.max(0,ve-rS*me)/Us;m+=Math.exp(-be-Le);let He=0;for(const Qe of Z){const Je=t.foot_body_ids.indexOf(Qe);He=Math.max(He,Math.hypot(T[Je][0]-q[Je][0],T[Je][1]-q[Je][1])/(2*Y))}R=Math.max(R,He),x+=Math.exp(-Math.max(0,He-.08)/.5),A++}else m+=Math.exp(-Math.hypot(ve,ne)/Us),x+=1;y+=Math.exp(-Math.max(0,oe-.005)/.04),k%12===11&&await new Promise(me=>setTimeout(me,0))}}finally{o.delete()}const _=m/d,O=x/d,I=y/d;return{score:Math.round(100*sS(.65*_+.25*O+.1*I)),sampleCount:d,force:_,slip:O,penetration:I,contactSamples:A,worstSlip:R}}const Xs=document.querySelector("#status"),to=document.querySelector("#viewport"),nr=document.querySelector("#toggle"),no=document.querySelector("#prevFrame"),io=document.querySelector("#nextFrame"),ir=document.querySelector("#seek"),oS=document.querySelector("#time"),cS=document.querySelector("#frame"),rr=document.querySelector("#contactToggle"),Di=document.querySelector("#motionList"),li=document.querySelector("#libraryStatus"),Ns=document.querySelector("#baseHeight"),Os=document.querySelector("#credibility"),ks=document.querySelector("#credibilityScore");function lS(i){return new Promise((e,t)=>i.readEntries(e,t))}async function qu(i,e=""){if(i.isFile){const a=await new Promise((o,u)=>i.file(o,u));return a.name.toLowerCase().endsWith(".npz")?[{file:a,path:e+a.name}]:[]}if(!i.isDirectory)return[];const t=i.createReader(),n=[];for(;;){const a=await lS(t);if(!a.length)break;for(const o of a)n.push(...await qu(o,`${e}${i.name}/`))}return n}async function sr(i,e="arrayBuffer"){const t=await fetch(new URL(`./${i}`,document.baseURI));if(!t.ok)throw new Error(`${i}: HTTP ${t.status}`);return t[e]()}function uS(i,e){const t=i.mesh_vertadr[e]*3,n=i.mesh_vertnum[e],a=i.mesh_faceadr[e]*3,o=i.mesh_facenum[e],u=Float32Array.from(i.mesh_vert.subarray(t,t+n*3)),h=Uint32Array.from(i.mesh_face.subarray(a,a+o*3)),p=new Fn;return p.setAttribute("position",new En(u,3)),p.setIndex(new En(h,1)),p.computeVertexNormals(),p}function cu(i=""){return{name:i,folders:new Map,files:[]}}function hS(i){const e=cu();for(const t of i){const n=t.path.split("/").filter(Boolean);let a=e;for(const o of n.slice(0,-1))a.folders.has(o)||a.folders.set(o,cu(o)),a=a.folders.get(o);a.files.push(t)}return e}function Yu(i){return i.files.length+Array.from(i.folders.values()).reduce((e,t)=>e+Yu(t),0)}async function fS(){const i=await sr("motion/meta.json","json"),e=await sr("motion/frames.bin"),t=new Float32Array(e);if(t.length!==i.frames*i.nq)throw new Error("动作数据长度与元数据不一致");Xs.textContent="正在加载 MuJoCo WASM 与机器人模型…";const n=await OE();for(const he of["/working","/working/xml","/working/meshes"])n.FS.mkdir(he);const a=await sr("model/xml/scene_flat.xml","text"),o=await sr("model/xml/biped_s17.xml","text");n.FS.writeFile("/working/xml/scene_flat.xml",a),n.FS.writeFile("/working/xml/biped_s17.xml",o),await Promise.all(i.meshes.map(async he=>{const Ue=await sr(`model/meshes/${encodeURIComponent(he)}`);n.FS.writeFile(`/working/meshes/${he}`,new Uint8Array(Ue))}));const u=n.MjModel.mj_loadXML("/working/xml/scene_flat.xml"),h=new n.MjData(u);if(u.nq!==i.nq)throw new Error(`模型 nq=${u.nq}，动作 nq=${i.nq}`);const p=Float32Array.from(h.qpos),d=new Sg;d.background=new gt("#2d3a48"),d.add(new Pg(15135231,3820646,2));const v=new Fg(16777215,2.4);v.position.set(-2,-3,6),d.add(v);const m=new yn(new Vr(200,200),new Cl({color:4412771,roughness:1}));m.position.z=-.004,d.add(m);const x=new Ug(20,40,8956349,5796743);x.rotateX(Math.PI/2),x.position.z=.001,d.add(x);const y=new xn(45,1,.02,100);y.up.set(0,0,1),y.position.set(2.1,-2.8,1.8);const A=new xE({antialias:!0});A.setPixelRatio(Math.min(window.devicePixelRatio,2)),A.outputColorSpace=pn,to.appendChild(A.domElement);const R=new EE(y,A.domElement);R.target.set(0,0,.85),R.enableDamping=!0,R.update();const E=new at(0,0),_=()=>{const{width:he,height:Ue}=to.getBoundingClientRect();A.setSize(he,Ue,!1),y.aspect=he/Ue,y.updateProjectionMatrix()};new ResizeObserver(_).observe(to),_();const O=new Map,I=[],F=n.mjtGeom.mjGEOM_MESH.value;for(let he=0;he<u.ngeom;he++){if(u.geom_type[he]!==F||u.geom_group[he]!==1)continue;const Ue=u.geom_dataid[he];O.has(Ue)||O.set(Ue,uS(u,Ue));const U=Array.from(u.geom_rgba.subarray(he*4,he*4+4)),Ve=new Cl({color:new gt(U[0],U[1],U[2]),roughness:.65,metalness:.12,side:Cn}),Ge=new yn(O.get(Ue),Ve);d.add(Ge),I.push([he,Ge])}if(!I.length)throw new Error("模型没有可显示的 S17 网格");const k=new oc(.016,.016,.004,18);k.rotateX(Math.PI/2);const D=new sc({color:16767830,side:Cn}),z=[],q=new Set(i.foot_body_ids);let P=!0;function T(){for(const U of z)U.visible=!1;if(!P)return;const he=h.contact;let Ue=0;for(let U=0;U<he.size();U++){const Ve=he.get(U),[Ge,Ye]=Ve.geom,Ae=Ge===i.floor_geom_id?Ye:Ye===i.floor_geom_id?Ge:-1;if(Ae>=0&&q.has(u.geom_bodyid[Ae])){if(!z[Ue]){const Se=new yn(k,D);Se.renderOrder=2,d.add(Se),z.push(Se)}const it=Ve.pos;z[Ue].position.set(it[0],it[1],Math.max(.003,it[2]+.004)),z[Ue].visible=!0,Ue++}Ve.delete()}he.delete(),rr.textContent=`接触点：开 (C) · ${Ue}`}let B={frames:t,count:i.frames,fps:i.fps,name:i.source},Y=.77,ee=0,Z=0,oe=!1,ie=performance.now(),ve=0,ne=0;async function me(){const he=++ne,Ue=B;ks.textContent="…",Os.title="正在抽样评估动作…",await new Promise(U=>setTimeout(U,0));try{const U=await aS(n,u,i,Ue,()=>he!==ne);if(he!==ne)return;if(!U){ks.textContent="—",Os.title="动作太短，无法估计加速度";return}ks.textContent=`${U.score}%`,Os.title=`抽样 ${U.sampleCount} 帧 · 浮动机身受力 ${Math.round(U.force*100)}% · 脚底防滑 ${Math.round(U.slip*100)}% · 穿地检查 ${Math.round(U.penetration*100)}% · 接触帧 ${U.contactSamples}/${U.sampleCount}。仅供参考，非严格动力学验证。`}catch(U){if(he!==ne)return;console.error("动力学可信度评估失败",U),ks.textContent="—",Os.title=`评估失败：${U.message}`}}ir.max=String(B.count-1),ir.disabled=!1,nr.disabled=!1,no.disabled=!1,io.disabled=!1,rr.disabled=!1,Xs.textContent=`${B.name} · ${B.fps} FPS · ${I.length} 个网格`,Di.querySelector("[data-default]").textContent=`内置示例 · ${i.source}`;function be(){h.qpos.set(B.frames.subarray(Z*i.nq,(Z+1)*i.nq));const he=i.root_qposadr+2,Ue=Y-B.frames[he];h.qpos[he]+=Ue,n.mj_forward(u,h);const U=h.qpos[0]-E.x,Ve=h.qpos[1]-E.y;y.position.x+=U,y.position.y+=Ve,R.target.x+=U,R.target.y+=Ve,E.set(h.qpos[0],h.qpos[1]);const Ge=Ue-ee;y.position.z+=Ge,R.target.z+=Ge,ee=Ue;for(const[Ye,Ae]of I){const it=Ye*3,Se=Ye*9,We=h.geom_xpos,lt=h.geom_xmat;Ae.matrixAutoUpdate=!1,Ae.matrix.set(lt[Se],lt[Se+1],lt[Se+2],We[it],lt[Se+3],lt[Se+4],lt[Se+5],We[it+1],lt[Se+6],lt[Se+7],lt[Se+8],We[it+2],0,0,0,1),Ae.matrixWorldNeedsUpdate=!0}T(),ir.value=String(Z),oS.textContent=`${(Z/B.fps).toFixed(2)} / ${((B.count-1)/B.fps).toFixed(2)} s`,cS.textContent=`${Z+1} / ${B.count}`,no.disabled=Z===0,io.disabled=Z===B.count-1}function Le(he){oe=he,nr.classList.toggle("is-playing",oe),nr.setAttribute("aria-label",oe?"暂停（空格）":"播放（空格）"),nr.setAttribute("title",oe?"暂停（空格）":"播放（空格）"),nr.setAttribute("aria-pressed",String(oe)),ie=performance.now(),ve=0}function He(he){Le(!1),Z=Math.max(0,Math.min(B.count-1,Z+he)),be()}nr.addEventListener("click",()=>Le(!oe)),no.addEventListener("click",()=>He(-1)),io.addEventListener("click",()=>He(1)),rr.addEventListener("click",()=>{P=!P,rr.setAttribute("aria-pressed",String(P)),rr.textContent=P?"接触点：开 (C)":"接触点：关 (C)",T()}),Ns.addEventListener("change",()=>{const he=Number(Ns.value);if(!Ns.value||!Number.isFinite(he)||he<0||he>3){Ns.value=String(Y);return}Y=he,be()}),ir.addEventListener("input",()=>{Le(!1),Z=Number(ir.value),be()}),window.addEventListener("keydown",he=>{he.target instanceof HTMLInputElement||(he.code==="Space"&&(he.preventDefault(),he.repeat||Le(!oe)),he.code==="KeyC"&&rr.click(),(he.code==="ArrowRight"||he.code==="ArrowLeft")&&(he.preventDefault(),He(he.code==="ArrowRight"?1:-1)))});let Qe=0;function Je(he,Ue,U,Ve){B={...he,name:Ue},Z=0,ir.max=String(B.count-1),Xs.textContent=`${B.name} · ${B.fps} FPS · ${I.length} 个网格`,Di.querySelectorAll("button").forEach(Ge=>Ge.classList.remove("active")),U.classList.add("active"),be(),Le(!0),li.textContent=Ve,me()}async function nt(he,Ue){const U=++Qe;Le(!1),li.textContent=`正在读取 ${he.path}…`;try{const Ve=await ou(await he.file.arrayBuffer(),i,p);if(U!==Qe)return;Je(Ve,he.file.name,Ue,`已加载 ${Ve.count} 帧 · ${he.path}`)}catch(Ve){if(U!==Qe)return;console.error(Ve),li.textContent=`加载失败：${Ve.message}`}}function le(he){const Ue=he.filter(Ae=>Ae.file.name.toLowerCase().endsWith(".npz")).sort((Ae,it)=>Ae.path.localeCompare(it.path,"zh-CN"));Di.querySelectorAll("[data-local]").forEach(Ae=>Ae.remove());const U=(Ae,it)=>Ae.localeCompare(it,"zh-CN",{numeric:!0});function Ve(Ae,it){const Se=document.createElement("li"),We=document.createElement("button");return We.textContent=it.file.name,We.title=it.path,We.addEventListener("click",()=>nt(it,We)),Se.appendChild(We),Ae.appendChild(Se),Se}function Ge(Ae,it,Se){const We=document.createElement("li"),lt=document.createElement("details");lt.open=Se===0;const yt=document.createElement("summary");yt.append(document.createTextNode(it.name));const N=document.createElement("span");N.className="count",N.textContent=String(Yu(it)),yt.appendChild(N),lt.appendChild(yt);const b=document.createElement("ul");for(const X of Array.from(it.folders.values()).sort((se,pe)=>U(se.name,pe.name)))Ge(b,X,Se+1);for(const X of it.files.sort((se,pe)=>U(se.file.name,pe.file.name)))Ve(b,X);return lt.appendChild(b),We.appendChild(lt),Ae.appendChild(We),We}const Ye=hS(Ue);for(const Ae of Array.from(Ye.folders.values()).sort((it,Se)=>U(it.name,Se.name)))Ge(Di,Ae,0).dataset.local="true";for(const Ae of Ye.files.sort((it,Se)=>U(it.file.name,Se.file.name)))Ve(Di,Ae).dataset.local="true";li.textContent=Ue.length?`找到 ${Ue.length} 个 NPZ，点击文件名播放`:"没有找到 NPZ 文件"}const fe=document.querySelector("#fileInput"),ce=document.querySelector("#folderInput");document.querySelector("#chooseFiles").addEventListener("click",()=>fe.click()),document.querySelector("#chooseFolder").addEventListener("click",()=>ce.click());for(const he of[fe,ce])he.addEventListener("change",()=>{le(Array.from(he.files,Ue=>({file:Ue,path:Ue.webkitRelativePath||Ue.name}))),he.value=""});window.addEventListener("dragover",he=>{he.preventDefault(),document.body.classList.add("dragging")}),window.addEventListener("dragleave",he=>{he.relatedTarget||document.body.classList.remove("dragging")}),window.addEventListener("drop",async he=>{he.preventDefault(),document.body.classList.remove("dragging");const Ue=Array.from(he.dataTransfer.items,U=>{var Ve;return(Ve=U.webkitGetAsEntry)==null?void 0:Ve.call(U)}).filter(Boolean);if(!Ue.length){le(Array.from(he.dataTransfer.files,U=>({file:U,path:U.name})));return}li.textContent="正在扫描文件夹…";try{const U=(await Promise.all(Ue.map(Ve=>qu(Ve)))).flat();le(U)}catch(U){li.textContent=`读取文件夹失败：${U.message}`}}),Di.querySelector("[data-default]").addEventListener("click",he=>{Qe++,Je({frames:t,count:i.frames,fps:i.fps},i.source,he.currentTarget,"内置示例已就绪")});let ye;Di.querySelector("[data-flip]").addEventListener("click",async he=>{const Ue=he.currentTarget,U=++Qe;Le(!1),li.textContent="正在读取 roban_flip.npz…";try{ye??(ye=sr("motion/roban_flip.npz").then(Ge=>ou(Ge,i,p)));const Ve=await ye;if(U!==Qe)return;Je(Ve,"roban_flip.npz",Ue,`已加载 ${Ve.count} 帧 · 内置翻转示例`)}catch(Ve){if(ye=null,U!==Qe)return;console.error(Ve),li.textContent=`加载失败：${Ve.message}`}}),be(),Le(!0),me();function Be(he){if(requestAnimationFrame(Be),oe){ve+=Math.min((he-ie)/1e3,.25);const Ue=Math.floor(ve*B.fps);Ue&&(Z=(Z+Ue)%B.count,ve-=Ue/B.fps,be())}ie=he,R.update(),A.render(d,y)}requestAnimationFrame(Be)}fS().catch(i=>{console.error(i),Xs.textContent=`加载失败：${i.message}`});const dS=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));
